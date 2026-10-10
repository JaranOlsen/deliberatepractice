-- Server-verified AI history is independent of human progress ratings.
create table public.ai_practice_attempts (
 user_id uuid not null references auth.users(id) on delete cascade,
 attempt_id uuid not null, round_id uuid not null,
 language_id text not null check(language_id in ('en','no')),
 skill_id text not null, case_id text not null, difficulty text not null check(difficulty in ('easy','moderate','hard')),
 statement_id text not null, kind text not null check(kind in ('first','retry')),
 assessable boolean not null, score integer check(score between 1 and 5),
 strength text not null check(length(strength)<=500), adjustment text not null check(length(adjustment)<=500),
 limitation text not null check(length(limitation)<=500), model text not null, rubric text not null,
 content_revision text not null,delivery_strength text not null default '' check(length(delivery_strength)<=500),delivery_adjustment text not null default '' check(length(delivery_adjustment)<=500),delivery_model text not null default '', created_at timestamptz not null default now(),
 primary key(user_id,attempt_id),check((assessable and score is not null) or (not assessable and score is null))
);
create index ai_practice_history_owner on public.ai_practice_attempts(user_id,created_at desc);
alter table public.ai_practice_attempts enable row level security;
revoke all on public.ai_practice_attempts from public,anon,authenticated;
grant select,delete on public.ai_practice_attempts to authenticated;
grant all on public.ai_practice_attempts to service_role;
create policy "Read own AI history" on public.ai_practice_attempts for select to authenticated using(user_id=(select auth.uid()));
create policy "Delete own AI history" on public.ai_practice_attempts for delete to authenticated using(user_id=(select auth.uid()));

create table public.ai_service_limits(
 singleton boolean primary key default true check(singleton),enabled boolean not null default true,
 daily_cost_usd numeric(10,2) check(daily_cost_usd is null or daily_cost_usd>=1),
 failed_day integer not null default 20 check(failed_day between 1 and 1000),
 user_hour integer not null default 240 check(user_hour between 1 and 10000),
 admin_day integer not null default 200 check(admin_day between 1 and 10000),
 user_concurrent integer not null default 2 check(user_concurrent between 1 and 20),
 global_concurrent integer not null default 20 check(global_concurrent between 1 and 200)
);
insert into public.ai_service_limits default values;
alter table public.ai_service_limits enable row level security;
revoke all on public.ai_service_limits from public,anon,authenticated;
grant all on public.ai_service_limits to service_role;
create table public.ai_provider_usage(
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 action text not null check(action in ('assess','delivery','transcribe','speech_client','speech_supervisor')),
 model text not null check(length(model)<=150),outcome text not null check(outcome in ('success','failed')),
 error_code text check(length(error_code)<=64),duration_ms integer not null check(duration_ms>=0),
 input_tokens integer not null default 0 check(input_tokens>=0),output_tokens integer not null default 0 check(output_tokens>=0),
 audio_input_tokens integer not null default 0 check(audio_input_tokens>=0),cache_write_tokens integer not null default 0 check(cache_write_tokens>=0),cached_input_tokens integer not null default 0 check(cached_input_tokens>=0),
 cost_usd numeric(14,8),estimated boolean not null default false,created_at timestamptz not null default now()
);
create index ai_provider_usage_day on public.ai_provider_usage(created_at);
alter table public.ai_provider_usage enable row level security;
revoke all on public.ai_provider_usage from public,anon,authenticated;
grant all on public.ai_provider_usage to service_role;

create or replace function public.reserve_ai_call(input_user_id uuid) returns void
language plpgsql security invoker set search_path=pg_catalog as $$
declare hr timestamptz:=date_trunc('hour',now());dy timestamptz:=date_trunc('day',now());limits public.ai_service_limits;hour_calls integer;day_calls integer;admin boolean;
begin
 if not dp_private.ai_credit_eligible(input_user_id) then raise exception 'admin_required';end if;
 select * into limits from public.ai_service_limits where singleton;
 if not limits.enabled then raise exception 'not_configured';end if;
 perform pg_advisory_xact_lock(60261006);
 delete from public.ai_call_usage where bucket<dy-interval '2 days';
 select exists(select 1 from public.ai_admin_access where user_id=input_user_id) into admin;
 select coalesce(max(calls),0) into hour_calls from public.ai_call_usage where owner=input_user_id::text and window_kind='hour' and bucket=hr;
 select coalesce(max(calls),0) into day_calls from public.ai_call_usage where owner=input_user_id::text and window_kind='day' and bucket=dy;
 -- Paid users' daily financial allowance is their reserved credit balance.
 -- Unmetered admin access retains a daily cap. One user's funded activity no
 -- longer consumes a shared daily pilot allowance for everyone else.
 if (select count(*) from public.ai_provider_usage where user_id=input_user_id and outcome='failed' and created_at>=dy)>=limits.failed_day then raise exception 'usage_limit';end if;
 if limits.daily_cost_usd is not null and (select coalesce(sum(cost_usd),0) from public.ai_provider_usage where created_at>=dy)>=limits.daily_cost_usd then raise exception 'not_configured';end if;
 if hour_calls>=limits.user_hour or (admin and day_calls>=limits.admin_day) then raise exception 'usage_limit';end if;
 insert into public.ai_call_usage(owner,window_kind,bucket,calls) values(input_user_id::text,'hour',hr,1),(input_user_id::text,'day',dy,1)
 on conflict(owner,window_kind,bucket) do update set calls=public.ai_call_usage.calls+1;
end;$$;

create or replace function public.begin_ai_credit_operation(input_user_id uuid,input_attempt_id uuid,input_action text,input_signature text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare op public.ai_credit_operations;lot public.ai_credit_lots;token uuid:=gen_random_uuid();cost integer;needed integer;taken integer;admin boolean;limits public.ai_service_limits;
begin
 if input_action not in ('assess','delivery','transcribe','speech_client','speech_supervisor') or input_signature !~ '^[0-9a-f]{64}$' then raise exception 'invalid_attempt';end if;
 perform pg_advisory_xact_lock(60261006);
 perform dp_private.prepare_ai_credits(input_user_id);
 select exists(select 1 from public.ai_admin_access where user_id=input_user_id) into admin;
 if not admin and not (select ai_credits_enabled from public.app_public_config) then raise exception 'admin_required';end if;
 select * into op from public.ai_credit_operations where user_id=input_user_id and request_id=input_attempt_id and action=input_action;
 if found then
  if op.signature<>input_signature then raise exception 'attempt_conflict';end if;
  if op.state='complete' then
   if op.result_until<=now() or op.result is null then raise exception 'assessment_expired';end if;
   return jsonb_build_object('state','complete','result',op.result);
  end if;
  if op.state='reserved' then return jsonb_build_object('state','pending');end if;
 end if;
 select * into limits from public.ai_service_limits where singleton;
 if not limits.enabled then raise exception 'not_configured';end if;
 if (select count(*) from public.ai_credit_operations where user_id=input_user_id and state='reserved' and lease_until>now())>=limits.user_concurrent
 or (select count(*) from public.ai_credit_operations where state='reserved' and lease_until>now())>=limits.global_concurrent then raise exception 'service_busy';end if;
 cost:=case when admin then 0 when input_action='delivery' then 3 else 1 end;needed:=cost;
 if (select coalesce(sum(remaining),0) from public.ai_credit_lots l where user_id=input_user_id and dp_private.ai_credit_lot_available(l))<cost then raise exception 'credits_exhausted';end if;
 insert into public.ai_credit_operations(user_id,request_id,action,signature,cost,state,lease,lease_until)
 values(input_user_id,input_attempt_id,input_action,input_signature,cost,'reserved',token,now()+interval '90 seconds')
 on conflict(user_id,request_id,action) do update set cost=excluded.cost,state='reserved',lease=token,lease_until=excluded.lease_until;
 for lot in select * from public.ai_credit_lots l where user_id=input_user_id and dp_private.ai_credit_lot_available(l) and remaining>0 order by expires_at nulls last,created_at,id loop
  exit when needed=0;taken:=least(needed,lot.remaining);
  update public.ai_credit_lots set remaining=remaining-taken where id=lot.id;
  insert into public.ai_credit_allocations values(input_user_id,input_attempt_id,input_action,lot.id,taken);needed:=needed-taken;
 end loop;
 return jsonb_build_object('state','acquired','lease',token,'cost',cost);
end;
$$;

create or replace function public.finish_ai_credit_operation(input_user_id uuid,input_attempt_id uuid,input_action text,input_lease uuid,input_result jsonb) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
declare response jsonb;meta jsonb;r jsonb;
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||input_user_id::text,0));
 -- Synthetic speech/transcripts are transient replay data. Original recordings
 -- are never stored. The receipt and allocation survive removal of the result.
 if input_result is null or octet_length(input_result::text)>400000 then raise exception 'invalid_assessment';end if;
 update public.ai_credit_operations set state='complete',result=input_result,result_until=now()+interval '15 minutes'
 where user_id=input_user_id and request_id=input_attempt_id and action=input_action and lease=input_lease and state='reserved' and lease_until>now();
 if not found then return false;end if;
 -- This insert runs in the same transaction as settlement. The browser cannot
 -- submit a score or promote an unverified coached attempt to human progress.
 response:=input_result->'response';meta:=input_result->'history';r:=response->'result';
 if input_action='assess' and meta is not null and not exists(select 1 from public.ai_history_deleted_rounds where user_id=input_user_id and round_id=(meta->>'roundId')::uuid) then
  insert into public.ai_practice_attempts(user_id,attempt_id,round_id,language_id,skill_id,case_id,difficulty,statement_id,kind,assessable,score,strength,adjustment,limitation,model,rubric,content_revision)
  values(input_user_id,input_attempt_id,(meta->>'roundId')::uuid,input_result->>'languageId',meta->>'skillId',meta->>'caseId',meta->>'difficulty',meta->>'statementId',response->>'kind',(r->>'assessable')::boolean,(r->>'score')::integer,r->>'strength',r->>'adjustment',r->>'limitation',response->>'model',response->>'rubric',response->>'contentRevision')
  on conflict(user_id,attempt_id) do nothing;
 end if;
 if input_action='delivery' and response->'result'->>'audibility'='clear' then
  update public.ai_practice_attempts set delivery_strength=response->'result'->>'strength',delivery_adjustment=response->'result'->>'adjustment',delivery_model=response->>'model' where user_id=input_user_id and attempt_id=input_attempt_id;
 end if;
 return true;
end;
$$;

notify pgrst,'reload schema';
create function public.get_ai_usage_summary() returns jsonb language sql stable security invoker set search_path=pg_catalog as $$
 select jsonb_build_object('calls',count(*),'failed',count(*) filter(where outcome='failed'),'costUsd',coalesce(sum(cost_usd),0),'estimatedCalls',count(*) filter(where estimated),'unknownCostCalls',count(*) filter(where outcome='success' and cost_usd is null),'meanLatencyMs',coalesce(round(avg(duration_ms)),0))
 from public.ai_provider_usage where created_at>now()-interval '7 days';
$$;
revoke all on function public.get_ai_usage_summary() from public,anon,authenticated;
grant execute on function public.get_ai_usage_summary() to service_role;
notify pgrst,'reload schema';
-- A deletion must survive a pending assessment completing afterwards.
create table public.ai_history_deleted_rounds(
 user_id uuid not null references auth.users(id) on delete cascade,round_id uuid not null,created_at timestamptz not null default now(),primary key(user_id,round_id)
);
alter table public.ai_history_deleted_rounds enable row level security;
revoke all on public.ai_history_deleted_rounds from public,anon,authenticated;
grant all on public.ai_history_deleted_rounds to service_role;
create function public.delete_ai_history_round(input_user uuid,input_round uuid) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||input_user::text,0));
 if exists(select 1 from public.ai_practice_attempts where user_id=input_user and round_id=input_round) then
  insert into public.ai_history_deleted_rounds(user_id,round_id) values(input_user,input_round) on conflict do nothing;
  delete from public.ai_practice_attempts where user_id=input_user and round_id=input_round;
 end if;
 return true;
end;$$;
revoke all on function public.delete_ai_history_round(uuid,uuid) from public,anon,authenticated;
grant execute on function public.delete_ai_history_round(uuid,uuid) to service_role;
revoke delete on public.ai_practice_attempts from authenticated;
drop policy "Delete own AI history" on public.ai_practice_attempts;
notify pgrst,'reload schema';

-- Admin AI is independent of browser-cached content entitlements.
create table public.ai_admin_access (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.ai_admin_access enable row level security;
revoke all on public.ai_admin_access from public, anon, authenticated;
grant select on public.ai_admin_access to authenticated;
grant all on public.ai_admin_access to service_role;
create policy "Read own AI admin permission" on public.ai_admin_access
  for select to authenticated using (user_id = (select auth.uid()));

create function public.get_ai_access() returns boolean
language sql stable security invoker set search_path = pg_catalog as $$
  select exists(select 1 from public.ai_admin_access where user_id = auth.uid());
$$;
revoke all on function public.get_ai_access() from public, anon;
grant execute on function public.get_ai_access() to authenticated;

-- Short-lived structured feedback only; never recordings or full responses.
create table public.ai_attempt_cache (
  user_id uuid not null references auth.users(id) on delete cascade,
  attempt_id uuid not null,
  action text not null check (action in ('assess','delivery')),
  signature text not null check (signature ~ '^[0-9a-f]{64}$'),
  lease uuid not null,
  result jsonb,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  primary key(user_id,attempt_id,action)
);
create index ai_attempt_expiry on public.ai_attempt_cache(expires_at);
alter table public.ai_attempt_cache enable row level security;
revoke all on public.ai_attempt_cache from public, anon, authenticated;
grant all on public.ai_attempt_cache to service_role;

create table public.ai_call_usage (
  owner text not null,
  window_kind text not null check(window_kind in ('hour','day')),
  bucket timestamptz not null,
  calls integer not null check(calls >= 0),
  primary key(owner,window_kind,bucket)
);
alter table public.ai_call_usage enable row level security;
revoke all on public.ai_call_usage from public, anon, authenticated;
grant all on public.ai_call_usage to service_role;

-- All following RPCs are service-only invokers. The Edge Function verifies the
-- caller with Auth and passes that verified user ID; users cannot call them.
create function public.reserve_ai_call(input_user_id uuid) returns void
language plpgsql security invoker set search_path = pg_catalog as $$
declare hr timestamptz := date_trunc('hour',now()); dy timestamptz := date_trunc('day',now());
  admin_hour integer; admin_day integer; global_hour integer; global_day integer;
begin
  if not exists(select 1 from public.ai_admin_access where user_id=input_user_id) then raise exception 'admin_required'; end if;
  perform pg_advisory_xact_lock(60261006);
  delete from public.ai_call_usage where bucket < dy - interval '2 days';
  select coalesce(max(calls),0) into admin_hour from public.ai_call_usage where owner=input_user_id::text and window_kind='hour' and bucket=hr;
  select coalesce(max(calls),0) into admin_day from public.ai_call_usage where owner=input_user_id::text and window_kind='day' and bucket=dy;
  select coalesce(max(calls),0) into global_hour from public.ai_call_usage where owner='global' and window_kind='hour' and bucket=hr;
  select coalesce(max(calls),0) into global_day from public.ai_call_usage where owner='global' and window_kind='day' and bucket=dy;
  if admin_hour >= 120 or admin_day >= 200 or global_hour >= 300 or global_day >= 600 then raise exception 'usage_limit'; end if;
  insert into public.ai_call_usage(owner,window_kind,bucket,calls) values
    (input_user_id::text,'hour',hr,1),(input_user_id::text,'day',dy,1),('global','hour',hr,1),('global','day',dy,1)
  on conflict(owner,window_kind,bucket) do update set calls=public.ai_call_usage.calls+1;
end;
$$;

create function public.begin_ai_attempt(input_user_id uuid,input_attempt_id uuid,input_action text,input_signature text)
returns jsonb language plpgsql security invoker set search_path = pg_catalog as $$
declare saved public.ai_attempt_cache; token uuid := gen_random_uuid();
begin
  if not exists(select 1 from public.ai_admin_access where user_id=input_user_id) then raise exception 'admin_required'; end if;
  if input_action not in ('assess','delivery') or input_signature !~ '^[0-9a-f]{64}$' then raise exception 'invalid_attempt'; end if;
  perform pg_advisory_xact_lock(hashtextextended(input_user_id::text||input_attempt_id::text||input_action,0));
  delete from public.ai_attempt_cache where expires_at <= now();
  select * into saved from public.ai_attempt_cache where user_id=input_user_id and attempt_id=input_attempt_id and action=input_action;
  if found then
    if saved.signature <> input_signature then raise exception 'attempt_conflict'; end if;
    if saved.result is not null then return jsonb_build_object('state','complete','result',saved.result); end if;
    return jsonb_build_object('state','pending');
  end if;
  insert into public.ai_attempt_cache(user_id,attempt_id,action,signature,lease,expires_at)
  values(input_user_id,input_attempt_id,input_action,input_signature,token,now()+interval '90 seconds');
  return jsonb_build_object('state','acquired','lease',token);
end;
$$;

create function public.finish_ai_attempt(input_user_id uuid,input_attempt_id uuid,input_action text,input_lease uuid,input_result jsonb)
returns boolean language plpgsql security invoker set search_path = pg_catalog as $$
begin
  if input_result is null or octet_length(input_result::text) > 12000 then raise exception 'invalid_assessment'; end if;
  update public.ai_attempt_cache set result=input_result,expires_at=now()+interval '15 minutes'
  where user_id=input_user_id and attempt_id=input_attempt_id and action=input_action and lease=input_lease and result is null and expires_at>now();
  return found;
end;
$$;

create function public.abort_ai_attempt(input_user_id uuid,input_attempt_id uuid,input_action text,input_lease uuid)
returns void language sql security invoker set search_path = pg_catalog as $$
  delete from public.ai_attempt_cache where user_id=input_user_id and attempt_id=input_attempt_id and action=input_action and lease=input_lease and result is null;
$$;

revoke all on function public.reserve_ai_call(uuid), public.begin_ai_attempt(uuid,uuid,text,text),
  public.finish_ai_attempt(uuid,uuid,text,uuid,jsonb), public.abort_ai_attempt(uuid,uuid,text,uuid) from public,anon,authenticated;
grant execute on function public.reserve_ai_call(uuid), public.begin_ai_attempt(uuid,uuid,text,text),
  public.finish_ai_attempt(uuid,uuid,text,uuid,jsonb), public.abort_ai_attempt(uuid,uuid,text,uuid) to service_role;
notify pgrst, 'reload schema';

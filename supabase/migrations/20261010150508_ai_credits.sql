-- Finite AI allowance plus fixed one-time credit packs. Disabled until both
-- Edge services and approved Stripe prices have been verified.
alter table public.app_public_config add column ai_credits_enabled boolean not null default false;
alter table public.billing_subscriptions add column period_started_at timestamptz;
create table public.ai_credit_packs (
 pack_key text primary key check(pack_key in ('small','large')),
 credits integer not null check(credits>0), amount integer not null check(amount>0),
 stripe_test_price text, stripe_live_price text, enabled boolean not null default false
);
insert into public.ai_credit_packs(pack_key,credits,amount) values('small',120,5900),('large',360,14900);
create table public.ai_credit_lots (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 source_key text not null unique, kind text not null check(kind in ('included','purchased')),
 livemode boolean not null, credits integer not null check(credits>0), remaining integer not null check(remaining>=0 and remaining<=credits),
 valid_from timestamptz not null default now(), expires_at timestamptz,
 subscription_id text references public.billing_subscriptions(subscription_id),
 checkout_id text unique, payment_intent text unique, refunded_credits integer not null default 0 check(refunded_credits>=0),
 dispute_hold boolean not null default false, created_at timestamptz not null default now()
);
create index ai_credit_lot_owner on public.ai_credit_lots(user_id,livemode,expires_at);
create table public.ai_credit_operations (
 user_id uuid not null references auth.users(id) on delete cascade, request_id uuid not null,
 action text not null check(action in ('assess','delivery','transcribe','speech_client','speech_supervisor')),
 signature text not null check(signature ~ '^[0-9a-f]{64}$'), cost integer not null check(cost>=0),
 state text not null check(state in ('reserved','complete','released')), lease uuid not null,
 lease_until timestamptz not null, result jsonb, result_until timestamptz,
 created_at timestamptz not null default now(), primary key(user_id,request_id,action)
);
create index ai_credit_pending on public.ai_credit_operations(user_id,lease_until) where state='reserved';
create index ai_credit_result_expiry on public.ai_credit_operations(result_until) where result is not null;
create table public.ai_credit_allocations (
 user_id uuid not null, request_id uuid not null, action text not null,
 lot_id uuid not null references public.ai_credit_lots(id), credits integer not null check(credits>0),
 primary key(user_id,request_id,action,lot_id),
 foreign key(user_id,request_id,action) references public.ai_credit_operations(user_id,request_id,action) on delete cascade
);
create table public.ai_credit_checkout_attempts (
 user_id uuid not null references auth.users(id) on delete cascade, livemode boolean not null, attempt_id uuid not null,
 pack_key text not null references public.ai_credit_packs(pack_key), lease uuid not null, lease_until timestamptz,
 session_id text unique, created_at timestamptz not null default now(), primary key(user_id,livemode,attempt_id)
);
create table public.ai_credit_payment_risks (
 payment_intent text not null, source_id text not null, reason text not null check(reason in ('refund','dispute')),
 refunded_credits integer not null default 0, hold boolean not null default false, observed_at timestamptz not null,
 primary key(payment_intent,source_id,reason)
);
alter table public.ai_credit_packs enable row level security;
alter table public.ai_credit_lots enable row level security;
alter table public.ai_credit_operations enable row level security;
alter table public.ai_credit_allocations enable row level security;
alter table public.ai_credit_checkout_attempts enable row level security;
alter table public.ai_credit_payment_risks enable row level security;
revoke all on public.ai_credit_packs,public.ai_credit_lots,public.ai_credit_operations,public.ai_credit_allocations,public.ai_credit_checkout_attempts,public.ai_credit_payment_risks from public,anon,authenticated;
grant all on public.ai_credit_packs,public.ai_credit_lots,public.ai_credit_operations,public.ai_credit_allocations,public.ai_credit_checkout_attempts,public.ai_credit_payment_risks to service_role;

create function dp_private.ai_credit_lot_available(l public.ai_credit_lots) returns boolean
language sql stable security invoker set search_path=pg_catalog as $$
 select l.valid_from<=now() and (l.expires_at is null or l.expires_at>now()) and not l.dispute_hold
 and (l.livemode or (select billing_mode='test' from public.app_public_config))
 and (l.kind='purchased' or exists(select 1 from public.billing_subscriptions s where s.subscription_id=l.subscription_id
   and s.status in ('active','past_due') and s.paid_through>now() and s.access_hold=''));
$$;
create function dp_private.ai_credit_eligible(uid uuid) returns boolean
language sql stable security invoker set search_path=pg_catalog as $$
 select exists(select 1 from public.ai_admin_access where user_id=uid) or
 ((select ai_credits_enabled from public.app_public_config) and (
 exists(select 1 from public.billing_subscriptions where user_id=uid and livemode and status in ('active','past_due') and paid_through>now() and access_hold='')
 or exists(select 1 from public.ai_credit_lots l where l.user_id=uid and l.kind='purchased' and dp_private.ai_credit_lot_available(l) and l.credits>l.refunded_credits)));
$$;
-- Only own authenticated identity reaches this private definer lookup.
create function dp_private.own_ai_access() returns boolean
language sql stable security definer set search_path=pg_catalog as $$ select auth.uid() is not null and dp_private.ai_credit_eligible(auth.uid()); $$;
revoke all on function dp_private.ai_credit_lot_available(public.ai_credit_lots),dp_private.ai_credit_eligible(uuid) from public,anon,authenticated;
grant execute on function dp_private.ai_credit_lot_available(public.ai_credit_lots),dp_private.ai_credit_eligible(uuid) to service_role;
revoke all on function dp_private.own_ai_access() from public,anon;
grant execute on function dp_private.own_ai_access() to authenticated;
create or replace function public.get_ai_access() returns boolean language sql stable security invoker set search_path=pg_catalog as $$ select dp_private.own_ai_access(); $$;

create function dp_private.release_ai_credit_operation(uid uuid,rid uuid,act text,token uuid) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 update public.ai_credit_operations set state='released',result=null,result_until=null where user_id=uid and request_id=rid and action=act and lease=token and state='reserved';
 if not found then return false;end if;
 update public.ai_credit_lots l set remaining=greatest(0,least(l.remaining+a.credits,l.credits-l.refunded_credits-coalesce((select sum(x.credits) from public.ai_credit_allocations x join public.ai_credit_operations o using(user_id,request_id,action) where x.lot_id=l.id and o.state in ('reserved','complete')),0)))
 from public.ai_credit_allocations a where a.user_id=uid and a.request_id=rid and a.action=act and l.id=a.lot_id;
 delete from public.ai_credit_allocations where user_id=uid and request_id=rid and action=act;return true;
end;
$$;
create function dp_private.prepare_ai_credits(uid uuid) returns void
language plpgsql security invoker set search_path=pg_catalog as $$
declare op public.ai_credit_operations;s public.billing_subscriptions;anchor timestamptz;starts timestamptz;ends timestamptz;n integer;
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||uid::text,0));
 for op in select * from public.ai_credit_operations where user_id=uid and state='reserved' and lease_until<=now() loop
  perform dp_private.release_ai_credit_operation(uid,op.request_id,op.action,op.lease);
 end loop;
 if not (select ai_credits_enabled from public.app_public_config) then return;end if;
 -- One current allowance, not accumulated grants for missed months. Annual
 -- subscriptions release the same 120 credits each subscription month.
 select * into s from public.billing_subscriptions where user_id=uid and livemode
  and status in ('active','past_due') and paid_through>now() and access_hold=''
  order by observed_at desc limit 1;
 if not found or s.period_started_at is null then return;end if;
 anchor:=s.period_started_at;
 n:=greatest(0,(extract(year from now() at time zone 'UTC')-extract(year from anchor at time zone 'UTC'))::integer*12
  +(extract(month from now() at time zone 'UTC')-extract(month from anchor at time zone 'UTC'))::integer);
 starts:=(anchor at time zone 'UTC'+make_interval(months=>n)) at time zone 'UTC';
 if starts>now() then n:=greatest(0,n-1);starts:=(anchor at time zone 'UTC'+make_interval(months=>n)) at time zone 'UTC';end if;
 ends:=least((anchor at time zone 'UTC'+make_interval(months=>n+1)) at time zone 'UTC',s.paid_through);
 if starts>now() or ends<=now() then return;end if;
 insert into public.ai_credit_lots(user_id,source_key,kind,livemode,credits,remaining,valid_from,expires_at,subscription_id)
 values(uid,'included:'||s.subscription_id||':'||extract(epoch from starts)::text,'included',true,120,120,starts,ends,s.subscription_id) on conflict(source_key) do nothing;
end;
$$;
create function public.get_ai_credit_balance(input_user uuid) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare included integer;purchased integer;refresh timestamptz;admin boolean;
begin
 perform dp_private.prepare_ai_credits(input_user);
 select exists(select 1 from public.ai_admin_access where user_id=input_user) into admin;
 select coalesce(sum(remaining) filter(where kind='included'),0),coalesce(sum(remaining) filter(where kind='purchased'),0),min(expires_at) filter(where kind='included')
 into included,purchased,refresh from public.ai_credit_lots l where user_id=input_user and dp_private.ai_credit_lot_available(l);
 return jsonb_build_object('enabled',(select ai_credits_enabled from public.app_public_config),'admin',admin,'included',included,'purchased',purchased,'balance',included+purchased,'refresh_at',refresh,'allowance',120,'latest_purchase',(select checkout_id from public.ai_credit_lots where user_id=input_user and kind='purchased' order by created_at desc,id desc limit 1));
end;
$$;
create function public.begin_ai_credit_operation(input_user_id uuid,input_attempt_id uuid,input_action text,input_signature text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare op public.ai_credit_operations;lot public.ai_credit_lots;token uuid:=gen_random_uuid();cost integer;needed integer;taken integer;admin boolean;
begin
 if input_action not in ('assess','delivery','transcribe','speech_client','speech_supervisor') or input_signature !~ '^[0-9a-f]{64}$' then raise exception 'invalid_attempt';end if;
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
create function public.finish_ai_credit_operation(input_user_id uuid,input_attempt_id uuid,input_action text,input_lease uuid,input_result jsonb) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||input_user_id::text,0));
 -- Synthetic speech/transcripts are transient replay data. Original recordings
 -- are never stored. The receipt and allocation survive removal of the result.
 if input_result is null or octet_length(input_result::text)>400000 then raise exception 'invalid_assessment';end if;
 update public.ai_credit_operations set state='complete',result=input_result,result_until=now()+interval '15 minutes'
 where user_id=input_user_id and request_id=input_attempt_id and action=input_action and lease=input_lease and state='reserved' and lease_until>now();
 return found;
end;
$$;
create function public.abort_ai_credit_operation(input_user_id uuid,input_attempt_id uuid,input_action text,input_lease uuid) returns void
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||input_user_id::text,0));
 perform dp_private.release_ai_credit_operation(input_user_id,input_attempt_id,input_action,input_lease);
end;
$$;

create function public.begin_ai_credit_checkout(input_user uuid,input_live boolean,input_attempt uuid,input_pack text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare saved public.ai_credit_checkout_attempts;token uuid:=gen_random_uuid();
begin
 perform pg_advisory_xact_lock(hashtextextended('credit-checkout:'||input_user::text,0));
 if not exists(select 1 from public.ai_credit_packs where pack_key=input_pack and enabled) then raise exception 'invalid_plan';end if;
 select * into saved from public.ai_credit_checkout_attempts where user_id=input_user and livemode=input_live and attempt_id=input_attempt;
 if found then
  if saved.pack_key<>input_pack then raise exception 'attempt_conflict';end if;
  if saved.lease_until>now() then return jsonb_build_object('state','pending');end if;
 else
  if (select count(*) from public.ai_credit_checkout_attempts where user_id=input_user and created_at>now()-interval '1 hour')>=10 then raise exception 'checkout_limit';end if;
  -- Serialize different attempts too, to avoid two simultaneous purchases.
  if exists(select 1 from public.ai_credit_checkout_attempts where user_id=input_user and livemode=input_live and lease_until>now()) then return jsonb_build_object('state','pending');end if;
 end if;
 insert into public.ai_credit_checkout_attempts(user_id,livemode,attempt_id,pack_key,lease,lease_until)
 values(input_user,input_live,input_attempt,input_pack,token,now()+interval '4 minutes')
 on conflict(user_id,livemode,attempt_id) do update set lease=token,lease_until=excluded.lease_until;
 return jsonb_build_object('state','acquired','lease',token,'previous_session',saved.session_id);
end;
$$;
create function public.finish_ai_credit_checkout(input_user uuid,input_live boolean,input_attempt uuid,input_lease uuid,input_session text) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 if input_session !~ '^cs_[A-Za-z0-9_]+$' then raise exception 'invalid_plan';end if;
 update public.ai_credit_checkout_attempts set session_id=input_session,lease_until=null
 where user_id=input_user and livemode=input_live and attempt_id=input_attempt and lease=input_lease;return found;
end;
$$;
create function public.abort_ai_credit_checkout(input_user uuid,input_live boolean,input_attempt uuid,input_lease uuid) returns void
language sql security invoker set search_path=pg_catalog as $$
 update public.ai_credit_checkout_attempts set lease_until=null where user_id=input_user and livemode=input_live and attempt_id=input_attempt and lease=input_lease;
$$;
create function public.apply_ai_credit_purchase(input_event text,input_live boolean,input_type text,input_customer text,input_session text,input_payment text,input_pack text) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
declare owner uuid;pack public.ai_credit_packs;attempt public.ai_credit_checkout_attempts;risk integer;held boolean;
begin
 select user_id into owner from public.billing_customers where customer_id=input_customer and livemode=input_live;
 if owner is null then raise exception 'customer_conflict';end if;
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||owner::text,0));
 if exists(select 1 from public.billing_webhook_events where event_id=input_event) then return false;end if;
 select * into pack from public.ai_credit_packs where pack_key=input_pack;
 select * into attempt from public.ai_credit_checkout_attempts where session_id=input_session and user_id=owner and livemode=input_live and pack_key=input_pack;
 if pack.pack_key is null or attempt.session_id is null or input_payment !~ '^pi_[A-Za-z0-9]+$' then raise exception 'customer_conflict';end if;
 select coalesce(max(refunded_credits),0),coalesce(bool_or(hold and reason='dispute'),false) into risk,held from public.ai_credit_payment_risks where payment_intent=input_payment;
 insert into public.ai_credit_lots(user_id,source_key,kind,livemode,credits,remaining,checkout_id,payment_intent,refunded_credits,dispute_hold)
 values(owner,'checkout:'||input_session,'purchased',input_live,pack.credits,greatest(0,pack.credits-risk),input_session,input_payment,risk,held) on conflict(source_key) do nothing;
 insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);return true;
end;
$$;
create function public.apply_ai_credit_risk(input_event text,input_live boolean,input_type text,input_customer text,input_payment text,input_source text,input_reason text,input_refunded integer,input_hold boolean,input_observed timestamptz) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
declare owner uuid;lot public.ai_credit_lots;total integer;held boolean;
begin
 select user_id into owner from public.billing_customers where customer_id=input_customer and livemode=input_live;
 if owner is null then raise exception 'customer_conflict';end if;
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||owner::text,0));
 if exists(select 1 from public.billing_webhook_events where event_id=input_event) then return false;end if;
 if input_reason not in ('refund','dispute') or input_refunded<0 or input_payment !~ '^pi_[A-Za-z0-9]+$' then raise exception 'invalid_risk';end if;
 insert into public.ai_credit_payment_risks values(input_payment,input_source,input_reason,input_refunded,input_hold,input_observed)
 on conflict(payment_intent,source_id,reason) do update set refunded_credits=greatest(public.ai_credit_payment_risks.refunded_credits,excluded.refunded_credits),hold=excluded.hold,observed_at=excluded.observed_at
 where public.ai_credit_payment_risks.observed_at<=excluded.observed_at;
 select coalesce(max(refunded_credits),0),coalesce(bool_or(hold and reason='dispute'),false) into total,held from public.ai_credit_payment_risks where payment_intent=input_payment;
 select * into lot from public.ai_credit_lots where payment_intent=input_payment and user_id=owner and livemode=input_live;
 if found then
  update public.ai_credit_lots set remaining=greatest(0,remaining-greatest(0,total-refunded_credits)),refunded_credits=least(total,credits),dispute_hold=held where id=lot.id;
 end if;
 insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);return true;
end;
$$;
-- Service-only writes. Public callers receive their balance through an Edge
-- service that verifies Auth; no arbitrary user ID RPC is exposed to clients.
revoke all on function dp_private.release_ai_credit_operation(uuid,uuid,text,uuid),dp_private.prepare_ai_credits(uuid) from public,anon,authenticated;
grant execute on function dp_private.release_ai_credit_operation(uuid,uuid,text,uuid),dp_private.prepare_ai_credits(uuid) to service_role;
revoke all on function public.get_ai_credit_balance(uuid),public.begin_ai_credit_operation(uuid,uuid,text,text),public.finish_ai_credit_operation(uuid,uuid,text,uuid,jsonb),public.abort_ai_credit_operation(uuid,uuid,text,uuid),public.begin_ai_credit_checkout(uuid,boolean,uuid,text),public.finish_ai_credit_checkout(uuid,boolean,uuid,uuid,text),public.abort_ai_credit_checkout(uuid,boolean,uuid,uuid),public.apply_ai_credit_purchase(text,boolean,text,text,text,text,text),public.apply_ai_credit_risk(text,boolean,text,text,text,text,text,integer,boolean,timestamptz) from public,anon,authenticated;
grant execute on function public.get_ai_credit_balance(uuid),public.begin_ai_credit_operation(uuid,uuid,text,text),public.finish_ai_credit_operation(uuid,uuid,text,uuid,jsonb),public.abort_ai_credit_operation(uuid,uuid,text,uuid),public.begin_ai_credit_checkout(uuid,boolean,uuid,text),public.finish_ai_credit_checkout(uuid,boolean,uuid,uuid,text),public.abort_ai_credit_checkout(uuid,boolean,uuid,uuid),public.apply_ai_credit_purchase(text,boolean,text,text,text,text,text),public.apply_ai_credit_risk(text,boolean,text,text,text,text,text,integer,boolean,timestamptz) to service_role;
-- Preserve long-lived billing receipts; remove only replay payloads.
select cron.schedule('ai-credit-result-cleanup','*/5 * * * *', $cleanup$update public.ai_credit_operations set result=null,result_until=null where result_until<now();$cleanup$);
notify pgrst,'reload schema';

create or replace function public.reserve_ai_call(input_user_id uuid) returns void
language plpgsql security invoker set search_path = pg_catalog as $$
declare hr timestamptz := date_trunc('hour',now()); dy timestamptz := date_trunc('day',now());
  admin_hour integer; admin_day integer; global_hour integer; global_day integer;
begin
  if not dp_private.ai_credit_eligible(input_user_id) then raise exception 'admin_required'; end if;
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


drop function public.apply_billing_snapshot(text,boolean,text,text,text,text,text,text,timestamptz,boolean,timestamptz);
create function public.apply_billing_snapshot(input_event text,input_live boolean,input_type text,input_subscription text,
  input_customer text,input_price text,input_status text,input_interval text,input_paid_through timestamptz,
  input_cancel boolean,input_observed timestamptz,input_period_start timestamptz default null) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
declare owner uuid; old public.billing_subscriptions;
begin
  perform pg_advisory_xact_lock(hashtextextended('billing-customer:'||input_customer||input_live::text,0));
  perform pg_advisory_xact_lock(hashtextextended('billing:'||input_subscription,0));
  if exists(select 1 from public.billing_webhook_events where event_id=input_event) then return false;end if;
  select user_id into owner from public.billing_customers where customer_id=input_customer and livemode=input_live;
  if owner is null then raise exception 'customer_unavailable';end if;
  select * into old from public.billing_subscriptions where subscription_id=input_subscription;
  if found and (old.user_id<>owner or old.livemode<>input_live) then raise exception 'subscription_conflict';end if;
  if old.observed_at is null or input_observed>=old.observed_at then
    insert into public.billing_subscriptions(subscription_id,user_id,livemode,customer_id,price_id,status,billing_interval,paid_through,cancel_at_period_end,observed_at,period_started_at)
      values(input_subscription,owner,input_live,input_customer,input_price,input_status,input_interval,
      greatest(old.paid_through,input_paid_through),input_cancel,input_observed,coalesce(input_period_start,old.period_started_at))
      on conflict(subscription_id) do update set price_id=excluded.price_id,status=excluded.status,billing_interval=excluded.billing_interval,
        paid_through=excluded.paid_through,period_started_at=excluded.period_started_at,cancel_at_period_end=excluded.cancel_at_period_end,observed_at=excluded.observed_at,
        access_hold=case when public.billing_subscriptions.access_hold='refund' and excluded.paid_through>public.billing_subscriptions.paid_through then '' else public.billing_subscriptions.access_hold end;
  end if;
  insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);
  return true;
end;
$$;
revoke all on function public.apply_billing_snapshot(text,boolean,text,text,text,text,text,text,timestamptz,boolean,timestamptz,timestamptz) from public,anon,authenticated;
grant execute on function public.apply_billing_snapshot(text,boolean,text,text,text,text,text,text,timestamptz,boolean,timestamptz,timestamptz) to service_role;

create or replace function dp_private.account_access() returns jsonb
language plpgsql stable security definer set search_path=pg_catalog as $$
declare uid uuid:=auth.uid();paid public.billing_subscriptions;beta boolean;
begin
 if uid is null then raise exception 'sign_in_required';end if;
 select exists(select 1 from public.ai_admin_access where user_id=uid) into beta;
 select * into paid from public.billing_subscriptions where user_id=uid
 and (livemode or (beta and (select billing_mode='test' from public.app_public_config)))
 order by livemode desc,(status in ('active','past_due') and paid_through>now()) desc nulls last,observed_at desc limit 1;
 return jsonb_build_object('full_content',dp_private.has_full_content(uid),'ai_admin',beta,'ai_access',dp_private.ai_credit_eligible(uid),
 'subscription',case when paid.subscription_id is null then null else jsonb_build_object('status',paid.status,'interval',paid.billing_interval,'paid_through',paid.paid_through,'cancel_at_period_end',paid.cancel_at_period_end,'access_paused',paid.access_hold<>'','test',not paid.livemode) end);
end;$$;
notify pgrst,'reload schema';

-- AI credits buy AI usage, not the separately priced premium case library.
grant execute on function dp_private.has_full_content(uuid) to service_role;
create function public.check_ai_content_access(input_user uuid,input_case text) returns boolean
language sql stable security invoker set search_path=pg_catalog as $$
 select exists(select 1 from dp_private.content_cases where case_id=input_case and (not premium or dp_private.has_full_content(input_user)));
$$;
revoke all on function public.check_ai_content_access(uuid,text) from public,anon,authenticated;
grant execute on function public.check_ai_content_access(uuid,text) to service_role;
notify pgrst,'reload schema';

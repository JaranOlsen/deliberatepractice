-- Account entitlements are independent of user-editable metadata/browser flags.
create table public.app_public_config (
  singleton boolean primary key default true check(singleton),
  email_mode text not null default 'link' check(email_mode in ('link','code')),
  billing_mode text not null default 'off' check(billing_mode in ('off','test','live')),
  stripe_monthly_price text,
  stripe_yearly_price text,
  stripe_portal_configuration text
);
insert into public.app_public_config default values;
alter table public.app_public_config enable row level security;
revoke all on public.app_public_config from public,anon,authenticated;
grant select on public.app_public_config to anon,authenticated;
grant all on public.app_public_config to service_role;
create policy "Read public app configuration" on public.app_public_config for select to anon,authenticated using(true);
create function public.get_public_app_config() returns jsonb language sql stable security invoker set search_path=pg_catalog as $$
  select jsonb_build_object('email_mode',email_mode,'billing_mode',billing_mode) from public.app_public_config where singleton;
$$;
revoke all on function public.get_public_app_config() from public;
grant execute on function public.get_public_app_config() to anon,authenticated,service_role;

create table if not exists public.entitlements (
  access_code text primary key,
  access_level text not null check(access_level in ('pro','all')),
  expires_at timestamptz
);
alter table public.entitlements enable row level security;
revoke all on public.entitlements from public,anon,authenticated;
grant all on public.entitlements to service_role;
create table public.account_access_grants (
  user_id uuid not null references auth.users(id) on delete cascade,
  grant_key text not null check(length(grant_key)<=200),
  full_content boolean not null default true,
  license_code text references public.entitlements(access_code) on delete cascade,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  primary key(user_id,grant_key)
);
create index account_grant_license on public.account_access_grants(license_code) where license_code is not null;
alter table public.account_access_grants enable row level security;
revoke all on public.account_access_grants from public,anon,authenticated;
grant select on public.account_access_grants to authenticated;
grant all on public.account_access_grants to service_role;
create policy "Read own library grants" on public.account_access_grants for select to authenticated using(user_id=(select auth.uid()));
insert into public.account_access_grants(user_id,grant_key) select user_id,'existing-ai-access' from public.ai_admin_access;

create table public.billing_customers (
  user_id uuid not null references auth.users(id) on delete cascade,
  livemode boolean not null,
  customer_id text not null check(customer_id ~ '^cus_[A-Za-z0-9]+$'),
  created_at timestamptz not null default now(),
  primary key(user_id,livemode),unique(customer_id,livemode)
);
create table public.billing_subscriptions (
  subscription_id text primary key check(subscription_id ~ '^sub_[A-Za-z0-9]+$'),
  user_id uuid not null references auth.users(id) on delete cascade,
  livemode boolean not null,
  customer_id text not null,
  price_id text not null,
  status text not null check(status in ('incomplete','incomplete_expired','trialing','active','past_due','canceled','unpaid','paused')),
  billing_interval text not null check(billing_interval in ('month','year')),
  paid_through timestamptz,
  cancel_at_period_end boolean not null default false,
  access_hold text not null default '' check(access_hold in ('','refund','dispute')),
  risk_observed_at timestamptz,
  observed_at timestamptz not null,
  foreign key(customer_id,livemode) references public.billing_customers(customer_id,livemode)
);
create index billing_subscription_owner on public.billing_subscriptions(user_id,livemode,observed_at desc);
create table public.billing_webhook_events (
  event_id text primary key check(event_id ~ '^evt_[A-Za-z0-9]+$'),
  livemode boolean not null,
  event_type text not null,
  created_at timestamptz not null default now()
);
create table public.billing_checkout_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  livemode boolean not null,
  attempt_id uuid not null,
  billing_interval text not null check(billing_interval in ('month','year')),
  created_at timestamptz not null default now(),
  primary key(user_id,livemode,attempt_id)
);
create index checkout_attempt_age on public.billing_checkout_attempts(created_at);
create table public.billing_checkout_state (
  user_id uuid not null references auth.users(id) on delete cascade,livemode boolean not null,
  attempt_id uuid not null,billing_interval text not null check(billing_interval in ('month','year')),
  lease uuid not null,lease_until timestamptz,
  session_id text,session_interval text check(session_interval in ('month','year')),
  primary key(user_id,livemode)
);
alter table public.billing_checkout_state enable row level security;
revoke all on public.billing_checkout_state from public,anon,authenticated;
grant all on public.billing_checkout_state to service_role;
alter table public.billing_customers enable row level security;
alter table public.billing_subscriptions enable row level security;
alter table public.billing_webhook_events enable row level security;
alter table public.billing_checkout_attempts enable row level security;
revoke all on public.billing_customers,public.billing_subscriptions,public.billing_webhook_events,public.billing_checkout_attempts from public,anon,authenticated;
grant select on public.billing_subscriptions to authenticated;
create policy "Read own subscription" on public.billing_subscriptions for select to authenticated using(user_id=(select auth.uid()));
grant all on public.billing_customers,public.billing_subscriptions,public.billing_webhook_events,public.billing_checkout_attempts to service_role;

create function dp_private.has_full_content(input_user uuid) returns boolean
language sql stable security definer set search_path=pg_catalog as $$
  select exists(select 1 from public.account_access_grants g left join public.entitlements e on e.access_code=g.license_code
    where g.user_id=input_user and g.full_content and (g.expires_at is null or g.expires_at>now())
    and (g.license_code is null or (e.access_level in ('pro','all') and (e.expires_at is null or e.expires_at>now()))))
  or exists(select 1 from public.ai_admin_access where user_id=input_user)
  or exists(select 1 from public.billing_subscriptions where user_id=input_user and livemode
    and status in ('active','past_due') and paid_through>now() and access_hold='');
$$;
revoke all on function dp_private.has_full_content(uuid) from public,anon,authenticated;

create function dp_private.account_access() returns jsonb
language plpgsql stable security definer set search_path=pg_catalog as $$
declare uid uuid:=auth.uid(); paid public.billing_subscriptions; beta boolean;
begin
  if uid is null then raise exception 'sign_in_required';end if;
  select exists(select 1 from public.ai_admin_access where user_id=uid) into beta;
  select * into paid from public.billing_subscriptions where user_id=uid
    and (livemode or (beta and (select billing_mode='test' from public.app_public_config)))
    order by livemode desc,(status in ('active','past_due') and paid_through>now()) desc nulls last,observed_at desc limit 1;
  return jsonb_build_object('full_content',dp_private.has_full_content(uid),'ai_access',beta,
    'subscription',case when paid.subscription_id is null then null else jsonb_build_object(
      'status',paid.status,'interval',paid.billing_interval,'paid_through',paid.paid_through,
      'cancel_at_period_end',paid.cancel_at_period_end,'access_paused',paid.access_hold<>'','test',not paid.livemode) end);
end;
$$;
revoke all on function dp_private.account_access() from public,anon;
grant usage on schema dp_private to authenticated;
grant execute on function dp_private.account_access() to authenticated;
create function public.get_account_access() returns jsonb language sql stable security invoker set search_path=pg_catalog as $$ select dp_private.account_access(); $$;
revoke all on function public.get_account_access() from public,anon;
grant execute on function public.get_account_access() to authenticated;

create function dp_private.redeem_account_code(input_code text) returns jsonb
language plpgsql security definer set search_path=pg_catalog as $$
declare uid uuid:=auth.uid(); code text:=trim(input_code); offer public.entitlements;
begin
  if uid is null then raise exception 'sign_in_required';end if;
  if length(code)<1 or length(code)>200 then raise exception 'invalid_code';end if;
  select * into offer from public.entitlements where access_code=code;
  if not found then raise exception 'invalid_code';end if;
  if offer.expires_at is not null and offer.expires_at<=now() then raise exception 'expired_code';end if;
  insert into public.account_access_grants(user_id,grant_key,license_code,expires_at)
    values(uid,'code:'||encode(extensions.digest(code,'sha256'),'hex'),code,offer.expires_at)
    on conflict(user_id,grant_key) do update set expires_at=excluded.expires_at;
  return dp_private.account_access();
end;
$$;
revoke all on function dp_private.redeem_account_code(text) from public,anon;
grant execute on function dp_private.redeem_account_code(text) to authenticated;
create function public.redeem_account_access_code(input_code text) returns jsonb language sql security invoker set search_path=pg_catalog as $$ select dp_private.redeem_account_code(input_code); $$;
revoke all on function public.redeem_account_access_code(text) from public,anon;
grant execute on function public.redeem_account_access_code(text) to authenticated;

create function public.reserve_checkout_attempt(input_user uuid,input_live boolean,input_attempt uuid,input_interval text)
returns void language plpgsql security invoker set search_path=pg_catalog as $$
declare saved public.billing_checkout_attempts;
begin
  if input_interval not in ('month','year') then raise exception 'invalid_plan';end if;
  perform pg_advisory_xact_lock(hashtextextended('checkout:'||input_user::text,0));
  select * into saved from public.billing_checkout_attempts where user_id=input_user and livemode=input_live and attempt_id=input_attempt;
  if found then
    if saved.billing_interval<>input_interval then raise exception 'attempt_conflict';end if;return;
  end if;
  if (select count(*) from public.billing_checkout_attempts where user_id=input_user and created_at>now()-interval '1 hour')>=10 then raise exception 'checkout_limit';end if;
  delete from public.billing_checkout_attempts where created_at<now()-interval '2 days';
  insert into public.billing_checkout_attempts(user_id,livemode,attempt_id,billing_interval) values(input_user,input_live,input_attempt,input_interval);
end;
$$;
revoke all on function public.reserve_checkout_attempt(uuid,boolean,uuid,text) from public,anon,authenticated;
grant execute on function public.reserve_checkout_attempt(uuid,boolean,uuid,text) to service_role;
create function public.begin_checkout(input_user uuid,input_live boolean,input_attempt uuid,input_interval text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare saved public.billing_checkout_state;token uuid:=gen_random_uuid();
begin
  perform pg_advisory_xact_lock(hashtextextended('checkout-state:'||input_user::text||input_live::text,0));
  select * into saved from public.billing_checkout_state where user_id=input_user and livemode=input_live;
  if found then
    if saved.attempt_id=input_attempt and saved.billing_interval<>input_interval then raise exception 'attempt_conflict';end if;
    if saved.lease_until>now() then return jsonb_build_object('state','pending');end if;
  end if;
  insert into public.billing_checkout_state(user_id,livemode,attempt_id,billing_interval,lease,lease_until)
    values(input_user,input_live,input_attempt,input_interval,token,now()+interval '4 minutes')
    on conflict(user_id,livemode) do update set attempt_id=excluded.attempt_id,billing_interval=excluded.billing_interval,lease=excluded.lease,lease_until=excluded.lease_until;
  return jsonb_build_object('state','acquired','lease',token,'previous_session',saved.session_id,'previous_interval',saved.session_interval);
end;
$$;
create function public.finish_checkout(input_user uuid,input_live boolean,input_lease uuid,input_session text,input_interval text)
returns boolean language plpgsql security invoker set search_path=pg_catalog as $$
begin
  update public.billing_checkout_state set session_id=input_session,session_interval=input_interval,lease_until=null
    where user_id=input_user and livemode=input_live and lease=input_lease and lease_until>now();return found;
end;
$$;
create function public.abort_checkout(input_user uuid,input_live boolean,input_lease uuid) returns void
language sql security invoker set search_path=pg_catalog as $$
  update public.billing_checkout_state set lease_until=null where user_id=input_user and livemode=input_live and lease=input_lease;
$$;
revoke all on function public.begin_checkout(uuid,boolean,uuid,text),public.finish_checkout(uuid,boolean,uuid,text,text),public.abort_checkout(uuid,boolean,uuid) from public,anon,authenticated;
grant execute on function public.begin_checkout(uuid,boolean,uuid,text),public.finish_checkout(uuid,boolean,uuid,text,text),public.abort_checkout(uuid,boolean,uuid) to service_role;

create function public.apply_billing_snapshot(input_event text,input_live boolean,input_type text,input_subscription text,
  input_customer text,input_price text,input_status text,input_interval text,input_paid_through timestamptz,
  input_cancel boolean,input_observed timestamptz) returns boolean
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
    insert into public.billing_subscriptions(subscription_id,user_id,livemode,customer_id,price_id,status,billing_interval,paid_through,cancel_at_period_end,observed_at)
      values(input_subscription,owner,input_live,input_customer,input_price,input_status,input_interval,
      greatest(old.paid_through,input_paid_through),input_cancel,input_observed)
      on conflict(subscription_id) do update set price_id=excluded.price_id,status=excluded.status,billing_interval=excluded.billing_interval,
        paid_through=excluded.paid_through,cancel_at_period_end=excluded.cancel_at_period_end,observed_at=excluded.observed_at,
        access_hold=case when public.billing_subscriptions.access_hold='refund' and excluded.paid_through>public.billing_subscriptions.paid_through then '' else public.billing_subscriptions.access_hold end;
  end if;
  insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);
  return true;
end;
$$;
revoke all on function public.apply_billing_snapshot(text,boolean,text,text,text,text,text,text,timestamptz,boolean,timestamptz) from public,anon,authenticated;
grant execute on function public.apply_billing_snapshot(text,boolean,text,text,text,text,text,text,timestamptz,boolean,timestamptz) to service_role;
create function public.apply_billing_risk(input_event text,input_live boolean,input_type text,input_customer text,
  input_reason text,input_hold boolean,input_observed timestamptz) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
begin
  if input_reason not in ('refund','dispute') then raise exception 'invalid_risk';end if;
  perform pg_advisory_xact_lock(hashtextextended('billing-customer:'||input_customer||input_live::text,0));
  if exists(select 1 from public.billing_webhook_events where event_id=input_event) then return false;end if;
  update public.billing_subscriptions set access_hold=case when input_hold then input_reason else '' end,risk_observed_at=input_observed
    where customer_id=input_customer and livemode=input_live and (risk_observed_at is null or risk_observed_at<=input_observed)
    and (input_hold or access_hold=input_reason);
  insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);
  return true;
end;
$$;
revoke all on function public.apply_billing_risk(text,boolean,text,text,text,boolean,timestamptz) from public,anon,authenticated;
grant execute on function public.apply_billing_risk(text,boolean,text,text,text,boolean,timestamptz) to service_role;
notify pgrst,'reload schema';

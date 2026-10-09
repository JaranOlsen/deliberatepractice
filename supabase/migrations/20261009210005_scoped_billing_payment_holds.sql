-- Payment holds are limited to the affected subscription and charge.
-- No manual grants, ratings, rooms, or subscription paid periods are removed.
create table public.billing_payment_holds(
 subscription_id text not null references public.billing_subscriptions(subscription_id) on delete cascade,
 source_id text not null,
 reason text not null check(reason in ('refund','dispute')),
 active boolean not null,
 period_end timestamptz,
 observed_at timestamptz not null,
 primary key(subscription_id,source_id,reason)
);
alter table public.billing_payment_holds enable row level security;
revoke all on public.billing_payment_holds from public,anon,authenticated;
grant all on public.billing_payment_holds to service_role;
-- Preserve any pre-existing holds without guessing their original charge.
insert into public.billing_payment_holds(subscription_id,source_id,reason,active,period_end,observed_at)
 select subscription_id,'legacy',access_hold,true,paid_through,coalesce(risk_observed_at,observed_at)
 from public.billing_subscriptions where access_hold<>'';

create function dp_private.billing_hold_for(input_subscription text,input_paid_through timestamptz) returns text
language sql stable security invoker set search_path=pg_catalog as $$
 select case when coalesce(bool_or(reason='dispute'),false) then 'dispute'
  when coalesce(bool_or(reason='refund' and (input_paid_through is null or period_end is null or period_end>=input_paid_through)),false) then 'refund' else '' end
 from public.billing_payment_holds where subscription_id=input_subscription and active;
$$;
revoke all on function dp_private.billing_hold_for(text,timestamptz) from public,anon,authenticated;
grant usage on schema dp_private to service_role;
grant execute on function dp_private.billing_hold_for(text,timestamptz) to service_role;
create function dp_private.refresh_subscription_hold() returns trigger
language plpgsql security invoker set search_path=pg_catalog as $$
begin
 new.access_hold:=dp_private.billing_hold_for(new.subscription_id,new.paid_through);return new;
end;
$$;
revoke all on function dp_private.refresh_subscription_hold() from public,anon,authenticated;
grant execute on function dp_private.refresh_subscription_hold() to service_role;
create trigger billing_subscription_hold before insert or update on public.billing_subscriptions
 for each row execute function dp_private.refresh_subscription_hold();

create function public.apply_billing_payment_risk(input_event text,input_live boolean,input_type text,
 input_customer text,input_subscription text,input_source text,input_reason text,input_hold boolean,
 input_period_end timestamptz,input_observed timestamptz) returns boolean
language plpgsql security invoker set search_path=pg_catalog as $$
declare s public.billing_subscriptions;
begin
 if input_reason not in ('refund','dispute') or input_source !~ '^ch_[A-Za-z0-9]+$'
  or input_hold is null or input_observed is null or (input_reason='refund' and input_period_end is null) then raise exception 'invalid_risk';end if;
 perform pg_advisory_xact_lock(hashtextextended('billing-customer:'||input_customer||input_live::text,0));
 if exists(select 1 from public.billing_webhook_events where event_id=input_event) then return false;end if;
 select * into s from public.billing_subscriptions where subscription_id=input_subscription
  and customer_id=input_customer and livemode=input_live for update;
 if not found or not exists(select 1 from public.billing_customers where customer_id=input_customer and livemode=input_live and user_id=s.user_id) then raise exception 'subscription_unavailable';end if;
 insert into public.billing_payment_holds(subscription_id,source_id,reason,active,period_end,observed_at)
  values(input_subscription,input_source,input_reason,input_hold,input_period_end,input_observed)
  on conflict(subscription_id,source_id,reason) do update set active=excluded.active,period_end=excluded.period_end,observed_at=excluded.observed_at
  where public.billing_payment_holds.observed_at<=excluded.observed_at;
 update public.billing_subscriptions set access_hold=dp_private.billing_hold_for(subscription_id,paid_through),risk_observed_at=greatest(risk_observed_at,input_observed)
  where subscription_id=input_subscription;
 insert into public.billing_webhook_events(event_id,livemode,event_type) values(input_event,input_live,input_type);return true;
end;
$$;
revoke all on function public.apply_billing_payment_risk(text,boolean,text,text,text,text,text,boolean,timestamptz,timestamptz) from public,anon,authenticated;
grant execute on function public.apply_billing_payment_risk(text,boolean,text,text,text,text,text,boolean,timestamptz,timestamptz) to service_role;
revoke execute on function public.apply_billing_risk(text,boolean,text,text,text,boolean,timestamptz) from service_role;
notify pgrst,'reload schema';

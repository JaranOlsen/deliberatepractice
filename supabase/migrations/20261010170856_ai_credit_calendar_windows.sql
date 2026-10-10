-- Pure calendar windows allow date-boundary tests without changing real billing time.
create function dp_private.ai_credit_monthly_window(anchor timestamptz,paid_end timestamptz,as_of timestamptz) returns jsonb
language plpgsql immutable security invoker set search_path=pg_catalog as $$
declare n integer;starts timestamptz;ends timestamptz;
begin
 if anchor is null or paid_end is null or as_of is null or as_of<anchor or as_of>=paid_end then return null;end if;
 n:=(extract(year from as_of at time zone 'UTC')-extract(year from anchor at time zone 'UTC'))::integer*12+(extract(month from as_of at time zone 'UTC')-extract(month from anchor at time zone 'UTC'))::integer;
 starts:=(anchor at time zone 'UTC'+make_interval(months=>n)) at time zone 'UTC';
 if starts>as_of then n:=n-1;starts:=(anchor at time zone 'UTC'+make_interval(months=>n)) at time zone 'UTC';end if;
 ends:=least((anchor at time zone 'UTC'+make_interval(months=>n+1)) at time zone 'UTC',paid_end);
 return jsonb_build_object('start',starts,'end',ends);
end;$$;
revoke all on function dp_private.ai_credit_monthly_window(timestamptz,timestamptz,timestamptz) from public,anon,authenticated;
grant execute on function dp_private.ai_credit_monthly_window(timestamptz,timestamptz,timestamptz) to service_role;

create or replace function dp_private.prepare_ai_credits(uid uuid) returns void
language plpgsql security invoker set search_path=pg_catalog as $$
declare op public.ai_credit_operations;s public.billing_subscriptions;starts timestamptz;ends timestamptz;credit_period jsonb;
begin
 perform pg_advisory_xact_lock(hashtextextended('ai-credits:'||uid::text,0));
 for op in select * from public.ai_credit_operations where user_id=uid and state='reserved' and lease_until<=now() loop
  perform dp_private.release_ai_credit_operation(uid,op.request_id,op.action,op.lease);
 end loop;
 if not (select ai_credits_enabled from public.app_public_config) then return;end if;
 -- One current allowance, not accumulated grants for missed months. Annual
 -- subscriptions release the same 120 credits each subscription month.
 select * into s from public.billing_subscriptions where user_id=uid and (livemode or ((select billing_mode='test' from public.app_public_config) and exists(select 1 from public.ai_admin_access where user_id=uid)))
  and status in ('active','past_due') and paid_through>now() and access_hold=''
  order by observed_at desc limit 1;
 if not found or s.period_started_at is null then return;end if;
 credit_period:=dp_private.ai_credit_monthly_window(s.period_started_at,s.paid_through,now());
 if credit_period is null then return;end if;
 starts:=(credit_period->>'start')::timestamptz;ends:=(credit_period->>'end')::timestamptz;
 if starts>now() or ends<=now() then return;end if;
 insert into public.ai_credit_lots(user_id,source_key,kind,livemode,credits,remaining,valid_from,expires_at,subscription_id)
 values(uid,'included:'||s.subscription_id||':'||extract(epoch from starts)::text,'included',s.livemode,120,120,starts,ends,s.subscription_id) on conflict(source_key) do nothing;
end;
$$;

notify pgrst,'reload schema';

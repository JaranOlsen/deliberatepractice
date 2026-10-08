begin;
insert into auth.users(id,email) values
 ('71000000-0000-4000-8000-000000000001','first@account.invalid'),
 ('71000000-0000-4000-8000-000000000002','second@account.invalid'),
 ('71000000-0000-4000-8000-000000000003','third@account.invalid');
insert into public.entitlements(access_code,access_level,expires_at) values('ACCOUNT-VALID','all',now()+interval '1 day'),('ACCOUNT-EXPIRED','pro',now()-interval '1 day');
set local role authenticated;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000001',true);
do $$ begin
 if (public.get_account_access()->>'full_content')::boolean then raise exception 'Unsubscribed user has paid access';end if;
 begin insert into public.account_access_grants(user_id,grant_key) values(auth.uid(),'forged');raise exception 'User can grant access';exception when insufficient_privilege then null;end;
 begin perform public.reserve_checkout_attempt(auth.uid(),true,gen_random_uuid(),'month');raise exception 'Client can reserve service checkout';exception when insufficient_privilege then null;end;
 begin perform public.redeem_account_access_code('ACCOUNT-EXPIRED');raise exception 'Expired license worked';exception when raise_exception then if sqlerrm<>'expired_code' then raise;end if;end;
 perform public.redeem_account_access_code('ACCOUNT-VALID');perform public.redeem_account_access_code('ACCOUNT-VALID');
 if not (public.get_account_access()->>'full_content')::boolean or (select count(*) from public.account_access_grants)<>1 then raise exception 'License grant/replay failed';end if;
 if (public.get_account_access()->>'ai_access')::boolean then raise exception 'Library purchase grants AI admin';end if;
end $$;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000002',true);
do $$ begin
 if exists(select 1 from public.account_access_grants) or (public.get_account_access()->>'full_content')::boolean then raise exception 'Another user inherited the license';end if;
end $$;
reset role;
update public.entitlements set expires_at=now()-interval '1 second' where access_code='ACCOUNT-VALID';
set local role authenticated;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000001',true);
do $$ begin if (public.get_account_access()->>'full_content')::boolean then raise exception 'Expired source license still grants access';end if;end $$;
reset role;
insert into public.billing_customers(user_id,livemode,customer_id) values('71000000-0000-4000-8000-000000000002',true,'cus_AccountLive'),('71000000-0000-4000-8000-000000000003',false,'cus_AccountTest');
set local role service_role;
select public.apply_billing_snapshot('evt_AccountPaid',true,'invoice.paid','sub_AccountLive','cus_AccountLive','price_Month','active','month',now()+interval '30 days',false,now());
select public.apply_billing_snapshot('evt_AccountPaid',true,'invoice.paid','sub_AccountLive','cus_AccountLive','price_Month','active','month',now()+interval '30 days',false,now());
select public.apply_billing_snapshot('evt_AccountOld',true,'customer.subscription.updated','sub_AccountLive','cus_AccountLive','price_Month','canceled','month',null,false,now()-interval '1 hour');
select public.apply_billing_snapshot('evt_AccountTestPaid',false,'invoice.paid','sub_AccountTest','cus_AccountTest','price_Month','active','month',now()+interval '30 days',false,now());
select public.reserve_checkout_attempt('71000000-0000-4000-8000-000000000002',true,'71000000-0000-4000-8000-000000000004','month');
select public.reserve_checkout_attempt('71000000-0000-4000-8000-000000000002',true,'71000000-0000-4000-8000-000000000004','month');
do $$ begin
 begin perform public.reserve_checkout_attempt('71000000-0000-4000-8000-000000000002',true,'71000000-0000-4000-8000-000000000004','year');raise exception 'Checkout identity changed its plan';exception when raise_exception then if sqlerrm<>'attempt_conflict' then raise;end if;end;
end $$;
do $$ declare lease jsonb;begin
 lease:=public.begin_checkout('71000000-0000-4000-8000-000000000002',true,'71000000-0000-4000-8000-000000000004','month');
 if lease->>'state'<>'acquired' then raise exception 'No checkout lease';end if;
 if public.begin_checkout('71000000-0000-4000-8000-000000000002',true,gen_random_uuid(),'year')->>'state'<>'pending' then raise exception 'Concurrent checkout was allowed';end if;
 if public.finish_checkout('71000000-0000-4000-8000-000000000002',true,gen_random_uuid(),'cs_test_Fixture','month') then raise exception 'Wrong checkout lease overwrote state';end if;
 if not public.finish_checkout('71000000-0000-4000-8000-000000000002',true,(lease->>'lease')::uuid,'cs_test_Fixture','month') then raise exception 'Checkout completion failed';end if;
 lease:=public.begin_checkout('71000000-0000-4000-8000-000000000002',true,gen_random_uuid(),'year');
 if lease->>'previous_session'<>'cs_test_Fixture' then raise exception 'Previous checkout was forgotten';end if;
 perform public.abort_checkout('71000000-0000-4000-8000-000000000002',true,(lease->>'lease')::uuid);
end $$;
reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000002',true);
do $$ begin
 if not (public.get_account_access()->>'full_content')::boolean or (public.get_account_access()->'subscription'->>'status')<>'active' then raise exception 'Paid membership or out-of-order protection failed';end if;
 if (select count(*) from public.billing_subscriptions)<>1 then raise exception 'Subscription RLS leaked another account';end if;
 if (public.get_account_access()->>'ai_access')::boolean then raise exception 'Subscription granted AI admin';end if;
end $$;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000003',true);
do $$ begin if (public.get_account_access()->>'full_content')::boolean then raise exception 'Test billing unlocked production content';end if;end $$;
reset role;
update public.billing_subscriptions set paid_through=now()-interval '1 second' where subscription_id='sub_AccountLive';
set local role authenticated;
select set_config('request.jwt.claim.sub','71000000-0000-4000-8000-000000000002',true);
do $$ begin if (public.get_account_access()->>'full_content')::boolean then raise exception 'Expired payment grants access';end if;end $$;
reset role;
rollback;

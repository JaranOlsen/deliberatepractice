begin;
insert into auth.users(id,email) values
 ('81000000-0000-4000-8000-000000000001','credits-month@isolated.invalid'),
 ('81000000-0000-4000-8000-000000000002','credits-year@isolated.invalid'),
 ('81000000-0000-4000-8000-000000000003','credits-free@isolated.invalid');
update public.app_public_config set ai_credits_enabled=true;
update public.ai_credit_packs set enabled=true;
insert into public.billing_customers(user_id,livemode,customer_id) values
 ('81000000-0000-4000-8000-000000000001',true,'cus_CreditMonth'),
 ('81000000-0000-4000-8000-000000000002',true,'cus_CreditYear'),
 ('81000000-0000-4000-8000-000000000003',true,'cus_CreditFree');
insert into public.billing_subscriptions(subscription_id,user_id,livemode,customer_id,price_id,status,billing_interval,period_started_at,paid_through,observed_at) values
 ('sub_CreditMonth','81000000-0000-4000-8000-000000000001',true,'cus_CreditMonth','price_CreditMonth','active','month',now()-interval '10 days',now()+interval '20 days',now()),
 ('sub_CreditYear','81000000-0000-4000-8000-000000000002',true,'cus_CreditYear','price_CreditYear','active','year',now()-interval '4 months 10 days',now()+interval '8 months',now());
select set_config('request.jwt.claim.sub','81000000-0000-4000-8000-000000000001',true);
set local role authenticated;
do $$begin
 if not public.get_ai_access() or not (public.get_account_access()->>'ai_access')::boolean then raise exception 'A subscriber should access AI';end if;
 if (public.get_account_access()->>'ai_admin')::boolean then raise exception 'A subscriber must not become an admin';end if;
 begin perform public.get_ai_credit_balance(auth.uid());raise exception 'A client must not call service balance writes';exception when insufficient_privilege then null;end;
 begin perform 1 from public.ai_credit_operations;raise exception 'Credit receipts must remain service only';exception when insufficient_privilege then null;end;
end$$;
reset role;
set local role service_role;
do $$declare b jsonb;a jsonb;r jsonb;uid uuid:='81000000-0000-4000-8000-000000000001';rid uuid:='82000000-0000-4000-8000-000000000001';begin
 b:=public.get_ai_credit_balance(uid);
 if b->>'balance'<>'120' then raise exception 'Monthly included balance: %',b;end if;
 perform public.get_ai_credit_balance(uid);
 if (select count(*) from public.ai_credit_lots where user_id=uid)<>1 then raise exception 'Repeat reads cannot refill credits';end if;
 a:=public.begin_ai_credit_operation(uid,rid,'assess',repeat('a',64));
 if a->>'cost'<>'1' or (public.get_ai_credit_balance(uid)->>'balance')<>'119' then raise exception 'Reserve must debit once';end if;
 r:=public.begin_ai_credit_operation(uid,rid,'assess',repeat('a',64));if r->>'state'<>'pending' then raise exception 'Concurrent duplicate must be pending';end if;
 if public.finish_ai_credit_operation(uid,rid,'assess',gen_random_uuid(),'{"test":true}') then raise exception 'Wrong lease can settle';end if;
 if not public.finish_ai_credit_operation(uid,rid,'assess',(a->>'lease')::uuid,'{"test":true}') then raise exception 'Correct lease cannot settle';end if;
 r:=public.begin_ai_credit_operation(uid,rid,'assess',repeat('a',64));if r->>'state'<>'complete' or (public.get_ai_credit_balance(uid)->>'balance')<>'119' then raise exception 'Complete replay cannot debit';end if;
 begin perform public.begin_ai_credit_operation(uid,rid,'assess',repeat('b',64));raise exception 'Changed replay accepted';exception when raise_exception then if sqlerrm<>'attempt_conflict' then raise;end if;end;
 rid:='82000000-0000-4000-8000-000000000002';a:=public.begin_ai_credit_operation(uid,rid,'delivery',repeat('b',64));
 if (public.get_ai_credit_balance(uid)->>'balance')<>'116' then raise exception 'Delivery must cost three';end if;
 perform public.abort_ai_credit_operation(uid,rid,'delivery',(a->>'lease')::uuid);
 perform public.abort_ai_credit_operation(uid,rid,'delivery',(a->>'lease')::uuid);
 if (public.get_ai_credit_balance(uid)->>'balance')<>'119' then raise exception 'Failed delivery must refund exactly once';end if;
 a:=public.begin_ai_credit_operation(uid,rid,'delivery',repeat('b',64));
 update public.ai_credit_operations set lease_until=now()-interval '1 second' where user_id=uid and request_id=rid;
 if (public.get_ai_credit_balance(uid)->>'balance')<>'119' then raise exception 'Abandoned lease did not release';end if;
 if public.finish_ai_credit_operation(uid,rid,'delivery',(a->>'lease')::uuid,'{"test":true}') then raise exception 'Expired worker can settle';end if;
 b:=public.get_ai_credit_balance('81000000-0000-4000-8000-000000000002');
 if b->>'balance'<>'120' or (b->>'refresh_at')::timestamptz>now()+interval '1 month' then raise exception 'Annual should get only current month, not 12 months upfront: %',b;end if;
end$$;
do $$begin
 if public.check_ai_content_access('81000000-0000-4000-8000-000000000003','case-nina') then raise exception 'Purchased credits cannot unlock premium cases';end if;
 if not public.check_ai_content_access('81000000-0000-4000-8000-000000000003','case-sara') then raise exception 'Free cases must remain available';end if;
end$$;
-- Fulfillment is authorized only for an app-created Checkout + known customer.
insert into public.ai_credit_checkout_attempts(user_id,livemode,attempt_id,pack_key,lease,session_id) values
 ('81000000-0000-4000-8000-000000000003',true,'83000000-0000-4000-8000-000000000001','small',gen_random_uuid(),'cs_CreditPack');
select public.apply_ai_credit_purchase('evt_CreditPaid',true,'checkout.session.completed','cus_CreditFree','cs_CreditPack','pi_CreditPack','small');
select public.apply_ai_credit_purchase('evt_CreditPaidAgain',true,'checkout.session.async_payment_succeeded','cus_CreditFree','cs_CreditPack','pi_CreditPack','small');
do $$declare uid uuid:='81000000-0000-4000-8000-000000000003';rid uuid:='84000000-0000-4000-8000-000000000001';a jsonb;begin
 if (public.get_ai_credit_balance(uid)->>'purchased')<>'120' then raise exception 'Two events for one purchase must grant once';end if;
 update public.ai_credit_lots set remaining=1 where user_id=uid;
 a:=public.begin_ai_credit_operation(uid,rid,'assess',repeat('c',64));
 begin perform public.begin_ai_credit_operation(uid,gen_random_uuid(),'assess',repeat('d',64));raise exception 'Concurrent overspend accepted';exception when raise_exception then if sqlerrm<>'credits_exhausted' then raise;end if;end;
 perform public.reserve_ai_call(uid); -- Last purchased credit held must not fail authorization.
 perform public.abort_ai_credit_operation(uid,rid,'assess',(a->>'lease')::uuid);
 if (public.get_ai_credit_balance(uid)->>'balance')<>'1' then raise exception 'Final credit failed to restore';end if;
 perform public.apply_ai_credit_risk('evt_CreditRefund',true,'charge.refunded','cus_CreditFree','pi_CreditPack','ch_CreditPack','refund',120,true,now());
 if (public.get_ai_credit_balance(uid)->>'balance')<>'0' then raise exception 'Refunded credits must be unusable';end if;
 if (public.get_ai_credit_balance('81000000-0000-4000-8000-000000000001')->>'balance')<>'119' then raise exception 'Refund changed another account';end if;
 -- Full subscription refunds stop included AI, not independently purchased AI.
 update public.billing_subscriptions set access_hold='dispute' where subscription_id='sub_CreditMonth';
 insert into public.billing_payment_holds(subscription_id,source_id,reason,active,observed_at) values('sub_CreditMonth','ch_CreditMonth','dispute',true,now());
 update public.billing_subscriptions set observed_at=now() where subscription_id='sub_CreditMonth';
 if (public.get_ai_credit_balance('81000000-0000-4000-8000-000000000001')->>'balance')<>'0' then raise exception 'Subscription hold must pause included credits';end if;
end$$;
reset role;
rollback;

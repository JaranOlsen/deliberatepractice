begin;
insert into auth.users(id,email) values('76000000-0000-4000-8000-000000000001','scoped-billing@example.invalid');
insert into public.billing_customers(user_id,livemode,customer_id) values('76000000-0000-4000-8000-000000000001',true,'cus_Scoped');
do $$
declare uid uuid:='76000000-0000-4000-8000-000000000001';ending timestamptz:=now()+interval '30 days';
begin
 perform public.apply_billing_snapshot('evt_ScopedPaid',true,'invoice.paid','sub_Scoped','cus_Scoped','price_Scoped','active','month',ending,false,now());
 if not dp_private.has_full_content(uid) then raise exception 'Paid access missing';end if;
 perform public.apply_billing_payment_risk('evt_OldRefund',true,'charge.refunded','cus_Scoped','sub_Scoped','ch_Old','refund',true,ending-interval '1 month',now());
 if not dp_private.has_full_content(uid) then raise exception 'Old invoice refund paused the current paid period';end if;
 perform public.apply_billing_payment_risk('evt_CurrentRefund',true,'charge.refunded','cus_Scoped','sub_Scoped','ch_Current','refund',true,ending,now());
 if dp_private.has_full_content(uid) then raise exception 'Current full refund did not pause refunded access';end if;
 perform public.apply_billing_snapshot('evt_NewPeriod',true,'invoice.paid','sub_Scoped','cus_Scoped','price_Scoped','active','month',ending+interval '1 month',false,now()+interval '1 second');
 if not dp_private.has_full_content(uid) then raise exception 'New paid period retained the old refund hold';end if;
 perform public.apply_billing_payment_risk('evt_DisputeA',true,'charge.dispute.created','cus_Scoped','sub_Scoped','ch_DisputeA','dispute',true,ending,now());
 perform public.apply_billing_payment_risk('evt_DisputeB',true,'charge.dispute.created','cus_Scoped','sub_Scoped','ch_DisputeB','dispute',true,ending,now());
 perform public.apply_billing_payment_risk('evt_WonA',true,'charge.dispute.closed','cus_Scoped','sub_Scoped','ch_DisputeA','dispute',false,ending,now()+interval '2 seconds');
 if dp_private.has_full_content(uid) then raise exception 'Resolving one dispute cleared another';end if;
 perform public.apply_billing_payment_risk('evt_WonB',true,'charge.dispute.closed','cus_Scoped','sub_Scoped','ch_DisputeB','dispute',false,ending,now()+interval '2 seconds');
 if not dp_private.has_full_content(uid) then raise exception 'Resolved disputes did not restore access';end if;
 perform public.apply_billing_payment_risk('evt_StaleDispute',true,'charge.dispute.created','cus_Scoped','sub_Scoped','ch_DisputeB','dispute',true,ending,now());
 if not dp_private.has_full_content(uid) then raise exception 'Stale dispute overwrote newer resolution';end if;
 if public.apply_billing_payment_risk('evt_WonB',true,'charge.dispute.closed','cus_Scoped','sub_Scoped','ch_DisputeB','dispute',true,ending,now()+interval '3 seconds') then raise exception 'Replay was not deduplicated';end if;
 begin
  perform public.apply_billing_payment_risk('evt_WrongMode',false,'charge.refunded','cus_Scoped','sub_Scoped','ch_Current','refund',true,ending,now());
  raise exception 'Wrong mode modified a subscription';
 exception when raise_exception then if sqlerrm<>'subscription_unavailable' then raise;end if;end;
end;
$$;
set local role authenticated;
do $$ begin
 begin perform public.apply_billing_payment_risk('evt_Forged',true,'charge.refunded','cus_Scoped','sub_Scoped','ch_Current','refund',true,now(),now());raise exception 'Client can alter payment access';
 exception when insufficient_privilege then null;end;
end $$;
rollback;

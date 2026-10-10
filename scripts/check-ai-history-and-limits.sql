begin;
insert into auth.users(id,email) values('91000000-0000-4000-8000-000000000001','history@isolated.invalid'),('91000000-0000-4000-8000-000000000002','other@isolated.invalid');
insert into public.ai_admin_access(user_id) values('91000000-0000-4000-8000-000000000001');
set local role service_role;
do $$declare uid uuid:='91000000-0000-4000-8000-000000000001';rid uuid:='92000000-0000-4000-8000-000000000001';roundid uuid:='93000000-0000-4000-8000-000000000001';a jsonb;result jsonb;begin
 a:=public.begin_ai_credit_operation(uid,rid,'assess',repeat('a',64));
 result:=jsonb_build_object('languageId','en','history',jsonb_build_object('roundId',roundid,'skillId','empathic-understanding','caseId','case-sara','difficulty','easy','statementId','test-statement'),
 'response',jsonb_build_object('kind','first','model','fixture','rubric','wording-coaching-v2','contentRevision','fixture','result',jsonb_build_object('assessable',true,'score',4,'strength','Specific strength.','adjustment','Specific adjustment.','limitation','')));
 if not public.finish_ai_credit_operation(uid,rid,'assess',(a->>'lease')::uuid,result) then raise exception 'Unable to finish';end if;
 if (select count(*) from public.ai_practice_attempts where user_id=uid)<>1 then raise exception 'Trusted result must create one history entry';end if;
 perform public.begin_ai_credit_operation(uid,rid,'assess',repeat('a',64));
 if (select count(*) from public.ai_practice_attempts where user_id=uid)<>1 then raise exception 'Replay must not duplicate history';end if;
 a:=public.begin_ai_credit_operation(uid,'92000000-0000-4000-8000-000000000002','assess',repeat('b',64));
 perform public.begin_ai_credit_operation(uid,gen_random_uuid(),'transcribe',repeat('c',64));
 begin perform public.begin_ai_credit_operation(uid,gen_random_uuid(),'transcribe',repeat('d',64));raise exception 'Concurrency cap did not stop extra calls';exception when raise_exception then if sqlerrm<>'service_busy' then raise;end if;end;
 -- A funded non-admin is not blocked by other users' old pilot counters.
 insert into public.ai_credit_lots(user_id,source_key,kind,livemode,credits,remaining) values('91000000-0000-4000-8000-000000000002','fixture-funded','purchased',true,120,120);
 update public.app_public_config set ai_credits_enabled=true;
 insert into public.ai_call_usage(owner,window_kind,bucket,calls) values('global','day',date_trunc('day',now()),600),('91000000-0000-4000-8000-000000000002','day',date_trunc('day',now()),200);
 perform public.reserve_ai_call('91000000-0000-4000-8000-000000000002');
 update public.ai_service_limits set enabled=false;
 begin perform public.reserve_ai_call('91000000-0000-4000-8000-000000000002');raise exception 'Emergency stop must apply';exception when raise_exception then if sqlerrm<>'not_configured' then raise;end if;end;
end$$;
reset role;
select set_config('request.jwt.claim.sub','91000000-0000-4000-8000-000000000002',true);
set local role authenticated;
do $$begin
 if exists(select 1 from public.ai_practice_attempts) then raise exception 'Another user can read history';end if;
 begin insert into public.ai_practice_attempts(user_id,attempt_id,round_id,language_id,skill_id,case_id,difficulty,statement_id,kind,assessable,score,strength,adjustment,limitation,model,rubric,content_revision) values(auth.uid(),gen_random_uuid(),gen_random_uuid(),'en','empathic-understanding','case-sara','easy','fake','first',true,5,'s','a','','fake','fake','fake');raise exception 'Browser could forge AI score';exception when insufficient_privilege then null;end;
 begin perform public.get_ai_usage_summary();raise exception 'Non-admin could inspect usage';exception when insufficient_privilege then null;end;
end$$;
reset role;
select set_config('request.jwt.claim.sub','91000000-0000-4000-8000-000000000001',true);
set local role authenticated;
do $$begin if (select count(*) from public.ai_practice_attempts)<>1 then raise exception 'Owner cannot read feedback';end if;end$$;
reset role;
set local role service_role;
select public.delete_ai_history_round('91000000-0000-4000-8000-000000000001','93000000-0000-4000-8000-000000000001');
select public.finish_ai_credit_operation('91000000-0000-4000-8000-000000000001','92000000-0000-4000-8000-000000000002','assess',
 (select lease from public.ai_credit_operations where user_id='91000000-0000-4000-8000-000000000001' and request_id='92000000-0000-4000-8000-000000000002' and action='assess'),
 '{"languageId":"en","history":{"roundId":"93000000-0000-4000-8000-000000000001","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","statementId":"test-statement"},"response":{"kind":"retry","model":"fixture","rubric":"wording-coaching-v2","contentRevision":"fixture","result":{"assessable":true,"score":5,"strength":"Late strength.","adjustment":"Late adjustment.","limitation":""}}}');
reset role;
set local role authenticated;
do $$begin if exists(select 1 from public.ai_practice_attempts) then raise exception 'Owner cannot delete feedback';end if;end$$;
reset role;
set local role service_role;
do $$declare w jsonb;begin
 w:=dp_private.ai_credit_monthly_window('2026-01-31 10:00Z','2027-01-31 10:00Z','2026-02-28 10:00Z');
 if (w->>'start')::timestamptz<>'2026-02-28 10:00Z' or (w->>'end')::timestamptz<>'2026-03-31 10:00Z' then raise exception 'February must clamp without drifting subsequent months';end if;
 w:=dp_private.ai_credit_monthly_window('2024-01-31 10:00Z','2025-01-31 10:00Z','2024-02-29 10:00Z');
 if (w->>'start')::timestamptz<>'2024-02-29 10:00Z' then raise exception 'Leap years must retain Feb 29';end if;
 w:=dp_private.ai_credit_monthly_window('2026-01-31 10:00Z','2026-04-15 10:00Z','2026-04-13 10:00Z');
 if (w->>'end')::timestamptz<>'2026-04-15 10:00Z' then raise exception 'Grant cannot outlast paid period';end if;
 if dp_private.ai_credit_monthly_window('2026-01-31 10:00Z','2026-04-15 10:00Z','2026-04-15 10:00Z') is not null then raise exception 'Expired period cannot grant';end if;
end$$;
reset role;
rollback;

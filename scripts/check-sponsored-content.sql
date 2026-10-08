begin;
insert into auth.users(id,email) values
 ('74000000-0000-4000-8000-000000000001','host@sponsor.invalid'),
 ('74000000-0000-4000-8000-000000000002','subscriber@sponsor.invalid'),
 ('74000000-0000-4000-8000-000000000003','guest@sponsor.invalid'),
 ('74000000-0000-4000-8000-000000000004','outside@sponsor.invalid');
insert into public.account_access_grants(user_id,grant_key,expires_at) values('74000000-0000-4000-8000-000000000002','sponsor-fixture',now()+interval '1 day');
do $$ declare r jsonb; config jsonb; code text; scope jsonb; before_version integer;
begin
 select jsonb_build_object('languageId','en','skillId',skill_id,'caseId',case_id,'difficulty',difficulty,
  'contentRevision',revision,'roundSize',12,'statements',entries) into config
 from dp_private.focused_level_catalog where skill_id='empathic-refocusing' and case_id='case-nina' and difficulty='moderate' limit 1;
 if config is null then raise exception 'Missing canonical premium fixture';end if;
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000001',true);
 r:=public.create_practice_room('{"languageId":"en","hostRole":"therapist"}','74000000-0000-4000-8000-000000000005');code:=r->>'code';
 begin perform public.prepare_practice_room('74000000-0000-4000-8000-000000000005',gen_random_uuid(),(r->>'version')::integer,config);
  raise exception 'Free host configured premium without a sponsor';exception when raise_exception then if sqlerrm<>'full_access_required' then raise;end if;end;
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000002',true);
 r:=public.join_practice_room(code,'client');
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000001',true);
 scope:=public.get_content_access('74000000-0000-4000-8000-000000000005');
 if not (scope->>'full_content')::boolean or (scope->>'personal_content')::boolean then raise exception 'Sponsored chooser scope failed';end if;
 r:=public.prepare_practice_room('74000000-0000-4000-8000-000000000005',gen_random_uuid(),(r->>'version')::integer,config);
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000003',true);
 r:=public.join_practice_room(code,'observer');
 scope:=public.get_content_access('74000000-0000-4000-8000-000000000005');
 if (scope->>'full_content')::boolean or scope->'room'->>'case_id'<>'case-nina'
  or jsonb_array_length(scope->'room'->'statement_ids')<>12 then raise exception 'Guest received incorrect material scope';end if;
 if (public.get_content_access()->>'full_content')::boolean then raise exception 'Room guest got independent premium access';end if;
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000004',true);
 begin perform public.get_content_access('74000000-0000-4000-8000-000000000005');raise exception 'Non-member accessed sponsored room';exception when raise_exception then if sqlerrm<>'room_unavailable' then raise;end if;end;
 update public.account_access_grants set expires_at=now()-interval '1 second' where user_id='74000000-0000-4000-8000-000000000002';
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000003',true);
 if public.get_content_access('74000000-0000-4000-8000-000000000005')->'room' is null then raise exception 'An existing round was interrupted';end if;
 perform set_config('request.jwt.claim.sub','74000000-0000-4000-8000-000000000001',true);
 begin perform public.prepare_practice_room('74000000-0000-4000-8000-000000000005',gen_random_uuid(),(r->>'version')::integer,config);
  raise exception 'Expired sponsorship created another premium round';exception when raise_exception then if sqlerrm<>'full_access_required' then raise;end if;end;
 select jsonb_build_object('languageId','en','skillId',skill_id,'caseId',case_id,'difficulty',difficulty,
  'contentRevision',revision,'roundSize',12,'statements',entries) into config
  from dp_private.focused_level_catalog where skill_id='experiential-focusing' and case_id='case-arne' and difficulty='hard' limit 1;
 r:=public.create_practice_room('{"languageId":"en","hostRole":"therapist"}','74000000-0000-4000-8000-000000000006');
 r:=public.prepare_practice_room('74000000-0000-4000-8000-000000000006',gen_random_uuid(),(r->>'version')::integer,config);
 if r->>'access_sponsor_id' is not null then raise exception 'An existing free case requires sponsorship';end if;
 scope:=public.get_content_access('74000000-0000-4000-8000-000000000006');
 if scope->'room'->>'case_id'<>'case-arne' then raise exception 'Free room material is inaccessible';end if;
end $$;
rollback;

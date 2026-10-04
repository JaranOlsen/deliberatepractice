-- Local fixtures only. Catalog metadata is checked against the authoring source in JS.
begin;
create function pg_temp.level_action(r jsonb, actor uuid, action text, score integer default null) returns jsonb
language plpgsql as $$
declare member text;
begin
 for member in select jsonb_array_elements_text(r->'member_ids') loop
  perform set_config('request.jwt.claim.sub',member,true);
  perform public.sync_practice_room((r->>'id')::uuid,(r->>'version')::integer);
 end loop;
 perform set_config('request.jwt.claim.sub',actor::text,true);
 return public.command_practice_room((r->>'id')::uuid,gen_random_uuid(),(r->>'version')::integer,action,score);
end; $$;
do $$
declare host uuid:=gen_random_uuid(); client uuid:=gen_random_uuid();
 bank dp_private.focused_level_catalog; exercise dp_private.exercise_catalog;
 cfg jsonb; bad jsonb; r jsonb; rid uuid; parent uuid; rejected boolean; count_before integer;
begin
 insert into auth.users(id,email) values(host,'host@levels.invalid'),(client,'client@levels.invalid');
 if (select count(*) from dp_private.focused_level_catalog)<>66 then raise exception 'Expected two cases with eleven banks at each of three levels';end if;
 if (select count(*) from dp_private.exercise_catalog where case_id in ('case-arne','case-mia'))<>6 then raise exception 'Missing mastery levels';end if;
 -- Every legal focused bank works; forged level, mixed bank and tags cannot enter a room.
 for bank in select * from dp_private.focused_level_catalog loop
  perform set_config('request.jwt.claim.sub',host::text,true);
  cfg:=jsonb_build_object('languageId','no','skillId',bank.skill_id,'caseId',bank.case_id,'difficulty',bank.difficulty,
    'contentRevision',bank.revision,'roundSize',12,'statements',bank.entries,'hostRole','therapist','preparationProtocol','ready-v1');
  bad:=cfg||jsonb_build_object('difficulty',case when bank.difficulty='hard' then 'easy' else 'hard' end);
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted another level';end if;
  bad:=cfg||jsonb_build_object('caseId',case when bank.case_id='case-mia' then 'case-arne' else 'case-mia' end);
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted another case bank';end if;
  bad:=jsonb_set(cfg,'{statements,0,criteriaTags}','["forged"]');
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted forged metadata';end if;
  bad:=jsonb_set(cfg,'{statements,0,criteriaTags}','[]');
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted removed assessment metadata';end if;
  bad:=cfg||'{"skillId":"therapist-self-awareness"}';
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted unsupported skill';end if;
  bad:=cfg||'{"contentRevision":"future"}';
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Focused room accepted unknown content revision';end if;
  -- Focused practice permits shuffling, unlike mastery.
  cfg:=jsonb_set(cfg,'{statements}',(select jsonb_agg(item order by position desc) from jsonb_array_elements(bank.entries) with ordinality items(item,position)));
  r:=public.create_practice_room(cfg,gen_random_uuid());
  if r->>'difficulty'<>bank.difficulty or jsonb_array_length(r->'statement_ids')<>12 then raise exception 'Focused level changed';end if;
 end loop;
 -- Full pair rounds at every focused level save correctly scoped self-assessments.
 for bank in select * from dp_private.focused_level_catalog where skill_id='empathic-understanding' loop
  perform set_config('request.jwt.claim.sub',host::text,true);rid:=gen_random_uuid();
  cfg:=jsonb_build_object('languageId','no','skillId',bank.skill_id,'caseId',bank.case_id,'difficulty',bank.difficulty,
    'contentRevision',bank.revision,'roundSize',12,'statements',bank.entries,'hostRole','therapist','preparationProtocol','ready-v1');
  r:=public.create_practice_room(cfg,rid);parent:=(r->>'round_id')::uuid;
  perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
  perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  r:=pg_temp.level_action(r,host,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop r:=pg_temp.level_action(r,host,'finish_item');end loop;
   r:=pg_temp.level_action(r,host,'rate',4);r:=pg_temp.level_action(r,host,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if (select count(*) from public.practice_ratings where parent_round_id=parent and difficulty=bank.difficulty and source='self' and case_id=bank.case_id and item_count=3)<>4 then raise exception 'Focused checkpoint level/scope lost';end if;
  if exists(select 1 from public.practice_ratings where parent_round_id=parent and exists(select 1 from unnest(completed_statement_ids) id where position('_'||bank.difficulty||'_' in id)=0)) then raise exception 'Focused checkpoint mixed levels';end if;
  if r->>'phase'<>'choosing' or r->>'client_id' is not null or r->>'therapist_id' is not null then raise exception 'Focused round did not reset roles';end if;
 end loop;
 -- Mastery uses the approved sequence/level, not the client-supplied label.
 select count(*) into count_before from public.practice_ratings;
 for exercise in select * from dp_private.exercise_catalog where case_id in ('case-arne','case-mia') loop
  perform set_config('request.jwt.claim.sub',host::text,true);rid:=gen_random_uuid();
  cfg:=jsonb_build_object('languageId','en','exerciseType','mastery','exerciseId',exercise.exercise_id,'caseId',exercise.case_id,
   'difficulty',exercise.difficulty,'contentRevision',exercise.revision,'roundSize',12,'statements',exercise.scenes,'hostRole','therapist','preparationProtocol','ready-v1');
  bad:=cfg||jsonb_build_object('difficulty',case when exercise.difficulty='hard' then 'easy' else 'hard' end);
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Mastery accepted mismatched exercise level';end if;
  r:=public.create_practice_room(cfg,rid);parent:=(r->>'round_id')::uuid;
  perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
  perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  r:=pg_temp.level_action(r,host,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop r:=pg_temp.level_action(r,host,'finish_item');end loop;
   r:=pg_temp.level_action(r,host,'rate',3);r:=pg_temp.level_action(r,host,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if (select count(*) from public.mastery_ratings where parent_round_id=parent and exercise_id=exercise.exercise_id and difficulty=exercise.difficulty and source='self')<>4 then raise exception 'Mastery checkpoint level lost';end if;
 end loop;
 if (select count(*) from public.practice_ratings)<>count_before then raise exception 'Mastery affected focused ratings';end if;
 if has_table_privilege('authenticated','dp_private.focused_level_catalog','select') or has_function_privilege('authenticated','dp_private.validate_room_config(jsonb)','execute') then raise exception 'Private catalog/validator exposed';end if;
end; $$;
rollback;

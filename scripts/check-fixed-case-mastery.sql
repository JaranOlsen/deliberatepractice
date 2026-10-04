-- Isolated metadata, attribution and compatibility checks; all writes roll back.
begin;
create function pg_temp.fixed_action(r jsonb,actor uuid,action text,score integer default null) returns jsonb
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
declare host uuid:=gen_random_uuid(); client uuid:=gen_random_uuid(); observer uuid:=gen_random_uuid();
 bank dp_private.focused_level_catalog; exercise dp_private.exercise_catalog;
 cfg jsonb; bad jsonb; r jsonb; rid uuid; parent uuid; rejected boolean; count_before integer; local_round uuid; saved uuid; replay uuid;
begin
 insert into auth.users(id,email) values(host,'host@fixed.invalid'),(client,'client@fixed.invalid'),(observer,'observer@fixed.invalid');
 if (select count(*) from dp_private.focused_level_catalog where case_id not in ('case-arne','case-mia','case-nora'))<>24 then raise exception 'Missing fixed extension banks';end if;
 if (select count(*) from dp_private.exercise_catalog where case_id not in ('case-sara','case-arne','case-mia','case-nora'))<>8 then raise exception 'Missing fixed mastery paths';end if;
 for bank in select * from dp_private.focused_level_catalog where case_id not in ('case-arne','case-mia','case-nora') loop
  perform set_config('request.jwt.claim.sub',host::text,true);rid:=gen_random_uuid();
  cfg:=jsonb_build_object('languageId','no','skillId',bank.skill_id,'caseId',bank.case_id,'difficulty',bank.difficulty,
   'contentRevision',bank.revision,'roundSize',12,'statements',bank.entries,'hostRole','therapist','preparationProtocol','ready-v1');
  for bad in select cfg||jsonb_build_object('difficulty',case when bank.difficulty='hard' then 'easy' else 'hard' end)
   union all select cfg||'{"contentRevision":"future"}'
   union all select jsonb_set(cfg,'{statements,0,criteriaTags}','["forged"]')
   union all select jsonb_set(cfg,'{statements,0,criteriaTags}','[]')
   union all select cfg||jsonb_build_object('caseId',case when bank.case_id='case-michael' then 'case-jason' else 'case-michael' end) loop
   rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
   if not rejected then raise exception 'Fixed extension accepted incompatible metadata';end if;
  end loop;
  r:=public.create_practice_room(cfg,rid);parent:=(r->>'round_id')::uuid;
  perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
  perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  r:=pg_temp.fixed_action(r,host,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop r:=pg_temp.fixed_action(r,host,'finish_item');end loop;
   r:=pg_temp.fixed_action(r,host,'rate',4);r:=pg_temp.fixed_action(r,host,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if (select count(*) from public.practice_ratings where parent_round_id=parent and difficulty=bank.difficulty and source='self' and skill_id=bank.skill_id and case_id=bank.case_id and item_count=3)<>4 then raise exception 'Fixed focused checkpoint attribution lost';end if;
  if r->>'phase'<>'choosing' or r->>'client_id' is not null or r->>'therapist_id' is not null then raise exception 'Fixed focused round did not reset roles';end if;
 end loop;
 select count(*) into count_before from public.practice_ratings;
 for exercise in select * from dp_private.exercise_catalog where case_id not in ('case-sara','case-arne','case-mia','case-nora') loop
  perform set_config('request.jwt.claim.sub',host::text,true);rid:=gen_random_uuid();
  cfg:=jsonb_build_object('languageId','en','exerciseType','mastery','exerciseId',exercise.exercise_id,'caseId',exercise.case_id,
   'difficulty',exercise.difficulty,'contentRevision',exercise.revision,'roundSize',12,'statements',exercise.scenes,'hostRole','therapist','preparationProtocol','ready-v1');
  for bad in select cfg||jsonb_build_object('difficulty',case when exercise.difficulty='hard' then 'easy' else 'hard' end)
   union all select cfg||'{"contentRevision":"future"}'
   union all select jsonb_set(cfg,'{statements}',(select jsonb_agg(scene order by position desc) from jsonb_array_elements(exercise.scenes) with ordinality entries(scene,position))) loop
   rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
   if not rejected then raise exception 'Fixed mastery accepted incompatible metadata';end if;
  end loop;
  r:=public.create_practice_room(cfg,rid);parent:=(r->>'round_id')::uuid;
  perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
  perform set_config('request.jwt.claim.sub',observer::text,true);r:=public.join_practice_room(r->>'code','observer');
  perform set_config('request.jwt.claim.sub',client::text,true);perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  perform set_config('request.jwt.claim.sub',host::text,true);perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  r:=pg_temp.fixed_action(r,observer,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop r:=pg_temp.fixed_action(r,observer,'finish_item');end loop;
   r:=pg_temp.fixed_action(r,observer,'rate',3);r:=pg_temp.fixed_action(r,observer,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if (select count(*) from public.mastery_ratings where parent_round_id=parent and exercise_id=exercise.exercise_id and difficulty=exercise.difficulty and source='observer' and therapist_user_id=host and created_by_user_id=observer and item_count=3)<>4 then raise exception 'Fixed mastery attribution lost';end if;
  if r->>'phase'<>'choosing' or r->>'exercise_id' is not null or r->>'observer_id' is not null or r->>'client_id' is not null or r->>'therapist_id' is not null then raise exception 'Fixed mastery round did not reset roles and material';end if;
  perform set_config('request.jwt.claim.sub',host::text,true);local_round:=gen_random_uuid();
  for checkpoint in 1..4 loop
   select public.record_mastery_rating('no',exercise.exercise_id,exercise.revision,local_round,checkpoint,
    array(select scene->>'id' from jsonb_array_elements(exercise.scenes) with ordinality entries(scene,position) where position between (checkpoint-1)*3+1 and checkpoint*3),4,'individual') into saved;
   select public.record_mastery_rating('no',exercise.exercise_id,exercise.revision,local_round,checkpoint,
    array(select scene->>'id' from jsonb_array_elements(exercise.scenes) with ordinality entries(scene,position) where position between (checkpoint-1)*3+1 and checkpoint*3),4,'individual') into replay;
   if saved<>replay then raise exception 'Fixed local mastery retry duplicated rating';end if;
  end loop;
  if (select count(*) from public.mastery_ratings where parent_round_id=local_round and exercise_id=exercise.exercise_id and difficulty=exercise.difficulty and source='self' and therapist_user_id=host and item_count=3)<>4 then raise exception 'Fixed local mastery attribution lost';end if;
 end loop;
 if (select count(*) from public.practice_ratings)<>count_before then raise exception 'Fixed mastery affected focused radar data';end if;
 if has_table_privilege('authenticated','dp_private.focused_level_catalog','select') or has_table_privilege('anon','dp_private.exercise_catalog','select') or has_function_privilege('authenticated','dp_private.validate_room_config(jsonb)','execute') then raise exception 'Private metadata exposed';end if;
end; $$;
rollback;

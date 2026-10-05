-- Isolated metadata, attribution and compatibility checks; all writes roll back.
begin;
create function pg_temp.focusing_action(r jsonb,actor uuid,action text,score integer default null) returns jsonb
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
 insert into auth.users(id,email) values(host,'host@focusing.invalid'),(client,'client@focusing.invalid'),(observer,'observer@focusing.invalid');
 if (select count(*) from dp_private.focused_level_catalog where skill_id='experiential-focusing')<>4 then raise exception 'Missing focusing banks';end if;
 for bank in select * from dp_private.focused_level_catalog where skill_id='experiential-focusing' loop
  perform set_config('request.jwt.claim.sub',host::text,true);rid:=gen_random_uuid();
  cfg:=jsonb_build_object('languageId','no','skillId',bank.skill_id,'caseId',bank.case_id,'difficulty',bank.difficulty,
   'contentRevision',bank.revision,'roundSize',12,'statements',bank.entries,'hostRole','therapist','preparationProtocol','ready-v1');
  for bad in select cfg||jsonb_build_object('difficulty',case when bank.difficulty='hard' then 'easy' else 'hard' end)
   union all select cfg||'{"contentRevision":"future"}'
   union all select cfg||'{"roundSize":3}'
   union all select jsonb_set(cfg,'{statements,0,id}','"dp_empathic-understanding_case-sara_01"')
   union all select jsonb_set(cfg,'{statements,0,criteriaTags}','["forged"]')
   union all select jsonb_set(cfg,'{statements,0,criteriaTags}','[]')
   union all select cfg||jsonb_build_object('caseId',case when bank.case_id='case-michael' then 'case-jason' else 'case-michael' end) loop
   rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
   if not rejected then raise exception 'Focusing accepted incompatible metadata';end if;
  end loop;
  r:=public.create_practice_room(cfg,rid);parent:=(r->>'round_id')::uuid;
  perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
  perform public.sync_practice_room(rid,(r->>'version')::integer);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
  r:=pg_temp.focusing_action(r,host,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop r:=pg_temp.focusing_action(r,host,'finish_item');end loop;
   r:=pg_temp.focusing_action(r,host,'rate',4);r:=pg_temp.focusing_action(r,host,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if (select count(*) from public.practice_ratings where parent_round_id=parent and difficulty=bank.difficulty and source='self' and skill_id=bank.skill_id and case_id=bank.case_id and item_count=3)<>4 then raise exception 'Focusing checkpoint attribution lost';end if;
  if r->>'phase'<>'choosing' or r->>'client_id' is not null or r->>'therapist_id' is not null then raise exception 'Focusing round did not reset roles';end if;
 end loop;
 -- Exercise the real authenticated reminder policy for both languages.
 perform set_config('request.jwt.claim.sub',host::text,true);
 set local role authenticated;
 insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values
  (host,'en','experiential-focusing','Let the client choose the words.'),
  (host,'no','experiential-focusing','La klienten velge ordene.');
 if (select count(*) from public.practice_goals where skill_id='experiential-focusing')<>2 then raise exception 'Focusing reminder unavailable to owner';end if;
 perform set_config('request.jwt.claim.sub',observer::text,true);
 if exists(select 1 from public.practice_goals where user_id=host) then raise exception 'Observer can see private focusing reminder';end if;
 rejected:=false;
 begin insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(host,'en','experiential-focusing','A note from someone else.');
 exception when insufficient_privilege then rejected:=true;end;
 if not rejected then raise exception 'Observer can write therapist reminder';end if;
 reset role;
 if has_table_privilege('authenticated','dp_private.focused_level_catalog','select') or has_function_privilege('anon','dp_private.validate_room_config(jsonb)','execute') or has_function_privilege('authenticated','dp_private.validate_room_config(jsonb)','execute') then raise exception 'Private focusing metadata exposed';end if;
end; $$;
rollback;

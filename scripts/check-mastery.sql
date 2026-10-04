-- Isolated guided mastery fixtures: no remote database or account data.
begin;
do $$
declare users uuid[]:=array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  rid uuid; r jsonb; replay jsonb; cfg jsonb; bad jsonb; e dp_private.exercise_catalog;
  actor uuid; therapist uuid; parent uuid; command uuid; v integer; token jsonb; id uuid; repeated uuid; ids text[];
  rejected boolean; focused_count integer;
begin
 insert into auth.users(id,email) select u,u::text||'@mastery.invalid' from unnest(users) u;
 select * into e from dp_private.exercise_catalog where exercise_id='mastery-sara-evenings';
 cfg:=jsonb_build_object('exerciseType','mastery','exerciseId',e.exercise_id,'contentRevision',e.revision,
  'languageId','en','caseId',e.case_id,'difficulty',e.difficulty,'roundSize',12,'statements',e.scenes,'hostRole','client','preparationProtocol','ready-v1');
 select count(*) into focused_count from public.practice_ratings;
 -- Reordered scenes and forged skill prompts are rejected before creating a room.
 perform set_config('request.jwt.claim.sub',users[1]::text,true);
 bad:=jsonb_set(cfg,'{statements}',(select jsonb_agg(scene order by position desc) from jsonb_array_elements(e.scenes) with ordinality items(scene,position)));
 rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Mastery accepted shuffled scenes';end if;
 bad:=jsonb_set(cfg,'{statements,0,skillId}','"self-disclosure"');
 rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Mastery accepted a forged skill';end if;
 rejected:=false;begin perform public.create_practice_room(cfg||'{"contentRevision":"future"}',gen_random_uuid());exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Mastery accepted an unknown revision';end if;
 for people in 2..4 loop
  rid:=gen_random_uuid();perform set_config('request.jwt.claim.sub',users[1]::text,true);
  -- An unconfigured host can choose mastery later.
  r:=public.create_practice_room('{"languageId":"en","hostRole":"client"}',rid);
  for i in 2..people loop perform set_config('request.jwt.claim.sub',users[i]::text,true);r:=public.join_practice_room(r->>'code','auto');end loop;
  perform set_config('request.jwt.claim.sub',users[1]::text,true);v:=(r->>'version')::integer;command:=gen_random_uuid();
  r:=public.prepare_practice_room(rid,command,v,cfg);
  replay:=public.prepare_practice_room(rid,command,v,cfg);
  if r->>'round_id'<>replay->>'round_id' then raise exception 'Preparation replay changed round';end if;
  if r->>'skill_id' is not null or r->>'exercise_type'<>'mastery' or r->'statement_ids' is distinct from (select jsonb_agg(scene->>'id' order by position) from jsonb_array_elements(e.scenes) with ordinality entries(scene,position)) then raise exception 'Mastery room metadata/order is wrong';end if;
  actor:=coalesce((r->>'observer_id')::uuid,(r->>'therapist_id')::uuid);therapist:=(r->>'therapist_id')::uuid;parent:=(r->>'round_id')::uuid;
  token:=jsonb_build_object('preparationId',r->>'preparation_id');
  for i in 1..least(people,3) loop
   perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,(r->>'version')::integer);
   if users[i]<>actor or people=2 and users[i]<>therapist then r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',token);end if;
  end loop;
  v:=(r->>'version')::integer;
  for i in 1..least(people,3) loop perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);end loop;
  perform set_config('request.jwt.claim.sub',actor::text,true);r:=public.command_practice_room(rid,gen_random_uuid(),v,'start');
  for checkpoint in 1..4 loop
   for item in 1..3 loop
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);end loop;
    perform set_config('request.jwt.claim.sub',actor::text,true);command:=gen_random_uuid();
    r:=public.command_practice_room(rid,command,v,case when checkpoint=2 then 'pass' else 'finish_item' end);
    replay:=public.command_practice_room(rid,command,v,case when checkpoint=2 then 'pass' else 'finish_item' end);
    if r->>'version'<>replay->>'version' or r->>'round_id'<>parent::text or r->>'therapist_id'<>therapist::text then raise exception 'Finish retry changed progress or roles';end if;
   end loop;
   perform set_config('request.jwt.claim.sub',users[1]::text,true);rejected:=false;
   begin perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rate',4);exception when raise_exception then rejected:=true;end;
   if not rejected then raise exception 'Client could rate';end if;
   perform set_config('request.jwt.claim.sub',actor::text,true);command:=gen_random_uuid();v:=(r->>'version')::integer;
   if checkpoint=2 then
    rejected:=false;begin perform public.command_practice_room(rid,command,v,'rate',4);exception when raise_exception then rejected:=true;end;
    if not rejected then raise exception 'Passed-only set was rated';end if;
   else
    r:=public.command_practice_room(rid,command,v,'rate',checkpoint);
    replay:=public.command_practice_room(rid,command,v,'rate',checkpoint);
    if r->>'version'<>replay->>'version' then raise exception 'Rate replay changed progress';end if;
    if (select count(*) from public.mastery_ratings where parent_round_id=parent and set_number=checkpoint)<>1 then raise exception 'Rate retry duplicated record';end if;
   end if;
   v:=(r->>'version')::integer;
   for i in 1..least(people,3) loop perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);end loop;
   perform set_config('request.jwt.claim.sub',actor::text,true);
   r:=public.command_practice_room(rid,gen_random_uuid(),v,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
  end loop;
  if r->>'phase'<>'choosing' or r->>'exercise_id' is not null or r->>'exercise_type'<>'single-skill' or r->>'therapist_id' is not null or r->>'client_id' is not null then raise exception 'Mastery round did not return to role/material selection';end if;
  if exists(select 1 from public.mastery_ratings where parent_round_id=parent and (therapist_user_id<>therapist or source<>case when people=2 then 'self' else 'observer' end or practice_mode<>'group' or cardinality(practiced_skill_ids)<>item_count)) then raise exception 'Wrong mastery attribution';end if;
 end loop;
 if (select count(*) from public.practice_ratings)<>focused_count then raise exception 'Mastery polluted focused skill ratings';end if;
 -- Self-rating retries may change the score, never attribution, scope or revision.
 perform set_config('request.jwt.claim.sub',users[2]::text,true);parent:=gen_random_uuid();
 select array_agg(scene->>'id' order by position) into ids from jsonb_array_elements(e.scenes) with ordinality entries(scene,position) where position<=3;
 id:=public.record_mastery_rating('no',e.exercise_id,e.revision,parent,1,ids,3,'individual');
 repeated:=public.record_mastery_rating('no',e.exercise_id,e.revision,parent,1,ids,4,'individual');
 if id<>repeated or (select score from public.mastery_ratings where mastery_ratings.id=repeated)<>4 then raise exception 'Self retry failed';end if;
 rejected:=false;begin perform public.record_mastery_rating('en',e.exercise_id,e.revision,parent,1,ids,3,'individual');exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Retry changed rating language';end if;
 rejected:=false;begin perform public.record_mastery_rating('no',e.exercise_id,e.revision,gen_random_uuid(),2,ids,3,'individual');exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Self rating accepted another checkpoint scenes';end if;
 rejected:=false;begin perform public.record_mastery_rating('no',e.exercise_id,e.revision,gen_random_uuid(),1,ids,3,'group');exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Standalone RPC forged a group rating';end if;
 perform set_config('mastery.test.owner',users[2]::text,true);perform set_config('mastery.test.other',users[1]::text,true);
 if has_function_privilege('authenticated','dp_private.write_mastery_rating(uuid,uuid,text,text,text,text,uuid,integer,text[],integer,text)','execute') or has_table_privilege('authenticated','dp_private.exercise_catalog','select') then raise exception 'Private mastery helpers exposed';end if;
end; $$;
set local role authenticated;
do $$begin
 perform set_config('request.jwt.claim.sub',current_setting('mastery.test.owner'),true);
 if not exists(select 1 from public.mastery_ratings) then raise exception 'Therapist cannot read own mastery history';end if;
 if exists(select 1 from public.mastery_ratings where therapist_user_id<>auth.uid()) then raise exception 'RLS exposed another therapist history';end if;
 if has_table_privilege('authenticated','public.mastery_ratings','insert,update,delete') then raise exception 'Direct mastery mutation grants';end if;
 perform set_config('request.jwt.claim.sub',current_setting('mastery.test.other'),true);
 if exists(select 1 from public.mastery_ratings) then raise exception 'Client can read therapist mastery history';end if;
end; $$;
reset role;
rollback;

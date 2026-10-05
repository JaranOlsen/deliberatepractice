-- Local-only task provenance, pass semantics and permissions. Everything rolls back.
begin;
create function pg_temp.task_action(r jsonb,actor uuid,action text,score integer default null) returns jsonb language plpgsql as $$
declare member text;
begin
 for member in select jsonb_array_elements_text(r->'member_ids') loop
  perform set_config('request.jwt.claim.sub',member,true);perform public.sync_practice_room((r->>'id')::uuid,(r->>'version')::integer);
 end loop;
 perform set_config('request.jwt.claim.sub',actor::text,true);
 return public.command_practice_room((r->>'id')::uuid,gen_random_uuid(),(r->>'version')::integer,action,score);
end; $$;
do $$
declare host uuid:=gen_random_uuid(); client uuid:=gen_random_uuid(); observer uuid:=gen_random_uuid();
 e dp_private.exercise_catalog;cfg jsonb;bad jsonb;r jsonb;rid uuid;parent uuid;rejected boolean;before_count integer;ids text[];saved uuid;replay uuid;
begin
 insert into auth.users(id,email) values(host,'host@task.invalid'),(client,'client@task.invalid'),(observer,'observer@task.invalid');
 select * into e from dp_private.exercise_catalog where exercise_format='task-episodes';
 if not found then raise exception 'Missing task catalog';end if;
 cfg:=jsonb_build_object('exerciseType','mastery','exerciseFormat','task-episodes','taskProtocol','task-episodes-v1','exerciseId',e.exercise_id,'languageId','en','caseId',e.case_id,'difficulty',e.difficulty,'contentRevision',e.revision,'roundSize',12,'statements',e.scenes,'hostRole','therapist','preparationProtocol','ready-v1');
 perform set_config('request.jwt.claim.sub',host::text,true);
 if public.mastery_capabilities()->>'taskEpisodesProtocol'<>'task-episodes-v1' or not exists(select 1 from jsonb_array_elements(public.mastery_capabilities()->'exercises') x where x->>'id'=e.exercise_id and x->>'format'='task-episodes') then raise exception 'Task capability missing';end if;
 for bad in select cfg-'exerciseFormat' union all select cfg-'taskProtocol' union all select cfg||'{"contentRevision":"future"}' union all select jsonb_set(cfg,'{statements,0,criteriaTags}','[]') loop
  rejected:=false;begin perform public.create_practice_room(bad,gen_random_uuid());exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Forged task metadata accepted';end if;
 end loop;
 select count(*) into before_count from public.practice_ratings;
 r:=public.create_practice_room(cfg,gen_random_uuid());rid:=(r->>'id')::uuid;parent:=(r->>'round_id')::uuid;
 perform set_config('request.jwt.claim.sub',client::text,true);r:=public.join_practice_room(r->>'code','client');
 perform public.sync_practice_room(rid,(r->>'version')::integer);
 r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
 r:=pg_temp.task_action(r,host,'start');
 for checkpoint in 1..4 loop
  if checkpoint=2 then
   r:=pg_temp.task_action(r,host,'finish_item');r:=pg_temp.task_action(r,host,'pass');
   if r->>'item_index'<>'5' or jsonb_array_length(r->'skipped_ids')<>3 or jsonb_array_length(r->'completed_ids')<>3 then raise exception 'Pass did not exclude whole begun episode';end if;
   rejected:=false;begin r:=pg_temp.task_action(r,host,'rate',4);exception when raise_exception then rejected:=true;end;
   if not rejected then raise exception 'Passed episode was rated';end if;
  else
   for item in 1..3 loop r:=pg_temp.task_action(r,host,'finish_item');end loop;
   r:=pg_temp.task_action(r,host,'rate',4);
  end if;
  r:=pg_temp.task_action(r,host,case when checkpoint=4 then 'prepare_next' else 'continue_set' end);
 end loop;
 if (select count(*) from public.mastery_ratings where parent_round_id=parent and exercise_format='task-episodes' and episode_id is not null and task_id=e.task_id and item_count=3 and source='self')<>3 then raise exception 'Task episode provenance missing';end if;
 if (select count(*) from public.practice_ratings)<>before_count then raise exception 'Task score contaminated focused radar';end if;
 if r->>'phase'<>'choosing' or r->>'client_id' is not null or r->>'therapist_id' is not null then raise exception 'Task roles did not reset';end if;
 perform set_config('request.jwt.claim.sub',host::text,true);
 select array_agg(id order by ordinal) into ids from jsonb_array_elements_text(e.episodes->0->'turnIds') with ordinality turns(id,ordinal);
 rejected:=false;begin perform public.record_mastery_rating('no',e.exercise_id,e.revision,gen_random_uuid(),1,ids[1:2],4,'individual');exception when raise_exception then rejected:=true;end;
 if not rejected then raise exception 'Partial task episode saved';end if;
 parent:=gen_random_uuid();saved:=public.record_mastery_rating('no',e.exercise_id,e.revision,parent,1,ids,3,'individual');replay:=public.record_mastery_rating('no',e.exercise_id,e.revision,parent,1,ids,4,'individual');
 if saved<>replay or (select score from public.mastery_ratings where id=saved)<>4 then raise exception 'Task rating retry duplicated';end if;
 perform set_config('task.test.owner',host::text,true);perform set_config('task.test.other',client::text,true);
 if has_function_privilege('authenticated','dp_private.stamp_task_rating()','execute') or has_table_privilege('authenticated','public.mastery_ratings','insert,update,delete') then raise exception 'Task mutation grants exposed';end if;
end; $$;
set local role authenticated;
do $$begin
 perform set_config('request.jwt.claim.sub',current_setting('task.test.owner'),true);
 if not exists(select 1 from public.mastery_ratings where exercise_format='task-episodes') then raise exception 'Owner cannot read task history';end if;
 if exists(select 1 from public.mastery_ratings where therapist_user_id<>auth.uid()) then raise exception 'Task RLS exposed another therapist';end if;
 perform set_config('request.jwt.claim.sub',current_setting('task.test.other'),true);
 if exists(select 1 from public.mastery_ratings) then raise exception 'Client can read therapist task ratings';end if;
end;$$;
reset role;
rollback;

-- Run through a database connection with migration privileges.
-- Every fixture and rating is rolled back; no emails or persistent users.
begin;
create temporary table room_test_ids (observer_id uuid, therapist_id uuid, client_id uuid, stranger_id uuid, room_id uuid);
insert into room_test_ids values(gen_random_uuid(), gen_random_uuid(), gen_random_uuid(), gen_random_uuid(), gen_random_uuid());
insert into auth.users(id, aud, role, email)
select u, 'authenticated', 'authenticated', u::text || '@room-test.invalid'
from room_test_ids t cross join lateral unnest(array[t.observer_id,t.therapist_id,t.client_id,t.stranger_id]) u;

do $$
declare t room_test_ids; r jsonb; again jsonb; command_id uuid := gen_random_uuid(); v integer;
begin
  select * into t from room_test_ids;
  perform set_config('request.jwt.claim.sub', t.observer_id::text, true);
  r := public.create_practice_room('{"hostRole":"observer","languageId":"en","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","contentRevision":"test","statements":[{"id":"test-1","criteriaTags":["test"]},{"id":"test-2","criteriaTags":[]},{"id":"test-3","criteriaTags":[]}]}'::jsonb, t.room_id);
  again := public.create_practice_room('{}'::jsonb, t.room_id);
  if again->>'id' <> r->>'id' then raise exception 'Create is not idempotent'; end if;
  begin
    perform public.command_practice_room(t.room_id, command_id, 0, 'start');
    raise exception 'TEST FAILURE: Started without three participants';
  exception when raise_exception then
    if sqlerrm like 'TEST FAILURE:%' then raise; end if;
  end;
  perform set_config('request.jwt.claim.sub', t.therapist_id::text, true);
  r := public.join_practice_room(r->>'code', 'therapist');
  perform set_config('request.jwt.claim.sub', t.stranger_id::text, true);
  begin
    perform public.join_practice_room(r->>'code', 'therapist');
    raise exception 'TEST FAILURE: Occupied role stolen';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub', t.client_id::text, true);
  r := public.join_practice_room(r->>'code', 'client');
  v := (r->>'version')::integer;
  perform public.sync_practice_room(t.room_id, v);
  perform set_config('request.jwt.claim.sub', t.therapist_id::text, true);
  perform public.sync_practice_room(t.room_id, v);
  begin
    perform public.command_practice_room(t.room_id, command_id, v, 'start');
    raise exception 'TEST FAILURE: Therapist controlled the round';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub', t.observer_id::text, true);
  perform public.sync_practice_room(t.room_id, v);
  r := public.command_practice_room(t.room_id, command_id, v, 'start');
  if r->>'phase' <> 'practicing' then raise exception 'Did not start'; end if;
  again := public.command_practice_room(t.room_id, command_id, v, 'start');
  if again->>'version' <> r->>'version' then raise exception 'Duplicate advanced twice'; end if;
  begin
    perform public.command_practice_room(t.room_id, gen_random_uuid(), v, 'finish_item');
    raise exception 'TEST FAILURE: Stale version advanced';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  begin
    perform public.command_practice_room(t.room_id, gen_random_uuid(), (r->>'version')::integer, 'finish_item');
    raise exception 'TEST FAILURE: Advanced before devices acknowledged';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  -- Acknowledge each item, finish one item, and pass the other two.
  for i in 1..3 loop
    v := (r->>'version')::integer;
    perform set_config('request.jwt.claim.sub', t.client_id::text, true); perform public.sync_practice_room(t.room_id, v);
    perform set_config('request.jwt.claim.sub', t.therapist_id::text, true); perform public.sync_practice_room(t.room_id, v);
    perform set_config('request.jwt.claim.sub', t.observer_id::text, true); perform public.sync_practice_room(t.room_id, v);
    if i = 1 then
      update dp_private.room_presence set seen_at=now()-interval '21 seconds' where room_id=t.room_id and user_id=t.client_id;
      begin
        perform public.command_practice_room(t.room_id,gen_random_uuid(),v,'finish_item');
        raise exception 'TEST FAILURE: Stale heartbeat allowed progression';
      exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
      perform set_config('request.jwt.claim.sub',t.client_id::text,true);perform public.sync_practice_room(t.room_id,v);
      perform set_config('request.jwt.claim.sub',t.observer_id::text,true);
    end if;
    r := public.command_practice_room(t.room_id, gen_random_uuid(), v, case when i = 1 then 'finish_item' else 'pass' end);
  end loop;
  if r->>'phase' <> 'round_debrief' or jsonb_array_length(r->'completed_ids') <> 1
    or jsonb_array_length(r->'skipped_ids') <> 2 then raise exception 'Outcome counted incorrectly'; end if;
  -- A colliding round UUID must never retarget an unrelated rating.
  insert into public.practice_ratings(therapist_user_id, created_by_user_id, source, language_id,
    skill_id, case_id, score, client_round_id, practice_mode) values(t.stranger_id,t.observer_id,'observer','en','other','case-other',1,(r->>'round_id')::uuid,'triad');
  begin
    perform public.command_practice_room(t.room_id,gen_random_uuid(),(r->>'version')::integer,'rate',4);
    raise exception 'TEST FAILURE: Unrelated rating overwritten';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  delete from public.practice_ratings where client_round_id=(r->>'round_id')::uuid;
  command_id := gen_random_uuid(); v := (r->>'version')::integer;
  r := public.command_practice_room(t.room_id, command_id, v, 'rate', 4);
  again := public.command_practice_room(t.room_id, command_id, v, 'rate', 4);
  if (select count(*) from public.practice_ratings where client_round_id = (r->>'round_id')::uuid) <> 1 then
    raise exception 'Duplicate rating'; end if;
  if not exists(select 1 from public.practice_ratings where client_round_id = (r->>'round_id')::uuid
    and therapist_user_id = t.therapist_id and created_by_user_id = t.observer_id
    and item_count = 1 and rating_rubric = 'group-skill-v2' and partnership_id is null) then
    raise exception 'Rating target, count or scale incorrect'; end if;
  v := (r->>'version')::integer;
  perform set_config('request.jwt.claim.sub', t.client_id::text, true); perform public.sync_practice_room(t.room_id, v);
  perform set_config('request.jwt.claim.sub', t.therapist_id::text, true); perform public.sync_practice_room(t.room_id, v);
  perform set_config('request.jwt.claim.sub', t.observer_id::text, true); perform public.sync_practice_room(t.room_id, v);
  r := public.command_practice_room(t.room_id, gen_random_uuid(), v, 'rotate');
  if r->>'observer_id' <> t.client_id::text or r->>'client_id' <> t.therapist_id::text
    or r->>'therapist_id' <> t.observer_id::text or r->>'phase' <> 'lobby'
    or r->>'saved_score' is not null or (r->>'round_number')::integer <> 2 then raise exception 'Rotation failed'; end if;
  perform set_config('request.jwt.claim.sub', t.stranger_id::text, true);
  begin
    perform public.sync_practice_room(t.room_id, -1);
    raise exception 'TEST FAILURE: Stranger read the room';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  -- Exercise SELECT RLS and raw-write permissions under the real API role.
  execute 'set local role authenticated';
  if exists(select 1 from public.practice_rooms where id = t.room_id) then raise exception 'Stranger bypassed RLS'; end if;
  begin
    update public.practice_rooms set phase = 'closed' where id = t.room_id;
    raise exception 'TEST FAILURE: Raw table write allowed';
  exception when insufficient_privilege then null; end;
  perform set_config('request.jwt.claim.sub', t.client_id::text, true);
  if not exists(select 1 from public.practice_rooms where id = t.room_id) then raise exception 'Member cannot read room'; end if;
  r := public.sync_practice_room(t.room_id, -1);
  perform set_config('request.jwt.claim.sub', t.observer_id::text, true);
  r := public.command_practice_room(t.room_id, gen_random_uuid(), (r->>'version')::integer, 'close');
  if r->>'phase' <> 'closed' then raise exception 'Host could not end room'; end if;
  execute 'reset role';
  if has_function_privilege('anon', 'public.sync_practice_room(uuid,integer)', 'execute') then raise exception 'Anonymous RPC access'; end if;
end;
$$;

-- Two-person self-assessment and five-person rotation, including offline spectators.
do $$
declare ids uuid[] := array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  pair_id uuid := gen_random_uuid(); group_id uuid := gen_random_uuid(); r jsonb; v integer; participant uuid;
  seen uuid[] := '{}'; config jsonb := '{"languageId":"en","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","contentRevision":"test","statements":[{"id":"pair-1","criteriaTags":["test"]},{"id":"pair-2","criteriaTags":[]},{"id":"pair-3","criteriaTags":[]}]}'::jsonb;
begin
  insert into auth.users(id,aud,role,email) select id,'authenticated','authenticated',id::text||'@room-test.invalid' from unnest(ids) id;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r := public.create_practice_room(config,pair_id);
  if r->>'therapist_id' <> ids[1]::text or r->>'host_id' <> ids[1]::text then raise exception 'Host default role incorrect'; end if;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true); r := public.join_practice_room(r->>'code','auto');
  for i in 0..3 loop
    v := (r->>'version')::integer;
    foreach participant in array ids[1:2] loop
      perform set_config('request.jwt.claim.sub',participant::text,true);perform public.sync_practice_room(pair_id,v);
    end loop;
    perform set_config('request.jwt.claim.sub',ids[1]::text,true);
    r := public.command_practice_room(pair_id,gen_random_uuid(),v,case when i=0 then 'start' when i=1 then 'finish_item' else 'pass' end);
    if r->>'phase'='observer_feedback' then raise exception 'Pair has observer phase'; end if;
  end loop;
  if r->>'phase'<>'round_debrief' then raise exception 'Pair did not finish'; end if;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);
  begin
    perform public.command_practice_room(pair_id,gen_random_uuid(),(r->>'version')::integer,'rate',3);
    raise exception 'TEST FAILURE: Client rated pair';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r := public.command_practice_room(pair_id,gen_random_uuid(),(r->>'version')::integer,'rate',3);
  if not exists(select 1 from public.practice_ratings where client_round_id=(r->>'round_id')::uuid
    and therapist_user_id=ids[1] and created_by_user_id=ids[1] and source='self' and rating_rubric='group-skill-v2' and item_count=1) then raise exception 'Pair rating identity incorrect'; end if;
  v := (r->>'version')::integer;
  foreach participant in array ids[1:2] loop
    perform set_config('request.jwt.claim.sub',participant::text,true);perform public.sync_practice_room(pair_id,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r := public.command_practice_room(pair_id,gen_random_uuid(),v,'rotate');
  if r->>'therapist_id'<>ids[2]::text or r->>'client_id'<>ids[1]::text or r->>'host_id'<>ids[1]::text or r->>'observer_id' is not null then raise exception 'Pair rotation changed host or roles incorrectly'; end if;

  r := public.create_practice_room(config,group_id);
  for i in 2..5 loop
    perform set_config('request.jwt.claim.sub',ids[i]::text,true);r:=public.join_practice_room(r->>'code','auto');
  end loop;
  if jsonb_array_length(r->'member_ids')<>5 or r->>'observer_id'<>ids[3]::text then raise exception 'Flexible roster incorrect'; end if;
  execute 'set local role authenticated';
  if not exists(select 1 from public.practice_rooms where id=group_id) then raise exception 'Watching observer cannot read room'; end if;
  execute 'reset role';
  -- Five complete rounds must give every person the therapist seat once.
  for round in 1..5 loop
    if (r->>'therapist_id')::uuid=any(seen) then raise exception 'Unequal rotation repeated a therapist'; end if;
    seen:=array_append(seen,(r->>'therapist_id')::uuid);
    for step in 0..4 loop
      v:=(r->>'version')::integer;
      foreach participant in array array[(r->>'therapist_id')::uuid,(r->>'client_id')::uuid,(r->>'observer_id')::uuid] loop
        perform set_config('request.jwt.claim.sub',participant::text,true);perform public.sync_practice_room(group_id,v);
      end loop;
      perform set_config('request.jwt.claim.sub',r->>'observer_id',true);
      r:=public.command_practice_room(group_id,gen_random_uuid(),v,case when step=0 then 'start' when step<=3 then 'pass' else 'rotate' end);
      if r->>'host_id'<>ids[1]::text then raise exception 'Host changed after rotation'; end if;
    end loop;
  end loop;
  if cardinality(seen)<>5 then raise exception 'Not everyone rotated'; end if;
end;
$$;
rollback;

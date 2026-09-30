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
  r := public.create_practice_room('{"languageId":"en","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","contentRevision":"test","statements":[{"id":"test-1","criteriaTags":["test"]},{"id":"test-2","criteriaTags":[]},{"id":"test-3","criteriaTags":[]}]}'::jsonb, t.room_id);
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
  if r->>'phase' <> 'first_attempt' then raise exception 'Did not start'; end if;
  again := public.command_practice_room(t.room_id, command_id, v, 'start');
  if again->>'version' <> r->>'version' then raise exception 'Duplicate advanced twice'; end if;
  begin
    perform public.command_practice_room(t.room_id, gen_random_uuid(), v, 'advance');
    raise exception 'TEST FAILURE: Stale version advanced';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  begin
    perform public.command_practice_room(t.room_id, gen_random_uuid(), (r->>'version')::integer, 'advance');
    raise exception 'TEST FAILURE: Advanced before devices acknowledged';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  -- Acknowledge each step, finish one item, and pass the other two.
  for i in 1..6 loop
    v := (r->>'version')::integer;
    perform set_config('request.jwt.claim.sub', t.client_id::text, true); perform public.sync_practice_room(t.room_id, v);
    perform set_config('request.jwt.claim.sub', t.therapist_id::text, true); perform public.sync_practice_room(t.room_id, v);
    perform set_config('request.jwt.claim.sub', t.observer_id::text, true); perform public.sync_practice_room(t.room_id, v);
    if i = 1 then
      update dp_private.room_presence set seen_at=now()-interval '21 seconds' where room_id=t.room_id and user_id=t.client_id;
      begin
        perform public.command_practice_room(t.room_id,gen_random_uuid(),v,'advance');
        raise exception 'TEST FAILURE: Stale heartbeat allowed progression';
      exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
      perform set_config('request.jwt.claim.sub',t.client_id::text,true);perform public.sync_practice_room(t.room_id,v);
      perform set_config('request.jwt.claim.sub',t.observer_id::text,true);
    end if;
    r := public.command_practice_room(t.room_id, gen_random_uuid(), v, case when i <= 4 then 'advance' else 'pass' end);
  end loop;
  if r->>'phase' <> 'round_debrief' or jsonb_array_length(r->'completed_ids') <> 1
    or jsonb_array_length(r->'skipped_ids') <> 2 then raise exception 'Outcome counted incorrectly'; end if;
  -- A colliding round UUID must never retarget an unrelated rating.
  insert into public.practice_ratings(therapist_user_id, created_by_user_id, source, language_id,
    skill_id, case_id, score, client_round_id) values(t.stranger_id,t.observer_id,'observer','en','other','case-other',1,(r->>'round_id')::uuid);
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
    and item_count = 1 and rating_rubric = 'group-consistency-v1' and partnership_id is null) then
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
  r := public.command_practice_room(t.room_id, gen_random_uuid(), (r->>'version')::integer, 'close');
  if r->>'phase' <> 'closed' then raise exception 'Observer could not end room'; end if;
  execute 'reset role';
  if has_function_privilege('anon', 'public.sync_practice_room(uuid,integer)', 'execute') then raise exception 'Anonymous RPC access'; end if;
end;
$$;
rollback;

-- Preserve the entire rotation queue so groups of any size receive equal turns.
alter table public.practice_rooms add column rotation_ids uuid[];
alter policy room_members_read on public.practice_rooms using (member_ids @> array[(select auth.uid())]);

create or replace function public.join_practice_room(input_code text, input_role text) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; chosen text := input_role;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if chosen is null or chosen not in ('auto', 'therapist', 'client', 'observer', 'passive') then raise exception 'Choose a role'; end if;
  select * into r from public.practice_rooms where code = upper(regexp_replace(input_code, '[^a-zA-Z0-9]', '', 'g')) for update;
  if not found or r.expires_at <= now() or r.phase = 'closed' then raise exception 'Room unavailable or expired'; end if;
  if auth.uid() = any(r.member_ids) then return dp_private.room_snapshot(r); end if;
  if chosen = 'auto' then
    chosen := case when r.phase <> 'lobby' then 'passive' when r.therapist_id is null then 'therapist'
      when r.client_id is null then 'client' when r.observer_id is null then 'observer' else 'passive' end;
  end if;
  if r.phase <> 'lobby' and chosen <> 'passive' then raise exception 'Join as a watching observer while this round is running'; end if;
  if (chosen = 'therapist' and r.therapist_id is not null) or (chosen = 'client' and r.client_id is not null)
    or (chosen = 'observer' and r.observer_id is not null) then raise exception 'That role is already taken'; end if;
  update public.practice_rooms set
    therapist_id = case when chosen = 'therapist' then auth.uid() else therapist_id end,
    client_id = case when chosen = 'client' then auth.uid() else client_id end,
    observer_id = case when chosen = 'observer' then auth.uid() else observer_id end,
    member_ids = array_append(member_ids, auth.uid()),
    rotation_ids = case when rotation_ids is null then null else array_append(rotation_ids, auth.uid()) end, version = version + 1 where id = r.id returning * into r;
  return dp_private.room_snapshot(r);
end;
$$;

create or replace function public.command_practice_room(input_room_id uuid, input_command_id uuid,
  input_expected_version integer, input_action text, input_score integer default null) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; receipt dp_private.room_commands; rotation uuid[]; chosen text; rater uuid; tags text[];
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id = input_room_id for update;
  if not found or not coalesce(auth.uid() = any(r.member_ids), false) then raise exception 'Room unavailable'; end if;
  select * into receipt from dp_private.room_commands where room_id = r.id and command_id = input_command_id;
  if found then
    if receipt.user_id <> auth.uid() or receipt.action is distinct from input_action
      or receipt.expected_version is distinct from input_expected_version or receipt.score is distinct from input_score then
      raise exception 'Command ID already used';
    end if;
    return dp_private.room_snapshot(r);
  end if;
  rater := coalesce(r.observer_id, r.therapist_id);
  if input_action = 'rate' then
    if rater is distinct from auth.uid() then raise exception 'Only the active observer, or the therapist in a pair, can rate'; end if;
  elsif input_action not like 'role_%' and r.host_id <> auth.uid() then raise exception 'Only the host can control the room'; end if;
  if r.expires_at <= now() or r.phase = 'closed' then raise exception 'Room unavailable or expired'; end if;
  if input_expected_version is null or input_expected_version <> r.version then raise exception 'Room changed. Sync and try again.'; end if;
  if input_action is null or input_action not in ('start', 'advance', 'pass', 'rotate', 'rate', 'close', 'role_therapist', 'role_client', 'role_observer', 'role_passive') then raise exception 'Unknown command'; end if;
  if input_action in ('start', 'advance', 'pass', 'rotate') then
    if r.therapist_id is null or r.client_id is null or (
      select count(*) from dp_private.room_presence p where p.room_id = r.id
        and p.user_id in (r.observer_id, r.therapist_id, r.client_id)
        and p.acknowledged_version = r.version and p.seen_at > now() - interval '20 seconds'
    ) <> (case when r.observer_id is null then 2 else 3 end) then raise exception 'Waiting for the active devices to display this step'; end if;
  end if;
  if input_action like 'role_%' then
    if r.phase <> 'lobby' then raise exception 'Roles can change between rounds'; end if;
    chosen := substr(input_action, 6);
    r.rotation_ids := null;
    if (chosen = 'therapist' and r.therapist_id is not null and r.therapist_id <> auth.uid())
      or (chosen = 'client' and r.client_id is not null and r.client_id <> auth.uid())
      or (chosen = 'observer' and r.observer_id is not null and r.observer_id <> auth.uid()) then raise exception 'That role is already taken'; end if;
    if r.therapist_id = auth.uid() then r.therapist_id := null; end if;
    if r.client_id = auth.uid() then r.client_id := null; end if;
    if r.observer_id = auth.uid() then r.observer_id := null; end if;
    if chosen = 'therapist' then r.therapist_id := auth.uid();
    elsif chosen = 'client' then r.client_id := auth.uid();
    elsif chosen = 'observer' then r.observer_id := auth.uid(); end if;
  elsif input_action = 'start' then
    if r.phase <> 'lobby' then raise exception 'Round already started'; end if;
    r.phase := 'first_attempt';
  elsif input_action in ('advance', 'pass') then
    if r.phase not in ('first_attempt', 'client_feedback', 'observer_feedback', 'retry') then raise exception 'No active item'; end if;
    if input_action = 'pass' or r.phase = 'retry' then
      if input_action = 'pass' then r.skipped_ids := array_append(r.skipped_ids, r.statement_ids[r.item_index + 1]);
      else r.completed_ids := array_append(r.completed_ids, r.statement_ids[r.item_index + 1]); end if;
      if r.item_index = cardinality(r.statement_ids) - 1 then r.phase := 'round_debrief';
      else r.item_index := r.item_index + 1; r.phase := 'first_attempt'; end if;
    else
      r.phase := case r.phase when 'first_attempt' then 'client_feedback'
        when 'client_feedback' then case when r.observer_id is null then 'retry' else 'observer_feedback' end else 'retry' end;
    end if;
  elsif input_action = 'rate' then
    if r.phase <> 'round_debrief' or cardinality(r.completed_ids) = 0 then raise exception 'Complete practice before rating'; end if;
    if input_score is null or input_score not between 1 and 5 then raise exception 'Choose a score between 1 and 5'; end if;
    select coalesce(array_agg(distinct tag), '{}') into tags from jsonb_array_elements(r.catalog) e,
      jsonb_array_elements_text(e->'criteriaTags') tag where e->>'id' = any(r.completed_ids);
    -- Ratings assess the therapist’s selected skill, with self-assessment for pairs.
    -- No enduring partnership is created or altered.
    insert into public.practice_ratings(therapist_user_id, created_by_user_id, source,
      rating_scope, language_id, skill_id, case_id, difficulty, score, criteria_tags,
      completed_statement_ids, item_count, content_revision, client_round_id, practice_mode, rating_rubric)
    values(r.therapist_id, rater, case when rater = r.therapist_id then 'self' else 'observer' end, 'series', r.language_id, r.skill_id,
      r.case_id, r.difficulty, input_score, tags, r.completed_ids, cardinality(r.completed_ids),
      r.content_revision, r.round_id, 'triad', 'group-skill-v2')
    on conflict(created_by_user_id, client_round_id) do update set score = excluded.score
    where public.practice_ratings.therapist_user_id = excluded.therapist_user_id
      and public.practice_ratings.source = excluded.source
      and public.practice_ratings.rating_scope = excluded.rating_scope
      and public.practice_ratings.language_id = excluded.language_id
      and public.practice_ratings.skill_id = excluded.skill_id
      and public.practice_ratings.case_id = excluded.case_id
      and public.practice_ratings.completed_statement_ids = excluded.completed_statement_ids
      and public.practice_ratings.item_count = excluded.item_count
      and public.practice_ratings.practice_mode = excluded.practice_mode
      and public.practice_ratings.rating_rubric = excluded.rating_rubric;
    if not found then raise exception 'Round ID belongs to a different rating'; end if;
    r.saved_score := input_score;
  elsif input_action = 'rotate' then
    if r.phase <> 'round_debrief' then raise exception 'Finish the round before rotating'; end if;
    -- Cycle the waiting observers through the active seats, preserving the host.
    if r.rotation_ids is null then
    rotation := array_remove(array[r.therapist_id, r.client_id, r.observer_id], null);
    rotation := rotation || array(select id from unnest(r.member_ids) id where not id = any(rotation));
    else rotation := r.rotation_ids; end if;
    rotation := array[rotation[cardinality(rotation)]] || rotation[1:cardinality(rotation)-1];
    r.rotation_ids := rotation;
    r.therapist_id := rotation[1]; r.client_id := rotation[2]; r.observer_id := rotation[3];
    select array_agg(id) into r.statement_ids from (
      select e->>'id' id from jsonb_array_elements(r.catalog) e order by random() limit 3
    ) sampled;
    r.phase := 'lobby'; r.item_index := 0; r.completed_ids := '{}'; r.skipped_ids := '{}';
    r.round_id := gen_random_uuid(); r.round_number := r.round_number + 1; r.saved_score := null;
  else r.phase := 'closed';
  end if;
  r.version := r.version + 1;
  update public.practice_rooms set observer_id = r.observer_id, therapist_id = r.therapist_id,
    client_id = r.client_id, rotation_ids = r.rotation_ids, statement_ids = r.statement_ids, item_index = r.item_index, phase = r.phase,
    completed_ids = r.completed_ids, skipped_ids = r.skipped_ids, round_id = r.round_id,
    round_number = r.round_number, saved_score = r.saved_score, version = r.version where id = r.id;
  insert into dp_private.room_commands values(r.id, input_command_id, auth.uid(), input_expected_version, input_action, input_score);
  return dp_private.room_snapshot(r);
end;
$$;

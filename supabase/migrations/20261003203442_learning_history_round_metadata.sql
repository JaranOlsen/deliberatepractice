-- Additive: historic ratings retain unknown round membership; retry identities stay unchanged.
alter table public.practice_ratings add column parent_round_id uuid;
alter table public.practice_ratings add column set_number integer;
alter table public.practice_ratings add constraint practice_ratings_round_set_check check (
  (parent_round_id is null and set_number is null) or
  (parent_round_id is not null and set_number is not null and set_number between 1 and 4
    and practice_mode='triad' and rating_scope='series' and item_count between 1 and 3)
);
create index practice_ratings_history_cursor_idx on public.practice_ratings
  (therapist_user_id,source,created_at desc,id desc);

-- The existing RPC remains callable by old clients. This explicit new entry point
-- delegates its auth/pairing/idempotency checks, then adds metadata under the same lock.
create function public.record_practice_rating_with_history(
  input_therapist_user_id uuid,input_source text,input_language_id text,input_skill_id text,
  input_case_id text,input_statement_id text,input_statement_index integer,input_difficulty text,input_score integer,
  input_criteria_tags text[] default '{}',input_content_revision text default null,
  input_rating_scope text default 'statement',input_completed_statement_ids text[] default '{}',
  input_item_count integer default null,input_client_round_id uuid default null,
  input_practice_mode text default null,input_rating_rubric text default 'group-skill-v2',
  input_parent_round_id uuid default null,input_set_number integer default null
) returns table(id uuid,created_at timestamptz)
language plpgsql security definer set search_path=pg_catalog as $$
declare saved record; previous public.practice_ratings;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if (input_parent_round_id is null) <> (input_set_number is null) or
    (input_parent_round_id is not null and (input_set_number not between 1 and 4
      or input_practice_mode is distinct from 'triad' or input_rating_scope is distinct from 'series'
      or input_client_round_id is null or input_item_count is null or input_item_count not between 1 and 3)) then
    raise exception 'Group history requires a round and a valid set number';
  end if;
  select * into saved from public.record_practice_rating(input_therapist_user_id,input_source,input_language_id,input_skill_id,
    input_case_id,input_statement_id,input_statement_index,input_difficulty,input_score,input_criteria_tags,
    input_content_revision,input_rating_scope,input_completed_statement_ids,input_item_count,input_client_round_id,
    input_practice_mode,input_rating_rubric);
  select * into previous from public.practice_ratings r where r.id=saved.id and r.created_by_user_id=auth.uid();
  if not found then raise exception 'Rating unavailable'; end if;
  if previous.parent_round_id is not null and
    (previous.parent_round_id is distinct from input_parent_round_id or previous.set_number is distinct from input_set_number) then
    raise exception 'This rating identity belongs to another round or set';
  end if;
  update public.practice_ratings r set parent_round_id=input_parent_round_id,set_number=input_set_number where r.id=saved.id;
  return query select saved.id::uuid,saved.created_at::timestamptz;
end;
$$;
revoke all on function public.record_practice_rating_with_history(uuid,text,text,text,text,text,integer,text,integer,text[],text,text,text[],integer,uuid,text,text,uuid,integer) from public,anon;
grant execute on function public.record_practice_rating_with_history(uuid,text,text,text,text,text,integer,text,integer,text[],text,text,text[],integer,uuid,text,text,uuid,integer) to authenticated;

-- Require all active roles before starting, including after twelve-item reselection.
create or replace function public.command_practice_room(input_room_id uuid, input_command_id uuid,
  input_expected_version integer, input_action text, input_score integer default null) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; receipt dp_private.room_commands; rotation uuid[]; chosen text; rater uuid; tags text[]; rated_ids text[]; set_start integer;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id = input_room_id for update;
  if not found then raise exception 'Room unavailable'; end if;
  select * into receipt from dp_private.room_commands where room_id = r.id and command_id = input_command_id;
  if found then
    if receipt.user_id <> auth.uid() or receipt.action is distinct from input_action
      or receipt.expected_version is distinct from input_expected_version or receipt.score is distinct from input_score then
      raise exception 'Command ID already used';
    end if;
    if receipt.action='leave' then return jsonb_build_object('left',true); end if;
    if not auth.uid()=any(r.member_ids) then raise exception 'Room unavailable'; end if;
    return dp_private.room_snapshot(r);
  end if;
  if not auth.uid()=any(r.member_ids) then raise exception 'Room unavailable'; end if;
  rater := coalesce(r.observer_id, r.therapist_id);
  if input_action = 'rate' then
    if rater is distinct from auth.uid() then raise exception 'Only the active observer, or the therapist in a pair, can rate'; end if;
  elsif input_action in ('start','advance','finish_item','pass','rotate','continue_set','prepare_next') then
    if rater is distinct from auth.uid() then raise exception 'Only the active observer, or the therapist in a pair, can guide practice'; end if;
  elsif input_action='leave' then
    if r.host_id=auth.uid() then raise exception 'The host must end the room for everyone'; end if;
  elsif input_action not like 'role_%' and r.host_id <> auth.uid() then raise exception 'Only the host can control the room'; end if;
  if r.expires_at <= now() or r.phase = 'closed' then raise exception 'Room unavailable or expired'; end if;
  if input_expected_version is null or input_expected_version <> r.version then raise exception 'Room changed. Sync and try again.'; end if;
  if input_action is null or input_action not in ('start', 'advance', 'finish_item', 'pass', 'rotate', 'continue_set', 'prepare_next', 'rate', 'close', 'role_therapist', 'role_client', 'role_observer', 'role_passive','leave') then raise exception 'Unknown command'; end if;
  -- A larger group needs an active observer when starting a new round.
  -- Spectators joining an already-running pair do not interrupt that round.
  if input_action='start' and cardinality(r.member_ids)>=3 and r.observer_id is null then
    raise exception 'Choose an active observer before starting a group of three or more';
  end if;
  if input_action in ('start', 'advance', 'finish_item', 'pass', 'rotate', 'continue_set', 'prepare_next') then
    if r.therapist_id is null or r.client_id is null or (
      select count(*) from dp_private.room_presence p where p.room_id = r.id
        and p.user_id in (r.observer_id, r.therapist_id, r.client_id)
        and p.acknowledged_version = r.version and p.seen_at > now() - interval '20 seconds'
    ) <> (case when r.observer_id is null then 2 else 3 end) then raise exception 'Waiting for the active devices to display this step'; end if;
  end if;
  if input_action='leave' then
    r.member_ids:=array_remove(r.member_ids,auth.uid());r.rotation_ids:=null;
    if auth.uid() in (r.therapist_id,r.client_id,r.observer_id) then
      if r.phase not in ('choosing','lobby') then r.round_number:=r.round_number+1;r.round_interrupted:=true; end if;
      if r.therapist_id=auth.uid() then r.therapist_id:=null; end if;
      if r.client_id=auth.uid() then r.client_id:=null; end if;
      if r.observer_id=auth.uid() then r.observer_id:=null; end if;
      r.phase:=case when r.skill_id is null then 'choosing' else 'lobby' end;
      r.item_index:=0;r.completed_ids:='{}';r.skipped_ids:='{}';r.saved_score:=null;r.round_id:=gen_random_uuid();r.rating_round_id:=gen_random_uuid();
    end if;
    delete from dp_private.room_presence where room_id=r.id and user_id=auth.uid();
  elsif input_action like 'role_%' then
    if r.phase not in ('choosing','lobby') then raise exception 'Roles can change between rounds'; end if;
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
    r.phase := 'practicing'; r.round_interrupted:=false;
  elsif input_action in ('advance', 'finish_item', 'pass') then
    if r.phase not in ('practicing', 'first_attempt', 'client_feedback', 'observer_feedback', 'retry') then raise exception 'No active item'; end if;
    if input_action='advance' and r.phase='practicing' then raise exception 'Finish the item after feedback and retry'; end if;
    if input_action in ('finish_item','pass') or r.phase = 'retry' then
      if input_action = 'pass' then r.skipped_ids := array_append(r.skipped_ids, r.statement_ids[r.item_index + 1]);
      else r.completed_ids := array_append(r.completed_ids, r.statement_ids[r.item_index + 1]); end if;
      if r.item_index = cardinality(r.statement_ids) - 1 or (r.round_size=12 and (r.item_index+1)%3=0) then r.phase := 'round_debrief';
      else r.item_index := r.item_index + 1; r.phase := 'practicing'; end if;
    else
      r.phase := case r.phase when 'first_attempt' then 'client_feedback'
        when 'client_feedback' then case when r.observer_id is null then 'retry' else 'observer_feedback' end else 'retry' end;
    end if;
  elsif input_action = 'rate' then
    set_start := case when r.round_size=12 then (r.item_index/3)*3+1 else 1 end;
    select coalesce(array_agg(id order by position),'{}') into rated_ids
      from unnest(r.statement_ids) with ordinality items(id,position)
      where position between set_start and set_start+2 and id=any(r.completed_ids);
    if r.phase <> 'round_debrief' or cardinality(rated_ids) = 0 then raise exception 'Complete practice before rating'; end if;
    if input_score is null or input_score not between 1 and 5 then raise exception 'Choose a score between 1 and 5'; end if;
    select coalesce(array_agg(distinct tag), '{}') into tags from jsonb_array_elements(r.catalog) e,
      jsonb_array_elements_text(e->'criteriaTags') tag where e->>'id' = any(rated_ids);
    -- Ratings assess the therapist’s selected skill, with self-assessment for pairs.
    -- No enduring partnership is created or altered.
    insert into public.practice_ratings(therapist_user_id, created_by_user_id, source,
      rating_scope, language_id, skill_id, case_id, difficulty, score, criteria_tags,
      completed_statement_ids, item_count, content_revision, client_round_id, practice_mode, rating_rubric, parent_round_id, set_number)
    values(r.therapist_id, rater, case when rater = r.therapist_id then 'self' else 'observer' end, 'series', r.language_id, r.skill_id,
      r.case_id, r.difficulty, input_score, tags, rated_ids, cardinality(rated_ids),
      r.content_revision, case when r.round_size=12 then r.rating_round_id else r.round_id end, 'triad', 'group-skill-v2',
      case when r.round_size=12 then r.round_id else null end, case when r.round_size=12 then r.item_index/3+1 else null end)
    on conflict(created_by_user_id, client_round_id) do update set score = excluded.score,
      parent_round_id=excluded.parent_round_id,set_number=excluded.set_number
    where public.practice_ratings.therapist_user_id = excluded.therapist_user_id
      and public.practice_ratings.source = excluded.source
      and public.practice_ratings.rating_scope = excluded.rating_scope
      and public.practice_ratings.language_id = excluded.language_id
      and public.practice_ratings.skill_id = excluded.skill_id
      and public.practice_ratings.case_id = excluded.case_id
      and public.practice_ratings.completed_statement_ids = excluded.completed_statement_ids
      and public.practice_ratings.item_count = excluded.item_count
      and public.practice_ratings.practice_mode = excluded.practice_mode
      and public.practice_ratings.rating_rubric = excluded.rating_rubric
      and (public.practice_ratings.parent_round_id is null or (
        public.practice_ratings.parent_round_id is not distinct from excluded.parent_round_id
        and public.practice_ratings.set_number is not distinct from excluded.set_number));
    if not found then raise exception 'Round ID belongs to a different rating'; end if;
    r.saved_score := input_score;
  elsif input_action='continue_set' then
    if r.round_size<>12 or r.phase<>'round_debrief' or r.item_index>=11 then raise exception 'No next set'; end if;
    r.item_index:=r.item_index+1;r.phase:='practicing';r.saved_score:=null;r.rating_round_id:=gen_random_uuid();
  elsif input_action='prepare_next' then
    if r.round_size<>12 or r.phase<>'round_debrief' or r.item_index<>11 then raise exception 'Finish all twelve items before choosing again'; end if;
    -- Return to explicit selection; the room, host and membership stay intact.
    r.phase:='choosing';r.skill_id:=null;r.case_id:=null;r.difficulty:=null;r.content_revision:=null;
    r.catalog:='[]';r.statement_ids:='{}';r.item_index:=0;r.completed_ids:='{}';r.skipped_ids:='{}';
    r.saved_score:=null;r.round_id:=gen_random_uuid();r.rating_round_id:=gen_random_uuid();
    r.round_number:=r.round_number+1;r.therapist_id:=null;r.client_id:=null;r.observer_id:=null;r.rotation_ids:=null;
  elsif input_action = 'rotate' then
    if r.round_size=12 then raise exception 'Keep roles for twelve items, then choose the next round'; end if;
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
    r.round_id := gen_random_uuid(); r.round_number := r.round_number + 1; r.saved_score := null; r.round_interrupted:=false;
  else r.phase := 'closed';
  end if;
  r.version := r.version + 1;
  update public.practice_rooms set observer_id = r.observer_id, therapist_id = r.therapist_id,
    client_id = r.client_id, member_ids = r.member_ids, round_interrupted = r.round_interrupted, rotation_ids = r.rotation_ids, statement_ids = r.statement_ids, item_index = r.item_index, phase = r.phase,
    completed_ids = r.completed_ids, skipped_ids = r.skipped_ids, round_id = r.round_id,
    round_number = r.round_number, saved_score = r.saved_score, rating_round_id=r.rating_round_id,
    skill_id=r.skill_id,case_id=r.case_id,difficulty=r.difficulty,content_revision=r.content_revision,catalog=r.catalog,version = r.version where id = r.id;
  insert into dp_private.room_commands(room_id,command_id,user_id,expected_version,action,score) values(r.id, input_command_id, auth.uid(), input_expected_version, input_action, input_score);
  if input_action='leave' then return jsonb_build_object('left',true); end if;
  return dp_private.room_snapshot(r);
end;
$$;

revoke all on function public.command_practice_room(uuid,uuid,integer,text,integer) from public, anon;
grant execute on function public.command_practice_room(uuid,uuid,integer,text,integer) to authenticated;

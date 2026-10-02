-- Durable rooms. Realtime is a notification; RPC snapshots remain authoritative.
create schema if not exists dp_private;
revoke all on schema dp_private from public, anon, authenticated;

create table public.practice_rooms (
  id uuid primary key default gen_random_uuid(),
  code text not null unique default upper(encode(extensions.gen_random_bytes(6), 'hex')),
  observer_id uuid not null references auth.users(id) on delete cascade,
  therapist_id uuid references auth.users(id) on delete cascade,
  client_id uuid references auth.users(id) on delete cascade,
  language_id text not null check (language_id in ('en', 'no')),
  skill_id text not null,
  case_id text not null,
  difficulty text not null,
  content_revision text not null,
  catalog jsonb not null,
  statement_ids text[] not null,
  item_index integer not null default 0,
  phase text not null default 'lobby' check (phase in
    ('lobby', 'first_attempt', 'client_feedback', 'observer_feedback', 'retry', 'round_debrief', 'closed')),
  completed_ids text[] not null default '{}',
  skipped_ids text[] not null default '{}',
  round_id uuid not null default gen_random_uuid(),
  round_number integer not null default 1,
  saved_score integer check (saved_score between 1 and 5),
  version integer not null default 0,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '8 hours'),
  check (therapist_id is null or observer_id <> therapist_id),
  check (client_id is null or (observer_id <> client_id and client_id is distinct from therapist_id))
);
create index practice_rooms_observer_idx on public.practice_rooms(observer_id);
create index practice_rooms_therapist_idx on public.practice_rooms(therapist_id);
create index practice_rooms_client_idx on public.practice_rooms(client_id);
alter table public.practice_rooms enable row level security;
revoke all on public.practice_rooms from anon, authenticated;
grant select on public.practice_rooms to authenticated;
create policy room_members_read on public.practice_rooms for select to authenticated
using ((select auth.uid()) in (observer_id, therapist_id, client_id));

-- Heartbeats do not broadcast room updates or increment the state version.
create table dp_private.room_presence (
  room_id uuid not null references public.practice_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  acknowledged_version integer not null default -1,
  seen_at timestamptz not null default now(),
  primary key (room_id, user_id)
);
create index room_presence_user_idx on dp_private.room_presence(user_id);
alter table dp_private.room_presence enable row level security;
create table dp_private.room_commands (
  room_id uuid not null references public.practice_rooms(id) on delete cascade,
  command_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  expected_version integer not null,
  action text not null,
  score integer,
  primary key (room_id, command_id)
);
create index room_commands_user_idx on dp_private.room_commands(user_id);
alter table dp_private.room_commands enable row level security;

create function dp_private.room_snapshot(r public.practice_rooms) returns jsonb
language sql stable set search_path = pg_catalog as $$
  select to_jsonb(r) || jsonb_build_object('presence', coalesce((
    select jsonb_object_agg(p.user_id::text, jsonb_build_object(
      'acknowledged_version', p.acknowledged_version,
      'connected', p.seen_at > now() - interval '20 seconds'))
    from dp_private.room_presence p where p.room_id = r.id
  ), '{}'::jsonb));
$$;
revoke all on function dp_private.room_snapshot(public.practice_rooms) from public, anon, authenticated;

create function public.create_practice_room(input_config jsonb, input_room_id uuid) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; entries jsonb; ids text[];
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  -- A stable caller-generated ID also makes room creation safe to retry.
  select * into r from public.practice_rooms where id = input_room_id for update;
  if found then
    if r.observer_id <> auth.uid() then raise exception 'Room unavailable'; end if;
    return dp_private.room_snapshot(r);
  end if;
  entries := input_config->'statements';
  if entries is null or jsonb_typeof(entries) <> 'array' then raise exception 'Invalid practice items'; end if;
  if jsonb_array_length(entries) < 3 or jsonb_array_length(entries) > 20
    or octet_length(input_config::text) > 20000
    or coalesce(input_config->>'languageId', '') not in ('en', 'no')
    or coalesce(input_config->>'skillId', '') !~ '^[a-z-]{1,80}$'
    or coalesce(input_config->>'caseId', '') !~ '^case-[a-z-]{1,80}$'
    or coalesce(input_config->>'difficulty', '') not in ('easy', 'moderate', 'hard')
    or length(coalesce(input_config->>'contentRevision', '')) not between 1 and 100 then
    raise exception 'Invalid room configuration';
  end if;
  if exists (select 1 from jsonb_array_elements(entries) e where
    coalesce(e->>'id', '') !~ '^[A-Za-z0-9_-]{1,120}$'
    or coalesce(jsonb_typeof(e->'criteriaTags'), '') <> 'array'
    or jsonb_array_length(e->'criteriaTags') > 20) then raise exception 'Invalid practice item'; end if;
  select array_agg(e->>'id') into ids from jsonb_array_elements(entries) e;
  if cardinality(ids) <> (select count(distinct v) from unnest(ids) v) then raise exception 'Duplicate practice item'; end if;
  insert into public.practice_rooms(id, observer_id, language_id, skill_id, case_id,
    difficulty, content_revision, catalog, statement_ids)
  values(input_room_id, auth.uid(), input_config->>'languageId', input_config->>'skillId',
    input_config->>'caseId', input_config->>'difficulty', input_config->>'contentRevision', entries, ids[1:3])
  returning * into r;
  return dp_private.room_snapshot(r);
end;
$$;

create function public.join_practice_room(input_code text, input_role text) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if input_role is null or input_role not in ('therapist', 'client') then raise exception 'Choose a role'; end if;
  select * into r from public.practice_rooms where code = upper(regexp_replace(input_code, '[^a-zA-Z0-9]', '', 'g')) for update;
  if not found or r.expires_at <= now() or r.phase = 'closed' then raise exception 'Room unavailable or expired'; end if;
  -- Returning members can rejoin after reload without reclaiming a role.
  if auth.uid() in (r.observer_id, r.therapist_id, r.client_id) then return dp_private.room_snapshot(r); end if;
  if r.phase <> 'lobby' then raise exception 'This round has already started'; end if;
  if (input_role = 'therapist' and r.therapist_id is not null)
    or (input_role = 'client' and r.client_id is not null) then raise exception 'That role is already taken'; end if;
  update public.practice_rooms set
    therapist_id = case when input_role = 'therapist' then auth.uid() else therapist_id end,
    client_id = case when input_role = 'client' then auth.uid() else client_id end,
    version = version + 1 where id = r.id returning * into r;
  return dp_private.room_snapshot(r);
end;
$$;

create function public.sync_practice_room(input_room_id uuid, input_acknowledged_version integer default -1) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms;
begin
  select * into r from public.practice_rooms where id = input_room_id;
  if auth.uid() is null or not found or not coalesce(auth.uid() in (r.observer_id, r.therapist_id, r.client_id), false) then
    raise exception 'Room unavailable';
  end if;
  if input_acknowledged_version is null or input_acknowledged_version < -1 or input_acknowledged_version > r.version then
    raise exception 'Invalid acknowledgement';
  end if;
  insert into dp_private.room_presence(room_id, user_id, acknowledged_version)
  values(r.id, auth.uid(), input_acknowledged_version)
  on conflict(room_id, user_id) do update set seen_at = now(),
    acknowledged_version = greatest(dp_private.room_presence.acknowledged_version, excluded.acknowledged_version);
  return dp_private.room_snapshot(r);
end;
$$;

create function public.command_practice_room(input_room_id uuid, input_command_id uuid,
  input_expected_version integer, input_action text, input_score integer default null) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; receipt dp_private.room_commands; prior_observer uuid; tags text[];
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id = input_room_id for update;
  if not found or not coalesce(auth.uid() in (r.observer_id, r.therapist_id, r.client_id), false) then raise exception 'Room unavailable'; end if;
  select * into receipt from dp_private.room_commands where room_id = r.id and command_id = input_command_id;
  if found then
    if receipt.user_id <> auth.uid() or receipt.action is distinct from input_action
      or receipt.expected_version is distinct from input_expected_version or receipt.score is distinct from input_score then
      raise exception 'Command ID already used';
    end if;
    return dp_private.room_snapshot(r);
  end if;
  if r.observer_id <> auth.uid() then raise exception 'Only the observer can control the round'; end if;
  if r.expires_at <= now() or r.phase = 'closed' then raise exception 'Room unavailable or expired'; end if;
  if input_expected_version is null or input_expected_version <> r.version then raise exception 'Room changed. Sync and try again.'; end if;
  if input_action is null or input_action not in ('start', 'advance', 'pass', 'rotate', 'rate', 'close') then raise exception 'Unknown command'; end if;
  if input_action in ('start', 'advance', 'pass', 'rotate') then
    if r.therapist_id is null or r.client_id is null or (
      select count(*) from dp_private.room_presence p where p.room_id = r.id
        and p.user_id in (r.observer_id, r.therapist_id, r.client_id)
        and p.acknowledged_version = r.version and p.seen_at > now() - interval '20 seconds'
    ) <> 3 then raise exception 'Waiting for every device to display this step'; end if;
  end if;
  if input_action = 'start' then
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
        when 'client_feedback' then 'observer_feedback' else 'retry' end;
    end if;
  elsif input_action = 'rate' then
    if r.phase <> 'round_debrief' or cardinality(r.completed_ids) = 0 then raise exception 'Complete practice before rating'; end if;
    if input_score is null or input_score not between 1 and 5 then raise exception 'Choose a score between 1 and 5'; end if;
    select coalesce(array_agg(distinct tag), '{}') into tags from jsonb_array_elements(r.catalog) e,
      jsonb_array_elements_text(e->'criteriaTags') tag where e->>'id' = any(r.completed_ids);
    -- Joining explicitly consents to observer ratings within this room only.
    -- No enduring partnership is created or altered.
    insert into public.practice_ratings(therapist_user_id, created_by_user_id, source,
      rating_scope, language_id, skill_id, case_id, difficulty, score, criteria_tags,
      completed_statement_ids, item_count, content_revision, client_round_id, practice_mode, rating_rubric)
    values(r.therapist_id, r.observer_id, 'observer', 'series', r.language_id, r.skill_id,
      r.case_id, r.difficulty, input_score, tags, r.completed_ids, cardinality(r.completed_ids),
      r.content_revision, r.round_id, 'triad', 'group-consistency-v1')
    on conflict(created_by_user_id, client_round_id) do update set score = excluded.score;
    r.saved_score := input_score;
  elsif input_action = 'rotate' then
    if r.phase <> 'round_debrief' then raise exception 'Finish the round before rotating'; end if;
    prior_observer := r.observer_id;
    r.observer_id := r.client_id; r.client_id := r.therapist_id; r.therapist_id := prior_observer;
    select array_agg(id) into r.statement_ids from (
      select e->>'id' id from jsonb_array_elements(r.catalog) e order by random() limit 3
    ) sampled;
    r.phase := 'lobby'; r.item_index := 0; r.completed_ids := '{}'; r.skipped_ids := '{}';
    r.round_id := gen_random_uuid(); r.round_number := r.round_number + 1; r.saved_score := null;
  else r.phase := 'closed';
  end if;
  r.version := r.version + 1;
  update public.practice_rooms set observer_id = r.observer_id, therapist_id = r.therapist_id,
    client_id = r.client_id, statement_ids = r.statement_ids, item_index = r.item_index, phase = r.phase,
    completed_ids = r.completed_ids, skipped_ids = r.skipped_ids, round_id = r.round_id,
    round_number = r.round_number, saved_score = r.saved_score, version = r.version where id = r.id;
  insert into dp_private.room_commands values(r.id, input_command_id, auth.uid(), input_expected_version, input_action, input_score);
  return dp_private.room_snapshot(r);
end;
$$;

revoke all on function public.create_practice_room(jsonb, uuid) from public, anon;
revoke all on function public.join_practice_room(text, text) from public, anon;
revoke all on function public.sync_practice_room(uuid, integer) from public, anon;
revoke all on function public.command_practice_room(uuid, uuid, integer, text, integer) from public, anon;
grant execute on function public.create_practice_room(jsonb, uuid) to authenticated;
grant execute on function public.join_practice_room(text, text) to authenticated;
grant execute on function public.sync_practice_room(uuid, integer) to authenticated;
grant execute on function public.command_practice_room(uuid, uuid, integer, text, integer) to authenticated;

-- UPDATE notifications only; clients never subscribe to unfiltered DELETE events.
do $$ begin
  if not exists(select 1 from pg_publication_tables where pubname = 'supabase_realtime'
    and schemaname = 'public' and tablename = 'practice_rooms') then
    alter publication supabase_realtime add table public.practice_rooms;
  end if;
end $$;

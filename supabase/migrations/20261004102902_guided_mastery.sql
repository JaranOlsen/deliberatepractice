-- Additive guided mastery. Focused ratings and active focused rooms are preserved.
create table dp_private.exercise_catalog (
  exercise_id text not null, revision text not null, case_id text not null,
  difficulty text not null check(difficulty in ('easy','moderate','hard')),
  scenes jsonb not null check(jsonb_typeof(scenes)='array' and jsonb_array_length(scenes)=12),
  primary key(exercise_id,revision)
);
revoke all on dp_private.exercise_catalog from public,anon,authenticated;
insert into dp_private.exercise_catalog(exercise_id,revision,case_id,difficulty,scenes) values
('mastery-sara-evenings','2026-10-04-v4','case-sara','easy','[{"id":"mastery_sara_evenings_01","skillId":"empathic-understanding","criteriaTags":["reflect_feeling"]},{"id":"mastery_sara_evenings_02","skillId":"providing-treatment-rationale","criteriaTags":["offer_rationale","normalize_experiential_work"]},{"id":"mastery_sara_evenings_03","skillId":"empathic-affirmation-validation","criteriaTags":["validate_context"]},{"id":"mastery_sara_evenings_04","skillId":"exploratory-questions","criteriaTags":["explore_body","explore_meaning"]},{"id":"mastery_sara_evenings_05","skillId":"empathic-explorations","criteriaTags":["deepen_contact","follow_leading_edge"]},{"id":"mastery_sara_evenings_06","skillId":"empathic-conjectures","criteriaTags":["tentative_guess","name_underlying_feeling"]},{"id":"mastery_sara_evenings_07","skillId":"empathic-evocations","criteriaTags":["evoke_image","heighten_felt_sense"]},{"id":"mastery_sara_evenings_08","skillId":"empathic-refocusing","criteriaTags":["check_shift","invite_return","respect_choice"]},{"id":"mastery_sara_evenings_09","skillId":"staying-in-contact-intense-affect","criteriaTags":["titrate_affect","grounding","co_regulation"]},{"id":"mastery_sara_evenings_10","skillId":"empathic-understanding","criteriaTags":["reflect_feeling"]},{"id":"mastery_sara_evenings_11","skillId":"consolidating-emotional-change","criteriaTags":["recognize_client_shift","carry_meaning","avoid_forced_optimism"]},{"id":"mastery_sara_evenings_12","skillId":"closing-after-emotional-work","criteriaTags":["acknowledge_unfinished","bounded_transition","respect_choice"]}]');

alter table public.practice_rooms add column exercise_type text not null default 'single-skill' check(exercise_type in ('single-skill','mastery'));
alter table public.practice_rooms add column exercise_id text;
alter table public.practice_rooms drop constraint practice_rooms_configured_check;
alter table public.practice_rooms add constraint practice_rooms_configured_check check (
  phase in ('choosing','closed') or (case_id is not null and difficulty is not null and content_revision is not null
    and cardinality(statement_ids)=round_size and (
      (exercise_type='single-skill' and skill_id is not null and exercise_id is null) or
      (exercise_type='mastery' and skill_id is null and exercise_id is not null and round_size=12)))
);

create table public.mastery_ratings (
  id uuid primary key default gen_random_uuid(),
  therapist_user_id uuid not null references auth.users(id) on delete cascade,
  created_by_user_id uuid not null references auth.users(id) on delete cascade,
  source text not null check(source in ('self','observer')),
  language_id text not null check(language_id in ('en','no')),
  exercise_id text not null, content_revision text not null,
  case_id text not null, difficulty text not null check(difficulty in ('easy','moderate','hard')),
  parent_round_id uuid not null, set_number integer not null check(set_number between 1 and 4),
  completed_scene_ids text[] not null, practiced_skill_ids text[] not null,
  item_count integer not null check(item_count between 1 and 3),
  score integer not null check(score between 1 and 5),
  practice_mode text not null check(practice_mode in ('individual','shared','group')),
  rating_rubric text not null default 'group-skill-v2' check(rating_rubric='group-skill-v2'),
  created_at timestamptz not null default now(),
  constraint mastery_ratings_attribution_check check((source='self' and therapist_user_id=created_by_user_id) or (source='observer' and therapist_user_id<>created_by_user_id)),
  constraint mastery_ratings_cardinality_check check(cardinality(completed_scene_ids)=item_count),
  unique(created_by_user_id,parent_round_id,set_number)
);
alter table public.mastery_ratings enable row level security;
create policy mastery_ratings_own_history on public.mastery_ratings for select to authenticated using(therapist_user_id=(select auth.uid()));
revoke all on public.mastery_ratings from public,anon,authenticated;
grant select on public.mastery_ratings to authenticated;
create index mastery_ratings_history_cursor_idx on public.mastery_ratings(therapist_user_id,source,created_at desc,id desc);

create function public.mastery_capabilities() returns jsonb language sql stable security definer set search_path=pg_catalog as $$
  select jsonb_build_object('protocol','guided-mastery-v1','exercises',coalesce(jsonb_agg(jsonb_build_object('id',exercise_id,'revision',revision)),'[]'::jsonb)) from dp_private.exercise_catalog where auth.uid() is not null;
$$;
revoke all on function public.mastery_capabilities() from public,anon;
grant execute on function public.mastery_capabilities() to authenticated;

-- Only server-approved metadata is accepted; prose stays in the client content bundle.
create function dp_private.validate_mastery_config(input_config jsonb) returns text[]
language plpgsql set search_path=pg_catalog as $$
declare e dp_private.exercise_catalog; ids text[];
begin
  select * into e from dp_private.exercise_catalog where exercise_id=input_config->>'exerciseId' and revision=input_config->>'contentRevision';
  if not found or input_config->>'exerciseType' is distinct from 'mastery'
    or input_config->>'caseId' is distinct from e.case_id or input_config->>'difficulty' is distinct from e.difficulty
    or input_config->>'roundSize' is distinct from '12' or input_config->>'languageId' is null
    or input_config->>'languageId' not in ('en','no') or input_config->>'skillId' is not null
    or input_config->'statements' is distinct from e.scenes or octet_length(input_config::text)>20000 then
    raise exception 'Unknown or incompatible mastery exercise. Refresh the app.';
  end if;
  select array_agg(scene->>'id' order by position) into ids from jsonb_array_elements(e.scenes) with ordinality entries(scene,position);
  return ids;
end;
$$;
revoke all on function dp_private.validate_mastery_config(jsonb) from public,anon,authenticated;

-- Private common writer. Public self assessment supplies no target user/source.
-- Room observer assessment reaches this only after locked membership/role checks.
create function dp_private.write_mastery_rating(therapist uuid,rater uuid,kind text,lang text,exercise text,revision text,
  round_id uuid,checkpoint integer,completed text[],value integer,mode text) returns uuid
language plpgsql set search_path=pg_catalog as $$
declare e dp_private.exercise_catalog; ids text[]; skills text[]; saved uuid;
begin
  select * into e from dp_private.exercise_catalog where exercise_id=exercise and exercise_catalog.revision=write_mastery_rating.revision;
  if not found or therapist is null or rater is null or rater is distinct from auth.uid()
    or kind is null or kind not in ('self','observer') or (kind='self') is distinct from (therapist=rater)
    or lang is null or lang not in ('en','no') or mode is null or mode not in ('individual','shared','group')
    or round_id is null or checkpoint is null or checkpoint not between 1 and 4
    or value is null or value not between 1 and 5 or completed is null or cardinality(completed) not between 1 and 3 then
    raise exception 'Invalid mastery rating';
  end if;
  select array_agg(scene->>'id' order by position),array_agg(scene->>'skillId' order by position) into ids,skills
    from jsonb_array_elements(e.scenes) with ordinality entries(scene,position)
    where position between (checkpoint-1)*3+1 and checkpoint*3 and scene->>'id'=any(completed);
  if ids is distinct from completed then raise exception 'Rate only completed scenes from this set, in sequence order'; end if;
  insert into public.mastery_ratings(therapist_user_id,created_by_user_id,source,language_id,exercise_id,content_revision,
    case_id,difficulty,parent_round_id,set_number,completed_scene_ids,practiced_skill_ids,item_count,score,practice_mode)
  values(therapist,rater,kind,lang,exercise,revision,e.case_id,e.difficulty,round_id,checkpoint,completed,skills,cardinality(completed),value,mode)
  on conflict(created_by_user_id,parent_round_id,set_number) do update set score=excluded.score
  where mastery_ratings.therapist_user_id=excluded.therapist_user_id and mastery_ratings.source=excluded.source
    and mastery_ratings.language_id=excluded.language_id and mastery_ratings.exercise_id=excluded.exercise_id
    and mastery_ratings.content_revision=excluded.content_revision and mastery_ratings.completed_scene_ids=excluded.completed_scene_ids
    and mastery_ratings.practice_mode=excluded.practice_mode
  returning id into saved;
  if saved is null then raise exception 'Rating identity belongs to another exercise, scope or therapist'; end if;
  return saved;
end;
$$;
revoke all on function dp_private.write_mastery_rating(uuid,uuid,text,text,text,text,uuid,integer,text[],integer,text) from public,anon,authenticated;
create function public.record_mastery_rating(input_language_id text,input_exercise_id text,input_content_revision text,
  input_parent_round_id uuid,input_set_number integer,input_completed_scene_ids text[],input_score integer,input_practice_mode text)
returns uuid language plpgsql security definer set search_path=pg_catalog as $$
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if input_practice_mode is null or input_practice_mode not in ('individual','shared') then raise exception 'Room ratings must be recorded in the room'; end if;
  return dp_private.write_mastery_rating(auth.uid(),auth.uid(),'self',input_language_id,input_exercise_id,input_content_revision,
    input_parent_round_id,input_set_number,input_completed_scene_ids,input_score,input_practice_mode);
end;
$$;
revoke all on function public.record_mastery_rating(text,text,text,uuid,integer,text[],integer,text) from public,anon;
grant execute on function public.record_mastery_rating(text,text,text,uuid,integer,text[],integer,text) to authenticated;
create or replace function public.create_practice_room(input_config jsonb, input_room_id uuid) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; ids text[] := '{}'; chosen text := coalesce(input_config->>'hostRole','therapist');
  lang text := coalesce(input_config->>'languageId','en'); configured boolean := input_config ? 'skillId' or input_config->>'exerciseType'='mastery';
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id=input_room_id for update;
  if found then
    if r.host_id <> auth.uid() then raise exception 'Room unavailable'; end if;
    return dp_private.room_snapshot(r);
  end if;
  if chosen not in ('therapist','client','observer') or lang not in ('en','no') then raise exception 'Choose a language and role'; end if;
  if configured then ids := case when input_config->>'exerciseType'='mastery' then dp_private.validate_mastery_config(input_config) else dp_private.validate_room_config(input_config) end;
  elsif input_config ? 'caseId' or input_config ? 'statements' then raise exception 'Incomplete room configuration'; end if;
  insert into public.practice_rooms(id,host_id,member_ids,therapist_id,client_id,observer_id,language_id,
    skill_id,case_id,difficulty,content_revision,catalog,statement_ids,round_size,phase,readiness_required,exercise_type,exercise_id)
  values(input_room_id,auth.uid(),array[auth.uid()],case when chosen='therapist' then auth.uid() end,
    case when chosen='client' then auth.uid() end,case when chosen='observer' then auth.uid() end,lang,
    input_config->>'skillId',input_config->>'caseId',input_config->>'difficulty',input_config->>'contentRevision',
    coalesce(input_config->'statements','[]'::jsonb),coalesce(ids[1:coalesce((input_config->>'roundSize')::integer,3)],'{}'),
    coalesce((input_config->>'roundSize')::integer,3),case when configured then 'lobby' else 'choosing' end,
    coalesce(input_config->>'preparationProtocol','')='ready-v1', coalesce(input_config->>'exerciseType','single-skill'), input_config->>'exerciseId') returning * into r;
  return dp_private.room_snapshot(r);
end;
$$;
revoke all on function public.create_practice_room(jsonb,uuid) from public, anon;
grant execute on function public.create_practice_room(jsonb,uuid) to authenticated;

create or replace function public.prepare_practice_room(input_room_id uuid,input_command_id uuid,
  input_expected_version integer,input_config jsonb) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; receipt dp_private.room_commands; ids text[];
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id=input_room_id for update;
  if not found then raise exception 'Only the host can choose practice'; end if;
  select * into receipt from dp_private.room_commands where room_id=r.id and command_id=input_command_id;
  if found then
    if receipt.user_id <> auth.uid() or receipt.action <> 'prepare'
      or receipt.expected_version is distinct from input_expected_version
      or receipt.configuration is distinct from input_config then raise exception 'Command ID already used'; end if;
    if not auth.uid()=any(r.member_ids) then raise exception 'Room unavailable'; end if;
    return dp_private.room_snapshot(r);
  end if;
  if r.host_id <> auth.uid() then raise exception 'Only the host can choose practice'; end if;
  if r.expires_at<=now() or r.phase not in ('choosing','lobby') then raise exception 'Choose practice between rounds'; end if;
  if input_expected_version is null or input_expected_version<>r.version then raise exception 'Room changed. Sync and try again.'; end if;
  ids := case when input_config->>'exerciseType'='mastery' then dp_private.validate_mastery_config(input_config) else dp_private.validate_room_config(input_config) end;
  update public.practice_rooms set exercise_type=coalesce(input_config->>'exerciseType','single-skill'),exercise_id=input_config->>'exerciseId',language_id=input_config->>'languageId',skill_id=input_config->>'skillId',
    case_id=input_config->>'caseId',difficulty=input_config->>'difficulty',content_revision=input_config->>'contentRevision',
    catalog=input_config->'statements',statement_ids=ids[1:coalesce((input_config->>'roundSize')::integer,3)],
    round_size=coalesce((input_config->>'roundSize')::integer,3),rating_round_id=gen_random_uuid(),phase='lobby',item_index=0,
    completed_ids='{}',skipped_ids='{}',saved_score=null,round_id=gen_random_uuid(),round_interrupted=false,version=version+1,
    readiness_required=readiness_required or coalesce(input_config->>'preparationProtocol','')='ready-v1'
  where id=r.id returning * into r;
  insert into dp_private.room_commands(room_id,command_id,user_id,expected_version,action,configuration)
    values(r.id,input_command_id,auth.uid(),input_expected_version,'prepare',input_config);
  return dp_private.room_snapshot(r);
end;
$$;
revoke all on function public.prepare_practice_room(uuid,uuid,integer,jsonb) from public, anon;
grant execute on function public.prepare_practice_room(uuid,uuid,integer,jsonb) to authenticated;

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
      r.phase:=case when r.case_id is null then 'choosing' else 'lobby' end;
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
    if r.exercise_type='mastery' then
      perform dp_private.write_mastery_rating(r.therapist_id,rater,case when rater=r.therapist_id then 'self' else 'observer' end,
        r.language_id,r.exercise_id,r.content_revision,r.round_id,r.item_index/3+1,rated_ids,input_score,'group');
    else
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
    end if;
    r.saved_score := input_score;
  elsif input_action='continue_set' then
    if r.round_size<>12 or r.phase<>'round_debrief' or r.item_index>=11 then raise exception 'No next set'; end if;
    r.item_index:=r.item_index+1;r.phase:='practicing';r.saved_score:=null;r.rating_round_id:=gen_random_uuid();
  elsif input_action='prepare_next' then
    if r.round_size<>12 or r.phase<>'round_debrief' or r.item_index<>11 then raise exception 'Finish all twelve items before choosing again'; end if;
    -- Return to explicit selection; the room, host and membership stay intact.
    r.phase:='choosing';r.exercise_type:='single-skill';r.exercise_id:=null;r.skill_id:=null;r.case_id:=null;r.difficulty:=null;r.content_revision:=null;
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
    exercise_type=r.exercise_type,exercise_id=r.exercise_id,skill_id=r.skill_id,case_id=r.case_id,difficulty=r.difficulty,content_revision=r.content_revision,catalog=r.catalog,version = r.version where id = r.id;
  insert into dp_private.room_commands(room_id,command_id,user_id,expected_version,action,score) values(r.id, input_command_id, auth.uid(), input_expected_version, input_action, input_score);
  if input_action='leave' then return jsonb_build_object('left',true); end if;
  return dp_private.room_snapshot(r);
end;
$$;

revoke all on function public.command_practice_room(uuid,uuid,integer,text,integer) from public, anon;
grant execute on function public.command_practice_room(uuid,uuid,integer,text,integer) to authenticated;

alter table public.practice_goals drop constraint practice_goals_skill_id_check;
alter table public.practice_goals add constraint practice_goals_skill_id_check check(skill_id in (
  'therapist-self-awareness','empathic-understanding','empathic-affirmation-validation','exploratory-questions',
  'providing-treatment-rationale','empathic-explorations','empathic-evocations','empathic-conjectures',
  'staying-in-contact-intense-affect','self-disclosure','marker-recognition-chairwork','alliance-repair',
  'empathic-refocusing','consolidating-emotional-change','closing-after-emotional-work'));

-- User-requested cleanup: obsolete scores have different meanings and are not converted.
-- Back up practice_ratings before applying. Retain current skill-performance scores.
delete from public.practice_ratings where rating_rubric is distinct from 'group-skill-v2';

-- One skill-performance scale for individual and group practice, self and observer.
alter table public.practice_ratings add column if not exists practice_mode text;
alter table public.practice_ratings add column if not exists rating_rubric text default 'group-skill-v2';
alter table public.practice_ratings alter column practice_mode set not null;
alter table public.practice_ratings alter column rating_rubric set default 'group-skill-v2';
alter table public.practice_ratings alter column rating_rubric set not null;
alter table public.practice_ratings drop constraint if exists practice_ratings_rubric_check;
alter table public.practice_ratings add constraint practice_ratings_rubric_check check (
  practice_mode in ('individual', 'triad') and rating_rubric = 'group-skill-v2'
);

create or replace function public.record_practice_rating(
  input_therapist_user_id uuid,
  input_source text,
  input_language_id text,
  input_skill_id text,
  input_case_id text,
  input_statement_id text,
  input_statement_index integer,
  input_difficulty text,
  input_score integer,
  input_criteria_tags text[] default '{}',
  input_content_revision text default null,
  input_rating_scope text default 'statement',
  input_completed_statement_ids text[] default '{}',
  input_item_count integer default null,
  input_client_round_id uuid default null,
  input_practice_mode text default null,
  input_rating_rubric text default 'group-skill-v2'
)
returns table (
  id uuid,
  created_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
  target_therapist_id uuid := coalesce(input_therapist_user_id, auth.uid());
  rating_source text := lower(coalesce(input_source, ''));
  normalized_rating_scope text := lower(coalesce(nullif(trim(input_rating_scope), ''), 'statement'));
  normalized_statement_id text := nullif(trim(input_statement_id), '');
  normalized_item_count integer := input_item_count;
  accepted_partnership_id uuid;
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  if target_therapist_id is null then
    raise exception 'A therapist target is required';
  end if;

  if input_score is null or input_score < 1 or input_score > 5 then
    raise exception 'Score must be between 1 and 5';
  end if;

  if input_rating_rubric is distinct from 'group-skill-v2' then
    raise exception 'This rating scale is no longer supported. Refresh the app.';
  end if;

  if input_practice_mode is null or input_practice_mode not in ('individual', 'triad') then
    raise exception 'Practice mode must be individual or triad';
  end if;

  if normalized_rating_scope not in ('statement', 'series') then
    raise exception 'Rating scope must be statement or series';
  end if;

  if normalized_rating_scope = 'statement' and normalized_statement_id is null then
    raise exception 'Statement ratings require a statement id';
  end if;

  if normalized_rating_scope = 'series' then
    normalized_item_count := coalesce(normalized_item_count, cardinality(coalesce(input_completed_statement_ids, '{}')));
    if normalized_item_count is null or normalized_item_count < 1 then
      raise exception 'Series ratings require at least one practiced item';
    end if;
  end if;

  if actor_id = target_therapist_id then
    if rating_source not in ('', 'self') then
      raise exception 'Self ratings must use source self';
    end if;
    rating_source := 'self';
  else
    if rating_source not in ('', 'observer') then
      raise exception 'Observer ratings must use source observer';
    end if;

    select pp.id
    into accepted_partnership_id
    from public.practice_partnerships pp
    where pp.therapist_user_id = target_therapist_id
      and pp.observer_user_id = actor_id
      and pp.status = 'accepted';

    if accepted_partnership_id is null then
      raise exception 'Accepted pairing is required for observer ratings';
    end if;

    rating_source := 'observer';
  end if;

  return query
  insert into public.practice_ratings (
    therapist_user_id,
    created_by_user_id,
    partnership_id,
    source,
    rating_scope,
    language_id,
    skill_id,
    case_id,
    statement_id,
    statement_index,
    difficulty,
    score,
    criteria_tags,
    completed_statement_ids,
    item_count,
    content_revision,
    client_round_id,
    practice_mode,
    rating_rubric
  )
  values (
    target_therapist_id,
    actor_id,
    accepted_partnership_id,
    rating_source,
    normalized_rating_scope,
    nullif(trim(input_language_id), ''),
    nullif(trim(input_skill_id), ''),
    nullif(trim(input_case_id), ''),
    normalized_statement_id,
    input_statement_index,
    nullif(trim(input_difficulty), ''),
    input_score,
    coalesce(input_criteria_tags, '{}'),
    coalesce(input_completed_statement_ids, '{}'),
    normalized_item_count,
    nullif(trim(input_content_revision), ''),
    input_client_round_id,
    input_practice_mode,
    input_rating_rubric
  )
  on conflict (created_by_user_id, client_round_id) do update
  set score = excluded.score,
      criteria_tags = excluded.criteria_tags
  where public.practice_ratings.therapist_user_id = excluded.therapist_user_id
    and public.practice_ratings.source = excluded.source
    and public.practice_ratings.language_id = excluded.language_id
    and public.practice_ratings.skill_id = excluded.skill_id
    and public.practice_ratings.case_id = excluded.case_id
    and public.practice_ratings.rating_scope = excluded.rating_scope
    and public.practice_ratings.statement_id is not distinct from excluded.statement_id
    and public.practice_ratings.difficulty is not distinct from excluded.difficulty
    and public.practice_ratings.item_count is not distinct from excluded.item_count
    and public.practice_ratings.completed_statement_ids = excluded.completed_statement_ids
    and public.practice_ratings.practice_mode is not distinct from excluded.practice_mode
    and public.practice_ratings.rating_rubric is not distinct from excluded.rating_rubric
  returning public.practice_ratings.id, public.practice_ratings.created_at;
  if not found then
    raise exception 'This round ID already belongs to a different practice round';
  end if;
end;
$$;

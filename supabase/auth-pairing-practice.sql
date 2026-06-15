create extension if not exists pgcrypto with schema extensions;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  handle text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pairing_invites (
  id uuid primary key default gen_random_uuid(),
  therapist_user_id uuid not null references auth.users(id) on delete cascade,
  code text not null unique,
  expires_at timestamptz not null default (now() + interval '30 minutes'),
  accepted_by_user_id uuid references auth.users(id) on delete set null,
  accepted_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.practice_partnerships (
  id uuid primary key default gen_random_uuid(),
  therapist_user_id uuid not null references auth.users(id) on delete cascade,
  observer_user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'accepted' check (status in ('accepted', 'revoked')),
  accepted_at timestamptz not null default now(),
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint practice_partnerships_distinct_users check (therapist_user_id <> observer_user_id),
  constraint practice_partnerships_unique_pair unique (therapist_user_id, observer_user_id)
);

create table if not exists public.practice_ratings (
  id uuid primary key default gen_random_uuid(),
  therapist_user_id uuid not null references auth.users(id) on delete cascade,
  created_by_user_id uuid not null references auth.users(id) on delete cascade,
  partnership_id uuid references public.practice_partnerships(id) on delete set null,
  source text not null check (source in ('self', 'observer')),
  rating_scope text not null default 'statement' check (rating_scope in ('statement', 'series')),
  language_id text not null,
  skill_id text not null,
  case_id text not null,
  statement_id text,
  statement_index integer,
  difficulty text,
  score integer not null check (score between 1 and 5),
  criteria_tags text[] not null default '{}',
  completed_statement_ids text[] not null default '{}',
  item_count integer,
  content_revision text,
  created_at timestamptz not null default now()
);

alter table public.practice_ratings
add column if not exists rating_scope text not null default 'statement';

alter table public.practice_ratings
add column if not exists completed_statement_ids text[] not null default '{}';

alter table public.practice_ratings
add column if not exists item_count integer;

alter table public.practice_ratings
alter column statement_id drop not null;

alter table public.practice_ratings
drop constraint if exists practice_ratings_rating_scope_check;

alter table public.practice_ratings
add constraint practice_ratings_rating_scope_check
check (rating_scope in ('statement', 'series'));

create index if not exists profiles_handle_idx on public.profiles(handle);
create index if not exists pairing_invites_code_idx on public.pairing_invites(code);
create index if not exists pairing_invites_therapist_idx on public.pairing_invites(therapist_user_id, created_at desc);
create index if not exists practice_partnerships_observer_idx on public.practice_partnerships(observer_user_id, status);
create index if not exists practice_partnerships_therapist_idx on public.practice_partnerships(therapist_user_id, status);
create index if not exists practice_ratings_therapist_idx on public.practice_ratings(therapist_user_id, created_at desc);
create index if not exists practice_ratings_created_by_idx on public.practice_ratings(created_by_user_id, created_at desc);
create index if not exists practice_ratings_skill_case_idx on public.practice_ratings(therapist_user_id, skill_id, case_id);
create index if not exists practice_ratings_scope_idx on public.practice_ratings(therapist_user_id, rating_scope, created_at desc);

create or replace function public.dp_touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.dp_touch_updated_at();

drop trigger if exists practice_partnerships_touch_updated_at on public.practice_partnerships;
create trigger practice_partnerships_touch_updated_at
before update on public.practice_partnerships
for each row execute function public.dp_touch_updated_at();

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(
      nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''),
      nullif(trim(new.raw_user_meta_data ->> 'name'), ''),
      nullif(split_part(new.email, '@', 1), ''),
      'Therapist'
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_user_profile();

alter table public.profiles enable row level security;
alter table public.pairing_invites enable row level security;
alter table public.practice_partnerships enable row level security;
alter table public.practice_ratings enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using ((select auth.uid()) is not null and id = (select auth.uid()));

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) is not null and id = (select auth.uid()));

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using ((select auth.uid()) is not null and id = (select auth.uid()))
with check ((select auth.uid()) is not null and id = (select auth.uid()));

drop policy if exists "practice_partnerships_select_related" on public.practice_partnerships;
create policy "practice_partnerships_select_related"
on public.practice_partnerships
for select
to authenticated
using (
  (select auth.uid()) is not null
  and (
    therapist_user_id = (select auth.uid())
    or observer_user_id = (select auth.uid())
  )
);

drop policy if exists "practice_ratings_select_related" on public.practice_ratings;
create policy "practice_ratings_select_related"
on public.practice_ratings
for select
to authenticated
using (
  (select auth.uid()) is not null
  and (
    therapist_user_id = (select auth.uid())
    or created_by_user_id = (select auth.uid())
  )
);

revoke all on public.pairing_invites from anon, authenticated;
revoke insert, update, delete on public.practice_partnerships from anon, authenticated;
revoke insert, update, delete on public.practice_ratings from anon, authenticated;
grant select, insert, update on public.profiles to authenticated;
grant select on public.practice_partnerships to authenticated;
grant select on public.practice_ratings to authenticated;

create or replace function public.normalize_pairing_code(input_code text)
returns text
language sql
immutable
as $$
  select upper(regexp_replace(coalesce(input_code, ''), '[^A-Za-z0-9]', '', 'g'));
$$;

create or replace function public.ensure_user_profile(input_display_name text default null)
returns table (
  id uuid,
  display_name text,
  handle text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
  actor_email text := nullif(auth.jwt() ->> 'email', '');
  next_display_name text;
  requested_display_name text := nullif(trim(input_display_name), '');
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  next_display_name := coalesce(
    requested_display_name,
    nullif(split_part(actor_email, '@', 1), ''),
    'Therapist'
  );

  insert into public.profiles (id, display_name)
  values (actor_id, next_display_name)
  on conflict on constraint profiles_pkey do update
  set
    display_name = coalesce(requested_display_name, public.profiles.display_name),
    updated_at = now();

  return query
  select p.id, p.display_name, p.handle
  from public.profiles p
  where p.id = actor_id;
end;
$$;

create or replace function public.list_practice_targets()
returns table (
  target_user_id uuid,
  display_name text,
  target_kind text,
  partnership_id uuid
)
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  perform public.ensure_user_profile(null);

  return query
  select target_rows.target_user_id, target_rows.display_name, target_rows.target_kind, target_rows.partnership_id
  from (
    select
      actor_id as target_user_id,
      coalesce(self_profile.display_name, 'Me') as display_name,
      'self'::text as target_kind,
      null::uuid as partnership_id,
      0 as sort_order
    from public.profiles self_profile
    where self_profile.id = actor_id

    union all

    select
      pp.therapist_user_id as target_user_id,
      coalesce(therapist_profile.display_name, 'Therapist') as display_name,
      'observer'::text as target_kind,
      pp.id as partnership_id,
      1 as sort_order
    from public.practice_partnerships pp
    left join public.profiles therapist_profile on therapist_profile.id = pp.therapist_user_id
    where pp.observer_user_id = actor_id
      and pp.status = 'accepted'
  ) target_rows
  order by target_rows.sort_order, target_rows.display_name;
end;
$$;

create or replace function public.create_pairing_invite()
returns table (
  code text,
  expires_at timestamptz
)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  actor_id uuid := auth.uid();
  raw_code text;
  normalized_code text;
  invite_expires_at timestamptz := now() + interval '30 minutes';
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  perform public.ensure_user_profile(null);

  loop
    raw_code := upper(substr(encode(gen_random_bytes(4), 'hex'), 1, 8));
    normalized_code := public.normalize_pairing_code(raw_code);
    begin
      insert into public.pairing_invites (therapist_user_id, code, expires_at)
      values (actor_id, normalized_code, invite_expires_at);
      exit;
    exception
      when unique_violation then
        null;
    end;
  end loop;

  return query
  select normalized_code, invite_expires_at;
end;
$$;

create or replace function public.accept_pairing_invite(input_code text)
returns table (
  target_user_id uuid,
  display_name text,
  target_kind text,
  partnership_id uuid
)
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
  normalized_code text := public.normalize_pairing_code(input_code);
  invite_row public.pairing_invites%rowtype;
  accepted_partnership_id uuid;
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  if normalized_code = '' then
    raise exception 'Pairing code is required';
  end if;

  perform public.ensure_user_profile(null);

  select *
  into invite_row
  from public.pairing_invites
  where code = normalized_code
    and revoked_at is null
    and accepted_at is null
    and expires_at > now()
  for update;

  if invite_row.id is null then
    raise exception 'Pairing code is invalid or expired';
  end if;

  if invite_row.therapist_user_id = actor_id then
    raise exception 'You cannot accept your own pairing code';
  end if;

  insert into public.practice_partnerships (therapist_user_id, observer_user_id, status, accepted_at, revoked_at)
  values (invite_row.therapist_user_id, actor_id, 'accepted', now(), null)
  on conflict (therapist_user_id, observer_user_id) do update
  set
    status = 'accepted',
    accepted_at = now(),
    revoked_at = null,
    updated_at = now()
  returning id into accepted_partnership_id;

  update public.pairing_invites
  set
    accepted_by_user_id = actor_id,
    accepted_at = now()
  where id = invite_row.id;

  return query
  select
    invite_row.therapist_user_id,
    coalesce(p.display_name, 'Therapist'),
    'observer'::text,
    accepted_partnership_id
  from public.profiles p
  where p.id = invite_row.therapist_user_id;
end;
$$;

create or replace function public.revoke_practice_partnership(input_partnership_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_id uuid := auth.uid();
begin
  if actor_id is null then
    raise exception 'Authentication required';
  end if;

  update public.practice_partnerships
  set
    status = 'revoked',
    revoked_at = now(),
    updated_at = now()
  where id = input_partnership_id
    and status = 'accepted'
    and (
      therapist_user_id = actor_id
      or observer_user_id = actor_id
    );

  if not found then
    raise exception 'Partnership was not found';
  end if;

  return true;
end;
$$;

drop function if exists public.record_practice_rating(uuid, text, text, text, text, text, integer, text, integer, text[], text);
drop function if exists public.record_practice_rating(uuid, text, text, text, text, text, integer, text, integer, text[], text, text, text[], integer, integer);
drop function if exists public.record_practice_rating(uuid, text, text, text, text, text, integer, text, integer, text[], text, text, text[], integer);

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
  input_item_count integer default null
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
    content_revision
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
    nullif(trim(input_content_revision), '')
  )
  returning public.practice_ratings.id, public.practice_ratings.created_at;
end;
$$;

revoke all on function public.ensure_user_profile(text) from public;
revoke all on function public.list_practice_targets() from public;
revoke all on function public.create_pairing_invite() from public;
revoke all on function public.accept_pairing_invite(text) from public;
revoke all on function public.revoke_practice_partnership(uuid) from public;
revoke all on function public.record_practice_rating(uuid, text, text, text, text, text, integer, text, integer, text[], text, text, text[], integer) from public;

grant execute on function public.ensure_user_profile(text) to authenticated;
grant execute on function public.list_practice_targets() to authenticated;
grant execute on function public.create_pairing_invite() to authenticated;
grant execute on function public.accept_pairing_invite(text) to authenticated;
grant execute on function public.revoke_practice_partnership(uuid) to authenticated;
grant execute on function public.record_practice_rating(uuid, text, text, text, text, text, integer, text, integer, text[], text, text, text[], integer) to authenticated;

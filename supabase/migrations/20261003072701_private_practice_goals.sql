-- One private learning reminder per person, skill and language. Room membership
-- and observer-rating permission never grant access to these notes.
create table public.practice_goals (
  user_id uuid not null references auth.users(id) on delete cascade,
  language_id text not null check (language_id in ('en','no')),
  skill_id text not null check (skill_id in (
    'therapist-self-awareness','empathic-understanding','empathic-affirmation-validation',
    'exploratory-questions','providing-treatment-rationale','empathic-explorations',
    'empathic-evocations','empathic-conjectures','staying-in-contact-intense-affect',
    'self-disclosure','marker-recognition-chairwork','alliance-repair')),
  goal_text text not null check (char_length(goal_text) between 1 and 160 and goal_text=btrim(goal_text)),
  updated_at timestamptz not null default now(),
  primary key (user_id, language_id, skill_id)
);
alter table public.practice_goals enable row level security;
revoke all on public.practice_goals from public, anon, authenticated;
grant select, insert, update, delete on public.practice_goals to authenticated;
create policy practice_goals_select on public.practice_goals for select to authenticated using ((select auth.uid())=user_id);
create policy practice_goals_insert on public.practice_goals for insert to authenticated with check ((select auth.uid())=user_id);
create policy practice_goals_update on public.practice_goals for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy practice_goals_delete on public.practice_goals for delete to authenticated using ((select auth.uid())=user_id);

create function dp_private.stamp_practice_goal() returns trigger
language plpgsql set search_path=pg_catalog as $$
begin new.updated_at=now(); return new; end;
$$;
revoke all on function dp_private.stamp_practice_goal() from public, anon, authenticated;
create trigger practice_goals_timestamp before insert or update on public.practice_goals
for each row execute function dp_private.stamp_practice_goal();

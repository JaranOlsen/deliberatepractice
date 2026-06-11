-- Optional maintenance fields for reviewing statement feedback.
-- Run in the Supabase SQL editor for the project used by this app.
-- The public app still only needs anonymous inserts; these fields are for
-- local/admin review with SUPABASE_SECRET_KEY.

alter table public.feedback
  add column if not exists status text not null default 'open',
  add column if not exists resolved_at timestamptz,
  add column if not exists resolution_note text;

alter table public.feedback
  drop constraint if exists feedback_status_check;

alter table public.feedback
  add constraint feedback_status_check
  check (status in ('open', 'fixed', 'dismissed'));

create index if not exists feedback_status_created_at_idx
on public.feedback (status, created_at desc);

notify pgrst, 'reload schema';

create table dp_private.content_cases(case_id text primary key,premium boolean not null);
alter table dp_private.content_cases enable row level security;
revoke all on dp_private.content_cases from public,anon,authenticated;
grant all on dp_private.content_cases to service_role;
insert into dp_private.content_cases(case_id,premium) values
 ('case-sara',false),('case-michael',false),('case-jason',false),('case-laura',false),('case-carlos',false),('case-nina',false),
 ('case-aisha',true),('case-david',true),('case-marcus',true),('case-arne',true),('case-mia',true),('case-nora',true);

alter table public.practice_rooms add column access_sponsor_id uuid references auth.users(id) on delete set null;
alter table public.practice_rooms add column sponsored_round_id uuid;
alter table public.practice_rooms add column content_access_until timestamptz;
-- Existing configured rounds retain their material until that room expires.
-- Preparing any subsequent premium round requires a current account grant.
update public.practice_rooms set access_sponsor_id=host_id,sponsored_round_id=round_id,content_access_until=expires_at
 where case_id in (select case_id from dp_private.content_cases where premium) and phase<>'closed';

create function dp_private.room_access_sponsor(r public.practice_rooms) returns uuid
language plpgsql stable security definer set search_path=pg_catalog as $$
declare candidate uuid;
begin
  if r.host_id=any(r.member_ids) and dp_private.has_full_content(r.host_id) then return r.host_id;end if;
  if r.access_sponsor_id=any(r.member_ids) and dp_private.has_full_content(r.access_sponsor_id) then return r.access_sponsor_id;end if;
  foreach candidate in array r.member_ids loop if dp_private.has_full_content(candidate) then return candidate;end if;end loop;
  return null;
end;
$$;
revoke all on function dp_private.room_access_sponsor(public.practice_rooms) from public,anon,authenticated;

create function dp_private.guard_room_content_access() returns trigger
language plpgsql security definer set search_path=pg_catalog as $$
declare premium boolean; new_material boolean; sponsor uuid;
begin
  if new.phase='closed' then return new;end if;
  if new.case_id is null then new.access_sponsor_id:=null;new.sponsored_round_id:=null;new.content_access_until:=null;return new;end if;
  select c.premium into premium from dp_private.content_cases c where case_id=new.case_id;
  if premium is null then raise exception 'Unknown practice case';end if;
  if not premium then new.access_sponsor_id:=null;new.sponsored_round_id:=null;new.content_access_until:=null;return new;end if;
  new_material:=tg_op='INSERT';
  if tg_op='UPDATE' then new_material:=old.round_id is distinct from new.round_id or old.case_id is distinct from new.case_id
    or old.skill_id is distinct from new.skill_id or old.exercise_id is distinct from new.exercise_id
    or old.language_id is distinct from new.language_id or old.difficulty is distinct from new.difficulty
    or old.content_revision is distinct from new.content_revision or old.catalog is distinct from new.catalog
    or (old.phase='choosing' and new.phase in ('lobby','practicing'));end if;
  if new_material then
    sponsor:=dp_private.room_access_sponsor(new);
    if sponsor is null then raise exception 'full_access_required';end if;
    new.access_sponsor_id:=sponsor;new.sponsored_round_id:=new.round_id;
    new.content_access_until:=least(new.expires_at,now()+interval '1 day');
  end if;
  return new;
end;
$$;
revoke all on function dp_private.guard_room_content_access() from public,anon,authenticated;
create trigger practice_rooms_content_access before insert or update on public.practice_rooms
 for each row execute function dp_private.guard_room_content_access();

create function dp_private.content_access(input_room_id uuid) returns jsonb
language plpgsql stable security definer set search_path=pg_catalog as $$
declare uid uuid:=auth.uid(); r public.practice_rooms; personal boolean; choosing boolean:=false; room_access boolean:=false;
begin
  if uid is null then raise exception 'sign_in_required';end if;
  personal:=dp_private.has_full_content(uid);
  if input_room_id is not null then
    select * into r from public.practice_rooms where id=input_room_id;
    if not found or not uid=any(r.member_ids) or r.phase='closed' or r.expires_at<=now() then raise exception 'room_unavailable';end if;
    choosing:=uid=r.host_id and r.phase in ('choosing','lobby') and dp_private.room_access_sponsor(r) is not null;
    room_access:=r.case_id is not null and (not (select premium from dp_private.content_cases where case_id=r.case_id)
      or (r.sponsored_round_id=r.round_id and r.content_access_until>now()));
  end if;
  return jsonb_build_object('full_content',personal or choosing,'personal_content',personal,
    'room',case when room_access then jsonb_build_object('id',r.id,'case_id',r.case_id,'skill_id',r.skill_id,'exercise_id',r.exercise_id,
      'language_id',r.language_id,'difficulty',r.difficulty,'statement_ids',r.statement_ids) else null end);
end;
$$;
revoke all on function dp_private.content_access(uuid) from public,anon;
grant execute on function dp_private.content_access(uuid) to authenticated;
create function public.get_content_access(input_room_id uuid default null) returns jsonb
language sql stable security invoker set search_path=pg_catalog as $$ select dp_private.content_access(input_room_id); $$;
revoke all on function public.get_content_access(uuid) from public,anon;
grant execute on function public.get_content_access(uuid) to authenticated;

-- Retain all readiness/presence fields while adding a scoped chooser capability.
create or replace function dp_private.room_snapshot(r public.practice_rooms) returns jsonb
language sql stable security definer set search_path=pg_catalog as $$
  select to_jsonb(current_room) || jsonb_build_object('members',coalesce((
    select jsonb_agg(jsonb_build_object('user_id',m.id,'display_name',p.display_name) order by m.position)
    from unnest(current_room.member_ids) with ordinality m(id,position) left join public.profiles p on p.id=m.id),'[]'::jsonb),
    'full_content_access',case when current_room.phase in ('choosing','lobby') then dp_private.room_access_sponsor(current_room) is not null else false end,
    'host_recovery_available',current_room.phase<>'closed' and current_room.expires_at>now() and dp_private.room_host_recovery_available(current_room),
    'presence',coalesce((select jsonb_object_agg(p.user_id,jsonb_build_object('connected',p.seen_at>now()-interval '20 seconds','acknowledged_version',p.acknowledged_version))
      from dp_private.room_presence p where p.room_id=current_room.id),'{}'::jsonb))
  from public.practice_rooms current_room where current_room.id=r.id;
$$;
revoke all on function dp_private.room_snapshot(public.practice_rooms) from public,anon,authenticated;
notify pgrst,'reload schema';

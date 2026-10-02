-- New clients opt in; existing rooms keep their preparation protocol until reselected.
alter table public.practice_rooms add column readiness_required boolean not null default false;
alter table public.practice_rooms add column preparation_id uuid not null default gen_random_uuid();
alter table public.practice_rooms add column ready_ids uuid[] not null default '{}';
alter table public.practice_rooms add constraint practice_rooms_ready_members_check check (ready_ids <@ member_ids);

-- Keep readiness tied to the material and roles, not to heartbeat/version changes.
-- The start barrier lives in the database, so a direct start RPC cannot bypass it.
create function dp_private.guard_room_preparation() returns trigger
language plpgsql set search_path = pg_catalog as $$
begin
  if old.phase='lobby' and new.phase='practicing' and old.readiness_required then
    if old.client_id is null or not old.client_id=any(old.ready_ids)
      or (old.observer_id is not null and (old.therapist_id is null or not old.therapist_id=any(old.ready_ids))) then
      raise exception 'Waiting for the client and therapist to get ready';
    end if;
  end if;
  if old.round_id is distinct from new.round_id
    or old.therapist_id is distinct from new.therapist_id or old.client_id is distinct from new.client_id
    or old.observer_id is distinct from new.observer_id or old.language_id is distinct from new.language_id
    or old.skill_id is distinct from new.skill_id or old.case_id is distinct from new.case_id
    or old.content_revision is distinct from new.content_revision or old.catalog is distinct from new.catalog
    or old.readiness_required is distinct from new.readiness_required
    or (old.phase is distinct from new.phase and new.phase in ('choosing','lobby')) then
    new.preparation_id:=gen_random_uuid(); new.ready_ids:='{}';
  end if;
  return new;
end;
$$;
revoke all on function dp_private.guard_room_preparation() from public, anon, authenticated;
create trigger practice_rooms_preparation_guard before update on public.practice_rooms
for each row execute function dp_private.guard_room_preparation();

create function dp_private.room_host_recovery_available(r public.practice_rooms) returns boolean
language sql stable set search_path = pg_catalog as $$
  select greatest(r.created_at, coalesce((select p.seen_at from dp_private.room_presence p
    where p.room_id=r.id and p.user_id=r.host_id), r.created_at)) < now() - interval '5 minutes';
$$;
revoke all on function dp_private.room_host_recovery_available(public.practice_rooms) from public, anon, authenticated;

create or replace function dp_private.room_snapshot(r public.practice_rooms) returns jsonb
language sql stable set search_path = pg_catalog as $$
  -- UPDATE triggers may reset readiness after an RPC assembled its local row.
  -- Always return the committed row, including the new preparation token.
  select to_jsonb(current_room) || jsonb_build_object('members', coalesce((
    select jsonb_agg(jsonb_build_object('user_id', m.id, 'display_name', p.display_name) order by m.position)
    from unnest(current_room.member_ids) with ordinality m(id, position)
    left join public.profiles p on p.id = m.id
  ), '[]'::jsonb), 'host_recovery_available', current_room.phase<>'closed' and current_room.expires_at>now() and dp_private.room_host_recovery_available(current_room),
  'presence', coalesce((select jsonb_object_agg(p.user_id::text, jsonb_build_object(
    'acknowledged_version', p.acknowledged_version, 'connected', p.seen_at > now() - interval '20 seconds'))
    from dp_private.room_presence p where p.room_id = current_room.id), '{}'::jsonb))
  from public.practice_rooms current_room where current_room.id=r.id;
$$;
revoke all on function dp_private.room_snapshot(public.practice_rooms) from public, anon, authenticated;

create or replace function public.create_practice_room(input_config jsonb, input_room_id uuid) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; ids text[] := '{}'; chosen text := coalesce(input_config->>'hostRole','therapist');
  lang text := coalesce(input_config->>'languageId','en'); configured boolean := input_config ? 'skillId';
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id=input_room_id for update;
  if found then
    if r.host_id <> auth.uid() then raise exception 'Room unavailable'; end if;
    return dp_private.room_snapshot(r);
  end if;
  if chosen not in ('therapist','client','observer') or lang not in ('en','no') then raise exception 'Choose a language and role'; end if;
  if configured then ids := dp_private.validate_room_config(input_config);
  elsif input_config ? 'caseId' or input_config ? 'statements' then raise exception 'Incomplete room configuration'; end if;
  insert into public.practice_rooms(id,host_id,member_ids,therapist_id,client_id,observer_id,language_id,
    skill_id,case_id,difficulty,content_revision,catalog,statement_ids,round_size,phase,readiness_required)
  values(input_room_id,auth.uid(),array[auth.uid()],case when chosen='therapist' then auth.uid() end,
    case when chosen='client' then auth.uid() end,case when chosen='observer' then auth.uid() end,lang,
    input_config->>'skillId',input_config->>'caseId',input_config->>'difficulty',input_config->>'contentRevision',
    coalesce(input_config->'statements','[]'::jsonb),coalesce(ids[1:coalesce((input_config->>'roundSize')::integer,3)],'{}'),
    coalesce((input_config->>'roundSize')::integer,3),case when configured then 'lobby' else 'choosing' end,
    coalesce(input_config->>'preparationProtocol','')='ready-v1') returning * into r;
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
  ids := dp_private.validate_room_config(input_config);
  update public.practice_rooms set language_id=input_config->>'languageId',skill_id=input_config->>'skillId',
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

-- Separate from progression: readiness is bound to preparation_id, so two people
-- may become ready from the same version without rejecting one another's choice.
create function public.manage_practice_room(input_room_id uuid,input_command_id uuid,
  input_expected_version integer,input_action text,input_config jsonb default null) returns jsonb
language plpgsql security definer set search_path = pg_catalog as $$
declare r public.practice_rooms; receipt dp_private.room_commands; target uuid; was_ready boolean;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.practice_rooms where id=input_room_id for update;
  if not found then raise exception 'Room unavailable'; end if;
  if not auth.uid()=any(r.member_ids) then raise exception 'Room unavailable'; end if;
  select * into receipt from dp_private.room_commands where room_id=r.id and command_id=input_command_id;
  if found then
    if receipt.user_id<>auth.uid() or receipt.action is distinct from input_action
      or receipt.expected_version is distinct from input_expected_version or receipt.configuration is distinct from input_config then
      raise exception 'Command ID already used';
    end if;
    return dp_private.room_snapshot(r);
  end if;
  if r.phase='closed' or r.expires_at<=now() then raise exception 'Room unavailable or expired'; end if;
  if input_expected_version is null or input_expected_version<0 or input_expected_version>r.version then
    raise exception 'Room changed. Sync and try again.';
  end if;
  if input_action in ('ready','not_ready') then
    if not r.readiness_required or r.phase<>'lobby'
      or coalesce(input_config->>'preparationId','')<>r.preparation_id::text then
      raise exception 'Preparation changed. Read the new material before getting ready.';
    end if;
    if auth.uid() is distinct from r.client_id and (auth.uid() is distinct from r.therapist_id or r.observer_id is null) then
      raise exception 'Only the client and therapist confirm readiness; the guide starts the round';
    end if;
    if not exists(select 1 from dp_private.room_presence p where p.room_id=r.id and p.user_id=auth.uid()
      and p.acknowledged_version=r.version and p.seen_at>now()-interval '20 seconds') then
      -- Another participant becoming ready changes the version but not the material.
      -- The preparation token still protects against a late response to old content.
      if not exists(select 1 from dp_private.room_presence p where p.room_id=r.id and p.user_id=auth.uid()
        and p.acknowledged_version>=input_expected_version and p.seen_at>now()-interval '20 seconds') then
        raise exception 'Sync the preparation before getting ready';
      end if;
    end if;
    was_ready:=auth.uid()=any(r.ready_ids);
    if (input_action='ready') is distinct from was_ready then
      r.ready_ids:=case when input_action='ready' then array_append(r.ready_ids,auth.uid()) else array_remove(r.ready_ids,auth.uid()) end;
      update public.practice_rooms set ready_ids=r.ready_ids,version=version+1 where id=r.id returning * into r;
    end if;
  elsif input_action in ('transfer_host','recover_host') then
    if input_expected_version<>r.version then raise exception 'Room changed. Sync and try again.'; end if;
    if input_action='transfer_host' then
      if r.host_id<>auth.uid() then raise exception 'Only the host can transfer hosting'; end if;
      target:=nullif(input_config->>'targetUserId','')::uuid;
      if target is null or target=r.host_id or not target=any(r.member_ids) then raise exception 'Choose another room member'; end if;
    else
      if r.host_id=auth.uid() or not dp_private.room_host_recovery_available(r) then
        raise exception 'The host is still active. Ask them to transfer hosting.';
      end if;
      target:=auth.uid();
    end if;
    if not exists(select 1 from dp_private.room_presence p where p.room_id=r.id and p.user_id=target
      and p.acknowledged_version=r.version and p.seen_at>now()-interval '20 seconds') then
      raise exception 'The new host must be connected and up to date';
    end if;
    update public.practice_rooms set host_id=target,version=version+1 where id=r.id returning * into r;
  else raise exception 'Unknown room management action'; end if;
  insert into dp_private.room_commands(room_id,command_id,user_id,expected_version,action,configuration)
    values(r.id,input_command_id,auth.uid(),input_expected_version,input_action,input_config);
  return dp_private.room_snapshot(r);
end;
$$;
revoke all on function public.manage_practice_room(uuid,uuid,integer,text,jsonb) from public, anon;
grant execute on function public.manage_practice_room(uuid,uuid,integer,text,jsonb) to authenticated;

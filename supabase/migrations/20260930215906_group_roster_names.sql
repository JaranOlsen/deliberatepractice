-- Only room members receive this snapshot; share display names, never emails.
create or replace function dp_private.room_snapshot(r public.practice_rooms) returns jsonb
language sql stable set search_path = pg_catalog as $$
  select to_jsonb(r) || jsonb_build_object('members', coalesce((
    select jsonb_agg(jsonb_build_object('user_id', m.id, 'display_name', p.display_name) order by m.position)
    from unnest(r.member_ids) with ordinality m(id, position)
    left join public.profiles p on p.id = m.id
  ), '[]'::jsonb), 'presence', coalesce((
    select jsonb_object_agg(p.user_id::text, jsonb_build_object(
      'acknowledged_version', p.acknowledged_version,
      'connected', p.seen_at > now() - interval '20 seconds'))
    from dp_private.room_presence p where p.room_id = r.id
  ), '{}'::jsonb));
$$;
revoke all on function dp_private.room_snapshot(public.practice_rooms) from public, anon, authenticated;

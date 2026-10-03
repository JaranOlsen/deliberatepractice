-- Real PostgreSQL RPC/authorization checks; all fixture users, rooms and ratings roll back.
begin;
do $$
declare
  users uuid[]:=array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  rid uuid; r jsonb; before_room jsonb; again jsonb; cfg jsonb; preparation jsonb;
  command uuid; v integer; rejected boolean; person uuid; guide uuid; host uuid; token text;
begin
  insert into auth.users(id,aud,role,email) select id,'authenticated','authenticated',id::text||'@readiness.invalid' from unnest(users) id;
  for people in 2..4 loop
    rid:=gen_random_uuid();
    select jsonb_build_object('hostRole','client','roundSize',12,'preparationProtocol','ready-v1','languageId','en',
      'skillId','empathic-understanding','caseId','case-sara','difficulty','easy','contentRevision','test','statements',
      jsonb_agg(jsonb_build_object('id','item-'||i,'criteriaTags',jsonb_build_array('reflect_feeling')) order by i))
      into cfg from generate_series(1,12) i;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);
    r:=public.create_practice_room(cfg,rid);
    for i in 2..people loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);r:=public.join_practice_room(r->>'code','auto');
    end loop;
    if not (r->>'readiness_required')::boolean or jsonb_array_length(r->'ready_ids')<>0 then raise exception 'New room did not opt into readiness'; end if;
    guide:=coalesce((r->>'observer_id')::uuid,(r->>'therapist_id')::uuid);v:=(r->>'version')::integer;
    for i in 1..people loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',guide::text,true);
    rejected:=false;
    begin perform public.command_practice_room(rid,gen_random_uuid(),v,'start');
    exception when raise_exception then if sqlerrm<>'Waiting for the client and therapist to get ready' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Device acknowledgments alone started a round'; end if;
    -- The observer (or pair therapist) starts rather than confirming readiness twice.
    preparation:=jsonb_build_object('preparationId',r->>'preparation_id');
    rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    exception when raise_exception then rejected:=true;end;
    if not rejected then raise exception 'Guide was allowed redundant readiness'; end if;
    perform set_config('request.jwt.claim.sub',users[5]::text,true);
    rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    exception when raise_exception then if sqlerrm<>'Room unavailable' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Non-member marked readiness'; end if;
    if people=4 then
      perform set_config('request.jwt.claim.sub',users[4]::text,true);
      rejected:=false;
      begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
      exception when raise_exception then rejected:=true;end;
      if not rejected then raise exception 'Watching observer confirmed an active participant readiness'; end if;
    end if;
    -- Client and therapist use the same original version. Both must succeed.
    command:=gen_random_uuid();perform set_config('request.jwt.claim.sub',users[1]::text,true);
    r:=public.manage_practice_room(rid,command,v,'ready',preparation);
    again:=public.manage_practice_room(rid,command,v,'ready',preparation);
    if r->>'version'<>again->>'version' then raise exception 'Ready replay incremented version twice'; end if;
    if people>=3 then
      perform set_config('request.jwt.claim.sub',users[2]::text,true);
      r:=public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    end if;
    if jsonb_array_length(r->'ready_ids')<>(case when people=2 then 1 else 2 end) then raise exception 'Concurrent readiness lost a participant'; end if;
    -- Readiness does not excuse stale screens after either confirmation.
    perform set_config('request.jwt.claim.sub',guide::text,true);rejected:=false;
    begin perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'start');
    exception when raise_exception then if sqlerrm<>'Waiting for the active devices to display this step' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Ready participants bypassed device synchronization'; end if;
    -- Undo readiness; a late replay of an earlier Ready must not undo this newer choice.
    v:=(r->>'version')::integer;perform set_config('request.jwt.claim.sub',users[1]::text,true);perform public.sync_practice_room(rid,v);
    r:=public.manage_practice_room(rid,gen_random_uuid(),v,'not_ready',preparation);
    again:=public.manage_practice_room(rid,command,case when people=2 then v-1 else v-2 end,'ready',preparation);
    if again->'ready_ids' @> jsonb_build_array(users[1]) then raise exception 'Old Ready receipt overwrote a later Not ready'; end if;
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',guide::text,true);rejected:=false;
    begin perform public.command_practice_room(rid,gen_random_uuid(),v,'start');
    exception when raise_exception then if sqlerrm<>'Waiting for the client and therapist to get ready' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Not ready did not block start'; end if;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);
    r:=public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    -- Replacing material must invalidate both readiness and late old-content commands.
    token:=r->>'preparation_id';
    r:=public.prepare_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,cfg||'{"caseId":"case-jason"}'::jsonb);
    if r->>'preparation_id'=token or jsonb_array_length(r->'ready_ids')<>0 then raise exception 'New material retained readiness'; end if;
    rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    exception when raise_exception then if sqlerrm<>'Preparation changed. Read the new material before getting ready.' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Old preparation token marked new material ready'; end if;
    -- A role change also resets preparation, even if material remains the same.
    token:=r->>'preparation_id';perform set_config('request.jwt.claim.sub',users[1]::text,true);
    r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'role_passive');
    if r->>'preparation_id'=token then raise exception 'Role change did not invalidate readiness'; end if;
    rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'ready',jsonb_build_object('preparationId',r->>'preparation_id'));
    exception when raise_exception then rejected:=true;end;
    if not rejected then raise exception 'An unassigned participant marked an empty client seat ready'; end if;
    r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'role_client');
    preparation:=jsonb_build_object('preparationId',r->>'preparation_id');v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    for i in 1..(case when people=2 then 1 else 2 end) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);
      r:=public.manage_practice_room(rid,gen_random_uuid(),v,'ready',preparation);
    end loop;
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    -- Watching observers do not block starting.
    if people=4 then delete from dp_private.room_presence where room_id=rid and user_id=users[4]; end if;
    perform set_config('request.jwt.claim.sub',guide::text,true);
    r:=public.command_practice_room(rid,gen_random_uuid(),v,'start');
    if r->>'phase'<>'practicing' then raise exception 'Prepared complete roles could not start'; end if;
    -- No readiness confirmation is required between items or sets.
    for item in 1..3 loop
      v:=(r->>'version')::integer;
      for i in 1..least(people,3) loop
        perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
      end loop;
      perform set_config('request.jwt.claim.sub',guide::text,true);
      r:=public.command_practice_room(rid,gen_random_uuid(),v,'finish_item');
    end loop;
    r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rate',4);
    before_room:=r;
    -- Hosting transfers during practice/checkpoints without modifying roles or ratings.
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',users[2]::text,true);rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'transfer_host',jsonb_build_object('targetUserId',users[2]));
    exception when raise_exception then if sqlerrm<>'Only the host can transfer hosting' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Non-host transferred hosting'; end if;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'transfer_host',jsonb_build_object('targetUserId',users[5]));
    exception when raise_exception then rejected:=true;end;
    if not rejected then raise exception 'Transferred hosting outside the room'; end if;
    if people=4 then
      rejected:=false;
      begin perform public.manage_practice_room(rid,gen_random_uuid(),v,'transfer_host',jsonb_build_object('targetUserId',users[4]));
      exception when raise_exception then if sqlerrm<>'The new host must be connected and up to date' then raise; end if;rejected:=true;end;
      if not rejected then raise exception 'Transferred hosting to disconnected member'; end if;
    end if;
    command:=gen_random_uuid();preparation:=jsonb_build_object('targetUserId',users[2]);
    r:=public.manage_practice_room(rid,command,v,'transfer_host',preparation);
    again:=public.manage_practice_room(rid,command,v,'transfer_host',preparation);
    if r->>'host_id'<>users[2]::text or r->>'version'<>again->>'version' then raise exception 'Transfer replay failed'; end if;
    if (r-array['host_id','version','presence','host_recovery_available'])<>(before_room-array['host_id','version','presence','host_recovery_available']) then
      raise exception 'Hosting transfer changed practice content, roles or ratings';
    end if;
    rejected:=false;
    begin perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'close');
    exception when raise_exception then rejected:=true;end;
    if not rejected then raise exception 'Former host retained end-room authority'; end if;
    -- No takeover while the host is active, or when a new room has no heartbeat yet.
    rejected:=false;
    begin perform public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'recover_host');
    exception when raise_exception then if sqlerrm<>'The host is still active. Ask them to transfer hosting.' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Active host was replaced'; end if;
    host:=users[2];
    update public.practice_rooms set created_at=now()-interval '10 minutes' where id=rid;
    update dp_private.room_presence set seen_at=now()-interval '6 minutes' where room_id=rid and user_id=host;
    v:=(r->>'version')::integer;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);r:=public.sync_practice_room(rid,v);
    if not (r->>'host_recovery_available')::boolean then raise exception 'Absent-host recovery was not offered'; end if;
    before_room:=r;command:=gen_random_uuid();
    r:=public.manage_practice_room(rid,command,v,'recover_host');
    again:=public.manage_practice_room(rid,command,v,'recover_host');
    if r->>'host_id'<>users[1]::text or r->>'version'<>again->>'version' then raise exception 'Host recovery/replay failed'; end if;
    if (r-array['host_id','version','presence','host_recovery_available'])<>(before_room-array['host_id','version','presence','host_recovery_available']) then raise exception 'Recovery changed active roles or checkpoint'; end if;
    perform set_config('request.jwt.claim.sub',guide::text,true);v:=(r->>'version')::integer;perform public.sync_practice_room(rid,v);
    rejected:=false;
    begin perform public.command_practice_room(rid,gen_random_uuid(),v,'continue_set');
    exception when raise_exception then if sqlerrm<>'Waiting for the active devices to display this step' then raise; end if;rejected:=true;end;
    if not rejected then raise exception 'Recovered host bypassed an offline essential role'; end if;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);
    -- The new host may end the room; existing rating survives.
    r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'close');
    if r->>'phase'<>'closed' or not exists(select 1 from public.practice_ratings where client_round_id=(r->>'rating_round_id')::uuid and score=4) then raise exception 'Ending recovered room lost saved rating'; end if;
  end loop;
  -- Fresh empty opt-in rooms do not offer recovery just because presence is absent.
  rid:=gen_random_uuid();perform set_config('request.jwt.claim.sub',users[1]::text,true);
  r:=public.create_practice_room('{"preparationProtocol":"ready-v1"}',rid);
  perform set_config('request.jwt.claim.sub',users[2]::text,true);r:=public.join_practice_room(r->>'code','auto');
  rejected:=false;
  begin perform public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'recover_host');
  exception when raise_exception then rejected:=true;end;
  if not rejected or (r->>'host_recovery_available')::boolean then raise exception 'Unacknowledged new host was immediately replaced'; end if;
  -- New host can choose material; a former host can only recover an exact committed receipt.
  perform set_config('request.jwt.claim.sub',users[1]::text,true);v:=(r->>'version')::integer;command:=gen_random_uuid();
  r:=public.prepare_practice_room(rid,command,v,cfg);
  for i in 1..2 loop
    perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,(r->>'version')::integer);
  end loop;
  perform set_config('request.jwt.claim.sub',users[1]::text,true);
  r:=public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'transfer_host',jsonb_build_object('targetUserId',users[2]));
  again:=public.prepare_practice_room(rid,command,v,cfg);
  if again->>'host_id'<>users[2]::text or r->>'version'<>again->>'version' then raise exception 'Exact preparation replay failed after host transfer'; end if;
  rejected:=false;
  begin perform public.prepare_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,cfg);
  exception when raise_exception then if sqlerrm<>'Only the host can choose practice' then raise; end if;rejected:=true;end;
  if not rejected then raise exception 'Former host changed the selected material'; end if;
  perform set_config('request.jwt.claim.sub',users[2]::text,true);
  r:=public.prepare_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,cfg||'{"skillId":"empathic-conjectures"}'::jsonb);
  if r->>'skill_id'<>'empathic-conjectures' then raise exception 'New host cannot choose material'; end if;
  perform set_config('request.jwt.claim.sub','',true);rejected:=false;
  begin perform public.manage_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'recover_host');
  exception when raise_exception then if sqlerrm<>'Authentication required' then raise; end if;rejected:=true;end;
  if not rejected then raise exception 'Unauthenticated management allowed'; end if;
  if has_function_privilege('anon','public.manage_practice_room(uuid,uuid,integer,text,jsonb)','execute') then raise exception 'Anonymous management allowed'; end if;
  if not has_function_privilege('authenticated','public.manage_practice_room(uuid,uuid,integer,text,jsonb)','execute') then raise exception 'Authenticated management unavailable'; end if;
  if exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname='dp_private'
    and p.proname in ('guard_room_preparation','room_host_recovery_available','room_snapshot')
    and has_function_privilege('authenticated',p.oid,'execute')) then raise exception 'Internal helpers exposed'; end if;
  if not (select relrowsecurity from pg_class where oid='public.practice_rooms'::regclass) then raise exception 'Room RLS disabled'; end if;
  if has_table_privilege('authenticated','public.practice_rooms','update') then raise exception 'Direct updates bypass room readiness guards'; end if;
  if not exists(select 1 from pg_proc p where p.oid='public.manage_practice_room(uuid,uuid,integer,text,jsonb)'::regprocedure
    and p.prosecdef and 'search_path=pg_catalog'=any(p.proconfig)) then raise exception 'Management RPC lost its fixed search path'; end if;
end;
$$;
rollback;

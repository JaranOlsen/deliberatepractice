-- Observer/therapist control follows roles, independently of the room host.
-- All fixture users, rooms and receipts are rolled back.
begin;
do $$
declare ids uuid[]:=array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  rid uuid:=gen_random_uuid(); pair_id uuid:=gen_random_uuid(); r jsonb; again jsonb; v integer;
  actor uuid; command_id uuid:=gen_random_uuid();
  config jsonb:='{"hostRole":"client","languageId":"en","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","contentRevision":"test","statements":[{"id":"a","criteriaTags":[]},{"id":"b","criteriaTags":[]},{"id":"c","criteriaTags":[]}]}'::jsonb;
begin
  insert into auth.users(id,aud,role,email) select id,'authenticated','authenticated',id::text||'@item-workflow.invalid' from unnest(ids) id;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r:=public.create_practice_room(config,rid);
  for i in 2..4 loop
    perform set_config('request.jwt.claim.sub',ids[i]::text,true);r:=public.join_practice_room(r->>'code','auto');
  end loop;
  v:=(r->>'version')::integer;
  foreach actor in array ids[1:3] loop
    perform set_config('request.jwt.claim.sub',actor::text,true);perform public.sync_practice_room(rid,v);
  end loop;
  foreach actor in array array[ids[1],ids[2],ids[4]] loop
    perform set_config('request.jwt.claim.sub',actor::text,true);
    begin
      perform public.command_practice_room(rid,gen_random_uuid(),v,'start');
      raise exception 'TEST FAILURE: Host/client/therapist/watcher overrode observer';
    exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  end loop;
  perform set_config('request.jwt.claim.sub',ids[3]::text,true);
  r:=public.command_practice_room(rid,gen_random_uuid(),v,'start');
  if r->>'phase'<>'practicing' then raise exception 'Whole-item practice did not start'; end if;
  begin
    perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'close');
    raise exception 'TEST FAILURE: Observer ended another host room';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  begin
    perform public.command_practice_room(rid,command_id,(r->>'version')::integer,'finish_item');
    raise exception 'TEST FAILURE: Item finished before fresh acknowledgements';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  v:=(r->>'version')::integer;
  foreach actor in array ids[1:3] loop
    perform set_config('request.jwt.claim.sub',actor::text,true);perform public.sync_practice_room(rid,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[3]::text,true);
  begin
    perform public.command_practice_room(rid,gen_random_uuid(),v,'advance');
    raise exception 'TEST FAILURE: New items still allow clicking through substeps';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  r:=public.command_practice_room(rid,command_id,v,'finish_item');
  again:=public.command_practice_room(rid,command_id,v,'finish_item');
  if r->>'version'<>again->>'version' or (r->>'item_index')::integer<>1
    or jsonb_array_length(r->'completed_ids')<>1 then raise exception 'Item finish/replay advanced twice'; end if;
  for i in 1..3 loop
    v:=(r->>'version')::integer;
    foreach actor in array ids[1:3] loop
      perform set_config('request.jwt.claim.sub',actor::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',ids[3]::text,true);
    r:=public.command_practice_room(rid,gen_random_uuid(),v,case when i<3 then 'pass' else 'rotate' end);
  end loop;
  if r->>'host_id'<>ids[1]::text or r->>'observer_id'<>ids[1]::text then raise exception 'Host/observer rotation failed'; end if;
  perform set_config('request.jwt.claim.sub',ids[3]::text,true);
  begin
    perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'start');
    raise exception 'TEST FAILURE: Previous observer retained control';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  -- In a pair the therapist guides even when the other person hosts.
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);r:=public.create_practice_room(config,pair_id);
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);r:=public.join_practice_room(r->>'code','auto');
  v:=(r->>'version')::integer;
  foreach actor in array ids[1:2] loop
    perform set_config('request.jwt.claim.sub',actor::text,true);perform public.sync_practice_room(pair_id,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  begin
    perform public.command_practice_room(pair_id,gen_random_uuid(),v,'start');
    raise exception 'TEST FAILURE: Client host controlled pair practice';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);r:=public.command_practice_room(pair_id,gen_random_uuid(),v,'start');
  -- An existing pre-upgrade feedback phase can finish as one item without restarting it.
  update public.practice_rooms set phase='client_feedback' where id=pair_id;
  v:=(r->>'version')::integer;
  foreach actor in array ids[1:2] loop
    perform set_config('request.jwt.claim.sub',actor::text,true);perform public.sync_practice_room(pair_id,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);r:=public.command_practice_room(pair_id,gen_random_uuid(),v,'finish_item');
  if r->>'phase'<>'practicing' or (r->>'item_index')::integer<>1 then raise exception 'Legacy phase could not finish into next item'; end if;
end;
$$;
rollback;

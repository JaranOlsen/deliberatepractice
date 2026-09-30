-- Every fixture is rolled back. No emails or persistent test users/ratings.
begin;
do $$
declare ids uuid[]:=array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  room_id uuid:=gen_random_uuid(); empty_id uuid:=gen_random_uuid(); r jsonb; again jsonb;
  command_id uuid:=gen_random_uuid(); leave_id uuid:=gen_random_uuid(); v integer; participant uuid;
  config jsonb:='{"languageId":"no","skillId":"empathic-understanding","caseId":"case-sara","difficulty":"easy","contentRevision":"test","statements":[{"id":"a","criteriaTags":[]},{"id":"b","criteriaTags":[]},{"id":"c","criteriaTags":[]}]}'::jsonb;
begin
  insert into auth.users(id,aud,role,email) select id,'authenticated','authenticated',id::text||'@room-lifecycle.invalid' from unnest(ids) id;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r:=public.create_practice_room('{"languageId":"en"}',room_id);
  if r->>'phase'<>'choosing' or r->>'skill_id' is not null or jsonb_array_length(r->'statement_ids')<>0 then raise exception 'Empty room is not joinable preparation'; end if;
  again:=public.create_practice_room('{}',room_id);
  if again->>'id'<>r->>'id' then raise exception 'Empty creation replay failed'; end if;
  for i in 2..4 loop
    perform set_config('request.jwt.claim.sub',ids[i]::text,true);r:=public.join_practice_room(r->>'code','auto');
  end loop;
  if r->>'client_id'<>ids[2]::text or r->>'observer_id'<>ids[3]::text or jsonb_array_length(r->'member_ids')<>4 then raise exception 'Joining before selection assigned wrong roles'; end if;
  begin
    perform public.prepare_practice_room(room_id,command_id,(r->>'version')::integer,config);
    raise exception 'TEST FAILURE: Non-host changed practice';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  v:=(r->>'version')::integer;
  foreach participant in array ids[1:3] loop
    perform set_config('request.jwt.claim.sub',participant::text,true);perform public.sync_practice_room(room_id,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  begin
    perform public.command_practice_room(room_id,gen_random_uuid(),v,'start');
    raise exception 'TEST FAILURE: Empty room started';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  r:=public.prepare_practice_room(room_id,command_id,v,config);
  again:=public.prepare_practice_room(room_id,command_id,v,config);
  if r->>'version'<>again->>'version' or r->>'phase'<>'lobby' or r->>'language_id'<>'no'
    or jsonb_array_length(r->'member_ids')<>4 then raise exception 'Preparation/replay changed roster or version incorrectly'; end if;
  begin
    perform public.prepare_practice_room(room_id,command_id,v,config||'{"languageId":"en"}'::jsonb);
    raise exception 'TEST FAILURE: Preparation receipt retargeted';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  begin
    perform public.command_practice_room(room_id,gen_random_uuid(),(r->>'version')::integer,'start');
    raise exception 'TEST FAILURE: Old acknowledgements started new content';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  v:=(r->>'version')::integer;
  foreach participant in array ids[1:3] loop
    perform set_config('request.jwt.claim.sub',participant::text,true);perform public.sync_practice_room(room_id,v);
  end loop;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r:=public.command_practice_room(room_id,gen_random_uuid(),v,'start');
  begin
    perform public.prepare_practice_room(room_id,gen_random_uuid(),(r->>'version')::integer,config);
    raise exception 'TEST FAILURE: Host replaced an active round';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub',ids[4]::text,true);v:=(r->>'version')::integer;
  again:=public.command_practice_room(room_id,leave_id,v,'leave');
  if not (again->>'left')::boolean then raise exception 'Watching observer did not leave'; end if;
  again:=public.command_practice_room(room_id,leave_id,v,'leave');
  if not (again->>'left')::boolean then raise exception 'Leave response cannot be recovered after membership removal'; end if;
  begin
    perform public.sync_practice_room(room_id,-1);
    raise exception 'TEST FAILURE: Departed participant still reads room';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  execute 'set local role authenticated';
  if exists(select 1 from public.practice_rooms where id=room_id) then raise exception 'Departed participant bypassed RLS'; end if;
  execute 'reset role';
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);r:=public.sync_practice_room(room_id,-1);
  if r->>'phase'<>'first_attempt' then raise exception 'Watching departure interrupted an active round'; end if;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);
  again:=public.command_practice_room(room_id,gen_random_uuid(),(r->>'version')::integer,'leave');
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);r:=public.sync_practice_room(room_id,-1);
  if r->>'phase'<>'lobby' or r->>'client_id' is not null or not (r->>'round_interrupted')::boolean
    or jsonb_array_length(r->'completed_ids')<>0 then raise exception 'Active departure did not safely reset preparation'; end if;
  begin
    perform public.command_practice_room(room_id,gen_random_uuid(),(r->>'version')::integer,'leave');
    raise exception 'TEST FAILURE: Host abandoned room';
  exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
  perform set_config('request.jwt.claim.sub',ids[2]::text,true);r:=public.join_practice_room(r->>'code','auto');
  if r->>'client_id'<>ids[2]::text then raise exception 'Departed member cannot rejoin'; end if;
  perform set_config('request.jwt.claim.sub',ids[1]::text,true);
  r:=public.command_practice_room(room_id,gen_random_uuid(),(r->>'version')::integer,'close');
  if r->>'phase'<>'closed' then raise exception 'Configured room cannot end'; end if;
  r:=public.create_practice_room('{}',empty_id);
  r:=public.command_practice_room(empty_id,gen_random_uuid(),(r->>'version')::integer,'close');
  if r->>'phase'<>'closed' then raise exception 'Empty room cannot end'; end if;
  if has_function_privilege('anon','public.prepare_practice_room(uuid,uuid,integer,jsonb)','execute') then raise exception 'Anonymous preparation allowed'; end if;
end;
$$;
rollback;

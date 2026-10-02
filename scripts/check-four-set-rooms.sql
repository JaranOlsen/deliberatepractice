-- Exercises the real RPCs and rating rows. All fixture data rolls back.
begin;
do $$
declare
  users uuid[]:=array[gen_random_uuid(),gen_random_uuid(),gen_random_uuid(),gen_random_uuid()];
  actor uuid; rid uuid; r jsonb; again jsonb; config jsonb; command uuid; v integer;
  old_therapist text; old_client text; old_observer text; full_round text;
  rating_id uuid; set_rating_ids uuid[]:='{}'; rows_count integer; fixture_ids text[];
begin
  insert into auth.users(id,aud,role,email) select id,'authenticated','authenticated',id::text||'@four-sets.invalid' from unnest(users) id;
  -- Pair self-assessment and observer ratings obey the same four-set boundaries.
  for people in 2..4 loop
    rid:=gen_random_uuid();set_rating_ids:='{}';
    select jsonb_build_object('hostRole','client','roundSize',12,'languageId','en','skillId','empathic-understanding',
      'caseId','case-sara','difficulty','easy','contentRevision','test','statements',
      jsonb_agg(jsonb_build_object('id','item-'||i,'criteriaTags',jsonb_build_array('reflect_feeling')) order by i))
      into config from generate_series(1,12) i;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);
    r:=public.create_practice_room(config,rid);
    for i in 2..people loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);
      r:=public.join_practice_room(r->>'code','auto');
    end loop;
    old_therapist:=r->>'therapist_id';old_client:=r->>'client_id';old_observer:=r->>'observer_id';full_round:=r->>'round_id';
    actor:=coalesce((r->>'observer_id')::uuid,(r->>'therapist_id')::uuid);
    if jsonb_array_length(r->'statement_ids')<>12 then raise exception 'Expected twelve unique items'; end if;
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',actor::text,true);
    r:=public.command_practice_room(rid,gen_random_uuid(),v,'start');
    begin
      perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'role_passive');
      raise exception 'TEST FAILURE: Active role changed during a twelve-item round';
    exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
    for block in 1..4 loop
      for item in 1..3 loop
        v:=(r->>'version')::integer;
        for i in 1..least(people,3) loop
          perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
        end loop;
        perform set_config('request.jwt.claim.sub',actor::text,true);
        command:=gen_random_uuid();
        r:=public.command_practice_room(rid,command,v,case when block=2 and item=2 then 'pass' else 'finish_item' end);
        again:=public.command_practice_room(rid,command,v,case when block=2 and item=2 then 'pass' else 'finish_item' end);
        if r->>'version'<>again->>'version' then raise exception 'Resolution replay advanced twice'; end if;
        if r->>'therapist_id'<>old_therapist or r->>'client_id'<>old_client or r->>'observer_id' is distinct from old_observer
          or r->>'round_id'<>full_round then raise exception 'Identity changed within complete round'; end if;
        if (item=3)<>(r->>'phase'='round_debrief') then raise exception 'Wrong rating boundary'; end if;
      end loop;
      begin
        perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rotate');
        raise exception 'TEST FAILURE: Roles rotated after only one set';
      exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
      perform set_config('request.jwt.claim.sub',users[1]::text,true);
      begin
        perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rate',4);
        raise exception 'TEST FAILURE: Client host saved therapist rating';
      exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
      perform set_config('request.jwt.claim.sub',actor::text,true);
      v:=(r->>'version')::integer;command:=gen_random_uuid();
      r:=public.command_practice_room(rid,command,v,'rate',3);
      again:=public.command_practice_room(rid,command,v,'rate',3);
      r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rate',4);
      rating_id:=(r->>'rating_round_id')::uuid;set_rating_ids:=array_append(set_rating_ids,rating_id);
      select count(*) into rows_count from public.practice_ratings where created_by_user_id=actor and client_round_id=rating_id
        and therapist_user_id=old_therapist::uuid and score=4 and item_count=case when block=2 then 2 else 3 end
        and source=case when people=2 then 'self' else 'observer' end;
      if rows_count<>1 then raise exception 'Rating replay/update/count/source failed'; end if;
      select array_agg('item-'||i order by i) into fixture_ids from generate_series((block-1)*3+1,block*3) i
        where not(block=2 and i=5);
      if not exists(select 1 from public.practice_ratings where client_round_id=rating_id and completed_statement_ids=fixture_ids)
        then raise exception 'Rating contains items outside its set'; end if;
      v:=(r->>'version')::integer;
      for i in 1..least(people,3) loop
        perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
      end loop;
      perform set_config('request.jwt.claim.sub',actor::text,true);
      if block<4 then
        begin
          perform public.command_practice_room(rid,gen_random_uuid(),v,'prepare_next');
          raise exception 'TEST FAILURE: Next round selected before twelve items';
        exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
      end if;
      command:=gen_random_uuid();
      r:=public.command_practice_room(rid,command,v,case when block=4 then 'prepare_next' else 'continue_set' end);
      again:=public.command_practice_room(rid,command,v,case when block=4 then 'prepare_next' else 'continue_set' end);
      if r->>'version'<>again->>'version' then raise exception 'Continuation replay advanced twice'; end if;
    end loop;
    select count(*) into rows_count from public.practice_ratings where created_by_user_id=actor and client_round_id=any(set_rating_ids);
    if rows_count<>4 then raise exception 'Expected four distinct ratings'; end if;
    if r->>'phase'<>'choosing' or r->>'skill_id' is not null or r->>'case_id' is not null
      or r->>'therapist_id' is not null or r->>'client_id' is not null or r->>'observer_id' is not null
      or jsonb_array_length(r->'member_ids')<>people or r->>'host_id'<>users[1]::text
      then raise exception 'Next-round selection did not reset roles/content while retaining membership/host'; end if;
    -- Choose again in the same room, and pass an entire set without fabricating a rating.
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);
      r:=public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,
        case i when 1 then 'role_therapist' when 2 then 'role_client' else 'role_observer' end);
    end loop;
    perform set_config('request.jwt.claim.sub',users[1]::text,true);
    config:=config||jsonb_build_object('skillId','empathic-conjectures','caseId','case-jason');
    r:=public.prepare_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,config);
    if r->>'therapist_id'<>users[1]::text or r->>'skill_id'<>'empathic-conjectures' or r->>'case_id'<>'case-jason'
      then raise exception 'Fresh roles/skill/case were not retained'; end if;
    actor:=coalesce((r->>'observer_id')::uuid,(r->>'therapist_id')::uuid);
    for step in 0..3 loop
      v:=(r->>'version')::integer;
      for i in 1..least(people,3) loop
        perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
      end loop;
      perform set_config('request.jwt.claim.sub',actor::text,true);
      r:=public.command_practice_room(rid,gen_random_uuid(),v,case when step=0 then 'start' else 'pass' end);
    end loop;
    begin
      perform public.command_practice_room(rid,gen_random_uuid(),(r->>'version')::integer,'rate',4);
      raise exception 'TEST FAILURE: All-passed set received a rating';
    exception when raise_exception then if sqlerrm like 'TEST FAILURE:%' then raise; end if; end;
    v:=(r->>'version')::integer;
    for i in 1..least(people,3) loop
      perform set_config('request.jwt.claim.sub',users[i]::text,true);perform public.sync_practice_room(rid,v);
    end loop;
    perform set_config('request.jwt.claim.sub',actor::text,true);
    r:=public.command_practice_room(rid,gen_random_uuid(),v,'continue_set');
    if (r->>'item_index')::integer<>3 or r->>'phase'<>'practicing' or r->>'saved_score' is not null
      then raise exception 'All-passed set could not continue without a rating'; end if;
  end loop;
end;
$$;
rollback;

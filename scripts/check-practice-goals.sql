-- Test actual RLS/grants as authenticated/anon. All data rolls back.
begin;
do $$
declare owner_id uuid:=gen_random_uuid(); observer_id uuid:=gen_random_uuid();
begin
  insert into auth.users(id,aud,role,email) values(owner_id,'authenticated','authenticated',owner_id::text||'@goal-test.invalid'),
    (observer_id,'authenticated','authenticated',observer_id::text||'@goal-test.invalid');
  perform set_config('dp_test.goal_owner',owner_id::text,true);
  perform set_config('dp_test.goal_observer',observer_id::text,true);
end; $$;
set local role authenticated;
do $$
declare owner_id uuid:=current_setting('dp_test.goal_owner')::uuid; observer_id uuid:=current_setting('dp_test.goal_observer')::uuid; rejected boolean; n integer; invalid_text text;
begin
  perform set_config('request.jwt.claim.sub',owner_id::text,true);
  insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'en','empathic-understanding','Pause before responding.');
  if (select goal_text from public.practice_goals where user_id=owner_id)<>'Pause before responding.' then raise exception 'Owner cannot read reminder';end if;
  insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'no','empathic-understanding','Ta en pause.');
  update public.practice_goals set goal_text='Reflect the feeling first.',updated_at='2000-01-01' where user_id=owner_id and language_id='en';
  if (select goal_text from public.practice_goals where user_id=owner_id and language_id='no')<>'Ta en pause.' then raise exception 'Languages overwrite one another';end if;
  if (select updated_at from public.practice_goals where user_id=owner_id and language_id='en')<'2026-01-01' then raise exception 'Client can forge update timestamp';end if;
  rejected:=false;
  begin update public.practice_goals set user_id=observer_id where user_id=owner_id;
  exception when insufficient_privilege then rejected:=true;end;
  if not rejected then raise exception 'Owner can reassign a private reminder';end if;
  for invalid_text in select unnest(array['',' x ','x'||repeat('x',160)]) loop
    rejected:=false;
    begin update public.practice_goals set goal_text=invalid_text where user_id=owner_id and language_id='en';
    exception when check_violation then rejected:=true;end;
    if not rejected then raise exception 'Invalid reminder accepted';end if;
  end loop;
  rejected:=false;
  begin insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'xx','alliance-repair','Pause');
  exception when check_violation then rejected:=true;end;
  if not rejected then raise exception 'Unknown language accepted';end if;
  rejected:=false;
  begin insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'en','unknown','Pause');
  exception when check_violation then rejected:=true;end;
  if not rejected then raise exception 'Unknown skill accepted';end if;
  perform set_config('request.jwt.claim.sub',observer_id::text,true);
  if exists(select 1 from public.practice_goals where user_id=owner_id) then raise exception 'Other account can read reminder';end if;
  update public.practice_goals set goal_text='Overwrite' where user_id=owner_id;get diagnostics n=row_count;
  if n<>0 then raise exception 'Other account can update reminder';end if;
  delete from public.practice_goals where user_id=owner_id;get diagnostics n=row_count;
  if n<>0 then raise exception 'Other account can delete reminder';end if;
  rejected:=false;
  begin insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'en','alliance-repair','Forged');
  exception when insufficient_privilege then rejected:=true;end;
  if not rejected then raise exception 'Other account can create owner reminder';end if;
  -- Even with an existing row, ON CONFLICT cannot update another person's note.
  rejected:=false;
  begin insert into public.practice_goals(user_id,language_id,skill_id,goal_text) values(owner_id,'en','empathic-understanding','Forged')
    on conflict(user_id,language_id,skill_id) do update set goal_text=excluded.goal_text;
  exception when insufficient_privilege then rejected:=true;end;
  if not rejected then raise exception 'Upsert bypasses owner privacy';end if;
  perform set_config('request.jwt.claim.sub',owner_id::text,true);
  delete from public.practice_goals where language_id='en';
  if exists(select 1 from public.practice_goals where language_id='en') then raise exception 'Owner cannot remove reminder';end if;
  if not exists(select 1 from public.practice_goals where language_id='no') then raise exception 'Removal also deletes another scope';end if;
  perform set_config('request.jwt.claim.sub','',true);
  if exists(select 1 from public.practice_goals) then raise exception 'Missing user can read goals';end if;
end; $$;
set local role anon;
do $$begin
  if has_table_privilege('anon','public.practice_goals','select,insert,update,delete') then raise exception 'Anonymous goal privileges';end if;
end; $$;
reset role;
do $$begin
  if has_function_privilege('authenticated','dp_private.stamp_practice_goal()','execute') then raise exception 'Private timestamp helper exposed';end if;
end; $$;
rollback;

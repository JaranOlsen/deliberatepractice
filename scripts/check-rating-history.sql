-- Isolated transaction: new metadata preserves existing rating authorization and retries.
begin;
do $$
declare actor uuid:=gen_random_uuid(); other_user uuid:=gen_random_uuid(); parent uuid:=gen_random_uuid(); retry_id uuid:=gen_random_uuid(); saved record; replay record; rejected boolean;
begin
  insert into auth.users(id,email) values(actor,actor::text||'@history-test.invalid'),(other_user,other_user::text||'@history-test.invalid');
  perform set_config('request.jwt.claim.sub',actor::text,true);
  select * into saved from public.record_practice_rating_with_history(actor,'self','en','empathic-understanding','case-sara',null,null,'easy',4,
    '{}','test','series',array['a','b','c'],3,retry_id,'triad','group-skill-v2',parent,1);
  select * into replay from public.record_practice_rating_with_history(actor,'self','en','empathic-understanding','case-sara',null,null,'easy',4,
    '{}','test','series',array['a','b','c'],3,retry_id,'triad','group-skill-v2',parent,1);
  if saved.id<>replay.id or (select count(*) from public.practice_ratings where client_round_id=retry_id)<>1 then raise exception 'Retry duplicated rating';end if;
  if not exists(select 1 from public.practice_ratings where id=saved.id and parent_round_id=parent and set_number=1) then raise exception 'Missing round metadata';end if;
  rejected:=false;
  begin perform public.record_practice_rating_with_history(actor,'self','en','empathic-understanding','case-sara',null,null,'easy',2,
    '{}','test','series',array['a','b','c'],3,retry_id,'triad','group-skill-v2',parent,2);
  exception when raise_exception then rejected:=true;end;
  if not rejected or (select score from public.practice_ratings where id=saved.id)<>4 then raise exception 'Retry changed round membership or score';end if;
  rejected:=false;
  begin perform public.record_practice_rating_with_history(other_user,'observer','en','empathic-understanding','case-sara',null,null,'easy',4,
    '{}','test','series',array['a'],1,gen_random_uuid(),'triad','group-skill-v2',parent,1);
  exception when raise_exception then rejected:=true;end;
  if not rejected then raise exception 'Metadata RPC bypassed observer authorization';end if;
  -- Legacy clients still save normally, without fabricating round membership.
  perform public.record_practice_rating(actor,'self','en','empathic-understanding','case-sara',null,null,'easy',3,
    '{}','test','series',array['a'],1,gen_random_uuid(),'individual','group-skill-v2');
  if exists(select 1 from public.practice_ratings where created_by_user_id=actor and practice_mode='individual' and parent_round_id is not null) then raise exception 'Legacy round membership inferred';end if;
  if has_function_privilege('anon','public.record_practice_rating_with_history(uuid,text,text,text,text,text,integer,text,integer,text[],text,text,text[],integer,uuid,text,text,uuid,integer)','execute') then raise exception 'Anonymous history writes allowed';end if;
  if not has_function_privilege('authenticated','public.record_practice_rating_with_history(uuid,text,text,text,text,text,integer,text,integer,text[],text,text,text[],integer,uuid,text,text,uuid,integer)','execute') then raise exception 'Authenticated history writes unavailable';end if;
end; $$;
rollback;

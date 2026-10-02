-- Transactional fixtures only: no emails or persistent users/ratings.
begin;
create temporary table rating_scale_test_ids as
  select gen_random_uuid() as therapist, gen_random_uuid() as observer, gen_random_uuid() as stranger;
insert into auth.users(id, aud, role, email)
select u, 'authenticated', 'authenticated', u::text || '@rating-scale-test.invalid'
from rating_scale_test_ids t cross join lateral unnest(array[t.therapist,t.observer,t.stranger]) u;
insert into public.practice_partnerships(therapist_user_id,observer_user_id)
select therapist,observer from rating_scale_test_ids;
grant select on rating_scale_test_ids to authenticated;
set local role authenticated;
do $$
declare t record; saved record; round_id uuid := gen_random_uuid(); old_scale text;
begin
  select * into t from rating_scale_test_ids;
  perform set_config('request.jwt.claim.sub', t.therapist::text, true);
  select * into saved from public.record_practice_rating(
    input_therapist_user_id=>t.therapist, input_source=>'self', input_language_id=>'en',
    input_skill_id=>'empathic-understanding', input_case_id=>'case-sara', input_statement_id=>null,
    input_statement_index=>null, input_difficulty=>'easy', input_score=>4,
    input_rating_scope=>'series', input_completed_statement_ids=>array['test-1'], input_item_count=>1,
    input_client_round_id=>round_id, input_practice_mode=>'individual');
  perform public.record_practice_rating(
    input_therapist_user_id=>t.therapist, input_source=>'self', input_language_id=>'en',
    input_skill_id=>'empathic-understanding', input_case_id=>'case-sara', input_statement_id=>null,
    input_statement_index=>null, input_difficulty=>'easy', input_score=>5,
    input_rating_scope=>'series', input_completed_statement_ids=>array['test-1'], input_item_count=>1,
    input_client_round_id=>round_id, input_practice_mode=>'individual');
  if (select count(*) from public.practice_ratings where client_round_id=round_id)<>1
    or not exists(select 1 from public.practice_ratings where id=saved.id and score=5 and rating_rubric='group-skill-v2') then
    raise exception 'Current-scale individual self-rating replay failed';
  end if;
  foreach old_scale in array array['individual-mastery-v1','group-consistency-v1',null] loop
    begin
      perform public.record_practice_rating(
        input_therapist_user_id=>t.therapist, input_source=>'self', input_language_id=>'en',
        input_skill_id=>'empathic-understanding', input_case_id=>'case-sara', input_statement_id=>'test-2',
        input_statement_index=>1, input_difficulty=>'easy', input_score=>4,
        input_practice_mode=>'individual',input_rating_rubric=>old_scale);
      raise exception 'TEST FAILURE: Obsolete or unspecified scale accepted';
    exception when raise_exception then
      if sqlerrm<>'This rating scale is no longer supported. Refresh the app.' then raise; end if;
    end;
  end loop;
  perform set_config('request.jwt.claim.sub', t.observer::text, true);
  perform public.record_practice_rating(
    input_therapist_user_id=>t.therapist, input_source=>'observer', input_language_id=>'en',
    input_skill_id=>'empathic-understanding', input_case_id=>'case-sara', input_statement_id=>'test-3',
    input_statement_index=>2, input_difficulty=>'easy', input_score=>3,input_practice_mode=>'triad');
  perform set_config('request.jwt.claim.sub', t.therapist::text, true);
  if (select count(*) from public.practice_ratings where therapist_user_id=t.therapist and rating_rubric='group-skill-v2')<>2 then
    raise exception 'Therapist cannot read both current-scale self and observer ratings';
  end if;
  perform set_config('request.jwt.claim.sub', t.stranger::text, true);
  if exists(select 1 from public.practice_ratings where therapist_user_id=t.therapist) then
    raise exception 'Unrelated account can read ratings';
  end if;
  begin
    perform public.record_practice_rating(
      input_therapist_user_id=>t.therapist, input_source=>'observer', input_language_id=>'en',
      input_skill_id=>'empathic-understanding', input_case_id=>'case-sara', input_statement_id=>'test-4',
      input_statement_index=>3, input_difficulty=>'easy', input_score=>3,input_practice_mode=>'triad');
    raise exception 'TEST FAILURE: Unauthorized observer rating accepted';
  exception when raise_exception then
    if sqlerrm<>'Accepted pairing is required for observer ratings' then raise; end if;
  end;
end;
$$;
reset role;
do $$
declare t record; old_scale text;
begin
  select * into t from rating_scale_test_ids;
  foreach old_scale in array array['individual-mastery-v1','group-consistency-v1'] loop
    begin
      insert into public.practice_ratings(therapist_user_id,created_by_user_id,source,language_id,
        skill_id,case_id,score,practice_mode,rating_rubric)
      values(t.therapist,t.therapist,'self','en','test','test',3,'individual',old_scale);
      raise exception 'TEST FAILURE: Direct obsolete-scale insert accepted';
    exception when check_violation then null; end;
  end loop;
  begin
    insert into public.practice_ratings(therapist_user_id,created_by_user_id,source,language_id,
      skill_id,case_id,score,practice_mode,rating_rubric)
    values(t.therapist,t.therapist,'self','en','test','test',3,'individual',null);
    raise exception 'TEST FAILURE: Unspecified scale accepted';
  exception when not_null_violation then null; end;
end;
$$;
select 'single rating scale checks passed' as result;
rollback;

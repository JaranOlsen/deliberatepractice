create extension if not exists pg_cron;
select cron.schedule('ai-practice-cache-cleanup','*/5 * * * *',
  $job$delete from public.ai_attempt_cache where expires_at <= now();
  delete from public.ai_call_usage where bucket < now()-interval '3 days';
  delete from cron.job_run_details where jobid=(select jobid from cron.job where jobname='ai-practice-cache-cleanup') and end_time<now()-interval '7 days';$job$);

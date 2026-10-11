-- Promotional credits are auditable grants, not fictitious Stripe purchases.
alter table public.ai_credit_lots drop constraint ai_credit_lots_kind_check;
alter table public.ai_credit_lots add constraint ai_credit_lots_kind_check check(kind in ('included','purchased','gift'));
create table public.ai_credit_promos(
 id uuid primary key default gen_random_uuid(),code_hash bytea not null unique,code_hint text not null,
 label text not null default '' check(length(label)<=80),credits integer not null check(credits between 1 and 3600),
 max_uses integer not null check(max_uses between 1 and 1000),uses integer not null default 0 check(uses>=0 and uses<=max_uses),
 expires_at timestamptz not null,enabled boolean not null default true,recipient_email text,
 created_by uuid not null references auth.users(id),created_at timestamptz not null default now()
);
create table public.ai_credit_promo_redemptions(
 promo_id uuid not null references public.ai_credit_promos(id),user_id uuid not null references auth.users(id) on delete cascade,
 lot_id uuid not null references public.ai_credit_lots(id),created_at timestamptz not null default now(),primary key(promo_id,user_id)
);
create index ai_credit_promo_redemption_owner on public.ai_credit_promo_redemptions(user_id);
create table public.ai_credit_promo_attempts(user_id uuid not null references auth.users(id) on delete cascade,created_at timestamptz not null default now());
create index ai_credit_promo_attempt_owner_time on public.ai_credit_promo_attempts(user_id,created_at);
-- AI access alone never authorizes issuing credits or viewing recipients.
create table public.promotion_admin_access(user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.promotion_admin_access enable row level security;
revoke all on public.promotion_admin_access from public,anon,authenticated;
grant all on public.promotion_admin_access to service_role;
alter table public.ai_credit_promos enable row level security;
alter table public.ai_credit_promo_redemptions enable row level security;
alter table public.ai_credit_promo_attempts enable row level security;
revoke all on public.ai_credit_promos,public.ai_credit_promo_redemptions,public.ai_credit_promo_attempts from public,anon,authenticated;
grant all on public.ai_credit_promos,public.ai_credit_promo_redemptions,public.ai_credit_promo_attempts to service_role;

create function public.create_ai_credit_promo(input_admin uuid,input_code text,input_label text,input_credits integer,input_max_uses integer,input_expires timestamptz,input_email text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare p public.ai_credit_promos;code text:=upper(trim(input_code));
begin
 if not exists(select 1 from public.promotion_admin_access where user_id=input_admin) then raise exception 'admin_required';end if;
 if code !~ '^[A-Z0-9-]{8,40}$' or input_expires<=now() or input_expires>now()+interval '366 days'
  or input_credits is null or input_max_uses is null or input_expires is null or input_code is null
  or input_email is not null and (length(input_email)>254 or input_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$') then raise exception 'invalid_promo';end if;
 insert into public.ai_credit_promos(code_hash,code_hint,label,credits,max_uses,expires_at,recipient_email,created_by)
 values(extensions.digest(code,'sha256'),'…'||right(code,4),coalesce(input_label,''),input_credits,input_max_uses,input_expires,lower(trim(input_email)),input_admin) returning * into p;
 return to_jsonb(p)-'code_hash';
end;
$$;
create function public.redeem_ai_credit_promo(input_user uuid,input_email text,input_code text) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare p public.ai_credit_promos;lot uuid;code text:=upper(trim(input_code));
begin
 if input_user is null or input_email is null or not (select ai_credits_enabled from public.app_public_config) then return jsonb_build_object('state','unavailable');end if;
 perform pg_advisory_xact_lock(hashtextextended('ai-promo:'||input_user::text,0));
 if (select count(*) from public.ai_credit_promo_attempts where user_id=input_user and created_at>now()-interval '1 hour')>=10 then return jsonb_build_object('state','limited');end if;
 insert into public.ai_credit_promo_attempts(user_id) values(input_user);
 if code is null or code !~ '^[A-Z0-9-]{8,40}$' then return jsonb_build_object('state','unavailable');end if;
 -- Row locking serializes the last redemption across different accounts.
 select * into p from public.ai_credit_promos where code_hash=extensions.digest(code,'sha256') for update;
 if not found then return jsonb_build_object('state','unavailable');end if;
 if exists(select 1 from public.ai_credit_promo_redemptions where promo_id=p.id and user_id=input_user) then return jsonb_build_object('state','already','credits',p.credits);end if;
 if not p.enabled or p.expires_at<=now() or p.uses>=p.max_uses or p.recipient_email is not null and p.recipient_email<>lower(trim(input_email)) then return jsonb_build_object('state','unavailable');end if;
 insert into public.ai_credit_lots(user_id,source_key,kind,livemode,credits,remaining)
 values(input_user,'promo:'||p.id::text||':'||input_user::text,'gift',true,p.credits,p.credits) returning id into lot;
 insert into public.ai_credit_promo_redemptions(promo_id,user_id,lot_id) values(p.id,input_user,lot);
 update public.ai_credit_promos set uses=uses+1 where id=p.id;
 return jsonb_build_object('state','added','credits',p.credits);
end;
$$;
revoke all on function public.create_ai_credit_promo(uuid,text,text,integer,integer,timestamptz,text),public.redeem_ai_credit_promo(uuid,text,text) from public,anon,authenticated;
grant execute on function public.create_ai_credit_promo(uuid,text,text,integer,integer,timestamptz,text),public.redeem_ai_credit_promo(uuid,text,text) to service_role;

create or replace function dp_private.ai_credit_lot_available(l public.ai_credit_lots) returns boolean
language sql stable security invoker set search_path=pg_catalog as $$
 select l.valid_from<=now() and (l.expires_at is null or l.expires_at>now()) and not l.dispute_hold
 and (l.livemode or (select billing_mode='test' from public.app_public_config))
 and (l.kind in ('purchased','gift') or exists(select 1 from public.billing_subscriptions s where s.subscription_id=l.subscription_id
   and s.status in ('active','past_due') and s.paid_through>now() and s.access_hold=''));
$$;
create or replace function dp_private.ai_credit_eligible(uid uuid) returns boolean
language sql stable security invoker set search_path=pg_catalog as $$
 select exists(select 1 from public.ai_admin_access where user_id=uid) or
 ((select ai_credits_enabled from public.app_public_config) and (
 exists(select 1 from public.billing_subscriptions where user_id=uid and livemode and status in ('active','past_due') and paid_through>now() and access_hold='')
 or exists(select 1 from public.ai_credit_lots l where l.user_id=uid and l.kind in ('purchased','gift') and dp_private.ai_credit_lot_available(l) and l.credits>l.refunded_credits)));
$$;
create or replace function public.get_ai_credit_balance(input_user uuid) returns jsonb
language plpgsql security invoker set search_path=pg_catalog as $$
declare included integer;purchased integer;gift integer;refresh timestamptz;admin boolean;
begin
 perform dp_private.prepare_ai_credits(input_user);
 select exists(select 1 from public.ai_admin_access where user_id=input_user) into admin;
 select coalesce(sum(remaining) filter(where kind='included'),0),coalesce(sum(remaining) filter(where kind='purchased'),0),coalesce(sum(remaining) filter(where kind='gift'),0),min(expires_at) filter(where kind='included')
 into included,purchased,gift,refresh from public.ai_credit_lots l where user_id=input_user and dp_private.ai_credit_lot_available(l);
 return jsonb_build_object('enabled',(select ai_credits_enabled from public.app_public_config),'admin',admin,'included',included,'purchased',purchased,'gift',gift,'balance',included+purchased+gift,'refresh_at',refresh,'allowance',120,'latest_purchase',(select checkout_id from public.ai_credit_lots where user_id=input_user and kind='purchased' order by created_at desc,id desc limit 1));
end;
$$;
select cron.schedule('ai-promo-attempt-cleanup','17 3 * * *',$cron$delete from public.ai_credit_promo_attempts where created_at<now()-interval '30 days';$cron$);

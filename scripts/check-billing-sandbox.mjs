// Real test-mode Stripe + production billing code + isolated Postgres.
// Run with .env.billing.polish.local; no production Supabase credentials are read.
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createServer} from 'node:http';
import {spawn} from 'node:child_process';
import {randomUUID} from 'node:crypto';
import {PGlite} from '@electric-sql/pglite';
import {pgcrypto} from '@electric-sql/pglite/contrib/pgcrypto';
import {createAccountStore} from '../server/accountServicesStore.js';
import {createBillingService} from '../server/billingService.js';
import {STRIPE_BILLING_API_VERSION} from '../src/data/billingBusiness.js';

const key=process.env.STRIPE_SECRET_KEY;
if(!process.argv.includes('--sandbox')||! /^(sk|rk)_test_/.test(key||'')||process.env.STRIPE_LIVE_ENABLED==='true')throw Error('An explicit test-mode key and --sandbox are required');
const root=new URL('../',import.meta.url),db=new PGlite({extensions:{pgcrypto}}),user={id:randomUUID(),email:'ai-polish@example.invalid',email_confirmed_at:new Date().toISOString()},events=[],failures=[];
let service,listener,server,customer,subscription,clock,queue=Promise.resolve(),closing=false;
const createdProducts=[],createdPrices=[];
const check=(name)=>console.log('PASS '+name);
async function stripe(path,body=null,method=body?'POST':'GET'){
 const response=await fetch('https://api.stripe.com/v1/'+path,{method,headers:{Authorization:'Bearer '+key,'Stripe-Version':STRIPE_BILLING_API_VERSION,...(body?{'Content-Type':'application/x-www-form-urlencoded'}:{})},...(body?{body:new URLSearchParams(body)}:{}),signal:AbortSignal.timeout(30000)});
 if(!response.ok){const error=await response.json().catch(()=>({}));throw Error('Stripe test HTTP '+response.status+' '+(error.error?.code||error.error?.type||''));}
 const value=await response.json();if(Object.hasOwn(value,'livemode'))assert.equal(value.livemode,false);return value;
}
async function rpc(name,args){
 assert.match(name,/^[a-z_]+$/);const entries=Object.entries(args||{}),params=entries.map(([k],i)=>{assert.match(k,/^input_[a-z_]+$/);return k+'=> $'+(i+1);});
 return (await db.query('select public.'+name+'('+params.join(',')+') as value',entries.map(([,v])=>v))).rows[0].value;
}
// Tiny PostgREST adapter: exercises the real account store and all real SQL RPCs.
async function rest(url,options){
 const parsed=new URL(url),table=parsed.pathname.split('/rest/v1/')[1],args=options.body?JSON.parse(options.body):null;
 try{
  let data;
  if(table.startsWith('rpc/'))data=await rpc(table.slice(4),args);
  else {
   assert.match(table,/^[a-z_]+$/);
   if(options.method==='POST'){
    const columns=Object.keys(args);assert.ok(columns.every(c=>/^[a-z_]+$/.test(c)));
    await db.query('insert into public.'+table+'('+columns.join(',')+') values('+columns.map((_,i)=>'$'+(i+1)).join(',')+') on conflict do nothing',Object.values(args));data=null;
   }else{
    const select=parsed.searchParams.get('select')||'*';assert.match(select,/^[a-z_,*]+$/);
    const values=[],filters=[];
    for(const [name,value]of parsed.searchParams){if(['select','order','limit'].includes(name))continue;assert.match(name,/^[a-z_]+$/);assert.ok(value.startsWith('eq.'));values.push(value.slice(3));filters.push(name+'=$'+values.length);}
    let sql='select '+select+' from public.'+table+(filters.length?' where '+filters.join(' and '):'');
    if(parsed.searchParams.has('order')){const [column,direction]=parsed.searchParams.get('order').split('.');assert.match(column,/^[a-z_]+$/);assert.ok(['asc','desc'].includes(direction));sql+=' order by '+column+' '+direction;}
    if(parsed.searchParams.has('limit')){const limit=Number(parsed.searchParams.get('limit'));assert.ok(limit>0&&limit<=1000);sql+=' limit '+limit;}
    data=(await db.query(sql,values)).rows;
   }
  }
  return new Response(data===null?'':JSON.stringify(data),{status:200});
 }catch(error){failures.push('SQL '+error.message);return new Response(JSON.stringify({message:error.message}),{status:400});}
}
const store=createAccountStore({url:'http://isolated.invalid',secretKey:'local-fixture',fetcher:rest});
async function balance(){return store.creditBalance(user.id);}
async function waitUntil(test){for(let i=0;i<40;i++){if(await test())return;await new Promise(r=>setTimeout(r,500));}throw Error('Webhook state timeout: '+failures.join('; '));}
async function cleanup(){
 if(closing)return;closing=true;listener?.kill('SIGTERM');
 if(subscription)await stripe('subscriptions/'+subscription,null,'DELETE').catch(()=>{});
 if(customer)await stripe('customers/'+customer,null,'DELETE').catch(()=>{});
 if(clock)await stripe('test_helpers/test_clocks/'+clock,null,'DELETE').catch(()=>{});
 for(const id of createdPrices)await stripe('prices/'+id,{active:'false'}).catch(()=>{});
 for(const id of createdProducts)await stripe('products/'+id,{active:'false'}).catch(()=>{});
 server?.close();await db.close();
}
try{
 await stripe('account');check('test key verified');
 await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create schema extensions;
 create table auth.users(id uuid primary key,aud text,role text,email text,raw_user_meta_data jsonb default '{}');
 create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
 create function auth.jwt() returns jsonb language sql stable as $$select '{}'::jsonb$$;
 grant usage on schema public,auth to authenticated,anon;create publication supabase_realtime;
 create schema cron;create table cron.job(jobid bigint generated always as identity primary key,jobname text unique,schedule text,command text);
 create table cron.job_run_details(jobid bigint,end_time timestamptz);
 create function cron.schedule(name text,timing text,sql text) returns bigint language sql as $$insert into cron.job(jobname,schedule,command) values(name,timing,sql) on conflict(jobname) do update set schedule=excluded.schedule,command=excluded.command returning jobid$$;`);
 await db.exec(await readFile(new URL('supabase/auth-pairing-practice.sql',root),'utf8'));
 for(const name of(await readdir(new URL('supabase/migrations/',root))).sort())await db.exec((await readFile(new URL('supabase/migrations/'+name,root),'utf8')).replace('create extension if not exists pg_cron;',''));
 await db.query('insert into auth.users(id,email) values($1,$2)',[user.id,user.email]);
 await db.query('insert into public.ai_admin_access(user_id) values($1)',[user.id]);
 const product=await stripe('products',{name:'EFTdojo isolated lifecycle test','metadata[app]':'deliberatepractice'}),prices={};createdProducts.push(product.id);
 for(const [interval,amount]of[['month',9900],['year',79900]]){prices[interval]=(await stripe('prices',{product:product.id,currency:'nok',unit_amount:String(amount),'recurring[interval]':interval,tax_behavior:'inclusive'})).id;createdPrices.push(prices[interval]);}
 for(const [pack,credits,amount]of[['small',120,5900],['large',360,14900]]){
  const p=await stripe('products',{name:'EFTdojo isolated '+credits+' credit test','metadata[app]':'deliberatepractice','metadata[kind]':'ai_credits','metadata[credits]':String(credits)});
  const price=await stripe('prices',{product:p.id,currency:'nok',unit_amount:String(amount),tax_behavior:'inclusive'});
  createdProducts.push(p.id);createdPrices.push(price.id);
  await db.query('update public.ai_credit_packs set stripe_test_price=$1,enabled=true where pack_key=$2',[price.id,pack]);
 }
 await db.query("update public.app_public_config set billing_mode='test',ai_credits_enabled=true,stripe_monthly_price=$1,stripe_yearly_price=$2",[prices.month,prices.year]);
 server=createServer((req,res)=>{
  const reply=(status,value)=>{res.writeHead(status,{'Content-Type':'application/json'});res.end(JSON.stringify(value));};
  if(req.url==='/webhook'){
   let raw='';req.on('data',chunk=>raw+=chunk);req.on('end',()=>{queue=queue.then(async()=>{try{assert.equal(JSON.parse(raw).livemode,false);const result=await service.webhook(raw,req.headers['stripe-signature']);events.push({raw,signature:req.headers['stripe-signature'],type:JSON.parse(raw).type});reply(200,result);}catch(error){failures.push(error.message);reply(400,{error:error.code||'fixture_error'});}});});return;
  }
  queue=queue.then(async()=>{
   try{
    if(req.url==='/state')return reply(200,{balance:await balance(),events:events.map(e=>e.type),failures,subscriptions:(await db.query('select status,paid_through,cancel_at_period_end from public.billing_subscriptions')).rows});
    if(req.url==='/checkout/year'){
     const result=await service.checkout(user,{interval:'year',attemptId:randomUUID(),languageId:'en'});customer=await store.customer(user.id,false);return reply(200,result);
    }
    if(req.url.startsWith('/checkout/')){
     const pack=req.url.split('/').at(-1),attemptId=randomUUID();
     const result=await service.creditCheckout(user,{pack,attemptId,languageId:'en'});
     assert.equal((await service.creditCheckout(user,{pack,attemptId,languageId:'en'})).url,result.url);check('lost-response checkout replay reuses one session');return reply(200,result);
    }
    if(req.url==='/verify/subscription'){
     const rows=(await db.query('select * from public.billing_subscriptions')).rows;assert.equal(rows.length,1);subscription=rows[0].subscription_id;
     assert.equal(rows[0].status,'active');assert.ok(Date.parse(rows[0].paid_through)>Date.now());assert.equal((await balance()).included,120);check('paid annual Checkout grants only current monthly allowance');return reply(200,{ok:true});
    }
    if(req.url==='/verify/lifecycle'){
     const before=await balance();assert.equal(before.included,120);assert.equal(before.purchased,480);
     for(const event of events.filter(e=>e.type==='checkout.session.completed'))await service.webhook(event.raw,event.signature);
     assert.deepEqual(await balance(),before);check('real paid webhook replay is idempotent');
     await stripe('subscriptions/'+subscription,{cancel_at_period_end:'true'});return reply(200,{ok:true});
    }
    if(req.url==='/verify/cancellation'){
     const row=(await db.query('select * from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0];assert.equal(row.cancel_at_period_end,true);assert.equal((await balance()).included,120);check('cancellation retains credits through paid period');
     await db.query('delete from public.ai_admin_access where user_id=$1',[user.id]);
     const attempt=randomUUID(),lock=await rpc('begin_ai_credit_operation',{input_user_id:user.id,input_attempt_id:attempt,input_action:'assess',input_signature:'a'.repeat(64)});assert.equal(lock.state,'acquired');
     await rpc('finish_ai_credit_operation',{input_user_id:user.id,input_attempt_id:attempt,input_action:'assess',input_lease:lock.lease,input_result:{feedback:{score:3}}});
     const paid=await balance();assert.equal(paid.included,119);assert.equal(paid.purchased,480);check('non-admin consumption uses included credits first');
     await stripe('subscriptions/'+subscription,null,'DELETE');return reply(200,{ok:true});
    }
    if(req.url==='/verify/refunds'){
     const canceled=(await db.query('select status from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0];assert.equal(canceled.status,'canceled');assert.equal((await balance()).purchased,480);check('purchased credits survive subscription ending');
     const attempt=randomUUID(),lock=await rpc('begin_ai_credit_operation',{input_user_id:user.id,input_attempt_id:attempt,input_action:'assess',input_signature:'b'.repeat(64)});
     await rpc('finish_ai_credit_operation',{input_user_id:user.id,input_attempt_id:attempt,input_action:'assess',input_lease:lock.lease,input_result:{feedback:{score:3}}});
     assert.equal((await balance()).purchased,479);check('purchased credits remain spendable after cancellation');
     const lots=(await db.query("select payment_intent from public.ai_credit_lots where kind='purchased' order by credits asc")).rows;
     await stripe('refunds',{payment_intent:lots[0].payment_intent,amount:'2950'});return reply(200,{ok:true});
    }
    if(req.url==='/verify/partial'){
     assert.equal((await balance()).purchased,419);check('partial refund revokes proportional credits from its pack');
     const lot=(await db.query("select payment_intent from public.ai_credit_lots where kind='purchased' order by credits asc limit 1")).rows[0];await stripe('refunds',{payment_intent:lot.payment_intent});return reply(200,{ok:true});
    }
    if(req.url==='/verify/complete'){
     assert.equal((await balance()).purchased,360);check('full refund preserves credits from other pack');
     for(const e of events.filter(e=>e.type==='charge.refunded'))await service.webhook(e.raw,e.signature);
     assert.equal((await balance()).purchased,360);assert.deepEqual(failures,[]);check('refund replay is idempotent');reply(200,{ok:true,checks:'complete'});setTimeout(async()=>{await cleanup();process.exit(0);},100);return;
    }
    reply(404,{});
   }catch(error){failures.push(error.message);reply(400,{error:error.message});}
  });
 });
 await new Promise(resolve=>server.listen(5567,'127.0.0.1',resolve));
 // The signing secret is captured only in memory, never written or printed.
 listener=spawn(new URL('.tooling.local/stripe',root).pathname,['listen','--skip-update','--config',new URL('.stripe-ai-polish.config.local',root).pathname,'--events','checkout.session.completed,checkout.session.async_payment_succeeded,checkout.session.async_payment_failed,customer.subscription.created,customer.subscription.updated,customer.subscription.deleted,invoice.paid,invoice.payment_failed,charge.refunded,charge.dispute.created,charge.dispute.closed','--forward-to','http://127.0.0.1:5567/webhook'],{env:{...process.env,STRIPE_API_KEY:key},stdio:['ignore','pipe','pipe']});
 let output='';const webhookSecret=await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Stripe listener startup timeout')),20000);const capture=chunk=>{output+=chunk.toString();const match=output.match(/whsec_[A-Za-z0-9]+/);if(match){clearTimeout(timer);resolve(match[0]);}};listener.stdout.on('data',capture);listener.stderr.on('data',capture);listener.on('exit',()=>{clearTimeout(timer);reject(Error('Stripe listener exited'));});});
 service=createBillingService({secretKey:key,webhookSecret,store,appUrl:'http://127.0.0.1:5567/finished'});
 assert.equal((await service.status()).mode,'test');console.log('READY isolated test checkout on http://127.0.0.1:5567');
 if(process.argv.includes('--renewals')){
  const start=Math.floor(Date.now()/1000);clock=(await stripe('test_helpers/test_clocks',{frozen_time:String(start),name:'EFTdojo isolated renewals'})).id;
  customer=(await stripe('customers',{email:user.email,test_clock:clock})).id;await store.saveCustomer(user.id,false,customer);
  const setup=await stripe('setup_intents',{customer,payment_method:'pm_card_visa',confirm:'true',usage:'off_session','automatic_payment_methods[enabled]':'true','automatic_payment_methods[allow_redirects]':'never'});
  assert.equal(setup.status,'succeeded');
  let current=await stripe('subscriptions',{customer,'items[0][price]':prices.month,default_payment_method:setup.payment_method});subscription=current.id;
  await waitUntil(async()=>!!(await db.query('select paid_through from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0]?.paid_through);check('monthly subscription first invoice paid');
  const initial=(await db.query('select paid_through from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0].paid_through;
  async function advance(time){await stripe('test_helpers/test_clocks/'+clock+'/advance',{frozen_time:String(time)});await waitUntil(async()=>(await stripe('test_helpers/test_clocks/'+clock)).status==='ready');}
  await advance(current.items.data[0].current_period_end+7200);
  await waitUntil(async()=>Date.parse((await db.query('select paid_through from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0].paid_through)>Date.parse(initial));check('paid renewal extends access from real invoice.paid webhook');
  const paid=(await db.query('select paid_through from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0].paid_through;
  const failing=await stripe('payment_methods/pm_card_chargeCustomerFail/attach',{customer});
  current=await stripe('subscriptions/'+subscription,{default_payment_method:failing.id});
  await advance(current.items.data[0].current_period_end+7200);
  await waitUntil(async()=>events.some(e=>e.type==='invoice.payment_failed'));
  const failed=(await db.query('select status,paid_through from public.billing_subscriptions where subscription_id=$1',[subscription])).rows[0];
  assert.equal(failed.status,'past_due');assert.equal(Date.parse(failed.paid_through),Date.parse(paid));check('failed renewal does not grant an unpaid period');assert.deepEqual(failures,[]);
  await cleanup();process.exit(0);
 }
 process.on('SIGINT',()=>cleanup().then(()=>process.exit()));process.on('SIGTERM',()=>cleanup().then(()=>process.exit()));
}catch(error){console.error(error.message);await cleanup();process.exitCode=1;}

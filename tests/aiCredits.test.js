import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {createBillingService} from '../server/billingService.js';
import {createAiService,PilotError} from '../server/aiPracticeService.js';
import {AI_PROTOCOL} from '../src/js/aiPracticeProtocol.js';
import {AI_CREDIT_PACKS,AI_CREDIT_COSTS} from '../src/data/aiCredits.js';
const user={id:'85000000-0000-4000-8000-000000000001',email:'credits@example.invalid',email_confirmed_at:'2026-10-10T00:00Z'};
const attemptId='85000000-0000-4000-8000-000000000002',now=()=>Date.parse('2026-10-10T12:00Z');
function billingFixture(overrides={}) {
 const calls=[],purchases=[],risks=[];const packs=Object.entries(AI_CREDIT_PACKS).map(([pack_key,p])=>({pack_key,...p,enabled:true,stripe_test_price:`price_${pack_key}`}));
 const session={id:'cs_test_Credit',livemode:false,mode:'payment',status:'complete',payment_status:'paid',customer:'cus_Credits',currency:'nok',amount_total:5900,payment_intent:'pi_Credits',line_items:{data:[{quantity:1,price:{id:'price_small'}}],has_more:false},...overrides.session};
 const store={config:async()=>({billing_mode:'test',ai_credits_enabled:true}),creditPacks:async()=>packs,isAiAdmin:async()=>true,customer:async()=> 'cus_Credits',customerOwner:async c=>c==='cus_Credits'?user.id:null,
  beginCreditCheckout:async()=>({state:'acquired',lease:'lease'}),finishCreditCheckout:async()=>true,abortCreditCheckout:async()=>{},creditBalance:async()=>({enabled:true,balance:120,admin:false}),
  eventExists:async()=>false,creditCheckoutOwner:async id=>id===session.id?{user_id:user.id,pack_key:'small'}:null,
  applyCreditPurchase:async v=>purchases.push(v),applyCreditRisk:async v=>risks.push(v),...overrides.store};
 const fetcher=async(url,init)=>{const path=url.split('/v1/')[1],form=init.body?Object.fromEntries(new URLSearchParams(init.body)):null;calls.push({path,form,headers:init.headers});
  if(path.startsWith('prices/'))return Response.json({id:'price_small',active:true,livemode:false,type:'one_time',currency:'nok',unit_amount:5900,tax_behavior:'inclusive',product:{metadata:{app:'deliberatepractice',kind:'ai_credits',credits:'120'}},...overrides.price});
  if(path==='checkout/sessions')return Response.json({id:session.id,livemode:false,url:'https://checkout.stripe.com/c/pay/cs_test_Credit'});
  if(path.startsWith(`checkout/sessions/${session.id}`))return Response.json(session);
  if(path.startsWith('checkout/sessions?payment_intent='))return Response.json({data:[{id:session.id}]});
  if(path==='charges/ch_Credits')return Response.json({id:'ch_Credits',livemode:false,customer:'cus_Credits',currency:'nok',amount:5900,amount_refunded:2950,refunded:false,payment_intent:'pi_Credits'});
  throw Error('Unexpected path '+path);
 };
 const service=createBillingService({secretKey:'rk_test_fixture',webhookSecret:'whsec_fixture',monthlyPrice:'price_Month',yearlyPrice:'price_Year',store,fetcher,now});
 async function event(type,object={id:session.id}){const raw=JSON.stringify({id:'evt_Credits',livemode:false,type,data:{object}});const signature=`t=${Math.floor(now()/1000)},v1=${createHmac('sha256','whsec_fixture').update(`${Math.floor(now()/1000)}.${raw}`).digest('hex')}`;return service.webhook(raw,signature);}
 return {service,calls,purchases,risks,event};
}
test('credit purchase is one-time, fixed price and account-bound; client cannot set amounts',async()=>{
 const f=billingFixture();await f.service.creditCheckout(user,{pack:'small',attemptId,languageId:'no'});
 const call=f.calls.find(c=>c.path==='checkout/sessions');assert.equal(call.form.mode,'payment');assert.equal(call.form['line_items[0][price]'],'price_small');assert.equal(call.form['line_items[0][quantity]'],'1');
 assert.ok(!Object.keys(call.form).includes('payment_method_types'));assert.match(call.headers['Idempotency-Key'],new RegExp(attemptId));assert.match(call.form.success_url,/credits=success/);
 await assert.rejects(f.service.creditCheckout(user,{pack:'small',attemptId,languageId:'en',amount:1}),/invalid_plan/);
 assert.equal(f.purchases.length,0,'Returning from checkout cannot fulfill');
});
test('credit checkout fails closed on wrong prices or disabled configuration',async()=>{
 for(const price of [{unit_amount:1},{livemode:true},{recurring:{interval:'month'}},{product:{metadata:{app:'other'}}},{tax_behavior:'exclusive'}])await assert.rejects(billingFixture({price}).service.creditCheckout(user,{pack:'small',attemptId,languageId:'en'}),/billing_configuration/);
 await assert.rejects(billingFixture({store:{config:async()=>({billing_mode:'test',ai_credits_enabled:false})}}).service.creditCheckout(user,{pack:'small',attemptId,languageId:'en'}),/billing_unavailable/);
});
test('credit fulfillment retrieves the canonical paid checkout and first-class owner before granting',async()=>{
 const f=billingFixture();await f.event('checkout.session.completed');assert.equal(f.purchases.length,1);assert.equal(f.purchases[0].payment,'pi_Credits');assert.equal(f.purchases[0].pack,'small');
 for(const session of [{payment_status:'unpaid'},{status:'open'}]){const delayed=billingFixture({session});await delayed.event('checkout.session.completed');assert.equal(delayed.purchases.length,0);}
 for(const session of [{customer:'cus_Other'},{amount_total:1},{line_items:{data:[{price:{id:'price_bad'},quantity:1}]}},{livemode:true}])await assert.rejects(billingFixture({session}).event('checkout.session.async_payment_succeeded'),/billing_configuration/);
 const unknown=billingFixture({store:{creditCheckoutOwner:async()=>null}});await unknown.event('checkout.session.completed');assert.equal(unknown.purchases.length,0);
});
test('partial credit-pack refunds remove proportional credits without pausing subscriptions',async()=>{
 const f=billingFixture();await f.event('charge.refunded',{id:'ch_Credits'});assert.equal(f.risks.length,1);assert.equal(f.risks[0].refunded,60);assert.equal(f.risks[0].reason,'refund');assert.equal(f.risks[0].source,'ch_Credits');
});
const context={revision:'credits-test',statement:'[Sad] I miss him.',case:{id:'case-sara'},skill:{name:'Empathic understanding'}};
const assessment={assessable:true,score:4,evidence:['You miss him'],strength:'You named the missing.',adjustment:'Leave room for correction.',limitation:''};
const attempt={protocol:AI_PROTOCOL,attemptId,kind:'first',languageId:'en',skillId:'empathic-understanding',caseId:'case-sara',statementId:'statement',revision:'credits-test',text:'You miss him.'};
function creditStoreFixture(balance=2) {
 const receipts=new Map();let restored=0;
 const store={balance:async()=>({balance}),reserve:async()=>{},async begin(uid,rid,action,signature){const key=`${uid}:${rid}:${action}`,old=receipts.get(key);if(old){if(old.signature!==signature)throw new PilotError('attempt_conflict',409);return old.result?{state:'complete',result:old.result}:{state:'pending'};}
  const cost=AI_CREDIT_COSTS[action];if(balance<cost)throw new PilotError('credits_exhausted',402);balance-=cost;receipts.set(key,{signature,cost,lease:rid});return {state:'acquired',lease:rid};},
  async complete(uid,rid,action,lease,result){receipts.get(`${uid}:${rid}:${action}`).result=result;},async abort(uid,rid,action){const key=`${uid}:${rid}:${action}`,old=receipts.get(key);if(old&&!old.result){balance+=old.cost;restored++;receipts.delete(key);}},read:async(uid,rid,action)=>receipts.get(`${uid}:${rid}:${action}`)?.result};
 return {store,getBalance:()=>balance,getRestored:()=>restored};
}
test('cross-instance retry returns saved assessment without another provider call or debit',async()=>{
 const f=creditStoreFixture(),calls=[];
 const create=()=>createAiService({apiKey:'fixture',enabled:true,loadContext:()=>context,attemptStore:f.store,fetcher:async(url)=>{calls.push(url);return Response.json({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(assessment)}]}]});}});
 const a=create(),b=create();const first=await a.assess(attempt,user.id);assert.deepEqual(await b.assess(attempt,user.id),first);assert.equal(calls.length,1);assert.equal(f.getBalance(),1);
 await assert.rejects(b.assess({...attempt,text:'Other words'},user.id),/attempt_conflict/);assert.equal(f.getBalance(),1);
});
test('failed provider result releases credits; exhaustion prevents any provider request',async()=>{
 const f=creditStoreFixture(1);let calls=0;const pilot=createAiService({apiKey:'fixture',enabled:true,loadContext:()=>context,attemptStore:f.store,fetcher:async()=>{calls++;return Response.json({status:'incomplete'});}});
 await assert.rejects(pilot.assess(attempt,user.id),/assessment_unavailable/);assert.equal(f.getBalance(),1);assert.equal(f.getRestored(),1);
 const empty=creditStoreFixture(0);const blocked=createAiService({apiKey:'fixture',enabled:true,loadContext:()=>context,attemptStore:empty.store,fetcher:async()=>{calls++;}});
 await assert.rejects(blocked.assess(attempt,user.id),/credits_exhausted/);assert.equal(calls,1);
});
test('transcription and synthetic voice replays carry durable request identities and debit once',async()=>{
 const f=creditStoreFixture(4);let calls=0;const create=()=>createAiService({apiKey:'fixture',enabled:true,loadContext:()=>context,attemptStore:f.store,fetcher:async(url)=>{calls++;return url.endsWith('transcriptions')?Response.json({text:'You miss him.'}):new Response(new Uint8Array([1,2,3]));}});
 const a=create(),b=create(),file=new Blob([new Uint8Array(200)],{type:'audio/mp4'});
 await a.transcribe(file,'en',user.id,attemptId);await b.transcribe(file,'en',user.id,attemptId);
 const clip={role:'client',languageId:'en',skillId:attempt.skillId,caseId:attempt.caseId,statementId:'statement',revision:context.revision,requestId:attemptId};
 assert.deepEqual(await a.speech(clip,user.id),await b.speech(clip,user.id));assert.equal(calls,2);assert.equal(f.getBalance(),2);
 await assert.rejects(a.transcribe(file,'en',user.id),/invalid_attempt/);
});

test('credits never bypass premium case access or trigger a paid provider call for locked content',async()=>{
 let calls=0;const f=creditStoreFixture(2);f.store.contentAccess=async()=>{throw new PilotError('full_access_required',403);};
 const pilot=createAiService({apiKey:'fixture',enabled:true,loadContext:()=>context,attemptStore:f.store,fetcher:async()=>{calls++;}});
 await assert.rejects(pilot.assess(attempt,user.id),/full_access_required/);assert.equal(calls,0);assert.equal(f.getBalance(),2);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {createBillingService,verifyStripeEvent} from '../server/billingService.js';
import {createAccountServicesHandler} from '../server/accountServicesHttp.js';

const user={id:'72000000-0000-4000-8000-000000000001',email:'billing@example.invalid',email_confirmed_at:'2026-10-08T00:00:00Z'};
const input={interval:'month',attemptId:'72000000-0000-4000-8000-000000000002',languageId:'no'};
const now=()=>Date.parse('2026-10-08T12:00:00Z'),end=Math.floor(now()/1000)+30*86400;
const signature=raw=>`t=${Math.floor(now()/1000)},v1=${createHmac('sha256','whsec_fixture').update(`${Math.floor(now()/1000)}.${raw}`).digest('hex')}`;
function fixture(options={}) {
 const calls=[],applied=[],risks=[],reserved=[];let customer;
 const store={config:async()=>({billing_mode:'test'}),isAiAdmin:async()=>true,subscription:async()=>null,customer:async()=>customer,
  saveCustomer:async(uid,live,id)=>{assert.equal(uid,user.id);assert.equal(live,false);customer=id;return id;},reserve:async(...args)=>reserved.push(args),
  eventExists:async()=>false,customerOwner:async id=>id==='cus_Fixture'?user.id:null,apply:async value=>applied.push(value),risk:async value=>risks.push(value),...options.store};
 store.beginCheckout??=async()=>({state:'acquired',lease:'fixture'});store.finishCheckout??=async()=>true;store.abortCheckout??=async()=>{};
 const fetcher=async(url,init)=>{
  const path=url.split('/v1/')[1],form=init.body?Object.fromEntries(new URLSearchParams(init.body)):null;calls.push({path,form,headers:init.headers});
  if(path.startsWith('prices/')){const priceId=path.slice(7).split('?')[0];return Response.json({id:priceId,product:{metadata:{app:'deliberatepractice'}},active:true,livemode:false,currency:'nok',unit_amount:priceId.endsWith('Month')?9900:79900,tax_behavior:'inclusive',recurring:{interval:priceId.endsWith('Month')?'month':'year',interval_count:1}});}
  if(path==='customers')return Response.json({id:'cus_Fixture',livemode:false});
  if(path==='checkout/sessions')return Response.json({id:'cs_test_fixture',url:'https://checkout.stripe.com/c/pay/cs_test_fixture',livemode:false});
  if(path==='checkout/sessions/cs_test_Previous')return Response.json({id:'cs_test_Previous',url:'https://checkout.stripe.com/c/pay/cs_test_Previous',livemode:false,customer:'cus_Fixture',status:'open'});
  if(path==='checkout/sessions/cs_test_Previous/expire')return Response.json({id:'cs_test_Previous',status:'expired'});
  if(path.startsWith('subscriptions?'))return Response.json({data:[]});
  if(path.startsWith('subscriptions/'))return Response.json({id:'sub_Fixture',customer:'cus_Fixture',livemode:false,status:'active',cancel_at_period_end:true,
   items:{data:[{price:{id:'price_Month'},quantity:1,current_period_end:end}]},latest_invoice:{status:'paid',lines:{data:[{pricing:{price_details:{price:'price_Month'}},period:{end}}]}}});
  if(path.startsWith('charges/'))return Response.json({id:'ch_Fixture',customer:'cus_Fixture',livemode:false,payment_intent:'pi_Fixture',refunded:true,amount:9900,amount_refunded:9900,...options.charge});
  if(path.startsWith('invoice_payments?')){const query=new URLSearchParams(path.split('?')[1]);assert.equal(query.get('payment[type]'),'payment_intent');assert.equal(query.get('payment[payment_intent]'),'pi_Fixture');return Response.json({data:[{invoice:'in_Fixture'}]});}
  if(path==='invoices/in_Fixture')return Response.json({id:'in_Fixture',customer:'cus_Fixture',livemode:false,parent:{subscription_details:{subscription:'sub_Fixture'}},lines:{data:[{pricing:{price_details:{price:'price_Month'}},period:{end}}]},...options.invoice});
  if(path.startsWith('disputes/'))return Response.json({id:'dp_Fixture',charge:'ch_Fixture',status:'won'});
  if(path==='billing_portal/sessions')return Response.json({url:'https://billing.stripe.com/session/fixture'});
  throw Error('Unexpected provider path');
 };
 const service=createBillingService({secretKey:'sk_test_fixture',webhookSecret:'whsec_fixture',monthlyPrice:'price_Month',yearlyPrice:'price_Year',portalConfiguration:'bpc_Fixture',fetcher,now,...options,store});
 return {service,calls,applied,risks,reserved,store};
}
test('checkout uses verified account, fixed NOK price, hosted return paths and stable retry identity',async()=>{
 const f=fixture();await f.service.checkout(user,input);await f.service.checkout(user,input);
 const checkout=f.calls.filter(c=>c.path==='checkout/sessions');assert.equal(checkout.length,2);
 assert.deepEqual(checkout[0].form,checkout[1].form);assert.equal(checkout[0].headers['Idempotency-Key'],checkout[1].headers['Idempotency-Key']);
 assert.equal(f.calls.filter(c=>c.path==='customers').length,1);assert.equal(checkout[0].form['line_items[0][price]'],'price_Month');
 assert.equal(checkout[0].form['line_items[0][quantity]'],'1');assert.equal(checkout[0].form.locale,'nb');assert.equal(checkout[0].form.customer,'cus_Fixture');
 assert.equal(checkout[0].form.currency,'nok');
 assert.equal(checkout[0].form['payment_method_types[]'],undefined);assert.match(checkout[0].form.integration_identifier,/^deliberate-practice-[a-z]{8}$/);
 assert.equal(checkout[0].headers['Stripe-Version'],'2026-09-30.endive');
 assert.equal(checkout[0].form.client_reference_id,user.id);assert.match(checkout[0].form.success_url,/billing=success/);
 assert.equal(checkout[0].form['customer_update[name]'],'auto');assert.equal(checkout[0].form['tax_id_collection[enabled]'],'true');
});
test('unverified identity, client prices, test access and disabled live mode fail before payment writes',async()=>{
 const f=fixture();await assert.rejects(f.service.checkout({...user,email_confirmed_at:null},input),/sign_in_required/);
 await assert.rejects(f.service.checkout(user,{...input,priceId:'price_Cheap'}),/invalid_plan/);assert.equal(f.calls.length,0);
 const nonadmin=fixture({store:{...f.store,isAiAdmin:async()=>false}});await assert.rejects(nonadmin.service.checkout(user,input),/test_access_required/);assert.equal(nonadmin.calls.length,0);
 const live=fixture({secretKey:'sk_live_fixture'});await assert.rejects(live.service.checkout(user,input),/billing_unavailable/);assert.equal(live.calls.length,0);
});
test('provider price configuration cannot silently change advertised amount, tax behavior or mode',async()=>{
 const f=fixture({fetcher:async()=>Response.json({active:true,livemode:false,currency:'nok',unit_amount:9901,tax_behavior:'exclusive',recurring:{interval:'month',interval_count:1}})});
 await assert.rejects(f.service.checkout(user,input),/billing_configuration/);assert.equal(f.reserved.length,0);
});
test('a competing checkout lease prevents payment writes and an open checkout is reused',async()=>{
 const pending=fixture({store:{beginCheckout:async()=>({state:'pending'})}});
 await assert.rejects(pending.service.checkout(user,input),/checkout_pending/);
 assert.equal(pending.calls.filter(call=>call.form).length,0);
 const existing=fixture({store:{customer:async()=> 'cus_Fixture',beginCheckout:async()=>({state:'acquired',lease:'fixture',previous_session:'cs_test_Previous',previous_interval:'month'})}});
 const result=await existing.service.checkout(user,input);assert.match(result.url,/cs_test_Previous$/);
 assert.equal(existing.calls.filter(call=>call.path==='checkout/sessions').length,0);
});
test('changing plans expires the previous checkout before creating its replacement',async()=>{
 const f=fixture({store:{customer:async()=> 'cus_Fixture',beginCheckout:async()=>({state:'acquired',lease:'fixture',previous_session:'cs_test_Previous',previous_interval:'month'})}});
 await f.service.checkout(user,{...input,interval:'year'});
 const paths=f.calls.map(call=>call.path);assert(paths.indexOf('checkout/sessions/cs_test_Previous/expire')<paths.indexOf('checkout/sessions'));
 const created=f.calls.find(call=>call.path==='checkout/sessions');assert.equal(created.form['line_items[0][price]'],'price_Year');
 assert.match(created.headers['Idempotency-Key'],/:cs_test_Previous$/);
});
test('signed webhook uses fresh subscription state, modern invoice price fields and owner mapping',async()=>{
 const f=fixture(),raw=JSON.stringify({id:'evt_Fixture',type:'invoice.paid',livemode:false,data:{object:{parent:{subscription_details:{subscription:'sub_Fixture'}}}}});
 assert.deepEqual(await f.service.webhook(raw,signature(raw)),{received:true});
 assert.equal(f.applied[0].paidThrough,new Date(end*1000).toISOString());assert.equal(f.applied[0].cancelAtPeriodEnd,true);
 assert.equal(f.applied[0].customer,'cus_Fixture');assert.equal(f.applied[0].live,false);
});
test('webhook signatures bind exact bytes and reject stale or altered payloads',async()=>{
 const raw='{"id":"evt_Fixture"}';assert.equal((await verifyStripeEvent(raw,signature(raw),'whsec_fixture',{now})).id,'evt_Fixture');
 await assert.rejects(verifyStripeEvent(raw+' ',signature(raw),'whsec_fixture',{now}),/invalid_signature/);
 await assert.rejects(verifyStripeEvent(raw,signature(raw),'whsec_fixture',{now:()=>now()+301000}),/invalid_signature/);
});
test('unpaid checkout cannot extend access, while confirmed delayed payment is handled',async()=>{
 const f=fixture();for(const [i,type,payment_status] of [[0,'checkout.session.completed','unpaid'],[1,'checkout.session.async_payment_succeeded','paid'],[2,'checkout.session.async_payment_failed','unpaid']]){
  const raw=JSON.stringify({id:'evt_Async'+i,type,livemode:false,data:{object:{subscription:'sub_Fixture',payment_status}}});await f.service.webhook(raw,signature(raw));
 }
 assert.equal(f.applied[0].paidThrough,null);assert.equal(f.applied[1].paidThrough,new Date(end*1000).toISOString());assert.equal(f.applied[2].paidThrough,null);
});
test('full refund and resolved dispute update scoped payment holds; unrelated customers are ignored',async()=>{
 const f=fixture();let index=0;for(const [type,id] of [['charge.refunded','ch_Fixture'],['charge.dispute.closed','dp_Fixture']]){
  const raw=JSON.stringify({id:'evt_Risk'+index++,type,livemode:false,data:{object:{id}}});await f.service.webhook(raw,signature(raw));
 }
 assert.equal(f.risks[0].reason,'refund');assert.equal(f.risks[0].hold,true);assert.equal(f.risks[1].reason,'dispute');assert.equal(f.risks[1].hold,false);
 assert.equal(f.risks[0].subscriptionId,'sub_Fixture');assert.equal(f.risks[0].sourceId,'ch_Fixture');assert.equal(f.risks[0].periodEnd,new Date(end*1000).toISOString());
 const unrelated=fixture({store:{...f.store,customerOwner:async()=>null}}),raw=JSON.stringify({id:'evt_Unrelated',type:'charge.refunded',livemode:false,data:{object:{id:'ch_Fixture'}}});
 assert.equal((await unrelated.service.webhook(raw,signature(raw))).ignored,true);assert.equal(unrelated.risks.length,0);
});
test('partial refunds and payments outside the app subscription do not pause access',async()=>{
 const raw=JSON.stringify({id:'evt_Partial',type:'charge.refunded',livemode:false,data:{object:{id:'ch_Fixture'}}});
 const partial=fixture({charge:{refunded:false,amount_refunded:1000}});assert.equal((await partial.service.webhook(raw,signature(raw))).ignored,true);assert.equal(partial.risks.length,0);
 const unrelated=fixture({invoice:{parent:{subscription_details:{subscription:'sub_Other'}},lines:{data:[{price:'price_Other',period:{end}}]}}});
 assert.equal((await unrelated.service.webhook(raw,signature(raw))).ignored,true);assert.equal(unrelated.risks.length,0);
});
test('payment endpoint authorization precedes providers, errors stay bounded and checkout return cannot grant access',async()=>{
 let calls=0;const handler=createAccountServicesHandler({billing:{checkout:async()=>calls++},authorize:async()=>{throw Error('Untrusted private error');},content:async()=>null});
 const response=await handler(new Request('https://fixture.invalid/checkout',{method:'POST',headers:{Origin:'https://jaranolsen.github.io'},body:'{}'}));
 assert.equal(response.status,503);assert.deepEqual(await response.json(),{error:'request_failed'});assert.equal(calls,0);
});

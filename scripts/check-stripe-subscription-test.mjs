import assert from 'node:assert/strict';
import {aiTestAccount} from './ai-test-account.mjs';
const key=process.env.STRIPE_SECRET_KEY;
if(!process.argv.includes('--test-subscription')||!/^sk_test_/.test(key||'')||process.env.STRIPE_LIVE_ENABLED==='true')throw Error('Explicit test subscription setup required');
const account=await aiTestAccount(1);
async function stripe(path,body=null){
 const response=await fetch(`https://api.stripe.com/v1/${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${key}`,...(body?{'Content-Type':'application/x-www-form-urlencoded'}:{})},...(body?{body:new URLSearchParams(body)}:{}),signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error(`Stripe test request failed (${response.status})`);return response.json();
}
async function waitFor(check){for(let i=0;i<20;i++){const result=await account.user.rpc('get_account_access');if(result.error)throw Error('Account access unavailable');if(check(result.data))return result.data;await new Promise(resolve=>setTimeout(resolve,1500));}throw Error('Webhook did not update account access');}
try{
 const row=await account.admin.from('billing_customers').select('customer_id').eq('user_id',account.userId).eq('livemode',false).single();assert.equal(row.error,null);
 const customer=row.data.customer_id,list=await stripe(`subscriptions?customer=${customer}&status=all&limit=100`);
 let subscription=list.data.find(item=>item.status==='active'&&item.livemode===false&&item.items.data[0].price.id===process.env.STRIPE_PRICE_YEARLY);
 if(!subscription){
  const setup=await stripe('setup_intents',{customer,payment_method:'pm_card_visa','payment_method_types[]':'card',usage:'off_session',confirm:'true'});assert.equal(setup.status,'succeeded');
  subscription=await stripe('subscriptions',{customer,'items[0][price]':process.env.STRIPE_PRICE_YEARLY,default_payment_method:setup.payment_method,payment_behavior:'error_if_incomplete','metadata[app_user_id]':account.userId});
 }
 assert.equal(subscription.livemode,false);assert.equal(subscription.status,'active');
 const paid=await waitFor(value=>value.subscription?.status==='active'&&Date.parse(value.subscription.paid_through)>Date.now());assert.equal(paid.subscription.test,true);assert.equal(paid.ai_access,true);
 await stripe(`subscriptions/${subscription.id}`,{cancel_at_period_end:'true'});
 const cancelled=await waitFor(value=>value.subscription?.cancel_at_period_end===true);assert.equal(cancelled.subscription.paid_through,paid.subscription.paid_through);
 const checkouts=await stripe(`checkout/sessions?customer=${customer}&limit=100`);
 for(const session of checkouts.data)if(session.status==='open'&&session.metadata?.app==='deliberatepractice')await stripe(`checkout/sessions/${session.id}/expire`,{});
 console.log(JSON.stringify({testSubscriptionPaid:true,realStripeWebhooks:true,cancellationAtPeriodEnd:true,paidThroughPreserved:true,aiGrantPreserved:true,realPayments:0}));
}finally{await account.user.auth.signOut({scope:'local'});}

import {BillingError} from './billingService.js';

export function createAccountStore({url,secretKey,fetcher=fetch}) {
 const headers={apikey:secretKey,Authorization:`Bearer ${secretKey}`,'Content-Type':'application/json'};
 async function request(path,{method='GET',body,extra={}}={}) {
  let response;try{response=await fetcher(`${url}/rest/v1/${path}`,{method,headers:{...headers,...extra},...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(10000)});}catch{throw new BillingError('access_unavailable',503);}
  if(!response.ok){let code;try{code=(await response.json()).message;}catch{}throw new BillingError(['checkout_limit','attempt_conflict','customer_conflict'].includes(code)?code:'access_unavailable',503);}
  const text=await response.text();try{return text?JSON.parse(text):null;}catch{throw new BillingError('access_unavailable',503);}
 }
 const rows=(table,params)=>request(`${table}?${new URLSearchParams(params)}`);
 return {
  async config(){return (await rows('app_public_config',{select:'email_mode,billing_mode,stripe_monthly_price,stripe_yearly_price,stripe_portal_configuration,ai_credits_enabled',limit:'1'}))[0]||{email_mode:'link',billing_mode:'off'};},
  creditPacks:()=>rows('ai_credit_packs',{select:'pack_key,credits,amount,stripe_test_price,stripe_live_price,enabled'}),
  creditBalance:userId=>request('rpc/get_ai_credit_balance',{method:'POST',body:{input_user:userId}}),
  aiUsage:()=>request('rpc/get_ai_usage_summary',{method:'POST',body:{}}),
  beginCreditCheckout:(userId,live,attemptId,pack)=>request('rpc/begin_ai_credit_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_attempt:attemptId,input_pack:pack}}),
  finishCreditCheckout:(userId,live,attemptId,lease,session)=>request('rpc/finish_ai_credit_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_attempt:attemptId,input_lease:lease,input_session:session}}),
  abortCreditCheckout:(userId,live,attemptId,lease)=>request('rpc/abort_ai_credit_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_attempt:attemptId,input_lease:lease}}),
  creditCheckoutOwner:async(session,live)=>(await rows('ai_credit_checkout_attempts',{session_id:`eq.${session}`,livemode:`eq.${live}`,select:'user_id,pack_key',limit:'1'}))[0],
  applyCreditPurchase:value=>request('rpc/apply_ai_credit_purchase',{method:'POST',body:{input_event:value.eventId,input_live:value.live,input_type:value.eventType,input_customer:value.customer,input_session:value.session,input_payment:value.payment,input_pack:value.pack}}),
  applyCreditRisk:value=>request('rpc/apply_ai_credit_risk',{method:'POST',body:{input_event:value.eventId,input_live:value.live,input_type:value.eventType,input_customer:value.customer,input_payment:value.payment,input_source:value.source,input_reason:value.reason,input_refunded:value.refunded,input_hold:value.hold,input_observed:value.observed}}),
  async isAiAdmin(userId){return (await rows('ai_admin_access',{user_id:`eq.${userId}`,select:'user_id',limit:'1'})).length===1;},
  async customer(userId,live){return (await rows('billing_customers',{user_id:`eq.${userId}`,livemode:`eq.${live}`,select:'customer_id',limit:'1'}))[0]?.customer_id;},
  async customerOwner(customer,live){if(typeof customer!=='string')return null;return (await rows('billing_customers',{customer_id:`eq.${customer}`,livemode:`eq.${live}`,select:'user_id',limit:'1'}))[0]?.user_id;},
  async saveCustomer(userId,live,customer){await request('billing_customers?on_conflict=user_id,livemode',{method:'POST',body:{user_id:userId,livemode:live,customer_id:customer},extra:{Prefer:'resolution=ignore-duplicates'}});return this.customer(userId,live);},
  async subscription(userId,live){const list=await rows('billing_subscriptions',{user_id:`eq.${userId}`,livemode:`eq.${live}`,select:'status,paid_through',order:'observed_at.desc'});return list.find(row=>['active','past_due'].includes(row.status)&&Date.parse(row.paid_through)>Date.now())||list[0];},
  reserve:(userId,live,attemptId,interval)=>request('rpc/reserve_checkout_attempt',{method:'POST',body:{input_user:userId,input_live:live,input_attempt:attemptId,input_interval:interval}}),
  beginCheckout:(userId,live,attemptId,interval)=>request('rpc/begin_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_attempt:attemptId,input_interval:interval}}),
  finishCheckout:(userId,live,lease,session,interval)=>request('rpc/finish_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_lease:lease,input_session:session,input_interval:interval}}),
  abortCheckout:(userId,live,lease)=>request('rpc/abort_checkout',{method:'POST',body:{input_user:userId,input_live:live,input_lease:lease}}),
  async eventExists(eventId){return (await rows('billing_webhook_events',{event_id:`eq.${eventId}`,select:'event_id',limit:'1'})).length===1;},
  apply:value=>request('rpc/apply_billing_snapshot',{method:'POST',body:{input_event:value.eventId,input_live:value.live,input_type:value.eventType,
    input_subscription:value.subscriptionId,input_customer:value.customer,input_price:value.priceId,input_status:value.status,input_interval:value.interval,
    input_paid_through:value.paidThrough,input_cancel:value.cancelAtPeriodEnd,input_observed:value.observed,input_period_start:value.periodStart??null}}),
  risk:value=>request('rpc/apply_billing_payment_risk',{method:'POST',body:{input_event:value.eventId,input_live:value.live,input_type:value.eventType,
    input_customer:value.customer,input_subscription:value.subscriptionId,input_source:value.sourceId,input_reason:value.reason,input_hold:value.hold,input_period_end:value.periodEnd,input_observed:value.observed}})
 };
}

export function createAccountAuthorizer({url,publishableKey,fetcher=fetch}) {
 return async request=>{
  const authorization=request.headers.get('authorization');if(!authorization?.startsWith('Bearer ')||authorization.length>10000)throw new BillingError('sign_in_required',401);
  let response;try{response=await fetcher(`${url}/auth/v1/user`,{headers:{apikey:publishableKey,Authorization:authorization},signal:AbortSignal.timeout(10000)});}catch{throw new BillingError('access_unavailable',503);}
  if(!response.ok)throw new BillingError('sign_in_required',401);
  const user=await response.json();if(!/^[0-9a-f-]{36}$/i.test(user.id||'')||user.is_anonymous)throw new BillingError('sign_in_required',401);return user;
 };
}

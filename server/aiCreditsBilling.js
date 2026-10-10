import {AI_CREDITS_PROTOCOL,AI_CREDIT_PACKS} from '../src/data/aiCredits.js';
import {BILLING_PROTOCOL} from '../src/data/subscriptionPlans.js';
import {BILLING_TERMS_VERSION,BILLING_LEGAL_URLS,STRIPE_CHECKOUT_INTEGRATION} from '../src/data/billingBusiness.js';
import {BillingError} from './billingService.js';
const providerId=value=>typeof value==='string'?value:value?.id;
const uuid=value=>typeof value==='string'&&/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value);
export function createCreditBilling({store,provider,requireReady,configure,ensureCustomer,mode,appUrl,taxEnabled,now}) {
 const live=mode==='live';
 async function packs(onlyEnabled=true) {
  return (await store.creditPacks()).filter(p=>(!onlyEnabled||p.enabled)&&AI_CREDIT_PACKS[p.pack_key]?.credits===p.credits&&AI_CREDIT_PACKS[p.pack_key]?.amount===p.amount)
   .map(p=>({...p,price:live?p.stripe_live_price:p.stripe_test_price}));
 }
 async function approvedPrice(pack) {
  if(!/^price_[A-Za-z0-9]+$/.test(pack?.price||''))throw new BillingError('billing_configuration',503);
  const p=await provider(`prices/${pack.price}?expand[]=product`);
  if(p.id!==pack.price||p.active!==true||p.livemode!==live||p.type!=='one_time'||p.recurring||p.currency!=='nok'||p.unit_amount!==pack.amount||p.tax_behavior!=='inclusive'
   ||p.product?.metadata?.app!=='deliberatepractice'||p.product?.metadata?.kind!=='ai_credits'||p.product?.metadata?.credits!==String(pack.credits))throw new BillingError('billing_configuration',503);
  return p;
 }
 async function credits(user) {
  if(!uuid(user?.id)||!user.email_confirmed_at||user.is_anonymous)throw new BillingError('sign_in_required',401);
  const config=await configure(),balance=await store.creditBalance(user.id);
  return {protocol:BILLING_PROTOCOL,creditsProtocol:AI_CREDITS_PROTOCOL,...balance,
   packs:config.ai_credits_enabled?(await packs()).filter(p=>p.price).map(p=>({key:p.pack_key,credits:p.credits,amount:p.amount})):[]};
 }
 async function checkout(user,input) {
  await requireReady(user);
  if(!input||Object.keys(input).some(k=>!['pack','attemptId','languageId'].includes(k))||!AI_CREDIT_PACKS[input.pack]||!uuid(input.attemptId)||!['en','no'].includes(input.languageId))throw new BillingError('invalid_plan');
  if(!(await configure()).ai_credits_enabled)throw new BillingError('billing_unavailable',503);
  const pack=(await packs()).find(p=>p.pack_key===input.pack);await approvedPrice(pack);
  const lock=await store.beginCreditCheckout(user.id,live,input.attemptId,input.pack);
  if(lock.state!=='acquired')throw new BillingError('checkout_pending',409);
  try {
   const customer=await ensureCustomer(user,input.languageId);
   if(lock.previous_session) {
    const previous=await provider(`checkout/sessions/${lock.previous_session}`);
    if(providerId(previous.customer)!==customer||previous.livemode!==live||previous.mode!=='payment')throw new BillingError('customer_conflict',409);
    if(previous.status==='complete')throw new BillingError(previous.payment_status==='paid'?'credit_purchase_complete':'payment_pending',409);
    if(previous.status==='open') {
     if(!await store.finishCreditCheckout(user.id,live,input.attemptId,lock.lease,previous.id))throw new BillingError('checkout_pending',409);
     if(new URL(previous.url||'https://invalid.invalid').origin!=='https://checkout.stripe.com')throw new BillingError('billing_unavailable',503);
     return {protocol:BILLING_PROTOCOL,url:previous.url,test:!live};
    }
   }
   const success=new URL(appUrl),cancel=new URL(appUrl);success.searchParams.set('credits','success');cancel.searchParams.set('credits','cancelled');
   const value=await provider('checkout/sessions',{mode:'payment',currency:'nok',customer,client_reference_id:user.id,
    'line_items[0][price]':pack.price,'line_items[0][quantity]':1,locale:input.languageId==='no'?'nb':'en',
    success_url:success.href,cancel_url:cancel.href,'automatic_tax[enabled]':taxEnabled,'adaptive_pricing[enabled]':false,
    billing_address_collection:'required','customer_update[address]':'auto','customer_update[name]':'auto',
    integration_identifier:STRIPE_CHECKOUT_INTEGRATION,'metadata[app]':'deliberatepractice','metadata[kind]':'ai_credits','metadata[terms_version]':BILLING_TERMS_VERSION,
    ...(live?{'consent_collection[terms_of_service]':'required','custom_text[terms_of_service_acceptance][message]':input.languageId==='no'?`Jeg godtar [vilkårene](${BILLING_LEGAL_URLS.terms}?lang=no).`:`I agree to the [terms](${BILLING_LEGAL_URLS.terms}?lang=en).`,
    'custom_text[submit][message]':input.languageId==='no'?`${pack.credits} KI-kreditter. Engangskjøp, uten utløpsdato. Refusjon innen 14 dager for en ubrukt pakke.`:`${pack.credits} AI credits. One-time purchase, no expiry. Refund within 14 days for an unused pack.`}: {})},`dp-credits:${mode}:${user.id}:${input.attemptId}${lock.previous_session?':'+lock.previous_session:''}`);
   if(value.livemode!==live||!/^cs_[A-Za-z0-9_]+$/.test(value.id||'')||new URL(value.url||'https://invalid.invalid').origin!=='https://checkout.stripe.com')throw new BillingError('billing_unavailable',503);
   if(!await store.finishCreditCheckout(user.id,live,input.attemptId,lock.lease,value.id)){await provider(`checkout/sessions/${value.id}/expire`,{});throw new BillingError('checkout_pending',409);}
   return {protocol:BILLING_PROTOCOL,url:value.url,test:!live};
  }catch(error){await store.abortCreditCheckout(user.id,live,input.attemptId,lock.lease).catch(()=>{});throw error;}
 }
 async function canonicalSession(sessionId) {
  const owner=await store.creditCheckoutOwner(sessionId,live);if(!owner)return null;
  const session=await provider(`checkout/sessions/${sessionId}?expand[]=line_items`),pack=(await packs(false)).find(p=>p.pack_key===owner.pack_key);
  if(!pack)throw new BillingError('billing_configuration',503);
  await approvedPrice(pack);
  const lines=session.line_items?.data,customer=providerId(session.customer);
  if(session.livemode!==live||session.mode!=='payment'||await store.customerOwner(customer,live)!==owner.user_id
   ||session.currency!=='nok'||session.amount_total!==pack.amount||session.line_items?.has_more||lines?.length!==1
   ||providerId(lines[0].price)!==pack.price||lines[0].quantity!==1||!/^pi_[A-Za-z0-9]+$/.test(providerId(session.payment_intent)||''))throw new BillingError('billing_configuration',503);
  return {session,pack,customer};
 }
 async function fulfill(event) {
  const checked=await canonicalSession(event.data?.object?.id);if(!checked)return false;
  const {session,pack,customer}=checked;
  if(session.status!=='complete'||session.payment_status!=='paid')return true;
  await store.applyCreditPurchase({eventId:event.id,live,eventType:event.type,customer,session:session.id,payment:providerId(session.payment_intent),pack:pack.pack_key});return true;
 }
 async function risk(event,charge,{source,reason,hold}) {
  const payment=providerId(charge.payment_intent);if(!/^pi_[A-Za-z0-9]+$/.test(payment||''))return false;
  const sessions=await provider(`checkout/sessions?payment_intent=${payment}&limit=2`);
  if(sessions.data?.length!==1)return false;
  const checked=await canonicalSession(sessions.data[0].id);if(!checked)return false;
  if(providerId(charge.customer)!==checked.customer||charge.currency!=='nok'||charge.amount!==checked.pack.amount)throw new BillingError('billing_configuration',503);
  await store.applyCreditRisk({eventId:event.id,live,eventType:event.type,customer:checked.customer,payment,source,reason,hold,
   refunded:reason==='refund'?Math.min(checked.pack.credits,Math.ceil(checked.pack.credits*charge.amount_refunded/charge.amount)):0,observed:new Date(now()).toISOString()});return true;
 }
 return {credits,checkout,fulfill,risk};
}

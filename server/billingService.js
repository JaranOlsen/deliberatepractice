import {createCreditBilling} from './aiCreditsBilling.js';
import {BILLING_PROTOCOL,FULL_ACCESS_PRICES} from '../src/data/subscriptionPlans.js';
import {BILLING_BUSINESS,BILLING_LEGAL_URLS,BILLING_TERMS_VERSION,STRIPE_BILLING_API_VERSION,STRIPE_CHECKOUT_INTEGRATION} from '../src/data/billingBusiness.js';
export {BILLING_PROTOCOL,FULL_ACCESS_PRICES};
export class BillingError extends Error {constructor(code,status=400){super(code);this.code=code;this.status=status;}}
const id=(value,prefix)=>typeof value==='string'&&new RegExp(`^${prefix}_[A-Za-z0-9]+$`).test(value);
const uuid=value=>typeof value==='string'&&/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value);
const secondsDate=value=>Number.isFinite(value)&&value>0?new Date(value*1000).toISOString():null;
const providerId=value=>typeof value==='string'?value:value?.id;

export async function verifyStripeEvent(raw,signature,secret,{now=Date.now}={}) {
 if(!secret||typeof signature!=='string'||signature.length>2000)throw new BillingError('invalid_signature',400);
 const fields=signature.split(',').map(part=>part.split('=')),stamp=fields.find(([key])=>key==='t')?.[1];
 const matches=fields.filter(([key])=>key==='v1').map(([,value])=>value);
 if(!/^\d{10}$/.test(stamp||'')||Math.abs(now()/1000-Number(stamp))>300||!matches.length)throw new BillingError('invalid_signature',400);
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const digest=new Uint8Array(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(`${stamp}.${raw}`)));
 const expected=[...digest].map(byte=>byte.toString(16).padStart(2,'0')).join('');
 if(!matches.some(value=>{if(!/^[a-f0-9]{64}$/i.test(value||''))return false;let diff=0;for(let i=0;i<64;i++)diff|=expected.charCodeAt(i)^value.toLowerCase().charCodeAt(i);return diff===0;}))throw new BillingError('invalid_signature',400);
 try{return JSON.parse(raw);}catch{throw new BillingError('invalid_event',400);}
}

export function createBillingService({secretKey,webhookSecret,monthlyPrice,yearlyPrice,portalConfiguration,
 liveEnabled=false,taxEnabled=false,apiVersion=STRIPE_BILLING_API_VERSION,store,fetcher=fetch,now=Date.now,
 appUrl='https://jaranolsen.github.io/deliberatepractice/'}) {
 const mode=/^(sk|rk)_test_/.test(secretKey||'')?'test':/^(sk|rk)_live_/.test(secretKey||'')?'live':'off';
 const live=mode==='live',prices={month:monthlyPrice,year:yearlyPrice},verifiedPrices=new Map();
 const portalOverride=portalConfiguration;
 if(new URL(appUrl).origin!=='https://jaranolsen.github.io'&&!/^http:\/\/(localhost|127\.0\.0\.1):\d+\//.test(appUrl))throw Error('Invalid billing return URL');
 async function provider(path,body=null,key=null) {
  if(mode==='off')throw new BillingError('billing_unavailable',503);
  const form=body?new URLSearchParams(Object.entries(body).flatMap(([name,value])=>Array.isArray(value)?value.map(item=>[`${name}[]`,String(item)]):[[name,String(value)]])):null;
  let response;try{response=await fetcher(`https://api.stripe.com/v1/${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${secretKey}`,
   ...(body?{'Content-Type':'application/x-www-form-urlencoded'}:{}),...(key?{'Idempotency-Key':key}:{}),...(apiVersion?{'Stripe-Version':apiVersion}:{})},
   ...(form?{body:form.toString()}:{}),signal:AbortSignal.timeout(30000)});}catch{throw new BillingError('billing_connection',503);}
  if(!response.ok)throw new BillingError(response.status===429?'billing_busy':'billing_unavailable',503);
  try{return await response.json();}catch{throw new BillingError('billing_unavailable',503);}
 }
 async function configure() {
  const config=await store.config();
  if(!monthlyPrice)prices.month=config.stripe_monthly_price;
  if(!yearlyPrice)prices.year=config.stripe_yearly_price;
  if(!portalOverride)portalConfiguration=config.stripe_portal_configuration;
  return config;
 }
 async function status() {
  const config=await configure(),ready=mode!=='off'&&id(prices.month,'price')&&id(prices.year,'price')&&(!live||liveEnabled&&!!BILLING_BUSINESS.supportEmail&&/^whsec_/.test(webhookSecret||''));
  return {protocol:BILLING_PROTOCOL,currency:'nok',prices:FULL_ACCESS_PRICES,
   aiCreditsEnabled:config.ai_credits_enabled===true,mode:ready&&config.billing_mode===mode?mode:'off',portalAvailable:mode!=='off'&&!!portalConfiguration};
 }
 async function requireReady(user) {
  const settings=await status();if(settings.mode==='off')throw new BillingError('billing_unavailable',503);
  if(!uuid(user?.id)||!user.email_confirmed_at||user.is_anonymous)throw new BillingError('sign_in_required',401);
  if(!live&&!await store.isAiAdmin(user.id))throw new BillingError('test_access_required',403);
 }
 async function price(interval) {
  if(verifiedPrices.get(interval)?.id!==prices[interval]) {
   const value=await provider(`prices/${prices[interval]}?expand[]=product`);
   if(value.id!==prices[interval]||value.product?.metadata?.app!=='deliberatepractice'||value.livemode!==live||value.active!==true||value.currency!=='nok'||value.unit_amount!==FULL_ACCESS_PRICES[interval]
    ||value.recurring?.interval!==interval||value.recurring?.interval_count!==1||value.tax_behavior!=='inclusive')throw new BillingError('billing_configuration',503);
   verifiedPrices.set(interval,value);
  }return verifiedPrices.get(interval);
 }
 async function ensureCustomer(user,languageId) {
  let customer=await store.customer(user.id,live);
  if(!customer) {
   const footer=`Deliberate Practice Lab. Renews each selected billing period until cancelled in Account / Manage subscription. Access continues through the paid period. A full refund can be requested within 14 days of the first purchase, even after practice begins: ${BILLING_BUSINESS.supportEmail}. To withdraw, email your name, account email and purchase date; no form is required. VAT exempt. Terms: ${BILLING_LEGAL_URLS.terms}. Privacy: ${BILLING_LEGAL_URLS.privacy}.`;
   const value=await provider('customers',{email:user.email,'metadata[app_user_id]':user.id,...(BILLING_BUSINESS.supportEmail?{'invoice_settings[footer]':footer}:{}),'preferred_locales[]':languageId==='no'?'nb':'en'},`dp-customer:${mode}:${user.id}`);
   if(!id(value.id,'cus')||value.livemode!==live)throw new BillingError('billing_configuration',503);
   customer=await store.saveCustomer(user.id,live,value.id);
   if(customer!==value.id)throw new BillingError('customer_conflict',409);
  }
  return customer;
 }
 async function checkout(user,input) {
  await requireReady(user);
  if(!input||Object.keys(input).some(key=>!['interval','attemptId','languageId'].includes(key))||!['month','year'].includes(input.interval)||!uuid(input.attemptId)||!['en','no'].includes(input.languageId))throw new BillingError('invalid_plan');
  const existing=await store.subscription(user.id,live);
  if(existing&&['active','past_due'].includes(existing.status)&&Date.parse(existing.paid_through)>now())throw new BillingError('already_subscribed',409);
  await price(input.interval);await store.reserve(user.id,live,input.attemptId,input.interval);
  const lock=await store.beginCheckout(user.id,live,input.attemptId,input.interval);if(lock.state!=='acquired')throw new BillingError('checkout_pending',409);
  try {
  const customer=await ensureCustomer(user,input.languageId);
  const subscriptions=await provider(`subscriptions?customer=${customer}&status=all&limit=100`);
  if(subscriptions.data?.some(s=>['active','trialing','past_due','unpaid','paused'].includes(s.status)&&s.items?.data?.some(item=>Object.values(prices).includes(providerId(item.price)))))throw new BillingError('already_subscribed',409);
  if(lock.previous_session) {
   const previous=await provider(`checkout/sessions/${lock.previous_session}`);
   if(providerId(previous.customer)!==customer||previous.livemode!==live)throw new BillingError('customer_conflict',409);
   if(previous.status==='open'&&lock.previous_interval===input.interval) {
    if(!await store.finishCheckout(user.id,live,lock.lease,previous.id,input.interval))throw new BillingError('checkout_pending',409);
    if(new URL(previous.url||'https://invalid.invalid').origin!=='https://checkout.stripe.com')throw new BillingError('billing_unavailable',503);
    return {protocol:BILLING_PROTOCOL,url:previous.url,test:!live};
   }
   if(previous.status==='open')await provider(`checkout/sessions/${previous.id}/expire`,{});
  }
  const success=new URL(appUrl);success.searchParams.set('billing','success');
  const cancel=new URL(appUrl);cancel.searchParams.set('billing','cancelled');
  const value=await provider('checkout/sessions',{mode:'subscription',currency:'nok',customer,client_reference_id:user.id,
   'line_items[0][price]':prices[input.interval],'line_items[0][quantity]':1,locale:input.languageId==='no'?'nb':'en',
   success_url:success.href,cancel_url:cancel.href,billing_address_collection:'required','customer_update[address]':'auto','customer_update[name]':'auto',
   'tax_id_collection[enabled]':true,'automatic_tax[enabled]':taxEnabled,'subscription_data[metadata][app_user_id]':user.id,
   integration_identifier:STRIPE_CHECKOUT_INTEGRATION,'metadata[app]':'deliberatepractice','metadata[attempt_id]':input.attemptId,'metadata[terms_version]':BILLING_TERMS_VERSION,
   ...(live?{'consent_collection[terms_of_service]':'required','custom_text[terms_of_service_acceptance][message]':input.languageId==='no'?`Jeg godtar [abonnementsvilkårene](${BILLING_LEGAL_URLS.terms}?lang=no).`:`I agree to the [subscription terms](${BILLING_LEGAL_URLS.terms}?lang=en).`,
   'custom_text[submit][message]':input.languageId==='no'?`Abonnementet fornyes automatisk ${input.interval==='month'?'hver måned':'hvert år'}. Si opp under Konto → Administrer abonnement. Full refusjon innen 14 dager etter første kjøp.`:`Your subscription renews ${input.interval==='month'?'monthly':'yearly'}. Cancel under Account → Manage subscription. Full refund within 14 days of your first purchase.`}: {})},`dp-checkout:${mode}:${user.id}:${input.attemptId}${lock.previous_session?`:${lock.previous_session}`:''}`);
  if(value.livemode!==live||new URL(value.url||'https://invalid.invalid').origin!=='https://checkout.stripe.com')throw new BillingError('billing_unavailable',503);
  if(!await store.finishCheckout(user.id,live,lock.lease,value.id,input.interval)){await provider(`checkout/sessions/${value.id}/expire`,{});throw new BillingError('checkout_pending',409);}
  return {protocol:BILLING_PROTOCOL,url:value.url,test:!live};
  }catch(error){await store.abortCheckout(user.id,live,lock.lease).catch(()=>{});throw error;}
 }
 async function portal(user,languageId) {
  await configure();
  if(!uuid(user?.id)||!user.email_confirmed_at||user.is_anonymous)throw new BillingError('sign_in_required',401);
  if(!portalConfiguration||mode==='off')throw new BillingError('billing_unavailable',503);
  if(!live&&!await store.isAiAdmin(user.id))throw new BillingError('test_access_required',403);
  const customer=await store.customer(user.id,live);if(!customer)throw new BillingError('subscription_unavailable',404);
  const returnUrl=new URL(appUrl);returnUrl.searchParams.set('billing','account');
  const value=await provider('billing_portal/sessions',{customer,configuration:portalConfiguration,return_url:returnUrl.href,locale:languageId==='no'?'nb':'en'});
  if(new URL(value.url||'https://invalid.invalid').origin!=='https://billing.stripe.com')throw new BillingError('billing_unavailable',503);
  return {protocol:BILLING_PROTOCOL,url:value.url,test:!live};
 }
 const creditBilling=createCreditBilling({store,provider,requireReady,configure,ensureCustomer,mode,appUrl,taxEnabled,now});
 async function webhook(raw,signature) {
  const event=await verifyStripeEvent(raw,signature,webhookSecret,{now});
  if(!id(event.id,'evt')||event.livemode!==live)throw new BillingError('invalid_event');
  await configure();
  if(await store.eventExists(event.id))return {received:true};
  if(event.type.startsWith('checkout.session.')&&['checkout.session.completed','checkout.session.async_payment_succeeded','checkout.session.async_payment_failed'].includes(event.type)&&store.creditCheckoutOwner&&await creditBilling.fulfill(event))return {received:true};
  if(['charge.refunded','charge.dispute.created','charge.dispute.closed'].includes(event.type)) {
   const observed=new Date(now()).toISOString(),object=event.data?.object;
   let charge,hold=true,reason='refund';
   if(event.type.startsWith('charge.dispute.')) {
    if(!id(object?.id,'dp'))throw new BillingError('invalid_event');
    const dispute=await provider(`disputes/${object.id}`);reason='dispute';hold=!['won','warning_closed'].includes(dispute.status);
    const chargeId=providerId(dispute.charge);if(!id(chargeId,'ch'))throw new BillingError('invalid_event');charge=await provider(`charges/${chargeId}`);
   } else {if(!id(object?.id,'ch'))throw new BillingError('invalid_event');charge=await provider(`charges/${object.id}`);}
   if(charge.livemode!==live)throw new BillingError('billing_configuration',503);
   if(store.creditCheckoutOwner&&await creditBilling.risk(event,charge,{source:reason==='refund'?charge.id:object.id,reason,hold}))return {received:true};
   if(reason==='refund'){if(!charge.refunded||charge.amount_refunded!==charge.amount||charge.amount<=0)return {received:true,ignored:true};}
   if(charge.livemode!==live)throw new BillingError('billing_configuration',503);
   const customer=providerId(charge.customer);if(!await store.customerOwner(customer,live))return {received:true,ignored:true};
   let invoiceId=providerId(charge.invoice);
   if(!invoiceId&&id(providerId(charge.payment_intent),'pi')){
    const query=new URLSearchParams({'payment[type]':'payment_intent','payment[payment_intent]':providerId(charge.payment_intent),limit:'100'});
    const payments=await provider(`invoice_payments?${query}`);
    const invoices=[...new Set((payments.data||[]).map(p=>providerId(p.invoice)).filter(Boolean))];
    if(invoices.length>1)throw new BillingError('billing_configuration',503);invoiceId=invoices[0];
   }
   if(!id(invoiceId,'in'))return {received:true,ignored:true};
   const invoice=await provider(`invoices/${invoiceId}`),subscriptionId=providerId(invoice.subscription||invoice.parent?.subscription_details?.subscription);
   if(!id(subscriptionId,'sub')||providerId(invoice.customer)!==customer||invoice.livemode!==live)return {received:true,ignored:true};
   const ends=(invoice.lines?.data||[]).filter(line=>Object.values(prices).includes(providerId(line.price||line.pricing?.price_details?.price))).map(line=>line.period?.end).filter(Number.isFinite);
   if(!ends.length)return {received:true,ignored:true};
   await store.risk({eventId:event.id,live,eventType:event.type,customer,subscriptionId,sourceId:charge.id,reason,hold,periodEnd:secondsDate(Math.max(...ends)),observed});return {received:true};
  }
  const supported=['invoice.paid','invoice.payment_failed','customer.subscription.created','customer.subscription.updated','customer.subscription.deleted','checkout.session.completed','checkout.session.async_payment_succeeded','checkout.session.async_payment_failed'];
  if(!supported.includes(event.type))return {received:true,ignored:true};
  const object=event.data?.object;
  const subscriptionId=event.type.startsWith('customer.subscription.')?object?.id:providerId(object?.subscription||object?.parent?.subscription_details?.subscription);
  if(!id(subscriptionId,'sub'))return {received:true,ignored:true};
  const observed=new Date(now()).toISOString(),subscription=await provider(`subscriptions/${subscriptionId}?expand[]=latest_invoice`);
  const customer=providerId(subscription.customer),owner=await store.customerOwner(customer,live);
  if(!owner)return {received:true,ignored:true};
  const items=subscription.items?.data??[],item=items.length===1?items[0]:null,priceId=providerId(item?.price);
  const interval=Object.keys(prices).find(key=>prices[key]===priceId);
  if(!interval||subscription.livemode!==live||item.quantity!==1)throw new BillingError('billing_configuration',503);
  await price(interval);
  let paidThrough=null,periodStart=null;
  const invoice=subscription.latest_invoice;
  const checkoutPaid=!event.type.startsWith('checkout.session.')||['paid','no_payment_required'].includes(object?.payment_status);
  if(checkoutPaid&&invoice&&typeof invoice==='object'&&(invoice.paid===true||invoice.status==='paid')) {
   const ends=(invoice.lines?.data||[]).filter(line=>providerId(line.price||line.pricing?.price_details?.price)===priceId).map(line=>line.period?.end).filter(Number.isFinite);
   const starts=(invoice.lines?.data||[]).filter(line=>providerId(line.price||line.pricing?.price_details?.price)===priceId).map(line=>line.period?.start).filter(Number.isFinite);
   periodStart=secondsDate(starts.length?Math.min(...starts):item.current_period_start||subscription.current_period_start);
   paidThrough=secondsDate(ends.length?Math.max(...ends):item.current_period_end||subscription.current_period_end);
  }
  await store.apply({eventId:event.id,live,eventType:event.type,subscriptionId,customer,priceId,status:subscription.status,interval,
   paidThrough,periodStart,cancelAtPeriodEnd:subscription.cancel_at_period_end===true,observed});
  return {received:true};
 }
 return {status,checkout,portal,webhook,credits:creditBilling.credits,creditCheckout:creditBilling.checkout};
}

import {readFile,writeFile,chmod} from 'node:fs/promises';
import {FULL_ACCESS_PRICES} from '../src/data/subscriptionPlans.js';
const key=process.env.STRIPE_SECRET_KEY;
if(!process.argv.includes('--prepare-live')||!/^(sk|rk)_live_/.test(key||'')||process.env.STRIPE_LIVE_ENABLED==='true')throw Error('Live preparation requires a live key and disabled charging');
const endpoint='https://kpzmjnwwbxweevloiqiy.supabase.co/functions/v1/account-services/webhook';
const events=['checkout.session.completed','customer.subscription.created','customer.subscription.updated','customer.subscription.deleted','invoice.paid','invoice.payment_failed','charge.refunded','charge.dispute.created','charge.dispute.closed'];
async function call(path,body=null){
 const response=await fetch(`https://api.stripe.com/v1/${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${key}`,...(body?{'Content-Type':'application/x-www-form-urlencoded'}:{})},...(body?{body:new URLSearchParams(body)}:{}),signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error(`Stripe live preparation failed (${response.status})`);return response.json();
}
const account=await call('account');
if(account.id!==process.env.STRIPE_ACCOUNT_ID||account.country!=='NO'||!account.charges_enabled||!account.payouts_enabled)throw Error('Confirmed live merchant account must be ready');
const prices={month:process.env.STRIPE_PRICE_MONTHLY,year:process.env.STRIPE_PRICE_YEARLY};
for(const [interval,priceId] of Object.entries(prices)){
 const price=await call(`prices/${priceId}?expand[]=product`);
 if(!price.livemode||!price.active||!price.product.livemode||price.product.metadata?.app!=='deliberatepractice'||price.unit_amount!==FULL_ACCESS_PRICES[interval]||price.currency!=='nok'||price.recurring?.interval!==interval||price.recurring.interval_count!==1||price.tax_behavior!=='inclusive')throw Error('Live price does not match the approved plan');
}
const portal=await call(`billing_portal/configurations/${process.env.STRIPE_PORTAL_CONFIGURATION}`);
if(!portal.livemode||!portal.active||portal.features.subscription_cancel.mode!=='at_period_end'||!portal.features.subscription_cancel.enabled||!portal.features.invoice_history.enabled||!portal.features.payment_method_update.enabled)throw Error('Live customer portal is incomplete');
const found=await call('webhook_endpoints?limit=100');
let webhook=found.data.find(item=>item.url===endpoint&&item.livemode===true),secret=process.env.STRIPE_WEBHOOK_SECRET;
if(webhook&&!secret)throw Error('Restore the existing live webhook signing secret before retrying');
if(!webhook){const body={url:endpoint,'metadata[app]':'deliberatepractice'};events.forEach((event,index)=>{body[`enabled_events[${index}]`]=event;});webhook=await call('webhook_endpoints',body);secret=webhook.secret;}
if(!webhook.livemode||webhook.status!=='enabled'||!/^whsec_/.test(secret||'')||!events.every(event=>webhook.enabled_events.includes(event)))throw Error('Live webhook mismatch');
let env=await readFile('.env.billing.live.local','utf8');
env=/^STRIPE_WEBHOOK_SECRET=.*$/m.test(env)?env.replace(/^STRIPE_WEBHOOK_SECRET=.*$/m,()=>`STRIPE_WEBHOOK_SECRET=${secret}`):`${env}\nSTRIPE_WEBHOOK_SECRET=${secret}\n`;
await writeFile('.env.billing.live.local',env,{mode:0o600});await chmod('.env.billing.live.local',0o600);
console.log(JSON.stringify({liveAccountVerified:true,pricesVerified:true,portalVerified:true,webhookId:webhook.id,signingSecretSaved:true,chargingEnabled:false}));

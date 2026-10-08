import {readFile,writeFile} from 'node:fs/promises';
import {FULL_ACCESS_PRICES} from '../src/data/subscriptionPlans.js';

if(!process.argv.includes('--test-setup'))throw Error('Use --test-setup to create only Stripe test objects');
const key=process.env.STRIPE_SECRET_KEY;if(!/^sk_test_/.test(key||'')||process.env.STRIPE_LIVE_ENABLED==='true')throw Error('A test key and disabled live payments are required');
async function call(path,values=null,idempotency=null) {
 const response=await fetch(`https://api.stripe.com/v1/${path}`,{method:values?'POST':'GET',headers:{Authorization:`Bearer ${key}`,
  ...(values?{'Content-Type':'application/x-www-form-urlencoded'}:{}),...(idempotency?{'Idempotency-Key':idempotency}:{})},
  ...(values?{body:new URLSearchParams(values).toString()}:{}),signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error(`Stripe test setup failed (${response.status})`);return response.json();
}
const account=await call('account');if(account.country!=='NO')throw Error('Confirm the business country before pricing setup');
const found=await call('products?active=true&limit=100');
let product=found.data.find(p=>p.metadata?.app==='deliberatepractice'&&p.livemode===false);
if(!product)product=await call('products',{name:'Full tilgang / Full access',description:'Alle kasus og gruppeøkter / All cases and group rooms','metadata[app]':'deliberatepractice'},'dp-full-access-test-product-v1');
if(product.livemode!==false)throw Error('Unexpected live product');
const prices={};
for(const interval of ['month','year']) {
 const lookup=`dp_full_${interval}_nok_${FULL_ACCESS_PRICES[interval]}_v1`;
 const list=await call(`prices?${new URLSearchParams({'lookup_keys[]':lookup,active:'true',limit:'100'})}`);
 let price=list.data.find(p=>p.product===product.id&&p.livemode===false);
 if(!price)price=await call('prices',{product:product.id,currency:'nok',unit_amount:String(FULL_ACCESS_PRICES[interval]),
  'recurring[interval]':interval,tax_behavior:'inclusive',lookup_key:lookup},`dp-test-price:${lookup}`);
 if(price.livemode!==false||price.currency!=='nok'||price.unit_amount!==FULL_ACCESS_PRICES[interval]||price.recurring?.interval!==interval||price.tax_behavior!=='inclusive')throw Error('Test price configuration mismatch');
 prices[interval]=price.id;
}
const configs=await call('billing_portal/configurations?limit=100');
let portal=configs.data.find(c=>c.metadata?.app==='deliberatepractice'&&c.livemode===false&&c.active);
if(!portal)portal=await call('billing_portal/configurations',{'business_profile[headline]':'Deliberate Practice Lab',
 'features[subscription_cancel][enabled]':'true','features[subscription_cancel][mode]':'at_period_end',
 'features[payment_method_update][enabled]':'true','features[invoice_history][enabled]':'true','metadata[app]':'deliberatepractice'},'dp-test-portal-v1');
if(portal.livemode!==false)throw Error('Unexpected live portal configuration');
let env=await readFile('.env.billing.local','utf8');
for(const [name,value] of Object.entries({STRIPE_PRICE_MONTHLY:prices.month,STRIPE_PRICE_YEARLY:prices.year,STRIPE_PORTAL_CONFIGURATION:portal.id})) {
 if(!new RegExp(`^${name}=.*$`,'m').test(env))env+=`\n${name}=${value}\n`;else env=env.replace(new RegExp(`^${name}=.*$`,'m'),`${name}=${value}`);
}
await writeFile('.env.billing.local',env,{mode:0o600});
console.log(JSON.stringify({test:true,currency:'nok',monthly:99,yearly:799,productId:product.id,priceIds:prices,portalConfiguration:portal.id,livePaymentsEnabled:false}));

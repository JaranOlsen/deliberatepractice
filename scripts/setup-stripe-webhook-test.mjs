import {readFile,writeFile,chmod} from 'node:fs/promises';

const endpoint='https://kpzmjnwwbxweevloiqiy.supabase.co/functions/v1/account-services/webhook';
const events=['checkout.session.completed','checkout.session.async_payment_succeeded','checkout.session.async_payment_failed','customer.subscription.created','customer.subscription.updated','customer.subscription.deleted','invoice.paid','invoice.payment_failed','charge.refunded','charge.dispute.created','charge.dispute.closed'];
const key=process.env.STRIPE_SECRET_KEY;
if(!process.argv.includes('--test-setup')||!/^sk_test_/.test(key||'')||process.env.STRIPE_LIVE_ENABLED==='true')throw Error('Test setup and a test key are required');
async function call(path,body=null){
 const response=await fetch(`https://api.stripe.com/v1/${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${key}`,...(body?{'Content-Type':'application/x-www-form-urlencoded'}:{})},...(body?{body:new URLSearchParams(body)}:{}),signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error(`Webhook setup failed (${response.status})`);return response.json();
}
const found=await call('webhook_endpoints?limit=100');
let webhook=found.data.find(item=>item.url===endpoint&&item.livemode===false);
let secret=process.env.STRIPE_WEBHOOK_SECRET;
if(webhook&&!secret)throw Error('This test endpoint already exists. Restore its signing secret into .env.billing.local before retrying.');
if(!webhook){
 const body={url:endpoint,'metadata[app]':'deliberatepractice'};events.forEach((event,index)=>{body[`enabled_events[${index}]`]=event;});
 webhook=await call('webhook_endpoints',body);secret=webhook.secret;
}
if(webhook.livemode!==false||webhook.status!=='enabled'||!/^whsec_/.test(secret||'')||!events.every(event=>webhook.enabled_events.includes(event)))throw Error('Test webhook configuration mismatch');
let env=await readFile('.env.billing.local','utf8');
env=/^STRIPE_WEBHOOK_SECRET=.*$/m.test(env)?env.replace(/^STRIPE_WEBHOOK_SECRET=.*$/m,`STRIPE_WEBHOOK_SECRET=${secret}`):`${env}\nSTRIPE_WEBHOOK_SECRET=${secret}\n`;
await writeFile('.env.billing.local',env,{mode:0o600});await chmod('.env.billing.local',0o600);
console.log(JSON.stringify({test:true,endpointId:webhook.id,url:endpoint,signingSecretSaved:true,livePaymentsEnabled:false}));

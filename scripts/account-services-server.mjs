import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {createBillingService} from '../server/billingService.js';
import {createAccountStore,createAccountAuthorizer} from '../server/accountServicesStore.js';
import {createAccountServicesHandler} from '../server/accountServicesHttp.js';
import {createPracticeContentService,createContentScopeReader} from '../server/practiceContentService.js';
const url=process.env.VITE_SUPABASE_URL,publishableKey=process.env.VITE_SUPABASE_ANON_KEY,secretKey=process.env.SUPABASE_SECRET_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!url||!publishableKey||!secretKey)throw Error('Local account services require Supabase configuration');
const root=new URL('../src/data/runtime/',import.meta.url),manifest=JSON.parse(await readFile(new URL('manifest.json',root))),banks={},mastery={};
for(const language of ['en','no']){for(const skill of manifest.SKILL_ORDER)banks[`${language}:${skill}`]=JSON.parse(await readFile(new URL(`statements/${language}-${skill}.json`,root)));
 for(const exercise of manifest.EXERCISE_CATALOG)mastery[`${language}:${exercise.id}`]=JSON.parse(await readFile(new URL(`mastery/${language}-${exercise.id}.json`,root)));}
const store=createAccountStore({url,secretKey}),billing=createBillingService({secretKey:process.env.STRIPE_SECRET_KEY,webhookSecret:process.env.STRIPE_WEBHOOK_SECRET,
 monthlyPrice:process.env.STRIPE_PRICE_MONTHLY,yearlyPrice:process.env.STRIPE_PRICE_YEARLY,portalConfiguration:process.env.STRIPE_PORTAL_CONFIGURATION,
 liveEnabled:false,taxEnabled:process.env.STRIPE_AUTOMATIC_TAX==='true',store,appUrl:'http://127.0.0.1:5173/deliberatepractice/'});
const content=createPracticeContentService({manifest,banks,mastery,scopeFor:createContentScopeReader({url,publishableKey})});
const handler=createAccountServicesHandler({billing,content,authorize:createAccountAuthorizer({url,publishableKey})});
createServer(async(req,res)=>{
 try{const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>1000000){res.writeHead(413);res.end();return;}chunks.push(chunk);}
  const response=await handler(new Request(`http://127.0.0.1:5556${req.url}`,{method:req.method,headers:req.headers,...(req.method==='GET'||req.method==='OPTIONS'?{}:{body:Buffer.concat(chunks)})}));
  res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));
 }catch{res.writeHead(503,{'Content-Type':'application/json'});res.end('{"error":"request_failed"}');}
}).listen(5556,'127.0.0.1',()=>console.log('Account services: http://127.0.0.1:5556 (local test adapter)'));

import {BillingError} from './billingService.js';

export function createAccountServicesHandler({billing,content,authorize,origins=['https://jaranolsen.github.io','http://localhost:5173','http://127.0.0.1:5173']}) {
 return async request=>{
  const headers={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
  const json=(data,status=200)=>Response.json(data,{status,headers});
  const action=new URL(request.url).pathname.split('/').at(-1),origin=request.headers.get('origin');
  try {
   const webhook=action==='webhook'&&request.method==='POST';
   if(!webhook){if(!origin||!origins.includes(origin))throw new BillingError('origin_denied',403);headers['Access-Control-Allow-Origin']=origin;headers.Vary='Origin';}
   if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{...headers,'Access-Control-Allow-Methods':'GET, POST','Access-Control-Allow-Headers':'Content-Type, Authorization, apikey, x-client-info'}});
   if(request.method==='GET'&&action==='status')return json(await billing.status());
   if(request.method!=='POST')return json({error:'not_found'},404);
   const reader=request.body?.getReader(),chunks=[];let size=0;
   if(reader)while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>(webhook?1000000:10000)){await reader.cancel();throw new BillingError('request_too_large',413);}chunks.push(value);}
   const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}const text=new TextDecoder().decode(bytes);
   if(webhook)return json(await billing.webhook(text,request.headers.get('stripe-signature')));
   const user=await authorize(request);let input;try{input=JSON.parse(text);}catch{throw new BillingError('invalid_request');}
   if(action==='checkout')return json(await billing.checkout(user,input));
   if(action==='credits')return json(await billing.credits(user));
   if(action==='credit-checkout')return json(await billing.creditCheckout(user,input));
   if(action==='portal')return json(await billing.portal(user,input?.languageId));
   if(action==='content')return json(await content(user,input,request.headers.get('authorization')));
   return json({error:'not_found'},404);
  }catch(error){return json({error:error instanceof BillingError?error.code:'request_failed'},error instanceof BillingError?error.status:503);}
 };
}

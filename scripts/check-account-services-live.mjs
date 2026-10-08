import assert from 'node:assert/strict';
import {aiTestAccount} from './ai-test-account.mjs';

const remote=process.argv.includes('--remote');
const account=await aiTestAccount();
const base=remote?`${account.url}/functions/v1/account-services`:'http://127.0.0.1:5556';
const origin=remote?'https://jaranolsen.github.io':'http://127.0.0.1:5173';
const headers={Origin:origin,apikey:account.publicKey,Authorization:`Bearer ${account.token}`,'Content-Type':'application/json'};
async function call(action,body,custom=headers){const response=await fetch(`${base}/${action}`,{method:body?'POST':'GET',headers:custom,...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(60000)});return {response,value:await response.json()};}
try{
 const access=await account.user.rpc('get_account_access');assert.equal(access.error,null);assert.equal(access.data.full_content,true);assert.equal(access.data.ai_access,true);
 const status=await call('status');assert.equal(status.response.status,200);assert.equal(status.value.protocol,'practice-billing-v1');
 const denied=await call('content',{kind:'skill',skillId:'empathic-understanding',languageId:'en'},{...headers,Authorization:`Bearer ${account.publicKey}`});assert.equal(denied.response.status,401);
 const content=await call('content',{kind:'skill',skillId:'empathic-understanding',languageId:'en'});assert.equal(content.response.status,200);assert.equal(content.value.protocol,'practice-content-v1');
 const mastery=await call('content',{kind:'mastery',exerciseId:'mastery-arne-ordinary-days-easy',languageId:'no'});
 assert.equal(mastery.response.status,200);assert.equal(mastery.value.protocol,'practice-content-v1');
 let checkoutVerified=false;
 if(process.argv.includes('--test-checkout')){
  assert.equal(status.value.mode,'test');
  const input={interval:'month',attemptId:crypto.randomUUID(),languageId:'no'};
  const parallel=await Promise.all([call('checkout',input),call('checkout',{...input,attemptId:crypto.randomUUID()})]);
  const outcomes=parallel.map(item=>({status:item.response.status,error:item.value.error}));
  assert.equal(parallel.filter(item=>item.response.status===200).length,1,JSON.stringify(outcomes));assert.equal(parallel.filter(item=>item.value.error==='checkout_pending').length,1,JSON.stringify(outcomes));
  const first=parallel.find(item=>item.response.status===200);assert.equal(first.value.test,true);assert.equal(new URL(first.value.url).origin,'https://checkout.stripe.com');
  const retry=await call('checkout',input);assert.equal(retry.response.status,200);assert.equal(retry.value.url,first.value.url);
  const year=await call('checkout',{...input,interval:'year',attemptId:crypto.randomUUID(),languageId:'en'});assert.equal(year.response.status,200);assert.notEqual(year.value.url,first.value.url);
  const retained=await call('checkout',{...input,interval:'year',attemptId:crypto.randomUUID(),languageId:'en'});assert.equal(retained.value.url,year.value.url);
  const portal=await call('portal',{languageId:'no'});assert.equal(portal.response.status,200);assert.equal(new URL(portal.value.url).origin,'https://billing.stripe.com');
  checkoutVerified=true;
 }
 console.log(JSON.stringify({target:remote?'hosted':'local',accountAccess:true,unauthenticatedContentDenied:true,protectedSkill:true,protectedMastery:true,checkoutVerified,realPayments:0}));
}finally{await account.user.auth.signOut({scope:'local'});}

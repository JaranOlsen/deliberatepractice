import {aiTestAccount} from './ai-test-account.mjs';

// Reversible access fixture on the explicitly authorized fourth test account.
// No model calls, ratings or messages. Restore the original row in finally.
if(!process.argv.includes('--test-access'))throw Error('Use --test-access for the reversible dedicated-account access check');
const identity=await aiTestAccount(3),base=`${identity.url}/functions/v1/ai-practice`;
const saved=await identity.admin.from('ai_admin_access').select('*').eq('user_id',identity.userId).single();
if(saved.error||!saved.data)throw Error('Existing dedicated admin permission required');
let changed=false;
try {
  const removed=await identity.admin.from('ai_admin_access').delete().eq('user_id',identity.userId);
  if(removed.error)throw Error('Access fixture could not be prepared');changed=true;
  const access=await identity.user.rpc('get_ai_access');if(access.error||access.data!==false)throw Error('Permission revocation failed');
  const otherRows=await identity.user.from('ai_admin_access').select('*');if(otherRows.error||otherRows.data.length)throw Error('RLS leaked another admin permission');
  const restricted=await identity.user.rpc('reserve_ai_call',{input_user_id:identity.userId});if(!restricted.error)throw Error('Client invoked service-only budget');
  const checks=[];
  for(const action of ['status','assess','speech','transcribe','delivery']) {
    const response=await fetch(`${base}/${action}`,{method:action==='status'?'GET':'POST',headers:{Origin:'https://jaranolsen.github.io',apikey:identity.publicKey,Authorization:`Bearer ${identity.token}`,'Content-Type':'application/json'},...(action==='status'?{}:{body:'{}'})});
    const data=await response.json();if(response.status!==403||data.error!=='admin_required')throw Error(`Non-admin ${action} was not denied`);
    checks.push({action,status:response.status});
  }
  console.log(JSON.stringify({status:'passed',nonAdminChecks:checks,otherAdminRowsHidden:true,serviceRpcDenied:true,providerCalls:0}));
} finally {
  if(changed) {
    const restored=await identity.admin.from('ai_admin_access').upsert(saved.data);
    if(restored.error)throw Error('Dedicated test admin permission needs restoration');
    const access=await identity.user.rpc('get_ai_access');if(access.data!==true)throw Error('Restored permission could not be confirmed');
    console.log(JSON.stringify({adminPermissionRestored:true}));
  }
  await identity.user.auth.signOut({scope:'local'});
}

import {BillingError} from './billingService.js';

export function createPracticeContentService({manifest,banks,mastery,scopeFor}) {
 return async (user,input,authorization)=>{
  if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(key=>!['kind','languageId','skillId','exerciseId','roomId'].includes(key))
   ||!['skill','mastery'].includes(input.kind)||!['en','no'].includes(input.languageId))throw new BillingError('invalid_content');
  if(input.roomId&&!/^[0-9a-f-]{36}$/i.test(input.roomId))throw new BillingError('invalid_content');
  const scope=await scopeFor(input.roomId||null,authorization),room=scope.room;
  if(!scope.full_content&&!input.roomId)throw new BillingError('full_access_required',403);
  if(input.kind==='skill') {
   const bank=banks[`${input.languageId}:${input.skillId}`];if(!bank)throw new BillingError('invalid_content');
   let selected;
   if(scope.full_content)selected=bank;
   else if(room&&room.language_id===input.languageId&&room.skill_id===input.skillId&&bank[room.case_id]) {
    const entries=bank[room.case_id].filter(e=>room.statement_ids.includes(e.id));
    if(entries.length!==room.statement_ids.length)throw new BillingError('content_changed',409);
    selected={[room.case_id]:entries};
   }else throw new BillingError('full_access_required',403);
   return {protocol:'practice-content-v1',revision:manifest.CONTENT_REVISION,bank:selected};
  }
  const exercise=mastery[`${input.languageId}:${input.exerciseId}`];if(!exercise)throw new BillingError('invalid_content');
  const premium=manifest.cases[exercise.caseId]?.tier==='pro';
  if(premium&&!scope.full_content&&(!room||room.exercise_id!==exercise.id||room.language_id!==input.languageId
   ||exercise.scenes.some(scene=>!room.statement_ids.includes(scene.id))))throw new BillingError('full_access_required',403);
  return {protocol:'practice-content-v1',revision:manifest.CONTENT_REVISION,exercise};
 };
}

export function createContentScopeReader({url,publishableKey,fetcher=fetch}) {
 return async(roomId,authorization)=>{
  let response;try{response=await fetcher(`${url}/rest/v1/rpc/get_content_access`,{method:'POST',headers:{apikey:publishableKey,Authorization:authorization,'Content-Type':'application/json'},body:JSON.stringify({input_room_id:roomId}),signal:AbortSignal.timeout(10000)});}catch{throw new BillingError('access_unavailable',503);}
  if(!response.ok)throw new BillingError(response.status===401?'sign_in_required':'full_access_required',response.status===401?401:403);
  return response.json();
 };
}

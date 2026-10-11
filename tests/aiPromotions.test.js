import test from 'node:test';import assert from 'node:assert/strict';
import {createAiPromotions} from '../server/aiPromotions.js';
const user={id:'00000000-0000-4000-8000-000000000001',email:'fixture@example.invalid',email_confirmed_at:'2026-10-11'},now=Date.parse('2026-10-11T08:00:00Z');
const input={code:' dojo-sample123 ',label:'Sample',credits:120,maxUses:2,expiresAt:'2026-11-01T08:00:00Z',email:'TEST@example.invalid'};
test('AI access does not grant promotion management; only a separate verified role can issue credits',async()=>{
 let writes=0;const service=createAiPromotions({now:()=>now,store:{isAiAdmin:async()=>true,isPromoAdmin:async()=>false,createPromo:async()=>writes++}});
 await assert.rejects(service.create(user,input),/admin_required/);await assert.rejects(service.list(user),/admin_required/);await assert.rejects(service.disable(user,{id:user.id}),/admin_required/);assert.equal(writes,0);
});
test('promotion creation normalizes recipients and bounds credit exposure before writing',async()=>{
 let saved;const service=createAiPromotions({now:()=>now,store:{isPromoAdmin:async()=>true,createPromo:async(id,p)=>{saved=p;return{id};}}});
 const result=await service.create(user,input);assert.equal(result.code,'DOJO-SAMPLE123');assert.equal(saved.email,'test@example.invalid');
 for(const invalid of[{...input,credits:3601},{...input,maxUses:1001},{...input,credits:1.5},{...input,expiresAt:'2026-10-10'},{...input,email:'bad'},{...input,admin:true}])await assert.rejects(service.create(user,invalid));
});
test('redemption uses the Auth-verified owner and email, and exposes no recipient or inventory data',async()=>{
 let captured;const service=createAiPromotions({store:{redeemPromo:async(...args)=>{captured=args;return{state:'added',credits:120};}}});
 assert.equal((await service.redeem(user,{code:' dojo-sample123 '})).credits,120);assert.deepEqual(captured,[user.id,user.email,'DOJO-SAMPLE123']);
 await assert.rejects(service.redeem(user,{code:'DOJO-SAMPLE123',email:'other@example.invalid'}),/invalid_request/);
 await assert.rejects(service.redeem({...user,email_confirmed_at:null},{code:'DOJO-SAMPLE123'}),/sign_in_required/);
});

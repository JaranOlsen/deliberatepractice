import test from 'node:test';import assert from 'node:assert/strict';
import {createPracticeContentService} from '../server/practiceContentService.js';
const free=[{id:'free',text:'Free',suggestion:'Example'}],paid=[{id:'paid1',text:'Paid',suggestion:'Example'},{id:'paid2',text:'Paid',suggestion:'Example'}];
const catalog={manifest:{CONTENT_REVISION:'fixture',cases:{'case-free':{tier:'free'},'case-paid':{tier:'pro'}}},banks:{'en:skill':{'case-free':free,'case-paid':paid}},mastery:{'en:mastery':{id:'mastery',caseId:'case-paid',scenes:paid}}};
const reader=scope=>createPracticeContentService({...catalog,scopeFor:async()=>scope});
test('personal premium content requires server access, with no browser-provided entitlement accepted',async()=>{
 await assert.rejects(reader({full_content:false})({}, {kind:'skill',languageId:'en',skillId:'skill'},'fixture'),/full_access_required/);
 await assert.rejects(reader({full_content:true})({}, {kind:'skill',languageId:'en',skillId:'skill',full_content:true},'fixture'),/invalid_content/);
 assert.equal((await reader({full_content:true})({}, {kind:'skill',languageId:'en',skillId:'skill'},'fixture')).bank['case-paid'].length,2);
});
test('room guests receive only current material and cannot switch skills, language or exercise',async()=>{
 const scope={full_content:false,room:{language_id:'en',case_id:'case-paid',skill_id:'skill',exercise_id:'mastery',statement_ids:['paid1']}};
 const service=reader(scope),input={kind:'skill',languageId:'en',skillId:'skill',roomId:'73000000-0000-4000-8000-000000000001'};
 assert.deepEqual(Object.keys((await service({},input,'fixture')).bank),['case-paid']);assert.equal((await service({},input,'fixture')).bank['case-paid'].length,1);
 await assert.rejects(service({},{...input,languageId:'no'},'fixture'),/invalid_content|full_access_required/);
 await assert.rejects(service({},{kind:'mastery',languageId:'en',exerciseId:'mastery',roomId:input.roomId},'fixture'),/full_access_required/);
});

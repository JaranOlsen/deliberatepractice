import test from 'node:test';import assert from 'node:assert/strict';
import {createAiPracticeStore,groupAiHistory,DEFAULT_AI_OPTIONS} from '../src/js/aiPracticeState.js';
import {AI_PROTOCOL} from '../src/js/aiPracticeProtocol.js';import {aiAttemptCredits} from '../src/js/aiPracticeOptions.js';import {aiUsageCost} from '../server/aiUsageCost.js';
const uid='90000000-0000-4000-8000-000000000001',other='90000000-0000-4000-8000-000000000002';
const round=()=>({protocol:AI_PROTOCOL,roundId:uid,skillId:'empathic-understanding',caseId:'case-sara',languageId:'en',difficulty:'easy',index:0,options:{...DEFAULT_AI_OPTIONS},items:Array.from({length:12},(_,i)=>({statement:{id:'item-'+i,text:'Canonical material'},skipped:false})),mode:'live'});
const assessment={source:'ai',attemptId:other,result:{assessable:true,score:4,evidence:['private words'],strength:'Specific strength.',adjustment:'One change.',limitation:''},text:'private words'};
function fixture(){const values=new Map();let owner=uid;const storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v),removeItem:k=>values.delete(k)};return {store:createAiPracticeStore({getOwner:()=>owner,storage,now:()=>1000000000}),values,change:id=>owner=id};}
test('resume retains identity, feedback and request ID; a different account cannot read it',()=>{
 const f=fixture(),r=round();r.items[0].first=assessment;f.store.save({round:r,phase:'first-feedback',draft:'draft',attemptId:other,attemptText:'draft'});const saved=f.store.read();
 assert.equal(saved.round.roundId,uid);assert.equal(saved.round.items[0].statementId,'item-0');assert.equal(saved.round.items[0].statement,undefined);assert.equal(saved.round.items[0].first.result.score,4);assert.equal(saved.draft,'draft');assert.equal(saved.attemptId,other);
 f.change(other);assert.equal(f.store.read(),null);f.change(uid);assert.ok(f.store.read());f.store.clear();assert.equal(f.store.read(),null);
});
test('written retention opt-out removes drafts, responses and quotation evidence, preserving feedback',()=>{
 const f=fixture(),r=round();r.options.keepWritten=false;r.items[0].first=assessment;f.store.save({round:r,phase:'first-feedback',draft:'private draft',attemptText:'private attempt'});const saved=f.store.read();
 assert.equal(saved.draft,'');assert.equal(saved.round.items[0].first.text,undefined);assert.deepEqual(saved.round.items[0].first.result.evidence,[]);assert.equal(saved.round.items[0].first.result.strength,'Specific strength.');
});
test('history separates first and coached performance and ignores invented assessment kinds',()=>{
 const b={round_id:uid,skill_id:'empathic-understanding',case_id:'case-sara',language_id:'en',difficulty:'easy',assessable:true,created_at:'2026-10-10T12:00Z',strength:'One strength.',adjustment:'One target.'};
 const g=groupAiHistory([{...b,statement_id:'one',kind:'first',score:3},{...b,statement_id:'one',kind:'retry',score:5},{...b,statement_id:'two',kind:'first',score:4},{...b,statement_id:'three',kind:'invented',score:5}]);
 assert.equal(g.length,1);assert.equal(g[0].summary.firstScore,3.5);assert.equal(g[0].summary.retryScore,5);assert.equal(g[0].summary.firstCount,2);
});
test('attempt budget preserves approved per-action prices',()=>{assert.equal(aiAttemptCredits({inputMode:'spoken',delivery:true,voices:true}),7);assert.equal(aiAttemptCredits({inputMode:'spoken',delivery:true,voices:true},false,true),6);assert.equal(aiAttemptCredits({inputMode:'written',voices:false}),1);assert.equal(aiAttemptCredits({inputMode:'spoken',delivery:true,voices:true},true),4);});
test('cost calculation matches measured provider usage and marks speech estimates',()=>{
 assert.equal(aiUsageCost({action:'assess',model:'gpt-6.1-sol',usage:{input_tokens:970,output_tokens:162}}).cost_usd,.00356);
 assert.equal(aiUsageCost({action:'delivery',model:'gpt-audio-1.5',usage:{prompt_tokens:842,completion_tokens:138,prompt_tokens_details:{audio_tokens:44}}}).cost_usd,.004783);
 assert.equal(aiUsageCost({action:'transcribe',model:'gpt-transcribe',usage:{type:'duration',seconds:5}}).cost_usd,.000375);assert.equal(aiUsageCost({action:'speech_client',model:'gpt-4o-mini-tts',characters:300}).estimated,true);
 assert.equal(aiUsageCost({action:'assess',model:'unknown',usage:{input_tokens:100,output_tokens:100}}).cost_usd,null);
});

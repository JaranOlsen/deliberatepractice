import test from 'node:test';
import assert from 'node:assert/strict';
import {encodePracticeWav,practiceAudioMetrics,validateDelivery,AI_DELIVERY_VERSION} from '../src/js/aiPracticeDelivery.js';
import {createAiService} from '../server/aiPracticeService.js';
import {createPilotHandler} from '../server/aiPracticeHttp.js';
import {createAdminAuthorizer,createHostedStore} from '../server/aiPracticeHosted.js';
import {AI_PROTOCOL} from '../src/js/aiPracticeProtocol.js';
import {createAiPracticeApi} from '../src/js/aiPracticeApi.js';

const owner='11111111-1111-4111-8111-111111111111',other='22222222-2222-4222-8222-222222222222';
const attempt={protocol:AI_PROTOCOL,attemptId:owner,kind:'first',languageId:'en',skillId:'empathic-understanding',caseId:'case-sara',difficulty:'easy',statementId:'test-item',revision:'test',text:'You miss him after holding it together.'};
const context={revision:'test',statement:'[Tearful] I held it together, then cried in the car.',case:{id:'case-sara',style:'Quiet'},skill:{name:'Empathic understanding'},difficulty:'easy'};
const result={audibility:'clear',observations:[{dimension:'pace',description:'The phrase is spoken without a pause.'}],strength:'Your ending is audible.',adjustment:'Try a short pause before the second part.',limitation:'This is one isolated clip.'};
const wav=()=>new Blob([encodePracticeWav(new Float32Array(16000*3).fill(.15),16000)],{type:'audio/wav'});
const provider=async(url,init)=>url.endsWith('/responses')?Response.json({status:'completed',model:'wording-model',output:[{content:[{type:'output_text',text:JSON.stringify({assessable:true,score:4,evidence:['You miss him'],strength:'You reflected the missing him.',adjustment:'Allow room for correction.',limitation:''})}]}]}):Response.json({model:'audio-model',choices:[{finish_reason:'stop',message:{tool_calls:[{function:{name:'describe_delivery',arguments:JSON.stringify(result)}}]}}]});
const service=options=>createAiService({apiKey:'fictional-key',enabled:true,loadContext:()=>context,fetcher:provider,...options});

test('WAV preparation bounds duration and derives duration/rate from actual mono PCM bytes',()=>{
  const bytes=encodePracticeWav(new Float32Array(48000*3).fill(.5),48000);
  assert.equal(bytes.length,96044);assert.deepEqual(practiceAudioMetrics(bytes,'One two three four five six'),{durationSeconds:3,wordsPerMinute:120,estimatedFromTranscript:true});
  for(const damaged of [new Uint8Array(3),bytes.slice(0,-2),new Uint8Array(bytes).fill(0,24,28)])assert.throws(()=>practiceAudioMetrics(damaged,'words'));
  assert.throws(()=>encodePracticeWav(new Float32Array(16000*91),16000));
});
test('delivery output is qualitative and rejects malformed or score-bearing results',()=>{
  assert.equal(validateDelivery(result),result);
  for(const invalid of [{...result,score:5},{...result,observations:[{dimension:'authenticity',description:'Sincere'}]},
    {...result,audibility:'clear',strength:''},{...result,observations:Array(3).fill(result.observations[0])}])assert.throws(()=>validateDelivery(invalid));
});
test('audio review uses audio itself, measured grounding and canonical context without changing the wording score',async()=>{
  const sent=[];const pilot=service({fetcher:async(url,init)=>{sent.push({url,body:JSON.parse(init.body)});return provider(url,init);}});
  const first=await pilot.assess(attempt,owner);const note=await pilot.delivery(attempt, wav(),owner);
  assert.equal(first.result.score,4);assert.equal(note.version,AI_DELIVERY_VERSION);assert.equal(note.model,'audio-model');assert.ok(!('score' in note.result));
  assert.equal(sent[1].body.messages[1].content[1].type,'input_audio');assert.equal(sent[1].body.store,false);
  assert.match(sent[1].body.messages[0].content,/Never infer authenticity/);assert.match(sent[1].body.messages[1].content[0].text,/durationSeconds/);
  assert.deepEqual(await pilot.delivery(attempt,wav(),owner),note);assert.equal(sent.length,2);
});
test('delivery cannot review another owner’s attempt, changed wording or unsupported recordings',async()=>{
  let calls=0;const pilot=service({fetcher:async(...args)=>{calls++;return provider(...args);}});await pilot.assess(attempt,owner);
  await assert.rejects(pilot.delivery(attempt,wav(),other),/assessment_expired/);
  await assert.rejects(pilot.delivery({...attempt,text:'Different response'},wav(),owner),/attempt_conflict/);
  await assert.rejects(pilot.delivery(attempt,new Blob(['small'],{type:'audio/webm'}),owner),/invalid_audio/);
  await assert.rejects(pilot.speech({role:'supervisor',attemptId:owner},other),/assessment_expired/);assert.equal(calls,1);
});
test('audio reviewer accepts a validated JSON fallback and still rejects unsupported observations',async()=>{
  const pilot=service({fetcher:async(url,init)=>url.endsWith('/responses')?provider(url,init):Response.json({model:'audio-model',choices:[{finish_reason:'stop',message:{content:'```json\n'+JSON.stringify(result)+'\n```'}}]})});
  await pilot.assess(attempt,owner);assert.deepEqual((await pilot.delivery(attempt,wav(),owner)).result,result);
});
test('a missing optional audio caveat gets a factual fallback without inventing observations',async()=>{
  const {limitation,...withoutCaveat}=result;
  const pilot=service({fetcher:async(url,init)=>url.endsWith('/responses')?provider(url,init):Response.json({model:'audio-model',choices:[{finish_reason:'stop',message:{tool_calls:[{function:{name:'describe_delivery',arguments:JSON.stringify(withoutCaveat)}}]}}]})});
  await pilot.assess(attempt,owner);const note=await pilot.delivery(attempt,wav(),owner);
  assert.deepEqual(note.result.observations,result.observations);assert.match(note.result.limitation,/isolated recording/);
});
test('hosted results survive another isolate and cross-owner IDs remain independent',async()=>{
  const rows=new Map();let calls=0,reservations=0;
  const store={reserve:async()=>{reservations++;},begin:async(user,id,action,signature)=>{
    const key=`${user}:${id}:${action}`,old=rows.get(key);if(old){if(old.signature!==signature)throw Error('attempt_conflict');return old.result?{state:'complete',result:old.result}:{state:'pending'};}
    rows.set(key,{signature});return {state:'acquired',lease:'lease'};
  },complete:async(user,id,action,lease,result)=>{rows.get(`${user}:${id}:${action}`).result=result;},
  abort:async(user,id,action)=>rows.delete(`${user}:${id}:${action}`),read:async(user,id,action)=>rows.get(`${user}:${id}:${action}`)?.result};
  const options={attemptStore:store,fetcher:async(...args)=>{calls++;return provider(...args);}};
  const first=await service(options).assess(attempt,owner),second=await service(options).assess(attempt,owner);
  assert.deepEqual(first,second);assert.equal(calls,1);assert.equal(reservations,1);
  const note=await service(options).delivery(attempt,wav(),owner);assert.equal(note.result.audibility,'clear');
  await assert.rejects(service(options).speech({role:'supervisor',attemptId:owner},other),/assessment_expired/);
  await service(options).assess(attempt,other);assert.equal(calls,3);
});
test('admin authorization checks Auth identity and current database permission, not browser metadata',async()=>{
  let checked=0;
  const authorize=createAdminAuthorizer({url:'https://fixture.invalid',publishableKey:'fixture',fetcher:async(url)=>{
    checked++;return Response.json(url.endsWith('/user')?{id:owner,user_metadata:{role:'admin'}}:false);
  }});
  await assert.rejects(authorize(new Request('https://fixture.invalid')),/sign_in_required/);assert.equal(checked,0);
  await assert.rejects(authorize(new Request('https://fixture.invalid',{headers:{authorization:'Bearer fictional'}})),/admin_required/);assert.equal(checked,2);
});
test('every hosted endpoint rejects non-admins before parsing input or invoking providers',async()=>{
  let calls=0;const handler=createPilotHandler(service({fetcher:async()=>{calls++;}}),{authorize:createAdminAuthorizer({url:'https://fixture.invalid',publishableKey:'fixture',fetcher:async(url)=>Response.json(url.endsWith('/user')?{id:owner}:false)})});
  for(const action of ['status','assess','transcribe','speech','delivery']) {
    const response=await handler(new Request(`http://localhost/api/ai-practice/${action}`,{method:action==='status'?'GET':'POST',headers:{origin:'http://localhost:5173',authorization:'Bearer fictional'}}));
    assert.equal(response.status,403);assert.deepEqual(await response.json(),{error:'admin_required'});
  }
  assert.equal(calls,0);
});
test('authenticated transport attaches the current token and rejects mismatched delivery identity',async()=>{
  let token='token-one',headers;const api=createAiPracticeApi({getAccessToken:async()=>token,publishableKey:'public-fixture',fetcher:async(url,init)=>{
    headers=init.headers;return Response.json({protocol:AI_PROTOCOL,attemptId:other,version:AI_DELIVERY_VERSION,model:'audio',result,metrics:{durationSeconds:3,wordsPerMinute:120,estimatedFromTranscript:true}});
  }});
  await assert.rejects(api.delivery(attempt,wav()),/delivery_unavailable/);assert.equal(headers.Authorization,'Bearer token-one');
  token=null;await assert.rejects(api.delivery(attempt,wav()),/sign_in_required/);
});
test('hosted storage accepts empty successful bodies for void RPCs',async()=>{
  const store=createHostedStore({url:'https://fixture.invalid',secretKey:'fixture',fetcher:async()=>new Response(null,{status:200})});
  assert.equal(await store.reserve(owner),null);
  assert.equal(await store.abort(owner,owner,'assess','lease'),null);
});

test('persisted rounds bind delivery review to the same round and history choice',async()=>{
 const pilot=service();const linked={...attempt,roundId:other,saveHistory:true};await pilot.assess(linked,owner);
 const note=await pilot.delivery(linked,wav(),owner);assert.equal(note.result.audibility,'clear');
 await assert.rejects(pilot.delivery({...linked,roundId:owner},wav(),owner),/attempt_conflict/);
});

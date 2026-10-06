import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {aiTestAccount} from './ai-test-account.mjs';
import {AI_PROTOCOL,validateAssessment} from '../src/js/aiPracticeProtocol.js';
import {encodePracticeWav,validateDelivery} from '../src/js/aiPracticeDelivery.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';

// Explicitly enabled fictional speech only; seven provider calls maximum.
if(!process.argv.includes('--live'))throw Error('Use --live for up to seven paid provider calls');
const base=process.env.AI_PRACTICE_SMOKE_BASE||'http://127.0.0.1:5555/api/ai-practice';
if(!['http://127.0.0.1:5555/api/ai-practice','https://kpzmjnwwbxweevloiqiy.supabase.co/functions/v1/ai-practice'].includes(base))throw Error('Known service only');
const origin=base.startsWith('https:')?'https://jaranolsen.github.io':'http://127.0.0.1:5173';
const identity=await aiTestAccount(),catalog=await loadPilotCatalog(),checks=[];let requestsAttempted=0;
async function call(action,body,authorized=true) {
  const response=await fetch(`${base}/${action}`,{method:body?'POST':'GET',headers:{Origin:origin,apikey:identity.publicKey,
    ...(authorized?{Authorization:`Bearer ${identity.token}`}:{Authorization:'Bearer invalid-fixture'}),
    ...(body&&!(body instanceof FormData)?{'Content-Type':'application/json'}:{})},
    ...(body?{body:body instanceof FormData?body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(65000)});
  return response;
}
async function successful(action,body) {
  const response=await call(action,body);if(!response.ok){let code;try{code=(await response.json()).error;}catch{}throw Error(`${action}: ${code||'request_failed'} (${response.status})`);}return response;
}
const directory=new URL('../output/playwright/ai-admin-live/',import.meta.url);await mkdir(directory,{recursive:true});
try {
  const status=await(await successful('status')).json();
  checks.push({step:'status',...status});
  if(status.mode!=='live')throw Error('Configure the OpenAI server secret before live checks');
  for(const action of ['status','assess','speech','transcribe','delivery']) {
    const response=await call(action,action==='status'?undefined:{},false);
    if(response.status!==401)throw Error('Invalid sign-in was not rejected');
  }
  checks.push({step:'allEndpointsRequireValidSignIn',passed:true});
  const context=catalog('en','empathic-understanding','dp_empathic-understanding_case-sara_01');
  let first;
  for(const sample of ['measured','brisk']) {
    const value={protocol:AI_PROTOCOL,attemptId:crypto.randomUUID(),kind:'first',languageId:'en',skillId:'empathic-understanding',caseId:context.case.id,difficulty:context.difficulty,
      statementId:'dp_empathic-understanding_case-sara_01',revision:context.revision,text:'You got through the workday, and then the pain of missing him caught up with you.'};
    requestsAttempted++;const result=await(await successful('assess',value)).json();validateAssessment(result.result,value.text);
    const original=await readFile(new URL(`../output/playwright/ai-delivery-research/${sample}-controlled.wav`,import.meta.url));
    const converted=spawnSync('ffmpeg',['-loglevel','error','-i','pipe:0','-ac','1','-ar','16000','-f','f32le','pipe:1'],{input:original,maxBuffer:10000000});
    if(converted.status!==0)throw Error('Synthetic speech conversion failed');
    const pcm=new Float32Array(converted.stdout.buffer.slice(converted.stdout.byteOffset,converted.stdout.byteOffset+converted.stdout.length));
    const wav=encodePracticeWav(pcm,16000),form=new FormData();form.append('file',new Blob([wav],{type:'audio/wav'}),'synthetic-attempt.wav');form.append('attempt',JSON.stringify(value));
    requestsAttempted++;const delivery=await(await successful('delivery',form)).json();validateDelivery(delivery.result);
    if(delivery.attemptId!==value.attemptId||'score'in delivery.result)throw Error('Delivery identity/score mismatch');
    const replay=await(await successful('assess',value)).json();assert.deepEqual(replay,result,'Completed attempt retry changed feedback');
    checks.push({step:'syntheticSpeechReview',sample,wordingScore:result.result.score,wordingModel:result.model,deliveryModel:delivery.model,metrics:delivery.metrics,feedback:delivery.result});
    first??={value,result};
  }
  let client;
  for(const role of ['client','supervisor']) {
    const value=first.value,payload=role==='client'?{role,languageId:value.languageId,skillId:value.skillId,caseId:value.caseId,difficulty:value.difficulty,statementId:value.statementId,revision:value.revision}:{role,attemptId:value.attemptId,includeDelivery:true};
    requestsAttempted++;const blob=await(await successful('speech',payload)).blob();
    if(blob.size<100||!blob.type.includes('audio/'))throw Error('Speech response invalid');
    if(role==='client')client=blob;checks.push({step:'speech',role,bytes:blob.size});
  }
  const form=new FormData();form.append('file',client,'synthetic-client.mp3');form.append('languageId','en');
  requestsAttempted++;const transcription=await(await successful('transcribe',form)).json();if(!transcription.text?.trim())throw Error('No transcript');
  checks.push({step:'transcription',text:transcription.text});
  const report={status:'passed',hosted:base.startsWith('https:'),requestsAttempted,checks};
  await writeFile(new URL(base.startsWith('https:')?'hosted-report.json':'local-report.json',directory),JSON.stringify(report,null,2),{mode:0o600});console.log(JSON.stringify(report,null,2));
} catch(error) {console.error(JSON.stringify({status:'failed',requestsAttempted,checks,error:error.message}));process.exitCode=1;}
finally{await identity.user.auth.signOut({scope:'local'});}

import assert from 'node:assert/strict';
import {aiTestAccount} from './ai-test-account.mjs';
import {createAiService} from '../server/aiPracticeService.js';
import {createHostedStore,createAdminAuthorizer} from '../server/aiPracticeHosted.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';
import {encodePracticeWav} from '../src/js/aiPracticeDelivery.js';

// Real Supabase authorization/storage, mocked models. Only short-lived synthetic
// cache rows and two usage reservations; no OpenAI calls or progress ratings.
if(!process.argv.includes('--test-store'))throw Error('Use --test-store for the dedicated-account cache fixture');
const identity=await aiTestAccount(),id=crypto.randomUUID();let modelCalls=0;
try {
  const authorize=createAdminAuthorizer({url:identity.url,publishableKey:identity.publicKey});
  const owner=await authorize(new Request(`${identity.url}/functions/v1/ai-practice/status`,{headers:{Authorization:`Bearer ${identity.token}`}}));
  const loadContext=await loadPilotCatalog(),context=loadContext('en','empathic-understanding','dp_empathic-understanding_case-sara_01');
  const attempt={protocol:'ai-practice-pilot-v1',attemptId:id,kind:'first',languageId:'en',skillId:'empathic-understanding',caseId:context.case.id,difficulty:context.difficulty,
    statementId:'dp_empathic-understanding_case-sara_01',revision:context.revision,text:'You miss him after holding it together.'};
  const feedback={audibility:'clear',observations:[{dimension:'pace',description:'Synthetic storage fixture.'}],strength:'Synthetic strength.',adjustment:'Synthetic adjustment.',limitation:'This tests storage, not audio quality.'};
  const attemptStore=createHostedStore({url:identity.url,secretKey:process.env.SUPABASE_SECRET_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY});
  const options={apiKey:'mock-model-only',enabled:true,loadContext,attemptStore,fetcher:async url=>{
    modelCalls++;return url.endsWith('/responses')?Response.json({status:'completed',model:'mock-wording',output:[{content:[{type:'output_text',text:JSON.stringify({assessable:true,score:4,evidence:['You miss him'],strength:'Synthetic strength.',adjustment:'Synthetic adjustment.',limitation:''})}]}]}):Response.json({model:'mock-audio',choices:[{finish_reason:'stop',message:{tool_calls:[{function:{name:'describe_delivery',arguments:JSON.stringify(feedback)}}]}}]});
  }};
  const first=await createAiService(options).assess(attempt,owner);
  assert.deepEqual(await createAiService(options).assess(attempt,owner),first);
  const wav=new Blob([encodePracticeWav(new Float32Array(48000).fill(.1),16000)],{type:'audio/wav'});
  const delivery=await createAiService(options).delivery(attempt,wav,owner);
  assert.deepEqual(await createAiService(options).delivery(attempt,wav,owner),delivery);
  await assert.rejects(createAiService(options).assess({...attempt,text:'Changed response'},owner),/attempt_conflict/);
  assert.equal(modelCalls,2);
  console.log(JSON.stringify({status:'passed',realAdminVerification:true,durableWordingReplay:true,durableAudioReplay:true,changedAttemptRejected:true,mockedModelCalls:modelCalls,openAiCalls:0}));
} finally {
  const cleared=await identity.admin.from('ai_attempt_cache').delete().eq('user_id',identity.userId).eq('attempt_id',id);
  if(cleared.error)throw Error('Synthetic cache fixture cleanup failed');
  await identity.user.auth.signOut({scope:'local'});
}

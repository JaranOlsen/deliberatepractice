import assert from 'node:assert/strict';import {readFile,writeFile} from 'node:fs/promises';import {spawnSync} from 'node:child_process';
import {createAiService} from '../server/aiPracticeService.js';import {loadPilotCatalog} from '../server/aiPracticeContent.js';import {encodePracticeWav} from '../src/js/aiPracticeDelivery.js';
// Four bounded provider calls, previously generated fictional speech only.
// No account, progress history, email or payment is used.
if(!process.argv.includes('--live')||!process.env.OPENAI_API_KEY)throw Error('Explicit --live and the existing local AI key are required');
const catalog=await loadPilotCatalog(),context=catalog('en','empathic-understanding','dp_empathic-understanding_case-sara_01'),checks=[];
const service=createAiService({apiKey:process.env.OPENAI_API_KEY,enabled:true,loadContext:catalog,maxCalls:4});
for(const sample of ['measured','brisk']){
 const source=await readFile(new URL(`../output/playwright/ai-delivery-research/${sample}-controlled.wav`,import.meta.url));
 const decoded=spawnSync('ffmpeg',['-loglevel','error','-i','pipe:0','-ac','1','-ar','16000','-f','f32le','pipe:1'],{input:source,maxBuffer:10000000});if(decoded.status!==0)throw Error('Synthetic sample conversion failed');
 const pcm=new Float32Array(decoded.stdout.buffer.slice(decoded.stdout.byteOffset,decoded.stdout.byteOffset+decoded.stdout.length)),file=new Blob([encodePracticeWav(pcm,16000)],{type:'audio/wav'});
 const value={protocol:'ai-practice-pilot-v1',attemptId:crypto.randomUUID(),kind:'first',languageId:'en',skillId:'empathic-understanding',caseId:context.case.id,difficulty:context.difficulty,statementId:'dp_empathic-understanding_case-sara_01',revision:context.revision,text:'You got through the workday, and then the pain of missing him caught up with you.'};
 await service.assess(value,'synthetic');const result=await service.delivery(value,file,'synthetic');assert.equal(result.version,'delivery-observations-v2');assert.ok(!('score'in result.result));
 for(const o of result.result.observations)if(o.anchor)assert.ok(value.text.includes(o.anchor));
 checks.push({sample,metrics:result.metrics,model:result.model,result:result.result});
}
const report={passed:true,providerCalls:4,syntheticOnly:true,checks};await writeFile(new URL('../output/playwright/ai-delivery-focus.json',import.meta.url),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {TASK_EXERCISES} from '../src/data/taskExercises.js';
import {validTaskStructure,passTaskEpisode} from '../src/js/taskProtocol.js';
import {validateMasterySession} from '../src/js/masteryProtocol.js';
import {summarizeRatings} from '../src/js/practiceProgress.js';
import {SKILL_ORDER} from '../src/data/index.js';
const e=TASK_EXERCISES[0],meta={...e,sceneIds:e.scenes.map(s=>s.id)};
const saved={version:4,exerciseType:'mastery',exerciseFormat:'task-episodes',exerciseId:e.id,revision:e.revision,caseId:e.caseId,difficulty:e.difficulty,languageId:'en',practiceMode:'shared',roundId:'a64c897a-dba9-4d48-86bd-55a07e4155b4',phase:'practicing',index:4,sceneIds:meta.sceneIds,completedIds:meta.sceneIds.slice(0,4),skippedIds:[]};
test('task episodes have explicit positions, complete bilingual turns and a distinct integrated target',()=>{
 assert.ok(validTaskStructure(e));assert.equal(e.reviewStatus,'pending');assert.ok(e.guide.en&&e.guide.no);
 for(const language of ['en','no']){
  const runtime=JSON.parse(readFileSync(new URL(`../src/data/runtime/mastery/${language}-${e.id}.json`,import.meta.url),'utf8'));
  assert.ok(validTaskStructure(runtime));assert.equal(runtime.feedback.middle,e.feedback[language].middle);
  for(const [i,scene] of e.scenes.entries()){
   assert.ok(SKILL_ORDER.includes(scene.skillId));assert.equal(runtime.scenes[i].text,scene[language].text);assert.equal(runtime.scenes[i].suggestion,scene[language].suggestion);
   assert.ok(['bridge','prompt','text','suggestion'].every(k=>scene[language][k].length>15));
  }
 }
 assert.equal(validTaskStructure({...e,episodes:[...e.episodes].reverse()}),false);
 assert.equal(validTaskStructure({...e,scenes:e.scenes.map((s,i)=>i===1?{...s,position:'therapist'}:s)}),false);
});
test('passing a begun episode excludes every turn and survives resume without rating partial episodes',()=>{
 assert.ok(validateMasterySession(saved,[meta]));
 const passed=passTaskEpisode(saved,e);
 assert.equal(passed.index,5);assert.equal(passed.phase,'rating');assert.deepEqual(passed.completedIds,meta.sceneIds.slice(0,3));assert.deepEqual(passed.skippedIds,meta.sceneIds.slice(3,6));
 assert.ok(validateMasterySession(passed,[{...meta,scenes:undefined}]));
 assert.equal(validateMasterySession({...passed,completedIds:meta.sceneIds.slice(0,4),skippedIds:meta.sceneIds.slice(4,6)},[meta]),false);
 assert.equal(validateMasterySession({...saved,exerciseFormat:undefined},[meta]),false);
 assert.equal(validateMasterySession({...saved,index:1,phase:'preparation',completedIds:[],skippedIds:[]},[meta]),false);
 assert.equal(summarizeRatings([{exercise_id:e.id,exercise_format:'task-episodes',score:4}],SKILL_ORDER).overall.ratingCount,0);
});

import {createHash} from 'node:crypto';
import {CANONICAL_SKILL_ORDER} from '../src/data/contentMeta.js';
import {V3_CORE_RUNTIME_DIGEST} from '../src/data/contentCompatibility.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {MASTERY_EXERCISES} from '../src/data/masteryExercises.js';
import {EXTENSION_SKILL_ORDER} from '../src/data/skillExtensions.js';
import {BASE_PRACTICE,CASE_ORDER,SKILL_ORDER} from '../src/data/index.js';
import {getSkillFeedback} from '../src/data/skillFeedback.js';
import {validateMasterySession} from '../src/js/masteryProtocol.js';
import {summarizeMasteryRounds} from '../src/js/masteryProgress.js';
import {summarizeRatings} from '../src/js/practiceProgress.js';
const read=name=>JSON.parse(readFileSync(new URL('../src/data/runtime/'+name,import.meta.url),'utf8'));
const catalog=read('manifest.json').EXERCISE_CATALOG;
test('partial skill availability advertises only complete bilingual banks with coaching references',()=>{
 for(const id of EXTENSION_SKILL_ORDER){
  assert.deepEqual(CASE_ORDER[id],['case-sara']);assert.equal(BASE_PRACTICE[id].cases['case-sara'].statements.length,12);
  for(const lang of ['en','no']){
   assert.equal(read(`statements/${lang}-${id}.json`)['case-sara'].length,12);
   const feedback=getSkillFeedback(id,lang);assert.equal(feedback.cues.length,2);assert.equal(feedback.selfCues.length,2);assert.ok(feedback.middle&&feedback.high);
  }
 }
});
test('mastery runtime preserves authored ordering, bilingual prompts and exact per-scene skills',()=>{
 for(const exercise of MASTERY_EXERCISES){
  assert.equal(exercise.scenes.length,12);assert.equal(new Set(exercise.scenes.map(e=>e.id)).size,12);
  assert.equal(new Set(exercise.scenes.map(e=>e.skillId)).size,11);
  for(const lang of ['en','no']){
   const runtime=read(`mastery/${lang}-${exercise.id}.json`);
   assert.deepEqual(runtime.scenes,exercise.scenes.map(({en,no,...scene})=>({...scene,...{en,no}[lang]})));
   for(const scene of runtime.scenes){assert.ok(SKILL_ORDER.includes(scene.skillId));assert.ok(scene.prompt&&scene.text&&scene.suggestion&&scene.bridge);assert.ok(getSkillFeedback(scene.skillId,lang));}
  }
  assert.deepEqual(catalog.find(e=>e.id===exercise.id).sceneIds,exercise.scenes.map(e=>e.id));
 }
});
const saved={version:4,exerciseType:'mastery',exerciseId:catalog[0].id,revision:catalog[0].revision,caseId:'case-sara',difficulty:'easy',languageId:'no',practiceMode:'shared',phase:'practicing',index:4,roundId:'a64c897a-dba9-4d48-86bd-55a07e4155b4',sceneIds:catalog[0].sceneIds,completedIds:catalog[0].sceneIds.slice(0,3),skippedIds:[catalog[0].sceneIds[3]]};
test('resume pins ordered content, exact position, supported level and resolution without duplication',()=>{
 assert.ok(validateMasterySession(saved,catalog));
 for(const patch of [{revision:'old'},{sceneIds:[...saved.sceneIds].reverse()},{difficulty:'hard'},{index:5},{completedIds:[...saved.completedIds,saved.completedIds[0]]},{skippedIds:[saved.sceneIds[1]]},{phase:'rating'}])assert.equal(validateMasterySession({...saved,...patch},catalog),false);
 assert.ok(validateMasterySession({...saved,index:5,phase:'rating',completedIds:saved.sceneIds.slice(0,6),skippedIds:[]},catalog));
});
const record=(set,score,count=3,source='self')=>({id:'rating'+set,source,parent_round_id:'round',exercise_id:catalog[0].id,content_revision:catalog[0].revision,language_id:'en',case_id:'case-sara',difficulty:'easy',set_number:set,item_count:count,score,created_at:'2026-10-04T10:00:00Z'});
test('mastery history weights practiced items, separates sources, shows partial rounds and ignores duplicate checkpoints',()=>{
 const rows=[record(1,4),record(2,2,1),record(2,2,1),record(3,5,3,'observer'),record(4,0)];
 const rounds=summarizeMasteryRounds(rows,'self');assert.equal(rounds.length,1);assert.equal(rounds[0].checkpointCount,2);assert.equal(rounds[0].itemCount,4);assert.equal(rounds[0].score,3.5);
 assert.equal(summarizeMasteryRounds(rows,'observer')[0].score,5);
 assert.equal(summarizeRatings(rows,SKILL_ORDER).overall.count,0);
});

test('the v3 room compatibility exception is valid only while every core item stays identical',()=>{
 const entries=[];
 for(const language of ['en','no'])for(const skill of CANONICAL_SKILL_ORDER)
  for(const [caseId,rows] of Object.entries(read(`statements/${language}-${skill}.json`)))
   for(const {revision,...entry} of rows)entries.push({language,skill,caseId,...entry});
 assert.equal(createHash('sha256').update(JSON.stringify(entries)).digest('hex'),V3_CORE_RUNTIME_DIGEST,
  'Core content changed: remove the v3 compatibility exception or retain the old bank for active rooms.');
});

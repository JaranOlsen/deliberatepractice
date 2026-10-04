import test from 'node:test';
import assert from 'node:assert/strict';
import {ARNE_LEVELS,ARNE_SKILLS,ARNE_CASE} from '../src/data/arneCase.js';
import {ARNE_BANKS,ARNE_STATEMENTS,ARNE_TRANSLATIONS} from '../src/data/arneContent.js';
import {ARNE_MASTERY} from '../src/data/arneMastery.js';
import {BASE_PRACTICE,CASE_ORDER} from '../src/data/index.js';
import {resolveCaseLevel,levelLabel} from '../src/js/practiceLevels.js';

test('level selection remembers only supported choices and does not carry levels into fixed cases',()=>{
 assert.equal(resolveCaseLevel(ARNE_CASE,null), 'easy');
 assert.equal(resolveCaseLevel(ARNE_CASE,null,{'case-arne':'hard'}),'hard');
 assert.equal(resolveCaseLevel(ARNE_CASE,'moderate',{'case-arne':'hard'}),'moderate');
 assert.equal(resolveCaseLevel(ARNE_CASE,'unknown',{'case-arne':'invalid'}),'easy');
 assert.equal(resolveCaseLevel({id:'case-sara',difficulty:'easy'},'hard',{'case-sara':'hard'}),'easy');
 assert.equal(levelLabel('no','moderate'),'Moderat');assert.equal(levelLabel('no','hard'),'Vanskelig');
});
test('Arne has exactly 396 distinct bilingual focused pairs with level-specific stable identities',()=>{
 const ids=new Set();let count=0;
 for(const skill of ARNE_SKILLS){
  const items=ARNE_STATEMENTS[skill]['case-arne'];assert.equal(items.length,36);
  assert.deepEqual(BASE_PRACTICE[skill].cases['case-arne'].supportedLevels,ARNE_LEVELS);
  for(const level of ARNE_LEVELS){
   const rows=ARNE_BANKS[level][skill];assert.equal(rows.length,12);assert.equal(new Set(rows.map(r=>r[0])).size,12);
   const source=BASE_PRACTICE[skill].cases['case-arne'].statements.filter(e=>e.difficultyTier===level);assert.equal(source.length,12);
   for(const [index,row] of rows.entries()){
    assert.equal(row.length,4);assert.ok(row.every(s=>typeof s==='string'&&s.trim()===s&&s.length>10));
    const item=items.filter(i=>i.difficulty===level)[index];assert.ok(item.id.includes(`_${level}_`));assert.ok(!ids.has(item.id));ids.add(item.id);
    assert.deepEqual(ARNE_TRANSLATIONS[item.id],{text:row[2],suggestion:row[3]});
    assert.ok(source[index].criteriaTags.length>0);assert.equal(source[index].reviewStatus,'pending');count++;
   }
  }
 }
 assert.equal(count,396);
 for(const skill of ['alliance-repair','self-disclosure','therapist-self-awareness','marker-recognition-chairwork'])assert.ok(!CASE_ORDER[skill].includes('case-arne'));
});
test('three authored mastery paths retain their level and exact bilingual source provenance',()=>{
 const allIds=new Set();
 for(const exercise of ARNE_MASTERY){
  assert.equal(exercise.caseId,'case-arne');assert.equal(exercise.scenes.length,12);
  for(const scene of exercise.scenes){
   assert.ok(!allIds.has(scene.id));allIds.add(scene.id);
   const item=ARNE_STATEMENTS[scene.skillId]['case-arne'].find(i=>i.id===scene.sourceItemId);
   assert.equal(item.difficulty,exercise.difficulty);assert.equal(scene.en.text,item.text);assert.equal(scene.en.suggestion,item.suggestion);
   assert.equal(scene.no.text,ARNE_TRANSLATIONS[item.id].text);assert.equal(scene.no.suggestion,ARNE_TRANSLATIONS[item.id].suggestion);
   assert.ok(scene.en.prompt&&scene.no.prompt&&scene.en.bridge&&scene.no.bridge);
  }
 }
 assert.equal(allIds.size,36);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {NORA_LEVELS,NORA_SKILLS,NORA_CASE} from '../src/data/noraCase.js';
import {NORA_BANKS,NORA_STATEMENTS,NORA_TRANSLATIONS} from '../src/data/noraContent.js';
import {NORA_MASTERY} from '../src/data/noraMastery.js';
import {MIA_LEVELS,MIA_SKILLS,MIA_CASE} from '../src/data/miaCase.js';
import {MIA_BANKS,MIA_STATEMENTS,MIA_TRANSLATIONS} from '../src/data/miaContent.js';
import {MIA_MASTERY} from '../src/data/miaMastery.js';
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
 assert.equal(resolveCaseLevel(MIA_CASE,null,{'case-arne':'hard'}),'easy');
 assert.equal(resolveCaseLevel(MIA_CASE,null,{'case-mia':'moderate','case-arne':'hard'}),'moderate');
 assert.equal(resolveCaseLevel(NORA_CASE,null,{'case-mia':'hard'}),'easy');
 assert.equal(resolveCaseLevel(NORA_CASE,null,{'case-nora':'hard','case-mia':'easy'}),'hard');
 assert.equal(levelLabel('no','moderate'),'Moderat');assert.equal(levelLabel('no','hard'),'Vanskelig');
});
test('Leo has exactly 396 distinct bilingual focused pairs with level-specific stable identities',()=>{
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

test('Mia has exactly 396 distinct bilingual focused pairs with level-specific stable identities',()=>{
 const ids=new Set();let count=0;
 for(const skill of MIA_SKILLS){
  const items=MIA_STATEMENTS[skill]['case-mia'];assert.equal(items.length,36);
  assert.deepEqual(BASE_PRACTICE[skill].cases['case-mia'].supportedLevels,MIA_LEVELS);
  for(const level of MIA_LEVELS){
   const rows=MIA_BANKS[level][skill];assert.equal(rows.length,12);assert.equal(new Set(rows.map(r=>r[0])).size,12);
   const source=BASE_PRACTICE[skill].cases['case-mia'].statements.filter(e=>e.difficultyTier===level);assert.equal(source.length,12);
   for(const [index,row] of rows.entries()){
    assert.equal(row.length,4);assert.ok(row.every(s=>typeof s==='string'&&s.trim()===s&&s.length>10));
    const item=items.filter(i=>i.difficulty===level)[index];assert.ok(item.id.includes(`_${level}_`));assert.ok(!ids.has(item.id));ids.add(item.id);
    assert.deepEqual(MIA_TRANSLATIONS[item.id],{text:row[2],suggestion:row[3]});
    assert.ok(source[index].criteriaTags.length>0);assert.equal(source[index].reviewStatus,'pending');count++;
   }
  }
 }
 assert.equal(count,396);
 for(const skill of ['alliance-repair','self-disclosure','therapist-self-awareness','marker-recognition-chairwork'])assert.ok(!CASE_ORDER[skill].includes('case-mia'));
});
test('Mia’s three authored mastery paths retain their level and exact bilingual source provenance',()=>{
 const allIds=new Set();
 for(const exercise of MIA_MASTERY){
  assert.equal(exercise.caseId,'case-mia');assert.equal(exercise.scenes.length,12);
  for(const scene of exercise.scenes){
   assert.ok(!allIds.has(scene.id));allIds.add(scene.id);
   const item=MIA_STATEMENTS[scene.skillId]['case-mia'].find(i=>i.id===scene.sourceItemId);
   assert.equal(item.difficulty,exercise.difficulty);assert.equal(scene.en.text,item.text);assert.equal(scene.en.suggestion,item.suggestion);
   assert.equal(scene.no.text,MIA_TRANSLATIONS[item.id].text);assert.equal(scene.no.suggestion,MIA_TRANSLATIONS[item.id].suggestion);
   assert.ok(scene.en.prompt&&scene.no.prompt&&scene.en.bridge&&scene.no.bridge);
  }
 }
 assert.equal(allIds.size,36);
});

test('Nora has exactly 396 distinct bilingual focused pairs with level-specific stable identities',()=>{
 const ids=new Set();let count=0;
 for(const skill of NORA_SKILLS){
  const items=NORA_STATEMENTS[skill]['case-nora'];assert.equal(items.length,36);
  assert.deepEqual(BASE_PRACTICE[skill].cases['case-nora'].supportedLevels,NORA_LEVELS);
  for(const level of NORA_LEVELS){
   const rows=NORA_BANKS[level][skill];assert.equal(rows.length,12);assert.equal(new Set(rows.map(r=>r[0])).size,12);
   const source=BASE_PRACTICE[skill].cases['case-nora'].statements.filter(e=>e.difficultyTier===level);assert.equal(source.length,12);
   for(const [index,row] of rows.entries()){
    assert.equal(row.length,4);assert.ok(row.every(s=>typeof s==='string'&&s.trim()===s&&s.length>10));
    const item=items.filter(i=>i.difficulty===level)[index];assert.ok(item.id.includes(`_${level}_`));assert.ok(!ids.has(item.id));ids.add(item.id);
    assert.deepEqual(NORA_TRANSLATIONS[item.id],{text:row[2],suggestion:row[3]});
    assert.ok(source[index].criteriaTags.length>0);assert.equal(source[index].reviewStatus,'pending');count++;
   }
  }
 }
 assert.equal(count,396);
 for(const skill of ['alliance-repair','self-disclosure','therapist-self-awareness','marker-recognition-chairwork'])assert.ok(!CASE_ORDER[skill].includes('case-nora'));
});
test('Nora’s three authored mastery paths retain their level and exact bilingual source provenance',()=>{
 const allIds=new Set();
 for(const exercise of NORA_MASTERY){
  assert.equal(exercise.caseId,'case-nora');assert.equal(exercise.scenes.length,12);
  for(const scene of exercise.scenes){
   assert.ok(!allIds.has(scene.id));allIds.add(scene.id);
   const item=NORA_STATEMENTS[scene.skillId]['case-nora'].find(i=>i.id===scene.sourceItemId);
   assert.equal(item.difficulty,exercise.difficulty);assert.equal(scene.en.text,item.text);assert.equal(scene.en.suggestion,item.suggestion);
   assert.equal(scene.no.text,NORA_TRANSLATIONS[item.id].text);assert.equal(scene.no.suggestion,NORA_TRANSLATIONS[item.id].suggestion);
   assert.ok(scene.en.prompt&&scene.no.prompt&&scene.en.bridge&&scene.no.bridge);
  }
 }
 assert.equal(allIds.size,36);
});

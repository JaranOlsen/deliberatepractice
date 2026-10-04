import test from 'node:test';
import assert from 'node:assert/strict';
import {BASE_PRACTICE,CASE_ORDER,STATEMENT_TRANSLATIONS,CONTENT_REVISION} from '../src/data/index.js';
import {FIXED_CASE_EXTENSION_BANKS,fixedExtensionItemId} from '../src/data/fixedCaseExtensions.js';
import {FIXED_CASE_MASTERY} from '../src/data/fixedCaseMastery.js';
import {FIXED_CASE_EXTENSION_SKILL_ORDER} from '../src/data/skillExtensions.js';
import {resolveCaseLevel} from '../src/js/practiceLevels.js';

test('eight original fixed cases gain complete distinct bilingual extension banks without new levels',()=>{
 const ids=new Set(),voices=new Set();
 for(const [caseId,banks] of Object.entries(FIXED_CASE_EXTENSION_BANKS)){
  assert.deepEqual(Object.keys(banks),FIXED_CASE_EXTENSION_SKILL_ORDER);
  for(const skill of FIXED_CASE_EXTENSION_SKILL_ORDER){
   const c=BASE_PRACTICE[skill].cases[caseId];
   assert.equal(c.statements.length,12);assert.deepEqual(c.supportedLevels??[c.difficulty],[c.difficulty]);
   assert.equal(resolveCaseLevel(c,'hard',{[caseId]:'hard'}),c.difficulty);
   for(const [index,row] of banks[skill].entries()){
    const item=c.statements[index];assert.equal(row.length,4);assert.ok(row.every(v=>v.trim()===v&&v.length>10));
    assert.equal(item.id,fixedExtensionItemId(skill,caseId,index));assert.ok(!ids.has(item.id));ids.add(item.id);
    assert.ok(!voices.has(row[0]));voices.add(row[0]);
    assert.equal(item.text,row[0]);assert.equal(item.suggestion,row[1]);
    assert.deepEqual(STATEMENT_TRANSLATIONS.no[item.id],{text:row[2],suggestion:row[3]});
    assert.equal(item.difficultyTier,c.difficulty);assert.equal(item.reviewStatus,'pending');
    assert.equal(item.revision,CONTENT_REVISION);assert.ok(item.criteriaTags.length>0);
   }
  }
 }
 assert.equal(ids.size,288);
 for(const skill of FIXED_CASE_EXTENSION_SKILL_ORDER)assert.equal(CASE_ORDER[skill].length,12);
});

test('fixed-case mastery retains exact source provenance and fixed level for all 96 authored scenes',()=>{
 assert.equal(FIXED_CASE_MASTERY.length,8);const ids=new Set();
 for(const e of FIXED_CASE_MASTERY){
  assert.deepEqual(e.supportedLevels,[e.difficulty]);assert.equal(e.scenes.length,12);
  for(const scene of e.scenes){
   assert.ok(!ids.has(scene.id));ids.add(scene.id);
   const c=BASE_PRACTICE[scene.skillId].cases[e.caseId],item=c.statements.find(i=>i.id===scene.sourceItemId);
   assert.ok(item);assert.equal(item.difficultyTier,e.difficulty);assert.equal(item.revision,e.revision);
   assert.deepEqual({text:scene.en.text,suggestion:scene.en.suggestion},{text:item.text,suggestion:item.suggestion});
   assert.deepEqual({text:scene.no.text,suggestion:scene.no.suggestion},STATEMENT_TRANSLATIONS.no[item.id]);
   assert.deepEqual(scene.criteriaTags,item.criteriaTags);
   for(const lang of ['en','no'])assert.ok(scene[lang].bridge&&scene[lang].prompt);
  }
  assert.equal(e.scenes[10].skillId,'consolidating-emotional-change');
  assert.equal(e.scenes[11].skillId,'closing-after-emotional-work');
 }
 assert.equal(ids.size,96);
});

test('mastery ordering varies with the case and does not insert acute crisis scenes into the new bounded endings',()=>{
 const signatures=new Set(FIXED_CASE_MASTERY.map(e=>e.scenes.map(s=>s.skillId).join('|')));assert.ok(signatures.size>=5);
 for(const caseId of ['case-laura','case-aisha','case-david','case-marcus'])
  assert.ok(FIXED_CASE_MASTERY.find(e=>e.caseId===caseId).scenes.some(s=>s.skillId==='alliance-repair'));
 const aisha=FIXED_CASE_MASTERY.find(e=>e.caseId==='case-aisha');
 assert.equal(aisha.scenes[1].sourceItemId,'dp_providing-treatment-rationale_case-aisha_04');
 assert.equal(aisha.scenes[8].sourceItemId,'dp_staying-in-contact-intense-affect_case-aisha_05');
 const marcus=FIXED_CASE_MASTERY.find(e=>e.caseId==='case-marcus');
 assert.equal(marcus.scenes[6].sourceItemId,'dp_empathic-refocusing_case-marcus_05');
 // These are authored content choices, not a clinical risk detector or clinical approval.
});

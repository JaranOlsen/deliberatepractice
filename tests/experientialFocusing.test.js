import test from 'node:test';
import assert from 'node:assert/strict';
import {BASE_PRACTICE,CASE_ORDER,SKILL_ORDER,STATEMENT_TRANSLATIONS,CONTENT_REVISION} from '../src/data/index.js';
import {FOCUSING_SKILL_ID as skill,FOCUSING_BANKS,FOCUSING_SOURCE,FOCUSING_CRITERIA,focusingItemId} from '../src/data/experientialFocusing.js';
import {getSkillFeedback} from '../src/data/skillFeedback.js';

test('focusing offers four complete bilingual banks at explicit legal levels with original source provenance',()=>{
 assert.ok(SKILL_ORDER.includes(skill));assert.deepEqual(CASE_ORDER[skill],['case-sara','case-arne']);
 const ids=new Set(),voices=new Set();
 for(const [caseId,levels] of Object.entries(FOCUSING_BANKS))for(const [level,rows] of Object.entries(levels)){
  const c=BASE_PRACTICE[skill].cases[caseId];
  const items=c.statements.filter(item=>item.difficultyTier===level);assert.equal(items.length,12);assert.equal(rows.length,12);
  for(const [i,row] of rows.entries()){
   assert.equal(row.length,4);assert.ok(row.every(v=>v.trim()===v&&v.length>20));
   const item=items[i];assert.equal(item.id,focusingItemId(caseId,level,i));
   assert.ok(!ids.has(item.id));ids.add(item.id);assert.ok(!voices.has(row[0]));voices.add(row[0]);
   assert.equal(item.text,row[0]);assert.equal(item.suggestion,row[1]);assert.deepEqual(STATEMENT_TRANSLATIONS.no[item.id],{text:row[2],suggestion:row[3]});
   assert.equal(item.difficultyTier,level);assert.equal(item.revision,CONTENT_REVISION);assert.equal(item.reviewStatus,'pending');
   assert.equal(item.sourceRef.url,FOCUSING_SOURCE);assert.deepEqual(item.criteriaTags,FOCUSING_CRITERIA);
  }
 }
 assert.equal(ids.size,48);
 assert.equal(BASE_PRACTICE[skill].cases['case-sara'].difficulty,'easy');
 assert.deepEqual(BASE_PRACTICE[skill].cases['case-arne'].supportedLevels,['easy','moderate','hard']);
 for(const lang of ['en','no']){const f=getSkillFeedback(skill,lang);assert.equal(f.cues.length,2);assert.equal(f.selfCues.length,2);assert.ok(f.middle&&f.high&&f.target);}
});

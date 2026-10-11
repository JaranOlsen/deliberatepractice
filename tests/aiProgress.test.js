import test from 'node:test';import assert from 'node:assert/strict';
import {aiProgressRatings} from '../src/js/aiProgress.js';
const row={attempt_id:'a',round_id:'round',statement_id:'item',skill_id:'empathic-understanding',language_id:'en',case_id:'case-sara',difficulty:'easy',kind:'first',assessable:true,score:3,created_at:'2026-10-11T08:00:00Z',rubric:'wording-coaching-v2'};
test('AI progress keeps independent and coached attempts separate and gives each item one vote',()=>{
 const rows=[row,{...row,attempt_id:'retry',kind:'retry',score:5}];
 assert.deepEqual(aiProgressRatings(rows).map(r=>[r.score,r.item_count,r.source]),[[3,1,'ai']]);
 assert.deepEqual(aiProgressRatings(rows,'retry').map(r=>r.score),[5]);
});
test('corrected attempts replace earlier scores and unassessable attempts do not revive older scores',()=>{
 const corrected={...row,attempt_id:'b',score:4,created_at:'2026-10-11T09:00:00Z'};
 assert.deepEqual(aiProgressRatings([row,corrected]).map(r=>r.score),[4]);
 assert.equal(aiProgressRatings([row,{...corrected,assessable:false,score:null}]).length,0);
 assert.equal(aiProgressRatings([{...row,round_id:'other-round'},row]).length,2);
 assert.throws(()=>aiProgressRatings([row],'both'));
});

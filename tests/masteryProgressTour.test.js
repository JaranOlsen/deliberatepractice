import test from 'node:test';
import assert from 'node:assert/strict';
import {masteryProgressByLevel,summarizeMasteryRounds} from '../src/js/masteryProgress.js';
import {tourIsDisabled,saveTourPreference,TOUR_PREFERENCE_KEY} from '../src/js/appTour.js';
const row=(round,set,score,difficulty,source='self',count=3)=>({id:`${round}-${set}`,source,parent_round_id:round,exercise_id:'exercise',content_revision:'revision',language_id:'en',case_id:'case',difficulty,set_number:set,item_count:count,score,created_at:`2026-10-${round}T10:00:00Z`});
test('mastery summaries compare up to three recent complete rounds within each level',()=>{
 const rows=[];
 for(const [round,score] of [['01',1],['02',2],['03',3],['04',4]])for(let set=1;set<=4;set++)rows.push(row(round,set,score,'easy'));
 for(let set=1;set<=4;set++)rows.push(row('05',set,5,'hard'));
 rows.push(row('06',1,5,'easy'),row('07',1,1,'easy','observer'));
 const levels=masteryProgressByLevel(summarizeMasteryRounds(rows,'self'));
 assert.equal(levels[0].complete.length,4);assert.equal(levels[0].score,3);
 assert.equal(levels[1].score,null);assert.equal(levels[2].score,5);
 assert.equal(masteryProgressByLevel(summarizeMasteryRounds(rows,'observer'))[0].score,null);
});
test('four checkpoints with passed items do not represent a complete mastery round',()=>{
 const rows=[1,2,3,4].map(set=>row('01',set,5,'moderate','self',set===2?2:3));
 const rounds=summarizeMasteryRounds(rows,'self');assert.equal(rounds.length,1);
 assert.equal(masteryProgressByLevel(rounds)[1].complete.length,0);
});
test('the tour repeats until explicitly disabled, and replay can re-enable it',()=>{
 const data=new Map(),storage={getItem:key=>data.get(key),setItem:(key,value)=>data.set(key,value)};
 assert.equal(tourIsDisabled(storage),false);assert.equal(saveTourPreference(true,storage),true);
 assert.equal(tourIsDisabled(storage),true);saveTourPreference(false,storage);assert.equal(tourIsDisabled(storage),false);
 for(const value of ['broken','{}','{"disabled":"true"}']){data.set(TOUR_PREFERENCE_KEY,value);assert.equal(tourIsDisabled(storage),false);}
 const unavailable={getItem(){throw new Error('Unavailable');},setItem(){throw new Error('Unavailable');}};
 assert.equal(tourIsDisabled(unavailable),false);assert.equal(saveTourPreference(true,unavailable),false);
});

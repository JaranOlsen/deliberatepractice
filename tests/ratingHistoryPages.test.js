import test from 'node:test';
import assert from 'node:assert/strict';
import {collectRatingPages} from '../src/js/ratingHistoryPages.js';
const rows=Array.from({length:721},(_,i)=>({id:`00000000-0000-4000-8000-${String(999999999999-i).padStart(12,'0')}`,created_at:'2026-10-03T12:00:00.123456+00:00'}));
test('keyset history retrieves over 500 rows once, despite a smaller server limit and concurrent inserts',async()=>{
  let data=[...rows],calls=0;
  const result=await collectRatingPages(async cursor=>{
    calls++;
    if(calls===2)data.unshift({id:'ffffffff-ffff-4fff-8fff-ffffffffffff',created_at:'2026-10-03T13:00:00Z'});
    return data.filter(r=>!cursor || r.created_at<cursor.created_at || r.created_at===cursor.created_at&&r.id<cursor.id).slice(0,70);
  });
  assert.equal(result.length,721);assert.equal(new Set(result.map(r=>r.id)).size,721);assert.deepEqual(result,rows);assert.equal(calls,12);
});
test('failed later pages never masquerade as complete history',async()=>{
  await assert.rejects(collectRatingPages(async cursor=>{if(cursor)throw new Error('Network');return rows.slice(0,10);}),/Network/);
});
test('a server repeating a cursor cannot create an infinite history request',async()=>{
  await assert.rejects(collectRatingPages(async()=>rows.slice(0,10)),/did not advance/);
});

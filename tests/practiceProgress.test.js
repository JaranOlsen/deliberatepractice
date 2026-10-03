import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeRatings, createProgressRadar, focusProgressRadar, recentRatings, groupRatingHistory, practiceSuggestion } from '../src/js/practiceProgress.js';

const now = Date.parse('2026-09-30T12:00:00Z');
const day = 86400000;
const rating = (overrides = {}) => ({ skill_id: 'a', difficulty: 'easy', score: 4, item_count: 3, created_at: new Date(now).toISOString(), ...overrides });

test('history retains unrated skills without assigning zero scores', () => {
  const summary = summarizeRatings([rating()], ['a', 'b', 'c'], now);
  assert.deepEqual(summary.skills.map(({ skillId, average }) => [skillId, average]), [['a', 4], ['b', null], ['c', null]]);
  assert.equal(summary.overall.count, 3);
  assert.equal(summary.overall.ratingCount, 1);
});

test('all-history averages weight items without disguising historic evidence as recent', () => {
  const summary = summarizeRatings([
    rating({ score: 5, item_count: 2 }),
    rating({ score: 1, item_count: 4, created_at: new Date(now - 90 * day).toISOString() })
  ], ['a'], now);
  assert.equal(summary.overall.average, 14/6);
  assert.equal(summary.overall.count, 6);
  assert.equal(summary.overall.ratingCount, 2);
});

test('latest evidence is independent of input order and difficulty summaries stay separate', () => {
  const recent = rating({ score: 3, difficulty: 'hard' });
  const summary = summarizeRatings([recent, rating({ score: 5, created_at: new Date(now - day).toISOString() })], ['a'], now);
  assert.equal(summary.skills[0].latest, recent);
  assert.equal(summary.difficulties.find(({ difficulty }) => difficulty === 'hard').average, 3);
  assert.equal(summary.difficulties.find(({ difficulty }) => difficulty === 'easy').average, 5);
});

test('invalid and removed-skill ratings cannot inflate totals; legacy item counts default to one', () => {
  const summary = summarizeRatings([rating({ score: 6 }), rating({ score: null }), rating({ skill_id: 'removed' }), rating({ item_count: null, created_at: 'bad-date' })], ['a'], now);
  assert.equal(summary.overall.count, 1);
  assert.equal(summary.overall.ratingCount, 1);
  assert.equal(summary.skills[0].latest, null);
  assert.equal(summary.overall.average, 4);
});

test('radar excludes unrated skills and keeps each difficulty on the same rated axes', () => {
  const radar = createProgressRadar([rating({skill_id:'c',score:5}), rating({skill_id:'a',difficulty:'hard',score:2})], ['a','b','c'], now);
  assert.deepEqual(radar.skills.map(s=>s.skillId), ['a','c']);
  assert.deepEqual(radar.series.map(s=>[s.difficulty,s.average,s.count]), [['easy',5,3],['hard',2,3]]);
  assert.deepEqual(radar.series.map(s=>s.values.map(v=>v.average)), [[null,5],[2,null]]);
  assert.equal(createProgressRadar([], ['a','b','c'], now).skills.length, 0);
});

test('unknown difficulty stays separate, and invalid scores cannot create an axis', () => {
  const radar = createProgressRadar([rating({difficulty:null,score:3}),rating({skill_id:'b',score:6})], ['a','b'], now);
  assert.deepEqual(radar.skills.map(s=>s.skillId), ['a']);
  assert.deepEqual(radar.series.map(s=>[s.difficulty,s.average]), [['unspecified',3]]);
});

test('focusing a difficulty excludes skills without ratings at that level', () => {
  const comparison = createProgressRadar([rating({skill_id:'a'}),rating({skill_id:'b',difficulty:'hard',score:2})], ['a','b','c'], now);
  const hard = focusProgressRadar(comparison,'hard');
  assert.deepEqual(hard.skills.map(s=>s.skillId), ['b']);
  assert.deepEqual(hard.series.find(s=>s.difficulty==='hard').values.map(s=>s.average), [2]);
  assert.deepEqual(comparison.skills.map(s=>s.skillId), ['a','b']);
  assert.equal(focusProgressRadar(comparison,'all'), comparison);
});

test('recent profile cannot be dominated by years of old practice or undated evidence', () => {
  const old=Array.from({length:800},(_,i)=>rating({id:`old-${i}`,score:1,created_at:new Date(now-365*day).toISOString()}));
  const rows=[...old,rating({score:5}),rating({score:1,created_at:'bad-date'}),rating({score:2,created_at:new Date(now+day).toISOString()})];
  const recent=recentRatings(rows,['a'],now);
  assert.equal(recent.length,1);assert.equal(createProgressRadar(recent,['a'],now).series[0].average,5);
  assert.equal(recentRatings(old,['a'],now).length,0);
  assert.equal(summarizeRatings(rows,['a'],now).overall.ratingCount,803);
});

test('recent limit is independent per skill and level, includes the 90-day boundary, and deduplicates IDs', () => {
  const rows=Array.from({length:12},(_,i)=>rating({id:`a-${i}`,score:i<8?5:1,created_at:new Date(now-i*day).toISOString()}));
  rows.push(rows[0],rating({id:'hard',difficulty:'hard',score:2,created_at:new Date(now-90*day).toISOString()}),rating({skill_id:'b'}));
  const recent=recentRatings(rows,['a','b'],now);
  assert.equal(recent.length,10);
  const radar=createProgressRadar(recent,['a','b'],now);
  assert.equal(radar.series.find(s=>s.difficulty==='easy').values[0].average,5);
  assert.equal(radar.series.find(s=>s.difficulty==='hard').values[0].average,2);
});

test('history groups only explicitly identified rounds and preserves every checkpoint once', () => {
  const rows=[1,2,4].map(set_number=>rating({id:`set-${set_number}`,parent_round_id:'round',set_number}));
  rows.push(rows[0],rating({id:'legacy'}),rating({id:'other-round',parent_round_id:'other',set_number:1}),rating({id:'other-source',parent_round_id:'round',set_number:1,source:'observer'}));
  const groups=groupRatingHistory(rows,['a']);
  assert.equal(groups.length,4);assert.equal(groups.flatMap(g=>g.ratings).length,6);
  assert.deepEqual(groups.find(g=>g.roundId==='round'&&g.ratings.length===3).ratings.map(r=>r.set_number),[1,2,4]);
  assert.equal(groups.find(g=>g.latest.id==='legacy').roundId,undefined);
});

test('suggestion explains a revisit without treating a lower hard score as regression', () => {
  const suggestion=practiceSuggestion([rating({skill_id:'a',score:5,created_at:new Date(now-day).toISOString()}),rating({skill_id:'b',difficulty:'hard',score:1})],['a','b']);
  assert.equal(suggestion.skillId,'a');assert.equal(suggestion.reason,'revisit');
});

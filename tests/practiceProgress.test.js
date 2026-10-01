import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeRatings, createProgressRadar, focusProgressRadar } from '../src/js/practiceProgress.js';

const now = Date.parse('2026-09-30T12:00:00Z');
const day = 86400000;
const rating = (overrides = {}) => ({ skill_id: 'a', difficulty: 'easy', score: 4, item_count: 3, created_at: new Date(now).toISOString(), ...overrides });

test('history retains unrated skills without assigning zero scores', () => {
  const summary = summarizeRatings([rating()], ['a', 'b', 'c'], now);
  assert.deepEqual(summary.skills.map(({ skillId, average }) => [skillId, average]), [['a', 4], ['b', null], ['c', null]]);
  assert.equal(summary.overall.count, 3);
  assert.equal(summary.overall.ratingCount, 1);
});

test('item counts and recency affect averages without changing practice totals', () => {
  const summary = summarizeRatings([
    rating({ score: 5, item_count: 2 }),
    rating({ score: 1, item_count: 4, created_at: new Date(now - 90 * day).toISOString() })
  ], ['a'], now);
  assert.equal(summary.overall.average, 3);
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

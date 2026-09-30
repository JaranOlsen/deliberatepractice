import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeRatings } from '../src/js/practiceProgress.js';

const now = Date.parse('2026-09-30T12:00:00Z');
const day = 86400000;
const rating = (overrides = {}) => ({ skill_id: 'a', difficulty: 'easy', score: 4, item_count: 3, created_at: new Date(now).toISOString(), ...overrides });

test('missing skills retain fixed positions with no score, rather than zero', () => {
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

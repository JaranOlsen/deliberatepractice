import test from 'node:test';
import assert from 'node:assert/strict';
import { GROUP_ROUND_SIZE, groupSetProgress } from '../src/js/groupRound.js';
import { sampleTriadStatements } from '../src/js/triadProtocol.js';

const ids = Array.from({ length: GROUP_ROUND_SIZE }, (_, i) => `item-${i + 1}`);

test('a group round has four disjoint sets and no repeated items', () => {
  const sampled = sampleTriadStatements(ids.map(id => ({id})), GROUP_ROUND_SIZE);
  assert.equal(new Set(sampled.map(item => item.id)).size, 12);
  const sets = [2, 5, 8, 11].map(index => groupSetProgress(ids, index, ids.slice(0, index + 1)));
  assert.deepEqual(sets.map(set => set.number), [1, 2, 3, 4]);
  assert.deepEqual(sets.flatMap(set => set.completed), ids);
  assert.deepEqual(sets.map(set => set.last), [false, false, false, true]);
  assert.ok(sets.every(set => set.total === 4 && set.resolved));
});

test('ratings contain only practiced items from the current set', () => {
  const set = groupSetProgress(ids, 5, [ids[0], ids[1], ids[2], ids[3], ids[5]], [ids[4]]);
  assert.deepEqual(set.completed, [ids[3], ids[5]]);
  assert.deepEqual(set.skipped, [ids[4]]);
  assert.equal(set.resolved, true);
  const allPassed = groupSetProgress(ids, 8, ids.slice(0, 6), ids.slice(6, 9));
  assert.deepEqual(allPassed.completed, []);
  assert.equal(allPassed.resolved, true);
});

test('the next set starts unresolved despite earlier completed items', () => {
  const set = groupSetProgress(ids, 3, ids.slice(0, 3));
  assert.equal(set.number, 2);
  assert.equal(set.resolved, false);
  assert.deepEqual(set.completed, []);
});

test('legacy three-item rounds remain a single set', () => {
  const set = groupSetProgress(ids.slice(0, 3), 2, ids.slice(0, 2), [ids[2]]);
  assert.equal(set.total, 1);
  assert.equal(set.last, true);
  assert.equal(set.resolved, true);
  assert.equal(groupSetProgress([], 0).resolved, false);
});

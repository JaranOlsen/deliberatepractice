import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {RADAR_SKILL_MAP, radarPoint, radarSeriesPoints} from '../src/js/radarSkillMap.js';

test('every library skill has one fixed radar position', () => {
  const {SKILL_ORDER} = JSON.parse(readFileSync(new URL('../src/data/runtime/manifest.json', import.meta.url)));
  assert.deepEqual(new Set(RADAR_SKILL_MAP.map(s => s.skillId)), new Set(SKILL_ORDER));
  assert.equal(new Set(RADAR_SKILL_MAP.map(s => s.degrees)).size, SKILL_ORDER.length);
  for (const [index, skill] of RADAR_SKILL_MAP.entries()) {
    const next = RADAR_SKILL_MAP[(index + 1) % RADAR_SKILL_MAP.length];
    assert.equal((next.degrees - skill.degrees + 360) % 360, 360 / SKILL_ORDER.length);
  }
});

test('a sparse or reordered source keeps each skill and score at its own position', () => {
  const skills = [{skillId:'empathic-understanding'}, {skillId:'empathic-evocations'}];
  const values = [{count:3,average:4}, {count:3,average:2}];
  const original = radarSeriesPoints(skills, values, 200, 100);
  const reordered = radarSeriesPoints([...skills].reverse(), [...values].reverse(), 200, 100);
  assert.deepEqual(reordered, original);
  const sparse = radarSeriesPoints(skills.slice(1), values.slice(1), 200, 100);
  const evocation = points => points.find(s => s.skillId === 'empathic-evocations').point;
  assert.deepEqual(evocation(sparse), evocation(original));
  assert.deepEqual(evocation(original), radarPoint('empathic-evocations', 200, 40));
});

test('unrated skills remain gaps rather than zero scores or invented connections', () => {
  const points = radarSeriesPoints([{skillId:'exploratory-questions'}, {skillId:'empathic-refocusing'}],
    [{count:3,average:4}, {count:3,average:3}], 200, 100);
  assert.equal(points.filter(s => s.point).length, 2);
  assert.equal(points.find(s => s.skillId === 'empathic-evocations').point, null);
  assert.equal(radarSeriesPoints([{skillId:'exploratory-questions'}], [{count:0,average:null}], 200, 100).filter(s => s.point).length, 0);
});

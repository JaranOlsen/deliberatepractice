import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeRoomCode, readRoomInvite, rememberRoomInvite, buildAuthRedirect} from '../src/js/roomInvite.js';
const base = 'https://jaranolsen.github.io/deliberatepractice/';
const storage = () => {
  const values = new Map();
  return {getItem: key => values.get(key) ?? null, setItem: (key,value) => values.set(key,value), removeItem: key => values.delete(key)};
};

test('a room invitation survives email sign-in in a fresh browser', () => {
  const original = storage();
  rememberRoomInvite('abcd–1234–ef56', original);
  const callback = buildAuthRedirect(base, original);
  assert.equal(callback, base + '?room=ABCD1234EF56');
  assert.equal(readRoomInvite(callback + '#access_token=secret', storage()), 'ABCD1234EF56');
});

test('the explicit invitation takes precedence over a previous browser invitation', () => {
  const previous = storage(); rememberRoomInvite('111122223333', previous);
  assert.equal(buildAuthRedirect(base + '?room=ABCD1234EF56', previous), base + '?room=ABCD1234EF56');
  assert.equal(readRoomInvite(base + '?room=invalid', previous), null);
});

test('callbacks only keep validated invitation context on the current origin and path', () => {
  assert.equal(buildAuthRedirect(base + '?room=ABCD1234EF56&redirect=https://other.invalid&code=auth-code#access_token=secret'), base + '?room=ABCD1234EF56');
  for (const code of ['https://other.invalid', 'ABC!D1234EF56', 'GHIJ1234EF56', 'ABC123', 'ABCD1234EF567']) {
    assert.equal(normalizeRoomCode(code), null);
  }
  assert.equal(buildAuthRedirect(base + '?room=invalid'), base);
  assert.equal(normalizeRoomCode('abcd 1234 ef56'), 'ABCD1234EF56');
});

test('blocked or corrupt storage does not prevent an invitation URL from working', () => {
  const blocked = {getItem() {throw new Error('Blocked');}, setItem() {throw new Error('Blocked');}};
  assert.equal(buildAuthRedirect(base, blocked), base);
  assert.equal(buildAuthRedirect(base + '?room=ABCD1234EF56', blocked), base + '?room=ABCD1234EF56');
  assert.equal(rememberRoomInvite('ABCD1234EF56', blocked), 'ABCD1234EF56');
  assert.equal(readRoomInvite(base, {getItem: () => 'broken JSON'}), null);
});

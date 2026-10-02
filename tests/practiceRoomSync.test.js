import test from 'node:test';
import assert from 'node:assert/strict';
import {createRoomSync, roomRole, roomEveryoneReady, missingRoomRoles} from '../src/js/practiceRoomSync.js';
const room = version => ({id: 'room', version, observer_id: 'o', therapist_id: 't', client_id: 'c'});
const wait = () => new Promise(resolve => setTimeout(resolve, 0));
function fixture(options = {}) {
  let server = room(0), pending = null, changes = [], commands = [];
  const controller = createRoomSync({
    rpc: async (name, args) => {
      if (name === 'sync_practice_room') return server;
      commands.push(args); server = room(server.version + 1); return server;
    }, watch: async () => () => {}, apply: async () => {}, changed: state => changes.push(state),
    loadPending: () => pending, savePending: (_, value) => { pending = value; }, interval: 100000,
    ...options
  });
  return {controller, commands, changes, server: value => { server = value; }, pending: () => pending};
}

test('roles and readiness require three current acknowledgements', () => {
  const r = {...room(3), presence: {o: {connected: true, acknowledged_version: 3},
    t: {connected: true, acknowledged_version: 3}, c: {connected: true, acknowledged_version: 2}}};
  assert.equal(roomRole(r, 't'), 'therapist'); assert.equal(roomRole(r, 'stranger'), null);
  assert.equal(roomEveryoneReady(r), false);
  r.presence.c.acknowledged_version = 3; assert.equal(roomEveryoneReady(r), true);
  r.presence.c.connected = false; assert.equal(roomEveryoneReady(r), false);
});

test('lost command response retains its UUID and expected version for replay', async () => {
  const calls = []; let lost = true;
  const f = fixture({rpc: async (name, args) => {
    if (name === 'sync_practice_room') return room(lost ? 0 : 1);
    calls.push(args);
    if (lost) { lost = false; throw new TypeError('Response lost after commit'); }
    return room(1);
  }});
  try {
    await f.controller.start(room(0)); await f.controller.command('advance'); await wait();
    assert.ok(f.pending()); assert.equal(f.controller.status().snapshot.version, 1);
    assert.equal(f.controller.status().error, 'Response lost after commit');
    await f.controller.command('advance');
    assert.equal(calls[0].input_command_id, calls[1].input_command_id);
    assert.equal(calls[1].input_expected_version, 0); assert.equal(f.pending(), null);
  } finally { f.controller.stop(); }
});

test('an ambiguous command survives controller restart and blocks different actions', async () => {
  const p = {id: 'original-command', action: 'rotate', score: null, version: 7};
  const f = fixture({loadPending: () => p});
  try {
    await f.controller.start(room(8)); await f.controller.command('advance'); assert.equal(f.commands.length, 0);
    await f.controller.command('rotate'); assert.equal(f.commands[0].input_command_id, p.id);
  } finally { f.controller.stop(); }
});

test('database rejection clears pending command, preserving its explanation during polling', async () => {
  const f = fixture({rpc: async name => {
    if (name === 'sync_practice_room') return room(0);
    throw Object.assign(new Error('Waiting for every device'), {code: 'P0001'});
  }});
  try {
    await f.controller.start(room(0)); await f.controller.command('advance'); await wait();
    assert.equal(f.pending(), null); assert.equal(f.controller.status().error, 'Waiting for every device');
  } finally { f.controller.stop(); }
});

test('out-of-order snapshots never rewind the phase', async () => {
  const painted = []; const f = fixture({apply: async r => painted.push(r.version)});
  try {
    f.server(room(4)); await f.controller.start(room(4)); f.server(room(2)); await f.controller.sync();
    assert.deepEqual(painted, [4]); assert.equal(f.controller.status().snapshot.version, 4);
  } finally { f.controller.stop(); }
});

test('slow content is not acknowledged until it has been displayed', async () => {
  let release; let ack = [];
  const f = fixture({apply: () => new Promise(resolve => { release = resolve; }), rpc: async (_, args) => {ack.push(args.input_acknowledged_version); return room(0);}});
  try {
    const starting = f.controller.start(room(0)); await wait(); assert.equal(ack.length, 0);
    release(); await starting; assert.deepEqual(ack, [0]);
  } finally { f.controller.stop(); }
});

test('stopping cancels a late snapshot and its acknowledgement', async () => {
  let release; let painted = false;
  const f = fixture({apply: async (_, current) => { await new Promise(resolve => { release = resolve; }); if (current()) painted = true; }});
  const starting = f.controller.start(room(0)); await wait(); f.controller.stop(); release(); await starting;
  assert.equal(painted, false); assert.equal(f.controller.status().snapshot, null);
});

test('backgrounded device does not accept or acknowledge unseen steps', async () => {
  let visible = true, painted = [], calls = 0;
  const f = fixture({canDisplay: () => visible, apply: async r => painted.push(r.version), rpc: async () => { calls++; return room(0); }});
  try {
    await f.controller.start(room(0)); visible = false; await f.controller.sync();
    assert.deepEqual(painted, [0]); assert.equal(calls, 1);
  } finally { f.controller.stop(); }
});


test('pairs need both active devices; watching observers do not block a larger group', () => {
  const r = {...room(4), observer_id: null, phase: 'practicing', host_id: 't', member_ids: ['t','c','p'],
    presence: {t:{connected:true,acknowledged_version:4}, c:{connected:true,acknowledged_version:4}}};
  assert.equal(roomEveryoneReady(r), true);
  assert.equal(roomRole(r, 'p'), 'passive');
  r.observer_id = 'o'; r.member_ids.push('o');
  assert.equal(roomEveryoneReady(r), false);
  r.presence.o = {connected:true,acknowledged_version:4};
  assert.equal(roomEveryoneReady(r), true);
  r.client_id = null; assert.equal(roomEveryoneReady(r), false);
});


test('an uncertain lobby configuration retains its content and command identity for replay', async () => {
  const calls=[]; let lost=true; const configuration={languageId:'no',skillId:'test',statements:[{id:'a'}]};
  const f=fixture({rpc:async(name,args)=>{
    if(name==='sync_practice_room') return room(lost?0:1);
    calls.push({name,args}); if(lost){lost=false;throw new TypeError('Response lost');} return room(1);
  }});
  try {
    await f.controller.start(room(0));await f.controller.command('prepare',null,configuration);await wait();
    assert.deepEqual(f.pending().configuration,configuration);
    await f.controller.command('prepare',null,configuration);
    assert.equal(calls[0].name,'prepare_practice_room');
    assert.equal(calls[0].args.input_command_id,calls[1].args.input_command_id);
    assert.deepEqual(calls[1].args.input_config,configuration);
    assert.equal(f.pending(),null);
  } finally {f.controller.stop();}
});

test('successful departure stops synchronization instead of accepting an inaccessible room', async () => {
  const f=fixture({rpc:async(name)=>name==='sync_practice_room'?room(0):{left:true}});
  try {
    await f.controller.start(room(0));await f.controller.command('leave');
    assert.equal(f.controller.status().snapshot,null);
    assert.equal(f.pending(),null);
    assert.equal(f.changes.at(-1).left,true);
  } finally {f.controller.stop();}
});


test('setup needs a therapist and client, plus an observer for three or more members', () => {
  for (const phase of ['choosing', 'lobby']) for (const members of [2,3,4]) {
    const r = {...room(4), phase, member_ids: ['t','c','o','p'].slice(0,members),
      observer_id: members===2 ? null : 'o',
      presence: Object.fromEntries(['t','c','o'].map(id=>[id,{connected:true,acknowledged_version:4}]))};
    assert.equal(roomEveryoneReady(r), true);
    for (const role of members===2 ? ['therapist','client'] : ['therapist','client','observer']) {
      const incomplete = {...r, [`${role}_id`]: null};
      assert.deepEqual(missingRoomRoles(incomplete), [role]);
      assert.equal(roomEveryoneReady(incomplete), false, `${phase}: ${members} members missing ${role}`);
    }
    if (members>2) {
      r.presence.o.acknowledged_version=3;
      assert.equal(roomEveryoneReady(r), false, 'An assigned observer must acknowledge the current setup');
    }
  }
});

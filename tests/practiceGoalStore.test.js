import test from 'node:test';
import assert from 'node:assert/strict';
import {createPracticeGoalStore, normalizePracticeGoal} from '../src/js/practiceGoalStore.js';
import {SKILL_FEEDBACK} from '../src/data/skillFeedback.js';
import {CANONICAL_SKILL_ORDER} from '../src/data/contentMeta.js';

const scope = {userId:'therapist', languageId:'en', skillId:'empathic-understanding'};
const defer = () => { let resolve, reject; const promise = new Promise((yes,no) => {resolve=yes;reject=no;}); return {promise,resolve,reject}; };
test('every production skill has original bilingual cues, distinct anchors and a short practice target', () => {
  assert.deepEqual(Object.keys(SKILL_FEEDBACK).sort(), [...CANONICAL_SKILL_ORDER].sort());
  for (const skill of Object.values(SKILL_FEEDBACK)) for (const lang of ['en','no']) {
    assert.equal(skill[lang].cues.length, 2);
    assert.equal(skill[lang].selfCues.length, 2);
    assert.ok(skill[lang].selfCues.every(cue => cue.length > 15 && cue.endsWith('?')));
    assert.ok(skill[lang].cues.every(cue => cue.length > 15));
    assert.notEqual(skill[lang].middle, skill[lang].high);
    assert.ok(skill[lang].middle.length > 40 && skill[lang].high.length > 40);
    assert.ok(skill[lang].target.length <= 160);
  }
  for (const lang of ['en','no']) assert.match(SKILL_FEEDBACK['therapist-self-awareness'][lang].high, /Private|Private/);
});
test('reminders are one short adjustment; whitespace is normalized and excess length is rejected', () => {
  assert.equal(normalizePracticeGoal('  Pause\n before   responding. '), 'Pause before responding.');
  assert.equal(normalizePracticeGoal(' \n '), '');
  assert.throws(() => normalizePracticeGoal('x'.repeat(161)));
});
test('reminders stay isolated by account, skill and language', async () => {
  let user = scope.userId; const requests = [];
  const model = createPracticeGoalStore({currentUser:()=>user, read:async s=>{requests.push(s);return `${s.skillId}:${s.languageId}`;},write:async s=>s.text});
  assert.equal(await model.load(scope), 'empathic-understanding:en');
  assert.equal(await model.load({...scope,languageId:'no'}), 'empathic-understanding:no');
  assert.equal(await model.load({...scope,skillId:'alliance-repair'}), 'alliance-repair:en');
  assert.equal(await model.load({...scope,userId:'observer'}), '');
  assert.equal(requests.length, 3);
  user = 'observer'; model.reset();
  assert.equal(await model.load({...scope,userId:user}), 'empathic-understanding:en');
  assert.equal(requests.length, 4);
});
test('a delayed read cannot replace a saved reminder', async () => {
  const delayed = defer();
  const model = createPracticeGoalStore({currentUser:()=>scope.userId,read:()=>delayed.promise,write:async s=>s.text});
  const reading = model.load(scope); await Promise.resolve();
  await model.save(scope, 'Pause before responding.');
  delayed.resolve('Old reminder');
  assert.equal(await reading, 'Pause before responding.');
});
test('account changes discard delayed reads and save responses', async () => {
  for (const operation of ['load','save']) {
    let user=scope.userId; const delayed=defer(), rendered=[];
    const model=createPracticeGoalStore({currentUser:()=>user,read:()=>delayed.promise,write:()=>delayed.promise});
    model.subscribe(scope,value=>rendered.push(value));
    const pending=model[operation](scope,'Private reminder'); await Promise.resolve();
    user='someone-else';model.reset();delayed.resolve('Private reminder');
    if(operation==='load')assert.equal(await pending,'');else await assert.rejects(pending,/Account changed/);
    assert.ok(!rendered.includes('Private reminder'));
  }
});
test('failed saves preserve the last confirmed value and can be retried', async () => {
  let fail=true;
  const model=createPracticeGoalStore({currentUser:()=>scope.userId,read:async()=> 'Old target',write:async s=>{if(fail)throw new Error('Offline');return s.text;}});
  await model.load(scope);
  await assert.rejects(model.save(scope,'New target'));
  assert.equal(await model.load(scope),'Old target');
  fail=false;assert.equal(await model.save(scope,'New target'),'New target');
  assert.equal(await model.save(scope,''),'');
});
test('overlapping edits commit in submission order, even after a failed save', async () => {
  const first=defer(), calls=[];
  const model=createPracticeGoalStore({currentUser:()=>scope.userId,read:async()=>'',write:async s=>{
    calls.push(s.text); if(calls.length===1)await first.promise; return s.text;
  }});
  const a=model.save(scope,'First'), b=model.save(scope,'Second');
  await new Promise(resolve=>setImmediate(resolve));
  assert.deepEqual(calls,['First']);
  first.reject(new Error('Offline'));
  await assert.rejects(a,/Offline/);
  assert.equal(await b,'Second');
  assert.deepEqual(calls,['First','Second']);
  assert.equal(await model.load(scope),'Second');
});

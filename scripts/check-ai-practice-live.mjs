import {mkdir, writeFile} from 'node:fs/promises';
import {performance} from 'node:perf_hooks';
import {AI_PROTOCOL, validateAssessment} from '../src/js/aiPracticeProtocol.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';
import {aiTestAccount} from './ai-test-account.mjs';

// Deliberately excluded from npm test. An explicit flag enables bounded paid requests.
if (!process.argv.includes('--live')) {
  console.error('This check makes up to five paid API calls. Run npm run ai:check:live -- --live when intended.'); process.exit(1);
}
const base = process.env.AI_PRACTICE_SMOKE_BASE || 'http://127.0.0.1:5555/api/ai-practice';
const address = new URL(base);
const hosted=address.origin==='https://kpzmjnwwbxweevloiqiy.supabase.co'&&address.pathname==='/functions/v1/ai-practice';
if (!hosted && (address.protocol !== 'http:' || !['localhost', '127.0.0.1'].includes(address.hostname))) throw new Error('Known AI service only');
const origin = process.env.AI_PRACTICE_SMOKE_ORIGIN || 'http://127.0.0.1:5173';
const identity=await aiTestAccount();
async function call(action, body) {
  const response = await fetch(`${base}/${action}`, {method: body ? 'POST' : 'GET', headers: {Origin: origin,Authorization:`Bearer ${identity.token}`,apikey:identity.publicKey,
    ...(body && !(body instanceof FormData) ? {'Content-Type': 'application/json'} : {})},
    body: body ? body instanceof FormData ? body : JSON.stringify(body) : undefined, signal: AbortSignal.timeout(65000)});
  if (!response.ok) {
    let code; try {code = (await response.json()).error;} catch {}
    throw new Error(`${action}: ${code || 'request_failed'} (${response.status})`);
  }
  return response;
}
const catalog = await loadPilotCatalog(), checks = [];
const expanded = process.argv.includes('--expanded');
let requestsAttempted = 0;
try {
  const status = await (await call('status')).json();
  if (status.protocol !== AI_PROTOCOL || status.mode !== 'live') throw new Error('Save the local API key, enable live mode and restart the AI server first.');
  const results = [];
  const fixtures = expanded ? [
    ['en', 'alliance-repair', 'dp_alliance-repair_case-david_01', 'I hear how frustrating it is to keep coming and feel we are getting nowhere. I may have missed what you most needed; could we look together at what has not been useful and what you would want to change?'],
    ['no', 'experiential-focusing', 'dp_experiential-focusing_case-arne_hard_01', 'Du vil finne ordene selv, og jeg satte et navn på det for fort. Vi kan bli ved «en vekt» uten å bestemme hva det er.']
  ] : [['en', 'empathic-understanding', 'dp_empathic-understanding_case-sara_01', 'You got through the workday, and then the pain of missing him caught up with you.'],
    ['no', 'empathic-understanding', 'dp_empathic-understanding_case-sara_01', 'Du kom deg gjennom arbeidsdagen, og så traff smerten ved å savne ham deg.']];
  for (const [languageId, skillId, statementId, text] of fixtures) {
    const context = catalog(languageId, skillId, statementId);
    const value = {protocol: AI_PROTOCOL, attemptId: crypto.randomUUID(), kind: 'first', caseId: context.case.id,
      difficulty: context.difficulty,
      skillId, languageId, statementId, revision: context.revision, text};
    const started = performance.now(); requestsAttempted++;
    const result = await (await call('assess', value)).json();
    if (result.protocol !== AI_PROTOCOL || result.source !== 'ai' || result.attemptId !== value.attemptId) throw new Error('Invalid assessment identity');
    validateAssessment(result.result, text); results.push({value, result});
    checks.push({step: 'assessment', languageId, skillId, caseId: context.case.id, difficulty: context.difficulty, model: result.model, seconds: +( (performance.now() - started) / 1000).toFixed(2),
      score: result.result.score, feedback: result.result});
  }
  const folder = new URL(expanded ? '../output/playwright/ai-expanded-live/' : '../output/playwright/ai-live/', import.meta.url); await mkdir(folder, {recursive: true});
  if (expanded) {
    for (const {value} of results) {
      const started = performance.now(); requestsAttempted++;
      const blob = await (await call('speech', {role: 'client', languageId: value.languageId, skillId: value.skillId,
        caseId: value.caseId, difficulty: value.difficulty, statementId: value.statementId, revision: value.revision})).blob();
      if (blob.size < 100 || !blob.type.includes('audio/')) throw new Error('invalid_client_audio');
      await writeFile(new URL(`${value.caseId}.mp3`, folder), new Uint8Array(await blob.arrayBuffer()), {mode: 0o600});
      checks.push({step: 'speech', caseId: value.caseId, languageId: value.languageId, bytes: blob.size,
        seconds: +((performance.now() - started) / 1000).toFixed(2)});
    }
    const report = {status: 'passed', requestsAttempted, expanded: true, checks};
    await writeFile(new URL('report.json', folder), JSON.stringify(report, null, 2), {mode: 0o600});
    console.log(JSON.stringify(report, null, 2)); process.exit(0);
  }
  let clientAudio;
  for (const role of ['client', 'supervisor']) {
    const {value, result} = results[0], payload = role === 'client' ? {role, languageId: value.languageId, skillId: value.skillId,
      caseId:value.caseId,difficulty:value.difficulty,statementId: value.statementId, revision: value.revision} : {role, attemptId: result.attemptId};
    const started = performance.now(); requestsAttempted++;
    const blob = await (await call('speech', payload)).blob();
    if (blob.size < 100 || !blob.type.includes('audio/')) throw new Error(`${role}: invalid speech audio`);
    await writeFile(new URL(`${role}.mp3`, folder), new Uint8Array(await blob.arrayBuffer()), {mode: 0o600});
    if (role === 'client') clientAudio = blob;
    checks.push({step: 'speech', role, bytes: blob.size, seconds: +((performance.now() - started) / 1000).toFixed(2)});
  }
  const form = new FormData(); form.append('file', clientAudio, 'client.mp3'); form.append('languageId', 'en');
  const started = performance.now(); requestsAttempted++; const transcript = await (await call('transcribe', form)).json();
  if (typeof transcript.text !== 'string' || transcript.text.trim().length < 10) throw new Error('No usable transcript');
  checks.push({step: 'transcription', languageId: 'en', seconds: +((performance.now() - started) / 1000).toFixed(2), text: transcript.text});
  const report = {status: 'passed', requestsAttempted, checks};
  await writeFile(new URL('report.json', folder), JSON.stringify(report, null, 2), {mode: 0o600});
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  console.error(JSON.stringify({status: 'failed', requestsAttempted, checks, error: error.message}, null, 2)); process.exit(1);
}

import {mkdir, writeFile} from 'node:fs/promises';
import {performance} from 'node:perf_hooks';
import {AI_PROTOCOL, AI_CASE, validateAssessment} from '../src/js/aiPracticeProtocol.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';

// Deliberately excluded from npm test. An explicit flag enables up to five paid requests.
if (!process.argv.includes('--live')) {
  console.error('This check makes up to five paid API calls. Run npm run ai:check:live -- --live when intended.'); process.exit(1);
}
const base = process.env.AI_PRACTICE_SMOKE_BASE || 'http://127.0.0.1:5555/api/ai-practice';
const address = new URL(base);
if (address.protocol !== 'http:' || !['localhost', '127.0.0.1'].includes(address.hostname)) throw new Error('Local pilot server only');
const origin = process.env.AI_PRACTICE_SMOKE_ORIGIN || 'http://127.0.0.1:5173';
async function call(action, body) {
  const response = await fetch(`${base}/${action}`, {method: body ? 'POST' : 'GET', headers: {Origin: origin,
    ...(body && !(body instanceof FormData) ? {'Content-Type': 'application/json'} : {})},
    body: body ? body instanceof FormData ? body : JSON.stringify(body) : undefined, signal: AbortSignal.timeout(65000)});
  if (!response.ok) {
    let code; try {code = (await response.json()).error;} catch {}
    throw new Error(`${action}: ${code || 'request_failed'} (${response.status})`);
  }
  return response;
}
const catalog = await loadPilotCatalog(), checks = [];
let requestsAttempted = 0;
try {
  const status = await (await call('status')).json();
  if (status.protocol !== AI_PROTOCOL || status.mode !== 'live') throw new Error('Save the local API key, enable live mode and restart the AI server first.');
  const results = [];
  for (const [languageId, text] of [['en', 'You got through the workday, and then the pain of missing him caught up with you.'],
    ['no', 'Du kom deg gjennom arbeidsdagen, og så traff smerten ved å savne ham deg.']]) {
    const skillId = 'empathic-understanding', statementId = 'dp_empathic-understanding_case-sara_01';
    const context = catalog(languageId, skillId, statementId);
    const value = {protocol: AI_PROTOCOL, attemptId: crypto.randomUUID(), kind: 'first', caseId: AI_CASE,
      skillId, languageId, statementId, revision: context.revision, text};
    const started = performance.now(); requestsAttempted++;
    const result = await (await call('assess', value)).json();
    if (result.protocol !== AI_PROTOCOL || result.source !== 'ai' || result.attemptId !== value.attemptId) throw new Error('Invalid assessment identity');
    validateAssessment(result.result, text); results.push({value, result});
    checks.push({step: 'assessment', languageId, model: result.model, seconds: +( (performance.now() - started) / 1000).toFixed(2),
      score: result.result.score, feedback: result.result});
  }
  const folder = new URL('../output/playwright/ai-live/', import.meta.url); await mkdir(folder, {recursive: true});
  let clientAudio;
  for (const role of ['client', 'supervisor']) {
    const {value, result} = results[0], payload = role === 'client' ? {role, languageId: value.languageId, skillId: value.skillId,
      statementId: value.statementId, revision: value.revision} : {role, attemptId: result.attemptId};
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

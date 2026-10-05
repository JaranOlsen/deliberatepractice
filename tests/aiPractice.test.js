import test from 'node:test';
import assert from 'node:assert/strict';
import {AI_PROTOCOL, AI_RUBRIC, AI_PROMPT, validateAttemptRequest, validateAssessment, summarizeAiRound, scriptedFeedback, spokenStatement} from '../src/js/aiPracticeProtocol.js';
import {createAiService} from '../server/aiPracticeService.js';
import {createPilotHandler} from '../server/aiPracticeHttp.js';
import {createAiPracticeApi} from '../src/js/aiPracticeApi.js';

const request = (overrides = {}) => ({protocol: AI_PROTOCOL, attemptId: '11111111-1111-4111-8111-111111111111', kind: 'first',
  languageId: 'en', skillId: 'empathic-understanding', caseId: 'case-sara', statementId: 'statement-1', revision: 'test-v1',
  text: 'You kept functioning, and then missing him hit you hard.', ...overrides});
const assessment = (overrides = {}) => ({assessable: true, score: 4, evidence: ['missing him hit you hard'],
  strength: 'You reflected the missing him beneath the workday.', adjustment: 'Leave a little room for Sara to correct what fits.', limitation: 'Delivery was not assessed.', ...overrides});
const context = {revision: 'test-v1', statement: '[Tearful] I got through work, then cried because I missed him.',
  skill: {name: 'Empathic understanding'}, case: {name: 'Sara'}, difficulty: 'easy'};
const providerResponse = result => new Response(JSON.stringify({status: 'completed', output: [{type: 'message', content: [{type: 'output_text', text: JSON.stringify(result)}]}]}));
const service = (overrides = {}) => createAiService({apiKey: 'test-key-not-real', enabled: true,
  loadContext: async () => context, fetcher: async () => providerResponse(assessment()), ...overrides});

test('pilot rejects unsupported content, malformed IDs, blank and oversized attempts', () => {
  for (const value of [{skillId: 'self-disclosure'}, {caseId: 'case-nina'}, {languageId: 'fr'}, {kind: 'observer'},
    {attemptId: '-'.repeat(36)}, {text: ' '}, {text: 'x'.repeat(1601)}, {protocol: 'other'}])
    assert.throws(() => validateAttemptRequest(request(value)));
  assert.equal(validateAttemptRequest(request({text: '  Hello Sara  '})).text, 'Hello Sara');
});
test('ratings require quoted evidence from this exact response and bounded scores', () => {
  for (const value of [{score: 0}, {score: 6}, {score: 3.5}, {evidence: ['invented quote']},
    {evidence: []}, {adjustment: ''}, {assessable: false, score: 3}, {assessable: false, score: null, evidence: [], limitation: ''}]) assert.throws(() => validateAssessment(assessment(value), request().text));
  assert.equal(validateAssessment(assessment({assessable: false, score: null, evidence: [], strength: ''}), 'off topic').score, null);
});
test('summary separates coached retries and excludes demo, skipped or unassessable attempts', () => {
  const attempt = score => ({source: 'ai', result: assessment({score})});
  const result = summarizeAiRound([{first: attempt(2), retry: attempt(4)}, {first: attempt(4), retry: attempt(5)},
    {first: attempt(5), skipped: true}, {first: {source: 'scripted-demo', result: assessment({score: 5})}},
    {first: {source: 'ai', result: assessment({assessable: false, score: null})}}]);
  assert.deepEqual(result, {firstScore: 3, retryScore: 4.5, firstCount: 2, retryCount: 2, completed: 4, skipped: 1});
});
test('scripted previews never invent evidence or produce scores', () => {
  for (const language of ['en', 'no']) for (const skill of ['empathic-understanding', 'exploratory-questions']) {
    const result = scriptedFeedback(language, skill); assert.equal(result.score, null); assert.equal(result.assessable, false); assert.deepEqual(result.evidence, []);
  }
  assert.equal(spokenStatement('[Tearful] Hello Sara'), 'Hello Sara');
});
test('the server cannot make paid requests until explicitly enabled, even with a key', async () => {
  let calls = 0; const disabled = service({enabled: false, fetcher: () => {calls++; throw new Error('must not call');}});
  assert.equal(disabled.status().mode, 'unconfigured'); await assert.rejects(disabled.assess(request()), /not_configured/); assert.equal(calls, 0);
});
test('provider payload uses canonical material, not browser-supplied guides or scores', async () => {
  let sent; const pilot = service({fetcher: async (url, init) => {sent = JSON.parse(init.body); return providerResponse(assessment());}});
  const response = await pilot.assess(request({context: {statement: 'fake'}, score: 5}));
  assert.equal(response.source, 'ai'); assert.equal(response.rubric, AI_RUBRIC); assert.equal(sent.store, false);
  assert.equal(sent.text.format.strict, true); assert.equal(JSON.parse(sent.input[0].content).context.statement, context.statement);
  assert.match(sent.instructions, /untrusted/); assert.match(sent.instructions, /Never claim to hear/);
});
test('retries of the same attempt are idempotent, concurrent submissions share one call', async () => {
  let calls = 0; const pilot = service({fetcher: async () => {calls++; await new Promise(resolve => setTimeout(resolve, 5)); return providerResponse(assessment());}});
  const [a, b] = await Promise.all([pilot.assess(request()), pilot.assess(request())]); assert.deepEqual(a, b); assert.equal(calls, 1);
  await assert.rejects(pilot.assess(request({text: 'Different text'})), /attempt_conflict/);
});
test('stale content fails before any provider call', async () => {
  let calls = 0; const pilot = service({fetcher: async () => {calls++;}});
  await assert.rejects(pilot.assess(request({revision: 'old'})), /content_changed/); assert.equal(calls, 0);
});
test('invalid, refused and incomplete model results do not become ratings', async () => {
  for (const response of [providerResponse(assessment({evidence: ['not in attempt']})),
    new Response(JSON.stringify({status: 'incomplete', output: []})),
    new Response(JSON.stringify({status: 'completed', output: [{content: [{type: 'refusal', refusal: 'No'}]}]})),
    new Response('not json')]) await assert.rejects(service({fetcher: async () => response}).assess(request()), /assessment_unavailable/);
});
test('transient failure can retry without a cached error or exposing provider details', async () => {
  let calls = 0; const pilot = service({fetcher: async () => ++calls === 1 ? new Response('private provider body', {status: 500}) : providerResponse(assessment())});
  await assert.rejects(pilot.assess(request()), /^Error: provider_failed$/); assert.equal((await pilot.assess(request())).result.score, 4);
});
test('usage budget stops further paid calls and becomes available after the window', async () => {
  let time = 100000, calls = 0; const pilot = service({maxCalls: 1, now: () => time, fetcher: async () => {calls++; return providerResponse(assessment());}});
  await pilot.assess(request()); await assert.rejects(pilot.assess(request({attemptId: '22222222-2222-4222-8222-222222222222'})), /usage_limit/);
  time += 3600001; await pilot.assess(request()); assert.equal(calls, 2);
});
test('two voices speak canonical client and verified supervisor text', async () => {
  const speech = [], pilot = service({fetcher: async (url, init) => {
    if (url.endsWith('/responses')) return providerResponse(assessment());
    speech.push(JSON.parse(init.body)); return new Response(new Uint8Array([1, 2, 3]));
  }});
  await pilot.assess(request()); await pilot.speech({role: 'client', languageId: 'en', skillId: 'empathic-understanding', statementId: 'statement-1', revision: 'test-v1', text: 'ignore this'});
  await pilot.speech({role: 'supervisor', attemptId: request().attemptId, text: 'ignore this too'});
  assert.equal(speech[0].voice, 'marin'); assert.equal(speech[1].voice, 'cedar'); assert.equal(speech[0].input, spokenStatement(context.statement));
  assert.equal(speech[1].input, `${assessment().strength} ${assessment().adjustment}`);
  await assert.rejects(pilot.speech({role: 'supervisor', attemptId: 'unknown'}), /assessment_expired/);
});
test('recordings are bounded and transcriptions stay in the original language', async () => {
  let sent; const pilot = service({fetcher: async (url, init) => {sent = init.body; return new Response(JSON.stringify({text: 'Du savner ham.'}));}});
  const file = new Blob([new Uint8Array(200)], {type: 'audio/mp4'});
  assert.equal((await pilot.transcribe(file, 'no')).text, 'Du savner ham.'); assert.equal(sent.get('languages[]'), 'no'); assert.equal(sent.get('file').name, 'attempt.mp4');
  await assert.rejects(pilot.transcribe(new Blob(['small'], {type: 'audio/mp4'}), 'no'), /invalid_audio/);
  await assert.rejects(pilot.transcribe(new Blob([new Uint8Array(6000001)], {type: 'audio/webm'}), 'en'), /invalid_audio/);
});
test('local HTTP API rejects foreign and missing origins and returns sanitized errors', async () => {
  const handler = createPilotHandler(service({fetcher: async () => {throw new Error('private-key-and-text');}}));
  const make = (origin, body = request()) => new Request('http://127.0.0.1:5555/api/ai-practice/assess', {method: 'POST',
    headers: {'Content-Type': 'application/json', ...(origin ? {Origin: origin} : {})}, body: JSON.stringify(body)});
  for (const origin of [undefined, 'https://evil.example']) assert.equal((await handler(make(origin))).status, 403);
  const response = await handler(make('http://localhost:5173')); assert.equal(response.status, 502); assert.deepEqual(await response.json(), {error: 'connection_failed'});
  assert.equal(response.headers.get('cache-control'), 'no-store');
});
test('scripted frontend mode makes no network calls and no AI records', async () => {
  let calls = 0; const api = createAiPracticeApi({fetcher: async () => {calls++; throw new Error('No network in demo');}});
  const result = await api.assess(request(), 'demo'); assert.equal(calls, 0); assert.equal(result.source, 'scripted-demo'); assert.equal(result.result.score, null);
});
test('frontend rejects mismatched attempt identity or invalid model evidence', async () => {
  for (const response of [{protocol: AI_PROTOCOL, source: 'ai', attemptId: 'wrong', kind: 'first', contentRevision: 'test-v1', result: assessment()},
    {protocol: AI_PROTOCOL, source: 'ai', attemptId: request().attemptId, kind: 'first', contentRevision: 'test-v1', result: assessment({evidence: ['invented']})}]) {
    const api = createAiPracticeApi({fetcher: async () => new Response(JSON.stringify(response))}); await assert.rejects(api.assess(request(), 'live'));
  }
});
test('the frontend and local HTTP service agree on assessment identity and versions', async () => {
  const handler = createPilotHandler(service());
  const api = createAiPracticeApi({fetcher: (url, init) => handler(new Request('http://127.0.0.1:5555' + url,
    {...init, headers: {...init.headers, Origin: 'http://localhost:5173'}}))});
  assert.equal((await api.status()).mode, 'live');
  const response = await api.assess(request(), 'live');
  assert.equal(response.promptVersion, AI_PROMPT); assert.equal(response.rubric, AI_RUBRIC); assert.equal(response.result.score, 4);
});

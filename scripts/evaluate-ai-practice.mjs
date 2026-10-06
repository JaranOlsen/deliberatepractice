import {CALIBRATION_CASES} from '../calibration/aiPracticeCases.js';
import {AI_PROTOCOL, AI_CASE, validateAttemptRequest} from '../src/js/aiPracticeProtocol.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';
import {createAiService} from '../server/aiPracticeService.js';

const live = process.argv.includes('--live');
if (live && (process.env.AI_PRACTICE_LIVE_ENABLED !== 'true' || !process.env.OPENAI_API_KEY)) {
  console.error('Live evaluation needs OPENAI_API_KEY and AI_PRACTICE_LIVE_ENABLED=true. It makes paid requests.'); process.exit(1);
}
const loadContext = await loadPilotCatalog();
const service = createAiService({apiKey: process.env.OPENAI_API_KEY, enabled: live, loadContext,
  model: process.env.AI_PRACTICE_MODEL || 'gpt-6.1-sol', maxCalls: CALIBRATION_CASES.length});
const rows = [];
for (const fixture of CALIBRATION_CASES) {
  const context = loadContext(fixture.languageId, fixture.skillId, fixture.statementId);
  if (!context) throw new Error(`Missing canonical content: ${fixture.id}`);
  const input = validateAttemptRequest({...fixture, protocol: AI_PROTOCOL, caseId: AI_CASE, kind: 'first',
    attemptId: crypto.randomUUID(), revision: context.revision});
  if (!live) {rows.push({id: fixture.id, valid: true, provisionalRange: fixture.provisionalRange}); continue;}
  const response = await service.assess(input), score = response.result.score;
  const withinProvisionalRange = fixture.provisionalRange ? score !== null && score >= fixture.provisionalRange[0]
    && score <= fixture.provisionalRange[1] : !response.result.assessable && score === null;
  rows.push({id: fixture.id, ...response, withinProvisionalRange, provisionalRange: fixture.provisionalRange});
}
console.log(JSON.stringify({mode: live ? 'paid-model-evaluation' : 'offline-fixture-validation', humanValidated: false,
  note: 'Provisional labels require independent human review; agreement is not proof of competency validity.', cases: rows}, null, 2));

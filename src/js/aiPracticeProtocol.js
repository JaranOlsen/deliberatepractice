export const AI_PROTOCOL = 'ai-practice-pilot-v1';
export const AI_SKILLS = ['empathic-understanding', 'exploratory-questions'];
export const AI_CASE = 'case-sara';
export const AI_RUBRIC = 'wording-coaching-v1';
export const AI_PROMPT = 'supervisor-wording-v1';
export const MAX_ATTEMPT_LENGTH = 1600;

export function validateAttemptRequest(value) {
  if (!value || value.protocol !== AI_PROTOCOL || !AI_SKILLS.includes(value.skillId)
    || value.caseId !== AI_CASE || !['en', 'no'].includes(value.languageId)
    || !['first', 'retry'].includes(value.kind)
    || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value.attemptId ?? '')
    || typeof value.statementId !== 'string' || typeof value.revision !== 'string'
    || typeof value.text !== 'string' || value.text.trim().length < 2
    || value.text.length > MAX_ATTEMPT_LENGTH) throw new Error('invalid_attempt');
  return {...value, text: value.text.trim()};
}

const normalize = value => value.replace(/\s+/g, ' ').trim();
export function validateAssessment(value, text) {
  if (!value || typeof value.assessable !== 'boolean' || !Array.isArray(value.evidence)
    || value.evidence.length > 2 || value.evidence.some(q => typeof q !== 'string' || !q.trim()
      || q.length > 300 || !normalize(text).includes(normalize(q)))
    || ['strength', 'adjustment', 'limitation'].some(k => typeof value[k] !== 'string' || value[k].length > 500)
    || !value.adjustment.trim()
    || (value.assessable ? !Number.isInteger(value.score) || value.score < 1 || value.score > 5
      || !value.evidence.length || !value.strength.trim() : value.score !== null || !value.limitation.trim())) throw new Error('invalid_assessment');
  return value;
}

export function summarizeAiRound(items) {
  const eligible = items.filter(item => !item.skipped);
  const scores = kind => eligible.map(item => item[kind]).filter(attempt => attempt?.source === 'ai'
    && attempt.result.assessable && Number.isInteger(attempt.result.score)).map(attempt => attempt.result.score);
  const first = scores('first'), retry = scores('retry');
  const average = values => values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
  return {firstScore: average(first), retryScore: average(retry), firstCount: first.length,
    retryCount: retry.length, completed: eligible.length, skipped: items.length - eligible.length};
}

// A preview of the workflow, never an assessment of the text supplied by the user.
export function scriptedFeedback(languageId, skillId) {
  const no = languageId === 'no', reflection = skillId === 'empathic-understanding';
  return {assessable: false, score: null, evidence: [], strength: no
    ? 'Her vil veilederen vise til noe konkret du gjorde i svaret.'
    : 'Here, the supervisor will point to something specific you did in your response.',
  adjustment: no ? reflection ? 'Et eksempel på et øvingsmål: Speil følelsen og hva den betyr, med én kort setning.'
    : 'Et eksempel på et øvingsmål: Still ett åpent spørsmål om opplevelsen her og nå.'
    : reflection ? 'An example practice target: reflect the feeling and what it means in one short sentence.'
      : 'An example practice target: ask one open question about the experience right now.',
  limitation: no ? 'Dette er en forhåndsskrevet demonstrasjon. Svaret ditt er ikke vurdert.'
    : 'This is a scripted demonstration. Your response has not been assessed.'};
}

export function spokenStatement(text) { return text.replace(/^\[[^\]]+\]\s*/, ''); }

export function supervisorFeedbackText(assessment, languageId) {
  const result = assessment.result;
  const rating = assessment.source === 'ai' && result.assessable
    ? languageId === 'no' ? `KI-vurdering: ${result.score} av 5. ` : `AI rating: ${result.score} out of 5. ` : '';
  return `${rating}${result.strength} ${result.adjustment}`.trim();
}

// Stable character identities: never choose a voice by skill, level, language or mood.
// Sara keeps the voice used in the initial pilot; Cedar remains the supervisor.
export const AI_SUPERVISOR_VOICE = 'cedar';
export const AI_CLIENT_VOICES = Object.freeze({
  'case-sara': 'marin', 'case-michael': 'ash', 'case-jason': 'echo',
  'case-laura': 'coral', 'case-carlos': 'onyx', 'case-nina': 'sage',
  'case-aisha': 'nova', 'case-david': 'ballad', 'case-marcus': 'fable',
  'case-arne': 'verse', 'case-mia': 'shimmer', 'case-nora': 'alloy'
});

export function clientSpeechInstructions(context, languageId) {
  const cue = context.statement.match(/^\[([^\]]+)\]/)?.[1] ?? 'Natural delivery fitting the words';
  return `Speak only the supplied utterance in ${languageId === 'no' ? 'natural Norwegian Bokmål' : 'natural English'}.
Keep the same client's base voice and character across statements. Baseline manner: ${context.case.style || 'natural and conversational'}.
For this statement, the acting cue is: ${cue}.
Let that cue shape intonation, pace and emotional intensity while preserving the client's identity.
Use restrained, believable expression, not a theatrical impression. Do not read the cue or add words, sobbing or sound effects.`;
}

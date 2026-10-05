import {AI_PROTOCOL, AI_RUBRIC, AI_PROMPT, scriptedFeedback, validateAssessment} from './aiPracticeProtocol.js';

export function createAiPracticeApi({base = '/api/ai-practice', fetcher = fetch} = {}) {
  async function request(action, body, signal) {
    const response = await fetcher(`${base}/${action}`, {method: body ? 'POST' : 'GET',
      ...(body ? {body: body instanceof FormData ? body : JSON.stringify(body),
        headers: body instanceof FormData ? {} : {'Content-Type': 'application/json'}} : {}),
      signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(65000)]) : AbortSignal.timeout(action === 'status' ? 3000 : 65000)});
    if (!response.ok) {
      let data; try {data = await response.json();} catch {}
      throw new Error(data?.error || 'connection_failed');
    }
    return response;
  }
  return {
    async status() {try {const data = await (await request('status')).json(); return data.protocol === AI_PROTOCOL ? data : {mode: 'unconfigured'};} catch {return {mode: 'unconfigured'};}},
    async assess(value, mode, signal) {
      if (mode === 'demo') return {protocol: AI_PROTOCOL, source: 'scripted-demo', attemptId: value.attemptId, kind: value.kind,
        result: scriptedFeedback(value.languageId, value.skillId), rubric: 'scripted-preview', contentRevision: value.revision, model: 'scripted-preview'};
      const data = await (await request('assess', value, signal)).json();
      if (data.protocol !== AI_PROTOCOL || data.source !== 'ai' || data.attemptId !== value.attemptId || data.kind !== value.kind
        || data.contentRevision !== value.revision || data.rubric !== AI_RUBRIC || data.promptVersion !== AI_PROMPT
        || typeof data.model !== 'string' || !data.model) throw new Error('assessment_unavailable');
      validateAssessment(data.result, value.text); return data;
    },
    async transcribe(blob, languageId, signal) {
      const form = new FormData(); form.append('file', blob, blob.type.includes('mp4') ? 'attempt.mp4' : 'attempt.webm'); form.append('languageId', languageId);
      return (await request('transcribe', form, signal)).json();
    },
    async speech(value, signal) {return (await request('speech', value, signal)).blob();}
  };
}

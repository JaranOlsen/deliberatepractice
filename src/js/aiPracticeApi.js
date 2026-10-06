import {AI_PROTOCOL, AI_RUBRIC, AI_PROMPT, scriptedFeedback, validateAssessment} from './aiPracticeProtocol.js';
import {AI_DELIVERY_VERSION,validateDelivery} from './aiPracticeDelivery.js';

export function createAiPracticeApi({base = '/api/ai-practice', fetcher = fetch, getAccessToken = null, publishableKey = null} = {}) {
  async function request(action, body, signal) {
    const headers={...(body && !(body instanceof FormData)?{'Content-Type':'application/json'}:{}),...(publishableKey?{apikey:publishableKey}:{})};
    if(getAccessToken) {
      const token=await getAccessToken();if(!token)throw new Error('sign_in_required');headers.Authorization=`Bearer ${token}`;
    }
    const response = await fetcher(`${base}/${action}`, {method: body ? 'POST' : 'GET',
      headers,...(body ? {body: body instanceof FormData ? body : JSON.stringify(body)} : {}),
      signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(65000)]) : AbortSignal.timeout(action === 'status' ? 15000 : 65000)});
    if (!response.ok) {
      let data; try {data = await response.json();} catch {}
      throw new Error(data?.error || 'connection_failed');
    }
    return response;
  }
  return {
    async status() {
      try {const data = await (await request('status')).json(); return data.protocol === AI_PROTOCOL ? data : {mode: 'unconfigured'};}
      catch (error) {
        if (['sign_in_required', 'admin_required', 'access_unavailable'].includes(error.message)) throw error;
        return {mode: 'unconfigured'};
      }
    },
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
    async delivery(value,blob,signal) {
      const form=new FormData();form.append('file',blob,'attempt.wav');form.append('attempt',JSON.stringify(value));
      const data=await (await request('delivery',form,signal)).json();
      if(data.protocol!==AI_PROTOCOL||data.attemptId!==value.attemptId||data.version!==AI_DELIVERY_VERSION
        || typeof data.model!=='string' || !data.model || !Number.isFinite(data.metrics?.durationSeconds)
        || data.metrics.durationSeconds<1 || data.metrics.durationSeconds>90.5 || !Number.isInteger(data.metrics.wordsPerMinute)
        || data.metrics.wordsPerMinute<0 || data.metrics.wordsPerMinute>96000 || data.metrics.estimatedFromTranscript!==true)throw new Error('delivery_unavailable');
      validateDelivery(data.result);return data;
    },
    async speech(value, signal) {return (await request('speech', value, signal)).blob();}
  };
}

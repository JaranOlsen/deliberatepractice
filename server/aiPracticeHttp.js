import {PilotError} from './aiPracticeService.js';

export function createPilotHandler(service, {origins = ['http://127.0.0.1:5173', 'http://localhost:5173']} = {}) {
  return async request => {
    const headers = {'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff'};
    const json = (body, status = 200) => new Response(JSON.stringify(body), {status, headers: {...headers, 'Content-Type': 'application/json'}});
    const origin = request.headers.get('origin');
    if (!origin || !origins.includes(origin)) return json({error: 'origin_denied'}, 403);
    headers['Access-Control-Allow-Origin'] = origin; headers.Vary = 'Origin';
    if (request.method === 'OPTIONS') return new Response(null, {status: 204, headers: {...headers,
      'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Headers': 'Content-Type'}});
    const action = new URL(request.url).pathname.split('/').at(-1);
    if (request.method === 'GET' && action === 'status') return json(service.status());
    if (request.method !== 'POST') return json({error: 'not_found'}, 404);
    try {
      if (action === 'transcribe') {
        const form = await request.formData(); return json(await service.transcribe(form.get('file'), form.get('languageId')));
      }
      if (!request.headers.get('content-type')?.startsWith('application/json')) throw new PilotError('invalid_request');
      const value = await request.json();
      if (action === 'assess') return json(await service.assess(value));
      if (action === 'speech') return new Response(await service.speech(value), {headers: {...headers, 'Content-Type': 'audio/mpeg'}});
      return json({error: 'not_found'}, 404);
    } catch (error) {
      // Never return provider messages, recordings, prompts or secret-bearing errors.
      return json({error: error instanceof PilotError ? error.code : 'invalid_request'}, error instanceof PilotError ? error.status : 400);
    }
  };
}

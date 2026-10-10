import {PilotError} from './aiPracticeService.js';

export function createPilotHandler(service, {origins = ['http://127.0.0.1:5173', 'http://localhost:5173'], authorize = null} = {}) {
  return async request => {
    const headers = {'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff'};
    const json = (body, status = 200) => new Response(JSON.stringify(body), {status, headers: {...headers, 'Content-Type': 'application/json'}});
    const origin = request.headers.get('origin');
    if (!origin || !origins.includes(origin)) return json({error: 'origin_denied'}, 403);
    headers['Access-Control-Allow-Origin'] = origin; headers.Vary = 'Origin';
    if (request.method === 'OPTIONS') return new Response(null, {status: 204, headers: {...headers,
      'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey, x-client-info'}});
    const action = new URL(request.url).pathname.split('/').at(-1);
    try {
      const userId = authorize ? await authorize(request) : 'local';
      if (request.method === 'GET' && action === 'status') return json({...service.status(),credits:await service.creditBalance?.(userId)??null});
      if (request.method !== 'POST') return json({error: 'not_found'}, 404);
      // Enforce the same bound in hosted runtimes before multipart/JSON parsing.
      if (Number(request.headers.get('content-length'))>6200000) throw new PilotError('request_too_large',413);
      const reader=request.body?.getReader(),chunks=[];let size=0;
      if(reader) {
        while(true) {
          const {value,done}=await reader.read();if(done)break;
          size+=value.length;
          if(size>6200000){await reader.cancel();throw new PilotError('request_too_large',413);}
          chunks.push(value);
        }
        const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
        request=new Request(request.url,{method:request.method,headers:request.headers,body:bytes});
      }
      if (action === 'transcribe') {
        const form = await request.formData(); return json(await service.transcribe(form.get('file'), form.get('languageId'),userId,form.get('requestId')));
      }
      if(action==='delivery') {
        const form=await request.formData();
        return json(await service.delivery(JSON.parse(form.get('attempt')),form.get('file'),userId));
      }
      if (!request.headers.get('content-type')?.startsWith('application/json')) throw new PilotError('invalid_request');
      const value = await request.json();
      if (action === 'assess') return json(await service.assess(value,userId));
      if (action === 'speech') return new Response(await service.speech(value,userId), {headers: {...headers, 'Content-Type': 'audio/mpeg'}});
      return json({error: 'not_found'}, 404);
    } catch (error) {
      // Never return provider messages, recordings, prompts or secret-bearing errors.
      return json({error: error instanceof PilotError ? error.code : 'invalid_request'}, error instanceof PilotError ? error.status : 400);
    }
  };
}

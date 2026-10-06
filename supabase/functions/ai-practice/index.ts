import {createAiService} from './generated/server/aiPracticeService.js';
import {createPilotHandler} from './generated/server/aiPracticeHttp.js';
import {createAdminAuthorizer,createHostedStore} from './generated/server/aiPracticeHosted.js';
import {loadContext} from './generated/catalog.js';

const url=Deno.env.get('SUPABASE_URL')!;
const publishableKey=Deno.env.get('SUPABASE_ANON_KEY')||JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS')||'{}').default;
const secretKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS')||'{}').default;
if(!url||!publishableKey||!secretKey)throw new Error('AI host configuration unavailable');
const service=createAiService({apiKey:Deno.env.get('OPENAI_API_KEY'),enabled:Deno.env.get('AI_PRACTICE_LIVE_ENABLED')!=='false',
  model:Deno.env.get('AI_PRACTICE_MODEL')||'gpt-6.1-sol',transcriptionModel:Deno.env.get('AI_TRANSCRIPTION_MODEL')||'gpt-transcribe',
  loadContext,attemptStore:createHostedStore({url,secretKey})});
const handler=createPilotHandler(service,{origins:['https://jaranolsen.github.io','http://127.0.0.1:5173','http://localhost:5173'],
  authorize:createAdminAuthorizer({url,publishableKey})});
Deno.serve(handler);

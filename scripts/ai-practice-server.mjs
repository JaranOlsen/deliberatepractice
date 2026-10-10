import {createServer} from 'node:http';
import {createAiService} from '../server/aiPracticeService.js';
import {createPilotHandler} from '../server/aiPracticeHttp.js';
import {loadPilotCatalog} from '../server/aiPracticeContent.js';
import {createAdminAuthorizer,createHostedStore} from '../server/aiPracticeHosted.js';
if(!process.env.VITE_SUPABASE_URL||!process.env.VITE_SUPABASE_ANON_KEY)throw new Error('Local AI requires Supabase Auth configuration');
const service = createAiService({apiKey: process.env.OPENAI_API_KEY,
  enabled: process.env.AI_PRACTICE_LIVE_ENABLED === 'true', model: process.env.AI_PRACTICE_MODEL || 'gpt-6.1-sol',
  transcriptionModel: process.env.AI_TRANSCRIPTION_MODEL || 'gpt-transcribe',
  maxCalls: Math.min(200, Math.max(1, Number(process.env.AI_PRACTICE_MAX_CALLS_PER_HOUR) || 120)),
  loadContext: await loadPilotCatalog(),attemptStore:createHostedStore({url:process.env.VITE_SUPABASE_URL,secretKey:process.env.SUPABASE_SECRET_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY})});
const port = Number(process.env.AI_PRACTICE_PORT) || 5555;
const origins = (process.env.AI_PRACTICE_ORIGINS || 'http://127.0.0.1:5173,http://localhost:5173,http://127.0.0.1:5174,http://localhost:5174').split(',').map(s => s.trim());
if (origins.some(origin => !/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin))) throw new Error('The local pilot accepts loopback origins only');
const handler = createPilotHandler(service, {origins,authorize:createAdminAuthorizer({url:process.env.VITE_SUPABASE_URL,publishableKey:process.env.VITE_SUPABASE_ANON_KEY})});
const server = createServer(async (req, res) => {
  // Bound incoming recordings before parsing multipart data into memory.
  const chunks = []; let size = 0;
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 6200000) {res.writeHead(413, {'Content-Type': 'application/json'}); res.end('{"error":"request_too_large"}'); return;}
      chunks.push(chunk);
    }
    const request = new Request(`http://127.0.0.1:${port}${req.url}`, {method: req.method, headers: req.headers,
      ...(req.method === 'GET' || req.method === 'OPTIONS' ? {} : {body: Buffer.concat(chunks)})});
    const response = await handler(request); res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch {res.writeHead(400, {'Content-Type': 'application/json'}); res.end('{"error":"invalid_request"}');}
});
server.requestTimeout = 70000; server.headersTimeout = 10000;
server.listen(port, '127.0.0.1', () => console.log(`AI pilot server: http://127.0.0.1:${port} (${service.status().mode})`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));

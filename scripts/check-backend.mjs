// Read-only deployment preflight. Never prints keys or fetches user records.
import { existsSync, readFileSync } from 'node:fs';

function readEnv(path) {
  if (!existsSync(path)) return {};
  return Object.fromEntries(readFileSync(path, 'utf8').split(/\r?\n/).flatMap(line => {
    const match = line.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) return [];
    return [[match[1], match[2].trim().replace(/^(["'])(.*)\1$/, '$2')]];
  }));
}

const env = { ...readEnv('.env'), ...readEnv('.env.local'), ...process.env };
const base = (env.VITE_SUPABASE_URL ?? '').replace(/\/+$/, '');
const publicKey = env.VITE_SUPABASE_ANON_KEY;
const adminKey = env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
if (!base || !publicKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.');
  process.exit(1);
}
const url = new URL(base);
if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Invalid Supabase URL');
console.log(`Checking ${url.hostname} (read-only; no emails, user records, or database writes).`);

async function probe(label, path, key, { schema = false } = {}) {
  try {
    const headers = { apikey: key };
    if (!key.startsWith('sb_')) headers.Authorization = `Bearer ${key}`;
    const response = await fetch(base + path, { headers, signal: AbortSignal.timeout(15000) });
    if (response.ok) {
      console.log(`PASS ${label}`);
      return true;
    }
    const result = await response.json().catch(() => ({}));
    const code = typeof result.code === 'string' ? result.code.replace(/[^\w-]/g, '') : '';
    if (schema && !adminKey && [401, 403].includes(response.status)) {
      console.log(`UNVERIFIED ${label}: anonymous reads are denied; use the Supabase plugin to inspect the schema.`);
    } else {
      console.log(`FAIL ${label}: HTTP ${response.status}${code ? ` (${code})` : ''}.`);
    }
    return false;
  } catch (error) {
    const code = error.cause?.code ?? error.name;
    console.log(`FAIL ${label}: ${code === 'ENOTFOUND' ? 'host does not resolve; check the project URL and paused/restoring status in Supabase' : 'service unreachable or timed out'}.`);
    return false;
  }
}

// A zero-row projection verifies the required schema without retrieving personal data.
const checks = [
  ['Auth service', '/auth/v1/health', publicKey],
  ['Profiles schema', '/rest/v1/profiles?select=id,display_name&limit=0', adminKey || publicKey, {schema:true}],
  ['Pairing schema', '/rest/v1/practice_partnerships?select=id,therapist_user_id,observer_user_id,status&limit=0', adminKey || publicKey, {schema:true}],
  ['Ratings schema', '/rest/v1/practice_ratings?select=id,therapist_user_id,created_by_user_id,source,rating_scope,skill_id,case_id,difficulty,score,item_count,completed_statement_ids,client_round_id,practice_mode,rating_rubric,created_at&limit=0', adminKey || publicKey, {schema:true}]
];
const results = await Promise.all(checks.map(args => probe(...args)));
console.log('Sign-in redirects, email delivery, pairing permissions, and rating persistence still require signed-in browser checks.');
if (results.some(passed => !passed)) process.exitCode = 1;

import {PilotError} from './aiPracticeService.js';

// Verify identity with Auth, then read current permission through the user's RLS.
// Neither browser storage nor user-editable metadata grants AI access.
export function createAdminAuthorizer({url, publishableKey, fetcher = fetch}) {
  return async request => {
    const authorization = request.headers.get('authorization');
    if (!authorization?.startsWith('Bearer ') || authorization.length > 10000) throw new PilotError('sign_in_required', 401);
    const headers = {apikey: publishableKey, Authorization: authorization};
    let userResponse, accessResponse;
    try {
      userResponse = await fetcher(`${url}/auth/v1/user`, {headers, signal: AbortSignal.timeout(10000)});
      if (!userResponse.ok) throw new PilotError('sign_in_required', 401);
      const user = await userResponse.json();
      if (!/^[0-9a-f-]{36}$/i.test(user.id ?? '')) throw new PilotError('sign_in_required', 401);
      accessResponse = await fetcher(`${url}/rest/v1/rpc/get_ai_access`, {method:'POST', headers:{...headers,'Content-Type':'application/json'}, body:'{}', signal:AbortSignal.timeout(10000)});
      if (!accessResponse.ok) throw new PilotError('access_unavailable', 503);
      if (await accessResponse.json() !== true) throw new PilotError('admin_required', 403);
      return user.id;
    } catch (error) {throw error instanceof PilotError ? error : new PilotError('access_unavailable',503);}
  };
}

export function createHostedStore({url, secretKey, fetcher = fetch}) {
  const headers = {apikey:secretKey, Authorization:`Bearer ${secretKey}`, 'Content-Type':'application/json'};
  async function rpc(name, body) {
    let response;
    try {response = await fetcher(`${url}/rest/v1/rpc/${name}`, {method:'POST', headers, body:JSON.stringify(body), signal:AbortSignal.timeout(10000)});}
    catch {throw new PilotError('access_unavailable',503);}
    if (!response.ok) {
      let message; try {message=(await response.json()).message;} catch {}
      const code = ['usage_limit','admin_required','attempt_conflict','invalid_attempt'].includes(message) ? message : 'access_unavailable';
      throw new PilotError(code, code==='usage_limit'?429:code==='admin_required'?403:code==='attempt_conflict'?409:503);
    }
    // PostgREST can return an empty successful body for void RPCs.
    try {const text=await response.text();return text?JSON.parse(text):null;}
    catch {throw new PilotError('access_unavailable',503);}
  }
  const args = (userId,attemptId,action) => ({input_user_id:userId,input_attempt_id:attemptId,input_action:action});
  return {
    reserve: userId => rpc('reserve_ai_call',{input_user_id:userId}),
    begin: (userId,attemptId,action,signature) => rpc('begin_ai_attempt',{...args(userId,attemptId,action),input_signature:signature}),
    complete: async (userId,attemptId,action,lease,result) => {
      if (await rpc('finish_ai_attempt',{...args(userId,attemptId,action),input_lease:lease,input_result:result}) !== true) throw new PilotError('attempt_pending',409);
    },
    abort: (userId,attemptId,action,lease) => rpc('abort_ai_attempt',{...args(userId,attemptId,action),input_lease:lease}),
    async read(userId,attemptId,action) {
      const query = new URLSearchParams({user_id:`eq.${userId}`,attempt_id:`eq.${attemptId}`,action:`eq.${action}`,
        expires_at:`gt.${new Date().toISOString()}`,select:'result',limit:'1'});
      let response;
      try {response=await fetcher(`${url}/rest/v1/ai_attempt_cache?${query}`,{headers,signal:AbortSignal.timeout(10000)});}
      catch {throw new PilotError('access_unavailable',503);}
      if (!response.ok) throw new PilotError('access_unavailable',503);
      return (await response.json())[0]?.result ?? null;
    }
  };
}

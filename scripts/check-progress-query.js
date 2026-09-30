// Exercise the real backend adapter and installed Supabase SDK against local mocked HTTP.
// Run with Playwright CLI against the local Vite server, in an isolated browser.
async (page) => {
  const origin = new URL(page.url()).origin;
  if (!['localhost', '127.0.0.1'].includes(new URL(origin).hostname)) throw new Error('Use a local preview.');
  const response = await page.request.get(origin + '/deliberatepractice/src/js/backend.js');
  let source = await response.text();
  const sdkPath = source.match(/import\("([^\"]*supabase[^\"]*)"\)/)?.[1];
  if (!sdkPath) throw new Error('Unable to locate the Vite Supabase module.');
  // Only the test module's configuration changes; production code remains intact.
  source = source.replace(/const SUPABASE_URL = [^\n]+/, `const SUPABASE_URL = ${JSON.stringify(origin)};`)
    .replace(/const SUPABASE_ANON_KEY = [^\n]+/, 'const SUPABASE_ANON_KEY = "local-test-key";')
    .replace('auth: {', 'auth: { storageKey: "dp-query-test-auth",').replace('autoRefreshToken: true', 'autoRefreshToken: false');
  const calls = [];
  await page.route('**/src/js/backend.js?progress-query-check*', route => route.fulfill({contentType:'text/javascript', body:source}));
  await page.route(origin + '/auth/v1/**', route => route.fulfill({contentType:'application/json', body:JSON.stringify({id:'query-test-user', aud:'authenticated', email:'test@example.invalid'})}));
  await page.route(origin + '/rest/v1/practice_ratings?*', async route => {
    const url = new URL(route.request().url());
    calls.push(Object.fromEntries(url.searchParams));
    await route.fulfill({contentType:'application/json', body:'[]'});
  });
  try {
    const result = await page.evaluate(async ({sdkPath, origin}) => {
      const { createClient } = await import(sdkPath);
      const auth = createClient(origin, 'local-test-key', {auth:{storageKey:'dp-query-test-auth', autoRefreshToken:false, detectSessionInUrl:false}});
      const encode = value => btoa(JSON.stringify(value)).replaceAll('=', '').replaceAll('+', '-').replaceAll('/', '_');
      const token = encode({alg:'HS256',typ:'JWT'}) + '.' + encode({sub:'query-test-user', aud:'authenticated', exp:Math.floor(Date.now()/1000)+3600}) + '.' + encode('local-test');
      const {error} = await auth.auth.setSession({access_token:token, refresh_token:'local-refresh'});
      if (error) throw error;
      const backend = await import('./src/js/backend.js?progress-query-check=' + Date.now());
      await backend.listPracticeRatings({source:'self'});
      await backend.listPracticeRatings({source:'observer',rubric:'group-consistency-v1'});
      await backend.listPracticeRatings({source:'self',rubric:'legacy'});
      await backend.listPracticeRatings({source:'observer',rubric:'group-skill-v2'});
      let invalidRejected = false;
      try { await backend.listPracticeRatings({source:'unexpected'}); } catch { invalidRejected = true; }
      auth.auth.stopAutoRefresh();
      let invalidRubricRejected = false;
      try { await backend.listPracticeRatings({rubric:'unknown'}); } catch { invalidRubricRejected = true; }
      return {invalidRejected, invalidRubricRejected};
    }, {sdkPath, origin});
    if (!result.invalidRejected || !result.invalidRubricRejected || calls.length !== 4) throw new Error('Unexpected query count or invalid source accepted.');
    for (const [index, call] of calls.entries()) {
      if (call.therapist_user_id !== 'eq.query-test-user' || call.source !== 'eq.' + ['self','observer','self','observer'][index]
        || call.rating_rubric !== ['eq.individual-mastery-v1','eq.group-consistency-v1','is.null','eq.group-skill-v2'][index]
        || call.limit !== '500' || call.order !== 'created_at.desc') throw new Error('Rating query lost its owner/source/limit/order constraints.');
    }
    return {status:'passed', checks:['real SDK query scoped to signed-in therapist', 'self and observer filters', 'latest 500 limit', 'individual/group/legacy scale filters', 'invalid source and scale rejected']};
  } finally {
    await page.unroute('**/src/js/backend.js?progress-query-check*');
    await page.unroute(origin + '/auth/v1/**');
    await page.unroute(origin + '/rest/v1/practice_ratings?*');
    await page.evaluate(() => localStorage.removeItem('dp-query-test-auth'));
    await page.reload();
  }
}

// Checks request cancellation and isolation of an existing practice session. No model calls.
async page => {
  const url = page.url(); if (!['localhost', '127.0.0.1'].includes(new URL(url).hostname)) throw new Error('Local pilot only');
  const context = await page.context().browser().newContext({viewport: {width: 390, height: 844}});
  const assert = (condition, message) => {if (!condition) throw new Error(message);};
  let releaseFirst, seenFirst; const firstSeen = new Promise(resolve => {seenFirst = resolve;});
  const held = new Promise(resolve => {releaseFirst = resolve;});
  const attempts = []; let externalCalls = 0;
  try {
    await context.addInitScript(() => {
      localStorage.setItem('dp_app_tour_v1', JSON.stringify({disabled: true}));
      localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId: 'en', practiceMode: 'individual', groupUiVersion: 2}));
    });
    await context.route('https://api.openai.com/**', route => {externalCalls++; return route.abort();});
    const p = await context.newPage();
    await p.route('**/api/ai-practice/status', route => route.fulfill({json: {protocol: 'ai-practice-pilot-v1', mode: 'live'}}));
    await p.route('**/api/ai-practice/assess', async route => {
      const value = route.request().postDataJSON(); attempts.push(value);
      if (attempts.length === 1) {seenFirst(); await held;}
      try {await route.fulfill({json: {protocol: 'ai-practice-pilot-v1', source: 'ai', attemptId: value.attemptId, kind: value.kind,
        contentRevision: value.revision, model: 'mock', rubric: 'wording-coaching-v2', promptVersion: 'supervisor-wording-v2', result: {assessable: true, score: 4,
          evidence: [value.text], strength: 'You reflected the missing him.', adjustment: 'Keep the reflection close to Sara’s words.', limitation: ''}}});} catch { /* The paused request was aborted on purpose. */ }
    });
    await p.goto(url);
    await p.locator('#home-library').click(); await p.locator('[data-skill-id=empathic-understanding]').click();
    await p.locator('[data-case-id=case-sara]').click(); await p.locator('#start-practice').click();
    const started = await p.evaluate(() => localStorage.getItem('dp_practice_session_v1')); assert(started, 'An ordinary round is active');
    await p.locator('#join-shared-room').click();
    // Focused practice uses its established leave modal.
    const pause = p.locator('#pause-round');
    if (await pause.isVisible()) await pause.click(); else await p.locator('#practice-exit-pause').click();
    const existing = await p.evaluate(() => localStorage.getItem('dp_practice_session_v1'));
    assert(JSON.parse(existing).roundId === JSON.parse(started).roundId, 'Ordinary pause retains the original round');
    await p.locator('#home-ai-practice').click(); await p.locator('[data-ai-skill=empathic-understanding]').click(); await p.locator('[data-ai-case=case-sara]').click(); await p.locator('#ai-begin').click();
    await p.locator('#ai-response').fill('You held it together, and then missing him hit you.');
    await p.locator('#ai-send').click(); await firstSeen;
    await p.locator('#join-shared-room').click(); await p.locator('#practice-exit-pause').click(); await p.locator('#home-ai-practice').click();
    releaseFirst(); await p.waitForTimeout(150);
    assert(await p.locator('#ai-response').isVisible() && await p.locator('#ai-send').isEnabled(), 'A late response cannot advance a paused/resumed round');
    assert((await p.locator('#ai-response').inputValue()).startsWith('You held'), 'Pending draft survives cancellation');
    await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor();
    assert(attempts[0].attemptId === attempts[1].attemptId, 'Resume retries use the original attempt identity');
    assert(await p.evaluate(() => localStorage.getItem('dp_practice_session_v1')) === existing, 'The existing focused round remains unchanged');
    assert(externalCalls === 0, 'No OpenAI calls');
    return {status: 'passed', cancelledRequest: true, staleResponseIgnored: true, attemptIdPreserved: true, existingRoundPreserved: true};
  } finally {releaseFirst?.(); await context.close();}
}

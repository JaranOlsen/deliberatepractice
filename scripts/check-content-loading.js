// Run with Playwright CLI against a local Vite dev or production preview.
// Uses guest practice only. No emails or live ratings are sent.
async (page) => {
  if (!['localhost', '127.0.0.1'].includes(new URL(page.url()).hostname)) throw new Error('Use a local preview.');
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const click = id => page.locator('#' + id).click();
  const saved = () => page.evaluate(() => JSON.parse(localStorage.getItem('dp_practice_session_v1')));
  const requests = [];
  const errors = [];
  const onError = error => errors.push(error.message);
  const onRequest = request => {
    if (request.resourceType() === 'fetch' && /\/(en|no)-.*\.json/.test(new URL(request.url()).pathname)) requests.push(request.url());
  };
  page.on('pageerror', onError);
  page.on('request', onRequest);
  let hold = false;
  let fail = false;
  let corrupt = false;
  let started;
  let release;
  const pattern = '**/*empathic-understanding*.json*';
  await page.route(pattern, async route => {
    if (route.request().resourceType() !== 'fetch') { await route.continue(); return; }
    if (hold) {
      started?.();
      await new Promise(resolve => { release = resolve; });
    }
    if (fail || corrupt) await route.fulfill({status: fail ? 503 : 200, contentType:'application/json', body: '{}'});
    else await route.continue();
  });
  try {
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.locator('[data-language-id="en"]').waitFor();
    await page.waitForLoadState('networkidle');
    assert(requests.length === 0, 'Opening the app must not download exercise files');
    await page.locator('[data-language-id="en"]').click();
    assert(requests.length === 0, 'Choosing a language must not download all its exercises');
    hold = true;
    const downloading = new Promise(resolve => { started = resolve; });
    await page.locator('[data-skill-id="empathic-understanding"]').click();
    await downloading;
    await page.locator('[data-case-id="case-sara"]').click();
    assert(await page.locator('#start-practice').isDisabled(), 'A delayed download must block an empty round');
    assert(await saved() === null, 'Reviewing a brief while loading must not create a round');
    assert((await page.locator('#content-load-status').textContent()).includes('Loading practice'), 'The delay must be visible');
    release(); hold = false;
    await click('start-practice');
    assert(requests.length === 1 && requests[0].includes('en-empathic-understanding'), 'Practice must download only the chosen language/skill');
    const first = await saved();
    await click('next-statement');
    await click('back-to-cases'); await click('pause-round');
    const paused = await saved();
    assert(paused.index === 1 && paused.roundId === first.roundId, 'The round must retain its position and identity');
    requests.length = 0;
    await page.reload();
    await page.locator('#resume-button').waitFor();
    assert(requests.length === 0, 'A paused round must not download content before Resume');
    assert((await page.locator('#resume-details').textContent()).includes('2 of 10'), 'Resume counts must be available before downloading');
    fail = true;
    await click('resume-button');
    await page.locator('#content-load-retry').waitFor();
    assert(JSON.stringify(await saved()) === JSON.stringify(paused), 'A failed resume must preserve the entire paused round');
    assert(!(await page.locator('#practice-area').isVisible()), 'A failed resume must not open an empty practice screen');
    corrupt = true; fail = false;
    await click('content-load-retry');
    await page.locator('#content-load-retry').waitFor();
    assert(JSON.stringify(await saved()) === JSON.stringify(paused), 'An incomplete content file must also preserve the round');
    await page.setViewportSize({width: 320, height: 740});
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Loading failures must fit a narrow screen');
    await page.screenshot({path: 'output/playwright/content-download-error-320.png', fullPage: true});
    corrupt = false;
    await click('content-load-retry');
    await page.locator('#practice-area').waitFor();
    assert((await saved()).roundId === paused.roundId && (await saved()).index === 1, 'Successful retry must restore the same paused round');
    await click('back-to-cases'); await click('pause-round');
    await click('back-to-skills'); await click('back-to-language');
    await page.locator('[data-language-id="no"]').click();
    await page.locator('[data-skill-id="empathic-understanding"]').click();
    await page.locator('[data-case-id="case-sara"]').click();
    await click('start-practice');
    assert(requests.at(-1).includes('no-empathic-understanding'), 'Switching language must download that language’s exercises');
    const norwegian = await page.locator('#statement-text').textContent();
    assert(norwegian.length > 20 && /\b(jeg|Jeg)\b/.test(norwegian), 'The downloaded Norwegian statement must render');
    await click('back-to-cases'); await click('pause-round');
    const before = requests.length;
    await page.locator('[data-case-id="case-michael"]').click();
    await click('start-practice');
    assert(requests.length === before, 'Another case within the same skill/language must reuse its content');
    await click('back-to-cases'); await click('pause-round');
    await page.reload();
    await page.locator('#resume-button').waitFor();
    hold = true;
    const staleStarted = new Promise(resolve => { started = resolve; });
    await click('resume-button'); await staleStarted;
    await click('back-to-language');
    release(); hold = false;
    await page.waitForLoadState('networkidle');
    assert(await page.locator('#language-selection').isVisible(), 'Late resume downloads must not override navigation');
    assert(await page.locator('#content-load-notice').isHidden(), 'Cancelled loading must not leave a stale notice');
    assert(errors.length === 0, errors.join('; '));
    return {status:'passed', checks:['no exercise download at startup', 'chosen language/skill only', 'delayed start protection', 'failed and incomplete downloads retain paused round', 'retry restores position/identity', 'language switch and caching', 'late resume respects navigation']};
  } finally {
    release?.();
    await page.unroute(pattern);
    page.off('pageerror', onError);
    page.off('request', onRequest);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  }
}

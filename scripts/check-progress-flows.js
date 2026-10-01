// Run with the Playwright CLI against the local Vite server in an isolated browser.
// All history and authentication are mocked; no live data is read or changed.
async (page) => {
  if (!['127.0.0.1', 'localhost'].includes(new URL(page.url()).hostname)) throw new Error('Use a local preview.');
  page.setDefaultTimeout(10000);
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const errors = [];
  const onError = (error) => errors.push(error.message);
  page.on('pageerror', onError);
  const click = (id) => page.locator('#' + id).click();
  const row = { skill_id: 'empathic-understanding', case_id: 'case-sara', difficulty: 'easy', score: 4, item_count: 3, created_at: '2026-09-29T12:00:00Z' };
  let data = {self: [], observer: [{...row, score: 2, item_count: 1}]};
  let fail = false;
  let hold = false;
  let pending;
  let release;
  const waitLoaded = () => page.locator('.progress-skill').first().waitFor();
  await page.route('**/src/js/backend.js*', async (route) => route.fulfill({ contentType: 'text/javascript', body: `
    const user = {id:"test-self",email:"test@example.invalid"};
    export const isSupabaseReady = () => true;
    export const isAccessExpired = (date) => !!date && Date.parse(date) <= Date.now();
    export const getAuthSession = async () => user ? {user} : null;
    let authChange;
    export const onAuthStateChange = (callback) => { authChange = callback; return () => {}; };
    export const ensureUserProfile = async () => ({id:"test-self",display_name:"Test Therapist"});
    export const listPracticeTargets = async () => [
      {target_user_id:"test-self",target_kind:"self",display_name:"Test Therapist"},
      {target_user_id:"test-partner",target_kind:"observer",display_name:"Test Partner",partnership_id:"test-pair"}
    ];
    export const submitPracticeRating = async (payload) => {
      const response = await fetch('/__dp_test_rating', {method:'POST',body:JSON.stringify(payload)});
      if (!response.ok) throw new Error('Test network failure');
      return response.json();
    };
    export const listPracticeRatings = async ({source,rubric}) => {
      const response = await fetch('/__dp_test_history?source=' + source + '&rubric=' + rubric);
      if (!response.ok) throw new Error('Unavailable');
      return response.json();
    };
    export const submitFeedback = async () => { throw new Error('Unexpected feedback submission'); };
    export const redeemAccessCode = async () => { throw new Error('Unexpected access-code submission'); };
    export const logAccessCodeAttempt = async () => {};
    export const signInWithMagicLink = async () => { throw new Error('Unexpected email request'); };
    export const signOut = async () => { authChange?.(null); };
    export const updateUserProfile = async () => ({});
    export const createPairingInvite = async () => ({});
    export const acceptPairingInvite = async () => ({});
    export const revokePracticePartnership = async () => ({});
  ` }));

  await page.route('**/__dp_test_history?*', async (route) => {
    const source = new URL(route.request().url()).searchParams.get('source');
    const rubric = new URL(route.request().url()).searchParams.get('rubric');
    const body = JSON.stringify(rubric === 'legacy' ? [{...row, score:5}] : rubric === 'group-consistency-v1' ? [{...row, score:1}] : rubric === 'group-skill-v2' ? [{...row,score:3}] : data[source]);
    if (hold && source === 'self' && rubric === 'individual-mastery-v1') {
      pending?.();
      await new Promise((resolve) => { release = resolve; });
    }
    await route.fulfill({status: fail ? 503 : 200, contentType:'application/json', body});
  });
  try {
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId:'en'})); });
    await page.reload();
    await click('open-progress');
    await waitLoaded();
    assert(await page.evaluate(() => document.activeElement.id === 'self-chart-title' && document.querySelector('main').inert), 'Progress dialog must own focus');
    for (let i = 0; i < 18; i++) {
      await page.keyboard.press('Tab');
      assert(await page.evaluate(() => document.querySelector('#progress-modal').contains(document.activeElement)), 'Keyboard focus must stay in progress');
    }
    await page.keyboard.press('Escape');
    assert(await page.evaluate(() => document.activeElement.id === 'open-progress' && !document.querySelector('main').inert), 'Closing progress must restore library focus');
    await click('open-progress');
    await waitLoaded();
    assert(await page.locator('.self-chart-axis').count() === 12, 'An empty radar must keep all twelve axes');
    assert(await page.locator('.self-chart-dot').count() === 0, 'No ratings must not appear as zero scores');
    assert(await page.locator('.self-chart-missing').count() === 12, 'Unrated skills need distinct markers');
    data.self = [row];
    await click('self-chart-refresh');
    await waitLoaded();
    assert(await page.locator('.self-chart-dot').count() === 1, 'One rating must be visible on the radar');
    const firstPosition = await page.locator('.self-chart-dot').evaluate(el => [el.getAttribute('cx'), el.getAttribute('cy')]);
    data.self.push({...row, skill_id:'therapist-self-awareness', score:3});
    await click('self-chart-refresh');
    await waitLoaded();
    assert(await page.locator('.self-chart-dot').count() === 2, 'Two rated skills must remain readable');
    assert(JSON.stringify(await page.locator('.self-chart-dot').last().evaluate(el => [el.getAttribute('cx'), el.getAttribute('cy')])) === JSON.stringify(firstPosition), 'Adding a skill must not move existing axes');
    const history = page.locator('.progress-skill').filter({has:page.locator('[data-practice-skill="empathic-understanding"]')});
    assert((await history.textContent()).includes('3 rated items') && (await history.textContent()).includes('Sep'), 'History must show counts and latest date');
    await page.locator('#progress-source').selectOption('observer');
    await waitLoaded();
    assert((await page.locator('#self-chart-status').textContent()).includes('2.0/5'), 'Observer ratings must be separate from self ratings');
    assert(await page.locator('.self-chart-dot').count() === 1, 'Self-only skills must not leak into observer chart');
    await page.locator('#progress-rubric').selectOption('group-consistency-v1');
    await waitLoaded();
    assert((await page.locator('#self-chart-status').textContent()).includes('1.0/5'), 'Group consistency must not mix with individual mastery');
    assert((await page.locator('#progress-rubric-note').textContent()).includes('Consistently'), 'The selected scale must be explained');
    await page.locator('#progress-rubric').selectOption('group-skill-v2');
    await waitLoaded();
    assert((await page.locator('#self-chart-status').textContent()).includes('3.0/5'), 'Skill performance must remain separate from historical consistency');
    assert((await page.locator('#progress-rubric-note').textContent()).includes('therapist'), 'Skill performance identifies what is assessed');
    await page.locator('#progress-rubric').selectOption('legacy');
    await waitLoaded();
    assert((await page.locator('#self-chart-status').textContent()).includes('5.0/5'), 'Earlier ratings must remain accessible separately');
    assert((await page.locator('#progress-rubric-note').textContent()).includes('before the scale was recorded'), 'Legacy ratings must not be assigned an inferred scale');
    await page.locator('#progress-rubric').selectOption('individual-mastery-v1');
    await waitLoaded();
    const allSkills = await page.locator('[data-practice-skill]').evaluateAll(els => els.map(el => el.dataset.practiceSkill));
    data.self = allSkills.map((id,index) => ({...row, skill_id:id, score: 1 + index % 5}));
    await page.locator('#progress-source').selectOption('self');
    await waitLoaded();
    assert(await page.locator('.self-chart-area').count() === 1, 'Complete data must retain the filled radar profile');
    await page.setViewportSize({width:900,height:950});
    await page.locator('#self-chart-title').scrollIntoViewIfNeeded();
    await page.screenshot({path:'output/playwright/progress-radar-desktop.png'});
    await page.keyboard.press('Escape');
    assert(await page.locator('#active-target-button').count() === 0, 'Personal progress no longer has a paired-therapist selector');
    await page.evaluate(()=>localStorage.setItem('dp_active_therapist_target_v1:test-self',JSON.stringify({targetId:'test-partner'})));
    await click('open-progress');
    await waitLoaded();
    await page.locator('[data-practice-skill="empathic-understanding"]').click();
    assert(await page.locator('#case-selection').isVisible(), 'Practice action must open that skill’s cases');
    await page.locator('[data-case-id="case-sara"]').click();
    await click('start-practice');
    assert(await page.evaluate(() => JSON.parse(localStorage.getItem('dp_practice_session_v1')).roundTarget.target_user_id === 'test-self'), 'Practicing from your history must target yourself');
    await click('account-button');
    assert(await page.locator('[data-practice-skill]').first().isDisabled(), 'Progress navigation must not abandon active practice');
    await page.keyboard.press('Escape');
    await click('back-to-cases');
    await click('pause-round');
    await click('back-to-skills');
    await click('back-to-language');
    await page.locator('[data-language-id="no"]').click();
    await click('open-progress');
    await waitLoaded();
    await page.setViewportSize({width:320,height:740});
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.querySelector('#progress-modal').scrollWidth <= document.querySelector('#progress-modal').clientWidth), 'Norwegian progress must fit 320px');
    await page.locator('#self-chart-title').scrollIntoViewIfNeeded();
    await page.screenshot({path:'output/playwright/progress-radar-320.png'});
    fail = true;
    await click('self-chart-refresh');
    await page.waitForFunction(() => document.querySelector('#self-chart-status').textContent.includes('Kunne'));
    assert(await page.locator('.progress-skill').count() === 0, 'Failed refresh must not present stale evidence as current');
    fail = false;
    await click('self-chart-refresh');
    await waitLoaded();
    hold = true;
    const scaleStarted = new Promise(resolve => {pending = resolve;});
    await click('self-chart-refresh');
    await scaleStarted;
    await page.locator('#progress-rubric').selectOption('group-consistency-v1');
    await waitLoaded();
    release();
    hold = false;
    await page.waitForLoadState('networkidle');
    assert((await page.locator('#self-chart-status').textContent()).includes('1.0/5'), 'A late response from another scale must not replace current ratings');
    await page.locator('#progress-rubric').selectOption('individual-mastery-v1');
    await waitLoaded();
    hold = true;
    const started = new Promise(resolve => {pending = resolve;});
    await click('self-chart-refresh');
    await started;
    await page.locator('#progress-source').selectOption('observer');
    await waitLoaded();
    release();
    hold = false;
    await page.waitForLoadState('networkidle');
    assert((await page.locator('#self-chart-status').textContent()).includes('2.0/5'), 'Late self response must not replace observer evidence');
    hold = true;
    const signoutStarted = new Promise(resolve => {pending = resolve;});
    await page.locator('#progress-source').selectOption('self');
    await signoutStarted;
    await page.keyboard.press('Escape');
    await click('account-button');
    await click('auth-signout');
    release();
    hold = false;
    await page.waitForLoadState('networkidle');
    assert(await page.locator('.progress-skill').count() === 0, 'Late request must not restore progress after sign-out');
    assert(errors.length === 0, errors.join('; '));
    return {status:'passed', checks:['empty, sparse and complete radar', 'separate rating sources', 'history and practice target', 'active-round protection', 'Norwegian mobile layout', 'error retry and stale-response isolation']};
  } finally {
    release?.();
    await page.unroute('**/src/js/backend.js*');
    await page.unroute('**/__dp_test_history?*');
    page.off('pageerror', onError);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  }
}

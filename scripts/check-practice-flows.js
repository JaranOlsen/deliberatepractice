// Run against the local Vite server with:
// playwright-cli run-code --filename=scripts/check-practice-flows.js
// The backend is intercepted: this never sends emails or writes real ratings.
async (page) => {
  if (!['127.0.0.1', 'localhost'].includes(new URL(page.url()).hostname)) throw new Error('Use a local preview.');
  const errors = [];
  const onPageError = (error) => errors.push(error.message);
  page.on('pageerror', onPageError);
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const click = (id) => page.locator(`#${id}`).click();
  const text = (id) => page.locator(`#${id}`).textContent();
  const visible = (id) => page.locator(`#${id}`).isVisible();
  const session = () => page.evaluate(() => JSON.parse(localStorage.getItem('dp_practice_session_v1')));
  let signedIn = false;
  let saveFails = true;
  let holdProfile = false;
  let releaseProfile;
  const saves = [];
  await page.route('**/src/js/backend.js*', async (route) => route.fulfill({ contentType: 'text/javascript', body: `
    const user = ${signedIn ? '{id:"test-self",email:"test@example.invalid"}' : 'null'};
    export const isSupabaseReady = () => true;
    export const isAccessExpired = (date) => !!date && Date.parse(date) <= Date.now();
    export const getAuthSession = async () => user ? {user} : null;
    export const onAuthStateChange = () => () => {};
    export const ensureUserProfile = async () => {
      await fetch('/__dp_test_profile');
      return {id:"test-self",display_name:"Test Therapist"};
    };
    export const listPracticeTargets = async () => [
      {target_user_id:"test-self",target_kind:"self",display_name:"Test Therapist"},
      {target_user_id:"test-partner",target_kind:"observer",display_name:"Test Partner",partnership_id:"test-pair"}
    ];
    export const submitPracticeRating = async (payload) => {
      const response = await fetch('/__dp_test_rating', {method:'POST',body:JSON.stringify(payload)});
      if (!response.ok) throw new Error('Test network failure');
      return response.json();
    };
    export const listPracticeRatings = async () => [];
    export const submitFeedback = async () => { throw new Error('Unexpected feedback submission'); };
    export const redeemAccessCode = async () => { throw new Error('Unexpected access-code submission'); };
    export const logAccessCodeAttempt = async () => {};
    export const signInWithMagicLink = async () => { throw new Error('Unexpected email request'); };
    export const signOut = async () => {};
    export const updateUserProfile = async () => ({});
    export const createPairingInvite = async () => ({});
    export const acceptPairingInvite = async () => ({});
    export const revokePracticePartnership = async () => ({});
  ` }));
  await page.route('**/__dp_test_profile', async (route) => {
    if (holdProfile) await new Promise(resolve => { releaseProfile = resolve; });
    await route.fulfill({status: 200, body: '{}'});
  });
  await page.route('**/__dp_test_rating', async (route) => {
    saves.push(JSON.parse(route.request().postData()));
    await route.fulfill({ status: saveFails ? 503 : 200, contentType: 'application/json', body: '{"id":"test-rating"}' });
  });
  try {
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('#language-list button').first().waitFor();
  await page.setViewportSize({width:390,height:844});
  assert(await page.locator('#group-entry #practice-format').isVisible(), 'Practice format belongs at the beginning with room entry');
  assert(await page.locator('#group-create').isVisible() && await page.locator('#group-join').isVisible(), 'Group room actions are beside the initial format choice');
  await page.screenshot({path:'output/playwright/practice-choice-mobile.png',fullPage:true});
  const setup = async (language, skill, mode = 'individual') => {
    if (!(await visible('language-selection'))) {
      if (await visible('case-selection')) await click('back-to-skills');
      await click('back-to-language');
    }
    await page.locator(`input[name="practice-mode"][value="${mode === 'triad' ? 'group' : mode}"]`).check();
    if(mode === 'triad') await page.locator('#shared-device').check();
    assert(await page.locator('#group-room-actions').isHidden() === (mode !== 'group'), 'Only separate-device groups offer room entry');
    await page.locator(`[data-language-id="${language}"]`).click();
    await page.locator(`[data-skill-id="${skill}"]`).click();
    await page.locator('[data-case-id="case-sara"]').click();
    assert(await page.locator('#practice-format').isHidden(), 'Case preparation does not repeat the format decision');
    await click('start-practice');
  };
  await setup('en', 'empathic-understanding');
  assert((await session()).completedStatementIds.length === 0, 'Opening an item must not count as practice');
  assert((await text('individual-focus')).includes('felt meaning'), 'The current skill criterion must stay visible');
  const beforeRetry = await session();
  assert(/^[0-9a-f-]{36}$/.test(beforeRetry.roundId), 'New rounds must have a stable UUID');
  await click('toggle-suggestion');
  assert(await visible('individual-example-note'), 'Comparison should explain how to use the example');
  await click('retry-individual');
  assert(!(await visible('suggestion-text')), 'Retry must hide the example');
  assert((await text('individual-instruction')).includes('changing one thing'), 'Retry needs a concrete new instruction');
  assert(JSON.stringify(await session()) === JSON.stringify(beforeRetry), 'Retry must retain the item and completion count');
  assert(await page.evaluate(() => document.activeElement.id === 'statement-text'), 'Retry must return focus to the statement');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'output/playwright/individual-guidance-mobile.png', fullPage: true });
  await click('back-to-cases');
  assert(await visible('leave-overlay'), 'Back must offer pause');
  assert(!(await visible('finish-completed')), 'Do not offer finish for zero practiced items');
  assert(await page.evaluate(() => document.activeElement.id === 'continue-practice' && document.querySelector('main').inert), 'Leave dialog must own focus');
  await page.keyboard.press('Shift+Tab');
  assert(await page.evaluate(() => document.activeElement.id === 'pause-round'), 'Dialog must wrap keyboard focus');
  await page.keyboard.press('Escape');
  assert(!(await visible('leave-overlay')), 'Escape must dismiss the leave dialog');
  assert(await page.evaluate(() => document.activeElement.id === 'back-to-cases' && !document.querySelector('main').inert), 'Focus must return to the trigger');
  await click('back-to-cases');
  await click('pause-round');
  assert(await visible('resume-card'), 'Paused round must be reachable on case selection');
  assert(!(await visible('last-setup-card')), 'A paused round must take priority over repeat setup');
  assert((await session()).completedStatementIds.length === 0, 'Pausing must not add a completion');
  await page.reload();
  await click('resume-button');
  await page.locator('#practice-area').waitFor();
  assert((await session()).roundId === beforeRetry.roundId, 'Pause and reload must preserve the round ID');
  await click('next-statement');
  assert((await session()).index === 1, 'Resume and advance must retain position');
  await click('back-to-cases');
  await click('finish-completed');
  assert((await text('round-outcome')).includes('1 practiced'), 'Partial finish must count only completed items');
  assert(!(await visible('rating-scale')), 'Guests should not see a disabled rating form');
  assert(await session() === null, 'Finished rounds must not be resumable');
  await page.keyboard.press('Escape');
  await page.reload();
  assert(!(await visible('resume-card')), 'Reload must not offer a completed round');
  assert(await visible('skill-selection'), 'Returning users should land in their remembered language library');
  assert(await visible('last-setup-card'), 'Completed practice should leave a repeatable setup');
  await page.screenshot({ path: 'output/playwright/returning-library-mobile.png', fullPage: true });
  await click('repeat-last-setup');
  assert(await visible('case-brief-screen'), 'Repeat setup must allow reviewing format and therapist before starting');
  assert(await session() === null, 'Preparing another round must not create an active session');
  assert(await page.locator('input[value="individual"]').isChecked(), 'Repeat must restore format');
  await click('back-to-cases');
  await click('back-to-skills');
  console.log('PASS individual pause, partial finish, resume, dialog keyboard behavior');

  await setup('en', 'empathic-understanding', 'triad');
  assert(!(await visible('toggle-suggestion')), 'Shared groups use the inline therapist retry example');
  assert(await page.locator('#shared-workflow .room-workflow li').count() === 6, 'Shared groups use the room six-step workflow');
  assert((await page.locator('#shared-workflow li').first().textContent()).includes('Client reads'), 'The client opens the shared workflow');
  assert((await page.locator('#shared-workflow li').last().textContent()).includes('After 3 items'), 'Rating follows three shared items');
  assert(await page.locator('#shared-group-guidance .room-role-guide').count() === 3, 'A shared device offers all three roles');
  for (const width of [320,390,600]) {
    await page.setViewportSize({width,height:844});
    await page.locator('#triad-controls').scrollIntoViewIfNeeded();
    const frame = await page.locator('#triad-protocol').boundingBox();
    for (const id of ['next-statement','triad-pass-item']) {
      const control = await page.locator('#'+id).boundingBox();
      assert(control.x>=frame.x && control.x+control.width<=frame.x+frame.width && control.y>=frame.y && control.y+control.height<=frame.y+frame.height, 'Finish and pass stay inside the shared-device frame');
      assert(control.height>=44 && control.height<130, 'Shared actions remain touch-sized, without flex growth into tall buttons');
    }
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), 'Shared group practice fits phone width');
    await page.screenshot({path:`output/playwright/shared-group-actions-${width}.png`});
  }
  const firstRound = await session();
  // An old saved phase keeps its item/order/owner and resumes with the whole-item workflow.
  await page.evaluate(()=>{const round=JSON.parse(localStorage.getItem('dp_practice_session_v1'));round.triadPhase='client_feedback';localStorage.setItem('dp_practice_session_v1',JSON.stringify(round));});
  await page.reload(); await click('resume-button'); await page.locator('#practice-area').waitFor();
  assert(JSON.stringify((await session()).roundStatementIds) === JSON.stringify(firstRound.roundStatementIds), 'Sample order survives reload from an old phase');
  await page.locator('#shared-your-part-therapist > summary').click();
  await click('shared-example-reveal');
  assert(await visible('shared-example-response'), 'An optional therapist example is available for retry');
  await click('next-statement');
  assert((await session()).completedStatementIds.length === 1 && (await session()).index === 1, 'One Finish action resolves the whole item');
  assert(!(await visible('shared-example-response')), 'The next shared item hides the previous example');
  assert(await page.locator('#shared-your-part-therapist').evaluate(e=>e.open), 'Shared role card expansion persists between items');
  for (let i = 0; i < 2; i++) { await click('triad-pass-item'); await click('triad-pass-confirm'); }
  assert(await visible('triad-debrief'), 'Resolved group round must reach debrief');
  assert((await text('triad-debrief-counts')).includes('1 practiced · 2 passed'), 'Passes must be separated from completion');
  await click('triad-complete-round');
  assert(await session() === null, 'Completed group round must not be saved as active');
  await page.screenshot({ path: 'output/playwright/release-completion-mobile.png', fullPage: true });
  await click('repeat-round');
  assert(await visible('case-brief-screen'), 'Rotation should return to setup');
  assert(!(await page.locator('input[name="practice-mode"]').first().isDisabled()), 'New round format must be editable');
  await click('start-practice');
  await click('view-case-brief');
  assert(await page.locator('input[name="practice-mode"]').first().isDisabled(), 'Active round format changes must not discard progress');
  await click('back-to-cases');
  await click('pause-round');
  await page.reload();
  await click('resume-button');
  await page.locator('#practice-area').waitFor();
  assert(await visible('case-brief-screen'), 'Paused brief must restore without losing the round');
  await click('start-practice');
  for (let i = 0; i < 3; i++) { await click('triad-pass-item'); await click('triad-pass-confirm'); }
  await click('triad-complete-round');
  assert((await text('round-outcome')).includes('0 practiced · 3 passed'), 'All-pass rounds must not claim practice');
  await click('rating-skip');
  console.log('PASS shared workflow, bounded controls, legacy order restoration, reveal, pass, debrief, rotation, all-pass finish');

  await page.reload();
  await setup('no', 'therapist-self-awareness', 'triad');
  const sharedGuide = await page.locator('#shared-group-guidance').textContent();
  assert(sharedGuide.includes('du trenger ikke svare klienten'), 'Self-awareness does not require a client response');
  assert(sharedGuide.includes('gå så ut av rollen'), 'Reader feedback happens out of role');
  assert(sharedGuide.includes('uten tolkning eller press om å dele'), 'Coaching respects boundaries');
  assert(sharedGuide.includes('Del bare det du selv velger'), 'Retry respects disclosure choice');
  for (const role of ['client','therapist','observer']) await page.locator(`#shared-your-part-${role} > summary`).click();
  await page.setViewportSize({width:320,height:740});
  await page.locator('#triad-controls').scrollIntoViewIfNeeded();
  const sharedFrame = await page.locator('#triad-protocol').boundingBox();
  const finishAction = await page.locator('#next-statement').boundingBox();
  assert(finishAction.x>=sharedFrame.x && finishAction.x+finishAction.width<=sharedFrame.x+sharedFrame.width, 'Norwegian shared controls fit their frame');
  await page.screenshot({path:'output/playwright/shared-awareness-320.png',fullPage:true});
  await click('feedback-toggle');
  assert((await page.locator('#feedback-reason option[value="translation"]').textContent()) === 'Problem med oversettelsen', 'Report reasons must be translated');
  assert((await page.locator('#feedback-details').getAttribute('placeholder')).startsWith('Fortell'), 'Report placeholder must be translated');
  await click('back-to-cases');
  await click('pause-round');
  await page.setViewportSize({ width: 320, height: 740 });
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Norwegian case screen must fit 320px');
  await page.screenshot({ path: 'output/playwright/release-cases-320.png', fullPage: true });
  await page.locator('[data-case-id="case-aisha"]').click();
  assert((await text('unlock-code-label')) === 'Tilgangskode', 'Paywall label must be translated');
  await page.keyboard.press('Escape');
  assert(!(await visible('paywall-overlay')), 'Paywall must close on Escape');
  await click('account-button');
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    assert(await page.evaluate(() => document.querySelector('#account-modal').contains(document.activeElement)), 'Account focus must remain inside dialog');
  }
  await page.keyboard.press('Escape');
  console.log('PASS self-awareness instructions, Norwegian controls, 320px layout and account/paywall dialogs');

  signedIn = true;
  holdProfile = true;
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForFunction(() => document.querySelector('#account-button').textContent === 'Account');
  await page.locator('input[name="practice-mode"][value="individual"]').check();
  await page.locator('[data-language-id="en"]').click();
  await page.locator('[data-skill-id="empathic-understanding"]').click();
  await page.locator('[data-case-id="case-sara"]').click();
  assert(await page.locator('#start-practice').isDisabled(), 'A signed-in round must wait for its therapist target');
  assert((await text('round-target-note')).includes('Loading account'), 'Account loading must explain why practice cannot start yet');
  assert(await session() === null, 'Account loading must not create a guest round');
  holdProfile = false;
  releaseProfile();
  await click('start-practice');
  assert((await session()).roundTarget?.target_user_id === 'test-self', 'Practice must capture the loaded account target');
  await click('account-button');
  assert(await page.locator('#account-overlay').isVisible() && await page.locator('#therapist-overlay').count() === 0, 'Account opens the account panel without the retired therapist selector');
  await page.keyboard.press('Escape');
  const expandedRound = await session();
  assert(expandedRound.orderIds.length === 12 && ['11','12'].every(number =>
    expandedRound.orderIds.includes(`dp_empathic-understanding_case-sara_${number}`)), 'The round includes both new items');
  for (let i = 0; i < 12; i++) {
    if (i >= 10) {
      await click('toggle-suggestion');
      assert((await text('suggestion-text')).trim().length > 20, 'New items have a displayed example response');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Expanded items fit phone width');
      if (i === 11) await page.screenshot({path:'output/playwright/expanded-english-item-12-mobile.png',fullPage:true});
    }
    await click('next-statement');
  }
  await page.locator('[data-rating-score="4"]').click();
  await click('rating-submit');
  await page.waitForFunction(() => document.querySelector('#rating-status').textContent.includes('could not confirm'));
  assert(await page.locator('[data-rating-score="4"]').getAttribute('aria-pressed') === 'true', 'Failed save must retain score');
  assert(!(await page.locator('#rating-submit').isDisabled()), 'Failed save must allow retry');
  saveFails = false;
  await click('rating-submit');
  await page.waitForFunction(() => document.querySelector('#rating-status').textContent === 'Rating saved.');
  assert(saves.length === 2 && saves.every((payload) => payload.itemCount === 12 && payload.therapistUserId === 'test-self' && payload.score === 4), 'Rating payload must retain count, score and round owner');
  assert(saves[0].practiceMode === 'individual' && saves[0].ratingRubric === 'group-skill-v2' && saves[0].roundId && saves[0].roundId === saves[1].roundId, 'A failed save and retry must use the same round ID');
  assert(!(await visible('rating-submit')), 'Successful save must not offer duplicate submission');
  await click('rating-skip');
  await page.reload();
  assert(!(await visible('resume-card')), 'Saved round must not return as unfinished');
  assert(await page.locator('#active-target-button').count() === 0 && await page.locator('#pairing-create-button').count() === 0, 'Retired pairing and target controls are absent');
  await page.evaluate(()=>localStorage.setItem('dp_active_therapist_target_v1:test-self',JSON.stringify({targetId:'test-partner'})));
  await page.reload();
  await setup('en', 'empathic-understanding', 'triad');
  assert((await session()).roundTarget.target_user_id === 'test-self', 'An old paired-target preference must not redirect a new local round');
  const legacySharedRound = await session();
  await click('next-statement');
  await click('view-case-brief');
  await click('back-to-cases');
  await click('finish-completed');
  await click('triad-complete-round');
  await page.locator('[data-rating-score="3"]').click();
  await click('rating-submit');
  await page.waitForFunction(() => document.querySelector('#rating-status').textContent === 'Rating saved.');
  assert(saves.at(-1).practiceMode === 'triad' && saves.at(-1).ratingRubric === 'group-skill-v2' && saves.at(-1).source === 'self' && saves.at(-1).therapistUserId === 'test-self'
    && saves.at(-1).itemCount === 1, 'Shared-device assessment must save to this account with completed items only');
  await click('rating-skip');
  // A paused round from the old pairing flow keeps its captured therapist.
  await page.evaluate(round=>{
    round.roundId=crypto.randomUUID();
    round.roundTarget={target_user_id:'test-partner',display_name:'Test Partner',target_kind:'observer',partnership_id:'test-pair'};
    localStorage.setItem('dp_practice_session_v1',JSON.stringify(round));
  },legacySharedRound);
  await page.reload();await click('resume-button');
  assert((await session()).roundTarget.target_user_id === 'test-partner', 'Retiring pairing must not silently retarget an unfinished legacy round');
  await click('next-statement');
  for (let i=0;i<2;i++) { await click('triad-pass-item');await click('triad-pass-confirm'); }
  await click('triad-complete-round');await page.locator('[data-rating-score="2"]').click();await click('rating-submit');
  await page.waitForFunction(()=>document.querySelector('#rating-status').textContent==='Rating saved.');
  assert(saves.at(-1).therapistUserId==='test-partner' && saves.at(-1).source==='observer', 'Existing paused observer rounds retain their captured rating ownership');
  await click('rating-skip');
  console.log('PASS self ratings, retired pairing, stale preference isolation, preserved legacy round target and save retry');
  await page.reload();
  await click('repeat-last-setup');
  assert(await page.locator('input[value="group"]').isChecked(), 'Repeat setup must restore group format');
  await click('back-to-cases');
  await setup('no', 'therapist-self-awareness');
  assert((await text('individual-instruction')).includes('Du trenger ikke svare klienten'), 'Individual awareness must retain its exercise contract');
  await click('toggle-suggestion');
  assert((await text('individual-example-note')).includes('ingen riktig følelse'), 'Awareness examples must not imply a correct feeling');
  await click('retry-individual');
  assert((await text('individual-instruction')).includes('indre reaksjon'), 'Awareness retry must invite noticing');
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Individual guidance must fit Norwegian at 320px');
  await page.screenshot({ path: 'output/playwright/individual-awareness-320.png', fullPage: true });
  await page.evaluate(() => {
    localStorage.removeItem('dp_practice_session_v1');
    localStorage.setItem('dp_last_practice_setup_v1', JSON.stringify({skillId:'removed-skill',caseId:'removed-case'}));
  });
  await page.reload();
  assert(await visible('skill-selection') && !(await visible('last-setup-card')), 'Stale remembered setup must fall back to the library');
  console.log('PASS remembered setup, repeat format, individual comparison/retry and awareness');
  await page.evaluate(() => localStorage.setItem('dp_last_practice_setup_v1', JSON.stringify({
    skillId: 'empathic-understanding', caseId: 'case-aisha', practiceMode: 'triad'
  })));
  await page.reload();
  await click('repeat-last-setup');
  assert(await visible('paywall-overlay'), 'Remembered setup must not bypass current case access');
  assert(await session() === null, 'A locked repeated setup must not start practice');
  await page.keyboard.press('Escape');
  assert(errors.length === 0, `Unexpected application errors: ${errors.join('; ')}`);
  return { status: 'passed', checks: ['remembered setup and individual retry', 'individual lifecycle', 'group lifecycle and rotation', 'self-awareness', 'localization and mobile layout', 'keyboard dialogs', 'self ratings, legacy targets and retry'] };
  } finally {
    holdProfile = false;
    releaseProfile?.();
    await page.unroute('**/src/js/backend.js*');
    await page.unroute('**/__dp_test_profile');
    await page.unroute('**/__dp_test_rating');
    page.off('pageerror', onPageError);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  }
}

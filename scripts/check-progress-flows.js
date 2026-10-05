// Run with the Playwright CLI against the local Vite server in an isolated browser.
// All history and authentication are mocked; no live data is read or changed.
async (page) => {
  if (!['127.0.0.1', 'localhost'].includes(new URL(page.url()).hostname)) throw new Error('Use a local preview.');
  const targetSkill = new URL(page.url()).searchParams.get('testSkill') ?? 'empathic-understanding';
  page.setDefaultTimeout(10000);
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const errors = [];
  const onError = (error) => errors.push(error.message);
  page.on('pageerror', onError);
  const click = (id) => page.locator('#' + id).click();
  const row = { skill_id: targetSkill, case_id: 'case-sara', difficulty: 'easy', score: 4, item_count: 3, created_at: '2026-09-29T12:00:00Z' };
  let data = {self: [], observer: [{...row, score: 2, item_count: 1}]};
  let fail = false;
  let hold = false;
  let pending;
  let release;
  const waitLoaded = () => page.locator('.progress-skill').first().waitFor();
  const headerClear = async () => {
    const button = await page.locator('#self-chart-refresh').boundingBox();
    for (const id of ['self-chart-title','self-chart-description']) {
      const text = await page.locator('#'+id).boundingBox();
      assert(button.x+button.width<=text.x || text.x+text.width<=button.x
        || button.y+button.height<=text.y || text.y+text.height<=button.y, 'Refresh never overlaps the progress title or description');
    }
    assert(button.height>=43.5,'Refresh has a phone-sized touch target: '+button.height);
  };
  await page.route('**/src/js/backend.js*', async (route) => route.fulfill({ contentType: 'text/javascript', body: `
    const user = {id:"test-self",email:"test@example.invalid"};
    export const isSupabaseReady = () => true;
    export const isAccessExpired = (date) => !!date && Date.parse(date) <= Date.now();
    export const getAuthSession = async () => user ? {user} : null;
    let authChange;
    export const onAuthStateChange = (callback) => { authChange = callback; return () => {}; };
    export const repeatCurrentSession = () => authChange?.({user});
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
    export const getPracticeGoal = async scope => scope.skillId==='${targetSkill}' ? 'Pause before reflecting.' : '';
    export const savePracticeGoal = async s => s.text;
    export const listMasteryRatings=async()=>[];
      export const getMasteryCapabilities=async()=>null;
      export const submitMasteryRating=async()=>{throw new Error('Unexpected mastery write');};
      export const listPracticeRatings = async ({source}) => {
      const response = await fetch('/__dp_test_history?source=' + source);
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
    const body = JSON.stringify(data[source]);
    if (hold && source === 'self') {
      pending?.();
      await new Promise((resolve) => { release = resolve; });
    }
    await route.fulfill({status: fail ? 503 : 200, contentType:'application/json', body});
  });
  try {
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId:'en'})); });
    await page.reload();
    await page.locator('input[name="practice-mode"][value="individual"]').check();
    await click('home-library');
    await click('home-progress');
    await waitLoaded();
    assert(await page.evaluate(() => document.activeElement.id === 'self-chart-title' && document.querySelector('main').inert), 'Progress dialog must own focus');
    for (let i = 0; i < 18; i++) {
      await page.keyboard.press('Tab');
      assert(await page.evaluate(() => document.querySelector('#progress-modal').contains(document.activeElement)), 'Keyboard focus must stay in progress');
    }
    await page.keyboard.press('Escape');
    assert(await page.evaluate(() => document.activeElement.id === 'home-progress' && !document.querySelector('main').inert), 'Closing progress must restore library focus');
    await click('home-progress');
    await waitLoaded();
    assert(await page.locator('.self-chart-axis').count() === 0, 'Empty progress must not draw unrated axes');
    assert(await page.locator('.self-chart-dot').count() === 0, 'No ratings must not appear as zero scores');
    assert(await page.locator('.self-chart-missing').count() === 0, 'Unrated skills are excluded from the radar');
    data.self = [row];
    await click('self-chart-refresh');
    await waitLoaded();
    assert(await page.locator('.radar-small-row').count() === 1, 'One rated skill uses a readable score comparison');
    await page.getByText('Continue your saved next-attempt target.',{exact:true}).waitFor();
    assert(await page.locator(`[data-suggested-skill="${targetSkill}"]`).count()===1,'One suggestion continues the latest skill’s private target');
    assert(!(await page.locator('#self-chart').textContent()).includes('Pause before reflecting.'),'The private note itself is not displayed on the progress dashboard');
    assert(await page.locator('.self-chart-axis').count() === 0, 'One skill must not create a degenerate radar');
    data.self.push({...row, skill_id:'therapist-self-awareness', score:3});
    await click('self-chart-refresh');
    await waitLoaded();
    assert(await page.locator('.radar-small-row').count() === 2, 'Two rated skills remain readable');
    assert(await page.locator('.radar-small-profile h5').count() === 2, 'Only rated skills appear in the compact comparison');
    const history = page.locator('.progress-skill').filter({has:page.locator(`[data-practice-skill="${targetSkill}"]`)});
    assert((await history.textContent()).includes('3 rated items') && (await history.textContent()).includes('Sep'), 'History must show counts and latest date');
    const original = data.self;
    const day=86400000, now=Date.now();
    const dated=(days,extra={})=>({...row,created_at:new Date(now-days*day).toISOString(),...extra});
    const roundRows=[1,2,3,4].map((set_number,i)=>dated(i,{id:'round-'+set_number,parent_round_id:'complete',set_number,score:5}));
    const partialRows=[1,3].map((set_number,i)=>dated(i+5,{id:'partial-'+set_number,parent_round_id:'partial',set_number,score:5}));
    data.self=[...Array.from({length:520},(_,i)=>dated(120+i,{id:'historic-'+i,score:1})),...roundRows,...partialRows,
      dated(8,{id:'recent-7',score:5}),dated(9,{id:'recent-8',score:5}),dated(10,{id:'recent-9',score:1}),dated(2,{id:'hard',difficulty:'hard',score:2})];
    await click('self-chart-refresh');await waitLoaded();
    assert((await page.locator('[data-progress-level=easy] strong').textContent()).includes('5.0/5'),'Recent profile excludes large old volumes and caps the newest easy ratings at eight');
    assert((await page.locator('[data-progress-level=easy] small').textContent()).includes('8 ratings'),'Recent sample size is explicit');
    await history.locator('summary').click();
    await history.locator('.progress-trend svg').waitFor();
    assert(await history.locator('.progress-trend .self-chart-dot').count()===20,'Skill opens a bounded dated trend');
    assert(await history.locator('.progress-trend-legend span').count()===2,'Trend distinguishes easy and hard practice');
    assert((await history.textContent()).includes('4 of 4 set ratings saved')&&(await history.textContent()).includes('2 of 4 set ratings saved'),'Complete and incomplete round rating counts stay distinct');
    const more=history.getByRole('button',{name:'Show earlier ratings'});
    while(await more.isVisible())await more.click();
    assert(await history.locator('.progress-rating-row').count()===530,'Every one of 530 records appears once, including explicit grouped sets and ungrouped old history');
    for(const width of [320,390]){
      await page.setViewportSize({width,height:844});
      assert(await page.evaluate(()=>document.querySelector('#progress-modal').scrollWidth<=document.querySelector('#progress-modal').clientWidth),'Expanded learning history fits a phone');
    }
    await history.locator('summary').scrollIntoViewIfNeeded();
    await page.screenshot({path:'output/playwright/progress-skill-history-390.png'});
    await page.locator('[data-progress-period=all]').click();
    assert(!(await page.locator('[data-progress-level=easy] strong').textContent()).includes('5.0/5'),'All history is available without being presented as the recent profile');
    data.self=[dated(200,{id:'stale-only'})];await click('self-chart-refresh');await waitLoaded();
    await page.locator('[data-progress-period=recent]').click();
    assert((await page.locator('#self-chart-status').textContent()).includes('No ratings in the last 90 days'),'Stale evidence is identified instead of silently shown as current');
    assert(await page.locator('.self-chart-dot').count()===0&&await page.locator('.radar-small-row').count()===0,'Stale skills have no current axes or scores');
    await page.locator('[data-progress-period=all]').click();
    assert(await page.locator('.radar-small-row').count()===1,'Earlier practice remains inspectable');
    await page.locator('[data-progress-period=recent]').click();
    data.self=original;await click('self-chart-refresh');await waitLoaded();
    const ids = await page.locator('[data-practice-skill]').evaluateAll(els => els.slice(0,3).map(el=>el.dataset.practiceSkill));
    data.self = ids.flatMap((skill_id,index) => [
      {...row,skill_id,score:5},
      ...(index<2?[{...row,skill_id,difficulty:'moderate',score:3}]:[]),
      ...(index===0?[{...row,skill_id,difficulty:'hard',score:2}]:[])
    ]);
    await click('self-chart-refresh'); await waitLoaded();
    assert(await page.locator('.self-chart-axis').count() === 3, 'Radar excludes every unrated skill');
    assert(await page.locator('.radar-series').count() === 3, 'Difficulty profiles share one radar');
    assert(await page.locator('.self-chart-dot').count() === 6 && await page.locator('.self-chart-missing').count() === 0, 'Missing levels create no zero-score points');
    assert(await page.locator('.self-chart-area').count() === 0, 'A sparse profile leaves unmeasured map regions open');
    const stableAxes = await page.locator('.self-chart-axis').evaluateAll(els => Object.fromEntries(els.map(el => [el.dataset.radarSkill,[el.getAttribute('x2'),el.getAttribute('y2')]])));
    data.self = [...data.self, {...row,skill_id: 'experiential-focusing',score:4}];
    await click('self-chart-refresh');await waitLoaded();
    const expandedAxes = await page.locator('.self-chart-axis').evaluateAll(els => Object.fromEntries(els.map(el => [el.dataset.radarSkill,[el.getAttribute('x2'),el.getAttribute('y2')]])));
    assert(Object.entries(stableAxes).every(([id,position]) => JSON.stringify(position) === JSON.stringify(expandedAxes[id])), 'Adding a rated skill never moves existing map positions');
    await page.locator('[data-progress-level=hard]').click();
    assert(await page.locator('.radar-small-row').count() === 1, 'A level can be inspected alone');
    assert(await page.locator('.self-chart-axis').count() === 0, 'Focusing a level excludes skills without data at that level');
    assert(await page.evaluate(()=>document.activeElement.dataset.progressLevel==='hard'), 'Level selection retains keyboard focus');
    await page.locator('[data-progress-level=all]').click();
    data.self = ['exploratory-questions','empathic-refocusing','empathic-understanding'].map(skill_id=>({...row,skill_id,score:4}));
    await click('self-chart-refresh');await waitLoaded();
    assert(await page.locator('.self-chart-value-line').count()===0,'Non-neighbouring rated skills never connect across unmeasured map positions');
    assert(await page.locator('#progress-source').isVisible() && await page.locator('#progress-source option').count() === 2, 'Self/observer choice is directly visible');
    assert(await page.locator('#progress-rubric, #progress-filters').count() === 0, 'Scale chooser and filter disclosure are removed');
    await page.locator('#progress-source').selectOption('observer');
    await waitLoaded();
    assert((await page.locator('[data-progress-level=easy] strong').textContent()).includes('2.0/5'), 'Observer ratings must be separate from self ratings');
    assert(await page.locator('.radar-small-row').count() === 1, 'Self-only skills must not leak into observer chart');
    const allSkills = await page.locator('[data-practice-skill]').evaluateAll(els => els.map(el => el.dataset.practiceSkill));
    data.self = allSkills.map((id,index) => ({...row, skill_id:id, score: 1 + index % 5}));
    await page.locator('#progress-source').selectOption('self');
    await waitLoaded();
    assert(await page.locator('.self-chart-area').count() === 1, 'Complete data must retain the filled radar profile');
    assert(await page.locator('.radar-region').count()===4,'The map has four short corner labels');
    assert(await page.locator('.self-chart-label > title').count()===allSkills.length,'Every radar label retains its full skill name');
    assert(!(await page.locator('.self-chart-label tspan').allTextContents()).some(text=>/…|\.\.\./.test(text)),'Radar labels have deliberate short names without truncation');
    const labels=await page.locator('.self-chart-label').evaluateAll(els=>els.map(e=>{const box=e.getBBox(),frame=e.ownerSVGElement.viewBox.baseVal;return {name:e.querySelector('title').textContent,x:box.x,y:box.y,width:box.width,height:box.height,fits:box.x>=frame.x&&box.y>=frame.y&&box.x+box.width<=frame.x+frame.width&&box.y+box.height<=frame.y+frame.height};}));
    assert(labels.every(b=>b.fits),'Full radar labels stay within the chart: '+JSON.stringify(labels.filter(b=>!b.fits)));
    const overlaps=labels.flatMap((a,i)=>labels.filter((b,j)=>j>i&&a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y).map(b=>[a.name,b.name]));
    assert(!overlaps.length,'Full radar labels do not overlap: '+JSON.stringify(overlaps));
    for(const width of [320,390]){
      await page.setViewportSize({width,height:844});
      for(const source of ['observer','self']){
        await page.locator('#progress-source').selectOption(source);await waitLoaded();await headerClear();
        await page.evaluate(()=>document.documentElement.style.fontSize='200%');
        const layout=await page.evaluate(()=>({page:document.documentElement.scrollWidth,width:innerWidth,modal:document.querySelector('#progress-modal').scrollWidth,modalWidth:document.querySelector('#progress-modal').clientWidth,overflow:[...document.querySelectorAll('#progress-modal *')].filter(e=>e.getBoundingClientRect().width&&e.getBoundingClientRect().right>innerWidth+1).slice(0,10).map(e=>({id:e.id,class:e.className,parent:e.parentElement?.className}))}));
        assert(layout.page<=layout.width+1 && layout.modal<=layout.modalWidth+1,'English progress fits enlarged text: '+JSON.stringify(layout));
        await page.evaluate(()=>document.documentElement.style.fontSize='');
      }
    }
    await page.locator('#self-chart-title').scrollIntoViewIfNeeded();
    await page.screenshot({path:'output/playwright/progress-header-mobile.png'});
    await page.setViewportSize({width:900,height:950});
    await page.locator('#self-chart-title').scrollIntoViewIfNeeded();
    await page.screenshot({path:'output/playwright/progress-radar-desktop.png'});
    await page.keyboard.press('Escape');
    assert(await page.locator('#active-target-button').count() === 0, 'Personal progress no longer has a paired-therapist selector');
    await page.evaluate(()=>localStorage.setItem('dp_active_therapist_target_v1:test-self',JSON.stringify({targetId:'test-partner'})));
    await click('home-progress');
    await waitLoaded();
    await page.locator(`[data-practice-skill="${targetSkill}"]`).click();
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
    await click('home-language');
    await page.locator('[data-language-id="no"]').click();
    await click('home-library');
    await click('home-progress');
    await waitLoaded();
    await page.setViewportSize({width:320,height:740});
    for(const source of ['observer','self']){
      await page.locator('#progress-source').selectOption(source);await waitLoaded();await headerClear();
      await page.evaluate(()=>document.documentElement.style.fontSize='200%');
      const layout=await page.evaluate(()=>({page:document.documentElement.scrollWidth,width:innerWidth,modal:document.querySelector('#progress-modal').scrollWidth,modalWidth:document.querySelector('#progress-modal').clientWidth,overflow:[...document.querySelectorAll('#progress-modal *')].filter(e=>e.getBoundingClientRect().width&&e.getBoundingClientRect().right>innerWidth+1).slice(0,10).map(e=>({id:e.id,class:e.className,parent:e.parentElement?.className}))}));
      assert(layout.page<=layout.width+1 && layout.modal<=layout.modalWidth+1,'Norwegian progress fits enlarged text: '+JSON.stringify(layout));
      await page.evaluate(()=>document.documentElement.style.fontSize='');
    }
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
    const repeatedSessionStarted = new Promise(resolve => {pending = resolve;});
    await click('self-chart-refresh');
    await repeatedSessionStarted;
    await page.evaluate(async () => (await import('/deliberatepractice/src/js/backend.js')).repeatCurrentSession());
    release();
    hold = false;
    await waitLoaded();
    assert(await page.locator('.self-chart-dot').count() === allSkills.length, 'A repeated current-user session must not cancel progress loading');
    await page.locator('#progress-source').selectOption('observer');
    await waitLoaded();
    await page.evaluate(async () => (await import('/deliberatepractice/src/js/backend.js')).repeatCurrentSession());
    assert(await page.locator('#progress-source').inputValue() === 'observer', 'Token refresh preserves the selected source');
    assert((await page.locator('[data-progress-level=easy] strong').textContent()).includes('2.0/5'), 'Token refresh preserves loaded ratings');
    await page.locator('#progress-source').selectOption('self');
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
    assert((await page.locator('[data-progress-level=easy] strong').textContent()).includes('2.0/5'), 'Late self response must not replace observer evidence');
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
    return {status:'passed', checks:['empty, sparse and complete radar', 'difficulty overlays and focused levels', 'separate rating sources', 'dated skill trends, complete and incomplete rounds, 530 history rows', 'recent versus all history and stale evidence', 'history and practice target', 'active-round protection', 'Norwegian mobile layout', 'repeated session and token refresh', 'error retry and stale-response isolation']};
  } finally {
    release?.();
    await page.unroute('**/src/js/backend.js*');
    await page.unroute('**/__dp_test_history?*');
    page.off('pageerror', onError);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  }
}

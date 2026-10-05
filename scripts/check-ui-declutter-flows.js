// Playwright CLI: run-code --filename=scripts/check-ui-declutter-flows.js
// Local Vite preview only. Isolated anonymous contexts; every account/backend write is forbidden.
async page => {
  const url = page.url();
  const assert = (ok, message) => { if (!ok) throw new Error(message); };
  assert(['127.0.0.1', 'localhost'].includes(new URL(url).hostname), 'Local preview only');
  const contexts = [], errors = [], checked = [];
  let stage = 'setup', lastPage;
  const backend = `
    export const isSupabaseReady=()=>true,isAccessExpired=()=>false;
    export const getAuthSession=async()=>null,onAuthStateChange=()=>()=>{};
    const forbidden=async()=>{throw new Error('Unexpected account or backend operation');};
    export const ensureUserProfile=forbidden,listPracticeTargets=forbidden;
    export const getPracticeGoal=forbidden,savePracticeGoal=forbidden;
    export const listPracticeRatings=forbidden,listMasteryRatings=forbidden;
    export const getMasteryCapabilities=forbidden,submitMasteryRating=forbidden,submitPracticeRating=forbidden;
    export const signOut=forbidden,updateUserProfile=forbidden,submitFeedback=forbidden;
    export const redeemAccessCode=forbidden,logAccessCodeAttempt=async()=>{},signInWithMagicLink=forbidden;
    export const watchPracticeRoom=forbidden,practiceRoomRpc=forbidden;
  `;
  try {
    for (const language of ['en', 'no']) for (const mode of ['individual', 'shared-pair', 'shared-group']) {
      stage = `${language}/${mode}`;
      const shared = mode !== 'individual', pair = mode === 'shared-pair';
      const context = await page.context().browser().newContext({viewport: {width: 320, height: 844}});
      contexts.push(context);
      await context.addInitScript(language => {
        localStorage.setItem('dp_access_level', 'all');
        localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId: language, practiceMode: 'individual', groupUiVersion: 2}));
      }, language);
      await context.route('**/src/js/backend.js*', route => route.fulfill({contentType: 'text/javascript', body: backend}));
      const p = await context.newPage(); lastPage = p;
      p.on('pageerror', error => errors.push(`${stage}: ${error.message}`));
      const click = id => p.locator(`#${id}`).click();
      const section = async key => { try { await p.waitForFunction(key => document.body.dataset.section === key, key); } catch { throw new Error(`Expected ${key}, actual ${await p.evaluate(()=>document.body.dataset.section)}`); } };
      const stored = key => p.evaluate(key => JSON.parse(localStorage.getItem(key)), key);
      const hiddenOrEmpty = async selector => {
        const elements = p.locator(selector);
        for (let i = 0; i < await elements.count(); i++) {
          const el = elements.nth(i);
          assert(!await el.isVisible() || !(await el.textContent()).trim(), `${selector} adds no generic narration`);
        }
      };
      const fits = async label => {
        stage = `${language}/${mode}/${label}`;
        await p.evaluate(() => document.documentElement.style.fontSize = '200%');
        const width = await p.evaluate(() => ({actual: document.documentElement.scrollWidth, viewport: innerWidth}));
        assert(width.actual <= width.viewport, `${label} fits 320px at 200% text: ${JSON.stringify(width)}`);
        if (label.endsWith(' item')) {
          const reading=p.locator('.statement-panel:visible').first();
          if(await reading.count()){
            const available=await reading.evaluate(e=>e.clientWidth-parseFloat(getComputedStyle(e).paddingLeft)-parseFloat(getComputedStyle(e).paddingRight));
            assert(available>=180, `${label} keeps readable text width at 200%: ${available}px`);
          }
        }
        if (/preparation|item|checkpoint/.test(label)) await p.screenshot({path:`output/playwright/declutter-${language}-${mode}-${label.replaceAll(' ','-')}-200.png`,fullPage:true});
        await p.evaluate(() => document.documentElement.style.fontSize = '');
      };
      const reachable = async (selector, touch = false) => {
        const el = p.locator(selector);
        assert(await el.isVisible() && await el.isEnabled(), `${selector} is reachable`);
        await el.scrollIntoViewIfNeeded();
        const bounds = await el.boundingBox();
        assert(bounds && bounds.x >= -1 && bounds.x + bounds.width <= 321, `${selector} fits the phone`);
        if (touch) assert(bounds.height >= 44, `${selector} has a 44px touch target`);
      };
      const exit = async (trigger, key, resume) => {
        const before = await stored(key);
        await p.locator(trigger).click();
        assert(await p.evaluate(() => document.activeElement.id) === 'practice-exit-keep', 'Safe exit action receives initial focus');
        await fits('exit dialog');
        await p.keyboard.press('Escape');
        assert(JSON.stringify(await stored(key)) === JSON.stringify(before), 'Escape preserves the current round');
        await p.locator(trigger).click(); await click('practice-exit-keep');
        assert(JSON.stringify(await stored(key)) === JSON.stringify(before), 'Keep practicing preserves the current round');
        await p.locator(trigger).click(); await click('practice-exit-pause'); await section('home');
        await reachable(`#${resume}`); await click(resume);
        const after = await stored(key);
        assert(after.roundId === before.roundId && after.index === before.index, 'Pause/resume preserves round and item');
      };
      await p.goto(url); await p.locator('#practice-home').waitFor();
      // Verify that the first-screen choices remain sufficient without instructional paragraphs.
      assert(await p.locator('#header-navigation button').count() === 3 && await p.locator('#home-progress').count() === 1, 'One Home, Progress and Account navigation');
      for (const id of ['join-shared-room','home-progress','account-button']) { await reachable('#'+id, true); assert(await p.locator('#'+id+' svg').count() === 1 && await p.locator('#'+id).getAttribute('aria-label'), 'Icon navigation retains accessible names'); }
      assert(await p.locator('#app-footer').count() === 0, 'Build details do not occupy a practice footer');
      await hiddenOrEmpty('#group-entry-note');
      await reachable('#home-library'); await reachable('#home-language');
      await p.locator('input[name="practice-mode"][value="group"]').check();
      assert(await p.locator('#group-create').isVisible() && await p.locator('#group-join').isVisible(), 'Separate-device room entry remains discoverable');
      await fits('group home');
      if (shared) {
        await p.locator('#shared-device').check();
        assert(await p.locator('#group-room-actions').isHidden(), 'Shared practice has no separate-device room actions');
      } else await p.locator('input[name="practice-mode"][value="individual"]').check();
      await hiddenOrEmpty('#group-entry-note'); await fits('selected-mode home');
      await click('home-language'); await section('language');
      await hiddenOrEmpty('#language-panel-description'); await fits('language selection');
      await p.locator(`[data-language-id="${language}"]`).click(); await section('home');
      assert(await p.evaluate(() => document.documentElement.lang) === (language === 'no' ? 'nb' : 'en') || await p.evaluate(() => document.documentElement.lang) === language, 'Language selection is applied');
      await click('account-button'); await p.locator('#account-overlay').waitFor(); await fits('signed-out account'); await p.locator('.app-about > summary').click(); assert(await p.locator('#app-version').isVisible(), 'Build information is available in About'); await click('close-account');
      await click('home-progress'); await p.locator('#account-overlay').waitFor(); await fits('progress sign-in'); await click('close-account');
      await click('home-library'); await section('skill');
      await hiddenOrEmpty('#skill-panel-description'); await fits('single-skill library');
      await p.locator('[data-skill-id="empathic-understanding"]').click(); await section('case');
      await hiddenOrEmpty('#case-panel-description'); await fits('case library');
      assert(await p.locator('.skill-summary-details').count() === 0, 'Case choices have one concise skill focus');
      const title = (await p.locator('[data-case-id="case-sara"] .card-title').textContent()).trim();
      assert(!/\((Easy|Lett)\)/.test(title), 'Focused case title does not repeat its difficulty');
      await click('open-skill-guide'); await section('skillGuide');
      await hiddenOrEmpty('#skill-guide-description');
      assert((await p.locator('#case-skill-summary').textContent()).trim().length > 30, 'The clinical skill guide remains available');
      await fits('skill guide'); await click('back-to-cases-from-guide');
      await p.locator('[data-case-id="case-sara"]').click(); await p.locator('#start-practice:not(:disabled)').waitFor();
      assert(await p.locator('#practice-format').isHidden(), 'Preparation does not repeat the mode choice');
      await hiddenOrEmpty('#practice-format-note');
      assert((await p.locator('#case-voice').textContent()).trim().length > 100, 'Preparation retains client voice');
      assert(await p.locator('#case-role-background').evaluate(e=>!e.open && Boolean(e.previousElementSibling?.querySelector('#case-voice'))), 'Client voice precedes optional background');
      await p.locator('#case-role-background > summary').click(); assert(await p.locator('#case-schema').isVisible(), 'Complete role background remains available');
      await p.locator('#case-role-background > summary').click();
      if (shared) {
        assert(await p.locator('#shared-pair').isVisible(), 'Shared focused practice offers pair mode');
        await p.locator('#shared-pair').setChecked(pair);
      }
      await fits('focused preparation'); await click('start-practice'); await p.locator('#next-statement').waitFor();
      if (shared) {
        assert(await p.locator('#shared-group-guidance .room-role-guide').count() === 1, 'Shared instructions have one optional guide');
        assert(await p.locator('#shared-practice-guide [data-role]').count() === (pair ? 2 : 3), 'Guide matches actual participants');
        assert(await p.locator('#shared-practice-guide .room-workflow li').count() === (pair ? 5 : 6), 'Pair workflow omits the observer');
        assert(/Reflect together|Reflekter sammen/.test(await p.locator('#shared-practice-guide li').last().textContent()), 'Shared workflow ends in reflection');
        assert(!await p.locator('#shared-practice-guide').evaluate(e=>e.open), 'Procedural guidance starts collapsed');
        await p.locator('#shared-practice-guide > summary').click();
        await click('shared-example-reveal'); assert(await p.locator('#shared-example-response').isVisible(), 'Example is available outside the guide');
        await click('shared-example-retry'); assert(await p.locator('#shared-example-response').isHidden(), 'Retry conceals the example');
        await click('next-statement');
        assert(await p.locator('#shared-practice-guide').evaluate(e => e.open), 'Guide expansion stays unchanged on the next item');
      } else {
        await click('toggle-suggestion'); assert(await p.locator('#suggestion-text').isVisible(), 'Individual example remains available');
        await click('retry-individual'); assert(await p.locator('#suggestion-text').isHidden(), 'Individual retry hides the example');
      }
      await fits('focused item'); await reachable('#next-statement', true);
      await exit('#join-shared-room', 'dp_practice_session_v1', 'resume-button');
      if (shared) {
        assert((await stored('dp_practice_session_v1')).sharedPair === pair, 'Focused pause/resume retains pair mode');
        const round = (await stored('dp_practice_session_v1')).roundId;
        await p.reload(); await click('resume-button');
        assert((await stored('dp_practice_session_v1')).sharedPair === pair && (await stored('dp_practice_session_v1')).roundId === round, 'Reload retains pair mode and round identity');
        await click('view-case-brief');
        assert(await p.locator('#shared-pair').isDisabled(), 'Pair configuration is fixed during a round');
        await click('start-practice');
        // Shared checkpoints contain reflection and useful skill cues, with no unsaved scores.
        for (let set=1;set<=4;set++) {
          const current=await stored('dp_practice_session_v1');
          for(let i=current.index;i<set*3;i++) await click('next-statement');
          await p.locator('#triad-debrief').waitFor();
          if(pair) assert(await p.locator('#triad-debrief-observer-label').isHidden(), 'Pair checkpoint has no fictional observer');
          assert(await p.locator('#rating-overlay').isHidden(), 'Shared checkpoint does not open numerical scoring');
          assert(await p.locator('#shared-checkpoint-feedback .skill-feedback-guide').count()===1, 'Checkpoint retains the skill feedback guide');
          await fits('focused shared checkpoint '+set); await reachable('#triad-complete-round',true); await click('triad-complete-round');
        }
        await section('skill'); assert(await stored('dp_practice_session_v1')===null, 'Completed shared round clears resume');
        await click('join-shared-room'); await section('home');
      }
      if(!shared) { await click('join-shared-room'); await click('practice-exit-end'); await section('home'); }
      assert(await stored('dp_practice_session_v1') === null, 'Ending focused practice clears resume');

      // Mastery exercises: no fictional group instructions when solo; no inert role tabs at a checkpoint.
      await click('home-library'); await click('exercise-mastery');
      await p.locator('[data-exercise-id="mastery-sara-evenings"]').click(); await p.locator('#mastery-start').waitFor();
      assert(!(await p.locator('#mastery-practice').textContent()).includes('4 sets of 3'), 'Mastery preparation has no sequence-count narration');
      if (shared) await p.locator('.mastery-pair-choice input').setChecked(pair);
      await fits('mastery preparation');
      await click('mastery-start'); if (shared) { await click('mastery-start'); if (!pair) await click('mastery-start'); }
      const guide = async () => { if (shared) await p.locator('.mastery-role-tabs button').nth(pair ? 1 : 2).click(); };
      await guide();
      if (!shared) {
        const instruction = await p.locator('#mastery-your-part').textContent();
        assert(!/client gives feedback|observer|klienten gir tilbakemelding|observatør/i.test(instruction), 'Solo mastery instructions have no imaginary participants');
        for (const cue of language === 'en' ? ['Read', 'Respond', 'Compare', 'Retry'] : ['Les', 'Svar', 'Sammenlign', 'Prøv igjen']) assert(instruction.includes(cue), `Solo mastery includes ${cue}`);
      } else assert(/Reflect together|Reflekter sammen/.test(await p.locator('.room-workflow li').last().textContent()), 'Shared mastery workflow ends in reflection');
      assert(await p.locator('.mastery-sequence').count() === 0, 'The long skill sequence is not repeated during each mastery item');
      await reachable('#mastery-finish', true); await fits('mastery item');
      await exit('#join-shared-room', 'dp_mastery_session', 'resume-mastery');
      await guide();
      for (let set = 1; set <= 4; set++) {
        await guide();
        for (let item = 0; item < 3; item++) {
          const pass = set === 2 && item === 0 || set === 3;
          await click(pass ? 'mastery-pass' : 'mastery-finish');
        }
        await p.locator('#mastery-next').waitFor();
        assert(await p.locator('.mastery-role-tabs').count() === 0, 'Checkpoint has no inert role tabs');
        assert(await p.locator('.mastery-set-skills').count() === 0, 'Checkpoint does not duplicate its feedback skill list');
        const body = await p.locator('#mastery-practice').textContent();
        const passedCopy = language === 'no' ? 'Utsagn dere står over, tas ikke med.' : 'Passed items are excluded.';
        assert(body.includes(passedCopy) === (!shared && (set === 2 || set === 3)), 'Pass note appears only in a set with actual passes');
        if (!shared && set !== 3) {
          assert(await p.locator('#mastery-score').isVisible(), 'Practiced set has a rating control');
          assert((await p.locator('label[for="mastery-score"]').textContent()).trim().length > 0, 'Rating selector keeps its accessible label');
          await p.locator('#mastery-score').selectOption('4');
        } else assert(await p.locator('#mastery-score').count() === 0, 'Shared and all-pass checkpoints offer no misleading rating');
        if (shared) assert(await p.locator('#mastery-save').count() === 0, 'Shared mastery never saves account ratings');
        if (set === 4 && !shared) assert(!/your own names|deres egne navn|step out of role|gå ut av rollen/i.test(body), 'Solo completion has no group de-role instruction');
        await fits(`mastery checkpoint ${set}`); await reachable('#mastery-next', true); await click('mastery-next');
      }
      await section('skill');
      assert(await stored('dp_mastery_session') === null, 'Finished mastery round has no stale resume');
      assert(errors.length === 0, 'No runtime errors: ' + errors.join('; '));
      checked.push({language, mode, checkpoints: 4});
      await p.screenshot({path: `output/playwright/ui-declutter-${language}-${mode}-320.png`, fullPage: true});
      await context.close();
    }
    return {passed: true, combinations: checked.length, checkpoints: checked.length * 4, checked, errors};
  } catch (error) {
    if(lastPage&&!lastPage.isClosed())await lastPage.screenshot({path:'output/playwright/declutter-failure.png',fullPage:true});
    throw new Error(`${stage}: ${error.message}`);
  } finally {
    for (const context of contexts) await context.close();
  }
}

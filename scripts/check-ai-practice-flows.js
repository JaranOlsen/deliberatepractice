// Run with the Playwright CLI against localhost. All model calls are mocked.
async page => {
  const url = page.url(); if (!['localhost', '127.0.0.1'].includes(new URL(url).hostname)) throw new Error('Local pilot only');
  const contexts = [], checks = [], errors = []; let externalCalls = 0;
  const assert = (condition, message) => {if (!condition) throw new Error(message);};
  async function contextFor(language, width, live) {
    const context = await page.context().browser().newContext({viewport: {width, height: 844}}); contexts.push(context);
    await context.addInitScript(language => {
      localStorage.setItem('dp_app_tour_v1', JSON.stringify({disabled: true}));
      localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId: language, practiceMode: 'individual', groupUiVersion: 2}));
      window.aiAudioEvents = []; window.aiTracksStopped = 0; window.aiMicDenied = false;
      window.Audio = class {constructor(url) {this.url = url;} async play() {window.aiAudioEvents.push('play');} pause() {window.aiAudioEvents.push('pause');}};
      Object.defineProperty(navigator, 'mediaDevices', {value: {getUserMedia: async () => {
        if (window.aiMicDenied) throw new DOMException('Denied', 'NotAllowedError');
        return {getTracks: () => [{stop: () => window.aiTracksStopped++}]};
      }}, configurable: true});
      window.MediaRecorder = class {
        static isTypeSupported() {return true;} constructor(stream, options) {this.mimeType = options?.mimeType || 'audio/webm'; this.state = 'inactive';}
        start() {this.state = 'recording';}
        stop() {this.state = 'inactive'; setTimeout(() => {this.ondataavailable?.({data: new Blob([new Uint8Array(1000)], {type: this.mimeType})}); this.onstop?.();}, 0);}
      };
    }, language);
    await context.route('https://api.openai.com/**', route => {externalCalls++; return route.abort();});
    const p = await context.newPage(); p.on('pageerror', error => errors.push(error.message));
    let fails = live ? 1 : 0; const sent = [], speech = [];
    await p.route('**/api/ai-practice/**', async route => {
      const action = new URL(route.request().url()).pathname.split('/').at(-1);
      if (action === 'status') return route.fulfill({json: {protocol: 'ai-practice-pilot-v1', mode: live ? 'live' : 'unconfigured',
        ...(live ? {models: {assessment: 'configured-fixture', speech: 'gpt-4o-mini-tts', transcription: 'gpt-transcribe'}} : {})}});
      if (!live) throw new Error('Scripted preview must make no requests beyond status');
      if (action === 'transcribe') return route.fulfill({json: {text: language === 'no' ? 'Du savner ham.' : 'You miss him.'}});
      if (action === 'speech') {speech.push(route.request().postDataJSON()); return route.fulfill({contentType: 'audio/mpeg', body: Buffer.from([1, 2, 3])});}
      const value = route.request().postDataJSON(); sent.push(value);
      if (fails-- > 0) return route.fulfill({status: 502, json: {error: 'provider_failed'}});
      const unassessable = value.text === 'Unassessable fixture';
      return route.fulfill({json: {protocol: 'ai-practice-pilot-v1', source: 'ai', attemptId: value.attemptId, kind: value.kind,
        contentRevision: value.revision, rubric: 'wording-coaching-v2', promptVersion: 'supervisor-wording-v2', model: 'test-fixture',
        result: {assessable: !unassessable, score: unassessable ? null : value.kind === 'first' ? 3 : 5, evidence: unassessable ? [] : [value.text.slice(0, 40)],
          strength: language === 'no' ? 'Du speilet savnet i Saras egne ord.' : 'You reflected the missing him in Sara’s own words.',
          adjustment: language === 'no' ? 'Hold deg til én kort speiling, med rom for at hun kan korrigere.' : 'Keep one short reflection, with room for her to correct it.',
          limitation: language === 'no' ? 'Fremføring er ikke vurdert.' : 'Delivery was not assessed.'}}});
    });
    await p.goto(url); await p.locator('#home-ai-practice').waitFor(); await p.locator('#home-ai-practice').click();
    await p.locator('[data-ai-skill=empathic-understanding]').waitFor();
    return {p, context, sent, speech};
  }
  async function fits(p) {
    for (const font of ['', '200%']) {
      await p.evaluate(font => document.documentElement.style.fontSize = font, font);
      assert(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Phone layout must fit at normal and enlarged text');
      assert(await p.evaluate(() => [...document.querySelectorAll('#ai-practice button')].filter(b => b.getClientRects().length).every(b => b.getBoundingClientRect().height >= 44)), 'Phone controls need touch-sized targets');
    }
    await p.evaluate(() => document.documentElement.style.fontSize = '');
  }
  try {
    for (const language of ['en', 'no']) for (const width of [320, 390]) {
      const {p, context} = await contextFor(language, width, false);
      await fits(p); await p.locator('[data-ai-skill=empathic-understanding]').click(); await p.locator('[data-ai-case=case-sara]').click(); await p.locator('#ai-begin').waitFor(); await fits(p);
      assert(await p.locator('#ai-practice .case-voice-section').isVisible(), 'Case preparation keeps the client voice and case styling');
      await p.screenshot({path: `output/playwright/ai-preparation-${language}-${width}.png`});
      await p.locator('#ai-begin').click(); await p.locator('#ai-send').click();
      assert(await p.locator('#ai-status').isVisible(), 'Blank input gets a helpful error');
      const text = language === 'no' ? 'Du holdt det gående, og så traff savnet deg.' : 'You kept functioning, and then missing him hit you.';
      await p.locator('#ai-response').fill(text); await p.locator('#join-shared-room').click();
      await p.locator('#practice-exit-pause').click(); await p.locator('#home-ai-practice').click();
      assert(await p.locator('#ai-response').inputValue() === text, 'Pause and resume preserve the draft');
      await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor(); await fits(p);
      assert(await p.locator('.ai-preview-badge').isVisible(), 'Scripted preview is always clearly marked');
      assert(await p.locator('.ai-attempt-rating, #ai-details').count() === 0, 'Scripted preview has no AI rating or model details');
      assert(await p.locator('.ai-supervisor-card').textContent().then(text => text.includes(language === 'no' ? 'demonstrasjon' : 'demonstration')), 'Preview does not claim to assess a response');
      await p.screenshot({path: `output/playwright/ai-feedback-${language}-${width}.png`});
      await p.locator('#ai-retry').click(); await p.locator('#ai-response').fill(text); await p.locator('#ai-send').click(); await p.locator('#ai-next').click();
      for (let index = 1; index < 12; index++) await p.locator('#ai-pass').click();
      await p.locator('#ai-export').waitFor(); assert(await p.locator('.ai-score-card').count() === 0, 'Demo produces no numerical ratings'); await fits(p);
      await p.locator('#ai-self-score').selectOption('4');
      const downloadPromise = p.waitForEvent('download'); await p.locator('#ai-export').click(); const download = await downloadPromise;
      const stream = await download.createReadStream(); let content = ''; for await (const chunk of stream) content += chunk.toString(); const exported = JSON.parse(content);
      assert(exported.selfScore === 4 && exported.mode === 'demo' && exported.summary.firstScore === null, 'Export distinguishes demo, AI and self-assessment');
      assert(await p.evaluate(() => !localStorage.getItem('dp_practice_session_v1')), 'Pilot does not create a regular practice session or progress record');
      await p.locator('#ai-again').click(); await p.locator('[data-ai-skill=exploratory-questions]').click(); await p.locator('[data-ai-case=case-sara]').click(); await p.locator('#ai-begin').click();
      assert((await p.locator('.ai-client-card blockquote').textContent()).includes(language === 'no' ? 'blikket' : 'looked'), 'Second skill uses its own authored statements');
      await p.locator('#ai-response').fill(language === 'no' ? 'Hva merker du inni deg?' : 'What do you notice inside?');
      await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor();
      assert((await p.locator('.ai-supervisor-card').textContent()).includes(language === 'no' ? 'åpent spørsmål' : 'open question'), 'Second skill has its own preview practice target');
      checks.push({language, width, demo: true, pause: true, complete: true, export: true}); await context.close();
    }
    for (const language of ['en', 'no']) {
      const {p, context, sent, speech} = await contextFor(language, 390, true);
      await p.locator('#ai-details > summary').click();
      assert((await p.locator('#ai-details dd').allTextContents()).includes('configured-fixture'), 'Before assessment the configured model is visible');
      await p.locator('[data-ai-skill=empathic-understanding]').click(); await p.locator('[data-ai-case=case-sara]').click(); await p.locator('#ai-begin').click();
      await p.locator('#ai-play-client').click(); await p.locator('#ai-stop-audio').waitFor();
      await p.locator('#ai-record').click();
      await p.waitForFunction(() => document.querySelector('#ai-record')?.getAttribute('aria-pressed') === 'true');
      assert(await p.locator('#ai-send').isDisabled(), 'Assessment cannot run during recording');
      assert(await p.evaluate(() => aiAudioEvents.includes('pause')), 'Recording stops the client voice');
      await p.locator('#ai-record').click(); await p.locator('#ai-transcript-hint').waitFor();
      assert(await p.evaluate(() => aiTracksStopped > 0), 'Recording releases microphone tracks');
      const corrected = language === 'no' ? 'Savnet traff deg da du endelig var alene.' : 'The missing him hit you when you were finally alone.';
      await p.locator('#ai-response').fill(corrected); await p.locator('#ai-send').click(); await p.locator('#ai-status:not([hidden])').waitFor();
      assert(await p.locator('#ai-response').inputValue() === corrected, 'Failed assessment preserves corrected transcript');
      await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor();
      assert(sent[0].attemptId === sent[1].attemptId && sent[1].text === corrected, 'Network retry keeps the same id and sends the corrected response');
      assert(await p.locator('.ai-rating-value strong').textContent() === '3 / 5', 'The first feedback displays its AI score');
      assert(await p.locator('.ai-rating-value span').textContent() === (language === 'no' ? 'Tilfredsstillende i deler' : 'Adequate in parts'), 'The AI score uses the self-assessment scale labels');
      assert(await p.locator('.ai-rating-steps .is-filled').count() === 3, 'The visual rating matches the AI score');
      await p.locator('#ai-details > summary').click();
      assert((await p.locator('#ai-details dd').allTextContents()).join('|') === 'test-fixture|gpt-4o-mini-tts|gpt-transcribe|marin|cedar', 'Feedback shows the actual responding model, audio models and stable voices');
      await p.setViewportSize({width: 320, height: 844}); await fits(p);
      await p.screenshot({path: `output/playwright/ai-rating-${language}-320.png`, fullPage: true});
      await p.setViewportSize({width: 390, height: 844});
      await p.locator('#ai-play-supervisor').click(); await p.locator('#ai-stop-audio').waitFor();
      assert(speech[0].role === 'client' && speech[1].role === 'supervisor', 'Client and supervisor use distinct speech endpoints');
      await p.locator('#ai-retry').click(); await p.evaluate(() => {window.aiMicDenied = true;}); await p.locator('#ai-record').click(); await p.locator('#ai-status:not([hidden])').waitFor();
      await p.locator('#ai-response').fill(corrected); await p.locator('#ai-send').click(); await p.locator('#ai-next').waitFor();
      assert(await p.locator('.ai-rating-value strong').textContent() === '5 / 5', 'The retry has its own AI score');
      assert((await p.locator('.ai-attempt-rating').textContent()).includes(`${language === 'no' ? 'Første forsøk' : 'First attempt'}: 3 / 5`), 'The retry keeps the original score for comparison');
      await fits(p); await p.locator('#ai-next').click();
      for (let index = 1; index < 12; index++) {
        await p.locator('#ai-response').fill(corrected); await p.locator('#ai-send').click(); await p.locator('#ai-retry').click();
        await p.locator('#ai-response').fill(corrected); await p.locator('#ai-send').click(); await p.locator('#ai-next').click();
      }
      await p.locator('.ai-score-card').first().waitFor();
      assert((await p.locator('.ai-score-card strong').allTextContents()).join('|') === '3.0 / 5|5.0 / 5', 'First-attempt and coached scores stay separate');
      assert(sent.length === 25, 'Exactly 24 attempts plus one transport retry'); await fits(p);
      await p.screenshot({path: `output/playwright/ai-summary-${language}.png`});
      await p.locator('#ai-details > summary').click();
      assert(await p.locator('#ai-details dd').first().textContent() === 'test-fixture', 'Round details retain the actual responding model');
      await p.locator('#ai-again').click(); await p.locator('[data-ai-skill=empathic-understanding]').click(); await p.locator('[data-ai-case=case-sara]').click(); await p.locator('#ai-begin').click();
      await p.locator('#ai-response').fill('Unassessable fixture'); await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor();
      assert(await p.locator('.ai-rating-value').textContent() === (language === 'no' ? 'Ikke vurdert' : 'Not rated'), 'An unassessable response explicitly has no score');
      assert(await p.locator('.ai-rating-value strong, .ai-rating-steps').count() === 0, 'An unassessable response never appears as a zero or numeric rating');
      for (let index = 0; index < 12; index++) await p.locator('#ai-pass').click();
      assert((await p.locator('.ai-score-card strong').allTextContents()).join('|') === '—|—', 'Unassessable and passed items do not enter the averages');
      checks.push({language, liveMock: true, speech: true, recording: true, correctedTranscript: true, permissionFallback: true, attempts: 24, summary: true, visibleRatings: true, modelDetails: true, unassessable: true}); await context.close();
    }
    assert(!errors.length, errors.join('; ')); assert(externalCalls === 0, 'No OpenAI requests permitted');
    return {status: 'passed', externalCalls, checks};
  } finally {for (const context of contexts) await context.close();}
}

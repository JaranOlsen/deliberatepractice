// Local UI coverage across the authored curriculum. No provider requests.
async page => {
  const url = page.url(); if (!['localhost', '127.0.0.1'].includes(new URL(url).hostname)) throw new Error('Local pilot only');

  async function adminFixture(context) {
    await context.addInitScript(() => {
      const id='11111111-1111-4111-8111-111111111111',expires=Math.floor(Date.now()/1000)+3600;
      const token=btoa(JSON.stringify({alg:'HS256',typ:'JWT'}))+'.'+btoa(JSON.stringify({sub:id,exp:expires,role:'authenticated'}))+'.fixture';
      localStorage.setItem('sb-kpzmjnwwbxweevloiqiy-auth-token',JSON.stringify({access_token:token,refresh_token:'isolated-fixture-only',token_type:'bearer',expires_at:expires,expires_in:3600,user:{id,email:'fixture@example.invalid'}}));
    });
    await context.route('**/api/account-services/**',async route=>{
      const action=new URL(route.request().url()).pathname.split('/').at(-1);
      if(action==='status')return route.fulfill({json:{protocol:'practice-billing-v1',mode:'off'}});
      const input=route.request().postDataJSON(),kind=input.kind;
      const file=kind==='skill'?`statements/${input.languageId}-${input.skillId}.json`:`mastery/${input.languageId}-${input.exerciseId}.json`;
      const response=await context.request.get(new URL(`src/data/runtime/${file}`,url).href);
      if(!response.ok())throw Error('Missing protected content fixture');
      const data=await response.json(),revision=kind==='skill'?Object.values(data)[0][0].revision:data.revision;
      return route.fulfill({json:{protocol:'practice-content-v1',revision,...(kind==='skill'?{bank:data}:{exercise:data})}});
    });
    await context.route('https://*.supabase.co/**',route=>{
      const action=new URL(route.request().url()).pathname.split('/').at(-1),id='11111111-1111-4111-8111-111111111111';
      return route.fulfill({json:action==='get_ai_access'?true:action==='get_account_access'?{full_content:true,ai_access:true,subscription:null}:action==='ensure_user_profile'?[{id,display_name:'Fixture'}]:action==='list_practice_targets'?[{target_user_id:id,display_name:'Fixture',target_kind:'self'}]:action==='user'?{id,email:'fixture@example.invalid'}:[]});
    });
  }
  const manifest = await (await page.context().request.get(new URL('src/data/runtime/manifest.json', url).href)).json();
  const assert = (condition, message) => {if (!condition) throw new Error(message);};
  const checks = [], contexts = []; let externalCalls = 0;
  async function fits(p) {
    for (const font of ['', '200%']) {
      await p.evaluate(font => document.documentElement.style.fontSize = font, font);
      assert(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Expanded library fits phone and enlarged text');
    }
    await p.evaluate(() => document.documentElement.style.fontSize = '');
  }
  try {
    for (const [language, width] of [['en', 320], ['no', 390]]) {
      const context = await page.context().browser().newContext({viewport: {width, height: 844}}); contexts.push(context); await adminFixture(context);
      await context.addInitScript(language => {
        localStorage.setItem('dp_app_tour_v1', JSON.stringify({disabled: true}));
        localStorage.setItem('dp_practice_preferences_v1', JSON.stringify({languageId: language, practiceMode: 'individual', groupUiVersion: 2}));
      }, language);
      await context.route('https://api.openai.com/**', route => {externalCalls++; return route.abort();});
      await context.route('**/api/ai-practice/**', route => {
        assert(route.request().url().endsWith('/status'), 'Preview library cannot request model assessment');
        return route.fulfill({json: {protocol: 'ai-practice-pilot-v1', mode: 'unconfigured'}});
      });
      const p = await context.newPage(); const errors = []; p.on('pageerror', error => errors.push(error.message));
      await p.goto(url); await p.locator('#home-ai-practice').click();
      assert(await p.locator('[data-ai-skill]').count() === 16, 'All 16 skills are available'); await fits(p);
      for (const [index, skillId] of manifest.SKILL_ORDER.entries()) {
        await p.locator(`[data-ai-skill="${skillId}"]`).click();
        await p.locator('[data-ai-case]').first().waitFor();
        const cases = await p.locator('[data-ai-case]').evaluateAll(nodes => nodes.map(n => n.dataset.aiCase));
        assert(JSON.stringify(cases) === JSON.stringify(manifest.CASE_ORDER[skillId]), `Only existing, ordered case combinations are offered for ${skillId}`); await fits(p);
        const caseId = skillId === 'experiential-focusing' ? 'case-arne' : cases[index % cases.length];
        await p.locator(`[data-ai-case="${caseId}"]`).click();
        const meta = manifest.cases[caseId], level = meta.supportedLevels.at(-1);
        if (meta.supportedLevels.length > 1) await p.locator(`[data-practice-level="${level}"]`).click();
        assert(await p.locator('#ai-practice .case-brief-screen').isVisible(), 'Every case keeps the styled preparation');
        if (skillId === 'therapist-self-awareness') assert((await p.locator('#ai-practice').textContent()).includes(language === 'no' ? 'privat' : 'private'), 'Self-awareness protects private reflection');
        const materials = await (await context.request.get(new URL(`src/data/runtime/statements/${language}-${skillId}.json`, url).href)).json();
        const expected = materials[caseId].find(item => !item.difficulty || item.difficulty === level);
        await p.locator('#ai-begin').click();
        assert(await p.locator('.ai-client-card blockquote').textContent() === expected.text, 'The chosen case and level load their exact authored statement');
        assert(!(await p.locator('.ai-client-card h3').textContent()).includes('('), 'The client is named without the difficulty suffix');
        if (skillId === 'therapist-self-awareness') assert(await p.locator('label[for="ai-response"]').textContent() === (language === 'no' ? 'Din refleksjon' : 'Your reflection'), 'Self-awareness asks for reflection, not a client intervention');
        await p.locator('#ai-response').fill(expected.suggestion); await p.locator('#ai-send').click(); await p.locator('#ai-retry').waitFor();
        assert(await p.locator('.ai-attempt-rating').count() === 0, 'Every scripted skill remains unscored'); await fits(p);
        if (skillId === 'experiential-focusing') await p.screenshot({path: `output/playwright/ai-expanded-focusing-${language}.png`, fullPage: true});
        await p.locator('#join-shared-room').click(); await p.locator('#practice-exit-end').click(); await p.locator('#home-ai-practice').click();
        checks.push({language, skillId, caseId, difficulty: level, preparation: true, exactItem: true});
      }
      await p.locator('[data-ai-skill="empathic-understanding"]').click();
      for (const caseId of manifest.CASE_ORDER['empathic-understanding']) {
        await p.locator(`[data-ai-case="${caseId}"]`).click();
        for (const level of manifest.cases[caseId].supportedLevels) {
          if (manifest.cases[caseId].supportedLevels.length > 1) await p.locator(`[data-practice-level="${level}"]`).click();
          assert(await p.locator('#ai-practice .case-voice-section').isVisible(), 'Every case and level has client preparation'); await fits(p);
        }
        await p.locator('#ai-back-cases').click();
      }
      await p.screenshot({path: `output/playwright/ai-expanded-cases-${language}.png`, fullPage: true});
      assert(!errors.length, errors.join('; ')); await context.close();
    }
    assert(externalCalls === 0, 'No provider calls'); return {status: 'passed', externalCalls, skills: 16, cases: 12, checks};
  } finally {for (const context of contexts) await context.close();}
}

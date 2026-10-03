// Playwright CLI against local preview. Guest practice; no sign-in emails or saved ratings.
async (page) => {
  if (!['localhost','127.0.0.1'].includes(new URL(page.url()).hostname)) throw new Error('Use local preview');
  const errors=[],measurements=[],onError=e=>errors.push(e.message);
  page.on('pageerror',onError);
  await page.emulateMedia({reducedMotion:'reduce'});
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const click=id=>page.locator('#'+id).click();
  const fits=async name=>{
    for(const width of [390,320])for(const percent of [100,200]){
      await page.setViewportSize({width,height:844});
      await page.evaluate(size=>document.documentElement.style.fontSize=size+'%',percent);
      const dimensions=await page.evaluate(()=>({viewport:innerWidth,page:document.documentElement.scrollWidth,x:scrollX,overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().width && e.getBoundingClientRect().right+scrollX>innerWidth+1).slice(0,12).map(e=>({id:e.id,class:e.className,parent:e.parentElement?.className}))}));
      assert(dimensions.page<=width+1,`${name} fits ${width}px at ${percent}% text: ${JSON.stringify(dimensions)}`);
      measurements.push({screen:name,width,text:percent,page:dimensions.page});
    }
    await page.evaluate(()=>document.documentElement.style.fontSize='');
    await page.setViewportSize({width:390,height:844});
  };
  try {
    await page.evaluate(()=>localStorage.clear());await page.reload();
    assert(await page.locator('#practice-home').isVisible(),'First visit has a compact home');
    assert(await page.locator('#skill-selection').isHidden(),'Library is one deliberate action away');
    await fits('first home');
    for(const id of ['account-button','home-language','home-library','home-progress','group-create','group-join']){
      assert((await page.locator('#'+id).boundingBox()).height>=44,'Touch target '+id);
    }
    await click('home-progress');
    assert(await page.locator('#account-overlay').isVisible(),'Guest progress leads to sign-in without sending email');
    await page.keyboard.press('Escape');
    assert(await page.evaluate(()=>document.activeElement.id==='home-progress'),'Dialog returns focus to home action');
    await click('home-library');await page.locator('[data-language-id=en]').click();
    assert(await page.locator('#skill-selection').isVisible(),'First library visit asks for language then opens skills');
    await click('back-to-language');
    for(const language of ['en','no']){
      await click('home-language');await fits(language+' language');
      await page.locator(`[data-language-id=${language}]`).click();
      assert(await page.locator('#practice-home').isVisible(),'Language setting returns home');
      await page.locator('input[name=practice-mode][value=individual]').check();
      await fits(language+' home');
      await page.screenshot({path:`output/playwright/phone-home-${language}-390.png`});
      await page.reload();
      assert(await page.locator('#practice-home').isVisible(),'Reload returns home');
      assert(await page.locator('input[value=individual]').isChecked(),'Format preference retained');
      assert(await page.evaluate(lang=>document.documentElement.lang===lang,language),'Language preference retained');
      await click('home-library');await fits(language+' library');
      await page.locator('[data-skill-id=empathic-understanding]').click();await fits(language+' cases');
      await page.locator('[data-case-id=case-sara]').click();await fits(language+' preparation');
      await click('start-practice');await fits(language+' individual item');
      await click('next-statement');await click('back-to-cases');await click('pause-round');
      const before=await page.evaluate(()=>JSON.parse(localStorage.getItem('dp_practice_session_v1')));
      await click('back-to-skills');await click('back-to-language');await page.reload();
      assert(await page.locator('#resume-card').isVisible(),'Home prioritizes paused round');
      assert(await page.locator('#last-setup-card').isHidden(),'Repeat cannot replace paused round');
      await fits(language+' paused home');
      await click('resume-button');
      await page.locator('#statement-workspace').waitFor();
      const after=await page.evaluate(()=>JSON.parse(localStorage.getItem('dp_practice_session_v1')));
      assert(before.roundId===after.roundId && before.index===after.index && JSON.stringify(before.completedStatementIds)===JSON.stringify(after.completedStatementIds),'Home resume preserves round identity and progress');
      await click('back-to-cases');await click('pause-round');await click('resume-clear');
      await click('back-to-skills');await click('back-to-language');
      assert(await page.locator('#last-setup-card').isVisible(),'Recent material remains available after pause is cleared');
      await page.locator('input[value=group]').check();await page.locator('#shared-device').check();
      await click('repeat-last-setup');
      await click('start-practice');await fits(language+' shared item');
      for(const summary of await page.locator('#shared-group-guidance details > summary').all())await summary.click();
      await fits(language+' expanded shared guidance');
      await page.locator('#triad-controls').scrollIntoViewIfNeeded();
      const frame=await page.locator('#triad-protocol').boundingBox();
      for(const id of ['next-statement','triad-pass-item']){
        const bounds=await page.locator('#'+id).boundingBox();
        assert(bounds.x>=frame.x-1 && bounds.x+bounds.width<=frame.x+frame.width+1,'Shared control remains in frame '+id);
      }
      await click('back-to-cases');await click('pause-round');await click('resume-clear');
      await click('back-to-skills');await click('back-to-language');
      await page.locator('#shared-device').uncheck();
      assert(await page.locator('#group-create').isVisible(),'Group mode returns to separate-device room entry');
    }
    await page.evaluate(()=>{
      localStorage.removeItem('dp_practice_preferences_v1');
      localStorage.setItem('dp_last_practice_setup_v1',JSON.stringify({languageId:'no',skillId:'empathic-understanding',caseId:'case-sara',practiceMode:'group'}));
    });
    await page.reload();
    assert(await page.locator('#last-setup-card').isVisible(),'Joined-room material can be repeated before a personal language preference exists');
    await click('repeat-last-setup');
    assert(await page.locator('#case-brief-screen').isVisible() && await page.evaluate(()=>document.documentElement.lang==='no'),'Recent room material restores its language for preparation');
    assert(await page.locator('input[value=group]').isChecked(),'Repeating room material keeps the chosen group format');
    assert(errors.length===0,errors.join('; '));
    return {passed:true,checks:['compact first and returning home','one-step library in remembered language','source dialog focus','44px primary touch areas','EN/NO 320px/390px with 100%/200% text','paused round identity','repeat respects chosen format','shared controls in frame'],layoutChecks:measurements.length};
  } finally {
    page.off('pageerror',onError);
    await page.emulateMedia({reducedMotion:null});
    await page.evaluate(()=>{document.documentElement.style.fontSize='';localStorage.clear();});await page.reload();
  }
}

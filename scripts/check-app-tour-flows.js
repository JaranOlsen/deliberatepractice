// Run through the Playwright CLI on localhost. No accounts or writes are used.
async page=>{
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw new Error('Local preview only');
 const assert=(ok,text)=>{if(!ok)throw new Error(text);},checks=[],contexts=[],errors=[];
 try{
  for(const language of ['en','no'])for(const width of [320,390]){
   const context=await page.context().browser().newContext({viewport:{width,height:844}});contexts.push(context);
   await context.addInitScript(language=>localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'individual',groupUiVersion:2})),language);
   const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.locator('#app-tour:not([hidden])').waitFor();
   const before=await p.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([key])=>!key.includes('tour'))));
   for(let step=0;step<7;step++){
    assert(await p.locator('.tour-steps').getAttribute('aria-label')===`${step+1} / 7`,'All seven steps in order');
    assert(await p.evaluate(()=>document.querySelector('#app-tour').contains(document.activeElement)&&document.querySelector('main').inert),'Tour owns focus and isolates the background');
    for(let i=0;i<10;i++){await p.keyboard.press('Tab');assert(await p.evaluate(()=>document.querySelector('#app-tour').contains(document.activeElement)),'Tour traps keyboard focus');}
    for(const size of ['','200%']){
     await p.evaluate(size=>document.documentElement.style.fontSize=size,size);
     assert(await p.evaluate(()=>document.querySelector('.tour-panel').scrollWidth<=document.querySelector('.tour-panel').clientWidth),'Tour fits phone and enlarged text');
    }
    await p.evaluate(()=>document.documentElement.style.fontSize='');
    if(step===0||step===4)await p.screenshot({path:`output/playwright/tour-${language}-${width}-${step}.png`});
    await p.locator('#tour-next').click();
   }
   assert(await p.locator('#app-tour').isHidden(),'Completion closes the tour');
   const after=await p.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([key])=>!key.includes('tour'))));
   assert(JSON.stringify(before)===JSON.stringify(after),'Tour never changes practice, room or account state');
   await p.reload();await p.locator('#app-tour:not([hidden])').waitFor();
   await p.locator('#tour-skip').click();await p.reload();await p.locator('#app-tour:not([hidden])').waitFor();
   await p.locator('#tour-disable').check();await p.keyboard.press('Escape');await p.reload();
   await p.locator('#home-title').waitFor();assert(await p.locator('#app-tour').isHidden(),'Opt out survives reload');
   await p.locator('#account-button').click();await p.locator('#app-tour-open').click();await p.locator('#app-tour:not([hidden])').waitFor();
   await p.locator('#tour-disable').uncheck();await p.locator('.tour-top select').selectOption(language==='en'?'no':'en');
   assert((await p.locator('#tour-title').textContent())===(language==='en'?'Øv på din måte':'Your practice, your pace'),'Language switches without changing app practice state');
   await p.keyboard.press('Escape');await p.reload();await p.locator('#app-tour:not([hidden])').waitFor();
   await p.locator('#tour-disable').check();await p.locator('#tour-skip').click();
   await p.locator('#home-library').click();await p.locator('[data-skill-id=empathic-understanding]').click();await p.locator('[data-case-id=case-sara]').click();await p.locator('#start-practice').click();
   const active=await p.evaluate(()=>localStorage.getItem('dp_practice_session_v1'));assert(active,'Individual practice starts');
   await p.locator('#account-button').click();await p.locator('#app-tour-open').click();
   await p.locator('#tour-next').click();await p.keyboard.press('Escape');
   assert(await p.evaluate(()=>localStorage.getItem('dp_practice_session_v1'))===active,'Replay leaves an active round untouched');
   checks.push({language,width,steps:7,repeats:true,optOut:true,replay:true,activeRoundPreserved:true});await context.close();
  }
  assert(!errors.length,errors.join('; '));return {status:'passed',checks};
 }finally{for(const context of contexts)await context.close();}
}

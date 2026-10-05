// Playwright CLI run-code. Local preview only; backend writes are forbidden.
async page=>{
 const url=page.url(),assert=(ok,message)=>{if(!ok)throw new Error(message);};
 assert(['127.0.0.1','localhost'].includes(new URL(url).hostname),'Local preview only');
 const manifest=await(await page.request.get(new URL('src/data/runtime/manifest.json',url).href)).json();
 const contexts=[],errors=[];let stage='setup';
 const stub=`
  export const isSupabaseReady=()=>true,isAccessExpired=()=>false;
  export const getAuthSession=async()=>null,onAuthStateChange=()=>()=>{};
  const forbidden=async()=>{throw new Error('Unexpected account or rating operation');};
  export const ensureUserProfile=forbidden,listPracticeTargets=forbidden;
  export const getPracticeGoal=forbidden,savePracticeGoal=forbidden;
  export const listPracticeRatings=forbidden,listMasteryRatings=forbidden;
  export const getMasteryCapabilities=forbidden,submitMasteryRating=forbidden,submitPracticeRating=forbidden;
  export const signOut=forbidden,updateUserProfile=forbidden,submitFeedback=forbidden,redeemAccessCode=forbidden,logAccessCodeAttempt=async()=>{},signInWithMagicLink=forbidden;
  export const watchPracticeRoom=forbidden,practiceRoomRpc=forbidden;
 `;
 try{
  for(const language of ['en','no'])for(const mode of ['individual','triad']){
   stage=language+'/'+mode;
   const context=await page.context().browser().newContext({viewport:{width:320,height:844}});contexts.push(context);
   await context.addInitScript(({language,mode})=>{
    localStorage.setItem('dp_access_level','all');
    localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:mode,groupUiVersion:2}));
    localStorage.setItem('dp_case_levels_v1',JSON.stringify({'case-arne':'hard','case-mia':'moderate','case-nora':'easy'}));
   },{language,mode});
   await context.route('**/src/js/backend.js*',route=>route.fulfill({contentType:'text/javascript',body:stub}));
   const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.locator('#practice-home').waitFor();
   const fits=async()=>{
    await p.evaluate(()=>document.documentElement.style.fontSize='200%');
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),stage+': enlarged phone layout');
    await p.evaluate(()=>document.documentElement.style.fontSize='');
   };
   const home=()=>p.waitForFunction(()=>document.body.dataset.section==='home');
   await p.locator('#home-library').click();
   if(mode==='individual')await p.screenshot({path:`output/playwright/polish-skills-${language}-320.png`,fullPage:true});
   await p.locator('#exercise-mastery').click();
   const cards=await p.locator('#mastery-library button').evaluateAll(items=>items.map(e=>({id:e.dataset.exerciseId,multi:e.classList.contains('case-multiple-levels'),accent:e.style.getPropertyValue('--card-accent'),background:getComputedStyle(e).backgroundImage,text:e.textContent})));
   const groups=new Map();for(const e of manifest.EXERCISE_CATALOG){if(!groups.has(e.caseId))groups.set(e.caseId,[]);groups.get(e.caseId).push(e);}
   const rank=card=>{const e=manifest.EXERCISE_CATALOG.find(e=>e.id===card.id),variants=groups.get(e.caseId);return variants.length>1?3:['easy','moderate','hard'].indexOf(e.difficulty);};
   assert(cards.length===12,'Every authored mastery case is offered');
   assert(cards.every((c,i)=>!i||rank(cards[i-1])<=rank(c)),'Mastery order is Easy, Moderate, Hard, then multi-level');
   assert(cards.slice(-3).every(c=>c.multi&&c.background.includes('linear-gradient')&&c.text.includes(language==='no'?'3 nivåer':'3 levels')),'All three new cases show a range, independent of their remembered choice');
   assert(cards.slice(0,-3).every(c=>!c.multi),'Fixed cases retain a single level colour');
   await fits();await p.screenshot({path:`output/playwright/polish-mastery-library-${language}-${mode}-320.png`,fullPage:true});
   await p.locator('[data-exercise-id^="mastery-arne"]').click();await p.locator('#mastery-start').waitFor();
   assert(!(await p.locator('#mastery-practice').textContent()).includes('4 sets of 3')&&!(await p.locator('#mastery-practice').textContent()).includes('4 sett med 3'),'Preparation has no sequence-count explanation');
   const colours=[];
   for(const level of ['easy','moderate','hard']){
    await p.locator(`[data-practice-level="${level}"]`).click();
    await p.waitForFunction(level=>document.querySelector(`[data-practice-level="${level}"]`)?.getAttribute('aria-pressed')==='true',level);
    colours.push(await p.locator('#mastery-practice').evaluate(e=>e.style.getPropertyValue('--card-accent')));
   }
   const light=hex=>hex.match(/[a-f\d]{2}/gi).reduce((sum,c)=>sum+parseInt(c,16),0);
   assert(light(colours[0])>light(colours[1])&&light(colours[1])>light(colours[2]),'Selected levels become progressively darker');
   await p.screenshot({path:`output/playwright/polish-mastery-preparation-${language}-${mode}-320.png`,fullPage:true});
   await p.locator('#mastery-start').click();if(mode==='triad'){await p.locator('#mastery-start').click();await p.locator('#mastery-start').click();}
   const guide=async()=>{if(mode==='triad')await p.locator('.mastery-role-tabs button').nth(2).click();};await guide();
   await p.locator('#mastery-finish').click();const before=await p.evaluate(()=>localStorage.getItem('dp_mastery_session'));
   const exit=()=>p.locator('#join-shared-room').click();
   await exit();assert(await p.evaluate(()=>document.activeElement.id)==='practice-exit-keep','Safe action gets initial focus');await fits();
   await p.keyboard.press('Escape');assert(await p.evaluate(()=>localStorage.getItem('dp_mastery_session'))===before,'Dismissal changes no progress');
   await exit();await p.locator('#practice-exit-pause').click();await home();await p.locator('#resume-mastery').click();
   assert(await p.evaluate(()=>localStorage.getItem('dp_mastery_session'))===before,'Pause/resume keeps the exact mastery round');
   await exit();await p.screenshot({path:`output/playwright/polish-exit-${language}-320.png`,fullPage:true});await p.locator('#practice-exit-end').click();await home();
   assert(await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_mastery_session')))===null,'Ending mastery removes its resumable round');
   await p.locator('#home-library').click();await p.locator('#exercise-single').click();await p.locator('[data-skill-id="empathic-refocusing"]').click();
   const range=p.locator('[data-case-id="case-mia"]');assert(await range.evaluate(e=>e.classList.contains('case-multiple-levels')),'Single-skill case library uses the same multi-level gradient');await range.click();
   await p.locator('#start-practice').click();await p.locator('#next-statement').click();
   const focused=await p.evaluate(()=>localStorage.getItem('dp_practice_session_v1'));
   assert(await p.locator('#join-shared-room').textContent()===(language==='no'?'Hjem':'Home'),'The header offers Home during focused practice');
   await p.locator('#join-shared-room').click();await p.locator('#practice-exit-keep').click();assert(await p.evaluate(()=>localStorage.getItem('dp_practice_session_v1'))===focused,'Keep practicing changes nothing');
   await p.locator('#join-shared-room').click();await p.locator('#practice-exit-pause').click();await home();await p.locator('#resume-button').click();
   const resumed=await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_practice_session_v1'))),saved=JSON.parse(focused);
   assert(resumed.roundId===saved.roundId&&resumed.index===saved.index&&JSON.stringify(resumed.completedStatementIds)===JSON.stringify(saved.completedStatementIds),'Focused pause preserves its place and completed items');
   await p.locator('#join-shared-room').click();await p.locator('#practice-exit-end').click();await home();
   assert(await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_practice_session_v1')))===null,'Ending focused practice removes resume');
  }
  assert(errors.length===0,'No runtime errors: '+errors.join(';'));return {passed:true,combinations:4,checks:['difficulty ordering','multi-level gradients','selected-level colours','no preparation count clutter','safe initial focus','cancel/Escape','pause/resume','end to home','anonymous use','320px/200% text'],errors};
 }catch(error){throw new Error(stage+': '+error.message);}finally{for(const c of contexts)await c.close();}
}

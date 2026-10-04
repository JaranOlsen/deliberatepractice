// Browser regression for partial/older server catalogs. No database calls or writes.
async page => {
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw new Error('Local preview only');
 const assert=(ok,message)=>{if(!ok)throw new Error(message);},errors=[];
 const cases=[
  {name:'Sara-only server',exercises:['mastery-sara-evenings'],arne:false},
  {name:'Partial Leo server',exercises:['mastery-sara-evenings','mastery-arne-ordinary-days-moderate','mastery-arne-ordinary-days-hard'],arne:true},
  {name:'Partial Mia server',exercises:['mastery-sara-evenings','mastery-mia-help-and-choice-moderate','mastery-mia-help-and-choice-hard'],mia:true},
  {name:'Wrong Mia revision',exercises:['mastery-sara-evenings','mastery-mia-help-and-choice-easy'],wrong:true,mia:false},
  {name:'Wrong Leo revision',exercises:['mastery-sara-evenings','mastery-arne-ordinary-days-easy'],wrong:true,arne:false}
 ];
 const stub=`
  const user={id:'catalog-test',email:'catalog@local.invalid'};
  const unexpected=async()=>{throw new Error('Unexpected operation during catalog selection');};
  export const isSupabaseReady=()=>true,isAccessExpired=()=>false;
  export const getAuthSession=async()=>({user}),onAuthStateChange=()=>()=>{};
  export const ensureUserProfile=async()=>({id:user.id,display_name:'Catalog test'});
  export const listPracticeTargets=async()=>[{target_user_id:user.id,target_kind:'self',display_name:'Catalog test'}];
  export const listPracticeRatings=async()=>[],listMasteryRatings=async()=>[];
  export const getMasteryCapabilities=async()=>CAPABILITY;
  export const getPracticeGoal=async()=>'',savePracticeGoal=unexpected;
  export const signOut=unexpected,updateUserProfile=unexpected,logAccessCodeAttempt=async()=>{};
  export const submitFeedback=unexpected,redeemAccessCode=unexpected,signInWithMagicLink=unexpected;
  export const submitPracticeRating=unexpected,submitMasteryRating=unexpected,practiceRoomRpc=unexpected;
  export const watchPracticeRoom=async()=>()=>{};
 `;
 for(const test of cases){
  const context=await page.context().browser().newContext({viewport:{width:320,height:844}});
  try {
   const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
   const capability={protocol:'guided-mastery-v1',exercises:test.exercises.map(id=>({id,revision:test.wrong&&!id.includes('sara')?'older-revision':'2026-10-04-v4'}))};
   await context.addInitScript(()=>localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:'en',practiceMode:'group',groupUiVersion:2})));
   await context.route('**/src/js/backend.js*',route=>route.fulfill({contentType:'text/javascript',body:stub.replace('CAPABILITY','('+JSON.stringify(capability)+')')}));
   await p.goto(url);await p.waitForFunction(()=>document.getElementById('account-button').textContent==='Account');
   await p.locator('#home-library').click();await p.locator('#exercise-mastery:not(:disabled)').waitFor();await p.locator('#exercise-mastery').click();
   assert(await p.locator('#mastery-library [data-exercise-id="mastery-sara-evenings"]').count()===1,test.name+': Sara is supported');
   const arne=p.locator('#mastery-library [data-exercise-id^="mastery-arne"]');
   assert(await arne.count()===(test.arne?1:0),test.name+': unsupported variants are hidden');
   const mia=p.locator('#mastery-library [data-exercise-id^="mastery-mia"]');
   assert(await mia.count()===(test.mia?1:0),test.name+': unsupported Mia variants are hidden');
   if(test.arne||test.mia){
    const card=test.mia?mia:arne;
    assert(await card.getAttribute('data-exercise-id')===(test.mia?'mastery-mia-help-and-choice-moderate':'mastery-arne-ordinary-days-moderate'),'Only supported levels determine the default');
    assert((await card.textContent()).includes('2 levels'),'Card reports available levels accurately');await card.click();
    await p.locator('#mastery-use-room').waitFor();assert(await p.locator('.practice-level-options button').count()===2,'Only available levels can be chosen');
    assert(await p.locator('[data-practice-level="easy"]').count()===0,'Unavailable Easy is absent');
    await p.locator('[data-practice-level="hard"]').click();await p.waitForFunction(()=>document.querySelector('[data-practice-level="hard"]')?.getAttribute('aria-pressed')==='true');
    assert((await p.locator('#mastery-practice .room-case-heading').textContent()).includes('Hard'),'Host selection uses the supported level');
    await p.evaluate(()=>document.documentElement.style.fontSize='200%');
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Host selection fits enlarged text on a 320px phone');
    await p.screenshot({path:'output/playwright/arne-mastery-host-levels-320.png',fullPage:true});
   }
  }finally{await context.close();}
 }
 assert(errors.length===0,'No runtime errors: '+errors.join(';'));return {catalogs:cases.length,errors};
}

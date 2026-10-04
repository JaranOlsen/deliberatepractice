// Playwright CLI: run-code --filename=scripts/check-mastery-phone-flows.js
// Run node scripts/check-local-room-db.mjs --serve first. No remote writes.
async page => {
 const url=page.url(),assert=(ok,message)=>{if(!ok)throw new Error(message);};
 const testCase=new URL(url).searchParams.get('testCase'),nora=testCase==='nora',mia=testCase==='mia',arne=['arne','mia','nora'].includes(testCase);
 const exerciseId=nora?'mastery-nora-work-and-belonging-easy':mia?'mastery-mia-help-and-choice-easy':arne?'mastery-arne-ordinary-days-easy':'mastery-sara-evenings';
 const caseId=nora?'case-nora':mia?'case-mia':arne?'case-arne':'case-sara';
 const levels=arne?['easy','moderate','hard']:['easy'];
 assert(['127.0.0.1','localhost'].includes(new URL(url).hostname),'Local preview only');
 const users=await (await page.request.get('http://127.0.0.1:5199/users')).json(),errors=[],contexts=[];
 let stage='setup',completed=0;
 const allRatings=async()=>(await page.request.get('http://127.0.0.1:5199/mastery-ratings')).json();
 const before=new Set((await allRatings()).map(r=>r.id));
 try {
  for(const language of ['en','no'])for(const level of levels)for(const mode of ['individual','shared','pair']){
   stage=`${language}/${level}/${mode}`;
   const context=await page.context().browser().newContext({viewport:{width:320,height:844}});contexts.push(context);
   const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
   await context.addInitScript(({language,mode})=>{
    localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:mode!=='individual'?'triad':'individual',groupUiVersion:2}));
   },{language,mode});
   let loseResponse=false;
   await context.route('**/src/js/backend.js*',route=>route.fulfill({contentType:'text/javascript',body:`
    const user={id:'${users.t}',email:'t@local.invalid'};
    export const isSupabaseReady=()=>true,isAccessExpired=()=>false;
    export const getAuthSession=async()=>({user}),onAuthStateChange=()=>()=>{};
    export const ensureUserProfile=async()=>({id:user.id,display_name:'Test therapist'});
    export const listPracticeTargets=async()=>[{target_user_id:user.id,target_kind:'self',display_name:'Test therapist'}];
    export const listPracticeRatings=async()=>[];
    export const listMasteryRatings=async({source})=>(await (await fetch('/__mastery_history')).json()).filter(r=>r.therapist_user_id===user.id&&r.source===source);
    const rpc=async(name,args)=>{const response=await fetch('/__mastery_rpc',{method:'POST',body:JSON.stringify({name,args})});const data=await response.json();if(!response.ok)throw new Error(data.message);return data;};
    export const getMasteryCapabilities=()=>rpc('mastery_capabilities',{});
    export const submitMasteryRating=p=>rpc('record_mastery_rating',{input_language_id:p.languageId,input_exercise_id:p.exerciseId,input_content_revision:p.revision,input_parent_round_id:p.roundId,input_set_number:p.setNumber,input_completed_scene_ids:p.completedIds,input_score:p.score,input_practice_mode:p.practiceMode});
    export const getPracticeGoal=async()=>'',savePracticeGoal=async()=>'';
    export const signOut=async()=>{},updateUserProfile=async()=>({}),logAccessCodeAttempt=async()=>{};
    export const submitFeedback=async()=>{throw new Error('Unexpected feedback');},redeemAccessCode=async()=>{throw new Error('Unexpected redemption');};
    export const submitPracticeRating=async()=>{throw new Error('Mastery must not record focused ratings');};
    export const signInWithMagicLink=async()=>{throw new Error('Unexpected email');};
    export const watchPracticeRoom=async()=>()=>{},practiceRoomRpc=async()=>{throw new Error('Unexpected room');};
   `}));
   await context.route('**/__mastery_history',async route=>{const r=await p.request.get('http://127.0.0.1:5199/mastery-ratings');await route.fulfill({contentType:'application/json',body:await r.text()});});
   await context.route('**/__mastery_rpc',async route=>{
    const {name,args}=JSON.parse(route.request().postData());
    const r=await p.request.post('http://127.0.0.1:5199/rpc',{data:{user:users.t,name,args}});
    if(loseResponse&&name==='record_mastery_rating'){loseResponse=false;await route.fulfill({status:503,body:'{"message":"Response lost after commit"}'});}
    else await route.fulfill({status:r.status(),contentType:'application/json',body:await r.text()});
   });
   const fits=async label=>{
    await p.evaluate(()=>document.documentElement.style.fontSize='200%');
    const size=await p.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:innerWidth,overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().width&&e.getBoundingClientRect().right>innerWidth+1).slice(0,6).map(e=>e.id||e.className)}));
    assert(size.width<=size.viewport,`${stage} ${label} overflow: ${JSON.stringify(size)}`);
    await p.evaluate(()=>document.documentElement.style.fontSize='');
   };
   await p.goto(url);await p.waitForFunction(()=>document.getElementById('account-button').textContent==='Account'||document.getElementById('account-button').textContent==='Konto');
   await p.locator('#home-library').click();await p.locator('#exercise-mastery').click();
   await p.locator(`[data-exercise-id="${exerciseId}"]`).click();await p.locator('#mastery-start').waitFor();
   if(arne&&level!=='easy'){await p.locator(`[data-practice-level="${level}"]`).click();await p.waitForFunction(level=>document.querySelector(`[data-practice-level="${level}"]`)?.getAttribute('aria-pressed')==='true',level);}
   assert((await p.locator('#mastery-practice .case-brief').textContent()).includes(arne?(language==='no'?'Jeg heter '+(nora?'Nora':mia?'Mia':'Leo'):'I’m '+(nora?'Nora':mia?'Mia':'Leo')):(language==='no'?'Hei, jeg heter Sara':'Hi, I\'m Sara')),'Client sees background and voice before beginning');
   const levelName={en:{easy:'Easy',moderate:'Moderate',hard:'Hard'},no:{easy:'Lett',moderate:'Moderat',hard:'Vanskelig'}}[language][level];
   assert((await p.locator('#mastery-practice .room-case-heading').textContent()).endsWith(levelName),'The exercise level follows the selected language');
   await fits('preparation');
   if(mode!=='individual'){
    if(mode==='pair')await p.locator('#mastery-practice .mastery-account-confirm input').check();
    await p.locator('#mastery-start').click();await p.locator('#mastery-start').click();if(mode==='shared')await p.locator('#mastery-start').click();
   }else await p.locator('#mastery-start').click();
   const roundId=await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_mastery_session')).roundId);
   for(let set=1;set<=4;set++){
    if(mode!=='individual')await p.locator('.mastery-role-tabs button').nth(mode==='pair'?1:2).click();
    for(let item=0;item<3;item++){
     if(mode==='shared'&&set===1&&item===0){
      await p.locator('.mastery-role-tabs button').nth(1).click();assert(await p.locator('#mastery-practice blockquote').count()===0,'Therapist does not see client script');
      assert(await p.locator('#mastery-finish').count()===0,'Shared therapist does not advance');
      await p.locator('.mastery-role-tabs button').nth(2).click();
     }
     assert(await p.locator('#mastery-finish').isVisible(),'Completion action available to guide');
     await fits('item');
     if(set===1&&item===0)await p.screenshot({path:`output/playwright/mastery-${nora?'nora':mia?'mia':arne?'arne':'sara'}-${level}-${language}-${mode}-item-320.png`,fullPage:true});
     await p.locator('#mastery-finish').click();
    }
    await p.locator('#mastery-score').waitFor();await fits('rating');
    if(set===1)await p.screenshot({path:`output/playwright/mastery-${language}-${mode}-rating-320.png`,fullPage:true});
    if(set===1){await p.evaluate(caseId=>localStorage.setItem('dp_case_levels_v1',JSON.stringify({[caseId]:'hard'})),caseId);await p.reload();await p.locator('#resume-mastery').click();await p.locator('#mastery-score').waitFor();assert(await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_mastery_session')).roundId)===roundId,'Reload retains checkpoint identity');assert(await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_mastery_session')).difficulty)===level,'Resume pins the selected exercise level');}
    if(mode!=='individual'&&set===1)await p.locator('.mastery-account-confirm input').check();
    await p.locator('#mastery-score').selectOption(String(set+1));
    if(language==='en'&&mode==='individual'&&set===1)loseResponse=true;
    await p.locator('#mastery-save').click();
    if(language==='en'&&mode==='individual'&&set===1){await p.locator('#mastery-practice [role="alert"]').waitFor();await p.locator('#mastery-save').click();}
    await p.waitForFunction(set=>JSON.parse(localStorage.getItem('dp_mastery_session')).ratings[set]?.remote,set);
    await p.locator('#mastery-next').click();
   }
   const rows=(await allRatings()).filter(r=>r.parent_round_id===roundId);
   assert(rows.length===4&&rows.every(r=>r.source==='self'&&r.item_count===3&&r.difficulty===level&&r.practice_mode===(mode==='pair'?'shared':mode)),'Four correctly attributed mastery ratings at the selected level');
   assert(await p.evaluate(()=>JSON.parse(localStorage.getItem('dp_mastery_session')))===null,'Completed round is not resumable');
   await p.locator('#open-progress').click();await p.locator('#progress-mastery').click();await p.locator('#mastery-history .mastery-history-list').waitFor();
   assert((await p.locator('#mastery-history').textContent()).includes('4/4'),'Mastery history shows four checkpoints');
   assert(await p.locator('#self-chart svg').count()===0,'Mastery records do not create a focused radar');
   await fits('progress');
   await p.screenshot({path:`output/playwright/mastery-${language}-${mode}-history-320.png`,fullPage:true});
   completed++;
  }
  const rows=(await allRatings()).filter(r=>!before.has(r.id));assert(rows.length===completed*4,'Each round stores exactly four checkpoints, including retry');
  assert(errors.length===0,'No runtime errors: '+errors.join(';'));
  return {completed,checkpoints:rows.length,errors};
 }catch(error){throw new Error(`${stage}: ${error.message}`);}
 finally{for(const context of contexts)await context.close();}
}

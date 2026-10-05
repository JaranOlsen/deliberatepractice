// Playwright CLI, local preview + isolated Postgres bridge only.
async page => {
 const url=page.url();if(!['127.0.0.1','localhost'].includes(new URL(url).hostname))throw new Error('Local preview only');
 const testCase=new URL(url).searchParams.get('testCase'),key=testCase??'arne',variable=['arne','mia','nora'].includes(key);
 const caseId='case-'+key,displayName={arne:'Leo',mia:'Mia',nora:'Nora'}[key]??key[0].toUpperCase()+key.slice(1);
 const manifest=await(await page.request.get(new URL('src/data/runtime/manifest.json',url).href)).json();
 const levels=manifest.cases[caseId].supportedLevels;
 const users=await (await page.request.get('http://127.0.0.1:5199/users')).json();
 const assert=(ok,message)=>{if(!ok)throw new Error(message);};
 const contexts=[],errors=[],rounds=[];let stage='setup';
 const requestedSkill=new URL(url).searchParams.get('testSkill');
 const skills=requestedSkill?[requestedSkill]:variable?['empathic-understanding','providing-treatment-rationale','empathic-affirmation-validation','exploratory-questions','empathic-explorations','empathic-conjectures','empathic-evocations','staying-in-contact-intense-affect','empathic-refocusing','consolidating-emotional-change','closing-after-emotional-work']:['empathic-refocusing','consolidating-emotional-change','closing-after-emotional-work'];
 try {
  for(const language of ['en','no']){
   const mode=language==='en'?'individual':'triad';
   const context=await page.context().browser().newContext({viewport:{width:320,height:844}});contexts.push(context);
   const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
   await context.addInitScript(({language,mode})=>{localStorage.setItem('dp_access_level','all');localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:mode,groupUiVersion:2}));},{language,mode});
   await context.route('**/src/js/backend.js*',route=>route.fulfill({contentType:'text/javascript',body:`
    const user={id:'${users.t}',email:'t@local.invalid'};
    export const isSupabaseReady=()=>true,isAccessExpired=()=>false;
    export const getAuthSession=async()=>({user}),onAuthStateChange=()=>()=>{};
    export const ensureUserProfile=async()=>({id:user.id,display_name:'Test therapist'});
    export const listPracticeTargets=async()=>[{target_user_id:user.id,target_kind:'self',display_name:'Test therapist'}];
    export const listPracticeRatings=async({source})=>(await(await fetch('/__focused_history')).json()).filter(r=>r.therapist_user_id===user.id&&r.source===source);
    export const listMasteryRatings=async()=>[],getMasteryCapabilities=async()=>null;
    export const submitMasteryRating=async()=>{throw new Error('Unexpected mastery write');};
    export const getPracticeGoal=async()=>'',savePracticeGoal=async s=>s.text;
    export const signOut=async()=>{},updateUserProfile=async()=>({}),logAccessCodeAttempt=async()=>{};
    export const submitFeedback=async()=>{throw new Error('Unexpected feedback');},redeemAccessCode=async()=>{throw new Error('Unexpected redemption');};
    export const signInWithMagicLink=async()=>{throw new Error('Unexpected email');};
    export const watchPracticeRoom=async()=>()=>{},practiceRoomRpc=async()=>{throw new Error('Unexpected room');};
    export const submitPracticeRating=async p=>{
      const args={input_therapist_user_id:p.therapistUserId,input_source:p.source,input_language_id:p.languageId,input_skill_id:p.skillId,input_case_id:p.caseId,input_statement_id:p.statementId,input_statement_index:p.statementIndex,input_difficulty:p.difficulty,input_score:p.score,input_criteria_tags:p.criteriaTags,input_content_revision:p.contentRevision,input_rating_scope:p.ratingScope,input_completed_statement_ids:p.completedStatementIds,input_item_count:p.itemCount,input_client_round_id:p.roundId,input_practice_mode:p.practiceMode,input_rating_rubric:p.ratingRubric,input_parent_round_id:p.parentRoundId,input_set_number:p.setNumber};
      const response=await fetch('/__focused_rpc',{method:'POST',body:JSON.stringify(args)});const data=await response.json();if(!response.ok)throw new Error(data.message);return data;
    };
   `}));
   await context.route('**/__focused_rpc',async route=>{
    const args=JSON.parse(route.request().postData());const r=await p.request.post('http://127.0.0.1:5199/rpc',{data:{user:users.t,name:'record_practice_rating_with_history',args}});
    await route.fulfill({status:r.status(),contentType:'application/json',body:await r.text()});
   });
   await context.route('**/__focused_history',async route=>{const r=await p.request.get('http://127.0.0.1:5199/ratings');await route.fulfill({contentType:'application/json',body:await r.text()});});
   const click=id=>p.locator('#'+id).click();
   const session=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('dp_practice_session_v1')));
   const fits=async()=>{
    await p.evaluate(()=>document.documentElement.style.fontSize='200%');
    const layout=await p.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:innerWidth}));assert(layout.width<=layout.viewport,`${stage}: enlarged phone text fits ${JSON.stringify(layout)}`);
    await p.evaluate(()=>document.documentElement.style.fontSize='');
   };
   await p.goto(url);await p.waitForFunction(()=>['Account','Konto'].includes(document.querySelector('#account-button').textContent));await click('home-library');
   // Variable cases expose complete levels; fixed cases keep one level for each extension.
   for(const skill of skills){
    await p.locator(`button[data-skill-id="${skill}"]`).click();
    const card=p.locator(`[data-case-id="${caseId}"]`);
    assert((await card.locator('.card-title').textContent()).trim().startsWith(displayName),'The case uses its new display name');
    if(variable)assert(await card.locator('.case-levels').textContent()===(language==='no'?'Lett · Moderat · Vanskelig':'Easy · Moderate · Hard'),'All available levels appear before opening the case');
    if(skill===skills[0]){await fits();await p.screenshot({path:`output/playwright/${displayName.toLowerCase()}-case-levels-${language}-320.png`,fullPage:true});}
    await card.click();await p.locator('#start-practice:not(:disabled)').waitFor();
    if(variable)assert(await p.locator('#case-level-choice button').count()===3,'One compact level choice');else assert(await p.locator('#case-level-choice').isHidden(),'Fixed level has no choice');
    for(const level of levels){
     stage=`${language}/${skill}/${level}`;if(variable)await p.locator(`[data-practice-level="${level}"]`).click();
     if(variable)assert(await p.locator(`[data-practice-level="${level}"]`).getAttribute('aria-pressed')==='true','Selected level is visible');await fits();
    }
    await click('back-to-cases');await click('back-to-skills');
   }
   if(variable)for(const skill of ['alliance-repair','self-disclosure','therapist-self-awareness','marker-recognition-chairwork']){
    await p.locator(`button[data-skill-id="${skill}"]`).click();assert(await p.locator(`[data-case-id="${caseId}"]`).count()===0,'Unauthored skill has no case card');await click('back-to-skills');
   }
   for(const level of levels){
    stage=`${language}/full-round/${level}`;
    await p.locator(`button[data-skill-id="${skills[0]}"]`).click();await p.locator(`[data-case-id="${caseId}"]`).click();await p.locator('#start-practice:not(:disabled)').waitFor();
    if(variable)await p.locator(`[data-practice-level="${level}"]`).click();await click('start-practice');
    const start=await session();assert(start.difficulty===level,'Session captures selected level');assert(start.orderIds.length===12&&start.orderIds.every(id=>id.includes(variable?`_${level}_`:caseId)),'Round contains twelve items at one level');
    assert(await p.locator('#case-level-choice').isHidden(),'Active round cannot change level');await fits();
    await p.screenshot({path:`output/playwright/${displayName.toLowerCase()}-focused-${language}-${level}-320.png`,fullPage:true});
    // Preference changes cannot change an existing paused round.
    await p.evaluate(({level,caseId})=>localStorage.setItem('dp_case_levels_v1',JSON.stringify({[caseId]:level==='hard'?'easy':'hard'})),{level,caseId});
    await p.reload();await click('resume-button');await p.locator('#next-statement').waitFor();assert((await session()).difficulty===level,'Resume retains level despite a different preference');
    const rate=async()=>{await p.locator('[data-rating-score="4"]').click();if(mode==='triad'){assert(await p.locator('#rating-submit').isHidden(),'Shared ratings have no account save action');assert(await p.locator('#rating-goal-view').count()===0,'Shared ratings have no account reminders');}else{await click('rating-submit');await p.waitForFunction(()=>['Rating saved.','Vurderingen er lagret.'].includes(document.querySelector('#rating-status').textContent));}await click('rating-skip');};
    if(mode==='triad'){
     for(let set=1;set<=4;set++){for(let i=0;i<3;i++)await click('next-statement');await click('triad-complete-round');await rate();}
     rounds.push({round:start.roundId,level,mode,expected:0});
    }else{
     for(let i=0;i<12;i++)await click('next-statement');await rate();rounds.push({round:start.roundId,level,mode,expected:1});
    }
    // Fixed-level cases ignore the variable case's remembered choice.
    await p.reload();await click('home-library');await p.locator(`button[data-skill-id="${skills[0]}"]`).click();await p.locator('[data-case-id="case-sara"]').click();
    assert(await p.locator('#case-level-choice').isHidden(),'Sara retains her single fixed level');await click('back-to-cases');await click('back-to-skills');
   }
  }
  const ratings=(await(await page.request.get('http://127.0.0.1:5199/ratings')).json());
  for(const round of rounds){const rows=ratings.filter(r=>r.client_round_id===round.round||r.parent_round_id===round.round);assert(rows.length===round.expected&&rows.every(r=>r.case_id===caseId&&r.difficulty===round.level&&r.source==='self'&&r.completed_statement_ids.every(id=>id.includes(variable?`_${round.level}_`:caseId))),'Actual saved focused ratings preserve case, level and source');}
  assert(errors.length===0,'No runtime errors: '+errors.join(';'));return {rounds:rounds.length,ratings:rounds.reduce((n,r)=>n+r.expected,0),errors};
 }catch(error){throw new Error(stage+': '+error.message);}finally{for(const c of contexts)await c.close();}
}

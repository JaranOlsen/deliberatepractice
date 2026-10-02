// Playwright CLI: run-code --filename=scripts/check-four-set-room-flows.js
// Start npm run test:rooms:db -- --serve first. All RPCs run in isolated Postgres.
async (page) => {
  const url=page.url();
  if(!['127.0.0.1','localhost'].includes(new URL(url).hostname))throw new Error('Use local preview');
  const users=await (await page.request.get('http://127.0.0.1:5199/users')).json();
  const contexts=[],pages=[],errors=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  let room,loseResponse=false,stage='setup';
  for(const user of ['o','t','c','p']) {
    const context=await page.context().browser().newContext({viewport:{width:320,height:844}});contexts.push(context);
    const p=await context.newPage();pages.push(p);p.on('pageerror',e=>errors.push(e.message));
    await context.route('**/src/js/backend.js*',route=>route.fulfill({contentType:'text/javascript',body:`
      const user={id:'${users[user]}',email:'${user}@example.invalid'};
      export const isSupabaseReady=()=>true;
      export const isAccessExpired=()=>false;
      export const getAuthSession=async()=>({user});
      export const onAuthStateChange=()=>()=>{};
      export const ensureUserProfile=async()=>({id:user.id,display_name:'Test '+user.id});
      export const listPracticeTargets=async()=>[{target_user_id:user.id,target_kind:'self',display_name:'Test '+user.id}];
      export const listPracticeRatings=async()=>[];
      export const signOut=async()=>{};
      export const updateUserProfile=async()=>({});
      export const createPairingInvite=async()=>({});
      export const acceptPairingInvite=async()=>({});
      export const revokePracticePartnership=async()=>({});
      export const logAccessCodeAttempt=async()=>{};
      export const submitFeedback=async()=>{throw new Error('Unexpected feedback');};
      export const redeemAccessCode=async()=>{throw new Error('Unexpected access-code write');};
      export const submitPracticeRating=async()=>{throw new Error('Unexpected local rating');};
      export const signInWithMagicLink=async()=>{throw new Error('Unexpected email');};
      export const watchPracticeRoom=async()=>()=>{};
      export const practiceRoomRpc=async(name,args)=>{
        const response=await fetch('/__room_test/${user}',{method:'POST',body:JSON.stringify({name,args})});
        const data=await response.json();
        if(!response.ok)throw Object.assign(new Error(data.message),{code:data.code});
        return data;
      };
    `}));
    await context.route(`**/__room_test/${user}`,async route=>{
      const {name,args}=JSON.parse(route.request().postData());
      const response=await p.request.post('http://127.0.0.1:5199/rpc',{data:{user:users[user],name,args}});
      const data=await response.json();
      if(response.ok() && (!room || data.id!==room.id || data.version>=room.version))room=data;
      if(loseResponse&&name==='command_practice_room') {
        loseResponse=false;await route.fulfill({status:503,body:'{"message":"Response lost after commit"}'});
      } else await route.fulfill({status:response.status(),contentType:'application/json',body:JSON.stringify(data)});
    });
    await p.goto(url);await p.waitForFunction(()=>document.querySelector('#account-button').textContent==='Account');
  }
  const [o,t,c,watcher]=pages;
  const click=async(p,id)=>{
    const waits=['room-next','room-pass','room-save','room-rotate','room-change-role-submit'].includes(id) && !loseResponse;
    const v=waits?Number(await p.locator('#room-panel').getAttribute('data-version')):0;
    if(id==='room-pass')p.once('dialog',dialog=>dialog.accept());
    await p.locator('#'+id).click();
    if(waits)await p.waitForFunction(v=>Number(document.getElementById('room-panel').dataset.version)>v,v);
  };
  const sync=async()=>{
    for(let i=0;i<2;i++)for(const p of pages)await p.evaluate(()=>document.getElementById('room-sync').click());
    for(const p of pages)await p.waitForFunction(v=>Number(document.getElementById('room-panel').dataset.version)===v,room.version);
  };
  const ready=async(p,id)=>p.waitForFunction(id=>{const e=document.getElementById(id);return e&&!e.hidden&&!e.disabled;},id);
  const ratings=async()=> (await page.request.get('http://127.0.0.1:5199/ratings')).json();
  const existingRatings=new Set((await ratings()).map(r=>r.id));
  try {
    await click(o,'group-create');await o.locator('#room-host-options summary').click();
    await o.locator('#room-host-role').selectOption('observer');await click(o,'room-create');
    await o.locator('#room-share-code').waitFor();
    for(const [p,role] of [[t,'therapist'],[c,'client'],[watcher,'passive']]) {
      await click(p,'group-join');await p.locator('#room-code').fill(room.code);
      await p.locator('#room-join-options summary').click();await p.locator('#room-role').selectOption(role);
      await click(p,'room-join');await p.locator('#room-share-code').waitFor();
    }
    await sync();await click(o,'room-choose');
    await o.locator('button[data-skill-id="empathic-understanding"]').click();await o.locator('[data-case-id="case-sara"]').click();
    await click(o,'start-practice');await o.locator('.room-preparation').waitFor();await sync();
    const fullRound=room.round_id, order=[...room.statement_ids], roles=[room.therapist_id,room.client_id,room.observer_id];
    assert(room.round_size===12&&new Set(order).size===12,'Preparation selects twelve unique items');
    assert((await o.locator('#room-content').textContent()).includes('4 sets of 3'),'Preparation explains the fixed-role round');
    await ready(o,'room-next');await click(o,'room-next');await sync();
    for(let set=0;set<4;set++) {
      for(let i=0;i<3;i++) {
        stage=`set ${set+1} item ${i+1}`;
        assert(room.round_id===fullRound&&JSON.stringify(roles)===JSON.stringify([room.therapist_id,room.client_id,room.observer_id]),'Roles and whole round stay fixed');
        assert((await o.locator('#room-content').textContent()).includes(`Set ${set+1}/4`),'Active screen identifies its set');
        assert(await t.locator('#room-next').isHidden()&&await c.locator('#room-next').isHidden()&&await watcher.locator('#room-next').isHidden(),'Only observer advances');
        if(set===0&&i===0) {
          for(const p of pages)assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Role screens fit 320px');
          await o.screenshot({path:'output/playwright/four-sets-observer-320.png',fullPage:true});
          await c.screenshot({path:'output/playwright/four-sets-client-320.png',fullPage:true});
        }
        const beforeVersion=Number(await o.locator('#room-panel').getAttribute('data-version'));
        if(set===0&&i===2)loseResponse=true;
        if(set===1&&i===1){await ready(o,'room-pass');await click(o,'room-pass');}
        else {await ready(o,'room-next');await click(o,'room-next');}
        if(set===0&&i===2) {await o.locator('#room-retry').waitFor();await ready(o,'room-retry');await click(o,'room-retry');}
        await o.waitForFunction(v=>Number(document.getElementById('room-panel').dataset.version)>v,beforeVersion);
        await sync();
      }
      stage=`rating set ${set+1}`;
      assert(room.phase==='round_debrief'&&room.item_index===set*3+2,'Each third item pauses for rating: '+JSON.stringify({set,phase:room.phase,index:room.item_index,completed:room.completed_ids.length}));
      assert((await o.locator('#room-content').textContent()).includes(`${set===1?2:3} practiced · ${set===1?1:0} passed`),'Debrief counts only its set');
      assert(await o.locator('#room-change-role-form').isHidden(),'Roles cannot change at rating checkpoints');
      await o.locator('#room-score').selectOption('4');await ready(o,'room-save');await click(o,'room-save');await o.waitForFunction(()=>document.querySelector('#room-save').hidden);await sync();
      const rows=(await ratings()).filter(r=>r.therapist_user_id===users.t&&!existingRatings.has(r.id));
      assert(rows.length===set+1,'Every set creates one distinct rating');
      const rating=rows.find(r=>r.client_round_id===room.rating_round_id);
      assert(rating.source==='observer'&&rating.item_count===(set===1?2:3),'Observer rating has correct source and count');
      assert(JSON.stringify(rating.completed_statement_ids)===JSON.stringify(order.slice(set*3,set*3+3).filter((_,i)=>!(set===1&&i===1))),'Rating IDs exclude prior sets and passes');
      if(set===1) {
        await o.reload();await o.waitForFunction(()=>document.querySelector('#account-button').textContent==='Account');await click(o,'group-resume');await o.locator('#room-score').waitFor();await sync();
        assert((await o.locator('#room-score').inputValue())==='4','Reconnect retains the saved set score');
        assert(await o.locator('#room-save').isHidden(),'Reconnect does not prompt a duplicate rating');
      }
      if(set===3)await o.screenshot({path:'output/playwright/four-sets-rating-320.png',fullPage:true});
      await ready(o,'room-rotate');await click(o,'room-rotate');await o.waitForFunction(()=>document.querySelector('#room-panel').dataset.phase!=='round_debrief');await sync();
    }
    assert(room.phase==='choosing'&&!room.therapist_id&&!room.client_id&&!room.observer_id&&!room.skill_id&&!room.case_id,'After twelve items reset roles, skill and case');
    assert(room.member_ids.length===4&&room.host_id===users.o,'Room and host survive the complete round');
    for(const p of pages)assert(await p.locator('#room-change-role-form').isVisible(),'New round exposes role selection without opening People');
    await o.screenshot({path:'output/playwright/four-sets-next-round-320.png',fullPage:true});
    // Choose different roles and content for the next complete round, including a pair.
    await t.locator('#room-change-role').selectOption('client');await click(o,'room-change-role-submit');await sync();
    assert(await t.locator('#room-change-role').inputValue()==='client','A newer room snapshot preserves an unsubmitted role choice');
    await click(t,'room-change-role-submit');await sync();
    await c.locator('#room-change-role').selectOption('therapist');await click(c,'room-change-role-submit');await sync();
    await click(o,'room-choose');await o.locator('button[data-skill-id="therapist-self-awareness"]').click();
    await o.locator('[data-case-id="case-jason"]').click();await click(o,'start-practice');await o.locator('.room-preparation').waitFor();await sync();
    assert(room.therapist_id===users.c&&room.client_id===users.t&&!room.observer_id&&room.skill_id==='therapist-self-awareness'&&room.case_id==='case-jason','Fresh role, skill and case choices persist');
    await ready(c,'room-next');await click(c,'room-next');await sync();
    for(let i=0;i<3;i++){await ready(c,'room-pass');await click(c,'room-pass');await sync();}
    assert(await c.locator('#room-score').count()===0,'An all-passed set has no rating form');
    await ready(c,'room-rotate');await click(c,'room-rotate');await sync();
    for(let i=0;i<3;i++){await ready(c,'room-next');await click(c,'room-next');await sync();}
    await c.locator('#room-score').selectOption('3');await ready(c,'room-save');await click(c,'room-save');await sync();
    const pairRows=(await ratings()).filter(r=>r.therapist_user_id===users.c&&!existingRatings.has(r.id));
    assert(pairRows.length===1&&pairRows[0].source==='self'&&pairRows[0].item_count===3,'Pair therapist self-assessment follows the same set boundaries');
    assert(errors.length===0,'No browser errors: '+errors.join('; '));
    return {passed:true,participants:4,checks:['real local RPCs','twelve unique items','fixed roles','four distinct set ratings','passed items','lost-response replay','saved-checkpoint reconnect','320px role screens','explicit role/skill/case reselection','role selection survives polling','pair self-assessment','all-passed set']};
  } catch(error) {
    const ui=await o.locator('#room-panel').evaluate(e=>({phase:e.dataset.phase,version:e.dataset.version,error:document.getElementById('room-error').textContent})).catch(()=>null);
    throw new Error(stage+': '+error.message+' '+JSON.stringify(ui));
  } finally {for(const context of contexts)await context.close();}
}

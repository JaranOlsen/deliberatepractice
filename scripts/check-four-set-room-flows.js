// Playwright CLI: run-code --filename=scripts/check-four-set-room-flows.js
// Start npm run test:rooms:db -- --serve first. All RPCs run in isolated Postgres.
async (page) => {
  const url=page.url();
  if(!['127.0.0.1','localhost'].includes(new URL(url).hostname))throw new Error('Use local preview');
  const users=await (await page.request.get('http://127.0.0.1:5199/users')).json();
  const contexts=[],pages=[],errors=[];
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const resetGoal=await page.request.post('http://127.0.0.1:5199/goal',{data:{user:users.t,languageId:'en',skillId:'empathic-understanding',action:'save',text:''}});
  assert(resetGoal.ok(),'Reset only the isolated therapist reminder fixture');
  let room,loseResponse=false,stage='setup',claimRace=false,readyRace=false,disconnectedUser=null;
  const claimWaiters=[],claimResults=[];
  const readyWaiters=[],readyResults=[];
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
      const goal=async(s,action)=>{
        const response=await fetch('/__goal_test/${user}',{method:'POST',body:JSON.stringify({...s,action})});
        if(!response.ok)throw new Error('Goal request failed');
        return (await response.json()).text;
      };
      export const getPracticeGoal=s=>goal(s,'read');
      export const savePracticeGoal=s=>goal(s,'save');
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
      if(disconnectedUser===user&&name==='sync_practice_room')return route.fulfill({status:503,contentType:'application/json',body:'{"message":"Test connection interrupted"}'});
      const competing=claimRace&&name==='command_practice_room'&&args.input_action==='role_client';
      if(competing)await new Promise(resolve=>{
        claimWaiters.push(resolve);
        if(claimWaiters.length===2){claimRace=false;for(const release of claimWaiters)release();}
      });
      const concurrentReady=readyRace&&name==='manage_practice_room'&&args.input_action==='ready';
      if(concurrentReady)await new Promise(resolve=>{
        readyWaiters.push(resolve);
        if(readyWaiters.length===2){readyRace=false;for(const release of readyWaiters)release();}
      });
      const response=await p.request.post('http://127.0.0.1:5199/rpc',{data:{user:users[user],name,args}});
      const data=await response.json();
      if(competing)claimResults.push({user,version:args.input_expected_version,ok:response.ok(),data});
      if(concurrentReady)readyResults.push({user,version:args.input_expected_version,ok:response.ok(),data});
      if(response.ok() && data.id && (!room || data.id!==room.id || data.version>=room.version))room=data;
      if(loseResponse&&['command_practice_room','manage_practice_room'].includes(name)) {
        loseResponse=false;await route.fulfill({status:503,body:'{"message":"Response lost after commit"}'});
      } else await route.fulfill({status:response.status(),contentType:'application/json',body:JSON.stringify(data)});
    });
    await context.route(`**/__goal_test/${user}`,async route=>{
      const data=JSON.parse(route.request().postData());
      const response=await p.request.post('http://127.0.0.1:5199/goal',{data:{...data,user:users[user],targetUserId:data.userId}});
      await route.fulfill({status:response.status(),contentType:'application/json',body:await response.text()});
    });
    await p.goto(url);await p.waitForFunction(()=>document.querySelector('#account-button').textContent==='Account');
  }
  const [o,t,c,watcher]=pages;
  const click=async(p,id)=>{
    const waits=['room-next','room-pass','room-save','room-rotate','room-change-role-submit','room-ready'].includes(id) && !loseResponse;
    const v=waits?Number(await p.locator('#room-panel').getAttribute('data-version')):0;
    if(id==='room-pass')p.once('dialog',dialog=>dialog.accept());
    await p.locator('#'+id).click();
    if(waits)await p.waitForFunction(v=>Number(document.getElementById('room-panel').dataset.version)>v,v);
  };
  const sync=async()=>{
    // Leave returns only {left:true}; fetch the committed version before waiting on UI.
    const current=await page.request.post('http://127.0.0.1:5199/rpc',{data:{user:users.o,name:'sync_practice_room',args:{input_room_id:room.id,input_acknowledged_version:-1}}});
    assert(current.ok(),'Host can fetch the committed room snapshot');room=await current.json();
    for(let i=0;i<2;i++)for(const p of pages)await p.evaluate(()=>document.getElementById('room-sync').click());
    for(const p of pages)await p.waitForFunction(v=>Number(document.getElementById('room-panel').dataset.version)===v,room.version);
  };
  const ready=async(p,id)=>p.waitForFunction(id=>{const e=document.getElementById(id);return e&&!e.hidden&&!e.disabled;},id);
  const confirmReadiness=async()=>{
    const participants=[];
    for(const p of pages)if(await p.locator('#room-ready').isVisible())participants.push(p);
    for(const p of participants)await ready(p,'room-ready');
    await Promise.all(participants.map(p=>click(p,'room-ready')));await sync();
  };
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
    stage='private feedback targets';
    const goal=t.locator('#room-next-attempt');
    await goal.getByRole('button',{name:'Add a reminder',exact:true}).click();
    await goal.locator('textarea').fill('Pause before the reflection.');
    await goal.getByRole('button',{name:'Save reminder',exact:true}).click();
    await goal.getByRole('status').filter({hasText:'Saved for your next practice.'}).waitFor();
    assert(await c.locator('.skill-feedback-guide').count()===0,'Client preparation does not include scoring guidance');
    assert(await o.locator('#room-next-attempt').count()===0&&await c.locator('#room-next-attempt').count()===0,'Private targets exist only on the therapist screen');
    const leaked=await page.request.post('http://127.0.0.1:5199/goal',{data:{user:users.o,targetUserId:users.t,languageId:'en',skillId:'empathic-understanding',action:'read'}});
    assert((await leaked.json()).text==='','Actual room observer cannot read therapist reminder through RLS');
    assert(!JSON.stringify(room).includes('Pause before the reflection.'),'Reminder is excluded from room snapshots');
    await o.locator('#room-feedback-reference > summary').click();
    assert((await o.locator('#room-feedback-reference').textContent()).includes('3 · Adequate in parts')&&(await o.locator('#room-feedback-reference').textContent()).includes('5 · Skillfully demonstrated'),'Observer has skill-specific anchors in preparation');
    await o.locator('#room-feedback-reference > summary').click();
    stage='human readiness';
    assert(room.readiness_required&&room.preparation_id,'New app rooms opt into human readiness');
    assert(await o.locator('#room-role-summary').isVisible()&&!(await o.locator('#room-details').evaluate(e=>e.open)),'Assignments are visible without opening People');
    assert((await o.locator('#room-seats').textContent()).includes('Test c'),'Visible assignments name the client');
    assert(await o.locator('#room-next').isDisabled(),'Synchronized screens alone do not enable Start');
    assert(await o.locator('#room-ready').isHidden()&&await watcher.locator('#room-ready').isHidden(),'Observer starts; watching participants need no readiness tap');
    await o.screenshot({path:'output/playwright/room-readiness-observer-320.png',fullPage:true});
    await c.screenshot({path:'output/playwright/room-readiness-client-320.png',fullPage:true});
    readyRace=true;await confirmReadiness();
    assert(readyResults.length===2&&readyResults.every(r=>r.ok)&&readyResults[0].version===readyResults[1].version,'Both readiness taps from the same version succeed');
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
        assert((await t.locator('#room-next-attempt').textContent()).includes('Pause before the reflection.'),'Private reminder follows the therapist through every item and set');
        assert(await t.locator('#room-next-attempt textarea').isHidden(),'Active reminder does not add an editor');
        assert(await c.locator('.skill-feedback-guide').count()===0,'Client item screen has no scoring cues');
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
    stage='post-round role claims';
    await t.locator('#room-change-role').selectOption('client');await click(o,'room-change-role-submit');await sync();
    assert(await t.locator('#room-change-role').inputValue()==='client','A newer room snapshot preserves an unsubmitted role choice');
    await c.locator('#room-change-role').selectOption('client');
    claimRace=true;
    await Promise.all([t,c].map(p=>p.locator('#room-change-role-submit').click()));
    for(let retry=0;claimResults.length<2&&retry<250;retry++)await new Promise(resolve=>setTimeout(resolve,20));
    assert(claimResults.length===2,'Both competing requests completed');
    await sync();
    assert(claimResults.filter(r=>r.ok).length===1&&claimResults[0].version===claimResults[1].version,'Exactly one simultaneous client claim succeeds');
    assert(claimResults.find(r=>!r.ok).data.code==='P0001','The competing claim receives a database rejection');
    const loser=room.client_id===users.t?c:t;
    assert(await loser.locator('#room-change-role option[value="client"]').isDisabled(),'Taken client role is disabled on the other phone');
    assert(await loser.locator('#room-change-role').inputValue()==='passive','A taken draft role resets to the participant’s actual role');
    assert((await loser.locator('#room-error').textContent()).includes('Room changed'),'The losing participant sees why their claim failed');
    await o.locator('#room-change-role').selectOption('therapist');await click(o,'room-change-role-submit');await sync();
    await click(o,'room-choose');await o.locator('button[data-skill-id="therapist-self-awareness"]').click();
    await o.locator('[data-case-id="case-jason"]').click();await click(o,'start-practice');await o.locator('.room-preparation').waitFor();await sync();
    stage='missing observer';
    assert(await o.locator('#room-next').isDisabled(),'A larger group cannot start without an observer');
    assert((await o.locator('#room-sync-status').textContent()).includes('Active observer'),'Waiting status names the missing role');
    const bypass=await page.request.post('http://127.0.0.1:5199/rpc',{data:{user:users.o,name:'command_practice_room',args:{input_room_id:room.id,input_command_id:crypto.randomUUID(),input_expected_version:room.version,input_action:'start'}}});
    assert(!bypass.ok()&&(await bypass.json()).message.includes('Choose an active observer'),'The database also refuses a direct missing-observer start');
    assert(await o.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Missing-role status fits 320px');
    await o.screenshot({path:'output/playwright/role-selection-missing-observer-320.png',fullPage:true});
    await loser.locator('#room-details summary').click();await loser.locator('#room-change-role').selectOption('observer');await click(loser,'room-change-role-submit');await sync();
    assert(await loser.locator('#room-next').isVisible()&&await loser.locator('#room-next').isDisabled(),'Filling the observer role exposes Start but still waits for human readiness');
    assert(await o.locator('#room-next').isHidden(),'Filling the observer role transfers the start control to that phone');
    stage='two-person reselection';
    // A genuine pair may start without an observer: remove both watching participants.
    for(const p of [loser,watcher]) {
      if(!await p.locator('#room-leave').isVisible())await p.locator('#room-details summary').click();
      stage='leave '+(p===loser?'former observer':'watcher');
      await click(p,'room-leave');await click(p,'room-exit-confirm');
      await p.locator('#room-panel').waitFor({state:'hidden'});
      pages.splice(pages.indexOf(p),1);await sync();
    }
    assert(room.member_ids.length===2&&room.therapist_id===users.o&&room.client_id&&!room.observer_id,'Two-person room retains exactly therapist and client');
    assert((await o.locator('.room-preparation').textContent()).includes('Start when you’re both ready'),'Preparation updates when a larger group becomes a pair');
    assert(await o.locator('#room-ready').isHidden(),'Pair therapist starts instead of confirming readiness twice');
    await confirmReadiness();
    await ready(o,'room-next');await click(o,'room-next');await sync();
    for(let i=0;i<3;i++){await ready(o,'room-pass');await click(o,'room-pass');await sync();}
    assert(await o.locator('#room-score').count()===0,'An all-passed set has no rating form');
    await ready(o,'room-rotate');await click(o,'room-rotate');await sync();
    for(let i=0;i<3;i++){await ready(o,'room-next');await click(o,'room-next');await sync();}
    await o.locator('#room-score').selectOption('3');await ready(o,'room-save');await click(o,'room-save');await sync();
    const pairRows=(await ratings()).filter(r=>r.therapist_user_id===users.o&&!existingRatings.has(r.id));
    assert(pairRows.length===1&&pairRows[0].source==='self'&&pairRows[0].item_count===3,'Pair therapist self-assessment follows the same set boundaries');
    stage='host transfer';
    const partner=pages.find(p=>p!==o), previousHost=room.host_id, nextHost=room.client_id;
    const retained={roles:[room.therapist_id,room.client_id,room.observer_id],round:room.round_id,index:room.item_index,score:room.saved_score};
    await o.locator('#room-details summary').click();await o.locator('#room-transfer-target').selectOption(nextHost);
    await ready(o,'room-transfer');await click(o,'room-transfer');
    assert((await o.locator('#room-exit-description').textContent()).includes('practice roles stay the same'),'Transfer confirmation explains role preservation');
    await o.screenshot({path:'output/playwright/room-host-transfer-320.png',fullPage:true});
    loseResponse=true;await click(o,'room-exit-confirm');await o.locator('#room-retry').waitFor();
    await ready(o,'room-retry');await click(o,'room-retry');await o.waitForFunction(()=>document.getElementById('room-retry').hidden);await sync();
    assert(room.host_id===nextHost&&room.host_id!==previousHost,'Hosting transfer survives a lost response');
    assert(JSON.stringify(retained)===JSON.stringify({roles:[room.therapist_id,room.client_id,room.observer_id],round:room.round_id,index:room.item_index,score:room.saved_score}),'Transfer preserves roles, round and rating');
    assert(await o.locator('#room-end').isHidden()&&!await o.locator('#room-leave').isHidden(),'Former host can leave and cannot end the room');
    assert(await partner.locator('#room-end').evaluate(e=>!e.hidden),'New host receives the end-room control inside Room & people');
    stage='host recovery';
    disconnectedUser=room.client_id===users.c?'c':'t';
    const age=await page.request.post('http://127.0.0.1:5199/host-away',{data:{roomId:room.id}});assert(age.ok(),'Only the local fixture host is aged');
    await o.evaluate(()=>document.getElementById('room-sync').click());
    await o.locator('#room-recover').waitFor();await ready(o,'room-recover');
    assert(await o.locator('#room-rotate').isDisabled(),'An absent client still blocks progression');
    await click(o,'room-recover');await click(o,'room-exit-confirm');
    await o.waitForFunction(()=>document.getElementById('room-host-recovery').hidden);
    assert(room.host_id===users.o&&room.saved_score===retained.score,'Explicit recovery transfers hosting without changing the rating');
    assert(await o.locator('#room-rotate').isDisabled(),'Recovery does not take the absent client’s role or bypass synchronization');
    disconnectedUser=null;await sync();await ready(o,'room-rotate');
    assert(await partner.locator('#room-host-recovery').isHidden(),'Returning former host does not regain hosting');
    assert(!(await o.locator('#room-next-attempt').textContent()).includes('Pause before the reflection.'),'New therapist/skill does not inherit the previous therapist’s note');
    assert(!(await ratings()).some(r=>JSON.stringify(r).includes('Pause before the reflection.')),'Ratings never contain private reminder text');
    assert(errors.length===0,'No browser errors: '+errors.join('; '));
    return {passed:true,participants:4,checks:['private therapist reminder across four sets','room peer RLS isolation','skill-specific observer anchors','no notes in snapshots or ratings','real local RPCs','twelve unique items','fixed roles','four distinct set ratings','passed items','lost-response replay','saved-checkpoint reconnect','320px role screens','explicit role/skill/case reselection','role selection survives polling','simultaneous client claims','taken draft choice resets','missing observer blocks UI and RPC','human readiness barrier','simultaneous readiness','visible role assignments','pair readiness','pair self-assessment','all-passed set','host transfer with lost-response replay','host recovery','returning host does not regain authority']};
  } catch(error) {
    const ui=await o.locator('#room-panel').evaluate(e=>({phase:e.dataset.phase,version:e.dataset.version,error:document.getElementById('room-error').textContent})).catch(()=>null);
    const allUi=await Promise.all(pages.map(p=>p.locator('#room-panel').evaluate(e=>({hidden:e.hidden,phase:e.dataset.phase,version:e.dataset.version,section:document.body.dataset.section,error:document.getElementById('room-error').textContent})).catch(()=>null)));
    throw new Error(stage+': '+error.message+' '+JSON.stringify({ui,allUi,room}));
  } finally {for(const context of contexts)await context.close();}
}

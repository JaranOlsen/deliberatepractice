// Playwright CLI: run-code --filename=scripts/check-mastery-room-flows.js
// Start npm run test:rooms:db -- --serve first. All RPCs run in isolated Postgres.
async (page) => {
  const url=page.url(),language=new URL(url).searchParams.get('testLanguage')==='no'?'no':'en';
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
      export const listMasteryRatings=async()=>[];
      export const getMasteryCapabilities=()=>practiceRoomRpc('mastery_capabilities',{});
      export const submitMasteryRating=async()=>{throw new Error('Unexpected mastery write');};
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
    await context.addInitScript(language=>localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'group',groupUiVersion:2})),language);
    await p.goto(url);await p.waitForFunction(()=>['Account','Konto'].includes(document.querySelector('#account-button').textContent));
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
  const largeTextFits=async stage=>{
    for(const p of pages){
      await p.evaluate(()=>document.documentElement.style.fontSize='200%');
      const layout=await p.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:innerWidth,overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().width&&e.getBoundingClientRect().right>innerWidth+1).slice(0,10).map(e=>({id:e.id,class:e.className,parent:e.parentElement?.className}))}));
      assert(layout.width<=layout.viewport,stage+' fits 320px at 200% text: '+JSON.stringify(layout));
      await p.evaluate(()=>document.documentElement.style.fontSize='');
    }
  };
  try {
    await click(o,'group-create');await o.locator('#room-host-options summary').click();await o.locator('#room-host-role').selectOption('observer');await click(o,'room-create');await o.locator('#room-share-code').waitFor();
    for(const [p,role] of [[t,'therapist'],[c,'client'],[watcher,'passive']]){
      await click(p,'group-join');await p.locator('#room-code').fill(room.code);await p.locator('#room-join-options summary').click();await p.locator('#room-role').selectOption(role);await click(p,'room-join');await p.locator('#room-share-code').waitFor();
    }
    await sync();await click(o,'room-choose');await o.locator('#exercise-mastery').click();await o.locator('[data-exercise-id="mastery-sara-evenings"]').click();await o.locator('#mastery-use-room').click();await o.locator('.room-preparation').waitFor();await sync();
    const round=room.round_id,roles=[room.therapist_id,room.client_id,room.observer_id],order=[...room.statement_ids];
    assert(room.exercise_type==='mastery'&&room.skill_id===null&&order.length===12,'Mastery is an ordered exercise without a fake round skill');
    assert((await c.locator('#room-content').textContent()).includes(language==='no'?'Hei, jeg heter Sara':'Hi, I\'m Sara'),'Client sees role background and voice');
    assert(await c.locator('#room-ready').isVisible(),'Client Ready is reachable');
    assert(await o.locator('#room-next').isDisabled(),'Human readiness blocks start');
    await largeTextFits('Mastery preparation');await confirmReadiness();await ready(o,'room-next');await click(o,'room-next');await sync();
    for(let set=1;set<=4;set++){
      for(let item=0;item<3;item++){
        stage=`set ${set} item ${item}`;
        assert(room.statement_ids.join('|')===order.join('|'),'Sequence does not shuffle');
        assert(room.round_id===round&&JSON.stringify([room.therapist_id,room.client_id,room.observer_id])===JSON.stringify(roles),'Roles persist for all twelve moments');
        assert(await t.locator('#room-content blockquote').count()===0,'Therapist sees only prompt, not script');
        assert(await c.locator('#room-content .skill-feedback-guide').count()===0,'Client sees no assessment cues');
        for(const p of [o,c,watcher])assert(await p.locator('#room-content blockquote').count()===1,'Reader/observers see current client line');
        assert(await o.locator('.mastery-scene-cues li').count()===2,'Observer has two concise skill cues');
        assert(await watcher.locator('#room-next').isHidden()&&await t.locator('#room-next').isHidden(),'Only active observer guides');
        await largeTextFits(stage);
        if(set===1&&item===0)for(const [name,p] of [['observer',o],['client',c],['therapist',t]])await p.screenshot({path:`output/playwright/mastery-room-${language}-${name}-320.png`,fullPage:true});
        if(set===2&&item===0){
          // Resume the same scene after reconnect, including a switched skill.
          const current=room.statement_ids[room.item_index];await t.reload();await t.locator('#group-resume').click();await t.locator('#room-content .individual-guide').waitFor();await sync();
          assert(room.statement_ids[room.item_index]===current,'Reconnect resumes exact scene');
        }
        await ready(o,'room-next');
        if(set===1&&item===0){loseResponse=true;await click(o,'room-next');await o.locator('#room-retry').waitFor();await ready(o,'room-retry');await click(o,'room-retry');await o.waitForFunction(()=>document.getElementById('room-retry').hidden);}
        else await click(o,'room-next');
        await sync();
      }
      assert(room.phase==='round_debrief','Three scenes reach a checkpoint');
      assert(await t.locator('#room-rating-form').count()===0&&await c.locator('#room-rating-form').count()===0,'Only active observer rates');
      await o.locator('#room-score').selectOption(String(set+1));await ready(o,'room-save');await click(o,'room-save');await sync();
      await largeTextFits('Checkpoint');
      await ready(o,'room-rotate');await click(o,'room-rotate');await sync();
    }
    const rows=(await (await page.request.get('http://127.0.0.1:5199/mastery-ratings')).json()).filter(r=>r.parent_round_id===round);
    assert(rows.length===4&&rows.every(r=>r.source==='observer'&&r.therapist_user_id===roles[0]&&r.created_by_user_id===roles[2]&&r.practice_mode==='group'),'Four observer checkpoints belong only to the therapist');
    assert((await ratings()).filter(r=>!existingRatings.has(r.id)).length===0,'Mastery creates no focused ratings');
    assert(room.phase==='choosing'&&!room.exercise_id&&!room.therapist_id&&!room.client_id&&!room.observer_id,'After twelve, choose roles and material again');
    await o.screenshot({path:'output/playwright/mastery-room-next-round-320.png',fullPage:true});
    assert(errors.length===0,'No runtime errors: '+errors.join(';'));
    return {checkpoints:rows.length,roles,errors};
  }catch(error){throw new Error(`${stage}: ${error.message}`);}
  finally{for(const context of contexts)await context.close();}
}

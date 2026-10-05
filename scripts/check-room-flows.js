// Playwright CLI: run-code --filename=scripts/check-room-flows.js
// Legacy three-item rooms: five isolated contexts; backend intercepted, no live writes.
// New twelve-item RPC integration is checked by check-four-set-room-flows.js.
async (page) => {
  const url = page.url();
  if (!['127.0.0.1', 'localhost'].includes(new URL(url).hostname)) throw new Error('Use the local dev preview');
  const browser = page.context().browser();
  const contexts = [], pages = [], errors = [];
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  let room = null, lostResponse = false, disconnectClient = false, disconnectSpectators = false, saves = 0, creations = 0;
  const receipts = new Map();
  const snapshot = () => structuredClone(room);
  const ackAll = () => ['observer', 'therapist', 'client'].filter(role => room[`${role}_id`]).every(role => room.presence[room[`${role}_id`]]?.acknowledged_version === room.version);
  for (const user of ['o', 't', 'c', 'p', 'q']) {
    const context = await browser.newContext({viewport: {width: 390, height: 844}}); contexts.push(context);
    const p = await context.newPage(); pages.push(p); p.on('pageerror', e => errors.push(e.message));
    await context.route('**/src/js/backend.js*', route => route.fulfill({contentType: 'text/javascript', body: `
      const user={id:'${user}',email:'${user}@example.invalid'};
      export const isSupabaseReady=()=>true;
      export const isAccessExpired=()=>false;
      export const getAuthSession=async()=>({user});
      export const onAuthStateChange=()=>()=>{};
      export const ensureUserProfile=async()=>({id:user.id,display_name:'Test '+user.id});
      export const listPracticeTargets=async()=>[{target_user_id:user.id,target_kind:'self',display_name:'Test '+user.id}];
      export const listMasteryRatings=async()=>[];
      export const getMasteryCapabilities=async()=>null;
      export const submitMasteryRating=async()=>{throw new Error('Unexpected mastery write');};
      export const listPracticeRatings=async()=>[];
      export const getPracticeGoal=async()=>'';
      export const savePracticeGoal=async s=>s.text;
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
    await context.route(`**/__room_test/${user}`, async route => {
      const {name, args} = JSON.parse(route.request().postData());
      let status = 200, data;
      const fail = message => {status = 400; data = {message, code: 'P0001'};};
      if (name === 'create_practice_room') {
        creations++; const cfg = args.input_config;
        room = {id: args.input_room_id, code: 'ABCD1234EF56', host_id: user, member_ids: [user], observer_id: null, therapist_id: null, client_id: null, [`${cfg.hostRole ?? 'therapist'}_id`]: user,
          language_id: cfg.languageId, skill_id: cfg.skillId, case_id: cfg.caseId, difficulty: cfg.difficulty,
          content_revision: cfg.contentRevision ?? null, catalog: cfg.statements ?? [], statement_ids: cfg.statements?.slice(0,3).map(s=>s.id) ?? [],
          round_size: 3, item_index: 0, phase: cfg.skillId ? 'lobby' : 'choosing', completed_ids: [], skipped_ids: [], round_id: 'round-one', round_number: 1,
          version: 0, saved_score: null, expires_at: new Date(Date.now()+3600000).toISOString(), presence: {}};
        data = snapshot();
      } else if (name === 'join_practice_room') {
        if (args.input_code.replace(/[^a-z0-9]/gi,'').toUpperCase() !== room.code) fail('Room unavailable');
        else { if(!room.member_ids.includes(user)){ const role=args.input_role==='auto'?['therapist','client','observer'].find(r=>!room[`${r}_id`])??'passive':args.input_role; if(role!=='passive')room[`${role}_id`]=user;room.member_ids.push(user);room.version++;} data = snapshot(); }
      } else if (name === 'prepare_practice_room') {
        if(receipts.has(args.input_command_id)) data=snapshot();
        else {
          const cfg=args.input_config;Object.assign(room,{language_id:cfg.languageId,skill_id:cfg.skillId,case_id:cfg.caseId,
            difficulty:cfg.difficulty,content_revision:cfg.contentRevision,catalog:cfg.statements,statement_ids:cfg.statements.slice(0,3).map(e=>e.id),phase:'lobby'});
          room.version++;receipts.set(args.input_command_id,{action:'prepare'});data=snapshot();
          if(lostResponse){lostResponse=false;status=503;data={message:'Response lost after commit'};}
        }
      } else if (name === 'sync_practice_room') {
        if(!room.member_ids.includes(user))fail('Room unavailable');
        else if ((user === 'c' && disconnectClient) || (['p','q'].includes(user) && disconnectSpectators)) {status = 503; data = {message:'Test connection interrupted'};}
        else {
          room.presence[user] = {connected: true, acknowledged_version: Math.max(room.presence[user]?.acknowledged_version ?? -1, args.input_acknowledged_version)};
          data = snapshot();
        }
      } else if (name === 'command_practice_room') {
        if (receipts.has(args.input_command_id)) data = receipts.get(args.input_command_id).left ? {left:true} : snapshot();
        else if (!args.input_action.startsWith('role_') && args.input_action !== 'leave' && user !== (['start','finish_item','advance','pass','rotate','rate'].includes(args.input_action) ? room.observer_id ?? room.therapist_id : room.host_id)) fail('Only the active guide or host for this action');
        else if (args.input_expected_version !== room.version) fail('Stale version');
        else if (['start','finish_item','advance','pass','rotate'].includes(args.input_action) && !ackAll()) fail('Waiting for devices');
        else {
          receipts.set(args.input_command_id,{action:args.input_action});
          if(args.input_action==='leave'){
            room.member_ids=room.member_ids.filter(id=>id!==user);
            const active=['therapist','client','observer'].find(role=>room[`${role}_id`]===user);
            if(active){room[`${active}_id`]=null;room.phase='lobby';room.completed_ids=[];room.skipped_ids=[];room.item_index=0;room.round_interrupted=true;}
            receipts.set(args.input_command_id,{left:true});
          } else if (args.input_action === 'start') room.phase = 'practicing';
          else if (args.input_action === 'finish_item' || args.input_action === 'advance' || args.input_action === 'pass') {
            if (args.input_action === 'finish_item' || args.input_action === 'pass' || room.phase === 'retry') {
              room[args.input_action === 'pass' ? 'skipped_ids' : 'completed_ids'].push(room.statement_ids[room.item_index]);
              if (room.item_index === 2) room.phase='round_debrief';
              else {room.item_index++;room.phase='practicing';}
            } else room.phase = {first_attempt:'client_feedback',client_feedback:'observer_feedback',observer_feedback:'retry'}[room.phase];
          } else if (args.input_action === 'rate') {room.saved_score = args.input_score; saves++;}
          else if (args.input_action === 'rotate') {
            if(!room.observer_id)[room.therapist_id,room.client_id]=[room.client_id,room.therapist_id];
            else {
              const queue=[room.therapist_id,room.client_id,room.observer_id,...room.member_ids.filter(id=>![room.therapist_id,room.client_id,room.observer_id].includes(id))];
              queue.unshift(queue.pop());[room.therapist_id,room.client_id,room.observer_id]=queue;
            }
            room.phase='lobby';room.item_index=0;room.round_number++;room.round_id='round-'+room.round_number;room.completed_ids=[];room.skipped_ids=[];room.saved_score=null;
          } else if (args.input_action === 'close') room.phase='closed';
          room.version++; data = args.input_action === 'leave' ? {left:true} : snapshot();
          if (lostResponse) {lostResponse = false; status = 503; data = {message: 'Response lost after commit'};}
        }
      } else fail('Unexpected operation');
      await route.fulfill({status, contentType:'application/json',body:JSON.stringify(data)});
    });
    await p.goto(url); await p.waitForFunction(() => document.querySelector('#account-button').textContent === 'Account');
  }
  const [o,t,c,watcher1,watcher2] = pages;
  const click = async (p,id) => {
    return id === 'room-sync' ? p.evaluate(() => document.getElementById('room-sync').click()) : p.locator(`#${id}`).click();
  };
  const enabled = async (p,id) => {await p.waitForFunction(id => {const e=document.getElementById(id);return e&&!e.hidden&&!e.disabled;},id,{timeout:15000});};
  const syncAll = async () => { for (let i=0;i<2;i++) for (const p of pages) {if(await p.locator('#room-session').isVisible())await click(p,'room-sync');} for(const p of pages)if(await p.locator('#room-session').isVisible() && !(disconnectClient && p===pages[2]))await p.waitForFunction(version=>Number(document.getElementById('room-panel').dataset.version)>=version,room.version,{timeout:15000}); };
  try {
    await click(o,'group-create');
    assert((await o.locator('#room-title').textContent()).includes('Create'),'Entry heading matches the create action');
    assert(await o.locator('#room-panel').evaluate(e=>parseFloat(getComputedStyle(e).paddingBottom)<48),'Room entry does not reserve space for a hidden action bar');
    await o.screenshot({path:'output/playwright/room-create-mobile.png',fullPage:true});
    await o.locator('#room-host-options summary').click();await o.locator('#room-host-role').selectOption('observer');await click(o,'room-create');
    await o.locator('#room-share-code').waitFor();
    assert(await o.locator('#room-details').evaluate(e=>!e.open),'Setup keeps the roster and administration folded away');
    assert(await o.locator('#room-invite').isVisible(),'Setup keeps invitation controls visible');
    assert(await o.locator('#room-next').isDisabled(),'Cannot start with missing members');
    assert(await o.locator('#app-title').isVisible(),'Group remains in the normal app shell');
    assert(await o.locator('#room-panel').getAttribute('role') !== 'dialog','Room is an ordinary app panel');
    for (const [p,role] of [[t,'therapist'],[c,'client'],[watcher1,'passive'],[watcher2,'passive']]) {
      await click(p,'group-join'); await p.locator('#room-code').fill(room.code);
      await p.locator('#room-join-options summary').click(); await p.locator('#room-role').selectOption(role); await click(p,'room-join');
      await p.locator('#room-share-code').waitFor();
    }
    assert(room.phase==='choosing'&&!room.skill_id,'Create and join before selecting practice');
    assert((await t.locator('#room-content').textContent()).includes('host is choosing'),'Members see that the host is choosing');
    await syncAll();await o.locator('#room-copy').focus();await syncAll();
    assert(await o.evaluate(()=>document.activeElement.id==='room-copy'),'Setup polling preserves focus on invite controls');
    await o.screenshot({path:'output/playwright/room-choosing-mobile.png',fullPage:true});
    await click(o,'room-choose');assert(await o.locator('#group-selection-context').isVisible(),'Library identifies selection on behalf of group');
    await o.locator('[data-skill-id="empathic-understanding"]').click();await o.locator('[data-case-id="case-sara"]').click();
    assert(await o.locator('#practice-format').isHidden(),'Host selection does not offer a conflicting local practice format');
    lostResponse=true;await click(o,'start-practice');await o.locator('#room-retry').waitFor();await enabled(o,'room-retry');await click(o,'room-retry');
    assert(room.phase==='lobby'&&room.member_ids.length===5,'Host selection keeps the room roster');
    assert(room.catalog.length===12 && ['11','12'].every(number=>room.catalog.some(item=>
      item.id===`dp_empathic-understanding_case-sara_${number}`)), 'Rooms receive all twelve source items, including the additions');
    await syncAll();
    for(const p of pages){
      assert(await p.locator('#room-header').isHidden(),'Preparation omits the duplicate group heading and library shortcut');
      assert(await p.locator('#room-details').evaluate(e=>!e.open),'Preparation folds away room administration');
      assert(await p.locator('#room-content h4').count()===(p===c?1:0),'Only the client has the opening voice heading');
      assert(await p.locator('.room-preparation p').count()===(p===c?2:1),'Preparation retains the opening voice or the role’s skill focus');
      await p.setViewportSize({width:320,height:700});
      assert(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'Preparation has no 320px overflow');
      if(p===c)await p.screenshot({path:'output/playwright/room-client-background-en-320.png',fullPage:true});
      await p.setViewportSize({width:390,height:844});
    }
    const roomTheme = await o.locator('#room-panel').evaluate(e=>e.style.getPropertyValue('--card-accent'));
    const sharedTheme = await o.evaluate(()=>{
      // Inspect the existing library case palette without changing room state.
      const button=document.querySelector('[data-case-id="case-sara"]');
      return button?.style.getPropertyValue('--card-accent');
    });
    assert(roomTheme && roomTheme===sharedTheme, 'Room colours match the skill and case palette from the library');
    assert(await c.locator('.room-preparation').evaluate(e=>getComputedStyle(e).borderLeftStyle)==='solid', 'Room preparation uses the case-card surface');
    assert((await c.locator('.room-preparation .case-role-item').nth(2).textContent()).trim().length>40,'Client retains delivery guidance in the optional background');
    assert((await c.locator('.room-preparation').textContent()).includes("Hi, I'm Sara"),'Client sees the full client voice before the round');
    assert(await c.locator('.room-client-preparation .case-role-item').count()===4,'Client sees schema, core pain, style and listening cues');
    assert((await c.locator('.room-client-preparation').textContent()).includes('If I am not perfect or needed'),'Client sees the case formulation');
    for(const p of [o,t,watcher1,watcher2])assert(await p.locator('.room-preparation .case-brief-section, .room-preparation .case-voice-section').count()===0,'Other roles retain focused preparation');
    assert(!(await t.locator('.room-preparation').textContent()).includes('Marketing associate'),'Therapist preparation contains the skill, not the case dossier');
    assert(await o.locator('#room-next').isVisible(),'Active observer has the round’s start control');
    assert((await watcher1.locator('#room-role-badge').textContent()).includes('Watching observer'),'Watching observer has a clear role badge');
    assert((await t.locator('#room-sync-status').textContent()).includes('observer starts'),'Other roles know who starts the round');
    await o.locator('#room-details summary').click();await syncAll();assert(await o.locator('#room-details').evaluate(e=>e.open),'Preparation polling preserves expanded room controls');await o.locator('#room-details summary').click();
    for(const [p,role] of [[o,'observer'],[t,'therapist'],[c,'client']])await p.screenshot({path:`output/playwright/room-preparation-${role}-mobile.png`,fullPage:true});
    assert((await watcher1.locator('#room-role-badge').textContent()).includes('Watching observer'),'Extra members get the watching role');
    assert(!(await watcher2.locator('#room-next').isVisible()),'Watching observers have no host controls');
    disconnectSpectators=true;room.presence.p.connected=false;room.presence.q.connected=false;
    await enabled(o,'room-next');await click(o,'room-next');
    disconnectSpectators=false;await syncAll();
    assert(!(await t.locator('#room-next').isVisible()),'Therapist has no observer controls');
    assert(!(await c.locator('#room-next').isVisible()),'Client has no observer controls');
    assert(await c.locator('.statement-panel .room-statement').count()===1, 'The client line uses the familiar statement card');
    assert(await o.locator('.room-workflow-number').first().evaluate(e=>getComputedStyle(e).backgroundColor) !== 'rgb(49, 95, 91)', 'Workflow accents follow the selected skill');
    assert(await c.locator('.room-statement').isVisible(),'Client sees the line to read');
    assert(await c.locator('#room-details').evaluate(e=>!e.open),'Room roster folds away during the exercise');
    const clientLine=await c.locator('.room-statement').boundingBox();assert(clientLine.y<650,'Client line is within the first phone screen');
    const hostAction=await o.locator('#room-next').boundingBox();assert(hostAction.y+hostAction.height<=844&&hostAction.height>=44,'Next action is reachable at the bottom of the phone');
    assert(await t.locator('.room-statement').count()===0,'Therapist listens without a prewritten line');
    assert(await t.locator('.room-example-text').isHidden(),'Example text is absent until deliberately requested for retry');
    await o.screenshot({path:'output/playwright/room-observer-workflow-mobile.png',fullPage:true});
    assert(await o.locator('.room-workflow li').count()===6 && await o.locator('#room-your-part').evaluate(e=>e.open),`Observer has an open six-step workflow graphic: ${await o.locator('#room-content').textContent()}`);
    assert((await o.locator('.room-workflow li').first().textContent()).includes('Client reads'),'Workflow starts with the client statement');
    assert((await o.locator('.room-workflow li').last().textContent()).includes('After every 3 items'),'Rating is clearly after the round');
    for (const p of pages) {
      assert(await p.locator('#room-header').isHidden(),'Active screens omit the group heading and library shortcut');
      assert(await p.locator('#room-content > h4').count()===0,'No redundant practice-item heading');
      assert(await p.locator('#room-your-part .room-role-step').count()===([watcher1,watcher2].includes(p)?2:3),'Role card has concise, labelled actions');
      assert(await p.locator('#room-your-part summary small').isVisible(),'Role card has a useful collapsed preview');
      await p.setViewportSize({width:320,height:700});
      assert(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'Active screen has no 320px overflow');
      if(p===o){
        const lastStep=await p.locator('.room-workflow li').last().boundingBox(), action=await p.locator('#room-actions').boundingBox();
        assert(lastStep.width>0&&action.y+action.height<=700,'Observer guide can be read with reachable phone controls');
      }
      await p.setViewportSize({width:390,height:844});
    }
    for (const p of [o,watcher1,watcher2]) {
      assert(await p.locator('.room-statement, #room-example').count()===0,'Observers have neither client lines nor retry examples');
    }
    assert((await c.locator('#room-your-part').textContent()).includes('“I felt…”'),'Client guidance helps give experiential feedback');
    assert((await t.locator('#room-your-part').textContent()).includes('adapt the feedback or pass'),'Therapist can adapt feedback or pass');
    assert((await o.locator('#room-your-part').textContent()).includes('Coach the skill, not the person'),'Observer guidance keeps coaching focused');
    for(const [p,role] of [[o,'observer'],[t,'therapist'],[c,'client']]){
      await p.locator('#room-your-part summary').focus();await p.locator('#room-your-part summary').press('Enter');
      if(!await p.locator('#room-your-part').evaluate(e=>e.open))await p.locator('#room-your-part summary').press('Enter');
      assert(await p.locator('#room-your-part').evaluate(e=>e.open),'Role guide opens using the keyboard');
      await p.setViewportSize({width:320,height:700});
      assert(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'Expanded role card has no 320px overflow');
      await p.screenshot({path:`output/playwright/room-your-part-${role}-320.png`,fullPage:true});
      await p.setViewportSize({width:390,height:844});
      await p.screenshot({path:`output/playwright/room-your-part-${role}-mobile.png`,fullPage:true});
      if(p!==t){await p.locator('#room-your-part summary').press('Enter');assert(await p.locator('#room-your-part').evaluate(e=>!e.open),'Role card closes using the keyboard');}
      await p.evaluate(()=>document.getElementById('room-panel').scrollIntoView({block:'start'}));
    }
    assert(await c.locator('#room-example').count()===0,'Client never gets example controls');
    assert(await t.locator('#room-your-part #room-example').count()===0,'Example is separate from optional instructions');
    assert(await t.locator('#room-content > #room-example').count()===1,'Example is directly available during the attempt');
    await click(t,'room-example-reveal');
    assert(await t.locator('.room-example-text').isVisible(),'Therapist may deliberately open an example for the spoken retry');
    assert(await t.locator('#room-example-reveal').getAttribute('aria-expanded')==='true','Example reveal communicates expanded state');
    await t.setViewportSize({width:320,height:700});
    assert(await t.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'Inline retry example has no 320px overflow');
    await t.locator('#room-example').screenshot({path:'output/playwright/room-retry-example-en-320.png'});
    await t.locator('#room-example-reveal').press('Enter');
    assert(await t.locator('.room-example-text').isHidden(),'Therapist can hide the example using the keyboard');
    await t.locator('#room-example-reveal').press('Enter');
    assert(await t.locator('.room-example-text').isVisible(),'Therapist can reopen the example');
    await t.setViewportSize({width:390,height:844});
    await t.locator('#room-your-part').screenshot({path:'output/playwright/room-retry-card-mobile.png'});
    await o.screenshot({path:'output/playwright/room-observer-workflow-mobile.png',fullPage:true});
    await t.screenshot({path:'output/playwright/room-therapist-mobile.png',fullPage:true});
    await c.screenshot({path:'output/playwright/room-client-mobile.png',fullPage:true});
    disconnectClient=true;await enabled(o,'room-next');lostResponse=true;await click(o,'room-next');
    await o.locator('#room-retry').waitFor();const committedVersion=room.version;
    assert(room.item_index===1&&room.completed_ids.length===1&&room.phase==='practicing','One observer finish resolves the whole item');
    await o.reload();await o.waitForFunction(()=>document.querySelector('#account-button').textContent==='Account');
    await click(o,'group-resume');await enabled(o,'room-retry');await click(o,'room-retry');
    assert(room.version===committedVersion&&room.completed_ids.length===1,'Reload/retry must not finish twice');
    await syncAll();
    assert(await o.locator('#room-next').isDisabled(),'Next item cannot finish until disconnected client catches up');
    await c.waitForFunction(()=>document.getElementById('room-sync-status').textContent.includes('Connection interrupted'));
    disconnectClient=false;await syncAll();await enabled(o,'room-next');
    assert(await t.locator('.room-example-text').isHidden(),'New item clears the previous example');
    assert(await t.locator('#room-your-part').evaluate(e=>e.open),'An expanded role card stays open on the next item');
    for (let i=0;i<2;i++) {await enabled(o,'room-pass');o.once('dialog',d=>d.accept());await click(o,'room-pass');await syncAll();}
    assert(room.phase==='round_debrief'&&room.completed_ids.length===1&&room.skipped_ids.length===2,'Passed items excluded');
    assert(await o.locator('#room-header').isHidden(),'Reflection keeps the focused room layout');
    assert(await o.locator('#room-save').isVisible()&&await o.locator('#room-save').isDisabled(),'Saving is the primary rating action, disabled until a score is selected');
    assert((await o.locator('#room-rotate').textContent()).includes('without rating'),'Skipping a rating is explicit');
    assert((await o.locator('#room-score option[value="4"]').textContent()).includes('Well demonstrated'),'Rating choices explain the scale');
    assert(await t.locator('#room-save').isHidden()&&await t.locator('#room-rotate').isHidden(),'Other roles have no rater controls');
    await o.setViewportSize({width:320,height:700});
    const saveAction=await o.locator('#room-save').boundingBox();assert(saveAction.y+saveAction.height<=700&&saveAction.height>=44,'Saving is reachable at the bottom of a 320px phone');
    const scoreField=await o.locator('#room-score').boundingBox(), ratingActions=await o.locator('#room-actions').boundingBox();assert(scoreField.y+scoreField.height<=ratingActions.y,'The rating field fits above the fixed actions at 320px');
    assert(await o.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'Rating has no narrow-screen overflow');
    await o.screenshot({path:'output/playwright/room-rating-320.png',fullPage:true});await o.setViewportSize({width:390,height:844});
    await o.screenshot({path:'output/playwright/room-rating-mobile.png',fullPage:true});await t.screenshot({path:'output/playwright/room-reflection-mobile.png',fullPage:true});
    await o.locator('#room-score').selectOption('4'); await click(o,'room-save'); await syncAll();
    assert(saves===1&&room.saved_score===4,'One observer rating saved');
    assert((await t.locator('#room-saved').textContent()).includes('4/5'),'Therapist sees confirmation');
    await o.waitForFunction(()=>document.getElementById('room-save').hidden);
    assert((await o.locator('#room-rotate').textContent()).includes('Next round'),'Next round becomes primary after saving');
    await o.locator('#room-score').selectOption('5');assert((await o.locator('#room-save').textContent()).includes('Update'),'Editing a saved score offers an explicit update');
    assert((await o.locator('#room-rotate').textContent()).includes('without changes'),'Continuing with an edited rating clearly leaves the saved score unchanged');
    await click(o,'room-save');await syncAll();assert(saves===2&&room.saved_score===5,'A saved rating can still be updated');
    await enabled(o,'room-rotate'); await click(o,'room-rotate'); await syncAll();
    assert(await o.locator('#room-next').isHidden(),'Host does not keep exercise controls after observer role rotates');
    assert(await c.locator('#room-next').isVisible(),'The new observer receives exercise controls');
    assert((await watcher2.locator('#room-role-badge').textContent()).includes('Your role: Therapist'),'A watching observer becomes therapist');
    assert(await watcher2.locator('.room-statement').count()===0,'A new therapist receives only their role screen');
    await o.locator('#room-details summary').click();await click(o,'room-end');assert(await o.locator('#room-exit-overlay').isVisible(),'Ending is confirmed inside the app');await click(o,'room-exit-cancel');assert(room.phase==='lobby','Cancel keeps room open');await click(o,'room-end');await click(o,'room-exit-confirm');await o.waitForFunction(()=>document.getElementById('room-panel').dataset.phase==='closed');await syncAll();
    assert((await t.locator('#room-content').textContent()).includes('has ended'),'End propagates to all');
    assert(await o.locator('#room-role-badge').isHidden(),'Ended rooms have no empty role pill');
    assert((await o.locator('#room-done').textContent()).includes('home'),'Ended rooms have a clear return action');
    await o.screenshot({path:'output/playwright/room-ended-mobile.png',fullPage:true});
    for (const p of pages) {
      await p.setViewportSize({width:320,height:700});
      assert(await p.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'No 320px overflow');
      await click(p,'room-done');
    }
    // Self-awareness reader prompts retain the disclosure boundary, in Norwegian.
    await o.locator('#home-language').click();await o.locator('[data-language-id="no"]').click();
    await o.locator('[name="practice-mode"][value="group"]').check();await o.locator('#home-library').click();
    await o.locator('[data-skill-id="therapist-self-awareness"]').click(); await o.locator('[data-case-id="case-sara"]').click();
    await click(o,'start-practice'); await o.locator('#room-host-options summary').click();await o.locator('#room-host-role').selectOption('observer'); await click(o,'room-create');
    for (const [p,role] of [[t,'therapist'],[c,'client'],[watcher1,'passive'],[watcher2,'passive']]) {
      await p.evaluate(() => {for(const key of Object.keys(localStorage)) if(key.startsWith('dp_shared_room:')) localStorage.removeItem(key);});
      await click(p,'group-join'); await p.locator('#room-code').fill(room.code);
      await p.locator('#room-join-options summary').click(); await p.locator('#room-role').selectOption(role); await click(p,'room-join');
    }
    await syncAll();
    assert((await t.locator('.room-preparation').textContent()).includes('Merk din reaksjon'),'Self-awareness preparation asks for noticing');
    assert((await c.locator('.room-preparation').textContent()).includes('respekter det som holdes privat'),'Reader preparation preserves privacy');
    assert((await c.locator('.room-client-preparation').textContent()).includes('Rollebakgrunn')&&(await c.locator('.room-client-preparation').textContent()).includes('Klientens stemme'),'Reader sees localized case background and voice');
    await c.screenshot({path:'output/playwright/room-client-background-no-320.png',fullPage:true});
    await o.screenshot({path:'output/playwright/room-preparation-observer-no-320.png',fullPage:true});
    await enabled(o,'room-next'); await click(o,'room-next'); await syncAll();
    assert((await c.locator('#room-role-badge').textContent()).includes('Oppleser'),'Self-awareness assigns reader role');
    assert((await t.locator('#room-content').textContent()).includes('kropp, følelser og impulser'),'Therapist is guided to notice their reaction');
    assert((await c.locator('#room-your-part').textContent()).includes('respekter det som holdes privat'),'Reader guidance retains privacy');
    assert((await c.locator('#room-your-part').textContent()).includes('gå så ut av rollen'),'Reader steps out of role before reflecting');
    assert((await o.locator('#room-your-part').textContent()).includes('uten tolkning eller press'),'Self-awareness coaching avoids interpretation or disclosure pressure');
    for(const [p,role] of [[o,'observer'],[t,'therapist'],[c,'reader']]){
      await p.locator('#room-your-part summary').click();
      if(p===t){
        await click(p,'room-example-reveal');
        assert((await p.locator('#room-example-reveal').textContent()).includes('Skjul'),'Norwegian example control has a hide label');
        await p.locator('#room-your-part').screenshot({path:'output/playwright/room-retry-card-no-320.png'});
        await click(p,'room-example-reveal');
      }
      await p.screenshot({path:`output/playwright/room-your-part-${role}-no-320.png`,fullPage:true});
      await p.locator('#room-your-part summary').click();
      await p.evaluate(()=>document.getElementById('room-panel').scrollIntoView({block:'start'}));
    }
    const lastAwarenessStep=await o.locator('.room-workflow li').last().boundingBox(), awarenessActions=await o.locator('#room-actions').boundingBox();
    assert(lastAwarenessStep.width>0 && awarenessActions.y+awarenessActions.height<=700,'Norwegian guide is readable with reachable controls');
    await o.screenshot({path:'output/playwright/room-observer-workflow-no-320.png',fullPage:true});
    // A committed leave can be recovered after membership/SELECT access is removed.
    await watcher1.locator('#room-details summary').click();await click(watcher1,'room-leave');
    await click(watcher1,'room-exit-cancel');assert(room.member_ids.includes('p'),'Cancelling leave keeps membership');
    await click(watcher1,'room-leave');lostResponse=true;await click(watcher1,'room-exit-confirm');
    await watcher1.locator('#room-retry').waitFor();const leavingVersion=room.version;
    assert(!room.member_ids.includes('p')&&room.phase==='practicing','Watching departure keeps the active round');
    await watcher1.reload();await watcher1.waitForFunction(()=>document.querySelector('#account-button').textContent==='Account');
    await click(watcher1,'group-resume');await watcher1.waitForFunction(()=>!localStorage.getItem('dp_shared_room:p')&&document.body.dataset.section!=='room');
    assert(await watcher1.locator('#group-resume').isHidden(),'Leave recovery clears the saved room');
    assert(room.version===leavingVersion,'Reload replays leave without changing the round twice');
    await syncAll();
    await o.locator('#room-details summary').click();await click(o,'room-end');await click(o,'room-exit-confirm');await o.waitForFunction(()=>document.getElementById('room-panel').dataset.phase==='closed');await syncAll();
    for(const p of pages)if(await p.locator('#room-session').isVisible())await click(p,'room-done');
    // Pairs omit observer coaching, keep feedback per item and rate once at the end.
    await click(o,'group-create');await o.locator('#room-host-options summary').click();await o.locator('#room-host-role').selectOption('therapist');await click(o,'room-create');
    await t.evaluate(()=>{for(const key of Object.keys(localStorage))if(key.startsWith('dp_shared_room:'))localStorage.removeItem(key);});
    await click(t,'group-join');await t.locator('#room-code').fill(room.code);await click(t,'room-join');
    await click(o,'room-choose');await o.locator('[data-skill-id="empathic-understanding"]').click();await o.locator('[data-case-id="case-sara"]').click();await click(o,'start-practice');
    await syncAll();
    assert(await o.locator('#room-next').isVisible(),'Pair therapist has the start control');
    await t.waitForFunction(()=>document.getElementById('room-sync-status').textContent.includes('Terapeuten starter'));
    assert((await t.locator('#room-sync-status').textContent()).includes('Terapeuten starter'),'Pair client knows the therapist starts');
    await enabled(o,'room-next');await click(o,'room-next');await syncAll();
    assert(room.observer_id===null&&room.therapist_id==='o'&&room.client_id==='t','Pair roles are therapist and client');
    assert(await o.locator('.room-workflow li').count()===5&&await o.locator('#room-your-part').evaluate(e=>e.open),'Pair therapist has an open five-step workflow');
    assert(await o.locator('#room-your-part .room-role-step').count()===3&&(await o.locator('#room-your-part .room-workflow').textContent()).includes('Terapeuten vurderer seg selv'),'Pair therapist guide combines concise role steps and self-assessment workflow');
    assert(!(await o.locator('.room-workflow').textContent()).includes('Observatøren'),'Pair workflow omits observer coaching');
    assert(await t.locator('.room-statement').isVisible()&&await t.locator('#room-next').isHidden(),'Pair client reads; therapist controls completion');
    for(let i=0;i<3;i++){
      assert(await o.locator('#room-rating-form').count()===0,'There is no scoring interruption between items');
      await enabled(o,'room-next');await click(o,'room-next');await syncAll();
    }
    assert((await o.locator('#room-rating-form').textContent()).includes('egenvurdering'),'Pair ends with therapist self-assessment');
    const pairScoreField=await o.locator('#room-score').boundingBox(), pairRatingActions=await o.locator('#room-actions').boundingBox();assert(pairScoreField.y+pairScoreField.height<=pairRatingActions.y,'Norwegian pair rating fits above the phone actions');
    await o.screenshot({path:'output/playwright/room-pair-rating-no-320.png',fullPage:true});
    await o.locator('#room-score').selectOption('4');await click(o,'room-save');await syncAll();
    assert(saves===3,'Pair saves one rating for three completed items');
    await enabled(o,'room-rotate');await click(o,'room-rotate');await syncAll();
    assert(room.therapist_id==='t'&&await t.locator('#room-next').isVisible(),'Pair rotation transfers the guide controls');
    await enabled(t,'room-next');await click(t,'room-next');await syncAll();
    await enabled(t,'room-next');await click(t,'room-next');await syncAll();
    for(let i=0;i<2;i++){await enabled(t,'room-pass');t.once('dialog',d=>d.accept());await click(t,'room-pass');await syncAll();}
    assert((await t.locator('#room-rotate').textContent()).includes('uten vurdering'),'Pair can explicitly continue without a rating');
    await enabled(t,'room-rotate');await click(t,'room-rotate');await syncAll();assert(saves===3&&room.phase==='lobby','Skipping preserves previous ratings and does not invent a score');
    await enabled(o,'room-next');await click(o,'room-next');await syncAll();
    for(let i=0;i<3;i++){await enabled(o,'room-pass');o.once('dialog',d=>d.accept());await click(o,'room-pass');await syncAll();}
    assert(await o.locator('#room-save').isHidden()&&await o.locator('#room-rating-form').count()===0,'All-passed rounds have no rating form or save action');
    assert(!(await o.locator('#room-rotate').textContent()).includes('uten vurdering'),'All-passed rounds offer the normal next round action');
    await o.screenshot({path:'output/playwright/room-all-passed-no-320.png',fullPage:true});
    await o.locator('#room-details summary').click();await click(o,'room-end');await click(o,'room-exit-confirm');await o.waitForFunction(()=>document.getElementById('room-panel').dataset.phase==='closed');await syncAll();
    // A setup cancelled before its configuration is ready cannot create a room.
    await click(o,'room-done');
    await o.evaluate(async () => {
      document.getElementById('room-panel').remove();document.getElementById('room-exit-overlay').remove();
      const {createPracticeRoomView}=await import('/deliberatepractice/src/js/practiceRoom.js');
      const {createDialogManager}=await import('/deliberatepractice/src/js/dialogs.js');
      const view=createPracticeRoomView({dialogs:createDialogManager(),getUser:()=>({id:'o'}),
        getLanguage:()=> 'en',localizeSkill:()=>null,getStrings:()=>({}),signIn:()=>{}});
      window.testRoomView=view;await view.show({resume:false,createConfig:()=>new Promise(resolve=>{window.releaseRoomSetup=resolve;})});
    });
    const beforeCanceledCreation=creations;
    await click(o,'room-create');await o.evaluate(()=>window.testRoomView.goHome());
    await o.evaluate(config=>window.releaseRoomSetup(config),{languageId:room.language_id,
      skillId:room.skill_id,caseId:room.case_id,difficulty:room.difficulty,
      contentRevision:room.content_revision,statements:room.catalog});
    await o.waitForTimeout(200);
    assert(creations===beforeCanceledCreation,'Cancelled room setup must not create a room later');
    assert(errors.length===0,errors.join('\n'));
    return {passed:true,participants:5,checks:['entry headings and hidden toolbar spacing','invitation focus during polling','rating save/update/explicit skip','narrow-screen rating visibility','pair guide transfer and all-passed rounds','clear ended-room navigation','minimal role-specific preparation','preparation controls survive polling','pair preparation and readiness messaging','empty room creation and join','host chooses practice in library','six-step workflow including opening and round rating','concise role screens without redundant navigation','pair five-step workflow and round self-assessment','controls follow rotated observer','uncertain preparation retry','phone exercise visibility and bottom action','in-app end confirmation','leave cancellation and lost-response reload','watching observers','offline spectators do not stall','watching observer rotates into therapist','role screens','acknowledgement barrier','lost response and reload','offline recovery','rating and passes','rotation','320px','Norwegian self-awareness']};
  } finally {for(const context of contexts)await context.close();}
}

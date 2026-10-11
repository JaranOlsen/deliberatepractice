// Playwright CLI; real SDK authentication flow with fake OTP and isolated SQL RPCs.
// Start npm run test:rooms:db -- --serve. No production writes or emails.
async page=>{
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw Error('Local checks only');
 const {o:uid}=await(await page.request.get('http://127.0.0.1:5199/users')).json();
 const expires=Math.floor(Date.now()/1000)+3600,user={id:uid,email:'entry@example.invalid',email_confirmed_at:'2026-10-11T00:00Z'};
 const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:uid,exp:expires,role:'authenticated'})).toString('base64url')+'.fixture';
 const context=await page.context().browser().newContext({viewport:{width:320,height:844}}),errors=[],creationIds=[],roleCommands=[];
 const assert=(value,message)=>{if(!value)throw Error(message);};let loseCreate=true,loseRole=true;
 try{
  await context.addInitScript(()=>{localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:'en',practiceMode:'group',groupUiVersion:2}));});
  await context.route('https://*.supabase.co/**',async route=>{
   const name=new URL(route.request().url()).pathname.split('/').at(-1);
   if(['create_practice_room','sync_practice_room','command_practice_room'].includes(name)){
    const args=route.request().postDataJSON();if(name==='create_practice_room')creationIds.push(args.input_room_id);
    if(name==='command_practice_room')roleCommands.push(args.input_command_id);
    const response=await page.request.post('http://127.0.0.1:5199/rpc',{data:{user:uid,name,args}}),data=await response.json();
    if(response.ok()&&((name==='create_practice_room'&&loseCreate)||(name==='command_practice_room'&&loseRole))){if(name==='create_practice_room')loseCreate=false;else loseRole=false;return route.fulfill({status:503,json:{message:'Response lost after commit'}});}
    return route.fulfill({status:response.status(),json:data});
   }
   const json=name==='otp'?{}:name==='verify'?{access_token:token,refresh_token:'fixture',expires_in:3600,expires_at:expires,token_type:'bearer',user}:name==='get_public_app_config'?{email_mode:'code',billing_mode:'off'}:name==='get_ai_access'?false:name==='get_account_access'?{full_content:true,ai_access:false,ai_admin:false,subscription:null}:name==='ensure_user_profile'?[{id:uid,display_name:'Test host'}]:name==='list_practice_targets'?[{target_user_id:uid,target_kind:'self',display_name:'Test host'}]:name==='user'?user:[];
   return route.fulfill({json});
  });
  const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
  await p.locator('#group-create').click();await p.locator('#auth-email').waitFor();
  assert(await p.locator('#room-panel').isHidden(),'Signed-out Create goes straight to sign-in');
  await p.locator('#auth-email').fill(user.email);await p.locator('#auth-submit').click();await p.locator('#auth-code').waitFor();await p.locator('#auth-code').fill('12345678');await p.locator('#auth-verify').click();
  await p.locator('#room-create:not(:disabled)').waitFor();assert((await p.locator('#room-status').textContent()).includes('Response lost'),'Ambiguous creation failure exposes a retry');
  assert(await p.locator('#room-host-options').count()===0,'Creation has no optional-role screen');
  await p.locator('#room-create').click();await p.locator('#room-share-code').waitFor();
  assert(creationIds.length===2&&new Set(creationIds).size===1,'Creation retry reuses the same room UUID');
  assert(await p.locator('#room-setup').isHidden()&&await p.locator('#room-change-role').inputValue()==='therapist','Created room opens with role selection in the room');
  await p.locator('#room-change-role:not(:disabled)').waitFor();await p.locator('#room-change-role').selectOption('observer');await p.locator('#room-retry').waitFor();
  assert(await p.locator('#room-change-role').isDisabled(),'An uncertain role change cannot be replaced by a second claim');
  await p.locator('#room-retry').click();await p.locator('#room-change-role:not(:disabled)').waitFor();
  assert(await p.locator('#room-change-role').inputValue()==='observer'&&roleCommands.length===2&&new Set(roleCommands).size===1,'Role retry confirms one committed selection');
  assert(await p.locator('#room-change-role-submit').count()===0,'Role changes need no submit button');
  await p.evaluate(()=>window.scrollTo(0,0));await p.screenshot({path:'output/playwright/streamline-room-entry-320.png',fullPage:true});
  const before=creationIds.length;
  await p.locator('#account-button').click();await p.locator('#auth-signout').click();await p.locator('#auth-email').waitFor();await p.locator('#close-account').click();
  await p.locator('#group-create').click();await p.locator('#auth-email').waitFor();await p.locator('#close-account').click();
  await p.locator('#account-button').click();await p.locator('#auth-email').fill(user.email);await p.locator('#auth-submit').click();await p.locator('#auth-code').waitFor();await p.locator('#auth-code').fill('12345678');await p.locator('#auth-verify').click();await p.locator('#auth-signed-in').waitFor();
  assert(creationIds.length===before&&await p.locator('#room-panel').isHidden(),'Cancelling Create sign-in prevents a later ordinary sign-in from creating a room');await p.locator('#close-account').click();
  await p.evaluate(async uid=>{
   document.getElementById('room-panel').remove();document.getElementById('room-exit-overlay').remove();
   const {createPracticeRoomView}=await import('./src/js/practiceRoom.js'),{createDialogManager}=await import('./src/js/dialogs.js');
   const view=createPracticeRoomView({dialogs:createDialogManager(),getUser:()=>({id:uid}),getLanguage:()=> 'en',localizeSkill:()=>null,getStrings:()=>({}),signIn:()=>{}});
   const pending=view.show({resume:false,createConfig:()=>new Promise(resolve=>{window.releaseRoomEntry=resolve;})});
   view.goHome();window.releaseRoomEntry({languageId:'en'});await pending;
  },uid);
  assert(creationIds.length===before,'Leaving during preparation cannot create a late room');assert(!errors.length,errors.join('; '));
  return{passed:true,signInThenCreate:true,creationReplay:true,immediateRole:true,roleReplay:true,cancelPending:true,cancelSignIn:true,productionWrites:0,emailsSent:0};
 }finally{await context.close();}
}

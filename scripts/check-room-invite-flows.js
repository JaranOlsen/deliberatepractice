// Playwright CLI run-code. Real app/Supabase SDK, intercepted OTP; no email is sent.
async (page) => {
  const address=new URL(page.url());address.search='';address.hash='';const url=address.href;
  if(!['127.0.0.1','localhost'].includes(new URL(url).hostname))throw new Error('Use local preview');
  const contexts=[],errors=[];let callback=null,otpRequests=0,managementRequest=null;
  const assert=(ok,message)=>{if(!ok)throw new Error(message);};
  const fresh=async()=>{
    const context=await page.context().browser().newContext({viewport:{width:320,height:844}});contexts.push(context);
    const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
    await context.route('**/*',async route=>{
      const request=route.request(),address=new URL(request.url());
      if(!address.hostname.endsWith('.supabase.co'))return route.continue();
      if(address.pathname==='/auth/v1/otp'&&request.method()==='POST'){
        otpRequests++;callback=address.searchParams.get('redirect_to');
        assert(JSON.parse(request.postData()).email==='participant@example.invalid','The real SDK normalizes the test address');
        return route.fulfill({status:200,contentType:'application/json',body:'{}'});
      }
      if(address.pathname==='/rest/v1/rpc/manage_practice_room'&&request.method()==='POST'){
        managementRequest=JSON.parse(request.postData());
        return route.fulfill({status:200,contentType:'application/json',body:'{"phase":"lobby","version":5}'});
      }
      throw new Error('Unexpected external backend request: '+address.pathname);
    });
    return p;
  };
  try {
    const original=await fresh();await original.goto(url);
    await original.waitForFunction(()=>document.getElementById('account-button').textContent==='Sign in');
    await original.locator('#group-join').click();await original.locator('#room-code').fill('NOTREAL');await original.locator('#room-join').click();
    assert((await original.locator('#room-status').textContent()).includes('twelve-character'),'Invalid codes are explained before sign-in');
    assert(await original.locator('#account-overlay').isHidden(),'Invalid invitation does not open sign-in');
    await original.locator('#room-code').fill('abcd 1234 ef56');await original.locator('#room-join').click();
    await original.locator('#auth-email').fill('Participant@example.invalid');await original.locator('#auth-submit').click();
    await original.waitForFunction(()=>document.getElementById('auth-status').textContent.includes('Check your email'));
    assert(otpRequests===1&&callback===url+'?room=ABCD1234EF56','Actual SDK OTP request includes the invitation callback');
    assert(new URL(original.url()).searchParams.get('room')==='ABCD1234EF56','Typed codes are also retained in the browser URL');
    // Exercise the actual RPC allowlist/SDK too; the group integration substitutes authentication.
    const management=await original.evaluate(async()=>{
      const backend=await import('./src/js/backend.js');
      return backend.practiceRoomRpc('manage_practice_room',{input_room_id:'11111111-1111-4111-8111-111111111111',
        input_command_id:'22222222-2222-4222-8222-222222222222',input_expected_version:4,input_action:'ready',
        input_config:{preparationId:'33333333-3333-4333-8333-333333333333'}});
    });
    assert(management.version===5&&managementRequest?.input_action==='ready'&&managementRequest?.input_config.preparationId==='33333333-3333-4333-8333-333333333333','Actual backend permits and sends the management RPC configuration');
    const other=await fresh();await other.goto(callback);
    await other.locator('#room-code').waitFor();
    assert(await other.locator('#room-code').inputValue()==='ABCD1234EF56','A fresh browser restores the code without the original storage');
    assert(await other.locator('#room-entry').isVisible()&&await other.locator('#room-session').isHidden(),'An invitation opens Join, not an unrelated previous room');
    await other.locator('#room-code').fill('1111 2222 3333');await other.locator('#room-join').click();
    await other.locator('#auth-email').fill('participant@example.invalid');await other.locator('#auth-submit').click();
    await other.waitForFunction(()=>document.getElementById('auth-status').textContent.includes('Check your email'));
    assert(callback===url+'?room=111122223333','Editing a code replaces earlier callback context');
    assert(await other.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Invitation and sign-in fit 320px');
    await other.locator('#close-account').click();await other.locator('#group-create').click();
    assert(!new URL(other.url()).searchParams.has('room')&&await other.evaluate(()=>localStorage.getItem('dp_group_invite'))===null,'Choosing Create clears the abandoned Join invitation');
    await other.locator('#room-create').click();await other.locator('#auth-email').fill('participant@example.invalid');await other.locator('#auth-submit').click();
    await other.waitForFunction(()=>document.getElementById('auth-status').textContent.includes('Check your email'));
    assert(callback===url,'Sign-in for Create does not take the user back to an abandoned invitation');
    const cancel=await fresh();await cancel.goto(url+'?room=ABCD1234EF56');await cancel.locator('#room-code').waitFor();await cancel.locator('#join-shared-room').click();
    assert(!new URL(cancel.url()).searchParams.has('room')&&await cancel.evaluate(()=>localStorage.getItem('dp_group_invite'))===null,'Explicit cancellation clears invitation context');
    assert(errors.length===0,'No browser errors: '+errors.join('; '));
    return {passed:true,emailsSent:0,checks:['actual Supabase SDK OTP request','actual management RPC allowlist/SDK','typed code validation','room context in callback','fresh-browser invitation','edited invitation replaces previous code','Create clears abandoned invitation','explicit cancellation','320px sign-in']};
  } finally {for(const context of contexts)await context.close();}
}

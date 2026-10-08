// Isolated phone auth/billing UI checks. No real mail or payments.
async page=>{
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw Error('Local checks only');
 const contexts=[],checks=[],errors=[];let mails=0,stripeBlocked=0;
 const assert=(value,message)=>{if(!value)throw Error(message);};
 async function fixture(language,width,expired=false){
  const context=await page.context().browser().newContext({viewport:{width,height:844}});contexts.push(context);
  await context.addInitScript(({language,expired})=>{
   if(!expired)localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));
   localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'individual',groupUiVersion:2}));
   localStorage.setItem('dp_access_level',JSON.stringify({accessLevel:'all',expiresAt:null}));
  },{language,expired});
  const uid='75000000-0000-4000-8000-000000000001',expires=Math.floor(Date.now()/1000)+3600;
  const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:uid,exp:expires,role:'authenticated'})).toString('base64url')+'.fixture';
  const user={id:uid,email:'review@example.invalid',email_confirmed_at:'2026-10-08T00:00:00Z'};
  await context.route('https://*.supabase.co/**',route=>{
   const path=new URL(route.request().url()).pathname.split('/').at(-1);let json;
   if(path==='otp'){mails++;json={};}
   else if(path==='verify'){
    if(route.request().postDataJSON().token!=='123456')return route.fulfill({status:403,json:{code:'otp_expired',msg:'Private provider diagnostic'}});
    json={access_token:token,refresh_token:'isolated-fixture',expires_in:3600,expires_at:expires,token_type:'bearer',user};
   }else json=path==='get_public_app_config'?{email_mode:'code',billing_mode:'live'}:path==='get_ai_access'?false:path==='get_account_access'?{full_content:false,ai_access:false,subscription:null}:
    path==='ensure_user_profile'?[{id:uid,display_name:'Fixture'}]:path==='list_practice_targets'?[{target_user_id:uid,target_kind:'self',display_name:'Fixture'}]:path==='user'?user:[];
   return route.fulfill({json});
  });
  await context.route('https://*.stripe.com/**',route=>{stripeBlocked++;return route.abort();});
  const p=await context.newPage(),checkout=[];p.on('pageerror',e=>errors.push(e.message));
  await p.route('**/api/account-services/**',route=>{
   const action=new URL(route.request().url()).pathname.split('/').at(-1);
   if(action==='status')return route.fulfill({json:{protocol:'practice-billing-v1',currency:'nok',prices:{month:9900,year:79900},mode:'live',portalAvailable:true}});
   if(action==='checkout'){checkout.push(route.request().postDataJSON());return route.fulfill({json:{protocol:'practice-billing-v1',url:'https://checkout.stripe.com/c/pay/cs_test_fixture',test:true}});}
   return route.abort();
  });
  await p.goto(expired?url+'#error=access_denied&error_code=otp_expired&error_description=Private':url);
  return {p,context,checkout};
 }
 async function fits(p){for(const value of ['','200%']){
  await p.evaluate(value=>document.documentElement.style.fontSize=value,value);
  assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Account layout overflows phone');
  assert(await p.evaluate(()=>[...document.querySelectorAll('#account-modal button')].filter(e=>e.getClientRects().length).every(e=>e.getBoundingClientRect().height>=44)),'Account buttons need touch targets');
 }await p.evaluate(()=>document.documentElement.style.fontSize='');}
 try{
  for(const language of ['en','no'])for(const width of [320,390]){
   const {p,context,checkout}=await fixture(language,width);await p.locator('#account-button').click();await fits(p);
   assert(!await p.locator('#account-code-disclosure').getAttribute('open'),'License code should start collapsed');
   const positions=await p.evaluate(()=>({email:document.querySelector('#auth-email').getBoundingClientRect().top,code:document.querySelector('#account-code-disclosure').getBoundingClientRect().top}));
   assert(positions.email<positions.code,'Sign-in must precede access code');
   await p.locator('#auth-email').fill('review@example.invalid');await p.locator('#auth-submit').click();await p.locator('#auth-code').waitFor({state:'visible'});
   assert(await p.locator('#auth-code').evaluate(e=>document.activeElement===e),'Focus should move to the code');assert(await p.locator('#auth-resend').isDisabled(),'Resend needs cooldown');
   await p.locator('#auth-code').fill('111111');await p.locator('#auth-verify').click();await p.locator('#auth-signin-status:not([hidden])').waitFor();
   assert(!((await p.locator('#auth-signin-status').textContent()).includes('Private')),'Provider diagnostic must stay private');
   await p.evaluate(()=>{const clipboard=new DataTransfer();clipboard.setData('text/plain','12 34 56');document.querySelector('#auth-code').dispatchEvent(new ClipboardEvent('paste',{clipboardData:clipboard,bubbles:true,cancelable:true}));});
   assert(await p.locator('#auth-code').inputValue()==='123456','Spaced pasted code should work');await p.locator('#auth-verify').click();await p.locator('#auth-signed-in').waitFor({state:'visible'});
   await p.locator('#billing-subscribe').waitFor();assert((await p.locator('#access-status').textContent()).includes(language==='no'?'Gratis':'Free'),'Browser flag must not grant library access');
   await p.locator('[data-billing-interval=year]').click();assert(await p.locator('[data-billing-interval=year]').getAttribute('aria-pressed')==='true','Year selection must persist');
   await fits(p);await p.screenshot({path:`output/playwright/accounts-${language}-${width}.png`,fullPage:true});
   const navigation=p.waitForRequest('https://checkout.stripe.com/**');await p.locator('#billing-subscribe').click();await navigation;
   assert(checkout.length===1&&checkout[0].interval==='year'&&!('priceId'in checkout[0]),'Checkout sends plan, not client-selected prices');
   checks.push({language,width,otp:true,cooldown:true,localizedError:true,codePaste:true,accountAccess:true,billing:true});await context.close();
  }
  const {p}=await fixture('en',390,true);await p.locator('#account-modal').waitFor({state:'visible'});
  assert((await p.locator('#auth-signin-status').textContent()).includes('expired'),'Expired callback must offer recovery');
  assert(!await p.locator('#app-tour').isVisible().catch(()=>false),'Tour must not obscure recovery');
  assert(!p.url().includes('error_description'),'Error URL must be cleaned');
  assert(!errors.length,errors.join('; '));return {status:'passed',checks,expiredRecovery:true,simulatedEmails:mails,stripeNavigationsBlocked:stripeBlocked,realEmails:0,realPayments:0};
 }finally{for(const context of contexts)await context.close();}
}

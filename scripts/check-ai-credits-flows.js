// Phone UI + API contracts; all Auth, AI and Stripe traffic is intercepted.
async page=>{
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw Error('Local checks only');
 const contexts=[],checks=[],errors=[];let realPayments=0;
 const assert=(v,m)=>{if(!v)throw Error(m);};
 try {
 for(const language of ['en','no'])for(const width of [320,390]){
  const context=await page.context().browser().newContext({viewport:{width,height:844}});contexts.push(context);
  await context.addInitScript(language=>{localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'individual',groupUiVersion:2}));},language);
  const uid='86000000-0000-4000-8000-000000000001',expires=Math.floor(Date.now()/1000)+3600,user={id:uid,email:'credit-ui@example.invalid',email_confirmed_at:'2026-10-10T00:00Z'};
  const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:uid,exp:expires,role:'authenticated'})).toString('base64url')+'.fixture';
  await context.route('https://*.supabase.co/**',route=>{
   const path=new URL(route.request().url()).pathname.split('/').at(-1);
   const json=path==='otp'?{}:path==='verify'?{access_token:token,refresh_token:'credit-ui',expires_in:3600,expires_at:expires,token_type:'bearer',user}:
    path==='get_public_app_config'?{email_mode:'code',billing_mode:'live'}:path==='get_ai_access'?true:path==='get_account_access'?{full_content:false,ai_access:true,ai_admin:false,subscription:null}:
    path==='ensure_user_profile'?[{id:uid,display_name:'Credits'}]:path==='list_practice_targets'?[{target_user_id:uid,target_kind:'self',display_name:'Credits'}]:path==='user'?user:[];
   return route.fulfill({json});
  });
  let balance=4;const checkout=[];
  const credits=()=>({enabled:true,admin:false,balance,included:0,purchased:balance,refresh_at:null,allowance:120,latest_purchase:'cs_Fixture',packs:[{key:'small',credits:120,amount:5900},{key:'large',credits:360,amount:14900}]});
  await context.route('**/api/account-services/**',route=>{
   const action=new URL(route.request().url()).pathname.split('/').at(-1);
   if(action==='credits')return route.fulfill({json:{protocol:'practice-billing-v1',creditsProtocol:'practice-ai-credits-v1',...credits()}});
   if(action==='status')return route.fulfill({json:{protocol:'practice-billing-v1',mode:'live',aiCreditsEnabled:true,prices:{month:9900,year:79900}}});
   if(action==='credit-checkout'){checkout.push(route.request().postDataJSON());return route.fulfill({json:{protocol:'practice-billing-v1',url:'https://checkout.stripe.com/c/pay/cs_test_fixture'}});}
   return route.abort();
  });
  await context.route('**/api/ai-practice/**',route=>{
   const action=new URL(route.request().url()).pathname.split('/').at(-1);
   if(action==='status')return route.fulfill({json:{protocol:'ai-practice-pilot-v1',mode:'live',credits:credits(),models:{assessment:'fixture',speech:'fixture',transcription:'fixture',delivery:'fixture'}}});
   if(action==='history')return route.fulfill({json:{protocol:'ai-practice-pilot-v1',attempts:[]}});
   if(action==='assess'){
    const value=route.request().postDataJSON();if(balance===0)return route.fulfill({status:402,json:{error:'credits_exhausted'}});balance--;
    return route.fulfill({json:{protocol:value.protocol,source:'ai',attemptId:value.attemptId,kind:value.kind,contentRevision:value.revision,model:'fixture',rubric:'wording-coaching-v2',promptVersion:'supervisor-wording-v2',result:{assessable:true,score:4,evidence:['You miss him'],strength:'You named the missing.',adjustment:'Leave room for correction.',limitation:''}}});
   }return route.abort();
  });
  await context.route('https://*.stripe.com/**',route=>{realPayments++;return route.abort();});
  const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
  await p.locator('#account-button').click();await p.locator('#auth-email').fill('credit-ui@example.invalid');await p.locator('#auth-submit').click();await p.locator('#auth-code').waitFor();await p.locator('#auth-code').fill('12345678');await p.locator('#auth-verify').click();await p.locator('#auth-signed-in').waitFor({state:'visible'});
  await p.locator('#ai-credit-balance').waitFor();assert((await p.locator('#ai-credit-balance').textContent()).startsWith('4 '),'Purchased balance shown');
  assert((await p.locator('#access-status').textContent()).includes(language==='no'?'Gratis':'Free'),'Credits must not grant full library or admin');
  await p.locator('.ai-credit-topups summary').click();assert(await p.locator('[data-credit-pack]').count()===2,'Both approved packs offered');
  for(const size of ['','200%']){await p.evaluate(size=>document.documentElement.style.fontSize=size,size);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Phone credits layout overflow');assert(await p.locator('[data-credit-pack]').evaluateAll(es=>es.every(e=>e.getBoundingClientRect().height>=44)),'Credit buttons need touch targets');}
  await p.evaluate(()=>document.documentElement.style.fontSize='');await p.screenshot({path:`output/playwright/ai-credits-${language}-${width}.png`,fullPage:true});
  await p.locator('#close-account').click();await p.locator('#home-library').click();await p.locator('button[data-skill-id=empathic-understanding]').click();await p.locator('button[data-case-id=case-sara]').click();await p.locator('#ai-enabled').check();await p.locator('[data-ai-input-mode=written]').click();await p.locator('#ai-practice-options details summary').click();await p.locator('[data-ai-option=voices]').uncheck();await p.locator('#start-practice').click();
  assert((await p.locator('.ai-attempt-budget').textContent()).includes('1 '),'Cost visible before submitting');assert((await p.locator('#ai-play-client').textContent()).includes('1 '),'Cost visible before voice generation');
  await p.locator('#ai-response').fill('You miss him.');await p.locator('#ai-send').click();await p.locator('#ai-retry').waitFor();assert((await p.locator('#ai-credit-counter').textContent()).startsWith('3 '),'Balance updates after assessment');
  await p.locator('#ai-retry').click();balance=0;await p.locator('#ai-response').fill('You miss him.');await p.locator('#ai-send').click();await p.locator('#ai-status:not([hidden])').waitFor();assert((await p.locator('#ai-status').textContent()).includes(language==='no'?'kreditter':'credits'),'Exhaustion explained');assert(await p.locator('#ai-response').inputValue()==='You miss him.','Exhaustion must preserve draft');
  await p.locator('#ai-credit-counter').click();await p.locator('.ai-credit-topups summary').click();const navigation=p.waitForRequest('https://checkout.stripe.com/**');await p.locator('[data-credit-pack=small]').click();await navigation;
  assert(checkout.length===1&&checkout[0].pack==='small'&&!('amount'in checkout[0]),'Client sends pack identity, never a price');
  checks.push({language,width,accountBalance:true,phoneLayout:true,paidCosts:true,subscriberIsNotAdmin:true,exhaustion:true,topup:true});await context.close();
 }
 assert(!errors.length,errors.join('; '));return {status:'passed',checks,blockedStripeNavigations:realPayments,realPayments:0,realEmails:0,liveAiCalls:0};
 }finally{for(const context of contexts)await context.close();}
}

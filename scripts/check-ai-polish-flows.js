// Integrated AI workflow + checkout race. All accounts, models and payments are mocked.
async page=>{
 const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw Error('Local checks only');
 const contexts=[],checks=[],errors=[];const assert=(v,m)=>{if(!v)throw Error(m);};
 try{for(const language of ['en','no'])for(const width of [320,390]){
  const context=await page.context().browser().newContext({viewport:{width,height:844}});contexts.push(context);
  await context.addInitScript(language=>{
   if(!['localhost','127.0.0.1'].includes(location.hostname))return;
   localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'individual',groupUiVersion:2}));
   class QuietAudio{pause(){}async play(){}}
   globalThis.Audio=QuietAudio;
   const bytes=new Uint8Array(64044),v=new DataView(bytes.buffer),str=(at,s)=>[...s].forEach((c,i)=>v.setUint8(at+i,c.charCodeAt(0)));
   str(0,'RIFF');v.setUint32(4,64036,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,16000,true);v.setUint32(28,32000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,64000,true);for(let i=44;i<bytes.length;i+=2)v.setInt16(i,2000,true);
   globalThis.MediaRecorder=class{static isTypeSupported(){return true;}constructor(){this.state='inactive';this.mimeType='audio/webm';}start(){this.state='recording';}stop(){this.state='inactive';this.ondataavailable?.({data:new Blob([bytes],{type:this.mimeType})});this.onstop?.();}};
   Object.defineProperty(navigator,'mediaDevices',{value:{getUserMedia:async()=>({getTracks:()=>[{stop(){}}]})},configurable:true});
  },language);
  const uid='96000000-0000-4000-8000-000000000001',expires=Math.floor(Date.now()/1000)+3600,user={id:uid,email:'polish@example.invalid',email_confirmed_at:'2026-10-10T00:00Z'};
  const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:uid,exp:expires,role:'authenticated'})).toString('base64url')+'.fixture';
  await context.route('https://*.supabase.co/**',route=>{const path=new URL(route.request().url()).pathname.split('/').at(-1);const json=path==='otp'?{}:path==='verify'?{access_token:token,refresh_token:'fixture',expires_in:3600,expires_at:expires,token_type:'bearer',user}:path==='get_public_app_config'?{email_mode:'code',billing_mode:'live'}:path==='get_ai_access'?true:path==='get_account_access'?{full_content:false,ai_access:true,ai_admin:false,subscription:null}:path==='ensure_user_profile'?[{id:uid,display_name:'Fixture'}]:path==='list_practice_targets'?[{target_user_id:uid,target_kind:'self',display_name:'Fixture'}]:path==='user'?user:[];return route.fulfill({json});});
  let holdBoot=false,releaseBoot;const bootWait=new Promise(resolve=>releaseBoot=resolve);let balance=120,expiredSupervisor=false,releaseCheckout;const held=new Promise(resolve=>releaseCheckout=resolve),hist=[],costs=[],cache=new Map();let stripeRequests=0;
  const credit=()=>({enabled:true,admin:false,balance,included:0,purchased:balance,refresh_at:null,allowance:120,packs:[{key:'small',credits:120,amount:5900},{key:'large',credits:360,amount:14900}]});
  const debit=(action,id,cost)=>{const key=action+':'+id;if(cache.has(key))return false;cache.set(key,true);balance-=cost;costs.push({action,cost,id});return true;};
  await context.route('**/api/account-services/**',async route=>{const action=new URL(route.request().url()).pathname.split('/').at(-1);
   if(action==='status')return route.fulfill({json:{protocol:'practice-billing-v1',mode:'live',aiCreditsEnabled:true,prices:{month:9900,year:79900}}});
   if(action==='credits')return route.fulfill({json:{protocol:'practice-billing-v1',creditsProtocol:'practice-ai-credits-v1',...credit()}});
   if(action==='credit-checkout'){await held;return route.fulfill({json:{protocol:'practice-billing-v1',url:'https://checkout.stripe.com/c/pay/cs_test_polish'}});}return route.abort();
  });
  await context.route('**/api/ai-practice/**',async route=>{const action=new URL(route.request().url()).pathname.split('/').at(-1);
   if(action==='status'){if(holdBoot)await bootWait;return route.fulfill({json:{protocol:'ai-practice-pilot-v1',mode:'live',credits:credit(),models:{assessment:'fixture',speech:'fixture',delivery:'fixture',transcription:'fixture'}}});}
   if(action==='history')return route.fulfill({json:{protocol:'ai-practice-pilot-v1',attempts:[...hist].reverse()}});
   if(action==='transcribe'){const b=route.request().postDataBuffer().toString('utf8');const id=b.match(/name="requestId"\r\n\r\n([^\r]+)/)[1];debit(action,id,1);return route.fulfill({json:{text:'You miss him.'}});}
   if(action==='delivery'){const b=route.request().postDataBuffer().toString('utf8'),a=JSON.parse(b.match(/name="attempt"\r\n\r\n([\s\S]*?)\r\n--/)[1]);debit(action,a.attemptId,3);return route.fulfill({json:{protocol:a.protocol,attemptId:a.attemptId,version:'delivery-observations-v1',model:'fixture-delivery',metrics:{durationSeconds:2,wordsPerMinute:90,estimatedFromTranscript:true},result:{audibility:'clear',observations:[{dimension:'pace',description:'A steady pace.'}],strength:'Your words are unhurried.',adjustment:'Allow a short pause.',limitation:'One isolated clip.'}}});}
   if(action==='assess'){const a=route.request().postDataJSON();debit(action,a.attemptId,1);const result={assessable:true,score:a.kind==='first'?3:5,evidence:['You miss him'],strength:'You named the missing.',adjustment:'Leave room for correction.',limitation:''};
    if(a.saveHistory&&!hist.some(h=>h.attempt_id===a.attemptId))hist.push({attempt_id:a.attemptId,round_id:a.roundId,language_id:a.languageId,skill_id:a.skillId,case_id:a.caseId,difficulty:a.difficulty,statement_id:a.statementId,kind:a.kind,...result,model:'fixture',rubric:'wording-coaching-v2',content_revision:a.revision,created_at:new Date().toISOString()});
    return route.fulfill({json:{protocol:a.protocol,source:'ai',attemptId:a.attemptId,kind:a.kind,result,model:'fixture',rubric:'wording-coaching-v2',promptVersion:'supervisor-wording-v2',contentRevision:a.revision}});
   }
   if(action==='speech'){const a=route.request().postDataJSON();if(expiredSupervisor&&a.role==='supervisor'&&cache.has(action+':'+a.requestId))return route.fulfill({status:409,json:{error:'assessment_expired'}});debit(action,a.requestId,1);return route.fulfill({contentType:'audio/mpeg',body:Buffer.from([1,2,3])});}return route.abort();
  });
  await context.route('https://*.stripe.com/**',route=>{stripeRequests++;return route.abort();});
  const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(url);
  await p.locator('#account-button').click();await p.locator('#auth-email').fill(user.email);await p.locator('#auth-submit').click();await p.locator('#auth-code').waitFor();await p.locator('#auth-code').fill('12345678');await p.locator('#auth-verify').click();await p.locator('#auth-signed-in').waitFor({state:'visible'});await p.locator('#close-account').click();
  assert(!await p.locator('#home-ai-practice').isVisible(),'AI should not have a parallel library entry');
  await p.locator('#home-library').click();await p.locator('button[data-skill-id=empathic-understanding]').click();await p.locator('button[data-case-id=case-sara]').click();await p.locator('#ai-enabled').check();
  assert((await p.locator('#ai-attempt-cost').textContent()).includes('7 '),'Spoken attempt total shown before starting');
  holdBoot=true;await p.locator('#start-practice').click();await p.waitForFunction(()=>document.body.dataset.section==='ai');await p.locator('#join-shared-room').click();await p.locator('#practice-home').waitFor({state:'visible'});releaseBoot();holdBoot=false;await p.waitForTimeout(100);assert(balance===120&&costs.length===0&&await p.locator('#practice-home').isVisible(),'Cancelling startup must not reopen AI or spend credits');
  await p.locator('#home-library').click();await p.locator('button[data-skill-id=empathic-understanding]').click();await p.locator('button[data-case-id=case-sara]').click();await p.locator('#start-practice').click();await p.locator('#ai-record').waitFor();
  async function spokenAttempt(){await p.locator('#ai-record').click();await p.waitForFunction(()=>document.querySelector('#ai-record')?.getAttribute('aria-pressed')==='true');await p.locator('#ai-record').click();await p.locator('#ai-delivery').waitFor();await p.waitForFunction(()=>!document.querySelector('#ai-retry')?.disabled&&document.querySelector('#ai-delivery'));}
  await spokenAttempt();await p.waitForFunction(()=>document.querySelector('#ai-credit-counter')?.textContent.startsWith('113 '));assert(balance===113,'First spoken attempt costs 7');
  const before=costs.length;await p.locator('#ai-play-client').click();await p.locator('#ai-play-supervisor').click();assert(costs.length===before,'Voice replay should use browser cache');
  await p.locator('#ai-retry').click();await spokenAttempt();await p.waitForFunction(()=>document.querySelector('#ai-credit-counter')?.textContent.startsWith('107 '));assert(balance===107,'Coached retry costs 6 with client replay');
  await p.locator('#join-shared-room').click();await p.locator('#practice-exit-pause').click();await p.reload();await p.locator('#home-ai-practice').waitFor({state:'visible'});await p.locator('#home-ai-practice').click();await p.locator('#ai-next').waitFor();assert(await p.locator('#ai-play-recording').count()===0,'Original recording must not persist');assert((await p.locator('.ai-rating-value').textContent()).includes('5'),'Coached feedback should survive reload');
  expiredSupervisor=true;await p.locator('#ai-play-supervisor').click();await p.locator('#ai-status:not([hidden])').waitFor();assert(balance===107,'Expired clip must not silently debit');await p.locator('#ai-play-supervisor').click();await p.waitForFunction(()=>document.querySelector('#ai-credit-counter')?.textContent.startsWith('106 '));assert(balance===106,'Explicit voice regeneration costs one credit');
  for(const size of ['','200%']){await p.evaluate(size=>document.documentElement.style.fontSize=size,size);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'AI phone layout should fit');}await p.evaluate(()=>document.documentElement.style.fontSize='');
  await p.evaluate(()=>window.scrollTo({top:0}));await p.screenshot({path:`output/playwright/ai-polish-${language}-${width}.png`,fullPage:true});
  await p.locator('#account-button').click();await p.locator('#ai-history summary').click();await p.locator('.ai-history-card').waitFor();const scores=await p.locator('.ai-history-card .ai-score-card strong').allTextContents();assert(scores.includes('3.0 / 5')&&scores.includes('5.0 / 5'),'History must separate first from coached scores');
  await p.locator('.ai-credit-topups summary').click();const starting=p.waitForRequest('**/api/account-services/credit-checkout');await p.locator('[data-credit-pack=small]').click();await starting;
  const refreshing=p.waitForResponse('**/api/account-services/credits');await p.evaluate(()=>window.dispatchEvent(new Event('dp-ai-credits-changed')));await refreshing;const redirect=p.waitForRequest('https://checkout.stripe.com/**');releaseCheckout();await redirect;await p.waitForTimeout(100);
  assert(stripeRequests===1,'A refresh during checkout should still redirect exactly once');checks.push({language,width,integratedPreparation:true,cancelledStartup:true,automaticSpokenFeedback:true,firstCredits:7,retryCredits:6,freeReplay:true,reloadRecovery:true,historySeparation:true,checkoutRefreshRace:true});await context.close();
 }
 assert(!errors.length,errors.join('; '));return {status:'passed',checks,realPayments:0,realEmails:0,liveAiCalls:0};
 }finally{for(const c of contexts)await c.close();}
}

// Playwright CLI run-code harness. Auth, recording and provider calls are isolated fixtures.
async page => {
  const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw Error('Local QA only');
  const assert=(value,message)=>{if(!value)throw Error(message);};
  const contexts=[],errors=[],checks=[];let externalCalls=0;
  async function fixture(admin,language='en',width=390,signedIn=true) {
    const context=await page.context().browser().newContext({viewport:{width,height:844}});contexts.push(context);
    await context.addInitScript(({language,signedIn})=>{
      localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true}));
      localStorage.setItem('dp_practice_preferences_v1',JSON.stringify({languageId:language,practiceMode:'individual',groupUiVersion:2}));
      // Forged browser content access and metadata must never grant AI access.
      localStorage.setItem('dp_access_level','all');
      if(signedIn) {
        const id='11111111-1111-4111-8111-111111111111',expires=Math.floor(Date.now()/1000)+3600;
        const token=btoa(JSON.stringify({alg:'HS256',typ:'JWT'}))+'.'+btoa(JSON.stringify({sub:id,exp:expires,role:'authenticated'}))+'.fixture';
        localStorage.setItem('sb-kpzmjnwwbxweevloiqiy-auth-token',JSON.stringify({access_token:token,refresh_token:'isolated-fixture-only',token_type:'bearer',expires_at:expires,expires_in:3600,user:{id,email:'fixture@example.invalid',user_metadata:{role:'admin'}}}));
      }
      window.aiTracksStopped=0;window.aiReplayCount=0;
      window.Audio=class {async play(){window.aiReplayCount++;}pause(){}};
      Object.defineProperty(navigator,'mediaDevices',{value:{getUserMedia:async()=>({getTracks:()=>[{stop:()=>window.aiTracksStopped++}]})},configurable:true});
      window.MediaRecorder=class {
        static isTypeSupported(){return true;}constructor(stream,options){this.mimeType=options?.mimeType||'audio/webm';this.state='inactive';}
        start(){this.state='recording';}
        stop(){this.state='inactive';setTimeout(()=>{
          const b=new Uint8Array(96044),v=new DataView(b.buffer),label=(o,s)=>[...s].forEach((c,i)=>v.setUint8(o+i,c.charCodeAt(0)));
          label(0,'RIFF');v.setUint32(4,b.length-8,true);label(8,'WAVE');label(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,16000,true);v.setUint32(28,32000,true);v.setUint16(32,2,true);v.setUint16(34,16,true);label(36,'data');v.setUint32(40,b.length-44,true);
          for(let i=0;i<48000;i++)v.setInt16(44+i*2,Math.sin(i*2*Math.PI*220/16000)*4000,true);
          this.ondataavailable?.({data:new Blob([b],{type:this.mimeType})});this.onstop?.();
        },0);}
      };
    },{language,signedIn});
    await context.route('**/api/account-services/**',async route=>{
      const action=new URL(route.request().url()).pathname.split('/').at(-1);
      if(action==='status')return route.fulfill({json:{protocol:'practice-billing-v1',mode:'off'}});
      const input=route.request().postDataJSON(),kind=input.kind;
      const file=kind==='skill'?`statements/${input.languageId}-${input.skillId}.json`:`mastery/${input.languageId}-${input.exerciseId}.json`;
      const response=await context.request.get(new URL(`src/data/runtime/${file}`,url).href);
      if(!response.ok())throw Error('Missing protected content fixture');
      const data=await response.json(),revision=kind==='skill'?Object.values(data)[0][0].revision:data.revision;
      return route.fulfill({json:{protocol:'practice-content-v1',revision,...(kind==='skill'?{bank:data}:{exercise:data})}});
    });
    await context.route('https://*.supabase.co/**',route=>{
      const action=new URL(route.request().url()).pathname.split('/').at(-1),id='11111111-1111-4111-8111-111111111111';
      return route.fulfill({json:action==='get_ai_access'?admin:action==='get_account_access'?{full_content:admin,ai_access:admin,subscription:null}:action==='ensure_user_profile'?[{id,display_name:'Fixture'}]:action==='list_practice_targets'?[{target_user_id:id,display_name:'Fixture',target_kind:'self'}]:action==='user'?{id,email:'fixture@example.invalid',user_metadata:{role:'admin'}}:[]});
    });
    await context.route('https://api.openai.com/**',route=>{externalCalls++;return route.abort();});
    const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
    const sent=[],deliveries=[];let failDelivery=true,apiCalls=0;
    await p.route('**/api/ai-practice/**',async route=>{
      apiCalls++;const request=route.request(),action=new URL(request.url()).pathname.split('/').at(-1);
      assert(!!request.headers().authorization,'Requests require current sign-in token');
      if(action==='status')return route.fulfill({json:{protocol:'ai-practice-pilot-v1',mode:'live',models:{assessment:'wording-fixture',speech:'tts-fixture',transcription:'transcription-fixture',delivery:'audio-fixture'}}});
      if(action==='transcribe')return route.fulfill({json:{text:language==='no'?'Du savner ham.':'You miss him.'}});
      if(action==='speech')return route.fulfill({contentType:'audio/mpeg',body:Buffer.from([1,2,3])});
      if(action==='delivery') {
        const type=request.headers()['content-type'],parsed=await new Response(request.postDataBuffer(),{headers:{'Content-Type':type}}).formData();
        const value=JSON.parse(parsed.get('attempt')),bytes=new Uint8Array(await parsed.get('file').arrayBuffer());deliveries.push(value);
        assert(String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&bytes.length===96044,'Browser converts recording to bounded mono WAV');
        if(failDelivery){failDelivery=false;return route.fulfill({status:502,json:{error:'delivery_unavailable'}});}
        return route.fulfill({json:{protocol:'ai-practice-pilot-v1',attemptId:value.attemptId,version:'delivery-observations-v1',model:'actual-audio-fixture',
          result:{audibility:'clear',observations:[{dimension:'pauses',description:language==='no'?'En liten pause etter første frase.':'A small pause after the first phrase.'}],strength:language==='no'?'Avslutningen er tydelig.':'The ending is clear.',adjustment:language==='no'?'La det bli stille etter speilingen.':'Leave some silence after the reflection.',limitation:language==='no'?'Et enkeltstående lydklipp.':'An isolated audio clip.'},
          metrics:{durationSeconds:3,wordsPerMinute:120,estimatedFromTranscript:true}}});
      }
      const value=request.postDataJSON();sent.push(value);
      return route.fulfill({json:{protocol:'ai-practice-pilot-v1',source:'ai',attemptId:value.attemptId,kind:value.kind,contentRevision:value.revision,rubric:'wording-coaching-v2',promptVersion:'supervisor-wording-v2',model:'actual-wording-fixture',
        result:{assessable:true,score:4,evidence:[value.text.slice(0,30)],strength:'You reflected the missing him.',adjustment:'Allow room for correction.',limitation:''}}});
    });
    await p.goto(url);await p.locator('#home-library').waitFor({state:'visible'});
    return {p,context,sent,deliveries,apiCalls:()=>apiCalls};
  }
  async function start(p,skill='empathic-understanding') {
    await p.locator('#home-ai-practice').click();await p.locator(`[data-ai-skill=${skill}]`).click();await p.locator('[data-ai-case=case-sara]').click();await p.locator('#ai-begin').click();
  }
  async function fits(p) {
    for(const size of ['','200%']) {
      await p.evaluate(size=>document.documentElement.style.fontSize=size,size);
      assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Phone layout fits at enlarged text');
      assert(await p.evaluate(()=>[...document.querySelectorAll('#ai-practice button')].filter(b=>b.getClientRects().length).every(b=>b.getBoundingClientRect().height>=44)),'Touch targets >=44px');
    }
    await p.evaluate(()=>document.documentElement.style.fontSize='');
  }
  try {
    for(const signedIn of [false,true]) {
      const {p,apiCalls}=await fixture(false,'en',390,signedIn);
      await p.locator('#home-library').waitFor({state:'visible'});
      assert(await p.locator('#home-ai-practice').isHidden(),'Anonymous and non-admin accounts cannot open AI');assert(apiCalls()===0,'Hidden AI makes no model/service calls');
      checks.push({signedIn,forgedMetadataRejected:true});
    }
    for(const [language,width] of [['en',320],['no',390]]) {
      const {p,sent,deliveries}=await fixture(true,language,width);await p.locator('#home-ai-practice').waitFor();await start(p);
      const corrected=language==='no'?'Savnet traff deg da du var alene.':'Missing him hit you when you were alone.';
      await p.locator('#ai-response').fill(corrected);await p.locator('#ai-send').click();await p.locator('#ai-retry').waitFor();
      assert(await p.locator('#ai-review-delivery').count()===0,'Typed response has no audio review');await p.locator('#ai-retry').click();
      await p.locator('#ai-record').click();await p.waitForFunction(()=>document.querySelector('#ai-record')?.getAttribute('aria-pressed')==='true');await p.locator('#ai-record').click();
      await p.locator('#ai-transcript-hint').waitFor();assert(await p.evaluate(()=>aiTracksStopped===1),'Microphone released');
      await p.locator('#ai-play-recording').click();assert(await p.evaluate(()=>aiReplayCount===1),'Recording replay works');await p.locator('#ai-play-recording').click();
      await p.locator('#ai-response').fill(corrected);await p.locator('#ai-send').click();await p.locator('#ai-review-delivery').waitFor();
      await p.locator('#ai-review-delivery').click();await p.locator('#ai-status:not([hidden])').waitFor();
      assert(await p.locator('.ai-rating-value strong').textContent()==='4 / 5','Delivery failure preserves wording score');assert(await p.locator('#ai-play-recording').isVisible(),'Delivery failure preserves recording');
      await p.locator('#ai-review-delivery').click();await p.locator('#ai-delivery').waitFor();
      assert(deliveries.length===2&&deliveries[0].attemptId===sent[1].attemptId&&deliveries[1].text===corrected,'Delivery retry uses same corrected attempt');
      assert(await p.locator('#ai-delivery .ai-rating-value').count()===0,'Audio feedback has no numerical score');
      assert(await p.locator('.ai-rating-value strong').textContent()==='4 / 5','Audio review cannot change wording score');
      await p.locator('#ai-details > summary').click();assert((await p.locator('#ai-details dd').allTextContents()).includes('actual-audio-fixture'),'Actual audio model visible');await fits(p);
      await p.screenshot({path:`output/playwright/ai-delivery-${language}-${width}.png`,fullPage:true});
      await p.locator('#ai-next').click();assert(await p.locator('#ai-play-recording').count()===0,'Next item removes original recording');
      for(let index=1;index<12;index++)await p.locator('#ai-pass').click();
      const downloading=p.waitForEvent('download');await p.locator('#ai-export').click();const stream=await(await downloading).createReadStream();let content='';for await(const chunk of stream)content+=chunk.toString();
      const exported=JSON.parse(content);assert(exported.items[0].retry.delivery.result.audibility==='clear','Export includes optional observations');
      assert(!/"(?:blob|wav|recorded|audioBase64)"/.test(content),'Export contains no recording data');
      checks.push({language,width,replay:true,realWavConversion:true,deliveryRetry:true,scoreUnchanged:true,export:true});
    }
    assert(!errors.length,errors.join('; '));assert(externalCalls===0,'No paid calls');return {status:'passed',checks,externalCalls};
  } finally {for(const context of contexts)await context.close();}
}

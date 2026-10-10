// Playwright CLI: isolated local preview only. No account, payment or rating writes.
async page => {
 const assert=(value,message)=>{if(!value)throw Error(message);};
 assert(['localhost','127.0.0.1'].includes(new URL(page.url()).hostname),'Local preview only');
 const errors=[],checks=[],url=page.url();page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>localStorage.setItem('dp_app_tour_v1',JSON.stringify({disabled:true})));
 await page.reload();
 const cdp=await page.context().newCDPSession(page);
 const scenarios=[
  {name:'cutout portrait',width:390,height:844,insets:{top:59,bottom:34,left:0,right:0}},
  {name:'small phone',width:320,height:568,insets:{top:0,bottom:0,left:0,right:0}},
  {name:'cutout landscape',width:844,height:390,insets:{top:0,bottom:21,left:59,right:59}},
  {name:'Android',width:412,height:915,insets:{top:24,bottom:24,left:0,right:0}},
  {name:'tablet',width:768,height:1024,insets:{top:24,bottom:20,left:0,right:0}},
  {name:'desktop',width:1365,height:900,insets:{top:0,bottom:0,left:0,right:0}}
 ];
 const settle=()=>page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
 const measure=async(name,scenario)=>{
  await settle();
  const result=await page.evaluate(()=>{
   const rect=element=>{const r=element.getBoundingClientRect();return {top:r.top,left:r.left,right:r.right,bottom:r.bottom,height:r.height};};
   return {width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth,
    controls:[...document.querySelectorAll('#header-navigation button')].map(rect),
    panel:[...document.querySelectorAll('.app-main > section')].find(e=>e.getClientRects().length)?.getBoundingClientRect().toJSON()};
  });
  assert(!result.overflow,`${name}: horizontal overflow`);
  for(const r of result.controls){
   assert(r.top>=scenario.insets.top-1&&r.bottom<=result.height-scenario.insets.bottom+1,`${name}: header control behind hardware`);
   assert(r.left>=scenario.insets.left-1&&r.right<=result.width-scenario.insets.right+1,`${name}: header control clipped at side`);
   assert(r.height>=44,`${name}: header touch target too small`);
  }
  if(result.panel)assert(result.panel.left>=scenario.insets.left-1&&result.panel.right<=result.width-scenario.insets.right+1,`${name}: reading panel behind side cutout`);
  checks.push({screen:name,scenario:scenario.name});
 };
 const dialogs=async scenario=>{
  await page.locator('#account-button').click();await settle();
  const bounds=await page.locator('#account-modal').boundingBox();
  assert(bounds.y>=scenario.insets.top-1&&bounds.y+bounds.height<=scenario.height-scenario.insets.bottom+1,`${scenario.name}: account dialog exceeds safe height`);
  assert(bounds.x>=scenario.insets.left-1&&bounds.x+bounds.width<=scenario.width-scenario.insets.right+1,`${scenario.name}: account dialog exceeds safe width`);
  assert((await page.locator('#close-account').boundingBox()).y>=scenario.insets.top-1,`${scenario.name}: close button behind cutout`);
  await page.locator('#close-account').click();
 };
 try {
  for(const scenario of scenarios){
   await cdp.send('Emulation.setDeviceMetricsOverride',{width:scenario.width,height:scenario.height,deviceScaleFactor:1,mobile:scenario.width<1024});
   await cdp.send('Emulation.setSafeAreaInsetsOverride',{insets:scenario.insets});
   for(const text of ['100%','200%']){
    await page.evaluate(value=>document.documentElement.style.fontSize=value,text);
    await measure(`home ${text}`,scenario);await dialogs(scenario);
   }
   await page.evaluate(()=>document.documentElement.style.fontSize='');
  }
  const phone=scenarios[0];
  await cdp.send('Emulation.setDeviceMetricsOverride',{width:phone.width,height:phone.height,deviceScaleFactor:1,mobile:true});
  await cdp.send('Emulation.setSafeAreaInsetsOverride',{insets:phone.insets});
  await page.locator('input[value=individual]').check();await page.locator('#home-library').click();
  if(await page.locator('#language-selection').isVisible())await page.locator('[data-language-id=en]').click();
  await measure('skills',phone);await page.locator('[data-skill-id=empathic-understanding]').click();await measure('cases',phone);
  await page.locator('[data-case-id=case-sara]').click();await measure('preparation',phone);
  await page.locator('#start-practice').click();await measure('individual item',phone);
  await page.locator('#back-to-cases').click();await page.locator('#pause-round').click();
  await page.locator('#account-button').click();
  // iOS can shrink only VisualViewport while innerHeight remains the full screen.
  await page.evaluate(()=>{
   Object.defineProperty(visualViewport,'height',{configurable:true,value:420});
   visualViewport.dispatchEvent(new Event('resize'));
  });
  await settle();
  const keyboardDialog=await page.locator('#account-modal').boundingBox(),submit=await page.locator('#auth-submit').boundingBox();
  assert(keyboardDialog.y>=59&&keyboardDialog.y+keyboardDialog.height<=420-34+1,'Dialog does not fit a keyboard-sized visual viewport');
  assert(submit.y+submit.height<=420-34+1,'Continue button is covered by keyboard');
  await page.evaluate(()=>{delete visualViewport.height;visualViewport.dispatchEvent(new Event('resize'));});
  await page.locator('#close-account').click();
  const manifest=await cdp.send('Page.getAppManifest');
  assert(!manifest.errors.length,'Manifest parse errors');
  const data=JSON.parse(manifest.data);
  assert(data.display==='standalone'&&data.scope==='/deliberatepractice/'&&data.start_url==='/deliberatepractice/','Installed launch mode or scope is wrong');
  for(const icon of data.icons){const response=await page.request.get(new URL(icon.src,manifest.url).href);assert(response.ok(),'Icon not available');}
  assert(!errors.length,errors.join('; '));
  return {status:'passed',checks,keyboardViewport:true,manifest:true,realEmails:0,realPayments:0};
 }finally{
  await page.evaluate(()=>{delete visualViewport.height;document.documentElement.style.fontSize='';visualViewport.dispatchEvent(new Event('resize'));}).catch(()=>{});
  await cdp.send('Emulation.setSafeAreaInsetsOverride',{insets:{}});await cdp.send('Emulation.clearDeviceMetricsOverride');
 }
}

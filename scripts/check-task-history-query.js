// Real backend adapter and Supabase SDK, local HTTP mocks only. No hosted writes.
async page => {
 const origin=new URL(page.url()).origin;
 if(!['127.0.0.1','localhost'].includes(new URL(origin).hostname))throw new Error('Local preview only');
 let source=await(await page.request.get(origin+'/deliberatepractice/src/js/backend.js')).text();
 const sdkPath=source.match(/import\("([^\"]*supabase[^\"]*)"\)/)?.[1];
 if(!sdkPath)throw new Error('Missing installed SDK');
 source=source.replace(/const SUPABASE_URL = [^\n]+/,`const SUPABASE_URL = ${JSON.stringify(origin)};`)
  .replace(/const SUPABASE_ANON_KEY = [^\n]+/,'const SUPABASE_ANON_KEY = "local-test-key";')
  .replace('auth: {','auth: { storageKey: "dp-task-query-auth",').replace('autoRefreshToken: true','autoRefreshToken: false');
 const calls=[];let legacy=false,unexpected=false;
 await page.route('**/src/js/backend.js?task-query-check*',route=>route.fulfill({contentType:'text/javascript',body:source}));
 await page.route(origin+'/auth/v1/**',route=>route.fulfill({contentType:'application/json',body:JSON.stringify({id:'query-test-user',aud:'authenticated',email:'test@local.invalid'})}));
 await page.route(origin+'/rest/v1/mastery_ratings?*',async route=>{
  const params=Object.fromEntries(new URL(route.request().url()).searchParams);calls.push(params);
  if(unexpected)return route.fulfill({status:403,contentType:'application/json',body:'{"code":"42501","message":"permission denied"}'});
  if(legacy&&params.select.includes('exercise_format'))return route.fulfill({status:400,contentType:'application/json',body:'{"code":"42703","message":"column mastery_ratings.exercise_format does not exist"}'});
  if(params.or)return route.fulfill({contentType:'application/json',body:'[]'});
  await route.fulfill({contentType:'application/json',body:JSON.stringify([{id:'bb815b76-48e5-4ae9-98ec-4b367c51dcb5',source:params.source.slice(3),created_at:'2026-10-05T00:00:00Z',...(legacy?{}:{exercise_format:'task-episodes',task_id:'two-chair-self-criticism',episode_id:'task_sara_phone'})}])});
 });
 try {
  const result=await page.evaluate(async({sdkPath,origin})=>{
   const {createClient}=await import(sdkPath),auth=createClient(origin,'local-test-key',{auth:{storageKey:'dp-task-query-auth',autoRefreshToken:false,detectSessionInUrl:false}});
   const encode=v=>btoa(JSON.stringify(v)).replaceAll('=','').replaceAll('+','-').replaceAll('/','_');
   const token=encode({alg:'HS256',typ:'JWT'})+'.'+encode({sub:'query-test-user',aud:'authenticated',exp:Math.floor(Date.now()/1000)+3600})+'.'+encode('local-test');
   const {error}=await auth.auth.setSession({access_token:token,refresh_token:'local-refresh'});if(error)throw error;
   const backend=await import('./src/js/backend.js?task-query-check='+Date.now());
   window.taskQueryBackend=backend;auth.auth.stopAutoRefresh();
   const self=await backend.listMasteryRatings({source:'self'}),observer=await backend.listMasteryRatings({source:'observer'});
   let invalid=false;try{await backend.listMasteryRatings({source:'invalid'});}catch{invalid=true;}
   return {self,observer,invalid};
  },{sdkPath,origin});
  if(!result.invalid||result.self[0]?.episode_id!=='task_sara_phone'||result.observer[0]?.source!=='observer')throw new Error('Missing task provenance or source isolation');
  legacy=true;
  const old=await page.evaluate(()=>window.taskQueryBackend.listMasteryRatings({source:'self'}));
  if(old.length!==1||calls.length!==7||calls[5].select.includes('exercise_format'))throw new Error('Older server compatibility failed');
  unexpected=true;
  const denied=await page.evaluate(async()=>{try{await window.taskQueryBackend.listMasteryRatings();return false;}catch{return true;}});
  if(!denied||calls.length!==8)throw new Error('Unrelated server error was masked');
  for(const call of calls)if(call.therapist_user_id!=='eq.query-test-user'||!['eq.self','eq.observer'].includes(call.source)||call.limit!=='250'||call.order!=='created_at.desc,id.desc')throw new Error('History lost ownership/source/pagination constraints');
  return {status:'passed',checks:['task provenance','owner and source isolation','older server fallback','unrelated errors remain visible']};
 }finally{
  await page.unroute('**/src/js/backend.js?task-query-check*');await page.unroute(origin+'/auth/v1/**');await page.unroute(origin+'/rest/v1/mastery_ratings?*');
  await page.evaluate(()=>{localStorage.removeItem('dp-task-query-auth');delete window.taskQueryBackend;});await page.reload();
 }
}

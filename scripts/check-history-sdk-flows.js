// Real Supabase SDK, intercepted network and isolated SQL. No remote auth or writes.
async(page)=>{
  const url=page.url();if(!['localhost','127.0.0.1'].includes(new URL(url).hostname))throw new Error('Local preview only');
  const users=await(await page.request.get('http://127.0.0.1:5199/users')).json();
  const context=await page.context().browser().newContext(),requests=[];
  const stamp='2026-10-03T12:00:00.123456+00:00';
  const rows=Array.from({length:721},(_,i)=>({id:`00000000-0000-4000-8000-${String(999999999999-i)}`,source:'self',skill_id:'empathic-understanding',case_id:'case-sara',difficulty:'easy',score:4,item_count:3,created_at:stamp,parent_round_id:null,set_number:null}));
  let fail=false,legacySchema=false,missingRpc=false,legacyWrites=0;
  await context.addInitScript(user=>{
    const expires=Math.floor(Date.now()/1000)+3600;
    const token=btoa(JSON.stringify({alg:'HS256',typ:'JWT'}))+'.'+btoa(JSON.stringify({sub:user,exp:expires,role:'authenticated'}))+'.fixture';
    localStorage.setItem('sb-kpzmjnwwbxweevloiqiy-auth-token',JSON.stringify({access_token:token,refresh_token:'isolated-fixture-only',token_type:'bearer',expires_at:expires,expires_in:3600,user:{id:user,email:'fixture@example.invalid'}}));
  },users.t);
  await context.route('https://*.supabase.co/**',async route=>{
    const req=route.request(),address=new URL(req.url()),params=address.searchParams;
    if(address.pathname==='/auth/v1/user')return route.fulfill({contentType:'application/json',body:JSON.stringify({id:users.t,email:'fixture@example.invalid'})});
    if(address.pathname==='/rest/v1/practice_ratings'){
      if(legacySchema&&params.get('select')?.includes('parent_round_id'))return route.fulfill({status:400,contentType:'application/json',body:JSON.stringify({code:'42703',message:'column practice_ratings.parent_round_id does not exist'})});
      if(params.get('therapist_user_id')!==`eq.${users.t}`||params.get('rating_rubric')!=='eq.group-skill-v2')throw new Error('History not scoped to authenticated therapist/current rubric');
      if(params.get('order')!=='created_at.desc,id.desc')throw new Error('Unstable SDK history ordering');
      requests.push({source:params.get('source'),cursor:params.get('or')});
      if(fail&&params.get('or'))return route.fulfill({status:503,contentType:'application/json',body:'{"message":"Fixture network failure"}'});
      if(params.get('source')==='eq.observer')return route.fulfill({contentType:'application/json',body:'[]'});
      const cursor=params.get('or')?.match(/id.lt.([a-f0-9-]{36})/i)?.[1];
      // Impose a server limit below the requested 250: the client still reads to empty.
      const selected=rows.filter(r=>!cursor||r.id<cursor).slice(0,100);
      return route.fulfill({contentType:'application/json',body:JSON.stringify(selected)});
    }
    if(address.pathname==='/rest/v1/rpc/record_practice_rating_with_history'&&missingRpc)return route.fulfill({status:404,contentType:'application/json',body:JSON.stringify({code:'PGRST202',message:'Could not find function public.record_practice_rating_with_history'})});
    if(['/rest/v1/rpc/record_practice_rating_with_history','/rest/v1/rpc/record_practice_rating'].includes(address.pathname)){
      const args=req.postDataJSON(),name=address.pathname.split('/').at(-1);
      if(name==='record_practice_rating'){legacyWrites++;if('input_parent_round_id' in args||'input_set_number' in args)throw new Error('Metadata sent to legacy RPC');}
      const response=await page.request.post('http://127.0.0.1:5199/rpc',{data:{user:users.t,name,args}});
      return route.fulfill({status:response.status(),contentType:'application/json',body:await response.text()});
    }
    // Unrelated initial app profile calls are contained inside this fixture.
    return route.fulfill({contentType:'application/json',body:'[]'});
  });
  try{
    const p=await context.newPage();await p.goto(url);
    const result=await p.evaluate(async user=>{
      const api=await import('/deliberatepractice/src/js/backend.js');
      const ratings=await api.listPracticeRatings({source:'self'}),observer=await api.listPracticeRatings({source:'observer'});
      const payload={therapistUserId:user,source:'self',languageId:'en',skillId:'empathic-understanding',caseId:'case-sara',statementId:null,statementIndex:null,difficulty:'easy',score:4,criteriaTags:[],contentRevision:'fixture',ratingScope:'series',completedStatementIds:['sdk-a','sdk-b','sdk-c'],itemCount:3,roundId:crypto.randomUUID(),parentRoundId:crypto.randomUUID(),setNumber:2,practiceMode:'triad',ratingRubric:'group-skill-v2'};
      const saved=await api.submitPracticeRating(payload),replayed=await api.submitPracticeRating(payload);
      return{count:ratings.length,unique:new Set(ratings.map(r=>r.id)).size,observerCount:observer.length,same:saved.id===replayed.id,parent:payload.parentRoundId,savedId:saved.id};
    },users.t);
    if(result.count!==721||result.unique!==721||result.observerCount!==0||!result.same)throw new Error('SDK pagination/source/retry mismatch');
    const actual=await(await page.request.get('http://127.0.0.1:5199/ratings')).json();
    if(!actual.some(r=>r.id===result.savedId&&r.parent_round_id===result.parent&&r.set_number===2))throw new Error('SDK failed to persist metadata');
    fail=true;
    const rejected=await p.evaluate(async()=>{try{await(await import('/deliberatepractice/src/js/backend.js')).listPracticeRatings({source:'self'});return false;}catch{return true;}});
    if(!rejected)throw new Error('Partial history presented as complete after SDK error');
    fail=false;legacySchema=true;missingRpc=true;
    const compatibility=await p.evaluate(async user=>{
      const api=await import('/deliberatepractice/src/js/backend.js');
      const count=(await api.listPracticeRatings({source:'self'})).length;
      const payload={therapistUserId:user,source:'self',languageId:'en',skillId:'empathic-understanding',caseId:'case-sara',statementId:null,statementIndex:null,difficulty:'easy',score:4,criteriaTags:[],contentRevision:'fixture',ratingScope:'series',completedStatementIds:['legacy-fixture'],itemCount:1,roundId:crypto.randomUUID(),parentRoundId:crypto.randomUUID(),setNumber:1,practiceMode:'triad',ratingRubric:'group-skill-v2'};
      const saved=await api.submitPracticeRating(payload);await api.submitPracticeRating(payload);
      return {count,id:saved.id};
    },users.t);
    const legacyRows=await(await page.request.get('http://127.0.0.1:5199/ratings')).json();
    if(compatibility.count!==721||legacyWrites!==2||!legacyRows.some(r=>r.id===compatibility.id&&r.parent_round_id===null&&r.set_number===null))throw new Error('Unmigrated preview compatibility failed');
    return{passed:true,checks:['real SDK 721-row keyset history','equal timestamp ordering','smaller server limit','source and owner filters','failed later page','real SQL metadata save and idempotent retry','unmigrated schema and RPC compatibility'],requests:requests.length};
  }finally{await context.close();}
}

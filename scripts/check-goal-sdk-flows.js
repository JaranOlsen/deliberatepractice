// Exercise the real Supabase SDK request path against the isolated local RLS bridge.
async (page) => {
  const url=page.url();
  if(!['127.0.0.1','localhost'].includes(new URL(url).hostname))throw new Error('Use local preview');
  const users=await (await page.request.get('http://127.0.0.1:5199/users')).json(),requests=[];
  const context=await page.context().browser().newContext();
  let denied=false;
  await context.route('https://*.supabase.co/**',async route=>{
    const request=route.request(),address=new URL(request.url());
    if(address.pathname!=='/rest/v1/practice_goals')return route.fulfill({status:400,body:'{}'});
    const method=request.method(),params=address.searchParams,body=request.postDataJSON();
    requests.push({method,params:Object.fromEntries(params),body});
    if(denied)return route.fulfill({status:403,contentType:'application/json',body:'{"code":"42501","message":"Private fixture detail that must not reach the UI"}'});
    const scope={user:users.t,languageId:body?.language_id??params.get('language_id')?.slice(3),skillId:body?.skill_id??params.get('skill_id')?.slice(3),targetUserId:body?.user_id??params.get('user_id')?.slice(3)};
    const response=await page.request.post('http://127.0.0.1:5199/goal',{data:{...scope,action:method==='GET'?'read':'save',text:body?.goal_text??''}});
    const result=await response.json();
    await route.fulfill({status:response.ok()?(method==='GET'?200:201):403,contentType:'application/json',body:method==='GET'?JSON.stringify(result.text?[{goal_text:result.text}]:[]):'null'});
  });
  try {
    const p=await context.newPage();await p.goto(url);
    const result=await p.evaluate(async userId=>{
      const api=await import('/deliberatepractice/src/js/backend.js');
      const scope={userId,languageId:'en',skillId:'empathic-understanding'};
      await api.savePracticeGoal({...scope,text:'Pause before reflecting.'});
      const read=await api.getPracticeGoal(scope);
      await api.savePracticeGoal({...scope,text:''});
      return {read,removed:await api.getPracticeGoal(scope)};
    },users.t);
    if(result.read!=='Pause before reflecting.'||result.removed!=='')throw new Error('SDK save/read/remove mismatch');
    const write=requests.find(r=>r.method==='POST'),deletion=requests.find(r=>r.method==='DELETE');
    if(write.params.on_conflict!=='user_id,language_id,skill_id')throw new Error('Incorrect SDK conflict key');
    if(deletion.params.user_id!==`eq.${users.t}`||deletion.params.skill_id!=='eq.empathic-understanding'||deletion.params.language_id!=='eq.en')throw new Error('Delete is not fully scoped');
    denied=true;
    const failures=await p.evaluate(async userId=>{
      const api=await import('/deliberatepractice/src/js/backend.js'),scope={userId,languageId:'en',skillId:'empathic-understanding'};
      const messages=[];
      for(const op of [()=>api.getPracticeGoal(scope),()=>api.savePracticeGoal({...scope,text:'Pause.'})])try{await op();}catch(error){messages.push(error.message);}
      return messages;
    },users.t);
    if(failures.length!==2||failures.some(s=>s.includes('Private fixture')))throw new Error('Backend error exposes note detail');
    return {passed:true,checks:['real SDK upsert/read/delete','scope filters','conflict key','private error sanitization'],requests:requests.length};
  }finally {await context.close();}
}

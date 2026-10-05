const copy = {
  en: {title:'Leave practice?', description:'Pause to keep your place, or end this round and return home.', keep:'Keep practicing', pause:'Pause and go home', end:'End round and go home'},
  no: {title:'Forlate øvingen?', description:'Ta pause for å beholde plassen, eller avslutt runden og gå hjem.', keep:'Fortsett å øve', pause:'Ta pause og gå hjem', end:'Avslutt runden og gå hjem'}
};

export function createPracticeExit({dialogs, getLanguage}) {
  const overlay=document.createElement('div');
  overlay.id='practice-exit-overlay';overlay.className='account-overlay is-hidden';overlay.hidden=true;
  overlay.innerHTML='<section class="account-modal" role="dialog" aria-modal="true" aria-labelledby="practice-exit-title" aria-describedby="practice-exit-description"><h2 id="practice-exit-title"></h2><p id="practice-exit-description"></p><div class="leave-actions"><button id="practice-exit-keep" class="primary-button" type="button"></button><button id="practice-exit-pause" class="ghost-button" type="button"></button><button id="practice-exit-end" class="ghost-button" type="button"></button></div></section>';
  document.body.append(overlay);
  const el=id=>overlay.querySelector('#practice-exit-'+id);
  let decision=null;
  function close(){dialogs.close(overlay);decision=null;}
  el('keep').addEventListener('click',close);
  for(const action of ['pause','end'])el(action).addEventListener('click',()=>{
    const callback=decision?.[action];close();callback?.();
  });
  overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
  return {open(actions){
    const s=copy[getLanguage()]??copy.en;decision=actions;
    for(const id of ['title','description','keep','pause','end'])el(id).textContent=actions[id+'Label']??s[id];
    dialogs.open(overlay,{onDismiss:close,initialFocus:el('keep')});
  }};
}

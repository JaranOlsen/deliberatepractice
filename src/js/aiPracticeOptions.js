import {AI_CREDIT_COSTS} from '../data/aiCredits.js';
export function aiAttemptCredits({inputMode,voices,delivery},selfAwareness=false,clientReplayed=false){return AI_CREDIT_COSTS.assess+(inputMode==='spoken'?AI_CREDIT_COSTS.transcribe+(delivery&&!selfAwareness?AI_CREDIT_COSTS.delivery:0):0)+(voices?AI_CREDIT_COSTS.speech_supervisor+(clientReplayed?0:AI_CREDIT_COSTS.speech_client):0);}
export function createAiOptions({store,getLanguage,allowed,signIn,onChange,getSkill}){
 const node=(tag,text='')=>{const e=document.createElement(tag);e.textContent=text;return e;};
 const element=node('section');element.id='ai-practice-options';element.className='ai-practice-options';
 function render(){
  const no=getLanguage()==='no',value=store.options();element.replaceChildren();
  const row=node('label');row.className='ai-option-toggle';const toggle=node('input');toggle.type='checkbox';toggle.id='ai-enabled';toggle.checked=value.enabled&&allowed();
  row.append(toggle,node('span',no?'KI-tilbakemelding':'AI feedback'));element.append(row);
  toggle.addEventListener('change',()=>{if(toggle.checked&&!allowed()){toggle.checked=false;signIn();return;}store.saveOptions({...value,enabled:toggle.checked});onChange?.();render();});
  if(!value.enabled||!allowed())return;
  const modes=node('div');modes.className='ai-input-mode';modes.setAttribute('role','group');modes.setAttribute('aria-label',no?'Ditt svar':'Your response');
  for(const mode of ['spoken','written']){const b=node('button',no?(mode==='spoken'?'Snakk':'Skriv'):(mode==='spoken'?'Speak':'Write'));b.type='button';b.className='ghost-button';b.dataset.aiInputMode=mode;b.setAttribute('aria-pressed',String(value.inputMode===mode));b.addEventListener('click',()=>{store.saveOptions({...value,inputMode:mode});render();});modes.append(b);}element.append(modes);
  const details=node('details');details.append(node('summary',no?'Valg for KI':'AI options'));
  for(const [key,en,nor] of [['voices','AI client and supervisor voices','KI-stemmer for klient og veileder'],['delivery','Include vocal delivery feedback','Ta med tilbakemelding på fremføringen'],['reviewTranscript','Review transcript before feedback','Se over transkripsjonen før tilbakemelding'],['saveHistory','Save scores and feedback to AI history','Lagre skårer og tilbakemelding i KI-historikken'],['keepWritten','Keep written responses on this device','Behold skriftlige svar på denne enheten']]){
   if(['delivery','reviewTranscript'].includes(key)&&value.inputMode!=='spoken'||key==='delivery'&&getSkill?.()==='therapist-self-awareness')continue;
   const label=node('label');label.className='ai-option-toggle';const input=node('input');input.type='checkbox';input.dataset.aiOption=key;input.checked=value[key];input.addEventListener('change',()=>{store.saveOptions({...value,[key]:input.checked});render();});label.append(input,node('span',no?nor:en));details.append(label);
  }element.append(details);
  details.append(node('p',no?'Svar og opptak sendes til OpenAI. Originalopptaket lagres aldri.':'Responses and recordings go to OpenAI. Original recordings are never stored.'));
  const cost=node('p',`${aiAttemptCredits(value,getSkill?.()==='therapist-self-awareness')} ${no?'kreditter per første forsøk':'credits per first attempt'}`);cost.id='ai-attempt-cost';cost.className='response-hint';element.append(cost);
 }
 return {element,render,selected:()=>store.options().enabled&&allowed(),options:()=>store.options()};
}

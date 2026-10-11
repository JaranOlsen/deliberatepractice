import {AI_CREDIT_COSTS} from '../data/aiCredits.js';
import {deliveryFocus} from '../data/aiDeliveryFocus.js';
export function aiAttemptCredits({inputMode,voices,delivery},selfAwareness=false,clientReplayed=false){return AI_CREDIT_COSTS.assess+(inputMode==='spoken'?AI_CREDIT_COSTS.transcribe+(delivery&&!selfAwareness?AI_CREDIT_COSTS.delivery:0):0)+(voices?AI_CREDIT_COSTS.speech_supervisor+(clientReplayed?0:AI_CREDIT_COSTS.speech_client):0);}
export function createAiOptions({store,getLanguage,allowed,signIn,onChange,getSkill}){
 const node=(tag,text='')=>{const e=document.createElement(tag);e.textContent=text;return e;};
 const element=node('section');element.id='ai-practice-options';element.className='ai-practice-options';
 function render(){
  const expanded=element.querySelector('details')?.open??false;
  const focus=document.activeElement?.closest('#ai-practice-options')?document.activeElement.dataset.aiOption??document.activeElement.dataset.aiInputMode??document.activeElement.id:null;
  const no=getLanguage()==='no',value=store.options();element.replaceChildren();
  const badge=cost=>{const e=node('small',cost?`+${cost} ${no?(cost===1?'kreditt':'kreditter'):(cost===1?'credit':'credits')}`:no?'Gratis':'Free');e.className='ai-option-cost';return e;};
  const row=node('label');row.className='ai-option-toggle';const toggle=node('input');toggle.type='checkbox';toggle.id='ai-enabled';toggle.checked=value.enabled&&allowed();
  row.append(toggle,node('span',no?'KI-tilbakemelding':'AI feedback'),node('small',no?'1 kreditt':'1 credit'));element.append(row);
  toggle.addEventListener('change',()=>{if(toggle.checked&&!allowed()){toggle.checked=false;signIn();return;}store.saveOptions({...value,enabled:toggle.checked});onChange?.();render();});
  if(!value.enabled||!allowed())return;
  const modes=node('div');modes.className='ai-input-mode';modes.setAttribute('role','group');modes.setAttribute('aria-label',no?'Ditt svar':'Your response');
  for(const mode of ['spoken','written']){const b=node('button',no?(mode==='spoken'?'Snakk':'Skriv'):(mode==='spoken'?'Speak':'Write'));if(mode==='spoken')b.append(badge(AI_CREDIT_COSTS.transcribe));b.type='button';b.className='ghost-button';b.dataset.aiInputMode=mode;b.setAttribute('aria-pressed',String(value.inputMode===mode));b.addEventListener('click',()=>{store.saveOptions({...value,inputMode:mode});render();});modes.append(b);}element.append(modes);
  const details=node('details');details.open=expanded;details.append(node('summary',no?'Valg for KI':'AI options'));
  for(const [key,en,nor] of [['voices','AI client and supervisor voices','KI-stemmer for klient og veileder'],['delivery','Include vocal delivery feedback','Ta med tilbakemelding på fremføringen'],['reviewTranscript','Review transcript before feedback','Se over transkripsjonen før tilbakemelding'],['saveHistory','Save scores and feedback to AI history','Lagre skårer og tilbakemelding i KI-historikken'],['keepWritten','Keep written responses on this device','Behold skriftlige svar på denne enheten']]){
   if(['delivery','reviewTranscript'].includes(key)&&value.inputMode!=='spoken'||key==='delivery'&&getSkill?.()==='therapist-self-awareness')continue;
   const label=node('label');label.className='ai-option-toggle';const input=node('input');input.type='checkbox';input.dataset.aiOption=key;input.checked=value[key];input.addEventListener('change',()=>{store.saveOptions({...value,[key]:input.checked});render();});label.append(input,node('span',no?nor:en),badge(key==='voices'?2:key==='delivery'?3:0));details.append(label);
   if(key==='delivery'&&value.delivery)details.append(node('p',deliveryFocus(getSkill?.(),getLanguage()),'response-hint ai-delivery-focus'));
  }element.append(details);
  details.append(node('p',no?'Svar og opptak sendes til OpenAI. Originalopptaket lagres aldri.':'Responses and recordings go to OpenAI. Original recordings are never stored.'));
  const cost=node('p',`${value.voices?(no?'Opptil ':'Up to '):''}${aiAttemptCredits(value,getSkill?.()==='therapist-self-awareness')} ${no?'kreditter per forsøk':'credits per attempt'}`);cost.id='ai-attempt-cost';cost.className='ai-attempt-cost';element.append(cost);
  if(value.voices)element.append(node('p',no?'Avspilling på nytt er gratis.':'Replaying a voice is free.','response-hint'));
  if(focus){const target=[...element.querySelectorAll('input,button')].find(e=>e.dataset.aiOption===focus||e.dataset.aiInputMode===focus||e.id===focus);target?.focus({preventScroll:true});}
 }
 return {element,render,selected:()=>store.options().enabled&&allowed(),options:()=>store.options()};
}

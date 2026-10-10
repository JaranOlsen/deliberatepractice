import {AI_CREDITS_PROTOCOL,AI_CREDIT_COSTS} from '../data/aiCredits.js';
const COPY={en:{title:'AI credits',balance:'{n} credits',included:'{n} included',purchased:'{n} purchased',refresh:'120 included credits refresh {date}.',topup:'Buy more credits',terms:'One-time purchase. Purchased credits do not expire.',admin:'Admin AI access',costs:'Credit costs',assess:'Text feedback',transcribe:'Transcription',delivery:'Vocal delivery feedback',speech:'Generated voice clip',working:'Opening checkout…',error:'Could not open checkout. Try again.',pending:'Payment is still being confirmed. Refresh in a moment.',check:'Refresh balance',success:'Credits added.',cancelled:'Checkout cancelled.',allowance:'120 credits included each month with a subscription.',retry:'Replaying a clip or retrying the same request uses no extra credits.'},
 no:{title:'KI-kreditter',balance:'{n} kreditter',included:'{n} inkludert',purchased:'{n} kjøpt',refresh:'120 inkluderte kreditter fornyes {date}.',topup:'Kjøp flere kreditter',terms:'Engangskjøp. Kjøpte kreditter har ingen utløpsdato.',admin:'KI-tilgang for administrator',costs:'Kredittbruk',assess:'Tilbakemelding på teksten',transcribe:'Transkripsjon',delivery:'Tilbakemelding på fremføringen',speech:'Laget stemmeklipp',working:'Åpner betaling …',error:'Kunne ikke åpne betalingen. Prøv igjen.',pending:'Betalingen bekreftes fortsatt. Oppdater om litt.',check:'Oppdater saldo',success:'Kredittene er lagt til.',cancelled:'Betalingen ble avbrutt.',allowance:'120 kreditter inkludert hver måned med et abonnement.',retry:'Avspilling på nytt eller gjentakelse av samme forespørsel bruker ikke flere kreditter.'}};
export function createAiCreditView({container,api,getUser,getLanguage,refreshAccess}) {
 const node=(tag,text='',className='')=>{const e=document.createElement(tag);e.textContent=text;e.className=className;return e;};
 const element=node('section','','ai-credit-section');element.id='ai-credit-section';container.append(element);element.hidden=true;
 let data=null,busy=false,message='',generation=0,balanceGeneration=0;
 const c=()=>COPY[getLanguage()==='no'?'no':'en'];
 const key=pack=>`dp_credit_checkout_${getUser()?.id}_${pack}`;
 function render() {
  element.replaceChildren();element.hidden=!getUser()||!data?.enabled;if(element.hidden)return;
  element.append(node('h4',c().title));
  if(data.admin){
   element.append(node('p',c().admin,'response-hint'));
   const detail=node('details');detail.append(node('summary',getLanguage()==='no'?'KI-bruk siste 7 dager':'AI usage in the last 7 days'));const stats=node('p');detail.append(stats);
   detail.addEventListener('toggle',async()=>{if(!detail.open)return;const user=getUser()?.id;try{const value=await api.aiUsage();if(user!==getUser()?.id)return;stats.textContent=getLanguage()==='no'?`${value.calls} kall · ${value.failed} feil · ≈ $${value.costUsd.toFixed(2)} (${value.estimatedCalls} estimert; ${value.unknownCostCalls??0} uten pris)`:`${value.calls} calls · ${value.failed} failed · ≈ $${value.costUsd.toFixed(2)} (${value.estimatedCalls} estimated; ${value.unknownCostCalls??0} unpriced)`;}catch{stats.textContent=c().error;}});element.append(detail);return;
  }
  const balance=node('strong',c().balance.replace('{n}',data.balance),'ai-credit-balance');balance.id='ai-credit-balance';element.append(balance);
  if(data.balance>0)element.append(node('p',`${c().included.replace('{n}',data.included)} · ${c().purchased.replace('{n}',data.purchased)}`,'response-hint'));
  element.append(node('p',data.refresh_at?c().refresh.replace('{date}',new Date(data.refresh_at).toLocaleDateString(getLanguage()==='no'?'nb-NO':'en-GB')):c().allowance,'response-hint'));
  if(data.packs.length) {
   const details=node('details','','ai-credit-topups');details.append(node('summary',c().topup));
   const options=node('div','','ai-credit-pack-options');
   for(const pack of data.packs){const b=node('button','','ghost-button');b.type='button';b.dataset.creditPack=pack.key;b.disabled=busy;
    const price=new Intl.NumberFormat(getLanguage()==='no'?'nb-NO':'en-GB',{style:'currency',currency:'NOK',maximumFractionDigits:0}).format(pack.amount/100);
    b.append(node('span',c().balance.replace('{n}',pack.credits)),node('strong',price));b.addEventListener('click',()=>void buy(pack.key));options.append(b);}
   details.append(options,node('p',c().terms,'response-hint'));element.append(details);
  }
  const costs=node('details','','ai-credit-costs');costs.append(node('summary',c().costs));const list=node('dl');
  for(const [name,cost] of [['assess',AI_CREDIT_COSTS.assess],['transcribe',AI_CREDIT_COSTS.transcribe],['delivery',AI_CREDIT_COSTS.delivery],['speech',AI_CREDIT_COSTS.speech_client]]){const row=node('div');row.append(node('dt',c()[name]),node('dd',String(cost)));list.append(row);}costs.append(list,node('p',c().retry,'response-hint'));element.append(costs);
  if(message){const note=node('p',c()[message]||c().error,'form-status');note.setAttribute('role','status');element.append(note);}
  const refresh=node('button',c().check,'ghost-button');refresh.id='ai-credit-refresh';refresh.type='button';refresh.disabled=busy;refresh.addEventListener('click',()=>void refreshBalance());element.append(refresh);
 }
 async function refreshBalance() {
  const user=getUser();if(!user){data=null;render();return;}const current=generation,request=++balanceGeneration;
  try{const result=await api.credits();if(current!==generation||request!==balanceGeneration||getUser()?.id!==user.id)return;if(result.creditsProtocol!==AI_CREDITS_PROTOCOL)throw Error();data=result;render();}
  catch{if(current===generation&&request===balanceGeneration&&!busy){message='error';render();}}
 }
 async function buy(pack) {
  if(busy||!getUser())return;let attempt;
  try{attempt=sessionStorage.getItem(key(pack));}catch{}
  if(!/^[0-9a-f-]{36}$/i.test(attempt||'')){attempt=crypto.randomUUID();try{sessionStorage.setItem(key(pack),attempt);}catch{}}
  const current=++generation;busy=true;message='working';render();
  try{sessionStorage.setItem(`dp_credit_before_${getUser().id}`,data?.latest_purchase??'');}catch{}
  try{const value=await api.creditCheckout({pack,attemptId:attempt,languageId:getLanguage()==='no'?'no':'en'});if(current!==generation)return;
   const url=new URL(value.url);if(url.origin!=='https://checkout.stripe.com')throw Error();window.location.assign(url.href);
  }catch(error){if(current===generation){message=['payment_pending','checkout_pending'].includes(error.message)?'pending':'error';
   if(error.message==='credit_purchase_complete'){try{sessionStorage.removeItem(key(pack));}catch{}message='success';busy=false;await refreshBalance();await refreshAccess();}}}
  finally{if(current===generation){busy=false;render();}}
 }
 async function checkReturn(value) {
  message=value==='success'?'pending':'cancelled';
  if(value==='cancelled'){await refreshBalance();return;}
  const user=getUser();if(!user)return;
  let baseline='';try{baseline=sessionStorage.getItem(`dp_credit_before_${user.id}`)||'';}catch{}
  for(let i=0;i<8;i++){
   await refreshBalance();if(getUser()?.id!==user.id)return;
   if(data?.latest_purchase&&data.latest_purchase!==baseline){message='success';for(const pack of ['small','large'])try{sessionStorage.removeItem(key(pack));}catch{}await refreshAccess();render();return;}
   await new Promise(resolve=>setTimeout(resolve,2500));
  }
  message='pending';render();
 }
 // A balance refresh never touches a different signed-in account's view.
 window.addEventListener('dp-ai-credits-changed',()=>{if(!element.closest('[hidden]'))void refreshBalance();});
 return {element,render,refresh:refreshBalance,checkReturn,reset(){generation++;balanceGeneration++;data=null;message='';busy=false;render();}};
}

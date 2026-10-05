import {node} from './masteryFeedbackUI.js';
export const TOUR_PREFERENCE_KEY='dp_app_tour_v1';
export function tourIsDisabled(storage) {
 try{return JSON.parse((storage??localStorage).getItem(TOUR_PREFERENCE_KEY))?.disabled===true;}catch{return false;}
}
export function saveTourPreference(disabled,storage) {
 try{(storage??localStorage).setItem(TOUR_PREFERENCE_KEY,JSON.stringify({disabled}));return true;}catch{return false;}
}
const copy={
 en:{label:'App tour',close:'Skip tour',back:'Back',next:'Next',finish:'Start practising',off:'Don’t show this again',replay:'Take the app tour',example:'Preview',storage:'This browser could not save your preference.',
 steps:[
  ['Your practice, your pace','Practise with a group on separate devices, share one device, or work individually.','format'],
  ['Meet in a room','One person creates a room and shares its code. Everyone joins on their own device; the host chooses what to practise.','room'],
  ['Choose your focus','Single skill repeats one skill. Mastery practice moves between skills within one case. Choose a case and difficulty.','library'],
  ['Get into role','Choose roles for all 12 items: client, therapist and observer. Extra participants watch. The client reads the background and client voice; everyone marks themselves ready.','roles'],
  ['Respond, hear feedback, retry','The client reads the line. The therapist responds, hears feedback, then tries again. The observer finishes the item; in a pair, the therapist does.','practice'],
  ['Rate the therapist’s skill','Groups and mastery rate each set of three; individual single-skill practice rates the round. The observer rates in groups; pairs and individuals self-assess. Shared-device ratings aren’t saved.','rating'],
  ['See what is changing','Progress shows self and observer ratings separately. Explore skills on the radar, and follow mastery rounds over time. You can replay this tour from Account.','progress']
 ]},
 no:{label:'Omvisning',close:'Hopp over omvisningen',back:'Tilbake',next:'Neste',finish:'Begynn å øve',off:'Ikke vis dette igjen',replay:'Ta omvisningen',example:'Forhåndsvisning',storage:'Nettleseren kunne ikke lagre valget ditt.',
 steps:[
  ['Øv på din måte','Øv i gruppe på hver deres enhet, del én enhet, eller øv individuelt.','format'],
  ['Møt hverandre i et rom','Én person oppretter et rom og deler koden. Alle blir med på sin egen enhet; verten velger hva dere skal øve på.','room'],
  ['Velg fokus','Én ferdighet gir gjentatt øving på samme ferdighet. Mestringsøving veksler mellom ferdigheter i samme kasus. Velg kasus og vanskelighetsgrad.','library'],
  ['Gå inn i rollen','Velg roller for alle 12 utsagn: klient, terapeut og observatør. Flere deltakere følger med. Klienten leser bakgrunnen og klientens stemme; alle markerer seg som klare.','roles'],
  ['Svar, få tilbakemelding, prøv igjen','Klienten leser utsagnet. Terapeuten svarer, får tilbakemelding og prøver igjen. Observatøren avslutter utsagnet; når dere er to, gjør terapeuten det.','practice'],
  ['Vurder terapeutens ferdighet','Grupper og mestringsøving vurderer hvert sett på tre; individuell ferdighetsøving vurderer runden. Observatøren vurderer i grupper; par og enkeltpersoner gjør egenvurdering. Vurderinger på felles enhet lagres ikke.','rating'],
  ['Se hva som endrer seg','Fremgang viser egenvurderinger og observatørvurderinger hver for seg. Utforsk ferdighetsradaren og følg mestringsrundene over tid. Omvisningen finnes også under Konto.','progress']
 ]}
};
function preview(kind,language) {
 const no=language==='no',stage=node('div','',`tour-preview tour-preview--${kind}`);stage.setAttribute('aria-hidden','true');
 const tile=(heading,text)=>{const c=node('div','', 'tour-tile');c.append(node('strong',heading));if(text)c.append(node('span',text));return c;};
 if(kind==='format')stage.append(tile(no?'Gruppe':'Group',no?'Hver sin enhet · én felles enhet':'Separate devices · one shared device'),tile(no?'Individuelt':'Individual',no?'Øv i ditt eget tempo':'Practise at your own pace'));
 if(kind==='room'){
  stage.append(tile(no?'Romkode':'Room code','•••• •••• ••••'));
  const people=node('div','', 'tour-role-row');for(const role of no?['Klient','Terapeut','Observatør']:['Client','Therapist','Observer'])people.append(node('span',role));stage.append(people);
 }
 if(kind==='library')stage.append(tile(no?'Én ferdighet':'Single skill',no?'Empatisk forståelse':'Empathic understanding'),tile(no?'Mestringsøving':'Mastery practice',no?'Sara · Lett':'Sara · Easy'));
 if(kind==='roles'){
  stage.append(tile(no?'Klient · Sara':'Client · Sara',no?'Les bakgrunnen og klientens stemme':'Read the background and client voice'));
  const ready=node('div','', 'tour-ready');ready.textContent=no?'✓ Jeg er klar':'✓ I’m ready';stage.append(ready);
 }
 if(kind==='practice'){
  stage.append(node('blockquote',no?'Kveldene er verst. Jeg venter fortsatt på en melding.':'The evenings are hardest. I’m still waiting for a message.'));
  const workflow=node('div','', 'tour-workflow');for(const step of no?['Klient','Svar','Tilbakemelding','Nytt forsøk']:['Client','Response','Feedback','Retry'])workflow.append(node('span',step));stage.append(workflow);
 }
 if(kind==='rating'){
  stage.append(node('strong',no?'Empatisk forståelse':'Empathic understanding'));
  const scale=node('div','', 'tour-rating-scale');for(let n=1;n<=5;n++)scale.append(node('span',String(n),n===3?'is-selected':''));stage.append(scale);
  stage.append(node('small',no?'1 · Ikke vist ennå    5 · Vist med god ferdighet':'1 · Not yet demonstrated    5 · Skillfully demonstrated'));
 }
 if(kind==='progress'){
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 300 120');
  const ring=radius=>Array.from({length:16},(_,i)=>`${65+Math.sin(i*Math.PI/8)*radius},${60-Math.cos(i*Math.PI/8)*radius}`).join(' ');
  svg.innerHTML=`<polygon points="${ring(46)}" class="tour-radar-grid"/><polygon points="${Array.from({length:16},(_,i)=>{const r=24+Math.sin(i*.8)*12;return `${65+Math.sin(i*Math.PI/8)*r},${60-Math.cos(i*Math.PI/8)*r}`;}).join(' ')}" class="tour-radar-profile"/><path d="M160 100H290M160 20V100" class="tour-radar-grid"/><polyline points="170,84 193,76 215,79 241,52 265,40 285,30" class="tour-trend-line"/>`;
  stage.append(svg);const labels=node('div','', 'tour-progress-labels');labels.append(node('span',no?'Ferdigheter':'Skills'),node('span',no?'Mestring':'Mastery'));stage.append(labels);
 }
 return stage;
}
export function createAppTour({dialogs,getLanguage}) {
 const overlay=node('div','', 'account-overlay is-hidden tour-overlay');overlay.id='app-tour';overlay.hidden=true;
 const panel=node('div','', 'account-modal tour-panel');panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-labelledby','tour-title');panel.setAttribute('aria-describedby','tour-description');
 overlay.append(panel);document.body.append(overlay);
 let index=0,language='en';
 function close(){dialogs.close(overlay);}
 function render(){
  const s=copy[language],step=s.steps[index];panel.replaceChildren();
  const top=node('div','', 'tour-top');top.append(node('span',s.label,'resume-eyebrow'));
  const lang=node('select');lang.setAttribute('aria-label',language==='no'?'Språk for omvisningen':'Tour language');
  for(const [value,text] of [['en','English'],['no','Norsk']]){const option=node('option',text);option.value=value;lang.append(option);}lang.value=language;lang.addEventListener('change',()=>{language=lang.value;render();panel.querySelector('select').focus();});
  const skip=node('button','×','glossary-close');skip.type='button';skip.id='tour-skip';skip.setAttribute('aria-label',s.close);skip.addEventListener('click',close);top.append(lang,skip);panel.append(top);
  const progress=node('div','', 'tour-steps');progress.setAttribute('aria-label',`${index+1} / ${s.steps.length}`);
  for(let n=0;n<s.steps.length;n++)progress.append(node('span','',n===index?'is-current':n<index?'is-done':''));panel.append(progress);
  const content=node('div','', 'tour-content');const heading=node('h2',step[0]);heading.id='tour-title';heading.tabIndex=-1;
  const description=node('p',step[1]);description.id='tour-description';content.append(heading,node('span',s.example,'tour-preview-label'),preview(step[2],language),description);panel.append(content);
  const preference=node('label','', 'tour-preference');const check=node('input');check.type='checkbox';check.id='tour-disable';check.checked=tourIsDisabled();preference.append(check,node('span',s.off));panel.append(preference);
  const status=node('p','', 'form-status');status.setAttribute('role','status');status.hidden=true;panel.append(status);
  check.addEventListener('change',()=>{if(!saveTourPreference(check.checked)){status.hidden=false;status.textContent=s.storage;}});
  const actions=node('div','', 'tour-actions');
  const back=node('button',s.back,'ghost-button');back.type='button';back.id='tour-back';back.disabled=index===0;back.addEventListener('click',()=>{index--;render();});
  const next=node('button',index===s.steps.length-1?s.finish:s.next,'primary-button');next.type='button';next.id='tour-next';next.addEventListener('click',()=>{if(index===s.steps.length-1)close();else{index++;render();}});actions.append(back,next);panel.append(actions);
  panel.scrollTop=0;if(!overlay.hidden)heading.focus({preventScroll:true});
 }
 return {
  start({automatic=false}={}){if(automatic&&tourIsDisabled())return;index=0;language=copy[getLanguage()]?getLanguage():'en';render();dialogs.open(overlay,{onDismiss:close,initialFocus:panel.querySelector('h2')});},
  refreshLabel(button){button.textContent=(copy[getLanguage()]??copy.en).replay;}
 };
}

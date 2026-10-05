import {validateMasterySession} from './masteryProtocol.js';
import {EXERCISE_CATALOG, loadMasteryExercise, masteryRoomConfig} from './masteryContent.js';
import {submitMasteryRating, getMasteryCapabilities} from './backend.js';
import {createGroupWorkflow, createGroupRoleGuide, createMasteryPracticeHelp} from './groupPracticeUI.js';
import {createMasteryFeedback, node} from './masteryFeedbackUI.js';
import {createLevelChoice, rememberCaseLevel, levelLabel} from './practiceLevels.js';
import {createSkillFeedback} from './skillFeedbackUI.js';

const KEY='dp_mastery_session';
const read=key=>{try{return JSON.parse(localStorage.getItem(key));}catch{return null;}};
const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{}};
const copy={
 en:{title:'Mastery practice',single:'Single skill',choose:'Choose a case',back:'← Library',start:'Start round',ready:'I’m ready',begin:'Start practice',client:'Client',therapist:'Therapist',observer:'Observer',shared:'Shared device',finish:'Finish item · next',finishSet:'Finish item · rate set',pass:'Pass item',rate:'Therapist self-assessment',placeholder:'Choose a rating',save:'Save rating',localSave:'Record rating for this round',saved:'Rating saved',localSaved:'Rating recorded for this round',next:'Continue to next set',done:'Complete round',again:'Choose the next round',pause:'Home',resume:'Resume mastery',clear:'Clear',passed:'Passed items are excluded.',groupRate:'Rate the therapist',discussion:'For discussion only. Not saved to accounts.',derole:'Step out of role. Say your own names and pause.',failed:'Could not save. Your rating is still here; try again.',changed:'This round belongs to another account. Sign back in to save its ratings.',upgrade:'Mastery rooms are not available on this server yet. Individual and shared-device practice are available.',offline:'Could not check room support. Try again.',preparing:'Preparing the round…',room:'Use this in the room',create:'Create group room',local:'Kept for this round on this device. This rating will not appear in account progress.',labels:['Not yet demonstrated','Emerging with guidance','Adequate in parts','Well demonstrated','Skillfully demonstrated']},
 no:{title:'Mestringsøving',single:'Én ferdighet',choose:'Velg et kasus',back:'← Bibliotek',start:'Start runden',ready:'Jeg er klar',begin:'Start øvingen',client:'Klient',therapist:'Terapeut',observer:'Observatør',shared:'Felles enhet',finish:'Fullfør · neste utsagn',finishSet:'Fullfør · vurder settet',pass:'Stå over',rate:'Terapeutens egenvurdering',placeholder:'Velg en vurdering',save:'Lagre vurderingen',localSave:'Registrer vurderingen for runden',saved:'Vurderingen er lagret',localSaved:'Vurderingen er registrert for runden',next:'Fortsett til neste sett',done:'Fullfør runden',again:'Velg neste runde',pause:'Hjem',resume:'Fortsett mestringsøving',clear:'Fjern',passed:'Utsagn dere står over, tas ikke med.',groupRate:'Vurder terapeuten',discussion:'Kun til diskusjon. Lagres ikke i kontoer.',derole:'Gå ut av rollen. Si deres egne navn og ta en pause.',failed:'Kunne ikke lagre. Vurderingen er fortsatt her; prøv igjen.',changed:'Denne runden tilhører en annen konto. Logg inn igjen for å lagre vurderingene.',upgrade:'Mestringsrom er ikke tilgjengelige på denne serveren ennå. Du kan øve individuelt eller på en felles enhet.',offline:'Kunne ikke sjekke romstøtte. Prøv igjen.',preparing:'Forbereder runden …',room:'Bruk dette i rommet',create:'Opprett grupperom',local:'Beholdes for denne runden på enheten. Vurderingen vises ikke i kontoens fremgang.',labels:['Ikke vist ennå','På vei med veiledning','Tilfredsstillende i deler','Godt demonstrert','Svært godt demonstrert']}
};
export function supportsMastery(capability, exercise) {
 return capability?.protocol==='guided-mastery-v1' && capability.exercises?.some(e=>e.id===exercise.id && e.revision===exercise.revision);
}
export const validMasterySession = session => validateMasterySession(session,EXERCISE_CATALOG);
export function createMasteryPractice({getLanguage,getMode,getUser,getRoom,localizeSkill,getStrings,show,home,library,onRoom,onBegin,onProgress,requestHome,theme}) {
 const element=node('section','', 'panel mastery-panel is-hidden');element.id='mastery-practice';element.hidden=true;
 const resumeCard=node('section','', 'resume-card mastery-resume');resumeCard.id='mastery-resume';
 document.getElementById('practice-home').append(resumeCard);
 let exercise=null,session=null,role='client',busy=false,cloud=false,generation=0,variants=[];
 const workflowOpen = new Map();
 const s=()=>copy[session?.languageId ?? getLanguage() ?? 'en'];
 const lang=()=>session?.languageId ?? getLanguage() ?? 'en';
 const shared=()=>session?.practiceMode==='shared';
 const button=(title,action,primary=false,id)=>{
  const b=node('button',title,primary?'primary-button':'ghost-button');b.type='button';if(id)b.id=id;
  b.addEventListener('click',action);return b;
 };
 const persist=()=>{write(KEY,session);refreshResume();};
 function refreshResume() {
  const saved=read(KEY),no=(getLanguage()??saved?.languageId)==='no',strings=copy[no?'no':'en'];
  const valid=validMasterySession(saved);
  resumeCard.hidden=!valid || document.body.dataset.section!=='home';resumeCard.replaceChildren();if(!valid)return;
  resumeCard.append(node('h3',strings.resume),node('p',`${EXERCISE_CATALOG.find(e=>e.id===saved.exerciseId).title[saved.languageId]} · ${saved.index+1}/12`));
  resumeCard.append(button(strings.resume,()=>void resume(),true,'resume-mastery'),button(strings.clear,()=>{write(KEY,null);session=null;refreshResume();}));
 }
 const practiceHelp = () => createMasteryPracticeHelp(lang());
 function workflow() {
  const key = `${session.pair}:${role}`;
  return createGroupWorkflow({language:lang(),pair:session.pair,open:workflowOpen.get(key)??false,onToggle:expanded=>workflowOpen.set(key,expanded)});
 }
 function caseData(){return localizeSkill(lang(),'empathic-understanding',exercise.difficulty).cases.find(c=>c.id===exercise.caseId);}
 function levelChoice() {
  return createLevelChoice({caseData:{...caseData(),supportedLevels:variants.map(e=>e.difficulty)},value:exercise.difficulty,language:lang(),onChange:level=>void choose(variants.find(e=>e.difficulty===level).id)});
 }
 function roleButtons() {
  const tabs=node('div','', 'mastery-role-tabs');tabs.setAttribute('aria-label',s().shared);
  for(const value of session.pair ? ['client','therapist'] : ['client','therapist','observer']){
   const b=button(s()[value],()=>{role=value;render();});b.setAttribute('aria-pressed',String(role===value));tabs.append(b);
  }return tabs;
 }
 function background(body,full=false) {
  const c=caseData(),ui=getStrings(lang());
  const card=full?node('section','', 'case-brief case-brief-screen'):node('details','', 'mastery-background');
  if(!full)card.append(node('summary',ui.roleBriefHeading));
  const identity=node('div','','case-brief-identity');
  identity.append(node('h3',c.label,'case-title'),node('p',c.teaser,'case-teaser'));card.append(identity);
  const facts=node('dl','', 'case-role-list');
  for(const [label,value] of [[c.schemaLabel,c.schema],[ui.corePainLabel,c.corePain],[ui.styleLabel,c.style],[ui.casePracticeEdgeLabel,c.practiceEdge]]){
   const row=node('div','', 'case-role-item');row.append(node('dt',label),node('dd',value));facts.append(row);
  }
  const roleBrief=node('div','','case-brief-section');roleBrief.append(node('h4',ui.roleBriefHeading,'case-section-title'),facts);
  const voice=node('div','','case-voice-section');voice.append(node('h4',ui.clientVoiceHeading,'case-section-title'),node('p',c.voice));
  card.append(roleBrief,voice);body.append(card);
 }
 function prepareRound() {
  const mode=getMode()==='triad'?'shared':'individual';
  session={version:4,exerciseType:'mastery',exerciseId:exercise.id,revision:exercise.revision,caseId:exercise.caseId,difficulty:exercise.difficulty,languageId:getLanguage()??'en',practiceMode:mode,
   roundId:crypto.randomUUID(),ownerId:mode==='shared'?null:getUser()?.id??null,phase:'preparation',index:0,sceneIds:exercise.scenes.map(e=>e.id),completedIds:[],skippedIds:[],ratings:{},draftScore:'',pair:false};
  role='client';render();
 }
 async function choose(id) {
  const current=++generation;busy=true;session=null;
  element.replaceChildren(node('p',s().preparing));show();
  try {
   const result=await loadMasteryExercise(getLanguage()??'en',id);
   if(current!==generation)return;exercise=result;
   const user=getUser();cloud=false;let capability=null;
   if(user && getMode()!=='triad') {try {capability=await getMasteryCapabilities();cloud=supportsMastery(capability,exercise);} catch {/* Downloaded local practice remains usable without a connection. */}}
   if(current!==generation)return;
   variants=EXERCISE_CATALOG.filter(e=>e.caseId===exercise.caseId && (getMode()!=='group'||supportsMastery(capability,e)));
   rememberCaseLevel({id:exercise.caseId,supportedLevels:EXERCISE_CATALOG.filter(e=>e.caseId===exercise.caseId).map(e=>e.difficulty)},exercise.difficulty);
   if(getMode()==='group') {
    const body=node('div');body.append(node('h2',exercise.title),node('p',levelLabel(lang(),exercise.difficulty),'room-case-heading'),practiceHelp());
    theme?.(element,'empathic-understanding',exercise.difficulty);
    const choice=levelChoice();if(choice)body.append(choice);
    background(body,true);
    if(cloud)body.append(button(getRoom?.()?s().room:s().create,()=>void onRoom(masteryRoomConfig(exercise,getLanguage()??'en')),true,'mastery-use-room'));
    else body.append(node('p',s().upgrade,'form-status'));
    body.prepend(button(s().back,library));element.replaceChildren(body);return;
   }
   prepareRound();
  } catch(error) {
   if(current===generation)element.replaceChildren(node('p',error.message,'form-status'),button(getLanguage()==='no'?'Prøv igjen':'Try again',()=>void choose(id),true),button(s().back,library));
  } finally {busy=false;}
 }
 async function resume() {
  const saved=read(KEY);if(!validMasterySession(saved))return;
  const current=++generation;session=saved;show();element.replaceChildren(node('p',s().preparing));
  try {
   exercise=await loadMasteryExercise(saved.languageId,saved.exerciseId,saved.revision);
   cloud=false;
   if(!shared() && getUser()?.id===saved.ownerId && saved.ownerId) {try {cloud=supportsMastery(await getMasteryCapabilities(),exercise);}catch {/* Resume local practice when the account server is unavailable. */}}
   if(current!==generation)return;role='client';onBegin?.(session);render();
  }catch(error){element.replaceChildren(node('p',error.message,'form-status'),button(s().pause,home));}
 }
 function advance(pass) {
  if(busy || session.phase!=='practicing')return;
  const id=exercise.scenes[session.index].id;
  (pass?session.skippedIds:session.completedIds).push(id);session.draftScore='';
  if((session.index+1)%3===0)session.phase='rating';else session.index++;
  persist();render();
 }
 async function save() {
  if(shared() || busy || session.phase!=='rating')return;
  const score=Number(session.draftScore);if(score<1||score>5)return;
  const checkpoint=Math.floor(session.index/3)+1;
  const ids=exercise.scenes.slice((checkpoint-1)*3,checkpoint*3).filter(e=>session.completedIds.includes(e.id)).map(e=>e.id);
  if(!ids.length)return;
  const remote=!shared() && cloud && session.ownerId===getUser()?.id;
  busy=true;render();
  try {
   if(remote)await submitMasteryRating({languageId:lang(),exerciseId:exercise.id,revision:exercise.revision,roundId:session.roundId,setNumber:checkpoint,completedIds:ids,score,practiceMode:session.practiceMode});
   session.ratings[checkpoint]={score,remote,ids};persist();if(remote)onProgress?.();
  }catch{session.error=s().failed;}finally{busy=false;render();}
 }
 function leavePractice() {
  if(busy)return;
  requestHome({pause:()=>{persist();home();},end:()=>{write(KEY,null);session=null;refreshResume();home();}});
 }
 function render() {
  if(!session||!exercise)return;
  const strings=s(),language=lang(),body=node('div','', 'mastery-body');
  const header=node('div','', 'panel-header');header.append(button(session.phase==='preparation'?strings.back:strings.pause,()=>{if(session.phase==='preparation')library();else leavePractice();}),node('h2',strings.title,'panel-title'));body.append(header);
  const levelKey={easy:'difficultyEasy',moderate:'difficultyModerate',hard:'difficultyHard'}[exercise.difficulty];
  body.append(node('p',`${exercise.title} · ${getStrings(language)[levelKey]}`,'room-case-heading'));
  theme?.(element,'empathic-understanding',exercise.difficulty);
  if(shared()&&['preparation','practicing'].includes(session.phase))body.append(roleButtons());
  const actions=node('div','', 'room-actions mastery-actions');
  if(session.phase==='preparation') {
   const choice=levelChoice();if(choice)body.append(choice);
   if(shared()){
    const label=node('label','', 'mastery-pair-choice'),check=node('input');check.type='checkbox';check.checked=session.pair;
    check.addEventListener('change',()=>{session.pair=check.checked;if(session.pair&&role==='observer')role='therapist';render();});
    label.append(check,node('span',language==='no'?'Vi er to':'We’re two'));body.append(label);
   }
   if(!shared()||role==='client')background(body,true);
   body.append(practiceHelp());
   actions.append(button(shared()?(role==='observer'||session.pair&&role==='therapist')?strings.begin:strings.ready:strings.start,()=>{
    if(shared()&&role!=='observer'&&!(session.pair&&role==='therapist')){role=role==='client'?'therapist':'observer';render();return;}
    session.phase='practicing';onBegin?.(session);persist();render();
   },true,'mastery-start'));
  }else if(session.phase==='practicing') {
   const scene=exercise.scenes[session.index],skill=localizeSkill(language,scene.skillId);
   body.append(node('p',`${Math.floor(session.index/3)+1}/4 · ${session.index+1}/12`,'triad-progress'),node('h3',skill.name,'room-practice-heading'),node('p',scene.bridge,'mastery-scene-bridge'));
   if(!shared()||role!=='client')body.append(node('aside',scene.prompt,'individual-guide'));
   if(!shared()||role!=='therapist') {
    const card=node('section','', 'statement-panel');card.append(node('blockquote',scene.text,'statement-text room-statement'));body.append(card);
   }
   if(shared()){
    const guide=createGroupRoleGuide({language,role,pair:session.pair,example:scene.suggestion,id:'mastery-your-part',examplePrefix:'mastery'});body.append(guide);
    if(role==='observer'||session.pair&&role==='therapist') {
     body.append(...(session.pair?[]:[createSkillFeedback({skillId:scene.skillId,language})]),workflow());
     actions.append(button((session.index+1)%3===0?strings.finishSet:strings.finish,()=>advance(false),true,'mastery-finish'),button(strings.pass,()=>advance(true),false,'mastery-pass'));
    }else if(role==='client')background(body);
   }else {
    body.append(createGroupRoleGuide({language,role:'therapist',individual:true,example:scene.suggestion,id:'mastery-your-part',examplePrefix:'mastery'}));
    actions.append(button((session.index+1)%3===0?strings.finishSet:strings.finish,()=>advance(false),true,'mastery-finish'),button(strings.pass,()=>advance(true),false,'mastery-pass'));
   }
  }else {
   const checkpoint=Math.floor(session.index/3)+1,scenes=exercise.scenes.slice((checkpoint-1)*3,checkpoint*3).filter(e=>session.completedIds.includes(e.id));
   const saved=session.ratings?.[checkpoint];
   const ratingTitle=shared()&&!session.pair?strings.groupRate:strings.rate;
   body.append(node('h3',`${ratingTitle} · ${checkpoint}/4`));
   if(shared())body.append(node('p',strings.discussion,'response-hint'));
   if(exercise.scenes.slice((checkpoint-1)*3,checkpoint*3).some(scene=>session.skippedIds.includes(scene.id)))body.append(node('p',strings.passed,'response-hint'));
   if(scenes.length){
    body.append(createMasteryFeedback({language,scenes,skillName:id=>localizeSkill(language,id).name,audience:shared()&&!session.pair?'observer':'self'}));
    const form=node('form');form.id='mastery-rating-form';form.addEventListener('submit',e=>{e.preventDefault();session.error='';void save();});
    const label=node('label',ratingTitle,'sr-only');label.htmlFor='mastery-score';
    const select=node('select');select.id='mastery-score';select.required=true;
    const option=node('option',strings.placeholder);option.value='';select.append(option);
    strings.labels.forEach((title,i)=>{const option=node('option',`${i+1} · ${title}`);option.value=String(i+1);select.append(option);});
    select.value=session.draftScore||saved?.score||'';
    select.addEventListener('change',()=>{session.draftScore=select.value;session.error='';persist();const b=document.getElementById('mastery-save');if(b)b.disabled=busy||!select.value;});
    form.append(label,select);body.append(form);
    if(!shared()){
     const remote=cloud&&session.ownerId===getUser()?.id;
     if(!remote)body.append(node('p',session.ownerId&&session.ownerId!==getUser()?.id?strings.changed:strings.local,'response-hint'));
     const saveButton=button(remote?strings.save:strings.localSave,()=>{},true,'mastery-save');saveButton.type='submit';saveButton.setAttribute('form','mastery-rating-form');saveButton.disabled=busy||!select.value;actions.append(saveButton);
     if(saved)body.append(node('p',`${saved.remote?strings.saved:strings.localSaved} · ${saved.score}/5`,'form-status'));
    }
    if(!shared()&&session.error){const error=node('p',session.error,'form-status');error.setAttribute('role','alert');body.append(error);}
   }
   const next=button(checkpoint===4?strings.done:strings.next,()=>{
    if(busy)return;
    if(shared()&&scenes.length&&session.draftScore){
     session.ratings[checkpoint]={score:Number(session.draftScore),remote:false,ids:scenes.map(scene=>scene.id)};
    }
    if(checkpoint===4){write(KEY,null);session=null;refreshResume();library();return;}
    session.index++;session.phase='practicing';session.draftScore='';session.error='';role=shared()?'client':role;persist();render();
   },true,'mastery-next');
   // A completely passed set requires no score. A practiced set can be left unrated explicitly.
   if(!shared()&&scenes.length&&(!saved||session.draftScore&&Number(session.draftScore)!==saved.score)){next.textContent=language==='no'?'Fortsett uten vurdering':'Continue without rating';next.className='ghost-button';}
   next.disabled=busy;actions.append(next);
   if(checkpoint===4)body.append(node('p',shared()?strings.derole:language==='no'?'Ta en pause før neste runde.':'Pause before your next round.','response-hint'));
  }
  body.append(actions);element.replaceChildren(body);
  const heading=body.querySelector('h3')??body.querySelector('h2');heading.tabIndex=-1;heading.focus({preventScroll:true});window.scrollTo(0,0);
 }
 return {element,resumeCard,choose,resume,refreshResume,hasSession:()=>validMasterySession(read(KEY))};
}

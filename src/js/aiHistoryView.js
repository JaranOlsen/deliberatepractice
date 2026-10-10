import {createAiPracticeApi} from './aiPracticeApi.js';
import {groupAiHistory} from './aiPracticeState.js';
export function createAiHistoryView({container,apiOptions,getUser,getLanguage,localizeSkill}){
 const node=(tag,text='',className='')=>{const e=document.createElement(tag);e.textContent=text;e.className=className;return e;};
 const element=node('details','','ai-history');element.id='ai-history';container.append(element);
 const api=createAiPracticeApi(apiOptions);let data=[],loaded=false,error=false,generation=0;
 async function refresh(){const owner=getUser()?.id;if(!owner)return;const current=++generation;try{const rows=await api.history();if(current!==generation||owner!==getUser()?.id)return;data=groupAiHistory(rows);loaded=true;error=false;}catch{if(current===generation){error=true;}}if(current===generation)render();}
 function render(){
  const no=getLanguage()==='no',open=element.open;element.replaceChildren();element.hidden=!getUser();
  const summary=node('summary',no?'KI-historikk':'AI history');element.append(summary);element.open=open;if(!open)return;
  if(error){const p=node('p',no?'Kunne ikke hente KI-historikken.':'Could not load AI history.');const retry=node('button',no?'Prøv igjen':'Retry','ghost-button');retry.type='button';retry.addEventListener('click',()=>void refresh());element.append(p,retry);return;}
  if(!loaded){element.append(node('p',no?'Henter …':'Loading…'));return;}
  if(!data.length){element.append(node('p',no?'Dine lagrede KI-forsøk vises her.':'Your saved AI attempts will appear here.','response-hint'));return;}
  element.append(node('p',no?'KI-skårer holdes adskilt fra egen- og observatørvurderinger.':'AI scores stay separate from self and observer ratings.','response-hint'));
  for(const round of data.slice(0,30)){
   const skill=localizeSkill(getLanguage(),round.skillId,round.difficulty),caseData=skill.cases.find(c=>c.id===round.caseId),card=node('article','','ai-history-card');
   card.append(node('h5',skill.name),node('p',`${caseData?.label??round.caseId} · ${new Date(round.createdAt).toLocaleDateString(no?'nb-NO':'en-GB')}`,'response-hint'));
   const scores=node('div','','ai-round-scores');
   for(const [label,value,count] of [[no?'Første forsøk':'First attempts',round.summary.firstScore,round.summary.firstCount],[no?'Etter veiledning':'Coached retries',round.summary.retryScore,round.summary.retryCount]]){const box=node('div','','ai-score-card');box.append(node('span',label),node('strong',value===null?'—':`${value.toFixed(1)} / 5`),node('small',`${count} ${no?'vurdert':'rated'}`));scores.append(box);}card.append(scores);
   if(round.strength)card.append(node('p',round.strength));if(round.adjustment)card.append(node('p',round.adjustment,'ai-history-target'));
   const remove=node('button',no?'Slett fra historikken':'Delete from history','ghost-button');remove.type='button';remove.dataset.deleteAiRound=round.id;
   remove.addEventListener('click',async()=>{if(!confirm(no?'Slette denne økten fra KI-historikken?':'Delete this session from AI history?'))return;remove.disabled=true;try{await api.deleteHistory(round.id);await refresh();}catch{error=true;render();}});card.append(remove);element.append(card);
  }
 }
 element.addEventListener('toggle',()=>{if(element.open){render();if(!loaded&&!error)void refresh();}});
 window.addEventListener('dp-ai-credits-changed',()=>{if(element.open&&!element.closest('[hidden]'))void refresh();else loaded=false;});
 return {element,render,refresh,reset(){generation++;data=[];loaded=false;error=false;element.open=false;render();}};
}

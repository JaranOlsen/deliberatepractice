import {summarizeMasteryRounds,masteryProgressByLevel} from './masteryProgress.js';
import {EXERCISE_CATALOG} from './practiceData.js';
import {node} from './masteryFeedbackUI.js';
import {levelLabel} from './practiceLevels.js';
const choices=new WeakMap();
const title=(round,language)=>EXERCISE_CATALOG.find(e=>e.id===round.exerciseId)?.title[language]??round.exerciseId;
const date=(round,language)=>new Date(round.date).toLocaleDateString(language==='no'?'nb-NO':'en-GB',{day:'numeric',month:'short',year:'numeric'});
const svgNode=(tag,attrs={})=>{
 const e=document.createElementNS('http://www.w3.org/2000/svg',tag);
 for(const [key,value] of Object.entries(attrs))e.setAttribute(key,value);return e;
};
function roundCard(round,language) {
 const no=language==='no',card=node('section','',`mastery-round-card radar-series--${round.difficulty}`);
 const header=node('div','', 'mastery-round-heading');
 const identity=node('div');identity.append(node('h5',title(round,language)),node('p',date(round,language),'response-hint'));
 const score=node('strong',round.score.toFixed(1),'mastery-round-score');score.append(node('small','/5'));
 header.append(identity,score);card.append(header);
 const bars=node('div','', 'mastery-set-bars');
 bars.setAttribute('role','list');bars.setAttribute('aria-label',no?'Vurderinger av de fire settene':'Ratings of the four sets');
 for(let n=1;n<=4;n++){
  const rating=round.sets.find(r=>r.set_number===n),bar=node('div','', 'mastery-set-bar');bar.setAttribute('role','listitem');
  bar.setAttribute('aria-label',`${no?'Sett':'Set'} ${n}: ${rating?rating.score+'/5 · '+rating.item_count+(no?' utsagn':' items'):no?'Ikke vurdert':'Not rated'}`);
  const track=node('div','', 'mastery-set-track');
  if(rating){const fill=node('span');fill.style.height=`${rating.score/5*100}%`;track.append(fill);}
  bar.append(node('strong',rating?String(rating.score):'—'),track,node('small',`${no?'Sett':'Set'} ${n}`));bars.append(bar);
 }
 card.append(bars);
 if(round.checkpointCount<4||round.itemCount<12)card.append(node('p',`${round.itemCount}/12 ${no?'utsagn vurdert':'items rated'}`,'response-hint'));
 return card;
}
export function renderMasteryHistory({host,rows,source,language,loading,error,signedIn}) {
 const no=language==='no';host.replaceChildren();host.hidden=!signedIn;
 if(!signedIn)return;
 if(loading){host.append(node('p',no?'Henter fremgang …':'Loading progress…'));return;}
 if(error){host.append(node('p',no?'Kunne ikke hente mestringsvurderingene. Prøv Oppdater.':'Could not load mastery ratings. Try Refresh.'));return;}
 const rounds=summarizeMasteryRounds(rows,source);
 if(!rounds.length){host.append(node('p',no?'Ingen vurderinger av mestringsøving ennå.':'No mastery ratings yet.'));return;}
 const levels=masteryProgressByLevel(rounds);
 let selected=choices.get(host);
 if(!levels.some(l=>l.difficulty===selected&&l.complete.length))selected=levels.find(l=>l.difficulty==='moderate'&&l.complete.length)?.difficulty??levels.find(l=>l.complete.length)?.difficulty??null;
 choices.set(host,selected);
 const picker=node('div','', 'mastery-levels');picker.setAttribute('role','group');picker.setAttribute('aria-label',no?'Vanskelighetsgrad':'Difficulty');
 for(const level of levels){
  const button=node('button','',`mastery-level radar-series--${level.difficulty}`);button.type='button';button.dataset.masteryLevel=level.difficulty;
  button.disabled=!level.complete.length;button.setAttribute('aria-pressed',String(selected===level.difficulty));
  button.append(node('span',levelLabel(language,level.difficulty)),node('strong',level.score===null?'—':level.score.toFixed(1)+'/5'));
  button.addEventListener('click',()=>{choices.set(host,level.difficulty);renderMasteryHistory({host,rows,source,language,loading,error,signedIn});host.querySelector(`[data-mastery-level="${level.difficulty}"]`).focus({preventScroll:true});});
  picker.append(button);
 }
 host.append(picker);
 if(selected){
  host.append(node('p',no?'Snitt av opptil tre siste hele runder på hvert nivå.':'Average of up to three recent complete rounds per level.','mastery-score-note'));
  const plotted=levels.find(l=>l.difficulty===selected).complete.slice(0,12).reverse();
  const section=node('section','',`mastery-trend radar-series--${selected}`);
  section.append(node('h4',no?'Rundene dine':'Your rounds'));
  const svg=svgNode('svg',{viewBox:'0 0 360 180',role:'group','aria-label':no?'Rundevurderinger fra 1 til 5. Velg en runde.':'Round ratings from 1 to 5. Select a round.'});
  for(let score=1;score<=5;score++){
   const y=148-(score-1)*31;
   svg.append(svgNode('line',{x1:28,x2:342,y1:y,y2:y,class:'mastery-trend-grid'}));
   const label=svgNode('text',{x:12,y:y+4,class:'mastery-trend-label'});label.textContent=score;svg.append(label);
  }
  const start=Date.parse(plotted[0].date),end=Date.parse(plotted.at(-1).date);
  const points=plotted.map((round,index)=>({round,x:end===start?plotted.length===1?185:36+298*index/(plotted.length-1):36+298*(Date.parse(round.date)-start)/(end-start),y:148-(round.score-1)*31}));
  if(points.length>1)svg.append(svgNode('polyline',{points:points.map(p=>`${p.x},${p.y}`).join(' '),class:'mastery-trend-line'}));
  const detail=node('div','', 'mastery-selected-round');detail.setAttribute('aria-live','polite');
  const dots=[];
  const select=index=>{
   dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===index)));
   detail.replaceChildren(roundCard(points[index].round,language));
  };
  points.forEach(({round,x,y},index)=>{
   const dot=svgNode('circle',{cx:x,cy:y,r:6,class:'mastery-trend-dot',role:'button',tabindex:'0','aria-label':`${date(round,language)} · ${title(round,language)} · ${round.score.toFixed(1)}/5`});
   dot.addEventListener('click',()=>select(index));
   dot.addEventListener('keydown',event=>{
    if(['Enter',' '].includes(event.key)){event.preventDefault();select(index);}
    if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
     event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?points.length-1:Math.max(0,Math.min(points.length-1,index+(event.key==='ArrowLeft'?-1:1)));
     dots[next].focus();select(next);
    }
   });
   dots.push(dot);svg.append(dot);
  });
  svg.addEventListener('click',event=>{
   if(event.target.closest('.mastery-trend-dot'))return;
   const rect=svg.getBoundingClientRect(),x=(event.clientX-rect.left)*360/rect.width,y=(event.clientY-rect.top)*180/rect.height;
   const nearest=points.map((p,index)=>({index,distance:Math.hypot(p.x-x,p.y-y)})).sort((a,b)=>a.distance-b.distance)[0];select(nearest.index);
  });
  section.append(svg);
  const dates=node('div','', 'mastery-trend-dates');dates.append(node('span',date(plotted[0],language)),node('span',date(plotted.at(-1),language)));section.append(dates);
  section.append(node('p',no?'Trykk på en prikk for å se de fire settene.':'Tap a dot to see the four sets.','mastery-score-note'));
  select(points.length-1);host.append(section,detail);
 }else host.append(node('p',no?'Fullfør en hel runde for å se utviklingen.':'Complete a full round to see your trend.','response-hint'));
 const history=node('details','', 'mastery-round-history');history.append(node('summary',no?'Rundehistorikk':'Round history'));
 const list=node('ol','', 'mastery-history-list');
 for(const round of rounds.slice(0,12)){
  const item=node('li');item.append(roundCard(round,language));list.append(item);
 }
 history.append(list);host.append(history);
}

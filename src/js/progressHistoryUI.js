import {validRatings, ratingLevel, groupRatingHistory, practiceSuggestion} from './practiceProgress.js';

function node(tag,text,className) {
  const el=document.createElement(tag); if(text)el.textContent=text;if(className)el.className=className;return el;
}
const template=(s,values)=>Object.entries(values).reduce((text,[key,value])=>text.replaceAll(`{${key}}`,String(value)),s);
const levelName=(s,level)=>level==='unspecified'?s.progressLevelUnspecified:s[`difficulty${level[0].toUpperCase()}${level.slice(1)}`];
function dateLabel(rating,locale) {
  const time=Date.parse(rating.created_at);
  return Number.isFinite(time)?new Intl.DateTimeFormat(locale,{day:'numeric',month:'short',year:'numeric'}).format(time):'—';
}
function practiceButton(skillId,{strings,skillName,practice,disabled}) {
  const button=node('button',strings.progressPractice,'ghost-button ghost-button--small');button.type='button';
  button.dataset.practiceSkill=skillId;button.disabled=disabled;button.setAttribute('aria-label',`${strings.progressPractice}: ${skillName(skillId)}`);
  button.addEventListener('click',()=>practice(skillId));return button;
}

export function createProgressSuggestion(options) {
  const {ratings,skillOrder,strings,skillName,loadGoal,isCurrent}=options;
  const root=node('section','', 'progress-suggestion');
  const title=node('h5',strings.progressSuggestion), heading=node('strong'), reason=node('p','', 'response-hint');
  let suggestion=practiceSuggestion(ratings,skillOrder), button;
  const show=()=>{
    heading.textContent=skillName(suggestion.skillId);
    reason.textContent=strings[suggestion.reason==='target'?'progressContinueTarget':suggestion.reason==='new'?'progressTrySkill':'progressRevisit'];
    const focused=button && document.activeElement===button;
    button?.remove();button=practiceButton(suggestion.skillId,options);delete button.dataset.practiceSkill;button.dataset.suggestedSkill=suggestion.skillId;root.append(button);
    if(focused)button.focus({preventScroll:true});
  };
  root.append(title,heading,reason);show();
  // Read only the latest practiced skill's private target, in the current language.
  const latest=validRatings(ratings,skillOrder).find(r=>Number.isFinite(Date.parse(r.created_at)));
  if(latest) loadGoal(latest.skill_id).then(text=>{
    if(!text || !root.isConnected || !isCurrent())return;
    suggestion={skillId:latest.skill_id,reason:'target'};show();
    // The private note is available in preparation; the dashboard needs only its reason.
  }).catch(()=>{});
  return root;
}

function trend(ratings,options) {
  const {strings,locale}=options;
  const points=ratings.filter(r=>Number.isFinite(Date.parse(r.created_at))).slice(0,20).reverse();
  const wrap=node('figure','', 'progress-trend');
  if(!points.length)return wrap;
  const description=template(strings.progressTrend,{count:points.length});
  const caption=node('figcaption',description);
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 320 150');svg.setAttribute('role','img');
  svg.setAttribute('aria-label',description);
  const times=points.map(r=>Date.parse(r.created_at)),from=Math.min(...times),to=Math.max(...times);
  const x=r=>to===from?168:32+(Date.parse(r.created_at)-from)/(to-from)*270;
  const y=r=>120-(Number(r.score)-1)*25;
  let markup='';
  for(let value=1;value<=5;value++)markup+=`<line x1="32" x2="302" y1="${120-(value-1)*25}" y2="${120-(value-1)*25}" class="self-chart-axis"/><text x="12" y="${124-(value-1)*25}" class="progress-trend-label">${value}</text>`;
  svg.innerHTML=markup;
  // Same-level lines only. A harder item is never shown as a regression signal.
  for(const level of ['easy','moderate','hard','unspecified']) {
    const selected=points.filter(r=>ratingLevel(r)===level);if(!selected.length)continue;
    const group=document.createElementNS(svg.namespaceURI,'g');group.setAttribute('class',`radar-series--${level}`);
    const path=document.createElementNS(svg.namespaceURI,'polyline');path.setAttribute('points',selected.map(r=>`${x(r)},${y(r)}`).join(' '));path.setAttribute('class','self-chart-value-line');path.setAttribute('fill','none');group.append(path);
    for(const r of selected) {
      const circle=document.createElementNS(svg.namespaceURI,'circle');circle.setAttribute('cx',x(r));circle.setAttribute('cy',y(r));circle.setAttribute('r','4');circle.setAttribute('class','self-chart-dot');
      const title=document.createElementNS(svg.namespaceURI,'title');title.textContent=`${dateLabel(r,locale)} · ${levelName(strings,level)} · ${r.score}/5`;circle.append(title);group.append(circle);
    }
    svg.append(group);
  }
  const dates=node('div','', 'progress-trend-dates');dates.append(node('span',dateLabel(points[0],locale)),node('span',dateLabel(points.at(-1),locale)));
  const legend=node('div','', 'progress-trend-legend');
  for(const level of [...new Set(points.map(ratingLevel))])legend.append(node('span',levelName(strings,level),`radar-series--${level}`));
  wrap.append(caption,svg,dates,legend);return wrap;
}

export function createProgressHistory(options) {
  const {ratings,skillOrder,strings,locale,skillName,disabled}=options;
  const valid=validRatings(ratings,skillOrder),container=node('section','', 'progress-history');
  container.append(node('h5',strings.progressHistory));
  if(disabled)container.append(node('p',strings.progressFinishFirst,'response-hint'));
  for(const skillId of skillOrder) {
    const selected=valid.filter(r=>r.skill_id===skillId);
    const row=node('article','', 'progress-skill'),details=node('details'),summary=node('summary');
    summary.append(node('span',skillName(skillId)));
    const stats=node('span',selected.length?template(strings.progressSkillStats,{ratings:selected.length,items:selected.reduce((n,r)=>n+(Number(r.item_count)>0?Math.round(r.item_count):1),0)}):strings.progressUnrated,'progress-skill-stats');
    const latest=selected.find(r=>Number.isFinite(Date.parse(r.created_at)));
    const recent=node('span',latest?template(strings.progressLatest,{date:dateLabel(latest,locale),score:latest.score,difficulty:levelName(strings,ratingLevel(latest))}):'','response-hint');
    summary.append(stats,recent);details.append(summary);
    const content=node('div','', 'progress-skill-detail');let built=false;
    details.addEventListener('toggle',()=>{
      if(!details.open || built)return;built=true;
      content.append(trend(selected,options));
      if(!selected.length)content.append(node('p',strings.progressUnrated));
      else {
        const groups=groupRatingHistory(selected,skillOrder),list=node('ol','', 'progress-rating-list');let shown=0;
        const more=node('button',strings.progressMore,'ghost-button');more.type='button';
        const append=()=>{
          for(const group of groups.slice(shown,shown+10)) {
            const item=node('li');
            if(group.roundId)item.append(node('strong',template(strings.progressRoundRatings,{count:new Set(group.ratings.map(r=>r.set_number)).size})));
            for(const r of group.ratings) {
              const line=node('div','', 'progress-rating-row');
              const meta=`${dateLabel(r,locale)} · ${levelName(strings,ratingLevel(r))}`;
              line.append(node('span',r.set_number?template(strings.progressSet,{number:r.set_number})+' · '+meta:meta),node('strong',`${r.score}/5`));
              item.append(line);
            }
            list.append(item);
          }
          shown+=10;more.hidden=shown>=groups.length;
        };
        more.addEventListener('click',append);append();content.append(list,more);
      }
    });
    details.append(content);row.append(details,practiceButton(skillId,options));container.append(row);
  }
  return container;
}

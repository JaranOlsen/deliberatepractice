import {summarizeMasteryRounds} from './masteryProgress.js';
import {EXERCISE_CATALOG} from './practiceData.js';
import {node} from './masteryFeedbackUI.js';
import {levelLabel} from './practiceLevels.js';
export function renderMasteryHistory({host,rows,source,language,loading,error,signedIn}) {
 const no=language==='no';host.replaceChildren();host.hidden=!signedIn;
 if(!signedIn)return;
 host.append(node('h4',no?'Siste runder':'Recent rounds'));
 host.append(node('p',no?'Gjennomsnittet vektes etter antall vurderte utsagn.':'Round averages are weighted by the number of rated items.','response-hint'));
 if(loading){host.append(node('p',no?'Henter historikk …':'Loading history…'));return;}
 if(error){host.append(node('p',no?'Kunne ikke hente mestringshistorikken. Prøv Oppdater.':'Could not load mastery history. Try Refresh.'));return;}
 const rounds=summarizeMasteryRounds(rows,source);
 if(!rounds.length){host.append(node('p',no?'Ingen vurderinger av mestrings- eller oppgaveøving ennå.':'No mastery or task ratings yet.'));return;}
 const list=node('ol','', 'mastery-history-list');
 for(const round of rounds.slice(0,12)){
  const entry=node('li'),meta=EXERCISE_CATALOG.find(e=>e.id===round.exerciseId),task=round.sets[0]?.exercise_format==='task-episodes';
  entry.append(node('strong',meta?.title[language]??round.exerciseId));
  entry.append(node('p',`${new Date(round.date).toLocaleDateString(no?'nb-NO':'en-GB')} · ${levelLabel(language,round.difficulty)} · ${round.languageId==='no'?'Norsk':'English'}`,'response-hint'));
  entry.append(node('p',`${no?'Snitt':'Average'} ${round.score.toFixed(1)}/5 · ${round.checkpointCount}/4 ${task?no?'vurderte episoder':'rated episodes':no?'vurderte sett':'rated sets'} · ${round.itemCount}/12 ${no?'utsagn vurdert':'items rated'}`));
  const checkpoints=node('div','', 'mastery-checkpoints');
  for(let n=1;n<=4;n++){const rating=round.sets.find(r=>r.set_number===n);checkpoints.append(node('span',`${n}: ${rating?rating.score+'/5':'—'}`));}
  entry.append(checkpoints);list.append(entry);
 }host.append(list);
}

import {AI_PROTOCOL,AI_SKILLS,summarizeAiRound} from './aiPracticeProtocol.js';
const UUID=/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
export const DEFAULT_AI_OPTIONS=Object.freeze({enabled:false,inputMode:'spoken',voices:true,delivery:true,reviewTranscript:false,saveHistory:true,keepWritten:true});
export function createAiPracticeStore({getOwner,storage,now=Date.now}) {
 if(storage===undefined){try{storage=globalThis.localStorage;}catch{storage=null;}}
 const key=()=>`dp_ai_round_v2:${getOwner()??'anonymous'}`,optionsKey=()=>`dp_ai_options_v1:${getOwner()??'anonymous'}`;
 const safeRead=k=>{try{return JSON.parse(storage.getItem(k));}catch{return null;}};
 function options(){const raw=safeRead(optionsKey());return {...DEFAULT_AI_OPTIONS,...Object.fromEntries(Object.keys(DEFAULT_AI_OPTIONS).flatMap(k=>k==='inputMode'?['written','spoken'].includes(raw?.[k])?[[k,raw[k]]]:[]:typeof raw?.[k]==='boolean'?[[k,raw[k]]]:[]))};}
 function saveOptions(value){try{storage.setItem(optionsKey(),JSON.stringify(value));}catch{}}
 function save({round,phase,draft,attemptId,attemptText}){
  if(!round||!getOwner())return;
  const includeWritten=round.options?.keepWritten!==false;
  const assessment=value=>value?{...value,text:includeWritten?value.text:undefined,result:{...value.result,evidence:includeWritten?value.result.evidence:[]}}:null;
  const saved={version:2,owner:getOwner(),savedAt:now(),round:{...round,items:round.items.map(item=>({statementId:item.statement.id,skipped:!!item.skipped,transcriptionId:item.transcriptionId,clientSpeechId:item.clientSpeechId,clientSpeechReady:item.clientSpeechReady,first:assessment(item.first),retry:assessment(item.retry)}))},phase,draft:includeWritten?draft:'',attemptId,attemptText:includeWritten?attemptText:null};
  try{storage.setItem(key(),JSON.stringify(saved));}catch{}
 }
 function read(){
  const s=safeRead(key()),r=s?.round;
  if(s?.version!==2||s.owner!==getOwner()||s.savedAt<now()-30*86400000||r?.protocol!==AI_PROTOCOL||!UUID.test(r.roundId??'')||!AI_SKILLS.includes(r.skillId)||!['en','no'].includes(r.languageId)||!['easy','moderate','hard'].includes(r.difficulty)||!/^case-[a-z0-9-]+$/.test(r.caseId??'')||!Number.isInteger(r.index)||r.index<0||r.index>12||r.items?.length!==12||r.items.some(i=>typeof i.statementId!=='string')||!['preparation','attempt','retry','first-feedback','retry-feedback','complete'].includes(s.phase))return null;
  if(r.index===12&&s.phase!=='complete'||typeof s.draft!=='string'||s.draft.length>1600)return null;
  const active=r.items[r.index];if(s.phase==='first-feedback'&&!active?.first||s.phase==='retry-feedback'&&!active?.retry)return null;
  if(r.items.some(i=>['first','retry'].some(k=>i[k]&&(i[k].source!=='ai'&&i[k].source!=='scripted-demo'||!i[k].result||!UUID.test(i[k].attemptId??'')))))return null;
  return s;
 }
 function clear(){try{storage.removeItem(key());}catch{}}
 return {options,saveOptions,save,read,clear};
}
export function groupAiHistory(attempts){
 const groups=new Map();
 for(const a of attempts){if(!a||!UUID.test(a.round_id??'')||!AI_SKILLS.includes(a.skill_id)||!['first','retry'].includes(a.kind))continue;
  const key=[a.round_id,a.skill_id,a.case_id,a.difficulty].join(':');
  if(!groups.has(key))groups.set(key,{id:a.round_id,skillId:a.skill_id,caseId:a.case_id,difficulty:a.difficulty,languageId:a.language_id,createdAt:a.created_at,items:new Map(),strength:'',adjustment:''});
  const g=groups.get(key);if(!g.items.has(a.statement_id))g.items.set(a.statement_id,{skipped:false});
  const item=g.items.get(a.statement_id);if(item[a.kind])continue; // Rows arrive newest first; retain corrected attempts.
  item[a.kind]={source:'ai',result:{assessable:a.assessable,score:a.score}};
  if(!g.strength){g.strength=a.strength;g.adjustment=a.adjustment;}
 }
 return [...groups.values()].map(g=>({...g,summary:summarizeAiRound([...g.items.values()])}));
}

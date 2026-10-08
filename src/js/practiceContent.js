"use strict";
import {BASE_PRACTICE,CASE_ORDER,CONTENT_REVISION} from './practiceData.js';
import {fetchAccountContent} from './backend.js';
const downloads=import.meta.glob('../data/runtime/public-statements/*.json',{query:'?url',import:'default',eager:true});
const loaded=new Map(),pending=new Map();let owner='anonymous',full=false,generation=0;
const keyFor=(language,skill,scope={})=>`${owner}:${scope.roomId||'personal'}:${language}:${skill}`;
export function setContentIdentity(userId,hasFullContent=false){const next=userId||'anonymous';if(owner!==next||full!==hasFullContent){owner=next;full=hasFullContent;generation++;loaded.clear();pending.clear();}}
export function hasPracticeContent(language,skill,scope={}){return loaded.has(keyFor(language,skill,scope));}
export function getPracticeStatements(language,skill,caseId,level,scope={}){
 const entries=loaded.get(keyFor(language,skill,scope))?.[caseId]||[],meta=BASE_PRACTICE[skill]?.cases[caseId];
 return meta?.supportedLevels.length>1?entries.filter(e=>e.difficulty===(level||meta.difficulty)):entries;
}
export async function loadPracticeContent(language,skill,scope={}){
 const key=keyFor(language,skill,scope);if(loaded.has(key))return;
 if(!BASE_PRACTICE[skill]||!['en','no'].includes(language))throw Error('Unknown practice content');
 if(!pending.has(key)){
  const current=generation;const promise=(async()=>{
   let data;
   if(scope.roomId||full){const response=await fetchAccountContent({kind:'skill',languageId:language,skillId:skill,...(scope.roomId?{roomId:scope.roomId}:{})});if(response.revision!==CONTENT_REVISION)throw Error('Content changed');data=response.bank;}
   else {const url=downloads[`../data/runtime/public-statements/${language}-${skill}.json`];if(!url)throw Error('Unknown practice content');const response=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('Content unavailable');data=await response.json();}
   if(!data||typeof data!=='object')throw Error('Incomplete practice content');
   for(const [caseId,entries] of Object.entries(data)){
    const meta=BASE_PRACTICE[skill].cases[caseId];
    if(!CASE_ORDER[skill].includes(caseId)||!meta||!Array.isArray(entries)||!entries.length||entries.length>meta.statementCount
     ||entries.some(e=>typeof e.id!=='string'||typeof e.text!=='string'||typeof e.suggestion!=='string'||typeof e.track!=='string'||e.revision!==CONTENT_REVISION||!Array.isArray(e.criteriaTags)))throw Error('Incomplete practice content');
    if(!scope.roomId&&entries.length!==meta.statementCount)throw Error('Incomplete practice content');
    if(meta.supportedLevels.length>1&&entries.some(e=>!meta.supportedLevels.includes(e.difficulty)))throw Error('Incomplete practice level');
   }
   if(!scope.roomId)for(const caseId of CASE_ORDER[skill])if((full||BASE_PRACTICE[skill].cases[caseId].tier!=='pro')&&!data[caseId])throw Error('Incomplete practice content');
   if(current!==generation)throw Error('Account changed');loaded.set(key,data);
  })();pending.set(key,promise);
 }
 const promise=pending.get(key);try{await promise;}finally{if(pending.get(key)===promise)pending.delete(key);}
}

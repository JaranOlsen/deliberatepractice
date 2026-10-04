export function validateMasterySession(session, catalog) {
 const meta=catalog.find(e=>e.id===session?.exerciseId && e.revision===session?.revision);
 if(!meta || session.version!==4 || session.exerciseType!=='mastery' || !['en','no'].includes(session.languageId)
   || !['individual','shared'].includes(session.practiceMode) || session.caseId!==meta.caseId || session.difficulty!==meta.difficulty
   || !['preparation','practicing','rating'].includes(session.phase) || !Number.isInteger(session.index) || session.index<0 || session.index>11
   || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(session.roundId??'')
   || JSON.stringify(session.sceneIds)!==JSON.stringify(meta.sceneIds)
   || !Array.isArray(session.completedIds) || !Array.isArray(session.skippedIds))return false;
 const resolved=[...session.completedIds,...session.skippedIds];
 if(new Set(resolved).size!==resolved.length || resolved.some(id=>!meta.sceneIds.includes(id)))return false;
 const expectedCount=session.phase==='preparation'?0:session.index+(session.phase==='rating'?1:0);
 return resolved.length===expectedCount && meta.sceneIds.slice(0,expectedCount).every(id=>resolved.includes(id))
   && (session.phase!=='rating' || (session.index+1)%3===0);
}

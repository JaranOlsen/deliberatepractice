export function summarizeMasteryRounds(rows, source) {
 const rounds=new Map();
 for(const row of rows??[]) {
  if(row.source!==source || !row.parent_round_id || !row.exercise_id || !Number.isFinite(Date.parse(row.created_at))
    || !Number.isInteger(row.set_number) || row.set_number<1 || row.set_number>4
    || !Number.isInteger(row.item_count) || row.item_count<1 || row.item_count>3
    || !Number.isInteger(row.score) || row.score<1 || row.score>5)continue;
  const key=[row.parent_round_id,row.source,row.exercise_id,row.content_revision,row.language_id,row.case_id,row.difficulty].join(':');
  if(!rounds.has(key))rounds.set(key,{key,exerciseId:row.exercise_id,caseId:row.case_id,difficulty:row.difficulty,languageId:row.language_id,date:row.created_at,sets:new Map()});
  const round=rounds.get(key),previous=round.sets.get(row.set_number);
  if(!previous||Date.parse(row.created_at)>Date.parse(previous.created_at))round.sets.set(row.set_number,row);
  if(Date.parse(row.created_at)>Date.parse(round.date))round.date=row.created_at;
 }
 return [...rounds.values()].map(round=>{
  const sets=[...round.sets.values()].sort((a,b)=>a.set_number-b.set_number);
  const itemCount=sets.reduce((sum,r)=>sum+r.item_count,0);
  return {...round,sets,itemCount,checkpointCount:sets.length,score:sets.reduce((sum,r)=>sum+r.score*r.item_count,0)/itemCount};
 }).sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));
}

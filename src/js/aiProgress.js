// Normalize only saved, server-assessed AI feedback. Coached retries are a
// separate profile, never additional votes for the independent attempt.
export function aiProgressRatings(attempts,kind='first'){
 if(!['first','retry'].includes(kind))throw Error('Unknown AI attempt kind');
 const seen=new Set(),result=[];
 const ordered=[...attempts].sort((a,b)=>Date.parse(b.created_at)-Date.parse(a.created_at)||String(b.id??b.attempt_id).localeCompare(String(a.id??a.attempt_id)));
 for(const a of ordered){
  if(a.kind!==kind)continue;
  const key=JSON.stringify([a.round_id,a.statement_id,a.skill_id,a.language_id,kind]);if(seen.has(key))continue;seen.add(key);
  if(a.assessable!==true||!Number.isFinite(a.score)||a.score<1||a.score>5)continue;
  result.push({id:a.id??a.attempt_id,source:'ai',language_id:a.language_id,skill_id:a.skill_id,case_id:a.case_id,difficulty:a.difficulty,score:a.score,item_count:1,created_at:a.created_at,practice_mode:'individual-ai',rating_rubric:a.rubric,parent_round_id:a.round_id,set_number:null});
 }
 return result;
}

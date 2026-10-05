export const isTaskExercise = exercise => exercise?.format === 'task-episodes';
export function validTaskStructure(exercise) {
 if(!isTaskExercise(exercise)||!exercise.taskId||exercise.episodes?.length!==4||exercise.scenes?.length!==12)return false;
 const ids=new Set(),episodes=new Set();
 return exercise.episodes.every((episode,n)=>{
  if(!episode.id||episodes.has(episode.id)||episode.turnIds?.length!==3)return false;
  episodes.add(episode.id);
  return episode.turnIds.every((id,i)=>{
   const scene=exercise.scenes[n*3+i];
   if(ids.has(id)||scene?.id!==id||scene.episodeId!==episode.id||scene.episodeNumber!==n+1||scene.turnNumber!==i+1||!['critical','experiencing'].includes(scene.position))return false;
   ids.add(id);return true;
  });
 });
}
export const taskEpisodeAt = (exercise,index) => exercise.episodes[Math.floor(index/3)];
export function passTaskEpisode(session,exercise) {
 const episode=taskEpisodeAt(exercise,session.index),ids=new Set(episode.turnIds);
 return {...session,index:Math.floor(session.index/3)*3+2,phase:'rating',draftScore:'',
  completedIds:session.completedIds.filter(id=>!ids.has(id)),skippedIds:[...session.skippedIds.filter(id=>!ids.has(id)),...episode.turnIds]};
}
export function validTaskProgress(session,exercise) {
 const ids=exercise.sceneIds??exercise.scenes?.map(e=>e.id);
 if(!isTaskExercise(exercise)||exercise.episodes?.length!==4||ids?.length!==12||session.exerciseFormat!=='task-episodes'
  ||JSON.stringify(exercise.episodes.flatMap(e=>e.turnIds))!==JSON.stringify(ids)||exercise.episodes.some(e=>e.turnIds.length!==3)||session.phase==='preparation'&&session.index!==0)return false;
 const finished=Math.floor((session.index+(session.phase==='rating'?1:0))/3);
 return exercise.episodes.slice(0,finished).every(e=>{
  const completed=e.turnIds.filter(id=>session.completedIds.includes(id)).length;
  const skipped=e.turnIds.filter(id=>session.skippedIds.includes(id)).length;
  return completed===3&&skipped===0||completed===0&&skipped===3;
 });
}

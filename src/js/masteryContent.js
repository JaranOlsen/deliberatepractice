import {EXERCISE_CATALOG, CONTENT_REVISION, SKILL_ORDER} from './practiceData.js';
import {fetchAccountContent} from './backend.js';
export {EXERCISE_CATALOG};
const downloads = import.meta.glob('../data/runtime/public-mastery/*.json', {query:'?url', import:'default', eager:true});
const loaded = new Map();
export async function loadMasteryExercise(language, exerciseId, revision = CONTENT_REVISION,scope={}) {
  const meta = EXERCISE_CATALOG.find(e => e.id === exerciseId && e.revision === revision);
  const publicKey = `../data/runtime/public-mastery/${language}-${exerciseId}.json`,key=`${scope.roomId||'personal'}:${publicKey}`;
  if (!meta) throw new Error(language === 'no' ? 'Øvelsen er endret. Oppdater appen for å fortsette.' : 'This exercise has changed. Refresh the app to continue.');
  if (loaded.has(key)) return loaded.get(key);
  let exercise;
  if(downloads[publicKey]){const response=await fetch(downloads[publicKey],{signal:AbortSignal.timeout(20000)});if(!response.ok)throw new Error('Content unavailable');exercise=await response.json();}
  else exercise=(await fetchAccountContent({kind:'mastery',languageId:language,exerciseId,...(scope.roomId?{roomId:scope.roomId}:{})})).exercise;
  if (exercise.revision !== revision || exercise.scenes?.length !== 12 || exercise.caseId !== meta.caseId
    || exercise.difficulty !== meta.difficulty || exercise.scenes.some((scene,i) => scene.id !== meta.sceneIds[i]
      || !SKILL_ORDER.includes(scene.skillId) || !Array.isArray(scene.criteriaTags)
      || ['prompt','text','suggestion','bridge'].some(key => typeof scene[key] !== 'string' || !scene[key].trim()))) throw new Error('Incomplete mastery exercise');
  if(downloads[publicKey])loaded.set(key, exercise);return exercise;
}
export function masteryRoomConfig(exercise, languageId) {
  return {exerciseType:'mastery', exerciseId:exercise.id, languageId, caseId:exercise.caseId, difficulty:exercise.difficulty,
    contentRevision:exercise.revision, roundSize:12, preparationProtocol:'ready-v1',
    statements:exercise.scenes.map(({id,skillId,criteriaTags}) => ({id,skillId,criteriaTags}))};
}

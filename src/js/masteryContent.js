import {isTaskExercise,validTaskStructure} from './taskProtocol.js';
import {EXERCISE_CATALOG, CONTENT_REVISION, SKILL_ORDER} from './practiceData.js';
export {EXERCISE_CATALOG};
const downloads = import.meta.glob('../data/runtime/mastery/*.json', {query:'?url', import:'default', eager:true});
const loaded = new Map();
export async function loadMasteryExercise(language, exerciseId, revision = CONTENT_REVISION) {
  const meta = EXERCISE_CATALOG.find(e => e.id === exerciseId && e.revision === revision);
  const key = `../data/runtime/mastery/${language}-${exerciseId}.json`;
  if (!meta || !downloads[key]) throw new Error(language === 'no' ? 'Øvelsen er endret. Oppdater appen for å fortsette.' : 'This exercise has changed. Refresh the app to continue.');
  if (loaded.has(key)) return loaded.get(key);
  const response = await fetch(downloads[key], {signal:AbortSignal.timeout(20000)});
  if (!response.ok) throw new Error(language === 'no' ? 'Kunne ikke hente øvelsen. Prøv igjen.' : 'Could not load this exercise. Try again.');
  const exercise = await response.json();
  if ((exercise.format??'mastery') !== (meta.format??'mastery') || exercise.revision !== revision || exercise.scenes?.length !== 12 || exercise.caseId !== meta.caseId
    || exercise.difficulty !== meta.difficulty || exercise.scenes.some((scene,i) => scene.id !== meta.sceneIds[i]
      || !SKILL_ORDER.includes(scene.skillId) || !Array.isArray(scene.criteriaTags)
      || ['prompt','text','suggestion','bridge'].some(key => typeof scene[key] !== 'string' || !scene[key].trim()))) throw new Error('Incomplete mastery exercise');
  if(isTaskExercise(meta)&&(!validTaskStructure(exercise)||JSON.stringify(exercise.episodes.map(e=>({id:e.id,turnIds:e.turnIds})))!==JSON.stringify(meta.episodes.map(e=>({id:e.id,turnIds:e.turnIds})))||!exercise.guide||!exercise.feedback?.middle||!exercise.feedback?.high))throw new Error('Incomplete task exercise');
  loaded.set(key, exercise); return exercise;
}
export function masteryRoomConfig(exercise, languageId) {
  return {...(isTaskExercise(exercise)?{exerciseFormat:'task-episodes',taskProtocol:'task-episodes-v1'}:{}),exerciseType:'mastery', exerciseId:exercise.id, languageId, caseId:exercise.caseId, difficulty:exercise.difficulty,
    contentRevision:exercise.revision, roundSize:12, preparationProtocol:'ready-v1',
    statements:exercise.scenes.map(({id,skillId,criteriaTags}) => ({id,skillId,criteriaTags}))};
}

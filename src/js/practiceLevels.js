const KEY = 'dp_case_levels_v1';
const labels = {en:{easy:'Easy',moderate:'Moderate',hard:'Hard'},no:{easy:'Lett',moderate:'Moderat',hard:'Vanskelig'}};
function preferences() {try {return JSON.parse(localStorage.getItem(KEY)) ?? {};} catch {return {};}}
export function resolveCaseLevel(meta, requested, saved = {}) {
  const levels = meta.supportedLevels ?? [meta.difficulty];
  return levels.includes(requested) ? requested : levels.includes(saved[meta.id]) ? saved[meta.id] : levels[0];
}
export const preferredCaseLevel = (meta, requested) => resolveCaseLevel(meta, requested, preferences());
export function rememberCaseLevel(meta, level) {
  if (!(meta.supportedLevels ?? [meta.difficulty]).includes(level)) return;
  try {localStorage.setItem(KEY, JSON.stringify({...preferences(), [meta.id]:level}));} catch {/* Practice works when storage is unavailable. */}
}
export const levelLabel = (language, level) => labels[language]?.[level] ?? labels.en[level];
export function createLevelChoice({caseData, value, language, onChange}) {
  if (caseData.supportedLevels.length < 2) return null;
  const host=document.createElement('fieldset');host.className='practice-level-choice';
  const legend=document.createElement('legend');legend.textContent=language==='no'?'Øvingsnivå':'Practice level';host.append(legend);
  const options=document.createElement('div');options.className='practice-level-options';
  for (const level of caseData.supportedLevels) {
    const button=document.createElement('button');button.type='button';button.textContent=levelLabel(language,level);
    button.dataset.practiceLevel=level;button.setAttribute('aria-pressed',String(level===value));
    button.addEventListener('click',()=>{if(level!==value)onChange(level);});options.append(button);
  }
  host.append(options);return host;
}

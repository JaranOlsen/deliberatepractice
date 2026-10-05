import {TASK_EXERCISES} from '../src/data/taskExercises.js';
import {FOCUSED_CONTENT_COMPATIBILITY} from "../src/data/contentCompatibility.js";
import {MASTERY_EXERCISES} from "../src/data/masteryExercises.js";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  BASE_PRACTICE, SKILL_ORDER, CASE_ORDER, CONTENT_REVISION, CONTENT_UPDATED_AT,
  LANGUAGE_ORDER, LANGUAGE_METADATA, LANGUAGE_UI, LANGUAGE_OVERRIDES,
  CASE_FORMULATION_TRANSLATIONS, STATEMENT_TRANSLATIONS, STATEMENT_TRANSLATION_REVISION,
  GLOSSARY
} from '../src/data/index.js';

const output = new URL('../src/data/runtime/', import.meta.url);
const pick = (value, keys) => Object.fromEntries(keys.map(key => [key, value[key]]));
const caseFields = ['id', 'label', 'difficulty', 'difficultyLabel', 'tier', 'teaser',
  'supportedLevels', 'history', 'schema', 'schemaLabel', 'corePain', 'practiceEdge', 'style', 'voice'];
const statementFields = ['id', 'track', 'revision', 'criteriaTags', 'text', 'suggestion'];
const skills = {};
const cases = {};
const statementCounts = {};
for (const skillId of SKILL_ORDER) {
  const { cases: skillCases, ...skill } = BASE_PRACTICE[skillId];
  skills[skillId] = skill;
  statementCounts[skillId] = {};
  for (const caseId of CASE_ORDER[skillId]) {
    cases[caseId] = pick(skillCases[caseId], caseFields);
    statementCounts[skillId][caseId] = skillCases[caseId].statements.length;
  }
}

// Case descriptions are repeated under every skill in the editorial source.
// Share identical descriptions, retaining any skill-specific differences.
const caseOverrides = {};
const skillOverrides = {};
for (const language of LANGUAGE_ORDER) {
  caseOverrides[language] = {};
  skillOverrides[language] = {};
  for (const skillId of SKILL_ORDER) {
    const { cases: overrides = {}, ...skill } = LANGUAGE_OVERRIDES[language]?.[skillId] ?? {};
    const differences = {};
    for (const [caseId, value] of Object.entries(overrides)) {
      caseOverrides[language][caseId] ??= value;
      if (JSON.stringify(value) !== JSON.stringify(caseOverrides[language][caseId])) differences[caseId] = value;
    }
    skillOverrides[language][skillId] = Object.keys(differences).length ? {...skill, cases: differences} : skill;
  }
}

const artifacts = new Map([['manifest.json', {
  SKILL_ORDER, CASE_ORDER, CONTENT_REVISION, CONTENT_UPDATED_AT,
  FOCUSED_CONTENT_COMPATIBILITY,
  EXERCISE_CATALOG: [...MASTERY_EXERCISES,...TASK_EXERCISES].map(({scenes, ...exercise}) => ({...exercise, sceneIds: scenes.map(scene => scene.id)})),
  LANGUAGE_ORDER, LANGUAGE_METADATA, LANGUAGE_UI, GLOSSARY,
  CASE_FORMULATION_TRANSLATIONS, CASE_OVERRIDES: caseOverrides,
  LANGUAGE_OVERRIDES: skillOverrides, skills, cases, statementCounts
}]]);
for (const language of LANGUAGE_ORDER) {
  for (const exercise of [...MASTERY_EXERCISES,...TASK_EXERCISES]) artifacts.set(`mastery/${language}-${exercise.id}.json`, {...exercise, title: exercise.title[language], orientation: exercise.orientation[language], ...(exercise.format==='task-episodes'?{guide:exercise.guide[language],feedback:exercise.feedback[language],episodes:exercise.episodes.map(e=>({...e,title:e.title[language]}))}:{}), scenes: exercise.scenes.map(({en, no, ...scene}) => ({...scene, ...({en, no}[language])}))});
  for (const skillId of SKILL_ORDER) {
    const skillCases = {};
    for (const caseId of CASE_ORDER[skillId]) {
      skillCases[caseId] = BASE_PRACTICE[skillId].cases[caseId].statements.map(item => {
        const entry = pick(item, statementFields);
        if (BASE_PRACTICE[skillId].cases[caseId].supportedLevels.length > 1) entry.difficulty = item.difficultyTier;
        const translation = language !== 'en' && item.revision === STATEMENT_TRANSLATION_REVISION
          ? STATEMENT_TRANSLATIONS[language]?.[item.id] : null;
        if (typeof translation === 'string') entry.text = translation;
        else if (translation) {
          if (typeof translation.text === 'string') entry.text = translation.text;
          if (typeof translation.suggestion === 'string') entry.suggestion = translation.suggestion;
        }
        return entry;
      });
    }
    artifacts.set(`statements/${language}-${skillId}.json`, skillCases);
  }
}

let changed = 0;
const stale = [];
for (const [name, data] of artifacts) {
  const target = new URL(name, output);
  const serialized = JSON.stringify(data, null, 2) + '\n';
  const current = existsSync(target) ? readFileSync(target, 'utf8') : null;
  if (current === serialized) continue;
  if (process.argv.includes('--check')) { stale.push(name); continue; }
  mkdirSync(fileURLToPath(new URL('.', target)), {recursive: true});
  writeFileSync(target, serialized);
  changed++;
}
if (stale.length) {
  console.error('Runtime content is stale. Run npm run build:runtime. Files: ' + stale.join(', '));
  process.exitCode = 1;
} else {
  console.log(`Practice runtime: ${artifacts.size} files, ${changed} updated; ${LANGUAGE_ORDER.length} languages, ${SKILL_ORDER.length} skills.`);
}

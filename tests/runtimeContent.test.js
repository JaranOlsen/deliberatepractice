import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  BASE_PRACTICE, SKILL_ORDER, CASE_ORDER, LANGUAGE_ORDER, LANGUAGE_UI,
  LANGUAGE_OVERRIDES, STATEMENT_TRANSLATIONS, STATEMENT_TRANSLATION_REVISION,
  CASE_FORMULATION_TRANSLATIONS, GLOSSARY
} from '../src/data/index.js';

const read = name => JSON.parse(readFileSync(new URL(`../src/data/runtime/${name}`, import.meta.url), 'utf8'));
const manifest = read('manifest.json');

test('runtime exercises preserve all English/Norwegian text, stable IDs and rating/report metadata', () => {
  let checked = 0;
  for (const language of LANGUAGE_ORDER) for (const skillId of SKILL_ORDER) {
    const runtime = read(`statements/${language}-${skillId}.json`);
    for (const caseId of CASE_ORDER[skillId]) {
      const source = BASE_PRACTICE[skillId].cases[caseId].statements;
      assert.equal(runtime[caseId].length, source.length);
      for (const [index, item] of source.entries()) {
        const translation = language === 'en' || item.revision !== STATEMENT_TRANSLATION_REVISION
          ? null : STATEMENT_TRANSLATIONS[language]?.[item.id];
        const text = typeof translation === 'string' ? translation : translation?.text ?? item.text;
        const suggestion = typeof translation?.suggestion === 'string' ? translation.suggestion : item.suggestion;
        const actual = runtime[caseId][index];
        assert.deepEqual(actual, {
          id: item.id, track: item.track, revision: item.revision, criteriaTags: item.criteriaTags, text, suggestion,
          ...(BASE_PRACTICE[skillId].cases[caseId].supportedLevels.length>1?{difficulty:item.difficultyTier}:{})
        }, `${language}/${skillId}/${caseId}/${index}`);
        checked++;
      }
    }
  }
  assert.equal(checked, 3456);
});

test('sharing case descriptions preserves library, skill guide, glossary and localized case content', () => {
  assert.deepEqual(manifest.LANGUAGE_UI, LANGUAGE_UI);
  assert.deepEqual(manifest.GLOSSARY, GLOSSARY);
  assert.deepEqual(manifest.CASE_FORMULATION_TRANSLATIONS, CASE_FORMULATION_TRANSLATIONS);
  for (const language of LANGUAGE_ORDER) for (const skillId of SKILL_ORDER) {
    const { cases, ...sourceSkill } = BASE_PRACTICE[skillId];
    assert.deepEqual(manifest.skills[skillId], sourceSkill);
    const { cases: sourceCases = {}, ...skillOverride } = LANGUAGE_OVERRIDES[language]?.[skillId] ?? {};
    const { cases: runtimeCases = {}, ...runtimeSkillOverride } = manifest.LANGUAGE_OVERRIDES[language][skillId];
    assert.deepEqual(runtimeSkillOverride, skillOverride);
    for (const caseId of CASE_ORDER[skillId]) {
      const original = cases[caseId];
      for (const [key, value] of Object.entries(manifest.cases[caseId])) assert.deepEqual(value, original[key]);
      assert.equal(manifest.statementCounts[skillId][caseId], original.statements.length);
      assert.deepEqual(runtimeCases[caseId] ?? manifest.CASE_OVERRIDES[language][caseId] ?? {}, sourceCases[caseId] ?? LANGUAGE_OVERRIDES[language]?.[SKILL_ORDER[0]]?.cases?.[caseId] ?? {});
    }
  }
});

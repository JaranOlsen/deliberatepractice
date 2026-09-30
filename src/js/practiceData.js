"use strict";

import manifest from '../data/runtime/manifest.json';

export const {
  SKILL_ORDER, CASE_ORDER, CONTENT_REVISION, CONTENT_UPDATED_AT,
  LANGUAGE_ORDER, LANGUAGE_METADATA, LANGUAGE_UI, LANGUAGE_OVERRIDES,
  CASE_FORMULATION_TRANSLATIONS, CASE_OVERRIDES, GLOSSARY
} = manifest;

// Library metadata is available immediately; exercises are loaded per skill/language.
export const BASE_PRACTICE = Object.fromEntries(SKILL_ORDER.map(skillId => [skillId, {
  ...manifest.skills[skillId],
  cases: Object.fromEntries(CASE_ORDER[skillId].map(caseId => [caseId, {
    ...manifest.cases[caseId], statementCount: manifest.statementCounts[skillId][caseId]
  }]))
}]));

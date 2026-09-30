"use strict";

import { BASE_PRACTICE, CASE_ORDER, CONTENT_REVISION } from './practiceData.js';

const downloads = import.meta.glob('../data/runtime/statements/*.json', {query: '?url', import: 'default', eager: true});
const loaded = new Map();
const pending = new Map();
const keyFor = (languageId, skillId) => `../data/runtime/statements/${languageId}-${skillId}.json`;

export function hasPracticeContent(languageId, skillId) {
  return loaded.has(keyFor(languageId, skillId));
}

export function getPracticeStatements(languageId, skillId, caseId) {
  return loaded.get(keyFor(languageId, skillId))?.[caseId] ?? [];
}

export async function loadPracticeContent(languageId, skillId) {
  const key = keyFor(languageId, skillId);
  if (loaded.has(key)) return;
  if (!downloads[key]) throw new Error('Unknown practice language or skill');
  if (!pending.has(key)) {
    const request = fetch(downloads[key], {signal: AbortSignal.timeout(20000)}).then(async response => {
      if (!response.ok) throw new Error('Practice content unavailable');
      const data = await response.json();
      for (const caseId of CASE_ORDER[skillId]) {
        const entries = data?.[caseId];
        if (!Array.isArray(entries) || entries.length !== BASE_PRACTICE[skillId].cases[caseId].statementCount
          || entries.some(entry => typeof entry?.id !== 'string' || typeof entry.text !== 'string'
            || typeof entry.suggestion !== 'string' || entry.revision !== CONTENT_REVISION
            || typeof entry.track !== 'string' || !Array.isArray(entry.criteriaTags))) {
          throw new Error('Incomplete practice content');
        }
      }
      loaded.set(key, data);
    });
    pending.set(key, request);
  }
  try { await pending.get(key); }
  finally { pending.delete(key); }
}

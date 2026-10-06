import {readFile} from 'node:fs/promises';
import {AI_SKILLS} from '../src/js/aiPracticeProtocol.js';
import {createPilotCatalog} from './aiPracticeCatalog.js';

export async function loadPilotCatalog() {
  const root = new URL('../src/data/runtime/', import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('manifest.json', root), 'utf8'));
  const banks = {};
  for (const languageId of ['en', 'no']) for (const skillId of AI_SKILLS) {
    banks[`${languageId}:${skillId}`] = JSON.parse(await readFile(new URL(`statements/${languageId}-${skillId}.json`, root), 'utf8'));
  }
  return createPilotCatalog(manifest,banks);
}

import {readFile} from 'node:fs/promises';
import {getSkillFeedback} from '../src/data/skillFeedback.js';
import {AI_SKILLS} from '../src/js/aiPracticeProtocol.js';

export async function loadPilotCatalog() {
  const root = new URL('../src/data/runtime/', import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('manifest.json', root), 'utf8'));
  const materials = new Map();
  for (const languageId of ['en', 'no']) for (const skillId of AI_SKILLS) {
    const data = JSON.parse(await readFile(new URL(`statements/${languageId}-${skillId}.json`, root), 'utf8'));
    const statements = new Map();
    for (const caseId of manifest.CASE_ORDER[skillId]) {
      for (const statement of data[caseId]) statements.set(statement.id, {statement, caseId});
    }
    materials.set(`${languageId}:${skillId}`, statements);
  }
  return (languageId, skillId, statementId) => {
    const entry = materials.get(`${languageId}:${skillId}`)?.get(statementId);
    if (!entry) return null;
    const {statement, caseId} = entry;
    const skill = {...manifest.skills[skillId], ...manifest.LANGUAGE_OVERRIDES[languageId]?.[skillId]};
    const caseData = {...manifest.cases[caseId], ...manifest.CASE_OVERRIDES[languageId]?.[caseId]};
    return {revision: statement.revision, skill: {name: skill.name, practiceFocus: skill.practiceFocus, commonMiss: skill.commonMiss, marker: skill.marker, aim: skill.aim},
      case: {id: caseId, name: caseData.label, history: caseData.history, style: caseData.style, corePain: caseData.corePain},
      difficulty: statement.difficulty ?? caseData.difficulty, statement: statement.text,
      feedback: getSkillFeedback(skillId, languageId)};
  };
}

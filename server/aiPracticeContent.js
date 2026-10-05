import {readFile} from 'node:fs/promises';
import {getSkillFeedback} from '../src/data/skillFeedback.js';
import {AI_CASE, AI_SKILLS} from '../src/js/aiPracticeProtocol.js';

export async function loadPilotCatalog() {
  const root = new URL('../src/data/runtime/', import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('manifest.json', root), 'utf8'));
  const materials = new Map();
  for (const languageId of ['en', 'no']) for (const skillId of AI_SKILLS) {
    const data = JSON.parse(await readFile(new URL(`statements/${languageId}-${skillId}.json`, root), 'utf8'));
    materials.set(`${languageId}:${skillId}`, data[AI_CASE]);
  }
  return (languageId, skillId, statementId) => {
    const statement = materials.get(`${languageId}:${skillId}`)?.find(item => item.id === statementId);
    if (!statement) return null;
    const skill = {...manifest.skills[skillId], ...manifest.LANGUAGE_OVERRIDES[languageId]?.[skillId]};
    const caseData = {...manifest.cases[AI_CASE], ...manifest.CASE_OVERRIDES[languageId]?.[AI_CASE]};
    return {revision: statement.revision, skill: {name: skill.name, practiceFocus: skill.practiceFocus, commonMiss: skill.commonMiss},
      case: {name: caseData.label, history: caseData.history}, difficulty: 'easy', statement: statement.text,
      feedback: getSkillFeedback(skillId, languageId)};
  };
}

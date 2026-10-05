import {ARNE_EASY} from './arneEasy.js';
import {ARNE_MODERATE} from './arneModerate.js';
import {ARNE_HARD} from './arneHard.js';
import {ARNE_LEVELS, ARNE_SKILLS} from './arneCase.js';

export const ARNE_BANKS = {easy:ARNE_EASY, moderate:ARNE_MODERATE, hard:ARNE_HARD};
export const arneItemId = (skill, level, index) => `dp_${skill}_case-arne_${level}_${String(index + 1).padStart(2, '0')}`;
export const ARNE_STATEMENTS = Object.fromEntries(ARNE_SKILLS.map(skill => [skill, {
  'case-arne': ARNE_LEVELS.flatMap(level => (ARNE_BANKS[level][skill] ?? []).map(([text, suggestion], index) => ({
    id:arneItemId(skill,level,index), difficulty:level, text, suggestion
  })))
}]));
export const ARNE_TRANSLATIONS = Object.fromEntries(ARNE_SKILLS.flatMap(skill => ARNE_LEVELS.flatMap(level =>
  (ARNE_BANKS[level][skill] ?? []).map((row, index) => [arneItemId(skill,level,index), {text:row[2], suggestion:row[3]}])
)));

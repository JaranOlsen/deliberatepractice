import {NORA_EASY} from './noraEasy.js';
import {NORA_MODERATE} from './noraModerate.js';
import {NORA_HARD} from './noraHard.js';
import {NORA_LEVELS,NORA_SKILLS} from './noraCase.js';
export const NORA_BANKS={easy:NORA_EASY,moderate:NORA_MODERATE,hard:NORA_HARD};
export const noraItemId=(skill,level,index)=>`dp_${skill}_case-nora_${level}_${String(index+1).padStart(2,'0')}`;
export const NORA_STATEMENTS=Object.fromEntries(NORA_SKILLS.map(skill=>[skill,{'case-nora':NORA_LEVELS.flatMap(level=>
 NORA_BANKS[level][skill].map(([text,suggestion],index)=>({id:noraItemId(skill,level,index),difficulty:level,text,suggestion}))
)}]));
export const NORA_TRANSLATIONS=Object.fromEntries(NORA_SKILLS.flatMap(skill=>NORA_LEVELS.flatMap(level=>
 NORA_BANKS[level][skill].map((row,index)=>[noraItemId(skill,level,index),{text:row[2],suggestion:row[3]}])
)));

import {MIA_EASY} from './miaEasy.js';
import {MIA_MODERATE} from './miaModerate.js';
import {MIA_HARD} from './miaHard.js';
import {MIA_LEVELS,MIA_SKILLS} from './miaCase.js';

export const MIA_BANKS={easy:MIA_EASY,moderate:MIA_MODERATE,hard:MIA_HARD};
export const miaItemId=(skill,level,index)=>`dp_${skill}_case-mia_${level}_${String(index+1).padStart(2,'0')}`;
export const MIA_STATEMENTS=Object.fromEntries(MIA_SKILLS.map(skill=>[skill,{'case-mia':MIA_LEVELS.flatMap(level=>
 MIA_BANKS[level][skill].map(([text,suggestion],index)=>({id:miaItemId(skill,level,index),difficulty:level,text,suggestion}))
)}]));
export const MIA_TRANSLATIONS=Object.fromEntries(MIA_SKILLS.flatMap(skill=>MIA_LEVELS.flatMap(level=>
 MIA_BANKS[level][skill].map((row,index)=>[miaItemId(skill,level,index),{text:row[2],suggestion:row[3]}])
)));

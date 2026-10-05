import {MICHAEL_EXTENSIONS} from './fixedCaseExtensions/michael.js';
import {JASON_EXTENSIONS} from './fixedCaseExtensions/jason.js';
import {LAURA_EXTENSIONS} from './fixedCaseExtensions/laura.js';
import {CARLOS_EXTENSIONS} from './fixedCaseExtensions/carlos.js';
import {NINA_EXTENSIONS} from './fixedCaseExtensions/nina.js';
import {AISHA_EXTENSIONS} from './fixedCaseExtensions/aisha.js';
import {DAVID_EXTENSIONS} from './fixedCaseExtensions/david.js';
import {MARCUS_EXTENSIONS} from './fixedCaseExtensions/marcus.js';
export const FIXED_CASE_EXTENSION_BANKS={
 'case-michael':MICHAEL_EXTENSIONS,'case-jason':JASON_EXTENSIONS,'case-laura':LAURA_EXTENSIONS,'case-carlos':CARLOS_EXTENSIONS,
 'case-nina':NINA_EXTENSIONS,'case-aisha':AISHA_EXTENSIONS,'case-david':DAVID_EXTENSIONS,'case-marcus':MARCUS_EXTENSIONS
};
export const fixedExtensionItemId=(skill,caseId,index)=>`dp_${skill}_${caseId}_${String(index+1).padStart(2,'0')}`;
export const FIXED_CASE_EXTENSION_STATEMENTS={};
export const FIXED_CASE_EXTENSION_TRANSLATIONS={};
for(const [caseId,banks] of Object.entries(FIXED_CASE_EXTENSION_BANKS))for(const [skill,rows] of Object.entries(banks)){
 (FIXED_CASE_EXTENSION_STATEMENTS[skill]??={})[caseId]=rows.map(([text,suggestion],index)=>({id:fixedExtensionItemId(skill,caseId,index),text,suggestion}));
 for(const [index,row] of rows.entries())FIXED_CASE_EXTENSION_TRANSLATIONS[fixedExtensionItemId(skill,caseId,index)]={text:row[2],suggestion:row[3]};
}

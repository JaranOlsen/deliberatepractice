import {MASTERY_FEEDBACK} from '../data/masteryFeedback.js';
import {getSkillFeedback} from '../data/skillFeedback.js';
import {feedbackCopy} from './skillFeedbackUI.js';
export function node(tag, text, className) {
  const element=document.createElement(tag); if(text)element.textContent=text;
  if(className)element.className=className; return element;
}
export function createMasteryFeedback({language, scenes, skillName, audience='observer',reference=null}) {
  const s=feedbackCopy(language), content=reference??MASTERY_FEEDBACK[language]??MASTERY_FEEDBACK.en;
  const detail=node('details','', 'skill-feedback-guide mastery-feedback');
  detail.append(node('summary',reference?language==='no'?'Vurder episoden':'Reflect on this episode':language==='no'?'Vurder dette settet':'Reflect on this set'));
  const cues=node('ul');
  for(const cue of audience==='self'?content.selfCues:content.cues)cues.append(node('li',cue));
  detail.append(cues);
  for(const skillId of new Set(reference?[]:scenes.map(scene=>scene.skillId))) {
    const reference=getSkillFeedback(skillId,language);
    detail.append(node('h5',skillName(skillId)));
    const list=node('ul');
    for(const cue of (audience==='self'?reference?.selfCues:reference?.cues)??[])list.append(node('li',cue));
    detail.append(list);
  }
  const anchors=node('dl','', 'skill-feedback-anchors');
  for(const [label,text] of [[s.middle,content.middle],[s.high,content.high]]) {
    const row=node('div');row.append(node('dt',label),node('dd',text));anchors.append(row);
  }
  detail.append(anchors);return detail;
}

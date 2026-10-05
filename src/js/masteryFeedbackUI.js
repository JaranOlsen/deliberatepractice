import {MASTERY_FEEDBACK} from '../data/masteryFeedback.js';
import {getSkillFeedback} from '../data/skillFeedback.js';
import {feedbackCopy} from './skillFeedbackUI.js';
export function node(tag, text, className) {
  const element=document.createElement(tag); if(text)element.textContent=text;
  if(className)element.className=className; return element;
}
export function createMasteryFeedback({language, scenes, skillName, audience='observer'}) {
  const s=feedbackCopy(language), content=MASTERY_FEEDBACK[language]??MASTERY_FEEDBACK.en;
  const detail=node('details','', 'skill-feedback-guide mastery-feedback');
  detail.append(node('summary',language==='no'?'Vurder dette settet':'Reflect on this set'));
  const cues=node('ul');
  for(const cue of audience==='self'?content.selfCues:content.cues)cues.append(node('li',cue));
  detail.append(cues);
  for(const skillId of new Set(scenes.map(scene=>scene.skillId))) {
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

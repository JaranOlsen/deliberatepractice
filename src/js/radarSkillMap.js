// Clockwise from the top: exploring above, supporting below;
// following on the left, process guiding on the right. Boundary skills
// deliberately sit between regions rather than imply four strict categories.
// Self-awareness supports the whole repertoire; its position near following
// and supporting is a display choice, not a client-facing intervention type.
export const RADAR_SKILL_MAP = Object.freeze([
  ['experiential-focusing', 0],
  ['exploratory-questions', 22.5],
  ['empathic-evocations', 45],
  ['empathic-refocusing', 67.5],
  ['marker-recognition-chairwork', 90],
  ['providing-treatment-rationale', 112.5],
  ['alliance-repair', 135],
  ['self-disclosure', 157.5],
  ['closing-after-emotional-work', 180],
  ['therapist-self-awareness', 202.5],
  ['staying-in-contact-intense-affect', 225],
  ['empathic-affirmation-validation', 247.5],
  ['empathic-understanding', 270],
  ['empathic-explorations', 292.5],
  ['consolidating-emotional-change', 315],
  ['empathic-conjectures', 337.5]
].map(([skillId, degrees]) => Object.freeze({skillId, degrees})));

const angles = new Map(RADAR_SKILL_MAP.map(({skillId, degrees}) => [skillId, degrees]));

export const RADAR_REGION_LABELS = {
  en: ['Following · exploring', 'Leading · exploring', 'Following · supporting', 'Leading · supporting'],
  no: ['Følge · utforske', 'Lede · utforske', 'Følge · støtte', 'Lede · støtte']
};

export function radarPoint(skillId, center, radius) {
  const degrees = angles.get(skillId);
  if (degrees === undefined) throw new Error(`Unmapped radar skill: ${skillId}`);
  const angle = (degrees - 90) * Math.PI / 180;
  return {x: center + Math.cos(angle) * radius, y: center + Math.sin(angle) * radius};
}

// Include nulls for unmeasured skills so a line never bridges a missing region.
// Skill IDs, rather than incoming row order, associate scores with positions.
export function radarSeriesPoints(skills, values, center, radius) {
  const bySkill = new Map(skills.map((skill, index) => [skill.skillId, values[index]]));
  return RADAR_SKILL_MAP.map(({skillId}) => {
    const value = bySkill.get(skillId);
    return {skillId, value, point: value?.count > 0
      ? radarPoint(skillId, center, radius * value.average / 5) : null};
  });
}

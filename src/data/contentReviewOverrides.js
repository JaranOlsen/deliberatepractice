"use strict";

import { CANONICAL_SKILL_ORDER, REVIEW_STATUSES, SKILL_EXERCISE_MAP } from "./contentMeta.js";

const CASE_MATRIX_CASE_IDS = Object.freeze([
  "case-sara",
  "case-michael",
  "case-jason",
  "case-laura",
  "case-carlos",
  "case-nina",
  "case-aisha",
  "case-marcus",
  "case-david"
]);

function buildApprovedMeta(reviewPass, reviewFocus) {
  return Object.freeze({
    reviewStatus: REVIEW_STATUSES.APPROVED,
    reviewPass,
    reviewFocus
  });
}

function buildSkillBatchOverrides(skillId, caseIds, itemCount, meta) {
  return Object.fromEntries(
    caseIds.flatMap((caseId) =>
      Array.from({ length: itemCount }, (_, index) => [
        `dp_${skillId}_${caseId}_${String(index + 1).padStart(2, "0")}`,
        meta
      ])
    )
  );
}

const HIGH_RISK_PASS_1 = buildApprovedMeta("2026-03-08-high-risk-pass-1", [
  "safety",
  "eft_fidelity",
  "case_voice"
]);

const THERAPIST_SELF_AWARENESS_PASS_1 = buildApprovedMeta(
  "2026-03-08-therapist-self-awareness-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_UNDERSTANDING_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-understanding-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_AFFIRMATION_VALIDATION_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-affirmation-validation-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EXPLORATORY_QUESTIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-exploratory-questions-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const PROVIDING_TREATMENT_RATIONALE_PASS_1 = buildApprovedMeta(
  "2026-03-08-providing-treatment-rationale-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_EXPLORATIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-explorations-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_EVOCATIONS_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-evocations-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const EMPATHIC_CONJECTURES_PASS_1 = buildApprovedMeta(
  "2026-03-08-empathic-conjectures-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const STAYING_IN_CONTACT_INTENSE_AFFECT_PASS_1 = buildApprovedMeta(
  "2026-03-08-staying-in-contact-intense-affect-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const SELF_DISCLOSURE_PASS_1 = buildApprovedMeta(
  "2026-03-08-self-disclosure-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const MARKER_RECOGNITION_CHAIRWORK_PASS_1 = buildApprovedMeta(
  "2026-03-08-marker-recognition-chairwork-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

const ALLIANCE_REPAIR_PASS_1 = buildApprovedMeta(
  "2026-03-08-alliance-repair-pass-1",
  ["benchmark_alignment", "case_voice", "skill_purity", "translation_check", "safety"]
);

// Internal editorial review of the new bilingual pairs; see the review notes in src/md.
// Keep the earlier passes attached only to their original items 01–10.
const CASE_MATRIX_EXPANSION_PASS = buildApprovedMeta("2026-10-02-case-matrix-expansion", [
  "case_voice", "skill_purity", "translation_check", "safety", "distinct_practice_moment"
]);
const CASE_MATRIX_EXPANSION_RISK_FLAGS = {
  // A social invitation is not a substance-use exercise. Context also catches
  // trauma work whose wording does not contain a keyword such as "flashback".
  "dp_empathic-explorations_case-david_11": [],
  "dp_empathic-affirmation-validation_case-marcus_12": ["trauma"],
  "dp_providing-treatment-rationale_case-marcus_11": ["trauma"],
  "dp_staying-in-contact-intense-affect_case-laura_12": ["trauma"],
  "dp_staying-in-contact-intense-affect_case-marcus_11": ["trauma"],
  "dp_staying-in-contact-intense-affect_case-marcus_12": ["trauma"],
  "dp_marker-recognition-chairwork_case-marcus_11": ["trauma"],
  "dp_marker-recognition-chairwork_case-marcus_12": ["trauma"],
  "dp_alliance-repair_case-marcus_11": ["trauma"]
};
const CASE_MATRIX_EXPANSION_OVERRIDES = Object.fromEntries(
  CANONICAL_SKILL_ORDER.flatMap((skillId) => CASE_MATRIX_CASE_IDS.flatMap((caseId) =>
    [11, 12].map((itemNumber) => {
      const id = `dp_${skillId}_${caseId}_${itemNumber}`;
      return [id, {
        ...CASE_MATRIX_EXPANSION_PASS,
        criteriaTags: [...SKILL_EXERCISE_MAP[skillId].defaultCriteriaTags, "case_matrix_expansion"],
        ...(CASE_MATRIX_EXPANSION_RISK_FLAGS[id] ? {riskFlags: CASE_MATRIX_EXPANSION_RISK_FLAGS[id]} : {})
      }];
    })
  ))
);

// An internal bilingual editorial pass, not independent clinical certification.
// Only changed examples are assigned this pass; existing risk flags are retained.
const CONTENT_PRIORITY_EDITORIAL_PASS = buildApprovedMeta(
  "2026-10-04-consent-validation-awareness-editorial",
  ["skill_purity", "translation_check", "collaboration", "truthful_disclosure"]
);
const CONTENT_PRIORITY_EDITORIAL_OVERRIDES = {
  "dp_marker-recognition-chairwork_case-sara_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-michael_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-michael_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-michael_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-michael_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["substance_use"] },
  "dp_marker-recognition-chairwork_case-laura_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-laura_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["violence"] },
  "dp_marker-recognition-chairwork_case-carlos_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-carlos_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-nina_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-aisha_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-aisha_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-aisha_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-aisha_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-aisha_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-david_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-david_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-david_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-david_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-david_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["sexual_boundary"] },
  "dp_marker-recognition-chairwork_case-marcus_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-marcus_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["trauma"] },
  "dp_marker-recognition-chairwork_case-marcus_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-marcus_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_marker-recognition-chairwork_case-marcus_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-sara_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-sara_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-sara_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-sara_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-sara_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-michael_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-jason_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-laura_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-laura_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-laura_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-laura_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-laura_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-carlos_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-nina_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-aisha_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-david_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_06": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-affirmation-validation_case-marcus_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-sara_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-sara_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-sara_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-sara_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-michael_02": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-michael_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-laura_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-laura_09": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-carlos_07": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-nina_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["culture_religion"] },
  "dp_therapist-self-awareness_case-nina_05": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-nina_08": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-nina_10": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-david_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_therapist-self-awareness_case-david_04": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["sexual_boundary"] },
  "dp_self-disclosure_case-laura_01": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_03": { ...CONTENT_PRIORITY_EDITORIAL_PASS, riskFlags: ["trauma"] }
};

// Internal review of spoken language, skill focus and bilingual meaning.
// Only revised pairs receive this pass; earlier risk flags remain attached.
const CONTENT_SPOKEN_EDITORIAL_PASS = buildApprovedMeta(
  "2026-10-04-spoken-language-skill-focus-editorial",
  ["skill_purity", "translation_check", "spoken_language", "pacing", "honest_rationale"]
);
const CONTENT_SPOKEN_EDITORIAL_OVERRIDES = {
  "dp_empathic-understanding_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-understanding_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_exploratory-questions_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: ["self_harm"] },
  "dp_providing-treatment-rationale_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-explorations_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-evocations_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: ["substance_use"] },
  "dp_empathic-conjectures_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_empathic-conjectures_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: ["sexual_boundary"] },
  "dp_staying-in-contact-intense-affect_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_staying-in-contact-intense-affect_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_self-disclosure_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_01": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_06": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: ["violence"] },
  "dp_empathic-evocations_case-aisha_07": { ...CONTENT_SPOKEN_EDITORIAL_PASS, riskFlags: ["suicide"] },
};

// Completed close reading of rationale and repair across successive editorial passes.
// Only revised pairs get this pass; existing classifications remain except the
// explicitly documented potential self-harm/suicide discussion in Aisha rationale 03.
const CONTENT_RATIONALE_REPAIR_PASS = buildApprovedMeta(
  "2026-10-04-rationale-repair-complete-editorial",
  ["skill_purity", "translation_check", "spoken_language", "collaboration", "safety"]
);
const CONTENT_RATIONALE_REPAIR_OVERRIDES = {
  "dp_providing-treatment-rationale_case-sara_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-sara_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-michael_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-jason_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
  "dp_providing-treatment-rationale_case-laura_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-laura_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["violence"] },
  "dp_providing-treatment-rationale_case-carlos_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-carlos_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-nina_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["suicide","self_harm"] },
  "dp_providing-treatment-rationale_case-aisha_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-aisha_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-david_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["substance_use"] },
  "dp_providing-treatment-rationale_case-marcus_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
  "dp_providing-treatment-rationale_case-marcus_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_providing-treatment-rationale_case-marcus_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-sara_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["substance_use"] },
  "dp_alliance-repair_case-michael_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-michael_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-jason_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
  "dp_alliance-repair_case-laura_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-laura_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["substance_use"] },
  "dp_alliance-repair_case-laura_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-carlos_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["substance_use"] },
  "dp_alliance-repair_case-carlos_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["violence"] },
  "dp_alliance-repair_case-carlos_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-nina_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["sexual_boundary"] },
  "dp_alliance-repair_case-aisha_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-aisha_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_03": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["sexual_boundary"] },
  "dp_alliance-repair_case-david_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-david_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_02": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_04": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_05": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
  "dp_alliance-repair_case-marcus_07": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
  "dp_alliance-repair_case-marcus_08": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_09": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: [] },
  "dp_alliance-repair_case-marcus_10": { ...CONTENT_RATIONALE_REPAIR_PASS, riskFlags: ["trauma"] },
};

export const CONTENT_ITEM_META_OVERRIDES = Object.freeze({
  "dp_therapist-self-awareness_case-laura_04": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-carlos_07": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-aisha_04": HIGH_RISK_PASS_1,
  "dp_therapist-self-awareness_case-marcus_03": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-laura_04": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-carlos_09": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-david_07": HIGH_RISK_PASS_1,
  "dp_empathic-understanding_case-marcus_03": HIGH_RISK_PASS_1,
  "dp_empathic-affirmation-validation_case-marcus_01": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-laura_05": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-david_08": HIGH_RISK_PASS_1,
  "dp_exploratory-questions_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-laura_02": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-carlos_08": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-aisha_01": HIGH_RISK_PASS_1,
  "dp_providing-treatment-rationale_case-marcus_05": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-laura_04": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-david_08": HIGH_RISK_PASS_1,
  "dp_empathic-explorations_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_empathic-evocations_case-david_10": HIGH_RISK_PASS_1,
  "dp_empathic-evocations_case-marcus_04": HIGH_RISK_PASS_1,
  "dp_empathic-conjectures_case-jason_09": HIGH_RISK_PASS_1,
  "dp_empathic-conjectures_case-marcus_07": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-michael_02": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-aisha_02": HIGH_RISK_PASS_1,
  "dp_staying-in-contact-intense-affect_case-marcus_02": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-laura_04": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-aisha_03": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-david_09": HIGH_RISK_PASS_1,
  "dp_self-disclosure_case-marcus_08": HIGH_RISK_PASS_1,
  "dp_alliance-repair_case-marcus_03": HIGH_RISK_PASS_1,
  ...buildSkillBatchOverrides(
    "therapist-self-awareness",
    CASE_MATRIX_CASE_IDS,
    10,
    THERAPIST_SELF_AWARENESS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-understanding",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_UNDERSTANDING_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-affirmation-validation",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_AFFIRMATION_VALIDATION_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "exploratory-questions",
    CASE_MATRIX_CASE_IDS,
    10,
    EXPLORATORY_QUESTIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "providing-treatment-rationale",
    CASE_MATRIX_CASE_IDS,
    10,
    PROVIDING_TREATMENT_RATIONALE_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-explorations",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_EXPLORATIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-evocations",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_EVOCATIONS_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "empathic-conjectures",
    CASE_MATRIX_CASE_IDS,
    10,
    EMPATHIC_CONJECTURES_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "staying-in-contact-intense-affect",
    CASE_MATRIX_CASE_IDS,
    10,
    STAYING_IN_CONTACT_INTENSE_AFFECT_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "self-disclosure",
    CASE_MATRIX_CASE_IDS,
    10,
    SELF_DISCLOSURE_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "marker-recognition-chairwork",
    CASE_MATRIX_CASE_IDS,
    10,
    MARKER_RECOGNITION_CHAIRWORK_PASS_1
  ),
  ...buildSkillBatchOverrides(
    "alliance-repair",
    CASE_MATRIX_CASE_IDS,
    10,
    ALLIANCE_REPAIR_PASS_1
  ),
  ...CASE_MATRIX_EXPANSION_OVERRIDES,
  ...CONTENT_PRIORITY_EDITORIAL_OVERRIDES,
  ...CONTENT_SPOKEN_EDITORIAL_OVERRIDES,
  ...CONTENT_RATIONALE_REPAIR_OVERRIDES
});

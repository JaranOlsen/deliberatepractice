"use strict";

export const PRACTICE_MODES = Object.freeze({
  INDIVIDUAL: "individual",
  GROUP: "group",
  TRIAD: "triad"
});

export const TRIAD_PHASES = Object.freeze({
  FIRST_ATTEMPT: "first_attempt",
  CLIENT_FEEDBACK: "client_feedback",
  OBSERVER_FEEDBACK: "observer_feedback",
  RETRY: "retry",
  ROUND_DEBRIEF: "round_debrief"
});

const VALID_PHASES = new Set(Object.values(TRIAD_PHASES));

export function normalizePracticeMode(value) {
  if (value === PRACTICE_MODES.GROUP) return PRACTICE_MODES.GROUP;
  return value === PRACTICE_MODES.TRIAD ? PRACTICE_MODES.TRIAD : PRACTICE_MODES.INDIVIDUAL;
}

export function normalizeTriadPhase(value) {
  return VALID_PHASES.has(value) ? value : TRIAD_PHASES.FIRST_ATTEMPT;
}

export function normalizeStringIds(value) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value.filter((id) => typeof id === "string" && id.length > 0)));
}

export function normalizeTriadSessionFields(raw, sourceVersion) {
  if (sourceVersion < 2) {
    return {
      practiceMode: PRACTICE_MODES.INDIVIDUAL,
      roundStatementIds: [],
      triadPhase: TRIAD_PHASES.FIRST_ATTEMPT,
      skippedStatementIds: []
    };
  }

  const practiceMode = normalizePracticeMode(raw?.practiceMode);
  return {
    practiceMode,
    roundStatementIds: practiceMode === PRACTICE_MODES.TRIAD
      ? normalizeStringIds(raw?.roundStatementIds)
      : [],
    triadPhase: practiceMode === PRACTICE_MODES.TRIAD
      ? normalizeTriadPhase(raw?.triadPhase)
      : TRIAD_PHASES.FIRST_ATTEMPT,
    skippedStatementIds: practiceMode === PRACTICE_MODES.TRIAD
      ? normalizeStringIds(raw?.skippedStatementIds)
      : []
  };
}

export function sampleTriadStatements(statements, count = 3, random = Math.random) {
  const source = Array.isArray(statements) ? [...statements] : [];
  for (let index = source.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [source[index], source[swapIndex]] = [source[swapIndex], source[index]];
  }
  return source.slice(0, Math.min(Math.max(count, 0), source.length));
}

export function restoreStatementsById(statements, ids) {
  const byId = new Map((statements ?? []).map((statement) => [statement?.id, statement]));
  return normalizeStringIds(ids).map((id) => byId.get(id)).filter(Boolean);
}

export function getNextTriadPhase(phase) {
  switch (normalizeTriadPhase(phase)) {
    case TRIAD_PHASES.FIRST_ATTEMPT:
      return TRIAD_PHASES.CLIENT_FEEDBACK;
    case TRIAD_PHASES.CLIENT_FEEDBACK:
      return TRIAD_PHASES.OBSERVER_FEEDBACK;
    case TRIAD_PHASES.OBSERVER_FEEDBACK:
      return TRIAD_PHASES.RETRY;
    default:
      return TRIAD_PHASES.RETRY;
  }
}

export function canRevealTriadSuggestion(phase) {
  return normalizeTriadPhase(phase) === TRIAD_PHASES.RETRY;
}

export function isTriadRoundFinished(roundStatementIds, completedStatementIds, skippedStatementIds) {
  const resolved = new Set([
    ...normalizeStringIds(completedStatementIds),
    ...normalizeStringIds(skippedStatementIds)
  ]);
  const roundIds = normalizeStringIds(roundStatementIds);
  return roundIds.length > 0 && roundIds.every((id) => resolved.has(id));
}

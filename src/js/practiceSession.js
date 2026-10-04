export const SESSION_VERSION = 4;

// Older builds also stored a fresh case brief after finishing. That is a
// remembered setup, not unfinished practice, and must not produce a Resume card.
export function isResumableSession(session) {
  if (!session?.languageId || !session.skillId || !session.caseId) return false;
  if ([3, SESSION_VERSION].includes(session.version)) return session.status === "active";
  return [1, 2].includes(session.version)
    && (session.view === "statements" || session.completedStatementIds?.length > 0);
}

export function getRoundOutcome(statementIds, completedIds, skippedIds) {
  const round = new Set(statementIds);
  const completed = new Set(completedIds.filter((id) => round.has(id)));
  const skipped = new Set(skippedIds.filter((id) => round.has(id) && !completed.has(id)));
  return { completed: completed.size, skipped: skipped.size, total: round.size };
}

// Stable across pause/resume and retries; each newly started round gets a new ID.
export function getOrCreateRoundId(value, create = () => crypto.randomUUID()) {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
    ? value : create();
}

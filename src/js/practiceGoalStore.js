export function normalizePracticeGoal(text) {
  const normalized = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (normalized.length > 160) throw new Error('Goal exceeds 160 characters');
  return normalized;
}

// Memory only: private notes never enter general browser/session storage or a
// room/rating payload. Account changes invalidate requests as well as the cache.
export function createPracticeGoalStore({read, write, currentUser}) {
  const values = new Map(), loads = new Map(), writes = new Map(), listeners = new Map(), revisions = new Map();
  let generation = 0;
  const key = scope => JSON.stringify([scope.userId, scope.languageId, scope.skillId]);
  const valid = scope => !!scope.userId && currentUser() === scope.userId;
  const notify = k => { for (const listener of listeners.get(k) ?? []) listener(values.get(k) ?? ''); };
  return {
    async load(scope) {
      if (!valid(scope)) return '';
      const k = key(scope), epoch = generation, revision = revisions.get(k) ?? 0;
      if (values.has(k)) return values.get(k);
      if (!loads.has(k)) {
        const pending = Promise.resolve().then(() => read(scope)).then(text => {
          if (epoch !== generation || !valid(scope)) return '';
          // A slow initial read must not overwrite a more recent saved target.
          if (revision === (revisions.get(k) ?? 0)) { values.set(k, text); notify(k); }
          return values.get(k) ?? '';
        }).finally(() => { if (loads.get(k) === pending) loads.delete(k); });
        loads.set(k, pending);
      }
      return loads.get(k);
    },
    async save(scope, text) {
      if (!valid(scope)) throw new Error('Account changed');
      const normalized = normalizePracticeGoal(text), k = key(scope), epoch = generation;
      // Two editors in this page must commit in the order they were submitted.
      const pending = (writes.get(k) ?? Promise.resolve()).catch(() => {}).then(async () => {
        if (epoch !== generation || !valid(scope)) throw new Error('Account changed');
        const result = await write({...scope, text:normalized});
        if (epoch !== generation || !valid(scope)) throw new Error('Account changed');
        revisions.set(k, (revisions.get(k) ?? 0) + 1); values.set(k, result); notify(k);
        return result;
      });
      writes.set(k, pending);
      try { return await pending; } finally { if (writes.get(k) === pending) writes.delete(k); }
    },
    subscribe(scope, listener) {
      const k = key(scope); if (!listeners.has(k)) listeners.set(k, new Set());
      listeners.get(k).add(listener);
      return () => { listeners.get(k)?.delete(listener); if (!listeners.get(k)?.size) listeners.delete(k); };
    },
    reset() { generation++; values.clear(); loads.clear(); writes.clear(); revisions.clear(); for (const k of listeners.keys()) notify(k); }
  };
}

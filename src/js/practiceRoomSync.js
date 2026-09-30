// Durable state, ordered snapshots and idempotent commands. Realtime only wakes
// the poller; its payload never directly changes what a participant sees.
export function createRoomSync({rpc, watch, apply, changed, loadPending, savePending,
  interval = 1500, staleAfter = 12000, now = () => Date.now(), canDisplay = () => true}) {
  let roomId = null;
  let snapshot = null;
  let acknowledged = -1;
  let lastSync = 0;
  let syncing = false;
  let syncingAgain = false;
  let pending = null;
  let commanding = false;
  let generation = 0;
  let timer = null;
  let unwatch = null;
  let error = '';
  let commandError = '';
  let applying = Promise.resolve();
  const status = () => ({snapshot, pending, commanding, error: commandError || error,
    fresh: lastSync > 0 && now() - lastSync < staleAfter});
  const emit = () => changed(status());

  async function applySnapshot(next, epoch) {
    if (!canDisplay() || epoch !== generation || next?.id !== roomId || !Number.isInteger(next.version)
      || (snapshot && next.version < snapshot.version)) return;
    // apply waits for content and paints the role screen before acknowledging it.
    if (!snapshot || next.version > snapshot.version) await apply(next, () => epoch === generation && canDisplay());
    if (!canDisplay() || epoch !== generation || (snapshot && next.version < snapshot.version)) return;
    snapshot = next;
    acknowledged = next.version;
    lastSync = now();
    error = '';
    emit();
  }

  function accept(next, epoch) {
    const task = applying.then(() => applySnapshot(next, epoch));
    applying = task.catch(() => {});
    return task;
  }

  async function sync() {
    if (!roomId || !canDisplay()) return;
    if (syncing) { syncingAgain = true; return; }
    const epoch = generation;
    syncing = true;
    try {
      const sentAcknowledgement = acknowledged;
      await accept(await rpc('sync_practice_room', {
        input_room_id: roomId, input_acknowledged_version: sentAcknowledgement
      }), epoch);
      if (epoch === generation && acknowledged > sentAcknowledgement) syncingAgain = true;
    } catch (failure) {
      if (epoch === generation) { error = failure.message; lastSync = 0; emit(); }
    } finally {
      if (epoch === generation) {
        syncing = false;
        if (syncingAgain) { syncingAgain = false; void sync(); }
      }
    }
  }

  function stop() {
    generation++;
    applying = Promise.resolve();
    clearInterval(timer);
    unwatch?.(); unwatch = null;
    roomId = null; snapshot = null; acknowledged = -1; lastSync = 0;
    syncing = false; syncingAgain = false; commanding = false; pending = null; error = ''; commandError = '';
  }

  async function start(initial) {
    stop();
    roomId = initial.id;
    const epoch = generation;
    pending = loadPending(roomId);
    try { await accept(initial, epoch); }
    catch (failure) { error = failure.message; emit(); }
    if (epoch !== generation) return;
    timer = setInterval(() => { emit(); void sync(); }, interval);
    try {
      const dispose = await watch(roomId, () => { void sync(); });
      if (epoch !== generation) dispose(); else unwatch = dispose;
    } catch { /* Polling still works when WebSockets are unavailable. */ }
    await sync();
  }

  async function command(action, score = null, configuration = null) {
    if (!roomId || commanding || !snapshot) return;
    if (pending && (pending.action !== action || pending.score !== score || JSON.stringify(pending.configuration ?? null) !== JSON.stringify(configuration))) return;
    if (!pending) {
      pending = {id: crypto.randomUUID(), action, score, version: snapshot.version, ...(configuration ? {configuration} : {})};
      savePending(roomId, pending);
    }
    const epoch = generation;
    commanding = true; commandError = ''; emit();
    try {
      const next = await rpc(action === 'prepare' ? 'prepare_practice_room' : 'command_practice_room', {input_room_id: roomId,
        input_command_id: pending.id, input_expected_version: pending.version,
        ...(action === 'prepare' ? {input_config: pending.configuration} : {input_action: pending.action, input_score: pending.score})});
      if (epoch !== generation) return;
      pending = null; savePending(roomId, null);
      if (next?.left) { stop(); changed({...status(), left: true}); return; }
      await accept(next, epoch);
    } catch (failure) {
      if (epoch !== generation) return;
      // A database rejection guarantees that the transaction did not commit.
      // Network errors are ambiguous: retain the exact command UUID for retry.
      if (['P0001', '42501', '22023', '23514', '23502'].includes(failure.code)) {
        pending = null; savePending(roomId, null);
      }
      commandError = failure.message;
    } finally {
      if (epoch === generation) { commanding = false; emit(); void sync(); }
    }
  }
  return {start, stop, sync, command, status};
}

export function roomRole(room, userId) {
  return ['observer', 'therapist', 'client'].find(role => room?.[`${role}_id`] === userId) ?? (userId && room?.member_ids?.includes(userId) ? 'passive' : null);
}

export function roomEveryoneReady(room) {
  if (!room?.therapist_id || !room?.client_id) return false;
  return ['therapist', 'client', ...(room.observer_id ? ['observer'] : [])].every(role => {
    const member = room?.presence?.[room?.[`${role}_id`]];
    return member?.connected && member.acknowledged_version === room.version;
  });
}

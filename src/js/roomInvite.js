const INVITE_KEY = 'dp_group_invite';

export function normalizeRoomCode(value) {
  // Room codes contain twelve hex characters. Accept the separators used in the UI.
  const code = String(value ?? '').trim().replace(/[\s–-]/g, '').toUpperCase();
  return /^[A-F0-9]{12}$/.test(code) ? code : null;
}

export function readRoomInvite(href, storage) {
  const url = new URL(href);
  if (url.searchParams.has('room')) return normalizeRoomCode(url.searchParams.get('room'));
  try { return normalizeRoomCode(JSON.parse(storage?.getItem(INVITE_KEY) ?? 'null')); }
  catch { return null; }
}

export function rememberRoomInvite(code, storage) {
  const normalized = normalizeRoomCode(code);
  try {
    if (normalized) storage?.setItem(INVITE_KEY, JSON.stringify(normalized));
    else storage?.removeItem(INVITE_KEY);
  } catch { /* The callback URL also carries the invitation if storage is unavailable. */ }
  return normalized;
}

export function buildAuthRedirect(href, storage) {
  const current = new URL(href);
  const redirect = new URL(current.pathname, current.origin);
  const code = readRoomInvite(href, storage);
  if (code) redirect.searchParams.set('room', code);
  // Never copy arbitrary queries, auth fragments or a caller-provided redirect URL.
  return redirect.href;
}

import {feedbackCopy} from './skillFeedbackUI.js';
import {getSkillFeedback} from '../data/skillFeedback.js';
import {createPracticeGoalStore, normalizePracticeGoal} from './practiceGoalStore.js';
import {getPracticeGoal, savePracticeGoal} from './backend.js';

let signedInUser = null;
export const practiceGoals = createPracticeGoalStore({
  currentUser: () => signedInUser,
  read: getPracticeGoal,
  write: savePracticeGoal
});
export function setPracticeGoalUser(userId) {
  if (signedInUser === (userId ?? null)) return;
  signedInUser = userId ?? null; practiceGoals.reset();
}

function node(tag, text, className) {
  const el = document.createElement(tag); if (text) el.textContent = text; if (className) el.className = className; return el;
}
export function createPracticeGoalView({userId, languageId, skillId, editable = false, shared = false, id, signIn}) {
  const s = feedbackCopy(languageId), scope = {userId, languageId, skillId};
  const root = node('section', '', 'practice-goal'); if (id) root.id = id;
  let alive = true, loading = false, loaded = false, saving = false, editing = false, dirty = false, value = '';
  const details = shared ? node('details') : null;
  const body = node('div', '', 'practice-goal-body');
  const header = node('div', '', 'practice-goal-header');
  header.append(node('strong', s.next));
  const change = node('button', s.add, 'ghost-button'); change.type = 'button'; change.hidden = !editable; header.append(change);
  const reminder = node('p', '', 'practice-goal-text'); reminder.hidden = true;
  const form = node('form'); form.hidden = true;
  const label = node('label', s.optional), input = node('textarea'); input.rows = 2; input.maxLength = 160;
  input.id = `${id ?? 'goal'}-input`; label.htmlFor = input.id;
  input.placeholder = getSkillFeedback(skillId, languageId)?.target ?? '';
  const hint = node('p', s.privacy, 'response-hint'); hint.id = `${input.id}-hint`; input.setAttribute('aria-describedby', hint.id);
  const actions = node('div', '', 'practice-goal-actions');
  const save = node('button', s.save, 'primary-button'), cancel = node('button', s.cancel, 'ghost-button'), remove = node('button', s.clear, 'ghost-button');
  save.type = 'submit'; cancel.type = remove.type = 'button'; actions.append(save, cancel, remove);
  form.append(label, input, hint, actions);
  const status = node('p', '', 'response-hint'); status.setAttribute('role','status');
  const retry = node('button', s.retry, 'ghost-button'); retry.type = 'button'; retry.hidden = true;
  const copy = node('button', s.copy, 'ghost-button'); copy.type = 'button'; copy.hidden = true;
  const privacy = node('p', s.private, 'response-hint'); privacy.hidden = true;
  body.append(header, reminder, form, privacy, copy, status, retry);
  if (details) { details.append(node('summary', s.next), node('p', s.shared, 'response-hint'), body); root.append(details); }
  else root.append(body);
  const current = () => alive && signedInUser === (userId ?? null);
  function render() {
    if (!current()) { root.hidden = true; root.replaceChildren(); return; }
    root.hidden = !shared && !editable && !value && !loading && loaded;
    change.hidden = !editable || editing || loading || !loaded || !userId;
    change.textContent = value ? s.edit : s.add;
    reminder.hidden = !value || editing; reminder.textContent = value;
    form.hidden = !editing; privacy.hidden = (!value && !editing) || !editable;
    copy.hidden = !value || editing || shared || !editable;
    save.disabled = saving || !dirty || !input.value.trim();
    cancel.disabled = remove.disabled = input.disabled = saving; remove.hidden = !value;
  }
  const unsubscribe = practiceGoals.subscribe(scope, text => {
    if (!current()) { render(); return; }
    value = text; if (!dirty) input.value = text; render();
  });
  async function load() {
    if (!current() || loading || loaded) return;
    if (!userId) { status.textContent = s.signIn; loaded = true; render(); return; }
    loading = true; status.textContent = s.loading; retry.hidden = true; render();
    try { value = await practiceGoals.load(scope); if (!current()) return; loaded = true; input.value = value; status.textContent = ''; }
    catch { if (current()) { status.textContent = s.failed; retry.hidden = false; } }
    finally { if (current()) { loading = false; render(); } }
  }
  input.addEventListener('input', () => { dirty = input.value !== value; render(); });
  change.addEventListener('click', () => { editing = true; dirty = false; input.value = value; status.textContent = ''; render(); input.focus(); });
  cancel.addEventListener('click', () => { editing = false; dirty = false; input.value = value; status.textContent = ''; render(); change.focus(); });
  async function persist(text) {
    if (!current() || saving) return;
    let normalized;
    try { normalized = normalizePracticeGoal(text); } catch { status.textContent = s.tooLong; return; }
    saving = true; status.textContent = s.saving; render();
    try {
      const saved = await practiceGoals.save(scope, normalized); if (!current()) return;
      value = saved; dirty = false; editing = false; input.value = value; status.textContent = value ? s.saved : s.removed;
    } catch { if (current()) status.textContent = s.saveFailed; }
    finally { if (current()) { saving = false; render(); } }
  }
  form.addEventListener('submit', e => { e.preventDefault(); void persist(input.value); });
  remove.addEventListener('click', () => { void persist(''); });
  retry.addEventListener('click', () => { void load(); });
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(value); if (current()) status.textContent = s.copied; }
    catch { if (current()) status.textContent = s.copyFailed; }
  });
  if (!userId && signIn) { const button = node('button', s.signIn, 'ghost-button'); button.type = 'button'; button.addEventListener('click', signIn); body.append(button); }
  // Shared-screen reminders are not even fetched until deliberately opened.
  if (details) details.addEventListener('toggle', () => { if (details.open) void load(); });
  else void load();
  render();
  return {element: root, destroy() { alive = false; unsubscribe(); root.replaceChildren(); }};
}

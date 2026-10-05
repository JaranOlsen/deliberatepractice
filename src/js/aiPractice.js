import {AI_PROTOCOL, AI_SKILLS, AI_CASE, MAX_ATTEMPT_LENGTH, summarizeAiRound, spokenStatement} from './aiPracticeProtocol.js';
import {createAiPracticeApi} from './aiPracticeApi.js';
import {createPracticeAudio} from './aiPracticeAudio.js';
import {AI_COPY} from './aiPracticeCopy.js';
import {loadPracticeContent, getPracticeStatements} from './practiceContent.js';
import {createSkillFeedback} from './skillFeedbackUI.js';

const node = (tag, text = '', className = '') => {const el = document.createElement(tag); el.textContent = text; el.className = className; return el;};
export function createAiPractice({getLanguage, localizeSkill, getStrings, show, home, requestHome, theme}) {
  const element = node('section', '', 'panel ai-practice is-hidden'); element.id = 'ai-practice'; element.hidden = true;
  const api = createAiPracticeApi();
  let status = {mode: 'unconfigured'}, round = null, language = 'en', skill = null, caseData = null;
  let phase = 'choose', busy = false, generation = 0, controller = null, error = '', transcript = false;
  let draft = '', attemptId = null, attemptText = null, audio = null;
  const copy = () => AI_COPY[language];
  const item = () => round?.items[round.index];
  const btn = (label, action, primary = false, id) => {
    const button = node('button', label, primary ? 'primary-button' : 'ghost-button'); button.type = 'button';
    if (id) button.id = id; button.addEventListener('click', action); return button;
  };
  function updateAudio() {
    const stop = element.querySelector('#ai-stop-audio'); if (stop) stop.hidden = !audio?.isPlaying() && !audio?.isLoading();
    const state = element.querySelector('#ai-audio-state'); if (state) state.textContent = audio?.isLoading() ? copy().preparing : audio?.isPlaying() ? copy().listen : '';
    const record = element.querySelector('#ai-record');
    if (record) {record.textContent = audio?.isRecording() ? copy().done : copy().speak; record.setAttribute('aria-pressed', String(!!audio?.isRecording()));}
    const cancel = element.querySelector('#ai-cancel-recording'); if (cancel) cancel.hidden = !audio?.isRecording();
    const recording = element.querySelector('#ai-recording-state'); if (recording) recording.textContent = audio?.isRecording() ? copy().recording : '';
    for (const id of ['ai-response', 'ai-send', 'ai-pass', 'ai-play-client']) {
      const control = element.querySelector('#' + id); if (control) control.disabled = busy || audio?.isRecording();
    }
  }
  audio = createPracticeAudio({api, changed: updateAudio, failed: exception => {fail(exception); render();}});
  function cancelPending() {generation++; controller?.abort(); controller = null; busy = false; audio.stop();}
  const feedbackKind = () => phase === 'retry-feedback' ? 'retry' : 'first';
  function fail(exception) {
    error = copy().errors[exception?.message] ?? copy().errors.connection_failed;
  }
  function focus(selector = 'h2') {
    const target = element.querySelector(selector); if (target) {if (!target.matches('input, textarea, button, select')) target.tabIndex = -1; target.focus();}
  }
  function shell() {
    const body = node('div', '', 'ai-body');
    const header = node('div', '', 'panel-header');
    header.append(node('h2', phase === 'complete' ? copy().complete : copy().title, 'panel-title'));
    body.append(header);
    if (round?.mode === 'demo') body.append(node('p', copy().demo, 'ai-preview-badge'));
    else if (round) body.append(node('p', copy().disclosure, 'ai-disclosure'));
    if (skill) body.append(node('p', phase === 'preparation' ? skill.name : `${skill.name} · ${caseData.label}`, 'room-case-heading'));
    const message = node('p', error, 'form-status'); message.id = 'ai-status'; message.setAttribute('role', 'status');
    body.append(message); message.hidden = !error; return body;
  }
  function background(body) {
    const strings = getStrings(language), card = node('section', '', 'case-brief case-brief-screen');
    const identity = node('div', '', 'case-brief-identity');
    identity.append(node('h3', caseData.label, 'case-title'), node('p', caseData.teaser, 'case-teaser'));
    const voice = node('div', '', 'case-voice-section'); voice.append(node('h4', copy().voice, 'case-section-title'), node('p', caseData.voice));
    const details = node('details', '', 'case-background-details'); details.append(node('summary', copy().background));
    const facts = node('dl', '', 'case-role-list');
    for (const [label, value] of [[caseData.schemaLabel, caseData.schema], [strings.corePainLabel, caseData.corePain],
      [strings.styleLabel, caseData.style], [strings.casePracticeEdgeLabel, caseData.practiceEdge]]) {
      const row = node('div', '', 'case-role-item'); row.append(node('dt', label), node('dd', value)); facts.append(row);
    }
    details.append(facts); card.append(identity, voice, details); body.append(card);
  }
  async function choose(skillId, mode) {
    cancelPending(); const current = generation; busy = true; error = ''; render();
    try {
      await loadPracticeContent(language, skillId);
      if (current !== generation) return;
      skill = localizeSkill(language, skillId, 'easy'); caseData = skill.cases.find(c => c.id === AI_CASE);
      const statements = getPracticeStatements(language, skillId, AI_CASE, 'easy');
      if (statements.length !== 12 || !caseData) throw new Error('content_changed');
      round = {protocol: AI_PROTOCOL, roundId: crypto.randomUUID(), languageId: language, skillId, caseId: AI_CASE,
        mode, index: 0, items: statements.map(statement => ({statement, skipped: false})), selfScore: null};
      phase = 'preparation'; draft = ''; transcript = false; attemptId = null; theme?.(element, skillId, 'easy');
    } catch (e) {if (current === generation) fail(e);}
    finally {if (current === generation) {busy = false; render(); focus();}}
  }
  async function play(role) {
    error = '';
    const currentItem = item(), assessment = currentItem?.[feedbackKind()];
    const payload = role === 'client' ? {role, languageId: language, skillId: round.skillId,
      statementId: currentItem.statement.id, revision: currentItem.statement.revision} : {role, attemptId: assessment.attemptId};
    const text = role === 'client' ? spokenStatement(currentItem.statement.text)
      : `${assessment.result.strength} ${assessment.result.adjustment}`;
    try {await audio.play({text, role, languageId: language, mode: round.mode, payload});}
    catch (e) {fail(new Error(e.message === 'assessment_expired' ? e.message : 'audio_unavailable')); render();}
  }
  async function record() {
    if (audio.isRecording()) {audio.finishRecording(); return;}
    if (busy) return;
    if (round.mode === 'demo') {error = copy().demoSpeech; render(); return;}
    const current = ++generation; error = ''; updateAudio();
    try {
      const blob = await audio.record();
      if (current !== generation || !blob) return;
      busy = true; transcript = false; render(); controller = new AbortController();
      const result = await api.transcribe(blob, language, controller.signal);
      if (current !== generation) return;
      if (typeof result.text !== 'string' || !result.text.trim() || result.text.length > MAX_ATTEMPT_LENGTH) throw new Error('transcription_failed');
      draft = result.text; transcript = true; attemptId = null;
    } catch (e) {if (current === generation && e.name !== 'AbortError') fail(e);}
    finally {if (current === generation) {busy = false; controller = null; render(); if (transcript) focus('#ai-response');}}
  }
  async function assess() {
    if (busy || audio.isRecording() || !['attempt', 'retry'].includes(phase)) return;
    if (draft.trim().length < 2) {error = copy().responseEmpty; render(); focus('#ai-response'); return;}
    audio.stop(); error = ''; const current = ++generation, currentItem = item(), kind = phase === 'retry' ? 'retry' : 'first';
    if (!attemptId || attemptText !== draft.trim()) {attemptId = crypto.randomUUID(); attemptText = draft.trim();}
    const value = {protocol: AI_PROTOCOL, attemptId, kind, skillId: round.skillId, caseId: AI_CASE,
      languageId: language, revision: currentItem.statement.revision, statementId: currentItem.statement.id, text: draft.trim()};
    busy = true; controller = new AbortController(); render();
    try {
      const result = await api.assess(value, round.mode, controller.signal);
      if (current !== generation) return;
      currentItem[kind] = {...result, text: value.text}; phase = kind === 'first' ? 'first-feedback' : 'retry-feedback';
      draft = ''; attemptId = null; transcript = false;
    } catch (e) {if (current === generation && e.name !== 'AbortError') fail(e);}
    finally {if (current === generation) {busy = false; controller = null; render(); focus();}}
  }
  function advance(skipped = false) {
    if (busy || audio.isRecording() || !round) return;
    cancelPending(); item().skipped = skipped; round.index++; error = ''; draft = ''; transcript = false; attemptId = null;
    phase = round.index >= round.items.length ? 'complete' : 'attempt'; render(); focus(); window.scrollTo({top: 0});
  }
  function controls(body) {
    const actions = node('div', '', 'ai-actions');
    if (['attempt', 'retry'].includes(phase)) {
      const label = node('label', phase === 'retry' ? copy().retry : copy().attempt); label.htmlFor = 'ai-response';
      const input = node('textarea'); input.id = 'ai-response'; input.rows = 4; input.maxLength = MAX_ATTEMPT_LENGTH;
      input.value = draft; input.placeholder = copy().placeholder; input.disabled = busy || audio.isRecording();
      input.addEventListener('input', () => {draft = input.value;});
      body.append(label, input);
      if (transcript) {const hint = node('p', copy().review, 'response-hint'); hint.id = 'ai-transcript-hint'; body.append(hint); input.setAttribute('aria-describedby', hint.id);}
      const row = node('div', '', 'ai-input-actions');
      const speak = btn(audio.isRecording() ? copy().done : copy().speak, () => void record(), false, 'ai-record');
      speak.disabled = busy; speak.setAttribute('aria-pressed', String(audio.isRecording()));
      const cancel = btn(copy().cancel, () => {cancelPending(); render(); focus('#ai-response');}, false, 'ai-cancel-recording'); cancel.hidden = !audio.isRecording();
      if (round.mode === 'live') row.append(speak, cancel); body.append(row);
      const state = node('p', busy ? controller ? copy().busy : copy().transcribing : '', 'ai-state'); state.id = 'ai-recording-state'; state.setAttribute('role', 'status'); body.append(state);
      const send = btn(busy ? copy().busy : copy().send, () => void assess(), true, 'ai-send'); send.disabled = busy || audio.isRecording(); actions.append(send);
    } else {
      if (phase === 'first-feedback') actions.append(btn(copy().retryButton, () => {
        audio.stop(); phase = 'retry'; error = ''; draft = ''; attemptId = null; render(); focus('#ai-response');
      }, true, 'ai-retry'));
      else actions.append(btn(copy().next, () => advance(), true, 'ai-next'));
    }
    const pass = btn(copy().pass, () => advance(true), false, 'ai-pass'); pass.disabled = busy || audio.isRecording(); actions.append(pass); body.append(actions);
  }
  function exportRound() {
    const blob = new Blob([JSON.stringify({...round, summary: summarizeAiRound(round.items)}, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob), link = node('a'); link.href = url; link.download = `ai-practice-${round.roundId}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function renderSummary(body) {
    const summary = summarizeAiRound(round.items);
    if (round.mode === 'demo') body.append(node('p', copy().demoSummary));
    else {
      const comparison = node('div', '', 'ai-round-scores');
      for (const [label, score, count] of [[copy().first, summary.firstScore, summary.firstCount], [copy().coached, summary.retryScore, summary.retryCount]]) {
        const card = node('div', '', 'ai-score-card'); card.append(node('h3', label), node('strong', score === null ? '—' : `${score.toFixed(1)} / 5`), node('p', `${count} ${copy().count}`));
        const bar = node('div', '', 'ai-score-bar'); bar.setAttribute('aria-hidden', 'true'); const fill = node('span'); fill.style.width = `${score === null ? 0 : score / 5 * 100}%`; bar.append(fill); card.append(bar); comparison.append(card);
      } body.append(comparison, node('p', copy().liveNote, 'response-hint'));
    }
    const label = node('label', copy().self); label.htmlFor = 'ai-self-score';
    const select = node('select'); select.id = 'ai-self-score'; select.append(new Option('—', ''));
    const labels = language === 'no' ? ['Ikke vist ennå', 'På vei med veiledning', 'Tilfredsstillende i deler', 'Godt demonstrert', 'Svært godt demonstrert']
      : ['Not yet demonstrated', 'Emerging with guidance', 'Adequate in parts', 'Well demonstrated', 'Skillfully demonstrated'];
    labels.forEach((label, i) => select.append(new Option(`${i + 1} · ${label}`, String(i + 1)))); select.value = round.selfScore ? String(round.selfScore) : '';
    select.addEventListener('change', () => {round.selfScore = select.value ? Number(select.value) : null;});
    body.append(label, select, node('p', copy().optional, 'response-hint'));
    const actions = node('div', '', 'ai-actions'); actions.append(btn(copy().export, exportRound, false, 'ai-export'), btn(copy().again, () => {
      cancelPending(); round = null; skill = null; phase = 'choose'; error = ''; render(); focus();
    }, true, 'ai-again')); body.append(actions);
  }
  function render() {
    const body = shell();
    if (phase === 'choose') {
      body.append(node('h3', copy().choose));
      if (busy) body.append(node('p', copy().preparing, 'form-status'));
      const grid = node('div', '', 'grid-list');
      for (const id of AI_SKILLS) {
        const localized = localizeSkill(language, id), card = node('div', '', 'ai-skill-card');
        theme?.(card, id, 'easy'); card.append(node('h4', localized.name), node('p', localized.practiceFocus));
        if (status.mode === 'live') {const start = btn(copy().start, () => void choose(id, 'live'), true); start.dataset.aiSkill = id; start.disabled = busy; card.append(start);}
        const preview = btn(copy().preview, () => void choose(id, 'demo'), status.mode !== 'live'); preview.dataset.aiPreview = id; preview.disabled = busy; card.append(preview); grid.append(card);
      }
      if (status.mode !== 'live') body.append(node('p', copy().notReady, 'response-hint'));
      body.append(grid);
      const setup = node('details', '', 'ai-setup'); setup.append(node('summary', copy().setup), node('p', copy().setupText)); body.append(setup);
    } else if (phase === 'preparation') {
      body.append(btn(copy().back, () => {round = null; skill = null; phase = 'choose'; render(); focus();}));
      background(body); body.append(node('h3', copy().focus), node('p', skill.practiceFocus));
      if (round.mode === 'live') body.append(node('p', copy().liveNote, 'response-hint'), node('p', copy().privacy, 'response-hint'));
      const actions = node('div', '', 'ai-actions'); actions.append(btn(copy().begin, () => {
        phase = 'attempt'; render(); focus();
      }, true, 'ai-begin')); body.append(actions);
    } else if (phase === 'complete') renderSummary(body);
    else {
      const currentItem = item(), counter = node('p', `${round.index + 1} / ${round.items.length}`, 'ai-counter'); body.append(counter);
      const client = node('section', '', 'ai-client-card'); client.append(node('h3', copy().client), node('blockquote', currentItem.statement.text));
      const audioRow = node('div', '', 'ai-audio-actions');
      const playClient = btn(copy().play, () => void play('client'), false, 'ai-play-client'); playClient.disabled = busy || audio.isRecording();
      const stop = btn(copy().stop, () => audio.stop(), false, 'ai-stop-audio'); stop.hidden = !audio.isPlaying(); audioRow.append(playClient, stop);
      const audioState = node('span', '', 'ai-state'); audioState.id = 'ai-audio-state'; audioState.setAttribute('role', 'status');
      client.append(audioRow, audioState); body.append(client);
      if (phase.includes('feedback')) {
        const assessment = currentItem[feedbackKind()], feedback = node('section', '', 'ai-supervisor-card');
        const response = node('details', '', 'ai-attempt-reference'); response.append(node('summary', copy().attempt), node('p', assessment.text)); body.append(response);
        feedback.append(node('h3', copy().supervisor));
        for (const [label, text] of [[copy().strength, assessment.result.strength], [copy().adjustment, assessment.result.adjustment]]) {
          if (text) feedback.append(node('h4', label), node('p', text));
        }
        const hear = btn(copy().hear, () => void play('supervisor'), false, 'ai-play-supervisor'); feedback.append(hear);
        if (assessment.result.limitation) {const details = node('details'); details.append(node('summary', copy().limitations), node('p', assessment.result.limitation)); feedback.append(details);}
        body.append(feedback);
      }
      controls(body);
      const reference = createSkillFeedback({skillId: round.skillId, language, audience: 'self'}); body.append(reference);
      if (phase !== 'attempt') {const example = node('details', '', 'ai-example'); example.append(node('summary', copy().example), node('p', currentItem.statement.suggestion)); body.append(example);}
    }
    element.replaceChildren(body); updateAudio();
  }
  function pause() {cancelPending(); home();}
  function goHome() {
    audio.stop();
    if (!round || phase === 'complete' || phase === 'preparation') {pause(); return;}
    requestHome({descriptionLabel: copy().pauseNote, pause, end: () => {cancelPending(); round = null; skill = null; phase = 'choose'; home();}});
  }
  return {element, goHome, hasRound: () => Boolean(round && phase !== 'complete'), stopAudio: () => audio.stop(),
    async open() {
      show();
      if (round && phase !== 'complete') {render(); focus(); return;}
      language = getLanguage() === 'no' ? 'no' : 'en'; phase = 'choose'; skill = null; round = null; error = ''; busy = true; render();
      const current = ++generation; const result = await api.status();
      if (current !== generation) return; status = result; busy = false; render(); focus();
    }};
}

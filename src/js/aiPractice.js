import {AI_PROTOCOL, AI_SKILLS, MAX_ATTEMPT_LENGTH, summarizeAiRound, spokenStatement, supervisorFeedbackText} from './aiPracticeProtocol.js';
import {AI_CLIENT_VOICES, AI_SUPERVISOR_VOICE} from '../data/aiPracticeVoices.js';
import {SKILL_ORDER} from './practiceData.js';
import {createLevelChoice, preferredCaseLevel, rememberCaseLevel, levelLabel} from './practiceLevels.js';
import {createAiPracticeApi} from './aiPracticeApi.js';
import {createPracticeAudio} from './aiPracticeAudio.js';
import {AI_COPY} from './aiPracticeCopy.js';
import {loadPracticeContent, getPracticeStatements} from './practiceContent.js';
import {createSkillFeedback} from './skillFeedbackUI.js';
import {preparePracticeWav} from './aiPracticeDelivery.js';

const node = (tag, text = '', className = '') => {const el = document.createElement(tag); el.textContent = text; el.className = className; return el;};
export function createAiPractice({getLanguage, localizeSkill, getStrings, show, home, requestHome, theme, apiOptions = {}}) {
  const element = node('section', '', 'panel ai-practice is-hidden'); element.id = 'ai-practice'; element.hidden = true;
  const api = createAiPracticeApi(apiOptions);
  let status = {mode: 'unconfigured'}, round = null, language = 'en', skill = null, caseData = null;
  let phase = 'choose', busy = false, generation = 0, controller = null, error = '', transcript = false;
  let draft = '', attemptId = null, attemptText = null, audio = null;
  let recorded = null;
  const copy = () => AI_COPY[language];
  const item = () => round?.items[round.index];
  const selfAwareness = () => skill?.id === 'therapist-self-awareness';
  const responseLabel = () => selfAwareness() ? copy().reflection : copy().attempt;
  const caseLabel = () => caseData.supportedLevels.length > 1 ? `${caseData.label} (${levelLabel(language, round.difficulty)})` : caseData.label;
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
    const replay=element.querySelector('#ai-play-recording');if(replay)replay.textContent=audio?.isRecordingPlaying()?copy().stop:copy().replay;
    for (const id of ['ai-response', 'ai-send', 'ai-pass', 'ai-play-client','ai-play-recording','ai-review-delivery','ai-retry','ai-next','ai-play-supervisor']) {
      const control = element.querySelector('#' + id); if (control) control.disabled = busy || audio?.isRecording();
    }
  }
  audio = createPracticeAudio({api, changed: updateAudio, failed: exception => {fail(exception); render();}});
  function cancelPending() {generation++; controller?.abort(); controller = null; busy = false; recorded = null; audio.stop();}
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
    if (skill) body.append(node('p', ['cases', 'preparation'].includes(phase) ? skill.name : `${skill.name} · ${caseLabel()}`, 'room-case-heading'));
    const message = node('p', error, 'form-status'); message.id = 'ai-status'; message.setAttribute('role', 'status');
    body.append(message); message.hidden = !error; return body;
  }
  function background(body) {
    const strings = getStrings(language), card = node('section', '', 'case-brief case-brief-screen');
    const identity = node('div', '', 'case-brief-identity');
    identity.append(node('h3', caseLabel(), 'case-title'), node('p', caseData.teaser, 'case-teaser'));
    const voice = node('div', '', 'case-voice-section'); voice.append(node('h4', copy().voice, 'case-section-title'), node('p', caseData.voice));
    const details = node('details', '', 'case-background-details'); details.append(node('summary', copy().background));
    const facts = node('dl', '', 'case-role-list');
    for (const [label, value] of [[caseData.schemaLabel, caseData.schema], [strings.corePainLabel, caseData.corePain],
      [strings.styleLabel, caseData.style], [strings.casePracticeEdgeLabel, caseData.practiceEdge]]) {
      const row = node('div', '', 'case-role-item'); row.append(node('dt', label), node('dd', value)); facts.append(row);
    }
    details.append(facts); card.append(identity, voice, details); body.append(card);
  }
  async function choose(skillId) {
    cancelPending(); const current = generation; busy = true; error = ''; render();
    try {
      await loadPracticeContent(language, skillId);
      if (current !== generation) return;
      skill = localizeSkill(language, skillId, 'easy'); caseData = null; round = null;
      phase = 'cases'; draft = ''; transcript = false; attemptId = null; theme?.(element, skillId, 'easy');
    } catch (e) {if (current === generation) fail(e);}
    finally {if (current === generation) {busy = false; render(); focus();}}
  }
  function chooseCase(caseId, requestedLevel, mode = status.mode === 'live' ? 'live' : 'demo') {
    caseData = skill.cases.find(c => c.id === caseId); if (!caseData) return;
    const difficulty = preferredCaseLevel(caseData, requestedLevel);
    const statements = getPracticeStatements(language, skill.id, caseId, difficulty);
    if (statements.length !== 12) {error = copy().errors.content_changed; render(); return;}
    cancelPending(); rememberCaseLevel(caseData, difficulty);
    round = {protocol: AI_PROTOCOL, roundId: crypto.randomUUID(), languageId: language, skillId: skill.id, caseId,
      difficulty, clientVoice: mode === 'live' ? AI_CLIENT_VOICES[caseId] : 'device-preview', mode, index: 0,
      items: statements.map(statement => ({statement, skipped: false})), selfScore: null};
    phase = 'preparation'; error = ''; draft = ''; transcript = false; attemptId = null;
    theme?.(element, skill.id, difficulty); render(); focus(); window.scrollTo({top: 0});
  }
  async function play(role) {
    error = '';
    const currentItem = item(), assessment = currentItem?.[feedbackKind()];
    const payload = role === 'client' ? {role, languageId: language, skillId: round.skillId, caseId: round.caseId, difficulty: round.difficulty,
       statementId: currentItem.statement.id, revision: currentItem.statement.revision} : {role, attemptId: assessment.attemptId,includeDelivery:!!assessment.delivery};
    const text = role === 'client' ? spokenStatement(currentItem.statement.text)
      : supervisorFeedbackText(assessment, language);
    try {await audio.play({text, role, languageId: language, mode: round.mode, payload});}
    catch (e) {fail(new Error(e.message === 'assessment_expired' ? e.message : 'audio_unavailable')); render();}
  }
  async function record() {
    if (audio.isRecording()) {audio.finishRecording(); return;}
    if (busy) return;
    if (round.mode === 'demo') {error = copy().demoSpeech; render(); return;}
    const current = ++generation; error = ''; updateAudio();
    recorded=null;
    try {
      const blob = await audio.record();
      if (current !== generation || !blob) return;
      recorded={blob,attemptId:null};
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
    const value = {protocol: AI_PROTOCOL, attemptId, kind, skillId: round.skillId, caseId: round.caseId, difficulty: round.difficulty,
      languageId: language, revision: currentItem.statement.revision, statementId: currentItem.statement.id, text: draft.trim()};
    busy = true; controller = new AbortController(); render();
    try {
      const result = await api.assess(value, round.mode, controller.signal);
      if (current !== generation) return;
      currentItem[kind] = {...result, text: value.text}; phase = kind === 'first' ? 'first-feedback' : 'retry-feedback';
      if(recorded)recorded.attemptId=value.attemptId;
      draft = ''; attemptId = null; transcript = false;
    } catch (e) {if (current === generation && e.name !== 'AbortError') fail(e);}
    finally {if (current === generation) {busy = false; controller = null; render(); focus();}}
  }
  async function reviewDelivery() {
    const assessment=item()?.[feedbackKind()];
    if(busy||!recorded||recorded.attemptId!==assessment?.attemptId)return;
    audio.stop();error='';const current=++generation,currentRecording=recorded;
    busy=true;controller=new AbortController();render();
    try {
      const wav=currentRecording.wav??await preparePracticeWav(currentRecording.blob);
      if(current!==generation)return;currentRecording.wav=wav;
      const value={protocol:AI_PROTOCOL,attemptId:assessment.attemptId,kind:assessment.kind,skillId:round.skillId,
        caseId:round.caseId,difficulty:round.difficulty,languageId:language,revision:item().statement.revision,
        statementId:item().statement.id,text:assessment.text};
      const result=await api.delivery(value,wav,controller.signal);
      if(current!==generation)return;assessment.delivery=result;
    }catch(e){if(current===generation&&e.name!=='AbortError')fail(e);}
    finally{if(current===generation){busy=false;controller=null;render();focus('#ai-delivery');}}
  }
  function recordingControls(body,assessment=null) {
    if(!recorded||(assessment&&recorded.attemptId!==assessment.attemptId))return;
    const row=node('div','','ai-recording-actions');
    row.append(btn(copy().replay,async()=>{
      try{if(audio.isRecordingPlaying())audio.stop();else await audio.playRecording(recorded.blob);}catch{fail(new Error('audio_unavailable'));render();}
    },false,'ai-play-recording'));
    if(assessment && !assessment.delivery && !selfAwareness()) {
      row.append(btn(busy?copy().deliveryBusy:copy().reviewDelivery,()=>void reviewDelivery(),false,'ai-review-delivery'));
    }
    body.append(row);
    if(assessment&&!assessment.delivery&&!selfAwareness())body.append(node('p',copy().deliveryConsent,'response-hint'));
  }
  function renderDelivery(feedback,assessment) {
    if(!assessment.delivery)return;
    const delivery=assessment.delivery,card=node('section','','ai-delivery-card');card.id='ai-delivery';
    const heading=node('div','','ai-delivery-heading');heading.append(node('h4',copy().delivery),node('span',copy().experimental,'ai-delivery-badge'));card.append(heading);
    if(delivery.result.audibility==='clear') {
      for(const [label,text] of [[copy().strength,delivery.result.strength],[copy().adjustment,delivery.result.adjustment]])
        card.append(node('h5',label),node('p',text));
    } else card.append(node('p',copy().deliveryUnclear));
    const details=node('details');details.append(node('summary',copy().deliveryDetails));
    details.append(node('p',`${delivery.metrics.durationSeconds.toLocaleString(language)} ${copy().seconds} · ≈ ${delivery.metrics.wordsPerMinute} ${copy().wordsPerMinute}`,'response-hint'));
    for(const observation of delivery.result.observations)details.append(node('p',observation.description));
    if(delivery.result.limitation)details.append(node('p',delivery.result.limitation,'response-hint'));
    details.append(node('p',copy().deliveryEstimate,'response-hint'));card.append(details);feedback.append(card);
  }
  function advance(skipped = false) {
    if (busy || audio.isRecording() || !round) return;
    cancelPending(); item().skipped = skipped; round.index++; error = ''; draft = ''; transcript = false; attemptId = null;
    phase = round.index >= round.items.length ? 'complete' : 'attempt'; render(); focus(); window.scrollTo({top: 0});
  }
  function controls(body) {
    const actions = node('div', '', 'ai-actions');
    if (['attempt', 'retry'].includes(phase)) {
      const label = node('label', phase === 'retry' ? copy().retry : responseLabel()); label.htmlFor = 'ai-response';
      const input = node('textarea'); input.id = 'ai-response'; input.rows = 4; input.maxLength = MAX_ATTEMPT_LENGTH;
      input.value = draft; input.placeholder = selfAwareness() ? copy().reflectionPlaceholder : copy().placeholder.replace('{client}', caseData.label.replace(/\s*\([^)]*\)\s*$/, '')); input.disabled = busy || audio.isRecording();
      input.addEventListener('input', () => {draft = input.value;});
      body.append(label, input);recordingControls(body);
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
        cancelPending(); phase = 'retry'; error = ''; draft = ''; attemptId = null; render(); focus('#ai-response');
      }, true, 'ai-retry'));
      else actions.append(btn(copy().next, () => advance(), true, 'ai-next'));
    }
    const pass = btn(copy().pass, () => advance(true), false, 'ai-pass'); pass.disabled = busy || audio.isRecording(); actions.append(pass); body.append(actions);
  }
  function exportRound() {
    const blob = new Blob([JSON.stringify({...round, summary: summarizeAiRound(round.items)}, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob), link = node('a'); link.href = url; link.download = `ai-practice-${round.roundId}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function renderRating(feedback, assessment, currentItem) {
    if (assessment.source !== 'ai') return;
    const rating = node('div', '', 'ai-attempt-rating');
    rating.append(node('h4', `${copy().rating} · ${assessment.kind === 'retry' ? copy().retryAttempt : copy().firstAttempt}`));
    if (!assessment.result.assessable) rating.append(node('p', copy().notRated, 'ai-rating-value'));
    else {
      const score = assessment.result.score, value = node('div', '', 'ai-rating-value');
      value.append(node('strong', `${score} / 5`), node('span', copy().ratingLabels[score - 1])); rating.append(value);
      const steps = node('div', '', 'ai-rating-steps'); steps.setAttribute('aria-hidden', 'true');
      for (let index = 1; index <= 5; index++) steps.append(node('span', '', index <= score ? 'is-filled' : ''));
      rating.append(steps);
    }
    const first = currentItem.first;
    if (assessment.kind === 'retry' && first?.source === 'ai' && first.result.assessable)
      rating.append(node('p', `${copy().firstAttempt}: ${first.result.score} / 5`, 'response-hint'));
    feedback.append(rating);
  }
  function renderAiDetails(body) {
    if (round ? round.mode !== 'live' : status.mode !== 'live') return;
    const assessment = phase.includes('feedback') ? item()?.[feedbackKind()] : null;
    const assessedModels = phase === 'complete' ? [...new Set(round.items.flatMap(item =>
      [item.first, item.retry].filter(attempt => attempt?.source === 'ai').map(attempt => attempt.model)))].join(', ') : null;
    const models = status.models ?? {}, details = node('details', '', 'ai-model-details'); details.id = 'ai-details';
    details.append(node('summary', copy().details)); const list = node('dl');
    for (const [label, model] of [[copy().feedbackModel, assessment?.model || assessedModels || models.assessment],
      [copy().speechModel, models.speech], [copy().transcriptionModel, models.transcription],
      [copy().deliveryModel,assessment?.delivery?.model||models.delivery],
      [copy().voice, round?.clientVoice], [copy().supervisorVoice, round ? AI_SUPERVISOR_VOICE : null]]) {
      if (!model) continue;
      const row = node('div'); row.append(node('dt', label), node('dd', model)); list.append(row);
    }
    if (list.children.length) {details.append(list); body.append(details);}
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
    copy().ratingLabels.forEach((label, i) => select.append(new Option(`${i + 1} · ${label}`, String(i + 1)))); select.value = round.selfScore ? String(round.selfScore) : '';
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
      for (const id of SKILL_ORDER.filter(id => AI_SKILLS.includes(id))) {
        const localized = localizeSkill(language, id), card = btn('', () => void choose(id)); card.className = 'card-button ai-library-card';
        theme?.(card, id, 'easy'); card.append(node('h3', localized.name), node('p', localized.description));
        card.dataset.aiSkill = id; card.disabled = busy; grid.append(card);
      }
      if (status.mode !== 'live') body.append(node('p', copy().notReady, 'response-hint'));
      body.append(grid);
      if (import.meta.env.DEV) {
        const setup = node('details', '', 'ai-setup'); setup.append(node('summary', copy().setup), node('p', copy().setupText)); body.append(setup);
      }
    } else if (phase === 'cases') {
      body.append(btn(copy().back, () => {skill = null; phase = 'choose'; render(); focus();}, false, 'ai-back-skills'), node('h3', copy().chooseCase));
      const grid = node('div', '', 'grid-list');
      for (const candidate of skill.cases) {
        const card = btn('', () => chooseCase(candidate.id)); card.className = 'card-button ai-library-card'; card.dataset.aiCase = candidate.id;
        theme?.(card, skill.id, candidate.difficulty);
        card.append(node('h3', candidate.label), node('p', candidate.teaser));
        if (candidate.supportedLevels.length > 1) {card.classList.add('ai-mixed-case'); card.append(node('span', copy().threeLevels, 'difficulty-pill'));}
        grid.append(card);
      }
      body.append(grid);
    } else if (phase === 'preparation') {
      body.append(btn(copy().backCases, () => {round = null; caseData = null; phase = 'cases'; render(); focus();}, false, 'ai-back-cases'));
      const levelChoice = createLevelChoice({caseData, value: round.difficulty, language, onChange: level => chooseCase(caseData.id, level, round.mode)});
      if (levelChoice) body.append(levelChoice);
      background(body); body.append(node('h3', copy().focus), node('p', skill.practiceFocus));
      if (selfAwareness()) body.append(node('p', copy().reflectionNote, 'response-hint'));
      if (round.mode === 'live') body.append(node('p', copy().liveNote, 'response-hint'), node('p', copy().privacy, 'response-hint'));
      const actions = node('div', '', 'ai-actions'); actions.append(btn(copy().begin, () => {
        phase = 'attempt'; render(); focus();
      }, true, 'ai-begin'));
      if (round.mode === 'live') actions.append(btn(copy().preview, () => {round.mode = 'demo'; round.clientVoice = 'device-preview'; phase = 'attempt'; render(); focus();}, false, 'ai-preview'));
      body.append(actions);
    } else if (phase === 'complete') renderSummary(body);
    else {
      const currentItem = item(), counter = node('p', `${round.index + 1} / ${round.items.length}`, 'ai-counter'); body.append(counter);
      const client = node('section', '', 'ai-client-card'); client.append(node('h3', caseData.label.replace(/\s*\([^)]*\)\s*$/, '')), node('blockquote', currentItem.statement.text));
      const audioRow = node('div', '', 'ai-audio-actions');
      const playClient = btn(copy().play, () => void play('client'), false, 'ai-play-client'); playClient.disabled = busy || audio.isRecording();
      const stop = btn(copy().stop, () => audio.stop(), false, 'ai-stop-audio'); stop.hidden = !audio.isPlaying(); audioRow.append(playClient, stop);
      const audioState = node('span', '', 'ai-state'); audioState.id = 'ai-audio-state'; audioState.setAttribute('role', 'status');
      client.append(audioRow, audioState); body.append(client);
      if (phase.includes('feedback')) {
        const assessment = currentItem[feedbackKind()], feedback = node('section', '', 'ai-supervisor-card');
        const response = node('details', '', 'ai-attempt-reference'); response.append(node('summary', responseLabel()), node('p', assessment.text)); body.append(response);
        feedback.append(node('h3', copy().supervisor));
        renderRating(feedback, assessment, currentItem);
        for (const [label, text] of [[copy().strength, assessment.result.strength], [copy().adjustment, assessment.result.adjustment]]) {
          if (text) feedback.append(node('h4', label), node('p', text));
        }
        const hear = btn(copy().hear, () => void play('supervisor'), false, 'ai-play-supervisor'); feedback.append(hear);
        recordingControls(feedback,assessment);renderDelivery(feedback,assessment);
        if (assessment.result.limitation) {const details = node('details'); details.append(node('summary', copy().limitations), node('p', assessment.result.limitation)); feedback.append(details);}
        body.append(feedback);
      }
      controls(body);
      const reference = createSkillFeedback({skillId: round.skillId, language, audience: 'self'}); body.append(reference);
      if (phase !== 'attempt') {const example = node('details', '', 'ai-example'); example.append(node('summary', copy().example), node('p', currentItem.statement.suggestion)); body.append(example);}
    }
    renderAiDetails(body); element.replaceChildren(body); updateAudio();
  }
  function pause() {cancelPending(); home();}
  function goHome() {
    audio.stop();
    if (!round || phase === 'complete' || phase === 'preparation') {pause(); return;}
    requestHome({descriptionLabel: copy().pauseNote, pause, end: () => {cancelPending(); round = null; skill = null; phase = 'choose'; home();}});
  }
  return {element, goHome, hasRound: () => Boolean(round && phase !== 'complete'), stopAudio: () => audio.stop(),
    reset(){cancelPending();round=null;skill=null;caseData=null;draft='';attemptId=null;phase='choose';error='';if(document.body.dataset.section==='ai')home();},
    async open() {
      show();
      if (round && phase !== 'complete') {render(); focus(); return;}
      language = getLanguage() === 'no' ? 'no' : 'en'; phase = 'choose'; skill = null; round = null; error = ''; busy = true; render();
      const current = ++generation;
      try {
        const result = await api.status();
        if (current !== generation) return;
        status = result;
      } catch (exception) {
        if (current !== generation) return;
        phase = 'unavailable'; fail(exception);
      }
      busy = false; render(); focus();
    }};
}

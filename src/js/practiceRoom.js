import {practiceRoomRpc, watchPracticeRoom} from './backend.js';
import {loadPracticeContent, getPracticeStatements} from './practiceContent.js';
import {CONTENT_REVISION} from './practiceData.js';
import {createRoomSync, roomRole, roomEveryoneReady} from './practiceRoomSync.js';

const copy = {
  en: {
    title: 'Group practice', close: 'Back', join: 'Join a group', create: 'Create group room',
    intro: 'Use your video call for speaking. Each person opens this app on their own phone or computer. The host moves the group through the round. Two people practice as therapist and client; larger groups add an active observer and watching observers.',
    code: 'Room code', role: 'Your role', therapist: 'Therapist', client: 'Client', observer: 'Active observer', passive: 'Watching observer', auto: 'Next available role', host: 'Host', you: 'you', changeRole: 'Change role', selfRating: 'Your self-assessment as therapist',
    consent: 'Ratings assess the therapist’s use of the selected skill. The active observer saves the rating; in pairs the therapist saves a self-assessment. Spoken responses and feedback are not recorded. Roles rotate together after each round.',
    signIn: 'Sign in to join', signInCreate: 'Sign in to create a room', copy: 'Copy room code', copied: 'Code copied',
    invite: 'Share this code with your group. Choose roles below before starting. Watching observers join the rotation after each round. Rooms expire after eight hours.',
    waiting: 'Waiting for the therapist, client and active observer to display this step', ready: 'The active devices are up to date',
    reconnect: 'Connection interrupted. Reconnecting… The round waits until everyone is up to date.',
    sync: 'Sync now', retry: 'Retry last action', loading: 'Loading the shared round…',
    lobby: 'Prepare together', start: 'Start round', advance: 'Continue to next step', finishItem: 'Finish item',
    pass: 'Pass this item', confirmPass: 'Pass this item for everyone? It will not count as practiced.',
    rotate: 'Rotate roles and prepare the next round', end: 'End group session', confirmEnd: 'End this group session for everyone?',
    ended: 'This group session has ended.', expired: 'This room has expired. Create a new room to continue.',
    listening: 'Listen to your partner on the call. The host will move the group to the next step.',
    read: 'Read this line aloud in the client role. Repeat it when the therapist is ready to retry.',
    reader: 'Read this line aloud, then step out of the client role. Respect what the therapist chooses to keep private.',
    observe: 'Listen for the selected skill and offer focused feedback when it is your turn.',
    example: 'See an example for the retry', exampleNote: 'An example, not an answer key. Choose one change to try.',
    round: 'Round', item: 'Item', debrief: 'Reflect together', practiced: 'practiced', passed: 'passed',
    save: 'Save skill rating', saved: 'Skill rating saved to the therapist’s group progress',
    score: 'Therapist’s use of the selected skill', noItems: 'Every item was passed. No rating will be saved.',
    participantWaiting: 'Not joined', participantSyncing: 'Catching up', participantReady: 'Up to date',
    participantOffline: 'Connection lost', brief: 'Your preparation', newRoom: 'Join another room',
    failedContent: 'This room uses a different or unavailable content version. Refresh the app and sync again.',
    hiddenLine: 'Listen to the client read the line aloud. Your response comes from listening.',
    scale: '1 = Not yet demonstrated · 2 = Emerging with guidance · 3 = Adequate in parts · 4 = Well demonstrated · 5 = Skillfully demonstrated'
  },
  no: {
    title: 'Gruppeøving', close: 'Tilbake', join: 'Bli med i en gruppe', create: 'Opprett grupperom',
    intro: 'Snakk sammen på videosamtalen. Alle åpner appen på sin egen mobil eller datamaskin. Verten tar gruppen gjennom runden. To personer øver som terapeut og klient; større grupper har også en aktiv observatør og observatører som følger med.',
    code: 'Romkode', role: 'Din rolle', therapist: 'Terapeut', client: 'Klient', observer: 'Aktiv observatør', passive: 'Observatør som følger med', auto: 'Neste ledige rolle', host: 'Vert', you: 'deg', changeRole: 'Bytt rolle', selfRating: 'Din egenvurdering som terapeut',
    consent: 'Vurderingen gjelder terapeutens bruk av den valgte ferdigheten. Den aktive observatøren lagrer vurderingen; i par lagrer terapeuten en egenvurdering. Muntlige svar og tilbakemeldinger blir ikke registrert. Rollene roteres sammen etter hver runde.',
    signIn: 'Logg inn for å bli med', signInCreate: 'Logg inn for å opprette et rom', copy: 'Kopier romkode', copied: 'Koden er kopiert',
    invite: 'Del koden med gruppen. Velg roller nedenfor før dere starter. Observatører som følger med, blir med i rotasjonen etter hver runde. Rommet utløper etter åtte timer.',
    waiting: 'Venter på at terapeuten, klienten og den aktive observatøren viser dette steget', ready: 'De aktive enhetene er oppdatert',
    reconnect: 'Forbindelsen er brutt. Kobler til igjen… Runden venter til alle er oppdatert.',
    sync: 'Synkroniser nå', retry: 'Prøv siste handling igjen', loading: 'Laster den felles runden…',
    lobby: 'Forbered dere sammen', start: 'Start runden', advance: 'Fortsett til neste steg', finishItem: 'Fullfør utsagnet',
    pass: 'Stå over utsagnet', confirmPass: 'Stå over utsagnet for alle? Det telles ikke som øvd.',
    rotate: 'Roter roller og forbered neste runde', end: 'Avslutt gruppeøkten', confirmEnd: 'Avslutte gruppeøkten for alle?',
    ended: 'Gruppeøkten er avsluttet.', expired: 'Rommet har utløpt. Opprett et nytt rom for å fortsette.',
    listening: 'Lytt til den andre på samtalen. Verten tar gruppen videre til neste steg.',
    read: 'Les utsagnet høyt i klientrollen. Gjenta det når terapeuten er klar til å prøve igjen.',
    reader: 'Les utsagnet høyt, og gå så ut av klientrollen. Respekter det terapeuten velger å holde privat.',
    observe: 'Lytt etter den valgte ferdigheten og gi konkret tilbakemelding når det er din tur.',
    example: 'Se et eksempel før du prøver igjen', exampleNote: 'Et eksempel, ikke en fasit. Velg én endring å prøve.',
    round: 'Runde', item: 'Utsagn', debrief: 'Reflekter sammen', practiced: 'øvd', passed: 'stått over',
    save: 'Lagre ferdighetsvurdering', saved: 'Ferdighetsvurderingen er lagret i terapeutens gruppefremgang',
    score: 'Terapeutens bruk av den valgte ferdigheten', noItems: 'Alle utsagn ble stått over. Ingen vurdering lagres.',
    participantWaiting: 'Ikke med ennå', participantSyncing: 'Henter siste steg', participantReady: 'Oppdatert',
    participantOffline: 'Mistet forbindelsen', brief: 'Din forberedelse', newRoom: 'Bli med i et annet rom',
    failedContent: 'Rommet bruker en annen eller utilgjengelig innholdsversjon. Last appen på nytt og synkroniser igjen.',
    hiddenLine: 'Lytt til klienten som leser utsagnet høyt. Responsen din kommer fra lyttingen.',
    scale: '1 = Ikke vist ennå · 2 = På vei med veiledning · 3 = Tilfredsstillende i deler · 4 = Godt demonstrert · 5 = Svært godt demonstrert'
  }
};

export function createPracticeRoomView({onOpen, onClose, getUser, getLanguage, localizeSkill, getStrings, signIn, onProgressChange}) {
  const overlay = document.createElement('div');
  overlay.id = 'room-panel'; overlay.className = 'panel room-panel is-hidden'; overlay.hidden = true;
  overlay.innerHTML = `<section class="room-dialog" aria-labelledby="room-title">
    <header class="room-header"><h2 id="room-title"></h2><button id="room-back" class="ghost-button"></button></header>
    <p id="room-status" role="status" aria-live="polite"></p>
    <div id="room-setup"><p id="room-intro"></p>
      <form id="room-join-form"><label for="room-code" id="room-code-label"></label>
        <input id="room-code" autocomplete="off" autocapitalize="characters" maxlength="20" required>
        <label for="room-role" id="room-role-label"></label><select id="room-role">
          <option value="auto"></option><option value="therapist"></option><option value="client"></option><option value="observer"></option><option value="passive"></option></select>
        <p id="room-consent"></p><button id="room-join" class="primary-button" type="submit"></button>
      </form><label id="room-host-role-label" for="room-host-role"></label><select id="room-host-role"><option value="therapist"></option><option value="client"></option><option value="observer"></option></select><button id="room-create" class="primary-button" hidden></button>
    </div>
    <div id="room-session" hidden>
      <div class="room-code-row"><strong id="room-share-code"></strong><button id="room-copy" class="ghost-button"></button></div>
      <ul id="room-members" class="room-members" aria-label="Participants"></ul>
      <p id="room-sync-status" role="status"></p><button id="room-sync" class="ghost-button"></button>
      <form id="room-change-role-form" hidden><label id="room-change-role-label" for="room-change-role"></label><select id="room-change-role"><option value="therapist"></option><option value="client"></option><option value="observer"></option><option value="passive"></option></select><button id="room-change-role-submit" class="ghost-button" type="submit"></button></form><div id="room-content"></div>
      <p id="room-error" role="alert"></p>
      <div id="room-actions" class="room-actions">
        <button id="room-retry" class="primary-button" hidden></button>
        <button id="room-next" class="primary-button" hidden></button>
        <button id="room-pass" class="ghost-button" hidden></button>
        <button id="room-rotate" class="primary-button" hidden></button>
        <button id="room-end" class="ghost-button" hidden></button>
        <button id="room-another" class="ghost-button" hidden></button>
      </div>
    </div>
  </section>`;
  document.querySelector('main').append(overlay);
  const el = id => overlay.querySelector(`#room-${id}`);
  let language = getLanguage() ?? 'en';
  let room = null;
  let opening = 0;
  let userId = null;
  let open = false;
  let config = null;
  let creating = null;
  let busy = false;
  let contentKey = '';
  const strings = () => copy[language] ?? copy.en;
  const read = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const write = (key, value) => { try { value === null ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(value)); } catch { /* In-memory sync still works. */ } };
  const roomKey = () => `dp_shared_room:${userId}`;
  const pendingKey = id => `dp_room_command:${userId}:${id}`;
  const sync = createRoomSync({rpc: practiceRoomRpc, watch: watchPracticeRoom, apply: applyRoom, changed: updateStatus,
    loadPending: id => read(pendingKey(id)), savePending: (id, value) => write(pendingKey(id), value), canDisplay: () => !document.hidden && !overlay.hidden && !overlay.closest('[inert]')});

  function node(tag, text, className) {
    const n = document.createElement(tag); if (text) n.textContent = text; if (className) n.className = className; return n;
  }
  function text(id, value) { el(id).textContent = value ?? ''; }
  function labels() {
    const s = strings();
    for (const key of ['title', 'intro', 'consent', 'copy', 'sync', 'retry', 'pass', 'rotate', 'end']) text(key === 'consent' ? 'consent' : key, s[key]);
    text('back', s.close); text('code-label', s.code); text('role-label', s.role);
    for (const id of ['role', 'host-role', 'change-role']) for (const option of el(id).options) option.textContent = s[option.value];
    text('host-role-label', s.role); text('change-role-label', s.role); text('change-role-submit', s.changeRole);
    text('join', getUser() ? s.join : s.signIn); text('create', getUser() ? s.create : s.signInCreate);
    text('another', s.newRoom);
    el('members').setAttribute('aria-label', language === 'no' ? 'Deltakere' : 'Participants');
  }

  async function applyRoom(next, isCurrent = () => true) {
    if (next.content_revision !== CONTENT_REVISION) throw new Error(strings().failedContent);
    await loadPracticeContent(next.language_id, next.skill_id);
    if (!isCurrent() || !open || getUser()?.id !== userId) return;
    const entries = getPracticeStatements(next.language_id, next.skill_id, next.case_id);
    if (next.statement_ids.some(id => !entries.some(e => e.id === id))) throw new Error(strings().failedContent);
    if (next.saved_score && (room?.round_id !== next.round_id || room?.saved_score !== next.saved_score)) onProgressChange?.({source: next.observer_id ? 'observer' : 'self'});
    room = next; language = next.language_id; labels();
    write(roomKey(), next.id);
    el('setup').hidden = true; el('session').hidden = false;
    text('status', ''); text('share-code', next.code.match(/.{1,4}/g).join('–'));
    const role = roomRole(next, userId);
    el('change-role').value = role;
    const skill = localizeSkill(language, next.skill_id);
    const caseData = skill?.cases.find(c => c.id === next.case_id);
    if (!role || !caseData) throw new Error(strings().failedContent);
    const s = strings(), ui = getStrings(language);
    const self = next.skill_id === 'therapist-self-awareness';
    const step = ['first_attempt', 'client_feedback', 'observer_feedback', 'retry'].indexOf(next.phase);
    const activeRole = ['therapist', 'client', 'observer', 'therapist'][step];
    const headings = self ? [ui.selfAwarenessFirstTitle, ui.selfAwarenessClientTitle, ui.triadPhaseObserverTitle, ui.selfAwarenessRetryTitle]
      : [ui.triadPhaseFirstTitle, ui.triadPhaseClientTitle, ui.triadPhaseObserverTitle, ui.triadPhaseRetryTitle];
    const instructions = self ? [ui.selfAwarenessFirstInstruction, ui.selfAwarenessClientInstruction, ui.selfAwarenessObserverInstruction, ui.selfAwarenessRetryInstruction]
      : [ui.triadPhaseFirstInstruction, ui.triadPhaseClientInstruction, ui.triadPhaseObserverInstruction, ui.triadPhaseRetryInstruction];
    const body = el('content');
    const key = `${next.round_id}:${next.phase}:${next.item_index}:${role}:${next.observer_id ?? 'pair'}`;
    // Presence refreshes never rebuild the screen or steal keyboard focus.
    if (key !== contentKey) {
      contentKey = key;
      body.replaceChildren(node('p', `${s.role}: ${role === 'client' && self ? ui.selfAwarenessReaderRole : s[role]}`, 'triad-role-badge'),
        node('h3', `${skill.name} · ${caseData.label}`));
      const expired = Date.parse(next.expires_at) <= Date.now();
      if (next.phase === 'closed' || expired) {
        body.append(node('p', expired ? s.expired : s.ended));
      } else if (next.phase === 'lobby') {
        body.append(node('h4', `${s.round} ${next.round_number} · ${s.lobby}`), node('p', s.invite));
        const prep = node('section', '', 'room-preparation');
        prep.append(node('h4', s.brief));
        if (role === 'client') prep.append(node('p', caseData.teaser), node('p', caseData.voice || caseData.history), node('p', self ? s.reader : s.read));
        else prep.append(node('p', skill.practiceFocus), node('p', skill.commonMiss), node('p', ui.triadGuideBoundary));
        body.append(prep);
      } else if (step >= 0) {
        body.append(node('p', `${s.round} ${next.round_number} · ${s.item} ${next.item_index + 1}/3 · ${next.observer_id ? step + 1 : step === 3 ? 3 : step + 1}/${next.observer_id ? 4 : 3}`, 'triad-progress'),
          node('h4', headings[step]));
        const statement = entries.find(e => e.id === next.statement_ids[next.item_index]);
        if (role !== 'therapist') body.append(node('blockquote', statement.text, 'statement-text room-statement'));
        else body.append(node('p', s.hiddenLine, 'response-hint'));
        body.append(node('p', role === activeRole ? instructions[step] : role === 'observer' ? s.observe
          : role === 'client' && (step === 0 || step === 3) ? self ? s.reader : s.read : s.listening));
        if (role !== 'client') body.append(node('aside', skill.practiceFocus, 'individual-guide'));
        if (['observer', 'passive'].includes(role)) body.append(node('p', skill.commonMiss, 'response-hint'));
        if (next.phase === 'retry' && role !== 'client') {
          const example = node('details'); example.id = 'room-example';
          example.append(node('summary', s.example), node('p', s.exampleNote), node('p', statement.suggestion));
          body.append(example);
        }
      } else if (next.phase === 'round_debrief') {
        body.append(node('h4', s.debrief), node('p', `${next.completed_ids.length} ${s.practiced} · ${next.skipped_ids.length} ${s.passed}`));
        const prompt = role === 'therapist' ? ui.triadDebriefTherapist : ['observer', 'passive'].includes(role) ? ui.triadDebriefObserver
          : self ? ui.selfAwarenessDebriefClient : ui.triadDebriefClient;
        body.append(node('p', prompt), node('p', ui.triadDebriefGroup), node('p', ui.triadDerole ?? ''));
        if (userId === (next.observer_id ?? next.therapist_id) && next.completed_ids.length) {
          const form = node('form'); form.id = 'room-rating-form';
          const label = node('label', next.observer_id ? s.score : s.selfRating); label.htmlFor = 'room-score';
          const select = node('select'); select.id = 'room-score';
          const placeholder = node('option', '—'); placeholder.value = ''; select.append(placeholder); select.required = true;
          for (let score = 1; score <= 5; score++) { const option = node('option', String(score)); option.value = String(score); select.append(option); }
          select.value = next.saved_score ?? '';
          const save = node('button', s.save, 'primary-button'); save.id = 'room-save'; save.type = 'submit';
          form.append(label, select, node('p', s.scale, 'response-hint'), save);
          form.addEventListener('submit', e => { e.preventDefault(); void sync.command('rate', Number(select.value)); });
          body.append(form);
        } else if (!next.completed_ids.length) body.append(node('p', s.noItems));
        const saved = node('p'); saved.id = 'room-saved'; saved.setAttribute('role', 'status'); body.append(saved);
      }
      {
        const heading = body.querySelector('h4') ?? body.querySelector('h3'); heading.tabIndex = -1; heading.focus({preventScroll: true});
      }
    }
    if (el('saved')) el('saved').textContent = next.saved_score ? `${s.saved} · ${next.saved_score}/5` : '';
  }

  function updateStatus({snapshot, pending, commanding, error, fresh}) {
    if (!open || !snapshot) { if (open && error) text('status', error); return; }
    const s = strings(), role = roomRole(snapshot, userId);
    const ended = snapshot.phase === 'closed' || Date.parse(snapshot.expires_at) <= Date.now();
    const waiting = !snapshot.observer_id ? (language === 'no' ? 'Venter på at terapeuten og klienten viser dette steget' : 'Waiting for the therapist and client to display this step') : s.waiting;
    text('sync-status', ended ? Date.parse(snapshot.expires_at) <= Date.now() ? s.expired : s.ended
      : !fresh ? s.reconnect : roomEveryoneReady(snapshot) ? s.ready : waiting);
    text('error', error);
    const ids = snapshot.member_ids ?? ['therapist', 'client', 'observer'].map(r => snapshot[`${r}_id`]).filter(Boolean);
    const members = ids.map((id, index) => {
      const presence = snapshot.presence?.[id], memberRole = roomRole(snapshot, id);
      const status = !presence?.connected ? s.participantOffline
        : presence.acknowledged_version !== snapshot.version ? s.participantSyncing : s.participantReady;
      const displayName = snapshot.members?.find(m => m.user_id === id)?.display_name?.trim().slice(0, 80) || `${index + 1}`;
      const name = `${displayName}${id === userId ? ` (${s.you})` : ''}`;
      return node('li', `${name} · ${s[memberRole]}${id === snapshot.host_id ? ` · ${s.host}` : ''} · ${status}`,
        presence?.connected && presence.acknowledged_version === snapshot.version ? 'is-ready' : '');
    });
    el('members').replaceChildren(...members);
    el('change-role-form').hidden = snapshot.phase !== 'lobby' || ended;
    for (const option of el('change-role').options) option.disabled = option.value !== 'passive' && !!snapshot[`${option.value}_id`] && snapshot[`${option.value}_id`] !== userId;
    el('change-role-submit').disabled = commanding || !!pending || !fresh;
    const controls = snapshot.host_id === userId && !ended;
    const active = ['first_attempt', 'client_feedback', 'observer_feedback', 'retry'].includes(snapshot.phase);
    el('next').hidden = !controls || (!active && snapshot.phase !== 'lobby') || !!pending;
    text('next', snapshot.phase === 'lobby' ? s.start : snapshot.phase === 'retry' ? s.finishItem : s.advance);
    el('next').disabled = commanding || !fresh || !roomEveryoneReady(snapshot);
    el('pass').hidden = !controls || !active || !!pending;
    el('pass').disabled = el('next').disabled;
    el('rotate').hidden = !controls || snapshot.phase !== 'round_debrief' || !!pending;
    el('rotate').disabled = el('next').disabled;
    el('end').hidden = !controls || !!pending; el('end').disabled = commanding || !fresh;
    el('retry').hidden = !pending; el('retry').disabled = commanding || !fresh;
    el('another').hidden = !ended;
    const save = el('save'); if (save) save.disabled = commanding || !!pending || !fresh;
    el('sync').disabled = commanding;
  }

  function dismiss(navigate = true) {
    open = false; opening++; sync.stop(); room = null; contentKey = '';
    overlay.hidden = true; overlay.classList.add('is-hidden'); if (navigate) onClose?.();
  }
  async function request(task) {
    if (busy) return;
    const epoch = opening;
    busy = true; text('status', strings().loading);
    el('join').disabled = true; el('create').disabled = true;
    try {
      const next = await task();
      if (next && epoch === opening && open) {
        write(roomKey(), next.id);
        await sync.start(next);
      }
    } catch (failure) { if (epoch === opening) text('status', failure.message); }
    finally { if (epoch === opening) { busy = false; el('join').disabled = false; el('create').disabled = false; } }
  }
  async function show({createConfig = null, resume = true} = {}) {
    if (open) dismiss();
    userId = getUser()?.id ?? null; language = getLanguage() ?? 'en'; config = createConfig; creating = null;
    open = true; opening++; busy = false; room = null; contentKey = '';
    labels(); text('status', ''); el('setup').hidden = false; el('session').hidden = true;
    el('create').hidden = !config; el('join-form').hidden = !!config;
    el('role').value = 'auto';
    el('host-role').hidden = !config; el('host-role-label').hidden = !config;
    overlay.hidden = false; overlay.classList.remove('is-hidden'); onOpen?.();
    (config ? el('create') : el('code')).focus();
    const last = userId && resume ? read(roomKey()) : null;
    if (last) await request(() => practiceRoomRpc('sync_practice_room', {input_room_id: last, input_acknowledged_version: -1}));
  }
  el('back').addEventListener('click', () => dismiss());
  el('join-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!getUser()) { dismiss(); signIn(); return; }
    void request(() => practiceRoomRpc('join_practice_room', {input_code: el('code').value, input_role: el('role').value}));
  });
  el('create').addEventListener('click', () => {
    if (!getUser()) { dismiss(); signIn(); return; }
    void request(async () => {
      const epoch = opening;
      if (!creating) {
        const selected = {...await config(), hostRole: el('host-role').value};
        if (epoch !== opening || !open || getUser()?.id !== userId) return;
        const previous = read(`dp_room_creation:${userId}`);
        const sameSetup = previous && ['languageId', 'skillId', 'caseId', 'contentRevision', 'hostRole'].every(key => previous.config?.[key] === selected[key]);
        creating = sameSetup ? previous : {id: crypto.randomUUID(), config: selected};
        write(`dp_room_creation:${userId}`, creating);
        write(roomKey(), creating.id);
      }
      const creation = creating, creatorId = userId;
      const next = await practiceRoomRpc('create_practice_room', {input_config: creation.config, input_room_id: creation.id});
      if (read(`dp_room_creation:${creatorId}`)?.id === creation.id) write(`dp_room_creation:${creatorId}`, null);
      if (creating === creation) creating = null;
      return next;
    });
  });
  el('change-role-form').addEventListener('submit', event => { event.preventDefault(); void sync.command(`role_${el('change-role').value}`); });
  el('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(room.code); text('status', strings().copied); }
    catch { text('status', `${strings().code}: ${room.code}`); }
  });
  el('sync').addEventListener('click', () => { void sync.sync(); });
  el('next').addEventListener('click', () => { void sync.command(room.phase === 'lobby' ? 'start' : 'advance'); });
  el('pass').addEventListener('click', () => { if (window.confirm(strings().confirmPass)) void sync.command('pass'); });
  el('rotate').addEventListener('click', () => { void sync.command('rotate'); });
  el('end').addEventListener('click', () => { if (window.confirm(strings().confirmEnd)) void sync.command('close'); });
  el('retry').addEventListener('click', () => { const p = sync.status().pending; if (p) void sync.command(p.action, p.score); });
  el('another').addEventListener('click', () => { write(roomKey(), null); dismiss(); void show({resume: false}); });
  window.addEventListener('online', () => { void sync.sync(); });
  window.addEventListener('focus', () => { void sync.sync(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) void sync.sync(); });
  return {show, element: overlay, hide() { if (open) dismiss(false); }, authChanged() { if (open && (getUser()?.id ?? null) !== userId) dismiss(); }};
}

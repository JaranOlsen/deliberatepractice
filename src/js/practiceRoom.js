import {isTaskExercise,taskEpisodeAt} from './taskProtocol.js';
import {taskCopy,createTaskPosition,createTaskRoleGuide,createTaskWorkflow} from './taskPracticeUI.js';
import {loadMasteryExercise,EXERCISE_CATALOG} from "./masteryContent.js";
import {createMasteryFeedback} from "./masteryFeedbackUI.js";
import {getSkillFeedback} from "../data/skillFeedback.js";
import {GROUP_PRACTICE_COPY, createGroupWorkflow, createGroupRoleGuide} from './groupPracticeUI.js';
import {practiceRoomRpc, watchPracticeRoom} from './backend.js';
import {loadPracticeContent, getPracticeStatements} from './practiceContent.js';
import {CONTENT_REVISION, FOCUSED_CONTENT_COMPATIBILITY} from './practiceData.js';
import {groupSetProgress} from './groupRound.js';
import {createRoomSync, roomRole, roomEveryoneReady, roomNeedsObserver, missingRoomRoles, roomReadinessRoles, waitingRoomReadiness, roomCanStart} from './practiceRoomSync.js';
import {readRoomInvite, rememberRoomInvite, normalizeRoomCode} from './roomInvite.js';
import {createSkillFeedback} from './skillFeedbackUI.js';
import {createPracticeGoalView} from './practiceGoalUI.js';

const copy = {
  en: {
    title: 'Group practice', hub: 'Practice together', hubIntro: 'Create a room and invite your group. Choose the skill and case together once everyone is here.', openCreate: 'Create a room', openJoin: 'Join with a code', resume: 'Return to your room', people: 'Room & people', peopleCount: '{count} people', share: 'Share invite', linkCopied: 'Invite link copied', roleOptions: 'Starting role (optional)', choosing: 'Choose what to practice', waitingForHost: 'The host is choosing a skill and case. You can invite others or choose your role while you wait.', choose: 'Choose skill and case', changePractice: 'Change skill or case', leave: 'Leave room', leaveTitle: 'Leave this room?', leaveDescription: 'You can rejoin with the invite. Leaving an active role ends the current round and returns the group to preparation. Saved ratings stay.', leaveWatching: 'The group can continue. You can rejoin with the invite.', endTitle: 'End the room for everyone?', endDescription: 'Everyone leaves this session. Saved ratings stay; unfinished items will not be rated.', cancel: 'Keep practicing', endedNote: 'Saved ratings are kept. Unfinished items are not rated.', interrupted: 'A participant left an active role. Prepare a new round before continuing.', finish: 'Back to home', privacy: 'Ratings and privacy', close: 'Home', join: 'Join a group', create: 'Create group room',
    intro: 'Use your own phones. Keep your video call open for speaking.',
    createTitle: 'Create a room', joinTitle: 'Join a room', createIntro: 'Invite your group, then choose practice. Keep your video call open.',
    code: 'Room code', role: 'Your role', chooseRole: 'Choose your role', selectRole: 'Choose role', therapist: 'Therapist', client: 'Client', observer: 'Active observer', passive: 'Watching observer', auto: 'Next available role', host: 'Host', you: 'you', changeRole: 'Change role', selfRating: 'Your self-assessment',
    consent: 'Ratings assess the therapist’s use of the selected skill. The active observer saves the rating; in pairs the therapist saves a self-assessment. Spoken responses and feedback are not recorded. Keep roles for twelve items. Rate every three, then choose roles and practice again after the complete round.',
    signIn: 'Sign in to join', signInCreate: 'Sign in to create a room', copy: 'Copy room code', copied: 'Code copied',
    invite: 'Invite your group. The room lasts eight hours.',
    waiting: 'Waiting for the therapist, client and active observer to display this step', missingRoles: 'Choose the missing roles: {roles}.', ready: 'Ready · devices are in sync',
    reconnect: 'Connection interrupted. Reconnecting… The round waits until everyone is up to date.',
    sync: 'Sync now', retry: 'Retry last action', loading: 'Loading the shared round…',
    lobby: 'Get ready', start: 'Start round', advance: 'Continue to next step', finishItem: 'Finish item',
    prepCue: {therapist: 'Listen, then respond in your own words.', client: 'Read the lines in role. Repeat for the retry.', observer: 'Guide the round. Name one strength and one change to try.', passive: 'Listen for the skill. Let the active observer guide.'},
    pairPreparation: 'Start when you’re both ready. Finish each item after the retry.', observerStarts: 'The observer starts the round.', therapistStarts: 'The therapist starts the round.',
    pass: 'Pass this item', confirmPass: 'Pass this item for everyone? It will not count as practiced.',
    rotate: 'Next round · rotate roles', end: 'End room for everyone', confirmEnd: 'End this group session for everyone?',
    ended: 'This group session has ended.', expired: 'This room has expired. Create a new room to continue.',
    ...GROUP_PRACTICE_COPY.en,
    set: 'Set', nextSet: 'Next 3 items · keep roles', nextRound: 'Choose roles, skill & case', roundPlan: '12 items · 4 sets of 3 · keep your roles', rateSet: 'Rate this set', round: 'Round', item: 'Item', debrief: 'Reflect together', practiced: 'practiced', passed: 'passed',
    save: 'Save skill rating', updateRating: 'Update rating', skipRating: 'Continue without rating', skipChanges: 'Continue without changes', saved: 'Saved to the therapist’s progress',
    ratingPlaceholder: 'Choose a rating', observerRating: 'The observer rates this set.', therapistRating: 'The therapist self-assesses this set.',
    scoreLabels: ['Not yet demonstrated', 'Emerging with guidance', 'Adequate in parts', 'Well demonstrated', 'Skillfully demonstrated'],
    score: 'Therapist’s use of the skill', noItems: 'Every item was passed. No rating will be saved.',
    participantWaiting: 'Not joined', participantSyncing: 'Catching up', participantReady: 'Up to date',
    participantOffline: 'Connection lost', newRoom: 'New room',
    failedContent: 'This room uses a different or unavailable content version. Refresh the app and sync again.',
    invalidCode: 'Enter the twelve-character room code.', roles: 'Roles for this round', unfilled: 'Choose a role', assigned: 'Assigned', preparing: 'Preparing', personReady: 'Ready', startsRound: 'Starts the round',
    readyButton: 'I’m ready', notReadyButton: 'Not ready yet', waitingReady: 'Waiting for {names} to get ready.', waitingSync: 'Waiting for {names} to sync.', waitingOffline: 'Waiting for {names} to reconnect.',
    transferHost: 'Transfer hosting', transferTo: 'New host', selectHost: 'Choose a connected participant', transferTitle: 'Transfer hosting to {name}?', transferDescription: 'They will choose the material and manage the room. Your practice roles stay the same.',
    recoverHost: 'Take over hosting', recoverTitle: 'Take over hosting?', recoverDescription: 'The host has not been active in this room for five minutes. You will choose the material and manage the room. Practice roles stay the same.', hostAway: 'The host has been away from this room for five minutes.',
  },
  no: {
    title: 'Gruppeøving', hub: 'Øv sammen', hubIntro: 'Opprett et rom og inviter gruppen. Velg ferdighet og kasus sammen når alle er her.', openCreate: 'Opprett et rom', openJoin: 'Bli med med kode', resume: 'Tilbake til rommet ditt', people: 'Rom og deltakere', peopleCount: '{count} deltakere', share: 'Del invitasjon', linkCopied: 'Invitasjonslenken er kopiert', roleOptions: 'Startrolle (valgfritt)', choosing: 'Velg hva dere vil øve på', waitingForHost: 'Verten velger ferdighet og kasus. Du kan invitere andre eller velge rolle mens du venter.', choose: 'Velg ferdighet og kasus', changePractice: 'Bytt ferdighet eller kasus', leave: 'Forlat rommet', leaveTitle: 'Forlate dette rommet?', leaveDescription: 'Du kan bli med igjen med invitasjonen. Hvis du har en aktiv rolle, avsluttes runden og gruppen går tilbake til forberedelsene. Lagrede vurderinger beholdes.', leaveWatching: 'Gruppen kan fortsette. Du kan bli med igjen med invitasjonen.', endTitle: 'Avslutte rommet for alle?', endDescription: 'Økten avsluttes for alle. Lagrede vurderinger beholdes; ufullførte utsagn vurderes ikke.', cancel: 'Fortsett å øve', endedNote: 'Lagrede vurderinger beholdes. Ufullførte utsagn vurderes ikke.', interrupted: 'En deltaker forlot en aktiv rolle. Forbered en ny runde før dere fortsetter.', finish: 'Tilbake til øvingsoversikten', privacy: 'Vurderinger og personvern', close: 'Hjem', join: 'Bli med i en gruppe', create: 'Opprett grupperom',
    intro: 'Bruk hver deres mobil. Ha videosamtalen åpen for å snakke sammen.',
    createTitle: 'Opprett et rom', joinTitle: 'Bli med i et rom', createIntro: 'Inviter gruppen, og velg øving. Ha videosamtalen åpen.',
    code: 'Romkode', role: 'Din rolle', chooseRole: 'Velg din rolle', selectRole: 'Velg rolle', therapist: 'Terapeut', client: 'Klient', observer: 'Aktiv observatør', passive: 'Observatør som følger med', auto: 'Neste ledige rolle', host: 'Vert', you: 'deg', changeRole: 'Bytt rolle', selfRating: 'Din egenvurdering',
    consent: 'Vurderingen gjelder terapeutens bruk av den valgte ferdigheten. Den aktive observatøren lagrer vurderingen; i par lagrer terapeuten en egenvurdering. Muntlige svar og tilbakemeldinger blir ikke registrert. Behold rollene i tolv utsagn. Vurder etter hvert tredje, og velg roller og øving på nytt etter hele runden.',
    signIn: 'Logg inn for å bli med', signInCreate: 'Logg inn for å opprette et rom', copy: 'Kopier romkode', copied: 'Koden er kopiert',
    invite: 'Inviter gruppen. Rommet varer i åtte timer.',
    waiting: 'Venter på at terapeuten, klienten og den aktive observatøren viser dette steget', missingRoles: 'Velg rollene som mangler: {roles}.', ready: 'Klar · enhetene er synkronisert',
    reconnect: 'Forbindelsen er brutt. Kobler til igjen… Runden venter til alle er oppdatert.',
    sync: 'Synkroniser nå', retry: 'Prøv siste handling igjen', loading: 'Laster den felles runden…',
    lobby: 'Gjør deg klar', start: 'Start runden', advance: 'Fortsett til neste steg', finishItem: 'Fullfør utsagnet',
    prepCue: {therapist: 'Lytt, og svar med dine egne ord.', client: 'Les utsagnene i rollen. Gjenta ved det nye forsøket.', observer: 'Led runden. Nevn én styrke og én endring å prøve.', passive: 'Lytt etter ferdigheten. La den aktive observatøren lede.'},
    pairPreparation: 'Start når dere begge er klare. Fullfør hvert utsagn etter det nye forsøket.', observerStarts: 'Observatøren starter runden.', therapistStarts: 'Terapeuten starter runden.',
    pass: 'Stå over utsagnet', confirmPass: 'Stå over utsagnet for alle? Det telles ikke som øvd.',
    rotate: 'Neste runde · roter roller', end: 'Avslutt rommet for alle', confirmEnd: 'Avslutte gruppeøkten for alle?',
    ended: 'Gruppeøkten er avsluttet.', expired: 'Rommet har utløpt. Opprett et nytt rom for å fortsette.',
    ...GROUP_PRACTICE_COPY.no,
    set: 'Sett', nextSet: 'Neste 3 utsagn · behold rollene', nextRound: 'Velg roller, ferdighet og kasus', roundPlan: '12 utsagn · 4 sett med 3 · behold rollene', rateSet: 'Vurder dette settet', round: 'Runde', item: 'Utsagn', debrief: 'Reflekter sammen', practiced: 'øvd', passed: 'stått over',
    save: 'Lagre ferdighetsvurdering', updateRating: 'Oppdater vurdering', skipRating: 'Fortsett uten vurdering', skipChanges: 'Fortsett uten endringer', saved: 'Lagret i terapeutens fremgang',
    ratingPlaceholder: 'Velg en vurdering', observerRating: 'Observatøren vurderer dette settet.', therapistRating: 'Terapeuten vurderer seg selv i dette settet.',
    scoreLabels: ['Ikke vist ennå', 'På vei med veiledning', 'Tilfredsstillende i deler', 'Godt demonstrert', 'Svært godt demonstrert'],
    score: 'Terapeutens bruk av ferdigheten', noItems: 'Alle utsagn ble stått over. Ingen vurdering lagres.',
    participantWaiting: 'Ikke med ennå', participantSyncing: 'Henter siste steg', participantReady: 'Oppdatert',
    participantOffline: 'Mistet forbindelsen', newRoom: 'Nytt rom',
    failedContent: 'Rommet bruker en annen eller utilgjengelig innholdsversjon. Last appen på nytt og synkroniser igjen.',
    invalidCode: 'Skriv inn romkoden med tolv tegn.', roles: 'Roller i denne runden', unfilled: 'Velg en rolle', assigned: 'Valgt', preparing: 'Forbereder seg', personReady: 'Klar', startsRound: 'Starter runden',
    readyButton: 'Jeg er klar', notReadyButton: 'Ikke klar ennå', waitingReady: 'Venter på at {names} blir klar.', waitingSync: 'Venter på at {names} blir synkronisert.', waitingOffline: 'Venter på at {names} kobler til igjen.',
    transferHost: 'Overfør vertsrollen', transferTo: 'Ny vert', selectHost: 'Velg en tilkoblet deltaker', transferTitle: 'Overføre vertsrollen til {name}?', transferDescription: 'Den nye verten velger innhold og administrerer rommet. Øvingsrollene deres beholdes.',
    recoverHost: 'Ta over som vert', recoverTitle: 'Ta over som vert?', recoverDescription: 'Verten har ikke vært aktiv i dette rommet på fem minutter. Du vil velge innhold og administrere rommet. Øvingsrollene beholdes.', hostAway: 'Verten har vært borte fra rommet i fem minutter.',
  }
};

export function createPracticeRoomView({dialogs, onChoose, onOpen, onClose, getUser, getLanguage, localizeSkill, getStrings, signIn, onProgressChange, onMaterialChange, applyTheme}) {
  const overlay = document.createElement('div');
  overlay.id = 'room-panel'; overlay.className = 'panel room-panel is-hidden'; overlay.hidden = true;
  overlay.innerHTML = `<section class="room-dialog">
    <header id="room-header" class="room-header"><h2 id="room-title"></h2><button id="room-back" class="ghost-button"></button></header>
    <p id="room-status" role="status" aria-live="polite"></p>
    <div id="room-setup">
      <div id="room-hub"><p id="room-hub-intro"></p><div class="room-entry-actions">
        <button id="room-resume" class="primary-button" hidden></button><button id="room-open-create" class="primary-button"></button>
        <button id="room-open-join" class="ghost-button"></button></div></div>
      <div id="room-entry"><p id="room-intro"></p>
        <form id="room-join-form"><label for="room-code" id="room-code-label"></label>
          <input id="room-code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="20" required placeholder="ABCD 1234 EF56">
          <details id="room-join-options"><summary id="room-role-options"></summary><label for="room-role" id="room-role-label"></label>
            <select id="room-role"><option value="auto"></option><option value="therapist"></option><option value="client"></option><option value="observer"></option><option value="passive"></option></select></details>
          <details><summary id="room-privacy"></summary><p id="room-consent"></p></details><button id="room-join" class="primary-button" type="submit"></button>
        </form>
        <details id="room-host-options"><summary id="room-host-options-label"></summary><label id="room-host-role-label" for="room-host-role"></label>
          <select id="room-host-role"><option value="therapist"></option><option value="client"></option><option value="observer"></option></select></details>
        <button id="room-create" class="primary-button" hidden></button>
      </div>
    </div>
    <div id="room-session" hidden>
      <p id="room-role-badge" class="triad-role-badge"></p>
      <section id="room-role-summary" class="room-role-summary" hidden aria-labelledby="room-roles-heading"><h3 id="room-roles-heading"></h3><ul id="room-seats"></ul></section>
      <details id="room-details" class="room-details"><summary><span id="room-people-label"></span><span id="room-people-count"></span></summary>
        <div id="room-invite" class="room-code-row"><strong id="room-share-code"></strong><button id="room-share" class="ghost-button"></button><button id="room-copy" class="ghost-button"></button></div>
        <p id="room-invite-note" class="response-hint"></p><ul id="room-members" class="room-members" aria-label="Participants"></ul>
        <form id="room-change-role-form" hidden><label id="room-change-role-label" for="room-change-role"></label><select id="room-change-role"><option value="therapist"></option><option value="client"></option><option value="observer"></option><option value="passive"></option></select><button id="room-change-role-submit" class="ghost-button" type="submit"></button></form>
        <form id="room-transfer-form" hidden><label id="room-transfer-label" for="room-transfer-target"></label><select id="room-transfer-target"><option value=""></option></select><button id="room-transfer" class="ghost-button" type="submit"></button></form>
        <button id="room-sync" class="ghost-button"></button><div class="room-exit-actions"><button id="room-leave" class="ghost-button" hidden></button><button id="room-end" class="ghost-button" hidden></button></div>
      </details>
      <div id="room-host-recovery" class="room-host-recovery" hidden><p id="room-host-away"></p><button id="room-recover" class="ghost-button"></button></div>
      <p id="room-sync-status" class="room-sync-status" role="status"></p>
      <div id="room-content"></div><button id="room-choose" class="primary-button" hidden></button>
      <p id="room-error" role="alert"></p>
      <div id="room-actions" class="room-actions" hidden>
        <button id="room-ready" class="primary-button" hidden></button>
        <button id="room-save" class="primary-button" type="submit" form="room-rating-form" hidden></button>
        <button id="room-retry" class="primary-button" hidden></button><button id="room-next" class="primary-button" hidden></button>
        <button id="room-pass" class="ghost-button" hidden></button><button id="room-rotate" class="primary-button" hidden></button>
        <button id="room-done" class="primary-button" hidden></button><button id="room-another" class="ghost-button" hidden></button>
      </div>
    </div>
  </section>`;
  document.querySelector('main').append(overlay);
  const confirmOverlay = document.createElement('div');
  confirmOverlay.className = 'account-overlay is-hidden'; confirmOverlay.hidden = true; confirmOverlay.id = 'room-exit-overlay';
  confirmOverlay.innerHTML = `<section class="account-modal room-exit-modal" role="dialog" aria-modal="true" aria-labelledby="room-exit-title" aria-describedby="room-exit-description"><h2 id="room-exit-title"></h2><p id="room-exit-description"></p><div class="leave-actions"><button id="room-exit-cancel" class="ghost-button"></button><button id="room-exit-confirm" class="primary-button"></button></div></section>`;
  document.body.append(confirmOverlay);
  let confirming = null;
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
  let goalView = null;
  const roleGuideOpen = new Map();
  const strings = () => copy[language] ?? copy.en;
  const read = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const write = (key, value) => { try { value === null ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(value)); } catch { /* In-memory sync still works. */ } };
  const roomKey = () => `dp_shared_room:${userId}`;
  const pendingKey = id => `dp_room_command:${userId}:${id}`;
  function clearInvite() {
    write('dp_group_invite', null);
    const url = new URL(window.location.href); url.searchParams.delete('room'); window.history.replaceState(null, '', url);
  }
  const sync = createRoomSync({rpc: practiceRoomRpc, watch: watchPracticeRoom, apply: applyRoom, changed: updateStatus,
    loadPending: id => read(pendingKey(id)), savePending: (id, value) => write(pendingKey(id), value), canDisplay: () => !document.hidden && !overlay.hidden && !overlay.closest('[inert]')});

  function node(tag, text, className) {
    const n = document.createElement(tag); if (text) n.textContent = text; if (className) n.className = className; return n;
  }
  function text(id, value) { el(id).textContent = value ?? ''; }
  function memberName(snapshot, id) {
    const index = snapshot.member_ids?.indexOf(id) ?? -1;
    return snapshot.members?.find(m => m.user_id === id)?.display_name?.trim().slice(0, 80)
      || `${language === 'no' ? 'Deltaker' : 'Participant'} ${index + 1}`;
  }
  function memberStatus(snapshot, id, role) {
    const s = strings(), presence = snapshot.presence?.[id];
    if (!presence?.connected) return s.participantOffline;
    if (presence.acknowledged_version !== snapshot.version) return s.participantSyncing;
    if (snapshot.phase === 'choosing') return s.assigned;
    if (snapshot.phase === 'lobby' && snapshot.readiness_required) {
      if (roomReadinessRoles(snapshot).includes(role)) return snapshot.ready_ids?.includes(id) ? s.personReady : s.preparing;
      if (id === (snapshot.observer_id ?? snapshot.therapist_id)) return s.startsRound;
    }
    return s.participantReady;
  }
  function labels() {
    const s = strings();
    overlay.querySelector('.room-dialog').setAttribute('aria-label', s.title);
    for (const key of ['title', 'intro', 'consent', 'copy', 'sync', 'retry', 'pass', 'rotate', 'end']) text(key === 'consent' ? 'consent' : key, s[key]);
    text('back', s.close); text('code-label', s.code); text('role-label', s.role);
    for (const id of ['role', 'host-role', 'change-role']) for (const option of el(id).options) option.textContent = s[option.value];
    text('host-role-label', s.role); text('change-role-label', s.role); text('change-role-submit', s.changeRole);
    text('join', getUser() ? s.join : s.signIn); text('create', getUser() ? s.create : s.signInCreate);
    text('another', s.newRoom); text('hub-intro', s.hubIntro); text('open-create', s.openCreate); text('open-join', s.openJoin); text('resume', s.resume);
    text('done', s.finish);
    text('people-label', s.people); text('share', s.share); text('leave', s.leave); text('invite-note', s.invite); text('role-options', s.roleOptions); text('host-options-label', s.roleOptions); text('privacy', s.privacy);
    text('roles-heading', s.roles); text('transfer-label', s.transferTo); text('transfer', s.transferHost); text('recover', s.recoverHost); text('host-away', s.hostAway);
    el('members').setAttribute('aria-label', language === 'no' ? 'Deltakere' : 'Participants');
  }

  async function applyRoom(next, isCurrent = () => true) {
    const mastery = next.exercise_type === 'mastery';
    const configured = !!next.case_id && (mastery ? !!next.exercise_id : !!next.skill_id);
    let exercise = null;
    const ended = next.phase === 'closed' || Date.parse(next.expires_at) <= Date.now();
    let entries = [];
    if (configured && !ended) {
      if (next.content_revision !== CONTENT_REVISION && (mastery || !FOCUSED_CONTENT_COMPATIBILITY[next.content_revision]?.includes(next.skill_id))) throw new Error(strings().failedContent);
      if(mastery) {
        exercise=await loadMasteryExercise(next.language_id,next.exercise_id,next.content_revision);
        entries=exercise.scenes;
        if(JSON.stringify(next.statement_ids)!==JSON.stringify(entries.map(e=>e.id)) || next.case_id!==exercise.caseId || next.difficulty!==exercise.difficulty)throw new Error(strings().failedContent);
      }else {
        await loadPracticeContent(next.language_id, next.skill_id);
        entries = getPracticeStatements(next.language_id, next.skill_id, next.case_id, next.difficulty);
      }
      if (next.statement_ids.some(id => !entries.some(e => e.id === id))) throw new Error(strings().failedContent);
    }
    const task=isTaskExercise(exercise);
    if (!isCurrent() || !open || getUser()?.id !== userId) return;
    if (configured && !ended && (room?.id !== next.id || room?.skill_id !== next.skill_id || room?.exercise_id !== next.exercise_id || room?.case_id !== next.case_id || room?.language_id !== next.language_id)) onMaterialChange?.(next);
    if (next.saved_score && (room?.round_id !== next.round_id || room?.saved_score !== next.saved_score)) onProgressChange?.({source: next.observer_id ? 'observer' : 'self',exerciseType:next.exercise_type});
    room = next; language = next.language_id; labels();
    overlay.dataset.phase = next.phase; overlay.dataset.version = String(next.version);
    write(roomKey(), next.id);
    el('setup').hidden = true; el('session').hidden = false;
    text('status', ''); text('share-code', next.code.match(/.{1,4}/g).join('–'));
    const role = roomRole(next, userId);
    const assignment = `${next.round_id}:${role}`;
    if (el('change-role').dataset.assignment !== assignment) {
      el('change-role').value = role;
      el('change-role').dataset.assignment = assignment;
    }
    const currentScene = entries.find(e=>e.id===next.statement_ids[next.item_index]);
    const skill = localizeSkill(language, mastery ? currentScene?.skillId : next.skill_id, next.difficulty);
    const caseData = (mastery ? localizeSkill(language,'empathic-understanding',next.difficulty) : skill)?.cases.find(c => c.id === next.case_id);
    applyTheme?.(overlay, configured && !ended ? mastery ? 'empathic-understanding' : skill?.id : null, caseData?.difficulty);
    applyTheme?.(confirmOverlay, configured && !ended ? mastery ? 'empathic-understanding' : skill?.id : null, caseData?.difficulty);
    if (!role || (configured && !caseData && !ended)) throw new Error(strings().failedContent);
    const s = strings(), ui = getStrings(language);
    text('change-role-label', next.phase === 'choosing' && role === 'passive' ? s.chooseRole : s.role);
    text('change-role-submit', next.phase === 'choosing' && role === 'passive' ? s.selectRole : s.changeRole);
    const set = groupSetProgress(next.statement_ids, next.item_index, next.completed_ids, next.skipped_ids);
    const self = next.skill_id === 'therapist-self-awareness';
    const active = ['practicing','first_attempt','client_feedback','observer_feedback','retry'].includes(next.phase);
    el('header').hidden = ended || next.phase !== 'choosing';
    const body = el('content');
    text('role-badge', `${s.role}: ${role === 'client' && self ? ui.selfAwarenessReaderRole : s[role]}`);
    el('role-badge').hidden = ended || (next.phase === 'choosing' && role === 'passive');
    if (ended) { write(roomKey(), null); text('role-badge', ''); }
    if (!contentKey || contentKey.split(':')[1] !== next.phase) el('details').open = false;
    if (next.phase === 'choosing' && !ended) {
      if (el('invite').parentElement !== el('session')) el('details').before(el('invite'));
    }
    else if (el('invite').parentElement !== el('details')) el('details').prepend(el('invite'));
    const key = `${next.round_id}:${next.phase}:${next.item_index}:${role}:${next.host_id}:${next.observer_id ?? (roomNeedsObserver(next) ? 'observer-needed' : 'pair')}:${next.skill_id}:${next.case_id}`;
    // Presence refreshes never rebuild the screen or steal keyboard focus.
    if (key !== contentKey) {
      contentKey = key;
      goalView?.destroy(); goalView = null;
      body.replaceChildren();
      if (configured && !ended) {
        const heading=node('h3',task ? active?taskEpisodeAt(exercise,next.item_index).title:exercise.title : mastery && !active ? exercise.title : skill.name,'room-practice-heading');
        if(mastery && active)applyTheme?.(heading,skill.id,caseData.difficulty);
        body.append(heading,node('p',caseData.supportedLevels.length>1?`${caseData.label} · ${caseData.difficultyLabel}`:caseData.label,'room-case-heading'));
      }
      const expired = Date.parse(next.expires_at) <= Date.now();
      if (next.phase === 'closed' || expired) {
        body.append(node('h3', expired ? s.expired : s.ended), node('p', s.endedNote));
      } else if (next.phase === 'choosing') {
        body.append(node('h3', next.round_size === 12 && next.round_number > 1 ? s.nextRound : s.choosing));
        if (next.host_id !== userId) body.append(node('p', s.waitingForHost));
      } else if (next.phase === 'lobby') {
        body.append(node('p',task?taskCopy(language).plan:`${s.round} ${next.round_number} · ${next.round_size === 12 ? s.roundPlan : s.lobby}`, 'triad-progress'));
        if (next.round_interrupted) body.append(node('p', s.interrupted, 'response-hint'));
        const prep = node('section', '', 'room-preparation');
        if (role === 'client') {
          prep.classList.add('room-client-preparation');
          prep.append(node('p', caseData.teaser || caseData.history));
          const background = node('section', '', 'case-brief-section');
          background.append(node('h4', ui.roleBriefHeading, 'case-section-title'));
          const facts = node('dl', '', 'case-role-list');
          for (const [label, value] of [[caseData.schemaLabel, caseData.schema], [ui.corePainLabel, caseData.corePain], [ui.styleLabel, caseData.style], [ui.casePracticeEdgeLabel, caseData.practiceEdge]]) {
            if (!value?.trim()) continue;
            const fact = node('div', '', 'case-role-item');
            fact.append(node('dt', label), node('dd', value)); facts.append(fact);
          }
          background.append(facts); prep.append(background);
          const voice = caseData.voice || caseData.history;
          if (voice?.trim()) {
            const section = node('section', '', 'case-voice-section');
            section.append(node('h4', ui.clientVoiceHeading, 'case-section-title'), node('p', voice)); prep.append(section);
          }
        } else {
          if(mastery)prep.append(node('p',caseData.teaser),node('p',exercise.orientation));
          else prep.append(node('p',skill.practiceFocus));
          if(mastery && ['observer','passive'].includes(role)) {
            const outline=node('details');outline.append(node('summary',task?language==='no'?'De fire episodene':'The four episodes':language==='no'?'De tolv øyeblikkene':'The twelve moments'));
            const list=node('ol');if(task)for(const episode of exercise.episodes)list.append(node('li',episode.title));else for(const scene of entries)list.append(node('li',localizeSkill(language,scene.skillId).name));outline.append(list);prep.append(outline);
          }
        }
        if(task){const details=node('details');details.append(node('summary',language==='no'?'Om oppgaven':'About the task'),node('p',exercise.guide));prep.append(details);if(role==='client')prep.append(node('p',exercise.orientation));}
        prep.append(node('p', self ? s.awarenessCue[role] : !roomNeedsObserver(next) && role === 'therapist' ? s.pairPreparation : s.prepCue[role], 'room-preparation-cue'));
        if (self && !roomNeedsObserver(next) && role === 'therapist') prep.append(node('p', s.pairPreparation, 'room-preparation-cue'));
        body.append(prep);
      } else if (active) {
        body.append(node('p',task?`${taskCopy(language).episode} ${set.number}/4 · ${taskCopy(language).turn} ${next.item_index%3+1}/3`:`${s.set} ${set.number}/${set.total} · ${s.item} ${next.item_index + 1}/${next.statement_ids.length}`,'triad-progress'));
        const statement = currentScene;
        if(mastery)body.append(node('p',statement.bridge,'mastery-scene-bridge'));
        if(task)body.append(createTaskPosition(statement,language));
        if (role === 'client' || (mastery && !task && ['observer','passive'].includes(role))) {
          const card = node('section', '', 'statement-panel');
          card.append(node('blockquote', statement.text, 'statement-text room-statement')); body.append(card);
        }
        else if (role === 'therapist' || task && ['observer','passive'].includes(role)) body.append(node('aside', mastery ? statement.prompt : skill.practiceFocus, 'individual-guide'));
        if(mastery && !task && ['observer','passive'].includes(role)) {
          const cues=node('ul','', 'mastery-scene-cues');for(const cue of getSkillFeedback(statement.skillId,language).cues)cues.append(node('li',cue));body.append(cues);
        }
        const guide = task?createTaskWorkflow({language,last:next.item_index%3===2,pair:!next.observer_id}):createGroupWorkflow({language, awareness: self, pair: !next.observer_id,
          id: 'room-workflow-guide', open: ['observer','passive'].includes(role) || (!next.observer_id && role === 'therapist')});
        const guideKey = `${self ? 'awareness' : 'skill'}:${role}`;
        const part = task?createTaskRoleGuide({language,role,last:next.item_index%3===2,pair:!next.observer_id,example:statement.suggestion,id:'room-your-part',open:roleGuideOpen.get(guideKey)??false,onToggle:expanded=>roleGuideOpen.set(guideKey,expanded)}):createGroupRoleGuide({language, awareness: self, role, pair: !next.observer_id,
          id: 'room-your-part', open: roleGuideOpen.get(guideKey) ?? false, focus: mastery ? null : skill.practiceFocus,
          example: statement.suggestion, examplePrefix: 'room',
          onToggle: expanded => roleGuideOpen.set(guideKey, expanded)});
        if (['observer','passive'].includes(role) || (!next.observer_id && role === 'therapist')) body.append(guide, part);
        else body.append(part, guide);
      } else if (next.phase === 'round_debrief') {
        if(mastery)body.append(node('p',task?taskEpisodeAt(exercise,next.item_index).title:entries.filter(e=>set.completed.includes(e.id)).map(e=>localizeSkill(language,e.skillId).name).join(' · '),'mastery-set-skills'));
        body.append(node('h4', task?`${taskCopy(language).rate} · ${set.number}/4`:next.round_size === 12 ? `${s.rateSet} · ${set.number}/${set.total}` : s.debrief), node('p', `${set.completed.length} ${s.practiced} · ${set.skipped.length} ${s.passed}`, 'triad-progress'));
        if (set.completed.length) body.append(node('p', (self ? s.awarenessReflection : s.reflection)[role]));
        if (set.last) body.append(node('p', s.derole, 'response-hint'));
        const nextFocus = node('details'); nextFocus.append(node('summary', s.nextFocus), node('p', ui.triadDebriefGroup));
        if (userId === (next.observer_id ?? next.therapist_id) && set.completed.length) {
          const form = node('form'); form.id = 'room-rating-form';
          const label = node('label', next.observer_id ? s.score : s.selfRating); label.htmlFor = 'room-score';
          const select = node('select'); select.id = 'room-score';
          const placeholder = node('option', s.ratingPlaceholder); placeholder.value = ''; select.append(placeholder); select.required = true;
          for (let score = 1; score <= 5; score++) { const option = node('option', `${score} · ${s.scoreLabels[score - 1]}`); option.value = String(score); select.append(option); }
          select.value = next.saved_score ?? '';
          select.addEventListener('change', () => updateStatus(sync.status()));
          form.append(label, select);
          form.addEventListener('submit', e => { e.preventDefault(); void sync.command('rate', Number(select.value)); });
          body.append(form);
        } else if (!set.completed.length) body.append(node('p', s.noItems));
        else body.append(node('p', next.observer_id ? s.observerRating : s.therapistRating, 'response-hint'));
        const saved = node('p'); saved.id = 'room-saved'; saved.setAttribute('role', 'status'); if (set.last) body.append(nextFocus); body.append(saved);
      }
      const selfRating = !next.observer_id && role === 'therapist' && next.phase === 'round_debrief' && set.completed.length > 0;
      if (configured && !ended && next.phase !== 'choosing' && (role === 'observer' || selfRating)) {
        if(mastery) {
          if(next.phase==='round_debrief' && set.completed.length)body.append(createMasteryFeedback({language,scenes:entries.filter(e=>set.completed.includes(e.id)),skillName:id=>localizeSkill(language,id).name,audience:selfRating?'self':'observer',reference:task?exercise.feedback:null}));
        }else body.append(createSkillFeedback({skillId:next.skill_id, language, id:'room-feedback-reference',
          audience:selfRating ? 'self' : 'observer'}));
      }
      if (!mastery && configured && !ended && role === 'therapist' && next.phase !== 'choosing') {
        goalView = createPracticeGoalView({userId, languageId:language, skillId:next.skill_id,
          editable:['lobby','round_debrief'].includes(next.phase), id:'room-next-attempt'});
        // Keep the reminder near the focus during practice, rather than below the workflow.
        if (active) body.querySelector('.individual-guide')?.after(goalView.element);
        else body.append(goalView.element);
      }
      {
        const heading = body.querySelector('h4') ?? body.querySelector('h3'); if (heading) { heading.tabIndex = -1; heading.focus({preventScroll: true}); }
        if (active || next.phase === 'lobby' || next.phase === 'round_debrief' || ended) overlay.scrollIntoView({block: 'start', behavior: 'auto'});
      }
    }
    if (el('saved')) el('saved').textContent = next.saved_score ? `${s.saved} · ${next.saved_score}/5` : '';
  }

  function updateStatus({snapshot, pending, commanding, error, fresh, left}) {
    if (left) { write(roomKey(), null); dismiss(); return; }
    if (!open || !snapshot) { if (open && error) text('status', error); return; }
    const s = strings(), role = roomRole(snapshot, userId);
    const set = groupSetProgress(snapshot.statement_ids, snapshot.item_index, snapshot.completed_ids, snapshot.skipped_ids);
    const ended = snapshot.phase === 'closed' || Date.parse(snapshot.expires_at) <= Date.now();
    const missing = missingRoomRoles(snapshot);
    const activeRoles = ['therapist','client', ...(roomNeedsObserver(snapshot) ? ['observer'] : [])];
    const offline = activeRoles.filter(role => snapshot[`${role}_id`] && !snapshot.presence?.[snapshot[`${role}_id`]]?.connected);
    const catchingUp = activeRoles.filter(role => snapshot[`${role}_id`] && snapshot.presence?.[snapshot[`${role}_id`]]?.acknowledged_version !== snapshot.version);
    const names = roles => roles.map(role => memberName(snapshot, snapshot[`${role}_id`])).join(', ');
    const waiting = missing.length ? s.missingRoles.replace('{roles}', missing.map(role => s[role]).join(', '))
      : offline.length ? s.waitingOffline.replace('{names}', names(offline)) : s.waitingSync.replace('{names}', names(catchingUp));
    const gettingReady = waitingRoomReadiness(snapshot);
    text('sync-status', ended ? Date.parse(snapshot.expires_at) <= Date.now() ? s.expired : s.ended
      : !fresh ? s.reconnect : snapshot.phase === 'choosing' ? (snapshot.host_id === userId ? s.choosing : s.waitingForHost)
        : !roomEveryoneReady(snapshot) ? waiting : snapshot.phase === 'lobby' ? gettingReady.length
          ? s.waitingReady.replace('{names}', names(gettingReady)) : snapshot.observer_id ? s.observerStarts : s.therapistStarts : s.ready);
    text('error', error);
    const ids = snapshot.member_ids ?? ['therapist', 'client', 'observer'].map(r => snapshot[`${r}_id`]).filter(Boolean);
    const members = ids.map(id => {
      const presence = snapshot.presence?.[id], memberRole = roomRole(snapshot, id);
      const status = memberStatus(snapshot, id, memberRole);
      const displayName = memberName(snapshot, id);
      const name = `${displayName}${id === userId ? ` (${s.you})` : ''}`;
      return node('li', `${name} · ${s[memberRole]}${id === snapshot.host_id ? ` · ${s.host}` : ''} · ${status}`,
        presence?.connected && presence.acknowledged_version === snapshot.version ? 'is-ready' : '');
    });
    if (el('members').textContent !== members.map(m => m.textContent).join('')) el('members').replaceChildren(...members);
    const preparation = ['choosing','lobby'].includes(snapshot.phase) && !ended;
    el('role-summary').hidden = !preparation;
    el('role-badge').hidden = ended || (preparation && role !== 'passive');
    const seats = activeRoles.map(role => {
      const id = snapshot[`${role}_id`], row = node('li');
      const identity = node('div', '', 'room-seat-identity');
      const label = role === 'client' && snapshot.skill_id === 'therapist-self-awareness' ? getStrings(language).selfAwarenessReaderRole : s[role];
      identity.append(node('strong', label), node('span', id ? `${memberName(snapshot, id)}${id === userId ? ` (${s.you})` : ''}${id === snapshot.host_id ? ` · ${s.host}` : ''}` : s.unfilled));
      const status = id ? memberStatus(snapshot, id, role) : '';
      row.append(identity, node('span', status, 'room-seat-status'));
      if (status === s.personReady) row.classList.add('is-ready');
      return row;
    });
    if (el('seats').textContent !== seats.map(row => row.textContent).join('')) el('seats').replaceChildren(...seats);
    text('people-count', ids.length === 1 ? (language === 'no' ? '1 deltaker' : '1 person') : s.peopleCount.replace('{count}', String(ids.length)));
    el('details').hidden = ended;
    el('sync-status').hidden = ended || (fresh && (snapshot.phase === 'choosing' || (roomEveryoneReady(snapshot) && snapshot.phase !== 'lobby')));
    if (snapshot.phase === 'choosing') {
      if (el('change-role-form').parentElement !== el('session')) el('role-summary').after(el('change-role-form'));
    } else if (el('change-role-form').parentElement !== el('details')) el('members').after(el('change-role-form'));
    el('change-role-form').hidden = !['choosing','lobby'].includes(snapshot.phase) || ended;
    for (const option of el('change-role').options) option.disabled = option.value !== 'passive' && !!snapshot[`${option.value}_id`] && snapshot[`${option.value}_id`] !== userId;
    // A draft choice can become occupied while another device is choosing.
    if (el('change-role').selectedOptions[0]?.disabled) el('change-role').value = role;
    el('change-role-submit').disabled = commanding || !!pending || !fresh;
    const hostControls = snapshot.host_id === userId && !ended;
    const controls = (snapshot.observer_id ?? snapshot.therapist_id) === userId && !ended;
    const candidates = ids.filter(id => id !== snapshot.host_id);
    const selectedHost = el('transfer-target').value;
    const hostOptions = [node('option', s.selectHost), ...candidates.map(id => {
      const option = node('option', memberName(snapshot, id)); option.value = id;
      const presence = snapshot.presence?.[id]; option.disabled = !presence?.connected || presence.acknowledged_version !== snapshot.version;
      return option;
    })];
    hostOptions[0].value = '';
    const hostOptionKey = hostOptions.map(option => `${option.value}:${option.textContent}:${option.disabled}`).join('|');
    if (el('transfer-target').dataset.options !== hostOptionKey) {
      el('transfer-target').replaceChildren(...hostOptions); el('transfer-target').dataset.options = hostOptionKey;
      el('transfer-target').value = candidates.includes(selectedHost) ? selectedHost : '';
    }
    el('transfer-form').hidden = !hostControls || !candidates.length;
    el('transfer').disabled = commanding || !!pending || !fresh || !el('transfer-target').value || el('transfer-target').selectedOptions[0]?.disabled;
    el('host-recovery').hidden = ended || hostControls || !snapshot.host_recovery_available;
    el('recover').disabled = commanding || !!pending || !fresh;
    el('choose').hidden = !hostControls || !['choosing','lobby'].includes(snapshot.phase) || !!pending;
    el('choose').className = snapshot.phase === 'choosing' ? 'primary-button' : 'ghost-button';
    text('choose', snapshot.phase === 'choosing' ? s.choose : s.changePractice);
    el('choose').disabled = commanding || !fresh;
    if (snapshot.phase === 'choosing') { if (el('choose').parentElement !== el('actions')) el('actions').prepend(el('choose')); }
    else if (el('choose').parentElement === el('actions')) el('content').after(el('choose'));
    const task=isTaskExercise(EXERCISE_CATALOG.find(e=>e.id===snapshot.exercise_id));
    const active = ['practicing','first_attempt', 'client_feedback', 'observer_feedback', 'retry'].includes(snapshot.phase);
    el('next').hidden = !controls || (!active && snapshot.phase !== 'lobby') || !!pending;
    text('next', snapshot.phase === 'lobby' ? s.start : task?snapshot.item_index%3===2?taskCopy(language).finish:taskCopy(language).next : (snapshot.item_index + 1) % 3 === 0 ? s.finishLast : s.finishNext);
    el('next').disabled = commanding || !fresh || (snapshot.phase === 'lobby' ? !roomCanStart(snapshot) : !roomEveryoneReady(snapshot));
    const confirmed = snapshot.ready_ids?.includes(userId);
    el('ready').hidden = snapshot.phase !== 'lobby' || ended || !roomReadinessRoles(snapshot).includes(role) || !!pending;
    text('ready', confirmed ? s.notReadyButton : s.readyButton);
    el('ready').className = confirmed ? 'ghost-button' : 'primary-button';
    el('ready').setAttribute('aria-pressed', String(!!confirmed));
    el('ready').disabled = commanding || !fresh || !snapshot.presence?.[userId]?.connected || snapshot.presence?.[userId]?.acknowledged_version !== snapshot.version;
    el('pass').hidden = !controls || !active || !!pending;
    el('pass').disabled = el('next').disabled;text('pass',task?taskCopy(language).pass:s.pass);
    el('rotate').hidden = !controls || snapshot.phase !== 'round_debrief' || !!pending;
    const save = el('save'), score = el('score');
    const unrated = set.completed.length > 0 && !snapshot.saved_score;
    const changedRating = score && snapshot.saved_score && Number(score.value) !== snapshot.saved_score;
    text('rotate', unrated ? s.skipRating : changedRating ? s.skipChanges :task&&!set.last?taskCopy(language).nextEpisode: snapshot.round_size === 12 ? set.last ? s.nextRound : s.nextSet : s.rotate);
    el('rotate').className = unrated || changedRating ? 'ghost-button' : 'primary-button';
    el('rotate').disabled = el('next').disabled;
    el('end').hidden = !hostControls || !!pending; el('end').disabled = commanding || !fresh;
    el('retry').hidden = !pending; el('retry').disabled = commanding || !fresh;
    el('leave').hidden = hostControls || ended || !!pending; el('leave').disabled = commanding || !fresh;
    el('another').hidden = !ended;
    el('done').hidden = !ended;
    save.hidden = !controls || snapshot.phase !== 'round_debrief' || !set.completed.length || (!!snapshot.saved_score && Number(score?.value) === snapshot.saved_score) || !!pending;
    text('save', snapshot.saved_score ? s.updateRating : task?language==='no'?'Lagre vurderingen av episoden':'Save episode rating':snapshot.exercise_type==='mastery' ? language==='no'?'Lagre vurdering av settet':'Save set rating' : s.save);
    save.disabled = commanding || !!pending || !fresh || !score?.value;
    el('actions').hidden = ![...el('actions').children].some(button => !button.hidden);
    el('sync').hidden = fresh && !error;
    el('sync').disabled = commanding;
  }

  function dismiss(navigate = true) {
    goalView?.destroy(); goalView = null;
    if (confirming) { dialogs.close(confirmOverlay); confirming = null; }
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
    } catch (failure) { if (epoch === opening) { text('status', failure.message); if (!room && !config) { el('hub').hidden=false; el('entry').hidden=true; } } }
    finally { if (epoch === opening) { busy = false; el('join').disabled = false; el('create').disabled = false; } }
  }
  async function show({createConfig = null, resume = true, mode = createConfig ? 'create' : 'join', code = null} = {}) {
    if (open) dismiss();
    if (mode === 'create' || mode === 'resume') clearInvite();
    userId = getUser()?.id ?? null; language = getLanguage() ?? 'en'; config = createConfig; creating = null;
    open = true; opening++; busy = false; room = null; contentKey = '';
    labels(); text('status', ''); el('header').hidden = false; el('setup').hidden = false; el('session').hidden = true;
    el('actions').hidden = true; el('save').hidden = true;
    el('hub').hidden = mode !== 'hub'; el('entry').hidden = mode === 'hub';
    text('title', mode === 'hub' ? strings().hub : config ? strings().createTitle : strings().joinTitle);
    text('intro', config ? strings().createIntro : strings().intro);
    el('resume').hidden = !userId || !read(roomKey());
    el('create').hidden = !config; el('join-form').hidden = !!config;
    el('host-options').hidden = !config;
    el('host-options').open = false; el('join-options').open = false;
    let inviteStorage;
    try { inviteStorage = localStorage; } catch { /* The invitation can remain in the URL. */ }
    el('code').value = code ?? readRoomInvite(window.location.href, inviteStorage) ?? '';
    if (code) rememberRoomInvite(code, inviteStorage);
    el('role').value = 'auto';
    el('host-role').hidden = !config; el('host-role-label').hidden = !config;
    overlay.hidden = false; overlay.classList.remove('is-hidden'); onOpen?.();
    (mode === 'hub' ? el('resume').hidden ? el('open-create') : el('resume') : config ? el('create') : el('code')).focus();
    const last = userId && resume ? read(roomKey()) : null;
    if (last && mode !== 'hub') await request(async () => {
      const pending = read(pendingKey(last));
      // A committed leave removes SELECT access. Replay its receipt before fetching a snapshot.
      if (pending?.action === 'leave') {
        try {
          const result = await practiceRoomRpc('command_practice_room', {input_room_id:last,input_command_id:pending.id,
            input_expected_version:pending.version,input_action:'leave',input_score:pending.score});
          if (result.left) { write(pendingKey(last),null); write(roomKey(),null); dismiss(); return null; }
        } catch (failure) {
          if (!['P0001','42501','22023','23514','23502'].includes(failure.code)) {
            el('hub').hidden=false;el('entry').hidden=true;
            text('resume',language==='no'?'Prøv å forlate rommet igjen':'Retry leaving room');
            throw failure;
          }
          write(pendingKey(last),null);
        }
      }
      const creation = read(`dp_room_creation:${userId}`);
      if (creation?.id === last) {
        const result = await practiceRoomRpc('create_practice_room',{input_room_id:last,input_config:creation.config});
        write(`dp_room_creation:${userId}`,null);return result;
      }
      return practiceRoomRpc('sync_practice_room', {input_room_id: last, input_acknowledged_version: -1});
    });
  }
  el('back').addEventListener('click', () => { if (!room) clearInvite(); dismiss(); });
  el('done').addEventListener('click', () => dismiss());
  el('join-form').addEventListener('submit', event => {
    event.preventDefault();
    const code = normalizeRoomCode(el('code').value);
    if (!code) { text('status', strings().invalidCode); el('code').focus(); return; }
    write('dp_group_invite', code);
    const inviteUrl = new URL(window.location.href); inviteUrl.searchParams.set('room', code);
    window.history.replaceState(null, '', inviteUrl);
    if (!getUser()) { dismiss(); signIn(); return; }
    void request(async () => { const next = await practiceRoomRpc('join_practice_room', {input_code: code, input_role: el('role').value}); clearInvite(); return next; });
  });
  el('create').addEventListener('click', () => {
    if (!getUser()) { dismiss(); signIn(); return; }
    void request(async () => {
      const epoch = opening;
      if (!creating) {
        const selected = {...await config(), hostRole: el('host-role').value, preparationProtocol: 'ready-v1'};
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
  el('ready').addEventListener('click', () => {
    void sync.command(room.ready_ids?.includes(userId) ? 'not_ready' : 'ready', null, {preparationId: room.preparation_id});
  });
  el('transfer-target').addEventListener('change', () => updateStatus(sync.status()));
  el('transfer-form').addEventListener('submit', event => {
    event.preventDefault();
    const targetUserId = el('transfer-target').value;
    if (targetUserId) confirmExit('transfer_host', {targetUserId});
  });
  el('recover').addEventListener('click', () => confirmExit('recover_host'));
  el('open-create').addEventListener('click', () => { void show({mode:'create',resume:false,createConfig:async()=>({languageId:getLanguage()??'en'})}); });
  el('open-join').addEventListener('click', () => { void show({mode:'join',resume:false}); });
  el('resume').addEventListener('click', () => { void show({mode:'resume'}); });
  el('choose').addEventListener('click', () => { onChoose?.(room); });
  el('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(room.code); text('status', strings().copied); }
    catch { text('status', `${strings().code}: ${room.code}`); }
  });
  el('share').addEventListener('click', async () => {
    const url = new URL(window.location.href); url.search = ''; url.hash = ''; url.searchParams.set('room', room.code);
    try {
      if (navigator.share) await navigator.share({title: strings().title, url: url.href});
      else { await navigator.clipboard.writeText(url.href); text('status', strings().linkCopied); }
    } catch (failure) { if (failure.name !== 'AbortError') text('status', `${strings().code}: ${room.code}`); }
  });
  function confirmExit(action, configuration = null) {
    const s = strings(); confirming = {action, configuration};
    confirmOverlay.querySelector('#room-exit-title').textContent = action === 'transfer_host' ? s.transferTitle.replace('{name}', memberName(room, configuration.targetUserId))
      : action === 'recover_host' ? s.recoverTitle : action === 'close' ? s.endTitle : s.leaveTitle;
    confirmOverlay.querySelector('#room-exit-description').textContent = action === 'transfer_host' ? s.transferDescription
      : action === 'recover_host' ? s.recoverDescription : action === 'close' ? s.endDescription : roomRole(room, userId) === 'passive' ? s.leaveWatching : s.leaveDescription;
    confirmOverlay.querySelector('#room-exit-confirm').textContent = action === 'transfer_host' ? s.transferHost : action === 'recover_host' ? s.recoverHost : action === 'close' ? s.end : s.leave;
    confirmOverlay.querySelector('#room-exit-cancel').textContent = s.cancel;
    const cancel = () => { dialogs.close(confirmOverlay); confirming = null; };
    dialogs.open(confirmOverlay, {onDismiss: cancel, initialFocus: confirmOverlay.querySelector('#room-exit-cancel')});
  }
  confirmOverlay.querySelector('#room-exit-cancel').addEventListener('click', () => { dialogs.close(confirmOverlay); confirming = null; });
  confirmOverlay.querySelector('#room-exit-confirm').addEventListener('click', () => { const decision = confirming; dialogs.close(confirmOverlay); confirming = null; if (decision) void sync.command(decision.action, null, decision.configuration); });
  confirmOverlay.addEventListener('click', e => { if (e.target === confirmOverlay) { dialogs.close(confirmOverlay); confirming = null; } });
  el('leave').addEventListener('click', () => confirmExit('leave'));
  el('sync').addEventListener('click', () => { void sync.sync(); });
  el('next').addEventListener('click', () => { void sync.command(room.phase === 'lobby' ? 'start' : 'finish_item'); });
  el('pass').addEventListener('click', () => {
    const task=isTaskExercise(EXERCISE_CATALOG.find(e=>e.id===room?.exercise_id));
    const message=task?language==='no'?'Stå over hele episoden for alle? Ingen av de tre øyeblikkene blir vurdert.':'Pass the whole episode for everyone? None of its three moments will be rated.':strings().confirmPass;
    if(window.confirm(message))void sync.command('pass');
  });
  el('rotate').addEventListener('click', () => {
    const action = room.round_size === 12 ? room.item_index === 11 ? 'prepare_next' : 'continue_set' : 'rotate';
    void sync.command(action);
  });
  el('end').addEventListener('click', () => confirmExit('close'));
  el('retry').addEventListener('click', () => { const p = sync.status().pending; if (p) void sync.command(p.action, p.score, p.configuration ?? null); });
  el('another').addEventListener('click', () => { write(roomKey(), null); dismiss(); void show({resume: false, mode:'hub'}); });
  window.addEventListener('online', () => { void sync.sync(); });
  window.addEventListener('focus', () => { void sync.sync(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) void sync.sync(); });
  return {show, async prepare(configFactory, expectedRoomId) {
    const configuration = {...await configFactory(), preparationProtocol: 'ready-v1'};
    await show({mode:'resume'});
    if (!open || room?.id !== expectedRoomId || room?.host_id !== userId) return;
    await sync.command('prepare', null, configuration);
  }, element: overlay, hide() { if (open) dismiss(false); }, authChanged() { if (open && (getUser()?.id ?? null) !== userId) dismiss(); }};
}

import {practiceRoomRpc, watchPracticeRoom} from './backend.js';
import {loadPracticeContent, getPracticeStatements} from './practiceContent.js';
import {CONTENT_REVISION} from './practiceData.js';
import {createRoomSync, roomRole, roomEveryoneReady} from './practiceRoomSync.js';

const copy = {
  en: {
    title: 'Group practice', hub: 'Practice together', hubIntro: 'Create a room and invite your group. Choose the skill and case together once everyone is here.', openCreate: 'Create a room', openJoin: 'Join with a code', resume: 'Return to your room', people: 'Room & people', peopleCount: '{count} people', share: 'Share invite', linkCopied: 'Invite link copied', roleOptions: 'Starting role (optional)', choosing: 'Choose what to practice', waitingForHost: 'The host is choosing a skill and case. You can invite others or choose your role while you wait.', choose: 'Choose skill and case', changePractice: 'Change skill or case', leave: 'Leave room', leaveTitle: 'Leave this room?', leaveDescription: 'You can rejoin with the invite. Leaving an active role ends the current round and returns the group to preparation. Saved ratings stay.', leaveWatching: 'The group can continue. You can rejoin with the invite.', endTitle: 'End the room for everyone?', endDescription: 'Everyone leaves this session. Saved ratings stay; unfinished items will not be rated.', cancel: 'Keep practicing', endedNote: 'Saved ratings are kept. Unfinished items are not rated.', interrupted: 'A participant left an active role. Prepare a new round before continuing.', finish: 'Back to library', privacy: 'Ratings and privacy', close: 'Library', join: 'Join a group', create: 'Create group room',
    intro: 'Use your own phones. Keep your video call open for speaking.',
    createTitle: 'Create a room', joinTitle: 'Join a room', createIntro: 'Invite your group, then choose practice. Keep your video call open.',
    code: 'Room code', role: 'Your role', therapist: 'Therapist', client: 'Client', observer: 'Active observer', passive: 'Watching observer', auto: 'Next available role', host: 'Host', you: 'you', changeRole: 'Change role', selfRating: 'Your self-assessment',
    consent: 'Ratings assess the therapist’s use of the selected skill. The active observer saves the rating; in pairs the therapist saves a self-assessment. Spoken responses and feedback are not recorded. Roles rotate together after each round.',
    signIn: 'Sign in to join', signInCreate: 'Sign in to create a room', copy: 'Copy room code', copied: 'Code copied',
    invite: 'Invite your group. The room lasts eight hours.',
    waiting: 'Waiting for the therapist, client and active observer to display this step', ready: 'Ready · devices are in sync',
    reconnect: 'Connection interrupted. Reconnecting… The round waits until everyone is up to date.',
    sync: 'Sync now', retry: 'Retry last action', loading: 'Loading the shared round…',
    lobby: 'Get ready', start: 'Start round', advance: 'Continue to next step', finishItem: 'Finish item',
    prepCue: {therapist: 'Listen, then respond in your own words.', client: 'Read the lines in role. Repeat for the retry.', observer: 'Guide the round. Name one strength and one change to try.', passive: 'Listen for the skill. Let the active observer guide.'},
    pairPreparation: 'Start when you’re both ready. Finish each item after the retry.', observerStarts: 'The observer starts the round.', therapistStarts: 'The therapist starts the round.',
    pass: 'Pass this item', confirmPass: 'Pass this item for everyone? It will not count as practiced.',
    rotate: 'Next round · rotate roles', end: 'End room for everyone', confirmEnd: 'End this group session for everyone?',
    ended: 'This group session has ended.', expired: 'This room has expired. Create a new room to continue.',
    workflowTitle: 'The workflow', yourPart: 'Your part', afterRound: 'After 3 items',
    workflowSteps: ['Client reads the line', 'Therapist responds', 'Client gives feedback', 'Observer coaches', 'Repeat line · therapist retries', 'Rate the therapist'],
    awarenessSteps: ['Reader reads the line', 'Therapist notices their reaction', 'Reader reflects', 'Observer suggests an experiment', 'Repeat line · therapist notices again', 'Rate the therapist'],
    skillFocus: 'Skill focus', pairGuide: ['Guide', 'Finish each item after the retry. Self-assess after the round.'],
    roleGuide: {
      therapist: {preview: 'Listen · respond · retry', steps: [['Respond', 'Listen to the client, then try the skill in your own words.'], ['Feedback', 'Choose a useful change; you can adapt the feedback or pass.'], ['Retry', 'Ask for the same line. Test one change.']]},
      client: {preview: 'Read · feedback · repeat', steps: [['Read', 'Read the line aloud in the client’s voice.'], ['Feedback', 'Stay in role. Describe how it felt: “I felt…” or “It helped when…”'], ['Repeat', 'Use the same line for the retry.']]},
      observer: {preview: 'Notice · coach · finish', steps: [['Notice', 'Listen for wording, tone and pace linked to the skill.'], ['Coach', 'One specific strength, one small experiment. Coach the skill, not the person.'], ['Finish', 'Tap Finish item after the retry. Rate the therapist after the round.']]},
      passive: {preview: 'Watch · listen', steps: [['Watch', 'Listen for the skill and what changes on the retry.'], ['Make room', 'Let the active observer give coaching and finish the item.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Notice · share · notice again', steps: [['Notice', 'Attend to your body, feelings and impulses as the line is read.'], ['Share', 'Share only what you choose; you do not need to respond to the client.'], ['Again', 'Hear the same line again. Notice what changes.']]},
      client: {preview: 'Read · reflect · repeat', steps: [['Read', 'Read the client’s line, then step out of role.'], ['Reflect', 'Describe the pause and noticing, without interpreting the therapist.'], ['Repeat', 'Read the same line again; respect what the therapist keeps private.']]},
      observer: {preview: 'Notice · support · finish', steps: [['Notice', 'Listen for awareness and respect for boundaries.'], ['Support', 'Offer one gentle noticing experiment, without interpretation or pressure to disclose.'], ['Finish', 'Finish after the second listen. Rate awareness, not private content.']]},
      passive: {preview: 'Watch · respect boundaries', steps: [['Watch', 'Notice how the therapist pauses and attends to their reaction.'], ['Boundaries', 'Respect what stays private. Leave coaching to the active observer.']]}
    },
    awarenessCue: {therapist: 'Notice your reaction; you do not need to respond to the client. Share only what you choose.', client: 'Read, then step out of role. Reflect on the pause; respect what stays private.', observer: 'Notice one strength. Suggest a gentle experiment without interpreting or asking for disclosure.', passive: 'Listen to the process. Respect what the therapist keeps private.'},
    finishNext: 'Finish item · next', finishLast: 'Finish item · reflect', forRetry: 'For the retry', beforeExample: 'Try your own response and hear feedback before opening an example.',
    example: 'See an example for the retry', exampleNote: 'An example, not an answer key. Choose one change to try.',
    round: 'Round', item: 'Item', debrief: 'Reflect together', practiced: 'practiced', passed: 'passed',
    reflection: {therapist: 'Which change helped?', client: 'What changed on the retry?', observer: 'One strength. One next practice target.', passive: 'What did you notice about the skill?'},
    awarenessReflection: {therapist: 'What did you notice? Share only what you choose.', client: 'How did the group respect privacy?', observer: 'One moment of awareness. One gentle next experiment.', passive: 'What helped the therapist notice without pressure?'},
    derole: 'Step out of role. Say your own names and pause.', nextFocus: 'Choose the next challenge',
    save: 'Save skill rating', updateRating: 'Update rating', skipRating: 'Continue without rating', skipChanges: 'Continue without changes', saved: 'Saved to the therapist’s progress',
    ratingPlaceholder: 'Choose a rating', ratingScope: 'Rate only the practiced items.', observerRating: 'The observer rates and starts the next round.', therapistRating: 'The therapist self-assesses and starts the next round.',
    scoreLabels: ['Not yet demonstrated', 'Emerging with guidance', 'Adequate in parts', 'Well demonstrated', 'Skillfully demonstrated'],
    score: 'Therapist’s use of the skill', noItems: 'Every item was passed. No rating will be saved.',
    participantWaiting: 'Not joined', participantSyncing: 'Catching up', participantReady: 'Up to date',
    participantOffline: 'Connection lost', newRoom: 'New room',
    failedContent: 'This room uses a different or unavailable content version. Refresh the app and sync again.',
  },
  no: {
    title: 'Gruppeøving', hub: 'Øv sammen', hubIntro: 'Opprett et rom og inviter gruppen. Velg ferdighet og kasus sammen når alle er her.', openCreate: 'Opprett et rom', openJoin: 'Bli med med kode', resume: 'Tilbake til rommet ditt', people: 'Rom og deltakere', peopleCount: '{count} deltakere', share: 'Del invitasjon', linkCopied: 'Invitasjonslenken er kopiert', roleOptions: 'Startrolle (valgfritt)', choosing: 'Velg hva dere vil øve på', waitingForHost: 'Verten velger ferdighet og kasus. Du kan invitere andre eller velge rolle mens du venter.', choose: 'Velg ferdighet og kasus', changePractice: 'Bytt ferdighet eller kasus', leave: 'Forlat rommet', leaveTitle: 'Forlate dette rommet?', leaveDescription: 'Du kan bli med igjen med invitasjonen. Hvis du har en aktiv rolle, avsluttes runden og gruppen går tilbake til forberedelsene. Lagrede vurderinger beholdes.', leaveWatching: 'Gruppen kan fortsette. Du kan bli med igjen med invitasjonen.', endTitle: 'Avslutte rommet for alle?', endDescription: 'Økten avsluttes for alle. Lagrede vurderinger beholdes; ufullførte utsagn vurderes ikke.', cancel: 'Fortsett å øve', endedNote: 'Lagrede vurderinger beholdes. Ufullførte utsagn vurderes ikke.', interrupted: 'En deltaker forlot en aktiv rolle. Forbered en ny runde før dere fortsetter.', finish: 'Tilbake til biblioteket', privacy: 'Vurderinger og personvern', close: 'Bibliotek', join: 'Bli med i en gruppe', create: 'Opprett grupperom',
    intro: 'Bruk hver deres mobil. Ha videosamtalen åpen for å snakke sammen.',
    createTitle: 'Opprett et rom', joinTitle: 'Bli med i et rom', createIntro: 'Inviter gruppen, og velg øving. Ha videosamtalen åpen.',
    code: 'Romkode', role: 'Din rolle', therapist: 'Terapeut', client: 'Klient', observer: 'Aktiv observatør', passive: 'Observatør som følger med', auto: 'Neste ledige rolle', host: 'Vert', you: 'deg', changeRole: 'Bytt rolle', selfRating: 'Din egenvurdering',
    consent: 'Vurderingen gjelder terapeutens bruk av den valgte ferdigheten. Den aktive observatøren lagrer vurderingen; i par lagrer terapeuten en egenvurdering. Muntlige svar og tilbakemeldinger blir ikke registrert. Rollene roteres sammen etter hver runde.',
    signIn: 'Logg inn for å bli med', signInCreate: 'Logg inn for å opprette et rom', copy: 'Kopier romkode', copied: 'Koden er kopiert',
    invite: 'Inviter gruppen. Rommet varer i åtte timer.',
    waiting: 'Venter på at terapeuten, klienten og den aktive observatøren viser dette steget', ready: 'Klar · enhetene er synkronisert',
    reconnect: 'Forbindelsen er brutt. Kobler til igjen… Runden venter til alle er oppdatert.',
    sync: 'Synkroniser nå', retry: 'Prøv siste handling igjen', loading: 'Laster den felles runden…',
    lobby: 'Gjør deg klar', start: 'Start runden', advance: 'Fortsett til neste steg', finishItem: 'Fullfør utsagnet',
    prepCue: {therapist: 'Lytt, og svar med dine egne ord.', client: 'Les utsagnene i rollen. Gjenta ved det nye forsøket.', observer: 'Led runden. Nevn én styrke og én endring å prøve.', passive: 'Lytt etter ferdigheten. La den aktive observatøren lede.'},
    pairPreparation: 'Start når dere begge er klare. Fullfør hvert utsagn etter det nye forsøket.', observerStarts: 'Observatøren starter runden.', therapistStarts: 'Terapeuten starter runden.',
    pass: 'Stå over utsagnet', confirmPass: 'Stå over utsagnet for alle? Det telles ikke som øvd.',
    rotate: 'Neste runde · roter roller', end: 'Avslutt rommet for alle', confirmEnd: 'Avslutte gruppeøkten for alle?',
    ended: 'Gruppeøkten er avsluttet.', expired: 'Rommet har utløpt. Opprett et nytt rom for å fortsette.',
    workflowTitle: 'Slik øver dere', yourPart: 'Din del', afterRound: 'Etter 3 utsagn',
    workflowSteps: ['Klienten leser utsagnet', 'Terapeuten svarer', 'Klienten gir tilbakemelding', 'Observatøren veileder', 'Gjenta utsagnet · terapeuten prøver igjen', 'Vurder terapeuten'],
    awarenessSteps: ['Oppleseren leser utsagnet', 'Terapeuten merker sin reaksjon', 'Oppleseren reflekterer', 'Observatøren foreslår et eksperiment', 'Gjenta utsagnet · terapeuten merker på nytt', 'Vurder terapeuten'],
    skillFocus: 'Ferdighetsfokus', pairGuide: ['Led øvingen', 'Fullfør hvert utsagn etter det nye forsøket. Vurder deg selv etter runden.'],
    roleGuide: {
      therapist: {preview: 'Lytt · svar · prøv igjen', steps: [['Svar', 'Lytt til klienten, og prøv ferdigheten med dine egne ord.'], ['Tilbakemelding', 'Velg en nyttig endring; du kan tilpasse tilbakemeldingen eller stå over.'], ['Prøv igjen', 'Be om det samme utsagnet. Prøv én endring.']]},
      client: {preview: 'Les · gi respons · gjenta', steps: [['Les', 'Les utsagnet høyt med klientens stemme.'], ['Gi respons', 'Bli i rollen. Beskriv hvordan det kjentes: «Jeg følte …» eller «Det hjalp da …»'], ['Gjenta', 'Bruk det samme utsagnet ved det nye forsøket.']]},
      observer: {preview: 'Legg merke til · veiled · fullfør', steps: [['Legg merke til', 'Lytt etter ordvalg, tone og tempo knyttet til ferdigheten.'], ['Veiled', 'Én konkret styrke, ett lite eksperiment. Veiled ferdigheten, ikke personen.'], ['Fullfør', 'Trykk Fullfør etter det nye forsøket. Vurder terapeuten etter runden.']]},
      passive: {preview: 'Følg med · lytt', steps: [['Følg med', 'Lytt etter ferdigheten og hva som endrer seg ved det nye forsøket.'], ['Gi plass', 'La den aktive observatøren veilede og fullføre utsagnet.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Merk · del · merk på nytt', steps: [['Merk', 'Legg merke til kropp, følelser og impulser mens utsagnet leses.'], ['Del', 'Del bare det du selv velger; du trenger ikke svare klienten.'], ['På nytt', 'Lytt til det samme utsagnet igjen. Merk hva som endrer seg.']]},
      client: {preview: 'Les · reflekter · gjenta', steps: [['Les', 'Les klientens utsagn, og gå så ut av rollen.'], ['Reflekter', 'Beskriv pausen og oppmerksomheten, uten å tolke terapeuten.'], ['Gjenta', 'Les det samme utsagnet igjen; respekter det som holdes privat.']]},
      observer: {preview: 'Merk · støtt · fullfør', steps: [['Merk', 'Lytt etter bevissthet og respekt for grenser.'], ['Støtt', 'Foreslå ett varsomt eksperiment, uten tolkning eller press om å dele.'], ['Fullfør', 'Fullfør etter den andre lyttingen. Vurder bevissthet, ikke privat innhold.']]},
      passive: {preview: 'Følg med · respekter grenser', steps: [['Følg med', 'Legg merke til hvordan terapeuten stopper opp og merker egen reaksjon.'], ['Grenser', 'Respekter det som holdes privat. La den aktive observatøren veilede.']]}
    },
    awarenessCue: {therapist: 'Merk din reaksjon; du trenger ikke svare klienten. Del bare det du selv velger.', client: 'Les, og gå så ut av rollen. Reflekter over pausen; respekter det som holdes privat.', observer: 'Legg merke til én styrke. Foreslå et varsomt eksperiment uten å tolke eller be om utlevering.', passive: 'Lytt til prosessen. Respekter det terapeuten holder privat.'},
    finishNext: 'Fullfør · neste utsagn', finishLast: 'Fullfør · reflekter', forRetry: 'Til det nye forsøket', beforeExample: 'Prøv din egen respons og lytt til tilbakemelding før du åpner et eksempel.',
    example: 'Se et eksempel før du prøver igjen', exampleNote: 'Et eksempel, ikke en fasit. Velg én endring å prøve.',
    round: 'Runde', item: 'Utsagn', debrief: 'Reflekter sammen', practiced: 'øvd', passed: 'stått over',
    reflection: {therapist: 'Hvilken endring hjalp?', client: 'Hva endret seg ved det nye forsøket?', observer: 'Én styrke. Ett neste øvingsmål.', passive: 'Hva la du merke til ved ferdigheten?'},
    awarenessReflection: {therapist: 'Hva la du merke til? Del bare det du selv velger.', client: 'Hvordan ivaretok gruppen privatlivet?', observer: 'Ett øyeblikk med bevissthet. Ett varsomt neste eksperiment.', passive: 'Hva hjalp terapeuten å legge merke til uten press?'},
    derole: 'Gå ut av rollen. Si deres egne navn og ta en pause.', nextFocus: 'Velg neste utfordring',
    save: 'Lagre ferdighetsvurdering', updateRating: 'Oppdater vurdering', skipRating: 'Fortsett uten vurdering', skipChanges: 'Fortsett uten endringer', saved: 'Lagret i terapeutens fremgang',
    ratingPlaceholder: 'Velg en vurdering', ratingScope: 'Vurder bare utsagnene dere har øvd på.', observerRating: 'Observatøren vurderer og starter neste runde.', therapistRating: 'Terapeuten vurderer seg selv og starter neste runde.',
    scoreLabels: ['Ikke vist ennå', 'På vei med veiledning', 'Tilfredsstillende i deler', 'Godt demonstrert', 'Svært godt demonstrert'],
    score: 'Terapeutens bruk av ferdigheten', noItems: 'Alle utsagn ble stått over. Ingen vurdering lagres.',
    participantWaiting: 'Ikke med ennå', participantSyncing: 'Henter siste steg', participantReady: 'Oppdatert',
    participantOffline: 'Mistet forbindelsen', newRoom: 'Nytt rom',
    failedContent: 'Rommet bruker en annen eller utilgjengelig innholdsversjon. Last appen på nytt og synkroniser igjen.',
  }
};

export function createPracticeRoomView({dialogs, onChoose, onOpen, onClose, getUser, getLanguage, localizeSkill, getStrings, signIn, onProgressChange}) {
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
      <details id="room-details" class="room-details"><summary><span id="room-people-label"></span><span id="room-people-count"></span></summary>
        <div id="room-invite" class="room-code-row"><strong id="room-share-code"></strong><button id="room-share" class="ghost-button"></button><button id="room-copy" class="ghost-button"></button></div>
        <p id="room-invite-note" class="response-hint"></p><ul id="room-members" class="room-members" aria-label="Participants"></ul>
        <form id="room-change-role-form" hidden><label id="room-change-role-label" for="room-change-role"></label><select id="room-change-role"><option value="therapist"></option><option value="client"></option><option value="observer"></option><option value="passive"></option></select><button id="room-change-role-submit" class="ghost-button" type="submit"></button></form>
        <button id="room-sync" class="ghost-button"></button><div class="room-exit-actions"><button id="room-leave" class="ghost-button" hidden></button><button id="room-end" class="ghost-button" hidden></button></div>
      </details>
      <p id="room-sync-status" class="room-sync-status" role="status"></p>
      <div id="room-content"></div><button id="room-choose" class="primary-button" hidden></button>
      <p id="room-error" role="alert"></p>
      <div id="room-actions" class="room-actions" hidden>
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
  const roleGuideOpen = new Map();
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
    overlay.querySelector('.room-dialog').setAttribute('aria-label', s.title);
    for (const key of ['title', 'intro', 'consent', 'copy', 'sync', 'retry', 'pass', 'rotate', 'end']) text(key === 'consent' ? 'consent' : key, s[key]);
    text('back', s.close); text('code-label', s.code); text('role-label', s.role);
    for (const id of ['role', 'host-role', 'change-role']) for (const option of el(id).options) option.textContent = s[option.value];
    text('host-role-label', s.role); text('change-role-label', s.role); text('change-role-submit', s.changeRole);
    text('join', getUser() ? s.join : s.signIn); text('create', getUser() ? s.create : s.signInCreate);
    text('another', s.newRoom); text('hub-intro', s.hubIntro); text('open-create', s.openCreate); text('open-join', s.openJoin); text('resume', s.resume);
    text('done', s.finish);
    text('people-label', s.people); text('share', s.share); text('leave', s.leave); text('invite-note', s.invite); text('role-options', s.roleOptions); text('host-options-label', s.roleOptions); text('privacy', s.privacy);
    el('members').setAttribute('aria-label', language === 'no' ? 'Deltakere' : 'Participants');
  }

  async function applyRoom(next, isCurrent = () => true) {
    const configured = !!next.skill_id && !!next.case_id;
    const ended = next.phase === 'closed' || Date.parse(next.expires_at) <= Date.now();
    let entries = [];
    if (configured && !ended) {
      if (next.content_revision !== CONTENT_REVISION) throw new Error(strings().failedContent);
      await loadPracticeContent(next.language_id, next.skill_id);
      entries = getPracticeStatements(next.language_id, next.skill_id, next.case_id);
      if (next.statement_ids.some(id => !entries.some(e => e.id === id))) throw new Error(strings().failedContent);
    }
    if (!isCurrent() || !open || getUser()?.id !== userId) return;
    if (next.saved_score && (room?.round_id !== next.round_id || room?.saved_score !== next.saved_score)) onProgressChange?.({source: next.observer_id ? 'observer' : 'self'});
    room = next; language = next.language_id; labels();
    overlay.dataset.phase = next.phase; overlay.dataset.version = String(next.version);
    write(roomKey(), next.id);
    el('setup').hidden = true; el('session').hidden = false;
    text('status', ''); text('share-code', next.code.match(/.{1,4}/g).join('–'));
    const role = roomRole(next, userId);
    el('change-role').value = role;
    const skill = localizeSkill(language, next.skill_id);
    const caseData = skill?.cases.find(c => c.id === next.case_id);
    if (!role || (configured && !caseData && !ended)) throw new Error(strings().failedContent);
    const s = strings(), ui = getStrings(language);
    const self = next.skill_id === 'therapist-self-awareness';
    const active = ['practicing','first_attempt','client_feedback','observer_feedback','retry'].includes(next.phase);
    el('header').hidden = ended || next.phase !== 'choosing';
    const body = el('content');
    text('role-badge', `${s.role}: ${role === 'client' && self ? ui.selfAwarenessReaderRole : s[role]}`);
    el('role-badge').hidden = ended;
    if (ended) { write(roomKey(), null); text('role-badge', ''); }
    if (!contentKey || contentKey.split(':')[1] !== next.phase) el('details').open = false;
    if (next.phase === 'choosing' && !ended) {
      if (el('invite').parentElement !== el('session')) el('details').before(el('invite'));
    }
    else if (el('invite').parentElement !== el('details')) el('details').prepend(el('invite'));
    const key = `${next.round_id}:${next.phase}:${next.item_index}:${role}:${next.observer_id ?? 'pair'}:${next.skill_id}:${next.case_id}`;
    // Presence refreshes never rebuild the screen or steal keyboard focus.
    if (key !== contentKey) {
      contentKey = key;
      body.replaceChildren();
      if (configured && !ended) body.append(node('h3', `${skill.name} · ${caseData.label}`, 'room-practice-heading'));
      const expired = Date.parse(next.expires_at) <= Date.now();
      if (next.phase === 'closed' || expired) {
        body.append(node('h3', expired ? s.expired : s.ended), node('p', s.endedNote));
      } else if (next.phase === 'choosing') {
        body.append(node('h3', s.choosing));
        if (next.host_id !== userId) body.append(node('p', s.waitingForHost));
      } else if (next.phase === 'lobby') {
        body.append(node('p', `${s.round} ${next.round_number} · ${s.lobby}`, 'triad-progress'));
        if (next.round_interrupted) body.append(node('p', s.interrupted, 'response-hint'));
        const prep = node('section', '', 'room-preparation');
        if (role === 'client') {
          prep.append(node('p', caseData.teaser || caseData.history));
          if (caseData.style) prep.append(node('p', caseData.style, 'response-hint'));
        } else prep.append(node('p', skill.practiceFocus));
        prep.append(node('p', self ? s.awarenessCue[role] : !next.observer_id && role === 'therapist' ? s.pairPreparation : s.prepCue[role], 'room-preparation-cue'));
        if (self && !next.observer_id && role === 'therapist') prep.append(node('p', s.pairPreparation, 'room-preparation-cue'));
        body.append(prep);
      } else if (active) {
        body.append(node('p', `${s.round} ${next.round_number} · ${s.item} ${next.item_index + 1}/3`, 'triad-progress'));
        const statement = entries.find(e => e.id === next.statement_ids[next.item_index]);
        if (role === 'client') body.append(node('blockquote', statement.text, 'statement-text room-statement'));
        else if (role === 'therapist') body.append(node('aside', skill.practiceFocus, 'individual-guide'));
        const guide = node('details', '', 'room-workflow-guide');
        guide.id = 'room-workflow-guide'; guide.open = ['observer','passive'].includes(role) || (!next.observer_id && role === 'therapist');
        guide.append(node('summary', s.workflowTitle));
        const sequence = node('ol', '', 'room-workflow'); sequence.setAttribute('aria-label', s.workflowTitle);
        const titles = self ? s.awarenessSteps : s.workflowSteps;
        const indices = next.observer_id ? [0,1,2,3,4,5] : [0,1,2,4,5];
        indices.forEach((index, number) => {
          const item = node('li');
          const label = node('span', titles[index]);
          if (index === 5) { item.className = 'room-workflow-rating'; label.append(node('small', s.afterRound)); }
          item.append(node('span', String(number + 1), 'room-workflow-number'), label); sequence.append(item);
        });
        guide.append(sequence);
        const roleGuide = (self ? s.awarenessGuide : s.roleGuide)[role];
        const part = node('details', '', 'room-role-guide'); part.id = 'room-your-part';
        const guideKey = `${self ? 'awareness' : 'skill'}:${role}`;
        part.open = roleGuideOpen.get(guideKey) ?? false;
        part.addEventListener('toggle', () => roleGuideOpen.set(guideKey, part.open));
        const summary = node('summary'), heading = node('span');
        heading.append(node('strong', s.yourPart), node('small', roleGuide.preview)); summary.append(heading); part.append(summary);
        const guideBody = node('div', '', 'room-role-guide-body');
        if (['observer','passive'].includes(role)) {
          const focus = node('div', '', 'room-role-guide-focus');
          focus.append(node('strong', s.skillFocus), node('p', skill.practiceFocus)); guideBody.append(focus);
        }
        const steps = node('dl', '', 'room-role-steps');
        const roleSteps = [...roleGuide.steps];
        if (!next.observer_id && role === 'therapist') roleSteps.push(s.pairGuide);
        roleSteps.forEach(([title, instruction]) => {
          const step = node('div', '', 'room-role-step'); step.append(node('dt', title), node('dd', instruction)); steps.append(step);
        });
        guideBody.append(steps); part.append(guideBody);
        if (['observer','passive'].includes(role) || (!next.observer_id && role === 'therapist')) body.append(guide, part);
        else body.append(part, guide);
        if (role === 'therapist') {
          const example = node('details'); example.id = 'room-example';
          example.append(node('summary', s.forRetry), node('p', s.beforeExample));
          const reveal = node('button', s.example, 'ghost-button'); reveal.id = 'room-example-reveal'; reveal.type = 'button';
          reveal.addEventListener('click', () => {
            if (!example.querySelector('.room-example-text')) {
              example.append(node('p', s.exampleNote, 'response-hint'), node('p', statement.suggestion, 'room-example-text'));
            }
            reveal.hidden = true;
          });
          example.append(reveal); body.append(example);
        }
      } else if (next.phase === 'round_debrief') {
        body.append(node('h4', s.debrief), node('p', `${next.completed_ids.length} ${s.practiced} · ${next.skipped_ids.length} ${s.passed}`, 'triad-progress'));
        if (next.completed_ids.length) body.append(node('p', (self ? s.awarenessReflection : s.reflection)[role]));
        body.append(node('p', s.derole, 'response-hint'));
        const nextFocus = node('details'); nextFocus.append(node('summary', s.nextFocus), node('p', ui.triadDebriefGroup));
        if (userId === (next.observer_id ?? next.therapist_id) && next.completed_ids.length) {
          const form = node('form'); form.id = 'room-rating-form';
          const label = node('label', next.observer_id ? s.score : s.selfRating); label.htmlFor = 'room-score';
          const select = node('select'); select.id = 'room-score';
          const placeholder = node('option', s.ratingPlaceholder); placeholder.value = ''; select.append(placeholder); select.required = true;
          for (let score = 1; score <= 5; score++) { const option = node('option', `${score} · ${s.scoreLabels[score - 1]}`); option.value = String(score); select.append(option); }
          select.value = next.saved_score ?? '';
          select.addEventListener('change', () => updateStatus(sync.status()));
          form.append(label, select, node('p', s.ratingScope, 'response-hint'));
          form.addEventListener('submit', e => { e.preventDefault(); void sync.command('rate', Number(select.value)); });
          body.append(form);
        } else if (!next.completed_ids.length) body.append(node('p', s.noItems));
        else body.append(node('p', next.observer_id ? s.observerRating : s.therapistRating, 'response-hint'));
        const saved = node('p'); saved.id = 'room-saved'; saved.setAttribute('role', 'status'); body.append(nextFocus, saved);
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
    const ended = snapshot.phase === 'closed' || Date.parse(snapshot.expires_at) <= Date.now();
    const waiting = !snapshot.observer_id ? (language === 'no' ? 'Venter på at terapeuten og klienten viser dette steget' : 'Waiting for the therapist and client to display this step') : s.waiting;
    text('sync-status', ended ? Date.parse(snapshot.expires_at) <= Date.now() ? s.expired : s.ended
      : !fresh ? s.reconnect : snapshot.phase === 'choosing' ? (snapshot.host_id === userId ? s.choosing : s.waitingForHost)
        : !roomEveryoneReady(snapshot) ? waiting : snapshot.phase === 'lobby' && userId !== (snapshot.observer_id ?? snapshot.therapist_id) ? snapshot.observer_id ? s.observerStarts : s.therapistStarts : s.ready);
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
    if (el('members').textContent !== members.map(m => m.textContent).join('')) el('members').replaceChildren(...members);
    text('people-count', ids.length === 1 ? (language === 'no' ? '1 deltaker' : '1 person') : s.peopleCount.replace('{count}', String(ids.length)));
    el('details').hidden = ended;
    el('sync-status').hidden = ended || (fresh && (snapshot.phase === 'choosing' || (roomEveryoneReady(snapshot) && snapshot.phase !== 'lobby')));
    el('change-role-form').hidden = !['choosing','lobby'].includes(snapshot.phase) || ended;
    for (const option of el('change-role').options) option.disabled = option.value !== 'passive' && !!snapshot[`${option.value}_id`] && snapshot[`${option.value}_id`] !== userId;
    el('change-role-submit').disabled = commanding || !!pending || !fresh;
    const hostControls = snapshot.host_id === userId && !ended;
    const controls = (snapshot.observer_id ?? snapshot.therapist_id) === userId && !ended;
    el('choose').hidden = !hostControls || !['choosing','lobby'].includes(snapshot.phase) || !!pending;
    el('choose').className = snapshot.phase === 'choosing' ? 'primary-button' : 'ghost-button';
    text('choose', snapshot.phase === 'choosing' ? s.choose : s.changePractice);
    el('choose').disabled = commanding || !fresh;
    if (snapshot.phase === 'choosing') { if (el('choose').parentElement !== el('actions')) el('actions').prepend(el('choose')); }
    else if (el('choose').parentElement === el('actions')) el('content').after(el('choose'));
    const active = ['practicing','first_attempt', 'client_feedback', 'observer_feedback', 'retry'].includes(snapshot.phase);
    el('next').hidden = !controls || (!active && snapshot.phase !== 'lobby') || !!pending;
    text('next', snapshot.phase === 'lobby' ? s.start : snapshot.item_index === snapshot.statement_ids.length - 1 ? s.finishLast : s.finishNext);
    el('next').disabled = commanding || !fresh || !roomEveryoneReady(snapshot);
    el('pass').hidden = !controls || !active || !!pending;
    el('pass').disabled = el('next').disabled;
    el('rotate').hidden = !controls || snapshot.phase !== 'round_debrief' || !!pending;
    const save = el('save'), score = el('score');
    const unrated = snapshot.completed_ids.length > 0 && !snapshot.saved_score;
    const changedRating = score && snapshot.saved_score && Number(score.value) !== snapshot.saved_score;
    text('rotate', unrated ? s.skipRating : changedRating ? s.skipChanges : s.rotate);
    el('rotate').className = unrated || changedRating ? 'ghost-button' : 'primary-button';
    el('rotate').disabled = el('next').disabled;
    el('end').hidden = !hostControls || !!pending; el('end').disabled = commanding || !fresh;
    el('retry').hidden = !pending; el('retry').disabled = commanding || !fresh;
    el('leave').hidden = hostControls || ended || !!pending; el('leave').disabled = commanding || !fresh;
    el('another').hidden = !ended;
    el('done').hidden = !ended;
    save.hidden = !controls || snapshot.phase !== 'round_debrief' || !snapshot.completed_ids.length || (!!snapshot.saved_score && Number(score?.value) === snapshot.saved_score) || !!pending;
    text('save', snapshot.saved_score ? s.updateRating : s.save);
    save.disabled = commanding || !!pending || !fresh || !score?.value;
    el('actions').hidden = ![...el('actions').children].some(button => !button.hidden);
    el('sync').hidden = fresh && !error;
    el('sync').disabled = commanding;
  }

  function dismiss(navigate = true) {
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
    el('code').value = code ?? read('dp_group_invite') ?? '';
    if (code) write('dp_group_invite', code);
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
  el('back').addEventListener('click', () => dismiss());
  el('done').addEventListener('click', () => dismiss());
  el('join-form').addEventListener('submit', event => {
    event.preventDefault();
    write('dp_group_invite', el('code').value);
    if (!getUser()) { dismiss(); signIn(); return; }
    void request(async () => { const next = await practiceRoomRpc('join_practice_room', {input_code: el('code').value, input_role: el('role').value}); write('dp_group_invite', null); const url = new URL(window.location.href); url.searchParams.delete('room'); window.history.replaceState(null, '', url); return next; });
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
  function confirmExit(action) {
    const s = strings(); confirming = action;
    confirmOverlay.querySelector('#room-exit-title').textContent = action === 'close' ? s.endTitle : s.leaveTitle;
    confirmOverlay.querySelector('#room-exit-description').textContent = action === 'close' ? s.endDescription : roomRole(room, userId) === 'passive' ? s.leaveWatching : s.leaveDescription;
    confirmOverlay.querySelector('#room-exit-confirm').textContent = action === 'close' ? s.end : s.leave;
    confirmOverlay.querySelector('#room-exit-cancel').textContent = s.cancel;
    const cancel = () => { dialogs.close(confirmOverlay); confirming = null; };
    dialogs.open(confirmOverlay, {onDismiss: cancel, initialFocus: confirmOverlay.querySelector('#room-exit-cancel')});
  }
  confirmOverlay.querySelector('#room-exit-cancel').addEventListener('click', () => { dialogs.close(confirmOverlay); confirming = null; });
  confirmOverlay.querySelector('#room-exit-confirm').addEventListener('click', () => { const action = confirming; dialogs.close(confirmOverlay); confirming = null; if (action) void sync.command(action); });
  confirmOverlay.addEventListener('click', e => { if (e.target === confirmOverlay) { dialogs.close(confirmOverlay); confirming = null; } });
  el('leave').addEventListener('click', () => confirmExit('leave'));
  el('sync').addEventListener('click', () => { void sync.sync(); });
  el('next').addEventListener('click', () => { void sync.command(room.phase === 'lobby' ? 'start' : 'finish_item'); });
  el('pass').addEventListener('click', () => { if (window.confirm(strings().confirmPass)) void sync.command('pass'); });
  el('rotate').addEventListener('click', () => { void sync.command('rotate'); });
  el('end').addEventListener('click', () => confirmExit('close'));
  el('retry').addEventListener('click', () => { const p = sync.status().pending; if (p) void sync.command(p.action, p.score, p.configuration ?? null); });
  el('another').addEventListener('click', () => { write(roomKey(), null); dismiss(); void show({resume: false, mode:'hub'}); });
  window.addEventListener('online', () => { void sync.sync(); });
  window.addEventListener('focus', () => { void sync.sync(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) void sync.sync(); });
  return {show, async prepare(configFactory, expectedRoomId) {
    const configuration = await configFactory();
    await show({mode:'resume'});
    if (!open || room?.id !== expectedRoomId || room?.host_id !== userId) return;
    await sync.command('prepare', null, configuration);
  }, element: overlay, hide() { if (open) dismiss(false); }, authChanged() { if (open && (getUser()?.id ?? null) !== userId) dismiss(); }};
}

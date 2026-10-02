// The same exercise guidance is used on shared devices and in synchronized rooms.
export const GROUP_PRACTICE_COPY = {
  en: {
    reflection: {therapist: 'Which change helped?', client: 'What changed on the retry?', observer: 'One strength. One next practice target.', passive: 'What did you notice about the skill?'},
    awarenessReflection: {therapist: 'What did you notice? Share only what you choose.', client: 'How did the group respect privacy?', observer: 'One moment of awareness. One gentle next experiment.', passive: 'What helped the therapist notice without pressure?'},
    derole: 'Step out of role. Say your own names and pause.', nextFocus: 'Choose the next challenge',
    workflowTitle: 'The workflow', yourPart: 'Your part', afterRound: 'After every 3 items',
    workflowSteps: ['Client reads the line', 'Therapist responds', 'Client gives feedback', 'Observer coaches', 'Repeat line · therapist retries', 'Rate the therapist'],
    awarenessSteps: ['Reader reads the line', 'Therapist notices their reaction', 'Reader reflects', 'Observer suggests an experiment', 'Repeat line · therapist notices again', 'Rate the therapist'],
    skillFocus: 'Skill focus', pairGuide: ['Guide', 'Finish each item after the retry. Self-assess after each set of three.'],
    roleGuide: {
      therapist: {preview: 'Listen · respond · retry', steps: [['Respond', 'Listen to the client, then try the skill in your own words.'], ['Feedback', 'Choose a useful change; you can adapt the feedback or pass.'], ['Retry', 'Ask for the same line. Test one change.']]},
      client: {preview: 'Read · feedback · repeat', steps: [['Read', 'Read the line aloud in the client’s voice.'], ['Feedback', 'Stay in role. Describe how it felt: “I felt…” or “It helped when…”'], ['Repeat', 'Use the same line for the retry.']]},
      observer: {preview: 'Notice · coach · finish', steps: [['Notice', 'Listen for wording, tone and pace linked to the skill.'], ['Coach', 'One specific strength, one small experiment. Coach the skill, not the person.'], ['Finish', 'Tap Finish item after the retry. Rate the therapist after each set of three.']]},
      passive: {preview: 'Watch · listen', steps: [['Watch', 'Listen for the skill and what changes on the retry.'], ['Make room', 'Let the active observer give coaching and finish the item.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Notice · share · notice again', steps: [['Notice', 'Attend to your body, feelings and impulses as the line is read.'], ['Share', 'Share only what you choose; you do not need to respond to the client.'], ['Again', 'Hear the same line again. Notice what changes.']]},
      client: {preview: 'Read · reflect · repeat', steps: [['Read', 'Read the client’s line, then step out of role.'], ['Reflect', 'Describe the pause and noticing, without interpreting the therapist.'], ['Repeat', 'Read the same line again; respect what the therapist keeps private.']]},
      observer: {preview: 'Notice · support · finish', steps: [['Notice', 'Listen for awareness and respect for boundaries.'], ['Support', 'Offer one gentle noticing experiment, without interpretation or pressure to disclose.'], ['Finish', 'Finish after the second listen. Rate awareness, not private content.']]},
      passive: {preview: 'Watch · respect boundaries', steps: [['Watch', 'Notice how the therapist pauses and attends to their reaction.'], ['Boundaries', 'Respect what stays private. Leave coaching to the active observer.']]}
    },
    awarenessCue: {therapist: 'Notice your reaction; you do not need to respond to the client. Share only what you choose.', client: 'Read, then step out of role. Reflect on the pause; respect what stays private.', observer: 'Notice one strength. Suggest a gentle experiment without interpreting or asking for disclosure.', passive: 'Listen to the process. Respect what the therapist keeps private.'},
    finishNext: 'Finish item · next', finishLast: 'Finish item · rate set', beforeExample: 'Optional, after your own attempt and feedback.',
    example: 'See an example', hideExample: 'Hide example', exampleNote: 'An example, not an answer key. Choose one change to try.',
  },
  no: {
    reflection: {therapist: 'Hvilken endring hjalp?', client: 'Hva endret seg ved det nye forsøket?', observer: 'Én styrke. Ett neste øvingsmål.', passive: 'Hva la du merke til ved ferdigheten?'},
    awarenessReflection: {therapist: 'Hva la du merke til? Del bare det du selv velger.', client: 'Hvordan ivaretok gruppen privatlivet?', observer: 'Ett øyeblikk med bevissthet. Ett varsomt neste eksperiment.', passive: 'Hva hjalp terapeuten å legge merke til uten press?'},
    derole: 'Gå ut av rollen. Si deres egne navn og ta en pause.', nextFocus: 'Velg neste utfordring',
    workflowTitle: 'Slik øver dere', yourPart: 'Din del', afterRound: 'Etter hvert tredje utsagn',
    workflowSteps: ['Klienten leser utsagnet', 'Terapeuten svarer', 'Klienten gir tilbakemelding', 'Observatøren veileder', 'Gjenta utsagnet · terapeuten prøver igjen', 'Vurder terapeuten'],
    awarenessSteps: ['Oppleseren leser utsagnet', 'Terapeuten merker sin reaksjon', 'Oppleseren reflekterer', 'Observatøren foreslår et eksperiment', 'Gjenta utsagnet · terapeuten merker på nytt', 'Vurder terapeuten'],
    skillFocus: 'Ferdighetsfokus', pairGuide: ['Led øvingen', 'Fullfør hvert utsagn etter det nye forsøket. Vurder deg selv etter hvert sett med tre.'],
    roleGuide: {
      therapist: {preview: 'Lytt · svar · prøv igjen', steps: [['Svar', 'Lytt til klienten, og prøv ferdigheten med dine egne ord.'], ['Tilbakemelding', 'Velg en nyttig endring; du kan tilpasse tilbakemeldingen eller stå over.'], ['Prøv igjen', 'Be om det samme utsagnet. Prøv én endring.']]},
      client: {preview: 'Les · gi respons · gjenta', steps: [['Les', 'Les utsagnet høyt med klientens stemme.'], ['Gi respons', 'Bli i rollen. Beskriv hvordan det kjentes: «Jeg følte …» eller «Det hjalp da …»'], ['Gjenta', 'Bruk det samme utsagnet ved det nye forsøket.']]},
      observer: {preview: 'Legg merke til · veiled · fullfør', steps: [['Legg merke til', 'Lytt etter ordvalg, tone og tempo knyttet til ferdigheten.'], ['Veiled', 'Én konkret styrke, ett lite eksperiment. Veiled ferdigheten, ikke personen.'], ['Fullfør', 'Trykk Fullfør etter det nye forsøket. Vurder terapeuten etter hvert sett med tre.']]},
      passive: {preview: 'Følg med · lytt', steps: [['Følg med', 'Lytt etter ferdigheten og hva som endrer seg ved det nye forsøket.'], ['Gi plass', 'La den aktive observatøren veilede og fullføre utsagnet.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Merk · del · merk på nytt', steps: [['Merk', 'Legg merke til kropp, følelser og impulser mens utsagnet leses.'], ['Del', 'Del bare det du selv velger; du trenger ikke svare klienten.'], ['På nytt', 'Lytt til det samme utsagnet igjen. Merk hva som endrer seg.']]},
      client: {preview: 'Les · reflekter · gjenta', steps: [['Les', 'Les klientens utsagn, og gå så ut av rollen.'], ['Reflekter', 'Beskriv pausen og oppmerksomheten, uten å tolke terapeuten.'], ['Gjenta', 'Les det samme utsagnet igjen; respekter det som holdes privat.']]},
      observer: {preview: 'Merk · støtt · fullfør', steps: [['Merk', 'Lytt etter bevissthet og respekt for grenser.'], ['Støtt', 'Foreslå ett varsomt eksperiment, uten tolkning eller press om å dele.'], ['Fullfør', 'Fullfør etter den andre lyttingen. Vurder bevissthet, ikke privat innhold.']]},
      passive: {preview: 'Følg med · respekter grenser', steps: [['Følg med', 'Legg merke til hvordan terapeuten stopper opp og merker egen reaksjon.'], ['Grenser', 'Respekter det som holdes privat. La den aktive observatøren veilede.']]}
    },
    awarenessCue: {therapist: 'Merk din reaksjon; du trenger ikke svare klienten. Del bare det du selv velger.', client: 'Les, og gå så ut av rollen. Reflekter over pausen; respekter det som holdes privat.', observer: 'Legg merke til én styrke. Foreslå et varsomt eksperiment uten å tolke eller be om utlevering.', passive: 'Lytt til prosessen. Respekter det terapeuten holder privat.'},
    finishNext: 'Fullfør · neste utsagn', finishLast: 'Fullfør · vurder settet', beforeExample: 'Valgfritt, etter eget forsøk og tilbakemelding.',
    example: 'Se et eksempel', hideExample: 'Skjul eksempelet', exampleNote: 'Et eksempel, ikke en fasit. Velg én endring å prøve.',
  },
};

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
}

export function getGroupPracticeCopy(language) {
  return GROUP_PRACTICE_COPY[language] ?? GROUP_PRACTICE_COPY.en;
}

export function createGroupWorkflow({language, awareness = false, pair = false, id, open = false}) {
  const s = getGroupPracticeCopy(language);
  const guide = node('details', '', 'room-workflow-guide');
  if (id) guide.id = id;
  guide.open = open;
  guide.append(node('summary', s.workflowTitle));
  const sequence = node('ol', '', 'room-workflow');
  sequence.setAttribute('aria-label', s.workflowTitle);
  const titles = awareness ? s.awarenessSteps : s.workflowSteps;
  (pair ? [0,1,2,4,5] : [0,1,2,3,4,5]).forEach((index, number) => {
    const item = node('li');
    const label = node('span', titles[index]);
    if (index === 5) { item.className = 'room-workflow-rating'; label.append(node('small', s.afterRound)); }
    item.append(node('span', String(number + 1), 'room-workflow-number'), label);
    sequence.append(item);
  });
  guide.append(sequence);
  return guide;
}

export function createGroupRoleGuide({language, awareness = false, role, pair = false, id,
  open = false, roleLabel, focus, example, examplePrefix, onToggle}) {
  const s = getGroupPracticeCopy(language);
  const content = (awareness ? s.awarenessGuide : s.roleGuide)[role];
  const part = node('details', '', 'room-role-guide');
  if (id) part.id = id;
  part.dataset.role = role;
  part.open = open;
  if (onToggle) part.addEventListener('toggle', () => onToggle(part.open));
  const summary = node('summary'), heading = node('span');
  heading.append(node('strong', roleLabel ? `${s.yourPart} · ${roleLabel}` : s.yourPart), node('small', content.preview));
  summary.append(heading); part.append(summary);
  const body = node('div', '', 'room-role-guide-body');
  if (['observer','passive'].includes(role) && focus) {
    const criterion = node('div', '', 'room-role-guide-focus');
    criterion.append(node('strong', s.skillFocus), node('p', focus)); body.append(criterion);
  }
  const steps = node('dl', '', 'room-role-steps');
  const instructions = [...content.steps];
  if (pair && role === 'therapist') instructions.push(s.pairGuide);
  instructions.forEach(([title, instruction], index) => {
    const step = node('div', '', 'room-role-step'), detail = node('dd', instruction);
    if (role === 'therapist' && index === 2 && example) {
      const retry = node('div', '', 'room-retry-example'); retry.id = `${examplePrefix}-example`;
      const reveal = node('button', s.example, 'ghost-button');
      reveal.id = `${examplePrefix}-example-reveal`; reveal.type = 'button';
      const response = node('div'); response.id = `${examplePrefix}-example-response`; response.hidden = true;
      reveal.setAttribute('aria-expanded', 'false'); reveal.setAttribute('aria-controls', response.id);
      reveal.addEventListener('click', () => {
        if (!response.childElementCount) response.append(node('p', s.exampleNote, 'response-hint'), node('p', example, 'room-example-text'));
        response.hidden = !response.hidden;
        reveal.textContent = response.hidden ? s.example : s.hideExample;
        reveal.setAttribute('aria-expanded', String(!response.hidden));
      });
      retry.append(node('p', s.beforeExample, 'response-hint'), reveal, response); detail.append(retry);
    }
    step.append(node('dt', title), detail); steps.append(step);
  });
  body.append(steps); part.append(body);
  return part;
}

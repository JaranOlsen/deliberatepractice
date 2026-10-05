// The same exercise guidance is used on shared devices and in synchronized rooms.
export const GROUP_PRACTICE_COPY = {
  en: {
    reflection: {therapist: 'Which change helped?', client: 'What changed on the retry?', observer: 'What worked well, and what should the therapist try next?', passive: 'What did you notice about the skill?'},
    awarenessReflection: {therapist: 'What did you notice? Share only what you choose.', client: 'How did the group respect privacy?', observer: 'What helped the therapist notice, and what could they try next?', passive: 'What helped the therapist notice without pressure?'},
    derole: 'Step out of role. Say your own names and pause.', nextFocus: 'Choose the next challenge',
    workflowTitle: 'The workflow', yourPart: 'Your part', afterRound: 'After every 3 items',
    workflowSteps: ['Client reads the line', 'Therapist responds', 'Client gives feedback', 'Observer coaches', 'Repeat line · therapist retries', 'Rate the therapist'],
    awarenessSteps: ['Reader reads the line', 'Therapist notices their reaction', 'Reader reflects', 'Observer suggests an experiment', 'Repeat line · therapist notices again', 'Rate the therapist'],
    practiceGuide:'Practice guide', reflectionStep:'Reflect together', retry:'Try again', awarenessRetry:'Notice again', skillFocus: 'Skill focus', pairRating: 'Therapist self-assesses',
    individualGuide: {preview: 'Read · respond · retry', steps: [['Respond', 'Read the line, then try the skill aloud in your own words.'], ['Compare', 'Consider what worked and one change to try. An example is available below.'], ['Retry', 'Use the same line. Test one change.']]},
    roleGuide: {
      therapist: {preview: 'Listen · respond · retry', steps: [['Respond', 'Listen to the client, then try the skill in your own words.'], ['Feedback', 'Choose a useful change; you can adapt the feedback or pass.'], ['Retry', 'Ask for the same line. Test one change.']]},
      client: {preview: 'Read · feedback · repeat', steps: [['Read', 'Read the line aloud in the client’s voice.'], ['Feedback', 'Stay in role. Describe how it felt: “I felt…” or “It helped when…”'], ['Repeat', 'Use the same line for the retry.']]},
      observer: {preview: 'Notice · coach · finish', steps: [['Notice', 'Listen for wording, tone and pace linked to the skill.'], ['Coach', 'One specific strength, one small experiment. Coach the skill, not the person.'], ['Finish', 'Tap Finish item after the retry. Rate the therapist after each set of three.']]},
      passive: {preview: 'Watch · listen', steps: [['Watch', 'Listen for the skill and what changes on the retry.'], ['Make room', 'Let the active observer give coaching and finish the item.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Notice · reflect · notice again', steps: [['Notice', 'Attend to your body, feelings and impulses as the line is read.'], ['Reflect', 'Keep it private, or share only what you choose with the group.'], ['Again', 'Hear the same line again. Notice what changes.']]},
      client: {preview: 'Read · reflect · repeat', steps: [['Read', 'Read the client’s line, then step out of role.'], ['Reflect', 'Describe the pause and noticing, without interpreting the therapist.'], ['Repeat', 'Read the same line again; respect what the therapist keeps private.']]},
      observer: {preview: 'Notice · support · finish', steps: [['Notice', 'Listen for awareness and respect for boundaries.'], ['Support', 'Offer one gentle noticing experiment, without interpretation or pressure to disclose.'], ['Finish', 'Finish after the second listen. Rate awareness, not private content.']]},
      passive: {preview: 'Watch · respect boundaries', steps: [['Watch', 'Notice how the therapist pauses and attends to their reaction.'], ['Boundaries', 'Respect what stays private. Leave coaching to the active observer.']]}
    },
    awarenessCue: {therapist: 'Notice your reaction. Keep it private, or share only what you choose with the group.', client: 'Read, then step out of role. Reflect on the pause; respect what stays private.', observer: 'Notice one strength. Suggest a gentle experiment without interpreting or asking for disclosure.', passive: 'Listen to the process. Respect what the therapist keeps private.'},
    finishNext: 'Finish item · next', finishLast: 'Finish item · rate set',
    example: 'See an example', hideExample: 'Hide example', exampleNote: 'An example, not an answer key. Choose one change to try.', awarenessExampleNote: 'Your reaction may differ, including feeling little or nothing. Notice your own experience.',
  },
  no: {
    reflection: {therapist: 'Hvilken endring hjalp?', client: 'Hva endret seg ved det nye forsøket?', observer: 'Hva fungerte godt, og hva bør terapeuten prøve neste gang?', passive: 'Hva la du merke til ved ferdigheten?'},
    awarenessReflection: {therapist: 'Hva la du merke til? Del bare det du selv velger.', client: 'Hvordan ivaretok gruppen privatlivet?', observer: 'Hva hjalp terapeuten å legge merke til, og hva kan hen prøve neste gang?', passive: 'Hva hjalp terapeuten å legge merke til uten press?'},
    derole: 'Gå ut av rollen. Si deres egne navn og ta en pause.', nextFocus: 'Velg neste utfordring',
    workflowTitle: 'Slik øver dere', yourPart: 'Din del', afterRound: 'Etter hvert tredje utsagn',
    workflowSteps: ['Klienten leser utsagnet', 'Terapeuten svarer', 'Klienten gir tilbakemelding', 'Observatøren veileder', 'Gjenta utsagnet · terapeuten prøver igjen', 'Vurder terapeuten'],
    awarenessSteps: ['Oppleseren leser utsagnet', 'Terapeuten merker sin reaksjon', 'Oppleseren reflekterer', 'Observatøren foreslår et eksperiment', 'Gjenta utsagnet · terapeuten merker på nytt', 'Vurder terapeuten'],
    practiceGuide:'Øvingsguide', reflectionStep:'Reflekter sammen', retry:'Prøv igjen', awarenessRetry:'Merk på nytt', skillFocus: 'Ferdighetsfokus', pairRating: 'Terapeuten vurderer seg selv',
    individualGuide: {preview: 'Les · svar · prøv igjen', steps: [['Svar', 'Les utsagnet, og prøv ferdigheten høyt med dine egne ord.'], ['Sammenlign', 'Tenk over hva som fungerte og én endring å prøve. Du kan se et eksempel nedenfor.'], ['Prøv igjen', 'Bruk det samme utsagnet. Prøv én endring.']]},
    roleGuide: {
      therapist: {preview: 'Lytt · svar · prøv igjen', steps: [['Svar', 'Lytt til klienten, og prøv ferdigheten med dine egne ord.'], ['Tilbakemelding', 'Velg en nyttig endring; du kan tilpasse tilbakemeldingen eller stå over.'], ['Prøv igjen', 'Be om det samme utsagnet. Prøv én endring.']]},
      client: {preview: 'Les · gi respons · gjenta', steps: [['Les', 'Les utsagnet høyt med klientens stemme.'], ['Gi respons', 'Bli i rollen. Beskriv hvordan det kjentes: «Jeg følte …» eller «Det hjalp da …»'], ['Gjenta', 'Bruk det samme utsagnet ved det nye forsøket.']]},
      observer: {preview: 'Legg merke til · veiled · fullfør', steps: [['Legg merke til', 'Lytt etter ordvalg, tone og tempo knyttet til ferdigheten.'], ['Veiled', 'Én konkret styrke, ett lite eksperiment. Veiled ferdigheten, ikke personen.'], ['Fullfør', 'Trykk Fullfør etter det nye forsøket. Vurder terapeuten etter hvert sett med tre.']]},
      passive: {preview: 'Følg med · lytt', steps: [['Følg med', 'Lytt etter ferdigheten og hva som endrer seg ved det nye forsøket.'], ['Gi plass', 'La den aktive observatøren veilede og fullføre utsagnet.']]}
    },
    awarenessGuide: {
      therapist: {preview: 'Merk · reflekter · merk på nytt', steps: [['Merk', 'Legg merke til kropp, følelser og impulser mens utsagnet leses.'], ['Reflekter', 'Behold det for deg selv, eller del bare det du selv velger med gruppen.'], ['På nytt', 'Lytt til det samme utsagnet igjen. Merk hva som endrer seg.']]},
      client: {preview: 'Les · reflekter · gjenta', steps: [['Les', 'Les klientens utsagn, og gå så ut av rollen.'], ['Reflekter', 'Beskriv pausen og oppmerksomheten, uten å tolke terapeuten.'], ['Gjenta', 'Les det samme utsagnet igjen; respekter det som holdes privat.']]},
      observer: {preview: 'Merk · støtt · fullfør', steps: [['Merk', 'Lytt etter bevissthet og respekt for grenser.'], ['Støtt', 'Foreslå ett varsomt eksperiment, uten tolkning eller press om å dele.'], ['Fullfør', 'Fullfør etter den andre lyttingen. Vurder bevissthet, ikke privat innhold.']]},
      passive: {preview: 'Følg med · respekter grenser', steps: [['Følg med', 'Legg merke til hvordan terapeuten stopper opp og merker egen reaksjon.'], ['Grenser', 'Respekter det som holdes privat. La den aktive observatøren veilede.']]}
    },
    awarenessCue: {therapist: 'Merk din reaksjon. Behold den for deg selv, eller del bare det du selv velger med gruppen.', client: 'Les, og gå så ut av rollen. Reflekter over pausen; respekter det som holdes privat.', observer: 'Legg merke til én styrke. Foreslå et varsomt eksperiment uten å tolke eller be om utlevering.', passive: 'Lytt til prosessen. Respekter det terapeuten holder privat.'},
    finishNext: 'Fullfør · neste utsagn', finishLast: 'Fullfør · vurder settet',
    example: 'Se et eksempel', hideExample: 'Skjul eksempelet', exampleNote: 'Et eksempel, ikke en fasit. Velg én endring å prøve.', awarenessExampleNote: 'Din reaksjon kan være annerledes, også at du kjenner lite eller ingenting. Merk din egen opplevelse.',
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

export function createGroupWorkflow({language, awareness = false, pair = false, discussion = false, id, open = false, onToggle}) {
  const s = getGroupPracticeCopy(language);
  const guide = node('details', '', 'room-workflow-guide');
  if (id) guide.id = id;
  guide.open = open;
  if (onToggle) guide.addEventListener('toggle', () => onToggle(guide.open));
  guide.append(node('summary', s.workflowTitle));
  const sequence = node('ol', '', 'room-workflow');
  sequence.setAttribute('aria-label', s.workflowTitle);
  const titles = awareness ? s.awarenessSteps : s.workflowSteps;
  (pair ? [0,1,2,4,5] : [0,1,2,3,4,5]).forEach((index, number) => {
    const item = node('li');
    const label = node('span', discussion && index === 5 ? s.reflectionStep : pair && index === 5 ? s.pairRating : titles[index]);
    if (index === 5) { item.className = 'room-workflow-rating'; label.append(node('small', s.afterRound)); }
    item.append(node('span', String(number + 1), 'room-workflow-number'), label);
    sequence.append(item);
  });
  guide.append(sequence);
  return guide;
}

export function createGroupRoleGuide({language, awareness = false, role, pair = false, individual = false, workflow = false, discussion = false, id,
  open = false, roleLabel, focus, onToggle}) {
  const s = getGroupPracticeCopy(language);
  const content = individual ? s.individualGuide : (awareness ? s.awarenessGuide : s.roleGuide)[role];
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
  instructions.forEach(([title, instruction], index) => {
    const step = node('div', '', 'room-role-step'), detail = node('dd', instruction);
    if (discussion && role === 'observer' && index === 2) {
      detail.textContent = language === 'no' ? 'Fullfør etter det nye forsøket. Reflekter sammen etter hvert sett med tre.' : 'Finish after the retry. Reflect together after each set of three.';
    }
    step.append(node('dt', title), detail); steps.append(step);
  });
  body.append(steps);
  if (workflow) {
    body.append(node('h4', s.workflowTitle, 'practice-workflow-title'),
      createGroupWorkflow({language,awareness,pair,discussion}).querySelector('ol'));
  }
  part.append(body);
  return part;
}

export function createMasteryPracticeHelp(language) {
  const help = node('details', '', 'mastery-background');
  help.append(node('summary', language === 'no' ? 'Om øvingen' : 'About this practice'),
    node('p', language === 'no'
      ? 'Hvert utsagn er et nytt øyeblikk i terapien; det tilpasser seg ikke svaret ditt.'
      : 'Each scene is a new moment in therapy; it doesn’t respond to what you just said.'));
  return help;
}

export function createSharedPracticeGuide({language, awareness, pair, id, open, roleLabel, onToggle}) {
  const s = getGroupPracticeCopy(language), guide = node('details', '', 'room-role-guide shared-practice-guide');
  guide.id = id; guide.open = open;
  guide.append(node('summary', s.practiceGuide));
  const body = node('div', '', 'room-role-guide-body');
  body.append(createGroupWorkflow({language,awareness,pair,discussion:true}).querySelector('ol'));
  for (const role of pair ? ['client','therapist'] : ['client','therapist','observer']) {
    const section = node('section', '', 'shared-role-instructions'); section.dataset.role = role;
    section.append(node('h4', roleLabel(role)),
      createGroupRoleGuide({language, awareness, role, discussion:true}).querySelector('dl'));
    body.append(section);
  }
  guide.append(body);
  guide.addEventListener('toggle', () => onToggle?.(guide.open));
  return guide;
}

export function createPracticeExample({language, awareness = false, example, prefix, focus}) {
  const s = getGroupPracticeCopy(language), container = node('section', '', 'practice-example');
  container.id = `${prefix}-example`;
  const reveal = node('button', s.example, 'ghost-button');
  reveal.type = 'button'; reveal.id = `${prefix}-example-reveal`;
  const response = node('div', '', 'practice-example-response'); response.id = `${prefix}-example-response`; response.hidden = true;
  const retry = node('button', awareness ? s.awarenessRetry : s.retry, 'ghost-button');
  retry.type = 'button'; retry.id = `${prefix}-example-retry`;
  reveal.setAttribute('aria-expanded','false'); reveal.setAttribute('aria-controls',response.id);
  reveal.addEventListener('click', () => {
    response.hidden = !response.hidden;
    reveal.textContent = response.hidden ? s.example : s.hideExample;
    reveal.setAttribute('aria-expanded',String(!response.hidden));
  });
  retry.addEventListener('click', () => {
    response.hidden = true; reveal.textContent = s.example; reveal.setAttribute('aria-expanded','false'); focus?.();
  });
  response.append(node('p', awareness ? s.awarenessExampleNote : s.exampleNote, 'response-hint'),
    node('p',example,'room-example-text'),retry);
  container.append(reveal,response);
  return container;
}

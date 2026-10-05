import {getSkillFeedback} from '../data/skillFeedback.js';

export const FEEDBACK_COPY = {
  en: {heading: 'What to look for', middle: '3 · Adequate in parts', high: '5 · Skillfully demonstrated', next: 'Practice reminder', optional: 'One change to try next time · optional', private: 'Only in your account. Share aloud if you choose.', shared: 'Opening this shows your reminder on this shared screen.', saved: 'Saved for your next practice.', saving: 'Saving…', save: 'Save reminder', clear: 'Remove reminder', removed: 'Reminder removed.', loading: 'Loading your reminder…', failed: 'Could not load your reminder. Try again.', saveFailed: 'Could not save. Your draft is still here.', signIn: 'Sign in to keep a reminder for next time.', edit: 'Change', add: 'Add a reminder', cancel: 'Cancel', retry: 'Try again', copy: 'Copy to share', copied: 'Copied. Choose where to share it.', copyFailed: 'Could not copy. You can share it aloud.', tooLong: 'Keep it to 160 characters.', privacy: 'A practice adjustment, without personal or client details.'},
  no: {heading: 'Se etter dette', middle: '3 · Tilfredsstillende i deler', high: '5 · Svært godt demonstrert', next: 'Husk til neste øving', optional: 'Én endring å prøve neste gang · valgfritt', private: 'Bare i din konto. Del det høyt hvis du vil.', shared: 'Når du åpner dette, vises påminnelsen din på den felles skjermen.', saved: 'Lagret til neste øving.', saving: 'Lagrer …', save: 'Lagre påminnelse', clear: 'Fjern påminnelse', removed: 'Påminnelsen er fjernet.', loading: 'Henter påminnelsen din …', failed: 'Kunne ikke hente påminnelsen. Prøv igjen.', saveFailed: 'Kunne ikke lagre. Utkastet ditt er fortsatt her.', signIn: 'Logg inn for å beholde en påminnelse til neste gang.', edit: 'Endre', add: 'Legg til en påminnelse', cancel: 'Avbryt', retry: 'Prøv igjen', copy: 'Kopier for å dele', copied: 'Kopiert. Velg hvor du vil dele den.', copyFailed: 'Kunne ikke kopiere. Du kan dele den høyt.', tooLong: 'Bruk høyst 160 tegn.', privacy: 'En øvingsjustering, uten private opplysninger eller klientdetaljer.'}
};

export function feedbackCopy(language) { return FEEDBACK_COPY[language] ?? FEEDBACK_COPY.en; }

const SELF_COPY = {
  en: {heading: 'Reflect on your attempt'},
  no: {heading: 'Se tilbake på forsøket'}
};

export function createSkillFeedback({skillId, language, id, audience = 'observer'}) {
  const content = getSkillFeedback(skillId, language);
  if (!content) return document.createElement('span');
  const s = feedbackCopy(language), details = document.createElement('details');
  const self = audience === 'self', reflection = SELF_COPY[language] ?? SELF_COPY.en;
  details.className = 'skill-feedback-guide';
  details.dataset.audience = audience;
  if (id) details.id = id;
  const summary = document.createElement('summary'); summary.textContent = self ? reflection.heading : s.heading;
  const cues = document.createElement('ul');
  for (const cue of self ? content.selfCues : content.cues) { const li = document.createElement('li'); li.textContent = cue; cues.append(li); }
  const anchors = document.createElement('dl'); anchors.className = 'skill-feedback-anchors';
  for (const [title, text] of [[s.middle, content.middle], [s.high, content.high]]) {
    const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
    dt.textContent = title; dd.textContent = text; row.append(dt, dd); anchors.append(row);
  }
  details.append(summary, cues, anchors); return details;
}

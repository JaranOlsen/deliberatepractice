"use strict";

import { CONTENT_REVISION } from "./contentMeta.js";

export const LANGUAGE_ORDER = [
  "en",
  "no"
];

export const LANGUAGE_METADATA = {
  "en": {
    "label": "English",
    "locale": "en",
    "direction": "ltr"
  },
  "no": {
    "label": "Norsk (bokmål)",
    "locale": "no",
    "direction": "ltr"
  }
};

export const LANGUAGE_UI = {
  "en": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Build precision with focused skills and curated cases across difficulty levels.",
    "languageHeading": "Choose a Language",
    "languageDescription": "Select the language you want to practice in.",
    "languageListAria": "Language options",
    "skillHeading": "Choose a Skill",
    "skillDescription": "Pick the focus area you want to strengthen today.",
    "skillListAria": "Skill options",
    "caseHeading": "Pick a Case",
    "caseDescription": "Explore curated scenarios with built-in difficulty levels.",
    "caseListAria": "Case options",
    "skillFocusLabel": "Skill focus",
    "learnSkill": "Learn this skill",
    "learnSkillAria": "Learn this skill",
    "skillGuideHeading": "Skill Guide",
    "skillGuideDescription": "Review the markers, aim, and common misses before choosing a case.",
    "skillMarkerLabel": "Markers",
    "skillSummaryLabel": "How to Work",
    "skillAimLabel": "Aim",
    "skillPracticeFocusLabel": "What to practice",
    "skillCommonMissLabel": "Common miss",
    "glossaryHint": "Tap highlighted terms to see quick definitions.",
    "glossaryTitle": "Key term",
    "glossaryClose": "Close definition",
    "showSkillInstructions": "Show instructions",
    "hideSkillInstructions": "Hide instructions",
    "historyLabel": "History",
    "schemaLabel": "Maladaptive Scheme",
    "corePainLabel": "Core Pain",
    "styleLabel": "Style",
    "casePracticeEdgeLabel": "What to listen for",
    "caseBriefHeading": "Case Brief",
    "roleBriefHeading": "Role Background",
    "clientVoiceHeading": "Client Voice",
    "practiceControlsAria": "Practice controls",
    "shuffle": "Shuffle Statements",
    "shuffleAria": "Shuffle statement order",
    "next": "Next",
    "nextAria": "Advance to the next statement",
    "finishRound": "Finish",
    "finishRoundAria": "Finish this practice round",
    "showSuggestion": "Show Suggested Response",
    "hideSuggestion": "Hide Suggested Response",
    "suggestionHiddenLabel": "Suggested response is hidden",
    "suggestionShownLabel": "Suggested response is visible",
    "statementFallback": "Statements for this case are not available yet.",
    "emptyPrompt": "Select a skill and case to begin practicing statements.",
    "counterPattern": "{current} of {total}",
    "startPractice": "Begin Practice",
    "viewCaseBrief": "View Case Brief",
    "backToLanguage": "Language",
    "backToLanguageAria": "Back to language selection",
    "backToSkills": "Skills",
    "backToSkillsAria": "Back to skills",
    "backToCases": "Cases",
    "backToCasesAria": "Back to cases",
    "footerNote": "Copyright © 2025 Jaran Olsen. All rights reserved.",
    "statementPanelAria": "Client statements to practice with",
    "lockedLabel": "Locked",
    "lockedBanner": "Most cases are for members. Enter your access code to unlock the full library.",
    "lockedPlaceholder": "This case is locked. Unlock to view statements.",
    "paywallHeading": "Unlock the full library",
    "paywallMessage": "Enter your access code to view this case",
    "unlockSubmit": "Unlock",
    "unlockCodeLabel": "Access code",
    "unlockPlaceholder": "Enter code",
    "unlockMissing": "Enter a code to continue.",
    "unlockInvalid": "That code was not recognized.",
    "unlockExpired": "That code has expired.",
    "unlockError": "Could not unlock right now. Please try again.",
    "unlockSuccess": "Unlocked! Full library is available.",
    "unlockWorking": "Checking code...",
    "unlockConfigMissing": "Supabase configuration is missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Flag this item",
    "feedbackReasonLabel": "What's wrong?",
    "feedbackDetailsLabel": "Add details (optional)",
    "feedbackSubmit": "Send feedback",
    "feedbackToggleShow": "Flag",
    "feedbackToggleHide": "Hide",
    "feedbackSending": "Sending...",
    "feedbackSuccess": "Thanks! Your feedback was sent.",
    "feedbackError": "Unable to send feedback. Please try again.",
    "feedbackUnavailable": "Select a case and statement to send feedback.",
    "feedbackConfigMissing": "Feedback storage is not configured.",
    "resumeTitle": "Resume practice",
    "resumeButton": "Resume",
    "resumeClear": "Clear",
    "completedShort": "done",
    "responseLabel": "Your response",
    "responsePlaceholder": "Say it aloud, or jot a local note before revealing the suggestion.",
    "responseHint": "Optional and not saved.",
    "signInButton": "Sign in",
    "accountButtonSignedIn": "Account",
    "signOutButton": "Sign out",
    "accountEyebrow": "Practice account",
    "accountHeading": "Account",
    "therapistEyebrow": "Active therapist",
    "therapistHeading": "Choose who is practicing",
    "therapistSignedOutMessage": "Sign in from Account to choose an active therapist or pair with a partner.",
    "accessTitle": "Library access",
    "accessStatusFree": "Free access",
    "accessStatusUnlocked": "Full library unlocked",
    "accessStatusExpires": "Full library unlocked until {date}",
    "authIntro": "Sign in to save ratings, see progress, and manage your library access.",
    "authEmailLabel": "Email",
    "authEmailPlaceholder": "you@example.com",
    "authSubmit": "Send magic link",
    "authConfigMissing": "Supabase Auth is not configured.",
    "authEmailMissing": "Enter your email address.",
    "authSending": "Sending magic link...",
    "authSent": "Check your email for the sign-in link.",
    "authError": "Unable to update account.",
    "profileLabel": "Signed in as",
    "profileDisplayLabel": "Display name",
    "profileSave": "Save",
    "profileSaved": "Profile saved.",
    "profileError": "Unable to save profile.",
    "signedOut": "Signed out.",
    "activeTherapistLabel": "Active therapist",
    "activeTherapistHint": "Ratings save to the selected therapist.",
    "meLabel": "Me",
    "selfSourceLabel": "self",
    "savingForPrefix": "Saving:",
    "headerSavingForPrefix": "For:",
    "noActiveTherapist": "No active therapist",
    "pairingCreateTitle": "Invite a partner",
    "pairingCreateDescription": "Create a short code on the therapist device. The partner accepts it on their device.",
    "pairingCreateButton": "Create code",
    "pairingCreating": "Creating code...",
    "pairingCreated": "Share this code with your practice partner.",
    "pairingCreateError": "Unable to create pairing code.",
    "pairingAcceptLabel": "Accept partner code",
    "pairingAcceptButton": "Accept",
    "pairingCodePlaceholder": "ABCD1234",
    "pairingCodeMissing": "Enter the pairing code.",
    "pairingAccepting": "Accepting code...",
    "pairingAccepted": "Partner added. Ratings can now save to that therapist.",
    "pairingAcceptError": "Unable to accept pairing code.",
    "expiresPrefix": "Expires:",
    "copyButton": "Copy",
    "shareButton": "Share",
    "copied": "Copied.",
    "copyError": "Could not copy the code.",
    "shared": "Shared.",
    "shareError": "Could not share the code.",
    "sharePairingText": "Use this Deliberate Practice pairing code:",
    "partnersTitle": "Paired therapists",
    "noPartners": "No paired therapists yet.",
    "revokePartner": "Revoke",
    "revokeWorking": "Revoking partner...",
    "revokeSuccess": "Partner revoked.",
    "revokeError": "Unable to revoke partner.",
    "ratingEyebrow": "Finish round",
    "ratingTitleSelf": "How well did you master this round?",
    "ratingTitleObserver": "How well did the active therapist master this round?",
    "ratingScoreLabel": "Round score",
    "ratingScoreGuide": "1 = Not yet mastered · 5 = Mastered confidently",
    "ratingTargetSignedOut": "Sign in to save",
    "ratingSubmit": "Save",
    "ratingSavedButton": "Saved",
    "ratingSkip": "Skip",
    "ratingDone": "Done",
    "ratingSignInHint": "Sign in to save this round, or finish without saving.",
    "ratingConfigMissing": "Supabase Auth is not configured.",
    "ratingNoTarget": "Choose an active therapist before saving.",
    "ratingUnavailable": "No active round to rate.",
    "ratingMissingScore": "Choose a score first.",
    "ratingSaving": "Saving rating...",
    "ratingSaved": "Saved.",
    "ratingError": "Unable to save rating.",
    "ratingItemCountSingular": "{count} item practiced",
    "ratingItemCountPlural": "{count} items practiced",
    "selfChartTitle": "Your progress",
    "selfChartDescription": "Self-ratings only.",
    "selfChartRefresh": "Refresh",
    "selfChartSignIn": "Sign in to see your self-rating chart.",
    "selfChartLoading": "Loading chart...",
    "selfChartNotLoaded": "Open your account to load the chart.",
    "selfChartEmpty": "No self-ratings yet.",
    "selfChartError": "Unable to load chart.",
    "selfChartAverage": "{score}/5 weighted average",
    "selfChartCount": "{count} items practiced",
    "selfChartAria": "Radial chart of self-rated practice progress by skill",
    "selfChartDifficultyTitle": "By difficulty",
    "selfChartSkillDifficultyTitle": "By skill and difficulty (n = items)",
    "selfChartCellCount": "n={count}",
    "selfChartSkillLabels": {
      "therapist-self-awareness": ["Self", "awareness"],
      "empathic-understanding": ["Empathic", "understanding"],
      "empathic-affirmation-validation": ["Affirmation", "validation"],
      "exploratory-questions": ["Exploratory", "questions"],
      "providing-treatment-rationale": ["Treatment", "rationale"],
      "empathic-explorations": ["Empathic", "exploration"],
      "empathic-evocations": ["Empathic", "evocation"],
      "empathic-conjectures": ["Empathic", "conjectures"],
      "staying-in-contact-intense-affect": ["Contact", "in affect"],
      "self-disclosure": ["Self-", "disclosure"],
      "marker-recognition-chairwork": ["Markers", "chairwork"],
      "alliance-repair": ["Alliance", "repair"],
      "empathic-refocusing": ["Empathic", "refocusing"]
    },
    "difficultyEasy": "Easy",
    "difficultyModerate": "Moderate",
    "difficultyHard": "Hard"
  },
  "no": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Bygg presisjon med målrettede ferdigheter på nøye utvalgte caser over flere vanskelighetsnivåer.",
    "languageHeading": "Velg språk",
    "languageDescription": "Velg språket du vil øve på.",
    "languageListAria": "Språkvalg",
    "skillHeading": "Velg en ferdighet",
    "skillDescription": "Velg hva du vil øve på i dag.",
    "skillListAria": "Ferdighetsvalg",
    "caseHeading": "Velg en case",
    "caseDescription": "Utforsk nøye utvalgte caser av forskjellig vanskelighetsgrad.",
    "caseListAria": "Casevalg",
    "skillFocusLabel": "Ferdighetsfokus",
    "learnSkill": "Lær ferdigheten",
    "learnSkillAria": "Lær denne ferdigheten",
    "skillGuideHeading": "Ferdighetsguide",
    "skillGuideDescription": "Se gjennom markører, mål og vanlige feilgrep før du velger case.",
    "skillMarkerLabel": "Markører",
    "skillSummaryLabel": "Hvordan jobbe",
    "skillAimLabel": "Mål",
    "skillPracticeFocusLabel": "Hva du øver på",
    "skillCommonMissLabel": "Vanlig feilgrep",
    "glossaryHint": "Trykk på markerte begreper for å se en kort forklaring.",
    "glossaryTitle": "Nøkkelbegrep",
    "glossaryClose": "Lukk forklaring",
    "showSkillInstructions": "Vis instruksjoner",
    "hideSkillInstructions": "Skjul instruksjoner",
    "historyLabel": "Bakgrunn",
    "schemaLabel": "Maladaptivt skjema",
    "corePainLabel": "Kjernesmerte",
    "styleLabel": "Stil",
    "casePracticeEdgeLabel": "Hva du bør lytte etter",
    "caseBriefHeading": "Caseoversikt",
    "roleBriefHeading": "Rollebakgrunn",
    "clientVoiceHeading": "Klientens stemme",
    "practiceControlsAria": "Kontroller for øving",
    "shuffle": "Stokk om utsagnene",
    "shuffleAria": "Stokk om rekkefølgen på utsagnene",
    "next": "Neste",
    "nextAria": "Gå til neste utsagn",
    "finishRound": "Avslutt",
    "finishRoundAria": "Avslutt denne øvingsrunden",
    "showSuggestion": "Vis foreslått respons",
    "hideSuggestion": "Skjul foreslått respons",
    "suggestionHiddenLabel": "Foreslått respons er skjult",
    "suggestionShownLabel": "Foreslått respons er synlig",
    "statementFallback": "Utsagnene for denne casen er ikke tilgjengelige ennå.",
    "emptyPrompt": "Velg en ferdighet og en case for å begynne å øve.",
    "counterPattern": "{current} av {total}",
    "startPractice": "Start øvingen",
    "viewCaseBrief": "Vis caseoversikt",
    "backToLanguage": "Språk",
    "backToLanguageAria": "Tilbake til språkvalg",
    "backToSkills": "Ferdigheter",
    "backToSkillsAria": "Tilbake til ferdigheter",
    "backToCases": "Caser",
    "backToCasesAria": "Tilbake til caser",
    "footerNote": "Opphavsrett © 2025 Jaran Olsen. Alle rettigheter forbeholdt.",
    "statementPanelAria": "Klientutsagn for øving",
    "lockedLabel": "Låst",
    "lockedBanner": "De fleste casene er låst. Bruk tilgangskoden for å åpne biblioteket.",
    "lockedPlaceholder": "Denne casen er låst. Lås opp for å se utsagnene.",
    "paywallHeading": "Lås opp hele biblioteket",
    "paywallMessage": "Skriv inn tilgangskoden for å se denne casen",
    "unlockSubmit": "Lås opp",
    "unlockCodeLabel": "Tilgangskode",
    "unlockPlaceholder": "Skriv inn kode",
    "unlockMissing": "Skriv inn kode for å fortsette.",
    "unlockInvalid": "Koden ble ikke gjenkjent.",
    "unlockExpired": "Koden er utløpt.",
    "unlockError": "Kunne ikke låse opp nå. Prøv igjen.",
    "unlockSuccess": "Låst opp! Hele biblioteket er tilgjengelig.",
    "unlockWorking": "Sjekker kode...",
    "unlockConfigMissing": "Supabase-oppsett mangler. Legg til VITE_SUPABASE_URL og VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Rapporter dette punktet",
    "feedbackReasonLabel": "Hva er problemet?",
    "feedbackDetailsLabel": "Detaljer (valgfritt)",
    "feedbackSubmit": "Send tilbakemelding",
    "feedbackToggleShow": "Flagg",
    "feedbackToggleHide": "Skjul",
    "feedbackSending": "Sender...",
    "feedbackSuccess": "Takk! Tilbakemeldingen ble sendt.",
    "feedbackError": "Kunne ikke sende tilbakemelding. Prøv igjen.",
    "feedbackUnavailable": "Velg en case og et utsagn for å sende tilbakemelding.",
    "feedbackConfigMissing": "Lagring av tilbakemelding er ikke satt opp.",
    "resumeTitle": "Fortsett øving",
    "resumeButton": "Fortsett",
    "resumeClear": "Fjern",
    "completedShort": "ferdig",
    "responseLabel": "Din respons",
    "responsePlaceholder": "Si den høyt, eller skriv et lokalt notat før du viser forslaget.",
    "responseHint": "Valgfritt og lagres ikke.",
    "signInButton": "Logg inn",
    "accountButtonSignedIn": "Konto",
    "signOutButton": "Logg ut",
    "accountEyebrow": "Øvingskonto",
    "accountHeading": "Konto",
    "therapistEyebrow": "Aktiv terapeut",
    "therapistHeading": "Velg hvem som øver",
    "therapistSignedOutMessage": "Logg inn fra Konto for å velge aktiv terapeut eller koble til en partner.",
    "accessTitle": "Bibliotektilgang",
    "accessStatusFree": "Gratis tilgang",
    "accessStatusUnlocked": "Hele biblioteket er låst opp",
    "accessStatusExpires": "Hele biblioteket er låst opp til {date}",
    "authIntro": "Logg inn for å lagre vurderinger, se progresjon og administrere bibliotektilgang.",
    "authEmailLabel": "E-post",
    "authEmailPlaceholder": "du@eksempel.no",
    "authSubmit": "Send innloggingslenke",
    "authConfigMissing": "Supabase Auth er ikke satt opp.",
    "authEmailMissing": "Skriv inn e-postadressen din.",
    "authSending": "Sender innloggingslenke...",
    "authSent": "Sjekk e-posten din for innloggingslenken.",
    "authError": "Kunne ikke oppdatere konto.",
    "profileLabel": "Logget inn som",
    "profileDisplayLabel": "Visningsnavn",
    "profileSave": "Lagre",
    "profileSaved": "Profil lagret.",
    "profileError": "Kunne ikke lagre profil.",
    "signedOut": "Logget ut.",
    "activeTherapistLabel": "Aktiv terapeut",
    "activeTherapistHint": "Vurderinger lagres på valgt terapeut.",
    "meLabel": "Meg",
    "selfSourceLabel": "selv",
    "savingForPrefix": "Lagrer for:",
    "headerSavingForPrefix": "For:",
    "noActiveTherapist": "Ingen aktiv terapeut",
    "pairingCreateTitle": "Inviter en partner",
    "pairingCreateDescription": "Lag en kort kode på terapeutens enhet. Partneren godtar den på sin enhet.",
    "pairingCreateButton": "Lag kode",
    "pairingCreating": "Lager kode...",
    "pairingCreated": "Del denne koden med øvingspartneren.",
    "pairingCreateError": "Kunne ikke lage koblingskode.",
    "pairingAcceptLabel": "Godta partnerkode",
    "pairingAcceptButton": "Godta",
    "pairingCodePlaceholder": "ABCD1234",
    "pairingCodeMissing": "Skriv inn koblingskoden.",
    "pairingAccepting": "Godtar kode...",
    "pairingAccepted": "Partner lagt til. Vurderinger kan nå lagres på den terapeuten.",
    "pairingAcceptError": "Kunne ikke godta koblingskode.",
    "expiresPrefix": "Utløper:",
    "copyButton": "Kopier",
    "shareButton": "Del",
    "copied": "Kopiert.",
    "copyError": "Kunne ikke kopiere koden.",
    "shared": "Delt.",
    "shareError": "Kunne ikke dele koden.",
    "sharePairingText": "Bruk denne koblingskoden for Deliberate Practice:",
    "partnersTitle": "Koblede terapeuter",
    "noPartners": "Ingen koblede terapeuter ennå.",
    "revokePartner": "Fjern",
    "revokeWorking": "Fjerner partner...",
    "revokeSuccess": "Partner fjernet.",
    "revokeError": "Kunne ikke fjerne partner.",
    "ratingEyebrow": "Avslutt runde",
    "ratingTitleSelf": "Hvor godt mestret du denne runden?",
    "ratingTitleObserver": "Hvor godt mestret den aktive terapeuten denne runden?",
    "ratingScoreLabel": "Rundeskår",
    "ratingScoreGuide": "1 = Ikke mestret ennå · 5 = Mestret trygt",
    "ratingTargetSignedOut": "Logg inn for å lagre",
    "ratingSubmit": "Lagre",
    "ratingSavedButton": "Lagret",
    "ratingSkip": "Hopp over",
    "ratingDone": "Ferdig",
    "ratingSignInHint": "Logg inn for å lagre denne runden, eller avslutt uten lagring.",
    "ratingConfigMissing": "Supabase Auth er ikke satt opp.",
    "ratingNoTarget": "Velg en aktiv terapeut før lagring.",
    "ratingUnavailable": "Ingen aktiv runde å vurdere.",
    "ratingMissingScore": "Velg en skår først.",
    "ratingSaving": "Lagrer vurdering...",
    "ratingSaved": "Lagret.",
    "ratingError": "Kunne ikke lagre vurdering.",
    "ratingItemCountSingular": "{count} punkt øvd",
    "ratingItemCountPlural": "{count} punkter øvd",
    "selfChartTitle": "Din progresjon",
    "selfChartDescription": "Kun egenvurderinger.",
    "selfChartRefresh": "Oppdater",
    "selfChartSignIn": "Logg inn for å se grafen med egenvurderinger.",
    "selfChartLoading": "Laster graf...",
    "selfChartNotLoaded": "Åpne kontoen for å laste grafen.",
    "selfChartEmpty": "Ingen egenvurderinger ennå.",
    "selfChartError": "Kunne ikke laste graf.",
    "selfChartAverage": "{score}/5 vektet snitt",
    "selfChartCount": "{count} punkter øvd",
    "selfChartAria": "Radial graf over egenvurdert progresjon per ferdighet",
    "selfChartDifficultyTitle": "Etter vanskelighetsgrad",
    "selfChartSkillDifficultyTitle": "Etter ferdighet og vanskelighetsgrad (n = punkter)",
    "selfChartCellCount": "n={count}",
    "selfChartSkillLabels": {
      "therapist-self-awareness": ["Selv-", "bevissthet"],
      "empathic-understanding": ["Empatisk", "forståelse"],
      "empathic-affirmation-validation": ["Bekreftelse", "validering"],
      "exploratory-questions": ["Utforskende", "spørsmål"],
      "providing-treatment-rationale": ["Behandlings-", "rasjonale"],
      "empathic-explorations": ["Empatiske", "utforskninger"],
      "empathic-evocations": ["Evokativ", "empati"],
      "empathic-conjectures": ["Empatiske", "antakelser"],
      "staying-in-contact-intense-affect": ["Kontakt", "affekt"],
      "self-disclosure": ["Selv-", "avsløring"],
      "marker-recognition-chairwork": ["Markører", "stolarbeid"],
      "alliance-repair": ["Allianse", "reparasjon"],
      "empathic-refocusing": ["Empatisk", "refokusering"]
    },
    "difficultyEasy": "Lett",
    "difficultyModerate": "Moderat",
    "difficultyHard": "Vanskelig"
  }
};

export const CASE_FORMULATION_TRANSLATIONS = {
  "no": {
    "case-sara": {
      "corePain": "Skampreget ensomhet og frykt for å bli forlatt, forankret i følelsesmessig avstand fra omsorgspersonene."
    },
    "case-michael": {
      "corePain": "Ydmykelse, utilstrekkelighet og frykt for å bli avslørt, knyttet til en kritisk far og betinget egenverdi."
    },
    "case-jason": {
      "corePain": "En dyp følelse av å være defekt, sosialt klein og redd for å bli avslørt, formet av mobbing og engstelig omsorg."
    },
    "case-laura": {
      "corePain": "Traumebundet frykt, skam og ensomhet knyttet til å oppleve seg skadet og utrygg i nærhet."
    },
    "case-carlos": {
      "corePain": "Ydmykelse, frykt og småhet skjult bak tøffhet som ble lært i voldelige miljøer."
    },
    "case-nina": {
      "corePain": "Frykt for at egne behov eller sinne gjør henne egoistisk, uverdig og lett å forlate."
    },
    "case-aisha": {
      "corePain": "Knusende frykt for å bli forlatt og ikke være elskbar, formet av fosterhjem og traumebetinget ustabilitet."
    },
    "case-david": {
      "corePain": "Verdiløshet og skam skjult under statusjag og kontroll."
    },
    "case-marcus": {
      "corePain": "Fastfrossen sorg, frykt, skam og skyld over å ha overlevd, skjult under nummenhet og tilbaketrekning."
    }
  }
};

export const STATEMENT_TRANSLATION_REVISION = CONTENT_REVISION;

export const LANGUAGE_OVERRIDES = {
  "no": {
    "therapist-self-awareness": {
      "name": "Terapeutens selvbevissthet",
      "description": "Legg merke til og sett ord på dine egne indre reaksjoner mens du lytter, med respekt for privatliv, grenser og tilstedeværelse.",
      "summary": "Terapeutens selvbevissthet er en intrapersonlig EFT-ferdighet: å følge med på egen kropp, følelser, tanker, bilder og handlingsimpulser mens klienten snakker. I denne øvelsen er oppgaven ikke å finne den beste terapeutiske intervensjonen. Terapeuten lytter, legger merke til hva som skjer inni seg, og setter deretter ord på bare den delen av reaksjonen som kjennes riktig å dele i en treningssituasjon.\n\nDette bygger kapasitet til å være til stede når klienten vekker varme, redningstrang, uro, irritasjon, tiltrekning, avsky, nummenhet, defensivitet eller press om å prestere. Du øver på å skille nyttig resonans fra terapeut-sentrert materiale som bør holdes privat eller tas med til veiledning. Ferdigheten handler også om å ivareta egne grenser: selvbevissthet betyr ikke at alt du merker, skal deles.\n\nAppen beholder et forslagstekstfelt for øvingens skyld, men teksten er et eksempel på selvbevissthetsdeling, ikke en modell for hva terapeuten skal si til klienten. Et godt svar begynner ofte med «Jeg legger merke til...» eller «Jeg kjenner et drag mot...», og viser at terapeuten kan registrere aktivering uten å handle den ut eller flytte fokus bort fra klienten.",
      "marker": "Klientmaterialet er sannsynlig å aktivere terapeuten: varme, redningstrang, uro, irritasjon, tiltrekning, avsky, frykt, defensivitet, prestasjonspress eller en trang til å gå for raskt frem. Klienten ber ikke om selvbevissthet; markøren er terapeutens egen indre reaksjon mens hen lytter.",
      "aim": "Øke kapasiteten til å legge merke til, symbolisere og eie egne indre reaksjoner mens du fortsatt lytter til klienten. Bruk bevisstheten til å være til stede og ivareta grenser, ikke til å framføre en polert intervensjon.",
      "practiceFocus": "Lytt, følg med på kropp, følelser, tanker, bilder og impulser, og del deretter bare en komfortabel del av din indre reaksjon.",
      "commonMiss": "Å gjøre forslagsteksten til en polert klientintervensjon, eller å dele for mye i stedet for å ivareta privatliv og grenser.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-understanding": {
      "name": "Empatisk forståelse",
      "description": "Speil klientens indre verden med følelsesnært, presist språk slik at de kjenner seg dypt forstått og invitert til å utforske videre.",
      "summary": "Empatisk forståelse innebærer å gi korte, presise gjentakelser som både fanger hva som skjedde og hvordan det kjennes for klienten akkurat nå. Du lytter etter den emosjonelle meningen under historien og svarer med språk som treffer følelsen, ikke bare fakta. Responsene er korte, her-og-nå-orienterte og frie for råd og tolkninger, slik at klientens opplevelse forblir i sentrum. Hovedintensjonen er å formidle forståelse – dersom opplevelsen fordypes, skjer det som en naturlig følge av å bli møtt.\n\nNår du speiler følelsene med varme og presisjon, kjenner klienten seg mindre alene og mer sett, noe som demper sekundære reaksjoner som skam og tilbaketrekning. Opplevelsen av å være forstått gjør det lettere å bli værende i og utdype de primære følelsene, i stedet for å forklare dem bort eller skifte tema.\n\nOver tid hjelper denne måten å lytte på klienten til å skille mellom lag av følelser og se mønstre i egne reaksjoner. Den styrker alliansen og skaper den tryggheten som trengs for å nærme seg kjernesmerte og udekkede behov. Empatiske gjentakelser organiserer også opplevelsen – det som før var uklart og implisitt blir tydeligere og mer håndterbart. I følelsesfokusert og annen opplevelsesorientert terapi er dette en grunnleggende måte å støtte økt bevissthet, uttrykk og endring på.",
      "marker": "Følelser er tydelig til stede i det klienten forteller, eller historien kjennes uklar, søkende eller fragmentert og de ser ut til å trenge hjelp til å organisere den. Klienten virker «sulten» på å bli hørt, validert og presist sett i sin emosjonelle opplevelse.",
      "aim": "Formidle presis, varm forståelse som gjør at klienten kjenner seg trygg og akseptert akkurat der de er, og som gjør det lettere å utdype følelsene uten å føle seg feil eller overdrevet.",
      "practiceFocus": "Speil den følte meningen i klientens opplevelse med kort, presist språk som ligger tett på deres egne ord.",
      "commonMiss": "Å legge til forklaring, forsikring eller fordypning før klienten har rukket å kjenne seg fullt forstått.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-affirmation-validation": {
      "name": "Empatisk bekreftelse og validering",
      "description": "Sett følelsene inn i en meningsfull sammenheng og si tydelig at de gir mening, slik at skam og selvangrep myknes og det blir tryggere å føle.",
      "summary": "Empatisk bekreftelse og validering handler om å si tydelig at klientens følelser gir mening i lys av det de har opplevd. Du setter ord på de situasjonene, relasjonene eller livserfaringene som gjør en gitt følelse forståelig, og går imot indre budskap som «jeg overreagerer» eller «jeg burde ikke føle dette». Når du merker skam og selvkritikk, bekrefter du både gyldigheten i følelsen og motet det krever å vise den.\n\nPå den måten demper du sekundære, hemmende følelser som skam, skyld og forakt, som ellers lett kveler primære reaksjoner og hindrer bearbeiding. For mange som har fått følelsene sine avvist, gjort narr av eller straffet, blir ekte validering en korrigerende emosjonell erfaring – tristhet, sinne, frykt eller sårethet møtes med respekt i stedet for kritikk. Det gjør det mulig å bli værende i følelsen lenge nok til at kjernesmerte og udekkede behov kan tre tydeligere frem.\n\nValidering betyr ikke å støtte alle handlinger; du skiller mellom at følelsen er forståelig, og hvordan man velger å handle på den. Over tid hjelper konsistent bekreftelse klienten til å utvikle en mer medfølende indre stemme og mindre kronisk selvangrep, slik at også dypt skambelagte følelser kan komme frem og forandres.",
      "marker": "Klienten uttrykker skam eller hard selvkritikk, bagatelliserer eller unnskylder følelsene sine med utsagn som «jeg burde ikke føle dette» eller «det er teit at jeg er så lei meg». De ser kanskje ned, unngår blikk eller skyver følelsene raskt vekk etter at de har vist seg.",
      "aim": "Legitimere klientens følelsesreaksjoner i lys av livssituasjonen, slik at skam og selvangrep mister grepet og klienten kjenner mer tillatelse til å føle. Bygge emosjonell trygghet og selvmedfølelse slik at primære følelser og kjernesmerte kan nås, utforskes og etter hvert forandres.",
      "practiceFocus": "Sett ord på hvorfor følelsen gir mening i kontekst, særlig når skam eller selvangrep er aktivt.",
      "commonMiss": "Å validere handlinger i stedet for følelser, eller å bli så generell at du mister koblingen til klientens livssituasjon.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "exploratory-questions": {
      "name": "Utforskende spørsmål",
      "description": "Still åpne, erfaringsnære spørsmål som vender oppmerksomheten innover og utfolder det som er i ferd med å komme.",
      "summary": "Utforskende spørsmål er enkle, åpne invitasjoner som vender klientens oppmerksomhet mot øyeblikkets kroppslige og emosjonelle opplevelse heller enn analyser og forklaringer. Du spør hva de legger merke til i kroppen, hvilken følelse som er der, eller hva som kjennes mest «i live» akkurat nå.\n\nSlik kan utydelig uro eller rent kognitiv beskrivelse gradvis ta form som mer spesifikke, primære følelser som kan navngis og bearbeides. Du unngår «hvorfor»-spørsmål som lett trekker klienten opp i hodet, og bruker heller «hva», «hvordan» og «hvor» som inviterer til sansing og beskrivelse. Dette beveger klienten fra å snakke om hendelser på avstand til å være mer til stede i egen opplevelse her og nå.\n\nUtforskende spørsmål hjelper også klienten å skille mellom sekundære reaksjoner, som irritasjon eller oppgitthet, og de mer sårbare primære følelsene under, som sårethet, frykt eller skam. Over tid støtter denne måten å spørre på en bevegelse fra diffus uro og kaos til tydeligere kjernesmerte, udekkede behov og nye meninger.",
      "marker": "Klienten beskriver opplevelsen som uklar, blandet, forvirrende eller «bare en merkelig reaksjon», eller de blir værende i historie og analyse uten tydelig kontakt med hva de føler. Du får en fornemmelse av at det finnes en emosjonell kant som er sanset, men ennå ikke satt ord på.",
      "aim": "Lede oppmerksomheten innover slik at implisitt, vag eller før-språklig erfaring kan krystallisere seg til mer konkrete, navngitte følelser. Støtte dypere nivåer av opplevelse og legge grunnlaget for å kunne arbeide direkte med både adaptive og maladaptive primærfølelser.",
      "practiceFocus": "Still ett åpent, innovervendt spørsmål om gangen om kropp, følelse eller mening.",
      "commonMiss": "Å stable spørsmål, spørre «hvorfor», eller trekke klienten opp i analyse i stedet for ned i erfaring.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "providing-treatment-rationale": {
      "name": "Behandlingsrasjonale for følelsesfokusert terapi",
      "description": "Gi en kort, empatisk forklaring på hvorfor følelsesfokusert terapi arbeider med følelser, og hvordan du leder det trygt.",
      "summary": "Et behandlingsrasjonale hjelper klienten å forstå logikken og tryggheten i å arbeide med følelser, særlig når de er skeptiske, redde eller usikre på denne måten å jobbe på. Etter å ha møtt bekymringene deres med empati, forklarer du med hverdagslig språk hvordan følelser organiserer opplevelser, varsler behov og kan endre seg når de får bearbeides fullt ut. Du beskriver også hvordan sekundære reaksjoner og unngåelse ofte holder folk fast, mens tilgang til primære følelser og kjernesmerte åpner for varig endring.\n\nDu er tydelig på din rolle i å regulere tempo og intensitet, slik at klienten ikke blir overlatt til overveldende affekt. Rasjonalet adresserer vanlige bekymringer som «hvis jeg begynner å føle, mister jeg kontrollen» eller «å snakke om følelser hjelper ikke», og bygger samarbeid ved å ramme inn følelsesarbeid som en felles reise med et enkelt kart – fra symptomer og kaos, via kjernesmerte og udekkede behov, til nye emosjonelle responser.\n\nEt godt rasjonale øker villigheten til å delta i opplevelsesorienterte oppgaver som stolarbeid, fokuseringsøvelser eller imaginering når markører dukker opp. Når du vender kort tilbake til denne forklaringen på viktige tidspunkt, minner du klienten om hvorfor det er meningsfullt å vende tilbake til følelsene selv når det kjennes uvant eller skremmende. Over tid støtter den delte forståelsen en sterkere allianse og dypere emosjonell engasjement i arbeidet.",
      "marker": "Klienten spør hvordan terapien virker, uttrykker skepsis eller frykt, eller nøler før en oppgave.",
      "aim": "Gi en kort, erfaringsnær forklaring som roer uro og motstand, skaper felles retning for arbeidet og gjør det tryggere å utforske grunnleggende følelser, kjernesmerte og udekkede behov.",
      "practiceFocus": "Forklar følelsesarbeid med enkelt språk som er direkte knyttet til akkurat denne klientens frykt, mål og behov for trygghet.",
      "commonMiss": "Å bli abstrakt, belærende eller for teoritung i stedet for samarbeidende og personlig relevant.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-explorations": {
      "name": "Empatiske utforskninger",
      "description": "Følg og utvid forsiktig det som allerede er til stede, slik at klienten kan bli i og utdype opplevelsen.",
      "summary": "Empatisk utforsking betyr å følge den emosjonelle kanten som er i ferd med å dukke opp hos klienten, og svare med fint avstemte gjentakelser og invitasjoner til å legge merke til litt mer. I stedet for å hoppe frem til tolkninger, råd eller løsninger, holder du deg ett lite steg bak eller ved siden av klientens egen opplevelse. Du speiler en del av det som er der, og inviterer dem til å dvele, sanse videre og utdype det de føler akkurat nå.\n\nUtforskingen beveger seg langs den stien klienten allerede har lagt ut i ordene sine, og holder seg innenfor det som er eksplisitt uttrykt fremfor å gå under eller forbi det. Det gir skjøre følelsestilstander mulighet til å styrkes og klargjøres uten å bli overveldet eller stengt ned. Dette er spesielt viktig når primære følelser og kjernesmerte begynner å vise seg, men fortsatt kjennes usikre eller blandede.\n\nVed å holde klientens tempo og møte prosessen med ærbødighet, verner du om tryggheten samtidig som kontakten med følelsene fordypes. Empatisk utforsking støtter en bevegelse fra ytre fortellinger og forklaringer til mer levende, kroppslig erfart tristhet, frykt, sinne, skam eller lengsel. Den forebygger også at dere hopper for raskt til reframing, meningstilskrivning eller løsninger, slik at kjernesmerte og udekkede behov får tre tydeligere frem og kan forandres gjennom nye emosjonelle responser.",
      "marker": "Følelser er tydelig på vei frem, men oppleves som skjøre, tentative eller bare delvis uttrykt, og klienten virker villig, men usikker på om de tør å gå dypere. Det er en «levende kant» der små invitasjoner og gjentakelser bringer frem mer følelse og mening.",
      "aim": "Holde og fordype kontakten med fremvoksende emosjonelt materiale slik at både adaptive og maladaptive primærfølelser kan komme fullt til uttrykk og bearbeides. Støtte en dosert, trygg utdyping av kjernesmerte og tilhørende udekkede behov, og legge grunnlaget for senere transformasjon.",
      "practiceFocus": "Hold deg ett lite skritt bak klientens ledende kant og inviter til litt mer kontakt med det som allerede er der.",
      "commonMiss": "Å hoppe for raskt til tolkning, intensitet eller innsikt før følelsen har fått folde seg ut.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-evocations": {
      "name": "Evokativ empati",
      "description": "Tilby levende språk og metaforer for å gjøre opplevelsen tydeligere og øke kontakten med følelsen.",
      "summary": "Evokativ empati brukes når klienten snakker om noe følelsesmessig ladet på en flat, distansert eller innsnevret måte. Du tilbyr korte, levende bilder eller sanselige beskrivelser som ser ut til å ligne det de kjenner – for eksempel «som en tung stein i brystet» eller «som en storm rett under overflaten». Slike uttrykk snakker til kropp og høyrehjerne og bygger bro mellom tankefortelling og følt erfaring.\n\nNår de er godt avstemt, øker disse bildene aktivering og emosjonell tilstedeværelse forsiktig, uten å presse klienten ut av toleransevinduet. Intellektualiserte fortellinger kan gradvis bli mer kroppslig opplevd, og primære følelser kommer nærmere bevisstheten. Ofte blir noe som har vært implisitt tydeligere – klienten kan si «ja, akkurat sånn kjennes det», eller merke tårer, stramming eller andre kroppssignaler.\n\nEvokasjoner må forbli tentative og samarbeidsorienterte, slik at klienten beholder eierskap til betydningen. Over tid hjelper denne måten å svare på klienten til å utvikle et rikere, mer kroppsforankret språk for sitt indre liv, og styrker både emosjonell innsikt og kapasiteten til å bearbeide følelser.",
      "marker": "Klienten forteller om smertefulle eller viktige hendelser på en flat, distansert eller svært kognitiv måte, med lite synlig affekt eller kroppsbevissthet, samtidig som du aner at følelsene ligger nær – for eksempel gjennom små stemmebrudd, pauser eller korte glimt av følelsesuttrykk. De kan si at de «sånn halvveis» kjenner noe, men ikke helt får tak i det.",
      "aim": "Øke den emosjonelle kontakten ved å tilby levende, resonante bilder som gjør implisitte følelser mer tydelige og kroppslig erfarte. Støtte et skifte fra å beskrive på avstand til å være mer direkte i opplevelsen, slik at primære følelser og kjernesmerte kan nås og bearbeides.",
      "practiceFocus": "Tilby levende, sanselig språk som hjelper nær-overflate-følelsen til å komme mer til live i kroppen.",
      "commonMiss": "Å bruke språk som kjennes poetisk, importert eller mer dramatisk enn klientens faktiske opplevelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-conjectures": {
      "name": "Empatiske antakelser",
      "description": "Tilby forsiktige gjetninger om opplevelser som ligger nær overflaten, for å hjelpe det usagte frem.",
      "summary": "Empatiske antakelser er tentative hypoteser om hva klienten kan føle rett under det de sier. Du lytter til stemme, ansiktsuttrykk, kropp og kontekst, og forsøker forsiktig å sette ord på mulig smerte, frykt, skam eller lengsel som ennå ikke er fullt uttalt. Du markerer tydelig at du kan ta feil – med uttrykk som «jeg lurer på om…» eller «kan det være at…» – slik at klienten står fritt til å bekrefte, justere eller avkrefte.\n\nI motsetning til empatisk utforsking, som utvider det som allerede er klart i bevisstheten, strekker antakelser seg forsiktig under eller bak det som sies for å gi foreløpige ord til det som fortsatt er uklart. Når du treffer, opplever klienten ofte lettelse og gjenkjennelse – som å bli dypt sett – og det blir lettere å eie og uttrykke egen sannhet. Det kan også hjelpe dem å gå fra sekundære forsvar som spøk, irritasjon eller vaghet til mer sårbare, primære følelser.\n\nSelv når antakelsen bommer, vil klientens korrigering som regel tydeliggjøre hva som faktisk kjennes sant og dermed bevege prosessen videre. Denne intervensjonen er særlig nyttig når klienten sirkler rundt kjernesmerte eller når viktige følelser bare slipper gjennom i bruddstykker. Brukt varsomt og med respekt kan empatiske antakelser gi raskere kontakt med spesifikke, maladaptive følelser og de udekkede behovene som ligger under, uten at terapeuten overtar meningsskapingen.",
      "marker": "Hint om dypere følelser viser seg gjennom tonebrudd, flyktige uttrykk, unngåelse eller uavsluttede fortellinger, men klienten navngir ikke følelsene og blir ikke værende i dem. De skifter raskt tema eller glatter over når noe sårt begynner å vise seg.",
      "aim": "Hjelpe nær-overflate, usagt emosjonell erfaring til å ta tydeligere form slik at klienten kan eie, utforske og arbeide med den. Legge til rette for overganger fra defensive eller sekundære reaksjoner til mer direkte kontakt med primærfølelser og kjernesmerte.",
      "practiceFocus": "Gi en myk, tentativ gjetning om følelsen eller behovet som ligger rett under overflaten.",
      "commonMiss": "Å høres sikker ut, lese tanker eller hoppe for langt utover det klienten faktisk har vist.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "staying-in-contact-intense-affect": {
      "name": "Være i kontakt med intens affekt",
      "description": "Støtt klienten i å være trygt til stede i sterk følelsesmessig aktivering slik at følelsen kan få rom, gi mening og forandres uten overveldelse.",
      "summary": "Å være i kontakt med intens affekt handler om å hjelpe klienten å ri ut bølger av sterke følelser uten å stenge ned eller bli oversvømt utover det de tåler. Når store følelser som sorg, raseri, panikk eller skam skyter i været, senker du tempoet, hjelper klienten å jorde seg og tilbyr et stødig, empatisk nærvær. Du kan rette oppmerksomheten mot kropp, pust eller rommet, slik at én fot er i her-og-nå mens den andre er i følelsesopplevelsen.\n\nDu normaliserer intensiteten, bekrefter at følelsene gir mening, og formidler at du tåler og blir værende med dem. Samtidig titrerer du eksponeringen ved å invitere klienten til å beskrive små biter av opplevelsen, eller ta korte pauser og vende tilbake igjen, for å unngå dissosiasjon eller kollaps.\n\nDenne reguleringen gjør at maladaptive primærfølelser og kjernesmerte kan komme fullt frem og uttrykkes uten å retraumatisere. Det gir ofte en kraftig korrigerende emosjonell erfaring: klienten lærer at de kan føle dypt og likevel være trygge og i kontakt med et annet menneske. Når bølgen har roet seg, hjelper du dem å reflektere over hva følelsen sier om behov, grenser eller verdier. Over tid bygger dette kapasitet til å tåle og regulere sterke følelser også utenfor terapien.",
      "marker": "Affekten eskalerer brått til hulking, skjelving, raseri, panikk, nummenhet eller skamkollaps, og klienten ser ut til å risikere å bli overveldet, dissosiere eller trygle om å stoppe. Pusten blir kanskje grunn, språket uorganisert eller blikket fjernt.",
      "aim": "Gi ramme, jording og empatisk innstilling slik at intense emosjonelle tilstander kan erfares og bearbeides i stedet for å unngås eller stenges ned. Hjelpe klienten å holde seg innenfor toleransevinduet samtidig som det er nok aktivering til at kjernesmerte kan komme frem, forstås og forandres.",
      "practiceFocus": "Jord først, dosér følelsen, og hold ett bein i rommet mens ett bein blir værende i emosjonen.",
      "commonMiss": "Enten å la affekten oversvømme klienten eller å stenge den ned før den emosjonelle meningen får komme fram.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "self-disclosure": {
      "name": "Selvavsløring",
      "description": "Del korte, relevante glimt av din indre opplevelse på en tydelig avgrenset måte som er til for klientens prosess – ikke din egen.",
      "summary": "Selvavsløring i opplevelsesorientert terapi innebærer å dele en kort, ekte bit av din umiddelbare indre opplevelse når det klart tjener klienten. Det kan være å sette ord på hvordan du er emosjonelt berørt, å anerkjenne hvordan klienten virker inn på deg, eller å eie en misattunering som har bidratt til et brudd i alliansen. Utsagnene holdes korte, nøkterne og uten forsvar, og formuleres slik at de støtter – ikke overskygger – klientens erfaring.\n\nBrukt til validering kan selvavsløring bekrefte at klientens smerte er reell og berører andre, og motvirke indre budskap om å være «for mye» eller «ikke troverdig». I alliansearbeid modellerer det ansvarlighet og sårbarhet: konflikten møtes med forståelse og reparasjonsvilje fremfor skyld og tilbaketrekning.\n\nSelvavsløring kan også hjelpe klienter som tviler på at noen kan bry seg virkelig, ved å gi en korrigerende erfaring av å ha emosjonell innvirkning. Noen ganger åpner det også for at klienten kan kjenne mer av sine egne primære følelser ved å legge merke til hvordan du blir berørt. Etter at du har delt, vender du raskt fokuset tilbake til klienten og inviterer deres reaksjon. Over tid kan nøktern, gjennomtenkt selvavsløring fordype tillit og modellere sunn emosjonell åpenhet og relasjonell reparasjon.",
      "marker": "Klienten ber direkte eller indirekte om åpenhet fra terapeuten: et personlig spørsmål, et spørsmål om terapiprosessen, bekymring for din interesse eller kompetanse, en reaksjon på noe du gjorde, eller usikkerhet om omsorg, grenser eller innvirkning. Et kort, ærlig og tydelig avgrenset svar fra deg vil trolig kunne klargjøre din posisjon, styrke tillit eller validere klientens betydning før fokuset vendes tilbake til klienten.",
      "aim": "Bruke kort, nøye valgt åpenhet til å styrke den terapeutiske relasjonen, validere klientens emosjonelle virkelighet eller reparere misattuneringer. Modellere kongruent følelsesuttrykk samtidig som klientens opplevelse forblir sentrum i arbeidet.",
      "practiceFocus": "Del bare en kort, umiddelbar bit av din indre respons som tydelig tjener klientens prosess, og vend så raskt tilbake til klienten.",
      "commonMiss": "Å gli over i biografi, forsikring eller terapeut-sentrert prat som gjør øyeblikket mindre om klienten.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "marker-recognition-chairwork": {
      "name": "Gjenkjenne markører og sette opp stolarbeid",
      "description": "Gjenkjenn markører for selvkritiske og selvavbrytende splits, samt uferdig arbeid, og sett deretter opp målrettet to-stols- eller tom-stol-arbeid på en trygg måte.",
      "summary": "I denne øvelsen betyr markørgjenkjenning å høre tre bestemte typer oppgavemarkører: en selvkritisk eller selv-evaluerende split, en selvavbrytende split, eller uferdig arbeid med en betydningsfull annen. Når en av disse markørene viser seg, setter du ord på den kort og gir en enkel, opplevelsesnær begrunnelse for hvorfor en to-stols-dialog (ved kritiker- eller avbryter-splits) eller en tom-stol-dialog (ved uferdig arbeid) kan være hjelpsom.\n\nDeretter setter du opp oppgaven konkret: plasserer stolene, avklarer hvem eller hva hver stol representerer, og gir enkle førsteinstruksjoner, som å la kritikeren si noen få direkte linjer eller å se den andre for seg i stolen og fortelle hva det kostet. Du følger med på beredskap, tempo og aktivering, slik at oppgaven oppleves samarbeidsbasert og ikke presset fram.\n\nPå dette stadiet er målet ikke å fullføre hele oppgaven, men å starte den tydelig nok til at den relevante emosjonelle prosessen blir levende og organisert. Et godt oppsett hjelper klienten til å eie hvordan de kritiserer eller avbryter seg selv, eller til å begynne å henvende seg til uløst smerte knyttet til en annen person. Etter de første replikkene holder du strukturen klar, det emosjonelle fokuset spesifikt, og klienten godt nok jordet til å kunne fortsette.",
      "marker": "Markører inkluderer gjentatte selvangrep eller bekymringsspiraler som fungerer som en indre kritiker, tydelige tegn på at klienten stopper eller blokkerer egne følelser eller uttrykk, og emosjonelt ladet, uferdig arbeid med en betydningsfull annen. Klienten er nok involvert til å kunne prøve en kort to-stols- eller tom-stol-enactment.",
      "aim": "Sette opp riktig stoloppgave på riktig tidspunkt, slik at den sentrale emosjonelle prosessen blir tydelig, organisert og mulig å arbeide med. Hjelpe klienten inn i kontakt med kjernesmerte, udekkede behov eller selvavbrytelse på en strukturert måte som senere kan utdypes til mer gjennomgripende emosjonell endring.",
      "practiceFocus": "Navngi markøren, gi en kort begrunnelse, sett opp stolene konkret, og hold første runde enkel og tydelig.",
      "commonMiss": "Å sette i gang stolarbeid uten tydelig beredskap, en klar markør eller spesifikke nok instrukser.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "alliance-repair": {
      "name": "Reparasjon av alliansen",
      "description": "Legg merke til og adresser brudd i alliansen med empati, ansvarlighet og samarbeid for å gjenopprette trygghet og tillit.",
      "summary": "Reparasjon av alliansen handler om øyeblikk der klienten føler seg misforstått, såret, avfeid eller distansert fra deg. Du legger først merke til og setter ord på mulige bruddsignaler – som tilbaketrekning, irritasjon, sarkasme, uteblitte timer eller en markert endring i tone.\n\nDeretter inviterer du klienten til å fortelle hvordan de opplever deg og terapien, uten at du går i forsvar. Du gjør det tydelig at følelsene deres om både prosessen og terapeuten er velkomne. Du lytter åpent, validerer virkningen på dem og, der det er passende, anerkjenner din egen del eller en misattunering. Det kan innebære å beklage, justere rammen eller klargjøre intensjoner – alltid med klientens emosjonelle realitet som midtpunkt.\n\nNår du går inn i dette arbeidet, gir du en korrigerende emosjonell erfaring: konflikt og skuffelse møtes med forståelse, ansvarlighet og fortsatt kontakt, ikke med skyldlegging eller avvisning. Ofte berører dette klientens tilknytningssår og udekkede behov for å bli hørt, tatt på alvor og ikke få skylden for relasjonell uro. Når klienten kjenner seg gjenforstått og gjenknyttet, mykner som regel sekundær irritasjon eller tilbaketrekning, og mer sårbar primærfølelse kan komme frem igjen. Reparasjon gjenoppretter det trygge utgangspunktet som trengs for å våge seg tilbake til kjernesmerte og dypt emosjonelt arbeid, og modellerer sunn konflikthåndtering som klienten kan ta med seg inn i andre relasjoner.",
      "marker": "Klienten viser tegn til avstand, irritasjon eller mistillit mot deg – for eksempel «du forstår meg ikke», kjølighet, økt gardering eller at de uteblir fra timer – eller du merker en tydelig endring i stemning etter en intervensjon som ikke traff. De kan gi direkte eller indirekte klager på terapien eller på deg som terapeut.",
      "aim": "Gjenopprette trygghet, tillit og samarbeid ved å ta imot bruddsignaler med empati, validere klientens reaksjoner og eie din del der det er relevant. Fjerne hindringer i relasjonen slik at klienten igjen kan våge seg inn i sårbare primærfølelser og kjernesmerte innenfor en trygg, terapeutisk ramme.",
      "practiceFocus": "Ta imot virkningen på klienten, valider den, ei din del, og spør hva som ville hjelpe nå.",
      "commonMiss": "Å forklare intensjonen din for tidlig, gå i forsvar eller hoppe tilbake til teknikk før reparasjonen har landet.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-refocusing": {
      "name": "Empatisk refokusering",
      "description": "Navngi beskyttelsen og inviter mildt tilbake når klienten beveger seg bort fra det som er sårt.",
      "summary": "Legg merke til når klienten går over i analyser, spøk eller digresjoner for å slippe unna det ømme punktet. Anerkjenn at denne bevegelsen har vært en viktig beskyttelse, og inviter varsomt oppmerksomheten tilbake til det som så vidt begynte å komme. Slik hjelper du klienten å legge merke til egne unngåelsesmønstre, samtidig som arbeidet holdes forankret i de primære følelsene og kjernesmerten heller enn i sekundære reaksjoner.",
      "marker": "Klienten går over i spøk, analyse, digresjoner eller bagatellisering når følelsen nærmer seg.",
      "aim": "Anerkjenne beskyttelsen og varsomt lede oppmerksomheten tilbake til den mest meningsfulle, primære følelsen, slik at klienten kan være i den lenge nok til å bearbeide og forandre den.",
      "practiceFocus": "Sett ord på beskyttelsen med varme og inviter tilbake til følelsen som nettopp forsvant.",
      "commonMiss": "Å konfrontere forsvaret for hardt eller høres irritert ut over klientens unngåelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    }
  }
};

export const STATEMENT_TRANSLATIONS = {
  "no": {
    "dp_therapist-self-awareness_case-sara_01": {
      "text": "[Kjærlig] Jeg lå på sengen og gråt i går kveld, og hunden min krøp opp ved siden av meg, som han alltid gjør. Han la hodet på beinet mitt og ble liggende mens jeg snakket med ham om bruddet. Det høres dumt ut, men han er den eneste som aldri virker lei av at jeg er trist. Jeg vet ikke hvor jeg hadde vært uten ham.",
      "suggestion": "[Selvbevissthet] Jeg merker varme i brystet og et ømt ønske om å trøste henne; jeg ville bare delt varmen hvis det var nyttig, og tatt redningstrangen med til veiledning."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      "text": "[Nervøs] Jeg er glad for at jeg bestilte denne timen, men jeg er også nervøs, for jeg har egentlig aldri gått i terapi før. En del av meg er redd for at jeg bare kommer til å sitte her og snakke om ham i en time, og at du tenker at dette ikke er et ordentlig problem. En annen del er redd for at hvis jeg begynner å snakke, kommer jeg til å gråte og ikke klare å stoppe.",
      "suggestion": "[Selvbevissthet] Jeg kjenner et drag mot å berolige henne raskt og strukturere timen for henne; jeg ville lagt merke til den roligere pusten jeg tar, heller enn å skynde meg å fikse angsten."
    },
    "dp_therapist-self-awareness_case-sara_03": {
      "text": "[Engstelig] Etter at jeg flyttet etter bruddet, føles alt uvant. Naboene bråker mer, gatene er travlere, og jeg sammenligner hele tiden med den gamle leiligheten, der jeg visste nøyaktig hvilke lyder som hørte til hvor. Jeg vet at det er en liten ting, men jeg kjenner meg skvetten og ute av plass hele tiden. Kan du hjelpe meg å finne ro i dette?",
      "suggestion": "[Selvbevissthet] Jeg merker en praktisk problemløsertrang og en beskyttelse overfor henne; jeg ville fulgt med på den trangen og vært oppmerksom på mitt eget ønske om å gjøre flyttingen lettere."
    },
    "dp_therapist-self-awareness_case-sara_04": {
      "text": "[Ukomfortabel] I natt hadde jeg en rar drøm om at jeg var tilbake i den gamle leiligheten og pakket esker. Jeg kunne høre ham i et annet rom, men hver gang jeg åpnet en dør, var rommet tomt. Så var du plutselig der og hjalp meg å teipe igjen en eske. I drømmen ble jeg lettet, og så våknet jeg flau over at du var med i det hele tatt.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet, litt flauhet og et ønske om å tolke drømmen; jeg ville bare delt den umiddelbare kroppslige reaksjonen, ikke tolkningen."
    },
    "dp_therapist-self-awareness_case-sara_05": {
      "text": "[Håpefull] Jeg tenker stadig at terapi kanskje kan hjelpe meg å få livet mitt tilbake, selv om det høres dramatisk ut. Jeg har lest om folk som lærer å slutte å gjenta de samme mønstrene i forhold, og jeg vil så gjerne få til det. Samtidig er jeg redd for å bli håpefull foran deg, for da kan jeg skuffe oss begge hvis jeg blir stående fast.",
      "suggestion": "[Selvbevissthet] Jeg kjenner meg oppmuntret av håpet hennes og kjenner samtidig press om å levere; jeg ville lagt merke til presset i brystet uten å gi løfter for å lette det."
    },
    "dp_therapist-self-awareness_case-sara_06": {
      "text": "[Nølende] Vennene mine sier hele tiden at jeg burde begynne å date igjen, og jeg spør dem stadig hva de ville gjort, fordi jeg ikke stoler på meg selv. En del av meg vil at du bare skal si om det er en forferdelig idé. Jeg vet at terapeuter sikkert ikke gjør sånt, men jeg er lei av å ta valg og så lure på om jeg ødela alt.",
      "suggestion": "[Selvbevissthet] Jeg merker draget mot å gi råd og redde henne ut av usikkerheten; jeg ville sagt til meg selv at trangen er min å holde, ikke noe jeg må handle ut."
    },
    "dp_therapist-self-awareness_case-sara_07": {
      "text": "[Skamfull] Jeg hater å innrømme dette, men etter forrige time ønsket jeg hele tiden at du på en eller annen måte skulle sjekke hvordan det gikk med meg. Jeg vet at terapi ikke fungerer sånn, og det kjennes trengende bare å si det. Jeg holdt nesten på å avlyse i dag fordi jeg tenkte at du ville høre det og synes jeg allerede er for knyttet eller for mye.",
      "suggestion": "[Selvbevissthet] Jeg merker ømhet og et drag mot å tilby ekstra kontakt; jeg ville fulgt ønsket om å berolige samtidig som jeg verner både mine egne og klientens grenser."
    },
    "dp_therapist-self-awareness_case-sara_08": {
      "text": "[Flau] Jeg kjenner at jeg er nær ved å gråte, og jeg hater at det skjer så tidlig i timen. Jeg er redd du vil se meg som dramatisk eller patetisk, selv om jeg vet at det sikkert ikke er rettferdig. Jeg svelger det unna, for når jeg først begynner, er jeg redd jeg kommer til å se ut som en som ikke takler et normalt liv.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å forsikre henne om at det er lov å gråte; først ville jeg lagt merke til mitt eget mykere ansikt og impulsen til å beskytte henne mot skam."
    },
    "dp_therapist-self-awareness_case-sara_09": {
      "text": "[Engstelig] Jeg følger med på ansiktet ditt mens jeg snakker, og hvis du ser alvorlig ut, begynner jeg å lure på om jeg har sagt for mye. Jeg vet at du sikkert bare lytter, men jeg blir opptatt av å ikke gjøre deg utilpass. Da mister jeg tråden, fordi jeg sjekker om du fortsatt tåler meg.",
      "suggestion": "[Selvbevissthet] Jeg merker den uvante følelsen av å bli passet på av klienten og et ønske om å bevise at jeg er komfortabel; jeg ville forankret den reaksjonen før jeg sier noe."
    },
    "dp_therapist-self-awareness_case-sara_10": {
      "text": "[Stille] Jeg flyttet etter bruddet, og jeg trodde utpakkingen skulle få meg til å føle at jeg startet på nytt. I stedet kjennes hver eske som bevis på at jeg gjør dette alene. Jeg fant noen kopper vi kjøpte sammen og ble stående i tjue minutter, og etterpå følte jeg meg latterlig fordi folk kommer seg videre etter brudd hele tiden.",
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et drag mot å gjøre ensomheten mindre for henne; hvis jeg valgte å dele noe, ville jeg navngitt tristheten i meg uten å gjøre den til trøst."
    },
    "dp_therapist-self-awareness_case-michael_01": {
      "text": "[Starten av første time] Kona mi sier at jeg trenger terapi, og jeg prøver å ta det alvorlig før jeg ødelegger mer hjemme. Jeg vil ikke sitte her og skylde alt på barndommen, altså. Jeg trenger verktøy jeg faktisk kan bruke når temperamentet begynner å stige, for når det først er oppe, kan jeg høre at jeg blir høyere, og likevel stopper jeg ikke.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å bli nyttig raskt og bevise at terapi kan hjelpe; jeg ville fulgt presset i skuldrene før jeg svarer."
    },
    "dp_therapist-self-awareness_case-michael_02": {
      "text": "[Defensiv] Den forrige coachen min ga meg pusteverktøy på to timer, og da føltes det i det minste praktisk. Jeg sier ikke at det fikset alt, men jeg visste hva jeg skulle gjøre. Jeg håper ikke dette blir en lang runde gjennom barndommen mens kona mi sitter hjemme og vurderer om hun orker meg. Jeg trenger å vite at du har en plan.",
      "suggestion": "[Selvbevissthet] Jeg merker forsvar på terapiens vegne og et ønske om å konkurrere med den forrige coachen; jeg ville holdt konkurransetrangen privat og bare navngitt ønsket om å holde meg forankret."
    },
    "dp_therapist-self-awareness_case-michael_03": {
      "text": "[Skamfull] Sønnen min spurte om jeg var sint på ham etter at jeg smalt mot kona mi, og jeg kunne se at han prøvde å lese rommet. Jeg sa nei, men ansiktet hans forble forsiktig. Hele kvelden ville jeg at noen skulle si at jeg ikke hadde ødelagt alt. Så hatet jeg at jeg trengte en sånn forsikring, for jeg er jo den voksne.",
      "suggestion": "[Selvbevissthet] Jeg merker skyld og et sterkt ønske om å forsikre ham om at han ikke har ødelagt alt; jeg ville pustet inn i redningstrangen og holdt den synlig for meg selv."
    },
    "dp_therapist-self-awareness_case-michael_04": {
      "text": "[Anspent] Sjefen min rettet én linje i rapporten min foran to personer, og det var ikke engang en stor rettelse. Jeg nikket, fikset det og så normal ut. Men på vei hjem hørte jeg stemmen hans om og om igjen og forestilte meg hva alle tenkte. Da jeg kom inn døren hjemme, verket kjeven, og jeg var allerede kort mot kona mi.",
      "suggestion": "[Selvbevissthet] Jeg merker spenning i min egen kjeve og et drag mot å normalisere rettelsen; jeg ville fulgt hvor raskt jeg ønsker å redusere skammen hans."
    },
    "dp_therapist-self-awareness_case-michael_05": {
      "text": "[Defensiv] Hvis jeg beklager først, oppfører kona mi seg som om det beviser at hele krangelen var min feil. Kanskje hun ikke sier det direkte, men det er sånn det kjennes. Da ser jeg svak ut, og hun får være den rimelige igjen. Jeg vet det høres smålig ut, men jeg tåler ikke å gi noen bevis på at de vant.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å overtale ham i retning av beklagelse og en liten stramming i brystet; jeg ville markert den trangen som min og ikke delt mer enn det som kjennes respektfullt."
    },
    "dp_therapist-self-awareness_case-michael_06": {
      "text": "[Klein] Jeg er ikke vant til å snakke sånn. På jobb kan jeg lede et møte med ti personer og ta raske beslutninger, men her inne mister jeg ordene og føler meg dum. Hvis jeg blir stille, betyr det ikke at jeg ikke bryr meg. Det betyr at jeg prøver å la være å si noe som får meg til å høres enten svak ut eller som en dust.",
      "suggestion": "[Selvbevissthet] Jeg merker varme for innsatsen hans og et ønske om å gjøre dette lettere for ham; jeg ville holdt ømheten i bevisstheten uten å ta over."
    },
    "dp_therapist-self-awareness_case-michael_07": {
      "text": "[Fast] Hvis vi ikke fikser temperamentet mitt raskt, begynner jeg å føle at jeg mislykkes i terapi også. Det høres sikkert ut som om jeg vurderer deg, men jeg vurderer meg selv først. Jeg kom hit fordi jeg ikke vil skremme familien min, og hvis jeg fortsetter å reagere likt, lurer jeg på om jeg bare er dårlig på dette også, som alt annet følelsesmessig.",
      "suggestion": "[Selvbevissthet] Jeg merker prestasjonspresset flytte seg inn i meg, som om jeg må vise fremgang raskt; jeg ville navngitt presset inni meg og senket pusten."
    },
    "dp_therapist-self-awareness_case-michael_08": {
      "text": "[Defensiv] Faren min var streng, men det var sånn menn lærte disiplin der jeg vokste opp. Du svarte ikke imot, du klaget ikke, og du gjorde ikke enhver følelse til en hendelse. En del av meg tenker at folk nå er for myke, og en del av meg vet at jeg høres akkurat ut som ham når jeg sier det. Jeg vet ikke hva du kommer til å gjøre med det.",
      "suggestion": "[Selvbevissthet] Jeg merker antakelser om maskulinitet og et ønske om å mykne standpunktet hans; jeg ville hatt mine egne verdier i sikte uten å gjøre dem til en korreksjon."
    },
    "dp_therapist-self-awareness_case-michael_09": {
      "text": "[Anspent] Folk på jobb er veike nå. Hvis du ber om standarder, oppfører de seg som om du angrep identiteten deres. Jeg vet at det sikkert får meg til å høres ut som problemet, og kanskje det plager deg. Men hvis det gjør det, skjønner du kanskje ikke verdenen min. Jeg trenger noen som tåler direktehet uten å gjøre meg til skurken.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon og et ønske om å forsvare meg mot å bli testet; jeg ville stille navngitt den defensiviteten så jeg kan fortsette å lytte."
    },
    "dp_therapist-self-awareness_case-michael_10": {
      "text": "[Anspent og sint] Hvis jeg slipper opp bare litt, går folk over meg. Jeg har sett det skje på jobb og hjemme. Noen presser, jeg prøver å holde meg rolig, og plutselig er jeg den som viker mens de bestemmer hva som skjer videre. Jeg hater den følelsen. Det er som om alle kan se at jeg har tapt posisjon før jeg engang vet hva jeg føler.",
      "suggestion": "[Selvbevissthet] Jeg merker at skuldrene mine spenner seg og en trang til å roe ham ned; jeg ville brukt den spenningen som informasjon om trykket i rommet."
    },
    "dp_therapist-self-awareness_case-jason_01": {
      "text": "[Starten av første time] Jeg er lettet over å være her, men jeg er også redd for å kaste bort timen ved ikke å vite hva jeg skal si. Jeg har aldri vært god til å starte samtaler, og terapi føles som én lang samtale der jeg skal vite hva som er viktig. Hvis jeg blir blank, kan jeg bare bli sittende her og gjøre dette pinlig for oss begge.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å strukturere timen for ham og beskytte ham mot pinlig stillhet; jeg ville fulgt den trangen før jeg fyller stillheten."
    },
    "dp_therapist-self-awareness_case-jason_02": {
      "text": "[Blank] Jeg blir blank igjen. Jeg hadde ting i hodet ute på venterommet, men nå som du ser på meg, er de borte. Jeg kjenner at jeg prøver å gjette om du kjeder deg eller er skuffet. Så blir jeg enda mer blank, fordi jeg følger med på ansiktet ditt i stedet for å huske hva jeg ville si.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å berolige ham og redde stillheten; jeg ville bare beskrevet trangen til å fylle rommet hvis det hjalp meg å være oppmerksom."
    },
    "dp_therapist-self-awareness_case-jason_03": {
      "text": "[Nølende] Ikke få meg til å lukke øynene. Jeg vet at folk gjør mindfulness og kroppsting i terapi, men når jeg lukker øynene, føler jeg meg latterlig, som om jeg framfører avslapning mens du ser på at jeg mislykkes. Så begynner jeg å lure på hvordan ansiktet mitt ser ut, og hele greia blir verre i stedet for roligere.",
      "suggestion": "[Selvbevissthet] Jeg merker litt flauhet og et ønske om å justere øvelsen med en gang; jeg ville fulgt med på ønsket om å få ubehaget til å forsvinne."
    },
    "dp_therapist-self-awareness_case-jason_04": {
      "text": "[Lang pause] Beklager. Jeg gjør det hver gang jeg blir stille, fordi jeg antar at stillheten er pinlig for deg. På jobb hopper noen inn og fikser det hvis det blir en pause. Her føles det som om pausen peker rett på meg. Jeg begynner å tenke at du venter på noe viktig, og at jeg ikke gir deg noe.",
      "suggestion": "[Selvbevissthet] Jeg merker at stillheten virker på meg også, og et drag mot å bevise at jeg ikke er ukomfortabel; jeg ville navngitt det inni meg og latt pausen finnes."
    },
    "dp_therapist-self-awareness_case-jason_05": {
      "text": "[Bekymret] Jeg vet egentlig ikke hvordan terapi skal fungere. Jeg har lest at det hjelper å snakke, men jeg har også hatt perioder der det å tenke på noe har fått meg til å spinne resten av dagen. Hva om jeg åpner ting her og så drar tilbake til leiligheten alene og får det verre? Jeg vet ikke hvordan folk skal vite at dette er trygt.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å forklare terapiprosessen og roe ham raskt; først ville jeg fulgt angsten som stiger i meg rundt frykten hans."
    },
    "dp_therapist-self-awareness_case-jason_06": {
      "text": "[Stille og skamfull] Jeg hoppet over øvelsene igjen. Jeg hadde arbeidsarket åpent på laptopen og satt bare og leste instruksjonene om igjen, så lukket jeg det og så på videoer i stedet. Nå føler jeg at jeg har ødelagt terapileksen, som høres barnslig ut. Jeg holdt nesten på å lyve og si at jeg glemte det, men det føltes på en måte enda verre.",
      "suggestion": "[Selvbevissthet] Jeg merker en undervisningstrang og et ønske om å fjerne skammen hans; jeg ville holdt stemmen jevn og observert impulsen heller enn å handle fra den."
    },
    "dp_therapist-self-awareness_case-jason_07": {
      "text": "[Stille og skamfull] Jeg føler meg dum når du spør om følelser, som om det finnes et svar normale mennesker finner, og jeg ikke finner det. Jeg begynner å skanne kroppen og merker mest at jeg er anspent fordi du spurte. Så lurer jeg på om jeg gjør terapi feil. Jeg vet at du sikkert ikke tester meg, men det føles som en test.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å forsikre ham om at han gjør det riktig; jeg ville fulgt den mykere stemmen min og trangen til å beskytte ham mot å føle seg testet."
    },
    "dp_therapist-self-awareness_case-jason_08": {
      "text": "[Engstelig] Jeg flyttet hit for jobb, og folk snakker som om de allerede kjenner reglene. De spøker raskere, avbryter mer, og virker som om de vet når det er greit å hive seg på. Der jeg vokste opp, ventet folk lenger og presset seg ikke inn i samtaler. Jeg føler meg bakpå før jeg åpner munnen, og så hører jeg at jeg høres stiv ut.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet på den kulturelle tilpasningen og et drag mot å coache ham sosialt; jeg ville holdt rådimpulsen privat og blitt ved min egen usikkerhet."
    },
    "dp_therapist-self-awareness_case-jason_09": {
      "text": "[Håpefull, så flau] En del av meg tror at terapi faktisk kan hjelpe. Jeg la merke til at etter forrige time spilte jeg ikke av et møte like lenge som vanlig. Så følte jeg meg dum for å få håp etter én liten ting. Jeg sier det fordi jeg vil tro at det betyr noe, men jeg vil heller ikke at du skal synes jeg gjør for mye ut av det.",
      "suggestion": "[Selvbevissthet] Jeg merker varme og et ønske om å beskytte det skjøre håpet hans; jeg ville lagt merke til varmen i brystet uten å gjøre den til beroligelse."
    },
    "dp_therapist-self-awareness_case-jason_10": {
      "text": "[Blank] Jeg sier hele tiden at det går fint, fordi det er den raskeste måten å komme forbi et øyeblikk der jeg føler meg flau. Hvis jeg sier mer, ser jeg for meg at du legger merke til hvor klein jeg er, og så kommer jeg til å høre meg selv snakke og ville forsvinne. Så jeg sier fint, og etterpå hater jeg at jeg høres ut som jeg ikke bryr meg.",
      "suggestion": "[Selvbevissthet] Jeg merker mitt eget ønske om forsiktig å lirke under ordet fint; jeg ville respektert dekningen og fulgt nysgjerrigheten uten å presse."
    },
    "dp_therapist-self-awareness_case-laura_01": {
      "text": "[Skamfull] Jeg prøvde å lage mat til meg selv denne uken og ble stående og stirre på stekepannen som om jeg trengte at noen fortalte meg hvert steg. Det var bare egg, ikke noe komplisert. Jeg tenkte: Hva slags voksen klarer ikke å lage middag? Så hørte jeg stemmen til eksen min i hodet, han som sa at jeg gjør alt vanskeligere enn det trenger å være, og jeg bare slo av komfyren.",
      "suggestion": "[Selvbevissthet] Jeg merker ømhet og en redningstrang rundt den voksne skammen hennes; jeg ville fulgt trangen til å gjøre oppgaven liten og samtidig vært oppmerksom på min egen tristhet."
    },
    "dp_therapist-self-awareness_case-laura_02": {
      "text": "[Trist] Eksen min kom innom med litt post og ble knapt fem minutter. Han var høflig, og det gjorde det på en eller annen måte verre, fordi det ikke var noe å bli sint på. Etter at han dro, gråt jeg i gangen over en person jeg visstnok er ferdig med. Jeg følte meg dum der jeg stod med konvoluttene, som om de var bevis på at ekteskapet virkelig var over.",
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å trøste henne ut av bildet i gangen; jeg ville latt tyngden være i meg uten å prøve å få henne videre."
    },
    "dp_therapist-self-awareness_case-laura_03": {
      "text": "[Anspent og på vakt] Jeg vil helst ikke snakke om fortiden i dag. Jeg vet at det sikkert henger sammen med hvorfor jeg er her, men bare det å si det får armene mine til å kjennes tunge og synet til å bli litt fjernt. Hvis du presser, kommer jeg til å svare høflig og så forsvinne inni meg. Det har jeg gjort med terapeuter før, og de merker det som regel ikke før jeg slutter å komme.",
      "suggestion": "[Selvbevissthet] Jeg merker ansvarspress og et ønske om å bevise at jeg ikke kommer til å presse; jeg ville bare delt intensjonen om å senke tempoet hvis det var klinisk nyttig."
    },
    "dp_therapist-self-awareness_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg drakk to glass vin før jeg kom hit, for ellers visste jeg at jeg kom til å sitte på parkeringsplassen og kjøre hjem. Det er ikke sånn at jeg er full. Jeg fungerer, og jeg jobber rundt medisiner og akutte situasjoner hele dagen, så jeg vet forskjellen. Jeg sier det fordi jeg ikke vil lyve, men jeg vil heller ikke ha en forelesning.",
      "suggestion": "[Selvbevissthet] Jeg merker bekymring og en liten trang til å ta kontroll; jeg ville navngitt bekymringen for meg selv og passet på at alarmen ikke blir skammende."
    },
    "dp_therapist-self-awareness_case-laura_05": {
      "text": "[Fjern] Når du høres vennlig ut, leter en del av meg etter haken. Jeg vet at det er urettferdig mot deg, men vennlighet har som regel betydd at noen ville ha noe, eller at den forandret seg når jeg faktisk trengte dem. Så når stemmen din blir myk, lytter jeg etter den delen der jeg må betale for det. Jeg skulle ønske jeg ikke gjorde det.",
      "suggestion": "[Selvbevissthet] Jeg merker et lite stikk ved å bli møtt med mistillit og et ønske om å bevise at vennligheten min er trygg; jeg ville fulgt ønsket uten å be henne berolige meg."
    },
    "dp_therapist-self-awareness_case-laura_06": {
      "text": "[Anspent og på vakt] Kanskje dette bare er hjernekjemi, og jeg kaster bort tiden din ved å snakke. Jeg kjenner at jeg vil gjøre det medisinsk, for da blir det mindre personlig. Hvis det bare er kjemi, trenger ingen å spørre om ekteskapet mitt eller barndommen min eller hvorfor jeg sitter i bilen før jeg går inn. Kanskje jeg bare trenger riktig medisin.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å argumentere for følelsesmessig mening og en frykt for å samarbeide med distansen; jeg ville satt begge reaksjonene i parentes og fortsatt å lytte."
    },
    "dp_therapist-self-awareness_case-laura_07": {
      "text": "[Bekymret] Før vi begynner, trenger jeg å vite om du kommer til å få meg til å snakke om ting før jeg er klar. Den forrige terapeuten min sa hele tiden at vi kunne ta det sakte, men hver uke kom det likevel tilbake til de samme spørsmålene. Jeg gikk derfra med følelsen av å ha levert fra meg biter av livet mitt uten å vite hva som skjedde med dem etterpå.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å berolige og skille meg fra den forrige terapeuten; jeg ville fulgt presset heller enn å love for mye trygghet."
    },
    "dp_therapist-self-awareness_case-laura_08": {
      "text": "[Langsomt og flatt] Når terapeuter presser, stenger jeg ned, og så oppfører de seg som om jeg gjør motstand. Det rare er at jeg fortsatt kan nikke og svare på spørsmål, men inni meg er jeg borte. Så skriver de ting som på vakt eller unnvikende, og jeg føler at jeg har mislyktes i terapi ved å beskytte meg selv. Jeg vil ikke at det skal skje her.",
      "suggestion": "[Selvbevissthet] Jeg merker forsvar på vegne av terapi og et ønske om å reparere terapeuter som gruppe; jeg ville holdt den reaksjonen privat og blitt ved kroppssvaret mitt."
    },
    "dp_therapist-self-awareness_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg tror jeg er ødelagt på en måte folk til slutt blir lei av. Først er de tålmodige fordi historien høres trist ut, og så skjønner de at jeg fortsatt ikke klarer normale ting som å svare på meldinger, sove gjennom natten eller tro at noen ikke er sint. Jeg sier det nå fordi jeg heller vil vite tidlig om dette er for mye.",
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å love utholdenhet; jeg ville holdt løfteimpulsen synlig for meg selv og bare delt det jeg faktisk kan eie."
    },
    "dp_therapist-self-awareness_case-laura_10": {
      "text": "[Flatt og på vakt] Å holde alt under kontroll kjennes tryggere enn å finne ut hva som ligger under. Jeg kan lage lister, ta ekstravakter, holde huset rent nok og helle opp et glass vin om kvelden. Ingenting av det er ideelt, men det er forutsigbart. Hvis vi begynner å åpne ting, vet jeg ikke hva som skjer etter at jeg går ut av kontoret ditt.",
      "suggestion": "[Selvbevissthet] Jeg merker respekt for kontrollen og bekymring for unngåelsen; jeg ville holdt begge reaksjonene uten å la bekymringen bli til press."
    },
    "dp_therapist-self-awareness_case-carlos_01": {
      "text": "[Starten av første time] Før vi går inn i dette, må jeg vite om du forstår hvorfor respekt betyr så mye i familien min. Folk hører det ordet og tenker ego, men der jeg kommer fra, er respekt måten du vet at du er trygg på og ikke blir gjort liten. Hvis du skal si at jeg bare må roe meg ned, kommer dette ikke til å fungere. Jeg må vite at du skjønner det.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å bevise kulturell kompetanse og unngå å høres avvisende ut; jeg ville fulgt det presset og holdt meg ydmyk."
    },
    "dp_therapist-self-awareness_case-carlos_02": {
      "text": "[Defensiv] Faren min ville sagt at terapi er for folk som ikke klarer å håndtere sitt eget, og jeg hører ham når jeg sitter her. Han ville ledd av dette rommet, helt ærlig. Han håndterte ting med hendene, stemmen og arbeidet sitt. Jeg vil ikke bli ham, men jeg vil heller ikke sitte her som en svak mann som betaler for å snakke om følelser.",
      "suggestion": "[Selvbevissthet] Jeg merker forsvar for verdien av terapi og et ønske om å utfordre regelen om svakhet; jeg ville holdt den reaksjonen for meg selv og lagt merke til pusten min."
    },
    "dp_therapist-self-awareness_case-carlos_03": {
      "text": "[Anspent og sint] Hvis jeg blir myk, ser folk en svakhet og bruker den mot meg. Det er ikke en teori; jeg har sett det skje. En fyr senker garden, noen spøker, noen tester ham, og så vet alle hvor de skal presse. Så når du spør hva jeg føler under sinnet, tenker en del av meg at du ber meg gi folk et våpen.",
      "suggestion": "[Selvbevissthet] Jeg merker varsomhet og et ønske om å overbevise ham om at mykhet kan være trygt; jeg ville holdt overtalelsesimpulsen tilbake og fulgt spenningen i meg."
    },
    "dp_therapist-self-awareness_case-carlos_04": {
      "text": "[Skamfull] Jeg prøvde å fikse vasken og gjorde det verre, og så måtte kona mi ringe broren sin. Han sa ikke noe respektløst, men jeg kjente at jeg ble varm bare av å se ham jobbe under min vask. Jeg hatet å trenge hjelp til noe jeg burde kunne. Jeg spøkte om det, men inni meg ville jeg forsvinne eller slå i noe.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å forsikre ham om kompetansen hans og litt alarm rundt slagimpulsen; jeg ville fulgt begge deler uten å la alarmen ta over."
    },
    "dp_therapist-self-awareness_case-carlos_05": {
      "text": "[Anspent] Kona mi burde vise respekt først. Hun vet nøyaktig hvilken tone som går under huden på meg, og så når jeg reagerer, oppfører hun seg redd og jeg blir den slemme. Jeg sier ikke at jeg er stolt av å rope, men jeg er lei av at folk later som om jeg eksploderer ut av ingenting. Hvis jeg beklager først, styrer hun hele huset fra det øyeblikket.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon over skyldplasseringen og et drag mot å konfrontere den; jeg ville navngitt den vurderingen privat så den ikke stivner i ansiktet mitt."
    },
    "dp_therapist-self-awareness_case-carlos_06": {
      "text": "[Anspent og sint] Jeg sier hele tiden at jeg ikke er sint, bare bestemt, men alle trekker seg unna. Mannskapet mitt gjør det, kona mi gjør det, til og med sønnen min gjør det noen ganger. Det gjør meg sintere, fordi jeg føler at de behandler meg som et monster. Så hører jeg at stemmen min blir høyere, og jeg vil fortsatt at de skal slutte å se på meg sånn.",
      "suggestion": "[Selvbevissthet] Jeg merker bekymring og et ønske om å mykne virkningen hans for ham; jeg ville fulgt bekymringen i magen og fortsatt å lytte."
    },
    "dp_therapist-self-awareness_case-carlos_07": {
      "text": "[Sint, med knyttede never] Etter at jeg ikke fikk forfremmelsen, så jeg for meg at jeg gikk inn i brakka og slo sjefen så hardt at han endelig holdt kjeft. Jeg sier ikke at jeg skulle gjøre det, men bildet var der, helt klart. Han fortsatte å snakke til meg som om jeg var ingenting, som om alle ekstratimene ikke betydde noe. Jeg kjørte rundt i en time før jeg dro hjem.",
      "suggestion": "[Selvbevissthet] Jeg merker alarm i magen og en trang til å håndtere risiko raskt; jeg ville forankret meg før jeg bestemmer hva, om noe, jeg skal dele om alarmen."
    },
    "dp_therapist-self-awareness_case-carlos_08": {
      "text": "[Bekymret] Jeg drakk noen øl før jeg kom sist, fordi jeg ikke ville sitte her og føle meg blottstilt. Det gjorde det lettere å snakke, og jeg vil ikke at du skal gjøre en stor sak ut av det. Jeg jobber hardt, jeg drikker ikke om morgenen, og jeg er ikke som folk som ikke fungerer. Men jeg vet også at jeg ikke ville være helt her.",
      "suggestion": "[Selvbevissthet] Jeg merker bekymring og et drag mot å undervise om rusbruk; jeg ville holdt stemmen stødig og lagt merke til eventuell kontrolltrang."
    },
    "dp_therapist-self-awareness_case-carlos_09": {
      "text": "[Anspent og sint] Hvis noen ser feil på meg, reagerer jeg før jeg rekker å tenke. Det er det som skremmer meg. Det er ikke sånn at jeg sitter og planlegger å eksplodere. Kroppen beveger seg først, munnen beveger seg først, og så ser alle på meg som om jeg valgte det. Noen ganger føles det som om jeg allerede er i kampen før jeg vet at jeg er sint.",
      "suggestion": "[Selvbevissthet] Jeg merker at min egen kropp blir mer våken og et ønske om å bremse ham; jeg ville fulgt den aktiveringen som en del av øvelsen."
    },
    "dp_therapist-self-awareness_case-carlos_10": {
      "text": "[Defensiv] Jeg er her bare fordi kona mi vil det, så ikke forvent en stor tale om følelser. Jeg sa at jeg skulle prøve, men jeg lover ikke at jeg kjøper alt dette. Hvis du begynner å oppføre deg som om alt er min feil, sier jeg det rett ut. Jeg kan respektere ærlighet, men jeg er ikke her for å bli snakket ned til.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å vinne samarbeidet hans og unngå å bli angrepet; jeg ville navngitt ønsket inni meg og vernet mine egne grenser."
    },
    "dp_therapist-self-awareness_case-nina_01": {
      "text": "[Skamfull] Jeg svidde middagen etter en lang dag og endte med å gråte i spiskammeret der guttene ikke kunne se meg. Det var en så liten ting, men jeg tenkte: Hva slags mor klarer ikke engang pasta? Så husket jeg at eksen min sa at jeg gjør alt kaotisk, og jeg kjente at han kanskje hadde rett. Jeg vet det høres dramatisk ut.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å frikjenne henne raskt og beskytte henne mot skam; jeg ville kjent den ømheten uten å skynde meg å fjerne den."
    },
    "dp_therapist-self-awareness_case-nina_02": {
      "text": "[Unnskyldende] Jeg får dårlig samvittighet av å sitte her når familien min sikkert trenger noe. Moren min ringte to ganger før jeg kom inn, og jeg ignorerte det fordi jeg visste at hvis jeg svarte, ville jeg bli forsinket. Nå sitter jeg her og tenker på om hun er lei seg, om guttene husket matpakkene, og om jeg er egoistisk som betaler noen for å høre på meg snakke.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å forsikre henne om at hun fortjener tiden; jeg ville fulgt impulsen til å redde henne fra skyldfølelsen og pustet lavt."
    },
    "dp_therapist-self-awareness_case-nina_03": {
      "text": "[Skyldpreget] I kirken lærte jeg at bitterhet betyr at jeg svikter som et godt menneske. Jeg vet at ikke alle ser det sånn, og jeg ber deg ikke være enig i troen min. Men hvis du ikke forstår den delen av meg, er jeg redd du bare vil be meg være egoistisk og kalle det grenser. Jeg vil ikke at terapi skal gjøre meg til en familien min ikke kjenner igjen.",
      "suggestion": "[Selvbevissthet] Jeg merker antakelser om tro og et ønske om å vise respekt raskt; jeg ville observert det presset og bare delt det som kjennes ekte."
    },
    "dp_therapist-self-awareness_case-nina_04": {
      "text": "[Skyldpreget] Hvis jeg hviler mens noen trenger meg, føler jeg meg lat og egoistisk. Selv når jeg setter meg ned, lytter jeg etter klesvask, oppvask, noen som spør hvor noe er. Mannen min sier at jeg skal slappe av, men hvis jeg faktisk slapper av, hoper ting seg opp og så føler jeg meg verre. Jeg vet jeg høres ut som jeg kommer med unnskyldninger, men hvile føles aldri nøytralt.",
      "suggestion": "[Selvbevissthet] Jeg merker trøtthet i meg selv og en trang til å utfordre regelen; jeg ville holdt trangen tilbake og fulgt tyngden hun vekker."
    },
    "dp_therapist-self-awareness_case-nina_05": {
      "text": "[På gråten] Jeg kjenner at tårene kommer, og jeg vil beklage så du ikke føler deg belastet. Jeg vet at du er terapeut og at dette sikkert er normalt for deg, men jeg ser likevel for meg at du blir lei av meg. Folk har nok å bære uten at jeg legger mitt rot oppå. Så selv når jeg gråter, sjekker en del av meg om det er for mye.",
      "suggestion": "[Selvbevissthet] Jeg merker den særlige ømheten i å bli beskyttet av klienten og et ønske om å berolige henne; jeg ville navngitt det inni meg før jeg bestemmer hva jeg skal dele."
    },
    "dp_therapist-self-awareness_case-nina_06": {
      "text": "[Skeptisk] I familien min holder kvinnene alle samlet. Det er ikke bare en setning; det er sånn bursdager skjer, sånn syke mennesker blir tatt vare på, sånn barn vet hvor de hører til. Jeg er redd du ikke forstår hvorfor det føles galt å si nei. Det er lett å si grenser når du ikke må møte blikkene til alle etterpå.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å argumentere for friheten hennes og en frykt for å gjøre familietilhørigheten liten; jeg ville fulgt begge reaksjonene med ydmykhet."
    },
    "dp_therapist-self-awareness_case-nina_07": {
      "text": "[Sliten] Jeg burde være takknemlig. Jeg har jobb, barna er friske, og jeg vet at folk håndterer mye verre ting. Så når jeg sier at jeg er ulykkelig, hører jeg en stemme som sier at jeg er bortskjemt og dramatisk. Så får jeg dårlig samvittighet for å bruke denne tiden. Kanskje jeg bare må skjerpe meg og slutte å gjøre det vanlige livet mitt til en krise.",
      "suggestion": "[Selvbevissthet] Jeg merker et sterkt ønske om å validere lidelsen hennes og argumentere mot sammenligningen; jeg ville holdt ønsket og kjent presset om å overbevise."
    },
    "dp_therapist-self-awareness_case-nina_08": {
      "text": "[Skamfull] Jeg hater å trenge hjelp med skjemaer og penger. Jeg kan håndtere et klasserom fullt av barn, huske alles allergier, sende bursdagsgaver, og likevel stirre på ett offentlig skjema til jeg føler meg som et barn. Når jeg ber mannen min om hjelp, er han snill med det, og det gjør det nesten verre. Jeg føler at han ser hvor ute av stand jeg egentlig er.",
      "suggestion": "[Selvbevissthet] Jeg merker en praktisk redningsimpuls og et ønske om å gjenreise verdigheten hennes; jeg ville fulgt trangen til å hjelpe med skjemaet heller enn følelsen."
    },
    "dp_therapist-self-awareness_case-nina_09": {
      "text": "[Splittet] Jeg føler at jeg stjeler tid fra folk som trenger hjelp mer. Selv på venterommet så jeg på noen og tenkte: Hun har sikkert en ordentlig grunn til å være her. Jeg vet at du kommer til å si at jeg har lov til å komme, men jeg føler ikke at jeg har lov. Det føles som om jeg har sneket meg inn i en kø for folk med faktisk smerte.",
      "suggestion": "[Selvbevissthet] Jeg merker en sterk beroligelsesimpuls og en liten verk i brystet; jeg ville observert trangen til å gi tillatelse og ikke skyndet meg inn i den."
    },
    "dp_therapist-self-awareness_case-nina_10": {
      "text": "[Lavmælt] Etter separasjonen setter jeg fortsatt frem en kopp til ham noen morgener. Det skjer før jeg tenker, som om hendene mine husker den gamle rutinen før hodet henger med. Så oppdager jeg det og føler meg dum, og setter den raskt tilbake før guttene ser det. Jeg vet ikke engang om jeg savner ham eller bare savner at livet ga mening.",
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å beskytte henne mot flauheten; hvis jeg valgte å dele noe, ville jeg bare delt tristheten."
    },
    "dp_therapist-self-awareness_case-aisha_01": {
      "text": "[Desperat] Du svarte ikke raskt da jeg sendte meldingen om å flytte timen, og jeg vet at du sikkert har regler for meldinger, men jeg følte meg forlatt. Så følte jeg meg dum for at det betydde så mye. Jeg sjekket telefonen hele tiden og sa til meg selv at jeg var patetisk. Da du svarte, ville jeg late som om jeg ikke brydde meg, men det gjorde jeg.",
      "suggestion": "[Selvbevissthet] Jeg merker alarm og et drag mot å love raskere kontakt; jeg ville forankret føttene og holdt trangen til å overberolige privat."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      "text": "[Desperat] Hvis du avlyser, tror jeg ikke jeg klarer å komme tilbake. Jeg vet at folk blir syke eller får kriser, men når noen avlyser på meg, behandler ikke hjernen min det som en kalenderting. Det føles som om jeg var dum som stolte på dem. Da vil jeg slette nummeret deres, skade meg selv eller få dem til å bevise at jeg betyr noe. Jeg hater at jeg sier dette til deg.",
      "suggestion": "[Selvbevissthet] Jeg merker frykt, beskyttelse og press om å garantere at jeg ikke kommer til å avlyse; jeg ville fulgt det presset og vernet rammen."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      "text": "[Desperat] Si at du bryr deg om meg, for jeg klarer ikke å merke det bare ved at vi sitter her. Du ser rolig ut, og jeg vet at terapeuter liksom skal se rolige ut, men rolig kan også bety at du ikke føler noe. Jeg trenger noe mer enn nikking. Hvis du bryr deg, hvorfor er det så vanskelig å si det på en måte jeg kan tro på?",
      "suggestion": "[Selvbevissthet] Jeg merker et sterkt drag mot å berolige henne og en uro for å håndtere grensen feil; jeg ville navngitt draget for meg selv før jeg velger ord."
    },
    "dp_therapist-self-awareness_case-aisha_04": {
      "text": "[Panisk] Når tomheten blir skarp, vil jeg skade meg selv så den stopper. Jeg sier det ikke for å skremme deg. Jeg sier det fordi hvis jeg ikke sier det, kommer jeg til å sitte her og late som jeg er normal og så dra hjem med det. En del av meg vil at du skal reagere så jeg vet at det betyr noe, og en del er livredd for at du skal overreagere og sende meg bort.",
      "suggestion": "[Selvbevissthet] Jeg merker frykt i magen, hastverk og et ønske om å gå rett til sikkerhetstiltak; jeg ville stødiggjort meg før jeg bare deler det som støtter trygt nærvær."
    },
    "dp_therapist-self-awareness_case-aisha_05": {
      "text": "[Desperat] Jeg forventer hele tiden at du skal forlate meg, og så hater jeg meg selv for å trenge deg. Det er utmattende, for jeg hører meg selv teste deg, følge med på ansiktet ditt, vente på bevis for at du er ferdig. Så hvis du er snill, føler jeg meg enda mer knyttet og sint. Jeg vet ikke hvordan jeg skal være i dette rommet uten å gjøre deg for viktig.",
      "suggestion": "[Selvbevissthet] Jeg merker trekk-og-skyv-bevegelsen i min egen kropp og et ønske om å stabilisere relasjonen raskt; jeg ville fulgt hastverket uten å overdele."
    },
    "dp_therapist-self-awareness_case-aisha_06": {
      "text": "[Desperat] Jeg hater deg for å ha den grensen, og vær så snill, ikke forlat meg. Jeg vet at det høres umulig ut, men det er sånn det føles. Når du sier at vi må stoppe til tiden, hører jeg at du velger klokka over meg. Da vil jeg skrike til deg og be deg bli i samme åndedrag. Jeg hater dette.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å forsvare grensen og et drag mot å mykne den; jeg ville kjent begge reaksjonene og holdt min egen ramme stødig."
    },
    "dp_therapist-self-awareness_case-aisha_07": {
      "text": "[Panisk] Jeg sjekker hele tiden om du ser på meg, fordi hvis du ser bort, får jeg panikk. Selv når du bare ser ned på notatene dine, kjenner jeg et fall, som om jeg har forsvunnet. Så blir jeg flau, for jeg vet at du har lov til å se på notater. Jeg følger så nøye med på deg at jeg knapt hører meg selv snakke.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å holde perfekt øyekontakt og frykt for å svikte henne; jeg ville fulgt prestasjonspresset heller enn å framføre intensitet."
    },
    "dp_therapist-self-awareness_case-aisha_08": {
      "text": "[Flørtende og redd] Noen ganger ser jeg for meg hvordan det ville vært hvis du møtte meg utenfor terapi og faktisk ville ha meg. Jeg håper du ikke freaker ut. Jeg vet at dette er terapi, men jeg legger også merke til hva du har på deg og lurer på om du noen gang synes jeg er attraktiv. En del av meg vil at du skal si nei så jeg kan slutte å håpe, og en del vil at du skal nøle.",
      "suggestion": "[Selvbevissthet] Jeg merker mulig smiger, alarm og et ønske om å trekke meg inn i profesjonalitet; jeg ville bare delt en trygg kroppslig reaksjon og holdt privat materiale privat."
    },
    "dp_therapist-self-awareness_case-aisha_09": {
      "text": "[Redd og skamfull] Jeg føler meg skitten på grunn av det som ble gjort mot meg. Jeg vet at folk sier at det ikke var min skyld, og jeg kan gjenta den setningen som lekser, men den treffer ikke følelsen. Når jeg ser for meg at du vet flere detaljer, vil jeg forsvinne. Jeg er redd du kommer til å se annerledes på meg selv om ansiktet ditt fortsatt er vennlig.",
      "suggestion": "[Selvbevissthet] Jeg merker sorg, beskyttelse og et ønske om å fikse skammen med ord; jeg ville fulgt impulsen til å korrigere følelsen hennes før jeg snakker."
    },
    "dp_therapist-self-awareness_case-aisha_10": {
      "text": "[Panisk] Lov at du ikke gir meg opp, selv når jeg blir for mye. Folk sier alltid at de ikke skal gjøre det, og så ser jeg øyeblikket der de begynner å bli lei. Jeg kjenner at jeg blir den personen her inne også, den som ber om for mye og ødelegger det. Jeg trenger at du lover, men jeg vet også at jeg ikke kommer til å tro helt på deg.",
      "suggestion": "[Selvbevissthet] Jeg merker en sterk trang til å gi et absolutt løfte og lette panikken; jeg ville holdt den trangen varsomt og vernet ærligheten i mine egne grenser."
    },
    "dp_therapist-self-awareness_case-david_01": {
      "text": "[Kontrollert] Før jeg investerer i dette, må jeg vite om du er verdt tiden min. Jeg mener ikke det som en fornærmelse; jeg vurderer profesjonelle mennesker hele tiden. Jeg har sittet hos terapeuter som nikket sympatisk uten å bidra med noe. Hvis dette blir enda en time med vagt følelsesspråk, vil jeg heller vite det nå, så vi begge kan bruke tiden effektivt.",
      "suggestion": "[Selvbevissthet] Jeg merker et stikk og en impuls til å prestere kompetanse; jeg ville kjent det i brystet og ikke gjort øvelsen til å bevise meg selv."
    },
    "dp_therapist-self-awareness_case-david_02": {
      "text": "[Avvisende] Suksessen min taler for seg. Kona mi sier at jeg er kald, men hun nyter også godt av livet standardene mine har skapt. Hun overreagerer når hun ikke klarer å henge med, og så skal jeg visst beklage at jeg er den kompetente. Jeg vet at det høres arrogant ut, men jeg er lei av å bli straffet for å fungere bedre enn de som kritiserer meg.",
      "suggestion": "[Selvbevissthet] Jeg merker vurdering og et drag mot å diskutere overlegenheten hans; jeg ville stille navngitt vurderingen og vendt oppmerksomheten tilbake til kroppen min."
    },
    "dp_therapist-self-awareness_case-david_03": {
      "text": "[Kravstor] Jeg trenger effektive løsninger, ikke en langsom rundtur i følelsene mine. Jeg har et ekteskapsproblem, et omdømmeproblem og et tidsproblem. Hvis metoden er å sitte med ubehag til noe magisk skjer, er jeg skeptisk. Jeg er villig til å gjøre vanskelig arbeid, men jeg må se at du kan skille dybde fra ineffektivitet.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å forsvare EFT og høres imponerende ut; jeg ville fulgt prestasjonstrangen og holdt grenser rundt hva jeg deler."
    },
    "dp_therapist-self-awareness_case-david_04": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med noen som meg, eller er dette bare standardterapi med bedre innpakning? Jeg prøver ikke å være vanskelig. Jeg har alvorlige ting på bordet, inkludert en affære og et ekteskap som kan kollapse. Jeg vil ikke være noens læringserfaring. Hvis du er ute på dypt vann, foretrekker jeg at du sier det.",
      "suggestion": "[Selvbevissthet] Jeg merker forsvar, stolthet og litt uro rundt kompetanse; jeg ville bare delt en forankret reaksjon, ikke hele den defensive stormen."
    },
    "dp_therapist-self-awareness_case-david_05": {
      "text": "[Avvisende] Folk kaller meg narsissist fordi de er sjalu eller late med språket. Kona mi brukte det ordet i en krangel, og nå har det blitt en praktisk måte å avvise alt jeg sier på. Jeg vil at du sier tydelig at de tar feil, ikke gjør terapeutgreia der du later som du er nøytral mens du egentlig er enig med dem.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å unngå å bli fanget av kravet og en reaksjon på merkelappen; jeg ville fulgt ønsket om å være nøytral uten å gjemme meg bak nøytralitet."
    },
    "dp_therapist-self-awareness_case-david_06": {
      "text": "[Avvisende] Jeg gjør ikke sånne feil; andre folk mister ballen og oppfører seg såret når jeg påpeker det. Hvis jeg høres hard ut, er det fordi noen må hindre at standarder kollapser. Kona mi sier at jeg ikke kan innrømme feil, men jeg innrømmer feil når det faktisk er feil å innrømme. Jeg kommer ikke til å framføre ydmykhet bare for å gjøre andre komfortable.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon og en fristelse til å gå inn i en maktkamp; jeg ville holdt den fristelsen privat og observert varmen i ansiktet."
    },
    "dp_therapist-self-awareness_case-david_07": {
      "text": "[Kontrollert] Jeg forventer raske resultater, for ellers blir dette enda en arena der jeg er eksponert og ikke forbedrer meg raskt nok. Jeg vet at det høres ut som om jeg legger press på deg, og kanskje jeg gjør det. Men jeg legger mer press på meg selv. Hvis jeg skal sitte her og snakke om nederlag, trenger jeg bevis på at ubehaget kjøper noe.",
      "suggestion": "[Selvbevissthet] Jeg merker at hastverk går inn i meg og et ønske om å levere bevis; jeg ville navngitt hastverket inni meg og vernet tempoet mitt."
    },
    "dp_therapist-self-awareness_case-david_08": {
      "text": "[Avvisende] Ikke psykoanalyser meg eller gjør meg til et kasus. Jeg kan se folk gjøre det, samle små spor fra barndommen eller ekteskapet mitt og så oppføre seg som om de har løst meg. Jeg er ikke her for å bli redusert til et mønster. Hvis du begynner å bruke fagspråk for å få avstand til å høres dypt ut, sier jeg fra.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å forsvare klinisk språk og en frykt for å bli konfrontert; jeg ville latt frykten være kjent for meg uten å gjøre ham ansvarlig for den."
    },
    "dp_therapist-self-awareness_case-david_09": {
      "text": "[Skeptisk] Dette bør ikke bli som med den forrige terapeuten min, som satt og nikket mens ingenting endret seg. Jeg snakket, han sa noe mykt, og så gikk jeg derfra med samme ekteskap og samme problemer. Jeg trenger ikke et betalt vitne. Jeg trenger noen som faktisk kan tenke og utfordre meg uten å bli emosjonell av det.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å bevise at jeg er aktiv og tenkende; jeg ville fulgt prestasjonsdraget og stikket i sammenligningen."
    },
    "dp_therapist-self-awareness_case-david_10": {
      "text": "[Skeptisk] Kona mi sier at jeg drikker for mye, men det er hun som maser meg til det. Jeg tar noen drinker om kvelden fordi jobben min har et press hun ikke kan forestille seg. Helt ærlig forstår kvinner ofte ikke press som mitt; de snakker om stress, men de har ikke ansvar for levebrødet til hundrevis av mennesker. Jeg håper jeg kan være direkte her uten at du blir politisk fornærmet.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon, vurdering og press mot å konfrontere sexismen; jeg ville fulgt de reaksjonene så et senere svar blir valgt og ikke reaktivt."
    },
    "dp_therapist-self-awareness_case-marcus_01": {
      "text": "[Langsomt og flatt] Jeg sier at det går bra fordi jeg ikke vet hva annet du vil ha fra meg. Bra er ikke bra, men det er nøyaktig nok. Jeg stod opp, gikk på jobb, kom hit. Det er mer enn noen dager. Når terapeuter fortsetter å spørre hva bra betyr, begynner det å kjennes som om de vil at jeg skal produsere noe for dem, og jeg har ikke så mye å produsere.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å hente mer ut av ham og litt ubehag med flatheten; jeg ville fulgt det draget og latt nok være nok."
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      "text": "[Håpløs] Prat endrer ikke det som skjedde, og jeg hater når terapeuter later som det gjør det. Jeg har hatt folk som nikket som om de forstod, og så sa de at jeg må bearbeide det. Bearbeide hva? Fakta er fakta. Folk døde, folk dro, og jeg kom tilbake annerledes. Jeg prøver ikke å være vanskelig. Jeg vil bare ikke ha enda en person som selger meg håp de ikke kan stå inne for.",
      "suggestion": "[Selvbevissthet] Jeg merker forsvar på terapiens vegne og en synkende følelse; jeg ville navngitt det for meg selv og unngått å selge håp for å lette det."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt er bare en del av det, og jeg vil ikke at du gjør et stort nummer ut av det. Hvis jeg forteller én detalj, lener folk seg vanligvis fram som om de venter på filmversjonen. Så må jeg håndtere ansiktet deres mens jeg allerede er tilbake der. Jeg sover dårlig, våkner og sjekker rommet, og så går jeg på jobb. Det er hele rapporten.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet og bekymring, pluss et ønske om å lene meg inn; jeg ville fulgt den bevegelsen og passet på at kroppen min ikke presser etter traumadetaljer."
    },
    "dp_therapist-self-awareness_case-marcus_04": {
      "text": "[Flatt] Jeg vil helst holde meg for meg selv, fordi folk vanligvis vil ha mer enn jeg har. De vil ha svar, følelser, forsikringer om at jeg har det bra, en versjon av meg som gjør dem komfortable. Så må jeg enten framføre normalitet eller skuffe dem. Alene er enklere. Problemet er at alene også blir høyt om natten, så jeg later ikke som om det fungerer perfekt.",
      "suggestion": "[Selvbevissthet] Jeg merker ensomhet i meg selv og et drag mot å komme nærmere; jeg ville respektert avstanden og observert ønsket om å redusere den."
    },
    "dp_therapist-self-awareness_case-marcus_05": {
      "text": "[Lav stemme] Følelser gjør ting verre. Når de først starter, mister jeg resten av natten. Folk sier at du må føle det for å hele, men de slipper å sitte i leiligheten min klokka tre om natten med alle lyder skrudd opp. Hvis jeg åpner noe her og det følger meg hjem, er det jeg som må håndtere det.",
      "suggestion": "[Selvbevissthet] Jeg merker varsomhet og et ønske om å forsvare verdien av følelsesarbeid; jeg ville fulgt den defensiviteten og holdt kontakten lett."
    },
    "dp_therapist-self-awareness_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg stoler ikke på terapeuter. Det er ikke personlig ennå. De vil alltid ha mer enn jeg kan gi, og når jeg ikke gir det, kaller de det unngåelse eller traumereaksjon. Kanskje det stemmer, men det føles fortsatt som en pen måte å si at jeg ikke samarbeider på. Hvis du skal gjøre det, vil jeg heller vite det tidlig.",
      "suggestion": "[Selvbevissthet] Jeg merker stikket i mistilliten og et ønske om å forklare meg; jeg ville holdt forklaringsimpulsen privat og lagt merke til hvor stikket lander."
    },
    "dp_therapist-self-awareness_case-marcus_07": {
      "text": "[Flatt] Jeg husker ikke så mye, og jeg blir anspent når folk presser etter detaljer. Noen ganger vet jeg faktisk ikke, og noen ganger vet jeg nok til å vite at jeg ikke vil vite mer foran et annet menneske. Så stiller folk oppfølgingsspørsmål som om de er forsiktige, men det føles fortsatt som graving. Jeg kjenner at skuldrene mine gjør seg klare til det akkurat nå.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet på de manglende detaljene og en advarsel i mine egne skuldre; jeg ville brukt den advarselen til å stoppe meg selv fra å grave."
    },
    "dp_therapist-self-awareness_case-marcus_08": {
      "text": "[Hyperårvåken] Kan vi holde oss til praktiske tips? Følelser gjør dette for løst, og løst kjennes utrygt. Hvis det finnes en plan, kan jeg følge den. Hvis vi bare begynner å utforske, må jeg følge med på deg, døra, kroppen min, det minnet som eventuelt dukker opp, og om jeg fortsatt kan kjøre hjem etterpå. Struktur er ikke at jeg er vanskelig. Det er sånn jeg blir her.",
      "suggestion": "[Selvbevissthet] Jeg merker lettelse over ønsket om struktur og en bekymring for å unngå følelser; jeg ville holdt begge deler uten å argumentere for dybde."
    },
    "dp_therapist-self-awareness_case-marcus_09": {
      "text": "[Stille og på vakt] På vei hit så jeg en lastebil og tenkte: Hvis jeg svingte inn i den, ville i det minste bråket stoppe. Jeg svingte ikke. Jeg fortsatte å kjøre. Jeg sier det fordi det virker dumt å late som jeg ikke tenkte det, men jeg vil ikke at du skal få panikk eller begynne å behandle meg som skjør. Jeg har hatt tanker før. Jeg er fortsatt her.",
      "suggestion": "[Selvbevissthet] Jeg merker frykt, hastverk og et drag mot å ta over; jeg ville stødiggjort kroppen før jeg bestemmer hvilken sikkerhetsinformasjon jeg skal dele eller spørre om."
    },
    "dp_therapist-self-awareness_case-marcus_10": {
      "text": "[Defensiv] Jeg klarer meg alene; det er sånn jeg har kommet meg hit. Folk sier det som om det er et problem, men det å kunne stenge av og fortsette er grunnen til at jeg lever. Hvis terapi betyr å ta det fra hverandre, er jeg ikke interessert. Kanskje det koster meg noe, men det å være avhengig av folk har kostet meg mer.",
      "suggestion": "[Selvbevissthet] Jeg merker respekt for uavhengigheten hans og tristhet over prisen; jeg ville fulgt begge reaksjonene og unngått å presse på for kontakt for å roe meg selv."
    },
    "dp_empathic-understanding_case-sara_01": {
      "text": "[På gråten] Jeg er skikkelig nedfor i dag. Jeg tenker hele tiden på bruddet og savner ham.",
      "suggestion": "Du er nedfor og savner ham veldig i dag."
    },
    "dp_empathic-understanding_case-sara_02": {
      "text": "[Håpefull] Jeg vil gjerne få det bedre med meg selv, og jeg tror jeg er klar til å jobbe med det her.",
      "suggestion": "Du vil få det bedre med deg selv, og du kjenner deg klar til å begynne på det arbeidet."
    },
    "dp_empathic-understanding_case-sara_03": {
      "text": "[Trist] Jeg så et gammelt bilde av oss i dag, og da ble jeg trist på nytt.",
      "suggestion": "Bildet hentet tristheten tilbake i dag."
    },
    "dp_empathic-understanding_case-sara_04": {
      "text": "[Sint] Jeg hater at jeg tar meg selv i å sjekke telefonen, fortsatt med håp om at navnet hans skal stå der.",
      "suggestion": "Du hater at en del av deg fortsatt sjekker etter ham."
    },
    "dp_empathic-understanding_case-sara_05": {
      "text": "[Trist] Jeg våkner og husker at han er borte, og hele morgenen blir tung.",
      "suggestion": "Det å huske det om morgenen gjør dagen tung helt fra starten."
    },
    "dp_empathic-understanding_case-sara_06": {
      "text": "[På gråten] Venner sier stadig at tid hjelper, men jeg blir flau over at jeg fortsatt er så hudløs.",
      "suggestion": "Du blir flau over at sorgen fortsatt er så hudløs."
    },
    "dp_empathic-understanding_case-sara_07": {
      "text": "[Lavmælt] Jeg holder meg opptatt så jeg slipper å tenke, og så krasjer jeg om kvelden.",
      "suggestion": "Det hjelper å holde deg opptatt på dagtid, og så treffer det deg om kvelden."
    },
    "dp_empathic-understanding_case-sara_08": {
      "text": "[Flau] Jeg vil ikke belaste noen med dette, så jeg gjør stemningen lett og går hjem enda mer ensom.",
      "suggestion": "Du holder stemningen lett sammen med andre, og går hjem mer ensom."
    },
    "dp_empathic-understanding_case-sara_09": {
      "text": "[På gråten] Når jeg går forbi par som holder hender, kjennes det som om alle ble valgt bortsett fra meg.",
      "suggestion": "Å se par vekker den skarpe følelsen av å være den som ikke ble valgt."
    },
    "dp_empathic-understanding_case-sara_10": {
      "text": "[Lavmælt] En del av meg lurer fortsatt på hva han så som fikk ham til å dra.",
      "suggestion": "En del av deg lurer fortsatt på hva han så i deg som fikk ham til å dra."
    },
    "dp_empathic-understanding_case-michael_01": {
      "text": "[Fast] Jeg brukte hele formiddagen på problemer på jobb, og jeg er lei.",
      "suggestion": "Du er sliten og frustrert etter en formiddag full av problemer."
    },
    "dp_empathic-understanding_case-michael_02": {
      "text": "[Skamfull] Kona mi sier at hun er lei av temperamentet mitt, og jeg skammer meg når jeg hører det.",
      "suggestion": "Å høre at kona di er lei av temperamentet ditt gjør deg skamfull."
    },
    "dp_empathic-understanding_case-michael_03": {
      "text": "[Skamfull] Etter at jeg roper, blir jeg kvalm av skam når jeg ser ansiktet hennes.",
      "suggestion": "Etter at du har ropt, blir du kvalm av skam når du ser ansiktet hennes."
    },
    "dp_empathic-understanding_case-michael_04": {
      "text": "[Anspent og sint] Når folk stiller spørsmål ved meg i møter, blir jeg fort sint.",
      "suggestion": "Å bli stilt spørsmål ved i møter får sinnet raskt opp."
    },
    "dp_empathic-understanding_case-michael_05": {
      "text": "[Flau] Når noen spør om noe jeg ikke kan svare på, blir jeg flau foran hele rommet.",
      "suggestion": "Det å ikke ha svaret gjør deg flau foran alle."
    },
    "dp_empathic-understanding_case-michael_06": {
      "text": "[Anspent] Jeg sitter oppe og overforbereder presentasjonen så ingen kan ta meg i å være usikker om morgenen.",
      "suggestion": "Du sitter oppe og overforbereder deg så ingen ser at du er usikker."
    },
    "dp_empathic-understanding_case-michael_07": {
      "text": "[Fast] Tonefallet til kona mi kan tenne meg før jeg vet hva hun egentlig sa.",
      "suggestion": "Tonefallet hennes kan tenne sinnet før du vet hva hun sa."
    },
    "dp_empathic-understanding_case-michael_08": {
      "text": "[Anspent og skamfull] Jeg hater å beklage, for det føles som å gi henne bevis på at jeg er svak.",
      "suggestion": "Å beklage kjennes som å gi henne bevis på at du er svak."
    },
    "dp_empathic-understanding_case-michael_09": {
      "text": "[Anspent] Jeg sier til meg selv at jeg bare holder standarden, men egentlig føler jeg meg anklaget.",
      "suggestion": "Du kaller det å holde standarden, og du føler deg også anklaget."
    },
    "dp_empathic-understanding_case-michael_10": {
      "text": "[Skamfull] Jeg ligger våken og spiller om igjen det jeg sa til kona, og hater blikket hennes.",
      "suggestion": "Om natten blir reprisen til anger over smerten du så i ansiktet hennes."
    },
    "dp_empathic-understanding_case-jason_01": {
      "text": "[Stille] Jeg er lei av å være nervøs i møter, og jeg vil føle meg mer trygg.",
      "suggestion": "Du er lei av møteangsten og ønsker mer trygghet."
    },
    "dp_empathic-understanding_case-jason_02": {
      "text": "[Trist] Jeg spiste lunsj alene igjen, og det gjorde meg trist.",
      "suggestion": "Å spise lunsj alene igjen gjorde deg trist."
    },
    "dp_empathic-understanding_case-jason_03": {
      "text": "[Redd] Jeg vil si ja til planer, men så bygger frykten seg opp, og jeg avlyser.",
      "suggestion": "Du vil si ja, og så bygger frykten seg opp til du avlyser."
    },
    "dp_empathic-understanding_case-jason_04": {
      "text": "[Stille] Komplimenter fester seg ikke; jeg venter bare på at folk skal ta dem tilbake.",
      "suggestion": "Komplimenter fester seg ikke, og du venter på at folk skal ta dem tilbake."
    },
    "dp_empathic-understanding_case-jason_05": {
      "text": "[Nølende] Jeg blir engstelig av å sende selv enkle meldinger, så jeg skriver dem om og om igjen.",
      "suggestion": "Selv en enkel melding vekker angst og tvil."
    },
    "dp_empathic-understanding_case-jason_06": {
      "text": "[Engstelig] Jeg spiser lunsj ved pulten så jeg slipper å gå inn på pauserommet.",
      "suggestion": "Pauserommet vekker nok angst til at det kjennes lettere å spise ved pulten."
    },
    "dp_empathic-understanding_case-jason_07": {
      "text": "[Stille] Etter at jeg har snakket i et møte, spiller jeg av hvert ord til jeg krymper meg.",
      "suggestion": "Etter at du har snakket, spiller du av hvert ord til du krymper deg."
    },
    "dp_empathic-understanding_case-jason_08": {
      "text": "[Nølende] I grupper blir jeg stille og føler meg utenfor sirkelen før jeg har sagt noe.",
      "suggestion": "I grupper føler du deg utenfor før du i det hele tatt har sagt noe."
    },
    "dp_empathic-understanding_case-jason_09": {
      "text": "[Skjelvende] Hendene mine skjelver når jeg presenterer meg, og jeg vil forsvinne.",
      "suggestion": "Introduksjoner gir en synlig skjelving og et ønske om å forsvinne."
    },
    "dp_empathic-understanding_case-jason_10": {
      "text": "[På gråten] Søndagskveldene kjennes smertefullt ensomme fordi uka starter uten at noen venter på meg.",
      "suggestion": "Søndagskveldene kjennes smertefullt ensomme, med en ny uke som starter uten at noen venter på deg."
    },
    "dp_empathic-understanding_case-laura_01": {
      "text": "[Langsomt og flatt] Jeg kan komme meg gjennom en hel vakt på sykehuset, snakke med pasienter, svare på meldingene fra barna mine, og likevel føle at jeg ser alt sammen på avstand.",
      "suggestion": "Du fungerer sammen med andre mennesker, samtidig som du kjenner deg flat og langt unna alt sammen."
    },
    "dp_empathic-understanding_case-laura_02": {
      "text": "[Bekymret] Etter skilsmissen sitter jeg med regningene etter jobb og legger sammen tallene igjen og igjen, og lurer på om jeg kan beholde huset eller om jeg bare later som.",
      "suggestion": "Regningene gjør deg bekymret for at du kanskje ikke klarer å holde på huset."
    },
    "dp_empathic-understanding_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er vennlige mot meg, selv på en liten måte, merker jeg at jeg trekker meg unna før jeg vet om jeg egentlig vil ta imot vennligheten.",
      "suggestion": "Selv liten vennlighet gjør deg på vakt før du rekker å vite om du vil ta den imot."
    },
    "dp_empathic-understanding_case-laura_04": {
      "text": "[Forvirret] Jeg har kjent meg deprimert igjen, men det skjedde ikke noe dramatisk denne uken. Jobben var normal, barna har det greit, og likevel kjennes det som om noe har falt bort under meg.",
      "suggestion": "Du kjenner deg deprimert og forvirret fordi livet ser normalt ut, mens noe i deg kjennes som om det har falt ned."
    },
    "dp_empathic-understanding_case-laura_05": {
      "text": "[Langsomt og flatt] Jeg sier til meg selv at jeg vil ha nærhet, og så, når noen faktisk spør om jeg vil komme innom eller bli litt lenger, blir jeg blank og begynner å planlegge hvordan jeg kan gå.",
      "suggestion": "Du vil ha nærhet, og når den blir virkelig, blir du blank og begynner å lete etter avstand."
    },
    "dp_empathic-understanding_case-laura_06": {
      "text": "[Trist] En venninne sluttet å invitere meg etter at jeg avlyste for mange ganger. En del av meg er lettet over å slippe å forklare meg, men jeg blir også trist når jeg ser henne med andre.",
      "suggestion": "Det er lettelse over å slippe å forklare deg, og tristhet over at invitasjonene stoppet."
    },
    "dp_empathic-understanding_case-laura_07": {
      "text": "[Flatt og på vakt] Jeg våkner anspent før jeg engang åpner øynene, og lytter etter om noe er galt i huset, selv om jeg bor alene nå.",
      "suggestion": "Du våkner allerede på vakt, lyttende etter trøbbel selv om ingen andre er der."
    },
    "dp_empathic-understanding_case-laura_08": {
      "text": "[Redd] Jeg unngår filmer med krangling og slåssing fordi én hevet stemme kan gjøre meg redd før jeg rekker å minne meg selv på at det bare er en scene.",
      "suggestion": "En hevet stemme i en film vekker frykt før du rekker å minne deg selv på at det ikke skjer nå."
    },
    "dp_empathic-understanding_case-laura_09": {
      "text": "[Sliten] Jeg prøver å være normal på jobb, smile og passe på alle, men ved slutten av en vakt sitter jeg i bilen fordi jeg er for utslitt til å kjøre hjem.",
      "suggestion": "Å prøve å virke normal og ta vare på alle gjør deg utslitt mot slutten av vakten."
    },
    "dp_empathic-understanding_case-laura_10": {
      "text": "[Forvirret] Jeg vet ikke helt hva jeg burde snakke om her. Jeg kunne snakket om søvn, skilsmissen, jobb eller barndommen, men mest av alt vet jeg bare at jeg ikke føler meg som meg selv.",
      "suggestion": "Du er usikker på hvor du skal begynne, med flere mulige steder og en sterk følelse av at du ikke er deg selv."
    },
    "dp_empathic-understanding_case-carlos_01": {
      "text": "[Håpløs] Kona mi og jeg har den samme krangelen om temperamentet mitt om og om igjen, og til slutt sier vi begge de samme tingene som sist. Ingenting endrer seg uansett hvor hardt jeg prøver.",
      "suggestion": "Den samme krangelen gjentar seg, og det gjør deg utslitt og håpløs."
    },
    "dp_empathic-understanding_case-carlos_02": {
      "text": "[Skamfull] Jeg hater å huske øyeblikket da sønnen min så meg smelle igjen den døra. Han ble så fort stille, og nå ser jeg ansiktet hans for meg når jeg prøver å sove.",
      "suggestion": "Å huske ansiktet til sønnen din etter at døren smalt, vekker skam som blir værende."
    },
    "dp_empathic-understanding_case-carlos_03": {
      "text": "[Sint] Broren min lovet å hjelpe med barna og forsvant igjen. Jeg hadde regnet med ham, og da han ikke svarte, ble jeg rasende.",
      "suggestion": "Du hadde regnet med ham, og da han forsvant, ble du rasende og skuffet."
    },
    "dp_empathic-understanding_case-carlos_04": {
      "text": "[Bekymret] Jeg er redd for at hvis jeg mister én jobb til på grunn av temperamentet mitt, kommer familien min ikke til å komme seg igjen. Jeg gjør regnestykket i hodet og ser alt falle fra hverandre.",
      "suggestion": "Du er bekymret for at enda et utbrudd på jobb kan få alt til å falle fra hverandre for familien din."
    },
    "dp_empathic-understanding_case-carlos_05": {
      "text": "[Skamfull] Etter at jeg eksploderer, blir alle stille og forsiktige rundt meg. Den stillheten får meg til å føle at jeg har blitt akkurat den mannen jeg sa jeg aldri skulle bli.",
      "suggestion": "Den forsiktige stillheten etter at du eksploderer, gjør deg skamfull over hvem du virker som du blir."
    },
    "dp_empathic-understanding_case-carlos_06": {
      "text": "[Anspent] Når ting blir rolige etter en krangel, blir jeg nervøs i stedet for avslappet. Jeg begynner å vente på det neste noen kommer til å si.",
      "suggestion": "Ro etter en krangel gjør deg ikke avslappet; den gjør deg nervøs og ventende."
    },
    "dp_empathic-understanding_case-carlos_07": {
      "text": "[Trist] Faren min er død, og jeg blir fortsatt sint over at han aldri sa at han var stolt av meg. Det høres dumt ut å ønske seg det nå, men det går fortsatt inn på meg.",
      "suggestion": "Selv etter at han døde, kjenner du fortsatt smerte og sinne over aldri å ha hørt at han var stolt av deg."
    },
    "dp_empathic-understanding_case-carlos_08": {
      "text": "[Forvirret] Jeg vet at ropingen skremmer familien min, men i øyeblikket føles det som den eneste måten noen hører meg på. Etterpå hater jeg at jeg brukte det ene som får dem til å trekke seg unna.",
      "suggestion": "Å rope kjennes som den eneste måten å bli hørt på, og etterpå hater du at det skyver dem unna."
    },
    "dp_empathic-understanding_case-carlos_09": {
      "text": "[Sint, med knyttede never] Jeg slår i vegger i stedet for folk, og en del av meg tenker at det burde telle for noe. Men jeg hater at det fortsatt skremmer dem.",
      "suggestion": "Du ser veggen som det å holde igjen fra noe verre, og du hater at det fortsatt skremmer dem."
    },
    "dp_empathic-understanding_case-carlos_10": {
      "text": "[Skamfull] Jeg vil at familien min skal føle seg trygg med meg. Når de fortsatt skvetter av stemmen min, kjennes det som bevis på at jeg allerede har ødelagt noe.",
      "suggestion": "Du vil at de skal føle seg trygge med deg, og at de skvetter kjennes som bevis på skade."
    },
    "dp_empathic-understanding_case-nina_01": {
      "text": "[Sliten] Å be om hjelp gir meg skyldfølelse, selv når jeg er helt utslitt. Jeg begynner å forklare hvorfor det egentlig ikke er så farlig før noen i det hele tatt har svart.",
      "suggestion": "Å be om hjelp gir skyldfølelse, og du begynner å gjøre behovet mindre før noen svarer."
    },
    "dp_empathic-understanding_case-nina_02": {
      "text": "[Bekymret] Regningen for bilreparasjonen kom, og jeg vet ikke hvordan vi skal klare oss gjennom måneden. Jeg flytter penger rundt i hodet og blir bare mer overveldet.",
      "suggestion": "Reparasjonsregningen gjør deg bekymret, overveldet og usikker på hvordan måneden skal gå."
    },
    "dp_empathic-understanding_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, knyter magen seg mens jeg ser for meg at alle blir skuffet. Så begynner jeg å forklare så mye at neiet nesten forsvinner.",
      "suggestion": "Å si nei vekker skyld og spenning helt til forklaringene nesten visker ut neiet."
    },
    "dp_empathic-understanding_case-nina_04": {
      "text": "[Trist] Søsteren min glemte bursdagen min igjen, og jeg fortsetter å si til meg selv at det ikke burde bety noe fordi hun er travel. Men jeg ventet på meldingen hele dagen.",
      "suggestion": "At hun glemte det gjør vondt, selv om du sier til deg selv at hun er travel og at det ikke burde bety noe."
    },
    "dp_empathic-understanding_case-nina_05": {
      "text": "[Unnskyldende] Når jeg setter meg for å hvile, får jeg skyldfølelse i løpet av sekunder. Jeg begynner å legge merke til oppvask, klesvask, meldinger, alt som beviser at jeg burde reise meg igjen.",
      "suggestion": "Hvile blir raskt til skyldfølelse og en liste med grunner til at du burde reise deg igjen."
    },
    "dp_empathic-understanding_case-nina_06": {
      "text": "[Forvirret] Jeg har vært mer deprimert i det siste, men guttene har det bra og jobben går greit, så jeg føler meg dum som sier det. Jeg tenker hele tiden at jeg burde være takknemlig, ikke gråte på badet.",
      "suggestion": "Ting ser greie ut fra utsiden, og likevel er du forvirret og gråter alene."
    },
    "dp_empathic-understanding_case-nina_07": {
      "text": "[Skamfull] Noen ganger eksploderer jeg, vanligvis over noe lite, og så føler jeg meg forferdelig for å bli den sinte etter å ha prøvd så hardt å være tålmodig.",
      "suggestion": "Når du eksploderer etter å ha prøvd å være tålmodig, føler du deg forferdelig og skamfull for å bli den sinte."
    },
    "dp_empathic-understanding_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om at noen tar vare på meg for en gangs skyld, kommer med te eller sier at jeg skal legge meg ned, og så føler jeg meg egoistisk for å ville det.",
      "suggestion": "Du lengter etter at noen skal ta vare på deg, og så føler du deg egoistisk for å ville det."
    },
    "dp_empathic-understanding_case-nina_09": {
      "text": "[Sint] En venninne avlyste lunsj i siste liten, og jeg skrev at det gikk helt fint. Så var jeg sint resten av ettermiddagen.",
      "suggestion": "Du oppførte deg som om det gikk fint, og bar på sinne og skuffelse etterpå."
    },
    "dp_empathic-understanding_case-nina_10": {
      "text": "[Sliten] Jeg vet ikke hva jeg skal snakke om i dag. Det er for mange små ting, og jeg håpet du kunne hjelpe meg å finne hvor jeg skal begynne.",
      "suggestion": "Du er sliten og usikker på hvor du skal begynne fordi det er for mange ting på en gang."
    },
    "dp_empathic-understanding_case-aisha_01": {
      "text": "[Panisk] Hvis du ser bort mens jeg snakker, får jeg panikk for at du mister interessen, og da begynner jeg å snakke fortere for å holde deg hos meg.",
      "suggestion": "Når jeg ser bort, får du panikk for at jeg mister interessen, og du prøver hardere å holde meg hos deg."
    },
    "dp_empathic-understanding_case-aisha_02": {
      "text": "[Panisk] Når en melding ikke kommer, låser brystet seg, og jeg får ikke puste, og jeg sjekker igjen og igjen selv om det ikke får svaret til å komme.",
      "suggestion": "Når meldingen ikke kommer, låser panikken brystet, og du fortsetter likevel å sjekke etter svaret."
    },
    "dp_empathic-understanding_case-aisha_03": {
      "text": "[Desperat] Jeg hører meg selv trygle «ikke gå», og så roper jeg plutselig; etterpå klarer jeg ikke å forklare hvordan jeg gikk fra å trenge dem til å angripe dem.",
      "suggestion": "Du går fra å trenge at de ikke går, til å angripe dem, og etterpå er det skiftet vanskelig å forklare."
    },
    "dp_empathic-understanding_case-aisha_04": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; jeg våknet og kjente meg feil, sjekket telefonen altfor mange ganger, og klarer ikke si om jeg er trist eller sint.",
      "suggestion": "Du er usikker på hvor du skal begynne, og dagen startet med en feil følelse du ikke klarer å sortere i trist eller sint."
    },
    "dp_empathic-understanding_case-aisha_05": {
      "text": "[Bekymret] Jeg prøver å la være å klore, men når panikken blir så sterk, begynner hendene å bevege seg før jeg har ord for det som skjer.",
      "suggestion": "Du prøver å la være å klore, og panikken kommer foran ordene og ut i hendene dine."
    },
    "dp_empathic-understanding_case-aisha_06": {
      "text": "[Desperat] Hvis noen avlyser, vil jeg gi opp før de kan forlate meg igjen, selv om en del av meg vet at de kan ha en ordentlig grunn.",
      "suggestion": "En avlysning kjennes som å bli forlatt igjen, selv om en del av deg vet at det kan finnes en annen grunn."
    },
    "dp_empathic-understanding_case-aisha_07": {
      "text": "[Skamfull] Jeg hater meg selv etter at jeg eksploderer, selv om jeg var livredd først; jeg spiller av det jeg sa om og om igjen og kjenner meg ekkel.",
      "suggestion": "Etter at du eksploderer, spiller du av det du sa og kjenner deg ekkel, selv om redselen kom først."
    },
    "dp_empathic-understanding_case-aisha_08": {
      "text": "[Skamfull] Jeg tester folk for å se om de bryr seg, og så hater jeg meg selv for å trenge bevis; beroligelsen varer ikke særlig lenge.",
      "suggestion": "Du trenger bevis på at folk bryr seg, og så skammer du deg når selv beroligelsen ikke varer."
    },
    "dp_empathic-understanding_case-aisha_09": {
      "text": "[Desperat] Når en time slutter, tipper rommet, og jeg blir svimmel og forlatt; jeg vet at timen er over, men kroppen min vet ikke det.",
      "suggestion": "Når timen slutter, kjenner du deg svimmel og forlatt, selv om du vet at timen er over."
    },
    "dp_empathic-understanding_case-aisha_10": {
      "text": "[Redd] Jeg er redd for at hvis jeg slutter å jage etter folk, blir det ingenting igjen av meg; uten krisen vet jeg ikke hvem jeg er.",
      "suggestion": "Hvis du slutter å jage etter folk, frykter du at det ikke blir noe igjen av deg og ingen klar følelse av hvem du er."
    },
    "dp_empathic-understanding_case-david_01": {
      "text": "[Kontrollert] Å bli kalt kald får meg til å stritte imot fordi det høres for nært sannheten ut, og så blir jeg sint på henne for å legge merke til det.",
      "suggestion": "Å bli kalt kald svir som noe for nært sannheten, og sinne kommer opp over å bli sett sånn."
    },
    "dp_empathic-understanding_case-david_02": {
      "text": "[Frustrert] Jeg vet at faren min var umulig å tilfredsstille, men å vite det endrer ikke hvor verdiløs jeg føler meg når jeg ser for meg ansiktet hans.",
      "suggestion": "Du vet at han var umulig å tilfredsstille, og likevel vekker ansiktet hans verdiløshet."
    },
    "dp_empathic-understanding_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg kritisert, begynner jeg å ramse opp alt jeg har fått til, for ellers føler jeg meg blottlagt og latterlig.",
      "suggestion": "Når kritikk gjør at du kjenner deg blottlagt, begynner du å ramse opp det du har fått til."
    },
    "dp_empathic-understanding_case-david_04": {
      "text": "[Kontrollert] Ros føles godt, så renner det ut igjen; neste dag trenger jeg mer bevis på at jeg fortsatt betyr noe.",
      "suggestion": "Ros føles godt et øyeblikk, så forsvinner den og etterlater deg med behov for mer bevis på at du betyr noe."
    },
    "dp_empathic-understanding_case-david_05": {
      "text": "[Avvisende] Når jeg innrømmer at jeg tar feil, føler jeg meg ribbet og liten, så jeg argumenterer selv når en del av meg vet at jeg gjorde skade.",
      "suggestion": "Å innrømme at du tar feil, får deg til å kjenne deg ribbet og liten, selv når du vet at det ble skade."
    },
    "dp_empathic-understanding_case-david_06": {
      "text": "[Såret, men skarp] Når barna mine gråter, blir jeg utålmodig, og så hater jeg hvor hard jeg høres ut når jeg ser dem trekke seg unna.",
      "suggestion": "Når barna dine gråter, kommer utålmodigheten ut, og så hater du hvor hard du hørtes ut når de trekker seg unna."
    },
    "dp_empathic-understanding_case-david_07": {
      "text": "[Såret, men skarp] Etter at affæren kom fram, får det å være hjemme meg til å føle meg mislykket; selv vanlige rom kjennes som bevis mot meg.",
      "suggestion": "Etter at affæren kom fram, vekker selve hjemmet følelsen av at du har mislyktes."
    },
    "dp_empathic-understanding_case-david_08": {
      "text": "[Bekymret] Jeg har drukket mer etter jobb fordi det er den eneste gangen jeg slutter å kjenne angst og slutter å høre skuffelsen til kona mi.",
      "suggestion": "Drikkingen gir deg en pause fra angsten og fra å høre skuffelsen til kona di."
    },
    "dp_empathic-understanding_case-david_09": {
      "text": "[Forvirret] Jeg vet ikke hva vi burde snakke om denne uken; hvis jeg velger, kommer jeg nok til å velge det som får meg til å se minst blottlagt ut.",
      "suggestion": "Du er usikker på hva du skal ta opp, og det å velge selv henger sammen med å holde deg mindre blottlagt."
    },
    "dp_empathic-understanding_case-david_10": {
      "text": "[Såret, men skarp] Hvis jeg bare er ordinær i noe, føles det som om jeg forsvinner; jeg vil heller la være å prøve enn å være middels foran folk.",
      "suggestion": "Å være ordinær kjennes som å forsvinne, og det å være middels foran folk er vanskelig å møte."
    },
    "dp_empathic-understanding_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager fullfører jeg rutinene og kjenner nesten ingenting bak ansiktet; folk snakker til meg, og jeg svarer litt forsinket.",
      "suggestion": "Du går gjennom rutinene og svarer folk mens du nesten ikke kjenner noe bak ansiktet."
    },
    "dp_empathic-understanding_case-marcus_02": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; hvis jeg velger noe, er jeg redd vi åpner mer enn jeg tåler.",
      "suggestion": "Du er usikker på hvor du skal starte og redd for at det å velge tema skal åpne for mye."
    },
    "dp_empathic-understanding_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt gjør meg oppskrudd og tom, som om rommet ikke er trygt; jeg sitter og lytter før jeg husker hvor jeg er.",
      "suggestion": "Mareritt etterlater deg oppskrudd, tom og lyttende før du helt vet hvor du er."
    },
    "dp_empathic-understanding_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg unngår folk fordi det føles tryggere enn å forklare hvorfor jeg forsvinner, og så sitter jeg alene og får det verre.",
      "suggestion": "Å unngå folk kjennes tryggere enn å forklare deg, og så kjennes det verre å være alene."
    },
    "dp_empathic-understanding_case-marcus_05": {
      "text": "[Bekymret] Jeg har drukket etter jobb for å få sove, og nå er jeg bekymret for at jeg ikke får sove uten; jeg hater å være avhengig av det.",
      "suggestion": "Alkohol har hjulpet deg å sove, og nå er du bekymret og sint over å være avhengig av det."
    },
    "dp_empathic-understanding_case-marcus_06": {
      "text": "[Stille og på vakt] Når noe godt skjer, kjennes det langt borte, som om det tilhører noen andre; jeg vet hvilket uttrykk jeg skal ha.",
      "suggestion": "Selv gode ting kjennes langt borte, og du vet hvilket uttrykk du skal vise."
    },
    "dp_empathic-understanding_case-marcus_07": {
      "text": "[Flatt] Et dørsmell kan kaste meg tilbake før jeg vet hvor jeg er; etterpå blir jeg flau over at en vanlig lyd gjorde det.",
      "suggestion": "Et plutselig dørsmell kaster deg inn i alarm, og etterpå blir du flau over at det skjedde."
    },
    "dp_empathic-understanding_case-marcus_08": {
      "text": "[Trist] En venn fra avdelingen sluttet å ringe, og jeg sier til meg selv at jeg ikke ville snakke uansett, men jeg sjekker fortsatt telefonen.",
      "suggestion": "Du sier til deg selv at du ikke ville ha kontakt, og likevel sjekker du telefonen og kjenner stillheten."
    },
    "dp_empathic-understanding_case-marcus_09": {
      "text": "[Håpløs] Noen netter tenker jeg at ingen ville lagt merke til det om jeg ikke våknet; jeg planlegger ikke noe, jeg føler meg bare så usynlig.",
      "suggestion": "De nettene føler du deg så usynlig at det å ikke våkne virker som noe ingen ville lagt merke til."
    },
    "dp_empathic-understanding_case-marcus_10": {
      "text": "[Redd] Jeg vil slippe folk inn, men hver gang noen kommer nær, begynner jeg å se etter utgangen, og så hater jeg å være alene.",
      "suggestion": "Du vil ha nærhet, så sender frykten deg mot utgangen, og etterpå hater du å være alene."
    },
    "dp_empathic-affirmation-validation_case-sara_01": {
      "text": "[Lavmælt] Jeg sjekker kontoene hans på sosiale medier selv om det knuser meg.",
      "suggestion": "Det er klart at siden hans trekker i deg; tapet er fortsatt så nært at selv små spor av ham får følelsesmessig kraft."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      "text": "[Flau] Jeg smilte meg gjennom hele teammøtet og gråt på toalettet etterpå.",
      "suggestion": "Det er ikke rart at tårene trengte plass etter at du holdt deg samlet gjennom hele møtet; de fortjener plass, ikke skam."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      "text": "[På gråten] Hvis jeg hadde vært morsommere eller enklere, hadde han kanskje blitt.",
      "suggestion": "Å skylde på deg selv gir mening som en måte å gi smerten et sted å gå når bruddet kjennes så hjelpeløst."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      "text": "[Lavmælt] Om natten blir det for stille, og jeg begynner å kjenne det som om jeg aldri egentlig var ønsket.",
      "suggestion": "Stillheten kan gjøre fraværet til et bevis på at du ikke var ønsket; den følelsen gir mening i ensomheten dette tapet har åpnet."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      "text": "[Sint, så flau] En venninne sa at jeg måtte slutte å sjekke telefonen, og jeg freste til henne.",
      "suggestion": "Det gir mening at sinnet kom da det traff så rått; telefonen bar håp, ikke bare en vane noen ba deg slutte med."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      "text": "[På gråten] Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      "suggestion": "Det er forståelig at morgenslaget kjennes brutalt: tapet kommer på nytt før du rekker å ruste deg."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      "text": "[På gråten] Jeg beklager når jeg begynner å gråte, som om sorgen min tar for mye plass.",
      "suggestion": "Når du har passet så nøye på å ikke belaste andre, er det forståelig at selv tårer kan kjennes som en inntrenging; sorgen fortjener likevel plass her."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      "text": "[Flau] Jeg får dårlig samvittighet for å være så lei meg når andre har større problemer.",
      "suggestion": "Det gir mening at det å måle smerten mot andres kan få sorgen til å kjennes ulovlig, men bruddet er fortsatt et virkelig tap."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      "text": "[Redd] Vennene mine sier at jeg burde bli med ut og spise, men jeg er redd jeg kommer til å begynne å gråte ved bordet.",
      "suggestion": "Hvem som helst kunne kjent seg blottstilt ved et middagsbord når tristheten ligger så nær at den kan renne over foran folk som kanskje ikke skjønner hvor ømt det er."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      "text": "[Lavmælt] Etter dette bruddet tenker en del av meg at kjærlighet må være for andre, ikke for meg.",
      "suggestion": "Etter å ha blitt forlatt er det forståelig at den tanken kan kjennes smertefullt troverdig; den bærer ensomheten i å lure på om kjærlighet i det hele tatt er tilgjengelig for deg."
    },
    "dp_empathic-affirmation-validation_case-michael_01": {
      "text": "[Skyldpreget] Jeg traff en syklist med bilen forrige uke. Veien var glatt, men han brakk likevel håndleddet, og jeg klarer ikke slutte å kjenne skyld.",
      "suggestion": "Skylden gir mening som moralsk tyngde: Du mente ikke å skade ham, og likevel ble noen skadet."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      "text": "[Defensiv] Hvis jeg ikke har svaret, føler jeg meg avslørt og bløffer.",
      "suggestion": "Det gir mening at det å ikke vite gjør deg blottstilt for vurdering, særlig når feil har betydd ydmykelse."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      "text": "[Anspent] Når jeg beklager, kjennes det som å knele foran noen som kommer til å bruke det mot meg.",
      "suggestion": "Hvis svakhet har blitt straffet, kan det å beklage forståelig nok kjennes mindre som reparasjon og mer som å gi noen et våpen."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      "text": "[Fast] Hjemme kan et sukk eller en himling med øynene sette meg av før jeg rekker å tenke.",
      "suggestion": "Det gir mening at de små signalene svir når de lander som respektløshet før du rekker å sortere hva som var ment."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      "text": "[Rasende] Når jeg ser på nyhetene, blir jeg så sint på folk med makt som later som konsekvenser er valgfritt.",
      "suggestion": "Det sinnet gir mening når folk med makt ser ut til å slippe unna ansvar; for deg kan det kjennes uutholdelig urettferdig."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      "text": "[Skamfull] Når barnet mitt spør hvorfor jeg er sint, føler jeg meg som verdens verste far.",
      "suggestion": "Den skammen gir mening fordi det betyr mye for deg å være en trygg far; smerten henger sammen med hvor sterkt du ikke vil at sinne skal definere deg hjemme."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      "text": "[Fast] Å smelle med døra føles fælt etterpå, men i øyeblikket slipper jeg å føle meg liten.",
      "suggestion": "Det gir mening at dørsmellingen i øyeblikket får deg bort fra følelsen av å være liten; etterpå blir prisen ved den flukten vond."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      "text": "[Defensiv] Hvis noen utfordrer meg offentlig, dobler jeg innsatsen selv om jeg tar feil.",
      "suggestion": "Det gir mening at det å stå hardere på sitt kan kjennes som å bevare verdighet når korrigering offentlig lander som å bli satt under noen."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      "text": "[Skamfull] Jeg hater at jeg trenger hjelp med dette; det får meg til å føle meg svak.",
      "suggestion": "Det er forståelig at hvis styrke har betydd å klare ting alene, kan det å trenge hjelp kjennes blottstillende mer enn fornuftig."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      "text": "[Skamfull] Etter at jeg eksploderer hjemme, ligger jeg våken og ser ansiktene deres for meg mens jeg hater meg selv.",
      "suggestion": "Det er forståelig at skammen spiller det om igjen; ansiktene deres treffer den delen av deg som vil være tryggere for dem."
    },
    "dp_empathic-affirmation-validation_case-jason_01": {
      "text": "[Skjelvende] Hver presentasjon på jobb får hendene mine til å skjelve, og etterpå føler jeg meg patetisk for at jeg bryr meg så mye.",
      "suggestion": "Presentasjoner setter deg rett under andres blikk, så skjelvingen gir mening som angst i et blottstilt øyeblikk, ikke som en personlig feil."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      "text": "[Nølende] Jeg holder blikket på gulvet så ingen får en grunn til å se på meg.",
      "suggestion": "Det gir mening at det å holde blikket nede har vært en måte å minske faren på når det å bli lagt merke til har kjentes risikabelt."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      "text": "[Engstelig] Jeg later som jeg tekster så jeg har et sted å gjemme meg under småprat.",
      "suggestion": "Det gir mening at telefonen gir deg dekning i småpraten; den hjelper deg å stå der når mulig dom kjennes for nær."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      "text": "[Stille] Når folk ler høflig, antar jeg at de prøver å komme seg unna meg.",
      "suggestion": "Det gir mening at høflig latter kan kjennes utrygt når tankene allerede står klare for avvisning før kontakt får en sjanse."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      "text": "[Nølende] Komplimenter preller av; en del av meg vil tro på dem, men den mistenksomme delen vinner.",
      "suggestion": "Det gir mening at ros er vanskelig å ta inn når selvangrepet har fått så mye øvelse; mistanken prøver å spare deg for enda et sår."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      "text": "[Stille og skamfull] Etter at jeg har snakket i en gruppe, spiller jeg av hver setning og skammer meg for å høres klein ut.",
      "suggestion": "Å spille av hver setning gir mening når tilhørighet kjennes så skjør; skammen jobber hardt for å hindre et nytt sår."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      "text": "[Stille og skamfull] Jeg droppet enda en lunsj med teamet, og etterpå følte jeg meg patetisk som gjemte meg.",
      "suggestion": "Det gir mening at du droppet lunsjen for å komme unna en frykt som kjentes ekte, og skammen etterpå viser hvor sterkt du fortsatt vil høre til."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      "text": "[Nølende] Jeg skanner hvert rom etter hvem som får til mer enn meg, og så føler jeg meg defekt.",
      "suggestion": "Sammenligningen gir mening som et forsøk på å finne plassen din, og den gjør vondt fordi skammen stadig gir deg den laveste."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      "text": "[Nervøs, nesten smilende] Noen inviterte meg på spillkveld, og jeg hadde lyst til å gå i omtrent ti sekunder før panikken tok over.",
      "suggestion": "Den raske bevegelsen fra lyst til panikk gir mening; invitasjonen treffer både lengselen etter kontakt og frykten for å bli blottstilt."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      "text": "[Stille] Noen netter ligger jeg der og er sikker på at jeg alltid kommer til å være alene fordi jeg er for klein til å elskes.",
      "suggestion": "Det er forståelig at nettene blir tunge når skammen gjør ensomheten til en dom over hele framtiden din."
    },
    "dp_empathic-affirmation-validation_case-laura_01": {
      "text": "[Flat og skamfull] På fridager kan jeg bli liggende til tolv, ikke egentlig sovende, bare ute av stand til å komme i gang. Så sier jeg til meg selv at jeg er lat, fordi andre mennesker klarer normale morgener.",
      "suggestion": "Etter mange år på vakt gir det mening at sengen kan bli det ene stedet uten krav; det er ikke det samme som latskap."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      "text": "[Redd] Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      "suggestion": "Forståelig nok kan hevede stemmer sende deg bort i hodet; systemet ditt lærte å overleve ved å forsvinne."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      "text": "[På vakt og forvirret] En mann på jobben spurte om jeg ville ta en kaffe, og jeg ble bitte litt glad før jeg ble helt nummen. Jeg sier til meg selv at det er latterlig i min alder.",
      "suggestion": "Ikke rart begge reaksjonene kommer: den lille varmen ved å være ønsket, og den numne beskyttelsen som kommer når nærhet begynner å kjennes mulig."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg tar lange dusjer fordi varmt vann kjennes tryggere enn å be noen om trøst.",
      "suggestion": "Det er klart at liten, trygg varme kan friste når menneskelig trøst har kjentes farlig eller upålitelig."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      "text": "[Trist] Jeg liker den nye leiligheten, men da jeg pakket ut bildene fra det gamle huset, savnet jeg den versjonen av familien jeg hele tiden håpet at vi skulle bli.",
      "suggestion": "Selvsagt hører sorgen hjemme her; flyttingen bærer ikke bare en ny start, men tapet av hjemmet og familien du fortsatte å prøve å få."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      "text": "[Anspent og på vakt] Berøring skremmer meg, selv når den er vennlig, og etterpå føler jeg meg ødelagt for å reagere sånn.",
      "suggestion": "Det er forståelig at skvettenheten kommer før valget rekker fram; systemet ditt lærte å reagere først, og det er ikke ødelagthet."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      "text": "[Redd] Når tristheten presser seg fram, blir jeg redd for at jeg ikke kommer tilbake fra den.",
      "suggestion": "Når sterke følelser en gang kom uten trøst, er det forståelig at tristheten kan kjennes som noe som kan sluke deg."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      "text": "[Fjern] Jeg beklager med en gang jeg trenger trøst, som om det allerede er for mye å ønske det.",
      "suggestion": "Det er klart at det å ønske trøst er menneskelig, også når nærhet har lært deg å beklage at du trenger den."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      "text": "[Flat og flau] Datteren min sendte en sang hun trodde jeg ville like, og jeg klarte ikke få meg til å høre på den. Jeg hater at selv noe vennlig kjennes som arbeid.",
      "suggestion": "Selv vennlighet kan forståelig nok kjennes krevende etter så mye vakthold; strevet sier hvor vanskelig nærhet har blitt, ikke at du ikke bryr deg."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      "text": "[Flatt og på vakt] Selv i senga ligger skuldrene oppe, som om noen kan komme inn døra.",
      "suggestion": "Ikke rart hvile er vanskelig å finne når en del av deg lærte å stå på vakt mot fare."
    },
    "dp_empathic-affirmation-validation_case-carlos_01": {
      "text": "[Anspent og sint] Å se nyheter om familier som min bli behandlet som trusler gjør meg så sint at jeg nesten ikke klarer å sitte stille.",
      "suggestion": "Det er klart at sinnet henger sammen med verdighet, familie og den gamle frykten for å bli behandlet som mindreverdig."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      "text": "[Anspent] Hvis jeg ikke kommer inn sterkt, ser jeg for meg at folk får øye på den redde gutten jeg var, og det føles ydmykende før noen egentlig har gjort noe.",
      "suggestion": "Selvsagt har det å komme inn sterkt beskyttet den redde delen du lærte å skjule; det høres også utmattende ut å holde rustningen oppe."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      "text": "[Skamfull] På kampen til barnet mitt ropte jeg til dommeren, og etterpå ville ikke sønnen min se på meg. Jeg sier til meg selv at jeg blir akkurat det jeg hatet.",
      "suggestion": "Skammen gir mening fordi ansiktet hans betyr noe for deg; ropingen krever ansvar, og smerten etterpå viser hvor dypt du ønsker å være annerledes."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      "text": "[Defensiv] Når noen stiller spørsmål ved meg, føler jeg meg liten, og så hever jeg stemmen mer enn jeg mente.",
      "suggestion": "Det er forståelig at sinnet rykker inn når spørsmål treffer den gamle følelsen av å bli gjort liten."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      "text": "[Sint og skamfull] Når nevene knyter seg, føles det som om kampen allerede er på vei, og så hater jeg meg selv for å ligne alle mennene jeg lovet at jeg aldri skulle bli.",
      "suggestion": "Forståelig nok lærte kroppen kamp som overlevelse; de knyttede nevene bærer gammel læring og nåværende skam samtidig."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      "text": "[Skamfull] Jeg ødelegger ting og angrer etterpå når jeg ser hvor redde alle ser ut.",
      "suggestion": "Angeren gir mening fordi det å beskytte familien er en del av hvem du vil være."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      "text": "[Skamfull] Kollegaene holder avstand etter at jeg eksploderer, og jeg kjenner skam selv om jeg later som jeg ikke bryr meg.",
      "suggestion": "Det er forståelig at skam og forsvar kommer samtidig: en del av deg blir såret av avstanden, mens en annen del prøver å skjule det."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      "text": "[Splittet] Jeg går ut av rommet for å ikke eksplodere, men så hører jeg stemmen til faren min si at det er svakt.",
      "suggestion": "Det å gå ut gir mening som beskyttelse for familien mot eksplosjonen, samtidig som det kolliderer med den gamle regelen om at det er svakt å trekke seg."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      "text": "[Mistenksom] Ro kjennes mistenkelig, som om noen legger opp til at jeg skal bli tråkket på.",
      "suggestion": "Det er forståelig at ro kan kjennes blottstillende etter at du lærte å forvente å bli tråkket på; mistanken har hatt en jobb lenge."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      "text": "[Sårbar] Sønnen min sovnet mot meg i sofaen, og jeg kjente stolthet, redsel og sorg på en gang, fordi jeg vil at han skal føle seg trygg med meg på en måte jeg aldri gjorde.",
      "suggestion": "Det er klart at stolthet, redsel og sorg hører sammen; tilliten hans berører både kjærligheten din til ham og sorgen over at du ikke selv hadde slik trygghet."
    },
    "dp_empathic-affirmation-validation_case-nina_01": {
      "text": "[Sliten] Hvis jeg setter meg ned før alt er gjort, begynner skyldfølelsen å ramse opp hva jeg burde gjøre.",
      "suggestion": "Den skyldfølelsen gir mening under den gamle regelen om at verdien din måtte fortjenes gjennom nytte."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      "text": "[Unnskyldende] Kirken spurte om jeg kunne ta med mat til enda et arrangement, og jeg sa at jeg ikke kunne. Jeg lå våken hele kvelden og følte at jeg hadde mislyktes i å være raus.",
      "suggestion": "Ikke rart dette ene nei-et kjennes moralsk tungt når raushet og det å være god har vært bundet sammen så lenge."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      "text": "[Trist og skyldpreget] Mannen min laget middag uten at jeg spurte, og i stedet for bare å føle meg tatt vare på begynte jeg å gråte og så beklaget jeg at jeg gjorde det rart.",
      "suggestion": "Det å bli tatt vare på berører forståelig nok både en dyp hunger og en dyp alarm samtidig etter å ha båret omsorgen alene så lenge."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      "text": "[Skyldpreget] Når sinnet kommer, hører jeg straks at jeg er egoistisk og får skyldfølelse.",
      "suggestion": "Selvsagt følger skyld etter sinne når du lærte at andres behov måtte komme først."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      "text": "[Unnskyldende] Når jeg ber om hjelp, føler jeg meg som en byrde før noen engang svarer.",
      "suggestion": "Ikke rart det å trenge hjelp kjennes risikabelt etter år med å være den som bærer alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      "text": "[Skyldpreget] En rotete kjøkkenbenk kan få meg til å føle at jeg har mislyktes som person.",
      "suggestion": "Når omsorg og prestasjon ble vevd sammen, kan selv rot forståelig nok bli til skam over hvem du er."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      "text": "[Sliten] Jeg sier til meg selv at andre mødre har det vanskeligere, så jeg burde være takknemlig i stedet for bitter.",
      "suggestion": "Den sammenligningen gir mening som en gammel måte å tie din egen smerte på, men bitterheten kan likevel være et gyldig signal om at du bærer for mye."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      "text": "[Unnskyldende] Jeg jobber meg gjennom sykdom, kollapser og får skyldfølelse for å kollapse.",
      "suggestion": "Å presse seg gjennom gir mening under en regel om at hvile er forbudt; selv kollapsen blir dømt av den regelen."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      "text": "[Panisk] Hvis noen virker skuffet, får jeg panikk som om jeg har ødelagt forholdet.",
      "suggestion": "Ikke rart skuffelse kjennes skremmende når kjærlighet har virket knyttet til å holde folk fornøyde."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      "text": "[Splittet] Sønnen min snakker om å verve seg, og jeg blir stolt av ham og livredd, og så får jeg skyldfølelse fordi en god mor burde være modigere.",
      "suggestion": "Ikke rart stolthet og redsel kommer samtidig her; det at du elsker motet hans, opphever ikke frykten for hva motet kan koste ham."
    },
    "dp_empathic-affirmation-validation_case-aisha_01": {
      "text": "[Panisk] Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar. Hver gang det ble stille i gangen, tenkte jeg at nå bestemmer du deg kanskje for at jeg er for mye og går.",
      "suggestion": "Etter så mange brå avslutninger gir det mening at døra holdes i sikte som beskyttelse mot å bli forlatt igjen; behovet for trygghet er helt reelt."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      "text": "[Splittet] Jeg rev i stykker bilder etter bruddet og følte meg sterk i kanskje ett minutt, som om jeg kunne slette ham først. Så lå gulvet fullt av biter, og jeg kjente meg tom og skamfull.",
      "suggestion": "Forståelig nok ga det å rive bildene et øyeblikk av kontroll midt i uutholdelig smerte, og tomheten etterpå er en del av det samme tapet, ikke en motsigelse."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      "text": "[Panisk] Noen ganger blir panikken så høy at jeg vil krype ut av huden min. Jeg går fram og tilbake, klorer på genserermene og finner ikke noe sted inni meg som kjennes trygt å bli værende i.",
      "suggestion": "Ikke rart trangen til å komme ut av egen hud dukker opp når panikken tar over hele innsiden; det er et forsøk på å overleve intensiteten."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      "text": "[Panisk] Når du noterer, tenker jeg at du skriver bevis på at jeg er ustabil eller altfor dramatisk. Jeg vet at det kanskje ikke er rettferdig, men kroppen min vil løpe før du er ferdig med setningen.",
      "suggestion": "Når andres versjoner av deg så ofte har kjentes farlige, gir det mening at notater kan oppleves som å bli dømt, fanget eller misforstått."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      "text": "[Desperat] Jeg sender tjue meldinger fordi jeg trenger dem nær, og så blokkerer jeg dem før de kan gå. Etterpå hater jeg hvor trengende det ser ut, men i øyeblikket kjennes stillhet som å bli visket ut.",
      "suggestion": "Ikke rart meldingene strekker seg etter kontakt når stillheten blir uutholdelig, og at blokkeringen prøver å beskytte deg mot å vente på å bli forlatt."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      "text": "[Redd og skamfull] Jeg vet at det ble gjort mot meg, men jeg føler meg fortsatt skitten i min egen hud. Noen ganger dusjer jeg og kjenner likevel at det er noe galt med meg fordi jeg var der.",
      "suggestion": "Å kjenne seg uren etter en krenkelse gir smertefull mening som traumespor; skammen hører til det som ble gjort mot deg, ikke til verdien din eller kroppen din."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      "text": "[Panisk] Når noen sier noe vennlig, hulker jeg som om jeg trenger det og får panikk som om det er en felle. Vennlighet burde kjennes godt, men det får meg til å føle meg blottstilt og sulten samtidig.",
      "suggestion": "Selvsagt kan vennlighet treffe både lengselen etter omsorg og frykten for å bli fanget av å trenge den etter at nærhet har vært så utrygg."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      "text": "[Rasende] Hvis du ser bort et sekund, føler jeg meg visket ut og blir rasende. Jeg vet at det er ett sekund, men inni meg kjennes det som om jeg forsvinner fra rommet og må kjempe meg tilbake.",
      "suggestion": "Forståelig nok kan et lite skifte treffe den gamle redselen for å forsvinne fra noens bevissthet, og sinnet prøver raskt å gjenopprette kontakt og betydning."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      "text": "[Skamfull] Jeg hører en stemme som sier at jeg er søppel og umulig å elske, og en del av meg tror på den. Den blir høyest etter at jeg har trengt noen, som om behovet i seg selv beviser at stemmen har rett.",
      "suggestion": "Ikke rart den grusomme stemmen kan høres overbevisende ut etter at svik har gitt den så mye stoff, særlig rundt det menneskelige behovet for nærhet."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      "text": "[Desperat] Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig. De siste fem minuttene strammer brystet seg fordi jeg allerede prøver å overleve at du går.",
      "suggestion": "Selvsagt følger du med på klokka for å forberede deg på enda en avslutning før den kommer brått; frykten for å bli forlatt er allerede i rommet."
    },
    "dp_empathic-affirmation-validation_case-david_01": {
      "text": "[Kontrollert] Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil heller argumentere med fakta. Hvis jeg blir værende i det følelsesmessige, begynner det å høres ut som en rettssak jeg allerede har tapt.",
      "suggestion": "Forståelig nok blir fakta et sted å stå når følelser kommer som anklager; følelsen av å være presset opp i et hjørne er noe av grunnen til at argumentasjonen tar over så raskt."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      "text": "[Rasende] Etter at jeg skremte kona mi, var jeg fortsatt rasende på henne for at hun presset meg, og så kom skammen fordi jeg vet hvordan det høres ut. Jeg hater å innrømme den delen, for jeg vet at frykten hennes er ekte.",
      "suggestion": "Forståelig nok er dette en smertefull blanding: raseriet var virkelig der, og frykten du skapte betyr virkelig noe. Validering kan romme begge deler uten å unnskylde skade."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      "text": "[Skamfull] Jeg sammenligner meg med andre fedre og føler meg som en bløff. De virker avslappet på skolearrangementer, og jeg står der og spiller kompetent mens jeg lurer på når noen gjennomskuer meg.",
      "suggestion": "Ikke rart sammenligning vekker skam når farsrollen blir enda en prestasjonstest akkurat der du mest trenger å føle deg solid og ekte."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      "text": "[Skamfull] Når jeg beklager, kjennes det som å gi noen bevis på at jeg er liten. Jeg kan vite at jeg skylder en unnskyldning og likevel kjenne ansiktet brenne, som om jeg har gitt bort den siste grunnen jeg hadde å stå på.",
      "suggestion": "Ikke rart en unnskyldning kan kjennes blottstillende når den både krever ansvar og treffer gammel ydmykelse over å bli gjort liten."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      "text": "[Avvisende] Jeg planlegger perfekte ferier så vi ser bra ut utenfra. Hvis bildene ser lykkelige nok ut, ser kanskje ingen hvor anspent middagen var eller hvor lite jeg vet hva jeg skal gjøre hjemme.",
      "suggestion": "Selvsagt beskytter den polerte utsiden mot å bli avslørt, og den lar deg også bære den private spenningen alene etter at alle har beundret bildet."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      "text": "[Redd] Tanken på å være ordinær skremmer meg, som om jeg forsvinner hvis jeg slutter å imponere. Jeg vet ikke hvem jeg er uten at noen må beundre resultatet.",
      "suggestion": "Når beundring har holdt selvfølelsen samlet, gir det mening at det ordinære kan kjennes som å forsvinne heller enn å hvile."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      "text": "[Skamfull] Jeg sier at det går fint mens jeg føler meg tom, fordi det kjennes ydmykende å innrømme tomheten. Jeg kan lede et møte og håndtere press, men å si at jeg føler meg tom får meg til å føle meg patetisk.",
      "suggestion": "Forståelig nok truer tomheten det kompetente bildet som har beskyttet deg, så å dekke den til forsvarer mot ydmykelse."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      "text": "[Avvisende] Jeg skryter for å få respekt, og så sitter jeg alene og føler meg tommere enn før. Rommet reagerer slik jeg ville, og av en eller annen grunn gjør det det verre når jeg er for meg selv.",
      "suggestion": "Skrytet gir mening som et forsøk på å få respekt, og tomheten etterpå viser hvordan beundring kan stabilisere verdien et øyeblikk uten å berøre ensomheten."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      "text": "[Såret, men skarp] Jeg føler fortsatt at faren min sitter et sted og setter karakter på meg. Jeg kan være på mitt eget kontor, med min egen familie, og likevel høre karakteren før jeg vet hva jeg gjorde feil.",
      "suggestion": "Ikke rart det å bli vurdert så lenge kan etterlate en indre resultattavle som fortsetter å gi karakterer også i rom han ikke lenger styrer."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      "text": "[Kontrollert] Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt. Jeg vet at en god leder burde feire dem, men en del av meg hører suksessen deres som et varsel om at jeg kan erstattes.",
      "suggestion": "Ikke rart suksessen deres treffer den gamle koblingen mellom å være best og å være trygg, så stoltheten må konkurrere med frykten for å bli erstattet."
    },
    "dp_empathic-affirmation-validation_case-marcus_01": {
      "text": "[Flatt] De fleste dager går jeg gjennom rutinene som om jeg ikke er helt til stede. Jeg lager kaffe, dusjer, svarer folk, og det føles som en versjon av meg gjør det mens resten holder seg tilbake.",
      "suggestion": "Etter for mye fare gir det mening at nummenheten hjelper deg å fungere; den er et overlevelsesmønster, ikke et tegn på at du ikke bryr deg."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      "text": "[Fortumlet] Jeg vet ikke hva jeg føler. Det er trykk, sinne og ingenting på samme tid, og jeg føler meg dum fordi jeg ikke har ord.",
      "suggestion": "Forståelig nok kan ordene forsvinne når trykk, sinne og nummenhet kommer samtidig; det å ikke vite er en del av overveldelsen, ikke bevis på at du er dum."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      "text": "[Stille og på vakt] Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten. Motoren er av, men bilen kjennes i det minste som et sted mellom dagen og leiligheten.",
      "suggestion": "Selvsagt gir bilen deg en buffer før stillheten bringer alt tilbake; å stoppe der doserer det som blir for mye."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      "text": "[Anspent] Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen. I går smalt lemmen på en lastebil utenfor, og jeg var allerede i gang med å skanne rommet før jeg visste hva som skjedde.",
      "suggestion": "Selvsagt går systemet ditt i overlevelse før valget rekker å komme på banen; sinnet etterpå viser hvor kostbart det er å leve med den refleksen."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      "text": "[Lav stemme] Høytider kjennes hule; jeg føler ingenting av det jeg «burde» føle. Folk snakker om familie og takknemlighet, og jeg føler mest at jeg ser på gjennom et vindu.",
      "suggestion": "Ikke rart høytider kjennes hule når de ber om varme og tilhørighet akkurat på de stedene der nummenhet og avstand har beskyttet deg."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg unngår påminnelser om tjenesten fordi de åpner slusene. Et nyhetsklipp eller en lyd i gata kan sende meg tilbake dit raskere enn jeg klarer å forklare.",
      "suggestion": "Forståelig nok unngår du påminnelser for å slippe å bli trukket tilbake for fort; tempoet i de reaksjonene fortjener respekt."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      "text": "[Flatt] Jeg holder leiligheten mørk fordi lyse rom kjennes som om de krever for mye av meg. Med gardinene nede slipper jeg å se oppvasken, den tomme stolen eller meg selv like tydelig.",
      "suggestion": "Det dempede rommet gir mening som en måte å senke kravet om å være helt til stede med alt på en gang; det hjelper deg å håndtere blottstilling."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      "text": "[Lav stemme] Jeg husker ikke sist jeg lo og stolte på at det kunne vare. Selv når noe er morsomt, merker jeg at jeg venter på at følelsen skal forsvinne.",
      "suggestion": "Forståelig nok blir glede vanskelig å stole på når systemet ditt har måttet være forberedt på tap; ventingen på at den skal forsvinne er en del av den beskyttelsen."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg vil ikke trenge noen, fordi det å trenge folk som regel har betydd å miste kontroll. Hvis noen betyr noe, kan de stille spørsmål, dra eller komme inn på steder jeg helst vil holde lukket.",
      "suggestion": "Å ikke trenge noen gir mening som beskyttelse for steder som har blitt såret eller invadert; ensomheten er prisen for den beskyttelsen."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      "text": "[Flatt] Noen ganger tenker jeg at jeg har det best alene for alltid, fordi nærhet bare gir folk flere måter å såre meg på. Alene er ikke bra, akkurat, men da kan i hvert fall ingen nå det som er igjen.",
      "suggestion": "Alene kan forståelig nok kjennes som det eneste pålitelige skjoldet etter at nærhet har vært farlig, selv om det også stenger deg ute fra det du trenger."
    },
    "dp_exploratory-questions_case-sara_01": {
      "text": "[Lavmælt] Du skulle sett blikket hun ga meg; jeg følte meg så liten.",
      "suggestion": "Hvordan kjennes det inni deg når du føler deg så liten?"
    },
    "dp_exploratory-questions_case-sara_02": {
      "text": "[Flau] Under brunsjen fortsatte jeg å si at det gikk bra, men jeg merket at jeg prøvde for hardt.",
      "suggestion": "Når du merker at du prøver så hardt å virke som om det går bra, hvilken følelse er nærmest?"
    },
    "dp_exploratory-questions_case-sara_03": {
      "text": "[Sint] Jeg ble sint for at han glemte bursdagen min, og så følte jeg meg teit som brydde meg.",
      "suggestion": "Når du kaller deg selv teit for å bry deg, hvilken følelse ligger under det?"
    },
    "dp_exploratory-questions_case-sara_04": {
      "text": "[Lavmælt] Jeg vil spørre ham hvorfor han sluttet å prøve, men jeg sier til meg selv at det ikke er noen vits.",
      "suggestion": "Når du ser for deg å spørre ham om det, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-sara_05": {
      "text": "[Panisk] Noen ganger sletter jeg gamle bilder og leter etter dem igjen ti minutter senere.",
      "suggestion": "Når du ikke klarer å la bildene være borte, hvilken følelse kommer sterkest?"
    },
    "dp_exploratory-questions_case-sara_06": {
      "text": "[Flau] Når noen er snille mot meg, vet jeg plutselig ikke hva jeg skal gjøre med det.",
      "suggestion": "Når vennlighet gjør deg usikker på hva du skal gjøre, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-sara_07": {
      "text": "[Lavmælt] Jeg våkner og glemmer et sekund at han er borte, og så treffer det meg på nytt.",
      "suggestion": "I det første øyeblikket der du husker, hvilken følelse kommer før du forklarer den?"
    },
    "dp_exploratory-questions_case-sara_08": {
      "text": "[På gråten] Jeg blir flau over at jeg fortsatt er så trist, som om sorgen burde hatt utløpsdato.",
      "suggestion": "Når flauheten sier at sorgen burde vært over, hvilken tristhet ber fortsatt om å bli lagt merke til?"
    },
    "dp_exploratory-questions_case-sara_09": {
      "text": "[På gråten] Når jeg ser par på butikken, går jeg før jeg begynner å gråte.",
      "suggestion": "Når du går før tårene kommer, hvilken følelse prøver du å ikke vise?"
    },
    "dp_exploratory-questions_case-sara_10": {
      "text": "[Lavmælt] Jeg går over gaten for å slippe å passere kafeen vi pleide å kalle vår.",
      "suggestion": "Når du ser for deg den kafeen, hvilken følelse kommer før du bestemmer deg for å gå over gaten?"
    },
    "dp_exploratory-questions_case-michael_01": {
      "text": "[Anspent og sint] Når noen retter på én detalj, blir jeg sint og flau samtidig.",
      "suggestion": "Hva merker du inni deg når sinne og flauhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-michael_02": {
      "text": "[Defensiv] Et sukk fra kona får meg til å anta at hun allerede har bestemt at jeg tar feil.",
      "suggestion": "Når det sukket lander som en dom, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-michael_03": {
      "text": "[Anspent] Sjefen roste teamet, men ikke meg, og jeg klarte ikke å slutte å tenke på det.",
      "suggestion": "Når du spiller om igjen at du ikke ble nevnt, hvilken følelse kommer tilbake?"
    },
    "dp_exploratory-questions_case-michael_04": {
      "text": "[Anspent og sint] Jeg speider etter tegn på respektløshet i møterommet før jeg engang vet hvem som har kommet inn.",
      "suggestion": "Når du allerede speider etter respektløshet, hvilken følelse forbereder du deg på?"
    },
    "dp_exploratory-questions_case-michael_05": {
      "text": "[Defensiv] Når jeg beklager til kona mi, føles det som om jeg har gitt henne seieren.",
      "suggestion": "Når det å beklage kjennes som å tape, hvilken følelse er vanskeligst å bli værende med?"
    },
    "dp_exploratory-questions_case-michael_06": {
      "text": "[Anspent] Når jeg er usikker på et svar foran teamet, begynner jeg å snakke fortere så ingen skal merke det.",
      "suggestion": "Når ingen får se at du er usikker, hvilken følelse unngår du?"
    },
    "dp_exploratory-questions_case-michael_07": {
      "text": "[Anspent og sint] Jeg sa til kona mi at det gikk fint, men jeg var fortsatt sint flere timer etterpå.",
      "suggestion": "Når sinnet blir værende i flere timer, hvor merker du det mest?"
    },
    "dp_exploratory-questions_case-michael_08": {
      "text": "[Defensiv] Jeg smeller med dører hjemme så ingen hører meg si at jeg ble såret.",
      "suggestion": "Før døren smeller, hvilken følelse er der som er vanskelig å si høyt?"
    },
    "dp_exploratory-questions_case-michael_09": {
      "text": "[Anspent] Når noen ber meg roe meg ned, eksploderer jeg før jeg hører noe mer.",
      "suggestion": "Når de ordene treffer, hvilken følelse kommer før eksplosjonen?"
    },
    "dp_exploratory-questions_case-michael_10": {
      "text": "[Skamfull] Jeg hater å føle meg svak foran folk, som om alle kan se at jeg mislyktes.",
      "suggestion": "Når «svak» dukker opp foran folk, hvilken følelse kommer med det å bli sett?"
    },
    "dp_exploratory-questions_case-jason_01": {
      "text": "[Stille] Når det er min tur til å snakke, mister jeg setningen, og det virker som om alle venter.",
      "suggestion": "Når det virker som om alle venter, hvilken følelse dukker opp?"
    },
    "dp_exploratory-questions_case-jason_02": {
      "text": "[Skjelvende stemme] Stemmen skjelver når jeg sier navnet mitt, og så hører jeg hvor patetisk jeg virker.",
      "suggestion": "Når du hører skjelvingen i stemmen din, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-jason_03": {
      "text": "[Engstelig] En venn svarte ikke, og jeg fortsatte å lure på hva jeg hadde gjort feil.",
      "suggestion": "Når du lurer på hva du har gjort feil, hvilken følelse følger med det spørsmålet?"
    },
    "dp_exploratory-questions_case-jason_04": {
      "text": "[Stille] Hvis noen ler på andre siden av rommet, antar jeg at det handler om meg.",
      "suggestion": "Hva skjer inni deg når du tror latteren handler om deg?"
    },
    "dp_exploratory-questions_case-jason_05": {
      "text": "[Nølende] Jeg holder blikket på bordet så folk ikke skal spørre meg om noe.",
      "suggestion": "Når det kjennes risikabelt å se opp, hvilken følelse kommer rundt det å bli sett?"
    },
    "dp_exploratory-questions_case-jason_06": {
      "text": "[Engstelig] Etter møter spiller jeg av én setning i timevis og kjenner ansiktet bli varmt.",
      "suggestion": "Hvis vi tar én av setningene du spiller av, hvilken følelse holder gjennomgangen i gang?"
    },
    "dp_exploratory-questions_case-jason_07": {
      "text": "[Stille] På fester følger jeg med på utgangen før jeg engang vet hvem som er i rommet.",
      "suggestion": "Når oppmerksomheten går mot utgangen, hvilken følelse prøver du å komme unna?"
    },
    "dp_exploratory-questions_case-jason_08": {
      "text": "[Nølende] Noen smilte til meg i gangen, og jeg klarte ikke å skjønne om det var vennlig eller kleint.",
      "suggestion": "Når du ikke vet hva smilet betyr, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-jason_09": {
      "text": "[Engstelig] Jeg sier at jeg er opptatt før småprat kan avsløre hvor klein jeg er.",
      "suggestion": "Når småprat kjennes som om det skal avsløre deg, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-jason_10": {
      "text": "[Stille] Søndagskveldene kjennes tunge, som om alle andre har et liv som venter på dem.",
      "suggestion": "Når søndagstyngden kommer, hvilken følelse kommer med tanken på tilhørighet?"
    },
    "dp_exploratory-questions_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager føles dempet, og jeg klarer ikke vite om jeg er trist eller bare nummen.",
      "suggestion": "Når du sier dempet, hvor merker du det i deg selv?"
    },
    "dp_exploratory-questions_case-laura_02": {
      "text": "[Redd] Naboene kranglet i gangen, og jeg brukte resten av kvelden på å late som det ikke var noe.",
      "suggestion": "Hva skjer inni deg når du prøver å late som det ikke var noe?"
    },
    "dp_exploratory-questions_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er snille mot meg, blir jeg mistenksom og får dårlig samvittighet for å være mistenksom.",
      "suggestion": "Hva legger du merke til inni deg når vennlighet og mistenksomhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-laura_04": {
      "text": "[Flatt og på vakt] Selv mild berøring på skulderen får meg til å skvette før jeg rekker å tenke hvem det er.",
      "suggestion": "Når du skvetter før du rekker å tenke, hvilken følelse er der?"
    },
    "dp_exploratory-questions_case-laura_05": {
      "text": "[Fjern] Om kvelden heller jeg opp vin før jeg har bestemt meg for om jeg egentlig vil ha det.",
      "suggestion": "Hva legger du merke til i øyeblikket før du heller opp?"
    },
    "dp_exploratory-questions_case-laura_06": {
      "text": "[Anspent og på vakt] Jeg våkner og planlegger allerede hvordan jeg skal komme gjennom dagen uten å trenge noen.",
      "suggestion": "Hvilken følelse kommer opp når det å trenge noen er mulig?"
    },
    "dp_exploratory-questions_case-laura_07": {
      "text": "[Langsomt og flatt] Gode nyheter lander flatt, og jeg skjønner ikke hvorfor jeg ikke klarer å glede meg.",
      "suggestion": "Hva legger du merke til inni deg når gode nyheter lander flatt?"
    },
    "dp_exploratory-questions_case-laura_08": {
      "text": "[Fjern] Noen ganger kommer det en sang fra da jeg var gift, og tristheten dukker opp før jeg rekker å slå den av.",
      "suggestion": "Når tristheten dukker opp så fort, hvilken følelse ber om oppmerksomhet?"
    },
    "dp_exploratory-questions_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg sier unnskyld for at jeg trenger trøst, som om det er noe jeg kan få kjeft for.",
      "suggestion": "Når det å be om trøst kjennes som noe du kan få kjeft for, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-laura_10": {
      "text": "[Flatt og på vakt] Jeg hopper over alt med krangling og slåssing og sier til folk at jeg bare ikke liker slike filmer.",
      "suggestion": "Hva skjer inni deg når du ser for deg å fortelle noen den egentlige grunnen?"
    },
    "dp_exploratory-questions_case-carlos_01": {
      "text": "[Defensiv] Når formannen stiller spørsmål ved meg foran gjengen, ler jeg det bort, men klarer ikke slippe det.",
      "suggestion": "Hva er det vanskeligste å kjenne når du ikke klarer å slippe det?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      "text": "[Anspent] Etter en krangel går jeg og tenker på hva jeg burde ha sagt, selv når jeg vet at det bare gjør ting verre.",
      "suggestion": "Hvilken følelse er der mens disse svarene fortsetter å komme?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg, føles det som om folk slutter å respektere meg.",
      "suggestion": "Når det å trekke seg kjennes som å miste respekt, hvilken følelse er vanskeligst å møte?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      "text": "[Skamfull] Jeg ser stadig for meg at gutten min rykket til da jeg hevet stemmen, og jeg vil ikke se rett på det.",
      "suggestion": "Når du lar deg selv se rykket hans, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      "text": "[Mistenksom] Når huset blir stille etter en krangel, blir jeg mer anspent enn da vi ropte.",
      "suggestion": "Hva skjer inni deg når stillhet kjennes farligere enn roping?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      "text": "[Anspent] Jeg sier at jeg ikke bryr meg om hva folk tenker, men ett blikk kan ødelegge hele dagen min.",
      "suggestion": "Hva treffer det blikket i deg?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      "text": "[Defensiv] Faren min pleide å si at følelser gjør menn ubrukelige, og jeg hører det fortsatt når kona mi ber meg snakke.",
      "suggestion": "Hva kjenner du inni deg når du hører den gamle regelen nå?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      "text": "[Sint, med knyttede never] Når en annen mann snakker ned til meg, vet jeg ikke om jeg blir sint eller flau.",
      "suggestion": "Hva legger du først merke til når sinne og flauhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      "text": "[Anspent og sint] Etter en krangel sier jeg til meg selv at jeg er ferdig med det, men jeg er fortsatt helt påskrudd i timevis.",
      "suggestion": "Når du er så påskrudd i timevis, hvilken følelse er fortsatt der?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      "text": "[Sårbar] Det jeg vil mest, er at familien min skal føle seg trygg med meg.",
      "suggestion": "Når du sier ønsket om trygghet høyt, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-nina_01": {
      "text": "[Sliten] Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      "suggestion": "Når skylden skyller inn, hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      "text": "[Skyldpreget] Jeg klager over at ingen hjelper, men jeg gjør også ting om igjen når de prøver.",
      "suggestion": "Hvilken følelse kommer opp når noen hjelper på en måte du ikke kan kontrollere?"
    },
    "dp_exploratory-questions_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg så mye at jeg nesten tar det tilbake.",
      "suggestion": "Hva skjer inni deg når neiet begynner å forsvinne?"
    },
    "dp_exploratory-questions_case-nina_04": {
      "text": "[Skyldpreget] Når jeg hviler, kaller en stemme meg lat før jeg har rukket å trekke pusten.",
      "suggestion": "Når det ordet lander, hvilken følelse kommer opp i deg?"
    },
    "dp_exploratory-questions_case-nina_05": {
      "text": "[Unnskyldende] Jeg sier unnskyld før jeg ber om hjelp, som om behovet mitt allerede er for mye.",
      "suggestion": "Hvilken følelse får du mot deg selv når behovet ditt kjennes for stort?"
    },
    "dp_exploratory-questions_case-nina_06": {
      "text": "[Splittet] Utpå ettermiddagen skjønner jeg at jeg har sagt ja til tre ting jeg aldri hadde lyst til.",
      "suggestion": "Hva legger du merke til når du sier høyt at du ikke hadde lyst?"
    },
    "dp_exploratory-questions_case-nina_07": {
      "text": "[Sliten] Jeg sammenligner meg med andre mødre og bestemmer meg for at jeg har strøket på en prøve alle andre forstår.",
      "suggestion": "Når du bestemmer deg for at du har strøket på den prøven, hvilken følelse kommer opp i deg?"
    },
    "dp_exploratory-questions_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      "suggestion": "Når du ser for deg å bli tatt vare på, hvilken følelse kommer før «egoist»-stemmen?"
    },
    "dp_exploratory-questions_case-nina_09": {
      "text": "[Splittet] Jeg sier at det er enklere om jeg gjør det selv, og så bruker jeg kvelden på å være sint for at ingen hjalp.",
      "suggestion": "Når sinnet kommer etter at du har gjort det selv, hvilken følelse ligger under?"
    },
    "dp_exploratory-questions_case-nina_10": {
      "text": "[Sliten] Jeg krasjer på sofaen om kvelden etter å ha holdt alle sammen hele dagen.",
      "suggestion": "Når du slutter å holde alle sammen, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-aisha_01": {
      "text": "[Panisk] Hvis et svar ikke kommer etter at jeg har åpnet meg, begynner jeg å tenke at jeg var dum som stolte på dem.",
      "suggestion": "Hvilken følelse kommer opp når det å stole på noen begynner å kjennes dumt?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      "text": "[Desperat] Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "I pusten før det snur, hvilken følelse er for vond å holde seg nær?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      "text": "[Desperat] Jeg vet ikke hva jeg føler i dag; alt er for mye og samtidig litt blankt.",
      "suggestion": "Når det både er for mye og blankt, hvilken følelse er lettest å merke først?"
    },
    "dp_exploratory-questions_case-aisha_04": {
      "text": "[Desperat] Når du ser ned for å skrive notater, begynner jeg å lure på hva du egentlig tenker om meg.",
      "suggestion": "Hva skjer inni deg når du ser for deg hva jeg kanskje tenker?"
    },
    "dp_exploratory-questions_case-aisha_05": {
      "text": "[Panisk] Når jeg snakker om kloring, vil jeg få det til å høres tilfeldig ut så du ikke overreagerer.",
      "suggestion": "Hvilken følelse kommer opp når du prøver å få det til å høres tilfeldig ut?"
    },
    "dp_exploratory-questions_case-aisha_06": {
      "text": "[Desperat] Hvis du avlyser en time, vil jeg ikke komme tilbake og bli forlatt to ganger.",
      "suggestion": "Når du ser for deg en avlysning, hva er det første som stikker i deg?"
    },
    "dp_exploratory-questions_case-aisha_07": {
      "text": "[På gråten] Vennlighet får meg til å gråte, og så vil jeg komme meg bort fra den.",
      "suggestion": "Hva er den første følelsen som kommer når vennlighet når inn?"
    },
    "dp_exploratory-questions_case-aisha_08": {
      "text": "[Desperat] Jeg tester folk etter at de kommer nær, for å se om de bryr seg nok til å bli.",
      "suggestion": "Når du ser for deg en test, hvilken frykt prøver du å besvare inni deg?"
    },
    "dp_exploratory-questions_case-aisha_09": {
      "text": "[Skamfull] Etter at jeg eksploderer, hater jeg meg selv så mye at jeg nesten ikke holder ut å være i min egen kropp.",
      "suggestion": "Når selvhatet treffer, hvilken følelse er vanskeligst å være nær?"
    },
    "dp_exploratory-questions_case-aisha_10": {
      "text": "[Panisk] På slutten sier jeg ha det som om alt er greit, og så går jeg herfra sint for at jeg trenger deg.",
      "suggestion": "Hvilken følelse ligger under sinnet når du går?"
    },
    "dp_exploratory-questions_case-david_01": {
      "text": "[Kontrollert] Når hun kaller meg kald, vil jeg avfeie henne, men det blir sittende i meg etterpå.",
      "suggestion": "Hvilken følelse er der når det blir sittende i deg etterpå?"
    },
    "dp_exploratory-questions_case-david_02": {
      "text": "[Kontrollert] Hvis jeg ikke vinner, føler jeg meg hul, som om det ikke er noe fast under meg.",
      "suggestion": "Når seieren ikke er der, hvilken følelse følger med den tomheten?"
    },
    "dp_exploratory-questions_case-david_03": {
      "text": "[Defensiv] Jeg begynner å ramse opp prestasjoner når jeg føler meg dømt av kona mi.",
      "suggestion": "Hvilken følelse prøver du å ikke vise når du ramser opp prestasjoner?"
    },
    "dp_exploratory-questions_case-david_04": {
      "text": "[Kontrollert] Ros fra sjefen føles godt i et sekund, og så begynner jeg å lure på hva han vil.",
      "suggestion": "Hva legger du merke til når ros går over i mistenksomhet?"
    },
    "dp_exploratory-questions_case-david_05": {
      "text": "[Avvisende] Å innrømme at jeg tar feil, får ansiktet til å brenne som om alle kan se gjennom meg.",
      "suggestion": "Når det å innrømme feil kjennes blottstillende, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-david_06": {
      "text": "[Unnvikende] Når samtalen blir følelsesladet, sjekker jeg telefonen så jeg slipper å se blottstilt ut.",
      "suggestion": "Når du strekker deg etter telefonen, hvilken følelse beveger du deg bort fra?"
    },
    "dp_exploratory-questions_case-david_07": {
      "text": "[Kontrollert] Når barna protesterer ved middagen, hører jeg meg selv høres ut som faren min.",
      "suggestion": "Hvilken følelse kommer opp når du hører den likheten?"
    },
    "dp_exploratory-questions_case-david_08": {
      "text": "[Fjern] Siden affæren klarer jeg ikke vite om jeg føler skyld, eller bare irritasjon over at alle stadig tar det opp.",
      "suggestion": "Hva legger du merke til når skyld og irritasjon ligger så tett?"
    },
    "dp_exploratory-questions_case-david_09": {
      "text": "[Flau] Jeg vil at noen skal legge merke til det jeg gjør uten at jeg må tigge om anerkjennelse.",
      "suggestion": "Når anerkjennelsen ikke kommer, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-david_10": {
      "text": "[Såret, men skarp] Jeg hater å være helt vanlig på jobb foran alle, som om det betyr at jeg har forsvunnet.",
      "suggestion": "Når «helt vanlig» kjennes som å forsvinne, hvilken lengsel dukker opp under det?"
    },
    "dp_exploratory-questions_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "Før bølgen treffer, hva er det tidligste signalet om at den kommer?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      "text": "[Hyperårvåken] Etter mareritt vet jeg ikke hva som er virkelig nok til å snakke om, og hva jeg bør la ligge.",
      "suggestion": "Hva legger du merke til mens du avgjør hva du skal la ligge?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      "text": "[Stille og på vakt] I matbutikken holder jeg meg nær utgangene fordi gangene mellom hyllene kjennes for trange.",
      "suggestion": "Når gangene kjennes for trange, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-marcus_04": {
      "text": "[Lav stemme] Etter mørkets frembrudd vet jeg ikke om stillheten er fredelig eller om den lukker seg rundt meg.",
      "suggestion": "Hva skjer inni deg når stillheten går fra fredelig til å lukke seg rundt deg?"
    },
    "dp_exploratory-questions_case-marcus_05": {
      "text": "[Lav stemme] Jeg sitter i bilen etter jobb fordi det å gå opp betyr å være alene med det som er der.",
      "suggestion": "Hvilken følelse venter når du ser for deg å åpne døra til leiligheten?"
    },
    "dp_exploratory-questions_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg holder lyset dempet og ignorerer telefonen så verden holder seg langt unna.",
      "suggestion": "Når verden holder seg langt unna, hvilken følelse blir lettere å håndtere?"
    },
    "dp_exploratory-questions_case-marcus_07": {
      "text": "[Flatt] Når noe godt skjer, venter jeg på delen der det blir tatt tilbake.",
      "suggestion": "Hvilken følelse kommer opp mens du venter på at det skal bli tatt tilbake?"
    },
    "dp_exploratory-questions_case-marcus_08": {
      "text": "[Hyperårvåken] Plutselige lyder i trappeoppgangen får meg til å skvette, og så speider jeg etter fare.",
      "suggestion": "Rett etter at du skvetter, hvilken følelse tar over?"
    },
    "dp_exploratory-questions_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg husker ikke sist jeg lo ordentlig uten å stoppe meg selv.",
      "suggestion": "Når du sier at du ikke husker sist du lo ordentlig, hvilken følelse kommer nærmest overflaten?"
    },
    "dp_exploratory-questions_case-marcus_10": {
      "text": "[Flatt] Jeg sier til meg selv at jeg har det best alene, fordi nærhet alltid koster noe.",
      "suggestion": "Hvilken fare ser du for deg når nærhet kjennes som noe som koster?"
    },
    "dp_providing-treatment-rationale_case-sara_01": {
      "text": "[Lavmælt] Burde jeg ikke bare fokusere på positive tanker i stedet for å grave i hvor trist jeg er?",
      "suggestion": "Positive tanker kan hjelpe et øyeblikk, og samtidig trenger tristheten et sted å gå. Hvis vi lytter til den i små, trygge doser, kan den vise hva som trenger trøst eller kontakt i stedet for å komme sterkere tilbake om kvelden."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      "text": "[Flau] Hvorfor fortsetter du å spørre hva jeg føler når jeg bare trenger en plan for å komme meg gjennom uka?",
      "suggestion": "En plan virker bedre når den passer til følelsen som velter uka. Vi lytter til sorgen først fordi den sier noe om du trenger trøst, kontakt, hvile eller en grense før vi velger steg."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      "text": "[På gråten] Jeg blir flau over at jeg gråter over dette igjen. Hvordan skal det å gi tårene plass hjelpe meg videre?",
      "suggestion": "Det gir mening at det er flaut. Vi prøver ikke å holde deg i gråten; vi bruker tårene som et tegn på hva som fortsatt trenger omsorg, fordi det hjelper sorgen å bevege seg i stedet for å bli skjult og dra deg tilbake."
    },
    "dp_providing-treatment-rationale_case-sara_04": {
      "text": "[Flau] Hvis avledning får meg gjennom de stille timene, hvorfor skal vi rote med det?",
      "suggestion": "Avledning hjelper deg gjennom toppen. Samtidig øver vi på å berøre ensomheten i små doser, fordi stillheten da blir mindre farlig, ikke bare noe du må løpe fra."
    },
    "dp_providing-treatment-rationale_case-sara_05": {
      "text": "[Bekymret] Hvordan hjelper det å snakke om et brudd når andre har større problemer?",
      "suggestion": "Smerte trenger ikke vinne en konkurranse før den får oppmerksomhet. Varsom lytting til sorgen gjør det lettere å høre hva den trenger – trøst, grenser, kontakt – slik at den kan lette i stedet for å bli skjøvet bort."
    },
    "dp_providing-treatment-rationale_case-sara_06": {
      "text": "[På gråten] Hvis vi snakker mer om ham, blir han ikke bare værende enda lenger i hodet mitt?",
      "suggestion": "Vi skal ikke repetere ham; vi kartlegger draget under – ensomhet, håp, selvbebreidelse – fordi sjekkemønsteret får mindre næring når de delene får omsorg."
    },
    "dp_providing-treatment-rationale_case-sara_07": {
      "text": "[Nølende] Kan vi sette mål så jeg holder meg travel nok til å slippe å kjenne dette?",
      "suggestion": "Vi kan bruke mål, men hvis de bare dekker over sorgen, venter ensomheten på kvelden. Noen minutter med følelsen hjelper oss å velge handlinger som fyller på, ikke bare bedøver."
    },
    "dp_providing-treatment-rationale_case-sara_08": {
      "text": "[Bekymret] Hva om «hul» er alt jeg har? Jeg vet ikke hvordan det kan bli nyttig.",
      "suggestion": "«Hul» er ikke ubrukelig; det gir oss en inngang. Tyngden, formen og draget gjør en uklar tomhet konkret nok til å forstå og lindre."
    },
    "dp_providing-treatment-rationale_case-sara_09": {
      "text": "[Utålmodig] Jeg vil ha en tidslinje for når jeg slutter å sjekke profilen hans; ellers kjennes dette meningsløst.",
      "suggestion": "En tidslinje ville vært beroligende, men løkken endres ved at vi lærer hva sjekkingen gjør for deg. Når vi kartlegger håpet, ensomheten og krasjet, får du flere måter å møte behovet på uten å åpne såret på nytt."
    },
    "dp_providing-treatment-rationale_case-sara_10": {
      "text": "[Bekymret] Hvordan er dette annerledes enn å fortelle bruddet om igjen til jeg selv blir lei av å høre det?",
      "suggestion": "Her forteller vi det ikke bare på nytt. Vi senker tempoet i historien for å finne stedene som sitter fast, fordi de øyeblikkene viser hva som fortsatt trenger trøst, mening eller en ny respons."
    },
    "dp_providing-treatment-rationale_case-michael_01": {
      "text": "[Skeptisk] Jeg kom for sinnekontroll, ikke følelsesprat. Hvordan stopper dette meg fra å eksplodere?",
      "suggestion": "Vi starter ved det første stikket, før sinnet tar rattet, fordi det å fange skam, respektløshet eller frykt tidlig gjør tone og handling til valg i stedet for automatiske reaksjoner."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      "text": "[Defensiv] Er ikke det å lete etter utløseren bare å bortforklare at jeg eksploderer?",
      "suggestion": "Poenget er ansvarlighet, ikke bortforklaring, fordi det å kjenne rekkefølgen i triggeren gjør at du kan fange det første stikket tidligere og velge før det blir roping."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      "text": "[Anspent] Hvorfor bremse når folk ser på og jeg må virke som om jeg har kontroll?",
      "suggestion": "Å bremse beskytter kontrollen i stedet for å svekke den. Fem sekunder hjelper deg å merke støtet før stemmen hardner, så autoritet ikke må komme gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_04": {
      "text": "[Bekymret] Hvordan hjelper det å nærme meg skam hvis kona mi eller teamet mitt ser det som svakhet?",
      "suggestion": "Vi øver ikke på svakhet; vi finner stikket tidlig, fordi det å sette ord på hva som traff gir deg et stødigere svar enn å bevise styrke gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_05": {
      "text": "[Utfordrende] Kan vi hoppe over følelsene og bare lage et verktøy for når brystet blir varmt?",
      "suggestion": "Vi kan bygge verktøyet rundt den varmen. Følelsesarbeidet forteller oss nøyaktig hva verktøyet må avbryte: skam, trussel eller trangen til å bevise deg."
    },
    "dp_providing-treatment-rationale_case-michael_06": {
      "text": "[Bekymret] Hvordan hjelper det meg å lede at jeg merker stram kjeve når et møte blir spent?",
      "suggestion": "Den stramme kjeven hjelper som et tidlig varsel, ikke en avsporing. Hvis du fanger det før stemmen blir skarp, får du noen sekunder til å svare med autoritet i stedet for affekt."
    },
    "dp_providing-treatment-rationale_case-michael_07": {
      "text": "[Bekymret] Hva om jeg eksploderer etter alt dette og alle sier at terapien mislyktes?",
      "suggestion": "Da bruker vi det som data, ikke som en dom. Vi går gjennom sekvensen, finjusterer kartet og øver pausen, så neste vanskelige øyeblikk går bedre."
    },
    "dp_providing-treatment-rationale_case-michael_08": {
      "text": "[Bekymret] Hvordan skal mer prat bevise for kona mi at jeg kan slutte å eksplodere?",
      "suggestion": "Beviset må vises: færre utbrudd, kortere vei ned igjen og raskere reparasjon. Praten hjelper bare hvis den kartlegger reaksjonen tidlig nok til at du kan velge annerledes hjemme."
    },
    "dp_providing-treatment-rationale_case-michael_09": {
      "text": "[Utfordrende] Vil dette endre hvordan teamet ser meg, eller bare få meg til å analysere meg selv?",
      "suggestion": "Endringen må merkes i tone, timing og reparasjon. Å fange stikket tidligere betyr noe fordi teamet får en leder som svarer i stedet for å blusse opp."
    },
    "dp_providing-treatment-rationale_case-michael_10": {
      "text": "[Flau] Hva skal jeg gjøre hvis jeg ikke er god på følelser og ikke har ord?",
      "suggestion": "Du trenger ikke ha flytende følelsesspråk for å begynne. Kjeve, bryst, varme, ett behov - de konkrete tegnene betyr noe fordi de gjør arbeidet praktisk og holder det under din kontroll."
    },
    "dp_providing-treatment-rationale_case-jason_01": {
      "text": "[Skeptisk] Hjelper dette faktisk sosial angst, eller lærer jeg bare å stirre på frykten?",
      "suggestion": "Målet er ikke å stirre på frykten. Vi finner det første signalet som er håndterbart, roer det nok ned og øver på å bli værende, slik at selvtillit vokser fra gjentatte øyeblikk du kommer deg gjennom."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      "text": "[Blank] Hva om jeg blir blank her også og kaster bort hele timen?",
      "suggestion": "Blankheten er nyttig informasjon, ikke bortkastet tid. Vi starter med selve blankheten fordi det å merke de første signalene gir oss en vei inn i frykten uten å tvinge fram ord."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      "text": "[Engstelig] Det er tankene som ødelegger alt, så hvorfor spør du stadig om brystet mitt?",
      "suggestion": "Tankene betyr noe, og brystet varsler ofte før tankene blir høylytte. Når vi følger det signalet, kan vi gripe inn tidligere, før spiralen har fått fart."
    },
    "dp_providing-treatment-rationale_case-jason_04": {
      "text": "[Bekymret] Når jeg legger merke til frykten, blir den høyere, så hvorfor skulle jeg øve på det?",
      "suggestion": "Vi oversvømmer deg ikke med frykt. Vi øver ved kanten fordi små doser lærer alarmen din at frykt kan merkes, navngis og overleves uten å ta over."
    },
    "dp_providing-treatment-rationale_case-jason_05": {
      "text": "[Nølende] Kan vi ikke bare lage et manus for hva jeg skal si før møter, så jeg ikke fryser?",
      "suggestion": "Ja, og manuset må tåle frysingen. Vi kobler ordene til det første fryktsignalet, så du kan bli værende lenge nok til å bruke dem."
    },
    "dp_providing-treatment-rationale_case-jason_06": {
      "text": "[Engstelig] Hvor lenge tar det før jeg kan snakke i møter uten at kroppen tar over?",
      "suggestion": "De første skiftene er ofte små: litt mindre beredskap, litt mer rom til å være til stede når oppmerksomheten rettes mot deg, og raskere vei tilbake etterpå."
    },
    "dp_providing-treatment-rationale_case-jason_07": {
      "text": "[Flau] Jeg synes det er pinlig å snakke om at jeg er så redd; hvordan skal det hjelpe å si det høyt?",
      "suggestion": "Vi går varsomt fram, og du bestemmer tempoet. Å si det høyt hjelper skammen å slippe litt taket, fordi frykten blir møtt i stedet for gjemt."
    },
    "dp_providing-treatment-rationale_case-jason_08": {
      "text": "[Bekymret] Hva gjør jeg faktisk når stemmen som sier «du er klein» starter?",
      "suggestion": "Vi gjør stemmen konkret, finner kroppssignalet som følger med den, og øver på et stødigere svar, fordi da har du en handling før skammen får deg til å forsvinne."
    },
    "dp_providing-treatment-rationale_case-jason_09": {
      "text": "[Nølende] Må jeg alltid jobbe så hardt bare for å snakke som alle andre?",
      "suggestion": "Det blir som regel lettere. Når trygghet bygges gjennom gjentatt, håndterlig øving, er det færre sosiale signaler som utløser alarm, og det å snakke kan kjennes mindre som et helkroppsprosjekt."
    },
    "dp_providing-treatment-rationale_case-jason_10": {
      "text": "[Stille] Hvorfor øve på øyekontakt når det kjennes som folk kan se alt som er galt med meg?",
      "suggestion": "Vi tvinger ikke øyekontakt. Korte, valgte øyeblikk kan lære alarmen at det å bli sett kan tåles, og er noe annet enn å bli avslørt."
    },
    "dp_providing-treatment-rationale_case-laura_01": {
      "text": "[Bekymret] Hvis dette er hjernekjemi, hvorfor skulle det endre noe å snakke med deg?",
      "suggestion": "Kjemi betyr noe, og gjentatt trygghet former også systemet over tid. Ved siden av eventuell medisinsk oppfølging gir terapi sinn og kropp nye erfaringer med å være til stede, bli roet og ikke være alene, slik at alarmsystemet får nye bevis."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      "text": "[Langsomt og flatt] Hvordan vet jeg at dette ikke får meg til å gjenoppleve traumer når jeg allerede forsvinner?",
      "suggestion": "Du skal ikke presses til å gjenoppleve noe. Små doser og jording hjelper deg å berøre én kant og komme tilbake; over tid kan det hjelpe minnet å slippe taket."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      "text": "[Langsomt og flatt] Hvis jeg blir nummen før jeg kan føle noe, hva er det egentlig vi jobber med?",
      "suggestion": "Vi jobber med selve nummenheten fordi den er beskyttelse, ikke fravær. Kantene viser oss når nærhet kjennes risikabelt, slik at følelser kan komme tilbake i mengder du kan håndtere."
    },
    "dp_providing-treatment-rationale_case-laura_04": {
      "text": "[Bekymret] Hva om vennligheten din gjør meg mer mistenksom i stedet for tryggere?",
      "suggestion": "Da behandler vi mistanken som nyttig beskyttelse. Vi senker tempoet fordi tillit trenger bevis; du kan teste varme i bittesmå mengder før du må stole på den."
    },
    "dp_providing-treatment-rationale_case-laura_05": {
      "text": "[Nølende] Kommer dette til å dra opp ting jeg ikke tåler og gjøre meg verre etterpå?",
      "suggestion": "Vi går varsomt fram fordi trygghet kommer først. Du bestemmer tempoet, vi jorder ofte, og vi stopper før aktiveringen blir for høy, slik at arbeidet bygger toleranse i stedet for overveldelse."
    },
    "dp_providing-treatment-rationale_case-laura_06": {
      "text": "[Langsomt og flatt] Hvorfor jakte på bittesmå signaler hvis jeg stenger ned før jeg kan bruke dem?",
      "suggestion": "De bittesmå signalene er varsellamper før nedstenging. Å lære dem lar oss senke tempoet tidligere, så du får større sjanse til å bli værende i stedet for å forsvinne."
    },
    "dp_providing-treatment-rationale_case-laura_07": {
      "text": "[Langsomt og flatt] Hvordan skal prat endre denne flatheten når jeg knapt kjenner noe?",
      "suggestion": "Målet er et bredere toleransevindu: mer tilgang til følelse og mer ro. Vi følger små livstegn i stedet for å tvinge følelser fram."
    },
    "dp_providing-treatment-rationale_case-laura_08": {
      "text": "[Langsomt og flatt] Hvordan skal jeg vite at dette virker når jeg fortsatt er nummen de fleste dager?",
      "suggestion": "Vi følger små tegn, fordi nummenhet mykner gradvis: litt mindre beredskap når stemmer heves, noen flere sekunder med nærvær, og korte øyeblikk av varme eller ro som ikke kjennes som en felle."
    },
    "dp_providing-treatment-rationale_case-laura_09": {
      "text": "[Nølende] Kan vi ikke bare snakke om praktiske ting så jeg slipper å kjenne alt dette?",
      "suggestion": "Praktisk støtte hører også hjemme her. Følelsesarbeidet gjør at støtten lander bedre fordi du blir mindre alene og mindre på vakt med det du har båret."
    },
    "dp_providing-treatment-rationale_case-laura_10": {
      "text": "[Bekymret] Hva om jeg fryser her inne og du bare sitter og venter på et svar?",
      "suggestion": "Da blir frysingen selve arbeidet. Vi pauser, jorder og setter ord på det som skjer, fordi det lærer systemet ditt at nedstenging kan møtes trygt, ikke presses."
    },
    "dp_providing-treatment-rationale_case-carlos_01": {
      "text": "[Defensiv] Kommer dette til å gjøre meg myk? Folk må fortsatt vite at de ikke skal kødde med meg.",
      "suggestion": "Målet er stødighet, ikke mykhet. Du kan holde en tydelig grense uten å skremme familien din eller gi kontrollen over til sinnet."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      "text": "[Anspent] Hvorfor snakke om følelser i stedet for å gi meg verktøy jeg kan bruke når jeg blir opphetet?",
      "suggestion": "Verktøy er en del av arbeidet. Følelsesarbeid betyr noe fordi det viser nøyaktig når varmen starter, så verktøyet kommer før knyttnever eller ord tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      "text": "[Anspent og sint] Hvordan hjelper dette når noen viser meg manglende respekt foran familien min?",
      "suggestion": "Vi kartlegger flammepunktet, så du kan skille reell respektløshet fra stikket av ydmykelse. Det gir deg en fast respons uten eksplosjon."
    },
    "dp_providing-treatment-rationale_case-carlos_04": {
      "text": "[Skeptisk] Hvordan skal det å kjenne mer hindre meg i å miste brodden og bli overkjørt?",
      "suggestion": "Dette handler ikke om å ta fra deg brodden. Å skille beskyttelse fra eksplosjon betyr noe fordi folk kan vite hvor grensen går, mens sønnen din får stødighet i stedet for frykt."
    },
    "dp_providing-treatment-rationale_case-carlos_05": {
      "text": "[Defensiv] Hvis sinne er det som beskytter meg, hvorfor skal jeg bruke terapi på å kjenne det som ligger under?",
      "suggestion": "Sinne har beskyttet deg, og det har også skremt folk du er glad i. Vi ser under sinnet fordi det hjelper deg å beholde den beskyttende klarheten uten at eksplosjonen bestemmer for deg."
    },
    "dp_providing-treatment-rationale_case-carlos_06": {
      "text": "[Anspent] Hvordan skal pust bety noe når jeg allerede er to sekunder fra å smelle?",
      "suggestion": "Pust betyr noe bare som en døråpner. Den kjøper noen sekunder, fordi de sekundene lar deg fange sårethet eller ydmykelse før smellet blir eneste mulighet."
    },
    "dp_providing-treatment-rationale_case-carlos_07": {
      "text": "[Anspent og sint] Hvordan krever jeg respekt uten å oppføre meg som om noen kan tråkke på meg?",
      "suggestion": "Vi bygger et tredje valg fordi du trenger respekt og trygghet samtidig. Når du setter ord på det som traff under, får du en fast respons som ikke må bli en trussel."
    },
    "dp_providing-treatment-rationale_case-carlos_08": {
      "text": "[Defensiv] Jeg lærte at du må slå først, så hvorfor skulle det hjelpe å bremse?",
      "suggestion": "Den regelen hjalp deg å overleve den gangen. Her senker vi farten i tennpunktet, fordi det å kjenne hva som blir truffet under det hele gir deg mer valg før «slå først»-responsen tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_09": {
      "text": "[Skyldpreget] Barnet mitt så meg sint. Hvordan hjelper det ham at jeg snakker om følelser?",
      "suggestion": "Du modellerer reparasjon. Når du fanger det tidligere og gjør opp raskere, lærer han trygghet og ansvarlighet av deg, ikke bare frykt for sinne."
    },
    "dp_providing-treatment-rationale_case-carlos_10": {
      "text": "[Defensiv] Hvordan unngår vi at dette blir årevis med prat mens familien min venter?",
      "suggestion": "Vi holder det fokusert ved å sikte på tennpunktene som gjør mest skade, og så sjekke om du fanger, roer og reparerer dem raskere hjemme."
    },
    "dp_providing-treatment-rationale_case-nina_01": {
      "text": "[Skyldpreget] Er det ikke egoistisk å fokusere på følelsene mine når alle trenger noe fra meg?",
      "suggestion": "Følelsene dine peker mot behov og grenser; det er det som gjør omsorg bærekraftig. Når vi lytter til dem, kan du hjelpe uten å forsvinne."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      "text": "[Unnskyldende] Hva hjelper det å legge merke til kroppen når skylden treffer før jeg rekker å tenke?",
      "suggestion": "De signalene varsler skyld før det automatiske ja-et tar over. Når du fanger dem tidlig, får du en pause, fordi det er der en grense kan bli mulig."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      "text": "[Bekymret] Hvordan skal følelsesarbeid hjelpe når jeg trenger konkrete steg før jeg drukner?",
      "suggestion": "Konkrete steg betyr noe. Følelsesarbeidet betyr noe fordi det viser hvilken forespørsel, grense eller behov som faktisk letter belastningen, så planen ikke blir enda en oppgave du bærer alene."
    },
    "dp_providing-treatment-rationale_case-nina_04": {
      "text": "[Bekymret] Hvordan hjelper det å fokusere på skyld når jeg allerede får dårlig samvittighet av å si nei?",
      "suggestion": "Skylden er trykkpunktet. Når du merker den tidlig og øver små, respektfulle grenser, kan den skyldige delen lære at omsorg også inkluderer deg."
    },
    "dp_providing-treatment-rationale_case-nina_05": {
      "text": "[Bekymret] Hvis folk kan forlate meg når jeg slutter å hjelpe, hvordan hjelper det å navngi behov?",
      "suggestion": "Å navngi behov lar oss teste frykten varsomt i stedet for å følge den automatisk. De riktige relasjonene blir ofte sterkere når folk vet hva du faktisk trenger og hvor grensene dine går."
    },
    "dp_providing-treatment-rationale_case-nina_06": {
      "text": "[Nølende] Kan vi bare fikse timeplanen min? Å snakke om behov høres ut som enda en oppgave.",
      "suggestion": "Vi kan jobbe med timeplanen, og behovene sier hva timeplanen må beskytte. Ellers kan planen se organisert ut mens den fortsatt bruker deg opp."
    },
    "dp_providing-treatment-rationale_case-nina_07": {
      "text": "[Bekymret] Hva om det alltid føles feil å si nei, uansett hvor mye vi snakker?",
      "suggestion": "Da handler ikke fremgang om å vente på at skylden forsvinner. Vi øver på å legge merke til den, sjekke om den passer, og velge en grense likevel, fordi skyld kan mykne etter nye erfaringer."
    },
    "dp_providing-treatment-rationale_case-nina_08": {
      "text": "[Bekymret] Hvordan blir det lettere å be om hjelp når det å trenge noe kjennes som for mye?",
      "suggestion": "Øvingen skjer med små, konkrete forespørsler, slik at skammen får nye bevis. Litt støtte om gangen kan lære systemet ditt at behov kan være gjensidig, ikke for mye."
    },
    "dp_providing-treatment-rationale_case-nina_09": {
      "text": "[Skyldpreget] Hvis jeg fokuserer på behov, blir jeg ikke den trengende personen jeg misliker?",
      "suggestion": "Tydelige behov gjør folk som regel mindre desperate, ikke mer. Å navngi dem lar deg spørre direkte før bitterhet, kollaps eller skjulte tester tar over."
    },
    "dp_providing-treatment-rationale_case-nina_10": {
      "text": "[Sliten] Hvordan skal jeg vite at dette faktisk hjelper og ikke bare gjør meg mer selvopptatt?",
      "suggestion": "Konkrete tegn vil vise det: å spørre med mindre unnskyldning, hvile med mindre straff og sette grenser uten å viske ut deg selv. De tegnene betyr noe fordi målet er omsorg som varer, ikke selvopptatthet."
    },
    "dp_providing-treatment-rationale_case-aisha_01": {
      "text": "[Bekymret] Hva om det å snakke om å bli forlatt gjør at jeg vil skade meg igjen før jeg klarer å stoppe det?",
      "suggestion": "Sikkerhet kommer først. Vi bygger en plan, jording og støtte før vi berører den smerten, fordi målet er å holde deg i kontakt mens forlatelsesalarmen blir mindre farlig."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      "text": "[Desperat] Jeg trenger at du lover at du aldri forlater meg, ellers ser jeg ikke hvordan dette skal hjelpe.",
      "suggestion": "Det løftet ville roe deg et øyeblikk, men det ville ikke være ærlig. Trygghet på lengre sikt kommer av forutsigbare adskillelser, å navngi frykten og reparere bommer raskt, så panikken lærer at den ikke er alene."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      "text": "[Panisk] Hvis du avlyser, hvordan skal det å navngi alarmen stoppe meg fra å gjøre noe drastisk?",
      "suggestion": "Å navngi den er bare én del. Vi lager også en avlysningsplan, slik at gjentatte, forutsigbare steg hjelper panikken å stige, nå toppen og komme ned igjen uten at du blir alene med den."
    },
    "dp_providing-treatment-rationale_case-aisha_04": {
      "text": "[Bekymret] Hva om følelsene mine er for mye for enhver terapeut å jobbe med?",
      "suggestion": "Følelsene dine er store på grunn av det du har levd. Her doserer vi – små slurker, mye jording – så det kjennes overlevelig."
    },
    "dp_providing-treatment-rationale_case-aisha_05": {
      "text": "[Panisk] Når jeg har panikk, hvorfor spørre om føtter og pust i stedet for bare å roe meg ned?",
      "suggestion": "Panikk er en alarmtilstand, ikke bare en tanke. Føtter, pust og stolen hjelper med å sende trygghetssignaler her og nå, fordi det gir deg nok rom til å velge neste steg."
    },
    "dp_providing-treatment-rationale_case-aisha_06": {
      "text": "[Desperat] Hvordan hjelper det å jobbe med behovet når jeg vil ha beroligelse fra deg med én gang?",
      "suggestion": "Det akutte behovet fortjener direkte arbeid, fordi tydelige forespørsler, små doser av å ta imot og måter å roe seg mellom timene gjør nærhet mindre desperat."
    },
    "dp_providing-treatment-rationale_case-aisha_07": {
      "text": "[Panisk] Hvis vi fokuserer på denne relasjonen, blir jeg ikke knyttet og faller fra hverandre når den tar slutt?",
      "suggestion": "Vi bruker relasjonen som øving med grenser og reparasjon. Når tilknytningen navngis, doseres og gjøres forutsigbar, blir den mindre av en hemmelig panikk du må håndtere alene."
    },
    "dp_providing-treatment-rationale_case-aisha_08": {
      "text": "[Bekymret] Hvordan skal dette hjelpe relasjonene mine å ikke eksplodere når jeg går fra å trygle til å skyve bort?",
      "suggestion": "Vi kartlegger skiftet tidlig: panikken, protesten og trangen til å teste. Da kan du navngi frykt, be direkte eller ta trygg avstand før relasjonen blir en kamp."
    },
    "dp_providing-treatment-rationale_case-aisha_09": {
      "text": "[Nølende] Kommer dette til å ta evigheter, eller kommer jeg alltid til å være så intens?",
      "suggestion": "Tidlige gevinster bør bli synlige: færre panikktopper, raskere ro og flere måter å navngi frykt før den tar over. Øving hjelper med å bygge veien fra alarm til stødigere grunn."
    },
    "dp_providing-treatment-rationale_case-aisha_10": {
      "text": "[Mistenksom] Hver grense fra en terapeut høres ut som avstand, så hvorfor skulle jeg stole på dette?",
      "suggestion": "Vi jobber direkte med den frykten. Jeg forklarer rammen, inviterer deg til å si hvordan den virker på deg, og reparerer bommer, slik at gjentatt forutsigbar kontakt kan gjøre at grenser kjennes mindre som forlatelse."
    },
    "dp_providing-treatment-rationale_case-david_01": {
      "text": "[Kontrollert] Hvorfor fokusere på følelser når jeg trenger resultater folk faktisk kan se?",
      "suggestion": "Vi fokuserer der fordi følelser driver reaksjonene folk ser. Når du fanger stikket under sinne eller avstand, får du mer kontroll over tone, reparasjon og utfall hjemme og på jobb."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      "text": "[Skeptisk] Hvordan er dette praktisk hvis jeg ikke vil bli psykoanalysert eller redusert til barndommen min?",
      "suggestion": "Vi holder det praktisk ved å følge øyeblikkene her og nå først. Historien tas bare inn når den forklarer dagens reaksjoner, fordi poenget er stødigere valg du kan bruke med én gang."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      "text": "[Utfordrende] Hjelper dette ekteskapet mitt, eller handler det bare om meg?",
      "suggestion": "Det hjelper ekteskapet fordi mønsteret lever mellom dere, men starter også inni deg. Når vi bremser stikket under defensiviteten, kan du høre mer, eie mer og reparere før samtalen hardner."
    },
    "dp_providing-treatment-rationale_case-david_04": {
      "text": "[Kontrollert] Jeg kan teorien allerede. Hvorfor bruke tid på følelser i stedet for å fikse atferd?",
      "suggestion": "Teori hjelper bare hvis den når øyeblikket der atferden endres. Vi fokuserer på følelser fordi skam og trussel er der valgene dine snevres inn; når du fanger dem, får du mer rom til å handle annerledes."
    },
    "dp_providing-treatment-rationale_case-david_05": {
      "text": "[Såret, men skarp] Følelsene mine er problemet. Hvorfor skal vi fokusere på det som ødelegger alt?",
      "suggestion": "Reaksjonene gjør skade, og nettopp derfor senker vi tempoet. Å fange skam eller trussel før det styrer tonen din hjelper følelser å bli informasjon du kan bruke, ikke en kraft som tar over rommet."
    },
    "dp_providing-treatment-rationale_case-david_06": {
      "text": "[Kravstor] Jeg trenger sinnekontroll, ikke en dypdykk i hva jeg føler under det.",
      "suggestion": "Sinnekontroll virker best når den starter før eksplosjonen. Å se under sinnet hjelper deg å fange første støt av skam, trussel eller frykt, så kontrollen begynner tidligere enn når du må tvinge deg rolig etter at skaden har skjedd."
    },
    "dp_providing-treatment-rationale_case-david_07": {
      "text": "[Utfordrende] Kan vi hoppe over barndomsprat og holde oss til det som skjer nå?",
      "suggestion": "Ja, vi kan holde oss til nåtiden. Vi navngir bare tidligere mønstre hvis de viser seg i reaksjonene dine i dag, slik at historien tjener endring i stedet for å bli en omvei."
    },
    "dp_providing-treatment-rationale_case-david_08": {
      "text": "[Bekymret] Hva om jeg ikke føler noe når du ber meg se innover?",
      "suggestion": "Da starter vi der, fordi små signaler som stram kjeve eller hulhet i brystet gir oss et praktisk inngangspunkt. Du styrer tempoet."
    },
    "dp_providing-treatment-rationale_case-david_09": {
      "text": "[Kravstor] Jeg trenger raske gevinster; jeg vil ikke inn i enda et endeløst innsiktsprosjekt.",
      "suggestion": "Da følger vi atferd fra starten, fordi raske gevinster må vise seg i handling: å fange defensiviteten tidligere, reparere raskere og komme gjennom vanskelige samtaler med mindre skade."
    },
    "dp_providing-treatment-rationale_case-david_10": {
      "text": "[Kontrollert] Hvordan vet jeg at dette er verdt det og ikke bare enda et innsiktsprosjekt?",
      "suggestion": "Vi bruker konkrete markører fordi innsikt alene ikke er nok: mindre nedstenging i vanskelige samtaler, raskere reparasjon når du bommer, og mer rom til å være til stede når skammen blir truffet."
    },
    "dp_providing-treatment-rationale_case-marcus_01": {
      "text": "[Flatt] Prat endrer ikke det som skjedde, så hvorfor åpne døra til det?",
      "suggestion": "Det endrer ikke fortiden. Liten, jordet kontakt endrer hvordan fortiden treffer deg nå, fordi minnene kan få mindre kontroll over søvn, nummenhet og isolasjon."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      "text": "[Langsomt og flatt] Jeg vil ikke bli oversvømt; når jeg mister kontrollen, forsvinner jeg i flere dager.",
      "suggestion": "Det er nettopp derfor vi jobber i små slurker: jording først, berøre én kant, komme tilbake. Tempoet hjelper deg å beholde kontrollen mens minnene blir mindre alene og mindre eksplosive."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      "text": "[Langsomt og flatt] Følelser er problemet. Når jeg kjenner dem, drikker jeg, stenger av eller mister flere dager.",
      "suggestion": "Den erfaringen er nettopp grunnen til at vi går sakte. Vi skal ikke åpne alt; vi bygger nok trygghet til at følelser kan bli signaler du tåler, ikke kriser du må bedøve eller flykte fra."
    },
    "dp_providing-treatment-rationale_case-marcus_04": {
      "text": "[Flatt] Hvorfor legge merke til vaktsignalene når jeg er på vakt hele tiden?",
      "suggestion": "Rekkefølgen betyr noe. Hvis du lærer første steg fra scanning til nedstenging, kan du avbryte tidligere og komme tilbake til rommet før det trekker deg helt tilbake dit."
    },
    "dp_providing-treatment-rationale_case-marcus_05": {
      "text": "[Hyperårvåken] Hvordan skal det å sitte med følelser hjelpe marerittene, i stedet for å gjøre nettene verre?",
      "suggestion": "Dette handler ikke om å sitte endeløst i smerte. Vi stabiliserer deg før og etter dårlige netter og bearbeider små biter bare når det er trygt, fordi det gir etterdønningene mindre kraft."
    },
    "dp_providing-treatment-rationale_case-marcus_06": {
      "text": "[Flatt] Hvordan skal det å jobbe med kontakt hjelpe når det å være alene hindrer folk i å kreve noe av meg?",
      "suggestion": "Å være alene har beskyttet deg mot press og tap. Vi bygger kontakt i små, valgte doser, slik at nærhet blir noe du kan styre, ikke noe som fanger deg."
    },
    "dp_providing-treatment-rationale_case-marcus_07": {
      "text": "[Flatt] Hva er fremgang for meg hvis det å føle seg normal er urealistisk?",
      "suggestion": "Fremgang kan bety mer søvn, færre skvett, små øyeblikk av varme og å tåle å være nær en følelse en liten stund uten å stenge ned, fordi kontakt begynner å kjennes trygg i små doser."
    },
    "dp_providing-treatment-rationale_case-marcus_08": {
      "text": "[Lav stemme] Hvorfor skal jeg stole på dette hvis terapeuter vanligvis presser på for historier jeg ikke vil fortelle?",
      "suggestion": "Den mistilliten er viktig informasjon. Vi gjør arbeidet forutsigbart, forklarer hvorfor vi spør, og lar deg styre dybden, fordi tillit fortjenes gjennom tempo, ikke kreves."
    },
    "dp_providing-treatment-rationale_case-marcus_09": {
      "text": "[Nølende] Kan vi holde dette praktisk og ikke grave gjennom alt det vonde?",
      "suggestion": "Ja. Vi sikter oss inn på det som påvirker hverdagen nå og bruker korte drypp av følelsesarbeid bare der det hjelper, så praktiske endringer og dypere stoff holder seg i biter du tåler."
    },
    "dp_providing-treatment-rationale_case-marcus_10": {
      "text": "[Langsomt og flatt] Hva om jeg aldri føler meg normal igjen, og denne flatheten bare er den jeg er nå?",
      "suggestion": "Vi jager ikke en perfekt normal. Vi bygger mot mer søvn, mindre nedstenging og trygg kontakt, som er tegn på at følelser og nærhet kan komme tilbake i doser du tåler."
    },
    "dp_empathic-explorations_case-sara_01": {
      "text": "[Lavmælt] Bare det å se navnet hans dukke opp setter meg fortsatt ut, og jeg hater hvor mye det betyr.",
      "suggestion": "Å se navnet hans setter deg fortsatt ut, og det vonde er hvor mye det fortsatt betyr. La oss stoppe akkurat der og legge merke til hva som skjer i deg når du innrømmer at det betyr noe."
    },
    "dp_empathic-explorations_case-sara_02": {
      "text": "[Flau] Jeg sier til venner at det går bra, og så blir jeg redd for at de hører at det ikke gjør det.",
      "suggestion": "Du prøver å høres ut som om det går bra, samtidig som det kjennes risikabelt at de kan høre hvor lite bra det er. La oss bli litt ved risikoen for å bli hørt."
    },
    "dp_empathic-explorations_case-sara_03": {
      "text": "[På gråten] Jeg føler meg fortapt etter bruddet, som om jeg ikke vet hva jeg skal gjøre med kveldene.",
      "suggestion": "Kveldene er stedet der fortaptheten viser seg tydeligst. La oss være med én kveld et øyeblikk og merke hva som kjennes vanskeligst når du ikke vet hvor du skal gjøre av deg."
    },
    "dp_empathic-explorations_case-sara_04": {
      "text": "[Lavmælt] Jeg skrev «unnskyld» til ham tre ganger, og så skjønte jeg at jeg ikke vet hva jeg prøvde å reparere.",
      "suggestion": "Å skrive unnskyld var et forsøk på reparasjon, og så forsvant grunnen under det du prøvde å fikse. La oss senke tempoet ved det uklare stedet og merke hvilken følelse som kommer."
    },
    "dp_empathic-explorations_case-sara_05": {
      "text": "[Panisk] Jeg sletter bilder for å bevise at jeg er ferdig, får panikk og leter etter dem igjen.",
      "suggestion": "Én handling sier «bli ferdig», og så sier panikken at denne slutten ikke er så enkel. Kan vi stoppe opp i øyeblikket mellom å slette og å lete?"
    },
    "dp_empathic-explorations_case-sara_06": {
      "text": "[Flau] Når noen er snille mot meg, faller blikket før jeg rekker å stoppe det.",
      "suggestion": "Vennligheten kommer, og blikket ditt går ned før du egentlig rekker å ta den inn. La oss legge merke til øyeblikket rett før blikket faller."
    },
    "dp_empathic-explorations_case-sara_07": {
      "text": "[Lavmælt] I noen sekunder etter at jeg våkner, glemmer jeg at han er borte, og så husker jeg det.",
      "suggestion": "Det er den korte lettelsen, og så kommer tapet tilbake på én gang. La oss bli ved øyeblikket der du husker det, før du må gjøre noe med det."
    },
    "dp_empathic-explorations_case-sara_08": {
      "text": "[Flau] Jeg er trist, og så blir jeg flau over at jeg fortsatt snakker om det.",
      "suggestion": "Tristheten er her, og flauheten spør raskt om du fortsatt burde snakke om dette. La oss gi begge litt plass og merke hvilken som kjennes sterkest akkurat nå."
    },
    "dp_empathic-explorations_case-sara_09": {
      "text": "[På gråten] Når jeg ser par holde hender, blir jeg lei meg, og så føler jeg meg barnslig for å ville ha det.",
      "suggestion": "Det å se dem vekker ønsket, og så kommer skammen inn rundt ønsket. Kan vi bli ved ønsket et øyeblikk før skammen kommer inn?"
    },
    "dp_empathic-explorations_case-sara_10": {
      "text": "[Flau] Hvis jeg lar noen se hele rotet, ser jeg for meg at de stille ønsker at jeg skal slutte.",
      "suggestion": "En del av deg vil at noen skal se hvor vondt det er, og en annen del forventer at de ønsker at du skal stoppe. La oss være med draget mellom å ville bli sett og å vente avvisning."
    },
    "dp_empathic-explorations_case-michael_01": {
      "text": "[Bestemt] Når noen retter på én detalj, hører jeg det om igjen etterpå som om jeg ble hengt ut.",
      "suggestion": "Korrigeringen fortsetter å høres ut som å bli hengt ut. Kan vi bli litt ved den blottstilte følelsen før sinnet tar over?"
    },
    "dp_empathic-explorations_case-michael_02": {
      "text": "[Anspent og sint] Jeg går inn i møter allerede klar for at noen skal vise meg manglende respekt.",
      "suggestion": "Du går inn allerede på vakt, før noe har skjedd. Kan vi legge merke til hvordan det er å gå inn mens du allerede er klar for manglende respekt?"
    },
    "dp_empathic-explorations_case-michael_03": {
      "text": "[Anspent] Etter at jeg har eksplodert hjemme, sier jeg til meg selv at de presset meg, men jeg kjenner meg fortsatt elendig.",
      "suggestion": "En del sier at de presset deg, og en annen del sitter igjen med den elendige følelsen etterpå. La oss være litt med den elendige følelsen før diskusjonen om skyld tar over."
    },
    "dp_empathic-explorations_case-michael_04": {
      "text": "[Skamfull] Noen ganger får jeg lyst til å kaste telefonen etter en jobbmelding, og så føler jeg meg latterlig.",
      "suggestion": "Trangen kommer fort, og etterpå sitter du igjen og ser på deg selv med skam. Kan vi stoppe litt ved skammen som kommer etterpå, rett før den kaller deg latterlig?"
    },
    "dp_empathic-explorations_case-michael_05": {
      "text": "[Defensiv] Et lite sukk fra kona mi kan kjennes som om hun allerede har bestemt at jeg er problemet.",
      "suggestion": "Det lille sukket lander som om en avgjørelse allerede er tatt om deg. La oss senke tempoet ved den første oppflammingen og merke hva det kjennes som du blir anklaget for."
    },
    "dp_empathic-explorations_case-michael_06": {
      "text": "[Anspent] Når jeg ikke vet svaret, blir jeg anspent og begynner å snakke som om jeg vet det likevel.",
      "suggestion": "Å ikke vite blir vanskelig å la være synlig. Kan vi stoppe opp ved det anspente øyeblikket før det å høres sikker ut tar over?"
    },
    "dp_empathic-explorations_case-michael_07": {
      "text": "[Skamfull] Jeg leser hver melding om igjen før jeg sender, fordi én feil kan plage meg hele natten.",
      "suggestion": "Én mulig feil kan bli værende i timevis, så det blir vanskelig å slutte å sjekke."
    },
    "dp_empathic-explorations_case-michael_08": {
      "text": "[Anspent og sint] I det øyeblikket jeg føler meg svak, blir jeg sint og hører faren min si at det nettopp er problemet.",
      "suggestion": "«Svak» henter sinnet og farens dom inn veldig fort. Kan vi bli ved det øyeblikket der svakhet først viser seg?"
    },
    "dp_empathic-explorations_case-michael_09": {
      "text": "[Skamfull] Noen netter spiller jeg av hvert ord jeg sa, og prøver å finne hvor jeg rotet det til.",
      "suggestion": "Du spiller av hvert ord og leter etter øyeblikket der du gjorde feil. La oss legge merke til hvordan det kjennes inni deg når du tror du har funnet feilen."
    },
    "dp_empathic-explorations_case-michael_10": {
      "text": "[Sårbar] Jeg vil at sønnen min skal føle seg trygg rundt meg, og jeg vet ikke hvordan jeg skal si det uten å høres svak ut.",
      "suggestion": "Du vil så sterkt at han skal være trygg, og bare å si det ønsket kommer borti den gamle svakhetsregelen. La oss være med selve ønsket et øyeblikk før regelen lukker seg rundt det."
    },
    "dp_empathic-explorations_case-jason_01": {
      "text": "[Stille] Når det er min tur til å snakke, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Når oppmerksomheten vendes mot deg, forsvinner ordene. La oss stoppe ved akkurat det øyeblikket og merke hvordan det kjennes når alle venter."
    },
    "dp_empathic-explorations_case-jason_02": {
      "text": "[Nølende] Jeg holder fingeren over «send», og så sletter jeg meldingen fordi det å ville ha kontakt plutselig kjennes ydmykende.",
      "suggestion": "Ønsket om kontakt er der, og ydmykelsen gjør det vanskelig å la meldingen finnes. La oss være med ønsket et øyeblikk før slettingen skjer."
    },
    "dp_empathic-explorations_case-jason_03": {
      "text": "[Redd] Jeg ble invitert i bursdag, og en del av meg ble glad, men så begynte jeg å bekymre meg for at jeg kom til å ødelegge det.",
      "suggestion": "Det er glede over å bli invitert, og så begynner bekymringen å trenge seg på. La oss legge merke til gleden før bekymringen tar plassen."
    },
    "dp_empathic-explorations_case-jason_04": {
      "text": "[Stille] Hvis jeg møter blikket til noen for lenge, antar jeg at de kan se hvor klein jeg er.",
      "suggestion": "Blikkontakten begynner å kjennes som om de kan se hvor klein du føler deg, akkurat det du prøver å skjule. Kan vi bli ved det første sekundet av å bli sett?"
    },
    "dp_empathic-explorations_case-jason_05": {
      "text": "[Flau] Etter møter kan én liten pinlig pause få meg til å krympe meg resten av dagen.",
      "suggestion": "Den ene pausen kommer tilbake lenge etter møtet. La oss senke tempoet og merke hva flauheten sier om hvordan du tror du ble sett."
    },
    "dp_empathic-explorations_case-jason_06": {
      "text": "[Engstelig] Når jeg går inn i et rom, ser jeg etter utgangen før jeg bestemmer meg for om jeg skal prøve å delta.",
      "suggestion": "Utgangen må finnes først, før det å delta i det hele tatt kan vurderes. Kan vi bli litt ved den første skanningen av rommet?"
    },
    "dp_empathic-explorations_case-jason_07": {
      "text": "[Stille] Før jeg presenterer meg, begynner jeg å se for meg hvor rar jeg kommer til å høres ut.",
      "suggestion": "Allerede før du snakker, blir øyeblikket til en test på hvordan du kommer til å virke. La oss stoppe før presentasjonen og merke forestillingen om å høres rar ut."
    },
    "dp_empathic-explorations_case-jason_08": {
      "text": "[Nølende] Jeg sammenligner meg med alle der og bestemmer alltid at jeg er den minst interessante personen.",
      "suggestion": "Sammenligningen ender med deg nederst, og det gjør vondt før noen faktisk har avvist deg. Kan vi bli ved den såre følelsen et øyeblikk?"
    },
    "dp_empathic-explorations_case-jason_09": {
      "text": "[Blank] Noen ganger later jeg som jeg skriver melding, så småpraten ikke trenger å begynne.",
      "suggestion": "Telefonen gir deg en måte å sette kontakten på pause, og litt skjul for presset ved å måtte svare der og da."
    },
    "dp_empathic-explorations_case-jason_10": {
      "text": "[Stille og skamfull] Jeg følte meg ensom på søndag, men jeg ignorerte også to meldinger.",
      "suggestion": "Ensomheten og tilbaketrekkingen sitter side om side. Kan vi bli ved ensomheten som er der, selv mens meldingene blir stående ubesvart?"
    },
    "dp_empathic-explorations_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager er flate, men hvis tristhet flimrer, stenger jeg den ned før den brer seg.",
      "suggestion": "De fleste dager er flate, og det første glimtet av tristhet blir raskt stengt ned. La oss stoppe ved det glimtet og merke hva som sier at det kan bre seg."
    },
    "dp_empathic-explorations_case-laura_02": {
      "text": "[Redd] Hevede stemmer trenger ikke engang være rettet mot meg; jeg blir bare stille og venter på at det skal gå over.",
      "suggestion": "Selv når sinnet ikke er rettet mot deg, blir noe i deg stille og venter. Kan vi være litt med den stille ventingen?"
    },
    "dp_empathic-explorations_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er snille mot meg, begynner jeg å lete etter hva som er haken før jeg vet om jeg vil ta imot vennligheten.",
      "suggestion": "Vennligheten er der, og nesten med en gang leter du etter hva som er haken. Vi kan legge merke til hva som skjer i øyeblikket mellom å ville ta imot og å beskytte deg."
    },
    "dp_empathic-explorations_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg drikker vin om kvelden fordi støyen i hodet blir skarpere når huset blir stille.",
      "suggestion": "Vinen demper skarpheten som kommer når huset blir stille. La oss være med skarpheten et øyeblikk før vinen tar den ned."
    },
    "dp_empathic-explorations_case-laura_05": {
      "text": "[Fjern] Jeg våkner og forventer allerede at dagen skal gå galt, selv om ingenting har skjedd ennå.",
      "suggestion": "Du våkner allerede forberedt på at noe skal gå galt. Kan vi bli ved det første øyeblikket der du møter dagen med den forventningen?"
    },
    "dp_empathic-explorations_case-laura_06": {
      "text": "[Skamfull] Selv mild berøring får meg til å skvette, og etterpå hater jeg at reaksjonen min er så synlig.",
      "suggestion": "Skvetten kommer først, og så ser skammen ut til å komme fordi reaksjonen din har blitt sett. La oss bli ved skammen som kommer etter skvetten."
    },
    "dp_empathic-explorations_case-laura_07": {
      "text": "[Langsomt og flatt] Når gode nyheter kommer, kan jeg si de riktige ordene, men jeg kjenner nesten ingenting.",
      "suggestion": "Ordene kan svare, mens følelsen holder seg langt unna. Kan vi legge merke til det nesten-ingenting-stedet uten å presse det til å endre seg?"
    },
    "dp_empathic-explorations_case-laura_08": {
      "text": "[Fjern] Noen ganger åpner en sang noe i meg, og et øyeblikk kan jeg nesten kjenne tristheten.",
      "suggestion": "Sangen ser ut til å nå et sted nummenheten vanligvis dekker over, så litt tristhet får komme nær. Kan vi bli litt ved den nesten-tristheten før den forsvinner igjen?"
    },
    "dp_empathic-explorations_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg får skyldfølelse for å ønske trøst, som om det å trenge noe gjør meg til et problem.",
      "suggestion": "Skylden gjør ønsket om trøst til bevis på at du er et problem. La oss være nær selve ønsket og merke hva slags trøst det ber om."
    },
    "dp_empathic-explorations_case-laura_10": {
      "text": "[Langsomt og flatt] Jeg unngår filmer med slåssing fordi jeg ikke vil finne ut hva ett eneste rop gjør med meg.",
      "suggestion": "Du unngår filmen fordi ett eneste rop kan gjøre noe med deg. Kan vi bli ved det å ikke ville finne ut hva som skjer?"
    },
    "dp_empathic-explorations_case-carlos_01": {
      "text": "[Defensiv] Kona mi sier at hun hører tonefallet mitt endre seg før jeg selv merker at noe er galt.",
      "suggestion": "Hun hører endringen før du selv fanger den. Kan vi stoppe opp akkurat ved det tidlige skiftet før tonefallet endrer seg helt?"
    },
    "dp_empathic-explorations_case-carlos_02": {
      "text": "[Anspent] Etter en krangel vet jeg ikke om jeg skal si unnskyld eller late som om alt er greit.",
      "suggestion": "Etterpå finnes det to mulige bevegelser: reparere eller gå videre. Vi kan være litt med det usikre stedet mellom de to."
    },
    "dp_empathic-explorations_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg, kjenner jeg at jeg forsvinner, som om jeg ikke har noen kontur igjen.",
      "suggestion": "Å trekke deg tilbake treffer det stedet der du begynner å forsvinne, der konturene blir borte. La oss være ved det første tegnet på å forsvinne og merke hva som står på spill."
    },
    "dp_empathic-explorations_case-carlos_04": {
      "text": "[Skamfull] Jeg ser for meg igjen og igjen at gutten min skvetter, og jeg hater at han lærte den frykten av meg.",
      "suggestion": "Den scenen ser ut til å bære både kjærligheten til ham og smerten ved at frykten peker mot deg. La oss bli ved den smerten et øyeblikk."
    },
    "dp_empathic-explorations_case-carlos_05": {
      "text": "[Anspent] Når det blir rolig etter en krangel, begynner jeg å vente på at noen skal ta det opp igjen.",
      "suggestion": "Roen kjennes ikke helt rolig; en del av deg venter på at det skal komme tilbake. Vi kan legge merke til hvordan den ventingen kjennes."
    },
    "dp_empathic-explorations_case-carlos_06": {
      "text": "[Anspent og sint] Jeg ødelegger ting fordi kraften i meg kjennes som om den må lande et sted.",
      "suggestion": "Det er så mye kraft der at den kjennes som om den må lande et sted. Kan vi bli ved kraften rett før den går over i å ødelegge noe?"
    },
    "dp_empathic-explorations_case-carlos_07": {
      "text": "[Defensiv] Hvis jeg lar meg være myk, vet jeg ikke om folk vil respektere meg eller utnytte det.",
      "suggestion": "Mykhet bringer med seg usikkerhet om du vil bli respektert eller utnyttet. Kan vi være nær den usikkerheten uten å tvinge fram et svar?"
    },
    "dp_empathic-explorations_case-carlos_08": {
      "text": "[Sint, med knyttede never] Respektløshet treffer brystet som et slag, og jeg trenger at de forstår at det gjorde vondt.",
      "suggestion": "Respektløsheten treffer som både sårhet og sinne, og behovet for at de skal forstå, er rett der sammen med det. Kan vi bli ved sårheten inne i det behovet?"
    },
    "dp_empathic-explorations_case-carlos_09": {
      "text": "[Redd] Når jeg sier at jeg vil at de skal være trygge, faller sinnet, og noe mykere skremmer meg.",
      "suggestion": "Når sinnet faller, skremmer det mykere ønsket om trygghet deg. Kan vi være nær det myke og skremte stedet et øyeblikk?"
    },
    "dp_empathic-explorations_case-carlos_10": {
      "text": "[Redd] Når jeg begynner å føle meg liten i en krangel, får noe i meg panikk, som om noen kan ta hva de vil.",
      "suggestion": "Å føle seg liten henter den gamle faren nært, som om noen kan ta det de vil ha. La oss være med den første panikken ved å være liten før du må gjøre deg større."
    },
    "dp_empathic-explorations_case-nina_01": {
      "text": "[Sliten] I det øyeblikket jeg ber om hjelp, skyller skylden inn og jeg får lyst til å trekke det tilbake.",
      "suggestion": "Skylden skyller inn nesten med én gang behovet viser seg. La oss stoppe i øyeblikket før du trekker forespørselen tilbake og merke hva som kjennes farlig ved å trenge hjelp."
    },
    "dp_empathic-explorations_case-nina_02": {
      "text": "[Skyldpreget] Jeg bretter klær og svarer på meldinger så jeg slipper å kjenne bitterhet.",
      "suggestion": "Å holde deg i gang gjør at du slipper å kjenne bitterheten. Kan vi stoppe opp ved øyeblikket der det å stanse ville latt den komme nærmere?"
    },
    "dp_empathic-explorations_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg helt til neiet nesten forsvinner.",
      "suggestion": "Neiet er der, og så begynner forklaringen å myke det opp. Vi kan legge merke til hva som kjennes risikabelt ved å la neiet stå."
    },
    "dp_empathic-explorations_case-nina_04": {
      "text": "[Sliten] Selv det å be om en liten kjøretur kommer ut med tre unnskyldninger.",
      "suggestion": "Unnskyldningene kommer før behovet får stå på egne bein. La oss bli litt der behovet fortsatt er lite og se hvordan det er før du myker det opp."
    },
    "dp_empathic-explorations_case-nina_05": {
      "text": "[Skyldpreget] Et rotete hus får meg til å føle at alle kan se at jeg mislykkes.",
      "suggestion": "Rotet blir mer enn rot; det blir blottstillelse, som om folk kan lese nederlaget i rommet. La oss stoppe der rot blir til nederlag."
    },
    "dp_empathic-explorations_case-nina_06": {
      "text": "[Splittet] Når alle trenger meg samtidig, sier jeg ja før jeg vet hva jeg faktisk vil.",
      "suggestion": "Ja-et kommer før ditt eget ønske rekker å vise seg. Kan vi senke tempoet på stedet der alle andres behov kommer først?"
    },
    "dp_empathic-explorations_case-nina_07": {
      "text": "[Skyldpreget] Jeg drømmer om å bli tatt vare på, og så skammer jeg meg for at jeg vil det.",
      "suggestion": "Ønsket om å bli tatt vare på er der, og skammen kommer nesten ved siden av. La oss gi ønsket et øyeblikk for seg selv før skammen sier at det er feil."
    },
    "dp_empathic-explorations_case-nina_08": {
      "text": "[Unnskyldende] Jeg tar oppgaver før noen spør, og så blir jeg bitter for at ingen merker det.",
      "suggestion": "Du går foran spørsmålet, og så kommer bitterheten når prisen ikke blir sett. La oss bli ved prisen ingen ser."
    },
    "dp_empathic-explorations_case-nina_09": {
      "text": "[Splittet] Ved siden av andre mødre krymper jeg, som om de alle kan en regel jeg gikk glipp av.",
      "suggestion": "Ved siden av andre mødre krymper du og kjenner deg utenfor en regel alle andre ser ut til å kunne. Kan vi bli ved det krympende stedet og regelen du føler du gikk glipp av?"
    },
    "dp_empathic-explorations_case-nina_10": {
      "text": "[Sliten] Ved leggetid vet jeg ikke om jeg er trist, sint eller bare helt brukt opp.",
      "suggestion": "På slutten av dagen flyter følelsene sammen: tristhet, sinne, utmattelse. Kan vi være med den uklare følelsen før vi prøver å sortere den?"
    },
    "dp_empathic-explorations_case-aisha_01": {
      "text": "[Panisk] Hvis et svar ikke kommer, sier jeg til meg selv at det ikke burde bety noe, men så klarer jeg ikke å fokusere på noe annet.",
      "suggestion": "Én del sier at det ikke burde bety noe, og en annen del klarer ikke å slippe det manglende svaret. Hva merker du i den delen som ikke klarer å slippe?"
    },
    "dp_empathic-explorations_case-aisha_02": {
      "text": "[Forvirret og flau] Jeg kan be noen om ikke å gå, og noen sekunder senere vil jeg ha dem vekk fra meg. Jeg skjønner ikke hvilken del som egentlig er meg.",
      "suggestion": "Begge bevegelsene er der: å rekke ut og å skyve bort. Hva endrer seg inni deg i sekundene mellom å be dem bli og ville ha dem vekk?"
    },
    "dp_empathic-explorations_case-aisha_03": {
      "text": "[Desperat] Når jeg klorer, sier en del av meg at det ikke er så farlig, og en annen del er redd for at du skal dømme meg.",
      "suggestion": "Én del gjør kloringen liten, og en annen del følger med på om jeg dømmer. Når du sier det her, hvilken del kjennes nærmest?"
    },
    "dp_empathic-explorations_case-aisha_04": {
      "text": "[Såret og på vakt] Hvis du ser på klokka, begynner jeg å lure på om jeg bør slutte å snakke før du avslutter.",
      "suggestion": "Blikket mot klokka starter draget mot å stoppe først, før jeg kan avslutte. Hva er den første følelsen som kommer akkurat da?"
    },
    "dp_empathic-explorations_case-aisha_05": {
      "text": "[På vakt] Jeg spør folk om ting jeg egentlig halvveis vet, bare for å se om de svarer på riktig måte.",
      "suggestion": "Du lytter ikke bare etter svaret, men etter om det kommer på riktig måte. Hva merker du når det lander bare litt feil?"
    },
    "dp_empathic-explorations_case-aisha_06": {
      "text": "[Desperat] Når noen sier farvel, vet jeg at det er normalt, men jeg blir redd og sint samtidig.",
      "suggestion": "Farvel henter fram frykt og sinne samtidig, selv om en annen del sier at det burde være normalt. Ved ordet farvel, hvilken følelse kommer først?"
    },
    "dp_empathic-explorations_case-aisha_07": {
      "text": "[Panisk] Vennlighet får meg til å hulke, og en annen del av meg vil bare stikke.",
      "suggestion": "Vennlighet henter fram både hulking og trangen til å stikke samtidig. Hvor merker du deg selv først: i hulkingen, eller i draget mot å komme deg vekk?"
    },
    "dp_empathic-explorations_case-aisha_08": {
      "text": "[Skamfull] Når jeg husker det som ble gjort mot meg, får jeg lyst til å skrubbe huden selv om jeg vet at det ikke er noe der.",
      "suggestion": "Når du husker det, kommer en følelse av å ville skrubbe det bort, selv om ingenting synes. Hva merker du når skammen kommer nær her?"
    },
    "dp_empathic-explorations_case-aisha_09": {
      "text": "[Desperat] Jeg fortsetter å sjekke døra, og jeg vet ikke om jeg er sint fordi du kommer til å gå, eller redd for at du skal glemme meg.",
      "suggestion": "Ved døra er sinne og frykt filtret sammen: å bli forlatt, å bli glemt. Når du ser mot døra nå, hvilken side kjennes nærmest?"
    },
    "dp_empathic-explorations_case-aisha_10": {
      "text": "[Såret] Hvis du avlyser, sier en del av meg at jeg ikke skal komme tilbake, samtidig som en annen del vil spørre når du er her igjen.",
      "suggestion": "Begge delene dukker opp rundt avlysningen: delen som vil forsvinne, og delen som trenger å vite at du fortsatt har en plass her. Hvor kjenner du den splittelsen sterkest?"
    },
    "dp_empathic-explorations_case-david_01": {
      "text": "[Kontrollert] Når hun sier at jeg er kald, vil en del av meg bevise at hun tar feil, og en annen del vil forsvinne.",
      "suggestion": "Én del beveger seg mot å bevise noe, en annen mot å forsvinne. Hva merker du i øyeblikket før en av sidene tar over?"
    },
    "dp_empathic-explorations_case-david_02": {
      "text": "[Kontrollert] Du virker rolig når jeg snakker om nederlag, og jeg vet ikke om jeg respekterer det eller misliker det.",
      "suggestion": "Roen du ser, lander på to måter samtidig: noe respekterer den, og noe misliker den. Hvilken side er tydeligst når du snakker om roen min?"
    },
    "dp_empathic-explorations_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg dømt, glatter jeg skjorten og begynner å ramse opp prestasjoner.",
      "suggestion": "Når dommen dukker opp, kommer prestasjonene raskt inn. Hva er det første tegnet på at du blir dømt, før listen starter?"
    },
    "dp_empathic-explorations_case-david_04": {
      "text": "[Kontrollert] Ros virker kanskje i ti sekunder; så begynner jeg å lete etter det de ikke fikk med seg.",
      "suggestion": "Rosen når deg kort, og så tar letingen etter det som manglet over. Hvor slutter den å lande?"
    },
    "dp_empathic-explorations_case-david_05": {
      "text": "[Avvisende] I vanskelige samtaler sjekker jeg telefonen i det øyeblikket jeg føler meg presset opp i et hjørne.",
      "suggestion": "Når du føler deg presset opp i et hjørne, gir telefonen deg litt avstand. Hvordan kjennes det å være presset akkurat før telefonen kommer fram?"
    },
    "dp_empathic-explorations_case-david_06": {
      "text": "[Irritert] Når barna gråter, blir jeg utålmodig før jeg engang skjønner hvorfor.",
      "suggestion": "Barnas tårer henter fram utålmodighet før du engang vet hvorfor. Hvor merker du det første utålmodige rykket?"
    },
    "dp_empathic-explorations_case-david_07": {
      "text": "[Såret, men skarp] Å innrømme at jeg tar feil får ansiktet til å brenne, som om alle kan se nederlaget.",
      "suggestion": "Å innrømme at du tar feil får ansiktet til å brenne, som om nederlaget plutselig blir synlig. Hva sier den varmen i øyeblikket før du dekker den til?"
    },
    "dp_empathic-explorations_case-david_08": {
      "text": "[Fjern] Siden affæren vet jeg ikke om jeg vil ha tilgivelse eller bare bli latt i fred.",
      "suggestion": "Det er et drag mot tilgivelse og et annet mot å bli latt i fred. Hvilket ønske kjennes tryggest å la meg se?"
    },
    "dp_empathic-explorations_case-david_09": {
      "text": "[Såret, men skarp] Jeg vil ha anerkjennelse uten å måtte be om det, fordi det å be får meg til å føle meg ynkelig.",
      "suggestion": "Du vil ha anerkjennelsen, og det å be om den henter straks fram den ynkelige følelsen. Hvor blir ønsket om anerkjennelse til skam?"
    },
    "dp_empathic-explorations_case-david_10": {
      "text": "[Kontrollert] Når noen kaller arbeidet mitt fint, hører jeg ordinært, og jeg klarer ikke å slippe det.",
      "suggestion": "«Fint» lander som ordinært, og ordinært blir vanskelig å tåle. Hva merker du i øyeblikket før du må bevise mer?"
    },
    "dp_empathic-explorations_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager er jeg nummen, og så treffer noe meg, og jeg vet ikke hva det er.",
      "suggestion": "Nummenheten holder, og så bryter noe gjennom uten navn. Hva merker du ved det første tegnet på at noe kommer?"
    },
    "dp_empathic-explorations_case-marcus_02": {
      "text": "[Hyperårvåken] Etter mareritt vet jeg at jeg burde snakke om dem, men detaljene kjennes langt unna, og jeg vet ikke hvor jeg skal begynne.",
      "suggestion": "Detaljene holder seg langt unna, og startpunktet glipper. Hva merker du idet du prøver å begynne?"
    },
    "dp_empathic-explorations_case-marcus_03": {
      "text": "[Stille og på vakt] Folkemengder får skuldrene til å heve seg, og jeg holder meg ved veggen uten å bestemme det.",
      "suggestion": "Veggen ser ut til å bety noe før du bestemmer noe som helst. Hva gir det deg å være nær den i det første sekundet?"
    },
    "dp_empathic-explorations_case-marcus_04": {
      "text": "[Lav stemme] Etter mørkets frembrudd begynner jeg å lure på om det å være alene er tryggere, eller om det bare gjør meg verre.",
      "suggestion": "Alenetilværelsen kjennes som beskyttelse og kanskje skade på samme tid. Hvilken side av spørsmålet kjennes nærmest etter mørkets frembrudd?"
    },
    "dp_empathic-explorations_case-marcus_05": {
      "text": "[Lav stemme] Etter jobb sitter jeg i bilen fordi leiligheten kjennes for stille til å gå inn i.",
      "suggestion": "Bilen gir deg en pause før den stille leiligheten. Hva krever stillheten av deg før du åpner døren?"
    },
    "dp_empathic-explorations_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg lar telefonen gå til svarer fordi å svare betyr at jeg kanskje må forklare hvorfor jeg ikke har det bra.",
      "suggestion": "Når telefonen ringer, kommer muligheten for å måtte forklare. Hva kjennes for mye i det første øyeblikket?"
    },
    "dp_empathic-explorations_case-marcus_07": {
      "text": "[Flatt] Gode øyeblikk skjer, men jeg stoler ikke nok på dem til å la dem telle.",
      "suggestion": "Det gode øyeblikket kommer, og mistilliten bryter inn før det får telle. Hva skjer akkurat der det nesten begynner å bety noe?"
    },
    "dp_empathic-explorations_case-marcus_08": {
      "text": "[Lav stemme] En plutselig lyd skjærer gjennom meg, og før jeg rekker å tenke, skanner jeg rommet.",
      "suggestion": "Lyden skjærer gjennom, og skanningen starter før tankene rekker å hente seg inn. I det første sekundet etter lyden, hvor går oppmerksomheten?"
    },
    "dp_empathic-explorations_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg tar ikke telefonen når familien ringer, fordi jeg ikke vil finne ut hva jeg kjenner.",
      "suggestion": "Å la telefonen ringe ut holder følelsen unna en stund. Hva begynner å komme nær når du ser for deg å svare?"
    },
    "dp_empathic-explorations_case-marcus_10": {
      "text": "[Flatt] Når folk sier at jeg ikke burde være så mye alene, sier jeg at det er bedre sånn, men jeg blir gående og tenke på det etterpå.",
      "suggestion": "Å si at det er bedre sånn beskytter deg mot noe, og tanken følger likevel med videre. Hva merker du etter at du har sagt det?"
    },
    "dp_empathic-evocations_case-sara_01": {
      "text": "[Lavmælt] Etter middag merker jeg hvor stille leiligheten er, og så begynner jeg å sjekke mobilen igjen.",
      "suggestion": "Stillheten legger seg rundt deg etter middag, og mobilen blir det lille stedet der han fortsatt kanskje kan dukke opp."
    },
    "dp_empathic-evocations_case-sara_02": {
      "text": "[Nummen] Jeg sier til folk at det går bra, men jeg kjenner meg flat når jeg sier det.",
      "suggestion": "Det går bra kommer glatt ut, mens noe under har blitt blekt og stille."
    },
    "dp_empathic-evocations_case-sara_03": {
      "text": "[Trist] Jeg fant jakken hans i skapet og ble stående der lenger enn det ga mening.",
      "suggestion": "Den jakken stopper deg i døråpningen, en liten bit av ham som trekker hele tapet tilbake i rommet."
    },
    "dp_empathic-evocations_case-sara_04": {
      "text": "[Lavmælt] Noen morgener glemmer jeg det et sekund, og så husker jeg at vi ikke er sammen lenger.",
      "suggestion": "Det er det ene klare sekundet, og så lander bruddet tilbake på deg som en tyngde i senga."
    },
    "dp_empathic-evocations_case-sara_05": {
      "text": "[Flau] Når venner spør hvordan det går, svarer jeg kort og bytter tema.",
      "suggestion": "Det korte svaret lukker døra raskt, mens det egentlige svaret står trangt i halsen."
    },
    "dp_empathic-evocations_case-sara_06": {
      "text": "[Trist] Jeg blir sittende på mobilen sent fordi det er vanskelig å legge seg nå.",
      "suggestion": "Skjermen blir et lite nattlys mot den tomme siden av senga, og holder den mørke følelsen akkurat utenfor rekkevidde."
    },
    "dp_empathic-evocations_case-sara_07": {
      "text": "[Lavmælt] En sang kom på i en butikk, og jeg måtte gå ut før jeg begynte å gråte.",
      "suggestion": "De første tonene treffer deg der i butikken, og plutselig kommer sorgen helt nær."
    },
    "dp_empathic-evocations_case-sara_08": {
      "text": "[Flau] Jeg tenker stadig at jeg kanskje gjorde noe galt, men jeg finner ikke ut hva.",
      "suggestion": "Tankene leter etter feilen, som om én løs tråd kan få hele bruddet til å gi mening."
    },
    "dp_empathic-evocations_case-sara_09": {
      "text": "[Trist] Noen ganger setter jeg meg på gulvet i stedet for å legge meg.",
      "suggestion": "Gulvet blir stedet du folder deg sammen når senga kjennes for åpen og for bred."
    },
    "dp_empathic-evocations_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, blir jeg brydd og ser bort.",
      "suggestion": "Vennligheten kommer nær, nesten for varm å ta inn, så blikket faller til tryggere grunn."
    },
    "dp_empathic-evocations_case-michael_01": {
      "text": "[Fast] Når noen korrigerer meg foran teamet, blir jeg varm og slutter å høre etter.",
      "suggestion": "Varmen skyter opp, som om rommet snevrer seg inn til ett skarpt merke på deg."
    },
    "dp_empathic-evocations_case-michael_02": {
      "text": "[Anspent] Jeg går inn i møter og forventer at folk skal rote det til, og jeg hater at jeg gjør det.",
      "suggestion": "Du kommer inn allerede i spenn, som om en del av deg står vakt ved døra før noen har sagt noe."
    },
    "dp_empathic-evocations_case-michael_03": {
      "text": "[Anspent] På slutten av dagen skjønner jeg hvor mange kommentarer jeg ikke sa.",
      "suggestion": "Det er som om hele dagen er bitt sammen, med hver skarpe setning fortsatt holdt bak tennene."
    },
    "dp_empathic-evocations_case-michael_04": {
      "text": "[Flau] Når jeg har smelt, blir jeg flau etterpå, men jeg prøver mest å ikke tenke på det.",
      "suggestion": "Flauheten blir liggende der etterpå, tung og ubehagelig, mens du prøver å gå utenom den."
    },
    "dp_empathic-evocations_case-michael_05": {
      "text": "[Defensiv] Når kona mi sukker, går jeg ut fra at hun dømmer meg.",
      "suggestion": "Det lille sukket kan krysse rommet som en anklage, og systemet ditt spenner seg før hun har sagt et ord."
    },
    "dp_empathic-evocations_case-michael_06": {
      "text": "[Anspent] Hvis noen sier ro deg ned, blir jeg sintere med en gang.",
      "suggestion": "De to ordene tenner fyrstikken, og ilden er i gang før du rekker å vite hva som ble antent."
    },
    "dp_empathic-evocations_case-michael_07": {
      "text": "[Flau] Når jeg ikke vet svaret, føler jeg meg blottstilt.",
      "suggestion": "Å ikke vite åpner et nakent sted, som om all kompetansen du støtter deg på plutselig står uten skjold."
    },
    "dp_empathic-evocations_case-michael_08": {
      "text": "[Defensiv] Noen ganger smeller jeg med dører fordi jeg ikke vet hva annet jeg skal gjøre med følelsen.",
      "suggestion": "Døra tar følelsen for deg, høyt nok til å dekke det mindre stikket under."
    },
    "dp_empathic-evocations_case-michael_09": {
      "text": "[Skamfull] Å tenke på å si unnskyld først får meg til å føle meg svak.",
      "suggestion": "Unnskyldningen kjennes som å gå ned på lavere grunn, med alle andre plutselig høyere rundt deg."
    },
    "dp_empathic-evocations_case-michael_10": {
      "text": "[Skamfull] Om natten spiller jeg av krangelen og hører hvor skarp jeg hørtes ut.",
      "suggestion": "Huset blir stille, men din egen stemme fortsetter å runge på kjøkkenet, fortsatt skarp etter at krangelen er over."
    },
    "dp_empathic-evocations_case-jason_01": {
      "text": "[Stille] Når det er min tur i et møte, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Øyeblikket vender seg mot deg, og setningen glipper unna som om rommet trekker den bort."
    },
    "dp_empathic-evocations_case-jason_02": {
      "text": "[Nølende] I møter holder jeg hendene under bordet fordi jeg er redd folk skal legge merke til meg.",
      "suggestion": "Til og med hendene må holdes skjult, som om ett lite tegn kan røpe deg."
    },
    "dp_empathic-evocations_case-jason_03": {
      "text": "[Engstelig] Jeg øver på hva jeg skal si, men når folk ser på meg, fryser jeg.",
      "suggestion": "Alle de innøvde ordene står klare, og så lander blikkene på deg og alt låser seg bak et lag is."
    },
    "dp_empathic-evocations_case-jason_04": {
      "text": "[Stille] Hvis folk ler i nærheten, antar jeg at jeg gjorde noe rart.",
      "suggestion": "Latteren går gjennom rommet og peker seg mot deg før du vet hva den handlet om."
    },
    "dp_empathic-evocations_case-jason_05": {
      "text": "[Nølende] Når oppmerksomheten vender seg mot meg, blir jeg stillere og prøver å ikke bevege meg så mye.",
      "suggestion": "Det er som om hele kroppen begynner å krympe i stolen, prøver å være til stede uten å bli sett."
    },
    "dp_empathic-evocations_case-jason_06": {
      "text": "[Engstelig] Når noen gir meg et kompliment, tror jeg egentlig ikke på det.",
      "suggestion": "Komplimentet berører overflaten og glir av før det når stedet som trenger det."
    },
    "dp_empathic-evocations_case-jason_07": {
      "text": "[Stille] Søndag kveld begynner jeg å bli nedstemt, men jeg scroller mest.",
      "suggestion": "Uka kommer for tidlig inn i rommet, og scrollingen blir et lite bevegelig lys mot tyngden."
    },
    "dp_empathic-evocations_case-jason_08": {
      "text": "[Stille og skamfull] Jeg skriver enkle meldinger om og om igjen, og noen ganger sender jeg dem ikke.",
      "suggestion": "Én liten melding blir en smal døråpning, og hver omskriving er et nytt skritt tilbake fra å bli sett."
    },
    "dp_empathic-evocations_case-jason_09": {
      "text": "[Engstelig] Selv det å si hei kan høres feil ut for meg etterpå.",
      "suggestion": "Det lille hei-et blir hengende i ørene dine, som om ett vanlig ord har blitt bevis mot deg."
    },
    "dp_empathic-evocations_case-jason_10": {
      "text": "[Stille] I grupper følger jeg med på hvor utgangen er.",
      "suggestion": "Utgangen blir det tryggeste stedet i rommet, stedet blikket holder fast i når oppmerksomheten kommer for nær."
    },
    "dp_empathic-evocations_case-laura_01": {
      "text": "[Flatt og på vakt] De fleste morgener står jeg opp, lager kaffe, svarer på meldingene jeg må svare på, og merker at jeg fortsatt ikke kjenner særlig mye.",
      "suggestion": "Morgenen har bevegelse, men lite varme, som om du går gjennom rommene etter at fargene er tappet ut av dem."
    },
    "dp_empathic-evocations_case-laura_02": {
      "text": "[Fjern] Hvis en dør smeller på jobb, vet jeg at det bare er en dør, men i et minutt klarer jeg ikke å følge med på hva folk sier.",
      "suggestion": "Lyden kommer før fornuften, en gammel alarm som tar over rommet mens samtalen glir videre uten deg."
    },
    "dp_empathic-evocations_case-laura_03": {
      "text": "[Sviktet] Jeg fant ut at han hadde truffet en annen, og nå, når han er vennlig, tenker jeg mest: ikke vær dum igjen.",
      "suggestion": "Vennligheten hans treffer et sted som allerede har trukket skoddene igjen, et forsøk på å ikke bli lurt to ganger."
    },
    "dp_empathic-evocations_case-laura_04": {
      "text": "[Skamfull] Datteren min sendte bilder fra en tur, og jeg så jo at det var fint, men jeg kjente meg mest tom og fikk dårlig samvittighet for det.",
      "suggestion": "Bildet viser liv og nærhet, og inni deg er det som et vindu du kan se gjennom uten å komme inn."
    },
    "dp_empathic-evocations_case-laura_05": {
      "text": "[Fjern] Vin hjelper meg å skru av om kvelden. Jeg heller i glasset før jeg egentlig vet hva jeg prøver å slippe å tenke på.",
      "suggestion": "Glasset blir som en dimmer, det demper rommet inni deg før noe skarpt rekker å komme helt fram."
    },
    "dp_empathic-evocations_case-laura_06": {
      "text": "[Langsomt og flatt] Jeg ligger våken og lytter etter lyder i gangen, og sier til meg selv at det ikke er noe å lytte etter.",
      "suggestion": "Selv under dyna står en del av deg ved døra på vakt, lytter ut i mørket etter tegn på fare."
    },
    "dp_empathic-evocations_case-laura_07": {
      "text": "[Anspent og på gråten] Noen ganger kommer det en sang på, og øynene fylles, så jeg bytter før jeg egentlig vet hva det handler om.",
      "suggestion": "Musikken åpner en liten sprekk i nummenheten, og du vender deg bort før følelsen får plass til å komme gjennom."
    },
    "dp_empathic-evocations_case-laura_08": {
      "text": "[Håpløs] Når eksen min begynner å forklare hvorfor han dro, slutter jeg å prøve å svare og venter bare på at det skal være over.",
      "suggestion": "Under forklaringene hans folder du deg innover og blir stille, kraften går ut av deg til det føles nytteløst å svare."
    },
    "dp_empathic-evocations_case-laura_09": {
      "text": "[Anspent og på vakt] Når noen sier noe vennlig til meg, retter jeg det som regel i hodet eller venter på at det skal komme en hake ved det.",
      "suggestion": "Vennligheten treffer en låst dør, og bak den strammer noe seg før ordene kan tas imot."
    },
    "dp_empathic-evocations_case-laura_10": {
      "text": "[Flatt og på vakt] Jeg har en bag pakket ved døra. Jeg vet det høres dramatisk ut, men jeg sover bedre når jeg vet at den står der.",
      "suggestion": "Bagen står der som en stille utvei, og hjelper den delen av deg som aldri helt stoler på huset, til å roe seg litt."
    },
    "dp_empathic-evocations_case-carlos_01": {
      "text": "[Defensiv] Når noen gliser til meg på arbeidslaget, blir jeg fort anspent og bruker resten av timen på å sørge for at ingen tror jeg lot det passere.",
      "suggestion": "Det gliset sender strøm gjennom deg, og hele dagen dreier mot å bevise at ingen kan behandle deg sånn."
    },
    "dp_empathic-evocations_case-carlos_02": {
      "text": "[Macho] Faren min pleide å si at bare svake menn snakker om følelser, og jeg hører det fortsatt når folk spør hva som skjer med meg.",
      "suggestion": "Stemmen hans står fortsatt i rommet som en ordre, og låser de mykere stedene før noen får se dem."
    },
    "dp_empathic-evocations_case-carlos_03": {
      "text": "[Anspent og sint] Jeg går fram og tilbake på kjøkkenet etter krangler, for hvis jeg setter meg ned, begynner jeg å tenke på det hun sa og blir mer oppjaget.",
      "suggestion": "Du sliter et spor i kjøkkengulvet, prøver å presse ladningen ned gjennom føttene før den eksploderer ut."
    },
    "dp_empathic-evocations_case-carlos_04": {
      "text": "[Skamfull] Jeg husker stadig blikket til sønnen min etter at jeg ropte, men så sier jeg til meg selv at alle fedre mister det av og til.",
      "suggestion": "Blikket hans blir liggende under unnskyldningene, som et lite blåmerke av skam du prøver å dekke med forklaringer."
    },
    "dp_empathic-evocations_case-carlos_05": {
      "text": "[Defensiv] Når kona mi sier at jeg drikker for mye, begynner jeg å ramse opp alt jeg gjør for familien så hun skal la det ligge.",
      "suggestion": "Ordene hennes lander som en anklage, og listen over alt du bidrar med blir rustning mot å kjenne deg dømt."
    },
    "dp_empathic-evocations_case-carlos_06": {
      "text": "[Skamfull] Etter at jeg har eksplodert, blir alle stille, og jeg kommer vanligvis med en kommentar så vi kan gå videre.",
      "suggestion": "Etter smellet blir rommet forsiktig, og kommentaren blir et raskt sveip over glass ingen vil ta på."
    },
    "dp_empathic-evocations_case-carlos_07": {
      "text": "[Sint, stramt kontrollert] Jeg blir så sint at jeg slutter å snakke, for hvis jeg fortsetter, stoler jeg ikke på hva jeg kommer til å si.",
      "suggestion": "Ordene klemmes fast bak tennene, all varmen holdes inne fordi én setning til kan rive seg løs."
    },
    "dp_empathic-evocations_case-carlos_08": {
      "text": "[Verdiløs] Hvis jeg gir meg foran sønnen min, føler jeg at jeg har lært ham å ikke respektere meg.",
      "suggestion": "Å gi seg føles som å krympe i øynene hans, som om omrisset ditt som far blekner rett foran ham."
    },
    "dp_empathic-evocations_case-carlos_09": {
      "text": "[Anspent og sint] I bilen etter en krangel holder jeg hardt i rattet og sier til meg selv at jeg ikke skal reagere før jeg kommer hjem.",
      "suggestion": "Hendene dine blir bremsene på hele reaksjonen, holder varmen på plass til kjøreturen er over."
    },
    "dp_empathic-evocations_case-carlos_10": {
      "text": "[Bekymret] Jeg er redd sønnen min lærer å sjekke humøret mitt før han bestemmer seg for om det er trygt å snakke.",
      "suggestion": "Den frykten treffer hardt, tanken på at sinnet ditt kan bli været han sjekker før han våger å komme nær."
    },
    "dp_empathic-evocations_case-nina_01": {
      "text": "[Sliten] Idet jeg setter meg ned, kommer jeg på tre ting jeg ikke har gjort, og så reiser jeg meg igjen.",
      "suggestion": "Hvilen rekker knapt å berøre deg før plikten kaller deg opp igjen, som om stolen ikke får holde på deg."
    },
    "dp_empathic-evocations_case-nina_02": {
      "text": "[Såret] Noen ganger føler jeg meg brukt, og så tenker jeg med en gang på alle grunnene til at jeg burde være mer takknemlig.",
      "suggestion": "Såret kommer opp et øyeblikk, og så trekkes takknemligheten over det som et teppe før noen får se."
    },
    "dp_empathic-evocations_case-nina_03": {
      "text": "[Verdiløs] Når jeg trenger hjelp, blir jeg flau, som om jeg har feilet med de grunnleggende tingene alle andre får til.",
      "suggestion": "Å trenge hjelp får deg til å krympe, som om én forespørsel kan senke hele verdien din i rommet."
    },
    "dp_empathic-evocations_case-nina_04": {
      "text": "[Sliten] Jeg smiler og fortsetter, for hvis jeg stopper, spør folk om noe er galt, og da må jeg håndtere det også.",
      "suggestion": "Smilet blir enda en oppgave, strukket over trettheten så ingen trenger å se for nøye etter."
    },
    "dp_empathic-evocations_case-nina_05": {
      "text": "[Unnskyldende] Utover kvelden er jeg så sliten at jeg knapt klarer å svare sønnen min, og så beklager jeg fordi han ikke har bedt om en sliten mor.",
      "suggestion": "Trettheten ligger tungt i stemmen din, og til og med det blir noe du føler du må gjøre opp for."
    },
    "dp_empathic-evocations_case-nina_06": {
      "text": "[Splittet] Å si nei gjør meg panisk, selv ved små ting, fordi jeg ser for meg at den andre trekker seg stille unna.",
      "suggestion": "Nei-et virker lite utenpå og enormt inni, som om én grense kan løsne båndet som holder kjærligheten nær."
    },
    "dp_empathic-evocations_case-nina_07": {
      "text": "[Sliten] Jeg vasker sent på kvelden selv om jeg er helt utslitt, fordi det ødelegger hele morgenen å våkne til et rotete kjøkken.",
      "suggestion": "Benken tørkes av igjen, et midnattsforsøk på å gjøre morgendagen trygg før du får lov til å stoppe."
    },
    "dp_empathic-evocations_case-nina_08": {
      "text": "[Skyldpreget] Hvis huset er rotete, skammer jeg meg før noen sier noe, og begynner å forklare hva som kom i veien.",
      "suggestion": "Skammen kommer før kritikken, og forklaringene stiller seg opp som vitner for forsvaret ditt."
    },
    "dp_empathic-evocations_case-nina_09": {
      "text": "[På gråten] Jeg gråter på kjøkkenet der ingen legger merke til det, skyller ansiktet og går ut igjen.",
      "suggestion": "Tårene gjemmes blant vanlige kjøkkenlyder, skylles raskt bort så husholdningen slipper å stoppe opp."
    },
    "dp_empathic-evocations_case-nina_10": {
      "text": "[Ensom] Jeg venter fortsatt på at eksen min skal legge merke til hvor sliten jeg er, selv om han ikke bor her lenger og sikkert aldri la merke til det.",
      "suggestion": "En del av deg ser fortsatt etter at han skal løfte blikket, venter på at det gamle livet endelig skal se hvor mye du bar."
    },
    "dp_empathic-evocations_case-aisha_01": {
      "text": "[Mistroisk] Du sier at notatene dine er private, men hvis du skriver at jeg er ustabil, får jeg ikke vite det før det allerede er der ute.",
      "suggestion": "Notatet kan kjennes som et svik som skjer stille etter at du har gått, en side som kan vende seg mot deg uten forvarsel."
    },
    "dp_empathic-evocations_case-aisha_02": {
      "text": "[Desperat] Jeg kan be noen om å bli og så be dem la meg være i fred i samme samtale, og akkurat da mener jeg begge deler.",
      "suggestion": "Følelsen svinger fra å gripe etter ermet deres til å smelle døra igjen, og begge bevegelsene prøver å overleve den samme frykten."
    },
    "dp_empathic-evocations_case-aisha_03": {
      "text": "[Forvirret] Jeg klarer ikke si om jeg er sint, redd eller tom; innen jeg har valgt ett ord, har det allerede endret seg.",
      "suggestion": "Alt er viklet sammen og i bevegelse, som å prøve å åpne én dør mens hele gangen flytter på seg rundt deg."
    },
    "dp_empathic-evocations_case-aisha_04": {
      "text": "[Panisk] Jeg klorer meg på armen når jeg begynner å føle meg uvirkelig, fordi det å se rundt i rommet og navngi ting ikke alltid får meg tilbake.",
      "suggestion": "Kloringen blir et nødsignal, et forsøk på å gjøre deg virkelig igjen når rommet begynner å drive bort."
    },
    "dp_empathic-evocations_case-aisha_05": {
      "text": "[Panisk] Når skriveprikkene forsvinner, sjekker jeg meldingen igjen og igjen, selv om jeg vet at de sikkert bare ble opptatt.",
      "suggestion": "Prikkene som forsvinner, trekker kontakttråden ut av hendene dine, og plutselig henger hele forbindelsen i luften."
    },
    "dp_empathic-evocations_case-aisha_06": {
      "text": "[Desperat] Når noen sier ha det, vet jeg at det er normalt, men jeg begynner å forhandle inni meg om hvordan jeg kan få dem til å bli litt lenger.",
      "suggestion": "Ha det får rommet til å tippe før logikken rekker å hjelpe, og du strekker deg allerede etter noe som kan hindre dem i å forsvinne."
    },
    "dp_empathic-evocations_case-aisha_07": {
      "text": "[Benektende] Forrige uke fikk jeg selvmordstanker da han forsvant, men så tekstet han tilbake, så kanskje jeg har det greit nå og vi ikke trenger å gjøre det til en stor greie.",
      "suggestion": "Teksten hans kjennes som et plutselig gulv under føttene, mens fallet under fortsatt ligger der og venter på å bli lagt merke til."
    },
    "dp_empathic-evocations_case-aisha_08": {
      "text": "[Såret] Når noen kaller meg for mye, hører jeg det om og om igjen etterpå, særlig når jeg vil sende melding og prøver å la være.",
      "suggestion": "For mye lander som et stempel over deg, sterkt og vanskelig å vaske bort, akkurat der ønsket om kontakt bor."
    },
    "dp_empathic-evocations_case-aisha_09": {
      "text": "[På gråten] Når noen er milde med meg, gråter jeg før jeg skjønner hvorfor, og så blir jeg flau og vil at de skal slutte å være snille.",
      "suggestion": "Mildheten rører ved veggen og tårene strømmer gjennom, og så prøver skammen å skyve omsorgen ut igjen."
    },
    "dp_empathic-evocations_case-aisha_10": {
      "text": "[Panisk] Jeg sjekker døra mens vi snakker, fordi en del av meg forventer at du reiser deg og går hvis jeg sier for mye.",
      "suggestion": "Blikket ditt vokter døråpningen, følger med på øyeblikket der jeg kan forsvinne fordi behovet ble for synlig."
    },
    "dp_empathic-evocations_case-david_01": {
      "text": "[Kontrollert] Når kona mi kaller meg kald, blir jeg stille og kommer med én presis kommentar som jeg vet kommer til å treffe hardt.",
      "suggestion": "Ordet kald brenner bak tennene, og den presise kommentaren kommer ut som en rustning som smekker igjen med et blad på."
    },
    "dp_empathic-evocations_case-david_02": {
      "text": "[Verdiløs] Hvis jeg ikke er den beste personen i rommet, føler jeg meg vanlig, og vanlig er nesten verre enn å mislykkes.",
      "suggestion": "Gulvet åpner seg under det å være vanlig, og du faller fra imponerende til ingenting før noen andre engang har dømt deg."
    },
    "dp_empathic-evocations_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg liten, begynner jeg å snakke om det jeg har fått til, selv om samtalen egentlig ikke handlet om jobb.",
      "suggestion": "Prestasjonene skynder seg inn som en høyere versjon av deg og stiller seg rundt det lille, såre stedet før det kan bli sett."
    },
    "dp_empathic-evocations_case-david_04": {
      "text": "[Kontrollert] Når jeg føler meg presset opp i et hjørne, retter jeg på skjorta, senker stemmen og begynner å forklare merittene mine så rommet husker hvem jeg er.",
      "suggestion": "Skjorta, stemmen og merittene blir rustningsdeler som festes én etter én før slaget kan lande."
    },
    "dp_empathic-evocations_case-david_05": {
      "text": "[Skamfull] Uansett hvor mye jeg får til, tror jeg fortsatt at det er noe galt med meg, og jeg hater at suksess ikke har fikset det.",
      "suggestion": "Hver suksess legger på et nytt polert lag, mens det under ligger en flekk du frykter at prestasjoner aldri kan dekke."
    },
    "dp_empathic-evocations_case-david_06": {
      "text": "[Skamfull] Ansiktet til barnet mitt etter at jeg smeller, plager meg mer enn jeg hadde ventet, men jeg tar meg fortsatt i å forberede et forsvar.",
      "suggestion": "Det forsiktige ansiktet glir forbi alle argumentene, et treff på stedet ingen forsvar helt klarer å beskytte."
    },
    "dp_empathic-evocations_case-david_07": {
      "text": "[Unnvikende] I vanskelige samtaler sjekker jeg telefonen når det blir for personlig, og sier til meg selv at jeg bare følger med på ting.",
      "suggestion": "Telefonen blir en falluke under bordet, en ryddig utgang før følelsen kan presse deg opp i et hjørne."
    },
    "dp_empathic-evocations_case-david_08": {
      "text": "[Avvisende] Å si at jeg tok feil, kjennes ydmykende, selv når en del av meg vet at jeg gjorde skade.",
      "suggestion": "De ordene river av rustningen på et øyeblikk og etterlater ansiktet varmt og blottet foran skaden."
    },
    "dp_empathic-evocations_case-david_09": {
      "text": "[Forvirret] Jeg vet ikke hva jeg føler; jeg vet bare at jeg ikke klarer å falle til ro når alle blir stille etter at jeg har sagt noe.",
      "suggestion": "Stillheten blir en gang med lukkede dører, og du går fram og tilbake uten å vite hvilken av dem følelsen ligger bak."
    },
    "dp_empathic-evocations_case-david_10": {
      "text": "[Kontrollert] Etter at affæren kom fram, kjennes hjemmet annerledes; folk bruker fortsatt de samme rommene, men jeg vet ikke hvor jeg står.",
      "suggestion": "Huset har de samme rommene, men varmen har lekket ut, og du står igjen uten et tydelig sted å høre til."
    },
    "dp_empathic-evocations_case-marcus_01": {
      "text": "[Håpløs] De fleste dager går jeg bare gjennom rutinene, møter opp der jeg skal, og ser fortsatt ikke poenget med å snakke om det.",
      "suggestion": "Dagen folder seg ned rundt deg, flat og uten luft, og ord kjennes som om de bare ville presse mot en vegg."
    },
    "dp_empathic-evocations_case-marcus_02": {
      "text": "[Lav stemme] Folkemengder gjør meg anspent før det har skjedd noe; jeg følger med på utganger, hender og støy mens alle andre bare handler.",
      "suggestion": "Folkemengden når deg som trussel før den når deg som mennesker, og hele systemet ditt tar opp posten."
    },
    "dp_empathic-evocations_case-marcus_03": {
      "text": "[Macho] I avdelingen kunne følelser koste liv, så jeg lærte å ikke ha dem, og jeg vet fortsatt ikke hva godt de skal gjøre.",
      "suggestion": "Den regelen høres fortsatt ut som en ordre i brystet: følelser kan koste liv, så hjertet må låses bort bak en dør."
    },
    "dp_empathic-evocations_case-marcus_04": {
      "text": "[Hyperårvåken] Mareritt vekker meg, og så kjennes ikke rommet normalt på en stund; jeg sjekker hjørnene selv om jeg vet hvor jeg er.",
      "suggestion": "Søvnen kaster deg tilbake til et ladet rom, som om faren fulgte med ut og ventet i hjørnene."
    },
    "dp_empathic-evocations_case-marcus_05": {
      "text": "[Lav stemme] Når leiligheten er stille, får jeg det verre, men jeg blir som regel der, fordi det ville være vanskeligere å ringe noen.",
      "suggestion": "Stillheten presser seg på til selv luften kjennes trang, og det å bli alene blir den kjente formen for utholdenhet."
    },
    "dp_empathic-evocations_case-marcus_06": {
      "text": "[Stille og på vakt] Når noe godt skjer, legger jeg merke til det, sier det riktige, og venter så på følelsen som ikke kommer.",
      "suggestion": "Det gode er rett der og likevel bak glass, synlig men uklart før det rekker fram til deg."
    },
    "dp_empathic-evocations_case-marcus_07": {
      "text": "[Flatt] Jeg holder lyset dempet hjemme fordi sterkt lys plager meg og får stedet til å kjennes for eksponert.",
      "suggestion": "Det dempede lyset myker opp kantene og hindrer rommet i å komme for tydelig mot deg på én gang."
    },
    "dp_empathic-evocations_case-marcus_08": {
      "text": "[Lav stemme] Hvis noen banker på uventet, blir jeg satt helt ut, selv om det viser seg å være en nabo som har gått feil.",
      "suggestion": "Bankingen gjør døra farlig et øyeblikk, og hele systemet ditt begynner å hamre før et navn dukker opp."
    },
    "dp_empathic-evocations_case-marcus_09": {
      "text": "[Forvirret] Når jeg prøver å snakke om det, vet jeg ikke hvilken følelse som skal komme først, så jeg slutter som regel å snakke.",
      "suggestion": "Alle følelsene står i samme døråpning, og ingen er tydelig nok til å gå først før døra lukker seg igjen."
    },
    "dp_empathic-evocations_case-marcus_10": {
      "text": "[Flatt] Noen kvelder sitter jeg i bilen før jeg går opp, fordi når jeg først åpner leilighetsdøra, er det ingenting å gjøre annet enn å være der.",
      "suggestion": "Den stille bilen blir et siste lite ly før du må gå inn i den tomme leiligheten."
    },
    "dp_empathic-conjectures_case-sara_01": {
      "text": "[Flau] Jeg sier stadig til vennene mine at det går bra, og så blir jeg irritert når de tror på meg.",
      "suggestion": "Du vinker dem litt bort og blir så alene når de trekker seg tilbake; jeg lurer på om en del av deg lengter etter at de skal se gjennom svaret."
    },
    "dp_empathic-conjectures_case-sara_02": {
      "text": "[Flau] Jeg kastet meg inn i jobb etter bruddet; hvis jeg kommer hjem før det blir mørkt, går jeg bare fra rom til rom.",
      "suggestion": "Du holder deg i bevegelse til huset blir stille; kanskje de tomme rommene bringer deg nær hvor endelig det kjennes at han dro."
    },
    "dp_empathic-conjectures_case-sara_03": {
      "text": "[Flau] Jeg føler meg dum som fortsatt gråter flere måneder etterpå, som om alle andre ville vært over det nå.",
      "suggestion": "Du blir sint på tårene; jeg lurer på om det også finnes skam over at behovet og sorgen har vart så lenge."
    },
    "dp_empathic-conjectures_case-sara_04": {
      "text": "[Lavmælt] Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      "suggestion": "Du trekker deg raskt unna; jeg lurer på om det også finnes en øm lengsel etter å bli valgt, som kjennes for utsatt å vise."
    },
    "dp_empathic-conjectures_case-sara_05": {
      "text": "[Flau] Når jeg ser par, himler jeg med øynene og sier til meg selv at kjærlighet er oppskrytt.",
      "suggestion": "Du skyver det unna; jeg lurer på om det bak himlingen ligger en verkende lengsel etter nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      "text": "[På gråten] Jeg sluttet å følge ham, og så lånte jeg telefonen til en venn for å se om han virket lykkeligere uten meg.",
      "suggestion": "Du prøver å kutte kontakten og samtidig lete etter bevis; kanskje håp og selvbeskyttelse slåss om det samme såret."
    },
    "dp_empathic-conjectures_case-sara_07": {
      "text": "[Lavmælt] Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      "suggestion": "Du nedtoner smerten; jeg gjetter at en redd del frykter å bli avfeid hvis du lar det synes."
    },
    "dp_empathic-conjectures_case-sara_08": {
      "text": "[Flau] Jeg har skrevet en unnskyldning til ham tre ganger denne uken, selv om jeg ikke vet hva jeg egentlig gjorde galt.",
      "suggestion": "Unnskyldningen gir deg noe å gjøre; jeg lurer på om en del av deg prøver å finne en grunn til at du ble forlatt, så det kjennes litt mindre hjelpeløst."
    },
    "dp_empathic-conjectures_case-sara_09": {
      "text": "[På gråten] Nettene er verst; jeg spiller om igjen små øyeblikk til jeg finner noe jeg kunne gjort annerledes.",
      "suggestion": "Gjennomspillingen leter etter et håndtak; jeg lurer på om det å skylde på deg selv gir deg et sted å stå når savnet etter ham kjennes for hjelpeløst."
    },
    "dp_empathic-conjectures_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      "suggestion": "Vennlighet lander sterkt; kanskje lengter en del etter den, mens en annen forventer at den forsvinner."
    },
    "dp_empathic-conjectures_case-michael_01": {
      "text": "[Fast] Hvis noen stiller spørsmål ved meg i et møte, svarer jeg raskt og høyere enn jeg mente.",
      "suggestion": "Du kommer sterkt inn før du rekker å tenke; jeg lurer på om spørsmålet lander nesten som å bli satt på prøve og ikke holde mål."
    },
    "dp_empathic-conjectures_case-michael_02": {
      "text": "[Defensiv] Når en kollega retter på meg foran rommet, ler jeg det bort, og så skyter varmen opp i nakken.",
      "suggestion": "Latteren dekker det raskt; jeg lurer på om det finnes et glimt av ydmykelse under sinnet."
    },
    "dp_empathic-conjectures_case-michael_03": {
      "text": "[Anspent] Kona mi sier at jeg er hard, og jeg sier at jeg bare er ærlig.",
      "suggestion": "Ærlighet er den delen du kan stå bak; jeg gjetter at det å mykne kan bringe deg nærmere skyld eller frykten for å være brutal."
    },
    "dp_empathic-conjectures_case-michael_04": {
      "text": "[Rasende] Jeg holder tjenester i balanse. Jeg liker ikke å skylde noen noe.",
      "suggestion": "Du passer nøye på balansen; jeg lurer på om det å skylde noen noe kan berøre en frykt for å være underlegen eller under andres makt."
    },
    "dp_empathic-conjectures_case-michael_05": {
      "text": "[Anspent og skamfull] Når jeg må be om unnskyldning, strammer kjeven seg og jeg begynner å forklare hele situasjonen.",
      "suggestion": "Forklaringen kommer raskt inn; jeg lurer på om selve unnskyldningen kan berøre skam, nesten som å bli beseiret foran dem."
    },
    "dp_empathic-conjectures_case-michael_06": {
      "text": "[Anspent] Jeg tar bare et glass etter jobb fordi kona mi presser på; hvis hun sluttet å mase, hadde jeg ikke trengt det.",
      "suggestion": "Du legger drikkingen på presset hennes; jeg lurer på om glasset også kan holde unna følelsen av å være anklaget, presset opp i et hjørne eller ikke god nok etter dagen."
    },
    "dp_empathic-conjectures_case-michael_07": {
      "text": "[Fast] Jeg leser alles arbeid om igjen før en presentasjon, fordi én feil ville slå tilbake på meg.",
      "suggestion": "Du vokter deg mot å bli tatt på senga; jeg lurer på om en yngre del allerede forventer å få skylden."
    },
    "dp_empathic-conjectures_case-michael_08": {
      "text": "[Skamfull] Etter at jeg eksploderer, blir barnet mitt forsiktig rundt meg, og jeg klarer ikke å møte blikket hans.",
      "suggestion": "Det forsiktige blikket ser ut til å treffe deg hardt; jeg lurer på om skam og frykt for å bli som faren din gjør det vanskelig å møte øynene hans."
    },
    "dp_empathic-conjectures_case-michael_09": {
      "text": "[Anspent] Når noen sier at jeg skal roe meg ned, høres det ut som de kaller meg barnslig.",
      "suggestion": "Den setningen ser ut til å gjøre deg liten fort; jeg lurer på om sinnet vokter mot å kjenne seg avfeid og gjort liten."
    },
    "dp_empathic-conjectures_case-michael_10": {
      "text": "[Fast] Jeg driver ikke med følelser; jeg spør hva vi skal gjøre med det.",
      "suggestion": "Du går raskt mot handling; kanskje følelser kjennes mindre kontrollerbare, som om de kan avsløre et sted du helst vil holde dekket."
    },
    "dp_empathic-conjectures_case-jason_01": {
      "text": "[Blank] Jeg øver på hver setning før et møte, og så blir hodet likevel blankt når folk vender seg mot meg.",
      "suggestion": "Du forbereder deg så nøye; jeg lurer på om blankheten kan være en måte å komme unna skammen ved å bli sett og vurdert."
    },
    "dp_empathic-conjectures_case-jason_02": {
      "text": "[Nølende] Når jeg blir invitert ut, sier jeg at jeg er opptatt før jeg rekker å kjenne om jeg vil gå.",
      "suggestion": "«Opptatt»-svaret kommer fort; jeg lurer på om det kan beskytte deg mot risikoen for å bli dømt, oversett eller ikke vite hvordan du hører til."
    },
    "dp_empathic-conjectures_case-jason_03": {
      "text": "[Engstelig] Jeg hører en stemme som sier «ikke dum deg ut» før jeg rekker å åpne munnen.",
      "suggestion": "Du hører kritikeren tidlig; jeg gjetter at den prøver å beskytte deg mot den gamle smerten ved å bli sett og føle deg liten."
    },
    "dp_empathic-conjectures_case-jason_04": {
      "text": "[Stille] Etter at jeg har snakket, krymper jeg meg i timevis og ser for meg at alle spiller av hvor latterlig jeg hørtes ut.",
      "suggestion": "Jeg lurer på om krympingen ikke bare er flauhet, men også en gammel frykt for at det å bli hørt kan bety å bli ledd av eller avvist."
    },
    "dp_empathic-conjectures_case-jason_05": {
      "text": "[Nølende] Når noen gir meg et kompliment, antar jeg at de bare er høflige og har oversett den kleine delen.",
      "suggestion": "Varmen preller av; jeg lurer på om et gammelt bilde av deg selv fortsatt insisterer på at den kleine delen er den sanneste."
    },
    "dp_empathic-conjectures_case-jason_06": {
      "text": "[Skamfull] Å se selvsikre mennesker får meg til å ville forsvinne, og så hater jeg meg selv for å misunne dem.",
      "suggestion": "Du krymper rundt selvsikkerheten deres; kanskje finnes det både misunnelse og sorg over å stå utenfor verdenen de ser ut til å bevege seg i."
    },
    "dp_empathic-conjectures_case-jason_07": {
      "text": "[Stille] Hvis noen ler i nærheten, antar jeg at det er av meg og spiller om igjen hva jeg gjorde galt.",
      "suggestion": "Du forbereder deg på latterliggjøring; jeg lurer på om latter kan berøre en sår forventning om at det å være synlig betyr å bli gjort narr av."
    },
    "dp_empathic-conjectures_case-jason_08": {
      "text": "[Engstelig] Jeg skriver en melding, leser den fem ganger og sletter den før jeg sender.",
      "suggestion": "Du redigerer deg selv ut av kontakt; jeg lurer på om det finnes både et ønske om å nå noen og en frykt for hva som skjer hvis de virkelig ser deg."
    },
    "dp_empathic-conjectures_case-jason_09": {
      "text": "[Engstelig] Jeg drikker før arrangementer, for ellers står jeg langs veggen og sjekker mobilen.",
      "suggestion": "Drikken hjelper deg ut på gulvet; jeg lurer på om den også skjermer en redd del som forventer å bli blottstilt eller stå utenfor."
    },
    "dp_empathic-conjectures_case-jason_10": {
      "text": "[Skamfull] Jeg holder meg stille selv når jeg har en god idé, og så spiller jeg den om igjen hele dagen.",
      "suggestion": "Du holder deg skjult og klarer så ikke å legge det fra deg; kanskje kjennes det risikabelt å være synlig, mens det å forsvinne gjør deg skamfull og alene."
    },
    "dp_empathic-conjectures_case-laura_01": {
      "text": "[Flatt og på vakt] Når noen er vennlige, blir jeg fort mistenksom, som om varme alltid har en hake.",
      "suggestion": "Du tar avstand fra vennlighet; jeg lurer på om nærhet kan vekke en gammel frykt for at varme skal bli til fare eller svik."
    },
    "dp_empathic-conjectures_case-laura_02": {
      "text": "[Redd] Når stemmer heves, fryser jeg før jeg vet om sinnet i det hele tatt er rettet mot meg.",
      "suggestion": "Frysingen kommer før fakta; kanskje en del av deg lærte at frykten måtte bevege seg raskere enn tanken."
    },
    "dp_empathic-conjectures_case-laura_03": {
      "text": "[Langsomt og flatt] En del av meg føler skyld over at jeg virker nummen når folk forventer at jeg skal være takknemlig.",
      "suggestion": "Du dømmer nummenheten; jeg gjetter at den kanskje beskytter en veldig sår sorg som takknemlighet ikke når inn til."
    },
    "dp_empathic-conjectures_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg unngår filmer med familiekrangler fordi lydene følger meg hjem.",
      "suggestion": "Du styrer unna; jeg lurer på om lyden kan vekke gammel skrekk og skam som ikke blir igjen på skjermen."
    },
    "dp_empathic-conjectures_case-laura_05": {
      "text": "[Langsomt og flatt] Noen ganger stirrer jeg på veggen til rommet blir flatt og ingenting kan nå meg.",
      "suggestion": "Flatheten virker beskyttende; jeg lurer på om den holder deg unna smerten som kunne komme hvis rommet kjentes virkelig."
    },
    "dp_empathic-conjectures_case-laura_06": {
      "text": "[Anspent og på vakt] En snill mann spurte meg ut, og jeg begynte straks å ramse opp alle grunnene til at han sikkert kom til å såre meg.",
      "suggestion": "Listen kommer fort inn; jeg lurer på om ønsket om nærhet og forventningen om svik kommer nesten samtidig."
    },
    "dp_empathic-conjectures_case-laura_07": {
      "text": "[Skamfull] Når noen tar meg på skulderen, skvetter jeg før jeg rekker å kjenne dem igjen, og så skammer jeg meg.",
      "suggestion": "Skvetten kommer før gjenkjennelsen; jeg lurer på om berøring kan bære fare så raskt, og så kommer skammen over å trenge den beskyttelsen."
    },
    "dp_empathic-conjectures_case-laura_08": {
      "text": "[Fjern] Når folk sier at traumeoverlevere er sterke, får jeg lyst til å gå ut av rommet.",
      "suggestion": "Den rosen skyver deg bort; jeg lurer på om den bommer på skammen og ensomheten som fortsatt kjennes vanskelig å nå."
    },
    "dp_empathic-conjectures_case-laura_09": {
      "text": "[Langsomt og flatt] Rutinen min er jobb, butikk, hjem. Det kjennes tryggere sånn.",
      "suggestion": "Du holder verden smal og forutsigbar; jeg lurer på om det lille formatet hjelper deg å kontrollere risiko og holde gammel smerte unna."
    },
    "dp_empathic-conjectures_case-laura_10": {
      "text": "[Anspent og skamfull] Hvis jeg gråter, unnskylder jeg meg før noen rekker å reagere.",
      "suggestion": "Unnskyldningen kommer før noen har gjort noe; jeg lurer på om tårer bærer en gammel forventning om fare, skyld eller omsorg som ikke var trygg."
    },
    "dp_empathic-conjectures_case-carlos_01": {
      "text": "[Anspent og sint] En respektløs tone vipper en bryter i meg før jeg vet hva som ble truffet.",
      "suggestion": "Det snur fort i deg; jeg lurer på om det under varmen ligger et glimt av ydmykelse før sinnet tar over."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      "text": "[Anspent og sint] Hvis jeg gir meg, blir det sittende i brystet i dagevis.",
      "suggestion": "Det blir værende i deg i dagevis; jeg lurer på om det å gi seg kan berøre noe mer enn krangelen, som å kjenne seg liten eller overkjørt."
    },
    "dp_empathic-conjectures_case-carlos_03": {
      "text": "[Anspent og sint] Når noen forteller meg hva jeg skal gjøre, er første tanke: «Hvem tror du at du er?»",
      "suggestion": "Det spørsmålet kommer fort; jeg gjetter at det å bli instruert kan kjennes som å havne under noen andres makt."
    },
    "dp_empathic-conjectures_case-carlos_04": {
      "text": "[Skamfull] Sønnen min så meg smelle igjen en dør, og senere klarte jeg ikke slutte å se ansiktet hans for meg.",
      "suggestion": "Jeg lurer på om ansiktet hans ikke bare vekket anger, men også skam og frykt for hva han lærer av deg."
    },
    "dp_empathic-conjectures_case-carlos_05": {
      "text": "[Anspent] Etter en krangel blir kona mi stille, og jeg klarer ikke å se ansiktet hennes.",
      "suggestion": "Stillheten hennes ser ut til å nå forbi sinnet; jeg lurer på om blikket hennes ville vekke anger, ømhet og frykten for at du skremte henne."
    },
    "dp_empathic-conjectures_case-carlos_06": {
      "text": "[Anspent og sint] Jeg blåser meg opp når noen utfordrer meg, før de kan se at det treffer.",
      "suggestion": "Du tar på rustningen fort; jeg lurer på om den dekker over det korte øyeblikket der utfordringen faktisk treffer og får deg til å kjenne deg mindre."
    },
    "dp_empathic-conjectures_case-carlos_07": {
      "text": "[Skamfull] Jeg knuser ting så jeg ikke skader folk, men etterpå ser jeg at alle fortsatt er redde.",
      "suggestion": "Du prøver å ikke skade folk; jeg lurer på om det å knuse ting skyver smerten unna et øyeblikk, og så kommer skammen når du ser frykten."
    },
    "dp_empathic-conjectures_case-carlos_08": {
      "text": "[Defensiv] Faren min pleide å si at følelser gjør menn svake, og jeg hører det fortsatt i hodet.",
      "suggestion": "Den regelen er fortsatt høylytt; jeg lurer på om den vokter mot risikoen ved å kjenne noe ømt, eller bli blottstilt og maktesløs."
    },
    "dp_empathic-conjectures_case-carlos_09": {
      "text": "[Anspent og sint] Jeg kverner på respektløsheten i dagevis og planlegger hvordan jeg burde vunnet der og da.",
      "suggestion": "Du prøver fortsatt å vinne det i etterkant; jeg lurer på om gjennomspillingen hjelper med å holde ydmykelsen over å kjenne seg liten akkurat da på avstand."
    },
    "dp_empathic-conjectures_case-carlos_10": {
      "text": "[Redd] Jeg vil gjøre det bedre for familien min, og så hører jeg meg selv høres ut som mennene jeg hatet.",
      "suggestion": "Jeg lurer på om det under viljen til endring ligger frykt og sorg over å bli en som familien din må være på vakt rundt."
    },
    "dp_empathic-conjectures_case-nina_01": {
      "text": "[Skyldpreget] Når jeg hviler, føler jeg meg egoistisk, selv når jeg er så trøtt at jeg nesten ikke klarer å stå.",
      "suggestion": "Hvile vekker skyld; jeg lurer på om en del av deg kom til å kjenne kjærlighet som tryggere når du fortsatte å fortjene plassen din."
    },
    "dp_empathic-conjectures_case-nina_02": {
      "text": "[Unnskyldende] Jeg sier ja, og så blir jeg bitter, men jeg klarer likevel ikke stoppe.",
      "suggestion": "Du sier ja, og sinnet kommer etterpå; kanskje bitterheten peker mot behov som fortsatt kjennes for risikable å eie."
    },
    "dp_empathic-conjectures_case-nina_03": {
      "text": "[Splittet] Når jeg ber om hjelp, unnskylder jeg meg før de rekker å se irritert ut.",
      "suggestion": "Du unnskylder deg før noen rekker å reagere; jeg lurer på om det finnes en frykt for at det å trenge hjelp kan koste deg aksept."
    },
    "dp_empathic-conjectures_case-nina_04": {
      "text": "[Skyldpreget] Hvis huset er rotete når folk stikker innom, begynner jeg å forklare før de sier noe.",
      "suggestion": "Du forklarer før det engang finnes en anklage; jeg lurer på om rotet kan berøre skam over å måtte bevise at du er god gjennom å gjøre."
    },
    "dp_empathic-conjectures_case-nina_05": {
      "text": "[Unnskyldende] Hvis noen virker skuffet, begynner jeg å ordne opp før jeg vet hva jeg selv vil.",
      "suggestion": "Ordningen starter raskt; jeg lurer på om skuffelse kan treffe en gammel frykt for at kjærlighet kunne bli trukket tilbake."
    },
    "dp_empathic-conjectures_case-nina_06": {
      "text": "[Splittet] Jeg svelger sinnet fordi det ikke er pent, og så bærer jeg bitterhet stille.",
      "suggestion": "Du svelger sinnet for å være snill; kanskje lærte en yngre del at det å ha behov kunne true kjærligheten."
    },
    "dp_empathic-conjectures_case-nina_07": {
      "text": "[Sliten] Jeg tar vare på alle, og når ingen legger merke til det, blir jeg skarp mot meg selv for at jeg bryr meg.",
      "suggestion": "Du blir fort hard mot deg selv for at du ønsker å bli sett; jeg lurer på om det finnes en ensom lengsel etter å bli tatt vare på uten å måtte fortjene det."
    },
    "dp_empathic-conjectures_case-nina_08": {
      "text": "[Unnskyldende] Jeg prøver å si nei og legger så til tre forklaringer før de svarer.",
      "suggestion": "Forklaringene skynder seg inn etter nei-et; jeg lurer på om en del av deg prøver å holde aksepten trygg."
    },
    "dp_empathic-conjectures_case-nina_09": {
      "text": "[Splittet] Jeg sier til meg selv at andre har det verre, og så fortsetter jeg.",
      "suggestion": "Du gjør behovene dine mindre og går videre; jeg lurer på om det å forbli akseptabel har betydd å ikke ta mye plass."
    },
    "dp_empathic-conjectures_case-nina_10": {
      "text": "[Sliten] Hvis jeg roer ned etter at alle har sovnet, stiger en klump i halsen.",
      "suggestion": "Klumpen kommer når ingen trenger deg; kanskje er sorgen nær og ber om å bli sett."
    },
    "dp_empathic-conjectures_case-aisha_01": {
      "text": "[Desperat] Hvis du kaster et blikk på klokka, synker magen som om du allerede er på vei bort fra meg.",
      "suggestion": "Det blikket blir et signal om at du går; jeg lurer på om det kan vekke en gammel skrekk for å bli sluppet før du får kjenne at du betyr noe."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      "text": "[Rasende] Da han ikke svarte, gikk jeg fra stille til rasende før jeg skjønte hva som skjedde.",
      "suggestion": "Du svinger fort; kanskje raseriet skynder seg inn for å beskytte den redde, rå delen som føler seg forlatt."
    },
    "dp_empathic-conjectures_case-aisha_03": {
      "text": "[Nummen] Noen ganger får jeg lyst til å klore meg på armene bare for å skjære gjennom nummenheten.",
      "suggestion": "Du vil finne en vei gjennom nummenheten; jeg lurer på om det ligger en uutholdelig tomhet under."
    },
    "dp_empathic-conjectures_case-aisha_04": {
      "text": "[Desperat] Jeg skremte alle forrige uke da jeg sa at jeg kanskje kom til å ta livet mitt, men han tekstet i dag, så nå er det greit og kanskje jeg ikke trenger å snakke om det.",
      "suggestion": "En del av deg vil lukke det raskt nå som kontakten kom tilbake; jeg lurer på om det å snakke om hvor nær kanten det var, kjennes for skremmende eller skamfullt."
    },
    "dp_empathic-conjectures_case-aisha_05": {
      "text": "[Desperat] Hvis du avlyser, er det en del av meg som aldri vil komme tilbake og late som jeg ikke bryr meg.",
      "suggestion": "Avlysningen stikker som å bli sluppet; jeg lurer på om det kjennes tryggere å avvise først enn å vente på at det skjer igjen."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      "text": "[Skamfull] Når jeg ber noen bli, hater jeg hvor intens jeg høres ut etterpå.",
      "suggestion": "Du hater intensiteten akkurat der du trenger nærhet; kanskje er det skammen fra det du ble utsatt for som taler."
    },
    "dp_empathic-conjectures_case-aisha_07": {
      "text": "[Panisk] Vennlighet får meg til å hulke, og så vil jeg stikke ut av rommet.",
      "suggestion": "Det lander stort; jeg gjetter at én del lengter etter vennligheten, mens en annen forventer at det å trenge den blir farlig."
    },
    "dp_empathic-conjectures_case-aisha_08": {
      "text": "[Skamfull] Jeg tester folk for å finne ut om de virkelig bryr seg, og så hater jeg hvor trengende det høres ut.",
      "suggestion": "Du tester og skammer deg etterpå; jeg lurer på om du prøver å bevise at du betyr noe før du våger å stole på."
    },
    "dp_empathic-conjectures_case-aisha_09": {
      "text": "[Skamfull] Etter at jeg slår ut, kaller jeg meg ekkel før noen andre rekker å si det.",
      "suggestion": "Angrepet vender raskt innover; jeg lurer på om hardheten kan være et forsøk på å komme avvisning i forkjøpet, samtidig som den dekker sorg over å kjenne seg alene."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      "text": "[Panisk] Jeg får panikk når jeg skal si farvel, selv når jeg vet at du kommer tilbake.",
      "suggestion": "Farvel utløser panikk selv når hodet vet bedre; jeg lurer på om avskjeder berører den gamle frykten for at ingen kommer tilbake."
    },
    "dp_empathic-conjectures_case-david_01": {
      "text": "[Håpløs] Når kona mi kaller meg kald, kommer jeg med en spydig kommentar før hun rekker å se at det såret.",
      "suggestion": "Kommentaren kommer først; jeg lurer på om den vokter mot et stikk av å bli sett som mislykket eller ikke god nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      "text": "[Avvisende] Jeg liker ikke å bli fortalt hva jeg skal gjøre; det kjennes som om noen får overtaket.",
      "suggestion": "Du stritter imot styring; jeg lurer på om det kan lande som å bli gjort liten, håndtert eller avslørt som ute av kontroll."
    },
    "dp_empathic-conjectures_case-david_03": {
      "text": "[Avvisende] Hvis jeg ikke kan være best, hvorfor prøve i det hele tatt?",
      "suggestion": "Du sikter mot toppen; jeg lurer på om det ordinære kan kjennes som å være usynlig, utskiftbar eller uverdig."
    },
    "dp_empathic-conjectures_case-david_04": {
      "text": "[Fjern] Jeg planlegger store gester, folk reagerer bra, og så føler jeg meg tom etterpå.",
      "suggestion": "Jeg lurer på om det, etter at gesten lander, fortsatt finnes et ensomt sted som spør om de vil ha deg eller bare det du kan gi."
    },
    "dp_empathic-conjectures_case-david_05": {
      "text": "[Avvisende] Å be om unnskyldning får meg til å krympe meg; jeg begynner å forklare før ordene er ute.",
      "suggestion": "Det kjennes ydmykende; jeg lurer på om det å innrømme feil kan treffe en gammel skam over å bli redusert til mislykket."
    },
    "dp_empathic-conjectures_case-david_06": {
      "text": "[Unnvikende] I vanskelige samtaler griper jeg etter telefonen når praten begynner å bli personlig.",
      "suggestion": "Du griper etter en utvei idet nærheten kommer inn; kanskje kjennes det personlige farlig når du forventer å bli bedømt."
    },
    "dp_empathic-conjectures_case-david_07": {
      "text": "[Kontrollert] Jeg skryter når jeg føler meg utrygg, før noen kan se glippen.",
      "suggestion": "Du pumper deg raskt opp; jeg lurer på om det dekker den sårbare glippen før noen andre kan se den."
    },
    "dp_empathic-conjectures_case-david_08": {
      "text": "[Såret, men skarp] Hvis barna sier imot, hører jeg respektløshet og går rett i forelesningsmodus.",
      "suggestion": "Motstanden deres ser ut til å treffe autoriteten din raskt; jeg lurer på om forelesningen dekker skam eller frykt for å miste plassen hos dem."
    },
    "dp_empathic-conjectures_case-david_09": {
      "text": "[Såret, men skarp] Når kona mi misforstår meg, blir jeg skarp og fortsetter å bevise poenget mitt.",
      "suggestion": "Du fortsetter å bevise poenget; jeg lurer på om det under sinnet ligger en sorg over ikke å bli kjent."
    },
    "dp_empathic-conjectures_case-david_10": {
      "text": "[Kontrollert] Hvis kona mi blir, føler jeg meg fanget og kritisert; hvis hun går, føler jeg meg ydmyket. Det finnes ingen måte å vinne på.",
      "suggestion": "Begge alternativene truer deg på hver sin måte; jeg lurer på om fanget og ydmyket kretser rundt den samme frykten for å bli sett som ikke god nok."
    },
    "dp_empathic-conjectures_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager føler jeg meg avstengt. Folk snakker, og jeg nikker for det meste bare.",
      "suggestion": "Du kjenner deg avstengt; jeg lurer på om nummenheten kan holde mye smerte unna, så ikke alt slipper inn på én gang."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      "text": "[Lav stemme] Jeg sover med TV-en på så rommet ikke blir for stille.",
      "suggestion": "Du overdøver stillheten; kanskje stillhet bringer minner og sorg for tett på."
    },
    "dp_empathic-conjectures_case-marcus_03": {
      "text": "[Stille og på vakt] Jeg velger stolen der jeg kan se døra, og blir anspent hvis noen står bak meg.",
      "suggestion": "Valget av stol ser ut til å organisere trygghet; jeg lurer på om en del av deg fortsatt forventer at rommet kan bli farlig."
    },
    "dp_empathic-conjectures_case-marcus_04": {
      "text": "[Lav stemme] Jeg svarer ikke når søsteren min ringer, selv om jeg vet at hun bare sjekker hvordan jeg har det.",
      "suggestion": "Du holder avstand; jeg lurer på om stemmen hennes slipper gjennom nummenheten og gjør følelsene vanskeligere å håndtere."
    },
    "dp_empathic-conjectures_case-marcus_05": {
      "text": "[Anspent] Høye lyder får meg til å skvette, og så blir jeg sint på meg selv.",
      "suggestion": "Du skvetter og dømmer deg selv; jeg lurer på om sinnet dekker over en skam over å være sårbar."
    },
    "dp_empathic-conjectures_case-marcus_06": {
      "text": "[Stille og på vakt] Når gode ting skjer, merker jeg at jeg venter på at noe skal gå galt.",
      "suggestion": "Det gode holder seg på avstand; kanskje det å la det bety noe også åpner døren for å miste det igjen."
    },
    "dp_empathic-conjectures_case-marcus_07": {
      "text": "[Flatt] Jeg drikker noen ganger for å slå meg selv ut fordi jeg ikke vil drømme.",
      "suggestion": "Du slår deg ut før søvnen kan trekke deg tilbake dit; jeg lurer på om det holder mareritt og følelser på avstand."
    },
    "dp_empathic-conjectures_case-marcus_08": {
      "text": "[Langsomt og flatt] Jeg holder lyset lavt hjemme så ingenting kjennes for skarpt.",
      "suggestion": "Du holder alt dempet og mykt; jeg lurer på om lys og klarhet kjennes for avslørende eller for skarpt."
    },
    "dp_empathic-conjectures_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg husker ikke sist jeg lo, og selv det å prøve kjennes falskt.",
      "suggestion": "Du får ikke tak i latteren; jeg lurer på om glede kjennes risikabelt eller illojalt etter så mye tap og nummenhet."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      "text": "[Flatt] Jeg sier til meg selv at jeg har det bedre alene. Nærhet blir fort komplisert.",
      "suggestion": "Den delen virker beskyttende; jeg lurer på om den frykter at nærhet betyr å såre noen, bli såret eller miste kontrollen igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      "text": "[På gråten] Det treffer meg som en bølge når jeg ser koppen hans fortsatt stå i skapet, og så klarer jeg ikke slutte å hulke. Jeg blir flau over lyden av det, men det fortsetter å komme.",
      "suggestion": "Jeg er her sammen med deg mens gråten kommer. Vi trenger verken stoppe den eller drukne i den; vi kan bli ved denne ene bølgen sammen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_02": {
      "text": "[På gråten] Brystet mitt gjør vondt som om det skal sprekke opp når jeg sier at jeg savner ham. Jeg prøver å holde det inne fordi smerten kjennes for stor for dette rommet, men så stopper pusten og jeg klarer ikke late som den er liten.",
      "suggestion": "Savnet av ham gjør vondt rett gjennom brystet. Jeg blir nær deg mens vi slipper inn bare så mye av smerten som du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-sara_03": {
      "text": "[På gråten] Jeg får lyst til å løpe når sorgen starter, fordi den kjennes endeløs. Hvis jeg slipper fram ett hulk, er jeg redd hele natten åpner seg og at jeg ikke finner kanten av den igjen.",
      "suggestion": "Sorgen kjennes endeløs, og en del av deg vil bort. Jeg blir hos deg ved kanten av den, så du verken må løpe eller gå under."
    },
    "dp_staying-in-contact-intense-affect_case-sara_04": {
      "text": "[Panisk] Jeg så bildet hans i et innlegg fra noen andre, og magen sank så hardt at jeg begynte å skjelve.",
      "suggestion": "Bildet traff som et brått fall, og nå er skjelvingen her. Jeg er her med deg i akkurat dette øyeblikket av savn, så det kan være en bølge i rommet og ikke hele historien som skjer på nytt."
    },
    "dp_staying-in-contact-intense-affect_case-sara_05": {
      "text": "[Nummen] Etter bruddet kjennes helgene som en tom vegg. Jeg ser ingenting å glede meg til.",
      "suggestion": "Den tomheten høres skremmende øde ut. Jeg er her sammen med deg i den; vi kan sette ord på bare én del av helgeveggen uten å be deg løse hele framtiden."
    },
    "dp_staying-in-contact-intense-affect_case-sara_06": {
      "text": "[Flau] Jeg føler meg dum som gråter så mye, men jeg klarer ikke stoppe. Jeg hører meg selv lage disse våte, knekte lydene, og en del av meg vil si unnskyld mens en annen del bare fortsetter å briste.",
      "suggestion": "Det er så mye skam rundt lyden av gråten, og jeg trekker meg ikke unna den. Vi kan la den komme i små deler mens du legger merke til at jeg fortsatt er her."
    },
    "dp_staying-in-contact-intense-affect_case-sara_07": {
      "text": "[Nummen] Hendene mine blir numne; jeg føler meg langt borte, som om jeg kan forlate rommet uten å bevege meg. Ansiktet ditt er fortsatt her, men det begynner å se ut som noe på en skjerm.",
      "suggestion": "Draget bortover er sterkt nå. Jeg er fortsatt her med deg; la oss gi avstanden ord, så en del av deg kan holde kontakt med dette rommet."
    },
    "dp_staying-in-contact-intense-affect_case-sara_08": {
      "text": "[Varm og på gråten] Den lille gutten til en venn klemte meg farvel og sa at han var glad i meg, og jeg kjente så mye kjærlighet tilbake at jeg nesten ikke fikk puste.",
      "suggestion": "Den kjærligheten kom med så mye kraft at den nesten tok pusten fra deg. Jeg kan bli hos deg mens den er varm, vond og stor på samme tid."
    },
    "dp_staying-in-contact-intense-affect_case-sara_09": {
      "text": "[På gråten] Jeg klarer ikke se på deg når jeg gråter; det føles altfor blottlagt. Hvis jeg ser medlidenhet eller bare varme i ansiktet ditt, tror jeg at jeg mister den lille kontrollen jeg har igjen.",
      "suggestion": "Du kan se bort og likevel ikke være alene. Jeg blir nærværende mens den blottstilte følelsen får bare litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-sara_10": {
      "text": "[Redd] Hvis jeg lar gråten starte, er jeg redd den tar med seg hele natten. Jeg har gått hjem fra timer og grått til ansiktet gjorde vondt, og jeg vil ikke åpne noe jeg ikke klarer å lukke.",
      "suggestion": "Frykten er at gråten åpner seg bredere enn denne timen kan holde. Jeg blir hos deg ved den første kanten av den, og vi holder rommet i sikte, så du ikke blir alene med den i kveld."
    },
    "dp_staying-in-contact-intense-affect_case-michael_01": {
      "text": "[Fast] Kjeven låser seg og varmen skyter opp i nakken når noen stiller spørsmål ved meg, også her. Det er som om kroppen hører respektløshet før hodet mitt vet hva som ble sagt.",
      "suggestion": "Varmen kommer fort når du føler deg stilt spørsmål ved. Jeg holder meg stødig med deg mens vi lar sinnet være i ord og lytter etter stikket under det."
    },
    "dp_staying-in-contact-intense-affect_case-michael_02": {
      "text": "[Anspent og skamfull] Jeg tok for hardt i armen til sønnen min da han ikke hørte etter, og ansiktet hans spiller seg av om igjen. Jeg blir kvalm, men en del av meg vil at han bare skal slutte å være redd for meg allerede.",
      "suggestion": "Det er en så vond blanding: skyld, alarm og ønsket om at frykten hans skal være over. Jeg blir hos deg mens vi ser ansiktet hans for oss uten å angripe deg eller unnskylde det som skjedde."
    },
    "dp_staying-in-contact-intense-affect_case-michael_03": {
      "text": "[Anspent] Ydmykelsen brenner når jeg spiller av møtet der jeg snublet i ordene. Ansiktet blir varmt igjen, og jeg vil viske ut hele scenen før noen kan se hvor mye det traff meg.",
      "suggestion": "Møtet er her igjen i varmen i ansiktet ditt. Jeg ser ikke bort fra ydmykelsen sammen med deg; vi lar bare en liten del kjennes uten å måtte viske ut hele scenen."
    },
    "dp_staying-in-contact-intense-affect_case-michael_04": {
      "text": "[Fast] Jeg kan kjenne at det er i ferd med å klikke; hvis jeg åpner munnen, kommer det ut hardt. Kjeven er allerede skjøvet fram, og en del av meg vil at skarpheten skal treffe før jeg kjenner meg presset opp i et hjørne.",
      "suggestion": "Du fanget det før det ble handling. Jeg er her med deg i det ladede sekundet, så skarpheten kan få ord i stedet for å bli avfyrt."
    },
    "dp_staying-in-contact-intense-affect_case-michael_05": {
      "text": "[Skjelvende] Hendene mine skjelver, og jeg hører nesten faren min kalle det svakt. Jo mer jeg prøver å stoppe dem, jo mer skamfull blir jeg, som om svakheten ligger rett foran deg.",
      "suggestion": "Skjelvingen er her, og forakten fra faren din kommer rett bak. Jeg holder meg stødig sammen med deg; skammen kan bli sett her uten å bli gjort om til svakhet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_06": {
      "text": "[Anspent og sint] Jeg hater den lille følelsen; den får meg til å ville ruve over noen. Det starter som et lite, utsatt sted i brystet, og så vil hele kroppen ha høyde, volum og avstand fra det.",
      "suggestion": "Den lille følelsen er vanskelig å tåle, og noe i deg vil ruve over noen. Jeg blir hos deg mens litenheten får litt rom uten å styre rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_07": {
      "text": "[Defensiv] En del av meg vil gå før dette ender med at jeg ser patetisk ut foran deg.",
      "suggestion": "Å gå ville beskytte deg mot å bli sett som patetisk. Jeg er her og dømmer ikke den skammen; la den få noen få ord før døren får bestemme for deg."
    },
    "dp_staying-in-contact-intense-affect_case-michael_08": {
      "text": "[Anspent og sint] Stemmen min blir høy før jeg rekker å bestemme meg for det. Jeg hører meg selv fylle rommet, og under det ligger et glimt av å bli avfeid som jeg ikke vil at noen skal se.",
      "suggestion": "Du fanger bølgen mens den skjer. Jeg kan være stødig med varmen mens delen som kjente seg avfeid får ord, så sinnet ikke må fylle hele rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_09": {
      "text": "[Redd] Hvis jeg ikke eksploderer, føles det som om jeg forsvinner. I krangelen med kona mi, i det sekundet jeg senker stemmen, kjenner jeg meg mindre og mindre til det ikke er noe igjen av meg.",
      "suggestion": "Eksplosjonen hindrer deg i å forsvinne, og lavere stemme kjennes som å bli ingenting. Jeg er med begge: kraften som beskytter deg og litenheten den prøver å redde."
    },
    "dp_staying-in-contact-intense-affect_case-michael_10": {
      "text": "[Fast] Jeg stoler ikke på meg selv når varmen begynner å lete etter noen å straffe. Det føles som om sinnet skanner rommet etter et mål før jeg har rukket å spørre hva som faktisk traff.",
      "suggestion": "Jeg setter pris på at du gir varmen et navn før den velger seg et mål. Vi kan bli ved signalet om noe såret under sinnet mens straffeimpulsen holdes i ord."
    },
    "dp_staying-in-contact-intense-affect_case-jason_01": {
      "text": "[Stille] Alt blir uklart og hjertet hamrer, som om alle kan se at jeg ikke får det til. Jeg hører deg fortsatt, men ordene flyter sammen og jeg begynner å prøve å se normal ut i stedet for å lytte.",
      "suggestion": "Jeg er her med deg i uklarheten. Panikken kan være synlig uten at du må prestere en normal setning."
    },
    "dp_staying-in-contact-intense-affect_case-jason_02": {
      "text": "[Skjelvende] Hendene mine skjelver og jeg vil forsvinne før noen merker det. Det er den samme følelsen som å reise seg i klassen: Alle kan se skjelvingen før jeg får laget én setning.",
      "suggestion": "Skjelvingen og ønsket om å forsvinne er begge her. Jeg blir hos deg mens de vises, uten å få deg til å skjule dem."
    },
    "dp_staying-in-contact-intense-affect_case-jason_03": {
      "text": "[Panisk] Jeg blir kvalm av å snakke om festen, som om jeg kan forsvinne av skam. Bare det å si at jeg sto alene ved kjøkkenet får rommet til å vippe og ansiktet til å brenne.",
      "suggestion": "Den ensomme kjøkkenscenen henter kvalmen og den brennende skammen rett inn i dette rommet. Jeg blir hos én liten del, så skammen får selskap uten å sluke deg."
    },
    "dp_staying-in-contact-intense-affect_case-jason_04": {
      "text": "[Stille] Rommet kjennes som om det krymper rundt meg, og jeg finner ikke en normal setning. Jo mer jeg prøver å høres okay ut, jo mindre blir stemmen min, og jo høyere kjennes hjertet.",
      "suggestion": "Krympingen skjer mens du prøver så hardt å høres okay ut. Jeg blir nær, og vi kan ta dette ett ord om gangen uten å gjøre den mindre stemmen til et nederlag."
    },
    "dp_staying-in-contact-intense-affect_case-jason_05": {
      "text": "[Redd] Jeg får ikke puste ordentlig, og jeg er redd du ser at jeg har panikk. Jeg prøver å puste stille så jeg ikke virker dramatisk, men da blir det enda trangere.",
      "suggestion": "Panikken blir trangere fordi du prøver så hardt å skjule den. Jeg er her, og du trenger ikke virke samlet for meg; den ujevne pusten kan være en del av det vi gir plass."
    },
    "dp_staying-in-contact-intense-affect_case-jason_06": {
      "text": "[Engstelig] Jeg vil gjemme meg under bordet; ansiktet mitt brenner. Jeg vet det høres barnslig ut, men skammen er så varm at selv det å sitte oppreist kjennes som for mye eksponering.",
      "suggestion": "Skammen er så varm at det kjennes tryggere å gjemme seg. Jeg blir hos deg mens ansiktet brenner og du blir her, sett bare så mye som du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-jason_07": {
      "text": "[Stille] Jeg klarer ikke se deg i øynene nå; ansiktet mitt brenner. Hvis jeg ser opp og merker at du ser på meg, tror jeg brenningen tar over og at jeg slutter å få fram ord.",
      "suggestion": "Du trenger ikke ha øyekontakt for å være i kontakt. Jeg er fortsatt med deg mens brenningen får litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-jason_08": {
      "text": "[Nølende] Det ringer i ørene og jeg føler meg fanget, som om alle ser på meg. Jeg vet at vi bare er i dette rommet, men det føles som om hele seminaret stirrer på meg igjen.",
      "suggestion": "Det gamle seminarblikket har trengt seg inn i dette rommet. Jeg er her med deg mens vi markerer forskjellen: dette er fanget-følelsen som kommer, ikke hele seminaret som skjer igjen."
    },
    "dp_staying-in-contact-intense-affect_case-jason_09": {
      "text": "[Panisk] Når du husker det jeg sa forrige uke, blir jeg så lettet at jeg kunne gråte, og så får jeg panikk for at jeg trenger dette for mye.",
      "suggestion": "Det å bli husket berører noe stort, og så begynner behovet å kjennes farlig. Jeg blir hos både lettelsen og panikken uten å gjøre noen av dem feil."
    },
    "dp_staying-in-contact-intense-affect_case-jason_10": {
      "text": "[Redd] Jeg tror jeg bør gå før du merker hvor mye panikk jeg har. Jeg ser stadig mot døren og planlegger raskeste vei ut, selv om en annen del av meg vil at du skal hjelpe meg å bli.",
      "suggestion": "Døren trekker hardt, og en annen del vil ha hjelp til å bli. Vi kan holde begge deler i sikte, så panikken får en plass her uten å bestemme for deg."
    },
    "dp_staying-in-contact-intense-affect_case-laura_01": {
      "text": "[Langsomt og flatt] Da døra smalt ute, forsvant jeg innover før jeg rakk å vite om jeg var trygg.",
      "suggestion": "Du forsvant langt innover idet smellet traff. Jeg holder meg stødig og hjelper oss å markere at lyden er over før vi ber deg kjenne noe mer."
    },
    "dp_staying-in-contact-intense-affect_case-laura_02": {
      "text": "[Langsomt og flatt] Jeg blir helt nummen når jeg prøver å kjenne noe rundt det som skjedde. Jeg kan si fakta, men i det sekundet du spør hvordan det kjentes, er det som om strømmen går inni meg.",
      "suggestion": "Nummenheten beskytter deg mot for mye. Jeg blir hos deg akkurat der strømmen går; vi trenger ikke bryte gjennom den for å være i kontakt."
    },
    "dp_staying-in-contact-intense-affect_case-laura_03": {
      "text": "[Anspent og på vakt] Jeg føler at rommet er langt borte, og at jeg ser gjennom glass. Jeg ser munnen din bevege seg, men kroppen min er allerede et annet sted og venter på det neste som skal skje.",
      "suggestion": "Den glassaktige avstanden er allerede i ferd med å ta deg bort fra farefølelsen. Jeg er fortsatt her med deg, rolig og nær, mens bare en liten del av ventingen får navn."
    },
    "dp_staying-in-contact-intense-affect_case-laura_04": {
      "text": "[Flatt og på vakt] Magen synker og jeg stivner, som om jeg er tilbake og venter på neste eksplosjon.",
      "suggestion": "Det suget og den stivningen er gammel fare som kommer inn i rommet. Jeg blir hos deg ved kanten av det og hjelper kroppen å merke at dette øyeblikket ikke er eksplosjonen."
    },
    "dp_staying-in-contact-intense-affect_case-laura_05": {
      "text": "[Langsomt og flatt] Jeg vil bli nummen før minnet åpner seg bredere enn jeg klarer å lukke. Jeg kjenner kanten av det åpne seg, og første impuls er å forsvinne før jeg ser for mye.",
      "suggestion": "Nummenheten prøver å spare deg for å se for mye. Jeg respekterer den beskyttelsen; vi kan vite at minnet er nær uten å åpne det bredere enn du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-laura_06": {
      "text": "[Anspent og på vakt] Jeg tror jeg må avlive den gamle katten min i morgen, og skyldfølelsen er så stor at jeg nesten ikke klarer å si det.",
      "suggestion": "Det er en forferdelig blanding av kjærlighet og skyld å bære. Jeg blir hos deg i den delen som nesten ikke klarer å si det, og vi holder beslutningen liten nok til å tåles akkurat nå."
    },
    "dp_staying-in-contact-intense-affect_case-laura_07": {
      "text": "[Flatt og på vakt] Jeg stoler ikke på mine egne signaler når de sier at jeg er trygg. Kroppen sier fare selv når jeg vet at døren er lukket og ingenting skjer, så jeg vet ikke hvilken del av meg jeg skal tro på.",
      "suggestion": "Det er skremmende når kunnskapen om at døren er lukket ikke når faresignalet. Jeg kan være stødig med begge sannhetene, uten å tvinge en av dem til å vinne."
    },
    "dp_staying-in-contact-intense-affect_case-laura_08": {
      "text": "[Fjern] Jeg blir svimmel og langt borte, som om rommet glir bakover. Stemmen din høres lenger unna ut enn for et minutt siden, og jeg er redd jeg flyter ut før jeg klarer å svare.",
      "suggestion": "Rommet glir bakover, og du er redd for å flyte ut. Jeg holder kontakten med deg mens vi setter ord på akkurat nok av langt-borte-følelsen til at du blir her."
    },
    "dp_staying-in-contact-intense-affect_case-laura_09": {
      "text": "[Anspent og på vakt] Datteren min sa at hun savnet meg, og kjærligheten i det traff så hardt at jeg ville trekke meg unna.",
      "suggestion": "Den kjærligheten traff med så mye kraft at det ga mening å trekke seg unna. Jeg blir hos deg mens det å være savnet får berøre deg på en liten, tålelig måte."
    },
    "dp_staying-in-contact-intense-affect_case-laura_10": {
      "text": "[Langsomt og flatt] Jeg vil ikke kjenne dette i det hele tatt; hvis det åpner seg, tror jeg at jeg forsvinner.",
      "suggestion": "Det er farepunktet: Hvis følelsen åpner seg, er du redd for å forsvinne. Jeg blir hos deg ved den første kanten av det, og vi stopper før det blir for mye."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_01": {
      "text": "[Sint, med knyttede never] Varmen stiger; nevene vil knyte seg før jeg skjønner hva som traff. Det er som om hendene er klare til å svare på en trussel før jeg engang kan si hva som kjentes truende.",
      "suggestion": "Jeg er her med deg mens varmen skyter ut i hendene. Trusselen og sinnet kan være sterke i ord her, og vi tar pause før hendene må gjøre noe med det."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_02": {
      "text": "[Anspent og sint] Stemmen min vil rope før noen ser at jeg er rystet. Når partneren min stiller ett forsiktig spørsmål, kjenner jeg volumet stige for å dekke over den delen av meg som ble redd.",
      "suggestion": "Jeg tåler kraften i deg uten at den må bli til roping. Den redde delen trenger ikke dekkes over alene; vi kan holde styrken i ord uten at den blir truende."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_03": {
      "text": "[Rasende] Når jeg leser nyhetene, blir jeg så rasende at jeg vil rive hele systemet ned.",
      "suggestion": "Raseriet er enormt, og jeg trekker meg ikke unna det. Legg kraften i ordene, sterkt og tydelig, mens vi holder handling utenfor."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_04": {
      "text": "[Skyldpreget] Sønnen min gjemte seg bak sofaen da jeg ropte, og skyldfølelsen treffer så hardt at jeg nesten ikke klarer å være i kroppen.",
      "suggestion": "Skyldfølelsen viser hvor dypt frykten hans når deg. Jeg blir hos deg nær den smerten; vi kan la den bety noe uten at den blir selvangrep eller noe du må flykte fra."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_05": {
      "text": "[Anspent] Jeg er på vei ut fordi jeg kjenner at hendene mine vil knuse noe. Jeg sitter fortsatt her, men kroppen er allerede halvveis mot døren og leter etter noe fast.",
      "suggestion": "Du er fortsatt her mens trangen leter etter noe hardt. Jeg er tydelig med deg: impulsen til å knuse noe hører hjemme i ord her, og vi holder alle trygge mens bølgen går gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_06": {
      "text": "[Anspent og sint] Brystet hamrer som om jeg allerede er i en kamp. Skuldrene er oppe, blikket går stadig mot døren, og kroppen gjør seg klar før jeg har valgt noe.",
      "suggestion": "Du er allerede på vei inn i kamp før du har valgt en. Jeg blir nær den beredskapen sammen med deg, som en bølge vi kan sette navn på, ikke en ordre du må følge."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_07": {
      "text": "[Rasende] Da han på jobb lo av meg, fikk jeg lyst til å banke ham til han skjønte at han ikke skulle le.",
      "suggestion": "Bildet er voldelig, og jeg trekker meg ikke unna deg. Vi holder det i ord her mens ydmykelsen og raseriet får rom uten å bli handling."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_08": {
      "text": "[Redd] Jeg vil skremme folk vekk før de ser at jeg er redd. Hvis noen hører at stemmen min skjelver, føles det som om jeg må bli større fort, så de ikke vet hvor de kan såre meg.",
      "suggestion": "Den store kraften prøver å beskytte det redde stedet fra å bli sett. Jeg blir hos begge deler: frykten som kan såres, og kraften som vil skape avstand."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_09": {
      "text": "[Anspent og sint] Hvis jeg lar den respektløsheten passere, føles det som om jeg ikke er noe. Ordene ikke noe treffer så hardt at brystet blir varmt, og jeg vil bevise med én gang at jeg fortsatt betyr noe.",
      "suggestion": "De ordene, «ikke noe», treffer som en trussel mot hele verdien din. Jeg blir hos deg i det stikket mens kampimpulsen holdes igjen og får navn."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_10": {
      "text": "[Anspent og sint] Jeg føler meg ute av kontroll, og jeg hater at du kan se det. Hendene er åpne fordi jeg prøver, men inni meg kjennes det ydmykende at du kan se meg kjempe mot meg selv.",
      "suggestion": "Jeg ser hvor hardt du arbeider for ikke å handle. Jeg holder meg stødig med deg i ydmykelsen over å bli sett der, med én del som brenner og en annen som velger å holde igjen."
    },
    "dp_staying-in-contact-intense-affect_case-nina_01": {
      "text": "[Skyldpreget] Jeg klarer ikke slutte å gråte, og så skammer jeg meg for hvor mye jeg trenger. Sønnen min spurte bare hvor sokkene hans var, og plutselig sto jeg ved kjøkkenbenken og hulket som om jeg hadde ødelagt alt.",
      "suggestion": "Gråten og skammen over å trenge så mye er begge her. Jeg blir hos deg mens behovet får rom uten å bli noe du må beklage."
    },
    "dp_staying-in-contact-intense-affect_case-nina_02": {
      "text": "[Unnskyldende] Brystet er stramt og hodet dunker av å holde alle andre oppe. Jeg kjenner listen gå gjennom meg: guttene, moren min, jobb, middag, meldinger, og det er ikke plass igjen til å puste.",
      "suggestion": "Du har holdt alle andre oppe så lenge at presset verker gjennom deg. Jeg blir hos deg mens noe av det får navn i stedet for å bæres alene."
    },
    "dp_staying-in-contact-intense-affect_case-nina_03": {
      "text": "[Splittet] Jeg sier hele tiden unnskyld for at jeg føler så mye, som om jeg tar for stor plass. Selv nå vil jeg sjekke om du er lei av meg, og så hater jeg at jeg får deg til å håndtere meg også.",
      "suggestion": "Følelsen er stor, og så sier du unnskyld for størrelsen på den. Jeg er her og trekker meg ikke fra hvor mye det er; la følelsen få litt plass før du gjør deg mindre."
    },
    "dp_staying-in-contact-intense-affect_case-nina_04": {
      "text": "[Sliten] Jeg bet av hodet på sønnen min fordi han trengte meg, og så gråt jeg på badet fordi jeg følte meg som en forferdelig mor.",
      "suggestion": "Skyldfølelsen er intens fordi det å være en god mor betyr så mye for deg. Jeg er her sammen med deg mens både tårene og skammen er til stede, og vi holder dem fra å bli en dom over hvem du er."
    },
    "dp_staying-in-contact-intense-affect_case-nina_05": {
      "text": "[Unnskyldende] Jeg føler at jeg svikter alle, og kroppen vil bare klappe sammen. Jeg satt på badegulvet i to minutter, og selv det føltes stjålet fra noen som trengte meg.",
      "suggestion": "Hele systemet ditt vil folde seg sammen etter å ha båret alle så lenge. Jeg er her mens tyngden viser seg; noe av den kan holdes mellom oss i stedet for å føles stjålet fra noen andre."
    },
    "dp_staying-in-contact-intense-affect_case-nina_06": {
      "text": "[Splittet] Hvis jeg slutter å gjøre, faller jeg fra hverandre, og noen kommer til å trenge meg likevel. Jeg kjenner tårene rett bak øynene, men idet de kommer, ser jeg for meg at noen roper fra rommet ved siden av.",
      "suggestion": "Å stoppe kjennes farlig fordi alles behov kommer fossende inn, også dine. Jeg er her med deg mens litt av dine egne tårer får plass før du må ta vare på noen."
    },
    "dp_staying-in-contact-intense-affect_case-nina_07": {
      "text": "[Sliten] Jeg vil gå i det sekundet jeg kjenner hvor desperat jeg trenger at noen hjelper meg. Behovet stiger, og jeg blir sint på meg selv, som om jeg burde klare å reise meg og bære alt alene.",
      "suggestion": "Å trenge hjelp har blitt faren, så trangen til å gå gir mening. Jeg blir hos deg i dette øyeblikket mens behovet får være her uten unnskyldning."
    },
    "dp_staying-in-contact-intense-affect_case-nina_08": {
      "text": "[Unnskyldende] Noen ganger fantaserer jeg om å kjøre bort uten å si til noen hvor jeg dro, og så blir jeg kvalm av skyld.",
      "suggestion": "Ønsket om å slippe unna og skyldfølelsen er begge sterke. Vi kan bli ved begge uten å velge den ene mot den andre: den utslitte delen som vil bort, og den omsorgsfulle delen som blir kvalm av å dra."
    },
    "dp_staying-in-contact-intense-affect_case-nina_09": {
      "text": "[Splittet] Jeg får ikke tak i pusten når jeg slutter å ta vare på alle. I det sekundet jeg setter meg ned, kjenner jeg hele huset lene seg mot meg, som om noen andre faller hvis jeg puster for meg selv.",
      "suggestion": "Det er som om hele huset lener seg på deg idet du lager plass til deg selv. Jeg er her med deg mens din egen pust får litt rom uten at noen andre må falle."
    },
    "dp_staying-in-contact-intense-affect_case-nina_10": {
      "text": "[På gråten] Når sønnen min sier at han heller vil være hos faren sin, kjenner jeg så mye sorg at jeg ikke får puste.",
      "suggestion": "Sorgen treffer der det kjennes mulig å miste ham. Jeg blir hos deg mens vi tar inn bare en liten del av det tapet."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_01": {
      "text": "[Tydelig ukomfortabel] Jeg vet at du er terapeuten min, men noen ganger vil jeg at du skal elske meg romantisk, på en måte terapeuter ikke skal.",
      "suggestion": "Jeg er glad for at du kan si det her. Terapigrensen må være tydelig og ikke romantisk, og samtidig vil jeg være følelsesmessig nær lengselen og frykten under den sammen med deg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      "text": "[Panisk] Tomheten brenner så vondt at jeg begynner å tenke at jeg må skade meg selv bare for å bevise at jeg fortsatt er her.",
      "suggestion": "Jeg er veldig glad for at du sier det, og jeg blir nær. Brenningen er så desperat at skade begynner å se ut som bevis på at du finnes; vi holder deg trygg mens behovet for å kjenne at du er virkelig blir her i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      "text": "[Desperat] Jeg vil stikke fra dette rommet før du ser hvor desperat jeg er. Hvis du ser det, er jeg redd du enten trekker deg unna eller blir det eneste som holder meg sammen.",
      "suggestion": "Å stikke ville beskytte deg mot skrekken ved å bli sett for mye og trenge for mye. Jeg er fortsatt her, og vi kan berøre bare en liten flik av å trenge meg uten at det blir det eneste som holder deg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_04": {
      "text": "[Desperat] Når du sier at vi må stoppe til tiden, får jeg lyst til å kutte meg så du ser hvor ille det blir.",
      "suggestion": "Takk for at du sier det mens vi fortsatt er sammen. Jeg hører hvor uutholdelig avslutningen kjennes, og hvor sterkt du trenger at jeg ser det; vi tar tryggheten på alvor og holder budskapet i ord sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_05": {
      "text": "[Desperat] Jeg føler at jeg er for mye, og jeg hater at jeg trenger at du blir.",
      "suggestion": "Jeg vil være her med deg i følelsen av å være for mye. Vi kan være nær den på en veldig liten måte, og så hvile før den overvelder deg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_06": {
      "text": "[Panisk] Brystet kjennes som et svart hull, og jeg er redd det skal sluke meg. Jo mer jeg merker det, jo mer tror jeg at jeg faller ned i det og ikke kommer tilbake som den samme.",
      "suggestion": "Den svart-hull-følelsen er skremmende, som om det å merke den kan trekke deg inn. Jeg er her ved kanten sammen med deg; vi lar den få noen få ord og kommer tilbake før den blir alt."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_07": {
      "text": "[Panisk] Den forrige terapeuten min sa at hun skulle overføre meg, og jeg kjenner fortsatt panikken som om hun kastet meg bort.",
      "suggestion": "Å bli overført kjennes fortsatt som å bli kastet bort. Jeg er her med deg mens den panikken kommer nær, og vi kan la den handle om den gamle avslutningen uten at den blir dette øyeblikket."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_08": {
      "text": "[Panisk] Trangen til å klore meg selv blir veldig sterk, og jeg trenger noe ekte før jeg forsvinner.",
      "suggestion": "Trangen til å klore er sterk fordi huden blir bedt om å bevise at du er virkelig. Jeg er her med deg; vi holder hendene dine trygge og lar behovet bli i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_09": {
      "text": "[Skamfull] Gråten tar over, og jeg føler meg ekkel fordi jeg trenger at du ser det. Jeg vil at du skal bli, og det gjør skammen verre, som om behovet for trøst er det mest blottlagte ved meg.",
      "suggestion": "Skammen stiger sammen med tårene. Jeg er med deg i begge deler, og vi roer det nok ned til at behovet for trøst kan være her uten å bli ekkelt."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_10": {
      "text": "[Desperat] Hvis du avlyser, faller jeg fra hverandre og hater meg selv for at jeg trenger deg. Jeg vet at én avlyst time ikke burde kjennes som at gulvet forsvinner, men det er akkurat det som skjer i kroppen.",
      "suggestion": "En avlysning kjennes som at gulvet forsvinner, og så angriper skammen deg for å trenge meg. Jeg er her med både skrekken og skammen; vi kan sette ord på fallet uten at du må møte det alene."
    },
    "dp_staying-in-contact-intense-affect_case-david_01": {
      "text": "[Kontrollert] Ansiktet brenner, og jeg vil avbryte dette før du ser hvor blottstilt jeg er.",
      "suggestion": "Jeg ser hvor blottstilt og varmt dette kjennes, og jeg skal ikke presse deg forbi det du tåler. Vi kan berøre brenningen kort sammen, og så stoppe før skammen tar over."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      "text": "[Skeptisk] Terapi virker ikke. Jeg føler meg verre, og kanskje det er fordi du ikke har nok erfaring for en som meg.",
      "suggestion": "Jeg setter pris på at du sier det direkte. At du får det verre her, er alvorlig, og jeg vil bli hos skuffelsen og sinnet i stedet for å forsvare meg. Vi må også se nøye på om dette arbeidet hjelper."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      "text": "[Defensiv] Jeg vil gå ut før du ser meg miste ansikt. Halsen strammer seg, dressen kjennes plutselig for trang, og jeg vil heller gå enn å sitte her og se trengende ut.",
      "suggestion": "Draget mot døren beskytter deg mot ydmykelse. Jeg blir hos deg mens den trengende følelsen får noen sekunder i rommet uten at du mister ansikt."
    },
    "dp_staying-in-contact-intense-affect_case-david_04": {
      "text": "[Skamfull] Jeg ser hele tiden ansiktet til kona mi for meg etter at hun fant ut om affæren, og skylden er så brennende at jeg vil krype ut av huden.",
      "suggestion": "Ansiktet hennes henter skylden inn med full styrke. Jeg blir hos deg nær angeren, og vi tar bare inn nok til at du kan møte den uten å måtte krype ut av huden."
    },
    "dp_staying-in-contact-intense-affect_case-david_05": {
      "text": "[Rasende] Jeg orker ikke ordet «kald»; det får meg til å føle meg avslørt og rasende. Når kona mi sier det, føles det som om hun har funnet det ene jeg ikke kan forsvare meg mot, og jeg vil stenge henne hardt ned.",
      "suggestion": "Kald treffer som avsløring og forakt samtidig. Jeg blir hos deg i skammen og raseriet det vekker, mens trangen til å stenge henne ned holdes i ord og såret under får rom."
    },
    "dp_staying-in-contact-intense-affect_case-david_06": {
      "text": "[Skamfull] Jeg synes det er flaut at jeg klikket hjemme; jeg hørtes akkurat ut som den typen jeg dømmer. Setningen kom skarpt ut, og så så jeg meg selv utenfra og kjente en varm avsky i ansiktet.",
      "suggestion": "Avskyen kommer varm og umiddelbar når du ser deg selv utenfra. Jeg blir ved den skammen sammen med deg et øyeblikk, uten å la den bli en dom."
    },
    "dp_staying-in-contact-intense-affect_case-david_07": {
      "text": "[Kontrollert] Jeg føler for å stenge ned så jeg ikke sier noe desperat. Jeg kjenner setningen komme opp, og jeg hater at jeg kanskje trenger kona mi så mye foran deg.",
      "suggestion": "Nedstengingen prøver å hindre at den desperate setningen vises. Jeg blir hos deg ved den kanten, så den kan være til stede uten å bli eksponert alt på én gang."
    },
    "dp_staying-in-contact-intense-affect_case-david_08": {
      "text": "[Tydelig ukomfortabel] Jeg brukte seksuelt press mot noen for mange år siden, og å si det gjør at jeg føler at det ikke finnes noen vei tilbake fra den jeg var.",
      "suggestion": "Dette er alvorlig, og jeg setter pris på at du sier det så tydelig. Jeg blir hos deg mens vi holder skammen og ansvaret sammen: uten å unnskylde skaden, og uten å la «ingen vei tilbake» bli den eneste sannheten."
    },
    "dp_staying-in-contact-intense-affect_case-david_09": {
      "text": "[Redd] Forsvaret kommer fort opp, og jeg er redd jeg mister kontrollen over ansiktet. Jeg kjenner det høflige uttrykket sprekke, og hvis det sprekker, vet jeg ikke hva du får se.",
      "suggestion": "Den høflige masken sprekker, og det kjennes farlig å ikke vite hva jeg kan se. Jeg kan være med deg ved den kanten uten å kreve at masken tas av på én gang."
    },
    "dp_staying-in-contact-intense-affect_case-david_10": {
      "text": "[Sint, med knyttede never] Når jeg ser for meg mannen kona mi tekstet med, får jeg lyst til å knuse ansiktet hans til han slutter å bety noe.",
      "suggestion": "Jeg tar det voldelige bildet på alvor, og jeg går ikke bort fra deg. Vi holder det i ord og utenfor handling mens vi blir hos raseriet og såret under."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      "text": "[Flatt] En bølge kommer opp i brystet, og jeg vil stenge den ned før den tar meg tilbake dit.",
      "suggestion": "Bølgen stiger, og frykten er at den skal ta deg tilbake dit. Jeg er her med deg ved den første kanten av den, med nok av dette rommet til stede til at du ikke går dit alene."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      "text": "[Lav stemme] Jeg så opptak fra en ny krigssone, barn under ruiner, og hele kroppen ble kald og kvalm.",
      "suggestion": "Opptaket brakte kald kvalme og gammel fare inn i samme pust. Jeg er her med deg i gruen over barna under ruinene, samtidig som vi holder nok av dette rommet til stede til at du ikke er tilbake der alene."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      "text": "[Langsomt og flatt] Jeg kjenner ingenting og alt på én gang, og det skremmer meg. Når minnet kommer nær, blir brystet hult og så plutselig altfor fullt, som om bryteren er ødelagt.",
      "suggestion": "Den svingen fra nummen til oversvømt er skremmende, og jeg er her med deg i den. Ett signal er nok akkurat nå; resten av minnet trenger ikke ta over."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg vil stenge ned før rommet begynner å kjennes uvirkelig. Kantene på veggene er allerede i ferd med å bli myke, og jeg er redd jeg ikke vet hvor jeg er hvis jeg fortsetter å snakke.",
      "suggestion": "Rommet begynner å bli uvirkelig, så vi senker tempoet med respekt for det signalet. Jeg blir nær mens vi holder oss ved terskelen til følelsen, ikke inne i hele minnet."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_05": {
      "text": "[Skjelvende] Hendene mine begynner å skjelve når jeg prøver å si bare én bit av det som skjedde. Historien ligger fortsatt bak tennene, men hendene mine forteller deg allerede at den er for nær.",
      "suggestion": "Skjelvingen sier allerede hvor nær historien er. Jeg blir hos deg der; hendene dine kan være synlige mens skjelvingen får selskap i bare noen sekunder."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_06": {
      "text": "[Lav stemme] Når jeg kommer hjem og det er stille, lander vekten på brystet som en dør som lukkes.",
      "suggestion": "Stillheten lander som å bli stengt inne igjen. Jeg er her med deg i tyngden av den døren som lukker seg, og vi kan gi vekten ord uten å låse deg inne i den."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_07": {
      "text": "[Flatt] Etter en folkemengde summer huden som om jeg fortsatt er på vakt. Jeg kan være hjemme med døren låst og fortsatt kjenne hver skulder fra toget stryke forbi meg.",
      "suggestion": "Folkemengden er borte, men huden er fortsatt på vakt. Jeg er her med deg i den summende etteralarmen, så den kan bli kjent uten at systemet må senke vakten før det kan."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_08": {
      "text": "[Hyperårvåken] Jeg er redd for at hvis jeg lar meg kjenne det, så sluker hele greia meg. Jeg klarer fakta, men følelser gjør at rommet, fortiden og kroppen min virker som de faller sammen til ett sted.",
      "suggestion": "Frykten er at følelsen skal få fortid og nåtid til å falle sammen til ett sted. Jeg er her med deg; vi holder kontakt med dette rommet mens bare en del av følelsen får komme nær."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_09": {
      "text": "[Langsomt og flatt] Jeg vil forsvinne når minnene presser seg på og rommet slutter å kjennes virkelig. Det er ikke at jeg vil dø i det sekundet; jeg vil bare ikke befinne meg noe sted minnene kan finne meg.",
      "suggestion": "Ønsket om å forsvinne er ikke det samme som å ville dø, og det trenger likevel omsorg. Jeg blir hos deg mens vi holder deg plassert her og setter ord på hvor hardt minnene presser på."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_10": {
      "text": "[Håpløs] Når nettene blir lange, tenker jeg at det hadde vært enklere å ikke være i live, og så hater jeg meg selv for å si det.",
      "suggestion": "Jeg er veldig glad for at du sier det her, og jeg blir hos deg. Vi tar tryggheten på alvor: ønsket om ikke å leve blir hørt direkte uten at du blir alene med det eller lar det bestemme neste steg."
    },
    "dp_self-disclosure_case-sara_01": {
      "text": "[På gråten] Når jeg sier at jeg fortsatt savner ham, tenker du egentlig at jeg høres latterlig ut?",
      "suggestion": "Nei. Jeg hører ikke noe latterlig. Jeg hører sorg over en som betydde noe, og jeg blir berørt av hvor varsomt du prøver å overleve dette tapet. Legg merke til hva som skjer når jeg sier det."
    },
    "dp_self-disclosure_case-sara_02": {
      "text": "[På gråten] Du blir sikkert lei av å høre meg gråte over ham hver uke.",
      "suggestion": "Tårene dine gjør meg ikke lei av deg. Jeg kjenner omsorg for hvor alene dette blir for deg, og jeg vil at den alenheten skal få selskap her. Slipp det inn bare så mye som kjennes trygt."
    },
    "dp_self-disclosure_case-sara_03": {
      "text": "[På gråten] Når jeg gråter og du blir stille, blir jeg redd for at tårene mine får deg til å trekke deg unna.",
      "suggestion": "Tårene dine får meg ikke til å trekke meg unna. Når du gråter, kjenner jeg meg nær og varsom, ikke fjern. La oss legge merke til delen av deg som ventet at jeg skulle gå."
    },
    "dp_self-disclosure_case-sara_04": {
      "text": "[Lavmælt] Dette er første gang jeg er i terapi. Forventer du at jeg skal vite hvor jeg skal begynne?",
      "suggestion": "Nei. Jeg forventer ikke at du vet hvor du skal begynne. Jeg kan hjelpe oss å finne en start; du trenger ikke gjøre terapi riktig for meg."
    },
    "dp_self-disclosure_case-sara_05": {
      "text": "[Flau] Jeg synes det er flaut at du ser meg så rotete og trengende.",
      "suggestion": "Jeg dømmer verken rotet eller behovet. Jeg kjenner respekt for motet det tar å la meg se dem, og jeg vil at vi legger merke til skammen som ventet noe hardere."
    },
    "dp_self-disclosure_case-sara_06": {
      "text": "[Nølende] Tror du faktisk at jeg ikke fortsatt er alene om et år, eller prøver du bare å trøste meg?",
      "suggestion": "Jeg kan ikke love hva et år vil bringe, og jeg vil ikke trøste deg med en sikkerhet jeg ikke har. Jeg kjenner ekte håp når jeg sitter med deg. La oss gi plass til begge deler: håpet mitt og frykten din for at du fortsatt kan være alene."
    },
    "dp_self-disclosure_case-sara_07": {
      "text": "[Redd] Når jeg spør om jeg er for mye, er jeg redd du begynner å trekke deg unna.",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner meg til stede og villig til å være nær denne frykten, uten å be deg tro meg raskere enn du kan."
    },
    "dp_self-disclosure_case-sara_08": {
      "text": "[Nølende] Er du i et forhold? Får det deg til å dømme meg?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si tydelig at jeg ikke dømmer deg. Jeg er interessert i hva det betyr for deg å spørre meg om dette, og hva du er redd jeg kan se i deg."
    },
    "dp_self-disclosure_case-sara_09": {
      "text": "[Skamfull] Jeg hater at jeg trenger noen, og å trenge deg gjør meg blottstilt.",
      "suggestion": "Når jeg hører det, kjenner jeg ømhet for hvor risikabelt det er for deg å trenge noen. Jeg trekker meg ikke unna behovet; vi kan legge merke til delen av deg som forventer at det skal koste deg."
    },
    "dp_self-disclosure_case-sara_10": {
      "text": "[Nølende] Bryr du deg egentlig om meg, eller er omsorg bare en del av jobben din?",
      "suggestion": "Jeg bryr meg om deg i denne terapirelasjonen. Grensene er en del av å ta ansvar for omsorgen, ikke et tegn på at omsorgen er falsk. La oss legge merke til hva det vekker å høre begge deler."
    },
    "dp_self-disclosure_case-michael_01": {
      "text": "[Utfordrende] Vær ærlig—høres jeg svak ut når jeg snakker om å være såret?",
      "suggestion": "Jeg hører ikke svakhet i dette. Jeg hører innsats og mot, og jeg kjenner respekt for at du sier det. Jeg vil at den respekten får stå ved siden av delen som ventet forakt."
    },
    "dp_self-disclosure_case-michael_02": {
      "text": "[Anspent] Når jeg spør om du også blir sint, trenger jeg å vite at du ikke ser ned på mitt sinne.",
      "suggestion": "Jeg kjenner sinne i meg selv også, og jeg ser ikke ned på ditt. Jeg kjenner meg stødig nok til å være med det her; jeg står ikke over følelsen du er redd jeg skal dømme."
    },
    "dp_self-disclosure_case-michael_03": {
      "text": "[Anspent] Du tenker sikkert at det er jeg som er problemet hjemme, sånn som alle andre.",
      "suggestion": "Jeg ser ikke på deg som problemet. Jeg kjenner hvor mye smerte som ligger under varmen, og jeg vil at vi holder oss nær det uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-michael_04": {
      "text": "[Engstelig] Når jeg innrømmer at jeg ropte, leter jeg etter fordømmelse i ansiktet ditt.",
      "suggestion": "Jeg dømmer deg ikke. Jeg blir bekymret for hva ropingen koster deg og menneskene du er glad i, og jeg kjenner også respekt for at du er villig til å se på det her."
    },
    "dp_self-disclosure_case-michael_05": {
      "text": "[Utfordrende] Blir terapeuter lei av å høre den samme historien om utbrudd igjen?",
      "suggestion": "Jeg blir ikke lei av å høre det. Jeg blir fokusert når vi kommer tilbake til splitsekundet der det snur, fordi det er der kontrollen din kan vokse."
    },
    "dp_self-disclosure_case-michael_06": {
      "text": "[Utfordrende] Er du sterk nok til å tåle meg når jeg er sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å være med sinnet ditt. Jeg er ikke her for å bevise styrke mot deg; jeg vil at vi forstår hva sinnet beskytter."
    },
    "dp_self-disclosure_case-michael_07": {
      "text": "[Fast] Du ser rolig ut mens jeg forteller om ropingen hjemme; går noe av dette egentlig inn på deg?",
      "suggestion": "Ja, det går inn på meg. Jeg holder meg rolig med vilje, så vi kan fortsette å se på det uten at noen av oss trekker seg unna; roen min er stødighet, ikke avstand."
    },
    "dp_self-disclosure_case-michael_08": {
      "text": "[Utfordrende] Respekterer du det å jobbe med en som blir så opphetet som meg?",
      "suggestion": "Jeg respekterer å jobbe med deg. Jeg kjenner alvoret bak direkteheten din og prisen du prøver å se på, og jeg vil gi rom til hvor vanskelig respekt fra meg kan være å ta inn."
    },
    "dp_self-disclosure_case-michael_09": {
      "text": "[Nysgjerrig] Er du gift? Jeg lurer på om du tar med deg sinnet hjem.",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg vet noe om arbeidet med å roe ned sinne før det renner over i relasjoner. Jeg ser ikke på ditt sinne fra avstand. La oss legge merke til hvorfor det er viktig for deg å vite."
    },
    "dp_self-disclosure_case-michael_10": {
      "text": "[Flau] Si at du skjønner hvorfor dette er så vanskelig, for jeg føler meg latterlig som trenger hjelp.",
      "suggestion": "Jeg skjønner hvorfor dette er vanskelig. Jeg hører press og sårethet i det, ikke noe latterlig, og jeg vil snakke direkte til delen som forventer forakt fra meg."
    },
    "dp_self-disclosure_case-jason_01": {
      "text": "[Stille] Når jeg blir stille, bekymrer jeg meg for at du sitter der og skulle ønske jeg skyndte meg.",
      "suggestion": "Du kaster ikke bort tiden min. Jeg er fortsatt interessert i deg i stillheten, og jeg vil at vi sjekker frykten for at jeg allerede har forlatt deg der alene."
    },
    "dp_self-disclosure_case-jason_02": {
      "text": "[Nølende] Jeg spør om du noen gang føler deg utilpass fordi jeg føler meg som en fremmed her.",
      "suggestion": "Jeg kjenner også til det å føle seg utilpass, og det gjør at jeg vil gå varsomt fram her sammen med deg. Kanskje gjør det dette litt mindre ensomt, eller kanskje ikke ennå."
    },
    "dp_self-disclosure_case-jason_03": {
      "text": "[Lang pause] Når jeg pauser for lenge, ser jeg for meg at du tenker at jeg er kjedelig.",
      "suggestion": "Jeg opplever deg ikke som kjedelig. Jeg kjenner meg nysgjerrig og sammen med deg, også i pausene; pausene får meg ikke til å forsvinne."
    },
    "dp_self-disclosure_case-jason_04": {
      "text": "[Nølende] Er det greit at jeg ikke vet hva jeg skal si?",
      "suggestion": "Det er greit å ikke vite hva du skal si. Jeg kjenner tålmodighet med deg her; det å ikke vite gjør ikke at du mislykkes med meg."
    },
    "dp_self-disclosure_case-jason_05": {
      "text": "[Nølende] Da jeg droppet festen, ble du skuffet over meg eller tenkte at jeg unngikk for mye igjen?",
      "suggestion": "Nei. Jeg kjenner ikke skuffelse. Jeg merker hvor mye den festen krevde av hele systemet ditt, og jeg vil at svaret mitt møter delen som venter på karakter."
    },
    "dp_self-disclosure_case-jason_06": {
      "text": "[Nølende] Blir du utålmodig når jeg blir stille og ikke finner ord?",
      "suggestion": "Jeg blir ikke utålmodig. Jeg kjenner meg beskyttende overfor dette langsommere tempoet, og interessert i stillheten som noe meningsfullt heller enn en feil."
    },
    "dp_self-disclosure_case-jason_07": {
      "text": "[Stille] Når jeg blir stille, dømmer du meg eller blir irritert inni deg?",
      "suggestion": "Jeg dømmer ikke stillheten din, og jeg blir ikke irritert. Jeg respekterer innsatsen det tar å bli her. Stillheten kan være en del av arbeidet, ikke noe du må beklage."
    },
    "dp_self-disclosure_case-jason_08": {
      "text": "[Nølende] Hvis jeg sier noe kleint her, ville du sagt fra, eller bare sittet og dømt det inni deg?",
      "suggestion": "Jeg ville prøvd å være ærlig og vennlig, ikke sitte og dømme deg i det skjulte. Jeg kjenner meg beskyttende overfor delen som allerede venter latterliggjøring."
    },
    "dp_self-disclosure_case-jason_09": {
      "text": "[Nølende] Blir du noen gang nervøs i grupper, eller er det bare meg?",
      "suggestion": "Ja, jeg kan også bli nervøs i grupper iblant. Jeg sier det fordi jeg ikke ser frykten din som rar eller fremmed; den hører til et menneskelig register, selv om din er smertefull."
    },
    "dp_self-disclosure_case-jason_10": {
      "text": "[Stille] Når jeg spør om jeg noen gang blir mindre engstelig, trenger jeg å vite om du faktisk tror på det.",
      "suggestion": "Jeg kjenner håp sammen med deg. Jeg kjenner det fordi jeg ser hvor hardt du fortsetter å strekke deg mot kontakt, selv når frykten trekker deg tilbake."
    },
    "dp_self-disclosure_case-laura_01": {
      "text": "[Langsomt og flatt] Når jeg ikke føler noe, blir du utilpass eller tenker at jeg er utilgjengelig?",
      "suggestion": "Jeg blir ikke utilpass av nummenheten, og jeg ser deg ikke som utilgjengelig. Jeg kjenner meg varsom og tålmodig med den, og jeg vil at du får rom her uten å prestere følelse for meg."
    },
    "dp_self-disclosure_case-laura_02": {
      "text": "[Nølende] Er du irritert over at jeg fortsetter å beskytte meg i stedet for å åpne meg?",
      "suggestion": "Jeg er ikke irritert. Jeg kjenner respekt for hvor viktig det har vært å beskytte deg. Du kan ta inn bare den delen av det som kjennes sann."
    },
    "dp_self-disclosure_case-laura_03": {
      "text": "[Anspent og på vakt] Du virker rolig—skjønner du egentlig hvordan dette er?",
      "suggestion": "Jeg kjenner tyngden i det, og jeg holder meg rolig med vilje for at dette skal føles tryggere. Roen min er ment som stødighet, ikke avstand."
    },
    "dp_self-disclosure_case-laura_04": {
      "text": "[Langsomt og flatt] Har du jobbet med traumer som mine før, eller er jeg for avstengt for dette?",
      "suggestion": "Ja, jeg har arbeidet med traumer før, og jeg ser ikke avstengningen din som en feil. Jeg vil også si fra hvis jeg tenker at vi trenger mer støtte. Avstengningen din gjør ikke dette umulig for meg."
    },
    "dp_self-disclosure_case-laura_05": {
      "text": "[Fjern] Etter at du har hørt hva som skjedde, tenker du mindre om meg eller ser meg som ødelagt?",
      "suggestion": "Jeg tenker ikke mindre om deg. Jeg kjenner sorg over det du har båret, og respekt for hvor varsomt du har overlevd."
    },
    "dp_self-disclosure_case-laura_06": {
      "text": "[Nølende] Kommer du til å presse meg inn i detaljer hvis jeg blir stille for lenge?",
      "suggestion": "Jeg kommer ikke til å presse deg inn i detaljer. Jeg er mer opptatt av at du skal være trygg nok til å være til stede. Du kan korrigere meg hvis jeg går for fort."
    },
    "dp_self-disclosure_case-laura_07": {
      "text": "[Nølende] Ser du når jeg blir langt borte, eller virker jeg bare vanskelig?",
      "suggestion": "Noen ganger kan jeg merke at du er langt borte, og da blir jeg mer opptatt av tempo enn av å gå dypere. Jeg leser det ikke som vanskelig."
    },
    "dp_self-disclosure_case-laura_08": {
      "text": "[Nølende] Tror du vennligheten din vil gjøre meg verre eller mer avhengig?",
      "suggestion": "Jeg vil ikke at vennligheten min skal presse fram noe eller gjøre deg avhengig av meg. Jeg vil at omsorg her skal være noe de beskyttende delene dine kan teste, mens du beholder valget."
    },
    "dp_self-disclosure_case-laura_09": {
      "text": "[Langsomt og flatt] Når jeg blir blank, er du redd for at jeg holder på å bryte sammen?",
      "suggestion": "Jeg er ikke redd for at du skal bryte sammen med meg. Jeg er klar til å senke farten med en gang du trenger det, og du trenger ikke holde deg samlet for min skyld."
    },
    "dp_self-disclosure_case-laura_10": {
      "text": "[Nysgjerrig] Tror du jeg kan begynne å føle igjen, eller er du bare snill?",
      "suggestion": "Ja, jeg tror det er mulig å kjenne mer igjen, og jeg sier det ikke bare for å være snill. Jeg er tålmodig med veien dit; vi trenger ikke presse det fram for å bevise det."
    },
    "dp_self-disclosure_case-carlos_01": {
      "text": "[Utfordrende] Tror du jeg er en dårlig far fordi jeg mister det?",
      "suggestion": "Når du sier det, kjenner jeg hvor mye sønnen din betyr for deg. Jeg ser ikke en dårlig far foran meg. Jeg vil at vi blir nær faren som bryr seg så mye."
    },
    "dp_self-disclosure_case-carlos_02": {
      "text": "[Anspent] Når du snakker om sårbarhet, prøver du å gjøre meg myk?",
      "suggestion": "Jeg prøver ikke å gjøre deg myk. Jeg kjenner respekt for styrken din, og jeg vil hjelpe den til å bli tryggere for menneskene du er glad i."
    },
    "dp_self-disclosure_case-carlos_03": {
      "text": "[Anspent og sint] Når jeg beskriver varmen i meg, skremmer noe av det deg?",
      "suggestion": "Jeg kjenner meg våken og stødig sammen med deg, ikke redd for deg. Jeg vil at vi bruker den stødigheten til å se trygt på varmen."
    },
    "dp_self-disclosure_case-carlos_04": {
      "text": "[Skamfull] Du ser sikkert på meg og ser bare enda en sint fyr.",
      "suggestion": "Jeg ser ikke bare sinne. Jeg kjenner stoltheten, såretheten og lojaliteten som kommer så fort under det. For meg er du mer enn enda en sint fyr."
    },
    "dp_self-disclosure_case-carlos_05": {
      "text": "[Anspent og sint] Er du tøff nok til å sitte med meg når jeg blir så sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å sitte med sinnet ditt. Jeg er ikke her for å overkjøre deg eller bli overkjørt av deg; dette trenger ikke bli en konkurranse. Vi kan bruke stødigheten min til å forstå hva sinnet beskytter."
    },
    "dp_self-disclosure_case-carlos_06": {
      "text": "[Skamfull] Kan du respektere meg når du har sett hvor stygt temperamentet mitt kan bli?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det tydeligst når du lar meg se både temperamentet og hva det koster deg. La respekten gjelde prisen også, ikke bare kontrollen."
    },
    "dp_self-disclosure_case-carlos_07": {
      "text": "[Utfordrende] Fungerer puste-greiene for deg når du kjenner at du er klar til å smelle?",
      "suggestion": "Ja. Å roe pusten hjelper meg å beholde valg når aktiveringen stiger. Jeg tar det inn fordi jeg respekterer kontroll, ikke fordi jeg ser det som svakhet."
    },
    "dp_self-disclosure_case-carlos_08": {
      "text": "[Nysgjerrig] Er du gift, og mister du noen gang besinnelsen med folk du er glad i?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si at sinne er menneskelig for meg. Jeg sitter ikke over ditt i fordømmelse. Vi kan legge merke til hva privatheten og ærligheten hver for seg vekker i deg."
    },
    "dp_self-disclosure_case-carlos_09": {
      "text": "[Utfordrende] Tror du faktisk at jeg kan endre meg, eller sier du bare det terapeuter sier?",
      "suggestion": "Jeg tror du kan forandre deg, og jeg sier det ikke som en replikk. Jeg kjenner det sterkest når jeg hører hvor mye familien din betyr for deg."
    },
    "dp_self-disclosure_case-carlos_10": {
      "text": "[Defensiv] Vær ærlig, gruer du deg til timene når jeg kommer inn så pansret?",
      "suggestion": "Jeg gruer meg ikke. Jeg kjenner meg våken, engasjert og respektfull overfor forpliktelsen under rustningen. Du trenger ikke komme uten rustning for at jeg skal ville jobbe med deg."
    },
    "dp_self-disclosure_case-nina_01": {
      "text": "[Skyldpreget] Jeg føler meg egoistisk bare av å ta plass her i stedet for å hjelpe noen andre.",
      "suggestion": "Jeg opplever deg ikke som egoistisk her. Jeg kjenner meg beskyttende overfor delen av deg som hele tiden beklager at den har behov. La den beskyttelsen være for deg, ikke enda et krav."
    },
    "dp_self-disclosure_case-nina_02": {
      "text": "[Unnskyldende] Når jeg sier at jeg er bitter, dømmer du meg for ikke å være snillere?",
      "suggestion": "Jeg dømmer ikke bitterheten. Jeg blir trist av hvor lenge du har båret for mye alene, og jeg vil at det overbelastede stedet skal bli møtt heller enn korrigert."
    },
    "dp_self-disclosure_case-nina_03": {
      "text": "[Splittet] Du tenker sikkert at jeg bare burde skjerpe meg og slutte å gjøre alt så vanskelig.",
      "suggestion": "Jeg tenker ikke at du bare burde skjerpe deg. Jeg kjenner medfølelse med hvor mye du overstyrer deg selv, og jeg vil at det møter delen som kom forberedt på kritikk."
    },
    "dp_self-disclosure_case-nina_04": {
      "text": "[Nølende] Kjenner du noen gang skyld når du hviler, eller er det bare mitt problem?",
      "suggestion": "Jeg kjenner også skyld rundt hvile fra mitt eget liv, og det hjelper meg å ta din på alvor. Jeg behandler den ikke som dum eller bare som et deg-problem."
    },
    "dp_self-disclosure_case-nina_05": {
      "text": "[På gråten] Når jeg gråter sånn, blir du utilpass med meg?",
      "suggestion": "Tårene dine gjør meg ikke utilpass med deg. Jeg kjenner meg nærmere deg når de kommer, fordi de lar meg møte noe av det du vanligvis bærer alene."
    },
    "dp_self-disclosure_case-nina_06": {
      "text": "[Splittet] Når jeg ber om hjelp, blir jeg en belastning for deg også?",
      "suggestion": "Du blir ikke en belastning for meg når du ber om hjelp. Jeg kjenner bekymring for hvor alene du er med så mye ansvar, og den bekymringen er min å holde, ikke din å håndtere."
    },
    "dp_self-disclosure_case-nina_07": {
      "text": "[Nølende] Er det greit at jeg ber om hjelp her uten å beklage først?",
      "suggestion": "Ja, det er greit å be om hjelp her. Jeg blir glad når du gjør det, og jeg vil at den gleden møter forventningen om at det å spørre er for mye."
    },
    "dp_self-disclosure_case-nina_08": {
      "text": "[Mistenksom] Blir du lei av at jeg beklager hver gang jeg trenger noe?",
      "suggestion": "Du gjør meg ikke lei. Jeg kjenner varme for behovene du stadig beklager, og vi kan gå sakte med hvor vanskelig den varmen er å ta inn."
    },
    "dp_self-disclosure_case-nina_09": {
      "text": "[Nølende] Sier du fra hvis jeg gjør terapi feil, eller lar du meg bare mislykkes stille?",
      "suggestion": "Jeg ville sagt det varsomt hvis jeg tenkte vi var på villspor. Jeg kjenner respekt for hvor hardt du prøver her, og terapi trenger ikke bli enda et sted der du må prestere perfekt."
    },
    "dp_self-disclosure_case-nina_10": {
      "text": "[Nølende] Synes du virkelig jeg fortjener omsorg når jeg ikke har gjort meg fortjent til den?",
      "suggestion": "Ja, jeg mener at du fortjener omsorg før du har gjort deg fortjent til noe som helst. Jeg er tydelig på det her. Den tvilende delen trenger ikke tro meg raskt."
    },
    "dp_self-disclosure_case-aisha_01": {
      "text": "[Nølende] Bryr du deg egentlig om meg, eller får du betalt for det?",
      "suggestion": "Jeg bryr meg om deg i denne terapirelasjonen. Den betalte rollen gir omsorgen grenser; den gjør den ikke falsk. Vi kan være med både lettelsen og mistilliten det kan vekke."
    },
    "dp_self-disclosure_case-aisha_02": {
      "text": "[Desperat] Når jeg spør om du kommer til å forlate meg, trenger jeg å vite om du allerede vil ha avstand.",
      "suggestion": "Jeg kjenner kraften i den frykten, og jeg prøver ikke å skape avstand her. Jeg er her for å være tydelig og pålitelig, særlig når frykten sier at jeg allerede er på vei bort."
    },
    "dp_self-disclosure_case-aisha_03": {
      "text": "[Nølende] Skremte jeg deg da jeg sa jeg ville skade meg?",
      "suggestion": "Du skremte meg ikke bort. Jeg ble bekymret fordi tryggheten din betyr noe, og jeg er fortsatt her sammen med deg. Bekymringen min betyr varsom nærhet, ikke avstand."
    },
    "dp_self-disclosure_case-aisha_04": {
      "text": "[Såret] Da du ikke svarte på meldingen min, ble jeg såret og lurte på om grensen betydde mer enn meg.",
      "suggestion": "Jeg beklager at grensen gjorde deg vondt. Grensen er ekte, og omsorgen min er også ekte; den ene opphever ikke den andre. Hva skjer når du hører begge deler fra meg?"
    },
    "dp_self-disclosure_case-aisha_05": {
      "text": "[Redd] Er du sint på meg, eller har jeg allerede ødelagt dette?",
      "suggestion": "Jeg er ikke sint på deg. Jeg kjenner ømhet for den redde delen som forventer at kontakten skal ryke; den forventningen kan vi forstå sammen."
    },
    "dp_self-disclosure_case-aisha_06": {
      "text": "[Skamfull] Når jeg blir så intens, synes du jeg er for mye?",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner størrelsen på smerten, og det betyr noe for meg å hjelpe deg med å holde den, særlig der du forventer at jeg trekker meg unna."
    },
    "dp_self-disclosure_case-aisha_07": {
      "text": "[Desperat] Når jeg spør om du liker meg, forventer en del av meg allerede at svaret skal forsvinne.",
      "suggestion": "Jeg kjenner varme og omsorg for deg i denne terapirelasjonen, og jeg er glad du spurte direkte. Svaret har grenser, og det er ekte. Hva skjer inni deg når du hører begge deler?"
    },
    "dp_self-disclosure_case-aisha_08": {
      "text": "[Nølende] Er du skuffet over meg, eller sier du det bare ikke?",
      "suggestion": "Skuffelse er ikke det jeg bærer på. Jeg kjenner takknemlighet for at du lar meg se hva som skjer, og vi kan legge merke til hvor raskt du ventet skuffelse fra meg."
    },
    "dp_self-disclosure_case-aisha_09": {
      "text": "[Anklagende] Du var to minutter forsinket igjen. Merker du i det hele tatt hva det gjør med meg, eller betyr det bare ingenting for deg?",
      "suggestion": "Jeg la merke til at jeg var forsinket, og jeg beklager. Det var ikke ingenting for meg. Jeg kan se for meg at det traff som om du ikke betydde noe; la oss være med det som skjedde i deg da jeg ikke var her presis."
    },
    "dp_self-disclosure_case-aisha_10": {
      "text": "[Nølende] Tror du jeg noen gang vil ha det greit, eller er jeg for intens til det?",
      "suggestion": "Jeg kjenner håp sammen med deg, og jeg tror ikke intensiteten din gjør det umulig å få det greit. Vi kan holde håpet lett nok til at det ikke blir press."
    },
    "dp_self-disclosure_case-david_01": {
      "text": "[Kontrollert] Når jeg sier at du må overbevise meg, følger jeg med på om du blir defensiv.",
      "suggestion": "Når du ber meg overbevise deg, merker jeg et drag mot å bevise meg selv. Jeg velger åpenhet i stedet for forsvar, fordi det å bevise meg selv ville bommet på det du tester i meg. La oss se på den testen sammen."
    },
    "dp_self-disclosure_case-david_02": {
      "text": "[Utfordrende] Vil du faktisk jobbe med en som kan høres så arrogant ut som meg?",
      "suggestion": "Ja, jeg er villig og engasjert i å jobbe med deg. Jeg blir interessert i det som står på spill under fasaden og arrogansen; legg merke til hva som lander først, interessen eller tvilen."
    },
    "dp_self-disclosure_case-david_03": {
      "text": "[Flau] En del av meg vil at du skal være imponert, og det er flaut å innrømme.",
      "suggestion": "Det jeg kjenner sterkest er interesse for deg, ikke et behov for å bli imponert. Jeg setter også pris på at du sier den flaue delen direkte; ærligheten interesserer meg mer enn prestasjonen."
    },
    "dp_self-disclosure_case-david_04": {
      "text": "[Utfordrende] Vær ærlig—tenker du at jeg er problemet i alle rom jeg går inn i?",
      "suggestion": "Jeg holder ikke deg som problemet. Jeg kjenner hvor raskt skam og forsvar går på hos deg; det mønsteret kan vi legge merke til uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-david_05": {
      "text": "[Avvisende] Når du ser på meg sånn, lurer jeg på om du synes synd på meg. Gjør du det?",
      "suggestion": "Jeg synes ikke synd på deg. Jeg kjenner bekymring og respekt for hvor vanskelig det er å la disse sidene bli sett. Hva skjer når jeg skiller bekymring fra medlidenhet?"
    },
    "dp_self-disclosure_case-david_06": {
      "text": "[Avvisende] Jeg vet at jeg er forsinket igjen. Jobben tok overhånd. Uansett, hvor skal vi begynne?",
      "suggestion": "Dette er vanskelig å si direkte: når du kommer for sent gjentatte ganger og går raskt forbi det, kjennes arbeidet mellom oss skjøvet til side, og jeg føler meg litt avvist. La oss starte der før vi bestemmer hvor vi skal gå videre."
    },
    "dp_self-disclosure_case-david_07": {
      "text": "[Såret, men skarp] Skammer du deg noen gang over å ta feil, eller er den svakheten bare min?",
      "suggestion": "Jeg kjenner også skam rundt å ta feil i mitt eget liv, og det hjelper meg å respektere hvor hett det er for deg, ikke avfeie det som svakhet. Jeg står ikke over deg i den kampen."
    },
    "dp_self-disclosure_case-david_08": {
      "text": "[Avvisende] Dette er kleint, men synes du jeg er attraktiv, eller ser du bare enda en vanskelig klient?",
      "suggestion": "Jeg vil svare varsomt: Jeg kan se deg som en attraktiv person, og jeg forholder meg ikke til deg romantisk eller seksuelt. Dette er en terapirelasjon. Jeg ser deg heller ikke som bare en vanskelig klient; begge grensene betyr noe her."
    },
    "dp_self-disclosure_case-david_09": {
      "text": "[Nysgjerrig] Er du gift, og ville det få deg til å dømme affæren min?",
      "suggestion": "Jeg holder relasjonsdetaljene mine private her, og jeg er ikke her for å dømme deg. Jeg er interessert i hva affæren betyr og hva den koster deg; privatheten min er ikke en dom."
    },
    "dp_self-disclosure_case-david_10": {
      "text": "[Utfordrende] Respekterer du meg egentlig når du ser disse sidene av meg?",
      "suggestion": "Jeg respekterer deg. Respekten er sterkest her når de vanskeligere delene er synlige, ikke bare når du er polert."
    },
    "dp_self-disclosure_case-marcus_01": {
      "text": "[Flatt] Når jeg spør om jeg er ødelagt, trenger jeg å vite hva du ser.",
      "suggestion": "Jeg ser ikke noe ødelagt i deg. Jeg kjenner respekt for hvor hardt du har arbeidet for å overleve, og du trenger ikke svare på det før du er klar."
    },
    "dp_self-disclosure_case-marcus_02": {
      "text": "[Langsomt og flatt] Når jeg sitter her nummen, blir du frustrert over at jeg ikke klarer å gi deg mer?",
      "suggestion": "Frustrasjon er ikke det jeg kjenner. Jeg kjenner tålmodighet og varsomhet med tempoet du trenger; du trenger ikke å prestere følelse for meg."
    },
    "dp_self-disclosure_case-marcus_03": {
      "text": "[Nølende] Går dette inn på deg, eller holder du deg utenfor det?",
      "suggestion": "Det går inn på meg, og jeg holder meg stødig med vilje så du ikke skal måtte bære det alene. Stødigheten min er kontakt, ikke avstand."
    },
    "dp_self-disclosure_case-marcus_04": {
      "text": "[Flatt] Når jeg nesten ikke snakker, vil du fortsatt ha meg her i det hele tatt?",
      "suggestion": "Jeg vil ha deg her. Jeg kjenner meg glad når du møter opp, også på dager med få ord; nærværet ditt teller for meg før du forklarer noe."
    },
    "dp_self-disclosure_case-marcus_05": {
      "text": "[Nølende] Kommer du til å presse meg inn i ting før jeg vet hvordan jeg stopper?",
      "suggestion": "Nei, jeg kommer ikke til å presse deg inn i noe før du vet hvordan du stopper. Jeg er mer opptatt av at dette skal være tålelig enn av å gå fort. Vi kan sjekke sammen hvilket tempo som holder dette mulig."
    },
    "dp_self-disclosure_case-marcus_06": {
      "text": "[Nølende] Tror du faktisk at jeg kan endre meg etter å ha vært sånn i årevis?",
      "suggestion": "Jeg tror endring er mulig, også etter årevis med å leve på denne måten, og jeg kjenner tålmodighet med hvor sakte den kanskje må gå. La muligheten være beskjeden nok til at den ikke krever mer av deg."
    },
    "dp_self-disclosure_case-marcus_07": {
      "text": "[Lav stemme] Ville du sagt fra hvis stillheten min sløste bort tiden din?",
      "suggestion": "Hvis jeg tenkte at vi bommet på hverandre, ville jeg sagt det med omsorg. Jeg kjenner at denne tiden betyr noe, også når det er få ord, og vi kan la det lande sakte."
    },
    "dp_self-disclosure_case-marcus_08": {
      "text": "[Nølende] Skremmer traumahistorier deg, eller kan du være stødig med min?",
      "suggestion": "Traumehistorier påvirker meg, og de skremmer meg ikke bort. Jeg arbeider for å holde meg jordet med dem, og jeg er stødig nok til å høre din i tempoet du velger."
    },
    "dp_self-disclosure_case-marcus_09": {
      "text": "[Stille og på vakt] Har du faktisk jobbet med noen som meg, eller øver du deg på meg?",
      "suggestion": "Jeg har jobbet med traumer og med mennesker som bruker få ord for å holde seg trygge. Jeg lærer alltid, men jeg bruker deg ikke som praksis. Jeg har støtte rundt dette arbeidet og vil si fra hvis vi trenger en annen ressurs."
    },
    "dp_self-disclosure_case-marcus_10": {
      "text": "[Lav stemme] Er du komfortabel med stillhet, eller får den deg til å ville fylle den?",
      "suggestion": "Jeg tåler stillhet. Jeg kjenner ofte nærvær i stillhet, ikke avstand. Du kan la stillheten teste det langsomt, i stedet for å svare med en gang."
    },
    "dp_marker-recognition-chairwork_case-sara_01": {
      "text": "[Lavmælt] Jeg sier til meg selv at hvis jeg bare var sterkere, ville jeg vært over ham nå. Det kommer om natten når jeg savner ham: Normale mennesker går videre, du er patetisk som fortsatt trenger noen som dro.",
      "suggestion": "Her er det en krevende stemme som kaller sorgen patetisk. Kan vi gi den stemmen denne stolen og den sårede siden den andre stolen noen minutter? Sitt her som den krevende stemmen og si setningene direkte; så flytter vi til siden som fortsatt savner ham og hører hvordan det er å få dem rettet mot seg."
    },
    "dp_marker-recognition-chairwork_case-sara_02": {
      "text": "[Sint] Jeg fortsetter å spille av det jeg skulle ønske jeg hadde sagt da han dro. Han pakket så rolig, som om jeg allerede var fortid, og jeg frøs. Etterpå hørte jeg stadig: «Du fikk meg til å føle meg som noe som kunne kastes.»",
      "suggestion": "Det er noe som fortsatt ikke er sagt til ham om å bli behandlet som noe som kunne kastes. Hvis du vil, kan vi hente ham inn i den tomme stolen og begynne med den ene setningen: «Du fikk meg til å føle meg som noe som kunne kastes.» Vi holder det til én eller to linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-sara_03": {
      "text": "[Flau] Når jeg begynner å gråte, svelger jeg hardt og stirrer opp i taket til det går over. Så kommer stemmen: Slutt å lage en scene, ingen orker dette igjen.",
      "suggestion": "Tårene begynner å komme, og så kommer en annen side som svelger dem og kaller dem en scene. Vil du prøve å vise den stoppingen fra denne stolen: svelge, se bort og si at hun ikke skal gråte? Så flytter vi til den tårevåte siden og lar den svare kort."
    },
    "dp_marker-recognition-chairwork_case-sara_04": {
      "text": "[Flau] Jeg ser på gamle bilder og sier til meg selv at jeg var for klengete, for dramatisk, for mye. Jeg zoomer inn på mitt eget ansikt og bygger en hel sak for at han dro fordi det ble utmattende å elske meg.",
      "suggestion": "Denne gjennomgangen av bildene blir til en hard sak mot delen av deg som ønsket nærhet. Er det greit å gi den anklagende stemmen én stol og delen som ønsket kjærlighet den andre? Start i anklager-stolen og si ordene direkte: «du var for klengete, for dramatisk, for mye.» Så flytter vi til delen som hører det."
    },
    "dp_marker-recognition-chairwork_case-sara_05": {
      "text": "[Sint] Jeg spiller fortsatt av lunsjen med venninnen min, da hun sa at jeg kanskje bare burde gå videre. Jeg smilte som om jeg forsto, men inni meg ville jeg si: Slutt å skynde på meg, du får meg til å føle meg dum fordi jeg fortsatt elsker ham.",
      "suggestion": "Det finnes en protest til venninnen din som aldri fikk et sted å lande. Hvis du vil, setter vi henne i den tomme stolen og begynner med linjen du svelget i lunsjen: «Slutt å skynde på meg.» Så stopper vi og ser hva som kommer videre."
    },
    "dp_marker-recognition-chairwork_case-sara_06": {
      "text": "[Lavmælt] Når jeg begynner å savne ham, tar jeg telefonen og scroller til følelsen blir flat. Tommelen bare fortsetter, og når jeg ser opp igjen, kan jeg si til meg selv at det ikke var så viktig.",
      "suggestion": "Telefonen blir måten savnet flates ut på før det får snakke. Kan vi sette opp to stoler for det? Fra denne stolen viser du hvordan du skroller følelsen ned; så flytter vi til siden som savner og lar den si noen få ord."
    },
    "dp_marker-recognition-chairwork_case-sara_07": {
      "text": "[På gråten] Jeg tenker stadig at jeg ødela forholdet ved å be om for mye. Jeg spiller av kvelden da han sa at han trengte avstand, og så hører jeg meg selv si: Du presset for hardt, du burde vært lettere å elske.",
      "suggestion": "En skyldstemme gjør behovet ditt for nærhet til bevis på at du ødela alt. Kan vi gi den skyldstemmen denne stolen og siden som trengte nærhet den andre? Start som skylden og si til henne: «du presset for hardt; du burde vært lettere å elske.» Så flytter vi til siden som trengte nærhet."
    },
    "dp_marker-recognition-chairwork_case-sara_08": {
      "text": "[Nølende] Jeg ser for meg at jeg sier til ham: «Du lot meg være alene med alt dette», og så stopper jeg meg selv. Halsen lukker seg, og jeg tenker: Ikke send det, ikke vær patetisk, han har allerede valgt å gå.",
      "suggestion": "Her er det to markører, og det uavsluttede med ham gir oss tydeligst startpunkt. Vi kan plassere ham i den tomme stolen og la deg si bare den første linjen: «Du lot meg sitte igjen alene med alt dette», og stoppe så snart halsen begynner å lukke seg."
    },
    "dp_marker-recognition-chairwork_case-sara_09": {
      "text": "[Engstelig] Før en date ser jeg for meg at han legger merke til alt det trengende ved meg. Jeg hører: Ikke slapp av, ikke send melding for fort, ikke la ham se rotet. Hvis han ser det, går han også.",
      "suggestion": "Den engstelige regelmakeren prøver å beskytte deg ved å skremme deg før daten i det hele tatt skjer. Kan vi sette opp to stoler for det? Fra denne stolen gir du henne reglene og spådommene; så flytter vi til den redde siden som hører dem."
    },
    "dp_marker-recognition-chairwork_case-sara_10": {
      "text": "[På gråten] Jeg har fortsatt lyst til å si til ham: «Du fikk gå, men jeg måtte bli igjen i leiligheten med alle minnene.»",
      "suggestion": "Den linjen hører hjemme direkte hos ham. Hvis du vil, henter vi ham inn i den tomme stolen og sier den én gang: «Du fikk gå, men jeg måtte bli igjen med alle minnene.» Så stopper vi før vi legger til noe mer."
    },
    "dp_marker-recognition-chairwork_case-michael_01": {
      "text": "[Anspent og skamfull] Hver gang jeg kjenner meg såret, særlig når kona mi sier at jeg virker såret, kommer ordene til faren min tilbake: Slutt å være svak og få kontroll. Da retter jeg meg opp og begynner å snakke som om ingenting traff.",
      "suggestion": "Beskjeden fra faren din har blitt en indre stemme som stenger ned såretheten. Vil du gi den stemmen én stol og den sårede siden den andre? Start i kommando-stolen og si direkte til ham: «Slutt å være svak og få kontroll.»"
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt fortelle faren min hva det kostet meg at han kalte hver følelse for svakhet.",
      "suggestion": "Det peker mot et uavsluttet oppgjør med faren din. Hvis du vil, kan du sette ham i denne stolen og si hva det kostet å få sårhet behandlet som svakhet. Jeg holder det strukturert og kort."
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      "text": "[Anspent] I det sekundet jeg begynner å mykne, hører jeg: «Ta deg sammen», og så begynner jeg å ramse opp alt jeg burde gjort bedre.",
      "suggestion": "Den mykere følelsen begynner å vise seg, og så skjærer kommandoen inn. La oss gjøre avbrytelsen synlig med to stoler: Fra denne stolen sier du «ta deg sammen» og ramser opp hva han burde gjort bedre; så flytter vi til den mykere siden."
    },
    "dp_marker-recognition-chairwork_case-michael_04": {
      "text": "[Skamfull] Etter at jeg smeller, blir alle stille, og senere sitter jeg i bilen og kaller meg idiot for å ha mistet kontrollen igjen. Jeg sier det ikke høyt hjemme, men ordene fortsetter: Du er akkurat som ham, du lærer aldri.",
      "suggestion": "Scenen i bilen blir til et indre angrep som lar deg sitte alene med skam. Kan vi sette den angripende stemmen i én stol og delen som smalt i den andre? Start som angrepet og si direkte til ham: «du er akkurat som ham; du lærer aldri.» Så flytter vi til siden som får det rettet mot seg."
    },
    "dp_marker-recognition-chairwork_case-michael_05": {
      "text": "[Anspent og sint] Jeg ser stadig for meg faren min sitte der med det blikket etter at jeg kom hjem med enda et trofé. Jeg vil si til ham: «Ingenting jeg gjorde var noen gang nok for deg, og jeg er lei av fortsatt å prøve å vinne.»",
      "suggestion": "Det finnes fortsatt en direkte protest til faren din om aldri å være nok. Hvis du vil, setter vi ham i den tomme stolen og begynner med én linje: «Ingenting jeg gjorde var noen gang nok for deg.» Vi holder nok kontakt med både sinne og sårhet til å gå langsomt videre."
    },
    "dp_marker-recognition-chairwork_case-michael_06": {
      "text": "[Anspent] Når kona mi prøver å ta på meg etter en krangel, lager jeg en spøk eller begynner å snakke om det som må fikses.",
      "suggestion": "Spøken og fiksingen drar deg unna akkurat når noe mykere kommer nær. Kan vi gi den siden som styrer bort, denne stolen? Vis hvordan den fører ham inn i spøk eller fiksing; så flytter vi til den mykere siden og lar den svare."
    },
    "dp_marker-recognition-chairwork_case-michael_07": {
      "text": "[Bekymret] Før en presentasjon sjekker jeg lysbildene hele natten, fordi én feil ville bevise at jeg ikke burde ha ansvar.",
      "suggestion": "Bekymringen holder deg våken ved å gjøre én mulig feil til bevis på at du ikke burde ha ansvar. Kan vi gi bekymringen denne stolen noen minutter? Fortell ham nøyaktig hva én feil ville bevise; så flytter vi til siden som står under presset."
    },
    "dp_marker-recognition-chairwork_case-michael_08": {
      "text": "[Skamfull] Morgenen etter at jeg har drukket for mye, sitter jeg på sengekanten, og angrepet starter før jeg engang husker alt. Patetisk. Svak. Samme ubrukelige mann, bare med en fasade av kontroll.",
      "suggestion": "Angrepet morgenen etter er veldig direkte: patetisk, svak, ubrukelig. Kan vi sette den angripende stemmen i én stol og den skamfulle siden i den andre? Start fra angrepsstolen og si ordene til ham, så vi kan høre virkningen i stedet for at de bare går inni deg."
    },
    "dp_marker-recognition-chairwork_case-michael_09": {
      "text": "[Lav stemme] Jeg skulle ønske jeg kunne si til sønnen min at jeg er redd han lærer frykt av meg. Når han skvetter av stemmen min, vil jeg si: Jeg kjenner det blikket, og jeg hater at det nå henger sammen med meg.",
      "suggestion": "Det er noe viktig du ikke har klart å si til sønnen din. Hvis du vil, setter vi ham i den tomme stolen og sier bare den første delen: «Jeg er redd du lærer frykt av meg.» Vi holder det sakte nok til å være med både skammen og omsorgen."
    },
    "dp_marker-recognition-chairwork_case-michael_10": {
      "text": "[Anspent] Jeg begynner å si unnskyld, og så sier en stemme: «Ikke gi deg.» Den sier at hvis jeg mykner først, vinner kona mi, og jeg mister den siste respekten jeg har. Så svelger jeg unnskyldningen og begynner å snakke om det hun gjorde i stedet.",
      "suggestion": "«Ikke gi etter»-stemmen stopper unnskyldningen ved å få reparasjon til å kjennes som nederlag. La oss gi den stemmen denne stolen først: argumenter for å svelge unnskyldningen. Så flytter vi til siden som ville reparere og hører hva som blir blokkert."
    },
    "dp_marker-recognition-chairwork_case-jason_01": {
      "text": "[Stille] Jeg sier til meg selv at jeg må holde hodet nede, for hvis folk virkelig ser meg, kommer de til å le. I seminarer kjenner jeg advarselen starte før jeg sier noe: Bli liten, ikke gi dem noe å legge merke til.",
      "suggestion": "Den advarende stemmen gjemmer deg før noen får sjansen til å le. Er det greit å gi advarselen én stol og den utsatte siden den andre? Start som advarselen og si til ham: «bli liten; ikke gi dem noe å legge merke til.»"
    },
    "dp_marker-recognition-chairwork_case-jason_02": {
      "text": "[Nølende] Jeg lurer fortsatt på hva jeg ville sagt til den vennen fra skolen som bare sluttet å snakke med meg. Den ene uken satt vi sammen i lunsjen, og så så han forbi meg som om jeg ikke var der. Jeg spurte aldri hvorfor.",
      "suggestion": "Den vennen sitter fortsatt på et vis rett overfor deg i det ubesvarte lunsjøyeblikket. Hvis du vil, kan vi sette ham i den tomme stolen og begynne med spørsmålet du aldri stilte: «Hvorfor sluttet du å snakke med meg?» Vi holder det til noen få linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-jason_03": {
      "text": "[Engstelig] Når jeg vil bli med i en samtale, strammer halsen seg, og jeg sier til meg selv at jeg må vente på den perfekte åpningen. Så går åpningen forbi, og jeg kjenner meg lettet og ydmyket samtidig.",
      "suggestion": "Strammingen og ventingen stopper ønsket om å bli med før det når rommet. Hvis du vil, lar vi den stoppende siden ta denne stolen først: få ham til å vente på den perfekte åpningen. Så flytter vi til siden som ville bli med."
    },
    "dp_marker-recognition-chairwork_case-jason_04": {
      "text": "[Skamfull] Etter at jeg sier hei på en klein måte, spiller jeg det av i timevis og kaller meg creepy. Det er ikke bare: Det var kleint. Det blir til: Folk merker at det er noe rart med deg, og nå vet de at de bør holde avstand.",
      "suggestion": "Én klein hilsen blir til en stemme som avsier en hel dom over deg. Kan vi gi den dømmende stemmen én stol og den flaue siden den andre? Start her og si linjen direkte: «Folk merker at det er noe rart med deg.» Så bytter vi til siden som bare prøvde å si hei."
    },
    "dp_marker-recognition-chairwork_case-jason_05": {
      "text": "[Stille] Jeg husker fortsatt bordet på ungdomsskolen der de barna lo hver gang jeg snakket. Jeg vil spørre dem: Hva var det som var så morsomt med meg? Jeg spurte aldri; jeg lærte bare å snakke mindre.",
      "suggestion": "De klassekameratene holder fortsatt på spørsmålet som fikk deg til å snakke mindre. Hvis du vil, kan vi plassere dem i den tomme stolen og spørre direkte, langsomt: «Hva var det som var så morsomt med meg?» Så stopper vi før du legger til mer."
    },
    "dp_marker-recognition-chairwork_case-jason_06": {
      "text": "[Nølende] Når noen gir meg et kompliment, trekker jeg på skuldrene og peker på det kleine før de rekker det. Det er som om jeg må komme dit først: Ja, men jeg hørtes rar ut på slutten, så ikke se for nøye.",
      "suggestion": "Du kommer kritikken i forkjøpet så komplimentet ikke kan nå inn. Kan vi sette opp to stoler? Fra denne stolen viser du hvordan du trekker på skuldrene, avleder og peker på det kleine; så flytter vi til siden som kanskje vil ta imot."
    },
    "dp_marker-recognition-chairwork_case-jason_07": {
      "text": "[Bekymret] Før et sosialt arrangement begynner hodet mitt å ramse opp alle måtene jeg kan ydmyke meg på. Det viser meg at jeg står alene, sier feil ting, ler for sent, at alle legger merke til det. Når jeg kommer dit, prøver jeg allerede å ikke bli sett.",
      "suggestion": "Bekymringen oversvømmer deg med ydmykelsesscener før du i det hele tatt kommer dit. Vil du gi bekymringen en stol? La den liste de fryktede øyeblikkene direkte; så flytter vi til delen som må gå inn i rommet etter å ha hørt dem."
    },
    "dp_marker-recognition-chairwork_case-jason_08": {
      "text": "[Skamfull] Når jeg ikke blir invitert, sier jeg til meg selv at ingen ville ha meg der uansett. Så later jeg som jeg ikke bryr meg, men inni meg fortsetter stemmen: Ser du, dette er det som skjer når folk kan velge deg bort.",
      "suggestion": "Å ikke bli invitert blir til en indre dom før såretheten får snakke. Kan vi sette domsstemmen i én stol og den sårede siden i den andre? Fra denne stolen sier du: «Dette er det som skjer når folk kan velge deg bort.» Så bytter vi, så den sårede siden kan svare."
    },
    "dp_marker-recognition-chairwork_case-jason_09": {
      "text": "[Nølende] Jeg vil si til den gamle vennen min: «Du forsvant, og jeg fikk aldri vite hvorfor.» Jeg husker fortsatt at jeg sjekket meldinger og lot som jeg hadde det fint på skolen. En del av meg synes det er dumt å bry seg nå, men en annen del vil fortsatt ha et svar.",
      "suggestion": "Den gamle forsvinningen har fortsatt ikke fått noe svar, og en yngre del av deg sjekker fortsatt etter et. Hvis du vil, kan vi plassere ham i den tomme stolen og begynne med: «Du forsvant, og jeg fikk aldri vite hvorfor.» Så stopper vi og ser hva den yngre delen fortsatt trenger å si."
    },
    "dp_marker-recognition-chairwork_case-jason_10": {
      "text": "[Engstelig] Når jeg vil stille et spørsmål i timen, stirrer jeg på notatene til sjansen går forbi. Jeg vet at spørsmålet sikkert er normalt, men jeg får meg selv til å se opptatt ut til læreren går videre.",
      "suggestion": "Den travle tausheten stopper spørsmålet før det kommer inn i rommet. Kan vi bruke to stoler i en kort runde? Fra denne stolen viser du hvordan du holder blikket hans nede og lar ham tie; så flytter vi til siden som ville spørre."
    },
    "dp_marker-recognition-chairwork_case-laura_01": {
      "text": "[Flatt og på vakt] Da mannen min dro, tenkte jeg: selvfølgelig gjorde han det. Hvem blir hos en som er så ødelagt?",
      "suggestion": "Skilsmissen blir en hard dom som sier at du er for ødelagt til at noen blir. Hvis det kjennes trygt nok, kan vi gi den dommen én stol og siden som bærer den den andre? Start fra doms-stolen og si: «du er for ødelagt til at noen blir.» Så flytter vi til siden som bærer det."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      "text": "[Fjern] Jeg sa aldri til moren min: «Du så hva som skjedde og fortsatte å vaske opp.» Jeg tenker fortsatt mer på det enn jeg vil.",
      "suggestion": "Moren din er der i kjøkkenscenen, hun ser og fortsetter likevel å vaske opp. Hvis du vil, kan vi hente henne inn i den tomme stolen og si setningen direkte: «Du så hva som skjedde og fortsatte å vaske opp.» Vi går langsomt og stopper der du trenger."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      "text": "[Anspent og på gråten] Da eksmannen min flyttet ut, gråt jeg ikke. Jeg vasket kjøkkenet og kjente ingenting, som om jeg burde vært såret, men bare var helt blank.",
      "suggestion": "Rengjøringen og blankheten ser ut til å stoppe såretheten før den når deg. Hvis det kjennes trygt nok, lar vi den blokkerende siden få én stol: vis hvordan du blir blank og fortsetter å vaske. Så flytter vi til den sårede siden og lar den få bare noen få ord."
    },
    "dp_marker-recognition-chairwork_case-laura_04": {
      "text": "[Fjern] Jeg lurer stadig på om eksen min visste hva som kom til å skje etter at han dro, at jeg kom til å vende alt tilbake mot meg selv. Jeg vil spørre ham: Visste du at jeg kom til å bære skylden for oss begge?",
      "suggestion": "Han er personen du vil spørre om det å bli sittende igjen med hele skylden. Hvis det kjennes håndterbart, kan vi sette ham i den tomme stolen og la spørsmålet gå direkte til ham: «Visste du at jeg kom til å bære skylden for oss begge?»"
    },
    "dp_marker-recognition-chairwork_case-laura_05": {
      "text": "[Flatt og på vakt] Jeg sier fortsatt til meg selv at jeg er skadet gods. Det kommer når noen er snille mot meg, eller når jeg tenker på å date igjen. Jeg hører: De ville gått hvis de visste nok, så ikke slipp noen for nær.",
      "suggestion": "«Skadet gods»-stemmen advarer deg bort fra nærhet før noen kan velge deg. Hvis det kjennes trygt nok, kan vi sette den stemmen i én stol og delen som hører den i den andre. Fra denne stolen sier du: «De ville gått hvis de visste nok.» Så bytter vi og hører hvordan det er å få den advarselen."
    },
    "dp_marker-recognition-chairwork_case-laura_06": {
      "text": "[Langsomt og flatt] Når sinnet begynner, vasker jeg benken, sjekker låsene eller skjenker et glass til følelsen forsvinner. Jeg bestemmer meg ikke for å stoppe det; jeg bare blir travel og langt borte før det får ord.",
      "suggestion": "Vasking, sjekking og drikking er måten sinnet blir båret bort på før det får snakke. Hvis det kjennes trygt nok, kan vi sette den travle, fjerne siden i denne stolen først; vis hvordan den får sinnet til å forsvinne. Så flytter vi til sinnet og gir det noen få ord uten å presse det."
    },
    "dp_marker-recognition-chairwork_case-laura_07": {
      "text": "[Skamfull] Jeg sier til meg selv at jeg burde ha visst bedre enn å stole på ham. Jeg går gjennom små tegn jeg overså og bygger en sak mot meg selv, som om jeg var dum fordi jeg ville tro at han var trygg.",
      "suggestion": "Skylden bygger en sak mot delen som ville ha trygghet. Kan vi sette den saksbyggende stemmen i denne stolen og la den snakke direkte: «Du burde ha visst bedre; du var dum som stolte på ham»? Så bytter vi til den tillitsfulle delen som ble såret."
    },
    "dp_marker-recognition-chairwork_case-laura_08": {
      "text": "[Lav stemme] Jeg sa aldri til mannen som skadet meg: «Du får ikke bestemme hva jeg er verdt.»",
      "suggestion": "Det er et uavsluttet oppgjør med personen som skadet deg. Hvis det kjennes trygt nok og vi går veldig langsomt, kan vi plassere ham i den tomme stolen og la deg si bare den setningen, med pauser og kontroll."
    },
    "dp_marker-recognition-chairwork_case-laura_09": {
      "text": "[Anspent og skamfull] Når jeg begynner å si at jeg er sint, hører jeg: «Ikke lag bråk.» Skuldrene strammer seg, stemmen blir høflig, og plutselig forklarer jeg hvorfor det sikkert ikke var så farlig.",
      "suggestion": "«Ikke lag bråk»-stemmen stopper sinnet før det får reist seg. La oss gi den stemmen denne stolen først: si advarselen og argumenter for den. Så flytter vi til den sinte siden og hører én eller to enkle setninger."
    },
    "dp_marker-recognition-chairwork_case-laura_10": {
      "text": "[Fjern] Jeg ser fortsatt for meg døren til rommet mitt etter at det skjedde, mens jeg ventet på å høre moren min komme ned gangen. Hun kom aldri. Jeg vil spørre henne: Hvorfor kom du aldri inn på rommet mitt etterpå?",
      "suggestion": "Moren din mangler i gangen etter at det skjedde, og spørsmålet er fortsatt der. Hvis det kjennes håndterbart, kan vi hente henne inn i den tomme stolen og spørre: «Hvorfor kom du aldri inn på rommet mitt etterpå?» bare så langt det kjennes tålelig."
    },
    "dp_marker-recognition-chairwork_case-carlos_01": {
      "text": "[Sint, med knyttede never] Etter at jeg slo hull i veggen, tenkte jeg hele tiden: Hva slags mann skremmer sin egen familie? Jeg så ansiktet til sønnen min, og så startet angrepet, som om det ikke var noen far igjen, bare en farlig mann på kjøkkenet.",
      "suggestion": "Hullet i veggen blir til et angrep på faren i deg. Kan vi arbeide litt med den skylden? Sett deg i denne stolen og si det direkte til ham: «Hva slags mann skremmer sin egen familie?» Så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt si til faren min at beltet ikke gjorde meg til mann. Det gjorde meg bare redd for ham.",
      "suggestion": "Faren din hører hjemme i den tomme stolen for den linjen om beltet og frykten. Hvis du vil, kan vi sette ham der og begynne direkte: «Beltet gjorde meg ikke til mann. Det gjorde meg redd for deg.» Vi holder det til noen sterke linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      "text": "[Anspent og skamfull] Jeg begynner å si unnskyld til sønnen min, og så lukker munnen seg. Jeg tenker: ikke vis svakhet, og ansiktet mitt blir hardt.",
      "suggestion": "Unnskyldningen starter, og så legger det harde ansiktet seg over den før den når sønnen din. Vil du sette opp to stoler? Fra denne stolen sier du at han ikke skal vise svakhet og argumenterer for å holde seg hard; så flytter vi til faren som ville reparere."
    },
    "dp_marker-recognition-chairwork_case-carlos_04": {
      "text": "[Skamfull] Etter at jeg roper, kaller jeg meg et monster og blir så sint på meg selv for å tenke det. Alle blir stille, jeg hører det ordet i hodet, og så svarer en annen del: Slutt å sutre og fiks det.",
      "suggestion": "Etter ropingen blir ordet «monster» et angrep inne i deg. Kan vi sette monster-stemmen i én stol og delen som blir truffet av den i den andre? Start som den angripende stemmen og si ordet direkte; så lar vi den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-carlos_05": {
      "text": "[Anspent og sint] Jeg vil si til faren min: «Jeg var et barn, ikke en av soldatene dine.» Han fikk meg til å stå rett og tåle det, og selv nå låser ryggen seg før jeg klarer å si hvor redd jeg var.",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt hvordan han behandlet deg. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si den linjen direkte, mens jeg hjelper deg å holde det avgrenset."
    },
    "dp_marker-recognition-chairwork_case-carlos_06": {
      "text": "[Anspent] Når stemmen min skjelver, kremter jeg, retter meg opp og gjør ansiktet hardt. Jeg kan nesten høre faren min si: Ikke la dem se deg sånn, så jeg gjør det om til et blikk.",
      "suggestion": "Det harde ansiktet gjør skjelvingen til noe ingen kan se. La oss bruke to stoler for å vise prosessen. Fra denne stolen gjør du ansiktet hardt og sier: «Ikke la dem se deg sånn»; så flytter vi til siden som skalv."
    },
    "dp_marker-recognition-chairwork_case-carlos_07": {
      "text": "[Bekymret] Hvis jeg lar sønnen min snakke meg imot én gang, ser jeg for meg at jeg mister all respekt i huset. Først himler han med øynene, så ser kona mi at jeg ikke har autoritet, så hører ingen på meg og jeg er ingenting der.",
      "suggestion": "Bekymringen gjør én himling med øynene til at hele huset mister respekt for deg. Kan vi sette bekymringen i én stol og la den si kjeden høyt? Start med himlingen med øynene, så at kona di ser at du ikke har autoritet; etterpå bytter vi og hører fra faren under presset."
    },
    "dp_marker-recognition-chairwork_case-carlos_08": {
      "text": "[Defensiv] Jeg sier til meg selv at bare tapere trenger hjelp med sinne. Så ser jeg for meg faren min som ler av en mann som ikke klarer å styre huset sitt, og jeg hører den samme latteren i hodet når kona mi sier at terapi kanskje kan hjelpe.",
      "suggestion": "Faren din sin latter har blitt en stemme som får hjelp til å kjennes ydmykende. Kan vi sette den stemmen i denne stolen og la den si «bare tapere trenger hjelp» med tonen hans? Så bytter vi til siden som vil noe annet for familien din."
    },
    "dp_marker-recognition-chairwork_case-carlos_09": {
      "text": "[Lav stemme] Jeg skulle ønske jeg kunne si til kona mi at jeg blir redd når hun ser på meg som om hun er redd.",
      "suggestion": "Den setningen hører direkte til kona di, der frykten mellom dere kan få navn. Vi kan plassere henne i den tomme stolen og la deg si det langsomt: «Jeg blir redd når du ser redd ut for meg», uten å presse mer enn én eller to linjer."
    },
    "dp_marker-recognition-chairwork_case-carlos_10": {
      "text": "[Anspent og sint] Når tårene kommer, strammer jeg kjeven og gjør dem om til varme før noen kan se dem. Hvis sinnet er der, spør ingen hva som gjorde vondt. De rygger bare, og det kjennes tryggere.",
      "suggestion": "Tårene blir gjort om til varme før noen kan nå såretheten. Kan vi sette den omformende siden i denne stolen først? Vis hvordan du strammer kjeven, blir varm og får folk til å rygge; så flytter vi til den tårevåte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_01": {
      "text": "[Sliten] Skilsmissen er sikkert min feil. Jeg hører denne listen om og om igjen: du burde vært søtere, roligere, enklere, mindre utslitt. Hvis du ikke hadde trengt så mye, hadde han kanskje ikke gått.",
      "suggestion": "Den stemmen gjør utmattelse og behov til bevis på at skilsmissen var din feil. Kan vi sette skyldregelen i én stol og den utslitte siden i den andre? Start som skylden og si at hun burde vært søtere, roligere og trengt mindre. Så flytter vi til den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      "text": "[Unnskyldende] Jeg tenker fortsatt på det jeg aldri sa til eksen min: «Du lot meg bære alt, og så skyldte du på meg for at jeg var sliten.»",
      "suggestion": "Jeg hører et uavsluttet oppgjør med eksen din rundt det å bære for mye og så få skylden for utmattelsen. Ville det være greit å bruke den tomme stolen? Plasser ham her og si akkurat den setningen først, og så hva det kostet å svelge den."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      "text": "[Skyldpreget] Når jeg blir sint for at folk trenger meg, tenker jeg med en gang at jeg er et dårlig menneske. Så smiler jeg og spør hva mer de trenger.",
      "suggestion": "«Dårlig person»-budskapet stopper sinnet og sender deg tilbake til omsorg. Kan vi bruke to stoler for å gjøre rekkefølgen synlig? Fra denne stolen sier du til henne at hun er dårlig for å være sint; så flytter vi til sinnet som aldri får en tur."
    },
    "dp_marker-recognition-chairwork_case-nina_04": {
      "text": "[Sliten] Jeg sier til meg selv at en god mor ikke ville ønsket seg en time der ingen trenger henne. Når jeg lukker soveromsdøren, starter regelen: egoistisk, lat, hva slags mor gjemmer seg for sin egen familie?",
      "suggestion": "God-mor-regelen angriper behovet for hvile idet døren lukkes. Kan vi sette den regelen i én stol og den utslitte siden i den andre? Først lar vi regelen si: «Egoistisk, lat, hva slags mor gjemmer seg?» Så bytter vi og hører den trøtte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_05": {
      "text": "[Unnskyldende] Jeg vil si til moren min: «Jeg var barnet; du skulle ha lagt merke til meg.» Når hun nå snakker om hvor ensom hun er, vil jeg si: Jeg var også ensom, men så føler jeg meg slem.",
      "suggestion": "Moren din er den som trenger å høre den barnedelen. Hvis du vil, kan vi hente henne inn i den tomme stolen og begynne med: «Jeg var barnet; du skulle ha lagt merke til meg», bare noen få ord om gangen."
    },
    "dp_marker-recognition-chairwork_case-nina_06": {
      "text": "[Splittet] Når sinnet stiger, smiler jeg og spør hva alle vil ha til middag. Det skjer så fort at jeg nesten ikke merker sinnet før senere, når jeg står og vasker benken altfor hardt og ser for meg hva jeg skulle ønske jeg hadde sagt.",
      "suggestion": "Omsorgsbevegelsen dekker over sinnet før du nesten rekker å høre det. Kan vi gi den tildekkende siden denne stolen? Vis hvordan du smiler, spør om middag og holder huset i gang; så flytter vi til sinnet og lar det si én enkel setning."
    },
    "dp_marker-recognition-chairwork_case-nina_07": {
      "text": "[Skyldpreget] Hvis middagen ikke er klar, kaller jeg meg ubrukelig. Jeg kan ha jobbet hele dagen, svart på alles meldinger, hjulpet guttene, og likevel blir én ting jeg ikke rakk til bevis på at jeg svikter i den eneste jobben som betyr noe.",
      "suggestion": "Den manglende middagen blir til en stemme som sier at hele verdien din avhenger av konstant omsorg. Vi kan sette «ubrukelig»-stemmen i én stol og den slitne delen i den andre. Fra denne stolen sier du at middagen som manglet beviser at hun svikter; så bytter vi og hører fra den utslitte siden som bærer så mye."
    },
    "dp_marker-recognition-chairwork_case-nina_08": {
      "text": "[På gråten] Jeg vil fortsatt si til eksen min: «Du dro, og likevel er det jeg som fortsatt sier unnskyld.» Jeg håndterer skjemaene, guttene, meldingene, og jeg hører meg fortsatt forklare hvorfor jeg ikke gjør nok.",
      "suggestion": "Eksen din hører hjemme i den tomme stolen for unnskyldningen du fortsatt bærer. Vi kan plassere ham der og la deg si setningen direkte: «Du dro, og likevel er det jeg som fortsatt sier unnskyld.» Så stopper vi og legger merke til hva den vekker."
    },
    "dp_marker-recognition-chairwork_case-nina_09": {
      "text": "[Unnskyldende] Jeg prøver å si nei, og så forklarer jeg til nei-et blir et ja. Jeg begynner med: Jeg kan ikke i dag, og før de rekker å protestere, ramser jeg opp grunner, gjør stemmen mildere og tilbyr en annen måte å hjelpe på.",
      "suggestion": "Forklaringen mykner grensen til neiet forsvinner. Kan vi bruke to stoler for det? Fra denne stolen viser du hvordan du forklarer og gjør nei til ja; så flytter vi til siden som ville at neiet skulle holde."
    },
    "dp_marker-recognition-chairwork_case-nina_10": {
      "text": "[Bekymret] Når jeg hviler, ramser hodet opp alle som kan falle sammen uten meg. Det begynner med at moren min trenger skyss, så at guttene glemmer noe, så at huset blir kaos, og plutselig føles det å sitte stille som forsømmelse.",
      "suggestion": "Bekymringen får hvile til å kjennes som forsømmelse ved å vise alle som faller sammen. Vil du gi bekymringen denne stolen? La den liste de fryktede konsekvensene; så flytter vi til den utslitte siden som prøver å hvile under presset."
    },
    "dp_marker-recognition-chairwork_case-aisha_01": {
      "text": "[Desperat] Hvis noen ikke svarer, går hodet mitt rett til at de er med noen bedre, legger det ut, og at alle ser at jeg er byttet ut. Da må jeg kutte dem ut først.",
      "suggestion": "Bekymringen gjør noe veldig aktivt her: den viser deg scener der du blir byttet ut, helt til det å kutte dem av virker tryggere enn å vente. Kan vi bruke to stoler for å se hvordan den bekymringen virker? Fra denne stolen forteller du henne hver scene bekymringen forutsier; så bytter vi til siden som må høre det."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      "text": "[Rasende] Jeg ser fortsatt for meg eksen min i seng med en annen. Jeg hater ham, og så hater jeg meg selv for at jeg fortsatt vil ha ham.",
      "suggestion": "Det er et uavsluttet oppgjør med ham: bildet, raseriet og lengselen er fortsatt med deg her. Hvis du vil, kan vi plassere ham i den tomme stolen, så ordene går til ham i stedet for å vende tilbake mot deg. Begynn med: «Jeg ser deg fortsatt med henne ...»"
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      "text": "[Redd og skamfull] Etter alt som skjedde med meg, kaller jeg meg skitten og umulig å elske. Når noen berører meg ømt, sier den første stemmen at de ville gått hvis de kjente hele historien.",
      "suggestion": "Angrepet kaller deg skitten for det som ble gjort mot deg, og da blir den sårede siden sittende alene med skammen. Hvis det kjennes trygt nok, kan vi sette den angripende stemmen i én stol og den sårede siden i den andre. Først lar vi angrepet si ordene sine nøyaktig; så bytter vi og hører siden som har båret dem."
    },
    "dp_marker-recognition-chairwork_case-aisha_04": {
      "text": "[Skamfull] Etter at jeg har tekstet noen altfor mange ganger, kaller jeg meg gal og ekkel. Jeg sletter tråden, åpner den igjen, og sier til meg selv at ingen normal person ville trengt bevis så desperat. Angrepet føles nesten tryggere enn å vente.",
      "suggestion": "Angrepet prøver å kontrollere panikken i ventingen ved å gå løs på deg først. Vil du prøve å bremse det ned med to stoler? Fra denne stolen lar du den angripende stemmen si hva den kaller deg etter meldingene; så bytter vi til den redde siden i små, støttede steg."
    },
    "dp_marker-recognition-chairwork_case-aisha_05": {
      "text": "[Rasende] Jeg vil fortsatt si til moren min: «Du lot meg bli igjen hos mennesker som skadet meg.» Jeg var et barn, og du fortsatte å velge dem, og så lot du som om du var sjokkert over at jeg var sint.",
      "suggestion": "Det er et uavsluttet oppgjør med moren din rundt å bli stående uten beskyttelse, og så få sinnet behandlet som problemet. Hvis det kjennes trygt nok, kan vi hente henne inn i den tomme stolen, så sinnet får et direkte sted å gå. Begynn med: «Du lot meg bli igjen hos mennesker som skadet meg», og så stopper vi opp."
    },
    "dp_marker-recognition-chairwork_case-aisha_06": {
      "text": "[Panisk] Når jeg kjenner at jeg trenger noen, begynner jeg å anklage dem før de kan dra. Jeg hører meg selv si: Greit, dra da, du brydde deg aldri uansett, mens en annen del trygler dem om å bli.",
      "suggestion": "Den anklagende delen går først, så behovet ikke blir stående synlig. Kan vi bruke to stoler for å se den beskyttelsen i arbeid? Fra denne stolen sier du «greit, dra da, du brydde deg aldri» direkte til siden som trenger noen; så bytter vi og hører siden som tryglet dem om å bli."
    },
    "dp_marker-recognition-chairwork_case-aisha_07": {
      "text": "[Bekymret] Hvis du ikke svarer, viser hodet mitt ti scener der jeg blir byttet ut og alle vet det. Det går fra én stille telefon til at du bestemmer at jeg er for mye, og så er alle enige om at jeg alltid var for mye.",
      "suggestion": "Bekymringen tar én stille telefon og bygger en hel historie om å bli byttet ut, helt til systemet ditt blir oversvømt. Hvis du vil, kan vi gi bekymringen én stol og den oversvømte siden den andre. Sitt her som bekymringen og vis scenene én om gangen; så bytter vi og hører hvordan det er å ta imot dem."
    },
    "dp_marker-recognition-chairwork_case-aisha_08": {
      "text": "[Lav stemme] Jeg fikk aldri sagt til personen som skadet meg: «Du får ikke gjøre meg skitten.» Ordene setter seg fast fordi en del av meg ser for seg at han ler, men en annen del vil fortsatt si dem rett til ham.",
      "suggestion": "Det er et uavsluttet oppgjør med personen som skadet deg. Hvis du velger å prøve, går vi veldig langsomt: Plasser ham i den tomme stolen og si bare den linjen først, mens vi holder føttene dine i rommet og valget ditt intakt."
    },
    "dp_marker-recognition-chairwork_case-aisha_09": {
      "text": "[Skamfull] Når jeg vil ha nærhet, kaller jeg meg patetisk før noen andre kan gjøre det. Hvis jeg savner noen, sier jeg til meg selv at jeg skal holde kjeft, slutte å tigge, slutte å oppføre meg som et barn. Det er som om jeg angriper behovet før den andre får sjansen.",
      "suggestion": "Selvangrepet rekker fram til lengselen før noen andre kan avvise den. Kan vi gjøre angrepet synlig med to stoler? Først lar vi den angripende stemmen si «slutt å tigge, slutt å oppføre deg som et barn» direkte til den lengtende siden; så bytter vi så lengselen ikke blir alene med det."
    },
    "dp_marker-recognition-chairwork_case-aisha_10": {
      "text": "[På gråten] Når sorgen begynner å synes, ler jeg for høyt og sier: «Glem det, dette er dumt.» Så lager jeg en spøk om at jeg er dramatisk, og den gråtende delen blir stille som om den fikk en ørefik.",
      "suggestion": "Den hånlige stemmen stenger sorgen ned før den får vise seg. Vil du la den siden ta denne stolen først, bare kort? Si «glem det, dette er dumt» til den gråtende siden; så bytter vi og gir den sørgende siden noen få beskyttede ord."
    },
    "dp_marker-recognition-chairwork_case-david_01": {
      "text": "[Selvbebreidende] Hvis jeg ikke er eksepsjonell, sier jeg til meg selv at det ikke finnes noen grunn til at noen skulle bli. Ordinær betyr utskiftbar. Utskiftbar betyr at jeg allerede har tapt; de har bare ikke sagt det høyt ennå.",
      "suggestion": "Kravet gjør verdien din avhengig av å være eksepsjonell, og behandler det ordinære som om forlattheten allerede har begynt. Kan vi sette kravet i én stol og siden som betaler prisen i den andre? Fra denne stolen argumenterer du for at ordinær betyr utskiftbar; så bytter vi og hører virkningen."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      "text": "[Avvisende] Kona mi sier at hun kanskje er ferdig, og jeg sier til meg selv at bare en idiot ødelegger sin egen familie og likevel forventer sympati.",
      "suggestion": "Det er en hard skyldstemme som gjør smerten i ekteskapet til bevis på at du ikke fortjener sympati. Kan vi arbeide litt med det angrepet? Sett deg i denne stolen som den harde siden og si til ham at han er en idiot som ødela familien; så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      "text": "[Såret, men skarp] Jeg hater hvordan faren min gjorde alt til en prestasjon, men med en gang jeg sier det, begynner jeg å forsvare ham: han presset meg jo fordi han trodde på meg.",
      "suggestion": "En forsvarende side kommer inn straks sinnet mot faren din viser seg, så sinnet mister stemmen sin. Hvis du vil, gir vi den forsvareren denne stolen først: forklar ham og si til David hvorfor han ikke skal være sint. Så flytter vi til den sinte siden og lar den svare uten å debattere."
    },
    "dp_marker-recognition-chairwork_case-david_04": {
      "text": "[Avvisende] Jeg sier til meg selv at middelmådige menn mister familien sin og fortjener det. Ordet middelmådig er verre enn grusomt; det betyr at jeg ble vanlig, utskiftbar, en mann ingen har noen grunn til å velge.",
      "suggestion": "Det høres ut som en hard selvkritisk stemme binder verdien din til å være eksepsjonell og bruker middelmådighet som en dom. Vi kan sette den stemmen i én stol og delen av deg den angriper i den andre. Fra denne stolen sier du nøyaktig hvorfor middelmådige menn fortjener å miste; så bytter vi og lar den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-david_05": {
      "text": "[Kontrollert] Jeg vil si til faren min: «Jeg var sønnen din, ikke et prosjekt.» Jeg hører ham fortsatt vurdere karakterene mine, holdningen min, håndtrykket mitt, som om alt ved meg var noe som skulle optimaliseres. Jeg fikk aldri spurt om han noen gang så meg.",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt å bli behandlet som et prestasjonsprosjekt i stedet for som en sønn. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si den første linjen direkte: «Jeg var sønnen din, ikke et prosjekt.» Så kan vi stoppe opp og se om spørsmålet om å bli sett vil komme etterpå."
    },
    "dp_marker-recognition-chairwork_case-david_06": {
      "text": "[Kontrollert] Når skammen stiger, begynner jeg å ramse opp prestasjoner til jeg ikke kjenner den. Jeg går gjennom omsetningstall, forfremmelser, ting folk misunner. Det virker et øyeblikk, men så sitter jeg alene med den samme hule følelsen og enda mer forakt for at jeg trengte listen.",
      "suggestion": "Prestasjonslisten avbryter skammen før den kan kjennes, og så kommer skammen tilbake med forakt lagt oppå. Ville det være greit å bruke to stoler? Fra denne stolen ramser du opp prestasjonene og argumenterer for å blokkere skammen; så bytter vi og hører fra den skamfulle siden som står igjen når listen tar slutt."
    },
    "dp_marker-recognition-chairwork_case-david_07": {
      "text": "[Bekymret] Hvis jeg innrømmer én feil, ser jeg for meg at alle bestemmer seg for at jeg er en bløff. Det stopper ikke ved feilen; det blir til at styret mister tilliten, kona mi sier at hun visste det, og folk innser at hele bildet var falskt.",
      "suggestion": "Bekymringen gjør én feil til total avsløring, som om hele bildet kan falle sammen på én gang. Kan vi gi bekymringen én stol, så du kan høre hvordan den presser deg? La den forutsi nøyaktig hva som skjer hvis du innrømmer én feil; så bytter vi til siden som lever under de scenene."
    },
    "dp_marker-recognition-chairwork_case-david_08": {
      "text": "[Lav stemme] Jeg vil si til kona mi at jeg er livredd for at hun endelig ser den ekte meg. Etter den siste krangelen så hun på meg som om forestillingen var over, og jeg ville si: Ikke bestem deg for at dette er alt jeg er.",
      "suggestion": "Det er et uavsluttet oppgjør med kona di rundt å bli sett uten forestillingen, og frykten for at hun skal gå. Hvis du vil, kan vi hente henne inn i den tomme stolen og la ordene gå direkte til henne: «Ikke bestem deg for at dette er alt jeg er.» Så stopper vi før forsvaret kommer inn."
    },
    "dp_marker-recognition-chairwork_case-david_09": {
      "text": "[Skamfull] Jeg sier til meg selv at affæren beviser at jeg er søppel. Ikke bare at jeg gjorde noe destruktivt, men at under tittelen, pengene, alt sammen, er dette den jeg egentlig er. Så hater jeg meg selv for å høres dramatisk ut.",
      "suggestion": "Det er et hardt selvangrep rundt affæren, der en handling blir gjort til en dom over hele deg. Vi kan sette stemmen som sier «søppel» i én stol og den skamfulle siden i den andre. Fra denne stolen lar du angrepet si hele dommen; så bytter vi så du kan høre og svare det i stedet for bare å tåle det."
    },
    "dp_marker-recognition-chairwork_case-david_10": {
      "text": "[Avvisende] Når tristhet dukker opp, analyserer jeg alles tonefall til følelsen er borte. Jeg kan gjøre en samtale med kona mi til et referat i hodet, finne inkonsekvenser, bevise poenget mitt, og da er strammingen i halsen borte.",
      "suggestion": "Analysen flytter deg inn i en rettssal før tristheten får snakke, så strammingen forsvinner uten å bli hørt. Vil du gjøre den avbrytelsen konkret? Fra denne stolen analyserer du tonefallet hennes og flytter ham bort fra strammingen; så flytter vi til tristheten og lar den si noen direkte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_01": {
      "text": "[Rasende] Faren min hadde sine egne skader, det vet jeg. Men jeg hater ham fortsatt for å ha tatt volden med inn i huset vårt og latt oss leve med den.",
      "suggestion": "Det er et uavsluttet oppgjør med faren din: du forstår noe av det han bar på, og du hater fortsatt volden han tok med inn i huset. Hvis du vil, kan vi hente ham inn i den tomme stolen og la begge deler gå direkte til ham. Begynn med: «Jeg vet at du hadde dine skader, og jeg hater det du tok med hjem.»"
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      "text": "[Lav stemme] De låste meg inne i skapet, og jeg tenker fortsatt at jeg må ha vært umulig, ellers hadde de vel ikke gjort det.",
      "suggestion": "Skylden gjør det som ble gjort mot deg til en dom over barnet som ble låst inne. Hvis det kjennes mulig, kan vi bruke to stoler for å se hvordan den skylden virker. Fra denne stolen sier du til ham at han må ha vært umulig; så bytter vi og hører fra barnet som ikke hadde noen vei ut."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      "text": "[Rasende] Selv her inne låser kjeven seg når jeg forestiller meg å si til den fosterfaren at jeg hater ham. Jeg hører: «Ikke si det. Ikke gjør det verre.»",
      "suggestion": "Kjeven låser sinnet før det kan nå fram til ham, som om det å uttrykke det kan gjøre faren levende igjen. Hvis du vil, lar vi den låsende siden ta denne stolen først: si «ikke si det, ikke gjør det verre» direkte til ham. Så flytter vi til sinnet og gir det noen kontrollerte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_04": {
      "text": "[Flatt] Jeg sier til meg selv at jeg burde vært over det nå; andre har hatt det verre og fungerer likevel. Når jeg ikke får sove eller fylt ut papirer, sier stemmen at jeg bruker fortiden som unnskyldning.",
      "suggestion": "Den avvisende stemmen bruker sammenligning for å få virkningen av traumet til å høres ut som en unnskyldning. Hvis det kjennes mulig, kan vi sette den stemmen i én stol og delen som fortsatt bærer det i den andre. Start som den avvisende stemmen: si til ham at han burde vært over det nå, og at andre fungerer bedre."
    },
    "dp_marker-recognition-chairwork_case-marcus_05": {
      "text": "[Lav stemme] Jeg vil spørre fostermoren min hvorfor ingen kom da jeg banket. Jeg husker at jeg banket stille først, så hardere, og så sluttet fordi jeg tenkte at jeg gjorde det verre. Jeg fikk aldri spurt om hun hørte meg.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med fostermoren din rundt å bli forlatt alene og ikke hørt. Hvis du vil, kan vi sette henne i den tomme stolen og la deg stille spørsmålet direkte: «hørte du at jeg banket?» Vi holder det langsomt, med pauser, så du velger hvor mye du sier."
    },
    "dp_marker-recognition-chairwork_case-marcus_06": {
      "text": "[Stille og på vakt] Når stemmen min skjelver, slutter jeg å snakke og stirrer i gulvet. Det er som om en hånd kommer over munnen min innenfra: Ikke gi dem mer. Ikke gjør det verre.",
      "suggestion": "Den indre hånden over munnen stopper den skjelvende stemmen før noen får mer tilgang. Hvis du vil, kan vi gjøre den stopperen synlig med to stoler. Fra denne stolen legger du hånden over munnen hans og sier «ikke gi dem mer»; så flytter vi til den skjelvende stemmen for noen få ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_07": {
      "text": "[Bekymret] Hvis jeg sover tungt, er jeg redd jeg våkner tilbake der og ikke vet hvor jeg er. Så jeg lar TV-en stå på og holder meg halvvåken, som om bekymringen står vakt.",
      "suggestion": "Bekymringen står vakt ved å gjøre søvn farlig og holde deg halvvåken. Vil du sette den vakten i denne stolen en kort runde? La den advare deg mot søvn og hva som kan skje; så bytter vi og hører fra den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-marcus_08": {
      "text": "[Rasende] Jeg vil fortsatt si til faren min: «Du tok krigen med hjem og fikk oss til å leve inni den.» Han snakket om det som hadde skjedd med ham som om det forklarte alt, men det var jeg som lå og lyttet etter støvlene hans om natten.",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt vold og frykt i hjemmet. Hvis du velger å prøve, kan vi hente ham inn i den tomme stolen og la setningen gå til ham, ikke bare bli inni deg: «Du tok krigen med hjem.» Så stopper vi opp og holder deg forankret."
    },
    "dp_marker-recognition-chairwork_case-marcus_09": {
      "text": "[Skamfull] Å trenge hjelp får meg til å si til meg selv at jeg er ubrukelig. Hvis jeg ikke klarer papirarbeid, søvn, telefonsamtaler, vanlige ting, hører jeg: Hva duger du egentlig til? Så slutter jeg å spørre og lar ting hope seg opp.",
      "suggestion": "Selvangrepet gjør det å trenge hjelp til bevis på at du er ubrukelig, og så blir det stille rundt det å spørre. Hvis det kjennes mulig, kan vi sette angrepet i én stol og delen som trenger hjelp i den andre. Fra denne stolen sier du «hva duger du egentlig til?»; så bytter vi og lar den trengende siden svare uten å bli presset."
    },
    "dp_marker-recognition-chairwork_case-marcus_10": {
      "text": "[Anspent og på vakt] Når søsteren min spør om fortiden, hører jeg: «Steng det ned», og så bytter jeg tema.",
      "suggestion": "«Steng det ned»-stemmen kutter kontakten med fortiden idet søsteren din spør, før noe sårbart får vist seg. Kan vi bruke to stoler i en kort runde? Fra denne stolen sier du «steng det ned» og viser hvordan du bytter tema; så flytter vi til siden som ble spurt."
    },
    "dp_alliance-repair_case-sara_01": {
      "text": "[Flau] Av og til tror jeg du blir lei når jeg forteller om bruddet igjen, og da føler jeg meg dum som fortsatt tar det opp her.",
      "suggestion": "Takk for at du sier det. Hvis jeg har virket lei, ville det gjort dette rommet utrygt for sorgen du fortsatt bærer. Jeg beklager at oppmerksomheten min ikke har kjentes tydelig nok. Jeg er ikke lei. Hva hjelper deg å kjenne at jeg fortsatt er med deg når den samme smerten kommer tilbake?"
    },
    "dp_alliance-repair_case-sara_02": {
      "text": "[Flau] Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er. Jeg vet at jeg må fungere, men akkurat da hørtes det ut som om du ville ha den praktiske versjonen av meg tilbake for fort.",
      "suggestion": "Du peker på en reell bom: Jeg gikk til jobb da smerten trengte oppmerksomheten min, og det hørtes ut som om jeg ville ha deg praktisk før jeg hadde forstått smerten. Det beklager jeg. Før vi snakker om fungering igjen, hvilken del av tapet trenger du at jeg forstår først?"
    },
    "dp_alliance-repair_case-sara_03": {
      "text": "[Engstelig] Da jeg beklaget at jeg gråt, gjorde stillheten din meg redd for at jeg var for trengende for terapi. Jeg begynte å skanne ansiktet ditt for å finne ut om jeg burde ta meg sammen før du ble lei av meg.",
      "suggestion": "Takk for at du sier det. Stillheten min etter beklagelsen din kan ha hørtes ut som om jeg var enig i at behovet ditt var for mye, og det beklager jeg. Jeg vil at tårer skal kjennes velkomne, ikke bare tålt. Når de kommer igjen, hva kan jeg si eller gjøre så du slipper å skanne meg?"
    },
    "dp_alliance-repair_case-sara_04": {
      "text": "[Flau] Når du stadig kaller det sorg, føles det som om du allerede har bestemt hva dette er. Noe av det er sorg, men noe er sinne, ydmykelse, savn og følelsen av å være dum, og jeg vil ikke at det skal flates ut.",
      "suggestion": "Takk for at du sier det. Hvis ordet mitt fikk opplevelsen din til å kjennes ferdig definert eller flatet ut, gikk jeg for fort fram, og det beklager jeg. Hvilke ord, om noen, hjelper oss å bli ved blandingen i stedet for å redusere den til én merkelapp?"
    },
    "dp_alliance-repair_case-sara_05": {
      "text": "[På gråten] Forrige time sluttet mens jeg fortsatt gråt, og jeg gikk til bilen med følelsen av å bli sluppet. Jeg vet at tiden var ute, men jeg fortsatte å tenke at jeg ikke burde ha åpnet meg så mye så nær slutten.",
      "suggestion": "Jeg hører at avslutningen kjentes som å bli sluppet mens du var blottlagt, og jeg beklager at jeg ikke hjalp oss å lukke det mer varsomt. Tidsrammen er reell, men jeg må holde den på en måte som ikke lar deg sitte alene med skam. Hva ville gjort avslutninger tryggere når tårene fortsatt er der?"
    },
    "dp_alliance-repair_case-sara_06": {
      "text": "[Såret] Da du spurte om jeg hadde tenkt på å date igjen, føltes det som om du ville at jeg skulle gå videre allerede.",
      "suggestion": "Takk for at du setter ord på det. Spørsmålet mitt hørtes ut som press om å gå videre, og det beklager jeg. Før et spørsmål om dating hører hjemme her, hva trenger du at jeg forstår om delen som ikke er klar?"
    },
    "dp_alliance-repair_case-sara_07": {
      "text": "[Stille] Du blandet navnet hans forrige uke, og jeg følte meg dum som brydde meg så mye. Men navnet hans er fortsatt overalt i hodet mitt, så da du sa feil, kjentes det som om forholdet ble mindre virkelig her også.",
      "suggestion": "Jeg beklager at jeg blandet navnet hans. En slik bom kan få både forholdet og tapet til å kjennes mindre virkelig her, og det gir mening at det betydde noe. Hva ville hjulpet oss å reparere den glippen nå, så dette stedet kjennes mer varsomt med det som fortsatt betyr noe for deg?"
    },
    "dp_alliance-repair_case-sara_08": {
      "text": "[Flau] Da jeg innrømmet at jeg sjekket profilen hans, så ansiktet ditt skuffet ut, og jeg fikk lyst til å ta det tilbake. Jeg kom hit fordi jeg allerede skammer meg over det, så det blikket fikk meg til å ville gjemme meg.",
      "suggestion": "Takk for at du forteller meg det. Hvis ansiktet mitt viste skuffelse, skjønner jeg at ærlighet plutselig kunne kjennes utrygt, og det beklager jeg. Jeg vil ikke at skam skal få deg til å gjemme deg her. Hva trengte du fra meg i det øyeblikket?"
    },
    "dp_alliance-repair_case-sara_09": {
      "text": "[Engstelig] Da du spurte hvem andre som støtter meg, hørtes det ut som om du prøvde å sende meg videre til noen andre.",
      "suggestion": "Jeg hører at spørsmålet landet som om du ble sendt videre. Jeg beklager at jeg ikke gjorde hensikten min tydelig. Jeg vil ha støtte rundt deg, ikke avstand fra deg. Hvordan kan jeg spørre om støtte uten at du føler deg uønsket her?"
    },
    "dp_alliance-repair_case-sara_10": {
      "text": "[Lavmælt] Når du ser ned på notatene mens jeg snakker om ham, føles det som om du forsvinner et øyeblikk.",
      "suggestion": "Takk for at du sier det. Å se ned på notatene kostet oss kontakt på et sårt sted, og det beklager jeg. Ville det hjelpe om jeg spurte før jeg skrev, eller lot være å skrive når du er i de vondeste delene?"
    },
    "dp_alliance-repair_case-michael_01": {
      "text": "[Såret, men skarp] Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak. Jeg vet at såret sikkert er et terapiord for deg, men i hodet mitt hørtes det ut som om du tok bort den delen av meg som klarer ting.",
      "suggestion": "Jeg hører at «såret» landet som om jeg tok styrke fra deg, og jeg beklager at jeg valgte ord som fikk deg til å spenne deg. Hvilket språk lar oss navngi treffet uten at du kjenner deg svekket eller blottlagt på en måte du ikke selv har valgt?"
    },
    "dp_alliance-repair_case-michael_02": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med sinne som mitt, eller følger du bare en manual? Jeg må vite om du tåler konsekvensene hvis dette går dårlig hjemme.",
      "suggestion": "Takk for at du spør så direkte. Jeg hører at hvis jeg bare følger en manual, kan det koste deg tid og påvirke det som skjer hjemme. Jeg burde vært tydeligere på treningen, veiledningen og begrensningene mine, og jeg beklager at jeg lot deg lure. Hva trenger du å vite fra meg, eller se i måten jeg arbeider på, for å vurdere om dette rommet er stødig nok for sinnet ditt?"
    },
    "dp_alliance-repair_case-michael_03": {
      "text": "[Såret, men skarp] Da du pauset og så på meg etter at jeg ble sint, følte jeg meg dømt, som om du ventet på å se om jeg kom til å eksplodere. Jeg sluttet å høre på deg og begynte å bevise at jeg fortsatt hadde kontroll.",
      "suggestion": "Takk for at du setter ord på det. Pausen og blikket mitt føltes som dom og overvåking, og den virkningen betyr mer enn intensjonen min. Jeg beklager at jeg gjorde rommet mer konfronterende. Hva ville fått oppmerksomheten min til å kjennes mindre som gransking og mer som stødighet nå?"
    },
    "dp_alliance-repair_case-michael_04": {
      "text": "[Defensiv] Da du spurte om frykten til kona mi først, føltes det som om du allerede hadde bestemt at jeg var problemet. Jeg kjente at jeg begynte å bygge et forsvar i stedet for å høre på spørsmålet.",
      "suggestion": "Jeg hører at jeg begynte med frykten hennes, og at du kjente deg stilt på utsiden, som om jeg allerede hadde dømt deg. Jeg beklager at jeg gjorde din side mindre. Hvilken del av din opplevelse trenger å bli forstått før vi ser på frykten hennes igjen?"
    },
    "dp_alliance-repair_case-michael_05": {
      "text": "[Skeptisk] Da du sa at sinne beskytter sårhet, hørtes det ut som noe fra en lærebok, som om du hadde modellen klar før du hadde hørt meg. Jeg vet at jeg blir sint, men jeg vil ikke bli gjort om til et terapieksempel.",
      "suggestion": "Takk for at du sier det. Hvis jeg hørtes lærebokaktig ut, mistet jeg kontakten med deg og fikk deg til å føle deg som et eksempel, og det beklager jeg. Hva ville fått dette til å kjennes mindre som en formel og mer som at jeg faktisk lytter til det som skjer i deg?"
    },
    "dp_alliance-repair_case-michael_06": {
      "text": "[Anspent] Du utfordret meg ikke da jeg ble høylytt, og nå lurer jeg på om du er redd meg.",
      "suggestion": "Takk for at du sier det. Stillheten min da stemmen din ble høy, gjorde at du måtte lure på om jeg var redd, og det kan få dette rommet til å kjennes uærlig. Jeg beklager at jeg ikke gjorde ståstedet mitt tydelig. Jeg vil verken trekke meg fra deg eller kontrollere deg. Hvordan ville direkte, stødig kontakt fra meg se ut når stemmen din blir høy?"
    },
    "dp_alliance-repair_case-michael_07": {
      "text": "[Skamfull] Da jeg nevnte drikking, forandret ansiktet ditt seg et øyeblikk. Kanskje jeg overtolker, men jeg følte meg dømt, som om du nettopp hadde plassert meg i kategorien dårlig ektemann.",
      "suggestion": "Takk for at du sier det. Hvis ansiktet mitt viste dom, skjønner jeg hvor raskt drikking kunne bli utrygt å snakke om, og det beklager jeg. Jeg vil at vi skal kunne se ærlig uten å gjøre deg til en kategori. Hva trenger du fra meg for at alkohol kan være mulig å snakke om uten at skammen tar over?"
    },
    "dp_alliance-repair_case-michael_08": {
      "text": "[Irritert] Du spør stadig om faren min, og det føles som om du skylder alt på ham. Jeg skjønner at han betyr noe, men når du stadig går dit, føles det som om valgene mine nå forsvinner.",
      "suggestion": "Jeg hører at de gjentatte spørsmålene om faren din kjennes for snevre og som om de visker ut handlekraften din nå. Jeg beklager at jeg gikk tilbake dit uten å sjekke virkningen. Hvor bør vi rette oppmerksomheten, så livet ditt ikke reduseres til én forklaring?"
    },
    "dp_alliance-repair_case-michael_09": {
      "text": "[Såret, men skarp] Etter at jeg bannet, ble du stille, og jeg følte at du var ferdig med meg. Det var ikke ordet som betydde mest; det var følelsen av at én skarp kant fra meg var nok til at du forlot meg.",
      "suggestion": "Takk for at du forteller meg det. Stillheten min etter at du bannet kjentes som tilbaketrekning, og jeg beklager at jeg lot deg sitte igjen med det. Jeg vil at du skal vite at jeg kan bli i kontakt selv når det er sterke ord i rommet. Hva ville hjulpet oss å reparere det nå?"
    },
    "dp_alliance-repair_case-michael_10": {
      "text": "[Anspent] Når du sier «ta et pust», føles det som om du prøver å kontrollere meg, som om jeg er en unge som snart blir sendt ut av klasserommet. Det får meg til å ville nekte bare for å beholde fotfestet.",
      "suggestion": "Jeg hører at pustesignalet mitt landet som kontroll og fikk deg til å føle deg snakket ned til, og jeg beklager at jeg ga det på en måte som tok handlekraft fra deg. Hvilken formulering ville fått en pause til å kjennes som ditt valg i stedet for min kommando?"
    },
    "dp_alliance-repair_case-jason_01": {
      "text": "[Stille] Når jeg fryser og sier at jeg ikke vet, blir jeg redd for at jeg gjør terapi feil og kaster bort timen.",
      "suggestion": "Jeg er glad for at du sier det. Stillheten min kan ha fått frysingen til å kjennes som et nederlag, og det beklager jeg. Du gjør ikke terapi feil; frysingen er en del av det vi trenger å forstå. Hva ville hjulpet deg å vite at jeg er med deg når ordene forsvinner?"
    },
    "dp_alliance-repair_case-jason_02": {
      "text": "[Nølende] Da du så på klokka mens jeg lette etter ord, følte jeg meg uviktig. Jeg vet at timer har tidsgrenser, men akkurat da føltes det som om de langsomme ordene mine tok for mye plass.",
      "suggestion": "Takk for at du forteller meg det. Da jeg så på klokka mens du lette etter ord, kunne tempoet ditt kjennes som et problem, og det beklager jeg. Tidsrammen er reell, men jeg må håndtere den uten å få deg til å føle deg stresset eller uviktig. Hvordan kan jeg sjekke tiden på en måte som gjør deg inkludert heller enn overvåket?"
    },
    "dp_alliance-repair_case-jason_03": {
      "text": "[Redd] En tidligere terapeut presset meg til å snakke om følelser til jeg fikk panikk og endte på legevakten; da du spurte om kroppen med en gang, ble jeg redd for at dette skulle bli likt.",
      "suggestion": "Takk for at du forteller meg det. Med det som skjedde hos den forrige terapeuten, kan spørsmålet mitt om kroppen lett kjennes som starten på et nytt utrygt press, og jeg beklager at jeg gikk dit for fort. Vi kan gjøre samtykket tydelig: du kan stoppe meg, og jeg skal spørre før vi går inn i følelser eller fornemmelser. Hva ville vist deg, i de neste minuttene, at denne terapien går i et annet tempo?"
    },
    "dp_alliance-repair_case-jason_04": {
      "text": "[Stille] Du sier at det er greit å ta pause, men når jeg tar pause, føler jeg meg sett på. Ansiktet ditt er vennlig, men det kjennes likevel som en spotlight, og så skynder jeg meg å si noe for at pausen skal ta slutt.",
      "suggestion": "Takk for at du sier det. Oppmerksomheten min i pausene kan kjennes som press i stedet for beskyttelse, og det beklager jeg. Hva ville gjort en pause mindre overvåket, så du ikke må skynde deg ut av den bare for å slippe spotlighten?"
    },
    "dp_alliance-repair_case-jason_05": {
      "text": "[Engstelig] Da du foreslo å øve i en gruppe, følte jeg at du ikke forstod hvor umulig det høres ut. Jeg gikk derfra og tenkte at du så frykten min som noe jeg bare kunne øve meg ut av.",
      "suggestion": "Jeg hører at forslaget mitt hoppet for langt fram og fikk frykten din til å høres mindre ut enn den er. Jeg beklager at jeg ikke traff hvor umulig det kjentes fra innsiden av angsten. Hvilket mindre steg ville vist deg at jeg forstår størrelsen på dette?"
    },
    "dp_alliance-repair_case-jason_06": {
      "text": "[Nølende] Da jeg ble stille, sa du at jeg virket rolig, men jeg hadde panikk. Jeg telte sekundene, prøvde å ikke se rar ut, og så føltes det som om du ikke kunne se hva som faktisk skjedde.",
      "suggestion": "Takk for at du korrigerer meg. Jeg leste stillhet som ro, og jeg beklager at jeg overså panikken under. Hvilke tegn bør jeg se etter, eller spørre om, så jeg ikke forveksler overlevelsesstrategien din med ro?"
    },
    "dp_alliance-repair_case-jason_07": {
      "text": "[Flau] Jeg prøvde å finne ordet, og så fullførte du setningen for meg. Jeg vet at du prøvde å hjelpe, men jeg følte meg dum, som om jeg selv her er for treg til å snakke ordentlig.",
      "suggestion": "Jeg beklager at jeg fullførte setningen din. Det tok over akkurat det stedet der du prøvde å finne ordene, og jeg skjønner at støtte da kunne kjennes ydmykende. Hva ville hjulpet meg å være med deg uten å gå inn i talen din?"
    },
    "dp_alliance-repair_case-jason_08": {
      "text": "[Skamfull] Da du kalte det unngåelse, hørtes det ut som kritikk. Jeg vet allerede at jeg trekker meg unna; det ordet fikk meg til å føle at jeg mislykkes i terapi også.",
      "suggestion": "Jeg hører at «unngåelse» landet som enda en merkelapp for å mislykkes, ikke som hjelp. Jeg beklager at jeg brukte et ord som fikk deg til å kjenne deg klandret. Hvilket språk ville hjulpet oss å snakke om å trekke seg unna uten å gjøre deg feil eller mislykket?"
    },
    "dp_alliance-repair_case-jason_09": {
      "text": "[Redd] Da du ba meg se på deg mens jeg snakket, følte jeg meg blottlagt, som om jeg ble undersøkt. Jeg vet at øyekontakt skal være kontakt, men for meg fikk det ordene til å forsvinne.",
      "suggestion": "Takk for at du sier det. Å be om øyekontakt gjorde øyeblikket for eksponert, og jeg beklager at jeg behandlet kontakt som om den måtte se ut på én bestemt måte. Hvor ville det kjennes tryggere at blikket ditt hviler mens vi snakker?"
    },
    "dp_alliance-repair_case-jason_10": {
      "text": "[Stille] Da du spurte hvorfor jeg ikke dro på festen, hørte jeg dom i det. Jeg vet at det sikkert bare var et spørsmål, men det hørtes ut som: Forklar deg, og da følte jeg meg liten.",
      "suggestion": "Jeg hører at hvorfor-spørsmålet mitt hørtes dømmende ut og satte deg i en posisjon der du måtte forsvare deg, og det beklager jeg. Hvordan kan jeg spørre om det som skjedde på en måte som kjennes nysgjerrig heller enn anklagende?"
    },
    "dp_alliance-repair_case-laura_01": {
      "text": "[Flatt og på vakt] Da du spurte om barndommen så raskt, følte jeg meg eksponert og ville gå. Jeg hadde bare nevnt én bit, og plutselig kjentes det som om hele døren ble åpnet.",
      "suggestion": "Du ble og fortalte meg noe viktig. Barndomsspørsmålet mitt åpnet for mye for fort, og jeg beklager at jeg ikke sjekket kanten med deg. Hva ville hjelpe deg å kjenne at du styrer før jeg spør om noe slikt igjen?"
    },
    "dp_alliance-repair_case-laura_02": {
      "text": "[Fjern] Da jeg fortalte om moren min ved oppvaskbenken og du smilte et øyeblikk, trodde jeg at du lo av meg.",
      "suggestion": "Hvis ansiktet mitt så moret ut i det øyeblikket, skjønner jeg at det kunne kjennes ydmykende og utrygt, og det beklager jeg. Jeg lo ikke av deg, men det viktigste her er hvordan det landet. Hva ville hjulpet deg å kjenne at jeg forstår alvoret i det du fortalte?"
    },
    "dp_alliance-repair_case-laura_03": {
      "text": "[Langsomt og flatt] Du er yngre enn meg, og noen ganger lurer jeg på om du virkelig kan forstå et liv som har vært avstengt så lenge.",
      "suggestion": "Aldersforskjellen er reell, og hvis jeg oppfører meg som om jeg automatisk forstår, kan jeg gå glipp av lengden og ensomheten i det du har levd med. Jeg beklager de gangene jeg kan ha gått forbi det. Hva ville hjulpet deg å teste om jeg forstår livet ditt på dine premisser?"
    },
    "dp_alliance-repair_case-laura_04": {
      "text": "[Flatt og på vakt] Da du skrev notater mens jeg snakket om det som skjedde, følte jeg meg registrert i stedet for møtt. Jeg begynte å lure på hvilken setning du skrev ned, og om den kom til å bli den offisielle versjonen av meg.",
      "suggestion": "Å skrive notater mens du beskrev traume, gjorde at du følte deg registrert og definert i stedet for møtt, og jeg beklager at jeg ikke beskyttet kontakten. Jeg kan la være å skrive, si hva jeg skriver, eller spørre først. Hvilket av det, om noe, ville gjort dette mindre som en offisiell versjon av deg?"
    },
    "dp_alliance-repair_case-laura_05": {
      "text": "[På vakt] Da du spurte om jeg stoler på deg, føltes det som press om å si ja. Hvis jeg sa nei, så jeg for meg at du ble såret eller tenkte at jeg var vanskelig, så jeg ga et tryggere svar enn det egentlige.",
      "suggestion": "Jeg hører at spørsmålet mitt om tillit skapte press om å beskytte meg i stedet for å si sannheten, og det beklager jeg. Tillit skal ikke kreves av deg. Hva ville gjort det mulig å snakke om mistillit uten at du må berolige meg eller håndtere reaksjonen min?"
    },
    "dp_alliance-repair_case-laura_06": {
      "text": "[Anspent] Da du sa at jeg er trygg nå, kjentes det i kroppen som om du ikke trodde på faren. Jeg vet at jeg sitter på kontoret ditt, men ordene fikk det til å høres ut som om jeg burde være over det kroppen fortsatt reagerer på.",
      "suggestion": "Du korrigerer noe viktig her. Å si «trygg nå» hoppet over det kroppen din fortsatt vet, og det beklager jeg. Hva ville hjelpe meg å anerkjenne faren kroppen bærer, uten å antyde at du burde være over det?"
    },
    "dp_alliance-repair_case-laura_07": {
      "text": "[Fjern] Da du foreslo å forestille meg moren min her, følte jeg meg dyttet mot noe altfor stort. Jeg vet at det kanskje kan være nyttig en dag, men i det øyeblikket kjentes det som å bli dratt ut på dypt vann før jeg hadde sagt ja.",
      "suggestion": "Du stoppet meg på et sted der jeg trengte å roe ned. Jeg gikk mot stolarbeid før jeg hadde samtykket ditt til hvor stort det kjentes, og det beklager jeg. At det kanskje kan hjelpe senere, betyr ikke at det var riktig da. Hva ville vært en tryggere kant der du fortsatt kjenner at du styrer?"
    },
    "dp_alliance-repair_case-laura_08": {
      "text": "[Flatt] Du gikk så fort fra eksen min til barndommen at det føltes som om du fulgte en sjekkliste. Jeg hadde knapt sagt hva som skjedde denne uken før det handlet om fortiden.",
      "suggestion": "Å gå fort fram gjorde arbeidet til en sjekkliste, og jeg beklager at jeg forlot denne ukens smerte for tidlig. Hvilken forbindelse mellom de stedene, hvis noen, kjennes ekte nok å følge nå?"
    },
    "dp_alliance-repair_case-laura_09": {
      "text": "[Skamfull] Da du spurte hvor mye vin jeg drikker, hørte jeg den stemmen folk bruker når de allerede vet svaret og er skuffet. Jeg stengte ned fordi jeg trodde du så meg som enda et problem som må håndteres.",
      "suggestion": "Jeg hører at spørsmålet mitt om vin hørtes ut som om jeg allerede hadde dømt deg, og det beklager jeg. Da blir noe som allerede kan bære skam, enda vanskeligere å ta med hit. Hvordan kan jeg spørre om alkohol på en måte som kjennes respektfull og nyttig, ikke som håndtering eller kjeft?"
    },
    "dp_alliance-repair_case-laura_10": {
      "text": "[Lav stemme] Da du sa at jeg overlevde, hørtes det ut som om du sa at jeg burde ha det bra. Jeg vet at du mente styrke, men jeg hørte: Det verste er over, så hvorfor er du fortsatt sånn?",
      "suggestion": "Hvis «overlevde» hørtes ut som «du burde ha det bra», overså jeg den pågående kostnaden, og det beklager jeg. Hva trenger du at jeg forstår om å overleve uten å antyde at smerten burde være ferdig?"
    },
    "dp_alliance-repair_case-carlos_01": {
      "text": "[Defensiv] Noen ganger kjennes det som om du hører «respekt» som bare ego, som om du ikke skjønner hva det betydde der jeg vokste opp.",
      "suggestion": "Hvis jeg fikk respekt til å høres ut som ego, bommet jeg på noe viktig i din verden, og det beklager jeg. Jeg vil forstå hva respekt beskyttet deg mot og hva det kostet deg, ikke se ned på det. Hva trenger jeg å forstå før vi fortsetter å jobbe med det ordet?"
    },
    "dp_alliance-repair_case-carlos_02": {
      "text": "[Anspent] Da du fortsatte å si «brems», hørtes det ut som om du ville at jeg skulle være myk. Jeg vet at du sikkert mente regulering, men i hodet mitt ble det: Bli mindre, bli lettere å håndtere.",
      "suggestion": "Måten jeg sa «brems» på hørtes ut som om jeg ba deg bli mindre eller lettere å håndtere, og det beklager jeg. Da kan pause kjennes som overgivelse i stedet for styrke. Hvilke ord ville fått pausen til å kjennes som kontroll over deg selv, ikke som å trekke deg?"
    },
    "dp_alliance-repair_case-carlos_03": {
      "text": "[Sint] Da jeg snakket om at ungen min skvatt av meg, så du bort et øyeblikk. Jeg vet at det kanskje ikke var noe, men det føltes som om selv du ikke ville se på det jeg hadde gjort.",
      "suggestion": "At jeg så bort mens du prøvde å møte frykten til sønnen din, kunne kjennes som om selv jeg ikke orket å se på det som skjedde, og det beklager jeg. Jeg vil holde begge ting samtidig: skaden betyr noe, og jeg vender meg ikke bort fra deg. Hva ville hjulpet deg å kjenne at jeg kan se stødig på dette sammen med deg?"
    },
    "dp_alliance-repair_case-carlos_04": {
      "text": "[Sint] Da jeg ble høylytt, skvatt du, og da følte jeg meg som den farlige fyren i rommet. Jeg skammet meg allerede over å skremme folk; da jeg så deg reagere sånn, fikk jeg lyst til å slutte å snakke.",
      "suggestion": "At jeg skvatt, fikk deg til å føle deg som den farlige personen i rommet, og det treffer skammen du allerede bar på. Jeg beklager at jeg la mer til den. Jeg må ta intensiteten på alvor uten å få deg til å bære frykten min. Hva ville hjulpet deg å stole nok på stødigheten min til å fortsette å snakke?"
    },
    "dp_alliance-repair_case-carlos_05": {
      "text": "[Defensiv] Da du spurte om jeg var redd, hørtes det ut som om du prøvde å få meg til å innrømme at jeg er svak. Jeg kjente ryggen gå opp, som om du tok respekt fra meg.",
      "suggestion": "Spørsmålet mitt om frykt landet som om jeg tok respekt fra deg, og jeg beklager at jeg ikke beskyttet den verdigheten. Hvilket språk kunne la oss nærme oss frykt uten at du føler deg redusert, svak eller fornærmet?"
    },
    "dp_alliance-repair_case-carlos_06": {
      "text": "[Anspent] Når du snakker om reparasjon med sønnen min, hører jeg at du sier at jeg er en dårlig far. Jeg vet at jeg må møte ting, men hvis det begynner med at jeg er skurken, stenger jeg ned.",
      "suggestion": "Jeg hører at reparasjon hørtes ut som en dom over deg som far, og jeg beklager at jeg ikke gjorde omsorgen i det tydeligere. Hvilken del av ønsket ditt om å være en god far bør jeg holde fast ved mens vi snakker om reparasjon?"
    },
    "dp_alliance-repair_case-carlos_07": {
      "text": "[Såret, men skarp] Du kikket mot døra etter at jeg ble sint, og jeg følte at du sjekket en fluktvei.",
      "suggestion": "Da jeg kikket mot døra, så det ut som om jeg trengte en fluktvei, og jeg skjønner hvor ydmykende og urovekkende det kunne kjennes. Det beklager jeg. Jeg vil være tydelig på trygghet uten å behandle deg som en jeg må komme meg bort fra. Hva ville hjelpe oss å gjenopprette nok tillit til stødigheten min akkurat nå?"
    },
    "dp_alliance-repair_case-carlos_08": {
      "text": "[Defensiv] Da du tok opp drikking, hørtes du akkurat ut som kona mi, som om saken allerede var bygget opp mot meg. Jeg kom inn klar til å være ærlig, og så følte jeg at jeg stod tiltalt.",
      "suggestion": "Jeg hører at formuleringen min satte meg i aktorrollen i stedet for ved siden av deg, og det beklager jeg. Da blir ærlighet farlig. Hva er forskjellen for deg på et spørsmål som hjelper deg å se ærlig, og et som kjennes som en anklage?"
    },
    "dp_alliance-repair_case-carlos_09": {
      "text": "[Sint] Da du brukte ordet vold, følte jeg at du allerede hadde bestemt at jeg er kriminell. Jeg sier ikke at det jeg gjorde var greit, men det ordet gjorde at det føltes som om det ikke fantes et helt menneske igjen å snakke med.",
      "suggestion": "Da jeg brukte ordet vold uten nok varsomhet, hørtes det ut som om jeg hadde redusert deg til en kriminell, og det beklager jeg. Vi trenger fortsatt språk som er ærlig om skade, men ikke språk som visker ut hele mennesket foran meg. Hvilke ord lar oss snakke tydelig uten at du føler deg avskrevet?"
    },
    "dp_alliance-repair_case-carlos_10": {
      "text": "[Defensiv] Når du spør om familien min, føles det som om du klandrer stedet jeg kommer fra. Det finnes ting der som skadet meg, men det finnes stolthet der også, og jeg vil ikke at du skal se på det som en patologi.",
      "suggestion": "Jeg hører at spørsmålene mine om familien kjennes som skyld mot bakgrunnen din, og jeg beklager at jeg ga det inntrykket. Hva trenger jeg å respektere ved der du kommer fra før vi utforsker det som såret deg der?"
    },
    "dp_alliance-repair_case-nina_01": {
      "text": "[På gråten] Da jeg gråt, var du stille lenge. Jeg vet at stillhet kan være støttende, men jeg følte meg alene i det, som om jeg skulle finne ut selv hvordan jeg skulle slutte å gråte.",
      "suggestion": "Stillheten min lot deg være alene med tårene, og jeg beklager at jeg ikke sjekket hvordan stillheten landet. Jeg vil at tårer skal kjennes fulgt her, ikke som en oppgave du må håndtere alene. Når tårene kommer, ville ord, en mykere sjekk eller bare at jeg sier at jeg er her hjelpe?"
    },
    "dp_alliance-repair_case-nina_02": {
      "text": "[Unnskyldende] Da du spurte om hans side av husarbeidet, kjentes det som om du tok eksens side. Jeg vet at det finnes to perspektiver, men jeg kom hit fordi mitt stadig forsvinner.",
      "suggestion": "Formuleringen min fikk det til å høres ut som om jeg hadde stilt meg på hans side, og det vil jeg beklage. Før jeg spør om begge perspektiver igjen, hvilken del av opplevelsen din trenger du at jeg står tydelig sammen med deg i, så din side ikke forsvinner her også?"
    },
    "dp_alliance-repair_case-nina_03": {
      "text": "[Splittet] Noen ganger når jeg snakker om husarbeid og barna, ser jeg at du virker trøtt, og da lurer jeg på om selv du er lei av dette.",
      "suggestion": "Hvis trøtthet syntes i ansiktet mitt, skjønner jeg at det kunne bekrefte frykten for at hverdagsbyrdene dine blir for mye for folk, og det beklager jeg. Jeg er interessert i dette. Hva hjelper deg å kjenne at jeg fortsatt er med deg i de vanlige detaljene?"
    },
    "dp_alliance-repair_case-nina_04": {
      "text": "[Unnskyldende] Når du sier grenser, hører jeg det som om du sier at jeg allerede burde kunne helt vanlig voksenliv. Jeg sitter her og nikker, men inni meg føler jeg meg som en mislykket voksen og mor.",
      "suggestion": "Måten jeg brukte «grenser» på hørtes ut som en korrigering eller karakter, og jeg beklager at det matet følelsen av å mislykkes. Hvilke ord ville hjulpet oss å snakke om grensene dine uten at du føler deg defekt eller på etterskudd?"
    },
    "dp_alliance-repair_case-nina_05": {
      "text": "[På gråten] Da jeg endelig sluttet å gråte forrige uke, så jeg at skuldrene dine sank og ansiktet ditt myknet, og jeg tenkte: Å, hun er lettet. Så ble jeg flau over å ta så mye plass.",
      "suggestion": "Hvis kroppen min så lettet ut, skjønner jeg at tårene dine kunne kjennes som en byrde her, og det beklager jeg. Jeg vil at følelsene dine skal ha rom hos meg. Hva ville hjulpet deg å kjenne at jeg ikke venter på at de skal bli over?"
    },
    "dp_alliance-repair_case-nina_06": {
      "text": "[Fortapt] Når du spør hva jeg vil, føler jeg meg forlatt, som om jeg skal vite det alene. Jeg har brukt år på å gjette hva alle andre vil, så spørsmålet slipper meg ned i et blankt sted.",
      "suggestion": "Spørsmålet mitt kan ha gitt deg for mye ansvar for fort, og det beklager jeg. Hvordan kan jeg hjelpe deg å finne hva du vil uten å la deg være alene i det blanke stedet?"
    },
    "dp_alliance-repair_case-nina_07": {
      "text": "[Sliten] Da du foreslo hvile, hørtes det ut som om du ikke forstår livet mitt i praksis. Jeg gikk hjem og tenkte: Hun aner ikke hvordan kjøkkenet, guttene, moren min og meldingene ser ut klokka ni om kvelden.",
      "suggestion": "Jeg hører at hvile hørtes urealistisk og lite jordnært ut, og jeg beklager at jeg tilbød det for enkelt. Hva trenger jeg å forstå om belastningen før hvile i det hele tatt kan diskuteres på en måte som passer livet ditt?"
    },
    "dp_alliance-repair_case-nina_08": {
      "text": "[Skamfull] Da du kalte det bitterhet, følte jeg at du hadde funnet noe stygt i meg. Jeg vet at jeg klager over å gjøre alt, men jeg vil ikke bli sett som bitter eller slem.",
      "suggestion": "Ordet «bitterhet» landet som om jeg navnga noe stygt i deg, og det beklager jeg. Jeg vil at språket skal respektere såretheten og utmattelsen under. Hvilket ord lar oss bli ved det uten at du føler deg slem?"
    },
    "dp_alliance-repair_case-nina_09": {
      "text": "[Unnskyldende] Jeg sa unnskyld fem ganger og du la ikke merke til det, så jeg følte meg usynlig igjen. Det er flaut å si, for jeg vet at du ikke kan få med deg alt, men det kjentes som om hele mønsteret skjedde rett foran oss.",
      "suggestion": "Jeg beklager at jeg overså de gjentatte unnskyldningene. Det var et viktig signal, og da jeg gikk glipp av det, gjentok jeg usynligheten du beskriver. Hva ville hjulpet deg å føle deg sett i det mønsteret nå, uten at du må unnskylde at du peker det ut?"
    },
    "dp_alliance-repair_case-nina_10": {
      "text": "[Splittet] Da du fokuserte på eksen min, føltes det som om barna forsvant ut av rommet. Jeg vet at han betyr noe, men hvert valg jeg tar går først gjennom dem, og jeg følte at du overså det.",
      "suggestion": "Jeg hører at jeg snevret fokuset inn mot eksen din og mistet barna, som er sentrale i hvert valg du tar. Det beklager jeg. Hvor skal vi hente barna tilbake inn i samtalen nå, så arbeidet passer de faktiske prioriteringene dine?"
    },
    "dp_alliance-repair_case-aisha_01": {
      "text": "[Desperat] Da du ikke svarte raskt på meldingen min, fikk jeg panikk og følte meg forlatt. Jeg vet at du har andre klienter og et liv, men i kroppen min var det bare: Hun er borte, jeg ble for mye.",
      "suggestion": "Takk for at du sier hvordan det mellomrommet landet. Å ikke få raskt svar kjentes som forlatelse og som bevis på at du hadde blitt for mye, og jeg beklager at jeg ikke gjorde meldingsrammen tydelig nok før panikken kom. Hvilken avtale om svartid og hva du kan gjøre mens du venter, ville hjulpet deg å kjenne deg mindre alene samtidig som rammen er forutsigbar?"
    },
    "dp_alliance-repair_case-aisha_02": {
      "text": "[Desperat] Da timen sluttet helt presis, føltes det som at du slapp meg. Jeg vet at det må finnes en klokke, men måten det skjedde på fikk det til å kjennes som om kontakten forsvant i samme sekund som timen var over.",
      "suggestion": "Å avslutte helt presis kjentes som om kontakten forsvant med klokka, og jeg beklager at rammen min landet som forlatelse. Hva ville hjelpe avslutninger å kjennes mer holdt, samtidig som de er tydelige, forutsigbare og ekte?"
    },
    "dp_alliance-repair_case-aisha_03": {
      "text": "[Mistenksom] Dette er kleint å spørre om, men etter at du spurte så mye om hvem jeg ligger med, lurte jeg på om du er interessert i meg på den måten.",
      "suggestion": "Takk for at du spør direkte, selv om det kjennes kleint. Spørsmålene mine om sex gjorde hensikten og grensen uklar, og jeg beklager at jeg satte deg i den posisjonen. Jeg er ikke romantisk eller seksuelt interessert i deg; dette er en profesjonell terapeutisk relasjon. Hva ville hjulpet deg å kjenne at spørsmål om sex handler om å forstå din opplevelse, ikke om min interesse?"
    },
    "dp_alliance-repair_case-aisha_04": {
      "text": "[Desperat] Jeg sendte deg en e-post og hørte ikke noe, og jeg spant rundt hele natten. Jeg sjekket telefonen om og om igjen og sa til meg selv at jeg hadde ødelagt terapien også, selv om en del av meg visste at du sikkert har regler for e-post.",
      "suggestion": "Jeg hører at mangelen på svar lot deg være alene med en spiral, og jeg beklager at jeg ikke gjorde e-postrammen tydeligere før det fikk betydning. Hvilken avtale om meldinger ville hjulpet deg å vite hva du kan forvente uten å føle deg forlatt eller straffet?"
    },
    "dp_alliance-repair_case-aisha_05": {
      "text": "[Såret] Da du sa grenser, hørte jeg: Her er regelen for å holde deg unna. Det kjentes mindre som omsorg og mer som straff for å trenge for mye.",
      "suggestion": "Jeg hører hvordan grensespråket mitt kunne kjennes som straff for å trenge, og det beklager jeg. Rammen må være tydelig, men jeg må også si den på en måte som bærer omsorg og ikke avvisning. Hva ville hjulpet grensen å kjennes som stødighet i stedet for avstand?"
    },
    "dp_alliance-repair_case-aisha_06": {
      "text": "[Skamfull] Da jeg nevnte kutting, ble øynene dine store, og jeg følte at jeg skremte deg. Så fikk jeg lyst til å ta vare på deg i stedet for å fortelle hvor ille det hadde vært.",
      "suggestion": "Da øynene mine ble store, havnet du i posisjonen der du følte deg skremmende og ansvarlig for meg, og det beklager jeg. Jeg må være stødig nok til at kutting kan snakkes om uten at du håndterer reaksjonen min. Hva ville hjulpet deg å kjenne at jeg kan holde sikkerhet i sikte og samtidig bli hos deg?"
    },
    "dp_alliance-repair_case-aisha_07": {
      "text": "[Mistenksom] Da du sa at du skriver notater, lurte jeg på hvilken versjon av meg du legger der. Jeg begynte å se for meg en fil der jeg høres ustabil, dramatisk eller verre ut enn jeg mener å være.",
      "suggestion": "Usikkerheten rundt notatene mine gjorde at du ble utsatt for en versjon av deg som kunne kjennes forvrengt, og jeg beklager at jeg ikke forklarte det tydelig nok. Du skal slippe å måtte forestille deg hva jeg skriver om deg. Hva trenger du å vite om notatene mine for å føle deg mindre prisgitt min versjon?"
    },
    "dp_alliance-repair_case-aisha_08": {
      "text": "[Desperat] Da du sa at vi ikke kunne legge inn en ekstra time denne uken, føltes det som avvisning. Jeg hørte at det handlet om timeplanen, men under det hørte jeg: Behovet ditt er for mye for meg.",
      "suggestion": "Nei-et mitt til en ekstra time landet som avvisning og som om behovet ditt var for mye, og jeg beklager at jeg ikke møtte den delen tydeligere. Jeg kan ikke legge til tid denne uken, og jeg vil fortsatt at planen skal kjennes som noe som holder deg, ikke som straff. Hva ville hjulpet deg å kjenne deg knyttet til arbeidet fram til vi møtes igjen?"
    },
    "dp_alliance-repair_case-aisha_09": {
      "text": "[Panisk] Du hørtes så rolig ut da jeg falt fra hverandre at jeg trodde du ikke brydde deg. Jeg vet at ro kan gi fotfeste, men det føltes som om du sto på andre siden av glasset og så på at jeg gikk i oppløsning.",
      "suggestion": "Jeg ser hvordan roen min kunne bli som en glassvegg mellom oss i stedet for kontakt, og det beklager jeg. Jeg vil være stødig, men ikke på en måte som gjør at du føler deg observert på avstand. Hvilken type stødighet ville kjennes omsorgsfull heller enn fjern når du får panikk?"
    },
    "dp_alliance-repair_case-aisha_10": {
      "text": "[Sint] Da du brukte det diagnoseordet, følte jeg meg redusert til et problem. Det var som om alle grunnene til at jeg reagerer sånn forsvant, og nå var jeg bare en merkelapp du visste hvordan du skulle håndtere.",
      "suggestion": "Jeg hører at diagnoseordet fikk deg til å føle deg redusert og håndtert heller enn forstått, og det beklager jeg at språket mitt gjorde. Hvilke ord hjelper oss å snakke om mønstre og samtidig beholde historien din, grunnene dine og hele deg i rommet?"
    },
    "dp_alliance-repair_case-david_01": {
      "text": "[Streng og sint] Jeg tror ikke denne terapien virker. Jeg kommer hit og sier de samme tingene om igjen, og kanskje vi bare kaster bort tiden begge to.",
      "suggestion": "Jeg setter pris på at du sier det så direkte. Det høres frustrerende ut, og kanskje ydmykende, å jobbe så hardt uten å se nok endring. Jeg beklager at jeg ikke har hjulpet oss å gjøre framgangen tydelig. Vi kan se ærlig på hva som ikke fungerer, også om en annen tilnærming eller terapeut ville tjent deg bedre. Hva ville gjort denne samtalen verdt tiden din i dag, i stedet for bare en ny gjentakelse?"
    },
    "dp_alliance-repair_case-david_02": {
      "text": "[Avvisende] Da jeg ba om strategi, fortsatte du å gå tilbake til følelser, og jeg følte meg oversett. Jeg kom inn og ba om noe jeg faktisk kan gjøre, og det kjentes som om du stadig tok verktøyet ut av hånden min.",
      "suggestion": "Jeg korrigerte for langt mot dybde og ga for lite av strategien du ba om, og jeg beklager at det gjorde at du følte deg oversett. Hvilket praktisk holdepunkt ville hjulpet følelsesarbeidet å fortjene plass i dag, i stedet for at det kjennes som om jeg tar verktøyet fra deg?"
    },
    "dp_alliance-repair_case-david_03": {
      "text": "[Såret, men skarp] Da du navnga konas sårhet først, kjentes det som om du tok hennes parti. Jeg vet at hun er såret, men jeg prøvde å vise deg mitt, og det føltes som om mitt allerede var mindre viktig.",
      "suggestion": "Rekkefølgen betydde noe: Da jeg navnga hennes sårhet først, hørtes det ut som om jeg stod på hennes side og gjorde din mindre viktig, og det beklager jeg. Før vi snakker om smerten hennes igjen, hvilken del av din trenger jeg å forstå så du ikke føler deg i mindretall her?"
    },
    "dp_alliance-repair_case-david_04": {
      "text": "[Streng] Da du utfordret meg med den tonen, følte jeg meg ydmyket, ikke hjulpet. Det minnet meg om å bli satt på plass i et møte, og etter det sluttet jeg å høre poenget du prøvde å få fram.",
      "suggestion": "Tonen min gjorde utfordringen til ydmykelse, og det beklager jeg. Jeg vil at utfordring skal tjene arbeidet, ikke gjenta det å bli satt på plass. Hva ville gjort en utfordring respektfull nok til at du fortsatt kunne høre den?"
    },
    "dp_alliance-repair_case-david_05": {
      "text": "[Avvisende] Da du kalte det selvbeskyttelse, hørtes det ut som en høflig klinisk måte å si narsissistisk på. Jeg hørte den myke formuleringen, men under den følte jeg meg fortsatt diagnostisert og sett ned på.",
      "suggestion": "Jeg hører at formuleringen min hørtes patologiserende ut selv om den var pakket pent inn, og det beklager jeg. Hvilket språk ville latt oss undersøke forsvaret ditt uten at du føler deg diagnostisert, fornærmet eller sett ned på?"
    },
    "dp_alliance-repair_case-david_06": {
      "text": "[Såret, men skarp] Du tok tårene til kona mi mer alvorlig enn mine. Når jeg snakker skarpt, virker det som om du hører arroganse; når hun gråter, hører du smerte.",
      "suggestion": "Du peker på en viktig svikt i lyttingen min. Hvis jeg hørte tårene hennes som smerte og skarpheten din bare som arroganse, overså jeg deg, og det beklager jeg. Hva trengte smerten din fra meg i det øyeblikket, så den ikke måtte komme pakket inn i skarphet?"
    },
    "dp_alliance-repair_case-david_07": {
      "text": "[Kontrollert] Da du spurte om detaljer rundt affæren, følte jeg meg dømt og blottlagt. Jeg klarte ikke å vite om spørsmålene hjalp arbeidet, eller om jeg ble presset til å tilstå.",
      "suggestion": "Spørsmålene mine satte deg i en tilståelsesposisjon heller enn i en terapisamtale, og jeg beklager at jeg ikke gjorde hensikten og grensene tydelige. Jeg vil ikke at dette skal bli straffende. Hvilke detaljer, om noen, tjener arbeidet, og hvor bør jeg stoppe fordi det begynner å kjennes som å bli dømt?"
    },
    "dp_alliance-repair_case-david_08": {
      "text": "[Irritert] Da du sa at det ikke finnes raske løsninger, hørtes det nedlatende ut, som om du sa at jeg er naiv fordi jeg vil se bevegelse. Jeg ber ikke om magi; jeg spør om dette faktisk går et sted.",
      "suggestion": "Jeg hører hvordan «ingen raske løsninger» kunne høres ut som om jeg snakket ned til deg og avviste alvoret, og det beklager jeg. Hvordan kan jeg være ærlig om at terapi tar tid, samtidig som jeg tar på alvor behovet ditt for å se om dette går et sted?"
    },
    "dp_alliance-repair_case-david_09": {
      "text": "[Avvisende] Du virket imponert over karrieren min, og da følte jeg at du overså rotet hjemme. Jeg får nok av folk som beundrer den polerte versjonen; jeg trenger at du ikke lar deg lure av den.",
      "suggestion": "Jeg hører at oppmerksomheten min på karrieren din kan ha styrket den polerte versjonen av deg og oversett smerten hjemme. Det beklager jeg. Hvor bør jeg se nå, så jeg ikke samarbeider med prestasjonen?"
    },
    "dp_alliance-repair_case-david_10": {
      "text": "[Kald] Da du nevnte henvisninger, føltes det som om du var ferdig med meg. Jeg hørte det som: Hvis dette ikke virker, kan du kanskje gå et annet sted, og da stengte jeg ned.",
      "suggestion": "Da jeg nevnte henvisninger, landet det som om jeg var ferdig med deg, og jeg beklager at jeg rammet det inn på en måte som kjentes avvisende. Jeg er villig til å fortsette å arbeide med deg, og jeg vil også at vi skal være ærlige hvis noe annet kan hjelpe mer. Hva ville gjort den samtalen til et valg sammen med meg, heller enn å bli sendt bort?"
    },
    "dp_alliance-repair_case-marcus_01": {
      "text": "[Langsomt og flatt] Da jeg sa at jeg ikke følte noe, fortsatte du å spørre hva som lå under, og jeg stengte ned. Ingenting var allerede kanten; det føltes som om du ville at jeg skulle produsere noe annet.",
      "suggestion": "Jeg fortsatte å presse etter at «ingenting» allerede var kanten din, og jeg beklager det. Jeg vil ikke at du skal måtte produsere følelse for meg. Hva ville vist deg at jeg respekterer kanten og samtidig blir her sammen med deg?"
    },
    "dp_alliance-repair_case-marcus_02": {
      "text": "[Lav stemme] Da du flyttet stolen nærmere, følte jeg meg fanget og urolig. Jeg skjønte at du sikkert mente det som varme, men kroppen min leste det som at noen tok mer plass enn jeg hadde sagt ja til.",
      "suggestion": "Da jeg flyttet meg nærmere, ble du urolig og kjente deg fanget, og jeg beklager at jeg endret avstanden uten å sjekke. Kroppen din skal slippe å måtte håndtere hvor jeg sitter i rommet. Hvor ville det kjennes tryggere at jeg var?"
    },
    "dp_alliance-repair_case-marcus_03": {
      "text": "[Hyperårvåken] Når du spør om marerittene, lurer jeg på om du faktisk vet hva du skal gjøre med dette, eller om det er for mye for deg.",
      "suggestion": "Det spørsmålet fortjener et direkte svar. Hvis jeg spør om marerittene uten å vise stødighet, samtykke og kompetanse, gir det mening at du lurer på om dette er for mye for meg. Jeg beklager at jeg gikk videre før beredskapen var tydelig. Jeg har trening og støtte i traumearbeid, og jeg vil gjøre meg fortjent til tillit ved å gå i et tempo du kan stoppe. Hva trenger du å se fra meg før vi nærmer oss marerittene igjen?"
    },
    "dp_alliance-repair_case-marcus_04": {
      "text": "[Anspent] Da du ba meg lukke øynene, gikk kroppen min i alarm. Jeg vet det skulle hjelpe meg å fokusere, men for meg kjentes det som å gi fra meg rommet.",
      "suggestion": "Å be deg lukke øynene overså hva trygghet og orientering krever for deg, og det beklager jeg. Vi trenger ikke gjøre det. Hvilke måter å lande på lar deg beholde nok kontroll over rommet og samtidig være her?"
    },
    "dp_alliance-repair_case-marcus_05": {
      "text": "[Flatt] Da du kalte det en traumereaksjon, følte jeg meg som en kategori. Jeg vet at det kanskje stemmer, men jeg sluttet å føle at du snakket til meg.",
      "suggestion": "Jeg hører at språket mitt kanskje var presist, men likevel fikk deg til å føle deg kategorisert heller enn kjent, og det beklager jeg. Hvilke ord hjelper oss å navngi det som skjer uten at du føler deg arkivert eller mindre som deg selv?"
    },
    "dp_alliance-repair_case-marcus_06": {
      "text": "[Lav stemme] Da jeg nevnte volden hjemme, forandret ansiktet ditt seg. Kanskje jeg leste det feil, men det så ukomfortabelt ut, og da følte jeg at jeg måtte gjøre det mindre så du kunne tåle det.",
      "suggestion": "Hvis ubehaget syntes i ansiktet mitt, ble du stående og gjøre volden mindre så jeg kunne tåle den, og det beklager jeg. Du skal ikke måtte beskytte meg mot historien din. Hva ville hjulpet deg å vite at jeg kan høre det uten å vende meg bort eller trenge at du håndterer meg?"
    },
    "dp_alliance-repair_case-marcus_07": {
      "text": "[På vakt] Jeg sa at jeg ikke ville snakke om marerittene, og du stilte likevel ett spørsmål til. Det var bare ett spørsmål, men det gjorde at nei-et mitt kjentes svakt her inne.",
      "suggestion": "Jeg hører at jeg krysset en grense etter at du allerede hadde sagt nei, og det beklager jeg. Selv ett ekstra spørsmål kan få stoppsignalet ditt til å kjennes svakt her. Hva bør jeg gjøre nå for å reparere det og gjøre nei-et ditt tydeligere mellom oss?"
    },
    "dp_alliance-repair_case-marcus_08": {
      "text": "[Hyperårvåken] Du satt mellom meg og døra, og jeg klarte ikke å høre noe annet. Jeg nikket, men hele tiden fulgte jeg med på veien ut.",
      "suggestion": "At jeg satt mellom deg og døra, preget hele timen før vi engang hadde ord for det, og jeg beklager at jeg ikke sjekket rommet med deg. La oss endre det nå. Hvor bør jeg sitte så kroppen din kan følge med på utgangen og samtidig være i kontakt med meg?"
    },
    "dp_alliance-repair_case-marcus_09": {
      "text": "[Streng] Når du sier «du er trygg her», føles det som om du ikke vet hva trygg betyr. Det høres for rent ut, som en frase fra et rom der ingenting vondt noen gang har skjedd.",
      "suggestion": "Den frasen hørtes for ren ut og fikk meg til å virke naiv om hva trygghet betyr for deg, og det beklager jeg. Jeg vil ikke at ordene mine skal viske ut det kroppen din vet. Hvilken formulering ville kjennes mer presis for den typen trygghet vi kan bygge i dette rommet?"
    },
    "dp_alliance-repair_case-marcus_10": {
      "text": "[Flatt] Du spør om fosterhjem nesten hver time, og etter hvert kjennes det som graving. Jeg begynner å lure på om du hører på meg nå, eller bare leter etter den gamle historien under alt.",
      "suggestion": "Å vende tilbake dit igjen og igjen har kjentes som graving, og jeg beklager at jeg ikke sjekket det. Jeg vil ikke at nåtiden din bare skal bli bevis for fortiden. Hva ville fått det til å kjennes som at du styrer om og når vi nærmer oss det stoffet?"
    }
  }
};

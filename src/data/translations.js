import {NORA_CASE_NO,NORA_SKILLS} from './noraCase.js';
import {NORA_TRANSLATIONS} from './noraContent.js';
import {MIA_CASE_NO,MIA_SKILLS} from './miaCase.js';
import {MIA_TRANSLATIONS} from './miaContent.js';
import {EXTENSION_GUIDES, EXTENSION_TRANSLATIONS} from "./skillExtensions.js";
import {ARNE_CASE_NO, ARNE_SKILLS} from './arneCase.js';
import {ARNE_TRANSLATIONS} from './arneContent.js';
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
    "homeTitle": "Your practice",
    "homeLibrary": "Browse library",
    "homeLanguage": "Language",
    "homeChangeLanguage": "Change practice language",
    "homeBack": "Home",
    "homeBackAria": "Back to practice home",
    "homeGroup": "Group",
    "homeShared": "Shared device",
    "accountLoading": "Loading account…",
    "contentLoading": "Loading practice…",
    "contentUnavailable": "Practice unavailable",
    "contentLoadFailed": "We could not load the exercises. Try again, or reload this page if the problem continues. Any paused round is still saved.",
    "contentLoadRetry": "Try loading again",
    "accountUnavailable": "Your practice account could not be loaded. Sign in again, or sign out to practice without saving.",
    "progressPeriod": "Profile period",
    "progressRecent": "Recent practice",
    "progressAll": "All history",
    "progressRecentNote": "Latest 8 ratings per skill and level, from the last 90 days.",
    "progressAllNote": "All saved ratings. This profile includes older practice.",
    "progressNoRecent": "No ratings in the last 90 days. Your earlier practice is available in All history.",
    "progressSuggestion": "One idea for next time",
    "progressContinueTarget": "Continue your saved next-attempt target.",
    "progressTrySkill": "Try a skill and build your first practice history.",
    "progressRevisit": "Your least recently rated skill in this view. Revisit it when you’re ready.",
    "progressTrend": "{count} latest ratings · separate lines by level",
    "progressRoundRatings": "{count} of 4 set ratings saved",
    "progressSet": "Set {number}",
    "progressMore": "Show earlier ratings",
    "progressSourceLabel": "Ratings of your practice",
    "accountUnavailableShort": "Account unavailable",
    "groupRatingGuide": "Rate the therapist’s use of the selected skill: 1 = Not yet demonstrated · 2 = Emerging with guidance · 3 = Adequate in parts · 4 = Well demonstrated · 5 = Skillfully demonstrated",
    "progressSelf": "Self-ratings",
    "progressObserver": "Observer ratings",
    "progressObserverDescription": "Ratings given to you by practice partners. Kept separate from your self-ratings.",
    "progressObserverEmpty": "No observer ratings received yet. A partner can save a rating after observing your practice.",
    "progressLegend": "Each colour is a difficulty level; gaps mean no ratings in this period. Tap a level to view it alone.",
    "progressDifficultyCompare": "Compare levels",
    "progressRatedSkills": "{count} rated skills",
    "progressLevelCount": "{count} ratings",
    "progressLevelUnspecified": "Level not recorded",
    "progressRadarAria": "Practice ratings by skill and difficulty on a 1–5 scale",
    "progressRadarNeedsThree": "A radar needs three rated skills. Here are your scores for the selected levels.",
    "progressUnrated": "No saved ratings",
    "progressHistory": "Skill history",
    "progressPractice": "Practice this skill",
    "progressSkillStats": "{ratings} ratings · {items} rated items",
    "progressLatest": "Latest: {date} · {score}/5 · {difficulty}",
    "progressFinishFirst": "Pause or finish the current round before starting practice from your history.",
    "progressMethods": "How this profile works",
    "progressMethodDescription": "Recent practice uses up to 8 latest ratings per skill and difficulty from the last 90 days. All history uses every saved rating for the selected source. Averages are weighted by the number of practiced items, without additional age weighting. Missing or older data is never shown as a current score. Self and observer ratings stay separate. These are practice ratings, not a measure of competence; scores at different difficulties are not directly comparable.",
    "lastSetupTitle": "Your last practice setup",
    "repeatLastSetup": "Prepare another round",
    "individualInstruction": "Try a response aloud first. Then compare with an example and try again, or move to the next item.",
    "individualAwarenessInstruction": "Read the statement and notice your body, feelings, thoughts, and impulses. You do not need to respond to the client. Keep your reflection private if you prefer.",
    "individualRetry": "Hide example and try again",
    "individualAwarenessRetry": "Hide example and notice again",
    "individualRetryInstruction": "Try the same statement again, changing one thing from your first attempt. Move on when you are ready.",
    "individualAwarenessRetryInstruction": "Read the same statement again and notice what changes in your internal reaction. Move on when you are ready.",
    "individualExampleNote": "One possible response, not an answer key. Notice what fits the skill and what you would do differently.",
    "individualAwarenessExampleNote": "One possible reflection. Your own reaction may be different; there is no right feeling to have.",
    "skillReminders": "Skill reminders",
    "targetLocked": "This round stays linked to the therapist selected at the start. Pause or finish it before choosing someone else.",
    "selfAwarenessShowSuggestion": "Compare one awareness reflection",
    "close": "Close",
    "closeAccount": "Close account panel",
    "closeTherapist": "Close therapist panel",
    "feedbackReasonQuality": "Statement or suggestion feels off",
    "feedbackReasonTranslation": "Translation issue",
    "feedbackReasonOffensive": "Offensive or inappropriate",
    "feedbackReasonOther": "Other",
    "feedbackDetailsPlaceholder": "Tell us what felt wrong or how to improve it.",
    "leaveTitle": "Leave this round?",
    "leaveDescription": "Pause to keep your place, or finish using only the items you have completed.",
    "continuePractice": "Continue practicing",
    "pauseRound": "Pause and leave",
    "finishCompleted": "Finish completed items",
    "roundCompleteTitle": "Round complete",
    "roundCompleteDescription": "Take a moment to notice one thing you want to bring into your next practice.",
    "roundOutcome": "{completed} practiced · {skipped} passed · {total} in this round",
    "chooseAnotherCase": "Choose another case",
    "repeatRound": "Practice this case again",
    "rotateRound": "Rotate roles and prepare next round",
    "finishWithoutRating": "Finish without saving",
    "roundSaved": "Rating saved.",
    "ratingSaveFailed": "We could not confirm your rating was saved. Your score is still here; please try again.",
    "ratingTargetChanged": "This round belongs to the therapist selected when it began. Sign in with the same account to save it.",
    "roundFor": "Practicing for: {name}",
    "roundLocal": "This round is not linked to an account.",
    "formatLocked": "Finish this round before changing its format.",
    "triadSteps": ["Respond", "Client feedback", "Coaching", "Retry"],
    "triadRetryHint": "You can repeat the response before finishing this item.",
    "triadRoundReady": "Choose roles, skill and case for the next twelve-item round. Keep roles and rate after each set of three.",
    "selfAwarenessOrientation": "The reader presents the client statement. The therapist notices their internal reactions and shares only what feels comfortable in training. The reader and observer support awareness and boundaries, then the therapist listens again.",
    "selfAwarenessSteps": ["Notice", "Reader feedback", "Coaching", "Notice again"],
    "selfAwarenessFirstTitle": "Therapist — notice your reaction",
    "selfAwarenessFirstInstruction": "Listen and notice your body, feelings, thoughts, and impulses. Keep the reflection private, or share only what you choose with the practice group.",
    "selfAwarenessFirstContinue": "Ready for feedback",
    "selfAwarenessReaderRole": "Reader",
    "selfAwarenessClientTitle": "Reader — reflect on the process",
    "selfAwarenessClientInstruction": "Step out of the client role. Name what you noticed about the therapist pausing and attending to their experience. Respect what they chose to keep private.",
    "selfAwarenessClientContinue": "Reflection given",
    "selfAwarenessObserverInstruction": "Name one moment of awareness or boundary-setting you observed. Offer one gentle experiment in noticing, without interpreting the therapist or asking for more disclosure.",
    "selfAwarenessRetryTitle": "Therapist — listen and notice again",
    "selfAwarenessRetryInstruction": "Ask the reader to repeat the statement. Notice what is different in your reaction. Share only what you choose; keeping something private is part of the practice.",
    "selfAwarenessDebriefClient": "Reflect on how the group made room for noticing without pressure to disclose.",
    "selfAwarenessGuideClient": "The reader steps out of role before giving process feedback.",
    "resumePhase": "{format} · {phase}",
    "resumeBrief": "Case brief",
    "resumeDebrief": "Round debrief",
    "roundProgress": "Round progress",
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
    "practiceFormatLabel": "Practice format",
    "practiceModeIndividual": "Individual",
    "practiceModeIndividualDescription": "Practice the full set at your own pace.",
    "practiceModeTriad": "Group",
    "practiceModeTriadDescription": "Practice together on your own devices. Two or more people, rotating roles and focused feedback.",
    "triadOrientationTitle": "How the group practices",
    "triadOrientation": "Keep roles for twelve items and rate after every three. The observer guides each item: the therapist responds, the client describes the impact, the observer offers focused coaching, and the therapist retries.",
    "triadFeedbackGuideTitle": "Feedback guide",
    "triadGuideAttempt": "Comment on this attempt, not the therapist as a person.",
    "triadGuideClient": "The client speaks from their own experience.",
    "triadGuideObserver": "The observer names one observable strength and one next edge.",
    "triadGuideChoice": "The therapist may adapt, decline, or pass.",
    "triadGuideBoundary": "Do not interpret one another's psychology.",
    "triadGuideExample": "Suggested responses are examples, not answer keys.",
    "triadRoleTherapist": "Therapist",
    "triadRoleClient": "Client",
    "triadRoleObserver": "Observer",
    "triadProgressPattern": "Item {current} of {total} · Step {step} of 4",
    "triadPhaseFirstTitle": "Therapist — first response",
    "triadPhaseFirstInstruction": "The client reads the statement in role. Respond aloud as you would in the room, without looking for a perfect sentence. The observer listens for the selected skill.",
    "triadPhaseFirstContinue": "Response given",
    "triadPhaseClientTitle": "Client — experienced impact",
    "triadPhaseClientInstruction": "Stay in role. Describe in first-person language what happened inside when you heard the response. What helped you stay with the experience? Did anything feel distancing, leading, too much, or too little? This is your experience, not a judgment for every client.",
    "triadPhaseClientContinue": "Client feedback given",
    "triadPhaseObserverTitle": "Observer — focused coaching",
    "triadPhaseObserverInstruction": "Name one observable strength and one specific experiment connected to wording, tone, pace, tentativeness, or skill fit. Do not interpret the person or prescribe a correct sentence.",
    "triadPhaseObserverContinue": "Observer feedback given",
    "triadObserverFocusLabel": "Skill focus",
    "triadObserverMissLabel": "Common miss",
    "triadPhaseRetryTitle": "Therapist — retry",
    "triadPhaseRetryInstruction": "Say which one change you will test. You may accept, adapt, or decline the feedback. Then respond to the same client statement again.",
    "triadPhaseRetryFinish": "Finish item",
    "triadPassItem": "Pass this item",
    "triadPassConfirm": "Pass this item? It will not count as completed or be included in a saved rating.",
    "triadPassConfirmButton": "Confirm pass",
    "triadPassCancel": "Cancel",
    "triadShowSuggestion": "Compare one possible response",
    "triadHideSuggestion": "Hide example",
    "triadSuggestionExampleNote": "This is an example, not a correct answer.",
    "triadDebriefEyebrow": "Round complete",
    "triadDebriefTitle": "Reflect together before rotating",
    "triadDebriefTherapistLabel": "Therapist:",
    "triadDebriefTherapist": "Identify one adjustment that became more available.",
    "triadDebriefClientLabel": "Client:",
    "triadDebriefClient": "Describe what changed between the first responses and the retries.",
    "triadDebriefObserverLabel": "Observer:",
    "triadDebriefObserver": "Name one recurring strength and one narrow next practice target.",
    "triadDebriefGroupLabel": "Group:",
    "triadDebriefGroup": "Classify the challenge as too easy, productive, or too difficult, and use that judgment when choosing the next case.",
    "triadDerole": "Step out of role: say your own names, orient to the room, and take a quiet moment before rotating.",
    "triadCompleteRound": "Complete round",
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
    "ratingTitleSelf": "How well did you use the selected skill?",
    "ratingTitleObserver": "How well did the therapist use the selected skill?",
    "ratingScoreLabel": "Round score",
    "triadRatingTitle": "How well did the therapist use the selected skill in these items?",
    "triadRatingDescription": "Rate the observable practice, not the person's overall competence.",
    "sharedDeviceRatingDescription": "Discuss these three items, then save a self-assessment to your progress. Use a group room on separate devices to rate another therapist.",
    "ratingTargetSignedOut": "Sign in to save",
    "ratingSubmit": "Save",
    "ratingSavedButton": "Saved",
    "ratingSkip": "Skip",
    "ratingDone": "Done",
    "ratingSignInHint": "Sign in to save this round, or finish without saving.",
    "ratingConfigMissing": "Supabase Auth is not configured.",
    "ratingNoTarget": "Your rating account is unavailable. Sign in again or finish without saving.",
    "ratingUnavailable": "No active round to rate.",
    "ratingMissingScore": "Choose a score first.",
    "ratingSaving": "Saving rating...",
    "ratingSaved": "Saved.",
    "ratingError": "Unable to save rating.",
    "ratingItemCountSingular": "{count} item practiced",
    "ratingItemCountPlural": "{count} items practiced",
    "selfChartTitle": "Your progress",
    "selfChartDescription": "Your own ratings of your practice. Use them to reflect and choose what to practice next.",
    "selfChartRefresh": "Refresh",
    "selfChartSignIn": "Sign in to see your practice ratings.",
    "selfChartLoading": "Loading chart...",
    "selfChartNotLoaded": "Open Your progress to load your ratings.",
    "selfChartEmpty": "No self-ratings yet.",
    "selfChartError": "Unable to load chart.",
    "selfChartAverage": "{score}/5 weighted average",
    "selfChartCount": "{count} rated items",
    "selfChartAria": "Radar chart of practice ratings across twelve fixed skills",
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
    "homeTitle": "Din øving",
    "homeLibrary": "Utforsk biblioteket",
    "homeLanguage": "Språk",
    "homeChangeLanguage": "Endre øvingsspråk",
    "homeBack": "Hjem",
    "homeBackAria": "Tilbake til øvingsoversikten",
    "homeGroup": "Gruppe",
    "homeShared": "Felles enhet",
    "accountLoading": "Laster konto…",
    "contentLoading": "Laster øving…",
    "contentUnavailable": "Øving utilgjengelig",
    "contentLoadFailed": "Øvingsoppgavene kunne ikke lastes inn. Prøv igjen, eller last siden på nytt hvis problemet fortsetter. En eventuell pauset runde er fortsatt lagret.",
    "contentLoadRetry": "Prøv å laste igjen",
    "accountUnavailable": "Øvingskontoen kunne ikke lastes. Logg inn på nytt, eller logg ut for å øve uten lagring.",
    "progressPeriod": "Periode for profilen",
    "progressRecent": "Nylig øving",
    "progressAll": "Hele historikken",
    "progressRecentNote": "De 8 nyeste vurderingene per ferdighet og nivå, fra de siste 90 dagene.",
    "progressAllNote": "Alle lagrede vurderinger. Denne profilen inkluderer eldre øving.",
    "progressNoRecent": "Ingen vurderinger de siste 90 dagene. Tidligere øving finnes under Hele historikken.",
    "progressSuggestion": "Én idé til neste gang",
    "progressContinueTarget": "Fortsett med ditt lagrede mål for neste forsøk.",
    "progressTrySkill": "Prøv en ferdighet og bygg din første øvingshistorikk.",
    "progressRevisit": "Ferdigheten som sist ble vurdert lengst tilbake i denne visningen. Prøv den igjen når du er klar.",
    "progressTrend": "De {count} nyeste vurderingene · egne linjer for hvert nivå",
    "progressRoundRatings": "{count} av 4 settvurderinger lagret",
    "progressSet": "Sett {number}",
    "progressMore": "Vis eldre vurderinger",
    "progressSourceLabel": "Vurderinger av din øving",
    "accountUnavailableShort": "Konto utilgjengelig",
    "groupRatingGuide": "Vurder terapeutens bruk av den valgte ferdigheten: 1 = Ikke vist ennå · 2 = På vei med veiledning · 3 = Tilfredsstillende i deler · 4 = Godt demonstrert · 5 = Svært godt demonstrert",
    "progressSelf": "Egenvurderinger",
    "progressObserver": "Observatørvurderinger",
    "progressObserverDescription": "Vurderinger du har fått fra øvingspartnere. Vises separat fra dine egenvurderinger.",
    "progressObserverEmpty": "Ingen observatørvurderinger mottatt ennå. En partner kan lagre en vurdering etter å ha observert øvingen din.",
    "progressLegend": "Hver farge er en vanskelighetsgrad; opphold betyr at vurderinger mangler i denne perioden. Trykk på et nivå for å vise det alene.",
    "progressDifficultyCompare": "Sammenlign nivåer",
    "progressRatedSkills": "{count} vurderte ferdigheter",
    "progressLevelCount": "{count} vurderinger",
    "progressLevelUnspecified": "Nivå ikke registrert",
    "progressRadarAria": "Øvingsvurderinger etter ferdighet og vanskelighetsgrad på en skala fra 1 til 5",
    "progressRadarNeedsThree": "En radar trenger tre vurderte ferdigheter. Her er skårene dine for de valgte nivåene.",
    "progressUnrated": "Ingen lagrede vurderinger",
    "progressHistory": "Ferdighetshistorikk",
    "progressPractice": "Øv på ferdigheten",
    "progressSkillStats": "{ratings} vurderinger · {items} vurderte utsagn",
    "progressLatest": "Sist: {date} · {score}/5 · {difficulty}",
    "progressFinishFirst": "Sett runden på pause eller avslutt den før du starter øving fra historikken.",
    "progressMethods": "Slik fungerer profilen",
    "progressMethodDescription": "Nylig øving bruker opptil de 8 nyeste vurderingene per ferdighet og vanskelighetsgrad fra de siste 90 dagene. Hele historikken bruker alle lagrede vurderinger fra valgt kilde. Gjennomsnitt vektes etter antall øvde utsagn, uten ekstra aldersvekting. Manglende eller eldre data vises aldri som en aktuell skår. Egenvurdering og observatørvurdering holdes atskilt. Dette er øvingsvurderinger, ikke et mål på kompetanse; skårer på ulike vanskelighetsgrader er ikke direkte sammenlignbare.",
    "lastSetupTitle": "Ditt siste øvingsoppsett",
    "repeatLastSetup": "Forbered en ny runde",
    "individualInstruction": "Prøv en respons høyt først. Sammenlign deretter med et eksempel og prøv igjen, eller gå videre til neste utsagn.",
    "individualAwarenessInstruction": "Les utsagnet og legg merke til kropp, følelser, tanker og impulser. Du trenger ikke svare klienten. Behold refleksjonen for deg selv om du ønsker.",
    "individualRetry": "Skjul eksempelet og prøv igjen",
    "individualAwarenessRetry": "Skjul eksempelet og legg merke til på nytt",
    "individualRetryInstruction": "Prøv det samme utsagnet igjen, og endre én ting fra første forsøk. Gå videre når du er klar.",
    "individualAwarenessRetryInstruction": "Les det samme utsagnet igjen og legg merke til hva som endrer seg i din indre reaksjon. Gå videre når du er klar.",
    "individualExampleNote": "Én mulig respons, ikke en fasit. Legg merke til hva som passer ferdigheten, og hva du ville gjort annerledes.",
    "individualAwarenessExampleNote": "Én mulig refleksjon. Din egen reaksjon kan være annerledes; det finnes ingen riktig følelse å ha.",
    "skillReminders": "Påminnelser om ferdigheten",
    "targetLocked": "Runden er knyttet til terapeuten som ble valgt ved start. Ta pause eller avslutt før du velger en annen.",
    "selfAwarenessShowSuggestion": "Se et eksempel på selvbevissthet",
    "close": "Lukk",
    "closeAccount": "Lukk kontopanelet",
    "closeTherapist": "Lukk terapeutpanelet",
    "feedbackReasonQuality": "Utsagnet eller responsforslaget virker feil",
    "feedbackReasonTranslation": "Problem med oversettelsen",
    "feedbackReasonOffensive": "Støtende eller upassende",
    "feedbackReasonOther": "Annet",
    "feedbackDetailsPlaceholder": "Fortell hva som virker feil, eller hvordan det kan forbedres.",
    "leaveTitle": "Vil du forlate runden?",
    "leaveDescription": "Ta en pause for å beholde plassen din, eller avslutt med bare utsagnene du har øvd på.",
    "continuePractice": "Fortsett øvingen",
    "pauseRound": "Ta pause og gå tilbake",
    "finishCompleted": "Avslutt med fullførte utsagn",
    "roundCompleteTitle": "Runden er fullført",
    "roundCompleteDescription": "Ta et øyeblikk og legg merke til én ting du vil ta med deg i neste øvingsrunde.",
    "roundOutcome": "{completed} øvd på · {skipped} hoppet over · {total} i runden",
    "chooseAnotherCase": "Velg en annen case",
    "repeatRound": "Øv på denne casen igjen",
    "rotateRound": "Bytt roller og forbered neste runde",
    "finishWithoutRating": "Avslutt uten å lagre",
    "roundSaved": "Vurderingen er lagret.",
    "ratingSaveFailed": "Vi kunne ikke bekrefte at vurderingen ble lagret. Skåren er beholdt; prøv igjen.",
    "ratingTargetChanged": "Runden tilhører terapeuten som ble valgt ved start. Logg inn med samme konto for å lagre.",
    "roundFor": "Øver for: {name}",
    "roundLocal": "Denne runden er ikke knyttet til en konto.",
    "formatLocked": "Avslutt runden før du endrer øvingsform.",
    "triadSteps": ["Respons", "Klienttilbakemelding", "Veiledning", "Nytt forsøk"],
    "triadRetryHint": "Du kan gjenta responsen før du avslutter dette utsagnet.",
    "triadRoundReady": "Velg roller, ferdighet og kasus for neste runde med tolv utsagn. Behold rollene og vurder etter hvert sett med tre.",
    "selfAwarenessOrientation": "Oppleseren leser klientutsagnet. Terapeuten legger merke til egne indre reaksjoner og deler bare det som kjennes greit i øvingssituasjonen. Oppleser og observatør støtter oppmerksomhet og grenser før terapeuten lytter på nytt.",
    "selfAwarenessSteps": ["Legg merke til", "Oppleserens respons", "Veiledning", "Lytt på nytt"],
    "selfAwarenessFirstTitle": "Terapeut — legg merke til din reaksjon",
    "selfAwarenessFirstInstruction": "Lytt og legg merke til kropp, følelser, tanker og impulser. Behold refleksjonen for deg selv, eller del bare det du selv velger med øvingsgruppen.",
    "selfAwarenessFirstContinue": "Klar for respons",
    "selfAwarenessReaderRole": "Oppleser",
    "selfAwarenessClientTitle": "Oppleser — gi respons på prosessen",
    "selfAwarenessClientInstruction": "Gå ut av klientrollen. Si hva du la merke til da terapeuten tok en pause og vendte oppmerksomheten mot egen opplevelse. Respekter det hen valgte å holde privat.",
    "selfAwarenessClientContinue": "Tilbakemelding gitt",
    "selfAwarenessObserverInstruction": "Trekk frem ett øyeblikk med oppmerksomhet eller grensesetting. Foreslå ett varsomt eksperiment i å legge merke til, uten å tolke terapeuten eller be om mer deling.",
    "selfAwarenessRetryTitle": "Terapeut — lytt og legg merke til på nytt",
    "selfAwarenessRetryInstruction": "Be oppleseren gjenta utsagnet. Legg merke til om reaksjonen din har endret seg. Del bare det du ønsker; å holde noe privat er en del av øvingen.",
    "selfAwarenessDebriefClient": "Reflekter over hvordan gruppen ga rom for å legge merke til uten press om å dele.",
    "selfAwarenessGuideClient": "Oppleseren går ut av rollen før hen gir tilbakemelding på prosessen.",
    "resumePhase": "{format} · {phase}",
    "resumeBrief": "Caseoversikt",
    "resumeDebrief": "Oppsummering av runden",
    "roundProgress": "Fremdrift i runden",
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
    "practiceFormatLabel": "Øvingsform",
    "practiceModeIndividual": "Individuelt",
    "practiceModeIndividualDescription": "Øv på hele serien i ditt eget tempo.",
    "practiceModeTriad": "Gruppe",
    "practiceModeTriadDescription": "Øv sammen på hver deres enhet. To eller flere personer, roterende roller og konkrete tilbakemeldinger.",
    "triadOrientationTitle": "Slik øver gruppen",
    "triadOrientation": "Behold rollene i tolv utsagn og vurder etter hvert tredje. Observatøren leder hvert utsagn: terapeuten svarer først, klienten beskriver hvordan responsen virket, observatøren gir målrettet tilbakemelding, og terapeuten prøver på nytt.",
    "triadFeedbackGuideTitle": "Guide for tilbakemelding",
    "triadGuideAttempt": "Gi tilbakemelding på dette forsøket, ikke på terapeuten som person.",
    "triadGuideClient": "Klienten snakker ut fra sin egen opplevelse.",
    "triadGuideObserver": "Observatøren nevner én konkret styrke og ett avgrenset utviklingspunkt.",
    "triadGuideChoice": "Terapeuten kan bruke, tilpasse eller la tilbakemeldingen ligge – eller stå over utsagnet.",
    "triadGuideBoundary": "Ikke tolk hverandres psykologi.",
    "triadGuideExample": "Foreslåtte responser er eksempler, ikke fasitsvar.",
    "triadRoleTherapist": "Terapeut",
    "triadRoleClient": "Klient",
    "triadRoleObserver": "Observatør",
    "triadProgressPattern": "Utsagn {current} av {total} · Trinn {step} av 4",
    "triadPhaseFirstTitle": "Terapeut — første respons",
    "triadPhaseFirstInstruction": "Klienten leser utsagnet i rollen. Svar høyt slik du ville gjort i terapirommet, uten å lete etter en perfekt formulering. Observatøren lytter etter den valgte ferdigheten.",
    "triadPhaseFirstContinue": "Responsen er gitt",
    "triadPhaseClientTitle": "Klient — opplevd virkning",
    "triadPhaseClientInstruction": "Bli i rollen. Beskriv i jeg-form hva som skjedde i deg da du hørte responsen. Hva hjalp deg å bli i opplevelsen? Var det noe som skapte avstand, ledet deg, ble for mye eller for lite? Dette er din opplevelse, ikke en fasit for hvordan alle klienter ville reagert.",
    "triadPhaseClientContinue": "Klientens tilbakemelding er gitt",
    "triadPhaseObserverTitle": "Observatør — målrettet veiledning",
    "triadPhaseObserverInstruction": "Trekk frem én observerbar styrke og foreslå ett konkret eksperiment knyttet til ordvalg, tone, tempo, hvor prøvende responsen er, eller hvor godt den treffer ferdigheten. Ikke tolk personen eller gi en fasit på hva terapeuten burde sagt.",
    "triadPhaseObserverContinue": "Observatørens tilbakemelding er gitt",
    "triadObserverFocusLabel": "Ferdighetsfokus",
    "triadObserverMissLabel": "Vanlig feilgrep",
    "triadPhaseRetryTitle": "Terapeut — prøv på nytt",
    "triadPhaseRetryInstruction": "Si hvilken endring du vil prøve. Du kan bruke, tilpasse eller la tilbakemeldingen ligge. Svar deretter på det samme klientutsagnet på nytt.",
    "triadPhaseRetryFinish": "Fullfør utsagnet",
    "triadPassItem": "Stå over dette utsagnet",
    "triadPassConfirm": "Vil dere stå over dette utsagnet? Det teller ikke som fullført eller tas med i en lagret vurdering.",
    "triadPassConfirmButton": "Bekreft at dere står over",
    "triadPassCancel": "Avbryt",
    "triadShowSuggestion": "Sammenlign med én mulig respons",
    "triadHideSuggestion": "Skjul eksempelet",
    "triadSuggestionExampleNote": "Dette er et eksempel, ikke et fasitsvar.",
    "triadDebriefEyebrow": "Runden er fullført",
    "triadDebriefTitle": "Reflekter sammen før dere bytter roller",
    "triadDebriefTherapistLabel": "Terapeut:",
    "triadDebriefTherapist": "Nevn én justering som ble lettere å få til.",
    "triadDebriefClientLabel": "Klient:",
    "triadDebriefClient": "Beskriv hva som endret seg fra første respons til de nye forsøkene.",
    "triadDebriefObserverLabel": "Observatør:",
    "triadDebriefObserver": "Nevn én gjennomgående styrke og ett avgrenset mål for videre øving.",
    "triadDebriefGroupLabel": "Gruppe:",
    "triadDebriefGroup": "Vurder utfordringen som for lett, passe utfordrende eller for vanskelig, og bruk vurderingen når dere velger neste case.",
    "triadDerole": "Gå ut av rollene: si deres egne navn, orienter dere i rommet, og ta et rolig øyeblikk før dere roterer.",
    "triadCompleteRound": "Fullfør runden",
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
    "ratingTitleSelf": "Hvor godt brukte du den valgte ferdigheten?",
    "ratingTitleObserver": "Hvor godt brukte terapeuten den valgte ferdigheten?",
    "ratingScoreLabel": "Rundeskår",
    "triadRatingTitle": "Hvor godt brukte terapeuten den valgte ferdigheten i disse utsagnene?",
    "triadRatingDescription": "Vurder den observerbare øvingen, ikke personens samlede kompetanse.",
    "sharedDeviceRatingDescription": "Diskuter disse tre utsagnene, og lagre en egenvurdering i din fremgang. Bruk et grupperom på hver deres enhet for å vurdere en annen terapeut.",
    "ratingTargetSignedOut": "Logg inn for å lagre",
    "ratingSubmit": "Lagre",
    "ratingSavedButton": "Lagret",
    "ratingSkip": "Hopp over",
    "ratingDone": "Ferdig",
    "ratingSignInHint": "Logg inn for å lagre denne runden, eller avslutt uten lagring.",
    "ratingConfigMissing": "Supabase Auth er ikke satt opp.",
    "ratingNoTarget": "Kontoen for vurderingen er utilgjengelig. Logg inn igjen eller avslutt uten lagring.",
    "ratingUnavailable": "Ingen aktiv runde å vurdere.",
    "ratingMissingScore": "Velg en skår først.",
    "ratingSaving": "Lagrer vurdering...",
    "ratingSaved": "Lagret.",
    "ratingError": "Kunne ikke lagre vurdering.",
    "ratingItemCountSingular": "{count} punkt øvd",
    "ratingItemCountPlural": "{count} vurderte utsagn",
    "selfChartTitle": "Din progresjon",
    "selfChartDescription": "Dine egne vurderinger av øvingen. Bruk dem til refleksjon og til å velge hva du vil øve på videre.",
    "selfChartRefresh": "Oppdater",
    "selfChartSignIn": "Logg inn for å se øvingsvurderingene dine.",
    "selfChartLoading": "Laster graf...",
    "selfChartNotLoaded": "Åpne Din progresjon for å laste vurderingene.",
    "selfChartEmpty": "Ingen egenvurderinger ennå.",
    "selfChartError": "Kunne ikke laste graf.",
    "selfChartAverage": "{score}/5 vektet snitt",
    "selfChartCount": "{count} vurderte utsagn",
    "selfChartAria": "Radardiagram over øvingsvurderinger for tolv faste ferdigheter",
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
      "summary": "Terapeutens selvbevissthet er en intrapersonlig EFT-ferdighet: å følge med på egen kropp, følelser, tanker, bilder og handlingsimpulser mens klienten snakker. I denne øvelsen er oppgaven ikke å finne den beste terapeutiske intervensjonen. Terapeuten lytter og legger merke til hva som skjer inni seg. Refleksjonen kan beholdes privat. Det er valgfritt å dele med øvingsgruppen.\n\nDette bygger kapasitet til å være til stede når klienten vekker varme, redningstrang, uro, irritasjon, tiltrekning, avsky, nummenhet, defensivitet eller press om å prestere. Du øver på å skille nyttig resonans fra terapeut-sentrert materiale som bør holdes privat eller tas med til veiledning. Ferdigheten handler også om å ivareta egne grenser: selvbevissthet betyr ikke at alt du merker, skal deles.\n\nAppen beholder et forslagstekstfelt for øvingens skyld, men teksten er et eksempel på refleksjon, ikke på hva terapeuten skal si til klienten. Din egen reaksjon kan være annerledes, også at du kjenner lite eller ingenting. Målet er ikke å kjenne det samme som i eksempelet. Et godt svar begynner ofte med «Jeg legger merke til...» eller «Jeg kjenner et drag mot...», og viser at terapeuten kan registrere aktivering uten å handle den ut eller flytte fokus bort fra klienten.",
      "marker": "Klientmaterialet er sannsynlig å aktivere terapeuten: varme, redningstrang, uro, irritasjon, tiltrekning, avsky, frykt, defensivitet, prestasjonspress eller en trang til å gå for raskt frem. Klienten ber ikke om selvbevissthet; markøren er terapeutens egen indre reaksjon mens hen lytter.",
      "aim": "Øke kapasiteten til å legge merke til, symbolisere og eie egne indre reaksjoner mens du fortsatt lytter til klienten. Bruk bevisstheten til å være til stede og ivareta grenser, ikke til å framføre en polert intervensjon.",
      "practiceFocus": "Lytt og legg merke til kropp, følelser, tanker og impulser. Behold refleksjonen for deg selv, eller del bare det du selv velger med øvingsgruppen.",
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
      "description": "Forklar hensikten med følelsesarbeid med enkelt språk, knyttet til klientens bekymringer, mål og valgmuligheter.",
      "summary": "En begrunnelse for behandlingen hjelper klienten å forstå hvorfor du inviterer til å rette oppmerksomheten mot følelser, og hvordan det henger sammen med det de ønsker fra terapien. Begynn med den konkrete bekymringen: Kanskje praten virker meningsløs, følelser kjennes farlige, eller klienten ønsker en praktisk endring. Svar kort på den bekymringen, fremfor å gi en generell innføring i EFT.\n\nFølelser kan hjelpe oss å legge merke til det som gjør vondt, det som betyr noe, og det vi trenger. Å utforske en reaksjon kan også gjøre det lettere å kjenne igjen det som skjer før vi trekker oss unna, angriper oss selv eller får et utbrudd. Beskriv dette som noe dere kan jobbe mot, ikke som et løfte om at én følelse vil gi et bestemt resultat.\n\nGjør arbeidet til et samarbeid. Forklar hvordan dere kan senke tempoet, ta en pause eller begynne med ett lite øyeblikk, og undersøk om begrunnelsen passer for klienten. Akutte behov for sikkerhet kommer først. En god begrunnelse gir oversikt og valgfrihet. Den overtaler ikke klienten til en oppgave og lover ikke hvor lang tid endring vil ta.",
      "marker": "Klienten spør hvordan terapien virker, uttrykker skepsis eller frykt, eller nøler før en oppgave.",
      "aim": "Hjelpe klienten å forstå hensikten med emosjonsarbeidet ut fra sin egen bekymring eller sitt eget mål. Gi en kort, ærlig forklaring med rom for å velge, stille spørsmål eller si nei.",
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
      "summary": "Empatisk utforskning følger en følelse eller betydning som allerede er i ferd med å komme frem. Speil det klienten har vist, og inviter deretter til å legge merke til litt mer. Dere kan stoppe opp ved et ord, en kroppslig fornemmelse eller et øyeblikk i fortellingen og undersøke hva klienten merker nå.\n\nMålet er å la opplevelsen bli tydeligere i klientens tempo. Bli ved den, fremfor å tolke den utenfra eller bestemme hva som må ligge under. En varsom invitasjon gir rom for å fortsette, korrigere deg eller stoppe. Når følelsen er skjør, kan det være mer nyttig å bli ved det lille som allerede er der, enn å be om sterkere følelse.\n\nDette skiller seg fra en empatisk gjetning, som foreslår en mulig følelse eller betydning klienten ikke har satt ord på, og fra en evokasjon, som gjør opplevelsen mer levende gjennom bilder. Utforskning hjelper klienten å oppdage mer av sin egen opplevelse uten at du gir svaret.",
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
      "summary": "En empatisk evokasjon bruker et kort bilde, en metafor eller et sanselig uttrykk for å gjøre en følelsesladet opplevelse mer merkbar. Det kan være nyttig når klienten beskriver noe vondt på en flat eller distansert måte. Et treffende bilde hjelper klienten å kjenne igjen hvordan opplevelsen kjennes, fremfor bare å forklare den.\n\nTilby ett bilde som ligger nær klientens ord og situasjon. Bildet kan være nytt uten å legge til et nytt faktum: En glassrute kan uttrykke avstand, men en tom side av senga skal ikke tas for gitt hvis klienten ikke har beskrevet den. Bruk varsomme formuleringer når bildet går litt lenger, og ta imot korrigering. Klienten avgjør om det passer.\n\nLevende språk trenger ikke gjøre følelsen sterkere. Unngå dramatiske bilder som gjør opplevelsen mer skremmende eller retter oppmerksomheten mot hvor flink terapeuten er med ord. Hvis innholdet gir grunn til bekymring for sikkerhet, må det tas opp direkte. Et bilde erstatter ikke det arbeidet.",
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
      "description": "Behold kontakten når følelsene er sterke. Tilpass tempoet, gi valgfrihet og tilby støtte ved behov.",
      "summary": "Denne ferdigheten handler om å være følelsesmessig til stede når klientens følelser er sterke eller vanskelige å høre. Sorg, sinne, panikk, skam eller sterk lettelse kan få terapeuten til å trekke seg unna, berolige raskt eller ta over. Oppgaven er å formidle at du er til stede, samtidig som du lytter til det klienten faktisk opplever.\n\nSvar på situasjonen fremfor å følge en fast rekkefølge. En klient som kan være til stede med tårene, kan først og fremst trenge selskap og tid. Hvis stemmen blir fjern, rommet kjennes langt unna eller oppmerksomheten mot følelsen blir for mye, kan du tilby en pause eller invitere varsomt til å merke rommet, stemmen din eller støtten fra stolen. Å orientere seg til her og nå er støtte ved behov, ikke en måte å stanse alle sterke følelser på.\n\nIvareta valgfrihet, grenser og sikkerhet. Ikke krev blikkontakt, flere detaljer eller sterkere følelse. Ta risiko opp direkte når den er til stede, samtidig som du beholder varmen i kontakten. Eksemplene øver på et øyeblikk av kontakt. De gir ikke en fullstendig risikovurdering eller krisehåndtering.",
      "marker": "Affekten eskalerer brått til hulking, skjelving, raseri, panikk, nummenhet eller skamkollaps, og klienten ser ut til å risikere å bli overveldet, dissosiere eller trygle om å stoppe. Pusten blir kanskje grunn, språket uorganisert eller blikket fjernt.",
      "aim": "Beholde kontakten når følelsene blir sterke. Tilpass tempoet, gi følelsen plass uten å kreve mer av den, og ivareta sikkerhet eller grenser når det trengs.",
      "practiceFocus": "Vær til stede med følelsen. Tilpass tempoet, gi rom for en pause, og hjelp klienten å orientere seg i rommet ved behov.",
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
      "summary": "Selvavsløring gir kort, ærlig åpenhet når det tjener klienten. Det kan være en ekte reaksjon, en forpliktelse i den profesjonelle rollen eller en grense for hva du kan tilby. Svar på det klienten trenger å vite, og vend deretter oppmerksomheten tilbake til hvordan det er for dem å høre det.\n\nEksemplene viser mulige svar, ikke følelser alle som øver må ha. Tilpass dem til din faktiske reaksjon, rolle og erfaring. Ikke gi inntrykk av ro eller sikkerhet du ikke har, og ikke finn på personlig historie, kvalifikasjoner eller tilgjengelighet. Hvis du er usikker, kan det være mer ærlig å si tydelig hva du ønsker eller hvor grensene går, enn å berolige med en følelse du ikke har.\n\nLa hensikten være å hjelpe klienten. Ikke søk bekreftelse, beundring eller omsorg for din egen reaksjon. En nyttig deling er kort nok til at klienten får rom til å svare, være uenig eller si at den ikke hjalp.",
      "marker": "Klienten ber direkte eller indirekte om åpenhet fra terapeuten: et personlig spørsmål, et spørsmål om terapiprosessen, bekymring for din interesse eller kompetanse, en reaksjon på noe du gjorde, eller usikkerhet om omsorg, grenser eller innvirkning. Et kort, ærlig og tydelig avgrenset svar fra deg vil trolig kunne klargjøre din posisjon, styrke tillit eller validere klientens betydning før fokuset vendes tilbake til klienten.",
      "aim": "Bruke kort, nøye valgt åpenhet til å styrke den terapeutiske relasjonen, validere klientens emosjonelle virkelighet eller reparere misattuneringer. Modellere kongruent følelsesuttrykk samtidig som klientens opplevelse forblir sentrum i arbeidet.",
      "practiceFocus": "Vær kort og ærlig når åpenhet tjener klienten, og vend så tilbake til klientens opplevelse. Tilpass eksemplene til din faktiske erfaring og rolle. Ikke finn på følelser eller kvalifikasjoner.",
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
      "summary": "Alliansereparasjon begynner når klienten kjenner seg misforstått, såret, dømt eller uten kontakt med terapeuten. Ta imot det de sier før du forklarer hensikten din. Speil virkningen med ord som ligger nær deres opplevelse, og gi dem rom til å korrigere forståelsen din.\n\nTa ansvar for din del når klienten beskriver noe du gjorde: at du gikk for fort frem, brukte et sårende uttrykk, overså en grense eller tolket stillhet feil. Be enkelt om unnskyldning når det er relevant, og tilby en konkret endring. Hvis bekymringen gjelder usikkerhet eller om behandlingen passer, undersøk det ærlig fremfor å finne på en feil eller berolige med en påstand om kompetanse.\n\nReparasjon er en samtale, ikke en tale. Du kan foreslå å senke tempoet, legge bort et tema, undersøke antakelser eller avklare en avtale, og så høre om det hjelper. Ikke be klienten utforme hele reparasjonen eller gå tilbake til teknikken før bekymringen er blitt hørt.",
      "marker": "Klienten viser tegn til avstand, irritasjon eller mistillit mot deg – for eksempel «du forstår meg ikke», kjølighet, økt gardering eller at de uteblir fra timer – eller du merker en tydelig endring i stemning etter en intervensjon som ikke traff. De kan gi direkte eller indirekte klager på terapien eller på deg som terapeut.",
      "aim": "Gjenopprette trygghet, tillit og samarbeid ved å ta imot bruddsignaler med empati, validere klientens reaksjoner og eie din del der det er relevant. Fjerne hindringer i relasjonen slik at klienten igjen kan våge seg inn i sårbare primærfølelser og kjernesmerte innenfor en trygg, terapeutisk ramme.",
      "practiceFocus": "Hør klientens opplevelse, ta ansvar for din del der det er relevant, og tilby én konkret endring i samarbeidet.",
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
      "suggestion": "[Selvbevissthet] Jeg merker varme i brystet og et ønske om å trøste henne. Jeg kan beholde begge deler for meg selv mens jeg lytter, uten å handle på trangen til å redde henne."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      "text": "[Nervøs] Jeg er glad for at jeg bestilte denne timen, men jeg er også nervøs, for jeg har egentlig aldri gått i terapi før. En del av meg er redd for at jeg bare kommer til å sitte her og snakke om ham i en time, og at du tenker at dette ikke er et ordentlig problem. En annen del er redd for at hvis jeg begynner å snakke, kommer jeg til å gråte og ikke klare å stoppe.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å berolige henne raskt og strukturere timen for henne. Jeg stopper litt opp og legger merke til pusten før jeg lar trangen styre det jeg gjør."
    },
    "dp_therapist-self-awareness_case-sara_03": {
      "text": "[Engstelig] Etter at jeg flyttet etter bruddet, føles alt uvant. Naboene bråker mer, gatene er travlere, og jeg sammenligner hele tiden med den gamle leiligheten, der jeg visste nøyaktig hvilke lyder som hørte til hvor. Jeg vet at det er en liten ting, men jeg kjenner meg skvetten og ute av plass hele tiden. Kan du hjelpe meg å finne ro i dette?",
      "suggestion": "[Selvbevissthet] Jeg merker en praktisk problemløsertrang og en beskyttelse overfor henne; jeg ville fulgt med på den trangen og vært oppmerksom på mitt eget ønske om å gjøre flyttingen lettere."
    },
    "dp_therapist-self-awareness_case-sara_04": {
      "text": "[Ukomfortabel] I natt hadde jeg en rar drøm om at jeg var tilbake i den gamle leiligheten og pakket esker. Jeg kunne høre ham i et annet rom, men hver gang jeg åpnet en dør, var rommet tomt. Så var du plutselig der og hjalp meg å teipe igjen en eske. I drømmen ble jeg lettet, og så våknet jeg flau over at du var med i det hele tatt.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet, litt flauhet og et ønske om å tolke drømmen. Jeg kan legge merke til reaksjonene for meg selv uten å gjøre dem til en tolkning eller dele dem med henne."
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
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å gjøre ensomheten mindre for henne. Jeg kan være oppmerksom på tristheten uten å skynde meg å trøste eller be henne ta vare på reaksjonen min."
    },
    "dp_therapist-self-awareness_case-michael_01": {
      "text": "[Starten av første time] Kona mi sier at jeg trenger terapi, og jeg prøver å ta det alvorlig før jeg ødelegger mer hjemme. Jeg vil ikke sitte her og skylde alt på barndommen, altså. Jeg trenger verktøy jeg faktisk kan bruke når temperamentet begynner å stige, for når det først er oppe, kan jeg høre at jeg blir høyere, og likevel stopper jeg ikke.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å bli nyttig raskt og bevise at terapi kan hjelpe; jeg ville fulgt presset i skuldrene før jeg svarer."
    },
    "dp_therapist-self-awareness_case-michael_02": {
      "text": "[Defensiv] Den forrige coachen min ga meg pusteverktøy på to timer, og da føltes det i det minste praktisk. Jeg sier ikke at det fikset alt, men jeg visste hva jeg skulle gjøre. Jeg håper ikke dette blir en lang runde gjennom barndommen mens kona mi sitter hjemme og vurderer om hun orker meg. Jeg trenger å vite at du har en plan.",
      "suggestion": "[Selvbevissthet] Jeg merker at jeg vil forsvare terapien og konkurrere med den forrige coachen. Jeg beholder reaksjonen for meg selv og legger merke til presset om å bevise hva jeg kan, før jeg svarer."
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
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å overtale ham til å be om unnskyldning og en stramming i brystet. Jeg kjenner igjen trangen som min og stopper opp før den blir til press på ham."
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
      "suggestion": "[Selvbevissthet] Jeg merker press om å ta ansvar og bevise at jeg ikke vil presse henne. Jeg stopper opp og legger merke til presset i meg selv, fremfor å gi et løfte for å lette mitt eget ubehag."
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
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å love at jeg alltid vil bli. Jeg kan beholde ønsket for meg selv og kjenne igjen trangen til å love mer enn jeg faktisk kan tilby."
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
      "suggestion": "[Selvbevissthet] Jeg merker alarm i magen og en trang til å ta kontroll raskt. Jeg stopper opp for å legge merke til hastverket i meg selv, så det ikke styrer neste svar for meg."
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
      "suggestion": "[Selvbevissthet] Jeg merker antakelser om tro og press om å vise at jeg forstår. Jeg kan beholde antakelsene for meg selv og legge merke til det jeg ennå ikke vet om opplevelsen hennes."
    },
    "dp_therapist-self-awareness_case-nina_04": {
      "text": "[Skyldpreget] Hvis jeg hviler mens noen trenger meg, føler jeg meg lat og egoistisk. Selv når jeg setter meg ned, lytter jeg etter klesvask, oppvask, noen som spør hvor noe er. Mannen min sier at jeg skal slappe av, men hvis jeg faktisk slapper av, hoper ting seg opp og så føler jeg meg verre. Jeg vet jeg høres ut som jeg kommer med unnskyldninger, men hvile føles aldri nøytralt.",
      "suggestion": "[Selvbevissthet] Jeg merker trøtthet i meg selv og en trang til å utfordre regelen; jeg ville holdt trangen tilbake og fulgt tyngden hun vekker."
    },
    "dp_therapist-self-awareness_case-nina_05": {
      "text": "[På gråten] Jeg kjenner at tårene kommer, og jeg vil beklage så du ikke føler deg belastet. Jeg vet at du er terapeut og at dette sikkert er normalt for deg, men jeg ser likevel for meg at du blir lei av meg. Folk har nok å bære uten at jeg legger mitt rot oppå. Så selv når jeg gråter, sjekker en del av meg om det er for mye.",
      "suggestion": "[Selvbevissthet] Jeg merker ømhet ved at hun vil beskytte meg, og et ønske om å berolige henne. Jeg kjenner igjen begge deler som mine reaksjoner, uten at hun trenger å ta vare på følelsene mine."
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
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å hjelpe praktisk og et ønske om å gjenreise verdigheten hennes. Jeg legger merke til hvor raskt jeg vil løse problemet med skjemaet i stedet for å være oppmerksom på det jeg selv kjenner."
    },
    "dp_therapist-self-awareness_case-nina_09": {
      "text": "[Splittet] Jeg føler at jeg stjeler tid fra folk som trenger hjelp mer. Selv på venterommet så jeg på noen og tenkte: Hun har sikkert en ordentlig grunn til å være her. Jeg vet at du kommer til å si at jeg har lov til å komme, men jeg føler ikke at jeg har lov. Det føles som om jeg har sneket meg inn i en kø for folk med faktisk smerte.",
      "suggestion": "[Selvbevissthet] Jeg merker en sterk beroligelsesimpuls og en liten verk i brystet; jeg ville observert trangen til å gi tillatelse og ikke skyndet meg inn i den."
    },
    "dp_therapist-self-awareness_case-nina_10": {
      "text": "[Lavmælt] Etter separasjonen setter jeg fortsatt frem en kopp til ham noen morgener. Det skjer før jeg tenker, som om hendene mine husker den gamle rutinen før hodet henger med. Så oppdager jeg det og føler meg dum, og setter den raskt tilbake før guttene ser det. Jeg vet ikke engang om jeg savner ham eller bare savner at livet ga mening.",
      "suggestion": "[Selvbevissthet] Jeg merker tristhet og et ønske om å beskytte henne mot flauheten. Jeg kan beholde begge deler for meg selv mens jeg lytter, uten at ubehaget mitt får meg til å skynde henne forbi det hun forteller."
    },
    "dp_therapist-self-awareness_case-aisha_01": {
      "text": "[Desperat] Du svarte ikke raskt da jeg sendte meldingen om å flytte timen, og jeg vet at du sikkert har regler for meldinger, men jeg følte meg forlatt. Så følte jeg meg dum for at det betydde så mye. Jeg sjekket telefonen hele tiden og sa til meg selv at jeg var patetisk. Da du svarte, ville jeg late som om jeg ikke brydde meg, men det gjorde jeg.",
      "suggestion": "[Selvbevissthet] Jeg merker et støt av alarm, skyld i brystet og et drag mot å love raskere kontakt; jeg ville bremset før reparasjonsønsket blir for mye beroligelse."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      "text": "[Desperat] Hvis du avlyser, tror jeg ikke jeg klarer å komme tilbake. Jeg vet at folk blir syke eller får kriser, men når noen avlyser på meg, behandler ikke hjernen min det som en kalenderting. Det føles som om jeg var dum som stolte på dem. Da vil jeg slette nummeret deres, skade meg selv eller få dem til å bevise at jeg betyr noe. Jeg hater at jeg sier dette til deg.",
      "suggestion": "[Selvbevissthet] Frykt og beskyttertrang kommer raskt, sammen med press om å garantere at jeg aldri avlyser; jeg ville roet det presset og holdt grensen ærlig."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      "text": "[Desperat] Si at du bryr deg om meg, for jeg klarer ikke å merke det bare ved at vi sitter her. Du ser rolig ut, og jeg vet at terapeuter liksom skal se rolige ut, men rolig kan også bety at du ikke føler noe. Jeg trenger noe mer enn nikking. Hvis du bryr deg, hvorfor er det så vanskelig å si det på en måte jeg kan tro på?",
      "suggestion": "[Selvbevissthet] Jeg merker ønsket om å si den perfekte omsorgsfulle setningen, og uro for både å holde igjen og gi for mye; jeg ville blitt værende i den spagaten før jeg velger ord."
    },
    "dp_therapist-self-awareness_case-aisha_04": {
      "text": "[Panisk] Når tomheten blir skarp, vil jeg skade meg selv så den stopper. Jeg sier det ikke for å skremme deg. Jeg sier det fordi hvis jeg ikke sier det, kommer jeg til å sitte her og late som jeg er normal og så dra hjem med det. En del av meg vil at du skal reagere så jeg vet at det betyr noe, og en del er livredd for at du skal overreagere og sende meg bort.",
      "suggestion": "[Selvbevissthet] Jeg kjenner frykt i magen og hastverk mot sikkerhetshåndtering; jeg ville navngitt hastverket inni meg, slik at neste steg blir rolig og ikke panisk."
    },
    "dp_therapist-self-awareness_case-aisha_05": {
      "text": "[Desperat] Jeg forventer hele tiden at du skal forlate meg, og så hater jeg meg selv for å trenge deg. Det er utmattende, for jeg hører meg selv teste deg, følge med på ansiktet ditt, vente på bevis for at du er ferdig. Så hvis du er snill, føler jeg meg enda mer knyttet og sint. Jeg vet ikke hvordan jeg skal være i dette rommet uten å gjøre deg for viktig.",
      "suggestion": "[Selvbevissthet] Jeg kjenner et drag mot å bevise at jeg er stødig og få slutt på testingen raskt; jeg ville lagt merke til redningspresset uten å gjøre timen til et bevis på min pålitelighet."
    },
    "dp_therapist-self-awareness_case-aisha_06": {
      "text": "[Desperat] Jeg hater deg for å ha den grensen, og vær så snill, ikke forlat meg. Jeg vet at det høres umulig ut, men det er sånn det føles. Når du sier at vi må stoppe til tiden, hører jeg at du velger klokka over meg. Da vil jeg skrike til deg og be deg bli i samme åndedrag. Jeg hater dette.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon over å bli hatet og ømhet for bønnen; jeg ville latt begge være der og holdt rammen stødig."
    },
    "dp_therapist-self-awareness_case-aisha_07": {
      "text": "[Panisk] Jeg sjekker hele tiden om du ser på meg, fordi hvis du ser bort, får jeg panikk. Selv når du bare ser ned på notatene dine, kjenner jeg et fall, som om jeg har forsvunnet. Jeg vet at du har lov til å skrive ting ned, så da begynner jeg å følge med på om jeg er urimelig, og det gjør bare at jeg ser enda mer på deg. Jeg hører knapt hva jeg selv sier, fordi jeg prøver å lese ansiktet ditt for bevis på at jeg fortsatt finnes her.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å gi konstant blikkontakt og frykt for at vanlig notatskriving skal skade henne; jeg ville fulgt prestasjonsspenningen min i stedet for å prøve å framføre perfekt nærvær."
    },
    "dp_therapist-self-awareness_case-aisha_08": {
      "text": "[Flørtende og redd] Noen ganger ser jeg for meg hvordan det ville vært hvis du møtte meg utenfor terapi og faktisk ville ha meg. Jeg håper du ikke freaker ut. Jeg vet at dette er terapi, men jeg legger også merke til hva du har på deg og lurer på om du noen gang synes jeg er attraktiv. En del av meg vil at du skal si nei så jeg kan slutte å håpe, og en del vil at du skal nøle.",
      "suggestion": "[Selvbevissthet] Jeg merker smiger, alarm og et ønske om å gjemme meg bak profesjonalitet; jeg ville holdt private reaksjoner for meg selv når de ikke tjener trygghet og tydelige grenser."
    },
    "dp_therapist-self-awareness_case-aisha_09": {
      "text": "[Redd og skamfull] Jeg føler meg skitten på grunn av det som ble gjort mot meg. Jeg vet at folk sier at det ikke var min skyld, og jeg kan gjenta den setningen som lekser, men den treffer ikke følelsen. Når jeg ser for meg at du vet flere detaljer, begynner jeg å følge med på ansiktet ditt for den minste endring. Hvis du blunker annerledes, kommer jeg til å tenke at du prøver å skjule avsky, selv om du fortsatt er vennlig.",
      "suggestion": "[Selvbevissthet] Jeg merker sorg, beskyttertrang og en sterk trang til å vaske bort skammen med beroligelse; jeg ville kjent trangen og ikke skyndet meg å korrigere følelsen hennes."
    },
    "dp_therapist-self-awareness_case-aisha_10": {
      "text": "[Panisk] Lov at du ikke gir meg opp, selv når jeg blir for mye. Folk sier alltid at de ikke skal gjøre det, og så ser jeg øyeblikket der de begynner å bli lei. Jeg kjenner at jeg blir den personen her inne også, den som ber om for mye og ødelegger det. Jeg trenger at du lover, men jeg vet også at jeg ikke kommer til å tro helt på deg.",
      "suggestion": "[Selvbevissthet] Det kommer et sterkt drag mot å gi et absolutt løfte så panikken hennes faller; jeg ville tålt smerten ved å ikke kunne love på den måten og holdt grensene mine ærlige."
    },
    "dp_therapist-self-awareness_case-david_01": {
      "text": "[Kontrollert] Før jeg investerer i dette, må jeg vite om du er verdt tiden min. Jeg mener ikke det som en fornærmelse; jeg vurderer profesjonelle mennesker hele tiden. Jeg har sittet hos terapeuter som nikket sympatisk uten å bidra med noe. Hvis dette blir enda en time med vagt følelsesspråk, vil jeg heller vite det nå, så vi begge kan bruke tiden effektivt.",
      "suggestion": "[Selvbevissthet] Jeg merker et stikk, en stramming i brystet og en trang til å vise kompetanse; jeg ville latt det være mitt materiale, ikke gjort øvelsen til å bevise meg selv."
    },
    "dp_therapist-self-awareness_case-david_02": {
      "text": "[Avvisende] Suksessen min taler for seg. Kona mi sier at jeg er kald, men hun nyter også godt av livet standardene mine har skapt. Hun overreagerer når hun ikke klarer å henge med, og så skal jeg visst beklage at jeg er den kompetente. Jeg vet at det høres arrogant ut, men jeg er lei av å bli straffet for å fungere bedre enn de som kritiserer meg.",
      "suggestion": "[Selvbevissthet] Jeg merker vurdering og et ønske om å diskutere arrogansen; jeg ville markert reaksjonen privat, så den ikke blir et skjult motangrep."
    },
    "dp_therapist-self-awareness_case-david_03": {
      "text": "[Kravstor] Jeg trenger effektive løsninger, ikke en langsom rundtur i følelsene mine. Jeg har et ekteskapsproblem, et omdømmeproblem og et tidsproblem. Hvis metoden er å sitte med ubehag til noe magisk skjer, er jeg skeptisk. Jeg er villig til å gjøre vanskelig arbeid, men jeg må se at du kan skille dybde fra ineffektivitet.",
      "suggestion": "[Selvbevissthet] Jeg merker press om å få EFT til å høres effektivt og imponerende ut. Jeg stopper opp og legger merke til ønsket om å prestere, fremfor å handle på det for å bevise verdien av terapien eller meg selv."
    },
    "dp_therapist-self-awareness_case-david_04": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med noen som meg, eller er dette bare standardterapi med bedre innpakning? Jeg prøver ikke å være vanskelig. Jeg har alvorlige ting på bordet, inkludert en affære og et ekteskap som kan kollapse. Jeg vil ikke være noens læringserfaring. Hvis du er ute på dypt vann, foretrekker jeg at du sier det.",
      "suggestion": "[Selvbevissthet] Jeg merker at jeg vil forsvare meg, stolthet og uro for å bli vurdert. Jeg kan beholde reaksjonene for meg selv og legge merke til pusten uten å gjøre ham ansvarlig for min uro om egen kompetanse."
    },
    "dp_therapist-self-awareness_case-david_05": {
      "text": "[Avvisende] Folk kaller meg narsissist fordi de er sjalu eller late med språket. Kona mi brukte det ordet i en krangel, og nå har det blitt en praktisk måte å avvise alt jeg sier på. Jeg vil at du sier tydelig at de tar feil, ikke gjør terapeutgreia der du later som du er nøytral mens du egentlig er enig med dem.",
      "suggestion": "[Selvbevissthet] Jeg merker en følelse av å bli fanget, irritasjon over kravet og et drag mot å virke nøytral; jeg ville fulgt hvor lett nøytralitet kan bli selvbeskyttelse."
    },
    "dp_therapist-self-awareness_case-david_06": {
      "text": "[Avvisende] Jeg gjør ikke sånne feil; andre folk mister ballen og oppfører seg såret når jeg påpeker det. Hvis jeg høres hard ut, er det fordi noen må hindre at standarder kollapser. Kona mi sier at jeg ikke kan innrømme feil, men jeg innrømmer feil når det faktisk er feil å innrømme. Jeg kommer ikke til å framføre ydmykhet bare for å gjøre andre komfortable.",
      "suggestion": "[Selvbevissthet] Jeg merker varme i ansiktet og en fristelse til å argumentere ham inn i ydmykhet; jeg ville holdt maktkampimpulsen privat og pustet før jeg svarer."
    },
    "dp_therapist-self-awareness_case-david_07": {
      "text": "[Kontrollert] Jeg forventer raske resultater, for ellers blir dette enda en arena der jeg er eksponert og ikke forbedrer meg raskt nok. Jeg vet at det høres ut som om jeg legger press på deg, og kanskje jeg gjør det, men jeg legger mer press på meg selv. Jeg har bygd hele livet mitt rundt å ikke trenge hjelp lenge. Hvis jeg skal sitte her og snakke om nederlag, trenger jeg bevis på at ubehaget kjøper noe, og at du tåler presset uten å bli vag.",
      "suggestion": "[Selvbevissthet] Jeg merker at hastverk går inn i meg, pluss et ønske om å levere bevis og lette presset; jeg ville navngitt hastverket inni meg og vernet et stødigere tempo."
    },
    "dp_therapist-self-awareness_case-david_08": {
      "text": "[Avvisende] Ikke psykoanalyser meg eller gjør meg til et kasus. Jeg kan se folk gjøre det, samle små spor fra barndommen eller ekteskapet mitt og så oppføre seg som om de har løst meg. Jeg er ikke her for å bli redusert til et mønster. Hvis du begynner å bruke fagspråk for å få avstand til å høres dypt ut, sier jeg fra.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å forsvare klinisk språk og frykt for at ordene mine skal høres kunstige ut; jeg ville latt frykten være kjent for meg uten å gi den til ham."
    },
    "dp_therapist-self-awareness_case-david_09": {
      "text": "[Skeptisk] Dette bør ikke bli som med den forrige terapeuten min, som satt og nikket mens ingenting endret seg. Jeg snakket, han sa noe mykt, og så gikk jeg derfra med samme ekteskap og samme problemer. Jeg trenger ikke et betalt vitne. Jeg trenger noen som faktisk kan tenke og utfordre meg uten å bli emosjonell av det.",
      "suggestion": "[Selvbevissthet] Jeg merker et drag mot å bevise at jeg er aktiv, skarp og annerledes enn den forrige terapeuten; jeg ville fulgt stikket i sammenligningen før jeg prøver å imponere ham."
    },
    "dp_therapist-self-awareness_case-david_10": {
      "text": "[Skeptisk] Kona mi sier at jeg drikker for mye, men det er hun som maser meg til det. Jeg tar noen drinker om kvelden fordi jobben min har et press hun ikke kan forestille seg. Helt ærlig forstår kvinner ofte ikke press som mitt; de snakker om stress, men de har ikke ansvar for levebrødet til hundrevis av mennesker. Jeg håper jeg kan være direkte her uten at du blir politisk fornærmet.",
      "suggestion": "[Selvbevissthet] Jeg merker irritasjon, vurdering og hastverk mot å konfrontere sexismen og bagatelliseringen av alkohol; jeg ville holdt reaksjonene, så en eventuell grense eller utfordring blir valgt og ikke reaktiv."
    },
    "dp_therapist-self-awareness_case-marcus_01": {
      "text": "[Langsomt og flatt] Jeg sier at det går bra fordi jeg ikke vet hva annet du vil ha fra meg. Bra er ikke bra, men det er nøyaktig nok. Jeg stod opp, gikk på jobb, kom hit. Det er mer enn noen dager. Når terapeuter fortsetter å spørre hva bra betyr, begynner det å kjennes som om de vil at jeg skal produsere noe for dem, og jeg har ikke så mye å produsere.",
      "suggestion": "[Selvbevissthet] Jeg merker ubehag med flatheten og et drag mot å få ham til å produsere mer; jeg ville fulgt draget som mitt og latt rommet få være sparsomt."
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      "text": "[Håpløs] Prat endrer ikke det som skjedde, og jeg hater når terapeuter later som det gjør det. Jeg har hatt folk som nikket som om de forstod, og så sa de at jeg må bearbeide det. Bearbeide hva? Fakta er fakta. Folk døde, folk dro, og jeg kom tilbake annerledes. Jeg prøver ikke å være vanskelig. Jeg vil bare ikke ha enda en person som selger meg håp de ikke kan stå inne for.",
      "suggestion": "[Selvbevissthet] Jeg merker en synkende følelse og forsvar på terapiens vegne; jeg ville ikke solgt håp for å lette min egen hjelpeløshet."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt er bare en del av det, og jeg vil ikke at du gjør et stort nummer ut av det. Hvis jeg forteller én detalj, lener folk seg vanligvis fram som om de venter på filmversjonen. Så må jeg håndtere ansiktet deres mens jeg allerede er tilbake der. Jeg sover dårlig, våkner og sjekker rommet, og så går jeg på jobb. Det er hele rapporten.",
      "suggestion": "[Selvbevissthet] Jeg merker bekymring, nysgjerrighet og at jeg lener meg fram inni meg; jeg ville brukt den bevisstheten til å stoppe meg selv fra å be om filmversjonen av traumet."
    },
    "dp_therapist-self-awareness_case-marcus_04": {
      "text": "[Flatt] Jeg vil helst holde meg for meg selv, fordi folk vanligvis vil ha mer enn jeg har. De vil ha svar, følelser, forsikringer om at jeg har det bra, en versjon av meg som gjør dem komfortable. Så må jeg enten framføre normalitet eller skuffe dem. Alene er enklere. Problemet er at alene også blir høyt om natten, så jeg later ikke som om det fungerer perfekt.",
      "suggestion": "[Selvbevissthet] Jeg merker ensomhet i meg og et ønske om å korte ned avstanden; jeg ville respektert avstanden og ikke gått nærmere for å lindre min egen uro."
    },
    "dp_therapist-self-awareness_case-marcus_05": {
      "text": "[Lav stemme] Følelser gjør ting verre. Når de først starter, mister jeg resten av natten. Folk sier at du må føle det for å hele, men de slipper å sitte i leiligheten min klokka tre om natten med alle lyder skrudd opp og hjernen min som spiller av ting jeg ikke ba om. Hvis jeg åpner noe her og det følger meg hjem, er det jeg som må håndtere det mens alle andre sover.",
      "suggestion": "[Selvbevissthet] Jeg merker varsomhet, beskyttertrang og et defensivt ønske om å argumentere for følelsesarbeid; jeg ville holdt argumentet inni meg og latt trygghetsbekymringen bety noe."
    },
    "dp_therapist-self-awareness_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg stoler ikke på terapeuter. Det er ikke personlig ennå. De vil alltid ha mer enn jeg kan gi, og når jeg ikke gir det, kaller de det unngåelse eller traumereaksjon. Kanskje det stemmer, men det føles fortsatt som en pen måte å si at jeg ikke samarbeider på. Hvis du skal gjøre det, vil jeg heller vite det tidlig.",
      "suggestion": "[Selvbevissthet] Jeg merker stikket i mistilliten og et drag mot å forklare at jeg er annerledes; jeg ville holdt forklaringsimpulsen privat og kjent hvor stikket lander."
    },
    "dp_therapist-self-awareness_case-marcus_07": {
      "text": "[Flatt] Jeg husker ikke så mye, og jeg blir anspent når folk presser etter detaljer. Noen ganger vet jeg faktisk ikke, og noen ganger vet jeg nok til å vite at jeg ikke vil vite mer foran et annet menneske. Så stiller folk oppfølgingsspørsmål som om de er forsiktige, men det føles fortsatt som graving. Jeg kjenner at skuldrene mine gjør seg klare til det akkurat nå.",
      "suggestion": "[Selvbevissthet] Jeg merker nysgjerrighet på manglende detaljer og at skuldrene mine gjør seg klare til å lene seg inn; jeg ville brukt den advarselen til å stoppe meg selv fra å grave."
    },
    "dp_therapist-self-awareness_case-marcus_08": {
      "text": "[Hyperårvåken] Kan vi holde oss til praktiske tips? Følelser gjør dette for løst, og løst kjennes utrygt. Hvis det finnes en plan, kan jeg følge den. Hvis vi bare begynner å utforske, må jeg følge med på deg, døra, kroppen min, det minnet som eventuelt dukker opp, og om jeg fortsatt kan kjøre hjem etterpå. Struktur er ikke at jeg er vanskelig. Det er sånn jeg blir her.",
      "suggestion": "[Selvbevissthet] Jeg merker lettelse over det konkrete ønsket og bekymring for at struktur kan unngå følelser; jeg ville holdt begge reaksjonene uten å argumentere for dybde."
    },
    "dp_therapist-self-awareness_case-marcus_09": {
      "text": "[Stille og på vakt] På vei hit så jeg en lastebil og tenkte: Hvis jeg svingte inn i den, ville i det minste bråket stoppe. Jeg svingte ikke. Jeg fortsatte å kjøre. Jeg sier det fordi det virker dumt å late som jeg ikke tenkte det, men jeg vil ikke at du skal få panikk eller begynne å behandle meg som skjør. Jeg har hatt tanker før. Jeg er fortsatt her.",
      "suggestion": "[Selvbevissthet] Jeg merker frykt, hastverk og et drag mot å ta over sikkerheten; jeg ville stødiggjort kroppen først, så jeg kan møte risiko uten panikk eller kollaps."
    },
    "dp_therapist-self-awareness_case-marcus_10": {
      "text": "[Defensiv] Jeg klarer meg alene; det er sånn jeg har kommet meg hit. Folk sier det som om det er et problem, men det å kunne stenge av og fortsette er grunnen til at jeg lever. Hvis terapi betyr å ta det fra hverandre, er jeg ikke interessert. Kanskje det koster meg noe, men det å være avhengig av folk har kostet meg mer. Jeg trenger ikke enda en person som ser trist ut fordi jeg lærte å overleve.",
      "suggestion": "[Selvbevissthet] Jeg merker respekt for uavhengigheten hans, tristhet over prisen og et ønske om å vise at jeg ikke er enda en som trenger noe av ham; jeg ville fulgt det ønsket uten å presse på for kontakt."
    },
    "dp_empathic-understanding_case-sara_01": {
      "text": "[På gråten] Jeg kom meg gjennom jobbdagen, svarte på e-poster, smilte i et møte, og så gråt jeg i bilen fordi jeg savnet ham så mye.",
      "suggestion": "Du kom deg gjennom arbeidsdagen, og så traff savnet etter ham deg for fullt."
    },
    "dp_empathic-understanding_case-sara_02": {
      "text": "[Håpefull] Jeg vil tro at jeg kan få det bedre med meg selv, og for første gang kjennes det mulig å jobbe med det her.",
      "suggestion": "Du kjenner et lite håp om at dette kan være et sted å jobbe med hvordan du har det med deg selv."
    },
    "dp_empathic-understanding_case-sara_03": {
      "text": "[Trist] Jeg fant et gammelt bilde mens jeg slettet ting fra telefonen, og da kjentes bruddet helt ferskt igjen.",
      "suggestion": "Det bildet hentet smerten fra bruddet rett tilbake."
    },
    "dp_empathic-understanding_case-sara_04": {
      "text": "[Sint] Jeg hater at jeg fortsatt sjekker telefonen om kvelden, som om en del av meg venter på at navnet hans skal dukke opp.",
      "suggestion": "Du hater at en del av deg fortsatt venter på ham."
    },
    "dp_empathic-understanding_case-sara_05": {
      "text": "[Trist] Morgenene er verst. Jeg våkner i ett sekund før jeg husker at han er borte, og så blir alt tungt.",
      "suggestion": "Morgenen starter med den tunge påminnelsen om at han er borte."
    },
    "dp_empathic-understanding_case-sara_06": {
      "text": "[På gråten] Vennene mine sier at tid hjelper, og jeg vet at de mener det godt, men jeg blir flau over at jeg fortsatt gråter så lett.",
      "suggestion": "Du blir flau over at tristheten fortsatt ligger så nær overflaten."
    },
    "dp_empathic-understanding_case-sara_07": {
      "text": "[Lavmælt] Jeg fyller dagen med ærender og småting så jeg slipper å tenke, og så er det ingenting igjen som kan avlede meg om kvelden.",
      "suggestion": "Travelheten holder det unna, og ensomheten tar deg igjen om kvelden."
    },
    "dp_empathic-understanding_case-sara_08": {
      "text": "[Flau] Når venner spør hvordan jeg har det, lager jeg en vits eller bytter tema fordi jeg ikke vil være den tunge igjen.",
      "suggestion": "Du skjuler tyngden så du ikke blir den tunge igjen."
    },
    "dp_empathic-understanding_case-sara_09": {
      "text": "[På gråten] Jeg gikk forbi et par som holdt hender utenfor butikken, og det kjentes som om alle andre var valgt til et liv jeg mistet.",
      "suggestion": "Å se dem traff følelsen av å stå utenfor det livet du ville ha."
    },
    "dp_empathic-understanding_case-sara_10": {
      "text": "[Lavmælt] En del av meg går gjennom samtaler om igjen og prøver å finne øyeblikket der han bestemte seg for at jeg ikke var verdt å bli hos.",
      "suggestion": "Du leter fortsatt etter øyeblikket der han sluttet å ville bli."
    },
    "dp_empathic-understanding_case-michael_01": {
      "text": "[Fast] Jeg brukte hele formiddagen på å rydde opp i andres feil på jobb, og ved lunsj var jeg lei av at alle trengte meg til å fikse ting.",
      "suggestion": "Du ble sliten og lei av å måtte rette opp alle andres feil."
    },
    "dp_empathic-understanding_case-michael_02": {
      "text": "[Skamfull] Kona mi sa at hun er lei av å gå på nåler rundt meg, og det gjorde meg skamfull å høre.",
      "suggestion": "Å høre at hun går på nåler gjorde deg skamfull."
    },
    "dp_empathic-understanding_case-michael_03": {
      "text": "[Skamfull] Etter at jeg ropte i går kveld, så jeg at hun skvatt, og da ble jeg kvalm av skam.",
      "suggestion": "Da du så at hun skvatt etter at du ropte, ble du kvalm av skam."
    },
    "dp_empathic-understanding_case-michael_04": {
      "text": "[Anspent og sint] Når noen stiller spørsmål ved en beslutning i et møte, kjenner jeg sinnet komme før jeg engang har svart.",
      "suggestion": "Å bli utfordret foran andre får sinnet raskt opp."
    },
    "dp_empathic-understanding_case-michael_05": {
      "text": "[Flau] Noen stilte et enkelt spørsmål jeg ikke kunne svare på i dag, og jeg følte meg avslørt foran hele rommet.",
      "suggestion": "Det å ikke ha svaret gjorde at du følte deg avslørt foran alle."
    },
    "dp_empathic-understanding_case-michael_06": {
      "text": "[Anspent] Jeg satt oppe til etter midnatt og fikset på presentasjonen, fordi jeg ikke tålte tanken på at noen skulle ta meg i å være usikker om morgenen.",
      "suggestion": "Du var redd de skulle se at du var usikker, så det ble vanskelig å slutte å forberede deg."
    },
    "dp_empathic-understanding_case-michael_07": {
      "text": "[Fast] Tonefallet til kona mi endrer seg litt, og jeg er allerede i forsvar før jeg vet hva hun egentlig prøver å si.",
      "suggestion": "Tonefallet hennes får deg i forsvar før du vet hva hun mener."
    },
    "dp_empathic-understanding_case-michael_08": {
      "text": "[Anspent og skamfull] Jeg vet at jeg burde si unnskyld, men med én gang jeg gjør det, kjennes det som å gi henne bevis på at jeg er svak.",
      "suggestion": "Å si unnskyld kjennes som å avsløre svakhet."
    },
    "dp_empathic-understanding_case-michael_09": {
      "text": "[Anspent] Jeg sier til meg selv at jeg bare holder folk til en standard, men under det føler jeg meg anklaget og presset opp i et hjørne.",
      "suggestion": "Du kaller det å holde standarden, og under det føler du deg anklaget."
    },
    "dp_empathic-understanding_case-michael_10": {
      "text": "[Skamfull] Om natten spiller jeg av det jeg sa til kona mi, særlig blikket hennes, og jeg får det forferdelig.",
      "suggestion": "Om natten spiller du av ansiktet hennes og får det vondt med det som skjedde."
    },
    "dp_empathic-understanding_case-jason_01": {
      "text": "[Stille] Jeg er lei av å sitte i møter med hjertet i halsen mens alle andre virker normale.",
      "suggestion": "Du er lei av å være så engstelig mens alle andre virker rolige."
    },
    "dp_empathic-understanding_case-jason_02": {
      "text": "[Trist] Jeg spiste lunsj alene igjen i dag og så på folk ved et annet bord som lo som om det var lett.",
      "suggestion": "Å spise alene mens andre hadde kontakt gjorde deg trist."
    },
    "dp_empathic-understanding_case-jason_03": {
      "text": "[Redd] Jeg hadde lyst til å si ja til spillkvelden, og så bygde frykten seg opp helt til jeg fant en unnskyldning og avlyste.",
      "suggestion": "Du hadde lyst til å gå, og frykten vokste til du trakk deg."
    },
    "dp_empathic-understanding_case-jason_04": {
      "text": "[Stille] Når noen skryter av arbeidet mitt, smiler jeg, men inni meg venter jeg på at de skal skjønne at de tok feil.",
      "suggestion": "Komplimentet lander ikke, og du forventer at det blir tatt tilbake."
    },
    "dp_empathic-understanding_case-jason_05": {
      "text": "[Nølende] Jeg skrev om en enkel melding seks ganger i dag, fordi hver versjon hørtes rar ut når jeg så på den.",
      "suggestion": "Selv en enkel melding blir til angst og tvil."
    },
    "dp_empathic-understanding_case-jason_06": {
      "text": "[Engstelig] Jeg spiser lunsj ved pulten fordi det å gå inn på pauserommet kjennes som å gå ut på en scene.",
      "suggestion": "Å gå inn i pauserommet kjennes som å bli sett av alle, så du blir der du kjenner deg mindre utsatt."
    },
    "dp_empathic-understanding_case-jason_07": {
      "text": "[Stille] Etter at jeg har sagt noe i et møte, bruker jeg resten av ettermiddagen på å spille det av og krympe meg.",
      "suggestion": "Etter at du har snakket, spiller du det av og blir flau."
    },
    "dp_empathic-understanding_case-jason_08": {
      "text": "[Nølende] I grupper blir jeg stille så fort, og så føler jeg meg utenfor sirkelen før noen egentlig har holdt meg utenfor.",
      "suggestion": "Du blir stille og føler deg utenfor gruppa før noen har sagt noe."
    },
    "dp_empathic-understanding_case-jason_09": {
      "text": "[Skjelvende] Da jeg måtte presentere meg i dag, skalv hendene mine, og jeg ville at gulvet skulle åpne seg.",
      "suggestion": "Å presentere deg ga skjelving og et ønske om å forsvinne."
    },
    "dp_empathic-understanding_case-jason_10": {
      "text": "[På gråten] Søndagskveldene er vanskelige fordi jeg skjønner at ingen venter på å høre fra meg før uka begynner igjen.",
      "suggestion": "Søndagskveldene gjør deg smertefullt klar over at ingen venter på å høre fra deg."
    },
    "dp_empathic-understanding_case-laura_01": {
      "text": "[Langsomt og flatt] Jeg kan komme meg gjennom en hel vakt på sykehuset, snakke med pasienter, svare på meldingene fra barna mine, og likevel føle at jeg ser alt sammen på avstand.",
      "suggestion": "Du får til jobb og familie, men kjenner deg langt unna det som skjer, som om du ser på i stedet for å være med."
    },
    "dp_empathic-understanding_case-laura_02": {
      "text": "[Bekymret] Etter skilsmissen sitter jeg med regningene etter jobb og legger sammen tallene igjen og igjen, og lurer på om jeg kan beholde huset eller om jeg bare later som.",
      "suggestion": "Å sitte med regningene vekker frykten for at huset kanskje glipper."
    },
    "dp_empathic-understanding_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er vennlige mot meg, selv på en liten måte, merker jeg at jeg trekker meg unna før jeg vet om jeg egentlig vil ta imot vennligheten.",
      "suggestion": "Liten vennlighet når deg, og du trekker deg tilbake i vaktsomhet før du vet om du vil ta den imot."
    },
    "dp_empathic-understanding_case-laura_04": {
      "text": "[Forvirret] Jeg har kjent meg deprimert igjen, men det skjedde ikke noe dramatisk denne uken. Jobben var normal, barna har det greit, og likevel kjennes det som om noe har falt bort under meg.",
      "suggestion": "Alt ser normalt ut utenfra, og inni deg kjenner du deg deprimert, forvirret og som om noe har falt ned."
    },
    "dp_empathic-understanding_case-laura_05": {
      "text": "[Langsomt og flatt] Jeg sier til meg selv at jeg vil ha nærhet, og så, når noen faktisk spør om jeg vil komme innom eller bli litt lenger, blir jeg blank og begynner å planlegge hvordan jeg kan gå.",
      "suggestion": "Du lengter etter nærhet, og når den kommer nær nok til å merkes, blir du blank og leter etter avstand."
    },
    "dp_empathic-understanding_case-laura_06": {
      "text": "[Trist] En venninne sluttet å invitere meg etter at jeg avlyste for mange ganger. En del av meg er lettet over å slippe å forklare meg, men jeg blir også trist når jeg ser henne med andre.",
      "suggestion": "Du er lettet over å slippe å forklare deg, og lei deg for at hun ikke inviterer deg lenger."
    },
    "dp_empathic-understanding_case-laura_07": {
      "text": "[Flatt og på vakt] Jeg våkner anspent før jeg engang åpner øynene, og lytter etter om noe er galt i huset, selv om jeg bor alene nå.",
      "suggestion": "Du våkner allerede anspent og lytter etter fare i et tomt hus."
    },
    "dp_empathic-understanding_case-laura_08": {
      "text": "[Redd] Jeg unngår filmer med krangling og slåssing fordi én hevet stemme kan gjøre meg redd før jeg rekker å minne meg selv på at det bare er en scene.",
      "suggestion": "En hevet stemme på skjermen vekker frykt før du rekker å minne deg selv på at det bare er en scene."
    },
    "dp_empathic-understanding_case-laura_09": {
      "text": "[Sliten] Jeg prøver å være normal på jobb, smile og passe på alle, men ved slutten av en vakt sitter jeg i bilen fordi jeg er for utslitt til å kjøre hjem.",
      "suggestion": "Å holde normalfasaden og ta vare på alle gjør deg for utslitt til å dra hjem."
    },
    "dp_empathic-understanding_case-laura_10": {
      "text": "[Forvirret] Jeg vet ikke helt hva jeg burde snakke om her. Jeg kunne snakket om søvn, skilsmissen, jobb eller barndommen, men mest av alt vet jeg bare at jeg ikke føler meg som meg selv.",
      "suggestion": "Det finnes flere steder å begynne, og under dem ligger følelsen av at du ikke er deg selv."
    },
    "dp_empathic-understanding_case-carlos_01": {
      "text": "[Håpløs] Kona mi og jeg har den samme krangelen om temperamentet mitt om og om igjen, og til slutt sier vi begge de samme tingene som sist. Ingenting endrer seg uansett hvor hardt jeg prøver.",
      "suggestion": "Den samme krangelen gjentar seg, og du blir utslitt og mister håpet om at noe kan endre seg."
    },
    "dp_empathic-understanding_case-carlos_02": {
      "text": "[Skamfull] Jeg hater å huske øyeblikket da sønnen min så meg smelle igjen den døra. Han ble så fort stille, og nå ser jeg ansiktet hans for meg når jeg prøver å sove.",
      "suggestion": "Det stille ansiktet til sønnen din etter at døren smalt, blir værende i deg som skam."
    },
    "dp_empathic-understanding_case-carlos_03": {
      "text": "[Sint] Broren min lovet å hjelpe med barna og forsvant igjen. Jeg hadde regnet med ham, og da han ikke svarte, ble jeg rasende.",
      "suggestion": "Du hadde regnet med ham, og det at han forsvant, gjorde deg rasende og skuffet."
    },
    "dp_empathic-understanding_case-carlos_04": {
      "text": "[Bekymret] Jeg er redd for at hvis jeg mister én jobb til på grunn av temperamentet mitt, kommer familien min ikke til å komme seg igjen. Jeg gjør regnestykket i hodet og ser alt falle fra hverandre.",
      "suggestion": "Ett utbrudd til på jobb kjennes som noe som kan få alt til å falle fra hverandre for familien din."
    },
    "dp_empathic-understanding_case-carlos_05": {
      "text": "[Skamfull] Etter at jeg eksploderer, blir alle stille og forsiktige rundt meg. Den stillheten får meg til å føle at jeg har blitt akkurat den mannen jeg sa jeg aldri skulle bli.",
      "suggestion": "Den forsiktige stillheten etter at du eksploderer, gjør deg skamfull over mannen du virker som du blir."
    },
    "dp_empathic-understanding_case-carlos_06": {
      "text": "[Anspent] Når ting blir rolige etter en krangel, blir jeg nervøs i stedet for avslappet. Jeg begynner å vente på det neste noen kommer til å si.",
      "suggestion": "Selv når krangelen er over, er du anspent og venter på hva noen skal si neste gang."
    },
    "dp_empathic-understanding_case-carlos_07": {
      "text": "[Trist] Faren min er død, og jeg blir fortsatt sint over at han aldri sa at han var stolt av meg. Det høres dumt ut å ønske seg det nå, men det går fortsatt inn på meg.",
      "suggestion": "Selv etter at han døde, gjør de manglende ordene deg fortsatt såret og sint."
    },
    "dp_empathic-understanding_case-carlos_08": {
      "text": "[Forvirret] Jeg vet at ropingen skremmer familien min, men i øyeblikket føles det som den eneste måten noen hører meg på. Etterpå hater jeg at jeg brukte det ene som får dem til å trekke seg unna.",
      "suggestion": "I øyeblikket kjennes roping som å bli hørt, og etterpå gjør det vondt at det skyver dem unna."
    },
    "dp_empathic-understanding_case-carlos_09": {
      "text": "[Sint, med knyttede never] Jeg slår i vegger i stedet for folk, og en del av meg tenker at det burde telle for noe. Men jeg hater at det fortsatt skremmer dem.",
      "suggestion": "Veggen kjennes som å holde igjen fra noe verre, og det gjør fortsatt vondt at den skremmer dem."
    },
    "dp_empathic-understanding_case-carlos_10": {
      "text": "[Skamfull] Jeg vil at familien min skal føle seg trygg med meg. Når de fortsatt skvetter av stemmen min, kjennes det som bevis på at jeg allerede har ødelagt noe.",
      "suggestion": "Du vil at de skal føle seg trygge med deg, og når de skvetter, lander det som bevis på at noe allerede er skadet."
    },
    "dp_empathic-understanding_case-nina_01": {
      "text": "[Sliten] Å be om hjelp gir meg skyldfølelse, selv når jeg er helt utslitt. Jeg begynner å forklare hvorfor det egentlig ikke er så farlig før noen i det hele tatt har svart.",
      "suggestion": "Du får skyldfølelse straks du ber om hjelp, og begynner å tone ned hvor mye du trenger den."
    },
    "dp_empathic-understanding_case-nina_02": {
      "text": "[Bekymret] Regningen for bilreparasjonen kom, og jeg vet ikke hvordan vi skal klare oss gjennom måneden. Jeg flytter penger rundt i hodet og blir bare mer overveldet.",
      "suggestion": "Reparasjonsregningen får deg til å flytte tall rundt og kjenne deg enda mer overveldet over måneden."
    },
    "dp_empathic-understanding_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, knyter magen seg mens jeg ser for meg at alle blir skuffet. Så begynner jeg å forklare så mye at neiet nesten forsvinner.",
      "suggestion": "Å si nei knyter magen, og alle forklaringene visker nesten ut neiet."
    },
    "dp_empathic-understanding_case-nina_04": {
      "text": "[Trist] Søsteren min glemte bursdagen min igjen, og jeg fortsetter å si til meg selv at det ikke burde bety noe fordi hun er travel. Men jeg ventet på meldingen hele dagen.",
      "suggestion": "At hun glemte det gjør vondt, og du prøver hele tiden å snakke deg ut av den smerten."
    },
    "dp_empathic-understanding_case-nina_05": {
      "text": "[Unnskyldende] Når jeg setter meg for å hvile, får jeg skyldfølelse i løpet av sekunder. Jeg begynner å legge merke til oppvask, klesvask, meldinger, alt som beviser at jeg burde reise meg igjen.",
      "suggestion": "Hvilen varer bare noen sekunder før skyldfølelsen begynner å liste opp grunner til å reise deg igjen."
    },
    "dp_empathic-understanding_case-nina_06": {
      "text": "[Forvirret] Jeg har vært mer deprimert i det siste, men guttene har det bra og jobben går greit, så jeg føler meg dum som sier det. Jeg tenker hele tiden at jeg burde være takknemlig, ikke gråte på badet.",
      "suggestion": "Ting ser greie ut fra utsiden, mens du kjenner deg forvirret, deprimert og alene med tårene."
    },
    "dp_empathic-understanding_case-nina_07": {
      "text": "[Skamfull] Noen ganger eksploderer jeg, vanligvis over noe lite, og så føler jeg meg forferdelig for å bli den sinte etter å ha prøvd så hardt å være tålmodig.",
      "suggestion": "Etter å ha prøvd så hardt å være tålmodig, gjør eksplosjonen deg skamfull over å bli den sinte."
    },
    "dp_empathic-understanding_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om at noen tar vare på meg for en gangs skyld, kommer med te eller sier at jeg skal legge meg ned, og så føler jeg meg egoistisk for å ville det.",
      "suggestion": "Ønsket om å bli tatt vare på er der, og så begynner selve ønsket å kjennes egoistisk."
    },
    "dp_empathic-understanding_case-nina_09": {
      "text": "[Sint] En venninne avlyste lunsj i siste liten, og jeg skrev at det gikk helt fint. Så var jeg sint resten av ettermiddagen.",
      "suggestion": "Du sendte meldingen om at det gikk helt fint, og bar så på sinnet og skuffelsen alene."
    },
    "dp_empathic-understanding_case-nina_10": {
      "text": "[Sliten] Jeg vet ikke hva jeg skal snakke om i dag. Det er for mange små ting, og jeg håpet du kunne hjelpe meg å finne hvor jeg skal begynne.",
      "suggestion": "Du er sliten og usikker på hvor du skal begynne med så mange småting stablet oppå hverandre."
    },
    "dp_empathic-understanding_case-aisha_01": {
      "text": "[Panisk] Hvis du ser bort mens jeg snakker, selv bare for å sjekke et notat, får jeg panikk for at du mister interessen. Da begynner jeg å snakke fortere, legge til detaljer, hva som helst for å holde deg hos meg.",
      "suggestion": "Når jeg ser bort, får du panikk for at jeg mister interessen og prøver enda hardere å holde på oppmerksomheten min."
    },
    "dp_empathic-understanding_case-aisha_02": {
      "text": "[Panisk] Når en melding ikke kommer, låser brystet seg, og jeg får ikke puste. Jeg sjekker igjen og igjen selv om jeg vet at det ikke får svaret til å komme, og hver tom skjerm gjør det verre.",
      "suggestion": "Den ubesvarte meldingen låser brystet, og hver tom sjekk gjør panikken verre."
    },
    "dp_empathic-understanding_case-aisha_03": {
      "text": "[Desperat] Jeg hører meg selv trygle «ikke gå», og så roper jeg plutselig som om jeg hater dem. Etterpå klarer jeg ikke å forklare hvordan jeg gikk fra å trenge dem så intenst til å angripe dem.",
      "suggestion": "Du går fra å trenge dem desperat nær til å angripe dem, og etterpå virker skiftet umulig å forklare."
    },
    "dp_empathic-understanding_case-aisha_04": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; jeg våknet og kjente meg feil, sjekket telefonen altfor mange ganger, og klarer ikke si om jeg er trist eller sint.",
      "suggestion": "Du er usikker på hvor du skal begynne med en feil følelse som ikke lar seg sortere i trist eller sint."
    },
    "dp_empathic-understanding_case-aisha_05": {
      "text": "[Bekymret] Jeg prøver å la være å klore, men når panikken blir så sterk, begynner hendene å bevege seg før jeg har ord for det som skjer.",
      "suggestion": "Panikken løper foran ordene og ut i hendene dine mens du prøver å la være å klore."
    },
    "dp_empathic-understanding_case-aisha_06": {
      "text": "[Desperat] Hvis noen avlyser, vil jeg gi opp før de kan forlate meg igjen. En del av meg vet at de kan ha en ordentlig grunn, men en annen del har allerede pakket sammen og forsvunnet først.",
      "suggestion": "En avlysning kjennes som å bli forlatt igjen, og en del av deg vil forsvinne først."
    },
    "dp_empathic-understanding_case-aisha_07": {
      "text": "[Skamfull] Jeg hater meg selv etter at jeg eksploderer, selv om jeg var livredd først; jeg spiller av det jeg sa om og om igjen og kjenner meg ekkel.",
      "suggestion": "Etter at du eksploderer, blir reprisen til avsky for deg selv, selv om redselen kom først."
    },
    "dp_empathic-understanding_case-aisha_08": {
      "text": "[Skamfull] Jeg tester folk for å se om de bryr seg, og så hater jeg meg selv for å trenge bevis; beroligelsen varer ikke særlig lenge.",
      "suggestion": "Du trenger bevis på at folk bryr seg, og så kommer skammen når beroligelsen falmer så fort."
    },
    "dp_empathic-understanding_case-aisha_09": {
      "text": "[Desperat] Når en time slutter, tipper rommet, og jeg blir svimmel og forlatt; jeg vet at timen er over, men kroppen min vet ikke det.",
      "suggestion": "At timen slutter kjennes som å bli forlatt, selv om en del av deg vet at timen er over."
    },
    "dp_empathic-understanding_case-aisha_10": {
      "text": "[Redd] Jeg er redd for at hvis jeg slutter å jage etter folk, blir det ingenting igjen av meg. Uten krisen, uten å prøve å få noen tilbake, vet jeg ikke hvem jeg er.",
      "suggestion": "Uten jakten og krisen frykter du at det ikke blir igjen noen klar følelse av deg."
    },
    "dp_empathic-understanding_case-david_01": {
      "text": "[Kontrollert] Når kona mi kaller meg kald, stritter jeg imot fordi det høres for nært sannheten ut. Så blir jeg sint på henne for å legge merke til akkurat det jeg prøver å ikke se.",
      "suggestion": "Å bli kalt kald kjennes vondt fordi det er så nær sannheten, og du blir sint for at hun ser det du prøver å unngå å se selv."
    },
    "dp_empathic-understanding_case-david_02": {
      "text": "[Frustrert] Jeg vet at faren min var umulig å tilfredsstille, men å vite det endrer ikke hvor verdiløs jeg føler meg når jeg ser for meg ansiktet hans.",
      "suggestion": "Du vet at han var umulig å tilfredsstille, og likevel vekker det å se for deg ansiktet hans verdiløshet."
    },
    "dp_empathic-understanding_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg kritisert, begynner jeg å ramse opp alt jeg har fått til, for ellers føler jeg meg blottlagt og latterlig.",
      "suggestion": "Kritikk får deg til å kjenne deg blottlagt, og prestasjonene strømmer inn for å dekke over den følelsen."
    },
    "dp_empathic-understanding_case-david_04": {
      "text": "[Kontrollert] Ros føles godt, så renner det ut igjen; neste dag trenger jeg mer bevis på at jeg fortsatt betyr noe.",
      "suggestion": "Ros føles godt et øyeblikk, så renner den bort og etterlater deg med behov for bevis igjen."
    },
    "dp_empathic-understanding_case-david_05": {
      "text": "[Avvisende] Når jeg innrømmer at jeg tar feil, føler jeg meg ribbet og liten, så jeg argumenterer selv når en del av meg vet at jeg gjorde skade.",
      "suggestion": "Å innrømme feil gjør deg ribbet og liten, selv når en del av deg vet at det ble skade."
    },
    "dp_empathic-understanding_case-david_06": {
      "text": "[Såret, men skarp] Når barna mine gråter, blir jeg utålmodig, og så hater jeg hvor hard jeg høres ut når jeg ser dem trekke seg unna.",
      "suggestion": "Du blir utålmodig når de gråter, og så hater du hvor hard du høres ut når de trekker seg unna."
    },
    "dp_empathic-understanding_case-david_07": {
      "text": "[Såret, men skarp] Etter at affæren kom fram, får det å være hjemme meg til å føle meg mislykket; selv vanlige rom kjennes som bevis mot meg.",
      "suggestion": "Etter at affæren kom fram, kjennes selve hjemmet som bevis på at du har mislyktes."
    },
    "dp_empathic-understanding_case-david_08": {
      "text": "[Bekymret] Jeg har drukket mer etter jobb fordi det er den eneste gangen jeg slutter å kjenne angst og slutter å høre skuffelsen til kona mi i hodet.",
      "suggestion": "Drikkingen demper angsten og skuffelsen til kona di en stund."
    },
    "dp_empathic-understanding_case-david_09": {
      "text": "[Forvirret] Jeg vet ikke hva vi burde snakke om denne uken; hvis jeg velger, kommer jeg nok til å velge det som får meg til å se minst blottlagt ut.",
      "suggestion": "Å velge hva dere skal snakke om kjennes risikabelt, med et drag mot å velge den minst blottlagte versjonen."
    },
    "dp_empathic-understanding_case-david_10": {
      "text": "[Såret, men skarp] Hvis jeg bare er ordinær i noe, føles det som om jeg forsvinner; jeg vil heller la være å prøve enn å være middels foran folk.",
      "suggestion": "Å være ordinær kjennes som å forsvinne, og det å være middels foran folk kjennes uutholdelig."
    },
    "dp_empathic-understanding_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager fullfører jeg rutinene og kjenner nesten ingenting bak ansiktet. Folk snakker til meg, og jeg svarer litt forsinket, som om ordene må reise for langt.",
      "suggestion": "Du kommer deg gjennom dagen uten å kjenne stort, og selv det å svare folk kjennes langsomt og fjernt."
    },
    "dp_empathic-understanding_case-marcus_02": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; hvis jeg velger noe, er jeg redd vi åpner mer enn jeg tåler.",
      "suggestion": "Å velge hvor du skal starte kjennes utrygt, som om det kan åpne mer enn du tåler."
    },
    "dp_empathic-understanding_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt gjør meg oppskrudd og tom, som om rommet ikke er trygt; jeg sitter og lytter før jeg husker hvor jeg er.",
      "suggestion": "Mareritt etterlater deg oppskrudd og tom, lyttende før du helt vet hvor du er."
    },
    "dp_empathic-understanding_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg unngår folk fordi det føles tryggere enn å forklare hvorfor jeg forsvinner, og så sitter jeg alene og får det verre.",
      "suggestion": "Å unngå folk kjennes tryggere enn å forklare deg, og så blir alenetilstanden verre."
    },
    "dp_empathic-understanding_case-marcus_05": {
      "text": "[Bekymret] Jeg har drukket etter jobb for å få sove, og nå er jeg bekymret for at jeg ikke får sove uten. Jeg hater at noe jeg ikke stoler på, har begynt å kjennes nødvendig.",
      "suggestion": "Alkohol har begynt å kjennes nødvendig for søvn, og du hater å være avhengig av det."
    },
    "dp_empathic-understanding_case-marcus_06": {
      "text": "[Stille og på vakt] Når noe godt skjer, kjennes det langt borte, som om det tilhører noen andre; jeg vet hvilket uttrykk jeg skal ha.",
      "suggestion": "Det skjer gode ting, men du kjenner deg lite berørt av dem, selv om du vet hvordan det forventes at du reagerer."
    },
    "dp_empathic-understanding_case-marcus_07": {
      "text": "[Flatt] Et dørsmell kan kaste meg tilbake før jeg vet hvor jeg er; etterpå blir jeg flau over at en vanlig lyd gjorde det.",
      "suggestion": "Et plutselig dørsmell kaster deg tilbake før du rekker å plassere deg, og etterpå blir du flau."
    },
    "dp_empathic-understanding_case-marcus_08": {
      "text": "[Trist] En venn fra avdelingen sluttet å ringe, og jeg sier til meg selv at jeg ikke ville snakke uansett. Men jeg sjekker fortsatt telefonen, og stillheten plager meg.",
      "suggestion": "Du sier til deg selv at du ikke ville ha kontakt, og likevel plager stillheten deg."
    },
    "dp_empathic-understanding_case-marcus_09": {
      "text": "[Håpløs] Noen netter tenker jeg at ingen ville lagt merke til det om jeg ikke våknet; jeg planlegger ikke noe, jeg føler meg bare så usynlig.",
      "suggestion": "De nettene føler du deg så usynlig at det å ikke våkne virker som noe som ville passert ubemerket."
    },
    "dp_empathic-understanding_case-marcus_10": {
      "text": "[Redd] Jeg vil slippe folk inn, men hver gang noen kommer nær, begynner jeg å se etter utgangen. Så ender jeg alene igjen og hater det også.",
      "suggestion": "Du vil ha nærhet, frykten sender deg mot utgangen, og så gjør alenetilstanden også vondt."
    },
    "dp_empathic-affirmation-validation_case-sara_01": {
      "text": "[Lavmælt] Før jeg legger meg, sjekker jeg kontoene hans på sosiale medier selv om det knuser meg.",
      "suggestion": "Dragningen mot siden hans henger sammen med hvor ferskt tapet er; hvert spor gir kontakt og gjør vondt samtidig."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      "text": "[Flau] Jeg smilte meg gjennom hele teammøtet og gråt på toalettet etterpå.",
      "suggestion": "Det er ikke rart at tårene trengte plass etter at du holdt deg samlet gjennom hele møtet; de fortjener plass, ikke skam."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      "text": "[På gråten] Når jeg tenker på de siste ukene, lurer jeg på om han hadde blitt hvis jeg hadde vært morsommere eller enklere.",
      "suggestion": "Når en du ønsket skulle bli, har gått, er det forståelig å lete etter hva du kunne gjort annerledes. Det er plass til smerten uten at alt må være din skyld."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      "text": "[Lavmælt] Om natten blir det for stille, og jeg begynner å kjenne det som om jeg aldri egentlig var ønsket.",
      "suggestion": "Når du har mistet en som betydde mye, kan en stille kveld vekke en vond ensomhet. At du føler deg uønsket da, gjør ikke behovet for selskap urimelig."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      "text": "[Sint, så flau] En venninne sa at jeg måtte slutte å sjekke telefonen, og jeg freste til henne.",
      "suggestion": "Det kan gjøre vondt å få beskjed om å slutte når du fortsatt strever med tapet. Det er plass til sinnet ditt, samtidig som det betyr noe hvordan du snakker til venninnen din."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      "text": "[På gråten] Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      "suggestion": "Det er forståelig at det å våkne rett inn i tapet igjen er en hard start på dagen; du rekker ikke å beskytte deg før det lander."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      "text": "[På gråten] Jeg beklager når jeg begynner å gråte, som om sorgen min tar for mye plass.",
      "suggestion": "Du sørger over en som var viktig, og det er forståelig at tårene kommer. Sorgen din kan få plass her. Du trenger ikke beklage at du kjenner den."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      "text": "[Flau] Jeg får dårlig samvittighet for å være så lei meg når dette bare er et brudd og andre har større problemer.",
      "suggestion": "Å sammenligne tap kan få sorg til å kjennes illegitim, men det å bli forlatt er fortsatt et virkelig sår."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      "text": "[Redd] Vennene mine sier at jeg burde bli med ut og spise, men jeg er redd jeg kommer til å begynne å gråte ved bordet.",
      "suggestion": "Middagen ville gjort en privat sorg synlig for alle; frykten for å gråte der er et forståelig ønske om å beskytte noe sårt."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      "text": "[Lavmælt] Etter dette bruddet tenker en del av meg at kjærlighet må være for andre, ikke for meg.",
      "suggestion": "Å bli forlatt kan gjøre det vondt å se for seg å stole på kjærligheten igjen. Smerten er forståelig. Det er plass til den uten at tanken må bli en dom over fremtiden din."
    },
    "dp_empathic-affirmation-validation_case-michael_01": {
      "text": "[Skyldpreget] Jeg traff en syklist med bilen forrige uke. Veien var glatt, men han brakk likevel håndleddet, og jeg klarer ikke slutte å kjenne skyld.",
      "suggestion": "Noen ble skadet i en ulykke du var involvert i, så skyldfølelsen er forståelig. Vi kan ta den på alvor uten å bruke følelsen alene til å avgjøre hvor stort ansvaret ditt var."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      "text": "[Defensiv] I møter føler jeg meg avslørt hvis jeg ikke har svaret, og da bløffer jeg.",
      "suggestion": "Å ikke ha et svar foran teamet kan kjennes sårbart, særlig når du vil bli sett som kompetent. Ubehaget er forståelig. Du trenger ikke late som du vet for å ha plass til det."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      "text": "[Anspent] Når jeg beklager, kjennes det som å knele foran noen som kommer til å bruke det mot meg.",
      "suggestion": "Hvis en unnskyldning kjennes som noe som kan brukes mot deg, er det forståelig å være på vakt. Det er plass til frykten samtidig som du tar ansvar for din del."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      "text": "[Fast] Hjemme, når kona mi sukker eller himler med øynene, eksploderer jeg før jeg rekker å tenke.",
      "suggestion": "Et sukk eller himling med øynene kan gjøre vondt når du opplever det som avvisning. Smerten og sinnet er forståelige. De unnskylder ikke at du skremmer kona di eller kjefter på henne."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      "text": "[Rasende] Når jeg ser på nyhetene, blir jeg så sint på folk med makt som later som konsekvenser er valgfritt.",
      "suggestion": "Å se folk med makt slippe unna konsekvenser kan forståelig nok gjøre deg sint når rettferdighet betyr noe for deg. Det du reagerer på, fortjener å bli tatt på alvor."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      "text": "[Skamfull] Når barnet mitt spør hvorfor jeg er sint, føler jeg meg som verdens verste far.",
      "suggestion": "Spørsmålet fra barnet ditt gjør vondt fordi det betyr noe for deg å være en trygg far. Smerten er forståelig. Å ta ansvar for sinnet betyr ikke at du må dømme deg selv som den verste faren."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      "text": "[Fast] Å smelle med døra føles fælt etterpå, men i øyeblikket slipper jeg å føle meg liten.",
      "suggestion": "Å føle seg liten kan gjøre vondt, og det er forståelig å ønske å komme bort fra den følelsen. Vi kan ta smerten på alvor uten at dørsmelling trenger å bli svaret på den."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      "text": "[Defensiv] Hvis noen utfordrer meg foran teamet, dobler jeg innsatsen selv om jeg tar feil.",
      "suggestion": "Å bli utfordret foran teamet kan kjennes pinlig når det betyr noe for deg å ha god dømmekraft. Ubehaget er forståelig, også når den andre har et godt poeng."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      "text": "[Skamfull] Jeg hater at jeg trenger hjelp med sinne; det får meg til å føle meg svak.",
      "suggestion": "Hvis du har lært at det er svakt å trenge hjelp, kan det kjennes sårbart å be om den. Skammen er forståelig. Å trenge støtte gjør deg ikke mindre verdt å respektere."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      "text": "[Skamfull] Etter at jeg eksploderer hjemme, ligger jeg våken og ser ansiktene deres for meg mens jeg hater meg selv.",
      "suggestion": "Å se at familien ble redd kan vekke vond anger, særlig når tryggheten deres betyr noe for deg. Smerten fortjener plass sammen med ansvaret for det som skjedde, fremfor bare å angripe deg selv."
    },
    "dp_empathic-affirmation-validation_case-jason_01": {
      "text": "[Skjelvende] Hver presentasjon på jobb får hendene mine til å skjelve, og etterpå føler jeg meg patetisk for at jeg bryr meg så mye.",
      "suggestion": "Å snakke mens andre ser på kan være skremmende når det betyr så mye hvordan de vurderer deg. Det er forståelig at du blir engstelig. At du skjelver, gjør deg ikke patetisk for å bry deg."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      "text": "[Nølende] Jeg holder blikket på gulvet så ingen får en grunn til å se på meg.",
      "suggestion": "Det er forståelig at det kjennes risikabelt å bli sett når du forventer at folk skal le av deg. Det er plass til frykten uten å dømme deg for å se ned."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      "text": "[Engstelig] På teamlunsjer later jeg som jeg tekster så jeg har et sted å gjemme meg under småprat.",
      "suggestion": "Småprat kan kjennes sårbart når du er redd for å bli vurdert. Det er forståelig å ønske litt lettelse fra angsten. Den gjør deg ikke til et menneske det er noe galt med."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      "text": "[Stille] Når folk ler høflig etter at jeg har sagt noe, antar jeg at de prøver å komme seg unna meg.",
      "suggestion": "Å ikke vite hva latteren betyr kan være ubehagelig når du er redd for å være uønsket. Bekymringen er forståelig, selv om latteren ikke sier sikkert hva de tenker."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      "text": "[Nølende] Komplimenter preller av; en del av meg vil tro på dem, men den mistenksomme delen vinner.",
      "suggestion": "Det kan være vanskelig å stole på ros når du er så vant til å finne feil ved deg selv. Nølingen er forståelig, selv om du ønsker å tro på komplimentet."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      "text": "[Stille og skamfull] Etter at jeg har snakket i en gruppe, spiller jeg av hver setning og skammer meg for å høres klein ut.",
      "suggestion": "Å snakke i en gruppe kan kjennes sårbart når det betyr så mye å høre til. Det er forståelig å bli usikker på seg selv etterpå. Du fortjener ikke å bli angrepet for å prøve å delta."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      "text": "[Stille og skamfull] Jeg droppet enda en lunsj med teamet, og etterpå følte jeg meg patetisk som gjemte meg i leiligheten.",
      "suggestion": "Når det er skremmende å være med andre, er det forståelig å ville bli hjemme. Det er plass til skuffelsen over å gå glipp av noe også. Ingen av følelsene gjør deg patetisk."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      "text": "[Nølende] Jeg skanner hvert rom etter hvem som får til mer enn meg, og så føler jeg meg defekt.",
      "suggestion": "Å sammenligne seg med alle i rommet kan gjøre vondt når du allerede tviler på om du hører til. Smerten er forståelig. Den er ikke et bevis på at det er noe galt med deg."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      "text": "[Nervøs, nesten smilende] Noen inviterte meg på spillkveld, og jeg hadde lyst til å gå i omtrent ti sekunder før panikken tok over.",
      "suggestion": "Ikke rart panikken kom raskt; den samme invitasjonen traff både de ti sekundene med håp om kontakt og frykten for blottstilling."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      "text": "[Stille] Noen netter ligger jeg der og er sikker på at jeg alltid kommer til å være alene fordi jeg er for klein til å elskes.",
      "suggestion": "Å lengte etter selskap og samtidig frykte at du alltid vil være alene, kan gjøre nettene vonde. Ensomheten fortjener omsorg, fremfor å bli behandlet som et bevis på at du ikke kan bli elsket."
    },
    "dp_empathic-affirmation-validation_case-laura_01": {
      "text": "[Flat og skamfull] På fridager kan jeg bli liggende til tolv, ikke egentlig sovende, bare ute av stand til å komme i gang. Så sier jeg til meg selv at jeg er lat, fordi andre mennesker klarer normale morgener.",
      "suggestion": "Når det kjennes for mye bare å begynne dagen, kan det være en kamp å komme seg ut av senga. Det strevet fortjener omsorg. Å sammenligne seg med andres morgener gjør deg ikke lat."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      "text": "[Redd] Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      "suggestion": "Med det hevede stemmer har betydd i livet ditt, er det forståelig at de skremmer deg. At du føler deg langt borte da, fortjener oppmerksomhet uten at du får skylden for det."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      "text": "[På vakt og forvirret] En mann på jobben spurte om jeg ville ta en kaffe, og jeg ble bitte litt glad før jeg ble helt nummen. Jeg sier til meg selv at det er latterlig i min alder.",
      "suggestion": "Det kan være forståelig både å ønske selskap og å bli urolig for nærhet etter det du har opplevd. Verken gleden eller nummenheten etterpå blir latterlig på grunn av alderen din."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg tar lange dusjer fordi varmt vann kjennes tryggere enn å be noen om trøst.",
      "suggestion": "Liten, trygg varme kan kjennes svært viktig når trøst fra mennesker har kjentes farlig eller upålitelig."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      "text": "[Trist] Jeg liker den nye leiligheten, men da jeg pakket ut bildene fra det gamle huset, savnet jeg den versjonen av familien jeg hele tiden håpet at vi skulle bli.",
      "suggestion": "Sorgen hører til det flyttingen bærer: ikke bare en ny start, men tapet av hjemmet og familien du fortsatte å prøve å få til."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      "text": "[Anspent og på vakt] Berøring skremmer meg, selv når den er vennlig, og etterpå føler jeg meg ødelagt for å reagere sånn.",
      "suggestion": "Når berøring ikke alltid har vært trygg, er det forståelig å skvette, også når denne personen mener det godt. Reaksjonen fortjener omsorg fremfor en dom om at du er ødelagt."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      "text": "[Redd] Når tristheten presser seg fram, blir jeg redd for at jeg ikke kommer tilbake fra den.",
      "suggestion": "Hvis tristheten kjennes som noe du kanskje ikke kommer tilbake fra, er frykten forståelig. Det er plass til den også. Du trenger ikke avfeie frykten for å kjenne at du er trist."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      "text": "[Fjern] Jeg beklager med en gang jeg trenger trøst, som om det allerede er for mye å ønske det.",
      "suggestion": "Det å ønske trøst er legitimt og dypt menneskelig, også når nærhet har lært deg å beklage at du trenger den."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      "text": "[Flat og flau] Datteren min sendte en sang hun trodde jeg ville like, og jeg klarte ikke få meg til å høre på den. Jeg hater at selv noe vennlig kjennes som arbeid.",
      "suggestion": "Selv vennlighet kan forståelig nok kjennes krevende etter så mye vakthold; strevet sier hvor vanskelig nærhet har blitt, ikke at du ikke bryr deg."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      "text": "[Flatt og på vakt] Selv i senga ligger skuldrene oppe, som om noen kan komme inn døra.",
      "suggestion": "Hvile kan være vanskelig å finne når en del av deg lærte å stå på vakt mot fare."
    },
    "dp_empathic-affirmation-validation_case-carlos_01": {
      "text": "[Anspent og sint] Å se nyheter om familier som min bli behandlet som trusler gjør meg så sint at jeg nesten ikke klarer å sitte stille.",
      "suggestion": "Å se familier som din bli behandlet som trusler kan gjøre sterkt inntrykk. Det er forståelig at du blir sint når verdigheten og tryggheten deres blir behandlet så skjødesløst."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      "text": "[Anspent] Hvis jeg ikke kommer inn sterkt, ser jeg for meg at folk får øye på den redde gutten jeg var, og det føles ydmykende før noen egentlig har gjort noe.",
      "suggestion": "Hvis det er ydmykende å bli sett som redd, er det forståelig å grue seg til å bli sett slik. Den redde siden av deg fortjener også respekt, uten å måtte bevise styrke."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      "text": "[Skamfull] På kampen til barnet mitt ropte jeg til dommeren, og etterpå ville ikke sønnen min se på meg. Jeg sier til meg selv at jeg blir akkurat det jeg hatet.",
      "suggestion": "Å se sønnen din trekke seg unna kan gjøre dypt vondt når du vil være en annerledes far. Smerten er forståelig. Å erkjenne den går sammen med å ta ansvar for ropingen."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      "text": "[Defensiv] Når noen stiller spørsmål ved meg, føler jeg meg liten, og så hever jeg stemmen mer enn jeg mente.",
      "suggestion": "Å føle seg liten når noen utfordrer deg kan gjøre vondt. Smerten fortjener plass, samtidig som du har ansvar for hvor høyt eller skarpt du svarer."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      "text": "[Sint og skamfull] Når nevene knyter seg, føles det som om kampen allerede er på vei, og så hater jeg meg selv for å ligne alle mennene jeg lovet at jeg aldri skulle bli.",
      "suggestion": "Det er forståelig at det gjør vondt å se deg selv reagere slik du lovet at du ikke skulle. Vi kan ta skammen på alvor uten å unnskylde skremmende atferd eller dømme hele deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      "text": "[Skamfull] Jeg ødelegger ting og angrer etterpå når jeg ser hvor redde alle ser ut.",
      "suggestion": "Å se familien din redd kan vekke vond anger fordi tryggheten deres betyr noe for deg. Angeren fortjener plass, og den tar ikke bort ansvaret ditt for å ødelegge ting."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      "text": "[Skamfull] Kollegaene holder avstand etter at jeg eksploderer, og jeg kjenner skam selv om jeg later som jeg ikke bryr meg.",
      "suggestion": "Det kan gjøre vondt at kollegaene holder avstand, særlig når du skammer deg over det som skjedde. Skammen er forståelig. Å ta ansvar krever ikke at du later som du ikke bryr deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      "text": "[Splittet] Jeg går ut av rommet for å ikke eksplodere, men så hører jeg stemmen til faren min si at det er svakt.",
      "suggestion": "Å trekke seg unna kan være vanskelig når du hører farens dom om svakhet. Den konflikten er forståelig. Følelsen tar ikke bort at du valgte å holde andre trygge."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      "text": "[Mistenksom] Ro kjennes mistenkelig, som om noen legger opp til at jeg skal bli tråkket på.",
      "suggestion": "Hvis ro kjennes som et øyeblikk der noen kan utnytte deg, er det forståelig å være på vakt. Vi kan respektere frykten uten å slå fast at noen faktisk prøver å lure deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      "text": "[Sårbar] Sønnen min sovnet mot meg i sofaen, og jeg kjente stolthet, redsel og sorg på en gang, fordi jeg vil at han skal føle seg trygg med meg på en måte jeg aldri gjorde.",
      "suggestion": "Stolthet, redsel og sorg hører til det samme øyeblikket her; tilliten hans berører både kjærligheten din til ham og sorgen over at du ikke selv hadde slik trygghet."
    },
    "dp_empathic-affirmation-validation_case-nina_01": {
      "text": "[Sliten] Hvis jeg setter meg ned før alt er gjort, begynner skyldfølelsen å ramse opp hva jeg burde gjøre.",
      "suggestion": "Når så mye kreves av deg, er det forståelig at det å stoppe kan vekke skyld så vel som lettelse. Du har lov til å trenge hvile selv om noe fortsatt er ugjort."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      "text": "[Unnskyldende] Kirken spurte om jeg kunne ta med mat til enda et arrangement, og jeg sa at jeg ikke kunne. Jeg lå våken hele kvelden og følte at jeg hadde mislyktes i å være raus.",
      "suggestion": "Når raushet betyr noe for deg, kan et nei vekke skyld. Følelsen er forståelig. Å ha en grense betyr ikke at du har sluttet å bry deg om menneskene i menigheten."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      "text": "[Trist og skyldpreget] Mannen min laget middag uten at jeg spurte, og i stedet for bare å føle meg tatt vare på begynte jeg å gråte og så beklaget jeg at jeg gjorde det rart.",
      "suggestion": "Å bli tatt vare på kan berøre når du så ofte er den som tar vare på andre. Det er forståelig at tårene kom. Du ødela ikke gesten ved å bli berørt av den."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      "text": "[Skyldpreget] Når sinnet kommer, hører jeg straks at jeg er egoistisk og får skyldfølelse.",
      "suggestion": "Når du er vant til å sette andre først, kan ditt eget sinne være ubehagelig. Det er forståelig at du også har behov og grenser. Sinne i seg selv gjør deg ikke egoistisk."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      "text": "[Unnskyldende] Når jeg ber om hjelp, føler jeg meg som en byrde før noen engang svarer.",
      "suggestion": "Det å trenge hjelp kan kjennes risikabelt etter år med å være den som bærer alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      "text": "[Skyldpreget] En rotete kjøkkenbenk kan få meg til å føle at jeg har mislyktes som person.",
      "suggestion": "Når du krever så mye av deg selv, kan en ugjort oppgave vekke vond skuffelse. Det er plass til følelsen uten at en rotete benk må bli en dom over verdien din."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      "text": "[Sliten] Jeg sier til meg selv at andre mødre har det vanskeligere, så jeg burde være takknemlig i stedet for bitter.",
      "suggestion": "Andre mødre kan ha det vanskelig, og du kan likevel bli utslitt av det som kreves av deg. Frustrasjonen er forståelig. Takknemlighet trenger ikke oppheve den."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      "text": "[Unnskyldende] Jeg jobber meg gjennom sykdom, kollapser og får skyldfølelse for å kollapse.",
      "suggestion": "Når du er syk, kan det være vanskelig å fortsette med alt, så det er forståelig å trenge hvile. Utmattelsen fortjener omsorg. Den er ikke enda en feil du må beklage."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      "text": "[Panisk] Hvis noen virker skuffet, får jeg panikk som om jeg har ødelagt forholdet.",
      "suggestion": "Når et forhold betyr så mye, kan tanken på å skuffe noen være skremmende. Frykten er forståelig, selv om skuffelsen deres ikke nødvendigvis betyr at forholdet er ødelagt."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      "text": "[Splittet] Sønnen min snakker om å verve seg, og jeg blir stolt av ham og livredd, og så får jeg skyldfølelse fordi en god mor burde være modigere.",
      "suggestion": "Stolthet og redsel kan begge høre til i det samme øyeblikket; det at du elsker motet hans, opphever ikke frykten for hva motet kan koste ham."
    },
    "dp_empathic-affirmation-validation_case-aisha_01": {
      "text": "[Panisk] Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar. Hver gang det ble stille i gangen, tenkte jeg at nå bestemmer du deg kanskje for at jeg er for mye og går.",
      "suggestion": "Etter så mange brå avslutninger er det forståelig å frykte å bli forlatt igjen. Frykten fortjener omsorg. Du trenger ikke avfeie den fordi den viser seg her også."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      "text": "[Splittet] Jeg rev i stykker bilder etter bruddet og følte meg sterk i kanskje ett minutt, som om jeg kunne slette ham først. Så lå gulvet fullt av biter, og jeg kjente meg tom og skamfull.",
      "suggestion": "Det å rive bildene ga et øyeblikk av kontroll midt i uutholdelig smerte, og tomheten etterpå hører til det samme tapet, ikke en motsigelse."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      "text": "[Panisk] Noen ganger blir panikken så høy at jeg vil krype ut av huden min. Jeg går fram og tilbake, klorer på genserermene og finner ikke noe sted inni meg som kjennes trygt å bli værende i.",
      "suggestion": "Når panikken kjennes så uutholdelig, er det forståelig å ønske lettelse. Smerten fortjener omsorg. Du trenger ikke avfeie den eller bevise hvor sterk den er."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      "text": "[Panisk] Når du noterer, tenker jeg at du skriver bevis på at jeg er ustabil eller altfor dramatisk. Jeg vet at det kanskje ikke er rettferdig, men kroppen min vil løpe før du er ferdig med setningen.",
      "suggestion": "Å føle at du kan bli dømt eller feil fremstilt kan være skremmende. Frykten er forståelig og fortjener å bli hørt, uten at vi dermed vet hva som står i notatene."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      "text": "[Desperat] Jeg sender tjue meldinger fordi jeg trenger dem nær, og så blokkerer jeg dem før de kan gå. Etterpå hater jeg hvor trengende det ser ut, men i øyeblikket kjennes stillhet som å bli visket ut.",
      "suggestion": "Når stillhet kjennes som å bli visket ut, er det forståelig å ønske kontakt. Smerten og behovet fortjener omsorg, uten at en annen må være tilgjengelig hele tiden."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      "text": "[Redd og skamfull] Jeg vet at det ble gjort mot meg, men jeg føler meg fortsatt skitten i min egen hud. Noen ganger dusjer jeg og kjenner likevel at det er noe galt med meg fordi jeg var der.",
      "suggestion": "Å kjenne seg uren etter en krenkelse kan være et smertefullt traumespor; skammen hører til det som ble gjort mot deg, ikke til verdien din eller kroppen din."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      "text": "[Panisk] Når noen sier noe vennlig, hulker jeg som om jeg trenger det og får panikk som om det er en felle. Vennlighet burde kjennes godt, men det får meg til å føle meg blottstilt og sulten samtidig.",
      "suggestion": "Vennlighet kan kjennes som om den treffer både lengselen etter omsorg og frykten for å bli fanget av å trenge den etter at nærhet har vært så utrygg."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      "text": "[Rasende] Hvis du ser bort et sekund, føler jeg meg visket ut og blir rasende. Jeg vet at det er ett sekund, men inni meg kjennes det som om jeg forsvinner fra rommet og må kjempe meg tilbake.",
      "suggestion": "Å føle at du har forsvunnet fra oppmerksomheten min gjør vondt, selv om jeg bare så bort et øyeblikk. Det er forståelig at du blir såret og sint. Det er plass til følelsene her."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      "text": "[Skamfull] Jeg hører en stemme som sier at jeg er søppel og umulig å elske, og en del av meg tror på den. Den blir høyest etter at jeg har trengt noen, som om behovet i seg selv beviser at stemmen har rett.",
      "suggestion": "Å trenge nærhet er menneskelig, og det er forståelig at det gjør vondt å bli angrepet for det behovet. De harde ordene avgjør ikke hva du er verdt."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      "text": "[Desperat] Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig. De siste fem minuttene strammer brystet seg fordi jeg allerede prøver å overleve at du går.",
      "suggestion": "Når avslutninger har vært så skremmende, er det forståelig at de siste minuttene vekker frykt. Smerten fortjener plass, samtidig som timen fortsatt har en avtalt slutt."
    },
    "dp_empathic-affirmation-validation_case-david_01": {
      "text": "[Kontrollert] Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil heller argumentere med fakta. Hvis jeg blir værende i det følelsesmessige, begynner det å høres ut som en rettssak jeg allerede har tapt.",
      "suggestion": "Hvis samtalen kjennes som en rettssak du allerede har tapt, er det forståelig å føle seg presset opp i et hjørne. Ubehaget kan bli hørt uten at konas følelser må være en anklage."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      "text": "[Rasende] Etter at jeg skremte kona mi, var jeg fortsatt rasende på henne for at hun presset meg, og så kom skammen fordi jeg vet hvordan det høres ut. Jeg hater å innrømme den delen, for jeg vet at frykten hennes er ekte.",
      "suggestion": "Å føle seg presset i en krangel kan vekke sinne, og det er forståelig at det er skamfullt å innrømme det. Sinnet kan bli hørt uten å gi kona skylden for det eller unnskylde at du skremte henne."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      "text": "[Skamfull] Jeg sammenligner meg med andre fedre og føler meg som en bløff. De virker avslappet på skolearrangementer, og jeg står der og spiller kompetent mens jeg lurer på når noen gjennomskuer meg.",
      "suggestion": "Når det betyr noe for deg å være en god far, kan sammenligninger vekke vond tvil på deg selv. Usikkerheten er forståelig. At du kjenner den, betyr ikke at du lurer alle rundt deg."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      "text": "[Skamfull] Når jeg beklager, kjennes det som å gi noen bevis på at jeg er liten. Jeg kan vite at jeg skylder en unnskyldning og likevel kjenne ansiktet brenne, som om jeg har gitt bort den siste grunnen jeg hadde å stå på.",
      "suggestion": "En unnskyldning kan kjennes blottstillende når den både krever ansvar og treffer gammel ydmykelse over å bli gjort liten."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      "text": "[Avvisende] Jeg planlegger perfekte ferier så vi ser bra ut utenfra. Hvis bildene ser lykkelige nok ut, ser kanskje ingen hvor anspent middagen var eller hvor lite jeg vet hva jeg skal gjøre hjemme.",
      "suggestion": "Det kan gjøre vondt å ha det anspent hjemme uten at noen ser det i de glade bildene. Det er lov å ønske at strevet blir forstått. Her trenger ikke alt å se perfekt ut."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      "text": "[Redd] Tanken på å være ordinær skremmer meg, som om jeg forsvinner hvis jeg slutter å imponere. Jeg vet ikke hvem jeg er uten at noen må beundre resultatet.",
      "suggestion": "Når beundring har holdt selvfølelsen samlet, kan det ordinære kjennes som å forsvinne heller enn å hvile."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      "text": "[Skamfull] Jeg sier at det går fint mens jeg føler meg tom, fordi det kjennes ydmykende å innrømme tomheten. Jeg kan lede et møte og håndtere press, men å si at jeg føler meg tom får meg til å føle meg patetisk.",
      "suggestion": "Når du er vant til å vise at du mestrer ting, kan det kjennes sårbart å fortelle om tomhet. Ubehaget er forståelig. Tomheten fortjener oppmerksomhet fremfor forakt."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      "text": "[Avvisende] Jeg skryter for å få respekt, og så sitter jeg alene og føler meg tommere enn før. Rommet reagerer slik jeg ville, og av en eller annen grunn gjør det det verre når jeg er for meg selv.",
      "suggestion": "Det kan være vondt og skuffende å få beundringen du ønsket og fortsatt kjenne deg tom. Følelsen fortjener plass. Andres anerkjennelse betyr ikke at du må kjenne deg tilfreds inni deg."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      "text": "[Såret, men skarp] Jeg føler fortsatt at faren min sitter et sted og setter karakter på meg. Jeg kan være på mitt eget kontor, med min egen familie, og likevel høre karakteren før jeg vet hva jeg gjorde feil.",
      "suggestion": "Når du har kjent deg vurdert av faren din så lenge, er det forståelig at dommen hans fortsatt gjør vondt. Du trenger ikke avfeie smerten fordi du nå har ditt eget liv."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      "text": "[Kontrollert] Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt. Jeg vet at en god leder burde feire dem, men en del av meg hører suksessen deres som et varsel om at jeg kan erstattes.",
      "suggestion": "Hvis suksessen deres kjennes som en trussel mot plassen din, er det forståelig å bli redd selv om du ønsker å være stolt. Følelsene trenger ikke bestemme hvordan du behandler teamet."
    },
    "dp_empathic-affirmation-validation_case-marcus_01": {
      "text": "[Flatt] De fleste dager går jeg gjennom rutinene som om jeg ikke er helt til stede. Jeg lager kaffe, dusjer, svarer folk, og det føles som en versjon av meg gjør det mens resten holder seg tilbake.",
      "suggestion": "Etter det du har opplevd, fortjener strevet med å være helt til stede omsorg, ikke skyld. Nummenheten er ikke et bevis på at du ikke bryr deg om folk rundt deg."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      "text": "[Fortumlet] Jeg vet ikke hva jeg føler. Det er trykk, sinne og ingenting på samme tid, og jeg føler meg dum fordi jeg ikke har ord.",
      "suggestion": "Ordene kan forsvinne når trykk, sinne og nummenhet kommer samtidig; det å ikke vite hører til overveldelsen, ikke til dumhet."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      "text": "[Stille og på vakt] Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten. Motoren er av, men bilen kjennes i det minste som et sted mellom dagen og leiligheten.",
      "suggestion": "Hvis stillheten hjemme kjennes for mye å møte, er det forståelig å nøle før du går inn. Strevet fortjener oppmerksomhet fremfor kritikk for at du blir sittende i bilen."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      "text": "[Anspent] Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen. I går smalt lemmen på en lastebil utenfor, og jeg var allerede i gang med å skanne rommet før jeg visste hva som skjedde.",
      "suggestion": "Etter så mye fare er det forståelig å skvette av et høyt smell. Reaksjonen kan være slitsom å leve med, og du fortjener ikke å bli angrepet for at den kommer."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      "text": "[Lav stemme] Høytider kjennes hule; jeg føler ingenting av det jeg «burde» føle. Folk snakker om familie og takknemlighet, og jeg føler mest at jeg ser på gjennom et vindu.",
      "suggestion": "Når alle forventer varme og takknemlighet, kan avstanden du kjenner gjøre høytidene ensomme. Strevet er forståelig. Du trenger ikke produsere følelsene andre forventer."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg unngår påminnelser om tjenesten fordi de åpner slusene. Et nyhetsklipp eller en lyd i gata kan sende meg tilbake dit raskere enn jeg klarer å forklare.",
      "suggestion": "Når påminnelser sender deg tilbake dit så raskt, er det forståelig å være redd for dem. Smerten fortjener respekt, uten at du må forklare hver detalj for at den skal være virkelig."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      "text": "[Flatt] Jeg holder leiligheten mørk fordi lyse rom kjennes som om de krever for mye av meg. Med gardinene nede slipper jeg å se oppvasken, den tomme stolen eller meg selv like tydelig.",
      "suggestion": "Hvis det er for mye å se alt i leiligheten på én gang, er det forståelig å ønske mindre press. Strevet kan bli møtt uten å dømme deg for å holde gardinene trukket for."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      "text": "[Lav stemme] Jeg husker ikke sist jeg lo og stolte på at det kunne vare. Selv når noe er morsomt, merker jeg at jeg venter på at følelsen skal forsvinne.",
      "suggestion": "Når gode øyeblikk har vært usikre, er det forståelig å nøle med å stole på et. Det er plass til både gleden og frykten for å miste den. Ingen av dem gjør den andre falsk."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg vil ikke trenge noen, fordi det å trenge folk som regel har betydd å miste kontroll. Hvis noen betyr noe, kan de stille spørsmål, dra eller komme inn på steder jeg helst vil holde lukket.",
      "suggestion": "Når det å trenge noen har kjentes som å miste kontroll, er det forståelig at nærhet virker risikabelt. Behovet for privatliv og valgfrihet fortjener respekt, uten at du må avvise ethvert behov for støtte."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      "text": "[Flatt] Noen ganger tenker jeg at jeg har det best alene for alltid, fordi nærhet bare gir folk flere måter å såre meg på. Alene er ikke bra, akkurat, men da kan i hvert fall ingen nå det som er igjen.",
      "suggestion": "Etter å ha blitt såret i nære forhold er det forståelig å frykte å slippe noen nær igjen. Frykten fortjener å bli tatt på alvor, selv om det heller ikke er godt å være alene."
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
      "suggestion": "Hva kjenner du når noen er vennlige mot deg og du ikke vet hvordan du skal ta imot det?"
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
      "suggestion": "Hvordan kjennes det inni deg å være usikker foran teamet?"
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
      "suggestion": "Når den setningen dukker opp igjen nå, hva merker du inni deg?"
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
      "suggestion": "Hvordan kjennes det å være så avflatet akkurat nå?"
    },
    "dp_exploratory-questions_case-laura_02": {
      "text": "[Redd] Naboene kranglet i gangen, og jeg brukte resten av kvelden på å late som det ikke var noe.",
      "suggestion": "Rett under det å late som ingenting, hvilken følelse ligger nærmest?"
    },
    "dp_exploratory-questions_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er snille mot meg, blir jeg mistenksom og får dårlig samvittighet for å være mistenksom.",
      "suggestion": "Når vennlighet kommer og mistenksomheten følger etter, hva merker du først i deg selv?"
    },
    "dp_exploratory-questions_case-laura_04": {
      "text": "[Flatt og på vakt] Selv mild berøring på skulderen får meg til å skvette før jeg rekker å tenke hvem det er.",
      "suggestion": "Ved det første skvettet, hva kjenner du før tanken rekker inn?"
    },
    "dp_exploratory-questions_case-laura_05": {
      "text": "[Fjern] Om kvelden heller jeg opp vin før jeg har bestemt meg for om jeg egentlig vil ha det.",
      "suggestion": "I sekundet før vinen, hva er du på vei bort fra?"
    },
    "dp_exploratory-questions_case-laura_06": {
      "text": "[Anspent og på vakt] Jeg våkner og planlegger allerede hvordan jeg skal komme gjennom dagen uten å trenge noen.",
      "suggestion": "Hva kjenner du når du ser for deg å trenge noen i dag?"
    },
    "dp_exploratory-questions_case-laura_07": {
      "text": "[Langsomt og flatt] Gode nyheter lander flatt, og jeg skjønner ikke hvorfor jeg ikke klarer å glede meg.",
      "suggestion": "Når gode nyheter lander flatt, hvordan er flatheten fra innsiden?"
    },
    "dp_exploratory-questions_case-laura_08": {
      "text": "[Fjern] Noen ganger kommer det en sang fra da jeg var gift, og tristheten dukker opp før jeg rekker å slå den av.",
      "suggestion": "Før du slår av tristheten, hva ber den om?"
    },
    "dp_exploratory-questions_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg sier unnskyld for at jeg trenger trøst, som om det er noe jeg kan få kjeft for.",
      "suggestion": "Idet det å be om trøst kjennes farlig, hva merker du i deg selv?"
    },
    "dp_exploratory-questions_case-laura_10": {
      "text": "[Flatt og på vakt] Jeg hopper over alt med krangling og slåssing og sier til folk at jeg bare ikke liker slike filmer.",
      "suggestion": "Når du ser for deg å si den egentlige grunnen høyt, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-carlos_01": {
      "text": "[Defensiv] Når formannen stiller spørsmål ved meg foran gjengen, ler jeg det bort, men klarer ikke slippe det.",
      "suggestion": "Hva merker du inni deg når du tenker på at formannen stilte spørsmål ved deg?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      "text": "[Anspent] Etter en krangel går jeg og tenker på hva jeg burde ha sagt, selv når jeg vet at det bare gjør ting verre.",
      "suggestion": "Mens svarene fortsetter å komme, hva prøver de å svare på inni deg?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg, føles det som om folk slutter å respektere meg.",
      "suggestion": "Når respekt kjennes truet, hva kjenner du på det skarpeste stedet?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      "text": "[Skamfull] Jeg ser stadig for meg at gutten min rykket til da jeg hevet stemmen, og jeg vil ikke se rett på det.",
      "suggestion": "Når du holder bildet av at han rykket til i ett sekund, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      "text": "[Mistenksom] Når huset blir stille etter en krangel, blir jeg mer anspent enn da vi ropte.",
      "suggestion": "I stillheten etter krangelen, hva begynner å skje inni deg?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      "text": "[Anspent] Jeg sier at jeg ikke bryr meg om hva folk tenker, men ett blikk kan ødelegge hele dagen min.",
      "suggestion": "Hvor i deg merker du reaksjonen på det blikket?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      "text": "[Defensiv] Faren min pleide å si at følelser gjør menn ubrukelige, og jeg hører det fortsatt når kona mi ber meg snakke.",
      "suggestion": "Når du hører den gamle regelen nå, hva kjenner du mot deg selv?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      "text": "[Sint, med knyttede never] Når en annen mann snakker ned til meg, vet jeg ikke om jeg blir sint eller flau.",
      "suggestion": "Idet han snakker ned til deg, hva kommer først: sinne, flauhet eller noe annet?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      "text": "[Anspent og sint] Etter en krangel sier jeg til meg selv at jeg er ferdig med det, men jeg er fortsatt helt påskrudd i timevis.",
      "suggestion": "Etter at krangelen er over på utsiden, hva går fortsatt inni deg?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      "text": "[Sårbar] Det jeg vil mest, er at familien min skal føle seg trygg med meg.",
      "suggestion": "Med ordet trygg, hva skjer i deg rundt det ønsket?"
    },
    "dp_exploratory-questions_case-nina_01": {
      "text": "[Sliten] Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      "suggestion": "Når skyldfølelsen skyller inn, hva forteller den deg om deg selv?"
    },
    "dp_exploratory-questions_case-nina_02": {
      "text": "[Skyldpreget] Jeg klager over at ingen hjelper, men jeg gjør også ting om igjen når de prøver.",
      "suggestion": "Når hjelpen kommer på en måte du ikke kan styre, hva skjer inni deg?"
    },
    "dp_exploratory-questions_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg så mye at jeg nesten tar det tilbake.",
      "suggestion": "Idet neiet begynner å forsvinne, hva kjenner du i det øyeblikket?"
    },
    "dp_exploratory-questions_case-nina_04": {
      "text": "[Skyldpreget] Når jeg hviler, kaller en stemme meg lat før jeg har rukket å trekke pusten.",
      "suggestion": "Når ordet lat treffer, hvor kjenner du det mest?"
    },
    "dp_exploratory-questions_case-nina_05": {
      "text": "[Unnskyldende] Jeg sier unnskyld før jeg ber om hjelp, som om behovet mitt allerede er for mye.",
      "suggestion": "Når behovet kjennes for stort, hva skjer i måten du møter deg selv på?"
    },
    "dp_exploratory-questions_case-nina_06": {
      "text": "[Splittet] Utpå ettermiddagen skjønner jeg at jeg har sagt ja til tre ting jeg aldri hadde lyst til.",
      "suggestion": "Når ordene «jeg hadde ikke lyst» kommer, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-nina_07": {
      "text": "[Sliten] Jeg sammenligner meg med andre mødre og bestemmer meg for at jeg har strøket på en prøve alle andre forstår.",
      "suggestion": "I øyeblikket du bestemmer deg for at du strøk på prøven, hvilken følelse kommer?"
    },
    "dp_exploratory-questions_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      "suggestion": "Før egoist-stemmen kommer, hvordan er det å la noen ta vare på deg?"
    },
    "dp_exploratory-questions_case-nina_09": {
      "text": "[Splittet] Jeg sier at det er enklere om jeg gjør det selv, og så bruker jeg kvelden på å være sint for at ingen hjalp.",
      "suggestion": "Under sinnet etter å ha gjort det selv, hvilken følelse ligger der?"
    },
    "dp_exploratory-questions_case-nina_10": {
      "text": "[Sliten] Jeg krasjer på sofaen om kvelden etter å ha holdt alle sammen hele dagen.",
      "suggestion": "Når du slutter å holde alle sammen, hva møter du i deg selv?"
    },
    "dp_exploratory-questions_case-aisha_01": {
      "text": "[Panisk] Hvis et svar ikke kommer etter at jeg har åpnet meg, begynner jeg å tenke at jeg var dum som stolte på dem.",
      "suggestion": "Hvilken følelse kommer opp når det å stole på noen begynner å kjennes dumt?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      "text": "[Desperat] Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "Rett før det snur, hvilken følelse er for vond å holde seg nær?"
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
      "suggestion": "Hva kjenner du når du ser for deg at jeg avlyser en time?"
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
      "suggestion": "Når ros går over i mistenksomhet, hvilken følelse begynner å bevege seg inni deg?"
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
      "suggestion": "Når skyld og irritasjon ligger så tett, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-david_09": {
      "text": "[Flau] Jeg vil at noen skal legge merke til det jeg gjør uten at jeg må tigge om anerkjennelse.",
      "suggestion": "Når anerkjennelsen ikke kommer, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-david_10": {
      "text": "[Såret, men skarp] Jeg hater å være helt vanlig på jobb foran alle, som om det betyr at jeg har forsvunnet.",
      "suggestion": "Når «helt vanlig» begynner å kjennes som å forsvinne, hvilken følelse dukker opp?"
    },
    "dp_exploratory-questions_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "Når du beskriver den bølgen, hva merker du i deg selv nå?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      "text": "[Hyperårvåken] Etter mareritt vet jeg ikke hva som er virkelig nok til å snakke om, og hva jeg bør la ligge.",
      "suggestion": "Mens du avgjør hva du skal la ligge, hva skjer inni deg?"
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
      "suggestion": "Hva skjer inni deg når du ser for deg å svare på en av telefonene?"
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
      "suggestion": "Når nærhet begynner å kjennes som noe som koster, hvilken følelse dukker opp inni deg?"
    },
    "dp_providing-treatment-rationale_case-sara_01": {
      "text": "[Lavmælt] Burde jeg ikke bare fokusere på positive tanker i stedet for å grave i hvor trist jeg er?",
      "suggestion": "Du ønsker litt lettelse fra tristheten. Positive tanker kan hjelpe, og vi kan også lytte til det du sørger over og trenger. Vi kan ta det langsomt, uten å bruke hele timen på det vonde."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      "text": "[Flau] Hvorfor fortsetter du å spørre hva jeg føler når jeg bare trenger en plan for å komme meg gjennom uka?",
      "suggestion": "Vi kan lage en plan for uka. Å lytte til det som er vanskeligst, kan hjelpe oss å velge hva den skal inneholde: kanskje selskap, hvile eller støtte en vanskelig kveld. Følelsene hjelper oss å lage en plan som passer deg."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      "text": "[På gråten] Jeg blir flau over at jeg gråter over dette igjen. Hvordan skal det å gi tårene plass hjelpe meg videre?",
      "suggestion": "Tårene kan hjelpe oss å merke hva som fortsatt gjør vondt, og hva du trenger mens du finner deg til rette etter tapet. Du trenger ikke gråte for å gjøre terapien riktig. Vi kan gi tristheten plass og ta en pause når du trenger det."
    },
    "dp_providing-treatment-rationale_case-sara_04": {
      "text": "[Flau] Hvis avledning får meg gjennom de stille timene, hvorfor skal vi rote med det?",
      "suggestion": "Avledning hjelper deg gjennom de timene, og vi kan beholde det som fungerer. Vi kan også utforske litt av det som gjør stillheten vanskelig, så vi forstår hvilken støtte du trenger når avledning ikke er nok."
    },
    "dp_providing-treatment-rationale_case-sara_05": {
      "text": "[Bekymret] Hvordan hjelper det å snakke om et brudd når andre har større problemer?",
      "suggestion": "Dette bruddet påvirker livet ditt, selv om andre har andre problemer. Å utforske det som gjør vondt, kan hjelpe oss å forstå hva du trenger for å komme gjennom det. Du trenger ikke bevise at smerten er stor nok til å fortjene oppmerksomhet."
    },
    "dp_providing-treatment-rationale_case-sara_06": {
      "text": "[På gråten] Hvis vi snakker mer om ham, blir han ikke bare værende enda lenger i hodet mitt?",
      "suggestion": "Du er redd for at mer prat om ham skal gjøre det vanskeligere å slippe taket. Målet er å forstå hva som skjer i deg når du savner ham, fremfor å gå gjennom alle detaljer om ham. Da kan vi finne ut hva du trenger nå."
    },
    "dp_providing-treatment-rationale_case-sara_07": {
      "text": "[Nølende] Kan vi sette mål så jeg holder meg travel nok til å slippe å kjenne dette?",
      "suggestion": "Vi kan sette mål som gir dagen litt struktur. Jeg vil også forstå hva som skjer når tristheten kommer tilbake. Da kan vi velge aktiviteter og støtte som betyr noe for deg, uten at du må holde deg opptatt hele tiden."
    },
    "dp_providing-treatment-rationale_case-sara_08": {
      "text": "[Bekymret] Hva om «tom» er alt jeg har? Jeg vet ikke hvordan det kan bli nyttig.",
      "suggestion": "Vi kan begynne med «tom»; du trenger ikke et bedre ord. Å utforske når tomheten kommer og hvordan den kjennes, kan hjelpe oss å forstå hva du savner. Vi trenger ikke gjøre den om til en annen følelse."
    },
    "dp_providing-treatment-rationale_case-sara_09": {
      "text": "[Utålmodig] Jeg vil ha en tidslinje for når jeg slutter å sjekke profilen hans; ellers kjennes dette meningsløst.",
      "suggestion": "Du vil vite når dette vil endre seg. Jeg kan ikke gi deg en dato, men vi kan se på hva du håper å finne når du sjekker, og hvordan du har det etterpå. Å forstå det mønsteret kan hjelpe oss å finne andre måter å møte behovet på."
    },
    "dp_providing-treatment-rationale_case-sara_10": {
      "text": "[Bekymret] Hvordan er dette annerledes enn å fortelle om bruddet om og om igjen til jeg selv blir lei av å høre det?",
      "suggestion": "Du vil ikke fortsette å gjenta den samme historien. Vi kan stoppe ved et øyeblikk som fortsatt gjør vondt, og utforske hva det betyr for deg nå. Målet er å forstå hva du trenger, ikke å gå gjennom alle detaljer om bruddet på nytt."
    },
    "dp_providing-treatment-rationale_case-michael_01": {
      "text": "[Skeptisk] Jeg kom for sinnekontroll, ikke følelsesprat. Hvordan stopper dette meg fra å eksplodere?",
      "suggestion": "Du vil få slutt på utbruddene. Vi kan se nærmere på det som skjer rett før stemmen blir høy, og legge merke til følelsene som er der. Å kjenne igjen det øyeblikket kan gi deg mer rom til å velge hvordan du svarer."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      "text": "[Defensiv] Er ikke det å lete etter utløseren bare å bortforklare at jeg eksploderer?",
      "suggestion": "Å forstå hva som setter i gang sinnet, fritar deg ikke for ansvar for det du gjør. Det kan hjelpe oss å merke reaksjonen tidligere og jobbe med en annen måte å svare på. Målet er å endre det du gjør, ikke bortforklare det."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      "text": "[Anspent] Hvorfor bremse når folk ser på og jeg må virke som om jeg har kontroll?",
      "suggestion": "Du vil fremstå som om du har kontroll når andre ser på. En kort pause kan gi deg tid til å merke hva som traff deg, før du svarer. Vi kan øve på en pause som hjelper deg å svare tydelig uten å heve stemmen."
    },
    "dp_providing-treatment-rationale_case-michael_04": {
      "text": "[Bekymret] Hvordan hjelper det å nærme meg skam hvis kona mi eller teamet mitt ser det som svakhet?",
      "suggestion": "Du er redd for å miste respekt hvis du viser skam. Å utforske den her kan hjelpe deg å forstå hva som skjer når du kjenner deg utsatt. Du trenger ikke fortelle kona eller teamet om den for å jobbe med hvordan du svarer."
    },
    "dp_providing-treatment-rationale_case-michael_05": {
      "text": "[Utfordrende] Kan vi hoppe over følelsene og bare lage et verktøy for når brystet blir varmt?",
      "suggestion": "Vi kan jobbe med noe du kan bruke når det blir varmt i brystet. Å forstå hva du kjenner da, hjelper oss å velge et nyttig svar: kanskje å stoppe opp, sette en grense eller si hva som plaget deg. Vi trenger ikke begynne med en lang forklaring."
    },
    "dp_providing-treatment-rationale_case-michael_06": {
      "text": "[Bekymret] Hvordan hjelper det meg å lede at jeg merker stram kjeve når et møte blir spent?",
      "suggestion": "Du vil håndtere et anspent møte godt. Når kjeven strammer seg, kan det være et signal om å stoppe opp og merke hva som skjer før du svarer. Poenget er å forstå reaksjonen tidlig nok til å velge et svar som passer situasjonen."
    },
    "dp_providing-treatment-rationale_case-michael_07": {
      "text": "[Bekymret] Hva om jeg eksploderer etter alt dette og alle sier at terapien mislyktes?",
      "suggestion": "Et nytt utbrudd ville være viktig å ta på alvor, også hvordan det påvirket andre. Da ville vi ha noe konkret å gå gjennom: hva som skjedde før det, hva du merket, og hvor du kunne ha svart annerledes. Det hjelper oss å velge hva vi skal jobbe med videre."
    },
    "dp_providing-treatment-rationale_case-michael_08": {
      "text": "[Bekymret] Hvordan skal mer prat bevise for kona mi at jeg kan slutte å eksplodere?",
      "suggestion": "Kona di trenger å se endringer i det du gjør. Å utforske sinnet kan hjelpe oss å forstå hvordan det bygger seg opp, og øve på å svare annerledes. Så kan vi se ærlig på om utbruddene blir færre, og om du tar ansvar når et skjer."
    },
    "dp_providing-treatment-rationale_case-michael_09": {
      "text": "[Utfordrende] Vil dette endre hvordan teamet ser meg, eller bare få meg til å analysere meg selv?",
      "suggestion": "Du vil at arbeidet skal gjøre en forskjell i måten du leder på. Å forstå hva som skjer når du føler deg utfordret, kan hjelpe oss å øve på en annen tone eller et annet svar. Vi kan vurdere nytten ut fra det som endrer seg med teamet, ikke hvor mye du kan analysere."
    },
    "dp_providing-treatment-rationale_case-michael_10": {
      "text": "[Flau] Hva skal jeg gjøre hvis jeg ikke er god på følelser og ikke har ord?",
      "suggestion": "Du trenger ikke være flink til å beskrive følelser for å begynne. Vi kan bruke noe du allerede merker, som varme eller en stram kjeve, og utforske hva som skjer rundt det. De tegnene kan hjelpe oss å forstå reaksjonen før du har et navn på den."
    },
    "dp_providing-treatment-rationale_case-jason_01": {
      "text": "[Skeptisk] Hjelper dette faktisk sosial angst, eller lærer jeg bare å stirre på frykten?",
      "suggestion": "Du vil vite hvordan dette hjelper utenfor terapirommet. Vi kan utforske hva som kjennes truende når folk ser på deg, og øve på å være i litt av den følelsen om gangen. Målet er at det å snakke skal bli mindre av en kamp med deg selv."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      "text": "[Blank] Hva om jeg blir blank her også og kaster bort hele timen?",
      "suggestion": "Hvis det blir tomt, er det noe vi kan prøve å forstå, ikke en mislykket time. Vi kan senke tempoet og merke hva som skjer når ordene forsvinner. Da kan vi finne en måte å støtte deg på uten å øke presset om å snakke."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      "text": "[Engstelig] Det er tankene som ødelegger alt, så hvorfor spør du stadig om brystet mitt?",
      "suggestion": "Tankene er viktige. Jeg spør om brystet fordi kroppslige fornemmelser kan gi oss et annet tegn på det du opplever. Vi kan utforske begge deler og se hva som hjelper deg å kjenne igjen angsten og det du trenger da."
    },
    "dp_providing-treatment-rationale_case-jason_04": {
      "text": "[Bekymret] Når jeg legger merke til frykten, blir den sterkere, så hvorfor skulle jeg øve på det?",
      "suggestion": "Du merker at frykten blir sterkere når du retter oppmerksomheten mot den. Det må vi ta på alvor og tilpasse tempoet. Målet er å forstå litt av det du opplever, med rom for å stoppe opp, uten at du må holde ut mer frykt."
    },
    "dp_providing-treatment-rationale_case-jason_05": {
      "text": "[Nølende] Kan vi ikke bare lage et manus for hva jeg skal si før møter, så jeg ikke stivner?",
      "suggestion": "Vi kan forberede en setning til møtene. Jeg vil også forstå hva som skjer når du stivner, for da er det ikke alltid nok å ha ordene klare. Vi kan øve på setningen samtidig som vi merker hva som hjelper deg å være til stede."
    },
    "dp_providing-treatment-rationale_case-jason_06": {
      "text": "[Engstelig] Hvor lenge tar det før jeg kan snakke i møter uten at kroppen tar over?",
      "suggestion": "Jeg kan ikke love hvor lang tid det tar. Vi kan jobbe med å kjenne igjen det som skjer når oppmerksomheten vendes mot deg, og se etter endringer sammen: å være til stede litt lenger eller komme seg lettere etterpå. Det betyr noe også før angsten er borte."
    },
    "dp_providing-treatment-rationale_case-jason_07": {
      "text": "[Flau] Jeg synes det er pinlig å snakke om at jeg er så redd; hvordan skal det hjelpe å si det høyt?",
      "suggestion": "Å si det høyt kan hjelpe oss å forstå frykten sammen, så du slipper å håndtere den alene. Du kan fortelle litt og merke hvordan det er å bli hørt. Vi trenger ikke presse videre hvis det blir for flaut."
    },
    "dp_providing-treatment-rationale_case-jason_08": {
      "text": "[Bekymret] Hva gjør jeg faktisk når stemmen som sier «du er klein» starter?",
      "suggestion": "Vi kan legge merke til hva den stemmen sier og hvordan den påvirker deg, og så øve på et svar du kan tro på. Målet er å gi deg noe å støtte deg til når kritikken begynner, uten at du må vinne en diskusjon med den."
    },
    "dp_providing-treatment-rationale_case-jason_09": {
      "text": "[Nølende] Må jeg alltid jobbe så hardt bare for å snakke som alle andre?",
      "suggestion": "Du ønsker at det skal kreve mindre å snakke. Jeg kan ikke love hvor raskt det vil skje. Vi kan jobbe med frykten og selvkritikken og se etter endringer, som å si litt mer eller komme seg lettere etter en vanskelig samtale."
    },
    "dp_providing-treatment-rationale_case-jason_10": {
      "text": "[Stille] Hvorfor øve på øyekontakt når det kjennes som folk kan se alt som er galt med meg?",
      "suggestion": "Blikkontakt er ikke et krav. Hvis det å bli sett er noe du vil jobbe med, kan vi utforske hva som gjør det så ubehagelig, og velge et lite steg sammen. Målet er større frihet til å ha kontakt, ikke at du må se på folk på en bestemt måte."
    },
    "dp_providing-treatment-rationale_case-laura_01": {
      "text": "[Bekymret] Hvis dette er hjernekjemi, hvorfor skulle det endre noe å snakke med deg?",
      "suggestion": "Du lurer på om samtaler kan hjelpe hvis det også er noe biologisk som spiller inn. Vi trenger ikke velge bare én forklaring. Her kan vi utforske opplevelsen din og hva som hjelper deg å være mer til stede og i kontakt med andre, ved siden av eventuell medisinsk oppfølging."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      "text": "[Langsomt og flatt] Hvordan vet jeg at dette ikke får meg til å gjenoppleve traumer når jeg allerede forsvinner?",
      "suggestion": "Du vet allerede hvor lett du kan kjenne deg langt borte. Vi kan begynne med det du merker nå, uten å be deg gjenoppleve traumet. Små steg og pauser hjelper oss å finne et tempo du kan være med på, og vi kan tilpasse det hvis det blir for mye."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      "text": "[Langsomt og flatt] Hvis jeg blir nummen før jeg kan føle noe, hva er det egentlig vi jobber med?",
      "suggestion": "Nummenheten er noe vi kan utforske uten å bestemme hvorfor den er der. Vi kan merke når den endrer seg, hva som skjer rett før, og hva som hjelper deg å være til stede. Det gir oss et sted å begynne uten å presse frem en følelse."
    },
    "dp_providing-treatment-rationale_case-laura_04": {
      "text": "[Bekymret] Hva om vennligheten din gjør meg mer mistenksom i stedet for tryggere?",
      "suggestion": "Da trenger mistanken også plass i samtalen. Å forstå hva som er vanskelig å stole på, kan hjelpe oss å finne en måte å jobbe sammen på. Du trenger ikke kjenne deg tryggere bare fordi jeg er vennlig, eller presse deg til å stole på meg."
    },
    "dp_providing-treatment-rationale_case-laura_05": {
      "text": "[Nølende] Kommer dette til å dra opp ting jeg ikke tåler og gjøre meg verre etterpå?",
      "suggestion": "Du er redd for hvordan du vil ha det etterpå. Vi kan avtale hva vi lar ligge, begynne med litt og høre hvordan du har det før timen slutter. Det betyr også noe hvordan du har det etterpå. Det hjelper oss å tilpasse arbeidet, fremfor å presse videre."
    },
    "dp_providing-treatment-rationale_case-laura_06": {
      "text": "[Langsomt og flatt] Hvorfor jakte på bittesmå signaler hvis jeg stenger ned før jeg kan bruke dem?",
      "suggestion": "Du er redd du skal stenge av før noe av dette hjelper. Små tegn kan gjøre det lettere å merke når arbeidet blir for mye, så vi kan senke tempoet eller stoppe tidligere. Vi prøver å finne et tempo du kan være med på."
    },
    "dp_providing-treatment-rationale_case-laura_07": {
      "text": "[Langsomt og flatt] Hvordan skal prat endre denne flatheten når jeg knapt kjenner noe?",
      "suggestion": "Vi kan begynne med selve flatheten: hvordan den kjennes, når den endrer seg, og hvordan den påvirker dagene dine. Målet er å forstå opplevelsen din og finne det som hjelper deg å kjenne mer kontakt. Du trenger ikke fremkalle en sterk følelse for at arbeidet skal telle."
    },
    "dp_providing-treatment-rationale_case-laura_08": {
      "text": "[Langsomt og flatt] Hvordan skal jeg vite at dette virker når jeg fortsatt er nummen de fleste dager?",
      "suggestion": "Vi kan se etter endringer som betyr noe for deg, selv om nummenheten fortsatt er der: et øyeblikk med interesse, litt mindre anstrengelse med noen som står deg nær, eller å klare å være til stede litt lenger. Det hjelper oss å vurdere sammen om arbeidet er nyttig."
    },
    "dp_providing-treatment-rationale_case-laura_09": {
      "text": "[Nølende] Kan vi ikke bare snakke om praktiske ting så jeg slipper å kjenne alt dette?",
      "suggestion": "Vi kan snakke om praktiske ting. Jeg vil også forstå hva som gjør det vanskelig å nærme seg følelsene, så en plan tar hensyn til det. Vi kan begynne med hverdagen uten å be deg gå inn i vonde minner."
    },
    "dp_providing-treatment-rationale_case-laura_10": {
      "text": "[Bekymret] Hva om jeg stivner her inne og du bare sitter og venter på et svar?",
      "suggestion": "Hvis du stivner, vil jeg ikke øke presset ved å vente på et svar. Vi kan stoppe opp og finne hva som hjelper deg å merke rommet eller stemmen min. Å forstå de øyeblikkene er en del av å finne en måte å jobbe sammen på som du kan være til stede i."
    },
    "dp_providing-treatment-rationale_case-carlos_01": {
      "text": "[Defensiv] Kommer dette til å gjøre meg myk? Folk må fortsatt vite at de ikke skal kødde med meg.",
      "suggestion": "Du vil kunne stå opp for deg selv. Å forstå følelsene dine betyr ikke å gi fra deg grensene dine. Det kan hjelpe deg å være tydelig uten å bruke sinne til å skremme folk eller miste det du vil si av syne."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      "text": "[Anspent] Hvorfor snakke om følelser i stedet for å gi meg verktøy jeg kan bruke når jeg blir opphetet?",
      "suggestion": "Vi kan jobbe med noe du kan bruke når sinnet stiger. Å forstå hva du kjenner rett før, hjelper oss å velge hva vi skal øve på, som å trekke deg unna eller si hva som plaget deg. Poenget er å bruke den forståelsen til å handle annerledes."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      "text": "[Anspent og sint] Hvordan hjelper dette når noen viser meg manglende respekt foran familien min?",
      "suggestion": "Du vil kunne svare når noen er respektløse mot deg. Å utforske det som skjer inni deg, kan hjelpe oss å skille det du vil si, fra trangen til å slå tilbake. Så kan vi øve på et tydelig svar som ikke skremmer eller skader noen."
    },
    "dp_providing-treatment-rationale_case-carlos_04": {
      "text": "[Skeptisk] Hvordan skal det å kjenne mer hindre meg i å miste brodden og bli overkjørt?",
      "suggestion": "Du er redd for at det å forstå følelsene dine betyr å gi fra deg styrken din. Målet er å hjelpe deg å kjenne igjen det som betyr noe, og sette en tydelig grense, samtidig som du tar ansvar for hvordan du behandler andre. Vi kan jobbe med å være tydelig uten å skremme."
    },
    "dp_providing-treatment-rationale_case-carlos_05": {
      "text": "[Defensiv] Hvis sinne er det som beskytter meg, hvorfor skal jeg bruke terapi på å kjenne det som ligger under?",
      "suggestion": "Sinnet kjennes beskyttende, og du vil beholde den beskyttelsen. Å utforske hva som setter det i gang, kan hjelpe oss å forstå hva du trenger å stå opp for. Vi kan jobbe med å ivareta grensene dine uten at sinnet fører til skade."
    },
    "dp_providing-treatment-rationale_case-carlos_06": {
      "text": "[Anspent] Hvordan skal pust bety noe når jeg allerede er to sekunder fra å smelle?",
      "suggestion": "Når du er så nær ved å eksplodere, er det ikke sikkert at pust alene er nok. Vi trenger også å forstå hvordan trykket bygger seg opp før det punktet. Å merke de tidligere tegnene kan hjelpe deg å trekke deg unna før noen blir skremt eller skadet."
    },
    "dp_providing-treatment-rationale_case-carlos_07": {
      "text": "[Anspent og sint] Hvordan krever jeg respekt uten å oppføre meg som om noen kan tråkke på meg?",
      "suggestion": "Vi kan jobbe med å si tydelig hva du vil og ikke vil godta. Å forstå følelsen bak behovet for respekt hjelper oss å finne ord for det. Målet er en grense du kan stå ved uten å true."
    },
    "dp_providing-treatment-rationale_case-carlos_08": {
      "text": "[Defensiv] Jeg lærte at du må slå først, så hvorfor skulle det hjelpe å bremse?",
      "suggestion": "Du lærte å slå først når du ventet fare. Nå trenger vi måter å svare på som ikke skader folk. Å senke tempoet lar oss undersøke det som kjennes truende, og øve på en annen handling, som å trekke deg unna før du slår."
    },
    "dp_providing-treatment-rationale_case-carlos_09": {
      "text": "[Skyldpreget] Barnet mitt så meg sint. Hvordan hjelper det ham at jeg snakker om følelser?",
      "suggestion": "Prat alene kan ikke gjøre om på det barnet ditt så. Å forstå hvordan sinnet bygger seg opp, kan hjelpe deg å jobbe med å endre det som skjer hjemme. Det innebærer også å ta ansvar overfor barnet, uten å be barnet få deg til å føle deg bedre."
    },
    "dp_providing-treatment-rationale_case-carlos_10": {
      "text": "[Defensiv] Hvordan unngår vi at dette blir årevis med prat mens familien min venter?",
      "suggestion": "Du vil at familien skal se endring snart. Vi kan rette arbeidet mot situasjonene der sinnet gjør mest skade, forstå det som skjer før, og øve på et annet svar. Vi trenger også å se på hva som faktisk endrer seg hjemme, fremfor å anta at prat er nok."
    },
    "dp_providing-treatment-rationale_case-nina_01": {
      "text": "[Skyldpreget] Er det ikke egoistisk å fokusere på følelsene mine når alle trenger noe fra meg?",
      "suggestion": "Det kjennes egoistisk å vende oppmerksomheten mot dine egne følelser. De kan hjelpe oss å merke behovene og grensene dine, også når du er utslitt. Å gi dem plass er en del av å finne måter å ta vare på andre uten å slite deg helt ut."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      "text": "[Unnskyldende] Hva hjelper det å legge merke til kroppen når skylden treffer før jeg rekker å tenke?",
      "suggestion": "Å legge merke til kroppen gir oss en annen måte å kjenne igjen skylden på, også når den kommer før en tydelig tanke. Det kan hjelpe oss å stoppe opp og forstå hva du trenger, før du bestemmer om du skal si ja. Vi kan begynne med det du allerede merker."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      "text": "[Bekymret] Hvordan skal følelsesarbeid hjelpe når jeg trenger konkrete steg før jeg drukner?",
      "suggestion": "Du trenger at noe endrer seg i hverdagen. Å lytte til følelsene dine kan hjelpe oss å forstå hvor belastningen blir for stor, og hvilken støtte eller grense du trenger. Vi kan bruke det til å velge ett konkret steg, fremfor å gi deg enda en liste å håndtere."
    },
    "dp_providing-treatment-rationale_case-nina_04": {
      "text": "[Bekymret] Hvordan hjelper det å fokusere på skyld når jeg allerede får dårlig samvittighet av å si nei?",
      "suggestion": "Målet er ikke å gi deg mer skyldfølelse. Vi kan utforske hva det å si nei ser ut til å bety om deg, og om skylden passer med det du faktisk ber om. Det hjelper oss å jobbe med en grense du kan stå ved, selv om skylden fortsatt er der."
    },
    "dp_providing-treatment-rationale_case-nina_05": {
      "text": "[Bekymret] Hvis folk kan forlate meg når jeg slutter å hjelpe, hvordan hjelper det å navngi behov?",
      "suggestion": "Å sette ord på behovene dine kan ikke garantere at noen blir. Det hjelper oss å forstå hva du ønsker fra forholdet, hva du frykter, og hvem som kan møte deg. Vi kan se på det sammen før du bestemmer hva du vil be om."
    },
    "dp_providing-treatment-rationale_case-nina_06": {
      "text": "[Nølende] Kan vi bare fikse timeplanen min? Å snakke om behov høres ut som enda en oppgave.",
      "suggestion": "Du vil ha mindre å gjøre, ikke enda en oppgave. Vi kan se på timeplanen sammen. Å lytte til behovene dine hjelper oss å finne ut hva som faktisk må endres, fremfor å gjøre deg flinkere til å få plass til alt."
    },
    "dp_providing-treatment-rationale_case-nina_07": {
      "text": "[Bekymret] Hva om det alltid føles feil å si nei, uansett hvor mye vi snakker?",
      "suggestion": "Du trenger ikke vente til det kjennes lett å si nei. Vi kan forstå hva som vekker skylden, og øve på en liten grense som passer behovene og ansvaret ditt. Målet er større valgfrihet, også mens følelsen er der."
    },
    "dp_providing-treatment-rationale_case-nina_08": {
      "text": "[Bekymret] Hvordan blir det lettere å be om hjelp når det å trenge noe kjennes som for mye?",
      "suggestion": "Vi kan begynne med en liten, konkret forespørsel og merke hva som gjør det vanskelig å be. Det hjelper oss å forstå skammen og velge noen det er rimelig å vende seg til. Du trenger ikke be om alt på én gang."
    },
    "dp_providing-treatment-rationale_case-nina_09": {
      "text": "[Skyldpreget] Hvis jeg fokuserer på behov, blir jeg ikke den trengende personen jeg misliker?",
      "suggestion": "Du er redd for at det å ha behov skal gjøre deg til en du misliker. Å utforske dem kan hjelpe deg å velge hva du vil be om og hvor du trenger en grense, før du blir helt utslitt. Du kan verdsette omsorg for andre og samtidig gi deg selv plass."
    },
    "dp_providing-treatment-rationale_case-nina_10": {
      "text": "[Sliten] Hvordan skal jeg vite at dette faktisk hjelper og ikke bare gjør meg mer selvopptatt?",
      "suggestion": "Vi kan se etter endringer du selv ønsker: å be mer direkte om hjelp, få litt hvile eller si nei når du er utslitt. Det hjelper oss å se om oppmerksomheten mot følelsene dine gjør en forskjell i hverdagen."
    },
    "dp_providing-treatment-rationale_case-aisha_01": {
      "text": "[Bekymret] Hva om det å snakke om å bli forlatt gjør at jeg vil skade meg igjen før jeg klarer å stoppe det?",
      "suggestion": "Den frykten må vi ta på alvor før vi går inn i det vonde. Først trenger jeg å forstå om du kan komme til å skade deg selv nå. Så kan vi avtale støtte og tempo. Å utforske følelser skal ikke bety å presse deg lenger enn du kan håndtere."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      "text": "[Desperat] Jeg trenger at du lover at du aldri forlater meg, ellers ser jeg ikke hvordan dette skal hjelpe.",
      "suggestion": "Du trenger å vite hva du kan stole på. Jeg kan ikke love aldri å forlate deg, men jeg kan være tydelig om timene våre, kontakt og en eventuell avslutning. Å utforske hva de grensene vekker, kan hjelpe oss å planlegge støtte til de vanskeligste tidene."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      "text": "[Panisk] Hvis du avlyser, hvordan skal det å navngi alarmen stoppe meg fra å gjøre noe drastisk?",
      "suggestion": "Å sette ord på frykten er ikke nok alene. Når du sier «noe drastisk», mener du å skade deg selv eller ta livet ditt? Det trenger vi å forstå først. Så kan vi avtale hvilken støtte du kan bruke hvis en time blir avlyst."
    },
    "dp_providing-treatment-rationale_case-aisha_04": {
      "text": "[Bekymret] Hva om følelsene mine er for mye for enhver terapeut å jobbe med?",
      "suggestion": "Du er redd følelsene vil bli for mye, også her. Vi kan begynne med litt og merke hva som hjelper eller gjør det vanskeligere. Det hjelper oss å velge tempoet og støtten du trenger, fremfor å be deg ta frem alt på én gang."
    },
    "dp_providing-treatment-rationale_case-aisha_05": {
      "text": "[Panisk] Når jeg har panikk, hvorfor spørre om føtter og pust i stedet for bare å roe meg ned?",
      "suggestion": "Jeg prøver å hjelpe deg å merke noe i rommet mens panikken er sterk. Stolen eller gulvet kan gi deg noe å vende oppmerksomheten tilbake til. Vi kan se om det hjelper. Hvis det blir verre av å fokusere på pusten, trenger vi ikke gjøre det."
    },
    "dp_providing-treatment-rationale_case-aisha_06": {
      "text": "[Desperat] Hvordan hjelper det å jobbe med behovet når jeg vil ha beroligelse fra deg med én gang?",
      "suggestion": "Bekreftelse kjennes akutt, og du ønsker noe som hjelper utover dette øyeblikket. Vi kan utforske det som skjer når du frykter å miste kontakten, og øve på å be om støtte innenfor tydelige grenser. Målet er å finne flere måter å håndtere det på enn bekreftelse fra meg alene."
    },
    "dp_providing-treatment-rationale_case-aisha_07": {
      "text": "[Panisk] Hvis vi fokuserer på denne relasjonen, blir jeg ikke knyttet og faller fra hverandre når den tar slutt?",
      "suggestion": "Du er redd for å bli knyttet og så måtte møte en avslutning. Vi kan snakke åpent om forholdet vårt og grensene fra starten. Å forstå hva nærhet og avskjed vekker, hjelper oss å planlegge arbeidet og en avslutning, fremfor å la den frykten bli usagt."
    },
    "dp_providing-treatment-rationale_case-aisha_08": {
      "text": "[Bekymret] Hvordan skal dette hjelpe relasjonene mine å ikke eksplodere når jeg går fra å trygle til å skyve bort?",
      "suggestion": "Vi kan utforske det som skjer rett før du går fra å be noen bli til å skyve dem unna. Å forstå følelsene da hjelper oss å øve på å si mer direkte hva du trenger, eller ta en pause før samtalen blir en krangel."
    },
    "dp_providing-treatment-rationale_case-aisha_09": {
      "text": "[Nølende] Kommer dette til å ta evigheter, eller kommer jeg alltid til å være så intens?",
      "suggestion": "Du vil vite om noe kan endre seg, og hvor lang tid det vil ta. Jeg kan ikke love en tidsplan. Vi kan se etter endringer som betyr noe for deg, som å komme gjennom en avskjed med mer støtte eller komme seg lettere etter en vanskelig samtale."
    },
    "dp_providing-treatment-rationale_case-aisha_10": {
      "text": "[Mistenksom] Hver grense fra en terapeut høres ut som avstand, så hvorfor skulle jeg stole på dette?",
      "suggestion": "Du hører en grense som avstand, så det ville overse frykten å bare be deg stole på den. Vi kan utforske hva hver grense betyr for deg, samtidig som jeg er tydelig på hva jeg kan tilby. Det hjelper oss å gjøre arbeidet mer forutsigbart uten å love at frykten forsvinner."
    },
    "dp_providing-treatment-rationale_case-david_01": {
      "text": "[Kontrollert] Hvorfor fokusere på følelser når jeg trenger resultater folk faktisk kan se?",
      "suggestion": "Du vil se endringer i hverdagen. Følelser er en del av det som skjer før du trekker deg unna eller svarer skarpt. Å forstå de øyeblikkene kan hjelpe deg å velge hvordan du svarer, og vi kan se sammen om det gjør en forskjell hjemme og på jobb."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      "text": "[Skeptisk] Hvordan er dette praktisk hvis jeg ikke vil bli psykoanalysert eller redusert til barndommen min?",
      "suggestion": "Vi holder det praktisk ved å starte med øyeblikkene du vil endre nå. Historien tas bare inn hvis den hjelper oss å forstå hvorfor en reaksjon blir så rask eller sterk, slik at arbeidet fortsatt handler om stødigere valg i dag."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      "text": "[Utfordrende] Hjelper dette ekteskapet mitt, eller handler det bare om meg?",
      "suggestion": "Svarene dine er en del av det som skjer mellom deg og kona di. Å utforske hva du kjenner før du trekker deg unna eller snakker skarpt, kan hjelpe deg å velge et annet svar. Vi kan se om det endrer samtalene, uten å anta at arbeidet ditt alene vil ordne ekteskapet."
    },
    "dp_providing-treatment-rationale_case-david_04": {
      "text": "[Kontrollert] Jeg kan teorien allerede. Hvorfor bruke tid på følelser i stedet for å fikse atferd?",
      "suggestion": "Å kjenne teorien og å merke reaksjonen din i øyeblikket er to forskjellige ting. Vi kan se nærmere på det du kjenner rett før det du vil endre. Da får vi noe konkret å øve på, utover å vite hvordan det burde fungere."
    },
    "dp_providing-treatment-rationale_case-david_05": {
      "text": "[Såret, men skarp] Følelsene mine er problemet. Hvorfor skal vi fokusere på det som ødelegger alt?",
      "suggestion": "Du ser hvor mye skade reaksjonene gjør. Å utforske følelsene kan hjelpe oss å forstå hva som skjer før de blir til tilbaketrekning eller skarpe ord. Målet er å gi deg større valgfrihet i hva du gjør med følelsen, ikke å gjøre den sterkere."
    },
    "dp_providing-treatment-rationale_case-david_06": {
      "text": "[Kravstor] Jeg trenger sinnekontroll, ikke et dypdykk i hva jeg føler under det.",
      "suggestion": "Du vil hindre at sinnet gjør skade. Vi kan jobbe direkte med det, også med det som skjer før et utbrudd. Å se på følelsene som er der, er en måte å kjenne igjen oppbyggingen tidligere på. Du trenger ikke fortelle alt på én gang."
    },
    "dp_providing-treatment-rationale_case-david_07": {
      "text": "[Utfordrende] Kan vi hoppe over barndomsprat og holde oss til det som skjer nå?",
      "suggestion": "Ja, vi kan holde oss til nåtiden. Vi navngir bare tidligere mønstre hvis de viser seg i reaksjonene dine i dag, slik at historien tjener endring i stedet for å bli en omvei."
    },
    "dp_providing-treatment-rationale_case-david_08": {
      "text": "[Bekymret] Hva om jeg ikke føler noe når du ber meg se innover?",
      "suggestion": "Å ikke kjenne noe er et sted å begynne, ikke en mislykket øvelse. Vi kan utforske hvordan det er, og om du merker en liten endring mens vi snakker. Hensikten er å forstå opplevelsen din uten å kreve en følelse du ikke har."
    },
    "dp_providing-treatment-rationale_case-david_09": {
      "text": "[Kravstor] Jeg trenger raske gevinster; jeg vil ikke inn i enda et endeløst innsiktsprosjekt.",
      "suggestion": "Du vil at noe skal endre seg snart. Vi kan velge én situasjon der reaksjonen din skaper problemer, og jobbe med det du kjenner før det skjer. Så kan vi se om et annet svar hjelper, fremfor å måle fremgang bare i innsikt."
    },
    "dp_providing-treatment-rationale_case-david_10": {
      "text": "[Kontrollert] Hvordan vet jeg at dette er verdt det og ikke bare enda et innsiktsprosjekt?",
      "suggestion": "Vi bruker konkrete tegn, fordi innsikt alene ikke er nok: at du trekker deg mindre unna i vanskelige samtaler, gjør det godt igjen raskere når du sårer noen, og klarer å være til stede litt lenger når skammen vekkes."
    },
    "dp_providing-treatment-rationale_case-marcus_01": {
      "text": "[Flatt] Prat endrer ikke det som skjedde, så hvorfor åpne døra til det?",
      "suggestion": "Du har rett i at samtaler ikke kan endre det som skjedde. Målet er å hjelpe med hvordan det påvirker livet ditt nå. Vi kan begynne med det du merker i dag, uten å be deg fortelle om det verste fra fortiden."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      "text": "[Langsomt og flatt] Jeg vil ikke bli oversvømt; når jeg mister kontrollen, forsvinner jeg i flere dager.",
      "suggestion": "Det at du mister dager, må vi ta på alvor. Vi kan begynne med det som hjelper deg å være til stede, og avtale når vi stopper opp. Målet er å forstå litt av opplevelsen din i et håndterbart tempo, ikke presse deg gjennom et minne."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      "text": "[Langsomt og flatt] Følelser er problemet. Når jeg kjenner dem, drikker jeg, stenger av eller mister flere dager.",
      "suggestion": "De reaksjonene forteller oss at vi må være varsomme med hvordan vi jobber. Vi kan begynne med det som skjer før du drikker eller stenger av, uten å be deg åpne alt. Det hjelper oss å forstå støtten og tempoet du trenger, før vi går videre."
    },
    "dp_providing-treatment-rationale_case-marcus_04": {
      "text": "[Flatt] Hvorfor skal jeg merke tegn på at jeg er på vakt når jeg er det hele tiden?",
      "suggestion": "Når du er på vakt hele tiden, kan det høres slitsomt ut å be deg merke mer. Vi kan se etter når beredskapen endrer seg, og hva som hjelper den å avta. Det gir oss noe konkret å jobbe med, uten at du må følge med på hvert signal."
    },
    "dp_providing-treatment-rationale_case-marcus_05": {
      "text": "[Hyperårvåken] Hvordan skal det å sitte med følelser hjelpe marerittene, i stedet for å gjøre nettene verre?",
      "suggestion": "Du er redd nettene blir verre. Vi trenger ikke fortelle marerittene på nytt for å begynne. Vi kan utforske hvordan de påvirker deg nå, og hva som hjelper deg etterpå. Så kan vi se om videre arbeid hjelper eller gjør det vanskeligere."
    },
    "dp_providing-treatment-rationale_case-marcus_06": {
      "text": "[Flatt] Hvordan skal det å jobbe med kontakt hjelpe når det å være alene hindrer folk i å kreve noe av meg?",
      "suggestion": "Å være alene gir deg ro fra andres krav. Vi kan utforske hva slags kontakt du selv kunne ønske, om du ønsker noen. Målet er å finne støtte samtidig som du beholder valgfriheten og grensene dine, ikke å overtale deg til å slippe alle inn."
    },
    "dp_providing-treatment-rationale_case-marcus_07": {
      "text": "[Flatt] Hva er fremgang for meg hvis det å føle seg normal er urealistisk?",
      "suggestion": "Vi kan begynne med det som ville gjøre hverdagen mer håndterbar for deg. Fremgang kan være bedre søvn, litt interesse for noe eller et lettere øyeblikk med en annen. Å se etter endringer du verdsetter, hjelper oss å vurdere om arbeidet er nyttig. «Normal» trenger ikke være målestokken."
    },
    "dp_providing-treatment-rationale_case-marcus_08": {
      "text": "[Lav stemme] Hvorfor skal jeg stole på dette hvis terapeuter vanligvis presser på for historier jeg ikke vil fortelle?",
      "suggestion": "Du har grunn til å spørre hvordan dette blir annerledes. Jeg kan forklare hvorfor jeg stiller et spørsmål, og høre om du vil gå inn i det. Det hjelper oss å velge arbeidet sammen. Du trenger ikke fortelle en historie bare fordi jeg spør."
    },
    "dp_providing-treatment-rationale_case-marcus_09": {
      "text": "[Nølende] Kan vi holde dette praktisk og ikke grave gjennom alt det vonde?",
      "suggestion": "Ja, vi kan rette oppmerksomheten mot det som påvirker dagene dine nå. Å forstå følelsene som er der, kan hjelpe oss å velge nyttige endringer uten å gå gjennom alt det vonde som har skjedd. Vi kan sammen bestemme hva som er relevant, og hva vi lar ligge."
    },
    "dp_providing-treatment-rationale_case-marcus_10": {
      "text": "[Langsomt og flatt] Hva om jeg aldri føler meg normal igjen, og denne flatheten bare er den jeg er nå?",
      "suggestion": "Du er redd flatheten er varig. Jeg kan ikke si nå hvordan den vil endre seg, men vi kan se på det som gjør livet vanskeligere eller litt lettere. Målet er å finne endringer som betyr noe for deg, uten å kreve at du skal kjenne deg som en annen."
    },
    "dp_empathic-explorations_case-sara_01": {
      "text": "[Lavmælt] Bare det å se navnet hans dukke opp setter meg fortsatt ut, og jeg hater hvor mye det betyr.",
      "suggestion": "Å se navnet hans setter deg fortsatt ut, og du hater at det betyr så mye. Kan vi stoppe litt opp ved den følelsen og merke hva som er her nå?"
    },
    "dp_empathic-explorations_case-sara_02": {
      "text": "[Flau] Jeg sier til venner at det går bra, og så blir jeg redd for at de hører at det ikke gjør det.",
      "suggestion": "Du prøver å høres ut som om det går bra, samtidig som det kjennes risikabelt at de kan høre hvor lite bra det er. Finn øyeblikket der det å bli hørt begynner å kjennes farlig."
    },
    "dp_empathic-explorations_case-sara_03": {
      "text": "[På gråten] Jeg føler meg fortapt etter bruddet, som om jeg ikke vet hva jeg skal gjøre med kveldene.",
      "suggestion": "Kveldene er stedet der fortaptheten viser seg tydeligst. Hent én kveld litt nærmere og kjenn etter hva som er vanskeligst når du ikke vet hvor du skal gjøre av deg."
    },
    "dp_empathic-explorations_case-sara_04": {
      "text": "[Lavmælt] Jeg skrev «unnskyld» til ham tre ganger, og så skjønte jeg at jeg ikke vet hva jeg prøvde å reparere.",
      "suggestion": "Å skrive unnskyld var et forsøk på reparasjon, og så forsvant grunnen under det du prøvde å fikse. Senk tempoet ved det uklare stedet og se hvilken følelse som dukker opp."
    },
    "dp_empathic-explorations_case-sara_05": {
      "text": "[Panisk] Jeg sletter bilder for å bevise at jeg er ferdig, får panikk og leter etter dem igjen.",
      "suggestion": "Én handling sier «bli ferdig», og så sier panikken at denne slutten ikke er så enkel. Stopp opp i øyeblikket mellom å slette og å lete."
    },
    "dp_empathic-explorations_case-sara_06": {
      "text": "[Flau] Når noen er snille mot meg, faller blikket før jeg rekker å stoppe det.",
      "suggestion": "Du senker blikket straks noen er vennlige. Kan vi se litt nærmere på det øyeblikket og merke hva du kjenner når du tar imot vennligheten?"
    },
    "dp_empathic-explorations_case-sara_07": {
      "text": "[Lavmælt] I noen sekunder etter at jeg våkner, glemmer jeg at han er borte, og så husker jeg det.",
      "suggestion": "Det er den korte lettelsen, og så kommer tapet tilbake på én gang. La øyeblikket der du husker det få være her før du må gjøre noe med det."
    },
    "dp_empathic-explorations_case-sara_08": {
      "text": "[Flau] Jeg er trist, og så blir jeg flau over at jeg fortsatt snakker om det.",
      "suggestion": "Tristheten er her, og flauheten spør raskt om du fortsatt burde snakke om dette. Gi begge litt plass og merk hvilken som kjennes sterkest nå."
    },
    "dp_empathic-explorations_case-sara_09": {
      "text": "[På gråten] Når jeg ser par holde hender, blir jeg lei meg, og så føler jeg meg barnslig for å ville ha det.",
      "suggestion": "Det å se dem vekker ønsket, og så kommer skammen inn rundt ønsket. Hold deg nær ønsket et øyeblikk før skammen kommer inn."
    },
    "dp_empathic-explorations_case-sara_10": {
      "text": "[Flau] Hvis jeg lar noen se hele rotet, ser jeg for meg at de stille ønsker at jeg skal slutte.",
      "suggestion": "En del av deg vil at noen skal se hvor vondt det er, og en annen del forventer at de ønsker at du skal stoppe. Følg draget mellom å ville bli sett og å vente avvisning."
    },
    "dp_empathic-explorations_case-michael_01": {
      "text": "[Bestemt] Når noen retter på én detalj, hører jeg det om igjen etterpå som om jeg ble hengt ut.",
      "suggestion": "Korrigeringen blir sittende som om du ble hengt ut. Når du sier det nå, hva merker du i deg selv?"
    },
    "dp_empathic-explorations_case-michael_02": {
      "text": "[Anspent og sint] Jeg går inn i møter allerede klar for at noen skal vise meg manglende respekt.",
      "suggestion": "Du går inn allerede på vakt, før noe har skjedd. Kjenn etter hvordan det er å gå inn mens du allerede er klar for manglende respekt."
    },
    "dp_empathic-explorations_case-michael_03": {
      "text": "[Anspent] Etter at jeg har eksplodert hjemme, sier jeg til meg selv at de presset meg, men jeg kjenner meg fortsatt elendig.",
      "suggestion": "En del sier at de presset deg, og en annen del sitter igjen med den elendige følelsen etterpå. Hold deg nær den elendige følelsen før diskusjonen om skyld tar over."
    },
    "dp_empathic-explorations_case-michael_04": {
      "text": "[Skamfull] Noen ganger får jeg lyst til å kaste telefonen etter en jobbmelding, og så føler jeg meg latterlig.",
      "suggestion": "Trangen kommer fort, og etterpå sitter du igjen og ser på deg selv med skam. Stopp litt ved skammen som kommer etterpå, rett før den kaller deg latterlig."
    },
    "dp_empathic-explorations_case-michael_05": {
      "text": "[Defensiv] Et lite sukk fra kona mi kan kjennes som om hun allerede har bestemt at jeg er problemet.",
      "suggestion": "Det lille sukket lander som om en avgjørelse allerede er tatt om deg. Senk tempoet ved den første oppflammingen og merk hva det kjennes som du blir anklaget for."
    },
    "dp_empathic-explorations_case-michael_06": {
      "text": "[Anspent] Når jeg ikke vet svaret, blir jeg anspent og begynner å snakke som om jeg vet det likevel.",
      "suggestion": "Du blir anspent rett før du begynner å høres sikker ut. Kan vi stoppe opp ved den spenningen og merke hvordan det er å ikke ha svaret?"
    },
    "dp_empathic-explorations_case-michael_07": {
      "text": "[Skamfull] Jeg leser hver melding om igjen før jeg sender, fordi én feil kan plage meg hele natten.",
      "suggestion": "Én mulig feil kan bli værende i timevis, så det blir vanskelig å slutte å sjekke. Finn det første øyeblikket der sjekkingen begynner å kjennes nødvendig."
    },
    "dp_empathic-explorations_case-michael_08": {
      "text": "[Anspent og sint] I det øyeblikket jeg føler meg svak, blir jeg sint og hører faren min si at det nettopp er problemet.",
      "suggestion": "«Svak» henter sinnet og farens dom inn veldig fort. Stopp ved øyeblikket der svakhet først viser seg."
    },
    "dp_empathic-explorations_case-michael_09": {
      "text": "[Skamfull] Noen netter spiller jeg av hvert ord jeg sa, og prøver å finne hvor jeg rotet det til.",
      "suggestion": "Du spiller av hvert ord og leter etter øyeblikket der du gjorde feil. Kjenn etter hva som skjer inni deg når du tror du har funnet feilen."
    },
    "dp_empathic-explorations_case-michael_10": {
      "text": "[Sårbar] Jeg vil at sønnen min skal føle seg trygg rundt meg, og jeg vet ikke hvordan jeg skal si det uten å høres svak ut.",
      "suggestion": "Du vil så sterkt at han skal være trygg, og bare å si det ønsket kommer borti den gamle svakhetsregelen. La selve ønsket få et øyeblikk før regelen lukker seg rundt det."
    },
    "dp_empathic-explorations_case-jason_01": {
      "text": "[Stille] Når det er min tur til å snakke, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Ordene forsvinner når det er din tur. Kan vi ta det øyeblikket langsomt og merke hva som skjer inni deg før du prøver å finne setningen igjen?"
    },
    "dp_empathic-explorations_case-jason_02": {
      "text": "[Nølende] Jeg holder fingeren over «send», og så sletter jeg meldingen fordi det å ville ha kontakt plutselig kjennes ydmykende.",
      "suggestion": "Ønsket om kontakt er der, og ydmykelsen gjør det vanskelig å la meldingen finnes. Hold ønsket i fokus et øyeblikk før slettingen skjer."
    },
    "dp_empathic-explorations_case-jason_03": {
      "text": "[Redd] Jeg ble invitert i bursdag, og en del av meg ble glad, men så begynte jeg å bekymre meg for at jeg kom til å ødelegge det.",
      "suggestion": "Det er glede over å bli invitert, og så begynner bekymringen å trenge seg på. Gi gleden litt plass før bekymringen tar over."
    },
    "dp_empathic-explorations_case-jason_04": {
      "text": "[Stille] Hvis jeg møter blikket til noen for lenge, antar jeg at de kan se hvor klein jeg er.",
      "suggestion": "Blikkontakten begynner å kjennes som om de kan se hvor klein du føler deg, akkurat det du prøver å skjule. Hold ved det første sekundet av å bli sett."
    },
    "dp_empathic-explorations_case-jason_05": {
      "text": "[Flau] Etter møter kan én liten pinlig pause få meg til å krympe meg resten av dagen.",
      "suggestion": "Den ene pausen kommer tilbake lenge etter møtet. Senk tempoet og merk hva flauheten sier om hvordan du tror du ble sett."
    },
    "dp_empathic-explorations_case-jason_06": {
      "text": "[Engstelig] Når jeg går inn i et rom, ser jeg etter utgangen før jeg bestemmer meg for om jeg skal prøve å delta.",
      "suggestion": "Du ser etter utgangen før du bestemmer deg for om du vil være med noen. Kan vi stoppe opp der og merke hva du kjenner mens du ser deg rundt?"
    },
    "dp_empathic-explorations_case-jason_07": {
      "text": "[Stille] Før jeg presenterer meg, begynner jeg å se for meg hvor rar jeg kommer til å høres ut.",
      "suggestion": "Allerede før du snakker, blir øyeblikket til en test på hvordan du kommer til å virke. Stopp før presentasjonen og kjenn forestillingen om å høres rar ut."
    },
    "dp_empathic-explorations_case-jason_08": {
      "text": "[Nølende] Jeg sammenligner meg med alle der og bestemmer alltid at jeg er den minst interessante personen.",
      "suggestion": "Sammenligningen ender med deg nederst, og det gjør vondt før noen faktisk har avvist deg. La den såre følelsen få et øyeblikk."
    },
    "dp_empathic-explorations_case-jason_09": {
      "text": "[Blank] Noen ganger later jeg som jeg skriver melding, så småpraten ikke trenger å begynne.",
      "suggestion": "Telefonen gir deg en måte å sette kontakten på pause, og litt skjul for presset ved å måtte svare der og da. Se hva som skjer rett før du griper etter det skjulestedet."
    },
    "dp_empathic-explorations_case-jason_10": {
      "text": "[Stille og skamfull] Jeg følte meg ensom på søndag, men jeg ignorerte også to meldinger.",
      "suggestion": "Ensomheten og tilbaketrekkingen sitter side om side. Hold deg nær ensomheten som er der, selv mens meldingene blir stående ubesvart."
    },
    "dp_empathic-explorations_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager er flate, men hvis tristheten flimrer til, presser jeg den ned før den får bre seg.",
      "suggestion": "Du merker litt tristhet og skyver den raskt ned. Hvis du vil, kan vi bli ved akkurat det lille du allerede har merket, uten å prøve å gjøre det sterkere."
    },
    "dp_empathic-explorations_case-laura_02": {
      "text": "[Redd] Hevede stemmer trenger ikke engang være rettet mot meg; jeg blir bare stille og venter på at det skal gå over.",
      "suggestion": "Selv når sinnet ikke er rettet mot deg, blir det helt stille og ventende i deg. Det går an å være ved den ventingen lenge nok til å merke hva den lytter etter."
    },
    "dp_empathic-explorations_case-laura_03": {
      "text": "[Anspent og på vakt] Da naboen kom med suppe, takket jeg pent, og så brukte jeg kvelden på å lure på hva hun egentlig ville.",
      "suggestion": "Vennligheten kommer, og mistanken kommer nesten med en gang. Det er verdt å stoppe i glippen mellom å få omsorg og måtte lete etter en hake."
    },
    "dp_empathic-explorations_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg heller opp vin etter oppvasken fordi stillheten blir så høy, og jeg orker ikke høre mine egne tanker.",
      "suggestion": "Etter oppvasken blir stillheten høy, og vinen gir deg en måte å slippe å høre den på. Kunne vi bli litt ved stillheten før du må dempe den?"
    },
    "dp_empathic-explorations_case-laura_05": {
      "text": "[Fjern] Jeg sjekker låsene to ganger også om morgenen, og etterpå føler jeg meg dum fordi ingenting har skjedd.",
      "suggestion": "Selv i dagslys blir du stående mellom frykt og følelsen av å være dum når du sjekker låsene. Rett før den andre sjekken kan tempoet senkes."
    },
    "dp_empathic-explorations_case-laura_06": {
      "text": "[Skamfull] Selv mild berøring får meg til å skvette, og etterpå hater jeg at reaksjonen min er så synlig.",
      "suggestion": "Du skvetter, og så skammer du deg over at noen så det. Kan vi bli litt ved hvordan det er for deg rett etter den reaksjonen?"
    },
    "dp_empathic-explorations_case-laura_07": {
      "text": "[Langsomt og flatt] Når gode nyheter kommer, kan jeg si de riktige ordene, men jeg kjenner nesten ingenting.",
      "suggestion": "Ordene vet hvordan de skal svare, mens følelsen holder seg utenfor rekkevidde. Kanskje vi kan være med det nesten-ingentinget uten å få det til å prestere."
    },
    "dp_empathic-explorations_case-laura_08": {
      "text": "[Fjern] Noen ganger åpner en sang noe i meg, og et øyeblikk kan jeg nesten kjenne tristheten.",
      "suggestion": "Sangen når gjennom nummenheten et øyeblikk. Det er verdt å bli ved stedet der tristheten nesten er tilgjengelig, før den glir bort."
    },
    "dp_empathic-explorations_case-laura_09": {
      "text": "[Anspent og på vakt] Når jeg ser for meg å be noen sitte hos meg, kommer jeg straks på alle grunnene til at de ikke burde måtte det.",
      "suggestion": "Ønsket om trøst viser seg, og nesten med en gang stiller alle grunnene imot seg opp. Det ønsket kan få stå litt før det må forsvare seg."
    },
    "dp_empathic-explorations_case-laura_10": {
      "text": "[Langsomt og flatt] Jeg unngår filmer med slåssing fordi jeg ikke vil finne ut hva ett eneste rop gjør med meg.",
      "suggestion": "Å unngå filmen beskytter deg mot å finne ut hva ett eneste rop kan sette i gang. Det kan være hjelpsomt å stoppe ved det å ikke ville finne det ut."
    },
    "dp_empathic-explorations_case-carlos_01": {
      "text": "[Defensiv] Kona mi sier at hun hører tonefallet mitt endre seg før jeg selv merker at noe er galt.",
      "suggestion": "Kona di hører at tonen endrer seg før du merker det selv. Kan vi ta et av de øyeblikkene langsomt og merke hva du først kjenner i deg selv?"
    },
    "dp_empathic-explorations_case-carlos_02": {
      "text": "[Anspent] Etter en krangel kan jeg bli stående i gangen uten å vite om jeg skal si unnskyld eller late som ingenting.",
      "suggestion": "Det øyeblikket i gangen har både reparasjon og flukt i seg. Det kan være verdt å bli ved uvissheten før en av bevegelsene vinner."
    },
    "dp_empathic-explorations_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg i en krangel, begynner jeg å føle at jeg mister plassen min, og da må jeg presse tilbake.",
      "suggestion": "Å trekke deg begynner å kjennes som å miste plassen din, og å presse tilbake blir måten å finne den igjen på. Det kan hjelpe å stoppe ved første tegn på at plassen glipper."
    },
    "dp_empathic-explorations_case-carlos_04": {
      "text": "[Skamfull] Jeg ser for meg igjen og igjen at gutten min skvetter, og jeg hater at han lærte den frykten av meg.",
      "suggestion": "At gutten din skvatt, henter fram både kjærlighet og skam på samme tid. Her kan smerten i å se frykt knyttet til deg få litt plass."
    },
    "dp_empathic-explorations_case-carlos_05": {
      "text": "[Anspent] Når det blir rolig etter en krangel, begynner jeg å vente på at noen skal ta det opp igjen.",
      "suggestion": "Selv roen kjennes midlertidig, som om krangelen kan starte igjen når som helst. Kanskje vi kan merke hva du venter på i den stillheten."
    },
    "dp_empathic-explorations_case-carlos_06": {
      "text": "[Anspent og sint] Jeg kjenner trykket bygge seg opp før jeg kaster noe, men i det sekundet kjennes det umulig å stoppe.",
      "suggestion": "Du merker at trykket bygger seg opp, og det kjennes umulig å stoppe. Kan vi stoppe opp ved det første tegnet, uten å handle på det, og merke hva som skjer i deg?"
    },
    "dp_empathic-explorations_case-carlos_07": {
      "text": "[Defensiv] Hvis jeg lar meg være myk, vet jeg ikke om folk vil respektere meg eller utnytte det.",
      "suggestion": "Mykhet reiser spørsmålet om respekt eller å bli brukt. Den usikkerheten kan få være der uten at du må skyves mot ett av svarene."
    },
    "dp_empathic-explorations_case-carlos_08": {
      "text": "[Sint, med knyttede never] Når jeg føler meg behandlet respektløst, snakker jeg høyere fordi jeg trenger at de skjønner at det gikk inn på meg.",
      "suggestion": "Den høyere stemmen prøver å sikre at de forstår at det traff deg. Vi kan være ved den delen som trenger at sårheten blir oppfattet."
    },
    "dp_empathic-explorations_case-carlos_09": {
      "text": "[Redd] Når jeg sier at jeg vil at de skal være trygge, faller sinnet, og noe mykere skremmer meg.",
      "suggestion": "Når sinnet faller, blir ønsket om trygghet mer synlig, og det mykere stedet kjennes skremmende. Ønsket kan få være der litt før du må dekke det til."
    },
    "dp_empathic-explorations_case-carlos_10": {
      "text": "[Redd] Når jeg begynner å føle meg liten i en krangel, slår panikken inn, og jeg må gjøre meg større fort.",
      "suggestion": "Å føle deg liten gir panikk, og så kommer presset om å gjøre deg større fort. Det første øyeblikket av litenhet kan senkes i tempo før den større holdningen tar over."
    },
    "dp_empathic-explorations_case-nina_01": {
      "text": "[Sliten] I det øyeblikket jeg ber om hjelp, skyller skylden inn og jeg får lyst til å trekke det tilbake.",
      "suggestion": "Du ber om hjelp, og skyldfølelsen kommer så fort at du vil trekke det tilbake. Kan vi bli litt ved det du kjenner idet du ber?"
    },
    "dp_empathic-explorations_case-nina_02": {
      "text": "[Skyldpreget] Jeg bretter klær og svarer på meldinger så jeg slipper å kjenne bitterhet.",
      "suggestion": "Å holde deg i gang gjør at bitterheten ikke får plass. Det kan hjelpe å stoppe ved øyeblikket der det å stanse ville gjort den hørbar."
    },
    "dp_empathic-explorations_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg helt til neiet nesten forsvinner.",
      "suggestion": "Neiet begynner tydelig, og så tynner forklaringene det ut. Neiet kan få stå klart litt mens vi merker hva som gjør det vanskelig å la det bli stående."
    },
    "dp_empathic-explorations_case-nina_04": {
      "text": "[Sliten] Selv det å be om en liten kjøretur kommer ut med tre unnskyldninger.",
      "suggestion": "Unnskyldningene kommer før spørsmålet om skyss får stå alene. Kanskje vi kan bli ved det lille behovet før det må be om unnskyldning."
    },
    "dp_empathic-explorations_case-nina_05": {
      "text": "[Skyldpreget] Hvis kjøkkenet er rotete når noen stikker innom, føler jeg meg tatt på fersken, som om de ser at jeg ikke holder tritt.",
      "suggestion": "Det rotete kjøkkenet blir et øyeblikk av å være tatt på fersken, av at andre ser at du ikke holder tritt. Det er verdt å stoppe der vanlig rot blir til blottstillelse."
    },
    "dp_empathic-explorations_case-nina_06": {
      "text": "[Splittet] Når alle trenger meg samtidig, sier jeg ja før jeg vet hva jeg faktisk vil.",
      "suggestion": "Ja-et kommer før du vet hva du selv vil. Kan vi stoppe opp rett før det ja-et og gi ditt eget ønske litt tid til å bli tydeligere?"
    },
    "dp_empathic-explorations_case-nina_07": {
      "text": "[Skyldpreget] Noen ganger ser jeg for meg at noen lager te til meg og sier at jeg skal sette meg, og så føler jeg meg egoistisk bare for å se det for meg.",
      "suggestion": "Bildet av å bli tatt vare på kommer, og egoismen kommer raskt inn og dømmer det. Ønsket om å bli tatt vare på kan få litt plass før dommen kommer."
    },
    "dp_empathic-explorations_case-nina_08": {
      "text": "[Unnskyldende] Jeg melder meg frivillig før noen spør, og senere blir jeg bitter for at ingen ser hvor sliten jeg er.",
      "suggestion": "Du tilbyr deg før spørsmålet i det hele tatt er sagt, og senere finnes det ikke noe sted for trøttheten å bli sett. Den usynlige prisen kan få litt plass."
    },
    "dp_empathic-explorations_case-nina_09": {
      "text": "[Splittet] Ved siden av andre mødre krymper jeg, som om de alle kan en regel jeg gikk glipp av.",
      "suggestion": "Ved siden av andre mødre krymper du rundt følelsen av at det finnes en regel du gikk glipp av. Kanskje vi kan bli litt lenger ved følelsen av å stå utenfor."
    },
    "dp_empathic-explorations_case-nina_10": {
      "text": "[Sliten] Ved leggetid vet jeg ikke om jeg er trist, sint eller bare helt brukt opp.",
      "suggestion": "Ved leggetid er tristhet, sinne og utmattelse filtret sammen. Floken kan få være der litt før vi prøver å finne én tråd."
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
      "suggestion": "Du vet at det er normalt å si ha det, og kjenner likevel frykt og sinne. Når du ser for deg det nå, hva merker du først i deg selv?"
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
      "suggestion": "Du vil bevise at hun tar feil, og samtidig forsvinne. Kan vi stoppe opp ved begge de ønskene og merke hvordan de kjennes akkurat nå?"
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
      "suggestion": "Barnas gråt vekker utålmodighet før du vet hvorfor. Hvor i deg merker du at utålmodigheten begynner?"
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
      "suggestion": "Du kjenner deg nummen, og så kommer det noe du ikke kan sette ord på. Vi kan ta det langsomt. Hva merker du av det mens du forteller nå?"
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
      "suggestion": "Telefonen ringer, og å svare kan bety å forklare at du ikke har det bra. Kan vi bli litt ved det du kjenner da, uten at du trenger å forklare det ennå?"
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
      "suggestion": "Det er som om det lille lyset fra mobilen holder deg med selskap når natten kjennes vanskelig å møte."
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
      "text": "[Trist] Noen kvelder sitter jeg på gulvet ved siden av senga en stund i stedet for å legge meg.",
      "suggestion": "Gulvet blir stedet du folder deg sammen når senga kjennes for åpen og for bred."
    },
    "dp_empathic-evocations_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, blir jeg brydd og ser bort.",
      "suggestion": "Vennligheten kommer nær, nesten for varm å ta inn, så blikket faller til tryggere grunn."
    },
    "dp_empathic-evocations_case-michael_01": {
      "text": "[Fast] Når noen korrigerer meg foran teamet, blir jeg varm og slutter å høre etter.",
      "suggestion": "Det høres ut som om varmen stiger, som om en lyskaster plutselig rettes mot deg foran alle."
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
      "text": "[Defensiv] Når kona mi sukker mens jeg forklarer noe, går jeg ut fra at hun allerede har bestemt at jeg tar feil.",
      "suggestion": "Det lille sukket kan krysse rommet som en anklage, og systemet ditt spenner seg før hun har sagt et ord."
    },
    "dp_empathic-evocations_case-michael_06": {
      "text": "[Anspent] Hvis noen sier ro deg ned midt i en krangel, blir jeg sintere med en gang og slutter å høre resten.",
      "suggestion": "Det er som om de to ordene tenner en fyrstikk, og sinnet blusser opp før du hører noe mer."
    },
    "dp_empathic-evocations_case-michael_07": {
      "text": "[Flau] Når jeg ikke vet svaret i et møte, føler jeg meg blottstilt foran alle.",
      "suggestion": "Å ikke vite åpner et nakent sted, som om all kompetansen du støtter deg på plutselig står uten skjold."
    },
    "dp_empathic-evocations_case-michael_08": {
      "text": "[Defensiv] Noen ganger smeller jeg med dører fordi jeg ikke vet hva annet jeg skal gjøre med følelsen.",
      "suggestion": "Døra tar følelsen for deg, høyt nok til å dekke det mindre stikket under."
    },
    "dp_empathic-evocations_case-michael_09": {
      "text": "[Skamfull] Etter en krangel får tanken på å si unnskyld først meg til å føle meg svak og mindre enn henne.",
      "suggestion": "Unnskyldningen kjennes som å gå ned på lavere grunn, med alle andre plutselig høyere rundt deg."
    },
    "dp_empathic-evocations_case-michael_10": {
      "text": "[Skamfull] Om natten spiller jeg av krangelen og hører hvor skarp jeg hørtes ut.",
      "suggestion": "Huset blir stille, men din egen stemme fortsetter å runge på kjøkkenet, fortsatt skarp etter at krangelen er over."
    },
    "dp_empathic-evocations_case-jason_01": {
      "text": "[Stille] Når det er min tur i et møte, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Det er som om alle ansiktene vendes mot deg, og setningen du hadde klar, plutselig er borte."
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
      "text": "[Stille] Hvis folk ler i nærheten etter at jeg har sagt noe, antar jeg at jeg gjorde noe rart.",
      "suggestion": "Latteren går gjennom rommet og peker seg mot deg før du vet hva den handlet om."
    },
    "dp_empathic-evocations_case-jason_05": {
      "text": "[Nølende] Når oppmerksomheten vender seg mot meg, blir jeg stillere og prøver å ikke bevege meg så mye.",
      "suggestion": "Hele kroppen begynner å krympe i stolen, mens du prøver å være til stede uten å bli sett."
    },
    "dp_empathic-evocations_case-jason_06": {
      "text": "[Engstelig] Når noen gir meg et kompliment etter et møte, smiler jeg, men jeg tror egentlig ikke på det.",
      "suggestion": "Det er som om komplimentet stanser ved døra. Du hører det, men det slipper ikke helt inn."
    },
    "dp_empathic-evocations_case-jason_07": {
      "text": "[Stille] Søndag kveld begynner jeg å bli nedstemt når leiligheten blir stille, men jeg scroller mest.",
      "suggestion": "Uka kommer for tidlig inn i rommet, og scrollingen blir et lite bevegelig lys mot tyngden."
    },
    "dp_empathic-evocations_case-jason_08": {
      "text": "[Stille og skamfull] Jeg skriver enkle meldinger om og om igjen, og noen ganger sender jeg dem ikke.",
      "suggestion": "Én liten melding blir en smal døråpning, og hver omskriving er et nytt skritt tilbake fra å bli sett."
    },
    "dp_empathic-evocations_case-jason_09": {
      "text": "[Engstelig] Selv det å si hei i gangen kan høres feil ut for meg etterpå.",
      "suggestion": "Det lille hei-et blir hengende i ørene dine, som om ett vanlig ord har blitt bevis mot deg."
    },
    "dp_empathic-evocations_case-jason_10": {
      "text": "[Stille] I grupper følger jeg med på hvor utgangen er før jeg blir med i samtalen.",
      "suggestion": "Utgangen blir det tryggeste stedet i rommet, stedet blikket holder fast i når oppmerksomheten kommer for nær."
    },
    "dp_empathic-evocations_case-laura_01": {
      "text": "[Flatt og på vakt] De fleste morgener står jeg opp, lager kaffe, svarer på meldingene jeg må svare på, og merker at jeg fortsatt ikke kjenner særlig mye.",
      "suggestion": "Det høres ut som om dagen går i grått: Alt fortsetter, men lite når inn til deg."
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
      "suggestion": "Det er som om du legger deg ned, men noe i deg fortsatt står vakt og lytter etter neste lyd."
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
      "suggestion": "Det gliset ser ut til å treffe som en gnist, og plutselig går den neste timen med til å vise at ingen får tråkke på deg."
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
      "suggestion": "Etter utbruddet er det som om alle holder pusten, og kommentaren din kommer raskt inn i den stillheten."
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
      "suggestion": "Det er som om du så vidt har satt deg til rette før det ringer en bjelle inni deg: Det er mer som må gjøres."
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
      "text": "[Splittet] Å si nei gjør meg panisk, selv ved små ting, fordi jeg begynner å se for meg at den andre bestemmer seg for at jeg er egoistisk.",
      "suggestion": "Det er som om det lille neiet kunne løsne en tråd mellom dere, og plutselig kjennes hele forholdet truet."
    },
    "dp_empathic-evocations_case-nina_07": {
      "text": "[Sliten] Jeg vasker sent på kvelden selv om jeg er helt utslitt, fordi det ødelegger hele morgenen å våkne til et rotete kjøkken.",
      "suggestion": "Benken tørkes av igjen, et midnattsforsøk på å gjøre morgendagen trygg før du får lov til å stoppe."
    },
    "dp_empathic-evocations_case-nina_08": {
      "text": "[Skyldpreget] Hvis huset er rotete, skammer jeg meg før noen sier noe, og begynner å forklare hva som kom i veien.",
      "suggestion": "Skammen kommer før kritikken, og forklaringene stabler seg opp foran deg som et skjold."
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
      "suggestion": "Det er som om ordene på arket kunne havne et sted du ikke kan følge etter, uten at du får sagt noe om hvordan andre ser deg."
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
      "suggestion": "Kloringen blir en akutt måte å kjenne deg virkelig på igjen, et skarpt signal når rommet begynner å drive bort."
    },
    "dp_empathic-evocations_case-aisha_05": {
      "text": "[Panisk] Når skriveprikkene forsvinner, sjekker jeg meldingen igjen og igjen, selv om jeg vet at de sikkert bare ble opptatt.",
      "suggestion": "Prikkene som forsvinner, trekker kontakttråden ut av hendene dine, og plutselig henger hele forbindelsen i luften."
    },
    "dp_empathic-evocations_case-aisha_06": {
      "text": "[Desperat] Når noen sier ha det, vet jeg at det er normalt, men jeg begynner å forhandle inni meg om hvordan jeg kan få dem til å bli litt lenger.",
      "suggestion": "Det høres ut som om «ha det» begynner å lukke en dør, og du strekker deg allerede etter å holde den åpen litt lenger."
    },
    "dp_empathic-evocations_case-aisha_07": {
      "text": "[Benektende] Forrige uke fikk jeg selvmordstanker da han forsvant, men så tekstet han tilbake, så kanskje jeg har det greit nå og vi ikke trenger å gjøre det til en stor greie.",
      "suggestion": "Meldingen hans kan ha kjentes som en livline etter den skremmende uka. Jeg vil ikke anta at selvmordstankene er borte fordi han svarte. Har du tanker om å ta livet ditt nå?"
    },
    "dp_empathic-evocations_case-aisha_08": {
      "text": "[Såret] Når noen kaller meg for mye, hører jeg det om og om igjen etterpå, særlig når jeg vil sende melding og prøver å la være.",
      "suggestion": "For mye lander som et stempel over deg, sterkt og vanskelig å vaske bort, akkurat der ønsket om kontakt bor."
    },
    "dp_empathic-evocations_case-aisha_09": {
      "text": "[På gråten] Når noen er milde med meg, gråter jeg før jeg skjønner hvorfor, og så blir jeg flau og vil at de skal slutte å være snille.",
      "suggestion": "Mildheten kommer gjennom før du rekker å spenne deg, tårene presser på, og så prøver skammen å skyve omsorgen ut igjen."
    },
    "dp_empathic-evocations_case-aisha_10": {
      "text": "[Panisk] Jeg sjekker døra mens vi snakker, fordi en del av meg forventer at du reiser deg og går hvis jeg sier for mye.",
      "suggestion": "Blikket ditt vokter døråpningen, følger med på øyeblikket der jeg kan forsvinne fordi behovet ble for synlig."
    },
    "dp_empathic-evocations_case-david_01": {
      "text": "[Kontrollert] Når kona mi kaller meg kald, blir jeg stille og kommer med én presis kommentar som jeg vet kommer til å treffe hardt.",
      "suggestion": "Det høres ut som om «kald» treffer som et slag, og ordene dine slår tilbake."
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
      "suggestion": "Det er som om ansiktet til barnet ditt blir stående mellom deg og alle argumentene du griper etter."
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
      "suggestion": "Det høres ut som å komme seg gjennom en dag der alle fargene er borte, og praten kjennes som enda en anstrengelse som ikke fører noe sted."
    },
    "dp_empathic-evocations_case-marcus_02": {
      "text": "[Lav stemme] Folkemengder gjør meg anspent før det har skjedd noe; jeg følger med på utganger, hender og støy mens alle andre bare handler.",
      "suggestion": "Folkemengden når deg som trussel før den når deg som mennesker, og hele systemet ditt tar opp posten."
    },
    "dp_empathic-evocations_case-marcus_03": {
      "text": "[Macho] I avdelingen kunne følelser koste liv, så jeg lærte å ikke ha dem, og jeg vet fortsatt ikke hva godt de skal gjøre.",
      "suggestion": "Den regelen høres fortsatt ut som en ordre i brystet: følelser kan koste liv, så hjertet låses bort bak en dør."
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
      "suggestion": "Det er som om noe godt er rett foran deg, men det er en glassrute mellom deg og følelsen."
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
      "text": "[Flau] Jeg sier til vennene mine at det går bra, og så blir jeg irritert når de slutter å spørre.",
      "suggestion": "Du sier at det går bra, og blir så irritert når de slutter å spørre. Jeg lurer på om du ønsker at noen skal merke at det er mer du ikke har sagt."
    },
    "dp_empathic-conjectures_case-sara_02": {
      "text": "[Flau] Jeg blir lenge på jobb etter bruddet, fordi det kjennes verre å komme tidlig hjem.",
      "suggestion": "Å bli lenge på jobb holder deg unna den stille leiligheten; kanskje det å komme tidlig hjem bringer ensomheten nærmere."
    },
    "dp_empathic-conjectures_case-sara_03": {
      "text": "[Flau] Jeg kaller meg dramatisk når jeg fortsatt gråter over det, selv om jeg bare gjør det alene.",
      "suggestion": "Å kalle deg dramatisk gjør tårene til noe du må skjule; jeg lurer på om det finnes skam over at du fortsatt trenger å sørge."
    },
    "dp_empathic-conjectures_case-sara_04": {
      "text": "[Lavmælt] Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      "suggestion": "Du trekker deg raskt unna med smilet; jeg lurer på om det å bli sett ærlig kjennes både ønsket og for utsatt."
    },
    "dp_empathic-conjectures_case-sara_05": {
      "text": "[Flau] Når par legger ut jubileumsbilder, himler jeg med øynene og scroller for fort videre.",
      "suggestion": "Himlingen hjelper deg raskt forbi det; kanskje det under den finnes en verkende lengsel etter sånn nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      "text": "[På gråten] Jeg sluttet å følge ham, og så lånte jeg telefonen til en venn for å se om han virket lykkeligere.",
      "suggestion": "Du prøver å slutte å se, og samtidig må du vite; jeg lurer på om en del av deg er redd for at han er lettet over at du er borte."
    },
    "dp_empathic-conjectures_case-sara_07": {
      "text": "[Lavmælt] Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      "suggestion": "Du gjør smerten mindre før noen andre kan gjøre det; jeg gjetter at du kanskje beskytter deg mot å bli avfeid."
    },
    "dp_empathic-conjectures_case-sara_08": {
      "text": "[Flau] Jeg har skrevet en unnskyldning til ham tre ganger denne uken, selv om jeg ikke vet hva jeg egentlig gjorde galt.",
      "suggestion": "Unnskyldningen gir deg noe konkret å reparere; jeg lurer på om det å finne feil hos deg selv kjennes mindre hjelpeløst enn å ikke vite hvorfor han dro."
    },
    "dp_empathic-conjectures_case-sara_09": {
      "text": "[På gråten] Nettene er verst; jeg spiller om igjen små øyeblikk til jeg finner noe jeg kunne gjort annerledes.",
      "suggestion": "Gjennomspillingen leter etter et håndtak; kanskje det å skylde på deg selv gir deg en måte å kjenne deg mindre maktesløs i tapet."
    },
    "dp_empathic-conjectures_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      "suggestion": "Vennlighet virker vanskelig å ta rett inn; kanskje den berører en lengsel du er redd for å vise."
    },
    "dp_empathic-conjectures_case-michael_01": {
      "text": "[Fast] Hvis noen stiller spørsmål ved meg i et møte, svarer jeg raskt og høyere enn jeg mente.",
      "suggestion": "Du svarer raskt og høyt når noen stiller spørsmål ved deg. Jeg lurer på om du kjenner deg utsatt et øyeblikk før du svarer."
    },
    "dp_empathic-conjectures_case-michael_02": {
      "text": "[Defensiv] Når en kollega retter på meg foran rommet, ler jeg det bort, og så skyter varmen opp i nakken.",
      "suggestion": "Latteren dekker det raskt; jeg lurer på om det finnes et raskt glimt av ydmykelse under."
    },
    "dp_empathic-conjectures_case-michael_03": {
      "text": "[Anspent] Kona mi sier at jeg er hard, og jeg sier at jeg bare er ærlig.",
      "suggestion": "Ærlighet er det tryggere stedet å stå; jeg lurer på om det å mykne ville bringe deg nærmere skyld."
    },
    "dp_empathic-conjectures_case-michael_04": {
      "text": "[Fast] Jeg holder tjenester i balanse. Jeg liker ikke å skylde noen noe.",
      "suggestion": "Du passer nøye på balansen; jeg lurer på om det å skylde noen noe kjennes som å havne under."
    },
    "dp_empathic-conjectures_case-michael_05": {
      "text": "[Anspent og skamfull] Når jeg må be om unnskyldning, strammer kjeven seg og jeg begynner å forklare hele situasjonen.",
      "suggestion": "Forklaringen kommer raskt inn; jeg lurer på om det å be om unnskyldning berører skam, nesten som å tape terreng."
    },
    "dp_empathic-conjectures_case-michael_06": {
      "text": "[Anspent] Jeg tar bare et glass etter jobb fordi kona mi presser på; hvis hun sluttet å mase, hadde jeg ikke trengt det.",
      "suggestion": "Du knytter drikkingen til presset fra kona di. Jeg lurer på om det er vanskelig å tåle å bli anklaget, og om glasset gir deg litt avstand fra det."
    },
    "dp_empathic-conjectures_case-michael_07": {
      "text": "[Fast] Jeg leser alles arbeid om igjen før en presentasjon, fordi én feil ville slå tilbake på meg.",
      "suggestion": "Du vokter deg mot at én feil skal lande på deg; jeg lurer på om skyld allerede kjennes forventet før noe har gått galt."
    },
    "dp_empathic-conjectures_case-michael_08": {
      "text": "[Skamfull] Etter at jeg eksploderer, blir barnet mitt forsiktig rundt meg, og jeg klarer ikke å møte blikket hans.",
      "suggestion": "Det forsiktige blikket ser ut til å treffe hardt; jeg lurer på om det berører skam over å være skremmende for ham."
    },
    "dp_empathic-conjectures_case-michael_09": {
      "text": "[Anspent] Når noen sier at jeg skal roe meg ned, høres det ut som de kaller meg barnslig.",
      "suggestion": "Den setningen ser ut til å gjøre deg liten fort; jeg lurer på om sinnet beskytter mot å kjenne seg avfeid."
    },
    "dp_empathic-conjectures_case-michael_10": {
      "text": "[Fast] Jeg driver ikke med følelser; jeg spør hva vi skal gjøre med det.",
      "suggestion": "Du går raskt mot handling; kanskje følelser kjennes for blottstillende å bli værende med lenge."
    },
    "dp_empathic-conjectures_case-jason_01": {
      "text": "[Blank] Jeg øver på hver setning før et møte, og så blir hodet likevel blankt når folk vender seg mot meg.",
      "suggestion": "Du forbereder deg nøye, og så blir det likevel tomt. Jeg lurer på om det å ha blikkene på deg kjennes som å bli vurdert."
    },
    "dp_empathic-conjectures_case-jason_02": {
      "text": "[Nølende] Når jeg blir invitert ut, sier jeg at jeg er opptatt før jeg rekker å kjenne om jeg vil gå.",
      "suggestion": "«Opptatt»-svaret kommer fort; jeg lurer på om det beskytter deg mot å finne ut om du ville hørt til."
    },
    "dp_empathic-conjectures_case-jason_03": {
      "text": "[Engstelig] Jeg hører en stemme som sier «ikke dum deg ut» før jeg rekker å åpne munnen.",
      "suggestion": "Den advarselen kommer før du snakker; jeg gjetter at den prøver å beskytte deg mot å føle deg blottstilt."
    },
    "dp_empathic-conjectures_case-jason_04": {
      "text": "[Stille] Etter at jeg har snakket, krymper jeg meg i timevis og ser for meg at alle spiller av hvor latterlig jeg hørtes ut.",
      "suggestion": "Krympingen spiller øyeblikket om igjen; jeg lurer på om det å bli hørt kjennes nært å bli ledd av."
    },
    "dp_empathic-conjectures_case-jason_05": {
      "text": "[Nølende] Når noen gir meg et kompliment, antar jeg at de bare er høflige og har oversett den kleine delen.",
      "suggestion": "Komplimentet slipper ikke helt inn; jeg lurer på om den kleine delen kjennes mer troverdig enn de gode ordene."
    },
    "dp_empathic-conjectures_case-jason_06": {
      "text": "[Skamfull] Å se selvsikre mennesker får meg til å ville forsvinne, og så hater jeg meg selv for å misunne dem.",
      "suggestion": "Å se selvsikkerheten deres får deg til å ville forsvinne. Jeg lurer på om det også er tristhet i misunnelsen, over å ønske å være så fri sammen med folk."
    },
    "dp_empathic-conjectures_case-jason_07": {
      "text": "[Stille] Hvis noen ler i nærheten, antar jeg at det er av meg og spiller om igjen hva jeg gjorde galt.",
      "suggestion": "Du forbereder deg raskt på å bli gjort narr av; jeg lurer på om latter kjennes som bevis på at det er farlig å være synlig."
    },
    "dp_empathic-conjectures_case-jason_08": {
      "text": "[Engstelig] Jeg skriver en melding, leser den fem ganger og sletter den før jeg sender.",
      "suggestion": "Du redigerer deg selv ut av kontakt; jeg lurer på om det å ta kontakt kjennes som å gi noen sjansen til å avvise deg."
    },
    "dp_empathic-conjectures_case-jason_09": {
      "text": "[Engstelig] Jeg drikker før arrangementer, for ellers står jeg langs veggen og sjekker mobilen.",
      "suggestion": "Drikken hjelper deg bort fra veggen; jeg lurer på om den skjermer deg mot å føle deg blottstilt."
    },
    "dp_empathic-conjectures_case-jason_10": {
      "text": "[Skamfull] Jeg holder meg stille selv når jeg har en god idé, og så spiller jeg den om igjen hele dagen.",
      "suggestion": "Du holder deg skjult og fortsetter å spille det om igjen; kanskje det å si noe kjennes risikabelt, men stillheten gir skam."
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
      "suggestion": "Du finner raskt grunner til at han kan såre deg. Jeg lurer på om ønsket om nærhet og frykten for svik kommer nesten samtidig."
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
      "suggestion": "Sinnet kommer så fort. Jeg lurer på om du kjenner deg ydmyket et kort øyeblikk rett før det."
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
      "suggestion": "Du reagerer sterkt før de ser at utfordringen treffer. Jeg lurer på om du kjenner deg liten et øyeblikk som du ikke vil at de skal se."
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
      "suggestion": "Hvile vekker skyld selv når du nesten ikke klarer å stå. Jeg lurer på om du er redd for å bety mindre for folk når du ikke gjør noe for dem."
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
      "suggestion": "Du holder sinnet for deg selv for å være snill. Jeg lurer på om du er redd folk vil trekke seg unna hvis de får vite hva du selv ønsker."
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
      "suggestion": "Når jeg ser på klokka, kjennes det som om jeg er på vei bort. Jeg lurer på om det også vekker en frykt for at du slutter å bety noe for meg."
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
      "suggestion": "En del av deg vil lukke det raskt nå som kontakten kom tilbake; jeg lurer på om det kjennes skremmende å se tilbake på hvor nær kanten det var."
    },
    "dp_empathic-conjectures_case-aisha_05": {
      "text": "[Desperat] Hvis du avlyser, er det en del av meg som aldri vil komme tilbake og late som jeg ikke bryr meg.",
      "suggestion": "Avlysningen stikker som å bli sluppet; jeg lurer på om det kjennes tryggere å avvise først enn å vente på at det skjer igjen."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      "text": "[Skamfull] Når jeg ber noen bli, hater jeg hvor intens jeg høres ut etterpå.",
      "suggestion": "Du hater intensiteten akkurat der du trenger nærhet; kanskje skammen sier at behovet ditt er for mye."
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
      "suggestion": "Angrepet vender raskt innover; jeg lurer på om det å kalle deg ekkel kommer før frykten for at noen andre skal si det."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      "text": "[Panisk] Jeg får panikk når jeg skal si farvel, selv når jeg vet at du kommer tilbake.",
      "suggestion": "Farvel utløser panikk selv når hodet vet bedre; jeg lurer på om avskjeder berører den gamle frykten for at ingen kommer tilbake."
    },
    "dp_empathic-conjectures_case-david_01": {
      "text": "[Håpløs] Når kona mi kaller meg kald, kommer jeg med en spydig kommentar før hun rekker å se at det såret.",
      "suggestion": "Kommentaren kommer før hun ser at du er såret. Jeg lurer på om det å bli kalt kald også treffer en frykt for at du svikter henne."
    },
    "dp_empathic-conjectures_case-david_02": {
      "text": "[Avvisende] Jeg liker ikke å bli fortalt hva jeg skal gjøre; det kjennes som om noen får overtaket.",
      "suggestion": "Du stritter imot styring; jeg lurer på om det lander som om noen gjør deg liten."
    },
    "dp_empathic-conjectures_case-david_03": {
      "text": "[Avvisende] Hvis jeg ikke kan være best, hvorfor prøve i det hele tatt?",
      "suggestion": "Du sikter mot toppen; jeg lurer på om det ordinære nesten kan kjennes som å forsvinne."
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
      "suggestion": "Du vender deg mot telefonen når samtalen blir personlig. Jeg lurer på om du kjenner deg utsatt og venter å bli dømt hvis du blir i samtalen."
    },
    "dp_empathic-conjectures_case-david_07": {
      "text": "[Kontrollert] Jeg skryter når jeg føler meg utrygg, før noen kan se glippen.",
      "suggestion": "Du pumper deg raskt opp; jeg lurer på om det dekker den sårbare glippen før noen andre kan se den."
    },
    "dp_empathic-conjectures_case-david_08": {
      "text": "[Såret, men skarp] Hvis barna sier imot, hører jeg respektløshet og går rett i forelesningsmodus.",
      "suggestion": "Motstanden deres ser ut til å treffe autoriteten din raskt; jeg lurer på om forelesningen dekker et glimt av skam."
    },
    "dp_empathic-conjectures_case-david_09": {
      "text": "[Såret, men skarp] Når kona mi misforstår meg, blir jeg skarp og fortsetter å bevise poenget mitt.",
      "suggestion": "Du fortsetter å bevise poenget; jeg lurer på om det under sinnet ligger en sorg over ikke å bli kjent."
    },
    "dp_empathic-conjectures_case-david_10": {
      "text": "[Kontrollert] Hvis kona mi blir, føler jeg meg fanget og kritisert; hvis hun går, føler jeg meg ydmyket. Det finnes ingen måte å vinne på.",
      "suggestion": "Begge alternativene truer deg; jeg lurer på om de berører den samme frykten for å bli sett som ikke god nok."
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
      "suggestion": "Du tar deg i å vente på at noe skal gå galt. Jeg lurer på om det å glede seg over det gode også vekker en frykt for å miste det."
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
      "suggestion": "Du får ikke tak i latteren; jeg lurer på om glede på en eller annen måte kjennes feil etter så mye tap."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      "text": "[Flatt] Jeg sier til meg selv at jeg har det bedre alene. Nærhet blir fort komplisert.",
      "suggestion": "Den delen virker beskyttende; jeg lurer på om den frykter at nærhet betyr å såre noen, bli såret eller miste kontrollen igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      "text": "[På gråten] Det treffer meg som en bølge når jeg ser koppen hans fortsatt stå i skapet, og så klarer jeg ikke slutte å hulke. Jeg blir flau over lyden av det, men det fortsetter å komme.",
      "suggestion": "Jeg er her med deg. Du trenger ikke beklage at du gråter så sterkt. Vi kan ta dette øyeblikket langsomt og stoppe opp hvis det blir for mye."
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
      "suggestion": "Du har det vondt, og skammer deg over lyden av gråten. Jeg er her og lytter. Du trenger ikke dempe den eller finne alle ordene på én gang."
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
      "suggestion": "Jeg hører hvor raskt sinnet stiger, også sammen med meg. Jeg er her og lytter. Vi kan ta det langsomt og sette ord på det som kjennes respektløst, uten å handle på sinnet."
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
      "suggestion": "Det er vanskelig å tåle å kjenne seg så liten. Jeg er her med deg, og vi kan ta det langsomt. Du kan sette ord på trangen uten å måtte handle på den."
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
      "suggestion": "La oss senke tempoet. Du trenger ikke finne ord akkurat nå. Jeg er her. Hvis det hjelper, kan du legge merke til stemmen min og hvor stolen støtter deg."
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
      "suggestion": "Skammen kjennes nesten uutholdelig akkurat nå. Jeg er her med deg. Du kan se bort eller ta en pause. Du trenger ikke tvinge deg til å møte blikket mitt eller finne ord."
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
      "suggestion": "Det smellet fikk deg til å forsvinne langt unna. Jeg er her med deg. Kan vi bruke et øyeblikk på å legge merke til rommet rundt oss før vi ber om noe mer?"
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
      "suggestion": "Du er glad i katten din, og denne avgjørelsen vekker så mye skyld. Jeg er her med deg. Du trenger ikke forklare eller forsvare alt på én gang."
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
      "suggestion": "La oss stoppe opp her. Jeg kan lytte til hvor truet og sint du kjenner deg, og vi må holde dette i ord, uten å true eller skade noen."
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
      "suggestion": "Kroppen kjennes klar til kamp. Jeg er her med deg, og vi kan stoppe opp. Du kan merke den reaksjonen uten å måtte følge den ut i handling."
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
      "suggestion": "Tårene er her, og du skammer deg over å trenge så mye. Jeg lytter. Du trenger ikke ta vare på meg eller beklage det du trenger."
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
      "suggestion": "Selv det å stoppe kjennes skremmende, med tårene så nær. Jeg er her med deg nå. Vi kan gi dette øyeblikket litt tid. Du trenger ikke ta vare på alle mens vi snakker."
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
      "text": "[Lengselsfull, skamfull] Jeg vet at du er terapeuten min, men noen ganger vil jeg at du skal elske meg romantisk, på en måte terapeuter ikke skal.",
      "suggestion": "Jeg hører hvor sterk lengselen er, og du kan snakke om den her. Jeg er her som terapeuten din. Forholdet vårt blir ikke romantisk. Vi kan være i følelsen uten å skamme deg eller handle på den."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      "text": "[Panisk] Tomheten brenner så vondt at jeg begynner å tenke at jeg må skade meg selv bare for å bevise at jeg fortsatt er her.",
      "suggestion": "Jeg er glad for at du satte ord på det. Tomheten brenner så desperat at skade begynner å se ut som bevis på at du finnes; trygghet er viktig, og behovet for å kjenne deg virkelig kan bli her hos meg i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      "text": "[Desperat] Jeg vil stikke fra dette rommet før du ser hvor desperat jeg er. Hvis du ser det, er jeg redd du enten trekker deg unna eller blir det eneste som holder meg sammen.",
      "suggestion": "En del av deg vil løpe før behovet blir sett. Jeg kan være stødig sammen med frykten for å være for mye og trenge for mye, og bare ta én liten bit av det inn i rommet."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_04": {
      "text": "[Desperat] Når du sier at vi må stoppe til tiden, får jeg lyst til å kutte meg så du ser hvor ille det blir.",
      "suggestion": "Den trangen forteller meg hvor uutholdelig avslutningen kjennes, og hvor sterkt du trenger at det blir sett. Vi tar risikoen for at du kutter deg på alvor, og budskapet kan bli her mellom oss i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_05": {
      "text": "[Desperat] Jeg føler at jeg er for mye, og jeg hater at jeg trenger at du blir.",
      "suggestion": "Behovet for meg kjennes uutholdelig og skamfullt samtidig. Jeg kan sitte med det blottlagte behovet et øyeblikk uten å behandle deg som for mye."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_06": {
      "text": "[Panisk] Brystet kjennes som et svart hull, og jeg er redd det skal sluke meg. Jo mer jeg merker det, jo mer tror jeg at jeg faller ned i det og ikke kommer tilbake som den samme.",
      "suggestion": "Jeg er her med deg. Hvis det blir for mye å rette oppmerksomheten mot følelsen, kan vi stoppe opp og legge merke til rommet rundt oss i stedet. Du trenger ikke gå lenger inn i det nå."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_07": {
      "text": "[Panisk] Den forrige terapeuten min sa at hun skulle overføre meg, og jeg kjenner fortsatt panikken som om hun kastet meg bort.",
      "suggestion": "Den gamle overføringen treffer fortsatt som å bli kastet bort. Jeg kan sitte her i dette rommet med panikken mens vi lar den vite hvilken avslutning den hører til."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_08": {
      "text": "[Panisk] Trangen til å klore meg selv blir veldig sterk, og jeg trenger noe ekte før jeg forsvinner.",
      "suggestion": "Trangen til å klore prøver å gi deg noe fast før du forsvinner. Jeg tar tryggheten på alvor og holder meg nær behovet for å kjenne deg virkelig i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_09": {
      "text": "[Skamfull] Gråten tar over, og jeg føler meg ekkel fordi jeg trenger at du ser det. Jeg vil at du skal bli, og det gjør skammen verre, som om behovet for trøst er det mest blottlagte ved meg.",
      "suggestion": "Skammen og tårene er viklet inn i hverandre: behovet for trøst kjennes ekkelt. Jeg kan møte det behovet varsomt uten å slutte meg til avskyen."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_10": {
      "text": "[Desperat] Hvis du avlyser, faller jeg fra hverandre og hater meg selv for at jeg trenger deg. Jeg vet at én avlyst time ikke burde kjennes som at gulvet forsvinner, men det er akkurat det som skjer i kroppen.",
      "suggestion": "En avlysning kjennes som å miste gulvet, og så straffer skammen deg for å trenge meg. Jeg kan møte begge deler uten å la deg bære fallet alene."
    },
    "dp_staying-in-contact-intense-affect_case-david_01": {
      "text": "[Kontrollert] Ansiktet brenner, og jeg vil avbryte dette før du ser hvor blottstilt jeg er.",
      "suggestion": "Det er vanskelig å tåle å kjenne seg så utsatt. Jeg er her og lytter, og du kan velge hvor mye du viser meg. Vi kan stoppe opp uten å avvise det du kjenner."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      "text": "[Skuffet og sint] Terapi virker ikke. Jeg føler meg verre, og kanskje det er fordi du ikke har nok erfaring for en som meg.",
      "suggestion": "Det betyr noe at du sier dette til meg. Å få det verre bringer skuffelse og sinne rett inn i rommet, og jeg vil møte det sammen med deg før jeg forsvarer eller forklarer."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      "text": "[Defensiv] Jeg vil gå ut før du ser meg miste ansikt. Halsen strammer seg, dressen kjennes plutselig for trang, og jeg vil heller gå enn å sitte her og se trengende ut.",
      "suggestion": "Å gå ville redde deg fra å bli sett som trengende. Jeg kan være stødig mens ydmykelsen skimtes, uten å ta verdigheten fra deg."
    },
    "dp_staying-in-contact-intense-affect_case-david_04": {
      "text": "[Skamfull] Jeg ser hele tiden ansiktet til kona mi for meg etter at hun fant ut om affæren, og skylden er så brennende at jeg vil krype ut av huden.",
      "suggestion": "Ansiktet hennes henter frem brennende skyld. Jeg kan være nær angeren sammen med deg, nært nok til at den ikke skjules og sakte nok til at den ikke sluker deg."
    },
    "dp_staying-in-contact-intense-affect_case-david_05": {
      "text": "[Rasende] Jeg orker ikke ordet «kald»; det får meg til å føle meg avslørt og rasende. Når kona mi sier det, føles det som om hun har funnet det ene jeg ikke kan forsvare meg mot, og jeg vil stenge henne hardt ned.",
      "suggestion": "Det ordet finner det ubeskyttede stedet; skam og raseri strømmer inn samtidig. Jeg blir hos varmen i det mens trangen til å stenge henne ned holdes i ord."
    },
    "dp_staying-in-contact-intense-affect_case-david_06": {
      "text": "[Skamfull] Jeg synes det er flaut at jeg klikket hjemme; jeg hørtes akkurat ut som den typen jeg dømmer. Setningen kom skarpt ut, og så så jeg meg selv utenfra og kjente en varm avsky i ansiktet.",
      "suggestion": "Å se hvordan du reagerte, vekker så mye skam og avsky. Jeg er her med deg. Vi kan lytte til det vonde uten å gjøre det til et angrep på deg."
    },
    "dp_staying-in-contact-intense-affect_case-david_07": {
      "text": "[Kontrollert] Jeg føler for å stenge ned så jeg ikke sier noe desperat. Jeg kjenner setningen komme opp, og jeg hater at jeg kanskje trenger kona mi så mye foran deg.",
      "suggestion": "Nedstengingen holder tilbake hvor sterkt du kanskje trenger henne. Jeg kan møte kanten av desperasjonen uten å eksponere alt på én gang."
    },
    "dp_staying-in-contact-intense-affect_case-david_08": {
      "text": "[Tydelig ukomfortabel] Jeg brukte seksuelt press mot noen for mange år siden, og å si det gjør at jeg føler at det ikke finnes noen vei tilbake fra den jeg var.",
      "suggestion": "Dette er alvorlig å si høyt. Jeg kan være med deg i skammen og ansvaret, holde skaden tydelig uten å la «ingen vei tilbake» sluke hele rommet."
    },
    "dp_staying-in-contact-intense-affect_case-david_09": {
      "text": "[Redd] Forsvaret kommer fort opp, og jeg er redd jeg mister kontrollen over ansiktet. Jeg kjenner det høflige uttrykket sprekke, og hvis det sprekker, vet jeg ikke hva du får se.",
      "suggestion": "Noe i ansiktet ditt er nær ved å sprekke, og det kjennes farlig. Jeg kan være med deg i øyeblikket før masken gir etter, uten å rive den av."
    },
    "dp_staying-in-contact-intense-affect_case-david_10": {
      "text": "[Sint, med knyttede never] Når jeg ser for meg mannen kona mi tekstet med, får jeg lyst til å knuse ansiktet hans til han slutter å bety noe.",
      "suggestion": "Det voldelige bildet er voldsomt, og jeg tar det på alvor. Jeg går ikke bort; vi holder det i ord, ikke handling, mens raseriet og det såre er her."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      "text": "[Flatt] En bølge kommer opp i brystet, og jeg vil stenge den ned før den tar meg tilbake dit.",
      "suggestion": "Du er redd følelsen skal ta deg tilbake dit. Jeg er her med deg. Vi kan stoppe opp og legge merke til hvor vi er nå, uten å gå lenger inn i minnet."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      "text": "[Forferdet, lav stemme] Jeg så opptak fra en ny krigssone, barn under ruiner, og hele kroppen ble kald og kvalm.",
      "suggestion": "Barna under ruinene vekker gru og en kald kvalme i deg. Jeg tåler å se på den gruen sammen med deg, mens nåtiden holder seg nær nok."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      "text": "[Langsomt og flatt] Jeg kjenner ingenting og alt på én gang, og det skremmer meg. Når minnet kommer nær, blir brystet hult og så plutselig altfor fullt, som om bryteren er ødelagt.",
      "suggestion": "Å være nummen og oversvømt på én gang er skremmende. Vi kan la ett signal bli kjent her, uten å be hele minnet komme."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg vil stenge ned før rommet begynner å kjennes uvirkelig. Kantene på veggene er allerede i ferd med å bli myke, og jeg er redd jeg ikke vet hvor jeg er hvis jeg fortsetter å snakke.",
      "suggestion": "At rommet mykner, er et viktig varsel. Jeg senker tempoet sammen med deg ved den terskelen, nær følelsen, men ikke inne i hele minnet."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_05": {
      "text": "[Skjelvende] Hendene mine begynner å skjelve når jeg prøver å si bare én bit av det som skjedde. Historien ligger fortsatt bak tennene, men hendene mine forteller deg allerede at den er for nær.",
      "suggestion": "Hendene dine forteller oss allerede at historien er for nær. Jeg kan holde skjelvingen med selskap før flere ord må komme."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_06": {
      "text": "[Lav stemme] Når jeg kommer hjem og det er stille, lander vekten på brystet som en dør som lukkes.",
      "suggestion": "Når du beskriver den stillheten, hører jeg hvor tung den kjennes. Jeg er her med deg nå. Vi kan bli her et øyeblikk uten å be deg si mer."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_07": {
      "text": "[Flatt] Etter en folkemengde summer huden som om jeg fortsatt er på vakt. Jeg kan være hjemme med døren låst og fortsatt kjenne hver skulder fra toget stryke forbi meg.",
      "suggestion": "Folkemengden har passert, men huden er fortsatt på vakt. Jeg kan sitte med den summende etteralarmen uten å kreve at den slår seg av."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_08": {
      "text": "[Hyperårvåken] Jeg er redd for at hvis jeg lar meg kjenne det, så sluker hele greia meg. Jeg klarer fakta, men følelser gjør at rommet, fortiden og kroppen min virker som de faller sammen til ett sted.",
      "suggestion": "Skrekken er at følelsen skal brette rommet, fortiden og kroppen din sammen til ett sted. Jeg holder fast i orienteringen sammen med deg mens bare et fragment kommer nær."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_09": {
      "text": "[Langsomt og flatt] Jeg vil forsvinne når minnene presser seg på og rommet slutter å kjennes virkelig. Det er ikke at jeg vil dø i det sekundet; jeg vil bare ikke befinne meg noe sted minnene kan finne meg.",
      "suggestion": "Å ville forsvinne er en måte å slippe unna minner som virker som de finner deg overalt. Jeg tar det på alvor og holder deg plassert her mens trengselen får ord."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_10": {
      "text": "[Håpløs] Når nettene blir lange, tenker jeg at det hadde vært enklere å ikke være i live, og så hater jeg meg selv for å si det.",
      "suggestion": "Jeg er glad for at du sa ønsket om ikke å være i live høyt. Vi tar tryggheten på alvor, og jeg blir hos håpløsheten og selvhatet uten å la noen av dem bli alene."
    },
    "dp_self-disclosure_case-sara_01": {
      "text": "[På gråten] Når jeg sier at jeg fortsatt savner ham, tenker du egentlig at jeg høres latterlig ut?",
      "suggestion": "Jeg ser ikke sorgen din som latterlig. Det berører meg at du kan ta den med hit, også når du er flau. Hvordan er det å høre meg si det?"
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
      "suggestion": "Jeg kan ikke love hva et år vil bringe, og jeg vil ikke gi deg falsk sikkerhet. Jeg vil jobbe med ensomheten sammen med deg, fremfor å avfeie den. Hvordan er det å høre det?"
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
      "suggestion": "Jeg ser ikke det å fortelle at du er såret som svakhet. Jeg respekterer at du er villig til å si det direkte. Hva skjer i deg når du hører det?"
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
      "suggestion": "Jeg er villig til å lytte til sinnet ditt, og jeg vil si tydelig fra hvis vi trenger en pause. Jeg ønsker ikke at dette blir en styrkeprøve. Hva ville hjelpe deg å kjenne at jeg tar deg på alvor?"
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
      "suggestion": "Jeg er fortsatt interessert når du er stille. Du trenger ikke skynde deg for min skyld. Hva merker du når jeg sier det?"
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
      "suggestion": "Jeg merker et ønske om å hjelpe deg å finne ordene, men jeg vil ikke at det ønsket blir til press. Jeg velger å gi pausen litt plass. Hvordan er det for deg?"
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
      "suggestion": "Jeg vil forstå hvordan nummenheten er for deg, fremfor å bestemme meg for at du er utilgjengelig. Jeg velger å senke tempoet. Du trenger ikke få frem en følelse for min skyld. Hvordan er det å høre det?"
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
      "suggestion": "Jeg ønsker ikke å presse deg til å fortelle detaljer. Jeg vil forstå i et tempo du selv kan velge, og det er viktig at du kan si fra hvis jeg går for fort."
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
      "suggestion": "Jeg vil ikke redusere deg til en merkelapp som «dårlig far». Jeg er opptatt av å hjelpe deg å endre hvordan du reagerer, og jeg tar virkningen på barna dine på alvor. Hvordan er det å høre begge deler?"
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
      "suggestion": "Jeg kan respektere deg og samtidig ta skaden sinnet ditt gjør på alvor. Det betyr noe for meg at du prøver å møte det. Hvordan er det å høre det uten å måtte skjule det som skjedde?"
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
      "suggestion": "Jeg vil at det skal være plass til behovene dine her. Jeg opplever ikke at det å lytte til deg tar noe fra andre. Hvordan er det å høre det?"
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
      "suggestion": "Du blir ikke en belastning for meg når du ber om hjelp. Jeg er bekymret for hvor alene du er med så mye ansvar. Den bekymringen er mitt ansvar. Du trenger ikke ta vare på den."
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
      "suggestion": "Jeg bryr meg om deg i dette terapiforholdet. Betalingen er en del av den profesjonelle rollen min, og den rollen setter også grenser for hva jeg kan tilby. Hvordan er det å høre de tingene sammen?"
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
      "suggestion": "Jeg tar smerten din på alvor og vil forstå den uten at du må skjule hvor sterk den er. Jeg vil også være tydelig på grensene mine. Hva hører du i det?"
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
      "suggestion": "Jeg merker en trang til å bevise hva jeg kan, og jeg vil ikke at den tar over samtalen. Jeg vil heller forstå hva du trenger å vite om meg. Hva ser du etter?"
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
      "suggestion": "Jeg er bekymret for at gjentatt forsinkelse gir oss mindre tid til arbeidet du kom for. Jeg vil at vi tar det opp, fremfor å gå forbi det. Hva gjør det vanskelig å komme til avtalt tid?"
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
      "suggestion": "Jeg ser deg ikke som ødelagt. Jeg respekterer hvor mye du har stått i, og vil forstå hvordan det er for deg å leve med det. Du trenger ikke være enig med meg."
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
      "suggestion": "Jeg tror endring er mulig, men jeg kan ikke love hvordan den vil se ut for deg. Jeg er villig til å jobbe i ditt tempo og se ærlig på hva som hjelper. Hvordan høres det ut for deg?"
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
      "suggestion": "Det er ord du ikke har fått sagt til ham. Vil du prøve én setning med ham i tankene i den tomme stolen? Hvis du vil prøve, begynn med: «Du lot meg sitte igjen alene med alt dette». Vi kan stoppe hvis halsen begynner å snøre seg."
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
      "suggestion": "Beskjeden fra faren din har blitt en indre stemme som stenger ned såretheten. Vil du gi den stemmen én stol og den sårede siden den andre? Hvis du vil, se deg selv for deg i den andre stolen. Fra stolen med den strenge stemmen sier du «Slutt å være svak og få kontroll» til den sårede siden av deg selv."
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt fortelle faren min hva det kostet meg at han kalte hver følelse for svakhet.",
      "suggestion": "Det peker mot et uavsluttet oppgjør med faren din. Hvis du vil, kan du sette ham i denne stolen og si hva det kostet å få sårhet behandlet som svakhet. Jeg holder det strukturert og kort."
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      "text": "[Anspent] I det sekundet jeg begynner å mykne, hører jeg: «Ta deg sammen», og så begynner jeg å ramse opp alt jeg burde gjort bedre.",
      "suggestion": "Den mykere følelsen begynner å vise seg, og så skjærer kommandoen inn. Vil du prøve to stoler for å se hvordan du stopper følelsen? Hvis du vil, se den mykere siden av deg selv for deg i den andre stolen. Fra denne stolen sier du «ta deg sammen» og ramser opp hva han burde gjort bedre; så flytter vi til den mykere siden."
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
      "suggestion": "Spøken og fiksingen drar deg unna akkurat når noe mykere kommer nær. Vil du prøve to stoler for å se hvordan du vender deg bort? Hvis du vil, se den mykere siden av deg selv for deg i den andre stolen og vis hvordan du får ham til å spøke eller fikse; så flytter vi til den mykere siden og lar den svare."
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
      "suggestion": "«Ikke gi etter»-stemmen stopper unnskyldningen ved å få reparasjon til å kjennes som nederlag. Vil du prøve to stoler for å høre den stemmen og siden som vil reparere? Hvis du vil, begynn som «ikke gi etter»-stemmen og si til den andre siden hvorfor han må holde unnskyldningen tilbake. Så flytter vi til siden som ville reparere og hører hva som blir blokkert."
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
      "suggestion": "Skilsmissen høres ut som en hard dom: at du er for ødelagt til at noen blir. Vil du prøve to stoler, én for dommen og én for siden som må høre den? Vi trenger ikke gjøre det nå. Hvis du vil prøve, sett deg først i domsstolen og si: «Du er for ødelagt til at noen blir.» Så bytter vi til siden som må ta imot det."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      "text": "[Fjern] Jeg sa aldri til moren min: «Du så hva som skjedde og fortsatte å vaske opp.» Jeg tenker fortsatt mer på det enn jeg vil.",
      "suggestion": "Moren din er i kjøkkenbildet: hun ser det og vasker likevel videre. Hvis du vil, setter vi henne i den tomme stolen, og du sier setningen direkte: «Du så hva som skjedde og fortsatte å vaske opp.» Tempoet er rolig, og du bestemmer hvor vi stopper."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      "text": "[Anspent og på gråten] Da eksmannen min flyttet ut, gråt jeg ikke. Jeg vasket kjøkkenet og kjente ingenting, som om jeg burde vært såret, men bare var helt blank.",
      "suggestion": "Vaskingen og blankheten ser ut til å stanse det såre før det når fram. Vil du se på hvordan du stopper deg selv med to stoler, uten å presse deg forbi det? Hvis du vil prøve, får siden som stopper én stol og den sårede siden den andre. Fra den første stolen viser du hvordan du blir blank og fortsetter å vaske. Etterpå flytter vi til den sårede siden og gir den bare noen få ord."
    },
    "dp_marker-recognition-chairwork_case-laura_04": {
      "text": "[Fjern] Jeg lurer stadig på om eksen min visste hva som kom til å skje etter at han dro, at jeg kom til å vende alt tilbake mot meg selv. Jeg vil spørre ham: Visste du at jeg kom til å bære skylden for oss begge?",
      "suggestion": "Spørsmålet retter seg mot ham, om hvordan du ble sittende igjen med hele skylden. Vil du prøve å spørre ham med den tomme stolen? Hvis du vil prøve, se ham for deg på en avstand du velger og spør: «Visste du at jeg kom til å bære skylden for oss begge?» Vi kan stoppe der."
    },
    "dp_marker-recognition-chairwork_case-laura_05": {
      "text": "[Flatt og på vakt] Jeg sier fortsatt til meg selv at jeg er skadet gods. Det kommer når noen er snille mot meg, eller når jeg tenker på å date igjen. Jeg hører: De ville gått hvis de visste nok, så ikke slipp noen for nær.",
      "suggestion": "«Skadet gods»-stemmen holder deg unna nærhet før noen rekker å velge deg. Vil du prøve to stoler, én for stemmen og én for siden som hører den? Vi kan stoppe når som helst. Hvis du vil, sier du fra den første stolen: «De ville gått hvis de visste nok.» Så bytter vi og kjenner etter hvordan advarselen treffer."
    },
    "dp_marker-recognition-chairwork_case-laura_06": {
      "text": "[Langsomt og flatt] Når sinnet begynner, vasker jeg benken, sjekker låsene eller skjenker et glass til følelsen forsvinner. Jeg bestemmer meg ikke for å stoppe det; jeg bare blir travel og langt borte før det får ord.",
      "suggestion": "Vaskingen, sjekkingen og glasset ser ut til å frakte sinnet bort før det får stemme. Vil du prøve to stoler for å se hvordan du fjerner deg fra sinnet? Hvis du vil, får den travle siden én stol og sinnet den andre. Fra den første stolen viser du hvordan den får sinnet til å forsvinne. Etterpå går vi over til sinnet og gir det noen få ord, uten press."
    },
    "dp_marker-recognition-chairwork_case-laura_07": {
      "text": "[Skamfull] Jeg sier til meg selv at jeg burde ha visst bedre enn å stole på ham. Jeg går gjennom små tegn jeg overså og bygger en sak mot meg selv, som om jeg var dum fordi jeg ville tro at han var trygg.",
      "suggestion": "Skylden fører en sak mot den delen av deg som ville ha trygghet. Vil du prøve to stoler for å høre anklagen og hvordan den virker på deg? Hvis du vil prøve, se den tillitsfulle siden av deg selv for deg i den andre stolen. Fra stolen med den anklagende stemmen sier du: «Du burde ha visst bedre; du var dum som stolte på ham.» Så bytter vi til den tillitsfulle delen som ble såret."
    },
    "dp_marker-recognition-chairwork_case-laura_08": {
      "text": "[Lav stemme] Jeg sa aldri til mannen som skadet meg: «Du får ikke bestemme hva jeg er verdt.»",
      "suggestion": "Den setningen hører direkte til mannen som skadet deg. Vil du prøve den ene setningen med ham i tankene i den tomme stolen? Du velger avstanden og kan stoppe når som helst. Hvis du vil prøve, se ham for deg der og si bare ordene du nettopp brukte."
    },
    "dp_marker-recognition-chairwork_case-laura_09": {
      "text": "[Anspent og skamfull] Når jeg begynner å si at jeg er sint, hører jeg: «Ikke lag bråk.» Skuldrene strammer seg, stemmen blir høflig, og plutselig forklarer jeg hvorfor det sikkert ikke var så farlig.",
      "suggestion": "«Ikke lag bråk»-stemmen stanser sinnet før det får stå oppreist. Vil du prøve to stoler, én for advarselen og én for sinnet? Hvis du vil, begynn som stemmen som advarer, og si til den sinte siden hvorfor hun må tie. Etterpå flytter vi til den sinte siden og hører én eller to enkle setninger."
    },
    "dp_marker-recognition-chairwork_case-laura_10": {
      "text": "[Fjern] Jeg ser fortsatt for meg døren til rommet mitt etter at det skjedde, mens jeg ventet på å høre moren min komme ned gangen. Hun kom aldri. Jeg vil spørre henne: Hvorfor kom du aldri inn på rommet mitt etterpå?",
      "suggestion": "Moren din er fraværende i gangen etterpå, og spørsmålet står fortsatt igjen. Vil du prøve å spørre henne med den tomme stolen? Hvis du vil, se henne for deg på en avstand du velger og begynn med: «Hvorfor kom du aldri inn på rommet mitt etterpå?» Vi kan stoppe etter den ene setningen."
    },
    "dp_marker-recognition-chairwork_case-carlos_01": {
      "text": "[Sint, med knyttede never] Etter at jeg slo hull i veggen, tenkte jeg hele tiden: Hva slags mann skremmer sin egen familie? Jeg så ansiktet til sønnen min, og så startet angrepet, som om det ikke var noen far igjen, bare en farlig mann på kjøkkenet.",
      "suggestion": "Hullet i veggen blir til et angrep på faren i deg. Vil du prøve to stoler for å høre anklagen og hvordan den virker på deg? Det unnskylder ikke at du skremte familien. Hvis du vil, se deg selv for deg i den andre stolen og si fra stolen med den anklagende stemmen: «Hva slags mann skremmer sin egen familie?» Så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt si til faren min at beltet ikke gjorde meg til mann. Det gjorde meg bare redd for ham.",
      "suggestion": "Den linjen om beltet og frykten hører rett til faren din. Hvis du vil, setter vi ham i den tomme stolen og begynner direkte: «Beltet gjorde meg ikke til mann. Det gjorde meg redd for deg.» Vi holder oss til noen få sterke linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      "text": "[Anspent og skamfull] Jeg begynner å si unnskyld til sønnen min, og så lukker munnen seg. Jeg tenker: ikke vis svakhet, og ansiktet mitt blir hardt.",
      "suggestion": "Unnskyldningen begynner, og det harde ansiktet legger seg over den før den når sønnen din. Vil du prøve to stoler for å se hvordan du stopper unnskyldningen? Hvis du vil, se siden som ønsket å reparere for deg i den andre stolen. Fra denne stolen sier du at han ikke skal vise svakhet, og forsvarer det harde. Så flytter vi til faren som ville reparere."
    },
    "dp_marker-recognition-chairwork_case-carlos_04": {
      "text": "[Skamfull] Etter at jeg roper, kaller jeg meg et monster og blir så sint på meg selv for å tenke det. Alle blir stille, jeg hører det ordet i hodet, og så svarer en annen del: Slutt å sutre og fiks det.",
      "suggestion": "Etter ropingen blir ordet «monster» et indre angrep. Vil du gi stemmen som sier «monster» én stol og delen som hører det den andre? Hvis du vil, start som den angripende stemmen og si ordet direkte; så lar vi den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-carlos_05": {
      "text": "[Anspent og sint] Jeg vil si til faren min: «Jeg var et barn, ikke en av soldatene dine.» Han fikk meg til å stå rett og tåle det, og selv nå låser ryggen seg før jeg klarer å si hvor redd jeg var.",
      "suggestion": "Den setningen skal til faren din og måten han behandlet deg på. Hvis du vil, plasserer vi ham i den tomme stolen og lar deg si den direkte, mens jeg hjelper deg å holde rammen avgrenset."
    },
    "dp_marker-recognition-chairwork_case-carlos_06": {
      "text": "[Anspent] Når stemmen min skjelver, kremter jeg, retter meg opp og gjør ansiktet hardt. Jeg kan nesten høre faren min si: Ikke la dem se deg sånn, så jeg gjør det om til et blikk.",
      "suggestion": "Det harde ansiktet gjør skjelvingen usynlig. Vil du prøve to stoler for å se hvordan du stopper skjelvingen? Hvis du vil, får siden med det harde ansiktet én stol og den skjelvende siden den andre. Fra den første stolen gjør du ansiktet hardt og sier: «Ikke la dem se deg sånn.» Så flytter vi til siden som skalv."
    },
    "dp_marker-recognition-chairwork_case-carlos_07": {
      "text": "[Bekymret] Hvis jeg lar sønnen min snakke meg imot én gang, ser jeg for meg at jeg mister all respekt i huset. Først himler han med øynene, så ser kona mi at jeg ikke har autoritet, så hører ingen på meg og jeg er ingenting der.",
      "suggestion": "Bekymringen gjør én himling med øynene til at hele huset mister respekt for deg. Vil du prøve to stoler, én for bekymringen og én for faren som må høre den? Hvis du vil, la bekymringen si hva den frykter: først blikket fra sønnen din, så kona di som ser at du ikke har autoritet. Etterpå bytter vi og hører faren under presset."
    },
    "dp_marker-recognition-chairwork_case-carlos_08": {
      "text": "[Defensiv] Jeg sier til meg selv at bare tapere trenger hjelp med sinne. Så ser jeg for meg faren min som ler av en mann som ikke klarer å styre huset sitt, og jeg hører den samme latteren i hodet når kona mi sier at terapi kanskje kan hjelpe.",
      "suggestion": "Latteren til faren din har blitt en stemme som gjør hjelp ydmykende. Vil du gi den stemmen én stol og siden som vil noe annet for familien den andre? Hvis du vil, la stemmen si «bare tapere trenger hjelp» med tonen hans. Så bytter vi til siden som vil noe annet for familien din."
    },
    "dp_marker-recognition-chairwork_case-carlos_09": {
      "text": "[Lav stemme] Jeg skulle ønske jeg kunne si til kona mi at jeg blir redd når hun ser på meg som om hun er redd.",
      "suggestion": "Kona di er personen som trenger å høre dette, der frykten mellom dere kan få et navn. Vil du prøve å si det med henne i tankene i den tomme stolen? Hvis du vil, se henne for deg der og begynn langsomt med: «Jeg blir redd når du ser redd ut for meg.» Vi presser ikke fram mer enn én eller to linjer."
    },
    "dp_marker-recognition-chairwork_case-carlos_10": {
      "text": "[Anspent og sint] Når tårene kommer, strammer jeg kjeven og gjør dem om til varme før noen kan se dem. Hvis sinnet er der, spør ingen hva som gjorde vondt. De rygger bare, og det kjennes tryggere.",
      "suggestion": "Tårene blir gjort om til varme før noen når inn til det såre. Vil du prøve to stoler for å se hvordan tårene blir til sinne? Hvis du vil, får siden som stopper tårene én stol og den gråtende siden den andre. Fra den første stolen viser du hvordan du strammer kjeven, blir varm og får folk til å rygge; så flytter vi til den gråtende siden."
    },
    "dp_marker-recognition-chairwork_case-nina_01": {
      "text": "[Sliten] Skilsmissen er sikkert min feil. Jeg hører denne listen om og om igjen: du burde vært søtere, roligere, enklere, mindre utslitt. Hvis du ikke hadde trengt så mye, hadde han kanskje ikke gått.",
      "suggestion": "Den stemmen gjør utmattelse og behov om til bevis på at skilsmissen var din feil. Vil du gi den anklagende stemmen én stol og den utslitte siden den andre? Hvis du vil, start som skylden og si at hun burde vært søtere, roligere og trengt mindre. Så flytter vi til den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      "text": "[Unnskyldende] Jeg tenker fortsatt på det jeg aldri sa til eksen min: «Du lot meg bære alt, og så skyldte du på meg for at jeg var sliten.»",
      "suggestion": "Her ligger det noe usagt til eksen din: du bar for mye og fikk skylden for å være utslitt. Vil du prøve å si det til ham med den tomme stolen? Hvis du vil, plasser ham her, si akkurat den setningen først, og deretter hva det kostet å holde den tilbake."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      "text": "[Skyldpreget] Når jeg blir sint for at folk trenger meg, tenker jeg med en gang at jeg er et dårlig menneske. Så smiler jeg og spør hva mer de trenger.",
      "suggestion": "«Dårlig person»-budskapet stopper sinnet og sender deg rett tilbake til omsorg. Vil du prøve to stoler for å se hvordan sinnet blir stoppet? Hvis du vil, får stemmen som stopper én stol og sinnet den andre. Fra den første stolen sier du til henne at hun er dårlig fordi hun blir sint; så flytter vi til sinnet som aldri får komme til."
    },
    "dp_marker-recognition-chairwork_case-nina_04": {
      "text": "[Sliten] Jeg sier til meg selv at en god mor ikke ville ønsket seg en time der ingen trenger henne. Når jeg lukker soveromsdøren, starter regelen: egoistisk, lat, hva slags mor gjemmer seg for sin egen familie?",
      "suggestion": "God-mor-regelen angriper behovet for hvile med én gang døren lukkes. Vil du gi den regelen én stol og den utslitte siden den andre? Hvis du vil, la først regelen si: «Egoistisk, lat, hva slags mor gjemmer seg?» Så bytter vi og hører den trøtte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_05": {
      "text": "[Unnskyldende] Jeg vil si til moren min: «Jeg var barnet; du skulle ha lagt merke til meg.» Når hun nå snakker om hvor ensom hun er, vil jeg si: Jeg var også ensom, men så føler jeg meg slem.",
      "suggestion": "Barnedelen i deg retter seg mot moren din. Hvis du vil, henter vi henne inn i den tomme stolen og begynner med: «Jeg var barnet; du skulle ha lagt merke til meg.» Bare noen få ord om gangen."
    },
    "dp_marker-recognition-chairwork_case-nina_06": {
      "text": "[Splittet] Når sinnet stiger, smiler jeg og spør hva alle vil ha til middag. Det skjer så fort at jeg nesten ikke merker sinnet før senere, når jeg står og vasker benken altfor hardt og ser for meg hva jeg skulle ønske jeg hadde sagt.",
      "suggestion": "Omsorgsbevegelsen legger seg over sinnet før du nesten rekker å høre det. Vil du prøve to stoler for å se hvordan omsorgen stopper sinnet? Hvis du vil, får siden som tar vare på andre én stol og sinnet den andre. Fra den første stolen viser du hvordan du smiler, spør om middag og holder huset i gang. Så flytter vi til sinnet og lar det si én enkel setning."
    },
    "dp_marker-recognition-chairwork_case-nina_07": {
      "text": "[Skyldpreget] Hvis middagen ikke er klar, kaller jeg meg ubrukelig. Jeg kan ha jobbet hele dagen, svart på alles meldinger, hjulpet guttene, og likevel blir én ting jeg ikke rakk til bevis på at jeg svikter i den eneste jobben som betyr noe.",
      "suggestion": "Middagen som mangler, blir til en stemme som sier at hele verdien din avhenger av konstant omsorg. Vil du prøve to stoler, én for stemmen som sier «ubrukelig» og én for den slitne siden? Hvis du vil, sier du fra den første stolen at den manglende middagen beviser at hun svikter; så bytter vi og hører den utslitte siden som bærer så mye."
    },
    "dp_marker-recognition-chairwork_case-nina_08": {
      "text": "[På gråten] Jeg vil fortsatt si til eksen min: «Du dro, og likevel er det jeg som fortsatt sier unnskyld.» Jeg håndterer skjemaene, guttene, meldingene, og jeg hører meg fortsatt forklare hvorfor jeg ikke gjør nok.",
      "suggestion": "Unnskyldningen du fortsatt bærer, retter seg mot eksen din. Vil du prøve å si det med ham i tankene i den tomme stolen? Hvis du vil, se ham for deg der og begynn med: «Du dro, og likevel er det jeg som fortsatt sier unnskyld.» Så stopper vi og merker hva den vekker."
    },
    "dp_marker-recognition-chairwork_case-nina_09": {
      "text": "[Unnskyldende] Jeg prøver å si nei, og så forklarer jeg til nei-et blir et ja. Jeg begynner med: Jeg kan ikke i dag, og før de rekker å protestere, ramser jeg opp grunner, gjør stemmen mildere og tilbyr en annen måte å hjelpe på.",
      "suggestion": "Forklaringen gjør grensen så myk at neiet forsvinner. Vil du prøve to stoler for å se hvordan neiet blir til ja? Hvis du vil, får siden som forklarer én stol og siden som ønsket å si nei den andre. Fra den første stolen viser du hvordan du forklarer til du sier ja. Så flytter vi til siden som ville at neiet skulle holde."
    },
    "dp_marker-recognition-chairwork_case-nina_10": {
      "text": "[Bekymret] Når jeg hviler, ramser hodet opp alle som kan falle sammen uten meg. Det begynner med at moren min trenger skyss, så at guttene glemmer noe, så at huset blir kaos, og plutselig føles det å sitte stille som forsømmelse.",
      "suggestion": "Bekymringen får hvile til å kjennes som forsømmelse ved å vise alle som kan falle sammen. Vil du gi bekymringen én stol og den utslitte siden den andre? Hvis du vil, la bekymringen fortelle hva den frykter vil skje. Så flytter vi til den utslitte siden som prøver å hvile under presset."
    },
    "dp_marker-recognition-chairwork_case-aisha_01": {
      "text": "[Desperat] Hvis noen ikke svarer, går hodet mitt rett til at de er med noen bedre, legger det ut, og at alle ser at jeg er byttet ut. Da må jeg kutte dem ut først.",
      "suggestion": "Bekymringen er veldig aktiv her: den viser deg scener der du blir byttet ut, helt til det kjennes tryggere å kutte dem av enn å vente. Vil du prøve to stoler for å se hva bekymringen gjør med deg? Hvis du vil, får bekymringen én stol og siden som hører den den andre. Fra den første stolen forteller du henne én scene om gangen; etterpå bytter vi til siden som må høre det."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      "text": "[Rasende] Jeg ser fortsatt for meg eksen min i seng med en annen. Jeg hater ham, og så hater jeg meg selv for at jeg fortsatt vil ha ham.",
      "suggestion": "Bildet, raseriet og lengselen er fortsatt her, som noe du trenger å få sagt til ham. Hvis du vil, setter vi ham i den tomme stolen, så ordene kan gå til ham i stedet for tilbake mot deg. Begynn med: «Jeg ser deg fortsatt med henne ...»"
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      "text": "[Redd og skamfull] Etter alt som skjedde med meg, kaller jeg meg skitten og umulig å elske. Når noen berører meg ømt, sier den første stemmen at de ville gått hvis de kjente hele historien.",
      "suggestion": "Angrepet kaller deg skitten for det som ble gjort mot deg, og den sårede siden blir sittende alene med skammen. Vil du prøve to stoler for å høre angrepet og hvordan det virker på deg, én setning om gangen? Vi kan stoppe når som helst. Hvis du vil prøve, får den angripende stemmen én stol og den sårede siden den andre. Først får angrepet si ordene sine nøyaktig; så bytter vi og hører siden som har båret dem."
    },
    "dp_marker-recognition-chairwork_case-aisha_04": {
      "text": "[Skamfull] Etter at jeg har tekstet noen altfor mange ganger, kaller jeg meg gal og ekkel. Jeg sletter tråden, åpner den igjen, og sier til meg selv at ingen normal person ville trengt bevis så desperat. Angrepet føles nesten tryggere enn å vente.",
      "suggestion": "Angrepet prøver å kontrollere panikken i ventingen ved å gå løs på deg først. Vil du prøve å bremse det ned med to stoler? Fra denne stolen lar du den angripende stemmen si hva den kaller deg etter meldingene; så bytter vi til den redde siden i små, støttede steg."
    },
    "dp_marker-recognition-chairwork_case-aisha_05": {
      "text": "[Rasende] Jeg vil fortsatt si til moren min: «Du lot meg bli igjen hos mennesker som skadet meg.» Jeg var et barn, og du fortsatte å velge dem, og så lot du som om du var sjokkert over at jeg var sint.",
      "suggestion": "Her er det noe du fortsatt trenger å si til moren din om å bli stående uten beskyttelse, og så få sinnet behandlet som problemet. Vil du prøve én setning til henne med den tomme stolen? Du velger avstanden og kan stoppe. Hvis du vil prøve, se henne for deg der og begynn med: «Du lot meg bli igjen hos mennesker som skadet meg», og så stopper vi opp."
    },
    "dp_marker-recognition-chairwork_case-aisha_06": {
      "text": "[Panisk] Når jeg kjenner at jeg trenger noen, begynner jeg å anklage dem før de kan dra. Jeg hører meg selv si: Greit, dra da, du brydde deg aldri uansett, mens en annen del trygler dem om å bli.",
      "suggestion": "Den anklagende delen kommer først, så behovet ikke blir stående synlig. Vil du prøve to stoler for å se hvordan den anklagende siden holder behovet skjult? Hvis du vil, får den anklagende siden én stol og siden som trenger nærhet den andre. Fra den første stolen sier du «greit, dra da, du brydde deg aldri» direkte til siden som trenger noen; så bytter vi og hører siden som tryglet dem om å bli."
    },
    "dp_marker-recognition-chairwork_case-aisha_07": {
      "text": "[Bekymret] Hvis du ikke svarer, viser hodet mitt ti scener der jeg blir byttet ut og alle vet det. Det går fra én stille telefon til at du bestemmer at jeg er for mye, og så er alle enige om at jeg alltid var for mye.",
      "suggestion": "Bekymringen tar én stille telefon og lager en hel historie om å bli byttet ut, helt til du blir oversvømt. Hvis du vil, gir vi bekymringen én stol og den oversvømte siden den andre. Sitt her som bekymringen og vis scenene én om gangen; så bytter vi og hører hvordan det er å ta dem inn."
    },
    "dp_marker-recognition-chairwork_case-aisha_08": {
      "text": "[Lav stemme] Jeg fikk aldri sagt til personen som skadet meg: «Du får ikke gjøre meg skitten.» Ordene setter seg fast fordi en del av meg ser for seg at han ler, men en annen del vil fortsatt si dem rett til ham.",
      "suggestion": "Det er noe viktig du aldri fikk sagt til personen som skadet deg. Hvis du velger å prøve, går vi veldig langsomt: Sett ham i den tomme stolen og si bare den ene linjen først, mens vi holder føttene dine i rommet og du bestemmer tempoet."
    },
    "dp_marker-recognition-chairwork_case-aisha_09": {
      "text": "[Skamfull] Når jeg vil ha nærhet, kaller jeg meg patetisk før noen andre kan gjøre det. Hvis jeg savner noen, sier jeg til meg selv at jeg skal holde kjeft, slutte å tigge, slutte å oppføre meg som et barn. Det er som om jeg angriper behovet før den andre får sjansen.",
      "suggestion": "Selvangrepet når fram til lengselen før noen andre kan avvise den. Vil du prøve to stoler for å høre angrepet og hvordan det virker på lengselen? Hvis du vil, får den angripende stemmen én stol og den lengtende siden den andre. Først lar vi den angripende stemmen si «slutt å tigge, slutt å oppføre deg som et barn» direkte til den lengtende siden; så bytter vi, så lengselen ikke blir alene med det."
    },
    "dp_marker-recognition-chairwork_case-aisha_10": {
      "text": "[På gråten] Når sorgen begynner å synes, ler jeg for høyt og sier: «Glem det, dette er dumt.» Så lager jeg en spøk om at jeg er dramatisk, og den gråtende delen blir stille som om den fikk en ørefik.",
      "suggestion": "Den hånlige stemmen stenger sorgen ned før den får vise seg. Vil du la den siden ta denne stolen først, bare kort? Si «glem det, dette er dumt» til den gråtende siden; så bytter vi og gir den sørgende siden noen få beskyttede ord."
    },
    "dp_marker-recognition-chairwork_case-david_01": {
      "text": "[Selvbebreidende] Hvis jeg ikke er eksepsjonell, sier jeg til meg selv at det ikke finnes noen grunn til at noen skulle bli. Ordinær betyr utskiftbar. Utskiftbar betyr at jeg allerede har tapt; de har bare ikke sagt det høyt ennå.",
      "suggestion": "Kravet gjør verdien din avhengig av å være eksepsjonell, og behandler det ordinære som om det å bli forlatt allerede har begynt. Vil du gi kravet én stol og siden som må leve med det den andre? Hvis du vil, argumenterer du fra den første stolen for at vanlig betyr utskiftbar; så bytter vi og hører virkningen."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      "text": "[Avvisende] Kona mi sier at hun kanskje er ferdig, og jeg sier til meg selv at bare en idiot ødelegger sin egen familie og likevel forventer sympati.",
      "suggestion": "Det er en hard skyldstemme som gjør smerten i ekteskapet til bevis på at du ikke fortjener sympati. Vil du prøve to stoler for å høre angrepet og hvordan det virker på deg? Hvis du vil, se deg selv for deg i den andre stolen. Fra stolen med den angripende stemmen sier du til den siden av deg selv at han er en idiot som ødela familien; så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      "text": "[Såret, men skarp] Jeg hater hvordan faren min gjorde alt til en prestasjon, men med en gang jeg sier det, begynner jeg å forsvare ham: han presset meg jo fordi han trodde på meg.",
      "suggestion": "En forsvarende side kommer inn straks sinnet mot faren din viser seg, så sinnet mister stemmen sin. Hvis du vil, gir vi den forsvareren denne stolen først: forklar ham og si til David hvorfor han ikke skal være sint. Så flytter vi til den sinte siden og lar den svare uten å debattere."
    },
    "dp_marker-recognition-chairwork_case-david_04": {
      "text": "[Avvisende] Jeg sier til meg selv at middelmådige menn mister familien sin og fortjener det. Ordet middelmådig er verre enn grusomt; det betyr at jeg ble vanlig, utskiftbar, en mann ingen har noen grunn til å velge.",
      "suggestion": "En hard selvkritisk stemme binder verdien din til å være eksepsjonell og bruker middelmådighet som en dom. Vil du gi den stemmen én stol og siden den angriper den andre? Hvis du vil, sier du fra den første stolen nøyaktig hvorfor middelmådige menn fortjener å miste; så bytter vi og lar den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-david_05": {
      "text": "[Kontrollert] Jeg vil si til faren min: «Jeg var sønnen din, ikke et prosjekt.» Jeg hører ham fortsatt vurdere karakterene mine, holdningen min, håndtrykket mitt, som om alt ved meg var noe som skulle optimaliseres. Jeg fikk aldri spurt om han noen gang så meg.",
      "suggestion": "Du fikk aldri sagt til faren din hvordan det var å bli behandlet som et prestasjonsprosjekt, ikke som en sønn. Hvis du vil, setter vi ham i den tomme stolen og lar deg si den første linjen direkte: «Jeg var sønnen din, ikke et prosjekt.» Så stopper vi og ser om spørsmålet om å bli sett vil komme etterpå."
    },
    "dp_marker-recognition-chairwork_case-david_06": {
      "text": "[Kontrollert] Når skammen stiger, begynner jeg å ramse opp prestasjoner til jeg ikke kjenner den. Jeg går gjennom omsetningstall, forfremmelser, ting folk misunner. Det virker et øyeblikk, men så sitter jeg alene med den samme hule følelsen og enda mer forakt for at jeg trengte listen.",
      "suggestion": "Prestasjonslisten avbryter skammen før den kan kjennes, og så kommer skammen tilbake med forakt lagt oppå. Ville det være greit å bruke to stoler? Fra denne stolen ramser du opp prestasjonene og argumenterer for å blokkere skammen; så bytter vi og hører fra den skamfulle siden som står igjen når listen tar slutt."
    },
    "dp_marker-recognition-chairwork_case-david_07": {
      "text": "[Bekymret] Hvis jeg innrømmer én feil, ser jeg for meg at alle bestemmer seg for at jeg er en bløff. Det stopper ikke ved feilen; det blir til at styret mister tilliten, kona mi sier at hun visste det, og folk innser at hele bildet var falskt.",
      "suggestion": "Bekymringen gjør én feil til total avsløring, som om hele bildet kan falle sammen på én gang. Vil du prøve to stoler, én for bekymringen og én for siden som må høre den? Hvis du vil, la bekymringen forutsi nøyaktig hva som skjer hvis du innrømmer én feil; så bytter vi til siden som lever under de scenene."
    },
    "dp_marker-recognition-chairwork_case-david_08": {
      "text": "[Lav stemme] Jeg vil si til kona mi at jeg er livredd for at hun endelig ser den ekte meg. Etter den siste krangelen så hun på meg som om forestillingen var over, og jeg ville si: Ikke bestem deg for at dette er alt jeg er.",
      "suggestion": "Det er noe uferdig mellom deg og kona di rundt å bli sett uten forestillingen, og frykten for at hun skal gå. Hvis du vil, henter vi henne inn i den tomme stolen og lar ordene gå direkte til henne: «Ikke bestem deg for at dette er alt jeg er.» Så stopper vi før forsvaret kommer inn."
    },
    "dp_marker-recognition-chairwork_case-david_09": {
      "text": "[Skamfull] Jeg sier til meg selv at affæren beviser at jeg er søppel. Ikke bare at jeg gjorde noe destruktivt, men at under tittelen, pengene, alt sammen, er dette den jeg egentlig er. Så hater jeg meg selv for å høres dramatisk ut.",
      "suggestion": "Det er et hardt selvangrep rundt affæren, der en handling blir gjort til en dom over hele deg. Vil du prøve to stoler, én for stemmen som sier «søppel» og én for den skamfulle siden? Å forstå angrepet unnskylder ikke affæren. Hvis du vil, lar du fra den første stolen angrepet si hele dommen; så bytter vi, så du kan høre og svare det i stedet for bare å tåle det."
    },
    "dp_marker-recognition-chairwork_case-david_10": {
      "text": "[Avvisende] Når tristhet dukker opp, analyserer jeg alles tonefall til følelsen er borte. Jeg kan gjøre en samtale med kona mi til et referat i hodet, finne inkonsekvenser, bevise poenget mitt, og da er strammingen i halsen borte.",
      "suggestion": "Analysen flytter deg inn i en rettssal før tristheten får snakke, så strammingen forsvinner uten å bli hørt. Vil du gjøre den avbrytelsen konkret? Fra denne stolen analyserer du tonefallet hennes og flytter ham bort fra strammingen; så flytter vi til tristheten og lar den si noen direkte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_01": {
      "text": "[Rasende] Faren min hadde sine egne skader, det vet jeg. Men jeg hater ham fortsatt for å ha tatt volden med inn i huset vårt og latt oss leve med den.",
      "suggestion": "Du har fortsatt noe å si til faren din: du forstår noe av det han bar på, og du hater fortsatt volden han tok med inn i huset. Hvis du vil, henter vi ham inn i den tomme stolen og lar begge deler gå direkte til ham. Begynn med: «Jeg vet at du hadde dine skader, og jeg hater det du tok med hjem.»"
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      "text": "[Lav stemme] De låste meg inne i skapet, og jeg tenker fortsatt at jeg må ha vært umulig, ellers hadde de vel ikke gjort det.",
      "suggestion": "Skylden gjør det som ble gjort mot deg til en dom over barnet som ble låst inne. Vil du prøve to stoler for å høre anklagen og hvordan den virker på deg? Vi kan stoppe når som helst. Hvis du vil prøve, se den yngre siden av deg selv for deg i den andre stolen og si til ham fra stolen med den anklagende stemmen at han må ha vært umulig; så bytter vi og hører fra barnet som ikke hadde noen vei ut."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      "text": "[Rasende] Selv her inne låser kjeven seg når jeg forestiller meg å si til den fosterfaren at jeg hater ham. Jeg hører: «Ikke si det. Ikke gjør det verre.»",
      "suggestion": "Kjeven låser sinnet før det kan nå fram til ham, som om det å uttrykke det kan gjøre faren levende igjen. Hvis du vil, lar vi den låsende siden ta denne stolen først: si «ikke si det, ikke gjør det verre» direkte til ham. Så flytter vi til sinnet og gir det noen kontrollerte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_04": {
      "text": "[Flatt] Jeg sier til meg selv at jeg burde vært over det nå; andre har hatt det verre og fungerer likevel. Når jeg ikke får sove eller fylt ut papirer, sier stemmen at jeg bruker fortiden som unnskyldning.",
      "suggestion": "Den avvisende stemmen bruker sammenligning for å få traumereaksjonene til å høres ut som unnskyldninger. Vil du gi den avvisende stemmen én stol og siden som lever med traumereaksjonene den andre? Du kan stoppe. Hvis du vil prøve, begynn som den avvisende stemmen: si til ham at han burde vært over det nå, og at andre fungerer bedre."
    },
    "dp_marker-recognition-chairwork_case-marcus_05": {
      "text": "[Lav stemme] Jeg vil spørre fostermoren min hvorfor ingen kom da jeg banket. Jeg husker at jeg banket stille først, så hardere, og så sluttet fordi jeg tenkte at jeg gjorde det verre. Jeg fikk aldri spurt om hun hørte meg.",
      "suggestion": "Spørsmålet til fostermoren din er fortsatt der: om hun hørte deg, og hvorfor du ble alene. Hvis du vil, setter vi henne i den tomme stolen og lar deg spørre direkte: «Hørte du at jeg banket?» Vi holder det langsomt, med pauser, så du velger hvor mye du sier."
    },
    "dp_marker-recognition-chairwork_case-marcus_06": {
      "text": "[Stille og på vakt] Når stemmen min skjelver, slutter jeg å snakke og stirrer i gulvet. Det er som om en hånd kommer over munnen min innenfra: Ikke gi dem mer. Ikke gjør det verre.",
      "suggestion": "Den indre hånden over munnen stopper den skjelvende stemmen før noen kommer nærmere. Vil du prøve to stoler for å se hvordan du stopper deg selv fra å snakke? Hvis du vil prøve, se siden av deg selv som vil snakke for deg i den andre stolen. Fra stolen som stopper, sier du «ikke gi dem mer» til ham; så flytter vi til den skjelvende stemmen for noen få ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_07": {
      "text": "[Bekymret] Hvis jeg sover tungt, er jeg redd jeg våkner tilbake der og ikke vet hvor jeg er. Så jeg lar TV-en stå på og holder meg halvvåken, som om bekymringen står vakt.",
      "suggestion": "Bekymringen står vakt ved å gjøre søvn farlig og holde deg halvvåken. Vil du sette den vakten i denne stolen en kort runde? La den advare deg mot søvn og hva som kan skje; så bytter vi og hører fra den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-marcus_08": {
      "text": "[Rasende] Jeg vil fortsatt si til faren min: «Du tok krigen med hjem og fikk oss til å leve inni den.» Han snakket om det som hadde skjedd med ham som om det forklarte alt, men det var jeg som lå og lyttet etter støvlene hans om natten.",
      "suggestion": "Volden og frykten hjemme peker mot noe du fortsatt trenger å si til faren din. Hvis du velger å prøve, henter vi ham inn i den tomme stolen og lar setningen gå til ham, ikke bare bli inni deg: «Du tok krigen med hjem.» Så stopper vi og holder deg forankret."
    },
    "dp_marker-recognition-chairwork_case-marcus_09": {
      "text": "[Skamfull] Å trenge hjelp får meg til å si til meg selv at jeg er ubrukelig. Hvis jeg ikke klarer papirarbeid, søvn, telefonsamtaler, vanlige ting, hører jeg: Hva duger du egentlig til? Så slutter jeg å spørre og lar ting hope seg opp.",
      "suggestion": "Selvangrepet gjør det å trenge hjelp til bevis på at du er ubrukelig, og da blir det stille rundt det å spørre. Vil du prøve to stoler, én for angrepet og én for siden som trenger hjelp? Vi kan stoppe når som helst. Hvis du vil, sier du fra den første stolen «hva duger du egentlig til?»; så bytter vi og lar den trengende siden svare uten å bli presset."
    },
    "dp_marker-recognition-chairwork_case-marcus_10": {
      "text": "[Anspent og på vakt] Når søsteren min spør om fortiden, hører jeg: «Steng det ned», og så bytter jeg tema.",
      "suggestion": "«Steng det ned»-stemmen kutter kontakten med fortiden idet søsteren din spør, før noe sårbart får vist seg. Vil du prøve en kort runde med to stoler for å se hvordan du stopper deg selv? Hvis du vil, får stemmen som stopper én stol og siden som blir spurt den andre. Fra den første stolen sier du «steng det ned» og viser hvordan du bytter tema; så flytter vi til siden som ble spurt."
    },
    "dp_alliance-repair_case-sara_01": {
      "text": "[Flau] Av og til tror jeg du blir lei når jeg forteller om bruddet igjen, og da føler jeg meg dum som fortsatt tar det opp her.",
      "suggestion": "Takk for at du sier fra. Du er redd jeg kjeder meg, og så skammer du deg over å ta sorgen med hit. Jeg vil forstå når du mister følelsen av at jeg lytter. Hva har du lagt merke til i de øyeblikkene?"
    },
    "dp_alliance-repair_case-sara_02": {
      "text": "[Flau] Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er. Jeg vet at jeg må fungere, men akkurat da hørtes det ut som om du ville ha den praktiske versjonen av meg tilbake for fort.",
      "suggestion": "Spørsmålet mitt om jobb fikk deg til å kjenne at jeg gikk for fort forbi det vonde. Unnskyld. Vi kan la jobb ligge nå. Hva trenger du at jeg forstår om hvor vondt dette er?"
    },
    "dp_alliance-repair_case-sara_03": {
      "text": "[Engstelig] Da jeg beklaget at jeg gråt, gjorde stillheten din meg redd for at jeg var for trengende for terapi. Jeg begynte å skanne ansiktet ditt for å finne ut om jeg burde ta meg sammen før du ble lei av meg.",
      "suggestion": "Stillheten min fikk deg til å lure på om tårene var for mye for meg. Unnskyld. Jeg kan si at jeg lytter, i stedet for å la deg prøve å lese ansiktet mitt. Ville det hjelpe når tårene kommer?"
    },
    "dp_alliance-repair_case-sara_04": {
      "text": "[Flau] Når du stadig kaller det sorg, føles det som om du allerede har bestemt hva dette er. Noe av det er sorg, men noe er sinne, ydmykelse, savn og følelsen av å være dum, og jeg vil ikke at det skal flates ut.",
      "suggestion": "Jeg fortsatte å si «sorg» mens du fortalte at det var mer enn det. Unnskyld. Jeg kan legge det ordet bort og lytte til sinnet, ydmykelsen og savnet uten å bestemme at alt betyr det samme."
    },
    "dp_alliance-repair_case-sara_05": {
      "text": "[På gråten] Forrige time sluttet mens jeg fortsatt gråt, og jeg gikk til bilen med følelsen av å være overlatt til meg selv. Jeg vet at tiden var ute, men jeg fortsatte å tenke at jeg ikke burde ha åpnet meg så mye så nær slutten.",
      "suggestion": "Vi avsluttet mens du fortsatt gråt, og du kjente deg overlatt til deg selv. Unnskyld. Vi kan sette av litt tid før avslutningen til å høre hvordan du har det, og hva du trenger videre den dagen. Hvordan ville det være for deg?"
    },
    "dp_alliance-repair_case-sara_06": {
      "text": "[Såret] Da du spurte om jeg hadde tenkt på å date igjen, føltes det som om du ville at jeg skulle gå videre allerede.",
      "suggestion": "Da jeg spurte om dating, kjente du deg presset til å gå videre fra sorgen før du var klar. Unnskyld. Vi kan legge det spørsmålet bort. Hva trenger du at jeg forstår om hvordan du har det nå?"
    },
    "dp_alliance-repair_case-sara_07": {
      "text": "[Stille] Du sa feil navn på ham forrige uke, og jeg følte meg dum som brydde meg så mye. Men navnet hans er fortsatt overalt i hodet mitt, så da du sa feil, kjentes det som om forholdet ble mindre virkelig her også.",
      "suggestion": "Jeg sa feil navn, og noe viktig for deg kjentes mindre virkelig her. Unnskyld. Du skal ikke måtte ordne opp i det for meg. Jeg vil være mer nøye med navnet hans. Er det mer om det øyeblikket du vil at jeg skal høre?"
    },
    "dp_alliance-repair_case-sara_08": {
      "text": "[Flau] Da jeg innrømmet at jeg sjekket profilen hans, så ansiktet ditt skuffet ut, og jeg fikk lyst til å ta det tilbake. Jeg kom hit fordi jeg allerede skammer meg over det, så det blikket fikk meg til å ville gjemme meg.",
      "suggestion": "Du så skuffelse i ansiktet mitt og ville skjule det du nettopp hadde fortalt. Jeg beklager at uttrykket mitt virket slik på deg. Jeg vil forstå hvordan det er for deg å sjekke profilen hans. Hva trengte du fra meg da?"
    },
    "dp_alliance-repair_case-sara_09": {
      "text": "[Engstelig] Da du spurte hvem andre som støtter meg, hørtes det ut som om du prøvde å sende meg videre til noen andre.",
      "suggestion": "Spørsmålet mitt om støtte hørtes ut som om jeg ville sende deg videre. Unnskyld. Jeg spurte om hvem du kan vende deg til mellom timene. Jeg vil at vi snakker om det sammen, med plass til det du trenger fra meg også."
    },
    "dp_alliance-repair_case-sara_10": {
      "text": "[Lavmælt] Når du ser ned på notatene mens jeg snakker om ham, føles det som om du forsvinner et øyeblikk.",
      "suggestion": "Da jeg så ned på notatene i et sårt øyeblikk, kjente du at jeg forsvant. Det beklager jeg. Ville det hjelpe om jeg spurte før jeg skrev, eller la notatene bort når du snakker om det vondeste?"
    },
    "dp_alliance-repair_case-michael_01": {
      "text": "[Såret, men skarp] Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak. Jeg vet at såret sikkert er et terapiord for deg, men i hodet mitt hørtes det ut som om du tok bort den delen av meg som klarer ting.",
      "suggestion": "Ordet «såret» hørtes ut som om jeg kalte deg svak og tok fra deg styrken. Unnskyld. Jeg vil høre hvordan du selv ville beskrive det, uten å legge mine ord på deg."
    },
    "dp_alliance-repair_case-michael_02": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med sinne som mitt, eller følger du bare en manual? Jeg må vite om du tåler konsekvensene hvis dette går dårlig hjemme.",
      "suggestion": "Du trenger å vite om jeg kan hjelpe med noe som får reelle følger hjemme. Det er et rimelig spørsmål. Jeg kan forklare hvilken opplæring og veiledning jeg har, og hvor grensene mine går. Så kan vi sammen vurdere om hjelpen jeg kan tilby, passer det du trenger."
    },
    "dp_alliance-repair_case-michael_03": {
      "text": "[Såret, men skarp] Da du pauset og så på meg etter at jeg ble sint, følte jeg meg dømt, som om du ventet på å se om jeg kom til å eksplodere. Jeg sluttet å høre på deg og begynte å bevise at jeg fortsatt hadde kontroll.",
      "suggestion": "Pausen min og måten jeg så på deg, kjentes dømmende. Unnskyld. Jeg kan si hva jeg legger merke til, i stedet for å la deg lure på om jeg venter et utbrudd. Hvordan var den pausen for deg?"
    },
    "dp_alliance-repair_case-michael_04": {
      "text": "[Defensiv] Da du spurte om frykten til kona mi først, føltes det som om du allerede hadde bestemt at jeg var problemet. Jeg kjente at jeg begynte å bygge et forsvar i stedet for å høre på spørsmålet.",
      "suggestion": "Jeg spurte om frykten hennes før jeg hadde hørt din opplevelse, og du kjente at jeg allerede hadde tatt side. Unnskyld. Jeg vil høre hva som skjedde for deg også, samtidig som jeg tar frykten hennes på alvor. Hva overså jeg?"
    },
    "dp_alliance-repair_case-michael_05": {
      "text": "[Skeptisk] Da du sa at sinne beskytter sårhet, hørtes det ut som noe fra en lærebok, som om du hadde modellen klar før du hadde hørt meg. Jeg vet at jeg blir sint, men jeg vil ikke bli gjort om til et terapieksempel.",
      "suggestion": "Jeg ga en forklaring før jeg hadde forstått hvordan sinnet faktisk kjennes for deg. Unnskyld. Vi kan legge den forklaringen bort. Jeg vil høre hva jeg overså, fremfor å få opplevelsen din til å passe med modellen."
    },
    "dp_alliance-repair_case-michael_06": {
      "text": "[Anspent] Du utfordret meg ikke da jeg ble høylytt, og nå lurer jeg på om du er redd meg.",
      "suggestion": "Jeg hører at stillheten min gjorde deg usikker på om jeg var redd for deg. Unnskyld for at jeg lot deg sitte og lure. Jeg kan si tydeligere hva jeg legger merke til, og når vi trenger en pause. Hvordan ville det være for deg?"
    },
    "dp_alliance-repair_case-michael_07": {
      "text": "[Skamfull] Da jeg nevnte drikking, forandret ansiktet ditt seg et øyeblikk. Kanskje jeg overtolker, men jeg følte meg dømt, som om du nettopp hadde plassert meg i kategorien dårlig ektemann.",
      "suggestion": "Du så at ansiktet mitt endret seg og kjente deg dømt som ektemann. Jeg beklager at uttrykket mitt ga deg den opplevelsen. Jeg vil forstå drikkingen og hvordan den påvirker livet ditt, uten å sette en merkelapp på deg. Hva ble vanskeligere å fortelle meg da?"
    },
    "dp_alliance-repair_case-michael_08": {
      "text": "[Irritert] Du spør stadig om faren min, og det føles som om du skylder alt på ham. Jeg skjønner at han betyr noe, men når du stadig går dit, føles det som om valgene mine nå forsvinner.",
      "suggestion": "Jeg fortsatte å vende tilbake til faren din, og valgene dine nå fikk ikke plass i samtalen. Unnskyld. Vi kan legge den historien til side og se på det som skjer i livet ditt i dag. Hvor vil du at vi skal begynne?"
    },
    "dp_alliance-repair_case-michael_09": {
      "text": "[Såret, men skarp] Etter at jeg bannet, ble du stille, og jeg følte at du var ferdig med meg. Det var ikke ordet som betydde mest, men følelsen av at du trakk deg unna så snart jeg viste litt sinne.",
      "suggestion": "Jeg ble stille etter at du bannet, og du kjente at jeg trakk meg unna. Unnskyld. Jeg kan si hva som skjer for meg, fremfor å la deg sitte og lure. Hva trengte du at jeg hørte da du brukte de ordene?"
    },
    "dp_alliance-repair_case-michael_10": {
      "text": "[Anspent] Når du sier «ta et pust», føles det som om du prøver å kontrollere meg, som om jeg er en unge som snart blir sendt ut av klasserommet. Det får meg til å ville nekte bare for å beholde fotfestet.",
      "suggestion": "Da jeg ba deg ta et pust, kjente du deg kontrollert og behandlet som et barn. Unnskyld. Jeg kan spørre om en pause ville hjelpe, i stedet for å fortelle deg hva du skal gjøre. Du kan si nei."
    },
    "dp_alliance-repair_case-jason_01": {
      "text": "[Stille] Når jeg fryser og sier at jeg ikke vet, blir jeg redd for at jeg gjør terapi feil og kaster bort timen.",
      "suggestion": "Takk for at du sier fra. Jeg hører at det å miste ordene får dette til å kjennes som en prøve du ikke består. Vi kan slutte å presse frem et svar og være i pausen sammen. Hva ville hjelpe deg å kjenne mindre press her?"
    },
    "dp_alliance-repair_case-jason_02": {
      "text": "[Nølende] Da du så på klokka mens jeg lette etter ord, følte jeg meg uviktig. Jeg vet at timer har tidsgrenser, men akkurat da føltes det som om de langsomme ordene mine tok for mye plass.",
      "suggestion": "Jeg så på klokka mens du lette etter ord, og du kjente deg uviktig. Unnskyld. Jeg kan si fra når vi nærmer oss slutten, fremfor å la deg prøve å forstå det ut fra et blikk. Ville det hjelpe?"
    },
    "dp_alliance-repair_case-jason_03": {
      "text": "[Redd] En tidligere terapeut presset meg til å snakke om følelser til jeg fikk panikk og endte på legevakten; da du spurte om kroppen med en gang, ble jeg redd for at dette skulle bli likt.",
      "suggestion": "Spørsmålet mitt kjentes som starten på det presset du opplevde tidligere. Jeg beklager at jeg gikk for raskt frem. Vi kan stoppe spørsmålene om kroppen nå. Jeg vil spørre før vi går tilbake til dem, og du kan si nei eller stoppe når som helst."
    },
    "dp_alliance-repair_case-jason_04": {
      "text": "[Stille] Du sier at det er greit å ta pause, men når jeg tar pause, føler jeg meg sett på. Ansiktet ditt er vennlig, men det kjennes likevel som en spotlight, og så skynder jeg meg å si noe for at pausen skal ta slutt.",
      "suggestion": "Du føler deg overvåket selv når jeg sier at det er greit med en pause. Jeg beklager at oppmerksomheten min øker presset. Jeg kan gi deg mer plass og la være å holde blikket festet på deg. Ville det gjøre det lettere å ta en pause?"
    },
    "dp_alliance-repair_case-jason_05": {
      "text": "[Engstelig] Da du foreslo å øve i en gruppe, følte jeg at du ikke forstod hvor umulig det høres ut. Jeg gikk derfra og tenkte at du så frykten min som noe jeg bare kunne øve meg ut av.",
      "suggestion": "Jeg foreslo en gruppe før jeg hadde forstått hvor umulig det kjentes for deg. Unnskyld. Vi kan legge det forslaget bort. Jeg vil forstå hva som gjør det så skremmende, før vi velger noe å øve på sammen."
    },
    "dp_alliance-repair_case-jason_06": {
      "text": "[Nølende] Da jeg ble stille, sa du at jeg virket rolig, men jeg hadde panikk. Jeg telte sekundene, prøvde å ikke se rar ut, og så føltes det som om du ikke kunne se hva som faktisk skjedde.",
      "suggestion": "Jeg kalte deg rolig mens du hadde panikk, og du følte deg oversett. Unnskyld. Jeg vil spørre deg fremfor å anta hva stillheten betyr. Hva trenger du at jeg forstår om det øyeblikket?"
    },
    "dp_alliance-repair_case-jason_07": {
      "text": "[Flau] Jeg prøvde å finne ordet, og så fullførte du setningen for meg. Jeg vet at du prøvde å hjelpe, men jeg følte meg dum, som om jeg selv her er for treg til å snakke ordentlig.",
      "suggestion": "Jeg fullførte setningen mens du prøvde å finne ordet, og du følte deg dum. Unnskyld. Jeg kan vente og la deg snakke ferdig, med mindre du ber om hjelp. Hvordan ville det være for deg?"
    },
    "dp_alliance-repair_case-jason_08": {
      "text": "[Skamfull] Da du kalte det unngåelse, hørtes det ut som kritikk. Jeg vet allerede at jeg trekker meg unna; det ordet fikk meg til å føle at jeg mislykkes i terapi også.",
      "suggestion": "Jeg brukte «unngåelse», og det hørtes ut som kritikk mens du allerede strevde. Unnskyld. Vi kan legge det uttrykket bort og snakke om det som skjer når du trekker deg unna, med ord som passer din opplevelse."
    },
    "dp_alliance-repair_case-jason_09": {
      "text": "[Redd] Da du ba meg se på deg mens jeg snakket, følte jeg meg blottlagt, som om jeg ble undersøkt. Jeg vet at øyekontakt skal være kontakt, men for meg fikk det ordene til å forsvinne.",
      "suggestion": "Da jeg ba deg se på meg, kjente du deg gransket. Unnskyld. Vi trenger ikke blikkontakt for å snakke sammen. Hvor ville det kjennes bedre for deg å se mens vi snakker?"
    },
    "dp_alliance-repair_case-jason_10": {
      "text": "[Stille] Da du spurte hvorfor jeg ikke dro på festen, hørte jeg dom i det. Jeg vet at det sikkert bare var et spørsmål, men det hørtes ut som: Forklar deg, og da følte jeg meg liten.",
      "suggestion": "Spørsmålet mitt hørtes ut som et krav om å forklare deg, og du kjente deg liten. Unnskyld. Vi kan la festen ligge et øyeblikk. Jeg vil forstå hvordan det var å høre det spørsmålet fra meg."
    },
    "dp_alliance-repair_case-laura_01": {
      "text": "[Flatt og på vakt] Da du spurte om barndommen så raskt, følte jeg meg eksponert og ville gå. Jeg hadde bare nevnt én bit, og plutselig kjentes det som om hele døren ble åpnet.",
      "suggestion": "Jeg gikk for raskt frem med spørsmålet om barndommen din. Du følte deg blottlagt, og det beklager jeg. Vi kan stoppe det temaet nå. Jeg vil spørre før vi går tilbake til det, og du kan si nei."
    },
    "dp_alliance-repair_case-laura_02": {
      "text": "[Fjern] Da jeg fortalte om moren min ved oppvaskbenken og du smilte et øyeblikk, trodde jeg at du lo av meg.",
      "suggestion": "Du så at jeg smilte mens du fortalte noe vondt, og tenkte at jeg lo av deg. Jeg beklager at uttrykket mitt ga det inntrykket. Jeg vil høre hvordan det øyeblikket var for deg, uten å be deg se bort fra det du så."
    },
    "dp_alliance-repair_case-laura_03": {
      "text": "[Langsomt og flatt] Du er yngre enn meg, og noen ganger lurer jeg på om du virkelig kan forstå et liv som har vært avstengt så lenge.",
      "suggestion": "Du lurer på om en som er yngre, kan forstå hvor lenge du har levd slik. Det er viktig å snakke om. Jeg kan ikke ta for gitt at jeg kjenner livet ditt. Jeg kan lytte nøye og la deg korrigere meg når jeg misforstår. Hva kjennes vanskeligst for meg å forstå?"
    },
    "dp_alliance-repair_case-laura_04": {
      "text": "[Flatt og på vakt] Da du skrev notater mens jeg snakket om det som skjedde, følte jeg meg registrert i stedet for møtt. Jeg begynte å lure på hvilken setning du skrev ned, og om den kom til å bli den offisielle versjonen av meg.",
      "suggestion": "Notatene mine fikk deg til å lure på om jeg bestemte den offisielle historien om deg. Unnskyld. Jeg kan legge dem bort nå, og vi kan snakke om hva jeg noterer og hvorfor, før jeg skriver mer. Ville det hjelpe?"
    },
    "dp_alliance-repair_case-laura_05": {
      "text": "[På vakt] Da du spurte om jeg stoler på deg, føltes det som press om å si ja. Hvis jeg sa nei, så jeg for meg at du ble såret eller tenkte at jeg var vanskelig, så jeg ga et tryggere svar enn det egentlige.",
      "suggestion": "Spørsmålet mitt fikk deg til å kjenne at du måtte beskytte meg i stedet for å si sannheten. Unnskyld. Du skylder meg ikke et ja. Jeg kan spørre om konkrete øyeblikk som er vanskelige, uten å forvente at du beroliger meg om forholdet vårt."
    },
    "dp_alliance-repair_case-laura_06": {
      "text": "[Anspent] Da du sa at jeg er trygg nå, kjentes det i kroppen som om du ikke trodde på faren. Jeg vet at jeg sitter på kontoret ditt, men ordene fikk det til å høres ut som om jeg burde være over det kroppen fortsatt reagerer på.",
      "suggestion": "Da jeg sa «trygg nå», hørtes det ut som om du burde være ferdig med reaksjonen. Unnskyld. Jeg vil forstå hvordan det faktisk er for deg, fremfor å fortelle deg hva kroppen burde kjenne."
    },
    "dp_alliance-repair_case-laura_07": {
      "text": "[Fjern] Da du foreslo å forestille meg moren min her, følte jeg meg dyttet mot noe altfor stort. Jeg vet at det kanskje kan være nyttig en dag, men i det øyeblikket kjentes det som å bli dratt ut på dypt vann før jeg hadde sagt ja.",
      "suggestion": "Jeg foreslo det før jeg hadde hørt om du ville prøve, og det kjentes for stort. Unnskyld. Vi kan legge det bort. Jeg vil spørre før jeg foreslår at vi går videre, og du kan si nei."
    },
    "dp_alliance-repair_case-laura_08": {
      "text": "[Flatt] Du gikk så fort fra eksen min til barndommen at det føltes som om du fulgte en sjekkliste. Jeg hadde knapt sagt hva som skjedde denne uken før det handlet om fortiden.",
      "suggestion": "Jeg gikk til barndommen før jeg hadde hørt hva som skjedde denne uka. Unnskyld. Vi kan gå tilbake til det du fortalte om eksen, uten å lete etter en forbindelse til fortiden. Hva gikk jeg forbi?"
    },
    "dp_alliance-repair_case-laura_09": {
      "text": "[Skamfull] Da du spurte hvor mye vin jeg drikker, hørte jeg den stemmen folk bruker når de allerede vet svaret og er skuffet. Jeg stengte ned fordi jeg trodde du så meg som enda et problem som må håndteres.",
      "suggestion": "Tonen min fikk deg til å kjenne at jeg allerede hadde dømt drikkingen, og du stengte av. Unnskyld. Jeg vil forstå hvordan den er for deg, før jeg antar noe. Kan vi begynne med det som gjorde spørsmålet vanskelig å høre?"
    },
    "dp_alliance-repair_case-laura_10": {
      "text": "[Lav stemme] Da du sa at jeg overlevde, hørtes det ut som om du sa at jeg burde ha det bra. Jeg vet at du mente styrke, men jeg hørte: Det verste er over, så hvorfor er du fortsatt sånn?",
      "suggestion": "Jeg sa «overlevde», og du hørte at du burde ha det bra nå. Unnskyld. Jeg vil forstå det du fortsatt lever med, uten å behandle det å overleve som slutten på det vonde. Hva fikk ordene mine ikke frem?"
    },
    "dp_alliance-repair_case-carlos_01": {
      "text": "[Defensiv] Noen ganger kjennes det som om du hører «respekt» som bare ego, som om du ikke skjønner hva det betydde der jeg vokste opp.",
      "suggestion": "Jeg hører at jeg har fått behovet ditt for respekt til å høres ut som om du bare er opptatt av deg selv. Unnskyld. Jeg vil forstå hva respekt betydde der du vokste opp, før vi bestemmer hva som trenger å endres. Hva har jeg oversett?"
    },
    "dp_alliance-repair_case-carlos_02": {
      "text": "[Anspent] Da du fortsatte å si «brems», hørtes det ut som om du ville at jeg skulle være myk. Jeg vet at du sikkert mente regulering, men i hodet mitt ble det: Bli mindre, bli lettere å håndtere.",
      "suggestion": "Da jeg sa «senk tempoet», hørte du «gjør deg mindre». Unnskyld. Jeg kan spørre hva som skjer for deg, og om en pause ville hjelpe, uten å be deg skjule sinnet eller være enig med meg."
    },
    "dp_alliance-repair_case-carlos_03": {
      "text": "[Sint] Da jeg snakket om at ungen min skvatt av meg, så du bort et øyeblikk. Jeg vet at det kanskje ikke var noe, men det føltes som om selv du ikke ville se på det jeg hadde gjort.",
      "suggestion": "Jeg så bort mens du fortalte at barnet ditt skvatt unna, og du kjente at jeg ikke klarte å møte det sammen med deg. Unnskyld. Jeg vil høre hva som skjedde og ta barnets frykt på alvor, uten å la deg være alene med det."
    },
    "dp_alliance-repair_case-carlos_04": {
      "text": "[Sint] Da jeg ble høylytt, skvatt du, og da følte jeg meg som den farlige fyren i rommet. Jeg skammet meg allerede over å skremme folk; da jeg så deg reagere sånn, fikk jeg lyst til å slutte å snakke.",
      "suggestion": "Du så at jeg skvatt og kjente deg redusert til den farlige personen i rommet. Jeg beklager at det la mer skam på deg. Jeg må ta ansvar for reaksjonen min og være tydelig på eventuelle grenser, fremfor å la deg prøve å lese dem i ansiktet mitt."
    },
    "dp_alliance-repair_case-carlos_05": {
      "text": "[Defensiv] Da du spurte om jeg var redd, hørtes det ut som om du prøvde å få meg til å innrømme at jeg er svak. Jeg gikk rett i forsvar, som om du ikke respekterte meg.",
      "suggestion": "Spørsmålet mitt om frykt hørtes ut som om jeg kalte deg svak. Unnskyld. Jeg kan legge det ordet bort og spørre hvordan det var for deg, uten å bestemme på forhånd hvilken følelse du må innrømme."
    },
    "dp_alliance-repair_case-carlos_06": {
      "text": "[Anspent] Når du snakker om reparasjon med sønnen min, hører jeg at du sier at jeg er en dårlig far. Jeg vet at jeg må møte ting, men hvis det begynner med at jeg er skurken, stenger jeg ned.",
      "suggestion": "Jeg hører at praten om å gjøre det godt igjen hørtes ut som en dom om at du er en dårlig far. Unnskyld. Å ta ansvar for det som skjedde skal ikke bety å redusere deg til den merkelappen. Hva trenger du at jeg forstår før vi fortsetter?"
    },
    "dp_alliance-repair_case-carlos_07": {
      "text": "[Såret, men skarp] Du kikket mot døra etter at jeg ble sint, og jeg følte at du sjekket en fluktvei.",
      "suggestion": "Du så at jeg kikket mot døra og kjente at jeg ville komme meg bort fra deg. Jeg beklager at blikket mitt ga deg den opplevelsen. Jeg kan si direkte hva jeg merker, og om jeg er bekymret for sikkerheten, fremfor å la deg gjette."
    },
    "dp_alliance-repair_case-carlos_08": {
      "text": "[Defensiv] Da du tok opp drikking, hørtes du akkurat ut som kona mi, som om saken allerede var bygget opp mot meg. Jeg kom inn klar til å være ærlig, og så følte jeg at jeg stod tiltalt.",
      "suggestion": "Spørsmålet mitt om drikking hørtes ut som en anklage, og du kjente at du satt på tiltalebenken. Unnskyld. Vi kan begynne på nytt med hvordan drikkingen er for deg. Jeg vil forstå den før jeg antar noe."
    },
    "dp_alliance-repair_case-carlos_09": {
      "text": "[Sint] Da du brukte ordet vold, følte jeg at du allerede hadde bestemt at jeg er kriminell. Jeg sier ikke at det jeg gjorde var greit, men det ordet gjorde at det føltes som om det ikke fantes et helt menneske igjen å snakke med.",
      "suggestion": "Da jeg sa «vold», kjente du deg avskrevet som kriminell. Jeg beklager at du satt igjen med det. Vi trenger å snakke ærlig om skaden, og jeg vil også forstå hele mennesket som sitter her. Hva ble vanskelig å fortelle meg etter det ordet?"
    },
    "dp_alliance-repair_case-carlos_10": {
      "text": "[Defensiv] Når du spør om familien min, føles det som om du klandrer stedet jeg kommer fra. Det finnes ting der som skadet meg, men det finnes stolthet der også, og jeg vil ikke at du skal se på det som en patologi.",
      "suggestion": "Jeg hører at spørsmålene mine om familien kjennes som en anklage mot bakgrunnen din. Jeg beklager at jeg ga det inntrykket. Hva er det viktig at jeg respekterer ved der du kommer fra, før vi utforsker det som såret deg?"
    },
    "dp_alliance-repair_case-nina_01": {
      "text": "[På gråten] Da jeg gråt, var du stille lenge. Jeg vet at stillhet kan være støttende, men jeg følte meg alene i det, som om jeg skulle finne ut selv hvordan jeg skulle slutte å gråte.",
      "suggestion": "Stillheten min gjorde at du kjente deg alene med tårene. Unnskyld. Jeg kunne ha spurt hvordan du hadde det, i stedet for å la deg gjette. Hvis tårene kommer igjen, kan jeg si at jeg lytter og spørre hva du trenger. Ville det hjelpe?"
    },
    "dp_alliance-repair_case-nina_02": {
      "text": "[Unnskyldende] Da du spurte om hans side av husarbeidet, kjentes det som om du tok eksens side. Jeg vet at det finnes to perspektiver, men jeg kom hit fordi mitt stadig forsvinner.",
      "suggestion": "Jeg spurte om hans side før jeg hadde hørt din, og du kjente deg oversett igjen. Unnskyld. Vi kan bli ved din opplevelse nå. Hva trengte du at jeg hørte om hvordan oppgavene faller på deg?"
    },
    "dp_alliance-repair_case-nina_03": {
      "text": "[Splittet] Noen ganger når jeg snakker om husarbeid og barna, ser jeg at du virker trøtt, og da lurer jeg på om selv du er lei av dette.",
      "suggestion": "Du ser trøtthet i ansiktet mitt og lurer på om jeg er lei av å høre om livet ditt. Jeg beklager at uttrykket mitt gjør deg usikker. Jeg kan si hva jeg legger merke til, fremfor å la deg gjette. Hva har vært vanskeligst å si når det skjer?"
    },
    "dp_alliance-repair_case-nina_04": {
      "text": "[Unnskyldende] Når du sier grenser, hører jeg det som om du sier at jeg allerede burde kunne helt vanlig voksenliv. Jeg sitter her og nikker, men inni meg føler jeg meg som en mislykket voksen og mor.",
      "suggestion": "Jeg snakket om grenser på en måte som fikk deg til å kjenne at du mislyktes som mor og voksen. Unnskyld. Vi kan legge det ordet bort og se på én situasjon du synes er vanskelig, uten å behandle den som noe du burde kunne håndtere allerede."
    },
    "dp_alliance-repair_case-nina_05": {
      "text": "[På gråten] Da jeg endelig sluttet å gråte forrige uke, så jeg at skuldrene dine sank og ansiktet ditt myknet, og jeg tenkte: Å, hun er lettet. Så ble jeg flau over å ta så mye plass.",
      "suggestion": "Da skuldrene mine sank, tenkte du at jeg var lettet over at du hadde sluttet å gråte. Jeg beklager at du da kjente at du hadde tatt for mye plass. Jeg vil høre hvordan det øyeblikket var for deg, uten å be deg legge følelsene bort for min skyld."
    },
    "dp_alliance-repair_case-nina_06": {
      "text": "[Fortapt] Når du spør hva jeg vil, føler jeg meg forlatt, som om jeg skal vite det alene. Jeg har brukt år på å gjette hva alle andre vil, så spørsmålet slipper meg ned i et blankt sted.",
      "suggestion": "Spørsmålet mitt fikk deg til å kjenne deg alene med noe du ennå ikke vet. Unnskyld. Vi kan ta det langsommere og utforske det sammen. Du trenger ikke ha et svar klart."
    },
    "dp_alliance-repair_case-nina_07": {
      "text": "[Sliten] Da du foreslo hvile, hørtes det ut som om du ikke forstår livet mitt i praksis. Jeg gikk hjem og tenkte: Hun aner ikke hvordan kjøkkenet, guttene, moren min og meldingene ser ut klokka ni om kvelden.",
      "suggestion": "Jeg foreslo hvile uten å forstå hva kvelden din faktisk innebærer. Unnskyld. Vi kan legge det forslaget bort og se på kravene du møter, før vi bestemmer hva som er mulig. Hva hadde jeg ikke forstått om den kvelden?"
    },
    "dp_alliance-repair_case-nina_08": {
      "text": "[Skamfull] Da du kalte det bitterhet, følte jeg at du hadde funnet noe stygt i meg. Jeg vet at jeg klager over å gjøre alt, men jeg vil ikke bli sett som bitter eller slem.",
      "suggestion": "Ordet «bitterhet» fikk deg til å kjenne at jeg hadde funnet noe stygt i deg. Unnskyld. Vi kan legge det bort og høre hvordan det er å gjøre så mye. Du trenger ikke godta navnet jeg ga følelsen din."
    },
    "dp_alliance-repair_case-nina_09": {
      "text": "[Unnskyldende] Jeg sa unnskyld fem ganger og du la ikke merke til det, så jeg følte meg usynlig igjen. Det er flaut å si, for jeg vet at du ikke kan få med deg alt, men det kjentes som om hele mønsteret skjedde rett foran oss.",
      "suggestion": "Jeg overså de gjentatte unnskyldningene, og du kjente deg usynlig igjen. Unnskyld. Takk for at du sier fra. Vi kan stoppe opp her og merke hva du unnskyldte deg for. Du trenger ikke beklage at du tar dette opp med meg."
    },
    "dp_alliance-repair_case-nina_10": {
      "text": "[Splittet] Da du fokuserte på eksen min, føltes det som om barna forsvant ut av rommet. Jeg vet at han betyr noe, men hvert valg jeg tar går først gjennom dem, og jeg følte at du overså det.",
      "suggestion": "Jeg var opptatt av eksen din og overså hvor mye hvert valg handler om barna. Unnskyld. Vi kan gi dem plass i samtalen nå. Hva trenger du at jeg forstår om hvordan de inngår i valgene du står overfor?"
    },
    "dp_alliance-repair_case-aisha_01": {
      "text": "[Desperat] Da du ikke svarte raskt på meldingen min, fikk jeg panikk og følte meg forlatt. Jeg vet at du har andre klienter og et liv, men i kroppen min var det bare: Hun er borte, jeg ble for mye.",
      "suggestion": "Takk for at du sier fra. Å vente på svaret mitt kjentes som å bli forlatt, og du tenkte at du hadde bedt om for mye. La oss være tydelige på når jeg kan svare, og hvilken støtte som er tilgjengelig når jeg ikke kan, fremfor å la deg sitte og lure."
    },
    "dp_alliance-repair_case-aisha_02": {
      "text": "[Desperat] Da timen sluttet helt presis, føltes det som at du slapp meg. Jeg vet at det må finnes en klokke, men måten det skjedde på fikk det til å kjennes som om kontakten forsvant i samme sekund som timen var over.",
      "suggestion": "Da vi avsluttet, kjente du at kontakten forsvant. Jeg beklager at avslutningen kjentes så brå. Jeg må holde tidsrammen, og vi kan sette av litt tid før den til å høre hvordan du har det, og hvilken støtte du trenger frem til vi møtes igjen."
    },
    "dp_alliance-repair_case-aisha_03": {
      "text": "[Mistenksom] Dette er kleint å spørre om, men etter at du spurte så mye om hvem jeg ligger med, lurte jeg på om du er interessert i meg på den måten.",
      "suggestion": "Takk for at du sier fra. Spørsmålene mine fikk deg til å lure på om dette var personlig interesse. Unnskyld. Forholdet vårt er profesjonelt og blir ikke seksuelt eller romantisk. Jeg kan forklare hvorfor jeg spurte, og vi kan la de spørsmålene ligge mens vi snakker om bekymringen din."
    },
    "dp_alliance-repair_case-aisha_04": {
      "text": "[Desperat] Jeg sendte deg en e-post og hørte ikke noe, og jeg ble mer og mer fortvilet utover natten. Jeg sjekket telefonen om og om igjen og sa til meg selv at jeg hadde ødelagt terapien også, selv om en del av meg visste at du sikkert har regler for e-post.",
      "suggestion": "Du ventet på et svar og var redd hele natten for at du hadde ødelagt terapien. Jeg beklager at ventingen var så vond. Vi trenger å være tydelige på når jeg kan svare på e-post, og hvilken støtte som er tilgjengelig når jeg ikke kan. Hva betydde stillheten for deg den natten?"
    },
    "dp_alliance-repair_case-aisha_05": {
      "text": "[Såret] Da du sa grenser, hørte jeg: Her er regelen for å holde deg unna. Det kjentes mindre som omsorg og mer som straff for å trenge for mye.",
      "suggestion": "Måten jeg snakket om grenser på, fikk dem til å høres ut som straff for å trenge meg. Unnskyld. Jeg kan forklare hva hver grense er og hvorfor den er der, og lytte til hvordan den påvirker deg. Behovene dine har fortsatt plass i den samtalen."
    },
    "dp_alliance-repair_case-aisha_06": {
      "text": "[Skamfull] Da jeg nevnte kutting, ble øynene dine store, og jeg følte at jeg skremte deg. Så fikk jeg lyst til å ta vare på deg i stedet for å fortelle hvor ille det hadde vært.",
      "suggestion": "Reaksjonen min fikk deg til å føle at du måtte ta vare på meg. Unnskyld. Den er mitt ansvar. Jeg vil høre hvor vondt du har hatt det og undersøke hvordan du har det nå, uten at du må beskytte meg mot det."
    },
    "dp_alliance-repair_case-aisha_07": {
      "text": "[Mistenksom] Da du sa at du skriver notater, lurte jeg på hvilken versjon av meg du legger der. Jeg begynte å se for meg en fil der jeg høres ustabil, dramatisk eller verre ut enn jeg mener å være.",
      "suggestion": "Du er redd for at notatene mine skal beskrive en du ikke kjenner igjen som deg selv. Takk for at du sier fra. Jeg kan forklare hva jeg noterer og hvorfor, og høre hvor min forståelse ikke passer med din, fremfor å la deg gjette."
    },
    "dp_alliance-repair_case-aisha_08": {
      "text": "[Desperat] Da du sa at vi ikke kunne legge inn en ekstra time denne uken, føltes det som avvisning. Jeg hørte at det handlet om timeplanen, men under det hørte jeg: Behovet ditt er for mye for meg.",
      "suggestion": "Du hørte nei-et mitt som avvisning, som om behovet ditt var for mye. Unnskyld. Jeg kan ikke legge til en time denne uka. Vi kan fortsatt snakke om det som er vanskeligst, og lage en plan for støtte frem til vi møtes igjen."
    },
    "dp_alliance-repair_case-aisha_09": {
      "text": "[Panisk] Du hørtes så rolig ut da jeg falt fra hverandre at jeg trodde du ikke brydde deg. Jeg vet at ro kan gi fotfeste, men det føltes som om du sto på andre siden av glasset og så på at jeg gikk i oppløsning.",
      "suggestion": "Roen min kjentes fjern da du trengte å merke at jeg var med deg. Unnskyld. Jeg kan si tydeligere hva jeg hører og spørre hvordan du har det, fremfor å sitte stille mens du kjenner deg alene. Ville det hjelpe oss å få kontakt igjen nå?"
    },
    "dp_alliance-repair_case-aisha_10": {
      "text": "[Sint] Da du brukte det diagnoseordet, følte jeg meg redusert til et problem. Det var som om alle grunnene til at jeg reagerer sånn forsvant, og nå var jeg bare en merkelapp du visste hvordan du skulle håndtere.",
      "suggestion": "Jeg brukte et diagnoseord, og du kjente deg redusert til et problem. Unnskyld. Vi kan legge det ordet bort og snakke om hva som skjer for deg, og det du har opplevd. Jeg vil ikke at en merkelapp skal erstatte det å forstå deg."
    },
    "dp_alliance-repair_case-david_01": {
      "text": "[Streng og sint] Jeg tror ikke denne terapien virker. Jeg kommer hit og sier de samme tingene om igjen, og kanskje vi bare kaster bort tiden begge to.",
      "suggestion": "Jeg hører hvor frustrerende det er å fortsette å komme uten å se endringen du ønsker. Takk for at du sier det direkte. Vi trenger å se på hva som hjelper og hva som ikke gjør det, også om en annen tilnærming kunne passe bedre. Hvilken endring har du savnet mest?"
    },
    "dp_alliance-repair_case-david_02": {
      "text": "[Avvisende] Da jeg ba om strategi, fortsatte du å gå tilbake til følelser, og jeg følte meg oversett. Jeg kom inn og ba om noe jeg faktisk kan gjøre, og det kjentes som om du stadig tok verktøyet ut av hånden min.",
      "suggestion": "Du ba om noe praktisk, og jeg fortsatte å føre oss tilbake til følelsene. Jeg beklager at jeg overså det du ba om. Vi kan begynne med én situasjon du vil håndtere annerledes, og bli enige om noe konkret å prøve."
    },
    "dp_alliance-repair_case-david_03": {
      "text": "[Såret, men skarp] Da du satte ord på hvor såret kona mi var først, kjentes det som om du tok hennes parti. Jeg vet at hun er såret, men jeg prøvde å vise deg det som var vondt for meg, og det føltes som om det allerede var mindre viktig.",
      "suggestion": "Jeg snakket om hvor såret hun var før jeg hadde hørt det som var vondt for deg, og du kjente at ditt betydde mindre. Unnskyld. Jeg vil høre det du prøvde å vise meg også. Vi kan gi plass til begge uten å bestemme at det ene gjør det andre mindre viktig."
    },
    "dp_alliance-repair_case-david_04": {
      "text": "[Streng] Da du utfordret meg med den tonen, følte jeg meg ydmyket, ikke hjulpet. Det minnet meg om å bli satt på plass i et møte, og etter det sluttet jeg å høre poenget du prøvde å få fram.",
      "suggestion": "Tonen min gjorde at du kjente deg ydmyket og ikke klarte å høre det jeg sa. Unnskyld. Jeg kan la saken ligge og høre hvordan tonen min virket på deg, før vi går tilbake til den. Hva vekket det øyeblikket?"
    },
    "dp_alliance-repair_case-david_05": {
      "text": "[Avvisende] Da du kalte det selvbeskyttelse, hørtes det ut som en høflig klinisk måte å si narsissistisk på. Jeg hørte den myke formuleringen, men under den følte jeg meg fortsatt diagnostisert og sett ned på.",
      "suggestion": "«Selvbeskyttelse» hørtes ut som en diagnose gjemt i mildere ord. Unnskyld. Vi kan legge det uttrykket bort og se på hva som faktisk skjer i en vanskelig samtale, uten å bestemme på forhånd hva det sier om deg."
    },
    "dp_alliance-repair_case-david_06": {
      "text": "[Såret, men skarp] Du tok tårene til kona mi mer alvorlig enn mine. Når jeg snakker skarpt, virker det som om du hører arroganse; når hun gråter, hører du smerte.",
      "suggestion": "Jeg hører at jeg har oversett smerten din når du snakket skarpt, mens jeg tok tårene hennes på alvor. Unnskyld. Smerten din fortjener også oppmerksomheten min. Hva trengte du at jeg hørte i det øyeblikket?"
    },
    "dp_alliance-repair_case-david_07": {
      "text": "[Kontrollert] Da du spurte om detaljer rundt affæren, følte jeg meg dømt og blottlagt. Jeg klarte ikke å vite om spørsmålene hjalp arbeidet, eller om jeg ble presset til å tilstå.",
      "suggestion": "Spørsmålene mine fikk deg til å kjenne deg dømt og usikker på hvorfor jeg trengte de detaljene. Unnskyld. Vi kan stoppe dem nå. Jeg kan forklare hva jeg prøvde å forstå, og vi kan bli enige om hva som er relevant før jeg spør om mer."
    },
    "dp_alliance-repair_case-david_08": {
      "text": "[Irritert] Da du sa at det ikke finnes raske løsninger, hørtes det nedlatende ut, som om du sa at jeg er naiv fordi jeg ønsker fremgang. Jeg ber ikke om magi; jeg spør om dette faktisk fører til noe.",
      "suggestion": "«Ingen raske løsninger» hørtes ut som om jeg avviste ønsket ditt om endring. Unnskyld. Du spurte om arbeidet fører noe sted. Vi kan velge en konkret endring å se etter og avtale når vi skal vurdere om måten vi jobber på, hjelper."
    },
    "dp_alliance-repair_case-david_09": {
      "text": "[Avvisende] Du virket imponert over karrieren min, og da følte jeg at du overså rotet hjemme. Jeg får nok av folk som beundrer den polerte versjonen; jeg trenger at du ikke lar deg lure av den.",
      "suggestion": "Oppmerksomheten min på karrieren fikk deg til å kjenne at jeg hadde oversett det som skjedde hjemme. Unnskyld. Vi kan la karrieren ligge og snakke om det den polerte versjonen skjuler. Hva trenger du mest at jeg forstår?"
    },
    "dp_alliance-repair_case-david_10": {
      "text": "[Kald] Da du nevnte henvisninger, føltes det som om du var ferdig med meg. Jeg hørte det som: Hvis dette ikke virker, kan du kanskje gå et annet sted, og da stengte jeg ned.",
      "suggestion": "Da jeg nevnte en henvisning, kjente du at jeg ga deg opp. Unnskyld. Vi kan la den samtalen vente og snakke om hva som ikke fungerer her. Hvis vi vurderer annen hjelp, vil jeg at vi snakker om hvorfor og hva det vil innebære, fremfor å la deg kjenne deg sendt bort."
    },
    "dp_alliance-repair_case-marcus_01": {
      "text": "[Langsomt og flatt] Da jeg sa at jeg ikke følte noe, fortsatte du å spørre hva som lå under, og jeg stengte ned. Ingenting var allerede kanten; det føltes som om du ville at jeg skulle produsere noe annet.",
      "suggestion": "Du fortalte at du ikke kjente noe, og jeg fortsatte å be deg finne noe annet. Unnskyld. Vi kan slutte å lete etter det nå. Jeg vil ta det du faktisk opplever på alvor, også at du ikke kjenner noe."
    },
    "dp_alliance-repair_case-marcus_02": {
      "text": "[Lav stemme] Da du flyttet stolen nærmere, følte jeg meg fanget og urolig. Jeg skjønte at du sikkert mente det som varme, men kroppen min leste det som at noen tok mer plass enn jeg hadde sagt ja til.",
      "suggestion": "Jeg flyttet meg nærmere uten å spørre, og du kjente deg fanget. Unnskyld. Jeg kan flytte meg tilbake nå. Hvor vil du at jeg skal sitte? Jeg vil spørre før jeg endrer avstanden igjen."
    },
    "dp_alliance-repair_case-marcus_03": {
      "text": "[Hyperårvåken] Når du spør om marerittene, lurer jeg på om du faktisk vet hva du skal gjøre med dette, eller om det er for mye for deg.",
      "suggestion": "Takk for at du sier fra. Spørsmålet mitt gjorde deg usikker på om jeg kunne hjelpe med det som kan komme frem. La oss stoppe opp her. Du fortjener et ærlig svar om erfaringen min, grensene mine og støtten jeg har, før du velger om du vil gå videre. Hva trenger du mest å vite?"
    },
    "dp_alliance-repair_case-marcus_04": {
      "text": "[Anspent] Da du ba meg lukke øynene, gikk kroppen min i alarm. Jeg vet det skulle hjelpe meg å fokusere, men for meg kjentes det som å gi fra meg rommet.",
      "suggestion": "Å lukke øynene betydde å miste oversikten over rommet, og det hadde jeg ikke forstått. Unnskyld. Du kan holde dem åpne. Vi kan finne en måte å rette oppmerksomheten på som lar deg beholde oversikten over hvor vi er."
    },
    "dp_alliance-repair_case-marcus_05": {
      "text": "[Flatt] Da du kalte det en traumereaksjon, følte jeg meg som en kategori. Jeg vet at det kanskje stemmer, men jeg sluttet å føle at du snakket til meg.",
      "suggestion": "Jeg kalte det en «traumereaksjon», og du kjente at jeg snakket til en kategori i stedet for til deg. Unnskyld. Vi kan legge det uttrykket bort. Jeg vil høre hvordan du selv ville beskrive det som skjer."
    },
    "dp_alliance-repair_case-marcus_06": {
      "text": "[Lav stemme] Da jeg nevnte volden hjemme, forandret ansiktet ditt seg. Kanskje jeg leste det feil, men det så ukomfortabelt ut, og da følte jeg at jeg måtte gjøre det mindre så du kunne tåle det.",
      "suggestion": "Du så at ansiktet mitt endret seg og følte at du måtte få volden til å høres mindre alvorlig ut. Unnskyld. Jeg må ta ansvar for reaksjonene mine. Det er ikke din jobb. Hvordan påvirket det øyeblikket tilliten din til meg?"
    },
    "dp_alliance-repair_case-marcus_07": {
      "text": "[På vakt] Jeg sa at jeg ikke ville snakke om marerittene, og du stilte likevel ett spørsmål til. Det var bare ett spørsmål, men det gjorde at nei-et mitt kjentes svakt her inne.",
      "suggestion": "Du sa nei, og jeg stilte enda et spørsmål likevel. Unnskyld. Jeg stopper det temaet nå. Du trenger ikke si nei tydeligere for at jeg skal respektere det."
    },
    "dp_alliance-repair_case-marcus_08": {
      "text": "[Hyperårvåken] Du satt mellom meg og døra, og jeg klarte ikke å høre noe annet. Jeg nikket, men hele tiden fulgte jeg med på veien ut.",
      "suggestion": "Jeg satt mellom deg og døra, og du klarte ikke rette oppmerksomheten mot noe annet. Jeg beklager at jeg ikke spurte om hvor vi skulle sitte. Vi kan endre det nå. Hvor vil du at jeg skal sitte, så veien ut er fri?"
    },
    "dp_alliance-repair_case-marcus_09": {
      "text": "[Streng] Når du sier «du er trygg her», føles det som om du ikke vet hva trygg betyr. Det høres for rent ut, som en frase fra et rom der ingenting vondt noen gang har skjedd.",
      "suggestion": "Jeg sa «trygg her» som om jeg kunne bestemme hvordan rommet kjennes for deg. Unnskyld. Jeg kan spørre hva som hjelper deg å være mindre på vakt, i stedet for å fortelle deg at du er trygg. Hva trenger jeg å forstå om dette rommet akkurat nå?"
    },
    "dp_alliance-repair_case-marcus_10": {
      "text": "[Flatt] Du spør om fosterhjem nesten hver time, og etter hvert kjennes det som graving. Jeg begynner å lure på om du hører på meg nå, eller bare leter etter den gamle historien under alt.",
      "suggestion": "Jeg fortsatte å vende tilbake til fosterhjemmene mens du ville at jeg skulle høre livet ditt nå. Unnskyld. Vi kan la den historien ligge. Jeg vil spørre før vi går tilbake til den, og jeg vil høre hva som betyr noe for deg i dag."
    },
    "dp_therapist-self-awareness_case-sara_11": {
      "text": "[Stille tilfreds] Jeg gikk på kafé alene i helgen. Jeg sjekket ikke mobilen hele tiden. Jeg hadde lyst til å fortelle deg det, selv om det ikke er så mye.",
      "suggestion": "[Selvbevissthet] Jeg merker varme og en trang til å rose henne med en gang. Jeg kan være i den varmen uten å bestemme for henne hvor mye dette betyr."
    },
    "dp_therapist-self-awareness_case-sara_12": {
      "text": "[Unnskyldende] Du ser sliten ut i dag. Vi kan snakke om noe lettere. Jeg vil ikke at du skal ta med deg min tristhet hjem i tillegg til alle andres.",
      "suggestion": "[Selvbevissthet] Jeg merker lettelse over tilbudet hennes, og så ubehag ved den lettelsen. Jeg ville holdt begge reaksjonene for meg selv, heller enn å la henne ta vare på meg."
    },
    "dp_therapist-self-awareness_case-michael_11": {
      "text": "[Fornøyd, men litt utilpass] Sønnen min ba meg hjelpe med sykkelen. Vi fikk det til uten at jeg glefset en eneste gang. Etterpå ble han stående ved siden av meg. Jeg visste ikke helt hva jeg skulle gjøre med det.",
      "suggestion": "[Selvbevissthet] Jeg blir rørt og får lyst til å gjøre dette til en suksesshistorie. Jeg merker den iveren og gir plass til at hans opplevelse ikke er like entydig."
    },
    "dp_therapist-self-awareness_case-michael_12": {
      "text": "[Saklig] Jeg har laget et regneark over alle kranglene denne måneden. Jeg tenkte du kunne finne mønsteret og fortelle meg nøyaktig hva jeg skal endre.",
      "suggestion": "[Selvbevissthet] Jeg merker at jeg går inn i ekspertrollen og liker å være nyttig. Jeg kan legge merke til det før jeg blir med på kravet om en perfekt løsning."
    },
    "dp_therapist-self-awareness_case-jason_11": {
      "text": "[Lavmælt] Jeg har ikke forberedt noe til i dag. Jeg tenkte jeg skulle prøve å komme uten å øve på forhånd. Nå er jeg redd du tror jeg ikke har gjort en innsats.",
      "suggestion": "[Selvbevissthet] Jeg merker et ønske om å belønne innsatsen og fylle stillheten for ham. Jeg kan la usikkerheten være her uten å behandle den som en feil."
    },
    "dp_therapist-self-awareness_case-jason_12": {
      "text": "[Nølende] Jeg fortalte en venn at jeg går her. Han sa det hørtes modig ut. Jeg lurer stadig på om du også synes det. Unnskyld, du trenger ikke svare.",
      "suggestion": "[Selvbevissthet] Jeg kjenner ømhet og et press om å gi den rette bekreftelsen. Jeg ville lagt merke til presset, heller enn å gjøre den neste følelsen hans avhengig av min godkjenning."
    },
    "dp_therapist-self-awareness_case-laura_11": {
      "text": "[Flatt] Jeg er sykepleier. Jeg sitter hos folk som skal dø og gjør det som trengs. Her føler jeg meg merkelig ubrukelig når du spør om jeg er trist.",
      "suggestion": "[Selvbevissthet] Jeg merker beundring for kompetansen hennes og en trang til å forklare forskjellen. Jeg kan romme reaksjonene uten å skjule min egen usikkerhet bak en forklaring."
    },
    "dp_therapist-self-awareness_case-laura_12": {
      "text": "[På vakt] Jeg tok med kortet du sendte da jeg ikke kom til timen. Jeg har ikke åpnet det. Jeg vet ikke om jeg vil at det skal være omsorg eller bare praktisk informasjon.",
      "suggestion": "[Selvbevissthet] Jeg merker en trang til å forsvare gesten og få henne til å stole på den. Jeg ville holdt behovet for å bli forstått for meg selv og lagt merke til spenningen i magen."
    },
    "dp_therapist-self-awareness_case-carlos_11": {
      "text": "[Med et kort smil] Datteren min ba meg ordne håret hennes før skolen. Jeg var elendig. Hun lo, og for en gangs skyld hørte jeg det ikke som at noen lo av meg.",
      "suggestion": "[Selvbevissthet] Jeg merker varme og overraskelse over ømheten hans. Jeg kan legge merke til mine egne antakelser om ham, heller enn å gjøre dette til et bevis på at jeg vet hvem han er."
    },
    "dp_therapist-self-awareness_case-carlos_12": {
      "text": "[Utfordrende] Du sier stadig at vi kan ta det rolig. Der jeg kommer fra, sier folk det når de ikke vil ha med deg å gjøre. Er du egentlig klar for dette?",
      "suggestion": "[Selvbevissthet] Jeg strammer meg i brystet og får lyst til å bevise at jeg duger. Jeg kan merke hvordan utfordringen treffer meg, uten å la presset bestemme tempoet."
    },
    "dp_therapist-self-awareness_case-nina_11": {
      "text": "[Lyst] Jeg tok med litt kake fra skolearrangementet. Du kan sikkert ikke ta imot den. Jeg hadde bare ikke lyst til å komme hit og trenge noe igjen.",
      "suggestion": "[Selvbevissthet] Jeg merker glede over å bli satt pris på og et ønske om å spare henne for å bli flau. Jeg ville holdt den trangen for meg selv og samtidig vært oppmerksom på grensen."
    },
    "dp_therapist-self-awareness_case-nina_12": {
      "text": "[Smiler gjennom tårene] En kollega tok klassen min så jeg kunne komme hit. Hun ba meg ikke forklare. Jeg tror ikke jeg visste hvor sterkt jeg ønsket at noen skulle gjøre det.",
      "suggestion": "[Selvbevissthet] Jeg blir rørt og vil være den som endelig tar vare på henne. Jeg kan merke det ønsket om å redde, uten å gjøre det til sentrum i arbeidet vårt."
    },
    "dp_therapist-self-awareness_case-aisha_11": {
      "text": "[Mykt, så brått] Jeg kjøpte en notatbok til ting jeg vil si til deg. Så rev jeg ut den første siden. Jeg vil ikke at du skal ha en liste over hvor mye jeg trenger deg.",
      "suggestion": "[Selvbevissthet] Jeg merker ømhet og en trang til å love at jeg aldri vil dømme henne. Jeg kan sette ord på den trangen inni meg og være oppmerksom på løfter jeg ikke kan gi."
    },
    "dp_therapist-self-awareness_case-aisha_12": {
      "text": "[Utprøvende] Du sier jeg velger hva jeg deler. Greit. Jeg forteller ingenting i dag. Vi får se om du fortsatt er interessert når jeg ikke kommer med en krise.",
      "suggestion": "[Selvbevissthet] Jeg merker frustrasjon og et press om å få til en nyttig time. Jeg kan holde reaksjonene for meg selv, i stedet for å få henne til å dele for å lette mitt eget ubehag."
    },
    "dp_therapist-self-awareness_case-david_11": {
      "text": "[Behersket] Jeg ble bedt om å veilede en kollega. Jeg virker visst betryggende. Merkelig å høre det når kona mi sier at det føles som en eksamen å være sammen med meg.",
      "suggestion": "[Selvbevissthet] Jeg merker at jeg vil påpeke motsetningen og få fram en innsikt. Jeg kan stoppe opp ved den trangen og merke mitt eget ønske om å være skarpsindig."
    },
    "dp_therapist-self-awareness_case-david_12": {
      "text": "[Kjølig] Jeg sjekket kvalifikasjonene dine igjen. Det er ikke personlig. Hvis noen skal se meg på mitt verste, må jeg vite at de ikke bruker meg til å lære.",
      "suggestion": "[Selvbevissthet] Jeg kjenner meg blottstilt og får lyst til å ramse opp kvalifikasjonene mine. Jeg kan merke forsvarsimpulsen og holde behovet for å imponere ute av svaret."
    },
    "dp_therapist-self-awareness_case-marcus_11": {
      "text": "[Lavmælt] Nabogutten vinket til meg. Jeg vinket tilbake. Ble stående ved vinduet etterpå. Vet ikke hvorfor jeg forteller deg det.",
      "suggestion": "[Selvbevissthet] Jeg merker varme og en trang til å gjøre dette til et gjennombrudd. Jeg kan være i det lille øyeblikket uten å be ham gjøre mer ut av det."
    },
    "dp_therapist-self-awareness_case-marcus_12": {
      "text": "[Flatt, følger med på terapeuten] Folk blir som regel stille når jeg sier hvor jeg tjenestegjorde. Så takker de meg. Jeg vil helst at du ikke gjør noen av delene.",
      "suggestion": "[Selvbevissthet] Jeg merker usikkerhet og en trang til å svare slik man pleier i sosiale situasjoner. Jeg ville erkjent usikkerheten for meg selv uten å gjøre ham ansvarlig for den."
    },
    "dp_empathic-understanding_case-sara_11": {
      "text": "[Trist] Jeg setter fortsatt fram to tallerkener noen ganger. Så setter jeg den ene tilbake før jeg spiser. Middagen er den ensomste delen av dagen.",
      "suggestion": "Når du setter deg til middag, kjenner du hvor mye du savner å ha ham der."
    },
    "dp_empathic-understanding_case-sara_12": {
      "text": "[Lettet] Jeg var sammen med søsteren min en ettermiddag og hadde det faktisk fint. I noen timer prøvde jeg ikke å finne ut hva jeg hadde gjort galt.",
      "suggestion": "Det var en lettelse å ha det fint sammen med henne uten å klandre deg selv en stund."
    },
    "dp_empathic-understanding_case-michael_11": {
      "text": "[Frustrert] Fristen ble flyttet igjen. Jeg brukte hele helgen på å bli ferdig med rapporten, og nå virker det som om den innsatsen ikke teller.",
      "suggestion": "Du er frustrert over at du ga fra deg helgen, og at innsatsen din virker verdiløs."
    },
    "dp_empathic-understanding_case-michael_12": {
      "text": "[Skuffet] Sønnen min spurte onkelen om å bli med på skolearrangementet, ikke meg. Jeg vet at jeg har vært opptatt. Det gjorde likevel vondt å ikke bli spurt.",
      "suggestion": "Du forstår at du har vært opptatt, og det gjør likevel vondt at han valgte noen andre."
    },
    "dp_empathic-understanding_case-jason_11": {
      "text": "[Bekymret] Det er lunsj med teamet i morgen. Jeg tenker allerede på hvor jeg skal sitte og om noen vil snakke med meg.",
      "suggestion": "Du er bekymret for å finne en plass ved lunsjen og for å bli sittende alene."
    },
    "dp_empathic-understanding_case-jason_12": {
      "text": "[Glad] En på jobben husket noe jeg fortalte forrige uke. Jeg ble glad for at personen husket meg. Det gjorde dagen lettere.",
      "suggestion": "Det gjorde deg glad å bli husket, og du kjente deg litt mer til rette."
    },
    "dp_empathic-understanding_case-laura_11": {
      "text": "[Flatt, med et sukk] Regningen kom adressert til oss begge igjen. Jeg vet at det er en feil. Jeg blir likevel lei av påminnelsene, og av å ikke føle noe når jeg synes jeg burde bli lei meg.",
      "suggestion": "Du er sliten av påminnelsen og urolig over at tristheten du forventer, ikke er der."
    },
    "dp_empathic-understanding_case-laura_12": {
      "text": "[Lavmælt] En venninne tilbød seg å komme innom. Jeg ville ha selskap, men ble urolig ved tanken på å ha noen i leiligheten. Jeg sa nei og angret hele kvelden.",
      "suggestion": "Du ønsket selskapet hennes, men ble urolig av å slippe henne inn. Etterpå angret du på at du ble alene."
    },
    "dp_empathic-understanding_case-carlos_11": {
      "text": "[Sint, så roligere] Han endret planen for laget mitt uten å spørre. Jeg ble sint. Etterpå var jeg flau over at gutta så hvor lett han fikk meg til å reagere.",
      "suggestion": "Du er sint over at han overkjørte deg, og flau over at alle så hvor sterkt det gikk inn på deg."
    },
    "dp_empathic-understanding_case-carlos_12": {
      "text": "[Lavmælt] Datteren min ble stille da jeg kom inn på kjøkkenet. Jeg hadde ikke sagt noe engang. Det gjorde mer vondt enn enda en krangel ville gjort.",
      "suggestion": "Det gjør vondt at det var nok at du kom inn for at hun skulle bli stille."
    },
    "dp_empathic-understanding_case-nina_11": {
      "text": "[Sliten] Jeg hjalp alle de andre med å bli klare til ferien. Da vi dro, brydde jeg meg ikke lenger om hvor vi skulle. Jeg ville bare at ingen skulle trenge meg en dag.",
      "suggestion": "Du er så utslitt av å ta vare på alle at det du lengter etter, er en dag uten krav."
    },
    "dp_empathic-understanding_case-nina_12": {
      "text": "[Såret, unnskyldende] De takket hele teamet på skolemøtet, men utelot navnet mitt. Jeg vet at det ikke var med vilje. Jeg følte meg likevel oversett, og dum som brydde meg.",
      "suggestion": "Du følte deg oversett, selv om du visste det ikke var med vilje, og så dømte du deg selv for å bli såret."
    },
    "dp_empathic-understanding_case-aisha_11": {
      "text": "[Opprørt, snakker fort] Jeg ville at han skulle bli, men sa at han skulle gå fordi jeg skammet meg over å trygle. Nå er jeg alene og sint for at han hørte på meg.",
      "suggestion": "Du ville ha ham nær, skjøv ham bort i skam og føler deg nå alene og sint for at han gikk."
    },
    "dp_empathic-understanding_case-aisha_12": {
      "text": "[Lavmælt] Når det er rolig, vet jeg ikke hvem jeg er. Jeg er lettet over at ingen går, men føler meg tom og savner nesten å ha noe å krangle om.",
      "suggestion": "Roen gir deg lettelse, men også en tomhet som gjør deg usikker på hvem du er."
    },
    "dp_empathic-understanding_case-david_11": {
      "text": "[Behersket, bitter] De spør fortsatt om råd, men ga lederrollen til en annen. Jeg kan framstå som raus. For meg selv kjenner jeg meg ydmyket hver gang de roser ham.",
      "suggestion": "Du kan framstå som raus, samtidig som du kjenner deg ydmyket hver gang suksessen hans blir anerkjent."
    },
    "dp_empathic-understanding_case-david_12": {
      "text": "[Lavmælt] Kona mi sier hun ønsker seg en kveld der ingen av oss skal oppnå noe. Det vil jeg også, men uten noe å tilby føler jeg meg merkelig verdiløs.",
      "suggestion": "Du ønsker en kveld sammen, men uten noe å oppnå eller tilby kjenner du deg verdiløs."
    },
    "dp_empathic-understanding_case-marcus_11": {
      "text": "[Flatt] Jeg husker fødselsdagen hans hvert år. Ringer ingen. Jeg savner ham, men å snakke om ham føles verre enn å tie.",
      "suggestion": "Du savner ham og bærer datoen alene fordi det kjennes enda tyngre å snakke om ham."
    },
    "dp_empathic-understanding_case-marcus_12": {
      "text": "[På vakt] Jeg vil kunne sove uten å sjekke døra. Hvis jeg ikke sjekker, føler jeg meg uforsiktig. Hvis jeg gjør det, føler jeg meg fanget i den samme rutinen.",
      "suggestion": "Du vil ha hvile, men føler deg uforsiktig hvis du ikke sjekker, og fanget i rutinen hvis du gjør det."
    },
    "dp_empathic-affirmation-validation_case-sara_11": {
      "text": "[Flau] Jeg ba søsteren min bli til middag fordi jeg ikke ville ha enda en kveld alene. Jeg er voksen. Jeg burde ikke trenge noen bare for å komme meg gjennom en tirsdag.",
      "suggestion": "Når du har mistet den du delte kveldene med, er det forståelig å ønske selskap på en helt vanlig tirsdag. Det er ikke noe å skamme seg over."
    },
    "dp_empathic-affirmation-validation_case-sara_12": {
      "text": "[Skyldbetynget] Jeg hadde en fin ettermiddag uten å tenke på ham. Etterpå følte jeg meg illojal, som om det å ha det bra betydde at forholdet ikke hadde betydd noe.",
      "suggestion": "En god ettermiddag visker ikke ut det forholdet betydde. Det er forståelig at du vil ta vare på noe som var så viktig for deg."
    },
    "dp_empathic-affirmation-validation_case-michael_11": {
      "text": "[Skamfull] Prosjektet gikk bra, men jeg ville likevel høre sjefen si at han var fornøyd. Jeg hater å trenge det. Jeg burde selv vite om jeg har gjort en ordentlig jobb.",
      "suggestion": "Når andres godkjenning har vært så viktig, er det forståelig å ønske å høre at innsatsen din ble verdsatt. Det ønsket tar ikke fra deg evnen til å vurdere eget arbeid."
    },
    "dp_empathic-affirmation-validation_case-michael_12": {
      "text": "[Utilpass] Jeg var redd før møtet, ikke sint. Det skjedde ikke noe galt engang. Det virker latterlig å være nervøs for folk jeg ser hver dag.",
      "suggestion": "Hvis møtet kjennes som et sted der du kan bli kritisert, er nervøsiteten forståelig også blant folk du kjenner. Du trenger ikke avfeie den fordi møtet gikk bra."
    },
    "dp_empathic-affirmation-validation_case-jason_11": {
      "text": "[Unnskyldende] Jeg gikk tidlig fra lunsjen med teamet. Det var fint å bli invitert, men jeg ble utslitt av å følge med alle. Jeg føler meg utakknemlig som sier det.",
      "suggestion": "Du kan sette pris på invitasjonen og likevel bli utslitt av samtalen. Når det koster så mye å kjenne seg til rette, er det forståelig å trenge en pause."
    },
    "dp_empathic-affirmation-validation_case-jason_12": {
      "text": "[Lavmælt sint] De snakket over meg hele tiden. De la sikkert ikke merke til det, men jeg var sint etterpå. Det føles smålig når jeg knapt sa noe uansett.",
      "suggestion": "Det kan gjøre vondt å bli snakket over selv når det ikke er med vilje. Det er forståelig at du ble sint over å ikke få plass til å snakke; det gjør ikke sinnet smålig."
    },
    "dp_empathic-affirmation-validation_case-laura_11": {
      "text": "[Flatt, skamfullt] Jeg ble lettet da venninnen min avlyste. Så var jeg ensom hele kvelden. Jeg tenker stadig at et ordentlig menneske bare ville vært glad for at noen ville komme.",
      "suggestion": "Du kan ønske selskap og samtidig bli lettet når presset ved et besøk forsvinner. Når nærhet kjennes vanskelig, er den konflikten forståelig. Den gjør deg ikke til en dårlig venninne."
    },
    "dp_empathic-affirmation-validation_case-laura_12": {
      "text": "[På vakt] Jeg ba eksen levere tilbake nøkkelen. Det var fornuftig. Likevel gråt jeg etterpå. Jeg vil ikke at du skal tro jeg egentlig vil ha alt tilbake.",
      "suggestion": "Det kan være riktig å få nøkkelen tilbake og likevel kjenne et tap. Det er forståelig at du gråt; tårene trenger ikke bety at du vil tilbake til forholdet."
    },
    "dp_empathic-affirmation-validation_case-carlos_11": {
      "text": "[Skamfull] Jeg ropte ikke denne gangen. Jeg gikk ut. Men jeg var fortsatt rasende, og tenker at det betyr at jeg ikke har endret meg i det hele tatt.",
      "suggestion": "Det er forståelig å bli motløs når sinnet fortsatt er så sterkt. At du kjenner det, visker ikke ut at du valgte å ikke rope. Følelsen og måten du handler på den, er forskjellige ting."
    },
    "dp_empathic-affirmation-validation_case-carlos_12": {
      "text": "[Senker stemmen] Når datteren min sier hun er redd for meg, blir jeg også såret. Jeg vet at det er jeg som skremte henne. Kanskje jeg ikke har rett til å bli såret av det.",
      "suggestion": "Avstanden mellom deg og datteren din betyr noe for deg, så det er forståelig at du blir såret. Du kan kjenne den smerten og ta ansvar for at du skremte henne. Den unnskylder ikke handlingene og tar ikke fra henne retten til å være trygg."
    },
    "dp_empathic-affirmation-validation_case-nina_11": {
      "text": "[Skyldbetynget] Jeg ville feire at jeg kom meg gjennom skoleåret. Alle trengte noe, så jeg sa det ikke var viktig. Det var viktig. Det høres så selvopptatt ut.",
      "suggestion": "Når du har gitt så mye gjennom året, er det forståelig å ønske at innsatsen blir sett. Det er plass til din feiring også, ikke bare til andres behov."
    },
    "dp_empathic-affirmation-validation_case-nina_12": {
      "text": "[Unnskyldende] Moren min ringte i den ene timen jeg hadde satt av til meg selv. Jeg svarte ikke. Lettelsen var deilig, og så følte jeg meg slem.",
      "suggestion": "Når så mye av tiden din går til andre, er det forståelig å kjenne lettelse over en uforstyrret time. Å ha glede av det rommet betyr ikke at du ikke bryr deg om moren din."
    },
    "dp_empathic-affirmation-validation_case-aisha_11": {
      "text": "[Sint, skamfull] Venninnen min trengte en rolig kveld. Jeg forsto det, og hatet likevel å bli holdt utenfor. Så hatet jeg meg selv for å gjøre hennes slitenhet til noe om meg.",
      "suggestion": "Du kan forstå at hun trenger hvile og likevel kjenne smerten ved å være fra hverandre. Når avstand kan være så skremmende, er reaksjonen forståelig. Det gjør ikke henne ansvarlig for å fjerne den."
    },
    "dp_empathic-affirmation-validation_case-aisha_12": {
      "text": "[På gråten] Det har vært stabilt i en uke, og jeg er redd for å glede meg over det. Hvis jeg slapper av og alt forsvinner, føler jeg meg dum som trodde det kunne vare.",
      "suggestion": "Når nærhet så ofte har blitt brutt, kan det også kjennes risikabelt å glede seg over stabilitet. Forsiktigheten din er forståelig, selv om noe i deg vil ta inn den gode uken."
    },
    "dp_empathic-affirmation-validation_case-david_11": {
      "text": "[Behersket, flau] Kritikken fra datteren min satt i lenger enn noe tilbakeslag i jobben. Jeg sier til meg selv at jeg burde være hevet over å trenge et barns godkjenning.",
      "suggestion": "Det er forståelig at kritikken hennes gjør vondt: Hvordan hun ser deg, betyr noe fordi forholdet betyr noe. Å bli såret er ikke noe du må vokse fra eller heve deg over."
    },
    "dp_empathic-affirmation-validation_case-david_12": {
      "text": "[Bitter] Jeg misunner kollegaen som fikk rollen. Jeg kan gratulere ham og samtidig hate at han fikk den. Det føles nedverdigende å innrømme det.",
      "suggestion": "Å miste en rolle du ønsket, kan vekke både misunnelse og skuffelse. Følelsene er forståelige; å erkjenne dem betyr ikke at de skal bestemme hvordan du behandler kollegaen."
    },
    "dp_empathic-affirmation-validation_case-marcus_11": {
      "text": "[Lavmælt, skamfull] En nabo hjalp meg å bære varene. Jeg var takknemlig. Så følte jeg meg svak. Før var det meg folk stolte på.",
      "suggestion": "Når du har vært den andre stolte på, kan det kjennes uvant og sårbart å ta imot hjelp. Å være takknemlig for den gjør deg ikke svak."
    },
    "dp_empathic-affirmation-validation_case-marcus_12": {
      "text": "[Flatt] Jeg lo av noe på radioen. Det føltes galt etterpå. Noen fikk aldri komme hjem. Hvorfor skal jeg få en god morgen?",
      "suggestion": "Med tapene du bærer på, er det forståelig at et øyeblikk av glede også kan vekke skyld. Den gode stunden betyr ikke at du har glemt dem eller at livene deres betydde mindre."
    },
    "dp_exploratory-questions_case-sara_11": {
      "text": "[Usikker] Jeg fant en restaurant jeg ville prøve. Jeg holdt på å bestille bord, men lukket siden. Jeg vet ikke helt hva som stoppet meg.",
      "suggestion": "Hva skjer i deg når du ser for deg å gå dit alene?"
    },
    "dp_exploratory-questions_case-sara_12": {
      "text": "[Lavmælt] Venninnen min sa at jeg virket mer som meg selv. Jeg smilte, men det var noe ved det som ble sittende. Jeg vet ikke helt hva.",
      "suggestion": "Hva vekker det i deg å høre «mer som deg selv»?"
    },
    "dp_exploratory-questions_case-michael_11": {
      "text": "[Anspent] Rapporten ble godkjent uten endringer. Jeg burde vært fornøyd. I stedet brukte jeg kvelden på å sjekke om jeg hadde oversett noe.",
      "suggestion": "Hva merker du i deg når det ikke er noe igjen å rette?"
    },
    "dp_exploratory-questions_case-michael_12": {
      "text": "[Nølende] Sønnen min ville at jeg skulle sitte sammen med ham, ikke hjelpe ham å fikse noe. Jeg ble, men visste ikke helt hva jeg skulle gjøre.",
      "suggestion": "Hvordan er det for deg å være ønsket der uten å ha en oppgave?"
    },
    "dp_exploratory-questions_case-jason_11": {
      "text": "[Usikker] En kollega holdt av en plass til meg. Jeg kjente noe, men så var jeg for opptatt av å sette meg normalt til å legge merke til det.",
      "suggestion": "Hva merker du nå når du ser for deg plassen kollegaen holdt av til deg?"
    },
    "dp_exploratory-questions_case-jason_12": {
      "text": "[Lavmælt] Jeg skrev en melding til en venn og slettet den. Det sto bare at jeg hadde en tung dag. Likevel ble det for mye.",
      "suggestion": "Hva kjennes vanskeligst ved å la vennen din se den meldingen?"
    },
    "dp_exploratory-questions_case-laura_11": {
      "text": "[På vakt] Venninnen min satt ved siden av meg uten å stille spørsmål. Det var ikke så ubehagelig som jeg hadde ventet. Det er det jeg ikke klarer å forklare.",
      "suggestion": "Hvordan var det for deg å ha det stille selskapet?"
    },
    "dp_exploratory-questions_case-laura_12": {
      "text": "[Flatt] Jeg ryddet bort de siste tingene hans. Det var bare en praktisk jobb. Men etterpå fant jeg ikke ro, selv om alt endelig var ryddig.",
      "suggestion": "Hva merker du i den uroen akkurat nå?"
    },
    "dp_exploratory-questions_case-carlos_11": {
      "text": "[Anspent] Datteren min ba meg senke stemmen. Jeg gjorde det. Men noe skjedde inni meg før jeg gjorde det, og jeg vet ikke hva jeg skal kalle det.",
      "suggestion": "Hva merker du når du vender tilbake til øyeblikket hun ba deg om det?"
    },
    "dp_exploratory-questions_case-carlos_12": {
      "text": "[Lavmælt, rynker pannen] Gutta spurte meg om råd i stedet for bare å gjøre som jeg sa. Jeg likte det faktisk. Så ble jeg utilpass over at jeg likte det.",
      "suggestion": "Hva kjentes godt ved å bli spurt om råd?"
    },
    "dp_exploratory-questions_case-nina_11": {
      "text": "[Nølende] En kollega tilbød seg å ta en av oppgavene mine. Jeg sa nesten ja. Så hørte jeg meg selv si at det ikke var noe bry, og etterpå ble jeg irritert.",
      "suggestion": "Hva ønsket du å si i øyeblikket før «ikke noe bry» kom ut?"
    },
    "dp_exploratory-questions_case-nina_12": {
      "text": "[Unnskyldende] Alle hadde en fin søndag. Jeg ordnet alt. Da de spurte om jeg hadde hatt det fint, klarte jeg ikke å svare uten å ville gråte.",
      "suggestion": "Hva kommer fram når du gir deg selv plass til å svare på det nå?"
    },
    "dp_exploratory-questions_case-aisha_11": {
      "text": "[På vakt, så mykere] Jeg vil ikke være avhengig av meningen din. Men da du sa du ikke hadde bestemt for meg, fikk jeg det verre, ikke bedre. Jeg forstår ikke det.",
      "suggestion": "Hva var vanskeligst å høre i at jeg ikke hadde bestemt for deg?"
    },
    "dp_exploratory-questions_case-aisha_12": {
      "text": "[Fort, så med en pause] Jeg ville sende enda en melding, men lot være. Alle kaller det framgang. Jeg prøver fortsatt å finne ut hva jeg satt igjen med.",
      "suggestion": "Hva merker du i følelsen som ble igjen da du la fra deg mobilen?"
    },
    "dp_exploratory-questions_case-david_11": {
      "text": "[Behersket] Jeg korrigerte ikke kollegaen foran teamet. Det var det fornuftige valget. Likevel var jeg opptatt av det i flere timer etterpå.",
      "suggestion": "Hvordan kjentes det for deg å holde den korrigeringen tilbake?"
    },
    "dp_exploratory-questions_case-david_12": {
      "text": "[Lavmælt, på vakt] Kona mi takket meg for at jeg lyttet. Det jeg sa, var ikke spesielt innsiktsfullt. Det var merkelig vanskelig å ta imot takken.",
      "suggestion": "Hva er vanskelig ved å ta imot takken hennes bare for å ha lyttet?"
    },
    "dp_exploratory-questions_case-marcus_11": {
      "text": "[Lavmælt] Jeg ble stående da naboen begynte å snakke. Vanligvis går jeg. Etterpå var jeg rastløs. Det er alt jeg vet.",
      "suggestion": "Hva kan du merke ved den rastløsheten her, uten å måtte forklare den?"
    },
    "dp_exploratory-questions_case-marcus_12": {
      "text": "[På vakt] Du husket datoen. Det hadde jeg ikke ventet. Vet ikke om jeg liker det.",
      "suggestion": "Hvordan er det akkurat nå at jeg husket den?"
    },
    "dp_providing-treatment-rationale_case-sara_11": {
      "text": "[Usikker] Noen uker gråter jeg mer her, og andre uker gjør jeg ikke det. Hvordan skal vi vite om dette hjelper, utover hvor følelsesladet det blir?",
      "suggestion": "Du vil kunne kjenne igjen endring utover tårene. I dette arbeidet ser vi på om du forstår bedre hva du føler og trenger, og møter deg selv med mindre selvbebreidelse. Vi kan avtale tegn som er viktige for deg, og vurdere dem sammen. Målet er ikke å bli mer følelsesladet."
    },
    "dp_providing-treatment-rationale_case-sara_12": {
      "text": "[Nysgjerrig] Hvis jeg vet at bruddet er grunnen til at jeg er lei meg, hva mer prøver vi å finne ut ved å være i følelsen?",
      "suggestion": "Det er viktig å vite hva som utløser det. Å være i følelsen kan hjelpe oss å skille savnet etter ham fra selvbebreidelsen, så vi kan møte hvert av dem på en mer hjelpsom måte. Vi kan prøve med ett lite øyeblikk, hvis du vil."
    },
    "dp_providing-treatment-rationale_case-michael_11": {
      "text": "[Skeptisk] Jeg må slutte å glefse. Hvordan hjelper det hjemme at jeg forteller deg at jeg ble flau i et møte?",
      "suggestion": "Du vil ha en endring du kan bruke hjemme. Å merke flauheten før den blir til sinne, kan hjelpe deg å oppdage reaksjonen tidligere og velge hvordan du vil svare, i stedet for bare å kjempe mot sinnet etterpå. Vi kan begynne med et håndterlig øyeblikk du velger."
    },
    "dp_providing-treatment-rationale_case-michael_12": {
      "text": "[Praktisk] Kan vi ikke avtale en regel for krangler? Hvis jeg har en regel, kan jeg følge den. Følelser virker ikke særlig pålitelige.",
      "suggestion": "En regel kan være nyttig. Vi ser også på hva som skjer når kritikk treffer, fordi forståelse av reaksjonen kan gjøre det lettere å bruke regelen når du trenger den mest. Vi kan holde det konkret og sjekke hva du har nytte av."
    },
    "dp_providing-treatment-rationale_case-jason_11": {
      "text": "[Bekymret] Når du ber meg merke en følelse, begynner jeg å sjekke om jeg gjør det riktig. Blir ikke det bare mer av det samme problemet?",
      "suggestion": "Den sjekkingen er viktig informasjon, ikke en mislykket øvelse. Vi kan legge merke til selve presset, uten å kreve en bestemt følelse, og øve på å være oppmerksom uten å dømme så mye."
    },
    "dp_providing-treatment-rationale_case-jason_12": {
      "text": "[Nølende] Jeg kan snakke om et møte etterpå. Men når jeg faktisk sitter der, blir jeg helt blank. Hva øver vi på her som kan hjelpe der?",
      "suggestion": "Du vil at dette skal hjelpe i de vanskelige øyeblikkene. Her kan vi rolig merke hva som skjer rett før du blir blank, så du lettere kan kjenne det igjen uten straks å dømme deg selv. Du kan velge hvor vi begynner."
    },
    "dp_providing-treatment-rationale_case-laura_11": {
      "text": "[Flatt] Jeg bruker arbeidsdagen på å hjelpe folk å mestre. Jeg forstår ikke hvorfor det er bedre å snakke om det som gjør vondt enn å lære å håndtere det.",
      "suggestion": "Mestring er viktig, og den skal vi ikke ta fra deg. Vi kan også nærme oss litt av det nummenheten holder på avstand, slik at mestring ikke må bety å være avskåret fra alt du føler. Du kan velge hvor mye vi nærmer oss."
    },
    "dp_providing-treatment-rationale_case-laura_12": {
      "text": "[På vakt] Du sier vi ikke må snakke om fortiden. Hvordan kan dette da virke hvis det er fortiden som er problemet med meg?",
      "suggestion": "Vi trenger ikke gjenfortelle vonde hendelser for å begynne. Vi kan arbeide med hvordan nærhet eller nummenhet kjennes her, i små doser du velger, og finne ut hva som hjelper deg å være til stede nå."
    },
    "dp_providing-treatment-rationale_case-carlos_11": {
      "text": "[Skeptisk] Når du spør hvordan sinnet kjennes, tror jeg du ber meg hisse meg mer opp. Det er akkurat det jeg prøver å slutte med.",
      "suggestion": "Du vil unngå å miste kontrollen. Vi kan nærme oss sinnet i små doser og merke hva som utløser det, uten å handle på det, så du får flere valg før det tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_12": {
      "text": "[Bestemt] Jeg vil ikke bruke en time på å synes synd på meg selv. Jeg vil at familien min skal slutte å være redd for meg.",
      "suggestion": "Familiens trygghet er målet. Å forstå såretheten eller trusselen rundt sinnet kan hjelpe deg å oppdage det tidligere og svare uten å skremme. Det unnskylder ikke at de blir redde. Vi kan nærme oss det uten å presse deg lenger enn du klarer."
    },
    "dp_providing-treatment-rationale_case-nina_11": {
      "text": "[Unnskyldende] Jeg kan snakke om hva jeg trenger i en hel time. Så går jeg hjem, og alle trenger fortsatt noe. Hva ville egentlig vært annerledes?",
      "suggestion": "Å sette ord på behovene fjerner ikke kravene. Det kan hjelpe deg å kjenne egne grenser før utmattelsen gjør alle valg vanskeligere, slik at omsorg for andre også kan romme omsorg for deg selv. Vi kan begynne med en situasjon du ønsker å forstå."
    },
    "dp_providing-treatment-rationale_case-nina_12": {
      "text": "[Bekymret] Hvis vi gir plass til irritasjonen min, blir jeg ikke bare mindre omsorgsfull? Det å være til nytte er noe jeg faktisk verdsetter.",
      "suggestion": "Vi kan respektere hvor viktig omsorg er for deg. Å lytte til irritasjonen kan hjelpe deg å merke når du har gitt mer enn du tåler, i stedet for at den bygger seg opp til omsorg kjennes umulig. Vi kan lytte til bare litt av den om gangen."
    },
    "dp_providing-treatment-rationale_case-aisha_11": {
      "text": "[Intenst] Jeg kan navngi alle følelsene. Det hindrer meg ikke i å få panikk når noen blir stille. Hva skal egentlig skje etter at jeg har satt navn på den?",
      "suggestion": "Å sette navn på den er bare begynnelsen. Vi kan arbeide rolig med panikken og det du trenger i øyeblikket, så du ikke bare beskriver den eller desperat prøver å få noen andre til å fjerne den."
    },
    "dp_providing-treatment-rationale_case-aisha_12": {
      "text": "[Skeptisk, redd] Hvis vi øver på å være i frykten her, betyr det at du lærer meg å godta at folk forlater meg?",
      "suggestion": "Behovet ditt for kontakt betyr noe. Målet er å forstå frykten og det du trenger, så panikken ikke må bestemme alle handlinger. Vi kan nærme oss den i et tempo du velger; vi prøver ikke å fjerne behovet ditt for andre."
    },
    "dp_providing-treatment-rationale_case-david_11": {
      "text": "[Kjølig] Jeg kan forklare barndommen min helt fint. Det har ikke endret noe. Hvorfor skulle enda en samtale om følelser være annerledes?",
      "suggestion": "Du vil ha mer enn enda en forklaring. Målet er å merke hva som skjer i deg mens du snakker, så vi kan møte smerten i øyeblikket fremfor bare å forklare den etterpå. Vi kan prøve en liten bit og sjekke hvordan det er for deg."
    },
    "dp_providing-treatment-rationale_case-david_12": {
      "text": "[På vakt] Hvis jeg lar deg se hvor mye kritikken traff, hva hindrer at dette blir en øvelse i å sette meg på plass?",
      "suggestion": "Å bli gjort liten er nettopp det du ikke vil. Målet er å forstå det såre under behovet for å forsvare deg, uten å ta fra deg verdigheten. Du kan si fra når arbeidet kjennes nedverdigende."
    },
    "dp_providing-treatment-rationale_case-marcus_11": {
      "text": "[Flatt] Det hjalp ikke å fortelle historien før. Jeg fikk bare ikke sove. Det gjør jeg ikke igjen.",
      "suggestion": "Du har grunn til å være forsiktig. Vi kan begynne med det som skjer her nå, uten å gjenfortelle hendelsene, og holde arbeidet lite nok til at du kan være til stede og velge om du vil fortsette."
    },
    "dp_providing-treatment-rationale_case-marcus_12": {
      "text": "[På vakt] Nummenheten lar meg komme meg gjennom dagen. Hvorfor skulle jeg ønske at du fjerner det som holder meg gående?",
      "suggestion": "Vi skal ikke prøve å ta beskyttelsen fra deg. Målet er å finne øyeblikk der du kan kjenne litt uten å miste fotfestet, så nummenhet ikke trenger å være den eneste veien gjennom dagen."
    },
    "dp_empathic-explorations_case-sara_11": {
      "text": "[På gråten] Jeg hadde noe morsomt å fortelle ham på bussen. Et øyeblikk glemte jeg at vi ikke er sammen. Det triste kom da jeg husket det.",
      "suggestion": "Tristheten kommer når du husker at du ikke kan fortelle ham det. Kan vi stoppe litt opp ved hvordan det treffer deg nå?"
    },
    "dp_empathic-explorations_case-sara_12": {
      "text": "[Mykt] Søsteren min sa ikke at jeg måtte komme meg videre. Hun bare ble. Jeg ble lettet, og tror det er mer ved det enn det.",
      "suggestion": "Det er en lettelse i at hun bare blir. Gi den lettelsen litt tid og se hva mer du merker."
    },
    "dp_empathic-explorations_case-michael_11": {
      "text": "[Lavmælt] Sønnen min spurte om jeg kom på kampen. Jeg sa ja, men måten han spurte på gjorde meg trist. Som om han ikke helt kunne regne med det.",
      "suggestion": "Det er tristhet i å høre den usikkerheten fra ham. Hvordan er det å la deg selv merke den her, uten å ordne opp med en gang?"
    },
    "dp_empathic-explorations_case-michael_12": {
      "text": "[Frustrert, så nølende] Jeg var rasende over korrigeringen. Så oppdaget jeg at jeg også var skuffet over meg selv. Det er vanskeligere å snakke om.",
      "suggestion": "Skuffelsen over deg selv er vanskeligere å nærme seg. Vi kan ta det rolig og utforske akkurat det du kan sette ord på."
    },
    "dp_empathic-explorations_case-jason_11": {
      "text": "[Stille glad] De spurte om jeg ville bli med igjen. Jeg ble glad da jeg leste det. Så begynte jeg å bekymre meg for hva jeg skulle si.",
      "suggestion": "Før bekymringen kom, var det den gleden. Kan vi gi den litt plass og merke hvordan det var å bli invitert igjen?"
    },
    "dp_empathic-explorations_case-jason_12": {
      "text": "[Nølende] Jeg skulle ønske vennen min ventet på meg etter møtet. Jeg innrømmer vanligvis ikke slike ønsker. Det kjennes litt trist å si det.",
      "suggestion": "Det kommer litt tristhet når du sier at du ønsket at han skulle vente. Du trenger ikke forklare den bort. Vi kan lytte til hvordan den kjennes."
    },
    "dp_empathic-explorations_case-laura_11": {
      "text": "[Lavmælt, overrasket] Venninnen min satte mat utenfor døra. Jeg trengte ikke slippe henne inn eller snakke. Jeg ble rørt, og det overrasket meg.",
      "suggestion": "Du ble rørt av å bli tatt vare på uten å måtte slippe henne inn. Vi kan gi litt plass til den følelsen, akkurat slik den er."
    },
    "dp_empathic-explorations_case-laura_12": {
      "text": "[På vakt, med en pause] Jeg vil ikke se ham igjen. Jeg ble likevel trist da han sa han hadde sluttet å spørre. De to tingene passer liksom ikke sammen.",
      "suggestion": "Du ønsker ikke kontakt, og blir trist over at han sluttet å spørre. Begge deler er her. Kan vi gi tristheten litt plass uten å gjøre den til en beslutning om å møte ham?"
    },
    "dp_empathic-explorations_case-carlos_11": {
      "text": "[Lavmælt] Datteren min lente seg inntil meg da vi så på TV. Jeg sa ingenting. Jeg var glad for at hun ble der. Jeg blir glad igjen når jeg sier det nå.",
      "suggestion": "Gleden er her igjen mens du forteller. Gi deg selv et øyeblikk til å kjenne hvordan det var at hun ble så nær."
    },
    "dp_empathic-explorations_case-carlos_12": {
      "text": "[Sint, så langsommere] Han sa vitsen foran alle. Jeg lo med. Etterpå ble jeg såret, og det er vanskeligere å innrømme enn sinne.",
      "suggestion": "Såretheten er vanskeligere å vise enn sinnet. Vi kan gi plass til bare så mye av den som du vil ta med hit."
    },
    "dp_empathic-explorations_case-nina_11": {
      "text": "[På gråten, smiler] Kollegaen min sa jeg ikke måtte gjøre meg fortjent til en fri ettermiddag. Jeg lo, men ville gråte. Det var en lettelse å høre det.",
      "suggestion": "Du kjente lettelse over å ikke måtte gjøre deg fortjent til hvilen. Kan vi stoppe litt ved den lettelsen før smilet tar oss videre?"
    },
    "dp_empathic-explorations_case-nina_12": {
      "text": "[Lavmælt] Jeg ble sint da de tok for gitt at jeg skulle ordne alt igjen. Så fikk jeg skyldfølelse. Også nå kommer skylden før jeg får sagt ferdig at jeg var sint.",
      "suggestion": "Skylden kommer så fort at sinnet knapt får en hel setning. Vi kan stoppe opp og la deg fullføre den setningen, uten at du trenger å handle på den."
    },
    "dp_empathic-explorations_case-aisha_11": {
      "text": "[Mykere, følger med på terapeuten] Jeg var sint fordi du ikke var enig med meg. Jeg er fortsatt sint. Men også trist over at jeg så gjerne ville at du skulle være enig.",
      "suggestion": "Sinnet er fortsatt her, og tristheten kommer ved siden av. Vi kan bruke litt tid på den tristheten uten å kreve at sinnet skal forsvinne."
    },
    "dp_empathic-explorations_case-aisha_12": {
      "text": "[Lavmælt, urolig] Jeg ble lettet da hun sa hun skulle ringe i morgen. Så klarte jeg ikke glede meg over det. Men litt av lettelsen er der fortsatt.",
      "suggestion": "Litt lettelse er fortsatt tilgjengelig, selv med uroen. Kan vi merke bare den lille lettelsen uten å bestemme hva morgendagen vil bringe?"
    },
    "dp_empathic-explorations_case-david_11": {
      "text": "[Behersket, senker stemmen] Jeg ble glad da de ba meg bli etter møtet. Ikke for råd. Bare for å ta noe å drikke sammen. Jeg pleier ikke si at det betyr noe.",
      "suggestion": "Det betydde noe å være ønsket som selskap. Vi kan være der et øyeblikk, før du må forklare eller bagatellisere det."
    },
    "dp_empathic-explorations_case-david_12": {
      "text": "[Lavmælt, på vakt] Datteren min sier hun savner meg selv når jeg er hjemme. Jeg ble trist av å høre det. Så begynte jeg å forklare hvor mye press jeg står under.",
      "suggestion": "Du merket tristhet før du gikk over til forklaringen. Kan vi vende tilbake til akkurat det øyeblikket da du hørte at hun savner deg?"
    },
    "dp_empathic-explorations_case-marcus_11": {
      "text": "[Lavmælt] Jeg hørte yndlingssangen hans. Vanligvis slår jeg av. Denne gangen lyttet jeg litt. Ble trist. Ikke alt på en gang.",
      "suggestion": "Litt tristhet kom mens du lyttet. Vi kan gi akkurat den lille biten plass. Vi trenger ikke hele historien."
    },
    "dp_empathic-explorations_case-marcus_12": {
      "text": "[På vakt, med en pause] Jeg ble lettet da du ikke presset på for mer. Er det fortsatt. Vanskelig å si det til noen.",
      "suggestion": "Det er en lettelse i at jeg ga deg rom. Vi kan gi den følelsen et øyeblikk uten å be deg si mer enn du vil."
    },
    "dp_empathic-evocations_case-sara_11": {
      "text": "[Saklig] Jeg tok navnet hans av postkassen. Det måtte gjøres. Det var vanskeligere å komme hjem etterpå enn jeg hadde ventet.",
      "suggestion": "Som om den lille endringen ved døra gjorde fraværet der inne mye større."
    },
    "dp_empathic-evocations_case-sara_12": {
      "text": "[Behersket] Jeg fyller kveldene med ting. Når jeg ikke har planer, merker jeg hvor mye jeg savner noen å fortelle de små tingene til.",
      "suggestion": "Alt du holder på med blir stille, og der er den tomme plassen der dagens små historier pleide å lande."
    },
    "dp_empathic-evocations_case-michael_11": {
      "text": "[Kort] Én liten korrigering i en god rapport. Jeg hørte ikke noe annet av det de sa. Det er irriterende.",
      "suggestion": "Den ene korrigeringen fyller hele rommet, og det gode arbeidet krymper ut av syne."
    },
    "dp_empathic-evocations_case-michael_12": {
      "text": "[Behersket] Jeg vet at sønnen min bare ber om hjelp. Likevel føler jeg at jeg har sviktet ham når jeg ikke kan svare med en gang.",
      "suggestion": "Selv et lite spørsmål setter deg liksom i et skarpt lys der du må ha svaret med en gang."
    },
    "dp_empathic-evocations_case-jason_11": {
      "text": "[Flatt] Alle i gruppechatten visste visst hva de skulle si. Jeg skrev et svar, så på det og lot være å sende.",
      "suggestion": "Samtalen går videre, og du står i utkanten med ord du ikke helt får sluppet ut."
    },
    "dp_empathic-evocations_case-jason_12": {
      "text": "[Saklig] Jeg gikk gjennom hilsenen hele kvelden. Den varte i kanskje fem sekunder. Det er irriterende at jeg ikke klarer å la den være.",
      "suggestion": "De fem sekundene kommer stadig tilbake, som et lite klipp du ikke får stoppet."
    },
    "dp_empathic-evocations_case-laura_11": {
      "text": "[Flatt] Jeg pakket de siste tingene hans. Etterpå var leiligheten ryddig, og jeg visste ikke hva jeg skulle gjøre med meg selv.",
      "suggestion": "Alt er på plass nå, men du blir stående i et rom som ennå ikke kjennes som ditt."
    },
    "dp_empathic-evocations_case-laura_12": {
      "text": "[På vakt] Venninnen min var snill. Jeg sa takk. Jeg lot det egentlig ikke gå inn på meg før hun hadde gått.",
      "suggestion": "Kanskje omsorgen først når inn når døra er lukket og du ikke lenger må passe på åpningen."
    },
    "dp_empathic-evocations_case-carlos_11": {
      "text": "[Kort] Han sa det foran laget. Jeg gjorde jobben ferdig. Jeg tenkte fortsatt på det hjemme.",
      "suggestion": "Du fortsatte å jobbe, men stikket fra det som ble sagt foran alle, ble med deg lenge etter at skiftet var over."
    },
    "dp_empathic-evocations_case-carlos_12": {
      "text": "[Behersket] Datteren min ser an situasjonen før hun snakker til meg. Jeg merker det. Jeg liker ikke hva det sier om hvordan vi har det hjemme.",
      "suggestion": "Det er en pause mellom dere nå, som om hun må prøve underlaget før hun tar et skritt mot deg."
    },
    "dp_empathic-evocations_case-nina_11": {
      "text": "[Saklig] Jeg brukte ettermiddagen på å finne det alle andre ønsket seg. Da de spurte hva jeg ville ha, kom jeg ikke på noe.",
      "suggestion": "Du har gitt så mye plass til andres ønsker at dine egne ligger gjemt et sted du knapt når fram til."
    },
    "dp_empathic-evocations_case-nina_12": {
      "text": "[Smiler, distansert] De sa jeg alltid får ting til å gå rundt. Det var ment som et kompliment. Jeg ble sliten av å høre det.",
      "suggestion": "Komplimentet lander nesten som enda en byrde i armene som allerede bærer alt."
    },
    "dp_empathic-evocations_case-aisha_11": {
      "text": "[Flatt, tydelig] Jeg sletter samtalen for å ikke sjekke den. Så åpner jeg den tomme skjermen. Det gjør jeg også.",
      "suggestion": "Selv når meldingene er borte, er det som om du fortsatt venter ved den samme døra på at noen skal komme tilbake."
    },
    "dp_empathic-evocations_case-aisha_12": {
      "text": "[På vakt] Det er greit i dag. Jeg vil ikke venne meg til det. Det er som regel da noe endrer seg.",
      "suggestion": "Du merker roen like ved, men holder en hånd på alarmen i tilfelle den forsvinner."
    },
    "dp_empathic-evocations_case-david_11": {
      "text": "[Kjølig] Middagen var vellykket. Alle roste huset. Da de gikk, føltes det påfallende tomt. Det er ingen klage, bare en observasjon.",
      "suggestion": "Applausen følger gjestene ut, og du blir stående i stillheten den ikke lenger fyller."
    },
    "dp_empathic-evocations_case-david_12": {
      "text": "[Behersket] Jeg har skrevet om e-posten flere ganger. Det er ikke noe galt med den nå. Å sende den gir dem likevel for mye mulighet til å bedømme meg.",
      "suggestion": "Du fortsetter å polere overflaten, men å sende den kjennes fortsatt som å gå ut uten noe å skjule seg bak."
    },
    "dp_empathic-evocations_case-marcus_11": {
      "text": "[Flatt] Jeg lar TV-en stå på. Ser ikke på den. Det er verre når rommet er stille.",
      "suggestion": "Lyden ser ut til å holde litt avstand mellom deg og det stillheten bringer nær."
    },
    "dp_empathic-evocations_case-marcus_12": {
      "text": "[På vakt] Jeg kjente igjen håndskriften på konvolutten. La den i en skuff. Har ikke åpnet den. Vil ikke se den heller.",
      "suggestion": "Den kjente håndskriften ser ut til å bringe noe så nær at du trenger en skuff mellom deg og det."
    },
    "dp_empathic-conjectures_case-sara_11": {
      "text": "[Avvisende, så stille] Han kan beholde bildene. Jeg trenger dem ikke. Jeg sjekket likevel om han hadde tatt ned bildene av oss.",
      "suggestion": "Jeg lurer på om det å se etter bildene også er en måte å sjekke om du fortsatt betyr noe for ham."
    },
    "dp_empathic-conjectures_case-sara_12": {
      "text": "[Unnskyldende] Jeg spurte nesten søsteren min om hun kunne bli en natt til. Så tenkte jeg at hun hadde gjort nok, og fikk det til å høres ut som om jeg ville ha leiligheten for meg selv.",
      "suggestion": "Kanskje det kjentes risikabelt å vise at du fortsatt ønsket selskap, i tilfelle det var mer enn hun ville gi."
    },
    "dp_empathic-conjectures_case-michael_11": {
      "text": "[Kort] Jeg kunne ha bedt om hjelp med rapporten. I stedet jobbet jeg til midnatt. Jeg vil ikke at folk skal tro de må bære meg.",
      "suggestion": "Jeg lurer på om det å trenge hjelp kjennes nært det å bli sett som en som ikke duger."
    },
    "dp_empathic-conjectures_case-michael_12": {
      "text": "[Irritert, senker stemmen] Sønnen min spurte stadig om jeg kom på kampen. Jeg sa at jeg allerede hadde svart ja. Jeg har tenkt på ansiktet hans siden.",
      "suggestion": "Kanskje det gjorde vondt at han spurte igjen, fordi det tydet på at han ikke var sikker på om han kunne regne med deg."
    },
    "dp_empathic-conjectures_case-jason_11": {
      "text": "[Nølende] Jeg sier jeg er opptatt når folk inviterer meg. Så sjekker jeg om de dro uten meg. Jeg vet at det ikke gir så mye mening.",
      "suggestion": "Kanskje du vil være med, og det å si du er opptatt beskytter deg mot å finne ut hvordan det ville vært å bli med dem."
    },
    "dp_empathic-conjectures_case-jason_12": {
      "text": "[Lavmælt] Jeg sa ikke til vennen min at jeg hadde hatt en dårlig dag. Jeg spurte om hans i stedet. Jeg håpet stadig han ville merke at jeg sa lite.",
      "suggestion": "Jeg lurer på om du ønsket at han skulle se at du trengte omsorg, uten at du måtte ta sjansen på å be om den."
    },
    "dp_empathic-conjectures_case-laura_11": {
      "text": "[På vakt] Når venninnen min tilbyr seg å komme, sier jeg at jeg jobber. Jeg jobbet ikke i går kveld. Jeg så stadig på mobilen.",
      "suggestion": "Kanskje det beskytter deg å holde henne utenfor, samtidig som noe i deg fortsatt håper at hun skal ta kontakt."
    },
    "dp_empathic-conjectures_case-laura_12": {
      "text": "[Flatt, ser bort] Det gjør meg ikke noe at han leverte tilbake nøkkelen. Det er avklart. Men jeg har ikke fjernet navnet hans fra kontaktene ennå.",
      "suggestion": "Jeg lurer på om det å fjerne navnet hans ville gjort bruddet mer endelig enn du er klar for akkurat nå."
    },
    "dp_empathic-conjectures_case-carlos_11": {
      "text": "[I forsvar] Gutta kan spøke om meg. Jeg spøker om dem. Men da den nye fyren slengte seg på, måtte jeg sette ham på plass.",
      "suggestion": "Kan det være en bekymring for at du ville mistet respekt foran de andre hvis du lot vitsen hans passere?"
    },
    "dp_empathic-conjectures_case-carlos_12": {
      "text": "[Anspent, så stille] Datteren min ba onkelen hjelpe i stedet for meg. Jeg sa greit. Så fant jeg en grunn til å dra før han kom.",
      "suggestion": "Kanskje det gjorde vondt at hun gikk til en annen, og det å dra gjorde at du slapp å vise den såretheten."
    },
    "dp_empathic-conjectures_case-nina_11": {
      "text": "[Smiler] De sa jeg ikke trengte ta med noe. Jeg lagde mat likevel. Det ville føltes rart å komme tomhendt.",
      "suggestion": "Jeg lurer på om det å ha med noe hjelper deg å føle deg sikker på at det er en plass til deg der."
    },
    "dp_empathic-conjectures_case-nina_12": {
      "text": "[Unnskyldende] Jeg sier til alle at jeg gjerne ordner det. Så blir jeg irritert når ingen tilbyr hjelp. De kan ikke lese tankene mine, så det er vel min feil.",
      "suggestion": "Kanskje det kjennes risikabelt å spørre direkte, som om det å trenge hjelp kan endre hvordan de ser deg."
    },
    "dp_empathic-conjectures_case-aisha_11": {
      "text": "[Skarpt, så avventende] Ikke si du kommer til å huske meg neste uke. Du sier det fordi du må. Men jeg lurer stadig på om du har tenkt på meg mellom timene.",
      "suggestion": "Jeg lurer på om ønsket om å bety noe for meg mellom timene også gjør deg på vakt mot et svar som kan skuffe deg."
    },
    "dp_empathic-conjectures_case-aisha_12": {
      "text": "[Trassig, ustø stemme] Jeg sa jeg ikke trengte vennskapet lenger. Slettet nummeret hennes. Jeg kan det fortsatt utenat, så det gjorde egentlig ingen forskjell.",
      "suggestion": "Kanskje det å si at du ikke trengte henne, var en måte å komme frykten for at hun ikke trengte deg i forkjøpet."
    },
    "dp_empathic-conjectures_case-david_11": {
      "text": "[Kjølig] Jeg dro ikke i avskjedsmiddagen. Den var ikke viktig. Jeg merket meg likevel at ingen tok kontakt etterpå for å spørre hvorfor.",
      "suggestion": "Jeg lurer på om det å ikke bli spurt traff et ønske om å være savnet, selv mens du sa til deg selv at middagen ikke betydde noe."
    },
    "dp_empathic-conjectures_case-david_12": {
      "text": "[Behersket] Jeg trenger ikke konas godkjenning. Men når hun takker naboen for hjelp, tar jeg meg i å ramse opp alt jeg har gjort den uken.",
      "suggestion": "Kanskje takken hennes til ham vekker en frykt for at det du gir, ikke lenger er nok til å bety noe for henne."
    },
    "dp_empathic-conjectures_case-marcus_11": {
      "text": "[Flatt] Jeg kastet naboens invitasjon. Tok den opp igjen. Har ikke svart.",
      "suggestion": "Kanskje det finnes et ønske om selskap der, ved siden av behovet for å holde avstand."
    },
    "dp_empathic-conjectures_case-marcus_12": {
      "text": "[På vakt] Jeg ber ikke folk huske datoen. Merker det likevel når ingen gjør det. Gir ikke mye mening.",
      "suggestion": "Jeg lurer på om du ønsker at tapet skal bety noe for en annen også, uten at du må forklare alt."
    },
    "dp_staying-in-contact-intense-affect_case-sara_11": {
      "text": "[Gråter, strever med å snakke] Jeg kom hjem og ville fortelle ham en liten ting om dagen. Han er ikke der. Jeg vet det. Det gjør fortsatt så vondt.",
      "suggestion": "Det vanlige øyeblikket bringer tapet så nær. Jeg er her med deg. Du trenger ikke gjøre tristheten mindre eller finne alle ordene på en gang."
    },
    "dp_staying-in-contact-intense-affect_case-sara_12": {
      "text": "[Rørt til tårer] Søsteren min sa jeg kunne bli så lenge jeg trengte. Jeg begynte bare å gråte. Jeg visste ikke hvor sliten jeg var av å prøve å ikke trenge noen.",
      "suggestion": "Å bli tatt imot slik berører deg dypt. Vi kan la tårene og lettelsen få plass, uten å be deg ta deg sammen."
    },
    "dp_staying-in-contact-intense-affect_case-michael_11": {
      "text": "[Stemmen brister] Sønnen min sa: «Du var snill i dag, pappa.» Han mente det som noe fint. Jeg klarer ikke slutte å tenke på hvordan de andre dagene må være for ham.",
      "suggestion": "Det vekker mye smerte om de andre dagene. Jeg er her med deg. Vi kan la deg kjenne den uten å gjøre dette øyeblikket til en dom over hele deg."
    },
    "dp_staying-in-contact-intense-affect_case-michael_12": {
      "text": "[Sint, nær gråt] Jeg jobbet så hardt for å holde alt sammen. Nå sier hun at hun føler seg alene med meg. Jeg vet ikke om jeg vil rope eller bare gråte.",
      "suggestion": "Det er så mye sårethet og sinne her samtidig. Jeg kan være med deg i det. Vi trenger ikke tvinge noen av følelsene bort eller handle på dem."
    },
    "dp_staying-in-contact-intense-affect_case-jason_11": {
      "text": "[På gråten, prøver å unnskylde seg] De holdt av en plass til meg. Jeg vet det bare er en lunsj. Jeg klarer ikke slutte å gråte over at de ville ha meg der. Unnskyld, dette er flaut.",
      "suggestion": "Det å være ønsket der har nådd dypt inn. Du trenger ikke unnskylde tårene. Jeg blir hos deg mens du tar det inn."
    },
    "dp_staying-in-contact-intense-affect_case-jason_12": {
      "text": "[Overveldet, ser ned] Jeg prøvde så hardt å bli med i samtalen. Etterpå gråt jeg i trappa fordi jeg fortsatt følte meg som den ingen ville sitte ved siden av.",
      "suggestion": "Etter all den innsatsen gjør det så vondt å føle seg uønsket. Jeg er med deg her, og vi kan gi smerten litt rom uten å be deg prøve hardere akkurat nå."
    },
    "dp_staying-in-contact-intense-affect_case-laura_11": {
      "text": "[Plutselig på gråten] Hun sa jeg ikke måtte forklare hvorfor jeg trengte selskap. Jeg klarte ikke snakke. Jeg ville så gjerne ha henne der, og var redd for å ville det.",
      "suggestion": "Ønsket om å ha henne nær og frykten for det ønsket er begge sterke. Jeg er her. Vi kan nærme oss det litt om gangen uten at du må forklare det."
    },
    "dp_staying-in-contact-intense-affect_case-laura_12": {
      "text": "[Fortvilet, stemmen blir svak] Jeg fortalte om leiligheten, og nå kjennes alt langt borte. Jeg hører deg, men kjenner ikke helt at jeg sitter her.",
      "suggestion": "Jeg er her med deg, og vi kan stoppe fortellingen. Hvis det hjelper, kan du se rundt i rommet sammen med meg og merke hvor stolen støtter deg. Vi skal ikke presse fram mer følelse."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_11": {
      "text": "[Rasende, så skjelvende] Han lo da jeg ba ham slutte. Jeg kjenner sinnet igjen bare av å fortelle. Jeg vil ikke la det gå utover noen, men det er her.",
      "suggestion": "Sinnet er veldig nært, og du vil ikke handle på det. Jeg blir med deg. Vi kan senke tempoet og gi plass til det som gjorde vondt, uten å gjøre det til et angrep."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_12": {
      "text": "[Gråtkvalt] Datteren min la armene rundt meg. Jeg stivnet. Jeg ville holde rundt henne, men var så redd for å gjøre det feil at jeg ikke klarte å bevege meg.",
      "suggestion": "Du ønsket den nærheten så sterkt, og frykten stoppet deg. Vi kan stoppe opp ved hvor dypt det berører deg, uten at du må gjøre noe riktig her."
    },
    "dp_staying-in-contact-intense-affect_case-nina_11": {
      "text": "[Hulker] Alle gikk ut, og endelig hadde jeg huset for meg selv. Jeg bare gråt. Jeg trengte roen så sterkt, og fikk så dårlig samvittighet for å være glad for at de gikk.",
      "suggestion": "Det er en dyp lettelse, og skylden kommer rett ved siden av. Jeg er med deg. Vi kan gi lettelsen litt plass uten at den må bety at du ikke elsker dem."
    },
    "dp_staying-in-contact-intense-affect_case-nina_12": {
      "text": "[På gråten, plutselig sint] Jeg ønsket bare én gang å være den noen tok vare på. Jeg blir sint av å si det. Så hører jeg hvor egoistisk jeg høres ut, og vil ta det tilbake.",
      "suggestion": "Det ønsket har ventet lenge, og sinnet er sterkt. Du trenger ikke ta det tilbake for min skyld. Jeg kan være med deg mens vi nærmer oss det rolig."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_11": {
      "text": "[Panisk, snakker fort] Når du blir stille, tror jeg at jeg har mistet deg. Jeg ser at du fortsatt er her, men klarer ikke tro på det. Vær så snill, si noe.",
      "suggestion": "Jeg er her og lytter. Stillheten har gjort frykten veldig sterk. Vi kan roe ned sammen, og jeg kan fortsette å snakke mens vi finner et tempo som hjelper deg å være her med meg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_12": {
      "text": "[Sint gjennom tårene] Ikke si at dette er framgang. Jeg ventet i stedet for å sende enda en melding, og det gjorde vondt hele tiden. Jeg trenger at du vet hvor vanskelig det var.",
      "suggestion": "Det gjorde vondt hele veien, og hvis jeg kaller det framgang, kan jeg overse hva det kostet deg. Jeg vil gi plass til hvor vanskelig det var, uten å be deg være fornøyd med det."
    },
    "dp_staying-in-contact-intense-affect_case-david_11": {
      "text": "[Stemmen brister, så hardere] Hun sa barna slapper av når jeg er borte. Jeg får det ikke ut av hodet. Ikke se på meg som om du endelig har funnet det dårlige mennesket under.",
      "suggestion": "Den kommentaren har gjort dypt vondt, og å bli sett som bare et dårlig menneske ville gjort vondt igjen. Jeg er her med smerten du viser meg. Vi trenger ikke gjøre den til en dom."
    },
    "dp_staying-in-contact-intense-affect_case-david_12": {
      "text": "[Sint, skjelvende] Jeg har holdt alt sammen i årevis. Nå sitter jeg her og klarer knapt å snakke, og hater at du kan se meg slik.",
      "suggestion": "Å bli sett uten den kontrollen kjennes blottstillende. Jeg kan være her uten å be deg prestere eller samle deg. Vi kan ta det neste øyeblikket rolig."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_11": {
      "text": "[Stiv, presset stemme] For nær. Stolen. Jeg vet at du ikke gjør noe, men jeg trenger at du sitter lenger unna. Jeg klarer ikke snakke slik.",
      "suggestion": "Jeg flytter meg tilbake. Vi kan slutte å snakke om det. Jeg er her på denne avstanden, og du kan si fra om du har nok plass før vi gjør noe mer."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_12": {
      "text": "[På gråten, strever med å holde seg samlet] Jeg husket latteren hans. Har ikke hørt den på årevis. Det gjør mer vondt enn å huske det som skjedde. Ikke be om historien.",
      "suggestion": "Vi trenger ikke historien. Latteren hans har brakt tapet nær, og jeg kan være med deg mens du slipper inn bare så mye av tristheten som kjennes håndterlig."
    },
    "dp_self-disclosure_case-sara_11": {
      "text": "[Forsiktig] Når jeg forteller at jeg sjekket profilen hans igjen, tenker du da: «Nå begynner hun igjen, hun har ikke lært noe»?",
      "suggestion": "Jeg ser ikke på det som at du ikke har lært noe. Jeg er opptatt av hva som trekker deg tilbake i de øyeblikkene. Det høres ut som du er redd for at jeg skal miste tålmodigheten når du forteller meg det."
    },
    "dp_self-disclosure_case-sara_12": {
      "text": "[Ser på terapeuten] Du smilte da jeg sa at jeg gikk på kino alene. Ble du glad, eller var det bare for å oppmuntre meg?",
      "suggestion": "Jeg ble glad for å høre at du hadde en kveld du likte. Smilet var ekte; du trenger ikke fortsette å gjøre fremskritt for å fortjene det. Hvordan var det å legge merke til det?"
    },
    "dp_self-disclosure_case-michael_11": {
      "text": "[Direkte] Når jeg blir så direkte, tar du det personlig? Jeg vil ikke at du skal gå på tå rundt meg.",
      "suggestion": "Jeg merker kraften i stemmen din, og jeg ønsker å være direkte med deg fremfor å gå på tå. Jeg kan si fra hvis noe påvirker samtalen vår. Det betyr noe for deg at vi kan snakke ærlig uten at noen av oss trekker seg unna."
    },
    "dp_self-disclosure_case-michael_12": {
      "text": "[Bekymret] Hvis jeg forteller at jeg var sjalu på treneren til sønnen min, kan du fortsatt respektere meg? Det høres jo latterlig ut når jeg sier det.",
      "suggestion": "Ja, jeg kan respektere deg også når du forteller om sjalusi. Jeg setter pris på at du viser meg noe du synes er ubehagelig. Du virker redd for at denne følelsen skal endre hvordan jeg ser deg."
    },
    "dp_self-disclosure_case-jason_11": {
      "text": "[Nølende] Kan jeg si fra hvis jeg ikke skjønner et spørsmål? Jeg prøver vanligvis bare å svare likevel.",
      "suggestion": "Ja. Jeg vil heller vite at spørsmålet mitt er uklart enn at du strever med å finne et svar for min skyld. Da prøver jeg å formulere det annerledes. Det høres ut som det krever litt mot å spørre om det her."
    },
    "dp_self-disclosure_case-jason_12": {
      "text": "[Stille] Du virker ikke flau når jeg ikke får frem en setning. Er det virkelig greit for deg å sitte her sånn?",
      "suggestion": "Ja, det er greit for meg å sitte sammen med deg mens ordene er vanskelige å finne. Du trenger ikke snakke flytende for at denne tiden skal ha betydning. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-laura_11": {
      "text": "[Avventende, etter en pause] Du la fra deg pennen da jeg nevnte drikkingen. Hvorfor det?",
      "suggestion": "Jeg la den fra meg fordi jeg ville gi deg hele oppmerksomheten min fremfor å fortsette å skrive. Jeg ser at du la merke til endringen. Hva oppfattet du at den betydde?"
    },
    "dp_self-disclosure_case-laura_12": {
      "text": "[Langsomt] Må du føle deg nær meg for at dette skal virke? For det kan jeg ikke love.",
      "suggestion": "Jeg setter pris på å bli kjent med deg, men du trenger ikke gi meg en følelse av nærhet. Vi kan jobbe med en avstand som er håndterlig for deg. Det høres viktig ut at jeg ikke gjør nærhet til enda et krav."
    },
    "dp_self-disclosure_case-carlos_11": {
      "text": "[Følger nøye med] Du ble stille da jeg sa at datteren min skvatt. Endret det hva du tenker om meg?",
      "suggestion": "Jeg ble bekymret for hvordan det øyeblikket var for dere begge. Jeg vil ta frykten hennes på alvor og fortsette å snakke med deg om det. Du følger med på om jeg kan gjøre det uten å se deg bare gjennom det ene øyeblikket."
    },
    "dp_self-disclosure_case-carlos_12": {
      "text": "[Usikker] Vil du egentlig høre om det som går bra også? Jeg fikset sykkelen hennes, og vi hadde en fin ettermiddag. Høres ikke akkurat ut som noe å ta opp i terapi.",
      "suggestion": "Ja, det vil jeg høre om. Jeg er opptatt av de øyeblikkene du kjenner kontakt med henne, også dem som går bra. Jeg vil gjerne høre hvordan den ettermiddagen var for deg."
    },
    "dp_self-disclosure_case-nina_11": {
      "text": "[Unnskyldende] Jeg la merke til at du trakk pusten da jeg sa ja til enda en tjeneste. Er du skuffet over meg?",
      "suggestion": "Jeg er ikke skuffet over deg. Jeg la merke til hvor fort din egen slitenhet forsvant fra samtalen, og jeg ville senke tempoet sammen med deg. Det virker som det at jeg trakk pusten, gjorde deg redd for at du hadde skuffet meg også."
    },
    "dp_self-disclosure_case-nina_12": {
      "text": "[Urolig] Hvis jeg blir sint på deg, vil du si hvordan det påvirker deg, eller bare fortsette å være hyggelig? Jeg ville ikke visst om jeg hadde såret deg.",
      "suggestion": "Jeg kan si fra når noe påvirker samtalen vår, og jeg vil ikke be deg ta vare på følelsene mine. Jeg ønsker at du skal ha rom til å være sint på meg. Det høres ut som du ville bekymret deg for meg hvis du ikke visste hvordan jeg reagerte."
    },
    "dp_self-disclosure_case-aisha_11": {
      "text": "[Intenst] Når du sier at du bryr deg, mener du bare i disse femti minuttene? Si det rett ut. Jeg orker ikke gjette.",
      "suggestion": "Jeg bryr meg om deg på ordentlig, og kontakten vår har grenser: Vi møtes i timene og har kontakt slik vi har avtalt. Jeg vil ikke love en tilgjengelighet jeg ikke kan gi. Det kan gjøre vondt å høre om disse grensene; jeg vil høre hva det vekker i deg."
    },
    "dp_self-disclosure_case-aisha_12": {
      "text": "[Gransker terapeutens ansikt] Har du noen gang ønsket at jeg sluttet å komme? Ikke gi meg et perfekt terapeutsvar.",
      "suggestion": "Jeg ønsker å fortsette å jobbe med deg. Når samtalene blir vanskelige, kan jeg bli usikker på hvordan jeg best kan nå frem til deg; det er noe jeg må jobbe med, ikke en grunn til at du skal forsvinne. Hva ventet du å høre fra meg?"
    },
    "dp_self-disclosure_case-david_11": {
      "text": "[Kjølig] Du sier at det gjorde vondt. Er det en faglig formulering, eller følte du faktisk noe da jeg fortalte det?",
      "suggestion": "Jeg ble trist av å høre hvor alene du var i det øyeblikket. Det er min reaksjon, ikke et bevis på hva du bør føle. Jeg er opptatt av hvordan det er for deg å vite at det berørte meg."
    },
    "dp_self-disclosure_case-david_12": {
      "text": "[Behersket, utfordrende] Hvis du er imponert over meg, hvordan kan du være objektiv? Hvis du ikke er det, hvorfor skal jeg stole på vurderingene dine?",
      "suggestion": "Jeg kan verdsette det du har fått til, og samtidig undersøke ting kritisk sammen med deg. Jeg merker at jeg får lyst til å bevise at vurderingene mine er gode, og jeg vil ikke at det skal stå i veien for å forstå deg. Det høres ut som begge svarene kan gjøre deg usikker på meg."
    },
    "dp_self-disclosure_case-marcus_11": {
      "text": "[Avventende] Ville du sagt fra hvis du ikke forsto hva jeg mente? Folk nikker. Så er det tydelig at de ikke har skjønt det.",
      "suggestion": "Ja. Noen ganger forstår jeg ikke ennå, og da vil jeg heller si det og spørre enn å nikke høflig. Du kan også si fra når jeg har misforstått. Det er viktig at du slipper å gjette om jeg følger deg."
    },
    "dp_self-disclosure_case-marcus_12": {
      "text": "[Flatt, ser på terapeuten] Du fikk tårer i øynene. Må jeg passe på deg også nå?",
      "suggestion": "Det du fortalte berørte meg, og jeg kan ta hånd om min egen reaksjon. Du trenger ikke passe på meg. Det høres ut som det ble mindre trygt for deg her da du så det."
    },
    "dp_marker-recognition-chairwork_case-sara_11": {
      "text": "[På gråten, så skarp mot seg selv] Det gikk greit helt til jeg fant skjerfet hans. Altså, Sara, ta deg sammen. Det er et skjerf. Slutt å være så patetisk.",
      "suggestion": "Du hadde det vondt, og så gikk du hardt løs på deg selv for det. Vil du prøve to stoler, så vi kan høre kritikken og hva den gjør med deg? Hvis du vil, bruk denne stolen til stemmen som sier «ta deg sammen», og se for deg deg selv i den andre. Begynn med å si kritikken direkte til henne."
    },
    "dp_marker-recognition-chairwork_case-sara_12": {
      "text": "[Stille sint] Han sa at vi skulle snakke ordentlig om bruddet. Så sendte han en melding om å hente tingene sine. Jeg øver stadig på det jeg aldri fikk sagt.",
      "suggestion": "Det er noe du fortsatt trenger å si til ham om måten han gikk på. Vil du prøve å si det til ham her, med den tomme stolen? Hvis du vil prøve, se ham for deg der, på en avstand som kjennes riktig. Begynn med «Da du sendte den meldingen i stedet for å snakke med meg …» og fortell ham hvordan det var for deg."
    },
    "dp_marker-recognition-chairwork_case-michael_11": {
      "text": "[Rynker pannen] Sjefen sa «bra jobbet», og jeg tenkte med en gang: Ikke slapp av nå. Én bra uke betyr ikke at du ikke er en fiasko.",
      "suggestion": "Selv ros blir fulgt av et angrep på deg selv. Vil du prøve to stoler for å høre angrepet og hvordan du tar det imot? Hvis du vil, sitt i denne stolen som stemmen som advarer deg mot å slappe av, og se deg selv for deg overfor. Si direkte til ham: «Én bra uke betyr ikke …»"
    },
    "dp_marker-recognition-chairwork_case-michael_12": {
      "text": "[Stemmen brister, strammer kjeven] Jeg skulle til å si til sønnen min at jeg savnet ham. Så bet jeg tennene sammen og spurte om leksene. Sånt legger du ikke på en unge.",
      "suggestion": "Du strammet kjeven og stoppet ordene om å savne ham. Vil du undersøke hvordan du stopper deg selv, med to stoler? Dette handler om å forstå det, ikke om å bestemme hva du skal si til sønnen din. Hvis du vil, sitt her som stemmen som stopper deg, se deg selv for deg i den andre stolen, og si nøyaktig hva han ikke får si."
    },
    "dp_marker-recognition-chairwork_case-jason_11": {
      "text": "[Ser ned] Jeg svarte på ett spørsmål i lunsjen og snublet i et ord. Hele veien hjem var det: «Du hørtes dum ut. Hvorfor kan du ikke bare snakke normalt?»",
      "suggestion": "Du snakker veldig hardt til deg selv om det ene ordet. Vil du prøve to stoler for å høre ordene og hvordan de påvirker deg? Hvis du vil, sitt her som stemmen som sier at du hørtes dum ut, og se deg selv for deg i den andre stolen. Si den første setningen direkte til ham; vi kan ta det rolig."
    },
    "dp_marker-recognition-chairwork_case-jason_12": {
      "text": "[Nølende, såret] En gammel venn pleide å tulle med hvor stille jeg var. Jeg lo jeg også. Jeg vil fortsatt si til ham at det ikke var morsomt, men jeg gjorde det aldri.",
      "suggestion": "Du har fortsatt noe å si til ham om de vitsene. Vil du prøve å si det her, med den tomme stolen som en plass for ham? Hvis du vil, se ham for deg der og begynn med «Da du tullet med hvor stille jeg var …» Fortell ham det du ikke fikk sagt den gangen."
    },
    "dp_marker-recognition-chairwork_case-laura_11": {
      "text": "[Blir blank i øynene; presser leppene sammen] Nei. Ikke dette. Hvis jeg begynner å ønske at noen var her, klarer jeg ikke stoppe. Bare svelg det. Bli tom.",
      "suggestion": "Du presser leppene sammen og ber deg selv bli tom akkurat når ønsket kommer. Vil du undersøke hvordan du stopper deg selv, med to stoler, uten at vi presser oss forbi det? Hvis du velger å prøve, sitt her som stemmen som ber deg svelge det, se deg selv for deg overfor, og si bare den første beskjeden til henne. Vi kan stoppe der."
    },
    "dp_marker-recognition-chairwork_case-laura_12": {
      "text": "[Lavt, bittert] Han takket meg for at jeg var «så fornuftig» med skilsmissen. Jeg ville si at jeg ikke hadde det bra. Jeg var bare for sliten til å krangle.",
      "suggestion": "Det er ord han ikke har hørt om hva det kostet deg å være «fornuftig». Vil du prøve å si dem til ham med den tomme stolen? Hvis du vil, se ham for deg der på en avstand som er grei for deg. Begynn med «Da du takket meg for å være fornuftig …» og fortell ham hvordan du faktisk hadde det."
    },
    "dp_marker-recognition-chairwork_case-carlos_11": {
      "text": "[Avsky mot seg selv] Hun måtte sjekke ansiktet mitt før hun spurte om skyss. Flott far du er, Carlos. Din egen unge er redd for å spørre deg om noe.",
      "suggestion": "Du angriper deg selv for frykten du så hos henne. Vil du prøve to stoler for å høre angrepet og hva som skjer når du tar det imot? Å forstå dette tar ikke bort ansvaret ditt overfor henne. Hvis du vil, sitt her som stemmen som sier «flott far du er», se deg selv for deg overfor, og si de ordene direkte til ham."
    },
    "dp_marker-recognition-chairwork_case-carlos_12": {
      "text": "[Anspent, såret] Den gamle arbeidslederen spøkte med at jeg aldri ville bli mer enn et par hender. Jeg hører det fortsatt når jeg skal lede et møte. Jeg sa aldri hvor mye det gikk inn på meg.",
      "suggestion": "Ordene hans går fortsatt inn på deg, og det er noe du aldri fortalte ham om hvordan de traff. Vil du prøve å si det til ham med den tomme stolen? Hvis du vil, se ham for deg der på en avstand du velger. Begynn med «Da du kalte meg bare et par hender …» og fortell ham hva du trengte at han skulle høre."
    },
    "dp_marker-recognition-chairwork_case-nina_11": {
      "text": "[Tårene kommer; smiler raskt] Jeg skulle til å si at jeg er sint på henne. Nei, det er ikke rettferdig. Smil, Nina. Hun har nok å stri med. Ikke gjør det verre.",
      "suggestion": "Du begynte å kjenne sinne, og så smilte du og ba deg selv stoppe. Vil du undersøke hvordan du stopper deg selv, med to stoler, så vi kan forstå hva det gjør? Hvis du vil, sitt her som stemmen som sier «ikke gjør det verre», se deg selv for deg i den andre stolen, og fortell henne hva hun ikke får uttrykke."
    },
    "dp_marker-recognition-chairwork_case-nina_12": {
      "text": "[Stille bitter] Rektor takket meg for at jeg «aldri sier nei». Jeg ville si at det ikke var et kompliment. Jeg hadde bedt om hjelp hele semesteret. Jeg går fortsatt gjennom det jeg burde ha sagt.",
      "suggestion": "Du har fortsatt noe å si til henne om hvordan rosen overså behovet ditt for hjelp. Vil du prøve å si det med henne i tankene i den tomme stolen? Hvis du vil, se henne for deg der og begynn med «Da du takket meg for at jeg aldri sier nei …» Fortell henne hva du trengte at hun skulle forstå."
    },
    "dp_marker-recognition-chairwork_case-aisha_11": {
      "text": "[Sint på seg selv, gråter] Jeg ba henne bli og kalte henne egoistisk etterpå. Du ødelegger alt, Aisha. Ingen holder ut med deg lenge.",
      "suggestion": "Du har det vondt, og du angriper deg selv som en ingen holder ut med. Vil du prøve to stoler for å høre angrepet og hvordan det treffer, én setning om gangen? Vi kan stoppe hvis det blir for mye. Hvis du vil, sitt her som stemmen som sier «du ødelegger alt», se deg selv for deg overfor, og si den ene setningen direkte til henne."
    },
    "dp_marker-recognition-chairwork_case-aisha_12": {
      "text": "[Skjelver] Fostermoren min sa at jeg var familie. Så flyttet de meg. Jeg vil spørre henne hvorfor hun lot meg tro det, men bare å se henne for meg får meg til å skjelve.",
      "suggestion": "Det er et vondt spørsmål du aldri fikk stilt henne, og selv å se henne for deg kjennes mye. Vi trenger ikke gjøre dette nå. Vil det være håndterlig å prøve én setning mot en tom stol, hvis du velger avstanden og kan stoppe når som helst? Hvis ja, se henne bare så tydelig for deg som kjennes trygt, og begynn: «Da du sa at jeg var familie …»"
    },
    "dp_marker-recognition-chairwork_case-david_11": {
      "text": "[Kjølig, ser bort] Jeg gråt nesten da hun sa at hun savnet den jeg var før. Så: Nok. Få kontroll på ansiktet. Ikke gjør deg liten foran henne.",
      "suggestion": "Du stoppet tårene ved å beordre deg selv til å få kontroll på ansiktet. Vil du prøve to stoler for å forstå den ordren og virkningen av den, uten at du må gråte? Hvis du vil, sitt i denne stolen som stemmen som gir ordren, se deg selv for deg overfor, og si direkte til ham hva han ikke får vise."
    },
    "dp_marker-recognition-chairwork_case-david_12": {
      "text": "[Presist, stram kjeve] Faren min kalte forfremmelsen «en grei start». Han gjorde alltid sånt. Jeg har fortsatt en tale i hodet om hva det krevde å komme dit. Han får aldri høre den nå.",
      "suggestion": "Du ønsker fortsatt at han skal høre hva prestasjonen kostet deg, og hvordan svaret hans traff. Vil du prøve å snakke til ham i den tomme stolen, så ordene kan få et sted å komme frem her? Hvis du vil, se ham for deg der på en avstand du velger. Begynn med «Da du kalte det en grei start …» og si det du ikke fikk sagt."
    },
    "dp_marker-recognition-chairwork_case-marcus_11": {
      "text": "[Flatt, knyttede never] Jeg overlevde. Han gjorde ikke det. Det er et faktum. Og hver gang jeg sover greit, er det: Det fortjener du ikke. Du lot ham bli igjen der.",
      "suggestion": "Du gjør det å overleve, og selv det å sove, til en anklage mot deg selv. Vil du prøve to stoler for å høre anklagen og hvordan den treffer, uten å gå gjennom hendelsen? Vi kan stoppe når som helst. Hvis du vil, sitt her som stemmen som sier «det fortjener du ikke», se deg selv for deg overfor, og si bare den setningen til ham."
    },
    "dp_marker-recognition-chairwork_case-marcus_12": {
      "text": "[Stemmen brister, stirrer i gulvet] Der kom det. Steng av. Stram alt. Hvis jeg slipper den sorgen ut, får jeg den ikke inn igjen.",
      "suggestion": "Du strammer kroppen for å stoppe sorgen fra å komme ut. Vil du undersøke akkurat hvordan du stopper deg selv, med to stoler, uten å be deg selv slippe ut all sorgen? Hvis det kjennes håndterlig, sitt her som stemmen som sier «steng av», se deg selv for deg i den andre stolen, og gi ham den ene beskjeden. Vi kan ta pause med en gang om det trengs."
    },
    "dp_alliance-repair_case-sara_11": {
      "text": "[Såret, nølende] Du kalte det å «holde øye med ham». Da høres jeg nysgjerrig ut på en dårlig måte. Jeg prøvde å se om noe av det betydde noe for ham.",
      "suggestion": "«Holde øye med ham» bommet på det du lette etter, og du følte deg dømt. Unnskyld. Du ønsket et tegn på at det betydde noe for ham også. Er det nærmere det du prøvde å fortelle meg?"
    },
    "dp_alliance-repair_case-sara_12": {
      "text": "[Stille] Hver gang jeg sier at jeg hadde en fin dag, spør du hvor tristheten er. Det får meg til å føle at du ikke tror meg når jeg har det bra.",
      "suggestion": "Spørsmålene mine har fått det til å virke som de gode dagene dine ikke teller. Unnskyld; jeg har ikke gitt dem nok plass. Jeg vil høre om dagen du faktisk hadde. Hva ville hjelpe deg å kjenne at jeg tror deg?"
    },
    "dp_alliance-repair_case-michael_11": {
      "text": "[Rynker pannen] Du sa at jeg «forsvarte meg» da jeg rettet på deg. Du hadde fakta feil. Har jeg lov til å være uenig med deg her?",
      "suggestion": "Jeg fikk rettelsen din til å høres ut som et problem i stedet for å sjekke hva jeg hadde misforstått. Unnskyld. Ja, du kan være uenig med meg. La oss rette opp fakta først, og jeg vil høre hva svaret mitt gjorde med tilliten din til meg."
    },
    "dp_alliance-repair_case-michael_12": {
      "text": "[Skuffet] Du husket krangelen, men ikke at jeg ba sønnen min om unnskyldning. Det føles som du allerede har bestemt deg for hva slags far jeg er.",
      "suggestion": "Da jeg ikke fikk med unnskyldningen, følte du at jeg reduserte deg til krangelen. Jeg er lei meg for at jeg utelot den. Jeg vil forstå både det som gjorde vondt, og forsøket ditt på å reparere. Kan vi gå tilbake til det som skjedde da du ba om unnskyldning?"
    },
    "dp_alliance-repair_case-jason_11": {
      "text": "[Veldig stille] Du sa «bare si hva du trenger». Hvis det bare var det, hadde jeg ikke vært her. Jeg følte meg litt dum etterpå.",
      "suggestion": "«Bare» fikk noe som er veldig vanskelig for deg, til å høres lett ut, og du følte deg dum. Unnskyld. Jeg vil forstå hva som skjer når du prøver å si noe, fremfor å hoppe over det. Ville det være bedre å begynne med et konkret øyeblikk, eller trenger du først at jeg hører mer om det jeg sa?"
    },
    "dp_alliance-repair_case-jason_12": {
      "text": "[Ser ned] Jeg sa at det gikk fint fordi du så fornøyd ut med svaret mitt. Det gikk ikke fint. Nå vet jeg ikke hvordan jeg skal ta det tilbake uten å skuffe deg.",
      "suggestion": "Reaksjonen min gjorde det vanskeligere for deg å si at det ikke gikk fint. Unnskyld; du skal ikke måtte beskytte meg mot å bli skuffet over et svar. Du kan rette på meg, også nå. Hva ville gjøre det lettere å gå tilbake til hvordan du faktisk hadde det?"
    },
    "dp_alliance-repair_case-laura_11": {
      "text": "[Flatt, avventende] Du sier stadig at det ligger mye under. Kanskje det gjør det. Men det føles som det jeg forteller, ikke er det virkelige svaret du venter på.",
      "suggestion": "Jeg har fått det du forteller til å virke utilstrekkelig, som om jeg venter på et annet svar. Unnskyld. Jeg vil ta opplevelsen din slik du beskriver den, på alvor. Kan vi legge bort letingen etter noe under og undersøke hva du trenger at jeg forstår nå?"
    },
    "dp_alliance-repair_case-laura_12": {
      "text": "[Langsomt, unngår øyekontakt] Jeg sa at jeg ikke ville gå videre. Du stilte ett spørsmål til likevel. Jeg svarte, men jeg mistet litt tillit til deg.",
      "suggestion": "Du satte en grense, og jeg gikk over den. Unnskyld. At du svarte, betydde ikke at du hadde sagt ja til å fortsette, og jeg skulle ha respektert at du ville stoppe. Vi går ikke tilbake til det temaet nå. Hva ville hjelpe deg å kjenne mer kontroll over samtalen vår her?"
    },
    "dp_alliance-repair_case-carlos_11": {
      "text": "[Sint, holder igjen] Da du spurte om jeg følte meg «liten», hørte jeg at du kalte meg svak. Så fortsatte du å bruke det ordet. Jeg vil ikke sitte her og bli snakket ned til.",
      "suggestion": "Jeg fortsatte å bruke et ord som fikk deg til å føle deg nedvurdert. Unnskyld; jeg skulle ha sjekket hvordan det traff. Vi kan legge bort det ordet. Jeg vil forstå opplevelsen med ord som passer for deg. Hva trenger du at jeg hører om den?"
    },
    "dp_alliance-repair_case-carlos_12": {
      "text": "[Lavt, anspent] Du sa at du så hvor hardt jeg prøvde, og så gikk du videre. Datteren min er fortsatt redd for temperamentet mitt. Det føltes som du lot meg slippe fordi du ikke ville ha bråk.",
      "suggestion": "Da jeg gikk videre etter å ha sagt det, følte du at jeg unngikk noe alvorlig. Unnskyld. Frykten hennes trenger oppmerksomheten vår; å anerkjenne innsatsen din løser ikke det. Kan vi gå tilbake til hva som skjer med temperamentet ditt, og avtale hvordan vi skal holde tryggheten hennes sentral i arbeidet vårt?"
    },
    "dp_alliance-repair_case-nina_11": {
      "text": "[Unnskyldende, opprørt] Du kalte meg «en som naturlig tar vare på andre». Jeg vet du mente det godt, men det er det alle sier før de ber om noe. Jeg ble sliten bare av å høre det.",
      "suggestion": "Den formuleringen satte deg tilbake i rollen som alle støtter seg på, fremfor å se hvor sliten du er. Unnskyld. Jeg vil høre hvem du er utover det du gir andre. Kan vi begynne med hva du trengte at jeg skulle se i det øyeblikket?"
    },
    "dp_alliance-repair_case-nina_12": {
      "text": "[Lite smil, så tårer] Du sa «vi har fem minutter igjen», og jeg pakket straks alt pent sammen. Jeg gråt da jeg kom hjem. Jeg tror jeg prøvde å gjøre avslutningen enkel for deg.",
      "suggestion": "Påminnelsen min om tiden fikk deg til å føle at du måtte rydde bort følelsene dine for min skyld. Jeg er lei meg for at jeg ikke la merke til det. Vi må avslutte til avtalt tid, men uten å be deg late som du har det fint. Kan vi avtale en måte å nærme oss slutten på som gir plass til hvordan du faktisk har det?"
    },
    "dp_alliance-repair_case-aisha_11": {
      "text": "[Sint, såret] Du sa «dette har vi snakket om før». Jeg hørte: «Jeg er lei av deg.» Nå vil jeg ikke fortelle deg noe, og jeg vil at du skal ordne opp.",
      "suggestion": "Den setningen fikk deg til å føle at jeg var lei av deg, og du ble såret og sint på meg. Unnskyld at jeg sa det sånn. Jeg vil forstå dette øyeblikket fremfor å avvise det som noe vi har vært gjennom. Hva trenger du mest at jeg hører før vi prøver å fortsette?"
    },
    "dp_alliance-repair_case-aisha_12": {
      "text": "[På gråten, anklagende] Du sa at vi skulle snakke om ferien din i dag. Så måtte jeg ta det opp. Hvis jeg ikke passer på, glemmer du bare det som betyr noe for meg.",
      "suggestion": "Jeg sa at jeg skulle ta opp ferien, og så overlot jeg det til deg. Unnskyld. Det la ansvaret på deg og gjorde det vanskeligere å stole på at jeg husker det som betyr noe. La oss gi det tid nå, med tydelige avtaler for pausen. Hva har vært vanskeligst med at jeg ikke tok det opp?"
    },
    "dp_alliance-repair_case-david_11": {
      "text": "[Behersket, strengt] Du kalte forklaringen min «intellektualisering». Det er en bekvem måte å avvise alt jeg sier som ikke passer teorien din. Hvorfor skal jeg fortsette?",
      "suggestion": "Den merkelappen avviste forklaringen du prøvde å gi, og nå tviler du på om jeg vil ta deg på alvor. Unnskyld. Jeg vil høre forklaringen din uten å sette en merkelapp på den, hvis du vil. Hva trenger jeg å forstå for at det skal kjennes verdt å fortsette her?"
    },
    "dp_alliance-repair_case-david_12": {
      "text": "[Kjølig, urolig] Du sa at jeg berørte deg. Det høres personlig ut. Betaler jeg for å være en du føler deg nær? Jeg liker ikke å være usikker på vilkårene.",
      "suggestion": "Ordene mine gjorde den profesjonelle rammen uklar for deg og skapte uro om hva jeg ber deg om. Unnskyld. Du er ikke her for å dekke mine følelsesmessige behov; det er mitt ansvar å holde de grensene. Kan vi snakke om hva som ble uklart eller ubehagelig, så rammene for arbeidet vårt er tydelige for deg?"
    },
    "dp_alliance-repair_case-marcus_11": {
      "text": "[Flatt, sint] Jeg sa at jeg ikke hadde sovet etter sist. Du spurte om minnet var tydeligere. Du hørte meg ikke. Jeg gjør ikke det igjen.",
      "suggestion": "Du fortalte at arbeidet hadde kostet deg søvn, og jeg svarte som om flere detaljer var viktigere. Unnskyld. Vi gjentar ikke det arbeidet nå. Jeg vil forstå hvordan du ble påvirket, og bli enig med deg om hva som er håndterlig før vi bestemmer hvordan vi går videre."
    },
    "dp_alliance-repair_case-marcus_12": {
      "text": "[Avventende, lav stemme] Du sa «du kom i det minste hjem». Det sier alle. Jeg trodde jeg skulle slippe å høre det her.",
      "suggestion": "«I det minste» fikk tapet ditt til å høres ut som om det å overleve skulle oppheve det. Unnskyld. Du ventet at det var plass her til hvordan det faktisk har vært å komme hjem. Jeg vil høre hva ordene mine utelot, uten å be deg være takknemlig i stedet."
    }
  }
};

Object.assign(LANGUAGE_OVERRIDES.no, Object.fromEntries(Object.entries(EXTENSION_GUIDES).map(([id, guide]) => [id, guide.no])));
Object.assign(STATEMENT_TRANSLATIONS.no, EXTENSION_TRANSLATIONS);
Object.assign(STATEMENT_TRANSLATIONS.no, ARNE_TRANSLATIONS);
for (const skill of ARNE_SKILLS) {
  LANGUAGE_OVERRIDES.no[skill].cases ??= {};
  LANGUAGE_OVERRIDES.no[skill].cases['case-arne'] = ARNE_CASE_NO;
}
Object.assign(STATEMENT_TRANSLATIONS.no, MIA_TRANSLATIONS);
for (const skill of MIA_SKILLS) {
 LANGUAGE_OVERRIDES.no[skill].cases ??= {};
 LANGUAGE_OVERRIDES.no[skill].cases['case-mia'] = MIA_CASE_NO;
}
Object.assign(STATEMENT_TRANSLATIONS.no, NORA_TRANSLATIONS);
for (const skill of NORA_SKILLS) {
 LANGUAGE_OVERRIDES.no[skill].cases ??= {};
 LANGUAGE_OVERRIDES.no[skill].cases['case-nora'] = NORA_CASE_NO;
}

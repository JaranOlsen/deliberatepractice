"use strict";

import {
  SKILL_ORDER,
  CASE_ORDER,
  LANGUAGE_ORDER,
  BASE_PRACTICE,
  CASE_FORMULATION_TRANSLATIONS,
  LANGUAGE_METADATA,
  LANGUAGE_UI,
  LANGUAGE_OVERRIDES,
  STATEMENT_TRANSLATIONS,
  STATEMENT_TRANSLATION_REVISION,
  CONTENT_REVISION,
  CONTENT_UPDATED_AT,
  GLOSSARY
} from "./practiceData.js";
import {
  submitFeedback,
  redeemAccessCode,
  isSupabaseReady,
  isAccessExpired,
  logAccessCodeAttempt,
  getAuthSession,
  onAuthStateChange,
  signInWithMagicLink,
  signOut,
  ensureUserProfile,
  updateUserProfile,
  listPracticeTargets,
  createPairingInvite,
  acceptPairingInvite,
  revokePracticePartnership,
  submitPracticeRating,
  listSelfPracticeRatings
} from "./backend.js";

const sections = {
  language: document.getElementById("language-selection"),
  skill: document.getElementById("skill-selection"),
  case: document.getElementById("case-selection"),
  skillGuide: document.getElementById("skill-guide"),
  practice: document.getElementById("practice-area")
};

const APP_VERSION = typeof __APP_VERSION__ === "string" ? __APP_VERSION__ : "0.0.0";
const BUILD_NUMBER = typeof __BUILD_NUMBER__ === "string" ? __BUILD_NUMBER__ : "";
const BUILD_REF = typeof __BUILD_REF__ === "string" ? __BUILD_REF__ : "";

const elements = {
  appTitle: document.getElementById("app-title"),
  appTagline: document.getElementById("app-tagline"),
  accountButton: document.getElementById("account-button"),
  activeTargetButton: document.getElementById("active-target-button"),
  languagePanelTitle: document.getElementById("language-panel-title"),
  languagePanelDescription: document.getElementById("language-panel-description"),
  resumeCard: document.getElementById("resume-card"),
  resumeTitle: document.getElementById("resume-title"),
  resumeDetails: document.getElementById("resume-details"),
  resumeButton: document.getElementById("resume-button"),
  resumeClear: document.getElementById("resume-clear"),
  languageList: document.getElementById("language-list"),
  skillPanelTitle: document.getElementById("skill-panel-title"),
  skillPanelDescription: document.getElementById("skill-panel-description"),
  skillList: document.getElementById("skill-list"),
  casePanelTitle: document.getElementById("case-panel-title"),
  casePanelDescription: document.getElementById("case-panel-description"),
  caseList: document.getElementById("case-list"),
  caseSkillSummaryCard: document.getElementById("case-skill-summary-card"),
  caseSkillSummaryEyebrow: document.getElementById("case-skill-summary-eyebrow"),
  caseSkillSummaryName: document.getElementById("case-skill-summary-name"),
  caseSkillSummaryText: document.getElementById("case-skill-summary-text"),
  caseSkillSummaryPracticeFocusLabel: document.getElementById("case-skill-summary-practice-focus-label"),
  caseSkillSummaryPracticeFocus: document.getElementById("case-skill-summary-practice-focus"),
  caseSkillSummaryCommonMissLabel: document.getElementById("case-skill-summary-common-miss-label"),
  caseSkillSummaryCommonMiss: document.getElementById("case-skill-summary-common-miss"),
  openSkillGuideButton: document.getElementById("open-skill-guide"),
  skillGuidePanelTitle: document.getElementById("skill-guide-panel-title"),
  skillGuideDescription: document.getElementById("skill-guide-description"),
  skillGuideBackButton: document.getElementById("back-to-cases-from-guide"),
  practiceSkill: document.getElementById("practice-skill"),
  caseName: document.getElementById("case-name"),
  caseTeaser: document.getElementById("case-teaser"),
  caseSchema: document.getElementById("case-schema"),
  caseCorePainItem: document.getElementById("case-core-pain-item"),
  caseCorePain: document.getElementById("case-core-pain"),
  caseStyle: document.getElementById("case-style"),
  caseSkillContext: document.getElementById("case-skill-context"),
  caseSkillName: document.getElementById("case-skill-name"),
  caseSkillMarkerLabel: document.getElementById("case-skill-marker-label"),
  caseSkillMarker: document.getElementById("case-skill-marker"),
  caseSkillSummaryLabel: document.getElementById("case-skill-summary-label"),
  caseSkillSummary: document.getElementById("case-skill-summary"),
  caseSkillAimLabel: document.getElementById("case-skill-aim-label"),
  caseSkillAim: document.getElementById("case-skill-aim"),
  caseSkillPracticeFocusLabel: document.getElementById("case-skill-practice-focus-label"),
  caseSkillPracticeFocus: document.getElementById("case-skill-practice-focus"),
  caseSkillCommonMissLabel: document.getElementById("case-skill-common-miss-label"),
  caseSkillCommonMiss: document.getElementById("case-skill-common-miss"),
  caseSkillToggle: document.getElementById("case-skill-toggle"),
  caseSkillBody: document.getElementById("case-skill-body"),
  glossaryPanel: document.getElementById("glossary-panel"),
  glossaryHint: document.getElementById("glossary-hint"),
  glossaryCard: document.getElementById("glossary-card"),
  glossaryTitle: document.getElementById("glossary-title"),
  glossaryTerm: document.getElementById("glossary-term"),
  glossaryDefinition: document.getElementById("glossary-definition"),
  glossaryClose: document.getElementById("glossary-close"),
  caseBriefHeading: document.getElementById("case-brief-heading"),
  caseVoiceHeading: document.getElementById("case-voice-heading"),
  caseVoice: document.getElementById("case-voice"),
  statementCaseName: document.getElementById("statement-case-name"),
  caseBriefScreen: document.getElementById("case-brief-screen"),
  statementWorkspace: document.getElementById("statement-workspace"),
  startPracticeButton: document.getElementById("start-practice"),
  viewCaseBriefButton: document.getElementById("view-case-brief"),
  caseSchemaLabel: document.getElementById("case-schema-label"),
  caseCorePainLabel: document.getElementById("case-core-pain-label"),
  caseStyleLabel: document.getElementById("case-style-label"),
  casePracticeEdgeLabel: document.getElementById("case-practice-edge-label"),
  casePracticeEdge: document.getElementById("case-practice-edge"),
  statementText: document.getElementById("statement-text"),
  statementCounter: document.getElementById("statement-counter"),
  shuffleButton: document.getElementById("shuffle-order"),
  nextButton: document.getElementById("next-statement"),
  practiceControls: document.querySelector(".practice-controls"),
  languageBackButton: document.getElementById("back-to-language"),
  skillsBackButton: document.getElementById("back-to-skills"),
  casesBackButton: document.getElementById("back-to-cases"),
  footerNote: document.getElementById("footer-note"),
  appVersion: document.getElementById("app-version"),
  statementPanel: document.querySelector(".statement-panel"),
  suggestionPanel: document.querySelector(".suggestion-panel"),
  suggestionToggle: document.getElementById("toggle-suggestion"),
  suggestionText: document.getElementById("suggestion-text"),
  ratingOverlay: document.getElementById("rating-overlay"),
  ratingPanel: document.getElementById("rating-panel"),
  ratingEyebrow: document.getElementById("rating-eyebrow"),
  ratingTitle: document.getElementById("rating-title"),
  ratingDescription: document.getElementById("rating-description"),
  ratingSummary: document.getElementById("rating-summary"),
  ratingTarget: document.getElementById("rating-target"),
  ratingScoreOptions: document.getElementById("rating-score-options"),
  ratingScoreGuide: document.getElementById("rating-score-guide"),
  ratingSubmit: document.getElementById("rating-submit"),
  ratingSkip: document.getElementById("rating-skip"),
  ratingStatus: document.getElementById("rating-status"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackForm: document.getElementById("feedback-form"),
  feedbackReason: document.getElementById("feedback-reason"),
  feedbackReasonLabel: document.getElementById("feedback-reason-label"),
  feedbackDetails: document.getElementById("feedback-details"),
  feedbackDetailsLabel: document.getElementById("feedback-details-label"),
  feedbackStatus: document.getElementById("feedback-status"),
  feedbackToggle: document.getElementById("feedback-toggle"),
  feedbackSubmit: document.getElementById("feedback-submit"),
  lockedBanner: document.getElementById("locked-banner"),
  paywallOverlay: document.getElementById("paywall-overlay"),
  paywallMessage: document.getElementById("paywall-message"),
  paywallHeading: document.getElementById("paywall-heading"),
  unlockForm: document.getElementById("unlock-form"),
  unlockCodeInput: document.getElementById("unlock-code"),
  unlockStatus: document.getElementById("unlock-status"),
  unlockSubmit: document.getElementById("unlock-submit"),
  closePaywallButton: document.getElementById("close-paywall"),
  accountOverlay: document.getElementById("account-overlay"),
  closeAccountButton: document.getElementById("close-account"),
  accountEyebrow: document.getElementById("account-eyebrow"),
  accountHeading: document.getElementById("account-heading"),
  accessSection: document.getElementById("access-section"),
  accessTitle: document.getElementById("access-title"),
  accessStatus: document.getElementById("access-status"),
  accountUnlockForm: document.getElementById("account-unlock-form"),
  accountUnlockLabel: document.getElementById("account-unlock-label"),
  accountUnlockCode: document.getElementById("account-unlock-code"),
  accountUnlockSubmit: document.getElementById("account-unlock-submit"),
  accountUnlockStatus: document.getElementById("account-unlock-status"),
  authSignedOut: document.getElementById("auth-signed-out"),
  authSignedIn: document.getElementById("auth-signed-in"),
  authIntro: document.getElementById("auth-intro"),
  authSigninForm: document.getElementById("auth-signin-form"),
  authEmail: document.getElementById("auth-email"),
  authEmailLabel: document.getElementById("auth-email-label"),
  authSubmit: document.getElementById("auth-submit"),
  authStatus: document.getElementById("auth-status"),
  accountEmail: document.getElementById("account-email"),
  profileLabel: document.getElementById("profile-label"),
  profileForm: document.getElementById("profile-form"),
  profileDisplayName: document.getElementById("profile-display-name"),
  profileDisplayLabel: document.getElementById("profile-display-label"),
  profileSubmit: document.getElementById("profile-submit"),
  activeTargetLabel: document.getElementById("active-target-label"),
  activeTargetSelect: document.getElementById("active-target-select"),
  activeTargetHint: document.getElementById("active-target-hint"),
  selfChartTitle: document.getElementById("self-chart-title"),
  selfChartDescription: document.getElementById("self-chart-description"),
  selfChartRefresh: document.getElementById("self-chart-refresh"),
  selfChartStatus: document.getElementById("self-chart-status"),
  selfChart: document.getElementById("self-chart"),
  pairingCreateTitle: document.getElementById("pairing-create-title"),
  pairingCreateDescription: document.getElementById("pairing-create-description"),
  pairingCreateButton: document.getElementById("pairing-create-button"),
  pairingCodeCard: document.getElementById("pairing-code-card"),
  pairingCode: document.getElementById("pairing-code"),
  pairingExpiry: document.getElementById("pairing-expiry"),
  pairingCopy: document.getElementById("pairing-copy"),
  pairingShare: document.getElementById("pairing-share"),
  pairingAcceptForm: document.getElementById("pairing-accept-form"),
  pairingAcceptLabel: document.getElementById("pairing-accept-label"),
  pairingCodeInput: document.getElementById("pairing-code-input"),
  pairingAcceptSubmit: document.getElementById("pairing-accept-submit"),
  partnersTitle: document.getElementById("partners-title"),
  partnerList: document.getElementById("partner-list"),
  authSignout: document.getElementById("auth-signout")
};

const state = {
  languageId: null,
  skillId: null,
  caseId: null,
  order: [],
  orderShuffled: false,
  index: 0,
  suggestionVisible: false,
  view: "brief",
  accessLevel: "free",
  accessExpiresAt: null,
  currentStatement: null,
  unlocking: false,
  feedbackCollapsed: true,
  skillContextExpanded: false,
  activeGlossaryTermId: null,
  completedStatementIds: new Set(),
  resumeSession: null,
  ratingScore: null,
  ratingSaving: false,
  ratingVisible: false,
  ratingCompletedStatementIds: [],
  ratingSaved: false,
  authConfigured: false,
  authSession: null,
  authUser: null,
  authProfile: null,
  authTargets: [],
  activeTargetId: null,
  authLoading: false,
  selfRatings: [],
  selfRatingsLoading: false,
  selfRatingsLoaded: false,
  selfRatingsError: "",
  latestPairingCode: null
};

const SHUFFLE_ICON_SRC = `${import.meta.env.BASE_URL}assets/icons/shuffle.svg`;

const languageButtonMap = new Map();
const skillButtonMap = new Map();
const caseButtonMap = new Map();
let activeGlossaryChip = null;

const ACCESS_STORAGE_KEY = "dp_access_level";
const PRACTICE_SESSION_STORAGE_KEY = "dp_practice_session_v1";
const ACTIVE_TARGET_STORAGE_KEY = "dp_active_therapist_target_v1";
const PRACTICE_SESSION_VERSION = 1;

const DEFAULT_VISUAL = {
  accent: "#2f6f73",
  icon: "target"
};

const SKILL_VISUALS = {
  "therapist-self-awareness": {
    accent: "#2f6f73",
    icon: "target"
  },
  "empathic-understanding": {
    accent: "#2f6f9f",
    icon: "dialogue"
  },
  "empathic-affirmation-validation": {
    accent: "#3f7f4d",
    icon: "check"
  },
  "exploratory-questions": {
    accent: "#4f63a8",
    icon: "search"
  },
  "providing-treatment-rationale": {
    accent: "#8a7630",
    icon: "map"
  },
  "empathic-explorations": {
    accent: "#6f56a6",
    icon: "path"
  },
  "empathic-evocations": {
    accent: "#9a594a",
    icon: "spark"
  },
  "empathic-conjectures": {
    accent: "#7a4d8f",
    icon: "thought"
  },
  "staying-in-contact-intense-affect": {
    accent: "#9a6b32",
    icon: "anchor"
  },
  "self-disclosure": {
    accent: "#9b4f6f",
    icon: "heartBubble"
  },
  "marker-recognition-chairwork": {
    accent: "#4e61a6",
    icon: "chairs"
  },
  "alliance-repair": {
    accent: "#4e803e",
    icon: "link"
  },
  "empathic-refocusing": {
    accent: "#5e6877",
    icon: "return"
  }
};

const BASE_VISUAL_PROFILE = {
  accentMixColor: "#ffffff",
  accentMixRatio: 0,
  softWhiteRatio: 0.78,
  faintWhiteRatio: 0.94,
  strongDarkRatio: 0.26
};

const DIFFICULTY_VISUAL_PROFILES = {
  easy: {
    accentMixColor: "#ffffff",
    accentMixRatio: 0.28,
    softWhiteRatio: 0.85,
    faintWhiteRatio: 0.965,
    strongDarkRatio: 0.16
  },
  moderate: {
    accentMixColor: "#ffffff",
    accentMixRatio: 0.04,
    softWhiteRatio: 0.72,
    faintWhiteRatio: 0.91,
    strongDarkRatio: 0.3
  },
  hard: {
    accentMixColor: "#111827",
    accentMixRatio: 0.24,
    softWhiteRatio: 0.56,
    faintWhiteRatio: 0.84,
    strongDarkRatio: 0.46
  }
};

function normalizeHexColor(hex, fallback = DEFAULT_VISUAL.accent) {
  const value = typeof hex === "string" ? hex.trim() : "";
  if (/^#[0-9a-f]{6}$/i.test(value)) {
    return value.toLowerCase();
  }
  return fallback;
}

function hexToRgb(hex) {
  const value = normalizeHexColor(hex).slice(1);
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16)
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b]
    .map((channel) => Math.round(Math.min(255, Math.max(0, channel))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixHexColors(baseHex, mixHex, ratio) {
  const base = hexToRgb(baseHex);
  const mix = hexToRgb(mixHex);
  const amount = Math.min(1, Math.max(0, Number.isFinite(ratio) ? ratio : 0));
  return rgbToHex({
    r: base.r + (mix.r - base.r) * amount,
    g: base.g + (mix.g - base.g) * amount,
    b: base.b + (mix.b - base.b) * amount
  });
}

function buildVisual(baseVisual, profile = BASE_VISUAL_PROFILE) {
  const source = baseVisual ?? DEFAULT_VISUAL;
  const accent = mixHexColors(
    source.accent ?? DEFAULT_VISUAL.accent,
    profile.accentMixColor ?? "#ffffff",
    profile.accentMixRatio ?? 0
  );
  return {
    accent,
    accentSoft: mixHexColors(accent, "#ffffff", profile.softWhiteRatio ?? 0.82),
    accentFaint: mixHexColors(accent, "#ffffff", profile.faintWhiteRatio ?? 0.96),
    accentStrong: mixHexColors(accent, "#111827", profile.strongDarkRatio ?? 0.24),
    icon: source.icon ?? DEFAULT_VISUAL.icon
  };
}

function getSkillVisual(skillId) {
  return buildVisual(SKILL_VISUALS[skillId] ?? DEFAULT_VISUAL);
}

function getSkillFocusVisual(skillId) {
  const source = SKILL_VISUALS[skillId] ?? DEFAULT_VISUAL;
  return buildVisual(
    {
      ...source,
      accent: mixHexColors(source.accent ?? DEFAULT_VISUAL.accent, "#5b4ac8", 0.24)
    },
    {
      accentMixColor: "#ffffff",
      accentMixRatio: 0.03,
      softWhiteRatio: 0.84,
      faintWhiteRatio: 0.955,
      strongDarkRatio: 0.3
    }
  );
}

function getCaseVisual(skillId, difficulty) {
  const baseVisual = SKILL_VISUALS[skillId] ?? DEFAULT_VISUAL;
  const profile = DIFFICULTY_VISUAL_PROFILES[difficulty] ?? BASE_VISUAL_PROFILE;
  return buildVisual(baseVisual, profile);
}

function getSkillIcon(iconName) {
  const icons = {
    target: `
      <circle cx="12" cy="12" r="7"></circle>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 3v2"></path>
      <path d="M12 19v2"></path>
      <path d="M3 12h2"></path>
      <path d="M19 12h2"></path>
    `,
    dialogue: `
      <path d="M6.5 15.5h-.7a2.8 2.8 0 0 1-2.8-2.8V7.8A2.8 2.8 0 0 1 5.8 5h7.4A2.8 2.8 0 0 1 16 7.8v3.9a2.8 2.8 0 0 1-2.8 2.8H10l-3.5 3v-2z"></path>
      <path d="M14.5 11h3.7a2.8 2.8 0 0 1 2.8 2.8v2.4a2.8 2.8 0 0 1-2.8 2.8h-.7v2l-2.7-2H12"></path>
    `,
    check: `
      <circle cx="12" cy="12" r="8"></circle>
      <path d="m8.5 12 2.4 2.4 4.8-5"></path>
    `,
    search: `
      <circle cx="10.5" cy="10.5" r="5.5"></circle>
      <path d="m15 15 4.5 4.5"></path>
      <path d="M8.8 9c.3-.8 1-1.3 2-1.3 1.1 0 1.9.7 1.9 1.6 0 1.4-1.9 1.4-1.9 2.6v.2"></path>
      <path d="M10.8 14.2h.01"></path>
    `,
    map: `
      <path d="M5 6.5 10 4l5 2.5 4-2v13l-4 2-5-2.5-5 2.5v-13z"></path>
      <path d="M10 4v13"></path>
      <path d="M15 6.5v13"></path>
    `,
    path: `
      <circle cx="6" cy="17" r="2"></circle>
      <circle cx="18" cy="7" r="2"></circle>
      <path d="M8 17c4 0 2-10 8-10"></path>
    `,
    spark: `
      <path d="M12 3.5 13.7 9l5.3 1.7-5.3 1.7L12 18l-1.7-5.6L5 10.7 10.3 9 12 3.5z"></path>
      <path d="M18 16.5v3"></path>
      <path d="M16.5 18h3"></path>
    `,
    thought: `
      <path d="M7 15.5a4.2 4.2 0 0 1-.9-8.3A5.3 5.3 0 0 1 16 6.6a4.4 4.4 0 0 1 1 8.7h-4.2L9 18.5v-3H7z"></path>
      <path d="M12 12.5v-.4c0-1.5 2-1.4 2-3 0-1-.8-1.7-2-1.7-1 0-1.7.5-2.1 1.3"></path>
      <path d="M12 15h.01"></path>
    `,
    anchor: `
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v11"></path>
      <path d="M7 11h10"></path>
      <path d="M6 16c1.3 2 3.3 3 6 3s4.7-1 6-3"></path>
      <path d="m5 16 1-3"></path>
      <path d="m19 16-1-3"></path>
    `,
    heartBubble: `
      <path d="M5.8 16.2h-.3A2.5 2.5 0 0 1 3 13.7V7.8A2.8 2.8 0 0 1 5.8 5h12.4A2.8 2.8 0 0 1 21 7.8v5.9a2.5 2.5 0 0 1-2.5 2.5H13l-4 3v-3H5.8z"></path>
      <circle cx="12" cy="9.2" r="1.3"></circle>
      <path d="M9.5 13.1c.5-1.1 1.4-1.7 2.5-1.7s2 .6 2.5 1.7"></path>
    `,
    chairs: `
      <path d="M7 7h4v7H6V8a1 1 0 0 1 1-1z"></path>
      <path d="M8 14v4"></path>
      <path d="M16 7h1a1 1 0 0 1 1 1v6h-5V7h3z"></path>
      <path d="M16 14v4"></path>
      <path d="M10.8 11h2.4"></path>
    `,
    link: `
      <path d="M9.5 14.5 8 16a3.2 3.2 0 0 1-4.5-4.5l2.4-2.4a3.2 3.2 0 0 1 4.5 0"></path>
      <path d="M14.5 9.5 16 8a3.2 3.2 0 0 1 4.5 4.5l-2.4 2.4a3.2 3.2 0 0 1-4.5 0"></path>
      <path d="m9 15 6-6"></path>
    `,
    return: `
      <path d="M8 7 4 11l4 4"></path>
      <path d="M5 11h9a5 5 0 0 1 0 10h-2"></path>
      <circle cx="16" cy="7" r="2.2"></circle>
    `
  };
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      ${icons[iconName] ?? icons.target}
    </svg>
  `;
}

function applyVisualProperties(element, visual) {
  if (!element || !visual) return;
  if (visual.accent) {
    element.style.setProperty("--card-accent", visual.accent);
  }
  if (visual.accentSoft) {
    element.style.setProperty("--card-accent-soft", visual.accentSoft);
  }
  if (visual.accentFaint) {
    element.style.setProperty("--card-accent-faint", visual.accentFaint);
  }
  if (visual.accentStrong) {
    element.style.setProperty("--card-accent-strong", visual.accentStrong);
  }
}

function normalizeAccessLevel(level) {
  return level === "pro" || level === "all" ? level : "free";
}

function loadAccessState() {
  try {
    const stored = localStorage.getItem(ACCESS_STORAGE_KEY);
    if (!stored) {
      return { accessLevel: "free", accessExpiresAt: null };
    }
    if (stored.trim().startsWith("{")) {
      const parsed = JSON.parse(stored);
      const accessLevel = normalizeAccessLevel(parsed.accessLevel);
      const accessExpiresAt = typeof parsed.expiresAt === "string" ? parsed.expiresAt : null;
      if (accessLevel !== "free" && isAccessExpired(accessExpiresAt)) {
        localStorage.removeItem(ACCESS_STORAGE_KEY);
        return { accessLevel: "free", accessExpiresAt: null };
      }
      return { accessLevel, accessExpiresAt };
    }
    const accessLevel = normalizeAccessLevel(stored);
    if (accessLevel !== "free") {
      return { accessLevel, accessExpiresAt: null };
    }
  } catch (err) {
    // ignore storage errors
  }
  return { accessLevel: "free", accessExpiresAt: null };
}

function saveAccessLevel(level, expiresAt = null) {
  state.accessLevel = normalizeAccessLevel(level);
  state.accessExpiresAt = typeof expiresAt === "string" ? expiresAt : null;
  try {
    localStorage.setItem(
      ACCESS_STORAGE_KEY,
      JSON.stringify({
        accessLevel: state.accessLevel,
        expiresAt: state.accessExpiresAt
      })
    );
  } catch (err) {
    // ignore storage errors
  }
  updateLockedBanner();
  renderAccessUI();
}

function hasProAccess() {
  return (state.accessLevel === "pro" || state.accessLevel === "all") && !isAccessExpired(state.accessExpiresAt);
}

function readJsonStorage(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (err) {
    return null;
  }
}

function writeJsonStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // ignore storage errors
  }
}

function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    // ignore storage errors
  }
}

function normalizeSavedSession(raw) {
  if (!raw || raw.version !== PRACTICE_SESSION_VERSION) return null;
  const languageId = LANGUAGE_METADATA[raw.languageId] ? raw.languageId : null;
  if (!languageId) return null;
  return {
    version: PRACTICE_SESSION_VERSION,
    languageId,
    skillId: typeof raw.skillId === "string" ? raw.skillId : null,
    caseId: typeof raw.caseId === "string" ? raw.caseId : null,
    orderShuffled: raw.orderShuffled === true,
    orderIds: Array.isArray(raw.orderIds) ? raw.orderIds.filter((id) => typeof id === "string") : [],
    index: Number.isInteger(raw.index) && raw.index >= 0 ? raw.index : 0,
    view: raw.view === "statements" ? "statements" : "brief",
    completedStatementIds: Array.isArray(raw.completedStatementIds)
      ? raw.completedStatementIds.filter((id) => typeof id === "string")
      : [],
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null
  };
}

function loadPracticeSession() {
  return normalizeSavedSession(readJsonStorage(PRACTICE_SESSION_STORAGE_KEY));
}

function createPracticeSessionSnapshot() {
  if (!state.languageId) return null;
  return {
    version: PRACTICE_SESSION_VERSION,
    languageId: state.languageId,
    skillId: state.skillId,
    caseId: state.caseId,
    orderShuffled: state.orderShuffled === true,
    orderIds: Array.isArray(state.order) ? state.order.map((entry) => entry?.id).filter(Boolean) : [],
    index: Number.isInteger(state.index) ? state.index : 0,
    view: state.view === "statements" ? "statements" : "brief",
    completedStatementIds: Array.from(state.completedStatementIds ?? []),
    updatedAt: new Date().toISOString()
  };
}

function savePracticeSession() {
  const snapshot = createPracticeSessionSnapshot();
  if (!snapshot) return;
  writeJsonStorage(PRACTICE_SESSION_STORAGE_KEY, snapshot);
  state.resumeSession = snapshot;
  renderResumeCard();
}

function clearPracticeSession() {
  removeStorageItem(PRACTICE_SESSION_STORAGE_KEY);
  state.resumeSession = null;
  renderResumeCard();
}

function getSessionResumeDetails(session) {
  if (!session?.skillId || !session.caseId) return null;
  const skill = localizeSkill(session.languageId, session.skillId);
  const caseData = skill?.cases.find((caseItem) => caseItem.id === session.caseId);
  if (!skill || !caseData) return null;
  const total = caseData.statements?.length ?? 0;
  const current = Math.min(Math.max(session.index + 1, 1), Math.max(total, 1));
  const completedCount = new Set(session.completedStatementIds ?? []).size;
  return {
    skillName: skill.name,
    caseLabel: caseData.label,
    counter: total > 0 ? formatCounter(current, total) : "",
    completedCount
  };
}

function renderResumeCard() {
  if (!elements.resumeCard || !elements.resumeDetails) return;
  const session = state.resumeSession;
  const details = getSessionResumeDetails(session);
  const visible = Boolean(details);
  elements.resumeCard.hidden = !visible;
  elements.resumeCard.classList.toggle("is-hidden", !visible);
  if (!visible) {
    elements.resumeDetails.textContent = "";
    return;
  }
  const strings = getUIStrings(session.languageId);
  if (elements.resumeTitle) {
    elements.resumeTitle.textContent = strings.resumeTitle ?? "Resume practice";
  }
  if (elements.resumeButton) {
    elements.resumeButton.textContent = strings.resumeButton ?? "Resume";
  }
  if (elements.resumeClear) {
    elements.resumeClear.textContent = strings.resumeClear ?? "Clear";
  }
  const completed = details.completedCount > 0
    ? ` · ${details.completedCount} ${strings.completedShort ?? "done"}`
    : "";
  elements.resumeDetails.textContent =
    `${details.skillName} · ${details.caseLabel} · ${details.counter}${completed}`;
}

function restoreOrderFromSession(session, caseData) {
  const statements = caseData?.statements ?? [];
  if (!statements.length) return [];
  if (!session?.orderShuffled) {
    return [...statements];
  }
  const byId = new Map(statements.map((entry) => [entry.id, entry]));
  const restored = (session.orderIds ?? []).map((id) => byId.get(id)).filter(Boolean);
  if (restored.length === statements.length) {
    return restored;
  }
  return [...statements];
}

function applyPracticeSession(session) {
  const normalized = normalizeSavedSession(session);
  if (!normalized?.skillId || !normalized.caseId) return;
  const skill = localizeSkill(normalized.languageId, normalized.skillId);
  const caseData = skill?.cases.find((caseItem) => caseItem.id === normalized.caseId);
  if (!skill || !caseData) {
    clearPracticeSession();
    return;
  }
  state.languageId = normalized.languageId;
  state.skillId = normalized.skillId;
  state.caseId = normalized.caseId;
  state.orderShuffled = normalized.orderShuffled === true;
  state.order = restoreOrderFromSession(normalized, caseData);
  state.index = Math.min(normalized.index, Math.max(state.order.length - 1, 0));
  state.view = normalized.view;
  state.currentStatement = null;
  state.completedStatementIds = new Set(normalized.completedStatementIds ?? []);
  state.ratingScore = null;
  state.ratingVisible = false;
  state.ratingCompletedStatementIds = [];
  state.ratingSaved = false;

  applyLanguageStrings(normalized.languageId);
  highlightLanguageSelection(normalized.languageId);
  renderSkillOptions();
  highlightSkillSelection(normalized.skillId);
  renderCaseOptions();
  highlightCaseSelection(normalized.caseId);
  hydratePracticeView();
  showSection("practice");
}

function markCurrentStatementCompleted() {
  const statementId = state.currentStatement?.id;
  if (!statementId) return;
  state.completedStatementIds.add(statementId);
}

function renderAppVersion() {
  if (!elements.appVersion) return;
  const buildLabel = BUILD_NUMBER && BUILD_NUMBER !== "local" ? `build ${BUILD_NUMBER}` : "local build";
  const refLabel = BUILD_REF || "local";
  elements.appVersion.textContent = `v${APP_VERSION} · ${refLabel} · content updated ${CONTENT_UPDATED_AT}`;
  elements.appVersion.title = `${buildLabel}; app package v${APP_VERSION}; commit ${refLabel}; content revision ${CONTENT_REVISION}; content updated ${CONTENT_UPDATED_AT}`;
}

function getActiveTargetStorageKey(userId) {
  return `${ACTIVE_TARGET_STORAGE_KEY}:${userId}`;
}

function getTargetUserId(target) {
  return target?.target_user_id ?? target?.targetUserId ?? null;
}

function getTargetKind(target) {
  return target?.target_kind ?? target?.targetKind ?? "self";
}

function getTargetPartnershipId(target) {
  return target?.partnership_id ?? target?.partnershipId ?? null;
}

function getTargetDisplayName(target) {
  return target?.display_name ?? target?.displayName ?? "";
}

function normalizePracticeTarget(target) {
  const targetUserId = getTargetUserId(target);
  if (!targetUserId) return null;
  return {
    target_user_id: targetUserId,
    display_name: getTargetDisplayName(target),
    target_kind: getTargetKind(target),
    partnership_id: getTargetPartnershipId(target)
  };
}

function getSelfTarget() {
  return state.authTargets.find((target) => getTargetKind(target) === "self") ?? null;
}

function getActiveTarget() {
  if (!state.authUser) return null;
  const active = state.authTargets.find((target) => getTargetUserId(target) === state.activeTargetId);
  return active ?? getSelfTarget();
}

function saveActiveTargetId(targetId) {
  if (!state.authUser?.id || !targetId) return;
  writeJsonStorage(getActiveTargetStorageKey(state.authUser.id), { targetId });
}

function loadActiveTargetId(userId) {
  const stored = readJsonStorage(getActiveTargetStorageKey(userId));
  return typeof stored?.targetId === "string" ? stored.targetId : null;
}

function getSignedInEmail() {
  return state.authUser?.email ?? "";
}

function getSignedInLabel() {
  return state.authProfile?.display_name || getSignedInEmail() || "Account";
}

function getActiveTargetLabel() {
  const target = getActiveTarget();
  if (!target) return "";
  const strings = getUIStrings();
  const name = getTargetDisplayName(target) || strings.meLabel || "Me";
  return `${strings.savingForPrefix ?? "Saving:"} ${name}`;
}

function getHeaderActiveTargetLabel() {
  const target = getActiveTarget();
  if (!target) return "";
  const strings = getUIStrings();
  const name = getTargetDisplayName(target) || strings.meLabel || "Me";
  return `${strings.headerSavingForPrefix ?? "For:"} ${name}`;
}

function getHeaderAccountLabel() {
  if (document.body.dataset.section !== "practice") {
    const strings = getUIStrings();
    return strings.accountButtonSignedIn ?? "Account";
  }
  return getHeaderActiveTargetLabel() || getSignedInLabel();
}

function formatAccessStatus() {
  const strings = getUIStrings();
  if (!hasProAccess()) {
    return strings.accessStatusFree ?? "Free access";
  }
  if (state.accessExpiresAt) {
    const expires = new Date(state.accessExpiresAt);
    if (!Number.isNaN(expires.getTime())) {
      const formatted = expires.toLocaleDateString(document.documentElement.lang || undefined, {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
      return (strings.accessStatusExpires ?? "Full library unlocked until {date}")
        .replace("{date}", formatted);
    }
  }
  return strings.accessStatusUnlocked ?? "Full library unlocked";
}

function renderAccessUI() {
  const strings = getUIStrings();
  const configured = isSupabaseReady();
  if (elements.accessSection) {
    const parent = elements.accessSection.parentElement;
    if (parent && hasProAccess() && elements.authStatus) {
      parent.insertBefore(elements.accessSection, elements.authStatus);
    } else if (parent && elements.authSignedOut) {
      parent.insertBefore(elements.accessSection, elements.authSignedOut);
    }
  }
  if (elements.accessTitle) {
    elements.accessTitle.textContent = strings.accessTitle ?? "Library access";
  }
  if (elements.accessStatus) {
    elements.accessStatus.textContent = formatAccessStatus();
  }
  if (elements.accountUnlockLabel) {
    elements.accountUnlockLabel.textContent = strings.unlockCodeLabel ?? "Access code";
  }
  if (elements.accountUnlockCode) {
    elements.accountUnlockCode.placeholder = strings.unlockPlaceholder ?? "Enter code";
    elements.accountUnlockCode.disabled = !configured || state.unlocking;
  }
  if (elements.accountUnlockSubmit) {
    elements.accountUnlockSubmit.textContent = strings.unlockSubmit ?? "Unlock";
    elements.accountUnlockSubmit.disabled = !configured || state.unlocking;
  }
}

function formatChartTemplate(template, values = {}) {
  return String(template ?? "").replace(/\{(\w+)\}/g, (_match, key) => values[key] ?? "");
}

function escapeMarkup(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function getLocalizedSkillName(skillId) {
  const languageId = state.languageId ?? "en";
  return localizeSkill(languageId, skillId)?.name ?? skillId;
}

function summarizeRatings(ratings) {
  const bySkill = new Map();
  const byDifficulty = new Map();
  (ratings ?? []).forEach((rating) => {
    const score = Number(rating?.score);
    if (!Number.isFinite(score)) return;
    const skillId = rating.skill_id ?? "";
    if (skillId) {
      const skillSummary = bySkill.get(skillId) ?? { skillId, total: 0, count: 0 };
      skillSummary.total += score;
      skillSummary.count += 1;
      bySkill.set(skillId, skillSummary);
    }
    const difficulty = rating.difficulty ?? "";
    if (difficulty) {
      const difficultySummary = byDifficulty.get(difficulty) ?? { difficulty, total: 0, count: 0 };
      difficultySummary.total += score;
      difficultySummary.count += 1;
      byDifficulty.set(difficulty, difficultySummary);
    }
  });
  return {
    skills: SKILL_ORDER
      .map((skillId) => bySkill.get(skillId) ?? { skillId, total: 0, count: 0 })
      .map((entry) => ({
        ...entry,
        average: entry.count ? entry.total / entry.count : 0
      })),
    difficulties: ["easy", "moderate", "hard"]
      .map((difficulty) => byDifficulty.get(difficulty) ?? { difficulty, total: 0, count: 0 })
      .map((entry) => ({
        ...entry,
        average: entry.count ? entry.total / entry.count : 0
      }))
  };
}

function polarPoint(cx, cy, radius, index, total) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / total;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius
  };
}

function pointsToAttribute(points) {
  return points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function renderSelfRatingsChart() {
  const strings = getUIStrings();
  if (elements.selfChartTitle) {
    elements.selfChartTitle.textContent = strings.selfChartTitle ?? "Your progress";
  }
  if (elements.selfChartDescription) {
    elements.selfChartDescription.textContent = strings.selfChartDescription ?? "Self-ratings only.";
  }
  if (elements.selfChartRefresh) {
    elements.selfChartRefresh.textContent = strings.selfChartRefresh ?? "Refresh";
    elements.selfChartRefresh.disabled = !state.authUser || state.selfRatingsLoading;
  }
  if (!elements.selfChart || !elements.selfChartStatus) return;

  elements.selfChart.innerHTML = "";
  if (!state.authUser) {
    elements.selfChartStatus.textContent = strings.selfChartSignIn ?? "Sign in to see your self-rating chart.";
    return;
  }
  if (state.selfRatingsLoading) {
    elements.selfChartStatus.textContent = strings.selfChartLoading ?? "Loading chart...";
    return;
  }
  if (state.selfRatingsError) {
    elements.selfChartStatus.textContent = state.selfRatingsError;
    return;
  }
  if (!state.selfRatingsLoaded) {
    elements.selfChartStatus.textContent = strings.selfChartNotLoaded ?? "Open your account to load the chart.";
    return;
  }
  if (!state.selfRatings.length) {
    elements.selfChartStatus.textContent = strings.selfChartEmpty ?? "No self-ratings yet.";
    return;
  }

  const summary = summarizeRatings(state.selfRatings);
  const ratedSkills = summary.skills.filter((entry) => entry.count > 0);
  const average = state.selfRatings.reduce((total, rating) => total + Number(rating.score ?? 0), 0) / state.selfRatings.length;
  elements.selfChartStatus.textContent = [
    formatChartTemplate(strings.selfChartAverage ?? "{score}/5 average", { score: average.toFixed(1) }),
    formatChartTemplate(strings.selfChartCount ?? "{count} ratings", { count: state.selfRatings.length })
  ].join(" · ");

  if (!ratedSkills.length) return;

  const size = 220;
  const center = size / 2;
  const maxRadius = 82;
  const axisCount = ratedSkills.length;
  const gridRadii = [0.2, 0.4, 0.6, 0.8, 1];
  const grid = gridRadii.map((ratio) => {
    const points = ratedSkills.map((_entry, index) => polarPoint(center, center, maxRadius * ratio, index, axisCount));
    return `<polygon points="${pointsToAttribute(points)}" class="self-chart-grid-ring"></polygon>`;
  }).join("");
  const axes = ratedSkills.map((_entry, index) => {
    const point = polarPoint(center, center, maxRadius, index, axisCount);
    return `<line x1="${center}" y1="${center}" x2="${point.x.toFixed(1)}" y2="${point.y.toFixed(1)}" class="self-chart-axis"></line>`;
  }).join("");
  const valuePoints = ratedSkills.map((entry, index) => {
    const ratio = Math.max(0, Math.min(1, entry.average / 5));
    return polarPoint(center, center, maxRadius * ratio, index, axisCount);
  });
  const labels = ratedSkills.map((entry, index) => {
    const point = polarPoint(center, center, maxRadius + 18, index, axisCount);
    const label = getLocalizedSkillName(entry.skillId);
    const shortLabel = label.length > 14 ? `${label.slice(0, 12)}...` : label;
    return `<text x="${point.x.toFixed(1)}" y="${point.y.toFixed(1)}" class="self-chart-label">${escapeMarkup(shortLabel)}</text>`;
  }).join("");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.setAttribute("role", "img");
  svg.setAttribute(
    "aria-label",
    strings.selfChartAria ?? "Radial chart of self-rated practice progress by skill"
  );
  svg.innerHTML = `
    ${grid}
    ${axes}
    <polygon points="${pointsToAttribute(valuePoints)}" class="self-chart-area"></polygon>
    ${labels}
  `;

  const difficultyList = document.createElement("div");
  difficultyList.className = "difficulty-chart";
  const difficultyTitle = document.createElement("h5");
  difficultyTitle.textContent = strings.selfChartDifficultyTitle ?? "By difficulty";
  difficultyList.appendChild(difficultyTitle);
  summary.difficulties.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "difficulty-chart-row";
    const label = document.createElement("span");
    label.textContent = strings[`difficulty${entry.difficulty[0].toUpperCase()}${entry.difficulty.slice(1)}`] ?? entry.difficulty;
    const track = document.createElement("span");
    track.className = "difficulty-chart-track";
    const fill = document.createElement("span");
    fill.style.width = `${Math.max(0, Math.min(100, (entry.average / 5) * 100))}%`;
    track.appendChild(fill);
    const value = document.createElement("span");
    value.textContent = entry.count ? entry.average.toFixed(1) : "-";
    row.append(label, track, value);
    difficultyList.appendChild(row);
  });

  elements.selfChart.append(svg, difficultyList);
}

async function loadSelfRatings({ force = false } = {}) {
  if (!state.authUser || state.selfRatingsLoading) {
    renderSelfRatingsChart();
    return;
  }
  if (state.selfRatingsLoaded && !force) {
    renderSelfRatingsChart();
    return;
  }
  state.selfRatingsLoading = true;
  state.selfRatingsError = "";
  renderSelfRatingsChart();
  try {
    state.selfRatings = await listSelfPracticeRatings();
    state.selfRatingsLoaded = true;
  } catch (err) {
    state.selfRatingsError = err?.message ?? getUIStrings().selfChartError ?? "Unable to load chart.";
  } finally {
    state.selfRatingsLoading = false;
    renderSelfRatingsChart();
  }
}

function setAuthStatus(message) {
  if (!elements.authStatus) return;
  elements.authStatus.textContent = message ?? "";
}

function showAccountPanel() {
  if (!elements.accountOverlay) return;
  elements.accountOverlay.hidden = false;
  elements.accountOverlay.classList.remove("is-hidden");
  renderAuthUI();
  loadSelfRatings().catch(() => {});
  if (!state.authUser && elements.authEmail) {
    elements.authEmail.focus();
  }
}

function hideAccountPanel() {
  if (!elements.accountOverlay) return;
  elements.accountOverlay.hidden = true;
  elements.accountOverlay.classList.add("is-hidden");
}

function renderAuthUI() {
  const strings = getUIStrings();
  const signedIn = Boolean(state.authUser);
  const configured = isSupabaseReady();

  if (elements.accountButton) {
    elements.accountButton.textContent = signedIn
      ? getHeaderAccountLabel()
      : strings.signInButton ?? "Sign in";
    elements.accountButton.title = signedIn
      ? `${strings.profileLabel ?? "Signed in as"} ${getSignedInEmail()}`
      : strings.signInButton ?? "Sign in";
  }
  if (elements.activeTargetButton) {
    const headerTargetLabel = getHeaderActiveTargetLabel();
    const showSplitTarget = signedIn && document.body.dataset.section !== "practice" && Boolean(headerTargetLabel);
    elements.activeTargetButton.hidden = !showSplitTarget;
    elements.activeTargetButton.classList.toggle("is-hidden", !showSplitTarget);
    elements.activeTargetButton.textContent = showSplitTarget
      ? headerTargetLabel
      : "";
    elements.activeTargetButton.title = showSplitTarget
      ? strings.activeTherapistHint ?? "Ratings save to the selected therapist."
      : "";
  }

  if (elements.authSignedOut) {
    elements.authSignedOut.hidden = signedIn;
    elements.authSignedOut.classList.toggle("is-hidden", signedIn);
  }
  if (elements.authSignedIn) {
    elements.authSignedIn.hidden = !signedIn;
    elements.authSignedIn.classList.toggle("is-hidden", !signedIn);
  }

  if (elements.accountEyebrow) {
    elements.accountEyebrow.textContent = strings.accountEyebrow ?? "Practice account";
  }
  if (elements.accountHeading) {
    elements.accountHeading.textContent =
      strings.accountHeading ?? "Save ratings to the right therapist";
  }
  renderAccessUI();
  if (elements.authIntro) {
    elements.authIntro.textContent =
      strings.authIntro ??
      "Sign in only when you want to save ratings, pair with a practice partner, or prepare data for charts.";
  }
  if (elements.authEmailLabel) {
    elements.authEmailLabel.textContent = strings.authEmailLabel ?? "Email";
  }
  if (elements.authSubmit) {
    elements.authSubmit.textContent = strings.authSubmit ?? "Send magic link";
    elements.authSubmit.disabled = !configured || state.authLoading;
  }
  if (elements.authEmail) {
    elements.authEmail.placeholder = strings.authEmailPlaceholder ?? "you@example.com";
    elements.authEmail.disabled = !configured || state.authLoading;
  }
  if (elements.profileLabel) {
    elements.profileLabel.textContent = strings.profileLabel ?? "Signed in as";
  }
  if (elements.accountEmail) {
    elements.accountEmail.textContent = getSignedInEmail();
  }
  if (elements.authSignout) {
    elements.authSignout.textContent = strings.signOutButton ?? "Sign out";
  }
  if (elements.profileDisplayLabel) {
    elements.profileDisplayLabel.textContent = strings.profileDisplayLabel ?? "Display name";
  }
  if (elements.profileDisplayName && signedIn) {
    elements.profileDisplayName.value = state.authProfile?.display_name ?? "";
  }
  if (elements.profileSubmit) {
    elements.profileSubmit.textContent = strings.profileSave ?? "Save";
  }
  if (elements.activeTargetLabel) {
    elements.activeTargetLabel.textContent = strings.activeTherapistLabel ?? "Active therapist";
  }
  if (elements.activeTargetHint) {
    elements.activeTargetHint.textContent =
      strings.activeTherapistHint ?? "Ratings save to the selected therapist.";
  }
  if (elements.pairingCreateTitle) {
    elements.pairingCreateTitle.textContent = strings.pairingCreateTitle ?? "Invite a partner";
  }
  if (elements.pairingCreateDescription) {
    elements.pairingCreateDescription.textContent =
      strings.pairingCreateDescription ??
      "Create a short code on the therapist device. The partner accepts it on their device.";
  }
  if (elements.pairingCreateButton) {
    elements.pairingCreateButton.textContent = strings.pairingCreateButton ?? "Create code";
    elements.pairingCreateButton.disabled = !signedIn || state.authLoading;
  }
  if (elements.pairingCopy) {
    elements.pairingCopy.textContent = strings.copyButton ?? "Copy";
  }
  if (elements.pairingShare) {
    elements.pairingShare.textContent = strings.shareButton ?? "Share";
  }
  if (elements.pairingAcceptLabel) {
    elements.pairingAcceptLabel.textContent = strings.pairingAcceptLabel ?? "Accept partner code";
  }
  if (elements.pairingAcceptSubmit) {
    elements.pairingAcceptSubmit.textContent = strings.pairingAcceptButton ?? "Accept";
  }
  if (elements.pairingCodeInput) {
    elements.pairingCodeInput.placeholder = strings.pairingCodePlaceholder ?? "ABCD1234";
  }
  if (elements.partnersTitle) {
    elements.partnersTitle.textContent = strings.partnersTitle ?? "Paired therapists";
  }

  renderActiveTargetSelect();
  renderPartnerList();
  renderSelfRatingsChart();
  updateRatingPanel();

  if (!configured && elements.accountOverlay && !elements.accountOverlay.hidden) {
    setAuthStatus(strings.authConfigMissing ?? "Supabase Auth is not configured.");
  }
}

function renderActiveTargetSelect() {
  if (!elements.activeTargetSelect) return;
  elements.activeTargetSelect.innerHTML = "";
  const strings = getUIStrings();
  state.authTargets.forEach((target) => {
    const option = document.createElement("option");
    option.value = getTargetUserId(target);
    const kind = getTargetKind(target);
    const name = getTargetDisplayName(target) || (kind === "self" ? strings.meLabel ?? "Me" : "Therapist");
    option.textContent = name;
    option.selected = option.value === state.activeTargetId;
    elements.activeTargetSelect.appendChild(option);
  });
  elements.activeTargetSelect.disabled = state.authTargets.length === 0;
}

function renderPartnerList() {
  if (!elements.partnerList) return;
  const strings = getUIStrings();
  const partners = state.authTargets.filter((target) => getTargetKind(target) === "observer");
  elements.partnerList.innerHTML = "";
  if (!partners.length) {
    const empty = document.createElement("p");
    empty.className = "response-hint";
    empty.textContent = strings.noPartners ?? "No paired therapists yet.";
    elements.partnerList.appendChild(empty);
    return;
  }
  partners.forEach((target) => {
    const row = document.createElement("div");
    row.className = "partner-row";
    const name = document.createElement("span");
    name.textContent = getTargetDisplayName(target) || "Therapist";
    const revoke = document.createElement("button");
    revoke.type = "button";
    revoke.className = "ghost-button ghost-button--small";
    revoke.dataset.partnershipId = getTargetPartnershipId(target);
    revoke.textContent = strings.revokePartner ?? "Revoke";
    row.append(name, revoke);
    elements.partnerList.appendChild(row);
  });
}

function formatPairingCode(code) {
  const normalized = String(code ?? "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  if (normalized.length <= 4) return normalized;
  return `${normalized.slice(0, 4)} ${normalized.slice(4)}`;
}

function renderPairingInvite(invite) {
  if (!elements.pairingCodeCard || !elements.pairingCode || !elements.pairingExpiry) return;
  const visible = Boolean(invite?.code);
  elements.pairingCodeCard.hidden = !visible;
  elements.pairingCodeCard.classList.toggle("is-hidden", !visible);
  if (!visible) {
    elements.pairingCode.textContent = "";
    elements.pairingExpiry.textContent = "";
    return;
  }
  const strings = getUIStrings();
  elements.pairingCode.textContent = formatPairingCode(invite.code);
  const expiry = invite.expires_at ? new Date(invite.expires_at) : null;
  elements.pairingExpiry.textContent = expiry && Number.isFinite(expiry.getTime())
    ? `${strings.expiresPrefix ?? "Expires:"} ${expiry.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : "";
}

async function refreshPracticeTargets() {
  if (!state.authUser) {
    state.authTargets = [];
    state.activeTargetId = null;
    return;
  }
  const targets = await listPracticeTargets();
  state.authTargets = targets.map(normalizePracticeTarget).filter(Boolean);
  const savedTargetId = loadActiveTargetId(state.authUser.id);
  const fallbackTarget = getSelfTarget() ?? state.authTargets[0] ?? null;
  const requestedTarget = state.authTargets.find((target) => getTargetUserId(target) === state.activeTargetId)
    ?? state.authTargets.find((target) => getTargetUserId(target) === savedTargetId)
    ?? fallbackTarget;
  state.activeTargetId = getTargetUserId(requestedTarget);
  if (state.activeTargetId) {
    saveActiveTargetId(state.activeTargetId);
  }
}

async function applyAuthSession(session) {
  state.authSession = session ?? null;
  state.authUser = session?.user ?? null;
  state.authProfile = null;
  state.authTargets = [];
  state.activeTargetId = null;
  state.selfRatings = [];
  state.selfRatingsLoading = false;
  state.selfRatingsLoaded = false;
  state.selfRatingsError = "";

  if (!state.authUser) {
    renderAuthUI();
    return;
  }

  try {
    state.authProfile = await ensureUserProfile(null);
    await refreshPracticeTargets();
    renderAuthUI();
  } catch (err) {
    setAuthStatus(err?.message ?? "Unable to load account.");
    renderAuthUI();
  }
}

async function initializeAuth() {
  state.authConfigured = isSupabaseReady();
  renderAuthUI();
  if (!state.authConfigured) return;
  try {
    const session = await getAuthSession();
    await applyAuthSession(session);
    onAuthStateChange((nextSession) => {
      applyAuthSession(nextSession).catch((err) => {
        setAuthStatus(err?.message ?? "Unable to update account.");
      });
    });
  } catch (err) {
    setAuthStatus(err?.message ?? "Unable to load account.");
  }
}

async function handleMagicLinkSubmit(event) {
  event.preventDefault();
  const strings = getUIStrings();
  const email = elements.authEmail?.value ?? "";
  if (!email.trim()) {
    setAuthStatus(strings.authEmailMissing ?? "Enter your email address.");
    return;
  }
  state.authLoading = true;
  renderAuthUI();
  setAuthStatus(strings.authSending ?? "Sending magic link...");
  try {
    await signInWithMagicLink(email);
    setAuthStatus(strings.authSent ?? "Check your email for the sign-in link.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.authError ?? "Unable to send sign-in link.");
  } finally {
    state.authLoading = false;
    renderAuthUI();
  }
}

async function handleProfileSubmit(event) {
  event.preventDefault();
  const strings = getUIStrings();
  const displayName = elements.profileDisplayName?.value ?? "";
  try {
    state.authProfile = await updateUserProfile({ displayName });
    await refreshPracticeTargets();
    renderAuthUI();
    setAuthStatus(strings.profileSaved ?? "Profile saved.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.profileError ?? "Unable to save profile.");
  }
}

async function handleSignOut() {
  const strings = getUIStrings();
  try {
    await signOut();
    state.authSession = null;
    state.authUser = null;
    state.authProfile = null;
    state.authTargets = [];
    state.activeTargetId = null;
    state.selfRatings = [];
    state.selfRatingsLoaded = false;
    state.selfRatingsError = "";
    renderAuthUI();
    setAuthStatus(strings.signedOut ?? "Signed out.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.authError ?? "Unable to sign out.");
  }
}

async function handleCreatePairingInvite() {
  const strings = getUIStrings();
  state.authLoading = true;
  renderAuthUI();
  setAuthStatus(strings.pairingCreating ?? "Creating code...");
  try {
    const invite = await createPairingInvite();
    state.latestPairingCode = invite;
    renderPairingInvite(invite);
    setAuthStatus(strings.pairingCreated ?? "Share this code with your practice partner.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.pairingCreateError ?? "Unable to create pairing code.");
  } finally {
    state.authLoading = false;
    renderAuthUI();
  }
}

async function handleAcceptPairingInvite(event) {
  event.preventDefault();
  const strings = getUIStrings();
  const code = elements.pairingCodeInput?.value ?? "";
  if (!code.trim()) {
    setAuthStatus(strings.pairingCodeMissing ?? "Enter the pairing code.");
    return;
  }
  setAuthStatus(strings.pairingAccepting ?? "Accepting code...");
  try {
    const accepted = await acceptPairingInvite(code);
    await refreshPracticeTargets();
    const targetId = getTargetUserId(accepted);
    if (targetId) {
      state.activeTargetId = targetId;
      saveActiveTargetId(targetId);
    }
    if (elements.pairingCodeInput) {
      elements.pairingCodeInput.value = "";
    }
    renderAuthUI();
    setAuthStatus(strings.pairingAccepted ?? "Partner added. Ratings can now save to that therapist.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.pairingAcceptError ?? "Unable to accept pairing code.");
  }
}

async function handleRevokePartnership(partnershipId) {
  if (!partnershipId) return;
  const strings = getUIStrings();
  setAuthStatus(strings.revokeWorking ?? "Revoking partner...");
  try {
    await revokePracticePartnership(partnershipId);
    await refreshPracticeTargets();
    renderAuthUI();
    setAuthStatus(strings.revokeSuccess ?? "Partner revoked.");
  } catch (err) {
    setAuthStatus(err?.message ?? strings.revokeError ?? "Unable to revoke partner.");
  }
}

async function copyPairingCode() {
  const strings = getUIStrings();
  const code = state.latestPairingCode?.code;
  if (!code) return;
  try {
    await navigator.clipboard?.writeText(formatPairingCode(code));
    setAuthStatus(strings.copied ?? "Copied.");
  } catch (err) {
    setAuthStatus(strings.copyError ?? "Could not copy the code.");
  }
}

async function sharePairingCode() {
  const strings = getUIStrings();
  const code = state.latestPairingCode?.code;
  if (!code) return;
  const text = `${strings.sharePairingText ?? "Use this Deliberate Practice pairing code:"} ${formatPairingCode(code)}`;
  if (navigator.share) {
    try {
      await navigator.share({ text });
      setAuthStatus(strings.shared ?? "Shared.");
      return;
    } catch (err) {
      if (err?.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard?.writeText(text);
    setAuthStatus(strings.copied ?? "Copied.");
  } catch (err) {
    setAuthStatus(strings.shareError ?? "Could not share the code.");
  }
}

function isCaseLocked(caseItem) {
  if (!caseItem) return false;
  return caseItem.tier === "pro" && !hasProAccess();
}

function getLanguageDefinition(languageId) {
  const fallbackId = LANGUAGE_METADATA[languageId] ? languageId : "en";
  return {
    ...LANGUAGE_METADATA[fallbackId],
    ui: getUIStrings(fallbackId),
    overrides: LANGUAGE_OVERRIDES[fallbackId] ?? {}
  };
}

function getUIStrings(languageId = state.languageId ?? "en") {
  const base = LANGUAGE_UI.en;
  const target = LANGUAGE_UI[languageId] ?? {};
  return {
    ...base,
    ...target
  };
}

function getOverrides(languageId) {
  return LANGUAGE_OVERRIDES[languageId] ?? {};
}

function getStatementTranslations(languageId) {
  return STATEMENT_TRANSLATIONS[languageId] ?? {};
}

function getCaseFormulationTranslations(languageId) {
  return CASE_FORMULATION_TRANSLATIONS[languageId] ?? {};
}

function getGlossaryEntries(languageId) {
  const target = GLOSSARY[languageId];
  const fallback = Array.isArray(target) && target.length > 0 ? target : GLOSSARY.en;
  return Array.isArray(fallback) ? fallback : [];
}

function resolveGlossaryEntry(languageId, entryId) {
  if (!entryId) return null;
  const entries = getGlossaryEntries(languageId);
  const fallbackEntries = getGlossaryEntries("en");
  return entries.find((entry) => entry.id === entryId) ?? fallbackEntries.find((entry) => entry.id === entryId) ?? null;
}

function buildGlossaryIndex(languageId) {
  const entries = getGlossaryEntries(languageId);
  const fallbackEntries = getGlossaryEntries("en");
  const source = entries.length ? entries : fallbackEntries;

  return source
    .map((entry) => {
      const langTerms = entry.terms?.[languageId] ?? entry.terms?.en ?? [];
      return langTerms
        .filter(Boolean)
        .map((term) => ({
          entryId: entry.id,
          term
        }));
    })
    .flat()
    .sort((a, b) => b.term.length - a.term.length);
}

const WORD_BOUNDARY_REGEX = /[a-zæøå0-9]/i;

function createGlossaryFragment(text, languageId) {
  const fragment = document.createDocumentFragment();
  const content = typeof text === "string" ? text : "";
  if (!content) {
    fragment.appendChild(document.createTextNode(""));
    return fragment;
  }

  const index = buildGlossaryIndex(languageId);
  if (!index.length) {
    fragment.appendChild(document.createTextNode(content));
    return fragment;
  }

  const lowerContent = content.toLowerCase();
  const matches = [];

  const isBoundary = (start, length) => {
    const before = lowerContent[start - 1];
    const after = lowerContent[start + length];
    const validBefore = !before || !WORD_BOUNDARY_REGEX.test(before);
    const validAfter = !after || !WORD_BOUNDARY_REGEX.test(after);
    return validBefore && validAfter;
  };

  index.forEach(({ term, entryId }) => {
    const value = term?.trim();
    if (!value) return;
    const needle = value.toLowerCase();
    let searchStart = 0;
    while (searchStart < lowerContent.length) {
      const hit = lowerContent.indexOf(needle, searchStart);
      if (hit === -1) break;
      if (isBoundary(hit, needle.length)) {
        matches.push({ start: hit, end: hit + needle.length, entryId });
      }
      searchStart = hit + needle.length;
    }
  });

  if (!matches.length) {
    fragment.appendChild(document.createTextNode(content));
    return fragment;
  }

  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const filtered = [];
  let lastEnd = 0;
  matches.forEach((match) => {
    if (match.start < lastEnd) return;
    filtered.push(match);
    lastEnd = match.end;
  });

  let cursor = 0;
  filtered.forEach((match) => {
    if (match.start > cursor) {
      fragment.appendChild(document.createTextNode(content.slice(cursor, match.start)));
    }
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "glossary-chip";
    chip.dataset.termId = match.entryId;
    chip.textContent = content.slice(match.start, match.end);
    fragment.appendChild(chip);
    cursor = match.end;
  });

  if (cursor < content.length) {
    fragment.appendChild(document.createTextNode(content.slice(cursor)));
  }

  return fragment;
}

function renderGlossaryBlock(container, text, languageId) {
  if (!container) return;
  container.textContent = "";
  const content = typeof text === "string" ? text : "";
  if (!content) return;
  container.appendChild(createGlossaryFragment(content, languageId));
}

function renderGlossaryParagraphs(container, text, languageId) {
  if (!container) return;
  container.textContent = "";
  const content = typeof text === "string" ? text : "";
  if (!content) return;
  const paragraphs = content.split(/\n\s*\n/);
  paragraphs.forEach((para) => {
    const trimmed = para.trim();
    if (!trimmed) return;
    const p = document.createElement("p");
    p.appendChild(createGlossaryFragment(trimmed, languageId));
    container.appendChild(p);
  });
}
function localizeSkill(languageId, skillId) {
  const baseSkill = BASE_PRACTICE[skillId];
  if (!baseSkill) return null;

  const overrides = getOverrides(languageId)[skillId] ?? {};
  const cases = CASE_ORDER[skillId].map((caseId) => {
    const baseCase = baseSkill.cases[caseId];
    if (!baseCase) return null;
    const caseOverride = overrides.cases?.[caseId] ?? {};
    const caseFormulationOverride = getCaseFormulationTranslations(languageId)[caseId] ?? {};
    return {
      id: caseId,
      label: caseOverride.label ?? baseCase.label,
      difficulty: caseOverride.difficulty ?? baseCase.difficulty ?? "",
      tier: caseOverride.tier ?? baseCase.tier ?? "free",
      difficultyLabel:
        caseOverride.difficultyLabel ?? baseCase.difficultyLabel ?? baseCase.difficulty ?? "",
      teaser: caseOverride.teaser ?? baseCase.teaser,
      history: caseOverride.history ?? baseCase.history,
      schema: caseOverride.schema ?? baseCase.schema,
      corePain:
        caseOverride.corePain ??
        caseFormulationOverride.corePain ??
        (languageId === "en" ? baseCase.corePain ?? "" : ""),
      practiceEdge: caseOverride.practiceEdge ?? baseCase.practiceEdge ?? "",
      style: caseOverride.style ?? baseCase.style,
      voice: caseOverride.voice ?? baseCase.voice,
      dossier: caseOverride.dossier ?? baseCase.dossier ?? "",
      caseBible: baseCase.caseBible ?? null,
      statements: localizeStatements(languageId, baseCase.statements)
    };
  }).filter(Boolean);

  return {
    id: skillId,
    name: overrides.name ?? baseSkill.name,
    description: overrides.description ?? baseSkill.description,
    summary: overrides.summary ?? baseSkill.summary,
    marker: overrides.marker ?? baseSkill.marker,
    aim: overrides.aim ?? baseSkill.aim,
    practiceFocus: overrides.practiceFocus ?? baseSkill.practiceFocus ?? "",
    commonMiss: overrides.commonMiss ?? baseSkill.commonMiss ?? "",
    cases
  };
}

function localizeStatements(languageId, baseStatements) {
  const translationMap = getStatementTranslations(languageId);

  return (baseStatements ?? []).map((entry) => {
    if (languageId !== "en" && entry.revision && STATEMENT_TRANSLATION_REVISION !== entry.revision) {
      return entry;
    }
    const t = translationMap[entry.id];
    if (typeof t === "string") {
      return { ...entry, text: t };
    }
    if (t && typeof t === "object") {
      return {
        ...entry,
        text: typeof t.text === "string" ? t.text : entry.text,
        suggestion: typeof t.suggestion === "string" ? t.suggestion : entry.suggestion
      };
    }
    return entry;
  });
}

function getCurrentSkill() {
  if (!state.skillId) return null;
  const languageId = state.languageId ?? "en";
  return localizeSkill(languageId, state.skillId);
}

function getCurrentCase() {
  const skill = getCurrentSkill();
  if (!skill || !state.caseId) return null;
  return skill.cases.find((caseItem) => caseItem.id === state.caseId) ?? null;
}

function showSection(sectionKey) {
  Object.entries(sections).forEach(([key, el]) => {
    const shouldShow = key === sectionKey;
    el.classList.toggle("is-hidden", !shouldShow);
    el.hidden = !shouldShow;
  });
  document.body.dataset.section = sectionKey;
  renderAuthUI();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function getFirstParagraph(text) {
  return String(text ?? "")
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .find(Boolean) ?? "";
}

function applyLanguageStrings(languageId) {
  const definition = getLanguageDefinition(languageId);
  const strings = definition.ui;

  document.documentElement.lang = definition.locale ?? "en";
  document.documentElement.dir = definition.direction ?? "ltr";
  document.title = strings.appTitle;

  elements.appTitle.textContent = strings.appTitle;
  elements.appTagline.textContent = strings.tagline;

  elements.languagePanelTitle.textContent = strings.languageHeading;
  elements.languagePanelDescription.textContent = strings.languageDescription;
  elements.languageList.setAttribute("aria-label", strings.languageListAria);

  elements.skillPanelTitle.textContent = strings.skillHeading;
  elements.skillPanelDescription.textContent = strings.skillDescription;
  elements.skillList.setAttribute("aria-label", strings.skillListAria);

  elements.casePanelTitle.textContent = strings.caseHeading;
  elements.casePanelDescription.textContent = strings.caseDescription;
  elements.caseList.setAttribute("aria-label", strings.caseListAria);

  if (elements.caseSkillSummaryEyebrow) {
    elements.caseSkillSummaryEyebrow.textContent = strings.skillFocusLabel ?? "Skill focus";
  }
  if (elements.caseSkillSummaryPracticeFocusLabel) {
    elements.caseSkillSummaryPracticeFocusLabel.textContent =
      strings.skillPracticeFocusLabel ?? "What to practice";
  }
  if (elements.caseSkillSummaryCommonMissLabel) {
    elements.caseSkillSummaryCommonMissLabel.textContent =
      strings.skillCommonMissLabel ?? "Common miss";
  }
  if (elements.openSkillGuideButton) {
    elements.openSkillGuideButton.textContent = strings.learnSkill ?? "Learn this skill";
  }
  if (elements.skillGuidePanelTitle) {
    elements.skillGuidePanelTitle.textContent = strings.skillGuideHeading ?? "Skill Guide";
  }
  if (elements.skillGuideDescription) {
    elements.skillGuideDescription.textContent =
      strings.skillGuideDescription ?? "Review the markers, aim, and common misses before choosing a case.";
  }
  if (elements.skillGuideBackButton) {
    elements.skillGuideBackButton.textContent = `← ${strings.backToCases}`;
    elements.skillGuideBackButton.setAttribute(
      "aria-label",
      strings.backToCasesAria ?? strings.backToCases
    );
  }

  if (elements.caseSkillMarkerLabel) {
    elements.caseSkillMarkerLabel.textContent = strings.skillMarkerLabel ?? "Markers";
  }
  if (elements.caseSkillSummaryLabel) {
    elements.caseSkillSummaryLabel.textContent = strings.skillSummaryLabel ?? "How to Work";
  }
  if (elements.caseSkillAimLabel) {
    elements.caseSkillAimLabel.textContent = strings.skillAimLabel ?? "Aim";
  }
  if (elements.caseSkillPracticeFocusLabel) {
    elements.caseSkillPracticeFocusLabel.textContent =
      strings.skillPracticeFocusLabel ?? "What to practice";
  }
  if (elements.caseSkillCommonMissLabel) {
    elements.caseSkillCommonMissLabel.textContent =
      strings.skillCommonMissLabel ?? "Common miss";
  }
  if (elements.glossaryHint) {
    elements.glossaryHint.textContent = strings.glossaryHint ?? "";
  }
  if (elements.glossaryTitle) {
    elements.glossaryTitle.textContent = strings.glossaryTitle ?? "Key term";
  }
  if (elements.glossaryClose) {
    const closeLabel = strings.glossaryClose ?? "Close definition";
    elements.glossaryClose.setAttribute("aria-label", closeLabel);
    elements.glossaryClose.title = closeLabel;
  }

  elements.caseBriefHeading.textContent =
    strings.roleBriefHeading ?? strings.caseBriefHeading ?? "Role Background";
  elements.caseSchemaLabel.textContent = strings.schemaLabel;
  if (elements.caseCorePainLabel) {
    elements.caseCorePainLabel.textContent = strings.corePainLabel ?? "Core Pain";
  }
  elements.caseStyleLabel.textContent = strings.styleLabel;
  if (elements.casePracticeEdgeLabel) {
    elements.casePracticeEdgeLabel.textContent =
      strings.casePracticeEdgeLabel ?? "What to listen for";
  }
  elements.caseVoiceHeading.textContent = strings.clientVoiceHeading ?? "Client Voice";
  elements.startPracticeButton.textContent = strings.startPractice ?? "Begin Practice";
  elements.viewCaseBriefButton.textContent = strings.viewCaseBrief ?? "View Case Brief";
  elements.startPracticeButton.setAttribute(
    "aria-label",
    strings.startPractice ?? "Begin Practice"
  );
  elements.viewCaseBriefButton.setAttribute(
    "aria-label",
    strings.viewCaseBrief ?? "View Case Brief"
  );

  if (elements.practiceControls) {
    elements.practiceControls.setAttribute(
      "aria-label",
      strings.practiceControlsAria ?? ""
    );
  }
  if (elements.shuffleButton) {
    elements.shuffleButton.innerHTML = `<img src="${SHUFFLE_ICON_SRC}" alt="">`;
    elements.shuffleButton.setAttribute("aria-label", strings.shuffleAria ?? strings.shuffle);
  }

  elements.nextButton.textContent = strings.next;
  elements.nextButton.setAttribute("aria-label", strings.nextAria ?? strings.next);

  if (elements.suggestionToggle) {
    elements.suggestionToggle.textContent = strings.showSuggestion;
    elements.suggestionToggle.setAttribute(
      "aria-label",
      strings.suggestionHiddenLabel ?? strings.showSuggestion
    );
  }
  elements.languageBackButton.textContent = `← ${strings.backToLanguage}`;
  elements.languageBackButton.setAttribute(
    "aria-label",
    strings.backToLanguageAria ?? strings.backToLanguage
  );

  elements.skillsBackButton.textContent = `← ${strings.backToSkills}`;
  elements.skillsBackButton.setAttribute(
    "aria-label",
    strings.backToSkillsAria ?? strings.backToSkills
  );

  elements.casesBackButton.textContent = `← ${strings.backToCases}`;
  elements.casesBackButton.setAttribute(
    "aria-label",
    strings.backToCasesAria ?? strings.backToCases
  );

  elements.footerNote.textContent = strings.footerNote;
  if (elements.statementPanel) {
    elements.statementPanel.setAttribute("aria-label", strings.statementPanelAria ?? "");
  }

  if (elements.lockedBanner) {
    elements.lockedBanner.textContent = strings.lockedBanner ?? "";
  }
  if (elements.paywallHeading) {
    elements.paywallHeading.textContent = strings.paywallHeading ?? "";
  }
  if (elements.paywallMessage) {
    elements.paywallMessage.textContent = strings.paywallMessage ?? "";
  }
  if (elements.unlockSubmit) {
    elements.unlockSubmit.textContent = strings.unlockSubmit ?? "Unlock";
  }
  if (elements.unlockCodeInput) {
    elements.unlockCodeInput.setAttribute("placeholder", strings.unlockPlaceholder ?? "Access code");
  }

  if (elements.feedbackTitle) {
    elements.feedbackTitle.textContent = strings.feedbackTitle ?? "Flag this item";
  }
  if (elements.feedbackReasonLabel) {
    elements.feedbackReasonLabel.textContent = strings.feedbackReasonLabel ?? "What's wrong?";
  }
  if (elements.feedbackDetailsLabel) {
    elements.feedbackDetailsLabel.textContent = strings.feedbackDetailsLabel ?? "Add details";
  }
  if (elements.feedbackSubmit) {
    elements.feedbackSubmit.textContent = strings.feedbackSubmit ?? "Send feedback";
  }
  updateFeedbackVisibility();

  updateCaseSkillSummary(getCurrentSkill());
  updateCaseSkillContext(getCurrentSkill());
  updateSuggestionUI();
  updateLockedBanner();
  renderResumeCard();
  renderAuthUI();
  updateRatingPanel();
}

function renderLanguageOptions() {
  elements.languageList.innerHTML = "";
  languageButtonMap.clear();

  LANGUAGE_ORDER.forEach((languageId) => {
    const metadata = LANGUAGE_METADATA[languageId];
    if (!metadata) return;
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.languageId = languageId;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");
    button.innerHTML = `
      <span class="card-title">${metadata.label}</span>
      <span class="card-body">${metadata.locale}</span>
    `;
    button.addEventListener("click", () => handleLanguageSelection(languageId));
    elements.languageList.appendChild(button);
    languageButtonMap.set(languageId, button);
  });
  highlightLanguageSelection(state.languageId);
}

function highlightLanguageSelection(languageId) {
  languageButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === languageId ? "true" : "false");
  });
}

function renderSkillOptions() {
  elements.skillList.innerHTML = "";
  skillButtonMap.clear();
  const languageId = state.languageId ?? "en";

  SKILL_ORDER.forEach((skillId) => {
    const skill = localizeSkill(languageId, skillId);
    if (!skill) return;
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.skillId = skillId;
    button.setAttribute("role", "option");
    const isSelected = state.skillId === skillId;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    const visual = getSkillVisual(skillId);
    applyVisualProperties(button, visual);
    button.innerHTML = `
      <div class="card-header">
        <span class="skill-mark" aria-hidden="true">${getSkillIcon(visual.icon)}</span>
        <span class="card-title">${skill.name}</span>
      </div>
      <span class="card-body">${skill.description}</span>
    `;
    button.addEventListener("click", () => handleSkillSelection(skillId));
    elements.skillList.appendChild(button);
    skillButtonMap.set(skillId, button);
  });
}

function highlightSkillSelection(skillId) {
  skillButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === skillId ? "true" : "false");
  });
}

function updateCaseSkillSummary(skill) {
  if (
    !elements.caseSkillSummaryCard ||
    !elements.caseSkillSummaryName ||
    !elements.caseSkillSummaryText ||
    !elements.caseSkillSummaryPracticeFocus ||
    !elements.caseSkillSummaryCommonMiss
  ) {
    return;
  }

  if (!skill) {
    elements.caseSkillSummaryCard.hidden = true;
    elements.caseSkillSummaryCard.classList.add("is-hidden");
    elements.caseSkillSummaryCard.removeAttribute("data-skill-id");
    elements.caseSkillSummaryName.textContent = "";
    elements.caseSkillSummaryText.textContent = "";
    elements.caseSkillSummaryPracticeFocus.textContent = "";
    elements.caseSkillSummaryCommonMiss.textContent = "";
    if (elements.openSkillGuideButton) {
      elements.openSkillGuideButton.removeAttribute("aria-label");
    }
    return;
  }

  const strings = getUIStrings();
  const visual = getSkillFocusVisual(skill.id);
  elements.caseSkillSummaryCard.dataset.skillId = skill.id;
  applyVisualProperties(elements.caseSkillSummaryCard, visual);
  elements.caseSkillSummaryCard.hidden = false;
  elements.caseSkillSummaryCard.classList.remove("is-hidden");
  elements.caseSkillSummaryName.textContent = skill.name ?? "";
  elements.caseSkillSummaryText.textContent =
    getFirstParagraph(skill.description) || getFirstParagraph(skill.summary);
  elements.caseSkillSummaryPracticeFocus.textContent = skill.practiceFocus ?? "";
  elements.caseSkillSummaryCommonMiss.textContent = skill.commonMiss ?? "";
  if (elements.openSkillGuideButton) {
    const label = strings.learnSkillAria ?? strings.learnSkill ?? "Learn this skill";
    elements.openSkillGuideButton.setAttribute("aria-label", `${label}: ${skill.name}`);
  }
}

function renderCaseOptions() {
  elements.caseList.innerHTML = "";
  caseButtonMap.clear();

  const skill = getCurrentSkill();
  updateCaseSkillSummary(skill);
  updateCaseSkillContext(skill);
  if (!skill) return;
  applyVisualProperties(sections.case, getSkillVisual(skill.id));

  skill.cases.forEach((caseItem) => {
    const button = document.createElement("button");
    button.className = "card-button";
    button.dataset.caseId = caseItem.id;
    button.dataset.difficulty = caseItem.difficulty ?? "";
    button.setAttribute("role", "option");
    const isSelected = state.caseId === caseItem.id;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    const locked = isCaseLocked(caseItem);
    if (locked) {
      button.classList.add("is-locked");
    }
    applyVisualProperties(button, getCaseVisual(skill.id, caseItem.difficulty));
    const lockTag = locked ? `<span class="lock-tag" aria-label="${getUIStrings().lockedLabel}"></span>` : "";
    button.innerHTML = `
      <span class="card-title">${caseItem.label} ${lockTag}</span>
      <span class="card-body">${caseItem.teaser}</span>
    `;
    button.addEventListener("click", () => {
      if (locked) {
        showPaywall(caseItem);
        return;
      }
      handleCaseSelection(caseItem.id);
    });
    elements.caseList.appendChild(button);
    caseButtonMap.set(caseItem.id, button);
  });
}

function highlightCaseSelection(caseId) {
  caseButtonMap.forEach((button, id) => {
    button.setAttribute("aria-selected", id === caseId ? "true" : "false");
  });
}

function renderSkillContextExpansion(hasSkill) {
  const expanded = hasSkill && state.skillContextExpanded;
  if (elements.caseSkillBody) {
    elements.caseSkillBody.hidden = !expanded;
    elements.caseSkillBody.classList.toggle("is-hidden", !expanded);
  }
  if (elements.caseSkillToggle) {
    const strings = getUIStrings();
    const showText = strings.showSkillInstructions ?? "Show instructions";
    const hideText = strings.hideSkillInstructions ?? "Hide instructions";
    elements.caseSkillToggle.textContent = expanded ? hideText : showText;
    elements.caseSkillToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    elements.caseSkillToggle.disabled = !hasSkill;
  }
  if (!expanded) {
    hideGlossaryCard();
  }
}

function setGlossaryVisibility(visible) {
  if (!elements.glossaryPanel) return;
  elements.glossaryPanel.hidden = !visible;
  elements.glossaryPanel.classList.toggle("is-hidden", !visible);
  if (!visible) {
    hideGlossaryCard();
  }
}

function setActiveGlossaryChip(target) {
  if (activeGlossaryChip) {
    activeGlossaryChip.classList.remove("is-active");
  }
  activeGlossaryChip = target ?? null;
  if (activeGlossaryChip) {
    activeGlossaryChip.classList.add("is-active");
  }
}

function hideGlossaryCard() {
  state.activeGlossaryTermId = null;
  setActiveGlossaryChip(null);
  if (elements.glossaryCard) {
    elements.glossaryCard.hidden = true;
    elements.glossaryCard.classList.add("is-hidden");
    elements.glossaryCard.classList.remove("is-floating");
    elements.glossaryCard.style.left = "";
    elements.glossaryCard.style.top = "";
    elements.glossaryCard.style.visibility = "";
  }
  if (elements.glossaryTerm) {
    elements.glossaryTerm.textContent = "";
  }
  if (elements.glossaryDefinition) {
    elements.glossaryDefinition.textContent = "";
  }
}

function positionGlossaryCard(chip) {
  if (!elements.glossaryCard || !chip) return;
  const card = elements.glossaryCard;
  const rect = chip.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  card.classList.add("is-floating");
  card.style.position = "fixed";
  card.style.maxWidth = "min(360px, calc(100vw - 28px))";
  card.style.visibility = "hidden";

  // Force layout to get size.
  const cardWidth = card.offsetWidth || 280;
  const cardHeight = card.offsetHeight || 140;

  const horizontalCenter = rect.left + rect.width / 2;
  let left = horizontalCenter - cardWidth / 2;
  const margin = 12;
  if (left < margin) left = margin;
  if (left + cardWidth + margin > viewportWidth) {
    left = viewportWidth - cardWidth - margin;
  }

  const preferredTop = rect.bottom + 8;
  let top = preferredTop;
  if (preferredTop + cardHeight + margin > viewportHeight) {
    top = rect.top - cardHeight - 8;
    if (top < margin) top = margin;
  }

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
  card.style.visibility = "visible";
}

function showGlossaryDefinition(termId, chip) {
  if (!termId || !elements.glossaryCard) return;
  const languageId = state.languageId ?? "en";
  const entry = resolveGlossaryEntry(languageId, termId);
  if (!entry) return;
  const strings = getUIStrings(languageId);
  const label =
    entry.label?.[languageId] ??
    entry.label?.en ??
    chip?.textContent ??
    "";
  const definition = entry.definition?.[languageId] ?? entry.definition?.en ?? "";

  if (elements.glossaryTitle) {
    elements.glossaryTitle.textContent = strings.glossaryTitle ?? "Key term";
  }
  if (elements.glossaryTerm) {
    elements.glossaryTerm.textContent = label;
  }
  if (elements.glossaryDefinition) {
    elements.glossaryDefinition.textContent = definition;
  }

  const card = elements.glossaryCard;
  card.hidden = false;
  card.classList.remove("is-hidden");
  state.activeGlossaryTermId = termId;
  setActiveGlossaryChip(chip ?? null);
  requestAnimationFrame(() => positionGlossaryCard(chip));
}

function refreshActiveGlossaryDefinition() {
  if (!state.activeGlossaryTermId) {
    hideGlossaryCard();
    return;
  }
  const selector = `.glossary-chip[data-term-id="${state.activeGlossaryTermId}"]`;
  const chip = elements.caseSkillBody?.querySelector(selector) ?? null;
  showGlossaryDefinition(state.activeGlossaryTermId, chip);
}

function updateCaseSkillContext(skill) {
  if (
    !elements.caseSkillContext ||
    !elements.caseSkillName ||
    !elements.caseSkillMarker ||
    !elements.caseSkillSummary ||
    !elements.caseSkillAim ||
    !elements.caseSkillPracticeFocus ||
    !elements.caseSkillCommonMiss
  ) {
    return;
  }

  const languageId = state.languageId ?? "en";
  hideGlossaryCard();

  if (!skill) {
    elements.caseSkillContext.hidden = true;
    elements.caseSkillContext.classList.add("is-hidden");
    elements.caseSkillContext.removeAttribute("data-skill-id");
    elements.caseSkillName.textContent = "";
    elements.caseSkillMarker.textContent = "";
    elements.caseSkillSummary.textContent = "";
    elements.caseSkillAim.textContent = "";
    elements.caseSkillPracticeFocus.textContent = "";
    elements.caseSkillCommonMiss.textContent = "";
    setGlossaryVisibility(false);
    renderSkillContextExpansion(false);
    return;
  }

  const visual = getSkillVisual(skill.id);
  elements.caseSkillContext.dataset.skillId = skill.id;
  applyVisualProperties(elements.caseSkillContext, visual);
  elements.caseSkillContext.hidden = false;
  elements.caseSkillContext.classList.remove("is-hidden");
  elements.caseSkillName.textContent = skill.name ?? "";
  renderGlossaryBlock(elements.caseSkillMarker, skill.marker ?? "", languageId);
  const summaryText = skill.summary ?? skill.description ?? "";
  renderGlossaryParagraphs(elements.caseSkillSummary, summaryText, languageId);
  renderGlossaryBlock(elements.caseSkillAim, skill.aim ?? "", languageId);
  renderGlossaryBlock(elements.caseSkillPracticeFocus, skill.practiceFocus ?? "", languageId);
  renderGlossaryBlock(elements.caseSkillCommonMiss, skill.commonMiss ?? "", languageId);
  setGlossaryVisibility(true);
  renderSkillContextExpansion(true);
}

function updateLockedBanner() {
  if (!elements.lockedBanner) return;
  const strings = getUIStrings();
  const hidden = hasProAccess();
  elements.lockedBanner.hidden = hidden;
  elements.lockedBanner.classList.toggle("is-hidden", hidden);
  elements.lockedBanner.textContent = strings.lockedBanner ?? "";
}

function showPaywall(caseItem) {
  if (!elements.paywallOverlay || !elements.paywallMessage) return;
  const strings = getUIStrings();
  const caseLabel = caseItem?.label ? `: ${caseItem.label}` : "";
  elements.paywallMessage.textContent = `${strings.paywallMessage ?? ""}${caseLabel}`;
  elements.paywallOverlay.classList.remove("is-hidden");
  elements.paywallOverlay.hidden = false;
  if (elements.unlockStatus) {
    elements.unlockStatus.textContent = "";
  }
  if (elements.unlockCodeInput) {
    elements.unlockCodeInput.focus();
  }
}

function hidePaywall() {
  if (!elements.paywallOverlay) return;
  elements.paywallOverlay.classList.add("is-hidden");
  elements.paywallOverlay.hidden = true;
}

function ensureOrderForCase() {
  const caseData = getCurrentCase();
  if (!caseData) {
    state.order = [];
    state.orderShuffled = false;
    return;
  }

  const statements = caseData.statements ?? [];
  const existing = state.order;
  const existingIds = Array.isArray(existing) ? existing.map((entry) => entry?.id) : [];
  const statementIds = statements.map((entry) => entry?.id);
  const matchesLibraryOrder = existingIds.length === statementIds.length
    && existingIds.every((id, index) => id === statementIds[index]);
  if (state.orderShuffled) {
    if (!Array.isArray(existing) || existing.length !== statements.length) {
      state.order = shuffleArray(statements);
      state.index = 0;
    }
    return;
  }
  if (!matchesLibraryOrder) {
    state.order = [...statements];
    state.index = Math.min(state.index, Math.max(statements.length - 1, 0));
  }
}

function finishCompletedStatementRound() {
  if (state.authUser) {
    openRoundRatingPrompt({ markCurrent: false });
  } else {
    savePracticeSession();
    navigateBackToCaseSelection();
  }
}

function isLastActiveStatement() {
  const statements = getActiveStatements();
  return statements.length > 0 && state.index >= statements.length - 1;
}

function updateNextButtonCopy() {
  if (!elements.nextButton) return;
  const strings = getUIStrings();
  const isLast = isLastActiveStatement();
  elements.nextButton.textContent = isLast
    ? strings.finishRound ?? "Finish"
    : strings.next;
  elements.nextButton.setAttribute(
    "aria-label",
    isLast
      ? strings.finishRoundAria ?? strings.finishRound ?? "Finish round"
      : strings.nextAria ?? strings.next
  );
}

function showCaseBrief() {
  state.view = "brief";
  if (elements.caseBriefScreen) {
    elements.caseBriefScreen.classList.remove("is-hidden");
    elements.caseBriefScreen.hidden = false;
  }
  if (elements.statementWorkspace) {
    elements.statementWorkspace.classList.add("is-hidden");
    elements.statementWorkspace.hidden = true;
  }
  savePracticeSession();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function showStatements() {
  const activeCase = getCurrentCase();
  if (!activeCase) return;
  if (isCaseLocked(activeCase)) {
    showPaywall(activeCase);
    return;
  }
  state.view = "statements";
  if (elements.caseBriefScreen) {
    elements.caseBriefScreen.classList.add("is-hidden");
    elements.caseBriefScreen.hidden = true;
  }
  if (elements.statementWorkspace) {
    elements.statementWorkspace.classList.remove("is-hidden");
    elements.statementWorkspace.hidden = false;
  }
  ensureOrderForCase();
  renderActiveStatement();
  savePracticeSession();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function hydratePracticeView() {
  const strings = getUIStrings();
  const skill = getCurrentSkill();
  const caseData = getCurrentCase();

  if (!skill || !caseData) {
    elements.practiceSkill.textContent = "";
    elements.caseName.textContent = "";
    if (elements.caseTeaser) {
      elements.caseTeaser.textContent = "";
    }
    if (elements.statementCaseName) {
      elements.statementCaseName.textContent = "";
    }
    elements.caseSchema.textContent = "";
    if (elements.caseCorePain) {
      elements.caseCorePain.textContent = "";
    }
    if (elements.caseCorePainItem) {
      elements.caseCorePainItem.hidden = true;
    }
    if (elements.casePracticeEdge) {
      elements.casePracticeEdge.textContent = "";
    }
    elements.caseStyle.textContent = "";
    if (elements.caseVoice) {
      elements.caseVoice.textContent = "";
    }
    elements.statementText.textContent = strings.emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    showCaseBrief();
    updateFeedbackAvailability();
    return;
  }

  const locked = isCaseLocked(caseData);
  if (locked) {
    elements.statementText.textContent = strings.lockedPlaceholder ?? strings.emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    showCaseBrief();
    showPaywall(caseData);
    updateFeedbackAvailability();
    return;
  }

  applyVisualProperties(sections.practice, getCaseVisual(skill.id, caseData.difficulty));
  elements.practiceSkill.textContent = skill.name;
  elements.caseName.textContent = caseData.label;
  if (elements.caseTeaser) {
    elements.caseTeaser.textContent = caseData.teaser ?? "";
  }
  if (elements.statementCaseName) {
    elements.statementCaseName.textContent = caseData.label;
  }
  elements.caseSchema.textContent = caseData.schema ?? "";
  if (elements.caseCorePain) {
    const corePain = (caseData.corePain ?? "").trim();
    elements.caseCorePain.textContent = corePain;
    if (elements.caseCorePainItem) {
      elements.caseCorePainItem.hidden = !corePain;
    }
  }
  if (elements.casePracticeEdge) {
    elements.casePracticeEdge.textContent = caseData.practiceEdge ?? "";
  }
  elements.caseStyle.textContent = caseData.style ?? "";
  if (elements.caseVoice) {
    elements.caseVoice.textContent = (caseData.voice ?? caseData.history ?? "").trim();
  }

  ensureOrderForCase();
  renderActiveStatement();

  if (state.view === "statements") {
    showStatements();
  } else {
    showCaseBrief();
  }
}

function renderActiveStatement() {
  const strings = getUIStrings();
  const statements = getActiveStatements();
  if (!statements.length) {
    state.currentStatement = null;
    elements.statementText.textContent = strings.statementFallback;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    setDefaultFeedbackReason(state.languageId ?? "en", { force: true });
    resetSuggestionVisibility();
    updateFeedbackAvailability();
    updateNextButtonCopy();
    updateRatingPanel();
    return;
  }

  const currentEntry = getActiveStatement();
  state.currentStatement = currentEntry;
  elements.statementText.textContent = currentEntry?.text ?? strings.statementFallback;
  const completedCount = getCompletedCountForActiveStatements();
  const counter = formatCounter(state.index + 1, statements.length);
  elements.statementCounter.textContent = completedCount > 0
    ? `${counter} · ${completedCount} ${strings.completedShort ?? "done"}`
    : counter;
  if (elements.suggestionText) {
    elements.suggestionText.textContent = currentEntry?.suggestion ?? "";
  }
  setDefaultFeedbackReason(state.languageId ?? "en", { force: true });
  resetSuggestionVisibility();
  updateFeedbackAvailability();
  updateNextButtonCopy();
  updateRatingPanel();
}

function formatCounter(current, total) {
  const strings = getUIStrings();
  return (strings.counterPattern ?? "{current} of {total}")
    .replace("{current}", String(current))
    .replace("{total}", String(total));
}

function getActiveStatements() {
  return Array.isArray(state.order) ? state.order : [];
}

function getActiveStatement() {
  const statements = getActiveStatements();
  return statements[state.index] ?? null;
}

function setRatingStatus(message) {
  if (!elements.ratingStatus) return;
  elements.ratingStatus.textContent = message ?? "";
}

function getCompletedCountForActiveStatements() {
  const completed = state.completedStatementIds ?? new Set();
  return getActiveStatements().filter((statement) => completed.has(statement?.id)).length;
}

function getCompletedActiveStatementIds() {
  const completed = state.completedStatementIds ?? new Set();
  return getActiveStatements()
    .filter((statement) => completed.has(statement?.id))
    .map((statement) => statement.id);
}

function getStatementById(statementId) {
  return getActiveStatements().find((statement) => statement?.id === statementId) ?? null;
}

function getRatingStatementIds() {
  return Array.isArray(state.ratingCompletedStatementIds)
    ? state.ratingCompletedStatementIds.filter(Boolean)
    : [];
}

function getRoundCriteriaTags(statementIds) {
  const seen = new Set();
  statementIds.forEach((statementId) => {
    const statement = getStatementById(statementId);
    const tags = Array.isArray(statement?.criteriaTags) ? statement.criteriaTags : [];
    tags.forEach((tag) => {
      if (tag) seen.add(tag);
    });
  });
  return Array.from(seen);
}

function formatRatingItemCount(count) {
  const strings = getUIStrings();
  const template = count === 1
    ? strings.ratingItemCountSingular ?? "{count} item practiced"
    : strings.ratingItemCountPlural ?? "{count} items practiced";
  return template.replace("{count}", String(count));
}

function getActiveRatingSource() {
  const target = getActiveTarget();
  if (!target) return "self";
  return getTargetKind(target) === "self" ? "self" : "observer";
}

function updateRatingScoreButtons() {
  const buttons = elements.ratingScoreOptions?.querySelectorAll("[data-rating-score]") ?? [];
  buttons.forEach((button) => {
    const score = Number(button.dataset.ratingScore);
    const selected = score === state.ratingScore;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

function updateRatingScaleCopy() {
  const strings = getUIStrings();
  if (elements.ratingScoreGuide) {
    elements.ratingScoreGuide.textContent =
      strings.ratingScoreGuide ?? "1 = Not yet mastered · 5 = Mastered confidently";
  }
}

function updateRatingOptionAvailability(canSave) {
  const strings = getUIStrings();
  const buttons = elements.ratingScoreOptions?.querySelectorAll("[data-rating-score]") ?? [];
  const label = strings.ratingScoreLabel ?? "Round score";
  buttons.forEach((button) => {
    button.disabled = !canSave;
    button.setAttribute("aria-label", `${label} ${button.dataset.ratingScore}`);
  });
}

function hasCompleteRatingScores() {
  return Boolean(state.ratingScore);
}

function selectRatingScore(score) {
  const normalizedScore = Number(score);
  if (!Number.isInteger(normalizedScore) || normalizedScore < 1 || normalizedScore > 5) return;
  state.ratingScore = normalizedScore;
  updateRatingPanel();
}

function resetRatingScores() {
  state.ratingScore = null;
}

function updateRatingPanel() {
  if (!elements.ratingPanel || !elements.ratingOverlay) return;
  const strings = getUIStrings();
  const activeCase = getCurrentCase();
  const statementIds = getRatingStatementIds();
  const visible = Boolean(state.ratingVisible && state.skillId && state.caseId && statementIds.length > 0);

  elements.ratingOverlay.hidden = !visible;
  elements.ratingOverlay.classList.toggle("is-hidden", !visible);
  elements.ratingPanel.hidden = !visible;
  elements.ratingPanel.classList.toggle("is-hidden", !visible);
  if (!visible) {
    setRatingStatus("");
    return;
  }

  const target = getActiveTarget();
  const signedIn = Boolean(state.authUser);
  const configured = isSupabaseReady();
  const saved = state.ratingSaved;
  const canSave = configured && signedIn && Boolean(target) && !state.ratingSaving && !saved;
  const source = getActiveRatingSource();

  if (elements.ratingEyebrow) {
    elements.ratingEyebrow.textContent = strings.ratingEyebrow ?? "Finish round";
  }
  if (elements.ratingTitle) {
    elements.ratingTitle.textContent = source === "observer"
      ? strings.ratingTitleObserver ?? "How well did the active therapist master this round?"
      : strings.ratingTitleSelf ?? "How well did you master this round?";
  }
  if (elements.ratingDescription) {
    elements.ratingDescription.textContent = "";
    elements.ratingDescription.hidden = true;
  }
  if (elements.ratingSummary) {
    const activeSkill = getCurrentSkill();
    const skillLabel = activeSkill?.name ? `${activeSkill.name} · ` : "";
    const caseLabel = activeCase?.label ? ` · ${activeCase.label}` : "";
    elements.ratingSummary.textContent = `${skillLabel}${formatRatingItemCount(statementIds.length)}${caseLabel}`;
  }
  if (elements.ratingTarget) {
    if (!signedIn) {
      elements.ratingTarget.textContent = strings.ratingTargetSignedOut ?? "Sign in to save";
    } else {
      const targetName = target
        ? getTargetDisplayName(target) || strings.meLabel || "Me"
        : strings.noActiveTherapist ?? "No active therapist";
      elements.ratingTarget.textContent = `${strings.savingForPrefix ?? "Saving:"} ${targetName}`;
    }
  }
  if (elements.ratingSubmit) {
    elements.ratingSubmit.textContent = strings.ratingSubmit ?? "Save";
    elements.ratingSubmit.disabled = !canSave || !hasCompleteRatingScores();
  }
  if (elements.ratingSkip) {
    elements.ratingSkip.textContent = strings.ratingSkip ?? "Skip";
    elements.ratingSkip.disabled = state.ratingSaving;
  }
  updateRatingScaleCopy();
  updateRatingOptionAvailability(canSave);
  updateRatingScoreButtons();

  if (saved) {
    setRatingStatus(strings.ratingSaved ?? "Saved.");
  } else if (!configured) {
    setRatingStatus(strings.ratingConfigMissing ?? "Supabase Auth is not configured.");
  } else if (!signedIn) {
    setRatingStatus(strings.ratingSignInHint ?? "Sign in to save ratings, or continue without saving.");
  } else if (!target) {
    setRatingStatus(strings.ratingNoTarget ?? "Choose an active therapist before saving.");
  } else {
    setRatingStatus("");
  }
}

function shouldPromptForRoundRating() {
  return document.body.dataset.section === "practice"
    && state.view === "statements"
    && getActiveStatements().length > 0;
}

function openRoundRatingPrompt({ markCurrent = true } = {}) {
  if (markCurrent) {
    markCurrentStatementCompleted();
  }
  const statementIds = getCompletedActiveStatementIds();
  if (!statementIds.length) {
    navigateBackToCaseSelection();
    return;
  }
  state.ratingCompletedStatementIds = statementIds;
  resetRatingScores();
  state.ratingSaved = false;
  state.ratingVisible = true;
  savePracticeSession();
  updateRatingPanel();
}

function closeRoundRatingPrompt() {
  state.ratingVisible = false;
  resetRatingScores();
  state.ratingCompletedStatementIds = [];
  state.ratingSaved = false;
  updateRatingPanel();
}

function finishRoundWithoutRating() {
  closeRoundRatingPrompt();
  navigateBackToCaseSelection();
}

function updateSuggestionUI() {
  if (!elements.suggestionPanel || !elements.suggestionToggle || !elements.suggestionText) return;
  const strings = getUIStrings();
  const suggestion = (elements.suggestionText.textContent ?? "").trim();
  const hasSuggestion = suggestion.length > 0;

  elements.suggestionPanel.hidden = !hasSuggestion;
  elements.suggestionToggle.disabled = !hasSuggestion;

  if (!hasSuggestion) {
    elements.suggestionToggle.textContent = strings.showSuggestion;
    elements.suggestionToggle.setAttribute(
      "aria-label",
      strings.suggestionHiddenLabel ?? strings.showSuggestion
    );
    elements.suggestionText.hidden = true;
    updateRatingPanel();
    return;
  }

  const visible = state.suggestionVisible;
  elements.suggestionToggle.textContent = visible ? strings.hideSuggestion : strings.showSuggestion;
  elements.suggestionToggle.setAttribute(
    "aria-label",
    visible ? strings.suggestionShownLabel ?? strings.hideSuggestion : strings.suggestionHiddenLabel ?? strings.showSuggestion
  );
  elements.suggestionText.hidden = !visible;
  updateRatingPanel();
}

function resetSuggestionVisibility() {
  state.suggestionVisible = false;
  updateSuggestionUI();
}

function setFeedbackStatus(message) {
  if (!elements.feedbackStatus) return;
  elements.feedbackStatus.textContent = message ?? "";
}

function getStableStatementOrderIndex(statement) {
  if (Number.isInteger(statement?.orderIndex)) {
    return statement.orderIndex;
  }
  const match = String(statement?.id ?? "").match(/_(\d{2})$/);
  if (match) {
    return Number(match[1]) - 1;
  }
  return state.index;
}

function updateFeedbackVisibility() {
  if (!elements.feedbackForm || !elements.feedbackToggle) return;
  const strings = getUIStrings();
  const collapsed = state.feedbackCollapsed;
  elements.feedbackForm.classList.toggle("is-hidden", collapsed);
  elements.feedbackToggle.textContent = collapsed
    ? strings.feedbackToggleShow ?? "Show form"
    : strings.feedbackToggleHide ?? "Hide form";
}

function getDefaultFeedbackReason(languageId = state.languageId ?? "en") {
  return languageId === "en" ? "quality" : "translation";
}

function setDefaultFeedbackReason(languageId = state.languageId ?? "en", { force = false } = {}) {
  if (!elements.feedbackReason) return;
  const defaultReason = getDefaultFeedbackReason(languageId);
  const hasOption = Array.from(elements.feedbackReason.options)
    .some((option) => option.value === defaultReason);
  if (hasOption && (force || !elements.feedbackReason.value)) {
    elements.feedbackReason.value = defaultReason;
  }
}

function updateFeedbackAvailability() {
  if (!elements.feedbackForm || !elements.feedbackSubmit) return;
  const strings = getUIStrings();
  const hasStatement = Boolean(state.currentStatement && state.caseId && state.skillId);
  const configured = isSupabaseReady();
  elements.feedbackSubmit.disabled = !hasStatement || !configured || state.unlocking;
  if (!configured) {
    setFeedbackStatus(strings.feedbackConfigMissing ?? "");
  } else if (!hasStatement) {
    setFeedbackStatus(strings.feedbackUnavailable ?? "");
  } else {
    setFeedbackStatus("");
  }
}

function shuffleArray(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleCurrentStatements() {
  const caseData = getCurrentCase();
  if (!caseData) return;
  const statements = caseData.statements ?? [];
  if (!statements.length) return;
  state.order = shuffleArray(statements);
  state.orderShuffled = true;
  state.index = 0;
  state.completedStatementIds = new Set();
  renderActiveStatement();
  savePracticeSession();
}

function showNextStatement() {
  const statements = getActiveStatements();
  if (!statements.length) return;
  markCurrentStatementCompleted();
  if (state.index >= statements.length - 1) {
    finishCompletedStatementRound();
    return;
  }
  state.index += 1;
  renderActiveStatement();
  savePracticeSession();
}

function showPreviousStatement() {
  const statements = getActiveStatements();
  if (!statements.length) return;
  state.index = (state.index - 1 + statements.length) % statements.length;
  renderActiveStatement();
  savePracticeSession();
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();
  const strings = getUIStrings();
  if (!state.currentStatement || !state.caseId || !state.skillId) {
    setFeedbackStatus(strings.feedbackUnavailable ?? "");
    return;
  }
  if (!isSupabaseReady()) {
    setFeedbackStatus(strings.feedbackConfigMissing ?? "");
    return;
  }
  const reason = elements.feedbackReason?.value ?? "";
  const details = elements.feedbackDetails?.value ?? "";
  const payload = {
    statement_id: state.currentStatement.id,
    statement_text: state.currentStatement.text ?? "",
    suggestion_text: state.currentStatement.suggestion ?? "",
    content_revision: state.currentStatement.revision ?? "",
    track: state.currentStatement.track ?? "",
    skill_id: state.skillId,
    case_id: state.caseId,
    language_id: state.languageId ?? "en",
    order_index: getStableStatementOrderIndex(state.currentStatement),
    reason,
    details,
    user_agent: navigator.userAgent ?? "",
    created_at: new Date().toISOString()
  };

  if (elements.feedbackSubmit) {
    elements.feedbackSubmit.disabled = true;
  }
  setFeedbackStatus(strings.feedbackSending ?? "");
  try {
    await submitFeedback(payload);
    setFeedbackStatus(strings.feedbackSuccess ?? "");
    if (elements.feedbackForm) {
      elements.feedbackForm.reset();
      setDefaultFeedbackReason(state.languageId ?? "en", { force: true });
    }
  } catch (err) {
    const msg = err?.message === "Missing Supabase configuration"
      ? strings.feedbackConfigMissing ?? err.message
      : strings.feedbackError ?? err.message ?? "";
    setFeedbackStatus(msg);
  } finally {
    if (elements.feedbackSubmit) {
      elements.feedbackSubmit.disabled = false;
    }
  }
}

async function handleRatingSubmit() {
  const strings = getUIStrings();
  const target = getActiveTarget();
  const activeCase = getCurrentCase();
  const statementIds = getRatingStatementIds();
  if (!state.skillId || !state.caseId || !activeCase || !statementIds.length) {
    setRatingStatus(strings.ratingUnavailable ?? "No active round to rate.");
    return;
  }
  if (!hasCompleteRatingScores()) {
    setRatingStatus(strings.ratingMissingScore ?? "Choose a score first.");
    return;
  }
  if (!state.authUser || !target) {
    setRatingStatus(strings.ratingSignInHint ?? "Sign in to save ratings, or continue without saving.");
    return;
  }

  state.ratingSaving = true;
  updateRatingPanel();
  setRatingStatus(strings.ratingSaving ?? "Saving rating...");
  try {
    await submitPracticeRating({
      therapistUserId: getTargetUserId(target),
      source: getActiveRatingSource(),
      languageId: state.languageId ?? "en",
      skillId: state.skillId,
      caseId: state.caseId,
      statementId: null,
      statementIndex: null,
      difficulty: activeCase.difficulty ?? "",
      score: state.ratingScore,
      criteriaTags: getRoundCriteriaTags(statementIds),
      contentRevision: CONTENT_REVISION,
      ratingScope: "series",
      completedStatementIds: statementIds,
      itemCount: statementIds.length
    });
    state.ratingSaved = true;
    state.selfRatingsLoaded = false;
    savePracticeSession();
    closeRoundRatingPrompt();
    navigateBackToCaseSelection();
  } catch (err) {
    setRatingStatus(err?.message ?? strings.ratingError ?? "Unable to save rating.");
  } finally {
    state.ratingSaving = false;
    updateRatingPanel();
  }
}

function setUnlockStatus(element, message) {
  if (element) {
    element.textContent = message ?? "";
  }
}

async function redeemAccessFromInput({
  codeInput,
  statusElement,
  closePaywallOnSuccess = false
} = {}) {
  if (state.unlocking) return;
  const strings = getUIStrings();
  const languageId = state.languageId ?? "en";
  if (!isSupabaseReady()) {
    setUnlockStatus(statusElement, strings.unlockConfigMissing ?? "");
    return;
  }
  const code = (codeInput?.value ?? "").trim();
  if (!code) {
    setUnlockStatus(statusElement, strings.unlockMissing ?? "");
    return;
  }
  state.unlocking = true;
  renderAccessUI();
  setUnlockStatus(statusElement, strings.unlockWorking ?? "");
  try {
    const result = await redeemAccessCode(code);
    logAccessCodeAttempt({ code, status: "success", languageId }).catch(() => {});
    saveAccessLevel(result.accessLevel ?? "pro", result.expiresAt ?? null);
    setUnlockStatus(statusElement, strings.unlockSuccess ?? "");
    if (codeInput) {
      codeInput.value = "";
    }
    if (closePaywallOnSuccess) {
      hidePaywall();
    }
    renderCaseOptions();
    hydratePracticeView();
  } catch (err) {
    const status =
      err?.message === "invalid_code" || err?.message === "expired_code" ? "invalid" : "error";
    logAccessCodeAttempt({ code, status, languageId }).catch(() => {});
    let msg = strings.unlockError ?? err.message ?? "";
    if (err?.message === "expired_code") {
      msg = strings.unlockExpired ?? strings.unlockInvalid ?? "";
    } else if (err?.message === "invalid_code") {
      msg = strings.unlockInvalid ?? "";
    }
    setUnlockStatus(statusElement, msg);
  } finally {
    state.unlocking = false;
    renderAccessUI();
    updateFeedbackAvailability();
  }
}

async function handleUnlockSubmit(event) {
  event.preventDefault();
  await redeemAccessFromInput({
    codeInput: elements.unlockCodeInput,
    statusElement: elements.unlockStatus,
    closePaywallOnSuccess: true
  });
}

async function handleAccountUnlockSubmit(event) {
  event.preventDefault();
  await redeemAccessFromInput({
    codeInput: elements.accountUnlockCode,
    statusElement: elements.accountUnlockStatus,
    closePaywallOnSuccess: false
  });
}

function handleLanguageSelection(languageId) {
  state.languageId = languageId;
  state.skillId = null;
  state.caseId = null;
  state.order = [];
  state.orderShuffled = false;
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;
  state.completedStatementIds = new Set();
  state.skillContextExpanded = false;

  applyLanguageStrings(languageId);
  highlightLanguageSelection(languageId);
  renderSkillOptions();
  updateCaseSkillSummary(null);
  updateCaseSkillContext(null);
  elements.statementText.textContent = getUIStrings(languageId).emptyPrompt;
  elements.statementCounter.textContent = "";
  if (elements.suggestionText) {
    elements.suggestionText.textContent = "";
  }
  setDefaultFeedbackReason(languageId, { force: true });
  resetSuggestionVisibility();
  updateFeedbackAvailability();
  savePracticeSession();
  showSection("skill");
}

function handleSkillSelection(skillId) {
  state.skillId = skillId;
  state.caseId = null;
  state.order = [];
  state.orderShuffled = false;
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;
  state.completedStatementIds = new Set();
  state.skillContextExpanded = false;

  highlightSkillSelection(skillId);
  renderCaseOptions();
  elements.statementText.textContent = getUIStrings().emptyPrompt;
  elements.statementCounter.textContent = "";
  if (elements.suggestionText) {
    elements.suggestionText.textContent = "";
  }
  resetSuggestionVisibility();
  updateFeedbackAvailability();
  savePracticeSession();
  showSection("case");
}

function handleOpenSkillGuide() {
  const skill = getCurrentSkill();
  if (!skill) return;
  state.skillContextExpanded = true;
  updateCaseSkillContext(skill);
  showSection("skillGuide");
}

function handleCaseSelection(caseId) {
  const skill = getCurrentSkill();
  const targetCase = skill?.cases.find((caseItem) => caseItem.id === caseId);
  if (isCaseLocked(targetCase)) {
    showPaywall(targetCase);
    return;
  }

  state.caseId = caseId;
  state.order = [];
  state.orderShuffled = false;
  state.index = 0;
  state.view = "brief";
  state.currentStatement = null;
  state.completedStatementIds = new Set();

  highlightCaseSelection(caseId);
  hydratePracticeView();
  savePracticeSession();
  showSection("practice");
}

function handleSkillContextToggle() {
  if (!getCurrentSkill()) return;
  state.skillContextExpanded = !state.skillContextExpanded;
  renderSkillContextExpansion(true);
}

function navigateBackToCaseSelection() {
  state.order = [];
  state.orderShuffled = false;
  state.index = 0;
  state.currentStatement = null;
  state.completedStatementIds = new Set();
  highlightCaseSelection(state.caseId);
  renderCaseOptions();
  if (elements.suggestionText) {
    elements.suggestionText.textContent = "";
  }
  resetSuggestionVisibility();
  state.view = "brief";
  hideGlossaryCard();
  updateCaseSkillContext(getCurrentSkill());
  updateCaseSkillSummary(getCurrentSkill());
  updateFeedbackAvailability();
  showSection("case");
  savePracticeSession();
}

function handleBackNavigation(targetKey) {
  if (targetKey === "language") {
    state.skillId = null;
    state.caseId = null;
    state.order = [];
    state.orderShuffled = false;
    state.index = 0;
    state.view = "brief";
    state.currentStatement = null;
    state.completedStatementIds = new Set();
    elements.statementText.textContent = getUIStrings().emptyPrompt;
    elements.statementCounter.textContent = "";
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    highlightSkillSelection(null);
    highlightCaseSelection(null);
    updateCaseSkillSummary(null);
    updateCaseSkillContext(null);
    updateFeedbackAvailability();
    showSection("language");
    return;
  }

  if (targetKey === "skill") {
    state.caseId = null;
    state.order = [];
    state.orderShuffled = false;
    state.index = 0;
    state.currentStatement = null;
    state.completedStatementIds = new Set();
    highlightCaseSelection(null);
    renderCaseOptions();
    if (elements.suggestionText) {
      elements.suggestionText.textContent = "";
    }
    resetSuggestionVisibility();
    state.view = "brief";
    updateCaseSkillContext(getCurrentSkill());
    updateCaseSkillSummary(getCurrentSkill());
    updateFeedbackAvailability();
    showSection("skill");
    return;
  }

  if (targetKey === "case") {
    if (shouldPromptForRoundRating()) {
      openRoundRatingPrompt();
      return;
    }
    navigateBackToCaseSelection();
  }
}

function registerEventListeners() {
  if (elements.accountButton) {
    elements.accountButton.addEventListener("click", showAccountPanel);
  }
  if (elements.activeTargetButton) {
    elements.activeTargetButton.addEventListener("click", showAccountPanel);
  }
  if (elements.closeAccountButton) {
    elements.closeAccountButton.addEventListener("click", hideAccountPanel);
  }
  if (elements.accountOverlay) {
    elements.accountOverlay.addEventListener("click", (event) => {
      if (event.target === elements.accountOverlay) {
        hideAccountPanel();
      }
    });
  }
  if (elements.resumeButton) {
    elements.resumeButton.addEventListener("click", () => applyPracticeSession(state.resumeSession));
  }
  if (elements.resumeClear) {
    elements.resumeClear.addEventListener("click", clearPracticeSession);
  }

  if (elements.startPracticeButton) {
    elements.startPracticeButton.addEventListener("click", showStatements);
  }

  if (elements.viewCaseBriefButton) {
    elements.viewCaseBriefButton.addEventListener("click", showCaseBrief);
  }

  if (elements.nextButton) {
    elements.nextButton.addEventListener("click", showNextStatement);
  }
  if (elements.shuffleButton) {
    elements.shuffleButton.addEventListener("click", shuffleCurrentStatements);
  }

  if (elements.languageBackButton) {
    elements.languageBackButton.addEventListener("click", () => handleBackNavigation("language"));
  }
  if (elements.skillsBackButton) {
    elements.skillsBackButton.addEventListener("click", () => handleBackNavigation("skill"));
  }
  if (elements.casesBackButton) {
    elements.casesBackButton.addEventListener("click", () => handleBackNavigation("case"));
  }

  if (elements.caseSkillToggle) {
    elements.caseSkillToggle.addEventListener("click", handleSkillContextToggle);
  }

  if (elements.openSkillGuideButton) {
    elements.openSkillGuideButton.addEventListener("click", handleOpenSkillGuide);
  }

  if (elements.skillGuideBackButton) {
    elements.skillGuideBackButton.addEventListener("click", () => handleBackNavigation("case"));
  }

  if (elements.caseSkillBody) {
    elements.caseSkillBody.addEventListener("click", (event) => {
      const chip = event.target.closest(".glossary-chip");
      if (!chip) return;
      showGlossaryDefinition(chip.dataset.termId, chip);
    });
  }

  if (elements.glossaryClose) {
    elements.glossaryClose.addEventListener("click", hideGlossaryCard);
  }

  window.addEventListener("resize", refreshActiveGlossaryDefinition, { passive: true });
  window.addEventListener("scroll", refreshActiveGlossaryDefinition, { passive: true });

  if (elements.statementPanel) {
    let touchStartX = null;
    const swipeThreshold = 45;

    elements.statementPanel.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
    });

    elements.statementPanel.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX;
      if (Math.abs(deltaX) < swipeThreshold) {
        touchStartX = null;
        return;
      }
      if (deltaX < 0) {
        showNextStatement();
      } else {
        showPreviousStatement();
      }
      touchStartX = null;
    });
  }

  if (elements.suggestionToggle) {
    elements.suggestionToggle.addEventListener("click", () => {
      if (elements.suggestionToggle.disabled) return;
      state.suggestionVisible = !state.suggestionVisible;
      updateSuggestionUI();
    });
  }

  if (elements.ratingScoreOptions) {
    elements.ratingScoreOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-rating-score]");
      if (!button || button.disabled) return;
      selectRatingScore(button.dataset.ratingScore);
    });
  }
  if (elements.ratingSubmit) {
    elements.ratingSubmit.addEventListener("click", handleRatingSubmit);
  }
  if (elements.ratingSkip) {
    elements.ratingSkip.addEventListener("click", finishRoundWithoutRating);
  }

  if (elements.feedbackForm) {
    elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  }
  if (elements.feedbackToggle) {
    elements.feedbackToggle.addEventListener("click", () => {
      state.feedbackCollapsed = !state.feedbackCollapsed;
      updateFeedbackVisibility();
    });
  }

  if (elements.unlockForm) {
    elements.unlockForm.addEventListener("submit", handleUnlockSubmit);
  }
  if (elements.accountUnlockForm) {
    elements.accountUnlockForm.addEventListener("submit", handleAccountUnlockSubmit);
  }

  if (elements.closePaywallButton) {
    elements.closePaywallButton.addEventListener("click", hidePaywall);
  }

  if (elements.authSigninForm) {
    elements.authSigninForm.addEventListener("submit", handleMagicLinkSubmit);
  }
  if (elements.profileForm) {
    elements.profileForm.addEventListener("submit", handleProfileSubmit);
  }
  if (elements.selfChartRefresh) {
    elements.selfChartRefresh.addEventListener("click", () => {
      loadSelfRatings({ force: true }).catch(() => {});
    });
  }
  if (elements.authSignout) {
    elements.authSignout.addEventListener("click", handleSignOut);
  }
  if (elements.activeTargetSelect) {
    elements.activeTargetSelect.addEventListener("change", () => {
      state.activeTargetId = elements.activeTargetSelect.value;
      saveActiveTargetId(state.activeTargetId);
      renderAuthUI();
    });
  }
  if (elements.pairingCreateButton) {
    elements.pairingCreateButton.addEventListener("click", handleCreatePairingInvite);
  }
  if (elements.pairingCopy) {
    elements.pairingCopy.addEventListener("click", copyPairingCode);
  }
  if (elements.pairingShare) {
    elements.pairingShare.addEventListener("click", sharePairingCode);
  }
  if (elements.pairingAcceptForm) {
    elements.pairingAcceptForm.addEventListener("submit", handleAcceptPairingInvite);
  }
  if (elements.partnerList) {
    elements.partnerList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-partnership-id]");
      if (!button) return;
      handleRevokePartnership(button.dataset.partnershipId);
    });
  }
}

function initialize() {
  const accessState = loadAccessState();
  const savedSession = loadPracticeSession();
  state.accessLevel = accessState.accessLevel;
  state.accessExpiresAt = accessState.accessExpiresAt;
  state.resumeSession = savedSession;
  state.languageId = savedSession?.languageId ?? null;
  const initialLanguageId = state.languageId ?? "en";
  renderAppVersion();
  applyLanguageStrings(initialLanguageId);
  renderLanguageOptions();
  highlightLanguageSelection(state.languageId);
  renderResumeCard();
  elements.statementText.textContent = getUIStrings(initialLanguageId).emptyPrompt;
  elements.statementCounter.textContent = "";
  resetSuggestionVisibility();
  updateLockedBanner();
  updateFeedbackAvailability();
  renderAuthUI();
  registerEventListeners();
  initializeAuth();
  showSection("language");
}

initialize();

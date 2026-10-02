import test from "node:test";
import assert from "node:assert/strict";

import { LANGUAGE_ORDER, LANGUAGE_UI } from "../src/data/translations.js";
import {
  PRACTICE_MODES,
  TRIAD_PHASES,
  canRevealTriadSuggestion,
  getNextTriadPhase,
  isTriadRoundFinished,
  normalizeTriadSessionFields,
  restoreStatementsById,
  sampleTriadStatements
} from "../src/js/triadProtocol.js";

test("samples three unique statements without mutating the source", () => {
  const statements = Array.from({ length: 10 }, (_, index) => ({ id: `item-${index + 1}` }));
  const sampled = sampleTriadStatements(statements, 3, () => 0.25);
  assert.equal(sampled.length, 3);
  assert.equal(new Set(sampled.map((item) => item.id)).size, 3);
  assert.deepEqual(statements.map((item) => item.id), Array.from({ length: 10 }, (_, index) => `item-${index + 1}`));
});

test("restores the saved triad order and ignores missing ids", () => {
  const statements = [{ id: "a" }, { id: "b" }, { id: "c" }];
  assert.deepEqual(restoreStatementsById(statements, ["c", "missing", "a"]), [statements[2], statements[0]]);
});

test("migrates version-one sessions to individual practice", () => {
  assert.deepEqual(normalizeTriadSessionFields({ practiceMode: "triad" }, 1), {
    practiceMode: PRACTICE_MODES.INDIVIDUAL,
    roundStatementIds: [],
    triadPhase: TRIAD_PHASES.FIRST_ATTEMPT,
    skippedStatementIds: []
  });
});

test("normalizes version-two triad session fields", () => {
  assert.deepEqual(normalizeTriadSessionFields({
    practiceMode: "triad",
    roundStatementIds: ["a", "a", "b"],
    triadPhase: "observer_feedback",
    skippedStatementIds: ["b"]
  }, 2), {
    practiceMode: PRACTICE_MODES.TRIAD,
    roundStatementIds: ["a", "b"],
    triadPhase: TRIAD_PHASES.OBSERVER_FEEDBACK,
    skippedStatementIds: ["b"]
  });
});

test("requires the full feedback sequence before retry", () => {
  assert.equal(getNextTriadPhase(TRIAD_PHASES.FIRST_ATTEMPT), TRIAD_PHASES.CLIENT_FEEDBACK);
  assert.equal(getNextTriadPhase(TRIAD_PHASES.CLIENT_FEEDBACK), TRIAD_PHASES.OBSERVER_FEEDBACK);
  assert.equal(getNextTriadPhase(TRIAD_PHASES.OBSERVER_FEEDBACK), TRIAD_PHASES.RETRY);
  assert.equal(canRevealTriadSuggestion(TRIAD_PHASES.OBSERVER_FEEDBACK), false);
  assert.equal(canRevealTriadSuggestion(TRIAD_PHASES.RETRY), true);
});

test("counts completed and passed items as resolved without counting passes as completed", () => {
  const round = ["a", "b", "c"];
  assert.equal(isTriadRoundFinished(round, ["a"], ["b"]), false);
  assert.equal(isTriadRoundFinished(round, ["a", "c"], ["b"]), true);
});

test("all supported languages contain the triad interface contract", () => {
  const requiredKeys = [
    "practiceFormatLabel",
    "practiceModeIndividual",
    "practiceModeTriad",
    "triadOrientation",
    "triadFeedbackGuideTitle",
    "triadPhaseFirstTitle",
    "triadPhaseClientTitle",
    "triadPhaseObserverTitle",
    "triadPhaseRetryTitle",
    "triadDebriefTitle",
    "triadPassItem",
    "triadPassConfirmButton",
    "triadPassCancel",
    "triadSuggestionExampleNote",
    "triadRatingTitle",
    "groupRatingGuide"
  ];
  LANGUAGE_ORDER.forEach((languageId) => {
    requiredKeys.forEach((key) => {
      assert.equal(typeof LANGUAGE_UI[languageId]?.[key], "string", `${languageId}.${key} is missing`);
      assert.notEqual(LANGUAGE_UI[languageId][key].trim(), "", `${languageId}.${key} is empty`);
    });
  });
});

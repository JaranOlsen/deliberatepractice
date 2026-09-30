import test from "node:test";
import assert from "node:assert/strict";
import { isResumableSession, getRoundOutcome, getOrCreateRoundId } from "../src/js/practiceSession.js";

const setup = { languageId: "en", skillId: "empathic-understanding", caseId: "case-sara" };

test("legacy finished briefs do not become resumable rounds", () => {
  for (const version of [1, 2]) {
    assert.equal(isResumableSession({ ...setup, version, view: "brief", completedStatementIds: [] }), false);
    assert.equal(isResumableSession({ ...setup, version, view: "statements" }), true);
  }
});

test("active version-three rounds survive a visit to their brief; completed rounds do not", () => {
  assert.equal(isResumableSession({ ...setup, version: 3, status: "active", view: "brief" }), true);
  assert.equal(isResumableSession({ ...setup, version: 3, status: "completed", view: "statements" }), false);
  assert.equal(isResumableSession({ version: 3, status: "active" }), false);
  assert.equal(isResumableSession({ ...setup, version: 4, status: "active" }), false);
});

test("summary excludes stale IDs and never counts a passed item as another completion", () => {
  assert.deepEqual(getRoundOutcome(["a", "b", "c"], ["a", "a", "other"], ["a", "b", "b", "other"]),
    { completed: 1, skipped: 1, total: 3 });
});

test("a resumed round retains its identity while legacy/new rounds receive a fresh ID", () => {
  const id = "92f670da-3f32-4971-8cf0-f44cf1d393b1";
  assert.equal(getOrCreateRoundId(id, () => { throw new Error("must not replace"); }), id);
  assert.equal(getOrCreateRoundId(null, () => id), id);
  assert.equal(getOrCreateRoundId("bad", () => id), id);
});

# Client perspective: UI cleanup audit

Reviewed the local app on 2026-10-05. App source was not changed by this reviewer. Browser session: `dp-client-audit`; production accounts, emails, and Supabase writes were blocked. Synchronized rooms used the isolated local Postgres bridge on port 5199.

## Coverage

| Flow | Review evidence |
| --- | --- |
| Individual single skill | English preparation, active items, example access and completion counts; 390 px |
| Shared single skill | English preparation, client instructions, active workflow, first set reflection; 390 px |
| Separate devices, four people, single skill | English client choosing, preparation, readiness, active item, all 12 items, checkpoints 1/4 and 4/4, next-round choice; 320 px |
| Separate devices, two people, single skill | Same Norwegian client sequence, including all 12 items and next-round choice; 320 px |
| Separate devices, four people, mastery | English choosing, client preparation/readiness, active item, first checkpoint and continuation; 320 px; no page errors |
| Shared mastery, two people | English client preparation, active item, first checkpoint; 390 px |
| Shared mastery, three roles | Same English client screens; a fourth participant using the same device has no separate client presentation |
| Individual mastery | English preparation, active item and first self-assessment checkpoint; 390 px |
| Three separate devices | Source verified: client presentation is identical to four devices except the participant count and passive participant in Room & people. Not separately replayed by this reviewer |

The two full focused-room audits reached next-round preparation successfully. Their teardown initially hit audit-harness errors (collapsed End room control, then closing a browser context while an intercepted request was pending). These were fixture cleanup issues, not observed app failures; the later mastery audit awaited room closure and completed cleanly.

## Safe removals or direct wording fixes

1. Remove the home note below the practice format choices (`src/js/main.js:164`, `#group-entry-note`). "Choose a skill and case", "Invite your group, then choose what to practice", and the shared twelve-item note restate the controls.
2. Remove the room preparation plan line (`src/js/practiceRoom.js:262`). "Round 1 · 12 items · 4 sets of 3 · keep your roles" does not help the client prepare. Keep the active item counter and checkpoint number.
3. Remove the ordinary client preparation footer (`src/js/practiceRoom.js:290`; `prepCue.client` at line 27). "Read the lines in role. Repeat for the retry" duplicates the concise client Your part guide. Preserve the special self-awareness privacy instruction: it changes what the client should do.
4. Use a client-appropriate checkpoint heading instead of "Rate this set" (`src/js/practiceRoom.js:316`). The client has no rating form or advancement button. "Reflect together" or simply the reflection question matches the actual client action. Keep "The observer rates this set" / "The therapist self-assesses this set" as the short waiting state.
5. Remove the three long skill names from the **client's** mastery checkpoint (`src/js/practiceRoom.js:315`). Their job is to describe the impact of the therapist's attempts. The headings above already identify the case; the active observer has the scoring reference.
6. Hide the role tabs during shared mastery checkpoints (`src/js/masteryPractice.js:136`). Client, therapist and observer tabs all render the same checkpoint. Controls that make no difference suggest missing role-specific content.
7. Remove unconditional "Passed items are excluded" from mastery checkpoints (`src/js/masteryPractice.js:175`). It appears even when no item has been passed. If useful after an actual pass, use a compact nonzero passed count.
8. Consolidate shared focused completion text. The screen currently repeats "3 practiced · 0 passed · 3 in this round", "SET COMPLETE", and "Set 1/4 · reflect and rate" (`src/js/main.js:2961–2978`, `formatRoundOutcome`). Keep one set heading; show passed items only when there were any.

## Decisions requiring judgment

- **Shared focused pair mode is missing.** Unlike shared mastery, there is no "We're two" choice. A two-person group sees an observer workflow, observer guide and observer reflection prompt that cannot apply. This deserves a behavior fix or an explicit unsupported-format decision, rather than deleting useful three-person guidance indiscriminately. Relevant code: `src/js/main.js:2986–3007`, which always constructs client, therapist and observer guidance; `src/js/masteryPractice.js:140–143` already has a pair choice.
- **Client workflow expansion:** separate-device clients see both Your part and The workflow. The latter repeats the client's three actions, but can help a new client know when other roles speak. Shared mastery clients only have Your part. Consider removing the extra client workflow, or keeping it under optional help; do not automatically remove it without deciding the onboarding approach.
- **Client voice versus role background order:** the client voice is far below the fold on a narrow phone because the role background comes first. All this content is intentional and useful. Putting client voice first, with background collapsible, may better support opening the exercise, but changes the approved presentation and should be discussed rather than silently deleting clinical background.
- **Checkpoint timing:** the client's screen asks "What changed on the retry?" after three items. It is useful, but a new group might think feedback should wait until that checkpoint. Your part correctly instructs feedback after each response. Consider clearer timing in optional help if first-time users demonstrate this confusion; do not add another persistent instructional paragraph.
- **Active item counts:** set plus item counts are repeated information, but help the group know when a rating checkpoint is near. One item counter plus a visual third-item marker might be simpler; retain current functional progress until a replacement is designed.

## Keep

- Exact client voice, role background, case style and the actual client statement.
- I’m ready / Not ready yet and the missing-role and connection warnings that explain why a round cannot start or move.
- Your part: "Read · feedback · repeat", the concrete feedback wording examples, and the instruction to repeat the same line.
- The self-awareness distinction: read, step out of role, reflect on the pause, and respect private therapist content.
- The client reflection question and end-of-round de-roling prompt.
- Home and its cancel/pause/end confirmation. The client should not gain an item-advancement or therapist-rating button merely to fill empty space.

## Screenshot evidence

All paths are under `output/playwright/`:

- `client-audit-focused-four-en-preparation.png` — client background/voice and redundant preparation plan/footer.
- `client-audit-focused-four-en-item.png` — compact client statement, Your part and optional workflow.
- `client-audit-focused-four-en-checkpoint-4.png` — final client reflection and de-roling.
- `client-audit-focused-pair-no-preparation.png`, `client-audit-focused-pair-no-item.png`, `client-audit-focused-pair-no-next-round.png` — Norwegian pair preparation, active client and round reselection.
- `client-audit-triad-focused-item.png`, `client-audit-triad-focused-three-complete.png` — shared focused three-role guidance and repeated completion labels.
- `client-audit-mastery-four-en-preparation.png`, `client-audit-mastery-four-en-item.png`, `client-audit-mastery-four-en-checkpoint-1.png` — mastery client presentation and non-client rating heading.
- `client-audit-triad-mastery-item.png`, `client-audit-triad-mastery-checkpoint.png`, `client-audit-pair-mastery-checkpoint.png` — role-specific shared mastery item and role-insensitive checkpoint tabs.
- `client-audit-individual-mastery-item.png`, `client-audit-individual-mastery-checkpoint.png` — individual mastery prompt and checkpoint clutter.

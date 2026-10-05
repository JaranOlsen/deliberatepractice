# Active observer UI audit — 5 October 2026

Reviewed the active observer’s preparation, focused items, mastery items, ratings and next-round screens on a 320px phone. Used the isolated Postgres fixture at port 5199, independent rooms, and a uniquely named Playwright CLI session (`dp-observer-audit`). No live Supabase mutations, sign-in emails, app-source changes or shared reminder writes were made.

## Browser coverage

- Four-person focused room: preparation; observer item; four three-item checkpoints; saved-rating reconnect; passed item; next-round role reset; missing-observer guard; simultaneous role claims; human readiness; pair fallback; pair self-assessment; host transfer/recovery; room exit.
- Four-person mastery room: preparation; all twelve ordered scenes; observer item; four correctly attributed observer checkpoints; next-round reset. No focused ratings were produced by this audit round.
- Anonymous shared-device focused practice: preparation, normal item, expanded observer role guide, set debrief, rating.
- Anonymous shared-device mastery: observer preparation/item/expanded role guide/rating, and equivalent pair screens. Account and backend operations were intercepted and forbidden.
- No JavaScript errors. The existing room helpers also checked 320px layouts with 200% text.
- Shared-device four-person practice has the same single screen as three-person practice; the fourth participant listens. There is no separate passive-role tab in focused shared practice.

## Safe tidying

1. **Remove generic room preparation count/instruction text.** `Round 1 · 12 items · 4 sets of 3 · keep your roles` is not useful while reading the actual skill or case. The active screen already gives set/item progress, and the rating checkpoints retain roles automatically. Source: `src/js/practiceRoom.js:265` (`roundPlan` copy at lines 33/73).
2. **Remove redundant observer preparation cue.** `Guide the round. Name one strength and one change to try.` repeats the role guide and workflow. Retain the actual skill focus, case orientation that contributes clinical context, Start control, and readiness/role information. Source: `src/js/practiceRoom.js:286`–`291`, `prepCue.observer`.
3. **Remove repeated room choosing/waiting text.** Choosing renders both a content heading and the same healthy sync-status text; non-host waiting text appears in both places. Keep one contextual waiting message, not both. Source: `src/js/practiceRoom.js:256` and `updateStatus` near line 374.
4. **Hide healthy sync success text.** `Ready · devices are in sync` is persistent technical commentary. Keep meaningful missing-role, human-readiness, disconnected and catching-up statuses because they explain disabled actions. Source: `src/js/practiceRoom.js`, `updateStatus`.
5. **Remember workflow expansion.** The observer can collapse the six-step graphic, but it reopens on the next item. Preserve the first-use open default and remember the user’s choice for subsequent items, just as the role guide already remembers its expansion. Sources: `src/js/practiceRoom.js:305`; `src/js/main.js:2986`; `src/js/groupPracticeUI.js:64`. This preserves onboarding without imposing the workflow on every attempt.
6. **Remove duplicate skill focus inside shared observer role guides.** Focused shared practice already shows `skill.practiceFocus` above the workflow; mastery shared practice already shows `scene.prompt` above the client line. Opening the observer’s role guide repeats it under another `Skill focus` heading. Keep the top focus and remove the duplicate passed into the shared role guide. Sources: `src/js/main.js:2987`–`2997`; `src/js/masteryPractice.js:155`–`160`.
7. **Remove the outer joined skill list at mastery ratings.** The long list consumes five lines on a small phone and each practiced skill is already named in the optional feedback panel. Keep the case/exercise identity, set number, score label and skill names inside the panel. Sources: `src/js/practiceRoom.js:315`; `src/js/masteryPractice.js:176`; `src/js/masteryFeedbackUI.js:17`–`25`.
8. **Only mention passed items when any were passed.** Mastery’s `Passed items are excluded.` appears even after a set with no passed items. Conditional display is clearer. Source: `src/js/masteryPractice.js:175`. The all-passed-set message must remain because it explains the absence of a rating form.
9. **Clarify the pair workflow’s final step.** When `pair=true`, label the last step `Therapist self-assesses` / `Terapeuten vurderer seg selv`, matching the actual pair score and first-person feedback cues. The general `Rate the therapist` wording can suggest the client should assess. Source: `src/js/groupPracticeUI.js:64`–`82`.
10. **Remove next-round explanatory headings when controls already say it.** The observer host sees `Group practice`, `Choose roles, skill & case`, a role picker and a `Choose skill and case` button. The role picker and practice button express the actual actions; the generic headings add no additional instruction. Source: `src/js/practiceRoom.js:253`–`257` and the room header.

## Decisions worth discussing

- **Focused shared pairs currently have no pair choice.** They always display an observer workflow and all three role guides. Separate-device pairs correctly give progression and self-assessment to the therapist, and shared mastery pairs have a pair checkbox. This is a behavior gap, not just text to delete. A shared pair choice should omit observer steps/role guidance and use the same self-assessment wording as other pair modes. Source: `src/js/main.js:2986`–`3004`, compared with `src/js/masteryPractice.js:139`–`143`.
- **Observer focus placement.** In separate-device focused practice, the actual skill focus is hidden inside collapsed `Your part`, while the generic workflow is open and fills much of the screen. Showing one concise skill focus above a remembered/collapsible workflow may better support coaching. Changing the default workflow to closed is a separate design choice; preserve first-use onboarding for this pass.
- **Mastery orientation contains one meaningful limitation amid filler.** `Twelve linked practice moments. Use the prompted skill, then give feedback and retry.` duplicates the format/workflow. `The next scene is a new moment, not a response to your exact words.` explains how mastery behaves. Remove the first part from routine preparation; consider keeping the limitation in optional help instead of deleting the entire orientation everywhere. The text is authored in the runtime mastery payloads and rendered in `src/js/masteryPractice.js:145`–`146` / `src/js/practiceRoom.js:279`.
- **Shared rating storage notice.** `Ratings on a shared device are not saved to accounts` is true and prevents misunderstanding, but repeats at every checkpoint. A concise notice such as `Not saved to progress` at the format choice or first checkpoint may be enough. It should remain somewhere discoverable rather than disappearing altogether.
- **Separate debrief and rating screens in shared focused practice.** Completing the third item opens a debrief, then `Rate this set` opens a second screen repeating counts, case/skill identity and completion headings. Separate-device rooms and shared mastery combine this. Unifying these is a worthwhile flow change, but exceeds simple copy removal and should preserve reflection prompts and explicit optional rating.

## Preserve

Keep clinical skill cues and rating anchors; first-person self-assessment in individual/pair practice; the client voice and role background at preparation; private self-awareness boundaries; optional examples; Pass and leave confirmations; actual role/readiness/reconnection explanations; only the active observer’s rating/advance controls in larger groups; de-role guidance at the end of the complete round. The six-step workflow remains useful on demand.

## Evidence

Before screenshots are stored in `output/playwright/`:

- `observer-audit-four-preparation-320.png`
- `observer-audit-four-item-320.png`
- `observer-audit-four-rating-320.png`
- `observer-audit-four-missing-role-320.png`
- `observer-audit-four-pair-preparation-320.png`
- `observer-audit-four-pair-rating-320.png`
- `observer-audit-mastery-preparation-320.png`
- `observer-audit-mastery-item-320.png`
- `observer-audit-mastery-rating-320.png`
- `observer-audit-mastery-next-round-320.png`
- `observer-audit-focused-shared-preparation-320.png`
- `observer-audit-focused-shared-item-320.png`
- `observer-audit-focused-shared-observer-part-320.png`
- `observer-audit-focused-shared-debrief-320.png`
- `observer-audit-focused-shared-rating-320.png`
- `observer-audit-mastery-shared-guide-preparation-320.png`
- `observer-audit-mastery-shared-item-320.png`
- `observer-audit-mastery-shared-guide-part-320.png`
- `observer-audit-mastery-shared-rating-320.png`
- `observer-audit-mastery-pair-guide-preparation-320.png`
- `observer-audit-mastery-pair-item-320.png`
- `observer-audit-mastery-pair-guide-part-320.png`
- `observer-audit-mastery-pair-rating-320.png`

CLI result logs and private audit wrappers are under `/private/tmp/dp-observer-*`.

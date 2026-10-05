# Therapist UI audit — 5 October 2026

Perspective: a therapist practicing a skill, preparing for a group round, responding without seeing the client script, and rating their own attempt in an individual/pair round. This is a usability review, not a change to the clinical content.

## Coverage and evidence

Reviewed the home, language, skill, case, skill guide, case preparation and attempt screens in a separate Playwright CLI session, `therapist-clutter-audit`. Reviewed focused/shared and mastery individual/shared/pair screens in isolated 320px browser contexts with all account writes prohibited. Created independent local fixture rooms for four-person mastery and pair mastery, and advanced preparation → three items → checkpoint. No emails, live Supabase writes, rating saves or reminder changes were performed.

Separate three/four-person therapist content uses the same role branch. Shared three/four-person focused content uses one common screen; a fourth person has no additional control. Individual focused feedback, shared focused preparation and end/debrief branches were also checked in source. I did not run every entire 12-item round; final/end findings below are source-reviewed.

Screenshots:

- [Separate-device therapist item](/Users/jaran/Repos/deliberatepractice/output/playwright/therapist-audit-mastery-room-item-320.png)
- [Pair therapist item](/Users/jaran/Repos/deliberatepractice/output/playwright/therapist-audit-mastery-pair-item-320.png)
- [Pair therapist self-rating](/Users/jaran/Repos/deliberatepractice/output/playwright/therapist-audit-mastery-pair-rating-320.png)
- [Individual mastery item](/Users/jaran/Repos/deliberatepractice/output/playwright/therapist-audit-mastery-individual-item-320.png)
- [Shared focused item](/Users/jaran/Repos/deliberatepractice/output/playwright/therapist-audit-focused-shared-item-320.png)

## Obvious cleanup recommendations

| Screen / source | Current issue | Recommendation |
| --- | --- | --- |
| Home, `main.js` `renderGroupEntry`, `#group-entry-note` | “Invite your group, then choose what to practice.” / “Choose a skill and case.” simply repeat the visible choices. Shared mode adds the same twelve-item structure again. | Remove generic notes; retain actual room/resume state through its button rather than another paragraph. |
| Language / skills / cases / guide, `translations.js` `languageDescription`, `skillDescription`, `caseDescription`, `skillGuideDescription` | Narration such as “Select the language you want to practice in,” “Pick the focus area you want to strengthen today,” and “Review the markers, aim, and common misses…” adds no decision information. | Remove the procedural description lines. Keep the headings and actual skill descriptions. |
| Focused case cards, `main.js` `renderCaseOptions` | Fixed cases say “Sara (Easy)” and repeat “Easy” below the teaser. | Show the level once. The footer/level label is the more consistent position alongside the new three-level cases. |
| Focused shared preparation, `main.js` `renderPracticeFormatUI`, `#triad-orientation-text` | “Keep roles for twelve items. The observer guides; rate the therapist after each set of three.” repeats workflow/button information. | Remove this generic orientation paragraph; keep optional feedback guidance and clinically meaningful case preparation. |
| Separate-device preparation, `practiceRoom.js` lobby | “Round 1 · 12 items · 4 sets of 3 · keep your roles.” dominates the small screen before meaningful preparation. | Keep at most the current round identifier, or remove it during preparation. The active item already shows set/item progress. |
| Mastery preparation, `masteryPractice.js` / `practiceRoom.js` | “Twelve linked practice moments. Use the prompted skill, then give feedback and retry. The next scene is a new moment, not a response to your exact words.” appears on every therapist preparation. | Remove the procedural count/sequence lead-in. If the scripted-scene clarification is retained, place it in optional mastery guidance rather than every preparation page. |
| Focused individual attempt, `main.js` `updateSuggestionUI`, `#individual-instruction` | Every item repeats “Try a response aloud first. Then compare with an example and try again, or move to the next item.” | Remove the normal procedural paragraph or reduce it to one short first-time instruction. Keep the skill-specific focus. Keep the distinct self-awareness cue, which changes what the therapist should do. Ensure the retry handler does not restore removed generic clutter. |
| Individual mastery attempt, `masteryPractice.js:166` / `groupPracticeUI.js` | Reuses group therapist “Your part”: “Listen to the client,” “Choose a useful change [from feedback],” “Ask for the same line.” There is no other client or observer in individual practice. | Adapt the individual guide to reading the statement, responding aloud, comparing only after the attempt and retrying the statement. Preserve access to the example. This is misleading copy, not simply surplus copy. |
| Pair workflow, `groupPracticeUI.js` `createGroupWorkflow` | Pair's final step says “Rate the therapist.” Actual rater is the therapist themselves. | Say “Self-assess” for pair, retaining “after every 3 items.” |
| Pair therapist expanded “Your part,” `groupPracticeUI.js` `pairGuide` | Adds a fourth Guide row repeating “Finish each item after the retry. Self-assess after each set of three,” already covered by workflow and controls. | Remove the repeated row once workflow labels communicate the rater correctly. |
| Mastery checkpoint, `masteryPractice.js:175` | “Passed items are excluded.” appears even when all three items were practiced. | Show this explanation only when the set includes a passed item, or communicate this through the counts. |
| Mastery checkpoint, `masteryPractice.js:173,180` | “Therapist self-assessment” / “Rate the therapist” appears both as the heading and the form label. | Retain an accessible select label but avoid duplicate visible heading text, e.g. a visually hidden label. |
| Individual focused rating, `main.js:3350–3351`, `#rating-target` | “Practicing for: [own account]” remains in the rating dialog despite the old partner chooser being removed. The signed-in self-rating identity is already determined. | Remove the redundant self-account attribution. Keep genuine wrong-account save errors. |
| Final individual mastery, `masteryPractice.js:206` | “Step out of role. Say your own names and pause.” uses plural group instructions in solo practice. | Use a solo ending or omit the group de-roling text there. Retain de-roling in group rounds. |

## Preserve

- Therapist's concise skill focus / mastery scene prompt. It tells the therapist what to attempt without giving away the example or client statement.
- Mastery scene bridge. “Beginning with an ordinary evening” supplies actual context for a change in clinical moment.
- Collapsed “Reflect on your attempt” cues in individual practice and self-assessment cues at the pair checkpoint. They serve a different audience from observer cues.
- Separate-device therapist concealment of the client script and observer assessment cues during the attempt.
- Error/reconnect/missing-role/readiness states; these explain a real blocked action. Do not hide them just because they contain more words.
- “The observer rates this set” for a non-rater: it explains why the therapist has no rating controls.
- Shared-device ratings not being saved to accounts. The consequence should be clear somewhere, even if the repeated long sentence is reduced.
- Self-awareness privacy, choice and no-interpretation instructions. They change the exercise and protect its boundaries.
- Clinical skill guide content, case background/client voice, role selection, and protected Home exit choices.

## Product choices to review, not silently remove

1. **Focused shared-device pairs have no pair setting.** Their one common screen still includes active observer workflow and all three “Your part” cards. Mastery shared mode has “We’re two” and a therapist controller. Should focused shared mode get the same two-person choice? That is more consequential than deleting observer text because it changes guiding and rating responsibility.
2. **Individual mastery has no explicit “Try again” control.** Its example is inside “Your part,” while focused practice has a hide-and-retry button. Should both expose the example/retry interaction consistently, avoiding group instruction scaffolding in solo mastery?
3. **Mastery shared role tabs remain visible at the rating checkpoint.** Switching tabs there changes no audience/action. Hiding them during a joint rating would simplify the screen, but needs care not to imply role rotation between three-item sets.
4. **“The twelve moments” is a collapsed list of skill names only.** It gives an observer a rough sequence, but tells a pair therapist little that current prompts don't. Keep only in preparation, remove from the pair active item, or make it a genuinely useful optional overview?
5. **“Next 3 items · keep roles” vs “Continue.”** The former is long but guards against the historic expectation of rotating every three items. With an intuitive full-round progression, a shorter button should be enough; verify it with people unfamiliar with the app before removing every indication of role continuity.
6. **One-device shared ratings offer a numerical discussion score but do not save it to account progress.** Is that useful feedback, or does the select imply persistence? This should be a product decision rather than a clutter-only removal.
7. **Case selection repeats the full skill description, What to practice, and Common miss above every case list.** The optional skill guide remains accessible. A concise focus plus guide link might suffice, but Common miss is useful deliberate-practice preparation; decide whether to collapse rather than delete it.


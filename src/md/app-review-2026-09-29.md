# App review — 29 September 2026

The biggest improvement would be to make the app a clearer practice companion: help people start quickly, guide a deliberate attempt and retry, and finish with a useful next step. The existing calm visual style and content structure are worth keeping. A broad visual rewrite or another large content expansion would have less immediate value than fixing the practice lifecycle and completing the group workflow.

## What was reviewed

- Repository, branch history, current changes, runtime state, content assembly, account/ratings code, SQL authorization logic, and deployment workflow.
- Browser walkthroughs of English and Norwegian selection, case briefs, skill guide, individual practice, suggestions, report form, locked-case prompt, and signed-out account panel.
- Group practice through response, client feedback, observer feedback, retry, example reveal, pass confirmation, debrief, completion, and reload/resume.
- A full ten-item individual round. Desktop and mobile layouts, including 390px and 320px widths, and keyboard behavior in dialogs.
- The deployed site reports `f8a643d` and has no group-practice UI.

`npm test` passes: 1,080 runtime items, all translated, no validator warnings/errors, and seven triad tests. `npm run build` and `git diff --check` also pass. These are structural checks; this review does not certify every clinical example or translation. Existing editorial audits were consulted, and examples were sampled.

Live backend verification is blocked: the host configured in `.env.local` returned DNS `ENOTFOUND`, including outside the sandbox. Reading the feedback queue also failed. Successful magic-link login, pairing, rating persistence, access-code redemption, and deployed database policies remain unverified. No emails, feedback submissions, or database writes were sent during the review.

## Branch state

Local `main`, `codex/5.6`, and the checked-out `codex/Astra` all point to `f8a643d`. The remote advertises `main` and `develop`, with no remote `codex/5.6`. Its local reflog shows creation from main.

The group-practice work is in the working tree: approximately 1,000 added lines across six tracked files, plus untracked `src/js/triadProtocol.js` and `tests/`. Consequently there is no committed `codex/5.6` delta to merge in this checkout. Preserve and account for all these files when preparing the feature commit. The app source was left unchanged by this assessment.

## Highest-return changes

| Order | Change | Why it matters | Relative effort |
| --- | --- | --- | --- |
| 1 | Correct pause, leave, finish, and resume behavior | Prevents false completion and lost work; makes the app trustworthy | Medium |
| 2 | Complete the group workflow and its skill-specific instructions | Turns a promising feature into coherent guided practice | Medium |
| 3 | Make returning to practice faster | Reduces repeated setup and decision-making | Small–medium |
| 4 | Make progress useful for the next practice decision | Gives saved ratings a visible purpose | Medium |
| 5 | Repair dialogs, narrow layouts, and untranslated controls | Removes concrete usability defects | Small–medium |
| 6 | Split runtime responsibilities and add flow-level regression checks | Makes subsequent changes easier to finish reliably | Medium, incremental |

## Release blockers and concrete defects

### 1. Leaving an individual round records an unperformed item

**Reproduced; also present in main.** Open the first statement and immediately press “Back to cases.” The app shows a rating dialog claiming “1 item practiced,” with that statement already in `completedStatementIds`. A signed-out user gets disabled scores and Save, with only “Skip” available. There is no return-to-practice action in the dialog.

`handleBackNavigation()` calls `openRoundRatingPrompt()` with its default `markCurrent: true`. Relevant code: `src/js/main.js:3362` and `src/js/main.js:3938`.

Separate navigation from completion. Count only explicitly completed attempts. Provide “Continue practicing,” “Pause and leave,” and an intentional finish action. Anonymous users should receive a useful completion summary, rather than a disabled rating form.

### 2. Finished rounds are offered as unfinished work

**Reproduced.** Complete a three-item group round, return to cases, and reload: the home screen offers “Resume … 1 of 10.” A completed individual round similarly becomes a fresh brief with no completed items.

`navigateBackToCaseSelection()` clears round progress and then saves a new session while retaining the case. The group resume counter falls back to the case's ten statements when its sampled IDs have been cleared. Relevant code: `src/js/main.js:749` and `src/js/main.js:3916`.

Model an active session separately from a completed round and remembered setup. Clear the resumable session on completion; retain language, skill, case, and format as preferences. Leaving a group round midway currently also discards its progress; pausing should preserve it.

### 3. Group instructions contradict the self-awareness exercise

**Confirmed from the implementation and the app's own exercise contract.** All skills receive instructions to respond as in therapy, followed by the client reporting the impact of that response. Therapist Self-Awareness instead explicitly teaches noticing internal reactions and sharing only a comfortable portion in training, rather than performing a client intervention.

Evidence: `src/data/skills.js:5`, `src/data/translations.js:93`, `src/js/main.js:2884`, and `src/md/benchmark-contract-audit-2026-06-11.md`.

Give this skill an appropriate sequence and labels, or temporarily make group mode unavailable for it with a clear explanation. Review the other skill contracts against the protocol before treating one generic sequence as universal. This is more consequential than wording polish.

### 4. Dialogs do not manage keyboard focus

**Reproduced.** Opening the rating dialog leaves focus on the underlying “Back to cases” button. Escape does nothing. In Account, three Tab presses from the email field move focus behind the dialog onto the page's account button. The paywall also lacks dialog semantics.

Use a shared accessible dialog implementation: initial focus, contained tab order, Escape where appropriate, focus restoration, and an inert background. Add a meaningful accessible name to the rating dialog. Selection cards currently claim `listbox`/`option` roles without corresponding arrow-key behavior; ordinary navigation buttons are a better fit. Scope live announcements to changing status text rather than the entire main region.

### 5. Rating-save errors are immediately erased

**Code-confirmed; authenticated failure not exercised live.** `handleRatingSubmit()` writes the error in `catch`, then `finally` calls `updateRatingPanel()`, which clears the status when the user otherwise meets save requirements. The score can remain on screen with no explanation of why saving failed.

Evidence: `src/js/main.js:3680` and `src/js/main.js:3275`.

Keep an explicit error state through rendering, retain the chosen score, and provide a retry. Add a round identifier/idempotency mechanism so an uncertain network result cannot create duplicate ratings on retry. The current SQL inserts a new rating for each successful RPC call.

### 6. Narrow Norwegian case selection overflows

**Reproduced at 320px.** The Norwegian self-awareness case screen measures 354px wide. The skill summary header and “Lær ferdigheten” button extend beyond the viewport. The statement screen itself fits at this width.

Allow the summary heading and action to stack/wrap, remove min-content pressure, and check long skill names at 320px, 390px, and text zoom. Relevant styles: `src/css/style.css:266` and `src/css/style.css:1802`.

### 7. Norwegian interface localization is incomplete

**Reproduced.** The report form's four reason options and details placeholder remain English. The locked-case dialog has “Access code” and “Close”; Account's close accessible label is English too. This undermines the otherwise extensive translation work.

Localize visible labels, option display text, placeholders, and accessible names together, while keeping stable internal reason values. Include these controls in the language smoke test. Evidence: `index.html:339`, `index.html:348`, and `index.html:388`.

## How I would polish group practice

Keep its strongest parts: three-item rounds, examples hidden until retry, separate client and observer feedback, pass support, and a debrief. A reload correctly restored the sampled statement and current client-feedback phase. A completed item plus two passes correctly produced one completed ID and two skipped IDs.

The screen currently places the advance button inside the statement card, above the current role's instructions. On mobile the observer's criteria continue below the fold. This makes it easy to advance before reading the task and requires repeated scrolling between guidance and controls.

Recommended reading order:

1. Compact role and step indicator: Respond → Client feedback → Coaching → Retry.
2. Client statement, with an option to collapse it after the initial attempt.
3. One short instruction for the current role; supporting guidance expandable.
4. Primary action directly beneath that instruction; secondary pass/back actions nearby.
5. Optional example during retry.

“Try once more” currently only hides the example and focuses the same heading (`src/js/main.js:3574`). It provides almost no visible state change. Either make it begin another short feedback/retry cycle, or remove the redundant button and explicitly allow repeated spoken attempts before finishing.

At debrief, show completed/passed counts and offer “Rotate roles and start another round” alongside “Choose another case.” Currently “Complete round” returns to selection without helping the group rotate. Identify whose practice is being rated before starting: the active account target, not the selected practice format, determines whether a saved rating is self or observer. The application stores neither practice mode nor rubric version with the rating, so the new group consistency scale and existing individual mastery scale cannot be distinguished later. Resolve that before accumulating mixed data.

## Better entry and completion

The current sequence is language → twelve skills → nine cases → substantial brief → practice. Returning users should land on a useful practice home with their remembered language, an accurate Resume card, and “Repeat last setup.” Keep the full library available, with a compact skill description and easy access to the richer guide.

Move format choice earlier in setup. For first-time users, offer one clear starter exercise and explain the basic loop in a sentence. Keep case role details available but avoid requiring people who already know Sara to scroll through her biography again. The lock banner dominates the opening screen but gives no direct access-code action; replace it with a small actionable library-access entry.

Individual practice currently functions mainly as browsing statements and revealing examples. Add a lightweight instruction to respond aloud first, a visible skill criterion, and an optional retry after comparison. Finishing should acknowledge the work and offer a next step: repeat, choose a harder/easier case, or stop. None of this requires recording private spoken responses.

## Make progress informative

The current progress feature is buried in Account and shows weighted averages rather than change over time. It reads only self-ratings (`src/js/backend.js:177`); observer ratings can be saved but are absent from this view.

Start with a readable per-skill list showing recent practice date, rounds/items practiced, recent ratings, and a next-practice action. Show self and observer evidence separately. Include difficulty and sample size, and distinguish “not practiced” from a low score.

The radar uses only rated skills as its axes (`src/js/main.js:1281`). One or two rated skills produce degenerate polygons, and each newly practiced skill changes the geometry. A list or bar display is more useful for beginners. If retaining radar later, use fixed axes and an explicit missing-data treatment. Do not label one self-rated round as demonstrated mastery.

## Engineering and content priorities

The main runtime is approximately 4,232 lines, mixing navigation, account handling, chart construction, content localization, and session transitions. Extract session transitions, dialog behavior, and rating/progress handling first. Keep the current stack; there is no demonstrated need for a framework migration.

The production application chunk is 1.69 MB, approximately 293 KB gzip, plus a separate Supabase chunk of approximately 55 KB gzip. The runtime assembles both languages and imports the large content registry. Generate a compact runtime payload with only fields actually needed, then consider loading language/skill content on demand. Measure startup before optimizing further; no throttled performance benchmark was run in this review.

The access code is a client-side convenience gate: all case content ships to the browser, and access state is trusted from local storage. This may be acceptable for workshop distribution. If membership is intended to protect paid content, it needs server-authorized delivery; changing the UI cannot enforce that boundary.

Keep the content workflow, but prioritize exercise-contract checks over another blanket rewrite. The repository's earlier audit already documents how structurally valid content can train the wrong task. Add the practice-mode contract to that review. Update content/rubric revisions when meaning changes so historical ratings retain their interpretation.

Use `npm ci` in deployment with the committed lockfile. Add a small browser regression suite for behaviors the current pure-function tests do not cover: completion/exit/resume, mode changes, error/retry, keyboard dialogs, and both languages. Verify the real backend and SQL permissions with test accounts once its configuration is reachable.

## Suggested delivery sequence

**First release:** correct session lifecycle, fix the self-awareness protocol, arrange group actions beneath their instructions, repair dialogs, preserve save errors, and close the mobile/localization defects. Package the existing uncommitted feature into a coherent commit with its helper and tests.

**Second release:** remembered setup, useful completion summary, role rotation, and clearer skill guidance during individual practice.

**Third release:** a dedicated progress view with distinct self/observer ratings, meaningful history, and compact runtime data.

Before shipping group mode, verify: completed rounds never appear resumable; paused rounds retain their phase; passed items are excluded; every supported skill has suitable instructions; target changes cannot silently misattribute a round; failed saves remain visible and retry safely; keyboard users can operate all dialogs; both languages fit narrow screens; and live sign-in/pairing/save flows pass.

## Visual evidence

Screenshots are in `output/playwright/`: `02-practice-mobile.png`, `03-triad-mobile.png`, `04-observer-mobile.png`, `05-account-mobile.png`, `06-norwegian-320.png`, and `07-cases-desktop.png`. Browser snapshots retain the labels and states used to reproduce the findings.

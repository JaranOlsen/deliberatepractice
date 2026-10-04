# Deliberate Practice Lab

Standalone Vite app split from `JaranOlsen/Planet`.

## Practice Formats

- **Individual** offers twelve items per skill/case and optional example responses, in English and Norwegian Bokmål.
- **Group** is the default: two or more people use their own devices in the normal app. A host controls the room while roles stay fixed for twelve items (four sets of three). The group chooses roles again after the complete round; additional participants watch and can take a later active turn. **Use one shared device** offers the same workflow and role guidance on one screen, with Finish/Pass after the whole item.

Returning users open the skill library in their remembered language. **Prepare another round** restores the last skill, case, and format for review before starting. A paused round takes priority over this shortcut. The setup is remembered only after practice begins; locked cases still require access.

Library descriptions and guides load immediately. Exercises download only for the selected skill and language and are reused across that skill's cases. Starting and resuming wait for valid content; a failed or stalled download offers retry without discarding a paused round.

Individual practice keeps the skill criterion visible. Try aloud before comparing an example, then use **Hide example and try again** to revisit the same item without changing progress. Self-awareness instead invites noticing internal reactions, with no obligation to respond to the client or disclose a reflection.

**Your progress** is available from the signed-in skill library and Account. Its radar shows only rated skills, comparing easy, moderate and hard practice as coloured profiles with distinct line styles. Level buttons show separate weighted averages and rating counts; selecting one level also excludes skills without ratings at that level. Comparison uses the union of rated skills, leaving gaps for missing levels instead of assigning zero scores or closing incomplete polygons. One or two rated skills use a compact score comparison; three or more form a radar. Self-ratings and observer ratings received by the signed-in therapist stay separate. A visible selector switches between self-ratings and observer ratings; there is no rating-scale selector. Skill cards show the latest rating/date/difficulty, weighted average, rating count, and rated-item count, with a shortcut back to practice. The view uses up to 500 latest ratings per source and explains the existing item/recency weighting. Starting from personal history selects the signed-in therapist; active rounds cannot be replaced from this panel.

All practice formats use the same skill-performance scale: **1 = Not yet demonstrated** through **5 = Skillfully demonstrated**. Self and observer ratings use identical score meanings. Progress combines formats and separates only the rating source, with up to 500 latest ratings per source. The fixed `group-skill-v2` identifier remains as provenance for both individual and group practice. Obsolete mastery/consistency and unspecified-scale records have been removed; they are not reinterpreted as current scores. The database requires a known practice format and the current rubric, and rejects obsolete or null scales.

Group feedback is spoken and is not recorded or stored. Separate-device rooms require sign-in. Individual and shared-device practice can run without an account; new local ratings save to the signed-in person’s own progress. Rooms assign the therapist and rater automatically, so there is no separate partner-code or therapist-selector flow. Retained current-scale ratings and paused rounds keep their original ownership.

Back to cases offers **Continue**, **Pause and leave**, or **Finish completed items**. Paused rounds retain their item order and feedback phase; finishing clears the resumable round and shows completed/passed counts. The therapist selected at the start remains the rating recipient for that round. Self-awareness uses a separate group sequence that respects the trainee's choice about sharing internal reactions.

Starting a new round waits for account and therapist selection to finish loading. Each round retains a UUID across pause/resume and save retries. If a save response is lost, retrying updates the same database rating, including a revised score, instead of adding a duplicate. The database rejects reuse of that UUID for a different round. Older clients without a UUID remain supported but do not gain retry deduplication.

## Guided mastery and variable-level cases (draft branch)

**Focused skill** keeps single-skill practice. **Mastery** presents twelve ordered moments from one case, with a changing skill prompt and four integrated practice ratings. Mastery history is separate from the focused skill radar; its scores are never copied onto each prompted skill. The existing self/observer choice and 1–5 performance scale apply to both.

The nine original cases keep their fixed levels. **Leo, Mia and Nora** each offer Easy, Moderate and Hard within the same history, across eleven authored skills. Every offered bank has twelve English/Norwegian client/example pairs per level. Case cards show all supported levels; selections and paused rounds retain the chosen level. Four unauthored combinations per new case stay hidden. Leo's stable IDs retain `case-arne` for compatibility.

The draft library contains **2,520 focused bilingual pairs** and **ten mastery paths / 120 bilingual scenes**. Sara has the first fixed-level mastery path and the three new extension banks: refocusing, consolidating emotional change and closing after emotional work. Expansion to the eight other original cases is the next batch. New case content remains pending independent clinical/native-language review.

Backend metadata migrations must precede frontend publication. The [Nora release notes](src/md/mastery-release-3-nora.md) record the draft stack, compatibility and verification. No production deployment or real-account rating reset is part of this batch.

## Local Development

```sh
npm install
npm run dev
```

Optional Supabase-backed feedback, access-code, auth, room, and rating features are enabled at build time when these variables are present. For local branch testing, put them in `.env.local`:

```sh
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

For local/admin feedback triage, also add a Supabase Secret API key. Never prefix this with `VITE_`, never add it to GitHub Pages secrets, and never commit it:

```sh
SUPABASE_SECRET_KEY=your-secret-api-key
```

## Checks

```sh
npm test
npm run build
# Optional live, read-only preflight using .env.local:
npm run check:backend
```

The backend preflight checks Auth availability and zero-row schema projections. It sends no emails, reads no user records, and makes no database changes. With the local admin key it verifies the required columns; without it, protected schema checks can remain unverified. A paused or restoring project must finish resuming before interpreting missing-table responses.

Browser regression checks use a local Vite server and the Playwright CLI:

```sh
npm run dev -- --host 127.0.0.1
# In another terminal, using an isolated browser session:
playwright-cli open http://127.0.0.1:5173/deliberatepractice/
playwright-cli run-code --filename=scripts/check-practice-flows.js
playwright-cli run-code --filename=scripts/check-progress-flows.js
playwright-cli run-code --filename=scripts/check-progress-query.js
playwright-cli run-code --filename=scripts/check-content-loading.js
```

The browser scripts clear local storage in their isolated test browser and intercept backend calls. They cover remembered setup, individual comparison/retry, pause/resume, individual and group completion, self-awareness, English/Norwegian controls, mobile overflow, dialog keyboard behavior, delayed account loading, and failed/successful rating saves. They never send real emails or write live ratings. Live authentication, room permissions, and database persistence require a separate check; the latest results are recorded in `src/md/release-verification-2026-09-30.md`.

## Deployment

Pushing to `main` deploys the built `dist/` folder to GitHub Pages with the workflow in `.github/workflows/deploy.yml`.

The optional Supabase-backed feedback and access-code features read these repository secrets during the Vite build when they are present:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

GitHub secrets are scoped to a repository. If this app was split out or moved, recreate those secrets in `JaranOlsen/deliberatepractice`; secrets from the old parent repository are not inherited. Branches do not deploy through the current workflow unless run manually, so branch builds need local `.env.local` values when testing Supabase behavior.

The deploy workflow now fails if either required Supabase secret is missing or if the built JavaScript assets do not contain the configured values, so `main` cannot silently publish a build where access-code unlock and statement flagging are disabled.

Supabase expectations:

- `feedback` allows anon inserts for statement flags.
- Optional: run `supabase/feedback-review.sql` to add `status`, `resolved_at`, and `resolution_note` columns so fixed feedback can be marked instead of deleted.
- `redeem_access_code(input_code text)` allows anon access-code redemption without exposing the `entitlements` table.
- `entitlements` should not allow direct anon selects.
- `access_code_usage` allows anon inserts for unlock attempts with `success`, `invalid`, or `error` status.
- Auth, profiles, partner pairing, and practice ratings require `supabase/auth-pairing-practice.sql`.
- Supabase Auth email Magic Link needs redirect URLs for local testing and production, for example `http://localhost:5173/deliberatepractice/` and `https://jaranolsen.github.io/deliberatepractice/`.

Run `supabase/access-code-security.sql` in the Supabase SQL editor to create the access-code RPC, lock direct entitlement reads, and configure access-code usage logging.
Run `supabase/auth-pairing-practice.sql` in the Supabase SQL editor to create profiles and practice ratings, including the legacy partnership tables/RPCs retained for historical compatibility. New connections use group rooms.

Keep generated runtime data in version control alongside the restored `src/md/` source/reference texts.

Editorial sources remain in `src/data/`. The browser uses the generated `src/data/runtime/manifest.json` and separate exercise files per skill/language, rather than importing the full review registry. Vite regenerates these files at dev/build startup and when source data changes during development; `npm run build:content` also regenerates them after the review artifacts. Use `npm run build:runtime` for an explicit refresh. `npm test` rejects stale generated data and checks every exercise against its source, including translations and rating/report metadata.

The content-loading browser check also runs against the production preview (`npm run build`, then `npm run preview`). It verifies no exercise downloads at startup, scoped downloads and reuse, delayed/failed/incomplete downloads, paused-round preservation and retry, and navigation during an unfinished resume.

## Content Improvement Workflow

Each content pass starts with live feedback before general corpus work:

1. Check open Supabase feedback:

```sh
npm run feedback:list
```

2. Fix flagged source content first. For translation flags, update `src/data/translations.js`; for English/source issues, update `src/data/statements.js` and then localize the changed item.
3. Regenerate and validate:

```sh
npm run build:content
npm test
npm run build
git diff --check
```

4. Clear the handled feedback row. Prefer marking it fixed if `supabase/feedback-review.sql` has been run:

```sh
npm run feedback:resolve -- --statement-id dp_example --created-at "2026-06-08T15:20:15.35+00:00" --note "Fixed translation in commit <sha>"
```

If review columns are not installed yet, delete the exact handled row instead:

```sh
npm run feedback:delete -- --statement-id dp_example --created-at "2026-06-08T15:20:15.35+00:00"
```

When there are no open feedback rows, continue the normal bounded improvement loop using `src/md/gold-standard-content-comparison.md`, `src/md/content-quality-audit-2026-06-05.md`, and `src/md/EFT_Exercises_Extracted.md`.

The progress checks cover empty/sparse/full radar profiles, difficulty overlays and focused levels, missing-level gaps, source separation, personal practice targeting, loading failures, source-switch/sign-out races, and Norwegian at 320px. The query check exercises the real backend adapter and installed Supabase SDK against local mocked HTTP, verifying therapist ownership, source, ordering, and limit filters. It does not verify deployed database policies or live persistence.

## Groups on separate devices

Choose **Group** in the initial **Choose how to practice** panel, then **Create room** and invite the group through **Share invite** or a room code. The room can be created and joined before selecting a skill or case. The host chooses practice through the normal library and can change the skill, case or language between rounds. Choose **Individual** there for solo practice, or enable **Use one shared device** for the local three-role workflow. The case screen does not repeat the format selector. Selecting a case first and creating its room also remains available. Participants sign in and use **Join with a code**, or open an invite link with the code already filled. Automatic assignment fills therapist, client, active observer, then watching observers; the host starts as therapist unless they choose another initial role. Roles can be changed while choosing or preparing. Keep a video call open for speaking; the app does not provide or record audio/video.

Rooms use the app's normal header and practice layout. The host chooses practice and ends the room. The active observer starts, finishes or passes items and continues between sets; in a pair those controls belong to the therapist. Each item stays on one screen while the group speaks through client statement → therapist response → client feedback → observer coaching → repeated statement and retry. A numbered workflow guide opens for observers and the therapist in a pair. Its final tile marks the saved therapist rating **after every set of three items**, separate from spoken feedback on every item. There are no taps between these spoken steps: use **Finish item** after the retry. Pairs skip the observer coaching step. Roles, skill and case stay fixed for the complete twelve-item round. With three or more, the active seats are therapist, client and observer; additional members watch. After item twelve, everyone chooses their next role and the host chooses skill and case again. The room and its membership stay intact; there is no automatic role rotation between sets. Display names identify participants without sharing account emails.

**Room & people** contains invites, the roster, role changes and exit controls. It folds away throughout the sequence; while the host chooses practice, an invite strip and role selector stay visible outside it. Unsubmitted role choices survive background synchronization unless another participant takes that role. A taken choice resets to the participant’s actual role. Each active role belongs to one person; simultaneous claims are resolved by a database lock and version check. Starting requires therapist and client, plus an active observer for three or more members, and current acknowledgements from all active devices. Missing roles are named in preparation. The active guide's next action stays at the bottom on phones with room for the device safe area. The duplicate group title and **Library** shortcut are hidden during preparation, items and reflection. The host can still **Change skill or case** during preparation. During room setup, **Library** opens the library without leaving membership; **Return to room** restores the session. **Leave room** removes a participant, while **End room for everyone** closes the session for the entire group. Both exits have an in-app confirmation. Ended rooms offer **Back to library** and **New room**, with no role badge or room administration. A watching observer can leave without interrupting practice. Leaving an active role returns the group to preparation and clears the unfinished round; saved ratings stay. Uncertain leave requests can be replayed even after membership has been removed.

Preparation keeps role-specific information. The client sees the full case brief before each round: short description, schema, core pain, style, listening cues and client voice. These fields stack on phones and use two columns for the background on wider screens; unavailable fields are omitted. Therapist and observer preparation keeps the skill focus and one brief role reminder. Repeated preparation headings, common-miss text and generic group instructions are omitted. Other participants see who starts the round; a pair therapist gets a short start/finish cue. Self-awareness preparation retains voluntary sharing, the reader's transition out of role and privacy boundaries. The full client brief is replaced by the statement when the round starts.

The client alone sees the statement. The therapist and observers see the skill cue. **Your part** is a compact role card with an always-visible action preview and three short, labelled instructions when expanded. It covers the client's in-role feedback, the therapist's choice of one change, and the observer's skill-focused coaching and completion/rating responsibilities. Watching observers have two cues; pair therapists also get a finish/self-assessment cue. Cards start collapsed and retain their expanded state between items for that role. The workflow stays first for the active guide; other roles see their own card before the optional workflow. The therapist’s retry row contains a single **See an example** button, intended for use after their own attempt and feedback. It toggles to **Hide example**; examples reset with each item. There is no separate retry panel below the workflow. Self-awareness has distinct reader/noticing guidance and retains voluntary sharing and privacy boundaries.

The database owns the round, item order, roles and version. Active participants acknowledge the current item after its content is loaded and rendered; finishing or passing waits for those acknowledgements and heartbeats within 20 seconds. Watching observers do not block progression. Realtime wakes the snapshot fetcher; polling every 1.5 seconds and focus/online recovery also retrieve saved state. Backgrounded devices and hidden room screens do not acknowledge new items. Requests time out after 12 seconds, and uncertain commands retain a UUID across reload for safe replay. Network loss can delay progression; screen changes are not guaranteed to be simultaneous.

Ratings assess **how well the therapist used the selected skill**, across completed items in the current set of three. Each of the four sets has its own rating ID; saving again updates that set without overwriting previous sets or duplicating ratings. In pairs the therapist saves a self-assessment; with an active observer, that observer saves the rating. The scale runs from 1 (not yet demonstrated) to 5 (skillfully demonstrated). These scores use the same `group-skill-v2` scale as individual self-ratings; obsolete scales are no longer supported. Passed items are excluded. Joining permits ratings within that room without creating an enduring account pairing. Only the designated rater can save, regardless of who hosts. Rooms expire after eight hours; expiration prevents joining and progression but does not delete saved ratings.

Reflection gives each role one short prompt at each checkpoint. Stepping out of role and optional guidance for the next challenge appear after the last set. The rating choices include their scale meanings. **Save skill rating** is the primary phone action until saved, alongside an explicit **Continue without rating**; after saving, **Next 3 items · keep roles** becomes primary; after the fourth set, **Choose roles, skill & case** returns the room to setup. Editing a score offers **Update rating** or **Continue without changes**. Other roles see who rates and advances. All-passed sets show no rating form or performance reflection prompt. Healthy synchronization messages stay out of the item/reflection screens; waiting and connection problems remain visible.

For a fresh backend, apply `supabase/auth-pairing-practice.sql` first, then the files in `supabase/migrations/` in filename order. The four-set migration `20261002184211_four_sets_per_group_round.sql` was applied to the connected project on 2026-10-02 (hosted migration `20261002193430_four_sets_per_group_round`). All four SQL fixture suites passed on its Postgres 17 database, with existing ratings and rooms preserved. The role-completeness follow-up `20261002201359_require_complete_group_roles.sql` was applied on the same date as hosted migration `20261002202918_require_complete_group_roles`. All four updated SQL suites passed on hosted Postgres 17, including missing-role rejection after complete-round reselection. Before/after checksums confirm all 410 existing ratings and 12 rooms are unchanged. Authenticated-only RPC access, its fixed search path, and table RLS are preserved; advisor findings are unchanged. This frontend release includes the polished group screens, twelve-item bilingual content, and four-set workflow from PRs #86–#88. Existing three-item rooms remain compatible and finish with their original rotation behavior; new clients explicitly request twelve-item rounds. The room module is downloaded only when this feature is opened.

Verification:

- `npm test` runs the isolated database suite as well as unit/content checks, including ordered snapshots, acknowledgement timing, background devices, cancelled snapshots, uncertain configuration/command replay and stopping synchronization after departure.
- `scripts/check-room-flows.js` covers legacy three-item rooms and uses five isolated browser contexts with an intercepted backend, covering room creation before selection, host library selection, observer-led whole items, workflow guides, control transfer after rotation, active/watching role screens, offline spectators, reconnect, reload/retry, lost-response leave recovery, passing, ratings, rotation, Norwegian self-awareness and 320px layout.
- `npm run test:rooms:db` builds an isolated PGlite Postgres database from the checked-in schema and migrations, then exercises the real RPCs. Only Supabase Auth is stubbed. It verifies four separate rating identities, set-only item IDs/counts, duplicate/update commands, guide authority, fixed roles, and the final setup reset for two to four participants. It also rejects stale/occupied role claims and attempts to start with each required role missing after a complete round, and checks legacy three-item behavior. This local Postgres 18 check does not replace verification on the hosted Postgres 17 project.
- `scripts/check-four-set-room-flows.js` runs four phone-sized browser contexts against those real local RPCs. Start `npm run test:rooms:db -- --serve`, then run the script through Playwright CLI. It verifies lost-response retry, checkpoint reconnect, all four ratings, role/content reselection, simultaneous client claims, rejected missing-observer starts in the UI and RPC, valid two-person starts, pair self-assessment, all-passed sets and 320px layout, without live writes.
- `scripts/check-four-set-rooms.sql` is the corresponding rolled-back fixture test for the deployed database.
- `scripts/check-practice-rooms.sql` checks permissions, role claiming, acknowledgements, transitions, replay, rating identity and rotation in a rolled-back database transaction. It creates no persistent test users or ratings.
- `scripts/check-room-item-workflow.sql` checks observer/pair-therapist control authority, host separation, whole-item replay, fresh acknowledgements, rotation and completion of legacy phases in a rolled-back transaction.
- `scripts/check-room-lifecycle.sql` checks empty rooms, configuration ownership/replay, joining before selection, stale acknowledgements, active/passive departure, membership removal, leave replay and closing configured or empty rooms in a rolled-back transaction.

The automated browser test is run through the Playwright CLI against the development preview, following the same pattern as the other browser scripts.

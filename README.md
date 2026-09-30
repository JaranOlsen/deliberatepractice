# Deliberate Practice Lab

Standalone Vite app split from `JaranOlsen/Planet`.

## Practice Formats

- **Individual** keeps the original ten-item practice round and optional suggested responses.
- **Group of three** gives an observer-controlled, three-item round for a therapist, client, and observer. Each item moves through a first response, client impact feedback, observer coaching, and a therapist retry before the group debriefs.

Returning users open the skill library in their remembered language. **Prepare another round** restores the last skill, case, and format for review before starting. A paused round takes priority over this shortcut. The setup is remembered only after practice begins; locked cases still require access.

Library descriptions and guides load immediately. Exercises download only for the selected skill and language and are reused across that skill's cases. Starting and resuming wait for valid content; a failed or stalled download offers retry without discarding a paused round.

Individual practice keeps the skill criterion visible. Try aloud before comparing an example, then use **Hide example and try again** to revisit the same item without changing progress. Self-awareness instead invites noticing internal reactions, with no obligation to respond to the client or disclose a reflection.

**Your progress** is available from the signed-in skill library and Account. Its radar keeps the same twelve skill axes, distinguishes missing ratings from zero, and separates self-ratings from observer ratings received by the signed-in therapist. Skill cards show the latest rating/date/difficulty, weighted average, rating count, and rated-item count, with a shortcut back to practice. The view uses up to 500 latest ratings per source and explains the existing item/recency weighting. Starting from personal history selects the signed-in therapist; active rounds cannot be replaced from this panel.

Progress also separates rating scales: **Individual · mastery**, **Group · consistency**, and **Earlier · scale unspecified**. New ratings store their practice format and rubric version. Older records remain unclassified and available in their own view; the app does not guess their format or mix them with known scales. The 500-rating limit applies independently to each source/scale combination.

Triad feedback is spoken and is not recorded or stored. Signing in remains optional; existing partner pairing can be used to save one round-level observer rating after completed triad items.

Back to cases offers **Continue**, **Pause and leave**, or **Finish completed items**. Paused rounds retain their item order and feedback phase; finishing clears the resumable round and shows completed/passed counts. The therapist selected at the start remains the rating recipient for that round. Self-awareness uses a separate group sequence that respects the trainee's choice about sharing internal reactions.

Starting a new round waits for account and therapist selection to finish loading. Each round retains a UUID across pause/resume and save retries. If a save response is lost, retrying updates the same database rating, including a revised score, instead of adding a duplicate. The database rejects reuse of that UUID for a different round. Older clients without a UUID remain supported but do not gain retry deduplication.

## Local Development

```sh
npm install
npm run dev
```

Optional Supabase-backed feedback, access-code, auth, pairing, and rating features are enabled at build time when these variables are present. For local branch testing, put them in `.env.local`:

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

The browser scripts clear local storage in their isolated test browser and intercept backend calls. They cover remembered setup, individual comparison/retry, pause/resume, individual and group completion, self-awareness, English/Norwegian controls, mobile overflow, dialog keyboard behavior, delayed account loading, and failed/successful rating saves. They never send real emails or write live ratings. Live authentication, pairing, and database persistence require a separate check; the latest results are recorded in `src/md/release-verification-2026-09-30.md`.

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
Run `supabase/auth-pairing-practice.sql` in the Supabase SQL editor to create profile, pairing, partnership, and practice-rating tables and RPCs.

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

The progress checks cover empty/sparse/full radar profiles, source separation, personal practice targeting, loading failures, source-switch/sign-out races, and Norwegian at 320px. The query check exercises the real backend adapter and installed Supabase SDK against local mocked HTTP, verifying therapist ownership, source, ordering, and limit filters. It does not verify deployed database policies or live persistence.

## Groups on separate devices

The observer chooses a skill and case, selects **Group of three**, and uses **Use separate devices · Create group room**. The other two participants open **Group on separate devices**, enter the room code, and choose therapist or client. All three participants sign in with their own account. Keep your video call open for speaking; the app does not provide or record audio/video.

Each device shows preparation and guidance for its role. Only the observer advances or passes an item. The therapist listens to the client read the line and can open an example during retry; the client never sees suggested responses. Self-awareness practice assigns the client the reader role and retains the disclosure boundary.

The database stores the authoritative round, phase, item order, roles and version. Each device acknowledges a step after its content is loaded and rendered. Progression waits for all three devices to acknowledge the same version with a heartbeat within 20 seconds. Realtime wakes the snapshot fetcher; polling every 1.5 seconds and focus/online recovery also retrieve saved state. Backgrounded devices do not acknowledge new steps. Requests time out after 12 seconds, and ambiguous commands retain a UUID across reload for safe replay. Network loss can delay progression; it cannot be treated as a guaranteed simultaneous screen change.

After debrief, the observer may save an optional group-consistency rating for the room's therapist or rotate roles for another round. Joining explicitly allows ratings during that room; it does not establish an enduring account pairing. Passed items do not count toward a rating. Room membership and the observer role are checked on the server. The room expires after eight hours. Expiration stops joining and progression; it does not delete metadata or saved ratings. Spoken feedback and responses are not stored.

For a fresh backend, apply `supabase/auth-pairing-practice.sql` first, then the files in `supabase/migrations/` in filename order. These room migrations have already been applied to the connected project. The room module is downloaded only when this feature is opened.

Verification:

- `npm test` includes ordered snapshots, acknowledgement timing, background devices, cancelled snapshots, and uncertain command replay.
- `scripts/check-room-flows.js` uses three isolated browser contexts with an intercepted backend, covering role screens, reconnect, reload/retry, passing, ratings, rotation, Norwegian self-awareness and 320px layout.
- `scripts/check-practice-rooms.sql` checks permissions, role claiming, acknowledgements, transitions, replay, rating identity and rotation in a rolled-back database transaction. It creates no persistent test users or ratings.

The automated browser test is run through the Playwright CLI against the development preview, following the same pattern as the other browser scripts.

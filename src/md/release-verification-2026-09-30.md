# Release verification — 30 September 2026

This records the follow-up to `app-review-2026-09-29.md`. Frontend changes are prepared for review on `codex/Astra` and have not been deployed. The radar remains part of the progress view, with fixed skill axes and separate self/observer sources.

## Live backend verification

The existing Supabase project was paused. It was restored to ACTIVE_HEALTHY with its existing data intact. Auth health and profiles, partnership, and rating schema checks pass through `npm run check:backend`.

With two user-authorized accounts in separate browser contexts, verified:

- Magic-link authentication and the local redirect. Ordinary app sign-in emails returned success; the user confirmed delivery to both inboxes.
- Creating and accepting a pairing through the app, then selecting the paired therapist.
- Saving an individual self-rating and a group observer rating for the other account; the therapist can see the received observer rating in progress.
- Database row visibility: the therapist can read both test ratings; the observer can read their own submitted rating but cannot read the therapist's private self-rating; anonymous reads expose neither.
- Revoking the test partnership; an additional observer save is rejected by the server with the accepted-pairing requirement.
- A real save that commits before its browser response is deliberately lost. Retry returns the same rating ID; simultaneous retries also share that ID. Reusing the ID for another case is rejected. An older client omitting the new round ID still saves successfully.

All ratings created by these tests were deleted by their exact IDs. The test partnership is revoked. Existing accounts and unrelated records were retained.

## Backend changes applied

Cloud migration `restrict_practice_function_execution` fixes helper function search paths and removes anonymous/public execution of account, pairing, and rating functions. Authenticated access remains explicit; trigger helpers are not callable as API endpoints.

Cloud migration `deduplicate_practice_round_ratings` adds `client_round_id` and a unique constraint by creator and round, and extends the rating RPC to return/update the existing rating on retry. These changes are also reflected in the canonical `supabase/auth-pairing-practice.sql` setup script. They are live even though the frontend has not been deployed.

Cloud migration `record_practice_rating_scales` records practice mode and rubric version for new ratings. The database rejects mismatched format/scale combinations and refuses to change an existing round's scale on retry. Legacy clients remain supported with both fields unspecified; existing rows are not backfilled. Live saves, rejection checks, the real query adapter, and radar views verify that individual mastery, group consistency, and unspecified older ratings remain separate.

The security advisor no longer reports mutable function search paths. Remaining findings were reviewed: tables accessed only through RPC intentionally have no direct RLS policies, access-code redemption intentionally allows anonymous use, and the signed-in RPCs enforce account/pairing checks. Leaked-password protection is still disabled; this app's sign-in flow uses email links. Relevant advisor guidance: [RPC-only tables](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [anonymous definer functions](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable), [authenticated definer functions](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Frontend fixes from live testing

A fast start after reload could capture no therapist before account details loaded, leaving a signed-in user with an unsavable guest round. Starting now waits for the account and target. A browser regression deliberately holds the profile request and verifies that no guest round starts, then releases it and checks the captured therapist.

Round UUIDs persist across pause/reload and rating retries. Save-failure wording now acknowledges an uncertain result, retains the chosen score, and permits retry against the same ID. Browser and unit checks cover this identity lifecycle.

## Automated checks

- `npm test`: 1,080 source items and translations validated; 17 unit tests pass, including parity checks for all 2,160 English/Norwegian runtime exercises and the library/guide/glossary metadata.
- `npm run build`: succeeds without the large-chunk warning. The application chunk fell from 1,719,841 to about 254,000 bytes; gzip fell from 300,859 to about 75,000 bytes (75% smaller). The separate Supabase chunk is unchanged.
- `scripts/check-practice-flows.js`: isolated browser checks pass, including delayed account loading, guest and signed-in lifecycle, group rotation/pass/debrief, immutable therapist, save failures/retry, keyboard dialogs, and Norwegian narrow layouts.
- Progress/radar and real SDK query-adapter checks pass, including individual/group/legacy scale filters, source and scale change races, and narrow Norwegian layouts.
- `scripts/check-content-loading.js` passes against the production preview: no exercises downloaded at startup, only the chosen language/skill fetched, case changes reuse content, and delayed/failed/incomplete downloads cannot start an empty round. Resume failure retains the stored round; retry restores its position/ID, and a late response cannot override navigation.

## Runtime content delivery

The browser now loads compact library metadata and fetches one exercise file for the selected skill/language. It no longer imports the editorial registry, review metadata, or the entire bilingual exercise corpus at startup. Identical case descriptions are shared across skills; text, exercise order, stable IDs, revision, criteria tags, and report track are unchanged. These are transfer/parse reductions, not claims about measured wall-clock speed on a throttled device.

Vite regenerates runtime files for dev/build and watches source-data changes. Content generation refreshes them after editorial artifacts; tests reject stale output. Downloads have a 20-second timeout and a visible retry; failed data is not cached. A paused round is applied only after its exercises are available.

## Remaining release work

The individual/group scale boundary is now handled by separate queries and views. Older ratings have an explicit unspecified-scale explanation and retain their original meaning as far as the stored data allows.

The main bundle reduction is verified in the production build. Further device/network performance measurement can guide any additional optimization; the first release no longer needs the full exercise corpus to open its library.

## Separate-device group rooms

The user identified video-call groups as an important use case. Separate-device rooms now complement the shared-device group mode. The observer creates a room from the chosen case; signed-in therapist/client participants join by code. Each sees role-specific preparation and phase guidance. Examples are absent before retry and never appear on the client screen. Self-awareness uses reader prompts rather than treating private reactions as performances.

Server transitions lock the room and check observer identity, expected version, and fresh acknowledgements from all three devices. Durable command receipts prevent duplicate progression when a response is lost, including across reload. Role rotation updates all assignments atomically. Ratings use the immutable server therapist, completed IDs and group rubric; joining grants room-scoped rating consent without changing partnerships. Identity collisions with unrelated ratings are rejected.

`shared_practice_rooms` and `harden_room_rating_identity` were applied to the connected Supabase project. Room SELECT is member-only; raw writes and anonymous RPC execution are denied. Private presence/receipt tables intentionally have no client policies or schema access. New RPC advisor warnings reflect intentional signed-in, explicitly guarded endpoints; guidance remains [authenticated definer functions](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable). The new foreign keys have covering indexes. Existing unrelated performance advisories were left unchanged.

Verification completed:

- 25 unit tests and all existing content validations pass. The retained radar/progress and existing individual/shared-device browser checks also pass.
- A rolled-back SQL test uses three participants plus an outsider and checks occupied roles, missing/stale acknowledgements, non-observer control rejection, stale commands, command replay, pass counts, rating identity, rotation, direct SELECT RLS and raw-write rejection. No fixture users or ratings remain.
- Three isolated browser contexts pass the role flow, connection loss, reload with an uncertain command, group rating, role rotation, English/Norwegian self-awareness and 320px checks. A room setup dismissed before its configuration resolves cannot create a room later. These browser tests mock the backend.
- Two real authorized accounts pass authenticated room creation/join/SELECT, missing-third-member rejection, Realtime UPDATE delivery, replay and durable snapshot recovery. The first notification probe did not receive an update immediately after subscription; a subsequent probe after subscription setup did receive it. Polling is deliberately retained to cover subscription startup and missed events. The live test room was removed and its test sessions signed out; no persistent ratings were created by this probe.
- The room UI is loaded on demand, adding about 7.5KB gzip when opened. The production build remains free of large-chunk warnings.

A live three-account browser test also completes the round, saves one group-consistency rating with two passes excluded, pauses rotation after a client disconnects for over 20 seconds, restores that client after reload, rotates all roles and ends the session for everyone. The database confirms the intended therapist, score 4, item count 1 and group rubric. Test rooms and ratings are removed afterward.

A real three-person session across separate phones and networks remains unverified. Automated checks establish the state/permission behavior but do not measure background suspension, mobile network latency or usability during an actual video call. Frontend changes remain on the draft release branch and have not been deployed.


## Flexible groups in the app (October 1, Oslo time)

Group is now the primary/default format, with individual practice and an optional shared-device group flow retained. Rooms render as ordinary app sections with the compact practice header, account controls and visual styling. Leaving the room section stops synchronization and acknowledgement until it is reopened.

The immutable host controls progression independently of the rotating roles. Two-person rooms use therapist/client and skip observer coaching; larger groups add an active observer and watching observers. Lobby role changes are server checked. The stored full rotation queue gives every member equal turns, including groups larger than three. Only active seats must acknowledge each step; offline spectators do not stall the group. Room snapshots include member display names, without account emails.

New group ratings assess the therapist's use of the selected skill under `group-skill-v2`. Pairs save a therapist self-assessment; an active observer saves the assessment in larger groups. The host has no additional rating authority. Earlier consistency ratings remain in a separate radar filter. Newly saved room ratings select the matching source and scale in progress.

Validation:

- 26 unit tests, content/runtime parity and the production build pass. All 1,080 items in each language remain unchanged. The main chunk is about 76KB gzip; group rooms add about 8.3KB gzip when opened.
- Existing individual/shared-device practice, radar/progress and real SDK query checks pass, including the new group scale and historical scale separation.
- Rolled-back database checks pass for pair self-assessment, host/role independence, active acknowledgement barriers, watching-member SELECT access, unchanged raw-write restrictions and five rounds with five different therapists. No fixture users or ratings persist.
- A live isolated browser test with the three authorized accounts completes a two-person round, saves one self-assessment, rotates, adds the third participant, completes a three-person round and saves one observer assessment. The database confirms the intended therapist/rater/source, scores 4 and 3, one completed item per rating and the new rubric. Host controls stay fixed while roles rotate; shared ending and the 320px layout pass. The exact test room/ratings were deleted and all isolated sessions signed out afterward.
- Five isolated browser contexts pass active/watching role screens, an offline spectator that does not stall the group, a watching observer rotating into therapist, uncertain-command reload/replay, reconnect, English/Norwegian self-awareness and 320px layouts. These tests intercept the backend.
- The connected project's flexible-group, fair-rotation and roster-name migrations are applied. Advisors show no new room permission exposure: guarded authenticated RPCs and inaccessible private presence/receipt tables retain their intentional advisories. The new roster index is unused so far, as expected with newly created small test rooms. Existing unrelated advisories remain unchanged.

Frontend remains on the draft release branch. Real phones on different networks still need a practical video-call trial before broad release.


## Phone room entry and lifecycle (October 1)

Rooms can now be created and joined before choosing practice. The host opens the normal language/skill/case library with a group-selection banner, then applies that selection to the existing room. The host can change the language, skill or case between rounds while preserving the roster and host. An invite link pre-fills the join code and is removed from the URL after joining.

On phones, the roster, invite, role and exit controls fold into Room & people during exercises. The client’s line appears on the first screen and the host’s next action stays at the bottom with touch-sized controls and safe-area padding. Library, Leave room and End room for everyone now have distinct meanings; the latter two use an in-app confirmation with keyboard focus and background isolation. A watching departure keeps the round running. Leaving an active role starts a fresh preparation round, preserving existing saved ratings.

The `room_lobby_and_lifecycle` migration is applied to the connected project. Configuration is host-only, version-checked and restricted to choosing/preparation; a durable receipt also records the exact configuration. Leave receipts can be replayed after removal from member-only SELECT access, returning only a departure acknowledgement. Raw writes and anonymous RPC access remain denied. The new authenticated definer advisory is intentional for the guarded preparation endpoint; the existing unrelated advisories are unchanged.

Validation:

- 28 unit tests, all content/runtime parity checks, the production build and read-only backend schema checks pass. The main application is about 77.3KB gzip; the lazy room module is about 10.9KB gzip.
- Five isolated browser contexts cover empty-room entry, ordinary host library selection, uncertain preparation, phone exercise/action visibility, leave cancellation, committed-leave response loss and reload recovery, end confirmation, and the existing role/reconnect/rating/rotation scenarios.
- Rolled-back database checks cover joining before selection, host configuration ownership, configuration replay and identity rejection, active-round configuration denial, acknowledgement invalidation, active/passive departures, removed-member permissions, leave replay, host exit restrictions and empty/configured room closure. No fixture users or ratings persist.
- A live isolated test with the three authorized accounts verifies room creation before selection, invite entry, host selection, phone first-screen and bottom-action placement, leave cancellation, active departure, vacant-role reassignment, changing to Norwegian self-awareness, 320px layout, confirmation focus and shared room ending. No ratings were created. The exact four test rooms, including rooms from interrupted test runs, were removed; the three isolated login sessions were signed out and their temporary credentials deleted.
- Existing individual/shared-device practice, radar/progress and real SDK query-adapter browser checks pass.

Frontend changes remain on the draft release branch and are not deployed. These browser tests use phone-sized viewports; a video-call trial on actual phones and different networks remains to be done.


## One initial format choice

The library entry panel now combines Individual/Group selection with creating, joining and returning to a room. Separate-device Group is still the default; the optional shared-device checkbox belongs to the same initial choice. Individual and shared-device practice hide the room actions. The case preparation screen no longer contains a second format selector, and host selection does not expose it. Preferences and active-round protection remain in place.

The individual/shared-device browser regression now chooses format before language/skill/case and checks that room actions match the selection and case preparation never repeats it. The five-context group regression passes from the same combined entry. Phone screenshots were inspected, including the compact two-column choice cards. All 28 unit tests, content parity and production build pass. This change requires no additional backend migration.


## Retire the duplicate partner connection flow

Group rooms now provide the only connection flow in the app. The older partner-code invite/accept/revoke panel, active-therapist selector and For header button were removed, along with their event handlers and frontend RPC adapters. Account consistently opens the account panel during local practice. New local rounds use the signed-in account’s own target, even if an old paired-therapist preference remains in storage. Shared-device rating copy explicitly describes a self-assessment and directs ratings of another therapist to separate-device rooms.

Historical self/observer ratings, the radar and legacy partnership data remain intact. A paused round from the previous partner flow retains its captured therapist/rater and can still finish under its existing permission; removing the selector does not retarget it. No database migration, partnership revocation or live data deletion was performed for this refinement.

Validation: all 28 unit tests, content parity, production build and read-only backend checks pass. Browser regressions verify the removed controls, Account navigation, stale paired-target preferences, new local self-assessment ownership and completion of an old paused observer round for its original therapist. The five-context room test still passes invitation, role screens, observer ratings, synchronization, rotation, departure recovery and narrow layouts. Historical self/observer source and scale filters, personal practice targets and the retained radar pass the progress regression. Browser rating tests use an intercepted backend and make no live writes.


## Observer-led whole items (October 1)

The active observer now guides practice: starting, finishing or passing items and rotating roles. Without an active observer, the therapist guides the pair. The host still chooses practice, invites participants and ends the room. Exercise controls follow the active guide after rotation, independently of the fixed host.

Each item remains on one screen through response, client feedback, observer coaching and retry. A numbered workflow graphic opens for observers and the therapist in a pair; other roles can expand it. The guide uses three steps in pairs and preserves the separate self-awareness instructions and disclosure boundary. One Finish item action resolves the item after the spoken retry. Examples require a deliberate local reveal for the retry and reset with the next item; clients never see suggested responses. No intermediate spoken substep is recorded or remotely highlighted.

The connected project's `observer_led_item_workflow` migration is applied. It adds the practicing phase and atomic finish_item command, checks observer/pair-therapist authority on the server and retains version checks, fresh active-device acknowledgements and exact command receipts. Existing pre-upgrade feedback phases can finish into the next whole item without resetting the round. Rating identity, passed-item exclusion and fair full-roster rotation remain unchanged. Advisors report no new findings.

Validation:

- All 28 unit tests, English/Norwegian content parity, production build and read-only backend checks pass. The lazy room module is about 11.7KB gzip.
- Five isolated browser contexts pass the numbered workflow, explicit example reveal/reset, observer-only exercise controls, control transfer after rotation, committed-finish response loss and reload without duplicate completion, reconnect, watching departures, rating, Norwegian self-awareness and 320px layouts. These checks intercept the backend.
- All three rolled-back room SQL scripts pass. They cover host/guide separation, two-person therapist authority, rejected watcher controls, legacy phases, item completion replay, acknowledgement freshness, rating identity, lifecycle recovery and five-person fair rotation. No fixture users or ratings persist.
- A live isolated browser test with the three authorized accounts passes pair guidance with a client host, three-step pair and four-step observer graphics, whole-item completion/passes, pair and observer control transfer after rotation, observer rating and shared host ending. The database confirms the intended therapist and observer, score 4, one completed item and group-skill-v2. Exact rooms and ratings from all test runs were removed, and the three isolated sessions were signed out with temporary credentials deleted.

Frontend changes remain on the draft release branch. Phone-sized browser checks do not replace a practical video-call trial on actual phones and different networks.

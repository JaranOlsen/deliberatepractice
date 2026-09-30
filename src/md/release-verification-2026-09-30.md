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

# AI practice polish

Implements the first three priorities from the status review: paid-AI reliability,
a coherent individual practice flow, and durable resume/history. Prices and the
120-credit subscription allowance remain unchanged. Group, shared-device,
mastery and human self/observer progress behavior are preserved.

## Paid reliability

Credit balance and subscription-status refreshes now have separate request
identity from checkout/portal actions. A refresh cannot discard an opening
checkout or leave its controls permanently busy. Account changes still cancel
old actions. Phone tests deliberately refresh a balance during a delayed checkout
and require exactly one redirect.

Service protections are configured in the server-only `ai_service_limits` table:
240 provider calls/hour per account, two concurrent operations per account and
20 across the service. Unmetered admins retain a 200/day cap. Paid daily use is
funded by their credit balance, not the old shared 600-request pilot allowance.
There is a 20/day failed-provider-call guard and an emergency `enabled` switch.
An optional `daily_cost_usd` stop is unset by default; existing OpenAI project
spending settings are unchanged. Cost monitoring includes failed/invalid outputs.

`ai_provider_usage` stores action, model, outcome, latency and usage/cost fields,
without practice text, recordings, authentication tokens or personal notes. Provider token and
transcription-duration usage are priced at checked standard rates; synthesis is
explicitly estimated and unknown model costs are marked. Admin Account shows a
seven-day aggregate, including estimates/unpriced calls. No customer identities
or feedback are returned by that operational endpoint.

Transcription in the hosted service accepts bounded mono PCM WAV, validating the
actual recording duration rather than trusting a browser-declared duration.
The browser converts its recording to WAV once and reuses it for delivery review.
This limits oversized/overlong recordings under the fixed transcription price.
Development serving also denies ignored `.local` files used for credentials.

## One individual practice route

AI is selected on the normal case preparation screen. It has no second visible
skill/case library. A user chooses speaking or writing, with optional AI voices,
vocal delivery feedback, transcript review, history and on-device written
retention. A first fully spoken attempt displays a seven-credit total; a coached
retry typically uses six because the client clip is replayed.

After recording finishes, transcription, wording assessment, delivery review
and supervisor speech run in sequence. Transcript review can be enabled before
automatic assessment. Original recording replay remains available while the
attempt is open. Word/meaning scores are clearly separated from qualitative
experimental delivery feedback. Examples remain after the initial attempt.

Generated clips are cached in memory for free replay throughout the round.
Expired server clips require an explicit new generation; no automatic extra
charge occurs. A supervisor clip can be rebuilt from owned, verified saved
feedback. Browser autoplay refusal gives a useful tap-to-play message.

Startup has a visible loading state and can be cancelled safely: a late status
response cannot reopen an exercise or start paid voices after Home was chosen.
An unfinished AI round must be explicitly ended before another replaces it.

## Resume and AI history

Round identity, position, feedback and pending request IDs are saved to a
user-scoped device snapshot for up to 30 days. Written responses/drafts and
quotation evidence are retained there only under the chosen written-retention
setting. Canonical teaching banks and recordings are not copied into snapshots.
Recordings are cleared on leave/retry/account change. Pending transcription can
be recovered from its owned short-lived receipt without paying for a second
transcription. Content revision changes require a new round rather than pairing
old feedback with updated client statements. Temporary loss of premium access
does not delete the paused snapshot.

If selected, server settlement atomically saves score and short feedback to
`ai_practice_attempts`. It stores no original response text, quotation evidence
or recording. AI history in Account shows first and coached scores separately,
with a strength and next target. It remains readable after subscription access
ends. History never writes or contributes to the self/observer radar.

Users can delete a session from AI history. A server tombstone prevents an
already-pending assessment from recreating a deleted history entry. All writes
are service-only; authenticated users may read only their own feedback. Identity
is verified even for read/delete/recovery routes that remain available without
current AI credits. Temporary replay payloads retain the established 15-minute
lifetime and scheduled cleanup.

## Calendar and validation

The monthly credit-window helper handles January 31, leap-year February 29,
late-month anniversaries and paid-period endings without changing real billing
time. Sandbox subscription grants are allowed only in test configuration for
existing test admins; they do not grant production access.

Validation passes 144 Node tests, 17 isolated Postgres suites, production build and
both Edge bundles. English/Norwegian phone probes at 320/390 px cover the full
spoken pipeline, free clip replay, explicit regeneration, pause/reload recovery,
first/coached history, cancelled startup, enlarged text and checkout refresh.
Existing sign-in/subscription and credit-exhaustion phone probes also pass.

Real Stripe sandbox lifecycle checks passed on October 11 using the production
billing service and an isolated PGlite database. Annual hosted Checkout granted
120 credits for the current month, and both 120/360-credit packs fulfilled from
signed webhooks. Lost-response checkout replay reused the same session. Duplicate
paid/refund events did not add or revoke credits twice. Non-admin spending used
included credits first; purchased credits remained usable after cancellation.
Partial and full refunds affected only their purchased pack. Stripe test clocks
verified a successful monthly renewal extends paid access and a failed renewal
does not grant an unpaid period. No live charges or production access changes
were used for these tests. Test customers/subscriptions are deleted at cleanup.

Repeat the checks with a test key in ignored `.env.billing.polish.local`:
`node --env-file=.env.billing.polish.local scripts/check-billing-sandbox.mjs --sandbox`.
Complete its three isolated hosted test Checkouts, then use its `/verify/*` routes
in the documented sequence in the script. Automated renewals use the additional
`--renewals` flag. The test harness forwards real signed Stripe CLI events and
never connects to production Supabase. Live configuration and approved prices
are unchanged. Release requires both new migrations and both Edge deployments
with the matching frontend.

Cost estimate and measured samples: [API cost of 100 credits](ai-credit-api-cost-2026-10-10.md).

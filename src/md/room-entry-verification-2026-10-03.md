# Room entry, preparation and hosting

Implemented on `codex/room-entry-readiness`, based on production `5b5d7c6`. The hosted migration has been applied and verified; the frontend remains in draft PR #89 and the local preview.

## Behavior

- Both typed and linked invitations carry a validated twelve-character code through the email callback. A fresh browser opens Join with that code, without relying on the original browser's storage. Successful joining, explicit cancellation, Create and Resume clear abandoned invitation context. Invitations do not silently resume a different saved room.
- Preparation displays the essential role assignments and participant names directly. Missing roles, preparing participants, synchronization and lost connections are distinct states. Watching participants retain their own role badge.
- New rooms use explicit readiness. The client and therapist confirm once during preparation; the observer starts. In a pair, the client confirms and the therapist starts. There are no readiness taps between the twelve spoken items or their four rating checkpoints.
- Participants can withdraw readiness before the start. Role or material changes generate a new preparation identity and clear readiness. Late commands for old preparation are rejected; simultaneous Ready actions for the same preparation both succeed.
- Hosting can be transferred to a connected, synchronized member through Room & people, with confirmation. Hosting changes preserve the current roles, material, item, round and saved ratings. The former host may leave and loses material-selection/end-room authority.
- If the host has not been active in the room for five minutes, another connected member can explicitly take over hosting. This never automatically changes an essential role or bypasses synchronization. In particular, an absent client still blocks progression after takeover. A new room without a heartbeat does not immediately become eligible for takeover.

## Verification

- `npm test`: bilingual content validation, 43 unit/content tests and five isolated PostgreSQL fixture suites pass.
- `npm run build` and `git diff --check`: pass.
- `scripts/check-four-set-room-flows.js`: four 320px phone contexts against actual isolated PostgreSQL RPCs. Covers visible assignments, simultaneous readiness, the human start barrier, duplicate role claims, missing-role rejection, twelve fixed-role items, four distinct observer ratings, passed items, committed-response replay, saved-checkpoint reload, fresh role selection, pair readiness/self-assessment, hosting transfer with a lost response, takeover, and returning-host authority.
- `scripts/check-room-invite-flows.js`: real application backend and Supabase SDK, with all backend requests intercepted. Covers invalid/typed codes, the actual OTP redirect parameter, a fresh-browser callback, edited invitations, the management RPC allowlist/payload, and 320px sign-in. No emails are sent by this check.
- The existing hosted Auth verification endpoint was checked using an intentionally invalid token. Both production and localhost:5173 redirects retained the room query in the error callback, confirming the existing allowlist accepts those URLs. This did not authenticate or change an account. Fresh real-email delivery and native mail-app handoff were not repeated.
- Database fixtures additionally cover stale preparation tokens, readiness withdrawal/replay, unassigned/watching/non-member/unauthenticated callers, disconnected transfer targets, exact preparation replay after transfer, new-host material selection, private helper permissions, authenticated-only management RPCs, the fixed search path and room RLS/direct-update restrictions. All fixture data rolls back.
- The migration was applied to hosted Supabase on 2026-10-03. All five PostgreSQL fixture suites also pass there and roll back their fixture data. The security advisor reports the expected authenticated management RPC notice; anonymous access, room membership checks and private helper permissions are covered by the fixtures. Existing unrelated legacy findings remain outside this change.
- A reported missing preparation button was traced to the local Vite server serving old source and the pending hosted migration. The preview was restarted with polling enabled to detect editor/agent writes. The two current-content preparation rooms containing only the three authorized test accounts were opted into readiness without changing roles or material. The existing browser room was resumed and visibly shows “I’m ready.”

Screenshots: `output/playwright/room-readiness-observer-320.png`, `room-readiness-client-320.png`, and `room-host-transfer-320.png`.

## Deployment order and compatibility

1. Done: apply `supabase/migrations/20261002213946_room_readiness_and_host_handoff.sql` before deploying the frontend. It adds preparation/readiness fields, a database start/reset guard, and the authenticated management RPC. It does not alter or delete ratings.
2. Done: run the rolled-back fixture suites against hosted Postgres and inspect advisors after application.
3. Deploy the frontend and check an actual invitation, a pair and a three-person group. Participants should refresh the app before using the new readiness protocol.

Existing rooms default to the previous preparation protocol, including rounds already in progress. Newly created rooms opt into `ready-v1`; selecting new material with this frontend also opts in. An exact committed command can be recovered after a hosting transfer, but that receipt cannot grant a former host new control or be retargeted.

The migration is additive, with the existing role/progression RPC signature preserved. There is no automatic production deployment in this change.

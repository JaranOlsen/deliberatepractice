# Core practice polish — 5 October 2026

This continuation starts from `codex/experiential-focusing` (PR #99, `d7c2cc8`). The two-chair task implementation remains isolated on the deferred `codex/task-episodes` draft (PR #100). The core library offers Single skill and Mastery practice; an old task preference falls back to Single skill, and an unknown task session is not offered for resume. Keep PR #100 out of the core release stack while task practices are on hold.

## Preparation and reminders

Mastery case presentation now uses the same themed card, case identity, role-background facts and client-voice layout as single-skill preparation. The layout applies to local preparation and the host's mastery selection for a separate-device room.

Preparation no longer contains the reminder editor or the legacy “Practicing for” note. In individual focused practice and separate-device focused rooms, reminder editing belongs to a completed-attempt checkpoint. A saved reminder is read-only during subsequent practice. The heading is “Practice reminder” / “Husk til neste øving”; the optional field asks for one change to try next time. Private reminder text remains excluded from sessions, room snapshots and rating payloads. A failed reminder read now leaves its retry control visible on the active screen.

## Shared-device practice

Shared-device focused and mastery practice require no account identity to start. They never submit account ratings, even if someone is already signed in or resumes a legacy shared round with a captured therapist/partner or the old account-confirmation flag. There is no rating-save button, account-confirmation checkbox, account reminder or sign-in warning at shared checkpoints. The existing 1–5 scale remains available for discussion, with a single Continue action. Passing every item still allows continuation without a score.

Mastery can retain a selected score in the resumable local round, then clears it with the round on completion. It contributes nothing to account progress. Focused shared scores are only part of the current feedback screen. Historical account records are untouched. Individual self ratings and separate-device observer/pair self ratings retain their normal persistence and ownership checks. No database migration or hosted account change is needed for this polish.

## Verification

- `npm test`: 73 Node tests, content/runtime validation and all 11 isolated PostgreSQL suites.
- Production build and whitespace/diff checks.
- Preservation against PR #99: all 5,712 localized focused items, 36 localized mastery payloads and 2,856 registry entries unchanged.
- Local headed phone checks: English/Norwegian, individual/shared/pair, signed-out shared/pair, full twelve-item rounds, four checkpoints, reload and legacy shared ownership/confirmation, save-response retry, 320px layout and 200% text.
- Reminder checks: post-attempt editing, failed-save draft, later-session recall, account switch/sign-out, private data isolation, failed-read retry and removal.
- Separate-device focused room: four people, readiness barrier, role collisions, four observer checkpoints, passing, reconnect, pair rating, host handoff/recovery, and post-attempt therapist reminders.

All browser rating/reminder writes use an isolated local PostgreSQL fixture. This branch is for review and local testing; it does not publish production or modify Supabase.

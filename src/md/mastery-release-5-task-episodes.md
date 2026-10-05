# Release 5B: task episodes and Sara two-chair practice

Draft continuation of [Release 5A](mastery-release-5-focusing.md) and the approved [library plan](mastery-and-library-plan-2026-10-04.md). This batch implements the episode format and one complete bilingual example. Compassionate self-soothing and systematic evocative unfolding are subsequent content modules.

## Learning unit and content

Sara remains at her fixed Easy level. **Task practice / Oppgaveøving** is a third library exercise choice, alongside Single skill and Mastery. The first module contains four independent two-chair excerpts, three scripted moments each: waiting for a message, getting work right, wanting company, and pacing/stopping. Twelve original English/Norwegian client/example pairs include a short context bridge, therapist prompt and explicit client position.

The client actor voices both the critical and experiencing positions of Sara. The therapist does not play the critic. Physical movement is optional; the position label can guide actors on a video call. The observer advances the script after a response; later material is clearly a new scripted moment rather than a consequence of what the trainee just said. The app does not listen to or interpret speech. These excerpts do not depict a complete two-chair treatment task or certify mastery.

Feedback follows the episode, rather than interrupting each of its three moments. The group then replays the final moment once for a practice retry and rates the whole episode. This bounded retry avoids pretending that the app can regenerate the episode around a new live response. It also keeps all devices synchronized. In the final excerpt the fictional client asks to stop; practicing an appropriate stopping response is a valid target. The training replay does not require the fictional client to continue chair work.

The [primary two-chair self-criticism paper](https://doi.org/10.1002/cpp.762) informs the distinction between positions, attention to impact and client-owned needs. The [isEFT training curriculum](https://www.iseft.org/page-18299) supports curricular relevance. Neither source prescribes this app’s episode length, examples or assessment. All new material remains `pending` independent clinical and native-language review. The [complete review packet](two-chair-task-content-review.md) includes every turn, both orientations/guides, feedback cues and rubric anchors.

## Roles and phone flow

Roles stay fixed for all twelve moments. Three or more people use an active observer as controller/rater; additional observers watch. A pair uses therapist-led advancement and therapist self-assessment. Individual and shared-device practice use the same authored content and episode boundaries. Shared-device ratings retain the existing therapist-account confirmation; they cannot invent an observer identity.

Client screens show the position and current spoken line. Therapist screens show the task prompt and expandable help/example. Active and watching observers see the position, context and prompt without the client script. The episode workflow and Your part are collapsible; task assessment cues appear at the rating checkpoint. The client still has full case background, client voice and a reachable Ready action before a separate-device round starts.

Passing excludes the **whole episode**, including any turns already attempted. Its checkpoint has no rating form. A paused/incomplete episode cannot be rated. Subsequent excerpts have their own context and remain usable; the app does not pretend that a skipped exchange occurred. After episode four, rooms return to explicit role/material selection.

## Content and persistence model

Task modules use `format: task-episodes`, a task ID, four episode IDs with ordered turn IDs, and per-turn position/episode/turn metadata. Each localized payload carries task-specific guidance and integrated observer/self cues. This first implementation validates two-chair’s two positions; a future module must define and review its own position vocabulary and process guidance rather than blindly reuse those labels.

The existing integrated-exercise transport remains `exerciseType: mastery`. Server capability `taskEpisodesProtocol: task-episodes-v1`, exact exercise format and revision are required to advertise a task in a room. Individual/shared practice can still work locally when task support is unavailable. An unsupported saved task selection falls back to the ordinary skill library, without presenting an empty group catalog. Saved task sessions pin format, content, episode and moment, including a mid-episode resume.

`20261005034834_task_episodes.sql`, generated with the Supabase CLI, adds task metadata to the private exercise catalog and episode provenance to `mastery_ratings`. Older mastery rows remain `mastery` with null task/episode IDs. A private trigger derives task provenance from trusted catalog metadata and rejects partial or mismatched episode scopes, including retry updates. Old recording RPCs retain their identity and attribution rules. No spoken prose is stored in the database.

The existing room command now discards an entire task episode on Pass. Other commands retain observer/pair authorization, unique roles, readiness, device acknowledgments, pinned content, version checks and retry receipts. Existing function OIDs and execution grants survive the migration. The new trigger function is private, with execution revoked from PUBLIC, anonymous and authenticated roles. The catalog’s existing composite key serves the lookup.

Task scores appear as **rated episodes** in Mastery & tasks history under the existing self/observer selection. No task rating is distributed to its foundation skill references or included in the focused radar, averages or recommendations. The backend history adapter fetches the new provenance columns and narrowly falls back to the old selection only for a missing task column on an older schema; unrelated errors remain visible.

## Verification

- Content/runtime validation, 75 Node tests, 12 isolated PGlite SQL suites and production build.
- Exact preservation versus `d7c2cc8`: 5,712 existing focused language items, 36 mastery language payloads and 2,856 focused registry records. The v3 compatibility digest is unchanged.
- Six full task phone rounds: English/Norwegian individual, shared-device three-person and shared-device pair. Twenty-four self-rating records, correct episode provenance, mid-episode/checkpoint resume and a lost-save-response retry without duplicates. Ordinary Sara mastery also completes all six phone flows.
- Four-device task room flows in both languages: fixed roles, readiness, controller-only advancement, private client script, synchronized positions, observer attribution, reconnect and command retry. The Norwegian run passes an episode after its first moment and records only the other three episodes.
- A complete two-device task room uses therapist guidance and four self-assessments. The existing focused four-device round also passes its full lifecycle suite, including role races, pair readiness, host transfer/recovery and source attribution.
- Real backend adapter with the installed Supabase SDK against local mocked HTTP: task provenance, therapist ownership, source isolation, keyset history requests, old-schema fallback and visible unrelated errors.
- Thirteen partial/older catalog configurations include exact task protocol/format/revision checks and a usable focused-library fallback. Phone checks cover 320px width and 200% text, including expanded task guidance/examples.
- SQL checks cover whole-episode pass, rejection of partial scores, retry identity, task RLS ownership, private grants and function identity/ACL preservation. Automated focused QA flags and existing review statuses remain unchanged.

These are isolated local/browser fixtures. They do not create ratings, reminders, pairings or emails in the three real accounts, and do not replace a live remote-group pilot or content review.

Read-only hosted security advisors retain the existing baseline: four RLS/no-policy notices, one anonymous security-definer warning, fourteen authenticated security-definer warnings and disabled leaked-password checking. The unpublished migration is assessed locally. References: [RLS notice](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [anonymous functions](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable), [authenticated functions](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Release and following work

This is a draft continuation based on `codex/experiential-focusing`. Review the stack and apply metadata migrations in filename order before exposing task rooms. No production frontend or hosted database is changed by this batch. An older frontend cannot display the new task ID; it must refresh before acknowledging/advancing that room.

Next author a bounded compassionate self-soothing module with its own positions, process cues and assessment target. Then consider systematic evocative unfolding. Do not populate a task by relabeling unrelated single-skill statements, require every case to support every task, or use task scores as individual-skill proficiency estimates. The common episode format supplies ordering, passing, readiness and provenance; the therapeutic process still needs module-specific authoring and review.

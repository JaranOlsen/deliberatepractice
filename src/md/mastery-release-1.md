# Guided mastery — Release 1

Implements Release 1 of [the approved plan](mastery-and-library-plan-2026-10-04.md). Built from the editorial branch behind PR 93, so that content release remains independently reviewable.

## Available practice

Sara remains Easy. The other eight existing cases retain their levels and focused exercises.

Three curricular extensions now have complete Sara banks: Empathic Refocusing, Consolidating Emotional Change, and Closing After Emotional Work. Each has twelve English/Norwegian client and example pairs, matching bilingual skill guides and observer/self-assessment cues. These are original extensions informed by the [EFT competence framework](https://emotionfocusedtherapy.eu/wp-content/uploads/2023/12/FC-EFT-Competence-v1.03-2.pdf), sections 3.1–3.4; they are not Goldman Exercises 13–15. Existing benchmark/review packets retain their twelve-exercise coverage. Extension items remain marked pending external review in the editorial registry.

Sara's mastery exercise contains twelve authored, ordered moments: understanding; rationale; validation; exploratory question; exploration; conjecture; evocation; refocusing; contact with intense affect; understanding; consolidation; closing. Each has a bridge, skill prompt, client line and optional example in both languages. Bridges describe separate practice moments; they never claim to react to the trainee's unrecorded response. The sequence ends with some sadness remaining.

The library separates Single skill from Mastery practice, while Individual/Group/Shared device remains the initial format choice. Available cases derive from complete banks; unsupported combinations are not advertised. Each current case exposes its supported level, providing the catalog foundation for later multi-level cases.

## Practice and progress

Individual and shared-device mastery stay in the normal app. Shared-device pairs use therapist-led completion; a group with an observer uses observer-led completion. Role tabs change who views the shared screen, not who holds a role for the round. Preparation includes the client's background and voice. Merely viewing a new preparation does not overwrite a paused round.

Separate-device mastery reuses the existing room, membership, role exclusivity, human readiness, presence acknowledgment, command receipt and host handoff systems. Roles remain fixed for twelve moments and material is fixed in authored order. After the twelfth item, roles and material must be chosen again.

Four checkpoints use the same 1–5 scale. An observer assesses the therapist in a room; pairs and individuals self-assess. Completely passed sets cannot be rated. A shared device may save self-assessment only after confirming the signed-in account belongs to the therapist; it cannot fabricate a second rater's identity. Without server support, ratings are retained for the current local round only, with that limitation stated in the UI.

Mastery records live in `mastery_ratings`, separate from `practice_ratings`. Progress has separate views with the same self/observer source choice. Mastery history shows dates, level/language, rated checkpoints, number of rated items and an item-weighted round average. Missing checkpoints remain visible. It never updates the focused radar, focused recommendations or focused skill history.

Resume pins exercise ID, revision, level, scene order, exact position and completion/pass state. Local sessions use version 4; focused version 1–3 adapters remain. Unchanged v3 focused room content is accepted by the new client, guarded by a regression digest; mastery revisions must match exactly. Rating retries preserve their identity and cannot change attribution or scope.

## Validation

- Content validation: 1,332 focused pairs translated in both languages, plus 12 bilingual mastery scenes. Runtime artifacts match their sources.
- Comparison with the starting editorial commit: all 2,592 existing bilingual runtime items retain their IDs, wording and feedback tags; only the release revision changes.
- 62 unit tests and eight isolated Postgres fixture suites pass.
- Six full phone rounds: individual, shared group and shared pair in both languages at 320px, including 200% text, checkpoint reload and a lost save response after commit. Exactly 24 new self-assessment checkpoints; no focused writes.
- Full four-device mastery rounds in both languages: client preparation/Ready, role-specific content, watcher restrictions, four observer checkpoints, scene reconnect, lost completion response and next-round reselection. No focused records created.
- Existing individual/shared practice browser regression passes, including pause, remembered setup, localization, dialog focus, self-assessment and legacy targets.
- Existing focused group browser regression passes: roles/readiness, four checkpoints, pairing permissions, all-passed sets, concurrent claims/readiness, host transfer/recovery and reconnect.
- Focused progress regression passes, including the expanded fifteen-skill radar, separate rating sources, recent/stale evidence, 530 history rows, refresh/retry, account changes and enlarged Norwegian phone text.

Browser fixtures use temporary users and an isolated in-memory Postgres database. They do not authenticate as the owner's accounts, send email, alter production ratings or establish instructional effectiveness.

## Deployment and next batch

The additive migration was created with the Supabase CLI and tested locally. Production Supabase is unchanged. Deploy backend support before publishing this frontend. Only a server advertising the matching `guided-mastery-v1` exercise revision exposes remote mastery selection. Focused practice remains usable on an older backend. Missing mastery history tables yield an empty history rather than breaking focused progress.

Before expanding the content, pilot this sequence with an actual remote group and review the new English/Norwegian material with an EFT instructor. Release 2 adds the bereavement case with three exercise levels; Releases 3–5 remain as described in the plan. The new cases, wider extension coverage and later task episodes are not part of this release.

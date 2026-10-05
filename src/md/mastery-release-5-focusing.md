# Release 5A: experiential focusing

Draft continuation of the approved [library plan](mastery-and-library-plan-2026-10-04.md), after [Release 4](mastery-release-4.md). Adds one focused skill, not a full multi-turn focusing task.

## Material and learning target

48 original English/Norwegian client/example pairs: Sara at her fixed Easy level (12), and Leo at Easy, Moderate and Hard (12 each). Leo keeps his history and stable `case-arne` IDs. The other cases have no authored focusing bank yet; their absence is not a clinical applicability judgment.

The target is sensing an unclear experience as a whole, allowing a client-owned word/image, and checking its fit. Easy has explicit, workable uncertainty; Moderate adds mixed meanings and descriptions that partly miss; Hard includes authority sensitivity, privacy and requests to stop. Difficulty concerns response demands, not a different diagnosis or a worse bereavement. No requirement for a shift, relief or an insight. Each item is a separate next-response moment; a complete twelve-item round is not represented as a complete focusing task.

Sources: [Gendlin’s introduction](https://focusing.org/gendlin/docs/gol_2234.html), [imagery and focusing](https://focusing.org/gendlin/docs/gol_2148.html), and the [isEFT training curriculum](https://www.iseft.org/page-18299). These sources inform the curricular target; they do not prescribe our items, rubric or sequence. The [bilingual review packet](experiential-focusing-content-review.md) contains all 48 pairs, both guides, observer/self cues and middle/high anchors. All new items remain `pending` independent clinical and native-language review.

## App and persistence

The normal library, case preparation, individual/shared-device practice and separate-device rooms use the new bank through the existing runtime loader. A new skill color/icon follows the existing visual system. Self and observer feedback use the current 1–5 scale with distinct wording for this skill. Focused ratings belong to the new skill’s own axis, separated by source and level under the existing recent-history rules. Mastery paths and scores are unchanged.

`20261004231248_experiential_focusing.sql` registers four banks of IDs/tags in the existing private catalog and extends room validation in place. Unknown case/level/revision, mixed item banks, changed tags and shorter rounds are rejected for focusing. Focused item order may still be shuffled. The catalog lookup uses its existing composite primary key. No spoken prose enters the database. Existing function identity, private permissions and legacy focused-room behavior are preserved.

The migration also permits focusing in the existing private `practice_goals` skill constraint. This was caught by the four-device browser test: ratings worked while reminder saving failed. The fix retains ownership RLS, language separation and all previous allowed skills. It does not read, reset or alter existing reminders or ratings.

## Verification

- Content/runtime validation, 73 Node tests, 11 isolated PGlite SQL suites, production build.
- Exact preservation versus `bca71e1`: 5,616 old focused language items, 36 old mastery language payloads and 2,808 old registry records. The v3 canonical compatibility digest still passes.
- Eight full focused phone rounds (EN individual and NO shared-device across four banks), including pause/resume, level selection and 20 correctly attributed self-rating records.
- Four-device room checks for Sara and all three Leo levels: role readiness/exclusivity, private reminders and observer anchors, four set ratings, controller-only advancement, larger-group viewing, retry/reconnect, host handoff and round-end reselection. Enlarged text at 320px is included.
- Progress checks use mocked self/observer history, including the new skill, source isolation, recent/all history, difficulty overlays, phone layouts and enlarged text. No live account records are used.
- Automated QA remains zero exact duplicate client lines, 99 purity warnings and 101 review entries. No review flags or statuses were suppressed. These checks do not establish clinical or instructional quality.

Read-only hosted security advisors retain the existing baseline: four RLS/no-policy notices, one anonymous security-definer warning, fourteen authenticated security-definer warnings and disabled leaked-password checking. The unpublished migration is evaluated locally, not by hosted advisors. References: [RLS notice](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [anonymous function warning](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable), [authenticated function warning](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Release and next work

The draft stack through PR #98 must be reviewed together with this continuation. Apply metadata migrations in filename order before frontend publication. This batch does not deploy or modify the hosted database or the three real test accounts. Local/browser evidence is not a substitute for the planned actual remote-group pilot or clinical/translation review.

Next, implement a tested task-episode model before chair-work beyond setup, compassionate self-soothing or systematic evocative unfolding. An episode needs authored client turns, therapist-position guidance where relevant, process-specific transitions, an explicit stopping point, reconnectable progress and episode-level rating provenance. A learner’s live response cannot be treated as if it matched the scripted example. Define how subsequent fictional turns are introduced and how passed/incomplete episodes are recorded; do not repurpose unrelated single statements or distribute a task rating onto focused-skill radar axes. Preserve four checkpoints only where they reflect the actual episode structure.

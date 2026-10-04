# Arne and three practice levels — Release 2

Implements the bereavement batch of [the approved plan](mastery-and-library-plan-2026-10-04.md), built on Release 1. This is a draft release; production and the three real test accounts are unchanged.

## Content and selection

Arne, 68, is a retired electrician whose wife Ingrid died ten months ago after eighteen months of illness. Liv, Knut, the workshop and forty-one years together stay consistent at every level. The [bilingual dossier](Case_Arne.md) includes his background, voice, delivery and practice focus. Ordinary grief is not automatically formulated as an abandonment scheme or a diagnosis.

Eleven focused skills have twelve client/example pairs at each of Easy, Moderate and Hard: 396 bilingual pairs. Each item has a stable level-specific ID. The three authored mastery paths each have twelve ordered bilingual scenes and four checkpoints. Their source-item references preserve provenance. Bridges introduce linked moments without claiming to respond to unrecorded trainee speech.

Easy uses clearer feelings and markers; Moderate adds mixed meanings and protective shifts; Hard adds ambiguity, correction and boundary sensitivity. Hard also includes quiet uncertainty, ordinary enjoyment and practical needs, rather than making every statement a confrontation. The person, diagnostic status and time since bereavement do not change. The levels remain instructional judgments, not validated measures of clinical severity.

The library shows one Arne card and a compact level choice during preparation. It remembers the choice, but a paused or active round retains its own level. A host selects the room's material for everyone; joining devices use the room level regardless of their own preferences. Fixed-level cases retain their existing behavior. Unsupported skill/case combinations stay hidden. Arne is free for this initial release.

Mastery availability is checked for each exercise revision. An older server supporting only Sara cannot advertise unsupported Arne mastery variants. Local practice remains available without remote mastery support, with the existing rating-storage explanation.

## Ratings and compatibility

Focused ratings retain the selected level and item IDs, so the existing difficulty series and recent-evidence calculation can distinguish the versions. Mastery continues to use separate records and history; it cannot create focused radar evidence. Both use the existing 1–5 scale and self/observer attribution.

Content revision remains `2026-10-04-v4`: Arne is additive, with new item and exercise IDs. A comparison against Release 1 confirms all 2,664 existing bilingual focused items and both Sara mastery payloads are unchanged. The narrowly scoped v3 compatibility digest still covers only the original nine cases and twelve skills; it cannot approve an Arne room.

The additive migration registers three mastery sequences and 33 focused banks. Arne rooms reject unknown revisions, mixed levels, modified metadata and unsupported combinations. Focused order may shuffle; mastery order remains fixed. The validator is replaced in place to preserve its function identity and existing callers. The catalog stays in `dp_private`, with RLS and no direct grants to browser roles. No historical ratings are altered.

Apply the Release 1 mastery migration before the Arne migration, then publish the frontend. Neither migration has been applied to production. The read-only production security advisor reports existing private-table/policy and RPC notices plus the existing password-protection setting; it does not inspect this undeployed migration. Local fixtures check the new catalog permissions, exact source metadata, validator identity and rejected configurations, including removed assessment tags. Recheck advisors after deployment; see the [private-table notice](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy) and [RPC notice](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable).

## Verification

- Content validation: 1,728 focused bilingual pairs, ten case bibles, 48 bilingual mastery scenes; generated runtime artifacts match their sources.
- 65 unit tests and nine isolated Postgres fixture suites pass. Catalog/source comparisons cover all 33 focused banks and three mastery sequences.
- Six focused phone rounds: individual English and shared-group Norwegian at all three levels, including reload after changing the preferred level. Fifteen actual fixture ratings retain their case, level, source and practiced item IDs. All eleven banks' level choices fit at 320px with enlarged text; unsupported combinations are absent.
- Eighteen local mastery phone rounds: individual/shared group/shared pair × both languages × three levels. Exactly 72 new self-assessment checkpoints, including retries after a lost save response; no focused writes. Preparation, items, ratings and history fit 320px at 200% text. A long Norwegian header word now wraps instead of causing horizontal scrolling.
- Six four-device mastery rounds: each level in both languages. Client background/Ready, observer-only completion and ratings, passive observer restrictions, reconnect, lost command replay and next-round role/material reselection pass. Twenty-four observer checkpoints retain their selected levels.
- Focused four-device regression passes for all three Arne levels and an unchanged v3 Sara room: four sets, pass handling, saved-checkpoint reconnect, competing client claims, missing-role barriers, pair self-assessment, host transfer/recovery and enlarged phone text. A further Hard group run checks the final migration.
- Three catalog UI scenarios pass: Sara-only support, partial Arne support and mismatched Arne revisions. The host sees only available levels and the level count is accurate; selection fits enlarged phone text.
- Existing individual/shared practice and focused progress regressions pass, including separate sources, difficulty overlays, recent/stale evidence, long history, refresh/retry, localization and account changes. Production build and whitespace checks pass.

All browser writes use temporary users in an isolated in-memory database. The tests establish implementation behavior, not clinical or instructional effectiveness.

## Review and next batch

All 396 Arne pairs remain pending independent clinical/native-language review. The [33-pair comparison packet](arne-level-content-review.md) covers one example of each skill at each level; the complete banks and ordered mastery paths also need a read-aloud pass. The case dossier links the EFT competence and bereavement sources used as editorial context; neither source endorses these exercises.

Pilot Sara and Arne with an actual remote group before expanding further. The next content batch is Elin (chronic illness/disability), then Leila (discrimination/belonging), with the same consistent-person/three-level model. Wider extension coverage and later task episodes remain as planned. They are not included here.

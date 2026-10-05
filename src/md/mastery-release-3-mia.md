# Mia and three practice levels — Release 3, first case

Implements the chronic illness/disability batch of [the approved plan](mastery-and-library-plan-2026-10-04.md), on top of Release 2. This is a draft implementation. Production, historical ratings and the three real test accounts are unchanged. Nora is the next case in Release 3.

## Content

Mia is 42, a museum educator with established rheumatoid arthritis, diagnosed four years ago and followed by rheumatology care. She works three days a week with adaptations. Alex, Ella and Sam remain the same people at every level. Her physical limitations do not worsen to make an exercise harder. Anger about dismissal can be grounded in a real problem; needing rest, declining an invitation or requesting practical help is not automatically avoidance.

Eleven skills each have twelve bilingual client/example pairs at Easy, Moderate and Hard: 396 pairs. Easy offers clearer feelings; Moderate adds mixed meanings and shifts; Hard adds ambiguity, correction and sensitivity to what is being invited. Quiet uncertainty and ordinary good moments appear at Hard too. Responses respect choice, energy and actual accommodations, without implying that emotional work treats the physical disease. The [bilingual dossier](Case_Mia.md) records the fixed facts and editorial boundaries; the [33-pair comparison packet](mia-level-content-review.md) samples every offered skill at each level.

Three ordered mastery paths each have twelve bilingual scenes and four feedback/rating checkpoints. The progression concerns help and having a say, from contact through exploration to a clearer request and an ending. Scenes reference their exact focused source items. Bridges introduce another moment without pretending to react to unrecorded trainee speech, including after a pass.

The four remaining skills are hidden because their case-specific banks have not been authored. This is not a claim that they are clinically inapplicable. Future coverage needs appropriate markers and its own authoring/review pass.

## Ratings and migration

Focused ratings retain the case, selected level and item IDs. Mastery uses separate checkpoint records and history, and cannot become evidence for individual radar skills. The existing 1–5 scale and self/observer attribution are unchanged.

The additive migration `20261004133308_mia_practice_levels.sql` registers 33 focused banks and three mastery paths in the existing private catalogs. It extends the room validator in place, preserving its identity and callers. Both variable-level cases reject mismatched case/level/revision, modified tags, unsupported skills and mixed banks. Focused order may shuffle; mastery order stays authored. No existing user or rating rows are altered, and no new public table grants are added.

Content revision stays `2026-10-04-v4`: these are new IDs. All 3,456 earlier focused language items and all eight earlier mastery language payloads compare unchanged against Release 2 commit `c8fd6d5`. The narrowly scoped v3 compatibility path remains limited to the original fixed-level content.

Apply the Release 1 mastery migration, Release 2 level migration and then this migration before publishing the frontend. None has been applied to production in this batch. Older/partial mastery catalogs expose only supported variants. The read-only production advisor still reports existing private-table policy notices, exposed privileged RPC notices and the existing password-protection setting; it cannot inspect this undeployed migration. Local fixtures check catalog permissions, exact source metadata and validator identity. Recheck after deployment; see the [private-table notice](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy) and [RPC notice](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable).

## Verification

- Content/runtime validation: 2,124 focused bilingual pairs, eleven case bibles, 84 bilingual mastery scenes and 45 runtime files. No missing translations or duplicate statements.
- 67 unit tests and nine isolated Postgres suites pass. Exact metadata comparisons cover both new cases: 66 focused banks and six mastery paths. Rejected cross-case configurations and correctly scoped four-set pair ratings are included.
- Six focused phone rounds: English individual and Norwegian shared group at each level, saving fifteen real local fixture ratings. All eleven skill banks expose three levels before selection; absent banks stay hidden. Resume preserves the active level after preferences change. Cards and practice fit at 320px with 200% text.
- Eighteen local mastery phone rounds: individual/shared group/shared pair × both languages × three levels. Exactly 72 self-assessment checkpoints, including retry after a committed save whose response was lost. No focused writes; preparation, items, ratings and history fit enlarged phone text.
- Six four-device mastery rounds: all three levels in both languages. Client background/Ready, active-observer completion/rating, passive observer restrictions, stable roles/order, reconnect, command replay and next-round role/material selection pass. Twenty-four observer checkpoints retain their level and attribution. An earlier run was interrupted by content-generation reloads; the complete matrix passes with the source held steady.
- Focused four-device checks pass at all three Mia levels and for a legacy v3 Sara room: four sets, passes, rating recovery, simultaneous role claims, missing-role barriers, readiness, pair self-assessment and host transfer/recovery.
- Five catalog UI scenarios pass: Sara-only, partial Leo, partial Mia, and wrong revisions for each new case. Unavailable variants stay hidden; the available level count and default are correct.
- Production build and whitespace checks pass. Representative Norwegian case, therapist and client phone screenshots were inspected.

All browser writes use temporary users in an isolated in-memory database. These checks establish implementation behavior, not clinical or instructional effectiveness.

## Review and next batch

The 396 new pairs remain pending independent clinical/native-language review. Keyword QA warnings about validation/rationale are retained for contextual review; wording is not made formulaic to satisfy a keyword count. A false substance-use flag for rearranging plant pots is corrected without approving the item. The dossier links the primary clinical/editorial sources used as context; neither source endorses this material.

Next: Nora's discrimination/belonging case with three levels, then the wider extension coverage and tailored mastery paths for the other existing cases. The planned real remote-group pilot remains outstanding.

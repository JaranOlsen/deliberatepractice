# Nora and three practice levels — Release 3, second case

Implements the discrimination/belonging batch of [the approved plan](mastery-and-library-plan-2026-10-04.md), on top of Mia. This is a draft implementation. Production, historical ratings and the three real test accounts are unchanged. Leo, Mia and Nora now have the planned initial eleven-skill coverage at all three levels; the broader fixed-case extensions remain a later batch.

## Content

Nora is 35, a Norwegian-born architect in Oslo whose parents moved from Morocco before her birth. She has worked at the same firm for six years. Her manager Ben’s suggestion that someone else present her design because a client wanted “a more Norwegian face” is a concrete exclusion. Motives in other workplace moments can remain uncertain without making that event ambiguous. Max, Adam and Lina remain the same people at every level. Nora has ordinary interests, pleasures and relationships; she is neither a spokesperson nor a case defined only by mistreatment.

Eleven skills each have twelve bilingual client/example pairs at Easy, Moderate and Hard: 396 pairs. Easy supplies clearer feelings; Moderate adds mixed meanings and shifts; Hard adds uncertainty, corrections and relational fit. The event does not become more extreme to increase difficulty. Practical support, not responding now and declining exploration can be legitimate choices. No invented religion, childhood trauma, acute crisis, migration experience of her own or legal outcome is included. The [bilingual dossier](Case_Nora.md) records fixed facts and boundaries. The [33-pair comparison packet](nora-level-content-review.md) also presents the three complete ordered mastery paths for review.

Three mastery paths have twelve bilingual scenes each, with four feedback/rating checkpoints. They move from hearing exclusion through exploration to a clearer distinction or wish and a bounded ending. Each scene matches its focused source item exactly. Bridges introduce another moment without pretending to respond to unrecorded trainee speech, including after a pass. Examples remain possible responses, not an answer key.

The four remaining skill banks are hidden because they have not been authored for Nora. This is not a statement of clinical inapplicability; adding them needs appropriate markers and a separate authoring/review pass.

## Ratings and migration

Focused ratings retain the case, selected level and item IDs. Mastery uses separate checkpoint records and history, without feeding mixed-set scores into the skill radar. The current 1–5 scale and self/observer attribution are unchanged.

The additive migration `20261004214736_nora_practice_levels.sql` registers 33 focused banks and three mastery paths in the existing private catalogs. It extends the room validator in place, preserving its identity and callers. All three variable-level cases reject mismatched case/level/revision, altered tags, unsupported skills and mixed banks. Focused order may shuffle; mastery order remains authored. No existing users or ratings are changed, and no public table grants are added.

Content revision stays `2026-10-04-v4`: this adds new IDs. All 4,248 earlier focused language items, fourteen earlier mastery language payloads and 2,124 earlier registry records compare unchanged against parent commit `45a9b1b`. The v3 compatibility path remains limited to original fixed-level content.

Apply the Release 1 mastery, Release 2 level, Mia and then Nora migrations before publishing the frontend. None was applied to production in this batch. Older/partial mastery catalogs expose only supported variants. The read-only production advisor reports the same four private-table policy notices, one anonymous and fourteen authenticated privileged-RPC notices, and the existing password-protection setting; it cannot inspect an undeployed migration. Local fixtures check private catalog access, exact source metadata and validator identity. Recheck after deployment. References: [private-table notice](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), [anonymous RPC notice](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable), [authenticated RPC notice](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), [password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Verification

- Content/runtime validation: 2,520 focused bilingual pairs, twelve case bibles, 120 bilingual mastery scenes and 51 runtime files. No missing translations or duplicate statements.
- 69 unit tests and nine isolated Postgres suites pass. Exact metadata comparisons cover 99 focused banks and nine variable-level mastery paths. Validator identity and private catalog access remain intact; cross-case/level/revision/tag mismatches are rejected.
- Six focused phone rounds: English individual and Norwegian shared group at each level, saving fifteen local fixture ratings. Every offered skill exposes all three levels; unauthored combinations remain hidden. Resume retains the active level after preferences change. Cards and practice fit at 320px with 200% text.
- Eighteen mastery phone rounds: individual/shared group/shared pair × both languages × three levels. Exactly 72 self-assessment checkpoints, including retry after a committed save whose response was lost. No focused writes; preparation, items, ratings and history fit enlarged phone text.
- Six four-device mastery rounds: all three levels in both languages. Client background/Ready, active-observer completion/rating, passive observer restrictions, stable roles/order, reconnect, command replay and next-round role/material selection pass. Twenty-four observer checkpoints retain their level and attribution; no focused rating writes.
- Focused four-device checks pass at all three Nora levels and for a legacy v3 Sara room. Four sets, passes, rating recovery, simultaneous role claims, missing-role barriers, readiness, pair self-assessment and host transfer/recovery are included.
- Seven catalog UI scenarios pass: Sara-only, partial Leo/Mia/Nora, and wrong revisions for each new case. Unsupported variants stay hidden; available level counts and defaults are accurate.
- Production build and whitespace checks pass. Representative Norwegian case, therapist and client phone screenshots were inspected. All 4,248 previous focused language items, fourteen mastery language payloads and 2,124 registry records compare unchanged against `45a9b1b`.

All browser writes use temporary users in an isolated in-memory database. These checks establish implementation behavior, not clinical or instructional effectiveness.

## Review and next batch

The 396 pairs remain pending independent clinical/native-language review. Thirty-five keyword QA warnings (28 validation, seven rationale) remain visible for contextual review. No warning override approves Nora. Wording is not made formulaic to satisfy stock-phrase counts. Editorial sources are linked in the dossier; they do not endorse this material.

Next: add the three extension banks and a tailored mastery path for each of the eight remaining original cases, at their existing fixed levels. The actual remote-group pilot and independent content review remain outstanding; automated browser checks do not establish learning benefit.

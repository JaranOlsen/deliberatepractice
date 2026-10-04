# Fixed-case extensions and mastery — Release 4

Completes the fixed-case batch in [the approved plan](mastery-and-library-plan-2026-10-04.md), on top of Nora. This remains a draft implementation. All nine original cases now have the three extension skills and an individual mastery path at their existing level. Leo, Mia and Nora retain their eleven-skill, three-level coverage.

## Content

Adds 288 English/Norwegian client/example pairs: twelve for each of eight cases under empathic refocusing, consolidating emotional change and closing after emotional work. Adds eight ordered mastery paths with twelve bilingual scenes each. Source statements and examples match their focused items exactly; prompts and bridges supply the intended task and context. Scenes represent related moments, sometimes from earlier appointments, rather than adaptive replies to unrecorded trainee speech.

| Case | Fixed level | Mastery focus |
| --- | --- | --- |
| Michael | Easy | Exposure, anger and responsibility before an outburst |
| Jason | Easy | Meeting anxiety, smaller demands and wanting company |
| Laura | Moderate | Exhaustion, limited care and contact at her pace |
| Carlos | Moderate | Humiliation, responsibility and closeness without threat |
| Nina | Moderate | Naming a need alongside guilt and care for others |
| Aisha | Hard | Contact, boundary sensitivity and a bounded ending |
| David | Hard | Ordinary connection, practical requests and relational repair |
| Marcus | Hard | Contact with room to stop and choose distance |

Paths vary in order and skill selection. Laura, Aisha, David and Marcus include alliance repair where it fits. David uses twelve distinct skills; the other paths revisit understanding. All finish with consolidation and closing. Neither a tidy resolution nor accepting an offered intervention is required. Aisha and Marcus’s new paths use non-acute moments. Michael and Carlos’s examples distinguish understanding hurt from excusing intimidating behaviour. The three new skills are curricular extensions, not additional Goldman numbered exercises.

The [review packet](fixed-case-extension-content-review.md) provides 48 bilingual samples, existing case histories and all 96 mastery scenes. All new content remains pending independent clinical/native-language review. Automatic checks report no exact duplicate client statements; Carlos’s wall-punching consolidation item remains flagged for violence review. The whole draft library has 99 skill-purity warnings and 101 review entries; those screening signals have not been suppressed or treated as independent approval.

The resulting draft library has **2,808 focused bilingual pairs** and **18 mastery paths / 216 bilingual scenes**. Existing histories, names, fixed levels and legacy focused items remain intact. Mastery ratings stay separate from the focused radar, with the current 1–5 scale and self/observer sources.

## Backend and compatibility

The CLI-generated additive migration `20261004223012_fixed_case_mastery.sql` registers eight mastery paths and 24 focused extension banks in the existing private metadata catalogs. It adds no spoken prose, public table grants or user/rating mutations. The existing room validator is replaced in place, preserving its OID and callers. New fixed extension banks reject incompatible case, level, revision or feedback tags. Focused order may shuffle; mastery order cannot.

Existing core fixed banks retain their legacy validation path; the compatibility exception for v3 rooms remains limited to unchanged canonical content. Content revision remains `2026-10-04-v4`, because this batch adds new identities rather than changing earlier items. Against parent `77f41d3`, all **5,040 existing focused language items, 20 existing mastery language payloads and 2,520 registry records** compare unchanged.

Apply draft metadata migrations in order before publishing their matching frontend. The entire draft stack remains separate from production. A frontend rollback must retain saved mastery records and old focused rooms; do not delete catalogs or historical ratings.

## Verification

- `npm test`: 72 tests and ten isolated Postgres suites pass. Content validation covers all 2,808 translated pairs, exact catalog/source matching, private permissions, forged metadata, attribution and checkpoint retries.
- `npm run build` and `git diff --check` pass.
- Preservation comparison against `77f41d3`: all 5,040 earlier focused language items, 20 mastery language payloads and 2,520 registry records remain identical. The v3 canonical runtime digest also passes.
- Phone browser matrix: all 48 new extension case/skill/language selections work; sixteen full focused rounds save 40 correctly scoped self-ratings. Fixed levels cannot be changed through remembered preferences or resume.
- Mastery phone matrix: all eight cases complete in both languages across individual, shared-device and pair formats: 48 rounds, four checkpoints each. Jason and Nina’s twelve flows were rechecked after the bridge/role-label polish. Preparation, items, checkpoints and progress fit a 320px viewport at 200% text. Shared-device role labels stay whole and retain 44px minimum touch height.
- Four browser clients: ten complete mastery rounds (all eight cases in English, plus Aisha and Laura in Norwegian) retain order and roles, recover after a lost response and reconnect, save four observer checkpoints each, keep focused ratings unchanged and return to role/material selection.
- Four browser clients: one full focused regression per extension and fixed difficulty, plus Sara’s v3 compatibility path. Checks cover passes, four distinct observer ratings, private reminder isolation, simultaneous role claims/readiness, missing-role rejection in UI/RPC, pair self-assessment, all-passed sets and host transfer/recovery.
- Nine partial/older catalog scenarios hide absent or incompatible mastery paths. A fixed path never acquires alternate levels.
- Screenshots inspected after the role-tab fix and for separate-device therapist screens. Owned browser/fixture processes are closed afterward; the user’s Vite preview remains running.

Browser tests use isolated contexts and local PGlite RPCs. They do not establish instructional benefit, clinical validity, native-language approval, physical-device compatibility or real-network reliability. No real users, sign-in emails, production catalogs or historical ratings were changed.

## Read-only production advisory check

Supabase advisors report the same existing categories as the preceding batch: four [RLS-enabled tables without policies](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy), one [anonymous callable privileged access-code function](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable), fourteen [signed-in callable privileged functions](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable), and [disabled leaked-password protection](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection). Deny-by-default tables and authenticated RPC boundaries are intentional in this design; the exposed functions require their existing ownership/membership checks. These notices are not a clean security audit and the remote advisors cannot assess an undeployed migration. Local fixtures separately check catalog permissions and authenticated boundaries. No remote DDL or Auth settings were changed.

## Next work

Arrange independent content review and a real remote-group pilot before production publication. Review switching load, transitions after passes, rating clarity and spoken naturalness. The next implementation release is experiential focusing and then task episodes: agree on a multi-turn episode model before adding chair-work, self-soothing or systematic unfolding. Guided mastery does not certify clinical competence or unassisted intervention selection.

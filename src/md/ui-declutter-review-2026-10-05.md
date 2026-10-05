# UI cleanup review — 5 October 2026

This pass reviewed the app from the client, therapist, active observer, watching observer and UI designer perspectives. The goal was to remove narration that repeats visible controls, correct misleading instructions, and preserve information that helps someone perform their role.

## Changes made

- Removed generic home/library/language/guide instructions, the navigation tagline, language-code badges and the duplicate account eyebrow. Skill descriptions, case background, client voice and clinical guidance remain.
- Fixed case cards to show a fixed difficulty once. Group format now says “Two or more” without falsely promising separate devices when shared mode is selected.
- Removed repeated preparation counts, ordinary role footers and the generic mastery orientation. A collapsed “About this practice” retains the important limitation that scenes do not adapt to a participant’s exact response.
- Added “We’re two” to shared single-skill preparation. It removes the fictional observer, uses therapist self-assessment and first-person rating cues, and stays fixed through the round, pause/resume and reload. Shared-device scores remain local discussion scores; there are no account writes.
- Added genuinely solo instructions to individual mastery. Pair workflows now explicitly name therapist self-assessment.
- Remembered workflow expansion across items. The active observer’s initial workflow is still open; collapsing it stays effective. The useful skill focus is visible for watching/active observers instead of being buried in optional instructions or duplicated inside them.
- Changed client/watching-observer checkpoint headings to “Reflect together”. Removed repeated mastery skill lists, inert role tabs at checkpoints, zero-pass counts and unconditional passed-item notices. The non-rater waiting note disappears after the rating is saved.
- Removed redundant “Practicing for” attribution when the selected account is the signed-in person. Wrong-account save errors remain.
- Reduced horizontal padding on phone screens so enlarged text retains a usable reading column. Touch controls and protected Home exits remain.

English and Norwegian were updated together. Clinical statements, suggested responses, authored mastery scenes, rating calculation, room synchronization, exclusive role claims and backend authorization were not changed.

## Remaining choices

| Choice | Why it needs judgment | Suggested direction |
| --- | --- | --- |
| Client voice before role background | The opening voice is far below the fold on a phone, but the complete background was deliberately requested. | Consider voice first, with background available in an accordion. Test with a new client before changing the order. |
| Workflow plus “Your part” | Both can help a new group; experienced clients may only need their own part. | Keep the remembered collapse for now. Consider first-use guidance or a single optional help entry after observing a new group. |
| Shared single-skill reflection and rating are two screens | The extra transition repeats case/set identity. Mastery and separate devices already combine these. | Combine them into one checkpoint in a dedicated flow change, preserving reflection and optional scoring. |
| Shared-device numerical ratings | They support a discussion but could imply saved personal progress. | Decide whether the numerical score earns its space. Keep the concise “Not saved to accounts” notice while the score exists. |
| Skill summary above case cards | Description, focus and common miss delay the case list, but contain useful clinical information. | Try a concise focus plus optional full guide rather than deleting clinical material. |
| Full-library radar labels | The later, longer skill names truncate when all 16 are rated. | Keep the radar. Introduce deliberate short display names with full names in history/details. |
| Footer and retry consistency | Build information helps diagnose stale versions but adds space during practice. Mastery’s example/hide control differs from focused “Try again”. | Consider a compact About entry for the build stamp and a consistent example/retry interaction in a separate design pass. |

## Coverage and limits

All five perspectives produced browser evidence. The client, therapist and active-observer agents completed written reports; the designer and passive-observer agents reached the account usage limit after their walkthroughs, before writing final reports. Their saved outputs and screenshots were incorporated here; the primary agent completed the remaining verification.

- UI designer: 34 English/Norwegian screenshots covering home, language, skill and case libraries, mastery selector, guide/glossary, preparation, individual item, full/free accounts, access/paywall, self/observer progress, mastery history, expanded skill history, feedback/reporting and safe exit. Fake account/history data; all writes blocked.
- Client: focused individual/shared practice, full separate-device focused rounds in English (four people) and Norwegian (pair), and mastery in individual/shared/pair/four-device modes.
- Therapist: focused/shared screens; individual/shared/pair mastery; four-device and pair mastery preparation, attempts and checkpoint; therapist statement concealment.
- Active observer: full focused and mastery room rounds, four checkpoints, role collisions, missing-role/readiness guards, saved-rating reconnect, passes, pair self-assessment and room hosting/exit.
- Watching observer: focused and mastery English/Norwegian preparation, all twelve items, saved checkpoint, next-round and exit. No ready, scoring or progression controls were exposed to the watching role.
- Shared groups of four use the same common screen as three; the fourth person listens. No extra role tab or private screen was invented for a single shared phone.

Post-change results and exact live coverage are recorded below after verification. Local database fixtures hold any saved regression ratings. Live tests use only the dedicated accounts and temporary rooms; no demo ratings are changed.

Related detailed reports: [client](ui-client-audit-2026-10-05.md), [therapist](ui-therapist-audit-2026-10-05.md), [active observer](ui-active-observer-audit-2026-10-05.md). Those are before-change audits; the changes above supersede their safe-removal recommendations. Healthy sync-success text was already hidden during practice and did not require an additional removal.

## Verification results

- `npm test`: all 73 Node tests and 11 SQL suites passed.
- Production build and bundled Supabase configuration verification passed.
- New phone regression: English/Norwegian × individual/shared pair/shared group; 24 mastery checkpoints, actual-pass/all-pass sets, anonymous use with account operations forbidden, safe Home controls, pause/resume, shared pair reload and configuration locking. No runtime errors, horizontal overflow or squeezed statement columns at 320px/200% text.
- Full focused room regression: four checkpoints, saved-rating replay/reconnect, rating attribution and pass exclusion, simultaneous role claims, missing-role and readiness guards, pair fallback/self-assessment, private reminder/RLS boundaries, host transfer/recovery and protected exits. The saved-rating waiting hint now has a regression assertion.
- Full Norwegian mastery room regression: all twelve scenes, four observer checkpoints with correct source/therapist/difficulty, and no focused ratings produced.
- Existing practice lifecycle regression passed: individual/shared rounds, all-pass round, old saved session restoration, self-awareness boundaries, localization, bounded phone controls, keyboard dialogs and rating retry.
- Designer walkthrough rerun after the changes: all 34 screens in English/Norwegian, no runtime errors or horizontal overflow at enlarged text.
- Actual Supabase accounts: focused and mastery rooms with two, three and four separate devices, each through preparation/readiness, attempts and a checkpoint. Confirmed hidden therapist scripts, watching-observer control restrictions, remembered workflow collapse and role-appropriate checkpoint headings. No ratings saved.
- Removed only the eight closed rooms created by this audit, signed out only the four temporary audit sessions, and removed private credential/bootstrap files. Existing accounts and demo ratings remain.
- Exact clinical preservation check: 5,712 localized focused statements/examples, all 36 localized mastery payloads and 2,856 content-registry entries unchanged from the established core baseline.

Live checks did not save scores to the real demo accounts; saved-score/reconnect/attribution checks ran against the isolated database. This distinction prevents the usability review from changing the progress demonstrations.

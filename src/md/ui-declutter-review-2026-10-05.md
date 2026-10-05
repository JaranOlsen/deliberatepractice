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

## Design refinements implemented

The follow-up implements all seven choices from the initial review:

- **Client preparation:** opening voice comes first, with the complete role background in a collapsed disclosure. This is consistent in focused practice, mastery and separate-device rooms; authored clinical material is retained.
- **One practice guide:** each separate-device role has its instructions and workflow in a single disclosure. Shared focused practice has one optional guide for all actual participants. Expansion is remembered across items. Active/watching observers and pair therapists initially see their room guide expanded; other roles start with it collapsed.
- **Shared checkpoints:** focused reflection and scoring no longer require two screens. Every three items leads to one reflection checkpoint, then directly to the next set or material selection. Mastery uses the same discussion-only approach. Actual passes are counted and all-pass sets omit assessment cues.
- **No unsaved shared-device scores:** numerical rating controls are removed from shared focused and mastery practice. Neither flow writes account ratings. Individual practice and separate-device rooms retain their established 1–5 scale and save behavior.
- **Case selection:** the selected skill has one concise practice focus above its case cards. The complete clinical skill guide is still available through “Learn this skill”.
- **Radar labels:** the four later skills use deliberate short English/Norwegian display names. Label placement keeps the full sixteen-skill chart free of overlaps and clipped text. Every radar label has its full name in an SVG title; the full names remain in the chart description and skill history. Rating aggregation, recency and self/observer separation are unchanged.
- **About and retry:** copyright/build details moved from the page footer to Account → About. Examples are directly available outside optional instructions, with consistent show/hide and retry controls. Retry conceals the example and returns focus to the current statement or skill prompt.

**Global navigation:** Home, Progress and Account now share one compact header, using familiar icons, localized accessible names, hover titles and 44px targets. Duplicate progress shortcuts and the old room/group header shortcuts are removed. Home opens the existing protected practice exit; room pause, leave, end and cancellation behavior remain. Progress can be opened from any screen; signed-out users reach sign-in. A modal still suspends a room device’s display acknowledgement until the room is visible again.

This is available in the local preview and draft PR #102. Production has not been updated by this follow-up.

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

## Follow-up validation

- All 73 Node tests and 11 database suites pass; the production build and bundled Supabase configuration check pass.
- English/Norwegian at 320px and 200% text: six practice combinations, 16 shared focused reflection checkpoints, 24 mastery checkpoints, role-matched instructions, examples/retry, About/build discovery, accessible icon targets and protected Home exits pass.
- Ten complete mastery rounds cover signed-in/anonymous shared pairs and groups plus individual practice in both languages. Individual rounds save exactly four local-database ratings, including a lost-response retry; shared rounds save none. Checkpoint reload pins the round and difficulty.
- Complete focused four-device rounds cover client voice/background order, one role/workflow guide, separate examples/retry focus, saved observer ratings, role collisions, missing roles, readiness, pair self-assessment, replay/reconnect and host transfer/recovery. A full Norwegian four-device mastery round saves four correctly attributed observer checkpoints.
- Progress regression covers sparse/full radars, recency, self/observer separation, difficulty overlays, stale-response isolation, modal focus and phone layout. All 16 English radar labels fit without overlap or clipping; the visual check repeats those geometry checks in Norwegian.
- All 34 designer screens pass in English/Norwegian, with no runtime errors or horizontal overflow at enlarged text. Full-library radar crops and role screenshots were inspected directly.
- Legacy three-item room regression passes with five participants, English/Norwegian self-awareness boundaries, watching-observer restrictions, role rotation, uncertain-action recovery and cancelled setup.
- Invitation checks use the real Supabase SDK with OTP requests intercepted: callback preservation, editing/cancellation, Create and Home are verified without sending email.
- Exact preservation: 5,712 localized focused statements/examples, all 36 mastery payloads and 2,856 registry entries remain unchanged.

Shared-device and visual checks use isolated browser contexts; saved-rating checks use the local database bridge. No live Supabase account ratings or schema are changed by this follow-up.

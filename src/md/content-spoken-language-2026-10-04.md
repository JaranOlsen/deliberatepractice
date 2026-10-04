# Spoken-language content revision — 4 October 2026

Revision: `2026-10-04-v2`. Follows [the consent, validation and awareness pass](content-consent-validation-2026-10-04.md).

This pass makes examples easier to say aloud, keeps their skill targets distinct, and replaces literal Norwegian phrasing with natural spoken language. It retains specific client contexts rather than substituting generic reassurance.

## Scope

A bilingual reading covered items 01 and 06 in every case across the nine remaining skills (162 pairs), Aisha's evocation item 07, and 18 recent reference pairs (items 11–12 in Sara, Laura and Marcus for rationale, intense affect and repair). That is 181 pairs read in context, not a review of every remaining example. Strong examples, including the recent reference pairs, were retained.

| Skill | Revised pairs | Main improvement |
| --- | ---: | --- |
| Empathic understanding | 14 | Reflect feeling and meaning without adding a hidden explanation. |
| Exploratory questions | 10 | Ask one open question about present experience. |
| Treatment rationale | 18 | Explain a possible purpose tied to the client's concern, without promising a mechanism, outcome or timetable. |
| Empathic exploration | 17 | Offer one manageable invitation at the client's pace. |
| Empathic evocation | 18 | Use a fitting, tentative image without inventing events or heightening distress for effect. |
| Empathic conjecture | 14 | Make a small, correctable guess without asserting developmental history. |
| Staying in contact with intense affect | 18 | Communicate presence and adjust support to the situation, rather than always grounding first. |
| Self-disclosure | 17 | Model honest, bounded transparency with room to adapt to the trainee's actual reaction, role and limits. |
| Alliance repair | 18 | Receive the impact, own the contribution where established, and offer a concrete way forward. |

There are 144 revised pairs: 135 English and 144 Norwegian responses. Together with the previous pass, 277 distinct pairs are revised. English client statements are unchanged. One Norwegian client line corrects “en dypdykk” to “et dypdykk” (David, rationale 06); all other client text remains unchanged. Stable IDs, item order, 12-item sequences, risk flags and criteria tags are preserved.

## Guidance and feedback

Six bilingual introductions now explain rationale, exploration, evocation, intense-affect contact, disclosure and repair more directly. The intense-affect practice focus makes grounding responsive to need. Disclosure examples are explicitly possible responses to adapt honestly, rather than feelings all trainees are expected to have.

Evocation feedback distinguishes offering a new image from inventing a new event. The trainee need not reuse an image already provided by the client. Authoring instructions for Exercises 5, 6, 7, 9 and 12 record the revised distinctions. The rationale lint recognizes “point” and “purpose” as explanatory cues; this remains a triage aid, not evidence of clinical quality.

Aisha's evocation 07 no longer assumes that a reply from her partner has resolved recent suicidal thoughts. It receives the relief and asks about current thoughts directly. The [NIMH adult outpatient assessment guide](https://www.nimh.nih.gov/research/research-conducted-at-nimh/asq-toolkit-materials/adult-outpatient/adult-outpatient-brief-suicide-safety-assessment-guide) supports asking about current thoughts, within a broader assessment. This example is a focused moment of contact and inquiry, not a complete risk assessment or crisis protocol. High-risk facilitator context remains separate work.

## Editorial record

Only the 144 revised pairs receive `2026-10-04-spoken-language-skill-focus-editorial`. Earlier review passes remain attached to untouched items. This records an internal editorial review, not independent clinical certification or native-speaker review.

No changes to ratings, accounts, rooms or the database are part of this pass. Broader difficulty calibration and review of the unsampled examples remain future work.

## Verification

- Compared all 1,296 bilingual pairs against the preceding revision: untouched responses, client text except the single grammar correction, IDs, order, risk flags, criteria tags and targeted review records are intact.
- Regenerated content registry, benchmark, inventory, review packets and browser runtime; structural validation covers 1,296 translated items and has no warnings or errors.
- `npm test`: 57 unit tests and seven local PostgreSQL fixture suites pass.
- Production build and `git diff --check` pass.
- Phone preview checks cover the nine revised skills in both languages, introductions and two practice examples per skill; shared practice and the common room role components; and Aisha's revised recent-risk example. Layouts fit 320px, examples match the current runtime, and no live account, email or database writes occur.

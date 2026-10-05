# Content revision — 4 October 2026

Revision: `2026-10-04-v1`.

This release addresses the first three priorities from the content assessment: collaboration in chair work, contextual validation, and a clear distinction between self-awareness and honest client-facing disclosure.

## Editorial changes

| Area | Changed item pairs | Result |
| --- | ---: | --- |
| Chair-work setup | 46 | Restores invitations before instructions, preserves choice in Norwegian, clarifies imagined chair positions, and adds pacing or stopping options where needed. |
| Affirmation and validation | 70 | Makes room for the feeling in the actual situation instead of asserting a psychological mechanism. Retains responsibility for harmful behavior. |
| Therapist self-awareness | 15 | Models noticing a reaction and impulse privately, without deciding what to disclose to the client. |
| Self-disclosure | 1 | Laura 01 models a bounded process commitment rather than asserting the therapist feels no discomfort. |
| Alliance repair | 1 | Marcus 03 receives the competence concern and opens an honest discussion of experience, limits and support without claiming credentials. |

A bilingual reading covered all 108 examples in each of the first three skills. Examples that already served the target were retained, including the recent items 11–12. The two related disclosure/repair examples received a targeted revision.

There are 133 changed item pairs: 115 English responses and 133 Norwegian responses. All client statements, item IDs, item order and 12-item skill/case sequences are preserved. Existing risk flags and criteria tags are preserved for every changed item.

The self-awareness introduction and group role guide now explicitly allow a private reflection. Sharing, if chosen, is with the practice group. Group examples explain that the learner's actual reaction can differ, including little or no reaction. The derived Exercise 1 benchmark guidance has also been corrected to stay with noticing rather than prescribe client-facing interventions; these remain labeled as derived guidance rather than source-provided responses.

The authoring instructions for Exercises 1, 3, 10, 11 and 12 record these distinctions. Existing rating scales and feedback anchors remain applicable. No rating, account, room or database changes are part of this release.

## Review record

`contentReviewOverrides.js` identifies exactly the changed items with the pass `2026-10-04-consent-validation-awareness-editorial`. Approval records an internal editorial pass, not independent clinical certification or native-speaker review. Unchanged items retain their prior review passes.

The content lint recognizes explicit phrases such as “deserves care” and “there is room for” as legitimizing cues. This remains a triage aid: an empty queue does not establish clinical quality. The decisions above came from reading the examples and their client contexts, not from their keyword matches.

The wider read-aloud pass, difficulty calibration and high-risk facilitator context recommended in the assessment remain separate work.

## Verification

- Compared the revised sources with the pre-edit baseline across all 1,296 items and both languages: client text, IDs, order, unedited responses, and changed-item risk/criteria tags are intact.
- Regenerated registry, benchmark, review packets, acceptance records and the browser runtime.
- `npm test`: content validation, 57 unit tests and seven local PostgreSQL fixture suites pass.
- `npm run build` and `git diff --check` pass.
- Eight isolated browser flows at 320px cover the three main skills in both languages and shared-device self-awareness in both languages. Current examples match the loaded runtime; retry hides examples; advancing needs no disclosure; layouts fit the viewport. The room role component uses the same private-reflection guidance and example framing. No live accounts or ratings were written.

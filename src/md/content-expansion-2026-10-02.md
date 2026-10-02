# Twelve-item case matrix — 2 October 2026

The 12 production skills now each contain 12 client statements and example responses for all 9 cases. This adds 216 original English pairs and 216 Norwegian Bokmål localizations, bringing each language to 1,296 pairs. The experimental empathic-refocusing skill remains outside the production matrix.

Items 01–10 and their translations are unchanged. New items append as 11–12, retaining existing IDs and rating/report references. The runtime catalog and generated QA material use revision `2026-10-02-v2`.

## Editorial review

Every new pair was reviewed in this order: plausible client marker, response belonging to the selected skill, natural Norwegian preserving the meaning and delivery cue. The case bibles, skill instructions 1–12, and the existing benchmark comparison supplied the constraints. Existing items were compared with the additions to avoid filling the last slots with near-paraphrases. Similar disclosure, rationale and chairwork situations were replaced during review.

The additions include positive contact and receiving care alongside loss, shame, anger and avoidance. Case voice remains important: Jason hesitates; Laura keeps distance; Nina's wishes are followed by guilt; David protects his image; Marcus speaks sparsely. Difficulty still belongs to the case; adding items does not relabel easy, moderate or hard cases.

| Skill | Main review focus for the new examples |
| --- | --- |
| Self-awareness | A sample internal reaction and the pull it creates; no required client-facing response or compulsory disclosure. |
| Understanding | Concise reflection of expressed experience, without adding a hidden feeling or a question. |
| Validation | A concrete reason the feeling is understandable; responsibility for frightening others remains intact. |
| Questions | One clear inward question, without multiple questions or a theory embedded in it. |
| Rationale | Plain-language purpose linked to the client's goal; choice and pacing without promises of improvement. |
| Exploration | Follow a feeling already appearing; invite a small next step rather than supplying a new interpretation. |
| Evocation | The client leaves room for a brief, fitting therapist image rather than supplying the image themselves. |
| Conjecture | A tentative, correctable guess anchored in the client's words or contradiction. |
| Intense affect | Contact and pacing; respect requested distance and stop deeper exploration when the client feels far away. |
| Self-disclosure | Brief stance or process transparency, clear boundaries, and return to the client; no invented therapist biography. |
| Chairwork | Distinguish criticism, interruption and unfinished business; consent, correct chair setup, concrete first turn, and permission to pause. |
| Alliance repair | Receive impact before explanation, own the specific contribution, and collaborate on repair. |

`approved` on the new items records this internal editorial pass, not independent clinical certification. Risk metadata includes contextual trauma cues that keyword matching misses; a casual social invitation is not classified as a substance-use exercise. Automated skill-cue checks were extended to recognise “understandable,” “help” and “aim”; these checks are only prompts for review, not a measure of clinical quality.

## Verification

- No open Supabase content feedback was present when this pass began.
- All 108 skill/case combinations contain exactly 12 items. Every English and Norwegian client statement and example is non-empty.
- A baseline comparison confirms all 1,080 original pairs, their translations and stable IDs are preserved.
- Runtime parity checks compare all 2,592 localized items with the editorial source, including IDs, text and metadata. All 31 automated tests and the production build pass.
- Browser checks cover a completed twelve-item phone round and rating-save retry, the new Norwegian items at 320px, failed downloads and pause/resume, shared-device practice, and simulated separate-device rooms with five participants. At the time of the content change, rooms received the twelve-item pool and retained three-item rotation. The separate four-set workflow follow-up changes new group rounds to twelve items.

## Rollout

No database migration or rating-data change is needed. This content-only change made individual rounds contain twelve items while groups still sampled three. The subsequent four-set workflow has its own database migration. Existing paused local rounds retain their saved item IDs. The existing room revision guard requires matching content on all participants' devices, so refresh clients together and begin a new room when rolling out this revision. This content change is staged separately from the group UI follow-up and has not been deployed.

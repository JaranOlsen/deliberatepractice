# Treatment-rationale and alliance-repair revision — 4 October 2026

Revision: `2026-10-04-v3`. Follows [the spoken-language pass](content-spoken-language-2026-10-04.md).

This pass gives the remaining older examples in these two skills a close bilingual reading. Rationales explain a possible purpose connected to the client's concern, while repairs receive the impact and offer a change the therapist can make.

## Scope

The reading covers 144 older pairs (items 02–05 and 07–10 in all nine cases across both skills) and 24 recent reference pairs (items 11–12 in Michael, Jason, Carlos, Nina, Aisha and David). Alongside the preceding passes, every one of the 216 pairs in these two skills has now been read in context. Strong examples are retained. This does not extend that claim to all 1,296 pairs in the app.

| Skill | Revised pairs | Main improvement |
| --- | ---: | --- |
| Treatment rationale | 70 | Give an honest, concrete purpose for the work, allow practical tools and pacing, and avoid promises about mechanisms, outcomes or recovery time. |
| Alliance repair | 71 | Acknowledge the specific impact, own an established contribution, and offer a practical adjustment without requiring the client to design the repair. |

The 141 revised pairs contain 137 changed English responses and 141 changed Norwegian responses. Thirteen Norwegian client translations are also corrected. For example, “the fear gets louder” becomes “frykten blir sterkere”, and freezing while trying to speak becomes “stivner” rather than “fryser”. English client lines and their scenarios are unchanged.

Across the three passes, 418 distinct example pairs have been revised: 387 English and 418 Norwegian responses, plus 14 Norwegian client-line corrections. Stable IDs, item order, difficulty tiers, criteria tags and 12-item sequences remain intact.

## Editorial choices

Repairs now include changes such as stopping a topic after a refusal, waiting while the client searches for a word, and making session endings more predictable. They avoid invented apologies, qualifications or inner reactions. Competence concerns leave room for the trainee's actual experience. Responses to anger acknowledge the feeling while taking harm and intimidation seriously. Professional boundaries remain clear.

For example, Marcus's repair 07 now reads:

> You said no, and I asked another question anyway. I am sorry. I will stop that topic now. You do not have to say no more strongly for me to respect it.

The Norwegian version reads:

> Du sa nei, og jeg stilte enda et spørsmål likevel. Unnskyld. Jeg stopper det temaet nå. Du trenger ikke si nei tydeligere for at jeg skal respektere det.

Rationales connect emotional work to the client's question rather than teaching a generic lesson. They make room for current numbness without forcing a feeling, practical planning without dismissing emotion, and exploring needs without asking the client to stop caring for others. Plain language sometimes takes more words; brevity alone is not the quality target.

The bilingual rationale description and repair practice focus are aligned with these choices. The repair focus is now: “Hear the client’s experience, own your part where relevant, and offer one concrete adjustment together.”

## Potential-risk clarification

Aisha's rationale 03 no longer suggests that naming fear and agreeing steps will prevent an unspecified “drastic” action. It asks what that phrase means, including self-harm or ending her life, before discussing available support. Its metadata now identifies the two potential discussion topics, `suicide` and `self_harm`; this does not classify the client's current risk as confirmed. Other risk flags remain unchanged.

The [NIMH adult outpatient assessment guide](https://www.nimh.nih.gov/research/research-conducted-at-nimh/asq-toolkit-materials/adult-outpatient/adult-outpatient-brief-suicide-safety-assessment-guide) supports direct inquiry as part of a broader assessment. This example is a focused clarification, not a complete assessment or crisis protocol.

## Editorial record

Only the 141 revised pairs receive `2026-10-04-rationale-repair-complete-editorial`. Earlier passes remain attached to untouched items. These records document internal editorial review, not independent clinical certification or native-speaker review.

Content lint now recognizes “agree on” as explanatory language and ordinary receiving phrases in repair. It remains a triage aid; an empty queue does not certify clinical quality. Broader difficulty calibration and review of unsampled examples in other skills remain future work.

No live accounts, ratings, rooms or database records are changed in this pass.

## Verification

- Compared all 1,296 bilingual pairs with the preceding revision: only the recorded responses, thirteen translations, explicit risk-topic correction and targeted review records change. IDs, ordering, difficulty tiers, criteria and English client lines are preserved.
- Regenerated registry, runtime, benchmark, inventory and review artifacts; content validation has no warnings or errors.
- `npm test`: 57 unit tests and seven local PostgreSQL fixture suites pass.
- Production build and `git diff --check` pass.
- Forty isolated phone flows pass at 320px: both skills across all nine cases in English and Norwegian (36 individual flows), plus both skills and languages in shared-device practice (four flows). Guides and examples fit the viewport; displayed responses match revision `2026-10-04-v3`; finishing a shared item remains available. Aisha’s focused risk clarification renders in both languages. Representative Norwegian screenshots were inspected. No JavaScript exceptions or live account, email or database writes occur. These content checks do not exercise live separate-device synchronization.

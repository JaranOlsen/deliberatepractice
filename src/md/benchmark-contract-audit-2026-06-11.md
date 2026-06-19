# Benchmark Contract Audit

Date: 2026-06-11; full library scoring update 2026-06-16

## Purpose

This audit revises how content quality is judged after the therapist self-awareness rework exposed a failure in the earlier workflow. The previous process improved many individual statements and kept validation clean, but it did not reliably ask whether each full skill set matched the Goldman exercise contract.

The new rule is: benchmark contract first, item polish second.

## What Failed Before

Therapist self-awareness passed ordinary checks because the items were complete, translated, skill-labeled, and clinically plausible. The set still diverged from the source exercise in two structural ways:

- Goldman Exercise 1 is not a client-facing response exercise. The trainee listens and reports internal self-awareness in a training context.
- The client statements need enough length and evocative pressure to activate therapist reactions. Short polished markers did not provide enough time for the trainee to notice their own body, feeling, thought, and impulse.

The lesson is that QA-clean is not the same as content-clean. A whole skill can be valid data and still train the wrong task.

## Method Going Forward

For each skill, define an exercise contract before judging individual statements:

- Training task: what the trainee is actually practicing.
- Marker shape: what kind of client utterance should naturally invite the skill.
- Suggestion role: what the app's suggested response should model for this specific exercise.
- Difficulty movement: how easy, moderate, and hard cases should differ.
- Prohibited drift: what would train a neighboring skill instead.
- Benchmark coverage: which Goldman archetypes must be represented, adapted, or intentionally omitted because of case constraints.

Then score the whole 90-item set on these dimensions:

- Structural fidelity: does the set train the same task as the Goldman exercise?
- Marker validity: do client statements naturally call for the target skill?
- Training affordance: do statements give enough material, time, ambiguity, or emotional pressure to practice?
- Response role fit: does the suggestion model the right kind of therapist action for this exercise?
- Benchmark coverage: are the source archetypes represented across difficulty tiers?
- Localization readiness: is the English stable enough that Bokmal polish will not be wasted?

## Quality Rating Scale

Use a 0-10 editorial rating to summarize the whole skill set after contract review.

- 9.0: Goldman-level benchmark quality. The set reliably trains the intended skill with strong marker fit, emotional realism, response purity, difficulty calibration, coverage, and localization readiness.
- 8.0-8.9: Strong deliberate-practice quality. The set is app-ready and clinically convincing, with only targeted polish or coverage gaps remaining.
- 7.0-7.9: Clinically usable but uneven. The skill trains the right task, but some markers, responses, or translations still lack pressure, specificity, variety, or benchmark coverage.
- 6.0-6.9: Plausible but underdeveloped. Many items work, but the set does not yet create reliable deliberate-practice conditions.
- Below 6.0: Structural concern. The set risks training the wrong task or lacks enough marker validity to be relied on.

Ratings should consider: structural fidelity, marker validity, emotional pressure, response role fit, case/difficulty differentiation, high-risk handling, and Bokmal naturalness. Word counts can inform the rating but must not determine it.

## Current Baseline

This audit uses the current branch state after the 2026-06-18 hard exploratory-questions regression pass.

Automated averages are triage only, not quality scores. They still reveal places where the app may be more compressed than Goldman.

| Skill | App Statement Avg | Benchmark Statement Avg | App Suggestion Avg | Benchmark Response Avg | Signal |
| --- | ---: | ---: | ---: | ---: | --- |
| Therapist Self-Awareness | 63.9 | 76.8 | 26.1 | 25.9 | Now structurally close. |
| Empathic Understanding | 23.2 | 32.9 | 14.5 | 17.8 | Moderate and hard tiers now have stronger explicit emotional meaning while staying basic-empathy pure. |
| Empathic Affirmation and Validation | 23.8 | 27.1 | 22.0 | 23.0 | Easy, moderate, and hard response-variety/Bokmal passes complete; now strong with later light regression only. |
| Exploratory Questions | 16.8 | 22.5 | 11.8 | 26.3 | Hard regression pass complete; app intentionally keeps questions cleaner than Goldman examples. |
| Treatment Rationale | 15.5 | 20.5 | 28.8 | 54.2 | App is briefer than Goldman but usually clinically focused. |
| Empathic Explorations | 17.8 | 26.2 | 24.9 | 30.3 | Hard-tier regression/Bokmal pass complete; strong, with later marker breadth and Bokmal polish only. |
| Empathic Evocations | 20.8 | 23.1 | 18.9 | 20.3 | Easy, moderate, and hard markers now have stronger ordinary-scene affordance while preserving trainee image-making. |
| Empathic Conjectures | 16.5 | 21.5 | 20.8 | 21.8 | Response-boundary pass complete; strong, with later marker-breadth and Bokmal polish. |
| Staying in Contact with Intense Affect | 31.3 | 35.3 | 32.0 | 22.6 | Contact-first response repair complete; residual regression risk is mainly high-risk precision. |
| Self-Disclosure | 14.8 | 18.4 | 31.3 | 27.6 | Boundary/transparency pass complete; strong, with later Bokmal and marker-breadth polish. |
| Marker Recognition and Chair Work | 35.4 | 37.5 | 50.0 | 84.3 | Hard-tier setup pass complete; remaining work is regression and Bokmal polish rather than structural repair. |
| Alliance Repair | 34.2 | 35.0 | 47.4 | 104.8 | Hard and moderate response-opening/Bokmal passes complete; remaining work is regression only unless flagged. |

## Full Library Quality Scores

These 2026-06-16 ratings score each skill and difficulty tier as a training set, not as isolated items. Goldman-level benchmark quality is 9/10. No current set has a structural failure; the remaining work is targeted movement from strong app-ready material toward benchmark-level variation, precision, and natural Bokmal.

| Skill | Difficulty | Score | Main Quality Judgment |
| --- | --- | ---: | --- |
| Therapist Self-Awareness | Easy | 8.8 | Structurally close to Goldman: long activating markers, useful internal therapist-awareness suggestions, good positive and ordinary activation breadth. |
| Therapist Self-Awareness | Moderate | 8.6 | Strong activating material around guardedness, substance, culture, shame, and rescue pressure; some examples could still carry a little more source-like length and complexity. |
| Therapist Self-Awareness | Hard | 8.4 | Correct exercise contract and high-risk activation are present; benchmark hard examples are still more extended and press the therapist longer. |
| Empathic Understanding | Easy | 8.4 | Clean basic reflections with good beginner marker fit; remaining work is light ordinary-life breadth and Bokmal polish. |
| Empathic Understanding | Moderate | 8.5 | Recent pass broadened all Laura, Carlos, and Nina markers toward Goldman intermediate richness while keeping every response reflective, concise, and question-free. |
| Empathic Understanding | Hard | 8.4 | Recent pass broadened Aisha, David, and Marcus markers with explicit emotional meaning while keeping responses short, reflective, and free of validation, conjecture, advice, or questions. |
| Empathic Affirmation and Validation | Easy | 8.6 | Recent pass made beginner validation more context-specific, reduced repeated "makes sense/understandably" formulas, and aligned Bokmal idiom. |
| Empathic Affirmation and Validation | Moderate | 8.4 | Recent pass removed repeated four-word response openings and reduced literal Bokmal validation phrasing while preserving explicit legitimacy. |
| Empathic Affirmation and Validation | Hard | 8.4 | Recent pass expanded hard markers, preserved high-risk validation, removed repeated openings, and made Bokmal more natural. |
| Exploratory Questions | Easy | 8.5 | Strong one-question purity with simple inward-turning markers; only light opening-variety polish needed. |
| Exploratory Questions | Moderate | 8.4 | Good inward edge and difficulty calibration; a few repeated "what happens/what do you notice" patterns remain acceptable but visible. |
| Exploratory Questions | Hard | 8.5 | Recent regression pass removed subtle containment/cognitive drift while preserving one inward-turning question across advanced ambiguity and high-risk material. |
| Providing Treatment Rationale | Easy | 8.8 | Very close to the benchmark task: direct client skepticism/fear markers and plain-language rationale tied to client goals. |
| Providing Treatment Rationale | Moderate | 8.6 | Strong fit with fear, skepticism, numbness, and practicality; Goldman responses are longer, but the app's brevity usually helps practice. |
| Providing Treatment Rationale | Hard | 8.6 | Recent hard-tier pass strengthened rationale language around pace, safety, attachment panic, numbness, hypervigilance, and practical change. |
| Empathic Explorations | Easy | 8.5 | Good edge-following markers and responses after recent repair; Bokmal still contains repeated "la oss/kan vi" patterns. |
| Empathic Explorations | Moderate | 8.4 | Strong live-edge training with less conjecture drift; further gains should be Bokmal idiom and marker breadth. |
| Empathic Explorations | Hard | 8.5 | Recent pass tightened all hard responses into one small live exploration step, softened three over-formulated markers, and removed repeated "stay with/kan vi/la oss" patterns in the hard tier. |
| Empathic Evocations | Easy | 8.5 | Recent pass added ordinary scene detail to the thinnest beginner markers while preserving flat client prompts and leaving vivid imagery to the therapist response. |
| Empathic Evocations | Moderate | 8.5 | Regression pass tightened one over-imaged marker and polished selected responses so imagery stays vivid without becoming ornamental. |
| Empathic Evocations | Hard | 8.5 | Regression pass improved safety-sensitive and high-shame response images while preserving flat, cognitive, or guarded client prompts. |
| Empathic Conjectures | Easy | 8.4 | Strong tentative one-step-beyond-explicit responses with good behavioral markers. |
| Empathic Conjectures | Moderate | 8.5 | One of the best-aligned tiers: good hidden-feeling hints without overexposing core pain. |
| Empathic Conjectures | Hard | 8.5 | Targeted hard-tier regression pass simplified over-formulated guesses; responses now stay closer to one tentative hidden feeling or meaning. |
| Staying in Contact with Intense Affect | Easy | 8.6 | Strong live affective pressure and contact-first responses; good range beyond panic/grief. |
| Staying in Contact with Intense Affect | Moderate | 8.6 | Strong pressure, collapse, guilt, rage, and positive-affect material with good contact before regulation. |
| Staying in Contact with Intense Affect | Hard | 8.4 | Good high-risk handling and contact-first structure; keep self-harm, violence, erotic pressure, and dissociation under regression review. |
| Self-Disclosure | Easy | 8.7 | Strong direct therapist-transparency markers and boundaried, brief responses. |
| Self-Disclosure | Moderate | 8.6 | Strong care, competence, boredom, and therapist-impact questions; mostly polishing Norwegian idiom and variety now. |
| Self-Disclosure | Hard | 8.5 | Strong boundary handling around care, lateness, attraction, pity, and therapist experience. |
| Marker Recognition and Chair Work | Easy | 8.6 | Full matrix now gives natural markers and concrete task setup; strong beginner training value. |
| Marker Recognition and Chair Work | Moderate | 8.5 | Good unfinished-business, self-criticism, interruption, and worry-split coverage with clear first turns. |
| Marker Recognition and Chair Work | Hard | 8.5 | Recent hard-tier pass improved Aisha, David, and Marcus setup sequencing, removed the obvious client-side chair-task leak, and reduced repeated setup openings while preserving safety and consent. |
| Alliance Repair | Easy | 8.4 | Strong rupture contexts and repair sequence; response openings are somewhat repetitive. |
| Alliance Repair | Moderate | 8.5 | Recent pass removed repeated response openings across Laura, Carlos, and Nina while preserving ownership, impact receiving, and natural Bokmal repair language. |
| Alliance Repair | Hard | 8.5 | Recent pass removed repeated response openings across Aisha, David, and Marcus while strengthening ownership, frame clarity, and Bokmal idiom for high-risk rupture material. |

## Skill Ranking

Use this ranking when there is no open Supabase feedback. It prioritizes the lowest tier-level scores and the highest training-risk gaps, not whole-skill averages.

| Rank | Target Set | Current Judgment | Next Action |
| ---: | --- | --- | --- |
| 1 | Staying in Contact with Intense Affect, hard | Strong after recent repairs; residual risk is safety-sensitive regression. | High-risk contact-first spot checks around self-harm, violence, dissociation, and erotic/boundary material. |
| 2 | Alliance Repair, easy | Strong rupture contexts and sequence, with some remaining response-opening repetition. | Light response-variety polish when it does not displace lower-scored contract gaps. |
| 3 | Empathic Explorations, moderate | Strong live-edge training with less conjecture drift; further gains should be Bokmal idiom and marker breadth. | Light marker-breadth or Bokmal polish. |
| 4 | Empathic Conjectures, easy | Strong, but still the lowest conjectures tier after the hard regression pass. | Light marker-breadth or Bokmal polish only after higher-risk sets are stable. |
| 5 | Exploratory Questions, moderate | Good inward edge and difficulty calibration; repeated "what happens/what do you notice" patterns remain visible. | Opening-variety polish only after higher-risk sets are stable. |

## Next Work Decision Rule

Use this order when choosing the next pass:

1. If a skill has structural mismatch with Goldman, fix the whole skill set.
2. If no structural mismatch exists, choose the skill with the largest training-affordance gap.
3. If two skills are close, prioritize the one with higher clinical risk or higher task complexity.
4. Only after those are stable, use surface signals: shortness, repetition, cue-word mismatch, or translation literalness.
5. Norwegian polish follows the English change immediately for edited items, but dedicated Bokmal-only polish should wait until the English markers are stable.

## Next Recommended Pass

Current recommendation after the 2026-06-19 empathic-evocations regression pass: move next to Staying in Contact with Intense Affect hard. The goal is to spot-check high-risk items for contact-first precision around self-harm, violence, dissociation, and erotic/boundary material without turning the response into rationale, advice, or containment-only work.

### Implementation Update: Empathic Evocations Moderate/Hard

A moderate/hard empathic-evocations regression pass revised 9 items across Carlos, Nina, Aisha, David, and Marcus.

Current moderate/hard empathic-evocations state after this pass:

- 90 total empathic-evocations items preserved; all moderate and hard items reviewed.
- One Nina marker was flattened so the client names the feared judgment rather than supplying the relational image.
- Selected responses were polished to keep imagery concrete and clinically close rather than decorative or over-poetic.
- High-risk Aisha items involving self-harm and suicidal language were spot-checked for safety-sensitive evocation.
- Matching Bokmal localizations were updated with natural phrasing.
- Quality rating increased from about 8.4/10 to about 8.5/10 for both moderate and hard Empathic Evocations.

### Implementation Update: Providing Treatment Rationale Hard

A hard-tier treatment-rationale pass revised 9 advanced responses across Aisha, David, and Marcus.

Current hard treatment-rationale state after this pass:

- 90 total treatment-rationale items preserved; all 30 hard responses reviewed.
- Targeted edits strengthened the "why this helps" link in places where responses were too compressed or abstract.
- The revised hard responses more explicitly connect EFT method to the client's stated fear or goal: staying safe with large feelings, making attachment panic workable, keeping work practical, using numbness as information, and noticing guard signals before shutdown.
- Matching Bokmal localizations were updated with natural phrasing around grounding, tilknytningspanikk, nummenhet, and practical change.
- Quality rating for hard Providing Treatment Rationale increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Empathic Conjectures Hard

A hard-tier empathic-conjectures regression pass revised 10 advanced responses across Aisha, David, and Marcus.

Current hard empathic-conjectures state after this pass:

- 90 total empathic-conjectures items preserved; all 30 hard responses reviewed.
- Targeted edits simplified responses that named several hidden meanings at once.
- Revised responses now stay closer to one tentative near-surface guess, matching Goldman's "I wonder / maybe" style.
- High-risk items involving suicidal language, self-harm, shame, narcissistic injury, and trauma numbing were spot-checked in English and Bokmal.
- Matching Bokmal localizations were updated with more natural phrasing and less literal therapy-English structure.
- Quality rating for hard Empathic Conjectures increased from about 8.3/10 to about 8.5/10.

### Implementation Update: Exploratory Questions Hard

A hard-tier exploratory-questions regression pass revised 7 advanced responses across Aisha, David, and Marcus.

Current hard exploratory-questions state after this pass:

- 90 total exploratory-question items preserved; all 30 hard responses reviewed.
- Every hard response still contains exactly one question.
- Targeted scan found zero repeated hard response starts.
- Targeted scan found zero containment/grounding hits such as `breath`, `safe`, `ground`, `stay with`, or `keep`.
- Revised responses now point more directly to present feeling and inner experience instead of cognition, danger imagery, or containment-adjacent phrasing.
- Matching Bokmal localizations were aligned with natural inward-question wording.
- Quality rating for Exploratory Questions hard increased from about 8.3/10 to about 8.5/10.

Exploratory Questions hard is now strong enough to leave the active-priority slot. Later work should be regression or Bokmal-only polish unless flagged.

### Implementation Update: Empathic Affirmation and Validation Easy

An easy-tier validation pass revised 29 beginner responses and 10 thin markers across Sara, Michael, and Jason.

Current easy validation state after this pass:

- 90 total validation items preserved; all 30 easy items reviewed.
- Repeated English response starts in the easy tier reduced to zero.
- Easy-tier `makes sense` phrasing reduced from 21 responses to 1 response, while keeping explicit contextual legitimacy.
- English responses now validate through concrete context: fresh breakup grief, public composure, moral guilt, humiliation rules, presentation exposure, and social shame.
- Bokmal localizations were aligned naturally; easy-tier `gir mening` phrasing was reduced to zero and `det er klart` was removed.
- Quality rating for Empathic Affirmation and Validation easy increased from about 8.2/10 to about 8.6/10.

Empathic Affirmation and Validation is now strong enough across easy, moderate, and hard tiers to leave the active-priority slot. Later work should be regression or Bokmal-only polish unless flagged.

### Implementation Update: Empathic Understanding Hard

A hard-tier empathic-understanding marker and reflection pass revised all 30 Aisha, David, and Marcus items.

Current hard understanding state after this pass:

- 90 total empathic-understanding items preserved; 30 hard items revised.
- Hard client marker average increased from about 14.7 to 23.5 words.
- Hard minimum marker length increased from 11 to 18 words.
- The edited client prompts now provide fuller explicit emotional meaning around attachment panic, self-harm urges, shame, narcissistic exposure, alcohol/anxiety, trauma numbing, passive death thoughts, and approach-avoidance around closeness.
- Suggested responses remain one-sentence basic reflections with no questions, advice, validation phrases, conjectures, or evocation-heavy imagery.
- Every edited English item has a matching Bokmal localization, with common therapy-English phrasing avoided in the revised slice.
- Quality rating for Empathic Understanding hard increased from about 8.0/10 to about 8.4/10.

Empathic Understanding hard is now strong enough to leave the active-priority slot. The later moderate breadth gap has also now been addressed.

### Implementation Update: Empathic Understanding Moderate

A moderate-tier empathic-understanding breadth pass revised all 30 Laura, Carlos, and Nina items.

Current moderate understanding state after this pass:

- 90 total empathic-understanding items preserved; 30 moderate items revised.
- Moderate client marker average increased to about 29.7 words while responses stayed concise at about 15.5 words.
- The edited client prompts now provide fuller explicit emotional context around trauma-linked numbness, divorce stress, guarded kindness, anger/shame cycles, financial/job fear, caretaking guilt, and hidden resentment.
- Suggested responses remain basic reflections with no questions, advice, validation phrases, conjectures, exploratory invitations, or evocation-heavy imagery.
- Every edited English item has a matching Bokmal localization written as natural Bokmal rather than a literal translation.
- Quality rating for Empathic Understanding moderate increased from about 8.2/10 to about 8.5/10.

Empathic Understanding moderate is now strong enough to leave the active-priority slot. Later work should be regression or Bokmal-only polish unless flagged.

### Implementation Update: Empathic Evocations Easy

An easy-tier evocations marker-affordance pass revised 10 thin beginner markers across Sara, Michael, and Jason plus one repeated response opening.

Current easy evocations state after this pass:

- 90 total evocations items preserved; 10 easy markers revised.
- Easy client marker average increased to about 15.8 words.
- No easy-tier marker is now 12 words or fewer.
- The edited client prompts now add ordinary scene detail without using client-side `like/as if/as though` imagery, preserving the trainee's opportunity to supply vivid imagery.
- Suggested responses still carry the metaphor, image, or sensory evocation; one repeated response opening was removed.
- Every edited English item has a matching Bokmal localization written in natural Bokmal.
- Quality rating for Empathic Evocations easy increased from about 8.2/10 to about 8.5/10.

Empathic Evocations is now strong enough across easy, moderate, and hard tiers to leave the active-priority slot. Later work should be regression or Bokmal-only polish unless flagged.

### Implementation Update: Empathic Evocations Hard

A hard-tier evocations marker-affordance pass revised all 30 Aisha, David, and Marcus items.

Current hard evocations state after this pass:

- 90 total evocations items preserved; 30 hard items revised.
- Hard client marker average increased from about 13.1 to 22.6 words.
- Hard minimum marker length increased from 6 to 16 words.
- The edited client prompts now carry more crisis pressure, guarded cognition, defensive organization, and relational stakes without using client-side "like/as if/as though" imagery.
- Safety-sensitive Aisha and Marcus material keeps the client utterance plain while allowing the therapist response to evoke intensity without glamorizing self-harm, suicidality, trauma, or shutdown.
- Every edited English item has a matching Bokmal localization, with common therapy-English phrasing avoided in the revised slice.
- Quality rating for Empathic Evocations hard increased from about 8.1/10 to about 8.4/10.

Empathic Evocations hard is now strong enough to leave the active-priority slot.

### Implementation Update: Empathic Evocations Moderate

A moderate-tier evocations marker-affordance pass revised all 30 Laura, Carlos, and Nina items.

Current moderate evocations state after this pass:

- 90 total evocations items preserved; 30 moderate items revised.
- Moderate client marker average increased from about 14.0 to 21.3 words.
- Moderate minimum marker length increased to 17 words.
- The edited client prompts now carry ordinary situation, guarded cognition, or relational pressure without using "as if/as though" imagery on the client side.
- The suggested therapist responses continue to supply the vivid image, sensory language, or metaphor, which keeps the practice target clear.
- Every edited English item has a matching Bokmal localization, with common therapy-English phrasing avoided in the revised slice.
- Quality rating for Empathic Evocations moderate increased from about 8.0/10 to about 8.4/10.

Empathic Evocations moderate is now strong enough to leave the active-priority slot.

### Implementation Update: Marker Recognition and Chair Work

The first chair-work enrichment pass was completed for 44 underdeveloped items, followed by a residual marker pass for the remaining most compressed items. A further suggestion-sequencing pass then revised 23 items across easy, moderate, and hard cases.

Current chair-work metrics after the residual pass:

- 90 total items preserved.
- Average client marker length increased from 17.6 to 35.4 words.
- Average suggested response length is now 50.0 words overall, with the hard tier at 54.8 words.
- Minimum marker length increased from 10 to 20 words.
- 71 of 90 markers now contain at least 30 words.
- 0 markers remain below 20 words; 13 remain below 25 words and should now be judged by marker suitability rather than mechanically expanded.
- Every edited English item has a matching Bokmal localization and a suggestion that explicitly launches the relevant chair task.
- The revised suggestions now more consistently model the Goldman sequence: name the marker in ordinary language, ask permission, identify the chair setup, and give the first concrete enactment.
- A later hard-tier setup pass revised 24 Aisha, David, and Marcus responses plus one client marker that had leaked the chair task. The hard tier now has no repeated first-sentence openings, only two residual "That sounds like..." openings, and stronger permission/pacing for trauma-linked material.
- Current quality rating: about 8.5/10 for the hard tier and 8.5/10 overall. The set is strong deliberate-practice content, with remaining work best framed as regression polish rather than broad rewriting.

The section is no longer the clearest structural mismatch. Later review should focus on high-risk chair-work setup and Bokmal naturalness, not further broad expansion.

### Implementation Update: Empathic Explorations

An empathic-explorations response-boundary pass revised 25 items across moderate and hard cases.

Current exploration state after this pass:

- 90 total items preserved.
- Quality rating increased to about 8.1/10.
- The edited responses more consistently stay one small step beside the client's shown experience, then invite one manageable next moment of contact.
- The pass reduced drift toward hidden-function conjecture, metaphor-heavy evocation, broad analytic questioning, and intense-affect style containment.
- Every edited English item has a matching Bokmal localization.

Empathic Explorations is now strong enough to leave the active-priority slot. Later work should focus on marker breadth and Bokmal naturalness rather than broad rewriting.

A later 2026-06-18 hard-tier regression pass revised all 30 Aisha, David, and Marcus suggestions plus three over-formulated markers. The hard responses now consistently make one live exploratory move instead of defaulting to "stay with" scaffolding, high-risk Aisha items avoid over-intensifying self-harm/trauma material, and the matching Bokmal no longer repeats `Kan vi`, `La oss`, or `Vi kan` in the targeted tier.

Current hard-tier quality rating: about 8.5/10. The set is strong deliberate-practice material; later exploration work should be regression or dedicated Bokmal polish unless flagged.

### Implementation Update: Self-Disclosure

A self-disclosure boundary/transparency pass revised 25 items across easy, moderate, and hard cases.

Current self-disclosure state after this pass:

- 90 total items preserved.
- Quality rating increased to about 8.2/10.
- The edited responses more consistently answer the relevant therapist question honestly and briefly, clarify boundaries around relationship details, attraction, care, lateness, competence, and safety, then return focus to the client's experience.
- The pass reduced drift toward reassurance, therapist biography, confession, advice, and alliance-repair overprocessing.
- Every edited English item has a matching Bokmal localization.

Self-Disclosure is now strong enough to leave the active-priority slot. Later work should focus on marker breadth and Bokmal idiom rather than broad rewriting.

### Implementation Update: Empathic Conjectures

An empathic-conjectures response-boundary pass revised 44 items across easy, moderate, and hard cases.

Current conjectures state after this pass:

- 90 total items preserved.
- Quality rating increased to about 8.3/10.
- The edited responses more consistently mark conjecture as tentative, stay close to the client's immediate evidence, and name only a near-surface hidden feeling, meaning, or need.
- The pass reduced drift toward confident interpretation, quasi-questions, explanatory certainty, and over-formulated case conceptualization.
- Every edited English item has a matching Bokmal localization.

Empathic Conjectures is now strong enough to leave the active-priority slot. Later work should focus on marker breadth and Bokmal naturalness rather than broad rewriting.

### Implementation Update: Empathic Understanding

An empathic-understanding regression and breadth pass revised 37 items across moderate and hard cases.

Current understanding state after this pass:

- 90 total items preserved.
- Quality rating increased to about 8.4/10.
- The edited suggestions more consistently reflect only the client's explicit emotional meaning, without adding protective-function conjecture, reassurance, advice, validation, or case formulation.
- The pass simplified several hard-case responses for Aisha, David, and Marcus so they remain basic reflections even when the marker contains self-harm, substance-use, trauma, or attachment-panic content.
- Every edited English item has a matching Bokmal localization.

Empathic Understanding is now strong enough to leave the active-priority slot. Later work should be Bokmal-only polish unless feedback flags a specific item.

### Prior Pass: Empathic Affirmation and Validation

This previously recommended validation regression pass has been completed. Future validation work should be light regression review or Supabase-feedback driven unless a new audit lowers its score.

### Implementation Update: Empathic Affirmation and Validation

A targeted moderate-tier validation breadth pass has now been completed.

Current validation state after this pass:

- 90 total items preserved.
- Quality rating increased to about 8.0/10.
- The moderate tier now better matches Goldman's breadth without copying scenarios mechanically: depressive withdrawal, guarded romantic interest, grief tied to home/family transition, kindness/pleasure shutdown, culturally loaded anger, parenting shame, embodied fight shame, walking away as protection, receiving care, moralized generosity, maternal resentment, and pride/fear about a son's risk.
- The edited responses validate emotions and needs in context while avoiding endorsement of harmful behavior.
- Every edited English item has a matching Bokmal localization.

This section is now strong enough to leave the active-priority queue. Later regression work should focus on response-opening variety and Norwegian idiom rather than broad rewriting.

### Implementation Update: Staying in Contact with Intense Affect

Three intense-affect passes have now been completed.

Current intense-affect state after the third pass:

- 90 total items preserved.
- Quality rating increased from about 6.6/10 before the first pass to 8.1/10 after the third pass.
- Average client marker length increased from 17.4 to 31.3 words.
- Average suggested response length is now 29.1 words.
- Minimum marker length increased from 12 to 17 words.
- Markers below 20 words decreased from 67 to 9.
- Markers containing at least 30 words increased from 1 to 59.
- Every edited English item has a matching Bokmal localization.
- The edited items now give trainees more live affective pressure to stay with: sobbing, panic, shame exposure, anger escalation, collapse, dissociation risk, protective exit pulls, attachment panic, and high-risk bodily urges.
- The third pass focused on response quality rather than marker expansion: high-risk and dissociation responses now lead with presence and contact, then add safety, titration, or boundary limits only where the content requires it.

This section is now strong enough to stop being the automatic next target. A later regression pass should still check self-harm urges, violence urges, sexual-boundary material, dissociation, and alliance criticism for contact-first precision.

### Implementation Update: Alliance Repair

Three alliance-repair enrichment passes have now been completed, covering the most compressed rupture markers first and then the residual sub-20-word markers. A fourth high-risk rupture response pass revised 23 items across competence concerns, previous therapy harm, cultural respect, professional or sexual boundaries, self-harm disclosure, violence language, trauma room safety, and whole-therapy challenge. A fifth hard-tier opening/ownership pass revised 19 Aisha, David, and Marcus responses plus matching Bokmal localizations. A sixth moderate-tier opening/ownership pass revised 18 Laura, Carlos, and Nina responses plus matching Bokmal localizations.

Current alliance-repair metrics after the third pass:

- 90 total items preserved.
- Average client marker length increased from 16.5 to 34.2 words.
- Average suggested response length is now 47.4 words overall, with the moderate tier at 45.1 words.
- Minimum marker length increased from 8 to 20 words.
- 72 of 90 markers now contain at least 30 words.
- 0 markers remain below 20 words; 10 remain below 25 words and should be judged by suitability, not automatically expanded.
- The edited items now include clearer relational context: what the therapist did, how it landed, and what became at stake in the therapy relationship or process.
- Every edited English item has a matching Bokmal localization and a repair response that receives impact before clarifying frame or next steps.
- The latest pass strengthened responses that were already plausible but a little too brief, abstract, or frame-focused. The revised responses more consistently receive the specific impact, own the therapist contribution, clarify frame only after impact is received, and ask what would help the client stay in contact now.
- Current quality rating: about 8.5/10 for hard and moderate tiers and 8.5/10 overall. The set is strong deliberate-practice content; remaining work is occasional regression review and flagged-item repair.

Alliance Repair hard and moderate are no longer leading contract gaps. Future alliance-repair work should be regression review only unless flagged.

Completed target:

- Keep all 90 IDs and the 9-case matrix.
- Do not add features, skills, or schema.
- Lengthen a bounded slice of 20-30 rupture markers where the therapist contribution, client impact, or relational context is underdeveloped.
- Ensure every revised marker sounds like natural client speech in the room, not a generic complaint about therapy.
- Strengthen suggestions so they include the repair sequence where appropriate:
  - receive and name the impact before explaining intent;
  - own the therapist's contribution or possible miss;
  - invite correction about what the client needed instead;
  - clarify frame only after the impact is received;
  - ask what would help the client stay in contact now.
- Immediately update Norwegian translations for changed items.
- Regenerate artifacts and validate.

Next, run an empathic-explorations boundary pass with the same contract-first method.

## Why This Changes The Workflow

Earlier passes asked, "Which items look weakest?" The revised workflow asks, "Which full exercise set is least faithful to the task it is supposed to train?"

That prevents a self-awareness-style miss from staying hidden behind polished individual items.

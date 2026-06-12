# Benchmark Contract Audit

Date: 2026-06-11

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

This audit uses the current branch state after the therapist self-awareness rewrite.

Automated averages are triage only, not quality scores. They still reveal places where the app may be more compressed than Goldman.

| Skill | App Statement Avg | Benchmark Statement Avg | App Suggestion Avg | Benchmark Response Avg | Signal |
| --- | ---: | ---: | ---: | ---: | --- |
| Therapist Self-Awareness | 63.9 | 76.8 | 26.1 | 25.9 | Now structurally close. |
| Empathic Understanding | 16.0 | 32.9 | 12.9 | 17.8 | App is concise; likely acceptable but needs coverage checks. |
| Empathic Affirmation and Validation | 17.9 | 27.1 | 20.6 | 23.0 | Moderate breadth pass complete; now strong with later regression polish needed. |
| Exploratory Questions | 16.8 | 22.5 | 11.8 | 26.3 | App intentionally keeps questions cleaner than Goldman examples. |
| Treatment Rationale | 15.5 | 20.5 | 28.8 | 54.2 | App is briefer than Goldman but usually clinically focused. |
| Empathic Explorations | 17.0 | 26.2 | 18.2 | 30.3 | Response-boundary pass complete; strong, with later marker breadth and Bokmal polish. |
| Empathic Evocations | 13.8 | 23.1 | 17.8 | 20.3 | Improved after rewrite; monitor marker flatness. |
| Empathic Conjectures | 16.8 | 21.5 | 20.1 | 21.8 | Structurally close. |
| Staying in Contact with Intense Affect | 31.3 | 35.3 | 29.1 | 22.6 | Third response-quality pass complete; now strong, with residual regression risk in high-risk items. |
| Self-Disclosure | 14.8 | 18.4 | 30.7 | 27.6 | Structurally close; targeted boundary examples only. |
| Marker Recognition and Chair Work | 35.4 | 37.5 | 48.4 | 84.3 | Suggestion sequencing pass complete; strong, with residual high-risk and Bokmal regression polish. |
| Alliance Repair | 34.2 | 35.0 | 44.9 | 104.8 | High-risk rupture response pass complete; strong, with later Bokmal and opening-variety polish. |

## Skill Ranking

| Rank | Skill | Current Judgment | Next Action |
| ---: | --- | --- | --- |
| 1 | Self-Disclosure | Structurally close. Some hard examples can be sharpened around attractiveness, pity, lateness, and competence. | Targeted boundary/transparency polish. |
| 2 | Empathic Conjectures | Structurally close. Needs occasional checks that responses remain tentative and reach just beyond what is explicit. | Low-volume targeted polish. |
| 3 | Empathic Understanding | Strong basic response contract. Some app markers are shorter and more case-specific than Goldman, but the skill does not require long prompts. | Regression and ordinary-life breadth checks. |
| 4 | Empathic Explorations | Now strong after a 25-item response-boundary pass. Suggestions more consistently stay with the shown edge and invite one manageable next moment of contact. Quality rating: about 8.1/10. | Later marker-breadth and Bokmal polish only unless flagged. |
| 5 | Alliance Repair | Now strong after marker enrichment and a high-risk rupture response pass across 23 items. Suggestions more reliably receive impact, own therapist contribution, clarify frame without defensiveness, and ask what helps now. Quality rating: about 8.2/10. | Later regression polish only, especially Bokmal naturalness and response-opening variety. |
| 6 | Staying in Contact with Intense Affect | Third pass moved the responses closer to Goldman-level presence: contact first, then safety, titration, or boundary clarity when clinically needed. Quality rating: 8.1/10. | Later high-risk regression only. |
| 7 | Marker Recognition and Chair Work | Now strong after marker expansion, residual marker work, and a suggestion-sequencing pass across 23 easy, moderate, and hard items. Suggestions now more reliably include consent, correct chair placement, and first enactment. Quality rating: about 8.1/10. | Later regression polish only, especially high-risk chair-work setup and Norwegian naturalness. |
| 8 | Empathic Affirmation and Validation | Targeted moderate-tier pass broadened the Goldman coverage: depressive withdrawal, conflicted positive feeling, grief about home/family, parenting shame, culturally loaded generosity guilt, and pride/fear about a child's risk. Quality rating: 8.0/10. | Regression polish only unless flagged, especially response-opening variety and Norwegian naturalness. |
| 9 | Empathic Evocations | Much improved. The main risk is regression: client statements must not start supplying the best image again. | Regression scan only unless a bad marker is found. |
| 10 | Exploratory Questions | Strong and deliberately cleaner than some Goldman examples. App questions being shorter is acceptable if they remain inward-turning and singular. | Regression checks for question chains or hidden conjecture. |
| 11 | Treatment Rationale | Strong. App responses are shorter than Goldman but often better suited to deliberate practice because they are plain-language and client-specific. | Low priority; polish only when flagged. |
| 12 | Therapist Self-Awareness | Now structurally corrected: long activating markers and suggestions as self-awareness disclosures rather than client interventions. | Low priority; only regression and Norwegian polish. |

## Next Work Decision Rule

Use this order when choosing the next pass:

1. If a skill has structural mismatch with Goldman, fix the whole skill set.
2. If no structural mismatch exists, choose the skill with the largest training-affordance gap.
3. If two skills are close, prioritize the one with higher clinical risk or higher task complexity.
4. Only after those are stable, use surface signals: shortness, repetition, cue-word mismatch, or translation literalness.
5. Norwegian polish follows the English change immediately for edited items, but dedicated Bokmal-only polish should wait until the English markers are stable.

## Next Recommended Pass

### Implementation Update: Marker Recognition and Chair Work

The first chair-work enrichment pass was completed for 44 underdeveloped items, followed by a residual marker pass for the remaining most compressed items. A further suggestion-sequencing pass then revised 23 items across easy, moderate, and hard cases.

Current chair-work metrics after the residual pass:

- 90 total items preserved.
- Average client marker length increased from 17.6 to 35.4 words.
- Average suggested response length is now 48.4 words.
- Minimum marker length increased from 10 to 20 words.
- 71 of 90 markers now contain at least 30 words.
- 0 markers remain below 20 words; 13 remain below 25 words and should now be judged by marker suitability rather than mechanically expanded.
- Every edited English item has a matching Bokmal localization and a suggestion that explicitly launches the relevant chair task.
- The revised suggestions now more consistently model the Goldman sequence: name the marker in ordinary language, ask permission, identify the chair setup, and give the first concrete enactment.
- Current quality rating: about 8.1/10. The set is strong deliberate-practice content, with remaining work best framed as regression polish rather than broad rewriting.

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

### Next Pass: Self-Disclosure

The next highest-value slice should be a self-disclosure boundary/transparency pass. The pass should judge whether responses offer brief therapist transparency in service of the client, then return focus to the client's experience, without becoming reassurance, advice, confession, or alliance repair.

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

Three alliance-repair enrichment passes have now been completed, covering the most compressed rupture markers first and then the residual sub-20-word markers. A fourth high-risk rupture response pass revised 23 items across competence concerns, previous therapy harm, cultural respect, professional or sexual boundaries, self-harm disclosure, violence language, trauma room safety, and whole-therapy challenge.

Current alliance-repair metrics after the third pass:

- 90 total items preserved.
- Average client marker length increased from 16.5 to 34.2 words.
- Average suggested response length is now 44.9 words.
- Minimum marker length increased from 8 to 20 words.
- 72 of 90 markers now contain at least 30 words.
- 0 markers remain below 20 words; 10 remain below 25 words and should be judged by suitability, not automatically expanded.
- The edited items now include clearer relational context: what the therapist did, how it landed, and what became at stake in the therapy relationship or process.
- Every edited English item has a matching Bokmal localization and a repair response that receives impact before clarifying frame or next steps.
- The latest pass strengthened responses that were already plausible but a little too brief, abstract, or frame-focused. The revised responses more consistently receive the specific impact, own the therapist contribution, clarify frame only after impact is received, and ask what would help the client stay in contact now.
- Current quality rating: about 8.2/10. The set is strong deliberate-practice content; remaining work is regression polish, especially Norwegian idiom and response-opening variety.

Alliance Repair is no longer the leading contract gap. Future work here should be Bokmal polish and light response-variety review rather than broad rewriting.

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

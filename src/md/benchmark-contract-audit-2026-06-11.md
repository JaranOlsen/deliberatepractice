# Benchmark Contract Audit

Date: 2026-06-11; full library scoring update 2026-06-20

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

This audit uses the current branch state after the 2026-06-20 easy empathic-explorations polish.

Automated averages are triage only, not quality scores. They still reveal places where the app may be more compressed than Goldman.

| Skill | App Statement Avg | Benchmark Statement Avg | App Suggestion Avg | Benchmark Response Avg | Signal |
| --- | ---: | ---: | ---: | ---: | --- |
| Therapist Self-Awareness | 63.2 | 76.8 | 25.7 | 25.9 | Now structurally close; hard examples have stronger activation pressure. |
| Empathic Understanding | 24.9 | 32.9 | 14.1 | 17.8 | Easy, moderate, and hard tiers now have stronger ordinary-scene and explicit emotional meaning while staying basic-empathy pure. |
| Empathic Affirmation and Validation | 23.8 | 27.1 | 22.0 | 23.0 | Easy, moderate, and hard response-variety/Bokmal passes complete; now strong with later light regression only. |
| Exploratory Questions | 16.8 | 22.5 | 11.8 | 26.3 | Hard regression pass complete; app intentionally keeps questions cleaner than Goldman examples. |
| Treatment Rationale | 15.5 | 20.5 | 28.8 | 54.2 | App is briefer than Goldman but usually clinically focused. |
| Empathic Explorations | 17.8 | 26.2 | 24.9 | 30.3 | Easy, moderate, and hard response/Bokmal passes complete; strong, with later marker breadth and high-risk regression only. |
| Empathic Evocations | 20.8 | 23.1 | 18.9 | 20.3 | Easy, moderate, and hard markers now have stronger ordinary-scene affordance while preserving trainee image-making. |
| Empathic Conjectures | 16.5 | 21.5 | 20.8 | 21.8 | Response-boundary pass complete; strong, with later marker-breadth and Bokmal polish. |
| Staying in Contact with Intense Affect | 31.3 | 35.3 | 32.0 | 22.6 | Hard high-risk contact-first precision pass complete; later work should be flagged-item or light regression only. |
| Self-Disclosure | 14.8 | 18.4 | 31.3 | 27.6 | Boundary/transparency pass complete; strong, with later Bokmal and marker-breadth polish. |
| Marker Recognition and Chair Work | 35.4 | 37.5 | 50.0 | 84.3 | Hard-tier setup pass complete; remaining work is regression and Bokmal polish rather than structural repair. |
| Alliance Repair | 34.2 | 35.0 | 47.4 | 104.8 | Hard and moderate response-opening/Bokmal passes complete; remaining work is regression only unless flagged. |

## Full Library Quality Scores

These 2026-06-20 ratings score each skill and difficulty tier as a training set, not as isolated items. Goldman-level benchmark quality is 9/10. No current set has a structural failure; the remaining work is targeted movement from strong app-ready material toward benchmark-level variation, precision, and natural Bokmal.

| Skill | Difficulty | Score | Main Quality Judgment |
| --- | --- | ---: | --- |
| Therapist Self-Awareness | Easy | 8.8 | Structurally close to Goldman: long activating markers, useful internal therapist-awareness suggestions, good positive and ordinary activation breadth. |
| Therapist Self-Awareness | Moderate | 8.6 | Strong activating material around guardedness, substance, culture, shame, and rescue pressure; some examples could still carry a little more source-like length and complexity. |
| Therapist Self-Awareness | Hard | 8.6 | Recent pass extended activation pressure around gaze monitoring, trauma shame, results pressure, feeling-safety fear, and defensive independence while keeping suggestions as therapist inner awareness notes. |
| Empathic Understanding | Easy | 8.6 | Recent pass broadened Sara, Michael, and Jason markers with ordinary work, social, shame, and loneliness scenes while preserving short question-free basic reflections and natural Bokmal. |
| Empathic Understanding | Moderate | 8.6 | Recent regression pass polished all Laura, Carlos, and Nina responses for marker fit, opening variety, basic-reflection purity, and natural Bokmal. |
| Empathic Understanding | Hard | 8.6 | Recent pass tightened Aisha, David, and Marcus high-risk reflections, expanded selected advanced markers, and removed subtle explanatory or repeated response patterns. |
| Empathic Affirmation and Validation | Easy | 8.6 | Recent pass made beginner validation more context-specific, reduced repeated "makes sense/understandably" formulas, and aligned Bokmal idiom. |
| Empathic Affirmation and Validation | Moderate | 8.6 | Recent regression pass removed repeated response openings and formulaic validation scaffolds while preserving explicit contextual legitimacy and improving Bokmal idiom. |
| Empathic Affirmation and Validation | Hard | 8.6 | Recent hard-tier regression removed formulaic validation openings, preserved accountability/safety in high-risk items, and polished Bokmal idiom. |
| Exploratory Questions | Easy | 8.5 | Strong one-question purity with simple inward-turning markers; only light opening-variety polish needed. |
| Exploratory Questions | Moderate | 8.7 | Recent regression preserved exactly one inward question per item, removed repeated response openings, reduced visible "what happens/what do you notice" scaffolding, and polished Bokmal away from literal starts. |
| Exploratory Questions | Hard | 8.5 | Recent regression pass removed subtle containment/cognitive drift while preserving one inward-turning question across advanced ambiguity and high-risk material. |
| Providing Treatment Rationale | Easy | 8.8 | Very close to the benchmark task: direct client skepticism/fear markers and plain-language rationale tied to client goals. |
| Providing Treatment Rationale | Moderate | 8.6 | Strong fit with fear, skepticism, numbness, and practicality; Goldman responses are longer, but the app's brevity usually helps practice. |
| Providing Treatment Rationale | Hard | 8.6 | Recent hard-tier pass strengthened rationale language around pace, safety, attachment panic, numbness, hypervigilance, and practical change. |
| Empathic Explorations | Easy | 8.7 | Recent pass kept simple edge-following markers stable while polishing all 30 responses into varied small live-experience invitations; Bokmal now has zero `la oss/kan vi` scaffolds and no repeated starts. |
| Empathic Explorations | Moderate | 8.6 | Recent pass broadened Laura, Carlos, and Nina markers with more ordinary scene pressure, reduced over-imagistic anger markers, and polished Bokmal away from repeated therapy-English scaffolds. |
| Empathic Explorations | Hard | 8.5 | Recent pass tightened all hard responses into one small live exploration step, softened three over-formulated markers, and removed repeated "stay with/kan vi/la oss" patterns in the hard tier. |
| Empathic Evocations | Easy | 8.5 | Recent pass added ordinary scene detail to the thinnest beginner markers while preserving flat client prompts and leaving vivid imagery to the therapist response. |
| Empathic Evocations | Moderate | 8.5 | Regression pass tightened one over-imaged marker and polished selected responses so imagery stays vivid without becoming ornamental. |
| Empathic Evocations | Hard | 8.5 | Regression pass improved safety-sensitive and high-shame response images while preserving flat, cognitive, or guarded client prompts. |
| Empathic Conjectures | Easy | 8.6 | Recent pass tightened beginner guesses into one tentative near-surface meaning, added a little ordinary marker breadth, and polished Bokmal without repeated starts. |
| Empathic Conjectures | Moderate | 8.5 | One of the best-aligned tiers: good hidden-feeling hints without overexposing core pain. |
| Empathic Conjectures | Hard | 8.5 | Targeted hard-tier regression pass simplified over-formulated guesses; responses now stay closer to one tentative hidden feeling or meaning. |
| Staying in Contact with Intense Affect | Easy | 8.6 | Strong live affective pressure and contact-first responses; good range beyond panic/grief. |
| Staying in Contact with Intense Affect | Moderate | 8.6 | Strong pressure, collapse, guilt, rage, and positive-affect material with good contact before regulation. |
| Staying in Contact with Intense Affect | Hard | 8.6 | Recent hard-tier pass tightened erotic-boundary, self-harm, violence, dissociation, and suicidality responses toward emotional contact before safety or frame language. |
| Self-Disclosure | Easy | 8.7 | Strong direct therapist-transparency markers and boundaried, brief responses. |
| Self-Disclosure | Moderate | 8.6 | Strong care, competence, boredom, and therapist-impact questions; mostly polishing Norwegian idiom and variety now. |
| Self-Disclosure | Hard | 8.5 | Strong boundary handling around care, lateness, attraction, pity, and therapist experience. |
| Marker Recognition and Chair Work | Easy | 8.6 | Full matrix now gives natural markers and concrete task setup; strong beginner training value. |
| Marker Recognition and Chair Work | Moderate | 8.5 | Good unfinished-business, self-criticism, interruption, and worry-split coverage with clear first turns. |
| Marker Recognition and Chair Work | Hard | 8.5 | Recent hard-tier pass improved Aisha, David, and Marcus setup sequencing, removed the obvious client-side chair-task leak, and reduced repeated setup openings while preserving safety and consent. |
| Alliance Repair | Easy | 8.6 | Recent easy-tier pass removed repeated response openings across Sara, Michael, and Jason while preserving impact receiving, ownership, apology, and collaborative repair questions. |
| Alliance Repair | Moderate | 8.5 | Recent pass removed repeated response openings across Laura, Carlos, and Nina while preserving ownership, impact receiving, and natural Bokmal repair language. |
| Alliance Repair | Hard | 8.5 | Recent pass removed repeated response openings across Aisha, David, and Marcus while strengthening ownership, frame clarity, and Bokmal idiom for high-risk rupture material. |

## Skill Ranking

Use this ranking when there is no open Supabase feedback. It prioritizes the lowest tier-level scores and the highest training-risk gaps, not whole-skill averages.

| Rank | Target Set | Current Judgment | Next Action |
| ---: | --- | --- | --- |
| 1 | Alliance Repair, hard | Strong, but high-risk rupture material still has the highest clinical consequence if wording becomes defensive, over-apologetic, or unsafe. | Regression-check ownership, safety, repair question shape, and Bokmal tone. |
| 2 | Marker Recognition and Chair Work, moderate/hard | Strong after expansion and sequencing passes, but task setup is technically complex and easiest to drift into over-directing. | Review task setup economy, consent, and first-turn clarity. |
| 3 | Empathic Evocations, easy/moderate/hard | Strong after marker-affordance repair, but evocation remains vulnerable to client-side imagery leakage or ornamental therapist imagery. | Spot-check marker affordance and image usefulness across tiers. |
| 4 | Self-Disclosure, hard | Strong boundary handling, but attraction, pity, lateness, and therapist-impact material remain clinically delicate. | Review brevity, therapist transparency, and return-to-client movement. |
| 5 | Exploratory Questions, easy/hard | Strong one-question purity; remaining gains are mostly variety and Bokmal naturalness. | Review after higher-risk tiers or Supabase flags. |

## Next Work Decision Rule

Use this order when choosing the next pass:

1. If a skill has structural mismatch with Goldman, fix the whole skill set.
2. If no structural mismatch exists, choose the skill with the largest training-affordance gap.
3. If two skills are close, prioritize the one with higher clinical risk or higher task complexity.
4. Only after those are stable, use surface signals: shortness, repetition, cue-word mismatch, or translation literalness.
5. Norwegian polish follows the English change immediately for edited items, but dedicated Bokmal-only polish should wait until the English markers are stable.

## Next Recommended Pass

Current recommendation after the 2026-06-20 easy empathic-explorations polish: if no Supabase feedback is open, move next to Alliance Repair hard for a focused high-risk regression pass.

### Implementation Update: Empathic Understanding Hard

A hard-tier empathic-understanding pass revised all 30 Aisha, David, and Marcus responses and selectively lengthened high-pressure markers.

Current hard empathic-understanding state after this pass:

- 90 total empathic-understanding items preserved; all 30 hard items reviewed.
- Selected hard markers were expanded where the advanced cue was too compressed: Aisha's attachment panic and self-harm pressure, David's shame/exposure and drinking pressure, and Marcus's numbness, substance, passive-death, and closeness/exit markers.
- Responses remain concise reflections with no questions, advice, validation formulas, rationale language, or exploratory invitations.
- English targeted scan shows zero response questions, zero repeated four-word starts, and zero obvious advice/validation/rationale drift terms.
- Matching Bokmal localizations were rewritten naturally with cleaner high-risk reflection language.
- Content updated date remains 2026-06-20, which is the date of this commit.
- Quality rating for hard Empathic Understanding increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Empathic Understanding Easy

An easy-tier empathic-understanding pass revised all 30 Sara, Michael, and Jason items.

Current easy empathic-understanding state after this pass:

- 90 total empathic-understanding items preserved; all 30 easy items reviewed.
- Beginner markers now use fuller ordinary-life scenes: Sara functioning at work then grieving, Michael shame and exposure at work/home, and Jason social-anxiety moments in lunch, texts, meetings, and invitations.
- Responses remain concise reflections with no questions, advice, validation formulas, or interpretive explanations.
- English targeted scan shows zero response questions, zero repeated four-word starts, and zero obvious advice/validation drift terms.
- Matching Bokmal localizations were rewritten naturally rather than literalized.
- Content updated date is 2026-06-20, which is the date of this commit.
- Quality rating for easy Empathic Understanding increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Therapist Self-Awareness Hard

A hard-tier therapist-self-awareness pass revised all 30 Aisha, David, and Marcus suggestions and selectively lengthened five high-value markers.

Current hard therapist-self-awareness state after this pass:

- 90 total therapist-self-awareness items preserved; all 30 hard items reviewed.
- Five hard markers were lengthened where the benchmark gap was most visible: Aisha's gaze-monitoring and trauma-shame pressure, David's results pressure, and Marcus's feeling-safety and defensive-independence pressure.
- Suggestions now more consistently name the therapist's felt reaction, impulse, and internal regulation choice instead of becoming client-facing interventions.
- High-risk items were manually spot-checked in English and Bokmal for self-harm, suicidality, trauma shame, sexual-boundary pressure, alcohol minimization, and therapist-boundary pressure.
- Matching Bokmal localizations were rewritten to keep the exercise natural as therapist self-awareness, not literal therapy-English.
- Content updated date remains 2026-06-19, which is the date of this commit.
- Quality rating for hard Therapist Self-Awareness increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Exploratory Questions Moderate

A moderate-tier exploratory-questions pass revised all 30 Laura, Carlos, and Nina responses.

Current moderate exploratory-questions state after this pass:

- 90 total exploratory-question items preserved; all 30 moderate responses reviewed.
- Client markers stayed stable because they already naturally invite one inward experiential question.
- Each revised response contains exactly one question.
- English targeted scan shows zero repeated four-word starts and no `why` questions.
- Bokmal targeted scan shows exactly one question per item and zero repeated starts.
- Repeated scaffolds such as "What happens..." and "What do you notice..." were replaced with more varied inward prompts.
- A follow-up 2026-06-20 regression pass confirmed all 30 English and Bokmal responses still contain exactly one question, zero repeated starts, no skill drift, and lower use of "where"/"what feeling" scaffolds.
- Content updated date is 2026-06-20, which is the date of this commit.
- Quality rating for moderate Exploratory Questions increased from about 8.4/10 to about 8.7/10.

### Implementation Update: Empathic Conjectures Easy

An easy-tier empathic-conjectures pass revised all 30 Sara, Michael, and Jason items.

Current easy empathic-conjectures state after this pass:

- 90 total empathic-conjectures items preserved; all 30 easy items reviewed.
- Selected markers were made more ordinary and behavioral, especially around Sara's work avoidance and social-media checking.
- Responses now stay closer to one tentative near-surface guess rather than naming several hidden meanings at once.
- English targeted scan shows zero repeated four-word starts and no questions in the revised easy responses.
- Matching Bokmal localizations were rewritten with zero repeated starts and more natural beginner-level conjecture language.
- Content updated date remains 2026-06-19, which is the date of this commit.
- Quality rating for easy Empathic Conjectures increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Empathic Explorations Moderate

A moderate-tier empathic-explorations pass revised all 30 Laura, Carlos, and Nina items.

Current moderate empathic-explorations state after this pass:

- 90 total empathic-explorations items preserved; all 30 moderate items reviewed.
- Laura markers now include more ordinary scene pressure around neighborly care, morning lock-checking, post-dinner wine, and comfort-seeking without overexposing core pain.
- Carlos markers were softened where anger was already too imagistic; the revised prompts leave more room for the trainee to explore the live edge under pushing back, throwing, loudness, and feeling small.
- Nina markers now include more concrete caregiving scenes around messy kitchens, tea/care wishes, volunteering, and bedtime emotional blur.
- English responses preserve close reflection plus one small exploratory invitation; no repeated four-word starts remain in the targeted slice.
- Matching Bokmal localizations were rewritten with zero repeated starts and reduced use of literal scaffolds such as `Vi kan`, `Kan vi`, and `Kroppen`.
- Quality rating for moderate Empathic Explorations increased from about 8.4/10 to about 8.6/10.

### Implementation Update: Empathic Explorations Easy

An easy-tier empathic-explorations pass revised all 30 Sara, Michael, and Jason responses and matching Bokmal localizations.

Current easy empathic-explorations state after this pass:

- 90 total empathic-explorations items preserved; all 30 easy responses reviewed.
- Client markers stayed stable because they already use beginner-appropriate scene-plus-affect edges.
- Two reflective-only suggestions now include a clear exploration move.
- English and Bokmal targeted scans show zero repeated starts.
- Repeated collaborative scaffolds such as `let's`, `can we`, `la oss`, and `kan vi` were removed from the targeted tier.
- `Notice` and `legg merke` motifs were reduced while preserving small live-experience invitations.
- Content updated date is 2026-06-20, which is the date of this commit.
- Quality rating for easy Empathic Explorations increased from about 8.5/10 to about 8.7/10.

### Implementation Update: Alliance Repair Easy

An easy-tier alliance-repair response-variety pass revised 30 beginner responses across Sara, Michael, and Jason.

Current easy alliance-repair state after this pass:

- 90 total alliance-repair items preserved; all 30 easy suggestions reviewed.
- Repeated openings such as "Thank you for..." and "I hear..." were replaced with more varied repair entries that still receive the client impact first.
- Responses preserve the repair sequence: acknowledge impact, own the therapist contribution, apologize where appropriate, clarify frame only as needed, and ask what would help now.
- Matching Bokmal localizations were updated with more natural phrasing around presence, agency, pressure, and repair.
- Content updated date was advanced to 2026-06-19 for this commit.
- Quality rating for easy Alliance Repair increased from about 8.4/10 to about 8.6/10.

Alliance Repair easy is now strong enough to leave the active-priority slot. Later work should be Supabase-feedback driven or occasional regression review.

### Implementation Update: Staying in Contact with Intense Affect Hard

A hard-tier intense-affect regression pass revised 30 advanced responses across Aisha, David, and Marcus, with 3 cue-word corrections.

Current hard intense-affect state after this pass:

- 90 total intense-affect items preserved; all 30 hard suggestions reviewed.
- Cue words were sharpened where they under-signaled the live affect: Aisha romantic-boundary longing, David therapy-disappointment anger, and Marcus war-footage horror.
- Responses now lead more consistently with contact and receiving before safety, boundary, or orientation language.
- High-risk items involving self-harm, cutting, scratching, violent fantasy, sexual-offense shame, dissociation, trauma activation, erotic pressure, and suicidal language were spot-checked in English and Bokmal.
- Matching Bokmal localizations were updated with less literal therapy-English phrasing.
- Quality rating for hard Staying in Contact with Intense Affect increased from about 8.4/10 to about 8.6/10.

Staying in Contact with Intense Affect is now strong enough to leave the active-priority slot. Later work should be Supabase-feedback driven or occasional high-risk regression review.

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

### Implementation Update: Empathic Understanding Moderate Regression

A moderate-tier basic-reflection purity and Bokmal naturalness regression pass has now been completed.

Current moderate understanding state after this pass:

- 30 Laura, Carlos, and Nina responses reviewed and revised.
- Quality rating increased from about 8.5/10 to about 8.6/10.
- English targeted scan now shows zero repeated response starts, zero response questions, and zero advice, validation, rationale, conjecture, or exploratory drift.
- Bokmal targeted scan now shows zero repeated response starts, with fewer literal `Du...` openings and more natural clinical phrasing.
- The responses remain concise basic reflections while carrying more of the client's live conflict: numb functioning, guarded kindness, financial fear, anger/shame cycles, care hunger, guilt, and hidden resentment.

Empathic Understanding moderate is now strong enough to leave the active-priority slot. Later work should be Supabase-feedback driven or broad regression only.

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

### Implementation Update: Empathic Affirmation and Validation Moderate Regression

A moderate-tier response-variety and Bokmal naturalness regression pass has now been completed.

Current moderate validation state after this pass:

- 30 Laura, Carlos, and Nina responses reviewed and revised.
- Quality rating increased from about 8.4/10 to about 8.6/10.
- English targeted scan now shows zero repeated response starts, zero response questions, zero advice flags, and zero uses of "No wonder," "Of course," or "makes sense" in the moderate tier.
- Bokmal targeted scan now shows zero repeated response starts and zero uses of "Ikke rart," "gir mening," or "Det er klart" in the moderate tier.
- The responses still validate emotions and protective moves in context, including trauma shutdown, anger/fight shame, family responsibility, care hunger, and maternal pride/fear, without endorsing harmful behavior.

Empathic Affirmation and Validation moderate is now strong enough to leave the active-priority slot. Later work should target hard-tier high-risk precision or Supabase flags before returning to this tier.

### Implementation Update: Empathic Affirmation and Validation Hard Regression

A hard-tier high-risk validation precision and Bokmal naturalness regression pass has now been completed.

Current hard validation state after this pass:

- 30 Aisha, David, and Marcus responses reviewed and revised.
- Quality rating increased from about 8.4/10 to about 8.6/10.
- English targeted scan now shows zero repeated response starts, zero response questions, zero advice flags, zero validation-cue misses, and zero uses of "No wonder," "Of course," "Understandably," or "makes sense" in the hard tier.
- Bokmal targeted scan now shows zero repeated response starts and zero uses of "Ikke rart," "Selvsagt," "Forståelig nok," or "gir mening" in the hard tier.
- The responses still validate the emotional/protective logic in context while preserving accountability around harm, trauma boundaries, attachment panic, dissociation, isolation, and safety.

Empathic Affirmation and Validation hard is now strong enough to leave the active-priority slot. Later work should be Supabase-feedback driven or broad regression only.

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

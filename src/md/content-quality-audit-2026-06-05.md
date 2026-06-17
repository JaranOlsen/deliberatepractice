# Current Content Quality Audit

Date: 2026-06-05; branch update through 2026-06-16

## Scope

This audit reviews the current English client statements and suggested therapist responses in `src/data/statements.js` against the Goldman benchmark examples extracted in `src/md/EFT_Exercises_Extracted.md`.

Norwegian Bokmal translations are not scored here because the Goldman source is English. Translation naturalness should be audited separately after English marker shape is stable.

## Method

- Mapped app difficulty to benchmark level: easy = beginner, moderate = intermediate, hard = advanced.
- Reviewed all current client statements by skill and difficulty.
- Compared each skill/tier against the Goldman benchmark statement families and response standards.
- Used automated scans only as triage: benchmark-token overlap, short-marker counts, client-side vividness, chair-work pre-labels, and repeated response motifs.
- Treated benchmark examples as archetypes to cover, not surface wording to copy.

## Executive Summary

The corpus is now substantially stronger than the earlier audit. The two previous largest weaknesses have improved:

- Empathic Evocations now mostly use flatter, less imagistic client markers, leaving the vivid evocation to the therapist trainee.
- Marker Recognition and Chair Work now uses natural client speech rather than pre-labeling parts, voices, chairs, or unfinished business.

Branch update:

- Empathic Explorations moderate/hard have been revised toward flatter emotional ambiguity, distrust, direct therapist-attraction material, and less pre-formed imagery. A later regression pass pulled selected hard-case responses back from conjecture/evocation drift toward close reflection plus one small exploratory invitation.
- Exploratory Questions moderate/hard have been revised toward live but unclear inward edges, with fewer client-supplied body cues.
- Empathic Understanding moderate/hard have been broadened with more ordinary practical distress, confused depression, substance/anxiety ambivalence, friend disappointment, and "guide me" uncertainty.
- Therapist Self-Awareness easy/moderate have been broadened with ordinary therapist-activating material: hope, advice pull, rescue pull, cultural humility, dependency shame, alcohol/usefulness concerns, and grief that can pull the therapist toward comfort.
- Staying in Contact with Intense Affect responses have received a response-variation pass, reducing repeated "stay with," "with me," "keep your," and "keep you" phrasing while preserving safety language for self-harm and violence items.
- Empathic Evocations moderate/hard have been broadened with betrayal, worthlessness, being used, dependency shame, hopeless shutdown, macho anti-feeling, confidentiality/distrust, confused distress, and crisis-denial archetypes while keeping client markers mostly flat enough for trainee image-making.
- Empathic Conjectures easy/moderate have been revised so more markers present behavior, situation, and defensive speech rather than naming the hidden process the trainee is meant to conjecture.
- Marker Recognition and Chair Work has been expanded to the full 10-per-case matrix, adding natural self-critical, self-interruptive, unfinished-business, catastrophizing/worry, betrayal, and trauma-linked chair-work markers.
- Alliance Repair has been expanded to the full 10-per-case matrix, adding competence/status, boredom/disinterest, previous-therapy, sexual-boundary, trauma-pacing, substance, and safety/boundary ruptures.
- Empathic Affirmation and Validation easy has been broadened with more ordinary public-composure grief, social anger, responsibility/guilt, presentation anxiety, and positive-invitation anxiety markers, while reducing repeated "of course/no wonder" response openings.
- Therapist Self-Awareness hard responses have been polished to model internal regulation more clearly, reduce "let's/we can/I want" procedural drift, and keep safety/boundary responses steady under suicidality, erotic pressure, distrust, and sexist/substance-minimizing material.
- Empathic Explorations easy has been recalibrated so markers use simpler scene-plus-affect language, reduce pre-supplied body imagery, and keep responses closer to explicit emerging feeling rather than conjecture.
- Exploratory Questions easy has been recalibrated so client markers leave more of the inward sensing work to the trainee and suggested responses stay to one clean experiential question.
- Exploratory Questions moderate has been tightened around one-step inward questions, with fewer client-supplied body cues and less interpretive therapist language.
- Exploratory Questions hard has been tightened so advanced rupture, shame, dissociation, and threat markers still invite one inward question without the therapist supplying conjecture or body-process language too early.
- Empathic Understanding easy has received regression polish: selected Sara, Michael, and Jason responses now stay closer to explicit client meaning, and one Sara marker was softened away from naming core unlovability too directly.
- Staying in Contact with Intense Affect easy/moderate has received a contact-over-grounding polish: selected responses now communicate steadier presence before regulation, and Sara now includes a warm positive-affect marker that is hard to stay with for different reasons than panic or grief.
- Empathic Affirmation and Validation has received a cross-tier response-variety pass: 51 English responses and their Bokmal localizations were tightened so validation remains explicit while reducing overuse of "No wonder," broad protection language, and literal Norwegian therapy-English phrasing.
- Empathic Evocations has received another regression pass: selected markers were flattened where they were still supplying body/image language too early, and a self-harm-adjacent evocation was made less poetic and more clinically careful.
- Empathic Conjectures hard has received a marker-spoiler regression pass: selected Aisha, David, and Marcus markers were flattened where they named the hidden fear, loneliness, shame, or defensive logic too directly before the therapist's conjecture.
- Staying in Contact with Intense Affect moderate/hard has received contact-first response polish: 29 English responses and Bokmal localizations now receive the affect before grounding, containment, or safety structuring. Estimated set quality moved closer to Goldman level, roughly from 8.1/10 to 8.5/10 for the targeted response slice.
- Self-Disclosure hard has received response polish: 15 English responses and Bokmal localizations now use briefer, cleaner therapist transparency with fewer repeated "I want to..." and return-to-client formulae. Estimated hard response quality moved from roughly 8.0/10 to 8.5/10.
- Empathic Explorations hard has received marker/response regression polish: 15 English items and Bokmal localizations now reduce crisis-contact drift, add clearer one-step exploratory invitations, and keep Aisha/Marcus material closer to a delicate emotional edge. Estimated hard tier quality moved from roughly 8.1/10 to 8.4/10.
- Marker Recognition and Chair Work has received a targeted setup-response polish: 22 English responses and Bokmal localizations now make the marker-to-task transition more concrete, reduce repeated "that sounds like/we can use two chairs" scripting, and keep explicit chair roles, consent, and first enactment steps. Estimated targeted response quality moved from roughly 8.0/10 to 8.4/10.
- Staying in Contact with Intense Affect has received a spot-check polish: 21 English responses and Bokmal localizations now reduce command-like grounding ("stay with me," "keep your," "uncurl," "lower the shoulders") and lead more directly with emotional contact before titration or safety structure. Estimated targeted response quality moved from roughly 8.4/10 to 8.7/10.
- Empathic Explorations has received a cross-tier spot-check polish: 22 English responses now include a clearer small next step of emotional contact, one Carlos marker was moved from historical cognition into a live present edge, and Bokmal localizations were aligned. Estimated targeted exploration quality moved from roughly 8.4/10 to 8.7/10.
- Marker Recognition and Chair Work has received a residual setup-response polish: 22 additional English responses and Bokmal localizations now use more case-specific marker naming, clearer consent, less generic task labeling, and sharper first-turn instructions while preserving the chair-work setup structure. Estimated targeted residual quality moved from roughly 8.4/10 to 8.7/10.
- Empathic Evocations has received a focused marker-leakage pass: 13 English items and Bokmal localizations now move bodily/sensory material out of the client prompt and into the therapist response, and one self-harm-adjacent Aisha response avoids "cut through" imagery. Estimated targeted evocation quality moved from roughly 8.5/10 to 8.7/10.
- Self-Disclosure has received a cross-tier brevity/boundary polish: 29 English responses and Bokmal localizations now answer more directly, reduce repeated "what is it like/I feel/I want" return formulae, and preserve boundaries around care, relationship details, attraction, competence, trauma, and safety. Estimated targeted response quality moved from roughly 8.6/10 to 8.8/10.
- Staying in Contact with Intense Affect has received another residual contact-first polish: 22 English responses and Bokmal localizations now reduce procedural "keep/stay/small/edge/room" phrasing and lead more directly with emotional accompaniment before titration, safety, or boundary structure. Estimated targeted response quality moved from roughly 8.7/10 to 8.8/10.
- Empathic Explorations has received a residual response-completion polish: 17 English responses and Bokmal localizations that were only reflective now add one gentle live-experience invitation, keeping the skill distinct from empathic understanding without drifting into conjecture or evocation. Estimated targeted response quality moved from roughly 8.7/10 to 8.8/10.
- Marker Recognition and Chair Work has received an occasional regression polish: 20 English setup responses and Bokmal localizations now reduce generic "that sounds like" openings, name the chair-work marker in more case-specific language, and give clearer first-turn lines for empty-chair, self-critical, and worry-split tasks. Estimated targeted setup quality moved from roughly 8.7/10 to 8.8/10.

The remaining gaps are more subtle:

- Some skill/tier pools are still too organized around the nine case schemas, so the benchmark's ordinary-life variety is underrepresented.
- Easy and moderate tiers sometimes carry more body imagery, shame schema, or emotional sophistication than Goldman beginner/intermediate examples.
- Therapist responses are broadly skill-pure, but intense-affect and chair-work responses necessarily repeat some procedural language; intense-affect responses could use more variety.
- Several benchmark archetypes can only be represented awkwardly with the current case set, especially older-adult rupture, child-in-army fear, religious/cultural mismatch, Holocaust-family legacy, AA/drinking recovery, pet attachment, and some ordinary non-schema life stress.

## Rating Scale

- Quality: Strong, Strong-Mixed, Mixed, Mixed-Low, Weak.
- Coverage: High, Medium-High, Medium, Medium-Low, Low.
- Priority: High means this should steer near-term rewrite passes.

## Skill And Difficulty Matrix

| Skill | Difficulty | Marker Quality | Benchmark Coverage | Response Quality | Priority | Main Gap |
| --- | --- | --- | --- | --- | --- | --- |
| Therapist Self-Awareness | Easy | Strong | High | Strong | Low | Recent pass broadened beyond rupture into hopefulness, advice pull, social/cultural adjustment, ordinary loneliness, and practical therapy uncertainty. |
| Therapist Self-Awareness | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass added dependency shame, long breakup grief, cultural humility, alcohol/exposure concern, faith/family values, and violent fantasy coverage. |
| Therapist Self-Awareness | Hard | Strong | High | Strong | Low | Strong coverage of suicidality, competence testing, flirtation, distrust, and sexist alcohol-minimizing defensiveness. Recent pass tightened responses around internal regulation and clean client-facing contact. |
| Empathic Understanding | Easy | Strong | Medium-High | Strong | Low | Recent polish simplified selected beginner responses toward basic reflection and reduced one overly direct core-pain marker. Remaining work is ordinary regression checking. |
| Empathic Understanding | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass added ordinary bills/money worry, friend disappointment, confused depression, and guide-me uncertainty. Further work is polish rather than repair. |
| Empathic Understanding | Hard | Strong | Medium-High | Strong | Low-Medium | Recent pass added substance-anxiety ambivalence, plain session uncertainty, and more ordinary relational loss while keeping hard-case defenses. |
| Empathic Affirmation and Validation | Easy | Strong | High | Strong | Low | Recent regression pass kept validation explicit while making the responses less formulaic and less dependent on "No wonder." Continue only light spot checks. |
| Empathic Affirmation and Validation | Moderate | Strong | Medium-High | Strong | Low | Good validation markers across trauma, politics, child-army fear, shame, and caregiver guilt. Recent pass improved response variety and Bokmal naturalness. Some benchmark romance/grief variants remain thin but not urgent. |
| Empathic Affirmation and Validation | Hard | Strong | High | Strong | Low | Good range: trauma shame, rage/fear, desperate longing, confused overwhelm, positive warmth. Recent pass sharpened moral-responsibility and trauma validations without excusing harmful behavior. |
| Exploratory Questions | Easy | Strong | Medium-High | Strong | Low-Medium | Recent pass reduced client-supplied body cues and tightened responses into one inward experiential question. AA/amends guilt remains absent because the fixed easy cases do not naturally carry recovery history. |
| Exploratory Questions | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass further reduced handed-over body cues and interpretive questions, while preserving relational ambiguity, shame, anger, blocked care, and caregiver-guilt markers. Remaining gap is breadth under fixed cases. |
| Exploratory Questions | Hard | Strong | Medium-High | Strong | Low-Medium | Recent pass reduced conjectural and body-process drift while preserving ambiguity, rupture risk, shame, dissociation, threat scanning, and hard-case defenses. Some case-schema gravity remains unavoidable. |
| Providing Treatment Rationale | Easy | Strong | High | Strong | Low | Excellent direct rationale markers tied to client skepticism, fear, goals, and safety. |
| Providing Treatment Rationale | Moderate | Strong | High | Strong | Low | Good skepticism/fear/numbing/practicality coverage. Shame-about-crying and positive-thinking variants could be added only as polish. |
| Providing Treatment Rationale | Hard | Strong | High | Strong | Low | Strong safety, self-harm, control, trauma, and anger-risk rationale markers. |
| Empathic Explorations | Easy | Strong | Medium-High | Strong | Low | Recent spot checks kept the markers simple while adding clearer one-step invitations after close reflections. Latest residual pass added missing exploratory invitations to reflective-only responses. |
| Empathic Explorations | Moderate | Strong | Medium-High | Strong | Low | Recent passes added flatter relational ambiguity, not-emotional/confused process, last-therapist distrust, ordinary uncertainty, and clearer invitations to stay with the live edge rather than only reflect it. Latest residual pass strengthened response skill identity without changing markers. |
| Empathic Explorations | Hard | Strong | Medium-High | Strong | Low | Recent passes added dazed/foggy process and direct therapist-attraction material, simplified one overly imagistic abandonment marker, pulled selected responses back from conjecture, and moved one Carlos item from historical cognition into a present exploration edge. |
| Empathic Evocations | Easy | Strong | Medium | Strong | Low | Marker style is now much better: flat, detached, ordinary. Recent regression passes flattened remaining body/image-heavy prompts while preserving enough emotional hook for trainee evocation. Benchmark archetype coverage is partial, intentionally leaving image-making room for trainees. |
| Empathic Evocations | Moderate | Strong | Medium-High | Strong | Low | Recent passes added betrayal, worthlessness, being used, dependency shame, macho anti-feeling, and hopeless relational shutdown while preserving relatively flat markers. Latest pass moved selected body-process detail from markers into therapist responses. |
| Empathic Evocations | Hard | Strong | Medium-High | Strong | Low | Good coverage of confidentiality threat, crisis-denial, confused distress, worthlessness, and locked-down anti-feeling archetypes. Latest pass improved trauma and self-harm-adjacent response tone while keeping hard markers guarded rather than already imagistic. |
| Empathic Conjectures | Easy | Strong | Medium-High | Strong | Low-Medium | Recent pass made markers more behavioral and less self-formulated across breakup grief, anger/defensiveness, social anxiety, alcohol use, and apology/shame material. |
| Empathic Conjectures | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass reduced over-naming in trauma avoidance, anger/masculinity defenses, caregiver shame, and attachment-maintenance markers. |
| Empathic Conjectures | Hard | Strong | Medium-High | Strong | Low | Good denial-after-suicidality, trapped relationship, macho anti-feeling, and hard defensiveness coverage. Recent pass flattened selected hard-case markers that were naming the hidden process too directly. |
| Staying in Contact with Intense Affect | Easy | Strong | Medium-High | Strong | Low | Recent spot checks removed several command-like grounding responses and made panic, shame, humiliation, and grief responses more contact-led. Latest residual pass reduced procedural "room/edge" phrasing. Ordinary death/loss examples remain constrained by the easy case set. |
| Staying in Contact with Intense Affect | Moderate | Strong | Medium-High | Strong | Low | Good breadth includes pet euthanasia, political rage, child guilt, grief, collapse, and positive love that pulls for withdrawal. Recent passes made selected responses less procedural and more emotionally receiving. |
| Staying in Contact with Intense Affect | Hard | Strong | High | Strong | Low | Strong coverage: erotic pressure, self-harm, sexual-offense guilt, homicidal fantasy, collective trauma, therapy-not-working rupture. Latest passes strengthened contact-first receiving before safety, boundary, or containment language and preserved explicit safety language where needed. |
| Self-Disclosure | Easy | Strong | High | Strong | Low | Strong therapist-transparency markers, including first-session uncertainty, care, judgment, and personal questions. Recent cross-tier polish reduced formulaic return questions. |
| Self-Disclosure | Moderate | Strong | Medium-High | Strong | Low | Good boredom/interest, discomfort, trauma competence, therapist impact, and care questions. Recent cross-tier polish improved brevity and boundary clarity. |
| Self-Disclosure | Hard | Strong | High | Strong | Low | Strong coverage of repeated lateness, attractiveness, pity, therapist experience, care, and boundaries. Recent passes made disclosures briefer, more boundaried, and less formulaic. |
| Marker Recognition and Chair Work | Easy | Strong | Medium-High | Strong | Low | Expanded to full matrix. Natural marker recognition now covers ordinary self-attack, self-interruption, unfinished business, blocked protest, and worry/catastrophizing without pre-labeling the chair task. Recent setup-response passes made consent, chair roles, and first turns more concrete while reducing scripted phrasing. |
| Marker Recognition and Chair Work | Moderate | Strong | High | Strong | Low | Expanded coverage of divorce self-blame, mother/father unfinished business, numbness, apology block, caregiver guilt, affair guilt, and goodbye grief. Latest regression pass made selected Jason, Laura, Carlos, and Nina setups more case-specific and less reliant on generic "that sounds like" marker labels. |
| Marker Recognition and Chair Work | Hard | Strong | High | Strong | Low | Expanded coverage of catastrophizing worry, betrayal rage, trauma shame, abusive self-blame, intergenerational violence, blocked anger, and sexual-boundary shame. Recent setup-response passes made selected hard-case setups more concrete and less scripted while preserving safety and collaboration. |
| Alliance Repair | Easy | Strong | High | Strong | Low | Expanded to full matrix with strong coverage of boredom, not-getting-it, competence, doing-therapy-wrong, previous therapy hospitalization, attention/clock ruptures, shame, and substance-use judgment. |
| Alliance Repair | Moderate | Strong | High | Strong | Low | Expanded coverage of childhood-topic avoidance, laughed-at rupture, age/status mismatch, boredom/tiredness, siding-with-other-person rupture, trauma pacing, substance-use judgment, and violence-language rupture. |
| Alliance Repair | Hard | Strong | High | Strong | Low | Expanded coverage of therapy-not-working, sexual-boundary concern, session-ending abandonment, distance, chair proximity, competence with trauma, foster-care pacing, and violence/trauma safety ruptures. |

## Branch Progress

Completed on the current content branch:

- Empathic Explorations, moderate and hard, including response regression polish.
- Exploratory Questions, moderate and hard.
- Empathic Understanding, moderate and hard.
- Therapist Self-Awareness, easy and moderate.
- Staying in Contact with Intense Affect response variation.
- Empathic Evocations, moderate and hard.
- Empathic Conjectures, easy and moderate.
- Marker Recognition and Chair Work expansion to 10 statements per case.
- Alliance Repair expansion to 10 statements per case.
- Empathic Affirmation and Validation, easy.
- Therapist Self-Awareness hard response polish.
- Empathic Explorations, easy.
- Exploratory Questions, easy.
- Exploratory Questions, moderate.
- Exploratory Questions, hard.
- Empathic Understanding, easy regression polish.
- Staying in Contact with Intense Affect, easy/moderate contact-over-grounding polish.
- Empathic Affirmation and Validation cross-tier response-variety and Bokmal naturalness polish.
- Empathic Evocations regression polish for marker flatness and safety-sensitive response tone.
- Empathic Conjectures hard marker-spoiler regression polish.
- Staying in Contact with Intense Affect moderate/hard contact-first regression polish.
- Self-Disclosure hard response polish.
- Empathic Explorations hard marker/response regression polish.
- Marker Recognition and Chair Work targeted setup-response polish.
- Staying in Contact with Intense Affect spot-check response polish.
- Empathic Explorations cross-tier response/marker spot-check polish.
- Marker Recognition and Chair Work residual setup-response polish.
- Empathic Evocations focused marker-leakage and safety-tone polish.
- Self-Disclosure cross-tier brevity, boundary, and Bokmal naturalness polish.
- Staying in Contact with Intense Affect residual contact-first response and Bokmal naturalness polish.
- Empathic Explorations residual response-completion and Bokmal naturalness polish.
- Marker Recognition and Chair Work occasional setup-response and Bokmal naturalness polish.
- Full-library score audit completed on 2026-06-16. No skill/difficulty set has a structural failure, but the previous all-strong ranking was too broad. After the latest validation, evocations, and understanding passes, the current highest-value targets are Marker Recognition and Chair Work hard, Alliance Repair hard/moderate, Empathic Explorations hard, and Empathic Understanding moderate.
- Empathic Affirmation and Validation hard/moderate has received a targeted response-variety and Bokmal naturalness pass. Hard markers were expanded from compressed one-line prompts into fuller high-risk validation markers; hard and moderate responses now preserve explicit legitimizing language without repeated four-word openings, and Bokmal no longer uses `det gir mening` in these tiers.
- Empathic Evocations moderate has received a marker-affordance pass. Laura, Carlos, and Nina prompts now add ordinary scene, guarded cognition, and relational pressure while leaving vivid imagery to the therapist response; matching Bokmal localizations were rewritten naturally.
- Empathic Evocations hard has received a marker-affordance pass. Aisha, David, and Marcus prompts now carry more crisis pressure, guarded cognition, defensive organization, and relational stakes without supplying the vivid image/metaphor in the client line; matching Bokmal localizations were rewritten naturally.
- Empathic Understanding hard has received a marker/reflection pass. Aisha, David, and Marcus prompts now carry fuller explicit emotional meaning while responses remain short, basic reflections without validation, conjecture, advice, questions, or evocation-heavy imagery; matching Bokmal localizations were rewritten naturally.
- Marker Recognition and Chair Work hard has received a setup-sequencing pass. Aisha, David, and Marcus responses now more consistently name the ordinary marker, ask permission, set up the correct chair task, and give a concrete first turn; one Aisha marker no longer pre-labels the chair task. Matching Bokmal localizations were rewritten for more natural permission and trauma pacing.
- Alliance Repair hard has received a response-opening and ownership pass. Aisha, David, and Marcus responses now start less formulaically, keep receiving/ownership before frame clarification, and use more natural Bokmal repair language in high-risk rupture material.

These should still be reviewed in normal regression passes, but the workflow should now follow the tier-level scores in `src/md/benchmark-contract-audit-2026-06-11.md` rather than treating every repaired skill as equal priority.

## Current Highest-Value Improvement Targets

1. Alliance Repair moderate.
   - Hard rupture repair is stronger now, but moderate repair openings and Norwegian localizations are still too patterned. Strengthen ownership and receiving language without losing the repair sequence.

2. Empathic Explorations hard.
   - Strong overall, but severe cases can still drift toward conjecture or intense-affect containment. Keep one small next-step exploration and reduce repeated Bokmal "la oss/kan vi" when encountered.

3. Empathic Understanding moderate.
   - Hard understanding is now stronger. Moderate understanding remains shorter and less varied than Goldman intermediate examples, so selected items can be broadened while staying basic-empathy pure.

4. Empathic Evocations easy.
   - Moderate and hard are now strong. Easy evocations remain intentionally flat but can use light ordinary-scene detail where the prompt gives too little edge for image-making.

5. Marker Recognition and Chair Work hard and Alliance Repair hard.
   - Both hard tiers are now strong after targeted sequencing/opening passes. Review only for regression, flagged items, high-risk pacing, or Bokmal tone.

Lower-priority regression areas:

- Staying in Contact with Intense Affect hard: high-risk contact-first spot checks only unless flagged.
- Empathic Affirmation and Validation, Self-Disclosure, Treatment Rationale, Therapist Self-Awareness, Exploratory Questions, and Empathic Conjectures: polish mainly when Supabase feedback flags an item or during dedicated Bokmal passes.

## Case-Set Constraints

The nine fixed cases are clinically coherent, but they limit benchmark coverage in predictable ways.

### Easy Cases

Sara, Michael, and Jason naturally cover breakup grief, anger/shame, and social anxiety. They do not naturally cover:

- cultural relocation/adjustment as a presenting problem;
- AA/recovery and alcohol-related amends;
- ordinary pet attachment as a central relationship;
- older-adult loneliness, empty nest, or widowhood;
- law-school/career competence examples outside the current case schemas.

These can be adapted, but repeated adaptation may feel grafted onto the cases.

### Moderate Cases

Laura, Carlos, and Nina cover trauma/numbness, anger/masculinity, caregiver guilt, divorce, and resentment well. They do not naturally cover:

- early romantic infatuation/obsessive dating ambiguity except through Nina or Laura in a somewhat forced way;
- child-in-army fear except through Nina, where it fits only if expanded into her family context;
- long affair guilt unless assigned to Laura or Carlos in a way that may compete with their core presentation;
- older adult therapist-age/status rupture;
- broad religious/cultural mismatch, except through Nina's church context or Carlos's cultural pride.

### Hard Cases

Aisha, David, and Marcus cover attachment panic, narcissistic shame, complex trauma, suicidality, sexual-boundary pressure, violence fantasies, and trauma avoidance well. They do not naturally cover:

- Holocaust-family legacy except as Marcus collective-trauma resonance, not family history;
- sexual-offense guilt without adding a major new backstory element, currently adapted through David;
- older-adult rupture and age/status mismatch;
- some ordinary "macho anti-feeling" material, because David and Marcus express it differently and Aisha does not fit it;
- simple confused/dazed process that is not already severe dissociation, shame, or trauma defense.

## Interpretation

The corpus is no longer broadly poor or generic. It is good deliberate-practice material with several world-class pockets, especially treatment rationale, self-disclosure, alliance repair, and the newly improved evocation/chair-work markers.

The main remaining route to "world class" is not making everything longer or more dramatic. It is broadening selected skill/tier pools so each skill trains the benchmark marker shape, not only each case's core schema. Future passes should therefore prioritize marker suitability over surface vividness and use the benchmark to add ordinary, awkward, and non-core-schema material where the cases can plausibly carry it.

# Current Content Quality Audit

Date: 2026-06-05; branch update through 2026-06-07

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

- Empathic Explorations moderate/hard have been revised toward flatter emotional ambiguity, distrust, direct therapist-attraction material, and less pre-formed imagery.
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
| Empathic Understanding | Easy | Strong | Medium-High | Strong | Low-Medium | Good simple reflection markers. Some are still more case-schema specific than benchmark everyday sadness/stress/readiness examples. |
| Empathic Understanding | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass added ordinary bills/money worry, friend disappointment, confused depression, and guide-me uncertainty. Further work is polish rather than repair. |
| Empathic Understanding | Hard | Strong | Medium-High | Strong | Low-Medium | Recent pass added substance-anxiety ambivalence, plain session uncertainty, and more ordinary relational loss while keeping hard-case defenses. |
| Empathic Affirmation and Validation | Easy | Strong | High | Strong | Low-Medium | Recent pass broadened beyond breakup shame/anger into public-composure grief, social anger, moral guilt, presentation anxiety, and positive-invitation anxiety. Continue only regression polish. |
| Empathic Affirmation and Validation | Moderate | Strong | Medium-High | Strong | Low-Medium | Good validation markers across trauma, politics, child-army fear, shame, and caregiver guilt. Some benchmark romance/grief variants remain thin. |
| Empathic Affirmation and Validation | Hard | Strong | High | Strong | Low | Good range: trauma shame, rage/fear, desperate longing, confused overwhelm, positive warmth. |
| Exploratory Questions | Easy | Strong-Mixed | Medium | Strong | Medium | Good live inward edges, but many markers already include body cues, reducing need for trainee exploration. AA/amends guilt remains absent. |
| Exploratory Questions | Moderate | Strong-Mixed | Medium | Strong | Medium | Recent pass reduced handed-over body cues and added relational ambiguity, blocked love, resentment, and confused distress. Remaining gap is breadth under fixed cases. |
| Exploratory Questions | Hard | Strong-Mixed | Medium | Strong | Medium | Recent pass made hard markers less pre-organized while preserving ambiguity and rupture risk. Some case-schema gravity remains unavoidable. |
| Providing Treatment Rationale | Easy | Strong | High | Strong | Low | Excellent direct rationale markers tied to client skepticism, fear, goals, and safety. |
| Providing Treatment Rationale | Moderate | Strong | High | Strong | Low | Good skepticism/fear/numbing/practicality coverage. Shame-about-crying and positive-thinking variants could be added only as polish. |
| Providing Treatment Rationale | Hard | Strong | High | Strong | Low | Strong safety, self-harm, control, trauma, and anger-risk rationale markers. |
| Empathic Explorations | Easy | Strong | Medium-High | Strong | Low-Medium | Recent pass reduced pre-supplied body imagery and conjectural responses, while preserving live sadness, anger/shame, guardedness, and uncertain positive invitation markers. |
| Empathic Explorations | Moderate | Strong-Mixed | Medium | Strong | Medium | Recent pass added flatter relational ambiguity, not-emotional/confused process, last-therapist distrust, and ordinary uncertainty. |
| Empathic Explorations | Hard | Strong-Mixed | Medium | Strong | Medium | Recent pass added dazed/foggy process and direct therapist-attraction material. Some hard-case items still border intense-affect because of case severity. |
| Empathic Evocations | Easy | Strong | Medium | Strong | Low-Medium | Marker style is now much better: flat, detached, ordinary. Benchmark archetype coverage is partial, but this is partly intentional to preserve trainee image-making. |
| Empathic Evocations | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass added betrayal, worthlessness, being used, dependency shame, macho anti-feeling, and hopeless relational shutdown while preserving relatively flat markers. |
| Empathic Evocations | Hard | Strong | Medium-High | Strong | Low-Medium | Recent pass added confidentiality threat, crisis-denial, confused distress, worthlessness, and locked-down anti-feeling archetypes. Remaining work is regression polish to prevent client-supplied imagery from creeping back in. |
| Empathic Conjectures | Easy | Strong | Medium-High | Strong | Low-Medium | Recent pass made markers more behavioral and less self-formulated across breakup grief, anger/defensiveness, social anxiety, alcohol use, and apology/shame material. |
| Empathic Conjectures | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass reduced over-naming in trauma avoidance, anger/masculinity defenses, caregiver shame, and attachment-maintenance markers. |
| Empathic Conjectures | Hard | Strong-Mixed | Medium-High | Strong | Low-Medium | Good denial-after-suicidality, trapped relationship, macho anti-feeling, and hard defensiveness coverage. |
| Staying in Contact with Intense Affect | Easy | Strong-Mixed | Medium | Strong-Mixed | Low-Medium | Recent response pass reduced scripted grounding language. Easy tier still runs somewhat intense compared with Goldman beginner examples. |
| Staying in Contact with Intense Affect | Moderate | Strong | Medium-High | Strong-Mixed | Low-Medium | Good breadth includes pet euthanasia, political rage, child guilt, grief, and collapse; responses now vary contact/containment language more naturally. |
| Staying in Contact with Intense Affect | Hard | Strong | High | Strong-Mixed | Low-Medium | Strong coverage: erotic pressure, self-harm, sexual-offense guilt, homicidal fantasy, collective trauma, therapy-not-working rupture. Safety wording remains explicit where needed. |
| Self-Disclosure | Easy | Strong | High | Strong | Low | Strong therapist-transparency markers, including first-session uncertainty, care, judgment, and personal questions. |
| Self-Disclosure | Moderate | Strong | Medium-High | Strong | Low | Good boredom/interest, discomfort, trauma competence, therapist impact, and care questions. Pet-loss grief is absent but not essential. |
| Self-Disclosure | Hard | Strong | High | Strong-Mixed | Low | Now covers repeated lateness, attractiveness, pity, therapist experience, care, and boundaries. Some responses overuse "I want to..." and return-to-client phrasing. |
| Marker Recognition and Chair Work | Easy | Strong | Medium-High | Strong-Mixed | Low-Medium | Expanded to full matrix. Natural marker recognition now covers ordinary self-attack, self-interruption, unfinished business, blocked protest, and worry/catastrophizing without pre-labeling the chair task. |
| Marker Recognition and Chair Work | Moderate | Strong | High | Strong-Mixed | Low-Medium | Expanded coverage of divorce self-blame, mother/father unfinished business, numbness, apology block, caregiver guilt, affair guilt, and goodbye grief. Procedural response repetition is expected. |
| Marker Recognition and Chair Work | Hard | Strong | High | Strong-Mixed | Low-Medium | Expanded coverage of catastrophizing worry, betrayal rage, trauma shame, abusive self-blame, intergenerational violence, blocked anger, and sexual-boundary shame. Procedural response repetition is expected. |
| Alliance Repair | Easy | Strong | High | Strong | Low | Expanded to full matrix with strong coverage of boredom, not-getting-it, competence, doing-therapy-wrong, previous therapy hospitalization, attention/clock ruptures, shame, and substance-use judgment. |
| Alliance Repair | Moderate | Strong | High | Strong | Low | Expanded coverage of childhood-topic avoidance, laughed-at rupture, age/status mismatch, boredom/tiredness, siding-with-other-person rupture, trauma pacing, substance-use judgment, and violence-language rupture. |
| Alliance Repair | Hard | Strong | High | Strong | Low | Expanded coverage of therapy-not-working, sexual-boundary concern, session-ending abandonment, distance, chair proximity, competence with trauma, foster-care pacing, and violence/trauma safety ruptures. |

## Branch Progress

Completed on the current content branch:

- Empathic Explorations, moderate and hard.
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

These should still be reviewed in normal regression passes, but they are no longer the highest-value repair targets.

## Current Highest-Value Improvement Targets

1. Staying in Contact with Intense Affect remaining polish.
   - Keep as a regression target rather than the next main repair area.
   - Future passes can add more positive loving affect and ordinary death/loss examples if the fixed cases can carry them naturally.

2. Empathic Evocations regression polish.
   - Keep checking that client statements remain flat, detached, or over-cognitive rather than already imagistic.
   - Future evocation changes should be small and benchmark-driven, not a broad rewrite.

3. Empathic Conjectures hard regression polish.
   - Hard tier is still strong, but future passes should keep checking that high-risk or defensive markers do not become too interpretive before the trainee responds.

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

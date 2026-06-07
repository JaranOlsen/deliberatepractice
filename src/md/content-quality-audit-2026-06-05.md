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
| Therapist Self-Awareness | Easy | Strong-Mixed | Medium-High | Strong-Mixed | Medium | Good therapist-activating material now includes dog/dream/therapy uncertainty, but still leans toward direct rupture and shame rather than ordinary adjustment/hope. |
| Therapist Self-Awareness | Moderate | Strong-Mixed | Medium | Strong-Mixed | Medium | Covers substance, religion/culture, and violence fantasy, but ordinary shame/dependency and long breakup grief are weaker. |
| Therapist Self-Awareness | Hard | Strong | High | Strong-Mixed | Low | Strong coverage of suicidality, competence testing, flirtation, distrust, and sexist alcohol-minimizing defensiveness; responses should remain internally focused. |
| Empathic Understanding | Easy | Strong | Medium-High | Strong | Low-Medium | Good simple reflection markers. Some are still more case-schema specific than benchmark everyday sadness/stress/readiness examples. |
| Empathic Understanding | Moderate | Strong | Medium-High | Strong | Low-Medium | Recent pass added ordinary bills/money worry, friend disappointment, confused depression, and guide-me uncertainty. Further work is polish rather than repair. |
| Empathic Understanding | Hard | Strong | Medium-High | Strong | Low-Medium | Recent pass added substance-anxiety ambivalence, plain session uncertainty, and more ordinary relational loss while keeping hard-case defenses. |
| Empathic Affirmation and Validation | Easy | Strong-Mixed | Medium-High | Strong | Medium | Now includes accident guilt and presentation anxiety, but still over-centers shame and breakup/anger schemas. |
| Empathic Affirmation and Validation | Moderate | Strong | Medium-High | Strong | Low-Medium | Good validation markers across trauma, politics, child-army fear, shame, and caregiver guilt. Some benchmark romance/grief variants remain thin. |
| Empathic Affirmation and Validation | Hard | Strong | High | Strong | Low | Good range: trauma shame, rage/fear, desperate longing, confused overwhelm, positive warmth. |
| Exploratory Questions | Easy | Strong-Mixed | Medium | Strong | Medium | Good live inward edges, but many markers already include body cues, reducing need for trainee exploration. AA/amends guilt remains absent. |
| Exploratory Questions | Moderate | Strong-Mixed | Medium | Strong | Medium | Recent pass reduced handed-over body cues and added relational ambiguity, blocked love, resentment, and confused distress. Remaining gap is breadth under fixed cases. |
| Exploratory Questions | Hard | Strong-Mixed | Medium | Strong | Medium | Recent pass made hard markers less pre-organized while preserving ambiguity and rupture risk. Some case-schema gravity remains unavoidable. |
| Providing Treatment Rationale | Easy | Strong | High | Strong | Low | Excellent direct rationale markers tied to client skepticism, fear, goals, and safety. |
| Providing Treatment Rationale | Moderate | Strong | High | Strong | Low | Good skepticism/fear/numbing/practicality coverage. Shame-about-crying and positive-thinking variants could be added only as polish. |
| Providing Treatment Rationale | Hard | Strong | High | Strong | Low | Strong safety, self-harm, control, trauma, and anger-risk rationale markers. |
| Empathic Explorations | Easy | Strong-Mixed | Medium | Strong | Medium | Good live edges; some markers are already strongly embodied/evocative. Uncertain positive excitement/dating ambiguity remains thin. |
| Empathic Explorations | Moderate | Strong-Mixed | Medium | Strong | Medium | Recent pass added flatter relational ambiguity, not-emotional/confused process, last-therapist distrust, and ordinary uncertainty. |
| Empathic Explorations | Hard | Strong-Mixed | Medium | Strong | Medium | Recent pass added dazed/foggy process and direct therapist-attraction material. Some hard-case items still border intense-affect because of case severity. |
| Empathic Evocations | Easy | Strong | Medium | Strong | Low-Medium | Marker style is now much better: flat, detached, ordinary. Benchmark archetype coverage is partial, but this is partly intentional to preserve trainee image-making. |
| Empathic Evocations | Moderate | Strong-Mixed | Medium | Strong | Medium | Good flatter style overall; still light on obsessive love, worthlessness, betrayal, and hopeless relational shutdown archetypes. |
| Empathic Evocations | Hard | Strong-Mixed | Medium | Strong | Medium | Good guarded/flat hard markers. Could add confidentiality threat and a cleaner macho anti-feeling marker. |
| Empathic Conjectures | Easy | Strong-Mixed | Medium | Strong | Medium | Good hints of hidden hurt/fear. Some markers state the underlying process too clearly, reducing conjecture work. |
| Empathic Conjectures | Moderate | Strong | Medium-High | Strong | Low-Medium | Strong case-specific conjecture markers; could still add clearer obsessive love and blocked-love/betrayal variants. |
| Empathic Conjectures | Hard | Strong-Mixed | Medium-High | Strong | Low-Medium | Good denial-after-suicidality, trapped relationship, macho anti-feeling, and hard defensiveness coverage. |
| Staying in Contact with Intense Affect | Easy | Strong-Mixed | Medium | Mixed-Strong | Medium | Strong affect markers but often very high intensity for "easy"; benchmark's positive loving affect and ordinary death/loss are less prominent. |
| Staying in Contact with Intense Affect | Moderate | Strong | Medium-High | Mixed-Strong | Medium | Good breadth now includes pet euthanasia, political rage, child guilt, grief, and collapse; response wording overuses "stay with" and "let the." |
| Staying in Contact with Intense Affect | Hard | Strong | High | Mixed-Strong | Medium | Strong coverage: erotic pressure, self-harm, sexual-offense guilt, homicidal fantasy, collective trauma, therapy-not-working rupture. Response variety remains the main issue. |
| Self-Disclosure | Easy | Strong | High | Strong | Low | Strong therapist-transparency markers, including first-session uncertainty, care, judgment, and personal questions. |
| Self-Disclosure | Moderate | Strong | Medium-High | Strong | Low | Good boredom/interest, discomfort, trauma competence, therapist impact, and care questions. Pet-loss grief is absent but not essential. |
| Self-Disclosure | Hard | Strong | High | Strong-Mixed | Low | Now covers repeated lateness, attractiveness, pity, therapist experience, care, and boundaries. Some responses overuse "I want to..." and return-to-client phrasing. |
| Marker Recognition and Chair Work | Easy | Strong-Mixed | Medium | Strong-Mixed | Medium | Natural marker recognition improved. Still limited by only 9 items and missing ordinary fat/ugly, law-school, and parent-weight examples. |
| Marker Recognition and Chair Work | Moderate | Strong | Medium-High | Strong-Mixed | Low-Medium | Good coverage of divorce self-blame, mother unfinished business, numbness, father discipline, apology block, caregiver guilt. Affair guilt/goodbye grief remain thin. |
| Marker Recognition and Chair Work | Hard | Strong | Medium-High | Strong-Mixed | Low-Medium | Stronger now: catastrophizing worry, betrayal rage, trauma shame, abusive self-blame, intergenerational violence, blocked anger. Procedural response repetition is expected. |
| Alliance Repair | Easy | Strong | High | Strong | Low | Strong coverage of boredom, not-getting-it, competence, doing-therapy-wrong, previous therapy hospitalization, and clock/attention ruptures. |
| Alliance Repair | Moderate | Strong | High | Strong | Low | Strong coverage of childhood-topic avoidance, laughed-at rupture, age/status mismatch, boredom/tiredness, and siding-with-other-person rupture. |
| Alliance Repair | Hard | Strong | High | Strong | Low | Strong coverage of therapy-not-working, sexual-boundary concern, session-ending abandonment, distance, chair proximity, and competence with trauma. |

## Branch Progress

Completed on the current content branch:

- Empathic Explorations, moderate and hard.
- Exploratory Questions, moderate and hard.
- Empathic Understanding, moderate and hard.

These should still be reviewed in normal regression passes, but they are no longer the highest-value repair targets.

## Current Highest-Value Improvement Targets

1. Therapist Self-Awareness, easy and moderate.
   - The current material is stronger than before, but still leans toward therapist-directed rupture.
   - Add more ordinary therapist-internal activation: hopefulness, positive affection, cultural adjustment, dependency shame, and grief that pulls for rescue.

2. Staying in Contact with Intense Affect response variation.
   - Markers are strong; suggested responses are the limitation.
   - Reduce repeated "stay with" / "let the" phrasing while preserving grounding, pacing, and contact.

3. Empathic Evocations, moderate and hard.
   - Marker shape is now much better, but benchmark breadth is still partial.
   - Add cleaner obsessive love, worthlessness, betrayal, hopeless shutdown, confidentiality threat, and macho anti-feeling archetypes where they fit the cases.

4. Empathic Conjectures, easy and moderate.
   - Good hidden-process cues, but some markers still state the underlying process too directly.
   - Make a small number of cues more indirect so the trainee has room to offer the conjecture.

5. Empathic Affirmation and Validation, easy.
   - Quality is strong enough for production, but benchmark breadth is narrower than the moderate/hard tiers.
   - Add more ordinary beginner-level legitimacy markers without overloading them with shame schema.

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

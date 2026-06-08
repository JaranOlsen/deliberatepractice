# Gold-Standard Content Comparison

Date: 2026-06-03; branch update through 2026-06-08

## Purpose

This audit compares the current case-matrix content with the Goldman benchmark material generated into `src/data/benchmarkBank.js` from `src/md/EFT_Exercises_Extracted.md`.

The comparison focuses on client statements as skill markers. Suggested therapist responses were considered only where statement drift suggests an instruction or response-standard problem.

## Method

- Mapped app difficulty to benchmark level: easy = beginner, moderate = intermediate, hard = advanced.
- Compared all 175 benchmark statements against same-skill, same-tier app statements.
- Used simple token similarity as a triage tool, then manually reviewed the clinically meaningful pattern families.
- Treated the benchmark examples as marker archetypes, not content to copy.

Similarity scores are not quality scores. A low score can still mean a good case-specific marker, but it usually means the benchmark archetype is not directly represented.

## Executive Summary

The current content is often good as case-specific EFT role-play material: the case voices are distinct, the difficulty tiers usually feel different, and many therapist responses are skill-pure. The main gap is not general quality; it is benchmark coverage and marker calibration.

The app leans heavily toward each case's core schema, often with vivid body sensations and metaphors. Goldman uses a wider range of ordinary, awkward, relational, cultural, positive, high-risk, and task-specific markers. This means several current skills train a narrower version of the target skill than the gold standard.

Highest-priority divergences at the time of the original audit:

1. Empathic Evocations: current statements often already contain the image/metaphor the trainee should be practicing.
2. Marker Recognition and Chair Work: current statements cover the task types but often pre-label the marker as a "voice" or "part," reducing recognition practice.
3. Alliance Repair: statements are clinically usable, but the benchmark's sexual-boundary and competence/age/status rupture examples are underrepresented.
4. Therapist Self-Awareness: current markers overrepresent therapist-directed strain and underrepresent positive affection, cultural/religious mismatch, dreams, substance use, sexual boundary pressure, and therapist internal discomfort from ordinary material.
5. Basic empathy/validation/exploration skills: current markers are often more vivid, embodied, and case-formulated than the simpler benchmark examples, so they can become too advanced or too evocative for the intended skill.

Best-aligned areas:

- Providing Treatment Rationale
- Self-Disclosure
- Empathic Conjectures

Branch update: Empathic Evocations, Marker Recognition and Chair Work, Alliance Repair, easy-tier Empathic Affirmation and Validation, all-tier Exploratory Questions, all-tier Empathic Explorations, easy-tier Empathic Understanding regression polish, easy/moderate Staying in Contact with Intense Affect contact-first polish, and hard-tier Therapist Self-Awareness responses have all received repair or polish passes since the original audit. Chair-work, alliance repair, easy validation, exploratory questions, explorations, easy understanding, staying-in-contact, and hard self-awareness responses should be treated as regression-polish areas rather than top missing-coverage areas.

Instruction-level risks:

- Empathic Affirmation and Validation should be broadened beyond shame/self-criticism. Goldman validation markers include grief, fear, nervousness, guilt, anger, positive warmth, and overwhelming mixed affect.
- Marker Recognition and Chair Work instructions should explicitly say that client statements should sound natural and should not announce the task marker too cleanly.
- Therapist Self-Awareness instructions should name the broader range of client material that can activate the therapist, including positive, cultural, erotic, substance, violence, suicide, and competence-testing material.
- Empathic Evocations instructions are now directionally right; the content, not the instruction, is the main mismatch on this branch.

## Skill and Difficulty Overview

Ratings:

- Strong: generally usable markers for the skill.
- Mixed: many usable markers, but with systematic drift.
- Weak: the marker class does not reliably train the intended skill.
- High/Medium/Low coverage: how well the current corpus includes benchmark-like archetypes at that tier.

| Skill | Tier | Current Statement Quality | Benchmark Coverage | Main Divergence |
| --- | --- | --- | --- | --- |
| Therapist Self-Awareness | Easy/beginner | Mixed | Low | Good rupture/avoidance triggers, but misses positive warmth, dream material, cultural adjustment, and hopeful first-session material. |
| Therapist Self-Awareness | Moderate/intermediate | Mixed | Low | Strong guarded/challenging case material, but missing religion/culture mismatch, direct substance-in-session disclosure, ordinary breakup grief, and promotion/violence-triggered therapist reactions. |
| Therapist Self-Awareness | Hard/advanced | Strong | High | Now covers suicidality/self-harm, competence testing, erotic/transference pressure, distrust, trauma shame, and sexist/substance-minimizing presentation; recent response pass tightened internal regulation and client-facing steadiness. |
| Empathic Understanding | Easy/beginner | Strong | Medium-High | Recent polish simplified selected Sara, Michael, and Jason responses toward concise basic reflection and softened one overly direct core-pain marker. |
| Empathic Understanding | Moderate/intermediate | Mixed | Low-Medium | Case voice is strong, but markers are often more image-rich than basic understanding practice needs. Missing several everyday worry/anger examples. |
| Empathic Understanding | Hard/advanced | Mixed | Medium | Has shame, anxiety, exposure, and relational pain, but less coverage of substance-anxiety and "guide me" confusion markers. |
| Empathic Affirmation and Validation | Easy/beginner | Strong | High | Recent pass now covers accident guilt, public-composure grief, presentation anxiety, broad social anger, and positive-invitation anxiety while preserving case voice. Empty-nest grief remains unsuitable for the fixed easy cases. |
| Empathic Affirmation and Validation | Moderate/intermediate | Mixed | Low-Medium | Good trauma/numbing/guilt material, but missing benchmark variety around early romantic attachment, house/memory grief, child deployment fear, and depression/withdrawal. |
| Empathic Affirmation and Validation | Hard/advanced | Strong | Medium-High | Closest validation tier; covers trauma shame, rage/fear, desperate longing, and positive warmth more than other tiers. |
| Exploratory Questions | Easy/beginner | Strong | Medium-High | Recent pass reduced body/metaphor-rich markers and kept responses to one inward question. AA amends/disappointment remains unsuitable for the fixed easy cases unless a recovery-history variant is intentionally added. |
| Exploratory Questions | Moderate/intermediate | Strong | Medium-High | Recent pass reduced remaining body-cue and interpretive-question drift. Fixed cases now carry workable analogues for blocked care, father-rule resentment, relational shutdown, shame, and caregiver guilt, though obsessive-love coverage remains limited by the case set. |
| Exploratory Questions | Hard/advanced | Strong | Medium-High | Recent pass reduced body-process and conjectural drift while preserving advanced shame, confusion, defensive control, rupture, and threat-scanning analogues. Case-schema gravity remains unavoidable but now supports rather than blurs the skill. |
| Providing Treatment Rationale | Easy/beginner | Strong | High | Very close: many direct questions about therapy, feelings, plans, getting stuck, and history. |
| Providing Treatment Rationale | Moderate/intermediate | Strong | High-Medium | Good skepticism/fear/numbing coverage; add more shame-about-crying and "positive thinking" archetypes if polishing. |
| Providing Treatment Rationale | Hard/advanced | Strong | Medium-High | Good safety, overwhelm, self-harm, control, and practical skepticism markers; still could add more "emotions are the problem" and anger-control variants. |
| Empathic Explorations | Easy/beginner | Strong | Medium-High | Recent pass simplified markers toward ordinary scene-plus-affect material and reduced body/metaphor language, with better coverage of lostness, anger/shame, uncertainty, and positive invitation anxiety. |
| Empathic Explorations | Moderate/intermediate | Strong | Medium-High | Recent passes added relational ambiguity, therapist-trust/distrust, not-emotional/confused process, and ordinary uncertainty markers; selected responses were pulled back from conjecture/evocation drift. |
| Empathic Explorations | Hard/advanced | Strong-Mixed | Medium-High | Now covers dazed/foggy process, attraction to therapist, guarded hospitalization fear, comparison-with-therapist shame, and hard-case mixed affect. Aisha and Marcus still need occasional regression checks because their case severity can pull toward intense-affect work. |
| Empathic Evocations | Easy/beginner | Weak | Low-Medium | Statement themes overlap somewhat, but many current markers already provide evocative image/body language. The trainee is not left enough room to evoke. |
| Empathic Evocations | Moderate/intermediate | Weak | Low | Same issue, amplified: current markers often contain the metaphor already. Missing flatter obsessive, worthless, betrayed, and hopeless markers. |
| Empathic Evocations | Hard/advanced | Weak | Low | Hard statements are vivid and relationally charged, not flat/guarded enough. Missing benchmark-like denial after suicidality, macho feeling-block, and confidentiality threat. |
| Empathic Conjectures | Easy/beginner | Strong-Mixed | Medium | Good hints of unspoken shame/fear beneath defense; add more alcohol/blame, disrespect anger, and AA guilt variants. |
| Empathic Conjectures | Moderate/intermediate | Strong | Medium-High | One of the better aligned tiers; still needs clearer obsessive love and blocked-love/betrayal variants. |
| Empathic Conjectures | Hard/advanced | Strong-Mixed | Medium | Has defensive/underlying-feeling patterns, but needs denial-after-suicidality, trapped relationship, and macho anti-feeling markers. |
| Staying in Contact with Intense Affect | Easy/beginner | Strong | Medium-High | Recent pass added warm positive affect and reduced procedural grounding drift. Ordinary death/loss and abuse-anger variants remain limited by the easy case set. |
| Staying in Contact with Intense Affect | Moderate/intermediate | Strong | Medium-High | Now covers pet euthanasia guilt, political rage, child guilt, grief, collapse, and intense positive love; retired-therapist attachment and explicit suicidal divorce remain less natural with the fixed moderate cases. |
| Staying in Contact with Intense Affect | Hard/advanced | Strong | Low-Medium | Good self-harm/abandonment intensity, but missing erotic/transference pressure, Holocaust/collective trauma, sexual-offense guilt, homicidal fantasy, and therapy-not-working anger. |
| Self-Disclosure | Easy/beginner | Strong | High | Strong coverage of therapist transparency, care, relationship, and judgment questions. Add a simpler first-session "where do I start?" marker if desired. |
| Self-Disclosure | Moderate/intermediate | Strong | High-Medium | Good boredom/interest, discomfort, trauma competence, and therapist-impact questions. Coverage is close. |
| Self-Disclosure | Hard/advanced | Strong | Medium-High | Strong competence/care/intensity material; missing repeated lateness, attractiveness question, and pity-in-the-therapist's-eyes markers. |
| Marker Recognition and Chair Work | Easy/beginner | Strong | Medium-High | Full matrix now covers natural self-critical, self-interruptive, unfinished-business, blocked protest, and worry/catastrophizing markers without announcing the chair task too cleanly. |
| Marker Recognition and Chair Work | Moderate/intermediate | Strong | High | Full matrix now covers natural guilt, numbness, bereavement/goodbye, divorce self-blame, caregiver guilt, apology blocks, and unfinished family business. |
| Marker Recognition and Chair Work | Hard/advanced | Strong | High | Full matrix now covers intergenerational trauma, abusive-spouse self-blame, betrayal rage, catastrophizing worry, blocked anger, and sexual-boundary shame variants. |
| Alliance Repair | Easy/beginner | Strong | High | Full matrix now includes student/experience concern, previous therapist hospitalization concern, "am I doing therapy wrong?" guilt, boredom, disinterest, attention, and shame ruptures. |
| Alliance Repair | Moderate/intermediate | Strong | High | Full matrix now includes age/status mismatch, bored/tired therapist concern, laughed-at rupture, trauma pacing, substance-use judgment, and siding-with-other-person rupture. |
| Alliance Repair | Hard/advanced | Strong | High | Full matrix now includes sexual-boundary concern, therapy-is-not-working/wasting-time rupture, session-ending abandonment, trauma pacing, proximity/safety, and violence/trauma safety ruptures. |

## Benchmark Example Coverage Map

This section paraphrases benchmark example families. "Covered" means the current content has a recognizably similar marker in the same skill/tier. "Partial" means the broad clinical family is present but not the specific marker shape. "Missing" means the benchmark archetype is not meaningfully represented.

### 1. Therapist Self-Awareness

- Easy: partial for nervous first-session therapy concern and hopeful return to therapy; missing positive/loving attachment to a pet, cultural adjustment concern, and therapist-in-dream discomfort.
- Moderate: partial for substance disclosure and anger/risk material; missing religion/culture match, ordinary shame/dependency, long breakup grief, and job-promotion violence fantasy.
- Hard: covered for suicidality/self-harm, competence skepticism, distrust of therapy, sexual attraction/flirtation, trauma shame, and sexist alcohol-minimizing defensiveness. Recent response polish reduced procedural drift while preserving safety and boundaries.

### 2. Empathic Understanding

- Easy: partial for grief/loneliness and self-worth pain; missing simple everyday stress and readiness/optimism markers.
- Moderate: partial for worry, anger, and confused depression; missing money/bills worry, friend disappointment, and mother-related anger in a simple reflection format.
- Hard: partial for father-linked worthlessness, shame, and anxiety; missing substance-anxiety ambivalence and plain "guide me" confusion.

### 3. Empathic Affirmation and Validation

- Easy: now covered for sadness, nervousness, fear, anger, accident guilt, public exposure, public-composure grief, and positive social-invitation anxiety. Empty-nest/widow loneliness remains unsuitable for the fixed easy cases.
- Moderate: partial for shame, fear, depression, and conflicted love; missing house/memory grief, child-in-army fear, and fast romantic attachment concern.
- Hard: mostly covered in broad families: trauma shame, rage/fear, desperate longing, mixed confusion, and warm positive attachment. This tier is comparatively close.

### 4. Exploratory Questions

- Easy: partial for shame/smallness, anger, hurt, and overwhelm; missing AA/amends guilt.
- Moderate: partial for worthlessness and shutdown; missing obsessive love, betrayal with blocked love, father resentment, and churning need-for-acknowledgment.
- Hard: partial for grief, confusion, macho anti-feeling, and shame; current examples are often more case-formulated than benchmark examples.

### 5. Providing Treatment Rationale

- Easy: covered for approach, feelings-help, therapy process, what-to-talk-about, and history questions.
- Moderate: covered or partial for skepticism about feelings, fear of feeling worse, irrational-feelings concern, and crying shame. Positive-thinking/social-comparison is weaker.
- Hard: covered or partial for fear of emotions, getting lost in pain, trauma safety, self-control/weakness, and anger safety.

### 6. Empathic Explorations

- Easy: partial for lostness, anger, fear/guilt, and grief; missing uncertain positive excitement/dating ambiguity.
- Moderate: covered or partial for shame, discomfort, distrust, detached/confused feeling, and natural relational ambiguity. Remaining gaps are mostly fixed-case breadth rather than marker quality.
- Hard: covered or partial for dazed/foggy state, shame in comparison with therapist, direct therapist-attraction, guarded hospitalization fear, and confusion. Some Aisha/Marcus items remain clinically intense, so future checks should guard the exploration/intense-affect boundary.

### 7. Empathic Evocations

- Easy: broad emotions are partially present, but marker style is weak because app statements are already vivid.
- Moderate: broad themes are partial, but obsessive/worthless/betrayal/hopeless markers should be flatter.
- Hard: missing or weak for denial after suicidality, confused/detached, macho anti-feeling, rotten shame, and confidentiality threat in the proper flat/guarded style.

### 8. Empathic Conjectures

- Easy: partial for shame, anger, blame, and disappointment/guilt; add stronger alcohol/blame and AA-disappointment variants.
- Moderate: partial-to-covered for obsessive love, worthlessness, betrayal, and push-pull around closeness.
- Hard: partial for hopeless shutdown, trapped relationship, denial, confusion, and macho anti-feeling; denial-after-suicidality is weak.

### 9. Staying in Contact with Intense Affect

- Easy: now covered or partial for depression, guilt, grief, anger, and warm/loving positive intensity. Ordinary death/loss and abuse-anger variants remain partly constrained by the easy case set.
- Moderate: now covered for pet euthanasia guilt, political rage, caregiver guilt, grief, collapse, and intense positive love. Retired-therapist attachment and explicit suicidal divorce remain less natural with the fixed moderate cases.
- Hard: partial for boundary/abandonment intensity; missing flirty admiration, Holocaust/collective trauma, sexual-offense guilt, explicit homicidal fantasy, and trainee-competence rupture under intense affect.

### 10. Self-Disclosure

- Easy: mostly covered for direct therapist questions, faith/values concern, "do you think I am crazy?", and vulnerable loneliness. First-session "where do I start?" is weaker.
- Moderate: covered or partial for yawning/boredom, discomfort with therapist, crying grief, and therapist boredom/interest concern.
- Hard: partial for lateness, attractiveness/appearance concern, pity concern, and therapist experience concern; attractiveness and pity should be made more explicit.

### 11. Marker Recognition and Chair Work

- Easy: now covered for natural self-criticism, self-interruption, unfinished business, blocked protest, and worry/catastrophizing markers.
- Moderate: now covered for grief/goodbye, divorce self-blame, global badness, affair guilt, numbness, apology blocks, and family unfinished business.
- Hard: now covered for intergenerational trauma, abusive-spouse self-blame, cheating/betrayal rage, catastrophizing worry split, blocked anger toward father, and sexual-boundary shame.

### 12. Alliance Repair

- Easy: now covered for boredom, feeling pushed, therapist not getting it, previous-therapist hospitalization concern, student/experience concern, "am I doing therapy wrong?" guilt, clock/attention ruptures, and shame/substance-use judgment.
- Moderate: now covered for painful-topic avoidance, therapist misattunement, age/status mismatch, disinterest/tiredness concern, direct laughed-at rupture, substance-use judgment, and violence-language rupture.
- Hard: now covered for therapy-not-working/wasting-time, sexual-boundary concern after therapist questions about sexual relationships, session-ending abandonment, trauma pacing, proximity/safety, and competence-with-trauma ruptures.

## Recommended Improvement Order

1. Continue regression-polishing Empathic Evocations so client markers stay flatter, more cognitive, more guarded, or more symptom/situation-focused, leaving vivid imagery to the trainee.
2. Continue regression-polishing Therapist Self-Awareness. Hard response polish is complete on this branch; future work should focus only on natural additional trigger breadth where the fixed cases can carry it.
3. Continue regression-polishing early-tier Empathic Understanding markers and responses only where they drift into conjecture, core-pain formulation, or evocative language. Easy validation, exploratory questions across tiers, and easy exploration have had benchmark-breadth passes and now mainly need regression checks.
4. Keep Staying in Contact as a regression-polish area: preserve contact-first responses and avoid letting it become a grounding-script exercise.
5. Polish already-close skills last: Treatment Rationale, Self-Disclosure, Empathic Conjectures, Marker Recognition and Chair Work, and Alliance Repair. These need targeted regression and response-variety checks rather than broad rewrites.

## Notes for Future Content Passes

- Preserve case voice, but do not let every marker expose the case's core pain too directly.
- Use benchmark examples to diversify marker families, not to copy surface scenarios.
- Watch for overuse of embodied/metaphorical client language in skills where the trainee should supply the reflection, question, exploration, evocation, or conjecture.
- For Norwegian localization, wait until English marker shape is stable, then localize natural Bokmal rather than preserving English therapy phrasing literally.

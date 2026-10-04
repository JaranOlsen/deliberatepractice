# Mastery practice and library expansion plan

4 October 2026. Planned against local commit `63c63cb` and content revision `2026-10-04-v3`.

This incorporates the user's mixed-skill exercise and preference to retain the existing cases' fixed levels. It supersedes the implementation sequence in [the expansion review](library-expansion-review-2026-10-04.md). It is a plan; no exercise code, content banks or database records are changed.

## Product decisions

- Retain the nine existing cases at their current Easy, Moderate or Hard level. Preserve their identifiers and historical ratings.
- Add three new adult cases with Easy, Moderate and Hard exercise versions. The person, life context and history stay consistent across versions; task ambiguity, emotional access, mixed meanings and response demands change.
- Keep the same three levels throughout the app. For a fixed-level case, show its level. For a case with variants, show one compact level selector. Do not present separate catalogs for these two kinds of case.
- Offer two exercise types: **Single skill** and **Mastery practice**. Practice format remains a separate existing choice: individual or group, including a shared device. Mastery is an exercise type, not a fourth practice format or a thirteenth radar skill.
- Mastery presents twelve authored moments from one case in a fixed order. Each has a corresponding skill prompt. Keep roles for all twelve items, use four feedback/rating checkpoints after sets of three, and choose roles and material again afterward.
- Use the existing 1–5 performance scale and self/observer sources. Mastery ratings measure integrated practice and are stored separately from single-skill ratings.
- Mastery is guided practice in switching and integrating skills. A later exercise without prompts could practise intervention selection; a prompted exercise does not establish unassisted selection competence or certify mastery.

The hybrid difficulty model is coherent if the UI shows available practice levels consistently. Fixed levels can retain a clinically recognizable case profile, while variants let trainees approach new cases with different exercise demands. These remain instructional levels, not validated severity measures or labels of the client's worth.

## Mastery experience

### Selection and phone UI

The compact home continues to handle individual/group and create/join. Rooms can still be created before material is chosen. In the library, use one exercise-type choice:

- Single skill: skill → case → level when multiple versions exist.
- Mastery practice: case → level when multiple versions exist → brief preparation.

Remember the last exercise type and valid level. Do not carry an unsupported level into another case. New variable-level cases initially suggest Easy; later visits remember the valid last choice. The host selects material for a room, and a change resets readiness before start.

Preparation retains the current role-specific information. The client sees role background and client voice with a reachable Ready button. The therapist sees the case context and a short orientation to mixed skills; the observer sees a compact sequence overview. All required active roles must be uniquely assigned and ready.

During practice:

| Role | Visible content |
| --- | --- |
| Therapist | Current skill name and one short instruction; item position; expandable help/example after an initial attempt. No client script or observer checklist. |
| Client | Current line and delivery cue; a short scene bridge only where needed. Background remains available without crowding the line. |
| Active observer | Current skill, client line, two concise feedback cues, and Finish item/Pass. The sequence overview is collapsible. |
| Watching observer | Current skill, line and feedback cues; no advance or rating controls. |
| Individual practice | Client line and skill prompt together; feedback cues at reflection/rating. |

Pairs use therapist-led completion and self-assessment, as now. The client role is not the rater. Shared-device practice uses the same content and role handoff components. Existing authenticated rating-identity rules must be preserved; a shared phone must not invent a second user's identity to label a rating as observer-authored.

Keep the case's visual identity stable across a sequence and show the current skill clearly with its existing icon/accent. Avoid large visual changes or long instructions whenever the skill switches. Fixed mobile controls remain within the screen at 320px, including enlarged text and an open keyboard.

### An illustrative twelve-item sequence

This is an authoring example for a bereavement sequence, not a universal therapy protocol. Another case can use a different selection and order.

| Set | Moment | Prompted skill |
| --- | --- | --- |
| 1: Establish contact | Client describes the ordinary evening when the loss is most apparent. | Empathic understanding |
| 1 | Client questions whether attending to grief will accomplish anything. | Treatment rationale |
| 1 | Client criticizes themselves for still missing their partner. | Affirmation and validation |
| 2: Explore experience | Client senses something difficult to name. | Exploratory question |
| 2 | A small sadness or bodily feeling begins to emerge. | Empathic exploration |
| 2 | Tone and words suggest a nearby meaning the client has not named. | Empathic conjecture |
| 3: Respond to changing contact | Client describes a charged experience at a distance. | Empathic evocation |
| 3 | Client moves away from a just-emerging feeling. | Empathic refocusing |
| 3 | Grief becomes strong and the client needs steady company or a pause. | Staying in contact with intense affect |
| 4: Integrate and end | Client notices a changed meaning, or says the experience remains unresolved. | Empathic understanding |
| 4 | Client articulates a small shift and uncertainty about carrying it forward. | Consolidating emotional change |
| 4 | Time is running short with some emotion or work still present. | Closing a session after emotional work |

Skills can recur where they fit. Do not force all fifteen skills into every sequence or make every item more intense than the last. Repair, bounded disclosure and chair-work setup can appear in other authored sequences when the moment warrants them. Self-awareness can be a private preparation/reflection cue; it should not be inserted as a client-facing disclosure task.

Use selected existing statements as candidates, then edit or write transitions for narrative fit. Do not assume that twelve individually good lines form a coherent sequence. Mastery owns stable scene IDs; a source-item reference can preserve provenance without duplicating ratings.

The next scripted line cannot depend on what a trainee actually said: the app does not record or interpret speech. Treat these as linked practice moments in a selected session, with explicit short time/scene bridges when needed. Avoid lines that claim the therapist just said a particular sentence or that a response has necessarily worked. Feedback and retry finish the current moment before moving on. Passing a scene must not make later scenes nonsensical; include a minimal neutral bridge where a later scene needs context.

The sequence must allow the therapist to respect a refusal, correct an assumption, pause or address an immediate safety need. Do not reward obeying a named skill at the expense of the client. Initial mastery scripts should avoid unresolved acute-risk narratives that would make a routine move to the next scene inappropriate.

## Levels and new case content

| Level | Exercise design |
| --- | --- |
| Easy | Clear marker/feeling, focused cue and a manageable response. Switching between skills is still new work. |
| Moderate | Mixed feelings, indirect cues or a protective shift; the therapist checks fit and chooses what to emphasize. |
| Hard | Ambiguous meanings, a correction, boundary sensitivity or relational strain; the therapist adapts while maintaining contact. |

Do not add crisis material merely to increase difficulty. Mastery switching is a distinct challenge, not an automatic promotion from Easy to Hard. Keep level and exercise type visible in history. Do not combine their ratings or claim that identically named levels are psychometrically equivalent across cases and exercise types.

Provisional case briefs:

1. **Arne, late sixties — bereavement.** A retired adult adapting to life after a partner's death: changed routines, loneliness, affection, irritation, relief and guilt about enjoying something again. Include strengths and relationships; avoid automatically explaining ordinary grief as an abandonment schema.
2. **Elin, early forties — chronic illness/disability.** An adult adapting to established illness and reduced capacity: autonomy, anger about dismissal, dependence, uncertainty and valued activity. Emotional work must not imply that illness is imaginary or that acceptance requires giving up practical support.
3. **Leila, mid-thirties — discrimination and belonging.** A Norwegian-born adult encountering repeated exclusion and being treated as an outsider at work. Use one concrete social context with ordinary life, skills and supportive relationships. Do not turn actual discrimination into a mistaken belief, assume all concerns arise from identity, or combine every marginalized experience into one case.

Names and precise histories can be refined during authoring. Each case needs a bilingual dossier, voice/delivery notes, stable relationships/facts, strengths, practical context and three consistent versions of each offered exercise.

Initial focused coverage for each new case: understanding, validation, exploratory questions, rationale, exploration, evocation, conjecture, intense-affect contact, plus the three new skills below. This is eleven skill banks × three levels × twelve items = 396 bilingual pairs per case. Self-awareness, disclosure, chair-work setup and other modules can be added where they supply a clear target. An explicit availability map replaces the requirement that every case appear under every skill.

## New skills and later task modules

First publish three distinct extensions, with matched guides, examples, observer cues and self-assessment cues:

| Skill | Practice target |
| --- | --- |
| Consolidating emotional change | Help the client name an emerging shift, explore what it means and carry it forward without forced optimism, therapist interpretation or premature advice. |
| Empathic refocusing | Notice the loss of contact, check the protective shift and invite a return when wanted. Do not interpret every tangent or practical concern as avoidance. |
| Closing after emotional work | Hear what remains, attend to activation and time, and agree on a bounded stopping point or continuation. Do not claim complete resolution or promise availability the therapist cannot offer. |

Prepare twelve-item focused banks for Sara first so every prompted extension can also be rehearsed alone. Expand the three extensions across the other eight existing cases at their fixed levels as reviewed banks become ready. Hide unsupported combinations rather than showing empty banks.

Experiential focusing follows with a distinct target: finding words/images for a whole unclear felt sense and checking their fit, rather than simply asking a body question. Chair-work beyond setup and compassionate self-soothing follow as brief task episodes with a few client/therapist exchanges. Systematic evocative unfolding is a subsequent task module. Preserve the four-checkpoint structure where suitable, but design a task episode around its actual process rather than forcing it into unrelated single-line fragments. These later modules require a separate episode/position design before release.

The [EFT therapist competence framework](https://emotionfocusedtherapy.eu/wp-content/uploads/2023/12/FC-EFT-Competence-v1.03-2.pdf), sections 3.1–3.4, supports curricular attention to refocusing, task change points, consolidation and session endings. It does not prescribe our twelve-item sequence. New skills need correctly attributed sources and extension-specific benchmark requirements; they must not be labeled as additional Goldman Exercises 1–12.

## Ratings and progress

Use the existing five response-quality labels. After each three-item set, the active observer rates the therapist's demonstrated use of the prompted skills; a pair or individual uses therapist self-assessment. Provide the three practiced skill names and concise relevant cues, then one set rating. Skipped items do not count, and an entirely passed set cannot be rated.

The integrated feedback target is: carry out the prompted skills with fit, contact and appropriate pacing across the practiced moments. Define middle/high anchors for this target using the current scale. A correct-looking sentence or rapid switch alone is insufficient. Four checkpoint scores are four observations of integrated performance, not four independent skill proficiency estimates.

- Single-skill ratings continue to populate the existing radar with its level colors and separate self/observer sources.
- Mastery checkpoint scores appear in a compact Mastery history section under the same source selection: case, level, date, completion and four set scores. A round summary can be weighted by practiced item count; label it an integrated practice rating.
- Never assign one mixed-set score to each of its skills, invent a `mastery` radar axis, or silently include mastery in existing averages and recommendations.
- Keep original levels, dates, sources and IDs in all historical rows. No reset of test accounts or other user data is part of this work.
- Record exercise type, scene IDs, target skills, sequence revision, round and checkpoint identity so partial/complete rounds and retry updates remain explicit.

## Technical implementation

### Content and browser runtime

Introduce an explicit exercise catalog with `exerciseId`, type (`single_skill` or `mastery`), `caseId`, supported language, level, content revision and ordered item IDs. Focused exercises have one target skill; mastery scenes have their own `skillId`, short instruction, bilingual client line/example, context bridge and feedback reference. Case metadata declares available levels rather than requiring every case to expose three.

Adapt legacy data through a small compatibility layer that produces focused exercises at their current level without rewriting IDs or copying all content into a new hand-maintained format. Add separate source files for new level banks and mastery sequences. Keep examples out of the immediate manifest; lazy-load the selected bank/sequence and the needed guides. Mastery order is authored and cannot be shuffled.

Update content builders and validation to cover explicit availability, correct target skills, distinct IDs, complete translations, twelve scenes per offered bank/sequence and coherent level/revision metadata. Decouple extension skills from the requirement to have a Goldman benchmark entry. Add targeted modules for exercise selection/current-scene rendering and mastery progress rather than growing `main.js` substantially or introducing a framework rewrite.

### Rooms and saved sessions

Current room configuration and rendering assume one skill per round. Extend them to carry exercise type, exercise ID, level and pinned sequence revision. Use the scene's skill for current prompts, examples and observer feedback; use the room's fixed exercise identity for ordering and rating.

Publish reviewed exercise metadata from the content build to a versioned server catalog. The server must check the chosen exercise, permitted level and authored mastery order against that catalog. A browser-supplied skill list or item order is not sufficient authority for a mastery record. Define a bounded payload for twelve scene references and feedback tags; do not send all scene prose or arbitrarily raise the existing 20KB configuration limit.

Reuse readiness, role exclusivity, acknowledgments, versioned commands and retry receipts. A mastery round stays fixed after start. A skill switch within a scene sequence does not rotate roles or create a new room. Pin content for reconnect/resume; a mismatched client must refresh or recover before advancement. Changing material between rounds clears readiness and creates a fresh round identity.

Bump the local saved-session version and preserve adapters for old focused sessions. Store exercise ID, type, level, revision, ordered scene IDs, current position and completed/passed IDs. Restore the exact scene and current skill after reload. Remember exercise type separately from individual/group format.

### Database changes

Use additive migrations. Existing `practice_ratings` rows and APIs stay intact. Add room exercise metadata and update configuration constraints to allow a mastery room without a single round-level skill. Do not overload `skill_id` with a fake skill.

Use a separate `mastery_ratings` table and dedicated authenticated recording/read paths. Store therapist/rater/source, case, level, language, sequence/revision, parent round, checkpoint number, completed scene IDs, practiced target skills, item count, score and date. Preserve one checkpoint record across retries; updates may change its score but not its attribution or scope. Enforce bounds and membership on the server. A private versioned metadata catalog can hold approved exercise definitions without spoken content.

Preserve current host, observer and therapist authorization rules. Exposed tables need row-level security and minimum grants, with ownership/membership checks rather than authentication alone; see [Supabase RLS guidance](https://supabase.com/docs/guides/database/postgres/row-level-security). Keep privileged helpers in the existing private schema and review the narrow RPC entry points. Before implementation, compare local migration assumptions with the deployed schema and regenerate proper migration files using the established CLI workflow.

Deploy backend support before exposing new exercises. Old focused clients and active rooms must continue to work. Only advertise mastery when the backend capability is present; incompatible clients should receive a clear refresh requirement. A frontend rollback must leave saved mastery ratings and focused practice usable.

## Delivery sequence

| Release | Deliverable | Completion evidence |
| --- | --- | --- |
| 0 | Keep the current editorial PR as its own release; establish a tested baseline for this expansion. | Existing content, rooms, ratings and phone flows pass. |
| 1 | Exercise catalog/availability, level support, ordered mastery, separate rating history, and the three extensions with Sara banks. Publish one Sara mastery sequence at her existing Easy level. | A full individual, shared-device and separate-device round completes with correct current skill, four checkpoint records and an unchanged focused radar. |
| 2 | Bereavement case with three levels, eleven focused banks per level and a mastery sequence at each level. | Bilingual authoring review, distinguishable challenge variants, consistent case facts and full three-level phone/room flows. |
| 3 | Illness/disability and discrimination/belonging cases, each with the same explicit initial coverage and three mastery levels. | Review of medical/social framing, level fit and narrative continuity, plus room/progress regression. |
| 4 | Three extension skills across the other eight existing fixed-level cases; one tailored mastery sequence for each of those eight cases. | No empty advertised combinations; case-specific progression rather than one reused script. |
| 5 | Experiential focusing, then brief chair-work/self-soothing episodes and systematic unfolding. | Distinct targets and a tested multi-turn task model before adding task content. |

Approximate authoring volume for Releases 1–4 at this proposed coverage: 36 Sara focused pairs + 12 Sara mastery scenes; 1,188 focused pairs and 108 mastery scenes for the three new cases; 288 extension pairs and 96 mastery scenes for the eight remaining existing cases. That is **1,728 new bilingual client/example pairs**, authored in reviewed batches, alongside the 1,296 current pairs. This is a planning estimate, not a reason to fill unsuitable combinations. Later task-module volume is separate. Reuse can reduce drafting but not narrative and translation review.

## Validation and release gates

- Content: preserve existing IDs/text unless an explicit editorial change is recorded; complete bilingual coverage, legal availability, twelve ordered scenes, correct target skill/feedback links and current runtime revision.
- Learning design: read each sequence aloud in both languages; check case facts, transitions, pacing, legitimate skill markers, meaningful level distinctions and multiple valid responses. Review sources/anchors for extensions and sample with an EFT instructor and Norwegian reviewer.
- Database fixtures: focused backward compatibility, authorized mastery writes/reads, rejected cross-user attribution, checkpoint bounds, no rating for passed-only sets, duplicate retries, concurrent completion/rating and preserved historical rows.
- Progress: mastery never changes focused radar values; self/observer remain distinct; correct weighted summary, partial completion, ordering/pagination and recent-history behavior.
- Rooms: pair, three-person and larger group; required roles/readiness, host transfer, reconnect after committed/lost responses, pinned sequence order, four sets and subsequent role/material reselection.
- Phone UI: 320/390px, enlarged text, long bilingual skill names, sticky controls, preparation Ready buttons and software keyboard. Current skill changes without losing scroll/focus or exposing another role's content.
- Pilot: one actual remote group completes the Sara sequence and the bereavement levels. Record confusing transitions, switching load, role guidance and rating clarity. Refine before expanding more content; browser checks do not establish instructional benefit.

No clinical certification, automatic level promotion, uncued skill-selection test, new numerical rating scale, speech recording or production data cleanup is included in the first four releases. Later uncued practice can be planned separately after guided mastery is usable.

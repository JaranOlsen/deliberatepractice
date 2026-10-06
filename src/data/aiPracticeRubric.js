// Pilot anchors assess wording and expressed meaning only. Delivery is unassessed.
export const AI_ANCHORS = {
  'therapist-self-awareness': {
    1: 'Describes only what the client should do, blames the client, or treats unbounded therapist disclosure as self-awareness.',
    2: 'Names a reaction or impulse but merges it with assumptions about the client or proposes acting it out.',
    3: 'Names an internal reaction but only partly distinguishes it from the client or describes how to keep it bounded.',
    4: 'Describes noticing a reaction or absence of a noticeable reaction, owns it and identifies a bounded choice, with a small loss of specificity.',
    5: 'Clearly distinguishes the reported internal response from the client’s experience and describes a fitting bounded choice while protecting privacy. No particular emotion or disclosure is required; assess the reflection, not the truth of an inner experience.'
  },
  'empathic-understanding': {
    1: 'Does not reflect the expressed experience; offers advice, dismissal, blame or an unrelated response.',
    2: 'Attempts a relevant reflection but materially misses the feeling or substitutes an unsupported interpretation.',
    3: 'Reflects a relevant feeling, but misses part of its meaning or adds an interpretation the client has not expressed.',
    4: 'Reflects both feeling and meaning accurately and concisely, with only a small loss of specificity or room for correction.',
    5: 'Offers a concise, precise reflection of feeling and felt meaning, staying close to the client and leaving room for correction.'
  },
  'exploratory-questions': {
    1: 'Does not invite exploration of the present experience; dismisses, advises, interrogates or changes the subject.',
    2: 'Attempts exploration but directs the answer, asks for explanation rather than experience, or stacks several questions.',
    3: 'Asks an inward-facing question, but narrows the answer or asks several questions at once.',
    4: 'Asks one open question about the immediate feeling, body or meaning with only minor complexity or distance from the moment.',
    5: 'Asks one simple, fitting, open question close to the client’s present experience, allowing their own answer rather than supplying it.'
  },
  'empathic-affirmation-validation': {
    1: 'Dismisses, shames or argues with the feeling, or endorses harmful action as validation.',
    2: 'Attempts validation but relies on generic praise, reassurance or an unsupported explanation.',
    3: 'Acknowledges a relevant feeling and some context, but generalizes or quickly explains it away.',
    4: 'Makes the feeling understandable in this client’s specific context without endorsing harmful behavior, with only a small loss of precision.',
    5: 'Briefly connects the feeling to the expressed situation, legitimizes the emotion and leaves space for it and correction, without reassurance that displaces the experience.'
  },
  'providing-treatment-rationale': {
    1: 'Pressures the client into emotion work, dismisses their concern or promises a guaranteed cure.',
    2: 'Gives a technical or generic explanation that misses the client’s concern or neglects choice.',
    3: 'Offers a relevant explanation but only partly connects it to the expressed concern, goal or manageable pace.',
    4: 'Addresses the concern and gives a plain explanation linked to the client’s goal and choice, with a minor omission.',
    5: 'Joins the specific concern, explains the purpose of emotion work in everyday language and makes pacing and choice clear, with room for the client to check whether it fits. Does not overpromise.'
  },
  'empathic-explorations': {
    1: 'Changes the subject, explains the client or pushes for emotion that is not emerging.',
    2: 'Attempts to deepen experience but supplies the meaning, stacks instructions or moves far ahead of the client.',
    3: 'Finds a relevant emerging feeling or meaning but stays general or advances beyond the available cue.',
    4: 'Stays with the expressed emotional edge and invites a small further step, with only minor imprecision.',
    5: 'Reflects the particular unfinished feeling or meaning already emerging and offers one fitting, optional invitation to unfold it further, without adding an interpretation.'
  },
  'empathic-evocations': {
    1: 'Imposes an unrelated or shaming image, or invents events as if they happened.',
    2: 'Offers imagery that is overly dramatic, clichéd or poorly grounded in what the client expressed.',
    3: 'Uses a relevant image or sensory detail but loses specificity or gives little room to check it.',
    4: 'Offers brief, vivid wording grounded in the client’s material, with a small loss of fit or tentativeness.',
    5: 'Offers a concrete, concise image or sensory description close to the client’s feeling and situation, inviting them to check fit without exaggeration or invented history.'
  },
  'empathic-conjectures': {
    1: 'Declares hidden motives or a distant interpretation as fact, or argues with the client’s account.',
    2: 'Makes a possible guess but reaches beyond the available cues or states it too firmly.',
    3: 'Offers a relevant near-surface guess but only partly grounds it or leaves limited room to disagree.',
    4: 'Offers a grounded, tentative guess about nearby feeling or meaning, with only a minor loss of precision.',
    5: 'Makes one small, grounded guess just beyond the expressed material and makes correction or disagreement easy, without claiming privileged knowledge of the client.'
  },
  'staying-in-contact-intense-affect': {
    1: 'Demands greater emotional intensity, dismisses distress or pushes past an expressed wish to stop.',
    2: 'Acknowledges intensity but rushes to calm it away or gives a directive without support or choice.',
    3: 'Recognizes the intensity and offers some support, but the next step is vague or not clearly manageable.',
    4: 'Acknowledges the intensity and offers a bounded, manageable choice about contact or pausing, with a minor omission.',
    5: 'Uses concise, supportive wording that stays with the expressed experience and offers a fitting, optional next step or pause without demanding more feeling. Actual steadiness, vocal pace and regulation cannot be established from text.'
  },
  'self-disclosure': {
    1: 'Centers the therapist’s story, burdens the client with private material or asks the client to reassure the therapist.',
    2: 'Offers a relevant personal response but it is unbounded, long or unclear in its purpose for this client.',
    3: 'Shares a relevant, bounded response but only partly explains its client-focused purpose or returns attention to the client.',
    4: 'Offers a brief, relevant disclosure and returns attention to the client, with a small loss of specificity or invitation.',
    5: 'Offers a brief, bounded piece of the therapist’s present response with a clear purpose for this client, then invites the client’s experience without asking them to care for the therapist. Judge expressed boundaries, not sincerity.'
  },
  'marker-recognition-chairwork': {
    1: 'Prescribes chairwork without a fitting marker or overrides the client’s unwillingness.',
    2: 'Notices a possible conflict or unfinished relationship but mismatches the task or gives a confusing setup.',
    3: 'Recognizes a relevant marker and proposes a plausible task, but the positions or invitation remain unclear.',
    4: 'Links the expressed marker to a fitting task, explains the relevant positions and checks willingness, with a minor omission.',
    5: 'Clearly links the expressed conflict or unfinished relationship to an appropriate task, explains the positions simply and offers a bounded first step with room to decline. Assess this opening, not execution or outcome of chairwork.'
  },
  'alliance-repair': {
    1: 'Defends the therapist, blames the client or dismisses the expressed strain.',
    2: 'Acknowledges strain but follows it with a defense, generic apology or imposed solution.',
    3: 'Acknowledges the client’s account and offers some ownership or change, but incompletely or vaguely.',
    4: 'Recognizes the specific strain, owns the therapist’s contribution where supported and invites a collaborative adjustment, with a small omission.',
    5: 'Receives the client’s expressed experience without defense, takes fitting responsibility and invites a specific collaborative adjustment with room for disagreement. Does not claim the rupture is already repaired.'
  },
  'empathic-refocusing': {
    1: 'Shames the shift, labels it avoidance as fact or overrides the client’s expressed priorities.',
    2: 'Redirects toward emotion without checking why the shift matters or whether returning is wanted.',
    3: 'Refers to a relevant emotional moment but gives an unspecific invitation or limited room to decline.',
    4: 'Links a small invitation to the particular moment just left and checks willingness, with a minor loss of specificity.',
    5: 'Gently checks the expressed shift and offers a small, concrete return to the emotional moment, respecting practical needs, correction and the option not to return.'
  },
  'consolidating-emotional-change': {
    1: 'Announces a breakthrough the client has not claimed, forces optimism or prescribes change as already complete.',
    2: 'Recognizes a possible shift but enlarges it, promises it will last or rushes into advice.',
    3: 'Names the actual shift but only partly invites the client’s own meaning or makes space for uncertainty.',
    4: 'Reflects the change in the client’s terms and invites them to sense or name it, with a minor omission.',
    5: 'Helps the client recognize and express the small change they actually noticed, leaving room for remaining pain or doubt and a freely chosen way to carry it forward if useful. Does not require a homework plan.'
  },
  'closing-after-emotional-work': {
    1: 'Ends abruptly, opens a new painful thread at the boundary or promises unrestricted availability.',
    2: 'Names the ending but dismisses unfinished feeling or prescribes a transition without checking the client.',
    3: 'Acknowledges time and some unfinished experience but gives a vague or unilateral stopping point.',
    4: 'Acknowledges what remains, names the time and invites a manageable transition with honest boundaries, with a minor omission.',
    5: 'Kindly brings time and the client’s current experience together, then agrees a clear, realistic stopping point or next step without requiring resolution or overpromising contact. Do not infer actual safety from one utterance.'
  },
  'experiential-focusing': {
    1: 'Supplies the meaning of the felt sense, demands a shift or overrides the client’s choice to stop.',
    2: 'Invites inward attention but stacks directions, imposes a label or misses the client’s correction of fit.',
    3: 'Offers a relevant sensing or naming step, but only partly follows the whole unclear experience or the client’s checking.',
    4: 'Offers one fitting step in the client’s sensing, naming or checking, with a small loss of specificity or choice.',
    5: 'Supports the client’s own description of the whole unclear experience with one fitting invitation, following their checking or correction and allowing uncertainty, private words or stopping. Does not require bodily access or an emotional shift.'
  }
};

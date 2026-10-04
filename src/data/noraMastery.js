import {NORA_BANKS,noraItemId} from './noraContent.js';
import {CONTENT_REVISION,SKILL_EXERCISE_MAP} from './contentMeta.js';
import {EXTENSION_CRITERIA} from './skillExtensions.js';
// Bridges introduce another practice moment, even after a pass. They never
// pretend to respond to the learner's unrecorded words.
const paths={
 easy:[
  ['empathic-understanding',0,'Nora begins with the comment about presenting her design.','Nora begynner med kommentaren om å presentere tegningene.','Reflect the exclusion alongside the wanted work.','Speil utestengingen sammen med arbeidet de ønsket.'],
  ['providing-treatment-rationale',0,'She asks what exploring the impact could offer.','Hun spør hva det kan gi å undersøke virkningen.','Give a modest rationale without promising workplace change.','Gi en beskjeden begrunnelse uten å love endring på jobben.'],
  ['empathic-affirmation-validation',0,'Another moment brings self-judgment about still being upset.','Et annet øyeblikk vekker selvkritikk over fortsatt å være opprørt.','Make the reaction understandable in its concrete context.','Gjør reaksjonen forståelig i den konkrete sammenhengen.'],
  ['exploratory-questions',3,'Nora recalls returning to the drawings after the meeting.','Nora husker å vende tilbake til tegningene etter møtet.','Ask one open question about that unclear experience.','Still ett åpent spørsmål om den uklare opplevelsen.'],
  ['empathic-explorations',0,'In this moment, the hurt from the comment is already present.','I dette øyeblikket er det såre fra kommentaren allerede til stede.','Explore the hurt she is noticing now.','Undersøk det såre hun merker nå.'],
  ['empathic-conjectures',0,'Another moment at her desk has an unspoken meaning.','Et annet øyeblikk ved pulten har en usagt betydning.','Offer one tentative guess, leaving room for correction.','Tilby én tentativ gjetning med rom for korrigering.'],
  ['empathic-evocations',0,'She describes the exclusion at a distance.','Hun beskriver utestengingen på avstand.','Use a close image and check whether it fits.','Bruk ett nært bilde og undersøk om det passer.'],
  ['empathic-refocusing',2,'A wish to have her work seen shifts to a project detail.','Et ønske om å få arbeidet sett går over til en prosjektdetalj.','Check whether she wants to return to that wish.','Undersøk om hun vil vende tilbake til det ønsket.'],
  ['staying-in-contact-intense-affect',0,'A later tearful moment needs company rather than a solution.','Et senere tårefylt øyeblikk trenger selskap heller enn en løsning.','Stay close without rushing to fix the hurt.','Bli nær uten å skynde deg å fikse det såre.'],
  ['empathic-understanding',8,'Another moment gives the wish for recognition clearer words.','Et annet øyeblikk gir ønsket om anerkjennelse tydeligere ord.','Reflect the recognition she is asking for.','Speil anerkjennelsen hun ber om.'],
  ['consolidating-emotional-change',1,'Nora notices a clearer wish within the anger.','Nora merker et tydeligere ønske i sinnet.','Help her name what she wants to keep.','Hjelp henne å sette ord på det hun vil ta vare på.'],
  ['closing-after-emotional-work',1,'The imagined session is nearly over.','Den tenkte timen er snart over.','End without claiming the problem is resolved.','Avslutt uten å hevde at problemet er løst.']
 ],
 moderate:[
  ['empathic-understanding',0,'Valued work and the burden of proving belonging appear together.','Viktig arbeid og belastningen ved å bevise tilhørighet kommer sammen.','Reflect both without reducing the job to the problem.','Speil begge uten å redusere jobben til problemet.'],
  ['providing-treatment-rationale',0,'Nora asks whether exploring expectations means doubting the exclusion.','Nora spør om å undersøke forventninger betyr å tvile på utestengingen.','Explain a distinction between an unclear moment and concrete events.','Forklar forskjellen mellom et uklart øyeblikk og konkrete hendelser.'],
  ['empathic-affirmation-validation',3,'In another moment, valuing the job makes the hurt harder to justify.','I et annet øyeblikk gjør det å verdsette jobben det vanskeligere å forsvare det såre.','Validate the hurt without dismissing what she values.','Valider det såre uten å avvise det hun verdsetter.'],
  ['exploratory-questions',1,'She can name what was wrong, but not its effect at her desk.','Hun kan si hva som var feil, men ikke virkningen ved pulten.','Ask about the experience without requiring a finished explanation.','Spør om opplevelsen uten å kreve en ferdig forklaring.'],
  ['empathic-explorations',1,'Hurt is present, followed by explaining why it should hurt.','Det såre er til stede, fulgt av å forklare hvorfor det burde såre.','Explore the hurt without making her defend it.','Undersøk det såre uten å få henne til å forsvare det.'],
  ['empathic-conjectures',9,'Another account stalls at the personal impact.','En annen fortelling stopper ved den personlige virkningen.','Check one small guess about what makes sharing difficult.','Undersøk én liten gjetning om det som gjør deling vanskelig.'],
  ['empathic-evocations',0,'Nora uses a concrete description of preparing for a meeting.','Nora bruker en konkret beskrivelse av å forberede et møte.','Bring that description closer and check fit.','Gjør beskrivelsen nærere og undersøk om den passer.'],
  ['empathic-refocusing',0,'A wish to have her work seen shifts toward defending the firm.','Et ønske om å få arbeidet sett går over til å forsvare firmaet.','Keep the good work in view while inviting a return.','Behold det gode arbeidet i bildet mens du inviterer tilbake.'],
  ['staying-in-contact-intense-affect',1,'A later emotional moment holds anger and hurt together.','Et senere emosjonelt øyeblikk rommer sinne og det såre sammen.','Listen for both and follow her pace.','Lytt etter begge og følg tempoet hennes.'],
  ['empathic-understanding',10,'Another moment brings a choice to leave the topic for today.','Et annet øyeblikk gir et valg om å la temaet ligge i dag.','Reflect the break without making the event less important.','Speil pausen uten å gjøre hendelsen mindre viktig.'],
  ['consolidating-emotional-change',0,'Nora notices room for both valuing and objecting.','Nora merker plass til både å verdsette og protestere.','Explore the distinction she wants to carry forward.','Undersøk forskjellen hun vil ta med seg.'],
  ['closing-after-emotional-work',2,'Time is nearly over, with the hurt still present.','Tiden er snart ute, med det såre fortsatt til stede.','End the hour without equating leaving with resolution.','Avslutt timen uten å gjøre det å gå til det samme som å ha løst noe.']
 ],
 hard:[
  ['empathic-understanding',0,'Nora begins with plain facts and the habit of softening them.','Nora begynner med konkrete fakta og vanen med å gjøre dem mildere.','Reflect the exclusion without softening or enlarging it.','Speil utestengingen uten å gjøre den mildere eller større.'],
  ['providing-treatment-rationale',2,'She asks whether the event itself can be enough to hurt.','Hun spør om selve hendelsen kan være nok til å såre.','Offer exploration without inventing a deeper cause.','Tilby utforskning uten å finne på en dypere årsak.'],
  ['empathic-affirmation-validation',0,'Another moment distinguishes disputed belonging from identity confusion.','Et annet øyeblikk skiller bestridt tilhørighet fra identitetsforvirring.','Validate her distinction rather than assigning an identity problem.','Valider forskjellen hennes heller enn å tilskrive et identitetsproblem.'],
  ['exploratory-questions',1,'Nora corrects a phrase that misses her experience.','Nora retter et uttrykk som bommer på opplevelsen.','Ask what her correction makes important to understand.','Spør hva korrigeringen gjør viktig å forstå.'],
  ['empathic-explorations',0,'The hurt is present; Nora declines an older explanation for it.','Det såre er til stede; Nora avslår en eldre forklaring på det.','Explore this hurt on her terms.','Undersøk dette såre på hennes premisser.'],
  ['empathic-conjectures',9,'She names a wish to be included and rejects a broader label.','Hun setter ord på ønsket om å bli inkludert og avviser en videre merkelapp.','Offer one tentative distinction and check fit.','Tilby én tentativ forskjell og undersøk om den passer.'],
  ['empathic-evocations',0,'A concrete phrase connects the design table and her place there.','Et konkret uttrykk knytter tegnebordet til plassen hennes der.','Use her phrase to bring the experience close, without overstatement.','Bruk uttrykket hennes til å gjøre opplevelsen nær uten overdrivelse.'],
  ['empathic-refocusing',6,'Practical support now takes priority over returning to hurt.','Praktisk støtte får nå prioritet foran å gå tilbake til det såre.','Respect the direction she chooses.','Respekter retningen hun velger.'],
  ['staying-in-contact-intense-affect',3,'A later shaken moment needs some contact without another question.','Et senere rystet øyeblikk trenger noe kontakt uten et nytt spørsmål.','Offer a few plain words of company.','Tilby noen få vanlige ord som gir selskap.'],
  ['empathic-understanding',2,'Another workplace moment is unclear without changing the earlier facts.','Et annet øyeblikk på jobb er uklart uten at de tidligere fakta endres.','Hold the uncertainty and the concrete exclusion separately.','Behold usikkerheten og den konkrete utestengingen hver for seg.'],
  ['consolidating-emotional-change',7,'Nora notices a distinction between this moment and the earlier ones.','Nora merker en forskjell mellom dette øyeblikket og de tidligere.','Help her name that small distinction without enlarging it.','Hjelp henne å sette ord på den lille forskjellen uten å gjøre den større.'],
  ['closing-after-emotional-work',6,'The hour ends with a correction she wants remembered.','Timen slutter med en korrigering hun vil ha husket.','Keep her words as the starting point for another time.','Behold ordene hennes som utgangspunkt til en annen gang.']
 ]
};
export const NORA_MASTERY=Object.entries(paths).map(([level,path])=>({
 id:`mastery-nora-work-and-belonging-${level}`,type:'mastery',caseId:'case-nora',difficulty:level,supportedLevels:[level],revision:CONTENT_REVISION,
 title:{en:'Nora · Work and belonging',no:'Nora · Arbeid og tilhørighet'},
 orientation:{en:'Twelve linked moments about exclusion, valued work and having a voice. Use the prompted skill, give feedback and retry. Each next scene is a new moment, not a response to your exact words.',no:'Tolv sammenhengende øyeblikk om utestenging, viktig arbeid og en egen stemme. Bruk ferdigheten som vises, gi tilbakemelding og prøv igjen. Hver neste scene er et nytt øyeblikk, ikke et svar på akkurat dine ord.'},
 scenes:path.map(([skillId,index,bridge,bridgeNo,prompt,promptNo],position)=>{
  const [text,suggestion,textNo,suggestionNo]=NORA_BANKS[level][skillId][index];
  return {id:`mastery_nora_${level}_${String(position+1).padStart(2,'0')}`,skillId,sourceItemId:noraItemId(skillId,level,index),
   criteriaTags:SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags??EXTENSION_CRITERIA[skillId],
   en:{bridge,prompt,text,suggestion},no:{bridge:bridgeNo,prompt:promptNo,text:textNo,suggestion:suggestionNo}};
 })
}));

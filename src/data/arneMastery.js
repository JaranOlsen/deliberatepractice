import {ARNE_BANKS, arneItemId} from './arneContent.js';
import {CONTENT_REVISION, SKILL_EXERCISE_MAP} from './contentMeta.js';
import {EXTENSION_CRITERIA} from './skillExtensions.js';

// Source candidates are selected for narrative fit. Each bridge introduces a new
// practice moment, including after a pass; no line reacts to unrecorded speech.
const paths = {
 easy:[
  ['empathic-understanding',0,'A morning in the familiar kitchen.','En morgen på det kjente kjøkkenet.','Reflect the loss in this ordinary moment.','Speil tapet i dette vanlige øyeblikket.'],
  ['providing-treatment-rationale',0,'Arne asks what exploring a routine could offer.','Arne spør hva det kan gi å utforske en rutine.','Explain a small, optional way to explore the moment.','Forklar en liten, valgfri måte å undersøke øyeblikket på.'],
  ['empathic-affirmation-validation',0,'Another small trace of Ingrid brings shame about tears.','Et annet lite spor av Ingrid vekker skam over tårene.','Make his reaction understandable in its context.','Gjør reaksjonen hans forståelig i sammenhengen.'],
  ['exploratory-questions',0,'Arne recalls the chair beside the table.','Arne husker stolen ved bordet.','Ask one open question about the unclear feeling.','Still ett åpent spørsmål om den uklare følelsen.'],
  ['empathic-explorations',0,'In this moment, sadness is already apparent.','I dette øyeblikket er tristheten allerede tydelig.','Gently explore the sadness he is noticing.','Undersøk varsomt tristheten han merker.'],
  ['empathic-conjectures',1,'The conversation turns to sharing a day with Ingrid.','Samtalen går over til å dele en dag med Ingrid.','Offer a tentative guess about what the loneliness holds.','Tilby en tentativ gjetning om hva ensomheten rommer.'],
  ['empathic-evocations',9,'He describes the ordinary things he would tell her at a distance.','Han beskriver på avstand de vanlige tingene han ville fortalt henne.','Offer one close image and check whether it fits.','Tilby ett nært bilde og undersøk om det passer.'],
  ['empathic-refocusing',0,'A tender morning detail shifts toward a practical task.','En sår detalj fra morgenen skifter mot en praktisk oppgave.','Check the shift; invite a return without insisting.','Undersøk skiftet; inviter tilbake uten å insistere.'],
  ['staying-in-contact-intense-affect',0,'A later moment is tearful, with Arne still present.','Et senere øyeblikk er tårefylt, mens Arne fortsatt er til stede.','Follow his request for quiet company.','Følg ønsket hans om stille selskap.'],
  ['empathic-understanding',6,'Another moment brings the exhaustion of caregiving into view.','Et annet øyeblikk gir plass til slitenheten fra omsorgen.','Reflect the relief and guilt without deciding what they prove.','Speil lettelsen og skylden uten å avgjøre hva de beviser.'],
  ['consolidating-emotional-change',1,'Arne notices words that let love and tiredness coexist.','Arne merker ord som lar kjærlighet og slitenhet finnes sammen.','Help him name what he wants to keep.','Hjelp ham å sette ord på det han vil ta vare på.'],
  ['closing-after-emotional-work',11,'The imagined session is nearly over.','Den tenkte timen er snart over.','Make room for tiredness and a manageable ending.','Gi plass til slitenheten og en håndterbar avslutning.']
 ],
 moderate:[
  ['empathic-understanding',0,'An ordinary morning brings mixed feelings.','En vanlig morgen vekker blandede følelser.','Reflect the peace and guilt together.','Speil freden og skylden sammen.'],
  ['providing-treatment-rationale',1,'Arne wonders what relief says about his love.','Arne lurer på hva lettelsen sier om kjærligheten.','Explain exploration without making a moral verdict.','Forklar utforskning uten å avsi en moralsk dom.'],
  ['empathic-affirmation-validation',1,'In another moment, he distinguishes Ingrid from the hospital demands.','I et annet øyeblikk skiller han Ingrid fra kravene på sykehuset.','Validate the distinction without erasing the love.','Valider forskjellen uten å viske ut kjærligheten.'],
  ['exploratory-questions',2,'Relief and guilt are not yet easy to separate.','Lettelse og skyld er ennå ikke lette å skille.','Ask one question that clarifies the relief.','Still ett spørsmål som tydeliggjør lettelsen.'],
  ['empathic-explorations',4,'Saying he was exhausted brings a small ease and self-judgment.','Å si at han var utslitt gir litt lettelse og en dom over seg selv.','Make room for the ease before the judgment takes over.','Gi lettelsen plass før dommen tar over.'],
  ['empathic-conjectures',2,'Arne describes the care through its schedule.','Arne beskriver omsorgen gjennom planen.','Tentatively check what is harder to share.','Undersøk tentativt hva som er vanskeligere å dele.'],
  ['empathic-evocations',1,'He uses a practical phrase for life after caregiving.','Han bruker et praktisk uttrykk for livet etter omsorgen.','Bring the experience closer using his phrase, with room to disagree.','Bruk uttrykket hans til å gjøre opplevelsen mer levende, med rom for å være uenig.'],
  ['empathic-refocusing',0,'A wish for rest gives way to listing appointments.','Et ønske om hvile viker for en liste over avtaler.','Check whether he wants to return to that wish.','Undersøk om han vil vende tilbake til det ønsket.'],
  ['staying-in-contact-intense-affect',7,'Arne is emotional and asks for a bounded pause.','Arne er berørt og ber om en avgrenset pause.','Respect the pause without assuming he wants to end.','Respekter pausen uten å anta at han vil avslutte.'],
  ['empathic-understanding',4,'In another moment, an enjoyable walk brings fear of leaving Ingrid out.','I et annet øyeblikk vekker en hyggelig tur frykt for å holde Ingrid utenfor.','Hear the enjoyment and its difficult meaning.','Hør gleden og den vanskelige betydningen den får.'],
  ['consolidating-emotional-change',2,'Arne names a small change in how enjoyment can belong.','Arne setter ord på en liten endring i hvordan gleden kan få plass.','Explore what shifted without promising it will last.','Undersøk endringen uten å love at den vil vare.'],
  ['closing-after-emotional-work',0,'Time is short, and the work is still unfinished.','Tiden er kort, og arbeidet er fortsatt uferdig.','End the hour without claiming resolution.','Avslutt timen uten å hevde at noe er løst.']
 ],
 hard:[
  ['empathic-understanding',0,'Arne begins by asking for a careful distinction.','Arne begynner med å be om en tydelig forskjell.','Hear the relief on his terms; avoid the interpretation he rejects.','Hør lettelsen på hans premisser; unngå tolkningen han avviser.'],
  ['providing-treatment-rationale',2,'He asks what this work can offer without a promised endpoint.','Han spør hva arbeidet kan gi uten et lovet sluttpunkt.','Offer a bounded rationale without prescribing acceptance.','Tilby en avgrenset begrunnelse uten å foreskrive aksept.'],
  ['empathic-affirmation-validation',0,'In another moment, he wants the caregiving strain heard without absolution.','I et annet øyeblikk vil han ha belastningen hørt uten frikjennelse.','Validate the strain without approving every past choice.','Valider belastningen uten å godkjenne alle tidligere valg.'],
  ['exploratory-questions',3,'Arne makes a distinction within the relief itself.','Arne skiller mellom deler av selve lettelsen.','Let him choose which part to clarify first.','La ham velge hvilken del som skal tydeliggjøres først.'],
  ['empathic-explorations',0,'The ease is present, but a broad label would miss it.','Lettelsen er til stede, men en vid merkelapp ville bomme.','Explore the experience in his words.','Undersøk opplevelsen med hans ord.'],
  ['empathic-conjectures',8,'He names two kinds of relief, with their meaning still open.','Han nevner to former for lettelse, mens betydningen fortsatt er åpen.','Make one small guess and leave room for correction.','Tilby én liten gjetning og gi rom for korrigering.'],
  ['empathic-evocations',4,'Arne uses his own concrete phrase and rejects a larger one.','Arne bruker sitt eget konkrete uttrykk og avviser et større.','Bring his phrase close without enlarging it.','Gjør uttrykket hans nært uten å gjøre det større.'],
  ['empathic-refocusing',11,'A tender feeling and a real practical need appear together.','En sår følelse og et virkelig praktisk behov kommer sammen.','Check priorities; respecting the practical need can be the right response.','Undersøk prioriteringen; å respektere det praktiske behovet kan være riktig svar.'],
  ['staying-in-contact-intense-affect',2,'A later emotional moment needs neither silence nor many words.','Et senere emosjonelt øyeblikk trenger verken stillhet eller mange ord.','Find a small amount of contact he can adjust.','Tilby noen få ord og undersøk om han vil ha mer eller mindre kontakt.'],
  ['empathic-understanding',6,'In another moment, he wants enjoyment kept ordinary.','I et annet øyeblikk vil han la gleden være vanlig.','Reflect the good moment without making it a milestone.','Speil det gode øyeblikket uten å gjøre det til en milepæl.'],
  ['consolidating-emotional-change',0,'He can name relief while rejecting a larger claim about change.','Han kan sette ord på lettelse og avviser en større påstand om endring.','Reflect the change he describes without making it larger.','Hold deg til endringen han faktisk beskriver.'],
  ['closing-after-emotional-work',11,'The hour ends with sadness and a sense of being heard.','Timen slutter med tristhet og en følelse av å bli hørt.','End without requiring sadness to turn into relief.','Avslutt uten å kreve at tristheten blir til lettelse.']
 ]
};
export const ARNE_MASTERY = Object.entries(paths).map(([level, path]) => ({
  id:`mastery-arne-ordinary-days-${level}`, type:'mastery', caseId:'case-arne', difficulty:level, supportedLevels:[level], revision:CONTENT_REVISION,
  title:{en:'Arne · Living the ordinary days',no:'Arne · Å leve de vanlige dagene'},
  orientation:{en:'Twelve linked moments about daily life after Ingrid’s death. Use the prompted skill, give feedback and retry. Each next scene is a new moment, not a response to your exact words.',no:'Tolv sammenhengende øyeblikk om hverdagen etter at Ingrid døde. Bruk ferdigheten som vises, gi tilbakemelding og prøv igjen. Hver neste scene er et nytt øyeblikk, ikke et svar på akkurat dine ord.'},
  scenes:path.map(([skillId,index,bridge,bridgeNo,prompt,promptNo],position) => {
    const [text,suggestion,textNo,suggestionNo]=ARNE_BANKS[level][skillId][index];
    return {id:`mastery_arne_${level}_${String(position+1).padStart(2,'0')}`,skillId,sourceItemId:arneItemId(skillId,level,index),
      criteriaTags:SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags??EXTENSION_CRITERIA[skillId],
      en:{bridge,prompt,text,suggestion},no:{bridge:bridgeNo,prompt:promptNo,text:textNo,suggestion:suggestionNo}};
  })
}));

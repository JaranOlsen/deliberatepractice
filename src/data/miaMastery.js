import {MIA_BANKS,miaItemId} from './miaContent.js';
import {CONTENT_REVISION,SKILL_EXERCISE_MAP} from './contentMeta.js';
import {EXTENSION_CRITERIA} from './skillExtensions.js';

// Linked practice moments, not a simulated conversation that guesses the learner's reply.
const paths={
 easy:[
  ['empathic-understanding',1,'Mia begins with a moment of help from Alex.','Mia begynner med et øyeblikk av hjelp fra Alex.','Reflect the choice she wanted.','Speil valget hun ønsket.'],
  ['providing-treatment-rationale',4,'She asks what working on a request could offer.','Hun spør hva det kan gi å jobbe med en forespørsel.','Explain a small, practical use of exploration.','Forklar en liten, praktisk nytte av utforskning.'],
  ['empathic-affirmation-validation',3,'Another moment brings care and a wish to be asked together.','Et annet øyeblikk rommer omsorg og ønsket om å bli spurt.','Validate both without asking her to choose between them.','Valider begge uten å be henne velge mellom dem.'],
  ['exploratory-questions',0,'The conversation returns to Alex reaching for a bag.','Samtalen vender tilbake til at Alex strekker seg etter en veske.','Ask one open question about the unclear experience.','Still ett åpent spørsmål om den uklare opplevelsen.'],
  ['empathic-explorations',1,'In this moment, anger about being talked over is already present.','I dette øyeblikket er sinnet over å bli snakket over hodet på allerede til stede.','Explore what the anger wants heard.','Undersøk hva sinnet vil ha hørt.'],
  ['empathic-conjectures',2,'Another offer of help brings a sharp response.','Et annet tilbud om hjelp vekker en skarp reaksjon.','Tentatively check the wish beneath the reaction.','Undersøk tentativt ønsket under reaksjonen.'],
  ['empathic-evocations',5,'Mia describes the timing of Alex’s help at a distance.','Mia beskriver tidspunktet for hjelpen fra Alex på avstand.','Use her description to bring the moment closer, checking fit.','Bruk beskrivelsen hennes til å gjøre øyeblikket nærere, og undersøk om det passer.'],
  ['empathic-refocusing',1,'A moment of anger shifts toward a detail about the bag.','Et øyeblikk av sinne går over til en detalj om vesken.','Check whether she wants to return to not being asked.','Undersøk om hun vil vende tilbake til å ikke bli spurt.'],
  ['staying-in-contact-intense-affect',1,'A later emotional moment needs a slower pace.','Et senere emosjonelt øyeblikk trenger et roligere tempo.','Stay in contact without pressing for more.','Behold kontakten uten å presse på for mer.'],
  ['empathic-understanding',11,'Another moment gives the request a clearer shape.','Et annet øyeblikk gir forespørselen en tydeligere form.','Reflect the help she wants and the choice she keeps.','Speil hjelpen hun ønsker og valget hun beholder.'],
  ['consolidating-emotional-change',8,'Mia notices words she wants to keep.','Mia merker ord hun vil ta vare på.','Help her name what those words capture.','Hjelp henne å sette ord på det formuleringen fanger.'],
  ['closing-after-emotional-work',2,'The imagined session is nearly over.','Den tenkte timen er snart over.','Keep her chosen words and make room for leaving.','Ta vare på ordene hun valgte og gi plass til å gå.']
 ],
 moderate:[
  ['empathic-understanding',0,'Help from Alex brings gratitude and a lost chance to answer.','Hjelp fra Alex vekker takknemlighet og en tapt mulighet til å svare.','Reflect both meanings of the help.','Speil begge betydningene av hjelpen.'],
  ['providing-treatment-rationale',2,'Mia asks how exploration could help with mixed feelings.','Mia spør hvordan utforskning kan hjelpe med blandede følelser.','Explain listening to both wishes without judging one away.','Forklar å lytte til begge ønsker uten å dømme bort det ene.'],
  ['empathic-affirmation-validation',0,'Another helpful act leaves a choice missing.','En annen hjelpsom handling lar et valg mangle.','Validate appreciation alongside the missing choice.','Valider verdsettelsen sammen med valget hun savner.'],
  ['exploratory-questions',1,'Mia distinguishes wanting the offer from how it arrived.','Mia skiller ønsket om tilbudet fra måten det kom på.','Ask about the difficult part of the offer.','Spør om den vanskelige delen av tilbudet.'],
  ['empathic-explorations',1,'A wish for a say is present, followed by self-judgment.','Et ønske om å få bestemme er til stede, fulgt av selvkritikk.','Make space for that wish before judging its tone.','Gi ønsket plass før dere vurderer tonen.'],
  ['empathic-conjectures',0,'In another moment, Mia can describe the tasks but not her quiet.','I et annet øyeblikk kan Mia beskrive oppgavene, men ikke stillheten sin.','Offer one tentative meaning and leave room for correction.','Tilby én tentativ betydning og gi rom for korrigering.'],
  ['empathic-evocations',0,'She describes being behind the helpful action.','Hun beskriver å være bak den hjelpsomme handlingen.','Bring her description closer without enlarging it.','Gjør beskrivelsen nærere uten å gjøre den større.'],
  ['empathic-refocusing',1,'A wish for a say shifts toward excusing Alex.','Et ønske om å få bestemme går over til å unnskylde Alex.','Keep his care in view while inviting a return to her experience.','Behold omsorgen hans i bildet mens du inviterer tilbake til opplevelsen hennes.'],
  ['staying-in-contact-intense-affect',1,'A later moment is angry and tearful, with Mia still present.','Et senere øyeblikk er sint og tårefylt, mens Mia fortsatt er til stede.','Listen for what she wants heard without speeding up.','Lytt etter det hun vil ha hørt uten å øke tempoet.'],
  ['empathic-understanding',7,'Another moment shows the cost of the offers stopping altogether.','Et annet øyeblikk viser hva det koster at tilbudene stopper helt.','Reflect the choice she wanted and the help she misses.','Speil valget hun ønsket og hjelpen hun savner.'],
  ['consolidating-emotional-change',6,'Mia finds a distinction within the help she wants.','Mia finner en forskjell i hjelpen hun ønsker.','Explore what her new words make clearer.','Undersøk hva de nye ordene tydeliggjør.'],
  ['closing-after-emotional-work',1,'Time is nearly over; using the words remains her choice.','Tiden er snart ute; om ordene skal brukes, er fortsatt hennes valg.','End without turning the request into homework.','Avslutt uten å gjøre forespørselen til en hjemmeoppgave.']
 ],
 hard:[
  ['empathic-understanding',0,'Mia wants company without someone doing everything.','Mia ønsker selskap uten at noen gjør alt.','Reflect both wishes without solving the wording.','Speil begge ønsker uten å løse formuleringen.'],
  ['providing-treatment-rationale',11,'She asks for usable words within her available energy.','Hun ber om brukbare ord med de kreftene hun har.','Offer a modest rationale for a short request.','Tilby en beskjeden begrunnelse for en kort forespørsel.'],
  ['empathic-affirmation-validation',0,'Another well-meant offer still brings hurt.','Et annet velment tilbud vekker likevel noe sårt.','Validate the hurt without deciding the helper was wrong.','Valider det såre uten å bestemme at den som hjalp, gjorde feil.'],
  ['exploratory-questions',6,'Knowing what should stop does not yet reveal what she wants instead.','Å vite hva som bør stoppe, sier ennå ikke hva hun vil ha i stedet.','Ask one question that helps clarify an alternative.','Still ett spørsmål som hjelper å tydeliggjøre et alternativ.'],
  ['empathic-explorations',2,'In another moment, room to choose feels warm and uncomfortable.','I et annet øyeblikk kjennes rom til å velge både varmt og ubehagelig.','Explore the discomfort without undoing the warmth.','Undersøk ubehaget uten å oppheve varmen.'],
  ['empathic-conjectures',3,'An offer leaves Mia needing time she has not asked for.','Et tilbud lar Mia trenge tid hun ikke har bedt om.','Tentatively check whether time matters alongside choice.','Undersøk tentativt om tid betyr noe ved siden av valg.'],
  ['empathic-evocations',11,'She describes the pause before her own answer.','Hun beskriver pausen før hennes eget svar.','Offer a close image and check whether it fits.','Tilby ett nært bilde og undersøk om det passer.'],
  ['empathic-refocusing',6,'A real practical request takes priority over returning to hurt.','En konkret forespørsel får prioritet foran å vende tilbake til det såre.','Respect her chosen direction.','Respekter retningen hun har valgt.'],
  ['staying-in-contact-intense-affect',7,'A later shaken moment needs some contact, but no new question.','Et senere rystet øyeblikk trenger noe kontakt, men ikke et nytt spørsmål.','Find a few plain words of company.','Finn noen få vanlige ord som gir selskap.'],
  ['empathic-understanding',7,'Another moment shows that stopping all offers missed the request.','Et annet øyeblikk viser at å stoppe alle tilbud bommet på forespørselen.','Reflect what the stopping failed to give her.','Speil det stoppet ikke ga henne.'],
  ['consolidating-emotional-change',1,'Mia finds words that fit only part of the experience.','Mia finner ord som passer til bare en del av opplevelsen.','Hold the useful distinction and what remains unfinished.','Behold den nyttige forskjellen og det som fortsatt er uferdig.'],
  ['closing-after-emotional-work',0,'The hour is ending, with no obligation to act on the words today.','Timen slutter, uten plikt til å bruke ordene i dag.','End without adding a plan she is not ready for.','Avslutt uten å legge til en plan hun ikke er klar for.']
 ]
};
export const MIA_MASTERY=Object.entries(paths).map(([level,path])=>({
 id:`mastery-mia-help-and-choice-${level}`,type:'mastery',caseId:'case-mia',difficulty:level,supportedLevels:[level],revision:CONTENT_REVISION,
 title:{en:'Mia · Help without taking over',no:'Mia · Hjelp uten å ta over'},
 orientation:{en:'Twelve linked moments about help, choice and being heard. Use the prompted skill, give feedback and retry. Each next scene is a new moment, not a response to your exact words.',no:'Tolv sammenhengende øyeblikk om hjelp, valg og å bli hørt. Bruk ferdigheten som vises, gi tilbakemelding og prøv igjen. Hver neste scene er et nytt øyeblikk, ikke et svar på akkurat dine ord.'},
 scenes:path.map(([skillId,index,bridge,bridgeNo,prompt,promptNo],position)=>{
  const [text,suggestion,textNo,suggestionNo]=MIA_BANKS[level][skillId][index];
  return {id:`mastery_mia_${level}_${String(position+1).padStart(2,'0')}`,skillId,sourceItemId:miaItemId(skillId,level,index),
   criteriaTags:SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags??EXTENSION_CRITERIA[skillId],
   en:{bridge,prompt,text,suggestion},no:{bridge:bridgeNo,prompt:promptNo,text:textNo,suggestion:suggestionNo}};
 })
}));

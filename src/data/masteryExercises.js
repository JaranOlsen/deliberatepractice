import {CONTENT_REVISION} from './contentMeta.js';
import {SKILL_EXERCISE_MAP} from './contentMeta.js';
import {EXTENSION_CRITERIA} from './skillExtensions.js';
import {ARNE_MASTERY} from './arneMastery.js';

// Linked practice moments, not a transcript or simulated response to the trainee.
// Bridges give context even when an earlier scene was passed.
const rows = [
 ['empathic-understanding', 'Beginning with an ordinary evening.', 'Vi begynner med en vanlig kveld.', 'Reflect what coming home means to Sara.', 'Speil hva det betyr for Sara å komme hjem.',
  "[Quietly] I put my keys down and reach for my phone before I've even taken my coat off. There's no one to tell about my day anymore.", "Coming home means feeling that gap again — there's no one there to share your day with.",
  '[Lavt] Jeg legger fra meg nøklene og griper etter mobilen før jeg engang har tatt av meg jakken. Det er ingen å fortelle om dagen min til lenger.', 'Å komme hjem betyr å kjenne det tomrommet igjen — det er ingen der å dele dagen din med.'],
 ['providing-treatment-rationale', 'Sara questions the purpose of emotion work.', 'Sara lurer på hensikten med emosjonsarbeidet.', 'Connect emotion work to her wish for more manageable evenings.', 'Knytt emosjonsarbeidet til ønsket hennes om mer håndterbare kvelder.',
  "[Puzzled] I know I miss him. How does talking about that help me stop spending the whole evening on my phone?", "You want your evenings back, not just more talk about missing him. Looking at the moment you reach for the phone may help us understand what you're needing then. We can try a small piece and see whether it helps.",
  '[Undrende] Jeg vet at jeg savner ham. Hvordan hjelper det å snakke om det når jeg vil slutte å bruke hele kvelden på mobilen?', 'Du vil ha kveldene dine tilbake, ikke bare snakke mer om å savne ham. Å se på øyeblikket du griper etter mobilen, kan hjelpe oss å forstå hva du trenger da. Vi kan prøve en liten bit og se om det hjelper.'],
 ['empathic-affirmation-validation', 'The conversation turns to shame about the breakup.', 'Samtalen går over til skammen etter bruddet.', 'Make her sadness understandable without arguing her out of it.', 'Gjør tristheten forståelig uten å argumentere den bort.',
  "[Looks down] People break up all the time. I feel weak for still crying about it.", "You lost someone you were used to turning to every day. It makes sense that you're hurting; the tears don't make you weak.",
  '[Ser ned] Folk går fra hverandre hele tiden. Jeg føler meg svak som fortsatt gråter over det.', 'Du mistet en du var vant til å vende deg til hver dag. Det er forståelig at det gjør vondt; tårene gjør deg ikke svak.'],
 ['exploratory-questions', 'Sara notices an unclear feeling while recalling the doorway.', 'Sara merker en uklar følelse når hun tenker på døren hjemme.', 'Ask one open question about what she notices now.', 'Still ett åpent spørsmål om hva hun merker nå.',
  "[Hesitates] When I picture opening the door, there's something just under my ribs. I can't really name it.", "As you picture opening the door, what do you notice about that feeling under your ribs?",
  '[Nøler] Når jeg ser for meg at jeg åpner døren, er det noe rett under ribbeina. Jeg klarer ikke helt å sette ord på det.', 'Når du ser for deg at du åpner døren, hva legger du merke til ved følelsen under ribbeina?'],
 ['empathic-explorations', 'In this moment, sadness has begun to take shape.', 'I dette øyeblikket begynner tristheten å ta form.', 'Stay with the sadness already emerging.', 'Bli ved tristheten som allerede er på vei frem.',
  "[Softly] It's sadness, I think. The door clicks shut, and no one asks how it went. That little click really gets to me.", "That little click is where the sadness comes. Could we pause there and notice what it's like, if that feels okay?",
  '[Mykt] Det er tristhet, tror jeg. Døren klikker igjen, og ingen spør hvordan det gikk. Det lille klikket går så inn på meg.', 'Det er ved det lille klikket at tristheten kommer. Kan vi stoppe der og kjenne hvordan det er, hvis det kjennes greit?'],
 ['empathic-conjectures', 'Sara describes an unsent message.', 'Sara beskriver en melding hun ikke sendte.', 'Offer a small, tentative guess about the unspoken meaning.', 'Tilby en liten, tentativ gjetning om det hun ikke har satt ord på.',
  "[Looks away] I type ‘How was your day?’ and delete it. I don't want him to think I'm pathetic. I still look to see if he's online, though.", "I wonder if part of you is hoping for a sign that you still matter to him. Does that fit, or is it something else?",
  '[Ser bort] Jeg skriver «Hvordan var dagen din?» og sletter det. Jeg vil ikke at han skal tenke at jeg er patetisk. Men jeg ser fortsatt etter om han er pålogget.', 'Jeg lurer på om en del av deg håper på et tegn på at du fortsatt betyr noe for ham. Passer det, eller er det noe annet?'],
 ['empathic-evocations', 'She describes the evening in a distant, matter-of-fact voice.', 'Hun beskriver kvelden med en fjern, saklig stemme.', 'Offer one image close to her experience; leave room to check fit.', 'Tilby ett bilde nær opplevelsen hennes; gi rom for å undersøke om det passer.',
  "[Flatly] I come home with all these little things from my day. They don't go anywhere. I just make dinner and go to bed.", "Almost as if you're carrying the day home and there's nowhere to set it down with someone. Is that how it feels?",
  '[Flatt] Jeg kommer hjem med alle disse små tingene fra dagen. De blir ikke til noe. Jeg bare lager middag og legger meg.', 'Nesten som om du bærer dagen med deg hjem, og det ikke er noe sted å legge den fra deg sammen med noen. Er det sånn det kjennes?'],
 ['empathic-refocusing', 'A tender moment gives way to analyzing old messages.', 'Et sårt øyeblikk viker for analyse av gamle meldinger.', 'Check the shift and invite a return without insisting.', 'Undersøk skiftet og inviter tilbake uten å insistere.',
  "[Voice softens, then speeds up] I wanted him to want to hear about my day. But if you look at his messages, on Tuesdays he always replied later, and—", "You were just touching that wish to be heard. Would you like to stay there a moment before we look at the pattern in his replies?",
  '[Stemmen blir mykere, så raskere] Jeg ville at han skulle ha lyst til å høre om dagen min. Men hvis du ser på meldingene hans, svarte han alltid senere på tirsdager, og—', 'Du var nettopp inne på ønsket om å bli lyttet til. Vil du bli der et øyeblikk før vi ser på mønsteret i svarene hans?'],
 ['staying-in-contact-intense-affect', 'A later moment of sadness is stronger, but Sara remains present.', 'I et senere øyeblikk er tristheten sterkere, men Sara er fortsatt til stede.', 'Offer steady company and choice about the pace.', 'Tilby stødig nærvær og valgfrihet om tempoet.',
  "[Crying, steady breath] I miss him so much right now. I don't need you to tell me it'll pass. Can we just sit for a bit?", "Yes. We can sit with it for a bit. You don't have to talk or make it pass; let me know if you want to pause differently.",
  '[Gråter, puster jevnt] Jeg savner ham så mye akkurat nå. Jeg trenger ikke at du sier at det går over. Kan vi bare sitte litt?', 'Ja. Vi kan sitte med det litt. Du trenger ikke snakke eller få det til å gå over; si fra hvis du vil ta pausen på en annen måte.'],
 ['empathic-understanding', 'In another moment, Sara holds two truths about the relationship.', 'I et annet øyeblikk rommer Sara to sannheter om forholdet.', 'Reflect both parts without choosing one for her.', 'Speil begge delene uten å velge en av dem for henne.',
  "[Thoughtful] I can miss him without wanting that relationship back. I was lonely when we were together too.", "You miss him, and you also remember how lonely you were with him. Both are part of what you're feeling now.",
  '[Ettertenksomt] Jeg kan savne ham uten å ønske meg det forholdet tilbake. Jeg var ensom da vi var sammen også.', 'Du savner ham, og du husker også hvor ensom du var sammen med ham. Begge deler er en del av det du kjenner nå.'],
 ['consolidating-emotional-change', 'Sara notices a small shift, with uncertainty about tonight.', 'Sara merker en liten endring, med usikkerhet om kvelden.', 'Help her name the shift without promising it will last.', 'Hjelp henne å sette ord på endringen uten å love at den vil vare.',
  "[Softly] Being sad doesn't feel quite so weak now. I wanted company. But I might call myself pathetic again tonight.", "‘I wanted company’ feels different from ‘I'm pathetic’, even with tonight uncertain. What about those words feels worth keeping?",
  '[Mykt] Å være trist kjennes ikke fullt så svakt nå. Jeg ønsket meg selskap. Men jeg kan komme til å kalle meg patetisk igjen i kveld.', '«Jeg ønsket meg selskap» kjennes annerledes enn «jeg er patetisk», selv om kvelden er usikker. Hva ved de ordene er verdt å ta vare på?'],
 ['closing-after-emotional-work', 'There are a few minutes left in the imagined session.', 'Det er noen minutter igjen av den tenkte timen.', 'Acknowledge what remains and agree on a manageable ending.', 'Anerkjenn det som er igjen, og finn en håndterbar avslutning sammen.',
  "[Glances at clock, tearful] I know we're nearly out of time. I'm okay to go, but I don't want to rush straight from this into everything else.", "We have a few minutes to make that transition. We can leave the work here for today without putting the sadness away. What would help you go at the pace you need?",
  '[Ser på klokken, med tårer] Jeg vet at tiden snart er ute. Det går greit å gå, men jeg vil ikke skynde meg rett fra dette og inn i alt annet.', 'Vi har noen minutter til den overgangen. Vi kan la arbeidet ligge for i dag uten å legge bort tristheten. Hva ville hjelpe deg å gå i det tempoet du trenger?']
];
export const MASTERY_EXERCISES = [{
  id: 'mastery-sara-evenings', type: 'mastery', caseId: 'case-sara', difficulty: 'easy',
  revision: CONTENT_REVISION, supportedLevels: ['easy'],
  title: {en: 'Sara · Finding room for the evening', no: 'Sara · Mer rom i kvelden'},
  orientation: {en: 'Twelve linked practice moments. Use the prompted skill, then give feedback and retry. The next scene is a new moment, not a response to your exact words.', no: 'Tolv sammenhengende øvingsøyeblikk. Bruk ferdigheten som vises, gi tilbakemelding og prøv igjen. Neste scene er et nytt øyeblikk, ikke et svar på akkurat dine ord.'},
  scenes: rows.map(([skillId, bridge, bridgeNo, prompt, promptNo, text, suggestion, textNo, suggestionNo], index) => ({
    id: `mastery_sara_evenings_${String(index+1).padStart(2,'0')}`, skillId,
    criteriaTags: SKILL_EXERCISE_MAP[skillId]?.defaultCriteriaTags ?? EXTENSION_CRITERIA[skillId],
    en: {bridge, prompt, text, suggestion}, no: {bridge: bridgeNo, prompt: promptNo, text: textNo, suggestion: suggestionNo}
  }))
}];
MASTERY_EXERCISES.push(...ARNE_MASTERY);

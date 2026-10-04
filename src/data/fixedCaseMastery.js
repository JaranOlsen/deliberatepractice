import {BASE_PRACTICE,STATEMENT_TRANSLATIONS,CONTENT_REVISION} from './index.js';
// Sources retain their exact bilingual wording. Bridges describe separate moments,
// including earlier appointments; they do not react to unrecorded trainee speech.
const paths={
 'case-michael':{
  id:'mastery-michael-before-the-outburst',level:'easy',
  title:['Michael · Before the outburst','Michael · Før utbruddet'],
  orientation:['Linked moments about correction, shame and taking responsibility without condemning yourself.','Sammenhengende øyeblikk om å bli rettet, skam og å ta ansvar uten å fordømme seg selv.'],
  rows:[
   ['empathic-understanding',4,'Michael begins with not knowing an answer in a meeting.','Michael begynner med å ikke vite et svar i et møte.','Reflect the exposure he describes.','Speil følelsen av å være blottlagt som han beskriver.'],
   ['providing-treatment-rationale',1,'He asks whether understanding anger means excusing it.','Han spør om å forstå sinnet betyr å unnskylde det.','Explain understanding alongside responsibility.','Forklar forståelse sammen med ansvar.'],
   ['empathic-affirmation-validation',1,'Another meeting brings the urge to bluff.','Et annet møte vekker trangen til å bløffe.','Validate the discomfort without endorsing bluffing.','Valider ubehaget uten å støtte bløffingen.'],
   ['exploratory-questions',0,'He notices anger and embarrassment arriving together.','Han merker at sinne og flauhet kommer sammen.','Ask one open question about that experience.','Still ett åpent spørsmål om den opplevelsen.'],
   ['empathic-explorations',5,'The next moment slows what happens before sounding certain.','Neste øyeblikk senker tempoet før han høres sikker ut.','Explore the tension at that edge.','Undersøk spenningen akkurat der.'],
   ['empathic-conjectures',0,'Another account describes answering too quickly and loudly.','En annen fortelling beskriver å svare for raskt og høyt.','Offer a tentative guess about what comes first.','Tilby en tentativ gjetning om det som kommer først.'],
   ['empathic-evocations',0,'Michael describes the heat when corrected in public.','Michael beskriver varmen når han blir rettet foran andre.','Bring the experience close without overstating it.','Gjør opplevelsen nær uten å overdrive den.'],
   ['empathic-refocusing',0,'A hurt moment shifts quickly to completing a task.','Et sårt øyeblikk går raskt over til å fullføre en oppgave.','Invite a small return, with room to decline.','Inviter litt tilbake med rom for å si nei.'],
   ['staying-in-contact-intense-affect',0,'In another moment the anger rises in the therapy room.','I et annet øyeblikk stiger sinnet i terapirommet.','Stay present without turning anger into action.','Vær til stede uten at sinnet blir til handling.'],
   ['empathic-understanding',9,'A later account concerns the cost at home.','En senere fortelling gjelder det som kostet hjemme.','Reflect his shame without removing responsibility.','Speil skammen uten å fjerne ansvaret.'],
   ['consolidating-emotional-change',3,'Michael names responsibility and a wish to be heard together.','Michael nevner ansvar og et ønske om å bli hørt sammen.','Help him put both into his own words.','Hjelp ham å si begge deler med egne ord.'],
   ['closing-after-emotional-work',5,'The imagined hour ends with work still unfinished.','Den tenkte timen slutter med arbeidet fortsatt uferdig.','End without claiming the problem is fixed.','Avslutt uten å hevde at problemet er fikset.']
  ]
 },
 'case-jason':{
  id:'mastery-jason-room-for-a-sentence',level:'easy',
  title:['Jason · Room for a sentence','Jason · Rom for en setning'],
  orientation:['Small moments about speaking, being seen and wanting company. Pauses and corrections can be useful responses.','Små øyeblikk om å snakke, bli sett og ønske selskap. Pauser og korrigeringer kan være nyttige svar.'],
  rows:[
   ['empathic-understanding',0,'Jason begins with anxiety in meetings and feeling unlike everyone else.','Jason begynner med angst i møter og følelsen av å være annerledes enn de andre.','Reflect the pressure in that moment.','Speil presset i det øyeblikket.'],
   ['empathic-affirmation-validation',0,'Another moment adds shame about his shaking hands.','Et annet øyeblikk legger til skam over skjelvende hender.','Make the anxiety understandable without judging the shaking.','Gjør angsten forståelig uten å dømme skjelvingen.'],
   ['providing-treatment-rationale',0,'He asks what talking about feelings can offer.','Han spør hva det kan gi å snakke om følelser.','Connect the work to his difficulty speaking, modestly.','Knytt arbeidet til det vanskelige ved å snakke, uten store løfter.'],
   ['exploratory-questions',0,'Jason recalls the waiting faces.','Jason husker ansiktene som ventet.','Ask one small open question.','Still ett lite, åpent spørsmål.'],
   ['empathic-explorations',0,'The next moment stays near the disappearing words.','Neste øyeblikk blir nær ordene som forsvinner.','Explore slowly without requiring another sentence.','Undersøk langsomt uten å kreve en ny setning.'],
   ['empathic-conjectures',0,'He describes preparation giving way to blankness.','Han beskriver at forberedelser viker for å bli blank.','Offer one tentative meaning, not a diagnosis.','Tilby én tentativ betydning, ikke en diagnose.'],
   ['empathic-evocations',0,'Another meeting moment is described at a distance.','Et annet møteøyeblikk beskrives på avstand.','Bring it closer while respecting his pace.','Gjør det nærere og respekter tempoet hans.'],
   ['empathic-refocusing',4,'Fear shifts toward memorizing more words.','Frykt går over til å lære flere ord utenat.','Check whether he wants a return before problem-solving.','Undersøk om han ønsker å vende tilbake før problemløsning.'],
   ['staying-in-contact-intense-affect',0,'A later moment needs fewer demands as words blur.','Et senere øyeblikk trenger færre krav når ordene blir uklare.','Offer contact without requiring verbal performance.','Tilby kontakt uten å kreve en muntlig prestasjon.'],
   ['empathic-understanding',11,'Another day includes being remembered at work.','En annen dag rommer å bli husket på jobb.','Reflect that good moment at its actual size.','Speil det gode øyeblikket uten å gjøre det større.'],
   ['consolidating-emotional-change',7,'Jason notices remembering more than his mistake.','Jason merker at han husker mer enn feilen sin.','Help him name the part he wants to keep.','Hjelp ham å si den delen han vil beholde.'],
   ['closing-after-emotional-work',11,'The hour is ending with an ordinary good moment in view.','Timen slutter med et vanlig godt øyeblikk i bildet.','Keep the good without erasing the difficult.','Behold det gode uten å viske ut det vanskelige.']
  ]
 },
 'case-laura':{
  id:'mastery-laura-company-at-her-pace',level:'moderate',
  title:['Laura · Company at her pace','Laura · Selskap i hennes tempo'],
  orientation:['Linked moments about exhaustion, guarded contact and receiving a little care. No memory detail or greater emotional intensity is required.','Sammenhengende øyeblikk om utmattelse, varsom kontakt og å ta imot litt omsorg. Ingen detaljer fra minner eller sterkere følelser kreves.'],
  rows:[
   ['empathic-understanding',8,'Laura begins with the car after a long shift.','Laura begynner med bilen etter en lang vakt.','Reflect the effort and exhaustion.','Speil innsatsen og utmattelsen.'],
   ['providing-treatment-rationale',1,'She asks about the risk of being pulled into memories.','Hun spør om risikoen for å bli trukket inn i minner.','Explain choice and manageable pacing.','Forklar valg og et håndterbart tempo.'],
   ['empathic-affirmation-validation',0,'Another morning brings judgment about being unable to begin.','En annen morgen vekker selvkritikk over å ikke komme i gang.','Validate difficulty without calling it laziness.','Valider det vanskelige uten å kalle det latskap.'],
   ['exploratory-questions',0,'Laura is uncertain about the muted feeling.','Laura er usikker på den dempede følelsen.','Ask gently without supplying a feeling for her.','Spør varsomt uten å gi henne en følelse.'],
   ['empathic-explorations',10,'Another moment concerns a meal left at the door.','Et annet øyeblikk gjelder et måltid lagt ved døren.','Explore the small feeling she actually notices.','Undersøk den lille følelsen hun faktisk merker.'],
   ['empathic-evocations',11,'She describes kindness reaching her after the visit.','Hun beskriver at vennligheten når henne etter besøket.','Use a close image tentatively.','Bruk et nært bilde tentativt.'],
   ['empathic-refocusing',2,'In another moment kindness brings unease and a topic change.','I et annet øyeblikk vekker vennlighet uro og et temaskifte.','Check whether returning would help; respect a no.','Undersøk om en tilbakevending hjelper; respekter et nei.'],
   ['staying-in-contact-intense-affect',10,'A later moment holds wanting company and fearing that wish.','Et senere øyeblikk rommer ønsket om selskap og frykt for det ønsket.','Stay with a small amount without demanding explanation.','Bli ved litt uten å kreve en forklaring.'],
   ['alliance-repair',0,'Laura recalls a mismatch in an earlier therapy conversation.','Laura husker at terapeuten gikk for raskt frem i en tidligere samtale.','Acknowledge moving too fast and adjust the task together.','Anerkjenn at du gikk for raskt frem, og tilpass oppgaven sammen.'],
   ['empathic-understanding',11,'Another invitation brings both wanting and unease.','En annen invitasjon vekker både ønske og uro.','Reflect both without deciding whether she should accept.','Speil begge uten å bestemme om hun bør takke ja.'],
   ['consolidating-emotional-change',3,'Laura notices what limited sharing made possible.','Laura merker hva det å dele litt gjorde mulig.','Help her name the value of choosing how much.','Hjelp henne å si hva det ga å velge hvor mye.'],
   ['closing-after-emotional-work',3,'The imagined hour ends without a breakthrough claim.','Den tenkte timen slutter uten en påstand om gjennombrudd.','Agree what to keep and leave time to finish.','Bli enige om det dere beholder, og gi tid til å avslutte.']
  ]
 },
 'case-carlos':{
  id:'mastery-carlos-respect-without-threat',level:'moderate',
  title:['Carlos · Respect without threat','Carlos · Respekt uten trusler'],
  orientation:['Moments about humiliation, fear and the wish for closeness. Understanding the hurt never excuses intimidation.','Øyeblikk om ydmykelse, frykt og ønsket om nærhet. Å forstå det såre unnskylder aldri skremmende oppførsel.'],
  rows:[
   ['empathic-understanding',10,'Carlos begins with a changed plan at work.','Carlos begynner med en endret plan på jobb.','Reflect the anger and later embarrassment.','Speil sinnet og det flaue etterpå.'],
   ['providing-treatment-rationale',1,'He asks for something useful when the heat rises.','Han ber om noe nyttig når varmen stiger.','Connect understanding to choosing a different response.','Knytt forståelse til å velge et annet svar.'],
   ['empathic-affirmation-validation',1,'Another moment concerns fearing how others see him.','Et annet øyeblikk gjelder frykt for andres blikk.','Validate vulnerability without endorsing domination.','Valider sårbarhet uten å støtte dominering.'],
   ['exploratory-questions',0,'He recalls a question from the foreman.','Han husker et spørsmål fra formannen.','Ask openly about the effect on him.','Spør åpent om virkningen på ham.'],
   ['empathic-explorations',1,'A separate moment follows an argument at home.','Et eget øyeblikk kommer etter en krangel hjemme.','Explore what is present before choosing an action.','Undersøk det som er til stede før dere velger en handling.'],
   ['empathic-conjectures',0,'He describes the speed of reacting to a tone.','Han beskriver hvor raskt han reagerer på en tone.','Offer one small, rejectable guess.','Tilby én liten gjetning han kan avvise.'],
   ['empathic-evocations',0,'Another crew moment is described through what he does afterwards.','Et annet øyeblikk med arbeidslaget beskrives gjennom det han gjør etterpå.','Bring the experience closer without shaming him.','Gjør opplevelsen nærere uten å skape skam.'],
   ['empathic-refocusing',0,'Hurt shifts into what the other person ought to learn.','Det såre går over til det den andre burde lære.','Invite a return without debating who deserves respect.','Inviter tilbake uten å diskutere hvem som fortjener respekt.'],
   ['staying-in-contact-intense-affect',1,'A later moment catches fear as his voice rises.','Et senere øyeblikk fanger frykt når stemmen stiger.','Keep contact and words without inviting threat.','Behold kontakt og ord uten å invitere til trusler.'],
   ['empathic-understanding',9,'Carlos names the relational cost of his temper.','Carlos setter ord på hva sinnet koster i familien.','Reflect shame and his wish for their safety.','Speil skam og ønsket om at de er trygge.'],
   ['consolidating-emotional-change',4,'He distinguishes closeness from someone staying out of fear.','Han skiller nærhet fra at noen blir av frykt.','Help him give that distinction his own words.','Hjelp ham å si forskjellen med egne ord.'],
   ['closing-after-emotional-work',2,'The hour is ending; he wants responsibility kept in view.','Timen slutter; han vil at ansvaret beholdes i bildet.','Close without turning understanding into an excuse.','Avslutt uten å gjøre forståelse til en unnskyldning.']
  ]
 },
 'case-nina':{
  id:'mastery-nina-a-need-of-her-own',level:'moderate',
  title:['Nina · A need of her own','Nina · Et eget behov'],
  orientation:['Moments about exhaustion, resentment and asking for care while guilt remains. A clearer wish need not become an immediate life change.','Øyeblikk om utmattelse, bitterhet og å be om omsorg mens dårlig samvittighet er der. Et tydeligere ønske trenger ikke bli en umiddelbar livsendring.'],
  rows:[
   ['empathic-understanding',0,'Nina begins with guilt arriving before help can arrive.','Nina begynner med at dårlig samvittighet kommer før hjelpen kan komme.','Reflect the need and the impulse to take it back.','Speil behovet og trangen til å ta det tilbake.'],
   ['empathic-affirmation-validation',0,'Rest brings another list of things she should do.','Hvile vekker enda en liste over det hun burde gjøre.','Validate needing rest without praising self-sacrifice.','Valider behovet for hvile uten å rose selvoppofrelse.'],
   ['providing-treatment-rationale',0,'She asks whether attention to her feelings is selfish.','Hun spør om å gi følelsene oppmerksomhet er egoistisk.','Connect the work to a need of her own.','Knytt arbeidet til et eget behov.'],
   ['exploratory-questions',0,'A request for help is followed quickly by guilt.','En bønn om hjelp følges raskt av dårlig samvittighet.','Ask about that immediate change.','Spør om den umiddelbare endringen.'],
   ['empathic-explorations',1,'Another moment concerns activity replacing resentment.','Et annet øyeblikk gjelder aktivitet som tar plassen til bitterhet.','Explore what is close without requiring a confrontation.','Undersøk det nære uten å kreve en konfrontasjon.'],
   ['empathic-conjectures',0,'She describes the judgment that follows resting.','Hun beskriver dommen som følger hvile.','Check a tentative meaning rather than declare a motive.','Undersøk en tentativ betydning fremfor å erklære et motiv.'],
   ['empathic-evocations',1,'A moment of feeling used becomes a case for gratitude.','Et øyeblikk av å føle seg brukt blir til grunner for takknemlighet.','Bring the lost feeling into view without condemning care.','Gjør følelsen som forsvant synlig uten å fordømme omsorg.'],
   ['empathic-refocusing',1,'Anger gives way to an apology.','Sinne viker for en unnskyldning.','Invite a small return before judging the anger.','Inviter litt tilbake før dere vurderer sinnet.'],
   ['staying-in-contact-intense-affect',0,'A later tearful moment brings shame about needing care.','Et senere tårefylt øyeblikk vekker skam over å trenge omsorg.','Stay with her without another demand to compose herself.','Bli hos henne uten et nytt krav om å samle seg.'],
   ['empathic-understanding',11,'Another day includes being overlooked at a school meeting.','En annen dag rommer å bli oversett på et skolemøte.','Reflect the hurt without deciding anyone intended it.','Speil det såre uten å bestemme at noen mente det.'],
   ['consolidating-emotional-change',10,'Nina notices a little space before apologizing.','Nina merker litt rom før unnskyldningen.','Help her recognize that small difference.','Hjelp henne å kjenne igjen den lille forskjellen.'],
   ['closing-after-emotional-work',11,'The hour ends with a starting point she wants preserved.','Timen slutter med et startpunkt hun vil beholde.','Make room for her own need next time without homework.','Gi plass til behovet hennes neste gang uten hjemmeoppgave.']
  ]
 },
 'case-aisha':{
  id:'mastery-aisha-contact-and-an-ending',level:'hard',
  title:['Aisha · Contact and an ending','Aisha · Kontakt og en avslutning'],
  orientation:['Non-acute moments about wanting contact and facing a bounded ending. No promise of constant availability or deeper disclosure is required.','Øyeblikk uten akutt fare om å ønske kontakt og møte en avgrenset avslutning. Ingen løfter om konstant tilgjengelighet eller mer deling kreves.'],
  rows:[
   ['empathic-understanding',0,'Aisha begins with what a glance away can mean to her.','Aisha begynner med det et blikk bort kan bety for henne.','Reflect the fear without promising uninterrupted attention.','Speil frykten uten å love uavbrutt oppmerksomhet.'],
   ['providing-treatment-rationale',3,'She asks whether her feelings can have a place in the work.','Hun spør om følelsene hennes kan få plass i arbeidet.','Explain a small, collaborative pace.','Forklar et lite steg i samarbeid.'],
   ['empathic-affirmation-validation',0,'Another appointment brings fear around the door.','En annen time vekker frykt rundt døren.','Validate the alarm without treating it as proof of leaving.','Valider alarmen uten å behandle den som bevis på at noen går.'],
   ['exploratory-questions',1,'She describes opposing wishes arriving quickly.','Hun beskriver motstridende ønsker som kommer raskt.','Ask about the shift without choosing the correct wish.','Spør om skiftet uten å velge det riktige ønsket.'],
   ['empathic-explorations',1,'Another moment stays near the confusion in those wishes.','Et annet øyeblikk blir ved forvirringen i de ønskene.','Explore both with room to slow down.','Undersøk begge med rom for å senke tempoet.'],
   ['empathic-conjectures',0,'A clock glance brings an unspoken meaning.','Et blikk på klokken vekker en usagt betydning.','Offer a tentative guess and check fit.','Tilby en tentativ gjetning og undersøk om den passer.'],
   ['empathic-refocusing',5,'Hurt in a pause shifts toward doing the exercise quickly.','Det såre i en pause går over til å gjøre øvelsen raskt.','Invite a look at the pause rather than push the task.','Inviter til å se på pausen fremfor å presse oppgaven.'],
   ['alliance-repair',1,'Aisha recalls an abrupt ending in an earlier appointment.','Aisha husker en brå avslutning i en tidligere time.','Acknowledge the impact and plan a bounded ending together.','Anerkjenn virkningen og planlegg en avgrenset avslutning sammen.'],
   ['staying-in-contact-intense-affect',4,'A later moment holds needing contact and shame about the need.','Et senere øyeblikk rommer behov for kontakt og skam over behovet.','Stay present without promising unlimited contact.','Vær til stede uten å love ubegrenset kontakt.'],
   ['empathic-understanding',11,'Another calm moment brings relief and uncertainty about herself.','Et annet rolig øyeblikk vekker lettelse og usikkerhet om henne selv.','Reflect the mix without requiring a crisis or a conclusion.','Speil blandingen uten å kreve en krise eller en konklusjon.'],
   ['consolidating-emotional-change',11,'Aisha notices two truths about the hour ending.','Aisha merker to sannheter om at timen slutter.','Help her name both without asking her to like the ending.','Hjelp henne å si begge uten at hun må like avslutningen.'],
   ['closing-after-emotional-work',0,'The imagined hour has a few minutes left.','Den tenkte timen har noen minutter igjen.','Name time plainly and agree how to use it.','Nevn tiden tydelig og bli enige om hvordan den brukes.']
  ]
 },
 'case-david':{
  id:'mastery-david-an-ordinary-evening',level:'hard',
  title:['David · An ordinary evening','David · En vanlig kveld'],
  orientation:['Linked moments about being valued without an exceptional performance. Corrections and a practical direction can be legitimate choices.','Sammenhengende øyeblikk om å bli verdsatt uten en enestående prestasjon. Korrigeringer og en praktisk retning kan være legitime valg.'],
  rows:[
   ['empathic-understanding',11,'David begins with the possibility of an evening without achievement.','David begynner med muligheten for en kveld uten prestasjoner.','Reflect the wish and the sense of worthlessness.','Speil ønsket og følelsen av verdiløshet.'],
   ['providing-treatment-rationale',0,'He asks how feelings connect to visible results.','Han spør hvordan følelser henger sammen med synlige resultater.','Give a practical rationale without promising an outcome.','Gi en praktisk begrunnelse uten å love et resultat.'],
   ['empathic-affirmation-validation',0,'Another conversation feels like a trial.','En annen samtale kjennes som en rettssak.','Validate feeling cornered without endorsing contempt.','Valider å føle seg presset uten å støtte forakt.'],
   ['exploratory-questions',0,'He notices a criticism staying after he dismisses it.','Han merker at kritikk blir igjen etter at han avfeier den.','Ask about its personal impact.','Spør om den personlige virkningen.'],
   ['empathic-explorations',0,'Another moment holds proving himself and wanting to disappear.','Et annet øyeblikk rommer å bevise seg og ønske å forsvinne.','Explore the competing responses.','Undersøk de motstridende reaksjonene.'],
   ['empathic-conjectures',0,'A cutting joke arrives before the hurt can be seen.','En skarp spøk kommer før det såre kan bli sett.','Check one tentative meaning of the quick joke.','Undersøk én tentativ betydning av den raske spøken.'],
   ['empathic-evocations',1,'He describes what ordinary feels like at a distance.','Han beskriver på avstand hvordan det er å være vanlig.','Bring it close without humiliating him.','Gjør det nært uten å ydmyke ham.'],
   ['empathic-refocusing',2,'A hurt moment shifts into challenging the idea of progress.','Et sårt øyeblikk går over til å utfordre ideen om fremgang.','Invite a return rather than defend your definition of progress.','Inviter tilbake fremfor å forsvare din definisjon av fremgang.'],
   ['staying-in-contact-intense-affect',0,'A later moment catches the wish to hide his exposure.','Et senere øyeblikk fanger ønsket om å skjule at han er blottlagt.','Stay present without turning it into another performance.','Vær til stede uten å gjøre det til en ny prestasjon.'],
   ['alliance-repair',1,'David recalls a task mismatch in an earlier therapy conversation.','David husker en oppgave som ikke passet i en tidligere terapisamtale.','Acknowledge missing his request and negotiate direction.','Anerkjenn at du overså det han ba om, og avtal retningen.'],
   ['consolidating-emotional-change',0,'He notices a wish for attention without grading his wife.','Han merker et ønske om oppmerksomhet uten å bedømme kona.','Help him name that distinction without celebrating a breakthrough.','Hjelp ham å si forskjellen uten å feire et gjennombrudd.'],
   ['closing-after-emotional-work',0,'The hour ends before another interpretation is wanted.','Timen slutter før han ønsker en ny tolkning.','End plainly and preserve what he wants to revisit.','Avslutt enkelt og behold det han vil vende tilbake til.']
  ]
 },
 'case-marcus':{
  id:'mastery-marcus-company-with-room-to-stop',level:'hard',
  title:['Marcus · Company with room to stop','Marcus · Selskap med rom for å stoppe'],
  orientation:['Small, non-acute moments about distance, loneliness and choosing contact. No trauma detail or increase in feeling is required.','Små øyeblikk uten akutt fare om avstand, ensomhet og å velge kontakt. Ingen detaljer fra traumer eller sterkere følelser kreves.'],
  rows:[
   ['empathic-understanding',0,'Marcus begins with the daily routine and distance.','Marcus begynner med hverdagsrutinen og avstanden.','Reflect the distance without filling it with a feeling.','Speil avstanden uten å fylle den med en følelse.'],
   ['providing-treatment-rationale',1,'He asks about work that could become too much.','Han spør om arbeid som kan bli for mye.','Explain choice and a manageable amount.','Forklar valg og en håndterbar mengde.'],
   ['empathic-affirmation-validation',1,'Another moment brings judgment about missing words.','Et annet øyeblikk vekker selvkritikk over ord som mangler.','Validate difficulty without demanding a clear account.','Valider det vanskelige uten å kreve en tydelig fortelling.'],
   ['exploratory-questions',0,'A wave is hard to name.','En bølge er vanskelig å sette ord på.','Ask one small question, leaving space for not knowing.','Still ett lite spørsmål med plass til å ikke vite.'],
   ['empathic-explorations',0,'Another moment stays near the unclear experience.','Et annet øyeblikk blir ved den uklare opplevelsen.','Explore at the edge rather than search for trauma details.','Undersøk ved kanten fremfor å lete etter traumadetaljer.'],
   ['empathic-evocations',0,'He describes going through the motions.','Han beskriver å gjøre det forventede uten å være helt med.','Use a close image, with room to reject it.','Bruk et nært bilde med rom for å avvise det.'],
   ['empathic-refocusing',4,'Marcus says a topic change helped when he was drifting.','Marcus sier et temaskifte hjalp da han begynte å gli bort.','Respect the shift and return to the present room.','Respekter skiftet og vend tilbake til rommet nå.'],
   ['staying-in-contact-intense-affect',0,'A separate moment brings a wave he does not want to deepen.','Et eget øyeblikk vekker en bølge han ikke vil gå lenger inn i.','Offer contact and a pause without memory detail.','Tilby kontakt og en pause uten detaljer fra minner.'],
   ['alliance-repair',0,'He recalls pressure in an earlier therapy conversation.','Han husker press i en tidligere terapisamtale.','Acknowledge that numbness was already the limit of what he could manage.','Anerkjenn at nummenheten allerede var grensen for det han klarte.'],
   ['empathic-understanding',9,'Another moment names wanting company and wanting an exit.','Et annet øyeblikk setter ord på ønsket om selskap og en utvei.','Reflect both without choosing closeness for him.','Speil begge uten å velge nærhet for ham.'],
   ['consolidating-emotional-change',0,'Marcus notices being able to stop and remain present.','Marcus merker å kunne stoppe og fortsatt være til stede.','Help him name that small difference.','Hjelp ham å si den lille forskjellen.'],
   ['closing-after-emotional-work',8,'The imagined hour ends with a distance he wants remembered.','Den tenkte timen slutter med en avstand han vil ha husket.','Preserve that preference without asking for more disclosure.','Behold det ønsket uten å be om mer deling.']
  ]
 }
};
export const FIXED_CASE_MASTERY=Object.entries(paths).map(([caseId,p])=>({
 id:p.id,type:'mastery',caseId,difficulty:p.level,supportedLevels:[p.level],revision:CONTENT_REVISION,
 title:{en:p.title[0],no:p.title[1]},
 orientation:{en:p.orientation[0]+' Use the prompted skill, give feedback and retry. Each scene is another moment, not a response to your exact words.',no:p.orientation[1]+' Bruk ferdigheten som vises, gi tilbakemelding og prøv igjen. Hver scene er et nytt øyeblikk, ikke et svar på akkurat dine ord.'},
 scenes:p.rows.map(([skillId,index,bridge,bridgeNo,prompt,promptNo],position)=>{
  const source=BASE_PRACTICE[skillId].cases[caseId].statements[index],no=STATEMENT_TRANSLATIONS.no[source.id];
  return {id:`mastery_${caseId.slice(5)}_${String(position+1).padStart(2,'0')}`,skillId,sourceItemId:source.id,criteriaTags:source.criteriaTags,
   en:{bridge,prompt,text:source.text,suggestion:source.suggestion},no:{bridge:bridgeNo,prompt:promptNo,text:no.text,suggestion:no.suggestion}};
 })
}));

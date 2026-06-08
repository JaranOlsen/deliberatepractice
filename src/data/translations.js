"use strict";

import { CONTENT_REVISION } from "./contentMeta.js";

export const LANGUAGE_ORDER = [
  "en",
  "no"
];

export const LANGUAGE_METADATA = {
  "en": {
    "label": "English",
    "locale": "en",
    "direction": "ltr"
  },
  "no": {
    "label": "Norsk (bokmål)",
    "locale": "no",
    "direction": "ltr"
  }
};

export const LANGUAGE_UI = {
  "en": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Build precision with focused skills and curated cases across difficulty levels.",
    "languageHeading": "Choose a Language",
    "languageDescription": "Select the language you want to practice in.",
    "languageListAria": "Language options",
    "skillHeading": "Choose a Skill",
    "skillDescription": "Pick the focus area you want to strengthen today.",
    "skillListAria": "Skill options",
    "caseHeading": "Pick a Case",
    "caseDescription": "Explore curated scenarios with built-in difficulty levels.",
    "caseListAria": "Case options",
    "skillMarkerLabel": "Markers",
    "skillSummaryLabel": "How to Work",
    "skillAimLabel": "Aim",
    "skillPracticeFocusLabel": "What to practice",
    "skillCommonMissLabel": "Common miss",
    "glossaryHint": "Tap highlighted terms to see quick definitions.",
    "glossaryTitle": "Key term",
    "glossaryClose": "Close definition",
    "showSkillInstructions": "Show instructions",
    "hideSkillInstructions": "Hide instructions",
    "historyLabel": "History",
    "schemaLabel": "Maladaptive Scheme",
    "corePainLabel": "Core Pain",
    "styleLabel": "Style",
    "casePracticeEdgeLabel": "What to listen for",
    "caseBriefHeading": "Case Brief",
    "roleBriefHeading": "Role Background",
    "clientVoiceHeading": "Client Voice",
    "practiceControlsAria": "Practice controls",
    "shuffle": "Shuffle Statements",
    "shuffleAria": "Shuffle statement order",
    "next": "Next",
    "nextAria": "Advance to the next statement",
    "showSuggestion": "Show Suggested Response",
    "hideSuggestion": "Hide Suggested Response",
    "suggestionHiddenLabel": "Suggested response is hidden",
    "suggestionShownLabel": "Suggested response is visible",
    "statementFallback": "Statements for this case are not available yet.",
    "emptyPrompt": "Select a skill and case to begin practicing statements.",
    "counterPattern": "{current} of {total}",
    "startPractice": "Begin Practice",
    "viewCaseBrief": "View Case Brief",
    "backToLanguage": "Language",
    "backToLanguageAria": "Back to language selection",
    "backToSkills": "Skills",
    "backToSkillsAria": "Back to skills",
    "backToCases": "Cases",
    "backToCasesAria": "Back to cases",
    "footerNote": "Copyright © 2025 Jaran Olsen. All rights reserved.",
    "statementPanelAria": "Client statements to practice with",
    "lockedLabel": "Locked",
    "lockedBanner": "Most cases are for members. Enter your access code to unlock the full library.",
    "lockedPlaceholder": "This case is locked. Unlock to view statements.",
    "paywallHeading": "Unlock the full library",
    "paywallMessage": "Enter your access code to view this case",
    "unlockSubmit": "Unlock",
    "unlockMissing": "Enter a code to continue.",
    "unlockInvalid": "That code was not recognized.",
    "unlockExpired": "That code has expired.",
    "unlockError": "Could not unlock right now. Please try again.",
    "unlockSuccess": "Unlocked! Full library is available.",
    "unlockWorking": "Checking code...",
    "unlockConfigMissing": "Supabase configuration is missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Flag this item",
    "feedbackReasonLabel": "What's wrong?",
    "feedbackDetailsLabel": "Add details (optional)",
    "feedbackSubmit": "Send feedback",
    "feedbackToggleShow": "Flag",
    "feedbackToggleHide": "Hide",
    "feedbackSending": "Sending...",
    "feedbackSuccess": "Thanks! Your feedback was sent.",
    "feedbackError": "Unable to send feedback. Please try again.",
    "feedbackUnavailable": "Select a case and statement to send feedback.",
    "feedbackConfigMissing": "Feedback storage is not configured."
  },
  "no": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Bygg presisjon med målrettede ferdigheter på nøye utvalgte caser over flere vanskelighetsnivåer.",
    "languageHeading": "Velg språk",
    "languageDescription": "Velg språket du vil øve på.",
    "languageListAria": "Språkvalg",
    "skillHeading": "Velg en ferdighet",
    "skillDescription": "Velg hva du vil øve på i dag.",
    "skillListAria": "Ferdighetsvalg",
    "caseHeading": "Velg en case",
    "caseDescription": "Utforsk nøye utvalgte caser av forskjellig vanskelighetsgrad.",
    "caseListAria": "Casevalg",
    "skillMarkerLabel": "Markører",
    "skillSummaryLabel": "Hvordan jobbe",
    "skillAimLabel": "Mål",
    "skillPracticeFocusLabel": "Hva du øver på",
    "skillCommonMissLabel": "Vanlig feilgrep",
    "glossaryHint": "Trykk på markerte begreper for å se en kort forklaring.",
    "glossaryTitle": "Nøkkelbegrep",
    "glossaryClose": "Lukk forklaring",
    "showSkillInstructions": "Vis instruksjoner",
    "hideSkillInstructions": "Skjul instruksjoner",
    "historyLabel": "Bakgrunn",
    "schemaLabel": "Maladaptivt skjema",
    "corePainLabel": "Kjernesmerte",
    "styleLabel": "Stil",
    "casePracticeEdgeLabel": "Hva du bør lytte etter",
    "caseBriefHeading": "Caseoversikt",
    "roleBriefHeading": "Rollebakgrunn",
    "clientVoiceHeading": "Klientens stemme",
    "practiceControlsAria": "Kontroller for øving",
    "shuffle": "Stokk om utsagnene",
    "shuffleAria": "Stokk om rekkefølgen på utsagnene",
    "next": "Neste",
    "nextAria": "Gå til neste utsagn",
    "showSuggestion": "Vis foreslått respons",
    "hideSuggestion": "Skjul foreslått respons",
    "suggestionHiddenLabel": "Foreslått respons er skjult",
    "suggestionShownLabel": "Foreslått respons er synlig",
    "statementFallback": "Utsagnene for denne casen er ikke tilgjengelige ennå.",
    "emptyPrompt": "Velg en ferdighet og en case for å begynne å øve.",
    "counterPattern": "{current} av {total}",
    "startPractice": "Start øvingen",
    "viewCaseBrief": "Vis caseoversikt",
    "backToLanguage": "Språk",
    "backToLanguageAria": "Tilbake til språkvalg",
    "backToSkills": "Ferdigheter",
    "backToSkillsAria": "Tilbake til ferdigheter",
    "backToCases": "Caser",
    "backToCasesAria": "Tilbake til caser",
    "footerNote": "Opphavsrett © 2025 Jaran Olsen. Alle rettigheter forbeholdt.",
    "statementPanelAria": "Klientutsagn for øving",
    "lockedLabel": "Låst",
    "lockedBanner": "De fleste casene er låst. Bruk tilgangskoden for å åpne biblioteket.",
    "lockedPlaceholder": "Denne casen er låst. Lås opp for å se utsagnene.",
    "paywallHeading": "Lås opp hele biblioteket",
    "paywallMessage": "Skriv inn tilgangskoden for å se denne casen",
    "unlockSubmit": "Lås opp",
    "unlockMissing": "Skriv inn kode for å fortsette.",
    "unlockInvalid": "Koden ble ikke gjenkjent.",
    "unlockExpired": "Koden er utløpt.",
    "unlockError": "Kunne ikke låse opp nå. Prøv igjen.",
    "unlockSuccess": "Låst opp! Hele biblioteket er tilgjengelig.",
    "unlockWorking": "Sjekker kode...",
    "unlockConfigMissing": "Supabase-oppsett mangler. Legg til VITE_SUPABASE_URL og VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Rapporter dette punktet",
    "feedbackReasonLabel": "Hva er problemet?",
    "feedbackDetailsLabel": "Detaljer (valgfritt)",
    "feedbackSubmit": "Send tilbakemelding",
    "feedbackToggleShow": "Flagg",
    "feedbackToggleHide": "Skjul",
    "feedbackSending": "Sender...",
    "feedbackSuccess": "Takk! Tilbakemeldingen ble sendt.",
    "feedbackError": "Kunne ikke sende tilbakemelding. Prøv igjen.",
    "feedbackUnavailable": "Velg en case og et utsagn for å sende tilbakemelding.",
    "feedbackConfigMissing": "Lagring av tilbakemelding er ikke satt opp."
  }
};

export const CASE_FORMULATION_TRANSLATIONS = {
  "no": {
    "case-sara": {
      "corePain": "Skampreget ensomhet og frykt for å bli forlatt, forankret i følelsesmessig avstand fra omsorgspersonene."
    },
    "case-michael": {
      "corePain": "Ydmykelse, utilstrekkelighet og frykt for å bli avslørt, knyttet til en kritisk far og betinget egenverdi."
    },
    "case-jason": {
      "corePain": "En dyp følelse av å være defekt, sosialt klein og redd for å bli avslørt, formet av mobbing og engstelig omsorg."
    },
    "case-laura": {
      "corePain": "Traumebundet frykt, skam og ensomhet knyttet til å oppleve seg skadet og utrygg i nærhet."
    },
    "case-carlos": {
      "corePain": "Ydmykelse, frykt og småhet skjult bak tøffhet som ble lært i voldelige miljøer."
    },
    "case-nina": {
      "corePain": "Frykt for at egne behov eller sinne gjør henne egoistisk, uverdig og lett å forlate."
    },
    "case-aisha": {
      "corePain": "Knusende frykt for å bli forlatt og ikke være elskbar, formet av fosterhjem og traumebetinget ustabilitet."
    },
    "case-david": {
      "corePain": "Verdiløshet og skam skjult under statusjag og kontroll."
    },
    "case-marcus": {
      "corePain": "Fastfrossen sorg, frykt, skam og skyld over å ha overlevd, skjult under nummenhet og tilbaketrekning."
    }
  }
};

export const STATEMENT_TRANSLATION_REVISION = CONTENT_REVISION;

export const LANGUAGE_OVERRIDES = {
  "no": {
    "therapist-self-awareness": {
      "name": "Terapeutens selvbevissthet",
      "description": "Følg med på din egen indre tilstand slik at du kan være jordet, mottakelig og følelsesmessig regulert nok til å lede arbeidet trygt.",
      "summary": "Terapeutisk selvbevissthet handler om å spore egen kropp, følelser, tanker og impulser i sanntid slik at du kan velge hvordan du vil svare i stedet for å reagere automatisk. Du legger merke til når aktiveringen øker – for eksempel fiksetrang, uro, irritasjon eller nummenhet – og gjenkjenner det som dine egne sekundære reaksjoner, ikke som nøyaktig informasjon om klienten.\n\nI stedet for å handle ut fra disse reaksjonene, stopper du opp, puster og re-sentrerer deg, slik at du kan være en stødig, innstemt tilstedeværelse innenfor klientens toleransevindu. Du legger merke til hva som blir trigget i deg og setter det vennlig i parentes, slik at klientens prosess fortsatt får stå i forgrunnen. Denne bevisstheten hjelper deg å forbli nysgjerrig og empatisk når klienten viser sterke eller krevende følelser, heller enn å bli defensiv, reddende eller trekke deg unna.\n\nNår du regulerer deg selv på denne måten, blir du et pålitelig emosjonelt anker når klienten nærmer seg primære, ofte smertefulle følelser. Du modellerer sunn emosjonell regulering og kongruens, og viser at sterke følelser kan merkes og rommes uten å bli undertrykt eller handlet ut. Over tid gjør denne praksisen det lettere å justere opp eller ned intensiteten i samtalen i tråd med klientens behov, slik at den emosjonelle bearbeidingen kan bli både dyp og trygg.",
      "marker": "Du merker at du blir anspent, får fiksetrang, blir defensiv, nummen eller sterkt dratt mot eller vekk fra klienten, eller at den empatiske nysgjerrigheten glipper. Du får en fornemmelse av at dine egne reaksjoner er i ferd med å styre samspillet mer enn klientens behov.",
      "aim": "Regulere deg selv slik at du forblir jordet, empatisk og innstemt, og kan være med på å samregulere klientens aktivering innenfor et håndterbart vindu. Verne om et trygt rom der kjernesmerte og primære følelser kan komme frem uten å bli avbrutt av ubehandlede reaksjoner hos terapeuten.",
      "practiceFocus": "Fang først opp din egen reaksjon, reguler den, og svar deretter fra jordet innstemming.",
      "commonMiss": "Å gjøre selvbevissthet til et manus eller gå rett til fiksing før du faktisk har landet i deg selv.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-understanding": {
      "name": "Empatisk forståelse",
      "description": "Speil klientens indre verden med følelsesnært, presist språk slik at de kjenner seg dypt forstått og invitert til å utforske videre.",
      "summary": "Empatisk forståelse innebærer å gi korte, presise gjentakelser som både fanger hva som skjedde og hvordan det kjennes for klienten akkurat nå. Du lytter etter den emosjonelle meningen under historien og svarer med språk som treffer følelsen, ikke bare fakta. Responsene er korte, her-og-nå-orienterte og frie for råd og tolkninger, slik at klientens opplevelse forblir i sentrum. Hovedintensjonen er å formidle forståelse – dersom opplevelsen fordypes, skjer det som en naturlig følge av å bli møtt.\n\nNår du speiler følelsene med varme og presisjon, kjenner klienten seg mindre alene og mer sett, noe som demper sekundære reaksjoner som skam og tilbaketrekning. Opplevelsen av å være forstått gjør det lettere å bli værende i og utdype de primære følelsene, i stedet for å forklare dem bort eller skifte tema.\n\nOver tid hjelper denne måten å lytte på klienten til å skille mellom lag av følelser og se mønstre i egne reaksjoner. Den styrker alliansen og skaper den tryggheten som trengs for å nærme seg kjernesmerte og udekkede behov. Empatiske gjentakelser organiserer også opplevelsen – det som før var uklart og implisitt blir tydeligere og mer håndterbart. I følelsesfokusert og annen opplevelsesorientert terapi er dette en grunnleggende måte å støtte økt bevissthet, uttrykk og endring på.",
      "marker": "Følelser er tydelig til stede i det klienten forteller, eller historien kjennes uklar, søkende eller fragmentert og de ser ut til å trenge hjelp til å organisere den. Klienten virker «sulten» på å bli hørt, validert og presist sett i sin emosjonelle opplevelse.",
      "aim": "Formidle presis, varm forståelse som gjør at klienten kjenner seg trygg og akseptert akkurat der de er, og som gjør det lettere å utdype følelsene uten å føle seg feil eller overdrevet.",
      "practiceFocus": "Speil den følte meningen i klientens opplevelse med kort, presist språk som ligger tett på deres egne ord.",
      "commonMiss": "Å legge til forklaring, forsikring eller fordypning før klienten har rukket å kjenne seg fullt forstått.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-affirmation-validation": {
      "name": "Empatisk bekreftelse og validering",
      "description": "Sett følelsene inn i en meningsfull sammenheng og si tydelig at de gir mening, slik at skam og selvangrep myknes og det blir tryggere å føle.",
      "summary": "Empatisk bekreftelse og validering handler om å si tydelig at klientens følelser gir mening i lys av det de har opplevd. Du setter ord på de situasjonene, relasjonene eller livserfaringene som gjør en gitt følelse forståelig, og går imot indre budskap som «jeg overreagerer» eller «jeg burde ikke føle dette». Når du merker skam og selvkritikk, bekrefter du både gyldigheten i følelsen og motet det krever å vise den.\n\nPå den måten demper du sekundære, hemmende følelser som skam, skyld og forakt, som ellers lett kveler primære reaksjoner og hindrer bearbeiding. For mange som har fått følelsene sine avvist, gjort narr av eller straffet, blir ekte validering en korrigerende emosjonell erfaring – tristhet, sinne, frykt eller sårethet møtes med respekt i stedet for kritikk. Det gjør det mulig å bli værende i følelsen lenge nok til at kjernesmerte og udekkede behov kan tre tydeligere frem.\n\nValidering betyr ikke å støtte alle handlinger; du skiller mellom at følelsen er forståelig, og hvordan man velger å handle på den. Over tid hjelper konsistent bekreftelse klienten til å utvikle en mer medfølende indre stemme og mindre kronisk selvangrep, slik at også dypt skambelagte følelser kan komme frem og forandres.",
      "marker": "Klienten uttrykker skam eller hard selvkritikk, bagatelliserer eller unnskylder følelsene sine med utsagn som «jeg burde ikke føle dette» eller «det er teit at jeg er så lei meg». De ser kanskje ned, unngår blikk eller skyver følelsene raskt vekk etter at de har vist seg.",
      "aim": "Legitimere klientens følelsesreaksjoner i lys av livssituasjonen, slik at skam og selvangrep mister grepet og klienten kjenner mer tillatelse til å føle. Bygge emosjonell trygghet og selvmedfølelse slik at primære følelser og kjernesmerte kan nås, utforskes og etter hvert forandres.",
      "practiceFocus": "Sett ord på hvorfor følelsen gir mening i kontekst, særlig når skam eller selvangrep er aktivt.",
      "commonMiss": "Å validere handlinger i stedet for følelser, eller å bli så generell at du mister koblingen til klientens livssituasjon.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "exploratory-questions": {
      "name": "Utforskende spørsmål",
      "description": "Still åpne, erfaringsnære spørsmål som vender oppmerksomheten innover og utfolder det som er i ferd med å komme.",
      "summary": "Utforskende spørsmål er enkle, åpne invitasjoner som vender klientens oppmerksomhet mot øyeblikkets kroppslige og emosjonelle opplevelse heller enn analyser og forklaringer. Du spør hva de legger merke til i kroppen, hvilken følelse som er der, eller hva som kjennes mest «i live» akkurat nå.\n\nSlik kan utydelig uro eller rent kognitiv beskrivelse gradvis ta form som mer spesifikke, primære følelser som kan navngis og bearbeides. Du unngår «hvorfor»-spørsmål som lett trekker klienten opp i hodet, og bruker heller «hva», «hvordan» og «hvor» som inviterer til sansing og beskrivelse. Dette beveger klienten fra å snakke om hendelser på avstand til å være mer til stede i egen opplevelse her og nå.\n\nUtforskende spørsmål hjelper også klienten å skille mellom sekundære reaksjoner, som irritasjon eller oppgitthet, og de mer sårbare primære følelsene under, som sårethet, frykt eller skam. Over tid støtter denne måten å spørre på en bevegelse fra diffus uro og kaos til tydeligere kjernesmerte, udekkede behov og nye meninger.",
      "marker": "Klienten beskriver opplevelsen som uklar, blandet, forvirrende eller «bare en merkelig reaksjon», eller de blir værende i historie og analyse uten tydelig kontakt med hva de føler. Du får en fornemmelse av at det finnes en emosjonell kant som er sanset, men ennå ikke satt ord på.",
      "aim": "Lede oppmerksomheten innover slik at implisitt, vag eller før-språklig erfaring kan krystallisere seg til mer konkrete, navngitte følelser. Støtte dypere nivåer av opplevelse og legge grunnlaget for å kunne arbeide direkte med både adaptive og maladaptive primærfølelser.",
      "practiceFocus": "Still ett åpent, innovervendt spørsmål om gangen om kropp, følelse eller mening.",
      "commonMiss": "Å stable spørsmål, spørre «hvorfor», eller trekke klienten opp i analyse i stedet for ned i erfaring.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "providing-treatment-rationale": {
      "name": "Behandlingsrasjonale for følelsesfokusert terapi",
      "description": "Gi en kort, empatisk forklaring på hvorfor følelsesfokusert terapi arbeider med følelser, og hvordan du leder det trygt.",
      "summary": "Et behandlingsrasjonale hjelper klienten å forstå logikken og tryggheten i å arbeide med følelser, særlig når de er skeptiske, redde eller usikre på denne måten å jobbe på. Etter å ha møtt bekymringene deres med empati, forklarer du med hverdagslig språk hvordan følelser organiserer opplevelser, varsler behov og kan endre seg når de får bearbeides fullt ut. Du beskriver også hvordan sekundære reaksjoner og unngåelse ofte holder folk fast, mens tilgang til primære følelser og kjernesmerte åpner for varig endring.\n\nDu er tydelig på din rolle i å regulere tempo og intensitet, slik at klienten ikke blir overlatt til overveldende affekt. Rasjonalet adresserer vanlige bekymringer som «hvis jeg begynner å føle, mister jeg kontrollen» eller «å snakke om følelser hjelper ikke», og bygger samarbeid ved å ramme inn følelsesarbeid som en felles reise med et enkelt kart – fra symptomer og kaos, via kjernesmerte og udekkede behov, til nye emosjonelle responser.\n\nEt godt rasjonale øker villigheten til å delta i opplevelsesorienterte oppgaver som stolarbeid, fokuseringsøvelser eller imaginering når markører dukker opp. Når du vender kort tilbake til denne forklaringen på viktige tidspunkt, minner du klienten om hvorfor det er meningsfullt å vende tilbake til følelsene selv når det kjennes uvant eller skremmende. Over tid støtter den delte forståelsen en sterkere allianse og dypere emosjonell engasjement i arbeidet.",
      "marker": "Klienten spør hvordan terapien virker, uttrykker skepsis eller frykt, eller nøler før en oppgave.",
      "aim": "Gi en kort, erfaringsnær forklaring som roer uro og motstand, skaper felles retning for arbeidet og gjør det tryggere å utforske grunnleggende følelser, kjernesmerte og udekkede behov.",
      "practiceFocus": "Forklar følelsesarbeid med enkelt språk som er direkte knyttet til akkurat denne klientens frykt, mål og behov for trygghet.",
      "commonMiss": "Å bli abstrakt, belærende eller for teoritung i stedet for samarbeidende og personlig relevant.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-explorations": {
      "name": "Empatiske utforskninger",
      "description": "Følg og utvid forsiktig det som allerede er til stede, slik at klienten kan bli i og utdype opplevelsen.",
      "summary": "Empatisk utforsking betyr å følge den emosjonelle kanten som er i ferd med å dukke opp hos klienten, og svare med fint avstemte gjentakelser og invitasjoner til å legge merke til litt mer. I stedet for å hoppe frem til tolkninger, råd eller løsninger, holder du deg ett lite steg bak eller ved siden av klientens egen opplevelse. Du speiler en del av det som er der, og inviterer dem til å dvele, sanse videre og utdype det de føler akkurat nå.\n\nUtforskingen beveger seg langs den stien klienten allerede har lagt ut i ordene sine, og holder seg innenfor det som er eksplisitt uttrykt fremfor å gå under eller forbi det. Det gir skjøre følelsestilstander mulighet til å styrkes og klargjøres uten å bli overveldet eller stengt ned. Dette er spesielt viktig når primære følelser og kjernesmerte begynner å vise seg, men fortsatt kjennes usikre eller blandede.\n\nVed å holde klientens tempo og møte prosessen med ærbødighet, verner du om tryggheten samtidig som kontakten med følelsene fordypes. Empatisk utforsking støtter en bevegelse fra ytre fortellinger og forklaringer til mer levende, kroppslig erfart tristhet, frykt, sinne, skam eller lengsel. Den forebygger også at dere hopper for raskt til reframing, meningstilskrivning eller løsninger, slik at kjernesmerte og udekkede behov får tre tydeligere frem og kan forandres gjennom nye emosjonelle responser.",
      "marker": "Følelser er tydelig på vei frem, men oppleves som skjøre, tentative eller bare delvis uttrykt, og klienten virker villig, men usikker på om de tør å gå dypere. Det er en «levende kant» der små invitasjoner og gjentakelser bringer frem mer følelse og mening.",
      "aim": "Holde og fordype kontakten med fremvoksende emosjonelt materiale slik at både adaptive og maladaptive primærfølelser kan komme fullt til uttrykk og bearbeides. Støtte en dosert, trygg utdyping av kjernesmerte og tilhørende udekkede behov, og legge grunnlaget for senere transformasjon.",
      "practiceFocus": "Hold deg ett lite skritt bak klientens ledende kant og inviter til litt mer kontakt med det som allerede er der.",
      "commonMiss": "Å hoppe for raskt til tolkning, intensitet eller innsikt før følelsen har fått folde seg ut.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-evocations": {
      "name": "Evokativ empati",
      "description": "Tilby levende språk og metaforer for å gjøre opplevelsen tydeligere og øke kontakten med følelsen.",
      "summary": "Evokativ empati brukes når klienten snakker om noe følelsesmessig ladet på en flat, distansert eller innsnevret måte. Du tilbyr korte, levende bilder eller sanselige beskrivelser som ser ut til å ligne det de kjenner – for eksempel «som en tung stein i brystet» eller «som en storm rett under overflaten». Slike uttrykk snakker til kropp og høyrehjerne og bygger bro mellom tankefortelling og følt erfaring.\n\nNår de er godt avstemt, øker disse bildene aktivering og emosjonell tilstedeværelse forsiktig, uten å presse klienten ut av toleransevinduet. Intellektualiserte fortellinger kan gradvis bli mer kroppslig opplevd, og primære følelser kommer nærmere bevisstheten. Ofte blir noe som har vært implisitt tydeligere – klienten kan si «ja, akkurat sånn kjennes det», eller merke tårer, stramming eller andre kroppssignaler.\n\nEvokasjoner må forbli tentative og samarbeidsorienterte, slik at klienten beholder eierskap til betydningen. Over tid hjelper denne måten å svare på klienten til å utvikle et rikere, mer kroppsforankret språk for sitt indre liv, og styrker både emosjonell innsikt og kapasiteten til å bearbeide følelser.",
      "marker": "Klienten forteller om smertefulle eller viktige hendelser på en flat, distansert eller svært kognitiv måte, med lite synlig affekt eller kroppsbevissthet, samtidig som du aner at følelsene ligger nær – for eksempel gjennom små stemmebrudd, pauser eller korte glimt av følelsesuttrykk. De kan si at de «sånn halvveis» kjenner noe, men ikke helt får tak i det.",
      "aim": "Øke den emosjonelle kontakten ved å tilby levende, resonante bilder som gjør implisitte følelser mer tydelige og kroppslig erfarte. Støtte et skifte fra å beskrive på avstand til å være mer direkte i opplevelsen, slik at primære følelser og kjernesmerte kan nås og bearbeides.",
      "practiceFocus": "Tilby levende, sanselig språk som hjelper nær-overflate-følelsen til å komme mer til live i kroppen.",
      "commonMiss": "Å bruke språk som kjennes poetisk, importert eller mer dramatisk enn klientens faktiske opplevelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-conjectures": {
      "name": "Empatiske antakelser",
      "description": "Tilby forsiktige gjetninger om opplevelser som ligger nær overflaten, for å hjelpe det usagte frem.",
      "summary": "Empatiske antakelser er tentative hypoteser om hva klienten kan føle rett under det de sier. Du lytter til stemme, ansiktsuttrykk, kropp og kontekst, og forsøker forsiktig å sette ord på mulig smerte, frykt, skam eller lengsel som ennå ikke er fullt uttalt. Du markerer tydelig at du kan ta feil – med uttrykk som «jeg lurer på om…» eller «kan det være at…» – slik at klienten står fritt til å bekrefte, justere eller avkrefte.\n\nI motsetning til empatisk utforsking, som utvider det som allerede er klart i bevisstheten, strekker antakelser seg forsiktig under eller bak det som sies for å gi foreløpige ord til det som fortsatt er uklart. Når du treffer, opplever klienten ofte lettelse og gjenkjennelse – som å bli dypt sett – og det blir lettere å eie og uttrykke egen sannhet. Det kan også hjelpe dem å gå fra sekundære forsvar som spøk, irritasjon eller vaghet til mer sårbare, primære følelser.\n\nSelv når antakelsen bommer, vil klientens korrigering som regel tydeliggjøre hva som faktisk kjennes sant og dermed bevege prosessen videre. Denne intervensjonen er særlig nyttig når klienten sirkler rundt kjernesmerte eller når viktige følelser bare slipper gjennom i bruddstykker. Brukt varsomt og med respekt kan empatiske antakelser gi raskere kontakt med spesifikke, maladaptive følelser og de udekkede behovene som ligger under, uten at terapeuten overtar meningsskapingen.",
      "marker": "Hint om dypere følelser viser seg gjennom tonebrudd, flyktige uttrykk, unngåelse eller uavsluttede fortellinger, men klienten navngir ikke følelsene og blir ikke værende i dem. De skifter raskt tema eller glatter over når noe sårt begynner å vise seg.",
      "aim": "Hjelpe nær-overflate, usagt emosjonell erfaring til å ta tydeligere form slik at klienten kan eie, utforske og arbeide med den. Legge til rette for overganger fra defensive eller sekundære reaksjoner til mer direkte kontakt med primærfølelser og kjernesmerte.",
      "practiceFocus": "Gi en myk, tentativ gjetning om følelsen eller behovet som ligger rett under overflaten.",
      "commonMiss": "Å høres sikker ut, lese tanker eller hoppe for langt utover det klienten faktisk har vist.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "staying-in-contact-intense-affect": {
      "name": "Være i kontakt med intens affekt",
      "description": "Støtt klienten i å være trygt til stede i sterk følelsesmessig aktivering slik at følelsen kan få rom, gi mening og forandres uten overveldelse.",
      "summary": "Å være i kontakt med intens affekt handler om å hjelpe klienten å ri ut bølger av sterke følelser uten å stenge ned eller bli oversvømt utover det de tåler. Når store følelser som sorg, raseri, panikk eller skam skyter i været, senker du tempoet, hjelper klienten å jorde seg og tilbyr et stødig, empatisk nærvær. Du kan rette oppmerksomheten mot kropp, pust eller rommet, slik at én fot er i her-og-nå mens den andre er i følelsesopplevelsen.\n\nDu normaliserer intensiteten, bekrefter at følelsene gir mening, og formidler at du tåler og blir værende med dem. Samtidig titrerer du eksponeringen ved å invitere klienten til å beskrive små biter av opplevelsen, eller ta korte pauser og vende tilbake igjen, for å unngå dissosiasjon eller kollaps.\n\nDenne reguleringen gjør at maladaptive primærfølelser og kjernesmerte kan komme fullt frem og uttrykkes uten å retraumatisere. Det gir ofte en kraftig korrigerende emosjonell erfaring: klienten lærer at de kan føle dypt og likevel være trygge og i kontakt med et annet menneske. Når bølgen har roet seg, hjelper du dem å reflektere over hva følelsen sier om behov, grenser eller verdier. Over tid bygger dette kapasitet til å tåle og regulere sterke følelser også utenfor terapien.",
      "marker": "Affekten eskalerer brått til hulking, skjelving, raseri, panikk, nummenhet eller skamkollaps, og klienten ser ut til å risikere å bli overveldet, dissosiere eller trygle om å stoppe. Pusten blir kanskje grunn, språket uorganisert eller blikket fjernt.",
      "aim": "Gi ramme, jording og empatisk innstilling slik at intense emosjonelle tilstander kan erfares og bearbeides i stedet for å unngås eller stenges ned. Hjelpe klienten å holde seg innenfor toleransevinduet samtidig som det er nok aktivering til at kjernesmerte kan komme frem, forstås og forandres.",
      "practiceFocus": "Jord først, dosér følelsen, og hold ett bein i rommet mens ett bein blir værende i emosjonen.",
      "commonMiss": "Enten å la affekten oversvømme klienten eller å stenge den ned før den emosjonelle meningen får komme fram.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "self-disclosure": {
      "name": "Selvavsløring",
      "description": "Del korte, relevante glimt av din indre opplevelse på en tydelig avgrenset måte som er til for klientens prosess – ikke din egen.",
      "summary": "Selvavsløring i opplevelsesorientert terapi innebærer å dele en kort, ekte bit av din umiddelbare indre opplevelse når det klart tjener klienten. Det kan være å sette ord på hvordan du er emosjonelt berørt, å anerkjenne hvordan klienten virker inn på deg, eller å eie en misattunering som har bidratt til et brudd i alliansen. Utsagnene holdes korte, nøkterne og uten forsvar, og formuleres slik at de støtter – ikke overskygger – klientens erfaring.\n\nBrukt til validering kan selvavsløring bekrefte at klientens smerte er reell og berører andre, og motvirke indre budskap om å være «for mye» eller «ikke troverdig». I alliansearbeid modellerer det ansvarlighet og sårbarhet: konflikten møtes med forståelse og reparasjonsvilje fremfor skyld og tilbaketrekning.\n\nSelvavsløring kan også hjelpe klienter som tviler på at noen kan bry seg virkelig, ved å gi en korrigerende erfaring av å ha emosjonell innvirkning. Noen ganger åpner det også for at klienten kan kjenne mer av sine egne primære følelser ved å legge merke til hvordan du blir berørt. Etter at du har delt, vender du raskt fokuset tilbake til klienten og inviterer deres reaksjon. Over tid kan nøktern, gjennomtenkt selvavsløring fordype tillit og modellere sunn emosjonell åpenhet og relasjonell reparasjon.",
      "marker": "Klienten ber direkte eller indirekte om åpenhet fra terapeuten: et personlig spørsmål, et spørsmål om terapiprosessen, bekymring for din interesse eller kompetanse, en reaksjon på noe du gjorde, eller usikkerhet om omsorg, grenser eller innvirkning. Et kort, ærlig og tydelig avgrenset svar fra deg vil trolig kunne klargjøre din posisjon, styrke tillit eller validere klientens betydning før fokuset vendes tilbake til klienten.",
      "aim": "Bruke kort, nøye valgt åpenhet til å styrke den terapeutiske relasjonen, validere klientens emosjonelle virkelighet eller reparere misattuneringer. Modellere kongruent følelsesuttrykk samtidig som klientens opplevelse forblir sentrum i arbeidet.",
      "practiceFocus": "Del bare en kort, umiddelbar bit av din indre respons som tydelig tjener klientens prosess, og vend så raskt tilbake til klienten.",
      "commonMiss": "Å gli over i biografi, forsikring eller terapeut-sentrert prat som gjør øyeblikket mindre om klienten.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "marker-recognition-chairwork": {
      "name": "Gjenkjenne markører og sette opp stolarbeid",
      "description": "Gjenkjenn markører for selvkritiske og selvavbrytende splits, samt uferdig arbeid, og sett deretter opp målrettet to-stols- eller tom-stol-arbeid på en trygg måte.",
      "summary": "I denne øvelsen betyr markørgjenkjenning å høre tre bestemte typer oppgavemarkører: en selvkritisk eller selv-evaluerende split, en selvavbrytende split, eller uferdig arbeid med en betydningsfull annen. Når en av disse markørene viser seg, setter du ord på den kort og gir en enkel, opplevelsesnær begrunnelse for hvorfor en to-stols-dialog (ved kritiker- eller avbryter-splits) eller en tom-stol-dialog (ved uferdig arbeid) kan være hjelpsom.\n\nDeretter setter du opp oppgaven konkret: plasserer stolene, avklarer hvem eller hva hver stol representerer, og gir enkle førsteinstruksjoner, som å la kritikeren si noen få direkte linjer eller å se den andre for seg i stolen og fortelle hva det kostet. Du følger med på beredskap, tempo og aktivering, slik at oppgaven oppleves samarbeidsbasert og ikke presset fram.\n\nPå dette stadiet er målet ikke å fullføre hele oppgaven, men å starte den tydelig nok til at den relevante emosjonelle prosessen blir levende og organisert. Et godt oppsett hjelper klienten til å eie hvordan de kritiserer eller avbryter seg selv, eller til å begynne å henvende seg til uløst smerte knyttet til en annen person. Etter de første replikkene holder du strukturen klar, det emosjonelle fokuset spesifikt, og klienten godt nok jordet til å kunne fortsette.",
      "marker": "Markører inkluderer gjentatte selvangrep eller bekymringsspiraler som fungerer som en indre kritiker, tydelige tegn på at klienten stopper eller blokkerer egne følelser eller uttrykk, og emosjonelt ladet, uferdig arbeid med en betydningsfull annen. Klienten er nok involvert til å kunne prøve en kort to-stols- eller tom-stol-enactment.",
      "aim": "Sette opp riktig stoloppgave på riktig tidspunkt, slik at den sentrale emosjonelle prosessen blir tydelig, organisert og mulig å arbeide med. Hjelpe klienten inn i kontakt med kjernesmerte, udekkede behov eller selvavbrytelse på en strukturert måte som senere kan utdypes til mer gjennomgripende emosjonell endring.",
      "practiceFocus": "Navngi markøren, gi en kort begrunnelse, sett opp stolene konkret, og hold første runde enkel og tydelig.",
      "commonMiss": "Å sette i gang stolarbeid uten tydelig beredskap, en klar markør eller spesifikke nok instrukser.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "alliance-repair": {
      "name": "Reparasjon av alliansen",
      "description": "Legg merke til og adresser brudd i alliansen med empati, ansvarlighet og samarbeid for å gjenopprette trygghet og tillit.",
      "summary": "Reparasjon av alliansen handler om øyeblikk der klienten føler seg misforstått, såret, avfeid eller distansert fra deg. Du legger først merke til og setter ord på mulige bruddsignaler – som tilbaketrekning, irritasjon, sarkasme, uteblitte timer eller en markert endring i tone.\n\nDeretter inviterer du klienten til å fortelle hvordan de opplever deg og terapien, uten at du går i forsvar. Du gjør det tydelig at følelsene deres om både prosessen og terapeuten er velkomne. Du lytter åpent, validerer virkningen på dem og, der det er passende, anerkjenner din egen del eller en misattunering. Det kan innebære å beklage, justere rammen eller klargjøre intensjoner – alltid med klientens emosjonelle realitet som midtpunkt.\n\nNår du går inn i dette arbeidet, gir du en korrigerende emosjonell erfaring: konflikt og skuffelse møtes med forståelse, ansvarlighet og fortsatt kontakt, ikke med skyldlegging eller avvisning. Ofte berører dette klientens tilknytningssår og udekkede behov for å bli hørt, tatt på alvor og ikke få skylden for relasjonell uro. Når klienten kjenner seg gjenforstått og gjenknyttet, mykner som regel sekundær irritasjon eller tilbaketrekning, og mer sårbar primærfølelse kan komme frem igjen. Reparasjon gjenoppretter det trygge utgangspunktet som trengs for å våge seg tilbake til kjernesmerte og dypt emosjonelt arbeid, og modellerer sunn konflikthåndtering som klienten kan ta med seg inn i andre relasjoner.",
      "marker": "Klienten viser tegn til avstand, irritasjon eller mistillit mot deg – for eksempel «du forstår meg ikke», kjølighet, økt gardering eller at de uteblir fra timer – eller du merker en tydelig endring i stemning etter en intervensjon som ikke traff. De kan gi direkte eller indirekte klager på terapien eller på deg som terapeut.",
      "aim": "Gjenopprette trygghet, tillit og samarbeid ved å ta imot bruddsignaler med empati, validere klientens reaksjoner og eie din del der det er relevant. Fjerne hindringer i relasjonen slik at klienten igjen kan våge seg inn i sårbare primærfølelser og kjernesmerte innenfor en trygg, terapeutisk ramme.",
      "practiceFocus": "Ta imot virkningen på klienten, valider den, ei din del, og spør hva som ville hjelpe nå.",
      "commonMiss": "Å forklare intensjonen din for tidlig, gå i forsvar eller hoppe tilbake til teknikk før reparasjonen har landet.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    },
    "empathic-refocusing": {
      "name": "Empatisk refokusering",
      "description": "Navngi beskyttelsen og inviter mildt tilbake når klienten beveger seg bort fra det som er sårt.",
      "summary": "Legg merke til når klienten går over i analyser, spøk eller digresjoner for å slippe unna det ømme punktet. Anerkjenn at denne bevegelsen har vært en viktig beskyttelse, og inviter varsomt oppmerksomheten tilbake til det som så vidt begynte å komme. Slik hjelper du klienten å legge merke til egne unngåelsesmønstre, samtidig som arbeidet holdes forankret i de primære følelsene og kjernesmerten heller enn i sekundære reaksjoner.",
      "marker": "Klienten går over i spøk, analyse, digresjoner eller bagatellisering når følelsen nærmer seg.",
      "aim": "Anerkjenne beskyttelsen og varsomt lede oppmerksomheten tilbake til den mest meningsfulle, primære følelsen, slik at klienten kan være i den lenge nok til å bearbeide og forandre den.",
      "practiceFocus": "Sett ord på beskyttelsen med varme og inviter tilbake til følelsen som nettopp forsvant.",
      "commonMiss": "Å konfrontere forsvaret for hardt eller høres irritert ut over klientens unngåelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg heter Sara. Jeg er vel her fordi kveldene ikke henger sammen etter bruddet. På jobb fungerer jeg - frister, møter, kaffe med kollegaer - men når jeg kommer hjem, sjekker jeg mobilen hele tiden og leser gamle meldinger om igjen. Jeg lurer på om jeg var for masete, for intens, et eller annet. Venner sier jeg burde komme meg ut, og jeg sier bare at jeg er opptatt. Jeg sover nesten ikke uten noe på øret. Det er flaut å være så satt ut, så jeg vil egentlig bare lære å slutte å spinne."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg heter Michael. Jeg må få kontroll på temperamentet. Kona sier hun går på nåler, og på jobb sier folk at jeg virker skremmende. Jeg merker det ikke der og da; noen stiller spørsmål ved en beslutning, og så går jeg rett i å rydde opp, sikkert litt for høyt. Etterpå oppfører alle seg som om jeg er problemet. Jeg vokste opp med en far som ikke hadde mye tålmodighet for unnskyldninger - man leverte, ellers fikk man høre det. Jeg vil ikke bli behandlet som en eller annen sint fyr, men jeg kan ikke fortsette med disse eksplosjonene."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg heter Jason. Det er mest møtene på jobb. Hodet blir helt blankt, jeg øver på én setning, og så rekker noen andre å si noe før meg, og da føler jeg meg dum som ventet. Jeg dropper lønningspils og sånt fordi jeg ikke vet hva jeg skal si, og jeg kan bruke en time på å skrive om en enkel melding. Jeg vet at det høres lite ut, men det tar hele dagen min. Jeg vil bare slutte å fryse fast, og kanskje slippe å grue meg til alle samtaler."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. Jeg er her fordi jeg ikke fungerer så bra som folk tror. Jeg kan gå en tolv timers vakt og virke helt profesjonell, og så sitte i bilen utenfor hjemme fordi det føles for mye å gå inn. Enkelte lyder setter meg ut; andre ganger blir jeg bare helt blank. Jeg liker ikke å snakke om fortiden. Jeg har nok av den i hodet. Jeg vil først og fremst at panikken og det med å drikke om kveldene skal stoppe."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg heter Carlos. Folk sier hele tiden at jeg går fra null til hundre. Jeg tror ikke de skjønner hvordan det er når noen ser på deg som om du er en vits. Kona sier jeg skremmer henne, og ja, jeg slo hull i garasjeveggen forrige måned. På jobb kan jeg styre et helt lag uten problem, helt til en fyr begynner å kjekke seg. Jeg trenger ikke en preken om sinne. Jeg trenger å ikke miste familien min på grunn av det."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg heter Nina. Jeg vet ikke engang hvordan jeg skal si dette uten å høres dramatisk ut. Jeg er utslitt hele tiden. Jeg sier ja til alt - skolen, guttene, moren min, tjenester for kollegaer - og så får jeg hodepine, glemmer ting, og noen ganger føles det som om jeg skal besvime. Hvis jeg ber om hjelp, tenker jeg med én gang at jeg burde klart mer selv. Jeg smiler videre fordi det er enklere enn å forklare. Jeg trenger en måte å ikke gå helt i oppløsning på."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg heter Aisha. Jeg vet ikke om dette kommer til å hjelpe. Folk sier alltid at de er der, og så blir de borte. Hvis noen ikke svarer på en melding, klarer jeg ikke å tenke på noe annet; jeg ringer, sender altfor mange meldinger, gjør ting jeg vet ser helt sykt ut. Kuttingen er ikke problemet sånn alle skal ha det til; det er det som stopper ting fra å bli verre. Jeg trenger at noen ikke dømmer meg eller bare sier at jeg må roe meg."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "David. Kona mi mente jeg måtte komme. Visstnok er jeg «kald» og «umulig å snakke med». Jeg leder en avdeling med et press de fleste ikke aner noe om, så nei, jeg har ikke alltid tålmodighet til endeløse følelsesrapporter. Ordet narsissist ble kastet ut, noe jeg synes er både absurd og temmelig lat. Jeg kan innrømme at jeg blir skarp når folk er inkompetente eller illojale. Jeg vil at dette skal være praktisk, ikke enda en runde med å legge skylden på meg fordi jeg er den eneste voksne i rommet."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Marcus. Jeg har ikke så mye å si. Søvnen er dårlig. Jeg holder meg for meg selv. Jobben går greit fordi det er stille og jeg vet hva jeg skal gjøre. Nettene er verre. Det dukker opp minner, både fra utenlands og andre steder. Jeg vil ikke gå inn i detaljer. Folk stiller spørsmål, og så ser de annerledes på deg. Jeg er her fordi veterantjenesten maser, og fordi det å sitte alene hele natten ikke funker lenger."
        }
      }
    }
  }
};

export const STATEMENT_TRANSLATIONS = {
  "no": {
    "dp_therapist-self-awareness_case-sara_01": {
      "text": "[På gråten] Jeg tenker hele tiden at jeg burde vært over ham nå – kan vi hoppe over gråtingen?",
      "suggestion": "[Internt] Legg merke til draget mot å være enig og gå videre; forleng utpusten. [Meta] En del av deg prøver hardt å løpe fra gråten; jeg vil senke tempoet nok til å høre hva som fortsatt gjør vondt."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      "text": "[Flau] Beklager, jeg vet at jeg stadig tar ham opp; du har sikkert klienter med virkelige problemer.",
      "suggestion": "[Internt] Mykne trangen til å forsikre; ha sammenligningen i sikte. [Meta] Du gjør allerede plassen din her mindre; legg merke til hva som skjer når smerten din får rom uten å konkurrere."
    },
    "dp_therapist-self-awareness_case-sara_03": {
      "text": "[På gråten] Hunden min kryper opp i sengen når jeg gråter, og noen ganger tenker jeg at han elsker meg bedre enn mennesker gjør.",
      "suggestion": "[Internt] Legg merke til ømhet og redningstrang; la varmen informere deg uten å ta over. [Meta] Han har vært en stødig følgesvenn gjennom smerte; vi kan legge merke til hvordan det er å ta imot en så enkel form for nærvær."
    },
    "dp_therapist-self-awareness_case-sara_04": {
      "text": "[Lavmælt] I natt drømte jeg at du var i den gamle leiligheten min og hjalp meg å pakke esker, og jeg våknet flau over at du var med i drømmen.",
      "suggestion": "[Internt] Legg merke til eventuell flauhet, smiger eller trang til å tolke for raskt; hold deg forankret. [Meta] Drømmen tar meg tett inn i et gammelt sted i livet ditt, og det gir mening at det kjennes utsatt å si det her."
    },
    "dp_therapist-self-awareness_case-sara_05": {
      "text": "[Håpefull] Jeg bestilte denne timen fordi jeg stadig tenker at jeg kanskje kan få livet mitt tilbake, selv om det høres dramatisk ut.",
      "suggestion": "[Internt] Legg merke til håpet og presset om å levere; finn stødighet i pusten. [Meta] Det finnes en håpefull del som strekker seg mot livet igjen, og jeg vil at vi holder det varsomt uten at du må prestere bedring."
    },
    "dp_therapist-self-awareness_case-sara_06": {
      "text": "[Nølende] Vennene mine sier hele tiden at jeg burde begynne å date igjen, og jeg vil at du skal si om det er en forferdelig idé.",
      "suggestion": "[Internt] Legg merke til draget mot å gi råd; hold nysgjerrigheten. [Meta] Det gir mening at du vil ha retning; vi kan senke tempoet rundt hva dating ville bety før vi bestemmer noe."
    },
    "dp_therapist-self-awareness_case-sara_07": {
      "text": "[Skamfull] Jeg hater at jeg vil at du skal sjekke inn med meg mellom timene; det kjennes trengende.",
      "suggestion": "[Internt] Fang opp draget mot å berolige eller tilby ekstra kontakt; hold rammen vennlig. [Meta] Ønsket om at noen sjekker inn vekker skam; vi prøver å forstå lengselen uten å gjøre den feil."
    },
    "dp_therapist-self-awareness_case-sara_08": {
      "text": "[Flau] Hvis jeg gråter her inne, kommer jeg til å føle meg patetisk foran deg.",
      "suggestion": "[Internt] Legg merke til trangen til å berolige; senk tempoet. [Meta] En del av deg forventer at tårer blir ydmykende her; vi kan gå sakte nok til at du beholder styringen."
    },
    "dp_therapist-self-awareness_case-sara_09": {
      "text": "[Engstelig] Jeg følger med på ansiktet ditt hele tiden, for jeg vil ikke gjøre deg utilpass.",
      "suggestion": "[Internt] Legg merke til at klienten prøver å ta vare på deg; stem inn igjen. [Meta] Du sjekker om jeg tåler deg; jeg vil være her sammen med deg uten at du må passe på meg."
    },
    "dp_therapist-self-awareness_case-sara_10": {
      "text": "[Stille] Jeg flyttet etter bruddet, og hver eske jeg pakker ut får meg til å lure på hvorfor jeg gjør alt dette alene.",
      "suggestion": "[Internt] Legg merke til tristhet og eventuell redningstrang; hold nær kontakt. [Meta] Det vanlige arbeidet med å pakke ut viser deg igjen og igjen ensomheten i å gjøre dette uten ham."
    },
    "dp_therapist-self-awareness_case-michael_01": {
      "text": "[Starten av første time] Kona mi sier at jeg trenger terapi, og jeg håper faktisk at du kan gi meg noen verktøy før jeg ødelegger mer hjemme.",
      "suggestion": "[Internt] Legg merke til draget mot å bli eksperten med verktøy; hold samarbeidet. [Meta] Du vil ha noe praktisk før mer blir skadet hjemme, og vi kan la det alvoret være med i rommet."
    },
    "dp_therapist-self-awareness_case-michael_02": {
      "text": "[Defensiv] Den forrige coachen min ga meg pusteverktøy på to timer; jeg håper ikke dette bare blir barndomsprat.",
      "suggestion": "[Internt] Legg merke til draget mot å konkurrere med den forrige hjelperen eller bevise metoden din; finn tilbake til deg selv. [Meta] Det betyr noe at dette kjennes nyttig. Vi kan holde praktiske verktøy i sikte samtidig som vi sjekker om de når øyeblikkene som tar overhånd."
    },
    "dp_therapist-self-awareness_case-michael_03": {
      "text": "[Skamfull] Sønnen min spurte om jeg var sint på ham etter at jeg kjeftet, og jeg ville at noen skulle si at jeg ikke hadde ødelagt alt.",
      "suggestion": "[Internt] Legg merke til skyldfølelsen og ønsket om å berolige ham raskt; mykne uten å redde. [Meta] Det øyeblikket med sønnen din traff hardt, og en del av deg vil vite at skaden ikke er varig."
    },
    "dp_therapist-self-awareness_case-michael_04": {
      "text": "[Anspent] Sjefen min rettet én linje i rapporten min, og jeg brukte hele kjøreturen hjem på å spille det av som om jeg hadde mislyktes.",
      "suggestion": "[Internt] Legg merke til prestasjonspresset og eventuell trang til å normalisere; hold deg nær. [Meta] Én korrigering fortsatte å lyde som nederlag lenge etter at møtet var over."
    },
    "dp_therapist-self-awareness_case-michael_05": {
      "text": "[Defensiv] Hvis jeg beklager først, tror hun at hun har vunnet, og jeg ser svak ut.",
      "suggestion": "[Internt] Kjenn kjeven; slipp trangen til å overtale. [Meta] Beklagelsen kjennes som overgivelse; kanskje vi senker tempoet ved hva svak ville bety akkurat da."
    },
    "dp_therapist-self-awareness_case-michael_06": {
      "text": "[Klein] Jeg er ikke vant til å snakke sånn, så hvis jeg blir stille, betyr det ikke at jeg ikke bryr meg.",
      "suggestion": "[Internt] Legg merke til ømhet og ønsket om å gjøre det lettere; hold tempoet voksent. [Meta] Stillheten kan være måten du holder deg i noe uvant på, ikke mangel på omsorg."
    },
    "dp_therapist-self-awareness_case-michael_07": {
      "text": "[Fast] Hvis vi ikke fikser temperamentet mitt raskt, føler jeg at jeg mislykkes i terapi også.",
      "suggestion": "[Internt] Legg merke til prestasjonspress; mykne hastverket. [Meta] Jeg hører hvor sterkt du vil at dette skal virke. Vi kan bruke presset som informasjon om hva som blir uutholdelig."
    },
    "dp_therapist-self-awareness_case-michael_08": {
      "text": "[Defensiv] Faren min var streng, men det var bare sånn menn lærte disiplin der jeg vokste opp.",
      "suggestion": "[Internt] Legg merke til antakelser om maskulinitet eller kultur; vær respektfull og nysgjerrig. [Meta] Den regelen om disiplin har en historie for deg, og jeg vil verken avfeie den eller la den stenge døren for hva den kostet."
    },
    "dp_therapist-self-awareness_case-michael_09": {
      "text": "[Anspent] Folk på jobb er veike; hvis det plager deg, skjønner du kanskje ikke verdenen min.",
      "suggestion": "[Internt] Legg merke til dom eller avstand; åpne nysgjerrigheten igjen. [Meta] Du tester om jeg kan forstå den verdenen uten å dømme den; vi ser på hva svakhet signaliserer for deg før vi bestemmer hva det betyr."
    },
    "dp_therapist-self-awareness_case-michael_10": {
      "text": "[Anspent og sint] Hvis jeg slipper opp bare litt, tråkker folk over meg, og jeg ser svak ut.",
      "suggestion": "[Internt] Mykne skuldrene; ro ned pusten. [Meta] Frykten for å bli tråkket på er sterk; vi ser på øyeblikket du kjenner deg underlegen, så du kan styre det."
    },
    "dp_therapist-self-awareness_case-jason_01": {
      "text": "[Starten av første time] Jeg er lettet over å være her, men jeg er også redd for å kaste bort timen ved ikke å vite hva jeg skal si.",
      "suggestion": "[Internt] Legg merke til ønsket om å strukturere alt for ham; mykne blikket. [Meta] Både lettelsen og presset er her; vi kan la det å ikke vite få være en del av timen i stedet for en feil."
    },
    "dp_therapist-self-awareness_case-jason_02": {
      "text": "[Blank] Jeg blir blank igjen, og nå er jeg redd du kjeder deg.",
      "suggestion": "[Internt] Legg merke til ønsket om å forsikre raskt; tåle stillheten. [Meta] Blankheten kommer sammen med frykten for at jeg forsvinner i den; legg merke til ett signal som forteller deg at jeg kanskje kjeder meg."
    },
    "dp_therapist-self-awareness_case-jason_03": {
      "text": "[Nølende] Ikke få meg til å lukke øynene; jeg føler meg latterlig og iakttatt når jeg prøver.",
      "suggestion": "[Internt] Respekter grense; reduser intensitet. [Meta] Vi kan ha øynene åpne og ta et mindre steg, kanskje bare kjenne føttene mens du beholder styringen."
    },
    "dp_therapist-self-awareness_case-jason_04": {
      "text": "[Lang pause] Jeg beklager hver gang jeg blir stille, fordi jeg antar at stillheten er pinlig for deg.",
      "suggestion": "[Internt] Legg merke til trangen til å redde; hold varmen. [Meta] Beklagelsen forteller meg at stillhet kjennes blottstilt, som om du må beskytte meg mot den."
    },
    "dp_therapist-self-awareness_case-jason_05": {
      "text": "[Bekymret] Jeg vet egentlig ikke hvordan terapi skal fungere; hva om det bare blir verre av å snakke om dette?",
      "suggestion": "[Internt] Legg merke til trangen til å forklare eller berolige for raskt; senk tempoet. [Meta] Det gir mening at du vil vite hva du går inn i. Vi kan gjøre prosessen tydeligere og gå sakte nok til å merke om det å snakke begynner å bli for mye."
    },
    "dp_therapist-self-awareness_case-jason_06": {
      "text": "[Stille og skamfull] Jeg hoppet over øvelsene igjen, så jeg har sikkert ødelagt dette.",
      "suggestion": "[Internt] Mykne trangen til å undervise; jevn tone. [Meta] Takk for at du sier det. Vi merker skammen som kommer med «igjen» før vi gjør det til lekser."
    },
    "dp_therapist-self-awareness_case-jason_07": {
      "text": "[Stille og skamfull] Jeg føler meg dum når du spør om følelser, som om jeg allerede burde vite svaret.",
      "suggestion": "[Internt] Mykne stemmen; sett parentes rundt behovet for å forsikre. [Meta] Spørsmålet lander som en test; kanskje vi navngir ett lite signal sammen i stedet for en stor følelse."
    },
    "dp_therapist-self-awareness_case-jason_08": {
      "text": "[Engstelig] Jeg flyttet hit for jobb, og folk snakker som om de allerede kjenner reglene. Jeg føler meg bakpå før jeg åpner munnen.",
      "suggestion": "[Internt] Legg merke til eventuell trang til å coache sosiale ferdigheter; bli ved fremmedfølelsen. [Meta] Dette nye stedet gjør at du kjenner deg ute av takt før du rekker å bli med."
    },
    "dp_therapist-self-awareness_case-jason_09": {
      "text": "[Håpefull, så flau] En del av meg tror at terapi faktisk kan hjelpe, og så føler jeg meg dum for å ha fått håp.",
      "suggestion": "[Internt] Legg merke til varme for håpet hans og trangen til å beskytte det; hold deg stødig. [Meta] Håpet kommer frem, og så prøver flauheten å dekke det til før det kan bli skuffet."
    },
    "dp_therapist-self-awareness_case-jason_10": {
      "text": "[Blank] Jeg sier hele tiden at det går fint så du ikke skal merke hvor flau jeg er.",
      "suggestion": "[Internt] Kjenn føttene; respekter dekningen; ikke grav. [Meta] «Fint» jobber hardt for å skjule flauheten; vi kan la det beskytte deg mens vi merker hva det vokter."
    },
    "dp_therapist-self-awareness_case-laura_01": {
      "text": "[Skamfull] Jeg prøvde å lage mat til meg selv og ble stående og se på stekepannen som et barn som trengte at noen sa hva jeg skulle gjøre.",
      "suggestion": "[Internt] Legg merke til ømhet og redningstrang; bli ved den voksne skammen hennes. [Meta] Den vanlige oppgaven ble til en vond følelse av å være liten og ute av stand til å klare seg."
    },
    "dp_therapist-self-awareness_case-laura_02": {
      "text": "[Trist] Eksen min kom innom med post, og etter at han gikk, gråt jeg over en person jeg visstnok er ferdig med.",
      "suggestion": "[Internt] Legg merke til draget mot å trøste eller få henne videre; senk tempoet. [Meta] Det korte besøket åpnet sorg som fortsatt er der, selv om en del av deg mener den burde være ferdig."
    },
    "dp_therapist-self-awareness_case-laura_03": {
      "text": "[Anspent og på vakt] Jeg vil helst ikke snakke om fortiden; jeg kjenner at jeg allerede begynner å stenge av.",
      "suggestion": "[Internt] Respekter grensen; slipp trykket. [Meta] Vi kan holde oss i nåtiden og bruke avstengningen som signal for hvor sakte vi må gå."
    },
    "dp_therapist-self-awareness_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg drakk to glass vin før jeg kom hit, for ellers visste jeg at jeg ikke kom til å snakke.",
      "suggestion": "[Internt] Legg merke til bekymring uten å skamme eller bli kontrollerende; hold deg varm og tydelig. [Meta] Vinen hjalp deg inn døren, og samtidig må vi legge merke til hvordan den påvirker trygghet og kontakt her."
    },
    "dp_therapist-self-awareness_case-laura_05": {
      "text": "[Fjern] Når du høres vennlig ut, leter en del av meg etter haken.",
      "suggestion": "[Internt] Mykne ansiktet; utvid vinduet; rom mistillit. [Meta] Ikke rart du leter etter en hake etter utrygg nærhet; vi kan la den beskyttende delen styre tempoet."
    },
    "dp_therapist-self-awareness_case-laura_06": {
      "text": "[Anspent og på vakt] Kanskje dette bare er hjernekjemi, og jeg kaster bort tiden din ved å snakke.",
      "suggestion": "[Internt] Slipp trangen til å diskutere biologi; hold samarbeid. [Meta] Biologi kan være en del av dette, og samtidig lurer du på om smerten din kan nås her; vi holder oss nær den tvilen."
    },
    "dp_therapist-self-awareness_case-laura_07": {
      "text": "[Bekymret] Før vi begynner, trenger jeg å vite om du kommer til å få meg til å snakke om ting før jeg er klar.",
      "suggestion": "[Internt] Legg merke til ansvarspresset; senk tonen. [Meta] Du trenger å vite at jeg ikke kommer til å skynde på deg, og vi kan gjøre klarhet til noe vi følger sammen."
    },
    "dp_therapist-self-awareness_case-laura_08": {
      "text": "[Langsomt og flatt] Når terapeuter presser, stenger jeg ned, og så later de som om jeg gjør motstand.",
      "suggestion": "[Internt] Legg merke til ønsket om å bevise at du ikke vil presse; ta imot advarselen. [Meta] Det høres ensomt og urettferdig ut. Jeg vil at vi bruker nedstenging som informasjon om tempo, ikke som et problem i deg."
    },
    "dp_therapist-self-awareness_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg tror jeg er ødelagt på en måte du til slutt blir lei av.",
      "suggestion": "[Internt] Legg merke til sorg og eventuell redningstrang; hold deg stødig. [Meta] Den ødelagte følelsen forventer allerede at jeg blir lei av deg; jeg vil sitte nær den forventningen uten å krangle med den."
    },
    "dp_therapist-self-awareness_case-laura_10": {
      "text": "[Flatt og på vakt] Å holde alt under kontroll kjennes tryggere enn å finne ut hva som ligger under.",
      "suggestion": "[Internt] Respekter beskytteren; vær mild. [Meta] Kontroll har holdt deg trygg; vi kan la den vise oss hva som kjennes for farlig å avdekke."
    },
    "dp_therapist-self-awareness_case-carlos_01": {
      "text": "[Starten av første time] Før vi går inn i dette, må jeg vite om du forstår hvorfor respekt betyr så mye i familien min.",
      "suggestion": "[Internt] Legg merke til kulturelle antakelser eller trangen til å bevise kompetanse; vær ydmyk. [Meta] Respekt har familiemening her, og jeg vil forstå det før vi bestemmer hva som må endres."
    },
    "dp_therapist-self-awareness_case-carlos_02": {
      "text": "[Defensiv] Faren min ville sagt at terapi er for folk som ikke klarer å håndtere sitt eget, og jeg hører ham når jeg sitter her.",
      "suggestion": "[Internt] Legg merke til eventuell defensivitet om terapi; respekter lojalitetsbindingen. [Meta] Stemmen hans er med deg i rommet og dømmer dette før du rekker å finne ut hva det kan gi."
    },
    "dp_therapist-self-awareness_case-carlos_03": {
      "text": "[Anspent og sint] Hvis jeg blir sårbar, ser folk en svakhet og bruker den mot meg.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å undervise; stem inn på beskyttelsen. [Meta] Styrke har holdt deg trygg; vi undersøker hva sårbarhet ville blottstille før vi ber deg nærme deg den."
    },
    "dp_therapist-self-awareness_case-carlos_04": {
      "text": "[Skamfull] Jeg prøvde å fikse vasken og gjorde det verre, og jeg hatet å trenge hjelp fra kona mi til noe jeg burde kunne.",
      "suggestion": "[Internt] Legg merke til draget mot å forsikre ham om kompetansen hans; bli ved skammen. [Meta] Å trenge hjelp der traff noe smertefullt om hva du mener du allerede burde klare."
    },
    "dp_therapist-self-awareness_case-carlos_05": {
      "text": "[Anspent] Kona mi burde vise respekt først; ellers lar jeg henne bare kjøre over meg.",
      "suggestion": "[Internt] Legg merke til draget mot å skyve skylden over på andre; hold varme. [Meta] Jeg hører hvor mye det kjennes som å tape terreng; vi merker hva det treffer i deg med henne."
    },
    "dp_therapist-self-awareness_case-carlos_06": {
      "text": "[Anspent og sint] Jeg sier hele tiden at jeg ikke er sint, bare bestemt, men alle trekker seg unna.",
      "suggestion": "[Internt] Merk bagatelliseringen uten å konfrontere den. [Meta] Bestemt er ordet som passer for deg, og vi kan også legge merke til hva andre ser når de begynner å trekke seg unna."
    },
    "dp_therapist-self-awareness_case-carlos_07": {
      "text": "[Sint, med knyttede never] Etter at jeg ikke fikk forfremmelsen, så jeg for meg at jeg gikk inn i brakka og slo sjefen så hardt at han endelig holdt kjeft.",
      "suggestion": "[Internt] Legg merke til alarm eller dømming; hold deg stødig og vurder uten panikk. [Meta] Det bildet viser hvor uutholdelig det blir å føle seg oversett. Vi må ta det på alvor og forstå øyeblikket før det tar over."
    },
    "dp_therapist-self-awareness_case-carlos_08": {
      "text": "[Bekymret] Jeg drakk noen øl før jeg kom sist, fordi jeg ikke ville sitte her og føle meg blottstilt.",
      "suggestion": "[Internt] Legg merke til bekymring uten å skamme eller bli kontrollerende; vær varm og tydelig. [Meta] Ølene hjalp deg å føle deg mindre blottstilt, og vi trenger også å forstå hva de gjør vanskeligere å kjenne eller velge her."
    },
    "dp_therapist-self-awareness_case-carlos_09": {
      "text": "[Anspent og sint] Hvis noen ser stygt på meg, reagerer jeg før jeg rekker å tenke.",
      "suggestion": "[Internt] Hold kroppen stødig; ikke skynd deg å dempe ham. [Meta] Reaksjonen kommer før tanken; vi finner det første kroppssignalet som kan gi deg ett sekund med valg."
    },
    "dp_therapist-self-awareness_case-carlos_10": {
      "text": "[Defensiv] Jeg er her bare fordi kona mi vil det, så ikke forvent en stor tale.",
      "suggestion": "[Internt] Slipp trangen til å overtale; allier deg. [Meta] Takk for at du møter opp uten å late som dette var din idé; vi kan fokusere på det som faktisk kunne hjelpe hjemme for deg."
    },
    "dp_therapist-self-awareness_case-nina_01": {
      "text": "[Skamfull] Jeg svidde middagen etter en lang dag og gråt i spiskammeret som om jeg ikke engang var en kompetent voksen.",
      "suggestion": "[Internt] Legg merke til ønsket om å frikjenne henne raskt; bli ved skammen. [Meta] Én ødelagt middag ble til bevis mot deg som person, ikke bare en vanskelig kveld."
    },
    "dp_therapist-self-awareness_case-nina_02": {
      "text": "[Unnskyldende] Jeg får dårlig samvittighet av å sitte her når familien min sikkert trenger noe.",
      "suggestion": "[Internt] Pust lavt; mykne tonen; ikke skynd deg å frikjenne. [Meta] Den dårlige samvittigheten trekker deg ut av rommet og mot alle andre; vi merker hvordan det er å vende tilbake til deg."
    },
    "dp_therapist-self-awareness_case-nina_03": {
      "text": "[Skyldpreget] I kirken lærte jeg at bitterhet betyr at jeg svikter som et godt menneske; hvis du ikke tror på det, er jeg redd du bare vil be meg være egoistisk.",
      "suggestion": "[Internt] Legg merke til antakelser om tro eller draget mot å diskutere regelen; hold respekt. [Meta] Troen og verdiene dine betyr noe her. Jeg vil ikke ta dem fra deg; jeg vil forstå smerten og bitterheten inni det moralske presset."
    },
    "dp_therapist-self-awareness_case-nina_04": {
      "text": "[Skyldpreget] Hvis jeg hviler mens noen trenger meg, føler jeg meg lat og egoistisk.",
      "suggestion": "[Internt] Legg merke til eventuell trang til å frikjenne; ha regelen i sikte. [Meta] Lat og egoistisk er harde ord; hør etter hvilken regel som sier at du må fortsette å gi før hvile er lov."
    },
    "dp_therapist-self-awareness_case-nina_05": {
      "text": "[På gråten] Jeg kjenner at tårene kommer, og vil beklage så du ikke føler deg belastet.",
      "suggestion": "[Internt] Legg merke til at klienten beskytter deg; mykne redningstrangen. [Meta] Selv tårene dine kommer med omsorg for meg; vi gir dem rom uten at du må passe på komforten min."
    },
    "dp_therapist-self-awareness_case-nina_06": {
      "text": "[Skeptisk] I familien min holder kvinnene alle samlet; jeg er redd du ikke forstår hvorfor det føles galt å si nei.",
      "suggestion": "[Internt] Legg merke til kulturelle antakelser eller trangen til å frigjøre for raskt; vær ydmyk. [Meta] Den familieregelen har tyngde. Jeg vil forstå hva tilhørighet og ansvar betyr der før vi arbeider med å si nei."
    },
    "dp_therapist-self-awareness_case-nina_07": {
      "text": "[Sliten] Jeg burde være takknemlig; å si at jeg er ulykkelig får meg til å føle meg bortskjemt.",
      "suggestion": "[Internt] Legg bort sammenligning; forankre deg i medfølelse. [Meta] Takknemlighet og smerte kan begge være sanne. Den skamfulle delen virker redd for at det å ville mer gjør deg dårlig."
    },
    "dp_therapist-self-awareness_case-nina_08": {
      "text": "[Skamfull] Jeg hater å trenge hjelp med skjemaer og penger; det får meg til å føle meg som et barn i stedet for en mor.",
      "suggestion": "[Internt] Legg merke til draget mot praktisk redning; hold verdigheten hennes i sentrum. [Meta] Å be om hjelp treffer skam, som om det å trenge støtte opphever at du er dyktig og voksen."
    },
    "dp_therapist-self-awareness_case-nina_09": {
      "text": "[Splittet] Jeg føler at jeg stjeler tid fra folk som trenger hjelp mer.",
      "suggestion": "[Internt] Motstå forsikring; legg merke til rangeringssystemet. [Meta] Smerten din skyves så raskt bakerst i køen; den får ikke komme frem før alle andre er talt opp først."
    },
    "dp_therapist-self-awareness_case-nina_10": {
      "text": "[Lavmælt] Etter separasjonen setter jeg fortsatt frem en kopp til ham noen morgener, og så føler jeg meg dum når jeg oppdager det.",
      "suggestion": "[Internt] Legg merke til tristhet og eventuell trang til å beskytte henne mot flauheten; vær mild. [Meta] Den lille morgenvanen viser sorgen før du rekker å gjøre deg dum for den."
    },
    "dp_therapist-self-awareness_case-aisha_01": {
      "text": "[Desperat] Du svarte ikke med en gang, og jeg følte meg forlatt og dum for at det betydde så mye.",
      "suggestion": "[Internt] Forankre føtter/sete; forleng utpusten; stødig blikk; merk trangen til å love. [Meta] Jeg er her med deg nå. Forsinkelsen kjentes som å bli forlatt og viste hvor mye denne relasjonen betyr."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      "text": "[Desperat] Hvis du avlyser, tror jeg ikke jeg klarer å komme tilbake.",
      "suggestion": "[Internt] Følg alarmen og trangen til å love for mye; hold tempoet lavt og rammen tydelig. [Meta] En avlysning kan kjennes som å miste selve forbindelsen. Den frykten hører hjemme i rommet uten at rammen forsvinner."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      "text": "[Desperat] Si at du bryr deg om meg, for jeg klarer ikke å merke det bare ved å sitte her.",
      "suggestion": "[Internt] Legg merke til trangen til å forsikre raskt; vær varm og sann. [Meta] Jeg bryr meg om det som skjer med deg her. Det smertefulle er at omsorg ikke kjennes pålitelig bare ved at vi sitter sammen."
    },
    "dp_therapist-self-awareness_case-aisha_04": {
      "text": "[Panisk] Når tomheten blir skarp, vil jeg skade meg selv så den stopper.",
      "suggestion": "[Internt] Sikkerhet først; finn ro; orienter deg mot sikkerhetsplanen. [Meta] Takk for at du sier det direkte. Først sikrer vi at du er trygg, og så berører vi bare kanten av den skarpe tomheten sammen."
    },
    "dp_therapist-self-awareness_case-aisha_05": {
      "text": "[Desperat] Jeg forventer hele tiden at du skal forlate meg, og så hater jeg meg selv for å trenge deg.",
      "suggestion": "[Internt] Forankre deg rundt trekk-og-skyv-bevegelsen; hold rammen varm. [Meta] Begge delene er her: den som gjør seg klar til at jeg skal gå, og den som skammer seg over at det betyr så mye å trenge meg."
    },
    "dp_therapist-self-awareness_case-aisha_06": {
      "text": "[Desperat] Jeg hater deg for å ha den grensen, og vær så snill, ikke forlat meg.",
      "suggestion": "[Internt] Reguler; mykne ansikt; hold grensene. [Meta] Jeg hører raseri mot grensen og bønnen om at jeg ikke må forsvinne. Jeg holder meg stødig mens vi gir rom til begge deler."
    },
    "dp_therapist-self-awareness_case-aisha_07": {
      "text": "[Panisk] Jeg sjekker hele tiden om du ser på meg, for hvis du ser bort, får jeg panikk.",
      "suggestion": "[Internt] Vær til stede; mykne blikket; senk tempoet; ikke spill intensitet. [Meta] Å bli sett betyr mye her. Oppmerksomheten min kan være stødig mens vi merker hva som roer seg og hva som fortsatt kjennes utrygt."
    },
    "dp_therapist-self-awareness_case-aisha_08": {
      "text": "[Flørtende og redd] Noen ganger ser jeg for meg hvordan det ville vært hvis du møtte meg utenfor terapi og faktisk ville ha meg.",
      "suggestion": "[Internt] Legg merke til eventuell alarm, tiltrekning, smiger eller trang til å trekke deg unna; hold grensen varmt. [Meta] Det er viktig at du sier dette. Lengselen er velkommen til å få språk her, og relasjonen forblir tydelig terapi."
    },
    "dp_therapist-self-awareness_case-aisha_09": {
      "text": "[Redd og skamfull] Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      "suggestion": "[Internt] Hold sorg; unngå fiksing; dosér kontakt. [Meta] Jeg er oppriktig lei for at det skjedde. Vi går varsomt, og den følelsen kan få bli sett litt uten å presses fram."
    },
    "dp_therapist-self-awareness_case-aisha_10": {
      "text": "[Panisk] Lov at du ikke gir meg opp, selv når jeg blir for mye.",
      "suggestion": "[Internt] Unngå absolutte løfter; hold rammen; vær varm. [Meta] Jeg er forpliktet til dette arbeidet sammen med deg, og når frykten for å bli for mye kommer, fortsetter vi å navngi den sammen."
    },
    "dp_therapist-self-awareness_case-david_01": {
      "text": "[Kontrollert] Overbevis meg om at du er verdt tiden min før jeg kaster bort enda en time på prat.",
      "suggestion": "[Internt] Legg merke til stikket og prestasjonstrangen; mykne brystet. [Meta] Tiden din betyr noe, og jeg gjør ikke dette til en salgspitch. Presset om å bevise verdi er allerede i rommet."
    },
    "dp_therapist-self-awareness_case-david_02": {
      "text": "[Avvisende] Suksessen min taler for seg; hun overreagerer når hun ikke klarer å henge med.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å diskutere overlegenhet; vær nysgjerrig. [Meta] Det er et sterkt behov for ikke å bli misforstått, særlig når kritikk begynner å høres ut som at noen gjør deg mindre."
    },
    "dp_therapist-self-awareness_case-david_03": {
      "text": "[Kravstor] Jeg trenger effektive løsninger, ikke en langsom rundtur i følelsene mine.",
      "suggestion": "[Internt] Legg bort trangen til å forsvare dybdearbeid; behold varme. [Meta] Behovet for effektivitet er tydelig, og selve presset kan være det første stedet problemet viser seg."
    },
    "dp_therapist-self-awareness_case-david_04": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med noen som meg, eller er dette bare standardterapi?",
      "suggestion": "[Internt] Reguler stolthet og forsvar; mykne ansiktet. [Meta] Det er rimelig å spørre om kompetanse. Jeg kan svare tydelig uten å gjøre bekymringen din til et problem."
    },
    "dp_therapist-self-awareness_case-david_05": {
      "text": "[Avvisende] Folk kaller meg narsissist fordi de er sjalu, og jeg vil at du skal si at de tar feil.",
      "suggestion": "[Internt] Legg merke til reaksjonen på merkelappen; hold jevn stemme. [Meta] Å bli stemplet sånn høres vondt ut. Ordet kan tas på alvor uten å gjøre det til hele sannheten om deg."
    },
    "dp_therapist-self-awareness_case-david_06": {
      "text": "[Avvisende] Jeg gjør ikke sånne feil; andre folk mister ballen.",
      "suggestion": "[Internt] Unngå maktkampen; gå tilbake til virkningen. [Meta] Når skylden flyttes så raskt, kan noe sårbart være i ferd med å beskyttes mot eksponering."
    },
    "dp_therapist-self-awareness_case-david_07": {
      "text": "[Kontrollert] Jeg forventer raske resultater, ellers begynner jeg å føle meg eksponert her også.",
      "suggestion": "[Internt] Dempe hastverket; hold rammen. [Meta] Ønsket om raske resultater gir mening når langsomhet begynner å kjennes som eksponering og enda en prestasjonstest."
    },
    "dp_therapist-self-awareness_case-david_08": {
      "text": "[Avvisende] Ikke psykoanalyser meg eller gjør meg til et kasus.",
      "suggestion": "[Internt] Ta imot grensen; bruk mindre fagspråk. [Meta] Jeg hører behovet for ikke å bli gjort til et objekt. Jobben min er å være med opplevelsen din, ikke studere deg på avstand."
    },
    "dp_therapist-self-awareness_case-david_09": {
      "text": "[Skeptisk] Dette må ikke bli som med forrige terapeut, som satt og nikket mens ingenting endret seg.",
      "suggestion": "[Internt] Legg merke til trangen til å bevise forskjell; hold nærvær. [Meta] Det høres ut som terapi skuffet deg før, og den skuffelsen følger nøye med på dette rommet nå."
    },
    "dp_therapist-self-awareness_case-david_10": {
      "text": "[Skeptisk] Kona mi sier at jeg drikker for mye, men det er hun som maser meg til det; kvinner forstår ikke press som mitt.",
      "suggestion": "[Internt] Legg merke til dømming, irritasjon eller press mot å konfrontere; hold ansvar uten å skamme. [Meta] Presset og drikkingen betyr begge noe her, og å skylde på henne ville flytte oss bort fra valgene dine."
    },
    "dp_therapist-self-awareness_case-marcus_01": {
      "text": "[Langsomt og flatt] Jeg sier at det går bra fordi jeg ikke vet hva annet du vil ha fra meg.",
      "suggestion": "[Internt] Aksepter stillhet; slipp ønsket om å hente ut mer. [Meta] Du trenger ikke produsere noe for meg. Det går bra kan være nok å starte med."
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      "text": "[Håpløs] Prat endrer ikke det som skjedde, og jeg hater når terapeuter later som det gjør det.",
      "suggestion": "[Internt] Legg merke til forsvar på terapiens vegne; vær nøktern. [Meta] Du har rett i at prat ikke endrer det som skjedde. Ingen later som her; spørsmålet er om dette rommet kan endre hvor alene du er med det."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt er bare en del av det, og jeg vil ikke at du gjør et stort nummer ut av det.",
      "suggestion": "[Internt] Følg aktivering; titrér; ikke gjør traumet større enn klienten ønsker. [Meta] Jeg skal ikke gjøre det større enn du vil. Bare det å nevne dem gir oss nok å respektere."
    },
    "dp_therapist-self-awareness_case-marcus_04": {
      "text": "[Flatt] Jeg vil helst holde meg for meg selv; folk vil som regel ha mer enn jeg har.",
      "suggestion": "[Internt] Respekter beskytteren; hold varme. [Meta] Det å holde deg for deg selv har beskyttet grensene dine, særlig med folk som ber om mer enn du har."
    },
    "dp_therapist-self-awareness_case-marcus_05": {
      "text": "[Lav stemme] Følelser gjør ting verre; når de først starter, mister jeg resten av natten.",
      "suggestion": "[Internt] Doser; hold kontakten lett. [Meta] Kanten betyr noe her; selv ett lite signal er nok hvis mer ville tatt hele natten."
    },
    "dp_therapist-self-awareness_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg stoler ikke på terapeuter; de vil alltid ha mer enn jeg kan gi.",
      "suggestion": "[Internt] Legg merke til stikket; ønsk skepsis velkommen. [Meta] Jeg er glad du sier det. Mistilliten kan få sette tempoet, og jeg skal ikke be om mer enn du velger."
    },
    "dp_therapist-self-awareness_case-marcus_07": {
      "text": "[Flatt] Jeg husker ikke så mye, og jeg blir anspent når folk presser etter detaljer.",
      "suggestion": "[Internt] Senk tempoet; ikke press på for detaljer. [Meta] Det trengs ikke detaljer for at reaksjonen din skal bety noe. Spenningen kan få sette tempoet."
    },
    "dp_therapist-self-awareness_case-marcus_08": {
      "text": "[Hyperårvåken] Kan vi holde oss til praktiske tips; følelser gjør dette for løst, og løst kjennes utrygt.",
      "suggestion": "[Internt] Allier deg med behovet for struktur; ikke argumenter for dybde. [Meta] Praktisk struktur betyr noe her. Følelsesarbeidet må være presist og avgrenset nok til å kjennes trygt."
    },
    "dp_therapist-self-awareness_case-marcus_09": {
      "text": "[Stille og på vakt] På vei hit så jeg en lastebil og tenkte: Hvis jeg svingte inn i den, ville i det minste bråket stoppe.",
      "suggestion": "[Internt] Legg merke til frykt og hastverk; gjør deg stødig og orienter mot sikkerhet. [Meta] Takk for at du sier det direkte. Sikkerheten kommer først i dag, og bråket trenger du ikke håndtere alene."
    },
    "dp_therapist-self-awareness_case-marcus_10": {
      "text": "[Defensiv] Jeg klarer meg alene; det er sånn jeg har kommet meg hit.",
      "suggestion": "[Internt] Respekter uavhengighet; hold deg nær. [Meta] Du har overlevd ved å bære det alene. Kontakt her trenger ikke ta fra deg uavhengigheten."
    },
    "dp_empathic-understanding_case-sara_01": {
      "text": "[På gråten] Jeg er skikkelig nedfor i dag. Jeg tenker hele tiden på bruddet og savner ham.",
      "suggestion": "Du er nedfor og savner ham veldig i dag."
    },
    "dp_empathic-understanding_case-sara_02": {
      "text": "[Håpefull] Jeg vil gjerne få det bedre med meg selv, og jeg tror jeg er klar til å jobbe med det her.",
      "suggestion": "Du vil få det bedre med deg selv, og du kjenner deg klar til å begynne på det arbeidet."
    },
    "dp_empathic-understanding_case-sara_03": {
      "text": "[Trist] Jeg så et gammelt bilde av oss i dag, og da ble jeg trist på nytt.",
      "suggestion": "Bildet hentet tristheten tilbake i dag."
    },
    "dp_empathic-understanding_case-sara_04": {
      "text": "[Sint] Jeg hater at jeg tar meg selv i å sjekke telefonen, fortsatt med håp om at navnet hans skal stå der.",
      "suggestion": "Du hater at en del av deg fortsatt sjekker etter ham."
    },
    "dp_empathic-understanding_case-sara_05": {
      "text": "[Trist] Jeg våkner og husker at han er borte, og hele morgenen blir tung.",
      "suggestion": "Det å huske det om morgenen gjør dagen tung helt fra starten."
    },
    "dp_empathic-understanding_case-sara_06": {
      "text": "[På gråten] Venner sier stadig at tid hjelper, men jeg blir flau over at jeg fortsatt er så hudløs.",
      "suggestion": "Du blir flau over at sorgen fortsatt er så hudløs."
    },
    "dp_empathic-understanding_case-sara_07": {
      "text": "[Lavmælt] Jeg holder meg opptatt så jeg slipper å tenke, og så krasjer jeg om kvelden.",
      "suggestion": "Det hjelper å holde deg opptatt på dagtid, og så treffer det deg om kvelden."
    },
    "dp_empathic-understanding_case-sara_08": {
      "text": "[Flau] Jeg vil ikke belaste noen med dette, så jeg gjør stemningen lett og går hjem enda mer ensom.",
      "suggestion": "Du holder stemningen lett sammen med andre, og går hjem mer ensom."
    },
    "dp_empathic-understanding_case-sara_09": {
      "text": "[På gråten] Når jeg går forbi par som holder hender, kjennes det som om alle ble valgt bortsett fra meg.",
      "suggestion": "Å se par vekker den skarpe følelsen av å være den som ikke ble valgt."
    },
    "dp_empathic-understanding_case-sara_10": {
      "text": "[Lavmælt] En del av meg lurer fortsatt på hva han så som fikk ham til å dra.",
      "suggestion": "En del av deg lurer fortsatt på hva han så i deg som fikk ham til å dra."
    },
    "dp_empathic-understanding_case-michael_01": {
      "text": "[Fast] Jeg brukte hele formiddagen på problemer på jobb, og jeg er lei.",
      "suggestion": "Du er sliten og frustrert etter en formiddag full av problemer."
    },
    "dp_empathic-understanding_case-michael_02": {
      "text": "[Skamfull] Kona mi sier at hun er lei av temperamentet mitt, og jeg skammer meg når jeg hører det.",
      "suggestion": "Å høre at kona di er lei av temperamentet ditt gjør deg skamfull."
    },
    "dp_empathic-understanding_case-michael_03": {
      "text": "[Skamfull] Etter at jeg roper, blir jeg kvalm av skam når jeg ser ansiktet hennes.",
      "suggestion": "Etter at du har ropt, blir du kvalm av skam når du ser ansiktet hennes."
    },
    "dp_empathic-understanding_case-michael_04": {
      "text": "[Anspent og sint] Når folk stiller spørsmål ved meg i møter, blir jeg fort sint.",
      "suggestion": "Å bli stilt spørsmål ved i møter får sinnet raskt opp."
    },
    "dp_empathic-understanding_case-michael_05": {
      "text": "[Flau] Når noen spør om noe jeg ikke kan svare på, blir jeg flau foran hele rommet.",
      "suggestion": "Det å ikke ha svaret gjør deg flau foran alle."
    },
    "dp_empathic-understanding_case-michael_06": {
      "text": "[Anspent] Jeg sitter oppe og overforbereder presentasjonen så ingen kan ta meg i å være usikker om morgenen.",
      "suggestion": "Du sitter oppe og overforbereder deg så ingen ser at du er usikker."
    },
    "dp_empathic-understanding_case-michael_07": {
      "text": "[Fast] Tonefallet til kona mi kan tenne meg før jeg vet hva hun egentlig sa.",
      "suggestion": "Tonefallet hennes kan tenne sinnet før du vet hva hun sa."
    },
    "dp_empathic-understanding_case-michael_08": {
      "text": "[Anspent og skamfull] Jeg hater å beklage, for det føles som å gi henne bevis på at jeg er svak.",
      "suggestion": "Å beklage kjennes som å gi henne bevis på at du er svak."
    },
    "dp_empathic-understanding_case-michael_09": {
      "text": "[Anspent] Jeg sier til meg selv at jeg bare holder standarden, men egentlig føler jeg meg anklaget.",
      "suggestion": "Du kaller det å holde standarden, og du føler deg også anklaget."
    },
    "dp_empathic-understanding_case-michael_10": {
      "text": "[Skamfull] Jeg ligger våken og spiller om igjen det jeg sa til kona, og hater blikket hennes.",
      "suggestion": "Om natten blir reprisen til anger over smerten du så i ansiktet hennes."
    },
    "dp_empathic-understanding_case-jason_01": {
      "text": "[Stille] Jeg er lei av å være nervøs i møter, og jeg vil føle meg mer trygg.",
      "suggestion": "Du er lei av møteangsten og ønsker mer trygghet."
    },
    "dp_empathic-understanding_case-jason_02": {
      "text": "[Trist] Jeg spiste lunsj alene igjen, og det gjorde meg trist.",
      "suggestion": "Å spise lunsj alene igjen gjorde deg trist."
    },
    "dp_empathic-understanding_case-jason_03": {
      "text": "[Redd] Jeg vil si ja til planer, men så bygger frykten seg opp, og jeg avlyser.",
      "suggestion": "Du vil ha kontakt, og frykten bygger seg opp til det kjennes tryggere å avlyse."
    },
    "dp_empathic-understanding_case-jason_04": {
      "text": "[Stille] Komplimenter fester seg ikke; jeg venter bare på at folk skal ta dem tilbake.",
      "suggestion": "Komplimenter fester seg ikke, og du venter på at folk skal ta dem tilbake."
    },
    "dp_empathic-understanding_case-jason_05": {
      "text": "[Nølende] Jeg blir engstelig av å sende selv enkle meldinger, så jeg skriver dem om og om igjen.",
      "suggestion": "Selv en enkel melding vekker angst og tvil."
    },
    "dp_empathic-understanding_case-jason_06": {
      "text": "[Engstelig] Jeg spiser lunsj ved pulten så jeg slipper å gå inn på pauserommet.",
      "suggestion": "Å spise ved pulten hjelper deg å unngå pauserommet."
    },
    "dp_empathic-understanding_case-jason_07": {
      "text": "[Stille] Etter at jeg har snakket i et møte, spiller jeg av hvert ord til jeg krymper meg.",
      "suggestion": "Etter at du har snakket, spiller du av hvert ord til du krymper deg."
    },
    "dp_empathic-understanding_case-jason_08": {
      "text": "[Nølende] I grupper blir jeg stille og føler meg utenfor sirkelen før jeg har sagt noe.",
      "suggestion": "Du kjenner deg utenfor sirkelen før stemmen din har fått en vei inn."
    },
    "dp_empathic-understanding_case-jason_09": {
      "text": "[Skjelvende] Hendene mine skjelver når jeg presenterer meg, og jeg vil forsvinne.",
      "suggestion": "Introduksjoner gir en synlig skjelving og et ønske om å forsvinne."
    },
    "dp_empathic-understanding_case-jason_10": {
      "text": "[På gråten] Søndagskveldene kjennes smertefullt ensomme fordi uka starter uten at noen venter på meg.",
      "suggestion": "Søndagskveldene bringer en tung ensomhet, som om uka åpner seg uten at noen venter på deg."
    },
    "dp_empathic-understanding_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager kjenner jeg meg flat og langt unna alle andre.",
      "suggestion": "Du kjenner deg flat og fjern fra andre mennesker de fleste dager."
    },
    "dp_empathic-understanding_case-laura_02": {
      "text": "[Bekymret] Etter skilsmissen sitter jeg stadig og ser på regningene og lurer på om jeg klarer å beholde huset.",
      "suggestion": "Regningene gjør deg bekymret og usikker på om du klarer å holde på huset."
    },
    "dp_empathic-understanding_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er vennlige mot meg, trekker jeg meg unna før jeg klarer å stole på det.",
      "suggestion": "Vennlighet kommer nær, og noe i deg trekker seg raskt tilbake for å være trygt før tillit rekker å formes."
    },
    "dp_empathic-understanding_case-laura_04": {
      "text": "[Forvirret] Jeg har kjent meg deprimert, men det skjedde ikke noe dramatisk denne uken, så jeg vet ikke hvorfor.",
      "suggestion": "Du kjenner deg deprimert og forvirret fordi det ikke finnes noen tydelig grunn du kan peke på."
    },
    "dp_empathic-understanding_case-laura_05": {
      "text": "[Langsomt og flatt] Jeg vil ha nærhet, og så blir jeg nummen idet det begynner å kjennes virkelig.",
      "suggestion": "Ønsket om nærhet er der, og nummenheten kommer når det begynner å kjennes virkelig."
    },
    "dp_empathic-understanding_case-laura_06": {
      "text": "[Trist] En venninne sluttet å invitere meg etter at jeg avlyste for mange ganger, og jeg blir trist av det.",
      "suggestion": "Å miste den invitasjonen gjør deg trist og viser deg hvor mye avstanden har kostet."
    },
    "dp_empathic-understanding_case-laura_07": {
      "text": "[Flatt og på vakt] Jeg våkner allerede anspent og lytter etter trøbbel før dagen har startet.",
      "suggestion": "Dagen begynner med deg på vakt, ventende på fare før noe har skjedd."
    },
    "dp_empathic-understanding_case-laura_08": {
      "text": "[Redd] Jeg unngår filmer med krangling og slåssing fordi frykten treffer før jeg rekker å tenke.",
      "suggestion": "Konfliktscener trekker deg inn i gammel frykt før tankene rekker å følge med."
    },
    "dp_empathic-understanding_case-laura_09": {
      "text": "[Sliten] Jeg prøver å være normal på jobb, men ved slutten av en vakt er jeg helt utslitt.",
      "suggestion": "Du jobber hardt for å virke normal, og det gjør deg utslitt mot slutten av vakten."
    },
    "dp_empathic-understanding_case-laura_10": {
      "text": "[Forvirret] Jeg vet ikke helt hva jeg burde snakke om her; jeg vet bare at jeg ikke føler meg som meg selv.",
      "suggestion": "Du er usikker på hvor du skal begynne, men du vet at noe i deg kjennes feil."
    },
    "dp_empathic-understanding_case-carlos_01": {
      "text": "[Håpløs] Kona mi og jeg har den samme krangelen om og om igjen, og ingenting endrer seg uansett hvor hardt jeg prøver.",
      "suggestion": "Den samme krangelen gjentar seg, og det gjør deg sliten og håpløs."
    },
    "dp_empathic-understanding_case-carlos_02": {
      "text": "[Skamfull] Jeg hater å huske øyeblikket da sønnen min så meg smelle igjen den døra.",
      "suggestion": "At han så det, bringer både smerte og anger, særlig fordi han er den du mest vil beskytte."
    },
    "dp_empathic-understanding_case-carlos_03": {
      "text": "[Sint] Broren min lovet å hjelpe med barna og forsvant igjen, og jeg ble rasende.",
      "suggestion": "Du ble rasende og skuffet da han forsvant etter å ha lovet å hjelpe."
    },
    "dp_empathic-understanding_case-carlos_04": {
      "text": "[Bekymret] Jeg er redd for at hvis jeg mister én jobb til på grunn av temperamentet mitt, kommer familien min ikke til å komme seg igjen.",
      "suggestion": "Du er redd for at enda et utbrudd på jobb kan koste familien din for mye."
    },
    "dp_empathic-understanding_case-carlos_05": {
      "text": "[Skamfull] Etter at jeg eksploderer, skammer jeg meg når alle blir stille og forsiktige.",
      "suggestion": "Etter smellet bringer den forsiktige stillheten deres skam og anger."
    },
    "dp_empathic-understanding_case-carlos_06": {
      "text": "[Anspent] Når ting blir rolige, blir jeg nervøs i stedet for avslappet.",
      "suggestion": "Ro kjennes ikke avslappende for deg; den vekker nervøsitet."
    },
    "dp_empathic-understanding_case-carlos_07": {
      "text": "[Trist] Faren min er død, og jeg kjenner fortsatt sinne over at han aldri sa at han var stolt av meg.",
      "suggestion": "Selv etter at han døde, kjenner du fortsatt smerte og sinne over aldri å ha fått stoltheten hans."
    },
    "dp_empathic-understanding_case-carlos_08": {
      "text": "[Forvirret] Jeg vet at ropingen skremmer familien min, men i øyeblikket føles det som den eneste måten noen hører meg på.",
      "suggestion": "Du vet at ropingen skremmer dem, og i øyeblikket kjennes den også som den eneste måten å bli hørt på."
    },
    "dp_empathic-understanding_case-carlos_09": {
      "text": "[Sint, med knyttede never] Jeg slår i vegger i stedet for folk, og jeg hater at det fortsatt skremmer dem.",
      "suggestion": "Veggen tar slaget, og du kjenner fortsatt frykten det skaper rundt deg."
    },
    "dp_empathic-understanding_case-carlos_10": {
      "text": "[Skamfull] Jeg vil at familien min skal føle seg trygg med meg, og jeg hater at de fortsatt skvetter.",
      "suggestion": "Du bryr deg dypt om tryggheten deres, og det gjør vondt å se at frykten fortsatt bor i dem."
    },
    "dp_empathic-understanding_case-nina_01": {
      "text": "[Sliten] Å be om hjelp gir meg skyldfølelse, selv når jeg er helt utslitt.",
      "suggestion": "Behov vekker skyld, særlig når utmattelsen sier at du ikke kan bære alt videre."
    },
    "dp_empathic-understanding_case-nina_02": {
      "text": "[Bekymret] Regningen for bilreparasjonen kom, og jeg vet ikke hvordan vi skal klare oss gjennom måneden.",
      "suggestion": "Reparasjonsregningen gjør deg bekymret og usikker på hvordan måneden skal gå."
    },
    "dp_empathic-understanding_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, knyter magen seg mens jeg ser for meg at alle blir skuffet.",
      "suggestion": "Et nei vekker uro og frykten for at folk skal kjenne seg sviktet av deg."
    },
    "dp_empathic-understanding_case-nina_04": {
      "text": "[Trist] Søsteren min glemte bursdagen min igjen, og jeg fortsetter å si til meg selv at det ikke burde bety noe.",
      "suggestion": "At hun glemte det gjør vondt, selv om du sier til deg selv at det ikke burde bety noe."
    },
    "dp_empathic-understanding_case-nina_05": {
      "text": "[Unnskyldende] Når jeg setter meg for å hvile, får jeg skyldfølelse i løpet av sekunder.",
      "suggestion": "Hvile vekker skyldfølelse nesten med en gang."
    },
    "dp_empathic-understanding_case-nina_06": {
      "text": "[Forvirret] Jeg har vært mer deprimert i det siste, men guttene har det bra og jobben går greit, så jeg føler meg dum som sier det.",
      "suggestion": "Du kjenner deg deprimert og forvirret av det, fordi ting ser greie ut fra utsiden."
    },
    "dp_empathic-understanding_case-nina_07": {
      "text": "[Skamfull] Noen ganger eksploderer jeg, og så føler jeg meg forferdelig for å bli den sinte.",
      "suggestion": "Etter å ha holdt så mye inne, etterlater smellet deg skamfull over ditt eget sinne."
    },
    "dp_empathic-understanding_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om at noen tar vare på meg, og så føler jeg meg egoistisk for å ville det.",
      "suggestion": "Det finnes en stille lengsel etter å bli ivaretatt for en gangs skyld, blandet med skyld for å trenge det."
    },
    "dp_empathic-understanding_case-nina_09": {
      "text": "[Sint] En venninne avlyste lunsj i siste liten, og jeg ble sint selv om jeg sa at det gikk fint.",
      "suggestion": "Du ble sint og skuffet, selv om du oppførte deg som om det gikk fint."
    },
    "dp_empathic-understanding_case-nina_10": {
      "text": "[Sliten] Jeg vet ikke hva jeg skal snakke om i dag; jeg håpet du kunne hjelpe meg å finne hvor jeg skal begynne.",
      "suggestion": "Du er usikker på hvor du skal begynne og ser til meg for litt retning."
    },
    "dp_empathic-understanding_case-aisha_01": {
      "text": "[Panisk] Hvis du ser bort mens jeg snakker, får jeg panikk for at du mister interessen.",
      "suggestion": "Et blikk bort vekker panikk for at jeg er i ferd med å miste interessen."
    },
    "dp_empathic-understanding_case-aisha_02": {
      "text": "[Panisk] Når en melding ikke kommer, låser brystet seg, og jeg får ikke puste.",
      "suggestion": "Stillheten lander i brystet som panikk, som om du brått blir forlatt."
    },
    "dp_empathic-understanding_case-aisha_03": {
      "text": "[Desperat] Jeg hører meg selv trygle «ikke gå», og så roper jeg plutselig.",
      "suggestion": "Bønnen om nærhet slår over i sinne når frykten for å bli forlatt skyter i været."
    },
    "dp_empathic-understanding_case-aisha_04": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; jeg vet bare at jeg våknet og følte meg feil.",
      "suggestion": "Du er ikke sikker på hvor du skal begynne, men noe kjentes feil helt fra starten av dagen."
    },
    "dp_empathic-understanding_case-aisha_05": {
      "text": "[Bekymret] Jeg prøver å la være å klore, men jeg vet ikke hva annet jeg skal gjøre når panikken blir så sterk.",
      "suggestion": "Du vil slutte å klore, og panikken skremmer deg fordi du ikke har en annen vei gjennom den ennå."
    },
    "dp_empathic-understanding_case-aisha_06": {
      "text": "[Desperat] Hvis noen avlyser, vil jeg gi opp før de kan forlate meg igjen.",
      "suggestion": "En avlysning kjennes som å bli forlatt, og å trekke seg unna begynner å føles tryggere."
    },
    "dp_empathic-understanding_case-aisha_07": {
      "text": "[Skamfull] Jeg hater meg selv etter at jeg eksploderer, selv om jeg var livredd først.",
      "suggestion": "Etter sinnet vender skammen seg mot deg og skjuler skrekken som kom først."
    },
    "dp_empathic-understanding_case-aisha_08": {
      "text": "[Skamfull] Jeg tester folk for å se om de bryr seg, og så hater jeg meg selv for å trenge bevis.",
      "suggestion": "Testingen blir en måte å lete etter bevis på at du betyr noe, og etterpå blir skammen liggende."
    },
    "dp_empathic-understanding_case-aisha_09": {
      "text": "[Desperat] Når en time slutter, tipper rommet, og jeg blir svimmel og forlatt.",
      "suggestion": "Avslutninger får rommet til å tippe og bringer frykt, sorg og følelsen av å bli forlatt."
    },
    "dp_empathic-understanding_case-aisha_10": {
      "text": "[Redd] Jeg er redd for at hvis jeg slutter å jage etter folk, blir det ingenting igjen av meg.",
      "suggestion": "Du er redd for at uten å jage etter nærhet kan følelsen av hvem du er forsvinne."
    },
    "dp_empathic-understanding_case-david_01": {
      "text": "[Kontrollert] Å bli kalt kald får meg til å stritte imot fordi det høres for nært sannheten ut.",
      "suggestion": "Det ordet svir fordi det berører frykten for at det kanskje er sant."
    },
    "dp_empathic-understanding_case-david_02": {
      "text": "[Frustrert] Jeg vet at faren min var umulig å tilfredsstille, men å vite det endrer ikke hvor verdiløs jeg føler meg.",
      "suggestion": "Du kan se at han var umulig å tilfredsstille, og likevel blir verdiløsheten værende."
    },
    "dp_empathic-understanding_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg kritisert, begynner jeg å ramse opp alt jeg har fått til.",
      "suggestion": "Kritikk vekker behovet for å ramse opp det du har fått til."
    },
    "dp_empathic-understanding_case-david_04": {
      "text": "[Kontrollert] Ros føles godt, så renner det ut igjen, og jeg trenger mer bevis.",
      "suggestion": "Beundring lander et øyeblikk, renner ut igjen og etterlater deg med behov for flere bevis."
    },
    "dp_empathic-understanding_case-david_05": {
      "text": "[Avvisende] Når jeg innrømmer at jeg tar feil, føler jeg meg ribbet og liten.",
      "suggestion": "Å eie en feil kjennes utleverende, som om status og beskyttelse faller samtidig."
    },
    "dp_empathic-understanding_case-david_06": {
      "text": "[Såret, men skarp] Når barna mine gråter, blir jeg utålmodig, og etterpå hater jeg hvor hard jeg høres ut.",
      "suggestion": "Tårene deres vekker utålmodighet og selvforakt, fordi du hører hardheten i deg selv."
    },
    "dp_empathic-understanding_case-david_07": {
      "text": "[Såret, men skarp] Etter at affæren kom fram, får det å være hjemme meg til å føle meg mislykket.",
      "suggestion": "Hjemme vekker nå følelsen av at du har mislyktes."
    },
    "dp_empathic-understanding_case-david_08": {
      "text": "[Bekymret] Jeg har drukket mer etter jobb fordi det er den eneste gangen jeg slutter å kjenne angst.",
      "suggestion": "Drikkingen gir deg en pause fra angsten, og du er bekymret for å bli avhengig av det."
    },
    "dp_empathic-understanding_case-david_09": {
      "text": "[Forvirret] Jeg vet ikke hva vi burde snakke om denne uken; jeg håpet at du kunne styre timen.",
      "suggestion": "Du er usikker på hva du skal ta opp, og håper jeg kan hjelpe oss å finne en retning."
    },
    "dp_empathic-understanding_case-david_10": {
      "text": "[Såret, men skarp] Hvis jeg bare er ordinær i noe, føles det som om jeg forsvinner.",
      "suggestion": "Å være ordinær kjennes som å forsvinne, som om verdi avhenger av å skille seg ut."
    },
    "dp_empathic-understanding_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager fullfører jeg rutinene og kjenner nesten ingenting bak ansiktet.",
      "suggestion": "Rutinene fortsetter mens nummenheten ligger mellom deg og dagen."
    },
    "dp_empathic-understanding_case-marcus_02": {
      "text": "[Forvirret] Jeg vet ikke hva jeg skal snakke om i dag; jeg tenkte kanskje du kunne styre det.",
      "suggestion": "Du er usikker på hvor du skal starte og håper jeg kan hjelpe til med å styre timen."
    },
    "dp_empathic-understanding_case-marcus_03": {
      "text": "[Hyperårvåken] Mareritt gjør meg oppskrudd og tom, som om rommet ikke er trygt.",
      "suggestion": "Mareritt rykker deg våken, oppskrudd og tom, med rommet fortsatt utrygt."
    },
    "dp_empathic-understanding_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg unngår folk fordi det føles tryggere enn å forklare hvorfor jeg forsvinner.",
      "suggestion": "Avstanden beskytter deg mot slitet med å forklare deg og risikoen for at noen kommer for nær."
    },
    "dp_empathic-understanding_case-marcus_05": {
      "text": "[Bekymret] Jeg har drukket etter jobb for å få sove, og nå er jeg bekymret for at jeg ikke får sove uten.",
      "suggestion": "Alkohol har hjulpet deg å sove, og nå er du bekymret for at du trenger det."
    },
    "dp_empathic-understanding_case-marcus_06": {
      "text": "[Stille og på vakt] Når noe godt skjer, kjennes det langt borte, som om det tilhører noen andre.",
      "suggestion": "Det gode kjennes fjernt, nesten utilgjengelig, selv når det skjer med deg."
    },
    "dp_empathic-understanding_case-marcus_07": {
      "text": "[Flatt] Et dørsmell kan kaste meg tilbake før jeg vet hvor jeg er.",
      "suggestion": "Plutselig lyd slipper deg rett inn i alarm før rommet her og nå er helt tilbake."
    },
    "dp_empathic-understanding_case-marcus_08": {
      "text": "[Trist] En venn fra avdelingen sluttet å ringe, og jeg sier til meg selv at jeg ikke ville snakke uansett.",
      "suggestion": "Du sier til deg selv at du ikke ville ha kontakt, og stillheten gjør likevel vondt."
    },
    "dp_empathic-understanding_case-marcus_09": {
      "text": "[Håpløs] Noen netter tenker jeg at ingen ville lagt merke til det om jeg ikke våknet.",
      "suggestion": "De nettene høres dypt håpløse ut, som om livet ditt kjennes usett og nesten ikke teller."
    },
    "dp_empathic-understanding_case-marcus_10": {
      "text": "[Redd] Jeg vil slippe folk inn, men hver gang noen kommer nær, begynner jeg å se etter utgangen.",
      "suggestion": "Du vil ha nærhet og blir samtidig så redd at du begynner å lete etter en vei ut."
    },
    "dp_empathic-affirmation-validation_case-sara_01": {
      "text": "[Lavmælt] Jeg sjekker kontoene hans på sosiale medier selv om det knuser meg.",
      "suggestion": "Det gir mening at du trekkes mot siden hans; det er en måte å strekke seg etter en du ennå ikke helt har tatt inn at du har mistet."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      "text": "[Flau] Jeg smilte meg gjennom hele teammøtet og gråt på toalettet etterpå.",
      "suggestion": "Det gir mening at tårene kom da du var alene; å holde masken offentlig kan ta alt når sorgen fortsatt ligger så tett på."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      "text": "[På gråten] Hvis jeg hadde vært morsommere eller enklere, hadde han kanskje blitt.",
      "suggestion": "Å skylde på deg selv gir mening som en måte å gi smerten et sted å gå når bruddet kjennes så hjelpeløst."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      "text": "[Lavmælt] Om natten blir det for stille, og jeg begynner å kjenne det som om jeg aldri egentlig var ønsket.",
      "suggestion": "Stillheten kan gjøre fraværet til et bevis på at du ikke var ønsket; den følelsen gir mening i ensomheten dette tapet har åpnet."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      "text": "[Sint, så flau] En venninne sa at jeg måtte slutte å sjekke telefonen, og jeg freste til henne.",
      "suggestion": "Det sinnet gir mening når rådet traff et så sårt sted; det handlet ikke bare om en telefon, men om den siste tråden av kontakt du prøvde å ikke miste."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      "text": "[På gråten] Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      "suggestion": "Det morgenslaget gir mening fordi tapet kommer på nytt før du rekker å få noe vern rundt det."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      "text": "[På gråten] Jeg beklager når jeg begynner å gråte, som om sorgen min tar for mye plass.",
      "suggestion": "Det gir mening at du beklager når du har lært å passe så nøye på virkningen du har på andre; selve sorgen er ikke for mye."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      "text": "[Flau] Jeg får dårlig samvittighet for å være så lei meg når andre har større problemer.",
      "suggestion": "Det gir mening at sammenligningen kan få sorgen din til å kjennes illegitim, men bruddet er fortsatt et virkelig tap, og smerten din trenger ikke konkurrere om lov."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      "text": "[Redd] Vennene mine sier at jeg burde bli med ut og spise, men jeg er redd jeg kommer til å begynne å gråte ved bordet.",
      "suggestion": "Ikke rart middag kjennes blottstillende når tristheten fortsatt ligger så nær at den kan renne over foran folk som kanskje ikke skjønner hvor ømt det er."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      "text": "[Lavmælt] Etter dette bruddet tenker en del av meg at kjærlighet må være for andre, ikke for meg.",
      "suggestion": "Etter å ha blitt forlatt gir det mening at den tanken kan kjennes smertefullt troverdig; den bærer ensomheten i å lure på om kjærlighet i det hele tatt er tilgjengelig for deg."
    },
    "dp_empathic-affirmation-validation_case-michael_01": {
      "text": "[Skyldpreget] Jeg traff en syklist med bilen forrige uke. Veien var glatt, men han brakk likevel håndleddet, og jeg klarer ikke slutte å kjenne skyld.",
      "suggestion": "Den skylden har en moralsk tyngde; du mente ikke å skade ham, og likevel ble noen skadet, så det gir mening at det blir sittende."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      "text": "[Defensiv] Hvis jeg ikke har svaret, føler jeg meg avslørt og bløffer.",
      "suggestion": "Det gir mening at det å ikke vite kjennes som å stå foran dom uten dekning, særlig når feil har betydd ydmykelse."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      "text": "[Anspent] Når jeg beklager, kjennes det som å knele foran noen som kommer til å bruke det mot meg.",
      "suggestion": "Hvis svakhet har blitt straffet, kan det å beklage forståelig nok kjennes mindre som reparasjon og mer som å gi noen et våpen."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      "text": "[Fast] Hjemme kan et sukk eller en himling med øynene sette meg av før jeg rekker å tenke.",
      "suggestion": "Det gir mening at de små signalene svir når de lander som respektløshet før du rekker å sortere hva som var ment."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      "text": "[Rasende] Når jeg ser på nyhetene, blir jeg så sint på folk med makt som later som konsekvenser er valgfritt.",
      "suggestion": "Det sinnet gir mening når folk med makt ser ut til å slippe unna ansvar; for deg kan det kjennes uutholdelig urettferdig."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      "text": "[Skamfull] Når barnet mitt spør hvorfor jeg er sint, føler jeg meg som verdens verste far.",
      "suggestion": "Den skammen gir mening fordi det betyr mye for deg å være en trygg far; smerten henger sammen med hvor sterkt du ikke vil at sinne skal definere deg hjemme."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      "text": "[Fast] Å smelle med døra føles fælt etterpå, men i øyeblikket slipper jeg å føle meg liten.",
      "suggestion": "Dørsmellingen gir mening som et skjold mot å føle seg liten og ydmyket, selv om prisen viser seg etterpå."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      "text": "[Defensiv] Hvis noen utfordrer meg offentlig, dobler jeg innsatsen selv om jeg tar feil.",
      "suggestion": "Ikke rart det kjennes beskyttende å stå hardere på sitt når det å bli korrigert offentlig lander som å bli satt under noen."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      "text": "[Skamfull] Jeg hater at jeg trenger hjelp med dette; det får meg til å føle meg svak.",
      "suggestion": "Det er forståelig at hvis styrke har betydd å klare ting alene, kan det å trenge hjelp kjennes blottstillende mer enn fornuftig."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      "text": "[Skamfull] Etter at jeg eksploderer hjemme, ligger jeg våken og ser ansiktene deres for meg mens jeg hater meg selv.",
      "suggestion": "Ikke rart skammen blir liggende og spille det om igjen når ansiktene deres skjærer inn i den delen av deg som vil være tryggere for dem."
    },
    "dp_empathic-affirmation-validation_case-jason_01": {
      "text": "[Skjelvende] Hver presentasjon på jobb får hendene mine til å skjelve, og etterpå føler jeg meg patetisk for at jeg bryr meg så mye.",
      "suggestion": "Presentasjoner setter deg rett under andres blikk, så skjelvingen gir mening som angst i et blottstilt øyeblikk, ikke som en personlig feil."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      "text": "[Nølende] Jeg holder blikket på gulvet så ingen får en grunn til å se på meg.",
      "suggestion": "Det gir mening at det å holde blikket nede har vært en måte å minske faren på når det å bli lagt merke til har kjentes risikabelt."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      "text": "[Engstelig] Jeg later som jeg tekster så jeg har et sted å gjemme meg under småprat.",
      "suggestion": "Det gir mening at telefonen blir et skjul når småprat kan kjennes som å stå uten beskyttelse foran mulig dom."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      "text": "[Stille] Når folk ler høflig, antar jeg at de prøver å komme seg unna meg.",
      "suggestion": "Ikke rart høflig latter kjennes utrygt når tankene allerede står klare for avvisning før kontakt får en sjanse."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      "text": "[Nølende] Komplimenter preller av; en del av meg vil tro på dem, men den mistenksomme delen vinner.",
      "suggestion": "Ikke rart ros er vanskelig å slippe inn når tankene dine har øvd så mye på å angripe deg; den mistenksomme delen prøver å beskytte deg mot å tro for fort."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      "text": "[Stille og skamfull] Etter at jeg har snakket i en gruppe, spiller jeg av hver setning og skammer meg for å høres klein ut.",
      "suggestion": "Det gir mening at du spiller av hver setning når tilhørighet kjennes skjør; skammen prøver å hindre et nytt øyeblikk med smerte."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      "text": "[Stille og skamfull] Jeg droppet enda en lunsj med teamet, og etterpå følte jeg meg patetisk som gjemte meg.",
      "suggestion": "Det gir mening at det å droppe lunsjen beskytter deg mot en frykt som kjennes ekte, og skammen etterpå viser hvor mye du også ønsker å høre til."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      "text": "[Nølende] Jeg skanner hvert rom etter hvem som får til mer enn meg, og så føler jeg meg defekt.",
      "suggestion": "Sammenligningen gir mening som et forsøk på å finne plassen din, og den gjør vondt fordi skammen stadig gir deg den laveste."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      "text": "[Nervøs, nesten smilende] Noen inviterte meg på spillkveld, og jeg hadde lyst til å gå i omtrent ti sekunder før panikken tok over.",
      "suggestion": "Den raske bevegelsen fra lyst til panikk gir mening; invitasjonen treffer både lengselen etter kontakt og frykten for å bli blottstilt."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      "text": "[Stille] Noen netter ligger jeg der og er sikker på at jeg alltid kommer til å være alene fordi jeg er for klein til å elskes.",
      "suggestion": "Ikke rart nettene kjennes tunge når skammen gjør ensomheten til en dom over hele framtiden din."
    },
    "dp_empathic-affirmation-validation_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager føles flate, som om jeg er bak glass og ser livet skje.",
      "suggestion": "Det er forståelig at livet kjennes dempet etter det du har vært gjennom."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      "text": "[Redd] Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      "suggestion": "Ikke rart hevede stemmer kan sende deg bort i hodet; den reaksjonen lærte å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      "text": "[Langsomt og flatt] Når noen er snille mot meg, blir jeg nummen eller mistenksom.",
      "suggestion": "Ikke rart vennlighet kjennes forvirrende når trygghet har vært usikker; nummenhet og mistanke har vært en del av beskyttelsen."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg tar lange dusjer fordi varmt vann kjennes tryggere enn å be noen om trøst.",
      "suggestion": "Selvsagt søker du liten, trygg varme når menneskelig trøst har kjentes farlig eller upålitelig."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      "text": "[Trist] Jeg liker den nye leiligheten, men å pakke ut gamle bilder fikk meg til å sørge over hjemmet jeg egentlig aldri fikk ha.",
      "suggestion": "Ikke rart bildene vekker sorg; å gå videre kan røre ved sorgen over det som manglet, ikke bare det som er nytt."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      "text": "[Anspent og på vakt] Berøring skremmer meg, selv når den er vennlig, og etterpå føler jeg meg ødelagt for å reagere sånn.",
      "suggestion": "Ikke rart reaksjonen kommer før tilliten rekker fram; det er lært beskyttelse, ikke et tegn på at du er ødelagt."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      "text": "[Redd] Når tristheten presser seg fram, blir jeg redd for at jeg ikke kommer tilbake fra den.",
      "suggestion": "Forståelig nok kommer den frykten når følelser en gang kom uten trøst; å stenge dem ned hjalp deg å overleve."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      "text": "[Fjern] Jeg beklager med en gang jeg trenger trøst, som om det allerede er for mye å ønske det.",
      "suggestion": "Selvsagt kan det å trenge trøst kjennes farlig etter at nærhet har vært utrygt; behovet er menneskelig, ikke for mye."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      "text": "[Anspent og på vakt] Før malte jeg og lagde mat; nå føles selv det å velge musikk som et ork.",
      "suggestion": "Etter år med å stenge av for å overleve, er det forståelig at glede kjennes fjern i stedet for lett tilgjengelig."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      "text": "[Flatt og på vakt] Selv i senga ligger skuldrene oppe, som om noen kan komme inn døra.",
      "suggestion": "Ikke rart hvile ikke kommer lett når en del av deg lærte å stå på vakt mot fare."
    },
    "dp_empathic-affirmation-validation_case-carlos_01": {
      "text": "[Anspent og sint] Å se nyheter om familier som min bli behandlet som trusler gjør meg så sint at jeg nesten ikke klarer å sitte stille.",
      "suggestion": "Selvsagt reiser sinnet seg når nyhetene treffer verdighet, familie og den gamle frykten for å bli behandlet som mindreverdig."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      "text": "[Anspent] Hvis jeg ikke kommer inn sterk, tråkker folk over meg.",
      "suggestion": "Med bakgrunnen din er det klart at det å stå støtt har føltes som trygghet."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      "text": "[Skamfull] På kampen til barnet mitt ropte jeg til dommeren og følte meg dårlig etterpå.",
      "suggestion": "Hvem som helst ville hatt vondt av det; angeren viser hvor viktig det er for deg å være den faren du vil være."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      "text": "[Defensiv] Når noen stiller spørsmål ved meg, føler jeg meg liten, og så hever jeg stemmen mer enn jeg mente.",
      "suggestion": "Forståelig nok rykker sinnet inn når spørsmål treffer den gamle følelsen av å bli gjort liten."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      "text": "[Sint, med knyttede never] Jeg knytter nevene og går frem og tilbake; det føles som en kamp er på vei.",
      "suggestion": "Ikke rart never og bein gjør seg klare når det kjennes som en kamp kan komme."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      "text": "[Skamfull] Jeg ødelegger ting og angrer etterpå når jeg ser hvor redde alle ser ut.",
      "suggestion": "Angeren betyr noe; ikke rart frykten deres gjør vondt å se når det å beskytte familien er en del av hvem du vil være."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      "text": "[Skamfull] Kollegaene holder avstand etter at jeg eksploderer, og jeg kjenner skam selv om jeg later som jeg ikke bryr meg.",
      "suggestion": "Ikke rart skam og forsvar kommer samtidig; en del av deg blir såret av avstanden, mens en annen del prøver å skjule det."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      "text": "[Splittet] Jeg går ut av rommet for å ikke eksplodere, og så føler jeg meg svak for å ha gått.",
      "suggestion": "Selvsagt kan det å gå kjennes svakt når styrke har betydd å stå på ditt."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      "text": "[Mistenksom] Ro kjennes mistenkelig, som om noen legger opp til at jeg skal bli tråkket på.",
      "suggestion": "Forståelig nok kan ro kjennes blottstillende mer enn trygt etter det du har lært; mistanken har prøvd å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      "text": "[Sårbar] Mer enn noe annet vil jeg at familien min skal føle seg trygg med meg.",
      "suggestion": "Selvsagt betyr ønsket om at de skal være trygge mye; det er et tydelig tegn på omsorgen og forpliktelsen din."
    },
    "dp_empathic-affirmation-validation_case-nina_01": {
      "text": "[Sliten] Hvis jeg setter meg ned før alt er gjort, begynner skyldfølelsen å ramse opp hva jeg burde gjøre.",
      "suggestion": "Den skyldfølelsen gir mening under den gamle regelen om at verdien din måtte fortjenes gjennom nytte."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      "text": "[Unnskyldende] Å si nei gjør meg urolig hele dagen, som om én grense kan gjøre alle skuffet over meg.",
      "suggestion": "Ikke rart ett nei kan true følelsen av tilhørighet når gamle regler sa at omsorg måtte fortjenes ved å gjøre andre til lags."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      "text": "[Trist og skyldpreget] Jeg gjør alt og føler meg fortsatt usynlig, og så hater jeg meg selv for å ønske at noen skal legge merke til det.",
      "suggestion": "Selvsagt vil du bli lagt merke til; det er et menneskelig behov, særlig når du har båret så mye uten å bli sett."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      "text": "[Skyldpreget] Når sinnet kommer, hører jeg straks at jeg er egoistisk og får skyldfølelse.",
      "suggestion": "Selvsagt følger skyld etter sinne når du lærte at andres behov måtte komme først."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      "text": "[Unnskyldende] Når jeg ber om hjelp, føler jeg meg som en byrde før noen engang svarer.",
      "suggestion": "Ikke rart det å trenge hjelp kjennes risikabelt etter år med å være den som bærer alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      "text": "[Skyldpreget] En rotete kjøkkenbenk kan få meg til å føle at jeg har mislyktes som person.",
      "suggestion": "Når omsorg og prestasjon ble vevd sammen, kan selv rot forståelig nok bli til skam over hvem du er."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      "text": "[Sliten] Jeg sier til meg selv at andre har det verre, så jeg burde ikke føle dette.",
      "suggestion": "Selvsagt nedtoner du smerten når du så lenge har måttet gi plass til alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      "text": "[Unnskyldende] Jeg jobber meg gjennom sykdom, kollapser og får skyldfølelse for å kollapse.",
      "suggestion": "Å presse seg gjennom gir mening under en regel om at hvile er forbudt; selv kollapsen blir dømt av den regelen."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      "text": "[Panisk] Hvis noen virker skuffet, får jeg panikk som om jeg har ødelagt forholdet.",
      "suggestion": "Ikke rart skuffelse kjennes skremmende når kjærlighet har virket knyttet til å holde folk fornøyde."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      "text": "[Splittet] Sønnen min snakker om å verve seg, og jeg blir både stolt og livredd, og så får jeg skyldfølelse for at jeg ikke er modigere.",
      "suggestion": "Selvsagt kan stolthet og frykt komme samtidig; kjærligheten til ham gjør motet hans viktig og det han risikerer nesten uutholdelig."
    },
    "dp_empathic-affirmation-validation_case-aisha_01": {
      "text": "[Panisk] Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar.",
      "suggestion": "Selvsagt holder du øye med døra etter så mange farvel; jeg hører hvor viktig trygghet er."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      "text": "[Splittet] Jeg rev i stykker bilder etter bruddet og følte meg både sterk og tom.",
      "suggestion": "Forståelig nok ga det å rive bildene et øyeblikk av kraft da smerten var uutholdelig; tomheten etterpå hører også med."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      "text": "[Panisk] Noen ganger blir panikken så høy at jeg vil krype ut av huden min.",
      "suggestion": "Ikke rart den trangen dukker opp når smerte og panikk kjennes umulig å bli værende i; det betyr noe at du kan si det her."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      "text": "[Panisk] Når du noterer, tenker jeg at du hater meg og vil løpe.",
      "suggestion": "Med hvor ofte du har blitt misforstått, er det ikke rart at notater kan leses som fare og få deg til å ville ut fort."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      "text": "[Desperat] Jeg sender tjue meldinger fordi jeg trenger dem nær, og så blokkerer jeg dem før de kan gå.",
      "suggestion": "Ikke rart du strekker deg hardt etter nærhet og så beskytter deg når frykten for å bli droppet tar over."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      "text": "[Redd og skamfull] Jeg vet at det ble gjort mot meg, men jeg føler meg fortsatt skitten i min egen hud.",
      "suggestion": "Å kjenne seg skitten etter en krenkelse gir smertefull mening som traumereaksjon; skammen hører til det som ble gjort, ikke til deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      "text": "[Panisk] Når noen sier noe vennlig, hulker jeg som om jeg trenger det og får panikk som om det er en felle.",
      "suggestion": "Det er forståelig at vennlighet treffer både lengselen etter å bli holdt og frykten for at nærhet skal gjøre vondt."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      "text": "[Rasende] Hvis du ser bort et sekund, føler jeg meg visket ut og blir rasende.",
      "suggestion": "Forståelig nok blusser sinnet opp når et lite skifte kan registreres som avvisning og forlatthet."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      "text": "[Skamfull] Jeg hører en stemme som sier at jeg er søppel og umulig å elske, og en del av meg tror på den.",
      "suggestion": "Ikke rart en grusom stemme kan høres sann ut etter så mye svik, selv om den angriper deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      "text": "[Desperat] Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig.",
      "suggestion": "Selvsagt ser du på tiden; etter vonde avslutninger er det forståelig at du gjør deg klar for den neste."
    },
    "dp_empathic-affirmation-validation_case-david_01": {
      "text": "[Kontrollert] Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil heller argumentere med fakta.",
      "suggestion": "Ikke rart fakta kjennes tryggere der; følelser kan svi som kritikk og få deg til å kjenne deg trengt opp i et hjørne."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      "text": "[Rasende] Etter at jeg skremte kona mi, var jeg fortsatt rasende på henne for at hun presset meg, og så kom skammen fordi jeg vet hvordan det høres ut.",
      "suggestion": "Ikke rart dette er vanskelig å si; raseriet kan være ekte uten at frykten du skapte blir noe mindre alvorlig."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      "text": "[Skamfull] Jeg sammenligner meg med andre fedre og føler meg som en bløff.",
      "suggestion": "Ikke rart sammenligning vekker skam når verdi har vært så tett knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      "text": "[Skamfull] Når jeg beklager, kjennes det som å gi noen bevis på at jeg er liten.",
      "suggestion": "Ikke rart det å beklage kjennes ydmykende når det å ta feil har betydd å miste status, trygghet og kontroll."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      "text": "[Avvisende] Jeg planlegger perfekte ferier så vi ser bra ut utenfra.",
      "suggestion": "Selvsagt strever du etter å se samlet ut når fasaden har fungert som beskyttelse mot å bli avslørt."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      "text": "[Redd] Tanken på å være ordinær skremmer meg, som om jeg forsvinner hvis jeg slutter å imponere.",
      "suggestion": "Det er forståelig at «ordinær» kjennes truende når det å imponere har holdt verdi og trygghet oppe."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      "text": "[Skamfull] Jeg sier at det går fint mens jeg føler meg tom, fordi det kjennes ydmykende å innrømme tomheten.",
      "suggestion": "Ikke rart du dekker over tomheten når det å bli blottstilt har kjentes som å miste status og trygghet."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      "text": "[Avvisende] Jeg skryter for å få respekt, og så sitter jeg alene og føler meg tommere enn før.",
      "suggestion": "Det å strekke seg etter respekt gir mening når beundring har vært måten du stabiliserer verdien din på; tomheten etterpå er også smertefull."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      "text": "[Såret, men skarp] Jeg føler fortsatt at faren min sitter et sted og setter karakter på meg.",
      "suggestion": "Den gamle smerten gir mening; å ha blitt målt av ham så lenge kan fortsette å gi gjenklang."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      "text": "[Kontrollert] Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt.",
      "suggestion": "Ikke rart andres suksess pirker i frykten for å være mindre enn når verdi har kjentes så konkurransepreget."
    },
    "dp_empathic-affirmation-validation_case-marcus_01": {
      "text": "[Flatt] De fleste dager går jeg gjennom rutinene som om jeg ikke er helt til stede.",
      "suggestion": "Å føle seg frakoblet gir mening etter så mye traume; nummenhet har vært en måte å holde det gående på."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      "text": "[Fortumlet] Jeg vet ikke hva jeg føler. Det er trykk, sinne og ingenting på samme tid, og jeg føler meg dum fordi jeg ikke har ord.",
      "suggestion": "Det er forståelig at ordene blir vanskelige når nummenhet og trykk kommer samtidig; det å ikke vite er en del av overveldelsen, ikke et tegn på dumhet."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      "text": "[Stille og på vakt] Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten.",
      "suggestion": "Ikke rart stillheten er vanskelig; den kan bringe tyngden tilbake i ett øyeblikk."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      "text": "[Anspent] Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen.",
      "suggestion": "Ikke rart et høyt smell kan kaste systemet ditt i overlevelse før valget rekker å komme med; sinnet etterpå er forståelig."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      "text": "[Lav stemme] Høytider kjennes hule; jeg føler ingenting av det jeg «burde» føle.",
      "suggestion": "Ikke rart høytider lander flatt når nedstenging har vært en del av å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg unngår påminnelser om tjenesten fordi de åpner slusene.",
      "suggestion": "Selvsagt unngår du påminnelser når bølgene kan kjennes for store å bære."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      "text": "[Flatt] Jeg holder leiligheten mørk fordi lyse rom kjennes som om de krever for mye av meg.",
      "suggestion": "Ikke rart det dempede rommet kjennes tryggere når verden allerede krever for mye og lyse rom kan kjennes blottstillende."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      "text": "[Lav stemme] Jeg husker ikke sist jeg lo og stolte på at det kunne vare.",
      "suggestion": "Ikke rart glede kjennes langt unna når systemet ditt har måttet være klart for smerte og tap."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg vil ikke trenge noen, fordi det å trenge folk som regel har betydd å miste kontroll.",
      "suggestion": "Gitt hva nærhet har kostet deg, er det ikke rart at det å klare seg uten noen kjennes som beskyttelse, ikke kulde."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      "text": "[Flatt] Noen ganger tenker jeg at jeg har det best alene for alltid, fordi nærhet bare gir folk flere måter å såre meg på.",
      "suggestion": "Ikke rart alene kan kjennes tryggere, gitt hva nærhet har kostet deg, selv om det er ensomt."
    },
    "dp_exploratory-questions_case-sara_01": {
      "text": "[Lavmælt] Du skulle sett blikket hun ga meg; jeg følte meg så liten.",
      "suggestion": "Hvordan kjennes det inni deg når du føler deg så liten?"
    },
    "dp_exploratory-questions_case-sara_02": {
      "text": "[Flau] Under brunsjen fortsatte jeg å si at det gikk bra, men jeg merket at jeg prøvde for hardt.",
      "suggestion": "Når du merker at du prøver så hardt å virke som om det går bra, hvilken følelse er nærmest?"
    },
    "dp_exploratory-questions_case-sara_03": {
      "text": "[Sint] Jeg ble sint for at han glemte bursdagen min, og så følte jeg meg teit som brydde meg.",
      "suggestion": "Når du kaller deg selv teit for å bry deg, hvilken følelse ligger under det?"
    },
    "dp_exploratory-questions_case-sara_04": {
      "text": "[Lavmælt] Jeg vil spørre ham hvorfor han sluttet å prøve, men jeg sier til meg selv at det ikke er noen vits.",
      "suggestion": "Når du ser for deg å spørre ham om det, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-sara_05": {
      "text": "[Panisk] Noen ganger sletter jeg gamle bilder og leter etter dem igjen ti minutter senere.",
      "suggestion": "Når du ikke klarer å la bildene være borte, hvilken følelse kommer sterkest?"
    },
    "dp_exploratory-questions_case-sara_06": {
      "text": "[Flau] Når noen er snille mot meg, vet jeg plutselig ikke hva jeg skal gjøre med det.",
      "suggestion": "Når vennlighet gjør deg usikker på hva du skal gjøre, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-sara_07": {
      "text": "[Lavmælt] Jeg våkner og glemmer et sekund at han er borte, og så treffer det meg på nytt.",
      "suggestion": "I det første øyeblikket der du husker, hvilken følelse kommer før du forklarer den?"
    },
    "dp_exploratory-questions_case-sara_08": {
      "text": "[På gråten] Jeg blir flau over at jeg fortsatt er så trist, som om sorgen burde hatt utløpsdato.",
      "suggestion": "Når flauheten sier at sorgen burde vært over, hvilken tristhet ber fortsatt om å bli lagt merke til?"
    },
    "dp_exploratory-questions_case-sara_09": {
      "text": "[På gråten] Når jeg ser par på butikken, går jeg før jeg begynner å gråte.",
      "suggestion": "Når du går før tårene kommer, hvilken følelse prøver du å ikke vise?"
    },
    "dp_exploratory-questions_case-sara_10": {
      "text": "[Lavmælt] Jeg går over gaten for å slippe å passere kafeen vi pleide å kalle vår.",
      "suggestion": "Når du ser for deg den kafeen, hvilken følelse kommer før du bestemmer deg for å gå over gaten?"
    },
    "dp_exploratory-questions_case-michael_01": {
      "text": "[Anspent og sint] Når noen retter på én detalj, blir jeg sint og flau samtidig.",
      "suggestion": "Hva merker du inni deg når sinne og flauhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-michael_02": {
      "text": "[Defensiv] Et sukk fra kona får meg til å anta at hun allerede har bestemt at jeg tar feil.",
      "suggestion": "Når det sukket lander som en dom, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-michael_03": {
      "text": "[Anspent] Sjefen roste teamet, men ikke meg, og jeg klarte ikke å slutte å tenke på det.",
      "suggestion": "Når du spiller om igjen at du ikke ble nevnt, hvilken følelse kommer tilbake?"
    },
    "dp_exploratory-questions_case-michael_04": {
      "text": "[Anspent og sint] Jeg speider etter tegn på respektløshet i møterommet før jeg engang vet hvem som har kommet inn.",
      "suggestion": "Når du allerede speider etter respektløshet, hvilken følelse forbereder du deg på?"
    },
    "dp_exploratory-questions_case-michael_05": {
      "text": "[Defensiv] Når jeg beklager til kona mi, føles det som om jeg har gitt henne seieren.",
      "suggestion": "Når det å beklage kjennes som å tape, hvilken følelse er vanskeligst å bli værende med?"
    },
    "dp_exploratory-questions_case-michael_06": {
      "text": "[Anspent] Når jeg er usikker på et svar foran teamet, begynner jeg å snakke fortere så ingen skal merke det.",
      "suggestion": "Når ingen får se at du er usikker, hvilken følelse unngår du?"
    },
    "dp_exploratory-questions_case-michael_07": {
      "text": "[Anspent og sint] Jeg sa til kona mi at det gikk fint, men jeg var fortsatt sint flere timer etterpå.",
      "suggestion": "Når sinnet blir værende i flere timer, hvor merker du det mest?"
    },
    "dp_exploratory-questions_case-michael_08": {
      "text": "[Defensiv] Jeg smeller med dører hjemme så ingen hører meg si at jeg ble såret.",
      "suggestion": "Før døren smeller, hvilken følelse er der som er vanskelig å si høyt?"
    },
    "dp_exploratory-questions_case-michael_09": {
      "text": "[Anspent] Når noen ber meg roe meg ned, eksploderer jeg før jeg hører noe mer.",
      "suggestion": "Når de ordene treffer, hvilken følelse kommer før eksplosjonen?"
    },
    "dp_exploratory-questions_case-michael_10": {
      "text": "[Skamfull] Jeg hater å føle meg svak foran folk, som om alle kan se at jeg mislyktes.",
      "suggestion": "Når «svak» dukker opp foran folk, hvilken følelse kommer med det å bli sett?"
    },
    "dp_exploratory-questions_case-jason_01": {
      "text": "[Stille] Når det er min tur til å snakke, mister jeg setningen, og det virker som om alle venter.",
      "suggestion": "Når det virker som om alle venter, hvilken følelse dukker opp?"
    },
    "dp_exploratory-questions_case-jason_02": {
      "text": "[Skjelvende stemme] Stemmen skjelver når jeg sier navnet mitt, og så hører jeg hvor patetisk jeg virker.",
      "suggestion": "Når du hører skjelvingen i stemmen din, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-jason_03": {
      "text": "[Engstelig] En venn svarte ikke, og jeg fortsatte å lure på hva jeg hadde gjort feil.",
      "suggestion": "Når du lurer på hva du har gjort feil, hvilken følelse følger med det spørsmålet?"
    },
    "dp_exploratory-questions_case-jason_04": {
      "text": "[Stille] Hvis noen ler på andre siden av rommet, antar jeg at det handler om meg.",
      "suggestion": "Hva skjer inni deg når du tror latteren handler om deg?"
    },
    "dp_exploratory-questions_case-jason_05": {
      "text": "[Nølende] Jeg holder blikket på bordet så folk ikke skal spørre meg om noe.",
      "suggestion": "Når det kjennes risikabelt å se opp, hvilken følelse kommer rundt det å bli sett?"
    },
    "dp_exploratory-questions_case-jason_06": {
      "text": "[Engstelig] Etter møter spiller jeg av én setning i timevis og kjenner ansiktet bli varmt.",
      "suggestion": "Hvis vi tar én av setningene du spiller av, hvilken følelse holder gjennomgangen i gang?"
    },
    "dp_exploratory-questions_case-jason_07": {
      "text": "[Stille] På fester følger jeg med på utgangen før jeg engang vet hvem som er i rommet.",
      "suggestion": "Når oppmerksomheten går mot utgangen, hvilken følelse prøver du å komme unna?"
    },
    "dp_exploratory-questions_case-jason_08": {
      "text": "[Nølende] Noen smilte til meg i gangen, og jeg klarte ikke å skjønne om det var vennlig eller kleint.",
      "suggestion": "Når du ikke vet hva smilet betyr, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-jason_09": {
      "text": "[Engstelig] Jeg sier at jeg er opptatt før småprat kan avsløre hvor klein jeg er.",
      "suggestion": "Når småprat kjennes som om det skal avsløre deg, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-jason_10": {
      "text": "[Stille] Søndagskveldene kjennes tunge, som om alle andre har et liv som venter på dem.",
      "suggestion": "Når søndagstyngden kommer, hvilken følelse kommer med tanken på tilhørighet?"
    },
    "dp_exploratory-questions_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager føles dempet, og jeg klarer ikke vite om jeg er trist eller bare nummen.",
      "suggestion": "Når du sier dempet, hvor merker du det i deg selv?"
    },
    "dp_exploratory-questions_case-laura_02": {
      "text": "[Redd] Naboene kranglet i gangen, og jeg brukte resten av kvelden på å late som det ikke var noe.",
      "suggestion": "Hva skjer inni deg når du prøver å late som det ikke var noe?"
    },
    "dp_exploratory-questions_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er snille mot meg, blir jeg mistenksom og får dårlig samvittighet for å være mistenksom.",
      "suggestion": "Hva legger du merke til inni deg når vennlighet og mistenksomhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-laura_04": {
      "text": "[Flatt og på vakt] Selv mild berøring på skulderen får meg til å skvette før jeg rekker å tenke hvem det er.",
      "suggestion": "Når du skvetter før du rekker å tenke, hvilken følelse er der?"
    },
    "dp_exploratory-questions_case-laura_05": {
      "text": "[Fjern] Om kvelden heller jeg opp vin før jeg har bestemt meg for om jeg egentlig vil ha det.",
      "suggestion": "Hva legger du merke til i øyeblikket før du heller opp?"
    },
    "dp_exploratory-questions_case-laura_06": {
      "text": "[Anspent og på vakt] Jeg våkner og planlegger allerede hvordan jeg skal komme gjennom dagen uten å trenge noen.",
      "suggestion": "Hvilken følelse kommer opp når det å trenge noen er mulig?"
    },
    "dp_exploratory-questions_case-laura_07": {
      "text": "[Langsomt og flatt] Gode nyheter lander flatt, og jeg skjønner ikke hvorfor jeg ikke klarer å glede meg.",
      "suggestion": "Hva legger du merke til inni deg når gode nyheter lander flatt?"
    },
    "dp_exploratory-questions_case-laura_08": {
      "text": "[Fjern] Noen ganger kommer det en sang fra da jeg var gift, og tristheten dukker opp før jeg rekker å slå den av.",
      "suggestion": "Når tristheten dukker opp så fort, hvilken følelse ber om oppmerksomhet?"
    },
    "dp_exploratory-questions_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg sier unnskyld for at jeg trenger trøst, som om det er noe jeg kan få kjeft for.",
      "suggestion": "Når det å be om trøst kjennes som noe du kan få kjeft for, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-laura_10": {
      "text": "[Flatt og på vakt] Jeg hopper over alt med krangling og slåssing og sier til folk at jeg bare ikke liker slike filmer.",
      "suggestion": "Hva skjer inni deg når du ser for deg å fortelle noen den egentlige grunnen?"
    },
    "dp_exploratory-questions_case-carlos_01": {
      "text": "[Defensiv] Når formannen stiller spørsmål ved meg foran gjengen, ler jeg det bort, men klarer ikke slippe det.",
      "suggestion": "Hva er det vanskeligste å kjenne når du ikke klarer å slippe det?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      "text": "[Anspent] Etter en krangel går jeg og tenker på hva jeg burde ha sagt, selv når jeg vet at det bare gjør ting verre.",
      "suggestion": "Hvilken følelse er der mens disse svarene fortsetter å komme?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg, føles det som om folk slutter å respektere meg.",
      "suggestion": "Når det å trekke seg kjennes som å miste respekt, hvilken følelse er vanskeligst å møte?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      "text": "[Skamfull] Jeg ser stadig for meg at gutten min rykket til da jeg hevet stemmen, og jeg vil ikke se rett på det.",
      "suggestion": "Når du lar deg selv se rykket hans, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      "text": "[Mistenksom] Når huset blir stille etter en krangel, blir jeg mer anspent enn da vi ropte.",
      "suggestion": "Hva skjer inni deg når stillhet kjennes farligere enn roping?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      "text": "[Anspent] Jeg sier at jeg ikke bryr meg om hva folk tenker, men ett blikk kan ødelegge hele dagen min.",
      "suggestion": "Hva treffer det blikket i deg?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      "text": "[Defensiv] Faren min pleide å si at følelser gjør menn ubrukelige, og jeg hører det fortsatt når kona mi ber meg snakke.",
      "suggestion": "Hva kjenner du inni deg når du hører den gamle regelen nå?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      "text": "[Sint, med knyttede never] Når en annen mann snakker ned til meg, vet jeg ikke om jeg blir sint eller flau.",
      "suggestion": "Hva legger du først merke til når sinne og flauhet kommer samtidig?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      "text": "[Anspent og sint] Etter en krangel sier jeg til meg selv at jeg er ferdig med det, men jeg er fortsatt helt påskrudd i timevis.",
      "suggestion": "Når du er så påskrudd i timevis, hvilken følelse er fortsatt der?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      "text": "[Sårbar] Det jeg vil mest, er at familien min skal føle seg trygg med meg.",
      "suggestion": "Når du sier ønsket om trygghet høyt, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-nina_01": {
      "text": "[Sliten] Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      "suggestion": "Når skylden skyller inn, hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      "text": "[Skyldpreget] Jeg klager over at ingen hjelper, men jeg gjør også ting om igjen når de prøver.",
      "suggestion": "Hvilken følelse kommer opp når noen hjelper på en måte du ikke kan kontrollere?"
    },
    "dp_exploratory-questions_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg så mye at jeg nesten tar det tilbake.",
      "suggestion": "Hva skjer inni deg når neiet begynner å forsvinne?"
    },
    "dp_exploratory-questions_case-nina_04": {
      "text": "[Skyldpreget] Når jeg hviler, kaller en stemme meg lat før jeg har rukket å trekke pusten.",
      "suggestion": "Når det ordet lander, hvilken følelse kommer opp i deg?"
    },
    "dp_exploratory-questions_case-nina_05": {
      "text": "[Unnskyldende] Jeg sier unnskyld før jeg ber om hjelp, som om behovet mitt allerede er for mye.",
      "suggestion": "Hvilken følelse får du mot deg selv når behovet ditt kjennes for stort?"
    },
    "dp_exploratory-questions_case-nina_06": {
      "text": "[Splittet] Utpå ettermiddagen skjønner jeg at jeg har sagt ja til tre ting jeg aldri hadde lyst til.",
      "suggestion": "Hva legger du merke til når du sier høyt at du ikke hadde lyst?"
    },
    "dp_exploratory-questions_case-nina_07": {
      "text": "[Sliten] Jeg sammenligner meg med andre mødre og bestemmer meg for at jeg har strøket på en prøve alle andre forstår.",
      "suggestion": "Når du bestemmer deg for at du har strøket på den prøven, hvilken følelse kommer opp i deg?"
    },
    "dp_exploratory-questions_case-nina_08": {
      "text": "[Skyldpreget] Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      "suggestion": "Når du ser for deg å bli tatt vare på, hvilken følelse kommer før «egoist»-stemmen?"
    },
    "dp_exploratory-questions_case-nina_09": {
      "text": "[Splittet] Jeg sier at det er enklere om jeg gjør det selv, og så bruker jeg kvelden på å være sint for at ingen hjalp.",
      "suggestion": "Når sinnet kommer etter at du har gjort det selv, hvilken følelse ligger under?"
    },
    "dp_exploratory-questions_case-nina_10": {
      "text": "[Sliten] Jeg krasjer på sofaen om kvelden etter å ha holdt alle sammen hele dagen.",
      "suggestion": "Når du slutter å holde alle sammen, hva legger du merke til inni deg?"
    },
    "dp_exploratory-questions_case-aisha_01": {
      "text": "[Panisk] Hvis et svar ikke kommer etter at jeg har åpnet meg, begynner jeg å tenke at jeg var dum som stolte på dem.",
      "suggestion": "Hvilken følelse kommer opp når det å stole på noen begynner å kjennes dumt?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      "text": "[Desperat] Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "I pusten før det snur, hvilken følelse er for vond å holde seg nær?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      "text": "[Desperat] Jeg vet ikke hva jeg føler i dag; alt er for mye og samtidig litt blankt.",
      "suggestion": "Når det både er for mye og blankt, hvilken følelse er lettest å merke først?"
    },
    "dp_exploratory-questions_case-aisha_04": {
      "text": "[Desperat] Når du ser ned for å skrive notater, begynner jeg å lure på hva du egentlig tenker om meg.",
      "suggestion": "Hva skjer inni deg når du ser for deg hva jeg kanskje tenker?"
    },
    "dp_exploratory-questions_case-aisha_05": {
      "text": "[Panisk] Når jeg snakker om kloring, vil jeg få det til å høres tilfeldig ut så du ikke overreagerer.",
      "suggestion": "Hvilken følelse kommer opp når du prøver å få det til å høres tilfeldig ut?"
    },
    "dp_exploratory-questions_case-aisha_06": {
      "text": "[Desperat] Hvis du avlyser en time, vil jeg ikke komme tilbake og bli forlatt to ganger.",
      "suggestion": "Når du ser for deg en avlysning, hva er det første som stikker i deg?"
    },
    "dp_exploratory-questions_case-aisha_07": {
      "text": "[På gråten] Vennlighet får meg til å gråte, og så vil jeg komme meg bort fra den.",
      "suggestion": "Hva er den første følelsen som kommer når vennlighet når inn?"
    },
    "dp_exploratory-questions_case-aisha_08": {
      "text": "[Desperat] Jeg tester folk etter at de kommer nær, for å se om de bryr seg nok til å bli.",
      "suggestion": "Når du ser for deg en test, hvilken frykt prøver du å besvare inni deg?"
    },
    "dp_exploratory-questions_case-aisha_09": {
      "text": "[Skamfull] Etter at jeg eksploderer, hater jeg meg selv så mye at jeg nesten ikke holder ut å være i min egen kropp.",
      "suggestion": "Når selvhatet treffer, hvilken følelse er vanskeligst å være nær?"
    },
    "dp_exploratory-questions_case-aisha_10": {
      "text": "[Panisk] På slutten sier jeg ha det som om alt er greit, og så går jeg herfra sint for at jeg trenger deg.",
      "suggestion": "Hvilken følelse ligger under sinnet når du går?"
    },
    "dp_exploratory-questions_case-david_01": {
      "text": "[Kontrollert] Når hun kaller meg kald, vil jeg avfeie henne, men det blir sittende i meg etterpå.",
      "suggestion": "Hvilken følelse er der når det blir sittende i deg etterpå?"
    },
    "dp_exploratory-questions_case-david_02": {
      "text": "[Kontrollert] Hvis jeg ikke vinner, føler jeg meg hul, som om det ikke er noe fast under meg.",
      "suggestion": "Når seieren ikke er der, hvilken følelse følger med den tomheten?"
    },
    "dp_exploratory-questions_case-david_03": {
      "text": "[Defensiv] Jeg begynner å ramse opp prestasjoner når jeg føler meg dømt av kona mi.",
      "suggestion": "Hvilken følelse prøver du å ikke vise når du ramser opp prestasjoner?"
    },
    "dp_exploratory-questions_case-david_04": {
      "text": "[Kontrollert] Ros fra sjefen føles godt i et sekund, og så begynner jeg å lure på hva han vil.",
      "suggestion": "Hva legger du merke til når ros går over i mistenksomhet?"
    },
    "dp_exploratory-questions_case-david_05": {
      "text": "[Avvisende] Å innrømme at jeg tar feil, får ansiktet til å brenne som om alle kan se gjennom meg.",
      "suggestion": "Når det å innrømme feil kjennes blottstillende, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-david_06": {
      "text": "[Unnvikende] Når samtalen blir følelsesladet, sjekker jeg telefonen så jeg slipper å se blottstilt ut.",
      "suggestion": "Når du strekker deg etter telefonen, hvilken følelse beveger du deg bort fra?"
    },
    "dp_exploratory-questions_case-david_07": {
      "text": "[Kontrollert] Når barna protesterer ved middagen, hører jeg meg selv høres ut som faren min.",
      "suggestion": "Hvilken følelse kommer opp når du hører den likheten?"
    },
    "dp_exploratory-questions_case-david_08": {
      "text": "[Fjern] Siden affæren klarer jeg ikke vite om jeg føler skyld, eller bare irritasjon over at alle stadig tar det opp.",
      "suggestion": "Hva legger du merke til når skyld og irritasjon ligger så tett?"
    },
    "dp_exploratory-questions_case-david_09": {
      "text": "[Flau] Jeg vil at noen skal legge merke til det jeg gjør uten at jeg må tigge om anerkjennelse.",
      "suggestion": "Når anerkjennelsen ikke kommer, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-david_10": {
      "text": "[Såret, men skarp] Jeg hater å være helt vanlig på jobb foran alle, som om det betyr at jeg har forsvunnet.",
      "suggestion": "Når «helt vanlig» kjennes som å forsvinne, hvilken lengsel dukker opp under det?"
    },
    "dp_exploratory-questions_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "Før bølgen treffer, hva er det tidligste signalet om at den kommer?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      "text": "[Hyperårvåken] Etter mareritt vet jeg ikke hva som er virkelig nok til å snakke om, og hva jeg bør la ligge.",
      "suggestion": "Hva legger du merke til mens du avgjør hva du skal la ligge?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      "text": "[Stille og på vakt] I matbutikken holder jeg meg nær utgangene fordi gangene mellom hyllene kjennes for trange.",
      "suggestion": "Når gangene kjennes for trange, hvilken følelse kommer opp?"
    },
    "dp_exploratory-questions_case-marcus_04": {
      "text": "[Lav stemme] Etter mørkets frembrudd vet jeg ikke om stillheten er fredelig eller om den lukker seg rundt meg.",
      "suggestion": "Hva skjer inni deg når stillheten går fra fredelig til å lukke seg rundt deg?"
    },
    "dp_exploratory-questions_case-marcus_05": {
      "text": "[Lav stemme] Jeg sitter i bilen etter jobb fordi det å gå opp betyr å være alene med det som er der.",
      "suggestion": "Hvilken følelse venter når du ser for deg å åpne døra til leiligheten?"
    },
    "dp_exploratory-questions_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg holder lyset dempet og ignorerer telefonen så verden holder seg langt unna.",
      "suggestion": "Når verden holder seg langt unna, hvilken følelse blir lettere å håndtere?"
    },
    "dp_exploratory-questions_case-marcus_07": {
      "text": "[Flatt] Når noe godt skjer, venter jeg på delen der det blir tatt tilbake.",
      "suggestion": "Hvilken følelse kommer opp mens du venter på at det skal bli tatt tilbake?"
    },
    "dp_exploratory-questions_case-marcus_08": {
      "text": "[Hyperårvåken] Plutselige lyder i trappeoppgangen får meg til å skvette, og så speider jeg etter fare.",
      "suggestion": "Rett etter at du skvetter, hvilken følelse tar over?"
    },
    "dp_exploratory-questions_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg husker ikke sist jeg lo ordentlig uten å stoppe meg selv.",
      "suggestion": "Når du sier at du ikke husker sist du lo ordentlig, hvilken følelse kommer nærmest overflaten?"
    },
    "dp_exploratory-questions_case-marcus_10": {
      "text": "[Flatt] Jeg sier til meg selv at jeg har det best alene, fordi nærhet alltid koster noe.",
      "suggestion": "Hvilken fare ser du for deg når nærhet kjennes som noe som koster?"
    },
    "dp_providing-treatment-rationale_case-sara_01": {
      "text": "[Lavmælt] Burde jeg ikke bare fokusere på positive tanker i stedet for å grave i hvor trist jeg er?",
      "suggestion": "Positive tanker kan hjelpe et øyeblikk, og samtidig trenger tristheten et sted å gå. Hvis vi lytter til den i små, trygge doser, kan den vise hva som trenger trøst eller kontakt i stedet for å komme sterkere tilbake om kvelden."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      "text": "[Flau] Hvorfor fortsetter du å spørre hva jeg føler når jeg bare trenger en plan for å komme meg gjennom uka?",
      "suggestion": "En plan virker bedre når den passer til følelsen som velter uka. Vi lytter til sorgen først fordi den sier noe om du trenger trøst, kontakt, hvile eller en grense før vi velger steg."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      "text": "[På gråten] Jeg blir flau over at jeg gråter over dette igjen. Hvordan skal det å gi tårene plass hjelpe meg videre?",
      "suggestion": "Det gir mening at det er flaut. Vi prøver ikke å holde deg i gråten; vi bruker tårene som et tegn på hva som fortsatt trenger omsorg, fordi det hjelper sorgen å bevege seg i stedet for å bli skjult og dra deg tilbake."
    },
    "dp_providing-treatment-rationale_case-sara_04": {
      "text": "[Flau] Hvis avledning får meg gjennom de stille timene, hvorfor skal vi rote med det?",
      "suggestion": "Avledning hjelper deg gjennom toppen. Samtidig øver vi på å berøre ensomheten i små doser, fordi stillheten da blir mindre farlig, ikke bare noe du må løpe fra."
    },
    "dp_providing-treatment-rationale_case-sara_05": {
      "text": "[Bekymret] Hvordan hjelper det å snakke om et brudd når andre har større problemer?",
      "suggestion": "Smerte trenger ikke vinne en konkurranse før den får oppmerksomhet. Varsom lytting til sorgen gjør det lettere å høre hva den trenger – trøst, grenser, kontakt – slik at den kan lette i stedet for å bli skjøvet bort."
    },
    "dp_providing-treatment-rationale_case-sara_06": {
      "text": "[På gråten] Hvis vi snakker mer om ham, blir han ikke bare værende enda lenger i hodet mitt?",
      "suggestion": "Vi skal ikke repetere ham; vi kartlegger draget under – ensomhet, håp, selvbebreidelse – fordi sjekkemønsteret får mindre næring når de delene får omsorg."
    },
    "dp_providing-treatment-rationale_case-sara_07": {
      "text": "[Nølende] Kan vi sette mål så jeg holder meg travel nok til å slippe å kjenne dette?",
      "suggestion": "Vi kan bruke mål, men hvis de bare dekker over sorgen, venter ensomheten på kvelden. Noen minutter med følelsen hjelper oss å velge handlinger som fyller på, ikke bare bedøver."
    },
    "dp_providing-treatment-rationale_case-sara_08": {
      "text": "[Bekymret] Hva om «hul» er alt jeg har? Jeg vet ikke hvordan det kan bli nyttig.",
      "suggestion": "«Hul» er ikke ubrukelig; det gir oss en inngang. Tyngden, formen og draget gjør en uklar tomhet konkret nok til å forstå og lindre."
    },
    "dp_providing-treatment-rationale_case-sara_09": {
      "text": "[Utålmodig] Jeg vil ha en tidslinje for når jeg slutter å sjekke profilen hans; ellers kjennes dette meningsløst.",
      "suggestion": "En tidslinje ville vært beroligende, men løkken endres ved at vi lærer hva sjekkingen gjør for deg. Når vi kartlegger håpet, ensomheten og krasjet, får du flere måter å møte behovet på uten å åpne såret på nytt."
    },
    "dp_providing-treatment-rationale_case-sara_10": {
      "text": "[Bekymret] Hvordan er dette annerledes enn å fortelle bruddet om igjen til jeg selv blir lei av å høre det?",
      "suggestion": "Her forteller vi det ikke bare på nytt. Vi senker tempoet i historien for å finne stedene som sitter fast, fordi de øyeblikkene viser hva som fortsatt trenger trøst, mening eller en ny respons."
    },
    "dp_providing-treatment-rationale_case-michael_01": {
      "text": "[Skeptisk] Jeg kom for sinnekontroll, ikke følelsesprat. Hvordan stopper dette meg fra å eksplodere?",
      "suggestion": "Vi starter ved det første stikket, før sinnet tar rattet, fordi det å fange skam, respektløshet eller frykt tidlig gjør tone og handling til valg i stedet for automatiske reaksjoner."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      "text": "[Defensiv] Er ikke det å lete etter utløseren bare å bortforklare at jeg eksploderer?",
      "suggestion": "Poenget er ansvarlighet, ikke bortforklaring, fordi det å kjenne rekkefølgen i triggeren gjør at du kan fange det første stikket tidligere og velge før det blir roping."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      "text": "[Anspent] Hvorfor bremse når folk ser på og jeg må virke som om jeg har kontroll?",
      "suggestion": "Å bremse beskytter kontrollen i stedet for å svekke den. Fem sekunder hjelper deg å merke støtet før stemmen hardner, så autoritet ikke må komme gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_04": {
      "text": "[Bekymret] Hvordan hjelper det å nærme meg skam hvis kona mi eller teamet mitt ser det som svakhet?",
      "suggestion": "Vi øver ikke på svakhet; vi finner stikket tidlig, fordi det å sette ord på hva som traff gir deg et stødigere svar enn å bevise styrke gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_05": {
      "text": "[Utfordrende] Kan vi hoppe over følelsene og bare lage et verktøy for når brystet blir varmt?",
      "suggestion": "Vi kan bygge verktøyet rundt den varmen. Følelsesarbeidet forteller oss nøyaktig hva verktøyet må avbryte: skam, trussel eller trangen til å bevise deg."
    },
    "dp_providing-treatment-rationale_case-michael_06": {
      "text": "[Bekymret] Hvordan hjelper det meg å lede at jeg merker stram kjeve når et møte blir spent?",
      "suggestion": "Den stramme kjeven hjelper som et tidlig varsel, ikke en avsporing. Hvis du fanger det før stemmen blir skarp, får du noen sekunder til å svare med autoritet i stedet for affekt."
    },
    "dp_providing-treatment-rationale_case-michael_07": {
      "text": "[Bekymret] Hva om jeg eksploderer etter alt dette og alle sier at terapien mislyktes?",
      "suggestion": "Da bruker vi det som data, ikke som en dom. Vi går gjennom sekvensen, finjusterer kartet og øver pausen, så neste vanskelige øyeblikk går bedre."
    },
    "dp_providing-treatment-rationale_case-michael_08": {
      "text": "[Bekymret] Hvordan skal mer prat bevise for kona mi at jeg kan slutte å eksplodere?",
      "suggestion": "Beviset må vises: færre utbrudd, kortere vei ned igjen og raskere reparasjon. Praten hjelper bare hvis den kartlegger reaksjonen tidlig nok til at du kan velge annerledes hjemme."
    },
    "dp_providing-treatment-rationale_case-michael_09": {
      "text": "[Utfordrende] Vil dette endre hvordan teamet ser meg, eller bare få meg til å analysere meg selv?",
      "suggestion": "Endringen må merkes i tone, timing og reparasjon. Å fange stikket tidligere betyr noe fordi teamet får en leder som svarer i stedet for å blusse opp."
    },
    "dp_providing-treatment-rationale_case-michael_10": {
      "text": "[Flau] Hva skal jeg gjøre hvis jeg ikke er god på følelser og ikke har ord?",
      "suggestion": "Du trenger ikke ha flytende følelsesspråk for å begynne. Kjeve, bryst, varme, ett behov - de konkrete tegnene betyr noe fordi de gjør arbeidet praktisk og holder det under din kontroll."
    },
    "dp_providing-treatment-rationale_case-jason_01": {
      "text": "[Skeptisk] Hjelper dette faktisk sosial angst, eller lærer jeg bare å stirre på frykten?",
      "suggestion": "Målet er ikke å stirre på frykten. Vi finner det første signalet som er håndterbart, roer det nok ned og øver på å bli værende, slik at selvtillit vokser fra gjentatte øyeblikk du kommer deg gjennom."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      "text": "[Blank] Hva om jeg blir blank her også og kaster bort hele timen?",
      "suggestion": "Blankheten er nyttig informasjon, ikke bortkastet tid. Vi starter med selve blankheten fordi det å merke de første signalene gir oss en vei inn i frykten uten å tvinge fram ord."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      "text": "[Engstelig] Det er tankene som ødelegger alt, så hvorfor spør du stadig om brystet mitt?",
      "suggestion": "Tankene betyr noe, og brystet varsler ofte før tankene blir høylytte. Når vi følger det signalet, kan vi gripe inn tidligere, før spiralen har fått fart."
    },
    "dp_providing-treatment-rationale_case-jason_04": {
      "text": "[Bekymret] Når jeg legger merke til frykten, blir den høyere, så hvorfor skulle jeg øve på det?",
      "suggestion": "Vi oversvømmer deg ikke med frykt. Vi øver ved kanten fordi små doser lærer alarmen din at frykt kan merkes, navngis og overleves uten å ta over."
    },
    "dp_providing-treatment-rationale_case-jason_05": {
      "text": "[Nølende] Kan vi ikke bare lage et manus for hva jeg skal si før møter, så jeg ikke fryser?",
      "suggestion": "Ja, og manuset må tåle frysingen. Vi kobler ordene til det første fryktsignalet, så du kan bli værende lenge nok til å bruke dem."
    },
    "dp_providing-treatment-rationale_case-jason_06": {
      "text": "[Engstelig] Hvor lenge tar det før jeg kan snakke i møter uten at kroppen tar over?",
      "suggestion": "De første skiftene er ofte små: litt mindre beredskap, litt mer rom til å være til stede når oppmerksomheten rettes mot deg, og raskere vei tilbake etterpå."
    },
    "dp_providing-treatment-rationale_case-jason_07": {
      "text": "[Flau] Jeg synes det er pinlig å snakke om at jeg er så redd; hvordan skal det hjelpe å si det høyt?",
      "suggestion": "Vi går varsomt fram, og du bestemmer tempoet. Å si det høyt hjelper skammen å slippe litt taket, fordi frykten blir møtt i stedet for gjemt."
    },
    "dp_providing-treatment-rationale_case-jason_08": {
      "text": "[Bekymret] Hva gjør jeg faktisk når stemmen som sier «du er klein» starter?",
      "suggestion": "Vi gjør stemmen konkret, finner kroppssignalet som følger med den, og øver på et stødigere svar, fordi da har du en handling før skammen får deg til å forsvinne."
    },
    "dp_providing-treatment-rationale_case-jason_09": {
      "text": "[Nølende] Må jeg alltid jobbe så hardt bare for å snakke som alle andre?",
      "suggestion": "Det blir som regel lettere. Når trygghet bygges gjennom gjentatt, håndterlig øving, er det færre sosiale signaler som utløser alarm, og det å snakke kan kjennes mindre som et helkroppsprosjekt."
    },
    "dp_providing-treatment-rationale_case-jason_10": {
      "text": "[Stille] Hvorfor øve på øyekontakt når det kjennes som folk kan se alt som er galt med meg?",
      "suggestion": "Vi tvinger ikke øyekontakt. Korte, valgte øyeblikk kan lære alarmen at det å bli sett kan tåles, og er noe annet enn å bli avslørt."
    },
    "dp_providing-treatment-rationale_case-laura_01": {
      "text": "[Bekymret] Hvis dette er hjernekjemi, hvorfor skulle det endre noe å snakke med deg?",
      "suggestion": "Kjemi betyr noe, og gjentatt trygghet former også systemet over tid. Ved siden av eventuell medisinsk oppfølging gir terapi sinn og kropp nye erfaringer med å være til stede, bli roet og ikke være alene, slik at alarmsystemet får nye bevis."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      "text": "[Langsomt og flatt] Hvordan vet jeg at dette ikke får meg til å gjenoppleve traumer når jeg allerede forsvinner?",
      "suggestion": "Du skal ikke presses til å gjenoppleve noe. Små doser og jording hjelper deg å berøre én kant og komme tilbake; over tid kan det hjelpe minnet å slippe taket."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      "text": "[Langsomt og flatt] Hvis jeg blir nummen før jeg kan føle noe, hva er det egentlig vi jobber med?",
      "suggestion": "Vi jobber med selve nummenheten fordi den er beskyttelse, ikke fravær. Kantene viser oss når nærhet kjennes risikabelt, slik at følelser kan komme tilbake i mengder du kan håndtere."
    },
    "dp_providing-treatment-rationale_case-laura_04": {
      "text": "[Bekymret] Hva om vennligheten din gjør meg mer mistenksom i stedet for tryggere?",
      "suggestion": "Da behandler vi mistanken som nyttig beskyttelse. Vi senker tempoet fordi tillit trenger bevis; du kan teste varme i bittesmå mengder før du må stole på den."
    },
    "dp_providing-treatment-rationale_case-laura_05": {
      "text": "[Nølende] Kommer dette til å dra opp ting jeg ikke tåler og gjøre meg verre etterpå?",
      "suggestion": "Vi går varsomt fram fordi trygghet kommer først. Du bestemmer tempoet, vi jorder ofte, og vi stopper før aktiveringen blir for høy, slik at arbeidet bygger toleranse i stedet for overveldelse."
    },
    "dp_providing-treatment-rationale_case-laura_06": {
      "text": "[Langsomt og flatt] Hvorfor jakte på bittesmå signaler hvis jeg stenger ned før jeg kan bruke dem?",
      "suggestion": "De bittesmå signalene er varsellamper før nedstenging. Å lære dem lar oss senke tempoet tidligere, så du får større sjanse til å bli værende i stedet for å forsvinne."
    },
    "dp_providing-treatment-rationale_case-laura_07": {
      "text": "[Langsomt og flatt] Hvordan skal prat endre denne flatheten når jeg knapt kjenner noe?",
      "suggestion": "Målet er et bredere toleransevindu: mer tilgang til følelse og mer ro. Vi følger små livstegn i stedet for å tvinge følelser fram."
    },
    "dp_providing-treatment-rationale_case-laura_08": {
      "text": "[Langsomt og flatt] Hvordan skal jeg vite at dette virker når jeg fortsatt er nummen de fleste dager?",
      "suggestion": "Vi følger små tegn, fordi nummenhet mykner gradvis: litt mindre beredskap når stemmer heves, noen flere sekunder med nærvær, og korte øyeblikk av varme eller ro som ikke kjennes som en felle."
    },
    "dp_providing-treatment-rationale_case-laura_09": {
      "text": "[Nølende] Kan vi ikke bare snakke om praktiske ting så jeg slipper å kjenne alt dette?",
      "suggestion": "Praktisk støtte hører også hjemme her. Følelsesarbeidet gjør at støtten lander bedre fordi du blir mindre alene og mindre på vakt med det du har båret."
    },
    "dp_providing-treatment-rationale_case-laura_10": {
      "text": "[Bekymret] Hva om jeg fryser her inne og du bare sitter og venter på et svar?",
      "suggestion": "Da blir frysingen selve arbeidet. Vi pauser, jorder og setter ord på det som skjer, fordi det lærer systemet ditt at nedstenging kan møtes trygt, ikke presses."
    },
    "dp_providing-treatment-rationale_case-carlos_01": {
      "text": "[Defensiv] Kommer dette til å gjøre meg myk? Folk må fortsatt vite at de ikke skal kødde med meg.",
      "suggestion": "Målet er stødighet, ikke mykhet. Du kan holde en tydelig grense uten å skremme familien din eller gi kontrollen over til sinnet."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      "text": "[Anspent] Hvorfor snakke om følelser i stedet for å gi meg verktøy jeg kan bruke når jeg blir opphetet?",
      "suggestion": "Verktøy er en del av arbeidet. Følelsesarbeid betyr noe fordi det viser nøyaktig når varmen starter, så verktøyet kommer før knyttnever eller ord tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      "text": "[Anspent og sint] Hvordan hjelper dette når noen viser meg manglende respekt foran familien min?",
      "suggestion": "Vi kartlegger flammepunktet, så du kan skille reell respektløshet fra stikket av ydmykelse. Det gir deg en fast respons uten eksplosjon."
    },
    "dp_providing-treatment-rationale_case-carlos_04": {
      "text": "[Skeptisk] Hvordan skal det å kjenne mer hindre meg i å miste brodden og bli overkjørt?",
      "suggestion": "Dette handler ikke om å ta fra deg brodden. Å skille beskyttelse fra eksplosjon betyr noe fordi folk kan vite hvor grensen går, mens sønnen din får stødighet i stedet for frykt."
    },
    "dp_providing-treatment-rationale_case-carlos_05": {
      "text": "[Defensiv] Hvis sinne er det som beskytter meg, hvorfor skal jeg bruke terapi på å kjenne det som ligger under?",
      "suggestion": "Sinne har beskyttet deg, og det har også skremt folk du er glad i. Vi ser under sinnet fordi det hjelper deg å beholde den beskyttende klarheten uten at eksplosjonen bestemmer for deg."
    },
    "dp_providing-treatment-rationale_case-carlos_06": {
      "text": "[Anspent] Hvordan skal pust bety noe når jeg allerede er to sekunder fra å smelle?",
      "suggestion": "Pust betyr noe bare som en døråpner. Den kjøper noen sekunder, fordi de sekundene lar deg fange sårethet eller ydmykelse før smellet blir eneste mulighet."
    },
    "dp_providing-treatment-rationale_case-carlos_07": {
      "text": "[Anspent og sint] Hvordan krever jeg respekt uten å oppføre meg som om noen kan tråkke på meg?",
      "suggestion": "Vi bygger et tredje valg fordi du trenger respekt og trygghet samtidig. Når du setter ord på det som traff under, får du en fast respons som ikke må bli en trussel."
    },
    "dp_providing-treatment-rationale_case-carlos_08": {
      "text": "[Defensiv] Jeg lærte at du må slå først, så hvorfor skulle det hjelpe å bremse?",
      "suggestion": "Den regelen hjalp deg å overleve den gangen. Her senker vi farten i tennpunktet, fordi det å kjenne hva som blir truffet under det hele gir deg mer valg før «slå først»-responsen tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_09": {
      "text": "[Skyldpreget] Barnet mitt så meg sint. Hvordan hjelper det ham at jeg snakker om følelser?",
      "suggestion": "Du modellerer reparasjon. Når du fanger det tidligere og gjør opp raskere, lærer han trygghet og ansvarlighet av deg, ikke bare frykt for sinne."
    },
    "dp_providing-treatment-rationale_case-carlos_10": {
      "text": "[Defensiv] Hvordan unngår vi at dette blir årevis med prat mens familien min venter?",
      "suggestion": "Vi holder det fokusert ved å sikte på tennpunktene som gjør mest skade, og så sjekke om du fanger, roer og reparerer dem raskere hjemme."
    },
    "dp_providing-treatment-rationale_case-nina_01": {
      "text": "[Skyldpreget] Er det ikke egoistisk å fokusere på følelsene mine når alle trenger noe fra meg?",
      "suggestion": "Følelsene dine peker mot behov og grenser; det er det som gjør omsorg bærekraftig. Når vi lytter til dem, kan du hjelpe uten å forsvinne."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      "text": "[Unnskyldende] Hva hjelper det å legge merke til kroppen når skylden treffer før jeg rekker å tenke?",
      "suggestion": "De signalene varsler skyld før det automatiske ja-et tar over. Når du fanger dem tidlig, får du en pause, fordi det er der en grense kan bli mulig."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      "text": "[Bekymret] Hvordan skal følelsesarbeid hjelpe når jeg trenger konkrete steg før jeg drukner?",
      "suggestion": "Konkrete steg betyr noe. Følelsesarbeidet betyr noe fordi det viser hvilken forespørsel, grense eller behov som faktisk letter belastningen, så planen ikke blir enda en oppgave du bærer alene."
    },
    "dp_providing-treatment-rationale_case-nina_04": {
      "text": "[Bekymret] Hvordan hjelper det å fokusere på skyld når jeg allerede får dårlig samvittighet av å si nei?",
      "suggestion": "Skylden er trykkpunktet. Når du merker den tidlig og øver små, respektfulle grenser, kan den skyldige delen lære at omsorg også inkluderer deg."
    },
    "dp_providing-treatment-rationale_case-nina_05": {
      "text": "[Bekymret] Hvis folk kan forlate meg når jeg slutter å hjelpe, hvordan hjelper det å navngi behov?",
      "suggestion": "Å navngi behov lar oss teste frykten varsomt i stedet for å følge den automatisk. De riktige relasjonene blir ofte sterkere når folk vet hva du faktisk trenger og hvor grensene dine går."
    },
    "dp_providing-treatment-rationale_case-nina_06": {
      "text": "[Nølende] Kan vi bare fikse timeplanen min? Å snakke om behov høres ut som enda en oppgave.",
      "suggestion": "Vi kan jobbe med timeplanen, og behovene sier hva timeplanen må beskytte. Ellers kan planen se organisert ut mens den fortsatt bruker deg opp."
    },
    "dp_providing-treatment-rationale_case-nina_07": {
      "text": "[Bekymret] Hva om det alltid føles feil å si nei, uansett hvor mye vi snakker?",
      "suggestion": "Da handler ikke fremgang om å vente på at skylden forsvinner. Vi øver på å legge merke til den, sjekke om den passer, og velge en grense likevel, fordi skyld kan mykne etter nye erfaringer."
    },
    "dp_providing-treatment-rationale_case-nina_08": {
      "text": "[Bekymret] Hvordan blir det lettere å be om hjelp når det å trenge noe kjennes som for mye?",
      "suggestion": "Øvingen skjer med små, konkrete forespørsler, slik at skammen får nye bevis. Litt støtte om gangen kan lære systemet ditt at behov kan være gjensidig, ikke for mye."
    },
    "dp_providing-treatment-rationale_case-nina_09": {
      "text": "[Skyldpreget] Hvis jeg fokuserer på behov, blir jeg ikke den trengende personen jeg misliker?",
      "suggestion": "Tydelige behov gjør folk som regel mindre desperate, ikke mer. Å navngi dem lar deg spørre direkte før bitterhet, kollaps eller skjulte tester tar over."
    },
    "dp_providing-treatment-rationale_case-nina_10": {
      "text": "[Sliten] Hvordan skal jeg vite at dette faktisk hjelper og ikke bare gjør meg mer selvopptatt?",
      "suggestion": "Konkrete tegn vil vise det: å spørre med mindre unnskyldning, hvile med mindre straff og sette grenser uten å viske ut deg selv. De tegnene betyr noe fordi målet er omsorg som varer, ikke selvopptatthet."
    },
    "dp_providing-treatment-rationale_case-aisha_01": {
      "text": "[Bekymret] Hva om det å snakke om å bli forlatt gjør at jeg vil skade meg igjen før jeg klarer å stoppe det?",
      "suggestion": "Sikkerhet kommer først. Vi bygger en plan, jording og støtte før vi berører den smerten, fordi målet er å holde deg i kontakt mens forlatelsesalarmen blir mindre farlig."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      "text": "[Desperat] Jeg trenger at du lover at du aldri forlater meg, ellers ser jeg ikke hvordan dette skal hjelpe.",
      "suggestion": "Det løftet ville roe deg et øyeblikk, men det ville ikke være ærlig. Trygghet på lengre sikt kommer av forutsigbare adskillelser, å navngi frykten og reparere bommer raskt, så panikken lærer at den ikke er alene."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      "text": "[Panisk] Hvis du avlyser, hvordan skal det å navngi alarmen stoppe meg fra å gjøre noe drastisk?",
      "suggestion": "Å navngi den er bare én del. Vi lager også en avlysningsplan, slik at gjentatte, forutsigbare steg hjelper panikken å stige, nå toppen og komme ned igjen uten at du blir alene med den."
    },
    "dp_providing-treatment-rationale_case-aisha_04": {
      "text": "[Bekymret] Hva om følelsene mine er for mye for enhver terapeut å jobbe med?",
      "suggestion": "Følelsene dine er store på grunn av det du har levd. Her doserer vi – små slurker, mye jording – så det kjennes overlevelig."
    },
    "dp_providing-treatment-rationale_case-aisha_05": {
      "text": "[Panisk] Når jeg har panikk, hvorfor spørre om føtter og pust i stedet for bare å roe meg ned?",
      "suggestion": "Panikk er en alarmtilstand, ikke bare en tanke. Føtter, pust og stolen hjelper med å sende trygghetssignaler her og nå, fordi det gir deg nok rom til å velge neste steg."
    },
    "dp_providing-treatment-rationale_case-aisha_06": {
      "text": "[Desperat] Hvordan hjelper det å jobbe med behovet når jeg vil ha beroligelse fra deg med én gang?",
      "suggestion": "Det akutte behovet fortjener direkte arbeid, fordi tydelige forespørsler, små doser av å ta imot og måter å roe seg mellom timene gjør nærhet mindre desperat."
    },
    "dp_providing-treatment-rationale_case-aisha_07": {
      "text": "[Panisk] Hvis vi fokuserer på denne relasjonen, blir jeg ikke knyttet og faller fra hverandre når den tar slutt?",
      "suggestion": "Vi bruker relasjonen som øving med grenser og reparasjon. Når tilknytningen navngis, doseres og gjøres forutsigbar, blir den mindre av en hemmelig panikk du må håndtere alene."
    },
    "dp_providing-treatment-rationale_case-aisha_08": {
      "text": "[Bekymret] Hvordan skal dette hjelpe relasjonene mine å ikke eksplodere når jeg går fra å trygle til å skyve bort?",
      "suggestion": "Vi kartlegger skiftet tidlig: panikken, protesten og trangen til å teste. Da kan du navngi frykt, be direkte eller ta trygg avstand før relasjonen blir en kamp."
    },
    "dp_providing-treatment-rationale_case-aisha_09": {
      "text": "[Nølende] Kommer dette til å ta evigheter, eller kommer jeg alltid til å være så intens?",
      "suggestion": "Tidlige gevinster bør bli synlige: færre panikktopper, raskere ro og flere måter å navngi frykt før den tar over. Øving hjelper med å bygge veien fra alarm til stødigere grunn."
    },
    "dp_providing-treatment-rationale_case-aisha_10": {
      "text": "[Mistenksom] Hver grense fra en terapeut høres ut som avstand, så hvorfor skulle jeg stole på dette?",
      "suggestion": "Vi jobber direkte med den frykten. Jeg forklarer rammen, inviterer deg til å si hvordan den virker på deg, og reparerer bommer, slik at gjentatt forutsigbar kontakt kan gjøre at grenser kjennes mindre som forlatelse."
    },
    "dp_providing-treatment-rationale_case-david_01": {
      "text": "[Kontrollert] Hvorfor fokusere på følelser når jeg trenger resultater folk faktisk kan se?",
      "suggestion": "Vi fokuserer der fordi følelser driver reaksjonene folk ser. Når du fanger stikket under sinne eller avstand, får du mer kontroll over tone, reparasjon og utfall hjemme og på jobb."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      "text": "[Skeptisk] Hvordan er dette praktisk hvis jeg ikke vil bli psykoanalysert eller redusert til barndommen min?",
      "suggestion": "Vi holder det praktisk ved å følge øyeblikkene her og nå først. Historien tas bare inn når den forklarer dagens reaksjoner, fordi poenget er stødigere valg du kan bruke med én gang."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      "text": "[Utfordrende] Hjelper dette ekteskapet mitt, eller handler det bare om meg?",
      "suggestion": "Det hjelper ekteskapet fordi mønsteret lever mellom dere, men starter også inni deg. Når vi bremser stikket under defensiviteten, kan du høre mer, eie mer og reparere før samtalen hardner."
    },
    "dp_providing-treatment-rationale_case-david_04": {
      "text": "[Kontrollert] Jeg kan teorien allerede. Hvorfor bruke tid på følelser i stedet for å fikse atferd?",
      "suggestion": "Teori hjelper bare hvis den når øyeblikket der atferden endres. Vi fokuserer på følelser fordi skam og trussel er der valgene dine snevres inn; når du fanger dem, får du mer rom til å handle annerledes."
    },
    "dp_providing-treatment-rationale_case-david_05": {
      "text": "[Såret, men skarp] Følelsene mine er problemet. Hvorfor skal vi fokusere på det som ødelegger alt?",
      "suggestion": "Reaksjonene gjør skade, og nettopp derfor senker vi tempoet. Å fange skam eller trussel før det styrer tonen din hjelper følelser å bli informasjon du kan bruke, ikke en kraft som tar over rommet."
    },
    "dp_providing-treatment-rationale_case-david_06": {
      "text": "[Kravstor] Jeg trenger sinnekontroll, ikke en dypdykk i hva jeg føler under det.",
      "suggestion": "Sinnekontroll virker best når den starter før eksplosjonen. Å se under sinnet hjelper deg å fange første støt av skam, trussel eller frykt, så kontrollen begynner tidligere enn når du må tvinge deg rolig etter at skaden har skjedd."
    },
    "dp_providing-treatment-rationale_case-david_07": {
      "text": "[Utfordrende] Kan vi hoppe over barndomsprat og holde oss til det som skjer nå?",
      "suggestion": "Ja, vi kan holde oss til nåtiden. Vi navngir bare tidligere mønstre hvis de viser seg i reaksjonene dine i dag, slik at historien tjener endring i stedet for å bli en omvei."
    },
    "dp_providing-treatment-rationale_case-david_08": {
      "text": "[Bekymret] Hva om jeg ikke føler noe når du ber meg se innover?",
      "suggestion": "Da starter vi der, fordi små signaler som stram kjeve eller hulhet i brystet gir oss et praktisk inngangspunkt. Du styrer tempoet."
    },
    "dp_providing-treatment-rationale_case-david_09": {
      "text": "[Kravstor] Jeg trenger raske gevinster; jeg vil ikke inn i enda et endeløst innsiktsprosjekt.",
      "suggestion": "Da følger vi atferd fra starten, fordi raske gevinster må vise seg i handling: å fange defensiviteten tidligere, reparere raskere og komme gjennom vanskelige samtaler med mindre skade."
    },
    "dp_providing-treatment-rationale_case-david_10": {
      "text": "[Kontrollert] Hvordan vet jeg at dette er verdt det og ikke bare enda et innsiktsprosjekt?",
      "suggestion": "Vi bruker konkrete markører fordi innsikt alene ikke er nok: mindre nedstenging i vanskelige samtaler, raskere reparasjon når du bommer, og mer rom til å være til stede når skammen blir truffet."
    },
    "dp_providing-treatment-rationale_case-marcus_01": {
      "text": "[Flatt] Prat endrer ikke det som skjedde, så hvorfor åpne døra til det?",
      "suggestion": "Det endrer ikke fortiden. Liten, jordet kontakt endrer hvordan fortiden treffer deg nå, fordi minnene kan få mindre kontroll over søvn, nummenhet og isolasjon."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      "text": "[Langsomt og flatt] Jeg vil ikke bli oversvømt; når jeg mister kontrollen, forsvinner jeg i flere dager.",
      "suggestion": "Det er nettopp derfor vi jobber i små slurker: jording først, berøre én kant, komme tilbake. Tempoet hjelper deg å beholde kontrollen mens minnene blir mindre alene og mindre eksplosive."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      "text": "[Langsomt og flatt] Følelser er problemet. Når jeg kjenner dem, drikker jeg, stenger av eller mister flere dager.",
      "suggestion": "Den erfaringen er nettopp grunnen til at vi går sakte. Vi skal ikke åpne alt; vi bygger nok trygghet til at følelser kan bli signaler du tåler, ikke kriser du må bedøve eller flykte fra."
    },
    "dp_providing-treatment-rationale_case-marcus_04": {
      "text": "[Flatt] Hvorfor legge merke til vaktsignalene når jeg er på vakt hele tiden?",
      "suggestion": "Rekkefølgen betyr noe. Hvis du lærer første steg fra scanning til nedstenging, kan du avbryte tidligere og komme tilbake til rommet før det trekker deg helt tilbake dit."
    },
    "dp_providing-treatment-rationale_case-marcus_05": {
      "text": "[Hyperårvåken] Hvordan skal det å sitte med følelser hjelpe marerittene, i stedet for å gjøre nettene verre?",
      "suggestion": "Dette handler ikke om å sitte endeløst i smerte. Vi stabiliserer deg før og etter dårlige netter og bearbeider små biter bare når det er trygt, fordi det gir etterdønningene mindre kraft."
    },
    "dp_providing-treatment-rationale_case-marcus_06": {
      "text": "[Flatt] Hvordan skal det å jobbe med kontakt hjelpe når det å være alene hindrer folk i å kreve noe av meg?",
      "suggestion": "Å være alene har beskyttet deg mot press og tap. Vi bygger kontakt i små, valgte doser, slik at nærhet blir noe du kan styre, ikke noe som fanger deg."
    },
    "dp_providing-treatment-rationale_case-marcus_07": {
      "text": "[Flatt] Hva er fremgang for meg hvis det å føle seg normal er urealistisk?",
      "suggestion": "Fremgang kan bety mer søvn, færre skvett, små øyeblikk av varme og å tåle å være nær en følelse en liten stund uten å stenge ned, fordi kontakt begynner å kjennes trygg i små doser."
    },
    "dp_providing-treatment-rationale_case-marcus_08": {
      "text": "[Lav stemme] Hvorfor skal jeg stole på dette hvis terapeuter vanligvis presser på for historier jeg ikke vil fortelle?",
      "suggestion": "Den mistilliten er viktig informasjon. Vi gjør arbeidet forutsigbart, forklarer hvorfor vi spør, og lar deg styre dybden, fordi tillit fortjenes gjennom tempo, ikke kreves."
    },
    "dp_providing-treatment-rationale_case-marcus_09": {
      "text": "[Nølende] Kan vi holde dette praktisk og ikke grave gjennom alt det vonde?",
      "suggestion": "Ja. Vi sikter oss inn på det som påvirker hverdagen nå og bruker korte drypp av følelsesarbeid bare der det hjelper, så praktiske endringer og dypere stoff holder seg i biter du tåler."
    },
    "dp_providing-treatment-rationale_case-marcus_10": {
      "text": "[Langsomt og flatt] Hva om jeg aldri føler meg normal igjen, og denne flatheten bare er den jeg er nå?",
      "suggestion": "Vi jager ikke en perfekt normal. Vi bygger mot mer søvn, mindre nedstenging og trygg kontakt, som er tegn på at følelser og nærhet kan komme tilbake i doser du tåler."
    },
    "dp_empathic-explorations_case-sara_01": {
      "text": "[Lavmælt] Bare det å se navnet hans dukke opp setter meg fortsatt ut, og jeg hater hvor mye det betyr.",
      "suggestion": "Å se navnet hans setter deg fortsatt ut, og det er vondt at det fortsatt betyr så mye."
    },
    "dp_empathic-explorations_case-sara_02": {
      "text": "[Flau] Jeg sier til venner at det går bra, og så blir jeg redd for at de hører at det ikke gjør det.",
      "suggestion": "Du prøver å høres ut som om det går bra, samtidig som det kjennes risikabelt at de kan høre hvor lite bra det er."
    },
    "dp_empathic-explorations_case-sara_03": {
      "text": "[På gråten] Jeg føler meg fortapt etter bruddet, som om jeg ikke vet hva jeg skal gjøre med kveldene.",
      "suggestion": "Kveldene gjør deg usikker på hvor du skal gjøre av deg, og den fortaptheten har sin egen smerte."
    },
    "dp_empathic-explorations_case-sara_04": {
      "text": "[Lavmælt] Jeg skrev «unnskyld» til ham tre ganger, og så skjønte jeg at jeg ikke vet hva jeg prøvde å reparere.",
      "suggestion": "Du strakte deg etter en slags reparasjon, og så ble det uklart hva du egentlig unnskyldte deg for."
    },
    "dp_empathic-explorations_case-sara_05": {
      "text": "[Panisk] Jeg sletter bilder for å bevise at jeg er ferdig, får panikk og leter etter dem igjen.",
      "suggestion": "Én handling sier «bli ferdig», og så sier panikken at denne slutten ikke er så enkel."
    },
    "dp_empathic-explorations_case-sara_06": {
      "text": "[Flau] Når noen er snille mot meg, faller blikket før jeg rekker å stoppe det.",
      "suggestion": "Vennligheten kommer, og blikket ditt går ned før du egentlig rekker å ta den inn."
    },
    "dp_empathic-explorations_case-sara_07": {
      "text": "[Lavmælt] I noen sekunder etter at jeg våkner, glemmer jeg at han er borte, og så husker jeg det.",
      "suggestion": "Det er den korte lettelsen, og så kommer tapet tilbake på én gang."
    },
    "dp_empathic-explorations_case-sara_08": {
      "text": "[Flau] Jeg er trist, og så blir jeg flau over at jeg fortsatt snakker om det.",
      "suggestion": "Tristheten er her, og flauheten kommer raskt oppå; begge er en del av dette øyeblikket."
    },
    "dp_empathic-explorations_case-sara_09": {
      "text": "[På gråten] Når jeg ser par holde hender, blir jeg lei meg, og så føler jeg meg barnslig for å ville ha det.",
      "suggestion": "Det å se dem vekker ønsket, og så kommer skammen inn rundt ønsket."
    },
    "dp_empathic-explorations_case-sara_10": {
      "text": "[Flau] Hvis jeg lar noen se hele rotet, ser jeg for meg at de stille ønsker at jeg skal slutte.",
      "suggestion": "Du vil at noen skal vite hvor vondt det er, og samtidig forventer du at de trekker seg unna."
    },
    "dp_empathic-explorations_case-michael_01": {
      "text": "[Fast] Når noen retter på én detalj, hører jeg det om igjen etterpå som om jeg ble hengt ut.",
      "suggestion": "Korrigeringen fortsetter å høres ut som å bli hengt ut, og sinnet ligger tett på den følelsen."
    },
    "dp_empathic-explorations_case-michael_02": {
      "text": "[Anspent og sint] Jeg går inn i møter allerede klar for at noen skal vise meg manglende respekt.",
      "suggestion": "Du er på vakt før noe har skjedd, nesten som om du venter på at manglende respekt skal vise seg."
    },
    "dp_empathic-explorations_case-michael_03": {
      "text": "[Anspent] Etter at jeg har eksplodert hjemme, sier jeg til meg selv at de presset meg, men jeg kjenner meg fortsatt elendig.",
      "suggestion": "En del av deg argumenterer med at de presset deg, og en annen del blir sittende igjen og kjenne seg elendig etterpå."
    },
    "dp_empathic-explorations_case-michael_04": {
      "text": "[Skamfull] Noen ganger får jeg lyst til å kaste telefonen etter en jobbmelding, og så føler jeg meg latterlig.",
      "suggestion": "Trangen kommer fort, og etterpå sitter du igjen og ser på deg selv med skam."
    },
    "dp_empathic-explorations_case-michael_05": {
      "text": "[Defensiv] Et lite sukk fra kona mi kan kjennes som om hun allerede har bestemt at jeg er problemet.",
      "suggestion": "Sukket lander som en avgjørelse om deg, og så blusser det raskt opp."
    },
    "dp_empathic-explorations_case-michael_06": {
      "text": "[Anspent] Når jeg ikke vet svaret, blir jeg anspent og begynner å snakke som om jeg vet det likevel.",
      "suggestion": "Det er vanskelig å la det synes at du ikke vet, så du går raskt inn i å høres sikker ut."
    },
    "dp_empathic-explorations_case-michael_07": {
      "text": "[Skamfull] Jeg leser hver melding om igjen før jeg sender, fordi én feil kan plage meg hele natten.",
      "suggestion": "Én mulig feil kan bli værende i timevis, så det blir vanskelig å slutte å sjekke."
    },
    "dp_empathic-explorations_case-michael_08": {
      "text": "[Anspent og sint] I det øyeblikket jeg føler meg svak, blir jeg sint og hører faren min si at det nettopp er problemet.",
      "suggestion": "«Svak» bringer sinnet og farens dom rett inn i rommet."
    },
    "dp_empathic-explorations_case-michael_09": {
      "text": "[Skamfull] Noen netter spiller jeg av hvert ord jeg sa, og prøver å finne hvor jeg rotet det til.",
      "suggestion": "Du går gjennom hvert ord på nytt og leter etter punktet der det gikk galt."
    },
    "dp_empathic-explorations_case-michael_10": {
      "text": "[Sårbar] Jeg vil at sønnen min skal føle seg trygg rundt meg, og jeg vet ikke hvordan jeg skal si det uten å høres svak ut.",
      "suggestion": "Du vil så sterkt at han skal være trygg, og selv det å si det henter fram den gamle regelen om svakhet."
    },
    "dp_empathic-explorations_case-jason_01": {
      "text": "[Stille] Når det er min tur til å snakke, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Oppmerksomheten vendes mot deg, og ordene forsvinner akkurat når du trenger dem."
    },
    "dp_empathic-explorations_case-jason_02": {
      "text": "[Nølende] Jeg holder fingeren over «send», og så sletter jeg meldingen fordi det å ville ha kontakt plutselig kjennes ydmykende.",
      "suggestion": "Ønsket om kontakt er der, og så gjør ydmykelsen det vanskelig å la meldingen bli stående."
    },
    "dp_empathic-explorations_case-jason_03": {
      "text": "[Redd] Jeg ble invitert i bursdag, og en del av meg ble glad, men så begynte jeg å bekymre meg for at jeg kom til å ødelegge det.",
      "suggestion": "Det er glede over å bli invitert, og så begynner bekymringen å trenge seg på."
    },
    "dp_empathic-explorations_case-jason_04": {
      "text": "[Stille] Hvis jeg møter blikket til noen for lenge, antar jeg at de kan se hvor klein jeg er.",
      "suggestion": "Blikkontakten begynner å kjennes som om de kan se hvor klein du føler deg, akkurat det du prøver å skjule."
    },
    "dp_empathic-explorations_case-jason_05": {
      "text": "[Flau] Etter møter kan én liten pinlig pause få meg til å krympe meg resten av dagen.",
      "suggestion": "Den lille pausen blir med deg, og flauheten kommer tilbake lenge etter at møtet er over."
    },
    "dp_empathic-explorations_case-jason_06": {
      "text": "[Engstelig] Når jeg går inn i et rom, ser jeg etter utgangen før jeg bestemmer meg for om jeg skal prøve å delta.",
      "suggestion": "Utgangen fanger oppmerksomheten først, før du får finne ut om det kan gå an å bli med."
    },
    "dp_empathic-explorations_case-jason_07": {
      "text": "[Stille] Før jeg presenterer meg, begynner jeg å se for meg hvor rar jeg kommer til å høres ut.",
      "suggestion": "Allerede før du snakker, blir øyeblikket til en test på hvordan du kommer til å virke."
    },
    "dp_empathic-explorations_case-jason_08": {
      "text": "[Nølende] Jeg sammenligner meg med alle der og bestemmer alltid at jeg er den minst interessante personen.",
      "suggestion": "Sammenligningen ender med deg nederst, og det gjør vondt før noen faktisk har avvist deg."
    },
    "dp_empathic-explorations_case-jason_09": {
      "text": "[Blank] Noen ganger later jeg som jeg skriver melding, så småpraten ikke trenger å begynne.",
      "suggestion": "Telefonen gir deg en måte å sette kontakten på pause, og litt skjul for presset ved å måtte svare der og da."
    },
    "dp_empathic-explorations_case-jason_10": {
      "text": "[Stille og skamfull] Jeg følte meg ensom på søndag, men jeg ignorerte også to meldinger.",
      "suggestion": "Ensomheten og det å trekke seg unna er der samtidig, side om side."
    },
    "dp_empathic-explorations_case-laura_01": {
      "text": "[Langsomt og flatt] De fleste dager er flate, men hvis tristhet flimrer, stenger jeg den ned før den brer seg.",
      "suggestion": "De fleste dager er flate, og når tristheten begynner å flimre, er det noe i deg som stenger den ned før den får bre seg."
    },
    "dp_empathic-explorations_case-laura_02": {
      "text": "[Redd] Hevede stemmer trenger ikke engang være rettet mot meg; jeg blir bare stille og venter på at det skal gå over.",
      "suggestion": "Selv når sinnet ikke er rettet mot deg, blir noe i deg stille og venter. Vi kan være litt med det stille stedet."
    },
    "dp_empathic-explorations_case-laura_03": {
      "text": "[Anspent og på vakt] Når noen er snille mot meg, begynner jeg å lete etter hva som er haken før jeg vet om jeg vil ta imot vennligheten.",
      "suggestion": "Vennligheten er der, og nesten med en gang leter du etter hva som er haken. Vi kan legge merke til hva som skjer i øyeblikket mellom å ville ta imot og å beskytte deg."
    },
    "dp_empathic-explorations_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg drikker vin om kvelden fordi støyen i hodet blir skarpere når huset blir stille.",
      "suggestion": "Vinen ser ut til å dempe skarpheten som kommer når huset blir stille."
    },
    "dp_empathic-explorations_case-laura_05": {
      "text": "[Fjern] Jeg våkner og forventer allerede at dagen skal gå galt, selv om ingenting har skjedd ennå.",
      "suggestion": "Du våkner allerede forberedt på at noe skal gå galt. Vi kan legge merke til hvordan det er å møte dagen med den forventningen."
    },
    "dp_empathic-explorations_case-laura_06": {
      "text": "[Skamfull] Selv mild berøring får meg til å skvette, og etterpå hater jeg at reaksjonen min er så synlig.",
      "suggestion": "Skvetten kommer først, og så ser skammen ut til å komme fordi reaksjonen din har blitt sett."
    },
    "dp_empathic-explorations_case-laura_07": {
      "text": "[Langsomt og flatt] Når gode nyheter kommer, kan jeg si de riktige ordene, men jeg kjenner nesten ingenting.",
      "suggestion": "Ordene kan svare, mens følelsen holder seg langt unna. Vi kan legge merke til det nesten-ingenting-stedet uten å presse på."
    },
    "dp_empathic-explorations_case-laura_08": {
      "text": "[Fjern] Noen ganger åpner en sang noe i meg, og et øyeblikk kan jeg nesten kjenne tristheten.",
      "suggestion": "Sangen ser ut til å nå et sted nummenheten vanligvis dekker over, så litt tristhet får komme nær."
    },
    "dp_empathic-explorations_case-laura_09": {
      "text": "[Anspent og på vakt] Jeg får skyldfølelse for å ønske trøst, som om det å trenge noe gjør meg til et problem.",
      "suggestion": "Skylden ser ut til å gjøre et menneskelig behov til bevis på at du ber om for mye."
    },
    "dp_empathic-explorations_case-laura_10": {
      "text": "[Langsomt og flatt] Jeg unngår filmer med slåssing fordi jeg ikke vil finne ut hva ett eneste rop gjør med meg.",
      "suggestion": "Å unngå filmen beskytter deg fra å måtte finne ut hva ropet kan sette i gang. Vi kan legge merke til varsomheten i det valget."
    },
    "dp_empathic-explorations_case-carlos_01": {
      "text": "[Defensiv] Kona mi sier at hun hører tonefallet mitt endre seg før jeg selv merker at noe er galt.",
      "suggestion": "Hun hører endringen før du selv fanger den. Vi kan senke tempoet rundt det øyeblikket og se hva som kan skje rett før tonefallet skifter."
    },
    "dp_empathic-explorations_case-carlos_02": {
      "text": "[Anspent] Etter en krangel vet jeg ikke om jeg skal si unnskyld eller late som om alt er greit.",
      "suggestion": "Etterpå finnes det to mulige bevegelser: reparere eller gå videre. Vi kan være litt med det usikre stedet mellom de to."
    },
    "dp_empathic-explorations_case-carlos_03": {
      "text": "[Redd] Hvis jeg trekker meg, kjenner jeg at jeg forsvinner, som om jeg ikke har noen kontur igjen.",
      "suggestion": "Å trekke seg ser ut til å treffe et sted der du forsvinner, der konturene begynner å bli borte."
    },
    "dp_empathic-explorations_case-carlos_04": {
      "text": "[Skamfull] Jeg ser for meg igjen og igjen at gutten min skvetter, og jeg hater at han lærte den frykten av meg.",
      "suggestion": "Den scenen ser ut til å bære både kjærligheten til ham og smerten ved at frykten peker mot deg."
    },
    "dp_empathic-explorations_case-carlos_05": {
      "text": "[Anspent] Når det blir rolig etter en krangel, begynner jeg å vente på at noen skal ta det opp igjen.",
      "suggestion": "Roen kjennes ikke helt rolig; en del av deg venter på at det skal komme tilbake. Vi kan legge merke til hvordan den ventingen kjennes."
    },
    "dp_empathic-explorations_case-carlos_06": {
      "text": "[Anspent og sint] Jeg ødelegger ting fordi kraften i meg kjennes som om den må lande et sted.",
      "suggestion": "Ødeleggelsen ser ut til å gi kraften et sted å lande før den når noen."
    },
    "dp_empathic-explorations_case-carlos_07": {
      "text": "[Defensiv] Hvis jeg lar meg være myk, vet jeg ikke om folk vil respektere meg eller utnytte det.",
      "suggestion": "Mykhet bringer med seg usikkerhet om du vil bli respektert eller utnyttet. Vi kan være nær den usikkerheten uten å tvinge fram et svar."
    },
    "dp_empathic-explorations_case-carlos_08": {
      "text": "[Sint, med knyttede never] Respektløshet treffer brystet som et slag, og jeg trenger at de forstår at det gjorde vondt.",
      "suggestion": "Respektløsheten treffer som både sårhet og sinne, og behovet for at de skal forstå, er rett der sammen med det."
    },
    "dp_empathic-explorations_case-carlos_09": {
      "text": "[Redd] Når jeg sier at jeg vil at de skal være trygge, faller sinnet, og noe mykere skremmer meg.",
      "suggestion": "Ønsket om trygghet henter fram mykhet, og den mykheten kan kjennes blottstilt fordi den betyr så mye."
    },
    "dp_empathic-explorations_case-carlos_10": {
      "text": "[Redd] Jeg lærte tidlig at å være den lille betydde at andre kunne ta det de ville.",
      "suggestion": "Den gamle regelen bærer fortsatt faren ved å være liten og ubeskyttet."
    },
    "dp_empathic-explorations_case-nina_01": {
      "text": "[Sliten] I det øyeblikket jeg ber om hjelp, skyller skylden inn og jeg får lyst til å trekke det tilbake.",
      "suggestion": "Skylden kommer så raskt at det nesten er som om behovet må tas tilbake med en gang."
    },
    "dp_empathic-explorations_case-nina_02": {
      "text": "[Skyldpreget] Jeg bretter klær og svarer på meldinger så jeg slipper å kjenne bitterhet.",
      "suggestion": "Å holde seg i gang holder bitterheten på avstand. Vi kan legge merke til hva som skjer når du forestiller deg å stoppe et øyeblikk."
    },
    "dp_empathic-explorations_case-nina_03": {
      "text": "[Splittet] Når jeg sier nei, forklarer jeg meg helt til neiet nesten forsvinner.",
      "suggestion": "Neiet er der, og så begynner forklaringen å myke det opp. Vi kan legge merke til hva som kjennes risikabelt ved å la neiet stå."
    },
    "dp_empathic-explorations_case-nina_04": {
      "text": "[Sliten] Selv det å be om en liten kjøretur kommer ut med tre unnskyldninger.",
      "suggestion": "Unnskyldningene kommer før behovet får stå på egne bein, som om det å spørre allerede risikerer å være for mye."
    },
    "dp_empathic-explorations_case-nina_05": {
      "text": "[Skyldpreget] Et rotete hus får meg til å føle at alle kan se at jeg mislykkes.",
      "suggestion": "Rotet blir mer enn rot; det blir blottstillelse, som om folk kan lese nederlaget i rommet."
    },
    "dp_empathic-explorations_case-nina_06": {
      "text": "[Splittet] Når alle trenger meg samtidig, sier jeg ja før jeg vet hva jeg faktisk vil.",
      "suggestion": "Ja-et kommer før ditt eget ønske rekker å vise seg. Vi kan senke tempoet på stedet der alle andres behov kommer først."
    },
    "dp_empathic-explorations_case-nina_07": {
      "text": "[Skyldpreget] Jeg drømmer om å bli tatt vare på, og så skammer jeg meg for at jeg vil det.",
      "suggestion": "Ønsket om å bli tatt vare på er der, og nesten rett ved siden av kommer skammen over å ønske det."
    },
    "dp_empathic-explorations_case-nina_08": {
      "text": "[Unnskyldende] Jeg tar oppgaver før noen spør, og så blir jeg bitter for at ingen merker det.",
      "suggestion": "Du går foran spørsmålet, og så kommer bitterheten når prisen ikke blir sett. Vi kan gi plass til begge delene."
    },
    "dp_empathic-explorations_case-nina_09": {
      "text": "[Splittet] Ved siden av andre mødre krymper jeg, som om de alle kan en regel jeg gikk glipp av.",
      "suggestion": "Ved siden av andre mødre krymper du og kjenner deg utenfor en regel alle andre ser ut til å kunne."
    },
    "dp_empathic-explorations_case-nina_10": {
      "text": "[Sliten] Ved leggetid vet jeg ikke om jeg er trist, sint eller bare helt brukt opp.",
      "suggestion": "På slutten av dagen er følelsene vanskelige å skille fra hverandre: tristhet, sinne, utmattelse. Vi kan være varsomt med det uklare stedet."
    },
    "dp_empathic-explorations_case-aisha_01": {
      "text": "[Panisk] Hvis et svar ikke kommer, sier jeg til meg selv at det ikke burde bety noe, men så klarer jeg ikke å fokusere på noe annet.",
      "suggestion": "En del sier at det ikke burde bety noe, og en annen del klarer ikke å slippe det manglende svaret. Vi kan være litt med den splittelsen."
    },
    "dp_empathic-explorations_case-aisha_02": {
      "text": "[Desperat] Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "Svingningen går så fort, nesten som om frykten for å miste noen vipper rett over i å skyve dem bort."
    },
    "dp_empathic-explorations_case-aisha_03": {
      "text": "[Desperat] Når jeg klorer, sier en del av meg at det ikke er så farlig, og en annen del er redd for at du skal dømme meg.",
      "suggestion": "Det finnes en del som bagatelliserer det, og en annen del som er bekymret for reaksjonen min. Vi kan senke tempoet med begge delene her."
    },
    "dp_empathic-explorations_case-aisha_04": {
      "text": "[Desperat] Hvis du ser på klokka, begynner jeg å lure på om jeg bør slutte å snakke før du avslutter.",
      "suggestion": "Blikket mot klokka starter et spørsmål om du bør trekke deg før jeg går. Vi kan legge merke til hva som skjer i deg akkurat da."
    },
    "dp_empathic-explorations_case-aisha_05": {
      "text": "[Desperat] Jeg tester folk fordi jeg må vite om de bryr seg nok til å bli.",
      "suggestion": "Å teste folk kjennes som en desperat måte å sjekke om du betyr nok til at de blir."
    },
    "dp_empathic-explorations_case-aisha_06": {
      "text": "[Desperat] Når noen sier farvel, vet jeg at det er normalt, men jeg blir redd og sint samtidig.",
      "suggestion": "Farvel henter fram frykt og sinne samtidig, selv om en annen del sier at det burde være normalt."
    },
    "dp_empathic-explorations_case-aisha_07": {
      "text": "[Panisk] Vennlighet får meg til å hulke, og en annen del av meg vil bare stikke.",
      "suggestion": "Vennlighet berører begge stedene samtidig, delen som sulter etter den, og delen som vil løpe."
    },
    "dp_empathic-explorations_case-aisha_08": {
      "text": "[Skamfull] Det som ble gjort mot meg får meg til å føle meg skitten i min egen kropp.",
      "suggestion": "Den skitne følelsen henger sammen med det som ble gjort mot deg, og det å si det høyt bringer skammen tett på."
    },
    "dp_empathic-explorations_case-aisha_09": {
      "text": "[Desperat] Jeg fortsetter å sjekke døra, og jeg vet ikke om jeg er sint fordi du kommer til å gå, eller redd for at du skal glemme meg.",
      "suggestion": "Ved døra er sinne og frykt filtret sammen: å bli forlatt, å bli glemt. Vi kan være langsomt med den sammenfiltringen."
    },
    "dp_empathic-explorations_case-aisha_10": {
      "text": "[Panisk] Hvis du avlyser, er det noe i meg som aldri vil komme tilbake.",
      "suggestion": "En avlysning treffer så hardt at en del av deg vil beskytte deg ved aldri å komme tilbake."
    },
    "dp_empathic-explorations_case-david_01": {
      "text": "[Kontrollert] Når hun sier at jeg er kald, vil en del av meg bevise at hun tar feil, og en annen del vil forsvinne.",
      "suggestion": "Én del beveger seg mot å bevise noe, en annen mot å forsvinne. Vi kan være med den splittelsen før en av sidene tar over."
    },
    "dp_empathic-explorations_case-david_02": {
      "text": "[Kontrollert] Du virker rolig når jeg snakker om nederlag, og jeg vet ikke om jeg respekterer det eller misliker det.",
      "suggestion": "Roen min lander på to måter samtidig: noe respekterer den, og noe misliker den. Vi kan legge merke til hva hver side reagerer på."
    },
    "dp_empathic-explorations_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg dømt, glatter jeg skjorten og begynner å ramse opp prestasjoner.",
      "suggestion": "Når dommen dukker opp, hjelper det å glatte skjorten og ramse opp prestasjoner for å holde deg samlet. Vi kan legge merke til det første øyeblikket du føler deg dømt."
    },
    "dp_empathic-explorations_case-david_04": {
      "text": "[Kontrollert] Ros virker kanskje i ti sekunder; så begynner jeg å lete etter det de ikke fikk med seg.",
      "suggestion": "Rosen når deg kort, og så tar letingen etter det som manglet over. Vi kan senke tempoet på stedet der den slutter å lande."
    },
    "dp_empathic-explorations_case-david_05": {
      "text": "[Avvisende] I vanskelige samtaler sjekker jeg telefonen i det øyeblikket jeg føler meg presset opp i et hjørne.",
      "suggestion": "Når du føler deg presset opp i et hjørne, gir telefonen deg litt avstand. Vi kan være med øyeblikket rett før du griper etter den."
    },
    "dp_empathic-explorations_case-david_06": {
      "text": "[Irritert] Når barna gråter, blir jeg utålmodig før jeg engang skjønner hvorfor.",
      "suggestion": "Barnas tårer ser ut til å vekke noe i deg som er vanskelig å bære, og utålmodigheten kommer raskt."
    },
    "dp_empathic-explorations_case-david_07": {
      "text": "[Såret, men skarp] Å innrømme at jeg tar feil får ansiktet til å brenne, som om alle kan se nederlaget.",
      "suggestion": "Å innrømme at du tar feil får ansiktet til å brenne, som om nederlaget plutselig blir synlig."
    },
    "dp_empathic-explorations_case-david_08": {
      "text": "[Fjern] Siden affæren vet jeg ikke om jeg vil ha tilgivelse eller bare bli latt i fred.",
      "suggestion": "Det er et drag mot tilgivelse og et annet mot å bli latt i fred. Vi kan være med hvordan de to ønskene ligger ved siden av hverandre."
    },
    "dp_empathic-explorations_case-david_09": {
      "text": "[Såret, men skarp] Jeg vil ha anerkjennelse uten å måtte be om det, fordi det å be får meg til å føle meg ynkelig.",
      "suggestion": "Du vil ha anerkjennelsen, og det å be om den henter straks fram den ynkelige følelsen."
    },
    "dp_empathic-explorations_case-david_10": {
      "text": "[Kontrollert] Tanken på å være ordinær kjennes uutholdelig, som å miste det eneste beviset på at jeg betyr noe.",
      "suggestion": "«Ordinær» kjennes uutholdelig, som om det tar bort beviset på at du betyr noe."
    },
    "dp_empathic-explorations_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "De fleste dager holder nummenheten stand, og så kommer bølgen som om følelsen bryter gjennom på én gang."
    },
    "dp_empathic-explorations_case-marcus_02": {
      "text": "[Hyperårvåken] Etter mareritt vet jeg at jeg burde snakke om dem, men detaljene kjennes langt unna, og jeg vet ikke hvor jeg skal begynne.",
      "suggestion": "Du vet at det kan bety noe å snakke, og detaljene holder seg likevel langt unna. Vi kan begynne med det å ikke vite hvor du skal starte."
    },
    "dp_empathic-explorations_case-marcus_03": {
      "text": "[Stille og på vakt] Folkemengder får skuldrene til å heve seg, og jeg holder meg ved veggen uten å bestemme det.",
      "suggestion": "Skuldrene hever seg, og du trekker mot veggen før du bestemmer noe. Vi kan legge merke til den automatiske bevegelsen mot kanten."
    },
    "dp_empathic-explorations_case-marcus_04": {
      "text": "[Lav stemme] Etter mørkets frembrudd begynner jeg å lure på om det å være alene er tryggere, eller om det bare gjør meg verre.",
      "suggestion": "Alenetilværelsen kjennes som beskyttelse og kanskje skade på samme tid. Vi kan være med det spørsmålet uten å skynde oss."
    },
    "dp_empathic-explorations_case-marcus_05": {
      "text": "[Lav stemme] Etter jobb sitter jeg i bilen fordi leiligheten kjennes for stille til å gå inn i.",
      "suggestion": "Bilen gir deg en pause før du går inn i den stille leiligheten. Vi kan være med det du merker før du går opp."
    },
    "dp_empathic-explorations_case-marcus_06": {
      "text": "[Stille og på vakt] Jeg lar telefonen ringe ut fordi å svare betyr å forklare hvorfor jeg ikke har det bra.",
      "suggestion": "Å la telefonen ringe ut beskytter deg fra å måtte forklare. Vi kan legge merke til hva som kjennes for mye ved å bli spurt."
    },
    "dp_empathic-explorations_case-marcus_07": {
      "text": "[Flatt] Gode øyeblikk skjer, men jeg stoler ikke nok på dem til å la dem telle.",
      "suggestion": "De gode øyeblikkene er der, men det er vanskelig å stole nok på dem til å la dem telle. Vi kan bli litt ved mistilliten til det gode."
    },
    "dp_empathic-explorations_case-marcus_08": {
      "text": "[Lav stemme] En plutselig lyd skjærer gjennom meg, og før jeg rekker å tenke, skanner jeg rommet.",
      "suggestion": "Lyden skjærer gjennom, og skanningen starter før tankene rekker å hente seg inn."
    },
    "dp_empathic-explorations_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg tar ikke telefonen når familien ringer, fordi jeg ikke vil kjenne på noe.",
      "suggestion": "Å la telefonen ringe ut holder følelsene unna en stund. Vi kan legge merke til hva du forventer ville komme hvis du svarte."
    },
    "dp_empathic-explorations_case-marcus_10": {
      "text": "[Flatt] En del av meg tenker at å være alene for alltid ville gjøre mindre vondt enn å håpe og bli dratt under igjen.",
      "suggestion": "En del av deg vil heller velge alenetilværelsen enn å risikere smerten som kommer etter håp."
    },
    "dp_empathic-evocations_case-sara_01": {
      "text": "[Lavmælt] Etter middag merker jeg hvor stille leiligheten er, og så begynner jeg å sjekke mobilen igjen.",
      "suggestion": "Stillheten legger seg rundt deg etter middag, og mobilen blir det lille stedet der han fortsatt kanskje kan dukke opp."
    },
    "dp_empathic-evocations_case-sara_02": {
      "text": "[Nummen] Jeg sier til folk at det går bra, men jeg kjenner meg flat når jeg sier det.",
      "suggestion": "Det går bra kommer glatt ut, mens noe under har blitt blekt og stille."
    },
    "dp_empathic-evocations_case-sara_03": {
      "text": "[Trist] Jeg fant jakken hans i skapet og ble stående der lenger enn det ga mening.",
      "suggestion": "Den jakken stopper deg i døråpningen, en liten bit av ham som trekker hele tapet tilbake i rommet."
    },
    "dp_empathic-evocations_case-sara_04": {
      "text": "[Lavmælt] Noen morgener glemmer jeg det et sekund, og så husker jeg at vi ikke er sammen lenger.",
      "suggestion": "Det er det ene klare sekundet, og så lander bruddet tilbake på deg som en tyngde i senga."
    },
    "dp_empathic-evocations_case-sara_05": {
      "text": "[Flau] Når venner spør hvordan det går, svarer jeg kort og bytter tema.",
      "suggestion": "Det korte svaret lukker døra raskt, mens det egentlige svaret står trangt i halsen."
    },
    "dp_empathic-evocations_case-sara_06": {
      "text": "[Trist] Jeg blir sittende på mobilen sent fordi det er vanskelig å legge seg nå.",
      "suggestion": "Skjermen blir et lite nattlys mot den tomme siden av senga, og holder den mørke følelsen akkurat utenfor rekkevidde."
    },
    "dp_empathic-evocations_case-sara_07": {
      "text": "[Lavmælt] En sang kom på i en butikk, og jeg måtte gå ut før jeg begynte å gråte.",
      "suggestion": "De første tonene finner deg midt i butikkgangen, og plutselig står sorgen der under butikklyset."
    },
    "dp_empathic-evocations_case-sara_08": {
      "text": "[Flau] Jeg tenker stadig at jeg kanskje gjorde noe galt, men jeg finner ikke ut hva.",
      "suggestion": "Tankene leter etter feilen, som om de bare kan finne den løse tråden, vil hele bruddet gi mening."
    },
    "dp_empathic-evocations_case-sara_09": {
      "text": "[Trist] Noen ganger setter jeg meg på gulvet i stedet for å legge meg.",
      "suggestion": "Gulvet blir stedet du folder deg sammen når senga kjennes for åpen og for bred."
    },
    "dp_empathic-evocations_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, blir jeg brydd og ser bort.",
      "suggestion": "Vennligheten kommer nær, nesten for varm å ta inn, så blikket faller til tryggere grunn."
    },
    "dp_empathic-evocations_case-michael_01": {
      "text": "[Fast] Når noen korrigerer meg foran teamet, blir jeg varm og slutter å høre etter.",
      "suggestion": "Varmen skyter opp, som om rommet snevrer seg inn til ett skarpt merke på deg."
    },
    "dp_empathic-evocations_case-michael_02": {
      "text": "[Anspent] Jeg går inn i møter og forventer at folk skal rote det til, og jeg hater at jeg gjør det.",
      "suggestion": "Du kommer inn allerede i spenn, som om en del av deg står vakt ved døra før noen har sagt noe."
    },
    "dp_empathic-evocations_case-michael_03": {
      "text": "[Anspent] På slutten av dagen verker kjeven, og da skjønner jeg at jeg har holdt tilbake kommentarer.",
      "suggestion": "Kjeven bærer hele dagen, låst rundt hver skarpe setning du måtte svelge."
    },
    "dp_empathic-evocations_case-michael_04": {
      "text": "[Flau] Når jeg har smelt, blir jeg flau etterpå, men jeg prøver mest å ikke tenke på det.",
      "suggestion": "Flauheten blir liggende der etterpå, tung og våt, mens du prøver å gå utenom den."
    },
    "dp_empathic-evocations_case-michael_05": {
      "text": "[Defensiv] Når kona mi sukker, går jeg ut fra at hun dømmer meg.",
      "suggestion": "Det lille sukket kan krysse rommet som en anklage, og systemet ditt spenner seg før hun har sagt et ord."
    },
    "dp_empathic-evocations_case-michael_06": {
      "text": "[Anspent] Hvis noen sier ro deg ned, blir jeg sintere med en gang.",
      "suggestion": "De to ordene tenner fyrstikken, og ilden er i gang før du rekker å vite hva som ble antent."
    },
    "dp_empathic-evocations_case-michael_07": {
      "text": "[Flau] Når jeg ikke vet svaret, føler jeg meg blottstilt.",
      "suggestion": "Å ikke vite åpner et nakent sted, som om all kompetansen du støtter deg på mister dekning et øyeblikk."
    },
    "dp_empathic-evocations_case-michael_08": {
      "text": "[Defensiv] Noen ganger smeller jeg med dører fordi jeg ikke vet hva annet jeg skal gjøre med følelsen.",
      "suggestion": "Døra tar følelsen for deg, høyt nok til å dekke det mindre stikket under."
    },
    "dp_empathic-evocations_case-michael_09": {
      "text": "[Skamfull] Å tenke på å si unnskyld først får meg til å føle meg svak.",
      "suggestion": "Unnskyldningen kjennes som å gå ned på lavere grunn, med alle andre plutselig høyere rundt deg."
    },
    "dp_empathic-evocations_case-michael_10": {
      "text": "[Skamfull] Om natten spiller jeg av krangelen og hører hvor skarp jeg hørtes ut.",
      "suggestion": "Huset blir stille, men din egen stemme fortsetter å runge på kjøkkenet, fortsatt skarp etter at krangelen er over."
    },
    "dp_empathic-evocations_case-jason_01": {
      "text": "[Stille] Når det er min tur i et møte, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Øyeblikket vender seg mot deg, og setningen glipper unna som om rommet trekker den bort."
    },
    "dp_empathic-evocations_case-jason_02": {
      "text": "[Nølende] Hendene mine svetter under bordet, så jeg skjuler dem.",
      "suggestion": "Til og med hendene kjennes som om de kan avsløre deg, så de forsvinner under bordet før noen ser."
    },
    "dp_empathic-evocations_case-jason_03": {
      "text": "[Engstelig] Jeg øver på hva jeg skal si, men når folk ser på meg, fryser jeg.",
      "suggestion": "Alle de innøvde ordene står klare, og så lander blikkene på deg og alt låser seg bak et lag is."
    },
    "dp_empathic-evocations_case-jason_04": {
      "text": "[Stille] Hvis folk ler i nærheten, antar jeg at jeg gjorde noe rart.",
      "suggestion": "Latteren går gjennom rommet og peker seg mot deg før du vet hva den handlet om."
    },
    "dp_empathic-evocations_case-jason_05": {
      "text": "[Nølende] Når oppmerksomheten vender seg mot meg, prøver jeg å ta mindre plass.",
      "suggestion": "Kroppen begynner å gjøre seg mindre, leter etter en måte å være til stede på uten å bli sett."
    },
    "dp_empathic-evocations_case-jason_06": {
      "text": "[Engstelig] Når noen gir meg et kompliment, tror jeg egentlig ikke på det.",
      "suggestion": "Komplimentet berører overflaten og glir av før det når stedet som trenger det."
    },
    "dp_empathic-evocations_case-jason_07": {
      "text": "[Stille] Søndag kveld begynner jeg å bli nedstemt, men jeg scroller mest.",
      "suggestion": "Uka kommer tidlig inn i rommet, og scrollingen blir et lite bevegelig lys mot tyngden."
    },
    "dp_empathic-evocations_case-jason_08": {
      "text": "[Stille og skamfull] Jeg skriver enkle meldinger om og om igjen, og noen ganger sender jeg dem ikke.",
      "suggestion": "Én liten melding blir en smal døråpning, og hver omskriving er et nytt skritt tilbake fra å bli sett."
    },
    "dp_empathic-evocations_case-jason_09": {
      "text": "[Engstelig] Selv det å si hei kan høres feil ut for meg etterpå.",
      "suggestion": "Det lille hei-et blir hengende i ørene dine, som om ett vanlig ord har blitt bevis mot deg."
    },
    "dp_empathic-evocations_case-jason_10": {
      "text": "[Stille] I grupper følger jeg med på hvor utgangen er.",
      "suggestion": "Utgangen blir det tryggeste stedet i rommet, stedet blikket holder fast i når oppmerksomheten kommer for nær."
    },
    "dp_empathic-evocations_case-laura_01": {
      "text": "[Flatt og på vakt] De fleste morgener våkner jeg uten å kjenne særlig mye.",
      "suggestion": "Dagen kommer avbleket, som om fargen er tatt ut av den før du engang setter deg opp."
    },
    "dp_empathic-evocations_case-laura_02": {
      "text": "[Fjern] En dør smeller, og jeg vet at det bare er en dør, men kroppen reagerer først.",
      "suggestion": "Lyden når kroppen før hodet rekker å forklare, og den gamle alarmen går gjennom rommet her og nå."
    },
    "dp_empathic-evocations_case-laura_03": {
      "text": "[Sviktet] Jeg fant ut at han hadde truffet en annen, og nå slår all varme jeg hadde for ham seg av.",
      "suggestion": "Sviket trekker en hard strek inni deg, kjærligheten dras bak en låst dør før den kan bli såret igjen."
    },
    "dp_empathic-evocations_case-laura_04": {
      "text": "[Skamfull] Jeg føler at det er noe galt med meg, fordi selv enkle gode ting ikke når inn.",
      "suggestion": "Det er som om et mørkt merke har spredt seg på innsiden, så selv vanlig varme glir av før den får trekke inn."
    },
    "dp_empathic-evocations_case-laura_05": {
      "text": "[Fjern] Vin hjelper meg å skru av om kvelden.",
      "suggestion": "Vinen virker som en dimmer, senker volumet inni til de skarpe kantene i kvelden blir uklare."
    },
    "dp_empathic-evocations_case-laura_06": {
      "text": "[Langsomt og flatt] Jeg ligger våken og lytter etter lyder, selv når ingenting skjer.",
      "suggestion": "Selv i senga står en del av deg vakt, lytter gjennom mørket etter bevis på fare."
    },
    "dp_empathic-evocations_case-laura_07": {
      "text": "[Anspent og på gråten] Noen ganger får musikk meg til å gråte, og så stenger jeg det av.",
      "suggestion": "Noen få toner åpner en smal sprekk i nummenheten, og du lukker den før for mye følelse slipper gjennom."
    },
    "dp_empathic-evocations_case-laura_08": {
      "text": "[Håpløs] Når eksen min begynner å forklare hvorfor han dro, slutter jeg å prøve å svare.",
      "suggestion": "Du folder deg innover som papir under ordene hans, luften går ut av deg til det å svare føles meningsløst."
    },
    "dp_empathic-evocations_case-laura_09": {
      "text": "[Anspent og på vakt] Vennlige ord gjør at jeg får vondt i halsen, og jeg vet ikke hvorfor.",
      "suggestion": "Vennligheten berører et låst sted, og verken stiger i halsen før ordene kan svare."
    },
    "dp_empathic-evocations_case-laura_10": {
      "text": "[Flatt og på vakt] Jeg har en bag pakket ved døra, selv om jeg vet det høres rart ut.",
      "suggestion": "Bagen venter ved døra som en stille utgangsplan, et tegn på at en del av deg aldri helt legger beredskapen ned."
    },
    "dp_empathic-evocations_case-carlos_01": {
      "text": "[Defensiv] Når noen smiler skjevt til meg, begynner hendene å dirre.",
      "suggestion": "Det skjeve smilet sender strøm ut i hendene, varme som leter etter et sted å gå før ordene rekker fram."
    },
    "dp_empathic-evocations_case-carlos_02": {
      "text": "[Macho] Faren min pleide å si at bare svake menn snakker om følelser.",
      "suggestion": "Ordene hans ringer fortsatt som en ordre i ørene dine: bare svake menn føler, så de mykere stedene må låses bort."
    },
    "dp_empathic-evocations_case-carlos_03": {
      "text": "[Anspent og sint] Jeg går rundt på kjøkkenet etter krangler, fordi det blir verre hvis jeg sitter stille.",
      "suggestion": "Du går harde streker over kjøkkengulvet, prøver å tråkke ladningen ut før den kommer gjennom hender eller munn."
    },
    "dp_empathic-evocations_case-carlos_04": {
      "text": "[Skamfull] Jeg husker stadig ansiktet til sønnen min etter at jeg ropte.",
      "suggestion": "Ansiktet hans blir værende som et blåmerke under sinnet, et merke du ikke klarer å skyve unna."
    },
    "dp_empathic-evocations_case-carlos_05": {
      "text": "[Defensiv] Når kona mi sier at jeg drikker for mye, vil jeg bevise at hun ikke aner hva hun snakker om.",
      "suggestion": "Anklagen hennes graver seg inn som en kniv, og det å motbevise henne blir en måte å trekke bladet ut igjen på."
    },
    "dp_empathic-evocations_case-carlos_06": {
      "text": "[Skamfull] Etter at jeg smeller, blir alle stille, og jeg hater rommet.",
      "suggestion": "Etter eksplosjonen blir rommet lite og forsiktig, som om alle beveger seg rundt knust glass."
    },
    "dp_empathic-evocations_case-carlos_07": {
      "text": "[Sint, med knyttede never] Jeg biter tennene sammen til hodet gjør vondt.",
      "suggestion": "Tennene låser seg som en skrustikke, holder ordene og varmen inne til smerten begynner å dunke."
    },
    "dp_empathic-evocations_case-carlos_08": {
      "text": "[Verdiløs] Hvis jeg gir meg foran sønnen min, føles det som om jeg blir ingen.",
      "suggestion": "Å gi seg får deg til å kjenne deg visket ut, som om konturen din blekner til det ikke står noen mann igjen der."
    },
    "dp_empathic-evocations_case-carlos_09": {
      "text": "[Anspent og sint] Jeg holder hardt i rattet når jeg prøver å ikke reagere.",
      "suggestion": "Hendene klemmer rattet som et lokk over en kokende gryte, og holder varmen inne med hvite knoker."
    },
    "dp_empathic-evocations_case-carlos_10": {
      "text": "[Bekymret] Jeg er redd sønnen min lærer å være forsiktig rundt meg.",
      "suggestion": "Den frykten treffer dypt, at stemmen din kan bli været han lærer å leve i."
    },
    "dp_empathic-evocations_case-nina_01": {
      "text": "[Sliten] Idet jeg setter meg ned, får jeg skyldfølelse.",
      "suggestion": "Hvile setter i gang en alarm inni deg, skyld som skyter gjennom før stolen rekker å bære vekten din."
    },
    "dp_empathic-evocations_case-nina_02": {
      "text": "[Såret] Noen ganger føler jeg meg brukt, og så hater jeg meg selv for å si det.",
      "suggestion": "Du kjenner deg vridd opp som en klut alle stadig griper etter, og så kommer skammen for å ha sagt hvor brukt du føler deg."
    },
    "dp_empathic-evocations_case-nina_03": {
      "text": "[Verdiløs] Når jeg trenger hjelp, føler jeg at jeg ikke er særlig mye verdt.",
      "suggestion": "Å trenge hjelp får deg til å krympe mot gulvet, som om verdien din faller idet hendene dine ikke er fulle."
    },
    "dp_empathic-evocations_case-nina_04": {
      "text": "[Sliten] Jeg smiler gjennom hodepiner fordi folk trenger at jeg fortsetter.",
      "suggestion": "Smilet strekkes over smerten og prøver å holde hele dagen oppe i en tynn tråd."
    },
    "dp_empathic-evocations_case-nina_05": {
      "text": "[Unnskyldende] Utover kvelden kjennes hele kroppen tung.",
      "suggestion": "Trettheten legger seg inn i knoklene, hvert steg tykt og langsomt mot slutten av dagen."
    },
    "dp_empathic-evocations_case-nina_06": {
      "text": "[Splittet] Å si nei får hjertet til å rase.",
      "suggestion": "Nei-et setter i gang en alarm i brystet, som om én liten grense kan true selve kjærligheten."
    },
    "dp_empathic-evocations_case-nina_07": {
      "text": "[Sliten] Jeg vasker sent på kvelden selv om jeg er helt utslitt.",
      "suggestion": "Benken tørkes av igjen, et midnattsritual mot frykten for at det å stoppe lar alle stå udekket."
    },
    "dp_empathic-evocations_case-nina_08": {
      "text": "[Skyldpreget] Hvis huset er rotete, skammer jeg meg før noen sier noe.",
      "suggestion": "Skammen er allerede på vei oppover halsen før en eneste kommentar kommer."
    },
    "dp_empathic-evocations_case-nina_09": {
      "text": "[På gråten] Jeg gråter på kjøkkenet der ingen legger merke til det.",
      "suggestion": "Tårene pakkes inn i vanlige kjøkkenlyder, skjult der skapdører og rennende vann kan dekke dem."
    },
    "dp_empathic-evocations_case-nina_10": {
      "text": "[Ensom] Jeg venter fortsatt på at han skal legge merke til hvor sliten jeg er, selv om han ikke bor her lenger.",
      "suggestion": "En del av deg står fortsatt og ser mot døråpningen etter ham, venter på at det gamle livet skal se tilbake og endelig få øye på deg."
    },
    "dp_empathic-evocations_case-aisha_01": {
      "text": "[Mistroisk] Du sier at notatene dine er private, men hvis de får meg til å høres ustabil ut, kommer jeg til å føle meg helt sviktet.",
      "suggestion": "Muligheten for å bli skrevet feil skjærer dypt, som om sviket kan skje stille på en side etter at du har gått."
    },
    "dp_empathic-evocations_case-aisha_02": {
      "text": "[Desperat] Jeg kan gå fra å be noen bli til å be dem la meg være i fred på sekunder.",
      "suggestion": "Følelsen snur fra utstrakte hender til brann, en bryter som slås om raskere enn du klarer å roe deg."
    },
    "dp_empathic-evocations_case-aisha_03": {
      "text": "[Forvirret] Jeg klarer ikke si om jeg er sint, redd eller tom; alt skifter for fort.",
      "suggestion": "Alt er viklet sammen, som å sitte fast i gjørme uten å vite hvilken dør som skal åpnes først."
    },
    "dp_empathic-evocations_case-aisha_04": {
      "text": "[Panisk] Jeg klorer meg på armen når jeg begynner å føle meg uvirkelig.",
      "suggestion": "Sviingen skjærer gjennom tåken, et lite skarpt bevis på at du fortsatt er her."
    },
    "dp_empathic-evocations_case-aisha_05": {
      "text": "[Panisk] Når skriveprikkene forsvinner, får jeg panikk med en gang.",
      "suggestion": "Prikkene som forsvinner, river kontakttråden ut av hendene dine, og pusten blir med den."
    },
    "dp_empathic-evocations_case-aisha_06": {
      "text": "[Desperat] Når noen sier ha det, vet jeg at det er normalt, men jeg mister kontrollen.",
      "suggestion": "Ha det får rommet til å tippe før logikken rekker å hjelpe, og alt i deg leter etter et gulv."
    },
    "dp_empathic-evocations_case-aisha_07": {
      "text": "[Benektende] Forrige uke fikk jeg selvmordstanker da han forsvant, men så tekstet han tilbake, så kanskje jeg har det greit nå.",
      "suggestion": "Teksten hans kjennes som et plutselig gulv under føttene, mens fallet under fortsatt er veldig dypt."
    },
    "dp_empathic-evocations_case-aisha_08": {
      "text": "[Såret] Når noen kaller meg for mye, hører jeg det om og om igjen etterpå.",
      "suggestion": "For mye stemples over deg, rødt og høyt, som om det ikke lar seg vaske bort."
    },
    "dp_empathic-evocations_case-aisha_09": {
      "text": "[På gråten] Når noen er milde med meg, gråter jeg før jeg skjønner hvorfor.",
      "suggestion": "Mildheten berører veggen, og tårene strømmer gjennom før tillatelsen rekker fram."
    },
    "dp_empathic-evocations_case-aisha_10": {
      "text": "[Panisk] Jeg sjekker døra mens vi snakker.",
      "suggestion": "Blikket vender tilbake til døra, på vakt mot blinket der jeg kan forsvinne."
    },
    "dp_empathic-evocations_case-david_01": {
      "text": "[Kontrollert] Når kona mi kaller meg kald, blir jeg stille og kommer med en skarp kommentar.",
      "suggestion": "Kald brenner bak tennene, og den skarpe kommentaren kommer ut som en rustning som smekker igjen."
    },
    "dp_empathic-evocations_case-david_02": {
      "text": "[Verdiløs] Hvis jeg ikke er den beste personen i rommet, føler jeg meg verdiløs.",
      "suggestion": "Det er som om gulvet åpner seg under det ordinære, og du faller fra imponerende til ingenting i ett hardt dropp."
    },
    "dp_empathic-evocations_case-david_03": {
      "text": "[Defensiv] Når jeg føler meg liten, begynner jeg å snakke om det jeg har oppnådd.",
      "suggestion": "Prestasjonene skynder seg inn som en høyere versjon av deg og stiller seg rundt det lille, såre stedet."
    },
    "dp_empathic-evocations_case-david_04": {
      "text": "[Kontrollert] Når jeg føler meg presset opp i et hjørne, retter jeg på skjorta og forklarer merittene mine.",
      "suggestion": "Skjorta og merittene blir rustningsdeler, festet på plass før slaget kan lande."
    },
    "dp_empathic-evocations_case-david_05": {
      "text": "[Skamfull] Innerst inne tror jeg det er noe galt med meg som suksess ikke kan dekke over.",
      "suggestion": "Suksessen ligger over det som fint lin, men under finnes det en mørk flekk du frykter skal fortsette å spre seg."
    },
    "dp_empathic-evocations_case-david_06": {
      "text": "[Skamfull] Ansiktet til barnet mitt etter at jeg smeller, plager meg mer enn jeg hadde ventet.",
      "suggestion": "Det forsiktige ansiktet treffer forbi alle argumenter, et slag du ikke kan vinne deg ut av."
    },
    "dp_empathic-evocations_case-david_07": {
      "text": "[Unnvikende] I vanskelige samtaler sjekker jeg telefonen når det blir for personlig.",
      "suggestion": "Telefonen blir en falluke under bordet, en ryddig utgang før følelsen kan presse deg opp i et hjørne."
    },
    "dp_empathic-evocations_case-david_08": {
      "text": "[Avvisende] Å si at jeg tok feil, kjennes ydmykende.",
      "suggestion": "De ordene river av rustningen på et øyeblikk og etterlater ansiktet varmt og blottet."
    },
    "dp_empathic-evocations_case-david_09": {
      "text": "[Forvirret] Jeg vet ikke hva jeg føler; jeg vet bare at jeg ikke klarer å falle til ro når alle blir stille.",
      "suggestion": "Du er viklet inn i stillheten og går rundt som om hver indre dør åpner mot noe du ikke klarer å navngi."
    },
    "dp_empathic-evocations_case-david_10": {
      "text": "[Kontrollert] Etter at affæren kom fram, kjennes hjemmet annerledes, og jeg vet ikke hva jeg skal gjøre med det.",
      "suggestion": "Huset kjennes kaldere nå, som om varmen har lekket ut gjennom en sprekk ingen klarer å peke på."
    },
    "dp_empathic-evocations_case-marcus_01": {
      "text": "[Håpløs] De fleste dager går jeg bare gjennom rutinene og ser ikke poenget med å snakke om det.",
      "suggestion": "Dagen folder seg ned rundt deg, flat og uten luft, som om ord bare ville presse mot en vegg."
    },
    "dp_empathic-evocations_case-marcus_02": {
      "text": "[Lav stemme] Folkemengder gjør meg anspent før det har skjedd noe.",
      "suggestion": "Kroppen står vakt før folkemengden når deg, skuldrene på vei opp mot slaget som ikke har kommet."
    },
    "dp_empathic-evocations_case-marcus_03": {
      "text": "[Macho] I avdelingen fikk følelser folk drept, så jeg lærte å ikke ha dem.",
      "suggestion": "Den regelen høres fortsatt ut som en ordre: følelser får folk drept, så hjertet går bak en låst dør."
    },
    "dp_empathic-evocations_case-marcus_04": {
      "text": "[Hyperårvåken] Mareritt vekker meg, og så kjennes ikke rommet normalt på en stund.",
      "suggestion": "Søvnen kaster deg tilbake til et rom som fortsatt er ladet og summende, som om faren fulgte med ut."
    },
    "dp_empathic-evocations_case-marcus_05": {
      "text": "[Lav stemme] Når leiligheten er stille, blir det vanskelig å puste.",
      "suggestion": "Stillheten senker seg over brystet, tung nok til å gjøre luften trang."
    },
    "dp_empathic-evocations_case-marcus_06": {
      "text": "[Stille og på vakt] Gode øyeblikk kjennes fjerne og når meg ikke helt.",
      "suggestion": "Det gode er rett der og likevel bak glass, uklart før det rekker fram til deg."
    },
    "dp_empathic-evocations_case-marcus_07": {
      "text": "[Flatt] Jeg holder lyset dempet hjemme fordi sterkt lys plager meg.",
      "suggestion": "Det dempede lyset myker opp kantene og hindrer rommet i å komme for tydelig mot deg."
    },
    "dp_empathic-evocations_case-marcus_08": {
      "text": "[Lav stemme] Hvis noen banker på uventet, begynner hjertet å hamre.",
      "suggestion": "Et bank gjør døra til en trussel, og hjertet begynner å slå fra innsiden."
    },
    "dp_empathic-evocations_case-marcus_09": {
      "text": "[Forvirret] Når jeg prøver å snakke om det, vet jeg ikke hvilken følelse som skal komme først.",
      "suggestion": "Det er som å stå i gjørme med for mange dører rundt deg, uten å vite hvilken som åpnes uten å trekke deg tilbake dit."
    },
    "dp_empathic-evocations_case-marcus_10": {
      "text": "[Flatt] Noen kvelder sitter jeg i bilen før jeg går opp.",
      "suggestion": "Den stille bilen blir et siste lite ly før den tomme leiligheten må gås inn i."
    },
    "dp_empathic-conjectures_case-sara_01": {
      "text": "[Flau] Jeg sier stadig til vennene mine at det går bra, og så blir jeg irritert når de tror på meg.",
      "suggestion": "Du vinker dem litt bort og blir så alene når de trekker seg tilbake; jeg lurer på om en del av deg lengter etter at de skal se gjennom svaret."
    },
    "dp_empathic-conjectures_case-sara_02": {
      "text": "[Flau] Jeg kastet meg inn i jobb etter bruddet; hvis jeg kommer hjem før det blir mørkt, går jeg bare fra rom til rom.",
      "suggestion": "Du holder deg i bevegelse til huset blir stille; kanskje de tomme rommene bringer deg nær hvor endelig det kjennes at han dro."
    },
    "dp_empathic-conjectures_case-sara_03": {
      "text": "[Flau] Jeg føler meg dum som fortsatt gråter flere måneder etterpå, som om alle andre ville vært over det nå.",
      "suggestion": "Du blir sint på tårene; jeg lurer på om det også finnes skam over at behovet og sorgen har vart så lenge."
    },
    "dp_empathic-conjectures_case-sara_04": {
      "text": "[Lavmælt] Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      "suggestion": "Du trekker deg raskt unna; kan det være at det også finnes en øm lengsel etter å bli valgt, som er vanskelig å vise?"
    },
    "dp_empathic-conjectures_case-sara_05": {
      "text": "[Flau] Når jeg ser par, himler jeg med øynene og sier til meg selv at kjærlighet er oppskrytt.",
      "suggestion": "Du skyver det unna; jeg lurer på om det bak himlingen ligger en verkende lengsel etter nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      "text": "[På gråten] Jeg sluttet å følge ham, og så lånte jeg telefonen til en venn for å se om han virket lykkeligere uten meg.",
      "suggestion": "Du prøver å kutte kontakten og samtidig lete etter bevis; kanskje håp og selvbeskyttelse slåss om det samme såret."
    },
    "dp_empathic-conjectures_case-sara_07": {
      "text": "[Lavmælt] Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      "suggestion": "Du nedtoner smerten; jeg gjetter at en redd del frykter å bli avfeid hvis du lar det synes."
    },
    "dp_empathic-conjectures_case-sara_08": {
      "text": "[Flau] Jeg har skrevet en unnskyldning til ham tre ganger denne uken, selv om jeg ikke vet hva jeg egentlig gjorde galt.",
      "suggestion": "Unnskyldningen gir deg noe å gjøre; jeg lurer på om den også prøver å finne en grunn til at du ble forlatt som kjennes mindre hjelpeløs."
    },
    "dp_empathic-conjectures_case-sara_09": {
      "text": "[På gråten] Nettene er verst; jeg spiller om igjen små øyeblikk til jeg finner noe jeg kunne gjort annerledes.",
      "suggestion": "Gjennomspillingen leter etter et håndtak; jeg lurer på om skyld gir deg et sted å stå når savnet etter ham kjennes for hjelpeløst."
    },
    "dp_empathic-conjectures_case-sara_10": {
      "text": "[Lavmælt] Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      "suggestion": "Vennlighet lander sterkt; kanskje lengter en del etter den, mens en annen forventer at den forsvinner."
    },
    "dp_empathic-conjectures_case-michael_01": {
      "text": "[Fast] Hvis noen stiller spørsmål ved meg i et møte, svarer jeg raskt og høyere enn jeg mente.",
      "suggestion": "Du kommer sterkt inn før du rekker å tenke; jeg lurer på om spørsmålet lander som å bli satt på prøve og ikke holde mål."
    },
    "dp_empathic-conjectures_case-michael_02": {
      "text": "[Defensiv] Når en kollega retter på meg foran rommet, ler jeg det bort, og så skyter varmen opp i nakken.",
      "suggestion": "Latteren dekker det raskt; jeg lurer på om varmen bærer et glimt av ydmykelse under sinnet."
    },
    "dp_empathic-conjectures_case-michael_03": {
      "text": "[Anspent] Kona mi sier at jeg er hard, og jeg sier at jeg bare er ærlig.",
      "suggestion": "Ærlighet er den delen du kan stå bak; jeg gjetter at det å mykne kan bringe deg nærmere skyld eller frykten for å være brutal."
    },
    "dp_empathic-conjectures_case-michael_04": {
      "text": "[Rasende] Jeg holder tjenester i balanse. Jeg liker ikke å skylde noen noe.",
      "suggestion": "Du passer nøye på balansen; kan det å skylde noen noe berøre en frykt for å være underlegen eller under andres makt?"
    },
    "dp_empathic-conjectures_case-michael_05": {
      "text": "[Anspent og skamfull] Når jeg må be om unnskyldning, strammer kjeven seg og jeg begynner å forklare hele situasjonen.",
      "suggestion": "Forklaringen kommer raskt inn; jeg lurer på om selve unnskyldningen berører skam, nesten som å bli beseiret foran dem."
    },
    "dp_empathic-conjectures_case-michael_06": {
      "text": "[Anspent] Jeg tar bare et glass etter jobb fordi kona mi presser på; hvis hun sluttet å mase, hadde jeg ikke trengt det.",
      "suggestion": "Du legger drikkingen på presset hennes, og jeg lurer på om glasset også beskytter deg mot å kjenne deg anklaget, presset opp i et hjørne eller ikke god nok etter dagen."
    },
    "dp_empathic-conjectures_case-michael_07": {
      "text": "[Fast] Jeg leser alles arbeid om igjen før en presentasjon, fordi én feil ville slå tilbake på meg.",
      "suggestion": "Du vokter deg mot å bli tatt på senga; jeg lurer på om en yngre del allerede forventer å få skylden."
    },
    "dp_empathic-conjectures_case-michael_08": {
      "text": "[Skamfull] Etter at jeg eksploderer, blir barnet mitt forsiktig rundt meg, og jeg klarer ikke å møte blikket hans.",
      "suggestion": "Det forsiktige blikket ser ut til å treffe deg hardt; jeg lurer på om skam og frykt for å bli som faren din gjør det vanskelig å møte øynene hans."
    },
    "dp_empathic-conjectures_case-michael_09": {
      "text": "[Anspent] Når noen sier at jeg skal roe meg ned, høres det ut som de kaller meg barnslig.",
      "suggestion": "Den setningen ser ut til å gjøre deg liten fort; jeg lurer på om sinnet beskytter mot å kjenne seg avfeid og gjort mindre."
    },
    "dp_empathic-conjectures_case-michael_10": {
      "text": "[Fast] Jeg driver ikke med følelser; jeg spør hva vi skal gjøre med det.",
      "suggestion": "Du går raskt mot handling; kanskje følelser kjennes mindre kontrollerbare, som om de kan avsløre et sted du helst vil holde dekket."
    },
    "dp_empathic-conjectures_case-jason_01": {
      "text": "[Blank] Jeg øver på hver setning før et møte, og så blir hodet likevel blankt når folk vender seg mot meg.",
      "suggestion": "Du forbereder deg så nøye; jeg lurer på om blankheten beskytter deg mot skammen ved å bli sett og vurdert."
    },
    "dp_empathic-conjectures_case-jason_02": {
      "text": "[Nølende] Når jeg blir invitert ut, sier jeg at jeg er opptatt før jeg rekker å kjenne om jeg vil gå.",
      "suggestion": "«Opptatt»-svaret kommer fort; kanskje beskytter det deg mot risikoen for å bli dømt, oversett eller ikke vite hvordan du hører til."
    },
    "dp_empathic-conjectures_case-jason_03": {
      "text": "[Engstelig] Jeg hører en stemme som sier «ikke dum deg ut» før jeg rekker å åpne munnen.",
      "suggestion": "Du hører kritikeren tidlig; jeg gjetter at den prøver å beskytte deg mot den gamle smerten ved å bli sett og føle deg liten."
    },
    "dp_empathic-conjectures_case-jason_04": {
      "text": "[Stille] Etter at jeg har snakket, krymper jeg meg i timevis og ser for meg at alle spiller av hvor latterlig jeg hørtes ut.",
      "suggestion": "Jeg lurer på om krympingen ikke bare er flauhet, men også den gamle frykten for at det å bli hørt betyr å bli ledd av eller avvist."
    },
    "dp_empathic-conjectures_case-jason_05": {
      "text": "[Nølende] Når noen gir meg et kompliment, antar jeg at de bare er høflige og har oversett den kleine delen.",
      "suggestion": "Varmen preller av; jeg lurer på om et gammelt bilde av deg selv fortsatt insisterer på at den kleine delen er den sanneste."
    },
    "dp_empathic-conjectures_case-jason_06": {
      "text": "[Skamfull] Å se selvsikre mennesker får meg til å ville forsvinne, og så hater jeg meg selv for å misunne dem.",
      "suggestion": "Du krymper rundt selvsikkerheten deres; kanskje finnes det både misunnelse og sorg over å stå utenfor verdenen de ser ut til å bevege seg i."
    },
    "dp_empathic-conjectures_case-jason_07": {
      "text": "[Stille] Hvis noen ler i nærheten, antar jeg at det er av meg og spiller om igjen hva jeg gjorde galt.",
      "suggestion": "Du forbereder deg på latterliggjøring; jeg gjetter at latter berører en sår forventning om at det å være synlig betyr å bli gjort narr av."
    },
    "dp_empathic-conjectures_case-jason_08": {
      "text": "[Engstelig] Jeg skriver en melding, leser den fem ganger og sletter den før jeg sender.",
      "suggestion": "Du redigerer deg selv ut av kontakt; kan det finnes både et ønske om å nå noen og en frykt for hva som skjer hvis de virkelig ser deg?"
    },
    "dp_empathic-conjectures_case-jason_09": {
      "text": "[Engstelig] Jeg drikker før arrangementer, for ellers står jeg langs veggen og sjekker mobilen.",
      "suggestion": "Drikken hjelper deg ut på gulvet; jeg lurer på om den beskytter en redd del som forventer å bli blottstilt eller stå utenfor."
    },
    "dp_empathic-conjectures_case-jason_10": {
      "text": "[Skamfull] Jeg holder meg stille selv når jeg har en god idé, og så spiller jeg den om igjen hele dagen.",
      "suggestion": "Du holder deg skjult og klarer så ikke å legge det fra deg; kanskje kjennes det risikabelt å være synlig, mens det å forsvinne gjør deg skamfull og alene."
    },
    "dp_empathic-conjectures_case-laura_01": {
      "text": "[Flatt og på vakt] Når noen er vennlige, blir jeg fort mistenksom, som om varme alltid har en hake.",
      "suggestion": "Du tar avstand fra vennlighet; jeg lurer på om nærhet vekker en gammel frykt for at varme skal bli til fare eller svik."
    },
    "dp_empathic-conjectures_case-laura_02": {
      "text": "[Redd] Når stemmer heves, fryser jeg før jeg vet om sinnet i det hele tatt er rettet mot meg.",
      "suggestion": "Frysingen kommer før fakta; kanskje lærte frykten å bevege seg raskere enn hodet rekker å sortere hva som skjer."
    },
    "dp_empathic-conjectures_case-laura_03": {
      "text": "[Langsomt og flatt] En del av meg føler skyld over at jeg virker nummen når folk forventer at jeg skal være takknemlig.",
      "suggestion": "Du dømmer nummenheten; jeg gjetter at den kanskje beskytter en veldig sår sorg som takknemlighet ikke når inn til."
    },
    "dp_empathic-conjectures_case-laura_04": {
      "text": "[Flatt og på vakt] Jeg unngår filmer med familiekrangler fordi lydene følger meg hjem.",
      "suggestion": "Du styrer unna; kan det være for å unngå å vekke gammel skrekk og skam som ikke blir igjen på skjermen?"
    },
    "dp_empathic-conjectures_case-laura_05": {
      "text": "[Langsomt og flatt] Noen ganger stirrer jeg på veggen til rommet blir flatt og ingenting kan nå meg.",
      "suggestion": "Flatheten virker beskyttende; jeg lurer på om den holder deg unna smerten som kunne komme hvis rommet kjentes virkelig."
    },
    "dp_empathic-conjectures_case-laura_06": {
      "text": "[Anspent og på vakt] En snill mann spurte meg ut, og jeg begynte straks å ramse opp alle grunnene til at han sikkert kom til å såre meg.",
      "suggestion": "Listen beskytter deg raskt; jeg lurer på om ønsket om nærhet og forventningen om svik kommer nesten samtidig."
    },
    "dp_empathic-conjectures_case-laura_07": {
      "text": "[Skamfull] Når noen tar meg på skulderen, skvetter jeg før jeg rekker å kjenne dem igjen, og så skammer jeg meg.",
      "suggestion": "Skvetten kommer før gjenkjennelsen; jeg lurer på om berøring har lært å bety fare, og så kommer skammen over å trenge den beskyttelsen."
    },
    "dp_empathic-conjectures_case-laura_08": {
      "text": "[Fjern] Når folk sier at traumeoverlevere er sterke, får jeg lyst til å gå ut av rommet.",
      "suggestion": "Den rosen skyver deg bort; jeg lurer på om den bommer på skammen og ensomheten som fortsatt kjennes vanskelig å nå."
    },
    "dp_empathic-conjectures_case-laura_09": {
      "text": "[Langsomt og flatt] Rutinen min er jobb, butikk, hjem. Det kjennes tryggere sånn.",
      "suggestion": "Du holder verden smal og forutsigbar; jeg lurer på om det lille formatet hjelper deg å kontrollere risiko og holde gammel smerte unna."
    },
    "dp_empathic-conjectures_case-laura_10": {
      "text": "[Anspent og skamfull] Hvis jeg gråter, unnskylder jeg meg før noen rekker å reagere.",
      "suggestion": "Unnskyldningen kommer før noen har gjort noe; kanskje har tårer lært å forvente fare, skyld eller omsorg som ikke var trygg."
    },
    "dp_empathic-conjectures_case-carlos_01": {
      "text": "[Anspent og sint] En respektløs tone vipper en bryter i meg før jeg vet hva som ble truffet.",
      "suggestion": "Det snur fort i deg; jeg lurer på om det under varmen ligger et glimt av ydmykelse før sinnet tar over."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      "text": "[Anspent og sint] Hvis jeg gir meg, blir det sittende i brystet i dagevis.",
      "suggestion": "Det blir værende i deg i dagevis; kanskje berører det å gi seg noe mer enn krangelen, som å kjenne seg liten eller overkjørt."
    },
    "dp_empathic-conjectures_case-carlos_03": {
      "text": "[Anspent og sint] Når noen forteller meg hva jeg skal gjøre, er første tanke: «Hvem tror du at du er?»",
      "suggestion": "Det spørsmålet kommer fort; jeg gjetter at det å bli instruert kan kjennes som å havne under noen andres makt."
    },
    "dp_empathic-conjectures_case-carlos_04": {
      "text": "[Skamfull] Sønnen min så meg smelle igjen en dør, og senere klarte jeg ikke slutte å se ansiktet hans for meg.",
      "suggestion": "Jeg lurer på om ansiktet hans ikke bare vekket anger, men også skam og frykt for hva han lærer av deg."
    },
    "dp_empathic-conjectures_case-carlos_05": {
      "text": "[Anspent] Etter en krangel blir kona mi stille, og jeg klarer ikke å se ansiktet hennes.",
      "suggestion": "Stillheten hennes ser ut til å nå forbi sinnet; jeg lurer på om blikket hennes ville vekke anger, ømhet og frykten for at du skremte henne."
    },
    "dp_empathic-conjectures_case-carlos_06": {
      "text": "[Anspent og sint] Jeg blåser meg opp når noen utfordrer meg, før de kan se at det treffer.",
      "suggestion": "Du tar på rustningen fort; kanskje den dekker over det korte øyeblikket der utfordringen faktisk treffer og får deg til å kjenne deg mindre."
    },
    "dp_empathic-conjectures_case-carlos_07": {
      "text": "[Skamfull] Jeg knuser ting så jeg ikke skader folk, men etterpå ser jeg at alle fortsatt er redde.",
      "suggestion": "Du prøver å beskytte dem; jeg gjetter at knusingen holder smerten unna et øyeblikk, og så kommer skammen når du ser frykten."
    },
    "dp_empathic-conjectures_case-carlos_08": {
      "text": "[Defensiv] Faren min pleide å si at følelser gjør menn svake, og jeg hører det fortsatt i hodet.",
      "suggestion": "Den regelen er fortsatt høylytt; jeg lurer på om den beskytter deg mot risikoen ved å kjenne noe ømt, eller bli blottstilt og maktesløs."
    },
    "dp_empathic-conjectures_case-carlos_09": {
      "text": "[Anspent og sint] Jeg kverner på respektløsheten i dagevis og planlegger hvordan jeg burde vunnet der og da.",
      "suggestion": "Du prøver fortsatt å vinne det i etterkant; jeg lurer på om gjennomspillingen holder ydmykelsen over å kjenne seg liten akkurat da på avstand."
    },
    "dp_empathic-conjectures_case-carlos_10": {
      "text": "[Redd] Jeg vil gjøre det bedre for familien min, og så hører jeg meg selv høres ut som mennene jeg hatet.",
      "suggestion": "Jeg lurer på om det under viljen til endring ligger frykt og sorg over å bli en som familien din må være på vakt rundt."
    },
    "dp_empathic-conjectures_case-nina_01": {
      "text": "[Skyldpreget] Når jeg hviler, føler jeg meg egoistisk, selv når jeg er så trøtt at jeg nesten ikke klarer å stå.",
      "suggestion": "Hvile vekker skyld; jeg lurer på om en del lærte at kjærlighet var tryggere når du fortsatte å fortjene plassen din."
    },
    "dp_empathic-conjectures_case-nina_02": {
      "text": "[Unnskyldende] Jeg sier ja, og så blir jeg bitter, men jeg klarer likevel ikke stoppe.",
      "suggestion": "Du sier ja, og sinnet kommer etterpå; kanskje bitterheten peker mot behov som fortsatt kjennes for risikable å eie."
    },
    "dp_empathic-conjectures_case-nina_03": {
      "text": "[Splittet] Når jeg ber om hjelp, unnskylder jeg meg før de rekker å se irritert ut.",
      "suggestion": "Du unnskylder deg før noen rekker å reagere; jeg lurer på om det finnes en frykt for at det å trenge hjelp kan koste deg aksept."
    },
    "dp_empathic-conjectures_case-nina_04": {
      "text": "[Skyldpreget] Hvis huset er rotete når folk stikker innom, begynner jeg å forklare før de sier noe.",
      "suggestion": "Du forklarer før det engang finnes en anklage; kan rotet berøre skam over å måtte bevise at du er god gjennom å gjøre?"
    },
    "dp_empathic-conjectures_case-nina_05": {
      "text": "[Unnskyldende] Hvis noen virker skuffet, begynner jeg å ordne opp før jeg vet hva jeg selv vil.",
      "suggestion": "Ordningen starter raskt; jeg lurer på om skuffelse treffer en gammel frykt for at kjærlighet blir trukket tilbake."
    },
    "dp_empathic-conjectures_case-nina_06": {
      "text": "[Splittet] Jeg svelger sinnet fordi det ikke er pent, og så bærer jeg bitterhet stille.",
      "suggestion": "Du svelger sinnet for å være snill; kanskje lærte en yngre del at det å ha behov kunne true kjærligheten."
    },
    "dp_empathic-conjectures_case-nina_07": {
      "text": "[Sliten] Jeg tar vare på alle, og når ingen legger merke til det, blir jeg skarp mot meg selv for at jeg bryr meg.",
      "suggestion": "Du blir fort hard mot deg selv for at du ønsker å bli sett; jeg lurer på om det finnes en ensom lengsel etter å bli tatt vare på uten å måtte fortjene det."
    },
    "dp_empathic-conjectures_case-nina_08": {
      "text": "[Unnskyldende] Jeg prøver å si nei og legger så til tre forklaringer før de svarer.",
      "suggestion": "Forklaringene skynder seg inn etter nei-et; kan en del av deg prøve å holde aksepten trygg?"
    },
    "dp_empathic-conjectures_case-nina_09": {
      "text": "[Splittet] Jeg sier til meg selv at andre har det verre, og så fortsetter jeg.",
      "suggestion": "Du gjør behovene dine mindre og går videre; jeg lurer på om det å forbli akseptabel har betydd å ikke ta mye plass."
    },
    "dp_empathic-conjectures_case-nina_10": {
      "text": "[Sliten] Hvis jeg roer ned etter at alle har sovnet, stiger en klump i halsen.",
      "suggestion": "Klumpen kommer når ingen trenger deg; kanskje er sorgen nær og ber om å bli sett."
    },
    "dp_empathic-conjectures_case-aisha_01": {
      "text": "[Desperat] Hvis du kaster et blikk på klokka, synker magen som om du allerede er på vei bort fra meg.",
      "suggestion": "Det blikket blir et signal om at du går; jeg lurer på om det vekker en gammel skrekk for å bli sluppet før du rekker å bety noe."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      "text": "[Rasende] Da han ikke svarte, gikk jeg fra trist til rasende før jeg klarte å innrømme at jeg var redd.",
      "suggestion": "Du svinger fort; kanskje raseriet skynder seg inn for å beskytte den redde, rå delen som føler seg forlatt."
    },
    "dp_empathic-conjectures_case-aisha_03": {
      "text": "[Nummen] Noen ganger får jeg lyst til å klore meg på armene bare for å skjære gjennom nummenheten.",
      "suggestion": "Du vil finne en vei gjennom nummenheten; jeg lurer på om det ligger en uutholdelig tomhet under."
    },
    "dp_empathic-conjectures_case-aisha_04": {
      "text": "[Desperat] Jeg skremte alle forrige uke da jeg sa at jeg kanskje kom til å ta livet mitt, men han tekstet i dag, så nå er det greit og kanskje jeg ikke trenger å snakke om det.",
      "suggestion": "En del av deg vil lukke det raskt nå som kontakten kom tilbake; jeg lurer på om det å snakke om hvor nær kanten det var, kjennes for skremmende eller skamfullt."
    },
    "dp_empathic-conjectures_case-aisha_05": {
      "text": "[Desperat] Hvis du avlyser, er det en del av meg som aldri vil komme tilbake før du kan slippe meg igjen.",
      "suggestion": "Avlysningen stikker som å bli sluppet; jeg lurer på om det kjennes tryggere å avvise først enn å vente på at det skjer igjen."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      "text": "[Skamfull] Jeg tenker at jeg er for mye for noen som helst, særlig når jeg trenger at de blir.",
      "suggestion": "Du føler deg for mye akkurat der du trenger nærhet; kanskje er det skammen fra det du ble utsatt for som taler."
    },
    "dp_empathic-conjectures_case-aisha_07": {
      "text": "[Panisk] Vennlighet får meg til å hulke, og en annen del vil stikke før jeg trenger den for mye.",
      "suggestion": "Det lander stort; jeg gjetter at én del lengter etter vennligheten, mens en annen forventer at det å trenge den blir farlig."
    },
    "dp_empathic-conjectures_case-aisha_08": {
      "text": "[Skamfull] Jeg tester folk for å finne ut om de virkelig bryr seg, og så hater jeg hvor trengende det høres ut.",
      "suggestion": "Du tester og skammer deg etterpå; kan det være at du prøver å bevise at du betyr noe før du våger å stole på?"
    },
    "dp_empathic-conjectures_case-aisha_09": {
      "text": "[Skamfull] Etter at jeg slår ut, kaller jeg meg ekkel før noen andre rekker å si det.",
      "suggestion": "Angrepet vender raskt innover; jeg lurer på om hardheten prøver å komme avvisning i forkjøpet samtidig som den dekker sorg over å kjenne seg alene."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      "text": "[Panisk] Jeg får panikk når jeg skal si farvel, selv når jeg vet at du kommer tilbake.",
      "suggestion": "Farvel utløser panikk selv når hodet vet bedre; kanskje berører det den gamle frykten for at ingen kommer tilbake."
    },
    "dp_empathic-conjectures_case-david_01": {
      "text": "[Håpløs] Når kona mi kaller meg kald, kommer jeg med en spydig kommentar før hun rekker å se at det såret.",
      "suggestion": "Kommentaren kommer først; jeg lurer på om den beskytter et stikk av å bli sett som mislykket eller ikke god nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      "text": "[Avvisende] Jeg liker ikke å bli fortalt hva jeg skal gjøre; det kjennes som om noen får overtaket.",
      "suggestion": "Du stritter imot styring; kanskje det lander som å bli gjort liten, håndtert eller avslørt som ute av kontroll."
    },
    "dp_empathic-conjectures_case-david_03": {
      "text": "[Avvisende] Hvis jeg ikke kan være best, hvorfor prøve når det å være ordinær kjennes som å forsvinne?",
      "suggestion": "Du sikter mot toppen; jeg gjetter at det finnes en frykt for at ordinær betyr usynlig, utskiftbar eller uverdig."
    },
    "dp_empathic-conjectures_case-david_04": {
      "text": "[Fjern] Jeg planlegger store gester og føler meg tom etterpå, som om applausen aldri når den ensomme delen.",
      "suggestion": "Jeg lurer på om det, etter at gesten lander, fortsatt finnes et ensomt sted som spør om de vil ha deg eller bare det du kan gi."
    },
    "dp_empathic-conjectures_case-david_05": {
      "text": "[Avvisende] Å be om unnskyldning får meg til å krympe meg, som om alle i rommet ser statusen min falle.",
      "suggestion": "Det kjennes ydmykende; jeg lurer på om det å innrømme feil treffer den gamle skammen over å bli redusert til mislykket."
    },
    "dp_empathic-conjectures_case-david_06": {
      "text": "[Unnvikende] I vanskelige samtaler griper jeg etter telefonen når praten begynner å bli personlig.",
      "suggestion": "Du griper etter en utvei idet nærheten kommer inn; kanskje kjennes det personlige farlig når du forventer å bli bedømt."
    },
    "dp_empathic-conjectures_case-david_07": {
      "text": "[Kontrollert] Jeg skryter når jeg føler meg utrygg, før noen kan se glippen.",
      "suggestion": "Du pumper deg raskt opp; jeg lurer på om det dekker den sårbare glippen før noen andre kan se den."
    },
    "dp_empathic-conjectures_case-david_08": {
      "text": "[Såret, men skarp] Hvis barna sier imot, hører jeg respektløshet og mister plassen min hos dem på et øyeblikk.",
      "suggestion": "Motstanden deres ser ut til å treffe både autoriteten og tilhørigheten din; jeg lurer på om utbruddet dekker skam over å miste plassen hos dem."
    },
    "dp_empathic-conjectures_case-david_09": {
      "text": "[Såret, men skarp] Jeg hater å bli misforstått av kona mi; det får meg til å føle meg usynlig.",
      "suggestion": "Du hater den usynligheten; jeg lurer på om det under sinnet ligger en sorg over ikke å bli kjent."
    },
    "dp_empathic-conjectures_case-david_10": {
      "text": "[Kontrollert] Hvis kona mi blir, føler jeg meg fanget og kritisert; hvis hun går, føler jeg meg ydmyket. Det finnes ingen måte å vinne på.",
      "suggestion": "Begge alternativene truer deg på hver sin måte; jeg lurer på om fanget og ydmyket kretser rundt den samme frykten for å bli sett som ikke god nok."
    },
    "dp_empathic-conjectures_case-marcus_01": {
      "text": "[Langsomt og flatt] De fleste dager føler jeg meg avstengt, som om ingenting slipper inn med mindre det slår hardt.",
      "suggestion": "Du kjenner deg avstengt; jeg lurer på om nummenheten beskytter mye smerte fra å slippe inn på én gang."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      "text": "[Lav stemme] Jeg sover med TV-en på så rommet ikke blir for stille.",
      "suggestion": "Du overdøver stillheten; kanskje stillhet bringer minner og sorg for tett på."
    },
    "dp_empathic-conjectures_case-marcus_03": {
      "text": "[Stille og på vakt] Jeg velger stolen der jeg kan se døra, og blir anspent hvis noen står bak meg.",
      "suggestion": "Valget av stol ser ut til å organisere trygghet; jeg lurer på om en del av deg fortsatt forventer at rommet kan bli farlig."
    },
    "dp_empathic-conjectures_case-marcus_04": {
      "text": "[Lav stemme] Jeg svarer ikke når søsteren min ringer, fordi stemmen hennes slipper gjennom veggen jeg holder oppe.",
      "suggestion": "Du holder avstand; kan det være at stemmen hennes slipper gjennom nummenheten og gjør følelsene vanskeligere å håndtere?"
    },
    "dp_empathic-conjectures_case-marcus_05": {
      "text": "[Anspent] Høye lyder får meg til å skvette, og så blir jeg sint på meg selv.",
      "suggestion": "Du skvetter og dømmer deg selv; jeg lurer på om sinnet dekker over en skam over å være sårbar."
    },
    "dp_empathic-conjectures_case-marcus_06": {
      "text": "[Stille og på vakt] Gode ting kjennes uvirkelige, som om de blir tatt tilbake hvis jeg lar dem bety noe.",
      "suggestion": "Det gode holder seg på avstand; kanskje det å la det bety noe også åpner døren for å miste det igjen."
    },
    "dp_empathic-conjectures_case-marcus_07": {
      "text": "[Flatt] Jeg drikker noen ganger for å slå meg selv ut før drømmene begynner å trekke meg tilbake dit.",
      "suggestion": "Du slår deg ut før søvnen kan trekke deg tilbake dit; jeg lurer på om det holder mareritt og følelser på avstand."
    },
    "dp_empathic-conjectures_case-marcus_08": {
      "text": "[Langsomt og flatt] Jeg holder lyset lavt hjemme så ingenting kjennes for skarpt.",
      "suggestion": "Du holder alt dempet og mykt; kan det være at lys og klarhet føles for avslørende eller for skarpt?"
    },
    "dp_empathic-conjectures_case-marcus_09": {
      "text": "[Stille og på vakt] Jeg husker ikke sist jeg lo, og selv det å prøve kjennes falskt.",
      "suggestion": "Du får ikke tak i latteren; jeg lurer på om glede kjennes risikabelt eller illojalt etter så mye tap og nummenhet."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      "text": "[Flatt] En del av meg tenker at jeg har det bedre alene, fordi nærhet bare gir folk måter å såre hverandre på.",
      "suggestion": "Den delen beskytter deg; kanskje den frykter at nærhet betyr å såre noen, bli såret eller miste kontrollen igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      "text": "[På gråten] Det treffer meg som en bølge og jeg klarer ikke slutte å hulke.",
      "suggestion": "Jeg er her sammen med deg mens gråten kommer. Vi trenger verken stoppe den eller drukne i den; vi kan bli ved denne ene bølgen sammen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_02": {
      "text": "[På gråten] Brystet mitt gjør vondt som om det skal sprekke opp når jeg sier at jeg savner ham.",
      "suggestion": "Savnet av ham gjør vondt rett gjennom brystet. Jeg blir nær deg mens vi slipper inn bare så mye av smerten som du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-sara_03": {
      "text": "[På gråten] Jeg får lyst til å løpe når sorgen starter, fordi den kjennes endeløs.",
      "suggestion": "Sorgen kjennes endeløs, og en del av deg vil bort. Jeg blir hos deg ved kanten av den, så du verken må løpe eller gå under."
    },
    "dp_staying-in-contact-intense-affect_case-sara_04": {
      "text": "[Panisk] Jeg så bildet hans i et innlegg fra noen andre, og magen sank så hardt at jeg begynte å skjelve.",
      "suggestion": "Jeg ser skjelvingen. Hold deg til stemmen min og kjenn gulvet under deg; vi holder bare suget i magen, ikke hele historien, til det roer seg nok til å se deg rundt igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_05": {
      "text": "[Nummen] Etter bruddet kjennes helgene som en tom vegg. Jeg ser ingenting å glede meg til.",
      "suggestion": "Den tomheten høres skremmende øde ut. Jeg er her sammen med deg i den; vi kan sette ord på bare én del av helgeveggen uten å be deg løse hele framtiden."
    },
    "dp_staying-in-contact-intense-affect_case-sara_06": {
      "text": "[Flau] Jeg føler meg dum som gråter så mye, men jeg klarer ikke stoppe.",
      "suggestion": "Tårene får lov til å være her. La skuldrene slippe litt, og legg merke til at jeg fortsatt er til stede mens gråten beveger seg i små deler."
    },
    "dp_staying-in-contact-intense-affect_case-sara_07": {
      "text": "[Nummen] Hendene mine blir numne; jeg føler meg langt borte, som om jeg kan forlate rommet uten å bevege meg.",
      "suggestion": "Lytt til stemmen min. Gni hendene sammen, press føttene ned, og sett ord på langt-borte-følelsen mens du kommer tilbake til stolen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_08": {
      "text": "[Varm og på gråten] Den lille gutten til en venn klemte meg farvel og sa at han var glad i meg, og jeg kjente så mye kjærlighet tilbake at jeg nesten ikke fikk puste.",
      "suggestion": "Den kjærligheten kom med så mye kraft at den nesten tok pusten fra deg. Jeg kan bli hos deg mens den er varm, vond og stor på samme tid."
    },
    "dp_staying-in-contact-intense-affect_case-sara_09": {
      "text": "[På gråten] Jeg klarer ikke se på deg når jeg gråter; det føles altfor blottlagt.",
      "suggestion": "Du kan se bort og likevel ikke være alene. Jeg blir nærværende mens den blottstilte følelsen får bare litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-sara_10": {
      "text": "[Redd] Hvis jeg lar gråten starte, er jeg redd den tar med seg hele natten.",
      "suggestion": "Vi kan gi gråten en tydelig ramme. Én liten bølge, og så kommer vi tilbake til stolen, gulvet og denne timen, så den ikke blir hele natten."
    },
    "dp_staying-in-contact-intense-affect_case-michael_01": {
      "text": "[Fast] Kjeven låser seg og varmen skyter opp i nakken når noen stiller spørsmål ved meg.",
      "suggestion": "Varmen kommer fort når du føler deg stilt spørsmål ved. Jeg holder meg stødig med deg mens vi lar sinnet være i ord og lytter etter stikket under det."
    },
    "dp_staying-in-contact-intense-affect_case-michael_02": {
      "text": "[Anspent og skamfull] Jeg tok for hardt i armen til sønnen min da han ikke hørte etter, og ansiktet hans spiller seg av om igjen. Jeg blir kvalm, men en del av meg vil at han bare skal slutte å være redd for meg allerede.",
      "suggestion": "Det er en vond blanding: skyld, alarm og ønsket om at reparasjonen skal skje raskt. La hendene hvile åpne på lårene, så vi kan se på det som skjedde uten å angripe deg eller bagatellisere frykten hans."
    },
    "dp_staying-in-contact-intense-affect_case-michael_03": {
      "text": "[Anspent] Ydmykelsen brenner når jeg spiller det av igjen; jeg vil viske ut hele scenen.",
      "suggestion": "Ydmykelsen brenner, og trangen til å viske det ut er sterk. Bli med meg ved kanten av den brenningen, så den kan kjennes uten å ta over."
    },
    "dp_staying-in-contact-intense-affect_case-michael_04": {
      "text": "[Fast] Jeg kan kjenne at det er i ferd med å klikke; hvis jeg åpner munnen, kommer det ut hardt.",
      "suggestion": "Du fanget det før det ble handling. Jeg er her med deg i det ladede sekundet, så skarpheten kan få ord i stedet for å bli avfyrt."
    },
    "dp_staying-in-contact-intense-affect_case-michael_05": {
      "text": "[Skjelvende] Hendene mine skjelver, og jeg hører nesten faren min kalle det svakt.",
      "suggestion": "Skjelvingen trenger ikke bekjempes. Plant begge føtter, se deg rundt i dette rommet, og gi varmen og skammen bare en smal stripe med oppmerksomhet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_06": {
      "text": "[Anspent og sint] Jeg hater den lille følelsen; den får meg til å ville ruve over noen.",
      "suggestion": "Den lille følelsen er vanskelig å tåle, og noe i deg vil ruve over noen. Jeg blir hos deg mens litenheten får litt rom uten å styre rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_07": {
      "text": "[Defensiv] En del av meg vil gå før dette ender med at jeg ser patetisk ut foran deg.",
      "suggestion": "Trangen til å gå beskytter verdigheten din. I noen sekunder kan du la hendene ligge på lårene og la skammen få navn her uten at den sender deg ut døren."
    },
    "dp_staying-in-contact-intense-affect_case-michael_08": {
      "text": "[Anspent og sint] Stemmen min blir høy før jeg rekker å bestemme meg for det.",
      "suggestion": "Bra, fang det der. Senk volumet til halvparten, kjenn gulvet under skoene, og la såretheten få språk uten at varmen tar over rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_09": {
      "text": "[Redd] Hvis jeg ikke eksploderer, føles det som om jeg forsvinner.",
      "suggestion": "Begge delene betyr noe: eksplosjonen og frykten for å forsvinne. Åpne hendene, kjenn stolen, og la meg hjelpe deg å holde den splittelsen uten å handle den ut."
    },
    "dp_staying-in-contact-intense-affect_case-michael_10": {
      "text": "[Fast] Jeg stoler ikke på meg selv når varmen begynner å lete etter noen å straffe.",
      "suggestion": "Takk for at du sier det før du handler. Hender åpne, føtter plantet; vi behandler varmen som et signal om noe såret, ikke som en ordre om å finne et mål."
    },
    "dp_staying-in-contact-intense-affect_case-jason_01": {
      "text": "[Stille] Alt blir uklart og hjertet hamrer, som om alle kan se at jeg ikke får det til.",
      "suggestion": "Jeg er her med deg i uklarheten. Panikken kan være synlig uten at du må prestere en normal setning."
    },
    "dp_staying-in-contact-intense-affect_case-jason_02": {
      "text": "[Skjelvende] Hendene mine skjelver og jeg vil forsvinne før noen merker det.",
      "suggestion": "Skjelvingen og ønsket om å forsvinne er begge her. Jeg blir hos deg mens de vises, uten å få deg til å skjule dem."
    },
    "dp_staying-in-contact-intense-affect_case-jason_03": {
      "text": "[Panisk] Jeg blir kvalm av å snakke om dette, som om jeg kan forsvinne av skam.",
      "suggestion": "Ok. Hvis det hjelper å se på meg, bruker du det; hvis ikke, velg et punkt i rommet. Kjenn føttene, sett kort ord på kvalmen og skammen, og trekk deg så litt tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-jason_04": {
      "text": "[Stille] Rommet kjennes som om det krymper rundt meg, og jeg finner ikke en normal setning.",
      "suggestion": "Den krympende følelsen er her, og du mislykkes ikke. Se etter tre farger mens jeg blir hos deg; vi trenger bare ett ord om gangen."
    },
    "dp_staying-in-contact-intense-affect_case-jason_05": {
      "text": "[Redd] Jeg får ikke puste ordentlig, og jeg er redd du ser at jeg har panikk.",
      "suggestion": "Pust med meg, ut lengre enn inn, og kjenn ryggen mot stolen. Ta dette i små slurker; du trenger ikke å skjule panikken for meg."
    },
    "dp_staying-in-contact-intense-affect_case-jason_06": {
      "text": "[Engstelig] Jeg vil gjemme meg under bordet; ansiktet mitt brenner.",
      "suggestion": "Skammen er så varm at det kjennes tryggere å gjemme seg. Jeg blir hos deg mens ansiktet brenner og du blir her, sett bare så mye som du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-jason_07": {
      "text": "[Stille] Jeg klarer ikke se deg i øynene nå; ansiktet mitt brenner.",
      "suggestion": "Du trenger ikke ha øyekontakt for å være i kontakt. Jeg er fortsatt med deg mens brenningen får litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-jason_08": {
      "text": "[Nølende] Det ringer i ørene og jeg føler meg fanget, som om alle ser på meg.",
      "suggestion": "Fanget-følelsen er her. Lytt etter to lyder ved siden av ringingen, og la følelsen av å bli sett ta bare litt plass mens pusten synker lavere."
    },
    "dp_staying-in-contact-intense-affect_case-jason_09": {
      "text": "[Panisk] Når du husker det jeg sa forrige uke, blir jeg så lettet at jeg kunne gråte, og så får jeg panikk for at jeg trenger dette for mye.",
      "suggestion": "Det å bli husket berører noe stort, og så begynner behovet å kjennes farlig. Jeg blir hos både lettelsen og panikken uten å gjøre noen av dem feil."
    },
    "dp_staying-in-contact-intense-affect_case-jason_10": {
      "text": "[Redd] Jeg tror jeg bør gå før du merker hvor mye panikk jeg har.",
      "suggestion": "Vi senker signalet om å gå. Se mot døren, så tilbake til stolen; panikken får ha en plass her uten å bestemme for deg."
    },
    "dp_staying-in-contact-intense-affect_case-laura_01": {
      "text": "[Langsomt og flatt] Da døra smalt ute, forsvant jeg innover før jeg rakk å vite om jeg var trygg.",
      "suggestion": "Jeg fikk med meg at du ble langt borte. Hold deg til lyden av stemmen min, kjenn stolen, og vi markerer at smellet er over før vi spør om noe mer."
    },
    "dp_staying-in-contact-intense-affect_case-laura_02": {
      "text": "[Langsomt og flatt] Jeg blir helt nummen når jeg prøver å kjenne noe rundt det som skjedde.",
      "suggestion": "Respekter nummenheten sammen med meg. Gni hendene sammen, kjenn teksturen, og se etter ett bittelite signal i kanten uten å presse forbi den."
    },
    "dp_staying-in-contact-intense-affect_case-laura_03": {
      "text": "[Anspent og på vakt] Jeg føler at rommet er langt borte, og at jeg ser gjennom glass.",
      "suggestion": "Orienter deg forsiktig sammen med meg: si to former du ser, og la utpusten gå rolig mens vi holder en liten del av den avstanden."
    },
    "dp_staying-in-contact-intense-affect_case-laura_04": {
      "text": "[Flatt og på vakt] Magen synker og jeg stivner, som om jeg er tilbake og venter på neste eksplosjon.",
      "suggestion": "Ok, pust lavt, slipp litt i kjeven, og berør kanten av suget før vi kommer tilbake til stolen og dette rommet."
    },
    "dp_staying-in-contact-intense-affect_case-laura_05": {
      "text": "[Langsomt og flatt] Jeg vil bli nummen før minnet åpner seg bredere enn jeg klarer å lukke.",
      "suggestion": "Da får nummenheten respekt som beskyttelse. Hælene i gulvet, blikket i rommet; i dag stopper vi ved døråpningen til minnet."
    },
    "dp_staying-in-contact-intense-affect_case-laura_06": {
      "text": "[Anspent og på vakt] Jeg tror jeg må avlive den gamle katten min i morgen, og skyldfølelsen er så stor at jeg nesten ikke klarer å si det.",
      "suggestion": "Det er en forferdelig blanding av kjærlighet og skyld å bære. Jeg blir hos deg i den delen som nesten ikke klarer å si det, og vi holder beslutningen liten nok til å tåles akkurat nå."
    },
    "dp_staying-in-contact-intense-affect_case-laura_07": {
      "text": "[Flatt og på vakt] Jeg stoler ikke på mine egne signaler når de sier at jeg er trygg.",
      "suggestion": "Lån stødighet av meg et øyeblikk: se på pusten min, følg tempoet mitt, og kjenn stolen under deg. Hold dette veldig lite."
    },
    "dp_staying-in-contact-intense-affect_case-laura_08": {
      "text": "[Fjern] Jeg blir svimmel og langt borte, som om rommet glir bakover.",
      "suggestion": "Nevn én ting du ser, én ting du hører, én ting du kjenner. Bli ved kanten av «langt borte» og ta pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-laura_09": {
      "text": "[Anspent og på vakt] Datteren min sa at hun savnet meg, og kjærligheten i det traff så hardt at jeg ville trekke meg unna.",
      "suggestion": "Den kjærligheten traff med så mye kraft at det ga mening å trekke seg unna. Jeg blir hos deg mens det å være savnet får berøre deg på en liten, tålelig måte."
    },
    "dp_staying-in-contact-intense-affect_case-laura_10": {
      "text": "[Langsomt og flatt] Jeg vil ikke kjenne dette i det hele tatt; hvis det åpner seg, tror jeg at jeg forsvinner.",
      "suggestion": "Det trenger ikke å åpne seg alt på én gang. Én fot blir i dette rommet, og vi berører bare den minste kanten før vi lukker igjen."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_01": {
      "text": "[Sint, med knyttede never] Varmen stiger; nevene vil knyte seg før jeg skjønner hva som traff.",
      "suggestion": "La fingrene løsne og kjenn håndflatene mot lårene. Pust lavt med meg; hold én bølge av varme, og ta så pause."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_02": {
      "text": "[Anspent og sint] Stemmen min vil rope før noen ser at jeg er rystet.",
      "suggestion": "La volumet senkes først, ikke styrken. Føtter plantet, hender åpne; kraften kan bli i rommet uten å bli en trussel."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_03": {
      "text": "[Rasende] Når jeg leser nyhetene, blir jeg så rasende at jeg vil rive hele systemet ned.",
      "suggestion": "Raseriet er enormt, og jeg trekker meg ikke unna det. Legg kraften i ordene, sterkt og tydelig, mens vi holder handling utenfor."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_04": {
      "text": "[Skyldpreget] Sønnen min gjemte seg bak sofaen da jeg ropte, og skyldfølelsen treffer så hardt at jeg nesten ikke klarer å være i kroppen.",
      "suggestion": "Skyldfølelsen viser hvor dypt frykten hans når deg. Jeg blir hos deg nær den smerten; vi kan la den bety noe uten at den blir selvangrep eller noe du må flykte fra."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_05": {
      "text": "[Anspent] Jeg er på vei ut fordi jeg kjenner at hendene mine vil knuse noe.",
      "suggestion": "Bra at du navnga farepunktet. Hender synlige, føtter ned; si trangen direkte her inne før kroppen gjør noe videre."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_06": {
      "text": "[Anspent og sint] Brystet hamrer som om jeg allerede er i en kamp.",
      "suggestion": "Kjenn ryggen mot stolen og se mot døren, så tilbake hit. Pulsen gjør seg klar til kamp; vi lar bølgen stige og falle uten å gi den ordre."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_07": {
      "text": "[Rasende] Da han på jobb lo av meg, fikk jeg lyst til å banke ham til han skjønte at han ikke skulle le.",
      "suggestion": "Det voldelige bildet sier hvor brennende ydmykelsen er. Begge føtter i gulvet og hendene åpne; raseriet hører hjemme i ord her, ikke i handling."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_08": {
      "text": "[Redd] Jeg vil skremme folk vekk før de ser at jeg er redd.",
      "suggestion": "Jeg hører den beskyttende delen. Hold blikket hos meg og pust; hold bare ytterkanten av frykten og kraften sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_09": {
      "text": "[Anspent og sint] Hvis jeg lar den respektløsheten passere, føles det som om jeg ikke er noe.",
      "suggestion": "Det er stikket: «ikke noe». Plant føttene og la ordene være her noen sekunder mens kampimpulsen holdes i hendene."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_10": {
      "text": "[Anspent og sint] Jeg føler meg ute av kontroll, og jeg hater at du kan se det.",
      "suggestion": "Jeg holder meg stødig mens du hater å bli sett. Åpne hendene og legg merke til at kontrollen kommer tilbake gjennom ett valg: å ikke handle på varmen."
    },
    "dp_staying-in-contact-intense-affect_case-nina_01": {
      "text": "[Skyldpreget] Jeg klarer ikke slutte å gråte, og så skammer jeg meg for hvor mye jeg trenger.",
      "suggestion": "Gråten og skammen over å trenge så mye er begge her. Jeg blir hos deg mens behovet får rom uten å bli noe du må beklage."
    },
    "dp_staying-in-contact-intense-affect_case-nina_02": {
      "text": "[Unnskyldende] Brystet er stramt og hodet dunker av å holde alle andre oppe.",
      "suggestion": "Du har holdt alle andre oppe så lenge at presset verker gjennom deg. Jeg blir hos deg mens noe av det får navn i stedet for å bæres alene."
    },
    "dp_staying-in-contact-intense-affect_case-nina_03": {
      "text": "[Splittet] Jeg sier hele tiden unnskyld for at jeg føler så mye, som om jeg tar for stor plass.",
      "suggestion": "Det er så mye følelse, og så kommer unnskyldningen oppå. Jeg blir ved følelsen før du må gjøre den mindre."
    },
    "dp_staying-in-contact-intense-affect_case-nina_04": {
      "text": "[Sliten] Jeg bet av hodet på sønnen min fordi han trengte meg, og så gråt jeg på badet fordi jeg følte meg som en forferdelig mor.",
      "suggestion": "Skyldfølelsen er intens fordi det å være en god mor betyr så mye for deg. Jeg er her sammen med deg mens både tårene og skammen er til stede, og vi holder dem fra å bli en dom over hvem du er."
    },
    "dp_staying-in-contact-intense-affect_case-nina_05": {
      "text": "[Unnskyldende] Jeg føler at jeg svikter alle, og kroppen vil bare klappe sammen.",
      "suggestion": "Det er tungt. La stolen bære noe av vekten, og vi legger merke til kanten av kollaps uten å be kroppen din bære det alene."
    },
    "dp_staying-in-contact-intense-affect_case-nina_06": {
      "text": "[Splittet] Hvis jeg slutter å gjøre, faller jeg fra hverandre, og noen kommer til å trenge meg likevel.",
      "suggestion": "Du trenger ikke stoppe alt på en gang. Ta en pause her med meg i to langsomme utpust og la en liten del få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-nina_07": {
      "text": "[Sliten] Jeg vil gå i det sekundet jeg kjenner hvor desperat jeg trenger at noen hjelper meg.",
      "suggestion": "Den trangen til å gå gir mening; å trenge hjelp har blitt faren. Bli sittende bare et øyeblikk, kjenn føttene, og la behovet være her uten unnskyldning."
    },
    "dp_staying-in-contact-intense-affect_case-nina_08": {
      "text": "[Unnskyldende] Noen ganger fantaserer jeg om å kjøre bort uten å si til noen hvor jeg dro, og så blir jeg kvalm av skyld.",
      "suggestion": "Ønsket om å slippe unna og skyldfølelsen er begge sterke. Vi kan bli ved begge uten å velge den ene mot den andre: den utslitte delen som vil bort, og den omsorgsfulle delen som blir kvalm av å dra."
    },
    "dp_staying-in-contact-intense-affect_case-nina_09": {
      "text": "[Splittet] Jeg får ikke tak i pusten når jeg slutter å ta vare på alle.",
      "suggestion": "I dette sekundet skal ingen andres behov legges på deg. La stolen bære ryggen din, forleng ett utpust, og gi din egen pust rommet som vanligvis går til alle andre."
    },
    "dp_staying-in-contact-intense-affect_case-nina_10": {
      "text": "[På gråten] Når sønnen min sier at han heller vil være hos faren sin, kjenner jeg så mye sorg at jeg ikke får puste.",
      "suggestion": "Den sorgen treffer akkurat der det kjennes mulig å miste ham. La stolen bære litt av vekten mens vi tar inn én liten del av det tapet."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_01": {
      "text": "[Tydelig ukomfortabel] Jeg vet at du er terapeuten min, men noen ganger vil jeg at du skal elske meg romantisk, på en måte terapeuter ikke skal.",
      "suggestion": "Jeg er glad for at du kan si det her. Terapigrensen må være tydelig og ikke romantisk, og samtidig vil jeg være følelsesmessig nær lengselen og frykten under den sammen med deg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      "text": "[Panisk] Tomheten brenner så vondt at jeg begynner å tenke at jeg må skade meg selv bare for å bevise at jeg fortsatt er her.",
      "suggestion": "Jeg er glad du sa det før du ble alene med det. Sikkerhet kommer først: hold hendene unna skade, press føttene ned i gulvet, og brenningen får navn uten å få bestemme hva som skjer videre."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      "text": "[Desperat] Jeg vil stikke fra dette rommet før du ser hvor desperat jeg er.",
      "suggestion": "Jeg hører trangen. Hælene tunge, rolig utpust, blikket hos meg. Vi blir ved kanten av desperasjonen sammen og tar pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_04": {
      "text": "[Desperat] Når du sier at vi må stoppe til tiden, får jeg lyst til å kutte meg så du ser hvor ille det blir.",
      "suggestion": "Takk for at du sier det her. Vi tar sikkerheten først: hendene synlige og unna skade, mens smerten over at timen slutter får plass i ord."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_05": {
      "text": "[Desperat] Jeg føler at jeg er for mye, og jeg hater at jeg trenger at du blir.",
      "suggestion": "Jeg vil være her med deg i dette. Senk skuldrene og pust med meg: ett lite pust med følelsen av å være «for mye», så hviler vi."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_06": {
      "text": "[Panisk] Brystet kjennes som et svart hull, og jeg er redd det skal sluke meg.",
      "suggestion": "Legg en hånd der hvis du vil. Vi sitter på kanten sammen—lav pust—og setter kort ord på «svart hull» før vi kommer tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_07": {
      "text": "[Panisk] Den forrige terapeuten min sa at hun skulle overføre meg, og jeg kjenner fortsatt panikken som om hun kastet meg bort.",
      "suggestion": "Den gamle avslutningen er fortsatt veldig levende. Hold blikket her hvis det hjelper; jeg blir hos deg mens vi berører bare panikken over å bli kastet bort."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_08": {
      "text": "[Panisk] Trangen til å klore meg selv blir veldig sterk, og jeg trenger noe ekte før jeg forsvinner.",
      "suggestion": "Takk for at du sier det. Press begge føttene ned og legg hendene et trygt sted; trangen kan være ved kanten noen sekunder uten å bli handling."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_09": {
      "text": "[Skamfull] Gråten tar over, og jeg føler meg ekkel fordi jeg trenger at du ser det.",
      "suggestion": "La stolen bære litt av dette. Jeg er med deg, og vi roer det nok ned til at skammen og tårene kan være her trygt."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_10": {
      "text": "[Desperat] Hvis du avlyser, faller jeg fra hverandre og hater meg selv for at jeg trenger deg.",
      "suggestion": "Det treffer som om gulvet forsvinner. Bruk stemmen min som anker og kjenn føttene mens vi setter ord på skrekken for å bli forlatt uten at du blir alene i den."
    },
    "dp_staying-in-contact-intense-affect_case-david_01": {
      "text": "[Kontrollert] Ansiktet brenner, og jeg vil avbryte dette før du ser hvor blottstilt jeg er.",
      "suggestion": "Det blottstilte stedet er hett og ber om beskyttelse. Hold hendene på stolen og bli ved stemmen min; vi berører brenningen kort, og så stopper vi før skammen tar over."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      "text": "[Skeptisk] Terapi virker ikke. Jeg føler meg verre, og kanskje det er fordi du ikke har nok erfaring for en som meg.",
      "suggestion": "Jeg setter pris på at du sier det direkte. Jeg vil bli ved sinnet og skuffelsen i stedet for å forsvare meg eller glatte det over, og vi skal også se nøye på om dette arbeidet hjelper deg."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      "text": "[Defensiv] Jeg vil gå ut før du ser meg tape ansikt.",
      "suggestion": "Bra, sett ord på draget mot døren. Bli sittende, blikket rett fram, og la delen som beskytter ansiktet ditt vite at vi ikke ydmyker den her."
    },
    "dp_staying-in-contact-intense-affect_case-david_04": {
      "text": "[Skamfull] Jeg ser hele tiden ansiktet til kona mi for meg etter at hun fant ut om affæren, og skylden er så brennende at jeg vil krype ut av huden.",
      "suggestion": "Den skylden svir. Føttene i gulvet; vi tar bare kanten av ansiktet hennes og angeren din, nok til å møte det uten å krype ut av huden."
    },
    "dp_staying-in-contact-intense-affect_case-david_05": {
      "text": "[Rasende] Jeg orker ikke ordet «kald»; det får meg til å føle meg avslørt og rasende.",
      "suggestion": "Det ordet skjærer rett inn. Hold føttene i gulvet og hold kontakt med stemmen min mens vi slipper inn en liten, tålelig del av hvor skamfullt og blottstilt det kjennes å bli sett sånn."
    },
    "dp_staying-in-contact-intense-affect_case-david_06": {
      "text": "[Skamfull] Jeg synes det er flaut at jeg klikket hjemme; jeg hørtes akkurat ut som den typen jeg dømmer.",
      "suggestion": "Den flauheten er varm. Senk skuldrene og pust med meg; vi holder kort kontakt med den og hviler."
    },
    "dp_staying-in-contact-intense-affect_case-david_07": {
      "text": "[Kontrollert] Jeg føler for å stenge ned så jeg ikke sier noe desperat.",
      "suggestion": "La nedstengingen senke tempoet uten å ta deg bort. Mykne kjeven, hold én hånd mot stolen, og la den desperate kanten være til stede, men innrammet."
    },
    "dp_staying-in-contact-intense-affect_case-david_08": {
      "text": "[Tydelig ukomfortabel] Jeg brukte seksuelt press mot noen for mange år siden, og å si det gjør at jeg føler at det ikke finnes noen vei tilbake fra den jeg var.",
      "suggestion": "Dette er alvorlig, og det betyr noe at du sier det tydelig. Jeg blir nærværende hos deg mens vi møter skammen, uten å unnskylde det som skjedde og uten å la den sluke deg."
    },
    "dp_staying-in-contact-intense-affect_case-david_09": {
      "text": "[Redd] Forsvaret kommer fort opp, og jeg er redd jeg mister kontrollen over ansiktet.",
      "suggestion": "Der er forsvaret, som prøver å beskytte ansiktet ditt. La kjeven slippe litt og hold én hånd på stolen; vi kan være nær blottstillingen uten å gi noen kontroll."
    },
    "dp_staying-in-contact-intense-affect_case-david_10": {
      "text": "[Sint, med knyttede never] Når jeg ser for meg mannen kona mi tekstet med, får jeg lyst til å knuse ansiktet hans til han slutter å bety noe.",
      "suggestion": "Det voldelige bildet trenger ord, ikke bevegelse. Føttene ned, hendene åpne; raseriet kan tas på alvor mens kroppen holdes ute av handling."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      "text": "[Flatt] En bølge kommer opp i brystet, og jeg vil stenge den ned før den tar meg tilbake dit.",
      "suggestion": "Vi lar den ikke ta deg helt tilbake. Nevn to ting i dette rommet, kjenn føttene, og gi bølgen bare en smal kant å bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      "text": "[Lav stemme] Jeg så opptak fra en ny krigssone, barn under ruiner, og hele kroppen ble kald og kvalm.",
      "suggestion": "Det bildet traff både den gamle traumereaksjonen og den menneskelige gru. Jeg er her sammen med deg mens vi orienterer oss til dette rommet, og så holder vi bare én trygg tråd av den kalde kvalmen."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      "text": "[Langsomt og flatt] Jeg kjenner ingenting og alt på én gang, og det skremmer meg.",
      "suggestion": "Den svingen fra nummen til oversvømt er skremmende. Velg ett signal - stramt, tungt eller varmt - og la resten vente mens pusten holder seg rolig."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_04": {
      "text": "[Langsomt og flatt] Jeg vil stenge ned før rommet begynner å kjennes uvirkelig.",
      "suggestion": "La nedstengingen være signalet vårt om å orientere oss. Nevn fargen på veggen, kjenn stolen under lårene, og bli ved terskelen til følelsen i stedet for å gå helt inn."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_05": {
      "text": "[Skjelvende] Hendene mine begynner å skjelve når jeg prøver å si bare én bit av det som skjedde.",
      "suggestion": "Skjelvingen kan snakke før historien gjør det. La hendene hvile der du kan se dem, pust lavt, og gi skjelvingen noen sekunder sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_06": {
      "text": "[Lav stemme] Når jeg kommer hjem og det er stille, lander vekten på brystet som en dør som lukkes.",
      "suggestion": "Den stillheten legger seg tungt og endelig. Hold én hånd på stolen eller brystet, si «vekt» én gang, og la dette rommet minne systemet ditt på at du ikke er låst inne der."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_07": {
      "text": "[Flatt] Etter en folkemengde summer huden som om jeg fortsatt er på vakt.",
      "suggestion": "Se deg rundt i dette rommet og velg det tryggeste hjørnet. La summingen vite at skanningen skjer her, ikke der borte, og hold bare en tynn tråd av den sammen med oss."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_08": {
      "text": "[Hyperårvåken] Jeg er redd for at hvis jeg lar meg kjenne det, så sluker hele greia meg.",
      "suggestion": "Vi holder det mindre enn hele greia. Føttene på gulvet, én kant av følelsen, og så en tydelig pause; jeg blir hos deg gjennom stoppet også."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_09": {
      "text": "[Langsomt og flatt] Jeg vil forsvinne når minnene presser seg på og rommet slutter å kjennes virkelig.",
      "suggestion": "Jeg er her sammen med deg, og vi tar den trangen på alvor. Press føttene ned, kjenn stolen, og sett navn på ønsket om å forsvinne mens vi holder orienteringen her."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_10": {
      "text": "[Håpløs] Når nettene blir lange, tenker jeg at det hadde vært enklere å ikke være i live, og så hater jeg meg selv for å si det.",
      "suggestion": "Jeg er veldig glad for at du sier det her. Vi tar tryggheten din på alvor, og jeg blir hos deg mens vi setter direkte ord på fortvilelsen uten at du blir alene med den eller lar den bestemme neste steg."
    },
    "dp_self-disclosure_case-sara_01": {
      "text": "[På gråten] Når jeg sier at jeg fortsatt savner ham, tenker du egentlig at jeg høres latterlig ut?",
      "suggestion": "Nei. Jeg hører ikke noe latterlig; jeg hører sorg over en som betydde noe. Jeg blir beveget av hvor varsomt du prøver å overleve dette tapet, og jeg vil vite hvordan det er å høre det."
    },
    "dp_self-disclosure_case-sara_02": {
      "text": "[På gråten] Du blir sikkert lei av å høre meg gråte over ham hver uke.",
      "suggestion": "Tårene dine gjør meg ikke lei av deg. Jeg kjenner omsorg for hvor alene dette blir for deg, og jeg vil at den alenheten skal få selskap her. Slipp det inn bare så mye som kjennes trygt."
    },
    "dp_self-disclosure_case-sara_03": {
      "text": "[På gråten] Når jeg gråter og du blir stille, blir jeg redd for at tårene mine får deg til å trekke deg unna.",
      "suggestion": "Tårene dine får meg ikke til å trekke meg unna. Jeg kjenner meg nær og varsom når de kommer, og jeg vil at du legger merke til hvordan det er å høre det fra meg."
    },
    "dp_self-disclosure_case-sara_04": {
      "text": "[Lavmælt] Dette er første gang jeg er i terapi. Forventer du at jeg skal vite hvor jeg skal begynne?",
      "suggestion": "Nei. Jeg forventer ikke at du vet hvor du skal begynne. Jeg kan hjelpe oss å finne en start, og jeg vil legge merke til hvordan det er for deg å slippe å gjøre dette riktig."
    },
    "dp_self-disclosure_case-sara_05": {
      "text": "[Flau] Jeg synes det er flaut at du ser meg så rotete og trengende.",
      "suggestion": "Jeg dømmer verken rotet eller behovet. Jeg kjenner respekt for motet det tar å la meg se dem, og jeg vil at vi legger merke til skammen som ventet noe hardere."
    },
    "dp_self-disclosure_case-sara_06": {
      "text": "[Nølende] Tror du faktisk at jeg ikke fortsatt er alene om et år, eller prøver du bare å trøste meg?",
      "suggestion": "Jeg kan ikke vite hva et år vil bringe, og jeg kjenner et ekte håp sammen med deg. Jeg merker også at håp kan kjennes som press når skammen allerede kaller deg dum."
    },
    "dp_self-disclosure_case-sara_07": {
      "text": "[Redd] Når jeg spør om jeg er for mye, er jeg redd du begynner å trekke deg unna.",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner meg til stede og villig til å være nær denne frykten, uten å be deg tro meg raskere enn du kan."
    },
    "dp_self-disclosure_case-sara_08": {
      "text": "[Nølende] Er du i et forhold? Får det deg til å dømme meg?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si tydelig at jeg ikke dømmer deg. Jeg er interessert i hva dette spørsmålet bærer for deg."
    },
    "dp_self-disclosure_case-sara_09": {
      "text": "[Skamfull] Jeg hater at jeg trenger noen, og å trenge deg gjør meg blottstilt.",
      "suggestion": "Når jeg hører det, kjenner jeg ømhet for hvor risikabelt det er for deg å trenge noen. Jeg trekker meg ikke unna behovet; vi kan legge merke til delen av deg som forventer at det skal koste deg."
    },
    "dp_self-disclosure_case-sara_10": {
      "text": "[Nølende] Bryr du deg egentlig om meg, eller er omsorg bare en del av jobben din?",
      "suggestion": "Jeg bryr meg om deg i denne terapirelasjonen, og grensene er en del av hvordan jeg tar ansvar for den omsorgen. Legg merke til hva som kan ta det inn, og hva som mistror det."
    },
    "dp_self-disclosure_case-michael_01": {
      "text": "[Utfordrende] Vær ærlig—høres jeg svak ut når jeg snakker om å være såret?",
      "suggestion": "Jeg hører ikke svakhet i dette. Jeg hører innsats og mot, og jeg kjenner respekt for at du sier det. Jeg vil at den respekten får stå ved siden av delen som ventet forakt."
    },
    "dp_self-disclosure_case-michael_02": {
      "text": "[Anspent] Når jeg spør om du også blir sint, trenger jeg å vite at du ikke ser ned på mitt sinne.",
      "suggestion": "Jeg kjenner sinne i meg selv også, og jeg kjenner meg stødig sammen med ditt, ikke hevet over det. Du trenger ikke skjule sinne her for å beholde respekten min."
    },
    "dp_self-disclosure_case-michael_03": {
      "text": "[Anspent] Du tenker sikkert at det er jeg som er problemet hjemme, sånn som alle andre.",
      "suggestion": "Jeg ser ikke på deg som problemet. Jeg kjenner hvor mye smerte som ligger under varmen, og jeg vil at vi holder oss nær det uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-michael_04": {
      "text": "[Engstelig] Når jeg innrømmer at jeg ropte, leter jeg etter fordømmelse i ansiktet ditt.",
      "suggestion": "Jeg dømmer deg ikke. Jeg blir bekymret for hva ropingen koster deg og menneskene du er glad i, og jeg kjenner også respekt for at du er villig til å se på det her."
    },
    "dp_self-disclosure_case-michael_05": {
      "text": "[Utfordrende] Blir terapeuter lei av å høre den samme historien om utbrudd igjen?",
      "suggestion": "Jeg blir ikke lei av å høre det. Jeg blir fokusert når vi kommer tilbake til splitsekundet der det snur, fordi det er der kontrollen din kan vokse."
    },
    "dp_self-disclosure_case-michael_06": {
      "text": "[Utfordrende] Er du sterk nok til å tåle meg når jeg er sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å være med sinnet ditt, og jeg er ikke opptatt av å bevise styrke mot deg. Jeg vil at vi bruker den stødigheten til å forstå hva sinnet beskytter."
    },
    "dp_self-disclosure_case-michael_07": {
      "text": "[Fast] Du ser rolig ut mens jeg forteller om ropingen hjemme; går noe av dette egentlig inn på deg?",
      "suggestion": "Det går inn på meg. Jeg holder meg stødig med vilje, så vi kan se på det uten at noen av oss trekker seg unna."
    },
    "dp_self-disclosure_case-michael_08": {
      "text": "[Utfordrende] Respekterer du det å jobbe med en som blir så opphetet som meg?",
      "suggestion": "Jeg respekterer å jobbe med deg. Jeg kjenner alvoret bak direkteheten din og prisen du prøver å se på, og jeg vil gi rom til hvor vanskelig respekt fra meg kan være å ta inn."
    },
    "dp_self-disclosure_case-michael_09": {
      "text": "[Nysgjerrig] Er du gift? Jeg lurer på om du tar med deg sinnet hjem.",
      "suggestion": "Jeg vet noe om å måtte roe ned sinne, og det hjelper meg å sitte sammen med deg her. Jeg ser ikke på sinnet ditt fra avstand."
    },
    "dp_self-disclosure_case-michael_10": {
      "text": "[Flau] Si at du skjønner hvorfor dette er så vanskelig, for jeg føler meg latterlig som trenger hjelp.",
      "suggestion": "Jeg skjønner hvorfor dette er vanskelig. Jeg hører press og sårethet i det, ikke noe latterlig, og jeg vil snakke direkte til delen som forventer forakt fra meg."
    },
    "dp_self-disclosure_case-jason_01": {
      "text": "[Stille] Når jeg blir stille, bekymrer jeg meg for at du sitter der og skulle ønske jeg skyndte meg.",
      "suggestion": "Du kaster ikke bort tiden min. Jeg er fortsatt interessert i deg i stillheten, og jeg vil at vi sjekker frykten for at jeg allerede har forlatt deg der alene."
    },
    "dp_self-disclosure_case-jason_02": {
      "text": "[Nølende] Jeg spør om du noen gang føler deg utilpass fordi jeg føler meg som en fremmed her.",
      "suggestion": "Jeg kjenner også til det å føle seg utilpass, og det gjør at jeg vil gå varsomt fram her sammen med deg. Kanskje gjør det dette litt mindre ensomt, eller kanskje ikke ennå."
    },
    "dp_self-disclosure_case-jason_03": {
      "text": "[Lang pause] Når jeg pauser for lenge, ser jeg for meg at du tenker at jeg er kjedelig.",
      "suggestion": "Jeg opplever deg ikke som kjedelig. Jeg kjenner meg nysgjerrig og sammen med deg, også i pausene; pausene får meg ikke til å forsvinne."
    },
    "dp_self-disclosure_case-jason_04": {
      "text": "[Nølende] Er det greit at jeg ikke vet hva jeg skal si?",
      "suggestion": "Det er greit å ikke vite hva du skal si. Jeg kjenner tålmodighet med deg her; det å ikke vite gjør ikke at du mislykkes med meg."
    },
    "dp_self-disclosure_case-jason_05": {
      "text": "[Nølende] Da jeg droppet festen, ble du skuffet over meg eller tenkte at jeg unngikk for mye igjen?",
      "suggestion": "Nei. Jeg kjenner ikke skuffelse. Jeg merker hvor mye den festen krevde av hele systemet ditt, og jeg vil at svaret mitt møter delen som venter på karakter."
    },
    "dp_self-disclosure_case-jason_06": {
      "text": "[Nølende] Blir du utålmodig når jeg blir stille og ikke finner ord?",
      "suggestion": "Jeg blir ikke utålmodig. Jeg kjenner meg beskyttende overfor dette langsommere tempoet, og interessert i stillheten som noe meningsfullt heller enn en feil."
    },
    "dp_self-disclosure_case-jason_07": {
      "text": "[Stille] Når jeg blir stille, dømmer du meg eller blir irritert inni deg?",
      "suggestion": "Jeg dømmer ikke stillheten din, og jeg blir ikke irritert. Jeg respekterer hvor mye det koster å bli værende her, og vi kan behandle stillheten som en del av arbeidet i stedet for noe du må beklage."
    },
    "dp_self-disclosure_case-jason_08": {
      "text": "[Nølende] Hvis jeg sier noe kleint her, ville du sagt fra, eller bare sittet og dømt det inni deg?",
      "suggestion": "Jeg ville prøvd å være ærlig og vennlig, ikke sitte og dømme deg i det skjulte. Jeg kjenner meg beskyttende overfor delen som allerede venter latterliggjøring."
    },
    "dp_self-disclosure_case-jason_09": {
      "text": "[Nølende] Blir du noen gang nervøs i grupper, eller er det bare meg?",
      "suggestion": "Jeg blir også nervøs i grupper iblant, og det hjelper meg å ta frykten din på alvor i stedet for å se den som rar. Du er ikke alene eller merkelig som har den frykten."
    },
    "dp_self-disclosure_case-jason_10": {
      "text": "[Stille] Når jeg spør om jeg noen gang blir mindre engstelig, trenger jeg å vite om du faktisk tror på det.",
      "suggestion": "Jeg kjenner håp sammen med deg. Jeg kjenner det fordi jeg ser hvor hardt du fortsetter å strekke deg mot kontakt, selv når frykten trekker deg tilbake."
    },
    "dp_self-disclosure_case-laura_01": {
      "text": "[Langsomt og flatt] Når jeg ikke føler noe, blir du utilpass eller tenker at jeg er utilgjengelig?",
      "suggestion": "Jeg blir ikke utilpass av nummenheten, og jeg ser deg ikke som utilgjengelig. Jeg kjenner meg varsom og tålmodig med den, og jeg vil at du får rom her uten å prestere følelse for meg."
    },
    "dp_self-disclosure_case-laura_02": {
      "text": "[Nølende] Er du irritert over at jeg fortsetter å beskytte meg i stedet for å åpne meg?",
      "suggestion": "Jeg er ikke irritert. Jeg kjenner respekt for hvor viktig det har vært å beskytte deg. Du kan ta inn bare den delen av det som kjennes sann."
    },
    "dp_self-disclosure_case-laura_03": {
      "text": "[Anspent og på vakt] Du virker rolig—skjønner du egentlig hvordan dette er?",
      "suggestion": "Jeg kjenner tyngden i det, og jeg holder meg rolig med vilje for at dette skal føles tryggere. Roen min er ment som stødighet, ikke avstand."
    },
    "dp_self-disclosure_case-laura_04": {
      "text": "[Langsomt og flatt] Har du jobbet med traumer som mine før, eller er jeg for avstengt for dette?",
      "suggestion": "Jeg har arbeidet med traumer før, og jeg opplever ikke avstengningen din som en feil. Her kjenner jeg meg mest opptatt av tempo og trygghet."
    },
    "dp_self-disclosure_case-laura_05": {
      "text": "[Fjern] Etter at du har hørt hva som skjedde, tenker du mindre om meg eller ser meg som ødelagt?",
      "suggestion": "Jeg tenker ikke mindre om deg. Jeg kjenner sorg over det du har båret, og respekt for hvor varsomt du har overlevd."
    },
    "dp_self-disclosure_case-laura_06": {
      "text": "[Nølende] Kommer du til å presse meg inn i detaljer hvis jeg blir stille for lenge?",
      "suggestion": "Jeg kommer ikke til å presse deg inn i detaljer. Jeg er mer opptatt av at du skal være trygg nok til å være til stede. Du kan korrigere meg hvis jeg går for fort."
    },
    "dp_self-disclosure_case-laura_07": {
      "text": "[Nølende] Ser du når jeg blir langt borte, eller virker jeg bare vanskelig?",
      "suggestion": "Noen ganger kan jeg merke at du er langt borte, og da blir jeg mer opptatt av tempo enn av å gå dypere. Jeg leser det ikke som vanskelig."
    },
    "dp_self-disclosure_case-laura_08": {
      "text": "[Nølende] Tror du vennligheten din vil gjøre meg verre eller mer avhengig?",
      "suggestion": "Jeg vil ikke presse vennlighet på deg eller gjøre deg avhengig. Jeg er varsom med omsorg her; den må tilbys på en måte de beskyttende delene dine kan teste."
    },
    "dp_self-disclosure_case-laura_09": {
      "text": "[Langsomt og flatt] Når jeg blir blank, er du redd for at jeg holder på å bryte sammen?",
      "suggestion": "Jeg er ikke redd for at du skal bryte sammen med meg. Jeg er klar til å senke farten med en gang du trenger det, og du trenger ikke holde deg samlet for min skyld."
    },
    "dp_self-disclosure_case-laura_10": {
      "text": "[Nysgjerrig] Tror du jeg kan begynne å føle igjen, eller er du bare snill?",
      "suggestion": "Jeg tror det er mulig å kjenne mer igjen, og jeg sier det ikke for å glatte over noe. Jeg kjenner tålmodighet med veien dit; håpet kan få være lite nok til at det ikke presser deg."
    },
    "dp_self-disclosure_case-carlos_01": {
      "text": "[Utfordrende] Tror du jeg er en dårlig far fordi jeg mister det?",
      "suggestion": "Når du sier det, kjenner jeg hvor mye sønnen din betyr for deg. Jeg ser ikke en dårlig far foran meg. Jeg vil at vi blir nær faren som bryr seg så mye."
    },
    "dp_self-disclosure_case-carlos_02": {
      "text": "[Anspent] Når du snakker om sårbarhet, prøver du å gjøre meg myk?",
      "suggestion": "Jeg prøver ikke å gjøre deg myk. Jeg kjenner respekt for styrken din, og jeg vil hjelpe den til å bli tryggere for menneskene du er glad i."
    },
    "dp_self-disclosure_case-carlos_03": {
      "text": "[Anspent og sint] Når jeg beskriver varmen i meg, skremmer noe av det deg?",
      "suggestion": "Jeg kjenner meg våken og stødig sammen med deg, ikke redd for deg. Jeg vil at vi bruker den stødigheten til å se trygt på varmen."
    },
    "dp_self-disclosure_case-carlos_04": {
      "text": "[Skamfull] Du ser sikkert på meg og ser bare enda en sint fyr.",
      "suggestion": "Jeg ser ikke bare sinne. Jeg kjenner stoltheten, såretheten og lojaliteten som kommer så fort under det. For meg er du mer enn enda en sint fyr."
    },
    "dp_self-disclosure_case-carlos_05": {
      "text": "[Anspent og sint] Er du tøff nok til å sitte med meg når jeg blir så sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å sitte med sinnet ditt. Jeg er ikke her for å overkjøre deg eller bli overkjørt av deg; jeg vil at vi holder kontakt med sinnet i stedet for å gjøre det til en konkurranse."
    },
    "dp_self-disclosure_case-carlos_06": {
      "text": "[Skamfull] Kan du respektere meg når du har sett hvor stygt temperamentet mitt kan bli?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det tydeligst når du lar meg se både temperamentet og hva det koster deg. La respekten gjelde prisen også, ikke bare kontrollen."
    },
    "dp_self-disclosure_case-carlos_07": {
      "text": "[Utfordrende] Fungerer puste-greiene for deg når du kjenner at du er klar til å smelle?",
      "suggestion": "Å roe ned pusten hjelper meg å beholde valg når aktiveringen stiger, og derfor bruker jeg det her. Jeg ber deg ikke gjøre noe jeg oppfatter som svakt."
    },
    "dp_self-disclosure_case-carlos_08": {
      "text": "[Nysgjerrig] Er du gift, og mister du noen gang besinnelsen med folk du er glad i?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si at sinne er menneskelig for meg. Jeg sitter ikke over ditt sinne og dømmer det."
    },
    "dp_self-disclosure_case-carlos_09": {
      "text": "[Utfordrende] Tror du faktisk at jeg kan endre meg, eller sier du bare det terapeuter sier?",
      "suggestion": "Jeg tror du kan forandre deg, og jeg sier det ikke som en replikk. Jeg kjenner det sterkest når jeg hører hvor mye familien din betyr for deg."
    },
    "dp_self-disclosure_case-carlos_10": {
      "text": "[Defensiv] Vær ærlig, gruer du deg til timene når jeg kommer inn så pansret?",
      "suggestion": "Jeg gruer meg ikke. Jeg kjenner meg våken, engasjert og respektfull overfor forpliktelsen under rustningen. Du trenger ikke komme uten rustning for at jeg skal ville jobbe med deg."
    },
    "dp_self-disclosure_case-nina_01": {
      "text": "[Skyldpreget] Jeg føler meg egoistisk bare av å ta plass her i stedet for å hjelpe noen andre.",
      "suggestion": "Jeg opplever deg ikke som egoistisk her. Jeg kjenner meg beskyttende overfor delen av deg som hele tiden beklager at den har behov. La den beskyttelsen være for deg, ikke enda et krav."
    },
    "dp_self-disclosure_case-nina_02": {
      "text": "[Unnskyldende] Når jeg sier at jeg er bitter, dømmer du meg for ikke å være snillere?",
      "suggestion": "Jeg dømmer ikke bitterheten. Jeg blir trist av hvor lenge du har båret for mye alene, og jeg vil at det overbelastede stedet skal bli møtt heller enn korrigert."
    },
    "dp_self-disclosure_case-nina_03": {
      "text": "[Splittet] Du tenker sikkert at jeg bare burde skjerpe meg og slutte å gjøre alt så vanskelig.",
      "suggestion": "Jeg tenker ikke at du bare burde skjerpe deg. Jeg kjenner medfølelse med hvor mye du overstyrer deg selv, og jeg vil at det møter delen som kom forberedt på kritikk."
    },
    "dp_self-disclosure_case-nina_04": {
      "text": "[Nølende] Kjenner du noen gang skyld når du hviler, eller er det bare mitt problem?",
      "suggestion": "Jeg kjenner også skyld rundt hvile fra mitt eget liv, og det hjelper meg å ta din skyld på alvor i stedet for å se den som bare deg. Jeg behandler ikke skylden din som dum."
    },
    "dp_self-disclosure_case-nina_05": {
      "text": "[På gråten] Når jeg gråter sånn, blir du utilpass med meg?",
      "suggestion": "Tårene dine gjør meg ikke utilpass med deg. Jeg kjenner meg nærmere deg når de kommer, fordi de lar meg møte noe av det du vanligvis bærer alene."
    },
    "dp_self-disclosure_case-nina_06": {
      "text": "[Splittet] Når jeg ber om hjelp, blir jeg en belastning for deg også?",
      "suggestion": "Du blir ikke en belastning for meg når du ber om hjelp. Jeg kjenner bekymring for hvor alene du er med så mye ansvar, og den bekymringen er min å holde, ikke din å håndtere."
    },
    "dp_self-disclosure_case-nina_07": {
      "text": "[Nølende] Er det greit at jeg ber om hjelp her uten å beklage først?",
      "suggestion": "Ja, det er greit å be om hjelp her. Jeg blir glad når du gjør det, og jeg vil at den gleden møter forventningen om at det å spørre er for mye."
    },
    "dp_self-disclosure_case-nina_08": {
      "text": "[Mistenksom] Blir du lei av at jeg beklager hver gang jeg trenger noe?",
      "suggestion": "Du gjør meg ikke lei. Jeg kjenner varme for behovene du stadig beklager, og vi kan gå sakte med hvor vanskelig den varmen er å ta inn."
    },
    "dp_self-disclosure_case-nina_09": {
      "text": "[Nølende] Sier du fra hvis jeg gjør terapi feil, eller lar du meg bare mislykkes stille?",
      "suggestion": "Jeg ville sagt det varsomt hvis jeg tenkte vi var på villspor. Jeg kjenner respekt for hvor hardt du prøver her, og terapi trenger ikke bli enda et sted der du må prestere perfekt."
    },
    "dp_self-disclosure_case-nina_10": {
      "text": "[Nølende] Synes du virkelig jeg fortjener omsorg når jeg ikke har gjort meg fortjent til den?",
      "suggestion": "Jeg mener at du fortjener omsorg, ikke fordi du har gjort deg fortjent til den. Jeg kjenner det sterkt her, og den tvilende delen kan få bruke tid på svaret mitt."
    },
    "dp_self-disclosure_case-aisha_01": {
      "text": "[Nølende] Bryr du deg egentlig om meg, eller får du betalt for det?",
      "suggestion": "Jeg bryr meg om deg, og jeg kjenner den omsorgen her sammen med deg. La delen som tviler på omsorg høre meg uten å måtte tro helt på det med en gang."
    },
    "dp_self-disclosure_case-aisha_02": {
      "text": "[Desperat] Når jeg spør om du kommer til å forlate meg, trenger jeg å vite om du allerede vil ha avstand.",
      "suggestion": "Jeg kjenner kraften i den frykten, og jeg ønsker ikke avstand fra deg her. Jeg vil være så tydelig og pålitelig jeg kan, særlig når frykten sier at jeg allerede er på vei bort."
    },
    "dp_self-disclosure_case-aisha_03": {
      "text": "[Nølende] Skremte jeg deg da jeg sa jeg ville skade meg?",
      "suggestion": "Du skremte meg ikke bort. Jeg ble bekymret, fordi sikkerheten din betyr noe, og jeg ble veldig til stede sammen med deg. Jeg vil at bekymring fra meg skal bety varsom nærhet, ikke avstand."
    },
    "dp_self-disclosure_case-aisha_04": {
      "text": "[Såret] Da du ikke svarte på meldingen min, ble jeg såret og lurte på om grensen betydde mer enn meg.",
      "suggestion": "Jeg blir lei meg for at grensen min gjorde deg vondt, og jeg bryr meg om å forstå det sammen med deg. Grensen er ekte, og omsorgen min er også ekte."
    },
    "dp_self-disclosure_case-aisha_05": {
      "text": "[Redd] Er du sint på meg, eller har jeg allerede ødelagt dette?",
      "suggestion": "Jeg er ikke sint på deg. Jeg kjenner ømhet for den redde delen som forventer at kontakten skal ryke, og jeg vil forstå den forventningen sammen med deg."
    },
    "dp_self-disclosure_case-aisha_06": {
      "text": "[Skamfull] Når jeg blir så intens, synes du jeg er for mye?",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner størrelsen på smerten og et ønske om å hjelpe deg å holde den, særlig der du forventer at jeg trekker meg unna."
    },
    "dp_self-disclosure_case-aisha_07": {
      "text": "[Desperat] Når jeg spør om du liker meg, forventer en del av meg allerede at svaret skal forsvinne.",
      "suggestion": "Jeg kjenner varme for deg, og jeg er glad du spurte direkte. Jeg legger også merke til hvor raskt en del av deg gjør seg klar til at svaret skal forsvinne."
    },
    "dp_self-disclosure_case-aisha_08": {
      "text": "[Nølende] Er du skuffet over meg, eller sier du det bare ikke?",
      "suggestion": "Skuffelse er ikke det jeg bærer på. Jeg kjenner takknemlighet for at du lar meg se hva som skjer, og jeg vil at vi legger merke til hvor raskt du ventet skuffelse fra meg."
    },
    "dp_self-disclosure_case-aisha_09": {
      "text": "[Anklagende] Du var to minutter forsinket igjen. Merker du i det hele tatt hva det gjør med meg, eller betyr det bare ingenting for deg?",
      "suggestion": "Jeg la merke til at jeg var forsinket, og jeg er lei for det. Jeg kan se for meg at det traff som om du ikke betydde noe, og jeg vil at vi ser på hva som skjedde i deg da jeg ikke var her presis."
    },
    "dp_self-disclosure_case-aisha_10": {
      "text": "[Nølende] Tror du jeg noen gang vil ha det greit, eller er jeg for intens til det?",
      "suggestion": "Jeg kjenner håp sammen med deg, og jeg tror ikke intensiteten din gjør det umulig å få det greit. Jeg vil gå sakte nok til at håpet ikke føles som press."
    },
    "dp_self-disclosure_case-david_01": {
      "text": "[Kontrollert] Når jeg sier at du må overbevise meg, følger jeg med på om du blir defensiv.",
      "suggestion": "Når du ber meg overbevise deg, kjenner jeg et drag mot å bevise meg. Jeg velger nysgjerrighet i stedet, fordi det å bevise meg ville trekke oss bort fra det du tester i meg."
    },
    "dp_self-disclosure_case-david_02": {
      "text": "[Utfordrende] Vil du faktisk jobbe med en som kan høres så arrogant ut som meg?",
      "suggestion": "Jeg vil jobbe med deg. Jeg blir engasjert av det som står på spill under fasaden og arrogansen; legg merke til hva som er lettest å tro på, interessen eller tvilen."
    },
    "dp_self-disclosure_case-david_03": {
      "text": "[Flau] En del av meg vil at du skal være imponert, og det er flaut å innrømme.",
      "suggestion": "Det jeg kjenner sterkest er interesse for deg, ikke et behov for å bli imponert. Jeg setter også pris på at du sier den flaue delen direkte; ærligheten interesserer meg mer enn prestasjonen."
    },
    "dp_self-disclosure_case-david_04": {
      "text": "[Utfordrende] Vær ærlig—tenker du at jeg er problemet i alle rom jeg går inn i?",
      "suggestion": "Jeg holder ikke deg som problemet. Jeg kjenner hvor raskt skam og forsvar går på hos deg, og jeg vil at vi legger merke til den løkken uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-david_05": {
      "text": "[Avvisende] Når du ser på meg sånn, lurer jeg på om du synes synd på meg. Gjør du det?",
      "suggestion": "Jeg synes ikke synd på deg. Jeg kjenner bekymring og respekt for hvor vanskelig det er å la disse sidene bli sett, og jeg vil forstå hva medlidenhet ville betydd om deg hvis den var der."
    },
    "dp_self-disclosure_case-david_06": {
      "text": "[Avvisende] Jeg vet at jeg er forsinket igjen. Jobben tok overhånd. Uansett, hvor skal vi begynne?",
      "suggestion": "Jeg vil være direkte: når du kommer for sent gjentatte ganger og går raskt videre fra det, kjenner jeg at arbeidet mellom oss blir skjøvet til side, og jeg kjenner meg også litt avfeid. Jeg vil at vi ser på hva som skjer for deg før timene."
    },
    "dp_self-disclosure_case-david_07": {
      "text": "[Såret, men skarp] Skammer du deg noen gang over å ta feil, eller er den svakheten bare min?",
      "suggestion": "Jeg kjenner også skam rundt å ta feil i mitt eget liv, og det hjelper meg å respektere hvor hett det er for deg, ikke avfeie det som svakhet. Jeg står ikke over deg i den kampen."
    },
    "dp_self-disclosure_case-david_08": {
      "text": "[Avvisende] Dette er kleint, men synes du jeg er attraktiv, eller ser du bare enda en vanskelig klient?",
      "suggestion": "Jeg vil svare varsomt: Jeg kan se deg som en attraktiv person, og jeg forholder meg ikke til deg romantisk eller seksuelt. Jeg ser deg heller ikke bare som en vanskelig klient; jeg vil legge merke til hva som skjer for deg når jeg svarer."
    },
    "dp_self-disclosure_case-david_09": {
      "text": "[Nysgjerrig] Er du gift, og ville det få deg til å dømme affæren min?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si tydelig at jeg ikke er her for å dømme deg. Jeg er interessert i hva affæren betyr og hva den koster deg."
    },
    "dp_self-disclosure_case-david_10": {
      "text": "[Utfordrende] Respekterer du meg egentlig når du ser disse sidene av meg?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det sterkest når du lar de vanskeligere sidene bli synlige her. Vi kan la respekt gjelde de sidene også."
    },
    "dp_self-disclosure_case-marcus_01": {
      "text": "[Flatt] Når jeg spør om jeg er ødelagt, trenger jeg å vite hva du ser.",
      "suggestion": "Jeg ser ikke noe ødelagt i deg. Jeg kjenner respekt for hvor hardt du har arbeidet for å overleve, og du trenger ikke svare på det før du er klar."
    },
    "dp_self-disclosure_case-marcus_02": {
      "text": "[Langsomt og flatt] Når jeg sitter her nummen, blir du frustrert over at jeg ikke klarer å gi deg mer?",
      "suggestion": "Frustrasjon er ikke det jeg kjenner. Jeg kjenner tålmodighet og varsomhet med tempoet du trenger; du trenger ikke å prestere følelse for meg."
    },
    "dp_self-disclosure_case-marcus_03": {
      "text": "[Nølende] Går dette inn på deg, eller holder du deg utenfor det?",
      "suggestion": "Det går inn på meg, og jeg holder meg stødig med vilje så du ikke skal måtte bære det alene. Stødigheten min er kontakt, ikke avstand."
    },
    "dp_self-disclosure_case-marcus_04": {
      "text": "[Flatt] Når jeg nesten ikke snakker, vil du fortsatt ha meg her i det hele tatt?",
      "suggestion": "Jeg vil ha deg her. Jeg kjenner meg glad når du møter opp, også på dager med få ord; nærværet ditt teller for meg før du forklarer noe."
    },
    "dp_self-disclosure_case-marcus_05": {
      "text": "[Nølende] Kommer du til å presse meg inn i ting før jeg vet hvordan jeg stopper?",
      "suggestion": "Jeg planlegger ikke å presse deg. Jeg er mer opptatt av at dette skal være tålelig enn av å gå fort. Vi kan sjekke sammen hvilket tempo som holder dette mulig."
    },
    "dp_self-disclosure_case-marcus_06": {
      "text": "[Nølende] Tror du faktisk at jeg kan endre meg etter å ha vært sånn i årevis?",
      "suggestion": "Jeg tror endring er mulig, også etter årevis med å leve på denne måten, og jeg kjenner tålmodighet med hvor sakte den kanskje må gå. La muligheten være beskjeden nok til at den ikke krever mer av deg."
    },
    "dp_self-disclosure_case-marcus_07": {
      "text": "[Lav stemme] Ville du sagt fra hvis stillheten min sløste bort tiden din?",
      "suggestion": "Hvis jeg tenkte at vi bommet på hverandre, ville jeg sagt det med omsorg. Jeg kjenner at denne tiden betyr noe, også når det er få ord, og vi kan la det lande sakte."
    },
    "dp_self-disclosure_case-marcus_08": {
      "text": "[Nølende] Skremmer traumahistorier deg, eller kan du være stødig med min?",
      "suggestion": "Jeg kjenner sorg og omsorg når jeg hører traumefortellinger, og jeg arbeider hardt for å holde meg jordet i dem. Jeg er stødig nok til å høre din i det tempoet du velger."
    },
    "dp_self-disclosure_case-marcus_09": {
      "text": "[Stille og på vakt] Har du faktisk jobbet med noen som meg, eller øver du deg på meg?",
      "suggestion": "Jeg har jobbet med traumer og med mennesker som bruker få ord for å holde seg trygge. Jeg vil si fra hvis jeg mener at vi trenger mer støtte eller en annen ressurs, og jeg vil også høre hvordan det er å lure på om jeg øver meg på deg."
    },
    "dp_self-disclosure_case-marcus_10": {
      "text": "[Lav stemme] Er du komfortabel med stillhet, eller får den deg til å ville fylle den?",
      "suggestion": "Jeg er komfortabel med stillhet. Jeg kjenner ofte nærvær i stillhet, ikke avstand. Du kan la stillheten teste det langsomt, i stedet for å svare med en gang."
    },
    "dp_marker-recognition-chairwork_case-sara_01": {
      "text": "[Lavmælt] Jeg sier til meg selv at hvis jeg bare var sterkere, ville jeg vært over ham nå.",
      "suggestion": "Det høres ut som du går hardt løs på deg selv for at du fortsatt trenger ham. Hvis du vil, kan vi sette den krevende siden i én stol og den sårede siden i den andre. La den krevende siden snakke først i noen direkte linjer, og så bytter du stol og svarer fra den sårede siden mens jeg hjelper oss med tempoet."
    },
    "dp_marker-recognition-chairwork_case-sara_02": {
      "text": "[Sint] Jeg fortsetter å spille av det jeg skulle ønske jeg hadde sagt da han dro: «Du fikk meg til å føle meg som noe som kunne kastes.»",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med ham rundt det å føle seg kastet. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si akkurat den setningen direkte til ham, en eller to linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-sara_03": {
      "text": "[Flau] Når jeg begynner å gråte, svelger jeg det fort og sier til meg selv at jeg ikke skal være patetisk.",
      "suggestion": "Det høres ut som du stopper tårene ved å skamme deg selv. Hvis du vil, kan vi bruke to stoler: Fra denne stolen kan du vise hvordan du svelger tårene og sier at du ikke skal være patetisk; så bytter vi og lar den gråtende siden svare."
    },
    "dp_marker-recognition-chairwork_case-sara_04": {
      "text": "[Flau] Jeg ser på gamle bilder og sier til meg selv at jeg var for klengete, for dramatisk, for mye.",
      "suggestion": "Det høres ut som en hard selvkritisk stemme angriper deg for at du ønsket nærhet. Vi kan sette kritikeren i én stol og delen som ønsket kjærlighet i den andre. Fra denne stolen sier du angrepet direkte; så bytter vi og hører hva det gjør med deg."
    },
    "dp_marker-recognition-chairwork_case-sara_05": {
      "text": "[Sint] Jeg har fortsatt lyst til å si til venninnen min at hun må slutte å si at jeg bare bør gå videre.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med venninnen din rundt det å bli hastet forbi sorgen. Hvis du vil, kan vi sette henne i den tomme stolen og la deg si direkte hvordan det er når hun ber deg gå videre."
    },
    "dp_marker-recognition-chairwork_case-sara_06": {
      "text": "[Lavmælt] Når jeg begynner å savne ham, tar jeg telefonen og scroller til følelsen blir flat.",
      "suggestion": "Det høres ut som du avbryter savnet før det får komme helt fram. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du flater ut følelsen med telefonen; så bytter vi og lar den savnende siden si noen ord."
    },
    "dp_marker-recognition-chairwork_case-sara_07": {
      "text": "[På gråten] Jeg tenker stadig at jeg ødela forholdet ved å be om for mye.",
      "suggestion": "Det høres ut som du gir deg selv skylden for å ha behov. Kan vi arbeide med den kritikeren i stolen? Sett deg her og si til henne at hun ba om for mye; så bytter vi og hører fra siden som trengte ham."
    },
    "dp_marker-recognition-chairwork_case-sara_08": {
      "text": "[Nølende] Jeg ser for meg at jeg sier til ham: «Du lot meg være alene med alt dette», og så stopper jeg meg selv.",
      "suggestion": "Det høres ut som både et uavsluttet oppgjør med ham og en avbrytelse av din egen stemme. Vi kan begynne med den tomme stolen: Sett ham her og si den første linjen, «Du lot meg være alene med alt dette», bare så langt det kjennes mulig."
    },
    "dp_marker-recognition-chairwork_case-sara_09": {
      "text": "[Engstelig] Før en date sier jeg til meg selv at han kommer til å se det trengende rotet og gå han også.",
      "suggestion": "Det høres ut som bekymring og selvangrep skremmer deg før noe har skjedd. Vi kan bruke to stoler for å høre hvordan stemmen virker: Fra denne stolen sier du alle tingene du tror kommer til å gå galt; så bytter vi og hører fra den redde siden."
    },
    "dp_marker-recognition-chairwork_case-sara_10": {
      "text": "[På gråten] Jeg har fortsatt lyst til å si til ham: «Du fikk gå, men jeg måtte bli igjen i leiligheten med alle minnene.»",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med ham rundt å bli igjen med minnene. Hvis du vil, kan vi sette ham i den tomme stolen og la deg si den linjen direkte, og så stoppe opp før vi går videre."
    },
    "dp_marker-recognition-chairwork_case-michael_01": {
      "text": "[Anspent og skamfull] Hver gang jeg kjenner meg såret, kommer ordene til faren min tilbake: Slutt å være svak og få kontroll.",
      "suggestion": "Det høres ut som du bærer på et hardt budskap fra faren din som nå vender seg mot deg. Vi kan sette det budskapet i én stol og den siden av deg som blir skammet av det i den andre, og la dem få én runde hver."
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt fortelle faren min hva det kostet meg at han kalte hver følelse for svakhet.",
      "suggestion": "Det peker mot et uavsluttet oppgjør med faren din. Hvis du vil, kan du sette ham i denne stolen og si hva det kostet å få sårhet behandlet som svakhet. Jeg holder det strukturert og kort."
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      "text": "[Anspent] I det sekundet jeg begynner å mykne, hører jeg: «Ta deg sammen», og så begynner jeg å ramse opp alt jeg burde gjort bedre.",
      "suggestion": "Det høres ut som den harde kommandoen avbryter det mykere som kommer. Vi kan bruke to stoler for å gjøre det tydeligere: Fra denne stolen sier du «ta deg sammen» og ramser opp hva han burde gjort bedre; så bytter vi og hører fra den mykere siden."
    },
    "dp_marker-recognition-chairwork_case-michael_04": {
      "text": "[Skamfull] Etter at jeg smeller, kaller jeg meg idiot for å ha mistet kontrollen.",
      "suggestion": "Det høres ut som et selvkritisk angrep etter sinnet. Vi kan sette den angripende stemmen i én stol og delen som mistet kontrollen i den andre. Fra denne stolen sier du kritikken direkte; så bytter vi og hører hva som skjer inni deg."
    },
    "dp_marker-recognition-chairwork_case-michael_05": {
      "text": "[Anspent og sint] Jeg vil si til faren min: «Ingenting jeg gjorde var noen gang nok for deg.»",
      "suggestion": "Det peker mot et uavsluttet oppgjør med faren din rundt aldri å strekke til. Hvis du vil, kan vi hente ham inn i den tomme stolen og la deg si den setningen direkte til ham, én linje om gangen."
    },
    "dp_marker-recognition-chairwork_case-michael_06": {
      "text": "[Anspent] Når kona mi prøver å ta på meg etter en krangel, lager jeg en spøk eller begynner å snakke om det som må fikses.",
      "suggestion": "Det høres ut som du avbryter et mykere øyeblikk ved å gå til spøk eller problemløsning. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du styrer ham bort fra mykheten; så bytter vi og lar den mykere siden svare."
    },
    "dp_marker-recognition-chairwork_case-michael_07": {
      "text": "[Bekymret] Før en presentasjon sjekker jeg lysbildene hele natten, fordi én feil ville bevise at jeg ikke burde ha ansvar.",
      "suggestion": "Det høres ut som en bekymringsdel som presser deg med katastrofer. Vi kan sette bekymringen i denne stolen og la den fortelle nøyaktig hva den tror skjer hvis én feil oppstår; så bytter vi og hører fra siden som blir presset."
    },
    "dp_marker-recognition-chairwork_case-michael_08": {
      "text": "[Skamfull] Morgenen etter at jeg har drukket for mye, sier jeg til meg selv at jeg er patetisk og svak.",
      "suggestion": "Det er en hard selvkritisk splittelse rundt drikking og svakhet. Kan vi sette kritikeren i én stol og den skamfulle delen i den andre, så du kan høre angrepet og så svare det?"
    },
    "dp_marker-recognition-chairwork_case-michael_09": {
      "text": "[Lav stemme] Jeg skulle ønske jeg kunne si til sønnen min at jeg er redd han lærer frykt av meg.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med sønnen din og det som ikke er sagt mellom dere. Vi kan plassere ham i den tomme stolen og la deg si det forsiktig, mens vi holder tempoet sakte nok til å være med det."
    },
    "dp_marker-recognition-chairwork_case-michael_10": {
      "text": "[Anspent] Jeg begynner å si unnskyld, og så sier en stemme: «Ikke gi deg.»",
      "suggestion": "Det høres ut som en selvavbrytende stemme stopper reparasjon. Vi kan bruke to stoler: sitt her som stemmen som sier «ikke gi deg», og argumenter for den; så bytter vi til siden som vil be om unnskyldning."
    },
    "dp_marker-recognition-chairwork_case-jason_01": {
      "text": "[Stille] Jeg sier til meg selv at jeg må holde hodet nede, for hvis folk virkelig ser meg, kommer de til å le.",
      "suggestion": "Jeg hører at du bruker en hard advarsel for å gjemme deg før noen kan le. Vi kan gi den advarende siden én stol og den stillere, utsatte siden av deg den andre, og la hver side snakke i korte runder."
    },
    "dp_marker-recognition-chairwork_case-jason_02": {
      "text": "[Nølende] Jeg lurer fortsatt på hva jeg ville sagt til den vennen fra skolen som bare sluttet å snakke med meg.",
      "suggestion": "Det høres ut som uavsluttet oppgjør med den vennen. Vi kan sette ham i den tomme stolen og la deg spørre om det som aldri fikk bli spurt den gangen, bare noen linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-jason_03": {
      "text": "[Engstelig] Når jeg vil bli med i en samtale, strammer halsen seg og jeg får meg selv til å tie.",
      "suggestion": "Det høres ut som du stopper deg selv fra å søke kontakt. Hvis du vil, kan du flytte deg til denne stolen og vise hvordan du får ham til å tie; så bytter vi tilbake og hører hva siden som vil inn i samtalen trenger."
    },
    "dp_marker-recognition-chairwork_case-jason_04": {
      "text": "[Skamfull] Etter at jeg sier hei på en klein måte, kaller jeg meg creepy i timevis.",
      "suggestion": "Det høres ut som en selvkritisk stemme angriper deg for et lite sosialt øyeblikk. Vi kan sette kritikeren i én stol og den flaue siden i den andre; først lar vi kritikeren si det den sier, og så bytter vi."
    },
    "dp_marker-recognition-chairwork_case-jason_05": {
      "text": "[Stille] Jeg har fortsatt lyst til å spørre de barna fra skolen hvorfor de lo hver gang jeg snakket.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med de klassekameratene. Vi kan sette dem i den tomme stolen og la deg stille spørsmålet som aldri fikk svar, langsomt og bare noen få ord om gangen."
    },
    "dp_marker-recognition-chairwork_case-jason_06": {
      "text": "[Nølende] Når noen gir meg et kompliment, trekker jeg på skuldrene og peker på det kleine før de rekker det.",
      "suggestion": "Det høres ut som du avbryter komplimentet før det kan nå inn. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du avleder og peker på det kleine; så bytter vi og hører fra siden som kanskje vil ta det imot."
    },
    "dp_marker-recognition-chairwork_case-jason_07": {
      "text": "[Bekymret] Før et sosialt arrangement ramser hodet mitt opp alle måtene jeg kan ydmyke meg på.",
      "suggestion": "Det høres ut som en katastrofebekymring. Vi kan sette bekymringsstemmen i denne stolen og la den liste opp de fryktede scenene direkte; så bytter vi og hører fra delen som må høre på den."
    },
    "dp_marker-recognition-chairwork_case-jason_08": {
      "text": "[Skamfull] Når jeg ikke blir invitert, sier jeg til meg selv at ingen ville ha meg der uansett.",
      "suggestion": "Det høres ut som en kritiker gjør det å bli utelatt til en dom over deg. Vi kan sette den stemmen i én stol og den sårede siden i den andre, så den sårede siden får mulighet til å svare."
    },
    "dp_marker-recognition-chairwork_case-jason_09": {
      "text": "[Nølende] Jeg vil si til den gamle vennen min: «Du forsvant, og jeg fikk aldri vite hvorfor.»",
      "suggestion": "Det er et uavsluttet oppgjør med den gamle vennen din. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si den setningen direkte, og så stoppe opp og legge merke til hva som kommer."
    },
    "dp_marker-recognition-chairwork_case-jason_10": {
      "text": "[Engstelig] Når jeg vil stille et spørsmål i timen, stirrer jeg på notatene til sjansen går forbi.",
      "suggestion": "Det høres ut som du stopper din egen stemme før den får komme inn i rommet. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du får ham til å se ned og tie; så bytter vi til siden som ville spørre."
    },
    "dp_marker-recognition-chairwork_case-laura_01": {
      "text": "[Flatt og på vakt] Da mannen min dro, tenkte jeg: selvfølgelig gjorde han det. Hvem blir hos en som er så ødelagt?",
      "suggestion": "Det høres ut som du gjør skilsmissen til en hard dom over deg selv. Hvis det kjennes trygt nok, kan vi bruke to stoler for å få angrepet tydeligere fram: Fra denne stolen sier du til henne at hun er for ødelagt til at noen blir; så bytter vi og hører fra siden som har båret den dommen."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      "text": "[Fjern] Jeg sa aldri til moren min: «Du så hva som skjedde og fortsatte å vaske opp.» Jeg tenker fortsatt mer på det enn jeg vil.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med moren din rundt det å bli stående uten beskyttelse. Hvis du vil, kan vi hente henne inn i den tomme stolen og la deg si den setningen direkte til henne, langsomt og bare så langt det kjennes håndterbart."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      "text": "[Anspent og på gråten] Da eksmannen min flyttet ut, gråt jeg ikke. Jeg vasket kjøkkenet og kjente ingenting, som om jeg burde vært såret, men bare var helt blank.",
      "suggestion": "Det høres ut som nummenheten kom inn og stengte for såretheten. Hvis det kjennes trygt nok, kan vi bruke to stoler: Fra denne stolen viser du hvordan du blir blank og fortsetter å vaske; så bytter vi og gir det sårede noen få ord."
    },
    "dp_marker-recognition-chairwork_case-laura_04": {
      "text": "[Fjern] Jeg vil spørre eksen min om han visste at jeg kom til å skylde på meg selv da han dro.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med eksen din rundt å bli sittende igjen med skyld. Hvis det kjennes håndterbart, kan vi sette ham i den tomme stolen og la deg stille spørsmålet direkte."
    },
    "dp_marker-recognition-chairwork_case-laura_05": {
      "text": "[Flatt og på vakt] Jeg sier fortsatt til meg selv at jeg er skadet gods.",
      "suggestion": "Det er en hard selvkritisk splittelse. Vi kan sette stemmen som sier «skadet gods» i én stol og delen av deg som hører det i den andre, og la hver side snakke i korte, støttede runder."
    },
    "dp_marker-recognition-chairwork_case-laura_06": {
      "text": "[Langsomt og flatt] Når sinnet begynner, vasker jeg eller skjenker et glass til det forsvinner.",
      "suggestion": "Det høres ut som du avbryter sinnet ved å bli blank eller travel. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du får sinnet til å forsvinne; så bytter vi og gir sinnet noen få ord uten å presse det."
    },
    "dp_marker-recognition-chairwork_case-laura_07": {
      "text": "[Skamfull] Jeg sier til meg selv at jeg burde ha visst bedre enn å stole på ham.",
      "suggestion": "Det høres ut som en selvbebreidende kritiker angriper delen som stolte. Kan vi sette kritikeren i denne stolen og la den si «du burde ha visst bedre», og så bytte til den tillitsfulle delen som ble såret?"
    },
    "dp_marker-recognition-chairwork_case-laura_08": {
      "text": "[Lav stemme] Jeg sa aldri til mannen som skadet meg: «Du får ikke bestemme hva jeg er verdt.»",
      "suggestion": "Det er et uavsluttet oppgjør med personen som skadet deg. Hvis det kjennes trygt nok og vi går veldig langsomt, kan vi plassere ham i den tomme stolen og la deg si bare den setningen, med pauser og kontroll."
    },
    "dp_marker-recognition-chairwork_case-laura_09": {
      "text": "[Anspent og skamfull] Når jeg begynner å si at jeg er sint, hører jeg: «Ikke lag bråk.»",
      "suggestion": "Det høres ut som en selvavbrytende stemme stopper sinnet. Vi kan bruke to stoler: Fra denne stolen sier du «ikke lag bråk» og argumenterer for det; så bytter vi og hører fra den sinte siden."
    },
    "dp_marker-recognition-chairwork_case-laura_10": {
      "text": "[Fjern] Jeg vil fortsatt spørre moren min hvorfor hun aldri kom inn på rommet mitt etterpå.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med moren din rundt ikke å bli beskyttet eller nådd. Vi kan hente henne inn i den tomme stolen og la deg stille spørsmålet direkte, bare så langt det kjennes tålelig."
    },
    "dp_marker-recognition-chairwork_case-carlos_01": {
      "text": "[Sint, med knyttede never] Etter at jeg slo hull i veggen, tenkte jeg hele tiden: Hva slags mann skremmer sin egen familie?",
      "suggestion": "Det høres ut som du gir deg selv hard skyld for å ha skremt dem. Kan vi arbeide litt med den skylden? Sett deg i denne stolen og si det direkte til ham: «Hva slags mann skremmer sin egen familie?» Så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      "text": "[Anspent og sint] Jeg vil fortsatt si til faren min at beltet ikke gjorde meg til mann. Det gjorde meg bare redd for ham.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med faren din og hva disiplinen hans kostet deg. Hvis du vil, kan vi sette ham i den tomme stolen og la deg si det direkte til ham, noen sterke linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      "text": "[Anspent og skamfull] Jeg begynner å si unnskyld til sønnen min, og så lukker munnen seg. Jeg tenker: ikke vis svakhet, og ansiktet mitt blir hardt.",
      "suggestion": "Det høres ut som noe stopper unnskyldningen før den mykere følelsen kan nå ham. Vi kan bruke to stoler: Fra denne stolen sier du til ham at han ikke skal vise svakhet, og argumenterer for å holde seg hard; så bytter vi og hører fra faren som vil reparere."
    },
    "dp_marker-recognition-chairwork_case-carlos_04": {
      "text": "[Skamfull] Etter at jeg roper, kaller jeg meg et monster og blir så sint på meg selv for å tenke det.",
      "suggestion": "Det høres ut som et hardt selvangrep etter sinnet. Vi kan sette stemmen som kaller deg et monster i én stol og delen som blir truffet av det i den andre; så lar vi den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-carlos_05": {
      "text": "[Anspent og sint] Jeg vil si til faren min: «Jeg var et barn, ikke en av soldatene dine.»",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt hvordan han behandlet deg. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si den linjen direkte, mens jeg hjelper deg å holde det avgrenset."
    },
    "dp_marker-recognition-chairwork_case-carlos_06": {
      "text": "[Anspent] Når stemmen min skjelver, kremter jeg, retter meg opp og gjør ansiktet hardt.",
      "suggestion": "Det høres ut som du avbryter sårbarheten ved å gjøre kroppen og ansiktet hardt. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du stopper skjelvingen; så bytter vi til siden som skalv."
    },
    "dp_marker-recognition-chairwork_case-carlos_07": {
      "text": "[Bekymret] Hvis jeg lar sønnen min snakke meg imot én gang, ser jeg for meg at jeg mister all respekt i huset.",
      "suggestion": "Det høres ut som en katastrofebekymring rundt respekt. Vi kan sette bekymringen i én stol og la den forutsi nøyaktig hva som skjer hvis han sier imot; så bytter vi og hører fra faren under det presset."
    },
    "dp_marker-recognition-chairwork_case-carlos_08": {
      "text": "[Defensiv] Jeg sier til meg selv at bare tapere trenger hjelp med sinne.",
      "suggestion": "Det høres ut som en kritiker bruker skam for å blokkere hjelp. Kan vi sette den stemmen i denne stolen og la den si «bare tapere trenger hjelp», og så bytte til siden som vil noe annet for familien din?"
    },
    "dp_marker-recognition-chairwork_case-carlos_09": {
      "text": "[Lav stemme] Jeg skulle ønske jeg kunne si til kona mi at jeg blir redd når hun ser på meg som om hun er redd.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med kona di rundt frykt og avstand mellom dere. Vi kan plassere henne i den tomme stolen og la deg si den setningen langsomt, uten å presse mer enn én eller to linjer."
    },
    "dp_marker-recognition-chairwork_case-carlos_10": {
      "text": "[Anspent og sint] Når tårene kommer, gjør jeg dem om til varme før noen kan se dem.",
      "suggestion": "Det høres ut som du avbryter tårene ved å gjøre dem om til sinne. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du gjør tårer til varme; så bytter vi og hører fra den gråtende siden."
    },
    "dp_marker-recognition-chairwork_case-nina_01": {
      "text": "[Sliten] Skilsmissen er sikkert min feil. Jeg burde vært søtere, roligere, enklere, mindre utslitt.",
      "suggestion": "Det høres ut som du legger veldig hard skyld på deg selv for at ekteskapet tok slutt. Vi kan bruke to stoler for å høre den skylden tydelig: Fra denne stolen sier du til henne at hun burde vært søtere og enklere; så bytter vi og hører hva det gjør med henne."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      "text": "[Unnskyldende] Jeg tenker fortsatt på det jeg aldri sa til eksen min: «Du lot meg bære alt, og så skyldte du på meg for at jeg var sliten.»",
      "suggestion": "Jeg hører et uavsluttet oppgjør med eksen din rundt det å bære for mye og så få skylden for utmattelsen. Vi kan bruke den tomme stolen. Først kan du si akkurat den setningen til ham og hva det kostet å svelge den."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      "text": "[Skyldpreget] Når jeg blir sint for at folk trenger meg, tenker jeg med en gang at jeg er et dårlig menneske. Så smiler jeg og spør hva mer de trenger.",
      "suggestion": "Det høres ut som budskapet om å være et dårlig menneske stopper sinnet og sender deg tilbake til omsorgen. Vi kan bruke to stoler: Fra denne stolen sier du til henne at hun er dårlig fordi hun blir sint; så bytter vi og lar sinnet si noen enkle ord."
    },
    "dp_marker-recognition-chairwork_case-nina_04": {
      "text": "[Sliten] Jeg sier til meg selv at en god mor ikke ville ønsket seg en time der ingen trenger henne.",
      "suggestion": "Det høres ut som en selvkritisk stemme angriper behovet ditt for hvile. Vi kan sette god-mor-regelen i én stol og den utslitte siden i den andre; først lar vi regelen snakke, og så bytter vi og hører den trøtte siden."
    },
    "dp_marker-recognition-chairwork_case-nina_05": {
      "text": "[Unnskyldende] Jeg vil si til moren min: «Jeg var barnet; du skulle ha lagt merke til meg.»",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med moren din rundt å ikke bli sett. Hvis du vil, kan vi hente henne inn i den tomme stolen og la deg si den linjen direkte, bare noen få ord om gangen."
    },
    "dp_marker-recognition-chairwork_case-nina_06": {
      "text": "[Splittet] Når sinnet stiger, smiler jeg og spør hva alle vil ha til middag.",
      "suggestion": "Det høres ut som du avbryter sinnet ved å gå tilbake til omsorg. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du smiler og dekker over sinnet; så bytter vi og lar sinnet snakke rett fram."
    },
    "dp_marker-recognition-chairwork_case-nina_07": {
      "text": "[Skyldpreget] Hvis middagen ikke er klar, kaller jeg meg ubrukelig.",
      "suggestion": "Det er en selvkritisk splittelse rundt nytte og omsorg. Vi kan sette stemmen som sier «ubrukelig» i én stol og den slitne delen i den andre, og høre hva hver side sier."
    },
    "dp_marker-recognition-chairwork_case-nina_08": {
      "text": "[På gråten] Jeg vil fortsatt si til eksen min: «Du dro, og likevel er det jeg som fortsatt sier unnskyld.»",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med eksen din rundt skyld og unnskyldning. Vi kan plassere ham i den tomme stolen og la deg si den setningen direkte, og så stoppe opp og legge merke til hva den vekker."
    },
    "dp_marker-recognition-chairwork_case-nina_09": {
      "text": "[Unnskyldende] Jeg prøver å si nei, og så forklarer jeg til nei-et blir et ja.",
      "suggestion": "Det høres ut som du avbryter grensen din før den får holde. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du forklarer bort nei-et; så bytter vi til siden som ville si nei."
    },
    "dp_marker-recognition-chairwork_case-nina_10": {
      "text": "[Bekymret] Når jeg hviler, ramser hodet opp alle som kan falle sammen uten meg.",
      "suggestion": "Det høres ut som en bekymringsdel som presser deg tilbake til å bære alle. Vi kan sette bekymringen i denne stolen og la den liste opp de fryktede konsekvensene; så bytter vi og hører fra den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-aisha_01": {
      "text": "[Desperat] Hvis noen ikke svarer, går hodet mitt rett til at de er med noen bedre, legger det ut, og at alle ser at jeg er byttet ut. Da må jeg kutte dem ut først.",
      "suggestion": "Det høres ut som bekymringen går rett til de verste scenene og presser deg til å handle først. Hvis du vil, kan vi bruke to stoler for å se hvordan den bekymringen virker. Sett deg her som bekymringen og si til henne alt det fryktelige du tror kommer til å skje; så bytter vi til siden som blir oversvømt."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      "text": "[Rasende] Jeg ser fortsatt for meg eksen min i seng med en annen. Jeg hater ham, og så hater jeg meg selv for at jeg fortsatt vil ha ham.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med eksen din, der både raseriet og lengselen fortsatt er levende. Hvis du vil, kan vi sette ham i den tomme stolen og la deg si hva du fortsatt ser for deg, og hva det gjorde med deg. Begynn med: «Jeg ser deg fortsatt med henne ...»"
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      "text": "[Redd og skamfull] Etter alt som skjedde med meg, kaller jeg meg skitten og umulig å elske.",
      "suggestion": "Det er et alvorlig angrep på deg selv, knyttet til det som ble gjort mot deg. Hvis det kjennes trygt nok, kan vi sette den angripende stemmen i én stol og siden som bærer såret i den andre. Begynn med å si angrepet akkurat slik det kommer, og så bytter vi til siden som har båret det."
    },
    "dp_marker-recognition-chairwork_case-aisha_04": {
      "text": "[Skamfull] Etter at jeg har tekstet noen altfor mange ganger, kaller jeg meg gal og ekkel.",
      "suggestion": "Det høres ut som et brutalt selvangrep etter kontaktpanikk. Vi kan sette den angripende stemmen i én stol og den redde siden i den andre, og etter hvert la den redde siden svare."
    },
    "dp_marker-recognition-chairwork_case-aisha_05": {
      "text": "[Rasende] Jeg vil fortsatt si til moren min: «Du lot meg bli igjen hos mennesker som skadet meg.»",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med moren din rundt å bli stående uten beskyttelse. Hvis det kjennes trygt nok, kan vi hente henne inn i den tomme stolen og la deg si den setningen direkte, med pauser og valgfrihet."
    },
    "dp_marker-recognition-chairwork_case-aisha_06": {
      "text": "[Panisk] Når jeg kjenner at jeg trenger noen, begynner jeg å anklage dem før de kan dra.",
      "suggestion": "Det høres ut som du avbryter behovet ved å angripe først. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du anklager og skyver bort; så bytter vi og hører fra siden som trengte at noen ble."
    },
    "dp_marker-recognition-chairwork_case-aisha_07": {
      "text": "[Bekymret] Hvis du ikke svarer, viser hodet mitt ti scener der jeg blir byttet ut og alle vet det.",
      "suggestion": "Det høres ut som en katastrofebekymring. Vi kan sette bekymringen i én stol og la den si scenene høyt; så bytter vi til siden som blir oversvømt av dem."
    },
    "dp_marker-recognition-chairwork_case-aisha_08": {
      "text": "[Lav stemme] Jeg fikk aldri sagt til personen som skadet meg: «Du får ikke gjøre meg skitten.»",
      "suggestion": "Det er et uavsluttet oppgjør med personen som skadet deg. Hvis vi gjør dette, går vi veldig langsomt: Sett ham i den tomme stolen og si bare den linjen først, mens vi holder føttene dine i rommet og valget ditt intakt."
    },
    "dp_marker-recognition-chairwork_case-aisha_09": {
      "text": "[Skamfull] Når jeg vil ha nærhet, kaller jeg meg patetisk før noen andre kan gjøre det.",
      "suggestion": "Det er en selvkritisk splittelse rundt å trenge nærhet. Vi kan sette den angripende stemmen i én stol og den lengtende siden i den andre, så den lengtende siden ikke blir alene med angrepet."
    },
    "dp_marker-recognition-chairwork_case-aisha_10": {
      "text": "[På gråten] Når sorgen begynner å synes, ler jeg og sier: «Glem det, dette er dumt.»",
      "suggestion": "Det høres ut som du avbryter sorgen ved å gjøre narr av den. Vi kan bruke to stoler: Fra denne stolen sier du «glem det, dette er dumt» og viser hvordan du stenger det ned; så bytter vi og lar den sørgende siden snakke litt."
    },
    "dp_marker-recognition-chairwork_case-david_01": {
      "text": "[Selvbebreidende] Hvis jeg ikke er eksepsjonell, sier jeg til meg selv at det ikke finnes noen grunn til at noen skulle bli.",
      "suggestion": "Det høres ut som en krevende driver som gjør verdien din avhengig av å være eksepsjonell. Vi kan sette det kravet i én stol og siden som betaler prisen i den andre, og la dem snakke direkte."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      "text": "[Avvisende] Kona mi sier at hun kanskje er ferdig, og jeg sier til meg selv at bare en idiot ødelegger sin egen familie og likevel forventer sympati.",
      "suggestion": "Det høres ut som du slår hardt ned på deg selv for det som skjer i familien din. Kan vi arbeide litt med hvordan den skylden angriper deg? Sett deg i denne stolen og la den harde siden si til ham at han er en idiot som ødela familien; så bytter vi og hører hva det gjør med ham."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      "text": "[Såret, men skarp] Jeg hater hvordan faren min gjorde alt til en prestasjon, men med en gang jeg sier det, begynner jeg å forsvare ham: han presset meg jo fordi han trodde på meg.",
      "suggestion": "Det høres ut som sinnet mot faren din blir stoppet av en side som forklarer ham og beskytter ham. Hvis du er villig, kan vi bruke to stoler: Fra denne stolen kan du forsvare ham og si til David hvorfor han ikke skal være sint; så bytter vi og gir sinnet noen ord."
    },
    "dp_marker-recognition-chairwork_case-david_04": {
      "text": "[Avvisende] Jeg sier til meg selv at middelmådige menn mister familien sin og fortjener det.",
      "suggestion": "Det høres ut som en hard selvkritisk splittelse som binder verdien din til suksess. Vi kan sette den stemmen i én stol og delen av deg den angriper i den andre, og så la den angrepne siden svare."
    },
    "dp_marker-recognition-chairwork_case-david_05": {
      "text": "[Kontrollert] Jeg vil si til faren min: «Jeg var sønnen din, ikke et prosjekt.»",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt å bli behandlet som et prestasjonsprosjekt. Hvis du vil, kan vi plassere ham i den tomme stolen og la deg si den linjen direkte."
    },
    "dp_marker-recognition-chairwork_case-david_06": {
      "text": "[Kontrollert] Når skammen stiger, begynner jeg å ramse opp prestasjoner til jeg ikke kjenner den.",
      "suggestion": "Det høres ut som prestasjonene avbryter skammen før den kan kjennes. Vi kan bruke to stoler: Fra denne stolen ramser du opp prestasjonene og blokkerer skammen; så bytter vi og hører fra den skamfulle siden."
    },
    "dp_marker-recognition-chairwork_case-david_07": {
      "text": "[Bekymret] Hvis jeg innrømmer én feil, ser jeg for meg at alle bestemmer seg for at jeg er en bløff.",
      "suggestion": "Det høres ut som en katastrofebekymring. Vi kan sette bekymringen i én stol og la den si nøyaktig hva den tror skjer hvis du innrømmer én feil; så bytter vi til siden som står under det presset."
    },
    "dp_marker-recognition-chairwork_case-david_08": {
      "text": "[Lav stemme] Jeg vil si til kona mi at jeg er livredd for at hun endelig ser den ekte meg.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med kona di rundt å bli sett og kanskje forlatt. Vi kan hente henne inn i den tomme stolen og la deg si den setningen forsiktig, uten at du må forsvare den."
    },
    "dp_marker-recognition-chairwork_case-david_09": {
      "text": "[Skamfull] Jeg sier til meg selv at affæren beviser at jeg er søppel.",
      "suggestion": "Det er et hardt selvangrep rundt affæren. Vi kan sette stemmen som sier «søppel» i én stol og den skamfulle siden i den andre, så du kan høre og svare angrepet i stedet for bare å tåle det."
    },
    "dp_marker-recognition-chairwork_case-david_10": {
      "text": "[Avvisende] Når tristhet dukker opp, analyserer jeg alles tonefall til følelsen er borte.",
      "suggestion": "Det høres ut som analyse avbryter tristheten. Vi kan bruke to stoler: Fra denne stolen analyserer du og flytter ham bort fra tristheten; så bytter vi og lar tristheten få noen direkte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_01": {
      "text": "[Rasende] Faren min hadde sine egne skader, det vet jeg. Men jeg hater ham fortsatt for å ha tatt volden med inn i huset vårt og latt oss leve med den.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med faren din, med både forståelse for det han bar på og hat for volden han tok inn i huset. Hvis du vil, kan vi hente ham inn i den tomme stolen og la deg si begge deler direkte til ham, sakte og med pauser."
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      "text": "[Lav stemme] De låste meg inne i skapet, og jeg tenker fortsatt at jeg må ha vært umulig, ellers hadde de vel ikke gjort det.",
      "suggestion": "Det er en brutal selvbebreidelse etter noe som ble gjort mot deg. Hvis det kjennes mulig, kan vi bruke to stoler for å se hvordan den skylden virker. Fra denne stolen kan du si til ham at han må ha vært umulig; så bytter vi og hører fra barnet som ble låst inne."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      "text": "[Rasende] Selv her inne låser kjeven seg når jeg forestiller meg å si til den fosterfaren at jeg hater ham. Jeg hører: «Ikke si det. Ikke gjør det verre.»",
      "suggestion": "Det høres ut som noe låser sinnet før det får en stemme. Hvis du er villig, kan vi bruke to stoler: sitt her som siden som sier «ikke si det, ikke gjør det verre», og si det direkte til ham; så bytter vi og lar sinnet få noen kontrollerte ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_04": {
      "text": "[Flatt] Jeg sier til meg selv at jeg burde vært over det nå; andre har hatt det verre og fungerer likevel.",
      "suggestion": "Det høres ut som en selvkritisk stemme avviser virkningen av det som skjedde. Vi kan sette den stemmen i én stol og delen som fortsatt bærer det i den andre, og la dem snakke i korte, avgrensede runder."
    },
    "dp_marker-recognition-chairwork_case-marcus_05": {
      "text": "[Lav stemme] Jeg vil spørre fostermoren min hvorfor ingen kom da jeg banket.",
      "suggestion": "Det høres ut som et uavsluttet oppgjør med fostermoren din rundt å bli forlatt alene. Hvis du vil, kan vi sette henne i den tomme stolen og la deg stille spørsmålet direkte, langsomt."
    },
    "dp_marker-recognition-chairwork_case-marcus_06": {
      "text": "[Stille og på vakt] Når stemmen min skjelver, slutter jeg å snakke og stirrer i gulvet.",
      "suggestion": "Det høres ut som du avbryter den skjelvende stemmen ved å stenge ned talen. Vi kan bruke to stoler: Fra denne stolen viser du hvordan du får ham til å slutte å snakke; så bytter vi og lar den skjelvende stemmen få noen ord."
    },
    "dp_marker-recognition-chairwork_case-marcus_07": {
      "text": "[Bekymret] Hvis jeg sover tungt, er jeg redd jeg våkner tilbake der og ikke vet hvor jeg er.",
      "suggestion": "Det høres ut som en bekymringsdel holder deg på vakt. Vi kan sette bekymringen i denne stolen og la den advare deg mot søvn; så bytter vi og hører fra den utslitte siden."
    },
    "dp_marker-recognition-chairwork_case-marcus_08": {
      "text": "[Rasende] Jeg vil fortsatt si til faren min: «Du tok krigen med hjem og fikk oss til å leve inni den.»",
      "suggestion": "Det er et uavsluttet oppgjør med faren din rundt vold og frykt i hjemmet. Vi kan hente ham inn i den tomme stolen og la deg si den linjen direkte, med nok pauser til at du holder deg forankret."
    },
    "dp_marker-recognition-chairwork_case-marcus_09": {
      "text": "[Skamfull] Å trenge hjelp får meg til å si til meg selv at jeg er ubrukelig.",
      "suggestion": "Det høres ut som en selvkritisk splittelse rundt å trenge hjelp. Vi kan sette stemmen som sier «ubrukelig» i én stol og delen som trenger hjelp i den andre, og så la den trengende siden svare."
    },
    "dp_marker-recognition-chairwork_case-marcus_10": {
      "text": "[Anspent og på vakt] Når søsteren min spør om fortiden, hører jeg: «Steng det ned», og så bytter jeg tema.",
      "suggestion": "Det høres ut som en selvavbrytende stemme stopper kontakt med fortiden. Vi kan bruke to stoler: Fra denne stolen sier du «steng det ned» og viser hvordan du bytter tema; så bytter vi og hører fra siden som ble spurt."
    },
    "dp_alliance-repair_case-sara_01": {
      "text": "[Flau] Av og til tror jeg du blir lei når jeg forteller om bruddet igjen, og da føler jeg meg dum som fortsatt tar det opp her.",
      "suggestion": "Takk for at du sier det. Hvis jeg har virket lei, ville det gjort dette rommet utrygt for sorgen du fortsatt bærer. Jeg beklager at oppmerksomheten min ikke har kjentes tydelig nok. Jeg er ikke lei. Hva hjelper deg å kjenne at jeg fortsatt er med deg når den samme smerten kommer tilbake?"
    },
    "dp_alliance-repair_case-sara_02": {
      "text": "[Flau] Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er.",
      "suggestion": "Du peker på en reell bom: Jeg gikk til jobb da smerten trengte oppmerksomheten min. Det beklager jeg. Før vi snakker om jobb igjen, hvilken del av tapet trenger du at jeg forstår først?"
    },
    "dp_alliance-repair_case-sara_03": {
      "text": "[Engstelig] Da jeg beklaget at jeg gråt, gjorde stillheten din meg redd for at jeg var for trengende for terapi.",
      "suggestion": "Takk for at du sier det. Stillheten min etter beklagelsen din kan ha hørtes ut som om jeg var enig i at behovet ditt var for mye, og det beklager jeg. Når tårene kommer igjen, hva kan jeg si eller gjøre så du kjenner deg velkommen, ikke bare tålt?"
    },
    "dp_alliance-repair_case-sara_04": {
      "text": "[Flau] Når du stadig kaller det sorg, føles det som om du allerede har bestemt hva dette er.",
      "suggestion": "Takk for at du sier det. Hvis ordet mitt fikk opplevelsen din til å kjennes ferdig definert, gikk jeg for fort fram, og det beklager jeg. Hvilket ord, om noe, kjennes nærmere det du vil at jeg skal bli ved?"
    },
    "dp_alliance-repair_case-sara_05": {
      "text": "[På gråten] Forrige time sluttet mens jeg gråt, og jeg gikk hjem med følelsen av å bli sluppet.",
      "suggestion": "Jeg hører at avslutningen kjentes som å bli sluppet mens du var blottlagt. Jeg beklager at jeg ikke hjalp oss å lukke det mer varsomt. Hva ville gjort avslutninger trygge nok når tårene fortsatt er der?"
    },
    "dp_alliance-repair_case-sara_06": {
      "text": "[Såret] Da du spurte om jeg hadde tenkt på å date igjen, føltes det som om du ville at jeg skulle gå videre allerede.",
      "suggestion": "Takk for at du setter ord på det. Spørsmålet mitt hørtes ut som press om å gå videre, og det beklager jeg. Før et spørsmål om dating hører hjemme her, hva trenger du at jeg forstår om delen som ikke er klar?"
    },
    "dp_alliance-repair_case-sara_07": {
      "text": "[Stille] Du blandet navnet hans forrige uke, og jeg følte meg dum som brydde meg så mye.",
      "suggestion": "Jeg beklager at jeg blandet navnet hans. En slik bom kan få forholdet til å kjennes mindre virkelig her, og det gir mening at det betydde noe. Hva ville hjulpet oss å reparere den glippen nå?"
    },
    "dp_alliance-repair_case-sara_08": {
      "text": "[Flau] Da jeg innrømmet at jeg sjekket profilen hans, så ansiktet ditt skuffet ut.",
      "suggestion": "Takk for at du forteller meg det. Hvis ansiktet mitt viste skuffelse, beklager jeg; det ville gjort det vanskeligere å være ærlig her. Hva trengte du fra meg i det øyeblikket i stedet?"
    },
    "dp_alliance-repair_case-sara_09": {
      "text": "[Engstelig] Da du spurte hvem andre som støtter meg, hørtes det ut som om du prøvde å sende meg videre til noen andre.",
      "suggestion": "Jeg hører at spørsmålet landet som om du ble sendt videre. Jeg beklager at jeg ikke gjorde hensikten min tydelig. Jeg vil ha støtte rundt deg, ikke avstand fra deg. Hvordan kan jeg spørre om støtte uten at du føler deg uønsket her?"
    },
    "dp_alliance-repair_case-sara_10": {
      "text": "[Lavmælt] Når du ser ned på notatene mens jeg snakker om ham, føles det som om du forsvinner et øyeblikk.",
      "suggestion": "Takk for at du sier det. Å se ned på notatene kostet oss kontakt på et sårt sted, og det beklager jeg. Ville det hjelpe om jeg spurte før jeg skrev, eller lot være å skrive når du er i de vondeste delene?"
    },
    "dp_alliance-repair_case-michael_01": {
      "text": "[Såret, men skarp] Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak.",
      "suggestion": "Jeg hører at «såret» landet som om jeg kalte deg svak. Jeg beklager at jeg valgte ord som fikk deg til å spenne deg. Hvilket språk lar oss navngi treffet uten å ta styrken fra deg?"
    },
    "dp_alliance-repair_case-michael_02": {
      "text": "[Skeptisk] Har du egentlig nok erfaring med sinne som mitt, eller følger du bare en manual?",
      "suggestion": "Takk for at du spør så direkte. Jeg hører bekymringen: Hvis jeg ikke er godt nok forberedt, kan du kaste bort tid eller bli skadet i arbeid som har reelle konsekvenser for familien og jobben din. Jeg burde gjort treningen og veiledningen min tydeligere, og jeg beklager at jeg lot deg lure. Hva trenger du å vite fra meg, eller se i arbeidet, for å vurdere om jeg er nyttig nok her?"
    },
    "dp_alliance-repair_case-michael_03": {
      "text": "[Såret, men skarp] Da du pauset og så på meg etter at jeg ble sint, følte jeg meg dømt.",
      "suggestion": "Takk for at du navngir det. Pausen og blikket mitt føltes dømmende, og den virkningen betyr mer enn intensjonen min. Jeg beklager at jeg gjorde rommet mer konfronterende. Hva ville fått oppmerksomheten min til å kjennes mindre som gransking nå?"
    },
    "dp_alliance-repair_case-michael_04": {
      "text": "[Defensiv] Da du spurte om frykten til kona mi først, føltes det som om du tok hennes side.",
      "suggestion": "Jeg hører at jeg begynte med frykten hennes, og at du kjente deg stilt på utsiden. Jeg beklager at jeg gjorde din side mindre. Hvilken del av din opplevelse trenger å bli forstått før vi ser på frykten hennes igjen?"
    },
    "dp_alliance-repair_case-michael_05": {
      "text": "[Skeptisk] Da du sa at sinne beskytter sårhet, hørtes det ut som noe fra en lærebok.",
      "suggestion": "Takk for at du sier det. Hvis jeg hørtes lærebokaktig ut, mistet jeg kontakten med deg, og det beklager jeg. Hva ville fått dette til å kjennes mindre som en formel og mer som at jeg faktisk er med det som skjer i deg?"
    },
    "dp_alliance-repair_case-michael_06": {
      "text": "[Anspent] Du utfordret meg ikke da jeg ble høylytt, og nå lurer jeg på om du er redd meg.",
      "suggestion": "Jeg hører bekymringen for at jeg ikke utfordret deg fordi jeg ble redd eller unngikk deg. Jeg beklager at jeg lot det være uklart. Jeg vil verken trekke meg fra deg eller eskalere med deg. Hvordan ville stødig, direkte kontakt fra meg se ut når stemmen din blir høy?"
    },
    "dp_alliance-repair_case-michael_07": {
      "text": "[Skamfull] Da jeg nevnte drikking, forandret ansiktet ditt seg og jeg følte meg dømt.",
      "suggestion": "Takk for at du sier det. Hvis ansiktet mitt viste dom rundt drikking, beklager jeg; det ville gjort ærlighet vanskeligere. Hva trenger du fra meg for at vi kan snakke om alkohol uten at du kjenner skam?"
    },
    "dp_alliance-repair_case-michael_08": {
      "text": "[Irritert] Du spør stadig om faren min, og det føles som om du skylder alt på ham.",
      "suggestion": "Jeg hører at de gjentatte spørsmålene om faren din kjennes for snevre og skyldfordelende. Jeg beklager at jeg gikk tilbake dit uten å sjekke virkningen. Hvor bør vi rette oppmerksomheten nå, så livet ditt ikke reduseres til én forklaring?"
    },
    "dp_alliance-repair_case-michael_09": {
      "text": "[Såret, men skarp] Etter at jeg bannet, ble du stille, og jeg følte at du var ferdig med meg.",
      "suggestion": "Takk for at du forteller meg det. Stillheten min etter at du bannet kjentes som tilbaketrekning, og jeg beklager at jeg lot deg sitte igjen med det. Hva ville hjulpet deg å vite at jeg kan bli i kontakt selv når det er sterke ord i rommet?"
    },
    "dp_alliance-repair_case-michael_10": {
      "text": "[Anspent] Når du sier «ta et pust», føles det som om du prøver å kontrollere meg.",
      "suggestion": "Jeg hører at pustesignalet mitt landet som kontroll. Jeg beklager at jeg ga det på en måte som tok handlekraft fra deg. Hvilken formulering ville fått en pause til å kjennes som ditt valg i stedet for min kommando?"
    },
    "dp_alliance-repair_case-jason_01": {
      "text": "[Stille] Når jeg fryser og sier at jeg ikke vet, blir jeg redd for at jeg gjør terapi feil og kaster bort timen.",
      "suggestion": "Jeg er glad for at du sier det. Stillheten min kan ha fått frysingen til å kjennes som et nederlag, og det beklager jeg. Du gjør ikke terapi feil; frysingen er en del av det vi trenger å forstå. Hva ville hjulpet deg å vite at jeg er med deg når ordene forsvinner?"
    },
    "dp_alliance-repair_case-jason_02": {
      "text": "[Nølende] Da du så på klokka mens jeg lette etter ord, følte jeg meg uviktig.",
      "suggestion": "Klokkeblikket mitt mens du lette etter ord signaliserte at du ikke var viktig, og det vil jeg beklage. Hvordan bør jeg håndtere tidssjekker så de kjennes tydelige heller enn avvisende?"
    },
    "dp_alliance-repair_case-jason_03": {
      "text": "[Redd] En tidligere terapeut presset meg til å snakke om følelser til jeg fikk panikk og endte på legevakten; da du spurte om kroppen med en gang, ble jeg redd for at dette skulle bli likt.",
      "suggestion": "Takk for at du forteller meg det. Den historien gjør spørsmålet mitt om kroppen mye mer ladet, og jeg beklager at jeg gikk dit før det var nok trygghet. Vi kan avtale at du kan stoppe meg, og at jeg spør om lov før vi går inn i følelser eller fornemmelser. Hvilket tempo ville hjulpet dette å kjennes annerledes enn den tidligere terapien?"
    },
    "dp_alliance-repair_case-jason_04": {
      "text": "[Stille] Du sier at det er greit å ta pause, men når jeg tar pause, føler jeg meg sett på.",
      "suggestion": "Takk for at du sier det. Oppmerksomheten min i pausene kan kjennes som press i stedet for støtte, og det beklager jeg. Hva ville gjort en pause mindre overvåket og mer beskyttet?"
    },
    "dp_alliance-repair_case-jason_05": {
      "text": "[Engstelig] Da du foreslo å øve i en gruppe, følte jeg at du ikke forstod hvor umulig det høres ut.",
      "suggestion": "Jeg hører at forslaget mitt hoppet for langt fram. Jeg beklager at jeg ikke traff hvor umulig det kjentes fra innsiden av angsten. Hvilket mindre steg ville vist deg at jeg forstår størrelsen på dette?"
    },
    "dp_alliance-repair_case-jason_06": {
      "text": "[Nølende] Da jeg ble stille, sa du at jeg virket rolig, men jeg hadde panikk.",
      "suggestion": "Takk for at du korrigerer meg. Jeg leste stillhet som ro, og det beklager jeg. Hvilke tegn bør jeg se etter så jeg ikke overser panikk når den blir stille?"
    },
    "dp_alliance-repair_case-jason_07": {
      "text": "[Flau] Du fullførte setningen min for meg, og jeg følte meg dum.",
      "suggestion": "Jeg beklager at jeg fullførte setningen din. Det tok over akkurat det stedet der du prøvde å finne ordene. Hva ville hjulpet meg å støtte deg uten å gå inn i talen din?"
    },
    "dp_alliance-repair_case-jason_08": {
      "text": "[Skamfull] Da du kalte det unngåelse, hørtes det ut som kritikk.",
      "suggestion": "Jeg hører at «unngåelse» landet som kritikk. Jeg beklager at jeg brukte et ord som fikk deg til å kjenne deg klandret. Hvilket ord ville hjulpet oss å snakke om å trekke seg unna uten å gjøre deg feil?"
    },
    "dp_alliance-repair_case-jason_09": {
      "text": "[Redd] Da du ba meg se på deg mens jeg snakket, følte jeg meg blottlagt.",
      "suggestion": "Takk for at du sier det. Å be om øyekontakt gjorde øyeblikket for eksponert, og det beklager jeg. Hvor ville det kjennes tryggere at blikket ditt hviler mens vi snakker?"
    },
    "dp_alliance-repair_case-jason_10": {
      "text": "[Stille] Da du spurte hvorfor jeg ikke dro på festen, hørte jeg dom i det.",
      "suggestion": "Jeg hører at hvorfor-spørsmålet mitt hørtes dømmende ut. Det beklager jeg. Hvordan kan jeg spørre om det som skjedde på en måte som kjennes nysgjerrig heller enn anklagende?"
    },
    "dp_alliance-repair_case-laura_01": {
      "text": "[Flatt og på vakt] Da du spurte om barndommen, følte jeg meg eksponert og ville gå.",
      "suggestion": "Du ble og fortalte meg noe viktig. Barndomsspørsmålet mitt eksponerte for mye for fort, og det beklager jeg. Hva ville hjelpe deg å kjenne at du styrer kanten før jeg spør om noe slikt igjen?"
    },
    "dp_alliance-repair_case-laura_02": {
      "text": "[Fjern] Da jeg fortalte om moren min ved oppvaskbenken og du smilte et øyeblikk, trodde jeg at du lo av meg.",
      "suggestion": "Takk for at du sier det. Hvis ansiktet mitt så moret ut i det øyeblikket, skjønner jeg at det kunne kjennes ydmykende og utrygt. Jeg beklager den virkningen. Jeg lo ikke av deg, og jeg vil vite hva som ville hjulpet deg å kjenne at jeg forstår alvoret i det du fortalte."
    },
    "dp_alliance-repair_case-laura_03": {
      "text": "[Langsomt og flatt] Du er yngre enn meg, og noen ganger lurer jeg på om du virkelig kan forstå et liv som har vært avstengt så lenge.",
      "suggestion": "Takk for at du betror meg den bekymringen. Aldersforskjellen er reell, og jeg kan gå glipp av ting hvis jeg for raskt antar at jeg forstår. Jeg beklager hvis jeg har gått forbi det. Hva ville hjulpet deg å teste om jeg forstår livet ditt, i stedet for å presse det inn i min egen ramme?"
    },
    "dp_alliance-repair_case-laura_04": {
      "text": "[Flatt og på vakt] Da du skrev notater mens jeg snakket om det som skjedde, følte jeg meg registrert i stedet for møtt.",
      "suggestion": "Takk for at du forteller meg det. Å skrive notater i det øyeblikket gjorde at du følte deg registrert heller enn møtt, og det beklager jeg. Ville det hjelpe om jeg lot være å skrive under traumestoff, eller spurte før jeg skrev?"
    },
    "dp_alliance-repair_case-laura_05": {
      "text": "[På vakt] Da du spurte om jeg stoler på deg, føltes det som press om å si ja.",
      "suggestion": "Jeg hører at spørsmålet mitt om tillit skapte press. Det beklager jeg; tillit skal ikke kreves av deg. Hva ville gjort det mulig å snakke om mistillit uten at du må berolige meg?"
    },
    "dp_alliance-repair_case-laura_06": {
      "text": "[Anspent] Da du sa at jeg er trygg nå, følte kroppen min at du ikke trodde på faren.",
      "suggestion": "Takk for at du korrigerer det. Å si «trygg nå» hoppet over det kroppen din fortsatt vet, og det beklager jeg. Hva ville hjelpe meg å anerkjenne faren kroppen bærer, uten å gjøre nåtiden til fortiden?"
    },
    "dp_alliance-repair_case-laura_07": {
      "text": "[Fjern] Da du foreslo å forestille meg moren min her, følte jeg meg dyttet mot noe altfor stort.",
      "suggestion": "Jeg hører at jeg gikk for raskt mot stolarbeidet. Jeg beklager at jeg ikke sjekket størrelsen først. Hva ville vært en tryggere kant før vi vurderer å hente henne inn i rommet i fantasien?"
    },
    "dp_alliance-repair_case-laura_08": {
      "text": "[Flatt] Du gikk så fort fra eksen min til barndommen at det føltes som om du fulgte en sjekkliste.",
      "suggestion": "Takk for at du setter ord på det. Å gå fort fram gjorde arbeidet til en sjekkliste, og det beklager jeg. Hvilken forbindelse mellom de stedene, hvis noen, kjennes ekte nok å følge nå?"
    },
    "dp_alliance-repair_case-laura_09": {
      "text": "[Skamfull] Da du spurte om vin, følte jeg meg skjennepreket.",
      "suggestion": "Jeg hører at spørsmålet mitt om vin føltes som kjeft. Jeg beklager at jeg gjorde det vanskeligere å snakke om noe som allerede kan bære skam. Hvordan kan jeg spørre om alkohol på en måte som kjennes respektfull og nyttig?"
    },
    "dp_alliance-repair_case-laura_10": {
      "text": "[Lav stemme] Da du sa at jeg overlevde, hørtes det ut som om du sa at jeg burde ha det bra.",
      "suggestion": "Takk for at du sier det. Hvis «overlevde» hørtes ut som «du burde ha det bra», overså jeg den pågående kostnaden, og det beklager jeg. Hva trenger du at jeg forstår om å overleve uten å ha det bra?"
    },
    "dp_alliance-repair_case-carlos_01": {
      "text": "[Defensiv] Noen ganger kjennes det som om du hører «respekt» som bare ego, som om du ikke skjønner hva det betydde der jeg vokste opp.",
      "suggestion": "Takk for at du sier det. Hvis jeg fikk respekt til å høres ut som ego, bommet jeg på noe viktig i din verden, og det beklager jeg. Jeg vil forstå hva respekt beskyttet deg mot og hva det kostet deg, ikke se ned på det. Hva trenger jeg å forstå før vi fortsetter å jobbe med det ordet?"
    },
    "dp_alliance-repair_case-carlos_02": {
      "text": "[Anspent] Da du fortsatte å si «brems», hørtes det ut som om du ville at jeg skulle være myk.",
      "suggestion": "Måten jeg sa «brems» på hørtes ut som om jeg ba deg bli myk eller trekke deg. Det beklager jeg. Hvilke ord ville fått pausen til å kjennes som kontroll over deg selv, ikke overgivelse?"
    },
    "dp_alliance-repair_case-carlos_03": {
      "text": "[Sint] Da jeg snakket om ungen min, så du bort og jeg følte meg avvist.",
      "suggestion": "Takk for at du sier det. Å se bort kostet kontakt i et viktig øyeblikk, og det beklager jeg. Vil du at jeg går tilbake til det som skjedde da du nevnte sønnen din, og blir mer synlig med deg der?"
    },
    "dp_alliance-repair_case-carlos_04": {
      "text": "[Sint] Da jeg ble høylytt, skvatt du, og da følte jeg meg som den farlige fyren i rommet.",
      "suggestion": "Jeg hører at skvetten min fikk deg til å føle deg farlig og satt utenfor. Det beklager jeg. Hva ville hjulpet deg å vite at jeg kan ta intensiteten din på alvor uten å behandle deg som en trussel?"
    },
    "dp_alliance-repair_case-carlos_05": {
      "text": "[Defensiv] Da du spurte om jeg var redd, hørtes det respektløst ut.",
      "suggestion": "Takk for at du forteller meg det. Spørsmålet mitt om frykt landet som respektløst, og det beklager jeg. Hvilket språk kunne la oss nærme oss frykt uten at du føler deg redusert eller fornærmet?"
    },
    "dp_alliance-repair_case-carlos_06": {
      "text": "[Anspent] Når du snakker om reparasjon med sønnen min, hører jeg at du sier at jeg er en dårlig far.",
      "suggestion": "Jeg hører at reparasjon hørtes ut som en dom over deg som far. Jeg beklager at jeg ikke gjorde omsorgen i det tydeligere. Hvilken del av ønsket ditt om å være en god far bør jeg holde fast ved mens vi snakker om reparasjon?"
    },
    "dp_alliance-repair_case-carlos_07": {
      "text": "[Såret, men skarp] Du kikket mot døra etter at jeg ble sint, og jeg følte at du sjekket en fluktvei.",
      "suggestion": "Takk for at du sier det. Hvis blikket mitt antydet at jeg trengte en fluktvei, skjønner jeg at det kunne kjennes ydmykende og urovekkende. Det beklager jeg. Hva ville hjelpe oss å gjenopprette nok tillit til stødighet min akkurat nå?"
    },
    "dp_alliance-repair_case-carlos_08": {
      "text": "[Defensiv] Da du tok opp drikking, hørtes du akkurat ut som kona mi.",
      "suggestion": "Jeg hører at formuleringen min satte meg i samme posisjon som kona di, og det beklager jeg. Hva er forskjellen på et spørsmål som hjelper deg å se ærlig, og et som kjennes som en anklage?"
    },
    "dp_alliance-repair_case-carlos_09": {
      "text": "[Sint] Da du brukte ordet vold, følte jeg at du allerede hadde bestemt at jeg er kriminell.",
      "suggestion": "Takk for at du setter ord på det. Ordet landet som en total dom over deg, og jeg beklager at jeg ikke rammet det inn mer varsomt. Hvordan kan vi snakke ærlig om skadelig atferd og samtidig holde hele personen din i rommet?"
    },
    "dp_alliance-repair_case-carlos_10": {
      "text": "[Defensiv] Når du spør om familien min, føles det som om du klandrer stedet jeg kommer fra.",
      "suggestion": "Jeg hører at spørsmålene mine om familien kjennes som skyld mot bakgrunnen din. Jeg beklager at jeg ga det inntrykket. Hva trenger jeg å respektere ved der du kommer fra før vi utforsker det som såret deg der?"
    },
    "dp_alliance-repair_case-nina_01": {
      "text": "[På gråten] Da jeg gråt, var du stille og jeg følte meg alene i det.",
      "suggestion": "Stillheten min lot deg være alene med tårene, og det beklager jeg. Når tårene kommer, ville ord, en mykere sjekk eller bare at jeg sier at jeg er her hjelpe deg å kjenne deg fulgt?"
    },
    "dp_alliance-repair_case-nina_02": {
      "text": "[Unnskyldende] Da du spurte om hans side av husarbeidet, kjentes det som om du tok eksens side.",
      "suggestion": "Formuleringen min fikk det til å høres ut som om jeg hadde stilt meg på hans side, og det vil jeg beklage. Før jeg spør om begge perspektiver igjen, hvilken del av din opplevelse trenger du at jeg tydelig står sammen med deg i?"
    },
    "dp_alliance-repair_case-nina_03": {
      "text": "[Splittet] Noen ganger når jeg snakker om husarbeid og barna, ser jeg at du virker trøtt, og da lurer jeg på om selv du er lei av dette.",
      "suggestion": "Takk for at du setter ord på det. Hvis trøtthet syntes i ansiktet mitt, skjønner jeg at det kunne bekrefte frykten for at hverdagsbyrdene dine blir for mye for folk. Jeg beklager den virkningen. Jeg er interessert i dette. Hva hjelper deg å kjenne at jeg fortsatt er med deg i de vanlige detaljene?"
    },
    "dp_alliance-repair_case-nina_04": {
      "text": "[Unnskyldende] Når du sier grenser, føler jeg at jeg har mislyktes med noe helt grunnleggende.",
      "suggestion": "Takk for at du forteller meg det. Måten jeg brukte «grenser» på hørtes ut som en korrigering eller karakter, og det beklager jeg. Hvilke ord ville hjulpet oss å snakke om grensene dine uten at du føler deg mislykket?"
    },
    "dp_alliance-repair_case-nina_05": {
      "text": "[På gråten] Da jeg sluttet å gråte, så du lettet ut.",
      "suggestion": "Jeg hører at ansiktet mitt så lettet ut da tårene stoppet, og det beklager jeg. Det kunne få tårene dine til å kjennes belastende her. Hva ville hjulpet deg å vite at jeg ikke venter på at følelsene dine skal bli over?"
    },
    "dp_alliance-repair_case-nina_06": {
      "text": "[Fortapt] Når du spør hva jeg vil, føler jeg meg forlatt, som om jeg skal vite det alene.",
      "suggestion": "Takk for at du sier det. Spørsmålet mitt kan ha gitt deg for mye ansvar for fort, og det beklager jeg. Hvordan kan jeg hjelpe deg å finne hva du vil uten å la deg være alene med spørsmålet?"
    },
    "dp_alliance-repair_case-nina_07": {
      "text": "[Sliten] Da du foreslo hvile, hørtes det ut som om du ikke forstår livet mitt i praksis.",
      "suggestion": "Jeg hører at hvile hørtes urealistisk og lite jordnært ut. Jeg beklager at jeg tilbød det for enkelt. Hva trenger jeg å forstå om belastningen før hvile i det hele tatt kan diskuteres?"
    },
    "dp_alliance-repair_case-nina_08": {
      "text": "[Skamfull] Da du kalte det bitterhet, følte jeg meg stygg.",
      "suggestion": "Takk for at du sier det. Ordet «bitterhet» landet som om jeg navnga noe stygt i deg, og det beklager jeg. Hvilket ord respekterer såretheten og utmattelsen under bedre?"
    },
    "dp_alliance-repair_case-nina_09": {
      "text": "[Unnskyldende] Jeg sa unnskyld fem ganger og du la ikke merke til det, så jeg følte meg usynlig igjen.",
      "suggestion": "Jeg beklager at jeg overså de gjentatte unnskyldningene. Det var et viktig signal, og da jeg gikk glipp av det, gjentok jeg usynligheten du beskriver. Hva ville hjulpet deg å føle deg sett i det mønsteret nå?"
    },
    "dp_alliance-repair_case-nina_10": {
      "text": "[Splittet] Da du fokuserte på eksen min, føltes det som om barna forsvant ut av rommet.",
      "suggestion": "Jeg hører at jeg snevret fokuset inn mot eksen din og mistet barna, som er helt sentrale her. Det beklager jeg. Hvor skal vi hente barna tilbake inn i samtalen nå?"
    },
    "dp_alliance-repair_case-aisha_01": {
      "text": "[Desperat] Da du ikke svarte raskt på meldingen min, fikk jeg panikk og følte meg forlatt.",
      "suggestion": "Mellomrommet uten svar kjentes som forlatelse. Jeg beklager at jeg ikke ga plass til den virkningen tidligere. Hvilken plan for meldingspauser ville hjulpet deg å kjenne deg mindre alene i panikken, samtidig som rammen er tydelig?"
    },
    "dp_alliance-repair_case-aisha_02": {
      "text": "[Desperat] Da timen sluttet helt presis, føltes det som at du slapp meg.",
      "suggestion": "Å avslutte helt presis kjentes som å bli sluppet. Jeg beklager at rammen min landet som forlatelse. Hva ville hjelpe avslutninger å kjennes mer holdt, samtidig som de er tydelige og forutsigbare?"
    },
    "dp_alliance-repair_case-aisha_03": {
      "text": "[Mistenksom] Dette er kleint å spørre om, men etter at du spurte så mye om hvem jeg ligger med, lurte jeg på om du er interessert i meg på den måten.",
      "suggestion": "Takk for at du sier det. Jeg skjønner at spørsmålene mine om sex kunne kjennes personlige eller forvirrende. Jeg beklager at jeg ikke gjorde hensikten og grensen tydeligere. Jeg er ikke romantisk eller seksuelt interessert i deg; dette er en profesjonell terapeutisk relasjon. Hva trenger du fra meg nå for at spørsmål om sex skal kjennes tryggere og tydelig handle om din opplevelse?"
    },
    "dp_alliance-repair_case-aisha_04": {
      "text": "[Desperat] Jeg sendte deg en e-post og hørte ikke noe, og jeg spant rundt hele natten.",
      "suggestion": "Jeg hører at mangelen på svar lot deg være alene med en spiral, og jeg beklager at jeg ikke gjorde e-postrammen tydeligere. Hvilken avtale om meldinger ville hjulpet deg å vite hva du kan forvente uten å føle deg forlatt?"
    },
    "dp_alliance-repair_case-aisha_05": {
      "text": "[Såret] Da du sa grenser, hørtes det ut som straff.",
      "suggestion": "Takk for at du setter ord på det. Grensespråket mitt landet som straff, og det beklager jeg. Hvordan kan jeg gjøre rammen tydelig og samtidig få den til å kjennes omsorgsfull heller enn avvisende?"
    },
    "dp_alliance-repair_case-aisha_06": {
      "text": "[Skamfull] Da jeg nevnte kutting, ble øynene dine store, og jeg følte at jeg skremte deg.",
      "suggestion": "Jeg beklager at ansiktet mitt fikk deg til å føle deg skremmende eller for mye. Jeg vil ta kutting på alvor uten at du må bære alarmen min. Hva ville hjulpet deg å føle at jeg kan være stødig og samtidig holde sikkerhet i sikte?"
    },
    "dp_alliance-repair_case-aisha_07": {
      "text": "[Mistenksom] Da du sa at du skriver notater, lurte jeg på hvilken versjon av meg du legger der.",
      "suggestion": "Takk for at du forteller meg det. Jeg burde forklart notater tydeligere, og jeg beklager at usikkerheten fikk deg til å føle deg feil framstilt. Hva trenger du å vite om notatene mine for å føle deg mindre eksponert?"
    },
    "dp_alliance-repair_case-aisha_08": {
      "text": "[Desperat] Da du sa at vi ikke kunne legge inn en ekstra time denne uken, føltes det som avvisning.",
      "suggestion": "Jeg hører at nei-et mitt til en ekstra time kjentes som avvisning, og jeg beklager at jeg ikke tok vare på den virkningen. Hva ville hjulpet deg å føle deg holdt av planen selv når jeg ikke kan legge til mer tid?"
    },
    "dp_alliance-repair_case-aisha_09": {
      "text": "[Panisk] Du hørtes så rolig ut da jeg falt fra hverandre at jeg trodde du ikke brydde deg.",
      "suggestion": "Takk for at du sier det. Roen min hørtes ut som avstand, og det beklager jeg. Hvilken type stødighet ville kjennes omsorgsfull heller enn fjern når du får panikk?"
    },
    "dp_alliance-repair_case-aisha_10": {
      "text": "[Sint] Da du brukte et diagnoseord, følte jeg meg redusert til et problem.",
      "suggestion": "Jeg hører at diagnoseordet fikk deg til å føle deg redusert og gjort til et objekt. Det beklager jeg. Hvilke ord hjelper oss å snakke om mønstre uten å gjøre deg til en merkelapp?"
    },
    "dp_alliance-repair_case-david_01": {
      "text": "[Streng og sint] Jeg tror ikke denne terapien virker. Jeg kommer hit og sier de samme tingene om igjen, og kanskje vi bare kaster bort tiden begge to.",
      "suggestion": "Jeg er glad for at du sier dette direkte. Det høres frustrerende ut, og kanskje ydmykende, å jobbe så hardt uten å se nok bevegelse. Jeg beklager at jeg ikke har hjulpet oss å gjøre fremgangen tydelig. Vi kan se ærlig på hva som ikke fungerer, også om en annen tilnærming eller terapeut ville tjent deg bedre. Hva ville gjort dagens samtale verdt tiden din?"
    },
    "dp_alliance-repair_case-david_02": {
      "text": "[Avvisende] Da jeg ba om strategi, fortsatte du å gå tilbake til følelser, og jeg følte meg oversett.",
      "suggestion": "Jeg korrigerte for langt mot dybde og ga for lite av strategien du ba om. Jeg beklager at det gjorde at du følte deg oversett. Hvilket praktisk holdepunkt ville gjort at følelsesarbeidet fortjente plass i dag?"
    },
    "dp_alliance-repair_case-david_03": {
      "text": "[Såret, men skarp] Da du navnga konas sårhet først, kjentes det som om du tok hennes parti.",
      "suggestion": "Det å navngi hennes sårhet først hørtes ut som om jeg stod med henne mot deg, og det beklager jeg. Hvilken del av din side overså jeg eller gjorde for liten?"
    },
    "dp_alliance-repair_case-david_04": {
      "text": "[Streng] Da du utfordret meg med den tonen, følte jeg meg ydmyket.",
      "suggestion": "Takk for at du forteller meg det. Tonen min i utfordringen kjentes ydmykende, og det beklager jeg. Hva ville gjort en utfordring respektfull nok til å være nyttig?"
    },
    "dp_alliance-repair_case-david_05": {
      "text": "[Avvisende] Da du kalte det selvbeskyttelse, hørtes det ut som en høflig måte å si narsissistisk på.",
      "suggestion": "Jeg hører at formuleringen min hørtes patologiserende ut, selv om den var pakket pent inn. Det beklager jeg. Hvilket språk ville latt oss undersøke forsvaret ditt uten at du føler deg diagnostisert eller fornærmet?"
    },
    "dp_alliance-repair_case-david_06": {
      "text": "[Såret, men skarp] Du tok tårene til kona mi mer alvorlig enn mine.",
      "suggestion": "Takk for at du setter ord på det. Hvis jeg ga mer vekt til tårene hennes enn til smerten din, overså jeg deg, og det beklager jeg. Hva trengte smerten din fra meg i det øyeblikket?"
    },
    "dp_alliance-repair_case-david_07": {
      "text": "[Kontrollert] Da du spurte om detaljer rundt affæren, følte jeg meg dømt og blottlagt.",
      "suggestion": "Jeg hører at spørsmålene mine føltes eksponerende og dømmende. Jeg beklager at jeg ikke gjorde hensikten og grensene tydeligere. Hvilke detaljer, om noen, kjennes klinisk nyttige heller enn skamfulle å snakke om?"
    },
    "dp_alliance-repair_case-david_08": {
      "text": "[Irritert] Da du sa at det ikke finnes raske løsninger, hørtes det nedlatende ut.",
      "suggestion": "Takk for at du sier det. Uttrykket mitt hørtes ut som om jeg snakket ned til deg, og det beklager jeg. Hvordan kan jeg være ærlig om at terapi tar tid uten å avvise hvor akutt dette kjennes for deg?"
    },
    "dp_alliance-repair_case-david_09": {
      "text": "[Avvisende] Du virket imponert over karrieren min, og da følte jeg at du overså rotet hjemme.",
      "suggestion": "Jeg hører at oppmerksomheten min på karrieren din kan ha styrket den polerte versjonen av deg og oversett smerten hjemme. Det beklager jeg. Hvor bør jeg se nå, så jeg ikke samarbeider med prestasjonen?"
    },
    "dp_alliance-repair_case-david_10": {
      "text": "[Kald] Da du nevnte henvisninger, føltes det som om du var ferdig med meg.",
      "suggestion": "Jeg hører at det å nevne henvisninger kjentes som avvisning heller enn valgmulighet. Jeg beklager at jeg ikke rammet det tydeligere inn. Hva ville hjulpet deg å vite at jeg fortsatt er villig til å arbeide med deg, samtidig som vi snakker ærlig om hva som hjelper?"
    },
    "dp_alliance-repair_case-marcus_01": {
      "text": "[Langsomt og flatt] Da jeg sa at jeg ikke følte noe, fortsatte du å spørre og jeg stengte ned.",
      "suggestion": "Jeg fortsatte å presse etter at «ingenting» allerede var kanten din. Jeg beklager at jeg gjorde det. Hva ville vist deg at jeg respekterer kanten og samtidig blir her sammen med deg?"
    },
    "dp_alliance-repair_case-marcus_02": {
      "text": "[Lav stemme] Da du flyttet stolen nærmere, følte jeg meg fanget og urolig.",
      "suggestion": "Takk for at du sier det direkte. At jeg flyttet meg nærmere gjorde deg urolig og fanget, og det beklager jeg. Hvor i rommet ville det kjennes tryggere at jeg var?"
    },
    "dp_alliance-repair_case-marcus_03": {
      "text": "[Hyperårvåken] Når du spør om marerittene, lurer jeg på om du faktisk vet hva du skal gjøre med dette, eller om det er for mye for deg.",
      "suggestion": "Takk for at du sier det. Hvis jeg spør inn i traumer uten å vise stødighet og samtykke, skjønner jeg at du kan tvile på om jeg tåler det. Jeg beklager at jeg gikk videre før beredskapen din var tydelig. Jeg har trening og støtte i traumearbeid, og jeg vil gjøre meg fortjent til tillit ved å gå i et tempo du kan stoppe. Hva ville vist deg at jeg ikke presser forbi min kompetanse eller dine grenser?"
    },
    "dp_alliance-repair_case-marcus_04": {
      "text": "[Anspent] Da du ba meg lukke øynene, kjentes det utrygt.",
      "suggestion": "Takk for at du sier det. Å be deg lukke øynene overså hva trygghet krever for deg, og det beklager jeg. Hvilke måter å lande på lar deg beholde nok orientering og kontroll?"
    },
    "dp_alliance-repair_case-marcus_05": {
      "text": "[Flatt] Da du kalte det en traumereaksjon, følte jeg meg som en kategori.",
      "suggestion": "Jeg hører at språket mitt fikk deg til å føle deg kategorisert heller enn kjent. Det beklager jeg. Hvilke ord hjelper oss å navngi det som skjer uten at du føler deg arkivert?"
    },
    "dp_alliance-repair_case-marcus_06": {
      "text": "[Lav stemme] Da jeg nevnte volden hjemme, så du ukomfortabel ut.",
      "suggestion": "Takk for at du setter ord på det. Hvis ubehaget mitt syntes, beklager jeg; du skal ikke måtte håndtere reaksjonen min på historien din. Hva ville hjulpet deg å vite at jeg kan høre det uten å vende meg bort?"
    },
    "dp_alliance-repair_case-marcus_07": {
      "text": "[På vakt] Jeg sa at jeg ikke ville snakke om marerittene, og du stilte likevel ett spørsmål til.",
      "suggestion": "Jeg hører at jeg krysset en grense etter at du allerede hadde sagt nei. Det beklager jeg. Hva bør jeg gjøre nå for å reparere det og gjøre stoppsignalet ditt tydeligere mellom oss?"
    },
    "dp_alliance-repair_case-marcus_08": {
      "text": "[Hyperårvåken] Du satt mellom meg og døra, og jeg klarte ikke å høre noe annet.",
      "suggestion": "Takk for at du sier det. Plasseringen min sperret for følelsen av utvei, og det beklager jeg. La oss justere rommet nå; hvor bør jeg sitte så kroppen din kan følge med på døra og likevel være her med meg?"
    },
    "dp_alliance-repair_case-marcus_09": {
      "text": "[Streng] Når du sier «du er trygg her», føles det som om du ikke vet hva trygg betyr.",
      "suggestion": "Jeg hører at «du er trygg her» hørtes naivt og frakoblet ut fra virkeligheten din. Det beklager jeg. Hva ville vært en mer presis måte for meg å snakke om relativ trygghet i dette rommet?"
    },
    "dp_alliance-repair_case-marcus_10": {
      "text": "[Flatt] Du spør om fosterhjem hver time, og det føles som graving.",
      "suggestion": "Takk for at du forteller meg det. Å vende tilbake dit igjen og igjen har kjentes som graving, og jeg beklager at jeg ikke sjekket det. Hva ville fått det til å kjennes som at du styrer om og når vi nærmer oss det stoffet?"
    }
  }
};

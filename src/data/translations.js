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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
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
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    }
  }
};

export const STATEMENT_TRANSLATIONS = {
  "no": {
    "dp_therapist-self-awareness_case-sara_01": {
      "text": "Jeg tenker hele tiden at jeg burde vært over ham nå – kan vi hoppe over gråtingen?",
      "suggestion": "[Internt] Legg merke til draget mot å være enig og gå videre; forleng utpusten. [Meta] En del av deg prøver hardt å løpe fra gråten; jeg vil senke tempoet nok til å høre hva som fortsatt gjør vondt."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      "text": "Beklager, jeg vet at jeg stadig tar ham opp; du har sikkert klienter med virkelige problemer.",
      "suggestion": "[Internt] Mykne trangen til å forsikre; ha sammenligningen i sikte. [Meta] Du gjør allerede plassen din her mindre; legg merke til hva som skjer når smerten din får rom uten å konkurrere."
    },
    "dp_therapist-self-awareness_case-sara_03": {
      "text": "Jeg smiler hele tiden så det ikke blir pinlig, men da føler jeg meg falsk og alene.",
      "suggestion": "[Internt] Kjenn ansiktet; mykne blikket; senk tempoet. [Meta] Smilet jobber hardt for å beskytte oss begge mot pinlighet; vi undersøker forsiktig hva som kjennes for risikabelt å vise under det."
    },
    "dp_therapist-self-awareness_case-sara_04": {
      "text": "Når jeg hører meg selv snakke om bruddet, ser jeg for meg at du tenker at jeg er dramatisk.",
      "suggestion": "[Internt] Legg merke til ønsket om å bevise aksept; hold tonen varm. [Meta] Du lytter etter dom i ansiktet mitt; jeg vil gi rom til hvor utsatt det kjennes å la dette bety noe."
    },
    "dp_therapist-self-awareness_case-sara_05": {
      "text": "Jeg kan bare bite tennene sammen; jeg trenger ikke å kjenne på alt dette.",
      "suggestion": "[Internt] Merk draget mot å fikse og være effektiv; senk skuldrene. [Meta] Vi kan gå i ditt tempo – kanskje vi kan berøre en liten del sammen, og så komme tilbake."
    },
    "dp_therapist-self-awareness_case-sara_06": {
      "text": "Kan vi heller snakke om arbeidsmål? Det kjennes i det minste nyttig.",
      "suggestion": "[Internt] Fang opp lettelsen i det praktiske temaet; hold varmen. [Meta] Vi kan ta med jobb, og jeg vil også legge merke til hva som kjennes tryggere ved å gå dit her."
    },
    "dp_therapist-self-awareness_case-sara_07": {
      "text": "Jeg hater at jeg vil at du skal sjekke inn med meg mellom timene; det kjennes trengende.",
      "suggestion": "[Internt] Fang opp draget mot å berolige eller tilby ekstra kontakt; hold rammen vennlig. [Meta] Ønsket om at noen sjekker inn vekker skam; vi prøver å forstå lengselen uten å gjøre den feil."
    },
    "dp_therapist-self-awareness_case-sara_08": {
      "text": "Hvis jeg gråter her inne, kommer jeg til å føle meg patetisk foran deg.",
      "suggestion": "[Internt] Legg merke til trangen til å berolige; senk tempoet. [Meta] En del av deg forventer at tårer blir ydmykende her; vi kan gå sakte nok til at du beholder styringen."
    },
    "dp_therapist-self-awareness_case-sara_09": {
      "text": "Jeg følger med på ansiktet ditt hele tiden, for jeg vil ikke gjøre deg utilpass.",
      "suggestion": "[Internt] Legg merke til at klienten prøver å ta vare på deg; stem inn igjen. [Meta] Du sjekker om jeg tåler deg; jeg vil være her sammen med deg uten at du må passe på meg."
    },
    "dp_therapist-self-awareness_case-sara_10": {
      "text": "Jeg sier til meg selv at det går fint, fordi andre mennesker har virkelige problemer.",
      "suggestion": "[Internt] Legg bort sammenligningen; forankre deg i denne klienten. [Meta] Sammenligningen prøver å gjøre smerten din mindre. Vi kan gi det som er virkelig for deg plass her."
    },
    "dp_therapist-self-awareness_case-michael_01": {
      "text": "Hvis du snakker ned til meg, er jeg ferdig; jeg sitter ikke her og blir behandlet respektløst.",
      "suggestion": "[Internt] Kjenn føttene; legg merke til eventuell defensiv stramming; hold stemmen stødig. [Meta] Jeg hører hvor raskt respektløshet ville avsluttet rommet for deg; jeg vil bremse sammen med deg ved det første signalet som sier at jeg snakker ned til deg."
    },
    "dp_therapist-self-awareness_case-michael_02": {
      "text": "Ikke start med følelser; hvis dette bare blir terapiprat, trenger jeg verktøy jeg faktisk kan bruke.",
      "suggestion": "[Internt] Legg merke til trangen til å bevise metoden; finn tilbake til deg selv. [Meta] Vi kan holde det praktisk, og jeg vil knytte verktøyene til de nøyaktige øyeblikkene som tar overhånd."
    },
    "dp_therapist-self-awareness_case-michael_03": {
      "text": "Kona mi får meg til å høres farlig ut, men hun vet akkurat hvilke knapper hun skal trykke på.",
      "suggestion": "[Internt] Fang opp trangen til å argumentere eller korrigere; mykne stemmen. [Meta] Jeg hører hvor anklaget du føler deg; vi kan likevel se på hva som tar over inni deg rett før det eskalerer."
    },
    "dp_therapist-self-awareness_case-michael_04": {
      "text": "Når noen retter på meg foran teamet, klikker jeg og sier etterpå at de burde visst bedre.",
      "suggestion": "[Internt] Legg merke til draget mot å utfordre skyldleggingen; kjenn føttene. [Meta] Korrigeringen lander som et angrep; vi kan bremse rundt øyeblikket den treffer før skylden tar over."
    },
    "dp_therapist-self-awareness_case-michael_05": {
      "text": "Hvis jeg beklager først, tror hun at hun har vunnet, og jeg ser svak ut.",
      "suggestion": "[Internt] Kjenn kjeven; slipp trangen til å overtale. [Meta] Beklagelsen kjennes som overgivelse; kanskje vi senker tempoet ved hva svak ville bety akkurat da."
    },
    "dp_therapist-self-awareness_case-michael_06": {
      "text": "Prøver du å roe meg ned fordi du synes jeg er ute av kontroll?",
      "suggestion": "[Internt] Ta imot utfordringen; hold stemmen stødig; ikke bevis intensjonen din. [Meta] Jeg prøver ikke å håndtere deg. Jeg vil forstå det som nettopp skjøt i været mellom oss."
    },
    "dp_therapist-self-awareness_case-michael_07": {
      "text": "Hvis vi ikke fikser temperamentet mitt raskt, føler jeg at jeg mislykkes i terapi også.",
      "suggestion": "[Internt] Legg merke til prestasjonspress; mykne hastverket. [Meta] Jeg hører hvor sterkt du vil at dette skal virke. Vi kan bruke presset som informasjon om hva som blir uutholdelig."
    },
    "dp_therapist-self-awareness_case-michael_08": {
      "text": "Ikke gjør den terapeutgreia der alt handler om faren min; det er latskap.",
      "suggestion": "[Internt] Ta imot stikket; slipp trangen til å forsvare formuleringen din. [Meta] Greit, jeg vil ikke presse en historie på deg. Vi arbeider med respektøyeblikket foran oss og gjør oss fortjent til eventuelle koblinger."
    },
    "dp_therapist-self-awareness_case-michael_09": {
      "text": "Folk på jobb er veike; hvis det plager deg, skjønner du kanskje ikke verdenen min.",
      "suggestion": "[Internt] Legg merke til dom eller avstand; åpne nysgjerrigheten igjen. [Meta] Du tester om jeg kan forstå den verdenen uten å dømme den; vi ser på hva svakhet signaliserer for deg før vi bestemmer hva det betyr."
    },
    "dp_therapist-self-awareness_case-michael_10": {
      "text": "Hvis jeg slipper opp bare litt, tråkker folk over meg, og jeg ser svak ut.",
      "suggestion": "[Internt] Mykne skuldrene; ro ned pusten. [Meta] Frykten for å bli tråkket på er sterk; vi ser på øyeblikket du kjenner deg underlegen, så du kan styre det."
    },
    "dp_therapist-self-awareness_case-jason_01": {
      "text": "Jeg tenker hele tiden at du venter på at jeg skal si noe nyttig.",
      "suggestion": "[Internt] Motstå rask forsikring; mykne blikket. [Meta] Takk for at du setter ord på presset; vi merker hvordan det er å føle at du må være nyttig."
    },
    "dp_therapist-self-awareness_case-jason_02": {
      "text": "Jeg blir blank igjen, og nå er jeg redd du kjeder deg.",
      "suggestion": "[Internt] Legg merke til ønsket om å forsikre raskt; tåle stillheten. [Meta] Blankheten kommer sammen med frykten for at jeg forsvinner i den; legg merke til ett signal som forteller deg at jeg kanskje kjeder meg."
    },
    "dp_therapist-self-awareness_case-jason_03": {
      "text": "Ikke få meg til å lukke øynene; jeg føler meg latterlig og iakttatt når jeg prøver.",
      "suggestion": "[Internt] Respekter grense; reduser intensitet. [Meta] Vi kan ha øynene åpne og ta et mindre steg, kanskje bare kjenne føttene mens du beholder styringen."
    },
    "dp_therapist-self-awareness_case-jason_04": {
      "text": "Jeg beklager hver gang jeg blir stille, fordi jeg antar at stillheten er pinlig for deg.",
      "suggestion": "[Internt] Legg merke til trangen til å redde; hold varmen. [Meta] Beklagelsen forteller meg at stillhet kjennes blottstilt, som om du må beskytte meg mot den."
    },
    "dp_therapist-self-awareness_case-jason_05": {
      "text": "Kan vi bare snakke strategier, så jeg vet nøyaktig hva jeg skal gjøre?",
      "suggestion": "[Internt] Legg merke til fiksetrang; stem inn igjen. [Meta] Vi kan legge til strategier; først vil jeg forstå frysingen strategien faktisk skal hjelpe med."
    },
    "dp_therapist-self-awareness_case-jason_06": {
      "text": "Jeg hoppet over øvelsene igjen, så jeg har sikkert ødelagt dette.",
      "suggestion": "[Internt] Mykne trangen til å undervise; jevn tone. [Meta] Takk for at du sier det. Vi merker skammen som kommer med «igjen» før vi gjør det til lekser."
    },
    "dp_therapist-self-awareness_case-jason_07": {
      "text": "Jeg føler meg dum når du spør om følelser, som om jeg allerede burde vite svaret.",
      "suggestion": "[Internt] Mykne stemmen; sett parentes rundt behovet for å forsikre. [Meta] Spørsmålet lander som en test; kanskje vi navngir ett lite signal sammen i stedet for en stor følelse."
    },
    "dp_therapist-self-awareness_case-jason_08": {
      "text": "Kanskje terapi ikke er for folk som fryser og gjør hver samtale rar.",
      "suggestion": "[Internt] Følg håpløsheten og trangen til å overbevise; forankre deg. [Meta] En beskyttende del sjekker utgangen, og vi kan respektere hvor redd den er for å være synlig her."
    },
    "dp_therapist-self-awareness_case-jason_09": {
      "text": "Jeg sier til meg selv at jeg aldri kommer til å bli god med folk, så hvorfor fortsette å prøve?",
      "suggestion": "[Internt] Legg merke til håpløshet og redningstrang; hold deg stødig. [Meta] Den troen høres utmattende ut; vi lytter til delen som vil slutte å prøve."
    },
    "dp_therapist-self-awareness_case-jason_10": {
      "text": "Jeg sier hele tiden at det går fint så du ikke skal merke hvor flau jeg er.",
      "suggestion": "[Internt] Kjenn føttene; respekter dekningen; ikke grav. [Meta] «Fint» jobber hardt for å skjule flauheten; vi kan la det beskytte deg mens vi merker hva det vokter."
    },
    "dp_therapist-self-awareness_case-laura_01": {
      "text": "Jeg kjenner ingenting, og jeg er redd du presser til jeg forsvinner.",
      "suggestion": "[Internt] Slipp agendaen; senk stemmen; titrer. [Meta] Jeg presser ikke forbi nummenheten. Vi kan la den vise oss kanten av det som kjennes trygt."
    },
    "dp_therapist-self-awareness_case-laura_02": {
      "text": "Hevede stemmer ute får meg til å ville gå før jeg engang vet om jeg er trygg.",
      "suggestion": "[Internt] Følg aktivering; forleng utpusten; orienter til rommet. [Meta] Stemmene treffer før du rekker å sortere trygghet; vi jorder oss sammen og merker det første signalet."
    },
    "dp_therapist-self-awareness_case-laura_03": {
      "text": "Jeg vil helst ikke snakke om fortiden; jeg kjenner at jeg allerede begynner å stenge av.",
      "suggestion": "[Internt] Respekter grensen; slipp trykket. [Meta] Vi kan holde oss i nåtiden og bruke avstengningen som signal for hvor sakte vi må gå."
    },
    "dp_therapist-self-awareness_case-laura_04": {
      "text": "Jeg drikker nok til å få sove, for ellers blir det for mye støy inni meg om natten.",
      "suggestion": "[Internt] Legg merke til bekymring uten å skamme; hold varmen. [Meta] Drikkingen har vært en måte å skru ned volumet på; vi kan se varsomt på hva som blir for høyt om natten."
    },
    "dp_therapist-self-awareness_case-laura_05": {
      "text": "Når du høres vennlig ut, leter en del av meg etter haken.",
      "suggestion": "[Internt] Mykne ansiktet; utvid vinduet; rom mistillit. [Meta] Ikke rart du leter etter en hake etter utrygg nærhet; vi kan la den beskyttende delen styre tempoet."
    },
    "dp_therapist-self-awareness_case-laura_06": {
      "text": "Kanskje dette bare er hjernekjemi, og jeg kaster bort tiden din ved å snakke.",
      "suggestion": "[Internt] Slipp trangen til å diskutere biologi; hold samarbeid. [Meta] Biologi kan være en del av dette, og samtidig lurer du på om smerten din kan nås her; vi holder oss nær den tvilen."
    },
    "dp_therapist-self-awareness_case-laura_07": {
      "text": "Hvis jeg begynner å føle her, er jeg redd du ikke merker når jeg forsvinner.",
      "suggestion": "[Internt] Kjenn ansvaret som blir lagt på deg; senk tempoet og orienter. [Meta] Du trenger at jeg følger kanten nøye; vi gjør forsvinning til noe vi følger med på sammen, ikke noe du må håndtere alene."
    },
    "dp_therapist-self-awareness_case-laura_08": {
      "text": "Når terapeuter presser, stenger jeg ned, og så later de som om jeg gjør motstand.",
      "suggestion": "[Internt] Legg merke til ønsket om å bevise at du ikke vil presse; ta imot advarselen. [Meta] Det høres ensomt og urettferdig ut. Jeg vil at vi bruker nedstenging som informasjon om tempo, ikke som et problem i deg."
    },
    "dp_therapist-self-awareness_case-laura_09": {
      "text": "Jeg tror jeg er ødelagt på en måte du til slutt blir lei av.",
      "suggestion": "[Internt] Legg merke til sorg og eventuell redningstrang; hold deg stødig. [Meta] Den ødelagte følelsen forventer allerede at jeg blir lei av deg; jeg vil sitte nær den forventningen uten å krangle med den."
    },
    "dp_therapist-self-awareness_case-laura_10": {
      "text": "Å holde alt under kontroll kjennes tryggere enn å finne ut hva som ligger under.",
      "suggestion": "[Internt] Respekter beskytteren; vær mild. [Meta] Kontroll har holdt deg trygg; vi kan la den vise oss hva som kjennes for farlig å avdekke."
    },
    "dp_therapist-self-awareness_case-carlos_01": {
      "text": "Respekter meg eller gå; jeg bryr meg ikke om det høres hardt ut.",
      "suggestion": "[Internt] Slapp av i hendene; merk eventuell skremsel eller motkraft; hold jevn tone. [Meta] Respekt er ikke til forhandling for deg; vi finner sekundet før hardhet blir den eneste måten å holde grensen på."
    },
    "dp_therapist-self-awareness_case-carlos_02": {
      "text": "Ikke be meg puste som om jeg er et barn som må håndteres.",
      "suggestion": "[Internt] Legg merke til trangen til å forklare teknikken; møt ham voksen til voksen. [Meta] Jeg hører at pust kan høres ut som kontroll ovenfra. Vi holder arbeidet voksent og følger det som treffer først."
    },
    "dp_therapist-self-awareness_case-carlos_03": {
      "text": "Hvis jeg blir sårbar, ser folk en svakhet og bruker den mot meg.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å undervise; stem inn på beskyttelsen. [Meta] Styrke har holdt deg trygg; vi undersøker hva sårbarhet ville blottstille før vi ber deg nærme deg den."
    },
    "dp_therapist-self-awareness_case-carlos_04": {
      "text": "Folk presser meg, og hvis jeg ikke presser tilbake, føles det som om jeg forsvinner.",
      "suggestion": "[Internt] Kjenn føttene; hold stødig tempo. [Meta] Presset kjennes som å miste deg selv. Vi bremser ved det første støtet inni før motpresset tar over."
    },
    "dp_therapist-self-awareness_case-carlos_05": {
      "text": "Kona mi burde vise respekt først; ellers lar jeg henne bare kjøre over meg.",
      "suggestion": "[Internt] Legg merke til draget mot å skyve skylden over på andre; hold varme. [Meta] Jeg hører hvor mye det kjennes som å tape terreng; vi merker hva det treffer i deg med henne."
    },
    "dp_therapist-self-awareness_case-carlos_06": {
      "text": "Jeg sier hele tiden at jeg ikke er sint, bare bestemt, men alle trekker seg unna.",
      "suggestion": "[Internt] Merk bagatelliseringen uten å konfrontere den. [Meta] Bestemt er ordet som passer for deg, og vi kan også legge merke til hva andre ser når de begynner å trekke seg unna."
    },
    "dp_therapist-self-awareness_case-carlos_07": {
      "text": "Der jeg kommer fra, slår du først, ellers lærer folk at de kan ta fra deg.",
      "suggestion": "[Internt] Respekter historien; demp dømming. [Meta] Den koden beskyttet deg der; vi ser hva den fortsatt prøver å beskytte i deg her."
    },
    "dp_therapist-self-awareness_case-carlos_08": {
      "text": "Terapi er for folk som ikke tåler livet, og jeg har tålt mer enn nok.",
      "suggestion": "[Internt] Legg merke til stikk/forsvar; fall til ro. [Meta] Du har måttet håndtere mye. Jeg vil forstå hva livet krever av deg akkurat der det blir hardest."
    },
    "dp_therapist-self-awareness_case-carlos_09": {
      "text": "Hvis noen ser stygt på meg, reagerer jeg før jeg rekker å tenke.",
      "suggestion": "[Internt] Hold kroppen stødig; ikke skynd deg å dempe ham. [Meta] Reaksjonen kommer før tanken; vi finner det første kroppssignalet som kan gi deg ett sekund med valg."
    },
    "dp_therapist-self-awareness_case-carlos_10": {
      "text": "Jeg er her bare fordi kona mi vil det, så ikke forvent en stor tale.",
      "suggestion": "[Internt] Slipp trangen til å overtale; allier deg. [Meta] Takk for at du møter opp uten å late som dette var din idé; vi kan fokusere på det som faktisk kunne hjelpe hjemme for deg."
    },
    "dp_therapist-self-awareness_case-nina_01": {
      "text": "Jeg burde ikke snakke så mye om meg; andre trenger meg mer.",
      "suggestion": "[Internt] Senk tempoet; legg merke til overansvarlighetsdraget. [Meta] Du bærer mye for andre; vi gir litt plass til hvordan det er at du betyr noe her."
    },
    "dp_therapist-self-awareness_case-nina_02": {
      "text": "Jeg får dårlig samvittighet av å sitte her når familien min sikkert trenger noe.",
      "suggestion": "[Internt] Pust lavt; mykne tonen; ikke skynd deg å frikjenne. [Meta] Den dårlige samvittigheten trekker deg ut av rommet og mot alle andre; vi merker hvordan det er å vende tilbake til deg."
    },
    "dp_therapist-self-awareness_case-nina_03": {
      "text": "Jeg sier til meg selv at jeg ikke burde være sint, for gode mennesker bærer ikke nag.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å korrigere regelen; hold varme. [Meta] Den regelen gir ikke rom for smerten din; kanskje vi kan navngi det som ble såret før vi dømmer sinnet."
    },
    "dp_therapist-self-awareness_case-nina_04": {
      "text": "Hvis jeg hviler mens noen trenger meg, føler jeg meg lat og egoistisk.",
      "suggestion": "[Internt] Legg merke til eventuell trang til å frikjenne; ha regelen i sikte. [Meta] Lat og egoistisk er harde ord; hør etter hvilken regel som sier at du må fortsette å gi før hvile er lov."
    },
    "dp_therapist-self-awareness_case-nina_05": {
      "text": "Jeg kjenner at tårene kommer, og vil beklage så du ikke føler deg belastet.",
      "suggestion": "[Internt] Legg merke til at klienten beskytter deg; mykne redningstrangen. [Meta] Selv tårene dine kommer med omsorg for meg; vi gir dem rom uten at du må passe på komforten min."
    },
    "dp_therapist-self-awareness_case-nina_06": {
      "text": "Kan vi heller snakke om hvordan jeg kan hjelpe mannen min, så timen i det minste blir nyttig?",
      "suggestion": "[Internt] Legg merke til draget mot å kolludere; stem inn igjen. [Meta] Vi kan inkludere ham, og først vil jeg være med det som er tungt for deg før nyttighet trekker oss bort fra deg."
    },
    "dp_therapist-self-awareness_case-nina_07": {
      "text": "Jeg burde være takknemlig; å si at jeg er ulykkelig får meg til å føle meg bortskjemt.",
      "suggestion": "[Internt] Legg bort sammenligning; forankre deg i medfølelse. [Meta] Takknemlighet og smerte kan begge være sanne. Den skamfulle delen virker redd for at det å ville mer gjør deg dårlig."
    },
    "dp_therapist-self-awareness_case-nina_08": {
      "text": "Jeg klarer meg; jeg trenger ikke hjelp, og å trenge det får meg til å føle meg svak.",
      "suggestion": "[Internt] Legg merke til draget mot uavhengighet; hold varme. [Meta] Styrke har båret deg langt; vi deler litt av byrden et øyeblikk og merker hva som kjennes svakt ved å ta imot."
    },
    "dp_therapist-self-awareness_case-nina_09": {
      "text": "Jeg føler at jeg stjeler tid fra folk som trenger hjelp mer.",
      "suggestion": "[Internt] Motstå forsikring; legg merke til rangeringssystemet. [Meta] Smerten din skyves så raskt bakerst i køen; legg merke til hva som skjer hvis den ikke må fortjene plassen sin."
    },
    "dp_therapist-self-awareness_case-nina_10": {
      "text": "Jeg vil beklage før hver tåre, fordi jeg er sikker på at jeg tar for mye plass.",
      "suggestion": "[Internt] Mykne stemmen; legg merke til redningstrangen. [Meta] Beklagelsen prøver å gjøre tårene mindre belastende; tårene er velkomne uten det arbeidet."
    },
    "dp_therapist-self-awareness_case-aisha_01": {
      "text": "Du svarte ikke med en gang, og jeg følte meg forlatt og dum for at det betydde så mye.",
      "suggestion": "[Internt] Forankre føtter/sete; forleng utpusten; stødig blikk; merk trangen til å love. [Meta] Jeg er her med deg nå; vi puster sammen og kjenner litt på hvor skummelt og blottstilt det var."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      "text": "Hvis du avlyser, tror jeg ikke jeg klarer å komme tilbake.",
      "suggestion": "[Internt] Følg aktivering; hold tempoet lavt; vær tydelig på rammer. [Meta] Avlysninger treffer hardt – vi skal snakke om hvordan vi kan planlegge for det, og holde oss nær det det vekker."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      "text": "Si at du bryr deg om meg, for jeg klarer ikke å merke det bare ved å sitte her.",
      "suggestion": "[Internt] Legg merke til trangen til å forsikre raskt; vær ekte. [Meta] Jeg bryr meg om opplevelsen din her, og jeg vil at vi skal forstå hva som gjør omsorg usikker akkurat nå."
    },
    "dp_therapist-self-awareness_case-aisha_04": {
      "text": "Når tomheten blir skarp, vil jeg skade meg selv så den stopper.",
      "suggestion": "[Internt] Sikkerhet først; finn ro; orienter deg mot sikkerhetsplanen. [Meta] Takk for at du sier det direkte. Først sikrer vi at du er trygg, og så berører vi bare kanten av den skarpe tomheten sammen."
    },
    "dp_therapist-self-awareness_case-aisha_05": {
      "text": "Jeg forventer hele tiden at du skal forlate meg, og så hater jeg meg selv for å trenge deg.",
      "suggestion": "[Internt] Forankre deg rundt trekk-og-skyv-bevegelsen; hold rammen varm. [Meta] Begge delene er her: den som gjør seg klar til at jeg skal gå, og den som skammer seg over å trenge meg."
    },
    "dp_therapist-self-awareness_case-aisha_06": {
      "text": "Jeg hater deg for å ha den grensen, og vær så snill, ikke forlat meg.",
      "suggestion": "[Internt] Reguler; mykne ansikt; hold grensene. [Meta] Jeg hører raseri mot grensen og bønnen om at jeg ikke må forsvinne. Jeg holder meg stødig mens vi gir rom til begge deler."
    },
    "dp_therapist-self-awareness_case-aisha_07": {
      "text": "Jeg sjekker hele tiden om du ser på meg, for hvis du ser bort, får jeg panikk.",
      "suggestion": "[Internt] Vær til stede; varmt blikk; rolig tempo. [Meta] Å bli sett betyr mye her; vi merker hva som roer seg når du kjenner meg sammen med deg."
    },
    "dp_therapist-self-awareness_case-aisha_08": {
      "text": "Vil du egentlig ha meg her, eller er du bare profesjonell?",
      "suggestion": "[Internt] Legg merke til stikket og ønsket om å bevise omsorg; hold tonen stødig. [Meta] Jeg vil være her med deg, og det betyr noe at profesjonell omsorg fortsatt kan kjennes usikker."
    },
    "dp_therapist-self-awareness_case-aisha_09": {
      "text": "Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      "suggestion": "[Internt] Hold sorg; unngå fiksing; dosér kontakt. [Meta] Jeg er oppriktig lei for at det skjedde – vi går varsomt og lar den følelsen bli sett litt sammen med meg."
    },
    "dp_therapist-self-awareness_case-aisha_10": {
      "text": "Lov at du ikke gir meg opp, selv når jeg blir for mye.",
      "suggestion": "[Internt] Unngå absolutte løfter; hold rammen; vær varm. [Meta] Jeg er forpliktet til dette arbeidet sammen med deg, og når frykten for å bli for mye kommer, fortsetter vi å navngi den sammen."
    },
    "dp_therapist-self-awareness_case-david_01": {
      "text": "Overbevis meg om at du er verdt tiden min før jeg kaster bort enda en time på prat.",
      "suggestion": "[Internt] Legg merke til stikket og prestasjonstrangen; mykne brystet. [Meta] Tiden din betyr noe, og jeg vil ikke gjøre dette til en salgspitch; jeg vil forstå hva som ville gjort dette verdt tiden."
    },
    "dp_therapist-self-awareness_case-david_02": {
      "text": "Suksessen min taler for seg; hun overreagerer når hun ikke klarer å henge med.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å diskutere overlegenhet; vær nysgjerrig. [Meta] Det er et sterkt behov for ikke å bli misforstått; vi ser på hva det treffer når hun kritiserer deg."
    },
    "dp_therapist-self-awareness_case-david_03": {
      "text": "Jeg trenger effektive løsninger, ikke en langsom rundtur i følelsene mine.",
      "suggestion": "[Internt] Legg bort trangen til å forsvare dybdearbeid; behold varme. [Meta] Vi kan holde dette fokusert, og den raskeste nyttige veien starter i øyeblikket presset tar over."
    },
    "dp_therapist-self-awareness_case-david_04": {
      "text": "Har du egentlig nok erfaring med noen som meg, eller er dette bare standardterapi?",
      "suggestion": "[Internt] Reguler stolthet og forsvar; mykne ansiktet. [Meta] Det er fair å spørre; vi avklarer hva som ville vist deg at dette er tilpasset nok til å være nyttig."
    },
    "dp_therapist-self-awareness_case-david_05": {
      "text": "Folk kaller meg narsissist fordi de er sjalu, og jeg vil at du skal si at de tar feil.",
      "suggestion": "[Internt] Legg merke til reaksjonen; hold jevn stemme. [Meta] Å bli stemplet sånn høres vondt ut. Vi undersøker hva ordet treffer i deg uten å gjøre merkelappen sann."
    },
    "dp_therapist-self-awareness_case-david_06": {
      "text": "Jeg gjør ikke sånne feil; andre folk mister ballen.",
      "suggestion": "[Internt] Unngå maktkamp; gå tilbake til virkningen og det som skjer inni. [Meta] Når skylden flyttes så raskt, vil jeg holde oss ute av en konkurranse og se på hva som ville kjennes eksponert hvis feilen var din."
    },
    "dp_therapist-self-awareness_case-david_07": {
      "text": "Jeg forventer raske resultater, ellers begynner jeg å føle meg eksponert her også.",
      "suggestion": "[Internt] Dempe hastverket; hold rammen. [Meta] Vi definerer det første lille resultatet du faktisk ville merke hjemme eller på jobb, uten å gjøre dette til enda en prestasjonstest."
    },
    "dp_therapist-self-awareness_case-david_08": {
      "text": "Ikke psykoanalyser meg eller gjør meg til et kasus.",
      "suggestion": "[Internt] Ta imot grensen; bruk mindre fagspråk. [Meta] Vi holder det enkelt og praktisk, og jeg sjekker med deg før jeg lager mening av noe."
    },
    "dp_therapist-self-awareness_case-david_09": {
      "text": "Dette må ikke bli som med forrige terapeut, som satt og nikket mens ingenting endret seg.",
      "suggestion": "[Internt] Legg merke til sammenligning; hold nærvær. [Meta] Det høres ut som terapi skuffet deg før; hva vil du ha annerledes her?"
    },
    "dp_therapist-self-awareness_case-david_10": {
      "text": "Kan vi holde fokuset på å fikse kona mi? Det er hun som stadig eskalerer.",
      "suggestion": "[Internt] Unngå kollusjon; allier deg på nytt med klienten. [Meta] Vi kan snakke om relasjonen, og jeg vil også hjelpe deg å få mer valgfrihet i øyeblikkene der du trekkes inn i eskalering."
    },
    "dp_therapist-self-awareness_case-marcus_01": {
      "text": "Jeg sier at det går bra fordi jeg ikke vet hva annet du vil ha fra meg.",
      "suggestion": "[Internt] Aksepter stillhet; slipp ønsket om å hente ut mer. [Meta] Du trenger ikke produsere noe for meg; vi kan starte med hvordan det går bra kjennes fra innsiden."
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      "text": "Prat endrer ikke det som skjedde, og jeg hater når terapeuter later som det gjør det.",
      "suggestion": "[Internt] Legg merke til forsvar på terapiens vegne; vær nøktern. [Meta] Du har rett i at prat ikke endrer det som skjedde. Jeg vil ikke late som; jeg vil se om dette rommet kan endre hvor alene du er med det."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      "text": "Mareritt er bare en del av det, og jeg vil ikke at du gjør et stort nummer ut av det.",
      "suggestion": "[Internt] Følg aktivering; titrér; ikke gjør traumet større enn klienten ønsker. [Meta] Jeg skal ikke gjøre det større enn du vil; vi kan bare merke hva som skifter når du nevner dem."
    },
    "dp_therapist-self-awareness_case-marcus_04": {
      "text": "Jeg vil helst holde meg for meg selv; folk vil som regel ha mer enn jeg har.",
      "suggestion": "[Internt] Respekter beskytteren; hold varme. [Meta] Det å holde deg for deg selv har beskyttet grensene dine; vi merker hva som kjennes som for mye fra folk."
    },
    "dp_therapist-self-awareness_case-marcus_05": {
      "text": "Følelser gjør ting verre; når de først starter, mister jeg resten av natten.",
      "suggestion": "[Internt] Doser; hold kontakten lett. [Meta] Vi kan bli ved kanten, bare ett lite signal, og så komme tilbake før det tar hele natten."
    },
    "dp_therapist-self-awareness_case-marcus_06": {
      "text": "Jeg stoler ikke på terapeuter; de vil alltid ha mer enn jeg kan gi.",
      "suggestion": "[Internt] Legg merke til stikket; ønsk skepsis velkommen. [Meta] Jeg er glad du sier det. Vi kan la mistilliten sette tempoet og sørge for at jeg ikke ber om mer enn du velger."
    },
    "dp_therapist-self-awareness_case-marcus_07": {
      "text": "Jeg husker ikke så mye, og jeg blir anspent når folk presser etter detaljer.",
      "suggestion": "[Internt] Senk tempoet; ikke press på for detaljer. [Meta] Vi trenger ikke detaljer for å respektere reaksjonen inni deg; spenningen kan få sette tempoet."
    },
    "dp_therapist-self-awareness_case-marcus_08": {
      "text": "Kan vi holde oss til praktiske tips; følelser gjør dette for løst, og løst kjennes utrygt.",
      "suggestion": "[Internt] Allier deg med behovet for struktur; ikke argumenter for dybde. [Meta] Praktisk struktur betyr noe her. Vi knytter følelsesarbeid til presise øyeblikk og holder det avgrenset nok til å kjennes trygt."
    },
    "dp_therapist-self-awareness_case-marcus_09": {
      "text": "Jeg ser ikke poenget hvis morgenen i morgen kjennes helt lik.",
      "suggestion": "[Internt] Kjenn draget mot håpløshet; hold forventningene ærlige. [Meta] Vi trenger ikke late som morgendagen er fikset; ett lite tegn kan hjelpe oss å vite om arbeidet er verdt å fortsette."
    },
    "dp_therapist-self-awareness_case-marcus_10": {
      "text": "Jeg klarer meg alene; det er sånn jeg har kommet meg hit.",
      "suggestion": "[Internt] Respekter uavhengighet; hold deg nær. [Meta] Du har overlevd ved å bære det alene. Hvis det hjelper, deler vi noen minutter av det uten å ta fra deg uavhengigheten."
    },
    "dp_empathic-understanding_case-sara_01": {
      "text": "Etter middag ser jeg rundt i leiligheten, og den kjennes enorm, som om stillheten har slukt meg.",
      "suggestion": "Etter middag får stillheten leiligheten til å kjennes enorm, og du kjenner deg slukt av ensomhet."
    },
    "dp_empathic-understanding_case-sara_02": {
      "text": "Jeg sier til venner på brunsj at det går fint, og så går jeg hjem utslitt av å late som.",
      "suggestion": "Du bruker kreftene på å høres fin ut for dem, og så kommer du hjem utslitt og trist."
    },
    "dp_empathic-understanding_case-sara_03": {
      "text": "Når navnet hans dukker opp på et felles bilde, synker magen før jeg rekker å puste.",
      "suggestion": "Navnet hans treffer først, og tapet skyller inn igjen før du rekker å samle deg."
    },
    "dp_empathic-understanding_case-sara_04": {
      "text": "Jeg hater at jeg tar meg selv i å sjekke telefonen, fortsatt med håp om at navnet hans skal stå der.",
      "suggestion": "Det er fortsatt et håp som strekker seg mot ham, og det gjør vondt å oppdage det i deg selv."
    },
    "dp_empathic-understanding_case-sara_05": {
      "text": "Å våkne er det verste — sjokket etter de første sekundene, før jeg husker.",
      "suggestion": "Morgenen treffer hardt når minnene braser inn etter et kort øyeblikk av letthet."
    },
    "dp_empathic-understanding_case-sara_06": {
      "text": "Venner sier stadig at tid hjelper, men jeg blir flau over at jeg fortsatt er så hudløs.",
      "suggestion": "Du kjenner deg blottstilt av hvor hudløs sorgen fortsatt er, med flauheten liggende oppå smerten."
    },
    "dp_empathic-understanding_case-sara_07": {
      "text": "Jeg holder meg opptatt så jeg slipper å tenke, og så krasjer jeg om kvelden.",
      "suggestion": "Opptattheten bedøver på dagtid, og om kvelden flommer tristheten tilbake."
    },
    "dp_empathic-understanding_case-sara_08": {
      "text": "Jeg vil ikke belaste noen med dette, så jeg gjør stemningen lett og går hjem enda mer ensom.",
      "suggestion": "Du beskytter andre mot sorgen, og da blir du mer alene med den."
    },
    "dp_empathic-understanding_case-sara_09": {
      "text": "Når jeg går forbi par som holder hender, kjennes det som om alle ble valgt bortsett fra meg.",
      "suggestion": "Å se par vekker den skarpe følelsen av å være den som ikke ble valgt."
    },
    "dp_empathic-understanding_case-sara_10": {
      "text": "En del av meg tenker at han dro fordi jeg egentlig ikke er elskbar.",
      "suggestion": "At han dro, har vekket en smertefull tvil om du er elskbar."
    },
    "dp_empathic-understanding_case-michael_01": {
      "text": "Når noen påpeker en feil, føler jeg meg ydmyket og smeller.",
      "suggestion": "En korrigering treffer som ydmykelse, og sinnet kommer fort."
    },
    "dp_empathic-understanding_case-michael_02": {
      "text": "Når hun sier «ro deg ned», kjennes det som om hun behandler meg som et problem.",
      "suggestion": "De ordene lander som om du blir håndtert eller avfeid, og sinnet kommer fort."
    },
    "dp_empathic-understanding_case-michael_03": {
      "text": "Etter at jeg roper, blir jeg kvalm av skam når jeg ser ansiktet hennes.",
      "suggestion": "Sinnet brenner ut, og så treffer skammen når du ser smerten i ansiktet hennes."
    },
    "dp_empathic-understanding_case-michael_04": {
      "text": "Jeg skanner hvert møterom etter respektløshet før jeg engang setter meg.",
      "suggestion": "Du kommer inn allerede på vakt etter respektløshet, anspent før noen har sagt noe."
    },
    "dp_empathic-understanding_case-michael_05": {
      "text": "Når noen spør om noe jeg ikke kan svare på, blir rommet større og jeg føler meg liten.",
      "suggestion": "Det å ikke vite gjør at du føler deg liten og blottstilt foran alle."
    },
    "dp_empathic-understanding_case-michael_06": {
      "text": "Jeg sitter oppe og overforbereder presentasjonen så ingen kan ta meg i å være usikker om morgenen.",
      "suggestion": "Overforberedelsen beskytter deg mot den blottstilte følelsen av å bli tatt i å være usikker."
    },
    "dp_empathic-understanding_case-michael_07": {
      "text": "Tonefallet til kona mi kan tenne meg før jeg vet hva hun egentlig sa.",
      "suggestion": "Tonefallet hennes kan lande som en nedvurdering før ordene helt har kommet fram."
    },
    "dp_empathic-understanding_case-michael_08": {
      "text": "Jeg hater å beklage, for det føles som å gi henne bevis på at jeg er svak.",
      "suggestion": "Å beklage kjennes som å gi fra seg terreng og bli sett som svak."
    },
    "dp_empathic-understanding_case-michael_09": {
      "text": "Jeg sier til meg selv at jeg bare holder standarden, men egentlig føler jeg meg anklaget.",
      "suggestion": "Du rammer det inn som standarder, og under ligger stikket av å føle seg anklaget."
    },
    "dp_empathic-understanding_case-michael_10": {
      "text": "Jeg ligger våken og spiller om igjen det jeg sa til kona, og hater blikket hennes.",
      "suggestion": "Om natten blir reprisen til anger over smerten du så i ansiktet hennes."
    },
    "dp_empathic-understanding_case-jason_01": {
      "text": "Når det er min tur, blir hodet blankt og halsen strammer seg.",
      "suggestion": "Å være i rampelyset gjør at hodet blir blankt og halsen strammer seg."
    },
    "dp_empathic-understanding_case-jason_02": {
      "text": "Før jeg snakker, er jeg allerede sikker på at folk kan se hvor klein jeg er.",
      "suggestion": "Du føler deg dømt før du i det hele tatt har fått en sjanse til å bli kjent."
    },
    "dp_empathic-understanding_case-jason_03": {
      "text": "Jeg vil si ja til planer, men så bygger frykten seg opp, og jeg avlyser.",
      "suggestion": "Du vil ha kontakt, og frykten bygger seg opp til det kjennes tryggere å avlyse."
    },
    "dp_empathic-understanding_case-jason_04": {
      "text": "Komplimenter fester seg ikke; jeg venter bare på at folk skal ta dem tilbake.",
      "suggestion": "Ros berører deg et øyeblikk, før selvtvilen gjør seg klar til at den skal forsvinne."
    },
    "dp_empathic-understanding_case-jason_05": {
      "text": "Jeg skriver om en enkel melding i en halvtime og klarer likevel ikke å trykke send.",
      "suggestion": "Selv en enkel melding blir ladet med frykt for å gjøre feil."
    },
    "dp_empathic-understanding_case-jason_06": {
      "text": "Jeg spiser lunsj ved pulten så jeg slipper å gå inn på pauserommet.",
      "suggestion": "Å bli ved pulten holder deg unna blikkene og vurderingen du forventer der inne."
    },
    "dp_empathic-understanding_case-jason_07": {
      "text": "Etter at jeg har snakket i et møte, spiller jeg av hvert ord til jeg krymper meg.",
      "suggestion": "Å snakke gjør deg blottstilt, og reprisen holder skammen i gang etterpå."
    },
    "dp_empathic-understanding_case-jason_08": {
      "text": "I grupper blir jeg stille og føler meg utenfor sirkelen før jeg har sagt noe.",
      "suggestion": "Du kjenner deg utenfor sirkelen før stemmen din har fått en vei inn."
    },
    "dp_empathic-understanding_case-jason_09": {
      "text": "Hendene mine skjelver når jeg presenterer meg, og jeg vil forsvinne.",
      "suggestion": "Introduksjoner gir en synlig skjelving og et ønske om å forsvinne."
    },
    "dp_empathic-understanding_case-jason_10": {
      "text": "Søndagskveldene kjennes smertefullt ensomme fordi uka starter uten at noen venter på meg.",
      "suggestion": "Søndagskveldene bringer en tung ensomhet, som om uka åpner seg uten at noen venter på deg."
    },
    "dp_empathic-understanding_case-laura_01": {
      "text": "De fleste dager føles flate, som om jeg ser på livet mitt bak glass.",
      "suggestion": "Livet kjennes dempet og langt unna, som om du kan se det, men ikke helt nå det."
    },
    "dp_empathic-understanding_case-laura_02": {
      "text": "Hevede stemmer får meg til å fryse før jeg vet om noen er sinte på meg.",
      "suggestion": "Hevede stemmer trekker deg inn i alarm før du rekker å sortere hva som skjer."
    },
    "dp_empathic-understanding_case-laura_03": {
      "text": "Når noen er vennlige mot meg, trekker jeg meg unna før jeg klarer å stole på det.",
      "suggestion": "Vennlighet kommer nær, og noe i deg trekker seg raskt tilbake for å være trygt før tillit rekker å formes."
    },
    "dp_empathic-understanding_case-laura_04": {
      "text": "Jeg drikker om kvelden fordi det er den eneste måten hodet blir stille på.",
      "suggestion": "Drikkingen gir litt stillhet når hodet ikke lar deg hvile."
    },
    "dp_empathic-understanding_case-laura_05": {
      "text": "Jeg vil ha nærhet, og så blir jeg nummen idet det begynner å kjennes virkelig.",
      "suggestion": "Ønsket om nærhet er der, og nummenheten kommer når det begynner å kjennes virkelig."
    },
    "dp_empathic-understanding_case-laura_06": {
      "text": "Jeg får dårlig samvittighet for at jeg ikke føler så mye, som om jeg feiler som menneske.",
      "suggestion": "Du får skyldfølelse for nummenheten, som om det at du ikke føler nok betyr at noe er galt med deg."
    },
    "dp_empathic-understanding_case-laura_07": {
      "text": "Jeg våkner allerede anspent og lytter etter trøbbel før dagen har startet.",
      "suggestion": "Dagen begynner med deg på vakt, ventende på fare før noe har skjedd."
    },
    "dp_empathic-understanding_case-laura_08": {
      "text": "Jeg unngår filmer med krangling og slåssing fordi frykten treffer før jeg rekker å tenke.",
      "suggestion": "Konfliktscener trekker deg inn i gammel frykt før tankene rekker å følge med."
    },
    "dp_empathic-understanding_case-laura_09": {
      "text": "Gode nyheter når ikke inn; de kjennes dempet før jeg rekker å glede meg.",
      "suggestion": "Gode ting lander svakt, som om tåken demper dem før de kan bli dine."
    },
    "dp_empathic-understanding_case-laura_10": {
      "text": "Jeg husker ikke hva jeg liker lenger; selv fritid kjennes som en ny oppgave.",
      "suggestion": "Glede kjennes langt unna når selv fritid har blitt noe du må komme deg gjennom."
    },
    "dp_empathic-understanding_case-carlos_01": {
      "text": "Et skjevt blikk over bordet fyrer meg opp før jeg engang vet hva det traff.",
      "suggestion": "Det blikket tenner varmen raskt, før du rekker å kjenne hvilken del av deg som ble truffet."
    },
    "dp_empathic-understanding_case-carlos_02": {
      "text": "Jeg hater å huske øyeblikket da sønnen min så meg smelle igjen den døra.",
      "suggestion": "At han så det, bringer både smerte og anger, særlig fordi han er den du mest vil beskytte."
    },
    "dp_empathic-understanding_case-carlos_03": {
      "text": "Hvis jeg gir meg foran folk, føles det som om jeg ikke er noen.",
      "suggestion": "Å gi seg kjennes som å forsvinne, som om verdien din faller når du senker garden."
    },
    "dp_empathic-understanding_case-carlos_04": {
      "text": "Jeg går rundt og knytter meg når jeg er sint, som om jeg må brenne det ut.",
      "suggestion": "Sinnet skyter gjennom deg og driver deg til å gå det av deg før det eksploderer."
    },
    "dp_empathic-understanding_case-carlos_05": {
      "text": "Etter at jeg eksploderer, skammer jeg meg når alle blir stille og forsiktige.",
      "suggestion": "Etter smellet bringer den forsiktige stillheten deres skam og anger."
    },
    "dp_empathic-understanding_case-carlos_06": {
      "text": "Jeg stoler ikke på ro; det kjennes som å stå der uten rustning.",
      "suggestion": "Ro kjennes blottstilt, som om det å senke garden lar deg stå ubeskyttet."
    },
    "dp_empathic-understanding_case-carlos_07": {
      "text": "Når jeg mykner med sønnen min, hører jeg farens stemme kalle meg svak.",
      "suggestion": "Mykheten med sønnen din vekker den gamle stemmen som kaller ømhet svakhet."
    },
    "dp_empathic-understanding_case-carlos_08": {
      "text": "Jeg vil ha respekt mer enn noe annet, for uten det føler jeg meg som ingenting.",
      "suggestion": "Respekt kjennes bundet til verdien din, og å miste den kjennes som å bli ingenting."
    },
    "dp_empathic-understanding_case-carlos_09": {
      "text": "Jeg slår i vegger i stedet for folk, og jeg hater at det fortsatt skremmer dem.",
      "suggestion": "Veggen tar slaget, og du kjenner fortsatt frykten det skaper rundt deg."
    },
    "dp_empathic-understanding_case-carlos_10": {
      "text": "Jeg vil at familien min skal føle seg trygg med meg, og jeg hater at de fortsatt skvetter.",
      "suggestion": "Du bryr deg dypt om tryggheten deres, og det gjør vondt å se at frykten fortsatt bor i dem."
    },
    "dp_empathic-understanding_case-nina_01": {
      "text": "Å be om hjelp gir meg skyldfølelse, selv når jeg er helt utslitt.",
      "suggestion": "Behov vekker skyld, særlig når utmattelsen sier at du ikke kan bære alt videre."
    },
    "dp_empathic-understanding_case-nina_02": {
      "text": "Jeg gjør alt for alle og føler meg fortsatt usynlig på mitt eget kjøkken.",
      "suggestion": "Du bærer så mye hjemme og kjenner deg likevel usett der du mest ønsker å bety noe."
    },
    "dp_empathic-understanding_case-nina_03": {
      "text": "Når jeg sier nei, knyter magen seg mens jeg ser for meg at alle blir skuffet.",
      "suggestion": "Et nei vekker uro og frykten for at folk skal kjenne seg sviktet av deg."
    },
    "dp_empathic-understanding_case-nina_04": {
      "text": "Jeg holder meg i gang så jeg slipper å kjenne hvor bitter jeg er.",
      "suggestion": "Aktiviteten holder deg unna bitterheten og tristheten under den."
    },
    "dp_empathic-understanding_case-nina_05": {
      "text": "Når jeg setter meg for å hvile, kaller en stemme meg lat i løpet av sekunder.",
      "suggestion": "Hvile vekker raskt en skamfull stemme, som om det å stoppe betyr å feile."
    },
    "dp_empathic-understanding_case-nina_06": {
      "text": "Jeg unnskylder selv små forespørsler, som om behovene mine er til bry.",
      "suggestion": "Selv små behov pakkes inn i unnskyldning og frykt for å være en belastning."
    },
    "dp_empathic-understanding_case-nina_07": {
      "text": "Noen ganger eksploderer jeg, og så føler jeg meg forferdelig for å bli den sinte.",
      "suggestion": "Etter å ha holdt så mye inne, etterlater smellet deg skamfull over ditt eget sinne."
    },
    "dp_empathic-understanding_case-nina_08": {
      "text": "Jeg drømmer om at noen tar vare på meg, og så føler jeg meg egoistisk for å ville det.",
      "suggestion": "Det finnes en stille lengsel etter å bli ivaretatt for en gangs skyld, blandet med skyld for å trenge det."
    },
    "dp_empathic-understanding_case-nina_09": {
      "text": "Jeg sammenligner meg med andre mødre og går derfra med følelsen av å mislykkes.",
      "suggestion": "Sammenligning etterlater deg med følelsen av å ikke være god nok og skam over alt du savner."
    },
    "dp_empathic-understanding_case-nina_10": {
      "text": "Hodet banker når jeg blir overveldet, men jeg sier fortsatt ja.",
      "suggestion": "Presset viser seg som smerte mens du fortsetter å gå forbi grensene dine."
    },
    "dp_empathic-understanding_case-aisha_01": {
      "text": "Hvis du ser bort mens jeg snakker, slår panikken inn som om jeg har blitt sluppet.",
      "suggestion": "Et blikk bort lander som forlatthet, og panikken skyller inn rundt følelsen av å bli sluppet."
    },
    "dp_empathic-understanding_case-aisha_02": {
      "text": "Når en melding ikke kommer, låser brystet seg, og jeg får ikke puste.",
      "suggestion": "Stillheten lander i brystet som panikk, som om du brått blir forlatt."
    },
    "dp_empathic-understanding_case-aisha_03": {
      "text": "Jeg hører meg selv trygle «ikke gå», og så roper jeg plutselig.",
      "suggestion": "Bønnen om nærhet slår over i sinne når frykten for å bli forlatt skyter i været."
    },
    "dp_empathic-understanding_case-aisha_04": {
      "text": "Tomheten kjennes som et hull i brystet som bare trekker.",
      "suggestion": "Det er en dyp, trekkende tomhet i brystet som verker og ikke slipper taket."
    },
    "dp_empathic-understanding_case-aisha_05": {
      "text": "Når jeg blir nummen, klorer jeg meg i huden fordi nummenhet kjennes skumlere enn smerte.",
      "suggestion": "Smerten blir en måte å bryte gjennom nummenheten på når tomheten kjennes uutholdelig."
    },
    "dp_empathic-understanding_case-aisha_06": {
      "text": "Hvis noen avlyser, vil jeg gi opp før de kan forlate meg igjen.",
      "suggestion": "En avlysning kjennes som å bli forlatt, og å trekke seg unna begynner å føles tryggere."
    },
    "dp_empathic-understanding_case-aisha_07": {
      "text": "Jeg hater meg selv etter at jeg eksploderer, selv om jeg var livredd først.",
      "suggestion": "Etter sinnet vender skammen seg mot deg og skjuler skrekken som kom først."
    },
    "dp_empathic-understanding_case-aisha_08": {
      "text": "Jeg tester folk for å se om de bryr seg, og så hater jeg meg selv for å trenge bevis.",
      "suggestion": "Testingen blir en måte å lete etter bevis på at du betyr noe, og etterpå blir skammen liggende."
    },
    "dp_empathic-understanding_case-aisha_09": {
      "text": "Når en time slutter, tipper rommet, og jeg blir svimmel og forlatt.",
      "suggestion": "Avslutninger får rommet til å tippe og bringer frykt, sorg og følelsen av å bli forlatt."
    },
    "dp_empathic-understanding_case-aisha_10": {
      "text": "Jeg vet ikke hvem jeg er når ingen er nær nok til å forankre meg.",
      "suggestion": "Uten noen nær kjennes du tom og uten feste i deg selv."
    },
    "dp_empathic-understanding_case-david_01": {
      "text": "Å bli kalt kald får meg til å stritte imot fordi det høres for nært sannheten ut.",
      "suggestion": "Det ordet svir fordi det berører frykten for at det kanskje er sant."
    },
    "dp_empathic-understanding_case-david_02": {
      "text": "Hvis jeg ikke er på topp i alt, føler jeg meg verdiløs og blottstilt.",
      "suggestion": "Å ikke være på topp kjennes som å miste verdi og stå uten noe å gjemme deg bak."
    },
    "dp_empathic-understanding_case-david_03": {
      "text": "Jeg ramser opp prestasjoner når jeg føler meg angrepet, som om merittlisten må forsvare meg.",
      "suggestion": "Prestasjonene blir rustning når du føler deg dømt og blottstilt."
    },
    "dp_empathic-understanding_case-david_04": {
      "text": "Ros føles godt, så renner det ut igjen, og jeg trenger mer bevis.",
      "suggestion": "Beundring lander et øyeblikk, renner ut igjen og etterlater deg med behov for flere bevis."
    },
    "dp_empathic-understanding_case-david_05": {
      "text": "Når jeg innrømmer at jeg tar feil, føler jeg meg ribbet og liten.",
      "suggestion": "Å eie en feil kjennes utleverende, som om status og beskyttelse faller samtidig."
    },
    "dp_empathic-understanding_case-david_06": {
      "text": "Når barna mine gråter, blir jeg utålmodig, og etterpå hater jeg hvor hard jeg høres ut.",
      "suggestion": "Tårene deres vekker utålmodighet og selvforakt, fordi du hører hardheten i deg selv."
    },
    "dp_empathic-understanding_case-david_07": {
      "text": "Etter at affæren kom fram, føles huset kaldt, og hvert rom minner meg om at jeg mislyktes.",
      "suggestion": "Hjemmet føles tappet for varme nå, og kulden peker deg stadig tilbake på følelsen av å ha mislyktes."
    },
    "dp_empathic-understanding_case-david_08": {
      "text": "Fars krav styrer meg fortsatt; selv når jeg lykkes, føles det som jeg så vidt holder tritt.",
      "suggestion": "De kravene driver deg fortsatt innenfra, så selv suksess kjennes mer som midlertidig lettelse enn som nok."
    },
    "dp_empathic-understanding_case-david_09": {
      "text": "Noen ganger sitter jeg her og tenker at terapi er bortkastet, og så føler jeg meg både overlegen og desperat.",
      "suggestion": "En del av deg avfeier dette som meningsløst, mens en annen del er desperat etter at noe skal endre seg."
    },
    "dp_empathic-understanding_case-david_10": {
      "text": "Hvis jeg bare er ordinær i noe, føles det som om jeg forsvinner.",
      "suggestion": "Å være ordinær kjennes som å forsvinne, som om verdi avhenger av å skille seg ut."
    },
    "dp_empathic-understanding_case-marcus_01": {
      "text": "De fleste dager fullfører jeg rutinene og kjenner nesten ingenting bak ansiktet.",
      "suggestion": "Rutinene fortsetter mens nummenheten ligger mellom deg og dagen."
    },
    "dp_empathic-understanding_case-marcus_02": {
      "text": "Så, helt ut av det blå, treffer en bølge meg, og jeg finner ikke tilbake til rommet.",
      "suggestion": "Følelsen kommer brått og drar deg ut av nåtiden før du rekker å finne fotfeste."
    },
    "dp_empathic-understanding_case-marcus_03": {
      "text": "Mareritt gjør meg oppskrudd og tom, som om rommet ikke er trygt.",
      "suggestion": "Mareritt rykker deg våken, oppskrudd og tom, med rommet fortsatt utrygt."
    },
    "dp_empathic-understanding_case-marcus_04": {
      "text": "Jeg unngår folk fordi det føles tryggere enn å forklare hvorfor jeg forsvinner.",
      "suggestion": "Avstanden beskytter deg mot slitet med å forklare deg og risikoen for at noen kommer for nær."
    },
    "dp_empathic-understanding_case-marcus_05": {
      "text": "Etter jobb sitter jeg i mørket fordi lys og stemmer føles som for mye.",
      "suggestion": "Mørket gir deg et dempet sted der dagen ikke kan kreve mer av deg."
    },
    "dp_empathic-understanding_case-marcus_06": {
      "text": "Når noe godt skjer, kjennes det langt borte, som om det tilhører noen andre.",
      "suggestion": "Det gode kjennes fjernt, nesten utilgjengelig, selv når det skjer med deg."
    },
    "dp_empathic-understanding_case-marcus_07": {
      "text": "Et dørsmell kan kaste meg tilbake før jeg vet hvor jeg er.",
      "suggestion": "Plutselig lyd slipper deg rett inn i alarm før rommet her og nå er helt tilbake."
    },
    "dp_empathic-understanding_case-marcus_08": {
      "text": "Når familien ringer, lar jeg det ringe fordi jeg ikke klarer å bære bekymringen deres også.",
      "suggestion": "Telefonen kjennes som mer vekt, og å la den ringe holder bekymringen deres på avstand."
    },
    "dp_empathic-understanding_case-marcus_09": {
      "text": "Noen netter tenker jeg at ingen ville lagt merke til det om jeg ikke våknet.",
      "suggestion": "De nettene høres dypt håpløse ut, som om livet ditt kjennes usett og nesten ikke teller."
    },
    "dp_empathic-understanding_case-marcus_10": {
      "text": "Jeg vil ha kontakt, men når noen kommer nær, føler jeg meg trengt og stenger av.",
      "suggestion": "Du står mellom lengselen etter nærhet og følelsen av å bli trengt når nærheten faktisk kommer."
    },
    "dp_empathic-affirmation-validation_case-sara_01": {
      "text": "Jeg sjekker kontoene hans på sosiale medier selv om det knuser meg.",
      "suggestion": "Selvsagt fortsetter du å sjekke; etter et sånt tap vil hvem som helst strekke seg etter kontakt, selv om det gjør vondt."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      "text": "Jeg sier stadig «det går bra», selv når øynene er fulle av tårer.",
      "suggestion": "Selvsagt prøver du å holde deg sammen; du har båret så mye alene."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      "text": "Hvis jeg hadde vært morsommere eller enklere, hadde han kanskje blitt.",
      "suggestion": "Ikke rart du leter etter hva du kunne gjort; selvbebreidelse prøver å gi smerten mening."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      "text": "Om natten blir det for stille, og jeg begynner å kjenne det som om jeg aldri egentlig var ønsket.",
      "suggestion": "Stillheten kan gjøre fraværet til et bevis på at du ikke var ønsket; den følelsen gir mening i ensomheten dette tapet har åpnet."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      "text": "Jeg begynte å skrive til ham og slettet det et titalls ganger.",
      "suggestion": "Ikke rart én del strekker seg etter kontakt mens en annen beskytter deg mot mer smerte."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      "text": "Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      "suggestion": "Det er forståelig at oppvåkningen kan slå så hardt; bråheten i seg selv gjør tapet nytt på nytt."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      "text": "Jeg beklager når jeg begynner å gråte, som om sorgen min tar for mye plass.",
      "suggestion": "Ikke rart du bekymrer deg for å ta plass når du har lært å holde smerten håndterlig for andre; sorgen din hører hjemme her."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      "text": "Jeg stirrer på maten og skammer meg over at selv det å spise er vanskelig.",
      "suggestion": "Forståelig nok kan sorg ta appetitten; skammen over det blir en ekstra byrde du ikke fortjener."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      "text": "Venner inviterer meg ut, og jeg finner unnskyldninger fordi jeg ikke vil gråte offentlig.",
      "suggestion": "Det er forståelig at du beskytter deg mot mer smerte, samtidig som en annen del lengter etter kontakt."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      "text": "Etter dette bruddet tenker en del av meg at kjærlighet må være for andre, ikke for meg.",
      "suggestion": "Når dette tapet treffer den gamle ensomheten, er det ikke rart at den tanken dukker opp; det høres fryktelig ensomt ut."
    },
    "dp_empathic-affirmation-validation_case-michael_01": {
      "text": "Når trafikken er dårlig og noen skjærer meg av, blir ansiktet varmt og jeg eksploderer.",
      "suggestion": "Ikke rart systemet ditt skyter til forsvar når du føler deg respektløst behandlet eller presset inn i et hjørne."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      "text": "Hvis jeg ikke har svaret, føler jeg meg avslørt og bløffer.",
      "suggestion": "Slik du har blitt vurdert og målt, er det klart at det å ikke vite kan kjennes som å bli avslørt."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      "text": "Når jeg beklager, kjennes det som å knele foran noen som kommer til å bruke det mot meg.",
      "suggestion": "Når svakhet så raskt ble straffet, kan en unnskyldning forståelig nok kjennes som overgivelse mer enn reparasjon."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      "text": "Hjemme kan et sukk eller en himling med øynene sette meg av før jeg rekker å tenke.",
      "suggestion": "Ikke rart de små signalene svir; de kan lande som respektløshet og tenne gammel smerte."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      "text": "Jeg fører regnskap i hodet så ingen har noe å ta meg på.",
      "suggestion": "Det er forståelig at du holder oversikt når det å havne under noen har kjentes så truende."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      "text": "Når barnet mitt spør hvorfor jeg er sint, skammer jeg meg og føler meg fastlåst.",
      "suggestion": "Selvsagt treffer skammen der; det viser hvor mye du bryr deg om å være den faren du vil være."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      "text": "Å smelle med døra føles fælt etterpå, men i øyeblikket slipper jeg å føle meg liten.",
      "suggestion": "Dørsmellingen gir mening som et skjold mot den lille, ydmykede følelsen, selv om den koster deg etterpå."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      "text": "Hvis noen utfordrer meg offentlig, dobler jeg innsatsen selv om jeg tar feil.",
      "suggestion": "Når det å havne under noen kjennes truende, kan det å stå hardere på sitt føles som beskyttelse."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      "text": "Jeg hater at jeg trenger terapi; det føles som bevis på at jeg ikke klarer å håndtere mitt eget hjem.",
      "suggestion": "Når styrke så lenge har betydd å klare ting alene, er det klart at hjelp kan kjennes blottstillende i stedet for lindrende."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      "text": "Etter at jeg eksploderer hjemme, ligger jeg våken og ser ansiktene deres for meg mens jeg hater meg selv.",
      "suggestion": "Ikke rart skammen holder deg våken; å se frykten deres ville gjort vondt for enhver som ønsker å være tryggere for familien sin."
    },
    "dp_empathic-affirmation-validation_case-jason_01": {
      "text": "Å høre navnet mitt i et møte kjennes som om en lyskaster brått skrus på.",
      "suggestion": "Det gir mening at alarmen går når det å bli lagt merke til har kjentes mer farlig enn velkomment."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      "text": "Jeg holder blikket på gulvet så ingen får en grunn til å se på meg.",
      "suggestion": "Å holde blikket nede gir mening som et langvarig forsøk på å slippe andres granskende blikk."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      "text": "Jeg later som jeg tekster så jeg har et sted å gjemme meg under småprat.",
      "suggestion": "Den dekningen gir mening når vanlig småprat kjennes som å bli blottstilt."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      "text": "Når folk ler høflig, antar jeg at de prøver å komme seg unna meg.",
      "suggestion": "Den mistanken gir mening i en skam som venter avvisning før kontakt får en sjanse."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      "text": "Komplimenter preller av; en del av meg vil tro på dem, men den mistenksomme delen vinner.",
      "suggestion": "Ikke rart ros er vanskelig å stole på når tankene dine angriper deg så ofte, selv når en del av deg vil ta den inn."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      "text": "Etter at jeg har snakket i en gruppe, spiller jeg av hver setning og skammer meg for å høres klein ut.",
      "suggestion": "Ikke rart du spiller det om igjen når tilhørighet kjennes så skjør; skammen prøver å hindre at du blir såret igjen."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      "text": "Trange rom gjør brystet stramt, og jeg leter etter døra.",
      "suggestion": "Ikke rart trange rom får deg til å lete etter utganger når oppmerksomhet kjennes utrygt."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      "text": "Jeg skanner hvert rom etter hvem som får til mer enn meg, og så føler jeg meg defekt.",
      "suggestion": "Sammenligningen gir mening som et forsøk på å finne plassen din, og den gjør vondt fordi skammen alltid plasserer deg nederst."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      "text": "Stemmen skjelver når jeg presenterer meg, og etterpå skammer jeg meg over at alle kan høre det.",
      "suggestion": "Forståelig nok viser skjelvingen hvor blottstilt det øyeblikket kjennes, med så mye frykt for å bli dømt."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      "text": "Noen netter ligger jeg der og er sikker på at jeg alltid kommer til å være alene fordi jeg er for klein til å elskes.",
      "suggestion": "Ikke rart nettene kjennes tunge når skam gjør ensomheten til en livsdom."
    },
    "dp_empathic-affirmation-validation_case-laura_01": {
      "text": "De fleste dager føles flate, som om jeg er bak glass og ser livet skje.",
      "suggestion": "Det er forståelig at livet kjennes dempet etter det du har vært gjennom."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      "text": "Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      "suggestion": "Ikke rart hevede stemmer kan sende deg bort i hodet; den reaksjonen lærte å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      "text": "Når noen er snille mot meg, blir jeg nummen eller mistenksom.",
      "suggestion": "Ikke rart vennlighet kjennes forvirrende når trygghet har vært usikker; nummenhet og mistanke har vært en del av beskyttelsen."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      "text": "Jeg tar lange dusjer fordi varmt vann kjennes tryggere enn å be noen om trøst.",
      "suggestion": "Selvsagt søker du liten, trygg varme når menneskelig trøst har kjentes farlig eller upålitelig."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      "text": "Selv på fine dager ser alt fortsatt grått ut, og jeg klandrer meg selv for at jeg ikke føler meg takknemlig.",
      "suggestion": "Ikke rart selv gode dager ikke bare kan nå inn på kommando etter så mye avstengning for å overleve."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      "text": "Berøring skremmer meg, selv når den er vennlig, og etterpå føler jeg meg ødelagt for å reagere sånn.",
      "suggestion": "Ikke rart reaksjonen kommer før tilliten rekker fram; det er lært beskyttelse, ikke et tegn på at du er ødelagt."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      "text": "Når tristheten presser seg fram, blir jeg redd for at jeg ikke kommer tilbake fra den.",
      "suggestion": "Forståelig nok kommer den frykten når følelser en gang kom uten trøst; å stenge dem ned hjalp deg å overleve."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      "text": "Jeg beklager med en gang jeg trenger trøst, som om det allerede er for mye å ønske det.",
      "suggestion": "Selvsagt kan det å trenge trøst kjennes farlig etter at nærhet har vært utrygt; behovet er menneskelig, ikke for mye."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      "text": "Før malte jeg og lagde mat; nå føles selv det å velge musikk som et ork.",
      "suggestion": "Etter år med å stenge av for å overleve, er det forståelig at glede kjennes fjern i stedet for lett tilgjengelig."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      "text": "Selv i senga ligger skuldrene oppe, som om noen kan komme inn døra.",
      "suggestion": "Ikke rart hvile ikke kommer lett når en del av deg lærte å stå på vakt mot fare."
    },
    "dp_empathic-affirmation-validation_case-carlos_01": {
      "text": "Ett skjevt blikk, og kjeven låser seg som om jeg må være klar.",
      "suggestion": "Den raske beredskapen gir mening med en historie der respektløshet kunne bli til fare eller ydmykelse."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      "text": "Hvis jeg ikke kommer inn sterk, tråkker folk over meg.",
      "suggestion": "Med bakgrunnen din er det klart at det å stå støtt har føltes som trygghet."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      "text": "På kampen til barnet mitt ropte jeg til dommeren og følte meg dårlig etterpå.",
      "suggestion": "Hvem som helst ville hatt vondt av det; angeren viser hvor viktig det er for deg å være den faren du vil være."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      "text": "Når noen stiller spørsmål ved meg, føler jeg meg liten, og så hever jeg stemmen mer enn jeg mente.",
      "suggestion": "Forståelig nok rykker sinnet inn når spørsmål treffer den gamle følelsen av å bli gjort liten."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      "text": "Jeg knytter nevene og går frem og tilbake; det føles som en kamp er på vei.",
      "suggestion": "Ikke rart never og bein gjør seg klare når det kjennes som en kamp kan komme."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      "text": "Jeg ødelegger ting og angrer etterpå når jeg ser hvor redde alle ser ut.",
      "suggestion": "Angeren betyr noe; ikke rart frykten deres gjør vondt å se når det å beskytte familien er en del av hvem du vil være."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      "text": "Kollegaene holder avstand etter at jeg eksploderer, og jeg kjenner skam selv om jeg later som jeg ikke bryr meg.",
      "suggestion": "Ikke rart skam og forsvar kommer samtidig; en del av deg blir såret av avstanden, mens en annen del prøver å skjule det."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      "text": "Jeg går ut av rommet for å ikke eksplodere, og så føler jeg meg svak for å ha gått.",
      "suggestion": "Selvsagt kan det å gå kjennes svakt når styrke har betydd å stå på ditt."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      "text": "Ro kjennes mistenkelig, som om noen legger opp til at jeg skal bli tråkket på.",
      "suggestion": "Forståelig nok kan ro kjennes blottstillende mer enn trygt etter det du har lært; mistanken har prøvd å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      "text": "Mer enn noe annet vil jeg at familien min skal føle seg trygg med meg.",
      "suggestion": "Selvsagt betyr ønsket om at de skal være trygge mye; det er et tydelig tegn på omsorgen og forpliktelsen din."
    },
    "dp_empathic-affirmation-validation_case-nina_01": {
      "text": "Hvis jeg setter meg ned før alt er gjort, begynner skyldfølelsen å ramse opp hva jeg burde gjøre.",
      "suggestion": "Den skyldfølelsen gir mening under den gamle regelen om at verdien din måtte fortjenes gjennom nytte."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      "text": "Å si nei gjør meg urolig hele dagen, som om én grense kan gjøre alle skuffet over meg.",
      "suggestion": "Ikke rart ett nei kan true følelsen av tilhørighet når gamle regler sa at omsorg måtte fortjenes ved å gjøre andre til lags."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      "text": "Jeg gjør alt og føler meg fortsatt usynlig, og så hater jeg meg selv for å ønske at noen skal legge merke til det.",
      "suggestion": "Selvsagt vil du bli lagt merke til; det er et menneskelig behov, særlig når du har båret så mye uten å bli sett."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      "text": "Når sinnet kommer, hører jeg straks at jeg er egoistisk og får skyldfølelse.",
      "suggestion": "Selvsagt følger skyld etter sinne når du lærte at andres behov måtte komme først."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      "text": "Når jeg ber om hjelp, føler jeg meg som en byrde før noen engang svarer.",
      "suggestion": "Ikke rart det å trenge hjelp kjennes risikabelt etter år med å være den som bærer alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      "text": "En rotete kjøkkenbenk kan få meg til å føle at jeg har mislyktes som person.",
      "suggestion": "Når omsorg og prestasjon ble vevd sammen, kan selv rot forståelig nok bli til skam over hvem du er."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      "text": "Jeg sier til meg selv at andre har det verre, så jeg burde ikke føle dette.",
      "suggestion": "Selvsagt nedtoner du smerten når du så lenge har måttet gi plass til alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      "text": "Jeg jobber meg gjennom sykdom, kollapser og får skyldfølelse for å kollapse.",
      "suggestion": "Å presse seg gjennom gir mening under en regel om at hvile er forbudt; selv kollapsen blir dømt av den regelen."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      "text": "Hvis noen virker skuffet, får jeg panikk som om jeg har ødelagt forholdet.",
      "suggestion": "Ikke rart skuffelse kjennes skremmende når kjærlighet har virket knyttet til å holde folk fornøyde."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      "text": "En del av meg tror at folk bare er glad i meg når jeg er nyttig for dem.",
      "suggestion": "Forståelig nok kan kjærlighet kjennes betinget av å være nyttig når omsorg så lenge har vært knyttet til å være til nytte."
    },
    "dp_empathic-affirmation-validation_case-aisha_01": {
      "text": "Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar.",
      "suggestion": "Selvsagt holder du øye med døra etter så mange farvel; jeg hører hvor viktig trygghet er."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      "text": "Jeg rev i stykker bilder etter bruddet og følte meg både sterk og tom.",
      "suggestion": "Forståelig nok ga det å rive bildene et øyeblikk av kraft da smerten var uutholdelig; tomheten etterpå hører også med."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      "text": "Noen ganger blir panikken så høy at jeg vil krype ut av huden min.",
      "suggestion": "Ikke rart den trangen dukker opp når smerte og panikk kjennes umulig å bli værende i; det betyr noe at du kan si det her."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      "text": "Når du noterer, tenker jeg at du hater meg og vil løpe.",
      "suggestion": "Med hvor ofte du har blitt misforstått, er det ikke rart at notater kan leses som fare og få deg til å ville ut fort."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      "text": "Jeg sender tjue meldinger fordi jeg trenger dem nær, og så blokkerer jeg dem før de kan gå.",
      "suggestion": "Ikke rart du strekker deg hardt etter nærhet og så beskytter deg når frykten for å bli droppet tar over."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      "text": "Jeg vet at det ble gjort mot meg, men jeg føler meg fortsatt skitten i min egen hud.",
      "suggestion": "Å kjenne seg skitten etter en krenkelse gir smertefull mening som traumereaksjon; skammen hører til det som ble gjort, ikke til deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      "text": "Når noen sier noe vennlig, hulker jeg som om jeg trenger det og får panikk som om det er en felle.",
      "suggestion": "Hver reaksjon gir mening: Vennlighet treffer lengselen etter å bli holdt og frykten for at nærhet skal gjøre vondt."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      "text": "Hvis du ser bort et sekund, føler jeg meg visket ut og blir rasende.",
      "suggestion": "Forståelig nok blusser sinnet opp når et lite skifte kan registreres som avvisning og forlatthet."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      "text": "Jeg hører en stemme som sier at jeg er søppel og umulig å elske, og en del av meg tror på den.",
      "suggestion": "Ikke rart en grusom stemme kan høres sann ut etter så mye svik, selv om den angriper deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      "text": "Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig.",
      "suggestion": "Selvsagt ser du på tiden; etter vonde avslutninger er det forståelig at du gjør deg klar for den neste."
    },
    "dp_empathic-affirmation-validation_case-david_01": {
      "text": "Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil heller argumentere med fakta.",
      "suggestion": "Ikke rart fakta kjennes tryggere der; følelser kan svi som kritikk og få deg til å kjenne deg trengt opp i et hjørne."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      "text": "Jeg vil ha anerkjennelse for alt jeg gjør; når jeg ikke får det, kjenner jeg raseri.",
      "suggestion": "Selvsagt treffer det hardt når innsatsen din blir usett; sinne skyter opp der så mye av verdien din har vært knyttet til det du gjør."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      "text": "Jeg sammenligner meg med andre fedre og føler meg som en bløff.",
      "suggestion": "Ikke rart sammenligning vekker skam når verdi har vært så tett knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      "text": "Når jeg beklager, kjennes det som å gi noen bevis på at jeg er liten.",
      "suggestion": "Ikke rart det å beklage kjennes ydmykende når det å ta feil har betydd å miste status, trygghet og kontroll."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      "text": "Jeg planlegger perfekte ferier så vi ser bra ut utenfra.",
      "suggestion": "Selvsagt strever du etter å se samlet ut når fasaden har fungert som beskyttelse mot å bli avslørt."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      "text": "Tanken på å være ordinær skremmer meg, som om jeg forsvinner hvis jeg slutter å imponere.",
      "suggestion": "Det er forståelig at «ordinær» kjennes truende når det å imponere har holdt verdi og trygghet oppe."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      "text": "Jeg sier at det går fint mens jeg føler meg tom, fordi det kjennes ydmykende å innrømme tomheten.",
      "suggestion": "Ikke rart du dekker over tomheten når det å bli blottstilt har kjentes som å miste status og trygghet."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      "text": "Jeg skryter for å få respekt, og så sitter jeg alene og føler meg tommere enn før.",
      "suggestion": "Det å strekke seg etter respekt gir mening når beundring har vært måten du stabiliserer verdien din på; tomheten etterpå er også smertefull."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      "text": "Jeg føler fortsatt at faren min sitter et sted og setter karakter på meg.",
      "suggestion": "Den gamle smerten gir mening; å ha blitt målt av ham så lenge kan fortsette å gi gjenklang."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      "text": "Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt.",
      "suggestion": "Ikke rart andres suksess pirker i frykten for å være mindre enn når verdi har kjentes så konkurransepreget."
    },
    "dp_empathic-affirmation-validation_case-marcus_01": {
      "text": "De fleste dager går jeg gjennom rutinene som om jeg ikke er helt til stede.",
      "suggestion": "Å føle seg frakoblet gir mening etter så mye traume; nummenhet har vært en måte å holde det gående på."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      "text": "Jeg lar TV-en stå på fordi stillheten slipper for mange tanker for nært innpå.",
      "suggestion": "Å bruke lyd til å holde tankene på avstand gir mening når stillhet kan bringe altfor mye for nært innpå."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      "text": "Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten.",
      "suggestion": "Ikke rart stillheten er vanskelig; den kan bringe tyngden tilbake i ett øyeblikk."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      "text": "Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen.",
      "suggestion": "Ikke rart et høyt smell kan kaste systemet ditt i overlevelse før valget rekker å komme med; sinnet etterpå er forståelig."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      "text": "Høytider kjennes hule; jeg føler ingenting av det jeg «burde» føle.",
      "suggestion": "Ikke rart høytider lander flatt når nedstenging har vært en del av å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      "text": "Jeg unngår påminnelser om tjenesten fordi de åpner slusene.",
      "suggestion": "Selvsagt unngår du påminnelser når bølgene kan kjennes for store å bære."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      "text": "Jeg holder leiligheten mørk fordi lyse rom kjennes som om de krever for mye av meg.",
      "suggestion": "Å holde rommet dempet gir mening når verden allerede kjennes krevende og utrygg."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      "text": "Jeg husker ikke sist jeg lo og stolte på at det kunne vare.",
      "suggestion": "Ikke rart glede kjennes langt unna når systemet ditt har måttet være klart for smerte og tap."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      "text": "Jeg vil ikke trenge noen, fordi det å trenge folk som regel har betydd å miste kontroll.",
      "suggestion": "Gitt hva nærhet har kostet deg, er det ikke rart at det å klare seg uten noen kjennes som beskyttelse, ikke kulde."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      "text": "Noen ganger tenker jeg at jeg har det best alene for alltid, fordi nærhet bare gir folk flere måter å såre meg på.",
      "suggestion": "Ikke rart alene kan kjennes tryggere, gitt hva nærhet har kostet deg, selv om det er ensomt."
    },
    "dp_exploratory-questions_case-sara_01": {
      "text": "Når jeg ser navnet hans dukke opp hvor som helst, synker magen og jeg føler meg liten.",
      "suggestion": "Når magen synker, hvilken kvalitet har følelsen - tung, hul eller stram?"
    },
    "dp_exploratory-questions_case-sara_02": {
      "text": "Under brunsjen sier jeg at det går bra, men halsen strammer seg før løgnen er ferdig.",
      "suggestion": "Når halsen strammer seg før du får svart, hvilken følelse prøver å ikke bli hørt?"
    },
    "dp_exploratory-questions_case-sara_03": {
      "text": "Kveldene strekker seg ut etter middag, og jeg vasker den samme benken så stillheten ikke får tak i meg.",
      "suggestion": "Når du ser for deg den stillheten etter middag, hvor merker du den først inni deg?"
    },
    "dp_exploratory-questions_case-sara_04": {
      "text": "Jeg var nær ved å skrive unnskyld til ham ved midnatt, selv om jeg fortsatt ikke kan si hva jeg gjorde galt.",
      "suggestion": "Når delen som vil unnskylde seg strekker seg etter telefonen, hva er den mest redd for at skal skje hvis den blir stille?"
    },
    "dp_exploratory-questions_case-sara_05": {
      "text": "Noen ganger sletter jeg gamle bilder og leter etter dem igjen før panikken legger seg.",
      "suggestion": "Når du leter etter bildene igjen, hva håper den paniske delen å kjenne?"
    },
    "dp_exploratory-questions_case-sara_06": {
      "text": "Når noen er snille mot meg, faller blikket som om jeg er tatt på fersken i å ville ha for mye.",
      "suggestion": "Når blikket faller, hvilken følelse dukker opp rundt det å ville ta imot vennlighet?"
    },
    "dp_exploratory-questions_case-sara_07": {
      "text": "Jeg våkner og strekker meg over sengen, og så treffer det meg på nytt.",
      "suggestion": "I det første øyeblikket der du husker, hvilken følelse kommer før ordene?"
    },
    "dp_exploratory-questions_case-sara_08": {
      "text": "Jeg blir flau over at jeg fortsatt er så trist, som om sorgen burde hatt utløpsdato.",
      "suggestion": "Når flauheten sier at sorgen burde vært over, hvilken tristhet ber fortsatt om å bli lagt merke til?"
    },
    "dp_exploratory-questions_case-sara_09": {
      "text": "Når jeg ser par på butikken, verker det i brystet, og jeg går før jeg begynner å gråte.",
      "suggestion": "Når smerten drar deg mot døren, hva lengter den mest etter?"
    },
    "dp_exploratory-questions_case-sara_10": {
      "text": "Jeg går over gaten for å slippe å passere kafeen vi pleide å kalle vår.",
      "suggestion": "Når du ser for deg den kafeen, hvilken følelse kommer før du bestemmer deg for å gå over gaten?"
    },
    "dp_exploratory-questions_case-michael_01": {
      "text": "Når noen retter på én detalj, skyter varmen opp i nakken før jeg rekker å tenke.",
      "suggestion": "Rett før varmen stiger, hvilken følelse blinker gjennom brystet eller halsen?"
    },
    "dp_exploratory-questions_case-michael_02": {
      "text": "Et sukk fra kona får meg til å stritte imot, som om hun allerede har bestemt at jeg tar feil.",
      "suggestion": "Når det sukket lander som en dom, hvor kjenner du først motstanden inni deg?"
    },
    "dp_exploratory-questions_case-michael_03": {
      "text": "Etter at jeg eksploderer hjemme, får jeg et søkk i magen som jeg later som jeg ikke merker.",
      "suggestion": "Hvis det søkket hadde en størrelse, form eller noen ord, hvordan ville det vært?"
    },
    "dp_exploratory-questions_case-michael_04": {
      "text": "Jeg speider etter tegn på respektløshet i møterommet før jeg engang vet hvem som har kommet inn.",
      "suggestion": "Når du ser for deg at du speider rundt i rommet, hva er det første tegnet inni deg på at du er på vakt?"
    },
    "dp_exploratory-questions_case-michael_05": {
      "text": "Når jeg beklager til kona mi, føles det som om jeg har gitt henne seieren.",
      "suggestion": "Når du ser for deg at du gir henne seieren, hvor lander følelsen av å være underlegen sterkest?"
    },
    "dp_exploratory-questions_case-michael_06": {
      "text": "Når jeg er usikker på et svar foran teamet, strammer brystet seg fort.",
      "suggestion": "Hvis stramheten i brystet kunne snakke, hva ville den sagt at den beskytter deg mot?"
    },
    "dp_exploratory-questions_case-michael_07": {
      "text": "Jeg dobbeltsjekker hver eneste e-post så ingen kan ta meg på en feil og få meg til å se dum ut.",
      "suggestion": "Når du ser for deg at du sjekker en gang til, hvilken følelse ligger under frykten for å se dum ut?"
    },
    "dp_exploratory-questions_case-michael_08": {
      "text": "Jeg smeller med dører hjemme så ingen hører meg si at jeg ble såret.",
      "suggestion": "I øyeblikket før døren smeller, hvor viser det såre seg inni deg?"
    },
    "dp_exploratory-questions_case-michael_09": {
      "text": "Når noen ber meg roe meg ned, eksploderer jeg før jeg hører noe mer.",
      "suggestion": "Når de ordene treffer, hvor i deg kommer den første bølgen?"
    },
    "dp_exploratory-questions_case-michael_10": {
      "text": "Jeg hater å føle meg svak foran folk, som om alle kan se at jeg mislyktes.",
      "suggestion": "Når «svak» dukker opp foran folk, hvilket bilde kommer med det?"
    },
    "dp_exploratory-questions_case-jason_01": {
      "text": "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      "suggestion": "Når halsen strammer seg og alt blir blankt, hva begynner å vise seg under, om så bare et hint?"
    },
    "dp_exploratory-questions_case-jason_02": {
      "text": "Stemmen skjelver når jeg sier navnet mitt, og så hører jeg hvor patetisk jeg virker.",
      "suggestion": "Når du hører skjelvingen i stemmen din, hvilken følelse kommer mot deg først?"
    },
    "dp_exploratory-questions_case-jason_03": {
      "text": "Jeg skriver en helt vanlig melding, leser den ti ganger og sletter den før jeg kan virke for trengende.",
      "suggestion": "I øyeblikket før du sletter den, hva er du redd meldingen skal avsløre om deg?"
    },
    "dp_exploratory-questions_case-jason_04": {
      "text": "Hvis noen ler på andre siden av rommet, føler jeg meg låst fast, som om vitsen har funnet meg.",
      "suggestion": "Når du kjenner at latteren finner deg, hvor lander den fastlåste følelsen?"
    },
    "dp_exploratory-questions_case-jason_05": {
      "text": "Jeg holder blikket på bordet så folk ikke skal se hvor klein jeg føler meg.",
      "suggestion": "Når blikket faller til bordet, hvilken følelse rundt å bli sett dukker opp først?"
    },
    "dp_exploratory-questions_case-jason_06": {
      "text": "Etter møter spiller jeg av én setning i timevis og kjenner ansiktet bli varmt.",
      "suggestion": "Hvis vi tar én av setningene du spiller av, hvilken følelse ligger under flauheten?"
    },
    "dp_exploratory-questions_case-jason_07": {
      "text": "På fester følger jeg med på utgangen før jeg engang vet hvem som er i rommet.",
      "suggestion": "Når oppmerksomheten går mot utgangen, hva merker du at du frykter skal skje med deg?"
    },
    "dp_exploratory-questions_case-jason_08": {
      "text": "Når noen gir meg et kompliment, ler jeg det bort før det rekker å treffe noe.",
      "suggestion": "Når komplimentet begynner å nå inn, hva stopper det fra å lande i deg?"
    },
    "dp_exploratory-questions_case-jason_09": {
      "text": "Jeg sier at jeg er opptatt før småprat kan avsløre hvor klein jeg er.",
      "suggestion": "Når småprat kjennes som om det skal avsløre deg, hvilken følelse kommer først?"
    },
    "dp_exploratory-questions_case-jason_10": {
      "text": "Søndagskveldene kjennes tunge, som om alle andre har et liv som venter på dem.",
      "suggestion": "Når søndagstyngden kommer, hva sier den om hvor du hører til?"
    },
    "dp_exploratory-questions_case-laura_01": {
      "text": "De fleste dager føles dempet, som om jeg ser på livet bak tykt glass.",
      "suggestion": "Når du legger merke til det tykke glasset mellom deg og livet, hvor er avstanden sterkest?"
    },
    "dp_exploratory-questions_case-laura_02": {
      "text": "Hevede stemmer i gangen får det til å synke i magen og skuldrene til å stramme seg.",
      "suggestion": "Når det synker i magen i den gangen, hvilken fare virker det som du gjør deg klar for?"
    },
    "dp_exploratory-questions_case-laura_03": {
      "text": "Når noen er snille, glir jeg tilbake bak glass før jeg rekker å nyte det.",
      "suggestion": "Når du glir bak glasset, hvilken følelse kommer opp rundt det å ta imot vennlighet?"
    },
    "dp_exploratory-questions_case-laura_04": {
      "text": "Selv mild berøring på skulderen får meg til å skvette før jeg rekker å tenke hvem det er.",
      "suggestion": "Når du skvetter til, hvor merker du fare først?"
    },
    "dp_exploratory-questions_case-laura_05": {
      "text": "Jeg heller opp et glass om kvelden så støyen i hodet blir uklar i stedet for skarpere.",
      "suggestion": "Før første slurk, hvilken følelse prøver støyen å drukne?"
    },
    "dp_exploratory-questions_case-laura_06": {
      "text": "Jeg våkner anspent, som om jeg står vakt før dagen har begynt.",
      "suggestion": "Når du kjenner den morgenvakten, hvilket sted i deg er mest spent?"
    },
    "dp_exploratory-questions_case-laura_07": {
      "text": "Gode nyheter lander flatt, som om de tilhører noen som faktisk kan kjenne noe.",
      "suggestion": "Når de gode nyhetene lander flatt, hva merker du mellom deg og følelsen?"
    },
    "dp_exploratory-questions_case-laura_08": {
      "text": "Noen ganger åpner en sang en sprekk, og tristhet kommer gjennom før jeg rekker å lukke den.",
      "suggestion": "Når sangen åpner den sprekken, hvordan kjennes tristheten mens den kommer gjennom?"
    },
    "dp_exploratory-questions_case-laura_09": {
      "text": "Jeg sier unnskyld for at jeg trenger trøst, som om det er noe jeg kan få kjeft for.",
      "suggestion": "Når trøst kjennes farlig å be om, hvilken gammel alarm starter inni deg?"
    },
    "dp_exploratory-questions_case-laura_10": {
      "text": "Jeg unngår filmer med krangling og slåssing fordi ett rop kan sette hele systemet i alarm.",
      "suggestion": "Når du ser for deg en slåsscene, hvilket signal i deg sier først «for mye»?"
    },
    "dp_exploratory-questions_case-carlos_01": {
      "text": "Når noen bruker den sjefete tonen, kjenner jeg varmen stige før jeg vet hva jeg sier.",
      "suggestion": "Når varmen begynner å stige, hvilken følelse dekker den over?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      "text": "Jeg går frem og tilbake i gangen til beina verker, og prøver å løpe fra det som kan komme ut av meg.",
      "suggestion": "Når du ser for deg at du går frem og tilbake i gangen, hva prøver du å slippe å kjenne?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      "text": "Hvis jeg trekker meg, føles det som om jeg krymper til ingen kan se meg.",
      "suggestion": "Når det å trekke seg begynner å kjennes som å krympe, hvilken del av deg føles mest truet?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      "text": "Jeg ser stadig for meg at gutten min rykket til da jeg hevet stemmen, og brystet blir varmt.",
      "suggestion": "Når du ser det rykket for deg nå, hvilken følelse er sterkest under varmen?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      "text": "Ro føles farlig, som å senke garden der folk kan slå til.",
      "suggestion": "Når ro kjennes som å senke rustningen, hvilket sårbart sted virker det som den blottstiller?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      "text": "Jeg ødelegger ting fordi bølgen i meg kjennes for farlig til å bli igjen i hendene.",
      "suggestion": "Rett før du ødelegger noe, hva prøver bølgen å beskytte deg mot å kjenne?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      "text": "Jeg stoler ikke på å være sårbar, for da slår folk til.",
      "suggestion": "Når sårbarhet kjennes som å være åpen for angrep, hva beskytter du mest?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      "text": "Manglende respekt fra en annen mann kjennes som et slag, som om jeg forsvinner et sekund.",
      "suggestion": "Når manglende respekt lander som et slag, hvilken følelse dukker opp sekundet før varmen?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      "text": "Etter en krangel klemmer jeg rattet til knokene blir hvite.",
      "suggestion": "Hvis hendene kunne snakke fra det grepet, hva ville de sagt at de holder fast i?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      "text": "Det jeg vil mest, er at familien min skal føle seg trygg med meg.",
      "suggestion": "Når du holder ønsket om trygghet, hvilken følelse stiger i brystet?"
    },
    "dp_exploratory-questions_case-nina_01": {
      "text": "Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      "suggestion": "Når skylden skyller inn, hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      "text": "Jeg bretter klær og svarer på meldinger så jeg slipper å kjenne på nag eller tristhet.",
      "suggestion": "Når travelheten slipper taket, hvilken følelse kommer først fram?"
    },
    "dp_exploratory-questions_case-nina_03": {
      "text": "Ordet nei knyter magen min før jeg engang har sagt det høyt.",
      "suggestion": "Hvis du følger den knuten et øyeblikk, hva frykter den skal skje etter et nei?"
    },
    "dp_exploratory-questions_case-nina_04": {
      "text": "Når jeg hviler, kaller en stemme meg lat før jeg har rukket å trekke pusten.",
      "suggestion": "Når det ordet lander, hvor viser skammen seg i deg?"
    },
    "dp_exploratory-questions_case-nina_05": {
      "text": "Jeg sier unnskyld før jeg ber om hjelp, som om behovet mitt allerede tar for mye plass.",
      "suggestion": "Når behovet ditt kjennes for stort for rommet, hvilken følelse får du mot deg selv?"
    },
    "dp_exploratory-questions_case-nina_06": {
      "text": "Utpå ettermiddagen hamrer hodet, og da skjønner jeg at jeg har svelget egne behov hele dagen.",
      "suggestion": "Når du merker hamringen, hvilket behov har ventet lengst?"
    },
    "dp_exploratory-questions_case-nina_07": {
      "text": "Jeg sammenligner meg med andre mødre og krymper inni meg, som om jeg stryker på en skjult prøve.",
      "suggestion": "Når den skjulte prøven får deg til å krympe, hva trenger den lille delen mest?"
    },
    "dp_exploratory-questions_case-nina_08": {
      "text": "Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      "suggestion": "Når du ser for deg å bli tatt vare på, hvilken følelse kommer før «egoist»-stemmen?"
    },
    "dp_exploratory-questions_case-nina_09": {
      "text": "Jeg tar på meg hver eneste familieoppgave så skuffelsen aldri rettes rett mot meg.",
      "suggestion": "Når du bærer alle de oppgavene, hvilken del av byrden kjennes tyngst?"
    },
    "dp_exploratory-questions_case-nina_10": {
      "text": "Jeg krasjer på sofaen om kvelden etter å ha holdt alle sammen hele dagen.",
      "suggestion": "Når du ser for deg krasjet, hvilken følelse slipper endelig gjennom?"
    },
    "dp_exploratory-questions_case-aisha_01": {
      "text": "Hvis et svar ikke kommer etter at jeg har åpnet meg, føles det som om jeg faller.",
      "suggestion": "Når fallet begynner, hvor merker du det først?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      "text": "Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "I pustet før det snur, hvilken følelse er for vond å holde seg nær?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      "text": "Noen ganger er tomheten så høylytt at jeg vil gjøre hva som helst for å stoppe den.",
      "suggestion": "Ved kanten av den tomheten, hva virker det som den ber om?"
    },
    "dp_exploratory-questions_case-aisha_04": {
      "text": "Når du ser ned for å skrive notater, føler jeg meg droppet før jeg rekker å si til meg selv at det ikke er noe.",
      "suggestion": "I det øyeblikket du føler deg droppet, hvor gammel kjennes du inni deg?"
    },
    "dp_exploratory-questions_case-aisha_05": {
      "text": "Når tomheten blir uvirkelig, klorer jeg bare for å bevise at jeg fortsatt er her.",
      "suggestion": "Når du setter ord på trangen til å klore, hvordan kjennes den uvirkelige tomheten inni deg?"
    },
    "dp_exploratory-questions_case-aisha_06": {
      "text": "Hvis du avlyser en time, vil jeg ikke komme tilbake og bli forlatt to ganger.",
      "suggestion": "Når du ser for deg en avlysning, hva er det første som stikker i deg?"
    },
    "dp_exploratory-questions_case-aisha_07": {
      "text": "Vennlighet får meg til å gråte og ville løpe før jeg rekker å stole på den.",
      "suggestion": "Når vennlighet berører deg, hvilken retning trekker sterkest først: å bli nær eller å få avstand?"
    },
    "dp_exploratory-questions_case-aisha_08": {
      "text": "Jeg tester folk etter at de kommer nær, for å se om de bryr seg nok til å bli.",
      "suggestion": "Når du ser for deg en test, hvilken frykt prøver du å besvare inni deg?"
    },
    "dp_exploratory-questions_case-aisha_09": {
      "text": "Etter at jeg eksploderer, hater jeg meg selv så mye at jeg nesten ikke holder ut å være i min egen kropp.",
      "suggestion": "Når selvhatet treffer, hvilken smerte prøver det å begrave?"
    },
    "dp_exploratory-questions_case-aisha_10": {
      "text": "Det å si farvel på slutten gjør meg svimmel, som om rommet også forlater meg.",
      "suggestion": "Når svimmelheten starter, hvilken følelse ligger under at rommet begynner å tippe?"
    },
    "dp_exploratory-questions_case-david_01": {
      "text": "Når hun kaller meg kald, blir kjeven som stein og brystet hardt.",
      "suggestion": "Når kjeven blir som stein, hvilken følelse prøver steinen å holde tilbake?"
    },
    "dp_exploratory-questions_case-david_02": {
      "text": "Hvis jeg ikke vinner, føler jeg meg hul, som om det ikke er noe fast under meg.",
      "suggestion": "Når du legger merke til det hule stedet, hva virker det mest som det trenger fra deg?"
    },
    "dp_exploratory-questions_case-david_03": {
      "text": "Jeg glatter skjorta og ramser opp prestasjoner når jeg føler meg dømt av kona mi.",
      "suggestion": "Når du glatter skjorta og ramser opp prestasjoner, hvilken følelse prøver du å ikke vise?"
    },
    "dp_exploratory-questions_case-david_04": {
      "text": "Ros fra sjefen renner fort ut igjen, selv om en del av meg vil ha den.",
      "suggestion": "Hvis ett kompliment ble værende et sekund lenger, hvor ville det landet?"
    },
    "dp_exploratory-questions_case-david_05": {
      "text": "Å innrømme at jeg tar feil, får ansiktet til å brenne som om alle kan se gjennom meg.",
      "suggestion": "Når brenningen stiger i ansiktet, hva er du redd folk skal se?"
    },
    "dp_exploratory-questions_case-david_06": {
      "text": "Når samtalen blir følelsesladet, sjekker jeg telefonen så jeg slipper å se blottstilt ut.",
      "suggestion": "Når du strekker deg etter telefonen, hvilken følelse beveger du deg bort fra?"
    },
    "dp_exploratory-questions_case-david_07": {
      "text": "Hvis barna protesterer ved middagen, mister jeg det før jeg skjønner hvorfor.",
      "suggestion": "I pusten før du klikker, hvilken følelse prøver å ikke bli sett?"
    },
    "dp_exploratory-questions_case-david_08": {
      "text": "Siden affæren kjennes nettene flate og tunge, som om huset holder pusten.",
      "suggestion": "Når du er med den flate tyngden, hvilken følelse venter under den?"
    },
    "dp_exploratory-questions_case-david_09": {
      "text": "Jeg vil at noen skal legge merke til det jeg gjør uten at jeg må tigge om anerkjennelse.",
      "suggestion": "Når anerkjennelsen ikke kommer, hva treffer det i deg?"
    },
    "dp_exploratory-questions_case-david_10": {
      "text": "Jeg hater å være helt vanlig på jobb foran alle, som om det betyr at jeg har forsvunnet.",
      "suggestion": "Når «helt vanlig» kjennes som å forsvinne, hvilken lengsel dukker opp under det?"
    },
    "dp_exploratory-questions_case-marcus_01": {
      "text": "De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "Før bølgen treffer, hva er det tidligste signalet om at den kommer?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      "text": "Mareritt rykker meg våken før daggry, og jeg føler meg både oppskrudd og tom i mørket.",
      "suggestion": "Når du kjenner både oppskrudd og tom, hva ber først om oppmerksomhet?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      "text": "I matbutikken holder jeg meg nær utgangene fordi gangene mellom hyllene kjennes innestengte.",
      "suggestion": "Når du ser for deg gangene mellom hyllene, hvor samler spenningen seg først?"
    },
    "dp_exploratory-questions_case-marcus_04": {
      "text": "Stillheten i leiligheten blir tung etter mørkets frembrudd, som om rommet holder pusten.",
      "suggestion": "Når rommet kjennes som om det holder pusten, hvilken følelse rører seg i deg?"
    },
    "dp_exploratory-questions_case-marcus_05": {
      "text": "Jeg sitter i bilen etter jobb for å slippe å gå inn i den tomme leiligheten.",
      "suggestion": "Når du ser for deg at du sitter der, hvilken følelse er det som venter inne i leiligheten?"
    },
    "dp_exploratory-questions_case-marcus_06": {
      "text": "Jeg holder lyset dempet og ignorerer telefonen så verden holder seg langt unna.",
      "suggestion": "I det lave lyset med telefonen ubesvart, hva beskytter avstanden i deg?"
    },
    "dp_exploratory-questions_case-marcus_07": {
      "text": "Gode øyeblikk kjennes uvirkelige, som om jeg ser på varme gjennom et låst vindu.",
      "suggestion": "Når varmen er der, men låst borte, hvor kjenner du hindringen inni deg?"
    },
    "dp_exploratory-questions_case-marcus_08": {
      "text": "Plutselige lyder i trappeoppgangen får meg til å skvette, og så speider jeg etter fare.",
      "suggestion": "Rett etter at du skvetter, hvilken fare merker du at du leter etter først?"
    },
    "dp_exploratory-questions_case-marcus_09": {
      "text": "Jeg husker ikke sist jeg lo ordentlig uten å stoppe meg selv.",
      "suggestion": "Når du sier at du ikke husker sist du lo ordentlig, hvilken følelse kommer nærmest overflaten?"
    },
    "dp_exploratory-questions_case-marcus_10": {
      "text": "En del av meg sier at jeg har det best alene, fordi nærhet alltid krever betaling senere.",
      "suggestion": "Når den delen advarer om at nærhet har en pris, hvilken fare ser den for seg?"
    },
    "dp_providing-treatment-rationale_case-sara_01": {
      "text": "Jeg er redd for at det å snakke om følelser får meg til å spinne. Kan vi ikke bare holde det positivt?",
      "suggestion": "Det gir mening å være redd for det. I denne utforskingen går vi sakte og trygt; når vi setter ord på litt av følelsen, roer den seg, og nettene blir mindre overveldende."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      "text": "Hvorfor fortsetter du å spørre hva jeg føler når jeg bare trenger en plan for å komme meg gjennom uka?",
      "suggestion": "En plan virker bedre når den passer til følelsen som velter uka. Vi lytter til sorgen først fordi den sier noe om du trenger trøst, kontakt, hvile eller en grense før vi velger steg."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      "text": "Hvis jeg begynner å gråte over ham her, blir jeg ikke bare sittende fast i det hele uka?",
      "suggestion": "Ikke alt på én gang. Vi berører en liten del og kommer tilbake, slik at sorgen holder seg innenfor rekkevidde. Tårene viser hva som trenger trøst, så sorgen kan bevege seg i stedet for å sluke hele uka."
    },
    "dp_providing-treatment-rationale_case-sara_04": {
      "text": "Hvis avledning får meg gjennom de stille timene, hvorfor skal vi rote med det?",
      "suggestion": "Avledning hjelper deg gjennom toppen. Samtidig øver vi på å berøre ensomheten i små doser, fordi stillheten da blir mindre farlig, ikke bare noe du må løpe fra."
    },
    "dp_providing-treatment-rationale_case-sara_05": {
      "text": "Hvordan hjelper det å snakke om et brudd når andre har større problemer?",
      "suggestion": "Smerte trenger ikke vinne en konkurranse før den får oppmerksomhet. Varsom lytting til sorgen gjør det lettere å høre hva den trenger – trøst, grenser, kontakt – slik at den kan lette i stedet for å bli skjøvet bort."
    },
    "dp_providing-treatment-rationale_case-sara_06": {
      "text": "Hvis vi snakker mer om ham, blir han ikke bare værende enda lenger i hodet mitt?",
      "suggestion": "Vi skal ikke repetere ham; vi kartlegger draget under – ensomhet, håp, selvbebreidelse – fordi sjekkemønsteret får mindre næring når de delene får omsorg."
    },
    "dp_providing-treatment-rationale_case-sara_07": {
      "text": "Kan vi sette mål så jeg holder meg travel nok til å slippe å kjenne dette?",
      "suggestion": "Vi kan bruke mål, men hvis de bare dekker over sorgen, venter ensomheten på kvelden. Noen minutter med følelsen hjelper oss å velge handlinger som fyller på, ikke bare bedøver."
    },
    "dp_providing-treatment-rationale_case-sara_08": {
      "text": "Hva om «hul» er alt jeg har? Jeg vet ikke hvordan det kan bli nyttig.",
      "suggestion": "«Hul» er ikke ubrukelig; det gir oss en inngang. Tyngden, formen og draget gjør en uklar tomhet konkret nok til å forstå og lindre."
    },
    "dp_providing-treatment-rationale_case-sara_09": {
      "text": "Jeg vil ha en tidslinje for når jeg slutter å sjekke profilen hans; ellers kjennes dette meningsløst.",
      "suggestion": "En tidslinje ville vært beroligende, men løkken endres ved at vi lærer hva sjekkingen gjør for deg. Når vi kartlegger håpet, ensomheten og krasjet, får du flere måter å møte behovet på uten å åpne såret på nytt."
    },
    "dp_providing-treatment-rationale_case-sara_10": {
      "text": "Hvordan er dette annerledes enn å fortelle bruddet om igjen til jeg selv blir lei av å høre det?",
      "suggestion": "Her forteller vi det ikke bare på nytt. Vi senker tempoet i historien for å finne stedene som sitter fast, fordi de øyeblikkene viser hva som fortsatt trenger trøst, mening eller en ny respons."
    },
    "dp_providing-treatment-rationale_case-michael_01": {
      "text": "Jeg kom for sinnekontroll, ikke følelsesprat. Hvordan stopper dette meg fra å eksplodere?",
      "suggestion": "Vi starter ved det første stikket, før sinnet tar rattet, fordi det å fange skam, respektløshet eller frykt tidlig gjør tone og handling til valg i stedet for automatiske reaksjoner."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      "text": "Er ikke det å lete etter utløseren bare å bortforklare at jeg eksploderer?",
      "suggestion": "Poenget er ansvarlighet, ikke bortforklaring, fordi det å kjenne rekkefølgen i triggeren gjør at du kan fange det første stikket tidligere og velge før det blir roping."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      "text": "Hvorfor bremse når folk ser på og jeg må virke som om jeg har kontroll?",
      "suggestion": "Å bremse beskytter kontrollen i stedet for å svekke den. Fem sekunder hjelper deg å merke støtet før stemmen hardner, så autoritet ikke må komme gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_04": {
      "text": "Hvordan hjelper det å nærme meg skam hvis kona mi eller teamet mitt ser det som svakhet?",
      "suggestion": "Vi øver ikke på svakhet; vi finner stikket tidlig, fordi det å sette ord på hva som traff gir deg et stødigere svar enn å bevise styrke gjennom varme."
    },
    "dp_providing-treatment-rationale_case-michael_05": {
      "text": "Kan vi hoppe over følelsene og bare lage et verktøy for når brystet blir varmt?",
      "suggestion": "Vi kan bygge verktøyet rundt den varmen. Følelsesarbeidet forteller oss nøyaktig hva verktøyet må avbryte: skam, trussel eller trangen til å bevise deg."
    },
    "dp_providing-treatment-rationale_case-michael_06": {
      "text": "Hvordan hjelper det meg å lede at jeg merker stram kjeve når et møte blir spent?",
      "suggestion": "Den stramme kjeven hjelper som et tidlig varsel, ikke en avsporing. Hvis du fanger det før stemmen blir skarp, får du noen sekunder til å svare med autoritet i stedet for affekt."
    },
    "dp_providing-treatment-rationale_case-michael_07": {
      "text": "Hva om jeg eksploderer etter alt dette og alle sier at terapien mislyktes?",
      "suggestion": "Da bruker vi det som data, ikke som en dom. Vi går gjennom sekvensen, finjusterer kartet og øver pausen, så neste vanskelige øyeblikk går bedre."
    },
    "dp_providing-treatment-rationale_case-michael_08": {
      "text": "Hvordan skal mer prat bevise for kona mi at jeg kan slutte å eksplodere?",
      "suggestion": "Beviset må vises: færre utbrudd, kortere vei ned igjen og raskere reparasjon. Praten hjelper bare hvis den kartlegger reaksjonen tidlig nok til at du kan velge annerledes hjemme."
    },
    "dp_providing-treatment-rationale_case-michael_09": {
      "text": "Vil dette endre hvordan teamet ser meg, eller bare få meg til å analysere meg selv?",
      "suggestion": "Endringen må merkes i tone, timing og reparasjon. Å fange stikket tidligere betyr noe fordi teamet får en leder som svarer i stedet for å blusse opp."
    },
    "dp_providing-treatment-rationale_case-michael_10": {
      "text": "Hva skal jeg gjøre hvis jeg ikke er god på følelser og ikke har ord?",
      "suggestion": "Du trenger ikke ha flytende følelsesspråk for å begynne. Kjeve, bryst, varme, ett behov - de konkrete tegnene betyr noe fordi de gjør arbeidet praktisk og holder det under din kontroll."
    },
    "dp_providing-treatment-rationale_case-jason_01": {
      "text": "Hjelper dette faktisk sosial angst, eller lærer jeg bare å stirre på frykten?",
      "suggestion": "Målet er ikke å stirre på frykten. Vi finner det første signalet som er håndterbart, roer det nok ned og øver på å bli værende, slik at selvtillit vokser fra gjentatte øyeblikk du kommer deg gjennom."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      "text": "Hva om jeg blir blank her også og kaster bort hele timen?",
      "suggestion": "Blankheten er nyttig informasjon, ikke bortkastet tid. Vi starter med selve blankheten fordi det å merke de første signalene gir oss en vei inn i frykten uten å tvinge fram ord."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      "text": "Det er tankene som ødelegger alt, så hvorfor spør du stadig om brystet mitt?",
      "suggestion": "Tankene betyr noe, og brystet varsler ofte før tankene blir høylytte. Når vi følger det signalet, kan vi gripe inn tidligere, før spiralen har fått fart."
    },
    "dp_providing-treatment-rationale_case-jason_04": {
      "text": "Når jeg legger merke til frykten, blir den høyere, så hvorfor skulle jeg øve på det?",
      "suggestion": "Vi oversvømmer deg ikke med frykt. Vi øver ved kanten fordi små doser lærer alarmen din at frykt kan merkes, navngis og overleves uten å ta over."
    },
    "dp_providing-treatment-rationale_case-jason_05": {
      "text": "Kan vi ikke bare lage et manus for hva jeg skal si før møter, så jeg ikke fryser?",
      "suggestion": "Ja, og manuset må tåle frysingen. Vi kobler ordene til det første fryktsignalet, så du kan bli værende lenge nok til å bruke dem."
    },
    "dp_providing-treatment-rationale_case-jason_06": {
      "text": "Hvor lenge tar det før jeg kan snakke i møter uten at kroppen tar over?",
      "suggestion": "De første skiftene er ofte små: litt mindre beredskap, litt mer rom til å være til stede når oppmerksomheten rettes mot deg, og raskere vei tilbake etterpå."
    },
    "dp_providing-treatment-rationale_case-jason_07": {
      "text": "Jeg synes det er pinlig å snakke om at jeg er så redd; hvordan skal det hjelpe å si det høyt?",
      "suggestion": "Vi går varsomt fram, og du bestemmer tempoet. Å si det høyt hjelper skammen å slippe litt taket, fordi frykten blir møtt i stedet for gjemt."
    },
    "dp_providing-treatment-rationale_case-jason_08": {
      "text": "Hva gjør jeg faktisk når stemmen som sier «du er klein» starter?",
      "suggestion": "Vi gjør stemmen konkret, finner kroppssignalet som følger med den, og øver på et stødigere svar, fordi da har du en handling før skammen får deg til å forsvinne."
    },
    "dp_providing-treatment-rationale_case-jason_09": {
      "text": "Må jeg alltid jobbe så hardt bare for å snakke som alle andre?",
      "suggestion": "Det blir som regel lettere. Når trygghet bygges gjennom gjentatt, håndterlig øving, er det færre sosiale signaler som utløser alarm, og det å snakke kan kjennes mindre som et helkroppsprosjekt."
    },
    "dp_providing-treatment-rationale_case-jason_10": {
      "text": "Hvorfor øve på øyekontakt når det kjennes som folk kan se alt som er galt med meg?",
      "suggestion": "Vi tvinger ikke øyekontakt. Korte, valgte øyeblikk kan lære alarmen at det å bli sett kan tåles, og er noe annet enn å bli avslørt."
    },
    "dp_providing-treatment-rationale_case-laura_01": {
      "text": "Hvis dette er hjernekjemi, hvorfor skulle det endre noe å snakke med deg?",
      "suggestion": "Kjemi betyr noe, og gjentatt trygghet former også systemet over tid. Ved siden av eventuell medisinsk oppfølging gir terapi sinn og kropp nye erfaringer med å være til stede, bli roet og ikke være alene, slik at alarmsystemet får nye bevis."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      "text": "Hvordan vet jeg at dette ikke får meg til å gjenoppleve traumer når jeg allerede forsvinner?",
      "suggestion": "Du skal ikke presses til å gjenoppleve noe. Små doser og jording hjelper deg å berøre én kant og komme tilbake; over tid kan det hjelpe minnet å slippe taket."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      "text": "Hvis jeg blir nummen før jeg kan føle noe, hva er det egentlig vi jobber med?",
      "suggestion": "Vi jobber med selve nummenheten fordi den er beskyttelse, ikke fravær. Kantene viser oss når nærhet kjennes risikabelt, slik at følelser kan komme tilbake i mengder du kan håndtere."
    },
    "dp_providing-treatment-rationale_case-laura_04": {
      "text": "Hva om vennligheten din gjør meg mer mistenksom i stedet for tryggere?",
      "suggestion": "Da behandler vi mistanken som nyttig beskyttelse. Vi senker tempoet fordi tillit trenger bevis; du kan teste varme i bittesmå mengder før du må stole på den."
    },
    "dp_providing-treatment-rationale_case-laura_05": {
      "text": "Kommer dette til å dra opp ting jeg ikke tåler og gjøre meg verre etterpå?",
      "suggestion": "Vi går varsomt fram fordi trygghet kommer først. Du bestemmer tempoet, vi jorder ofte, og vi stopper før aktiveringen blir for høy, slik at arbeidet bygger toleranse i stedet for overveldelse."
    },
    "dp_providing-treatment-rationale_case-laura_06": {
      "text": "Hvorfor jakte på bittesmå signaler hvis jeg stenger ned før jeg kan bruke dem?",
      "suggestion": "De bittesmå signalene er varsellamper før nedstenging. Å lære dem lar oss senke tempoet tidligere, så du får større sjanse til å bli værende i stedet for å forsvinne."
    },
    "dp_providing-treatment-rationale_case-laura_07": {
      "text": "Hvordan skal prat endre denne flatheten når jeg knapt kjenner noe?",
      "suggestion": "Målet er et bredere toleransevindu: mer tilgang til følelse og mer ro. Vi følger små livstegn i stedet for å tvinge følelser fram."
    },
    "dp_providing-treatment-rationale_case-laura_08": {
      "text": "Hvordan skal jeg vite at dette virker når jeg fortsatt er nummen de fleste dager?",
      "suggestion": "Vi følger små tegn, fordi nummenhet mykner gradvis: litt mindre beredskap når stemmer heves, noen flere sekunder med nærvær, og korte øyeblikk av varme eller ro som ikke kjennes som en felle."
    },
    "dp_providing-treatment-rationale_case-laura_09": {
      "text": "Kan vi ikke bare snakke om praktiske ting så jeg slipper å kjenne alt dette?",
      "suggestion": "Praktisk støtte hører også hjemme her. Følelsesarbeidet gjør at støtten lander bedre fordi du blir mindre alene og mindre på vakt med det du har båret."
    },
    "dp_providing-treatment-rationale_case-laura_10": {
      "text": "Hva om jeg fryser her inne og du bare sitter og venter på et svar?",
      "suggestion": "Da blir frysingen selve arbeidet. Vi pauser, jorder og setter ord på det som skjer, fordi det lærer systemet ditt at nedstenging kan møtes trygt, ikke presses."
    },
    "dp_providing-treatment-rationale_case-carlos_01": {
      "text": "Kommer dette til å gjøre meg myk? Folk må fortsatt vite at de ikke skal kødde med meg.",
      "suggestion": "Målet er stødighet, ikke mykhet. Du kan holde en tydelig grense uten å skremme familien din eller gi kontrollen over til sinnet."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      "text": "Hvorfor snakke om følelser i stedet for å gi meg verktøy jeg kan bruke når jeg blir opphetet?",
      "suggestion": "Verktøy er en del av arbeidet. Følelsesarbeid betyr noe fordi det viser nøyaktig når varmen starter, så verktøyet kommer før knyttnever eller ord tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      "text": "Hvordan hjelper dette når noen viser meg manglende respekt foran familien min?",
      "suggestion": "Vi kartlegger flammepunktet, så du kan skille reell respektløshet fra stikket av ydmykelse. Det gir deg en fast respons uten eksplosjon."
    },
    "dp_providing-treatment-rationale_case-carlos_04": {
      "text": "Hvordan skal det å kjenne mer hindre meg i å miste brodden og bli overkjørt?",
      "suggestion": "Dette handler ikke om å ta fra deg brodden. Å skille beskyttelse fra eksplosjon betyr noe fordi folk kan vite hvor grensen går, mens sønnen din får stødighet i stedet for frykt."
    },
    "dp_providing-treatment-rationale_case-carlos_05": {
      "text": "Hva om jeg eksploderer uansett etter at vi har snakket om alt dette?",
      "suggestion": "Da lærer vi av akkurat øyeblikket der det skjedde. Hvert utbrudd finjusterer kartet, så du fanger det tidligere og reparerer raskere neste gang."
    },
    "dp_providing-treatment-rationale_case-carlos_06": {
      "text": "Hvordan skal pust bety noe når jeg allerede er to sekunder fra å smelle?",
      "suggestion": "Pust betyr noe bare som en døråpner. Den kjøper noen sekunder, fordi de sekundene lar deg fange sårethet eller ydmykelse før smellet blir eneste mulighet."
    },
    "dp_providing-treatment-rationale_case-carlos_07": {
      "text": "Hvordan krever jeg respekt uten å oppføre meg som om noen kan tråkke på meg?",
      "suggestion": "Vi bygger et tredje valg fordi du trenger respekt og trygghet samtidig. Når du setter ord på det som traff under, får du en fast respons som ikke må bli en trussel."
    },
    "dp_providing-treatment-rationale_case-carlos_08": {
      "text": "Jeg lærte at du må slå først, så hvorfor skulle det hjelpe å bremse?",
      "suggestion": "Den regelen hjalp deg å overleve den gangen. Her senker vi farten i tennpunktet, fordi det å kjenne hva som blir truffet under det hele gir deg mer valg før «slå først»-responsen tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_09": {
      "text": "Barnet mitt så meg sint. Hvordan hjelper det ham at jeg snakker om følelser?",
      "suggestion": "Du modellerer reparasjon. Når du fanger det tidligere og gjør opp raskere, lærer han trygghet og ansvarlighet av deg, ikke bare frykt for sinne."
    },
    "dp_providing-treatment-rationale_case-carlos_10": {
      "text": "Hvordan unngår vi at dette blir årevis med prat mens familien min venter?",
      "suggestion": "Vi holder det fokusert ved å sikte på tennpunktene som gjør mest skade, og så sjekke om du fanger, roer og reparerer dem raskere hjemme."
    },
    "dp_providing-treatment-rationale_case-nina_01": {
      "text": "Er det ikke egoistisk å fokusere på følelsene mine når alle trenger noe fra meg?",
      "suggestion": "Følelsene dine peker mot behov og grenser; det er det som gjør omsorg bærekraftig. Når vi lytter til dem, kan du hjelpe uten å forsvinne."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      "text": "Hva hjelper det å legge merke til kroppen når skylden treffer før jeg rekker å tenke?",
      "suggestion": "De signalene varsler skyld før det automatiske ja-et tar over. Når du fanger dem tidlig, får du en pause, fordi det er der en grense kan bli mulig."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      "text": "Hvordan skal følelsesarbeid hjelpe når jeg trenger konkrete steg før jeg drukner?",
      "suggestion": "Konkrete steg betyr noe. Følelsesarbeidet betyr noe fordi det viser hvilken forespørsel, grense eller behov som faktisk letter belastningen, så planen ikke blir enda en oppgave du bærer alene."
    },
    "dp_providing-treatment-rationale_case-nina_04": {
      "text": "Hvordan hjelper det å fokusere på skyld når jeg allerede får dårlig samvittighet av å si nei?",
      "suggestion": "Skylden er trykkpunktet. Når du merker den tidlig og øver små, respektfulle grenser, kan den skyldige delen lære at omsorg også inkluderer deg."
    },
    "dp_providing-treatment-rationale_case-nina_05": {
      "text": "Hvis folk kan forlate meg når jeg slutter å hjelpe, hvordan hjelper det å navngi behov?",
      "suggestion": "Å navngi behov lar oss teste frykten varsomt i stedet for å følge den automatisk. De riktige relasjonene blir ofte sterkere når folk vet hva du faktisk trenger og hvor grensene dine går."
    },
    "dp_providing-treatment-rationale_case-nina_06": {
      "text": "Kan vi bare fikse timeplanen min? Å snakke om behov høres ut som enda en oppgave.",
      "suggestion": "Vi kan jobbe med timeplanen, og behovene sier hva timeplanen må beskytte. Ellers kan planen se organisert ut mens den fortsatt bruker deg opp."
    },
    "dp_providing-treatment-rationale_case-nina_07": {
      "text": "Hva om det alltid føles feil å si nei, uansett hvor mye vi snakker?",
      "suggestion": "Da handler ikke fremgang om å vente på at skylden forsvinner. Vi øver på å legge merke til den, sjekke om den passer, og velge en grense likevel, fordi skyld kan mykne etter nye erfaringer."
    },
    "dp_providing-treatment-rationale_case-nina_08": {
      "text": "Hvordan blir det lettere å be om hjelp når det å trenge noe kjennes som for mye?",
      "suggestion": "Øvingen skjer med små, konkrete forespørsler, slik at skammen får nye bevis. Litt støtte om gangen kan lære systemet ditt at behov kan være gjensidig, ikke for mye."
    },
    "dp_providing-treatment-rationale_case-nina_09": {
      "text": "Hvis jeg fokuserer på behov, blir jeg ikke den trengende personen jeg misliker?",
      "suggestion": "Tydelige behov gjør folk som regel mindre desperate, ikke mer. Å navngi dem lar deg spørre direkte før bitterhet, kollaps eller skjulte tester tar over."
    },
    "dp_providing-treatment-rationale_case-nina_10": {
      "text": "Hvordan skal jeg vite at dette faktisk hjelper og ikke bare gjør meg mer selvopptatt?",
      "suggestion": "Konkrete tegn vil vise det: å spørre med mindre unnskyldning, hvile med mindre straff og sette grenser uten å viske ut deg selv. De tegnene betyr noe fordi målet er omsorg som varer, ikke selvopptatthet."
    },
    "dp_providing-treatment-rationale_case-aisha_01": {
      "text": "Hva om det å snakke om å bli forlatt gjør at jeg vil skade meg igjen før jeg klarer å stoppe det?",
      "suggestion": "Sikkerhet kommer først. Vi bygger en plan, jording og støtte før vi berører den smerten, fordi målet er å holde deg i kontakt mens forlatelsesalarmen blir mindre farlig."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      "text": "Jeg trenger at du lover at du aldri forlater meg, ellers ser jeg ikke hvordan dette skal hjelpe.",
      "suggestion": "Det løftet ville roe deg et øyeblikk, men det ville ikke være ærlig. Trygghet på lengre sikt kommer av forutsigbare adskillelser, å navngi frykten og reparere bommer raskt, så panikken lærer at den ikke er alene."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      "text": "Hvis du avlyser, hvordan skal det å navngi alarmen stoppe meg fra å gjøre noe drastisk?",
      "suggestion": "Å navngi den er bare én del. Vi lager også en avlysningsplan, slik at gjentatte, forutsigbare steg hjelper panikken å stige, nå toppen og komme ned igjen uten at du blir alene med den."
    },
    "dp_providing-treatment-rationale_case-aisha_04": {
      "text": "Hva om følelsene mine er for mye for enhver terapeut å jobbe med?",
      "suggestion": "Følelsene dine er store på grunn av det du har levd. Her doserer vi – små slurker, mye jording – så det kjennes overlevelig."
    },
    "dp_providing-treatment-rationale_case-aisha_05": {
      "text": "Når jeg har panikk, hvorfor spørre om føtter og pust i stedet for bare å roe meg ned?",
      "suggestion": "Panikk er en alarmtilstand, ikke bare en tanke. Føtter, pust og stolen hjelper med å sende trygghetssignaler her og nå, fordi det gir deg nok rom til å velge neste steg."
    },
    "dp_providing-treatment-rationale_case-aisha_06": {
      "text": "Hvordan hjelper det å jobbe med behovet når jeg vil ha beroligelse fra deg med én gang?",
      "suggestion": "Det akutte behovet fortjener direkte arbeid, fordi tydelige forespørsler, små doser av å ta imot og måter å roe seg mellom timene gjør nærhet mindre desperat."
    },
    "dp_providing-treatment-rationale_case-aisha_07": {
      "text": "Hvis vi fokuserer på denne relasjonen, blir jeg ikke knyttet og faller fra hverandre når den tar slutt?",
      "suggestion": "Vi bruker relasjonen som øving med grenser og reparasjon. Når tilknytningen navngis, doseres og gjøres forutsigbar, blir den mindre av en hemmelig panikk du må håndtere alene."
    },
    "dp_providing-treatment-rationale_case-aisha_08": {
      "text": "Hvordan skal dette hjelpe relasjonene mine å ikke eksplodere når jeg går fra å trygle til å skyve bort?",
      "suggestion": "Vi kartlegger skiftet tidlig: panikken, protesten og trangen til å teste. Da kan du navngi frykt, be direkte eller ta trygg avstand før relasjonen blir en kamp."
    },
    "dp_providing-treatment-rationale_case-aisha_09": {
      "text": "Kommer dette til å ta evigheter, eller kommer jeg alltid til å være så intens?",
      "suggestion": "Tidlige gevinster bør bli synlige: færre panikktopper, raskere ro og flere måter å navngi frykt før den tar over. Øving hjelper med å bygge veien fra alarm til stødigere grunn."
    },
    "dp_providing-treatment-rationale_case-aisha_10": {
      "text": "Hver grense fra en terapeut høres ut som avstand, så hvorfor skulle jeg stole på dette?",
      "suggestion": "Vi jobber direkte med den frykten. Jeg forklarer rammen, inviterer deg til å si hvordan den virker på deg, og reparerer bommer, slik at gjentatt forutsigbar kontakt kan gjøre at grenser kjennes mindre som forlatelse."
    },
    "dp_providing-treatment-rationale_case-david_01": {
      "text": "Hvorfor fokusere på følelser når jeg trenger resultater folk faktisk kan se?",
      "suggestion": "Vi fokuserer der fordi følelser driver reaksjonene folk ser. Når du fanger stikket under sinne eller avstand, får du mer kontroll over tone, reparasjon og utfall hjemme og på jobb."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      "text": "Hvordan er dette praktisk hvis jeg ikke vil bli psykoanalysert eller redusert til barndommen min?",
      "suggestion": "Vi holder det praktisk ved å følge øyeblikkene her og nå først. Historien tas bare inn når den forklarer dagens reaksjoner, fordi poenget er stødigere valg du kan bruke med én gang."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      "text": "Hjelper dette ekteskapet mitt, eller handler det bare om meg?",
      "suggestion": "Det hjelper ekteskapet fordi mønsteret lever mellom dere, men starter også inni deg. Når vi bremser stikket under defensiviteten, kan du høre mer, eie mer og reparere før samtalen hardner."
    },
    "dp_providing-treatment-rationale_case-david_04": {
      "text": "Jeg kan teorien allerede. Hvorfor bruke tid på følelser i stedet for å fikse atferd?",
      "suggestion": "Teori hjelper bare hvis den når øyeblikket der atferden endres. Vi fokuserer på følelser fordi skam og trussel er der valgene dine snevres inn; når du fanger dem, får du mer rom til å handle annerledes."
    },
    "dp_providing-treatment-rationale_case-david_05": {
      "text": "Jeg hater å føle meg liten når jeg tar feil; hvordan hjelper det å sitte med det?",
      "suggestion": "Hvis du kan tåle den brenningen i noen sekunder, hjelper det deg å eie feilen før forsvaret tar over. Det er det som gjør reparasjon raskere og lederskapet stødigere."
    },
    "dp_providing-treatment-rationale_case-david_06": {
      "text": "Hvordan gjør det meg til en bedre leder å snakke om skam når folk trenger beslutninger?",
      "suggestion": "Skamarbeid er praktisk fordi skam ofte gjør tilbakemelding til trussel. Når du fanger den brenningen tidligere, hjelper det deg å høre, beslutte og reparere fra stødighet i stedet for forsvar."
    },
    "dp_providing-treatment-rationale_case-david_07": {
      "text": "Kan vi hoppe over barndomsprat og holde oss til det som skjer nå?",
      "suggestion": "Ja, vi kan holde oss til nåtiden. Vi navngir bare tidligere mønstre hvis de viser seg i reaksjonene dine i dag, slik at historien tjener endring i stedet for å bli en omvei."
    },
    "dp_providing-treatment-rationale_case-david_08": {
      "text": "Hva om jeg ikke føler noe når du ber meg se innover?",
      "suggestion": "Da starter vi der, fordi små signaler som stram kjeve eller hulhet i brystet gir oss et praktisk inngangspunkt. Du styrer tempoet."
    },
    "dp_providing-treatment-rationale_case-david_09": {
      "text": "Jeg trenger raske gevinster; jeg vil ikke inn i enda et endeløst innsiktsprosjekt.",
      "suggestion": "Da følger vi atferd fra starten, fordi raske gevinster må vise seg i handling: å fange defensiviteten tidligere, reparere raskere og komme gjennom vanskelige samtaler med mindre skade."
    },
    "dp_providing-treatment-rationale_case-david_10": {
      "text": "Hvordan vet jeg at dette er verdt det og ikke bare enda et innsiktsprosjekt?",
      "suggestion": "Vi bruker konkrete markører fordi innsikt alene ikke er nok: mindre nedstenging i vanskelige samtaler, raskere reparasjon når du bommer, og mer rom til å være til stede når skammen blir truffet."
    },
    "dp_providing-treatment-rationale_case-marcus_01": {
      "text": "Prat endrer ikke det som skjedde, så hvorfor åpne døra til det?",
      "suggestion": "Det endrer ikke fortiden. Liten, jordet kontakt endrer hvordan fortiden treffer deg nå, fordi minnene kan få mindre kontroll over søvn, nummenhet og isolasjon."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      "text": "Jeg vil ikke bli oversvømt; når jeg mister kontrollen, forsvinner jeg i flere dager.",
      "suggestion": "Det er nettopp derfor vi jobber i små slurker: jording først, berøre én kant, komme tilbake. Tempoet hjelper deg å beholde kontrollen mens minnene blir mindre alene og mindre eksplosive."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      "text": "Jeg føler ingenting de fleste dager, så jeg ser ikke hva det er å jobbe med.",
      "suggestion": "Nummenhet er ikke en blindvei; den er beskyttelse. Vi leter etter bittesmå signaler rundt kantene, fordi det lar følelse komme tilbake i mengder du kan tåle."
    },
    "dp_providing-treatment-rationale_case-marcus_04": {
      "text": "Hvorfor legge merke til vaktsignalene når jeg er på vakt hele tiden?",
      "suggestion": "Rekkefølgen betyr noe. Hvis du lærer første steg fra scanning til nedstenging, kan du avbryte tidligere og komme tilbake til rommet før det trekker deg helt tilbake dit."
    },
    "dp_providing-treatment-rationale_case-marcus_05": {
      "text": "Hvordan skal det å sitte med følelser hjelpe marerittene, i stedet for å gjøre nettene verre?",
      "suggestion": "Dette handler ikke om å sitte endeløst i smerte. Vi stabiliserer deg før og etter dårlige netter og bearbeider små biter bare når det er trygt, fordi det gir etterdønningene mindre kraft."
    },
    "dp_providing-treatment-rationale_case-marcus_06": {
      "text": "Hvordan skal det å jobbe med kontakt hjelpe når det å være alene hindrer folk i å kreve noe av meg?",
      "suggestion": "Å være alene har beskyttet deg mot press og tap. Vi bygger kontakt i små, valgte doser, slik at nærhet blir noe du kan styre, ikke noe som fanger deg."
    },
    "dp_providing-treatment-rationale_case-marcus_07": {
      "text": "Hva er fremgang for meg hvis det å føle seg normal er urealistisk?",
      "suggestion": "Fremgang kan bety mer søvn, færre skvett, små øyeblikk av varme og å tåle å være nær en følelse en liten stund uten å stenge ned, fordi kontakt begynner å kjennes trygg i små doser."
    },
    "dp_providing-treatment-rationale_case-marcus_08": {
      "text": "Hvorfor skal jeg stole på dette hvis terapeuter vanligvis presser på for historier jeg ikke vil fortelle?",
      "suggestion": "Den mistilliten er viktig informasjon. Vi gjør arbeidet forutsigbart, forklarer hvorfor vi spør, og lar deg styre dybden, fordi tillit fortjenes gjennom tempo, ikke kreves."
    },
    "dp_providing-treatment-rationale_case-marcus_09": {
      "text": "Kan vi holde dette praktisk og ikke grave gjennom alt det vonde?",
      "suggestion": "Ja. Vi sikter oss inn på det som påvirker hverdagen nå og bruker korte drypp av følelsesarbeid bare der det hjelper, så praktiske endringer og dypere stoff holder seg i biter du tåler."
    },
    "dp_providing-treatment-rationale_case-marcus_10": {
      "text": "Hva om jeg aldri føler meg normal igjen, og denne flatheten bare er den jeg er nå?",
      "suggestion": "Vi jager ikke en perfekt normal. Vi bygger mot mer søvn, mindre nedstenging og trygg kontakt, som er tegn på at følelser og nærhet kan komme tilbake i doser du tåler."
    },
    "dp_empathic-explorations_case-sara_01": {
      "text": "Bare det å se navnet hans dukke opp får magen min til å synke, og hele meg blir liten.",
      "suggestion": "Det er det suget i magen, og med det en litenhet, nesten som om en del av deg folder seg sammen."
    },
    "dp_empathic-explorations_case-sara_02": {
      "text": "Jeg sier «det går bra» til venner, men halsen snører seg som om ordene sitter fast.",
      "suggestion": "Stramheten bærer ordene du holder tilbake, kanskje sorgen som ikke trygt får komme ut som «det går ikke bra»."
    },
    "dp_empathic-explorations_case-sara_03": {
      "text": "Kveldene drar seg ut etter middag, og jeg begynner å vaske ting som allerede er rene.",
      "suggestion": "Vaskingen gir hendene noe å gjøre mens de tomme timene åpner seg, kanskje så ensomheten ikke får legge seg for tett på."
    },
    "dp_empathic-explorations_case-sara_04": {
      "text": "Jeg skrev «unnskyld» til ham tre ganger, og så innså jeg at jeg ikke engang vet hva jeg unnskyldte meg for.",
      "suggestion": "Unnskyldningen strekker seg etter en vei tilbake til ham, og under den kan det ligge en frykt for at tapet må være din skyld."
    },
    "dp_empathic-explorations_case-sara_05": {
      "text": "Jeg sletter bilder for å bevise at jeg er ferdig, får panikk og leter etter dem igjen.",
      "suggestion": "Én del prøver å gjøre slutten endelig, mens en annen får panikk over å miste det siste sporet av ham."
    },
    "dp_empathic-explorations_case-sara_06": {
      "text": "Når noen er snille mot meg, faller blikket før jeg rekker å stoppe det.",
      "suggestion": "Når vennlighet kommer nær, senker noe i deg blikket, kanskje uten helt å vite hva det skal gjøre med det å bli tatt vare på."
    },
    "dp_empathic-explorations_case-sara_07": {
      "text": "I noen sekunder etter at jeg våkner, glemmer jeg det, og så faller hele brystet.",
      "suggestion": "Det fallet bærer øyeblikket der tapet kommer tilbake, som om hele deg må lære slutten på nytt hver morgen."
    },
    "dp_empathic-explorations_case-sara_08": {
      "text": "Jeg synes det er flaut at jeg fortsatt begynner å gråte når alle andre mener jeg burde ha gått videre.",
      "suggestion": "Flauheten ligger over en sorg som ikke har klart å følge alle andres tidsplan."
    },
    "dp_empathic-explorations_case-sara_09": {
      "text": "Når jeg ser par holde hender, verker brystet, og plutselig føler jeg meg barnslig for å ville ha det.",
      "suggestion": "Verken strekker seg mot å bli valgt, og skammen ser ut til å komme rett bak lengselen."
    },
    "dp_empathic-explorations_case-sara_10": {
      "text": "Hvis jeg lar noen se hele rotet, ser jeg for meg at de stille ønsker at jeg skal slutte.",
      "suggestion": "Det finnes et ønske om å bli kjent, og samtidig en frykt for at smerten din blir for mye for andre."
    },
    "dp_empathic-explorations_case-michael_01": {
      "text": "Når noen korrigerer én detalj, ringer det i ørene og jeg kjenner at rommet ser på meg.",
      "suggestion": "Ringingen ser ut til å markere øyeblikket der korrigering blir til blottstillelse, kanskje før sinnet har rukket helt fram."
    },
    "dp_empathic-explorations_case-michael_02": {
      "text": "Jeg går inn i møter og sjekker allerede hvem som kan komme til å vise meg manglende respekt før noen har sagt noe.",
      "suggestion": "Skanningen skjer før noe har gått galt, som om en del av deg prøver å fange ydmykelsen før den lander."
    },
    "dp_empathic-explorations_case-michael_03": {
      "text": "Etter et utbrudd er det en grop i magen jeg unngår.",
      "suggestion": "Den gropen i magen ser ut til å romme noe som er vanskelig å møte etter at sinnet har lagt seg."
    },
    "dp_empathic-explorations_case-michael_04": {
      "text": "Når jeg tenker på å be om unnskyldning, kjenner jeg meg liten før jeg har sagt et ord.",
      "suggestion": "Unnskyldningen betyr ikke bare reparasjon; det virker som reparasjon vikles sammen med å bli gjort liten."
    },
    "dp_empathic-explorations_case-michael_05": {
      "text": "Et lite sukk fra kona mi treffer som om dommen allerede er falt, og jeg fyrer meg opp før jeg skjønner hvorfor.",
      "suggestion": "Sukket ser raskt ut til å bli en dom, og varmen samler seg rundt det første stikket."
    },
    "dp_empathic-explorations_case-michael_06": {
      "text": "Når jeg ikke vet svaret, låser brystet seg, som om alle kan se at jeg ikke er bra nok.",
      "suggestion": "Når du ikke vet, blir det fort som å bli avslørt som ikke bra nok, og låsningen holder skammen på plass."
    },
    "dp_empathic-explorations_case-michael_07": {
      "text": "Jeg leser hver melding om igjen før jeg sender, fordi én feil kjennes som å bli avslørt.",
      "suggestion": "Sjekkingen ser ut til å stå vakt mot avsløring, som om én feil kan avdekke noe skamfullt."
    },
    "dp_empathic-explorations_case-michael_08": {
      "text": "I det øyeblikket jeg føler meg svak, hører jeg stemmen til faren min og vil knuse den.",
      "suggestion": "«Svak» trekker den gamle stemmen nær, og trangen til å knuse den kan beskytte den mindre følelsen under."
    },
    "dp_empathic-explorations_case-michael_09": {
      "text": "Noen netter spiller jeg av hvert ord jeg sa, og prøver å finne nøyaktig når jeg mistet kontrollen.",
      "suggestion": "Gjennomgangen leter liksom etter øyeblikket der du kunne ha stoppet det, med skammen fortsatt våken ved siden av deg."
    },
    "dp_empathic-explorations_case-michael_10": {
      "text": "Når jeg hører min egen stemme bli skarp, får jeg panikk for at jeg blir som faren min.",
      "suggestion": "Den skarpe stemmen ser ut til å trekke frykt og sorg rett inn i raseriet."
    },
    "dp_empathic-explorations_case-jason_01": {
      "text": "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      "suggestion": "Den stramme halsen og blankheten kommer sammen, som om systemet ditt visker alt ut når oppmerksomheten vendes mot deg."
    },
    "dp_empathic-explorations_case-jason_02": {
      "text": "Jeg holder fingeren over «send», og så sletter jeg meldingen fordi det å ville ha kontakt plutselig kjennes ydmykende.",
      "suggestion": "Ønsket om å rekke ut er der, og så ser ydmykelsen ut til å skylle inn og viske det bort."
    },
    "dp_empathic-explorations_case-jason_03": {
      "text": "Når noen gir meg et kompliment, trekker jeg på skuldrene som om det ikke er noe, men jeg tenker på det i timevis.",
      "suggestion": "Skuldertrekket beskytter deg mot å la det bety noe, mens en annen del fortsetter å kretse rundt muligheten for at det kanskje betyr noe."
    },
    "dp_empathic-explorations_case-jason_04": {
      "text": "Hvis jeg møter blikket til noen for lenge, kjennes det som om de oppdager alt det keitete i meg.",
      "suggestion": "Blikkontakt ser ut til å bli gransking, og da blir alt det keitete plutselig synlig."
    },
    "dp_empathic-explorations_case-jason_05": {
      "text": "Etter møter kan én liten pinlig pause få meg til å krympe meg resten av dagen.",
      "suggestion": "Den lille pausen blir mye større inni deg, nesten som om den står for hele frykten for å bli dømt."
    },
    "dp_empathic-explorations_case-jason_06": {
      "text": "Når jeg går inn i et rom, finner jeg utgangen før jeg lar meg legge merke til noen.",
      "suggestion": "Utgangen ser ut til å bli tryggere å finne enn menneskene, som om kontakt må vente bak fluktmuligheten."
    },
    "dp_empathic-explorations_case-jason_07": {
      "text": "Før jeg presenterer meg, svetter hendene som om alle skal vurdere meg.",
      "suggestion": "Selv en enkel presentasjon begynner å kjennes som en prøve, med hele systemet ditt spent på en karakter."
    },
    "dp_empathic-explorations_case-jason_08": {
      "text": "Jeg sammenligner meg med alle der og ender alltid nederst.",
      "suggestion": "Sammenligning blir raskt til en rangering, og på en eller annen måte havner du alltid der det gjør mest vondt."
    },
    "dp_empathic-explorations_case-jason_09": {
      "text": "Noen ganger later jeg som jeg skriver melding, så småprat ikke avslører hvor blank jeg blir.",
      "suggestion": "Telefonen gir deg dekning, mens blankheten under ser ut til å bære frykten for å bli sett."
    },
    "dp_empathic-explorations_case-jason_10": {
      "text": "På søndagskvelder drøyer jeg med å svare venner til det kjennes for sent til å bety noe.",
      "suggestion": "Drøyingen rommer både ønsket om kontakt og forventningen om at den glipper før du får tak i den."
    },
    "dp_empathic-explorations_case-laura_01": {
      "text": "De fleste dager er flate, men hvis tristhet flimrer, stenger jeg den ned før den brer seg.",
      "suggestion": "Flatheten beskytter deg, og glimtet av tristhet ser farlig nok ut til at en dør lukkes før det får bre seg."
    },
    "dp_empathic-explorations_case-laura_02": {
      "text": "Hevede stemmer får magen til å falle, og skuldrene låser seg med en gang.",
      "suggestion": "Magefallet og spenningen kommer som én alarm, som om kroppen varsler at noe ikke er trygt."
    },
    "dp_empathic-explorations_case-laura_03": {
      "text": "Når noen er snille, flyter jeg langt bort før jeg rekker å avgjøre om jeg stoler på det.",
      "suggestion": "Vennlighet kjennes ikke bare varm; den ser ut til å sette i gang avstand før tillit får en sjanse."
    },
    "dp_empathic-explorations_case-laura_04": {
      "text": "Jeg drikker vin om kvelden fordi støyen i hodet blir skarpere når huset blir stille.",
      "suggestion": "Vinen ser ut til å dempe skarpheten som kommer når huset blir stille."
    },
    "dp_empathic-explorations_case-laura_05": {
      "text": "Jeg våkner med stramme skuldre, som om dagen allerede har truet meg.",
      "suggestion": "Dagen ser ut til å komme som en trussel før noe har skjedd, og hele systemet ditt gjør seg allerede klart."
    },
    "dp_empathic-explorations_case-laura_06": {
      "text": "Selv mild berøring får meg til å skvette, og etterpå hater jeg at reaksjonen min er så synlig.",
      "suggestion": "Skvetten kommer først, og så ser skammen ut til å komme fordi reaksjonen din har blitt sett."
    },
    "dp_empathic-explorations_case-laura_07": {
      "text": "Når gode nyheter kommer, kan jeg si de riktige ordene, men jeg kjenner nesten ingenting.",
      "suggestion": "Ordene vet hvordan de skal svare, mens følelsen blir langt borte, som om glede ikke helt klarer å krysse avstanden."
    },
    "dp_empathic-explorations_case-laura_08": {
      "text": "Noen ganger åpner en sang noe i meg, og et øyeblikk kan jeg nesten kjenne tristheten.",
      "suggestion": "Sangen ser ut til å nå et sted nummenheten vanligvis dekker over, så litt tristhet får komme nær."
    },
    "dp_empathic-explorations_case-laura_09": {
      "text": "Jeg får skyldfølelse for å ønske trøst, som om det å trenge noe gjør meg til et problem.",
      "suggestion": "Skylden ser ut til å gjøre et menneskelig behov til bevis på at du ber om for mye."
    },
    "dp_empathic-explorations_case-laura_10": {
      "text": "Jeg hopper over filmer med slåssing fordi ett eneste rop kan få rommet til å forsvinne.",
      "suggestion": "Ropet ser ut til å trekke deg så raskt ut av nåtiden at det å unngå filmen blir en måte å bli her på."
    },
    "dp_empathic-explorations_case-carlos_01": {
      "text": "En bestemt tone treffer, og brystet blir varmt før jeg vet hva som ble sagt.",
      "suggestion": "Varmen kommer før ordene, som om tonefallet alene berører stedet som forventer mangel på respekt."
    },
    "dp_empathic-explorations_case-carlos_02": {
      "text": "Jeg går frem og tilbake til beina verker, for hvis jeg sitter stille, kjennes det som om jeg kan eksplodere.",
      "suggestion": "Det å gå fram og tilbake ser ut til å gi varmen et sted å gå, mens eksplosjonen fortsatt ligger rett under overflaten."
    },
    "dp_empathic-explorations_case-carlos_03": {
      "text": "Hvis jeg trekker meg, kjenner jeg at jeg forsvinner, som om jeg ikke har noen kontur igjen.",
      "suggestion": "Å trekke seg ser ut til å treffe et sted der du forsvinner, der konturene begynner å bli borte."
    },
    "dp_empathic-explorations_case-carlos_04": {
      "text": "Jeg ser for meg igjen og igjen at gutten min skvetter, og jeg hater at han lærte den frykten av meg.",
      "suggestion": "Den scenen ser ut til å bære både kjærligheten til ham og smerten ved at frykten peker mot deg."
    },
    "dp_empathic-explorations_case-carlos_05": {
      "text": "Når det blir rolig, føler jeg meg utsatt, som om neste slag bare venter.",
      "suggestion": "Roen ser ut til å senke vakten og etterlate deg ventende på neste slag."
    },
    "dp_empathic-explorations_case-carlos_06": {
      "text": "Jeg ødelegger ting fordi kraften i meg kjennes som om den må lande et sted.",
      "suggestion": "Ødeleggelsen ser ut til å gi kraften et sted å lande før den når noen."
    },
    "dp_empathic-explorations_case-carlos_07": {
      "text": "Hvis jeg lar meg selv være myk, ser jeg for meg at noen bruker det mot meg.",
      "suggestion": "Mykhet ser ut til å bære bildet av å være ubeskyttet, nesten som å gi noen et sted å slå."
    },
    "dp_empathic-explorations_case-carlos_08": {
      "text": "Respektløshet treffer brystet som et slag, og jeg trenger at de forstår at det gjorde vondt.",
      "suggestion": "Slaget er ikke bare sinne; det bærer et krav om at såretheten under blir gjenkjent."
    },
    "dp_empathic-explorations_case-carlos_09": {
      "text": "Når jeg sier at jeg vil at de skal være trygge, faller sinnet, og noe mykere skremmer meg.",
      "suggestion": "Ønsket om trygghet henter fram mykhet, og den mykheten kan kjennes blottstilt fordi den betyr så mye."
    },
    "dp_empathic-explorations_case-carlos_10": {
      "text": "Jeg lærte tidlig at å være den lille betydde at andre kunne ta det de ville.",
      "suggestion": "Den gamle regelen bærer fortsatt faren ved å være liten og ubeskyttet."
    },
    "dp_empathic-explorations_case-nina_01": {
      "text": "I det øyeblikket jeg ber om hjelp, skyller skylden inn og jeg får lyst til å trekke det tilbake.",
      "suggestion": "Skylden kommer så raskt at det nesten er som om behovet må tas tilbake med en gang."
    },
    "dp_empathic-explorations_case-nina_02": {
      "text": "Jeg bretter klær og svarer på meldinger så jeg slipper å kjenne bitterhet.",
      "suggestion": "Gjøringen holder bitterheten på avstand, kanskje fordi det å stoppe ville la tristheten under hente deg inn."
    },
    "dp_empathic-explorations_case-nina_03": {
      "text": "Når jeg sier nei, knyter magen seg, og jeg ser straks for meg at alle blir skuffet.",
      "suggestion": "Knuten ser ut til å henge sammen med bildet av å skuffe dem, som om grensen med en gang truer tilhørigheten."
    },
    "dp_empathic-explorations_case-nina_04": {
      "text": "Selv det å be om en liten kjøretur kommer ut med tre unnskyldninger.",
      "suggestion": "Unnskyldningene kommer før behovet får stå på egne bein, som om det å spørre allerede risikerer å være for mye."
    },
    "dp_empathic-explorations_case-nina_05": {
      "text": "Et rotete hus får meg til å føle at alle kan se at jeg mislykkes.",
      "suggestion": "Rotet blir mer enn rot; det blir blottstillelse, som om folk kan lese nederlaget i rommet."
    },
    "dp_empathic-explorations_case-nina_06": {
      "text": "Når alle trenger meg samtidig, klatrer overveldelsen opp i hodet til det dunker.",
      "suggestion": "Hodepinen ser ut til å bære presset som ikke har noe annet sted å gå når alle trenger deg."
    },
    "dp_empathic-explorations_case-nina_07": {
      "text": "Jeg drømmer om å bli tatt vare på, og så skammer jeg meg for at jeg vil det.",
      "suggestion": "Ønsket om å bli tatt vare på er der, og nesten rett ved siden av kommer skammen over å ønske det."
    },
    "dp_empathic-explorations_case-nina_08": {
      "text": "Jeg tar hver oppgave før noen rekker å se skuffet ut over meg.",
      "suggestion": "Å ta alt beskytter deg mot det forestilte skuffede blikket, mens belastningen lander i deg."
    },
    "dp_empathic-explorations_case-nina_09": {
      "text": "Ved siden av andre mødre krymper jeg, som om de alle kan en regel jeg gikk glipp av.",
      "suggestion": "Sammenligning gjør deg mindre, og kanskje ligger det en gammel frykt der for å være den som på en eller annen måte mislyktes med reglene."
    },
    "dp_empathic-explorations_case-nina_10": {
      "text": "Om kvelden kollapser jeg etter å ha spilt «det går fint» for alle hele dagen.",
      "suggestion": "Når forestillingen tar slutt, får de tilbakeholdte følelsene litt rom til å komme."
    },
    "dp_empathic-explorations_case-aisha_01": {
      "text": "Hvis et svar ikke kommer, kjennes det som om det åpner seg et hull i brystet, og jeg får ikke puste.",
      "suggestion": "Når svaret ikke kommer, er det som om det åpner seg et hull i brystet og alt i deg begynner å falle."
    },
    "dp_empathic-explorations_case-aisha_02": {
      "text": "Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "Svingningen går så fort, nesten som om frykten for å miste noen vipper rett over i å skyve dem bort."
    },
    "dp_empathic-explorations_case-aisha_03": {
      "text": "Noen ganger klorer jeg fordi tomheten blir så uvirkelig at smerte kjennes som bevis på at jeg finnes.",
      "suggestion": "Kloringen ser ut til å komme når nummenheten begynner å viske deg ut, som om smerte blir det raskeste beviset på at du fortsatt er her."
    },
    "dp_empathic-explorations_case-aisha_04": {
      "text": "Hvis du kaster et blikk på klokka, føler jeg meg droppet så fort at jeg får lyst til å straffe deg for det.",
      "suggestion": "Det blikket ser ut til å bli til forlatthet på et øyeblikk, og følelsen av å bli droppet vipper raskt over mot angrep."
    },
    "dp_empathic-explorations_case-aisha_05": {
      "text": "Jeg tester folk fordi jeg må vite om de bryr seg nok til å bli.",
      "suggestion": "Å teste folk kjennes som en desperat måte å sjekke om du betyr nok til at de blir."
    },
    "dp_empathic-explorations_case-aisha_06": {
      "text": "Når noen sier farvel, tipper rommet som om jeg blir sluppet.",
      "suggestion": "Farvel ser ut til å gjøre adskillelse til et plutselig fall, der alt inni deg leter desperat etter noe å holde i."
    },
    "dp_empathic-explorations_case-aisha_07": {
      "text": "Vennlighet får meg til å hulke, og en annen del av meg vil bare stikke.",
      "suggestion": "Vennlighet berører begge stedene samtidig, delen som sulter etter den, og delen som vil løpe."
    },
    "dp_empathic-explorations_case-aisha_08": {
      "text": "Det som ble gjort mot meg får meg til å føle meg skitten i min egen kropp.",
      "suggestion": "Den skitne følelsen høres ut som noe du bærer i kroppen fra det som ble gjort mot deg."
    },
    "dp_empathic-explorations_case-aisha_09": {
      "text": "Jeg stirrer på døra for å være sikker på at du ikke avslutter tidlig.",
      "suggestion": "Øynene dine holder vakt ved døra, som om det å slappe av bare et sekund kunne bety å bli forlatt."
    },
    "dp_empathic-explorations_case-aisha_10": {
      "text": "Hvis du avlyser, er det noe i meg som aldri vil komme tilbake.",
      "suggestion": "En avlysning kjennes ikke liten i det hele tatt; den lander som en skarp bekreftelse på at du kan bli droppet."
    },
    "dp_empathic-explorations_case-david_01": {
      "text": "Når hun sier at jeg er kald, brenner det i ansiktet og brystet blir hardt.",
      "suggestion": "Når «kald» lander, kommer det harde brystet og det brennende ansiktet inn med en gang, og alt i deg ser ut til å låse seg."
    },
    "dp_empathic-explorations_case-david_02": {
      "text": "Hvis jeg ikke er best, føler jeg meg hul, som om ingenting holder meg oppe.",
      "suggestion": "Å ikke være best ser ut til å åpne det hule stedet der verdien begynner å renne ut."
    },
    "dp_empathic-explorations_case-david_03": {
      "text": "Når jeg føler meg dømt, glatter jeg skjorten og begynner å ramse opp prestasjoner.",
      "suggestion": "Å rette seg opp og ramse opp prestasjoner kjennes som å ta på rustning mot skam."
    },
    "dp_empathic-explorations_case-david_04": {
      "text": "Ros kjennes godt et sekund, så renner den ut før jeg klarer å tro på den.",
      "suggestion": "Rosen berører noe kort, men blir ikke lenge nok til å svare den tvilende delen."
    },
    "dp_empathic-explorations_case-david_05": {
      "text": "I vanskelige samtaler sjekker jeg telefonen i det øyeblikket jeg føler meg presset opp i et hjørne.",
      "suggestion": "Telefonen blir en rask sidedør når nærhet begynner å kjennes som å være fanget."
    },
    "dp_empathic-explorations_case-david_06": {
      "text": "Når barna gråter, blir jeg utålmodig før jeg engang skjønner hvorfor.",
      "suggestion": "Barnas tårer ser ut til å vekke noe i deg som er vanskelig å bære, og utålmodigheten kommer raskt."
    },
    "dp_empathic-explorations_case-david_07": {
      "text": "Å innrømme at jeg tar feil får ansiktet til å brenne, som om alle kan se nederlaget.",
      "suggestion": "Den brennende følelsen bærer mer enn å ha tatt feil; den ser ut til å avsløre en hel frykt for at feilen blir synlig."
    },
    "dp_empathic-explorations_case-david_08": {
      "text": "Siden affæren kjennes nettene flate og tunge, som om huset dømmer meg.",
      "suggestion": "Tyngden ser ut til å romme både skyld og blottstillelse, som om det stille huset fortsetter å se tilbake på deg."
    },
    "dp_empathic-explorations_case-david_09": {
      "text": "Jeg vil ha anerkjennelse uten å måtte be om det, fordi det å be får meg til å føle meg ynkelig.",
      "suggestion": "Ønsket om å bli lagt merke til bærer en ekte sult, og å be om det berører skammen over å trenge det så sterkt."
    },
    "dp_empathic-explorations_case-david_10": {
      "text": "Tanken på å være ordinær kjennes uutholdelig, som å miste det eneste beviset på at jeg betyr noe.",
      "suggestion": "«Ordinær» ser ut til å true beviset på verdi som du har båret så lenge."
    },
    "dp_empathic-explorations_case-marcus_01": {
      "text": "De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "De fleste dager holder nummenheten stand, og så kommer bølgen som om følelsen bryter gjennom på én gang."
    },
    "dp_empathic-explorations_case-marcus_02": {
      "text": "Mareritt river meg våken, og etterpå føler jeg meg både oppskrudd og hul.",
      "suggestion": "Oppskrudd og tom står side om side, kroppen på vakt mens alt annet føles langt unna."
    },
    "dp_empathic-explorations_case-marcus_03": {
      "text": "Folkemengder får skuldrene til å heve seg, og jeg holder meg ved veggen uten å bestemme det.",
      "suggestion": "Systemet velger kanten før du gjør det, som om avstand er måten det holder deg orientert og trygg på."
    },
    "dp_empathic-explorations_case-marcus_04": {
      "text": "Etter mørkets frembrudd blir stillheten i leiligheten tung, som om noe venter.",
      "suggestion": "Stillheten blir nærmest et nærvær etter mørkets frembrudd, og presser på med det som har blitt holdt ute hele dagen."
    },
    "dp_empathic-explorations_case-marcus_05": {
      "text": "Etter jobb sitter jeg i bilen fordi leiligheten kjennes for stille til å gå inn i.",
      "suggestion": "Bilen blir et holdepunkt før stillheten der oppe, kanskje en måte å utsette ensomheten som venter."
    },
    "dp_empathic-explorations_case-marcus_06": {
      "text": "Jeg holder lyset dempet og lar telefonen være stille, så ingenting når inn.",
      "suggestion": "Det dempede rommet og den ubesvarte telefonen ser ut til å lage en slags grense, så kontakt holder seg langt nok unna til å håndteres."
    },
    "dp_empathic-explorations_case-marcus_07": {
      "text": "Gode øyeblikk kjennes uvirkelige, som om de skjer på andre siden av glass.",
      "suggestion": "Det gode er synlig, men blir på andre siden, nært nok til å se og for langt unna til å kjenne."
    },
    "dp_empathic-explorations_case-marcus_08": {
      "text": "En plutselig lyd skjærer gjennom meg, og før jeg rekker å tenke, skanner jeg rommet.",
      "suggestion": "Lyden ser ut til å gjøre rommet til trussel før hodet rekker å komme tilbake."
    },
    "dp_empathic-explorations_case-marcus_09": {
      "text": "Jeg tar ikke telefonen når familien ringer, fordi jeg ikke vil kjenne på noe.",
      "suggestion": "Å ikke svare familien ser ut til å være en måte å hindre smertefulle følelser i å bli satt i gang."
    },
    "dp_empathic-explorations_case-marcus_10": {
      "text": "En del av meg tenker at å være alene for alltid ville gjøre mindre vondt enn å håpe og bli dratt under igjen.",
      "suggestion": "Det å være alene høres beskyttende ut, som om det prøver å spare deg for fallet som kommer etter håp."
    },
    "dp_empathic-evocations_case-sara_01": {
      "text": "Etter middag merker jeg hvor stille leiligheten er, og så begynner jeg å sjekke mobilen igjen.",
      "suggestion": "Stillheten legger seg rundt deg etter middag, og mobilen blir det lille stedet der han fortsatt kanskje kan dukke opp."
    },
    "dp_empathic-evocations_case-sara_02": {
      "text": "Jeg sier til folk at det går bra, men jeg kjenner meg flat når jeg sier det.",
      "suggestion": "Det går bra kommer glatt ut, mens noe under har blitt blekt og stille."
    },
    "dp_empathic-evocations_case-sara_03": {
      "text": "Jeg fant jakken hans i skapet og ble stående der lenger enn det ga mening.",
      "suggestion": "Den jakken stopper deg i døråpningen, en liten bit av ham som trekker hele tapet tilbake i rommet."
    },
    "dp_empathic-evocations_case-sara_04": {
      "text": "Noen morgener glemmer jeg det et sekund, og så husker jeg at vi ikke er sammen lenger.",
      "suggestion": "Det er det ene klare sekundet, og så lander bruddet tilbake på deg som en tyngde i senga."
    },
    "dp_empathic-evocations_case-sara_05": {
      "text": "Når venner spør hvordan det går, svarer jeg kort og bytter tema.",
      "suggestion": "Det korte svaret lukker døra raskt, mens det egentlige svaret står trangt i halsen."
    },
    "dp_empathic-evocations_case-sara_06": {
      "text": "Jeg blir sittende på mobilen sent fordi det er vanskelig å legge seg nå.",
      "suggestion": "Skjermen blir et lite nattlys mot den tomme siden av senga, og holder den mørke følelsen akkurat utenfor rekkevidde."
    },
    "dp_empathic-evocations_case-sara_07": {
      "text": "En sang kom på i en butikk, og jeg måtte gå ut før jeg begynte å gråte.",
      "suggestion": "De første tonene finner deg midt i butikkgangen, og plutselig står sorgen der under butikklyset."
    },
    "dp_empathic-evocations_case-sara_08": {
      "text": "Jeg tenker stadig at jeg kanskje gjorde noe galt, men jeg finner ikke ut hva.",
      "suggestion": "Tankene leter etter feilen, som om de bare kan finne den løse tråden, vil hele bruddet gi mening."
    },
    "dp_empathic-evocations_case-sara_09": {
      "text": "Noen ganger setter jeg meg på gulvet i stedet for å legge meg.",
      "suggestion": "Gulvet blir stedet du folder deg sammen når senga kjennes for åpen og for bred."
    },
    "dp_empathic-evocations_case-sara_10": {
      "text": "Når du er snill mot meg, blir jeg brydd og ser bort.",
      "suggestion": "Vennligheten kommer nær, nesten for varm å ta inn, så blikket faller til tryggere grunn."
    },
    "dp_empathic-evocations_case-michael_01": {
      "text": "Når noen korrigerer meg foran teamet, blir jeg varm og slutter å høre etter.",
      "suggestion": "Varmen skyter opp, som om rommet snevrer seg inn til ett skarpt merke på deg."
    },
    "dp_empathic-evocations_case-michael_02": {
      "text": "Jeg går inn i møter og forventer at folk skal rote det til, og jeg hater at jeg gjør det.",
      "suggestion": "Du kommer inn allerede i spenn, som om en del av deg står vakt ved døra før noen har sagt noe."
    },
    "dp_empathic-evocations_case-michael_03": {
      "text": "På slutten av dagen verker kjeven, og da skjønner jeg at jeg har holdt tilbake kommentarer.",
      "suggestion": "Kjeven bærer hele dagen, låst rundt hver skarpe setning du måtte svelge."
    },
    "dp_empathic-evocations_case-michael_04": {
      "text": "Når jeg har smelt, blir jeg flau etterpå, men jeg prøver mest å ikke tenke på det.",
      "suggestion": "Flauheten blir liggende der etterpå, tung og våt, mens du prøver å gå utenom den."
    },
    "dp_empathic-evocations_case-michael_05": {
      "text": "Når kona mi sukker, går jeg ut fra at hun dømmer meg.",
      "suggestion": "Det lille sukket kan krysse rommet som en anklage, og systemet ditt spenner seg før hun har sagt et ord."
    },
    "dp_empathic-evocations_case-michael_06": {
      "text": "Hvis noen sier ro deg ned, blir jeg sintere med en gang.",
      "suggestion": "De to ordene tenner fyrstikken, og ilden er i gang før du rekker å vite hva som ble antent."
    },
    "dp_empathic-evocations_case-michael_07": {
      "text": "Når jeg ikke vet svaret, føler jeg meg blottstilt.",
      "suggestion": "Å ikke vite åpner et nakent sted, som om all kompetansen du støtter deg på mister dekning et øyeblikk."
    },
    "dp_empathic-evocations_case-michael_08": {
      "text": "Noen ganger smeller jeg med dører fordi jeg ikke vet hva annet jeg skal gjøre med følelsen.",
      "suggestion": "Døra tar følelsen for deg, høyt nok til å dekke det mindre stikket under."
    },
    "dp_empathic-evocations_case-michael_09": {
      "text": "Å tenke på å si unnskyld først får meg til å føle meg svak.",
      "suggestion": "Unnskyldningen kjennes som å gå ned på lavere grunn, med alle andre plutselig høyere rundt deg."
    },
    "dp_empathic-evocations_case-michael_10": {
      "text": "Om natten spiller jeg av krangelen og hører hvor skarp jeg hørtes ut.",
      "suggestion": "Huset blir stille, men din egen stemme fortsetter å runge på kjøkkenet, fortsatt skarp etter at krangelen er over."
    },
    "dp_empathic-evocations_case-jason_01": {
      "text": "Når det er min tur i et møte, mister jeg tråden i det jeg skulle si.",
      "suggestion": "Øyeblikket vender seg mot deg, og setningen glipper unna som om rommet trekker den bort."
    },
    "dp_empathic-evocations_case-jason_02": {
      "text": "Hendene mine svetter under bordet, så jeg skjuler dem.",
      "suggestion": "Til og med hendene kjennes som om de kan avsløre deg, så de forsvinner under bordet før noen ser."
    },
    "dp_empathic-evocations_case-jason_03": {
      "text": "Jeg øver på hva jeg skal si, men når folk ser på meg, fryser jeg.",
      "suggestion": "Alle de innøvde ordene står klare, og så lander blikkene på deg og alt låser seg bak et lag is."
    },
    "dp_empathic-evocations_case-jason_04": {
      "text": "Hvis folk ler i nærheten, antar jeg at jeg gjorde noe rart.",
      "suggestion": "Latteren går gjennom rommet og peker seg mot deg før du vet hva den handlet om."
    },
    "dp_empathic-evocations_case-jason_05": {
      "text": "Når oppmerksomheten vender seg mot meg, prøver jeg å ta mindre plass.",
      "suggestion": "Kroppen begynner å gjøre seg mindre, leter etter en måte å være til stede på uten å bli sett."
    },
    "dp_empathic-evocations_case-jason_06": {
      "text": "Når noen gir meg et kompliment, tror jeg egentlig ikke på det.",
      "suggestion": "Komplimentet berører overflaten og glir av før det når stedet som trenger det."
    },
    "dp_empathic-evocations_case-jason_07": {
      "text": "Søndag kveld begynner jeg å bli nedstemt, men jeg scroller mest.",
      "suggestion": "Uka kommer tidlig inn i rommet, og scrollingen blir et lite bevegelig lys mot tyngden."
    },
    "dp_empathic-evocations_case-jason_08": {
      "text": "Jeg skriver enkle meldinger om og om igjen, og noen ganger sender jeg dem ikke.",
      "suggestion": "Én liten melding blir en smal døråpning, og hver omskriving er et nytt skritt tilbake fra å bli sett."
    },
    "dp_empathic-evocations_case-jason_09": {
      "text": "Selv det å si hei kan høres feil ut for meg etterpå.",
      "suggestion": "Det lille hei-et blir hengende i ørene dine, som om ett vanlig ord har blitt bevis mot deg."
    },
    "dp_empathic-evocations_case-jason_10": {
      "text": "I grupper følger jeg med på hvor utgangen er.",
      "suggestion": "Utgangen blir det tryggeste stedet i rommet, stedet blikket holder fast i når oppmerksomheten kommer for nær."
    },
    "dp_empathic-evocations_case-laura_01": {
      "text": "De fleste morgener våkner jeg uten å kjenne særlig mye.",
      "suggestion": "Dagen kommer avbleket, som om fargen er tatt ut av den før du engang setter deg opp."
    },
    "dp_empathic-evocations_case-laura_02": {
      "text": "En dør smeller, og jeg vet at det bare er en dør, men kroppen reagerer først.",
      "suggestion": "Lyden når kroppen før hodet rekker å forklare, og den gamle alarmen går gjennom rommet her og nå."
    },
    "dp_empathic-evocations_case-laura_03": {
      "text": "Når noen sitter nær meg, er jeg høflig, men jeg kjenner at jeg trekker meg tilbake.",
      "suggestion": "Det høflige ansiktet blir værende foran, mens en annen del av deg trekker seg bak et glass."
    },
    "dp_empathic-evocations_case-laura_04": {
      "text": "Jeg ser folk le, og jeg klarer ikke å kjenne meg igjen i det.",
      "suggestion": "Latteren deres er synlig rett foran deg, men glede kjennes som et språk fra et land du ikke kommer inn i."
    },
    "dp_empathic-evocations_case-laura_05": {
      "text": "Vin hjelper meg å skru av om kvelden.",
      "suggestion": "Vinen virker som en dimmer, senker volumet inni til de skarpe kantene i kvelden blir uklare."
    },
    "dp_empathic-evocations_case-laura_06": {
      "text": "Jeg ligger våken og lytter etter lyder, selv når ingenting skjer.",
      "suggestion": "Selv i senga står en del av deg vakt, lytter gjennom mørket etter bevis på fare."
    },
    "dp_empathic-evocations_case-laura_07": {
      "text": "Noen ganger får musikk meg til å gråte, og så stenger jeg det av.",
      "suggestion": "Noen få toner åpner en smal sprekk i nummenheten, og du lukker den før for mye følelse slipper gjennom."
    },
    "dp_empathic-evocations_case-laura_08": {
      "text": "Jeg bruker ekstra tid i butikker fordi det er vanskelig å dra hjem.",
      "suggestion": "De lyse gangene blir en nøytral korridor, litt mer tid før stillheten hjemme må inn."
    },
    "dp_empathic-evocations_case-laura_09": {
      "text": "Vennlige ord gjør at jeg får vondt i halsen, og jeg vet ikke hvorfor.",
      "suggestion": "Vennligheten berører et låst sted, og verken stiger i halsen før ordene kan svare."
    },
    "dp_empathic-evocations_case-laura_10": {
      "text": "Jeg har en bag pakket ved døra, selv om jeg vet det høres rart ut.",
      "suggestion": "Bagen venter ved døra som en stille utgangsplan, et tegn på at en del av deg aldri helt legger beredskapen ned."
    },
    "dp_empathic-evocations_case-carlos_01": {
      "text": "Når noen smiler skjevt til meg, begynner hendene å dirre.",
      "suggestion": "Det skjeve smilet sender strøm ut i hendene, varme som leter etter et sted å gå før ordene rekker fram."
    },
    "dp_empathic-evocations_case-carlos_02": {
      "text": "Når noen kommer opp i ansiktet mitt, strammer brystet seg og jeg vil bare få det til å stoppe.",
      "suggestion": "Brystet trekker seg stramt som en tromme, og hvert neste ord slår mot skinnet."
    },
    "dp_empathic-evocations_case-carlos_03": {
      "text": "Jeg går rundt på kjøkkenet etter krangler, fordi det blir verre hvis jeg sitter stille.",
      "suggestion": "Du går harde streker over kjøkkengulvet, prøver å tråkke ladningen ut før den kommer gjennom hender eller munn."
    },
    "dp_empathic-evocations_case-carlos_04": {
      "text": "Jeg husker stadig ansiktet til sønnen min etter at jeg ropte.",
      "suggestion": "Ansiktet hans blir værende som et blåmerke under sinnet, et merke du ikke klarer å skyve unna."
    },
    "dp_empathic-evocations_case-carlos_05": {
      "text": "Rolige folk gjør meg nervøs. Jeg stoler ikke på det.",
      "suggestion": "Ro ser for ubeskyttet ut, som noen som står åpent uten rustning og kaller det trygt."
    },
    "dp_empathic-evocations_case-carlos_06": {
      "text": "Etter at jeg smeller, blir alle stille, og jeg hater rommet.",
      "suggestion": "Etter eksplosjonen blir rommet lite og forsiktig, som om alle beveger seg rundt knust glass."
    },
    "dp_empathic-evocations_case-carlos_07": {
      "text": "Jeg biter tennene sammen til hodet gjør vondt.",
      "suggestion": "Tennene låser seg som en skrustikke, holder ordene og varmen inne til smerten begynner å dunke."
    },
    "dp_empathic-evocations_case-carlos_08": {
      "text": "Å trekke meg foran sønnen min kjennes feil.",
      "suggestion": "Å trekke seg kjennes som om konturene dine blir svakere i rommet, som om respekten kan forsvinne sammen med dem."
    },
    "dp_empathic-evocations_case-carlos_09": {
      "text": "Jeg holder hardt i rattet når jeg prøver å ikke reagere.",
      "suggestion": "Hendene klemmer rattet som et lokk over en kokende gryte, og holder varmen inne med hvite knoker."
    },
    "dp_empathic-evocations_case-carlos_10": {
      "text": "Jeg er redd sønnen min lærer å være forsiktig rundt meg.",
      "suggestion": "Den frykten treffer dypt, at stemmen din kan bli været han lærer å leve i."
    },
    "dp_empathic-evocations_case-nina_01": {
      "text": "Idet jeg setter meg ned, får jeg skyldfølelse.",
      "suggestion": "Hvile setter i gang en alarm inni deg, skyld som skyter gjennom før stolen rekker å bære vekten din."
    },
    "dp_empathic-evocations_case-nina_02": {
      "text": "Jeg føler ansvar for altfor mye, men jeg vet ikke hva jeg kan slutte å gjøre.",
      "suggestion": "Armene er fulle av alle andres tyngde, og det finnes ingen ledig hånd til ditt eget."
    },
    "dp_empathic-evocations_case-nina_03": {
      "text": "Når jeg ber om hjelp, strammer magen seg.",
      "suggestion": "Forespørselen knyter seg i magen før den rekker fram til noen andre."
    },
    "dp_empathic-evocations_case-nina_04": {
      "text": "Jeg smiler gjennom hodepiner fordi folk trenger at jeg fortsetter.",
      "suggestion": "Smilet strekkes over smerten og prøver å holde hele dagen oppe i en tynn tråd."
    },
    "dp_empathic-evocations_case-nina_05": {
      "text": "Utover kvelden kjennes hele kroppen tung.",
      "suggestion": "Trettheten legger seg inn i knoklene, hvert steg tykt og langsomt mot slutten av dagen."
    },
    "dp_empathic-evocations_case-nina_06": {
      "text": "Å si nei får hjertet til å rase.",
      "suggestion": "Nei-et setter i gang en alarm i brystet, som om én liten grense kan true selve kjærligheten."
    },
    "dp_empathic-evocations_case-nina_07": {
      "text": "Jeg vasker sent på kvelden selv om jeg er helt utslitt.",
      "suggestion": "Benken tørkes av igjen, et midnattsritual mot frykten for at det å stoppe lar alle stå udekket."
    },
    "dp_empathic-evocations_case-nina_08": {
      "text": "Hvis huset er rotete, skammer jeg meg før noen sier noe.",
      "suggestion": "Skammen er allerede på vei oppover halsen før en eneste kommentar kommer."
    },
    "dp_empathic-evocations_case-nina_09": {
      "text": "Jeg gråter på kjøkkenet der ingen legger merke til det.",
      "suggestion": "Tårene pakkes inn i vanlige kjøkkenlyder, skjult der skapdører og rennende vann kan dekke dem."
    },
    "dp_empathic-evocations_case-nina_10": {
      "text": "Jeg ser for meg en dag der ingen trenger noe, og så føler jeg meg egoistisk.",
      "suggestion": "Et øyeblikk åpner en stille dag seg, og så stiller skylden seg i døråpningen før du rekker å hvile der."
    },
    "dp_empathic-evocations_case-aisha_01": {
      "text": "Når du ser på klokka, tenker jeg med en gang at du vil ha meg ut.",
      "suggestion": "Ett blikk på klokka blir et tegn på at du skal forlates, og rommet begynner å falle bort under føttene."
    },
    "dp_empathic-evocations_case-aisha_02": {
      "text": "Jeg kan gå fra å be noen bli til å be dem la meg være i fred på sekunder.",
      "suggestion": "Følelsen snur fra utstrakte hender til brann, en bryter som slås om raskere enn du klarer å roe deg."
    },
    "dp_empathic-evocations_case-aisha_03": {
      "text": "Tomhetsfølelsen blir så sterk at jeg ikke klarer å tenke klart.",
      "suggestion": "Tomheten åpner seg stort inni deg, så stor at den drar med seg både tanker og feste."
    },
    "dp_empathic-evocations_case-aisha_04": {
      "text": "Jeg klorer meg på armen når jeg begynner å føle meg uvirkelig.",
      "suggestion": "Sviingen skjærer gjennom tåken, et lite skarpt bevis på at du fortsatt er her."
    },
    "dp_empathic-evocations_case-aisha_05": {
      "text": "Når skriveprikkene forsvinner, får jeg panikk med en gang.",
      "suggestion": "Prikkene som forsvinner, river kontakttråden ut av hendene dine, og pusten blir med den."
    },
    "dp_empathic-evocations_case-aisha_06": {
      "text": "Når noen sier ha det, vet jeg at det er normalt, men jeg mister kontrollen.",
      "suggestion": "Ha det får rommet til å tippe før logikken rekker å hjelpe, og alt i deg leter etter et gulv."
    },
    "dp_empathic-evocations_case-aisha_07": {
      "text": "Når du avlyser, får jeg lyst til å slutte før du kan gjøre det igjen.",
      "suggestion": "Avlysningen åpner et gammelt fall, og det å gå først kjennes som det eneste rekkverket du kan gripe."
    },
    "dp_empathic-evocations_case-aisha_08": {
      "text": "Når noen kaller meg for mye, hører jeg det om og om igjen etterpå.",
      "suggestion": "For mye stemples over deg, rødt og høyt, som om det ikke lar seg vaske bort."
    },
    "dp_empathic-evocations_case-aisha_09": {
      "text": "Når noen er milde med meg, gråter jeg før jeg skjønner hvorfor.",
      "suggestion": "Mildheten berører veggen, og tårene strømmer gjennom før tillatelsen rekker fram."
    },
    "dp_empathic-evocations_case-aisha_10": {
      "text": "Jeg sjekker døra mens vi snakker.",
      "suggestion": "Blikket vender tilbake til døra, på vakt mot blinket der jeg kan forsvinne."
    },
    "dp_empathic-evocations_case-david_01": {
      "text": "Når kona mi kaller meg kald, blir jeg stille og kommer med en skarp kommentar.",
      "suggestion": "Kald brenner bak tennene, og den skarpe kommentaren kommer ut som en rustning som smekker igjen."
    },
    "dp_empathic-evocations_case-david_02": {
      "text": "Hvis det ikke er tydelig at jeg gjør det bra, kjenner jeg meg tom en stund.",
      "suggestion": "Uten seieren blir det ekko og barhet inni, som et rom som er tømt etter applausen."
    },
    "dp_empathic-evocations_case-david_03": {
      "text": "Når jeg føler meg liten, begynner jeg å snakke om det jeg har oppnådd.",
      "suggestion": "Prestasjonene skynder seg inn som en høyere versjon av deg og stiller seg rundt det lille, såre stedet."
    },
    "dp_empathic-evocations_case-david_04": {
      "text": "Når jeg føler meg presset opp i et hjørne, retter jeg på skjorta og forklarer merittene mine.",
      "suggestion": "Skjorta og merittene blir rustningsdeler, festet på plass før slaget kan lande."
    },
    "dp_empathic-evocations_case-david_05": {
      "text": "Ros hjelper et øyeblikk, men det varer ikke.",
      "suggestion": "Beundringen strømmer inn og renner raskt bort, uten helt å nå det hule stedet under."
    },
    "dp_empathic-evocations_case-david_06": {
      "text": "Ansiktet til barnet mitt etter at jeg smeller, plager meg mer enn jeg hadde ventet.",
      "suggestion": "Det forsiktige ansiktet treffer forbi alle argumenter, et slag du ikke kan vinne deg ut av."
    },
    "dp_empathic-evocations_case-david_07": {
      "text": "I vanskelige samtaler sjekker jeg telefonen når det blir for personlig.",
      "suggestion": "Telefonen blir en falluke under bordet, en ryddig utgang før følelsen kan presse deg opp i et hjørne."
    },
    "dp_empathic-evocations_case-david_08": {
      "text": "Å si at jeg tok feil, kjennes ydmykende.",
      "suggestion": "De ordene river av rustningen på et øyeblikk og etterlater ansiktet varmt og blottet."
    },
    "dp_empathic-evocations_case-david_09": {
      "text": "Om natten går jeg rundt fordi jeg ikke klarer å roe meg når alle har blitt stille.",
      "suggestion": "Gangen blir en bane for å løpe fra følelsen av at huset har sett for mye."
    },
    "dp_empathic-evocations_case-david_10": {
      "text": "Etter at affæren kom fram, kjennes hjemmet annerledes, og jeg vet ikke hva jeg skal gjøre med det.",
      "suggestion": "Huset kjennes kaldere nå, som om varmen har lekket ut gjennom en sprekk ingen klarer å peke på."
    },
    "dp_empathic-evocations_case-marcus_01": {
      "text": "De fleste dager går jeg bare gjennom rutinene og kjenner meg ikke knyttet til folk.",
      "suggestion": "Du beveger deg gjennom dagen halvt gjennomsiktig, nær folk og likevel uten helt å berøre verden."
    },
    "dp_empathic-evocations_case-marcus_02": {
      "text": "Folkemengder gjør meg anspent før det har skjedd noe.",
      "suggestion": "Kroppen står vakt før folkemengden når deg, skuldrene på vei opp mot slaget som ikke har kommet."
    },
    "dp_empathic-evocations_case-marcus_03": {
      "text": "Jeg sitter der jeg kan se døra. Det føles bare bedre.",
      "suggestion": "Ryggen mot veggen, blikket på utgangene, hele rommet stille ordnet rundt trussel."
    },
    "dp_empathic-evocations_case-marcus_04": {
      "text": "Mareritt vekker meg, og så kjennes ikke rommet normalt på en stund.",
      "suggestion": "Søvnen kaster deg tilbake til et rom som fortsatt er ladet og summende, som om faren fulgte med ut."
    },
    "dp_empathic-evocations_case-marcus_05": {
      "text": "Når leiligheten er stille, blir det vanskelig å puste.",
      "suggestion": "Stillheten senker seg over brystet, tung nok til å gjøre luften trang."
    },
    "dp_empathic-evocations_case-marcus_06": {
      "text": "Gode øyeblikk kjennes fjerne og når meg ikke helt.",
      "suggestion": "Det gode er rett der og likevel bak glass, uklart før det rekker fram til deg."
    },
    "dp_empathic-evocations_case-marcus_07": {
      "text": "Jeg holder lyset dempet hjemme fordi sterkt lys plager meg.",
      "suggestion": "Det dempede lyset myker opp kantene og hindrer rommet i å komme for tydelig mot deg."
    },
    "dp_empathic-evocations_case-marcus_08": {
      "text": "Hvis noen banker på uventet, begynner hjertet å hamre.",
      "suggestion": "Et bank gjør døra til en trussel, og hjertet begynner å slå fra innsiden."
    },
    "dp_empathic-evocations_case-marcus_09": {
      "text": "Når jeg snakker om det, merker jeg at jeg slutter å puste.",
      "suggestion": "Pusten går i ro, som om ett innpust kan trekke minnet helt tilbake inn i rommet."
    },
    "dp_empathic-evocations_case-marcus_10": {
      "text": "Noen kvelder sitter jeg i bilen før jeg går opp.",
      "suggestion": "Den stille bilen blir et siste lite ly før den tomme leiligheten må gås inn i."
    },
    "dp_empathic-conjectures_case-sara_01": {
      "text": "Jeg sier hele tiden til vennene mine at det går bra, så de ikke skal lene seg inn og se hvor mye jeg trenger dem.",
      "suggestion": "Du prøver å skåne dem, og jeg lurer på om det å trenge dem også kjennes farlig, som om det kan avsløre at du er for mye eller ikke verdt å bli hos."
    },
    "dp_empathic-conjectures_case-sara_02": {
      "text": "Jeg kastet meg inn i jobben etter bruddet fordi stille kvelder kjennes som bevis på at han ikke ble.",
      "suggestion": "Du holder deg opptatt for å overleve kveldene; kanskje ligger det under en frykt for at stillheten skal gjøre det at han dro til en dom over verdien din."
    },
    "dp_empathic-conjectures_case-sara_03": {
      "text": "Jeg føler meg dum som fortsatt gråter flere måneder etterpå, som om alle andre ville vært over det nå.",
      "suggestion": "Du blir sint på tårene; jeg lurer på om det også finnes skam over at behovet og sorgen har vart så lenge."
    },
    "dp_empathic-conjectures_case-sara_04": {
      "text": "Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      "suggestion": "Du trekker deg raskt unna; kan det være at det også finnes en øm lengsel etter å bli valgt, som er vanskelig å vise?"
    },
    "dp_empathic-conjectures_case-sara_05": {
      "text": "Når jeg ser par, himler jeg med øynene og sier til meg selv at kjærlighet er oppskrytt.",
      "suggestion": "Du skyver det unna; jeg lurer på om det bak himlingen ligger en verkende lengsel etter nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      "text": "Jeg sluttet å følge ham, og så lånte jeg telefonen til en venn for å se om han virket lykkeligere uten meg.",
      "suggestion": "Du prøver å kutte kontakten og samtidig lete etter bevis; kanskje håp og selvbeskyttelse slåss om det samme såret."
    },
    "dp_empathic-conjectures_case-sara_07": {
      "text": "Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      "suggestion": "Du nedtoner smerten; jeg gjetter at en redd del frykter å bli avfeid hvis du lar det synes."
    },
    "dp_empathic-conjectures_case-sara_08": {
      "text": "Jeg var nær ved å sende ham «unnskyld», selv om jeg ikke gjorde noe galt.",
      "suggestion": "Du strekker deg for å reparere; kan det være at du prøver å dysse ned en skamfølelse som sier at det må være din skyld?"
    },
    "dp_empathic-conjectures_case-sara_09": {
      "text": "Nettene er verst; jeg spiller om igjen hva jeg gjorde feil til skyld føles tryggere enn å savne ham.",
      "suggestion": "Jeg lurer på om gjennomspillingen gir deg noe å holde i, fordi den dypere smerten ved å savne ham og kjenne seg forlatt kan være vanskeligere å bære."
    },
    "dp_empathic-conjectures_case-sara_10": {
      "text": "Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      "suggestion": "Vennlighet lander sterkt; kanskje lengter en del etter den, mens en annen forventer at den forsvinner."
    },
    "dp_empathic-conjectures_case-michael_01": {
      "text": "Hvis noen setter spørsmålstegn ved meg i et møte, biter jeg tilbake før de kan høre at jeg føler meg presset opp i et hjørne.",
      "suggestion": "Du kommer raskt inn hardt; jeg lurer på om det under bittet ligger et stikk av å føle seg fanget og sett som ikke bra nok."
    },
    "dp_empathic-conjectures_case-michael_02": {
      "text": "Når en kollega retter på meg foran rommet, ler jeg det bort, og så skyter varmen opp i nakken.",
      "suggestion": "Latteren dekker det raskt; jeg lurer på om varmen bærer et glimt av ydmykelse under sinnet."
    },
    "dp_empathic-conjectures_case-michael_03": {
      "text": "Kona sier jeg er hard, og jeg kaller det ærlighet før det kan høres ut som grusomhet.",
      "suggestion": "Du holder fast i ærlighet som rammen; jeg gjetter at det kanskje også finnes en frykt for at mykhet vil avsløre skyld eller svakhet."
    },
    "dp_empathic-conjectures_case-michael_04": {
      "text": "Jeg passer på at ingen har noe å bruke mot meg, fordi det å skylde noen noe kjennes som å gi dem et våpen.",
      "suggestion": "Du beskytter posisjonen din; kan det være en gammel frykt for å havne én ned eller bli fanget under noen andres makt?"
    },
    "dp_empathic-conjectures_case-michael_05": {
      "text": "Å be om unnskyldning kjennes som å gi fra seg terreng, som om alle kan se at jeg tapte.",
      "suggestion": "Det kjennes risikabelt; jeg lurer på om det å beklage berører et lite, skamfullt sted som ikke tåler å bli sett som beseiret."
    },
    "dp_empathic-conjectures_case-michael_06": {
      "text": "Jeg hater å miste kontroll; det får meg til å tenke at jeg har feilet.",
      "suggestion": "Kontroll betyr mye; kanskje ligger det under en frykt for at det å miste kontroll beviser noe dårlig om deg."
    },
    "dp_empathic-conjectures_case-michael_07": {
      "text": "Jeg leser alles arbeid om igjen før en presentasjon, fordi én feil ville slå tilbake på meg.",
      "suggestion": "Du vokter deg mot å bli tatt på senga; jeg lurer på om en yngre del allerede forventer å få skylden."
    },
    "dp_empathic-conjectures_case-michael_08": {
      "text": "Etter at jeg eksploderer, blir barnet mitt forsiktig rundt meg, og jeg klarer ikke å møte blikket hans.",
      "suggestion": "Det forsiktige blikket ser ut til å treffe deg hardt; jeg lurer på om skam og frykt for å bli som faren din gjør det vanskelig å møte øynene hans."
    },
    "dp_empathic-conjectures_case-michael_09": {
      "text": "Når noen sier at jeg skal roe meg ned, høres det ut som de kaller meg barnslig.",
      "suggestion": "Den setningen ser ut til å gjøre deg liten fort; jeg lurer på om sinnet beskytter mot å kjenne seg avfeid og gjort mindre."
    },
    "dp_empathic-conjectures_case-michael_10": {
      "text": "Jeg driver ikke med følelser; jeg driver med løsninger, for følelser får meg til å føle meg presset opp i et hjørne.",
      "suggestion": "Du lener deg på å fikse; kanskje følelser kjennes som feller som kan trenge deg opp i et hjørne og blottlegge et sårt sted."
    },
    "dp_empathic-conjectures_case-jason_01": {
      "text": "Jeg øver på hver setning før et møte, og så blir hodet likevel blankt når folk vender seg mot meg.",
      "suggestion": "Du forbereder deg så nøye; jeg lurer på om blankheten beskytter deg mot skammen ved å bli sett og vurdert."
    },
    "dp_empathic-conjectures_case-jason_02": {
      "text": "Når jeg blir invitert ut, sier jeg at jeg er opptatt før jeg rekker å kjenne om jeg vil gå.",
      "suggestion": "«Opptatt»-svaret kommer fort; kanskje beskytter det deg mot risikoen for å bli dømt, oversett eller ikke vite hvordan du hører til."
    },
    "dp_empathic-conjectures_case-jason_03": {
      "text": "Jeg hører en stemme som sier «ikke dum deg ut» før jeg rekker å åpne munnen.",
      "suggestion": "Du hører kritikeren tidlig; jeg gjetter at den prøver å beskytte deg mot den gamle smerten ved å bli sett og føle deg liten."
    },
    "dp_empathic-conjectures_case-jason_04": {
      "text": "Etter at jeg har snakket, krymper jeg meg i timevis og ser for meg at alle spiller av hvor latterlig jeg hørtes ut.",
      "suggestion": "Jeg lurer på om krympingen ikke bare er flauhet, men også den gamle frykten for at det å bli hørt betyr å bli ledd av eller avvist."
    },
    "dp_empathic-conjectures_case-jason_05": {
      "text": "Når noen gir meg et kompliment, antar jeg at de bare er høflige og har oversett den kleine delen.",
      "suggestion": "Varmen preller av; jeg lurer på om et gammelt bilde av deg selv fortsatt insisterer på at den kleine delen er den sanneste."
    },
    "dp_empathic-conjectures_case-jason_06": {
      "text": "Å se selvsikre mennesker får meg til å ville forsvinne, og så hater jeg meg selv for å misunne dem.",
      "suggestion": "Du krymper rundt selvsikkerheten deres; kanskje finnes det både misunnelse og sorg over å stå utenfor verdenen de ser ut til å bevege seg i."
    },
    "dp_empathic-conjectures_case-jason_07": {
      "text": "Hvis noen ler i nærheten, antar jeg at det er av meg og spiller om igjen hva jeg gjorde galt.",
      "suggestion": "Du forbereder deg på latterliggjøring; jeg gjetter at latter berører en sår forventning om at det å være synlig betyr å bli gjort narr av."
    },
    "dp_empathic-conjectures_case-jason_08": {
      "text": "Jeg skriver en melding og sletter den før jeg sender, fordi det føles farlig å bli sett.",
      "suggestion": "Du redigerer deg selv ut av kontakt; kan det være at frykten for å bli sett står i kamp med ønsket om kontakt?"
    },
    "dp_empathic-conjectures_case-jason_09": {
      "text": "Jeg drikker før arrangementer for å løsne opp, ellers føler jeg meg fanget i min egen kropp.",
      "suggestion": "Du søker lindring; jeg lurer på om drikkingen beskytter en mykere og reddere del som føler seg fanget og blottstilt."
    },
    "dp_empathic-conjectures_case-jason_10": {
      "text": "Jeg holder meg stille selv når jeg har en god idé, og så hater jeg meg selv for å forsvinne.",
      "suggestion": "Du holder igjen og vender deg så mot deg selv; kanskje kjennes synlighet farlig, mens det å forsvinne blir ensomt og ydmykende."
    },
    "dp_empathic-conjectures_case-laura_01": {
      "text": "Når noen er vennlige, blir jeg fort mistenksom, som om varme alltid har en hake.",
      "suggestion": "Du tar avstand fra vennlighet; jeg lurer på om nærhet vekker en gammel frykt for at varme skal bli til fare eller svik."
    },
    "dp_empathic-conjectures_case-laura_02": {
      "text": "Når stemmer heves, fryser jeg før jeg vet om sinnet i det hele tatt er rettet mot meg.",
      "suggestion": "Frysingen kommer før fakta; kanskje lærte frykten å bevege seg raskere enn hodet rekker å sortere hva som skjer."
    },
    "dp_empathic-conjectures_case-laura_03": {
      "text": "En del av meg føler skyld over at jeg virker nummen når folk forventer at jeg skal være takknemlig.",
      "suggestion": "Du dømmer nummenheten; jeg gjetter at den kanskje beskytter en veldig sår sorg som takknemlighet ikke når inn til."
    },
    "dp_empathic-conjectures_case-laura_04": {
      "text": "Jeg unngår filmer med familiekrangler fordi lydene følger meg hjem.",
      "suggestion": "Du styrer unna; kan det være for å unngå å vekke gammel skrekk og skam som ikke blir igjen på skjermen?"
    },
    "dp_empathic-conjectures_case-laura_05": {
      "text": "Noen ganger stirrer jeg på veggen til rommet blir flatt og ingenting kan nå meg.",
      "suggestion": "Flatheten virker beskyttende; jeg lurer på om den holder deg unna smerten som kunne komme hvis rommet kjentes virkelig."
    },
    "dp_empathic-conjectures_case-laura_06": {
      "text": "Jeg sier til meg selv «ikke treng noen» før jeg rekker å kjenne savnet.",
      "suggestion": "Du skyver behovene raskt vekk; kanskje finnes det en del som lengter etter å bli holdt, og er redd for det savnet."
    },
    "dp_empathic-conjectures_case-laura_07": {
      "text": "Når noen tar meg på skulderen, skvetter jeg før jeg rekker å kjenne dem igjen, og så skammer jeg meg.",
      "suggestion": "Skvetten kommer før gjenkjennelsen; jeg lurer på om berøring har lært å bety fare, og så kommer skammen over å trenge den beskyttelsen."
    },
    "dp_empathic-conjectures_case-laura_08": {
      "text": "Jeg er redd for at jeg er ødelagt på en måte ingen kan nå.",
      "suggestion": "Du frykter å være utenfor rekkevidde; jeg lurer på om skammen fra det du ble utsatt for har begynt å snakke som om den er sannheten."
    },
    "dp_empathic-conjectures_case-laura_09": {
      "text": "Jeg gjør livet mitt veldig lite, så ingenting kan komme innpå meg.",
      "suggestion": "Du holder det innenfor trange rammer; jeg lurer på om litenheten er en måte å kontrollere risiko og unngå gammel smerte."
    },
    "dp_empathic-conjectures_case-laura_10": {
      "text": "Jeg unnskylder meg idet jeg begynner å gråte, som om tårer gjør meg utrygg eller svak.",
      "suggestion": "Unnskyldningen kommer så raskt; kanskje tårer har lært å bety fare, skyld eller behov for omsorg der omsorg ikke var trygg."
    },
    "dp_empathic-conjectures_case-carlos_01": {
      "text": "En respektløs tone vipper en bryter i meg før jeg vet hva som ble truffet.",
      "suggestion": "Det snur fort i deg; jeg lurer på om det under varmen ligger et glimt av ydmykelse før sinnet tar over."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      "text": "Hvis jeg trekker meg, tror de at jeg er svak og fortsetter å ta terreng.",
      "suggestion": "Du vokter statusen din; kanskje nekter en yngre del å kjenne seg liten, presset opp i et hjørne eller overkjørt igjen."
    },
    "dp_empathic-conjectures_case-carlos_03": {
      "text": "Jeg tåler ikke å bli fortalt hva jeg skal gjøre; det føles som om noen prøver å eie meg.",
      "suggestion": "Det skjærer hardt; jeg gjetter at instrukser berører en gammel frykt for å bli kontrollert eller gjort maktesløs."
    },
    "dp_empathic-conjectures_case-carlos_04": {
      "text": "Sønnen min så meg smelle igjen en dør, og senere klarte jeg ikke slutte å se ansiktet hans for meg.",
      "suggestion": "Jeg lurer på om ansiktet hans ikke bare vekket anger, men også skam og frykt for hva han lærer av deg."
    },
    "dp_empathic-conjectures_case-carlos_05": {
      "text": "Etter en krangel blir kona mi stille, og jeg klarer ikke å se ansiktet hennes.",
      "suggestion": "Stillheten hennes ser ut til å nå forbi sinnet; jeg lurer på om blikket hennes ville vekke anger, ømhet og frykten for at du skremte henne."
    },
    "dp_empathic-conjectures_case-carlos_06": {
      "text": "Jeg blåser meg opp når noen utfordrer meg, før de kan se at det treffer.",
      "suggestion": "Du tar på rustningen fort; kanskje den dekker over det korte øyeblikket der utfordringen faktisk treffer og får deg til å kjenne deg mindre."
    },
    "dp_empathic-conjectures_case-carlos_07": {
      "text": "Jeg knuser ting så jeg ikke skader folk, men etterpå ser jeg at alle fortsatt er redde.",
      "suggestion": "Du prøver å beskytte dem; jeg gjetter at knusingen holder smerten unna et øyeblikk, og så kommer skammen når du ser frykten."
    },
    "dp_empathic-conjectures_case-carlos_08": {
      "text": "Rolige typer virker som dørmatter for meg, som om de ber om å bli tråkket på.",
      "suggestion": "Du likestiller ro med å være ubeskyttet; kan det være at ro føles farlig fordi det en gang betydde å bli tråkket på?"
    },
    "dp_empathic-conjectures_case-carlos_09": {
      "text": "Jeg kverner på respektløsheten i dagevis og planlegger hvordan jeg burde vunnet der og da.",
      "suggestion": "Du prøver fortsatt å vinne det i etterkant; jeg lurer på om gjennomspillingen holder ydmykelsen over å kjenne seg liten akkurat da på avstand."
    },
    "dp_empathic-conjectures_case-carlos_10": {
      "text": "Jeg vil gjøre det bedre for familien min, men en del av meg er redd jeg allerede er den skremmende.",
      "suggestion": "Jeg lurer på om det under viljen til endring ligger frykt og sorg over å bli mannen familien din må være på vakt rundt."
    },
    "dp_empathic-conjectures_case-nina_01": {
      "text": "Når jeg hviler, føler jeg meg egoistisk, selv når jeg er så trøtt at jeg nesten ikke klarer å stå.",
      "suggestion": "Hvile vekker skyld; jeg lurer på om en del lærte at kjærlighet var tryggere når du fortsatte å fortjene plassen din."
    },
    "dp_empathic-conjectures_case-nina_02": {
      "text": "Jeg sier ja, og så blir jeg bitter, men jeg klarer likevel ikke stoppe.",
      "suggestion": "Du sier ja, og sinnet kommer etterpå; kanskje bitterheten peker mot behov som fortsatt kjennes for risikable å eie."
    },
    "dp_empathic-conjectures_case-nina_03": {
      "text": "Når jeg ber om hjelp, unnskylder jeg meg før de rekker å se irritert ut.",
      "suggestion": "Du unnskylder deg før noen rekker å reagere; jeg lurer på om det finnes en frykt for at det å trenge hjelp kan koste deg aksept."
    },
    "dp_empathic-conjectures_case-nina_04": {
      "text": "Hvis huset er rotete når folk stikker innom, føler jeg meg avslørt som en fiasko.",
      "suggestion": "Du kjenner deg avslørt av rotet; kan det være skam knyttet til å bevise at du er god gjennom å gjøre?"
    },
    "dp_empathic-conjectures_case-nina_05": {
      "text": "Hvis noen virker skuffet, begynner jeg å ordne opp før jeg vet hva jeg selv vil.",
      "suggestion": "Ordningen starter raskt; jeg lurer på om skuffelse treffer en gammel frykt for at kjærlighet blir trukket tilbake."
    },
    "dp_empathic-conjectures_case-nina_06": {
      "text": "Jeg svelger sinnet fordi det ikke er pent, og så bærer jeg bitterhet stille.",
      "suggestion": "Du svelger sinnet for å være snill; kanskje lærte en yngre del at det å ha behov kunne true kjærligheten."
    },
    "dp_empathic-conjectures_case-nina_07": {
      "text": "Jeg tar vare på alle, og så føler jeg meg usynlig for at jeg ønsker at noen skal legge merke til meg.",
      "suggestion": "Usynligheten høres ensom ut; jeg lurer på om det finnes en skjult lengsel etter å bli tatt vare på uten å måtte fortjene det."
    },
    "dp_empathic-conjectures_case-nina_08": {
      "text": "Jeg klarer ikke å si nei uten å bli kvalm, som om kjærlighet står på spill.",
      "suggestion": "Du blir kvalm rundt et nei; kan det være en beskytter som prøver å holde tilknytningen trygg?"
    },
    "dp_empathic-conjectures_case-nina_09": {
      "text": "Jeg sier til meg selv at andre har det verre, så behovene mine holder seg stille.",
      "suggestion": "Du nedtoner smerten din; jeg lurer på om det å holde behovene stille har vært en måte å forbli akseptabel på."
    },
    "dp_empathic-conjectures_case-nina_10": {
      "text": "Hvis jeg roer ned etter at alle har sovnet, stiger en klump i halsen.",
      "suggestion": "Klumpen kommer når ingen trenger deg; kanskje er sorgen nær og ber om å bli sett."
    },
    "dp_empathic-conjectures_case-aisha_01": {
      "text": "Hvis du kaster et blikk på klokka, synker magen som om du allerede er på vei bort fra meg.",
      "suggestion": "Det blikket blir et signal om at du går; jeg lurer på om det vekker en gammel skrekk for å bli sluppet før du rekker å bety noe."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      "text": "Da han ikke svarte, gikk jeg fra trist til rasende før jeg klarte å innrømme at jeg var redd.",
      "suggestion": "Du svinger fort; kanskje raseriet skynder seg inn for å beskytte den redde, rå delen som føler seg forlatt."
    },
    "dp_empathic-conjectures_case-aisha_03": {
      "text": "Noen ganger får jeg lyst til å klore meg på armene bare for å skjære gjennom nummenheten.",
      "suggestion": "Du vil finne en vei gjennom nummenheten; jeg lurer på om det ligger en uutholdelig tomhet under."
    },
    "dp_empathic-conjectures_case-aisha_04": {
      "text": "Jeg ber folk om ikke å forlate meg, og så eksploderer jeg når jeg hører den minste avstand i stemmen deres.",
      "suggestion": "Du ber og skyver hardt; kan det være at både lengselen og frykten blir enorme når avstand dukker opp?"
    },
    "dp_empathic-conjectures_case-aisha_05": {
      "text": "Hvis du avlyser, er det en del av meg som aldri vil komme tilbake før du kan slippe meg igjen.",
      "suggestion": "Avlysningen stikker som å bli sluppet; jeg lurer på om det kjennes tryggere å avvise først enn å vente på at det skjer igjen."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      "text": "Jeg tenker at jeg er for mye for noen som helst, særlig når jeg trenger at de blir.",
      "suggestion": "Du føler deg for mye akkurat der du trenger nærhet; kanskje er det skammen fra det du ble utsatt for som taler."
    },
    "dp_empathic-conjectures_case-aisha_07": {
      "text": "Vennlighet får meg til å hulke, og en annen del vil stikke før jeg trenger den for mye.",
      "suggestion": "Det lander stort; jeg gjetter at én del lengter etter vennligheten, mens en annen forventer at det å trenge den blir farlig."
    },
    "dp_empathic-conjectures_case-aisha_08": {
      "text": "Jeg tester folk for å finne ut om de virkelig bryr seg, og så hater jeg hvor trengende det høres ut.",
      "suggestion": "Du tester og skammer deg etterpå; kan det være at du prøver å bevise at du betyr noe før du våger å stole på?"
    },
    "dp_empathic-conjectures_case-aisha_09": {
      "text": "Etter at jeg slår ut, kaller jeg meg ekkel før noen andre rekker å si det.",
      "suggestion": "Angrepet vender raskt innover; jeg lurer på om hardheten prøver å komme avvisning i forkjøpet samtidig som den dekker sorg over å kjenne seg alene."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      "text": "Jeg får panikk når jeg skal si farvel, selv når jeg vet at du kommer tilbake.",
      "suggestion": "Farvel utløser panikk selv når hodet vet bedre; kanskje berører det den gamle frykten for at ingen kommer tilbake."
    },
    "dp_empathic-conjectures_case-david_01": {
      "text": "Når kona mi kaller meg kald, kommer jeg med en spydig kommentar før hun rekker å se at det såret.",
      "suggestion": "Kommentaren kommer først; jeg lurer på om den beskytter et stikk av å bli sett som mislykket eller ikke god nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      "text": "Jeg liker ikke å bli fortalt hva jeg skal gjøre; det kjennes som om noen får overtaket.",
      "suggestion": "Du stritter imot styring; kanskje det lander som å bli gjort liten, håndtert eller avslørt som ute av kontroll."
    },
    "dp_empathic-conjectures_case-david_03": {
      "text": "Hvis jeg ikke kan være best, hvorfor prøve når det å være ordinær kjennes som å forsvinne?",
      "suggestion": "Du sikter mot toppen; jeg gjetter at det finnes en frykt for at ordinær betyr usynlig, utskiftbar eller uverdig."
    },
    "dp_empathic-conjectures_case-david_04": {
      "text": "Jeg planlegger store gester og føler meg tom etterpå, som om applausen aldri når den ensomme delen.",
      "suggestion": "Jeg lurer på om det, etter at gesten lander, fortsatt finnes et ensomt sted som spør om de vil ha deg eller bare det du kan gi."
    },
    "dp_empathic-conjectures_case-david_05": {
      "text": "Å be om unnskyldning får meg til å krympe meg, som om alle i rommet ser statusen min falle.",
      "suggestion": "Det kjennes ydmykende; jeg lurer på om det å innrømme feil treffer den gamle skammen over å bli redusert til mislykket."
    },
    "dp_empathic-conjectures_case-david_06": {
      "text": "I vanskelige samtaler griper jeg etter telefonen når praten begynner å bli personlig.",
      "suggestion": "Du griper etter en utvei idet nærheten kommer inn; kanskje kjennes det personlige farlig når du forventer å bli bedømt."
    },
    "dp_empathic-conjectures_case-david_07": {
      "text": "Jeg skryter når jeg føler meg utrygg, før noen kan se glippen.",
      "suggestion": "Du pumper deg raskt opp; jeg lurer på om det dekker den sårbare glippen før noen andre kan se den."
    },
    "dp_empathic-conjectures_case-david_08": {
      "text": "Hvis barna sier imot, hører jeg respektløshet og mister plassen min hos dem på et øyeblikk.",
      "suggestion": "Motstanden deres ser ut til å treffe både autoriteten og tilhørigheten din; jeg lurer på om utbruddet dekker skam over å miste plassen hos dem."
    },
    "dp_empathic-conjectures_case-david_09": {
      "text": "Jeg hater å bli misforstått av kona mi; det får meg til å føle meg usynlig.",
      "suggestion": "Du hater den usynligheten; jeg lurer på om det under sinnet ligger en sorg over ikke å bli kjent."
    },
    "dp_empathic-conjectures_case-david_10": {
      "text": "Jeg unngår terapioppgaver og kaller dem meningsløse, selv om en del av meg vet at de kjennes avslørende.",
      "suggestion": "Du avfeier det og vet samtidig at det avslører noe; kanskje finnes det en annen del som er redd for hva du kan finne hvis du senker tempoet."
    },
    "dp_empathic-conjectures_case-marcus_01": {
      "text": "De fleste dager føler jeg meg avstengt, som om ingenting slipper inn med mindre det slår hardt.",
      "suggestion": "Du kjenner deg avstengt; jeg lurer på om nummenheten beskytter mye smerte fra å slippe inn på én gang."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      "text": "Jeg sover med TV-en på så rommet ikke blir for stille.",
      "suggestion": "Du overdøver stillheten; kanskje stillhet bringer minner og sorg for tett på."
    },
    "dp_empathic-conjectures_case-marcus_03": {
      "text": "Jeg velger stolen der jeg kan se døra, og blir anspent hvis noen står bak meg.",
      "suggestion": "Valget av stol ser ut til å organisere trygghet; jeg lurer på om en del av deg fortsatt forventer at rommet kan bli farlig."
    },
    "dp_empathic-conjectures_case-marcus_04": {
      "text": "Jeg svarer ikke når søsteren min ringer, fordi stemmen hennes slipper gjennom veggen jeg holder oppe.",
      "suggestion": "Du holder avstand; kan det være at stemmen hennes slipper gjennom nummenheten og gjør følelsene vanskeligere å håndtere?"
    },
    "dp_empathic-conjectures_case-marcus_05": {
      "text": "Høye lyder får meg til å skvette, og så blir jeg sint på meg selv.",
      "suggestion": "Du skvetter og dømmer deg selv; jeg lurer på om sinnet dekker over en skam over å være sårbar."
    },
    "dp_empathic-conjectures_case-marcus_06": {
      "text": "Gode ting kjennes uvirkelige, som om de blir tatt tilbake hvis jeg lar dem bety noe.",
      "suggestion": "Det gode holder seg på avstand; kanskje det å la det bety noe også åpner døren for å miste det igjen."
    },
    "dp_empathic-conjectures_case-marcus_07": {
      "text": "Jeg drikker noen ganger for å slå meg selv ut før drømmene begynner å trekke meg tilbake dit.",
      "suggestion": "Du slår deg ut før søvnen kan trekke deg tilbake dit; jeg lurer på om det holder mareritt og følelser på avstand."
    },
    "dp_empathic-conjectures_case-marcus_08": {
      "text": "Jeg holder lyset lavt hjemme så ingenting kjennes for skarpt.",
      "suggestion": "Du holder alt dempet og mykt; kan det være at lys og klarhet føles for avslørende eller for skarpt?"
    },
    "dp_empathic-conjectures_case-marcus_09": {
      "text": "Jeg husker ikke sist jeg lo, og selv det å prøve kjennes falskt.",
      "suggestion": "Du får ikke tak i latteren; jeg lurer på om glede kjennes risikabelt eller illojalt etter så mye tap og nummenhet."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      "text": "En del av meg tenker at jeg har det bedre alene, fordi nærhet bare gir folk måter å såre hverandre på.",
      "suggestion": "Den delen beskytter deg; kanskje den frykter at nærhet betyr å såre noen, bli såret eller miste kontrollen igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      "text": "Det treffer meg som en bølge og jeg klarer ikke slutte å hulke.",
      "suggestion": "Jeg er her sammen med deg. Kjenn føttene på gulvet og ta to langsomme utpust med meg. La en liten del av bølgen bevege seg mens stolen holder deg."
    },
    "dp_staying-in-contact-intense-affect_case-sara_02": {
      "text": "Brystet mitt gjør vondt som om det skal sprekke opp når jeg sier at jeg savner ham.",
      "suggestion": "Legg en hånd der hvis det hjelper. Pust mykt med meg; berør bare kanten av den smerten, og finn rommet igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_03": {
      "text": "Jeg får lyst til å løpe når sorgen starter, fordi den kjennes endeløs.",
      "suggestion": "Løpetrangen kan få være her. Kjenn hælene tunge og vend blikket mot meg; møt én dråpe sorg, og trekk deg tilbake før den stiger."
    },
    "dp_staying-in-contact-intense-affect_case-sara_04": {
      "text": "Jeg så bildet hans i et innlegg fra noen andre, og magen sank så hardt at jeg begynte å skjelve.",
      "suggestion": "Jeg ser skjelvingen. Hold deg til stemmen min og kjenn gulvet under deg; vi holder bare suget i magen, ikke hele historien, til det roer seg nok til å se deg rundt igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_05": {
      "text": "Jeg får nesten ikke puste når jeg snakker om nettene alene.",
      "suggestion": "Følg det lengre utpustet mitt, og kjenn stolen bak deg. Berør bare en tynn flik av de nettene og kom tilbake hit."
    },
    "dp_staying-in-contact-intense-affect_case-sara_06": {
      "text": "Jeg føler meg dum som gråter så mye, men jeg klarer ikke stoppe.",
      "suggestion": "Gråten kan få litt rom her. Ro pusten, mykne skuldrene og la tårene bevege seg mens jeg blir værende hos deg."
    },
    "dp_staying-in-contact-intense-affect_case-sara_07": {
      "text": "Hendene mine blir numne; jeg føler meg langt borte, som om jeg kan forlate rommet uten å bevege meg.",
      "suggestion": "Lytt til stemmen min. Gni hendene sammen, press føttene ned, og sett ord på langt-borte-følelsen mens du kommer tilbake til stolen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_08": {
      "text": "Det kjennes som et hull i brystet som vil sluke meg.",
      "suggestion": "Det hullet kjennes som om det kan ta hele deg. Hold én hånd der du kjenner det og én fot i rommet; vi berører bare kanten og kommer tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-sara_09": {
      "text": "Jeg klarer ikke se på deg når jeg gråter; det føles altfor blottlagt.",
      "suggestion": "Hold blikket der det kjennes lettest og kjenn føttene på gulvet. Jeg er med deg mens litt av denne blottstillelsen får være her."
    },
    "dp_staying-in-contact-intense-affect_case-sara_10": {
      "text": "Hvis jeg lar gråten starte, er jeg redd den tar med seg hele natten.",
      "suggestion": "Vi kan lage en begynnelse og en slutt sammen. La én liten bølge komme mens jeg blir hos deg, og så vender vi bevisst tilbake til rommet før den blir hele natten."
    },
    "dp_staying-in-contact-intense-affect_case-michael_01": {
      "text": "Kjeven låser seg og varmen skyter opp i nakken når noen stiller spørsmål ved meg.",
      "suggestion": "Jeg er her. Løsne kjeven hvis du kan, senk skuldrene og ta ett langsomt utpust; legg merke til det første stikket under varmen et øyeblikk."
    },
    "dp_staying-in-contact-intense-affect_case-michael_02": {
      "text": "Jeg vil slå i veggen før noen ser at jeg føler meg liten.",
      "suggestion": "Plant begge føtter, kjenn hendene dine og pust lavt sammen med meg. La én bølge av varme stige og falle før den topper seg."
    },
    "dp_staying-in-contact-intense-affect_case-michael_03": {
      "text": "Ydmykelsen brenner når jeg spiller det av igjen; jeg vil viske ut hele scenen.",
      "suggestion": "Det brenner skarpt. Hold stemmen lav sammen med meg, ta to rolige pust, og hold kanten av ydmykelsen uten at trangen til å viske det ut tar over."
    },
    "dp_staying-in-contact-intense-affect_case-michael_04": {
      "text": "Jeg kan kjenne at det er i ferd med å klikke; hvis jeg åpner munnen, kommer det ut hardt.",
      "suggestion": "Fint at du legger merke til det. Det er vårt pausepunkt: hælene tunge, myk i kjeven, lang utpust. Vi kan sette ord på «klikk» sammen og la det passere."
    },
    "dp_staying-in-contact-intense-affect_case-michael_05": {
      "text": "Hendene mine skjelver, og jeg hører nesten faren min kalle det svakt.",
      "suggestion": "La skjelvingen få være her uten å slåss mot den. Kjenn begge føttene og hold blikket i dette rommet mens vi holder varmen og skammen innenfor en smal stripe."
    },
    "dp_staying-in-contact-intense-affect_case-michael_06": {
      "text": "Jeg hater den lille følelsen; den får meg til å ville ruve over noen.",
      "suggestion": "Hold stemmen lav sammen med meg. Gi den lille følelsen en smal stripe med plass mens føttene minner deg på at du er voksen i dette rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_07": {
      "text": "En del av meg vil gå før dette ender med at jeg ser patetisk ut foran deg.",
      "suggestion": "Den trangen til å gå prøver å beskytte verdigheten din. Bli hos meg noen sekunder, hendene på lårene, og la skammen få navn uten at den jager deg ut."
    },
    "dp_staying-in-contact-intense-affect_case-michael_08": {
      "text": "Stemmen min blir høy før jeg rekker å bestemme meg for det.",
      "suggestion": "Bra, fang det der. Senk volumet til halvparten, kjenn gulvet under skoene, og la såretheten få språk uten at varmen tar over rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_09": {
      "text": "Hvis jeg ikke eksploderer, føles det som om jeg forsvinner.",
      "suggestion": "Begge delene betyr noe: eksplosjonen og frykten for å forsvinne. Åpne hendene, kjenn stolen, og la meg hjelpe deg å holde den splittelsen uten å handle den ut."
    },
    "dp_staying-in-contact-intense-affect_case-michael_10": {
      "text": "Jeg stoler ikke på meg selv når varmen begynner å lete etter noen å straffe.",
      "suggestion": "Takk for at du sier det før du handler. Hold hendene åpne og føttene plantet; vi holder varmen som et signal om noe såret, ikke som en ordre om å finne et mål."
    },
    "dp_staying-in-contact-intense-affect_case-jason_01": {
      "text": "Alt blir uklart og hjertet hamrer, som om alle kan se at jeg ikke får det til.",
      "suggestion": "Jeg er her. Se på én ting på andre siden av rommet, kjenn stolen under deg, og ta to langsomme utpust. Berør en bitte liten del av farten i kroppen, og ta så pause."
    },
    "dp_staying-in-contact-intense-affect_case-jason_02": {
      "text": "Hendene mine skjelver og jeg vil forsvinne før noen merker det.",
      "suggestion": "La hendene hvile på lårene og kjenn varmen. Pust lavt sammen med meg mens skjelvingen får noen sekunder uten å bli større."
    },
    "dp_staying-in-contact-intense-affect_case-jason_03": {
      "text": "Jeg blir kvalm av å snakke om dette, som om jeg kan forsvinne av skam.",
      "suggestion": "Ok, se på meg hvis du kan. Ro ned pusten og kjenn føttene på gulvet; sett ord på kvalmen og skammen et øyeblikk, og trekk deg så litt tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-jason_04": {
      "text": "Rommet kjennes som om det krymper rundt meg, og jeg finner ikke en normal setning.",
      "suggestion": "Den krympende følelsen er her, og du mislykkes ikke. Se etter tre farger mens jeg blir hos deg; vi trenger bare ett ord om gangen."
    },
    "dp_staying-in-contact-intense-affect_case-jason_05": {
      "text": "Jeg får ikke puste ordentlig, og jeg er redd du ser at jeg har panikk.",
      "suggestion": "Pust med meg, ut lengre enn inn, og kjenn ryggen mot stolen. Ta dette i små slurker; du trenger ikke å skjule panikken for meg."
    },
    "dp_staying-in-contact-intense-affect_case-jason_06": {
      "text": "Jeg vil gjemme meg under bordet; ansiktet mitt brenner.",
      "suggestion": "Bli sittende og la hælene være tunge. La én bølge av den brennende følelsen stige og falle mens du holder kontakten her."
    },
    "dp_staying-in-contact-intense-affect_case-jason_07": {
      "text": "Jeg klarer ikke se deg i øynene nå; ansiktet mitt brenner.",
      "suggestion": "Det er greit. Velg et punkt på veggen mens vi puster sammen og lar en liten del av frykten bevege seg."
    },
    "dp_staying-in-contact-intense-affect_case-jason_08": {
      "text": "Det ringer i ørene og jeg føler meg fanget, som om alle ser på meg.",
      "suggestion": "Fanget-følelsen er her, og vi senker tempoet. Lytt etter to lyder ved siden av ringingen, og la pusten være lav mens følelsen av å bli sett får bare litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-jason_09": {
      "text": "Jeg kjenner at jeg vil gråte, og jeg blir flau for at du ser det.",
      "suggestion": "Tårer er velkomne her. Fortsett å puste rolig med meg og la litt av følelsen få være her mellom oss."
    },
    "dp_staying-in-contact-intense-affect_case-jason_10": {
      "text": "Jeg tror jeg bør gå før du merker hvor mye panikk jeg har.",
      "suggestion": "Vi senker signalet om å gå. Se mot døren, så tilbake til stolen; panikken får ha en plass her uten å bestemme for deg."
    },
    "dp_staying-in-contact-intense-affect_case-laura_01": {
      "text": "Da døra smalt ute, forsvant jeg innover før jeg rakk å vite om jeg var trygg.",
      "suggestion": "Jeg fikk med meg at du ble langt borte. Hold deg til lyden av stemmen min, kjenn stolen, og vi markerer at smellet er over før vi spør om noe mer."
    },
    "dp_staying-in-contact-intense-affect_case-laura_02": {
      "text": "Jeg blir helt nummen når jeg prøver å kjenne noe rundt det som skjedde.",
      "suggestion": "Respekter nummenheten sammen med meg. Gni hendene sammen, kjenn teksturen, og se etter ett bittelite signal i kanten uten å presse forbi den."
    },
    "dp_staying-in-contact-intense-affect_case-laura_03": {
      "text": "Jeg føler at rommet er langt borte, og at jeg ser gjennom glass.",
      "suggestion": "Orienter deg forsiktig sammen med meg: si to former du ser, og la utpusten gå rolig mens vi holder en liten del av den avstanden."
    },
    "dp_staying-in-contact-intense-affect_case-laura_04": {
      "text": "Magen synker og jeg stivner, som om jeg er tilbake og venter på neste eksplosjon.",
      "suggestion": "Ok, pust lavt, slipp litt i kjeven, og berør kanten av suget før vi kommer tilbake til stolen og dette rommet."
    },
    "dp_staying-in-contact-intense-affect_case-laura_05": {
      "text": "Jeg vil bli nummen før minnet åpner seg bredere enn jeg klarer å lukke.",
      "suggestion": "Da respekterer vi nummenheten som beskyttelse. Kjenn hælene og hold blikket i rommet; vi berører ikke mer enn døråpningen til minnet."
    },
    "dp_staying-in-contact-intense-affect_case-laura_06": {
      "text": "Tårene kommer og jeg føler meg dum, som om jeg burde ha lært å la være.",
      "suggestion": "Tårer er velkomne. Jeg holder tempoet sammen med deg mens vi lar litt av følelsen få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-laura_07": {
      "text": "Jeg stoler ikke på mine egne signaler når de sier at jeg er trygg.",
      "suggestion": "Lån stødighet av meg et øyeblikk: se på pusten min, følg tempoet mitt, og kjenn stolen under deg. Hold dette veldig lite."
    },
    "dp_staying-in-contact-intense-affect_case-laura_08": {
      "text": "Jeg blir svimmel og langt borte, som om rommet glir bakover.",
      "suggestion": "Nevn én ting du ser, én ting du hører, én ting du kjenner. Bli ved kanten av «langt borte» og ta pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-laura_09": {
      "text": "Vennlighet får meg til å ville stikke før jeg lar meg lure av den.",
      "suggestion": "Jeg hører trangen til å stikke. Bli sittende, øynene der det er lettest, og pust med meg; kjenn en bølge av trangen og ta et steg tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-laura_10": {
      "text": "Jeg vil ikke kjenne dette i det hele tatt; hvis det åpner seg, tror jeg at jeg forsvinner.",
      "suggestion": "Det trenger ikke å åpne seg alt på én gang. Ha én fot i dette rommet sammen med meg; berør bare den minste kanten og stopp før det oversvømmer deg."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_01": {
      "text": "Varmen stiger; nevene vil knyte seg før jeg skjønner hva som traff.",
      "suggestion": "La fingrene løsne og kjenn håndflatene mot lårene. Pust lavt med meg; hold én bølge av varme, og ta så pause."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_02": {
      "text": "Stemmen min vil rope før noen ser at jeg er rystet.",
      "suggestion": "La volumet senkes først, ikke styrken. Føtter plantet, hender åpne; kraften kan bli i rommet uten å bli en trussel."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_03": {
      "text": "Jeg vil knuse noe så de skjønner at de ikke skal presse meg.",
      "suggestion": "Sett ord på trangen og hold hendene åpne på lårene. La det første støtet av følelse bli synlig her uten at det blir til skade."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_04": {
      "text": "Å tenke på det redde ansiktet til ungen min river meg opp; jeg klarer nesten ikke være i kroppen.",
      "suggestion": "Det viser hjertet ditt. Hold pusten rolig og hendene stødig; la litt av den smerten få være her uten at den kaster deg ut av rommet."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_05": {
      "text": "Jeg er på vei ut fordi jeg kjenner at hendene mine vil knuse noe.",
      "suggestion": "Bra at du navnga farepunktet. Hold begge hender synlige og åpne, føttene ned; la trangen bli sagt her inne før du bestemmer hva kroppen gjør videre."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_06": {
      "text": "Brystet hamrer som om jeg allerede er i en kamp.",
      "suggestion": "Kjenn ryggen mot stolen og se mot døren, så tilbake hit. Pulsen gjør seg klar til kamp; vi lar bølgen stige og falle uten å gi den ordre."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_07": {
      "text": "Når trusselen tar over, forsvinner tankene mine og alt jeg vet er at jeg må slå først.",
      "suggestion": "Slå-først-alarmen er høy. Før vi tenker, plant føttene og løsne kjeven; jeg blir med deg i trusselen så den ikke må bli handling."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_08": {
      "text": "Jeg vil skremme folk vekk før de ser at jeg er redd.",
      "suggestion": "Jeg hører den beskyttende delen. Hold blikket hos meg og pust; hold bare ytterkanten av frykten og kraften sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_09": {
      "text": "Hvis jeg lar den respektløsheten passere, føles det som om jeg ikke er noe.",
      "suggestion": "Det er stikket. Hold føttene plantet og la ordene «ikke noe» være her noen sekunder mens kampimpulsen blir i hendene, ikke i handling."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_10": {
      "text": "Jeg føler meg ute av kontroll, og jeg hater at du kan se det.",
      "suggestion": "Jeg holder meg stødig sammen med deg mens du hater å bli sett. Senk tempoet, åpne hendene, og la kontrollen komme tilbake gjennom valget om ikke å handle."
    },
    "dp_staying-in-contact-intense-affect_case-nina_01": {
      "text": "Jeg klarer ikke slutte å gråte, og så skammer jeg meg for hvor mye jeg trenger.",
      "suggestion": "Tårer hører hjemme her. Vi roer pusten sammen og kjenner at stolen støtter deg, mens vi lar litt av gråten få bevege seg."
    },
    "dp_staying-in-contact-intense-affect_case-nina_02": {
      "text": "Brystet er stramt og hodet dunker av å holde alle andre oppe.",
      "suggestion": "Legg en hånd der det strammer hvis det hjelper. Pust lavt med meg: litt kontakt med stramheten, så litt hvile."
    },
    "dp_staying-in-contact-intense-affect_case-nina_03": {
      "text": "Jeg sier hele tiden unnskyld for at jeg føler så mye, som om jeg tar for stor plass.",
      "suggestion": "Du trenger ikke å beklage. Bli hos meg, hælene tunge, rolig utpust, og gi denne følelsen litt plass."
    },
    "dp_staying-in-contact-intense-affect_case-nina_04": {
      "text": "Jeg skjelver av å holde alt sammen og late som alt er fint.",
      "suggestion": "La skjelvingen få litt rom mens du kjenner stolen under deg. Gå sakte, i små håndterlige runder."
    },
    "dp_staying-in-contact-intense-affect_case-nina_05": {
      "text": "Jeg føler at jeg svikter alle, og kroppen vil bare klappe sammen.",
      "suggestion": "Det er tungt. Hold blikket hos meg hvis du kan, la stolen bære noe av vekten, og hold kanten av kollaps et øyeblikk."
    },
    "dp_staying-in-contact-intense-affect_case-nina_06": {
      "text": "Hvis jeg slutter å gjøre, faller jeg fra hverandre, og noen kommer til å trenge meg likevel.",
      "suggestion": "Du trenger ikke stoppe alt på en gang. Ta en pause her med meg i to langsomme utpust og la en liten del få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-nina_07": {
      "text": "Jeg vil gå i det sekundet jeg kjenner hvor desperat jeg trenger at noen hjelper meg.",
      "suggestion": "Den trangen til å gå gir mening; å trenge hjelp har blitt faren. Bli sittende bare et øyeblikk, kjenn føttene, og la behovet være her uten unnskyldning."
    },
    "dp_staying-in-contact-intense-affect_case-nina_08": {
      "text": "Jeg blir kvalm når jeg ser for meg å skuffe alle og ikke ordne det.",
      "suggestion": "Finn et rolig punkt i rommet og la den ene hånden kjenne den andre. Kvalmen kan være her mens vi gir akkurat så mye plass til behovet."
    },
    "dp_staying-in-contact-intense-affect_case-nina_09": {
      "text": "Jeg får ikke tak i pusten når jeg slutter å ta vare på alle.",
      "suggestion": "I dette sekundet skal ingen andres behov legges på deg. La stolen bære ryggen din, forleng ett utpust, og gi din egen pust rommet som vanligvis går til alle andre."
    },
    "dp_staying-in-contact-intense-affect_case-nina_10": {
      "text": "Et behov stiger i halsen, og jeg får panikk, som om det å spørre vil ødelegge alt.",
      "suggestion": "Kjenn føttene og gi halsen litt rom. Jeg er her med deg, og vi kan berøre behovet uten å presse det fram."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_01": {
      "text": "Hvis du ser bort, griper panikken halsen min, og jeg får ikke puste.",
      "suggestion": "Se hit hvis du kan. Jeg er med deg. Press føttene ned i gulvet og følg det lengre utpustet mitt til det åpner seg litt mer plass."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      "text": "Tomheten brenner så vondt at å skade meg selv begynner å kjennes som den eneste måten å bevise at jeg fortsatt er her på.",
      "suggestion": "Jeg er glad du sa det før du ble alene med det. Sikkerhet kommer først: hold hendene der de ikke kan skade deg, press føttene ned, og la meg bli hos det brennende uten at det får bestemme for deg."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      "text": "Jeg vil stikke fra dette rommet før du ser hvor desperat jeg er.",
      "suggestion": "Jeg hører trangen. Hælene tunge, rolig utpust, blikket hos meg. Vi blir ved kanten av desperasjonen sammen og tar pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_04": {
      "text": "Å si farvel gjør meg svimmel og livredd, som om gulvet forsvinner.",
      "suggestion": "Ro pusten sammen med meg, kjenn føttene, og planlegg avslutningen sammen slik at systemet ditt vet at jeg er her til vi er ferdige."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_05": {
      "text": "Jeg føler at jeg er for mye, og jeg hater at jeg trenger at du blir.",
      "suggestion": "Jeg vil være her med deg i dette. Senk skuldrene og pust med meg: ett lite pust med følelsen av å være «for mye», så hviler vi."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_06": {
      "text": "Brystet kjennes som et svart hull, og jeg er redd det skal sluke meg.",
      "suggestion": "Legg en hånd der hvis du vil. Vi sitter på kanten sammen—lav pust—og setter kort ord på «svart hull» før vi kommer tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_07": {
      "text": "Blikket mitt hopper hele tiden til ansiktet ditt fordi jeg er livredd for at du skal forsvinne.",
      "suggestion": "Se på ansiktet mitt hvis det hjelper, og kjenn stolen under deg. Jeg er her, og vi tar denne redselen i små deler."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_08": {
      "text": "Trangen til å klore blir veldig sterk, og jeg trenger noe ekte før jeg forsvinner.",
      "suggestion": "Takk for at du sier det. Press føttene ned og hold hendene der de er trygge; hold trangen ved kanten sammen med meg i noen sekunder."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_09": {
      "text": "Gråten tar over, og jeg føler meg ekkel fordi jeg trenger at du ser det.",
      "suggestion": "La stolen bære litt av dette. Jeg er med deg, og vi roer det nok ned til at skammen og tårene kan være her trygt."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_10": {
      "text": "Hvis du avlyser, faller jeg fra hverandre og hater meg selv for at jeg trenger deg.",
      "suggestion": "Det treffer som om gulvet forsvinner. Ha stemmen min og føttene dine med deg mens vi holder ett pust av skrekken for å bli forlatt, her sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-david_01": {
      "text": "Ansiktet brenner, og jeg vil avbryte dette før du ser hvor blottstilt jeg er.",
      "suggestion": "Det blottstilte stedet er hett og ber om beskyttelse. Hold hendene på stolen og bli ved stemmen min; vi berører brenningen kort, og så stopper vi før skammen tar over."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      "text": "Jeg føler meg avslørt og rasende, som om du har overtaket.",
      "suggestion": "Hold stemmen målt og kjenn føttene. La raseriet stå vakt mens vi får kontakt med det avslørte stedet et øyeblikk."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      "text": "Jeg vil gå ut før du ser meg tape ansikt.",
      "suggestion": "Bra, sett ord på draget mot døren. Bli sittende, blikket rett fram, og la delen som beskytter ansiktet ditt vite at vi ikke ydmyker den her."
    },
    "dp_staying-in-contact-intense-affect_case-david_04": {
      "text": "Magen vrir seg og varmen skyter opp når jeg innrømmer at jeg tar feil.",
      "suggestion": "Ha begge føttene i gulvet og følg bare den første kanten av vridningen. Vi presser ikke forbi det du kan holde."
    },
    "dp_staying-in-contact-intense-affect_case-david_05": {
      "text": "Jeg orker ikke ordet «kald»; det får meg til å føle meg avslørt og rasende.",
      "suggestion": "Det ordet skjærer rett inn. Hold føttene i gulvet og hold kontakt med stemmen min mens vi slipper inn en liten, tålelig del av hvor skamfullt og blottstilt det kjennes å bli sett sånn."
    },
    "dp_staying-in-contact-intense-affect_case-david_06": {
      "text": "Jeg synes det er flaut at jeg klikket hjemme; jeg hørtes akkurat ut som den typen jeg dømmer.",
      "suggestion": "Den flauheten er varm. Senk skuldrene og pust med meg; vi holder kort kontakt med den og hviler."
    },
    "dp_staying-in-contact-intense-affect_case-david_07": {
      "text": "Jeg føler for å stenge ned så jeg ikke sier noe desperat.",
      "suggestion": "La nedstengingen senke tempoet uten å ta deg bort. Mykne kjeven, hold én hånd mot stolen, og la den desperate kanten være til stede, men innrammet."
    },
    "dp_staying-in-contact-intense-affect_case-david_08": {
      "text": "Brystet føles hult og stramt, og jeg hater at jeg vil ha trøst.",
      "suggestion": "Legg en hånd der hvis det hjelper, og følg pusten min, ut lengre enn inn, mens vi legger merke til en liten del av stramheten og ønsket om trøst."
    },
    "dp_staying-in-contact-intense-affect_case-david_09": {
      "text": "Forsvaret kommer fort opp, og jeg er redd jeg mister kontrollen over ansiktet.",
      "suggestion": "Der er forsvaret, som prøver å beskytte ansiktet ditt. La kjeven slippe litt og hold én hånd på stolen; vi kan være nær blottstillingen uten å gi noen kontroll."
    },
    "dp_staying-in-contact-intense-affect_case-david_10": {
      "text": "Jeg vil skylde på alle andre så jeg slipper å føle dette.",
      "suggestion": "Jeg hører draget mot å skylde på andre. Hold tonen jevn, kjenn føttene, og la den første følelsen under skylden få vise seg bare så mye du tåler."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      "text": "En bølge kommer opp i brystet, og jeg vil stenge den ned før den tar meg tilbake dit.",
      "suggestion": "Vi lar den ikke ta deg helt tilbake. Nevn to ting i dette rommet, kjenn føttene, og gi bølgen bare en smal kant å bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      "text": "Etter marerittet fortsetter kroppen å dirre som om huset fortsatt har fare i seg.",
      "suggestion": "Systemet ditt står fortsatt på vakt. Først orienterer vi oss til dette rommet, og så holder vi én trygg tråd av dirringen til den skjønner at faren ikke er her."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      "text": "Jeg kjenner ingenting og alt på én gang, og det skremmer meg.",
      "suggestion": "Den svingen fra nummen til oversvømt er skremmende. Velg ett signal - stramt, tungt eller varmt - og la resten vente mens pusten holder seg rolig."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_04": {
      "text": "Jeg vil stenge ned før rommet begynner å kjennes uvirkelig.",
      "suggestion": "La nedstengingen være signalet vårt om å orientere oss. Nevn fargen på veggen, kjenn stolen under lårene, og bli ved terskelen til følelsen i stedet for å gå helt inn."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_05": {
      "text": "Hendene mine begynner å skjelve når jeg prøver å si bare én bit av det som skjedde.",
      "suggestion": "Skjelvingen kan snakke før historien gjør det. La hendene hvile der du kan se dem, pust lavt, og gi skjelvingen noen sekunder sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_06": {
      "text": "Når jeg kommer hjem og det er stille, lander vekten på brystet som en dør som lukkes.",
      "suggestion": "Den stillheten legger seg tungt og endelig. Hold én hånd på stolen eller brystet, si «vekt» én gang, og la dette rommet minne systemet ditt på at du ikke er låst inne der."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_07": {
      "text": "Etter en folkemengde summer huden som om jeg fortsatt er på vakt.",
      "suggestion": "Se deg rundt i dette rommet og velg det tryggeste hjørnet. La summingen vite at skanningen skjer her, ikke der borte, og hold bare en tynn tråd av den sammen med oss."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_08": {
      "text": "Jeg er redd for at hvis jeg lar meg kjenne det, så sluker hele greia meg.",
      "suggestion": "Vi holder det mindre enn hele greia. Føttene på gulvet, én kant av følelsen, og så en tydelig pause; jeg blir hos deg gjennom stoppet også."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_09": {
      "text": "Jeg vil forsvinne når minnene presser seg på og rommet slutter å kjennes virkelig.",
      "suggestion": "Jeg er her sammen med deg, og vi tar den trangen på alvor. Press føttene ned, kjenn stolen, og sett navn på ønsket om å forsvinne mens vi holder orienteringen her."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_10": {
      "text": "Jeg klarer ikke avgjøre om jeg er her eller tilbake i det rommet.",
      "suggestion": "Nevn tre ting i dette rommet og press føttene ned i gulvet. La pusten gå rolig mens systemet ditt registrerer: «Jeg er her»."
    },
    "dp_self-disclosure_case-sara_01": {
      "text": "Når jeg sier at jeg fortsatt savner ham, tenker du egentlig at jeg høres latterlig ut?",
      "suggestion": "Nei. Jeg hører ikke noe latterlig; jeg hører sorg over en som betydde noe. Jeg blir beveget av hvor varsomt du prøver å overleve dette tapet, og jeg vil vite hvordan det er å høre det."
    },
    "dp_self-disclosure_case-sara_02": {
      "text": "Du blir sikkert lei av å høre meg gråte over ham hver uke.",
      "suggestion": "Tårene dine gjør meg ikke lei av deg. Jeg kjenner omsorg for hvor alene dette blir for deg, og jeg vil at den alenheten skal få selskap her. Slipp det inn bare så mye som kjennes trygt."
    },
    "dp_self-disclosure_case-sara_03": {
      "text": "Når jeg gråter og du blir stille, blir jeg redd for at tårene mine får deg til å trekke deg unna.",
      "suggestion": "Tårene dine får meg ikke til å trekke meg unna. Jeg kjenner meg nær og varsom når de kommer, og jeg vil at du legger merke til hvordan det er å høre det fra meg."
    },
    "dp_self-disclosure_case-sara_04": {
      "text": "Når jeg spør om du har kjent ensomhet, sjekker jeg om du tåler min.",
      "suggestion": "Jeg har kjent ensomhet, og jeg kan være sammen med din her. Størrelsen på den skyver meg ikke bort; jeg vil at vi legger merke til hvordan det er å høre det fra meg."
    },
    "dp_self-disclosure_case-sara_05": {
      "text": "Jeg synes det er flaut at du ser meg så rotete og trengende.",
      "suggestion": "Jeg dømmer verken rotet eller behovet. Jeg kjenner respekt for motet det tar å la meg se dem, og jeg vil at vi legger merke til skammen som ventet noe hardere."
    },
    "dp_self-disclosure_case-sara_06": {
      "text": "Tror du faktisk at jeg ikke fortsatt er alene om et år, eller prøver du bare å trøste meg?",
      "suggestion": "Jeg kan ikke vite hva et år vil bringe, og jeg kjenner et ekte håp sammen med deg. Jeg merker også at håp kan kjennes som press når skammen allerede kaller deg dum."
    },
    "dp_self-disclosure_case-sara_07": {
      "text": "Når jeg spør om jeg er for mye, er jeg redd du begynner å trekke deg unna.",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner meg til stede og villig til å være nær denne frykten, uten å be deg tro meg raskere enn du kan."
    },
    "dp_self-disclosure_case-sara_08": {
      "text": "Er du i et forhold? Får det deg til å dømme meg?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si tydelig at jeg ikke dømmer deg. Jeg er interessert i hva dette spørsmålet bærer for deg."
    },
    "dp_self-disclosure_case-sara_09": {
      "text": "Jeg hater at jeg trenger noen, og å trenge deg gjør meg blottstilt.",
      "suggestion": "Når jeg hører det, kjenner jeg ømhet for hvor risikabelt det er for deg å trenge noen. Jeg trekker meg ikke unna behovet; vi kan legge merke til delen av deg som forventer at det skal koste deg."
    },
    "dp_self-disclosure_case-sara_10": {
      "text": "Bryr du deg egentlig om meg, eller er omsorg bare en del av jobben din?",
      "suggestion": "Jeg bryr meg om deg i denne terapirelasjonen, og grensene er en del av hvordan jeg tar ansvar for den omsorgen. Legg merke til hva som kan ta det inn, og hva som mistror det."
    },
    "dp_self-disclosure_case-michael_01": {
      "text": "Vær ærlig—høres jeg svak ut når jeg snakker om å være såret?",
      "suggestion": "Jeg hører ikke svakhet i dette. Jeg hører innsats og mot, og jeg kjenner respekt for at du sier det. Jeg vil at den respekten får stå ved siden av delen som ventet forakt."
    },
    "dp_self-disclosure_case-michael_02": {
      "text": "Når jeg spør om du også blir sint, trenger jeg å vite at du ikke ser ned på mitt sinne.",
      "suggestion": "Jeg kjenner sinne i meg selv også, og jeg kjenner meg stødig sammen med ditt, ikke hevet over det. Du trenger ikke skjule sinne her for å beholde respekten min."
    },
    "dp_self-disclosure_case-michael_03": {
      "text": "Du tenker sikkert at det er jeg som er problemet hjemme, sånn som alle andre.",
      "suggestion": "Jeg ser ikke på deg som problemet. Jeg kjenner hvor mye smerte som ligger under varmen, og jeg vil at vi holder oss nær det uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-michael_04": {
      "text": "Når jeg innrømmer at jeg ropte, leter jeg etter fordømmelse i ansiktet ditt.",
      "suggestion": "Jeg dømmer deg ikke. Jeg blir bekymret for hva ropingen koster deg og menneskene du er glad i, og jeg kjenner også respekt for at du er villig til å se på det her."
    },
    "dp_self-disclosure_case-michael_05": {
      "text": "Blir terapeuter lei av å høre den samme historien om utbrudd igjen?",
      "suggestion": "Jeg blir ikke lei av å høre det. Jeg blir fokusert når vi kommer tilbake til splitsekundet der det snur, fordi det er der kontrollen din kan vokse."
    },
    "dp_self-disclosure_case-michael_06": {
      "text": "Er du sterk nok til å tåle meg når jeg er sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å være med sinnet ditt, og jeg er ikke opptatt av å bevise styrke mot deg. Jeg vil at vi bruker den stødigheten til å forstå hva sinnet beskytter."
    },
    "dp_self-disclosure_case-michael_07": {
      "text": "Du ser rolig ut mens jeg forteller om ropingen hjemme; går noe av dette egentlig inn på deg?",
      "suggestion": "Det går inn på meg. Jeg holder meg stødig med vilje, så vi kan se på det uten at noen av oss trekker seg unna."
    },
    "dp_self-disclosure_case-michael_08": {
      "text": "Respekterer du det å jobbe med en som blir så opphetet som meg?",
      "suggestion": "Jeg respekterer å jobbe med deg. Jeg kjenner alvoret bak direkteheten din og prisen du prøver å se på, og jeg vil gi rom til hvor vanskelig respekt fra meg kan være å ta inn."
    },
    "dp_self-disclosure_case-michael_09": {
      "text": "Er du gift? Jeg lurer på om du tar med deg sinnet hjem.",
      "suggestion": "Jeg vet noe om å måtte roe ned sinne, og det hjelper meg å sitte sammen med deg her. Jeg ser ikke på sinnet ditt fra avstand."
    },
    "dp_self-disclosure_case-michael_10": {
      "text": "Si at du skjønner hvorfor dette er så vanskelig, for jeg føler meg latterlig som trenger hjelp.",
      "suggestion": "Jeg skjønner hvorfor dette er vanskelig. Jeg hører press og sårethet i det, ikke noe latterlig, og jeg vil snakke direkte til delen som forventer forakt fra meg."
    },
    "dp_self-disclosure_case-jason_01": {
      "text": "Når jeg blir stille, bekymrer jeg meg for at du sitter der og skulle ønske jeg skyndte meg.",
      "suggestion": "Du kaster ikke bort tiden min. Jeg er fortsatt interessert i deg i stillheten, og jeg vil at vi sjekker frykten for at jeg allerede har forlatt deg der alene."
    },
    "dp_self-disclosure_case-jason_02": {
      "text": "Jeg spør om du noen gang føler deg utilpass fordi jeg føler meg som en fremmed her.",
      "suggestion": "Jeg kjenner også til det å føle seg utilpass, og det gjør at jeg vil gå varsomt fram her sammen med deg. Kanskje gjør det dette litt mindre ensomt, eller kanskje ikke ennå."
    },
    "dp_self-disclosure_case-jason_03": {
      "text": "Når jeg pauser for lenge, ser jeg for meg at du tenker at jeg er kjedelig.",
      "suggestion": "Jeg opplever deg ikke som kjedelig. Jeg kjenner meg nysgjerrig og sammen med deg, også i pausene; pausene får meg ikke til å forsvinne."
    },
    "dp_self-disclosure_case-jason_04": {
      "text": "Er det greit at jeg ikke vet hva jeg skal si?",
      "suggestion": "Det er greit å ikke vite hva du skal si. Jeg kjenner tålmodighet med deg her; det å ikke vite gjør ikke at du mislykkes med meg."
    },
    "dp_self-disclosure_case-jason_05": {
      "text": "Da jeg droppet festen, ble du skuffet over meg eller tenkte at jeg unngikk for mye igjen?",
      "suggestion": "Nei. Jeg kjenner ikke skuffelse. Jeg merker hvor mye den festen krevde av hele systemet ditt, og jeg vil at svaret mitt møter delen som venter på karakter."
    },
    "dp_self-disclosure_case-jason_06": {
      "text": "Blir du utålmodig når jeg blir stille og ikke finner ord?",
      "suggestion": "Jeg blir ikke utålmodig. Jeg kjenner meg beskyttende overfor dette langsommere tempoet, og interessert i stillheten som noe meningsfullt heller enn en feil."
    },
    "dp_self-disclosure_case-jason_07": {
      "text": "Når jeg blir stille, dømmer du meg eller blir irritert inni deg?",
      "suggestion": "Jeg dømmer ikke stillheten din, og jeg blir ikke irritert. Jeg respekterer hvor mye det koster å bli værende her, og vi kan behandle stillheten som en del av arbeidet i stedet for noe du må beklage."
    },
    "dp_self-disclosure_case-jason_08": {
      "text": "Hvis jeg sier noe kleint her, ville du sagt fra, eller bare sittet og dømt det inni deg?",
      "suggestion": "Jeg ville prøvd å være ærlig og vennlig, ikke sitte og dømme deg i det skjulte. Jeg kjenner meg beskyttende overfor delen som allerede venter latterliggjøring."
    },
    "dp_self-disclosure_case-jason_09": {
      "text": "Blir du noen gang nervøs i grupper, eller er det bare meg?",
      "suggestion": "Jeg blir også nervøs i grupper iblant, og det hjelper meg å ta frykten din på alvor i stedet for å se den som rar. Du er ikke alene eller merkelig som har den frykten."
    },
    "dp_self-disclosure_case-jason_10": {
      "text": "Når jeg spør om jeg noen gang blir mindre engstelig, trenger jeg å vite om du faktisk tror på det.",
      "suggestion": "Jeg kjenner håp sammen med deg. Jeg kjenner det fordi jeg ser hvor hardt du fortsetter å strekke deg mot kontakt, selv når frykten trekker deg tilbake."
    },
    "dp_self-disclosure_case-laura_01": {
      "text": "Når jeg ikke føler noe, blir du utilpass eller tenker at jeg er utilgjengelig?",
      "suggestion": "Jeg blir ikke utilpass av nummenheten, og jeg ser deg ikke som utilgjengelig. Jeg kjenner meg varsom og tålmodig med den, og jeg vil at du får rom her uten å prestere følelse for meg."
    },
    "dp_self-disclosure_case-laura_02": {
      "text": "Er du irritert over at jeg fortsetter å beskytte meg i stedet for å åpne meg?",
      "suggestion": "Jeg er ikke irritert. Jeg kjenner respekt for hvor viktig det har vært å beskytte deg. Du kan ta inn bare den delen av det som kjennes sann."
    },
    "dp_self-disclosure_case-laura_03": {
      "text": "Du virker rolig—skjønner du egentlig hvordan dette er?",
      "suggestion": "Jeg kjenner tyngden i det, og jeg holder meg rolig med vilje for at dette skal føles tryggere. Roen min er ment som stødighet, ikke avstand."
    },
    "dp_self-disclosure_case-laura_04": {
      "text": "Har du jobbet med traumer som mine før, eller er jeg for avstengt for dette?",
      "suggestion": "Jeg har arbeidet med traumer før, og jeg opplever ikke avstengningen din som en feil. Her kjenner jeg meg mest opptatt av tempo og trygghet."
    },
    "dp_self-disclosure_case-laura_05": {
      "text": "Etter at du har hørt hva som skjedde, tenker du mindre om meg eller ser meg som ødelagt?",
      "suggestion": "Jeg tenker ikke mindre om deg. Jeg kjenner sorg over det du har båret, og respekt for hvor varsomt du har overlevd."
    },
    "dp_self-disclosure_case-laura_06": {
      "text": "Kommer du til å presse meg inn i detaljer hvis jeg blir stille for lenge?",
      "suggestion": "Jeg kommer ikke til å presse deg inn i detaljer. Jeg er mer opptatt av at du skal være trygg nok til å være til stede. Du kan korrigere meg hvis jeg går for fort."
    },
    "dp_self-disclosure_case-laura_07": {
      "text": "Ser du når jeg blir langt borte, eller virker jeg bare vanskelig?",
      "suggestion": "Noen ganger kan jeg merke at du er langt borte, og da blir jeg mer opptatt av tempo enn av å gå dypere. Jeg leser det ikke som vanskelig."
    },
    "dp_self-disclosure_case-laura_08": {
      "text": "Tror du vennligheten din vil gjøre meg verre eller mer avhengig?",
      "suggestion": "Jeg vil ikke presse vennlighet på deg eller gjøre deg avhengig. Jeg er varsom med omsorg her; den må tilbys på en måte de beskyttende delene dine kan teste."
    },
    "dp_self-disclosure_case-laura_09": {
      "text": "Når jeg blir blank, er du redd for at jeg holder på å bryte sammen?",
      "suggestion": "Jeg er ikke redd for at du skal bryte sammen med meg. Jeg er klar til å senke farten med en gang du trenger det, og du trenger ikke holde deg samlet for min skyld."
    },
    "dp_self-disclosure_case-laura_10": {
      "text": "Tror du jeg kan begynne å føle igjen, eller er du bare snill?",
      "suggestion": "Jeg tror det er mulig å kjenne mer igjen, og jeg sier det ikke for å glatte over noe. Jeg kjenner tålmodighet med veien dit; håpet kan få være lite nok til at det ikke presser deg."
    },
    "dp_self-disclosure_case-carlos_01": {
      "text": "Tror du jeg er en dårlig far fordi jeg mister det?",
      "suggestion": "Når du sier det, kjenner jeg hvor mye sønnen din betyr for deg. Jeg ser ikke en dårlig far foran meg. Jeg vil at vi blir nær faren som bryr seg så mye."
    },
    "dp_self-disclosure_case-carlos_02": {
      "text": "Når du snakker om sårbarhet, prøver du å gjøre meg myk?",
      "suggestion": "Jeg prøver ikke å gjøre deg myk. Jeg kjenner respekt for styrken din, og jeg vil hjelpe den til å bli tryggere for menneskene du er glad i."
    },
    "dp_self-disclosure_case-carlos_03": {
      "text": "Når jeg beskriver varmen i meg, skremmer noe av det deg?",
      "suggestion": "Jeg kjenner meg våken og stødig sammen med deg, ikke redd for deg. Jeg vil at vi bruker den stødigheten til å se trygt på varmen."
    },
    "dp_self-disclosure_case-carlos_04": {
      "text": "Du ser sikkert på meg og ser bare enda en sint fyr.",
      "suggestion": "Jeg ser ikke bare sinne. Jeg kjenner stoltheten, såretheten og lojaliteten som kommer så fort under det. For meg er du mer enn enda en sint fyr."
    },
    "dp_self-disclosure_case-carlos_05": {
      "text": "Er du tøff nok til å sitte med meg når jeg blir så sint?",
      "suggestion": "Jeg kjenner meg stødig nok til å sitte med sinnet ditt. Jeg er ikke her for å overkjøre deg eller bli overkjørt av deg; jeg vil at vi holder kontakt med sinnet i stedet for å gjøre det til en konkurranse."
    },
    "dp_self-disclosure_case-carlos_06": {
      "text": "Kan du respektere meg når du har sett hvor stygt temperamentet mitt kan bli?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det tydeligst når du lar meg se både temperamentet og hva det koster deg. La respekten gjelde prisen også, ikke bare kontrollen."
    },
    "dp_self-disclosure_case-carlos_07": {
      "text": "Fungerer puste-greiene for deg når du kjenner at du er klar til å smelle?",
      "suggestion": "Å roe ned pusten hjelper meg å beholde valg når aktiveringen stiger, og derfor bruker jeg det her. Jeg ber deg ikke gjøre noe jeg oppfatter som svakt."
    },
    "dp_self-disclosure_case-carlos_08": {
      "text": "Er du gift, og mister du noen gang besinnelsen med folk du er glad i?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si at sinne er menneskelig for meg. Jeg sitter ikke over ditt sinne og dømmer det."
    },
    "dp_self-disclosure_case-carlos_09": {
      "text": "Tror du faktisk at jeg kan endre meg, eller sier du bare det terapeuter sier?",
      "suggestion": "Jeg tror du kan forandre deg, og jeg sier det ikke som en replikk. Jeg kjenner det sterkest når jeg hører hvor mye familien din betyr for deg."
    },
    "dp_self-disclosure_case-carlos_10": {
      "text": "Vær ærlig, gruer du deg til timene når jeg kommer inn så pansret?",
      "suggestion": "Jeg gruer meg ikke. Jeg kjenner meg våken, engasjert og respektfull overfor forpliktelsen under rustningen. Du trenger ikke komme uten rustning for at jeg skal ville jobbe med deg."
    },
    "dp_self-disclosure_case-nina_01": {
      "text": "Jeg føler meg egoistisk bare av å ta plass her i stedet for å hjelpe noen andre.",
      "suggestion": "Jeg opplever deg ikke som egoistisk her. Jeg kjenner meg beskyttende overfor delen av deg som hele tiden beklager at den har behov. La den beskyttelsen være for deg, ikke enda et krav."
    },
    "dp_self-disclosure_case-nina_02": {
      "text": "Når jeg sier at jeg er bitter, dømmer du meg for ikke å være snillere?",
      "suggestion": "Jeg dømmer ikke bitterheten. Jeg blir trist av hvor lenge du har båret for mye alene, og jeg vil at det overbelastede stedet skal bli møtt heller enn korrigert."
    },
    "dp_self-disclosure_case-nina_03": {
      "text": "Du tenker sikkert at jeg bare burde skjerpe meg og slutte å gjøre alt så vanskelig.",
      "suggestion": "Jeg tenker ikke at du bare burde skjerpe deg. Jeg kjenner medfølelse med hvor mye du overstyrer deg selv, og jeg vil at det møter delen som kom forberedt på kritikk."
    },
    "dp_self-disclosure_case-nina_04": {
      "text": "Kjenner du noen gang skyld når du hviler, eller er det bare mitt problem?",
      "suggestion": "Jeg kjenner også skyld rundt hvile fra mitt eget liv, og det hjelper meg å ta din skyld på alvor i stedet for å se den som bare deg. Jeg behandler ikke skylden din som dum."
    },
    "dp_self-disclosure_case-nina_05": {
      "text": "Når jeg gråter sånn, blir du utilpass med meg?",
      "suggestion": "Tårene dine gjør meg ikke utilpass med deg. Jeg kjenner meg nærmere deg når de kommer, fordi de lar meg møte noe av det du vanligvis bærer alene."
    },
    "dp_self-disclosure_case-nina_06": {
      "text": "Når jeg ber om hjelp, blir jeg en belastning for deg også?",
      "suggestion": "Du blir ikke en belastning for meg når du ber om hjelp. Jeg kjenner bekymring for hvor alene du er med så mye ansvar, og den bekymringen er min å holde, ikke din å håndtere."
    },
    "dp_self-disclosure_case-nina_07": {
      "text": "Er det greit at jeg ber om hjelp her uten å beklage først?",
      "suggestion": "Ja, det er greit å be om hjelp her. Jeg blir glad når du gjør det, og jeg vil at den gleden møter forventningen om at det å spørre er for mye."
    },
    "dp_self-disclosure_case-nina_08": {
      "text": "Blir du lei av at jeg beklager hver gang jeg trenger noe?",
      "suggestion": "Du gjør meg ikke lei. Jeg kjenner varme for behovene du stadig beklager, og vi kan gå sakte med hvor vanskelig den varmen er å ta inn."
    },
    "dp_self-disclosure_case-nina_09": {
      "text": "Sier du fra hvis jeg gjør terapi feil, eller lar du meg bare mislykkes stille?",
      "suggestion": "Jeg ville sagt det varsomt hvis jeg tenkte vi var på villspor. Jeg kjenner respekt for hvor hardt du prøver her, og terapi trenger ikke bli enda et sted der du må prestere perfekt."
    },
    "dp_self-disclosure_case-nina_10": {
      "text": "Synes du virkelig jeg fortjener omsorg når jeg ikke har gjort meg fortjent til den?",
      "suggestion": "Jeg mener at du fortjener omsorg, ikke fordi du har gjort deg fortjent til den. Jeg kjenner det sterkt her, og den tvilende delen kan få bruke tid på svaret mitt."
    },
    "dp_self-disclosure_case-aisha_01": {
      "text": "Bryr du deg egentlig om meg, eller får du betalt for det?",
      "suggestion": "Jeg bryr meg om deg, og jeg kjenner den omsorgen her sammen med deg. La delen som tviler på omsorg høre meg uten å måtte tro helt på det med en gang."
    },
    "dp_self-disclosure_case-aisha_02": {
      "text": "Når jeg spør om du kommer til å forlate meg, trenger jeg å vite om du allerede vil ha avstand.",
      "suggestion": "Jeg kjenner kraften i den frykten, og jeg ønsker ikke avstand fra deg her. Jeg vil være så tydelig og pålitelig jeg kan, særlig når frykten sier at jeg allerede er på vei bort."
    },
    "dp_self-disclosure_case-aisha_03": {
      "text": "Skremte jeg deg da jeg sa jeg ville skade meg?",
      "suggestion": "Du skremte meg ikke bort. Jeg ble bekymret, fordi sikkerheten din betyr noe, og jeg ble veldig til stede sammen med deg. Jeg vil at bekymring fra meg skal bety varsom nærhet, ikke avstand."
    },
    "dp_self-disclosure_case-aisha_04": {
      "text": "Da du ikke svarte på meldingen min, ble jeg såret og lurte på om grensen betydde mer enn meg.",
      "suggestion": "Jeg blir lei meg for at grensen min gjorde deg vondt, og jeg bryr meg om å forstå det sammen med deg. Grensen er ekte, og omsorgen min er også ekte."
    },
    "dp_self-disclosure_case-aisha_05": {
      "text": "Er du sint på meg, eller har jeg allerede ødelagt dette?",
      "suggestion": "Jeg er ikke sint på deg. Jeg kjenner ømhet for den redde delen som forventer at kontakten skal ryke, og jeg vil forstå den forventningen sammen med deg."
    },
    "dp_self-disclosure_case-aisha_06": {
      "text": "Når jeg blir så intens, synes du jeg er for mye?",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner størrelsen på smerten og et ønske om å hjelpe deg å holde den, særlig der du forventer at jeg trekker meg unna."
    },
    "dp_self-disclosure_case-aisha_07": {
      "text": "Når jeg spør om du liker meg, forventer en del av meg allerede at svaret skal forsvinne.",
      "suggestion": "Jeg kjenner varme for deg, og jeg er glad du spurte direkte. Jeg legger også merke til hvor raskt en del av deg gjør seg klar til at svaret skal forsvinne."
    },
    "dp_self-disclosure_case-aisha_08": {
      "text": "Er du skuffet over meg, eller sier du det bare ikke?",
      "suggestion": "Skuffelse er ikke det jeg bærer på. Jeg kjenner takknemlighet for at du lar meg se hva som skjer, og jeg vil at vi legger merke til hvor raskt du ventet skuffelse fra meg."
    },
    "dp_self-disclosure_case-aisha_09": {
      "text": "Kan du love at du ikke gir meg opp når jeg blir intens?",
      "suggestion": "Jeg kan ikke love bort hvert vanskelig øyeblikk, og jeg kjenner meg forpliktet til dette arbeidet med deg. Hvis frykt viser seg mellom oss, vil jeg snakke direkte heller enn å forsvinne."
    },
    "dp_self-disclosure_case-aisha_10": {
      "text": "Tror du jeg noen gang vil ha det greit, eller er jeg for intens til det?",
      "suggestion": "Jeg kjenner håp sammen med deg, og jeg tror ikke intensiteten din gjør det umulig å få det greit. Jeg vil gå sakte nok til at håpet ikke føles som press."
    },
    "dp_self-disclosure_case-david_01": {
      "text": "Når jeg sier at du må overbevise meg, følger jeg med på om du blir defensiv.",
      "suggestion": "Når du ber meg overbevise deg, kjenner jeg et drag mot å bevise meg. Jeg velger nysgjerrighet i stedet, fordi det å bevise meg ville trekke oss bort fra det du tester i meg."
    },
    "dp_self-disclosure_case-david_02": {
      "text": "Vil du faktisk jobbe med en som kan høres så arrogant ut som meg?",
      "suggestion": "Jeg vil jobbe med deg. Jeg blir engasjert av det som står på spill under fasaden og arrogansen; legg merke til hva som er lettest å tro på, interessen eller tvilen."
    },
    "dp_self-disclosure_case-david_03": {
      "text": "En del av meg vil at du skal være imponert, og det er flaut å innrømme.",
      "suggestion": "Det jeg kjenner sterkest er interesse for deg, ikke et behov for å bli imponert. Jeg setter også pris på at du sier den flaue delen direkte; ærligheten interesserer meg mer enn prestasjonen."
    },
    "dp_self-disclosure_case-david_04": {
      "text": "Vær ærlig—tenker du at jeg er problemet i alle rom jeg går inn i?",
      "suggestion": "Jeg holder ikke deg som problemet. Jeg kjenner hvor raskt skam og forsvar går på hos deg, og jeg vil at vi legger merke til den løkken uten å gjøre deg til problemet."
    },
    "dp_self-disclosure_case-david_05": {
      "text": "Kjeder du deg, eller venter du bare på at jeg skal innrømme at jeg er problemet?",
      "suggestion": "Jeg kjeder meg ikke. Jeg kjenner hvor kostbare disse mønstrene er, og hvor mye du hater å kjenne deg ordinær i dem. Jeg vil forstå skammen under det spørsmålet sammen med deg."
    },
    "dp_self-disclosure_case-david_06": {
      "text": "Sier du fra hvis jeg driter meg ut, eller sitter du bare og analyserer meg?",
      "suggestion": "Jeg ville prøvd å være direkte og respektfull hvis jeg tenkte at du overså noe. Jeg kjenner meg investert i å hjelpe deg til mer valg, ikke i å analysere deg i stillhet."
    },
    "dp_self-disclosure_case-david_07": {
      "text": "Skammer du deg noen gang over å ta feil, eller er den svakheten bare min?",
      "suggestion": "Jeg kjenner også skam rundt å ta feil i mitt eget liv, og det hjelper meg å respektere hvor hett det er for deg, ikke avfeie det som svakhet. Jeg står ikke over deg i den kampen."
    },
    "dp_self-disclosure_case-david_08": {
      "text": "Når kona mi kaller meg kald, ser du det i meg også?",
      "suggestion": "Jeg opplever deg ikke som kald her. Jeg kjenner hvor beskyttet du blir når det gjør vondt, og jeg vil respektere beskyttelsen mens vi forstår den."
    },
    "dp_self-disclosure_case-david_09": {
      "text": "Er du gift, og ville det få deg til å dømme affæren min?",
      "suggestion": "Detaljer om min relasjon holder jeg private her, og jeg kan si tydelig at jeg ikke er her for å dømme deg. Jeg er interessert i hva affæren betyr og hva den koster deg."
    },
    "dp_self-disclosure_case-david_10": {
      "text": "Respekterer du meg egentlig når du ser disse sidene av meg?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det sterkest når du lar de vanskeligere sidene bli synlige her. Vi kan la respekt gjelde de sidene også."
    },
    "dp_self-disclosure_case-marcus_01": {
      "text": "Når jeg spør om jeg er ødelagt, trenger jeg å vite hva du ser.",
      "suggestion": "Jeg ser ikke noe ødelagt i deg. Jeg kjenner respekt for hvor hardt du har arbeidet for å overleve, og du trenger ikke svare på det før du er klar."
    },
    "dp_self-disclosure_case-marcus_02": {
      "text": "Når jeg sitter her nummen, blir du frustrert over at jeg ikke klarer å gi deg mer?",
      "suggestion": "Frustrasjon er ikke det jeg kjenner. Jeg kjenner tålmodighet og varsomhet med tempoet du trenger; du trenger ikke å prestere følelse for meg."
    },
    "dp_self-disclosure_case-marcus_03": {
      "text": "Går dette inn på deg, eller holder du deg utenfor det?",
      "suggestion": "Det går inn på meg, og jeg holder meg stødig med vilje så du ikke skal måtte bære det alene. Stødigheten min er kontakt, ikke avstand."
    },
    "dp_self-disclosure_case-marcus_04": {
      "text": "Når jeg nesten ikke snakker, vil du fortsatt ha meg her i det hele tatt?",
      "suggestion": "Jeg vil ha deg her. Jeg kjenner meg glad når du møter opp, også på dager med få ord; nærværet ditt teller for meg før du forklarer noe."
    },
    "dp_self-disclosure_case-marcus_05": {
      "text": "Kommer du til å presse meg inn i ting før jeg vet hvordan jeg stopper?",
      "suggestion": "Jeg planlegger ikke å presse deg. Jeg er mer opptatt av at dette skal være tålelig enn av å gå fort. Vi kan sjekke sammen hvilket tempo som holder dette mulig."
    },
    "dp_self-disclosure_case-marcus_06": {
      "text": "Tror du faktisk at jeg kan endre meg etter å ha vært sånn i årevis?",
      "suggestion": "Jeg tror endring er mulig, også etter årevis med å leve på denne måten, og jeg kjenner tålmodighet med hvor sakte den kanskje må gå. La muligheten være beskjeden nok til at den ikke krever mer av deg."
    },
    "dp_self-disclosure_case-marcus_07": {
      "text": "Ville du sagt fra hvis stillheten min sløste bort tiden din?",
      "suggestion": "Hvis jeg tenkte at vi bommet på hverandre, ville jeg sagt det med omsorg. Jeg kjenner at denne tiden betyr noe, også når det er få ord, og vi kan la det lande sakte."
    },
    "dp_self-disclosure_case-marcus_08": {
      "text": "Skremmer traumahistorier deg, eller kan du være stødig med min?",
      "suggestion": "Jeg kjenner sorg og omsorg når jeg hører traumefortellinger, og jeg arbeider hardt for å holde meg jordet i dem. Jeg er stødig nok til å høre din i det tempoet du velger."
    },
    "dp_self-disclosure_case-marcus_09": {
      "text": "Vet du hva du skal gjøre med veteraner som ikke snakker så mye?",
      "suggestion": "Jeg har arbeidet med mennesker som hadde svært få ord etter traumer, og jeg er komfortabel med å gå sakte. Jeg kjenner også respekt for tjenesten din uten å trenge at du fremfører en historie for meg."
    },
    "dp_self-disclosure_case-marcus_10": {
      "text": "Er du komfortabel med stillhet, eller får den deg til å ville fylle den?",
      "suggestion": "Jeg er komfortabel med stillhet. Jeg kjenner ofte nærvær i stillhet, ikke avstand. Du kan la stillheten teste det langsomt, i stedet for å svare med en gang."
    },
    "dp_marker-recognition-chairwork_case-sara_01": {
      "text": "Stemmen sier: «Slutt å trenge ham; hvis du var sterkere, ville du vært over dette.»",
      "suggestion": "Det høres ut som en selvkritisk splittelse. Hvis du vil, setter vi «slutt å trenge ham»-kritikeren i én stol og den sårede siden i den andre. La kritikeren snakke først i noen korte, direkte linjer, og så bytter du stol og svarer fra den sårede siden mens jeg hjelper oss med tempoet."
    },
    "dp_marker-recognition-chairwork_case-sara_02": {
      "text": "Jeg ser for meg eksen min foran meg og vil si: «Du fikk meg til å føle meg kastet bort.»",
      "suggestion": "Det ligger et uavsluttet oppgjør med eksen din her, særlig rundt følelsen av å bli kastet bort. Vi kan sette ham i den tomme stolen og la deg si det som fortsatt lever i deg, noen linjer om gangen, mens jeg bremser hvis det trengs."
    },
    "dp_marker-recognition-chairwork_case-sara_03": {
      "text": "Tårene kommer opp, og en annen del bjeffer: «Ikke vær patetisk.»",
      "suggestion": "Det er en kritiker som avbryter tårene. Vi kan gi «ikke vær patetisk» én stol og den gråtende delen den andre. Vi kan la hver side snakke kort, så den sårbare delen ikke bare blir tiet ned."
    },
    "dp_marker-recognition-chairwork_case-michael_01": {
      "text": "Jeg vil si til faren min: «Det at du kalte sårhet svakhet, er grunnen til at jeg fortsatt angriper først.»",
      "suggestion": "Det peker mot et uavsluttet oppgjør med faren din. Hvis du vil, kan du sette ham i denne stolen og si hva det kostet å få sårethet behandlet som svakhet. Jeg holder det strukturert og kort."
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      "text": "Stemmen i hodet sier: «Få kontroll, din patetiske lille gutt.»",
      "suggestion": "Det er et hardt selvangrep. Vi kan sette stemmen som sier «patetiske lille gutt» i én stol og delen den skammer i den andre, og la dem ta én runde hver."
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      "text": "En del krever perfeksjon før noen kan kritisere meg; en annen del er utslitt.",
      "suggestion": "Det er en tydelig splitt mellom den krevende delen og den utslitte delen. Vi kan gi hver av dem en stol og la dem snakke direkte til hverandre mens jeg guider rundene."
    },
    "dp_marker-recognition-chairwork_case-jason_01": {
      "text": "En stemme sier: «Skjul ansiktet; hvis de ser deg, kommer de til å le.»",
      "suggestion": "Jeg hører en kritiker som prøver å gjemme deg. Vi kan gi den stemmen én stol og den mer stille, utsatte delen av deg den andre, og la hver side snakke i korte runder."
    },
    "dp_marker-recognition-chairwork_case-jason_02": {
      "text": "Jeg vil fortsatt spørre den vennen fra videregående hvorfor han sluttet å snakke med meg.",
      "suggestion": "Det høres ut som uavsluttet oppgjør med den vennen. Vi kan sette ham i den tomme stolen og la deg spørre om det som aldri fikk bli spurt den gangen, bare noen linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-jason_03": {
      "text": "En del vil bli med; en annen griper meg i halsen og sier: «Hold deg usynlig.»",
      "suggestion": "Det er en splitt mellom delen som vil ha kontakt og delen som stenger deg ned. Vi kan gi hver del en stol og la dem si hva de er redde for."
    },
    "dp_marker-recognition-chairwork_case-laura_01": {
      "text": "Når noen er snill, sier en beskytter: «Trekk deg unna; vennlighet blir farlig.»",
      "suggestion": "Det høres ut som en beskyttermarkør. Hvis det kjennes trygt nok, setter vi den mistroiske beskytteren i én stol og delen som lengter etter vennlighet i den andre, og holder rundene veldig korte."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      "text": "Jeg vil si til moren min: «Du så hva som skjedde, og du beskyttet meg ikke.»",
      "suggestion": "Det høres ut som uavsluttet oppgjør med moren din rundt det å ikke bli beskyttet. Vi kan bruke den tomme stolen i en forsiktig, dosert runde, så du kan si det som fortsatt lever der."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      "text": "En nummen del sier: «Steng det ned nå, ellers overlever du ikke å føle.»",
      "suggestion": "Det er en splitt mellom delen som blir nummen og delen som fortsatt kjenner. Vi kan gi hver side en stol og la dem fortelle hva de prøver å gjøre for deg."
    },
    "dp_marker-recognition-chairwork_case-carlos_01": {
      "text": "En stemme sier: «Kom deg øverst først, ellers gjør de deg til ingenting.»",
      "suggestion": "Den «øverst eller ingenting»-stemmen er en tydelig kritikermarkør. Vi kan sette den stemmen i én stol og delen som ender med å føle seg liten i den andre, og la hver side snakke rett fram."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      "text": "Jeg vil si til faren min: «Beltet ditt lærte meg at frykt var respekt.»",
      "suggestion": "Det ligger uavsluttet oppgjør med faren din her og med det beltet lærte deg. Hvis du vil, kan du sette ham i denne stolen og si hva det gjorde med deg, noen sterke linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      "text": "En del kaster seg fram for å beskytte; en annen ser ansiktet til sønnen min og skammer seg.",
      "suggestion": "Det høres ut som en splitt mellom delen som går til kamp og delen som skammer seg etterpå. Vi kan gi hver av dem en stol og la dem snakke direkte."
    },
    "dp_marker-recognition-chairwork_case-nina_01": {
      "text": "Stemmen sier: «Hvis du ber om hjelp, er du egoistisk og svak.»",
      "suggestion": "Det er en tydelig kritiker. Vi kan sette «egoistisk og svak»-stemmen i én stol og den trengende delen i den andre, og la hver side snakke en kort runde mens jeg guider deg."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      "text": "Jeg vil si til eksen: «Du lot meg sitte med husarbeidet og skyldte på meg etterpå.»",
      "suggestion": "Jeg hører uavsluttet oppgjør med eksen din rundt skyld, husarbeid og det å bære for mye alene. Vi kan bruke den tomme stolen så du kan si det du måtte svelge den gangen."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      "text": "En del sier: «Hold alle fornøyde»; en annen vil endelig si fra.",
      "suggestion": "Det høres ut som en splitt mellom delen som gjør andre til lags og delen som vil si fra. Vi kan gi hver av dem en stol og la dem si hva de frykter vil skje."
    },
    "dp_marker-recognition-chairwork_case-aisha_01": {
      "text": "En beskytter skriker: «Skyv dem bort nå før de forlater deg først.»",
      "suggestion": "Jeg hører en sterk beskytter som prøver å skyve bort før den blir forlatt. Hvis det kjennes trygt nok, kan vi sette den bortskyvende delen i én stol og den lengtende delen i den andre, og holde rundene korte og forankrede."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      "text": "Jeg vil sette moren min foran meg og spørre: «Hvorfor dro du?»",
      "suggestion": "Det høres ut som uavsluttet oppgjør med moren din. Vi kan bruke den tomme stolen i noen få linjer om gangen, så du kan spørre det som aldri har fått en plass."
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      "text": "Inni meg hører jeg: «Du er for mye; ingen kan elske deg og bli.»",
      "suggestion": "Det er en hard kritikerbeskjed. Vi kan sette «for mye til å bli elsket og bli hos» i én stol og delen som bærer smerten i den andre, og la hver side snakke kort."
    },
    "dp_marker-recognition-chairwork_case-david_01": {
      "text": "En stemme sier: «Vær eksepsjonell, ellers er du ingenting for noen.»",
      "suggestion": "Det høres ut som en krevende driver. Vi kan sette «vær eksepsjonell eller vær ingenting» i én stol og delen som betaler prisen i den andre, og la dem snakke direkte."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      "text": "Jeg vil fortsatt si til faren min: «Jeg trengte kjærlighet, ikke bare applaus for resultater.»",
      "suggestion": "Jeg hører uavsluttet oppgjør med faren din rundt det å bli verdsatt bare for resultater. Vi kan bruke den tomme stolen og la deg si det som aldri fikk bli sagt til ham."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      "text": "En del strekker seg etter nærhet; en annen stenger døra før noen ser behovet.",
      "suggestion": "Det er en splitt mellom delen som vil ha nærhet og delen som stenger den ned. Vi kan gi hver side en stol og la dem fortelle hva de beskytter."
    },
    "dp_marker-recognition-chairwork_case-marcus_01": {
      "text": "En vaktdel sier: «Ikke kjenn; hold deg bevæpnet og følg med på utgangene.»",
      "suggestion": "Jeg hører en sterk vaktdel. Hvis det kjennes mulig, setter vi vakten i én stol og den ensomme delen den beskytter i den andre, og holder rundene langsomme og korte."
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      "text": "Jeg vil si til den yngre utgaven av meg: «Ingenting av det som skjedde var din skyld.»",
      "suggestion": "Det høres ut som uavsluttet oppgjør med den yngre deg. Vi kan bruke den tomme stolen og la deg si direkte til ham det han aldri fikk høre, én eller to linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      "text": "Når noen strekker seg mot meg, vil én del ha kontakt og en annen kommanderer: «Trekk deg unna.»",
      "suggestion": "Det er en splitt mellom delen som søker trygghet gjennom avstand og delen som fortsatt vil ha kontakt. Vi kan gi hver av dem en stol og la dem si hva de er redde for."
    },
    "dp_alliance-repair_case-sara_01": {
      "text": "Forrige uke da jeg gråt, føltes det som du gikk videre for fort.",
      "suggestion": "Takk for at du tar dette opp igjen. Jeg gikk videre før gråten var blitt møtt, og det beklager jeg. Hvis vi går tilbake til det nå, hva ville hjulpet deg å kjenne at jeg blir hos sorgen i stedet for å gå forbi den?"
    },
    "dp_alliance-repair_case-sara_02": {
      "text": "Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er.",
      "suggestion": "Du peker på en reell bom: Jeg gikk til jobb da smerten trengte oppmerksomheten min. Det beklager jeg. Før vi snakker om jobb igjen, hvilken del av tapet trenger du at jeg forstår først?"
    },
    "dp_alliance-repair_case-sara_03": {
      "text": "Da jeg beklaget at jeg gråt, gjorde stillheten din meg redd for at jeg var for trengende for terapi.",
      "suggestion": "Takk for at du sier det. Stillheten min etter beklagelsen din kan ha hørtes ut som om jeg var enig i at behovet ditt var for mye, og det beklager jeg. Når tårene kommer igjen, hva kan jeg si eller gjøre så du kjenner deg velkommen, ikke bare tålt?"
    },
    "dp_alliance-repair_case-michael_01": {
      "text": "Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak.",
      "suggestion": "Jeg hører at «såret» landet som om jeg kalte deg svak. Jeg beklager at jeg valgte ord som fikk deg til å spenne deg. Hvilket språk lar oss navngi treffet uten å ta styrken fra deg?"
    },
    "dp_alliance-repair_case-michael_02": {
      "text": "Da jeg ba om verktøy, fortsatte du å spørre hva jeg følte; det var frustrerende.",
      "suggestion": "Du ba om noe brukbart, og jeg fortsatte å trekke mot følelser. Jeg vil beklage at jeg bommet på balansen. Hvilket verktøy eller holdepunkt ville hjulpet oss å starte på en måte som kjennes nyttig nok?"
    },
    "dp_alliance-repair_case-michael_03": {
      "text": "Da du pauset og så på meg etter at jeg ble sint, følte jeg meg dømt.",
      "suggestion": "Takk for at du navngir det. Pausen og blikket mitt føltes dømmende, og den virkningen betyr mer enn intensjonen min. Jeg beklager at jeg gjorde rommet mer konfronterende. Hva ville fått oppmerksomheten min til å kjennes mindre som gransking nå?"
    },
    "dp_alliance-repair_case-jason_01": {
      "text": "Da det var stille så lenge, følte jeg at jeg feilet.",
      "suggestion": "Jeg tar det inn. Stillheten min ble til en test du følte at du strøk på, og det beklager jeg. Ville det hjulpet om jeg navngir pausen tidligere, så du vet at jeg er med deg i den?"
    },
    "dp_alliance-repair_case-jason_02": {
      "text": "Da du så på klokka mens jeg lette etter ord, følte jeg meg uviktig.",
      "suggestion": "Klokkeblikket mitt mens du lette etter ord signaliserte at du ikke var viktig, og det vil jeg beklage. Hvordan bør jeg håndtere tidssjekker så de kjennes tydelige heller enn avvisende?"
    },
    "dp_alliance-repair_case-jason_03": {
      "text": "Jeg følte meg presset da du spurte om kroppen med en gang.",
      "suggestion": "Jeg gikk innover for raskt før det var nok trygghet. Det beklager jeg. Vil du heller starte med ord, med rommet, eller med et lite signal fra deg før jeg spør om fornemmelser?"
    },
    "dp_alliance-repair_case-laura_01": {
      "text": "Da du spurte om barndommen, følte jeg meg eksponert og ville gå.",
      "suggestion": "Du ble og fortalte meg noe viktig. Barndomsspørsmålet mitt eksponerte for mye for fort, og det beklager jeg. Hva ville hjelpe deg å kjenne at du styrer kanten før jeg spør om noe slikt igjen?"
    },
    "dp_alliance-repair_case-laura_02": {
      "text": "Da døra smalt ute, ble jeg blank og du fortsatte å snakke.",
      "suggestion": "Jeg fortsatte å snakke da dørsmellet tok deg bort. Jeg beklager at jeg overså det signalet. Hvilket signal kan vi avtale så jeg stopper sammen med deg med en gang noe trekker deg ut av rommet?"
    },
    "dp_alliance-repair_case-laura_03": {
      "text": "Da du snakket fort etter at jeg ble stille, klarte jeg ikke å henge med.",
      "suggestion": "Jeg hører at farten min mistet deg akkurat da du prøvde å være til stede. Det beklager jeg. Hvilket tempo fra meg ville hjulpet deg å beholde kontakten uten å måtte løpe etter ordene mine?"
    },
    "dp_alliance-repair_case-carlos_01": {
      "text": "Da du kalte det «brenning i brystet», føltes det som du dømte sinnet mitt.",
      "suggestion": "Jeg hører at ordene mine føltes dømmende, og det vil jeg beklage. Jeg vil forstå sinnet ditt uten å se ned på det. Hvilke ord ville latt meg følge det med mer respekt?"
    },
    "dp_alliance-repair_case-carlos_02": {
      "text": "Da du fortsatte å si «brems», hørtes det ut som om du ville at jeg skulle være myk.",
      "suggestion": "Måten jeg sa «brems» på hørtes ut som om jeg ba deg bli myk eller trekke deg. Det beklager jeg. Hvilke ord ville fått pausen til å kjennes som kontroll over deg selv, ikke overgivelse?"
    },
    "dp_alliance-repair_case-carlos_03": {
      "text": "Da jeg snakket om ungen min, så du bort og jeg følte meg avvist.",
      "suggestion": "Takk for at du sier det. Å se bort kostet kontakt i et viktig øyeblikk, og det beklager jeg. Vil du at jeg går tilbake til det som skjedde da du nevnte sønnen din, og blir mer synlig med deg der?"
    },
    "dp_alliance-repair_case-nina_01": {
      "text": "Da jeg gråt, var du stille og jeg følte meg alene i det.",
      "suggestion": "Stillheten min lot deg være alene med tårene, og det beklager jeg. Når tårene kommer, ville ord, en mykere sjekk eller bare at jeg sier at jeg er her hjelpe deg å kjenne deg fulgt?"
    },
    "dp_alliance-repair_case-nina_02": {
      "text": "Da du spurte om hans side av husarbeidet, kjentes det som om du tok eksens side.",
      "suggestion": "Formuleringen min fikk det til å høres ut som om jeg hadde stilt meg på hans side, og det vil jeg beklage. Før jeg spør om begge perspektiver igjen, hvilken del av din opplevelse trenger du at jeg tydelig står sammen med deg i?"
    },
    "dp_alliance-repair_case-nina_03": {
      "text": "Da jeg spurte om dette betydde noe, gjorde stillheten din meg redd for at jeg kastet bort tiden din.",
      "suggestion": "Takk for at du sier det. Stillheten min gjorde arbeidet usikkert og kanskje ikke verdt tiden, og jeg beklager at jeg lot deg bli der. Hva ville gjort formålet med arbeidet tydeligere i dag?"
    },
    "dp_alliance-repair_case-aisha_01": {
      "text": "Da du ikke svarte raskt på meldingen min, fikk jeg panikk og følte meg forlatt.",
      "suggestion": "Mellomrommet uten svar kjentes som forlatelse. Jeg beklager at jeg ikke ga plass til den virkningen tidligere. Hvilken plan for meldingspauser ville hjulpet deg å kjenne deg mindre alene i panikken, samtidig som rammen er tydelig?"
    },
    "dp_alliance-repair_case-aisha_02": {
      "text": "Da timen sluttet helt presis, føltes det som at du slapp meg.",
      "suggestion": "Å avslutte helt presis kjentes som å bli sluppet. Jeg beklager at rammen min landet som forlatelse. Hva ville hjelpe avslutninger å kjennes mer holdt, samtidig som de er tydelige og forutsigbare?"
    },
    "dp_alliance-repair_case-aisha_03": {
      "text": "Da du foreslo en pause, hørtes det ut som om du ga opp meg.",
      "suggestion": "Jeg hører at «pause» hørtes ut som å gi deg opp. Det beklager jeg at jeg ikke gjorde omsorgen i pausen tydelig. Hvilke ord fra meg ville gjort at trygghet kjentes mindre som avvisning?"
    },
    "dp_alliance-repair_case-david_01": {
      "text": "Da du utfordret min versjon av krangelen, føltes det som et angrep.",
      "suggestion": "Jeg hører at utfordringen landet som et angrep, og jeg beklager at jeg ikke gjorde alliansen med deg tydelig. Hva ville hjulpet deg å kjenne at jeg er på din side også når jeg utfordrer litt?"
    },
    "dp_alliance-repair_case-david_02": {
      "text": "Da jeg ba om strategi, fortsatte du å gå tilbake til følelser, og jeg følte meg oversett.",
      "suggestion": "Jeg korrigerte for langt mot dybde og ga for lite av strategien du ba om. Jeg beklager at det gjorde at du følte deg oversett. Hvilket praktisk holdepunkt ville gjort at følelsesarbeidet fortjente plass i dag?"
    },
    "dp_alliance-repair_case-david_03": {
      "text": "Da du navnga konas sårhet først, kjentes det som om du tok hennes parti.",
      "suggestion": "Det å navngi hennes sårhet først hørtes ut som om jeg stod med henne mot deg, og det beklager jeg. Hvilken del av din side overså jeg eller gjorde for liten?"
    },
    "dp_alliance-repair_case-marcus_01": {
      "text": "Da jeg sa at jeg ikke følte noe, fortsatte du å spørre og jeg stengte ned.",
      "suggestion": "Jeg fortsatte å presse etter at «ingenting» allerede var kanten din. Jeg beklager at jeg gjorde det. Hva ville vist deg at jeg respekterer kanten og samtidig blir her sammen med deg?"
    },
    "dp_alliance-repair_case-marcus_02": {
      "text": "Da du flyttet stolen nærmere, følte jeg meg fanget og urolig.",
      "suggestion": "Takk for at du sier det direkte. At jeg flyttet meg nærmere gjorde deg urolig og fanget, og det beklager jeg. Hvor i rommet ville det kjennes tryggere at jeg var?"
    },
    "dp_alliance-repair_case-marcus_03": {
      "text": "Da du spurte om marerittene før jeg var klar, følte jeg meg presset.",
      "suggestion": "Jeg hører at marerittspørsmålet kom før du var klar og føltes som press, og det beklager jeg. Hvordan bør jeg be om lov før traumetemaer, så de kjennes valgfrie heller enn påtvunget?"
    }
  }
};

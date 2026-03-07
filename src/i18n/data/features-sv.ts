const featuresSV: Record<string, any> = {
  zentroaudit: {
    name: "ZentroAudit",
    tagline: "Entitetsbaserade SEO-granskningar på sekunder",
    metaTitle: "ZentroAudit – Entitetsbaserade SEO-granskningar på sekunder",
    metaDescription: "ZentroAudit analyserar din webbplats med semantisk SEO, tematiskt djup och entitetstäckning.",
    overview: "De flesta SEO-granskningsverktyg kontrollerar bara ytliga signaler — saknade metataggar, långsamma laddningstider, trasiga länkar. ZentroAudit går djupare. Den utvärderar din webbplats genom linsen av **entitetsbaserad SEO**, och mäter hur fullständigt ditt innehåll täcker de entiteter, attribut och semantiska relationer som sökmotorer använder för att avgöra tematisk auktoritet.\n\nTraditionella granskningar missar den viktigaste rankningsfaktorn i den moderna sökeran: **semantisk fullständighet**. ZentroAudits Entity-Attribute-Value (EAV)-analys jämför ditt innehåll med Knowledge Graph-förväntningarna för dina målsökningar och avslöjar luckor där dina sidor misslyckas med att svara på frågorna som sökmotorer ställer å användarnas vägnar.\n\nGenom att kombinera över 200 tekniska SEO-kontroller med NLP-driven analys av entitetstäckning och övervakning av Core Web Vitals, ger ZentroAudit dig en enda, prioriterad vägkarta som adresserar både den tekniska grunden och det semantiska djup din webbplats behöver för att ranka.",
    trustChips: ["200+ SEO-kontroller", "Core Web Vitals", "Entitetstäckning"],
    capabilities: [
      { title: "Djup crawl-analys", description: "Crawlar varje sida för att upptäcka trasiga länkar, omdirigeringskedjor och indexeringsproblem." },
      { title: "Core Web Vitals-övervakning", description: "Övervakar LCP-, FID- och CLS-mätvärden för snabba, stabila användarupplevelser." },
      { title: "EAV-täckningsanalys", description: "Mäter fullständigheten av Entity-Attribute-Value-tripletter mot sökmotorernas förväntningar." },
      { title: "On-page SEO-analys", description: "Granskar title-taggar, metabeskrivningar, rubrikhierarki och innehållsstruktur." },
      { title: "Säkerhet och tillgänglighet", description: "Kontrollerar HTTPS-problem, blandat innehåll och saknade alt-attribut." },
      { title: "Prioriterad problempoängsättning", description: "Problem rankas efter SEO-påverkan så du åtgärdar det viktigaste först." }
    ],
    steps: [
      { title: "Ange din URL", description: "Klistra in din webbplats-URL och ZentroAudit startar en komplett crawl." },
      { title: "AI analyserar allt", description: "Vår motor kontrollerar över 200 SEO-faktorer." },
      { title: "Prioriterade resultat", description: "Få en tydlig, handlingsbar rapport." },
      { title: "Följ framsteg", description: "Kör granskningar igen för att mäta förbättring." }
    ],
    benefits: ["Upptäck tekniska problem", "Förstå semantiska luckor", "Övervaka användarupplevelse", "Få handlingsbara råd", "Följ hälsopoäng"],
    faqs: [
      { q: "Hur många sidor?", a: "Upp till 10 000 i Pro, obegränsat i Agency." },
      { q: "Vilka faktorer?", a: "200+ inklusive meta, schema, entiteter." },
      { q: "Hur mäts täckning?", a: "Jämförelse med tematiska förväntningar." },
      { q: "Återkommande?", a: "Ja, veckovis eller månadsvis." },
      { q: "Mobil-SEO?", a: "Ja, både desktop och mobil." }
    ],
    useCases: [
      { title: "Byråer", description: "Automatiserade granskningar för klienter." },
      { title: "E-handel", description: "Hitta problem i stora kataloger." },
      { title: "Publicister", description: "Identifiera rankningstapp." },
      { title: "Inhouse-team", description: "Baslinje före migrering." }
    ],
    whoIsItFor: [
      { persona: "SEO-chefer", reason: "Allt i en instrumentpanel." },
      { persona: "Byråer", reason: "Skalbar rapportering." },
      { persona: "Strateger", reason: "Semantisk djuianalys." },
      { persona: "Tekniker", reason: "Avancerad felsökning." }
    ],
    relatedTools: [
      { label: "ZentroFix", description: "Automatisk åtgärd" },
      { label: "ZentroMarkup", description: "Schema-generering" },
      { label: "ZentroKeywords", description: "Sökordsforskning" }
    ]
  },
  zentrofix: {
    name: "ZentroFix",
    tagline: "Åtgärda tekniska och innehållsmässiga SEO-fel direkt med AI",
    metaTitle: "ZentroFix – Åtgärda SEO-fel direkt med AI",
    metaDescription: "ZentroFix använder AI för att upptäcka och automatiskt åtgärda kritiska SEO-problem.",
    overview: "Att hitta SEO-problem är bara halva striden — att åtgärda dem är där de flesta team fastnar. ZentroFix överbryggar klyftan mellan granskning och handling genom att använda AI för att generera precisa, kontextmedvetna korrigeringar för varje problem ZentroAudit upptäcker. Istället för att ge dig ett kalkylblad med problem, tillhandahåller ZentroFix den faktiska koden, innehållet och konfigurationsändringarna som behövs.\n\nVerktyget förstår den **semantiska kontexten** för varje problem. När det genererar en saknad metabeskrivning producerar det inte generisk utfyllnad — det analyserar sidans entitetstäckning, målsökord och tematiska fokus för att skapa metadata som noggrant representerar innehållets semantiska omfattning. När det fixar trasiga interna länkar föreslår det ersättningar baserade på tematisk relevans, inte bara URL-likhet.\n\nZentroFix är designat för team som behöver röra sig snabbt utan att offra kvalitet. Oavsett om du masskorrigerar metadata över tusentals sidor eller löser kritiska schema-fel ett i taget, förhandsgranskas varje korrigering innan den appliceras och är reversibel — vilket ger dig förtroendet att applicera ändringar i stor skala.",
    trustChips: ["1-klick-fixar", "AI-drivet", "Autokorrigering"],
    capabilities: [
      { title: "Autokorrigeringar", description: "Fixa problem med ett klick." },
      { title: "Metadatareparation", description: "Generera taggar och beskrivningar." },
      { title: "Länklösning", description: "Laga trasiga länkar." },
      { title: "Schema-injektion", description: "Skapa saknade data." },
      { title: "Innehållsfyllning", description: "Berika tunna sidor." },
      { title: "Säkerhet", description: "Fixa HTTPS och blandat innehåll." }
    ],
    steps: [
      { title: "Granskning", description: "Skanna webbplatsen." },
      { title: "Granska", description: "Se AI-förslag." },
      { title: "Applicera", description: "Verkställ ändringar." },
      { title: "Verifiera", description: "Bekräfta resultat." }
    ],
    benefits: ["Spara tid", "Ingen kodning", "Massåtgärder", "Skydda rankning", "Integrerat flöde"],
    faqs: [
      { q: "Ändrar det direkt?", a: "Genererar kod/förslag. Direkt för kopplade sidor." },
      { q: "Vad fixas?", a: "Meta, länkar, schema, innehåll." },
      { q: "Säkert?", a: "Ja, förhandsgranskning och ångra." },
      { q: "CMS?", a: "Stödjer WordPress m.fl." }
    ],
    useCases: [
      { title: "Reparationssprint", description: "Snabba massåtgärder." },
      { title: "Innehållsberikning", description: "Förbättra tunna sidor." },
      { title: "Utvecklare", description: "Färdiga kodsnuttar." }
    ],
    whoIsItFor: [
      { persona: "SEO-chefer", reason: "Snabbhet utan dev-kö." },
      { persona: "Byråer", reason: "Mervärde för klienter." },
      { persona: "Småföretag", reason: "Enkelhet." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Hitta felen" },
      { label: "ZentroWrite", description: "Skapa innehåll" },
      { label: "ZentroMarkup", description: "Generera schema" }
    ]
  },
  zentrokeywords: {
    name: "ZentroKeywords",
    tagline: "Semantisk sökordsresearch och entitetsupptäckt",
    metaTitle: "ZentroKeywords – Semantisk sökordsresearch",
    metaDescription: "Upptäck sökord med stor påverkan baserat på entitetsassociationer.",
    overview: "Sökordsforskning har utvecklats bortom sökvolym och konkurrenspoäng. ZentroKeywords närmar sig sökordsupptäckt genom linsen av **semantiska entiteter och tematiska relationer** — samma ramverk som sökmotorer använder för att förstå och ranka innehåll. Istället för att ge dig en platt lista med sökord sorterade efter volym, kartlägger det entitetslandskapet runt ditt fröämne.\n\nVarje sökord existerar i ett nät av semantiska relationer. ZentroKeywords avslöjar dessa kopplingar: vilka entiteter sökmotorer associerar med en fråga, vilka tematiska kluster ett sökord tillhör och vilka sökavsiktsmönster det aktiverar. Detta låter dig bygga innehållsstrategier som etablerar **tematisk auktoritet** istället för att jaga individuella sökordsrankningar.\n\nVerktyget integrerar Koray Tugberk GÜBÜRs semantiska SEO-metodik direkt i forskningsarbetsflödet. När du anger ett frösökord hittar ZentroKeywords inte bara relaterade termer — det kartlägger hela entitetsgrafen, identifierar hub-och-spoke-innehållsstrukturen du behöver och klassificerar varje sökord efter avsikt.",
    trustChips: ["Entitetsbaserad", "Avsiktsmapping", "Tematiska kluster"],
    capabilities: [
      { title: "Entitetsupptäckt", description: "Hitta relaterade teman." },
      { title: "Avsikt", description: "Klassificera syfte." },
      { title: "Kluster", description: "Gruppera för silos." },
      { title: "Svårighet", description: "Entitetskonkurrens." },
      { title: "Globalt", description: "Flerspråkig analys." },
      { title: "Trender", description: "Säsongsvariationer." }
    ],
    steps: [
      { title: "Frösökord", description: "Starta med ett ämne." },
      { title: "Relationer", description: "Se kopplingar." },
      { title: "Filtrera", description: "Välj de bästa." },
      { title: "Exportera", description: "Planera innehåll." }
    ],
    benefits: ["Hitta dolda ord", "Bygg auktoritet", "Matcha avsikt", "Låg konkurrens", "Hela planer"],
    faqs: [
      { q: "Skillnad?", a: "Entitetsanalys vs volym." },
      { q: "Språk?", a: "50+ språk och 100+ länder." },
      { q: "Kluster?", a: "Semantiskt baserade." },
      { q: "Export?", a: "CSV eller till ZentroWrite." }
    ],
    useCases: [
      { title: "Nya silos", description: "Bygg från grunden." },
      { title: "E-handel", description: "Kategorioptimering." },
      { title: "Expansion", description: "Internationella marknader." }
    ],
    whoIsItFor: [
      { persona: "Strateger", reason: "Tematiska kartor." },
      { persona: "Specialister", reason: "Djupare insikter." },
      { persona: "PPC/SEO", reason: "Samordning." }
    ],
    relatedTools: [
      { label: "ZentroWrite", description: "Skapa innehåll" },
      { label: "ZentroRank", description: "Följ resultat" },
      { label: "ZentroCompare", description: "Konkurrentanalys" }
    ]
  },
  zentrorank: {
    name: "ZentroRank",
    tagline: "Rankningsspårning i realtid",
    metaTitle: "ZentroRank – Realtidsrankning",
    metaDescription: "Övervaka resultat per enhet, plats och tema.",
    overview: "Rankningar fluktuerar dagligen, och utan kontinuerlig övervakning flyger du i blindo. ZentroRank erbjuder sökordsrankningsspårning i realtid som går bortom enkla positionsnummer — den spårar din synlighet över **enheter, platser och SERP-funktioner** för att ge dig en komplett bild av hur sökmotorer presenterar ditt innehåll.\n\nDet som skiljer ZentroRank är dess entitetsmedvetna tillvägagångssätt. Den berättar inte bara att du rankar #7 — den visar vilka SERP-funktioner som omger din listning, om konkurrenter har knowledge panels, och hur dina rankningar korrelerar med dina entitetsauktoritetspoäng.\n\nFör byråer och företag med flera platser ger platsbaserad spårning granulära data. Spåra samma sökord i 100+ städer, jämför mobil vs desktop och ställ in smarta varningar för signifikanta förändringar.",
    trustChips: ["Realtid", "Multi-enhet", "Platsbaserad"],
    capabilities: [
      { title: "Realtids-SERP", description: "Dagliga uppdateringar." },
      { title: "Plats", description: "Städer och länder." },
      { title: "Enheter", description: "Mobil vs Desktop." },
      { title: "Konkurrenter", description: "Jämför sida vid sida." },
      { title: "Funktioner", description: "Snippets, paneler." },
      { title: "Varningar", description: "Vid tapp." }
    ],
    steps: [
      { title: "Sökord", description: "Importera lista." },
      { title: "Parametrar", description: "Ställ in spårning." },
      { title: "Övervaka", description: "Se trender." },
      { title: "Agera", description: "Optimera." }
    ],
    benefits: ["Missa inget", "Förstå synlighet", "Benchmark", "SERP-chanser", "Datadrivet"],
    faqs: [
      { q: "Uppdatering?", a: "Dagligen eller oftare." },
      { q: "Antal ord?", a: "50 till obegränsat." },
      { q: "Länder?", a: "100+ länder." },
      { q: "Funktioner?", a: "Ja, alla SERP-typer." }
    ],
    useCases: [
      { title: "Uppföljning", description: "Efter publicering." },
      { title: "Franchise", description: "Lokala marknader." },
      { title: "Pitch", description: "Konkurrentinsikt." }
    ],
    whoIsItFor: [
      { persona: "Chefer", reason: "Tydliga rapporter." },
      { persona: "Lokal SEO", reason: "Stadsnivå." },
      { persona: "Content", reason: "Effektmätning." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Hitta nya ord" },
      { label: "ZentroCompare", description: "Djupanalys" },
      { label: "ZentroAudit", description: "Fixa problem" }
    ]
  },
  zentrowrite: {
    name: "ZentroWrite",
    tagline: "Skapa entitetsrikt SEO-innehåll med AI",
    metaTitle: "ZentroWrite – Entitetsrikt innehåll med AI",
    metaDescription: "Generera optimerade inlägg och produktsidor.",
    overview: "Innehållsskapande för SEO har skiftat från sökordsproppning till **semantisk fullständighet**. ZentroWrite är en AI-skrivassistent byggd specifikt för detta nya paradigm — den genererar innehåll som naturligt integrerar entiteter, attribut och tematiska relationer som sökmotorer förväntar sig.\n\nTill skillnad från generiska AI-skribenter är ZentroWrite tränad på entitetsbaserade SEO-principer. När du anger ett målsökord analyserar den hela entitetslandskapet — vilka namngivna entiteter som måste finnas, vilka EAV-tripletter som krävs, och hur innehållet ska struktureras med frågebaserade H2-rubriker.\n\nZentroWrite integreras med ZentroContentBrief och ZentroTopicality för ett slutet flöde: brief → skriv → betygsätt → förfina.",
    trustChips: ["AI-drivet", "Optimerat", "SEO-redo"],
    capabilities: [
      { title: "Semantiskt innehåll", description: "Naturlig integration." },
      { title: "Metataggar", description: "Automatisk generering." },
      { title: "Brief builder", description: "Skapa riktlinjer." },
      { title: "Score optimizer", description: "Realtidsbetyg." },
      { title: "Artikelskrivare", description: "Hela texter." },
      { title: "Mallar", description: "För olika format." }
    ],
    steps: [
      { title: "Välj typ", description: "Blogg, produkt, etc." },
      { title: "Sökord", description: "Analysera entiteter." },
      { title: "Generera", description: "Skapa utkast." },
      { title: "Publicera", description: "Exportera." }
    ],
    benefits: ["Täck entiteter", "Spara tid", "Bygg auktoritet", "Realtidsscore", "Ingen tunn content"],
    faqs: [
      { q: "Ersätter skribenter?", a: "Nej, hjälper dem." },
      { q: "Typer?", a: "Artiklar, beskrivningar, FAQ." },
      { q: "Varför entiteter?", a: "För relevans." },
      { q: "Tonläge?", a: "Konfigurerbart." }
    ],
    useCases: [
      { title: "Skalning", description: "Snabba utkast." },
      { title: "Optimering", description: "Förbättra sidor." },
      { title: "E-handel", description: "Produkttexter." }
    ],
    whoIsItFor: [
      { persona: "Skribenter", reason: "Stöd och guidning." },
      { persona: "Team", reason: "Effektivitet." },
      { persona: "Byråer", reason: "Kvalitet i skala." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Forskning" },
      { label: "ZentroAudit", description: "Hitta behov" },
      { label: "ZentroMarkup", description: "Strukturera data" }
    ]
  },
  zentrocompare: {
    name: "ZentroCompare",
    tagline: "Identifiera SEO-luckor i entitetstäckning",
    metaTitle: "ZentroCompare – Entitetsluckor",
    metaDescription: "Analysera konkurrenter baserat på entiteter och teman.",
    overview: "Varför överträffar dina konkurrenter dig? Svaret ligger ofta inte i bakåtlänkar, utan i **tematisk auktoritet**. ZentroCompare erbjuder entitetsbaserad konkurrensanalys som går bortom enkel sökordsöverlappning. Den kartlägger dina konkurrenters tematiska fotavtryck och identifierar entiteter, ämnen och relationer de täcker men du missar.\n\nDe flesta verktyg visar vilka sökord rivaler rankar för. ZentroCompare visar *varför*. Genom att analysera entitetsdensitet, klusterstruktur och EAV-signaler avslöjar den semantiska luckor i din strategi. Missar du ett viktigt underämne? Har konkurrenter bättre entitetsrelationer?\n\nAnvänd ZentroCompare för att hitta nya möjligheter, jämföra din auktoritet och bygga en datadriven strategi som fyller luckorna i din nisch.",
    trustChips: ["Gap-analys", "Jämförelse", "Kartor"],
    capabilities: [
      { title: "Gap-analys", description: "Jämför 5 konkurrenter." },
      { title: "Täckningskartor", description: "Visualisera teman." },
      { title: "Sökordsluckor", description: "Hitta missar." },
      { title: "Auktoritet", description: "Jämför styrka." },
      { title: "Trafik", description: "Estimera besökare." },
      { title: "Trender", description: "Följ utveckling." }
    ],
    steps: [
      { title: "Konkurrenter", description: "Lägg till domäner." },
      { title: "Jämför", description: "Analysera täckning." },
      { title: "Hitta luckor", description: "Se möjligheter." },
      { title: "Strategi", description: "Skapa plan." }
    ],
    benefits: ["Hitta chanser", "Datadrivet", "Förstå auktoritet", "Prioritera", "Övervaka"],
    faqs: [
      { q: "Antal?", a: "5 eller 10 beroende på plan." },
      { q: "Data?", a: "Ranking, content, länkar." },
      { q: "Tid?", a: "Historisk data finns." },
      { q: "Skillnad?", a: "Semantiskt djup." }
    ],
    useCases: [
      { title: "Planering", description: "Kvartalsvis översyn." },
      { title: "Marknad", description: "Analysera nya nischer." },
      { title: "Diagnos", description: "Förstå tapp." }
    ],
    whoIsItFor: [
      { persona: "Chefer", reason: "ROI-fokus." },
      { persona: "Strateger", reason: "Djupanalys." },
      { persona: "Marknadsföring", reason: "Positionering." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Fyll luckor" },
      { label: "ZentroBacklinks", description: "Jämför länkar" },
      { label: "ZentroWrite", description: "Skapa innehåll" }
    ]
  },
  zentrobacklinks: {
    name: "ZentroBacklinks",
    tagline: "Upptäck bakåtlänkar som bygger entitetsförtroende",
    metaTitle: "ZentroBacklinks – Entitetsförtroende",
    metaDescription: "Analysera länkar baserat på auktoritet och relevans.",
    overview: "Inte alla bakåtlänkar är lika. Inom entitetsbaserad SEO är den länkande domänens **tematiska relevans** lika viktig som dess auktoritet. ZentroBacklinks analyserar din länkprofil genom linsen av entitetsförtroende — och utvärderar om länkar kommer från källor som stärker din auktoritet eller späder ut den.\n\nTraditionella verktyg bedömer länkar mest på DA. ZentroBacklinks lägger till ett lager av entitetsrelevans: den kartlägger fokus för varje länkande domän. En länk från en nischblogg kan vara mer värd än en länk från en nyhetssajt med högt DA men utan relevans.\n\nUtöver analys ger verktyget möjligheter till länkbygge. Genom att analysera konkurrenter identifierar det tematiskt relevanta domäner som länkar till dem men inte till dig.",
    trustChips: ["Länkanalys", "Toxisk detektion", "Auktoritet"],
    capabilities: [
      { title: "Profilanalys", description: "Full översikt." },
      { title: "Toxiska länkar", description: "Hitta skräp." },
      { title: "Poängsättning", description: "Kvalitet och relevans." },
      { title: "Relevans", description: "Tematisk matchning." },
      { title: "Möjligheter", description: "Hitta prospects." },
      { title: "Övervakning", description: "Nya och förlorade." }
    ],
    steps: [
      { title: "Domän", description: "Starta analys." },
      { title: "Kvalitet", description: "Granska länkar." },
      { title: "Disavow", description: "Skapa fil." },
      { title: "Hitta nya", description: "Upptäck chanser." }
    ],
    benefits: ["Skydda sajten", "Bygg rätt länkar", "Övervaka tillväxt", "Hitta chanser", "Förstå värde"],
    faqs: [
      { q: "Databas?", a: "Miljarder länkar." },
      { q: "Disavow?", a: "Ja, Google-format." },
      { q: "Hur funkar det?", a: "Tematisk analys." },
      { q: "Konkurrenter?", a: "Ja, full analys." }
    ],
    useCases: [
      { title: "Återhämtning", description: "Efter straff." },
      { title: "Kampanjer", description: "Rätt målgrupp." },
      { title: "Due diligence", description: "Värdera domäner." }
    ],
    whoIsItFor: [
      { persona: "Länkbyggare", reason: "Relevansfokus." },
      { persona: "Chefer", reason: "Riskkontroll." },
      { persona: "PR", reason: "Hitta publicister." }
    ],
    relatedTools: [
      { label: "ZentroCompare", description: "Jämför profiler" },
      { label: "ZentroAudit", description: "Interna länkar" },
      { label: "ZentroRank", description: "Rankingpåverkan" }
    ]
  },
  zentromarkup: {
    name: "ZentroMarkup",
    tagline: "Autogenerera JSON-LD Schema",
    metaTitle: "ZentroMarkup – JSON-LD Schema",
    metaDescription: "Öka rich results och entitetslänkning.",
    overview: "Strukturerad data är bron mellan ditt innehåll och Knowledge Graph. ZentroMarkup automatiserar skapandet av **JSON-LD schema** som explicit deklarerar entiteter, attribut och relationer — vilket hjälper sökmotorer förstå dina sidor med precision.\n\nDe flesta generatorer skapar enkel kod. ZentroMarkup använder AI för att analysera ditt faktiska innehåll, identifiera entiteter och generera omfattande data som täcker mer än bara minimikraven. Det stärker kopplingarna i Knowledge Graph.\n\nRich results — featured snippets, paneler, FAQ — beror på korrekt data. ZentroMarkup validerar din kod i realtid mot Googles krav, så att du vet att den fungerar innan publicering.",
    trustChips: ["JSON-LD", "Rich snippets", "Validering"],
    capabilities: [
      { title: "Autogenerering", description: "Ingen kodning." },
      { title: "Validering", description: "Google-krav." },
      { title: "Länkning", description: "Koppla till KG." },
      { title: "Många typer", description: "30+ format." },
      { title: "Visuell editor", description: "Enkel redigering." },
      { title: "Bulk", description: "Många sidor samtidigt." }
    ],
    steps: [
      { title: "Välj sida", description: "URL eller text." },
      { title: "Granska", description: "Se koden." },
      { title: "Anpassa", description: "Redigera." },
      { title: "Implementera", description: "Kopiera in." }
    ],
    benefits: ["Rich results", "Bättre förståelse", "Ingen kod", "Skala upp", "Compliance"],
    faqs: [
      { q: "Typer?", a: "Artikel, Produkt, FAQ, etc." },
      { q: "Kodning?", a: "Nej, helt visuellt." },
      { q: "Fördel?", a: "CTR och synlighet." },
      { q: "Uppdatera?", a: "Ja, importera befintligt." }
    ],
    useCases: [
      { title: "E-handel", description: "Produktdata." },
      { title: "Blogg", description: "Artikelschema." },
      { title: "Lokalt", description: "Företagsinfo." }
    ],
    whoIsItFor: [
      { persona: "Tekniker", reason: "Avancerad schema." },
      { persona: "Content", reason: "Enkelhet." },
      { persona: "E-handel", reason: "Bulkhantering." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Hitta fel" },
      { label: "ZentroFix", description: "Autoinjicera" },
      { label: "ZentroWrite", description: "Anpassa innehåll" }
    ]
  },
  zentrotopicalmap: {
    name: "ZentroTopicalMap",
    tagline: "Bygg entitetsbaserade tematiska kartor",
    metaTitle: "ZentroTopicalMap – Tematiska kartor",
    metaDescription: "Generera hub-and-spoke-strukturer för auktoritet.",
    overview: "Tematisk auktoritet byggs genom **systematisk innehållsarkitektur**, inte slumpmässiga artiklar. ZentroTopicalMap genererar omfattande hub-and-spoke-strukturer grundade i entitetsrelationer — en komplett ritning för att dominera ett ämne.\n\nKoray Tugberk GÜBÜRs ramverk betonar holistisk utvärdering. En enda artikel räcker inte. Du behöver ett nätverk av sidor som täcker varje entitet och attribut. ZentroTopicalMap bygger detta nätverk åt dig.\n\nVerktyget börjar med din centrala entitet och kartlägger utåt: identifierar hub-ämnen, spoke-underämnen, relationer och källkontexter som formar din nischs landskap.",
    trustChips: ["Entitetsbaserad", "Hub & spoke", "Gap-detektion"],
    capabilities: [
      { title: "Kartläggning", description: "Bygg graf." },
      { title: "Struktur", description: "Hierarkisk modell." },
      { title: "Kontext", description: "Källanalys." },
      { title: "Upptäckt", description: "Hitta randområden." },
      { title: "Gaps", description: "Jämför innehåll." },
      { title: "Djup", description: "Poängsätt." }
    ],
    steps: [
      { title: "Definiera", description: "Centralt ämne." },
      { title: "Generera", description: "Skapa karta." },
      { title: "Granska", description: "Se kluster." },
      { title: "Exportera", description: "Planera." }
    ],
    benefits: ["Bygg auktoritet", "Täck allt", "Hitta luckor", "Rätt struktur", "Strategisk plan"],
    faqs: [
      { q: "Vad är det?", a: "Struktur av ämnen." },
      { q: "Hur funkar det?", a: "Entitetsanalys." },
      { q: "Befintlig sajt?", a: "Ja, visar gaps." },
      { q: "Skillnad?", a: "Djupare än sökord." }
    ],
    useCases: [
      { title: "Ny sajt", description: "Rätt från start." },
      { title: "Omstrukturering", description: "Fixa arkitektur." },
      { title: "Pitch", description: "Visa strategi." }
    ],
    whoIsItFor: [
      { persona: "Strateger", reason: "Planering." },
      { persona: "Chefer", reason: "Ledning." },
      { persona: "Grundare", reason: "MVP-plan." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Frösökord" },
      { label: "ZentroWrite", description: "Skrivandet" },
      { label: "ZentroCompare", description: "Jämförelse" }
    ]
  },
  zentrocontentbrief: {
    name: "ZentroContentBrief",
    tagline: "Generera EAV-optimerade briefer",
    metaTitle: "ZentroContentBrief – EAV-briefer",
    metaDescription: "Skapa semantiska briefer med EAV och entiteter.",
    overview: "Bra innehåll börjar med en bra brief. ZentroContentBrief genererar **EAV-optimerade ritningar** som talar om för skribenter exakt vilka entiteter som ska täckas, attribut att definiera och relationer att etablera — innan de skriver ett ord.\n\nDe flesta briefer fokuserar på sökord. ZentroContentBrief går djupare genom att generera EAV-tripletter, föreslå H2-frågor med mål för extraktiva svar och definiera makrokontexten.\n\nMakrokontexten är kritisk: den säkrar att sidan håller sig inom ett tydligt semantiskt ramverk. Tillsammans med entitetsrekommendationer och länkförslag skapas briefer som fungerar som semantiska ritningar.",
    trustChips: ["EAV", "H2-frågor", "Entiteter"],
    capabilities: [
      { title: "EAV-generator", description: "Skapa tripletter." },
      { title: "H2-förslag", description: "Frågebaserade." },
      { title: "Makrokontext", description: "Sätt ramverk." },
      { title: "Entiteter", description: "Rekommendationer." },
      { title: "Poäng", description: "Förhandsbedömning." },
      { title: "Ankartexter", description: "Länkförslag." }
    ],
    steps: [
      { title: "Sökfråga", description: "Analysera landskap." },
      { title: "Kartlägg", description: "Skapa graf." },
      { title: "Anpassa", description: "Redigera." },
      { title: "Exportera", description: "Till skribent." }
    ],
    benefits: ["Inga gissningar", "Snippet-chans", "Rätt kontext", "KG-signaler", "Spara tid"],
    faqs: [
      { q: "EAV?", a: "Datamodell för entiteter." },
      { q: "H2?", a: "Baserat på sökbeteende." },
      { q: "Makrokontext?", a: "Huvudfokus." },
      { q: "Workflow?", a: "PDF eller app." }
    ],
    useCases: [
      { title: "Redaktion", description: "Standardisering." },
      { title: "Uppdatering", description: "Hitta brister." },
      { title: "Snippets", description: "Strukturera svar." }
    ],
    whoIsItFor: [
      { persona: "Chefer", reason: "Kvalitetssäkring." },
      { persona: "Skribenter", reason: "Tydlighet." },
      { persona: "Konsulter", reason: "Expertis." }
    ],
    relatedTools: [
      { label: "ZentroWrite", description: "Skrivande" },
      { label: "ZentroTopicalMap", description: "Struktur" },
      { label: "ZentroKeywords", description: "Sökord" }
    ]
  },
  zentrocontentplan: {
    name: "ZentroContentPlan",
    tagline: "Planera 6-månaders semantiska granskningar",
    metaTitle: "ZentroContentPlan – Cykliska granskningar",
    metaDescription: "Övervaka innehållets åldrande och förändringar.",
    overview: "Innehåll förblir inte optimerat för evigt. Sökmönster skiftar, konkurrenter publicerar nytt, och förväntningar ändras. ZentroContentPlan automatiserar **livscykelhantering** genom att schemalägga omgranskningar för att fånga upp semantiskt förfall.\n\nCykeln på 6 månader baseras på sökbeteende: mönster skiftar ofta inom detta fönster. Sidor som var kompletta kan tappa relevans när entitetslandskapet förändras.\n\nVerktyget övervakar även akuta skiften i sökfrågor — plötsliga ändringar som kräver omedelbar åtgärd. Tillsammans med HCU-signaler ger det ett proaktivt underhållssystem.",
    trustChips: ["Förfall", "6-månaders cykel", "Varningar"],
    capabilities: [
      { title: "Ålder", description: "Övervaka datum." },
      { title: "Skiften", description: "Upptäck ändringar." },
      { title: "Avstånd", description: "Mät relevanstapp." },
      { title: "Historik", description: "Analysera trender." },
      { title: "HCU", description: "Kvalitetssignaler." },
      { title: "Schema", description: "Automatiska cykler." }
    ],
    steps: [
      { title: "Anslut", description: "Inventera." },
      { title: "Ställ in", description: "Välj intervall." },
      { title: "Varningar", description: "Få notiser." },
      { title: "Uppdatera", description: "Optimera om." }
    ],
    benefits: ["Undvik tapp", "Behåll auktoritet", "Automatisering", "Prioritering", "Kvalitet"],
    faqs: [
      { q: "Förfall?", a: "Minskad relevans." },
      { q: "6 månader?", a: "Typiskt fönster." },
      { q: "Detektion?", a: "Trendanalys." },
      { q: "Integrerat?", a: "Med Audit." }
    ],
    useCases: [
      { title: "Bibliotek", description: "Stora mängder." },
      { title: "Säsong", description: "Kortare cykler." },
      { title: "Algoritm", description: "Snabb respons." }
    ],
    whoIsItFor: [
      { persona: "Chefer", reason: "Automatisering." },
      { persona: "Byråer", reason: "Löpande tjänst." },
      { persona: "Ledare", reason: "Proaktivitet." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Ny granskning" },
      { label: "ZentroWrite", description: "Omskrivning" },
      { label: "ZentroContentBrief", description: "Ny brief" }
    ]
  },
  zentrotopicality: {
    name: "ZentroTopicality",
    tagline: "Poängsätt tematiskt djup",
    metaTitle: "ZentroTopicality – Tematiskt djup",
    metaDescription: "NLP-poängsättning och semantisk analys.",
    overview: "Hur vet du om ditt innehåll är tillräckligt djupt? ZentroTopicality svarar med **NLP-driven poängsättning** som mäter ditt innehåll mot sökmotorernas fulla semantiska förväntningar.\n\nDe flesta verktyg mäter sökord. ZentroTopicality går ner på meningsnivå och analyserar semantiska roller, ramsemantik och EAV-kompletthet. Den kollar inte om du nämnt ett ord — den kollar om du beskriver entiteter och relationer så som krävs för faktaextraktion.\n\nAnalysen av ramsemantik är särskilt kraftfull. Den utvärderar om innehållet aktiverar alla konceptuella ramar kopplade till sökfrågan. Om du skriver om 'kaffebryggning' men missar vattentemperatur, saknas nyckelramar.",
    trustChips: ["NLP-poäng", "Ramsemantik", "Gap-analys"],
    capabilities: [
      { title: "NLP Scorer", description: "Mät relevans." },
      { title: "Ramsemantik", description: "Koncepttäckning." },
      { title: "Semantiska roller", description: "Meningsstruktur." },
      { title: "EAV-kontroll", description: "Entitetstäckning." },
      { title: "Fråge-gap", description: "Användarfrågor." },
      { title: "Densitet", description: "Entitetsfördelning." }
    ],
    steps: [
      { title: "Klistra in", description: "URL eller text." },
      { title: "Analysera", description: "Flerdimensionellt." },
      { title: "Granska", description: "Se poäng." },
      { title: "Åtgärda", description: "Fyll luckor." }
    ],
    benefits: ["Vet djupet", "Hitta luckor", "Anpassa till NLP", "Komplett EAV", "Täck avsikt"],
    faqs: [
      { q: "Skillnad?", a: "Djup vs nyckelord." },
      { q: "Ramsemantik?", a: "Konceptuella ramar." },
      { q: "Gap?", a: "Obesvarade frågor." },
      { q: "Konkurrenter?", a: "Jämför URL:er." }
    ],
    useCases: [
      { title: "Kvalitetsgrind", description: "Före publicering." },
      { title: "Benchmark", description: "Slå konkurrenter." },
      { title: "Revision", description: "Hitta svagheter." }
    ],
    whoIsItFor: [
      { persona: "Redaktörer", reason: "Objektivitet." },
      { persona: "Specialister", reason: "Detaljanalys." },
      { persona: "AI-team", reason: "Validering." }
    ],
    relatedTools: [
      { label: "ZentroContentBrief", description: "Skapa brief" },
      { label: "ZentroAudit", description: "Full granskning" },
      { label: "ZentroWrite", description: "Skriv om" }
    ]
  },
  zentrowhite: {
    name: "ZentroWhite",
    tagline: "Leverera SEO under ditt varumärke",
    metaTitle: "ZentroWhite – White-label SEO",
    metaDescription: "Varumärkta instrumentpaneler och rapporter.",
    overview: "SEO-byråer behöver verktyg som imponerar på klienter — inte verktyg som avslöjar plattformen bakom. ZentroWhite låter dig leverera ZentroSEO:s kraft **under ditt eget varumärke**, med din logotyp, färger och domän.\n\nDet handlar inte bara om en logotyp. ZentroWhite ger en komplett upplevelse: anpassade inloggningar, brandade mail, PDF-rapporter och instrumentpaneler som känns som din egen proprietära plattform. Klienterna ser aldrig ZentroSEO.\n\nFör byråer som vill differentiera sig är detta infrastrukturen som möjliggör skalning. Istället för att bygga egna verktyg får du omedelbar tillgång till hela sviten, helt under ditt varumärke.",
    trustChips: ["White-label", "Branding", "Rapporter"],
    capabilities: [
      { title: "Branding", description: "Logo, färg, domän." },
      { title: "Hantering", description: "Klientkonton." },
      { title: "Rapporter", description: "PDF med ditt märke." },
      { title: "Portaler", description: "Klientinloggning." },
      { title: "Automation", description: "Schemaläggning." },
      { title: "Domän", description: "Egen URL." }
    ],
    steps: [
      { title: "Konfigurera", description: "Ladda upp assets." },
      { title: "Klienter", description: "Skapa konton." },
      { title: "Leverera", description: "Använd verktyg." },
      { title: "Rapportera", description: "Visa värde." }
    ],
    benefits: ["Egen plattform", "Centralt", "Automation", "Transparens", "Skalning"],
    faqs: [
      { q: "Domän?", a: "Ja, CNAME." },
      { q: "Klienter?", a: "Obegränsat." },
      { q: "Åtkomst?", a: "Ja, egen portal." },
      { q: "Verktyg?", a: "Alla ingår." }
    ],
    useCases: [
      { title: "Tjänst", description: "Produktifiering." },
      { title: "Konsult", description: "Utöka utbud." },
      { title: "Frilans", description: "Professionellt." }
    ],
    whoIsItFor: [
      { persona: "Ägare", reason: "Skalning." },
      { persona: "Direktörer", reason: "Intäkter." },
      { persona: "Konsulter", reason: "Förtroende." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Brandade granskningar" },
      { label: "ZentroRank", description: "Spårning" },
      { label: "ZentroFix", description: "Effektivitet" }
    ]
  }
};

export default featuresSV;

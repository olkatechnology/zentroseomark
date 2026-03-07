const featuresPL: Record<string, any> = {
  zentroaudit: {
    name: "ZentroAudit",
    tagline: "Audyty SEO oparte na encjach w kilka sekund",
    metaTitle: "ZentroAudit – Audyty SEO oparte na encjach w kilka sekund",
    metaDescription: "ZentroAudit analizuje Twoją stronę pod kątem semantycznego SEO, głębokości tematycznej i pokrycia encji.",
    overview: "Większość narzędzi do audytu SEO sprawdza tylko powierzchowne sygnały — brakujące meta tagi, wolne czasy ładowania, uszkodzone linki. ZentroAudit idzie głębiej. Ocenia Twoją stronę przez pryzmat **SEO opartego na encjach**, mierząc, jak kompletnie Twoja treść pokrywa encje, atrybuty i relacje semantyczne, których wyszukiwarki używają do określania autorytetu tematycznego.\n\nTradycyjne audyty pomijają najważniejszy czynnik rankingowy nowoczesnej ery wyszukiwania: **kompletność semantyczną**. Analiza Entity-Attribute-Value (EAV) w ZentroAudit porównuje Twoją treść z oczekiwaniami Knowledge Graph dla Twoich docelowych zapytań, ujawniając luki, w których Twoje strony nie odpowiadają na pytania, które wyszukiwarki zadają w imieniu użytkowników.\n\nŁącząc ponad 200 technicznych kontroli SEO z analizą pokrycia encji opartą na NLP i monitorowaniem Core Web Vitals, ZentroAudit daje Ci jedną, uszeregowaną mapę drogową, która adresuje zarówno fundamenty techniczne, jak i głębokość semantyczną, której Twoja strona potrzebuje, aby rankować. To narzędzie audytowe zbudowane dla tego, jak Google faktycznie działa dzisiaj.",
    trustChips: ["200+ kontroli SEO", "Core Web Vitals", "Pokrycie encji"],
    capabilities: [
      { title: "Głęboka analiza crawlowania", description: "Crawluje każdą stronę, odkrywając uszkodzone linki, łańcuchy przekierowań i problemy z indeksowaniem." },
      { title: "Monitoring Core Web Vitals", description: "Monitoruje metryki LCP, FID i CLS dla szybkich, stabilnych doświadczeń użytkownika." },
      { title: "Analiza pokrycia EAV", description: "Mierzy kompletność trójek Entity-Attribute-Value względem oczekiwań wyszukiwarek." },
      { title: "Analiza SEO on-page", description: "Audytuje title tagi, meta opisy, hierarchię nagłówków i strukturę treści." },
      { title: "Bezpieczeństwo i dostępność", description: "Sprawdza problemy HTTPS, mieszaną treść i brakujące atrybuty alt." },
      { title: "Priorytetyzacja problemów", description: "Problemy są rankingowane według wpływu na SEO." }
    ],
    steps: [
      { title: "Wprowadź URL", description: "Wklej URL strony, aby rozpocząć crawl." },
      { title: "Analiza AI", description: "Silnik sprawdza 200+ czynników." },
      { title: "Wyniki", description: "Otrzymaj priorytetyzowany raport." },
      { title: "Śledzenie", description: "Mierz postępy w czasie." }
    ],
    benefits: ["Wykryj problemy techniczne", "Zrozum luki semantyczne", "Monitoruj UX", "Otrzymaj rekomendacje", "Śledź zdrowie SEO"],
    faqs: [
      { q: "Ile stron można crawlować?", a: "Do 10,000 w Pro, bez limitu w Agency." },
      { q: "Jakie czynniki sprawdza?", a: "200+ w tym meta, schema, encje." },
      { q: "Jak mierzone jest pokrycie?", a: "Porównanie z oczekiwaniami tematycznymi." },
      { q: "Cykliczne audyty?", a: "Tak, tygodniowe lub miesięczne." },
      { q: "SEO mobilne?", a: "Tak, pełny crawl mobilny." }
    ],
    useCases: [
      { title: "Agencje", description: "Automatyczne audyty dla klientów." },
      { title: "E-commerce", description: "Znajdź problemy w dużych katalogach." },
      { title: "Wydawcy", description: "Napraw spadki po aktualizacjach." },
      { title: "Migracje", description: "Ustal bazowy stan zdrowia." }
    ],
    whoIsItFor: [
      { persona: "Menedżerowie SEO", reason: "Wszystko w jednym dashboardzie." },
      { persona: "Agencje", reason: "Skalowalne raportowanie." },
      { persona: "Stratedzy", reason: "Analiza głębokości semantycznej." },
      { persona: "Specjaliści techniczni", reason: "Zaawansowana diagnostyka." }
    ],
    relatedTools: [
      { label: "ZentroFix", description: "Automatyczna naprawa" },
      { label: "ZentroMarkup", description: "Generowanie schema" },
      { label: "ZentroKeywords", description: "Badanie słów kluczowych" }
    ]
  },
  zentrofix: {
    name: "ZentroFix",
    tagline: "Natychmiast napraw błędy techniczne i treściowe SEO za pomocą AI",
    metaTitle: "ZentroFix – Napraw błędy SEO natychmiast za pomocą AI",
    metaDescription: "ZentroFix używa AI do wykrywania i automatycznego naprawiania krytycznych problemów SEO.",
    overview: "Znajdowanie problemów SEO to tylko połowa sukcesu — ich naprawianie to moment, w którym większość zespołów utyka. ZentroFix łączy audyt z działaniem, używając AI do generowania precyzyjnych, kontekstowych poprawek dla każdego problemu odkrytego przez ZentroAudit. Zamiast dawać Ci arkusz kalkulacyjny z problemami, ZentroFix dostarcza rzeczywisty kod, treść i zmiany konfiguracyjne.\n\nNarzędzie rozumie **kontekst semantyczny** każdego problemu. Kiedy generuje brakujący meta opis, nie tworzy ogólnego wypełniacza — analizuje pokrycie encji, słowa kluczowe i fokus tematyczny strony, aby stworzyć metadane, które dokładnie reprezentują zakres semantyczny treści. Kiedy naprawia uszkodzone linki wewnętrzne, sugeruje zamienniki oparte na relewancji tematycznej, a nie tylko podobieństwie URL.\n\nZentroFix jest zaprojektowany dla zespołów, które muszą działać szybko bez poświęcania jakości. Niezależnie od tego, czy naprawiasz metadane hurtowo na tysiącach stron, czy rozwiązujesz krytyczne błędy schema pojedynczo, każda poprawka jest podglądana przed zastosowaniem i odwracalna — dając Ci pewność działania na dużą skalę.",
    trustChips: ["Poprawki 1-kliknięciem", "Napędzane AI", "Auto-naprawa"],
    capabilities: [
      { title: "Auto-poprawki", description: "Napraw problemy jednym kliknięciem." },
      { title: "Naprawa metadanych", description: "Generuj tagi i opisy." },
      { title: "Naprawa linków", description: "Rozwiąż uszkodzone linki." },
      { title: "Wstrzykiwanie schema", description: "Dodaj brakujące dane JSON-LD." },
      { title: "Uzupełnianie treści", description: "Wzbogać cienkie strony." },
      { title: "Bezpieczeństwo", description: "Poprawki HTTPS i mixed content." }
    ],
    steps: [
      { title: "Audyt", description: "Skanuj stronę." },
      { title: "Przegląd", description: "Sprawdź sugestie AI." },
      { title: "Zastosuj", description: "Wdróż poprawki." },
      { title: "Weryfikacja", description: "Potwierdź wyniki." }
    ],
    benefits: ["Oszczędność czasu", "Brak potrzeby kodowania", "Działanie hurtowe", "Ochrona rankingu", "Integracja z audytem"],
    faqs: [
      { q: "Czy modyfikuje stronę?", a: "Generuje kod/zalecenia. Możliwa bezpośrednia aplikacja." },
      { q: "Co naprawia?", a: "Meta, linki, schema, treść." },
      { q: "Bezpieczeństwo?", a: "Tak, podgląd i cofanie zmian." },
      { q: "CMS?", a: "Wsparcie dla WordPress i innych." }
    ],
    useCases: [
      { title: "Sprint naprawczy", description: "Szybkie wdrożenie poprawek." },
      { title: "Poprawa treści", description: "Wzbogacanie stron." },
      { title: "Dla deweloperów", description: "Gotowe snippety kodu." }
    ],
    whoIsItFor: [
      { persona: "Menedżerowie SEO", reason: "Szybkość działania." },
      { persona: "Agencje", reason: "Wartość dodana dla klienta." },
      { persona: "Małe firmy", reason: "Prostota użycia." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Znajdź problemy" },
      { label: "ZentroWrite", description: "Generuj treść" },
      { label: "ZentroMarkup", description: "Stwórz schema" }
    ]
  },
  zentrokeywords: {
    name: "ZentroKeywords",
    tagline: "Semantyczne badanie słów kluczowych i odkrywanie encji",
    metaTitle: "ZentroKeywords – Semantyczne badanie słów kluczowych",
    metaDescription: "Odkrywaj słowa kluczowe o dużym wpływie na podstawie powiązań encji.",
    overview: "Badanie słów kluczowych ewoluowało poza wolumen wyszukiwania i wyniki konkurencyjności. ZentroKeywords podchodzi do odkrywania słów kluczowych przez pryzmat **encji semantycznych i relacji tematycznych** — tych samych ram, których używają wyszukiwarki do rozumienia i rankowania treści. Zamiast dawać Ci płaską listę słów posortowaną według wolumenu, mapuje krajobraz encji wokół Twojego tematu seed.\n\nKażde słowo kluczowe istnieje w sieci relacji semantycznych. ZentroKeywords ujawnia te połączenia: jakie encje wyszukiwarki kojarzą z zapytaniem, do jakich klastrów tematycznych należy słowo kluczowe i jakie wzorce intencji wyszukiwania aktywuje. Pozwala to budować strategie treści, które ustanawiają **autorytet tematyczny**, zamiast gonić za pojedynczymi rankingami.\n\nNarzędzie integruje metodologię semantycznego SEO Koraya Tugberka GÜBÜRA bezpośrednio w workflow badawczy. Kiedy wprowadzasz słowo seed, ZentroKeywords nie tylko znajduje powiązane terminy — mapuje pełny graf encji, identyfikuje strukturę treści hub-and-spoke i klasyfikuje każde słowo według intencji.",
    trustChips: ["Oparte na encjach", "Mapowanie intencji", "Klastry tematyczne"],
    capabilities: [
      { title: "Odkrywanie encji", description: "Znajdź powiązane tematy." },
      { title: "Intencja", description: "Klasyfikacja celu wyszukiwania." },
      { title: "Klastry", description: "Grupowanie tematyczne." },
      { title: "Trudność", description: "Ocena oparta na encjach." },
      { title: "Lokalne/Globalne", description: "Badania wielojęzyczne." },
      { title: "Trendy", description: "Analiza sezonowości." }
    ],
    steps: [
      { title: "Słowo seed", description: "Zacznij od tematu." },
      { title: "Relacje", description: "Zobacz połączenia." },
      { title: "Filtr", description: "Wybierz najlepsze." },
      { title: "Eksport", description: "Planuj treść." }
    ],
    benefits: ["Znajdź ukryte słowa", "Buduj autorytet", "Dopasuj intencję", "Niska konkurencja", "Kompletne plany"],
    faqs: [
      { q: "Różnica?", a: "Analiza encji zamiast tylko wolumenu." },
      { q: "Języki?", a: "50+ języków i 100+ krajów." },
      { q: "Klastry?", a: "Oparte na semantyce." },
      { q: "Eksport?", a: "CSV i integracja z ZentroWrite." }
    ],
    useCases: [
      { title: "Nowe silosy", description: "Buduj strukturę od zera." },
      { title: "E-commerce", description: "Optymalizacja kategorii." },
      { title: "Ekspansja", description: "Badania międzynarodowe." }
    ],
    whoIsItFor: [
      { persona: "Stratedzy", reason: "Mapy tematyczne." },
      { persona: "Specjaliści SEO", reason: "Głębsze zrozumienie." },
      { persona: "PPC/SEO", reason: "Spójna strategia." }
    ],
    relatedTools: [
      { label: "ZentroWrite", description: "Twórz treść" },
      { label: "ZentroRank", description: "Monitoruj pozycje" },
      { label: "ZentroCompare", description: "Analiza konkurencji" }
    ]
  },
  zentrorank: {
    name: "ZentroRank",
    tagline: "Śledzenie rankingów w czasie rzeczywistym",
    metaTitle: "ZentroRank – Śledzenie rankingów w czasie rzeczywistym",
    metaDescription: "Monitoruj wyniki według urządzenia, lokalizacji i tematów.",
    overview: "Rankingi zmieniają się codziennie, a bez ciągłego monitorowania działasz po omacku. ZentroRank zapewnia śledzenie rankingów w czasie rzeczywistym, które wykracza poza proste numery pozycji — monitoruje widoczność na **urządzeniach, w lokalizacjach i funkcjach SERP**, dając pełny obraz tego, jak wyszukiwarki prezentują Twoją treść.\n\nTo, co wyróżnia ZentroRank, to podejście świadome encji. Nie mówi Ci tylko, że jesteś na 7. miejscu — pokazuje, jakie funkcje SERP otaczają Twój wynik, czy konkurenci mają knowledge panele i jak Twoje rankingi korelują z wynikami autorytetu encji. \n\nDla agencji i firm wielolokalizacyjnych śledzenie według lokalizacji dostarcza granularne dane. Śledź to samo słowo w 100+ miastach, porównuj wyniki mobile vs desktop i ustawiaj inteligentne alerty, które powiadamiają Cię tylko o istotnych zmianach.",
    trustChips: ["Czas rzeczywisty", "Multi-urządzenie", "Lokalizacja"],
    capabilities: [
      { title: "Tracking SERP", description: "Codzienne aktualizacje." },
      { title: "Lokalizacja", description: "Miasta i kraje." },
      { title: "Urządzenia", description: "Mobile vs Desktop." },
      { title: "Konkurencja", description: "Porównanie rankingów." },
      { title: "Funkcje SERP", description: "Snippets, panele." },
      { title: "Alerty", description: "Powiadomienia o spadkach." }
    ],
    steps: [
      { title: "Dodaj słowa", description: "Importuj listę." },
      { title: "Parametry", description: "Ustaw zakres." },
      { title: "Monitoruj", description: "Analizuj trendy." },
      { title: "Działaj", description: "Optymalizuj." }
    ],
    benefits: ["Bądź na bieżąco", "Pełna widoczność", "Benchmark", "Okazje SERP", "Lepsze decyzje"],
    faqs: [
      { q: "Częstotliwość?", a: "Codziennie lub częściej." },
      { q: "Limity?", a: "Od 50 do nielimitowanych." },
      { q: "Lokalizacje?", a: "100+ krajów." },
      { q: "SERP features?", a: "Tak, pełne wsparcie." }
    ],
    useCases: [
      { title: "Monitoring", description: "Po aktualizacji treści." },
      { title: "Franczyzy", description: "Wiele lokalizacji." },
      { title: "Wywiad", description: "Śledzenie konkurencji." }
    ],
    whoIsItFor: [
      { persona: "Menedżerowie", reason: "Jasne raporty." },
      { persona: "Lokalne SEO", reason: "Precyzja geograficzna." },
      { persona: "Content", reason: "Mierzenie wpływu." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Nowe słowa" },
      { label: "ZentroCompare", description: "Analiza rywali" },
      { label: "ZentroAudit", description: "Naprawa błędów" }
    ]
  },
  zentrowrite: {
    name: "ZentroWrite",
    tagline: "Twórz treści SEO bogate w encje z AI",
    metaTitle: "ZentroWrite – Treści SEO bogate w encje z AI",
    metaDescription: "Generuj zoptymalizowane posty i opisy produktów.",
    overview: "Tworzenie treści pod SEO przesunęło się z upychania słów kluczowych na **kompletność semantyczną**. ZentroWrite to asystent pisania AI zbudowany specjalnie dla tego nowego paradygmatu — generuje treści, które naturalnie integrują encje, atrybuty i relacje tematyczne, których wyszukiwarki oczekują na autorytatywnych stronach.\n\nW przeciwieństwie do ogólnych narzędzi AI, ZentroWrite jest trenowany na zasadach SEO opartego na encjach. Kiedy podajesz słowo docelowe, analizuje on pełny krajobraz encji — jakie nazwane encje muszą się pojawić, jakie trójki EAV wymagają pokrycia i jak treść powinna być zorganizowana z nagłówkami H2 w formie pytań i odpowiedziami ekstrakcyjnymi.\n\nZentroWrite integruje się z ZentroContentBrief i ZentroTopicality, tworząc zamknięty obieg: brief → pisanie → ocena → ulepszanie.",
    trustChips: ["Napędzane AI", "Zoptymalizowane", "SEO-ready"],
    capabilities: [
      { title: "Generowanie semantyczne", description: "Naturalne użycie encji." },
      { title: "Meta tagi", description: "Automatyczna optymalizacja." },
      { title: "Brief builder", description: "Kompleksowe wytyczne." },
      { title: "Score optimizer", description: "Ocena w czasie rzeczywistym." },
      { title: "Pisanie artykułów", description: "Pełne teksty." },
      { title: "Szablony", description: "Dla różnych formatów." }
    ],
    steps: [
      { title: "Wybierz typ", description: "Blog, produkt, etc." },
      { title: "Słowa kluczowe", description: "Analiza encji." },
      { title: "Generuj", description: "Tworzenie draftu." },
      { title: "Publikuj", description: "Eksport gotowej treści." }
    ],
    benefits: ["Pokrycie encji", "Oszczędność czasu", "Autorytet", "Lepszy ranking", "Jakość treści"],
    faqs: [
      { q: "Zastępuje pisarzy?", a: "Nie, wspomaga ich." },
      { q: "Typy treści?", a: "Blogi, opisy, FAQ." },
      { q: "Dlaczego encje?", a: "Dla zrozumienia przez AI." },
      { q: "Styl marki?", a: "Konfigurowalny ton." }
    ],
    useCases: [
      { title: "Skalowanie", description: "Szybkie drafty." },
      { title: "Optymalizacja", description: "Poprawa starych treści." },
      { title: "E-commerce", description: "Opisy produktów." }
    ],
    whoIsItFor: [
      { persona: "Pisarze", reason: "Wsparcie semantyczne." },
      { persona: "Zespoły SEO", reason: "Szybka produkcja." },
      { persona: "Agencje", reason: "Skala i jakość." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Badanie przed pisaniem" },
      { label: "ZentroAudit", description: "Znajdź luki" },
      { label: "ZentroMarkup", description: "Dodaj dane strukturalne" }
    ]
  },
  zentrocompare: {
    name: "ZentroCompare",
    tagline: "Zidentyfikuj luki SEO w pokryciu encji",
    metaTitle: "ZentroCompare – Luki w pokryciu encji",
    metaDescription: "Analizuj wyniki konkurencji pod kątem encji i tematów.",
    overview: "Dlaczego konkurenci Cię wyprzedzają? Odpowiedź często nie leży w linkach, ale w **autorytecie tematycznym**. ZentroCompare oferuje analizę konkurencji opartą na encjach, wykraczającą poza proste pokrycie słów kluczowych. Mapuje tematyczny ślad konkurencji i identyfikuje encje, tematy i relacje, które oni pokrywają, a Ty nie.\n\nWiększość narzędzi pokazuje, na jakie słowa rankują rywale. ZentroCompare pokazuje *dlaczego*. Analizując gęstość encji, strukturę klastrów i sygnały EAV najlepszych stron, ujawnia semantyczne luki w Twojej strategii. Czy brakuje Ci kluczowego podtematu? Czy konkurenci mają lepsze relacje encji?\n\nUżyj ZentroCompare, aby znaleźć niewykorzystane okazje, zbenchmarkować swój autorytet i zbudować strategię opartą na danych, która wypełni luki w Twojej niszy.",
    trustChips: ["Analiza luk", "Porównanie encji", "Mapy tematyczne"],
    capabilities: [
      { title: "Analiza luk", description: "Porównaj z 5 rywalami." },
      { title: "Mapy pokrycia", description: "Wizualizacja tematów." },
      { title: "Luki słów", description: "Znajdź okazje." },
      { title: "Autorytet encji", description: "Porównanie siły." },
      { title: "Estymacja ruchu", description: "Szacunki organiczne." },
      { title: "Trendy", description: "Zmiany w czasie." }
    ],
    steps: [
      { title: "Dodaj konkurencję", description: "Wpisz domeny." },
      { title: "Porównaj", description: "Analiza side-by-side." },
      { title: "Znajdź luki", description: "Odkryj braki." },
      { title: "Strategia", description: "Plan działania." }
    ],
    benefits: ["Znajdź okazje", "Strategia danych", "Zrozum autorytet", "Priorytetyzacja", "Monitoring"],
    faqs: [
      { q: "Ilu rywali?", a: "5 (Pro) lub 10 (Agency)." },
      { q: "Jakie dane?", a: "Rankingi, treść, linki." },
      { q: "Historia?", a: "Tak, śledzenie zmian." },
      { q: "Różnica vs słowa?", a: "Głębsza analiza semantyczna." }
    ],
    useCases: [
      { title: "Planowanie", description: "Analiza kwartalna." },
      { title: "Nowy rynek", description: "Analiza liderów." },
      { title: "Diagnoza", description: "Przyczyny spadków." }
    ],
    whoIsItFor: [
      { persona: "Dyrektorzy SEO", reason: "Decyzje inwestycyjne." },
      { persona: "Stratedzy", reason: "Wykrywanie luk." },
      { persona: "Marketing", reason: "Pozycjonowanie." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Badanie słów z luk" },
      { label: "ZentroBacklinks", description: "Porównanie linków" },
      { label: "ZentroWrite", description: "Wypełnianie luk" }
    ]
  },
  zentrobacklinks: {
    name: "ZentroBacklinks",
    tagline: "Odkryj backlinki budujące zaufanie do encji",
    metaTitle: "ZentroBacklinks – Linki budujące zaufanie",
    metaDescription: "Analizuj profile linków pod kątem autorytetu i relewancji.",
    overview: "Nie wszystkie backlinki są równe. W SEO opartym na encjach, **relewancja tematyczna** domeny linkującej jest tak samo ważna jak jej autorytet. ZentroBacklinks analizuje Twój profil linków przez pryzmat zaufania do encji — oceniając, czy linki pochodzą ze źródeł, które wzmacniają Twój autorytet tematyczny, czy go osłabiają.\n\nTradycyjne narzędzia oceniają linki głównie po DA. ZentroBacklinks dodaje warstwę relewancji encji: mapuje fokus tematyczny każdej domeny i ocenia wpływ na Twój autorytet. Link z niszowego bloga może być więcej wart niż z ogólnego portalu o wysokim DA.\n\nNarzędzie dostarcza też okazji do link buildingu. Analizując profile konkurencji przez ten sam pryzmat, identyfikuje tematycznie istotne domeny, które linkują do rywali, a nie do Ciebie.",
    trustChips: ["Analiza linków", "Wykrywanie toksycznych", "Ocena autorytetu"],
    capabilities: [
      { title: "Analiza profilu", description: "Pełny przegląd." },
      { title: "Toksyczne linki", description: "Wykrywanie spamu." },
      { title: "Ocena autorytetu", description: "Siła i relewancja." },
      { title: "Relewancja", description: "Zgodność tematyczna." },
      { title: "Okazje", description: "Analiza konkurencji." },
      { title: "Monitoring", description: "Nowe i utracone." }
    ],
    steps: [
      { title: "Wpisz domenę", description: "Rozpocznij analizę." },
      { title: "Jakość", description: "Oceń linki." },
      { title: "Disavow", description: "Plik zrzeczenia." },
      { title: "Okazje", description: "Znajdź nowe." }
    ],
    benefits: ["Ochrona przed karami", "Lepsze linki", "Wzrost profilu", "Nowe okazje", "Zrozumienie jakości"],
    faqs: [
      { q: "Baza danych?", a: "Miliardy linków." },
      { q: "Disavow?", a: "Tak, zgodny z Google." },
      { q: "Jak działa analiza?", a: "Ocena tematyczna." },
      { q: "Konkurencja?", a: "Tak, pełna analiza." }
    ],
    useCases: [
      { title: "Odzyskiwanie", description: "Po karach ręcznych." },
      { title: "Kampanie", description: "Targetowanie." },
      { title: "Audyt", description: "Ocena przed zakupem." }
    ],
    whoIsItFor: [
      { persona: "Specjaliści", reason: "Jakość ponad ilość." },
      { persona: "Menedżerowie", reason: "Bezpieczeństwo." },
      { persona: "PR", reason: "Targetowanie mediów." }
    ],
    relatedTools: [
      { label: "ZentroCompare", description: "Porównanie profili" },
      { label: "ZentroAudit", description: "Linki wewnętrzne" },
      { label: "ZentroRank", description: "Wpływ na pozycje" }
    ]
  },
  zentromarkup: {
    name: "ZentroMarkup",
    tagline: "Automatycznie generuj Schema JSON-LD",
    metaTitle: "ZentroMarkup – Generowanie Schema JSON-LD",
    metaDescription: "Zwiększ widoczność dzięki danym strukturalnym.",
    overview: "Dane strukturalne to most między Twoją treścią a Knowledge Graph. ZentroMarkup automatyzuje tworzenie **znacznika Schema JSON-LD**, który jasno deklaruje encje, atrybuty i relacje w Twojej treści — pomagając wyszukiwarkom precyzyjnie rozumieć Twoje strony.\n\nWiększość generatorów tworzy podstawowy kod. ZentroMarkup używa AI do analizy treści, identyfikacji encji i generowania kompleksowych danych, które pokrywają nie tylko wymagane pola, ale też rekomendowane właściwości łączące encje.\n\nWyniki z elementami rozszerzonymi (Rich Results) zależą od poprawnych danych strukturalnych. ZentroMarkup waliduje Twój kod w czasie rzeczywistym względem wymagań Google, zapewniając zgodność przed wdrożeniem.",
    trustChips: ["Generowanie JSON-LD", "Rich snippets", "Walidacja"],
    capabilities: [
      { title: "Auto-generowanie", description: "Bez kodowania." },
      { title: "Walidacja", description: "Zgodność z Google." },
      { title: "Linkowanie encji", description: "Połączenie z KG." },
      { title: "Wiele typów", description: "30+ rodzajów schema." },
      { title: "Edytor wizualny", description: "Dostosowanie." },
      { title: "Generowanie hurtowe", description: "Dla wielu stron." }
    ],
    steps: [
      { title: "Wybierz stronę", description: "URL lub treść." },
      { title: "Przegląd", description: "AI tworzy kod." },
      { title: "Dostosuj", description: "Edycja i test." },
      { title: "Wdróż", description: "Kopiuj lub wstrzyknij." }
    ],
    benefits: ["Rich results", "Lepsze rozumienie", "Bez kodu", "Skalowalność", "Zgodność"],
    faqs: [
      { q: "Typy?", a: "Artykuł, Produkt, FAQ, itp." },
      { q: "Kodowanie?", a: "Niepotrzebne." },
      { q: "Korzyści?", a: "CTR i widoczność." },
      { q: "Aktualizacja?", a: "Tak, edycja istniejących." }
    ],
    useCases: [
      { title: "E-commerce", description: "Produkty i oferty." },
      { title: "Blogi", description: "Artykuły i newsy." },
      { title: "Lokalne", description: "Firmy lokalne." }
    ],
    whoIsItFor: [
      { persona: "SEO Techniczne", reason: "Zaawansowane schema." },
      { persona: "Content", reason: "Łatwe wdrożenie." },
      { persona: "E-commerce", reason: "Skala." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Brakujące schema" },
      { label: "ZentroFix", description: "Auto-naprawa" },
      { label: "ZentroWrite", description: "Treść pod schema" }
    ]
  },
  zentrotopicalmap: {
    name: "ZentroTopicalMap",
    tagline: "Buduj mapy tematyczne oparte na encjach",
    metaTitle: "ZentroTopicalMap – Mapy tematyczne encji",
    metaDescription: "Generuj struktury hub-and-spoke dla autorytetu.",
    overview: "Autorytet tematyczny buduje się poprzez **systematyczną architekturę treści**, a nie przypadkowe publikacje. ZentroTopicalMap generuje kompleksowe struktury treści hub-and-spoke oparte na relacjach encji — dając Ci kompletny plan dominacji tematycznej.\n\nFramework semantyczny Koraya Tugberka GÜBÜRA podkreśla holistyczną ocenę autorytetu. Pojedynczy artykuł nie wystarczy. Potrzebujesz sieci powiązanych stron pokrywających każdą encję i atrybut w przestrzeni tematycznej. ZentroTopicalMap buduje tę sieć.\n\nNarzędzie zaczyna od centralnej encji i mapuje na zewnątrz: identyfikując tematy hub, podtematy spoke, relacje i konteksty źródłowe kształtujące krajobraz autorytetu.",
    trustChips: ["Oparte na encjach", "Hub & spoke", "Wykrywanie luk"],
    capabilities: [
      { title: "Mapa encji", description: "Pełny graf." },
      { title: "Hub-and-Spoke", description: "Struktura hierarchiczna." },
      { title: "Kontekst", description: "Analiza źródeł." },
      { title: "Odkrywanie", description: "Tematy poboczne." },
      { title: "Luki semantyczne", description: "Porównanie z obecną treścią." },
      { title: "Ocena głębokości", description: "Priorytetyzacja." }
    ],
    steps: [
      { title: "Definicja", description: "Centralny temat." },
      { title: "Generowanie", description: "Budowa mapy." },
      { title: "Przegląd", description: "Klastry i luki." },
      { title: "Eksport", description: "Plan treści." }
    ],
    benefits: ["Autorytet bez linków", "Pełne pokrycie", "Wykrywanie luk", "Struktura", "Strategia"],
    faqs: [
      { q: "Co to jest?", a: "Hierarchia tematów." },
      { q: "Jak działa?", a: "Analiza relacji encji." },
      { q: "Dla istniejących stron?", a: "Tak, pokazuje braki." },
      { q: "Różnica vs słowa?", a: "Głębsza struktura." }
    ],
    useCases: [
      { title: "Nowa strona", description: "Plan od zera." },
      { title: "Restrukturyzacja", description: "Naprawa architektury." },
      { title: "Pitch", description: "Wizualizacja strategii." }
    ],
    whoIsItFor: [
      { persona: "Stratedzy", reason: "Planowanie." },
      { persona: "Dyrektorzy", reason: "Zarządzanie." },
      { persona: "Startupy", reason: "Szybki start." }
    ],
    relatedTools: [
      { label: "ZentroKeywords", description: "Słowa seed" },
      { label: "ZentroWrite", description: "Pisanie treści" },
      { label: "ZentroCompare", description: "Porównanie" }
    ]
  },
  zentrocontentbrief: {
    name: "ZentroContentBrief",
    tagline: "Generuj briefy treści zoptymalizowane pod EAV",
    metaTitle: "ZentroContentBrief – Briefy EAV w kilka sekund",
    metaDescription: "Buduj semantyczne briefy z trójkami EAV i encjami.",
    overview: "Świetna treść zaczyna się od świetnego briefu. ZentroContentBrief generuje **plany treści zoptymalizowane pod EAV**, które dokładnie mówią pisarzom, jakie encje pokryć, jakie atrybuty zdefiniować i jakie relacje ustanowić — zanim napiszą choć słowo.\n\nWiększość briefów skupia się na słowach kluczowych. ZentroContentBrief idzie głębiej, generując trójki Entity-Attribute-Value, sugerując nagłówki H2 w formie pytań z celami odpowiedzi ekstrakcyjnych (według zasad Koraya) i definiując makro kontekst strony.\n\nUstawienie makro kontekstu jest kluczowe: zapewnia, że strona działa w ramach jednego, jasnego ramu semantycznego. W połączeniu z rekomendacjami encji i sugestiami ankerów, narzędzie tworzy briefy będące semantycznymi planami budowy.",
    trustChips: ["Trójki EAV", "Pytania H2", "Nazwane encje"],
    capabilities: [
      { title: "Generator EAV", description: "Automatyczne trójki." },
      { title: "Sugestie H2", description: "Pytania użytkowników." },
      { title: "Makro kontekst", description: "Ramy semantyczne." },
      { title: "Encje", description: "Wymagane wzmianki." },
      { title: "Ocena", description: "Pre-scoring." },
      { title: "Ankery", description: "Linkowanie wewnętrzne." }
    ],
    steps: [
      { title: "Zapytanie", description: "Analiza tematu." },
      { title: "Mapowanie", description: "Graf encji." },
      { title: "Dostosowanie", description: "Edycja briefu." },
      { title: "Eksport", description: "Do pisania." }
    ],
    benefits: ["Brak zgadywania", "Snippety", "Kontekst", "Sygnały KG", "Czas"] ,
    faqs: [
      { q: "Co to EAV?", a: "Model danych encji." },
      { q: "Jak działają H2?", a: "Wzorce zapytań." },
      { q: "Makro kontekst?", a: "Główny sens." },
      { q: "Workflow?", a: "Eksport PDF/App." }
    ],
    useCases: [
      { title: "Zespoły", description: "Standardyzacja." },
      { title: "Odświeżanie", description: "Analiza luk." },
      { title: "Snippety", description: "Struktura odpowiedzi." }
    ],
    whoIsItFor: [
      { persona: "Menedżerowie", reason: "Jakość." },
      { persona: "Pisarze", reason: "Jasność." },
      { persona: "Konsultanci", reason: "Ekspertyza." }
    ],
    relatedTools: [
      { label: "ZentroWrite", description: "Pisanie" },
      { label: "ZentroTopicalMap", description: "Struktura" },
      { label: "ZentroKeywords", description: "Zapytania" }
    ]
  },
  zentrocontentplan: {
    name: "ZentroContentPlan",
    tagline: "Planuj 6-miesięczne audyty semantyczne",
    metaTitle: "ZentroContentPlan – Cykliczne audyty treści",
    metaDescription: "Monitoruj starzenie się treści i zmiany wzorców.",
    overview: "Treść nie pozostaje zoptymalizowana na zawsze. Wzorce zapytań się zmieniają, konkurenci publikują lepsze materiały, a oczekiwania semantyczne ewoluują. ZentroContentPlan automatyzuje **zarządzanie cyklem życia treści**, planując regularne re-audyty, aby wyłapać degradację semantyczną przed spadkiem rankingów.\n\nCykl 6-miesięczny opiera się na obserwowalnych zachowaniach: wzorce zmieniają się typowo w takim oknie. Strony, które były kompletne w momencie publikacji, mogą tracić zbieżność w miarę ewolucji krajobrazu encji.\n\nPoza harmonogramem, narzędzie monitoruje nagłe zmiany wzorców zapytań — sygnały, że treść wymaga natychmiastowej uwagi. W połączeniu z monitorem Helpful Content Update, daje to proaktywny system utrzymania.",
    trustChips: ["Wykrywanie degradacji", "Cykle 6-mies.", "Alerty zmian"],
    capabilities: [
      { title: "Wiek treści", description: "Monitorowanie dat." },
      { title: "Zmiany wzorców", description: "Alerty zapytań." },
      { title: "Dystans semantyczny", description: "Mierzenie odchyleń." },
      { title: "Analiza historii", description: "Trendy zaangażowania." },
      { title: "HCU", description: "Sygnały jakości." },
      { title: "Harmonogram", description: "Auto-audyty." }
    ],
    steps: [
      { title: "Podłącz", description: "Inwentaryzacja." },
      { title: "Ustaw cykle", description: "3, 6, 12 miesięcy." },
      { title: "Odbierz alerty", description: "Powiadomienia." },
      { title: "Aktualizuj", description: "Re-optymalizacja." }
    ],
    benefits: ["Unikaj spadków", "Utrzymaj autorytet", "Automatyzacja", "Identyfikacja potrzeb", "Jakość historyczna"],
    faqs: [
      { q: "Co to degradacja?", a: "Utrata relewancji." },
      { q: "Dlaczego 6 miesięcy?", a: "Okno zmian wzorców." },
      { q: "Wykrywanie?", a: "Trendy i SERP." },
      { q: "Integracja?", a: "Z ZentroAudit." }
    ],
    useCases: [
      { title: "Biblioteki", description: "Utrzymanie skali." },
      { title: "Sezonowość", description: "Krótkie cykle." },
      { title: "Algorytmy", description: "Szybka reakcja." }
    ],
    whoIsItFor: [
      { persona: "Menedżerowie", reason: "Automatyzacja." },
      { persona: "Agencje", reason: "Retainer." },
      { persona: "Liderzy", reason: "Proaktywność." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Re-audyt" },
      { label: "ZentroWrite", description: "Przepisanie" },
      { label: "ZentroContentBrief", description: "Nowy brief" }
    ]
  },
  zentrotopicality: {
    name: "ZentroTopicality",
    tagline: "Oceń głębokość tematyczną treści",
    metaTitle: "ZentroTopicality – Ocena głębokości tematycznej",
    metaDescription: "Scoring NLP, semantyka ramowa i luki zapytań.",
    overview: "Skąd wiesz, czy Twoja treść jest wystarczająco głęboka semantycznie? ZentroTopicality odpowiada na to pytanie za pomocą **scoringu opartego na NLP**, który mierzy treść względem pełnych oczekiwań semantycznych wyszukiwarek.\n\nWiększość narzędzi ocenia słowa kluczowe. ZentroTopicality schodzi do poziomu zdań, analizując role semantyczne, pokrycie ram semantycznych i kompletność EAV. Nie sprawdza, czy wspomniałeś słowo — sprawdza, czy w pełni opisujesz encje i relacje w sposób wymagany do ekstrakcji faktów i integracji z Knowledge Graph.\n\nAnaliza semantyki ramowej jest szczególnie potężna. Ocenia, czy treść aktywuje wszystkie ramy koncepcyjne związane z zapytaniem. Jeśli piszesz o 'parzeniu kawy' i pomijasz temperaturę wody, kluczowe ramy są nieobecne.",
    trustChips: ["Scoring NLP", "Semantyka ramowa", "Luki zapytań"],
    capabilities: [
      { title: "Scorer NLP", description: "Spójność semantyczna." },
      { title: "Ramy semantyczne", description: "Pokrycie konceptów." },
      { title: "Role semantyczne", description: "Analiza zdań." },
      { title: "Checker EAV", description: "Weryfikacja trójek." },
      { title: "Luki zapytań", description: "Porównanie z klastrem." },
      { title: "Gęstość encji", description: "Dystrybucja." }
    ],
    steps: [
      { title: "Wklej treść", description: "Lub URL." },
      { title: "Analiza", description: "Wielowymiarowa." },
      { title: "Wynik", description: "Szczegółowa ocena." },
      { title: "Naprawa", description: "Uzupełnienie braków." }
    ],
    benefits: ["Wiedza przed publikacją", "Luki semantyczne", "Struktura zdań", "Pokrycie EAV", "Luki intencji"],
    faqs: [
      { q: "Różnica vs SEO?", a: "Głębokość, nie słowa." },
      { q: "Semantyka ramowa?", a: "Aktywacja konceptów." },
      { q: "Luki zapytań?", a: "Brakujące odpowiedzi." },
      { q: "Konkurencja?", a: "Tak, benchmark." }
    ],
    useCases: [
      { title: "Jakość", description: "Bramka publikacji." },
      { title: "Benchmark", description: "Pokonaj rywali." },
      { title: "Audyt", description: "Priorytetyzacja." }
    ],
    whoIsItFor: [
      { persona: "Redaktorzy", reason: "Obiektywna ocena." },
      { persona: "Specjaliści", reason: "Identyfikacja braków." },
      { persona: "AI", reason: "Walidacja jakości." }
    ],
    relatedTools: [
      { label: "ZentroContentBrief", description: "Brief EAV" },
      { label: "ZentroAudit", description: "Pełny audyt" },
      { label: "ZentroWrite", description: "Przepisanie" }
    ]
  },
  zentrowhite: {
    name: "ZentroWhite",
    tagline: "Dostarczaj SEO oparte na encjach pod własną marką",
    metaTitle: "ZentroWhite – Platforma SEO White-Label",
    metaDescription: "Brandowane dashboardy i raporty dla klientów.",
    overview: "Agencje SEO potrzebują narzędzi, które robią wrażenie na klientach — a nie takich, które zdradzają technologię. ZentroWhite pozwala dostarczać pełną moc toolkitu ZentroSEO **pod własną marką**, z Twoim logo, kolorami, domeną i nazwą na każdym raporcie.\n\nWhite-labeling to nie tylko logo. ZentroWhite zapewnia pełne doświadczenie: własne portale logowania, powiadomienia email, raporty PDF i dashboardy, które wyglądają jak autorska platforma Twojej agencji. Klienci nigdy nie widzą marki ZentroSEO.\n\nDla agencji, które chcą się wyróżnić metodologią opartą na encjach, ZentroWhite to warstwa infrastruktury pozwalająca na skalowanie. Zamiast budować własne narzędzia od zera, otrzymujesz natychmiastowy dostęp do wszystkich 12 narzędzi, w pełni obrandowanych.",
    trustChips: ["White-label", "Branding", "Raporty"],
    capabilities: [
      { title: "Branding", description: "Logo, kolory, domena." },
      { title: "Zarządzanie", description: "Konta klientów." },
      { title: "Raporty", description: "Profesjonalne PDF." },
      { title: "Portale", description: "Dostęp dla klienta." },
      { title: "Automatyzacja", description: "Harmonogramy." },
      { title: "Własna domena", description: "Twój URL." }
    ],
    steps: [
      { title: "Konfiguracja", description: "Ustaw markę." },
      { title: "Klienci", description: "Dodaj konta." },
      { title: "Usługi", description: "Używaj narzędzi." },
      { title: "Raportowanie", description: "Wysyłaj wyniki." }
    ],
    benefits: ["Własna platforma", "Centralne zarządzanie", "Oszczędność czasu", "Zaufanie", "Skalowanie"],
    faqs: [
      { q: "Domena?", a: "Tak, custom CNAME." },
      { q: "Ilu klientów?", a: "Bez limitu." },
      { q: "Dostęp?", a: "Tak, portal." },
      { q: "Narzędzia?", a: "Wszystkie dostępne." }
    ],
    useCases: [
      { title: "Usługi zarządzane", description: "Produktyzacja." },
      { title: "Konsulting", description: "Rozszerzenie oferty." },
      { title: "Freelancing", description: "Profesjonalizm." }
    ],
    whoIsItFor: [
      { persona: "Właściciele", reason: "Skalowanie." },
      { persona: "Dyrektorzy", reason: "Przychody." },
      { persona: "Konsultanci", reason: "Wizerunek." }
    ],
    relatedTools: [
      { label: "ZentroAudit", description: "Audyty" },
      { label: "ZentroRank", description: "Rankingi" },
      { label: "ZentroFix", description: "Naprawy" }
    ]
  }
};

export default featuresPL;

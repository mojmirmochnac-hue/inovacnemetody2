export interface InnovationMethod {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyPrinciples: string[];
  whenToUse: string;
  metrics?: string[];
  category: 'ZÁKAZNÍK a HODNOTA' | 'PRODUKT / NÁPADY' | 'VALIDÁCIA' | 'PROCESY' | 'PROJEKTY' | 'STRATÉGIA' | 'UDRŽATEĽNOSŤ' | 'AI';
  history?: string;
  tools?: string[];
  examples?: string[];
}

export const innovationMethods: InnovationMethod[] = [
  {
    id: 'jtbd',
    title: 'Jobs to be Done (JTBD)',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Rozhodovací rámec zameraný na účel, ktorý predpokladá, že zákazníci si produkty "najímajú" na vykonanie určitej práce.',
    fullDescription: 'Metodológia Jobs to be Done (JTBD) predstavuje robustný rozhodovací rámec zameraný na účel a progres. "Zákazník nechce vrták, ale díru" - tento výrok (Ján Košturiak/Theodore Levitt) vystihuje podstatu. Clayton Christensen dodáva: "Práce zákazníka, ne zákazník, je základní předmět analýzy marketéra." Namiesto vylepšovania parametrov samotného produktu sa inovátor sústredí na to, ako lepšie pomôcť zákazníkovi dosiahnuť jeho ultimátny cieľ.',
    keyPrinciples: [
      'Zákazníci si produkty "najímajú" na vykonanie práce.',
      'Funkčné ciele (racionálne úlohy, napr. presun z bodu A do B).',
      'Emocionálne faktory (ako sa chce zákazník cítiť, napr. bezpečne).',
      'Kontextuálne faktory (situácia, prostredie, čas).',
      'Oddelenie problému (Job) od riešenia (Produkt).',
      'Zákazník nekupuje produkt, ale riešenie svojho problému (vrták vs. diera).'
    ],
    whenToUse: 'Pri formulovaní inovačnej stratégie, pri vývoji produktov v ranom štádiu na identifikáciu "bieleho priestoru" na trhu a pri segmentácii trhu podľa potrieb, nie demografie.',
    metrics: ['Miera uspokojenia potrieb', 'Presnosť definície "práce"', 'Growth Strategy Matrix'],
    history: 'Popularizovaná Claytonom Christensenom v knihe "The Innovator\'s Solution" a ďalej rozvinutá Tonym Ulwickom (Strategyn) a Bobom Moestom.',
    tools: ['Job Map', 'Job Story', 'Interviewing Techniques', 'Forces of Progress'],
    examples: ['Milkshake marketing (McDonald\'s)', 'Intercom (softvér)', 'Snickers (uspokojenie hladu)', 'Nemocničné lôžko Linet (sestra nechce dvíhať pacienta)']
  },
  {
    id: 'odi',
    title: 'Outcome-Driven Innovation (ODI)',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Exaktné zavedenie teórie JTBD do praxe, zamerané na merateľné výsledky.',
    fullDescription: 'ODI prináša vysoko štruktúrovaný, prediktívny a kvantitatívny proces, ktorý slúži na systematické minimalizovanie rizika neúspechu. Proces sa spolieha na presné meranie toho, ako dobre zákazníci dokážu vykonať svoju "prácu" s použitím súčasných riešení. Identifikuje potreby, ktoré sú predimenzované (overserved) alebo poddimenzované (underserved).',
    keyPrinciples: [
      'Definovanie trhu okolo "práce", nie produktu.',
      'Mapa práce (Job Map) - 8 univerzálnych krokov.',
      'Odkrytie želaných výsledkov (desired outcomes).',
      'Kvantitatívna analýza miery uspokojenia potrieb (Importance vs. Satisfaction).',
      'Opportunity Algorithm.'
    ],
    whenToUse: 'Na formuláciu stratégie založenej na dátach a alokáciu zdrojov na parametre s najväčším potenciálom.',
    metrics: ['Opportunity Score', 'Miera uspokojenia potreby'],
    history: 'Vytvoril Anthony Ulwick v roku 1991. Prvýkrát úspešne aplikovaná v projekte pre Cordis Corporation (angioplastické balóny).',
    tools: ['Opportunity Landscape', 'Market Segmentation Grid', 'Outcome Statement'],
    examples: ['Bosch (okružná píla)', 'Microsoft (Software Assurance)', 'Kroll Ontrack']
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Iteratívny proces orientovaný na používateľa, zameraný na budovanie empatie a riešenie komplexných problémov.',
    fullDescription: 'Design Thinking kladie maximálny dôraz na žiaducnosť (desirability) riešenia z pohľadu ľudskej bytosti. Je to vysoko iteratívny proces, ktorý slúži ako nástroj na generovanie inovačných hypotéz a odhaľovanie nečakaných riešení. Strieda divergentné (rozširovanie možností) a konvergentné (výber riešení) myslenie.',
    keyPrinciples: [
      'Empatia (pozorovanie bez predsudkov).',
      'Definovanie (syntéza vhľadov).',
      'Ideácia (brainstorming).',
      'Prototypovanie (rýchle a lacné modely).',
      'Testovanie (zber spätnej väzby).'
    ],
    whenToUse: 'Pri riešení "wicked problems", keď nie je jasné riešenie a je potrebné hlboké pochopenie používateľa.',
    metrics: ['Rýchlosť učenia', 'Miera zmeny insightov', 'Metriky použiteľnosti'],
    history: 'Korene v 60. rokoch (Herbert Simon), popularizované v 90. rokoch spoločnosťou IDEO a d.school na Stanforde (David Kelley, Tim Brown).',
    tools: ['Empathy Map', 'Customer Journey Map', 'Persona', 'Prototyping tools', 'Double Diamond'],
    examples: ['Airbnb (zmena stratégie)', 'Oral-B (detské kefky)', 'GE Healthcare (MRI pre deti)', 'Martin Tvarůžek (priemyselný dizajn pre Adast, Borcad)']
  },
  {
    id: 'lean-startup',
    title: 'Lean Startup',
    category: 'VALIDÁCIA',
    shortDescription: 'Metodológia zameraná na systematické znižovanie trhového rizika cez cyklus "Zostroj-Zmeraj-Uč sa".',
    fullDescription: 'Prísne kvantitatívne orientovaný prístup, ktorého cieľom je znižovanie rizika v podmienkach extrémnej neistoty. Ústredným prvkom je cyklická slučka učenia sa a koncept Minimálneho životaschopného produktu (MVP). Odmieta tradičné dlhodobé plánovanie v prospech experimentovania.',
    keyPrinciples: [
      'Cyklus Build-Measure-Learn.',
      'MVP (Minimum Viable Product).',
      'Validované učenie (Validated Learning).',
      'Pivot (zmena smerovania) alebo zotrvanie.',
      'Inovačné účtovníctvo.'
    ],
    whenToUse: 'Pre startupy a interné venture tímy pri vysokej neistote (nový produkt, nový trh).',
    metrics: ['Rýchlosť učenia (Learning velocity)', 'Cost per learning', 'Frekvencia pivotov'],
    history: 'Autor Eric Ries (2011), vychádza z Customer Development (Steve Blank) a Lean Manufacturing (Toyota).',
    tools: ['Split testing (A/B testy)', 'Cohorts analysis', 'Funnel analysis', 'Smoke tests'],
    examples: ['Dropbox (video MVP)', 'Zappos (fotenie topánok v obchode)', 'Groupon (WordPress blog)']
  },
  {
    id: 'design-sprint',
    title: 'Design Sprint',
    category: 'VALIDÁCIA',
    shortDescription: 'Päťdňový proces na riešenie kritických biznisových výziev cez dizajn, prototypovanie a testovanie.',
    fullDescription: 'Unikátna fúzia Design Thinking, behaviorálnej psychológie a Lean Startup do striktne časovo ohraničeného úseku. Umožňuje preskočiť mesiace vývoja a získať odpovede na strategické otázky priamo od zákazníkov. Pôvodný 5-dňový formát bol neskôr optimalizovaný na 4-dňový (Design Sprint 2.0).',
    keyPrinciples: [
      'Časová kompresia (5 dní alebo 4 dni).',
      'Mapovanie problému (Understand).',
      'Skicovanie riešení (Diverge).',
      'Rozhodovanie (Decider, Converge).',
      'Prototypovanie a testovanie s reálnymi užívateľmi.'
    ],
    whenToUse: 'Pri riešení kritických biznisových výziev, zaseknutých projektoch alebo pri potrebe rýchleho overenia konceptu.',
    metrics: ['Validácia hypotézy', 'Spokojnosť používateľov s prototypom', 'NPS prototypu'],
    history: 'Vyvinutý Jakeom Knappom v Google Ventures (GV) okolo roku 2010. Kniha "Sprint" vyšla v roku 2016.',
    tools: ['Crazy 8s', 'Storyboard', 'Lightning Demos', 'User Testing script'],
    examples: ['Slack', 'Uber', 'Blue Bottle Coffee', 'Lego']
  },
  {
    id: 'sit',
    title: 'Systematic Inventive Thinking (SIT)',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Inovačná metodológia učiaca, že najkreatívnejšie nápady sa nachádzajú "vo vnútri boxu".',
    fullDescription: 'SIT vychádza z TRIZ a zakladá sa na Princípe uzavretého sveta (Closed World Principle). Inovátori používajú výhradne prvky, ktoré sa už nachádzajú v produkte alebo jeho bezprostrednom okolí, čím prekonávajú kognitívnu fixáciu. Metóda je založená na aplikácii piatich myšlienkových vzorcov.',
    keyPrinciples: [
      'Princíp uzavretého sveta (Closed World).',
      'Odčítanie (Subtraction) - odstránenie kľúčovej časti.',
      'Násobenie (Multiplication) - pridanie kópie s inou funkciou.',
      'Rozdelenie (Division) - rozdelenie na časti.',
      'Zjednotenie úloh (Task Unification) - priradenie novej funkcie.',
      'Závislosť atribútov (Attribute Dependency) - zmena vlastností v závislosti od podmienok.'
    ],
    whenToUse: 'Keď je potrebné inovovať existujúci produkt s obmedzenými zdrojmi alebo prekonať fixáciu na zaužívané riešenia.',
    metrics: ['Počet vygenerovaných riešení', 'Čas implementácie', 'Úspora nákladov'],
    history: 'Vyvinutá v Izraeli v 90. rokoch (Genrich Altshuller -> Roni Horowitz). Zjednodušenie TRIZ.',
    tools: ['Function Follows Form', 'Virtual Product', 'Path of Most Resistance'],
    examples: ['Philips (DVD prehrávač)', 'Andersen Windows', 'Reklamné kampane']
  },
  {
    id: 'toc',
    title: 'Teória obmedzení (TOC)',
    category: 'PROCESY',
    shortDescription: 'Metóda zameraná na zlepšovanie výkonu systému cez identifikáciu a riadenie jeho najslabšieho miesta.',
    fullDescription: 'Základným axiómom je, že každý systém je limitovaný "úzkym hrdlom" (bottleneck). Zvyšovanie kapacity inde ako v úzkom hrdle nevedie k zlepšeniu celku. TOC využíva 5 krokov zamerania na optimalizáciu toku a nástroje logického myslenia na riešenie konfliktov.',
    keyPrinciples: [
      'Identifikácia obmedzenia (Identify).',
      'Vyťaženie obmedzenia (Exploit).',
      'Podriadenie všetkého obmedzeniu (Subordinate).',
      'Povznesenie obmedzenia (Elevate).',
      'Návrat na začiatok (Repeat).',
      'Drum-Buffer-Rope (riadenie výroby).'
    ],
    whenToUse: 'Pri problémoch s tokom, meškaním, zásobami alebo keď lokálne optimalizácie neprinášajú výsledky.',
    metrics: ['Throughput (Priepustnosť)', 'Inventory (Zásoby)', 'Operating Expense (Prevádzkové náklady)'],
    history: 'Predstavená Eliyahu M. Goldrattom v knihe "The Goal" (Cieľ) v roku 1984.',
    tools: ['Current Reality Tree', 'Evaporating Cloud', 'Future Reality Tree', 'Drum-Buffer-Rope'],
    examples: ['Boeing', 'Hitachi Tool Engineering', 'Delta Airlines']
  },
  {
    id: 'open-innovation',
    title: 'Open Innovation',
    category: 'STRATÉGIA',
    shortDescription: 'Využívanie externých aj interných tokov vedomostí na urýchlenie vnútornej inovácie.',
    fullDescription: 'Paradigma, ktorá predpokladá, že firmy môžu a mali by využívať externé nápady rovnako ako interné, a vnútorné nápady by mali ísť na trh aj inými cestami ako cez vlastnú distribúciu. Zahŕňa spoluprácu so startupmi, univerzitami, dodávateľmi a zákazníkmi.',
    keyPrinciples: [
      'Spolupráca s externými partnermi (Inbound/Outbound).',
      'Modely spoločného IP (Joint IP).',
      'Sandbox prostredia a inkubátory.',
      'Crowdsourcing a súťaže.',
      'Ekosystémový prístup.'
    ],
    whenToUse: 'Keď interné R&D kapacity nestačia, alebo pre vstup na nové trhy prostredníctvom partnerstiev.',
    metrics: ['Počet partnerstiev', 'Príjmy z licencií', 'Čas uvedenia na trh', '% inovácií z externých zdrojov'],
    history: 'Termín zaviedol Henry Chesbrough v roku 2003 (kniha "Open Innovation").',
    tools: ['Hackathony', 'Inovačné platformy (napr. InnoCentive)', 'Corporate Venture Capital'],
    examples: ['Procter & Gamble (Connect + Develop)', 'LEGO Ideas', 'NASA (Crowdsourcing)']
  },
  {
    id: 'circular-design',
    title: 'Cirkulárny dizajn',
    category: 'UDRŽATEĽNOSŤ',
    shortDescription: 'Dizajnovanie produktov a služieb pre cirkulárnu ekonomiku s cieľom eliminovať odpad a regenerovať prírodu.',
    fullDescription: 'Mení lineárny model (vyťažiť-vyrobiť-zahodiť) na cirkulárny. Zameriava sa na trvanlivosť, opraviteľnosť, recyklovateľnosť a odstránenie toxických materiálov už vo fáze návrhu. Vyžaduje systémové myslenie a spoluprácu v celom hodnotovom reťazci.',
    keyPrinciples: [
      'Eliminácia odpadu a znečistenia (Design out waste).',
      'Udržanie produktov a materiálov v obehu (Keep products in use).',
      'Regenerácia prírodných systémov.',
      'Modularita a opraviteľnosť.',
      'Biomimikry a Cradle to Cradle.'
    ],
    whenToUse: 'Pri snahe o udržateľnosť, zníženie environmentálnej stopy a súlad s novými reguláciami (EÚ).',
    metrics: ['Miera recyklovateľnosti', 'Uhlíková stopa', 'Životnosť produktu', 'Miera využitia druhotných surovín'],
    history: 'Popularizované nadáciou Ellen MacArthur Foundation, vychádza z konceptov ako Cradle to Cradle (McDonough & Braungart).',
    tools: ['Material Passport', 'Life Cycle Assessment (LCA)', 'Circular Design Guide'],
    examples: ['Fairphone (modulárny telefón)', 'IKEA (spätný odkup nábytku)', 'Philips (Light as a Service)']
  },
  {
    id: 'six-sigma',
    title: 'Six Sigma',
    category: 'PROCESY',
    shortDescription: 'Dátovo orientovaný prístup na znižovanie variability procesov a elimináciu defektov.',
    fullDescription: 'Inžinierska metodológia zameraná na radikálnu redukciu chýb. Využíva prístupy DMAIC (pre existujúce procesy) a DMADV (pre nové produkty). Cieľom je dosiahnuť úroveň kvality 3,4 chyby na milión príležitostí (6 smerodajných odchýlok od priemeru).',
    keyPrinciples: [
      'DMAIC (Define, Measure, Analyze, Improve, Control).',
      'DMADV (Define, Measure, Analyze, Design, Verify).',
      'Rozhodovanie na základe dát.',
      'Znižovanie variability.',
      'Zameranie na zákazníka (CTQ - Critical to Quality).'
    ],
    whenToUse: 'Pri potrebe zvýšiť kvalitu, znížiť chybovosť a stabilizovať procesy vo výrobe aj službách.',
    metrics: ['Počet defektov na milión (DPMO)', 'Sigma level', 'Náklady na nekvalitu (COPQ)', 'Process Capability (Cpk)'],
    history: 'Zavedená v Motorole v roku 1986 (Bill Smith), spopularizovaná Jackom Welchom v General Electric v 90. rokoch.',
    tools: ['Control Charts', 'Pareto Chart', 'Ishikawa (Fishbone) Diagram', '5 Whys', 'SIPOC'],
    examples: ['Motorola', 'General Electric', 'Honeywell']
  },
  {
    id: 'scamper',
    title: 'SCAMPER',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Kontrolný zoznam otázok na štruktúrovanú modifikáciu existujúcich riešení.',
    fullDescription: 'Technika kreatívneho myslenia, ktorá pomáha generovať nápady na vylepšenie produktu alebo služby pomocou siedmich typov otázok. Je to jednoduchý, ale efektívny nástroj na laterálne myslenie a prekonanie tvorivého bloku.',
    keyPrinciples: [
      'Substitute (Nahradiť) - materiály, ľudí, pravidlá.',
      'Combine (Kombinovať) - funkcie, služby.',
      'Adapt (Prispôsobiť) - inšpirácia z iného kontextu.',
      'Modify (Upraviť) - zmeniť tvar, veľkosť, vlastnosti.',
      'Put to another use (Využiť inak).',
      'Eliminate (Eliminovať) - odstrániť zbytočné.',
      'Reverse (Obrátiť) - zmeniť poradie, prevrátiť naruby.'
    ],
    whenToUse: 'Pri brainstormingu na rýchle generovanie vylepšení existujúcich produktov alebo pri zaseknutí v procese ideácie.',
    metrics: ['Počet vygenerovaných nápadov', 'Kvalita modifikácií'],
    history: 'Vyvinutá Bobom Eberlem v roku 1971, založená na brainstormingu Alexa Osborna.',
    tools: ['SCAMPER checklist', 'Ideation cards'],
    examples: ['McDonald\'s (kombinácia reštaurácie a výrobnej linky)', 'Cirque du Soleil (eliminácia zvierat, pridanie divadla)']
  },
  {
    id: 'delphi',
    title: 'Delphi metóda',
    category: 'STRATÉGIA',
    shortDescription: 'Štruktúrovaná komunikácia pre získanie expertného konsenzu a predpovedanie budúcnosti.',
    fullDescription: 'Metóda založená na opakovaných kolách dotazníkov pre panel expertov. Odpovede sú anonymné a v každom kole sa poskytuje spätná väzba (štatistický súhrn), čo vedie ku konvergencii názorov a presnejšiemu odhadu budúcnosti.',
    keyPrinciples: [
      'Anonymita expertov (eliminuje vplyv autorít).',
      'Iterácia (viac kôl dotazníkov).',
      'Riadená spätná väzba (feedback loop).',
      'Štatistická agregácia odpovedí.'
    ],
    whenToUse: 'Pri predpovedaní trendov, technologickom forecastingu a v situáciách s nedostatkom historických dát.',
    metrics: ['Miera konsenzu', 'Stabilita odpovedí', 'Presnosť predikcie (ex-post)'],
    history: 'Vyvinutá v RAND Corporation v 50. rokoch (Olaf Helmer, Norman Dalkey) pre vojenské predpovede.',
    tools: ['Dotazníky', 'Online Delphi platformy', 'ExpertLens'],
    examples: ['Technologický forecasting', 'Tvorba verejných politík', 'Medicínske konsenzuálne guidelines']
  },
  {
    id: 'morphological-analysis',
    title: 'Morfologická analýza',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Metóda na skúmanie všetkých možných riešení komplexného problému rozkladom na dimenzie.',
    fullDescription: 'Rozkladá problém na nezávislé parametre (dimenzie) a pre každý parameter definuje možné hodnoty. Kombináciou týchto hodnôt vzniká "morfologická skrinka" (Zwicky Box) s množstvom potenciálnych riešení, vrátane tých, ktoré by intuitívne nenapadli.',
    keyPrinciples: [
      'Dekompozícia problému na parametre.',
      'Identifikácia možných hodnôt pre každý parameter.',
      'Generovanie variácií (kombinatorika).',
      'Skúmanie konzistencie kombinácií (Cross-Consistency Assessment).',
      'Výber realizovateľných riešení.'
    ],
    whenToUse: 'Pri riešení komplexných, "wicked" problémov, hľadaní nových konfigurácií produktov a scenárovom plánovaní.',
    metrics: ['Počet konzistentných konfigurácií', 'Pokrytie dimenzií', 'Novosť kombinácií'],
    history: 'Vyvinutá astrofyzikom Fritzom Zwickym v 30. a 40. rokoch 20. storočia (použitá pri vývoji prúdových motorov).',
    tools: ['Zwicky Box', 'Morfologická matica', 'Softvér na MA (napr. Ritchey)'],
    examples: ['Vývoj nových typov pohonu', 'Dizajn služieb', 'Tvorba scenárov budúcnosti']
  },
  {
    id: 'qfd',
    title: 'Quality Function Deployment (QFD)',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Metodika prekladu "hlasu zákazníka" do technických požiadaviek (Dom kvality).',
    fullDescription: 'Zabezpečuje, že požiadavky zákazníka (Voice of Customer) sú zohľadnené v každej fáze vývoja produktu, od dizajnu až po výrobu. Hlavným nástrojom je matica "Dom kvality" (House of Quality), ktorá prepája zákaznícke potreby s technickými parametrami.',
    keyPrinciples: [
      'Hlas zákazníka (VOC - What).',
      'Technické deskriptory (How).',
      'Matica vzťahov (Relationship Matrix).',
      'Analýza konkurencie.',
      'Korelačná matica (strecha domu - konflikty parametrov).'
    ],
    whenToUse: 'Pri vývoji produktov na zabezpečenie súladu technických parametrov s potrebami trhu a pri prioritizácii funkcií.',
    metrics: ['Pokrytie VOC', 'Redukcia zmien v neskorých fázach', 'Spokojnosť zákazníka'],
    history: 'Vyvinutá v Japonsku v roku 1966 (Yoji Akao). Prvýkrát použitá v Mitsubishi Heavy Industries (lodenice).',
    tools: ['House of Quality', 'Voice of Customer (VOC) analysis', 'Seven Management and Planning Tools'],
    examples: ['Toyota (výrazné zníženie nákladov na štart výroby)', 'Ford', 'HP']
  },
  {
    id: 'kano',
    title: 'Kano model',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Model klasifikácie zákazníckych preferencií a ich vplyvu na spokojnosť.',
    fullDescription: 'Triedi vlastnosti produktu do kategórií podľa toho, ako ovplyvňujú spokojnosť zákazníka. Pomáha rozlíšiť, čo je nevyhnutné, čo zvyšuje výkon a čo zákazníka nadchne. Atribúty sa v čase menia (nadšenie sa stáva štandardom).',
    keyPrinciples: [
      'Must-be (Povinné) - ich absencia spôsobuje nespokojnosť, prítomnosť je neutrálna.',
      'One-dimensional (Výkonnostné) - lineárna závislosť (viac je lepšie).',
      'Attractive (Delighters) - nečakané potešenie, absencia nevadí.',
      'Indifferent (Ľahostajné) - nemajú vplyv.',
      'Reverse (Opačné) - prítomnosť vadí.'
    ],
    whenToUse: 'Pri prioritizácii funkcií produktu v roadmapách a rozhodovaní o investíciách do vylepšení.',
    metrics: ['Koeficienty spokojnosti/nespokojnosti', 'Kategorizácia vlastností'],
    history: 'Vyvinutý Noriaki Kanom v 80. rokoch.',
    tools: ['Kano dotazník (funkčná/dysfunkčná otázka)', 'Kano evaluačná tabuľka'],
    examples: ['Wi-Fi v hoteli (kedysi Attractive, dnes Must-be)', 'Dotykový displej v aute']
  },
  {
    id: 'synektika',
    title: 'Synektika',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Kreatívna technika využívajúca analógie a metafory na riešenie problémov.',
    fullDescription: 'Pracuje s iracionálnym a emocionálnym myslením na prekonanie mentálnych blokov. Využíva analógie (priame, osobné, symbolické, fantastické) na "urobenie známeho cudzím a cudzieho známym". Cieľom je získať radikálne nové pohľady.',
    keyPrinciples: [
      'Urobiť známe cudzím (odstup od problému).',
      'Urobiť cudzie známym (pochopenie nového).',
      'Využitie metafor a analógií.',
      'Hravosť a iracionalita.',
      'Force Fit (násilné spojenie).'
    ],
    whenToUse: 'Pri potrebe radikálne nových konceptov, prekonaní "mentálnych rutín" a v skupinovom riešení problémov.',
    metrics: ['Počet a kvalita analógií', 'Novosť konceptov'],
    history: 'Vyvinutá Williamom J. J. Gordonom a Georgeom Princeom v 50. rokoch (Arthur D. Little).',
    tools: ['Priama analógia', 'Osobná analógia', 'Symbolická analógia', 'Fantastická analógia'],
    examples: ['Pringles (inšpirácia suchým lístím pre stohovanie)', 'Kozmetický priemysel']
  },
  {
    id: 'bionika',
    title: 'Bionika (Biomimikry)',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Inovácia inšpirovaná prírodou - prenos biologických princípov do techniky.',
    fullDescription: 'Skúma prírodné modely, systémy a procesy a napodobňuje ich pri riešení ľudských problémov. Príroda funguje ako model (inšpirácia formou), miera (udržateľnosť) a mentor (učenie sa).',
    keyPrinciples: [
      'Príroda ako model (formy, procesy, systémy).',
      'Príroda ako miera (ekologický štandard).',
      'Príroda ako mentor (zdroj vedomostí).',
      'Adaptácia formy a funkcie.',
      'Evolučné overenie (čo funguje, prežije).'
    ],
    whenToUse: 'Pri hľadaní efektívnych, udržateľných a overených riešení technických a dizajnových problémov (aerodynamika, materiály).',
    metrics: ['Zlepšenie fyzikálnych veličín (odpor, spotreba)', 'Environmentálny dopad'],
    history: 'Termín "bionika" zaviedol Jack Steele (1958), "biomimikry" popularizovala Janine Benyus (1997).',
    tools: ['AskNature databáza', 'Life\'s Principles', 'Biomimicry Design Spiral'],
    examples: ['Vlak Šinkansen (zobák rybárika riečneho)', 'Suchý zips (rastlina lopúch)', 'Povrch inšpirovaný žraločou kožou', 'Samočistiace povrchy (efekt lotosového kvetu)']
  },
  {
    id: 'wois',
    title: 'WOIS',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Stratégia inovácií orientovaná na protirečenia (Contradiction Oriented Innovation Strategy).',
    fullDescription: 'Filozofia, ktorá využíva skryté vzorce evolúcie na anticipáciu budúcich generácií produktov. Cielene vyhľadáva prekážky a polarizuje ich do dilem/protirečení, ktorých vyriešenie prináša inovačný skok. Transformuje kultúru z "áno, ale" na "áno, a". Metodika pracuje s modelom špirály rozvoja a riešením technických a fyzikálnych protirečení.',
    keyPrinciples: [
      'Hľadanie a riešenie protirečení (napr. pevnosť vs. hmotnosť).',
      'Zákony evolúcie systémov.',
      'Inovačné skratky (Innovative Shortcuts).',
      'Od "áno, ale" k "áno, a".',
      'Špirála evolúcie.'
    ],
    whenToUse: 'Pri strategických inováciách, prekonávaní technologických limitov a hľadaní konkurenčnej výhody.',
    metrics: ['Počet vyriešených protirečení', 'Ekonomika riešení', 'Strategický náskok'],
    history: 'Vyvinutá v Nemecku (Linde, Hill), vychádza z TRIZ a systémovej teórie. Aplikovaná Jánom Košturiakom v IPA Slovakia.',
    tools: ['Evolučné mapy', 'Matica protirečení', 'Analýza trendov'],
    examples: ['BMW (ojnice motoru - lomený spoj)', 'Hilti (nástroj na demolici betonu - samoostření)', 'Brose (strategické inovace)', 'Siemens']
  },
  {
    id: 'innovation-accounting',
    title: 'Innovation Accounting',
    category: 'VALIDÁCIA',
    shortDescription: 'Sústava metrík pre meranie vývoja a trhového potenciálu v podmienkach neistoty.',
    fullDescription: 'Koncept odvodený z Lean Startup, ktorý prináša manažmentu sústavu metrík ušitých na mieru pre meranie vývoja, skutočnej adaptácie zákazníkom a overovania trhového potenciálu bez ilúzií okamžitého zisku. Nahrádza tradičné ROI/NPV v prostredí vysokej neistoty.',
    keyPrinciples: [
      'Cost per learning (Náklad na zistenie).',
      'Learning velocity (Rýchlosť učenia sa).',
      'Number of pivots (Frekvencia pivotov).',
      'Cohort performance (Výkonnosť inovačnej kohorty).',
      'Actionable metrics vs. Vanity metrics.'
    ],
    whenToUse: 'Pre startupy a inovačné projekty, kde tradičné finančné metriky zlyhávajú a je potrebné merať progres v učení.',
    metrics: ['Cost per learning', 'Learning velocity', 'Cohort performance'],
    history: 'Súčasť metodiky Lean Startup (Eric Ries, 2011).',
    tools: ['Innovation Dashboard', 'Cohort Analysis', 'Split Testing'],
    examples: ['Dropbox', 'Intuit', 'General Electric (FastWorks)']
  },
  {
    id: 'speculative-design',
    title: 'Speculative Design (Future Thinking)',
    category: 'STRATÉGIA',
    shortDescription: 'Dizajn zameraný na skúmanie budúcich scenárov a implikácií technológií, nie na okamžitú komerciu.',
    fullDescription: 'Disciplína, ktorá operuje v abstraktnej rovine odhadovania a formovania vzdialenej budúcnosti. Jej cieľom nie je produkcia komerčného výrobku, ale provokácia a stimulácia diskusie o sociálnych, etických a geopolitických implikáciách technológií. Vytvára "artefakty budúcnosti".',
    keyPrinciples: [
      'Cone of Possibilities (Kužeľ možností - pravdepodobné, možné, preferované).',
      'Provokácia a diskusia.',
      'Suspendovanie neviery.',
      'Skúmanie "čo ak" scenárov.',
      'Kritický dizajn.'
    ],
    whenToUse: 'Na identifikáciu dlhodobých hrozieb, modelovanie rizík a definovanie stratégií prežitia v časoch exponenciálnej zmeny.',
    metrics: ['Identifikácia rizík', 'Strategický dopad', 'Kvalita diskusie'],
    history: 'Popularizované Anthonym Dunneom a Fionou Raby (RCA, kniha "Speculative Everything").',
    tools: ['Future Wheel', 'Diegetic Prototypes', 'Scenario Building'],
    examples: ['Superflux', 'Near Future Laboratory', 'Projekty o etike AI']
  },
  {
    id: 'effectuation',
    title: 'Effectuation Theory',
    category: 'STRATÉGIA',
    shortDescription: 'Logika kontroly neistoty zvnútra, ktorá začína s dostupnými prostriedkami namiesto fixných cieľov.',
    fullDescription: 'Teória efektivácie je postavená na logike kontroly neistoty zvnútra. Podnikateľ začína proces bez presného finálneho cieľa, berie svoj aktuálny súbor prostriedkov ako východiskový bod a skúma, aké efekty môže z tohto základu vybudovať. Je opakom kauzálneho (prediktívneho) plánovania.',
    keyPrinciples: [
      'Bird in hand (Začni s tým, čo máš - kto som, čo viem, koho poznám).',
      'Affordable loss (Prijateľná strata - neriskuj viac, ako si môžeš dovoliť).',
      'Crazy Quilt (Spolutvorba partnerstiev).',
      'Lemonade (Využi prekvapenia a náhody).',
      'Pilot in the plane (Kontrola vs. predikcia).'
    ],
    whenToUse: 'Pre podnikateľov v ranom štádiu a v prostredí vysokej neistoty, kde nie je možné predikovať budúcnosť.',
    metrics: ['Miera využitia zdrojov', 'Počet partnerstiev', 'Flexibilita'],
    history: 'Sformulovala Saras Sarasvathy v roku 2001 na základe štúdia expertov podnikateľov.',
    tools: ['Effectuation Map', 'Means Inventory', 'Partnership Canvas'],
    examples: ['Airbnb (začali s nafukovacím matracom)', 'U-Haul']
  },
  {
    id: 'ambidexterity',
    title: 'Organizačná ambidextria',
    category: 'STRATÉGIA',
    shortDescription: 'Schopnosť podniku súbežne excelovať v exploitácii (ťažba z existujúceho) a explorácii (hľadanie nového).',
    fullDescription: 'Koncept definujúci kritickú schopnosť podniku súbežne a s rovnocennou efektivitou excelovať v dvoch protichodných dimenziách: Exploitácia (optimalizácia core biznisu, efektivita) a Explorácia (riskantné skúmanie nových možností, inovácia).',
    keyPrinciples: [
      'Exploitácia (vyťažovanie existujúceho, inkrementálne inovácie).',
      'Explorácia (hľadanie nového, radikálne inovácie).',
      'Štrukturálna ambidextria (oddelené jednotky).',
      'Kontextuálna ambidextria (jednotlivci prepínajú role).',
      'Rovnováha a napätie.'
    ],
    whenToUse: 'Pre udržanie dlhodobej konkurencieschopnosti a prežitie organizácie v meniacom sa prostredí (Innovator\'s Dilemma).',
    metrics: ['Pomer príjmov z nových vs. starých produktov', 'Alokácia zdrojov'],
    history: 'Pojem zaviedol Robert Duncan (1976), popularizovali Tushman a O\'Reilly (1996).',
    tools: ['Three Horizons Model', 'Portfolio Management', 'Dual Operating System'],
    examples: ['Amazon (Retail vs. AWS)', 'Google (Search vs. X)', 'Apple']
  },
  {
    id: 'stage-gate',
    title: 'Stage-Gate',
    category: 'STRATÉGIA',
    shortDescription: 'Lineárny model riadenia inovácií rozdelený do fáz (Stage) a rozhodovacích brán (Gate).',
    fullDescription: 'Vysoko štruktúrovaný prístup riadenia inovácií, ktorý rozdeľuje cyklus do logických sekvenčných fáz (napr. Idea, Vývoj, Testovanie). Medzi fázami stoja prísne rozhodovacie brány, kde manažment rozhoduje o pokračovaní (Go/Kill/Hold/Recycle) na základe kritérií.',
    keyPrinciples: [
      'Fázy (Stages) - vykonávanie práce.',
      'Brány (Gates) - rozhodovacie body.',
      'Prísna dokumentácia a kritériá (Deliverables).',
      'Go/Kill/Hold/Recycle rozhodnutia.',
      'Riadenie rizika.'
    ],
    whenToUse: 'Pre veľké projekty s vysokým rizikom (farmácia, strojárstvo, chémia), kde je cena za chybu extrémna a vyžaduje sa certifikácia.',
    metrics: ['Time to market', 'Úspešnosť na bránach', 'ROI portfólia'],
    history: 'Vyvinutý Robertom G. Cooperom v 80. rokoch.',
    tools: ['Scorecards', 'Business Case šablóny', 'Risk Assessment Matrix'],
    examples: ['3M', 'ExxonMobil', 'Farmaceutické firmy (vývoj liekov)']
  },
  {
    id: 'fmea',
    title: 'FMEA (Failure Mode and Effects Analysis)',
    category: 'PROCESY',
    shortDescription: 'Analytická metóda na identifikáciu a elimináciu možných porúch a ich dôsledkov.',
    fullDescription: 'Disciplinovaná analytická štruktúra na minimalizáciu škôd a proaktívne vyhodnotenie rizík. Zhromažďuje inžinierov s otázkou: "Ako môže tento systém zlyhať a aké to bude mať dôsledky?". Vypočítava rizikové číslo (RPN) na prioritizáciu opatrení.',
    keyPrinciples: [
      'Identifikácia spôsobov zlyhania (Failure Modes).',
      'Hodnotenie Závažnosti (Severity - S).',
      'Hodnotenie Výskytu (Occurrence - O).',
      'Hodnotenie Zistiteľnosti (Detection - D).',
      'RPN (Risk Priority Number) = S * O * D.'
    ],
    whenToUse: 'V inžinierstve, výrobe a procesnom riadení na prevenciu chýb v skorých fázach návrhu (DFMEA) alebo procesu (PFMEA).',
    metrics: ['RPN skóre', 'Počet mitigovaných rizík', 'Redukcia potenciálnych nákladov na opravy'],
    history: 'Vyvinutá americkou armádou v 40. rokoch, adoptovaná NASA (Apollo) a automobilovým priemyslom (Ford).',
    tools: ['FMEA Worksheet', 'Risk Matrix', 'Fault Tree Analysis'],
    examples: ['Automobilový priemysel (brzdy, airbagy)', 'Letecký priemysel', 'Polovodiče']
  },
  {
    id: 'value-analysis',
    title: 'Hodnotová analýza (Value Analysis)',
    category: 'PROCESY',
    shortDescription: 'Metóda na zníženie nákladov pri zachovaní kvality a funkčnosti.',
    fullDescription: 'Prístup eliminácie obstarávacích výdavkov, no nie na úkor kvality. Inžinierska analytika dekomponuje inováciu na elementárne komponenty a skúma pomer ich ceny k funkčnej hodnote pre zákazníka. Simon Dewulf (Creax) definuje hodnotu vzorcom: Hodnota = Užitečná funkce – (Škodlivá funkce + Rozhraní + Náklady). Cieľom je maximalizovať hodnotu.',
    keyPrinciples: [
      'Analýza funkcií (čo to robí, nie čo to je).',
      'Pomer cena/výkon (Value = Function / Cost).',
      'Eliminácia zbytočností (plytvania).',
      'Zachovanie trhového úžitku a kvality.',
      'Kreatívne hľadanie alternatív.'
    ],
    whenToUse: 'Pri optimalizácii nákladov produktu, odstraňovaní irelevantných funkcií a zvyšovaní marže.',
    metrics: ['Úspora nákladov', 'Zachovanie kvality', 'Zvýšenie hodnoty'],
    history: 'Vyvinutá v General Electric počas 2. svetovej vojny (Lawrence Miles) kvôli nedostatku materiálov. Využívaná Toyotou.',
    tools: ['FAST diagram (Function Analysis System Technique)', 'Cost-Function Matrix', 'DFMA (Design for Manufacturing and Assembly)'],
    examples: ['General Electric', 'Adast System (stojany - Martin Tvarůžek)', 'Automotive (zjednodušovanie dielov)']
  },
  {
    id: 'scenario-planning',
    title: 'Scenárové plánovanie',
    category: 'STRATÉGIA',
    shortDescription: 'Tvorba alternatívnych scenárov budúcnosti na testovanie odolnosti stratégie.',
    fullDescription: 'Disciplína, ktorá nerieši priame prognózovanie (jeden výsledok), ale kreovanie rôznych variantných naratívov budúcnosti (pesimistické, optimistické, divoké karty). Pomáha organizáciám pripraviť sa na "včasné varovné signály" a modifikovať zdroje.',
    keyPrinciples: [
      'PESTLE analýza faktorov.',
      'Identifikácia hybných síl a neistôt.',
      'Najkritickejšie neistoty (osi scenárov).',
      'Tvorba alternatívnych svetov (naratívy).',
      'Testovanie stratégie voči scenárom.'
    ],
    whenToUse: 'Pri dlhodobom strategickom plánovaní v nestabilnom prostredí na testovanie robustnosti stratégie a identifikáciu "Black Swans".',
    metrics: ['Rýchlosť reakcie na zmenu', 'Identifikácia varovných signálov', 'Robustnosť stratégie'],
    history: 'Pionierom bol Herman Kahn (RAND), v biznise spopularizované Shellom (Pierre Wack) v 70. rokoch.',
    tools: ['Scenario Matrix (2x2)', 'Future Wheel', 'Cone of Plausibility'],
    examples: ['Royal Dutch Shell (ropná kríza)', 'Vojenské stratégie', 'Klimatické modely']
  },
  {
    id: 'bmc-vpc',
    title: 'Business Model & Value Proposition Canvas',
    category: 'ZÁKAZNÍK a HODNOTA',
    shortDescription: 'Vizuálne nástroje na popísanie, analýzu a navrhovanie obchodných modelov a hodnotových ponúk.',
    fullDescription: 'BMC revolučne zmenil pohľad na organizácie cez 9 stavebných blokov na jednej strane. VPC sa zameriava na detailný súlad medzi profilom zákazníka (úlohy, bolesti, prínosy) a hodnotovou ponukou firmy. Poskytujú spoločný jazyk pre inováciu biznis modelu. Ján Košturiak zdôrazňuje potrebu inovovať celý podnikateľský systém, nielen produkt.',
    keyPrinciples: [
      '9 blokov BMC (Zákazníci, Hodnota, Kanály, Vzťahy, Príjmy, Zdroje, Aktivity, Partneri, Náklady).',
      'VPC: Customer Profile (Jobs, Pains, Gains).',
      'VPC: Value Map (Products, Pain Relievers, Gain Creators).',
      'Fit (Súlad medzi trhom a produktom).',
      'Inovácia celého systému (od zákazníka po zdroje).'
    ],
    whenToUse: 'Pri tvorbe nového biznisu, reštrukturalizácii existujúceho, hľadaní Product-Market Fit a pivotovaní.',
    metrics: ['Ziskovosť modelu', 'Validácia hodnotovej ponuky', 'Škálovateľnosť'],
    history: 'Vytvoril Alexander Osterwalder (2005/2010) v knihe "Business Model Generation".',
    tools: ['Business Model Canvas', 'Value Proposition Canvas', 'Testing Cards'],
    examples: ['Nespresso (zmena modelu)', 'Hilti (od predaja k prenájmu)', 'Skype']
  },
  {
    id: 'ai-innovation',
    title: 'AI-Powered Innovation',
    category: 'AI',
    shortDescription: 'Využitie umelej inteligencie (Generatívna AI, Digital Twins) na akceleráciu inovácií.',
    fullDescription: 'Moderné rámce využívajúce AI ako motor pre inovácie. Zahŕňa generatívnu AI na modelovanie zákazníkov a ideáciu, digitálne dvojčatá na simulácie a MLOps pre správu životného cyklu AI produktov. Umožňuje radikálne zrýchlenie validačných cyklov.',
    keyPrinciples: [
      'Generatívna AI pre ideáciu a testovanie.',
      'Syntetickí zákazníci (Synthetic personas).',
      'Digitálne dvojčatá (Digital Twins).',
      'MLOps a prediktívna údržba.',
      'Automatizácia kognitívnych úloh.'
    ],
    whenToUse: 'Na radikálne zrýchlenie vývoja, testovanie hypotéz v reálnom čase, personalizáciu a optimalizáciu komplexných systémov.',
    metrics: ['Rýchlosť validačných slučiek', 'Presnosť predikcií', 'Miera automatizácie'],
    history: 'Súčasný trend (2020+), akcelerovaný nástupom LLM (GPT) a pokročilých simulácií.',
    tools: ['ChatGPT/Gemini (ideácia)', 'Simulačný softvér (Siemens, NVIDIA Omniverse)', 'AutoML'],
    examples: ['Generatívny dizajn (Autodesk)', 'Prediktívna údržba (priemysel 4.0)', 'Personalizovaná medicína']
  },
  {
    id: 'tri-z',
    title: 'TRIZ',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Teória riešenia vynálezcovských úloh založená na logike, dátach a odstraňovaní protirečení.',
    fullDescription: 'Ruská metodika založená na analýze tisícov patentov. Tvrdí, že inovácie sa riadia určitými zákonitosťami a vzormi. Hlavným cieľom je nájsť ideálne konečné riešenie (IFR) a odstrániť technické alebo fyzikálne protirečenia bez kompromisov.',
    keyPrinciples: [
      'Ideálny konečný výsledok (IFR).',
      '40 inovačných princípov.',
      'Matica protirečení (Contradiction Matrix).',
      'Zákony evolúcie technických systémov.',
      '9 okien (System Operator).'
    ],
    whenToUse: 'Pri riešení ťažkých technických problémov, kde existuje konflikt parametrov (napr. pevnosť vs. váha).',
    metrics: ['Počet patentov', 'Vyriešenie neriešiteľného problému'],
    history: 'Vyvinutá Genrichom Altshullerom v ZSSR (1946).',
    tools: ['Contradiction Matrix', 'ARIZ', 'Function Analysis'],
    examples: ['Samsung (veľa patentov vďaka TRIZ)', 'Intel', 'Procter & Gamble']
  },
  {
    id: 'brainstorming',
    title: 'Brainstorming',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Skupinové generovanie nápadov bez hodnotenia s dôrazom na kvantitu.',
    fullDescription: 'Klasická technika pre generovanie veľkého množstva nápadov v skupine. Ján Košturiak však odporúča posun od Brainstormingu k "Trystormingu" - rýchlemu vytvoreniu modelu a jeho testovaniu. Nejde len o generovanie myšlienok, ale o ich verifikáciu v praxi (pokus-omyl, akcia).',
    keyPrinciples: [
      'Žiadna kritika (odloženie hodnotenia).',
      'Dôraz na kvantitu (kvantita plodí kvalitu).',
      'Divoké nápady sú vítané.',
      'Kombinovanie a zlepšovanie nápadov ostatných.',
      'Trystorming: Orientácia na akciu a skúšanie.'
    ],
    whenToUse: 'V počiatočnej fáze ideácie, v marketingu a pri vývoji produktov na rýchle získanie širokého spektra nápadov.',
    metrics: ['Počet vygenerovaných nápadov', 'Počet unikátnych kategórií nápadov'],
    history: 'Popularizoval Alex Osborn v roku 1953 v knihe "Applied Imagination".',
    tools: ['Flipchart', 'Post-it lístky', 'Časovač'],
    examples: ['IDEO (pravidelné brainstormingy)', 'Reklamné agentúry']
  },
  {
    id: 'brainwriting',
    title: 'Brainwriting (6-3-5)',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Paralelné písomné generovanie nápadov (6 ľudí, 3 nápady, 5 minút).',
    fullDescription: 'Tichá verzia brainstormingu, ktorá eliminuje sociálne bloky a dominanciu extrovertov. Účastníci si v tichosti zapisujú nápady a posúvajú papiere ďalej, kde ich rozvíjajú ďalší členovia tímu. Umožňuje vygenerovať až 108 nápadov za 30 minút.',
    keyPrinciples: [
      '6 účastníkov.',
      '3 nápady na kolo.',
      '5 minút na kolo.',
      'Rozvíjanie cudzích nápadov (nie len pridávanie nových).',
      'Eliminácia sociálneho tlaku a dominancie.'
    ],
    whenToUse: 'Keď je v tíme nerovnováha (dominancia silných osobností), alebo treba rýchlo a efektívne vygenerovať veľké množstvo nápadov.',
    metrics: ['Počet nápadov (až 108)', 'Miera participácie všetkých členov'],
    history: 'Vyvinutá Berndom Rohrbachom v roku 1968 (metóda 635).',
    tools: ['Formuláre 6-3-5', 'Perá', 'Časovač'],
    examples: ['Workshopy dizajnu služieb', 'Nemecké inžinierske tímy']
  },
  {
    id: 'mind-mapping',
    title: 'Mind Mapping (Myšlienkové mapy)',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Vizuálne vetvenie myšlienok okolo centrálnej témy na identifikáciu súvislostí.',
    fullDescription: 'Grafická technika na znázornenie myšlienok a konceptov. Pomáha štruktúrovať komplexitu, podporuje pamäť a kreatívne asociácie tým, že využíva radiálne myslenie namiesto lineárneho zoznamu.',
    keyPrinciples: [
      'Centrálna téma v strede.',
      'Hierarchické vetvenie (hlavné a vedľajšie vetvy).',
      'Kľúčové slová (jedno slovo na vetvu).',
      'Vizuálne prvky (farby, obrázky, symboly).',
      'Asociatívne prepájanie.'
    ],
    whenToUse: 'Pri štruktúrovaní komplexných problémov, plánovaní projektov, učení sa a hľadaní súvislostí.',
    metrics: ['Hĺbka a šírka mapy', 'Počet identifikovaných súvislostí'],
    history: 'Popularizoval Tony Buzan v 70. rokoch, hoci koncepty existovali už skôr.',
    tools: ['Papier a farbičky', 'Softvér (XMind, Miro, MindMeister)'],
    examples: ['Plánovanie knihy', 'Organizácia konferencie', 'Riešenie komplexného problému']
  },
  {
    id: 'lateral-thinking',
    title: 'Laterálne myslenie',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Narušovanie zaužívaných vzorcov myslenia pomocou provokácií a náhodných vstupov.',
    fullDescription: 'Metóda na riešenie problémov nepriamym a kreatívnym prístupom. Cielene búra logické (vertikálne) sekvencie a hľadá alternatívne cesty pomocou techník ako provokácia, náhodný vstup alebo spochybňovanie predpokladov.',
    keyPrinciples: [
      'Provokácie (PO - Provocative Operation).',
      'Náhodné vstupy (Random Entry).',
      'Spochybňovanie dominantných predpokladov.',
      'Hľadanie alternatív.',
      'Konceptuálne vejáre.'
    ],
    whenToUse: 'Pri generovaní reframov problému, keď logické myslenie neprináša nové riešenia a točí sa v kruhu.',
    metrics: ['Počet alternatívnych pohľadov', 'Originalita riešenia'],
    history: 'Termín zaviedol Edward de Bono v roku 1967.',
    tools: ['Náhodné slovo', 'Metóda "Čo ak"', 'Reversal (Obrátenie)'],
    examples: ['Marketingové kampane', 'Vynález nových kategórií produktov']
  },
  {
    id: 'six-thinking-hats',
    title: 'Six Thinking Hats (6 klobúkov)',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Metóda paralelného myslenia využívajúca 6 rôznych režimov na urýchlenie rozhodovania.',
    fullDescription: 'Technika, ktorá vedie skupinu k tomu, aby v danom momente myslela rovnakým spôsobom (napr. všetci hľadajú riziká). Eliminuje ego a konfrontáciu, a umožňuje preskúmať problém z rôznych perspektív (fakty, emócie, riziká, prínosy, kreativita, riadenie).',
    keyPrinciples: [
      'Biely klobúk (Fakty a dáta).',
      'Červený klobúk (Emócie a pocity).',
      'Čierny klobúk (Riziká a opatrnosť).',
      'Žltý klobúk (Prínosy a optimizmus).',
      'Zelený klobúk (Kreativita a nápady).',
      'Modrý klobúk (Riadenie procesu a organizácia).'
    ],
    whenToUse: 'Pri rozhodovaní, vedení efektívnych porád, hodnotení nápadov a riešení konfliktov v tíme.',
    metrics: ['Rýchlosť dosiahnutia konsenzu', 'Kvalita rozhodnutia', 'Skrátenie času porád'],
    history: 'Vyvinutá Edwardom de Bonom v roku 1985.',
    tools: ['Fyzické alebo virtuálne klobúky', 'Facilitačné karty'],
    examples: ['IBM (skrátenie porád)', 'ABB', 'Siemens']
  },
  {
    id: 'creax',
    title: 'Creax',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Softvérová a databázová implementácia metodiky TRIZ pre systematické inovácie.',
    fullDescription: 'Moderná aplikácia princípov TRIZ podporená softvérom a rozsiahlymi databázami. Umožňuje systematické vyhľadávanie riešení naprieč disciplínami využitím vedecko-technických poznatkov a analýzy patentov. Simon Dewulf z Creaxu definuje inováciu vzorcom hodnoty (Užitečná funkcia - Škodlivá funkcia).',
    keyPrinciples: [
      'Funkčná analýza problému.',
      'Databázové vyhľadávanie riešení (Cross-industry innovation).',
      'Transfer technológií.',
      'Analýza patentov a trendov.',
      'Vedecké efekty pre riešenie funkcií.',
      'Hodnota = Užitečná funkcia - (Škodlivá funkcia + Náklady).'
    ],
    whenToUse: 'Pri hľadaní technických riešení, ktoré už pravdepodobne existujú v iných odvetviach, a pri potrebe systematickej inovácie.',
    metrics: ['Počet identifikovaných riešení z iných odvetví', 'Rýchlosť nájdenia riešenia'],
    history: 'Spoločnosť Creax vznikla v roku 2000 v Belgicku ako spin-off zameraný na TRIZ.',
    tools: ['Creax Innovation Suite', 'Function Database', 'Patent Analysis Tools'],
    examples: ['Vývoj nových materiálov', 'Automobilový priemysel', 'Spotrebná elektronika']
  },
  {
    id: 'systematic-innovation',
    title: 'Systematické inovácie',
    category: 'PRODUKT / NÁPADY',
    shortDescription: 'Práca s obmedzeniami ako katalyzátorom riešení pomocou štruktúrovaných nástrojov.',
    fullDescription: 'Prístup, ktorý vníma inováciu nie ako náhodný záblesk geniality, ale ako opakovateľný a riaditeľný proces. Využíva obmedzenia systému a štruktúrované myšlienkové nástroje na generovanie kreatívnych a realizovateľných riešení. Využíva model ZIPF (Zákazník, Inovace, Procesy, Finance) na prepojenie inovácií s ekonomikou firmy.',
    keyPrinciples: [
      'Inovácia je proces, nie náhoda.',
      'Obmedzenia sú zdrojom kreativity (nie prekážkou).',
      'Štruktúrované myšlienkové nástroje.',
      'Hľadanie ideálneho riešenia v rámci mantinelov.',
      'Odstránenie fixácie na zaužívané riešenia.',
      'Model ZIPF (integrácia zákazníka, inovácií, procesov a financií).'
    ],
    whenToUse: 'Keď je potrebný spoľahlivý a opakovateľný výsledok inovácie, najmä v korporátnom prostredí.',
    metrics: ['Počet realizovateľných inovácií', 'ROI inovačného procesu'],
    history: 'Vychádza z prác Altshullera (TRIZ) a neskorších rozpracovaní (SIT, USIT).',
    tools: ['Thinking Tools', 'Function Modeling', 'Problem Definition'],
    examples: ['Vývoj produktov v Samsungu', 'Procesné zlepšenia']
  },
  {
    id: 'design-sprint-2',
    title: 'Design Sprint 2.0',
    category: 'VALIDÁCIA',
    shortDescription: 'Optimalizovaná 4-dňová verzia Design Sprintu pre efektívnejšie využitie času tímu.',
    fullDescription: 'Vylepšená verzia pôvodného 5-dňového procesu od AJ&Smart a Jakea Knappa. Skracuje trvanie na 4 dni a vyžaduje prítomnosť celého tímu len v prvé dva dni, čím uľahčuje účasť manažmentu a kľúčových rozhodovateľov.',
    keyPrinciples: [
      'Skrátenie na 4 dni (Pondelok-Štvrtok).',
      'Optimalizovaná účasť (Expertíza v úvode, rozhodovanie priebežne).',
      'Rýchlejšie rozhodovanie a prototypovanie.',
      'Všetky fázy 1.0 (Map, Sketch, Decide, Prototype, Test) sú zachované, ale zhustené.'
    ],
    whenToUse: 'Keď je 5 dní príliš veľa pre kalendáre manažérov, alebo keď tím už má skúsenosti s Design Sprintom.',
    metrics: ['Úspora času tímu (človekohodiny)', 'Rýchlosť validácie'],
    history: 'Vyvinuté agentúrou AJ&Smart v spolupráci s Jakeom Knappom (autorom pôvodného Sprintu).',
    tools: ['Lightning Decision Jam', 'User Test Flow', 'Storyboarding 2.0'],
    examples: ['Lego', 'Google', 'Rôzne digitálne agentúry']
  },
  {
    id: 'design-sprint-3',
    title: 'AI / Enterprise Design Sprint 3.0',
    category: 'AI',
    shortDescription: 'Integrácia umelej inteligencie do Design Sprintu pre automatickú syntézu a modelovanie.',
    fullDescription: 'Evolúcia Design Sprintu pre potreby veľkých podnikov a éru AI. Využíva nástroje umelej inteligencie na zrýchlenie fáz (napr. syntéza výskumu, generovanie variantov prototypov) a rieši špecifiká vývoja AI produktov, ako je vysvetliteľnosť a etika.',
    keyPrinciples: [
      'AI-augmented ideation (AI ako partner pri brainstormingu).',
      'Automatická syntéza dát a výskumu.',
      'Modelovanie správania a syntetickí užívatelia.',
      'Explainability (vysvetliteľnosť AI rozhodnutí).',
      'Graceful failure (zvládanie chýb AI).'
    ],
    whenToUse: 'Pri vývoji AI produktov, alebo v enterprise prostredí s využitím pokročilých nástrojov na zrýchlenie procesu.',
    metrics: ['Miera využitia AI nástrojov', 'Kvalita AI výstupov', 'Etické skóre'],
    history: 'Vzniká adaptáciou Design Sprintu na možnosti Generatívnej AI (2023+).',
    tools: ['ChatGPT/Claude (ideácia)', 'Midjourney (vizuály)', 'Uizard (prototypy)'],
    examples: ['Vývoj AI asistentov', 'Automatizácia procesov v bankách']
  },
  {
    id: 'pdca',
    title: 'PDCA (Demingov cyklus)',
    category: 'PROCESY',
    shortDescription: 'Cyklus Plan-Do-Check-Act pre neustále zlepšovanie procesov a riadenie kvality.',
    fullDescription: 'Základný rámec pre riadenie kvality a neustále zlepšovanie (Kaizen). Poskytuje vedecký a iteratívny prístup k riešeniu problémov a zavádzaniu zmien, čím zabezpečuje, že chyby sa neopakujú a procesy sa postupne optimalizujú.',
    keyPrinciples: [
      'Plan (Naplánuj) - identifikuj problém a navrhni riešenie.',
      'Do (Vykonaj) - otestuj riešenie na malej vzorke.',
      'Check (Over) - analyzuj výsledky testu.',
      'Act (Konaj/Štandardizuj) - implementuj plošne alebo uprav plán.',
      'Iteratívne zlepšovanie.'
    ],
    whenToUse: 'V systémoch riadenia inovácií, pri optimalizácii procesov, implementácii zmien a riešení problémov kvality.',
    metrics: ['Počet cyklov zlepšenia', 'Redukcia chybovosti', 'Efektivita procesu'],
    history: 'Popularizoval W. Edwards Deming v 50. rokoch (vychádza z práce Waltera Shewharta).',
    tools: ['A3 Report', 'Ishikawa diagram', '5 Whys'],
    examples: ['Toyota (Kaizen)', 'ISO 9001 systémy', 'Lean management']
  },
  {
    id: 'ccpm',
    title: 'Critical Chain Project Management (CCPM)',
    category: 'PROJEKTY',
    shortDescription: 'Projektové riadenie vychádzajúce z TOC zamerané na riadenie buffrov a zdrojov.',
    fullDescription: 'Metóda riadenia projektov, ktorá rieši neistotu nie pridávaním rezervy do každej úlohy (čo vedie k plytvaniu), ale vytvorením spoločných "buffrov" na konci reťazca. Zameriava sa na zdroje a úzke hrdlá, čím výrazne zvyšuje pravdepodobnosť dodržania termínov.',
    keyPrinciples: [
      'Kritická reťaz (zohľadňuje závislosti úloh AJ zdrojov).',
      'Projektový buffer (na konci projektu).',
      'Feeding buffers (na prípojoch k hlavnej reťazi).',
      'Eliminácia multitaskingu (sústredenie na jednu úlohu).',
      'Boj proti Studentovmu syndrómu a Parkinsonovmu zákonu.'
    ],
    whenToUse: 'Pri riadení komplexných inovačných projektov, kde je dôležité dodržanie termínov a efektívne využitie obmedzených zdrojov.',
    metrics: ['Buffer penetration (čerpanie buffra)', 'On-time delivery', 'Lead time projektu'],
    history: 'Vyvinutá Eliyahu M. Goldrattom v roku 1997 (kniha "Critical Chain").',
    tools: ['Buffer Management grafy', 'Fever Charts', 'Softvér na CCPM'],
    examples: ['Vývoj lietadiel', 'Stavebné projekty', 'IT vývoj']
  }
];

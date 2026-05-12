export interface MethodSection {
  title: string;
  content: string;
  list?: string[];
}

export interface ExtendedMethodContent {
  id: string;
  title: string;
  subtitle?: string;
  intro: string;
  sections: MethodSection[];
}

export const extendedMethods: Record<string, ExtendedMethodContent> = {
  'jtbd': {
    id: 'jtbd',
    title: 'Jobs to be Done (JTBD)',
    subtitle: 'Strategický rámec pre pochopenie skutočnej motivácie zákazníkov',
    intro: 'Metóda Jobs-to-be-Done (JTBD) predstavuje zásadný posun v inovačnej paradigme, pretože namiesto vylepšovania parametrov samotného produktu alebo segmentácie zákazníkov podľa demografických údajov sa sústredí na hlboké pochopenie ich skutočných motivácií a kontextu. Fundamentálnou tézou tohto rámca je, že zákazníci si produkty nekupujú, ale si ich metaforicky „najímajú“, aby v určitej situácii vykonali špecifickú prácu alebo dosiahli pokrok smerom k želanému cieľu.',
    sections: [
      {
        title: 'Podstata a filozofia JTBD',
        content: 'Tradičný marketing často zlyháva, pretože sa zameriava na to, „kto“ je zákazník (vek, príjem, pohlavie), zatiaľ čo JTBD hľadá kauzalitu nákupného správania – teda „prečo“ sa zákazník rozhodol pre dané riešenie. Tento prístup odhaľuje, že potreby zákazníkov sú v čase stabilné, zatiaľ čo technológie zastarávajú; napríklad potreba „šírenia správy na diaľku“ existuje stáročia, hoci riešenia sa vyvinuli od poštových holubov až po instant messaging.',
        list: [
          'Funkčná dimenzia: Opisuje praktickú úlohu, ktorú treba vykonať (napr. ušetrenie času, bezpečný presun).',
          'Emocionálna dimenzia: Definuje, ako sa chce zákazník počas procesu alebo po ňom cítiť (napr. pocit bezpečia, kompetentnosti alebo sebaistoty).',
          'Sociálna dimenzia: Určuje, ako chce byť zákazník vnímaný okolím pri používaní daného riešenia.'
        ]
      },
      {
        title: 'Outcome-Driven Innovation (ODI)',
        content: 'Zatiaľ čo JTBD je teoretickým rámcom, Outcome-Driven Innovation (ODI) je praktickou metodológiou, ktorá túto teóriu operacionalizuje do prísnej firemnej praxe. ODI transformuje inovácie z umenia na vedu tým, že namiesto vágnych požiadaviek pracuje s „želanými výsledkami“ (Desired Outcomes) – zákazníkom definovanými metrikami úspechu. Táto metodológia dosahuje až 86 % úspešnosť pri uvádzaní nových produktov, čo je päťnásobne viac než priemerný trhový štandard. Kľúčovým nástrojom je Job Map (Mapa práce), ktorá dekonštruuje úlohu zákazníka do ôsmich univerzálnych krokov (definícia, lokalizácia, príprava, potvrdenie, vykonanie, monitorovanie, úprava a ukončenie). Na základe týchto krokov inovátori hľadajú „biely priestor“ – oblasti, ktoré sú poddimenzované (vysoká dôležitosť, nízka spokojnosť) alebo predimenzované.'
      },
      {
        title: 'Integrácia s inými metódami',
        content: 'JTBD nie je izolovaný nástroj, ale tvorí základ inovačného cyklu:',
        list: [
          'JTBD/ODI definuje strategickú príležitosť a to, „čo presne treba riešiť“.',
          'Design Thinking využíva empatiu na návrh kreatívnych riešení.',
          'Lean Startup validuje tieto riešenia cez rýchle experimenty a MVP (minimálny životaschopný produkt).',
          'Kano model následne klasifikuje navrhnuté funkcie podľa ich vplyvu na spokojnosť zákazníka.'
        ]
      },
      {
        title: 'Presné kroky realizácie metódy JTBD/ODI',
        content: 'Postupujte podľa týchto krokov pre úspešnú aplikáciu:',
        list: [
          '1. Definujte trh okolo úlohy (Job-to-be-Done): Nadefinujte trh nie cez kategóriu produktu, ale cez prácu, ktorú sa ľudia snažia vykonať. Identifikujte „vykonávateľa úlohy“ (true customer) na správnej úrovni abstrakcie.',
          '2. Vytvorte Mapu práce (Job Map): Dekonštruujte proces zákazníka do 8 fáz nezávisle od súčasného technologického riešenia: Definovanie cieľa, Lokalizácia vstupov, Príprava prostredia, Potvrdenie pripravenosti, Vykonanie úlohy, Monitorovanie pokroku, Úprava správania, Ukončenie.',
          '3. Odkryte želané výsledky (Desired Outcomes): Zistite, ako zákazník meria úspech v každom kroku mapy. Použite formát: Smer zlepšenia + Jednotka miery + Objekt kontroly + Kontext.',
          '4. Kvantifikujte príležitosti (Opportunity Score): Pomocou algoritmu určite priority (Dôležitosť + max(Dôležitosť - Spokojnosť, 0)). Sústreďte zdroje na potreby s najvyšším skóre.'
        ]
      },
      {
        title: 'Kľúčové otázky pre inovačný tím',
        content: 'Pri práci s JTBD si klaďte tieto otázky:',
        list: [
          'Prečo si zákazník tento produkt v skutočnosti najíma?',
          'V akej špecifickej situácii/kontexte sa zákazník nachádza, keď vzniká potreba?',
          'Aké sú funkčné, emocionálne a sociálne dimenzie jeho úlohy?',
          'Ako zákazník definuje úspešné vykonanie každej fázy svojej práce?',
          'Ktoré kroky v procese sú momentálne najviac frustrujúce alebo neefektívne?'
        ]
      },
      {
        title: 'Spôsob formulácie potrieb (User Story + JTBD)',
        content: 'Pre hlbšie pochopenie sa odporúča integrovať klasickú užívateľskú story s logikou JTBD do formátu: „Ako [používateľ], keď [situácia/kontext], chcem [cieľ/úloha], aby som mohol [prínos/pokrok].“'
      },
      {
        title: 'Prečo je JTBD strategicky zásadné',
        content: 'Christensen vo svojej práci ukazuje, že firmy zlyhávajú nie preto, že by boli zle riadené, ale preto, že optimalizujú existujúce produkty pre existujúcich zákazníkov, namiesto pochopenia nových „jobs“. To znamená, že firma zlepšuje parametre produktu, ale zákazník potrebuje iný pokrok. Vznikne disruptor, ktorý rieši nový job lepšie. JTBD je teda nástroj proti produktovej slepote, segmentovej slepote a „feature-itis“.'
      }
    ]
  },
  'design-thinking': {
    id: 'design-thinking',
    title: 'Design Thinking',
    subtitle: 'Systematický prístup k riešeniu komplexných problémov orientovaný na človeka',
    intro: 'Design Thinking je systematický, iteratívny prístup k riešeniu komplexných problémov, ktorý vychádza z hlbokého pochopenia človeka (používateľa), generovania alternatívnych riešení a rýchleho testovania prototypov v reálnom prostredí. Nejde o „kreatívnu techniku“, ale o riadený proces učenia sa cez experimentovanie.',
    sections: [
      {
        title: 'Podstata a filozofia',
        content: 'Cieľom Design Thinkingu je znížiť neistotu pri inovácii, pochopiť skutočné (nie deklarované) potreby používateľov a vytvoriť riešenie, ktoré je želateľné (desirable) pre zákazníka, realizovateľné (feasible) technologicky a udržateľné (viable) ekonomicky. Vznikol v prostredí dizajnu produktov (Stanford d.school, IDEO), no dnes sa používa v produktovom vývoji, službách, verejnej správe či zdravotníctve. Je určený na riešenie problémov, kde nepoznáme presnú príčinu, problém je nejasne definovaný alebo zákazník nevie presne povedať, čo chce.'
      },
      {
        title: 'Základná logika procesu (5 fáz)',
        content: 'Design Thinking pracuje v 5 hlavných fázach, ktoré nie sú lineárne, ale cyklické. Po testovaní sa často vraciame späť. Kľúčový princíp je: Najprv pochopiť človeka, potom riešiť problém.',
        list: [
          '1. Empatia (Empathize)',
          '2. Definovanie problému (Define)',
          '3. Generovanie nápadov (Ideate)',
          '4. Prototypovanie (Prototype)',
          '5. Testovanie (Test)'
        ]
      },
      {
        title: '1. Fáza: Empatia (Empathize)',
        content: 'Cieľom je pochopiť realitu používateľa bez domnienok. Nejde o to, čo zákazník hovorí, ale o to, čo skutočne robí, cíti a prežíva. Typická chyba manažérov je, že riešia problém z pohľadu firmy, nie z pohľadu používateľa.',
        list: [
          'Rozhovory (hlboké, nie dotazníky)',
          'Pozorovanie v prirodzenom prostredí',
          'Shadowing (sledovanie používateľa pri práci)',
          'Mapovanie cesty zákazníka (Customer Journey Map)',
          'Identifikácia frustrácií a workaroundov'
        ]
      },
      {
        title: '2. Fáza: Definuj (Define)',
        content: 'Cieľom je preložiť zistenia do jasnej formulácie problému. Správne definovaný problém je polovica riešenia. Používa sa tzv. „How Might We“ formulácia: „Ako by sme mohli pomôcť [konkrétnemu používateľovi] dosiahnuť [konkrétny cieľ] bez [konkrétnej bariéry]?“'
      },
      {
        title: '3. Fáza: Ideuj (Ideate)',
        content: 'Cieľom je rozšíriť pole možností. Tu sa ešte nehodnotí, ale generuje. Dôležitá je kvantita pred kvalitou.',
        list: [
          'Brainstorming',
          'Brainwriting',
          'Crazy 8s',
          'SCAMPER',
          'Kombinovanie extrémnych riešení'
        ]
      },
      {
        title: '4. Fáza: Prototypuj (Prototype)',
        content: 'Cieľom je urobiť nápad viditeľným a testovateľným. Prototyp nie je finálny produkt, je to nástroj učenia. Musí byť lacný a rýchly.',
        list: [
          'Náčrt na papieri',
          'Klikateľný wireframe',
          'Hraná situácia (service role play)',
          'Simulácia procesu',
          'Landing page test'
        ]
      },
      {
        title: '5. Fáza: Testuj (Test)',
        content: 'Cieľom je overiť reakciu reálnych používateľov. Testovanie nie je validácia ega, je to validácia hypotéz. Zisťuje sa, čo funguje, čo je nejasné, čo používateľ ignoruje a čo mu prekáža.'
      },
      {
        title: 'Prečo je Design Thinking silný',
        content: '',
        list: [
          'Znižuje riziko inovácií.',
          'Skracuje čas učenia.',
          'Zabraňuje budovaniu niečoho, čo nikto nepotrebuje.',
          'Presúva pozornosť z interného myslenia na zákazníka.'
        ]
      },
      {
        title: 'Komplexná realizačná metodika',
        content: 'Postupujte podľa týchto krokov pre úspešnú implementáciu vo firme:',
        list: [
          'Fáza 1: Príprava - Definujte kontext (aký problém riešime, prečo je dôležitý) a zostavte multidisciplinárny tím.',
          'Fáza 2: Empatia (2–3 týždne) - Vyberte 10–15 reálnych používateľov, urobte hĺbkové rozhovory, pozorujte správanie a identifikujte vzorce.',
          'Fáza 3: Define (1 workshop) - Definujte skutočný problém (nie symptóm) a sformulujte 3–5 jasných výziev.',
          'Fáza 4: Ideation (1–2 workshopy) - Vygenerujte 50+ nápadov bez kritiky, kombinujte ich a vyberte najlepšie.',
          'Fáza 5: Prototypy (1–2 týždne) - Vyberte 3 najsľubnejšie koncepty a vytvorte jednoduché prototypy s definovanými hypotézami.',
          'Fáza 6: Testovanie (1–3 týždne) - Testujte s reálnymi používateľmi, zaznamenávajte správanie a emócie, nie len názory.',
          'Fáza 7: Iterácia - Upravte prototyp, opakujte testovanie a rozhodnite o škálovaní.'
        ]
      },
      {
        title: 'Kritické faktory úspechu',
        content: '',
        list: [
          'Nezačať riešením.',
          'Nevynechať empatiu.',
          'Testovať rýchlo.',
          'Pracovať s realitou, nie s domnienkami.',
          'Mať podporu vedenia.'
        ]
      }
    ]
  },
  'odi': {
    id: 'odi',
    title: 'Outcome-Driven Innovation (ODI)',
    subtitle: 'Exaktný inovačný proces založený na merateľných výsledkoch',
    intro: 'Metóda Outcome-Driven Innovation (ODI), ktorú vyvinul Anthony Ulwick, predstavuje jeden z najsofistikovanejších a najpresnejších inovačných systémov súčasnosti, pretože mení pohľad na to, čo je v inováciách merateľné. Na rozdiel od tradičných prístupov, ktoré sa pýtajú zákazníkov, „čo chcú“ (čo často vedie k nepresným zadaniam), sa ODI zameriava na to, aký výsledok (outcome) sa snažia dosiahnuť pri vykonávaní konkrétnej aktivity. Táto metodológia vychádza z filozofie Jobs-to-be-Done (JTBD), ktorá tvrdí, že ľudia si nekupujú produkty, ale si ich „najímajú“, aby za nich urobili určitú prácu. ODI transformuje túto teóriu do exaktnej matematickej štruktúry, kde úspech inovácie nezávisí od náhody, ale od schopnosti produktu lepšie uspokojiť merateľné potreby zákazníka.',
    sections: [
      {
        title: 'Filozofický a teoretický základ ODI',
        content: 'ODI stojí na troch zásadných predpokladoch:\n1. Zákazníci „nechcú produkty“, ale chcú dosiahnuť pokrok: Zákazník si produkt „najíma“, aby vykonal konkrétnu prácu (job). Táto práca má vždy štruktúru – je procesná, má kroky, riziká, obmedzenia.\n2. Zákaznícke potreby sú stabilné: Technológie sa menia, ale samotné výsledky, ktoré chce zákazník dosiahnuť, sú relatívne stabilné v čase.\n3. Potreby je možné formulovať objektívne: ODI tvrdí, že potreby zákazníkov sa dajú formulovať ako „Minimalizovať čas potrebný na…“, „Znížiť pravdepodobnosť, že…“, „Zvýšiť presnosť pri…“. Teda ako žiaduci výsledok (Desired Outcome).',
        list: [
          'Zákazníci si produkty nekupujú kvôli ich vlastnostiam, ale preto, aby im pomohli vykonať určitú „prácu“ (job).',
          'Úspešnosť inovácie závisí od toho, ako presne dokáže firma identifikovať a uspokojiť miery úspechu, ktoré zákazník pri tejto práci používa.',
          'Trh nie je definovaný produktom (napr. trh s vŕtačkami), ale skupinou ľudí a úlohou, ktorú sa snažia vykonať (napr. remeselníci, ktorí potrebujú vytvoriť dieru do steny).'
        ]
      },
      {
        title: 'Kľúčový rozdiel oproti klasickým metódam',
        content: 'Tradičný prístup sa pýta: „Čo chcete?“, generuje nápady, robí brainstorming a validuje prototyp. ODI sa pýta: „Čo sa snažíte dosiahnuť?“, meria neuspokojené výsledky, robí kvantitatívnu analýzu a najprv validuje potrebu. ODI eliminuje náhodnosť. Nezačína riešením. Začína štruktúrovanou analýzou práce zákazníka.'
      },
      {
        title: 'Štruktúra „Job to be Done“ podľa ODI',
        content: 'Každá zákaznícka práca má univerzálnu štruktúru: 1. Definovať cieľ, 2. Lokalizovať vstupy, 3. Pripraviť vstupy, 4. Potvrdiť pripravenosť, 5. Vykonať krok, 6. Monitorovať výsledok, 7. Upraviť odchýlky, 8. Dokončiť proces. ODI rozkladá túto prácu na mikro-kroky a ku každému kroku generuje požadované výsledky.'
      },
      {
        title: 'Desired Outcomes – jadro metodiky',
        content: 'Desired outcome je formulovaný takto: Smer zlepšenia + merateľný objekt + kontext. Príklady: „Minimalizovať čas potrebný na nastavenie zariadenia“, „Znížiť pravdepodobnosť poškodenia dát“, „Zvýšiť presnosť merania“. Dôležité je, že outcome neobsahuje riešenie, je technologicky neutrálny a merateľný.'
      },
      {
        title: 'Matematická priorizácia (Innovation Opportunity Score)',
        content: 'ODI používa kvantitatívny model. Každý outcome sa meria dvomi otázkami: 1. Ako je tento výsledok dôležitý? (Importance 1–10), 2. Ako ste dnes spokojný s jeho naplnením? (Satisfaction 1–10). Potom sa vypočíta: Opportunity Score = Importance + (Importance – Satisfaction). Ak je vysoká dôležitosť a nízka spokojnosť, vzniká neuspokojená príležitosť. Toto je jeden z najzásadnejších rozdielov oproti iným metódam – inovácia je riadená dátami.'
      },
      {
        title: 'Detailná realizácia metódy ODI: Kroky a otázky',
        content: 'Pre úspešnú implementáciu ODI vo vašej organizácii odporúčam postupovať podľa tohto štruktúrovaného rámca:',
        list: [
          '1. Definícia trhu a úlohy (Job Discovery): Cieľom je identifikovať hlavnú prácu, ktorú sa zákazník snaží vykonať. Kľúčové otázky: Na čo si zákazník v skutočnosti „najal“ náš produkt? Čo je ten ultimátny cieľ, ktorý chce dosiahnuť, bez ohľadu na technológiu?',
          '2. Mapovanie procesnej mapy práce (Job Mapping): Cieľom je rozložiť prácu na logickú sekvenciu krokov. Kľúčové otázky: Čo musí zákazník urobiť ako prvé? Aké kroky nasledujú? Kde dochádza k najväčším prestojom alebo chybám?',
          '3. Zber žiaducich výsledkov (Outcome Gathering): Cieľom je identifikovať metriky úspechu pre každý krok práce. Štruktúra vety: „Minimalizovať [smer zmeny] + [jednotka merania] + [predmet kontroly]“.',
          '4. Kvantitatívny prieskum a prioritizácia (Opportunity Analysis): Cieľom je nechať reprezentatívnu vzorku zákazníkov ohodnotiť dôležitosť a spokojnosť pre každý výsledok. Vzorec indexu: Dôležitosť + Max(Dôležitosť - Spokojnosť, 0) = Príležitosť.',
          '5. Návrh inovačnej stratégie: Poddimenzovaný trh (Under-served) – priestor na prémiové inovácie. Predimenzovaný trh (Over-served) – priestor na zjednodušenie produktu a zníženie ceny.'
        ]
      },
      {
        title: 'Kedy použiť ODI',
        content: 'Keď trh stagnuje, keď konkurencia inovuje len inkrementálne, keď chcete blue ocean bez hádania, alebo keď potrebujete objektívne priority.'
      },
      {
        title: 'Silné stránky metodiky',
        content: 'Eliminácia náhodného brainstormingu, objektívne priority, predvídateľnosť úspechu, jasné rozhodovanie o investíciách a silná obrana voči konkurencii.'
      }
    ]
  },
  'lean-startup': {
    id: 'lean-startup',
    title: 'Lean Startup',
    subtitle: 'Vedecký prístup k budovaniu biznisu v podmienkach extrémnej neistoty',
    intro: 'Metóda Lean Startup bola systematicky rozpracovaná Ericom Riesom v knihe The Lean Startup. Ide o riadený prístup k budovaniu nových produktov a biznisov v podmienkach extrémnej neistoty. Je to metodika určená primárne pre situácie, kde nepoznáme presne zákazníka, problém, optimálny produkt, alebo či je trh dostatočne veľký. Lean Startup nie je o šetrení nákladov, ale o zrýchlení učenia sa.',
    sections: [
      {
        title: 'Filozofia Lean Startup',
        content: 'Lean Startup stojí na troch základných pilieroch:\n1. Podnikanie je séria hypotéz\n2. Učenie sa je merateľné\n3. Najväčším plytvaním je budovanie niečoho, čo nikto nechce\n\nKlasický prístup: Najprv naplánuj, potom vyvíjaj, potom spusti, potom zisti.\nLean Startup: Najprv otestuj, potom sa uč, potom uprav, potom škáluj.'
      },
      {
        title: 'Hlavný mechanizmus: Build – Measure – Learn',
        content: 'Jadro metódy tvorí cyklus: Postav (Build) → Zmeraj (Measure) → Nauč sa (Learn). Tento cyklus sa opakuje, kým sa nedosiahne tzv. product-market fit.'
      },
      {
        title: '1. BUILD – budovanie minimálneho produktu',
        content: 'Tu vzniká koncept MVP – Minimum Viable Product. MVP nie je zjednodušená verzia finálneho produktu. Je to najmenší možný experiment, ktorý overí kľúčovú hypotézu. Cieľom je overiť, či zákazník skutočne chce riešenie.',
        list: [
            'Namiesto vývoja celej aplikácie → landing page.',
            'Namiesto automatizovaného systému → manuálne poskytovaná služba.',
            'Namiesto výroby produktu → 3D tlač alebo simulácia.'
        ]
      },
      {
        title: '2. MEASURE – meranie správania',
        content: 'Lean Startup pracuje s pojmom Validated Learning – overené učenie. Meria sa správanie, nie názory. Používajú sa tzv. actionable metrics, nie vanity metrics.',
        list: [
            'Vanity metric: „Máme 10 000 stiahnutí.“',
            'Actionable metric: „35 % používateľov sa vrátilo do 7 dní.“'
        ]
      },
      {
        title: '3. LEARN – rozhodnutie: pivot alebo pokračovať',
        content: 'Po každom cykle sa tím pýta: Potvrdili sa hypotézy? Je dopyt dostatočný? Je model udržateľný? Má zmysel pokračovať? Ak nie → Pivot (zásadná zmena smerovania). Ak áno → pokračovať a prehĺbiť investíciu.',
        list: [
            'Pivot môže byť: zmena cieľovej skupiny, zmena problému, zmena cenového modelu, zmena distribučného kanála, zmena technológie.'
        ]
      },
      {
        title: 'Čo je skutočným cieľom?',
        content: 'Cieľom Lean Startup nie je rýchly rast. Cieľom je nájsť opakovateľný a škálovateľný biznis model. To je zásadný rozdiel oproti klasickému projektovému riadeniu.'
      },
      {
        title: 'Kľúčové koncepty metódy',
        content: '',
        list: [
            'Hypotézový biznis model: Na začiatku nie je plán, ale súbor hypotéz (Kto je zákazník? Aký má problém? Je ochotný platiť?).',
            'Innovation Accounting: Špecifický systém merania pokroku (miera učenia, konverzný pomer, retencia, CAC, LTV) namiesto zisku a obratu.',
            'Rýchlosť iterácie: Čím kratší cyklus učenia, tým menšie riziko. Cieľom je skrátiť experiment z mesiacov na týždne.'
        ]
      },
      {
        title: 'Kde sa Lean Startup používa a kde nie',
        content: 'Používa sa v startupoch, korporátnych inovačných tímoch, pri digitálnych službách a transformácii modelov. Nehodí sa pre stabilné optimalizačné projekty, projekty s presne definovaným rozsahom alebo v extrémne regulovaných prostrediach bez priestoru na experiment.'
      },
      {
        title: 'Najčastejšie chyby pri aplikácii',
        content: '',
        list: [
            'MVP je príliš veľké.',
            'Tím sa bojí pivotovať.',
            'Manažment chce klasický biznis plán.',
            'Merajú sa vanity metrics.',
            'Experimenty nie sú jasne definované.'
        ]
      },
      {
        title: 'Detailný komplexný realizačný postup',
        content: 'Postupujte podľa týchto krokov:',
        list: [
            'Fáza 1 – Formulácia hypotéz: Zoznam 10–15 kritických hypotéz (Kto je zákazník? Aký problém má? Je ochotný zaplatiť?).',
            'Fáza 2 – Prioritizácia hypotéz: Vyberte 3 kľúčové hypotézy, ktoré sú najrizikovejšie.',
            'Fáza 3 – Návrh MVP: Najjednoduchší experiment hotový do 2–4 týždňov.',
            'Fáza 4 – Spustenie experimentu: Definujte cieľovú skupinu, kanál, metriky a čas.',
            'Fáza 5 – Meranie: Sledujte akcie používateľov (platby, návraty, odporúčania).',
            'Fáza 6 – Rozhodnutie: Sú čísla nad prahom? Ak nie → pivot. Ak áno → investovať.',
            'Fáza 7 – Škálovanie: Až keď je model opakovateľný a ekonomika dáva zmysel.'
        ]
      },
      {
        title: 'Strategický rozmer pre CEO',
        content: 'Lean Startup mení myslenie: Z plánovania na experimentovanie. Z istoty na učenie. Z veľkých investícií na malé cykly. Z ega na dáta.'
      }
    ]
  },
  'design-sprint': {
    id: 'design-sprint',
    title: 'Design Sprint',
    subtitle: 'Päťdňový proces na rýchle riešenie kritických biznisových problémov',
    intro: 'Design Sprint je štruktúrovaný, časovo ohraničený (štandardne 5-dňový) proces, ktorého cieľom je rýchlo vyriešiť kritický biznisový problém prostredníctvom prototypovania a testovania s reálnymi používateľmi. Metodiku vytvoril Jake Knapp v prostredí Google Ventures. Je to nástroj na zníženie rizika, zrýchlenie rozhodovania a overenie produktu pred investíciou.',
    sections: [
      {
        title: 'Filozofia: Nehádaj sa mesiace, otestuj za týždeň',
        content: 'Sprint je extrémne koncentrované učenie sa. Namiesto analýz trvajúcich mesiace a vývoja, ktorý môže skončiť zlyhaním, vytvoríte prototyp za 3 dni a otestujete ho v piatok. V pondelok tak viete, či má zmysel pokračovať.',
        list: [
          'Kombinuje strategické myslenie, dizajnový proces a behaviorálny výskum.',
          'Znižuje politiku vo firme a núti tím spolupracovať.',
          'Minimalizuje investičné riziko.'
        ]
      },
      {
        title: 'Fáza 0 – Príprava (2–3 týždne pred sprintom)',
        content: 'Úspech sprintu závisí od prípravy. Musíte vybrať správny problém (vysoké riziko, neistota), určiť „Decidera“ (osoba s finálnym slovom, napr. CEO) a zostaviť multidisciplinárny tím (5–7 ľudí). Tiež je nutné vopred zabezpečiť 5 reálnych používateľov na testovanie.',
        list: [
          'Otázky: Je to vysokoriziková téma? Ide o veľkú investíciu? Je tím zablokovaný?'
        ]
      },
      {
        title: 'Deň 1 – Pochopenie a mapa (Mapping)',
        content: 'Cieľom je zjednotiť tím v chápaní problému. Definuje sa dlhodobý cieľ a riziká. Vytvára sa mapa zákazníckej cesty a vyberá sa konkrétny moment, ktorý sa bude riešiť.',
        list: [
          'Dlhodobý cieľ: Kde chceme byť o 6-12 mesiacov?',
          'Otázky šprintu: Aké prekážky nás môžu zastaviť? (preformulované na "Ako by sme mohli...")',
          'Mapa: Jednoduchý diagram toku zákazníka od problému k cieľu.',
          'Cieľ: Decider vyberie jeden moment na mape a jedného cieľového zákazníka.'
        ]
      },
      {
        title: 'Deň 2 – Skicovanie riešení (Sketching)',
        content: 'Každý člen tímu individuálne navrhne riešenie. Platí princíp: najprv individuálne myslenie, potom kolektívne rozhodovanie. Proces zahŕňa:',
        list: [
          'Lightning Demos: Rýchla inšpirácia existujúcimi riešeniami (aj z iných odvetví).',
          'Crazy 8s: Rýchle cvičenie, kde za 8 minút nakreslíte 8 variácií nápadu.',
          'Solution Sketch: Detailný, anonymný trojpanelový náčrt riešenia, ktorý je samovysvetľujúci.'
        ]
      },
      {
        title: 'Deň 3 – Rozhodnutie a storyboard (Decide)',
        content: 'Vyberá sa najlepší koncept pomocou hlasovania a rozhodnutia Decidera. Následne sa tvorí storyboard – presný scenár 10–15 krokov, čo používateľ uvidí a urobí.',
        list: [
          'Heatmap Voting: Tím označuje zaujímavé časti nápadov bodkami.',
          'Speed Critique: Rýchla diskusia o kladoch a záporoch každého riešenia.',
          'Supervote: Decider má rozhodujúce slovo a vyberá koncept na prototypovanie.',
          'Rumble: Ak sú dva dobré konfliktné nápady, môžu sa postaviť dva prototypy a otestovať proti sebe.',
          'Storyboard: Kreslenie presného scenára interakcie používateľa s prototypom.'
        ]
      },
      {
        title: 'Deň 4 – Prototyp (Prototype)',
        content: 'Tvorba realistického prototypu (nie MVP, ale "fasády"). Cieľom je vytvoriť dostatočne presvedčivý model (klikateľná maketa, simulácia), aby používateľ reagoval autenticky ("Fake it until you validate it"). Roly v tíme:',
        list: [
          'Maker (Tvorca): Vytvára obrazovky/dizajn (Figma, Sketch).',
          'Stitcher (Zoššívač): Spája obrazovky do funkčného toku.',
          'Writer (Copywriter): Píše realistické texty.',
          'Asset Collector: Hľadá obrázky, ikony a podklady.',
          'Interviewer: Pripravuje scenár rozhovoru na piatok.'
        ]
      },
      {
        title: 'Deň 5 – Testovanie (Test)',
        content: 'Testovanie s 5 reálnymi používateľmi. Sledujú sa reakcie, zmätenie a frustrácia. Cieľom nie je predať, ale učiť sa. Rozhovor má štruktúru "Five Act Interview":',
        list: [
          '1. Friendly Welcome: Uvítanie a uvoľnenie atmosféry.',
          '2. Context Questions: Otázky o pozadí a zvykoch používateľa.',
          '3. Introduction to Prototype: Predstavenie prototypu (nie ako "nášho", ale ako niečoho na testovanie).',
          '4. Tasks & Nudges: Používateľ plní úlohy a komentuje nahlas.',
          '5. Debrief: Zhrnutie dojmov a otázky na záver.'
        ]
      },
      {
        title: 'Rozhodovací moment a čo ďalej',
        content: 'Po sprinte tím vyhodnotí, či sa hypotézy potvrdili. Možné scenáre: Pokračovať do vývoja (ak bol úspech), Upraviť koncept (ak boli chyby v prototype), alebo Zastaviť projekt (ak o riešenie nie je záujem).',
        list: [
          'Kritické faktory úspechu: Disciplinovaný časový rámec, prítomnosť rozhodovateľa, reálni používatelia a ochota prijať aj negatívne výsledky.'
        ]
      },
      {
        title: 'Design Sprint vs. Design Thinking',
        content: 'Design Thinking je dlhší proces s väčším dôrazom na výskum a otvorené hľadanie. Design Sprint je koncentrovaný, časovo fixovaný a orientovaný na rýchlu validáciu a rozhodnutie.'
      }
    ]
  },
  'sit': {
    id: 'sit',
    title: 'Systematic Inventive Thinking (SIT)',
    subtitle: 'Systematická inovačná metodika pre inovácie "vo vnútri krabice"',
    intro: 'Metóda Systematic Inventive Thinking (SIT) predstavuje sofistikovanú inovačnú metodológiu, ktorá vznikla v Izraeli v polovici 90. rokov ako praktická a zjednodušená derivácia komplexnej inžinierskej disciplíny TRIZ. Na rozdiel od tradičných kreatívnych prístupov, ktoré nabádajú k hľadaniu inšpirácie mimo známeho prostredia, SIT presadzuje radikálne odlišnú filozofiu „myslenia vo vnútri krabice“, postavenú na princípe uzavretého sveta. Tento fundamentálny axióm hovorí, že tie najúspešnejšie a najkreatívnejšie riešenia sa v drvivej väčšine prípadov nachádzajú priamo v komponentoch existujúceho systému alebo v jeho absolútne bezprostrednom okolí. Umelým obmedzením inovačného priestoru na zdroje, ktoré sú už k dispozícii, sa efektívne prekonáva psychologická bariéra známa ako kognitívna fixácia, kedy ľudská myseľ nie je schopná vidieť iné využitie objektu než to, na ktoré bol pôvodne navrhnutý.\n\nCelý proces SIT je postavený na logike, že tvorivosť nie je náhodný dar pre vyvolených, ale systematický a reprodukovateľný proces. Metóda využíva princíp „funkcia nasleduje formu“, čo znamená, že inovátori najprv mechanicky modifikujú existujúci produkt pomocou špecifických myšlienkových vzorcov, čím vytvoria takzvaný virtuálny produkt. Až v ďalšom kroku sa tím pýta, aké výhody a pre koho by tento nový tvar alebo konfigurácia mohli prinášať. Tento reverzný prístup k riešeniu problémov narúša lineárne uvažovanie a vedie k objavovaniu prelomových aplikácií, ktoré by pri štandardnom postupe od identifikácie potreby k hľadaniu riešenia pravdepodobne nikdy nevznikli. V porovnaní so svojím predchodcom TRIZ je SIT podstatne univerzálnejšia, jednoduchšia na naučenie a eliminovala potrebu hlbokej technickej expertízy, vďaka čomu nachádza uplatnenie nielen vo vývoji produktov, ale aj v marketingu, dizajne služieb či strategickom riadení organizácií.',
    sections: [
      {
        title: 'Filozofické princípy SIT',
        content: 'SIT stojí na dvoch hlavných pilieroch, ktoré ju odlišujú od iných metód:',
        list: [
          'Closed World Principle (Princíp uzavretého sveta): Inovujte iba pomocou existujúcich komponentov produktu, procesov a zdrojov. Nepridávajte nič nové zvonku. Tým sa znižuje komplexita a riziko, a zvyšuje realizovateľnosť.',
          'Function Follows Form (Funkcia nasleduje formu): Najprv vytvorte nový „tvar riešenia“ (virtuálny produkt) pomocou nástrojov SIT, a až potom hľadajte jeho využitie. Namiesto otázky „Aký problém riešime?“ sa pýtame „Čo sa stane, ak odstránime túto časť a pre koho by to dávalo zmysel?“.'
        ]
      },
      {
        title: 'Nástroj 1: Odčítanie (Subtraction)',
        content: 'Najradikálnejší a často najúčinnejší nástroj. Spočíva v odstránení podstatnej časti produktu alebo služby (nie len zbytočnej, ale takej, ktorá sa zdá byť nevyhnutná). Núti nás hľadať náhradu v rámci uzavretého sveta alebo zistiť, že funkcia už nie je potrebná.',
        list: [
          'Kľúčová otázka: Čo sa stane, ak odstránime túto esenciálnu časť? Kto by takýto "oklieštený" produkt chcel a prečo?',
          'Príklad: Odstránenie nahrávania z Walkmanu (vznikol Sony Walkman len na prehrávanie), odstránenie zadných kolies z bicykla (jednokolka), odstránenie operátora z banky (bankomat).'
        ]
      },
      {
        title: 'Nástroj 2: Násobenie (Multiplication)',
        content: 'Vytvorenie kópie existujúceho komponentu, ale s kvalitatívnou zmenou. Nie je to len "viac toho istého", ale "viac toho istého, ale iného".',
        list: [
          'Kľúčová otázka: Čo ak tento prvok skopírujeme, ale zmeníme jeho parameter (veľkosť, teplotu, funkciu)?',
          'Príklad: Dvojitá čepeľ na holiacom strojčeku (prvá dvíha chlp, druhá reže), detské kolesá na bicykli (menšie a vyššie položené).'
        ]
      },
      {
        title: 'Nástroj 3: Delenie (Division)',
        content: 'Rozdelenie produktu alebo procesu na menšie časti a ich reorganizácia v čase alebo priestore. Umožňuje flexibilitu a nové použitie.',
        list: [
          'Kľúčová otázka: Môžeme tento produkt rozdeliť (funkčne, fyzicky, zachovávajúc celok) a usporiadať inak?',
          'Príklad: Rozdelenie diaľkového ovládania (tlačidlá na TV a na ovládači), split klimatizácia (hlučná časť vonku, tichá vnútri), jogurt s oddelenou zložkou (džem/vločky).'
        ]
      },
      {
        title: 'Nástroj 4: Zjednotenie úloh (Task Unification)',
        content: 'Priradenie novej úlohy existujúcemu komponentu (v rámci produktu alebo v jeho okolí). Je to o maximálnom využití zdrojov - "poveriť" komponent ďalšou prácou.',
        list: [
          'Kľúčová otázka: Môže tento existujúci komponent robiť aj prácu niečoho iného? Môže vonkajší prvok prebrať funkciu nášho komponentu?',
          'Príklad: Odmrazovanie zadného skla auta slúži zároveň ako anténa rádia. Ponožky s gumenou podrážkou (náhrada papúč). Zákazník si sám skenuje tovar (samoobslužná pokladňa).'
        ]
      },
      {
        title: 'Nástroj 5: Závislosť atribútov (Attribute Dependency)',
        content: 'Vytvorenie alebo zrušenie závislosti medzi dvoma premennými produktu. Väčšina produktov má fixné atribúty (farba je stále rovnaká). Tento nástroj ich robí dynamickými (farba sa mení podľa teploty).',
        list: [
          'Kľúčová otázka: Čo ak by sa vlastnosť A menila v závislosti od vlastnosti B? (napr. cena podľa času, farba podľa teploty, priehľadnosť skla podľa svetla).',
          'Príklad: Okuliare, ktoré stmavnú na slnku. Cena Uberu závislá od dopytu. Stierače, ktoré zrýchľujú podľa intenzity dažďa.'
        ]
      },
      {
        title: 'Detailný postup realizácie SIT (Krok za krokom)',
        content: 'Pre systematickú inováciu dodržujte tento striktný postup:',
        list: [
          'Krok 1: Definícia uzavretého sveta (Closed World Definition) - Spíšte všetky komponenty produktu (fyzické časti) a jeho okolia (používateľ, prostredie, čas). Pravidlo: Nič nové zvonku nesmie vstúpiť.',
          'Krok 2: Aplikácia nástroja (Tool Application) - Vyberte jeden z 5 nástrojov (napr. Odčítanie) a aplikujte ho na vybraný komponent. Vytvorte "Virtuálny produkt" (napr. "Auto bez kolies").',
          'Krok 3: Vizualizácia virtuálneho produktu - Predstavte si tento absurdný produkt. Nezavrhujte ho, aj keď nedáva zmysel.',
          'Krok 4: Hľadanie výhod (Function Follows Form) - Pýtajte sa: "Pre koho by toto mohlo byť užitočné? V akej situácii? Aký problém by to riešilo?" (napr. Auto bez kolies -> vznášadlo, alebo stacionárny simulátor).',
          'Krok 5: Realizovateľnosť (Feasibility) - Máme technológiu na to, aby sme to vyrobili? Je to ekonomicky zmysluplné?',
          'Krok 6: Adaptácia - Upravte virtuálny produkt tak, aby bol realizovateľný a maximalizoval nájdenú výhodu.'
        ]
      },
      {
        title: 'Prečo SIT funguje',
        content: 'SIT prináša do inovácií štruktúru a predvídateľnosť.',
        list: [
          'Znižuje náhodnosť kreativity.',
          'Vytvára jasnú štruktúru procesu.',
          'Znižuje odpor organizácie (využíva existujúce zdroje).',
          'Generuje realizovateľné inovácie.',
          'Je vhodná pre strategické rozhodovanie aj operatívne problémy.'
        ]
      },
      {
        title: 'Kedy použiť SIT',
        content: 'SIT je ideálna voľba v špecifických situáciách:',
        list: [
          'Keď firma stagnuje a marže klesajú.',
          'Keď je produkt komoditný a trh presýtený.',
          'Keď nie je čas ani rozpočet na rozsiahle R&D.',
          'Keď potrebujete systémový inovačný nástroj pre celú organizáciu.'
        ]
      }
    ]
  },
  'open-innovation': {
    id: 'open-innovation',
    title: 'Open Innovation (Otvorená inovácia)',
    subtitle: 'Strategický prístup využívania externých zdrojov a zdieľania interných poznatkov',
    intro: 'Open Innovation je strategický prístup k inovácii, pri ktorom organizácia systematicky využíva externé zdroje poznania, technológií a nápadov a zároveň umožňuje, aby sa jej interné poznatky využívali aj mimo nej. Koncept bol formalizovaný profesorom Henry Chesbroughom a stojí v kontraste k tradičnému modelu uzavretých inovácií.',
    sections: [
      {
        title: '1. Presná definícia a teoretický základ',
        content: 'Open Innovation je strategický prístup k inovácii, pri ktorom organizácia systematicky využíva externé zdroje poznania, technológií a nápadov a zároveň umožňuje, aby sa jej interné poznatky využívali aj mimo nej.\n\nKoncept bol formalizovaný profesorom Henry Chesbrough (University of California, Berkeley) začiatkom 21. storočia. Základná myšlienka: Firmy by nemali inovovať izolovane. Hodnota vzniká v ekosystéme.\n\nOpen Innovation stojí v kontraste k tzv. „closed innovation“ modelu, kde:\n• výskum je interný,\n• know-how sa drží striktne vo firme,\n• inovácie sa vyvíjajú len vlastnými zdrojmi.'
      },
      {
        title: '2. Podstata Open Innovation',
        content: 'Open Innovation pracuje s tromi smermi toku poznania:',
        list: [
          'Outside-in (externé → interné): Firma absorbuje startupové riešenia, akademický výskum, zákaznícke nápady a technologických partnerov.',
          'Inside-out (interné → externé): Firma licencuje technológie, spin-offuje projekty, predáva IP a umožňuje partnerom využívať svoje platformy.',
          'Coupled model (spoločná kooperácia): Spoločné joint ventures, inovačné aliancie, vývojové konzorciá a otvorené platformy.'
        ]
      },
      {
        title: '3. Prečo vznikla Open Innovation',
        content: 'Tradičný model začal zlyhávať z týchto dôvodov:\n1. Zrýchlenie technologického pokroku\n2. Mobilita talentov\n3. Globálne startupové prostredie\n4. Nákladnosť interného výskumu\n5. Skracovanie životného cyklu produktov\n\nUž nie je realistické, aby veľká firma vlastnila všetky potrebné kompetencie interne.'
      },
      {
        title: '4. Strategické ciele Open Innovation',
        content: 'Open Innovation neslúži na „získavanie nápadov“. Slúži na:',
        list: [
          'Zrýchlenie vývoja',
          'Zníženie nákladov',
          'Zníženie rizika',
          'Vstup do nových trhov',
          'Diverzifikáciu portfólia',
          'Monetizáciu nevyužitého IP'
        ]
      },
      {
        title: '5. Hlavné nástroje Open Innovation',
        content: 'Pre úspešnú implementáciu sa využívajú rôzne nástroje:',
        list: [
          'Crowdsourcing: Zbieranie riešení od širokej komunity.',
          'Corporate–Startup spolupráca: Akcelerátory, venture klienting, pilotné projekty.',
          'Hackathony: Rýchla generácia riešení.',
          'Partnerstvá s univerzitami: Výskumné granty, spoločné laboratóriá.',
          'Corporate Venture Capital: Investovanie do startupov.',
          'Platformové modely: Vytvorenie otvorenej infraštruktúry (API, vývojárske komunity).'
        ]
      },
      {
        title: '6. Riziká Open Innovation',
        content: 'Pri implementácii je potrebné myslieť na možné riziká:',
        list: [
          'Únik know-how',
          'Konflikt kultúr',
          'Nerealistické očakávania',
          'Interný odpor („not invented here syndrome“)',
          'Slabá integrácia výsledkov'
        ]
      },
      {
        title: '7. Organizačné predpoklady úspechu',
        content: 'Aby bola metóda úspešná, organizácia musí mať:',
        list: [
          'Jasnú IP stratégiu',
          'Dedikovaný Open Innovation tím',
          'Rýchle rozhodovanie',
          'Ochotu experimentovať',
          'Strategickú jasnosť (čo chceme hľadať)'
        ]
      },
      {
        title: '8. Rozdiel medzi Open Innovation a Design Thinking',
        content: 'Je dôležité rozlišovať medzi týmito prístupmi:',
        list: [
          'Design Thinking: Zameraný na pochopenie používateľa, interný proces, riešenie konkrétneho problému, iteratívny vývoj.',
          'Open Innovation: Zameraný na rozšírenie zdrojov inovácie, externý aj interný proces, budovanie inovačného ekosystému, strategická spolupráca.'
        ]
      },
      {
        title: 'Komplexná realizačná metodika Open Innovation',
        content: 'Detailný, krokový implementačný model:',
        list: [
          'FÁZA 1: STRATEGICKÉ UKOTVENIE (Definuj inovačné priority: Kde máme medzery? Ktoré trhy chceme otvoriť?)',
          'FÁZA 2: MAPOVANIE EKOSYSTÉMU (Identifikuj externé zdroje: Startupy, Univerzity, Technologické firmy)',
          'FÁZA 3: DEFINOVANIE MODELU SPOLUPRÁCE (Pilotný projekt, Licenčná dohoda, Investícia, Joint venture)',
          'FÁZA 4: IP A PRÁVNY RÁMEC (Vlastníctvo IP, Zdieľanie dát, NDA, Licenčné podmienky)',
          'FÁZA 5: PILOT A TESTOVANIE (Proof of Concept, Pilotný projekt, Metriky úspešnosti)',
          'FÁZA 6: INTEGRÁCIA ALEBO UKONČENIE (Rozhodnutie: Škálovať? Upraviť? Ukončiť?)'
        ]
      },
      {
        title: 'Konkrétne implementačné otázky pre CEO',
        content: 'Kľúčové otázky pre vedenie:',
        list: [
          'Kde presne je naša technologická slepá zóna?',
          'Ak by sme mali inovovať bez interného vývoja, ako by to vyzeralo?',
          'Čo robia startupy lepšie než my?',
          'Ktoré naše IP leží nevyužité?',
          'Máme proces absorpcie externých riešení?',
          'Máme dedikovaný rozpočet na Open Innovation?',
          'Kto vo firme je zodpovedný za integráciu externého riešenia?'
        ]
      },
      {
        title: 'Praktický 90-dňový implementačný plán',
        content: 'Časový harmonogram implementácie:',
        list: [
          'Týždeň 1–2: Definovanie inovačných výziev.',
          'Týždeň 3–6: Mapovanie ekosystému.',
          'Týždeň 7–10: Kontaktovanie partnerov.',
          'Týždeň 11–14: Výber 3 kandidátov.',
          'Týždeň 15–20: PoC testovanie.',
          'Týždeň 21–24: Rozhodnutie o škálovaní.'
        ]
      },
      {
        title: 'Kritické faktory úspechu',
        content: 'Na čo si dať pozor:',
        list: [
          'Top management podpora',
          'Jasná IP stratégia',
          'Schopnosť rýchlej integrácie',
          'Kultúrna otvorenosť',
          'Dedikovaný tím',
          'Nezávislý rozpočet',
          'Realistické očakávania'
        ]
      }
    ]
  },
  'circular-design': {
    id: 'circular-design',
    title: 'Cirkulárny dizajn (Circular Design)',
    subtitle: 'Systematický prístup k navrhovaniu bezodpadových systémov',
    intro: 'Cirkulárny dizajn je systematický prístup k navrhovaniu produktov, služieb a biznis modelov tak, aby materiály, energia a hodnota zostávali v obehu čo najdlhšie a nevznikal odpad ako konečný stav. Nejde o „recykláciu na konci“. Ide o zásadnú zmenu logiky návrhu: už pri dizajne sa počíta s opraviteľnosťou, opätovným použitím, repasiou, demontážou, recykláciou a regeneráciou.',
    sections: [
      {
        title: '1. Čo Cirkulárny dizajn skutočne znamená',
        content: 'Tradičný (lineárny) model: ťažiť → vyrobiť → predať → použiť → vyhodiť\n\nCirkulárny model: navrhnúť → vyrobiť → používať → opravovať → znovu použiť → repasovať → recyklovať → regenerovať → znovu vyrobiť\n\nKľúčová zmena spočíva v tom, že produkt už nie je „vec na predaj“, ale „nosič hodnoty v obehu“.',
        list: [
          'Eliminovať odpad a znečistenie už v návrhu.',
          'Udržiavať produkty a materiály v obehu.',
          'Regenerovať prírodné systémy.'
        ]
      },
      {
        title: '2. Kľúčové strategické prístupy',
        content: 'Cirkulárny dizajn nie je jedna technika. Je to súbor návrhových stratégií:',
        list: [
          'Dizajn pre dlhú životnosť (robustné materiály, nadčasový dizajn)',
          'Dizajn pre opraviteľnosť (dostupnosť dielov, jednoduchá demontáž)',
          'Dizajn pre demontáž (skrutky namiesto lepidla, reverzibilné spoje)',
          'Dizajn pre repasiu (jadro produktu sa vracia výrobcovi)',
          'Dizajn pre recyklovateľnosť (čisté materiálové toky)',
          'Biznis modelová cirkularita (Produkt ako služba, leasing, spätný odber)'
        ]
      },
      {
        title: '3. Rozdiel medzi recykláciou a cirkulárnym dizajnom',
        content: 'Recyklácia je posledná možnosť. Cirkulárny dizajn sa snaží zachovať hodnotu čo najvyššie v hierarchii:',
        list: [
          '1. Refuse (odmietnuť nepotrebné)',
          '2. Reduce (znižovať spotrebu)',
          '3. Reuse (znovu použiť)',
          '4. Repair (opraviť)',
          '5. Refurbish (repasovať)',
          '6. Remanufacture (znovu vyrobiť z častí)',
          '7. Recycle (recyklovať materiál)'
        ]
      },
      {
        title: '4. Prečo je to strategické, nie len ekologické',
        content: 'Pre firmu prináša:',
        list: [
          'Nižšiu materiálovú závislosť',
          'Stabilnejšie nákladové štruktúry',
          'Nové príjmové modely (servis, predplatné)',
          'Vyššiu lojalitu zákazníkov',
          'Regulatórnu pripravenosť (ESG, EÚ smernice)'
        ]
      },
      {
        title: '5. Komplexná realizačná metodika',
        content: 'Presný implementačný postup pre firmu:',
        list: [
          'FÁZA 1: STRATEGICKÁ DIAGNOSTIKA (Analýza životného cyklu, Identifikácia materiálových tokov)',
          'FÁZA 2: IDENTIFIKÁCIA PRÍLEŽITOSTÍ (Opraviteľnosť, Demontáž, Spätný odber)',
          'FÁZA 3: REDIZAJN PRODUKTU (Minimalizácia materiálov, Modularita, Odstránenie lepidiel)',
          'FÁZA 4: BIZNIS MODELOVÁ INOVÁCIA (Produkt ako služba, Buy-back program)',
          'FÁZA 5: PILOTNÝ PROJEKT (Výber produktu, Testovanie, Metriky)',
          'FÁZA 6: ŠKÁLOVANIE (Úprava dizajnu a dodávateľského reťazca)'
        ]
      },
      {
        title: '6. Kritické faktory úspechu',
        content: 'Aby bola transformácia úspešná:',
        list: [
          'Strategické rozhodnutie vedenia',
          'Zapojenie vývoja, výroby a obchodu',
          'Úprava biznis modelu',
          'Zmena myslenia (produkt ≠ jednorazový predaj)'
        ]
      },
      {
        title: '7. Najčastejšie chyby',
        content: 'Čomu sa vyhnúť:',
        list: [
          'Zamerať sa len na recykláciu',
          'Ignorovať biznis model',
          'Neriešiť spätný zber',
          'Nezmeniť dizajn produktu',
          'Podceniť logistiku'
        ]
      },
      {
        title: '8. Praktický scenár pre CEO',
        content: 'Ako postupovať vo výrobnej firme:',
        list: [
          'Zadaj interný audit materiálov',
          'Zvolaj workshop dizajnér + výroba + servis',
          'Vyber jeden produkt s vysokým objemom',
          'Zameraj sa na opraviteľnosť',
          'Spusť pilot spätného zberu',
          'Otestuj repasovaný produkt',
          'Zmeraj ekonomiku',
          'Až potom škáluj'
        ]
      }
    ]
  },
  'toc': {
    id: 'toc',
    title: 'Teória obmedzení (TOC)',
    subtitle: 'Manažérska filozofia zameraná na identifikáciu a riadenie úzkeho hrdla systému',
    intro: 'Teória obmedzení (Theory of Constraints – TOC) predstavuje ucelenú manažérsku filozofiu, ktorú predstavil fyzik Eliyahu M. Goldratt. Vychádza z predpokladu, že výkonnosť každého systému (firmy, projektu, výroby) je limitovaná veľmi malým počtom obmedzení – často len jedným. Organizácia je ako reťaz a jej pevnosť je určená výhradne jej najslabším článkom. TOC tvrdí, že akákoľvek snaha o optimalizáciu v miestach, ktoré nie sú úzkym hrdlom, je len ilúziou zlepšenia a často vedie k plytvaniu. Cieľom nie je "byť efektívny všade", ale maximalizovať prietok (Throughput) celého systému riadením tohto obmedzenia.',
    sections: [
      {
        title: 'Filozofické základy TOC',
        content: 'TOC stojí na troch fundamentálnych myšlienkach:',
        list: [
          '1. Každý systém má cieľ: Zvyčajne generovať zisk teraz aj v budúcnosti. Akcie sa posudzujú podľa toho, či približujú firmu k tomuto cieľu.',
          '2. Systém má vždy aspoň jedno obmedzenie: Ak by ho nemal, jeho výkon by bol nekonečný. Obmedzenie môže byť fyzické (stroj, ľudia) alebo politické (pravidlá, paradigmy).',
          '3. Lokálna optimalizácia ≠ Globálna optimalizácia: Vylepšovanie "ne-úzkych" hrdiel nezvyšuje výkon celku, len zvyšuje zásoby a prevádzkové náklady.'
        ]
      },
      {
        title: 'Päť krokov zamerania (The 5 Focusing Steps)',
        content: 'Jadro metódy tvorí cyklus neustáleho zlepšovania (POOGI - Process Of On-Going Improvement):',
        list: [
          '1. Identifikujte obmedzenie (Identify): Nájdite "úzke hrdlo", ktoré brzdí celý systém. Kde sa hromadí práca? Kde sa čaká?',
          '2. Vyťažte obmedzenie (Exploit): Získajte z obmedzenia maximum bez investícií. Odstráňte prestoje, zabezpečte, aby pracovalo len na prioritách, neplytvajte jeho časom.',
          '3. Podriaďte všetko ostatné (Subordinate): Prispôsobte tempo zvyšku firmy tempu obmedzenia. Ne-úzkym hrdlám dovoľte "stáť", ak nemajú prácu pre úzke hrdlo. Zabráňte nadvýrobe.',
          '4. Povzneste obmedzenie (Elevate): Ak predchádzajúce kroky nestačia, zvýšte kapacitu investíciami (nový stroj, viac ľudí, outsourcing).',
          '5. Pozor na zotrvačnosť (Repeat): Ak sa obmedzenie odstráni alebo presunie inam, vráťte sa na krok 1. Nenechajte staré pravidlá (z čias starého obmedzenia) brzdiť nový systém.'
        ]
      },
      {
        title: 'Metriky TOC (Prietokové účtovníctvo)',
        content: 'TOC nahrádza tradičné nákladové účtovníctvo troma globálnymi metrikami:',
        list: [
          'Throughput (Prietok - T): Rýchlosť, akou systém generuje peniaze cez predaj. (Predajná cena mínus Variabilné náklady). Cieľ: Maximalizovať.',
          'Inventory (Zásoby/Investície - I): Všetky peniaze viazané v systéme, ktoré chce firma premeniť na predaj (sklady, stroje, budovy). Cieľ: Minimalizovať.',
          'Operating Expense (Prevádzkové náklady - OE): Všetky peniaze, ktoré systém minie na premenu zásob na prietok (mzdy, energie, nájom). Cieľ: Minimalizovať.'
        ]
      },
      {
        title: 'Nástroje riadenia toku: Drum-Buffer-Rope',
        content: 'Logistický mechanizmus na riadenie výroby a procesov:',
        list: [
          'Drum (Bubon): Obmedzenie udáva takt (rytmus) celej výrobe.',
          'Buffer (Zásobník): Časová alebo fyzická rezerva umiestnená pred obmedzením, aby ho chránila pred výpadkami (Murphyho zákonmi) v predchádzajúcich procesoch.',
          'Rope (Lano): Komunikačný signál, ktorý uvoľňuje materiál do výroby len vtedy, keď ho obmedzenie stíha spracovať. Zabraňuje hromadeniu zásob.'
        ]
      },
      {
        title: 'Myšlienkové procesy (Thinking Processes)',
        content: 'Sada logických nástrojov na riešenie komplexných problémov a konfliktov:',
        list: [
          'Strom súčasnej reality (CRT): Hľadá koreňovú príčinu (Root Cause) množstva symptómov.',
          'Konfliktný mrak (Evaporating Cloud): Rieši dilemy a konflikty bez kompromisov, hľadaním chybných predpokladov.',
          'Strom budúcej reality (FRT): Testuje, či navrhnuté riešenie prinesie želané výsledky a nespôsobí nové problémy.'
        ]
      },
      {
        title: 'Detailný postup implementácie',
        content: 'Postupujte systematicky podľa týchto fáz:',
        list: [
          'Fáza 1: Definovanie cieľa - Jasne určite, čo je cieľom systému (napr. zvýšiť zisk, prietok).',
          'Fáza 2: Identifikácia obmedzenia - Zmapujte proces, nájdite miesto s najväčšími radmi alebo najdlhším časom spracovania.',
          'Fáza 3: Maximálne využitie - Zabezpečte, aby obmedzenie pracovalo non-stop (obedné prestávky, zmennosť) a len na veciach, ktoré sa predajú.',
          'Fáza 4: Podriadenie systému - Zmeňte pravidlá a KPI. Prestaňte odmeňovať lokálnu efektivitu inde. Zaveďte DBR.',
          'Fáza 5: Zvýšenie kapacity - Až teraz investujte do technológií alebo ľudí na úzkom hrdle.',
          'Fáza 6: Re-evaluácia - Sledujte, či sa obmedzenie nepresunulo (napr. z výroby na trh).'
        ]
      },
      {
        title: 'Kedy použiť TOC',
        content: 'TOC je najúčinnejšia v situáciách:',
        list: [
          'Keď firma stagnuje napriek snahám o optimalizáciu.',
          'Keď sa zvyšujú náklady, ale zisk nerastie.',
          'Keď je v systéme chaos, meškajúce objednávky a preťažení ľudia.',
          'Keď potrebujete rýchle a merateľné výsledky bez obrovských investícií na začiatku.'
        ]
      }
    ]
  }
};

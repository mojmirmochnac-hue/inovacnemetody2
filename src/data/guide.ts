import { InnovationMethod } from './methods';

export interface GuideStep {
  methodId: string;
  methodName: string;
  description: string;
}

export interface GuideQuestion {
  id: string;
  question: string;
  subtext?: string;
  recommendedMethods: GuideStep[];
}

export const guideQuestions: GuideQuestion[] = [
  {
    id: 'customer-value',
    question: 'Kto je náš zákazník a aký problém nám v skutočnosti platí riešiť?',
    subtext: 'Máme produkt/službu, ale trh to nekupuje (alebo odchádza). Čo je skutočná hodnota pre zákazníka a čo máme zmeniť?',
    recommendedMethods: [
      {
        methodId: 'jtbd',
        methodName: 'Jobs to be Done (JTBD)',
        description: 'Vyberte konkrétnu situáciu nákupu/odchodu (ideálne posledných 30–90 dní) a robte rozhovory orientované na „čo sa dialo pred rozhodnutím“. Pomenujte „job“ ako pokrok, nie produkt. Zachyťte funkčné, sociálne a emočné „sily“. Formulujte „job statement“ a odvoďte kritériá úspechu.'
      },
      {
        methodId: 'odi',
        methodName: 'Outcome-Driven Innovation (ODI)',
        description: 'Presne definujte trh ako „skupinu ľudí, ktorí sa snažia vykonať job“. Zmapujte kroky jobu a k nim „outcomes“ (merateľné výsledky). Zmerajte dôležitosť a mieru spokojnosti. Vypočítajte „opportunity“ a vyberte strategické priority (najviac „underserved“ outcomes).'
      },
      {
        methodId: 'design-thinking',
        methodName: 'Design Thinking',
        description: 'Postupujte režimami Empathize → Define → Ideate → Prototype → Test. Začnite terénnym poznaním používateľa (pozorovanie/rozhovor) a skončite prototypom testovaným s ľuďmi.'
      },
      {
        methodId: 'kano',
        methodName: 'Kano model',
        description: 'Spíšte kandidátne vlastnosti ponuky a cez Kano dotazník ich roztrieďte na „must-be“, „performance/wants“ a „delighters/wows“, aby ste vedeli, čo je vstupenka do hry vs. čo tvorí diferenciáciu.'
      },
      {
        methodId: 'qfd',
        methodName: 'Quality Function Deployment (QFD)',
        description: 'Preložte „hlas zákazníka“ do parametrov riešenia cez House of Quality – veľmi užitočné, keď potrebujete zosúladiť obchod, vývoj a výrobu na tom, čo presne je dôležité.'
      },
      {
        methodId: 'bmc-vpc',
        methodName: 'Value Proposition Canvas',
        description: 'Zmapujte Customer Jobs–Pains–Gains a následne navrhnite Products/Services–Pain Relievers–Gain Creators. Cieľom je nájsť „fit“ a priority.'
      }
    ]
  },
  {
    id: 'validation',
    question: 'Ako akcelerovať vývoj a bezpečne validovať nápady v neistote?',
    subtext: 'Máme nápad, ale nevieme, či to trh chce – ako to overiť rýchlo a lacno?',
    recommendedMethods: [
      {
        methodId: 'lean-startup',
        methodName: 'Lean Startup',
        description: 'Sformulujte hypotézy (o probléme, segmente, kanáli, ochote platiť), postavte MVP a prejdite cyklom Build-Measure-Learn. Rozhodujte „pivot alebo persevere“ podľa dôkazov.'
      },
      {
        methodId: 'innovation-accounting',
        methodName: 'Innovation Accounting',
        description: 'Nastavte metriky, ktoré merajú učenie a trakciu (napr. aktivácia, retencia, konverzia) a sledujte, či iterácie zlepšujú „engine of growth“.'
      },
      {
        methodId: 'design-sprint',
        methodName: 'Design Sprint',
        description: 'Za 5 dní prejdite mapovanie problému → skice riešení → rozhodnutie → prototyp → test s ~5 používateľmi. Výstup je dôkaz, či smer dáva zmysel.'
      },
      {
        methodId: 'design-sprint-2',
        methodName: 'Design Sprint 2.0',
        description: 'Skrátená 4-dňová verzia. Optimalizuje cvičenia a zachováva to podstatné: rozhodovanie, prototyp, test.'
      },
      {
        methodId: 'bmc-vpc',
        methodName: 'Business Model Canvas',
        description: 'Zmapujte 9 blokov modelu (segmenty, hodnota, kanály, vzťahy, príjmy, zdroje, aktivity, partneri, náklady) a označte najrizikovejšie predpoklady na test.'
      }
    ]
  },
  {
    id: 'creativity',
    question: 'Ako generovať prelomové myšlienky, keď tím uviazol?',
    subtext: 'V tíme cítime stagnáciu. Potrebujeme veľa nápadov, ale zároveň systém, aby sme z nich vybrali použiteľné koncepty.',
    recommendedMethods: [
      {
        methodId: 'brainstorming',
        methodName: 'Brainstorming',
        description: 'Jasne definujte problém a pravidlá (odložiť kritiku, množstvo, „wild“, kombinovanie). Rýchle generovanie → až potom selekcia a rozpracovanie.'
      },
      {
        methodId: 'brainwriting',
        methodName: 'Brainwriting (6-3-5)',
        description: '6 ľudí píše 3 nápady v 5 min → posúva ďalej a nadväzuje → po 6 kolách máte 108 nápadov. Vhodné pri „tichých tímoch“ alebo dominancii jedného hlasu.'
      },
      {
        methodId: 'mind-mapping',
        methodName: 'Mind Mapping',
        description: 'Dajte do stredu mapy jadro problému. Vytvorte hlavné vetvy (témy) a podvetvy (fakty, príčiny, nápady). Z mapy vyrežte rozhodovacie kritériá a backlog.'
      },
      {
        methodId: 'six-thinking-hats',
        methodName: 'Six Thinking Hats',
        description: 'Zaveďte „paralelné myslenie“ – všetci v tíme súčasne prechádzajú jedným klobúkom (fakty, emócie, riziká, prínosy, kreativita, riadenie). Zaznamenajte výstupy oddelene a urobte syntézu.'
      },
      {
        methodId: 'scamper',
        methodName: 'SCAMPER',
        description: 'Vezmite existujúcu ponuku a systematicky generujte zlepšenia cez Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.'
      },
      {
        methodId: 'morphological-analysis',
        methodName: 'Morfologická analýza',
        description: 'Rozložte problém na parametre/dimenzie. Ku každej dimenzii vypíšte možné hodnoty. Vytvorte „morfologický box“ a hľadajte nové kombinácie.'
      },
      {
        methodId: 'synektika',
        methodName: 'Synektika',
        description: 'Vytvárajte analogické posuny (osobná analógia, priama analógia, symbolická). Vráťte analógie späť do konkrétnych riešení.'
      },
      {
        methodId: 'lateral-thinking',
        methodName: 'Laterálne myslenie',
        description: 'Zámerne sa odpojte od „jednej logickej cesty“. Používajte provokácie a presuny perspektívy, potom sa vráťte k realite cez testovateľné koncepty.'
      }
    ]
  },
  {
    id: 'technical-limits',
    question: 'Aké metódy na prekonanie technologických limitov?',
    subtext: 'Máme tvrdý technický/procesný problém – skúšali sme všetko, no stále to nejde.',
    recommendedMethods: [
      {
        methodId: 'tri-z',
        methodName: 'TRIZ',
        description: 'Preložte problém na „rozpor“ (čo sa zlepšuje a čo sa tým zhoršuje). Zvoľte nástroj TRIZ podľa typu rozporu (napr. 40 princípov). Generujte riešenia bez kompromisu.'
      },
      {
        methodId: 'sit',
        methodName: 'Systematic Inventive Thinking (SIT)',
        description: 'Definujte „closed world“ (zdroje v systéme). Zvoľte jednu z 5 šablón (subtraction, multiplication, division, task unification, attribute dependency). Vytvorte „virtuálny produkt“ a hľadajte jeho využitie.'
      },
      {
        methodId: 'creax',
        methodName: 'Creax',
        description: 'Opíšte systém ako súbor vlastností. Použite „Directed Variation“ na systematický prehľad možností zmeny. Pri každej variácii sledujte, či rieši definovaný rozpor.'
      },
      {
        methodId: 'wois',
        methodName: 'WOIS',
        description: 'Formulujte kľúčové protirečenia. Pre každé popíšte, čo presne bráni posunu. Generujte riešenia zámerne „cez protirečenie“ (odstránením príčiny napätia).'
      },
      {
        methodId: 'bionika',
        methodName: 'Bionika (Biomimikry)',
        description: 'Preformulujte zadanie na funkciu (napr. „znížiť trenie“). Nájdite prírodné stratégie pre túto funkciu. Abstrahujte princíp a preložte ho do návrhu.'
      }
    ]
  },
  {
    id: 'processes',
    question: 'Ako reštrukturalizovať procesy a eliminovať plytvanie?',
    subtext: 'Máme zákazníkov, ale firma to nevie dodávať spoľahlivo: termíny, kvalita, náklady, preťaženie.',
    recommendedMethods: [
      {
        methodId: 'toc',
        methodName: 'Theory of Constraints (TOC)',
        description: 'Identifikujte hlavné obmedzenie systému (constraint). Maximalizujte jeho využitie (Exploit). Prispôsobte zvyšok systému tomuto obmedzeniu (Subordinate). Až potom investujte do zvýšenia kapacity (Elevate).'
      },
      {
        methodId: 'ccpm',
        methodName: 'Critical Chain Project Management',
        description: 'Zostavte plán so zohľadnením zdrojov. Identifikujte „critical chain“. Zaveďte projektový buffer a feeding buffery. Obmedzte multitasking a riaďte priority podľa spotreby buffra.'
      },
      {
        methodId: 'six-sigma',
        methodName: 'Six Sigma (DMAIC)',
        description: 'Define (problém a požiadavky), Measure (výkon a variabilitu), Analyze (koreňové príčiny), Improve (riešenia), Control (kontrola a štandard).'
      },
      {
        methodId: 'pdca',
        methodName: 'PDCA',
        description: 'Plan (cieľ a hypotéza), Do (zmena v malom), Check (vyhodnotenie), Act (štandardizácia alebo úprava). Používajte ako rytmus zlepšovania.'
      },
      {
        methodId: 'fmea',
        methodName: 'FMEA',
        description: 'Definujte predmet analýzy. Identifikujte možné režimy zlyhania a ich účinky. Identifikujte príčiny a kontroly. Prioritizujte podľa RPN a naplánujte opatrenia.'
      },
      {
        methodId: 'value-analysis',
        methodName: 'Hodnotová analýza',
        description: 'Urobte funkčnú analýzu: čo musí riešenie „robiť“. Zistite náklady v životnom cykle. Generujte alternatívy pre dosiahnutie funkcie s nižšími nákladmi.'
      }
    ]
  },
  {
    id: 'strategy',
    question: 'Ako strategicky navigovať v neistote?',
    subtext: 'Nevieme predpovedať budúcnosť, máme obmedzené zdroje – ako sa pohnúť dopredu bez paralýzy?',
    recommendedMethods: [
      {
        methodId: 'effectuation',
        methodName: 'Effectuation Theory',
        description: 'Začnite s tým, čo máte (Bird-in-hand). Definujte prijateľnú stratu (Affordable loss). Hľadajte záväzky partnerov (Crazy quilt). Neočakávané zmeny berte ako vstupy (Lemonade). Zamerajte sa na to, čo viete ovplyvniť (Pilot-in-the-plane).'
      },
      {
        methodId: 'scenario-planning',
        methodName: 'Scenárové plánovanie',
        description: 'Vyberte kľúčové neistoty. Vytvorte 2–3 konzistentné scenáre. Urobte test stratégie a signály včasného varovania. Pripravte opcie.'
      },
      {
        methodId: 'delphi',
        methodName: 'Delphi metóda',
        description: 'Definujte otázky. Vyberte panel expertov. Spravte anonymné kolo odpovedí. Zhrňte a dajte spätnú väzbu. Opakujte, kým sa názory nestabilizujú.'
      },
      {
        methodId: 'speculative-design',
        methodName: 'Speculative Design',
        description: 'Vytvorte „what-if“ hypotézy o budúcnosti. Premeňte ich na artefakty/scenáre. Použite ich na diskusiu so stakeholdermi a vytiahnite implikácie pre dnešok.'
      },
      {
        methodId: 'open-innovation',
        methodName: 'Open Innovation',
        description: 'Stanovte „čo potrebujeme zvonka“ a „čo vieme pustiť von“. Nastavte proces vyhľadávania partnerov, ošetrite IP a merajte dopad.'
      },
      {
        methodId: 'ambidexterity',
        methodName: 'Organizačná ambidextria',
        description: 'Oddeľte „exploitation“ (efektivita, inkrementy) a „exploration“ (nové trhy). Nastavte rozdielne metriky a mechanizmy pre prenos poznania.'
      }
    ]
  },
  {
    id: 'trends',
    question: 'Ako zakomponovať AI a udržateľnosť?',
    subtext: 'Chceme inovovať tak, aby sme znížili odpad, predĺžili životnosť a využili AI.',
    recommendedMethods: [
      {
        methodId: 'circular-design',
        methodName: 'Cirkulárny dizajn',
        description: 'Preložte zadanie na princípy cirkulárnej ekonomiky. Zmapujte tok materiálov. Navrhnite intervenčné páky (opraviteľnosť, modularita). Navrhnite nový systém a otestujte pilot.'
      },
      {
        methodId: 'ai-innovation',
        methodName: 'AI-Powered Innovation',
        description: 'Vyberte fázy, kde AI prináša zisk (prieskum, varianty, prototypovanie). Nastavte pravidlá pre dáta. Kombinujte AI s ľudskými metódami. Merajte prínos.'
      }
    ]
  }
];

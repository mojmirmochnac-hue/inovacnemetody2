export interface DiagnosticQuestion {
  id: string;
  text: string;
  weights: Record<string, number>;
}

export interface DiagnosticSection {
  id: string;
  title: string;
  questions: DiagnosticQuestion[];
}

export const diagnosticTest: DiagnosticSection[] = [
  {
    "id": "A",
    "title": "Časť A: Rýchle brány problému",
    "questions": [
      {
        "id": "A1",
        "text": "Potrebujeme lepšie pochopiť, prečo si zákazník vyberá alebo nevyberá naše riešenie.",
        "weights": { "jtbd": 3, "odi": 2, "design-thinking": 2, "bmc-vpc": 2 }
      },
      {
        "id": "A2",
        "text": "Máme problém s tým, že zákazník síce hovorí, čo chce, ale nevieme, čo je pre neho skutočne dôležité.",
        "weights": { "jtbd": 3, "kano": 2, "odi": 2, "design-thinking": 2 }
      },
      {
        "id": "A3",
        "text": "Potrebujeme preložiť hlas zákazníka do konkrétnych vlastností produktu, služby alebo procesu.",
        "weights": { "qfd": 3, "odi": 2, "kano": 2, "bmc-vpc": 2 }
      },
      {
        "id": "A4",
        "text": "Máme nápad, ale nevieme, či ho trh reálne chce.",
        "weights": { "lean-startup": 3, "design-sprint": 3, "design-sprint-2": 2, "innovation-accounting": 2 }
      },
      {
        "id": "A5",
        "text": "Potrebujeme rýchlo overiť konkrétnu hypotézu s používateľmi.",
        "weights": { "design-sprint": 3, "design-sprint-2": 3, "lean-startup": 2, "design-sprint-3": 2 }
      },
      {
        "id": "A6",
        "text": "Máme veľa nápadov, ale nevieme ich štruktúrovane vytvoriť, rozšíriť alebo porovnať.",
        "weights": { "brainstorming": 2, "brainwriting": 2, "scamper": 2, "morphological-analysis": 2, "six-thinking-hats": 1 }
      },
      {
        "id": "A7",
        "text": "Máme technický, produktový alebo systémový problém, v ktorom zlepšenie jednej vlastnosti zhoršuje inú vlastnosť.",
        "weights": { "tri-z": 3, "wois": 3, "creax": 2, "systematic-innovation": 2, "sit": 2 }
      },
      {
        "id": "A8",
        "text": "Potrebujeme zlepšiť proces, odstrániť plytvanie, chyby, zdržania alebo kolísanie výkonu.",
        "weights": { "six-sigma": 3, "pdca": 3, "toc": 2, "fmea": 2, "value-analysis": 2 }
      },
      {
        "id": "A9",
        "text": "Firma má úzke miesto, ktoré brzdí celý výkon systému.",
        "weights": { "toc": 3, "ccpm": 2, "pdca": 2, "six-sigma": 1 }
      },
      {
        "id": "A10",
        "text": "Máme problém s oneskorenými projektmi, preťaženými ľuďmi alebo zlým riadením kapacít.",
        "weights": { "ccpm": 3, "toc": 2, "stage-gate": 1, "pdca": 1 }
      },
      {
        "id": "A11",
        "text": "Riešime strategickú neistotu, budúcnosť trhu, nové technológie alebo možné scenáre vývoja.",
        "weights": { "scenario-planning": 3, "speculative-design": 3, "delphi": 2, "ambidexterity": 2 }
      },
      {
        "id": "A12",
        "text": "Chceme inovovať s pomocou partnerov, startupov, univerzít, zákazníkov alebo externých expertov.",
        "weights": { "open-innovation": 3, "delphi": 2, "ai-innovation": 1, "stage-gate": 1 }
      },
      {
        "id": "A13",
        "text": "Chceme znížiť environmentálnu záťaž, odpad, materiálovú náročnosť alebo navrhnúť cirkulárne riešenie.",
        "weights": { "circular-design": 3, "value-analysis": 2, "bionika": 2, "systematic-innovation": 1 }
      },
      {
        "id": "A14",
        "text": "Chceme systematicky riadiť portfólio inovačných projektov a rozhodovať, čo zastaviť a čo financovať.",
        "weights": { "stage-gate": 3, "innovation-accounting": 2, "ambidexterity": 2, "scenario-planning": 1 }
      },
      {
        "id": "A15",
        "text": "Chceme využiť AI na generovanie, modelovanie, testovanie alebo zrýchlenie inovácie.",
        "weights": { "ai-innovation": 3, "design-sprint-3": 3, "design-sprint-2": 1, "innovation-accounting": 1 }
      }
    ]
  },
  {
    "id": "B",
    "title": "Časť B: Zákazník, hodnota a trh",
    "questions": [
      {
        "id": "B1",
        "text": "Nevieme dostatočne presne pomenovať „prácu“, ktorú sa zákazník snaží vyriešiť.",
        "weights": { "jtbd": 3, "bmc-vpc": 2, "design-thinking": 2 }
      },
      {
        "id": "B2",
        "text": "Potrebujeme pochopiť funkčné, emocionálne a sociálne dôvody rozhodovania zákazníka.",
        "weights": { "jtbd": 3, "design-thinking": 2, "kano": 1 }
      },
      {
        "id": "B3",
        "text": "Zákazníci používajú rôzne obchádzky, náhradné riešenia alebo improvizácie.",
        "weights": { "jtbd": 3, "odi": 2, "design-thinking": 2 }
      },
      {
        "id": "B4",
        "text": "Máme veľa zákazníckych požiadaviek, ale nevieme ich zoradiť podľa dôležitosti.",
        "weights": { "odi": 3, "kano": 2, "qfd": 2 }
      },
      {
        "id": "B5",
        "text": "Potrebujeme kvantitatívne zmerať, ktoré zákaznícke výsledky sú nedostatočne obslúžené.",
        "weights": { "odi": 3, "innovation-accounting": 2, "qfd": 2 }
      },
      {
        "id": "B6",
        "text": "Potrebujeme zistiť, ktoré vlastnosti sú samozrejmosť, ktoré zvyšujú spokojnosť a ktoré zákazníka nadchnú.",
        "weights": { "kano": 3, "qfd": 2, "odi": 1 }
      },
      {
        "id": "B7",
        "text": "Potrebujeme navrhnúť hodnotovú ponuku pre konkrétny segment zákazníkov.",
        "weights": { "bmc-vpc": 3, "jtbd": 2, "design-thinking": 2 }
      },
      {
        "id": "B8",
        "text": "Potrebujeme prepojiť hodnotovú ponuku, kanály, príjmy, náklady a partnerov do celého obchodného modelu.",
        "weights": { "bmc-vpc": 5, "effectuation": 1 }
      },
      {
        "id": "B9",
        "text": "Zákazník síce prejavuje záujem, ale nevieme, či bude reálne platiť.",
        "weights": { "lean-startup": 3, "innovation-accounting": 2, "bmc-vpc": 2 }
      },
      {
        "id": "B10",
        "text": "Potrebujeme pochopiť zákazníka priamo v jeho kontexte, pozorovaním alebo rozhovormi.",
        "weights": { "design-thinking": 3, "jtbd": 2, "bmc-vpc": 1 }
      }
    ]
  },
  {
    "id": "C",
    "title": "Časť C: Validácia, experimenty a neistota",
    "questions": [
      {
        "id": "C1",
        "text": "Najväčšie riziko je, že vytvoríme riešenie, ktoré nikto nebude používať alebo kupovať.",
        "weights": { "lean-startup": 3, "design-sprint": 2, "innovation-accounting": 2 }
      },
      {
        "id": "C2",
        "text": "Vieme pomenovať kľúčové hypotézy, ktoré musíme overiť pred väčšou investíciou.",
        "weights": { "lean-startup": 3, "innovation-accounting": 3, "design-sprint": 1 }
      },
      {
        "id": "C3",
        "text": "Potrebujeme MVP alebo jednoduchý experiment namiesto dlhého vývoja.",
        "weights": { "lean-startup": 3, "design-sprint-2": 2, "design-sprint-3": 1 }
      },
      {
        "id": "C4",
        "text": "Máme 4 až 5 dní a vieme dať dokopy rozhodovací tím na intenzívne testovanie riešenia.",
        "weights": { "design-sprint": 3, "design-sprint-2": 3 }
      },
      {
        "id": "C5",
        "text": "Potrebujeme rýchlo vytvoriť prototyp a otestovať ho s reálnymi používateľmi.",
        "weights": { "design-sprint": 3, "design-sprint-2": 3, "lean-startup": 2 }
      },
      {
        "id": "C6",
        "text": "Potrebujeme rýchlejší sprint s menším časovým nárokom než klasický päťdňový sprint.",
        "weights": { "design-sprint-2": 3, "design-sprint-3": 2 }
      },
      {
        "id": "C7",
        "text": "Máme veľa dát, ale chýba nám systém metrík, ktorý rozlišuje skutočný pokrok od márnivých metrík.",
        "weights": { "innovation-accounting": 3, "lean-startup": 2, "stage-gate": 1 }
      },
      {
        "id": "C8",
        "text": "Potrebujeme rozhodnúť, či pokračovať, zmeniť smer alebo projekt zastaviť.",
        "weights": { "innovation-accounting": 3, "lean-startup": 2, "stage-gate": 2 }
      },
      {
        "id": "C9",
        "text": "Inovácia je v extrémnej neistote a nevieme spoľahlivo naplánovať cieľový stav.",
        "weights": { "effectuation": 3, "lean-startup": 2, "speculative-design": 2 }
      },
      {
        "id": "C10",
        "text": "Máme obmedzené zdroje, ale máme kontakty, know-how, skúsenosti alebo partnerov, s ktorými sa dá začať.",
        "weights": { "effectuation": 3, "open-innovation": 2, "bmc-vpc": 1 }
      }
    ]
  },
  {
    "id": "D",
    "title": "Časť D: Tvorba nápadov a riešenie problémov",
    "questions": [
      {
        "id": "D1",
        "text": "Potrebujeme v krátkom čase vytvoriť veľké množstvo nápadov.",
        "weights": { "brainstorming": 3, "brainwriting": 3, "mind-mapping": 1 }
      },
      {
        "id": "D2",
        "text": "V tíme sú dominantní ľudia a potrebujeme, aby prispeli aj tichší členovia.",
        "weights": { "brainwriting": 3, "six-thinking-hats": 2, "design-thinking": 1 }
      },
      {
        "id": "D3",
        "text": "Potrebujeme štruktúrovane upraviť existujúci produkt, službu alebo proces.",
        "weights": { "scamper": 3, "sit": 2, "value-analysis": 1 }
      },
      {
        "id": "D4",
        "text": "Máme existujúce riešenie a chceme z neho vytvoriť nové varianty bez začínania od nuly.",
        "weights": { "scamper": 3, "sit": 3, "systematic-innovation": 1 }
      },
      {
        "id": "D5",
        "text": "Potrebujeme rozložiť komplexný problém na dimenzie a systematicky kombinovať možnosti.",
        "weights": { "morphological-analysis": 3, "mind-mapping": 2, "tri-z": 1 }
      },
      {
        "id": "D6",
        "text": "Potrebujeme vizuálne usporiadať súvislosti, príčiny, možnosti a väzby.",
        "weights": { "mind-mapping": 3, "design-thinking": 1, "six-thinking-hats": 1 }
      },
      {
        "id": "D7",
        "text": "Tím uviazol v zaužívaných vzorcoch myslenia.",
        "weights": { "lateral-thinking": 3, "synektika": 2, "brainstorming": 1 }
      },
      {
        "id": "D8",
        "text": "Potrebujeme zámerne použiť provokácie, náhodné vstupy alebo zmenu perspektívy.",
        "weights": { "lateral-thinking": 3, "synektika": 2, "six-thinking-hats": 1 }
      },
      {
        "id": "D9",
        "text": "Potrebujeme tvoriť riešenia cez analógie, metafory alebo vzdialené porovnania.",
        "weights": { "synektika": 3, "bionika": 2, "lateral-thinking": 2 }
      },
      {
        "id": "D10",
        "text": "Chceme sa inšpirovať prírodou, biologickými systémami alebo evolučnými princípmi.",
        "weights": { "bionika": 3, "circular-design": 2, "synektika": 1 }
      },
      {
        "id": "D11",
        "text": "Problém obsahuje technické alebo systémové protirečenie.",
        "weights": { "tri-z": 3, "wois": 3, "creax": 2 }
      },
      {
        "id": "D12",
        "text": "Potrebujeme systematickú databázu princípov, vzorov alebo patentových analógií.",
        "weights": { "creax": 3, "tri-z": 2, "wois": 2 }
      },
      {
        "id": "D13",
        "text": "Potrebujeme riešenie hľadať „vo vnútri boxu“ pomocou existujúcich zdrojov a obmedzení.",
        "weights": { "sit": 3, "systematic-innovation": 2, "effectuation": 1 }
      },
      {
        "id": "D14",
        "text": "Chceme obmedzenia použiť ako tvorivý katalyzátor, nie ako prekážku.",
        "weights": { "systematic-innovation": 3, "sit": 2, "wois": 2 }
      },
      {
        "id": "D15",
        "text": "Tím potrebuje oddeliť fakty, emócie, riziká, príležitosti, kreativitu a riadenie diskusie.",
        "weights": { "six-thinking-hats": 3, "design-thinking": 1, "stage-gate": 1 }
      }
    ]
  },
  {
    "id": "E",
    "title": "Časť E: Procesy, kvalita, náklady a riziká",
    "questions": [
      {
        "id": "E1",
        "text": "Výkon firmy brzdí jedno hlavné úzke miesto.",
        "weights": { "toc": 3, "pdca": 1, "six-sigma": 1 }
      },
      {
        "id": "E2",
        "text": "Zlepšenie lokálnych častí systému neprináša zlepšenie celého výsledku.",
        "weights": { "toc": 3, "ccpm": 2, "systematic-innovation": 1 }
      },
      {
        "id": "E3",
        "text": "Potrebujeme znížiť variabilitu, chyby alebo defekty v procese.",
        "weights": { "six-sigma": 3, "fmea": 2, "pdca": 2 }
      },
      {
        "id": "E4",
        "text": "Máme dáta o procese a vieme merať chyby, čas, náklady alebo kvalitu.",
        "weights": { "six-sigma": 3, "pdca": 2, "innovation-accounting": 1 }
      },
      {
        "id": "E5",
        "text": "Potrebujeme priebežné malé zlepšovanie v opakovaných cykloch.",
        "weights": { "pdca": 3, "six-sigma": 1, "toc": 1 }
      },
      {
        "id": "E6",
        "text": "Potrebujeme preventívne identifikovať možné poruchy ešte pred spustením riešenia.",
        "weights": { "fmea": 3, "stage-gate": 2, "six-sigma": 1 }
      },
      {
        "id": "E7",
        "text": "Potrebujeme zoradiť riziká podľa závažnosti, výskytu a odhaliteľnosti.",
        "weights": { "fmea": 3, "six-sigma": 2, "stage-gate": 1 }
      },
      {
        "id": "E8",
        "text": "Potrebujeme znížiť náklady bez zhoršenia hodnoty pre zákazníka.",
        "weights": { "value-analysis": 3, "six-sigma": 2, "circular-design": 1 }
      },
      {
        "id": "E9",
        "text": "Produkt alebo služba je príliš drahá, komplikovaná alebo obsahuje nepotrebné funkcie.",
        "weights": { "value-analysis": 3, "kano": 2, "scamper": 1 }
      },
      {
        "id": "E10",
        "text": "Potrebujeme prepojiť zákaznícke požiadavky s technickými parametrami a kvalitou.",
        "weights": { "qfd": 3, "six-sigma": 1, "kano": 2 }
      }
    ]
  },
  {
    "id": "F",
    "title": "Časť F: Stratégia, portfólio a budúcnosť",
    "questions": [
      {
        "id": "F1",
        "text": "Firma nevie, aké budú hlavné scenáre vývoja trhu, technológií alebo regulácie.",
        "weights": { "scenario-planning": 3, "delphi": 2, "speculative-design": 2 }
      },
      {
        "id": "F2",
        "text": "Potrebujeme expertný odhad budúcnosti alebo konsenzus medzi odborníkmi.",
        "weights": { "delphi": 3, "scenario-planning": 2, "open-innovation": 1 }
      },
      {
        "id": "F3",
        "text": "Potrebujeme skúmať možné budúcnosti, aj keď nejde o okamžite komerčný produkt.",
        "weights": { "speculative-design": 3, "scenario-planning": 2, "ai-innovation": 1 }
      },
      {
        "id": "F4",
        "text": "Firma musí súčasne zlepšovať existujúci biznis a objavovať nové príležitosti.",
        "weights": { "ambidexterity": 3, "stage-gate": 2, "bmc-vpc": 1 }
      },
      {
        "id": "F5",
        "text": "Máme viacero inovačných projektov a potrebujeme rozhodovacie brány.",
        "weights": { "stage-gate": 3, "innovation-accounting": 2, "ambidexterity": 2 }
      },
      {
        "id": "F6",
        "text": "Potrebujeme jasné rozhodnutia go / kill / hold / pivot pri inovačných projektoch.",
        "weights": { "stage-gate": 3, "innovation-accounting": 3, "lean-startup": 1 }
      },
      {
        "id": "F7",
        "text": "Potrebujeme zapojiť externé zdroje poznania, partnerov, univerzity, startupy alebo zákazníkov.",
        "weights": { "open-innovation": 3, "delphi": 1, "effectuation": 1 }
      },
      {
        "id": "F8",
        "text": "Firma má silné interné know-how, ale chýba jej prístup k novým nápadom alebo technológiám zvonka.",
        "weights": { "open-innovation": 3, "ai-innovation": 1, "scenario-planning": 1 }
      },
      {
        "id": "F9",
        "text": "Potrebujeme navrhnúť alebo prepracovať obchodný model.",
        "weights": { "bmc-vpc": 5, "effectuation": 2 }
      },
      {
        "id": "F10",
        "text": "Potrebujeme rozhodnúť, kde hľadať rast: v jadre biznisu, v susedných trhoch alebo v úplne nových oblastiach.",
        "weights": { "ambidexterity": 3, "bmc-vpc": 2, "scenario-planning": 2 }
      }
    ]
  },
  {
    "id": "G",
    "title": "Časť G: Udržateľnosť a cirkulárna ekonomika",
    "questions": [
      {
        "id": "G1",
        "text": "Chceme znížiť odpad, spotrebu materiálu alebo environmentálnu záťaž produktu.",
        "weights": { "circular-design": 3, "value-analysis": 2, "bionika": 1 }
      },
      {
        "id": "G2",
        "text": "Potrebujeme navrhnúť produkt tak, aby bol opraviteľný, znovupoužiteľný, recyklovateľný alebo modulárny.",
        "weights": { "circular-design": 3, "tri-z": 1, "value-analysis": 1 }
      },
      {
        "id": "G3",
        "text": "Chceme nahradiť lineárny model „vyrobiť–použiť–vyhodiť“ cirkulárnym modelom.",
        "weights": { "circular-design": 3, "bmc-vpc": 2, "scenario-planning": 1 }
      },
      {
        "id": "G4",
        "text": "Chceme nájsť udržateľné riešenia inšpirované prírodnými systémami.",
        "weights": { "bionika": 3, "circular-design": 2, "synektika": 1 }
      },
      {
        "id": "G5",
        "text": "Potrebujeme spojiť udržateľnosť s ekonomickou hodnotou, nie iba s reputáciou.",
        "weights": { "circular-design": 2, "value-analysis": 2, "bmc-vpc": 2 }
      }
    ]
  },
  {
    "id": "H",
    "title": "Časť H: AI a digitálne zrýchlenie inovácie",
    "questions": [
      {
        "id": "H1",
        "text": "Chceme používať AI na generovanie alternatív, analýzu dát alebo tvorbu konceptov.",
        "weights": { "ai-innovation": 3, "brainstorming": 1, "morphological-analysis": 1 }
      },
      {
        "id": "H2",
        "text": "Chceme AI zapojiť do sprintu: syntéza rozhovorov, tvorba prototypu, simulácia používateľov, rýchle modelovanie.",
        "weights": { "design-sprint-3": 3, "design-sprint-2": 2, "ai-innovation": 2 }
      },
      {
        "id": "H3",
        "text": "Máme veľa interných dát, dokumentov alebo zákazníckych vstupov, ktoré dnes nevieme efektívne využiť.",
        "weights": { "ai-innovation": 3, "odi": 1, "innovation-accounting": 1 }
      },
      {
        "id": "H4",
        "text": "Chceme vytvoriť digitálne dvojča, simuláciu alebo model rozhodovania.",
        "weights": { "ai-innovation": 3, "scenario-planning": 2, "speculative-design": 1 }
      },
      {
        "id": "H5",
        "text": "Chceme zrýchliť vývoj prototypov alebo testovanie variantov pomocou generatívnej AI.",
        "weights": { "design-sprint-3": 3, "ai-innovation": 2, "lean-startup": 1 }
      }
    ]
  },
  {
    "id": "I",
    "title": "Časť I: Projekty, kapacity a realizácia",
    "questions": [
      {
        "id": "I1",
        "text": "Projekty meškajú najmä preto, že ľudia sú rozdrobení medzi veľa úloh a projektov.",
        "weights": { "ccpm": 3, "toc": 2, "pdca": 1 }
      },
      {
        "id": "I2",
        "text": "Potrebujeme riadiť projektové buffre, závislosti a obmedzené kapacity.",
        "weights": { "ccpm": 3, "toc": 2 }
      },
      {
        "id": "I3",
        "text": "Inovačné projekty nemajú jasné fázy, vlastníkov, rozhodnutia a kritériá pokračovania.",
        "weights": { "stage-gate": 3, "pdca": 1, "innovation-accounting": 1 }
      },
      {
        "id": "I4",
        "text": "Potrebujeme zlepšiť exekúciu, nie iba vymýšľať nápady.",
        "weights": { "pdca": 2, "stage-gate": 2, "ccpm": 2, "toc": 1 }
      },
      {
        "id": "I5",
        "text": "Máme problém preniesť inovačné návrhy do každodennej prevádzky.",
        "weights": { "pdca": 3, "stage-gate": 2, "design-thinking": 1 }
      }
    ]
  }
];

export const methodLogicCategories = [
  {
    category: 'zakaznik',
    methods: ['jtbd', 'odi', 'design-thinking', 'kano', 'qfd', 'bmc-vpc'],
    title: 'Ak vyhrá zákaznícka metóda',
    problemDesc: 'Firma by mala začať zákazníckym pochopením.',
    sequence: [
      'JTBD alebo Design Thinking',
      'Kano alebo ODI',
      'QFD alebo Value Proposition Canvas',
      'Lean Startup alebo Design Sprint na overenie'
    ]
  },
  {
    category: 'validacia',
    methods: ['lean-startup', 'design-sprint', 'design-sprint-2', 'design-sprint-3', 'innovation-accounting'],
    title: 'Ak vyhrá validačná metóda',
    problemDesc: 'Firma už pravdepodobne má hypotézu alebo nápad, ale potrebuje znížiť riziko.',
    sequence: [
      'Definovať hypotézy',
      'Zvoliť MVP alebo prototyp',
      'Otestovať s používateľmi',
      'Merať učenie cez Innovation Accounting',
      'Rozhodnúť: pokračovať, upraviť, zastaviť'
    ]
  },
  {
    category: 'tvorbanapadov',
    methods: ['brainstorming', 'brainwriting', 'scamper', 'mind-mapping', 'lateral-thinking', 'synektika', 'bionika', 'morphological-analysis', 'six-thinking-hats'],
    title: 'Ak vyhrá tvorba nápadov',
    problemDesc: 'Firma potrebuje rozšíriť priestor riešení.',
    sequence: [
      'Mind Mapping na pochopenie problému',
      'Brainwriting alebo Brainstorming na generovanie nápadov',
      'SCAMPER / Morfologická analýza / Laterálne myslenie na rozšírenie variantov',
      'Six Thinking Hats na vyhodnotenie',
      'Design Sprint alebo Lean Startup na overenie'
    ]
  },
  {
    category: 'protirecenie',
    methods: ['tri-z', 'wois', 'creax', 'sit', 'systematic-innovation'],
    title: 'Ak vyhrá technické protirečenie',
    problemDesc: 'Problém pravdepodobne nie je iba o nápadoch, ale o protirečení.',
    sequence: [
      'Presne pomenovať protirečenie',
      'Rozlíšiť, čo sa zlepšuje a čo sa zhoršuje',
      'Použiť TRIZ / WOIS / Creax',
      'Vytvoriť varianty',
      'Validovať cez prototyp alebo experiment'
    ]
  },
  {
    category: 'procesy',
    methods: ['toc', 'six-sigma', 'pdca', 'fmea', 'value-analysis', 'ccpm'],
    title: 'Ak vyhrá procesná metóda',
    problemDesc: 'Firma má pravdepodobne problém vo výkone systému, kvalite, nákladoch alebo realizácii.',
    sequence: [
      'Identifikovať proces a cieľ',
      'Zmerať výkon',
      'Zistiť úzke miesto alebo zdroj variability',
      'Použiť TOC / Six Sigma / PDCA / FMEA',
      'Zaviesť kontrolný mechanizmus'
    ]
  },
  {
    category: 'strategia',
    methods: ['scenario-planning', 'speculative-design', 'delphi', 'open-innovation', 'stage-gate', 'ambidexterity', 'bmc-vpc'],
    title: 'Ak vyhrá stratégia',
    problemDesc: 'Firma nerieši iba produkt, ale smerovanie.',
    sequence: [
      'Zmapovať strategické neistoty',
      'Vytvoriť scenáre alebo expertný konsenzus',
      'Zvoliť portfólio možností',
      'Riadiť cez Stage-Gate alebo Innovation Accounting',
      'Oddeliť jadrový biznis od explorácie'
    ]
  },
  {
    category: 'ai',
    methods: ['ai-innovation', 'design-sprint-3'],
    title: 'Ak vyhrá AI',
    problemDesc: 'Firma chce alebo môže zrýchliť inováciu digitálnymi nástrojmi.',
    sequence: [
      'Určiť, kde AI vytvára hodnotu: dáta, nápady, prototypy, simulácie, rozhodovanie',
      'Pripraviť bezpečné vstupy a pravidlá',
      'Použiť AI v sprinte alebo inovačnom procese',
      'Overovať výsledky s ľuďmi a dátami',
      'Merať prínos'
    ]
  }
];

export function createInitialScores(METHODS: string[]) {
  return Object.fromEntries(METHODS.map((method) => [method, 0]));
}

export function questionKey(phaseIndex: number, blockIndex: number, questionIndex: number) {
  return `${phaseIndex}-${blockIndex}-${questionIndex}`;
}

export function getAllQuestions(PHASES: any[]) {
  const all: any[] = [];
  PHASES.forEach((phase, phaseIndex) => {
    phase.blocks.forEach((block: any, blockIndex: number) => {
      block.questions.forEach((question: string, questionIndex: number) => {
        all.push({ phase, phaseIndex, block, blockIndex, question, questionIndex, key: questionKey(phaseIndex, blockIndex, questionIndex) });
      });
    });
  });
  return all;
}

export function normalizeBlockScore(values: number[]) {
  if (!values.length) return 0;
  const raw = values.reduce((sum, value) => sum + value, 0);
  return (raw - values.length) / (4 * values.length);
}

export function calculateResults(responses: Record<string, number>, PHASES: any[], METHODS: string[]) {
  const scores = createInitialScores(METHODS);
  const contributions: Record<string, any[]> = Object.fromEntries(METHODS.map((method) => [method, []]));
  const phaseProfiles: any[] = [];

  PHASES.forEach((phase, phaseIndex) => {
    const blockResults = phase.blocks.map((block: any, blockIndex: number) => {
      const values = block.questions
        .map((_: any, questionIndex: number) => responses[questionKey(phaseIndex, blockIndex, questionIndex)])
        .filter((value: any) => typeof value === "number");

      const normalized = normalizeBlockScore(values);
      const answered = values.length;
      const total = block.questions.length;
      const base = normalized * phase.weight * 10;

      const addPoints = (method: string, coefficient: number, relation: string) => {
        if (!METHODS.includes(method)) return;
        const points = base * coefficient;
        scores[method] += points;
        if (Math.abs(points) > 0.0001) {
          contributions[method].push({
            points,
            relation,
            phase: phase.name,
            block: block.name,
            normalized,
          });
        }
      };

      block.primaryMethods.forEach((method: string) => addPoints(method, 1.0, "primárna väzba"));
      block.secondaryMethods.forEach((method: string) => addPoints(method, 0.6, "sekundárna väzba"));

      if (normalized >= 0.78) {
        block.suppressAsPrimary.forEach((method: string) => addPoints(method, -0.5, "potlačené korekčným pravidlom"));
      }

      return {
        phaseId: phase.id,
        phaseName: phase.name,
        blockId: block.id,
        blockName: block.name,
        normalized,
        answered,
        total,
        raw: values.reduce((sum, value) => sum + value, 0),
      };
    });

    phaseProfiles.push({ phase, phaseIndex, blockResults });
  });

  const sortedMethods = METHODS
    .map((method) => ({ method, score: scores[method], contributions: contributions[method].sort((a: any, b: any) => b.points - a.points) }))
    .sort((a, b) => b.score - a.score);

  return { scores, sortedMethods, contributions, phaseProfiles };
}

export function getDominantIntervention(phaseProfiles: any[]) {
  const phase12 = phaseProfiles.find((p) => p.phase.id === 12);
  if (!phase12) return null;
  return [...phase12.blockResults].sort((a: any, b: any) => b.normalized - a.normalized)[0];
}

export function confidenceLabel(sortedMethods: any[]) {
  const first = sortedMethods[0]?.score ?? 0;
  const second = sortedMethods[1]?.score ?? 0;
  const gap = first - second;
  const ratio = first > 0 ? gap / first : 0;
  if (ratio >= 0.15) return { label: "vysoká istota", text: "Výsledok je pomerne jednoznačný." };
  if (ratio >= 0.07) return { label: "stredná istota", text: "Výsledok je dobrý, ale doplnkové metódy sú dôležité." };
  return { label: "tesný výsledok", text: "Prvá a druhá metóda sú veľmi blízko. Odporúčaj kombináciu metód." };
}

export function buildThirtyDayPlan(mainMethod: string, intervention: any) {
  const name = intervention?.blockName || "intervencia";
  if (name === "Experiment") {
    return [
      "Pomenovať najrizikovejšiu hypotézu, ktorú treba overiť ako prvú.",
      "Navrhnúť najmenší test alebo MVP, ktorý hypotézu overí.",
      "Určiť metriku úspechu a hranicu, pri ktorej sa rozhodne pokračovať, upraviť smer alebo zastaviť.",
      "Otestovať riešenie na malej vzorke zákazníkov alebo používateľov.",
      "Vyhodnotiť správanie zákazníkov, nie iba ich názor.",
    ];
  }
  if (name === "Optimalizácia") {
    return [
      "Zmapovať kľúčový proces a pomenovať výstup, ktorý má byť lepší.",
      "Nájsť hlavné úzke hrdlo, zdroj chýb alebo najväčšie plytvanie.",
      "Zmerať aktuálny stav: čas, chyby, náklady, priepustnosť alebo kvalitu.",
      "Navrhnúť malé zlepšenie a spustiť ho v cykle PDCA.",
      "Po 30 dňoch porovnať metriky pred a po zmene.",
    ];
  }
  if (name === "Objav") {
    return [
      "Vybrať konkrétny zákaznícky segment alebo používateľskú situáciu.",
      "Urobiť 10 až 15 rozhovorov alebo pozorovaní v reálnom prostredí.",
      "Pomenovať zákaznícku prácu, frustrácie, očakávané výsledky a alternatívy.",
      "Preformulovať problém do jasnej inovačnej výzvy.",
      "Až potom rozhodnúť, či treba tvoriť riešenie, experimentovať alebo meniť model.",
    ];
  }
  if (name === "Transformácia") {
    return [
      "Zmapovať dnešný obchodný model a jeho slabé miesta.",
      "Pomenovať budúce scenáre, technologické hrozby a nové potreby zákazníkov.",
      "Navrhnúť 2 až 3 alternatívne modely tvorby hodnoty.",
      "Vybrať jeden malý transformačný experiment mimo bežnej operatívy.",
      "Určiť vlastníka, kapacitu a spôsob merania učenia.",
    ];
  }
  return [
    "Zhrnúť najdôležitejšie zistenia z testu.",
    `Pripraviť prvý workshop podľa hlavnej metódy: ${mainMethod}.`,
    "Pomenovať cieľ, meradlo úspechu a rozhodovacie kritériá.",
    "Vybrať malý pilotný rozsah, kde sa dá metóda bezpečne vyskúšať.",
    "Po 30 dňoch vyhodnotiť, čo sa firma naučila a čo sa zmenilo.",
  ];
}

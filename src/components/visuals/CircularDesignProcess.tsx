import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, Leaf, Settings, Share2, Repeat, Wrench, Recycle, ArrowRight, HelpCircle, Zap, BarChart, Target, Info } from 'lucide-react';

export function CircularDesignProcess() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const phases = {
    // TECHNICKÝ CYKLUS
    maintain: {
      id: 'maintain',
      title: 'Zdieľanie a Údržba (Share & Maintain)',
      cycle: 'technical',
      icon: Wrench,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      desc: 'Najužšia slučka s najvyššou hodnotou. Cieľom je udržať produkt v prevádzke čo najdlhšie u pôvodného užívateľa alebo ho zdieľať medzi viacerými.',
      strategy: 'Maximalizácia využitia a predĺženie životnosti produktu.',
      questions: [
        "Ako môžeme zjednodušiť opravu a údržbu?",
        "Je možné produkt ponúkať ako službu (PaaS) namiesto predaja?",
        "Ako môžeme zvýšiť vyťaženosť produktu (zdieľanie)?"
      ],
      tactic: "Prediktívna údržba, modulárny dizajn, digitálne manuály, komunitné zdieľanie.",
      metric: "Miera využitia (Utilization Rate), Priemerná životnosť produktu."
    },
    reuse: {
      id: 'reuse',
      title: 'Znovupoužitie a Redistribúcia (Reuse)',
      cycle: 'technical',
      icon: Repeat,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      desc: 'Produkt sa presúva k novému užívateľovi v pôvodnej forme. Vyžaduje minimálnu energiu na úpravu.',
      strategy: 'Vytvorenie trhov a logistiky pre "druhý život" produktov.',
      questions: [
        "Kto iný by mohol produkt využiť, keď ho prvý majiteľ nepotrebuje?",
        "Ako môžeme motivovať zákazníkov vrátiť nepoužívané produkty?",
        "Je produkt dostatočne odolný pre viacero cyklov použitia?"
      ],
      tactic: "Buy-back programy, certifikované 'refurbished' obchody, peer-to-peer platformy.",
      metric: "Počet cyklov použitia, Hodnota na sekundárnom trhu."
    },
    refurbish: {
      id: 'refurbish',
      title: 'Repasia a Renovácia (Remanufacture)',
      cycle: 'technical',
      icon: Settings,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      desc: 'Produkt sa rozoberie, skontroluje a opotrebované časti sa vymenia. Výsledkom je produkt "ako nový" so zárukou.',
      strategy: 'Obnova hodnoty produktu na úroveň nového s nižšími nákladmi na materiál.',
      questions: [
        "Sú komponenty ľahko demontovateľné a vymeniteľné?",
        "Môžeme aktualizovať softvér/hardvér starších modelov?",
        "Máme prístup k náhradným dielom?"
      ],
      tactic: "Dizajn pre demontáž, štandardizácia súčiastok, reverzná logistika.",
      metric: "% znovupoužitých komponentov v nových produktoch, Úspora energie oproti novej výrobe."
    },
    recycle: {
      id: 'recycle',
      title: 'Recyklácia (Recycle)',
      cycle: 'technical',
      icon: Recycle,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      desc: 'Posledná možnosť. Materiál sa spracuje na surovinu pre novú výrobu. Stráca sa pridaná hodnota dizajnu a výroby.',
      strategy: 'Zachovanie kvality materiálov pre ďalšie použitie (upcycling vs downcycling).',
      questions: [
        "Sú materiály v produkte ľahko oddeliteľné?",
        "Používame čisté, netoxické a recyklovateľné materiály?",
        "Existuje technológia na recykláciu tohto materiálu v priemyselnej škále?"
      ],
      tactic: "Monomateriály, eliminácia lepidiel, jasné označenie materiálov (Material Passports).",
      metric: "Miera recyklovateľnosti (Recyclability Rate), % recyklátu vstupe."
    },

    // BIOLOGICKÝ CYKLUS
    cascades: {
      id: 'cascades',
      title: 'Kaskádové využitie (Cascades)',
      cycle: 'biological',
      icon: Share2,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      highlight: 'emerald',
      desc: 'Postupné využitie biomasy v rôznych aplikáciách pred vrátením do biosféry (napr. drevo -> nábytok -> drevotrieska -> energia).',
      strategy: 'Vyťaženie maximálnej hodnoty z biologického materiálu v postupných krokoch.',
      questions: [
        "Môže byť tento biologický odpad surovinou pre iné odvetvie?",
        "Ako môžeme spomaliť degradáciu materiálu?",
        "Využívame vedľajšie produkty výroby?"
      ],
      tactic: "Priemyselná symbióza, biorafinérie, využitie odpadového tepla.",
      metric: "Pridaná hodnota z vedľajších produktov."
    },
    extraction: {
      id: 'extraction',
      title: 'Extrakcia látok (Extraction)',
      cycle: 'biological',
      icon: Leaf,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      highlight: 'emerald',
      desc: 'Získavanie cenných biochemických látok z biologického materiálu pred jeho kompostovaním.',
      strategy: 'Separácia cenných zložiek z bio-odpadu.',
      questions: [
        "Obsahuje náš bio-odpad cenné chemikálie alebo živiny?",
        "Je extrakcia ekonomicky a energeticky efektívna?"
      ],
      tactic: "Inovatívne chemické procesy, spolupráca s farmaceutickým/kozmetickým priemyslom.",
      metric: "Výťažnosť cenných látok."
    },
    biosphere: {
      id: 'biosphere',
      title: 'Návrat do biosféry (Biosphere)',
      cycle: 'biological',
      icon: RefreshCw,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      highlight: 'emerald',
      desc: 'Kompostovanie alebo anaeróbna digescia. Materiál sa stáva živinou pre nový rast. Uzavretie biologického cyklu.',
      strategy: 'Regenerácia prírodných systémov a pôdy.',
      questions: [
        "Je produkt 100% biologicky rozložiteľný a netoxický?",
        "Ako zabezpečíme, aby sa bio-materiál neskontaminoval technickými látkami?"
      ],
      tactic: "Kompostovateľné obaly, náhrada syntetických hnojív, regeneratívne poľnohospodárstvo.",
      metric: "Miera biodegradability, Množstvo vrátených živín do pôdy."
    }
  };

  const getActiveData = () => activePhase ? phases[activePhase as keyof typeof phases] : null;

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">Cirkulárny model (Butterfly Diagram)</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          Kliknite na jednotlivé slučky diagramu pre zobrazenie stratégií pre Technický a Biologický cyklus.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 p-4 sm:p-8 shadow-sm mb-8">
        
        {/* Central Spine */}
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gray-100 -translate-x-1/2 z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          
          {/* Top: User */}
          <div className="flex flex-col items-center gap-2 z-20">
            <div className="px-4 py-1.5 bg-gray-800 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
              Výroba & Použitie
            </div>
            <div className="w-1 h-6 bg-gray-300"></div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold shadow-xl ring-4 ring-white">
              Užívateľ
            </div>
          </div>

          {/* Cycles Container */}
          <div className="relative w-full h-[400px] sm:h-[450px]">
            
            {/* --- LEFT SIDE: BIOLOGICAL CYCLE --- */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 pr-12 sm:pr-24 flex flex-col justify-start pt-8 items-end gap-3">
              <div className="absolute top-0 right-12 text-xs font-bold text-emerald-600 uppercase tracking-wider text-right mb-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Biologický cyklus
              </div>
              
              {/* Loop 1: Cascades */}
              <CycleLoop 
                label="Kaskády" 
                color="emerald" 
                width="w-24 sm:w-32" 
                height="h-16" 
                active={activePhase === 'cascades'}
                onClick={() => setActivePhase('cascades')}
                side="left"
                delay={0.1}
              />

              {/* Loop 2: Extraction */}
              <CycleLoop 
                label="Extrakcia" 
                color="emerald" 
                width="w-32 sm:w-40" 
                height="h-24" 
                active={activePhase === 'extraction'}
                onClick={() => setActivePhase('extraction')}
                side="left"
                delay={0.2}
                className="mr-4 sm:mr-8"
              />

              {/* Loop 3: Biosphere */}
              <CycleLoop 
                label="Biosféra" 
                color="emerald" 
                width="w-40 sm:w-56" 
                height="h-32" 
                active={activePhase === 'biosphere'}
                onClick={() => setActivePhase('biosphere')}
                side="left"
                delay={0.3}
                className="mr-8 sm:mr-16"
              />
            </div>

            {/* --- RIGHT SIDE: TECHNICAL CYCLE --- */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pl-12 sm:pl-24 flex flex-col justify-start pt-8 items-start gap-3">
              <div className="absolute top-0 left-12 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Technický cyklus
              </div>

              {/* Loop 1: Maintain */}
              <CycleLoop 
                label="Údržba" 
                color="blue" 
                width="w-20 sm:w-24" 
                height="h-12" 
                active={activePhase === 'maintain'}
                onClick={() => setActivePhase('maintain')}
                side="right"
                delay={0.1}
              />

              {/* Loop 2: Reuse */}
              <CycleLoop 
                label="Znovupoužitie" 
                color="blue" 
                width="w-28 sm:w-36" 
                height="h-20" 
                active={activePhase === 'reuse'}
                onClick={() => setActivePhase('reuse')}
                side="right"
                delay={0.2}
                className="ml-4 sm:ml-8"
              />

              {/* Loop 3: Refurbish */}
              <CycleLoop 
                label="Repasia" 
                color="blue" 
                width="w-36 sm:w-48" 
                height="h-28" 
                active={activePhase === 'refurbish'}
                onClick={() => setActivePhase('refurbish')}
                side="right"
                delay={0.3}
                className="ml-8 sm:ml-16"
              />

              {/* Loop 4: Recycle */}
              <CycleLoop 
                label="Recyklácia" 
                color="blue" 
                width="w-44 sm:w-64" 
                height="h-36" 
                active={activePhase === 'recycle'}
                onClick={() => setActivePhase('recycle')}
                side="right"
                delay={0.4}
                className="ml-12 sm:ml-24"
              />
            </div>

          </div>

          {/* Bottom Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 uppercase tracking-widest bg-white px-2">
            Minimalizácia odpadu
          </div>

        </div>
      </div>

      {/* DETAIL PANEL */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
            {activePhase ? (
                <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                >
                    {(() => {
                        const data = getActiveData()!;
                        const Icon = data.icon;
                        return (
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Header Section */}
                                <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-6">
                                    <div className={`inline-flex p-3 rounded-xl ${data.color} bg-opacity-20 mb-4`}>
                                        <Icon className={`w-8 h-8 ${data.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                        {data.cycle === 'technical' ? 'Technický cyklus' : 'Biologický cyklus'}
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                        {data.desc}
                                    </p>
                                    
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <h5 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                                            <Target className="w-3 h-3" /> Stratégia
                                        </h5>
                                        <p className="text-gray-900 font-bold text-sm">
                                            {data.strategy}
                                        </p>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                                    
                                    {/* Questions */}
                                    <div>
                                        <h5 className="text-xs font-bold text-indigo-600 uppercase mb-3 flex items-center gap-2">
                                            <HelpCircle className="w-4 h-4" /> Kľúčové otázky pre dizajn
                                        </h5>
                                        <ul className="space-y-2">
                                            {data.questions.map((q, i) => (
                                                <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-sm text-gray-700">
                                                    <span className="text-indigo-400 font-bold mt-0.5">•</span>
                                                    {q}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Tactic */}
                                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                            <h5 className="text-xs font-bold text-indigo-800 uppercase mb-2 flex items-center gap-2">
                                                <Zap className="w-3 h-3" /> Taktika
                                            </h5>
                                            <p className="text-sm text-indigo-900 leading-relaxed">
                                                {data.tactic}
                                            </p>
                                        </div>

                                        {/* Metric */}
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                            <h5 className="text-xs font-bold text-gray-600 uppercase mb-2 flex items-center gap-2">
                                                <BarChart className="w-3 h-3" /> Metrika
                                            </h5>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {data.metric}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                >
                    <RefreshCw className="w-16 h-16 text-gray-300 mb-6" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Detail cyklu</h4>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                        Kliknite na jednu zo slučiek v diagrame (napr. Údržba, Repasia, Recyklácia) pre zobrazenie detailných inovačných stratégií.
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

    </div>
  );
}

// Helper Component for Loops
function CycleLoop({ label, color, width, height, active, onClick, side, delay, className = '' }: any) {
    const isEmerald = color === 'emerald';
    const baseBorder = isEmerald ? 'border-emerald-300' : 'border-blue-300';
    const activeBorder = isEmerald ? 'border-emerald-600' : 'border-blue-600';
    const activeBg = isEmerald ? 'bg-emerald-50' : 'bg-blue-50';
    const textColor = isEmerald ? 'text-emerald-700' : 'text-blue-700';

    return (
        <motion.button
            onClick={onClick}
            initial={{ opacity: 0, x: side === 'left' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 group ${side === 'left' ? '' : 'flex-row-reverse'} ${className}`}
        >
            <span className={`text-[10px] sm:text-xs font-bold uppercase transition-colors ${active ? textColor : 'text-gray-500 group-hover:text-gray-700'}`}>
                {label}
            </span>
            <div 
                className={`
                    ${width} ${height} border-b-4 transition-all duration-300
                    ${side === 'left' ? 'border-l-4 rounded-bl-[40px]' : 'border-r-4 rounded-br-[40px]'}
                    ${active ? `${activeBorder} ${activeBg} shadow-md` : `${baseBorder} hover:border-gray-400`}
                `}
            />
        </motion.button>
    );
}

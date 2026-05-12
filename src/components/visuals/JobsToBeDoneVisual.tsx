import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Frown, Smile, Anchor, AlertTriangle, Zap, RefreshCw, Shield, TrendingUp, HelpCircle, Target, BarChart } from 'lucide-react';

export function JobsToBeDoneVisual() {
  const [activeForce, setActiveForce] = useState<string | null>(null);

  const forces = {
    push: {
      id: 'push',
      title: 'TLAK (Push)',
      subtitle: 'Problémy so súčasným stavom',
      icon: Zap,
      color: 'bg-green-100 text-green-700 border-green-200',
      highlight: 'green',
      desc: 'Frustrácia, nespokojnosť alebo zlyhanie súčasného riešenia. Toto je motor, ktorý núti zákazníka hľadať zmenu. Bez tlaku nie je pohyb.',
      example: '„Môj súčasný softvér je pomalý a stále padá. Už sa to nedá vydržať.“',
      strategy: 'Zvýraznite nedostatky súčasného riešenia. Pripomeňte bolesť.',
      questions: [
        "Čo vás na súčasnom riešení najviac hnevá?",
        "Kedy ste si prvýkrát povedali, že potrebujete zmenu?",
        "Čo sa stalo tesne predtým, než ste začali hľadať nové riešenie?"
      ],
      tactic: "V marketingu používajte 'problem-agitation-solution' framework. Ukážte, že rozumiete ich frustrácii.",
      metric: "Churn rate súčasného riešenia, počet sťažností na supporte."
    },
    pull: {
      id: 'pull',
      title: 'ŤAH (Pull)',
      subtitle: 'Príťažlivosť nového riešenia',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-700 border-green-200',
      highlight: 'green',
      desc: 'Vízia lepšej budúcnosti. Prísľub, že život bude s novým produktom jednoduchší, lepší alebo krajší. Nie je to len o funkciách, ale o "novom ja".',
      example: '„Ten nový nástroj má automatické reporty, to mi ušetrí hodiny práce!“',
      strategy: 'Komunikujte jasnú hodnotu a "Job", ktorý produkt vykoná.',
      questions: [
        "Ako bude vyzerať váš život, keď tento problém vyriešite?",
        "Čo je tá najdôležitejšia vec, ktorú vám nové riešenie umožní?",
        "Prečo práve teraz?"
      ],
      tactic: "Používajte vizuály 'predtým a potom'. Komunikujte výsledok, nie parametre.",
      metric: "Conversion rate, Click-through rate na value proposition."
    },
    habit: {
      id: 'habit',
      title: 'ZVYK (Habit)',
      subtitle: 'Zotrvačnosť minulosti',
      icon: Anchor,
      color: 'bg-red-100 text-red-700 border-red-200',
      highlight: 'red',
      desc: 'Pohodlnosť a naučené správanie. "Vždy sme to robili takto." Zvyk je silná kotva, ktorá drží zákazníka späť, aj keď je súčasné riešenie nedokonalé.',
      example: '„Excel síce nie je ideálny, ale poznám tam každú skratku.“',
      strategy: 'Urobte prechod čo najjednoduchším (migrácia dát, podobné UI).',
      questions: [
        "Čoho sa budete musieť vzdať, ak prejdete na nové riešenie?",
        "Aké rutiny máte spojené so súčasným produktom?",
        "Čo je na súčasnom riešení 'dosť dobré'?"
      ],
      tactic: "Ponúknite 'freemium' alebo import dát jedným klikom. Minimalizujte učiacu krivku.",
      metric: "Onboarding drop-off rate, Time to value."
    },
    anxiety: {
      id: 'anxiety',
      title: 'OBAVY (Anxiety)',
      subtitle: 'Strach z nového',
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-700 border-red-200',
      highlight: 'red',
      desc: 'Neistota spojená so zmenou. "Čo ak to nebude fungovať? Čo ak vyhodím peniaze?" Strach z neznámeho je často silnejší ako príťažlivosť nového.',
      example: '„Čo ak sa ten nový systém nikto nenaučí používať?“',
      strategy: 'Znížte riziko (garancia vrátenia peňazí, trial verzia, referencie).',
      questions: [
        "Čo je vaša najväčšia obava pri zmene?",
        "Čo by sa muselo stať, aby ste kúpu oľutovali?",
        "Kto iný musí s rozhodnutím súhlasiť?"
      ],
      tactic: "Social proof (referencie), garancie, certifikácie, transparentný pricing.",
      metric: "Cart abandonment rate, počet otázok na bezpečnosť/garancie."
    }
  };

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">Sily pokroku (The Forces of Progress)</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          Kliknite na jednotlivé sily (šípky) pre pochopenie dynamiky rozhodovania zákazníka.
          <br/>
          <span className="text-xs font-medium text-gray-400">Zelené sily podporujú nákup, červené mu bránia.</span>
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mb-8">
        
        {/* Main Diagram Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">
            
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10 border-t border-dashed border-gray-300" />

            {/* LEFT: OLD WAY */}
            <div className="relative p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 flex flex-col items-center text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Súčasný stav
                </div>
                <Frown className="w-16 h-16 text-gray-400 mb-4" />
                <h4 className="font-bold text-gray-700">Staré riešenie</h4>
                
                {/* Forces Left */}
                <div className="absolute -right-6 top-10 z-10">
                    <ForceArrow 
                        type="push" 
                        active={activeForce === 'push'} 
                        onClick={() => setActiveForce('push')}
                        direction="right"
                    />
                </div>
                <div className="absolute -right-6 bottom-10 z-10">
                    <ForceArrow 
                        type="habit" 
                        active={activeForce === 'habit'} 
                        onClick={() => setActiveForce('habit')}
                        direction="left"
                    />
                </div>
            </div>

            {/* RIGHT: NEW WAY */}
            <div className="relative p-6 rounded-2xl border-2 border-indigo-100 bg-indigo-50 flex flex-col items-center text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-100 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Budúci stav
                </div>
                <Smile className="w-16 h-16 text-indigo-500 mb-4" />
                <h4 className="font-bold text-indigo-700">Nové riešenie</h4>

                {/* Forces Right */}
                <div className="absolute -left-6 top-10 z-10">
                    <ForceArrow 
                        type="pull" 
                        active={activeForce === 'pull'} 
                        onClick={() => setActiveForce('pull')}
                        direction="right"
                    />
                </div>
                <div className="absolute -left-6 bottom-10 z-10">
                    <ForceArrow 
                        type="anxiety" 
                        active={activeForce === 'anxiety'} 
                        onClick={() => setActiveForce('anxiety')}
                        direction="left"
                    />
                </div>
            </div>

        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence mode="wait">
        {activeForce ? (
          <motion.div
            key={activeForce}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`bg-white rounded-2xl p-6 border-2 border-${forces[activeForce as keyof typeof forces].highlight}-100 shadow-lg max-w-4xl mx-auto`}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Header & Icon */}
              <div className="md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                  <div className={`p-4 rounded-2xl ${forces[activeForce as keyof typeof forces].color} mb-4`}>
                    {(() => {
                        const f = forces[activeForce as keyof typeof forces];
                        const Icon = f.icon;
                        return <Icon className="w-10 h-10" />;
                    })()}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {forces[activeForce as keyof typeof forces].title}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                      {forces[activeForce as keyof typeof forces].subtitle}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {forces[activeForce as keyof typeof forces].desc}
                  </p>
                  
                  <div className="w-full bg-gray-50 p-4 rounded-xl text-sm border border-gray-100">
                      <span className="block font-bold text-gray-500 text-xs uppercase mb-2 flex items-center gap-2">
                        <Target className="w-3 h-3" /> Stratégia
                      </span>
                      <span className={`font-medium text-${forces[activeForce as keyof typeof forces].highlight}-900`}>
                        {forces[activeForce as keyof typeof forces].strategy}
                      </span>
                  </div>
              </div>
              
              {/* Details Grid */}
              <div className="md:w-2/3 grid grid-cols-1 gap-6">
                
                {/* Questions */}
                <div>
                    <h5 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-indigo-500" />
                        Kľúčové otázky pre zákazníka
                    </h5>
                    <ul className="space-y-2">
                        {forces[activeForce as keyof typeof forces].questions.map((q, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white p-2 rounded border border-gray-100">
                                <span className="text-indigo-400 font-bold">•</span>
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
                        <p className="text-sm text-indigo-900">
                            {forces[activeForce as keyof typeof forces].tactic}
                        </p>
                    </div>

                    {/* Metric */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <h5 className="text-xs font-bold text-gray-600 uppercase mb-2 flex items-center gap-2">
                            <BarChart className="w-3 h-3" /> Metrika
                        </h5>
                        <p className="text-sm text-gray-700">
                            {forces[activeForce as keyof typeof forces].metric}
                        </p>
                    </div>
                </div>

                {/* Example */}
                <div className="text-sm text-gray-500 italic border-t border-gray-100 pt-4 mt-2">
                    <span className="font-bold not-italic text-gray-400 text-xs uppercase mr-2">Príklad:</span>
                    "{forces[activeForce as keyof typeof forces].example}"
                </div>

              </div>
            </div>
          </motion.div>
        ) : (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300 max-w-3xl mx-auto"
            >
                <RefreshCw className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Detail sily</h4>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    Kliknite na jednu zo štyroch síl v diagrame (Tlak, Ťah, Zvyk, Obavy) pre zobrazenie detailnej stratégie, otázok a metrík.
                </p>
            </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function ForceArrow({ type, active, onClick, direction }: { type: string, active: boolean, onClick: () => void, direction: 'left' | 'right' }) {
    const isGreen = type === 'push' || type === 'pull';
    const colorClass = isGreen ? 'bg-green-500 text-white shadow-green-200' : 'bg-red-500 text-white shadow-red-200';
    const label = type === 'push' ? 'TLAK' : type === 'pull' ? 'ŤAH' : type === 'habit' ? 'ZVYK' : 'OBAVY';
    
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
                x: active ? 0 : (direction === 'right' ? [0, 5, 0] : [0, -5, 0]),
                scale: active ? 1.1 : 1
            }}
            transition={{ 
                x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
            }}
            className={`
                flex items-center gap-2 px-4 py-2 rounded-full shadow-lg border-2 border-white cursor-pointer transition-all
                ${colorClass} ${active ? 'ring-4 ring-opacity-50 ring-' + (isGreen ? 'green' : 'red') + '-400' : ''}
            `}
        >
            {direction === 'left' && <ArrowLeft className="w-5 h-5" />}
            <span className="font-bold text-xs uppercase tracking-wider">{label}</span>
            {direction === 'right' && <ArrowRight className="w-5 h-5" />}
        </motion.button>
    );
}

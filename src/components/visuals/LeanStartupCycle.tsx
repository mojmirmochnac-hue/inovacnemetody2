import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Blocks, Ruler, BookOpen, ArrowRight, RefreshCw, Zap, BarChart3, Rocket } from 'lucide-react';

export const LeanStartupCycle = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      id: 1,
      name: 'BUILD',
      label: 'Vytvoriť',
      description: 'Premena myšlienok na produkt. Cieľom je vytvoriť MVP (Minimum Viable Product) čo najrýchlejšie a s minimálnym úsilím, aby sme mohli začať proces učenia.',
      icon: Blocks,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      position: 'top',
      action: 'Kódovanie, Dizajn, Prototypovanie'
    },
    {
      id: 2,
      name: 'MEASURE',
      label: 'Merať',
      description: 'Zber dát z reakcií zákazníkov. Sledujeme, ako používatelia interagujú s MVP. Nie je to o "vanity metrics" (počet lajkov), ale o "actionable metrics" (konverzie, retencia).',
      icon: Ruler,
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      position: 'right',
      action: 'A/B testy, Analytika, User testing'
    },
    {
      id: 3,
      name: 'LEARN',
      label: 'Učiť sa',
      description: 'Analýza dát a rozhodnutie. Potvrdili sme hypotézu? Ak áno, pokračujeme (Persevere). Ak nie, meníme stratégiu (Pivot). Toto je najdôležitejšia časť cyklu.',
      icon: BookOpen,
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      position: 'left',
      action: 'Pivot alebo Persevere'
    }
  ];

  return (
    <div className="w-full py-8 px-4 select-none">
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-gray-900">Cyklus spätnej väzby</h3>
          <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
            Kliknite na jednotlivé fázy cyklu pre detailné informácie. Cieľom je prejsť týmto cyklom čo najrýchlejšie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Cycle Diagram */}
          <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            
            {/* Connecting Circle */}
            <div className="absolute inset-0 rounded-full border-[20px] border-gray-100 opacity-50" />
            
            {/* Animated Flow Indicator */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-indigo-500 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
              <RefreshCw className="w-12 h-12 text-gray-300 mb-2" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Minimalizuj<br/>čas cyklu</span>
            </div>

            {/* Phase Nodes */}
            {phases.map((phase) => {
              // Positioning logic
              let positionClass = '';
              if (phase.position === 'top') positionClass = 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2';
              if (phase.position === 'right') positionClass = 'bottom-[15%] right-0 translate-x-1/4';
              if (phase.position === 'left') positionClass = 'bottom-[15%] left-0 -translate-x-1/4';

              const isActive = activePhase === phase.id;

              return (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute ${positionClass} z-10 flex flex-col items-center group focus:outline-none`}
                >
                  <div className={`
                    w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-lg transition-all duration-300
                    ${isActive ? `${phase.color} border-white ring-4 ring-${phase.color}/30` : 'bg-white border-gray-200 hover:border-' + phase.color.replace('bg-', '')}
                  `}>
                    <phase.icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <div className={`mt-3 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm transition-colors ${isActive ? phase.color + ' text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                    {phase.name}
                  </div>
                </motion.button>
              );
            })}

            {/* Artifacts (Ideas, Product, Data) */}
            <div className="absolute top-[25%] right-[10%] text-xs font-bold text-gray-400 flex flex-col items-center">
               <Rocket className="w-4 h-4 mb-1" />
               <span>Product</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-xs font-bold text-gray-400 flex flex-col items-center bg-white px-2 py-1 rounded-full border border-gray-100 shadow-sm z-20">
               <BarChart3 className="w-4 h-4 mb-1" />
               <span>Data</span>
            </div>
            <div className="absolute top-[25%] left-[10%] text-xs font-bold text-gray-400 flex flex-col items-center">
               <Zap className="w-4 h-4 mb-1" />
               <span>Ideas</span>
            </div>

          </div>

          {/* Detail Panel */}
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {activePhase ? (
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`w-full bg-white rounded-2xl p-8 border-2 ${phases[activePhase-1].borderColor} shadow-lg`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${phases[activePhase-1].lightColor}`}>
                      {(() => {
                        const Icon = phases[activePhase-1].icon;
                        return <Icon className={`w-8 h-8 ${phases[activePhase-1].textColor}`} />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 uppercase">{phases[activePhase-1].name}</h4>
                      <span className={`text-sm font-bold ${phases[activePhase-1].textColor} uppercase tracking-wider`}>
                        {phases[activePhase-1].label}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {phases[activePhase-1].description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h5 className="text-xs font-bold text-gray-500 uppercase mb-2">Aktivity</h5>
                    <div className="flex items-center gap-2 text-gray-800 font-medium">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      {phases[activePhase-1].action}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full text-center p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                >
                  <RefreshCw className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-spin-slow" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Vyberte fázu</h4>
                  <p className="text-gray-500">
                    Kliknite na Build, Measure alebo Learn v diagrame pre zobrazenie detailov.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

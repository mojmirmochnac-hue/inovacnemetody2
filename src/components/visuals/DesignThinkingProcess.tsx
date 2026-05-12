import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Target, Lightbulb, Wrench, CheckCircle, ArrowRight, Search, Users, Zap, PenTool, Repeat } from 'lucide-react';

export function DesignThinkingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Empatia',
      subtitle: 'Empathize',
      shortDesc: 'Pochopenie potrieb',
      description: 'Cieľom je odložiť vlastné predpoklady a získať hlboký vhľad do potrieb, túžob a problémov používateľov. Používame rozhovory, pozorovanie a "tieňovanie".',
      icon: Heart,
      actionIcon: Users,
      color: 'bg-rose-100 text-rose-600 border-rose-200',
      highlight: 'rose',
      question: 'Čo používateľ skutočne cíti a prežíva?'
    },
    {
      id: 2,
      title: 'Definovanie',
      subtitle: 'Define',
      shortDesc: 'Formulácia problému',
      description: 'Syntéza zistení z empatie do jasného zadania (Problem Statement). Hľadáme vzorce a definujeme "Point of View" používateľa.',
      icon: Target,
      actionIcon: Search,
      color: 'bg-blue-100 text-blue-600 border-blue-200',
      highlight: 'blue',
      question: 'Aký skutočný problém riešime?'
    },
    {
      id: 3,
      title: 'Ideácia',
      subtitle: 'Ideate',
      shortDesc: 'Generovanie nápadov',
      description: 'Fáza divergencie - hľadáme čo najviac riešení bez kritiky. Brainstorming, SCAMPER, Worst Possible Idea. Kvantita vedie ku kvalite.',
      icon: Lightbulb,
      actionIcon: Zap,
      color: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      highlight: 'yellow',
      question: 'Aké sú všetky možné riešenia?'
    },
    {
      id: 4,
      title: 'Prototyp',
      subtitle: 'Prototype',
      shortDesc: 'Tvorba modelov',
      description: 'Rýchla a lacná tvorba hmatateľných verzií nápadov. Cieľom nie je dokonalosť, ale možnosť interakcie a učenia sa (Fail fast).',
      icon: Wrench,
      actionIcon: PenTool,
      color: 'bg-purple-100 text-purple-600 border-purple-200',
      highlight: 'purple',
      question: 'Ako to bude fungovať v realite?'
    },
    {
      id: 5,
      title: 'Testovanie',
      subtitle: 'Test',
      shortDesc: 'Overenie v praxi',
      description: 'Získavanie spätnej väzby od reálnych používateľov. Testovanie často odhalí nové problémy a vracia nás späť do predchádzajúcich fáz.',
      icon: CheckCircle,
      actionIcon: Repeat,
      color: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      highlight: 'emerald',
      question: 'Funguje to pre používateľa?'
    },
  ];

  return (
    <div className="w-full py-8 px-2 select-none">
      
      {/* Interactive Cards Row */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 relative mb-12">
        
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10" />

        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative flex flex-col items-center text-center cursor-pointer group w-full lg:w-1/5 p-4 rounded-2xl transition-all duration-300
                ${isActive ? 'bg-white shadow-xl border-2 border-' + step.highlight + '-100 ring-4 ring-' + step.highlight + '-50' : 'bg-white/50 hover:bg-white border border-transparent hover:shadow-md'}
              `}
            >
              {/* Icon Circle */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center border-2 shadow-sm mb-4 transition-all duration-300
                ${isActive ? step.color + ' scale-110' : 'bg-white text-gray-400 border-gray-100 group-hover:border-' + step.highlight + '-200 group-hover:text-' + step.highlight + '-500'}
              `}>
                <step.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center">
                <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-' + step.highlight + '-600' : 'text-gray-400'}`}>
                  FÁZA {step.id}
                </span>
                <h4 className={`font-bold text-lg mb-0.5 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>{step.title}</h4>
                <span className="text-xs text-gray-500 font-medium mb-2">{step.subtitle}</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className={`w-12 h-1 rounded-full bg-${step.highlight}-500 mt-2`}
                  />
                )}
              </div>

              {/* Arrow for Mobile */}
              {index < steps.length - 1 && (
                <ArrowRight className="lg:hidden w-6 h-6 text-gray-300 mt-4 transform rotate-90" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Detail View Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-${steps[activeStep].highlight}-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50`} />

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            
            {/* Left: Main Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${steps[activeStep].highlight}-100 text-${steps[activeStep].highlight}-600`}>
                  {(() => {
                    const Icon = steps[activeStep].actionIcon;
                    return <Icon className="w-5 h-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {steps[activeStep].title} <span className="text-gray-400 font-normal">({steps[activeStep].subtitle})</span>
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {steps[activeStep].description}
              </p>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${steps[activeStep].highlight}-50 text-${steps[activeStep].highlight}-700 text-sm font-medium`}>
                <span className="font-bold">Otázka:</span> {steps[activeStep].question}
              </div>
            </div>

            {/* Right: Context/Tips */}
            <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Kedy použiť?</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                {activeStep === 0 && (
                  <>
                    <li>• Keď nerozumiete používateľovi</li>
                    <li>• Pri riešení "ľudských" problémov</li>
                    <li>• Na začiatku projektu</li>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <li>• Keď je zadanie príliš široké</li>
                    <li>• Na zjednotenie tímu</li>
                    <li>• Pre určenie priorít</li>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <li>• Keď potrebujete nové nápady</li>
                    <li>• Keď ste zaseknutí</li>
                    <li>• Na prekonanie stereotypov</li>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <li>• Na rýchle overenie myšlienky</li>
                    <li>• Keď je ťažké vysvetliť nápad slovami</li>
                    <li>• Na zníženie rizika</li>
                  </>
                )}
                {activeStep === 4 && (
                  <>
                    <li>• Pred investíciou do vývoja</li>
                    <li>• Na odhalenie chýb</li>
                    <li>• Na získanie "buy-in" od stakeholderov</li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}

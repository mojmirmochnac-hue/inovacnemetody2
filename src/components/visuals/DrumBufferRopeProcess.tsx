import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Settings, ArrowDown, ArrowUp, RefreshCw, AlertTriangle, FileText, TrendingUp, Gauge, Activity, DollarSign, ArrowRight } from 'lucide-react';

export function DrumBufferRopeProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "1. Identifikovať",
      subtitle: "Nájdite úzke hrdlo",
      icon: Search,
      color: "blue",
      desc: "Nájdite úzke hrdlo systému (bottleneck). Môže to byť fyzický stroj, nedostatok talentov alebo neefektívna firemná politika.",
      detail: "Systém je len taký silný, ako jeho najslabšie ohnivko. Akékoľvek zlepšenie mimo obmedzenia nezvyšuje celkový výkon.",
      action: "Analyzujte tok práce a hľadajte miesto, kde sa hromadí práca (WIP)."
    },
    {
      id: 2,
      title: "2. Vyťažiť",
      subtitle: "Maximalizujte výkon",
      icon: Settings,
      color: "green",
      desc: "Maximalizácia výkonu úzkeho hrdla pomocou existujúcich zdrojov bez nutnosti drahých investícií.",
      detail: "Zabezpečte, aby úzke hrdlo nikdy nestálo (napr. počas prestávok) a spracovávalo len 100% kvalitné vstupy.",
      action: "Odstráňte prestoje, zabezpečte nepretržitú prevádzku obmedzenia."
    },
    {
      id: 3,
      title: "3. Podriadiť",
      subtitle: "Synchronizácia (DBR)",
      icon: ArrowDown,
      color: "yellow",
      desc: "Riadenie toku: Drum-Buffer-Rope. Všetko ostatné v systéme musí pracovať v rytme úzkeho hrdla.",
      detail: "Bubon (Drum) určuje takt. Zásobník (Buffer) chráni prietok. Lano (Rope) brzdí vstup, aby sa systém neprehlcoval.",
      action: "Spomaľte rýchlejšie procesy na úroveň úzkeho hrdla. Nevyrábajte na sklad."
    },
    {
      id: 4,
      title: "4. Povzniesť",
      subtitle: "Investícia",
      icon: ArrowUp,
      color: "orange",
      desc: "Investícia do novej technológie alebo personálu na definitívne zvýšenie kapacity a odstránenie úzkeho hrdla.",
      detail: "Až keď ste vyťažili maximum z existujúcich zdrojov (krok 2), má zmysel investovať do ďalšej kapacity.",
      action: "Kúpte ďalší stroj, najmite viac ľudí alebo outsourcujte časť práce."
    },
    {
      id: 5,
      title: "5. Návrat",
      subtitle: "Opakovanie",
      icon: RefreshCw,
      color: "red",
      desc: "Ak sa obmedzenie presunulo inam, proces sa opakuje. Je kritické nedovoliť zotrvačnosti ovládnuť myslenie.",
      detail: "TOC je proces neustáleho zlepšovania (POOGI). Po odstránení jedného hrdla sa objaví nové.",
      action: "Vráťte sa na krok 1 a hľadajte nové obmedzenie systému."
    }
  ];

  const constraints = [
    {
      title: "Fyzické obmedzenia",
      icon: Settings,
      desc: "Hmatateľné limity ako nízka kapacita stroja, chýbajúci materiál alebo nedostatok personálu."
    },
    {
      title: "Obmedzenia politík",
      icon: FileText,
      desc: "Neefektívne pravidlá ('vždy sme to tak robili') alebo mentálne vzorce, napr. snaha o 100% vyťaženosť všetkých za každú cenu."
    },
    {
      title: "Trhové obmedzenia",
      icon: TrendingUp,
      desc: "Situácia, kedy je kapacita systému vyššia, než je objem, ktorý je trh momentálne schopný absorbovať."
    }
  ];

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900">Teória obmedzení (TOC): 5 krokov v praxi</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          Princíp najslabšieho článku: Výkon celého systému je limitovaný jeho najužším miestom (obmedzením).
        </p>
      </div>

      {/* METRICS DASHBOARD */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm min-w-[200px]">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Activity className="w-5 h-5" />
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Prietok (T)</div>
                <div className="text-sm font-medium text-gray-900">Throughput</div>
            </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm min-w-[200px]">
            <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                <Gauge className="w-5 h-5" />
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Zásoby (I)</div>
                <div className="text-sm font-medium text-gray-900">Inventory</div>
            </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm min-w-[200px]">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
                <DollarSign className="w-5 h-5" />
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Náklady (OE)</div>
                <div className="text-sm font-medium text-gray-900">Operating Expense</div>
            </div>
        </div>
      </div>

      {/* PIPELINE VISUALIZATION */}
      <div className="relative max-w-6xl mx-auto mb-12">
        
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-100 -translate-y-1/2 rounded-full z-0 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                
                // Color mapping
                const colorMap = {
                    blue: 'bg-blue-100 text-blue-600 border-blue-200 ring-blue-100',
                    green: 'bg-green-100 text-green-600 border-green-200 ring-green-100',
                    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200 ring-yellow-100',
                    orange: 'bg-orange-100 text-orange-600 border-orange-200 ring-orange-100',
                    red: 'bg-red-100 text-red-600 border-red-200 ring-red-100'
                };
                
                const activeColorMap = {
                    blue: 'bg-blue-600 text-white border-blue-700 ring-blue-200',
                    green: 'bg-green-600 text-white border-green-700 ring-green-200',
                    yellow: 'bg-yellow-500 text-white border-yellow-600 ring-yellow-200',
                    orange: 'bg-orange-500 text-white border-orange-600 ring-orange-200',
                    red: 'bg-red-600 text-white border-red-700 ring-red-200'
                };

                return (
                    <motion.button
                        key={step.id}
                        onClick={() => setActiveStep(isActive ? null : step.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                            relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-300
                            ${isActive ? activeColorMap[step.color as keyof typeof activeColorMap] : 'bg-white border-gray-200 hover:border-gray-300'}
                            ${isActive ? 'shadow-lg ring-4' : 'shadow-sm'}
                        `}
                    >
                        <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors
                            ${isActive ? 'bg-white bg-opacity-20' : colorMap[step.color as keyof typeof colorMap]}
                        `}>
                            <Icon className="w-6 h-6" />
                        </div>
                        
                        <div className="text-center">
                            <div className={`text-xs font-bold uppercase mb-1 ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                                Krok {step.id}
                            </div>
                            <div className={`font-bold text-sm leading-tight ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                {step.title}
                            </div>
                        </div>

                        {/* Arrow for mobile flow */}
                        {index < steps.length - 1 && (
                            <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-300 z-0">
                                <ArrowDown className="w-6 h-6" />
                            </div>
                        )}
                    </motion.button>
                );
            })}
        </div>
      </div>

      {/* DETAIL PANEL */}
      <div className="max-w-4xl mx-auto mb-16 min-h-[200px]">
        <AnimatePresence mode="wait">
            {activeStep ? (
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="p-6 md:p-8 md:w-2/3">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                                    Krok {activeStep}
                                </span>
                                <h4 className="text-xl font-bold text-gray-900">
                                    {steps[activeStep-1].subtitle}
                                </h4>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                {steps[activeStep-1].desc}
                            </p>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <h5 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                                    <Activity className="w-4 h-4" /> Detail
                                </h5>
                                <p className="text-sm text-gray-800">
                                    {steps[activeStep-1].detail}
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 md:p-8 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center">
                            <h5 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" /> Akcia
                            </h5>
                            <p className="text-sm font-medium text-gray-900 italic">
                                "{steps[activeStep-1].action}"
                            </p>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                >
                    <Search className="w-12 h-12 text-gray-300 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900">Vyberte krok procesu</h4>
                    <p className="text-gray-500 text-sm mt-2">
                        Kliknite na jeden z 5 krokov vyššie pre zobrazenie detailov a stratégie.
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* TYPOLOGY SECTION */}
      <div className="max-w-6xl mx-auto">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 text-center">
            Typológia obmedzení
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {constraints.map((c, i) => {
                const Icon = c.icon;
                return (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h5 className="font-bold text-gray-900">{c.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {c.desc}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>

    </div>
  );
}

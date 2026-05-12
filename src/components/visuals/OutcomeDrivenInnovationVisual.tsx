import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, TrendingDown, CheckCircle, AlertCircle, Info, MousePointerClick, HelpCircle, Zap, BarChart, Lightbulb } from 'lucide-react';

export function OutcomeDrivenInnovationVisual() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  const outcomes = [
    {
      id: 'underserved',
      title: 'Poddimenzovaná potreba',
      zone: 'Underserved (Príležitosť)',
      importance: 9,
      satisfaction: 2,
      x: '20%', // Low Satisfaction
      y: '10%', // High Importance (Top)
      color: 'bg-red-500',
      ring: 'ring-red-200',
      icon: TrendingUp,
      desc: 'Zákazníci považujú tento výsledok za kriticky dôležitý, ale súčasné riešenia sú nedostatočné. Toto je "zlatá baňa" pre inovácie.',
      strategy: 'Vytvorte prelomový produkt, ktorý túto potrebu vyrieši. Zákazníci sú ochotní zaplatiť viac.',
      example: 'Rýchlosť doručenia jedla pred príchodom donáškových aplikácií.',
      questions: [
        "Ktoré kroky v procese vám trvajú najdlhšie?",
        "Kde robíte najčastejšie chyby?",
        "Za čo by ste boli ochotní priplatiť, ak by to fungovalo perfektne?"
      ],
      tactic: "Zamerajte sa na funkčnosť a výkon. Cena nie je hlavný problém, ak vyriešite bolesť.",
      metric: "Opportunity Score = Dôležitosť + (Dôležitosť - Spokojnosť). Cieľ > 10."
    },
    {
      id: 'overserved',
      title: 'Predimenzovaná potreba',
      zone: 'Overserved (Disrupcia)',
      importance: 3,
      satisfaction: 9,
      x: '80%', // High Satisfaction
      y: '80%', // Low Importance (Bottom)
      color: 'bg-gray-400',
      ring: 'ring-gray-200',
      icon: TrendingDown,
      desc: 'Súčasné riešenia sú lepšie (a drahšie), než zákazník reálne potrebuje. Zákazník platí za funkcie, ktoré nepoužíva.',
      strategy: 'Zjednodušte produkt, znížte cenu a sprístupnite ho masám (Low-end disruption).',
      example: 'Profesionálny Photoshop pre niekoho, kto chce len orezať fotku.',
      questions: [
        "Ktoré funkcie produktu vôbec nepoužívate?",
        "Zdá sa vám produkt príliš komplikovaný alebo drahý?",
        "Stačila by vám jednoduchšia verzia za polovičnú cenu?"
      ],
      tactic: "Odstráňte zbytočné funkcie. Znížte bariéry vstupu. Cielite na 'non-consumers'.",
      metric: "Cost to Serve, Price Elasticity, Adoption Rate nového segmentu."
    },
    {
      id: 'served',
      title: 'Primerane obslúžená potreba',
      zone: 'Appropriately Served (Konkurencia)',
      importance: 6,
      satisfaction: 6,
      x: '50%',
      y: '50%',
      color: 'bg-green-500',
      ring: 'ring-green-200',
      icon: CheckCircle,
      desc: 'Trh je v rovnováhe. Zákazníci sú spokojní úmerne k dôležitosti potreby. Ťažko tu získať veľký podiel bez obrovských investícií.',
      strategy: 'Inkrementálne inovácie (lepšie, rýchlejšie, lacnejšie). Budovanie značky a emócií.',
      example: 'Trh s bežnými zubnými pastami.',
      questions: [
        "V čom je konkurencia o trochu lepšia?",
        "Aké drobné vylepšenia by vás potešili?",
        "Prečo ste si vybrali práve túto značku?"
      ],
      tactic: "Marketing, branding, vernostné programy. Malé vylepšenia UX.",
      metric: "Net Promoter Score (NPS), Market Share, Brand Awareness."
    },
    {
      id: 'irrelevant',
      title: 'Irelevantná potreba',
      zone: 'Irrelevant',
      importance: 2,
      satisfaction: 2,
      x: '20%',
      y: '85%',
      color: 'bg-gray-200',
      ring: 'ring-gray-100',
      icon: AlertCircle,
      desc: 'Zákazníkom na tomto nezáleží a ani to neriešia. Nestrácajte tu čas a zdroje.',
      strategy: 'Ignorovať. Nevyvíjajte funkcie, ktoré nikto nechce.',
      example: 'Farba vnútornej súčiastky, ktorú nikto nevidí.',
      questions: [
        "Záleží vám vôbec na tomto parametri?",
        "Všimli by ste si, keby táto funkcia zmizla?"
      ],
      tactic: "Stop development. Presuňte zdroje na 'Underserved' potreby.",
      metric: "Usage Rate (mala by byť blízka nule)."
    }
  ];

  const getActiveData = () => outcomes.find(o => o.id === activePoint);

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">Mapa príležitostí (The Opportunity Landscape)</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          Kliknite na body v grafe pre zobrazenie stratégie pre daný typ trhovej príležitosti.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
        
        {/* CHART AREA */}
        <div className="relative w-full lg:w-1/2 aspect-square bg-white rounded-xl border-l-2 border-b-2 border-gray-300 shadow-sm p-4">
            
            {/* Axis Labels */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-400 tracking-widest whitespace-nowrap">
                DÔLEŽITOSŤ (IMPORTANCE)
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400 tracking-widest whitespace-nowrap">
                SPOKOJNOSŤ (SATISFACTION)
            </div>

            {/* Background Zones */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Underserved Zone Hint */}
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-50/50 rounded-br-[100px] border-r border-b border-red-100 border-dashed pointer-events-none flex p-4">
                    <span className="text-[10px] font-bold text-red-300 uppercase">Príležitosť</span>
                </div>
                {/* Overserved Zone Hint */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gray-50/50 rounded-tl-[100px] border-l border-t border-gray-200 border-dashed pointer-events-none flex items-end justify-end p-4">
                    <span className="text-[10px] font-bold text-gray-300 uppercase text-right">Disrupcia</span>
                </div>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
                <div className="border-r border-b border-gray-100 border-dashed"></div>
                <div className="border-b border-gray-100 border-dashed"></div>
                <div className="border-r border-gray-100 border-dashed"></div>
                <div></div>
            </div>

            {/* Interactive Points */}
            {outcomes.map((item) => {
                const isActive = activePoint === item.id;
                return (
                    <motion.button
                        key={item.id}
                        onClick={() => setActivePoint(item.id)}
                        className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white shadow-lg focus:outline-none z-10 transition-all duration-300 ${item.color} ${isActive ? 'scale-150 ring-4 ' + item.ring : 'hover:scale-125'}`}
                        style={{ left: item.x, top: item.y }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isActive && (
                            <motion.div 
                                layoutId="pulse"
                                className={`absolute inset-0 rounded-full ${item.color} opacity-50`}
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </motion.button>
                );
            })}

            {/* Helper Text if nothing selected */}
            {!activePoint && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 p-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2 animate-pulse">
                        <MousePointerClick className="w-4 h-4 text-indigo-500" />
                        <span className="text-xs font-medium text-gray-500">Vyberte bod</span>
                    </div>
                </div>
            )}

        </div>

        {/* DETAIL PANEL */}
        <div className="w-full lg:w-1/2 min-h-[500px]">
            <AnimatePresence mode="wait">
                {activePoint ? (
                    <motion.div
                        key={activePoint}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg h-full flex flex-col"
                    >
                        {(() => {
                            const data = getActiveData()!;
                            const Icon = data.icon;
                            return (
                                <>
                                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                        <div className={`p-3 rounded-xl ${data.color} bg-opacity-20`}>
                                            <Icon className={`w-8 h-8 ${data.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{data.zone}</div>
                                            <h4 className="text-2xl font-bold text-gray-900">{data.title}</h4>
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        
                                        {/* Description */}
                                        <div>
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                {data.desc}
                                            </p>
                                        </div>

                                        {/* Strategy Box */}
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                            <h5 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                                                <Lightbulb className="w-3 h-3" /> Stratégia
                                            </h5>
                                            <p className="text-gray-900 font-bold text-sm">
                                                {data.strategy}
                                            </p>
                                        </div>

                                        {/* Questions & Tactics Grid */}
                                        <div className="grid grid-cols-1 gap-4">
                                            
                                            {/* Questions */}
                                            <div>
                                                <h5 className="text-xs font-bold text-indigo-600 uppercase mb-2 flex items-center gap-2">
                                                    <HelpCircle className="w-3 h-3" /> Kľúčové otázky
                                                </h5>
                                                <ul className="space-y-1">
                                                    {data.questions?.map((q, i) => (
                                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                            <span className="text-indigo-300">•</span> {q}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                                {/* Tactic */}
                                                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                                                    <h5 className="text-[10px] font-bold text-indigo-800 uppercase mb-1 flex items-center gap-1">
                                                        <Zap className="w-3 h-3" /> Taktika
                                                    </h5>
                                                    <p className="text-xs text-indigo-900 leading-snug">
                                                        {data.tactic}
                                                    </p>
                                                </div>

                                                {/* Metric */}
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                                    <h5 className="text-[10px] font-bold text-gray-600 uppercase mb-1 flex items-center gap-1">
                                                        <BarChart className="w-3 h-3" /> Metrika
                                                    </h5>
                                                    <p className="text-xs text-gray-700 leading-snug">
                                                        {data.metric}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Example Footer */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <span className="text-xs font-bold text-gray-400 uppercase mr-2">Príklad:</span>
                                            <span className="text-sm text-gray-600 italic">"{data.example}"</span>
                                        </div>
                                    </div>
                                    
                                    {/* Score Bars */}
                                    <div className="mt-6 grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-xl">
                                        <div className="text-center">
                                            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Dôležitosť</div>
                                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-800" style={{ width: `${data.importance * 10}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Spokojnosť</div>
                                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-800" style={{ width: `${data.satisfaction * 10}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                    >
                        <Target className="w-16 h-16 text-gray-300 mb-6" />
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Detail príležitosti</h4>
                        <p className="text-gray-500 text-sm max-w-xs mx-auto">
                            Kliknite na bod v grafe, aby ste videli, akú inovačnú stratégiu zvoliť pre danú kombináciu dôležitosti a spokojnosti.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

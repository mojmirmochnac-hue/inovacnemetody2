import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MinusCircle, Copy, Scissors, Merge, Sliders, Lightbulb, Box, ArrowRight } from 'lucide-react';

export function SystematicInventiveThinkingVisual() {
  const [activePattern, setActivePattern] = useState<string | null>(null);

  const patterns = {
    subtraction: {
      id: 'subtraction',
      title: 'Odčítanie (Subtraction)',
      subtitle: 'Menej je viac',
      icon: MinusCircle,
      color: 'bg-red-100 text-red-700 border-red-200',
      highlight: 'red',
      desc: 'Odstráňte kľúčovú (nie zbytočnú!) súčasť produktu. Núti vás to nájsť náhradu v "uzavretom svete" alebo zmeniť funkciu produktu.',
      principle: 'Funkcia nasleduje formu (Function Follows Form).',
      example: 'Bicykel bez pedálov (odrážadlo pre deti), nahrávacie zariadenie bez pásky (diktafón v mobile), banka bez pobočiek (online banka).'
    },
    multiplication: {
      id: 'multiplication',
      title: 'Násobenie (Multiplication)',
      subtitle: 'Viac toho istého, ale inak',
      icon: Copy,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      desc: 'Vezmite existujúci komponent, skopírujte ho, ale zmeňte jeho funkciu alebo vlastnosť. Nie je to len "viac toho istého".',
      principle: 'Kvantitatívna zmena vedie ku kvalitatívnej zmene.',
      example: 'Dvojitá čepeľ na holiacom strojčeku (prvá dvíha chlp, druhá reže), duálny fotoaparát na mobile (širokouhlý + zoom).'
    },
    division: {
      id: 'division',
      title: 'Rozdelenie (Division)',
      subtitle: 'Rozdeľ a panuj',
      icon: Scissors,
      color: 'bg-green-100 text-green-700 border-green-200',
      highlight: 'green',
      desc: 'Rozdeľte produkt alebo proces na časti a tie reorganizujte v čase alebo priestore.',
      principle: 'Dekonštrukcia umožňuje novú konfiguráciu.',
      example: 'Rozdelenie motora a ovládania (diaľkové ovládanie), rozdelenie platby (splátky), check-in z domu pred letom.'
    },
    unification: {
      id: 'unification',
      title: 'Zjednotenie úloh (Task Unification)',
      subtitle: 'Všetko má svoj účel',
      icon: Merge,
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      highlight: 'purple',
      desc: 'Priraďte novú úlohu existujúcemu zdroju (komponentu produktu alebo prostredia). Využite to, čo už máte.',
      principle: 'Maximálne využitie zdrojov v uzavretom svete.',
      example: 'Odmrazovanie zadného skla auta slúži aj ako anténa rádia. Krabica od pizze slúži ako tanier.'
    },
    dependency: {
      id: 'dependency',
      title: 'Závislosť atribútov (Attribute Dependency)',
      subtitle: 'Inteligentná adaptácia',
      icon: Sliders,
      color: 'bg-amber-100 text-amber-700 border-amber-200',
      highlight: 'amber',
      desc: 'Vytvorte alebo zrušte závislosť medzi dvoma vlastnosťami produktu (napr. farba a teplota). Produkt sa mení podľa podmienok.',
      principle: 'Statický produkt sa stáva dynamickým/smart.',
      example: 'Okuliare, ktoré stmavnú na slnku. Stierače, ktoré zrýchlia pri silnom daždi. Cena Uberu závislá od dopytu.'
    }
  };

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">5 myšlienkových vzorcov SIT</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          SIT (Systematic Inventive Thinking) vás núti myslieť "vo vnútri krabice" (Closed World). 
          Kliknite na vzorec pre zobrazenie princípu a príkladu.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
        
        {/* Interactive Box (Closed World) */}
        <div className="relative w-full lg:w-1/2 aspect-square bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center">
            
            <div className="absolute top-4 left-4 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Box className="w-4 h-4" />
                Uzavretý svet (Closed World)
            </div>

            <div className="grid grid-cols-2 gap-4 w-full h-full">
                {/* Subtraction */}
                <PatternCard 
                    pattern={patterns.subtraction} 
                    isActive={activePattern === 'subtraction'} 
                    onClick={() => setActivePattern('subtraction')}
                    position="col-span-2 sm:col-span-1"
                />
                {/* Multiplication */}
                <PatternCard 
                    pattern={patterns.multiplication} 
                    isActive={activePattern === 'multiplication'} 
                    onClick={() => setActivePattern('multiplication')}
                    position="col-span-2 sm:col-span-1"
                />
                {/* Division */}
                <PatternCard 
                    pattern={patterns.division} 
                    isActive={activePattern === 'division'} 
                    onClick={() => setActivePattern('division')}
                    position="col-span-2 sm:col-span-1"
                />
                {/* Unification */}
                <PatternCard 
                    pattern={patterns.unification} 
                    isActive={activePattern === 'unification'} 
                    onClick={() => setActivePattern('unification')}
                    position="col-span-2 sm:col-span-1"
                />
                {/* Dependency (Center/Full) */}
                <PatternCard 
                    pattern={patterns.dependency} 
                    isActive={activePattern === 'dependency'} 
                    onClick={() => setActivePattern('dependency')}
                    position="col-span-2"
                />
            </div>

        </div>

        {/* Detail Panel */}
        <div className="w-full lg:w-1/2 min-h-[400px]">
            <AnimatePresence mode="wait">
                {activePattern ? (
                    <motion.div
                        key={activePattern}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`bg-white rounded-2xl p-8 border-2 border-${patterns[activePattern as keyof typeof patterns].highlight}-100 shadow-lg h-full flex flex-col`}
                    >
                        {(() => {
                            const data = patterns[activePattern as keyof typeof patterns];
                            const Icon = data.icon;
                            return (
                                <>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-4 rounded-xl ${data.color}`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-gray-900">{data.title}</h4>
                                            <span className="text-gray-500 font-medium">{data.subtitle}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        <div>
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                {data.desc}
                                            </p>
                                        </div>

                                        <div className={`bg-${data.highlight}-50 p-5 rounded-xl border border-${data.highlight}-100`}>
                                            <h5 className={`text-sm font-bold text-${data.highlight}-800 uppercase mb-2 flex items-center gap-2`}>
                                                <Lightbulb className="w-4 h-4" />
                                                Princíp
                                            </h5>
                                            <p className={`text-${data.highlight}-900 font-medium`}>
                                                {data.principle}
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-bold text-gray-900 uppercase mb-2">Príklad z praxe</h5>
                                            <div className="flex items-start gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                                                <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                                                <p className="italic">"{data.example}"</p>
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
                        className="h-full flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300"
                    >
                        <Box className="w-16 h-16 text-gray-300 mb-6" />
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Vyberte inovačný vzorec</h4>
                        <p className="text-gray-500 max-w-sm mx-auto">
                            Kliknite na jednu z kariet vľavo a zistite, ako systematicky inovovať pomocou obmedzení.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function PatternCard({ pattern, isActive, onClick, position }: any) {
    const Icon = pattern.icon;
    return (
        <motion.button
            onClick={onClick}
            className={`
                ${position} relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-2
                ${isActive 
                    ? `bg-white border-${pattern.highlight}-400 shadow-md scale-[1.02] z-10` 
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className={`p-2 rounded-full ${isActive ? pattern.color : 'bg-gray-100 text-gray-400'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <span className={`text-xs font-bold uppercase tracking-wide ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                {pattern.title.split('(')[0]}
            </span>
        </motion.button>
    );
}

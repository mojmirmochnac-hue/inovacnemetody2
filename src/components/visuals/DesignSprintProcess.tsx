import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, PenTool, CheckSquare, Hammer, Users, Clock, Target, Lightbulb, MessageSquare, AlertCircle } from 'lucide-react';

export const DesignSprintProcess = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const days = [
    {
      id: 0,
      day: 'Pondelok',
      title: 'Map',
      subtitle: 'Pochopenie problému',
      icon: Map,
      desc: 'Definovanie dlhodobého cieľa a mapovanie výzvy. Pýtame sa expertů a vyberáme cieľovú oblasť.',
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      highlight: 'yellow',
      activities: ['Expert Interviews', 'HMW (How Might We)', 'Long Term Goal', 'Mapovanie'],
      goal: 'Dohodnúť sa na probléme a cieli.'
    },
    {
      id: 1,
      day: 'Utorok',
      title: 'Sketch',
      subtitle: 'Hľadanie riešení',
      icon: PenTool,
      desc: 'Namiesto skupinového brainstormingu každý pracuje samostatne na skicovaní riešení.',
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      highlight: 'blue',
      activities: ['Lightning Demos', 'Crazy 8s', 'Solution Sketch'],
      goal: 'Vygenerovať konkrétne vizuálne riešenia.'
    },
    {
      id: 2,
      day: 'Streda',
      title: 'Decide',
      subtitle: 'Výber najlepšieho',
      icon: CheckSquare,
      desc: 'Kritický výber najlepších nápadov bez nekonečných diskusií. Tvorba storyboardu pre prototyp.',
      color: 'bg-green-100 text-green-700 border-green-200',
      highlight: 'green',
      activities: ['Art Museum', 'Heat Map', 'Speed Critique', 'Storyboard'],
      goal: 'Vybrať riešenie na prototypovanie.'
    },
    {
      id: 3,
      day: 'Štvrtok',
      title: 'Prototype',
      subtitle: 'Stavba modelu',
      icon: Hammer,
      desc: 'Tvorba realistického prototypu (nie funkčného produktu). Musí vyzerať skutočne ("Fake it till you make it").',
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      highlight: 'purple',
      activities: ['Assign Roles', 'Build Prototype', 'Trial Run'],
      goal: 'Vytvoriť niečo testovateľné za 1 deň.'
    },
    {
      id: 4,
      day: 'Piatok',
      title: 'Test',
      subtitle: 'Validácia',
      icon: Users,
      desc: 'Individuálne rozhovory s 5 reálnymi používateľmi. Sledujeme ich reakcie na prototyp.',
      color: 'bg-rose-100 text-rose-700 border-rose-200',
      highlight: 'rose',
      activities: ['User Interviews', 'Scorecard', 'Debrief'],
      goal: 'Zistiť, či nápad funguje alebo nie.'
    }
  ];

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
          <Clock className="w-4 h-4" />
          <span>5 dní od problému k riešeniu</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Design Sprint Process</h3>
        <p className="text-gray-500 text-sm mt-2">Kliknite na deň pre detailný plán aktivít.</p>
      </div>

      {/* Timeline / Cards */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full" />

        {days.map((item, idx) => {
          const isActive = activeDay === idx;
          return (
            <motion.div 
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`
                flex-1 flex flex-col items-center p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all duration-300 relative bg-white
                ${isActive ? `ring-4 ring-${item.highlight}-100 border-${item.highlight}-400 scale-105 z-10` : 'border-gray-100 hover:border-gray-300 hover:shadow-md'}
              `}
              whileHover={{ y: -5 }}
            >
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300
                ${isActive ? item.color : 'bg-gray-50 text-gray-400'}
              `}>
                <item.icon className="w-6 h-6" />
              </div>
              
              <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? `text-${item.highlight}-600` : 'text-gray-400'}`}>
                {item.day}
              </span>
              <h3 className={`text-lg font-black ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                {item.title}
              </h3>
              
              {isActive && (
                <motion.div 
                  layoutId="active-indicator-sprint"
                  className={`absolute -bottom-2 w-2 h-2 rounded-full bg-${item.highlight}-500`}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Detail View */}
      <AnimatePresence mode="wait">
        {activeDay !== null ? (
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`bg-white rounded-2xl p-6 border-2 border-${days[activeDay].highlight}-100 shadow-lg`}
          >
            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Left: Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${days[activeDay].color}`}>
                    {(() => {
                      const Icon = days[activeDay].icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{days[activeDay].title}</h4>
                    <span className="text-gray-500 font-medium">{days[activeDay].subtitle}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {days[activeDay].desc}
                </p>

                <div className={`flex items-start gap-3 p-4 rounded-xl bg-${days[activeDay].highlight}-50 border border-${days[activeDay].highlight}-100`}>
                  <Target className={`w-5 h-5 text-${days[activeDay].highlight}-600 mt-0.5 shrink-0`} />
                  <div>
                    <span className={`block text-xs font-bold text-${days[activeDay].highlight}-600 uppercase mb-1`}>Cieľ dňa</span>
                    <p className={`text-sm font-medium text-${days[activeDay].highlight}-900`}>{days[activeDay].goal}</p>
                  </div>
                </div>
              </div>

              {/* Right: Activities */}
              <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Kľúčové aktivity
                </h5>
                <ul className="space-y-3">
                  {days[activeDay].activities.map((activity, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${days[activeDay].highlight}-400`} />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
          >
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900">Vyberte deň sprintu</h4>
            <p className="text-gray-500 max-w-md mx-auto">
              Kliknite na karty dní (Pondelok - Piatok) pre zobrazenie detailného harmonogramu a cieľov.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Warning/Tip */}
      <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 text-sm text-amber-800">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <p>
          <strong>Tip:</strong> Design Sprint vyžaduje plné sústredenie tímu. Žiadne emaily, žiadne iné meetingy. 
          Kľúčový je "Facilitátor", ktorý stráži čas a proces.
        </p>
      </div>

    </div>
  );
};

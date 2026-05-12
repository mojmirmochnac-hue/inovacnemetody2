import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Building2, GraduationCap, Lightbulb, Users, ArrowRight, Network } from 'lucide-react';

export function OpenInnovationEcosystem() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers = {
    core: {
      id: 'core',
      title: 'Vaša Organizácia (Inovačný Hub)',
      description: 'Centrum ekosystému. Tu sa integrujú externé a interné poznatky. Vašou úlohou nie je všetko vymyslieť, ale všetko prepojiť.',
      icon: Building2,
      color: 'bg-indigo-600',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-200',
      bgLight: 'bg-indigo-50',
      activities: ['Integrácia R&D', 'Strategické partnerstvá', 'IP Management']
    },
    inner: {
      id: 'inner',
      title: 'Tvorba znalostí (Knowledge Creation)',
      description: 'Zóna základného výskumu a hlbokej expertízy. Spolupráca s univerzitami a vedeckými inštitúciami na objavovaní nových princípov.',
      icon: GraduationCap,
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-300',
      bgLight: 'bg-blue-50',
      activities: ['Sponzorovaný výskum', 'PhD programy', 'Vedecké granty']
    },
    middle: {
      id: 'middle',
      title: 'Spoločný vývoj (Co-Development)',
      description: 'Zóna aplikovaného výskumu a technológií. Partnerstvá s dodávateľmi, technologickými firmami a špecializovanými laboratóriami.',
      icon: Network,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-300',
      bgLight: 'bg-emerald-50',
      activities: ['Joint Ventures', 'Licencovanie technológií', 'Dodávateľské inovácie']
    },
    outer: {
      id: 'outer',
      title: 'Trh a Komunita (Market & Community)',
      description: 'Najširšia zóna. Zahŕňa zákazníkov, startupy, crowdsourcing a otvorenú komunitu. Zdroj "divokých" nápadov a trhovej validácie.',
      icon: Globe,
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-300',
      bgLight: 'bg-amber-50',
      activities: ['Crowdsourcing', 'Hackathony', 'Startup akcelerátory', 'User Innovation']
    }
  };

  return (
    <div className="w-full py-8 px-2 select-none">
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">Ekosystém otvorenej inovácie</h3>
        <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
          Kliknite na jednotlivé vrstvy ekosystému pre zobrazenie typov partnerstiev a aktivít.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        
        {/* Interactive Visual Layer */}
        <div className="relative aspect-square max-w-[500px] mx-auto w-full flex items-center justify-center">
          
          {/* Background Grid/Context */}
          <div className="absolute inset-0 border-2 border-dashed border-gray-100 rounded-full opacity-50" />
          
          {/* Outer Layer Button */}
          <LayerButton 
            size="w-[100%] h-[100%]" 
            layer={layers.outer} 
            isActive={activeLayer === 'outer'} 
            onClick={() => setActiveLayer('outer')}
            zIndex={10}
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-amber-600/60">Trh & Komunita</div>
            {/* Entities */}
            <EntityDot x="15%" y="25%" color="bg-amber-400" label="Startups" />
            <EntityDot x="85%" y="75%" color="bg-amber-400" label="Users" />
            <EntityDot x="20%" y="70%" color="bg-amber-400" label="Crowd" />
          </LayerButton>

          {/* Middle Layer Button */}
          <LayerButton 
            size="w-[75%] h-[75%]" 
            layer={layers.middle} 
            isActive={activeLayer === 'middle'} 
            onClick={() => setActiveLayer('middle')}
            zIndex={20}
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-emerald-600/60">Co-Development</div>
            {/* Entities */}
            <EntityDot x="20%" y="40%" color="bg-emerald-500" label="Suppliers" />
            <EntityDot x="80%" y="30%" color="bg-emerald-500" label="Tech Partners" />
            <EntityDot x="60%" y="80%" color="bg-emerald-500" label="Labs" />
          </LayerButton>

          {/* Inner Layer Button */}
          <LayerButton 
            size="w-[50%] h-[50%]" 
            layer={layers.inner} 
            isActive={activeLayer === 'inner'} 
            onClick={() => setActiveLayer('inner')}
            zIndex={30}
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-blue-600/60">Knowledge</div>
            {/* Entities */}
            <EntityDot x="30%" y="30%" color="bg-blue-500" label="Uni" />
            <EntityDot x="70%" y="70%" color="bg-blue-500" label="Science" />
          </LayerButton>

          {/* Core Button */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); setActiveLayer('core'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              absolute z-40 w-[25%] h-[25%] rounded-full flex items-center justify-center shadow-xl border-4 transition-all duration-300
              ${activeLayer === 'core' ? 'bg-indigo-600 border-indigo-200 scale-110' : 'bg-indigo-500 border-white hover:bg-indigo-600'}
            `}
          >
            <Building2 className="w-1/2 h-1/2 text-white" />
          </motion.button>

        </div>

        {/* Detail Panel */}
        <div className="h-full flex items-center">
          <AnimatePresence mode="wait">
            {activeLayer ? (
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`w-full bg-white rounded-2xl p-8 border-2 ${layers[activeLayer as keyof typeof layers].borderColor} shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${layers[activeLayer as keyof typeof layers].bgLight}`}>
                    {(() => {
                      const l = layers[activeLayer as keyof typeof layers];
                      const Icon = l.icon;
                      return <Icon className={`w-8 h-8 ${l.textColor.replace('text-', 'text-')}`} />; // Simple hack, usually text-color works
                    })()}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{layers[activeLayer as keyof typeof layers].title}</h4>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vrstva ekosystému</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {layers[activeLayer as keyof typeof layers].description}
                </p>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h5 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Typické aktivity
                  </h5>
                  <ul className="space-y-2">
                    {layers[activeLayer as keyof typeof layers].activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight className={`w-4 h-4 ${layers[activeLayer as keyof typeof layers].textColor}`} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full text-center p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
              >
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Preskúmajte ekosystém</h4>
                <p className="text-gray-500 text-sm">
                  Otvorená inovácia nie je len o vás. Kliknite na vrstvy vľavo a zistite, s kým a ako spolupracovať.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function LayerButton({ size, layer, isActive, onClick, children, zIndex }: any) {
  return (
    <motion.div
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`absolute rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center ${size}`}
      style={{ zIndex }}
      animate={{
        backgroundColor: isActive ? layer.color + '20' : layer.color + '05', // Hex opacity hack or use rgba
        borderColor: isActive ? layer.color.replace('bg-', 'border-') : 'transparent', // This needs proper color mapping, simplified here
        scale: isActive ? 1.02 : 1,
        boxShadow: isActive ? '0 0 40px rgba(0,0,0,0.1)' : 'none'
      }}
      whileHover={{ scale: 1.02, backgroundColor: layer.color + '10' }}
    >
      {/* Visual Border Ring */}
      <div className={`absolute inset-0 rounded-full border-2 border-dashed ${isActive ? 'border-transparent' : 'border-gray-200'} pointer-events-none`} />
      
      {children}
    </motion.div>
  );
}

function EntityDot({ x, y, color, label }: { x: string, y: string, color: string, label: string }) {
  return (
    <div 
      className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: x, top: y }}
    >
      <div className={`w-3 h-3 rounded-full ${color} shadow-sm mb-1`} />
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider bg-white/80 px-1 rounded backdrop-blur-sm">{label}</span>
    </div>
  );
}

import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { extendedMethods } from '../data/extendedMethods';
import { innovationMethods } from '../data/methods';
import { ArrowLeft, BookOpen, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DesignSprintProcess } from '../components/visuals/DesignSprintProcess';
import { LeanStartupCycle } from '../components/visuals/LeanStartupCycle';
import { DesignThinkingProcess } from '../components/visuals/DesignThinkingProcess';
import { DrumBufferRopeProcess } from '../components/visuals/DrumBufferRopeProcess';
import { OpenInnovationEcosystem } from '../components/visuals/OpenInnovationEcosystem';
import { CircularDesignProcess } from '../components/visuals/CircularDesignProcess';
import { JobsToBeDoneVisual } from '../components/visuals/JobsToBeDoneVisual';
import { OutcomeDrivenInnovationVisual } from '../components/visuals/OutcomeDrivenInnovationVisual';
import { SystematicInventiveThinkingVisual } from '../components/visuals/SystematicInventiveThinkingVisual';

export default function MethodPage() {
  const { methodId } = useParams<{ methodId: string }>();
  const location = useLocation();
  const fromTest = location.state?.fromTest;
  
  const extendedData = methodId ? extendedMethods[methodId] : null;
  const basicData = innovationMethods.find(m => m.id === methodId);

  if (!basicData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Metóda sa nenašla</h1>
          <Link to={fromTest ? "/test" : "/"} className="text-indigo-600 hover:text-indigo-800 font-medium">
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            {fromTest ? "Späť na výsledky testu" : "Späť na katalóg"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link to={fromTest ? "/test" : "/"} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {fromTest ? "Späť na výsledky testu" : "Späť na katalóg"}
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 uppercase tracking-wide">
              {basicData.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {extendedData ? extendedData.title : basicData.title}
          </h1>
          
          <ExpandableIntro text={extendedData ? extendedData.intro : basicData.shortDescription} />
        </div>
      </div>

      {/* Visual Process Section (Specific for Design Sprint) */}
      {methodId === 'design-sprint' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4">
              Vizuálny proces Design Sprintu
            </h3>
            <DesignSprintProcess />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for Lean Startup) */}
      {methodId === 'lean-startup' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Cyklus Build - Measure - Learn
            </h3>
            <LeanStartupCycle />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for Design Thinking) */}
      {methodId === 'design-thinking' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              5 fáz Design Thinking procesu
            </h3>
            <DesignThinkingProcess />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for TOC) */}
      {methodId === 'toc' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Drum - Buffer - Rope (Riadenie toku)
            </h3>
            <DrumBufferRopeProcess />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for Open Innovation) */}
      {methodId === 'open-innovation' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Ekosystém otvorenej inovácie
            </h3>
            <OpenInnovationEcosystem />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for Circular Design) */}
      {methodId === 'circular-design' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Cirkulárny model (Butterfly Diagram)
            </h3>
            <CircularDesignProcess />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for JTBD) */}
      {methodId === 'jtbd' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Sily pokroku (Forces of Progress)
            </h3>
            <JobsToBeDoneVisual />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for ODI) */}
      {methodId === 'odi' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              Mapa príležitostí (Opportunity Landscape)
            </h3>
            <OutcomeDrivenInnovationVisual />
          </div>
        </div>
      )}

      {/* Visual Process Section (Specific for SIT) */}
      {methodId === 'sit' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b pb-4 text-center">
              5 myšlienkových vzorcov SIT
            </h3>
            <SystematicInventiveThinkingVisual />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {extendedData ? (
          <div className="space-y-12">
            {extendedData.sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-indigo-500 rounded-full" />
                  {section.title}
                </h2>
                
                <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-line">{section.content}</p>
                  
                  {section.list && (
                    <ul className="mt-6 space-y-3 list-none pl-0">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.section>
            ))}
          </div>
        ) : (
          /* Fallback for methods without extended content */
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Detailný popis pripravujeme</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Pre túto metódu zatiaľ nemáme spracovaný rozšírený obsah. Využite prosím informácie v rýchlom náhľade.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

function ExpandableIntro({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > 250;

  if (!isLong) {
    return (
      <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
        {text}
      </p>
    );
  }

  return (
    <div className="max-w-3xl relative">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 100 }}
        className="overflow-hidden relative"
      >
        <p className="text-xl text-gray-600 leading-relaxed pb-2">
          {text}
        </p>
        
        <AnimatePresence>
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 inline-flex items-center gap-1 text-indigo-600 font-bold hover:text-indigo-700 transition-colors text-sm uppercase tracking-wide"
      >
        {isExpanded ? (
          <>Menej <ChevronUp className="w-4 h-4" /></>
        ) : (
          <>Čítať viac <ChevronDown className="w-4 h-4" /></>
        )}
      </button>
    </div>
  );
}

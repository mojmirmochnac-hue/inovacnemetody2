import { useState } from 'react';
import { guideQuestions } from '../data/guide';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, ArrowRight, Lightbulb, HelpCircle } from 'lucide-react';
import { InnovationMethod } from '../data/methods';
import { innovationMethods } from '../data/methods';
import { MethodDetail } from '../components/MethodDetail';

export default function HowToInnovate() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<InnovationMethod | null>(null);

  const toggleQuestion = (id: string) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const handleMethodClick = (methodId: string) => {
    const method = innovationMethods.find(m => m.id === methodId);
    if (method) {
      setSelectedMethod(method);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Ako inovovať?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Neviete, ktorú metódu použiť? Vyberte si otázku, ktorá najlepšie vystihuje vašu aktuálnu situáciu, 
            a my vám odporučíme vhodné nástroje a postup.
          </p>
        </div>

        <div className="space-y-4">
          {guideQuestions.map((q) => (
            <motion.div
              key={q.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => toggleQuestion(q.id)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-4">
                  <div className={`mt-1 p-2 rounded-lg flex-shrink-0 ${expandedQuestion === q.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{q.question}</h3>
                    <p className="text-sm text-gray-500 mt-1">{q.subtext}</p>
                  </div>
                </div>
                {expandedQuestion === q.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 mt-1" />
                )}
              </button>

              <AnimatePresence>
                {expandedQuestion === q.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50">
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 ml-1">
                        Odporúčané metódy a postup
                      </h4>
                      <div className="grid gap-4">
                        {q.recommendedMethods.map((step, index) => (
                          <div 
                            key={index} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => handleMethodClick(step.methodId)}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                                  {index + 1}
                                </span>
                                <h5 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                  {step.methodName}
                                </h5>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors" />
                            </div>
                            <p className="text-sm text-gray-600 ml-8 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedMethod && (
        <MethodDetail
          method={selectedMethod}
          onClose={() => setSelectedMethod(null)}
        />
      )}
    </div>
  );
}

import { InnovationMethod } from '../data/methods';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lightbulb, Target, BarChart3, History, Wrench, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MethodDetailProps {
  method: InnovationMethod | null;
  onClose: () => void;
}

export function MethodDetail({ method, onClose }: MethodDetailProps) {
  if (!method) return null;

  const categoryColors: Record<string, string> = {
    'ZÁKAZNÍK a HODNOTA': 'bg-blue-100 text-blue-800 border-blue-200',
    'PRODUKT / NÁPADY': 'bg-amber-100 text-amber-800 border-amber-200',
    'VALIDÁCIA': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'PROCESY': 'bg-rose-100 text-rose-800 border-rose-200',
    'PROJEKTY': 'bg-purple-100 text-purple-800 border-purple-200',
    'STRATÉGIA': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'UDRŽATEĽNOSŤ': 'bg-teal-100 text-teal-800 border-teal-200',
    'AI': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
            <div>
              <span className={`text-sm font-medium px-3 py-1 rounded-full border ${categoryColors[method.category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                {method.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">{method.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="prose prose-indigo max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {method.fullDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Key Principles */}
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <div className="flex items-center gap-2 mb-4 text-indigo-700 font-semibold text-lg">
                  <Lightbulb className="w-5 h-5" />
                  <h3>Kľúčové princípy</h3>
                </div>
                <ul className="space-y-3">
                  {method.keyPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to Use */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-4 text-emerald-700 font-semibold text-lg">
                  <Target className="w-5 h-5" />
                  <h3>Kedy použiť</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {method.whenToUse}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Tools */}
              {method.tools && method.tools.length > 0 && (
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <div className="flex items-center gap-2 mb-4 text-orange-700 font-semibold text-lg">
                    <Wrench className="w-5 h-5" />
                    <h3>Nástroje</h3>
                  </div>
                  <ul className="space-y-2">
                    {method.tools.map((tool, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-400 rounded-full" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metrics */}
              {method.metrics && method.metrics.length > 0 && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-2 mb-4 text-blue-700 font-semibold text-lg">
                    <BarChart3 className="w-5 h-5" />
                    <h3>Metriky</h3>
                  </div>
                  <ul className="space-y-2">
                    {method.metrics.map((metric, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples */}
              {method.examples && method.examples.length > 0 && (
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-2 mb-4 text-purple-700 font-semibold text-lg">
                    <Briefcase className="w-5 h-5" />
                    <h3>Príklady</h3>
                  </div>
                  <ul className="space-y-2">
                    {method.examples.map((example, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Link to Detail Page */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <Link 
                to={`/method/${method.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                onClick={onClose}
              >
                Zistiť viac o metóde <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* History */}
            {method.history && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3 text-gray-700 font-semibold text-lg">
                  <History className="w-5 h-5" />
                  <h3>História a pôvod</h3>
                </div>
                <p className="text-gray-600 italic">
                  {method.history}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

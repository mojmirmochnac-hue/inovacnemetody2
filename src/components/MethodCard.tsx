import { InnovationMethod } from '../data/methods';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

interface MethodCardProps {
  method: InnovationMethod;
  onClick: (method: InnovationMethod) => void;
}

export const MethodCard: FC<MethodCardProps> = ({ method, onClick }) => {
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
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(method)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${categoryColors[method.category]}`}>
          {method.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
      <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">
        {method.shortDescription}
      </p>
      <div className="flex items-center text-indigo-600 text-sm font-medium mt-auto group">
        Zistiť viac
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

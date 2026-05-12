import { useState } from 'react';
import { innovationMethods, InnovationMethod } from '../data/methods';
import { MethodCard } from '../components/MethodCard';
import { MethodDetail } from '../components/MethodDetail';
import { Search } from 'lucide-react';

export default function Catalog() {
  const [selectedMethod, setSelectedMethod] = useState<InnovationMethod | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Všetky');

  const ORDERED_CATEGORIES = [
    'ZÁKAZNÍK a HODNOTA',
    'PRODUKT / NÁPADY',
    'VALIDÁCIA',
    'PROCESY',
    'PROJEKTY',
    'STRATÉGIA',
    'UDRŽATEĽNOSŤ',
    'AI'
  ];

  // Get unique categories present in the data to avoid showing empty categories if any
  const presentCategories = new Set(innovationMethods.map(m => m.category));
  
  // Filter ordered categories to only show those that have methods (or show all if you prefer fixed structure)
  // Showing all from ORDERED_CATEGORIES ensures the structure is visible even if empty, 
  // but let's stick to showing only what's available but in the correct order.
  const categories = ['Všetky', ...ORDERED_CATEGORIES.filter(c => presentCategories.has(c as any))];

  const filteredMethods = innovationMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          method.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Všetky' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Katalóg <span className="text-indigo-600">inovačných metód</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Komplexný prehľad strategických rámcov a techník pre riadenie inovácií v globálnom biznise.
          Nájdite tú správnu metódu pre váš ďalší prelomový projekt.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Hľadať metódu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-sm"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMethods.map(method => (
          <MethodCard
            key={method.id}
            method={method}
            onClick={setSelectedMethod}
          />
        ))}
      </div>

      {filteredMethods.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">Nenašli sa žiadne metódy vyhovujúce vašim kritériám.</p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedMethod && (
        <MethodDetail
          method={selectedMethod}
          onClose={() => setSelectedMethod(null)}
        />
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, GitBranch, Leaf, Zap, Users, Target, Activity, Cpu, Layers, ChevronRight } from 'lucide-react';

interface TreeSection {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  questions: string[];
  subsections?: {
    title: string;
    methods: { id: string; name: string }[];
  }[];
  methods?: { id: string; name: string }[];
}

const treeData: TreeSection[] = [
  {
    id: 'customer',
    title: 'ZÁKAZNÍK a HODNOTA',
    icon: Users,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    description: 'Nevieme čo zákazník chce / prečo odchádza',
    questions: [],
    methods: [
      { id: 'jtbd', name: 'Jobs to be Done (JTBD)' },
      { id: 'odi', name: 'Outcome-Driven Innovation (ODI)' },
      { id: 'design-thinking', name: 'Design Thinking' },
      { id: 'kano', name: 'Kano model' },
      { id: 'qfd', name: 'Quality Function Deployment (QFD)' },
      { id: 'bmc-vpc', name: 'Business Model Canvas' },
      { id: 'bmc-vpc', name: 'Value Proposition Canvas' },
    ]
  },
  {
    id: 'product',
    title: 'PRODUKT / NÁPADY',
    icon: Zap,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    description: 'Potrebujeme riešenia',
    questions: [],
    subsections: [
      {
        title: 'Kreatívne generovanie',
        methods: [
          { id: 'brainstorming', name: 'Brainstorming' },
          { id: 'brainwriting', name: 'Brainwriting (6-3-5)' },
          { id: 'mind-mapping', name: 'Mind Mapping' },
          { id: 'lateral-thinking', name: 'Laterálne myslenie' },
          { id: 'six-thinking-hats', name: 'Six Thinking Hats (6 klobúkov)' },
          { id: 'scamper', name: 'SCAMPER' },
        ]
      },
      {
        title: 'Analógie a inšpirácia',
        methods: [
          { id: 'synektika', name: 'Synektika' },
          { id: 'bionika', name: 'Bionika (Biomimikry)' },
        ]
      },
      {
        title: 'Systematické inovovanie',
        methods: [
          { id: 'tri-z', name: 'TRIZ' },
          { id: 'sit', name: 'Systematic Inventive Thinking (SIT)' },
          { id: 'wois', name: 'WOIS' },
          { id: 'morphological-analysis', name: 'Morfologická analýza' },
          { id: 'creax', name: 'Creax' },
          { id: 'systematic-innovation', name: 'Systematické inovácie' },
        ]
      }
    ]
  },
  {
    id: 'validation',
    title: 'VALIDÁCIA',
    icon: Target,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    description: 'Nápad máme, potrebujeme dôkaz trhu',
    questions: [],
    methods: [
      { id: 'lean-startup', name: 'Lean Startup' },
      { id: 'innovation-accounting', name: 'Innovation Accounting' },
      { id: 'design-sprint', name: 'Design Sprint' },
      { id: 'design-sprint-2', name: 'Design Sprint 2.0' },
    ]
  },
  {
    id: 'processes',
    title: 'PROCESY',
    icon: Activity,
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    description: 'Neefektivita, chybovosť, náklady, nestabilita',
    questions: [],
    methods: [
      { id: 'toc', name: 'Teória obmedzení (TOC)' },
      { id: 'six-sigma', name: 'Six Sigma' },
      { id: 'pdca', name: 'PDCA (Demingov cyklus)' },
      { id: 'fmea', name: 'FMEA' },
      { id: 'value-analysis', name: 'Hodnotová analýza (Value Analysis)' },
    ]
  },
  {
    id: 'projects',
    title: 'PROJEKTY',
    icon: Layers,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    description: 'Mešká sa, multitasking, preťaženie zdrojov',
    questions: [],
    methods: [
      { id: 'ccpm', name: 'Critical Chain Project Management (CCPM)' },
    ]
  },
  {
    id: 'strategy',
    title: 'STRATÉGIA, BUDÚCNOSŤ a RIADENIE INOVÁCIÍ',
    icon: GitBranch,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    description: 'Kam ďalej, portfólio, neistota',
    questions: [],
    methods: [
      { id: 'open-innovation', name: 'Open Innovation' },
      { id: 'effectuation', name: 'Effectuation Theory' },
      { id: 'ambidexterity', name: 'Organizačná ambidextria' },
      { id: 'stage-gate', name: 'Stage-Gate' },
      { id: 'scenario-planning', name: 'Scenárové plánovanie' },
      { id: 'delphi', name: 'Delphi metóda' },
      { id: 'speculative-design', name: 'Speculative Design (Future Thinking)' },
    ]
  },
  {
    id: 'sustainability',
    title: 'UDRŽATEĽNOSŤ',
    icon: Leaf,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    description: 'Cirkularita',
    questions: [],
    methods: [
      { id: 'circular-design', name: 'Cirkulárny dizajn' },
    ]
  },
  {
    id: 'ai',
    title: 'AI',
    icon: Cpu,
    color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
    description: 'Akcelerácia inovácií cez AI – naprieč celým cyklom',
    questions: [],
    methods: [
      { id: 'ai-innovation', name: 'AI-Powered Innovation' },
      { id: 'design-sprint-3', name: 'AI / Enterprise Design Sprint 3.0' },
    ]
  },
];

export default function InnovationTree() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white/0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
              <GitBranch className="w-4 h-4" />
              Diagnostický nástroj
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Inovačný Strom
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Kompletná mapa inovačných metód pre každý typ firemného problému.
              <br className="hidden sm:block" />
              Vyberte si vetvu, ktorá rieši vašu aktuálnu výzvu.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tree Visualization */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          {/* Central Trunk Line (Visual only) */}
          <div className="absolute left-8 top-4 bottom-0 w-0.5 bg-slate-200 hidden md:block rounded-full"></div>

          <div className="space-y-12 relative z-10">
            {treeData.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-start relative"
              >
                {/* Connector Dot (Desktop) */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-white rounded-full hidden md:block border-4 border-slate-300 shadow-sm z-20 -translate-x-[7px]"></div>
                
                {/* Connector Line Horizontal */}
                 <div className="absolute left-8 top-10 w-8 h-0.5 bg-slate-200 hidden md:block"></div>

                {/* Content Card */}
                <div className="w-full md:pl-16">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    
                    {/* Header */}
                    <div className={`p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-5 ${section.color} bg-opacity-30`}>
                      <div className={`p-3.5 rounded-xl ${section.color} bg-white shadow-sm shrink-0 inline-flex items-center justify-center w-14 h-14`}>
                        <section.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                          {section.title}
                        </h2>
                        <div className="inline-flex items-center mt-2 px-2.5 py-1 rounded-md bg-white/60 border border-black/5 text-sm font-medium text-slate-700 backdrop-blur-sm">
                           Problém: {section.description}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 sm:p-8 bg-white">
                      {/* Methods */}
                      <div>
                         {section.subsections ? (
                           <div className="space-y-8">
                             {section.subsections.map((sub, j) => (
                               <div key={j}>
                                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                   <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                   {sub.title}
                                 </h4>
                                 <div className="flex flex-wrap gap-3">
                                   {sub.methods.map((method, idx) => (
                                     <Link 
                                       key={`${method.id}-${idx}`} 
                                       to={`/method/${method.id}`}
                                       className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50/50 hover:shadow-sm transition-all duration-200 group/link"
                                     >
                                       {method.name}
                                       <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-indigo-500 transition-colors" />
                                     </Link>
                                   ))}
                                 </div>
                               </div>
                             ))}
                           </div>
                         ) : (
                           <div className="flex flex-wrap gap-3">
                             {section.methods?.map((method, idx) => (
                               <Link 
                                 key={`${method.id}-${idx}`} 
                                 to={`/method/${method.id}`}
                                 className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50/50 hover:shadow-sm transition-all duration-200 group/link"
                               >
                                 {method.name}
                                 <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-indigo-500 transition-colors" />
                               </Link>
                             ))}
                           </div>
                         )}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

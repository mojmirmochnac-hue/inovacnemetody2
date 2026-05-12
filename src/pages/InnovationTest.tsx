import React, { useMemo, useState, useEffect } from "react";
import { SCALE, METHODS_MAP, METHOD_DESCRIPTIONS } from "../data/testConfig";
import { PHASES } from "../data/testPhases";
import {
  getAllQuestions,
  calculateResults,
  getDominantIntervention,
  confidenceLabel,
  buildThirtyDayPlan,
} from "../data/diagnosticTestV2";
import { Bot, RefreshCcw, BookOpen, LogOut, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoginModal } from "../components/LoginModal";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full rounded-full bg-slate-900 transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

function MethodBadge({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function AccountHeader({ user, onLogout }: { user: any; onLogout: () => void }) {
  return (
    <div className="mx-auto mb-4 max-w-5xl rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
            {user.email?.[0].toUpperCase()}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">Prihlásený klient</div>
            <div className="font-semibold text-slate-950">
              {user.displayName || user.email}
            </div>
          </div>
        </div>
        <button 
          onClick={onLogout} 
          className="rounded-2xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Odhlásiť
        </button>
      </div>
    </div>
  );
}

function PhaseSummary({
  phase,
  phaseIndex,
  results,
  onContinue,
  onBackToQuestions,
}: any) {
  const profile = results.phaseProfiles[phaseIndex];
  const topBlocks = [...profile.blockResults]
    .sort((a: any, b: any) => b.normalized - a.normalized)
    .slice(0, 3);
  const topMethods = results.sortedMethods.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto max-w-4xl pt-12"
    >
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Priebežné vyhodnotenie fázy {phase.id} z {PHASES.length}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">{phase.name}</h1>
        <p className="mt-4 text-slate-700">
          Toto ešte nie je finálny výsledok. Fáza iba zvýhodnila určité metodické
          smery.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {topBlocks.map((block: any) => (
            <div
              key={block.blockId}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="text-sm font-semibold text-slate-500">
                {Math.round(block.normalized * 100)} %
              </div>
              <div className="mt-1 font-semibold text-slate-900 mb-2">
                {block.blockName}
              </div>
              <ProgressBar value={block.normalized * 100} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold text-slate-950">
            Zatiaľ najviac zvýhodnené metódy
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {topMethods.map((m: any) => (
              <MethodBadge key={m.method}>
                {m.method}: {m.score.toFixed(1)}
              </MethodBadge>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onBackToQuestions}
            className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Späť k otázkam
          </button>
          <button
            onClick={onContinue}
            className="rounded-2xl bg-slate-950 px-8 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Pokračovať
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function FinalResult({ results, onRestart, user, onLogout, responses, hideHeader }: any) {
  const navigate = useNavigate();
  const sorted = results.sortedMethods;
  const main = sorted[0];
  const support = sorted.slice(1, 5);
  const notNow = sorted.slice(-5).reverse();
  const confidence = confidenceLabel(sorted);
  const intervention = getDominantIntervention(results.phaseProfiles);
  const plan = buildThirtyDayPlan(main.method, intervention);
  const topContributions = main.contributions.slice(0, 6);
  
  const handleMethodClick = (methodName: string) => {
    const internalId = METHODS_MAP[methodName];
    if (internalId && internalId !== 'bmc-vpc') {
      navigate(`/method/${internalId}`, { state: { fromTest: true } });
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6 pt-12">
      {user && !hideHeader && <AccountHeader user={user} onLogout={onLogout} />}
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Finálne vyhodnotenie
        </p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">{main.method}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          {METHOD_DESCRIPTIONS[main.method]}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-lg">
            <div className="text-sm text-slate-300">Skóre hlavnej metódy</div>
            <div className="mt-2 text-4xl font-black">{main.score.toFixed(1)}</div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5 ring-1 ring-slate-200">
            <div className="text-sm text-slate-500">Istota odporúčania</div>
            <div className="mt-2 text-2xl font-black text-slate-950">
              {confidence.label}
            </div>
            <p className="mt-1 text-sm text-slate-600">{confidence.text}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5 ring-1 ring-slate-200">
            <div className="text-sm text-slate-500">Dominantný typ intervencie</div>
            <div className="mt-2 text-2xl font-black text-slate-950">
              {intervention?.blockName ?? "neurčené"}
            </div>
            <p className="mt-1 text-sm text-slate-600">
              {intervention ? `${Math.round(intervention.normalized * 100)} %` : ""}
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-950">Prečo vyšla táto metóda</h2>
          <div className="mt-4 grid gap-3">
            {topContributions.map((c: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-950">{c.phase}</div>
                    <div className="text-slate-600">
                      {c.block} · {c.relation}
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-900 border border-slate-200">
                    +{c.points.toFixed(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-950">Doplnkové metódy</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {support.map((m: any) => (
              <div
                key={m.method}
                onClick={() => handleMethodClick(m.method)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 cursor-pointer hover:border-slate-400 transition"
              >
                <div className="flex justify-between gap-3">
                  <div className="font-bold text-slate-950">{m.method}</div>
                  <div className="font-bold text-slate-700">
                    {m.score.toFixed(1)}
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {METHOD_DESCRIPTIONS[m.method]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Odporúčaný postup na najbližších 30 dní
          </h2>
          <ol className="mt-4 space-y-3">
            {plan.map((item: string, index: number) => (
              <li key={index} className="flex gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 font-bold text-white shadow-md">
                  {index + 1}
                </span>
                <span className="text-slate-700 font-medium pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-6">Graf skóre všetkých 40 metód</h2>
          <div className="mt-4 space-y-2 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {sorted.map((m: any) => {
              const max = Math.max(sorted[0].score, 1);
              return (
                <div
                  key={m.method}
                  className="grid grid-cols-[220px_1fr_60px] items-center gap-3 text-sm"
                >
                  <div className="truncate font-medium text-slate-700">{m.method}</div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div
                      className="h-3 rounded-full bg-slate-900"
                      style={{ width: `${Math.max(0, (m.score / max) * 100)}%` }}
                    />
                  </div>
                  <div className="text-right font-semibold text-slate-700">
                    {m.score.toFixed(1)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-amber-950">
            Metódy, ktoré teraz nie sú vhodné ako hlavné
          </h2>
          <p className="mt-2 text-sm text-amber-900">
            Tieto metódy môžu byť užitočné neskôr alebo pomocne, ale podľa odpovedí
            nie sú najvhodnejším hlavným zásahom teraz.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {notNow.map((m: any) => (
              <MethodBadge key={m.method}>
                {m.method}: {m.score.toFixed(1)}
              </MethodBadge>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-4 justify-center border-t border-slate-100 pt-8">
          <button
            onClick={onRestart}
            className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" /> Spustiť diagnostiku znova
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-2xl bg-slate-950 px-8 py-4 font-semibold text-white hover:bg-slate-800 flex items-center gap-2 shadow-lg"
          >
            <BookOpen className="w-5 h-5" /> Prejsť do katalógu metód
          </button>
        </div>
      </div>
    </div>
  );
}

export default function InnovationDiagnosticTest() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const allQuestions = useMemo(() => getAllQuestions(PHASES), []);
  const [started, setStarted] = useState(() => {
    return sessionStorage.getItem('innovationTestStarted') === 'true';
  });
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = sessionStorage.getItem('innovationTestIndex');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [responses, setResponses] = useState<Record<string, number>>(() => {
    const saved = sessionStorage.getItem('innovationTestResponses');
    return saved ? JSON.parse(saved) : {};
  });
  const [view, setView] = useState(() => {
    return sessionStorage.getItem('innovationTestView') || 'question';
  });

  const restart = () => {
    setResponses({});
    setCurrentIndex(0);
    setView("question");
    setStarted(false);
    sessionStorage.removeItem('innovationTestStarted');
    sessionStorage.removeItem('innovationTestIndex');
    sessionStorage.removeItem('innovationTestResponses');
    sessionStorage.removeItem('innovationTestView');
    sessionStorage.removeItem(`innovationTest_hasSaved`);
  };

  useEffect(() => {
    if (location.state?.restartNow) {
      restart();
      setStarted(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    sessionStorage.setItem('innovationTestStarted', started.toString());
  }, [started]);

  useEffect(() => {
    sessionStorage.setItem('innovationTestIndex', currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    sessionStorage.setItem('innovationTestResponses', JSON.stringify(responses));
  }, [responses]);

  useEffect(() => {
    sessionStorage.setItem('innovationTestView', view);
  }, [view]);

  const METHODS = Object.keys(METHODS_MAP);

  const results = useMemo(
    () => calculateResults(responses, PHASES, METHODS),
    [responses, METHODS]
  );
  
  // Save results to firestore only once when reached final view
  useEffect(() => {
    async function saveResults() {
      const savedKey = `innovationTest_hasSaved`;
      
      if (view === 'final' && user && profile) {
        if (!sessionStorage.getItem(savedKey) && Object.keys(responses).length > 0) {
           sessionStorage.setItem(savedKey, 'true');
           
           const topMethods = results.sortedMethods.map((m: any) => m.method);
           
           try {
             await addDoc(collection(db, "users", user.uid, "testResults"), {
               userId: user.uid,
               resultData: JSON.stringify({
                 topMethods,
                 scoreMain: results.sortedMethods[0]?.score,
                 intervention: getDominantIntervention(results.phaseProfiles)?.blockName,
                 fullResults: results
               }),
               createdAt: serverTimestamp()
             });
             
             // We don't reset state here anymore, letting user see the FinalResult component
             // which is already being rendered when view === 'final'
           } catch (error) {
             console.error("Error saving results:", error);
             try {
                handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}/testResults`);
             } catch (e) {}
           }
        }
      }
    }
    
    saveResults();
  }, [view, user, profile, results, responses]);

  const current = allQuestions[currentIndex] || allQuestions[0];
  const totalAnswered = Object.keys(responses).length;
  const totalQuestions = allQuestions.length;
  const progress = (totalAnswered / totalQuestions) * 100;
  const isComplete = totalAnswered === totalQuestions;

  const logout = () => {
    // In our app logout is handled by the AuthContext, but we want to clear test state
    restart();
    // Then we could trigger sign out if we wanted, but usually it's in a header
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-100 p-6 text-slate-950">
        <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center">
          <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-12">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-300">Uzamknutá diagnostika</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Inovačný test len pre prihlásených klientov</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Každý klient má vlastný účet. Test sa spustí až po prihlásení a finálny výsledok sa uloží ku konkrétnemu účtu tak, aby ste sa k nemu vedeli kedykoľvek vrátiť.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3 text-center">
                <div className="rounded-2xl bg-white/10 p-5"><div className="text-3xl font-black">{totalQuestions}</div><div className="text-slate-300 text-sm">otázok</div></div>
                <div className="rounded-2xl bg-white/10 p-5"><div className="text-3xl font-black">12</div><div className="text-slate-300 text-sm">diagnostických fáz</div></div>
                <div className="rounded-2xl bg-white/10 p-5"><div className="text-3xl font-black">40</div><div className="text-slate-300 text-sm">metód</div></div>
              </div>
              
              <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="font-bold text-white">Alternatíva: Diagnostika cez AI</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    Využite nášho GPT bota, ktorý vás prevedie celým procesom formou prirodzeného rozhovoru.
                  </p>
                  <a 
                    href="https://chatgpt.com/g/g-69a8a9c2af5c8191b67009ee289854d0-innovation-diagnostic-test-runner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                  >
                    Spustiť cez GPT <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12 flex flex-col justify-center text-center">
              <h2 className="text-3xl font-black text-slate-950 mb-4">Pripravení na diagnostiku?</h2>
              <p className="text-slate-600 mb-10 max-w-sm mx-auto">
                Na základe vašich odpovedí vám systém odporučí najvhodnejšiu metódu a pripraví 30-dňový akčný plán.
              </p>
              
              <button
                onClick={() => {
                  if (!user) setIsLoginModalOpen(true);
                  else setStarted(true);
                }}
                className="w-full rounded-2xl bg-slate-950 px-6 py-5 font-bold text-lg text-white hover:bg-slate-800 shadow-xl transition transform hover:scale-[1.02]"
              >
                {user ? "Začať diagnostiku" : "Prihlásiť sa a začať"}
              </button>
              
              {!user && (
                <p className="mt-6 text-sm text-slate-500">
                  Ak ešte nemáte účet, zaregistrujte sa v prihlasovacom okne.
                </p>
              )}
            </div>
          </div>
        </div>
        
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)}
        />
      </div>
    );
  }

  if (view === "final" || isComplete) {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-950 font-sans">
        <FinalResult results={results} onRestart={restart} user={user} onLogout={logout} responses={responses} />
      </div>
    );
  }

  if (view === "phaseSummary") {
    const phaseIndex = current.phaseIndex;
    return (
      <div className="min-h-screen bg-slate-100 p-6 text-slate-950 font-sans">
        {user && <AccountHeader user={user} onLogout={logout} />}
        <AnimatePresence mode="wait">
          <PhaseSummary
            key={phaseIndex}
            phase={PHASES[phaseIndex]}
            phaseIndex={phaseIndex}
            results={results}
            onBackToQuestions={() => setView("question")}
            onContinue={() => {
              const nextIndex = currentIndex + 1;
              if (nextIndex >= allQuestions.length) setView("final");
              else {
                setCurrentIndex(nextIndex);
                setView("question");
              }
            }}
          />
        </AnimatePresence>
      </div>
    );
  }

  const selected = responses[current.key];
  const phaseQuestions = allQuestions.filter(
    (q) => q.phaseIndex === current.phaseIndex
  );
  const questionNumberInPhase =
    phaseQuestions.findIndex((q) => q.key === current.key) + 1;
  const isLastQuestionOfPhase =
    currentIndex === allQuestions.length - 1 ||
    allQuestions[currentIndex + 1].phaseIndex !== current.phaseIndex;

  const goNext = () => {
    if (!selected) return;
    if (isLastQuestionOfPhase) setView("phaseSummary");
    else setCurrentIndex((idx) => idx + 1);
  };

  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex((idx) => idx - 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-950 font-sans pt-12">
      {user && <AccountHeader user={user} onLogout={logout} />}
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                Fáza {current.phase.id} z {PHASES.length}
              </div>
              <div className="text-xl font-bold text-slate-900">
                {current.phase.name}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                Otázka {questionNumberInPhase} / {phaseQuestions.length}
              </span>
            </div>
          </div>
          <ProgressBar value={progress} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-slate-200"
          >
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                Kontext: {current.block.name}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{current.phase.intro}</p>
            </div>

            <h1 className="text-2xl md:text-4xl font-black leading-tight text-slate-950 mb-10">
              {current.question}
            </h1>

            <div className="grid gap-3">
              {SCALE.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setResponses((prev) => ({
                      ...prev,
                      [current.key]: option.value,
                    }))
                  }
                  className={`flex items-center justify-between rounded-2xl border-2 p-5 text-left transition-all ${
                    selected === option.value
                      ? "border-slate-950 bg-slate-950 text-white shadow-lg transform scale-[1.01]"
                      : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium"
                  }`}
                >
                  <span className="text-lg">{option.label}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black text-lg ${
                      selected === option.value
                        ? "bg-white text-slate-950"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {option.value}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
              <button
                onClick={goBack}
                disabled={currentIndex === 0}
                className="rounded-2xl border border-slate-300 px-6 py-3 font-bold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-50 transition"
              >
                Späť
              </button>
              <button
                onClick={goNext}
                disabled={!selected}
                className="rounded-2xl bg-slate-950 px-10 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-800 transition shadow-lg"
              >
                {isLastQuestionOfPhase ? "Vyhodnotiť fázu" : "Ďalej"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

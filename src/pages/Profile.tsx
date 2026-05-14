import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, User, Building2, Phone, Mail, Calendar, ExternalLink, ClipboardCheck, ArrowRight } from 'lucide-react';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { METHODS_MAP } from '../data/testConfig';
import { innovationMethods } from '../data/methods';
import { FinalResult } from './InnovationTest';

export default function Profile() {
  const { user, profile, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [results, setResults] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loadingResults, setLoadingResults] = useState(true);
  const [loadingFavorites, setLoadingFavorites] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !profile)) {
      navigate('/');
    }
  }, [user, profile, loading, navigate]);

  useEffect(() => {
    async function fetchResults() {
      if (!user) return;
      try {
        const q = query(collection(db, 'users', user.uid, 'testResults'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const resultsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResults(resultsData);
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, `users/${user.uid}/testResults`);
      } finally {
        setLoadingResults(false);
      }
    }
    
    if (user) {
      fetchResults();
    }
  }, [user]);

  useEffect(() => {
    async function fetchFavorites() {
      if (!user) return;
      try {
        const q = query(collection(db, 'users', user.uid, 'favorites'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const favoritesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFavorites(favoritesData);
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, `users/${user.uid}/favorites`);
      } finally {
        setLoadingFavorites(false);
      }
    }

    if (user) {
      fetchFavorites();
    }
  }, [user]);

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const getMethodDetails = (methodName: string) => {
    const internalId = METHODS_MAP[methodName];
    if (!internalId) return null;
    const basicData = innovationMethods.find(m => m.id === internalId);
    return { ...basicData, internalId };
  };

  const latestTest = results[0];
  let latestTestData = null;
  if (latestTest) {
    try {
      latestTestData = JSON.parse(latestTest.resultData);
    } catch(e) {}
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Profil hlavička a údaje */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-950 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Môj Profil</h1>
            <p className="text-slate-400 mt-2">Dobrý deň, {profile.displayName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors w-fit backdrop-blur-sm"
          >
            <LogOut className="w-5 h-5" />
            Odhlásiť sa
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-slate-500" />
            Vaše osobné údaje
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl p-5 ring-1 ring-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-slate-400" />
                <div className="text-slate-500 text-sm font-medium">Meno</div>
              </div>
              <div className="text-slate-900 font-semibold">{profile.displayName}</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 ring-1 ring-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-slate-400" />
                <div className="text-slate-500 text-sm font-medium">Firma</div>
              </div>
              <div className="text-slate-900 font-semibold">{profile.companyName}</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 ring-1 ring-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-slate-400" />
                <div className="text-slate-500 text-sm font-medium">Email</div>
              </div>
              <div className="text-slate-900 font-semibold truncate" title={profile.email}>{profile.email}</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 ring-1 ring-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-slate-400" />
                <div className="text-slate-500 text-sm font-medium">Telefón</div>
              </div>
              <div className="text-slate-900 font-semibold">{profile.phoneNumber}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-black text-slate-900 mb-6">Obľúbené metódy</h2>
        {loadingFavorites ? (
          <p className="text-slate-500">Načítavam obľúbené metódy...</p>
        ) : favorites.length === 0 ? (
          <p className="text-slate-500">Zatiaľ nemáte uložené žiadne obľúbené metódy.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {favorites.map((fav) => (
              <Link
                key={fav.id}
                to={`/method/${fav.methodId}`}
                className="flex flex-col p-5 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition bg-white"
              >
                <div className="font-bold text-slate-900 text-lg">{fav.title}</div>
                <div className="text-xs mt-1 mb-2 uppercase tracking-wide text-indigo-600">{fav.category}</div>
                <p className="text-sm text-slate-600 line-clamp-2">{fav.shortDescription}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Diagnostika */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
            <ClipboardCheck className="w-7 h-7 text-indigo-600" />
            Inovačná Diagnostika
          </h2>
          <button 
            onClick={() => navigate('/test', { state: { restartNow: true } })}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-bold shadow-md shadow-indigo-200"
          >
            Urobiť test
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {loadingResults ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-500">
            Načítavam výsledky...
          </div>
        ) : results.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Zatiaľ ste si nespravili test</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Zistite, ktorá inovačná metóda je pre vašu firmu v tejto chvíli najvhodnejšia a získajte 30-dňový akčný plán.
            </p>
            <button 
              onClick={() => navigate('/test', { state: { restartNow: true } })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-2xl hover:bg-slate-800 transition-transform hover:scale-[1.02] font-bold shadow-xl"
            >
              Spustiť diagnostiku
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : latestTestData ? (
          <div className="space-y-8">
            <div className="bg-white rounded-t-3xl shadow-sm border border-slate-200 p-8 flex justify-between items-center -mb-8 z-10 relative">
               <div>
                 <h3 className="text-xl font-bold text-slate-900">
                   Váš posledný výsledok
                 </h3>
                 <p className="text-slate-500 mt-2 flex items-center gap-2 text-sm font-medium">
                   <Calendar className="w-4 h-4" />
                   {latestTest.createdAt?.toDate ? latestTest.createdAt.toDate().toLocaleString('sk-SK') : 'Nedávno'}
                 </p>
               </div>
               {results.length > 1 && (
                 <div className="text-sm text-slate-500 font-medium">
                   Celkový počet testov: {results.length}
                 </div>
               )}
            </div>
            
            {latestTestData.fullResults ? (
              <FinalResult 
                results={latestTestData.fullResults} 
                onRestart={() => navigate('/test', { state: { restartNow: true } })} 
                hideHeader
              />
            ) : (
              // Fallback pre staršie uložené formáty bez .fullResults
              <div className="bg-white rounded-b-3xl shadow-sm border border-slate-200 p-8 pt-12">
                {latestTestData.intervention && (
                  <div className="mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Dominantný typ intervencie</h4>
                    <p className="text-slate-900 text-2xl font-black">{latestTestData.intervention}</p>
                  </div>
                )}
                {latestTestData.topMethods && (
                   <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-6">Odporúčané inovačné metódy</h4>
                     <div className="grid sm:grid-cols-2 gap-4">
                       {latestTestData.topMethods.map((methodName: string) => {
                         const methodDetails = getMethodDetails(methodName);
                         if (!methodDetails || methodDetails.internalId === 'bmc-vpc') return null;
                         
                         return (
                           <Link
                             key={methodName}
                             to={`/method/${methodDetails.internalId}`}
                             state={{ fromTest: false }}
                             className="flex flex-col p-6 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition bg-white"
                           >
                             <div className="flex items-center justify-between mb-3">
                               <div className="font-bold text-slate-900 text-lg">
                                 {methodDetails.title || methodName}
                               </div>
                               <ExternalLink className="w-5 h-5 text-slate-400" />
                             </div>
                             <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                               {methodDetails.shortDescription}
                             </p>
                           </Link>
                         );
                       })}
                     </div>
                   </div>
                )}
                <div className="mt-12 flex justify-center border-t border-slate-100 pt-8">
                  <button 
                    onClick={() => navigate('/test', { state: { restartNow: true } })}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-200 transition-colors font-bold"
                  >
                    Vyplniť test znova
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

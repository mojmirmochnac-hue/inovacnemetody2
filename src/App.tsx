import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles, BookOpen, Compass, ClipboardCheck, GitBranch, User, LogIn } from 'lucide-react';
import Catalog from './pages/Catalog';
import HowToInnovate from './pages/HowToInnovate';
import InnovationTest from './pages/InnovationTest';
import InnovationTree from './pages/InnovationTree';
import MethodPage from './pages/MethodPage';
import Profile from './pages/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginModal } from './components/LoginModal';

function NavLink({ to, children, icon: Icon }: { to: string; children: React.ReactNode; icon: any }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive 
          ? 'bg-gray-900 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-300' : 'text-gray-500'}`} />
      {children}
    </Link>
  );
}

function UserMenu() {
  const { user, profile, loading } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  if (loading) {
    return <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin"></div>;
  }

  return (
    <>
      {user && profile ? (
        <Link
          to="/profil"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <User className="w-5 h-5" />
        </Link>
      ) : (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Prihlásiť sa</span>
        </button>
      )}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        redirectUrl="/profil"
      />
    </>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-[60] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 hidden lg:block whitespace-nowrap">Inovačný Sprievodca</h1>
          </Link>

          <nav className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar flex-1 lg:flex-none justify-center">
            <NavLink to="/" icon={BookOpen}>Katalóg</NavLink>
            <NavLink to="/ako-inovovat" icon={Compass}>Rozsah</NavLink>
            <NavLink to="/strom" icon={GitBranch}>Strom</NavLink>
            <NavLink to="/test" icon={ClipboardCheck}>Test</NavLink>
          </nav>
          
          <div className="flex items-center flex-shrink-0">
            <UserMenu />
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/ako-inovovat" element={<HowToInnovate />} />
          <Route path="/strom" element={<InnovationTree />} />
          <Route path="/test" element={<InnovationTest />} />
          <Route path="/method/:methodId" element={<MethodPage />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

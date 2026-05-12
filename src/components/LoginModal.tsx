import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogIn, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl?: string; // Where to go after successful login & registration
}

export function LoginModal({ isOpen, onClose, redirectUrl = '/profil' }: LoginModalProps) {
  const { user, profile, loginProvider, loginWithEmail, registerWithEmail, registerProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (user && profile) {
      onClose();
      navigate(redirectUrl);
    }
  }, [user, profile, navigate, redirectUrl, onClose]);

  useEffect(() => {
    if (user && !profile) {
      setFormData(prev => ({
        ...prev,
        displayName: user.displayName || '',
      }));
    }
  }, [user, profile]);

  if (!isOpen) return null;

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await loginProvider();
    } catch (err: any) {
      setError('Prihlásenie zlyhalo. Skúste to znova.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Prosím vyplňte e-mail aj heslo.');
      return;
    }
    try {
      setLoading(true);
      setError('');
      await loginWithEmail(formData.email, formData.password);
    } catch (err: any) {
      const code = err?.code || '';
      if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        setError('Nesprávny e-mail alebo heslo.');
      } else {
        setError('Prihlásenie e-mailom zlyhalo. Skontrolujte údaje a skúste to znova.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Prosím vyplňte e-mail aj heslo.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Heslo musí mať aspoň 6 znakov.');
      return;
    }
    try {
      setLoading(true);
      setError('');
      await registerWithEmail(formData.email, formData.password);
    } catch (err: any) {
      const code = err?.code || '';
      if (code === 'auth/email-already-in-use') {
        setError('Tento e-mail už existuje. Použite prihlásenie e-mailom.');
      } else if (code === 'auth/operation-not-allowed') {
        setError('Email registrácia nie je aktívna vo Firebase projekte. Dočasne pokračujte cez Google alebo kontaktujte správcu.');
      } else {
        setError('Registrácia e-mailom zlyhala. Skúste to znova.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.displayName || !formData.companyName || !formData.phoneNumber) {
      setError('Prosím vyplňte všetky polia.');
      return;
    }
    try {
      setLoading(true);
      setError('');
      await registerProfile({
        displayName: formData.displayName,
        companyName: formData.companyName,
        phoneNumber: formData.phoneNumber,
        email: user?.email || '',
      });
      // the useEffect will handle redirection because `profile` will become truthy
    } catch (err: any) {
      setError('Registrácia zlyhala. Skúste to znova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!user ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LogIn className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Prihlásenie</h2>
              <p className="text-gray-600 mb-8">Prihláste sa pomocou Google účtu a pokračujte ďalej.</p>
              
              {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div>}

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                )}
                Prihlásiť sa cez Google
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-400">alebo e-mail</span>
                </div>
              </div>

              <form className="space-y-3" onSubmit={handleEmailLogin}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Heslo"
                  value={formData.password}
                  onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm disabled:opacity-50"
                >
                  Prihlásiť sa e-mailom
                </button>
                <button
                  type="button"
                  onClick={handleEmailRegistration}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
                >
                  Registrovať sa e-mailom
                </button>
              </form>
            </div>
          ) : !profile ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dokončenie registrácie</h2>
              <p className="text-gray-600 mb-6">Pre pokračovanie prosím vyplňte vaše údaje.</p>
              
              {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div>}

              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meno a priezvisko</label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={e => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Názov firmy</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefónny kontakt</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={e => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 mt-6"
                >
                  {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                  Dokončiť registráciu
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

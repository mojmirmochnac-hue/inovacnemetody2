import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithRedirect,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';

interface UserProfile {
  userId: string;
  displayName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  createdAt: any;
}

interface LocalAccount {
  uid: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  loginProvider: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  registerProfile: (data: Omit<UserProfile, 'userId' | 'createdAt'>) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const getLocalAccounts = (): LocalAccount[] => {
    try {
      return JSON.parse(localStorage.getItem('local_accounts_v1') || '[]');
    } catch {
      return [];
    }
  };

  const setLocalAccounts = (accounts: LocalAccount[]) => {
    localStorage.setItem('local_accounts_v1', JSON.stringify(accounts));
  };

  const saveLocalSession = (uid: string) => localStorage.setItem('local_session_uid_v1', uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          const docRef = doc(db, 'users', u.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
            setProfile(null);
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${u.uid}`);
        }
      } else {
        const localUid = localStorage.getItem('local_session_uid_v1');
        let loadedLocalProfile = false;
        if (localUid) {
          const accounts = getLocalAccounts();
          const acc = accounts.find(a => a.uid === localUid);
          if (acc) {
            setUser({ uid: acc.uid, email: acc.email, displayName: acc.email } as any);
            try {
              const docRef = doc(db, 'users', acc.uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                setProfile(docSnap.data() as UserProfile);
                loadedLocalProfile = true;
              }
            } catch {}
          }
        }
        if (!loadedLocalProfile) setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error?.code === 'auth/popup-blocked' || error?.code === 'auth/cancelled-popup-request') {
        await signInWithRedirect(auth, provider);
        return;
      }
      throw error;
    }
  };

  const logout = async () => {
    localStorage.removeItem('local_session_uid_v1');
    await signOut(auth);
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      const accounts = getLocalAccounts();
      const acc = accounts.find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
      if (!acc) throw error;
      saveLocalSession(acc.uid);
      setUser({ uid: acc.uid, email: acc.email, displayName: acc.email } as any);
    }
  };

  const registerWithEmail = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error?.code === 'auth/operation-not-allowed') {
        const accounts = getLocalAccounts();
        const existing = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
        if (existing) throw error;
        const uid = `local_${Date.now()}`;
        setLocalAccounts([...accounts, { uid, email, password }]);
        saveLocalSession(uid);
        setUser({ uid, email, displayName: email } as any);
        await signInAnonymously(auth);
        return;
      }
      throw error;
    }
  };

  const registerProfile = async (data: Omit<UserProfile, 'userId' | 'createdAt'>) => {
    if (!user) throw new Error("No user logged in");
    
    const newProfile = {
      ...data,
      userId: user.uid,
      createdAt: serverTimestamp()
    };
    
    try {
      await setDoc(doc(db, 'users', user.uid), newProfile);
      setProfile(newProfile as UserProfile);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, loginProvider, loginWithEmail, registerWithEmail, logout, registerProfile, isAuthenticated: Boolean(user && profile) }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

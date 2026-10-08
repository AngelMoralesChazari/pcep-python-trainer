import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  role: 'student' | 'teacher' | 'admin';
  isCloudConnected: boolean;
  login: (email: string, password?: string, role?: 'student' | 'teacher') => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, displayName: string, role?: 'student' | 'teacher') => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  switchRole: (newRole: 'student' | 'teacher') => void;
  updateUserStats: (newStats: Partial<UserProfile['stats']>) => void;
}

const DEFAULT_STUDENT: UserProfile = {
  uid: 'usr-student-angel',
  email: 'angel@pcep-trainer.org',
  displayName: 'Ángel',
  role: 'student',
  createdAt: '2026-09-01T10:00:00Z',
  stats: {
    totalSolved: 184,
    totalAttempts: 236,
    accuracyPercentage: 78,
    studyTimeSeconds: 45780, // ~12h 43m
    currentStreakDays: 7,
    lastActiveDate: new Date().toISOString()
  }
};

const DEFAULT_TEACHER: UserProfile = {
  uid: 'usr-teacher-garcia',
  email: 'profesora.garcia@pcep-trainer.org',
  displayName: 'Dra. Carmen García',
  role: 'teacher',
  createdAt: '2026-08-15T09:00:00Z',
  stats: {
    totalSolved: 512,
    totalAttempts: 520,
    accuracyPercentage: 98,
    studyTimeSeconds: 98000,
    currentStreakDays: 30,
    lastActiveDate: new Date().toISOString()
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('pcep_active_user');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return DEFAULT_STUDENT;
  });

  // Escuchar cambios de autenticación en Firebase Cloud si está configurado
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) return;

    const unsubscribe = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
      if (fbUser) {
        try {
          const userDocRef = doc(db, 'users', fbUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            setUser(data);
          } else {
            // Documento de perfil inicial
            const newProfile: UserProfile = {
              uid: fbUser.uid,
              email: fbUser.email || '',
              displayName: fbUser.displayName || fbUser.email?.split('@')[0] || 'Usuario PCEP',
              role: 'student',
              createdAt: new Date().toISOString(),
              stats: {
                totalSolved: 0,
                totalAttempts: 0,
                accuracyPercentage: 0,
                studyTimeSeconds: 0,
                currentStreakDays: 1,
                lastActiveDate: new Date().toISOString()
              }
            };
            await setDoc(userDocRef, newProfile);
            setUser(newProfile);
          }
        } catch (err) {
          console.warn("Error leyendo perfil de Firestore:", err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('pcep_active_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pcep_active_user');
    }
  }, [user]);

  const login = async (email: string, password?: string, role: 'student' | 'teacher' = 'student') => {
    // Si Firebase Cloud está activo y se dio contraseña, usar Firebase Auth real
    if (isFirebaseConfigured && password && auth) {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, 'users', cred.user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setUser(snap.data() as UserProfile);
        }
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || 'Error de inicio de sesión en Firebase' };
      }
    }

    // Modo local / demo
    const newUser = role === 'teacher' ? { ...DEFAULT_TEACHER, email } : { ...DEFAULT_STUDENT, email };
    setUser(newUser);
    return { success: true };
  };

  const register = async (email: string, password: string, displayName: string, role: 'student' | 'teacher' = 'student') => {
    if (isFirebaseConfigured && auth) {
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const newProfile: UserProfile = {
          uid: cred.user.uid,
          email,
          displayName,
          role,
          createdAt: new Date().toISOString(),
          stats: {
            totalSolved: 0,
            totalAttempts: 0,
            accuracyPercentage: 0,
            studyTimeSeconds: 0,
            currentStreakDays: 1,
            lastActiveDate: new Date().toISOString()
          }
        };
        await setDoc(doc(db, 'users', cred.user.uid), newProfile);
        setUser(newProfile);
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || 'Error al registrar usuario en Firebase' };
      }
    }

    // Fallback local
    const mockUser: UserProfile = {
      uid: `local-${Date.now()}`,
      email,
      displayName,
      role,
      createdAt: new Date().toISOString(),
      stats: {
        totalSolved: 0,
        totalAttempts: 0,
        accuracyPercentage: 0,
        studyTimeSeconds: 0,
        currentStreakDays: 1,
        lastActiveDate: new Date().toISOString()
      }
    };
    setUser(mockUser);
    return { success: true };
  };

  const resetPassword = async (email: string) => {
    if (isFirebaseConfigured && auth) {
      try {
        await sendPasswordResetEmail(auth, email);
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || 'Error enviando correo de recuperación' };
      }
    }
    return { success: true };
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth);
      } catch {}
    }
    setUser({ ...DEFAULT_STUDENT, email: 'invitado@pcep.org', displayName: 'Invitado' });
  };

  const switchRole = (newRole: 'student' | 'teacher') => {
    if (newRole === 'teacher') {
      setUser(DEFAULT_TEACHER);
    } else {
      setUser(DEFAULT_STUDENT);
    }
  };

  const updateUserStats = (newStats: Partial<UserProfile['stats']>) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        stats: {
          ...prev.stats,
          ...newStats
        }
      };
      if (isFirebaseConfigured && auth && user) {
        setDoc(doc(db, 'users', user.uid), { stats: updated.stats }, { merge: true }).catch(() => {});
      }
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      role: user?.role || 'student',
      isCloudConnected: isFirebaseConfigured,
      login,
      register,
      resetPassword,
      logout,
      switchRole,
      updateUserStats
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

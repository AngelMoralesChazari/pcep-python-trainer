import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from '../lib/firebase';
import { UserProfile } from '../types';

export const ADMIN_EMAIL = '24722899@uagro.mx';

export const resolveRole = (email?: string | null): 'teacher' | 'student' => {
  if (!email) return 'student';
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() ? 'teacher' : 'student';
};

interface AuthContextType {
  user: UserProfile | null;
  role: 'student' | 'teacher' | 'admin';
  isAdmin: boolean;
  isCloudConnected: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, displayName: string) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  switchRole: (newRole: 'student' | 'teacher') => void;
  updateUserStats: (newStats: Partial<UserProfile['stats']>) => void;
}

const DEFAULT_ADMIN: UserProfile = {
  uid: 'usr-admin-uagro',
  email: '24722899@uagro.mx',
  displayName: 'Ángel Morales (Admin)',
  role: 'teacher',
  createdAt: '2026-09-01T10:00:00Z',
  stats: {
    totalSolved: 184,
    totalAttempts: 236,
    accuracyPercentage: 78,
    studyTimeSeconds: 45780,
    currentStreakDays: 7,
    lastActiveDate: new Date().toISOString()
  }
};

const DEFAULT_STUDENT: UserProfile = {
  uid: 'usr-student-demo',
  email: 'alumno@ejemplo.com',
  displayName: 'Estudiante PCEP',
  role: 'student',
  createdAt: '2026-09-15T10:00:00Z',
  stats: {
    totalSolved: 42,
    totalAttempts: 58,
    accuracyPercentage: 72,
    studyTimeSeconds: 14200,
    currentStreakDays: 3,
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
    return null;
  });

  // Escuchar cambios de autenticación en Firebase Cloud
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) return;

    const unsubscribe = onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
      if (fbUser) {
        try {
          const userEmail = fbUser.email || '';
          const assignedRole = resolveRole(userEmail);
          const userDocRef = doc(db, 'users', fbUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            // Asegurar que si el correo es 24722899@uagro.mx siempre tenga rol teacher
            if (assignedRole === 'teacher' && data.role !== 'teacher') {
              data.role = 'teacher';
              await setDoc(userDocRef, { role: 'teacher' }, { merge: true });
            }
            setUser(data);
          } else {
            const newProfile: UserProfile = {
              uid: fbUser.uid,
              email: userEmail,
              displayName: fbUser.displayName || userEmail.split('@')[0] || 'Usuario PCEP',
              role: assignedRole,
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
      } else {
        // Si Firebase reporta null, verificar si hay un usuario mock/local explícito activo
        const saved = localStorage.getItem('pcep_active_user');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed.uid && (parsed.uid.startsWith('usr-') || parsed.uid.startsWith('local-'))) {
              return; // Mantener la sesión local/demo activa si no ha cerrado sesión
            }
          } catch {}
        }
        // Si no hay usuario activo, limpiar estado
        setUser(null);
        localStorage.removeItem('pcep_active_user');
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

  // Inicio de sesión con Google (Cuenta institucional o personal)
  const loginWithGoogle = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        const provider = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, provider);
        const userEmail = cred.user.email || '';
        const assignedRole = resolveRole(userEmail);
        const userDocRef = doc(db, 'users', cred.user.uid);
        const snap = await getDoc(userDocRef);

        let profile: UserProfile;
        if (snap.exists()) {
          profile = snap.data() as UserProfile;
          if (assignedRole === 'teacher' && profile.role !== 'teacher') {
            profile.role = 'teacher';
            await setDoc(userDocRef, { role: 'teacher' }, { merge: true });
          }
        } else {
          profile = {
            uid: cred.user.uid,
            email: userEmail,
            displayName: cred.user.displayName || userEmail.split('@')[0],
            role: assignedRole,
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
          await setDoc(userDocRef, profile);
        }
        setUser(profile);
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || 'Error al iniciar sesión con Google' };
      }
    }

    // Modo demo / offline: simular inicio con Google como admin 24722899@uagro.mx
    setUser(DEFAULT_ADMIN);
    return { success: true };
  };

  // Inicio de sesión manual con correo y contraseña
  const login = async (email: string, password?: string) => {
    const assignedRole = resolveRole(email);

    if (isFirebaseConfigured && password && auth) {
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, 'users', cred.user.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const profile = snap.data() as UserProfile;
          if (assignedRole === 'teacher' && profile.role !== 'teacher') {
            profile.role = 'teacher';
            await setDoc(docRef, { role: 'teacher' }, { merge: true });
          }
          setUser(profile);
        }
        return { success: true };
      } catch (err: any) {
        // Fallback para pruebas rápidas / demo local si el usuario aún no existe en Firebase Auth
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-login-credentials') {
          const mockUser: UserProfile = assignedRole === 'teacher'
            ? { ...DEFAULT_ADMIN, email }
            : { ...DEFAULT_STUDENT, email, displayName: email.split('@')[0] };
          setUser(mockUser);
          return { success: true };
        }
        return { success: false, error: err.message || 'Error de inicio de sesión' };
      }
    }

    // Modo local / demo
    const mockUser: UserProfile = assignedRole === 'teacher'
      ? { ...DEFAULT_ADMIN, email }
      : { ...DEFAULT_STUDENT, email, displayName: email.split('@')[0] };
    setUser(mockUser);
    return { success: true };
  };

  // Registro de nueva cuenta
  const register = async (email: string, password: string, displayName: string) => {
    const assignedRole = resolveRole(email);

    if (isFirebaseConfigured && auth) {
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const newProfile: UserProfile = {
          uid: cred.user.uid,
          email,
          displayName,
          role: assignedRole,
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
      role: assignedRole,
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
      } catch (err) {
        console.warn("Error signing out:", err);
      }
    }
    setUser(null);
    localStorage.removeItem('pcep_active_user');
    localStorage.removeItem('pcep_user_role');
    localStorage.removeItem('pcep_student_progress');
    localStorage.removeItem('pcep_submissions');
    localStorage.removeItem('pcep_exam_attempts');
    sessionStorage.clear();
  };

  const switchRole = (newRole: 'student' | 'teacher') => {
    if (newRole === 'teacher') {
      setUser(DEFAULT_ADMIN);
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
      isAdmin: user?.role === 'teacher' || user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase(),
      isCloudConnected: isFirebaseConfigured,
      login,
      loginWithGoogle,
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

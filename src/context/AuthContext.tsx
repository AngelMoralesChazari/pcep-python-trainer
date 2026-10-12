import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
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
  updateUserStats: (newStats: Partial<UserProfile['stats']> | ((prevStats: UserProfile['stats']) => Partial<UserProfile['stats']>)) => void;
}

export const getLocalDateKey = (d: Date = new Date()): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDaysDiff = (dateStr1: string, dateStr2: string): number => {
  try {
    const [y1, m1, d1] = dateStr1.split('-').map(Number);
    const [y2, m2, d2] = dateStr2.split('-').map(Number);
    const d1Obj = new Date(y1, m1 - 1, d1);
    const d2Obj = new Date(y2, m2 - 1, d2);
    const diffMs = d2Obj.getTime() - d1Obj.getTime();
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  } catch {
    return 0;
  }
};

const yesterdayDateStr = (() => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateKey(d);
})();

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
    lastActiveDate: new Date().toISOString(),
    streakStatus: 'pending',
    lastConfirmedStreakDate: yesterdayDateStr,
    todayConnectedSeconds: 0,
    isTodayStreakConfirmed: false
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
    lastActiveDate: new Date().toISOString(),
    streakStatus: 'pending',
    lastConfirmedStreakDate: yesterdayDateStr,
    todayConnectedSeconds: 0,
    isTodayStreakConfirmed: false
  }
};

export const syncUserToRegistry = (profile: UserProfile) => {
  try {
    const raw = localStorage.getItem('pcep_registered_users');
    const list: UserProfile[] = raw ? JSON.parse(raw) : [];
    const idx = list.findIndex(u => u.uid === profile.uid || (u.email && profile.email && u.email.toLowerCase() === profile.email.toLowerCase()));
    const now = new Date().toISOString();
    const updatedUser: UserProfile = {
      ...profile,
      lastLoginAt: profile.lastLoginAt || now,
      stats: {
        ...profile.stats,
        lastActiveDate: now
      }
    };
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...updatedUser };
    } else {
      list.push(updatedUser);
    }
    localStorage.setItem('pcep_registered_users', JSON.stringify(list));
  } catch {}
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

  const userRef = useRef(user);
  useEffect(() => {
    userRef.current = user;
  }, [user]);

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
          const now = new Date().toISOString();

          if (docSnap.exists()) {
            const data = docSnap.data() as UserProfile;
            // Asegurar que si el correo es 24722899@uagro.mx siempre tenga rol teacher
            if (assignedRole === 'teacher' && data.role !== 'teacher') {
              data.role = 'teacher';
              await setDoc(userDocRef, { role: 'teacher' }, { merge: true });
            }
            await setDoc(userDocRef, { lastLoginAt: now, 'stats.lastActiveDate': now }, { merge: true });
            data.lastLoginAt = now;
            syncUserToRegistry(data);
            setUser(data);
          } else {
            const newProfile: UserProfile = {
              uid: fbUser.uid,
              email: userEmail,
              displayName: fbUser.displayName || userEmail.split('@')[0] || 'Usuario PCEP',
              role: assignedRole,
              createdAt: now,
              lastLoginAt: now,
              stats: {
                totalSolved: 0,
                totalAttempts: 0,
                accuracyPercentage: 0,
                studyTimeSeconds: 0,
                currentStreakDays: 1,
                lastActiveDate: now
              }
            };
            await setDoc(userDocRef, newProfile);
            syncUserToRegistry(newProfile);
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

  // Monitoreo de actividad y confirmación de racha (Mínimo 5 minutos / 300 segundos conectados)
  useEffect(() => {
    if (!user) return;

    const todayStr = getLocalDateKey();
    const timeKey = `pcep_time_${user.uid}_${todayStr}`;
    const awardKey = `pcep_streak_awarded_${user.uid}_${todayStr}`;
    let todaySeconds = Number(localStorage.getItem(timeKey) || user.stats?.todayConnectedSeconds || 0);

    const awardStreakForToday = (sec: number) => {
      localStorage.setItem(awardKey, 'true');
      localStorage.setItem(timeKey, String(sec));

      updateUserStats(prevStats => {
        const lastConfDate = prevStats.lastConfirmedStreakDate;
        const diff = lastConfDate ? getDaysDiff(lastConfDate, todayStr) : 1;

        // Calcular nueva racha
        let nextStreak = prevStats.currentStreakDays || 1;
        if (diff > 3) {
          // Pasaron más de 2 días sin conexión -> Inicia en 1
          nextStreak = 1;
        } else if (lastConfDate === todayStr) {
          // Si previamente se confirmó pero no había subido a 2do día:
          nextStreak = Math.max(2, prevStats.currentStreakDays || 1);
        } else {
          // Consecutivo o reanudación de pausa
          nextStreak = Math.max(2, (prevStats.currentStreakDays || 1) + 1);
        }

        return {
          currentStreakDays: nextStreak,
          isTodayStreakConfirmed: true,
          streakStatus: 'active',
          lastConfirmedStreakDate: todayStr,
          streakAwardedDate: todayStr,
          todayConnectedSeconds: sec,
          studyTimeSeconds: (prevStats.studyTimeSeconds || 0) + 1,
          lastActiveDate: new Date().toISOString()
        };
      });
    };

    // 1. Verificación inmediata al montar o recargar
    const isAwarded = localStorage.getItem(awardKey) === 'true';
    const lastConf = user.stats?.lastConfirmedStreakDate;
    const diff = lastConf ? getDaysDiff(lastConf, todayStr) : 1;

    if (todaySeconds >= 300) {
      if (!isAwarded || (user.stats?.currentStreakDays === 1)) {
        // El usuario ya cumplió los 5 minutos pero aún no se le marcó su 2do día de racha
        awardStreakForToday(todaySeconds);
      } else if (!user.stats?.isTodayStreakConfirmed || user.stats?.streakStatus !== 'active') {
        updateUserStats({
          isTodayStreakConfirmed: true,
          streakStatus: 'active',
          todayConnectedSeconds: todaySeconds
        });
      }
    } else {
      // Aún no alcanza 300 segundos
      if (diff === 2 || diff === 3) {
        if (user.stats?.streakStatus !== 'paused') {
          updateUserStats({
            isTodayStreakConfirmed: false,
            streakStatus: 'paused',
            todayConnectedSeconds: todaySeconds
          });
        }
      } else if (diff > 3) {
        if (user.stats?.currentStreakDays !== 0 || user.stats?.streakStatus !== 'pending') {
          updateUserStats({
            currentStreakDays: 0,
            isTodayStreakConfirmed: false,
            streakStatus: 'pending',
            todayConnectedSeconds: todaySeconds
          });
        }
      } else {
        if (user.stats?.streakStatus !== 'pending' && !user.stats?.isTodayStreakConfirmed) {
          updateUserStats({
            isTodayStreakConfirmed: false,
            streakStatus: 'pending',
            todayConnectedSeconds: todaySeconds
          });
        }
      }
    }

    // 2. Cronómetro continuo segundo a segundo (avanza en vivo sin congelarse)
    const timer = setInterval(() => {
      todaySeconds += 1;
      localStorage.setItem(timeKey, String(todaySeconds));

      const awarded = localStorage.getItem(awardKey) === 'true';
      if (todaySeconds >= 300 && (!awarded || userRef.current?.stats?.currentStreakDays === 1)) {
        awardStreakForToday(todaySeconds);
      } else if (todaySeconds % 5 === 0) {
        // Incrementar studyTimeSeconds de forma continua y acumulativa cada 5 segundos
        updateUserStats(prevStats => ({
          todayConnectedSeconds: todaySeconds,
          studyTimeSeconds: (prevStats.studyTimeSeconds || 0) + 5,
          lastActiveDate: new Date().toISOString()
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [user?.uid]);

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
        syncUserToRegistry(profile);
        setUser(profile);
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message || 'Error al iniciar sesión con Google' };
      }
    }

    // Modo demo / offline: simular inicio con Google como admin 24722899@uagro.mx
    syncUserToRegistry(DEFAULT_ADMIN);
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
          const now = new Date().toISOString();
          await setDoc(docRef, { lastLoginAt: now, 'stats.lastActiveDate': now }, { merge: true });
          profile.lastLoginAt = now;
          syncUserToRegistry(profile);
          setUser(profile);
        }
        return { success: true };
      } catch (err: any) {
        // Fallback para pruebas rápidas / demo local si el usuario aún no existe en Firebase Auth
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-login-credentials') {
          const mockUser: UserProfile = assignedRole === 'teacher'
            ? { ...DEFAULT_ADMIN, email }
            : { ...DEFAULT_STUDENT, email, displayName: email.split('@')[0] };
          syncUserToRegistry(mockUser);
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
    syncUserToRegistry(mockUser);
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
        syncUserToRegistry(newProfile);
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
    syncUserToRegistry(mockUser);
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

  const updateUserStats = (
    newStats: Partial<UserProfile['stats']> | ((prevStats: UserProfile['stats']) => Partial<UserProfile['stats']>)
  ) => {
    setUser(prev => {
      if (!prev) return prev;
      const resolved = typeof newStats === 'function' ? newStats(prev.stats) : newStats;
      const updated = {
        ...prev,
        stats: {
          ...prev.stats,
          ...resolved
        }
      };
      syncUserToRegistry(updated);
      if (isFirebaseConfigured && auth && prev) {
        setDoc(doc(db, 'users', prev.uid), { stats: updated.stats, lastActiveDate: new Date().toISOString() }, { merge: true }).catch(() => {});
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

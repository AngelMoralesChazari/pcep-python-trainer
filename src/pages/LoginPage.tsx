import React, { useState } from 'react';
import {
  LogIn, UserPlus, KeyRound, CheckCircle2,
  AlertCircle, Cloud, ArrowLeft, Mail, Lock, User, Shield
} from 'lucide-react';
import { useAuth, ADMIN_EMAIL } from '../context/AuthContext';

interface LoginPageProps {
  onSuccess: () => void;
  onBack: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSuccess, onBack }) => {
  const { login, loginWithGoogle, register, resetPassword, isCloudConnected } = useAuth();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // sesión con Google
  const handleGoogleSignIn = async () => {
    setStatusMessage(null);
    setLoading(true);
    try {
      const res = await loginWithGoogle();
      if (res.success) {
        onSuccess();
      } else {
        setStatusMessage({ type: 'error', text: res.error || 'Error al iniciar sesión con Google.' });
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Error con el proveedor de Google.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await login(email, password);
        if (res.success) {
          onSuccess();
        } else {
          setStatusMessage({ type: 'error', text: res.error || 'Credenciales inválidas' });
        }
      } else if (mode === 'register') {
        if (!displayName.trim()) {
          setStatusMessage({ type: 'error', text: 'Por favor ingresa tu nombre completo.' });
          setLoading(false);
          return;
        }
        const res = await register(email, password, displayName);
        if (res.success) {
          setStatusMessage({ type: 'success', text: '¡Cuenta creada con éxito! Redirigiendo...' });
          setTimeout(() => onSuccess(), 1000);
        } else {
          setStatusMessage({ type: 'error', text: res.error || 'Error al registrar la cuenta' });
        }
      } else if (mode === 'forgot') {
        const res = await resetPassword(email);
        if (res.success) {
          setStatusMessage({ type: 'success', text: 'Se ha enviado un enlace de recuperación a tu correo.' });
        } else {
          setStatusMessage({ type: 'error', text: res.error || 'No se pudo enviar el correo' });
        }
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Error inesperado' });
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = (role: 'admin' | 'student') => {
    if (role === 'admin') {
      setEmail(ADMIN_EMAIL);
      setPassword('admin123456');
    } else {
      setEmail('alumno@uagro.mx');
      setPassword('alumno123456');
    }
  };

  const isEnteringAdmin = email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        {/* Cabecera y botón regresar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {mode === 'login' && 'Iniciar Sesión'}
            {mode === 'register' && 'Crear Cuenta PCEP'}
            {mode === 'forgot' && 'Recuperar Contraseña'}
          </h1>
          <p className="text-xs text-slate-500">
            Acceso a teoría, simulacros oficiales y seguimiento de preparación
          </p>
        </div>

        {/* 1. Botón Principal: Inicio de Sesión con Google */}
        <div className="space-y-3">



        </div>

        {/* Pestañas de modo manual */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => { setMode('login'); setStatusMessage(null); }}
            className={`flex-1 py-1.5 rounded-lg transition ${mode === 'login' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Entrar
          </button>
          <button
            onClick={() => { setMode('register'); setStatusMessage(null); }}
            className={`flex-1 py-1.5 rounded-lg transition ${mode === 'register' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Registro
          </button>
          <button
            onClick={() => { setMode('forgot'); setStatusMessage(null); }}
            className={`flex-1 py-1.5 rounded-lg transition ${mode === 'forgot' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            Recuperar
          </button>
        </div>




        {/* Formulario Manual */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {mode === 'register' && (
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Nombre Completo:</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Ej. Ángel Morales"
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Correo Electrónico:</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="24722899@uagro.mx o tu correo"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500"
                required
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Contraseña:</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500"
                  required
                />
              </div>
            </div>
          )}

          {/* Divisor */}
          <div className="relative flex items-center justify-center pt-2">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
            <span className="bg-white dark:bg-slate-900 px-3 text-[11px] text-slate-400 font-medium shrink-0">
              Vía Correo Electrónico
            </span>
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs transition flex items-center justify-center gap-3 shadow-sm hover:shadow disabled:opacity-50"
          >

            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
            </svg>
            <span>Continuar con Cuenta de Google</span>
          </button>

          {statusMessage && (
            <div className={`p-3 rounded-xl flex items-center gap-2 text-xs font-medium ${statusMessage.type === 'error'
              ? 'bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-200 border border-rose-200 dark:border-rose-900'
              : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900'
              }`}>
              {statusMessage.type === 'error' ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white font-semibold rounded-xl transition shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {mode === 'login' && <LogIn className="w-4 h-4" />}
            {mode === 'register' && <UserPlus className="w-4 h-4" />}
            {mode === 'forgot' && <KeyRound className="w-4 h-4" />}
            <span>
              {loading ? 'Procesando...' : mode === 'login' ? 'Iniciar Sesión Manual' : mode === 'register' ? 'Registrarme' : 'Enviar Enlace'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  LogIn, UserPlus, KeyRound, CheckCircle2,
  AlertCircle, Cloud, ArrowLeft, ShieldCheck, Mail, Lock, User
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginPageProps {
  onSuccess: () => void;
  onBack: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSuccess, onBack }) => {
  const { login, register, resetPassword, isCloudConnected } = useAuth();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher'>('student');
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await login(email, password, selectedRole);
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
        const res = await register(email, password, displayName, selectedRole);
        if (res.success) {
          setStatusMessage({ type: 'success', text: '¡Cuenta creada con éxito! Redirigiendo...' });
          setTimeout(() => onSuccess(), 1200);
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

  const handleQuickDemo = (role: 'student' | 'teacher') => {
    if (role === 'student') {
      setEmail('angel@pcep-trainer.org');
      setPassword('demo123456');
      setSelectedRole('student');
    } else {
      setEmail('profesora.garcia@pcep-trainer.org');
      setPassword('demo123456');
      setSelectedRole('teacher');
    }
  };

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

          {/* Indicador de estado de la nube */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            <Cloud className={`w-3.5 h-3.5 ${isCloudConnected ? 'text-emerald-500' : 'text-slate-400'}`} />
            <span>{isCloudConnected ? 'Nube Firebase Conectada' : 'Modo Local / Demo'}</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {mode === 'login' && 'Iniciar Sesión'}
            {mode === 'register' && 'Crear Cuenta PCEP'}
            {mode === 'forgot' && 'Recuperar Contraseña'}
          </h1>
          <p className="text-xs text-slate-500">
            Accede a tu historial de preparación, progreso y simulacros
          </p>
        </div>

        {/* Pestañas de modo */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => { setMode('login'); setStatusMessage(null); }}
            className={`flex-1 py-2 rounded-lg transition ${
              mode === 'login' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => { setMode('register'); setStatusMessage(null); }}
            className={`flex-1 py-2 rounded-lg transition ${
              mode === 'register' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Registro
          </button>
          <button
            onClick={() => { setMode('forgot'); setStatusMessage(null); }}
            className={`flex-1 py-2 rounded-lg transition ${
              mode === 'forgot' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Ayuda
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {mode === 'register' && (
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Nombre Completo:</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Ej. Ángel Pérez"
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
                placeholder="tu@correo.com"
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

          {mode === 'register' && (
            <div>
              <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Rol en la Plataforma:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRole('student')}
                  className={`py-2 rounded-xl border font-semibold transition ${
                    selectedRole === 'student' ? 'border-petrol-600 bg-petrol-50 dark:bg-petrol-950/40 text-petrol-700 dark:text-petrol-300' : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  Alumno
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole('teacher')}
                  className={`py-2 rounded-xl border font-semibold transition ${
                    selectedRole === 'teacher' ? 'border-petrol-600 bg-petrol-50 dark:bg-petrol-950/40 text-petrol-700 dark:text-petrol-300' : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  Profesor
                </button>
              </div>
            </div>
          )}

          {statusMessage && (
            <div className={`p-3 rounded-xl flex items-center gap-2 text-xs font-medium ${
              statusMessage.type === 'error'
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
              {loading ? 'Procesando...' : mode === 'login' ? 'Iniciar Sesión' : mode === 'register' ? 'Registrarme' : 'Enviar Enlace'}
            </span>
          </button>
        </form>

        {/* Acceso Rápido con 1 Clic para Demostración */}
        {!isCloudConnected && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center space-y-2">
            <span className="text-[11px] text-slate-400 font-medium">Accesos rápidos de prueba:</span>
            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemo('student')}
                className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Cargar Alumno (Ángel)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('teacher')}
                className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Cargar Docente (García)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

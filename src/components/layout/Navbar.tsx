import React, { useState } from 'react';
import {
  Code2, BookOpen, CheckSquare, Flame, Trophy,
  FileCheck2, BarChart2, History, Users, Sun, Moon, Menu, X, User
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, isDark, onToggleTheme }) => {
  const { user, role, switchRole } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Panel', icon: BarChart2 },
    { id: 'study', label: 'Teoría', icon: BookOpen },
    { id: 'practice', label: 'Practicar', icon: CheckSquare },
    { id: 'challenges', label: 'Retos', icon: Trophy },
    { id: 'exams', label: 'Simulador PCEP', icon: FileCheck2 },
    { id: 'progress', label: 'Mi Progreso', icon: BarChart2 },
    { id: 'history', label: 'Historial', icon: History },
  ];

  if (role === 'teacher') {
    navItems.push({ id: 'teacher', label: 'Panel Profesor', icon: Users });
  }

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('dashboard')}>
            <div className="w-9 h-9 rounded-xl bg-petrol-700 dark:bg-petrol-600 text-white flex items-center justify-center font-bold shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">PCEP Trainer</span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-petrol-100 dark:bg-petrol-900 text-petrol-800 dark:text-petrol-200">
                  30-02
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Preparación Python Certificada</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-petrol-50 text-petrol-700 dark:bg-petrol-950/60 dark:text-petrol-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Acciones y Perfil */}
          <div className="flex items-center gap-2.5">
            {/* Racha */}
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{user?.stats.currentStreakDays ?? 7} días</span>
            </div>

            {/* Alternador rápido de Rol (Estudiante / Docente) */}
            <button
              onClick={() => switchRole(role === 'student' ? 'teacher' : 'student')}
              className="text-xs px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Cambiar entre rol de Alumno y Profesor"
            >
              Rol: <strong className="font-semibold text-petrol-600 dark:text-petrol-400">{role === 'student' ? 'Alumno' : 'Profesor'}</strong>
            </button>

            {/* Botón de Cuenta / Login */}
            <button
              onClick={() => handleNavClick('login')}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5"
              title="Cuenta e inicio de sesión en la nube"
            >
              <User className="w-3.5 h-3.5 text-petrol-600 dark:text-petrol-400" />
              <span className="hidden sm:inline font-medium">{user?.displayName?.split(' ')[0] || 'Cuenta'}</span>
            </button>

            {/* Alternador Dark / Light */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Cambiar tema claro/oscuro"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Botón Móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-petrol-50 text-petrol-700 dark:bg-petrol-950/60 dark:text-petrol-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

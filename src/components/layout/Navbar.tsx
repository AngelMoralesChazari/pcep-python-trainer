import React, { useState, useRef, useEffect } from 'react';
import {
  Code2, BookOpen, CheckSquare, Flame, Trophy,
  FileCheck2, BarChart2, History, Users, Sun, Moon, Menu, X, User,
  LogOut, ChevronDown, Shield, LogIn
} from 'lucide-react';
import { useAuth, ADMIN_EMAIL } from '../../context/AuthContext';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, isDark, onToggleTheme }) => {
  const { user, role, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Panel', icon: BarChart2 },
    { id: 'study', label: 'Teoría', icon: BookOpen },
    { id: 'practice', label: 'Practicar', icon: CheckSquare },
    { id: 'challenges', label: 'Retos', icon: Trophy },
    { id: 'exams', label: 'Simulador PCEP', icon: FileCheck2 },
    { id: 'progress', label: 'Mi Progreso', icon: BarChart2 },
    { id: 'history', label: 'Historial', icon: History },
  ];

  // Si es profesor o es el administrador institucional, mostrar pestaña docente
  if (role === 'teacher' || isAdmin) {
    navItems.push({ id: 'teacher', label: 'Panel Profesor', icon: Users });
  }

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const handleLogout = async () => {
    setUserDropdownOpen(false);
    await logout();
    onSelectTab('home');
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
            {user && (
              <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{user.stats?.currentStreakDays ?? 7} días</span>
              </div>
            )}

            {/* Menú de Usuario con Cerrar Sesión */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition text-xs font-medium"
                >
                  <div className="w-6 h-6 rounded-lg bg-petrol-100 dark:bg-petrol-900/60 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-bold text-[11px]">
                    {user.displayName?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 leading-tight truncate max-w-[120px]">
                      {user.displayName?.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight">
                      {isAdmin ? 'Admin' : 'Alumno'}
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Dropdown flotante */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-3 space-y-2 z-50">
                    <div className="p-2 border-b border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="font-semibold text-xs text-slate-900 dark:text-slate-100 truncate">
                        {user.displayName}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate font-mono">
                        {user.email}
                      </div>
                      <div className="pt-1">
                        {isAdmin ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                            <Shield className="w-3 h-3" />
                            Administrador / Docente
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            Alumno
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <button
                        onClick={() => handleNavClick('progress')}
                        className="w-full text-left px-2.5 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
                      >
                        <BarChart2 className="w-3.5 h-3.5" />
                        <span>Mi Progreso</span>
                      </button>

                      <button
                        onClick={() => handleNavClick('login')}
                        className="w-full text-left px-2.5 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2"
                      >
                        <User className="w-3.5 h-3.5" />
                        <span>Cambiar Cuenta</span>
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-2.5 py-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition flex items-center gap-2 font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-semibold transition shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Iniciar Sesión</span>
              </button>
            )}

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

          {user && (
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión ({user.displayName?.split(' ')[0]})</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

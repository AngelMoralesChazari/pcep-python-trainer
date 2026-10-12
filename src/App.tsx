import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { StudyPage } from './pages/StudyPage';
import { PracticePage } from './pages/PracticePage';
import { ChallengesPage } from './pages/ChallengesPage';
import { ExamSimulatorPage } from './pages/ExamSimulatorPage';
import { ProgressPage } from './pages/ProgressPage';
import { HistoryPage } from './pages/HistoryPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { PCEPObjectiveCode } from './types/pcep';

const VALID_TABS = [
  'home',
  'dashboard',
  'study',
  'practice',
  'challenges',
  'exams',
  'progress',
  'history',
  'teacher',
  'login',
];

const getTabFromLocation = (): string => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (VALID_TABS.includes(hash)) {
    return hash;
  }
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  if (VALID_TABS.includes(path)) {
    return path;
  }
  return '';
};

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    const fromUrl = getTabFromLocation();
    if (fromUrl) return fromUrl;

    const savedUser = localStorage.getItem('pcep_active_user');
    if (!savedUser) return 'home';

    const savedTab = sessionStorage.getItem('pcep_active_tab');
    if (savedTab && VALID_TABS.includes(savedTab)) return savedTab;
    return 'dashboard';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('pcep_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Estado para pasar ejercicio o filtro a la página de práctica
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);

  useEffect(() => {
    sessionStorage.setItem('pcep_active_tab', currentTab);
  }, [currentTab]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pcep_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pcep_theme', 'light');
    }
  }, [isDark]);

  // Asegurar persistencia del tema en eventos de retroceso/bfcache
  useEffect(() => {
    const handlePageShow = () => {
      const saved = localStorage.getItem('pcep_theme');
      if (saved === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else if (saved === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Sincronizar navegación interna con el historial del navegador (Atrás / Adelante)
  useEffect(() => {
    const initialHash = currentTab === 'home' ? '' : `#${currentTab}`;
    const initialUrl = initialHash ? `${window.location.pathname}${initialHash}` : window.location.pathname;
    window.history.replaceState({ tab: currentTab }, '', initialUrl);

    const handleHistoryChange = (event?: Event) => {
      const popState = event as PopStateEvent | undefined;
      if (popState?.state && popState.state.tab && VALID_TABS.includes(popState.state.tab)) {
        setCurrentTab(popState.state.tab);
        if (popState.state.extraId) {
          setSelectedExerciseId(popState.state.extraId);
        }
        return;
      }

      const fromUrl = getTabFromLocation();
      if (fromUrl) {
        setCurrentTab(fromUrl);
      } else {
        setCurrentTab('home');
      }
    };

    window.addEventListener('popstate', handleHistoryChange);
    window.addEventListener('hashchange', handleHistoryChange);
    return () => {
      window.removeEventListener('popstate', handleHistoryChange);
      window.removeEventListener('hashchange', handleHistoryChange);
    };
  }, []);

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (tab: string, extraId?: string) => {
    if (extraId) {
      setSelectedExerciseId(extraId);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Actualizar historial del navegador para que los botones Atrás y Adelante funcionen dentro de la app
    const targetHash = tab === 'home' ? '' : `#${tab}`;
    const targetUrl = targetHash ? `${window.location.pathname}${targetHash}` : window.location.pathname;

    if (window.location.hash !== targetHash) {
      window.history.pushState({ tab, extraId }, '', targetUrl);
    }
  };

  const handlePracticeConcept = (_objective: PCEPObjectiveCode) => {
    handleNavigate('practice');
  };

  return (
    <div className={`bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200 ${
      currentTab === 'home' || currentTab === 'study' ? 'h-screen overflow-hidden' : 'min-h-screen'
    }`}>
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => handleNavigate(tab)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      <main className={`flex-1 min-h-0 ${currentTab === 'home' || currentTab === 'study' ? 'overflow-hidden flex flex-col' : 'pb-16'}`}>
        {currentTab === 'home' && (
          <HomePage
            onStart={() => handleNavigate('dashboard')}
            onLogin={() => handleNavigate('login')}
          />
        )}

        {currentTab === 'login' && (
          <LoginPage
            onSuccess={() => handleNavigate('dashboard')}
            onBack={() => handleNavigate('dashboard')}
          />
        )}

        {currentTab === 'dashboard' && (
          <DashboardPage
            onNavigate={handleNavigate}
            onSelectExercise={(id) => setSelectedExerciseId(id)}
          />
        )}

        {currentTab === 'study' && (
          <StudyPage onPracticeConcept={handlePracticeConcept} />
        )}

        {currentTab === 'practice' && (
          <PracticePage
            initialExerciseId={selectedExerciseId}
            onClearInitialExercise={() => setSelectedExerciseId(null)}
          />
        )}

        {currentTab === 'challenges' && (
          <ChallengesPage />
        )}

        {currentTab === 'exams' && (
          <ExamSimulatorPage />
        )}

        {currentTab === 'progress' && (
          <ProgressPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'history' && (
          <HistoryPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'teacher' && (
          <TeacherDashboardPage />
        )}
      </main>

      {currentTab !== 'home' && currentTab !== 'study' && (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500">
          <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} PCEP Trainer &bull; Preparación Python Certificada PCEP-30-02</span>
          </div>
        </footer>
      )}
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;

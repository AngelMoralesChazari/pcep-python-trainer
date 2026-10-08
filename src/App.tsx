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

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    // Si no hay usuario activo, la vista inicial es siempre 'home'
    const savedUser = localStorage.getItem('pcep_active_user');
    if (!savedUser) return 'home';
    const savedTab = sessionStorage.getItem('pcep_active_tab');
    return savedTab || 'dashboard';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('pcep_theme') === 'dark';
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

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (tab: string, extraId?: string) => {
    if (extraId) {
      setSelectedExerciseId(extraId);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePracticeConcept = (_objective: PCEPObjectiveCode) => {
    setSelectedExerciseId(null);
    setCurrentTab('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => handleNavigate(tab)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1 pb-16">
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

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} PCEP Trainer &bull; Preparación Python Certificada PCEP-30-02</span>
        </div>
      </footer>
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

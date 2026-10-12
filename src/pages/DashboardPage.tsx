import React from 'react';
import {
  Flame, CheckCircle, Target, Clock, ArrowRight,
  AlertTriangle, BookOpen, Sparkles, Trophy, PauseCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { DifficultyBadge, ExerciseTypeBadge } from '../components/common/Badge';

interface DashboardPageProps {
  onNavigate: (tab: string, extraId?: string) => void;
  onSelectExercise: (exerciseId: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate, onSelectExercise }) => {
  const { user } = useAuth();
  const { progress, exercises, getRecommendedExercises } = useProgress();

  const recommendedList = getRecommendedExercises(3);

  // Formatear tiempo de estudio (segundos a horas y minutos)
  const formatStudyTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Calcular promedio de preparación ponderado por los pesos oficiales PCEP  // Calcular promedio de preparación ponderado por los pesos oficiales PCEP
  // Sec 1: 18%, Sec 2: 29%, Sec 3: 25%, Sec 4: 28%
  const weightedOverallProgress = user
    ? Math.round(
        ((progress.sectionScores[1] || 0) * 0.18) +
        ((progress.sectionScores[2] || 0) * 0.29) +
        ((progress.sectionScores[3] || 0) * 0.25) +
        ((progress.sectionScores[4] || 0) * 0.28)
      )
    : 0;

  const section1Score = user ? (progress.sectionScores[1] || 0) : 0;
  const section2Score = user ? (progress.sectionScores[2] || 0) : 0;
  const section3Score = user ? (progress.sectionScores[3] || 0) : 0;
  const section4Score = user ? (progress.sectionScores[4] || 0) : 0;

  return (
    <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Saludo y Resumen Principal */}
      <div className="bg-gradient-to-r from-petrol-900 via-slate-900 to-slate-900 rounded-2xl text-white p-6 sm:p-8 lg:p-9 shadow-sm border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-petrol-300 font-mono text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-petrol-950/60 border border-petrol-800/60">
                {user ? 'Certificación Python PCEP-30-02' : 'Certificación Python PCEP-30-02 • Modo Invitado'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {user ? `Hola, ${user.displayName}` : 'Bienvenido a PCEP Trainer'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {user
                ? 'Estás en camino hacia la certificación oficial. Mantén la racha resolviendo ejercicios diarios y reforzando tus temas clave.'
                : 'Inicia sesión con tu cuenta para registrar tu progreso oficial, guardar tus simulacros y sincronizar tus estadísticas en la nube.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {user ? (
              <>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-5 py-3 rounded-xl bg-petrol-500 hover:bg-petrol-600 text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Continuar Practicando</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('exams')}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Simulacro de Examen</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-3 rounded-xl bg-petrol-500 hover:bg-petrol-600 text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Iniciar Sesión en la Nube</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Practicar como Invitado</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Barra de progreso global del examen */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              {user ? 'Tu Progreso Global PCEP' : 'Progreso Global PCEP (Inicia sesión para guardar)'}
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-petrol-300">{weightedOverallProgress}%</span>
          </div>
          <div className="w-full bg-slate-800/90 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-petrol-500 to-petrol-300 h-full rounded-full transition-all duration-700"
              style={{ width: `${weightedOverallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tarjetas de Métricas Estadísticas Distribuidas Uniformemente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {/* Racha */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 ${
            user?.stats?.streakStatus === 'paused'
              ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-600'
              : user?.stats?.isTodayStreakConfirmed
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600'
                : 'bg-amber-50/60 dark:bg-amber-950/20 text-amber-500'
          }`}>
            {user?.stats?.streakStatus === 'paused' ? (
              <PauseCircle className="w-6 h-6 text-amber-600" />
            ) : (
              <Flame className={`w-6 h-6 ${user?.stats?.isTodayStreakConfirmed ? 'fill-amber-500' : ''}`} />
            )}
          </div>
          <div className="min-w-0">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Racha Actual</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-mono tracking-tight flex items-center gap-2">
              <span>{user ? `${user.stats.currentStreakDays} ${user.stats.currentStreakDays === 1 ? 'día' : 'días'}` : '0 días'}</span>
              {user?.stats?.streakStatus === 'paused' && (
                <span className="text-[11px] font-sans font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">
                  En Pausa
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {!user
                ? 'Inicia sesión'
                : user.stats?.streakStatus === 'paused'
                  ? 'Racha en pausa'
                  : 'Constancia diaria'}
            </div>
          </div>
        </div>

        {/* Ejercicios Resueltos */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Ejercicios Resueltos</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-mono tracking-tight">
              {user ? user.stats.totalSolved : 0}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {user ? 'De todo el temario' : 'Modo invitado'}
            </div>
          </div>
        </div>

        {/* Precisión Media */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Precisión Media</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-mono tracking-tight">
              {user ? `${user.stats.accuracyPercentage}%` : '--%'}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {user ? 'Aciertos en primer intento' : 'Sin registrar'}
            </div>
          </div>
        </div>

        {/* Tiempo Practicando */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tiempo Practicando</div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-mono tracking-tight">
              {user ? formatStudyTime(user.stats.studyTimeSeconds) : '0h 0m'}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {user ? 'En la plataforma' : 'Sin registrar'}
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de Estudio PCEP con sus pesos oficiales */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              Rendimiento por Sección del Examen Oficial
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ponderación oficial para acreditar la certificación PCEP-30-02 (mínimo 70% requerido).
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-petrol-50 dark:bg-petrol-950/60 text-petrol-700 dark:text-petrol-300 border border-petrol-200 dark:border-petrol-800 self-start sm:self-auto">
            {user ? 'Criterio de aprobación: 70%' : 'Modo Invitado (Sin guardar)'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {/* Sección 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Sección 1 (18%)
                </span>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  {section1Score}%
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Fundamentos de Python</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Operadores, literales, sep/end, int/float.</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Dominio</span>
                <span>{section1Score >= 70 ? 'Aprobado' : `${Math.max(0, 70 - section1Score)}% para 70%`}</span>
              </div>
              <ProgressBar value={section1Score} showPercent={false} color="emerald" size="sm" />
            </div>
          </div>

          {/* Sección 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Sección 2 (29%)
                </span>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-petrol-50 dark:bg-petrol-950/60 text-petrol-700 dark:text-petrol-300">
                  {section2Score}%
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Flujo de Control</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Condicionales, while, for, range, break, else.</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Dominio</span>
                <span>{section2Score >= 70 ? 'Aprobado' : `${Math.max(0, 70 - section2Score)}% para 70%`}</span>
              </div>
              <ProgressBar value={section2Score} showPercent={false} color="petrol" size="sm" />
            </div>
          </div>

          {/* Sección 3 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Sección 3 (25%)
                </span>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                  {section3Score}%
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Colecciones de Datos</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Listas, tuplas, diccionarios, strings y slicing.</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Dominio</span>
                <span>{section3Score >= 70 ? 'Aprobado' : `${Math.max(0, 70 - section3Score)}% para 70%`}</span>
              </div>
              <ProgressBar value={section3Score} showPercent={false} color="amber" size="sm" />
            </div>
          </div>

          {/* Sección 4 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Sección 4 (28%)
                </span>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                  {section4Score}%
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Funciones y Excepciones</h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Scope, try-except, jerarquía y argumentos.</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Dominio</span>
                <span>{section4Score >= 70 ? 'Aprobado' : `${Math.max(0, 70 - section4Score)}% para 70%`}</span>
              </div>
              <ProgressBar value={section4Score} showPercent={false} color="rose" size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Inferior: Proporción Equilibrada entre Temas Débiles y Recomendados */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Tus Temas Débiles (4 columnas en XL, 5 en LG) */}
        <div className="lg:col-span-5 xl:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Tus Temas Débiles a Reforzar</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            El sistema detecta automáticamente los subtemas donde cometes más fallos para optimizar tu tiempo de estudio.
          </p>

          {user && progress.weakObjectives.length > 0 ? (
            <div className="space-y-3">
              {progress.weakObjectives.map((objCode) => {
                const mastery = progress.objectiveMastery[objCode] ?? 45;
                const titleMap: Record<string, string> = {
                  '4.4': 'Manejo de excepciones (try-except)',
                  '3.3': 'Diccionarios (keys, values, items)',
                  '3.1': 'List slicing & referencias de memoria',
                  '4.3': 'Jerarquía de Built-in Exceptions',
                  '4.2': 'Variables locales, globales y scope'
                };
                return (
                  <div key={objCode} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
                        {objCode} &bull; {titleMap[objCode] || `Objetivo ${objCode}`}
                      </span>
                      <span className="font-mono text-rose-600 dark:text-rose-400 font-bold shrink-0">{mastery}%</span>
                    </div>
                    <ProgressBar value={mastery} showPercent={false} color="rose" size="sm" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                {user
                  ? 'Aún no se detectan temas débiles. ¡Resuelve ejercicios y simulacros para generar tu diagnóstico!'
                  : 'Inicia sesión y realiza ejercicios para que el sistema detecte automáticamente tus áreas de mejora.'}
              </p>
              {!user ? (
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white transition shadow-sm"
                >
                  Iniciar Sesión
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-4 py-2 text-xs font-semibold rounded-xl border border-petrol-300 dark:border-petrol-700 text-petrol-600 dark:text-petrol-400 hover:bg-petrol-50 dark:hover:bg-petrol-950/50 transition"
                >
                  Practicar Ejercicios
                </button>
              )}
            </div>
          )}

          {user && progress.weakObjectives.length > 0 && (
            <button
              onClick={() => onNavigate('practice')}
              className="w-full mt-2 py-2.5 text-xs font-semibold text-petrol-600 dark:text-petrol-400 border border-petrol-200 dark:border-petrol-800 rounded-xl hover:bg-petrol-50 dark:hover:bg-petrol-950/50 transition"
            >
              Practicar debilidades ahora
            </button>
          )}
        </div>

        {/* Recomendados Para Ti (8 columnas en XL, 7 en LG) */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
              <Sparkles className="w-4 h-4 text-petrol-600" />
              <span>Ejercicios Recomendados para Ti</span>
            </div>
            <button
              onClick={() => onNavigate('practice')}
              className="text-xs font-medium text-petrol-600 hover:text-petrol-700 flex items-center gap-1 transition"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {recommendedList.map((exercise) => (
              <div
                key={exercise.id}
                onClick={() => {
                  onSelectExercise(exercise.id);
                  onNavigate('practice');
                }}
                className="group p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-petrol-500 dark:hover:border-petrol-600 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 cursor-pointer transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow"
              >
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Obj {exercise.pcepObjective}
                    </span>
                    <DifficultyBadge difficulty={exercise.difficulty} />
                    <ExerciseTypeBadge type={exercise.type} />
                    <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
                      &bull; {exercise.topic}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
                    {exercise.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 leading-relaxed">
                    {exercise.statement}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-petrol-600 group-hover:text-white text-xs font-semibold text-slate-700 dark:text-slate-300 transition self-start sm:self-center">
                  <span>Resolver</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Próximo Simulacro */}
          <div className="mt-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-petrol-50 to-slate-50 dark:from-petrol-950/40 dark:to-slate-900/60 border border-petrol-200 dark:border-petrol-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-petrol-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Próximo Simulacro PCEP Recomendado</div>
                <div className="text-[11px] sm:text-xs text-slate-500">30 preguntas balanceadas con tiempo límite oficial (45 min)</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('exams')}
              className="px-4 py-2 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm shrink-0 flex items-center justify-center gap-1.5"
            >
              <span>Comenzar Examen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

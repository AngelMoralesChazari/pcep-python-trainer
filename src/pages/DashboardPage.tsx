import React from 'react';
import {
  Flame, CheckCircle, Target, Clock, ArrowRight,
  AlertTriangle, BookOpen, Sparkles, Trophy
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
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Saludo y Resumen Principal */}
      <div className="bg-gradient-to-r from-petrol-900 to-slate-900 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-petrol-300 font-mono text-xs font-semibold uppercase tracking-wider">
              {user ? 'Certificación Python PCEP-30-02' : 'Certificación Python PCEP-30-02 • Modo Invitado'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {user ? `Hola, ${user.displayName}` : 'Bienvenido a PCEP Trainer'}
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">
              {user
                ? 'Estás en camino hacia la certificación oficial. Mantén la racha resolviendo ejercicios diarios y reforzando tus temas clave.'
                : 'Inicia sesión con tu cuenta para registrar tu progreso oficial, guardar tus simulacros y sincronizar tus estadísticas en la nube.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {user ? (
              <>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-5 py-2.5 rounded-xl bg-petrol-500 hover:bg-petrol-600 text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Continuar Practicando</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('exams')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Simulacro de Examen</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-2.5 rounded-xl bg-petrol-500 hover:bg-petrol-600 text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Iniciar Sesión en la Nube</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Practicar como Invitado</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Barra de progreso global del examen */}
        <div className="mt-8 pt-6 border-t border-slate-800/80">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-slate-300">
              {user ? 'Tu Progreso Global PCEP' : 'Progreso Global PCEP (Inicia sesión para guardar)'}
            </span>
            <span className="font-mono text-sm font-bold text-petrol-300">{weightedOverallProgress}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-petrol-400 h-3 rounded-full transition-all duration-700"
              style={{ width: `${weightedOverallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tarjetas de Métricas Estadísticas (Requerimiento 30) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Racha */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Racha Actual</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">
              {user ? `${user.stats.currentStreakDays} días` : '0 días'}
            </div>
            {!user && <div className="text-[10px] text-slate-400">Inicia sesión</div>}
          </div>
        </div>

        {/* Ejercicios Resueltos */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Ejercicios Resueltos</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">
              {user ? user.stats.totalSolved : 0}
            </div>
            {!user && <div className="text-[10px] text-slate-400">Modo invitado</div>}
          </div>
        </div>

        {/* Precisión */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Precisión Media</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">
              {user ? `${user.stats.accuracyPercentage}%` : '--%'}
            </div>
            {!user && <div className="text-[10px] text-slate-400">Sin registrar</div>}
          </div>
        </div>

        {/* Tiempo Practicando */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Tiempo Practicando</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">
              {user ? formatStudyTime(user.stats.studyTimeSeconds) : '0h 0m'}
            </div>
            {!user && <div className="text-[10px] text-slate-400">Sin registrar</div>}
          </div>
        </div>
      </div>

      {/* Secciones de Estudio PCEP con sus pesos oficiales */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Rendimiento por Sección del Examen Oficial
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {user ? 'Criterio de aprobación PCEP: 70%' : 'Inicia sesión para registrar tu rendimiento'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Sección 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Sección 1 (18%)
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{section1Score}%</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Fundamentos de Python</div>
              <p className="text-xs text-slate-500 mt-0.5">Operadores, literales, sep/end, int/float.</p>
            </div>
            <ProgressBar value={section1Score} showPercent={false} color="emerald" size="sm" />
          </div>

          {/* Sección 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Sección 2 (29%)
              </span>
              <span className="text-xs font-bold text-petrol-600 dark:text-petrol-400">{section2Score}%</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Flujo de Control</div>
              <p className="text-xs text-slate-500 mt-0.5">Condicionales, while, for, range, break, else.</p>
            </div>
            <ProgressBar value={section2Score} showPercent={false} color="petrol" size="sm" />
          </div>

          {/* Sección 3 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Sección 3 (25%)
              </span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{section3Score}%</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Colecciones de Datos</div>
              <p className="text-xs text-slate-500 mt-0.5">Listas, tuplas, diccionarios, strings y slicing.</p>
            </div>
            <ProgressBar value={section3Score} showPercent={false} color="amber" size="sm" />
          </div>

          {/* Sección 4 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Sección 4 (28%)
              </span>
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">{section4Score}%</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Funciones y Excepciones</div>
              <p className="text-xs text-slate-500 mt-0.5">Scope, try-except, jerarquía y argumentos.</p>
            </div>
            <ProgressBar value={section4Score} showPercent={false} color="rose" size="sm" />
          </div>
        </div>
      </div>

      {/* Grid Inferior: Temas Débiles & Recomendados Para Ti */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tus Temas Débiles (Requerimiento 14, 21 y 30) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
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
                  <div key={objCode} className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {objCode} &bull; {titleMap[objCode] || `Objetivo ${objCode}`}
                      </span>
                      <span className="font-mono text-rose-600 dark:text-rose-400 font-bold">{mastery}%</span>
                    </div>
                    <ProgressBar value={mastery} showPercent={false} color="rose" size="sm" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-5 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-3">
              <p className="text-xs text-slate-500">
                {user
                  ? 'Aún no se detectan temas débiles. ¡Resuelve ejercicios y simulacros para generar tu diagnóstico!'
                  : 'Inicia sesión y realiza ejercicios para que el sistema detecte automáticamente tus áreas de mejora.'}
              </p>
              {!user ? (
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-petrol-600 hover:bg-petrol-700 text-white transition shadow-sm"
                >
                  Iniciar Sesión
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-petrol-300 dark:border-petrol-700 text-petrol-600 dark:text-petrol-400 hover:bg-petrol-50 dark:hover:bg-petrol-950/50 transition"
                >
                  Practicar Ejercicios
                </button>
              )}
            </div>
          )}

          {user && progress.weakObjectives.length > 0 && (
            <button
              onClick={() => onNavigate('practice')}
              className="w-full mt-2 py-2 text-xs font-semibold text-petrol-600 dark:text-petrol-400 border border-petrol-200 dark:border-petrol-800 rounded-lg hover:bg-petrol-50 dark:hover:bg-petrol-950/50 transition"
            >
              Practicar debilidades ahora
            </button>
          )}
        </div>

        {/* Recomendados Para Ti (2 columnas) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
              <Sparkles className="w-4 h-4 text-petrol-600" />
              <span>Ejercicios Recomendados para Ti</span>
            </div>
            <button
              onClick={() => onNavigate('practice')}
              className="text-xs font-medium text-petrol-600 hover:text-petrol-700 flex items-center gap-1"
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
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-petrol-500 dark:hover:border-petrol-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 cursor-pointer transition flex items-center justify-between gap-4"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      Obj {exercise.pcepObjective}
                    </span>
                    <DifficultyBadge difficulty={exercise.difficulty} />
                    <ExerciseTypeBadge type={exercise.type} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
                    {exercise.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{exercise.statement}</p>
                </div>

                <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-petrol-600 opacity-0 group-hover:opacity-100 transition">
                  <span>Resolver</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Próximo Simulacro */}
          <div className="mt-4 p-4 rounded-xl bg-petrol-50 dark:bg-petrol-950/40 border border-petrol-200 dark:border-petrol-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-petrol-600 text-white flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Próximo Simulacro PCEP Recomendado</div>
                <div className="text-[11px] text-slate-500">30 preguntas balanceadas con tiempo límite (45 min)</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('exams')}
              className="px-3.5 py-1.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
            >
              Comenzar Examen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

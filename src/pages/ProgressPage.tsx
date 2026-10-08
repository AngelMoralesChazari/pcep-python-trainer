import React from 'react';
import { Target, Award, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { PCEP_SYLLABUS } from '../data/syllabusData';
import { PCEPObjectiveCode } from '../types/pcep';

export const ProgressPage: React.FC = () => {
  const { progress, exercises } = useProgress();

  // Matriz de Cobertura del Banco de Ejercicios (Sección 45)
  const coverageMap = React.useMemo(() => {
    const counts: Record<string, number> = {};
    exercises.forEach(e => {
      counts[e.pcepObjective] = (counts[e.pcepObjective] || 0) + 1;
    });
    return counts;
  }, [exercises]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Métricas de Preparación
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Dominio de Habilidades PCEP</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Analiza tu porcentaje de dominio conceptual por objetivo y la densidad de ejercicios disponibles en el banco.
          </p>
        </div>
      </div>

      {/* Grid de Dominio por Sección */}
      <div className="space-y-6">
        {PCEP_SYLLABUS.map((section) => (
          <div key={section.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-petrol-600 dark:text-petrol-400">
                  {section.title}
                </span>
                <p className="text-xs text-slate-500">{section.description}</p>
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                Peso: {section.weightPercentage}%
              </span>
            </div>

            {/* Lista de Objetivos de la Sección */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.objectives.map((obj) => {
                const mastery = progress.objectiveMastery[obj.code] ?? 50;
                const availableExercises = coverageMap[obj.code] || 0;
                const isWeak = progress.weakObjectives.includes(obj.code);

                return (
                  <div
                    key={obj.code}
                    className={`p-4 rounded-xl border transition ${
                      isWeak
                        ? 'border-rose-200 bg-rose-50/20 dark:border-rose-900/30 dark:bg-rose-950/10'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30'
                    } space-y-2.5`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                            Obj {obj.code}
                          </span>
                          {isWeak && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/60 px-1.5 py-0.2 rounded">
                              <AlertTriangle className="w-3 h-3" />
                              Reforzar
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                          {obj.title}
                        </h4>
                      </div>

                      <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100">
                        {mastery}%
                      </span>
                    </div>

                    <ProgressBar
                      value={mastery}
                      showPercent={false}
                      color={mastery >= 75 ? 'emerald' : mastery >= 60 ? 'petrol' : 'rose'}
                      size="sm"
                    />

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>{availableExercises} ejercicios en el banco</span>
                      <span>{mastery >= 70 ? 'Apto PCEP' : 'En progreso'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

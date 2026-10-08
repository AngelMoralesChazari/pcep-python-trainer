import React from 'react';
import { ExerciseDifficulty, ExerciseType } from '../../types';

export const DifficultyBadge: React.FC<{ difficulty: ExerciseDifficulty }> = ({ difficulty }) => {
  switch (difficulty) {
    case 'basic':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">Básico</span>;
    case 'basic_plus':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300">Básico+</span>;
    case 'intermediate':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">Intermedio</span>;
    case 'pcep_challenge':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">PCEP Challenge</span>;
    default:
      return null;
  }
};

export const ExerciseTypeBadge: React.FC<{ type: ExerciseType }> = ({ type }) => {
  const map: Record<ExerciseType, { label: string; bg: string }> = {
    theory: { label: 'Teoría', bg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
    code_analysis: { label: 'Análisis de Código', bg: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300' },
    output_prediction: { label: 'Predicción de Salida', bg: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300' },
    debugging: { label: 'Detección y Corrección', bg: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300' },
    code_completion: { label: 'Completar Código', bg: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300' },
    programming: { label: 'Programación (Juez)', bg: 'bg-petrol-100 text-petrol-800 dark:bg-petrol-900/60 dark:text-petrol-200' }
  };

  const item = map[type] || { label: type, bg: 'bg-slate-100 text-slate-700' };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${item.bg}`}>
      {item.label}
    </span>
  );
};

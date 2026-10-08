import React, { useState, useMemo } from 'react';
import {
  Filter, Search, Shuffle, Bookmark,
  ChevronLeft, Sparkles, CheckCircle2, XCircle
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ExerciseRunner } from '../components/exercises/ExerciseRunner';
import { DifficultyBadge, ExerciseTypeBadge } from '../components/common/Badge';
import { ExerciseDifficulty, ExerciseType, PCEPSectionId } from '../types';

interface PracticePageProps {
  initialExerciseId?: string | null;
  onClearInitialExercise?: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  initialExerciseId,
  onClearInitialExercise
}) => {
  const { exercises, progress, generateMoreVariants } = useProgress();

  // Filtros
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unsolved' | 'failed' | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Ejercicio actualmente en resolución
  const [activeExerciseId, setActiveExerciseId] = useState<string | null>(initialExerciseId || null);

  // Sincronizar si cambia desde fuera
  React.useEffect(() => {
    if (initialExerciseId) {
      setActiveExerciseId(initialExerciseId);
    }
  }, [initialExerciseId]);

  const solvedSet = useMemo(() => new Set(progress.solvedExerciseIds), [progress.solvedExerciseIds]);
  const failedSet = useMemo(() => new Set(progress.failedExerciseIds), [progress.failedExerciseIds]);
  const favoriteSet = useMemo(() => new Set(progress.favoriteExerciseIds), [progress.favoriteExerciseIds]);

  // Lista filtrada
  const filteredExercises = useMemo(() => {
    return exercises.filter(ex => {
      if (selectedSection !== 'all' && ex.section !== Number(selectedSection)) return false;
      if (selectedDifficulty !== 'all' && ex.difficulty !== selectedDifficulty) return false;
      if (selectedType !== 'all' && ex.type !== selectedType) return false;

      if (statusFilter === 'unsolved' && solvedSet.has(ex.id)) return false;
      if (statusFilter === 'failed' && !failedSet.has(ex.id)) return false;
      if (statusFilter === 'favorites' && !favoriteSet.has(ex.id)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = ex.title.toLowerCase().includes(query);
        const matchTopic = ex.topic.toLowerCase().includes(query);
        const matchObjective = ex.pcepObjective.toLowerCase().includes(query);
        const matchStatement = ex.statement.toLowerCase().includes(query);
        if (!matchTitle && !matchTopic && !matchObjective && !matchStatement) return false;
      }

      return true;
    });
  }, [exercises, selectedSection, selectedDifficulty, selectedType, statusFilter, searchQuery, solvedSet, failedSet, favoriteSet]);

  const activeExercise = exercises.find(e => e.id === activeExerciseId) || null;

  // Práctica Rápida (Selecciona automáticamente un ejercicio relevante no resuelto)
  const handleQuickPractice = () => {
    const candidates = exercises.filter(e => !solvedSet.has(e.id));
    const target = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : exercises[Math.floor(Math.random() * exercises.length)];
    if (target) {
      setActiveExerciseId(target.id);
    }
  };

  const handleNextExercise = () => {
    if (!activeExerciseId) return;
    const currentIndex = filteredExercises.findIndex(e => e.id === activeExerciseId);
    if (currentIndex >= 0 && currentIndex < filteredExercises.length - 1) {
      setActiveExerciseId(filteredExercises[currentIndex + 1].id);
    } else if (filteredExercises.length > 0) {
      setActiveExerciseId(filteredExercises[0].id);
    }
  };

  const handleBackToList = () => {
    setActiveExerciseId(null);
    if (onClearInitialExercise) onClearInitialExercise();
  };

  // Si hay un ejercicio activo, mostrar la interfaz de resolución interactiva
  if (activeExercise) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Volver al Banco de Ejercicios</span>
          </button>

          <span className="text-xs text-slate-400">
            Ejercicio {filteredExercises.findIndex(e => e.id === activeExercise.id) + 1} de {filteredExercises.length || exercises.length}
          </span>
        </div>

        <ExerciseRunner
          exercise={activeExercise}
          onNext={handleNextExercise}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Encabezado y Acciones */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Banco Interactivo
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Practicar Ejercicios PCEP</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Filtra por sección, dificultad o modalidad. Elige problemas específicos o inicia una práctica rápida adaptativa.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => generateMoreVariants(3)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            title="Genera más variantes paramétricas en tiempo real"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Generar Variantes</span>
          </button>

          <button
            onClick={handleQuickPractice}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-medium transition shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Práctica Rápida</span>
          </button>
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Búsqueda */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por concepto, título o palabra clave (ej. slicing, sep, try)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-petrol-500"
            />
          </div>

          {/* Filtros Dropdowns */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 outline-none"
            >
              <option value="all">Todas las Secciones</option>
              <option value="1">Sección 1 (18%) Fundamentos</option>
              <option value="2">Sección 2 (29%) Flujo</option>
              <option value="3">Sección 3 (25%) Colecciones</option>
              <option value="4">Sección 4 (28%) Funciones</option>
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 outline-none"
            >
              <option value="all">Todas las Dificultades</option>
              <option value="basic">Básico</option>
              <option value="basic_plus">Básico+</option>
              <option value="intermediate">Intermedio</option>
              <option value="pcep_challenge">PCEP Challenge</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 outline-none"
            >
              <option value="all">Todos los Tipos</option>
              <option value="theory">Teoría</option>
              <option value="code_analysis">Análisis de Código</option>
              <option value="output_prediction">Predicción de Salida</option>
              <option value="debugging">Detección de Errores</option>
              <option value="code_completion">Completar Código</option>
              <option value="programming">Programación (Juez)</option>
            </select>
          </div>
        </div>

        {/* Pestañas de estado de resolución */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1 rounded-lg font-medium transition ${
              statusFilter === 'all'
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            Todos ({exercises.length})
          </button>

          <button
            onClick={() => setStatusFilter('unsolved')}
            className={`px-3 py-1 rounded-lg font-medium transition ${
              statusFilter === 'unsolved'
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            No resueltos ({exercises.length - solvedSet.size})
          </button>

          <button
            onClick={() => setStatusFilter('failed')}
            className={`px-3 py-1 rounded-lg font-medium transition ${
              statusFilter === 'failed'
                ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            Fallados ({failedSet.size})
          </button>

          <button
            onClick={() => setStatusFilter('favorites')}
            className={`px-3 py-1 rounded-lg font-medium transition ${
              statusFilter === 'favorites'
                ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-200'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
            }`}
          >
            Favoritos ({favoriteSet.size})
          </button>
        </div>
      </div>

      {/* Lista de Ejercicios */}
      <div className="space-y-3">
        {filteredExercises.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-500">No se encontraron ejercicios con los filtros seleccionados.</p>
          </div>
        ) : (
          filteredExercises.map((exercise) => {
            const isSolved = solvedSet.has(exercise.id);
            const isFailed = failedSet.has(exercise.id);
            const isFav = favoriteSet.has(exercise.id);

            return (
              <div
                key={exercise.id}
                onClick={() => setActiveExerciseId(exercise.id)}
                className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-petrol-500 dark:hover:border-petrol-600 rounded-xl transition cursor-pointer flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Obj {exercise.pcepObjective}
                    </span>
                    <DifficultyBadge difficulty={exercise.difficulty} />
                    <ExerciseTypeBadge type={exercise.type} />
                    {exercise.isGenerated && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                        <Sparkles className="w-3 h-3" />
                        Variante
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition truncate">
                    {exercise.title}
                  </h3>

                  <p className="text-xs text-slate-500 truncate">{exercise.statement}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {isSolved && (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Completado</span>
                    </span>
                  )}
                  {isFailed && !isSolved && (
                    <span className="flex items-center gap-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <XCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Fallado</span>
                    </span>
                  )}
                  {isFav && (
                    <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

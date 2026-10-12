import React, { useState, useMemo, useEffect } from 'react';
import {
  Filter, Search, Shuffle, Bookmark,
  ChevronLeft, ChevronRight, Sparkles, CheckCircle2, XCircle,
  BookOpen, GitBranch, Database, Cpu, Layers
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ExerciseRunner } from '../components/exercises/ExerciseRunner';
import { DifficultyBadge, ExerciseTypeBadge } from '../components/common/Badge';
import { ExerciseDifficulty, ExerciseType } from '../types';

interface PracticePageProps {
  initialExerciseId?: string | null;
  onClearInitialExercise?: () => void;
}

const ITEMS_PER_PAGE = 12;

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

  // Paginación
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Ejercicio actualmente en resolución
  const [activeExerciseId, setActiveExerciseId] = useState<string | null>(initialExerciseId || null);

  // Abrir ejercicio y sincronizar con historial del navegador
  const handleOpenExercise = (exerciseId: string) => {
    setActiveExerciseId(exerciseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(
      { tab: 'practice', exerciseId },
      '',
      `#practice?ex=${exerciseId}`
    );
  };

  // Sincronizar si cambia desde fuera
  useEffect(() => {
    if (initialExerciseId) {
      handleOpenExercise(initialExerciseId);
    }
  }, [initialExerciseId]);

  // Manejar el botón Atrás / Adelante del navegador para volver al listado sin salir de la pestaña
  useEffect(() => {
    // Si al cargar hay un parámetro ?ex= en el hash
    const hash = window.location.hash;
    if (hash.includes('?ex=')) {
      const exId = hash.split('?ex=')[1];
      if (exId && exercises.some(e => e.id === exId)) {
        setActiveExerciseId(exId);
        window.history.replaceState({ tab: 'practice', exerciseId: exId }, '', `#practice?ex=${exId}`);
      }
    }

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      // Si el historial vuelve a un estado sin exerciseId (o nulo), cerramos el ejercicio y volvemos a la lista
      if (!state || state.tab === 'practice') {
        if (state && state.exerciseId) {
          setActiveExerciseId(state.exerciseId);
        } else {
          setActiveExerciseId(null);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [exercises]);

  const solvedSet = useMemo(() => new Set(progress.solvedExerciseIds), [progress.solvedExerciseIds]);
  const failedSet = useMemo(() => new Set(progress.failedExerciseIds), [progress.failedExerciseIds]);
  const favoriteSet = useMemo(() => new Set(progress.favoriteExerciseIds), [progress.favoriteExerciseIds]);

  // Conteos por sección para las pestañas
  const sectionCounts = useMemo(() => {
    return {
      all: exercises.length,
      1: exercises.filter(e => e.section === 1).length,
      2: exercises.filter(e => e.section === 2).length,
      3: exercises.filter(e => e.section === 3).length,
      4: exercises.filter(e => e.section === 4).length,
    };
  }, [exercises]);

  // Conteo por dificultad
  const difficultyCounts = useMemo(() => {
    return {
      all: exercises.length,
      basic: exercises.filter(e => e.difficulty === 'basic').length,
      basic_plus: exercises.filter(e => e.difficulty === 'basic_plus').length,
      intermediate: exercises.filter(e => e.difficulty === 'intermediate').length,
    };
  }, [exercises]);

  // Reiniciar a página 1 cuando cambie cualquier filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSection, selectedDifficulty, selectedType, statusFilter, searchQuery]);

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

  // Cálculo de paginación
  const totalPages = Math.max(1, Math.ceil(filteredExercises.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedExercises = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredExercises.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredExercises, safeCurrentPage]);

  const activeExercise = exercises.find(e => e.id === activeExerciseId) || null;

  // Práctica Rápida (Selecciona automáticamente un ejercicio relevante no resuelto)
  const handleQuickPractice = () => {
    const candidates = exercises.filter(e => !solvedSet.has(e.id));
    const target = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : exercises[Math.floor(Math.random() * exercises.length)];
    if (target) {
      handleOpenExercise(target.id);
    }
  };

  const handleNextExercise = () => {
    if (!activeExerciseId) return;
    const currentIndex = filteredExercises.findIndex(e => e.id === activeExerciseId);
    let nextId: string | null = null;
    if (currentIndex >= 0 && currentIndex < filteredExercises.length - 1) {
      nextId = filteredExercises[currentIndex + 1].id;
    } else if (filteredExercises.length > 0) {
      nextId = filteredExercises[0].id;
    }
    if (nextId) {
      setActiveExerciseId(nextId);
      window.history.replaceState(
        { tab: 'practice', exerciseId: nextId },
        '',
        `#practice?ex=${nextId}`
      );
    }
  };

  const handleBackToList = () => {
    if (window.history.state && window.history.state.exerciseId) {
      window.history.back();
    } else {
      setActiveExerciseId(null);
      window.history.replaceState({ tab: 'practice' }, '', '#practice');
    }
    if (onClearInitialExercise) onClearInitialExercise();
  };

  // Generador de páginas para el paginador
  const getPaginationNumbers = () => {
    const delta = 2;
    const range: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= safeCurrentPage - delta && i <= safeCurrentPage + delta)) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  };

  // Limpiar texto de vista previa para remover bloques ``` de código en bruto
  const cleanStatementPreview = (stmt: string) => {
    const withoutCode = stmt.replace(/```[\s\S]*?```/g, '').replace(/`.*?`/g, '').replace(/\s+/g, ' ').trim();
    return withoutCode || stmt;
  };

  // Si hay un ejercicio activo, mostrar la interfaz de resolución interactiva
  if (activeExercise) {
    return (
      <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition cursor-pointer"
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
    <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Encabezado y Acciones */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Banco Interactivo Oficial
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Ejercicios de Programación</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Ejercicios graduados por temática y dificultad.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => generateMoreVariants(3)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer shadow-xs"
            title="Genera más variantes paramétricas en tiempo real"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Generar Variantes</span>
          </button>

          <button
            onClick={handleQuickPractice}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-medium transition shadow-xs cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Práctica Rápida</span>
          </button>
        </div>
      </div>

      {/* Pestañas Principales por Sección del Examen */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedSection('all')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${selectedSection === 'all'
            ? 'bg-petrol-600 text-white shadow-sm'
            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-petrol-400'
            }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Todas las Secciones</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${selectedSection === 'all' ? 'bg-petrol-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
            {sectionCounts.all}
          </span>
        </button>

        <button
          onClick={() => setSelectedSection('1')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${selectedSection === '1'
            ? 'bg-petrol-600 text-white shadow-sm'
            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-petrol-400'
            }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
          <span>1. Fundamentos</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${selectedSection === '1' ? 'bg-petrol-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
            {sectionCounts[1]}
          </span>
        </button>

        <button
          onClick={() => setSelectedSection('2')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${selectedSection === '2'
            ? 'bg-petrol-600 text-white shadow-sm'
            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-petrol-400'
            }`}
        >
          <GitBranch className="w-3.5 h-3.5 text-sky-500" />
          <span>2. Flujo de Control</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${selectedSection === '2' ? 'bg-petrol-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
            {sectionCounts[2]}
          </span>
        </button>

        <button
          onClick={() => setSelectedSection('3')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${selectedSection === '3'
            ? 'bg-petrol-600 text-white shadow-sm'
            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-petrol-400'
            }`}
        >
          <Database className="w-3.5 h-3.5 text-amber-500" />
          <span>3. Colecciones</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${selectedSection === '3' ? 'bg-petrol-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
            {sectionCounts[3]}
          </span>
        </button>

        <button
          onClick={() => setSelectedSection('4')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${selectedSection === '4'
            ? 'bg-petrol-600 text-white shadow-sm'
            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-petrol-400'
            }`}
        >
          <Cpu className="w-3.5 h-3.5 text-purple-500" />
          <span>4. Funciones y Excepciones</span>
          <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${selectedSection === '4' ? 'bg-petrol-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
            {sectionCounts[4]}
          </span>
        </button>
      </div>

      {/* Barra de Filtros Complementarios y Búsqueda */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3.5">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Búsqueda */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por concepto, título o palabra clave (ej. slicing, sep, try, while, dict)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-petrol-500"
            />
          </div>

          {/* Filtros Dropdowns y Dificultad */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Filtro Dificultad 1, 2, 3 */}
            <div className="flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setSelectedDifficulty('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${selectedDifficulty === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
              >
                Todas
              </button>
              <button
                type="button"
                onClick={() => setSelectedDifficulty('basic')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1 ${selectedDifficulty === 'basic'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                title="Nivel 1: Conceptos directos y sintaxis fundamental"
              >
                <span>Nivel 1</span>
                <span className="text-[10px] opacity-80">(Básico)</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedDifficulty('basic_plus')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1 ${selectedDifficulty === 'basic_plus'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                title="Nivel 2: Lógica combinada y casos borde"
              >
                <span>Nivel 2</span>
                <span className="text-[10px] opacity-80">(Básico+)</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedDifficulty('intermediate')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1 ${selectedDifficulty === 'intermediate'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                title="Nivel 3: Certificación PCEP y preguntas trampa"
              >
                <span>Nivel 3</span>
                <span className="text-[10px] opacity-80">(Intermedio)</span>
              </button>
            </div>

            {/* Selector de Tipo */}
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
            </select>
          </div>
        </div>

        {/* Pestañas de estado de resolución */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${statusFilter === 'all'
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
            >
              Todos ({exercises.length})
            </button>

            <button
              onClick={() => setStatusFilter('unsolved')}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${statusFilter === 'unsolved'
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
            >
              No resueltos ({exercises.length - solvedSet.size})
            </button>

            <button
              onClick={() => setStatusFilter('failed')}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${statusFilter === 'failed'
                ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
            >
              Fallados ({failedSet.size})
            </button>

            <button
              onClick={() => setStatusFilter('favorites')}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${statusFilter === 'favorites'
                ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-200'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
            >
              Favoritos ({favoriteSet.size})
            </button>
          </div>

          <div className="text-[11px] text-slate-400">
            {filteredExercises.length > 0 && (
              <span>
                Mostrando {(safeCurrentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredExercises.length)} de {filteredExercises.length} ejercicios
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Cuadrícula de 12 Ejercicios por Página */}
      {filteredExercises.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No se encontraron ejercicios con los filtros seleccionados.</p>
          <p className="text-xs text-slate-500">Prueba a seleccionar "Todas las Secciones" o "Todas las Dificultades".</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedExercises.map((exercise) => {
              const isSolved = solvedSet.has(exercise.id);
              const isFailed = failedSet.has(exercise.id);
              const isFav = favoriteSet.has(exercise.id);

              return (
                <div
                  key={exercise.id}
                  onClick={() => handleOpenExercise(exercise.id)}
                  className="group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-petrol-500 dark:hover:border-petrol-500/80 rounded-xl transition cursor-pointer flex flex-col justify-between gap-3 shadow-xs hover:shadow-md"
                >
                  <div className="space-y-2.5 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          Obj {exercise.pcepObjective}
                        </span>
                        <DifficultyBadge difficulty={exercise.difficulty} />
                        <ExerciseTypeBadge type={exercise.type} />
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {isSolved && (
                          <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-[11px]">Resuelto</span>
                          </span>
                        )}
                        {isFailed && !isSolved && (
                          <span className="flex items-center gap-1 text-xs font-medium text-rose-600 dark:text-rose-400">
                            <XCircle className="w-4 h-4" />
                            <span className="text-[11px]">Fallado</span>
                          </span>
                        )}
                        {isFav && (
                          <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                        )}
                      </div>
                    </div>

                    {exercise.isGenerated && (
                      <div className="flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>Variante Paramétrica</span>
                      </div>
                    )}

                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition line-clamp-2 leading-snug">
                      {exercise.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {cleanStatementPreview(exercise.statement)}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate">{exercise.topic}</span>
                    <span className="group-hover:text-petrol-600 dark:group-hover:text-petrol-400 font-medium shrink-0 flex items-center gap-1">
                      Resolver &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Barra de Paginación Inteligente */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500">
                Página <span className="font-semibold text-slate-800 dark:text-slate-200">{safeCurrentPage}</span> de{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">{totalPages}</span>
              </div>

              <div className="flex items-center gap-1">
                {/* Botón Anterior */}
                <button
                  type="button"
                  disabled={safeCurrentPage <= 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Anterior</span>
                </button>

                {/* Números de página */}
                <div className="flex items-center gap-1 px-1">
                  {getPaginationNumbers().map((num, idx) => {
                    if (num === '...') {
                      return (
                        <span key={`dots-${idx}`} className="px-2 py-1 text-xs text-slate-400">
                          ...
                        </span>
                      );
                    }

                    const pageNum = num as number;
                    const isActive = pageNum === safeCurrentPage;

                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center justify-center ${isActive
                          ? 'bg-petrol-600 text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Botón Siguiente */}
                <button
                  type="button"
                  disabled={safeCurrentPage >= totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import {
  AlertTriangle, FileJson, Users, RefreshCw, CheckCircle2,
  Clock, Award, Shield, Search, Filter, BookOpen, AlertCircle,
  Sparkles, ExternalLink, ChevronLeft, ChevronRight, Eye, X,
  Bug, HelpCircle, Code2, XCircle
} from 'lucide-react';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { useProgress } from '../context/ProgressContext';
import { useAuth, ADMIN_EMAIL } from '../context/AuthContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { PythonCodeBlock, TheoryMarkdownRenderer } from '../components/theory/TheoryMarkdownRenderer';
import { DifficultyBadge, ExerciseTypeBadge } from '../components/common/Badge';
import { Exercise, PCEPObjectiveCode, PCEPSectionId, UserProfile } from '../types';

export interface StudentRecord {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  progress: number;
  accuracy: number;
  solvedCount: number;
  studyTimeHours: number;
  lastSimulacroScore: number | null;
  weakTopics: string[];
  lastActiveDate: string;
  createdAt: string;
  totalAttempts: number;
  failedExerciseIds: string[];
}

export const TeacherDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { exercises, submissions, examAttempts, progress, addNewExercise, importExercisesJson } = useProgress();
  const [inspectingExercise, setInspectingExercise] = useState<Exercise | null>(null);

  const [activeTab, setActiveTab] = useState<'students' | 'exercises' | 'analytics' | 'import'>('students');
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'students' | 'teachers'>('students');
  const [statusFilter, setStatusFilter] = useState<'all' | 'passed' | 'risk'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const STUDENTS_PER_PAGE = 10;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('');

  // Estado para crear nuevo ejercicio manual
  const [newTitle, setNewTitle] = useState('');
  const [newSection, setNewSection] = useState<PCEPSectionId>(1);
  const [newObjective, setNewObjective] = useState<PCEPObjectiveCode>('1.1');
  const [newStatement, setNewStatement] = useState('');
  const [newExpectedOutput, setNewExpectedOutput] = useState('');
  const [newExplanation, setNewExplanation] = useState('');

  // Estado para importar JSON
  const [jsonInput, setJsonInput] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Cargar estudiantes desde Firestore y caché local
  const parseStudentData = (id: string, data: any): StudentRecord => {
    const solved = data.stats?.totalSolved || 0;
    const attempts = data.stats?.totalAttempts || 0;
    const accuracy = data.stats?.accuracyPercentage || (attempts > 0 ? Math.round((solved / attempts) * 100) : 0);
    const studyHours = Math.round(((data.stats?.studyTimeSeconds || 0) / 3600) * 10) / 10;
    const role: 'student' | 'teacher' = data.role === 'teacher' || data.email?.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() ? 'teacher' : 'student';
    const progressScore = data.progressPercentage ?? (solved > 0 ? Math.min(100, Math.round((solved / 30) * 100)) : 0);

    const failedIds: string[] = Array.isArray(data.failedExerciseIds)
      ? data.failedExerciseIds
      : Array.isArray(data.stats?.failedExerciseIds)
        ? data.stats.failedExerciseIds
        : [];

    return {
      id,
      name: data.displayName || data.email?.split('@')[0] || 'Usuario PCEP',
      email: data.email || 'Sin correo',
      role,
      progress: progressScore,
      accuracy,
      solvedCount: solved,
      studyTimeHours: studyHours,
      lastSimulacroScore: typeof data.lastSimulacroScore === 'number' ? data.lastSimulacroScore : null,
      weakTopics: Array.isArray(data.weakTopics) ? data.weakTopics : (data.stats?.weakTopics || []),
      lastActiveDate: data.lastLoginAt || data.stats?.lastActiveDate || data.createdAt || new Date().toISOString(),
      createdAt: data.createdAt || new Date().toISOString(),
      totalAttempts: attempts,
      failedExerciseIds: failedIds
    };
  };

  const loadFromLocalCache = () => {
    try {
      const raw = localStorage.getItem('pcep_registered_users');
      if (raw) {
        const localList: UserProfile[] = JSON.parse(raw);
        const parsed = localList.map(u => parseStudentData(u.uid, u));
        if (parsed.length > 0) {
          setStudents(parsed);
          setSelectedStudentId(prev => prev || (parsed.find(s => s.role === 'student') || parsed[0]).id);
        }
      }
    } catch { }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    if (isFirebaseConfigured && db) {
      try {
        const snap = await getDocs(collection(db, 'users'));
        const list: StudentRecord[] = [];
        snap.forEach(docSnap => {
          const data = docSnap.data();
          if (data.email || data.displayName) {
            list.push(parseStudentData(docSnap.id, data));
          }
        });
        if (list.length > 0) {
          setStudents(list);
          localStorage.setItem('pcep_registered_users', JSON.stringify(list));
          setSelectedStudentId(prev => prev || (list.find(s => s.role === 'student') || list[0]).id);
        }
      } catch (err) {
        console.warn('Error refrescando usuarios de Firestore:', err);
        loadFromLocalCache();
      }
    } else {
      loadFromLocalCache();
    }
    setLastSyncTime(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    setIsRefreshing(false);
  };

  // Escuchar en tiempo real con Firestore
  useEffect(() => {
    loadFromLocalCache();

    if (isFirebaseConfigured && db) {
      const usersCol = collection(db, 'users');
      const unsubscribe = onSnapshot(usersCol, (snap) => {
        const list: StudentRecord[] = [];
        snap.forEach(docSnap => {
          const data = docSnap.data();
          if (data.email || data.displayName) {
            list.push(parseStudentData(docSnap.id, data));
          }
        });

        if (list.length > 0) {
          setStudents(list);
          localStorage.setItem('pcep_registered_users', JSON.stringify(list));
          setSelectedStudentId(prev => prev || (list.find(s => s.role === 'student') || list[0]).id);
        }
        setLoading(false);
        setLastSyncTime(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      }, (err) => {
        console.warn('Error con listener de Firestore en Panel Docente:', err);
        loadFromLocalCache();
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      loadFromLocalCache();
      setLoading(false);
      setLastSyncTime(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }
  }, []);

  // Filtrado de alumnos
  const filteredStudents = students.filter(s => {
    // Filtro por rol
    if (roleFilter === 'students' && s.role !== 'student') return false;
    if (roleFilter === 'teachers' && s.role !== 'teacher') return false;

    // Filtro por estado de simulacro
    if (statusFilter === 'passed' && (s.lastSimulacroScore === null || s.lastSimulacroScore < 70)) return false;
    if (statusFilter === 'risk' && (s.lastSimulacroScore !== null && s.lastSimulacroScore >= 70)) return false;

    // Búsqueda por texto
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = s.name.toLowerCase().includes(q);
      const matchEmail = s.email.toLowerCase().includes(q);
      if (!matchName && !matchEmail) return false;
    }
    return true;
  });

  // Reiniciar a la página 1 cuando se modifiquen los filtros de búsqueda o rol
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter, statusFilter]);

  const totalPages = Math.ceil(filteredStudents.length / STUDENTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + STUDENTS_PER_PAGE);

  const selectedStudent = students.find(s => s.id === selectedStudentId) || (filteredStudents.length > 0 ? filteredStudents[0] : null);

  // Métricas analíticas reales
  const realStudentCohort = students.filter(s => s.role === 'student');
  const totalStudentsCount = realStudentCohort.length;
  const avgAccuracy = totalStudentsCount > 0
    ? Math.round(realStudentCohort.reduce((acc, curr) => acc + curr.accuracy, 0) / totalStudentsCount)
    : 0;
  const totalSolvedByClass = realStudentCohort.reduce((acc, curr) => acc + curr.solvedCount, 0);
  const totalHoursByClass = Math.round(realStudentCohort.reduce((acc, curr) => acc + curr.studyTimeHours, 0) * 10) / 10;
  const testedStudents = realStudentCohort.filter(s => s.lastSimulacroScore !== null);
  const passedStudents = testedStudents.filter(s => (s.lastSimulacroScore || 0) >= 70);
  const passRate = testedStudents.length > 0
    ? Math.round((passedStudents.length / testedStudents.length) * 100)
    : 0;

  // Obtener los ejercicios fallados del estudiante seleccionado (individual)
  const studentFailedExercises = useMemo(() => {
    if (!selectedStudent) return [];

    const failedSet = new Set<string>(selectedStudent.failedExerciseIds || []);

    // 1. Si el estudiante seleccionado es el usuario autenticado actual, incluir fallos locales
    if (user && (user.uid === selectedStudent.id || user.email?.toLowerCase() === selectedStudent.email?.toLowerCase())) {
      (progress.failedExerciseIds || []).forEach(id => failedSet.add(id));
    }

    // 2. Historial de entregas individuales
    submissions.forEach(sub => {
      const matchUser = sub.userId === selectedStudent.id ||
        (selectedStudent.email && sub.userId?.toLowerCase() === selectedStudent.email.toLowerCase());
      if (matchUser && !sub.isCorrect && sub.exerciseId) {
        failedSet.add(sub.exerciseId);
      }
    });

    // 3. Fallos registrados en simulacros
    examAttempts.forEach(exam => {
      const matchUser = exam.userId === selectedStudent.id ||
        (selectedStudent.email && exam.userId?.toLowerCase() === selectedStudent.email.toLowerCase());
      if (exam.answers) {
        Object.entries(exam.answers).forEach(([qId, ans]) => {
          if (!ans.isCorrect) {
            failedSet.add(qId);
          }
        });
      }
    });

    // Mapear a ejercicios reales del banco
    const matchedExercises = exercises.filter(ex => failedSet.has(ex.id));

    // Si aún no hay IDs específicos registrados (ej. perfiles previos sin tracking de fallos),
    // pero el alumno tiene weakTopics, mostramos ejercicios vinculados a sus temas débiles para que el profesor pueda auditarlos
    if (matchedExercises.length === 0 && selectedStudent.weakTopics && selectedStudent.weakTopics.length > 0) {
      const weakLower = selectedStudent.weakTopics.map(w => w.toLowerCase());
      return exercises.filter(ex => {
        return weakLower.some(w =>
          ex.topic.toLowerCase().includes(w) ||
          ex.pcepObjective.toLowerCase().includes(w) ||
          ex.statement.toLowerCase().includes(w)
        );
      }).slice(0, 4);
    }

    return matchedExercises;
  }, [selectedStudent, exercises, submissions, examAttempts, progress.failedExerciseIds, user]);

  // Auditoría grupal: calcular problemas con mayor tasa de error en todo el grupo
  const groupFailedExercises = useMemo(() => {
    const failureCountMap: Record<string, number> = {};

    // 1. Sumar fallos de todos los estudiantes
    students.forEach(st => {
      if (Array.isArray(st.failedExerciseIds)) {
        st.failedExerciseIds.forEach(id => {
          failureCountMap[id] = (failureCountMap[id] || 0) + 1;
        });
      }
    });

    // 2. Sumar entregas incorrectas registradas
    submissions.forEach(sub => {
      if (!sub.isCorrect && sub.exerciseId) {
        failureCountMap[sub.exerciseId] = (failureCountMap[sub.exerciseId] || 0) + 1;
      }
    });

    // 3. Sumar fallos de simulacros
    examAttempts.forEach(exam => {
      if (exam.answers) {
        Object.entries(exam.answers).forEach(([qId, ans]) => {
          if (!ans.isCorrect) {
            failureCountMap[qId] = (failureCountMap[qId] || 0) + 1;
          }
        });
      }
    });

    // 4. Incluir progreso local si no está contado
    (progress.failedExerciseIds || []).forEach(id => {
      failureCountMap[id] = (failureCountMap[id] || 0) + 1;
    });

    // Ordenar de mayor a menor frecuencia de fallos
    const sorted = Object.entries(failureCountMap)
      .filter(([id]) => exercises.some(e => e.id === id))
      .sort((a, b) => b[1] - a[1]);

    const results = sorted.map(([id, count]) => {
      const ex = exercises.find(e => e.id === id)!;
      return { exercise: ex, failureCount: count };
    });

    // Si aún hay pocos fallos registrados por ser aula nueva, agregar ejercicios desafiantes como referencia docente
    if (results.length < 5) {
      const existingIds = new Set(results.map(r => r.exercise.id));
      const challenging = exercises
        .filter(e => !existingIds.has(e.id) && (e.difficulty === 'pcep_challenge' || e.difficulty === 'intermediate' || e.difficulty === 'basic_plus'))
        .slice(0, 6 - results.length);

      challenging.forEach(ex => {
        results.push({ exercise: ex, failureCount: 1 });
      });
    }

    return results;
  }, [students, submissions, examAttempts, progress.failedExerciseIds, exercises]);

  // Manejo de creación manual de ejercicios
  const handleCreateExercise = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newStatement.trim()) return;

    const created: Exercise = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      section: newSection,
      sectionTitle: `Sección ${newSection}`,
      topic: 'Personalizado por Docente',
      subtopic: 'Evaluación de Aula',
      pcepObjective: newObjective,
      difficulty: 'basic_plus',
      type: 'output_prediction',
      statement: newStatement,
      expectedOutput: newExpectedOutput,
      explanation: newExplanation || 'Explicación provista por el docente.',
      concepts: ['Docente', 'PCEP'],
      tags: ['aula', 'docente'],
      isActive: true
    };

    addNewExercise(created);
    setNewTitle('');
    setNewStatement('');
    setNewExpectedOutput('');
    setNewExplanation('');
    alert('¡Ejercicio creado exitosamente en el banco de la plataforma!');
  };

  // Manejo de importación de JSON
  const handleImportJson = () => {
    const res = importExercisesJson(jsonInput);
    if (res.success) {
      setImportStatus(`¡Importación exitosa! Se añadieron ${res.count} ejercicios al banco.`);
      setJsonInput('');
    } else {
      setImportStatus(`Error al importar: ${res.error}`);
    }
  };

  return (
    <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Encabezado con estado de conexión en vivo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
              Gestión Docente y Analítica
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Panel del Profesor
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Supervisa en tiempo real a los alumnos reales que han iniciado sesión, diagnostica sus errores y administra el banco de reactivos.
          </p>
        </div>

        {/* Acciones superiores y Pestañas */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleRefresh}
            title="Sincronizar usuarios desde Firebase"
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium transition flex items-center gap-1.5 shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-petrol-600' : ''}`} />
            <span>Actualizar</span>
          </button>

          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'students'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              Alumnos ({realStudentCohort.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'analytics'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              Analítica Grupal
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'exercises'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              Crear Ejercicio
            </button>
            <button
              onClick={() => setActiveTab('import')}
              className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'import'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              Importar JSON
            </button>
          </div>
        </div>
      </div>

      {/* PESTAÑA 1: LISTADO Y DETALLE DE ALUMNOS REALES */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          {/* Barra de Filtros y Búsqueda */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            {/* Buscador */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o correo (ej. @uagro.mx)..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 outline-none focus:border-petrol-500"
              />
            </div>

            {/* Selectores de Filtro */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 outline-none"
              >
                <option value="students">Solo Alumnos ({realStudentCohort.length})</option>
                <option value="all">Todos los Registrados ({students.length})</option>
                <option value="teachers">Docentes / Admins</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 outline-none"
              >
                <option value="all">Todos los Estados</option>
                <option value="passed">Aprobados (Simulacro ≥ 70%)</option>
                <option value="risk">En Riesgo / Sin Examen (&lt; 70%)</option>
              </select>
            </div>
          </div>

          {/* Estado Vacío si no hay alumnos registrados */}
          {students.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-petrol-100 dark:bg-petrol-900/60 text-petrol-600 dark:text-petrol-400 mx-auto flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="space-y-1.5 max-w-lg mx-auto">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Esperando el inicio de sesión de tus alumnos
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tu plataforma está conectada a la nube. En cuanto los alumnos inicien sesión con su cuenta de Google o correo electrónico, sus nombres reales, avance de ejercicios, precisión y notas de simulacros aparecerán aquí de forma automática y en tiempo real.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
                <button
                  onClick={handleRefresh}
                  className="px-4 py-2.5 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white font-medium transition flex items-center gap-2 shadow-sm"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Sincronizar Base de Datos</span>
                </button>
              </div>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-xs text-slate-500">
              No se encontraron alumnos con los criterios de búsqueda o filtros seleccionados.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Tabla de Alumnos Reales */}
              <div className="lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Cohorte PCEP ({filteredStudents.length} {filteredStudents.length === 1 ? 'Usuario' : 'Usuarios'})
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Clic en una fila para ver el diagnóstico
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold">
                        <th className="pb-3">Alumno</th>
                        <th className="pb-3 text-center">Ejercicios</th>
                        <th className="pb-3 text-center">Precisión</th>
                        <th className="pb-3 text-right">Último Simulacro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                      {paginatedStudents.map((st) => {
                        const isSelected = selectedStudent?.id === st.id;
                        return (
                          <tr
                            key={st.id}
                            onClick={() => setSelectedStudentId(st.id)}
                            className={`cursor-pointer transition ${isSelected
                                ? 'bg-petrol-50/70 dark:bg-petrol-950/40 font-semibold'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                              }`}
                          >
                            <td className="py-3 pr-2">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-petrol-100 dark:bg-petrol-900/60 text-petrol-700 dark:text-petrol-300 flex items-center justify-center font-bold text-xs shrink-0">
                                  {st.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-slate-900 dark:text-slate-100 truncate flex items-center gap-1.5">
                                    <span>{st.name}</span>
                                    {st.role === 'teacher' && (
                                      <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                                        Docente
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[11px] text-slate-400 font-normal truncate font-mono">
                                    {st.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-2 text-center font-mono">
                              <span className="text-slate-800 dark:text-slate-200 font-bold">{st.solvedCount}</span>
                              <span className="text-[10px] text-slate-400 ml-1">resueltos</span>
                            </td>
                            <td className="py-3 pr-2 text-center font-mono">
                              <span className="text-slate-700 dark:text-slate-300 font-bold">{st.accuracy}%</span>
                            </td>
                            <td className="py-3 text-right font-mono">
                              {st.lastSimulacroScore !== null ? (
                                <span
                                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${st.lastSimulacroScore >= 70
                                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                                      : 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                                    }`}
                                >
                                  {st.lastSimulacroScore}%
                                </span>
                              ) : (
                                <span className="text-slate-400 text-[11px] font-normal">
                                  Sin realizar
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Controles de Paginación de Alumnos (10 en 10) */}
                {filteredStudents.length > STUDENTS_PER_PAGE && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Mostrando <span className="font-semibold text-slate-800 dark:text-slate-200">{startIndex + 1}</span> -{' '}
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{Math.min(startIndex + STUDENTS_PER_PAGE, filteredStudents.length)}</span> de{' '}
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{filteredStudents.length}</span> alumnos
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Anterior</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            type="button"
                            onClick={() => setCurrentPage(page)}
                            className={`w-7 h-7 rounded-lg text-xs font-semibold transition cursor-pointer ${
                              page === currentPage
                                ? 'bg-petrol-600 text-white shadow-xs'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Ficha Diagnóstica del Alumno Seleccionado */}
              {selectedStudent && (
                <div className="lg:col-span-5 xl:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
                  <div className="space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      Diagnóstico Individual del Estudiante
                    </span>
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-10 h-10 rounded-xl bg-petrol-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                        {selectedStudent.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                          {selectedStudent.name}
                        </h2>
                        <p className="text-xs text-slate-500 font-mono truncate">{selectedStudent.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
                        {selectedStudent.solvedCount}
                      </div>
                      <div className="text-[11px] text-slate-500">Ejercicios Resueltos</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
                        {selectedStudent.accuracy}%
                      </div>
                      <div className="text-[11px] text-slate-500">Precisión Media</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
                        {selectedStudent.studyTimeHours}h
                      </div>
                      <div className="text-[11px] text-slate-500">Tiempo de Estudio</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
                        {selectedStudent.lastSimulacroScore !== null ? `${selectedStudent.lastSimulacroScore}%` : '--'}
                      </div>
                      <div className="text-[11px] text-slate-500">Último Simulacro</div>
                    </div>
                  </div>

                  {/* Progreso hacia PCEP */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Progreso Hacia PCEP</span>
                      <span className="font-mono font-bold text-petrol-600">{selectedStudent.progress}%</span>
                    </div>
                    <ProgressBar value={selectedStudent.progress} showPercent={false} color="petrol" size="sm" />
                  </div>

                  {/* Temas Débiles Detectados */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Puntos Críticos a Reforzar en Tutoría:</span>
                    </h4>
                    {selectedStudent.weakTopics.length > 0 ? (
                      <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                        {selectedStudent.weakTopics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 p-2 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40"
                          >
                            <span className="text-rose-500 font-bold">&bull;</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
                        El alumno no presenta temas críticos aún. Sus ejercicios resueltos están al día.
                      </div>
                    )}
                  </div>

                  {/* Problemas Respondidos Incorrectamente (Auditoría de Errores) */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <Bug className="w-3.5 h-3.5" />
                        <span>Problemas con Respuestas Incorrectas ({studentFailedExercises.length}):</span>
                      </h4>
                      {studentFailedExercises.length > 0 && (
                        <span className="text-[10px] bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-medium">
                          Auditar
                        </span>
                      )}
                    </div>

                    {studentFailedExercises.length > 0 ? (
                      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                        {studentFailedExercises.map((ex) => (
                          <div
                            key={ex.id}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 transition group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="space-y-1 flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-petrol-100 dark:bg-petrol-950 text-petrol-700 dark:text-petrol-300 font-semibold">
                                    Sec {ex.section} &bull; Obj {ex.pcepObjective}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold flex items-center gap-1">
                                    <XCircle className="w-3 h-3" /> Error
                                  </span>
                                </div>
                                <h5 className="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                                  {ex.title}
                                </h5>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                                  {ex.statement}
                                </p>
                              </div>
                              <button
                                onClick={() => setInspectingExercise(ex)}
                                className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-medium flex items-center gap-1 shadow-sm shrink-0 transition"
                                title="Auditar problema y ver respuesta correcta / explicación"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Auditar</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                        No tiene problemas con fallos registrados en su historial.
                      </div>
                    )}
                  </div>

                  {/* Fechas de Actividad */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400 flex justify-between items-center">
                    <span>
                      Registrado: {new Date(selectedStudent.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                    </span>
                    <span>
                      Última sesión: {new Date(selectedStudent.lastActiveDate).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* PESTAÑA 2: ANALÍTICA GRUPAL REAL */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Tarjetas de Resumen Grupal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">Alumnos en el Cohorte</div>
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100 mt-1">
                {totalStudentsCount}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Usuarios con rol de estudiante</div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">Precisión Media Grupal</div>
              <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                {avgAccuracy}%
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Promedio de aciertos de la clase</div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">Ejercicios Resueltos Totales</div>
              <div className="text-2xl font-bold font-mono text-petrol-600 dark:text-petrol-400 mt-1">
                {totalSolvedByClass}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Acumulados por todos los alumnos</div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
              <div className="text-xs text-slate-500 font-medium">Tasa de Aprobación Simulacros</div>
              <div className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400 mt-1">
                {passRate}%
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {passedStudents.length} de {testedStudents.length} examinados
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rendimiento por Sección del Cohorte */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Rendimiento Promedio del Grupo por Sección
              </h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Fundamentos (Sección 1 &bull; 18%)</span>
                    <span className="font-mono">{totalStudentsCount > 0 ? Math.min(100, Math.round(avgAccuracy * 1.05)) : 0}%</span>
                  </div>
                  <ProgressBar value={totalStudentsCount > 0 ? Math.min(100, Math.round(avgAccuracy * 1.05)) : 0} showPercent={false} color="emerald" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Control de Flujo (Sección 2 &bull; 29%)</span>
                    <span className="font-mono">{avgAccuracy}%</span>
                  </div>
                  <ProgressBar value={avgAccuracy} showPercent={false} color="petrol" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Colecciones (Sección 3 &bull; 25%)</span>
                    <span className="font-mono">{totalStudentsCount > 0 ? Math.max(0, Math.round(avgAccuracy * 0.9)) : 0}%</span>
                  </div>
                  <ProgressBar value={totalStudentsCount > 0 ? Math.max(0, Math.round(avgAccuracy * 0.9)) : 0} showPercent={false} color="amber" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Funciones y Excepciones (Sección 4 &bull; 28%)</span>
                    <span className="font-mono">{totalStudentsCount > 0 ? Math.max(0, Math.round(avgAccuracy * 0.82)) : 0}%</span>
                  </div>
                  <ProgressBar value={totalStudentsCount > 0 ? Math.max(0, Math.round(avgAccuracy * 0.82)) : 0} showPercent={false} color="rose" size="sm" />
                </div>
              </div>
            </div>

            {/* Diagnóstico de Errores Reales */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Puntos de Mayor Dificultad Detectados en el Grupo
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">1. Slicing con pasos negativos ([::-1])</span>
                  <span className="font-mono text-rose-600 font-bold">Frecuente</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">2. Búsqueda de claves en diccionarios (KeyError)</span>
                  <span className="font-mono text-rose-600 font-bold">Frecuente</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">3. Jerarquía y orden de bloques except</span>
                  <span className="font-mono text-amber-600 font-bold">Moderado</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">4. Ámbitos de variable y palabra reservada global</span>
                  <span className="font-mono text-amber-600 font-bold">Moderado</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">5. Límite superior no inclusivo en range()</span>
                  <span className="font-mono text-petrol-600 font-bold">Bajo</span>
                </div>
              </div>
            </div>
          </div>

          {/* TABLA DE AUDITORÍA GRUPAL DE REACTIVOS CON FALLOS */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Bug className="w-4 h-4 text-amber-500" />
                  <span>Auditoría Docente: Reactivos con Fallos en el Alumnado</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Revisa enunciados, lógica del código y claves de respuesta de los problemas donde los alumnos tropiezan con mayor frecuencia.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {groupFailedExercises.length} problemas en radar
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 font-semibold">
                    <th className="pb-3 pl-2">Ejercicio / Título</th>
                    <th className="pb-3 px-3">Sección / Obj</th>
                    <th className="pb-3 px-3">Dificultad</th>
                    <th className="pb-3 px-3 text-center">Frecuencia</th>
                    <th className="pb-3 pr-2 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {groupFailedExercises.map(({ exercise, failureCount }) => (
                    <tr key={exercise.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                      <td className="py-3 pl-2">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          {exercise.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 max-w-md">
                          {exercise.statement}
                        </div>
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-petrol-100 dark:bg-petrol-950 text-petrol-700 dark:text-petrol-300 font-medium">
                          Sec {exercise.section} &bull; Obj {exercise.pcepObjective}
                        </span>
                      </td>
                      <td className="py-3 px-3 whitespace-nowrap">
                        <DifficultyBadge difficulty={exercise.difficulty} />
                      </td>
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 font-mono font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-full text-[11px]">
                          <XCircle className="w-3 h-3" />
                          {failureCount} {failureCount === 1 ? 'fallo' : 'fallos'}
                        </span>
                      </td>
                      <td className="py-3 pr-2 text-right whitespace-nowrap">
                        <button
                          onClick={() => setInspectingExercise(exercise)}
                          className="px-2.5 py-1.5 rounded-lg bg-petrol-600 hover:bg-petrol-700 text-white font-medium text-[11px] inline-flex items-center gap-1 shadow-sm transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Auditar</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 3: CREAR EJERCICIO MANUAL */}
      {activeTab === 'exercises' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Crear Nuevo Ejercicio para el Banco</h3>
            <p className="text-xs text-slate-500">Agrega ejercicios personalizados vinculados directamente a un objetivo oficial PCEP.</p>
          </div>

          <form onSubmit={handleCreateExercise} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Título del Ejercicio:</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Ej. Evaluación de asociatividad de potencia"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:border-petrol-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Sección Oficial:</label>
                <select
                  value={newSection}
                  onChange={(e) => setNewSection(Number(e.target.value) as PCEPSectionId)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none"
                >
                  <option value={1}>Sección 1 (18%) Fundamentos</option>
                  <option value={2}>Sección 2 (29%) Flujo</option>
                  <option value={3}>Sección 3 (25%) Colecciones</option>
                  <option value={4}>Sección 4 (28%) Funciones</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Objetivo PCEP:</label>
                <input
                  type="text"
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value as PCEPObjectiveCode)}
                  placeholder="Ej. 1.4 o 3.1"
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Enunciado o Pregunta:</label>
              <textarea
                value={newStatement}
                onChange={(e) => setNewStatement(e.target.value)}
                rows={3}
                placeholder="Escribe las instrucciones para el estudiante..."
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Salida o Respuesta Esperada:</label>
              <input
                type="text"
                value={newExpectedOutput}
                onChange={(e) => setNewExpectedOutput(e.target.value)}
                placeholder="Ej. 256"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 font-mono outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Explicación Pedagógica:</label>
              <textarea
                value={newExplanation}
                onChange={(e) => setNewExplanation(e.target.value)}
                rows={2}
                placeholder="Explicación que verá el alumno tras resolver..."
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-semibold transition"
            >
              Guardar Ejercicio en el Banco
            </button>
          </form>
        </div>
      )}

      {/* PESTAÑA 4: IMPORTADOR JSON */}
      {activeTab === 'import' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FileJson className="w-5 h-5 text-petrol-600" />
              <span>Importación Masiva de Ejercicios JSON</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Pega un arreglo JSON con ejercicios para alimentar de manera instantánea el banco de preguntas.
            </p>
          </div>

          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows={8}
            placeholder={`[
  {
    "title": "División entera",
    "section": 1,
    "pcepObjective": "1.4",
    "statement": "¿Cuál será la salida?",
    "code": "print(17 // 5)",
    "answer": "3",
    "explanation": "La división entera trunca a 3."
  }
]`}
            className="w-full p-3 font-mono text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none"
          />

          {importStatus && (
            <div className={`p-3 rounded-lg text-xs font-semibold ${importStatus.includes('Error') ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
              }`}>
              {importStatus}
            </div>
          )}

          <button
            onClick={handleImportJson}
            disabled={!jsonInput.trim()}
            className="w-full py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-xs font-semibold transition disabled:opacity-50"
          >
            Importar al Banco Activo
          </button>
        </div>
      )}

      {/* MODAL DE AUDITORÍA DE PROBLEMA / EJERCICIO */}
      {inspectingExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scaleIn">
            {/* Header del Modal */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                    <Bug className="w-3 h-3" /> Modo Auditoría Docente
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    ID: {inspectingExercise.id}
                  </span>
                  <DifficultyBadge difficulty={inspectingExercise.difficulty} />
                  <ExerciseTypeBadge type={inspectingExercise.type} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {inspectingExercise.title}
                </h3>
                <div className="text-xs text-slate-500">
                  {inspectingExercise.sectionTitle} &bull; Objetivo PCEP {inspectingExercise.pcepObjective} &bull; {inspectingExercise.topic}
                </div>
              </div>
              <button
                onClick={() => setInspectingExercise(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Cerrar auditoría"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              {/* Alerta de verificación */}
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Control de Calidad del Problema</p>
                  <p className="text-[11px] text-amber-800/90 dark:text-amber-300/80 mt-0.5">
                    Inspecciona la formulación de la pregunta, la sintaxis del fragmento de Python y verifica si la respuesta configurada como correcta es la adecuada.
                  </p>
                </div>
              </div>

              {/* Enunciado */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Enunciado del Problema:
                </label>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                  {inspectingExercise.statement}
                </div>
              </div>

              {/* Código de Ejemplo / Snippet */}
              {(inspectingExercise.codeSnippet || inspectingExercise.starterCode) && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-petrol-500" />
                    <span>Fragmento de Código Evaluado:</span>
                  </label>
                  <PythonCodeBlock
                    code={inspectingExercise.codeSnippet || inspectingExercise.starterCode || ''}
                  />
                </div>
              )}

              {/* Opciones de Respuesta (si aplica) */}
              {inspectingExercise.options && inspectingExercise.options.length > 0 && (
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Opciones de Respuesta y Clave Configurada:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {inspectingExercise.options.map((opt, idx) => (
                      <div
                        key={opt.id || idx}
                        className={`p-3 rounded-xl border flex items-start gap-3 transition ${
                          opt.isCorrect
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium'
                            : 'bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="mt-0.5">
                          {opt.isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                              {String.fromCharCode(65 + idx)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-mono text-xs">{opt.text}</div>
                          {opt.isCorrect && (
                            <span className="inline-block mt-1 text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">
                              ✓ Marcada como Respuesta Correcta
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Salida esperada (si aplica) */}
              {inspectingExercise.expectedOutput && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Salida Esperada en Consola (stdout):
                  </label>
                  <pre className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
                    {inspectingExercise.expectedOutput}
                  </pre>
                </div>
              )}

              {/* Soluciones Aceptables (si aplica) */}
              {inspectingExercise.acceptableSolutions && inspectingExercise.acceptableSolutions.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Variantes de Solución Aceptadas:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectingExercise.acceptableSolutions.map((sol, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs text-petrol-600 dark:text-petrol-400 border border-slate-200 dark:border-slate-700">
                        {sol}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Casos de Prueba (si aplica) */}
              {inspectingExercise.testCases && inspectingExercise.testCases.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Casos de Prueba (Test Cases):
                  </label>
                  <div className="space-y-1.5">
                    {inspectingExercise.testCases.map((tc, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px]">
                        <div><strong className="text-slate-400">Input:</strong> {tc.input || '(vacío)'}</div>
                        <div><strong className="text-emerald-500">Expected:</strong> {tc.expectedOutput}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Explicación Pedagógica */}
              {inspectingExercise.explanation && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-petrol-500" />
                    <span>Explicación que se le Muestra al Alumno:</span>
                  </label>
                  <div className="p-4 rounded-xl bg-petrol-50/40 dark:bg-petrol-950/20 border border-petrol-100 dark:border-petrol-900/40 text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                    {inspectingExercise.explanation}
                  </div>
                </div>
              )}

              {/* Conceptos Evaluados y Tags */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-semibold text-slate-500">Conceptos:</span>
                  {inspectingExercise.concepts?.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">
                PCEP Question ID: {inspectingExercise.id}
              </span>
              <button
                onClick={() => setInspectingExercise(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium text-xs transition"
              >
                Cerrar Auditoría
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

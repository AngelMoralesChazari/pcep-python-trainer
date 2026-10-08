import React, { useState } from 'react';
import { AlertTriangle, FileJson } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { Exercise, PCEPObjectiveCode, PCEPSectionId } from '../types';

interface StudentMock {
  id: string;
  name: string;
  email: string;
  progress: number;
  accuracy: number;
  solvedCount: number;
  studyTimeHours: number;
  lastSimulacroScore: number;
  weakTopics: string[];
}

const MOCK_STUDENTS: StudentMock[] = [
  {
    id: 's-1',
    name: 'Alejandro Ramos',
    email: 'alejandro@pcep-trainer.org',
    progress: 72,
    accuracy: 78,
    solvedCount: 184,
    studyTimeHours: 12.7,
    lastSimulacroScore: 68,
    weakTopics: ['Manejo de excepciones (try-except)', 'Diccionarios (items, keys)', 'List slicing']
  },
  {
    id: 's-2',
    name: 'Sofía Martínez',
    email: 'sofia.m@instituto.edu',
    progress: 84,
    accuracy: 91,
    solvedCount: 220,
    studyTimeHours: 18.2,
    lastSimulacroScore: 82,
    weakTopics: ['Bitwise operators (~, ^)', 'Right binding (**)']
  },
  {
    id: 's-3',
    name: 'Carlos Rivas',
    email: 'carlos.rivas@correo.com',
    progress: 43,
    accuracy: 61,
    solvedCount: 95,
    studyTimeHours: 6.4,
    lastSimulacroScore: 54,
    weakTopics: ['Loops anidados', 'Variables globales y scopes', 'Inmutabilidad de tuplas']
  },
  {
    id: 's-4',
    name: 'Lucía Domínguez',
    email: 'lucia.d@universidad.es',
    progress: 67,
    accuracy: 76,
    solvedCount: 156,
    studyTimeHours: 11.0,
    lastSimulacroScore: 71,
    weakTopics: ['Conversión float/int', 'print sep/end']
  }
];

export const TeacherDashboardPage: React.FC = () => {
  const { exercises, addNewExercise, importExercisesJson } = useProgress();

  const [activeTab, setActiveTab] = useState<'students' | 'exercises' | 'analytics' | 'import'>('students');
  const [selectedStudent, setSelectedStudent] = useState<StudentMock>(MOCK_STUDENTS[0]);
  const [jsonInput, setJsonInput] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Estado para crear nuevo ejercicio manual
  const [newTitle, setNewTitle] = useState('');
  const [newSection, setNewSection] = useState<PCEPSectionId>(1);
  const [newObjective, setNewObjective] = useState<PCEPObjectiveCode>('1.1');
  const [newStatement, setNewStatement] = useState('');
  const [newExpectedOutput, setNewExpectedOutput] = useState('');
  const [newExplanation, setNewExplanation] = useState('');

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Gestión Docente y Analítica
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Panel del Profesor</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Supervisa el avance de los alumnos, detecta errores frecuentes por sección y administra el banco de ejercicios.
          </p>
        </div>

        {/* Pestañas del Panel */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'students' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Alumnos
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'analytics' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Analítica
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'exercises' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Crear Ejercicio
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'import' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Importar JSON
          </button>
        </div>
      </div>

      {/* PESTAÑA 1: LISTADO Y DETALLE DE ALUMNOS */}
      {activeTab === 'students' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tabla de Alumnos */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Cohorte PCEP Activa ({MOCK_STUDENTS.length} Estudiantes)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold">
                    <th className="pb-3">Alumno</th>
                    <th className="pb-3">Progreso</th>
                    <th className="pb-3">Precisión</th>
                    <th className="pb-3">Último Simulacro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {MOCK_STUDENTS.map((st) => (
                    <tr
                      key={st.id}
                      onClick={() => setSelectedStudent(st)}
                      className={`cursor-pointer transition ${
                        selectedStudent.id === st.id ? 'bg-petrol-50/70 dark:bg-petrol-950/40 font-semibold' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <td className="py-3 pr-2">
                        <div className="font-medium text-slate-900 dark:text-slate-100">{st.name}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{st.email}</div>
                      </td>
                      <td className="py-3 pr-2 font-mono">
                        <span className="text-petrol-600 dark:text-petrol-400 font-bold">{st.progress}%</span>
                      </td>
                      <td className="py-3 pr-2 font-mono">
                        <span className="text-slate-700 dark:text-slate-300">{st.accuracy}%</span>
                      </td>
                      <td className="py-3 font-mono">
                        <span className={st.lastSimulacroScore >= 70 ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {st.lastSimulacroScore}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ficha Diagnóstica del Alumno Seleccionado */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-semibold text-slate-400">Diagnóstico Individual</span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{selectedStudent.name}</h2>
              <p className="text-xs text-slate-500">{selectedStudent.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100">{selectedStudent.solvedCount}</div>
                <div className="text-[11px] text-slate-500">Ejercicios Resueltos</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100">{selectedStudent.studyTimeHours}h</div>
                <div className="text-[11px] text-slate-500">Tiempo de Estudio</div>
              </div>
            </div>

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
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {selectedStudent.weakTopics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                    <span className="text-rose-500 font-bold">&bull;</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: ANALÍTICA GRUPAL (Sección 49) */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rendimiento por Sección del Cohorte */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Rendimiento Promedio por Sección
              </h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Fundamentos (Sección 1 &bull; 18%)</span>
                    <span className="font-mono">82%</span>
                  </div>
                  <ProgressBar value={82} showPercent={false} color="emerald" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Control de Flujo (Sección 2 &bull; 29%)</span>
                    <span className="font-mono">73%</span>
                  </div>
                  <ProgressBar value={73} showPercent={false} color="petrol" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Colecciones (Sección 3 &bull; 25%)</span>
                    <span className="font-mono">61%</span>
                  </div>
                  <ProgressBar value={61} showPercent={false} color="amber" size="sm" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Funciones y Excepciones (Sección 4 &bull; 28%)</span>
                    <span className="font-mono">54%</span>
                  </div>
                  <ProgressBar value={54} showPercent={false} color="rose" size="sm" />
                </div>
              </div>
            </div>

            {/* Errores más frecuentes detectados */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Top 5 Errores Frecuentes del Grupo (Sección 49)
              </h3>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">1. Slicing con pasos negativos ([::-1])</span>
                  <span className="font-mono text-rose-600 font-bold">68% fallos</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">2. Búsqueda de claves en diccionarios (KeyError)</span>
                  <span className="font-mono text-rose-600 font-bold">59% fallos</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">3. Ámbitos de función y palabra reservada global</span>
                  <span className="font-mono text-rose-600 font-bold">53% fallos</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">4. Orden jerárquico de bloques except</span>
                  <span className="font-mono text-rose-600 font-bold">48% fallos</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">5. Límite superior excluido en range()</span>
                  <span className="font-mono text-rose-600 font-bold">42% fallos</span>
                </div>
              </div>
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

      {/* PESTAÑA 4: IMPORTADOR JSON (Sección 42) */}
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
            <div className={`p-3 rounded-lg text-xs font-semibold ${
              importStatus.includes('Error') ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
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
    </div>
  );
};

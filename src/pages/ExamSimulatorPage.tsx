import React, { useState, useEffect } from 'react';
import {
  Clock, Flag, CheckCircle2, XCircle,
  Award, RotateCcw, ChevronLeft, ChevronRight, ShieldAlert
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { Exercise, PCEPObjectiveCode } from '../types';
import { ProgressBar } from '../components/common/ProgressBar';
import { DifficultyBadge } from '../components/common/Badge';
import { PythonCodeBlock, TheoryMarkdownRenderer } from '../components/theory/TheoryMarkdownRenderer';

// Configuración Oficial PCEP-30-02: 40 minutos para exactamente 30 preguntas
const EXAM_DURATION_MINUTES = 40;
const EXAM_DURATION_SECONDS = EXAM_DURATION_MINUTES * 60;

// Distribución oficial ponderada de 30 preguntas:
// Sec 1 (18%): 5 preguntas
// Sec 2 (29%): 9 preguntas
// Sec 3 (25%): 8 preguntas
// Sec 4 (28%): 8 preguntas
const SECTION_QUOTAS: Record<number, number> = {
  1: 5,
  2: 9,
  3: 8,
  4: 8,
};

// Algoritmo Fisher-Yates para mezcla aleatoria sin sesgo
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Selector aleatorio que rota preguntas entre intentos continuos
function selectExamQuestions(allExercises: Exercise[], recentIds: Set<string>): Exercise[] {
  const selected: Exercise[] = [];

  for (const [sectionStr, count] of Object.entries(SECTION_QUOTAS)) {
    const secNum = Number(sectionStr);
    const pool = allExercises.filter(e => e.section === secNum);

    // Separamos en preguntas no usadas en el intento previo y preguntas usadas
    const unrecent = pool.filter(e => !recentIds.has(e.id));
    const recent = pool.filter(e => recentIds.has(e.id));

    // Mezclamos ambos subconjuntos
    const shuffledUnrecent = shuffleArray(unrecent);
    const shuffledRecent = shuffleArray(recent);

    // Priorizamos preguntas frescas para garantizar que cambien en cada intento,
    // usando las anteriores solo como respaldo si el banco fuera menor a la cuota
    const combined = [...shuffledUnrecent, ...shuffledRecent];
    selected.push(...combined.slice(0, count));
  }

  // Mezclar el orden general de las 30 preguntas para simular el examen real
  return shuffleArray(selected);
}

export const ExamSimulatorPage: React.FC = () => {
  const { exercises, recordExamAttempt } = useProgress();

  // Estados del examen
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preguntas seleccionadas para el intento actual
  const [examQuestions, setExamQuestions] = useState<Exercise[]>([]);
  // IDs de preguntas usadas en el intento previo para rotarlas
  const [lastQuestionIds, setLastQuestionIds] = useState<Set<string>>(new Set());

  // Temporizador de 40 minutos (2400 segundos)
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(EXAM_DURATION_SECONDS);

  // Respuestas y marcas para revisión
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

  // Manejo del temporizador
  useEffect(() => {
    if (!examStarted || examFinished) return;

    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examStarted, examFinished]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  const currentExercise = examQuestions[currentIndex] || null;

  const handleStartExam = () => {
    // Generar un nuevo set de 30 preguntas aleatorias rotando las del intento anterior
    const freshQuestions = selectExamQuestions(exercises, lastQuestionIds);
    setExamQuestions(freshQuestions);
    setLastQuestionIds(new Set(freshQuestions.map(q => q.id)));

    setAnswers({});
    setFlaggedQuestions(new Set());
    setTimeLeftSeconds(EXAM_DURATION_SECONDS);
    setCurrentIndex(0);
    setExamFinished(false);
    setExamStarted(true);
  };

  const handleToggleFlag = (index: number) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleSelectAnswer = (ans: string) => {
    if (!currentExercise) return;
    setAnswers(prev => ({
      ...prev,
      [currentExercise.id]: ans
    }));
  };

  const handleFinishExam = () => {
    setExamFinished(true);

    // Calcular desglose
    let correctS1 = 0, totalS1 = 0;
    let correctS2 = 0, totalS2 = 0;
    let correctS3 = 0, totalS3 = 0;
    let correctS4 = 0, totalS4 = 0;
    let totalCorrect = 0;

    const answerAudit: Record<string, { givenAnswer: string; isCorrect: boolean }> = {};
    const failedObjectives: PCEPObjectiveCode[] = [];

    examQuestions.forEach(ex => {
      const given = (answers[ex.id] || '').trim();
      let isCorrect = false;

      if (ex.options) {
        const correctOpt = ex.options.find(o => o.isCorrect);
        isCorrect = correctOpt ? given === correctOpt.id : false;
      } else if (ex.expectedOutput) {
        isCorrect = given === ex.expectedOutput.trim();
      } else if (ex.acceptableSolutions) {
        isCorrect = ex.acceptableSolutions.includes(given);
      }

      answerAudit[ex.id] = { givenAnswer: given, isCorrect };

      if (isCorrect) totalCorrect++;
      else failedObjectives.push(ex.pcepObjective);

      if (ex.section === 1) { totalS1++; if (isCorrect) correctS1++; }
      if (ex.section === 2) { totalS2++; if (isCorrect) correctS2++; }
      if (ex.section === 3) { totalS3++; if (isCorrect) correctS3++; }
      if (ex.section === 4) { totalS4++; if (isCorrect) correctS4++; }
    });

    const pS1 = Math.round((correctS1 / (totalS1 || 1)) * 100);
    const pS2 = Math.round((correctS2 / (totalS2 || 1)) * 100);
    const pS3 = Math.round((correctS3 / (totalS3 || 1)) * 100);
    const pS4 = Math.round((correctS4 / (totalS4 || 1)) * 100);

    const overall = Math.round(
      (pS1 * 0.18) + (pS2 * 0.29) + (pS3 * 0.25) + (pS4 * 0.28)
    );

    recordExamAttempt({
      durationSeconds: EXAM_DURATION_SECONDS - timeLeftSeconds,
      totalQuestions: examQuestions.length,
      scorePercentage: overall,
      passed: overall >= 70,
      breakdown: {
        section1: pS1,
        section2: pS2,
        section3: pS3,
        section4: pS4
      },
      answers: answerAudit,
      weakObjectives: failedObjectives.slice(0, 4)
    });
  };

  // Pantalla previa: Instrucciones del simulacro
  if (!examStarted) {
    return (
      <div className="w-[95%] max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-4 py-8 space-y-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-petrol-500 text-white flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
                Examen de Certificación
              </span>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Simulador Oficial PCEP-30-02</h1>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Este simulacro replica fielmente las condiciones reales del examen <strong>Certified Entry-Level Python Programmer</strong>:
            duración cronometrada de <strong>40 minutos</strong>, <strong>30 preguntas</strong> ponderadas por sección y ausencia de retroalimentación en tiempo real hasta concluir la prueba.
          </p>

          {/* Tabla de Ponderación Oficial */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden text-xs">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-950/70 p-3 font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <div>Sección Temática</div>
              <div className="text-center">Peso Examen</div>
              <div className="text-right">Preguntas por Examen</div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
              <div className="grid grid-cols-3 p-3 text-slate-600 dark:text-slate-400">
                <div>Sección 1: Fundamentos y Tipos de Datos</div>
                <div className="text-center font-mono font-semibold">18%</div>
                <div className="text-right">5 preguntas</div>
              </div>
              <div className="grid grid-cols-3 p-3 text-slate-600 dark:text-slate-400">
                <div>Sección 2: Flujo de Control y Bucles</div>
                <div className="text-center font-mono font-semibold">29%</div>
                <div className="text-right">9 preguntas</div>
              </div>
              <div className="grid grid-cols-3 p-3 text-slate-600 dark:text-slate-400">
                <div>Sección 3: Colecciones de Datos</div>
                <div className="text-center font-mono font-semibold">25%</div>
                <div className="text-right">8 preguntas</div>
              </div>
              <div className="grid grid-cols-3 p-3 text-slate-600 dark:text-slate-400">
                <div>Sección 4: Funciones y Excepciones</div>
                <div className="text-center font-mono font-semibold">28%</div>
                <div className="text-right">8 preguntas</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-400">
            <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-petrol-600" />
              <span>Reglas del Simulador:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tiempo límite: <strong>40 minutos</strong> para <strong>30 preguntas</strong>. El examen se entregará automáticamente si el tiempo expira.</li>
              <li>Puntuación mínima de aprobación: <strong>70%</strong>.</li>
              <li>Rotación dinámica: En cada intento las preguntas cambian aleatoriamente tomando reactivos de las 4 secciones temáticas.</li>
              <li>No se muestran explicaciones ni soluciones durante la prueba.</li>
              <li>Puedes marcar preguntas con el botón de banderín para revisarlas antes de finalizar.</li>
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartExam}
              className="w-full py-3.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-semibold text-sm transition shadow-sm"
            >
              Comenzar Simulacro Oficial
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de Resultados al finalizar (Requerimiento 25)
  if (examFinished) {
    let correctCount = 0;
    let s1C = 0, s1T = 0, s2C = 0, s2T = 0, s3C = 0, s3T = 0, s4C = 0, s4T = 0;

    examQuestions.forEach(ex => {
      const given = (answers[ex.id] || '').trim();
      let correct = false;
      if (ex.options) {
        const c = ex.options.find(o => o.isCorrect);
        correct = c ? given === c.id : false;
      } else if (ex.expectedOutput) {
        correct = given === ex.expectedOutput.trim();
      } else if (ex.acceptableSolutions) {
        correct = ex.acceptableSolutions.includes(given);
      }

      if (correct) correctCount++;
      if (ex.section === 1) { s1T++; if (correct) s1C++; }
      if (ex.section === 2) { s2T++; if (correct) s2C++; }
      if (ex.section === 3) { s3T++; if (correct) s3C++; }
      if (ex.section === 4) { s4T++; if (correct) s4C++; }
    });

    const pS1 = Math.round((s1C / (s1T || 1)) * 100);
    const pS2 = Math.round((s2C / (s2T || 1)) * 100);
    const pS3 = Math.round((s3C / (s3T || 1)) * 100);
    const pS4 = Math.round((s4C / (s4T || 1)) * 100);
    const overall = Math.round((pS1 * 0.18) + (pS2 * 0.29) + (pS3 * 0.25) + (pS4 * 0.28));
    const passed = overall >= 70;

    return (
      <div className="w-[95%] max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-4 py-8 space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Diagnóstico Oficial
              </span>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Resultado del Simulacro</h1>
            </div>

            <div className={`px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 ${
              passed
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
            }`}>
              {passed ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              <span>{passed ? 'APROBADO (Apto para Examen)' : 'NO APROBADO (Requiere Refuerzo)'}</span>
            </div>
          </div>

          {/* Calificación Global */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Puntuación Ponderada Global</span>
            <div className={`text-5xl font-mono font-extrabold ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
              {overall}%
            </div>
            <p className="text-xs text-slate-500">
              {correctCount} de {examQuestions.length} preguntas respondidas correctamente (Mínimo requerido: 70%)
            </p>
          </div>

          {/* Desglose por Sección Oficial (Requerimiento 25) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Desglose de Competencias por Sección:
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Fundamentos de Python (Sección 1 &bull; 18%)</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{pS1}%</span>
                </div>
                <ProgressBar value={pS1} showPercent={false} color={pS1 >= 70 ? 'emerald' : 'rose'} size="sm" />
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Flujo de Control (Sección 2 &bull; 29%)</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{pS2}%</span>
                </div>
                <ProgressBar value={pS2} showPercent={false} color={pS2 >= 70 ? 'emerald' : 'rose'} size="sm" />
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Colecciones de Datos (Sección 3 &bull; 25%)</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{pS3}%</span>
                </div>
                <ProgressBar value={pS3} showPercent={false} color={pS3 >= 70 ? 'emerald' : 'rose'} size="sm" />
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Funciones y Excepciones (Sección 4 &bull; 28%)</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">{pS4}%</span>
                </div>
                <ProgressBar value={pS4} showPercent={false} color={pS4 >= 70 ? 'emerald' : 'rose'} size="sm" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleStartExam}
              className="flex-1 py-3 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Realizar Nuevo Simulacro (30 Nuevas Preguntas)</span>
            </button>
            <button
              onClick={() => {
                setExamStarted(false);
                setExamFinished(false);
              }}
              className="py-3 px-6 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-medium transition cursor-pointer"
            >
              <span>Volver a Instrucciones</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Interfaz de Examen en Curso (Requerimiento 26)
  return (
    <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Barra superior de estado del examen */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-petrol-100 dark:bg-petrol-900 text-petrol-800 dark:text-petrol-200">
            Pregunta {currentIndex + 1} / {examQuestions.length}
          </span>
          <span className="text-xs text-slate-500">
            {Object.keys(answers).length} respondidas
          </span>
        </div>

        {/* Temporizador */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-bold ${
          timeLeftSeconds < 300
            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 animate-pulse'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
        }`}>
          <Clock className="w-4 h-4" />
          <span>Tiempo Restante: {formatTime(timeLeftSeconds)}</span>
        </div>

        <button
          onClick={handleFinishExam}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold transition shadow-sm"
        >
          Finalizar y Entregar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pregunta Activa */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          {currentExercise && (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Sección {currentExercise.section} &bull; Obj {currentExercise.pcepObjective}
                  </span>
                  <DifficultyBadge difficulty={currentExercise.difficulty} />
                </div>

                <button
                  onClick={() => handleToggleFlag(currentIndex)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                    flaggedQuestions.has(currentIndex)
                      ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-300'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedQuestions.has(currentIndex) ? 'Marcada' : 'Marcar para revisar'}</span>
                </button>
              </div>

              <div className="text-slate-900 dark:text-slate-100 text-base leading-relaxed font-normal">
                <TheoryMarkdownRenderer content={currentExercise.statement} />
              </div>

              {currentExercise.codeSnippet && (
                <div className="my-4 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-md">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-900/80 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block"></span>
                      <span className="ml-1.5 font-semibold text-slate-300 text-xs">Python 3</span>
                    </div>
                    <span className="text-slate-400 text-xs font-sans">Código a examinar</span>
                  </div>
                  <div className="p-5 sm:p-6 flex justify-center bg-slate-950 overflow-x-auto">
                    <div className="inline-block text-left min-w-[260px] max-w-full">
                      <PythonCodeBlock
                        code={currentExercise.codeSnippet}
                        className="text-base sm:text-lg leading-relaxed font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Opciones */}
              {currentExercise.options && (
                <div className="space-y-2.5">
                  {currentExercise.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = answers[currentExercise.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectAnswer(opt.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm transition flex items-start gap-3 ${
                          isSelected
                            ? 'border-petrol-600 bg-petrol-50/70 dark:bg-petrol-950/50 text-petrol-900 dark:text-petrol-100 font-medium'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {letter}
                        </span>
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Entrada de texto (para predicción de salida o completar) */}
              {!currentExercise.options && (
                <div className="space-y-2">
                  <label className="text-xs text-slate-500 font-medium">Escribe tu respuesta exacta:</label>
                  <input
                    type="text"
                    value={answers[currentExercise.id] || ''}
                    onChange={(e) => handleSelectAnswer(e.target.value)}
                    placeholder="Tu respuesta..."
                    className="w-full font-mono text-sm p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500"
                  />
                </div>
              )}

              {/* Botones de navegación Anterior / Siguiente / Finalizar */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {currentIndex === examQuestions.length - 1 ? (
                  <button
                    onClick={handleFinishExam}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-md cursor-pointer"
                  >
                    <span>Finalizar y Entregar</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-medium transition shadow-sm cursor-pointer"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Rejilla de Navegación de Preguntas (1 a 30) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Navegador del Examen
          </h4>

          <div className="grid grid-cols-5 gap-2">
            {examQuestions.map((q, idx) => {
              const isCurrent = currentIndex === idx;
              const isAnswered = !!answers[q.id];
              const isFlagged = flaggedQuestions.has(idx);

              let btnClass = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400";
              if (isAnswered) {
                btnClass = "border-petrol-400 bg-petrol-50 text-petrol-800 dark:border-petrol-700 dark:bg-petrol-950/60 dark:text-petrol-300 font-semibold";
              }
              if (isCurrent) {
                btnClass = "ring-2 ring-petrol-600 border-petrol-600 font-bold";
              }

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative p-2.5 rounded-lg border text-xs font-mono text-center transition ${btnClass}`}
                >
                  <span>{idx + 1}</span>
                  {isFlagged && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-petrol-100 dark:bg-petrol-900 border border-petrol-400"></span>
              <span>Respondida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Marcada para revisión</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300"></span>
              <span>Sin responder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock, Flag, CheckCircle2, XCircle,
  Award, RotateCcw, ChevronLeft, ChevronRight, ShieldAlert
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { Exercise, PCEPObjectiveCode } from '../types';
import { ProgressBar } from '../components/common/ProgressBar';
import { DifficultyBadge } from '../components/common/Badge';

export const ExamSimulatorPage: React.FC = () => {
  const { exercises, recordExamAttempt } = useProgress();

  // Estados del examen
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporizador de 45 minutos (2700 segundos)
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(45 * 60);

  // Respuestas y marcas para revisión
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

  // Generar conjunto de preguntas respetando la distribución oficial:
  // 30 preguntas totales:
  // Sec 1 (18%): 5 preguntas
  // Sec 2 (29%): 9 preguntas
  // Sec 3 (25%): 8 preguntas
  // Sec 4 (28%): 8 preguntas
  const examQuestions = useMemo<Exercise[]>(() => {
    const s1 = exercises.filter(e => e.section === 1);
    const s2 = exercises.filter(e => e.section === 2);
    const s3 = exercises.filter(e => e.section === 3);
    const s4 = exercises.filter(e => e.section === 4);

    const pick = (list: Exercise[], count: number) => {
      const shuffled = [...list].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const selected = [
      ...pick(s1, 5),
      ...pick(s2, 9),
      ...pick(s3, 8),
      ...pick(s4, 8)
    ];

    // Mezclar el orden global de presentación
    return selected.sort(() => 0.5 - Math.random());
  }, [exercises, examStarted]);

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
    setAnswers({});
    setFlaggedQuestions(new Set());
    setTimeLeftSeconds(45 * 60);
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
      durationSeconds: (45 * 60) - timeLeftSeconds,
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
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
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
            duración cronometrada, distribución ponderada por sección y ausencia de retroalimentación en tiempo real hasta concluir la prueba.
          </p>

          {/* Tabla de Ponderación Oficial */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden text-xs">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-950/70 p-3 font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <div>Sección Temática</div>
              <div className="text-center">Peso Examen</div>
              <div className="text-right">Preguntas Estimadas</div>
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
              <li>Tiempo límite: <strong>45 minutos</strong>. El examen se entregará automáticamente si el tiempo expira.</li>
              <li>Puntuación mínima de aprobación: <strong>70%</strong>.</li>
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
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
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
              className="flex-1 py-3 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Realizar Nuevo Simulacro</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Interfaz de Examen en Curso (Requerimiento 26)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
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
                {currentExercise.statement}
              </div>

              {currentExercise.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-sm p-4 text-slate-100">
                  <pre className="whitespace-pre-wrap">{currentExercise.codeSnippet}</pre>
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

              {/* Botones de navegación Anterior / Siguiente */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <button
                  disabled={currentIndex === examQuestions.length - 1}
                  onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-medium transition shadow-sm disabled:opacity-40"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
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

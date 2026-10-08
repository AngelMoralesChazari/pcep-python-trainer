import React, { useState, useEffect } from 'react';
import {
  CheckCircle2, XCircle, Bookmark, BookmarkCheck,
  Sparkles, RefreshCw, ChevronRight, Eye
} from 'lucide-react';
import { Exercise } from '../../types';
import { DifficultyBadge, ExerciseTypeBadge } from '../common/Badge';
import { PythonCodeEditor } from '../editor/PythonCodeEditor';
import { pythonExecutor, ExecutionResult } from '../../services/pythonExecutor';
import { useProgress } from '../../context/ProgressContext';

interface ExerciseRunnerProps {
  exercise: Exercise;
  onNext?: () => void;
}

export const ExerciseRunner: React.FC<ExerciseRunnerProps> = ({ exercise, onNext }) => {
  const { recordSubmission, toggleFavorite, progress, generateMoreVariants } = useProgress();

  const isFavorite = progress.favoriteExerciseIds.includes(exercise.id);

  // Estados locales por tipo de ejercicio
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [outputPredictionInput, setOutputPredictionInput] = useState('');
  const [completionInput, setCompletionInput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [judgeResult, setJudgeResult] = useState<ExecutionResult | null>(null);

  // Reiniciar estado al cambiar de ejercicio
  React.useEffect(() => {
    setSelectedOptionId(null);
    setOutputPredictionInput('');
    setCompletionInput('');
    setShowSolution(false);
    setHasSubmitted(false);
    setIsCorrect(false);
    setJudgeResult(null);
  }, [exercise.id]);

  // Manejo de respuesta para TEORÍA y ANÁLISIS DE CÓDIGO (con opciones)
  const handleSubmitOption = () => {
    if (!selectedOptionId || !exercise.options) return;
    const selected = exercise.options.find(o => o.id === selectedOptionId);
    const correct = selected?.isCorrect || false;

    setIsCorrect(correct);
    setHasSubmitted(true);
    recordSubmission({
      exerciseId: exercise.id,
      verdict: correct ? 'accepted' : 'wrong_answer',
      userAnswer: selected?.text,
      isCorrect: correct
    });
  };

  // Manejo de respuesta para PREDICCIÓN DE SALIDA
  const handleSubmitOutputPrediction = () => {
    if (!exercise.expectedOutput) return;
    const cleanUser = outputPredictionInput.trim();
    const cleanExpected = exercise.expectedOutput.trim();
    const correct = cleanUser === cleanExpected;

    setIsCorrect(correct);
    setHasSubmitted(true);
    recordSubmission({
      exerciseId: exercise.id,
      verdict: correct ? 'accepted' : 'wrong_answer',
      userAnswer: cleanUser,
      executionOutput: cleanUser,
      isCorrect: correct
    });
  };

  // Manejo de respuesta para COMPLETAR CÓDIGO
  const handleSubmitCompletion = () => {
    const cleanUser = completionInput.trim().replace(/\s+/g, ' ');
    const acceptable = (exercise.acceptableSolutions || []).map(s => s.trim().replace(/\s+/g, ' '));
    const correct = acceptable.includes(cleanUser);

    setIsCorrect(correct);
    setHasSubmitted(true);
    recordSubmission({
      exerciseId: exercise.id,
      verdict: correct ? 'accepted' : 'wrong_answer',
      userAnswer: completionInput,
      isCorrect: correct
    });
  };

  // Manejo de respuesta para PROGRAMACIÓN (Juez online)
  const handleJudgeExecution = async (_res: ExecutionResult, code: string) => {
    if (!exercise.testCases || exercise.testCases.length === 0) return;

    const judgeRes = await pythonExecutor.judgeTestCases(code, exercise.testCases);
    setJudgeResult(judgeRes);
    const correct = judgeRes.verdict === 'accepted';
    setIsCorrect(correct);
    setHasSubmitted(true);

    recordSubmission({
      exerciseId: exercise.id,
      verdict: judgeRes.verdict,
      userCode: code,
      executionOutput: judgeRes.output,
      executionTimeMs: judgeRes.executionTimeMs,
      isCorrect: correct
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 max-w-4xl mx-auto space-y-6">
      {/* Cabecera del ejercicio */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              PCEP Objetivo {exercise.pcepObjective}
            </span>
            <DifficultyBadge difficulty={exercise.difficulty} />
            <ExerciseTypeBadge type={exercise.type} />
            {exercise.isGenerated && (
              <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Variante Generada
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">{exercise.title}</h2>
          <p className="text-xs text-slate-500">{exercise.sectionTitle} &bull; {exercise.topic}</p>
        </div>

        <button
          onClick={() => toggleFavorite(exercise.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition shrink-0 ${
            isFavorite
              ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-300'
              : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          {isFavorite ? <BookmarkCheck className="w-4 h-4 text-amber-600 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
          <span>{isFavorite ? 'En favoritos' : 'Guardar'}</span>
        </button>
      </div>

      {/* Enunciado */}
      <div className="text-slate-800 dark:text-slate-200 text-base leading-relaxed font-normal">
        {exercise.statement}
      </div>

      {/* Fragmento de código relevante (para predicción o análisis) */}
      {exercise.codeSnippet && (
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-sm p-4 text-slate-100 shadow-inner">
          <pre className="whitespace-pre-wrap">{exercise.codeSnippet}</pre>
        </div>
      )}

      {/* CONTENIDO INTERACTIVO SEGÚN TIPO */}

      {/* A. Pregunta con opciones (Teoría / Análisis) */}
      {exercise.options && exercise.options.length > 0 && (
        <div className="space-y-3">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Selecciona la respuesta correcta:
          </label>
          <div className="grid gap-2.5">
            {exercise.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptionId === opt.id;
              let itemClass = "border-slate-200 dark:border-slate-800 hover:border-petrol-400 dark:hover:border-petrol-600 bg-white dark:bg-slate-900";

              if (hasSubmitted) {
                if (opt.isCorrect) {
                  itemClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200";
                } else if (isSelected && !opt.isCorrect) {
                  itemClass = "border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200";
                }
              } else if (isSelected) {
                itemClass = "border-petrol-600 bg-petrol-50/60 dark:bg-petrol-950/40 text-petrol-900 dark:text-petrol-100";
              }

              return (
                <button
                  key={opt.id}
                  disabled={hasSubmitted}
                  onClick={() => setSelectedOptionId(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl border text-sm transition flex items-start gap-3 ${itemClass}`}
                >
                  <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {letter}
                  </span>
                  <span className="leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {!hasSubmitted && (
            <button
              onClick={handleSubmitOption}
              disabled={!selectedOptionId}
              className="mt-2 w-full sm:w-auto px-6 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-medium text-sm transition disabled:opacity-50"
            >
              Comprobar Respuesta
            </button>
          )}
        </div>
      )}

      {/* B. Predicción de salida por texto */}
      {exercise.type === 'output_prediction' && !exercise.options && (
        <div className="space-y-3">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Escribe exactamente la salida del programa (incluye saltos de línea si corresponde):
          </label>
          <textarea
            value={outputPredictionInput}
            onChange={(e) => setOutputPredictionInput(e.target.value)}
            disabled={hasSubmitted}
            placeholder="Ejemplo: 25\n1"
            rows={3}
            className="w-full font-mono text-sm p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500 focus:ring-1 focus:ring-petrol-500 transition"
          />

          {!hasSubmitted && (
            <button
              onClick={handleSubmitOutputPrediction}
              disabled={!outputPredictionInput.trim()}
              className="px-6 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-medium text-sm transition disabled:opacity-50"
            >
              Verificar Salida
            </button>
          )}
        </div>
      )}

      {/* C. Completar código */}
      {exercise.type === 'code_completion' && (
        <div className="space-y-3">
          {exercise.starterCode && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-sm p-4 text-slate-100">
              <pre className="whitespace-pre-wrap">{exercise.starterCode}</pre>
            </div>
          )}

          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Escribe el código faltante que sustituye a "____":
          </label>
          <input
            type="text"
            value={completionInput}
            onChange={(e) => setCompletionInput(e.target.value)}
            disabled={hasSubmitted}
            placeholder="Código o instrucción exacta"
            className="w-full font-mono text-sm p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 outline-none focus:border-petrol-500 focus:ring-1 focus:ring-petrol-500"
          />

          {!hasSubmitted && (
            <button
              onClick={handleSubmitCompletion}
              disabled={!completionInput.trim()}
              className="px-6 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-medium text-sm transition disabled:opacity-50"
            >
              Validar Solución
            </button>
          )}
        </div>
      )}

      {/* D. Detección de errores y programación con editor */}
      {(exercise.type === 'debugging' || exercise.type === 'programming') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Editor interactivo con ejecución segura en sandbox</span>
            <span>Atajo: Ctrl + Enter para ejecutar</span>
          </div>

          <PythonCodeEditor
            initialCode={exercise.starterCode || '# Escribe tu solución aquí\n'}
            onExecute={exercise.type === 'programming' ? handleJudgeExecution : undefined}
          />

          {/* Si es juez online, mostrar los casos de prueba */}
          {judgeResult && judgeResult.testCaseResults && (
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-3 bg-slate-50 dark:bg-slate-950/50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Resultado de Casos de Prueba (Juez Online)
              </h4>
              <div className="space-y-2">
                {judgeResult.testCaseResults.map((tc, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
                      tc.passed
                        ? 'border-emerald-200 bg-emerald-50/50 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300'
                        : 'border-rose-200 bg-rose-50/50 text-rose-900 dark:border-rose-900/40 dark:bg-rose-950/20 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {tc.passed ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                      <span className="font-semibold">Caso #{idx + 1} {tc.isHidden ? '(Oculto)' : ''}</span>
                    </div>
                    <span className="font-bold">{tc.passed ? 'ACCEPTED' : 'WRONG ANSWER'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PANEL DE RETROALIMENTACIÓN PEDAGÓGICA (Sección 10 y 35) */}
      {hasSubmitted && (
        <div className={`rounded-xl border p-5 space-y-4 transition-all duration-300 ${
          isCorrect
            ? 'bg-emerald-50/60 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/50'
            : 'bg-rose-50/60 border-rose-200 dark:bg-rose-950/20 dark:border-rose-800/50'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              )}
              <h3 className={`text-base font-bold ${isCorrect ? 'text-emerald-900 dark:text-emerald-200' : 'text-rose-900 dark:text-rose-200'}`}>
                {isCorrect ? '¡Excelente! Respuesta Correcta' : 'Respuesta Incorrecta'}
              </h3>
            </div>

            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-petrol-600 transition"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showSolution ? 'Ocultar Solución' : 'Ver Solución'}</span>
            </button>
          </div>

          <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
            <div className="font-semibold text-xs uppercase tracking-wider text-slate-500">Explicación Pedagógica:</div>
            <p>{exercise.explanation}</p>
          </div>

          {showSolution && (exercise.solutionCode || exercise.expectedOutput) && (
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs border border-slate-800">
              <div className="text-slate-400 mb-1 text-[11px] font-sans">Solución de referencia:</div>
              <pre className="whitespace-pre-wrap">{exercise.solutionCode || exercise.expectedOutput}</pre>
            </div>
          )}

          {/* Conceptos relacionados */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Conceptos evaluados:</span>
            {exercise.concepts.map((concept, i) => (
              <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                ✓ {concept}
              </span>
            ))}
          </div>

          {/* Acciones posteriores */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
            <button
              onClick={() => generateMoreVariants(1, exercise.pcepObjective)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium hover:bg-white dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300"
              title="Genera otra variante paramétrica con mismos objetivos pero distintos números o variables"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Practicar otra variante similar</span>
            </button>

            {onNext && (
              <button
                onClick={onNext}
                className="flex items-center gap-1.5 px-4 py-2 bg-petrol-600 hover:bg-petrol-700 text-white rounded-lg text-xs font-medium transition shadow-sm"
              >
                <span>Siguiente Ejercicio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Trophy, Timer, Zap, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { ExerciseRunner } from '../components/exercises/ExerciseRunner';
import { Exercise } from '../types';

export const ChallengesPage: React.FC = () => {
  const { exercises } = useProgress();

  const [sprintStarted, setSprintStarted] = useState(false);
  const [sprintFinished, setSprintFinished] = useState(false);
  const [challengeExercises, setChallengeExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60); // 15 minutos de sprint
  const [solvedInSprint, setSolvedInSprint] = useState(0);

  const startSprint = () => {
    // Escoger 5 problemas variados
    const shuffled = [...exercises].sort(() => 0.5 - Math.random()).slice(0, 5);
    setChallengeExercises(shuffled);
    setCurrentIndex(0);
    setSecondsLeft(15 * 60);
    setSolvedInSprint(0);
    setSprintFinished(false);
    setSprintStarted(true);
  };

  useEffect(() => {
    if (!sprintStarted || sprintFinished) return;
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setSprintFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [sprintStarted, sprintFinished]);

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextChallenge = () => {
    setSolvedInSprint(prev => prev + 1);
    if (currentIndex < challengeExercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setSprintFinished(true);
    }
  };

  if (!sprintStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Modalidad Competitiva
              </span>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Modo Reto: Speed Sprint PCEP</h1>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Pon a prueba tu agilidad mental bajo presión de tiempo. Resuelve una serie de 5 problemas en menos de 15 minutos para maximizar tu puntuación y precisión.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <Timer className="w-5 h-5 mx-auto text-amber-500 mb-1" />
              <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100">15 Minutos</div>
              <div className="text-xs text-slate-500">Tiempo Límite</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <Zap className="w-5 h-5 mx-auto text-petrol-500 mb-1" />
              <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100">5 Problemas</div>
              <div className="text-xs text-slate-500">Dificultad Progresiva</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <Trophy className="w-5 h-5 mx-auto text-purple-500 mb-1" />
              <div className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100">+500 pts</div>
              <div className="text-xs text-slate-500">Recompensa Máxima</div>
            </div>
          </div>

          <button
            onClick={startSprint}
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Iniciar Speed Sprint Ahora</span>
          </button>
        </div>
      </div>
    );
  }

  if (sprintFinished) {
    const score = solvedInSprint * 100;
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 mx-auto flex items-center justify-center font-bold">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">¡Reto Completado!</h2>
            <p className="text-sm text-slate-500 mt-1">Has finalizado tu sesión rápida de entrenamiento cronometrado.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">
                {solvedInSprint} / {challengeExercises.length}
              </div>
              <div className="text-xs text-slate-500">Problemas Resueltos</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
                {score} pts
              </div>
              <div className="text-xs text-slate-500">Puntuación Total</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={startSprint}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition"
            >
              Jugar Otro Sprint
            </button>
          </div>
        </div>
      </div>
    );
  }

  const activeChallenge = challengeExercises[currentIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Barra de tiempo y progreso */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
            Reto {currentIndex + 1} de {challengeExercises.length}
          </span>
          <span className="text-xs text-slate-500">Speed Sprint</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono font-bold text-sm text-slate-800 dark:text-slate-200">
          <Timer className="w-4 h-4 text-amber-500" />
          <span>{formatTimer(secondsLeft)}</span>
        </div>

        <button
          onClick={() => setSprintFinished(true)}
          className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition"
        >
          Abandonar Reto
        </button>
      </div>

      {activeChallenge && (
        <ExerciseRunner
          exercise={activeChallenge}
          onNext={handleNextChallenge}
        />
      )}
    </div>
  );
};

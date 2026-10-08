import React, { createContext, useContext, useState, useEffect } from 'react';
import { Exercise, StudentProgress, SubmissionAttempt, ExamAttempt, PCEPObjectiveCode } from '../types';
import { SEED_EXERCISES } from '../data/seedExercises';
import { ExerciseGenerator } from '../services/exerciseGenerator';

interface ProgressContextType {
  exercises: Exercise[];
  progress: StudentProgress;
  submissions: SubmissionAttempt[];
  examAttempts: ExamAttempt[];
  recordSubmission: (attempt: Omit<SubmissionAttempt, 'id' | 'timestamp' | 'userId'>) => void;
  recordExamAttempt: (exam: Omit<ExamAttempt, 'id' | 'timestamp' | 'userId'>) => void;
  toggleFavorite: (exerciseId: string) => void;
  addNewExercise: (exercise: Exercise) => void;
  importExercisesJson: (jsonString: string) => { success: boolean; count: number; error?: string };
  generateMoreVariants: (count?: number, objective?: PCEPObjectiveCode) => void;
  getRecommendedExercises: (limit?: number) => Exercise[];
}

const DEFAULT_PROGRESS: StudentProgress = {
  userId: 'usr-student-angel',
  objectiveMastery: {
    '1.1': 90,
    '1.2': 88,
    '1.3': 85,
    '1.4': 81,
    '1.5': 79,
    '2.1': 76,
    '2.2': 64,
    '3.1': 51,
    '3.2': 88,
    '3.3': 43,
    '3.4': 72,
    '4.1': 72,
    '4.2': 60,
    '4.3': 55,
    '4.4': 38
  },
  sectionScores: {
    1: 85,
    2: 70,
    3: 63,
    4: 56
  },
  weakObjectives: ['4.4', '3.3', '3.1', '4.3'],
  solvedExerciseIds: ['pcep-1-1-theory-1', 'pcep-1-2-analysis-1', 'pcep-1-3-pred-1', 'pcep-2-1-analysis-1', 'pcep-3-2-pred-1'],
  failedExerciseIds: ['pcep-3-1-analysis-1', 'pcep-4-4-analysis-1'],
  favoriteExerciseIds: ['pcep-1-4-pred-1', 'pcep-2-2-prog-1']
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [exercises, setExercises] = useState<Exercise[]>(() => {
    const saved = localStorage.getItem('pcep_exercises_bank');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    // Añadimos ejercicios semilla iniciales + variantes paramétricas de inicio
    const initialVariants = ExerciseGenerator.generateBatch(5);
    return [...SEED_EXERCISES, ...initialVariants];
  });

  const [progress, setProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem('pcep_student_progress');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return DEFAULT_PROGRESS;
  });

  const [submissions, setSubmissions] = useState<SubmissionAttempt[]>(() => {
    const saved = localStorage.getItem('pcep_submissions');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [
      {
        id: 'sub-1',
        exerciseId: 'pcep-1-1-theory-1',
        userId: 'usr-student-angel',
        timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
        verdict: 'accepted',
        isCorrect: true
      },
      {
        id: 'sub-2',
        exerciseId: 'pcep-3-1-analysis-1',
        userId: 'usr-student-angel',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        verdict: 'wrong_answer',
        isCorrect: false
      }
    ];
  });

  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>(() => {
    const saved = localStorage.getItem('pcep_exam_attempts');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [
      {
        id: 'exam-init-1',
        userId: 'usr-student-angel',
        timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
        durationSeconds: 1620, // 27 minutos
        totalQuestions: 30,
        scorePercentage: 68,
        passed: false,
        breakdown: {
          section1: 82,
          section2: 71,
          section3: 64,
          section4: 58
        },
        answers: {},
        weakObjectives: ['4.4', '3.3', '3.1']
      }
    ];
  });

  // Persistir en LocalStorage
  useEffect(() => {
    localStorage.setItem('pcep_exercises_bank', JSON.stringify(exercises));
  }, [exercises]);

  useEffect(() => {
    localStorage.setItem('pcep_student_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('pcep_submissions', JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    localStorage.setItem('pcep_exam_attempts', JSON.stringify(examAttempts));
  }, [examAttempts]);

  const recordSubmission = (attemptData: Omit<SubmissionAttempt, 'id' | 'timestamp' | 'userId'>) => {
    const newSubmission: SubmissionAttempt = {
      ...attemptData,
      id: `sub-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userId: progress.userId,
      timestamp: new Date().toISOString()
    };

    setSubmissions(prev => [newSubmission, ...prev]);

    // Actualizar progreso del ejercicio
    const ex = exercises.find(e => e.id === attemptData.exerciseId);
    setProgress(prev => {
      const solved = new Set(prev.solvedExerciseIds);
      const failed = new Set(prev.failedExerciseIds);

      if (attemptData.isCorrect) {
        solved.add(attemptData.exerciseId);
        failed.delete(attemptData.exerciseId);
      } else {
        failed.add(attemptData.exerciseId);
      }

      // Actualizar maestría del objetivo PCEP
      const newMastery = { ...prev.objectiveMastery };
      if (ex) {
        const current = newMastery[ex.pcepObjective] || 50;
        const delta = attemptData.isCorrect ? 5 : -4;
        newMastery[ex.pcepObjective] = Math.max(10, Math.min(100, current + delta));
      }

      // Recomputar debilidades (los objetivos con menor maestría)
      const sortedObjectives = (Object.keys(newMastery) as PCEPObjectiveCode[])
        .sort((a, b) => newMastery[a] - newMastery[b])
        .slice(0, 4);

      return {
        ...prev,
        solvedExerciseIds: Array.from(solved),
        failedExerciseIds: Array.from(failed),
        objectiveMastery: newMastery,
        weakObjectives: sortedObjectives
      };
    });
  };

  const recordExamAttempt = (examData: Omit<ExamAttempt, 'id' | 'timestamp' | 'userId'>) => {
    const attempt: ExamAttempt = {
      ...examData,
      id: `exam-${Date.now()}`,
      userId: progress.userId,
      timestamp: new Date().toISOString()
    };
    setExamAttempts(prev => [attempt, ...prev]);
  };

  const toggleFavorite = (exerciseId: string) => {
    setProgress(prev => {
      const favs = new Set(prev.favoriteExerciseIds);
      if (favs.has(exerciseId)) {
        favs.delete(exerciseId);
      } else {
        favs.add(exerciseId);
      }
      return { ...prev, favoriteExerciseIds: Array.from(favs) };
    });
  };

  const addNewExercise = (exercise: Exercise) => {
    setExercises(prev => [exercise, ...prev]);
  };

  const importExercisesJson = (jsonString: string): { success: boolean; count: number; error?: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      if (items.length === 0) return { success: false, count: 0, error: 'JSON vacío' };

      const validated: Exercise[] = items.map((item, idx) => ({
        id: item.id || `imp-${Date.now()}-${idx}`,
        title: item.title || 'Ejercicio Importado',
        section: (item.section as any) || 1,
        sectionTitle: item.sectionTitle || `Sección ${item.section || 1}`,
        topic: item.topic || 'General',
        subtopic: item.subtopic || 'General',
        pcepObjective: item.pcepObjective || '1.1',
        difficulty: item.difficulty || 'basic',
        type: item.type || 'code_analysis',
        statement: item.statement || item.question || '',
        codeSnippet: item.codeSnippet || item.code || '',
        expectedOutput: item.expectedOutput || item.answer || '',
        explanation: item.explanation || 'Solución proporcionada.',
        concepts: item.concepts || ['PCEP'],
        tags: item.tags || ['importado'],
        isActive: true
      }));

      setExercises(prev => [...validated, ...prev]);
      return { success: true, count: validated.length };
    } catch (err: any) {
      return { success: false, count: 0, error: err.message };
    }
  };

  const generateMoreVariants = (count = 5, objective?: PCEPObjectiveCode) => {
    const newVariants = ExerciseGenerator.generateBatch(count, objective);
    setExercises(prev => [...newVariants, ...prev]);
  };

  /**
   * Algoritmo de Recomendación Adaptativa (Secciones 21 y 48):
   * Prioriza ejercicios de objetivos débiles, no resueltos o fallados.
   */
  const getRecommendedExercises = (limit = 4): Exercise[] => {
    const weakSet = new Set(progress.weakObjectives);
    const solvedSet = new Set(progress.solvedExerciseIds);
    const failedSet = new Set(progress.failedExerciseIds);

    // Prioridad 1: Ejercicios de temas débiles o previamente fallados
    const candidates = exercises.filter(e => !solvedSet.has(e.id));
    candidates.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      if (failedSet.has(a.id)) scoreA += 50;
      if (failedSet.has(b.id)) scoreB += 50;

      if (weakSet.has(a.pcepObjective)) scoreA += 30;
      if (weakSet.has(b.pcepObjective)) scoreB += 30;

      const masteryA = progress.objectiveMastery[a.pcepObjective] ?? 50;
      const masteryB = progress.objectiveMastery[b.pcepObjective] ?? 50;
      scoreA += (100 - masteryA) * 0.4;
      scoreB += (100 - masteryB) * 0.4;

      return scoreB - scoreA;
    });

    return candidates.slice(0, limit);
  };

  return (
    <ProgressContext.Provider value={{
      exercises,
      progress,
      submissions,
      examAttempts,
      recordSubmission,
      recordExamAttempt,
      toggleFavorite,
      addNewExercise,
      importExercisesJson,
      generateMoreVariants,
      getRecommendedExercises
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within a ProgressProvider');
  return context;
};

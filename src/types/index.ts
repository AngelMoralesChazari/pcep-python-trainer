export * from './pcep';
import type { PCEPSectionId, PCEPObjectiveCode, ExerciseDifficulty, ExerciseType, VerdictStatus } from './pcep';

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
  description?: string;
}

export interface Exercise {
  id: string;
  title: string;
  section: PCEPSectionId;
  sectionTitle: string;
  topic: string;
  subtopic: string;
  pcepObjective: PCEPObjectiveCode;
  difficulty: ExerciseDifficulty;
  type: ExerciseType;
  statement: string;
  codeSnippet?: string;        // Para ejercicios de análisis o predicción de salida
  starterCode?: string;        // Código inicial para completar o programar
  options?: ExerciseOption[];  // Para selección múltiple / teoría
  expectedOutput?: string;     // Para predicción de salida
  testCases?: TestCase[];      // Para juez online / programación
  acceptableSolutions?: string[]; // Variantes aceptadas en completar código
  explanation: string;         // Explicación pedagógica detallada
  solutionCode?: string;       // Solución canónica de referencia
  concepts: string[];          // Conceptos evaluados
  tags: string[];
  source?: string;
  isGenerated?: boolean;
  isActive: boolean;
}

export interface UserStats {
  totalSolved: number;
  totalAttempts: number;
  accuracyPercentage: number;
  studyTimeSeconds: number;
  currentStreakDays: number;
  lastActiveDate: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'teacher' | 'admin';
  createdAt: string;
  stats: UserStats;
}

export interface SubmissionAttempt {
  id: string;
  exerciseId: string;
  userId: string;
  timestamp: string;
  userAnswer?: string;
  userCode?: string;
  verdict: VerdictStatus;
  executionOutput?: string;
  errorMessage?: string;
  executionTimeMs?: number;
  isCorrect: boolean;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  timestamp: string;
  durationSeconds: number;
  totalQuestions: number;
  scorePercentage: number;
  passed: boolean; // >= 70%
  breakdown: {
    section1: number;
    section2: number;
    section3: number;
    section4: number;
  };
  answers: Record<string, { givenAnswer: string; isCorrect: boolean }>;
  weakObjectives: PCEPObjectiveCode[];
}

export interface StudentProgress {
  userId: string;
  objectiveMastery: Record<PCEPObjectiveCode, number>; // 0 to 100
  sectionScores: {
    1: number;
    2: number;
    3: number;
    4: number;
  };
  weakObjectives: PCEPObjectiveCode[];
  solvedExerciseIds: string[];
  failedExerciseIds: string[];
  favoriteExerciseIds: string[];
}

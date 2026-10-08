// Definiciones formales del temario PCEP-30-02

export type PCEPSectionId = 1 | 2 | 3 | 4;

export type PCEPObjectiveCode =
  | '1.1' | '1.2' | '1.3' | '1.4' | '1.5'
  | '2.1' | '2.2'
  | '3.1' | '3.2' | '3.3' | '3.4'
  | '4.1' | '4.2' | '4.3' | '4.4';

export interface PCEPObjective {
  code: PCEPObjectiveCode;
  sectionId: PCEPSectionId;
  title: string;
  description: string;
  subtopics: string[];
}

export interface PCEPSection {
  id: PCEPSectionId;
  title: string;
  weightPercentage: number; // 18, 29, 25, 28
  description: string;
  objectives: PCEPObjective[];
}

export type ExerciseDifficulty = 'basic' | 'basic_plus' | 'intermediate' | 'pcep_challenge';

export type ExerciseType =
  | 'theory'
  | 'code_analysis'
  | 'output_prediction'
  | 'debugging'
  | 'code_completion'
  | 'programming';

export type VerdictStatus =
  | 'accepted'
  | 'wrong_answer'
  | 'runtime_error'
  | 'syntax_error'
  | 'time_limit_exceeded'
  | 'output_limit_exceeded';

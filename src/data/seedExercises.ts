import { Exercise } from '../types';
import { BASE_EXERCISES } from './exercises';

/**
 * Banco oficial semilla de 400 ejercicios PCEP
 * Divididos exactamente en 100 ejercicios por cada una de las 4 secciones del examen oficial,
 * organizados con progresión de dificultad (Nivel 1 Básico, Nivel 2 Básico+, Nivel 3 Intermedio/Certificación).
 */
export const SEED_EXERCISES: Exercise[] = BASE_EXERCISES;

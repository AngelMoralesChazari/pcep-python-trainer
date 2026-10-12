import { Exercise } from '../../types';
import { SECTION_1_EXERCISES } from './section1';
import { SECTION_2_EXERCISES } from './section2';
import { SECTION_3_EXERCISES } from './section3';
import { SECTION_4_EXERCISES } from './section4';

export { SECTION_1_EXERCISES } from './section1';
export { SECTION_2_EXERCISES } from './section2';
export { SECTION_3_EXERCISES } from './section3';
export { SECTION_4_EXERCISES } from './section4';

/**
 * Banco oficial base de 400 ejercicios PCEP artesanales y graduados
 * (100 ejercicios por cada una de las 4 secciones del examen oficial).
 */
export const BASE_EXERCISES: Exercise[] = [
  ...SECTION_1_EXERCISES,
  ...SECTION_2_EXERCISES,
  ...SECTION_3_EXERCISES,
  ...SECTION_4_EXERCISES
];

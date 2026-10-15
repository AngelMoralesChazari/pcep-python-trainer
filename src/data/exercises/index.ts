import { Exercise } from '../../types';
import { SECTION_1_EXERCISES } from './section1';
import { SECTION_2_EXERCISES } from './section2';
import { SECTION_3_EXERCISES } from './section3';
import { SECTION_4_EXERCISES } from './section4';
import { FOUR_GEEKS_EXERCISES } from './external/fourGeeksExercises';

export { SECTION_1_EXERCISES } from './section1';
export { SECTION_2_EXERCISES } from './section2';
export { SECTION_3_EXERCISES } from './section3';
export { SECTION_4_EXERCISES } from './section4';
export { FOUR_GEEKS_EXERCISES } from './external/fourGeeksExercises';

/**
 * Banco oficial base de ejercicios PCEP artesanales y graduados
 * complementado con los ejercicios de programación práctica importados de 4Geeks Academy.
 */
export const BASE_EXERCISES: Exercise[] = [
  ...SECTION_1_EXERCISES,
  ...SECTION_2_EXERCISES,
  ...SECTION_3_EXERCISES,
  ...SECTION_4_EXERCISES,
  ...FOUR_GEEKS_EXERCISES
];

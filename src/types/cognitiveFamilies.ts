/**
 * Sistema Formal de Familias Cognitivas de Ejercicios PCEP Trainer
 * Define las 10 familias pedagógicas estructurales para garantizar variedad real
 * de razonamiento y evitar la duplicación superficial de plantillas.
 */

import { PCEPObjectiveCode, ExerciseType } from './pcep';

export type CognitiveFamilyId =
  | 'execution_tracing'          // A. Seguimiento de ejecución
  | 'varied_output_prediction'    // B. Predicción de salida estructurada
  | 'code_analysis_reasoning'    // C. Análisis de código y razonamiento
  | 'debugging_errors'           // D. Depuración de errores reales
  | 'code_completion'            // E. Completar código (Cloze)
  | 'scratch_programming'        // F. Escritura de programas desde cero
  | 'solution_selection'         // G. Selección de soluciones válidas
  | 'snippet_comparison'         // H. Comparación de fragmentos de código
  | 'state_tracing'              // I. Trazado de variables y memoria
  | 'contextualized_problem';    // J. Problemas contextualizados de aplicación

export interface CognitiveFamilyMetadata {
  id: CognitiveFamilyId;
  name: string;
  description: string;
  cognitiveTask: string;
  typicalExerciseTypes: ExerciseType[];
  targetObjectives: PCEPObjectiveCode[];
}

export const COGNITIVE_FAMILIES: Record<CognitiveFamilyId, CognitiveFamilyMetadata> = {
  execution_tracing: {
    id: 'execution_tracing',
    name: 'Seguimiento de Ejecución',
    description: 'Seguimiento secuencial del estado y mutación de variables a través de múltiples reasignaciones y operaciones.',
    cognitiveTask: 'Rastrear mentalmente la evolución de valores en memoria sin depender de la salida de consola hasta el final.',
    typicalExerciseTypes: ['code_analysis', 'output_prediction'],
    targetObjectives: ['1.3', '1.4', '2.1', '2.2', '3.1']
  },
  varied_output_prediction: {
    id: 'varied_output_prediction',
    name: 'Predicción de Salida Compuesta',
    description: 'Predicción de salida estándar combinando bucles, saltos de línea con sep/end, formateo y conversiones.',
    cognitiveTask: 'Predecir exactamente la salida en consola analizando reglas sintácticas y operadores combinados.',
    typicalExerciseTypes: ['output_prediction'],
    targetObjectives: ['1.4', '1.5', '2.1', '2.2', '3.4']
  },
  code_analysis_reasoning: {
    id: 'code_analysis_reasoning',
    name: 'Análisis de Código y Razonamiento',
    description: 'Explicación de por qué una instrucción produce un resultado específico (precedencia, corto-circuito, inmutabilidad).',
    cognitiveTask: 'Identificar y justificar la regla fundamental del lenguaje que rige el comportamiento del código.',
    typicalExerciseTypes: ['code_analysis', 'theory'],
    targetObjectives: ['1.1', '1.2', '1.4', '4.2', '4.3']
  },
  debugging_errors: {
    id: 'debugging_errors',
    name: 'Depuración de Errores Reales',
    description: 'Identificación y corrección de excepciones auténticas de Python (SyntaxError, IndentationError, TypeError, IndexError).',
    cognitiveTask: 'Localizar la anomalía, diagnosticar el tipo de excepción y determinar la corrección exacta.',
    typicalExerciseTypes: ['debugging', 'code_analysis'],
    targetObjectives: ['1.2', '1.3', '1.4', '3.1', '3.3', '4.3', '4.4']
  },
  code_completion: {
    id: 'code_completion',
    name: 'Completar Código (Cloze)',
    description: 'Completar expresiones, condiciones o instrucciones faltantes representadas por "____".',
    cognitiveTask: 'Deducir la expresión exacta que satisface el contrato del programa.',
    typicalExerciseTypes: ['code_completion'],
    targetObjectives: ['1.4', '2.1', '2.2', '3.1', '3.4', '4.1']
  },
  scratch_programming: {
    id: 'scratch_programming',
    name: 'Escritura de Programas desde Cero',
    description: 'Resolución de problemas algorítmicos con casos de prueba evaluados por el juez online.',
    cognitiveTask: 'Diseñar e implementar una solución funcional que supere todos los casos de prueba visibles y ocultos.',
    typicalExerciseTypes: ['programming'],
    targetObjectives: ['1.4', '1.5', '2.1', '2.2', '3.1', '4.1']
  },
  solution_selection: {
    id: 'solution_selection',
    name: 'Selección de Soluciones Válidas',
    description: 'Elegir la implementación correcta entre varias alternativas con errores sutiles de razonamiento.',
    cognitiveTask: 'Discriminar entre soluciones que fallan en casos límite y la solución canónica correcta.',
    typicalExerciseTypes: ['theory', 'code_analysis'],
    targetObjectives: ['2.1', '2.2', '3.1', '3.3', '4.1', '4.4']
  },
  snippet_comparison: {
    id: 'snippet_comparison',
    name: 'Comparación de Fragmentos de Código',
    description: 'Comparar dos fragmentos de código para determinar equivalencia de salida, efectos colaterales o diferencias.',
    cognitiveTask: 'Contrastar dos caminos algorítmicos distintos y deducir si su comportamiento externo es idéntico o divergente.',
    typicalExerciseTypes: ['code_analysis'],
    targetObjectives: ['1.4', '2.1', '2.2', '3.1', '3.4', '4.2']
  },
  state_tracing: {
    id: 'state_tracing',
    name: 'Trazado de Estados y Memoria',
    description: 'Reconstrucción del estado interno de listas, tuplas y diccionarios tras operaciones mutables.',
    cognitiveTask: 'Rastrear modificaciones de colecciones en memoria (mutabilidad vs inmutabilidad y copias por referencia).',
    typicalExerciseTypes: ['code_analysis', 'output_prediction'],
    targetObjectives: ['3.1', '3.2', '3.3', '4.2']
  },
  contextualized_problem: {
    id: 'contextualized_problem',
    name: 'Problemas Contextualizados',
    description: 'Escenarios aplicados reales (cálculo de descuentos en carritos, validación de inventario, tarifas de equipaje).',
    cognitiveTask: 'Traducir reglas de negocio del mundo real a lógica computacional precisa sin ambigüedades.',
    typicalExerciseTypes: ['programming', 'output_prediction', 'code_analysis'],
    targetObjectives: ['1.4', '1.5', '2.1', '2.2', '3.3', '4.1']
  }
};

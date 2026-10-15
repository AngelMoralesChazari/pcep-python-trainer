/**
 * Generador Avanzado de Ejercicios PCEP con Diversidad Estructural Real
 * Implementa generadores especializados organizados en las 10 Familias Cognitivas
 * del temario PCEP-30-02, asegurando que cada variante plantee una tarea mental distinta
 * y evitando variantes triviales de mero cambio de valores.
 */

import { Exercise, PCEPObjectiveCode, CognitiveFamilyId } from '../types';

interface DiverseExerciseTemplate {
  id: string;
  pcepObjective: PCEPObjectiveCode;
  family: CognitiveFamilyId;
  section: 1 | 2 | 3 | 4;
  sectionTitle: string;
  topic: string;
  subtopic: string;
  generate: () => Exercise;
}

const TEMPLATES: DiverseExerciseTemplate[] = [
  // =========================================================================
  // FAMILIA A: SEGUIMIENTO DE EJECUCIÓN (execution_tracing)
  // =========================================================================
  {
    id: 'tracing-variable-swap-reassign',
    pcepObjective: '1.3',
    family: 'execution_tracing',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Literales y Variables',
    subtopic: 'Intercambio de valores y reasignación secuencial',
    generate: () => {
      const a0 = Math.floor(Math.random() * 8) + 2;
      const b0 = Math.floor(Math.random() * 8) + 10;
      const step1 = a0 + b0;
      const step2 = step1 - a0;
      const step3 = step1 - step2;

      return {
        id: `gen-trace-swap-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Seguimiento de Ejecución: Intercambio Aritmético de Variables',
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Literales y Variables',
        subtopic: 'Reasignaciones y operaciones intermedias',
        pcepObjective: '1.3',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        cognitiveFamily: 'execution_tracing',
        statement: 'Rastrea el valor de cada variable paso a paso. ¿Qué imprimirá la consola al finalizar?',
        codeSnippet: `a = ${a0}\nb = ${b0}\n\na = a + b\nb = a - b\na = a - b\n\nprint("a:", a, "b:", b)`,
        expectedOutput: `a: ${step3} b: ${step2}`,
        explanation: `Se trata del algoritmo clásico de intercambio sin variable auxiliar:
1. a se convierte en ${step1}.
2. b se calcula como ${step1} - ${b0} = ${step2}.
3. a se calcula como ${step1} - ${step2} = ${step3}.
Por tanto, a y b han intercambiado sus valores originales.`,
        concepts: ['reasignación', 'intercambio de variables', 'memoria'],
        tags: ['seguimiento', 'variables', 'pcep-1.3'],
        isGenerated: true,
        isActive: true
      };
    }
  },
  {
    id: 'tracing-accumulator-loop',
    pcepObjective: '2.2',
    family: 'execution_tracing',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Iteraciones y Bucles',
    subtopic: 'Acumuladores y condiciones internas en loops',
    generate: () => {
      const limit = Math.floor(Math.random() * 3) + 4; // 4 a 6
      let acc = 0;
      for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) acc += i * 2;
        else acc += 1;
      }

      return {
        id: `gen-trace-acc-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Seguimiento de Ejecución: Acumulador con Bifurcación Par/Impar',
        section: 2,
        sectionTitle: 'Sección 2 — Flujo de Control',
        topic: 'Iteraciones y Bucles',
        subtopic: 'Modificación condicional de acumuladores',
        pcepObjective: '2.2',
        difficulty: 'intermediate',
        type: 'output_prediction',
        cognitiveFamily: 'execution_tracing',
        statement: 'Sigue el estado de la variable `total` a través de cada iteración del bucle. ¿Cuál es su valor final?',
        codeSnippet: `total = 0\nfor i in range(1, ${limit + 1}):\n    if i % 2 == 0:\n        total += i * 2\n    else:\n        total += 1\n\nprint(total)`,
        expectedOutput: `${acc}`,
        explanation: `El bucle recorre los números de 1 a ${limit}. Para números impares suma 1, y para números pares suma el doble del número. El acumulador final es ${acc}.`,
        concepts: ['range()', 'acumulador', 'bucle for', 'módulo %'],
        tags: ['seguimiento', 'bucles', 'pcep-2.2'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA B: PREDICCIÓN DE SALIDA ESTRUCTURADA (varied_output_prediction)
  // =========================================================================
  {
    id: 'output-sep-end-nested',
    pcepObjective: '1.5',
    family: 'varied_output_prediction',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Entrada y Salida por Consola',
    subtopic: 'Combinación avanzada de sep= y end= con expresiones',
    generate: () => {
      const sep = ['::', '-', '##'][Math.floor(Math.random() * 3)];
      const end = ['*', ' -> ', ' | '][Math.floor(Math.random() * 3)];
      const n1 = Math.floor(Math.random() * 4) + 1;
      const n2 = Math.floor(Math.random() * 4) + 5;
      const expected = `${n1}${sep}${n2}${end}${n1 * n2}`;

      return {
        id: `gen-out-sepend-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Predicción de Salida: Control de Flujo de Salida con sep y end',
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Entrada y Salida por Consola',
        subtopic: 'print(), sep= y end=',
        pcepObjective: '1.5',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        cognitiveFamily: 'varied_output_prediction',
        statement: 'Determina exactamente lo que se escribirá en la consola al ejecutar este fragmento:',
        codeSnippet: `print(${n1}, ${n2}, sep='${sep}', end='${end}')\nprint(${n1} * ${n2})`,
        expectedOutput: expected,
        explanation: `'sep=' intercala '${sep}' entre los dos primeros argumentos. 'end=' sustituye el salto de línea por '${end}', haciendo que la siguiente instrucción print imprima inmediatamente a continuación el producto ${n1 * n2}.`,
        concepts: ['print()', 'sep=', 'end=', 'concatenación de salida'],
        tags: ['io', 'print', 'pcep-1.5'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA C: ANÁLISIS DE CÓDIGO Y RAZONAMIENTO (code_analysis_reasoning)
  // =========================================================================
  {
    id: 'analysis-short-circuit',
    pcepObjective: '1.4',
    family: 'code_analysis_reasoning',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Operadores y Tipos de Datos',
    subtopic: 'Evaluación de cortocircuito en operadores booleanos and y or',
    generate: () => {
      return {
        id: `gen-analysis-shortcircuit-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Análisis de Código: Evaluación de Cortocircuito y Prevención de Errores',
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Operadores y Tipos de Datos',
        subtopic: 'Cortocircuito en and y or',
        pcepObjective: '1.4',
        difficulty: 'intermediate',
        type: 'code_analysis',
        cognitiveFamily: 'code_analysis_reasoning',
        statement: 'Analiza el siguiente código con atención:\n\n```python\nx = 0\nresultado = (x != 0) and (10 / x > 2)\nprint(resultado)\n```\n\n¿Por qué este código NO produce un `ZeroDivisionError`?',
        codeSnippet: `x = 0\nresultado = (x != 0) and (10 / x > 2)\nprint(resultado)`,
        options: [
          { id: 'opt-1', text: 'Python evalúa todas las expresiones de derecha a izquierda por defecto.', isCorrect: false },
          { id: 'opt-2', text: 'Debido a la evaluación de cortocircuito (short-circuit), al ser `x != 0` False, el operador `and` no evalúa el segundo operando.', isCorrect: true },
          { id: 'opt-3', text: 'Porque la división entera trunca a cero antes de lanzar el error.', isCorrect: false },
          { id: 'opt-4', text: 'Porque las comparaciones lógicas convierten automáticamente los errores en False.', isCorrect: false }
        ],
        explanation: 'En Python, el operador `and` evalúa de izquierda a derecha. Si el primer operando es falso (`x != 0` es `0 != 0` -> False), el resultado completo es obligatoriamente falso y Python detiene la evaluación sin ejecutar `10 / x`, evitando el `ZeroDivisionError`.',
        concepts: ['cortocircuito', 'and', 'ZeroDivisionError', 'evaluación perezosa'],
        tags: ['operadores', 'booleano', 'razonamiento', 'pcep-1.4'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA D: DEPURACIÓN DE ERRORES REALES (debugging_errors)
  // =========================================================================
  {
    id: 'debug-invalid-identifiers-syntax',
    pcepObjective: '1.2',
    family: 'debugging_errors',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Lógica y Estructura de Python',
    subtopic: 'Reglas de nomenclatura de identificadores y SyntaxError',
    generate: () => {
      return {
        id: `gen-debug-ident-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Depuración: Nombres de Variables Inválidos y Reglas Léxicas',
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Lógica y Estructura de Python',
        subtopic: 'Reglas de identificadores',
        pcepObjective: '1.2',
        difficulty: 'basic_plus',
        type: 'debugging',
        cognitiveFamily: 'debugging_errors',
        statement: 'El siguiente código produce un fallo inmediato al ejecutarse. Identifica la causa precisa del error sintáctico:\n\n```python\n2total = 50\ntasa de interes = 0.05\nprint(2total * tasa de interes)\n```',
        starterCode: '# Corrige el código para que use identificadores válidos en Python\n2total = 50\ntasa de interes = 0.05\nprint(2total * tasa de interes)',
        options: [
          { id: 'opt-1', text: 'Lanza TypeError porque no se pueden multiplicar enteros con flotantes.', isCorrect: false },
          { id: 'opt-2', text: 'Lanza SyntaxError: los nombres de variables no pueden iniciar con dígitos ni contener espacios en blanco.', isCorrect: true },
          { id: 'opt-3', text: 'Lanza NameError en la función print.', isCorrect: false },
          { id: 'opt-4', text: 'Lanza IndentationError en la primera línea.', isCorrect: false }
        ],
        explanation: 'Las reglas léxicas de Python establecen que un identificador solo puede contener letras, números y guiones bajos (_), y NUNCA puede comenzar con un dígito numérico ni tener espacios.',
        concepts: ['identificadores', 'SyntaxError', 'PEP-8', 'léxico'],
        tags: ['depuración', 'identificadores', 'pcep-1.2'],
        isGenerated: true,
        isActive: true
      };
    }
  },
  {
    id: 'debug-type-error-concatenation',
    pcepObjective: '1.4',
    family: 'debugging_errors',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Operadores y Tipos de Datos',
    subtopic: 'Tipado fuerte e incompatibilidad en operador +',
    generate: () => {
      return {
        id: `gen-debug-type-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Depuración: Concatenación Inválida de Texto y Entero',
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Operadores y Tipos de Datos',
        subtopic: 'TypeError en operador +',
        pcepObjective: '1.4',
        difficulty: 'basic_plus',
        type: 'debugging',
        cognitiveFamily: 'debugging_errors',
        statement: 'Analiza el intento de concatenación:\n\n```python\npuntos = 100\nmensaje = "Tu puntuación es: " + puntos\nprint(mensaje)\n```\n\n¿Qué excepción se produce y cómo se corrige?',
        starterCode: 'puntos = 100\n# Corrige la concatenación usando la conversión explícita adecuada\nmensaje = "Tu puntuación es: " + str(puntos)\nprint(mensaje)',
        options: [
          { id: 'opt-1', text: 'Lanza ValueError; se corrige reemplazando las comillas por apóstrofes.', isCorrect: false },
          { id: 'opt-2', text: 'Lanza TypeError: can only concatenate str (not "int") to str; se corrige convirtiendo `str(puntos)`.', isCorrect: true },
          { id: 'opt-3', text: 'Se ejecuta correctamente imprimiendo "Tu puntuación es: 100".', isCorrect: false },
          { id: 'opt-4', text: 'Lanza SyntaxError por usar el operador + con tipos mixtos.', isCorrect: false }
        ],
        explanation: 'Python es un lenguaje fuertemente tipado: no convierte implícitamente números a cadenas al usar el operador `+`. Concatenar `str + int` arroja `TypeError`. La corrección requiere `str(puntos)` o usar comas en `print("Tu puntuación es:", puntos)`.',
        concepts: ['TypeError', 'tipado fuerte', 'str()', 'concatenación'],
        tags: ['depuración', 'tipos', 'pcep-1.4'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA E: COMPLETAR CÓDIGO (code_completion)
  // =========================================================================
  {
    id: 'completion-string-slicing-reverse',
    pcepObjective: '3.4',
    family: 'code_completion',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Cadenas (Strings)',
    subtopic: 'Slicing con paso negativo para inversión de secuencias',
    generate: () => {
      return {
        id: `gen-comp-slice-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Completar Código: Inversión de Secuencia mediante Slicing',
        section: 3,
        sectionTitle: 'Sección 3 — Colecciones de Datos',
        topic: 'Cadenas (Strings)',
        subtopic: 'Slicing con step=-1',
        pcepObjective: '3.4',
        difficulty: 'intermediate',
        type: 'code_completion',
        cognitiveFamily: 'code_completion',
        statement: 'Completa el fragmento para que imprima la palabra invertida (`"nohtyP"`):',
        starterCode: 'palabra = "Python"\ninvertida = palabra[____]\nprint(invertida)',
        acceptableSolutions: ['::-1', '5::-1'],
        expectedOutput: 'nohtyP',
        explanation: 'En Python, la sintaxis de rebanado (slicing) `[inicio:fin:paso]` con un paso de `-1` (`[::-1]`) recorre la secuencia en orden inverso desde el último elemento hasta el primero.',
        concepts: ['slicing', 'step=-1', 'inversión', 'strings'],
        tags: ['completar', 'slicing', 'pcep-3.4'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA F: ESCRITURA DE PROGRAMAS DESDE CERO (scratch_programming)
  // =========================================================================
  {
    id: 'prog-filter-even-sum',
    pcepObjective: '2.2',
    family: 'scratch_programming',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Iteraciones y Bucles',
    subtopic: 'Programación completa: Filtrado y suma con bucle for',
    generate: () => {
      return {
        id: `gen-prog-evensum-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Programación: Suma de Números Pares en un Rango',
        section: 2,
        sectionTitle: 'Sección 2 — Flujo de Control',
        topic: 'Iteraciones y Bucles',
        subtopic: 'Algoritmo de acumulación con for y range()',
        pcepObjective: '2.2',
        difficulty: 'intermediate',
        type: 'programming',
        cognitiveFamily: 'scratch_programming',
        statement: `# Suma de Números Pares\n\nEscribe un programa que solicite un número entero positivo \`n\` usando \`input()\` y calcule la suma de todos los números **pares** desde \`2\` hasta \`n\` (inclusive).\n\nFinalmente, imprime únicamente el total calculado.`,
        starterCode: '# Escribe tu solución aquí\nn = int(input())\ntotal = 0\n\n# Usa un bucle for o while\n',
        solutionCode: 'n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    total += i\nprint(total)',
        testCases: [
          { input: '10\n', expectedOutput: '30\n', description: 'Pares hasta 10 (2+4+6+8+10 = 30)' },
          { input: '6\n', expectedOutput: '12\n', description: 'Pares hasta 6 (2+4+6 = 12)' },
          { input: '3\n', expectedOutput: '2\n', description: 'Pares hasta 3 (solo 2)' }
        ],
        explanation: 'Utilizamos `range(2, n + 1, 2)` para iterar directamente sobre los múltiplos de 2 hasta `n`, sumándolos a un acumulador que se imprime al final.',
        concepts: ['range(step=2)', 'bucle for', 'acumulador', 'input()'],
        tags: ['programación', 'juez', 'pcep-2.2'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA G: SELECCIÓN DE SOLUCIONES VÁLIDAS (solution_selection)
  // =========================================================================
  {
    id: 'selection-prime-check',
    pcepObjective: '2.1',
    family: 'solution_selection',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Sentencias Condicionales',
    subtopic: 'Selección de algoritmo óptimo para verificación de condiciones',
    generate: () => {
      return {
        id: `gen-select-leap-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Selección de Soluciones: Algoritmo Correcto de Año Bisiesto',
        section: 2,
        sectionTitle: 'Sección 2 — Flujo de Control',
        topic: 'Sentencias Condicionales',
        subtopic: 'Condiciones lógicas compuestas',
        pcepObjective: '2.1',
        difficulty: 'intermediate',
        type: 'code_analysis',
        cognitiveFamily: 'solution_selection',
        statement: 'Se necesita determinar si un año `y` es bisiesto. La regla astronómica es: "Un año es bisiesto si es divisible por 4, excepto si es divisible por 100, a menos que también sea divisible por 400".\n\n¿Cuál de las siguientes expresiones en Python implementa la regla con total exactitud?',
        options: [
          { id: 'opt-1', text: '`y % 4 == 0 or (y % 100 != 0 and y % 400 == 0)`', isCorrect: false },
          { id: 'opt-2', text: '`(y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)`', isCorrect: true },
          { id: 'opt-3', text: '`y % 4 == 0 and y % 100 == 0 and y % 400 == 0`', isCorrect: false },
          { id: 'opt-4', text: '`y % 4 == 0 and not (y % 400 == 0)`', isCorrect: false }
        ],
        explanation: 'La solución canónica evalúa si es divisible entre 4 pero no entre 100, o bien es divisible entre 400. Por ejemplo, el año 2000 es bisiesto (cumple 400), pero 1900 no lo es (falla 100).',
        concepts: ['operadores booleanos', 'precedencia and/or', 'año bisiesto'],
        tags: ['selección', 'algoritmo', 'pcep-2.1'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA H: COMPARACIÓN DE FRAGMENTOS (snippet_comparison)
  // =========================================================================
  {
    id: 'compare-list-copy-reference',
    pcepObjective: '3.1',
    family: 'snippet_comparison',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Listas',
    subtopic: 'Copia por referencia vs rebanado superficial (slicing copy)',
    generate: () => {
      return {
        id: `gen-cmp-copy-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Comparación de Fragmentos: Mutación por Referencia vs Copia Superficial',
        section: 3,
        sectionTitle: 'Sección 3 — Colecciones de Datos',
        topic: 'Listas',
        subtopic: 'Mutabilidad y referencias de listas',
        pcepObjective: '3.1',
        difficulty: 'intermediate',
        type: 'code_analysis',
        cognitiveFamily: 'snippet_comparison',
        statement: 'Considera los siguientes dos fragmentos de código:\n\n**Fragmento A:**\n```python\nlista1 = [1, 2, 3]\nlista2 = lista1\nlista2.append(4)\nprint(lista1)\n```\n\n**Fragmento B:**\n```python\nlista1 = [1, 2, 3]\nlista2 = lista1[:]\nlista2.append(4)\nprint(lista1)\n```\n\n¿En qué se diferencian las salidas producidas por el Fragmento A y el Fragmento B?',
        options: [
          { id: 'opt-1', text: 'Ambos fragmentos producen `[1, 2, 3, 4]`.', isCorrect: false },
          { id: 'opt-2', text: 'El Fragmento A imprime `[1, 2, 3, 4]` (misma referencia), mientras que el Fragmento B imprime `[1, 2, 3]` (copia independiente con slicing).', isCorrect: true },
          { id: 'opt-3', text: 'El Fragmento B lanza TypeError porque `[:]` solo es válido en cadenas de texto.', isCorrect: false },
          { id: 'opt-4', text: 'Ambos fragmentos producen `[1, 2, 3]`.', isCorrect: false }
        ],
        explanation: 'En Python las listas son mutables. En el Fragmento A, `lista2 = lista1` crea un alias que apunta a la misma lista en memoria. En el Fragmento B, `lista1[:]` crea una copia superficial nueva e independiente, por lo que modificar `lista2` no altera `lista1`.',
        concepts: ['mutabilidad', 'alias vs copia', 'slicing [:]', 'listas'],
        tags: ['comparación', 'listas', 'referencia', 'pcep-3.1'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA I: TRAZADO DE ESTADOS Y MEMORIA (state_tracing)
  // =========================================================================
  {
    id: 'state-dict-mutation',
    pcepObjective: '3.3',
    family: 'state_tracing',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Diccionarios',
    subtopic: 'Evolución de claves y valores en diccionarios',
    generate: () => {
      const initAge = Math.floor(Math.random() * 5) + 20;
      const finalAge = initAge + 1;

      return {
        id: `gen-state-dict-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Trazado de Estados: Mutación y Acceso en Diccionarios',
        section: 3,
        sectionTitle: 'Sección 3 — Colecciones de Datos',
        topic: 'Diccionarios',
        subtopic: 'Asignación, modificación y len() en diccionarios',
        pcepObjective: '3.3',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        cognitiveFamily: 'state_tracing',
        statement: 'Rastrea los cambios en el diccionario `alumno` tras cada instrucción. ¿Cuál es la salida final?',
        codeSnippet: `alumno = {"nombre": "Ana", "edad": ${initAge}}\nalumno["curso"] = "Python"\nalumno["edad"] = ${finalAge}\n\nprint(len(alumno), alumno["edad"])`,
        expectedOutput: `3 ${finalAge}`,
        explanation: 'El diccionario comienza con 2 claves. Luego se agrega una tercera clave ("curso") y se actualiza el valor de "edad". Por lo tanto, `len(alumno)` es 3 y `alumno["edad"]` es ' + finalAge + '.',
        concepts: ['diccionarios', 'mutabilidad', 'claves duplicadas', 'len()'],
        tags: ['trazado', 'diccionarios', 'pcep-3.3'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // =========================================================================
  // FAMILIA J: PROBLEMAS CONTEXTUALIZADOS (contextualized_problem)
  // =========================================================================
  {
    id: 'context-ecommerce-shipping',
    pcepObjective: '2.1',
    family: 'contextualized_problem',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Sentencias Condicionales',
    subtopic: 'Lógica de negocio: Tarifa de envío con umbral de gratuidad',
    generate: () => {
      const cart = Math.floor(Math.random() * 40) + 40; // 40 a 79
      const isFree = cart >= 60;
      const total = isFree ? cart : cart + 10;

      return {
        id: `gen-ctx-shipping-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: 'Problema Contextualizado: Reglas de Envío en Comercio Electrónico',
        section: 2,
        sectionTitle: 'Sección 2 — Flujo de Control',
        topic: 'Sentencias Condicionales',
        subtopic: 'Condicional if-else aplicado a compras',
        pcepObjective: '2.1',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        cognitiveFamily: 'contextualized_problem',
        statement: 'Una tienda online ofrece envío gratuito para pedidos de 60 € o más; de lo contrario, el envío cuesta 10 €.\n\n¿Cuál es el total impreso por el sistema?',
        codeSnippet: `importe = ${cart}\nif importe >= 60:\n    costo_envio = 0\nelse:\n    costo_envio = 10\n\ntotal = importe + costo_envio\nprint("Total a pagar:", total)`,
        expectedOutput: `Total a pagar: ${total}`,
        explanation: `Como el importe es ${cart} € (${isFree ? '>= 60' : '< 60'}), el costo de envío es ${isFree ? '0 €' : '10 €'}. El total facturado resulta ${total} €.`,
        concepts: ['if-else', 'lógica de negocio', 'operadores aritméticos'],
        tags: ['contextualizado', 'condicionales', 'pcep-2.1'],
        isGenerated: true,
        isActive: true
      };
    }
  }
];

export class ExerciseGenerator {
  /**
   * Genera una variante garantizando pertenencia a una familia cognitiva específica
   * o filtrada por objetivo PCEP.
   */
  public static generateVariant(objective?: PCEPObjectiveCode, family?: CognitiveFamilyId): Exercise {
    let pool = TEMPLATES;

    if (objective) {
      const byObj = pool.filter(t => t.pcepObjective === objective);
      if (byObj.length > 0) pool = byObj;
    }

    if (family) {
      const byFam = pool.filter(t => t.family === family);
      if (byFam.length > 0) pool = byFam;
    }

    const selected = pool[Math.floor(Math.random() * pool.length)];
    return selected.generate();
  }

  /**
   * Genera un lote de ejercicios asegurando diversidad estructural entre ellos.
   */
  public static generateBatch(count: number, objective?: PCEPObjectiveCode): Exercise[] {
    const list: Exercise[] = [];
    const usedFamilies = new Set<string>();

    for (let i = 0; i < count; i++) {
      // Intentar variar las familias cognitivas en el lote
      const availableTemplates = objective
        ? TEMPLATES.filter(t => t.pcepObjective === objective)
        : TEMPLATES;

      const unused = availableTemplates.filter(t => !usedFamilies.has(t.family));
      const pool = unused.length > 0 ? unused : availableTemplates;

      const template = pool[Math.floor(Math.random() * pool.length)];
      usedFamilies.add(template.family);
      list.push(template.generate());
    }

    return list;
  }

  /**
   * Devuelve las familias cognitivas soportadas para un objetivo curricular.
   */
  public static getSupportedFamiliesForObjective(objective: PCEPObjectiveCode): CognitiveFamilyId[] {
    const families = TEMPLATES
      .filter(t => t.pcepObjective === objective)
      .map(t => t.family);
    return Array.from(new Set(families));
  }
}

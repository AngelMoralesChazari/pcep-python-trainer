import { Exercise, PCEPObjectiveCode } from '../types';

interface ParametricTemplate {
  id: string;
  pcepObjective: PCEPObjectiveCode;
  topic: string;
  subtopic: string;
  generate: () => Exercise;
}

const templates: ParametricTemplate[] = [
  // 1. Operador división entera y módulo (Objetivo 1.4)
  {
    id: 'tpl-op-floordiv-modulo',
    pcepObjective: '1.4',
    topic: 'Operadores y tipos de datos',
    subtopic: 'numeric operators: //, %',
    generate: () => {
      const b = Math.floor(Math.random() * 5) + 3; // 3 a 7
      const multiplier = Math.floor(Math.random() * 6) + 3; // 3 a 8
      const remainder = Math.floor(Math.random() * (b - 1)) + 1; // 1 a b-1
      const a = (multiplier * b) + remainder;

      const quotient = Math.floor(a / b);
      const mod = a % b;

      return {
        id: `gen-floordiv-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: `Variante: División entera y módulo (${a} y ${b})`,
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Operadores y tipos de datos',
        subtopic: 'División entera (//) y residuo (%)',
        pcepObjective: '1.4',
        difficulty: 'basic',
        type: 'output_prediction',
        statement: 'Determina la salida exacta en consola tras ejecutar las siguientes dos instrucciones.',
        codeSnippet: `x = ${a}\ny = ${b}\n\nprint(x // y)\nprint(x % y)`,
        expectedOutput: `${quotient}\n${mod}`,
        explanation: `En Python, el operador '//' efectúa una división entera truncando la parte fraccionaria (floor division): ${a} // ${b} = ${quotient}. El operador '%' calcula el residuo o módulo: ${a} % ${b} = ${mod}. Ambos devuelven números enteros.`,
        concepts: ['//', '%', 'floor division', 'modulo'],
        tags: ['operadores', 'aritmética', 'pcep-1.4'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // 2. Parámetros sep y end de print (Objetivo 1.5)
  {
    id: 'tpl-print-sep-end',
    pcepObjective: '1.5',
    topic: 'Entrada y salida por consola',
    subtopic: 'sep= y end=',
    generate: () => {
      const seps = ['-', '*', '#', '::', ''];
      const ends = ['...', '!', ' ', ''];
      const sep = seps[Math.floor(Math.random() * seps.length)];
      const end = ends[Math.floor(Math.random() * ends.length)];
      const v1 = Math.floor(Math.random() * 10) + 1;
      const v2 = Math.floor(Math.random() * 10) + 1;
      const v3 = Math.floor(Math.random() * 10) + 1;

      const line1 = `${v1}${sep}${v2}${sep}${v3}${end}`;
      const line2 = `${v1 + v2}`;
      const expected = `${line1}${line2}`;

      return {
        id: `gen-print-sep-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: `Variante: Control de salida con sep y end`,
        section: 1,
        sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
        topic: 'Entrada y salida por consola',
        subtopic: 'print(), sep= y end=',
        pcepObjective: '1.5',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        statement: '¿Cuál es la salida producida en la consola por este código?',
        codeSnippet: `print(${v1}, ${v2}, ${v3}, sep='${sep}', end='${end}')\nprint(${v1 + v2})`,
        expectedOutput: expected,
        explanation: `El argumento con nombre 'sep=' define la cadena separadora entre los elementos pasados a print (en este caso '${sep}'). El argumento 'end=' reemplaza el salto de línea predeterminado '\\n' con '${end}'. Por ello, el segundo print continúa inmediatamente después sin saltar de línea a menos que end incluya '\\n'.`,
        concepts: ['print()', 'sep=', 'end='],
        tags: ['io', 'consola', 'pcep-1.5'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // 3. Slicing con pasos e índices (Objetivo 3.1)
  {
    id: 'tpl-list-slicing-step',
    pcepObjective: '3.1',
    topic: 'Colecciones de Datos',
    subtopic: 'List slicing',
    generate: () => {
      const baseList = [10, 20, 30, 40, 50, 60, 70, 80].slice(0, 6 + Math.floor(Math.random() * 2));
      const start = Math.floor(Math.random() * 2); // 0 o 1
      const stop = baseList.length - Math.floor(Math.random() * 2);
      const step = 2;

      const sliced = [];
      for (let i = start; i < stop; i += step) {
        sliced.push(baseList[i]);
      }
      const expectedStr = `[${sliced.join(', ')}]`;

      return {
        id: `gen-slice-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: `Variante: Rebanado de listas (slicing con step ${step})`,
        section: 3,
        sectionTitle: 'Sección 3 — Colecciones de Datos',
        topic: 'Listas',
        subtopic: 'Indexing y Slicing',
        pcepObjective: '3.1',
        difficulty: 'intermediate',
        type: 'output_prediction',
        statement: '¿Qué imprimirá exactamente el intérprete de Python al ejecutar este rebanado?',
        codeSnippet: `numeros = [${baseList.join(', ')}]\nsublista = numeros[${start}:${stop}:${step}]\nprint(sublista)`,
        expectedOutput: expectedStr,
        explanation: `La sintaxis de corte (slicing) [start:stop:step] toma elementos iniciando en el índice ${start} hasta antes de ${stop}, avanzando de ${step} en ${step}. Por lo tanto, selecciona los elementos con índices: ${sliced.map((_, idx) => start + (idx * step)).join(', ')}, resultando en ${expectedStr}.`,
        concepts: ['list slicing', 'step', 'secuencias'],
        tags: ['listas', 'slicing', 'pcep-3.1'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // 4. Bucle for con range() y cláusula else (Objetivo 2.2)
  {
    id: 'tpl-for-range-else',
    pcepObjective: '2.2',
    topic: 'Flujo de Control',
    subtopic: 'for-else y range()',
    generate: () => {
      const limit = Math.floor(Math.random() * 4) + 3; // 3 a 6
      const breakAt = limit + 2; // No se activa el break, se ejecuta el else
      let total = 0;
      for (let i = 1; i < limit; i++) {
        total += i;
      }
      total += 10; // suma del bloque else

      return {
        id: `gen-forelse-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: `Variante: Bucle for con cláusula else`,
        section: 2,
        sectionTitle: 'Sección 2 — Flujo de Control',
        topic: 'Iteraciones',
        subtopic: 'for-else y break',
        pcepObjective: '2.2',
        difficulty: 'intermediate',
        type: 'output_prediction',
        statement: 'Analiza el flujo del siguiente bucle y predice el valor final de la variable suma.',
        codeSnippet: `suma = 0\nfor i in range(1, ${limit}):\n    if i == ${breakAt}:\n        break\n    suma += i\nelse:\n    suma += 10\n\nprint(suma)`,
        expectedOutput: `${total}`,
        explanation: `En Python, el bloque 'else' de un bucle 'for' o 'while' se ejecuta ÚNICAMENTE cuando el bucle finaliza su iteración de forma natural (sin haber sido interrumpido por un 'break'). Como 'i' nunca alcanza ${breakAt}, el bucle completa su recorrido y la rama 'else' suma 10 al total acumulado.`,
        concepts: ['for-else', 'range()', 'break'],
        tags: ['bucles', 'flujo', 'pcep-2.2'],
        isGenerated: true,
        isActive: true
      };
    }
  },

  // 5. Diccionarios: modificación y claves inexistentes (Objetivo 3.3)
  {
    id: 'tpl-dict-keys-values',
    pcepObjective: '3.3',
    topic: 'Colecciones de Datos',
    subtopic: 'Diccionarios: actualización',
    generate: () => {
      const initialA = Math.floor(Math.random() * 10) + 1;
      const initialB = Math.floor(Math.random() * 10) + 1;
      const updateA = Math.floor(Math.random() * 20) + 10;

      const finalVal = updateA + initialB;

      return {
        id: `gen-dict-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: `Variante: Actualización de valores en diccionarios`,
        section: 3,
        sectionTitle: 'Sección 3 — Colecciones de Datos',
        topic: 'Diccionarios',
        subtopic: 'Mutabilidad y acceso por clave',
        pcepObjective: '3.3',
        difficulty: 'basic_plus',
        type: 'output_prediction',
        statement: '¿Cuál es la salida de este código que modifica un diccionario?',
        codeSnippet: `datos = {'x': ${initialA}, 'y': ${initialB}}\ndatos['x'] = ${updateA}\n\nprint(datos['x'] + datos['y'])`,
        expectedOutput: `${finalVal}`,
        explanation: `Los diccionarios en Python son mutables. Asignar 'datos["x"] = ${updateA}' sobrescribe el valor previo (${initialA}). Al sumar datos['x'] (${updateA}) y datos['y'] (${initialB}) se obtiene ${finalVal}.`,
        concepts: ['dictionaries', 'mutability', 'key access'],
        tags: ['diccionarios', 'colecciones', 'pcep-3.3'],
        isGenerated: true,
        isActive: true
      };
    }
  }
];

export class ExerciseGenerator {
  /**
   * Genera una nueva variante no vista previamente respetando un objetivo específico
   */
  public static generateVariant(objective?: PCEPObjectiveCode): Exercise {
    let available = templates;
    if (objective) {
      const filtered = templates.filter(t => t.pcepObjective === objective);
      if (filtered.length > 0) available = filtered;
    }

    const tpl = available[Math.floor(Math.random() * available.length)];
    return tpl.generate();
  }

  /**
   * Genera un lote de variantes para alimentar la base de práctica masiva
   */
  public static generateBatch(count: number, objective?: PCEPObjectiveCode): Exercise[] {
    const list: Exercise[] = [];
    for (let i = 0; i < count; i++) {
      list.push(this.generateVariant(objective));
    }
    return list;
  }
}

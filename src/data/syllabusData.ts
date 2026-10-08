import { PCEPSection } from '../types/pcep';

export const PCEP_SYLLABUS: PCEPSection[] = [
  {
    id: 1,
    title: 'Sección 1 — Fundamentos de Programación y Python',
    weightPercentage: 18,
    description: 'Términos fundamentales, compilación vs interpretación, léxico, sintaxis, literales, operadores, tipos de datos y E/S de consola.',
    objectives: [
      {
        code: '1.1',
        sectionId: 1,
        title: 'Términos y definiciones fundamentales',
        description: 'Conceptos clave sobre ejecución, arquitectura de lenguajes e interpretación.',
        subtopics: ['interpreting / interpreter', 'compilation / compiler', 'lexis', 'syntax', 'semantics']
      },
      {
        code: '1.2',
        sectionId: 1,
        title: 'Lógica y estructura de Python',
        description: 'Estructuración de scripts, sangría, palabras reservadas y comentarios.',
        subtopics: ['keywords', 'instructions', 'indentation', 'comments']
      },
      {
        code: '1.3',
        sectionId: 1,
        title: 'Literales y variables',
        description: 'Sistemas numéricos, tipos de literales, convenciones de nombres y PEP-8.',
        subtopics: [
          'Boolean', 'integers', 'floating-point numbers', 'scientific notation',
          'strings', 'binary (0b)', 'octal (0o)', 'decimal', 'hexadecimal (0x)',
          'variables', 'naming conventions', 'PEP-8'
        ]
      },
      {
        code: '1.4',
        sectionId: 1,
        title: 'Operadores y tipos de datos',
        description: 'Operadores aritméticos, cadenas, asignación compuesta, bitwise, booleanos y precedencia.',
        subtopics: [
          'numeric operators: **, *, /, %, //, +, -',
          'string operators: *, +',
          'assignment & shortcut operators',
          'unary & binary operators',
          'operator precedence & binding',
          'bitwise operators: ~, &, ^, |, <<, >>',
          'Boolean operators: not, and, or',
          'relational operators: ==, !=, >, >=, <, <=',
          'floating-point accuracy & type casting'
        ]
      },
      {
        code: '1.5',
        sectionId: 1,
        title: 'Entrada y salida por consola',
        description: 'Parámetros sep y end de print, captura con input y conversiones int/float.',
        subtopics: ['print()', 'input()', 'sep=', 'end=', 'int()', 'float()']
      }
    ]
  },
  {
    id: 2,
    title: 'Sección 2 — Flujo de Control',
    weightPercentage: 29,
    description: 'Toma de decisiones con condicionales, bucles while y for, ramificaciones else y sentencias de control.',
    objectives: [
      {
        code: '2.1',
        sectionId: 2,
        title: 'Sentencias condicionales',
        description: 'Estructuras de decisión if, if-else, if-elif-else y condiciones compuestas/anidadas.',
        subtopics: ['if', 'if-else', 'if-elif', 'if-elif-else', 'múltiples condiciones', 'condiciones anidadas']
      },
      {
        code: '2.2',
        sectionId: 2,
        title: 'Iteraciones y bucles',
        description: 'Bucles while y for, función range(), break, continue, y cláusulas else en loops.',
        subtopics: [
          'pass', 'while', 'for', 'range()', 'in',
          'iteración de secuencias', 'while-else', 'for-else',
          'loops anidados', 'condiciones dentro de loops', 'break', 'continue'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Sección 3 — Colecciones de Datos',
    weightPercentage: 25,
    description: 'Estructuras de datos compuestas: Listas, Tuplas, Diccionarios y manejo avanzado de cadenas.',
    objectives: [
      {
        code: '3.1',
        sectionId: 3,
        title: 'Listas',
        description: 'Indexación, slicing, métodos mutables, comprensión de listas, matrices multidimensionales y clonado.',
        subtopics: [
          'construcción', 'vectores', 'indexing & slicing', 'len()',
          'append()', 'insert()', 'index()', 'sorted() & sort()', 'del',
          'iteración', 'in / not in', 'list comprehensions', 'copying / cloning',
          'listas anidadas, matrices y cubos'
        ]
      },
      {
        code: '3.2',
        sectionId: 3,
        title: 'Tuplas',
        description: 'Inmutabilidad, sintaxis de construcción, indexing, slicing y colecciones mixtas.',
        subtopics: [
          'construcción', 'indexing & slicing', 'inmutabilidad',
          'tuples vs lists', 'listas dentro de tuples', 'tuples dentro de listas'
        ]
      },
      {
        code: '3.3',
        sectionId: 3,
        title: 'Diccionarios',
        description: 'Estructura clave-valor, mutabilidad, métodos keys(), values(), items() y verificación de existencia.',
        subtopics: [
          'construcción', 'indexing', 'agregar y eliminar claves',
          'iteración', 'keys()', 'values()', 'items()', 'in / not in'
        ]
      },
      {
        code: '3.4',
        sectionId: 3,
        title: 'Cadenas (Strings)',
        description: 'Secuencias inmutables, caracteres de escape, multilínea, slicing y métodos comunes.',
        subtopics: [
          'construcción', 'indexing & slicing', 'inmutabilidad',
          'escape character \\', 'comillas y apóstrofes', 'strings multilínea',
          'funciones básicas', 'métodos de cadena'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Sección 4 — Funciones y Excepciones',
    weightPercentage: 28,
    description: 'Definición e invocación de funciones, parámetros, alcance léxico, jerarquía de excepciones y try-except.',
    objectives: [
      {
        code: '4.1',
        sectionId: 4,
        title: 'Funciones',
        description: 'Definición con def, retorno de valores con return, generadores básicos y recursión.',
        subtopics: [
          'definición', 'invocación', 'funciones de usuario',
          'generators básicos', 'return', 'resultados', 'None', 'recursion'
        ]
      },
      {
        code: '4.2',
        sectionId: 4,
        title: 'Entorno y alcance de funciones',
        description: 'Argumentos posicionales vs keyword, parámetros por defecto, scopes y la palabra reservada global.',
        subtopics: [
          'parameters vs arguments', 'positional arguments', 'keyword arguments',
          'mixed arguments', 'default parameters', 'scopes', 'shadowing', 'global'
        ]
      },
      {
        code: '4.3',
        sectionId: 4,
        title: 'Excepciones integradas (Built-in)',
        description: 'Árbol jerárquico de excepciones estándar de Python requeridas por el examen PCEP.',
        subtopics: [
          'BaseException', 'Exception', 'SystemExit', 'KeyboardInterrupt',
          'ArithmeticError', 'LookupError', 'IndexError', 'KeyError',
          'TypeError', 'ValueError'
        ]
      },
      {
        code: '4.4',
        sectionId: 4,
        title: 'Manejo de excepciones (try - except)',
        description: 'Bloques de captura, captura múltiple, orden jerárquico y propagación entre funciones.',
        subtopics: [
          'try', 'except', 'except Exception', 'orden de except',
          'propagación de excepciones', 'delegación del manejo'
        ]
      }
    ]
  }
];

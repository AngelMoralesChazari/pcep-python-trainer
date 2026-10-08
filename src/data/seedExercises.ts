import { Exercise } from '../types';

export const SEED_EXERCISES: Exercise[] = [
  // ==================== SECCIÓN 1 ====================
  // 1.1 Teoría: Interpretación vs Compilación
  {
    id: 'pcep-1-1-theory-1',
    title: 'Naturaleza del Intérprete en Python',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Términos y definiciones fundamentales',
    subtopic: 'interpreting / interpreter',
    pcepObjective: '1.1',
    difficulty: 'basic',
    type: 'theory',
    statement: '¿Cuál de las siguientes afirmaciones describe de manera más precisa cómo un intérprete ejecuta un programa en Python?',
    options: [
      { id: 'opt-1', text: 'Convierte todo el código fuente en lenguaje máquina de una sola vez antes de ejecutar la primera instrucción.', isCorrect: false },
      { id: 'opt-2', text: 'Lee, analiza y ejecuta el código instrucción por instrucción en tiempo de ejecución.', isCorrect: true },
      { id: 'opt-3', text: 'Requiere que el sistema operativo enlace manualmente los archivos binarios compilados.', isCorrect: false },
      { id: 'opt-4', text: 'Elimina automáticamente todos los errores sintácticos antes de iniciar el programa.', isCorrect: false }
    ],
    explanation: 'A diferencia de un compilador puro (que traduce todo el código de antemano), un intérprete traduce y ejecuta el programa instrucción por instrucción. Si existe un error léxico o sintáctico posterior, se manifestará cuando el flujo de ejecución alcance dicha línea.',
    concepts: ['intérprete', 'compilación', 'tiempo de ejecución'],
    tags: ['fundamentos', 'pcep-1.1', 'teoría'],
    isActive: true
  },

  // 1.2 Análisis de código: Comentarios e Indentación
  {
    id: 'pcep-1-2-analysis-1',
    title: 'Indentación y estructura léxica',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Lógica y estructura de Python',
    subtopic: 'indentation & syntax',
    pcepObjective: '1.2',
    difficulty: 'basic',
    type: 'code_analysis',
    statement: 'Analiza el siguiente fragmento de código. ¿Qué ocurrirá al intentar ejecutarlo?',
    codeSnippet: 'print("Inicio")\n  print("Paso 1")',
    options: [
      { id: 'opt-1', text: 'Imprime "Inicio" y luego "Paso 1".', isCorrect: false },
      { id: 'opt-2', text: 'Lanza una excepción IndentationError: unexpected indent.', isCorrect: true },
      { id: 'opt-3', text: 'Imprime ambas cadenas en la misma línea con dos espacios de separación.', isCorrect: false },
      { id: 'opt-4', text: 'Lanza un SyntaxError genérico sin especificar el tipo de sangría.', isCorrect: false }
    ],
    explanation: 'En Python, la indentación delimita bloques de código. Una instrucción en el nivel superior que tenga espacios iniciales no justificados provoca de inmediato un IndentationError.',
    concepts: ['indentation', 'IndentationError', 'bloques'],
    tags: ['estructura', 'pcep-1.2', 'análisis'],
    isActive: true
  },

  // 1.3 Predicción de salida: Literales numéricos y sistemas de numeración
  {
    id: 'pcep-1-3-pred-1',
    title: 'Literales Octales y Hexadecimales',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Literales y variables',
    subtopic: 'octal (0o) y hexadecimal (0x)',
    pcepObjective: '1.3',
    difficulty: 'basic_plus',
    type: 'output_prediction',
    statement: '¿Cuál es la salida de la siguiente operación con literales de distintas bases numéricas?',
    codeSnippet: 'a = 0o12\nb = 0x10\nprint(a + b)',
    expectedOutput: '26',
    explanation: 'El prefijo 0o denota base octal (base 8): 0o12 = (1 * 8^1) + (2 * 8^0) = 8 + 2 = 10 en decimal. El prefijo 0x denota hexadecimal (base 16): 0x10 = (1 * 16^1) + (0 * 16^0) = 16. La suma en base decimal es 10 + 16 = 26.',
    concepts: ['0o (octal)', '0x (hexadecimal)', 'literales'],
    tags: ['literales', 'pcep-1.3', 'predicción'],
    isActive: true
  },

  // 1.4 Predicción de salida: Precedencia y asociatividad de operadores
  {
    id: 'pcep-1-4-pred-1',
    title: 'Precedencia y Binding de Potencias',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Operadores y tipos de datos',
    subtopic: 'operator precedence & right binding (**)',
    pcepObjective: '1.4',
    difficulty: 'intermediate',
    type: 'output_prediction',
    statement: '¿Cuál es el resultado exacto en consola tras evaluar la siguiente expresión?',
    codeSnippet: 'print(2 ** 2 ** 3)',
    expectedOutput: '256',
    explanation: 'A diferencia de la mayoría de los operadores binarios que se asocian de izquierda a derecha (left-sided binding), el operador de exponenciación (**) tiene asociatividad de DERECHA a IZQUIERDA (right-sided binding). Por ende, se evalúa 2 ** (2 ** 3) = 2 ** 8 = 256. (No (2 ** 2) ** 3 que daría 64).',
    concepts: ['**', 'right-sided binding', 'precedencia'],
    tags: ['operadores', 'pcep-1.4', 'predicción'],
    isActive: true
  },

  // 1.5 Detección y corrección de error: input() tipo str
  {
    id: 'pcep-1-5-debug-1',
    title: 'Tipo de dato retornado por input()',
    section: 1,
    sectionTitle: 'Sección 1 — Fundamentos de Programación y Python',
    topic: 'Entrada y salida por consola',
    subtopic: 'input() y type casting int()',
    pcepObjective: '1.5',
    difficulty: 'basic',
    type: 'debugging',
    statement: 'El siguiente código pretende recibir dos números y mostrar su suma numérica. Sin embargo, si el usuario ingresa 5 y 3, muestra "53". Corrige el código para que realice la suma aritmética correcta.',
    starterCode: 'num1 = input()\nnum2 = input()\n\nresultado = num1 + num2\nprint(resultado)',
    acceptableSolutions: [
      'num1 = int(input())\nnum2 = int(input())\nresultado = num1 + num2\nprint(resultado)',
      'num1 = input()\nnum2 = input()\nresultado = int(num1) + int(num2)\nprint(resultado)'
    ],
    explanation: 'La función nativa input() siempre devuelve una cadena de texto (str). Al usar el operador "+" entre dos cadenas, Python efectúa concatenación en lugar de suma. Es necesario realizar una conversión explícita (type casting) mediante int() o float().',
    solutionCode: 'num1 = int(input())\nnum2 = int(input())\nresultado = num1 + num2\nprint(resultado)',
    concepts: ['input()', 'str concatenation', 'int() conversion'],
    tags: ['io', 'debugging', 'pcep-1.5'],
    isActive: true
  },

  // ==================== SECCIÓN 2 ====================
  // 2.1 Análisis de código: Condiciones anidadas y cortocircuito
  {
    id: 'pcep-2-1-analysis-1',
    title: 'Evaluación de Cortocircuito (Short-circuit evaluation)',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Sentencias condicionales',
    subtopic: 'Boolean operators: and, or',
    pcepObjective: '2.1',
    difficulty: 'intermediate',
    type: 'code_analysis',
    statement: '¿Cuál es la salida de este código que incluye división entre cero?',
    codeSnippet: 'x = 0\nif x != 0 and 10 / x > 1:\n    print("Paso")\nelse:\n    print("Evitado")',
    options: [
      { id: 'opt-1', text: 'Lanza ZeroDivisionError.', isCorrect: false },
      { id: 'opt-2', text: 'Imprime "Paso".', isCorrect: false },
      { id: 'opt-3', text: 'Imprime "Evitado".', isCorrect: true },
      { id: 'opt-4', text: 'Error de sintaxis por operador compuesto.', isCorrect: false }
    ],
    explanation: 'Python evalúa las expresiones booleanas mediante cortocircuito (short-circuiting). En una expresión "A and B", si A es False (x != 0 es False), Python nunca llega a evaluar B. Por lo tanto, no se produce ZeroDivisionError y el flujo entra en el else, imprimiendo "Evitado".',
    concepts: ['and', 'short-circuit', 'ZeroDivisionError prevention'],
    tags: ['condicionales', 'pcep-2.1', 'análisis'],
    isActive: true
  },

  // 2.2 Completar código: bucle con continue
  {
    id: 'pcep-2-2-complete-1',
    title: 'Saltar iteraciones con continue',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Iteraciones y bucles',
    subtopic: 'continue y range()',
    pcepObjective: '2.2',
    difficulty: 'basic_plus',
    type: 'code_completion',
    statement: 'Completa la línea marcada con "____" para que el bucle imprima únicamente los números impares comprendidos entre 1 y 6.',
    starterCode: 'for i in range(1, 7):\n    if i % 2 == 0:\n        ____\n    print(i)',
    acceptableSolutions: [
      'continue'
    ],
    explanation: 'La instrucción "continue" detiene inmediatamente la iteración en curso y traslada el control a la siguiente iteración del bucle. Cuando i es par (i % 2 == 0), "continue" omite la línea print(i).',
    solutionCode: 'for i in range(1, 7):\n    if i % 2 == 0:\n        continue\n    print(i)',
    concepts: ['continue', 'range()', 'bucles'],
    tags: ['bucles', 'pcep-2.2', 'completar'],
    isActive: true
  },

  // 2.2 Programación: Sumatoria de pares (Juez Online)
  {
    id: 'pcep-2-2-prog-1',
    title: 'Suma de Números Pares',
    section: 2,
    sectionTitle: 'Sección 2 — Flujo de Control',
    topic: 'Iteraciones y bucles',
    subtopic: 'range() y acumuladores',
    pcepObjective: '2.2',
    difficulty: 'intermediate',
    type: 'programming',
    statement: 'Escribe un programa que lea un número entero n de la entrada estándar y muestre la suma de todos los números pares en el rango de 1 a n (ambos inclusive).',
    starterCode: '# Lee n e imprime la suma de pares de 1 a n\nn = int(input())\n\n# Tu código aquí\n',
    testCases: [
      { input: '10\n', expectedOutput: '30\n', isHidden: false, description: '2 + 4 + 6 + 8 + 10 = 30' },
      { input: '5\n', expectedOutput: '6\n', isHidden: false, description: '2 + 4 = 6' },
      { input: '1\n', expectedOutput: '0\n', isHidden: true, description: 'Sin pares en el rango' },
      { input: '20\n', expectedOutput: '110\n', isHidden: true }
    ],
    solutionCode: 'n = int(input())\nsuma = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0:\n        suma += i\nprint(suma)',
    explanation: 'Se itera con range(1, n + 1). Mediante el operador módulo (i % 2 == 0) se verifica la paridad y se acumula el valor en una variable entera.',
    concepts: ['for', 'range()', 'módulo %', 'acumulador'],
    tags: ['programación', 'pcep-2.2', 'juez'],
    isActive: true
  },

  // ==================== SECCIÓN 3 ====================
  // 3.1 Análisis de código: Clonado vs Referencia en Listas
  {
    id: 'pcep-3-1-analysis-1',
    title: 'Asignación por Referencia vs Copia ([:])',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Listas',
    subtopic: 'copying / cloning',
    pcepObjective: '3.1',
    difficulty: 'intermediate',
    type: 'code_analysis',
    statement: '¿Cuál es la salida impresa por este código sobre asignación de listas?',
    codeSnippet: 'lista1 = [1, 2, 3]\nlista2 = lista1\nlista3 = lista1[:]\n\nlista2[0] = 99\nlista3[1] = 88\n\nprint(lista1[0], lista1[1])',
    options: [
      { id: 'opt-1', text: '1 2', isCorrect: false },
      { id: 'opt-2', text: '99 2', isCorrect: true },
      { id: 'opt-3', text: '99 88', isCorrect: false },
      { id: 'opt-4', text: '1 88', isCorrect: false }
    ],
    explanation: 'lista2 = lista1 copia la referencia al mismo objeto en memoria; por lo tanto, modificar lista2[0] altera también lista1[0] (pasa a valer 99). Por el contrario, lista3 = lista1[:] genera una copia superficial independiente (slice copy), por lo que alterar lista3[1] no afecta a lista1[1] (sigue valiendo 2).',
    concepts: ['referencias', 'clonado con slice [:]', 'mutabilidad'],
    tags: ['listas', 'pcep-3.1', 'análisis'],
    isActive: true
  },

  // 3.2 Predicción de salida: Inmutabilidad de Tuplas
  {
    id: 'pcep-3-2-pred-1',
    title: 'Inmutabilidad de Tuplas y asignación de elementos',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Tuplas',
    subtopic: 'inmutabilidad',
    pcepObjective: '3.2',
    difficulty: 'basic',
    type: 'code_analysis',
    statement: '¿Qué excepción se genera al intentar ejecutar la segunda línea del siguiente script?',
    codeSnippet: 't = (1, 2, 3)\nt[0] = 5',
    options: [
      { id: 'opt-1', text: 'IndexError', isCorrect: false },
      { id: 'opt-2', text: 'ValueError', isCorrect: false },
      { id: 'opt-3', text: 'TypeError: \'tuple\' object does not support item assignment', isCorrect: true },
      { id: 'opt-4', text: 'KeyError', isCorrect: false }
    ],
    explanation: 'Las tuplas son secuencias inmutables. A diferencia de las listas, no admiten modificación, asignación ni eliminación de sus elementos tras la creación. Intentar asignar t[0] = 5 lanza TypeError.',
    concepts: ['tuples', 'inmutabilidad', 'TypeError'],
    tags: ['tuplas', 'pcep-3.2', 'análisis'],
    isActive: true
  },

  // 3.3 Completar código: Iterar items de diccionario
  {
    id: 'pcep-3-3-complete-1',
    title: 'Recorrer Claves y Valores con items()',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Diccionarios',
    subtopic: 'items() y desempacado',
    pcepObjective: '3.3',
    difficulty: 'intermediate',
    type: 'code_completion',
    statement: 'Completa el método necesario en "____" para iterar simultáneamente por la clave y el valor del diccionario.',
    starterCode: 'edades = {"Ana": 20, "Luis": 25}\n\nfor nombre, edad in edades.____():\n    print(nombre, edad)',
    acceptableSolutions: [
      'items'
    ],
    explanation: 'El método .items() devuelve una vista de tuplas con los pares (clave, valor) del diccionario, permitiendo desempaquetar ambos elementos de manera directa en el bucle for.',
    solutionCode: 'edades = {"Ana": 20, "Luis": 25}\n\nfor nombre, edad in edades.items():\n    print(nombre, edad)',
    concepts: ['dict.items()', 'clave-valor', 'desempaquetado'],
    tags: ['diccionarios', 'pcep-3.3', 'completar'],
    isActive: true
  },

  // 3.4 Predicción de salida: Strings y Slicing con paso negativo
  {
    id: 'pcep-3-4-pred-1',
    title: 'Inversión de Cadena con Paso Negativo',
    section: 3,
    sectionTitle: 'Sección 3 — Colecciones de Datos',
    topic: 'Cadenas (Strings)',
    subtopic: 'slicing [::-1]',
    pcepObjective: '3.4',
    difficulty: 'basic_plus',
    type: 'output_prediction',
    statement: '¿Cuál es la salida exacta producida por el siguiente corte sobre la cadena?',
    codeSnippet: 'texto = "Python"\nprint(texto[::-1])',
    expectedOutput: 'nohtyP',
    explanation: 'La notación de rebanado [::-1] omite start y stop e indica un step de -1, lo que recorre la secuencia en orden inverso desde el final hasta el principio.',
    concepts: ['string slicing', 'step -1', 'inversión'],
    tags: ['strings', 'pcep-3.4', 'predicción'],
    isActive: true
  },

  // ==================== SECCIÓN 4 ====================
  // 4.1 Análisis: Retorno por defecto de una función sin return
  {
    id: 'pcep-4-1-analysis-1',
    title: 'Valor retornado por defecto (None)',
    section: 4,
    sectionTitle: 'Sección 4 — Funciones y Excepciones',
    topic: 'Funciones',
    subtopic: 'return y None',
    pcepObjective: '4.1',
    difficulty: 'basic',
    type: 'output_prediction',
    statement: '¿Qué imprime el siguiente programa al invocar una función sin instrucción return explícita?',
    codeSnippet: 'def saludar():\n    x = 10\n\nresultado = saludar()\nprint(resultado)',
    expectedOutput: 'None',
    explanation: 'En Python, toda función que no ejecuta un "return" con una expresión (o que ejecuta simplemente "return" vacío) retorna implícitamente el valor especial None.',
    concepts: ['None', 'return', 'funciones'],
    tags: ['funciones', 'pcep-4.1', 'predicción'],
    isActive: true
  },

  // 4.2 Análisis: Ámbito de variables y palabra clave global
  {
    id: 'pcep-4-2-analysis-1',
    title: 'Modificación del Ámbito Global con global',
    section: 4,
    sectionTitle: 'Sección 4 — Funciones y Excepciones',
    topic: 'Entorno y alcance de funciones',
    subtopic: 'scopes y global',
    pcepObjective: '4.2',
    difficulty: 'intermediate',
    type: 'output_prediction',
    statement: '¿Cuál es la salida de este código que hace uso de la palabra reservada global?',
    codeSnippet: 'contador = 5\n\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador)',
    expectedOutput: '6',
    explanation: 'Al declarar "global contador" dentro del cuerpo de la función, las asignaciones a "contador" afectan directamente a la variable del ámbito global en lugar de crear una variable local sombra (shadowing). Por ello, el valor pasa de 5 a 6.',
    concepts: ['global', 'scope', 'shadowing'],
    tags: ['funciones', 'pcep-4.2', 'predicción'],
    isActive: true
  },

  // 4.3 Teoría: Jerarquía de Excepciones integradas
  {
    id: 'pcep-4-3-theory-1',
    title: 'Árbol Jerárquico de Excepciones',
    section: 4,
    sectionTitle: 'Sección 4 — Funciones y Excepciones',
    topic: 'Excepciones integradas (Built-in)',
    subtopic: 'LookupError vs IndexError vs KeyError',
    pcepObjective: '4.3',
    difficulty: 'pcep_challenge',
    type: 'theory',
    statement: '¿Cuál de las siguientes afirmaciones sobre la jerarquía de excepciones estándar en Python es VERDADERA?',
    options: [
      { id: 'opt-1', text: 'IndexError hereda de KeyError.', isCorrect: false },
      { id: 'opt-2', text: 'Tanto IndexError como KeyError son subclases de LookupError.', isCorrect: true },
      { id: 'opt-3', text: 'ZeroDivisionError hereda directamente de ValueError.', isCorrect: false },
      { id: 'opt-4', text: 'ArithmeticError es una subclase de Exception pero no de BaseException.', isCorrect: false }
    ],
    explanation: 'En la jerarquía estándar de Python: BaseException -> Exception -> LookupError -> {IndexError, KeyError}. Por tanto, un bloque "except LookupError:" capturará tanto IndexError como KeyError.',
    concepts: ['LookupError', 'IndexError', 'KeyError', 'jerarquía'],
    tags: ['excepciones', 'pcep-4.3', 'teoría'],
    isActive: true
  },

  // 4.4 Análisis: Orden de bloques except
  {
    id: 'pcep-4-4-analysis-1',
    title: 'Orden de captura en try-except',
    section: 4,
    sectionTitle: 'Sección 4 — Funciones y Excepciones',
    topic: 'Manejo de excepciones (try - except)',
    subtopic: 'orden de except y propagación',
    pcepObjective: '4.4',
    difficulty: 'intermediate',
    type: 'output_prediction',
    statement: '¿Cuál será la salida tras capturar la excepción en el siguiente bloque estructurado?',
    codeSnippet: 'try:\n    lista = [10, 20]\n    print(lista[5])\nexcept LookupError:\n    print("Capturado por LookupError")\nexcept IndexError:\n    print("Capturado por IndexError")',
    expectedOutput: 'Capturado por LookupError',
    explanation: 'Como IndexError es una subclase de LookupError, el primer bloque except que coincida con la excepción levantada es el que se ejecutará. Dado que LookupError está posicionado primero, absorbe la excepción antes de que pueda alcanzarse la cláusula IndexError.',
    concepts: ['try-except', 'orden de except', 'LookupError'],
    tags: ['excepciones', 'pcep-4.4', 'predicción'],
    isActive: true
  }
];

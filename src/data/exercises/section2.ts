import { Exercise } from '../../types';

export const SECTION_2_EXERCISES: Exercise[] = [
  {
    "id": "pcep-s2-001",
    "title": "Comparación de Igualdad Numérica (==)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador ==",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `5 == 5.0` en Python?",
    "explanation": "En Python, `==` compara valor numérico: el entero 5 y el flotante 5.0 tienen el mismo valor numérico, por lo que evalúa a True.",
    "concepts": [
      "==",
      "igualdad de valor",
      "float vs int"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(5 == 5.0)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-002",
    "title": "Operador de Desigualdad (!=)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador !=",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`!=` verifica si los operandos son distintos. 10 es diferente de 20, por lo que devuelve True.",
    "concepts": [
      "!=",
      "desigualdad"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(10 != 20)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-003",
    "title": "Estructura if Simple",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Bloque if",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Como x > 5 es True (10 > 5), el bloque if se ejecuta imprimiendo 'Mayor'. Luego el print exterior se ejecuta siempre.",
    "concepts": [
      "if",
      "flujo de ejecución"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\nif x > 5:\n    print('Mayor')\nprint('Fin')",
    "expectedOutput": "Mayor\nFin"
  },
  {
    "id": "pcep-s2-004",
    "title": "Estructura if-else",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "if-else",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "x > 10 (8 > 10) es False, por lo que el flujo toma la rama else imprimiendo 'Menor o igual'.",
    "concepts": [
      "if-else",
      "rama else"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 8\nif x > 10:\n    print('Mayor')\nelse:\n    print('Menor o igual')",
    "expectedOutput": "Menor o igual"
  },
  {
    "id": "pcep-s2-005",
    "title": "Operador Lógico and",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador and",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `True and False`?",
    "explanation": "El operador `and` solo devuelve True si AMBOS operandos son verdaderos. Como uno es False, resulta False.",
    "concepts": [
      "and",
      "lógica booleana"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(True and False)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-006",
    "title": "Operador Lógico or",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador or",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `True or False`?",
    "explanation": "El operador `or` devuelve True si al menos uno de los operandos es verdadero.",
    "concepts": [
      "or",
      "lógica booleana"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(True or False)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-007",
    "title": "Operador Lógico not",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador not",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`not` invierte el valor de verdad. not False es True.",
    "concepts": [
      "not",
      "negación"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(not False)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-008",
    "title": "Estructura if-elif-else",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "if-elif-else",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "x > 100 es False; x > 50 (75 > 50) es True, por lo que entra al bloque elif e imprime 'B'. Una vez que una rama se cumple, se sale del if.",
    "concepts": [
      "if-elif-else",
      "mutuamente excluyente"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 75\nif x > 100:\n    print('A')\nelif x > 50:\n    print('B')\nelse:\n    print('C')",
    "expectedOutput": "B"
  },
  {
    "id": "pcep-s2-009",
    "title": "Confusión entre Asignación (=) y Comparación (==)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Asignación en if",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si escribimos `if x = 5:` en Python 3?",
    "explanation": "El operador de asignación simple `=` no está permitido dentro de la condición de una sentencia if estándar, provocando SyntaxError.",
    "concepts": [
      "SyntaxError",
      "asignación vs comparación",
      "="
    ],
    "tags": [
      "análisis",
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 5\nif x = 5:\n    print('Igual')",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 'Igual'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: invalid syntax.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "x pasa a valer True.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-010",
    "title": "Operador Bit a Bit AND (&)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador bitwise &",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `6 & 3`?",
    "explanation": "6 en binario es 110, 3 es 011. Operación AND bit a bit: 110 & 011 = 010 (que es 2 en decimal).",
    "concepts": [
      "&",
      "bitwise AND",
      "binario"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(6 & 3)",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s2-011",
    "title": "Operador Bit a Bit OR (|)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador bitwise |",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `6 | 3`?",
    "explanation": "6 es 110, 3 es 011. Operación OR bit a bit: 110 | 011 = 111 (que es 7 en decimal).",
    "concepts": [
      "|",
      "bitwise OR"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(6 | 3)",
    "expectedOutput": "7"
  },
  {
    "id": "pcep-s2-012",
    "title": "Operador Bit a Bit XOR (^)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador bitwise ^",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `6 ^ 3`?",
    "explanation": "6 es 110, 3 es 011. XOR produce 1 cuando los bits son diferentes: 110 ^ 011 = 101 (5 en decimal).",
    "concepts": [
      "^",
      "bitwise XOR"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(6 ^ 3)",
    "expectedOutput": "5"
  },
  {
    "id": "pcep-s2-013",
    "title": "Desplazamiento a la Izquierda (<<)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Shift Left <<",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `3 << 2`?",
    "explanation": "Desplazar 2 bits a la izquierda equivale a multiplicar por 2^2 = 4: 3 * 4 = 12.",
    "concepts": [
      "<<",
      "shift left",
      "multiplicación binaria"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(3 << 2)",
    "expectedOutput": "12"
  },
  {
    "id": "pcep-s2-014",
    "title": "Desplazamiento a la Derecha (>>)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Shift Right >>",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `16 >> 2`?",
    "explanation": "Desplazar 2 bits a la derecha equivale a dividir de forma entera por 2^2 = 4: 16 // 4 = 4.",
    "concepts": [
      ">>",
      "shift right",
      "división binaria"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(16 >> 2)",
    "expectedOutput": "4"
  },
  {
    "id": "pcep-s2-015",
    "title": "Condicional con Números como Booleanos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Truthy Numérico",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "Cualquier número distinto de cero es considerado verdadero (truthy). Como -5 != 0, evalúa a True e imprime 'Sí'.",
    "concepts": [
      "truthy",
      "números en if"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "if -5:\n    print('Sí')\nelse:\n    print('No')",
    "expectedOutput": "Sí"
  },
  {
    "id": "pcep-s2-016",
    "title": "Condicional con Cero (0)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Falsy Numérico",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "El número entero 0 es considerado falso (falsy). Por ello entra a la rama else imprimiendo 'Falso'.",
    "concepts": [
      "falsy",
      "cero en condicional"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "if 0:\n    print('Verdadero')\nelse:\n    print('Falso')",
    "expectedOutput": "Falso"
  },
  {
    "id": "pcep-s2-017",
    "title": "Completar Rama Elif",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Sintaxis elif",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "code_completion",
    "statement": "Completa con la palabra clave necesaria para añadir una condición alternativa intermedia:",
    "explanation": "La palabra clave en Python es 'elif' (abreviatura de else if).",
    "concepts": [
      "elif",
      "sintaxis"
    ],
    "tags": [
      "completar",
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "starterCode": "nota = 85\nif nota >= 90:\n    print('A')\n____ nota >= 80:\n    print('B')",
    "expectedOutput": "B",
    "acceptableSolutions": [
      "elif"
    ]
  },
  {
    "id": "pcep-s2-018",
    "title": "Precedencia de not sobre and",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Precedencia Lógica",
    "pcepObjective": "2.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `not False and False`?",
    "explanation": "`not` tiene mayor precedencia que `and`. Se evalúa como: (not False) and False -> True and False -> False.",
    "concepts": [
      "not",
      "and",
      "precedencia lógica"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(not False and False)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-019",
    "title": "Cortocircuito en and (Short-Circuit)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Cortocircuito and",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El operador `and` evalúa de izquierda a derecha. Como el primer término es False, se produce cortocircuito y NO se evalúa `10 / 0`, evitando el ZeroDivisionError.",
    "concepts": [
      "cortocircuito",
      "and",
      "ZeroDivisionError evitado"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(False and (10 / 0 == 0))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-020",
    "title": "Cortocircuito en or (Short-Circuit)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Cortocircuito or",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El operador `or` evalúa de izquierda a derecha. Como el primer término es True, se produce cortocircuito y el segundo término (`10 / 0`) nunca se evalúa.",
    "concepts": [
      "cortocircuito",
      "or"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(True or (10 / 0 == 0))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-021",
    "title": "Valor Retornado por or con Operandos No Booleanos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Valores en or",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por `print(0 or 'Python')`?",
    "explanation": "En Python, `or` no devuelve obligatoriamente un booleano; devuelve el primer operando verdadero (truthy), o el último si todos son falsos. Como 0 es falso, devuelve 'Python'.",
    "concepts": [
      "or",
      "truthy",
      "valor de retorno"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(0 or 'Python')",
    "expectedOutput": "Python"
  },
  {
    "id": "pcep-s2-022",
    "title": "Valor Retornado por and con Operandos No Booleanos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Valores en and",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `print('Hola' and 42)`?",
    "explanation": "`and` devuelve el primer operando falso (si existe), o el último operando evaluado si todos son verdaderos. Ambos son truthy, por lo que devuelve 42.",
    "concepts": [
      "and",
      "truthy",
      "valor de retorno"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('Hola' and 42)",
    "expectedOutput": "42"
  },
  {
    "id": "pcep-s2-023",
    "title": "Operador Bit a Bit de Complemento (~)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Bitwise NOT ~",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `print(~5)` en Python?",
    "explanation": "El operador de negación bit a bit `~` en complemento a dos sigue la regla exacta: `~x = -(x + 1)`. Para x = 5: -(5 + 1) = -6.",
    "concepts": [
      "~",
      "complemento a 2",
      "bitwise NOT"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(~5)",
    "expectedOutput": "-6"
  },
  {
    "id": "pcep-s2-024",
    "title": "Complemento Bit a Bit de Cero (~0)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Bitwise NOT de 0",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print(~0)`?",
    "explanation": "Siguiendo `~x = -(x + 1)`: -(0 + 1) = -1.",
    "concepts": [
      "~",
      "~0",
      "bitwise"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(~0)",
    "expectedOutput": "-1"
  },
  {
    "id": "pcep-s2-025",
    "title": "if Anidado Básico",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "if anidados",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "x > 0 (10 > 0) es True. Entra al if exterior. En el if interior, y > 5 (3 > 5) es False, por lo que entra a su rama else imprimiendo 'Y pequeño'.",
    "concepts": [
      "if anidado",
      "flujo"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\ny = 3\nif x > 0:\n    if y > 5:\n        print('Ambos altos')\n    else:\n        print('Y pequeño')\nelse:\n    print('X no positivo')",
    "expectedOutput": "Y pequeño"
  },
  {
    "id": "pcep-s2-026",
    "title": "Precedencia: and tiene mayor precedencia que or",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Precedencia and sobre or",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print(True or False and False)`?",
    "explanation": "`and` tiene mayor precedencia que `or`. Se evalúa como: True or (False and False) -> True or False -> True.",
    "concepts": [
      "precedencia",
      "and vs or"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(True or False and False)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-027",
    "title": "Paréntesis Invirtiendo Precedencia de or",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Paréntesis en Lógica",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print((True or False) and False)`?",
    "explanation": "Los paréntesis fuerzan a evaluar primero (True or False) = True. Luego True and False = False.",
    "concepts": [
      "paréntesis",
      "lógica"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print((True or False) and False)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-028",
    "title": "Condicional con Operador Ternario (Expresión Condicional)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Operador Ternario",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "La expresión condicional `A if COND else B` evalúa la condición: como x % 2 == 0 (4 % 2 == 0) es True, devuelve 'Par'.",
    "concepts": [
      "expresión condicional",
      "ternario"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 4\nresultado = 'Par' if x % 2 == 0 else 'Impar'\nprint(resultado)",
    "expectedOutput": "Par"
  },
  {
    "id": "pcep-s2-029",
    "title": "Olvido de Dos Puntos (:) en if",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "SyntaxError en if",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué error produce el siguiente código?\n\n```python\nx = 10\nif x > 5\n    print('Mayor')\n```",
    "explanation": "Olvidar los dos puntos `:` al final del encabezado de una sentencia if es un error sintáctico: `SyntaxError: expected ':'`.",
    "concepts": [
      "SyntaxError",
      "dos puntos :",
      "if"
    ],
    "tags": [
      "análisis",
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\nif x > 5\n    print('Mayor')",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 'Mayor'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: expected ':'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza IndentationError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza NameError.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-030",
    "title": "Operadores Relacionales con Cadenas de Texto",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Comparación de Cadenas",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `'10' < '2'` en Python?",
    "explanation": "Las cadenas se comparan carácter por carácter según su código ASCII/Unicode. El carácter '1' (código 49) es menor que el carácter '2' (código 50), por lo que `'10' < '2'` es True.",
    "concepts": [
      "comparación lexicográfica",
      "ASCII",
      "cadenas"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('10' < '2')",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-031",
    "title": "Mayúsculas vs Minúsculas en Comparación",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Orden ASCII",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `'a' > 'A'`?",
    "explanation": "En la tabla ASCII, las letras mayúsculas vienen antes que las minúsculas ('A' = 65, 'a' = 97). Por tanto, 97 > 65 es True.",
    "concepts": [
      "ASCII",
      "mayúsculas vs minúsculas"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('a' > 'A')",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-032",
    "title": "Operadores Bit a Bit vs Lógicos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "& vs and",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "`1 & 2`: 1 es 01, 2 es 10. 01 & 10 = 00 (0). `1 and 2`: ambos son truthy, devuelve el último operando evaluado (2). Imprime: 0 2.",
    "concepts": [
      "& vs and",
      "bitwise vs lógico"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(1 & 2, 1 and 2)",
    "expectedOutput": "0 2"
  },
  {
    "id": "pcep-s2-033",
    "title": "Condicionales en Cascada con Múltiples elif",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Múltiples elif",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida?",
    "explanation": "x = 15. x > 20 es False; x > 10 (15 > 10) es True, por lo que imprime 'Mayor a 10' y termina el bloque condicional sin evaluar los siguientes elif.",
    "concepts": [
      "elif en cascada",
      "salida anticipada"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 15\nif x > 20:\n    print('Mayor a 20')\nelif x > 10:\n    print('Mayor a 10')\nelif x > 5:\n    print('Mayor a 5')\nelse:\n    print('Otro')",
    "expectedOutput": "Mayor a 10"
  },
  {
    "id": "pcep-s2-034",
    "title": "Precedencia de Operadores Relacionales sobre Lógicos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Precedencia Relacional vs Lógica",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Los operadores de comparación (`<`, `>`) tienen mayor precedencia que los lógicos (`and`). Se evalúa: (5 > 2) and (3 < 10) -> True and True -> True.",
    "concepts": [
      "precedencia relacional",
      "and"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(5 > 2 and 3 < 10)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-035",
    "title": "Doble Negación con not not",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Doble not",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `not not 'Python'`?",
    "explanation": "'Python' es truthy. not 'Python' es False. not False es True. `not not x` equivale a bool(x).",
    "concepts": [
      "not not",
      "coerción booleana"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(not not 'Python')",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-036",
    "title": "Tres if Anidados Profundos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "if Anidados Profundos",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "a > 0 (5 > 0) -> entra. b > 0 (10 > 0) -> entra. c > 0 (-2 > 0) -> False -> rama else del tercer if -> imprime 'C negativo'.",
    "concepts": [
      "if anidados profundos",
      "trazado"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a, b, c = 5, 10, -2\nif a > 0:\n    if b > 0:\n        if c > 0:\n            print('Todos positivos')\n        else:\n            print('C negativo')\n    else:\n        print('B negativo')\nelse:\n    print('A negativo')",
    "expectedOutput": "C negativo"
  },
  {
    "id": "pcep-s2-037",
    "title": "Trampa de Cortocircuito con Modificación de Variables",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Cortocircuito con Efecto Secundario",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `contador` al finalizar este código?",
    "explanation": "En `True or (contador := contador + 1)` o en `if True or func():`: al ser True el primer operando, el segundo nunca se evalúa debido al cortocircuito. contador se queda en 0.",
    "concepts": [
      "cortocircuito",
      "efectos secundarios"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "contador = 0\ndef sumar():\n    global contador\n    contador += 1\n    return True\n\nif True or sumar():\n    pass\nprint(contador)",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-038",
    "title": "Cortocircuito forzando ejecución del segundo término",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Cortocircuito en and con False",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `contador` en este código?",
    "explanation": "En `False and sumar()`: al ser False el primer término, el `and` cortocircuita y `sumar()` NUNCA se invoca. contador sigue valiendo 0.",
    "concepts": [
      "cortocircuito",
      "and",
      "funciones no ejecutadas"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "contador = 0\ndef sumar():\n    global contador\n    contador += 1\n    return True\n\nif False and sumar():\n    pass\nprint(contador)",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-039",
    "title": "Precedencia de Operadores Bit a Bit sobre Relacionales",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Precedencia Bitwise vs Comparación",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "¡Cuidado con la precedencia! Los operadores de comparación (`==`) tienen MENOR precedencia que los operadores de bits de shift (`<<`, `>>`), pero MAYOR precedencia que los de bits booleanos (`&`, `|`, `^`). En `1 & 2 == 0`, se evalúa primero `2 == 0` (False/0), y luego `1 & 0 = 0`.",
    "concepts": [
      "precedencia",
      "bitwise vs relacional",
      "& vs =="
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(1 & 2 == 0)",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-040",
    "title": "Paréntesis Resolviendo Confusión Bitwise",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Paréntesis en Bitwise",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print((1 & 2) == 0)`?",
    "explanation": "Con paréntesis forzados: (1 & 2) es 0. Luego 0 == 0 es True.",
    "concepts": [
      "paréntesis",
      "bitwise",
      "True"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print((1 & 2) == 0)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-041",
    "title": "Comparación de Cadenas y Enteros con ==",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "== entre str e int",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por `print('5' == 5)`?",
    "explanation": "En Python, una cadena nunca es igual a un entero mediante `==`, pero NO produce error: simplemente evalúa a False.",
    "concepts": [
      "==",
      "str vs int",
      "False"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('5' == 5)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-042",
    "title": "Comparación de Cadenas y Enteros con <",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "TypeError en Comparación",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `'5' < 5` en Python 3?",
    "explanation": "A diferencia de `==` (que retorna False), los operadores de orden (`<`, `>`, `<=`, `>=`) entre tipos incompatibles no soportados lanzan `TypeError: '<' not supported between instances of 'str' and 'int'`.",
    "concepts": [
      "TypeError",
      "comparación de orden",
      "str vs int"
    ],
    "tags": [
      "análisis",
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('5' < 5)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime False.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Imprime True.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError: '<' not supported between instances of 'str' and 'int'.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Convierte el 5 a '5' e imprime False.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-043",
    "title": "Operador is vs Operador ==",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Identidad vs Igualdad",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`==` compara contenido o valor (ambas listas contienen [1, 2, 3] -> True). `is` compara identidad en memoria (`id(a) == id(b)`): son dos listas creadas independientemente en posiciones distintas de memoria -> False.",
    "concepts": [
      "is",
      "==",
      "identidad de objetos"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b, a is b)",
    "expectedOutput": "True False"
  },
  {
    "id": "pcep-s2-044",
    "title": "Asignación de Referencia con is",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Misma Referencia con is",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`b = a` asigna la misma referencia de memoria. Por tanto, `a is b` evalúa a True.",
    "concepts": [
      "is",
      "referencias de memoria"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a = [10, 20]\nb = a\nprint(a is b)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-045",
    "title": "Comparación de Booleano con None",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Comparación con None",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `print(False == None)`?",
    "explanation": "None es el objeto nulo único de tipo NoneType y no es numéricamente igual a False. La comparación retorna False.",
    "concepts": [
      "None",
      "False",
      "=="
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(False == None)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-046",
    "title": "Condición con Lista Vacía",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Falsy de Contenedores",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Cualquier colección vacía (como una lista vacía `[]`) es falsy en Python. El if salta a la rama else.",
    "concepts": [
      "falsy",
      "lista vacía"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "items = []\nif items:\n    print('Hay elementos')\nelse:\n    print('Vacío')",
    "expectedOutput": "Vacío"
  },
  {
    "id": "pcep-s2-047",
    "title": "Negación de Expresión Relacional",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "not con Comparaciones",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "5 > 10 es False. not (5 > 10) es True. Imprime 'Cierto'.",
    "concepts": [
      "not",
      "paréntesis"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "if not (5 > 10):\n    print('Cierto')\nelse:\n    print('Falso')",
    "expectedOutput": "Cierto"
  },
  {
    "id": "pcep-s2-048",
    "title": "XOR de Números Negativos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Bitwise XOR con Negativo",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print(-1 ^ 0)`?",
    "explanation": "-1 en complemento a dos tiene todos sus bits en 1. -1 ^ 0 = -1.",
    "concepts": [
      "^",
      "-1",
      "bitwise"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(-1 ^ 0)",
    "expectedOutput": "-1"
  },
  {
    "id": "pcep-s2-049",
    "title": "Desplazamiento a la Derecha de Número Negativo",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Shift Right Aritmético",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `print(-4 >> 1)`?",
    "explanation": "El desplazamiento a la derecha en Python preserva el signo (shift aritmético) y redondea hacia abajo ($-\\infty$): -4 // 2 = -2.",
    "concepts": [
      ">>",
      "shift negativo"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(-4 >> 1)",
    "expectedOutput": "-2"
  },
  {
    "id": "pcep-s2-050",
    "title": "Evaluación de Expresión Lógica Compleja",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Condiciones y Operadores",
    "subtopic": "Lógica Combinada PCEP",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "1. not (5 == 5) -> not True -> False.\n2. False and (10 > 2) -> cortocircuito -> False.\n3. False or True -> True.\nImprime: True.",
    "concepts": [
      "lógica combinada",
      "precedencia"
    ],
    "tags": [
      "pcep-2.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(not (5 == 5) and (10 > 2) or True)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-051",
    "title": "Bucle while Básico",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Bucle while",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El bucle se ejecuta para i = 0, 1, 2. Cuando i llega a 3, la condición i < 3 es False y el bucle termina.",
    "concepts": [
      "while",
      "contador"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
    "expectedOutput": "0\n1\n2"
  },
  {
    "id": "pcep-s2-052",
    "title": "Bucle for con range(stop)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range con 1 argumento",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`range(3)` genera los números enteros comenzando en 0 hasta 3 exclusivo: 0, 1, 2.",
    "concepts": [
      "for",
      "range()",
      "límite superior exclusivo"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(3):\n    print(x)",
    "expectedOutput": "0\n1\n2"
  },
  {
    "id": "pcep-s2-053",
    "title": "range con Inicio y Fin: range(start, stop)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range con 2 argumentos",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`range(2, 5)` inicia en 2 y termina en 4 (5 es exclusivo): imprime 2, luego 3, luego 4.",
    "concepts": [
      "range(start, stop)"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(2, 5):\n    print(x)",
    "expectedOutput": "2\n3\n4"
  },
  {
    "id": "pcep-s2-054",
    "title": "range con Paso Positivo: range(start, stop, step)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range con 3 argumentos",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`range(1, 8, 2)` genera números comenzando en 1 con paso de 2 en 2: 1, 3, 5, 7.",
    "concepts": [
      "range(start, stop, step)",
      "paso positivo"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(1, 8, 2):\n    print(x)",
    "expectedOutput": "1\n3\n5\n7"
  },
  {
    "id": "pcep-s2-055",
    "title": "Instrucción break en while",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Instrucción break",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Cuando i == 2 se ejecuta `break`, que interrumpe inmediatamente el bucle. Solo se imprimen 0 y 1.",
    "concepts": [
      "break",
      "interrupción de bucle"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "i = 0\nwhile i < 5:\n    if i == 2:\n        break\n    print(i)\n    i += 1",
    "expectedOutput": "0\n1"
  },
  {
    "id": "pcep-s2-056",
    "title": "Instrucción continue en for",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Instrucción continue",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Cuando x == 2 se ejecuta `continue`, saltando el resto del cuerpo y pasando a la siguiente iteración. Se imprimen 0, 1, 3.",
    "concepts": [
      "continue",
      "salto de iteración"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(4):\n    if x == 2:\n        continue\n    print(x)",
    "expectedOutput": "0\n1\n3"
  },
  {
    "id": "pcep-s2-057",
    "title": "Acumulador en Bucle for",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Suma acumulada",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida final al ejecutar este código?",
    "explanation": "range(1, 5) genera 1, 2, 3, 4. Suma: 0 + 1 + 2 + 3 + 4 = 10.",
    "concepts": [
      "acumulador",
      "suma"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "total = 0\nfor n in range(1, 5):\n    total += n\nprint(total)",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s2-058",
    "title": "Iteración sobre una Cadena de Texto",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "for en cadenas",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El bucle `for` itera carácter por carácter la cadena 'Py'. Con `end='-'` imprime: P-y-.",
    "concepts": [
      "for",
      "iteración de cadenas",
      "end="
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for ch in 'Py':\n    print(ch, end='-')",
    "expectedOutput": "P-y-"
  },
  {
    "id": "pcep-s2-059",
    "title": "Bucle while con Condición Inicial Falsa",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while sin iteraciones",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por el siguiente código?",
    "explanation": "Como x > 10 (5 > 10) es False desde el inicio, el cuerpo del bucle while no se ejecuta ninguna vez. Solo imprime 'Fin'.",
    "concepts": [
      "while",
      "condición falsa"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 5\nwhile x > 10:\n    print(x)\n    x += 1\nprint('Fin')",
    "expectedOutput": "Fin"
  },
  {
    "id": "pcep-s2-060",
    "title": "Completar range para Números del 0 al 4",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range argument",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "code_completion",
    "statement": "Completa el argumento de `range(____)` para que el bucle itere exactamente 5 veces (del 0 al 4):",
    "explanation": "Para iterar del 0 al 4 se usa `range(5)`.",
    "concepts": [
      "range()",
      "límite"
    ],
    "tags": [
      "completar",
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "starterCode": "for i in range(____):\n    pass",
    "expectedOutput": "",
    "acceptableSolutions": [
      "5"
    ]
  },
  {
    "id": "pcep-s2-061",
    "title": "range con Start Igual a Stop",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range vacío",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuántas veces se ejecuta el cuerpo de `for x in range(3, 3):`?",
    "explanation": "Cuando el valor inicial es igual al valor final con paso positivo, el rango está vacío y no se ejecuta ninguna iteración.",
    "concepts": [
      "range vacío",
      "iteraciones"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "conteo = 0\nfor x in range(3, 3):\n    conteo += 1\nprint(conteo)",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-062",
    "title": "range con Start Mayor a Stop sin Paso Negativo",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range vacío descendente",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "Con paso positivo por defecto (+1), si start (5) > stop (2), el rango está vacío. No itera e imprime 0.",
    "concepts": [
      "range vacío",
      "step por defecto"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "c = 0\nfor x in range(5, 2):\n    c += 1\nprint(c)",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-063",
    "title": "Bucle for con Lista Numérica",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Iteración de lista",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El bucle itera sobre cada elemento multiplicándolo por 2: 2, 4, 6.",
    "concepts": [
      "for en lista"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for num in [1, 2, 3]:\n    print(num * 2)",
    "expectedOutput": "2\n4\n6"
  },
  {
    "id": "pcep-s2-064",
    "title": "Multiplicador en while",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while con multiplicación",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Iteración 1: x = 1, imprime 1, x pasa a 2.\nIteración 2: x = 2, imprime 2, x pasa a 4.\nIteración 3: x = 4, imprime 4, x pasa a 8.\nTermina porque 8 no es < 8.",
    "concepts": [
      "while",
      "duplicación"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 1\nwhile x < 8:\n    print(x)\n    x *= 2",
    "expectedOutput": "1\n2\n4"
  },
  {
    "id": "pcep-s2-065",
    "title": "continue en la Primera Instrucción del Bucle",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "continue directo",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuántas líneas se imprimen en consola con este código?",
    "explanation": "Como `continue` se ejecuta incondicionalmente al entrar a cada iteración, `print(x)` nunca llega a ejecutarse.",
    "concepts": [
      "continue incondicional"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(5):\n    continue\n    print(x)\nprint('Listo')",
    "expectedOutput": "Listo"
  },
  {
    "id": "pcep-s2-066",
    "title": "break en la Primera Iteración",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "break inmediato",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "En la primera iteración (x = 0), se ejecuta `break`, saliendo del bucle de inmediato sin imprimir x.",
    "concepts": [
      "break inmediato"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(10):\n    break\n    print(x)\nprint('Fuera')",
    "expectedOutput": "Fuera"
  },
  {
    "id": "pcep-s2-067",
    "title": "Contador Decreciente con while",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while decreciente",
    "pcepObjective": "2.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "i = 3: imprime 3, i pasa a 2.\ni = 2: imprime 2, i pasa a 1.\ni = 1: imprime 1, i pasa a 0.\ni = 0: termina.",
    "concepts": [
      "while decreciente"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "i = 3\nwhile i > 0:\n    print(i)\n    i -= 1",
    "expectedOutput": "3\n2\n1"
  },
  {
    "id": "pcep-s2-068",
    "title": "range con Paso Negativo: range(start, stop, step)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range con paso negativo",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "`range(5, 1, -1)` empieza en 5 y decrementa de 1 en 1 hasta antes de 1: 5, 4, 3, 2.",
    "concepts": [
      "range()",
      "paso negativo"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(5, 1, -1):\n    print(x)",
    "expectedOutput": "5\n4\n3\n2"
  },
  {
    "id": "pcep-s2-069",
    "title": "range Descendente con Paso de -2",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "range con paso -2",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`range(10, 3, -2)` genera números pares descendentes: 10, 8, 6, 4.",
    "concepts": [
      "range()",
      "paso -2"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(10, 3, -2):\n    print(x)",
    "expectedOutput": "10\n8\n6\n4"
  },
  {
    "id": "pcep-s2-070",
    "title": "Cláusula else en Bucle for que Termina Normal",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "else en for",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "La cláusula `else` de un bucle for se ejecuta cuando el bucle completa todas sus iteraciones de manera natural (sin ser interrumpido por break). Imprime 0, 1, luego 'Terminado'.",
    "concepts": [
      "for-else",
      "terminación normal"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(2):\n    print(x)\nelse:\n    print('Terminado')",
    "expectedOutput": "0\n1\nTerminado"
  },
  {
    "id": "pcep-s2-071",
    "title": "Cláusula else en for Interrumpido por break",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "else en for con break",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Cuando un bucle es interrumpido por una instrucción `break`, la cláusula `else` NO se ejecuta. Solo imprime 0 y 'Fin'.",
    "concepts": [
      "for-else",
      "break evita else"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(3):\n    if x == 1:\n        break\n    print(x)\nelse:\n    print('Completado')\nprint('Fin')",
    "expectedOutput": "0\nFin"
  },
  {
    "id": "pcep-s2-072",
    "title": "Cláusula else en Bucle while",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "else en while",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Cuando la condición de while se vuelve False de manera natural, se ejecuta su bloque `else`. Imprime 1, 2, y luego 'Fin normal'.",
    "concepts": [
      "while-else",
      "terminación natural"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "i = 1\nwhile i <= 2:\n    print(i)\n    i += 1\nelse:\n    print('Fin normal')",
    "expectedOutput": "1\n2\nFin normal"
  },
  {
    "id": "pcep-s2-073",
    "title": "Bucles Anidados for dentro de for",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Bucles anidados",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Por cada i (0, 1), j toma los valores (0, 1). Se imprimen los pares (0,0), (0,1), (1,0), (1,1).",
    "concepts": [
      "bucles anidados",
      "for anidado"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for i in range(2):\n    for j in range(2):\n        print(f'{i},{j}')",
    "expectedOutput": "0,0\n0,1\n1,0\n1,1"
  },
  {
    "id": "pcep-s2-074",
    "title": "break en Bucle Anidado",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "break anidado",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "La instrucción `break` solo interrumpe el bucle MÁS INTERNO en el que se encuentra. El bucle exterior continúa con su siguiente iteración.",
    "concepts": [
      "break en anidado",
      "alcance de break"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for i in range(2):\n    for j in range(3):\n        if j == 1:\n            break\n        print(f'{i}:{j}')",
    "expectedOutput": "0:0\n1:0"
  },
  {
    "id": "pcep-s2-075",
    "title": "Paso de Cero en range(1, 10, 0)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "ValueError en range con step 0",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `range(1, 10, 0)` en Python?",
    "explanation": "`range()` no admite un paso (step) igual a cero. Lanza inmediatamente `ValueError: range() arg 3 must not be zero`.",
    "concepts": [
      "ValueError",
      "range(step=0)"
    ],
    "tags": [
      "análisis",
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(1, 10, 0):\n    print(x)",
    "options": [
      {
        "id": "opt-1",
        "text": "Produce un bucle infinito imprimiendo 1 repetidamente.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza ValueError: range() arg 3 must not be zero.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "No itera ninguna vez (rango vacío).",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza ZeroDivisionError.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-076",
    "title": "Valor de la Variable de Control tras el for",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Variable de control post-bucle",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de la variable `x` tras terminar el bucle?",
    "explanation": "En Python, la variable del bucle for NO tiene ámbito local al bucle; permanece viva en el ámbito envolvente con el ÚLTIMO valor asignado (2).",
    "concepts": [
      "variable de control",
      "ámbito post-for"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(3):\n    pass\nprint(x)",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s2-077",
    "title": "Intento de Modificar la Variable del for dentro del Bucle",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Reasignación de variable iteradora",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "En cada iteración, la sentencia `for` sobrescribe la variable `i` con el siguiente valor que produce el iterador de `range(3)`. La asignación `i += 5` no afecta la siguiente iteración.",
    "concepts": [
      "variable iteradora",
      "independencia de range"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for i in range(3):\n    print(i, end=' ')\n    i += 5",
    "expectedOutput": "0 1 2 "
  },
  {
    "id": "pcep-s2-078",
    "title": "while con continue y Olvido de Incremento",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Trampa de Bucle Infinito",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con el siguiente código?\n\n```python\ni = 0\nwhile i < 3:\n    if i == 1:\n        continue\n    print(i)\n    i += 1\n```",
    "explanation": "Cuando i llega a 1, entra al `if` y ejecuta `continue` antes de alcanzar `i += 1`. Como `i` nunca se incrementa, se queda en 1 para siempre, creando un bucle infinito.",
    "concepts": [
      "bucle infinito",
      "continue en while",
      "olvido de incremento"
    ],
    "tags": [
      "análisis",
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "i = 0\nwhile i < 3:\n    if i == 1:\n        continue\n    print(i)\n    i += 1",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime: 0 y 2.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Imprime: 0 y luego entra en un bucle infinito porque i no se incrementa.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Termina normalmente imprimiendo 0, 1, 2.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza RecursionError.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-079",
    "title": "Suma de Números Pares con range",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Filtro con range step",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`range(2, 11, 2)` produce los pares: 2, 4, 6, 8, 10. Suma: 2 + 4 + 6 + 8 + 10 = 30.",
    "concepts": [
      "range()",
      "suma de pares"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "suma = 0\nfor n in range(2, 11, 2):\n    suma += n\nprint(suma)",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s2-080",
    "title": "Conversión de range a Lista con list()",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "list(range())",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud de la lista creada por `list(range(5, 15, 3))`?",
    "explanation": "Valores generados: 5, 8, 11, 14. Son exactamente 4 elementos.",
    "concepts": [
      "len",
      "list(range())"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = list(range(5, 15, 3))\nprint(len(lst))",
    "expectedOutput": "4"
  },
  {
    "id": "pcep-s2-081",
    "title": "Bucle while con Múltiples Banderas Lógicas",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while con Banderas",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "Iteración 1: a=1, b=5. a+=1 (2), b-=1 (4). Imprime 2:4.\nIteración 2: a=2, b=4. a+=1 (3), b-=1 (3). Imprime 3:3.\nCondición `a < b` (3 < 3) se vuelve False -> termina.",
    "concepts": [
      "while",
      "múltiples variables"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a, b = 1, 5\nwhile a < b and b > 0:\n    a += 1\n    b -= 1\n    print(f'{a}:{b}')",
    "expectedOutput": "2:4\n3:3"
  },
  {
    "id": "pcep-s2-082",
    "title": "else en while que Nunca Itera",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "else en while Falso Inicial",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Qué salida produce un while cuya condición es False desde el inicio con cláusula else?",
    "explanation": "Si la condición es False desde el inicio, el cuerpo no itera pero la cláusula `else` SÍ SE EJECUTA, porque el bucle no fue interrumpido por break.",
    "concepts": [
      "while-else",
      "ejecución de else"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\nwhile x < 5:\n    print('Dentro')\nelse:\n    print('Rama else')",
    "expectedOutput": "Rama else"
  },
  {
    "id": "pcep-s2-083",
    "title": "else en for con range Vacío",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "else con range vacío",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Un for con rango vacío termina normalmente (sin break), por lo que ejecuta inmediatamente su bloque `else`.",
    "concepts": [
      "for-else",
      "range vacío"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(0):\n    print('Elemento')\nelse:\n    print('Fin de rango')",
    "expectedOutput": "Fin de rango"
  },
  {
    "id": "pcep-s2-084",
    "title": "Bucles Anidados con continue en el Bucle Exterior",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "continue en exterior",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `contador`?",
    "explanation": "Para i = 0: entra al bucle interior, suma 1 (j=0), suma 1 (j=1) -> total 2.\nPara i = 1: se ejecuta `continue` en el bucle exterior, saltando completamente el bucle interior.\nTotal final = 2.",
    "concepts": [
      "bucles anidados",
      "continue exterior"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "contador = 0\nfor i in range(2):\n    if i == 1:\n        continue\n    for j in range(2):\n        contador += 1\nprint(contador)",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s2-085",
    "title": "Matriz de Asteriscos con Bucles Anidados",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Patrón con bucles anidados",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Bucle exterior corre 2 veces (fila 0 y 1). En cada fila imprime 3 asteriscos continuos y luego un salto de línea: ***\\n***.",
    "concepts": [
      "bucles anidados",
      "patrón visual",
      "end="
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "for fila in range(2):\n    for col in range(3):\n        print('*', end='')\n    print()",
    "expectedOutput": "***\n***"
  },
  {
    "id": "pcep-s2-086",
    "title": "Bucle while True con break Condicional",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while True idiomático",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "n = 1: imprime 1, n = 2.\nn = 2: imprime 2, n = 3.\nn = 3: imprime 3, n = 4.\nn = 4: cumple n > 3 y ejecuta `break`.",
    "concepts": [
      "while True",
      "break"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "n = 1\nwhile True:\n    print(n)\n    n += 1\n    if n > 3:\n        break",
    "expectedOutput": "1\n2\n3"
  },
  {
    "id": "pcep-s2-087",
    "title": "Operador in con range",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "in con range()",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `print(4 in range(0, 10, 2))`?",
    "explanation": "range(0, 10, 2) genera 0, 2, 4, 6, 8. Como 4 es uno de los múltiplos generados, retorna True.",
    "concepts": [
      "in",
      "range()",
      "comprobación de pertenencia"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(4 in range(0, 10, 2))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-088",
    "title": "Operador in con Elemento Omitido por el Step",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "in con range y step",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `print(5 in range(0, 10, 2))`?",
    "explanation": "range(0, 10, 2) solo contiene números pares (0, 2, 4, 6, 8). 5 está en el intervalo numérico pero no coincide con la progresión del step; retorna False.",
    "concepts": [
      "in",
      "range()",
      "False"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(5 in range(0, 10, 2))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s2-089",
    "title": "Comprobación de Igualdad entre Dos Objetos range",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Igualdad de range",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `range(0) == range(2, 2)` en Python?",
    "explanation": "Ambos objetos range producen exactamente la misma secuencia de números (ninguno, están vacíos). En Python 3, dos rangos que representan la misma secuencia son iguales: True.",
    "concepts": [
      "range()",
      "igualdad de rangos",
      "=="
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(range(0) == range(2, 2))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s2-090",
    "title": "Simulación de Enumerate Manual",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Indexación en bucle",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "len(frutas) es 2. Para i = 0 imprime '0:manzana', para i = 1 imprime '1:pera'.",
    "concepts": [
      "range(len())",
      "indexación"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "frutas = ['manzana', 'pera']\nfor i in range(len(frutas)):\n    print(f'{i}:{frutas[i]}')",
    "expectedOutput": "0:manzana\n1:pera"
  },
  {
    "id": "pcep-s2-091",
    "title": "Bucles Anidados con Multiplicación de Coordenadas",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Suma de Coordenadas",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida?",
    "explanation": "i=1: j=1 (1*1=1), j=2 (1*2=2). Suma parcial = 3.\ni=2: j=1 (2*1=2), j=2 (2*2=4). Suma parcial = 6.\nTotal acumulado = 3 + 6 = 9.",
    "concepts": [
      "bucles anidados",
      "acumulación"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "total = 0\nfor i in range(1, 3):\n    for j in range(1, 3):\n        total += i * j\nprint(total)",
    "expectedOutput": "9"
  },
  {
    "id": "pcep-s2-092",
    "title": "Bucle for Modificando Lista que Itera",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Mutación durante iteración",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si se eliminan elementos de una lista mientras se itera con `for x in lista:`?",
    "explanation": "Modificar el tamaño de una lista mientras se itera sobre ella altera los índices internos del iterador, provocando que se salten elementos. Es una clásica mala práctica.",
    "concepts": [
      "mutación de lista",
      "mala práctica",
      "iterador"
    ],
    "tags": [
      "análisis",
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "nums = [1, 2, 3, 4]\nfor n in nums:\n    if n == 2:\n        nums.remove(n)\nprint(nums)",
    "options": [
      {
        "id": "opt-1",
        "text": "Elimina el 2 e imprime [1, 3, 4].",
        "isCorrect": true
      },
      {
        "id": "opt-2",
        "text": "Lanza RuntimeError: list changed size during iteration.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Elimina todos los elementos.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza IndexError.",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s2-093",
    "title": "Iteración Segura sobre Copia de Lista",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Iteración con slice [:]",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código que itera sobre `nums[:]`?",
    "explanation": "Iterar sobre una copia superficial `nums[:]` evita saltos: se evalúa cada número original y se remueven los pares. Salida final: [1, 3].",
    "concepts": [
      "nums[:]",
      "copia segura"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "nums = [1, 2, 3, 4]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)",
    "expectedOutput": "[1, 3]"
  },
  {
    "id": "pcep-s2-094",
    "title": "while con Bucle y else que tiene break adentro",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "break dentro de if en while",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "i = 0: no cumple i == 1, imprime 0, i pasa a 1.\ni = 1: cumple i == 1, ejecuta break. Al haber break, el else NO se ejecuta. Solo imprime 0.",
    "concepts": [
      "while-else",
      "break"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "i = 0\nwhile i < 3:\n    if i == 1:\n        break\n    print(i)\n    i += 1\nelse:\n    print('Fin')",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s2-095",
    "title": "range Indexable con Índice Negativo",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Indexación en range",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `range(10, 20)[-1]`?",
    "explanation": "Los objetos range son secuencias indexables. `range(10, 20)` termina en 19, por lo que el índice -1 devuelve 19.",
    "concepts": [
      "range()",
      "índice negativo",
      "secuencia"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "r = range(10, 20)\nprint(r[-1])",
    "expectedOutput": "19"
  },
  {
    "id": "pcep-s2-096",
    "title": "Slicing en Objeto range",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Slicing en range",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `list(range(10)[2:6])`?",
    "explanation": "El slice [2:6] sobre range(10) produce una nueva secuencia range con valores de 2 a 5: [2, 3, 4, 5].",
    "concepts": [
      "range()",
      "slice"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(list(range(10)[2:6]))",
    "expectedOutput": "[2, 3, 4, 5]"
  },
  {
    "id": "pcep-s2-097",
    "title": "Inversión de range con reversed()",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "reversed()",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`reversed(range(3))` invierte la secuencia [0, 1, 2] generando: 2, 1, 0.",
    "concepts": [
      "reversed()",
      "range"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "for x in reversed(range(3)):\n    print(x)",
    "expectedOutput": "2\n1\n0"
  },
  {
    "id": "pcep-s2-098",
    "title": "Bucle con continue Saltando Imprimir y Acumular",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "continue con acumulador",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `s` al terminar este código?",
    "explanation": "Para n = 1: s += 1 (s=1).\nPara n = 2: continue -> se salta.\nPara n = 3: s += 3 (s=4).\nPara n = 4: continue -> se salta.\nTotal final = 4.",
    "concepts": [
      "continue",
      "acumulador condicional"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "s = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        continue\n    s += n\nprint(s)",
    "expectedOutput": "4"
  },
  {
    "id": "pcep-s2-099",
    "title": "Triple Bucle Anidado",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "Triple anidado",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuántas veces se ejecuta la instrucción `conteo += 1`?",
    "explanation": "El bucle más externo se ejecuta 2 veces (range(2)). El intermedio se ejecuta 2 veces. El más interno se ejecuta 2 veces. Total de iteraciones: 2 * 2 * 2 = 8.",
    "concepts": [
      "bucles anidados",
      "conteo de iteraciones"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "conteo = 0\nfor i in range(2):\n    for j in range(2):\n        for k in range(2):\n            conteo += 1\nprint(conteo)",
    "expectedOutput": "8"
  },
  {
    "id": "pcep-s2-100",
    "title": "Bucle while con Decremento y Multiplicación Cruzada",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control: Decisiones y Bucles",
    "topic": "Bucles y range",
    "subtopic": "while complejo PCEP",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida final tras ejecutar este código?",
    "explanation": "Iteración 1: x=3, y=1. y = 1 * 3 = 3. x = 2.\nIteración 2: x=2, y=3. y = 3 * 2 = 6. x = 1.\nIteración 3: x=1, y=6. y = 6 * 1 = 6. x = 0.\nTermina (0 > 0 es False). Imprime: 6.",
    "concepts": [
      "factorial manual",
      "while"
    ],
    "tags": [
      "pcep-2.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 3\ny = 1\nwhile x > 0:\n    y *= x\n    x -= 1\nprint(y)",
    "expectedOutput": "6"
  }
];

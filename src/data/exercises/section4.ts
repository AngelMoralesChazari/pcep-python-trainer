import { Exercise } from '../../types';

export const SECTION_4_EXERCISES: Exercise[] = [
  {
    "id": "pcep-s4-001",
    "title": "Definición y Llamada Simple de Función",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Definición y Llamada",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "La función `saludar()` se invoca e imprime '¡Hola, Mundo!'.",
    "concepts": [
      "def",
      "invocación"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def saludar():\n    print('¡Hola, Mundo!')\n\nsaludar()",
    "expectedOutput": "¡Hola, Mundo!"
  },
  {
    "id": "pcep-s4-002",
    "title": "Instrucción return con Valor",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Instrucción return",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La función retorna `3 + 5 = 8`, que luego se imprime con `print()`.",
    "concepts": [
      "return",
      "valor de retorno"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def sumar(a, b):\n    return a + b\n\nprint(sumar(3, 5))",
    "expectedOutput": "8"
  },
  {
    "id": "pcep-s4-003",
    "title": "Retorno Implícito de None",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Retorno Implícito None",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor retornado por una función en Python que no incluye una instrucción `return`?",
    "explanation": "Si una función termina sin encontrar una sentencia `return` explícita, devuelve implícitamente el valor especial `None`.",
    "concepts": [
      "None",
      "retorno por defecto"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def accion():\n    pass\n\nresultado = accion()\nprint(resultado)",
    "expectedOutput": "None"
  },
  {
    "id": "pcep-s4-004",
    "title": "Instrucción return Vacía (return sin expresión)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "return vacío",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor retornado por `return` sin ningún operando?",
    "explanation": "Una instrucción `return` sin expresión devuelve explícitamente `None` y finaliza la ejecución de la función de inmediato.",
    "concepts": [
      "return",
      "None"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def f():\n    return\n\nprint(f())",
    "expectedOutput": "None"
  },
  {
    "id": "pcep-s4-005",
    "title": "Código Inalcanzable tras return",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Código Muerto",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La instrucción `return 10` finaliza la ejecución de la función. La línea `print('Paso 2')` nunca se ejecuta.",
    "concepts": [
      "return",
      "flujo de terminación"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def prueba():\n    return 10\n    print('Paso 2')\n\nprint(prueba())",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s4-006",
    "title": "Paso de Argumentos Posicionales",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Argumentos Posicionales",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Los argumentos se asignan por orden de posición: `a = 10`, `b = 2`. 10 - 2 = 8.",
    "concepts": [
      "argumentos posicionales"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def restar(a, b):\n    return a - b\n\nprint(restar(10, 2))",
    "expectedOutput": "8"
  },
  {
    "id": "pcep-s4-007",
    "title": "Argumentos por Palabra Clave (Keyword Arguments)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Keyword Arguments",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por este código?",
    "explanation": "Al usar argumentos con nombre (`b=10, a=2`), el orden no importa: `a = 2` y `b = 10`. 2 - 10 = -8.",
    "concepts": [
      "keyword arguments",
      "orden"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def restar(a, b):\n    return a - b\n\nprint(restar(b=10, a=2))",
    "expectedOutput": "-8"
  },
  {
    "id": "pcep-s4-008",
    "title": "Argumento Faltante en Llamada (TypeError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "TypeError en Llamada",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si invocamos `sumar(5)` en una función definida como `def sumar(a, b):`?",
    "explanation": "Si faltan argumentos obligatorios requeridos sin valor por defecto, Python lanza `TypeError: sumar() missing 1 required positional argument: 'b'`.",
    "concepts": [
      "TypeError",
      "argumentos faltantes"
    ],
    "tags": [
      "análisis",
      "pcep-4.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def sumar(a, b):\n    return a + b\n\nsumar(5)",
    "options": [
      {
        "id": "opt-1",
        "text": "Retorna 5 asumiendo b = 0.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: missing 1 required positional argument.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Retorna None.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza ValueError.",
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
    "id": "pcep-s4-009",
    "title": "Argumento Posicional Tras Argumento con Nombre (SyntaxError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Regla de Argumentos",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con la llamada `calcular(a=1, 2)`?",
    "explanation": "En la sintaxis de Python, los argumentos posicionales NUNCA pueden colocarse después de un argumento con nombre. Lanza `SyntaxError: positional argument follows keyword argument`.",
    "concepts": [
      "SyntaxError",
      "keyword argument antes de posicional"
    ],
    "tags": [
      "análisis",
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def calcular(a, b):\n    return a + b\n\ncalcular(a=1, 2)",
    "options": [
      {
        "id": "opt-1",
        "text": "Se ejecuta retornando 3.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: positional argument follows keyword argument.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Retorna None.",
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
    "id": "pcep-s4-010",
    "title": "Mezcla Válida de Argumentos Posicionales y con Nombre",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Posicional seguido de Keyword",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `calcular(10, b=5)` si `def calcular(a, b): return a * b`?",
    "explanation": "Es perfectamente válido que los argumentos posicionales vayan primero y los argumentos con nombre después: 10 * 5 = 50.",
    "concepts": [
      "argumentos válidos",
      "posicional + keyword"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def calcular(a, b):\n    return a * b\n\nprint(calcular(10, b=5))",
    "expectedOutput": "50"
  },
  {
    "id": "pcep-s4-011",
    "title": "Asignación Duplicada de Argumento (TypeError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Argumento Duplicado",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `calcular(5, a=10)`?",
    "explanation": "El parámetro 'a' ya recibió el valor 5 por posición. Al intentar pasarle `a=10` con nombre, Python lanza `TypeError: calcular() got multiple values for argument 'a'`.",
    "concepts": [
      "TypeError",
      "múltiples valores para argumento"
    ],
    "tags": [
      "análisis",
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def calcular(a, b=2):\n    return a + b\n\ncalcular(5, a=10)",
    "options": [
      {
        "id": "opt-1",
        "text": "Retorna 12 sobrescribiendo a con 10.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: got multiple values for argument 'a'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza SyntaxError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Retorna 7 ignorando el segundo a.",
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
    "id": "pcep-s4-012",
    "title": "Retorno Múltiple de Valores (Empaquetado en Tupla)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Retorno Múltiple",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el tipo de dato del valor retornado por `return a, b`?",
    "explanation": "Cuando una función retorna múltiples expresiones separadas por comas (`return a, b`), Python las empaqueta automáticamente en una tupla.",
    "concepts": [
      "retorno de tupla",
      "type"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def coord():\n    return 10, 20\n\nres = coord()\nprint(type(res).__name__)",
    "expectedOutput": "tuple"
  },
  {
    "id": "pcep-s4-013",
    "title": "Desempaquetado Directo del Retorno de una Función",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Unpacking de Retorno",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Los dos valores devueltos en la tupla (10, 20) se desempaquetan directamente en x e y: 10 + 20 = 30.",
    "concepts": [
      "desempaquetado de retorno"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def minimos():\n    return 10, 20\n\nx, y = minimos()\nprint(x + y)",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s4-014",
    "title": "Función como Argumento de Otra Función (Higher Order)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Funciones como Objetos",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Las funciones son objetos de primera clase. `aplicar(duplicar, 5)` invoca `duplicar(5)` produciendo 10.",
    "concepts": [
      "funciones como objetos"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def duplicar(n):\n    return n * 2\n\ndef aplicar(f, val):\n    return f(val)\n\nprint(aplicar(duplicar, 5))",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s4-015",
    "title": "Función que Modifica una Lista Pasada como Argumento",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Paso por Referencia de Objetos Mutables",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Los objetos mutables (como listas) se pasan por referencia del objeto. `lst.append(99)` muta la lista original fuera de la función.",
    "concepts": [
      "paso de listas",
      "mutabilidad"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def agregar(lista):\n    lista.append(99)\n\nmi_lista = [1, 2]\nagregar(mi_lista)\nprint(mi_lista)",
    "expectedOutput": "[1, 2, 99]"
  },
  {
    "id": "pcep-s4-016",
    "title": "Reasignación de la Variable Parámetro vs Modificación in-place",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Reasignación de Referencia Local",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Reasignar `lista = [99]` dentro de la función solo cambia el puntero de la variable local `lista`; NO altera la lista externa original.",
    "concepts": [
      "reasignación de parámetro",
      "ámbito local"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def reiniciar(lista):\n    lista = [99]\n\nnums = [1, 2, 3]\nreiniciar(nums)\nprint(nums)",
    "expectedOutput": "[1, 2, 3]"
  },
  {
    "id": "pcep-s4-017",
    "title": "Recursión Básica: Factorial",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Recursión",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `factorial(3)`?",
    "explanation": "3 * factorial(2) = 3 * (2 * factorial(1)) = 3 * 2 * 1 = 6.",
    "concepts": [
      "recursión",
      "caso base"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(3))",
    "expectedOutput": "6"
  },
  {
    "id": "pcep-s4-018",
    "title": "Recursión: Conteo Regresivo Acumulado",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Recursión Acumulativa",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `suma_hasta(3)`?",
    "explanation": "3 + suma_hasta(2) -> 3 + 2 + suma_hasta(1) -> 3 + 2 + 1 = 6.",
    "concepts": [
      "recursión"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def suma_hasta(n):\n    if n == 1:\n        return 1\n    return n + suma_hasta(n - 1)\n\nprint(suma_hasta(3))",
    "expectedOutput": "6"
  },
  {
    "id": "pcep-s4-019",
    "title": "Recursión Infinita sin Caso Base (RecursionError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "RecursionError",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué excepción produce una función recursiva que se llama infinitamente sin alcanzar un caso base?",
    "explanation": "Superar el límite de profundidad de la pila de llamadas de Python lanza `RecursionError: maximum recursion depth exceeded`.",
    "concepts": [
      "RecursionError",
      "límite de pila"
    ],
    "tags": [
      "análisis",
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def bucle():\n    return bucle()\n\nbucle()",
    "options": [
      {
        "id": "opt-1",
        "text": "MemoryError.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "RecursionError: maximum recursion depth exceeded.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "RuntimeWarning.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "StackOverflowError (nombre de Java).",
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
    "id": "pcep-s4-020",
    "title": "Función Anidada Invocada Internamente",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Funciones Anidadas",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`externa()` define `interna()`, la invoca con argumento 5 y le suma 2: 5 * 2 + 2 = 12.",
    "concepts": [
      "funciones anidadas"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def externa(x):\n    def interna(y):\n        return y * 2\n    return interna(x) + 2\n\nprint(externa(5))",
    "expectedOutput": "12"
  },
  {
    "id": "pcep-s4-021",
    "title": "Invocación de Función Anidada Fuera de su Ámbito",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "NameError en Función Anidada",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si intentamos invocar `interna()` desde fuera de `externa()`?",
    "explanation": "`interna` es una variable local al cuerpo de `externa`. Desde el ámbito global no existe, produciendo `NameError: name 'interna' is not defined`.",
    "concepts": [
      "NameError",
      "ámbito local"
    ],
    "tags": [
      "análisis",
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def externa():\n    def interna():\n        return 1\n\ninterna()",
    "options": [
      {
        "id": "opt-1",
        "text": "Retorna 1.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza NameError: name 'interna' is not defined.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza AttributeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza TypeError.",
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
    "id": "pcep-s4-022",
    "title": "Docstring de Función accesible vía __doc__",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Docstrings",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "El literal de cadena inicial en el cuerpo de una función se almacena en el atributo especial `__doc__`.",
    "concepts": [
      "__doc__",
      "docstring"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def suma(a, b):\n    '''Suma dos numeros'''\n    return a + b\n\nprint(suma.__doc__)",
    "expectedOutput": "Suma dos numeros"
  },
  {
    "id": "pcep-s4-023",
    "title": "Asignación de Función a Variable",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Alias de Función",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`f = cuadrado` crea un alias a la misma función. `f(4)` ejecuta `cuadrado(4)`: 16.",
    "concepts": [
      "alias de función",
      "first class citizen"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def cuadrado(x):\n    return x * x\n\nf = cuadrado\nprint(f(4))",
    "expectedOutput": "16"
  },
  {
    "id": "pcep-s4-024",
    "title": "Función Lambda Básica",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "Expresiones Lambda",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La función anónima lambda recibe `x` y devuelve `x + 10`. 5 + 10 = 15.",
    "concepts": [
      "lambda",
      "función anónima"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "sumar_diez = lambda x: x + 10\nprint(sumar_diez(5))",
    "expectedOutput": "15"
  },
  {
    "id": "pcep-s4-025",
    "title": "None Evaluado en Expresión Booleana",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Funciones",
    "subtopic": "None en if",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La función `vacia()` no retorna nada (devuelve `None`). `None` es falsy, por lo que entra a la rama else.",
    "concepts": [
      "None falsy",
      "retorno en if"
    ],
    "tags": [
      "pcep-4.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def vacia():\n    pass\n\nif vacia():\n    print('Verdadero')\nelse:\n    print('Falso')",
    "expectedOutput": "Falso"
  },
  {
    "id": "pcep-s4-026",
    "title": "Parámetro con Valor por Defecto",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Valores por Defecto",
    "pcepObjective": "4.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida al invocar la función sin argumentos?",
    "explanation": "Al no suministrar argumento, se utiliza el valor por defecto `'Mundo'`: 'Hola Mundo'.",
    "concepts": [
      "parámetros por defecto"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def saludar(nombre='Mundo'):\n    return f'Hola {nombre}'\n\nprint(saludar())",
    "expectedOutput": "Hola Mundo"
  },
  {
    "id": "pcep-s4-027",
    "title": "Sobrescritura de Valor por Defecto",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Sobrescritura de Default",
    "pcepObjective": "4.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida al pasar un argumento explícito?",
    "explanation": "El argumento explícito `'Ana'` reemplaza el valor por defecto: 'Hola Ana'.",
    "concepts": [
      "parámetros por defecto"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def saludar(nombre='Mundo'):\n    return f'Hola {nombre}'\n\nprint(saludar('Ana'))",
    "expectedOutput": "Hola Ana"
  },
  {
    "id": "pcep-s4-028",
    "title": "Lectura de Variable Global dentro de Función",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Lectura de Global",
    "pcepObjective": "4.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Una función puede LEER variables del ámbito global directamente sin necesidad de usar `global`: 100.",
    "concepts": [
      "ámbito global",
      "lectura"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 100\ndef leer():\n    return x\n\nprint(leer())",
    "expectedOutput": "100"
  },
  {
    "id": "pcep-s4-029",
    "title": "Sombreado de Variable Global (Shadowing)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Shadowing",
    "pcepObjective": "4.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`x = 20` dentro de la función crea una variable LOCAL que oculta la global. La global exterior `x` no cambia y sigue valiendo 10.",
    "concepts": [
      "shadowing",
      "variable local"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\ndef alterar():\n    x = 20\n\nalterar()\nprint(x)",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s4-030",
    "title": "Parámetro sin Valor por Defecto Tras Parámetro con Defecto",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "SyntaxError en Definición",
    "pcepObjective": "4.2",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre al intentar definir `def func(a=1, b):`?",
    "explanation": "En la definición de funciones, todos los parámetros sin valor por defecto deben colocarse ANTES de cualquier parámetro con valor por defecto. Lanza `SyntaxError: non-default argument follows default argument`.",
    "concepts": [
      "SyntaxError",
      "non-default argument follows default"
    ],
    "tags": [
      "análisis",
      "pcep-4.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "def func(a=1, b):\n    return a + b",
    "options": [
      {
        "id": "opt-1",
        "text": "Se define con éxito.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: non-default argument follows default argument.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Convierte b en parámetro opcional.",
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
    "id": "pcep-s4-031",
    "title": "Palabra Clave global para Modificar Variable Externa",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Palabra Clave global",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `contador` al finalizar este código?",
    "explanation": "La instrucción `global contador` indica que las asignaciones dentro de la función deben modificar la variable del ámbito global. `contador` pasa a ser 1.",
    "concepts": [
      "global",
      "modificación global"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "contador = 0\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador)",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s4-032",
    "title": "Modificar Variable Global sin Declararla global (UnboundLocalError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "UnboundLocalError",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué error produce el siguiente código?",
    "explanation": "Python detecta la asignación `x = ...` y clasifica a `x` como variable local. Al intentar leerla para sumarle 1 antes de haberla asignado localmente, lanza `UnboundLocalError: cannot access local variable 'x' where it is not associated with a value`.",
    "concepts": [
      "UnboundLocalError",
      "asignación local sin global"
    ],
    "tags": [
      "análisis",
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\ndef sumar():\n    x += 1\n\nsumar()",
    "options": [
      {
        "id": "opt-1",
        "text": "Incrementa x a 11 con éxito.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza UnboundLocalError: cannot access local variable 'x'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza NameError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza TypeError.",
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
    "id": "pcep-s4-033",
    "title": "Trampa del Argumento Mutable por Defecto (lista=[])",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Default Argument Mutable",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de la segunda llamada `agregar(2)` si el valor por defecto es una lista mutable?",
    "explanation": "Las expresiones de argumentos por defecto se evalúan UNA SOLA VEZ cuando se define la función. La misma lista se reutiliza entre llamadas: primera llamada deja `[1]`, segunda llamada deja `[1, 2]`.",
    "concepts": [
      "argumento mutable por defecto",
      "trampa clásica PCEP"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def agregar(item, lista=[]):\n    lista.append(item)\n    return lista\n\nagregar(1)\nprint(agregar(2))",
    "expectedOutput": "[1, 2]"
  },
  {
    "id": "pcep-s4-034",
    "title": "Patrón Seguro para Argumento Mutable (default=None)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Patrón None idiomático",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `agregar_seguro(2)` con el patrón seguro `lista=None`?",
    "explanation": "Al usar `lista=None`, en cada invocación que no pase lista se crea una NUEVA lista vacía independiente `[]`. Solo contiene `[2]`.",
    "concepts": [
      "default None",
      "lista independiente"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def agregar_seguro(item, lista=None):\n    if lista is None:\n        lista = []\n    lista.append(item)\n    return lista\n\nagregar_seguro(1)\nprint(agregar_seguro(2))",
    "expectedOutput": "[2]"
  },
  {
    "id": "pcep-s4-035",
    "title": "Múltiples Parámetros con Valores por Defecto",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Múltiples Defaults",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `crear_caja(ancho=10)`?",
    "explanation": "`ancho = 10`, `alto` usa su default (5), `fondo` usa su default (2). 10 * 5 * 2 = 100.",
    "concepts": [
      "defaults combinados"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def crear_caja(ancho=1, alto=5, fondo=2):\n    return ancho * alto * fondo\n\nprint(crear_caja(ancho=10))",
    "expectedOutput": "100"
  },
  {
    "id": "pcep-s4-036",
    "title": "Regla LEGB: Local vs Enclosing vs Global vs Built-in",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Regla LEGB",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código que evalúa resolución de nombres LEGB?",
    "explanation": "Dentro de `interior()`, la variable local `x = 'local'` tiene la más alta prioridad, ocultando a la envolvente ('enclosing') y a la global.",
    "concepts": [
      "LEGB",
      "prioridad local"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 'global'\ndef exterior():\n    x = 'enclosing'\n    def interior():\n        x = 'local'\n        return x\n    return interior()\n\nprint(exterior())",
    "expectedOutput": "local"
  },
  {
    "id": "pcep-s4-037",
    "title": "Ámbito Enclosing Consultado por Falta de Local",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Ámbito Enclosing",
    "pcepObjective": "4.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida si `interior()` no define `x`?",
    "explanation": "Al no encontrar `x` en su ámbito local, Python busca en el ámbito envolvente más cercano (`exterior`), donde vale 'enclosing'.",
    "concepts": [
      "LEGB",
      "enclosing"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = 'global'\ndef exterior():\n    x = 'enclosing'\n    def interior():\n        return x\n    return interior()\n\nprint(exterior())",
    "expectedOutput": "enclosing"
  },
  {
    "id": "pcep-s4-038",
    "title": "Palabra Clave nonlocal Modificando Ámbito Enclosing",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "nonlocal",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código usando `nonlocal`?",
    "explanation": "`nonlocal x` enlaza la variable `x` de `exterior()`. Al hacer `x = 20`, se modifica esa variable envolvente. `exterior()` retorna 20.",
    "concepts": [
      "nonlocal",
      "enclosing mutable"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def exterior():\n    x = 10\n    def interior():\n        nonlocal x\n        x = 20\n    interior()\n    return x\n\nprint(exterior())",
    "expectedOutput": "20"
  },
  {
    "id": "pcep-s4-039",
    "title": "nonlocal Usado a Nivel Global (SyntaxError)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "SyntaxError en nonlocal",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si usamos `nonlocal x` directamente en el nivel de módulo (global)?",
    "explanation": "`nonlocal` exige que la variable exista en un ámbito de función envolvente externo. Si no hay función envolvente (por ejemplo, a nivel de módulo), lanza `SyntaxError: nonlocal binding not found`.",
    "concepts": [
      "SyntaxError",
      "nonlocal a nivel global"
    ],
    "tags": [
      "análisis",
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\nnonlocal x",
    "options": [
      {
        "id": "opt-1",
        "text": "Convierte x en variable de solo lectura.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: no binding for nonlocal 'x' found.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza NameError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza TypeError.",
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
    "id": "pcep-s4-040",
    "title": "Evaluación de Expresión en Default en Momento de Definición",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Evaluación Temprana de Defaults",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El valor por defecto `b = valor` se evalúa y congela en 5 en el momento en que se procesa `def sumar(...)`. El cambio posterior a `valor = 100` no afecta el default ya compilado: 2 + 5 = 7.",
    "concepts": [
      "evaluación de defaults",
      "congelación de parámetros"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "valor = 5\ndef sumar(a, b=valor):\n    return a + b\n\nvalor = 100\nprint(sumar(2))",
    "expectedOutput": "7"
  },
  {
    "id": "pcep-s4-041",
    "title": "Parámetro que Recibe y Modifica Diccionario",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Diccionario Mutable en Función",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "El diccionario se pasa por referencia. Asignar `config['debug'] = True` dentro de la función muta el diccionario externo original.",
    "concepts": [
      "diccionarios mutables",
      "scope"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def activar(config):\n    config['debug'] = True\n\najustes = {'debug': False}\nactivar(ajustes)\nprint(ajustes['debug'])",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-042",
    "title": "Creación de Variable Global desde Función Vacía Previa",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Creación con global",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Se puede crear una NUEVA variable global desde dentro de una función usando `global`?",
    "explanation": "Sí. Si la variable no existía previamente a nivel global, declarar `global nueva` y asignarle un valor la crea en el espacio de nombres global.",
    "concepts": [
      "global",
      "creación dinámica"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def crear():\n    global nueva_var\n    nueva_var = 42\n\ncrear()\nprint(nueva_var)",
    "expectedOutput": "42"
  },
  {
    "id": "pcep-s4-043",
    "title": "Función con Clausura (Closure)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Clausuras / Closures",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código con clausura?",
    "explanation": "`crear_multiplicador(3)` retorna una función que recuerda `factor = 3`. Al invocar `triple(10)`, calcula 10 * 3 = 30.",
    "concepts": [
      "closures",
      "clausuras"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def crear_multiplicador(factor):\n    def multiplicar(x):\n        return x * factor\n    return multiplicar\n\ntriple = crear_multiplicador(3)\nprint(triple(10))",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s4-044",
    "title": "global y nonlocal en Funciones de Tres Niveles",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Scope Multinevel",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`nonlocal` salta al ámbito de `nivel1` donde `x = 100`. Al salir, `nivel1()` retorna 100. La variable global `x = 1` no se altera.",
    "concepts": [
      "nonlocal multinivel"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 1\ndef nivel1():\n    x = 10\n    def nivel2():\n        nonlocal x\n        x = 100\n    nivel2()\n    return x\n\nprint(nivel1(), x)",
    "expectedOutput": "100 1"
  },
  {
    "id": "pcep-s4-045",
    "title": "Sombreado de Built-in con Variable Local",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Shadowing de Built-in",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Dentro de `calcular()`, `max = 50` sombrea la función built-in `max`. Devuelve 50. Fuera de la función, el built-in `max` sigue intacto: `max(1, 2) = 2`.",
    "concepts": [
      "shadowing de built-ins"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def calcular():\n    max = 50\n    return max\n\nprint(calcular(), max(1, 2))",
    "expectedOutput": "50 2"
  },
  {
    "id": "pcep-s4-046",
    "title": "Parámetro que Comparte Nombre con Variable Global",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Parámetro vs Global",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por este código?",
    "explanation": "El parámetro `x` es local a la función. Modificar `x += 5` no tiene ningún impacto en la variable global `x = 10`. Al imprimirla fuera, vale 10.",
    "concepts": [
      "parámetro local",
      "independencia"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\ndef alterar(x):\n    x += 5\n    return x\n\nalterar(x)\nprint(x)",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s4-047",
    "title": "Variable Local Declarada después de ser Leída en Función",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Trampa de Local Tardía",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si una función lee `x` en la línea 1 y luego asigna `x = 5` en la línea 2?",
    "explanation": "Debido a que el analizador léxico ve una asignación a `x` en cualquier parte de la función, la etiqueta como LOCAL para toda la función. Leerla antes de la asignación lanza `UnboundLocalError`.",
    "concepts": [
      "UnboundLocalError",
      "análisis estático de scope"
    ],
    "tags": [
      "análisis",
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\ndef f():\n    print(x)\n    x = 5\n\nf()",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 10 y luego asigna x = 5.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza UnboundLocalError: cannot access local variable 'x' where it is not associated with a value.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza NameError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Imprime 5.",
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
    "id": "pcep-s4-048",
    "title": "Tupla como Argumento por Defecto Inmutable",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Tupla como Default Seguro",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Es seguro utilizar tuplas como valores por defecto en lugar de listas?",
    "explanation": "Sí. Dado que las tuplas son inmutables, no sufren del problema de acumulación de efectos secundarios de las listas mutables.",
    "concepts": [
      "tuplas como defaults",
      "inmutabilidad segura"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def f(datos=(1, 2)):\n    return len(datos)\n\nprint(f(), f())",
    "expectedOutput": "2 2"
  },
  {
    "id": "pcep-s4-049",
    "title": "Diccionario por Defecto Reutilizado",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "Dict como Default Mutable",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida al invocar dos veces la función con diccionario mutable por defecto?",
    "explanation": "Al igual que las listas, un diccionario por defecto `{}` se comparte entre invocaciones. En la primera llamada añade `a=1`, en la segunda añade `b=2`. Longitud final = 2.",
    "concepts": [
      "dict por defecto mutable"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def registrar(k, v, d={}):\n    d[k] = v\n    return len(d)\n\nregistrar('a', 1)\nprint(registrar('b', 2))",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s4-050",
    "title": "Modificación de Global dentro de Bucle en Función",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Parámetros y Scope",
    "subtopic": "global con Acumulador en for",
    "pcepObjective": "4.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `total` al terminar este código?",
    "explanation": "La función acumula los valores de `range(1, 4)` (1, 2, 3) sobre la variable global `total = 0`: 0 + 1 + 2 + 3 = 6.",
    "concepts": [
      "global",
      "acumulador"
    ],
    "tags": [
      "pcep-4.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "total = 0\ndef acumular():\n    global total\n    for i in range(1, 4):\n        total += i\n\nacumular()\nprint(total)",
    "expectedOutput": "6"
  },
  {
    "id": "pcep-s4-051",
    "title": "Clase Base de Excepciones No del Sistema",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Clase Exception",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál es la clase base recomendada de la cual deben heredar todas las excepciones estándar y de usuario (que no sean de salida del sistema)?",
    "explanation": "En Python, `Exception` es la clase base para todas las excepciones no relacionadas con salidas del sistema. `BaseException` es la raíz absoluta (que incluye KeyboardInterrupt y SystemExit).",
    "concepts": [
      "Exception",
      "BaseException",
      "jerarquía"
    ],
    "tags": [
      "teoría",
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "BaseException",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Exception",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "StandardError (obsoleto de Python 2)",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "RuntimeError",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "Ninguna de las anteriores",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s4-052",
    "title": "ZeroDivisionError Capturado por ArithmeticError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "ArithmeticError",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida al capturar una división por cero con `except ArithmeticError:`?",
    "explanation": "`ZeroDivisionError` es una subclase de `ArithmeticError`. Por tanto, el bloque `except ArithmeticError:` la captura con éxito.",
    "concepts": [
      "ArithmeticError",
      "ZeroDivisionError",
      "herencia"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 10 / 0\nexcept ArithmeticError:\n    print('Error aritmético capturado')",
    "expectedOutput": "Error aritmético capturado"
  },
  {
    "id": "pcep-s4-053",
    "title": "IndexError Capturado por LookupError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "LookupError",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`IndexError` es subclase de `LookupError`. La captura e imprime 'LookupError'.",
    "concepts": [
      "LookupError",
      "IndexError",
      "herencia"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    lst = [1, 2]\n    val = lst[5]\nexcept LookupError:\n    print('LookupError')",
    "expectedOutput": "LookupError"
  },
  {
    "id": "pcep-s4-054",
    "title": "KeyError Capturado por LookupError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "KeyError bajo LookupError",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Qué imprime al acceder a una clave inexistente en un diccionario capturado con `LookupError`?",
    "explanation": "`KeyError` también es subclase de `LookupError`. Ambos errores de búsqueda heredan de `LookupError`.",
    "concepts": [
      "KeyError",
      "LookupError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    d = {}\n    val = d['clave']\nexcept LookupError:\n    print('Clave no encontrada')",
    "expectedOutput": "Clave no encontrada"
  },
  {
    "id": "pcep-s4-055",
    "title": "Jerarquía de TypeError y ValueError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "TypeError vs ValueError",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál es la relación de herencia entre `TypeError` y `ValueError` en Python?",
    "explanation": "Tanto `TypeError` como `ValueError` heredan directamente de `Exception` como clases hermanas; ninguna hereda de la otra.",
    "concepts": [
      "TypeError",
      "ValueError",
      "clases hermanas"
    ],
    "tags": [
      "teoría",
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "ValueError es subclase de TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "TypeError es subclase de ValueError.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Son clases hermanas independientes que heredan directamente de Exception.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Ambas heredan directamente de ArithmeticError.",
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
    "id": "pcep-s4-056",
    "title": "Comprobación de Herencia con issubclass()",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Función issubclass()",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(ZeroDivisionError, ArithmeticError)`?",
    "explanation": "Como ZeroDivisionError hereda de ArithmeticError, `issubclass()` devuelve True.",
    "concepts": [
      "issubclass",
      "ZeroDivisionError",
      "ArithmeticError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(ZeroDivisionError, ArithmeticError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-057",
    "title": "Comprobación: IndexError es subclase de LookupError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "issubclass(IndexError, LookupError)",
    "pcepObjective": "4.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "IndexError hereda de LookupError: True.",
    "concepts": [
      "issubclass",
      "IndexError",
      "LookupError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(IndexError, LookupError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-058",
    "title": "Orden de Cláusulas except: De Específico a General",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Orden de except",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`ZeroDivisionError` es más específica y se colocó antes que `ArithmeticError`. Se ejecuta la rama más específica: imprime 'ZeroDivision'.",
    "concepts": [
      "orden de except",
      "rama específica"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('ZeroDivision')\nexcept ArithmeticError:\n    print('Arithmetic')",
    "expectedOutput": "ZeroDivision"
  },
  {
    "id": "pcep-s4-059",
    "title": "Trampa de Orden Invertido: Clase General Antes de la Específica",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Bloque Inalcanzable",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si colocamos `except ArithmeticError:` ANTES de `except ZeroDivisionError:`?",
    "explanation": "Como `ArithmeticError` es la superclase, capturará la excepción primero. El bloque `except ZeroDivisionError:` se convierte en código inalcanzable (dead code).",
    "concepts": [
      "código inalcanzable",
      "trampa de herencia de excepciones"
    ],
    "tags": [
      "análisis",
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 1 / 0\nexcept ArithmeticError:\n    print('Arithmetic')\nexcept ZeroDivisionError:\n    print('ZeroDivision')",
    "options": [
      {
        "id": "opt-1",
        "text": "Python busca la más específica e imprime 'ZeroDivision'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Se ejecuta el primer bloque que hace match ('Arithmetic'), dejando inalcanzable a 'ZeroDivision'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza SyntaxError por orden incorrecto.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Se ejecutan ambos bloques consecutivamente.",
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
    "id": "pcep-s4-060",
    "title": "OverflowError Bajo ArithmeticError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "OverflowError",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar si OverflowError es subclase de ArithmeticError?",
    "explanation": "OverflowError hereda de ArithmeticError: True.",
    "concepts": [
      "OverflowError",
      "ArithmeticError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(OverflowError, ArithmeticError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-061",
    "title": "KeyboardInterrupt No Hereda de Exception",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "BaseException vs Exception",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(KeyboardInterrupt, Exception)`?",
    "explanation": "`KeyboardInterrupt` hereda directamente de `BaseException`, NO de `Exception` (para evitar que un `except Exception:` capture accidentalmente un Ctrl+C del usuario): False.",
    "concepts": [
      "KeyboardInterrupt",
      "BaseException",
      "False"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(KeyboardInterrupt, Exception))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s4-062",
    "title": "SystemExit No Hereda de Exception",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "SystemExit",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(SystemExit, Exception)`?",
    "explanation": "`SystemExit` también hereda directamente de `BaseException`, no de `Exception`: False.",
    "concepts": [
      "SystemExit",
      "BaseException"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(SystemExit, Exception))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s4-063",
    "title": "NameError Capturado por Exception",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "NameError bajo Exception",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Acceder a la variable no definida `variable_fantasma` lanza `NameError`, que es subclase de `Exception`. Imprime: 'Error capturado'.",
    "concepts": [
      "NameError",
      "Exception"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    print(variable_fantasma)\nexcept Exception:\n    print('Error capturado')",
    "expectedOutput": "Error capturado"
  },
  {
    "id": "pcep-s4-064",
    "title": "UnboundLocalError es Subclase de NameError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "UnboundLocalError herencia",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(UnboundLocalError, NameError)`?",
    "explanation": "`UnboundLocalError` es formalmente una subclase especializada de `NameError`: True.",
    "concepts": [
      "UnboundLocalError",
      "NameError",
      "issubclass"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(UnboundLocalError, NameError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-065",
    "title": "IndentationError es Subclase de SyntaxError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "IndentationError herencia",
    "pcepObjective": "4.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(IndentationError, SyntaxError)`?",
    "explanation": "`IndentationError` hereda de `SyntaxError`: True.",
    "concepts": [
      "IndentationError",
      "SyntaxError",
      "issubclass"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(IndentationError, SyntaxError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-066",
    "title": "TabError es Subclase de IndentationError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "TabError herencia",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(TabError, IndentationError)`?",
    "explanation": "TabError es subclase directa de IndentationError (y por tanto nieta de SyntaxError): True.",
    "concepts": [
      "TabError",
      "IndentationError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(TabError, IndentationError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-067",
    "title": "Creación de Excepción Personalizada Heredando de Exception",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Custom Exception",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por este código?",
    "explanation": "`MiError` hereda de `Exception`. Al lanzarla con `raise MiError('Fallo')`, es capturada por `except MiError as e:` imprimiendo 'Fallo'.",
    "concepts": [
      "excepción personalizada",
      "raise",
      "as e"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "class MiError(Exception):\n    pass\n\ntry:\n    raise MiError('Fallo')\nexcept MiError as e:\n    print(e)",
    "expectedOutput": "Fallo"
  },
  {
    "id": "pcep-s4-068",
    "title": "Excepción Personalizada Capturada por su Superclase",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Polimorfismo en Excepciones",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Qué imprime al capturar `MiError` mediante `except Exception:`?",
    "explanation": "Como `MiError` es subclase de `Exception`, `except Exception:` la captura con éxito.",
    "concepts": [
      "polimorfismo",
      "Exception"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "class MiError(Exception):\n    pass\n\ntry:\n    raise MiError()\nexcept Exception:\n    print('Capturado genérico')",
    "expectedOutput": "Capturado genérico"
  },
  {
    "id": "pcep-s4-069",
    "title": "Lanzar un Objeto que No Hereda de BaseException",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "TypeError en raise",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `raise 'Un error'` en Python 3?",
    "explanation": "En Python 3, solo las clases o instancias derivadas de `BaseException` pueden ser lanzadas. Lanzar un tipo no compatible (como una cadena) genera `TypeError: exceptions must derive from BaseException`.",
    "concepts": [
      "TypeError",
      "BaseException",
      "raise"
    ],
    "tags": [
      "análisis",
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "raise 'Un error'",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 'Un error' como mensaje en consola.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: exceptions must derive from BaseException.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza ValueError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Crea una excepción anónima de tipo Exception.",
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
    "id": "pcep-s4-070",
    "title": "Atributo args de una Excepción",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Atributo args",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `e.args` al instanciar `ValueError('Mensaje', 404)`?",
    "explanation": "Los argumentos pasados al constructor de la excepción se almacenan como una tupla en el atributo `args`: `('Mensaje', 404)`.",
    "concepts": [
      "args",
      "tupla de argumentos"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    raise ValueError('Mensaje', 404)\nexcept ValueError as e:\n    print(e.args)",
    "expectedOutput": "('Mensaje', 404)"
  },
  {
    "id": "pcep-s4-071",
    "title": "Jerarquía de FileNotFoundError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "FileNotFoundError",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(FileNotFoundError, OSError)`?",
    "explanation": "`FileNotFoundError` es una subclase directa de `OSError` (y por tanto de `Exception`): True.",
    "concepts": [
      "FileNotFoundError",
      "OSError"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(FileNotFoundError, OSError))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s4-072",
    "title": "Jerarquía de ZeroDivisionError frente a ValueError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "No Relacionadas",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `issubclass(ZeroDivisionError, ValueError)`?",
    "explanation": "No existe relación de herencia entre ellas (pertenecen a ramas diferentes de Exception): False.",
    "concepts": [
      "issubclass",
      "False"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(issubclass(ZeroDivisionError, ValueError))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s4-073",
    "title": "Excepción que no hace match y se propaga",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Propagación por Desajuste",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida si ocurre un ZeroDivisionError en un try protegido solo por except LookupError, dentro de otro try externo?",
    "explanation": "El try interno no captura `ZeroDivisionError` (porque no es LookupError). La excepción se propaga al try externo, que la captura con `except ArithmeticError:` imprimiendo 'Externo'.",
    "concepts": [
      "propagación",
      "desajuste de excepción"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    try:\n        x = 1 / 0\n    except LookupError:\n        print('Interno')\nexcept ArithmeticError:\n    print('Externo')",
    "expectedOutput": "Externo"
  },
  {
    "id": "pcep-s4-074",
    "title": "Nombre de la Clase de Excepción con type(e).__name__",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "__name__ de Excepción",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`type(e).__name__` obtiene el nombre exacto de la clase de excepción concreta instanciada ('ZeroDivisionError').",
    "concepts": [
      "__name__",
      "identificación de clase"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 10 / 0\nexcept Exception as e:\n    print(type(e).__name__)",
    "expectedOutput": "ZeroDivisionError"
  },
  {
    "id": "pcep-s4-075",
    "title": "Subclase Personalizada de ArithmeticError",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "Jerarquía de Excepciones",
    "subtopic": "Subclase Propia de Rama Estándar",
    "pcepObjective": "4.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida si una excepción personalizada hereda de `ArithmeticError`?",
    "explanation": "Al heredar de `ArithmeticError`, es capturada por `except ArithmeticError:` imprimiendo 'Capturado'.",
    "concepts": [
      "ArithmeticError",
      "herencia propia"
    ],
    "tags": [
      "pcep-4.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "class MiCalcError(ArithmeticError):\n    pass\n\ntry:\n    raise MiCalcError()\nexcept ArithmeticError:\n    print('Capturado')",
    "expectedOutput": "Capturado"
  },
  {
    "id": "pcep-s4-076",
    "title": "Estructura try-except Básica",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "try-except",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "Al producirse `10 / 0`, el flujo salta de inmediato al bloque `except ZeroDivisionError:` imprimiendo 'Error' y luego continúa fuera imprimiendo 'Fin'.",
    "concepts": [
      "try-except",
      "flujo"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Error')\nprint('Fin')",
    "expectedOutput": "Error\nFin"
  },
  {
    "id": "pcep-s4-077",
    "title": "Cláusula else en Bloque try sin Excepciones",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Cláusula else",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuándo se ejecuta el bloque `else:` en una estructura `try-except-else`?",
    "explanation": "La cláusula `else:` se ejecuta ÚNICAMENTE si el bloque `try:` finaliza con éxito sin producir ninguna excepción. Imprime 'Éxito' y 'Fin'.",
    "concepts": [
      "try-else",
      "sin excepción"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print('Error')\nelse:\n    print('Éxito')\nprint('Fin')",
    "expectedOutput": "Éxito\nFin"
  },
  {
    "id": "pcep-s4-078",
    "title": "Cláusula else Omitida cuando Hay Excepción",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "else ignorado tras excepción",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código donde sí ocurre una excepción?",
    "explanation": "Como ocurrió un ZeroDivisionError, se ejecuta el `except` y la cláusula `else` NO se ejecuta. Imprime: 'Capturado'.",
    "concepts": [
      "else ignorado",
      "except"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Capturado')\nelse:\n    print('No hubo error')",
    "expectedOutput": "Capturado"
  },
  {
    "id": "pcep-s4-079",
    "title": "Cláusula finally Básica",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Cláusula finally",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la regla fundamental de ejecución de la cláusula `finally:`?",
    "explanation": "El bloque `finally:` se ejecuta SIEMPRE, ocurra o no una excepción en el bloque try. Imprime '10.0' y luego 'Limpieza'.",
    "concepts": [
      "finally",
      "ejecución garantizada"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    print(20 / 2)\nfinally:\n    print('Limpieza')",
    "expectedOutput": "10.0\nLimpieza"
  },
  {
    "id": "pcep-s4-080",
    "title": "finally Tras Excepción Capturada",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally con excepción",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "1. Salta al `except` e imprime 'Error'.\n2. Ejecuta el `finally` e imprime 'Siempre'.\n3. Imprime 'Fin'.",
    "concepts": [
      "except",
      "finally"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')\nfinally:\n    print('Siempre')\nprint('Fin')",
    "expectedOutput": "Error\nSiempre\nFin"
  },
  {
    "id": "pcep-s4-081",
    "title": "Captura de Múltiples Excepciones en una Tupla",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Tupla de Excepciones",
    "pcepObjective": "4.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la sintaxis correcta para que un único bloque `except` capture tanto `TypeError` como `ZeroDivisionError`?",
    "explanation": "Se deben encerrar los tipos de excepciones entre paréntesis como una tupla: `except (TypeError, ZeroDivisionError):`.",
    "concepts": [
      "tupla de excepciones",
      "múltiples errores"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = '2' + 2\nexcept (TypeError, ZeroDivisionError):\n    print('Capturado con éxito')",
    "expectedOutput": "Capturado con éxito"
  },
  {
    "id": "pcep-s4-082",
    "title": "Estructura Completa: try - except - else - finally",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "try completo",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código donde todo ejecuta con éxito?",
    "explanation": "1. try exitoso: imprime 5.0.\n2. else se ejecuta: imprime 'Else'.\n3. finally se ejecuta: imprime 'Finally'.",
    "concepts": [
      "try-except-else-finally",
      "orden de ejecución"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print('Except')\nelse:\n    print('Else')\nfinally:\n    print('Finally')",
    "expectedOutput": "5.0\nElse\nFinally"
  },
  {
    "id": "pcep-s4-083",
    "title": "Estructura Completa con Excepción Disparada",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "try completo con error",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida si ocurre una excepción en la estructura completa?",
    "explanation": "1. try falla.\n2. except captura e imprime 'Except'.\n3. else se omite.\n4. finally se ejecuta e imprime 'Finally'.",
    "concepts": [
      "except",
      "finally"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Except')\nelse:\n    print('Else')\nfinally:\n    print('Finally')",
    "expectedOutput": "Except\nFinally"
  },
  {
    "id": "pcep-s4-084",
    "title": "finally Ejecutándose Antes de un return",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally con return",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por este código?",
    "explanation": "Aunque el bloque try ejecuta `return 'Retorno'`, el bloque `finally` tiene prioridad de ejecución inmediata antes de salir de la función. Imprime 'Finally' y luego la llamada recibe 'Retorno'.",
    "concepts": [
      "finally antes de return"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def prueba():\n    try:\n        return 'Retorno'\n    finally:\n        print('Finally')\n\nprint(prueba())",
    "expectedOutput": "Finally\nRetorno"
  },
  {
    "id": "pcep-s4-085",
    "title": "Sobrescritura del Retorno en Bloque finally",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "return en finally",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Qué ocurre si el bloque `finally` incluye su propia instrucción `return`?",
    "explanation": "Si el bloque `finally` ejecuta un `return`, descarta y sobrescribe cualquier valor de retorno previo del bloque `try`. La función devuelve 'B'.",
    "concepts": [
      "return en finally",
      "sobrescritura"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def f():\n    try:\n        return 'A'\n    finally:\n        return 'B'\n\nprint(f())",
    "expectedOutput": "B"
  },
  {
    "id": "pcep-s4-086",
    "title": "finally Silenciando una Excepción con return",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally silenciando excepciones",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Qué ocurre si ocurre un error en `try` pero `finally` tiene un `return`?",
    "explanation": "¡Comportamiento crítico en Python! Si el bloque `finally` ejecuta un `return`, la excepción en vuelo es descartada/silenciada y la función retorna normalmente con 'Salvado'.",
    "concepts": [
      "silenciar excepción",
      "return en finally"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "def f():\n    try:\n        1 / 0\n    finally:\n        return 'Salvado'\n\nprint(f())",
    "expectedOutput": "Salvado"
  },
  {
    "id": "pcep-s4-087",
    "title": "Instrucción raise sin Argumentos (Re-raise)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Relanzar con raise",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Qué hace una instrucción `raise` solitaria dentro de un bloque `except`?",
    "explanation": "`raise` sin argumentos vuelve a lanzar la excepción activa actual que se está procesando en el bloque except para que sea manejada más arriba.",
    "concepts": [
      "raise",
      "re-raise"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    try:\n        1 / 0\n    except ZeroDivisionError:\n        print('Log interno')\n        raise\nexcept ZeroDivisionError:\n    print('Manejador externo')",
    "expectedOutput": "Log interno\nManejador externo"
  },
  {
    "id": "pcep-s4-088",
    "title": "raise Solitario Fuera de un Bloque except",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "RuntimeError en raise huérfano",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos una instrucción `raise` sin argumentos fuera de cualquier bloque except?",
    "explanation": "Al no existir ninguna excepción activa en el contexto, Python lanza `RuntimeError: No active exception to reraise`.",
    "concepts": [
      "RuntimeError",
      "raise sin excepción activa"
    ],
    "tags": [
      "análisis",
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "raise",
    "options": [
      {
        "id": "opt-1",
        "text": "No hace nada.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza RuntimeError: No active exception to reraise.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza ValueError.",
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
    "id": "pcep-s4-089",
    "title": "Bloque except Vacío (Bare Except)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "except desnudo",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de un bloque `except:` sin especificar clase de excepción?",
    "explanation": "Un `except:` sin clase captura CUALQUIER excepción (equivalente a capturar BaseException). Imprime 'Captura todo'.",
    "concepts": [
      "bare except",
      "captura todo"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = int('no_es_numero')\nexcept:\n    print('Captura todo')",
    "expectedOutput": "Captura todo"
  },
  {
    "id": "pcep-s4-090",
    "title": "Ubicación Obligatoria del Bare except",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "SyntaxError en bare except",
    "pcepObjective": "4.4",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Dónde debe ubicarse un bloque `except:` sin clase dentro de una cadena de excepts?",
    "explanation": "Un `except:` sin clase debe ser obligatoriamente el ÚLTIMO bloque except. Colocarlo antes de otro except produce `SyntaxError: default 'except:' must be last`.",
    "concepts": [
      "SyntaxError",
      "bare except al final"
    ],
    "tags": [
      "análisis",
      "pcep-4.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 1 / 0\nexcept:\n    print('A')\nexcept ZeroDivisionError:\n    print('B')",
    "options": [
      {
        "id": "opt-1",
        "text": "Ejecuta 'A'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: default 'except:' must be last.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Ejecuta 'B'.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza TypeError.",
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
    "id": "pcep-s4-091",
    "title": "Excepción Producida dentro del Bloque except",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Excepción en except",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Qué ocurre si ocurre un nuevo error dentro de un bloque except, existiendo una cláusula finally?",
    "explanation": "El bloque `finally` se ejecuta A PESAR de que haya ocurrido una nueva excepción no manejada dentro del except. Imprime 'Finally' antes de propagar el nuevo error.",
    "concepts": [
      "finally garantizado",
      "error en except"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    try:\n        1 / 0\n    except ZeroDivisionError:\n        'a' + 1\n    finally:\n        print('Finally')",
    "expectedOutput": "Finally"
  },
  {
    "id": "pcep-s4-092",
    "title": "Cláusula else que Lanza una Excepción",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Error en else",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Es capturada por los bloques `except` asociados una excepción que ocurre dentro de la cláusula `else` del mismo try?",
    "explanation": "NO. Los bloques `except` solo protegen el código dentro de `try:`. Las excepciones dentro de `else:` se propagan al exterior.",
    "concepts": [
      "else no protegido por sus excepts"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    try:\n        x = 10\n    except Exception:\n        print('Except')\n    else:\n        raise ValueError('Error en else')\nexcept ValueError:\n    print('Capturado en try externo')",
    "expectedOutput": "Capturado en try externo"
  },
  {
    "id": "pcep-s4-093",
    "title": "Excepción en Función Anidada en Bucle try",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "try en Bucle",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `exitosos` al iterar la lista `[2, 0, 4]`?",
    "explanation": "Para n = 2: 10 / 2 = 5, exitosos = 1.\nPara n = 0: ZeroDivisionError -> entra al except, no suma.\nPara n = 4: 10 / 4 = 2.5, exitosos = 2.\nTotal: 2.",
    "concepts": [
      "try dentro de for",
      "resiliencia"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "exitosos = 0\nfor n in [2, 0, 4]:\n    try:\n        res = 10 / n\n        exitosos += 1\n    except ZeroDivisionError:\n        pass\nprint(exitosos)",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s4-094",
    "title": "finally con break Interrumpiendo un Bucle",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally con break",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este bucle con try-finally y break?",
    "explanation": "El `break` intenta salir del bucle, pero antes de salir se ejecuta ineludiblemente el bloque `finally`. Imprime 'Finally' y luego 'Fuera'.",
    "concepts": [
      "finally con break"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "for i in range(5):\n    try:\n        break\n    finally:\n        print('Finally')\nprint('Fuera')",
    "expectedOutput": "Finally\nFuera"
  },
  {
    "id": "pcep-s4-095",
    "title": "finally con continue en un Bucle for",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally con continue",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuántas veces se imprime 'Limpieza' en un for de 3 iteraciones con `continue` dentro de try?",
    "explanation": "En cada iteración se ejecuta `continue`, pero antes de saltar a la siguiente iteración se ejecuta el bloque `finally`. Se imprime exactamente 3 veces.",
    "concepts": [
      "finally con continue"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "for x in range(3):\n    try:\n        continue\n    finally:\n        print('Limpieza')",
    "expectedOutput": "Limpieza\nLimpieza\nLimpieza"
  },
  {
    "id": "pcep-s4-096",
    "title": "Llamada a sys.exit() y Bloque finally",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "finally y SystemExit",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "Si se invoca `sys.exit()` dentro del bloque try, ¿se ejecuta el bloque `finally`?",
    "explanation": "`sys.exit()` lanza una excepción `SystemExit` (que hereda de BaseException). Por tanto, la pila de llamadas se desenrolla y el bloque `finally` SÍ se ejecuta.",
    "concepts": [
      "SystemExit",
      "finally garantizado"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    raise SystemExit()\nfinally:\n    print('Finally ejecutado')",
    "expectedOutput": "Finally ejecutado"
  },
  {
    "id": "pcep-s4-097",
    "title": "Variable Definida en try Accesible en finally",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Ámbito de variables en try",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Tienen los bloques `try` un ámbito de variables propio o comparten el ámbito de la función?",
    "explanation": "Los bloques `try/except/finally` NO crean un nuevo ámbito local en Python. Las variables definidas dentro del try son accesibles en finally y fuera del bloque: 99.",
    "concepts": [
      "ámbito de bloque",
      "variables en try"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    x = 99\nfinally:\n    print(x)",
    "expectedOutput": "99"
  },
  {
    "id": "pcep-s4-098",
    "title": "Error en Línea Previa de try Impide Asignación",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Variable No Definida tras Error",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si una variable se asigna después de la línea que produce la excepción en try, y se intenta leer en finally?",
    "explanation": "Como la excepción ocurre en `1 / 0`, la línea `x = 10` nunca llega a ejecutarse. Al intentar imprimir `x` en finally, se lanza `NameError: name 'x' is not defined`.",
    "concepts": [
      "NameError en finally",
      "flujo interrumpido"
    ],
    "tags": [
      "análisis",
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    1 / 0\n    x = 10\nfinally:\n    print(x)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime None.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza NameError: name 'x' is not defined al ejecutar finally.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Imprime 0.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza ZeroDivisionError únicamente.",
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
    "id": "pcep-s4-099",
    "title": "Encadenamiento Explícito de Excepciones (raise from)",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "raise from",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor del atributo `__cause__` en `raise RuntimeError('Error') from err`?",
    "explanation": "La sintaxis `raise E from causa` asocia explícitamente la excepción previa al atributo `__cause__` de la nueva excepción.",
    "concepts": [
      "raise from",
      "__cause__"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "try:\n    try:\n        1 / 0\n    except ZeroDivisionError as err:\n        raise RuntimeError('Fallo') from err\nexcept RuntimeError as e:\n    print(type(e.__cause__).__name__)",
    "expectedOutput": "ZeroDivisionError"
  },
  {
    "id": "pcep-s4-100",
    "title": "Flujo de Ejecución Extremo PCEP: try - except - else - finally con Retornos",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Manejo de Excepciones",
    "topic": "try-except-else-finally",
    "subtopic": "Reto Maestro PCEP",
    "pcepObjective": "4.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por este código maestro de examen?",
    "explanation": "1. try intenta evaluar `10 / 2` -> éxito (5.0).\n2. else se ejecuta -> acumula 'E'.\n3. finally se ejecuta incondicionalmente -> acumula 'F'.\n4. Resultado devuelto: 'EF'.",
    "concepts": [
      "reto maestro",
      "flujo completo"
    ],
    "tags": [
      "pcep-4.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "def prueba():\n    registro = ''\n    try:\n        x = 10 / 2\n    except ZeroDivisionError:\n        registro += 'X'\n    else:\n        registro += 'E'\n    finally:\n        registro += 'F'\n    return registro\n\nprint(prueba())",
    "expectedOutput": "EF"
  }
];

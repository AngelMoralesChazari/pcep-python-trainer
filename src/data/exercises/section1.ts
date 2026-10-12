import { Exercise } from '../../types';

export const SECTION_1_EXERCISES: Exercise[] = [
  {
    "id": "pcep-s1-001",
    "title": "Rol del Intérprete en Python",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Compilación vs Interpretación",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cómo ejecuta Python el código fuente de un programa?",
    "explanation": "Python es un lenguaje interpretado: analiza y ejecuta las instrucciones línea por línea en tiempo de ejecución tras compilar a bytecode intermedio.",
    "concepts": [
      "intérprete",
      "tiempo de ejecución",
      "bytecode"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Traduce todo el código a código máquina ejecutable antes de iniciar la primera línea.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lee, analiza y ejecuta el código instrucción por instrucción en tiempo de ejecución.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Requiere un compilador externo de C++ para generar archivos .exe independientes.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Solo verifica los tipos de datos pero no ejecuta el programa.",
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
    "id": "pcep-s1-002",
    "title": "Archivos de Bytecode (.pyc)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Bytecode y CPython",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Qué contiene un archivo con extensión `.pyc` dentro de `__pycache__`?",
    "explanation": "Los archivos .pyc contienen bytecode compilado intermedio que la máquina virtual de Python (PVM) interpreta directamente.",
    "concepts": [
      "bytecode",
      ".pyc",
      "PVM"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "El código fuente en texto plano con comentarios eliminados.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Código ensamblador dependiente de la arquitectura del CPU.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Bytecode compilado intermedio que la máquina virtual de Python interpreta.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Las credenciales de acceso del usuario al entorno virtual.",
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
    "id": "pcep-s1-003",
    "title": "¿Qué es CPython?",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Implementaciones de Python",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Qué es exactamente **CPython**?",
    "explanation": "CPython es la implementación canónica y de referencia oficial del lenguaje Python, desarrollada en lenguaje C.",
    "concepts": [
      "CPython",
      "implementación oficial",
      "lenguaje C"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Un compilador comercial que convierte Python a código C nativo.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "La implementación estándar y de referencia oficial de Python, programada en C.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Una biblioteca gráfica para desarrollo de interfaces de usuario.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Un dialecto obsoleto de Python que ya no recibe soporte oficial.",
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
    "id": "pcep-s1-004",
    "title": "Propósito de PEP 8",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Estándares y PEP",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál es el propósito principal del documento conocido como **PEP 8**?",
    "explanation": "PEP 8 es la guía de estilo oficial para escribir código Python legible y consistente.",
    "concepts": [
      "PEP 8",
      "guía de estilo",
      "legibilidad"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Definir la arquitectura de la memoria RAM para Python 3.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Proporcionar la guía de estilo oficial para escribir código Python legible y consistente.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Establecer el temario obligatorio del examen PCEP.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Especificar el algoritmo de compresión de archivos zip.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s1-005",
    "title": "Identificación de Palabras Reservadas",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Keywords",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál de las siguientes listas contiene ÚNICAMENTE palabras reservadas (keywords) en Python 3?",
    "explanation": "def, return, if, while son palabras reservadas oficiales del lenguaje Python.",
    "concepts": [
      "keywords",
      "palabras reservadas"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "import, function, if, while",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "def, return, if, while",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "class, loop, for, in",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "var, def, else, elif",
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
    "id": "pcep-s1-006",
    "title": "Comprobación con módulo keyword",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Módulo keyword",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "keyword.iskeyword('pass') retorna True porque 'pass' es una palabra reservada.",
    "concepts": [
      "keyword",
      "iskeyword",
      "pass"
    ],
    "tags": [
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "import keyword\nprint(keyword.iskeyword('pass'))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s1-007",
    "title": "Diferencia entre Compilación e Interpretación",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Compilación vs Interpretación",
    "pcepObjective": "1.1",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál de las siguientes afirmaciones respecto a los lenguajes compilados frente a los interpretados es FALSA?",
    "explanation": "Un intérprete no genera un ejecutable nativo (.exe), sino que ejecuta las instrucciones en su propia máquina virtual.",
    "concepts": [
      "compilación",
      "interpretación"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Los programas compilados generalmente se ejecutan más rápido que los interpretados.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Un intérprete puede comenzar a ejecutar código de inmediato sin esperar a compilar todo el proyecto.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Un intérprete genera siempre un archivo binario nativo (.exe) que corre sin necesidad de instalar Python.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Los errores de sintaxis en líneas tardías de código interpretado no detienen la ejecución de las líneas previas.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s1-008",
    "title": "Palabra reservada 'for' como variable",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Keywords como Identificadores",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre al intentar ejecutar este código?\n\n```python\nfor = 10\nprint(for)\n```",
    "explanation": "Intentar asignar valor a una palabra reservada provoca SyntaxError inmediato antes de ejecutar el programa.",
    "concepts": [
      "SyntaxError",
      "keywords",
      "for"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "for = 10\nprint(for)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 10 en la consola.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Genera un NameError porque for no está definido.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Genera un SyntaxError porque for es una palabra clave reservada del lenguaje.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Genera un TypeError por incompatibilidad de tipos.",
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
    "id": "pcep-s1-009",
    "title": "Keywords con Mayúscula Inicial",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Keywords con mayúscula",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "theory",
    "statement": "¿Cuáles son las ÚNICAS tres palabras reservadas en Python 3 que inician con letra mayúscula?",
    "explanation": "En Python 3, True, False y None son las únicas 3 palabras reservadas que comienzan con mayúscula.",
    "concepts": [
      "True",
      "False",
      "None",
      "keywords"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "True, False, Null",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "True, False, None",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Yes, No, None",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Boolean, True, False",
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
    "id": "pcep-s1-010",
    "title": "Diferenciación de Mayúsculas en Keywords",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Case Sensitivity",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "'true' con minúscula es tratado como un identificador válido por el programador, no como la palabra reservada 'True'.",
    "concepts": [
      "case-sensitivity",
      "true",
      "True"
    ],
    "tags": [
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "true = 42\nTrue_val = true\nprint(True_val)",
    "expectedOutput": "42"
  },
  {
    "id": "pcep-s1-011",
    "title": "Completar con Bloque Vacío",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Sentencia pass",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "code_completion",
    "statement": "¿Qué palabra reservada se debe colocar en '____' para indicar un bloque sintáctico vacío válido?",
    "explanation": "La palabra 'pass' es una operación nula (no-op) requerida cuando la sintaxis exige una instrucción pero no hay acción que realizar.",
    "concepts": [
      "pass",
      "no-op",
      "bloque vacío"
    ],
    "tags": [
      "completar",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "starterCode": "if True:\n    ____\nprint('Continuar')",
    "expectedOutput": "Continuar",
    "acceptableSolutions": [
      "pass"
    ]
  },
  {
    "id": "pcep-s1-012",
    "title": "Características de PyPy",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Implementaciones alternativas",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "theory",
    "statement": "¿Qué característica técnica distingue principalmente a **PyPy** de la implementación estándar CPython?",
    "explanation": "PyPy incorpora un compilador JIT (Just-In-Time) que traduce código a instrucciones nativas dinámicamente aumentando la velocidad.",
    "concepts": [
      "PyPy",
      "JIT",
      "rendimiento"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "PyPy está escrito en Java para integrarse con la JVM.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "PyPy cuenta con un compilador JIT (Just-In-Time) que incrementa significativamente la velocidad de ejecución.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "PyPy solo funciona en microcontroladores embebidos sin sistema operativo.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "PyPy no admite diccionarios ni manejo de excepciones.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s1-013",
    "title": "Palabra Clave reservada: as",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Keywords: as",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué sucede al ejecutar `as = 'alias'`?",
    "explanation": "'as' es una palabra reservada utilizada para alias en importaciones y cláusulas except/with, por lo que no puede usarse como nombre de variable.",
    "concepts": [
      "as",
      "SyntaxError",
      "keywords"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "as = 'alias'\nprint(as)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 'alias'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
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
    "id": "pcep-s1-014",
    "title": "Creador del Lenguaje Python",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Historia de Python",
    "pcepObjective": "1.1",
    "difficulty": "basic_plus",
    "type": "theory",
    "statement": "¿Quién diseñó originalmente el lenguaje de programación Python?",
    "explanation": "Python fue creado por Guido van Rossum a finales de los años 80 y publicado en febrero de 1991.",
    "concepts": [
      "Guido van Rossum",
      "historia"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-2"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Dennis Ritchie",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Bjarne Stroustrup",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Guido van Rossum",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "James Gosling",
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
    "id": "pcep-s1-015",
    "title": "Error Sintáctico vs Error Semántico en Ejecución",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Tipos de Errores",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "Observa el siguiente código:\n\n```python\nprint('Inicio')\n10 / 0\nprint('Fin')\n```\n¿Qué tipo de error ocurre y en qué momento?",
    "explanation": "El código es sintácticamente válido (compila a bytecode con éxito). El error ZeroDivisionError ocurre en tiempo de ejecución tras imprimir 'Inicio'.",
    "concepts": [
      "ZeroDivisionError",
      "tiempo de ejecución",
      "error semántico"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Inicio')\n10 / 0\nprint('Fin')",
    "options": [
      {
        "id": "opt-1",
        "text": "SyntaxError antes de que se imprima 'Inicio'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "ZeroDivisionError en tiempo de ejecución después de imprimir 'Inicio'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "NameError durante la carga del intérprete.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "El código imprime 'Inicio' y luego 'Fin' ignorando la división.",
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
    "id": "pcep-s1-016",
    "title": "Error Sintáctico Antes de la Ejecución",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Fase de Parsing",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "Analiza el siguiente código:\n\n```python\nprint('Paso 1')\nprint('Paso 2'\nprint('Paso 3')\n```\n¿Qué salida se muestra en la consola?",
    "explanation": "El error de sintaxis (paréntesis sin cerrar en línea 2) detiene el programa en la fase de análisis léxico, por lo que NO se ejecuta ninguna línea.",
    "concepts": [
      "SyntaxError",
      "parsing",
      "fase de compilación"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Paso 1')\nprint('Paso 2'\nprint('Paso 3')",
    "options": [
      {
        "id": "opt-1",
        "text": "Paso 1 seguido de un SyntaxError.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Paso 1, Paso 2 y Paso 3 normalmente.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Ninguna salida; se genera un SyntaxError inmediato antes de ejecutar cualquier instrucción.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "RuntimeError en la línea 3.",
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
    "id": "pcep-s1-017",
    "title": "Asignación a Built-in print",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Built-ins vs Keywords",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "Analiza el siguiente fragmento:\n\n```python\nprint = 100\nprint(100)\n```\n¿Qué ocurre al ejecutarlo?",
    "explanation": "'print' no es una keyword reservada, sino un built-in. Asignarle 100 sobrescribe el identificador con un entero. Luego al llamarlo `print(100)`, se lanza `TypeError: 'int' object is not callable`.",
    "concepts": [
      "built-in",
      "TypeError",
      "shadowing",
      "print"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print = 100\nprint(100)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 100 en la consola.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Genera SyntaxError al intentar asignar valor a print.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Genera TypeError: 'int' object is not callable al intentar llamar al entero 100 como función.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Genera NameError porque print dejó de existir.",
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
    "id": "pcep-s1-018",
    "title": "Identificador 'None' Reasignado",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Inmutabilidad de None",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos la siguiente instrucción?\n\n```python\nNone = 0\n```",
    "explanation": "En Python 3, 'None' es una palabra reservada estricta (keyword), por lo que intentar asignarle valor provoca un SyntaxError inmediato.",
    "concepts": [
      "None",
      "SyntaxError",
      "keyword"
    ],
    "tags": [
      "análisis",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "None = 0",
    "options": [
      {
        "id": "opt-1",
        "text": "None ahora vale 0.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: cannot assign to None.",
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
    "id": "pcep-s1-019",
    "title": "Filosofía Zen de Python",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "El Zen de Python",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "theory",
    "statement": "¿Cuál de los siguientes enunciados contradice un principio del 'Zen de Python' (PEP 20)?",
    "explanation": "El Zen de Python dice 'Simple is better than complex' y 'Explicit is better than implicit'. Afirmar que 'Complex is better than simple' es falso.",
    "concepts": [
      "Zen de Python",
      "PEP 20"
    ],
    "tags": [
      "teoría",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Beautiful is better than ugly.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Explicit is better than implicit.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Complex is better than simple.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Readability counts.",
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
    "id": "pcep-s1-020",
    "title": "Palabras Reservadas: nonlocal",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Conceptos Fundamentales",
    "subtopic": "Scope Keywords",
    "pcepObjective": "1.1",
    "difficulty": "intermediate",
    "type": "code_completion",
    "statement": "¿Qué palabra reservada permite declarar que una variable dentro de una función anidada pertenece al ámbito envolvente inmediato y no al global?",
    "explanation": "La palabra reservada 'nonlocal' enlaza un identificador del ámbito exterior inmediato que no sea el global.",
    "concepts": [
      "nonlocal",
      "scope",
      "keywords"
    ],
    "tags": [
      "completar",
      "pcep-1.1",
      "nivel-3"
    ],
    "isActive": true,
    "starterCode": "def exterior():\n    x = 1\n    def interior():\n        ____ x\n        x = 2\n    interior()\n    return x",
    "expectedOutput": "2",
    "acceptableSolutions": [
      "nonlocal"
    ]
  },
  {
    "id": "pcep-s1-021",
    "title": "Nombres de variables inválidos con dígitos y espacios",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Reglas de Nomenclatura",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "debugging",
    "statement": "Analiza el siguiente fragmento de código:\n\n```python\n1numero = 2\nnumero 2 = 3\n\nprint(1numero + numero 2)\n```\n¿Cuál es el resultado al intentar ejecutar este código en Python?",
    "explanation": "En Python, los nombres de variables NO pueden comenzar con un dígito numérico (1numero es inválido) ni pueden contener espacios (numero 2 es inválido). Ambos provocan un SyntaxError inmediato antes de cualquier ejecución.",
    "concepts": [
      "SyntaxError",
      "identificadores inválidos",
      "dígito inicial",
      "espacios en variables"
    ],
    "tags": [
      "depuración",
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "1numero = 2\nnumero 2 = 3\n\nprint(1numero + numero 2)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 5 en la consola.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Genera TypeError por intentar sumar variables no tipadas.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Genera SyntaxError (salida inválida) debido a nombres de variables que inician con número y contienen espacios.",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "Genera NameError en la línea 3 al llamar a print.",
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
    "id": "pcep-s1-022",
    "title": "Reglas de Nombres de Variables Válidos",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Identificadores Válidos",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Cuál de los siguientes nombres de variable es VÁLIDO en Python?",
    "explanation": "Un identificador válido puede contener letras, números y guiones bajos (_), pero debe comenzar con una letra o un guión bajo. `_contador_1` es válido.",
    "concepts": [
      "identificadores",
      "reglas de nombres"
    ],
    "tags": [
      "teoría",
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "2do_puesto",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "mi-variable",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "_contador_1",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "precio total",
        "isCorrect": false
      },
      {
        "id": "opt-5",
        "text": "class",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s1-023",
    "title": "Sensibilidad a Mayúsculas (Case Sensitivity)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Case Sensitivity",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "Python distingue entre mayúsculas y minúsculas: 'valor', 'Valor' y 'VALOR' son tres variables totalmente distintas e independientes. valor (10) + Valor (20) = 30.",
    "concepts": [
      "case-sensitivity",
      "variables"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "valor = 10\nValor = 20\nVALOR = 30\nprint(valor + Valor)",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s1-024",
    "title": "Sintaxis de Comentarios en Python",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Comentarios",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Qué carácter se utiliza en Python para iniciar un comentario de una sola línea?",
    "explanation": "El carácter almohadilla (#) inicia un comentario que se extiende hasta el final de la línea física.",
    "concepts": [
      "comentarios",
      "#"
    ],
    "tags": [
      "teoría",
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "// como en C/Java",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "/* como en CSS */",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "# (almohadilla / numeral)",
        "isCorrect": true
      },
      {
        "id": "opt-4",
        "text": "-- como en SQL",
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
    "id": "pcep-s1-025",
    "title": "Comentarios en la Misma Línea",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Comentarios inline",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "Todo lo que sigue al carácter '#' en una línea es ignorado completamente por el intérprete de Python.",
    "concepts": [
      "comentarios",
      "inline"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 5 # x = 10\ny = 2\n# print(x * y)\nprint(x + y)",
    "expectedOutput": "7"
  },
  {
    "id": "pcep-s1-026",
    "title": "Error de Indentación Inesperada",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Indentación",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué error produce el siguiente código al ejecutarse?\n\n```python\na = 1\n  b = 2\nprint(a + b)\n```",
    "explanation": "Una indentación en el nivel superior (módulo) que no pertenece a ningún bloque de control produce `IndentationError: unexpected indent`.",
    "concepts": [
      "IndentationError",
      "indentación"
    ],
    "tags": [
      "análisis",
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "a = 1\n  b = 2\nprint(a + b)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 3 normalmente.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza IndentationError: unexpected indent.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Lanza SyntaxError: invalid character.",
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
    "id": "pcep-s1-027",
    "title": "Tipado Dinámico y Reasignación",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Tipado Dinámico",
    "pcepObjective": "1.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "Python tiene tipado dinámico: la variable 'dato' puede contener un entero y posteriormente ser reasignada a una cadena sin errores.",
    "concepts": [
      "tipado dinámico",
      "reasignación"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "dato = 100\ndato = 'Python'\nprint(dato)",
    "expectedOutput": "Python"
  },
  {
    "id": "pcep-s1-028",
    "title": "Uso de Guión Medio en Nombre de Variable",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Caracteres Inválidos",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "debugging",
    "statement": "¿Qué ocurre al ejecutar la instrucción `total-cuenta = 150`?",
    "explanation": "El guión medio (-) es interpretado por Python como el operador aritmético de resta. Python intenta evaluar la resta de 'total' menos 'cuenta', produciendo un SyntaxError de asignación.",
    "concepts": [
      "SyntaxError",
      "operador resta",
      "identificadores"
    ],
    "tags": [
      "depuración",
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "total-cuenta = 150\nprint(total-cuenta)",
    "options": [
      {
        "id": "opt-1",
        "text": "Asigna 150 a la variable total-cuenta con éxito.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: cannot assign to expression here (o can't assign to operator).",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza NameError: name 'total' is not defined.",
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
    "id": "pcep-s1-029",
    "title": "Asignación Múltiple Encadenada",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Asignación Encadenada",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "La asignación encadenada asigna la misma referencia de valor (7) a las variables x, y, z simultáneamente. 7 + 7 + 7 = 21.",
    "concepts": [
      "asignación múltiple",
      "encadenamiento"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = y = z = 7\nprint(x + y + z)",
    "expectedOutput": "21"
  },
  {
    "id": "pcep-s1-030",
    "title": "Intercambio Simultáneo de Variables",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Desempaquetado de Tuplas",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Python evalúa primero toda la parte derecha (a, b -> 5, 10) y luego asigna a la izquierda (b, a = 5, 10). Así b toma 5 y a toma 10. a - b = 10 - 5 = 5.",
    "concepts": [
      "intercambio de variables",
      "tupla"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = 5\nb = 10\na, b = b, a\nprint(a - b)",
    "expectedOutput": "5"
  },
  {
    "id": "pcep-s1-031",
    "title": "Identificadores con Símbolo de Dólar ($)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Caracteres Inválidos: $",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con el siguiente código?\n\n```python\nprecio$ = 25.50\nprint(precio$)\n```",
    "explanation": "A diferencia de lenguajes como JavaScript o PHP, el carácter '$' no es un carácter permitido en identificadores de Python, produciendo SyntaxError.",
    "concepts": [
      "SyntaxError",
      "símbolo dólar",
      "caracteres especiales"
    ],
    "tags": [
      "análisis",
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "precio$ = 25.50\nprint(precio$)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 25.50 normalmente.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError: invalid character '$'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza ValueError.",
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
    "id": "pcep-s1-032",
    "title": "Guiones Bajos Iniciales y Finales",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Convenciones PEP 8",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "theory",
    "statement": "¿Cuál es el significado convencional de una variable nombrada con un solo guión bajo inicial como `_variable`?",
    "explanation": "En la convención PEP 8, un guión bajo inicial sugiere que el atributo o variable es para uso interno/privado del módulo o clase.",
    "concepts": [
      "convenciones",
      "PEP 8",
      "guión bajo"
    ],
    "tags": [
      "teoría",
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Indica que la variable es una constante inmutable protegida por el sistema.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Es una convención que sugiere que la variable es para uso interno / privado.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Hace que Python borre la variable inmediatamente al salir de la función.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Es un error sintáctico; no se permite iniciar con guión bajo.",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "pcep-s1-033",
    "title": "Corrección de Bloque Indentado",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Indentación Requerida",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "code_completion",
    "statement": "Completa con la indentación estándar de 4 espacios y la palabra clave necesaria para que el bloque `if` sea válido:",
    "explanation": "Cuando un bloque condicional no tiene instrucciones, se debe indentar (típicamente 4 espacios) y colocar 'pass'.",
    "concepts": [
      "indentación",
      "pass"
    ],
    "tags": [
      "completar",
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "starterCode": "condicion = True\nif condicion:\n____",
    "expectedOutput": "",
    "acceptableSolutions": [
      "    pass",
      "pass"
    ]
  },
  {
    "id": "pcep-s1-034",
    "title": "Variable de Nombre con Solo Guión Bajo (_)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Identificador _",
    "pcepObjective": "1.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "Un solo guión bajo (_) es un identificador completamente válido en Python, utilizado comúnmente como variable temporal o de descarte.",
    "concepts": [
      "identificador _",
      "variables válidas"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "_ = 100\n_ = _ + 50\nprint(_)",
    "expectedOutput": "150"
  },
  {
    "id": "pcep-s1-035",
    "title": "Mezcla de Espacios y Tabulaciones",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "TabError",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué error específico lanza Python 3 si se mezclan tabulaciones y espacios para indentar en el mismo bloque de código?",
    "explanation": "Python 3 prohíbe mezclar tabulaciones y espacios en un mismo nivel de indentación, produciendo `TabError: inconsistent use of tabs and spaces in indentation`.",
    "concepts": [
      "TabError",
      "indentación",
      "espacios y tabs"
    ],
    "tags": [
      "análisis",
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "IndentationError general sin más detalles.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "TabError: inconsistent use of tabs and spaces in indentation.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "SyntaxError: invalid token.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Warning únicamente; el código corre convirtiendo tabs a 8 espacios.",
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
    "id": "pcep-s1-036",
    "title": "Identificadores Unicode en Python 3",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Unicode Identifiers",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código en Python 3?",
    "explanation": "Python 3 soporta identificadores con caracteres Unicode (como letras con acentos o la letra eñe 'año'). año = 2026, año + 1 = 2027.",
    "concepts": [
      "unicode",
      "identificadores"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "año = 2026\nprint(año + 1)",
    "expectedOutput": "2027"
  },
  {
    "id": "pcep-s1-037",
    "title": "Continuación de Línea Explícita con Barra Invertida",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Line Continuation",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La barra invertida (\\) al final de una línea física indica continuación de línea explícita. 1 + 2 + 3 = 6.",
    "concepts": [
      "continuación de línea",
      "\\"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "total = 1 + \\\n        2 + \\\n        3\nprint(total)",
    "expectedOutput": "6"
  },
  {
    "id": "pcep-s1-038",
    "title": "Espacio tras Barra Invertida de Continuación",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "SyntaxError en \\",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "Si hay un espacio en blanco después de la barra invertida `\\ ` al final de la línea antes del salto de línea, ¿qué ocurre?",
    "explanation": "Si existe algún carácter (incluyendo espacios en blanco) después de la barra invertida antes del salto de línea, Python lanza `SyntaxError: unexpected character after line continuation character`.",
    "concepts": [
      "SyntaxError",
      "line continuation",
      "\\"
    ],
    "tags": [
      "análisis",
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "Python ignora el espacio y continúa la línea normalmente.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Genera SyntaxError: unexpected character after line continuation character.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Genera IndentationError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Genera RuntimeWarning.",
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
    "id": "pcep-s1-039",
    "title": "Separadores Numéricos con Guión Bajo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Literales Numéricos",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código en Python 3?",
    "explanation": "Desde Python 3.6 se permite usar guiones bajos (_) como separadores visuales en literales numéricos. Son ignorados por el intérprete: 1_000_000 + 500 = 1000500.",
    "concepts": [
      "literales",
      "guión bajo",
      "separador numérico"
    ],
    "tags": [
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "monto = 1_000_000\nprint(monto + 500)",
    "expectedOutput": "1000500"
  },
  {
    "id": "pcep-s1-040",
    "title": "Separador numérico mal posicionado",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Sintaxis e Identificadores",
    "subtopic": "Errores en Literales",
    "pcepObjective": "1.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con el siguiente código?\n\n```python\nx = _100\nprint(x)\n```",
    "explanation": "_100 no es un literal numérico con guión bajo; es interpretado como el nombre de una variable. Al no estar definida previamente, se lanza `NameError: name '_100' is not defined`.",
    "concepts": [
      "NameError",
      "identificador vs literal"
    ],
    "tags": [
      "análisis",
      "pcep-1.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = _100\nprint(x)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 100.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza NameError: name '_100' is not defined.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza SyntaxError: invalid decimal literal.",
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
    "id": "pcep-s1-041",
    "title": "Literal Binario",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Bases Numéricas",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El prefijo `0b` indica un número en base binaria: 1*(2^3) + 0*(2^2) + 1*(2^1) + 1*(2^0) = 8 + 0 + 2 + 1 = 11.",
    "concepts": [
      "binario",
      "0b",
      "literales enteros"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(0b1011)",
    "expectedOutput": "11"
  },
  {
    "id": "pcep-s1-042",
    "title": "Literal Octal",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Bases Numéricas",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El prefijo `0o` indica un número octal (base 8): 1*8 + 7 = 15.",
    "concepts": [
      "octal",
      "0o",
      "literales enteros"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(0o17)",
    "expectedOutput": "15"
  },
  {
    "id": "pcep-s1-043",
    "title": "Literal Hexadecimal",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Bases Numéricas",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El prefijo `0x` indica un número hexadecimal (base 16): 1*16 + 15 (F) = 31.",
    "concepts": [
      "hexadecimal",
      "0x",
      "literales enteros"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(0x1F)",
    "expectedOutput": "31"
  },
  {
    "id": "pcep-s1-044",
    "title": "Notación Científica (Exponente)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Punto Flotante",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "La notación científica con 'e' siempre produce un número de tipo float: 3 * 10^2 = 300.0.",
    "concepts": [
      "float",
      "notación científica",
      "exponente"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(3e2)",
    "expectedOutput": "300.0"
  },
  {
    "id": "pcep-s1-045",
    "title": "Notación Científica Negativa",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Punto Flotante",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "1e-3 equivale a 1 * 10^(-3) = 0.001 en formato float.",
    "concepts": [
      "float",
      "notación científica"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(1e-3)",
    "expectedOutput": "0.001"
  },
  {
    "id": "pcep-s1-046",
    "title": "Secuencia de Escape: Salto de Línea",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Cadenas y Escapes",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "La secuencia `\\n` representa un salto de línea (line feed) dentro de la cadena.",
    "concepts": [
      "escape",
      "\\n",
      "cadenas"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('Hola\\nMundo')",
    "expectedOutput": "Hola\nMundo"
  },
  {
    "id": "pcep-s1-047",
    "title": "Secuencia de Escape: Barra Invertida",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Cadenas y Escapes",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "`\\\\` escapa la barra invertida para que se imprima un único carácter `\\`.",
    "concepts": [
      "escape",
      "\\\\",
      "cadenas"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('C:\\\\Python')",
    "expectedOutput": "C:\\Python"
  },
  {
    "id": "pcep-s1-048",
    "title": "Equivalencia Aritmética de Booleans",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Booleans como Enteros",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "En Python, bool es subclase de int: True equivale a 1 y False a 0. True + True + False = 1 + 1 + 0 = 2.",
    "concepts": [
      "bool",
      "True",
      "False",
      "int"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(True + True + False)",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s1-049",
    "title": "Multiplicación de Booleano por Entero",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Booleans en Operaciones",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida?",
    "explanation": "True equivale a 1. 1 * 50 = 50.",
    "concepts": [
      "bool",
      "aritmética"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = True * 50\nprint(x)",
    "expectedOutput": "50"
  },
  {
    "id": "pcep-s1-050",
    "title": "Conversión bool de Cadenas",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Truthy y Falsy",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "Cualquier cadena no vacía evalúa a True en bool(), incluso la cadena 'False'. Solo la cadena vacía '' evalúa a False.",
    "concepts": [
      "bool",
      "truthy",
      "falsy",
      "cadenas"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(bool('False'))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s1-051",
    "title": "Conversión bool de Cadena Vacía",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Truthy y Falsy",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "La cadena vacía '' tiene longitud 0 y evalúa a False.",
    "concepts": [
      "bool",
      "cadena vacía"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(bool(''))",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s1-052",
    "title": "Comillas dentro de Comillas sin Escapar",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Sintaxis de Strings",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con el siguiente código?\n\n```python\ns = 'It's Python'\nprint(s)\n```",
    "explanation": "La comilla simple en 'It's cierra la cadena prematuramente, dejando la 's' suelta y provocando SyntaxError.",
    "concepts": [
      "SyntaxError",
      "comillas",
      "escapado"
    ],
    "tags": [
      "análisis",
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "s = 'It's Python'\nprint(s)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime: It's Python",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza SyntaxError por comilla no escapada.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza ValueError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Imprime: It",
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
    "id": "pcep-s1-053",
    "title": "Comillas Dobles que Contienen Simples",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Comillas en Strings",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Una cadena delimitada por comillas dobles puede contener comillas simples directamente sin necesidad de escaparlas con barra invertida.",
    "concepts": [
      "strings",
      "comillas simples",
      "comillas dobles"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "s = \"It's easy\"\nprint(s)",
    "expectedOutput": "It's easy"
  },
  {
    "id": "pcep-s1-054",
    "title": "Comillas Triples Multilínea",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Strings Triples",
    "pcepObjective": "1.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud exacta de la cadena `'''A\\nB'''`?",
    "explanation": "'A' (1) + '\\n' (1) + 'B' (1) = 3 caracteres.",
    "concepts": [
      "len",
      "cadenas triples",
      "\\n"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "s = '''A\nB'''\nprint(len(s))",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s1-055",
    "title": "Tipo del Resultado de División /",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Tipo Float en División",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el tipo de dato devuelto por la expresión `type(10 / 2)`?",
    "explanation": "En Python 3, el operador de división verdadera '/' SIEMPRE devuelve un valor de tipo float, incluso si los operandos son enteros y el resultado es exacto.",
    "concepts": [
      "float",
      "type",
      "división"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(type(10 / 2) is float)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s1-056",
    "title": "Cero Inicial en Enteros en Python 3",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Prefijo de Base Obsoleto",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `x = 017` en Python 3?",
    "explanation": "En Python 3 los ceros iniciales en enteros decimales están prohibidos para evitar confusión con el antiguo formato octal de Python 2. Se debe usar `0o17`.",
    "concepts": [
      "SyntaxError",
      "ceros iniciales",
      "octal"
    ],
    "tags": [
      "análisis",
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 017\nprint(x)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 17 como decimal.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Imprime 15 como octal.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Lanza SyntaxError: leading zeros in decimal integer literals are not permitted.",
        "isCorrect": true
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
    "id": "pcep-s1-057",
    "title": "Secuencia de Escape: Retorno de Carro (\\r)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "Escapes Avanzados: \\r",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud de la cadena `'\\r\\t\\n'`?",
    "explanation": "Cada secuencia de escape de dos caracteres (`\\r`, `\\t`, `\\n`) representa un único byte/carácter especial en memoria. 1 + 1 + 1 = 3.",
    "concepts": [
      "len",
      "escapes",
      "\\r",
      "\\t",
      "\\n"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "s = '\\r\\t\\n'\nprint(len(s))",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s1-058",
    "title": "Concatenación Implícita de Literales de Cadena",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "String Literal Concatenation",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Dos literales de cadena contiguos separados únicamente por espacios en blanco son concatenados automáticamente por el analizador sintáctico en una sola cadena.",
    "concepts": [
      "concatenación implícita",
      "literales"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "s = 'Py' 'thon'\nprint(s)",
    "expectedOutput": "Python"
  },
  {
    "id": "pcep-s1-059",
    "title": "Cero Flotante Negativo y Positivo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "IEEE 754 Floats",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de evaluar `-0.0 == 0.0` en Python?",
    "explanation": "Bajo el estándar IEEE 754 de punto flotante que usa Python, el cero negativo y el cero positivo son numéricamente iguales.",
    "concepts": [
      "float",
      "IEEE 754",
      "0.0"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(-0.0 == 0.0)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s1-060",
    "title": "Tipo de dato de None",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Tipos",
    "subtopic": "NoneType",
    "pcepObjective": "1.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el nombre del tipo de dato del valor `None`?",
    "explanation": "type(None) es `<class 'NoneType'>`.",
    "concepts": [
      "NoneType",
      "None",
      "type"
    ],
    "tags": [
      "pcep-1.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(type(None).__name__)",
    "expectedOutput": "NoneType"
  },
  {
    "id": "pcep-s1-061",
    "title": "División Entera Positiva",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Floor Division",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El operador `//` efectúa una división entera truncando hacia abajo: 7 // 2 = 3.",
    "concepts": [
      "//",
      "floor division"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(7 // 2)",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s1-062",
    "title": "Operador Módulo Positivo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Modulo %",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "El operador `%` calcula el residuo de la división entera: 7 % 2 = 1.",
    "concepts": [
      "%",
      "modulo"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(7 % 2)",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s1-063",
    "title": "División Verdadera con Enteros",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "División /",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "El operador `/` siempre produce un número float: 6 / 2 = 3.0 (no 3).",
    "concepts": [
      "/",
      "float"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(6 / 2)",
    "expectedOutput": "3.0"
  },
  {
    "id": "pcep-s1-064",
    "title": "Operador de Potencia (**)",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Potencia **",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "El operador `**` calcula la potencia: 2 ** 4 = 16.",
    "concepts": [
      "**",
      "potencia"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(2 ** 4)",
    "expectedOutput": "16"
  },
  {
    "id": "pcep-s1-065",
    "title": "Precedencia de Multiplicación sobre Suma",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Precedencia Básica",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "La multiplicación tiene mayor precedencia que la suma: 2 * 3 = 6, y luego 5 + 6 = 11.",
    "concepts": [
      "precedencia",
      "*",
      "+"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(5 + 2 * 3)",
    "expectedOutput": "11"
  },
  {
    "id": "pcep-s1-066",
    "title": "Uso de Paréntesis para Alterar Precedencia",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Paréntesis",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Los paréntesis tienen la más alta prioridad: (5 + 2) = 7, luego 7 * 3 = 21.",
    "concepts": [
      "paréntesis",
      "precedencia"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print((5 + 2) * 3)",
    "expectedOutput": "21"
  },
  {
    "id": "pcep-s1-067",
    "title": "Operador de Asignación Compuesta +=",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Asignación Compuesta",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida?",
    "explanation": "x += 3 equivale a x = x + 3. 10 + 3 = 13.",
    "concepts": [
      "+=",
      "asignación compuesta"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = 10\nx += 3\nprint(x)",
    "expectedOutput": "13"
  },
  {
    "id": "pcep-s1-068",
    "title": "División Entera con Números Negativos",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Floor Division Negativa",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "En Python, `//` siempre redondea hacia el entero inferior más cercano ($-\\infty$). -7 / 2 = -3.5, redondeado hacia abajo da -4.",
    "concepts": [
      "//",
      "floor division negativa",
      "redondeo a -infinito"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(-7 // 2)",
    "expectedOutput": "-4"
  },
  {
    "id": "pcep-s1-069",
    "title": "Módulo con Dividendo Negativo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Módulo con Negativos",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Por la fórmula canónica de Python `r = a - (a // b) * b`: -7 - (-7 // 2)*2 = -7 - (-4)*2 = -7 + 8 = 1.",
    "concepts": [
      "%",
      "módulo con negativos"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(-7 % 2)",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s1-070",
    "title": "Módulo con Divisor Negativo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Módulo con Divisor Negativo",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "7 // -2 = -4. Luego 7 - (-4 * -2) = 7 - 8 = -1. El signo del resultado en módulo en Python coincide siempre con el divisor (-2).",
    "concepts": [
      "%",
      "divisor negativo"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(7 % -2)",
    "expectedOutput": "-1"
  },
  {
    "id": "pcep-s1-071",
    "title": "Asociatividad de Derecha a Izquierda de la Potencia",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Asociatividad de **",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "A diferencia de los demás operadores aritméticos, el operador de potencia `**` es asociativo de derecha a izquierda: 2 ** (3 ** 2) = 2 ** 9 = 512 (¡no 64!).",
    "concepts": [
      "**",
      "asociatividad derecha",
      "potencia"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(2 ** 3 ** 2)",
    "expectedOutput": "512"
  },
  {
    "id": "pcep-s1-072",
    "title": "Operador Unario Negativo y Potencia",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Precedencia Unario vs **",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "La potencia `**` tiene mayor precedencia que el operador unario negativo `-`. Por tanto, se evalúa como -(2 ** 2) = -4.",
    "concepts": [
      "unario",
      "precedencia",
      "**"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(-2 ** 2)",
    "expectedOutput": "-4"
  },
  {
    "id": "pcep-s1-073",
    "title": "Potencia de Base Negativa con Paréntesis",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Paréntesis con Unario",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida?",
    "explanation": "Los paréntesis fuerzan a que la base sea el número negativo -2: (-2) ** 2 = 4.",
    "concepts": [
      "paréntesis",
      "potencia base negativa"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print((-2) ** 2)",
    "expectedOutput": "4"
  },
  {
    "id": "pcep-s1-074",
    "title": "Precedencia entre // y *",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Misma Precedencia de Izquierda a Derecha",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`//` y `*` tienen la misma precedencia y se evalúan de izquierda a derecha: 10 // 3 = 3, luego 3 * 2 = 6.",
    "concepts": [
      "//",
      "*",
      "asociatividad izquierda"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(10 // 3 * 2)",
    "expectedOutput": "6"
  },
  {
    "id": "pcep-s1-075",
    "title": "División Entera con Operando Flotante",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Tipo en Floor Division",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "Si al menos un operando en `//` es de tipo float, el resultado es numéricamente entero pero de tipo float: 7.0 // 2 = 3.0.",
    "concepts": [
      "//",
      "float",
      "coerción"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(7.0 // 2)",
    "expectedOutput": "3.0"
  },
  {
    "id": "pcep-s1-076",
    "title": "Módulo con Flotantes",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Módulo con Float",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "7.5 % 2.5 = 0.0 (tipo float).",
    "concepts": [
      "%",
      "float"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(7.5 % 2.5)",
    "expectedOutput": "0.0"
  },
  {
    "id": "pcep-s1-077",
    "title": "División por Cero en Floor Division",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "ZeroDivisionError",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué excepción produce la expresión `10 // 0`?",
    "explanation": "Tanto la división `/`, la división entera `//` como el módulo `%` lanzan `ZeroDivisionError: integer division or modulo by zero`.",
    "concepts": [
      "ZeroDivisionError",
      "//",
      "excepciones"
    ],
    "tags": [
      "análisis",
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(10 // 0)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime 0.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Imprime Infinity.",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Lanza ZeroDivisionError.",
        "isCorrect": true
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
    "id": "pcep-s1-078",
    "title": "Asignación Compuesta Multi-Operador",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Asignación Compuesta Evaluada",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "En `x *= 2 + 3`, la parte derecha `2 + 3` se evalúa COMPLETAMENTE antes de aplicar la multiplicación: x *= 5 -> x = 4 * 5 = 20 (no 4*2 + 3 = 11).",
    "concepts": [
      "*=",
      "precedencia en asignación"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 4\nx *= 2 + 3\nprint(x)",
    "expectedOutput": "20"
  },
  {
    "id": "pcep-s1-079",
    "title": "Encadenamiento de Operadores de Comparación",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Chained Comparisons",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `1 < 2 < 3 == 3` en Python?",
    "explanation": "Python encadena comparaciones: se evalúa como `(1 < 2) and (2 < 3) and (3 == 3)`. Las tres condiciones son True, por lo que el resultado es True.",
    "concepts": [
      "comparaciones encadenadas",
      "and"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(1 < 2 < 3 == 3)",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s1-080",
    "title": "Comparación Encadenada con Falsedad Temprana",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores Numéricos",
    "subtopic": "Chained Comparisons Short-Circuit",
    "pcepObjective": "1.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `3 > 2 > 4 == 4`?",
    "explanation": "Se evalúa como `(3 > 2) and (2 > 4) and (4 == 4)`. Como `2 > 4` es False, toda la expresión encadenada evalúa a False.",
    "concepts": [
      "comparaciones encadenadas",
      "cortocircuito"
    ],
    "tags": [
      "pcep-1.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(3 > 2 > 4 == 4)",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s1-081",
    "title": "Separador Personalizado con sep=",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print: sep=",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El argumento con nombre `sep` reemplaza el espacio por defecto con el valor indicado ('-'): 2026-10-12.",
    "concepts": [
      "print",
      "sep="
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(2026, 10, 12, sep='-')",
    "expectedOutput": "2026-10-12"
  },
  {
    "id": "pcep-s1-082",
    "title": "Fin de Línea Personalizado con end=",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print: end=",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`end=' '` sustituye el salto de línea por un espacio, uniendo la salida del segundo print en la misma línea: Hola Mundo.",
    "concepts": [
      "print",
      "end="
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('Hola', end=' ')\nprint('Mundo')",
    "expectedOutput": "Hola Mundo"
  },
  {
    "id": "pcep-s1-083",
    "title": "sep Vacío (sep='')",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print: sep=''",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Con `sep=''`, los argumentos se unen directamente sin ningún espacio separador: Python3.",
    "concepts": [
      "print",
      "sep=''"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('Python', '3', sep='')",
    "expectedOutput": "Python3"
  },
  {
    "id": "pcep-s1-084",
    "title": "Tipo de Dato Devuelto por input()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Función input()",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "theory",
    "statement": "¿Qué tipo de dato retorna SIEMPRE la función estándar incorporada `input()` en Python 3?",
    "explanation": "En Python 3, la función input() siempre devuelve una cadena de texto (str), sin importar lo que el usuario haya escrito.",
    "concepts": [
      "input()",
      "str",
      "tipo devuelto"
    ],
    "tags": [
      "teoría",
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "int si el usuario ingresó solo dígitos numéricos.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "str en todos los casos sin excepción.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "float si contiene un punto decimal.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "bool si el usuario escribió 'True' o 'False'.",
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
    "id": "pcep-s1-085",
    "title": "Conversión Explícita con int()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Conversión int()",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "int('25') convierte la cadena '25' al número entero 25. 25 + 5 = 30.",
    "concepts": [
      "int()",
      "conversión de tipos"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "entrada = '25'\nnumero = int(entrada)\nprint(numero + 5)",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s1-086",
    "title": "Conversión Explícita con float()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Conversión float()",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "float('10') convierte la cadena al número flotante 10.0.",
    "concepts": [
      "float()",
      "conversión"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(float('10'))",
    "expectedOutput": "10.0"
  },
  {
    "id": "pcep-s1-087",
    "title": "Múltiples Argumentos en print() por Defecto",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print por defecto",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "El separador por defecto de print() entre argumentos es un solo espacio en blanco: 1 2 3.",
    "concepts": [
      "print",
      "espacio por defecto"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(1, 2, 3)",
    "expectedOutput": "1 2 3"
  },
  {
    "id": "pcep-s1-088",
    "title": "Combinación de sep y end",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print: sep y end combinados",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta producida por el siguiente código?",
    "explanation": "Línea 1 imprime: A*B*C#. Línea 2 imprime: D. Salida concatenada: A*B*C#D.",
    "concepts": [
      "sep=",
      "end=",
      "combinación"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('A', 'B', 'C', sep='*', end='#')\nprint('D')",
    "expectedOutput": "A*B*C#D"
  },
  {
    "id": "pcep-s1-089",
    "title": "Concatenación de input sin Convertir",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "input() sin conversión",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "Supón que el usuario ingresa '10' en el primer input y '20' en el segundo:\n\n```python\na = input()\nb = input()\nprint(a + b)\n```\n¿Qué se imprimirá?",
    "explanation": "Como input() devuelve cadenas, el operador `+` realiza concatenación de texto, no suma aritmética: '10' + '20' = '1020'.",
    "concepts": [
      "input()",
      "concatenación",
      "str"
    ],
    "tags": [
      "análisis",
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "options": [
      {
        "id": "opt-1",
        "text": "30",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "1020",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "TypeError",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "10 20",
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
    "id": "pcep-s1-090",
    "title": "Conversión de Float en String a int() Directo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "ValueError en int()",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `x = int('3.14')`?",
    "explanation": "int() no puede convertir directamente una cadena con punto decimal. Lanza `ValueError: invalid literal for int() with base 10: '3.14'`. Para lograrlo se debe hacer `int(float('3.14'))`.",
    "concepts": [
      "ValueError",
      "int()",
      "conversión"
    ],
    "tags": [
      "análisis",
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = int('3.14')\nprint(x)",
    "options": [
      {
        "id": "opt-1",
        "text": "x toma el valor 3 (truncando los decimales).",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza ValueError: invalid literal for int().",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "x toma el valor 3.14.",
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
    "id": "pcep-s1-091",
    "title": "Conversión de Float en Cadena vía float() a int()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Conversión en Dos Pasos",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "float('3.99') produce 3.99, y luego int(3.99) trunca la parte decimal produciendo el entero 3.",
    "concepts": [
      "int()",
      "float()",
      "truncamiento"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "x = int(float('3.99'))\nprint(x)",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s1-092",
    "title": "print() sin Argumentos",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "print() vacío",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Qué imprime exactamente una llamada a `print()` sin argumentos?",
    "explanation": "print() sin argumentos imprime únicamente el carácter de fin de línea por defecto (`\\n`), es decir, una línea en blanco.",
    "concepts": [
      "print()",
      "salto de línea"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('A')\nprint()\nprint('B')",
    "expectedOutput": "A\n\nB"
  },
  {
    "id": "pcep-s1-093",
    "title": "Parámetro sep para Formato de Fecha",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "sep= en print",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "code_completion",
    "statement": "Completa con el argumento con nombre necesario para que la fecha se imprima separada por barras '12/10/2026':",
    "explanation": "El argumento con nombre es `sep='/'`.",
    "concepts": [
      "sep=",
      "argumento con nombre"
    ],
    "tags": [
      "completar",
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "starterCode": "print('12', '10', '2026', ____)",
    "expectedOutput": "12/10/2026",
    "acceptableSolutions": [
      "sep='/'",
      "sep=\"/\""
    ]
  },
  {
    "id": "pcep-s1-094",
    "title": "Conversión de Entero a Cadena con str()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Función str()",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "str(5) convierte el número al texto '5'. Al sumar '5' + '5' se concatenan dando '55'.",
    "concepts": [
      "str()",
      "concatenación"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = 5\nb = str(a) + str(a)\nprint(b)",
    "expectedOutput": "55"
  },
  {
    "id": "pcep-s1-095",
    "title": "Argumento Posicional Después de sep con Nombre",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Sintaxis de Argumentos en print",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con el siguiente código?\n\n```python\nprint('A', sep='-', 'B')\n```",
    "explanation": "En la sintaxis de llamadas de funciones en Python, los argumentos posicionales NO pueden ir después de argumentos con nombre (keyword arguments). Lanza `SyntaxError: positional argument follows keyword argument`.",
    "concepts": [
      "SyntaxError",
      "keyword argument",
      "posicional"
    ],
    "tags": [
      "análisis",
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('A', sep='-', 'B')",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime: A-B",
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
        "text": "Imprime: A B",
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
    "id": "pcep-s1-096",
    "title": "sep aplicado con un solo argumento",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "sep con único argumento",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El argumento `sep` solo se inserta ENTRE múltiples argumentos. Si se le pasa un solo argumento a print(), `sep` no tiene ningún efecto: se imprime simplemente 'Hola'.",
    "concepts": [
      "print",
      "sep=",
      "un solo argumento"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Hola', sep='---')",
    "expectedOutput": "Hola"
  },
  {
    "id": "pcep-s1-097",
    "title": "Argumento end= None",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "end=None",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Qué ocurre si se pasa explícitamente `end=None` a print()?",
    "explanation": "En la especificación de `print(*objects, sep=' ', end='\\n')`, pasar `None` restaura el comportamiento por defecto (`\\n`).",
    "concepts": [
      "print",
      "end=None"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Línea 1', end=None)\nprint('Línea 2')",
    "expectedOutput": "Línea 1\nLínea 2"
  },
  {
    "id": "pcep-s1-098",
    "title": "Replicación de Cadena en print",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Operador * con Cadenas",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El operador `*` entre una cadena y un entero replica la cadena: 'Ha' * 3 = 'HaHaHa'.",
    "concepts": [
      "*",
      "replicación de cadenas"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Ha' * 3)",
    "expectedOutput": "HaHaHa"
  },
  {
    "id": "pcep-s1-099",
    "title": "Replicación con Entero Cero o Negativo",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "Replicación Nula",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud de la cadena producida por `'Python' * -2`?",
    "explanation": "Replicar una cadena por un entero menor o igual a 0 produce siempre una cadena vacía `''`, cuya longitud es 0.",
    "concepts": [
      "*",
      "cadena vacía",
      "len"
    ],
    "tags": [
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "s = 'Python' * -2\nprint(len(s))",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s1-100",
    "title": "Conversión de Booleanos a Cadena en Concatenación",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida",
    "subtopic": "TypeError en Concatenación",
    "pcepObjective": "1.5",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre al ejecutar `print('Resultado: ' + True)`?",
    "explanation": "Python no convierte automáticamente booleanos a cadenas al usar `+`. Intentar concatenar str con bool lanza `TypeError: can only concatenate str (not 'bool') to str`.",
    "concepts": [
      "TypeError",
      "concatenación",
      "tipado fuerte"
    ],
    "tags": [
      "análisis",
      "pcep-1.5",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Resultado: ' + True)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime: Resultado: True",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Imprime: Resultado: 1",
        "isCorrect": false
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError: can only concatenate str (not 'bool') to str.",
        "isCorrect": true
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
  }
];

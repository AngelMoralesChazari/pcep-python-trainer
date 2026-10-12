import { Exercise } from '../../types';

export const SECTION_3_EXERCISES: Exercise[] = [
  {
    "id": "pcep-s3-001",
    "title": "Indexación Básica de Listas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Indexación",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst[1]` para `lst = [10, 20, 30]`?",
    "explanation": "Las listas en Python tienen índice base cero (0-indexed). El índice 1 corresponde al segundo elemento: 20.",
    "concepts": [
      "listas",
      "indexación",
      "índice 0"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30]\nprint(lst[1])",
    "expectedOutput": "20"
  },
  {
    "id": "pcep-s3-002",
    "title": "Índice Negativo en Lista",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Índices Negativos",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "El índice -1 accede al último elemento de la secuencia: 30.",
    "concepts": [
      "listas",
      "índice -1",
      "último elemento"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30]\nprint(lst[-1])",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s3-003",
    "title": "Método append()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método append",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "El método `append()` agrega un único elemento al final de la lista.",
    "concepts": [
      "append",
      "listas"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2]\nlst.append(3)\nprint(lst)",
    "expectedOutput": "[1, 2, 3]"
  },
  {
    "id": "pcep-s3-004",
    "title": "Método insert()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método insert",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "`lst.insert(1, 99)` inserta 99 en el índice 1, desplazando los elementos siguientes a la derecha: [10, 99, 20].",
    "concepts": [
      "insert",
      "listas",
      "desplazamiento"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20]\nlst.insert(1, 99)\nprint(lst)",
    "expectedOutput": "[10, 99, 20]"
  },
  {
    "id": "pcep-s3-005",
    "title": "Método pop() sin Argumento",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método pop",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst.pop()` para `lst = ['a', 'b', 'c']`?",
    "explanation": "`pop()` sin argumentos elimina y devuelve el último elemento de la lista ('c').",
    "concepts": [
      "pop",
      "eliminar elemento"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = ['a', 'b', 'c']\neliminado = lst.pop()\nprint(eliminado)",
    "expectedOutput": "c"
  },
  {
    "id": "pcep-s3-006",
    "title": "Función len() con Listas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Función len",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "len() devuelve el número de elementos contenidos en la lista: 4.",
    "concepts": [
      "len",
      "longitud de lista"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "nums = [5, 10, 15, 20]\nprint(len(nums))",
    "expectedOutput": "4"
  },
  {
    "id": "pcep-s3-007",
    "title": "Operador in con Listas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Pertenencia in",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `3 in [1, 2, 3, 4]`?",
    "explanation": "El operador `in` verifica si un valor existe dentro de la colección: 3 sí está presente -> True.",
    "concepts": [
      "in",
      "pertenencia"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(3 in [1, 2, 3, 4])",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s3-008",
    "title": "Concatenación de Listas con +",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Operador +",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "El operador `+` concatena dos listas en una nueva: [1, 2] + [3, 4] = [1, 2, 3, 4].",
    "concepts": [
      "+",
      "concatenación de listas"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2]\nb = [3, 4]\nprint(a + b)",
    "expectedOutput": "[1, 2, 3, 4]"
  },
  {
    "id": "pcep-s3-009",
    "title": "Replicación de Listas con *",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Operador *",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por `[0] * 3`?",
    "explanation": "El operador `*` replica los elementos de la lista: [0, 0, 0].",
    "concepts": [
      "*",
      "replicación"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print([0] * 3)",
    "expectedOutput": "[0, 0, 0]"
  },
  {
    "id": "pcep-s3-010",
    "title": "Slicing Básico de Listas [start:stop]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Slicing",
    "pcepObjective": "3.1",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst[1:3]` para `lst = [10, 20, 30, 40]`?",
    "explanation": "El slice [1:3] extrae desde el índice 1 hasta el 3 exclusivo: elementos en posiciones 1 y 2 -> [20, 30].",
    "concepts": [
      "slicing",
      "sublista"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30, 40]\nprint(lst[1:3])",
    "expectedOutput": "[20, 30]"
  },
  {
    "id": "pcep-s3-011",
    "title": "Asignación por Referencia vs Copia",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Referencia de Listas",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`b = a` asigna la MISMA referencia en memoria. Modificar `b.append(4)` modifica la lista original compartida por `a`. `a` ahora es [1, 2, 3, 4].",
    "concepts": [
      "referencia mutable",
      "efecto colateral"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
    "expectedOutput": "[1, 2, 3, 4]"
  },
  {
    "id": "pcep-s3-012",
    "title": "Copia Superficial con Slicing Completo [:]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Copia con [:]",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`b = a[:]` crea una copia independiente. Agregar 4 a `b` no altera a `a`: `a` sigue siendo [1, 2, 3].",
    "concepts": [
      "copia superficial",
      "slicing [:]"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)",
    "expectedOutput": "[1, 2, 3]"
  },
  {
    "id": "pcep-s3-013",
    "title": "Método sort() in-place y Retorno None",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método sort",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor de retorno de `lst.sort()`?",
    "explanation": "El método `sort()` ordena la lista in-place (in situ) y retorna `None`.",
    "concepts": [
      "sort()",
      "retorno None",
      "in-place"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [3, 1, 2]\nretorno = lst.sort()\nprint(retorno)",
    "expectedOutput": "None"
  },
  {
    "id": "pcep-s3-014",
    "title": "Método reverse() in-place",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método reverse",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida tras ejecutar `lst.reverse()`?",
    "explanation": "`reverse()` invierte el orden de los elementos in-place en la lista: [30, 20, 10].",
    "concepts": [
      "reverse()",
      "in-place"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30]\nlst.reverse()\nprint(lst)",
    "expectedOutput": "[30, 20, 10]"
  },
  {
    "id": "pcep-s3-015",
    "title": "Método extend() vs append()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "extend vs append",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `a.extend([3, 4])`?",
    "explanation": "`extend()` desempaqueta los elementos del iterable y los añade individualmente al final: [1, 2, 3, 4].",
    "concepts": [
      "extend()",
      "listas"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2]\na.extend([3, 4])\nprint(a)",
    "expectedOutput": "[1, 2, 3, 4]"
  },
  {
    "id": "pcep-s3-016",
    "title": "append() Añadiendo una Lista Completa como Sublista",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "append de lista",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud de `a` tras ejecutar `a.append([3, 4])` si `a = [1, 2]`?",
    "explanation": "`append()` añade la lista entera como un único elemento: `[1, 2, [3, 4]]`. La longitud es 3.",
    "concepts": [
      "append()",
      "lista anidada",
      "len"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a = [1, 2]\na.append([3, 4])\nprint(len(a))",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s3-017",
    "title": "Instrucción del para Eliminar por Índice",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Instrucción del",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`del lst[1]` elimina el elemento en el índice 1 (20). La lista queda: [10, 30].",
    "concepts": [
      "del",
      "eliminación por índice"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30]\ndel lst[1]\nprint(lst)",
    "expectedOutput": "[10, 30]"
  },
  {
    "id": "pcep-s3-018",
    "title": "Método remove() por Valor",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método remove",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida tras ejecutar `lst.remove(2)` en `lst = [1, 2, 3, 2]`?",
    "explanation": "`remove(x)` elimina únicamente la PRIMERA ocurrencia de x en la lista. Queda: [1, 3, 2].",
    "concepts": [
      "remove()",
      "primera ocurrencia"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3, 2]\nlst.remove(2)\nprint(lst)",
    "expectedOutput": "[1, 3, 2]"
  },
  {
    "id": "pcep-s3-019",
    "title": "remove() con Valor Inexistente",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "ValueError en remove",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si intentamos hacer `lst.remove(99)` en `lst = [1, 2, 3]`?",
    "explanation": "Si el elemento no está en la lista, `remove()` lanza inmediatamente `ValueError: list.remove(x): x not in list`.",
    "concepts": [
      "ValueError",
      "remove()"
    ],
    "tags": [
      "análisis",
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3]\nlst.remove(99)",
    "options": [
      {
        "id": "opt-1",
        "text": "No hace nada y la lista queda intacta.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza ValueError: list.remove(x): x not in list.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza IndexError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Retorna False.",
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
    "id": "pcep-s3-020",
    "title": "Slicing con Paso: [::2]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Slicing con Step",
    "pcepObjective": "3.1",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst[::2]` para `lst = [1, 2, 3, 4, 5]`?",
    "explanation": "El slice `[::2]` toma elementos cada 2 posiciones empezando en 0: índices 0, 2, 4 -> [1, 3, 5].",
    "concepts": [
      "slicing",
      "step=2"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3, 4, 5]\nprint(lst[::2])",
    "expectedOutput": "[1, 3, 5]"
  },
  {
    "id": "pcep-s3-021",
    "title": "Inversión de Lista con Slicing Negativo: [::-1]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Slicing inverso",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "`[::-1]` crea una nueva lista invertida con paso -1 sin mutar la lista original: [3, 2, 1].",
    "concepts": [
      "[::-1]",
      "inversión de lista"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3]\nprint(lst[::-1])",
    "expectedOutput": "[3, 2, 1]"
  },
  {
    "id": "pcep-s3-022",
    "title": "Asignación a un Slice de Lista",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Slice Assignment",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida por este código?",
    "explanation": "Asignar a un slice reemplaza el rango seleccionado. `lst[1:3]` (que eran [2, 3]) se sustituye por `[8, 9]`: [1, 8, 9, 4].",
    "concepts": [
      "slice assignment",
      "mutabilidad"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3, 4]\nlst[1:3] = [8, 9]\nprint(lst)",
    "expectedOutput": "[1, 8, 9, 4]"
  },
  {
    "id": "pcep-s3-023",
    "title": "Asignación a Slice que Altera el Tamaño",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Slice Replacement Dinámico",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`lst[1:2]` (el elemento 2) es reemplazado por tres elementos `[10, 20, 30]`: [1, 10, 20, 30, 3].",
    "concepts": [
      "slice assignment",
      "expansión de lista"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3]\nlst[1:2] = [10, 20, 30]\nprint(lst)",
    "expectedOutput": "[1, 10, 20, 30, 3]"
  },
  {
    "id": "pcep-s3-024",
    "title": "Eliminación de Rango con del sobre Slice",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "del en Slicing",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`del lst[1:3]` borra los elementos en los índices 1 y 2 (20 y 30). Queda: [10, 40].",
    "concepts": [
      "del",
      "borrado de rango"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [10, 20, 30, 40]\ndel lst[1:3]\nprint(lst)",
    "expectedOutput": "[10, 40]"
  },
  {
    "id": "pcep-s3-025",
    "title": "Índice Fuera de Rango en Indexación Directa vs Slicing",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "IndexError vs Slicing",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué diferencia existe entre `lst[100]` y `lst[100:200]` si `lst = [1, 2, 3]`?",
    "explanation": "La indexación directa fuera de rango (`lst[100]`) lanza `IndexError: list index out of range`. En cambio, el slicing fuera de límites (`lst[100:200]`) es tolerante y devuelve una lista vacía `[]` sin error.",
    "concepts": [
      "IndexError",
      "tolerancia de slicing"
    ],
    "tags": [
      "análisis",
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3]\n# Comparar lst[100] frente a lst[100:200]",
    "options": [
      {
        "id": "opt-1",
        "text": "Ambas expresiones lanzan IndexError.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "lst[100] lanza IndexError, mientras que lst[100:200] devuelve [] sin error.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Ambas devuelven None.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "lst[100:200] lanza IndexError y lst[100] devuelve None.",
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
    "id": "pcep-s3-026",
    "title": "Comprensión de Listas Básica (List Comprehension)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "List Comprehension",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "Evalúa x ** 2 para cada x en range(4) (0, 1, 2, 3): [0, 1, 4, 9].",
    "concepts": [
      "list comprehension",
      "cuadrados"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "cuadrados = [x ** 2 for x in range(4)]\nprint(cuadrados)",
    "expectedOutput": "[0, 1, 4, 9]"
  },
  {
    "id": "pcep-s3-027",
    "title": "Comprensión de Listas con Filtro if",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "List Comprehension con if",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Filtra los números pares de range(6): 0, 2, 4. Multiplica cada uno por 10: [0, 20, 40].",
    "concepts": [
      "list comprehension con if"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "pares = [x * 10 for x in range(6) if x % 2 == 0]\nprint(pares)",
    "expectedOutput": "[0, 20, 40]"
  },
  {
    "id": "pcep-s3-028",
    "title": "Trampa de Replicación de Lista Anidada: [[0]] * 3",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Referencias Compartidas en Multiplicación",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "La multiplicación `[[0]] * 3` replica la MISMA referencia a la sublista interna 3 veces. Modificar `matriz[0][0] = 5` altera las 3 posiciones: [[5], [5], [5]].",
    "concepts": [
      "referencias compartidas",
      "replicación de sublistas"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "matriz = [[0]] * 3\nmatriz[0][0] = 5\nprint(matriz)",
    "expectedOutput": "[[5], [5], [5]]"
  },
  {
    "id": "pcep-s3-029",
    "title": "Método index() con Múltiples Ocurrencias",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método index",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst.index(2)` en `lst = [1, 2, 3, 2]`?",
    "explanation": "`index(x)` devuelve el índice de la PRIMERA aparición del elemento (índice 1).",
    "concepts": [
      "index()",
      "primera aparición"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = [1, 2, 3, 2]\nprint(lst.index(2))",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s3-030",
    "title": "Método count() en Listas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Listas",
    "subtopic": "Método count",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `lst.count('a')` para `lst = ['a', 'b', 'a', 'c', 'a']`?",
    "explanation": "`count(x)` devuelve la cantidad de veces que x aparece en la lista: 3.",
    "concepts": [
      "count()",
      "frecuencia"
    ],
    "tags": [
      "pcep-3.1",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "lst = ['a', 'b', 'a', 'c', 'a']\nprint(lst.count('a'))",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s3-031",
    "title": "Tupla de un Solo Elemento con Coma",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Tupla Unitaria",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es el tipo de dato de `x = (42,)`?",
    "explanation": "La coma `,` es lo que define a una tupla en Python. `(42,)` es una tupla.",
    "concepts": [
      "tupla unitaria",
      "coma final",
      "type"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = (42,)\nprint(type(x).__name__)",
    "expectedOutput": "tuple"
  },
  {
    "id": "pcep-s3-032",
    "title": "Paréntesis sin Coma: No es Tupla",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Paréntesis Aritmético",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es el tipo de dato de `x = (42)`?",
    "explanation": "Sin coma, los paréntesis simplemente agrupan la expresión aritmética; el valor resultante es un entero (`int`).",
    "concepts": [
      "paréntesis aritmético",
      "int vs tuple"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x = (42)\nprint(type(x).__name__)",
    "expectedOutput": "int"
  },
  {
    "id": "pcep-s3-033",
    "title": "Inmutabilidad de Tuplas (TypeError al Asignar)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Inmutabilidad",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `t = (1, 2, 3); t[0] = 99`?",
    "explanation": "Las tuplas son inmutables: no permiten modificar sus elementos. Lanza `TypeError: 'tuple' object does not support item assignment`.",
    "concepts": [
      "TypeError",
      "inmutabilidad de tuplas"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "t = (1, 2, 3)\nt[0] = 99",
    "options": [
      {
        "id": "opt-1",
        "text": "Modifica el primer elemento a 99.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: 'tuple' object does not support item assignment.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza AttributeError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Convierte la tupla a lista automáticamente.",
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
    "id": "pcep-s3-034",
    "title": "Indexación en Tuplas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Indexación",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `t[-1]` para `t = (10, 20, 30)`?",
    "explanation": "Las tuplas se indexan igual que las listas: t[-1] es el último elemento (30).",
    "concepts": [
      "tuplas",
      "índice -1"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "t = (10, 20, 30)\nprint(t[-1])",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s3-035",
    "title": "Concatenación de Tuplas con +",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Concatenación",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `(1, 2) + (3, 4)`?",
    "explanation": "El operador `+` crea una nueva tupla combinando ambas: (1, 2, 3, 4).",
    "concepts": [
      "+",
      "concatenación de tuplas"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print((1, 2) + (3, 4))",
    "expectedOutput": "(1, 2, 3, 4)"
  },
  {
    "id": "pcep-s3-036",
    "title": "Desempaquetado de Tupla Básico",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Tuple Unpacking",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "La tupla `(5, 10)` se desempaqueta en `x = 5` e `y = 10`. 5 * 10 = 50.",
    "concepts": [
      "tuple unpacking",
      "desempaquetado"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "x, y = (5, 10)\nprint(x * y)",
    "expectedOutput": "50"
  },
  {
    "id": "pcep-s3-037",
    "title": "Función tuple() a partir de una Lista",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Conversión a Tupla",
    "pcepObjective": "3.2",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`tuple([1, 2, 3])` convierte la lista en la tupla `(1, 2, 3)`.",
    "concepts": [
      "tuple()",
      "conversión"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(tuple([1, 2, 3]))",
    "expectedOutput": "(1, 2, 3)"
  },
  {
    "id": "pcep-s3-038",
    "title": "Desempaquetado con Cantidad Desigual de Variables",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "ValueError en Unpacking",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `a, b = (1, 2, 3)`?",
    "explanation": "El número de variables a la izquierda debe coincidir exactamente con el número de elementos a la derecha; si no, lanza `ValueError: too many values to unpack (expected 2)`.",
    "concepts": [
      "ValueError",
      "desempaquetado desigual"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "a, b = (1, 2, 3)",
    "options": [
      {
        "id": "opt-1",
        "text": "a toma 1 y b toma 2 (el 3 se descarta).",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza ValueError: too many values to unpack.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "b toma la tupla (2, 3).",
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
    "id": "pcep-s3-039",
    "title": "Replicación de Tuplas con *",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Replicación *",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `('x',) * 3`?",
    "explanation": "La tupla unitaria replicada 3 veces da `('x', 'x', 'x')`.",
    "concepts": [
      "*",
      "replicación de tupla"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(('x',) * 3)",
    "expectedOutput": "('x', 'x', 'x')"
  },
  {
    "id": "pcep-s3-040",
    "title": "Slicing en Tuplas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Slicing de Tuplas",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `t[1:3]` para `t = (10, 20, 30, 40)`?",
    "explanation": "El slicing en tuplas devuelve una nueva tupla con los elementos extraídos: (20, 30).",
    "concepts": [
      "slicing en tuplas"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "t = (10, 20, 30, 40)\nprint(t[1:3])",
    "expectedOutput": "(20, 30)"
  },
  {
    "id": "pcep-s3-041",
    "title": "Tupla como Clave de Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Hashabilidad de Tuplas",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Las tuplas con elementos inmutables son hashables e inmutables, por lo que son totalmente válidas como claves de diccionarios. Acceder a `d[(1, 2)]` devuelve 'Origen'.",
    "concepts": [
      "tuplas como claves",
      "inmutabilidad",
      "hashable"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {(1, 2): 'Origen'}\nprint(d[(1, 2)])",
    "expectedOutput": "Origen"
  },
  {
    "id": "pcep-s3-042",
    "title": "Intento de Usar del sobre un Elemento de Tupla",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "del en Elemento de Tupla",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `t = (1, 2, 3); del t[0]`?",
    "explanation": "Dado que las tuplas son inmutables, eliminar elementos individuales está prohibido y lanza `TypeError: 'tuple' object doesn't support item deletion`.",
    "concepts": [
      "TypeError",
      "del en tupla"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "t = (1, 2, 3)\ndel t[0]",
    "options": [
      {
        "id": "opt-1",
        "text": "Elimina el 1 y t queda como (2, 3).",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: 'tuple' object doesn't support item deletion.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza AttributeError.",
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
    "id": "pcep-s3-043",
    "title": "Eliminar la Tupla Completa con del",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "del en Identificador de Tupla",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `t = (1, 2); del t; print(t)`?",
    "explanation": "`del t` destruye la referencia a la variable. Intentar acceder a `t` posteriormente produce `NameError: name 't' is not defined`.",
    "concepts": [
      "del",
      "NameError"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "t = (1, 2)\ndel t\nprint(t)",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime () (tupla vacía).",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza NameError: name 't' is not defined.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Imprime None.",
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
    "id": "pcep-s3-044",
    "title": "Tupla Anidada (Matriz de Tuplas)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Tuplas Anidadas",
    "pcepObjective": "3.2",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `t[1][0]`?",
    "explanation": "`t[1]` es la tupla `(3, 4)`. Su primer elemento con índice 0 es 3.",
    "concepts": [
      "tuplas anidadas",
      "doble índice"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "t = ((1, 2), (3, 4))\nprint(t[1][0])",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s3-045",
    "title": "Tupla que Contiene una Lista Mutable",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Mutabilidad Interna en Tuplas",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Qué ocurre al modificar una lista contenida dentro de una tupla?",
    "explanation": "Aunque la tupla es inmutable (sus referencias no cambian), los objetos mutables contenidos en ella (como una lista) sí pueden modificarse in-place. La lista pasa a ser `[1, 2, 99]`.",
    "concepts": [
      "tupla con lista",
      "mutabilidad interna"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "t = (10, [1, 2])\nt[1].append(99)\nprint(t)",
    "expectedOutput": "(10, [1, 2, 99])"
  },
  {
    "id": "pcep-s3-046",
    "title": "Operador += en Lista dentro de Tupla",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Trampa Clásica de += en Tupla",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre con `t = (1, [2]); t[1] += [3]`?",
    "explanation": "¡Una de las preguntas trampa más famosas de Python! `t[1].extend([3])` modifica la lista con éxito, pero la reasignación interna `t[1] = ...` falla con `TypeError`. Al final, la lista SE MODIFICA y luego SE LANZA TypeError.",
    "concepts": [
      "trampa +=",
      "TypeError",
      "mutación antes de error"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "t = (1, [2])\nt[1] += [3]",
    "options": [
      {
        "id": "opt-1",
        "text": "Se ejecuta sin errores y t queda (1, [2, 3]).",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError, pero la lista interna se modifica a [2, 3].",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza TypeError y la lista no cambia.",
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
    "id": "pcep-s3-047",
    "title": "Desempaquetado Extendido con Asterisco (*rest)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Extended Unpacking",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "`*resto` captura los elementos sobrantes como una lista: `resto = [2, 3, 4]`. `a = 1`, `b = 5`. Suma de resto: 2 + 3 + 4 = 9.",
    "concepts": [
      "*rest",
      "extended unpacking"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a, *resto, b = (1, 2, 3, 4, 5)\nprint(sum(resto))",
    "expectedOutput": "9"
  },
  {
    "id": "pcep-s3-048",
    "title": "Tupla sin Paréntesis (Packing Implícito)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Tuple Packing",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el tipo de dato de `x = 1, 2, 3`?",
    "explanation": "En Python, los valores separados por comas sin delimitadores se empaquetan automáticamente como una tupla (tuple packing).",
    "concepts": [
      "tuple packing",
      "type"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "x = 1, 2, 3\nprint(type(x).__name__)",
    "expectedOutput": "tuple"
  },
  {
    "id": "pcep-s3-049",
    "title": "Comparación Lexicográfica entre Tuplas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Comparación de Tuplas",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `(1, 2, 3) < (1, 2, 4)`?",
    "explanation": "Las tuplas se comparan elemento por elemento. Los primeros dos elementos coinciden; en el tercero, 3 < 4 es True.",
    "concepts": [
      "comparación de tuplas",
      "orden lexicográfico"
    ],
    "tags": [
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print((1, 2, 3) < (1, 2, 4))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s3-050",
    "title": "Tupla con Lista como Clave de Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Tuplas",
    "subtopic": "Unhashable Type in Tuple Key",
    "pcepObjective": "3.2",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre al intentar usar una tupla que contiene una lista como clave de un diccionario?\n\n```python\nd = {(1, [2]): 'Valor'}\n```",
    "explanation": "Para que una tupla sea hashable, TODOS sus elementos deben ser hashables. Al contener una lista (tipo mutable no hashable), se lanza `TypeError: unhashable type: 'list'`.",
    "concepts": [
      "TypeError",
      "unhashable",
      "claves de diccionario"
    ],
    "tags": [
      "análisis",
      "pcep-3.2",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {(1, [2]): 'Valor'}",
    "options": [
      {
        "id": "opt-1",
        "text": "Se crea el diccionario normalmente.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: unhashable type: 'list'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza KeyError.",
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
    "id": "pcep-s3-051",
    "title": "Acceso a Valor por Clave en Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Acceso por Clave",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola por el siguiente código?",
    "explanation": "Acceder mediante corchetes `capitales['Francia']` devuelve el valor asociado: 'París'.",
    "concepts": [
      "diccionarios",
      "clave-valor"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "capitales = {'España': 'Madrid', 'Francia': 'París'}\nprint(capitales['Francia'])",
    "expectedOutput": "París"
  },
  {
    "id": "pcep-s3-052",
    "title": "Modificación de Valor Existente en Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Mutabilidad de Diccionario",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Los diccionarios son mutables. Asignar `precios['pan'] = 1.5` sobrescribe el valor previo (1.0).",
    "concepts": [
      "diccionarios",
      "mutabilidad"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "precios = {'pan': 1.0, 'leche': 0.8}\nprecios['pan'] = 1.5\nprint(precios['pan'])",
    "expectedOutput": "1.5"
  },
  {
    "id": "pcep-s3-053",
    "title": "Adición de Nueva Clave a Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Agregar Clave",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud del diccionario tras ejecutar este código?",
    "explanation": "Asignar a una clave inexistente (`d['c'] = 3`) añade un nuevo par clave-valor. La longitud pasa a ser 3.",
    "concepts": [
      "diccionarios",
      "len",
      "nueva clave"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nd['c'] = 3\nprint(len(d))",
    "expectedOutput": "3"
  },
  {
    "id": "pcep-s3-054",
    "title": "Operador in en Diccionarios (Busca en Claves)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Operador in en Claves",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'a' in {'a': 1, 'b': 2}`?",
    "explanation": "Por defecto, el operador `in` busca exclusivamente en las CLAVES del diccionario: 'a' está en las claves -> True.",
    "concepts": [
      "in en diccionarios",
      "claves"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('a' in {'a': 1, 'b': 2})",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s3-055",
    "title": "Operador in Buscando Valor (Devuelve False)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "in no busca en valores",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `1 in {'a': 1, 'b': 2}`?",
    "explanation": "`in` busca en las claves, no en los valores. Como 1 no es una clave del diccionario, devuelve False.",
    "concepts": [
      "in en valores",
      "False"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(1 in {'a': 1, 'b': 2})",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s3-056",
    "title": "Acceso a Clave Inexistente con Corchetes (KeyError)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "KeyError",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `d = {'x': 10}; print(d['y'])`?",
    "explanation": "Intentar acceder mediante corchetes a una clave que no existe en el diccionario lanza `KeyError: 'y'`.",
    "concepts": [
      "KeyError",
      "clave inexistente"
    ],
    "tags": [
      "análisis",
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 10}\nprint(d['y'])",
    "options": [
      {
        "id": "opt-1",
        "text": "Imprime None.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza KeyError: 'y'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza IndexError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Imprime 0.",
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
    "id": "pcep-s3-057",
    "title": "Método get() con Clave Inexistente (Devuelve None)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método get()",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `d.get('y')` si `d = {'x': 10}`?",
    "explanation": "A diferencia de los corchetes, el método `.get()` no lanza error si la clave no existe; devuelve `None` de forma segura.",
    "concepts": [
      "get()",
      "None seguro"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 10}\nprint(d.get('y'))",
    "expectedOutput": "None"
  },
  {
    "id": "pcep-s3-058",
    "title": "Método get() con Valor por Defecto",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "get() con default",
    "pcepObjective": "3.3",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `d.get('y', 0)` para `d = {'x': 10}`?",
    "explanation": "El segundo argumento de `.get(clave, default)` es el valor a retornar si la clave no existe (0).",
    "concepts": [
      "get() con default"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 10}\nprint(d.get('y', 0))",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s3-059",
    "title": "Iterar sobre un Diccionario con for (Itera Claves)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "for sobre diccionario",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida producida en la consola?",
    "explanation": "Iterar directamente con `for k in d:` itera sobre las CLAVES del diccionario en orden de inserción: a b.",
    "concepts": [
      "for en diccionario",
      "claves"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nfor k in d:\n    print(k, end=' ')",
    "expectedOutput": "a b "
  },
  {
    "id": "pcep-s3-060",
    "title": "Método values() en Diccionarios",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método values()",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la suma de los valores devueltos por `d.values()`?",
    "explanation": "d.values() produce [10, 20]. La suma es 10 + 20 = 30.",
    "concepts": [
      "values()",
      "sum"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 10, 'y': 20}\nprint(sum(d.values()))",
    "expectedOutput": "30"
  },
  {
    "id": "pcep-s3-061",
    "title": "Método items() en Bucle for",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método items()",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`d.items()` devuelve pares (clave, valor) como tuplas. Imprime: x=1 y=2.",
    "concepts": [
      "items()",
      "desempaquetado de tuplas"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 1, 'y': 2}\nfor k, v in d.items():\n    print(f'{k}={v}', end=' ')",
    "expectedOutput": "x=1 y=2 "
  },
  {
    "id": "pcep-s3-062",
    "title": "Método update() para Fusionar Diccionarios",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método update()",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `d['b']` tras ejecutar `d.update({'b': 99, 'c': 3})`?",
    "explanation": "`update()` sobrescribe las claves existentes y añade las nuevas. `d['b']` pasa a ser 99.",
    "concepts": [
      "update()",
      "sobrescritura"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nd.update({'b': 99, 'c': 3})\nprint(d['b'])",
    "expectedOutput": "99"
  },
  {
    "id": "pcep-s3-063",
    "title": "Método pop() en Diccionarios",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método pop()",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida del siguiente código?",
    "explanation": "`pop('x')` elimina la clave 'x' y devuelve su valor asociado (10).",
    "concepts": [
      "pop()",
      "eliminación con retorno"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'x': 10, 'y': 20}\nval = d.pop('x')\nprint(val)",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s3-064",
    "title": "Lista como Clave de Diccionario (TypeError)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Unhashable List Key",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si intentamos usar una lista como clave de diccionario: `d = {[1, 2]: 'Datos'}`?",
    "explanation": "Las listas son objetos mutables y no tienen hash. Las claves de diccionarios deben ser inmutables. Lanza `TypeError: unhashable type: 'list'`.",
    "concepts": [
      "TypeError",
      "unhashable",
      "listas como claves"
    ],
    "tags": [
      "análisis",
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {[1, 2]: 'Datos'}",
    "options": [
      {
        "id": "opt-1",
        "text": "Crea el diccionario con éxito.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: unhashable type: 'list'.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza KeyError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Convierte la lista a tupla silenciosamente.",
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
    "id": "pcep-s3-065",
    "title": "Método clear() en Diccionario",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método clear()",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida tras ejecutar `d.clear()`?",
    "explanation": "`clear()` vacía todos los pares clave-valor dejando el diccionario vacío `{}`.",
    "concepts": [
      "clear()",
      "diccionario vacío"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nd.clear()\nprint(d)",
    "expectedOutput": "{}"
  },
  {
    "id": "pcep-s3-066",
    "title": "Preservación del Orden de Inserción en Python 3.7+",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Orden de Inserción",
    "pcepObjective": "3.3",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `list(d.keys())` para este código?",
    "explanation": "Desde Python 3.7, los diccionarios garantizan formalmente el orden de inserción de las claves: ['z', 'a', 'm'].",
    "concepts": [
      "keys()",
      "orden de inserción"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "d = {'z': 1, 'a': 2, 'm': 3}\nprint(list(d.keys()))",
    "expectedOutput": "['z', 'a', 'm']"
  },
  {
    "id": "pcep-s3-067",
    "title": "Diccionario con Claves Numéricas: Entero vs Float",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Colisión 1 y 1.0 como Claves",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud del diccionario `d = {1: 'int', 1.0: 'float'}`?",
    "explanation": "En Python, `1 == 1.0` y `hash(1) == hash(1.0)`. Por tanto, `1.0` se considera la MISMA clave que `1` y sobrescribe su valor. La longitud final es 1.",
    "concepts": [
      "hash colisión",
      "1 vs 1.0",
      "len"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {1: 'int', 1.0: 'float'}\nprint(len(d))",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s3-068",
    "title": "Colisión de Booleano y Entero en Diccionario (True y 1)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "True y 1 como Misma Clave",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor final de `d[1]` tras ejecutar este código?",
    "explanation": "Como `True == 1` y tienen el mismo hash, asignar `d[1] = 'uno'` sobrescribe el valor previo de `True`. `d[1]` es 'uno'.",
    "concepts": [
      "True == 1",
      "claves de diccionario"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {True: 'cierto'}\nd[1] = 'uno'\nprint(d[True])",
    "expectedOutput": "uno"
  },
  {
    "id": "pcep-s3-069",
    "title": "Comprensión de Diccionarios (Dict Comprehension)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Dict Comprehension",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Crea un diccionario elevando al cuadrado cada clave: {0: 0, 1: 1, 2: 4}.",
    "concepts": [
      "dict comprehension"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {x: x**2 for x in range(3)}\nprint(d)",
    "expectedOutput": "{0: 0, 1: 1, 2: 4}"
  },
  {
    "id": "pcep-s3-070",
    "title": "Copia Superficial de Diccionario con copy()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método copy()",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor de `a['x']` tras modificar `b['x'] = 99` con `b = a.copy()`?",
    "explanation": "`.copy()` crea una copia superficial del diccionario. Modificar claves de nivel superior en `b` no afecta a `a`: `a['x']` sigue siendo 1.",
    "concepts": [
      "copy()",
      "copia superficial"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "a = {'x': 1}\nb = a.copy()\nb['x'] = 99\nprint(a['x'])",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s3-071",
    "title": "setdefault() con Clave Existente",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Método setdefault()",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `d.setdefault('a', 99)` si `d = {'a': 1}`?",
    "explanation": "Si la clave ya existe, `setdefault()` devuelve su valor actual (1) y NO modifica el diccionario.",
    "concepts": [
      "setdefault()",
      "clave existente"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1}\nval = d.setdefault('a', 99)\nprint(val)",
    "expectedOutput": "1"
  },
  {
    "id": "pcep-s3-072",
    "title": "setdefault() con Clave Nueva",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "setdefault() clave nueva",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `d.setdefault('b', 99)` si `d = {'a': 1}`?",
    "explanation": "Si la clave no existe, `setdefault()` la inserta con el valor especificado (99) y devuelve dicho valor.",
    "concepts": [
      "setdefault()",
      "inserción"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1}\nval = d.setdefault('b', 99)\nprint(val)",
    "expectedOutput": "99"
  },
  {
    "id": "pcep-s3-073",
    "title": "Modificar Tamaño de Diccionario Durante Iteración",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "RuntimeError en Iteración",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si agregamos o eliminamos claves de un diccionario mientras se itera directamente sobre él?",
    "explanation": "Alterar la longitud de un diccionario durante la iteración directa lanza `RuntimeError: dictionary changed size during iteration`.",
    "concepts": [
      "RuntimeError",
      "mutación durante for"
    ],
    "tags": [
      "análisis",
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nfor k in d:\n    del d[k]",
    "options": [
      {
        "id": "opt-1",
        "text": "Borra todas las claves sin errores.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza RuntimeError: dictionary changed size during iteration.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza KeyError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Se produce un bucle infinito.",
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
    "id": "pcep-s3-074",
    "title": "Iteración Segura con list(d.keys()) para Borrar",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Iteración Segura",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la longitud del diccionario al finalizar este código?",
    "explanation": "Al iterar sobre una lista estática de claves creada previamente con `list(d.keys())`, se pueden borrar elementos de forma segura. Todas las claves se eliminan y len(d) = 0.",
    "concepts": [
      "list(d.keys())",
      "borrado seguro"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "d = {'a': 1, 'b': 2}\nfor k in list(d.keys()):\n    del d[k]\nprint(len(d))",
    "expectedOutput": "0"
  },
  {
    "id": "pcep-s3-075",
    "title": "Diccionario Anidado",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Diccionarios",
    "subtopic": "Diccionarios Anidados",
    "pcepObjective": "3.3",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de este código?",
    "explanation": "Accede al valor de la clave 'edad' dentro del subdiccionario 'usuario': 25.",
    "concepts": [
      "diccionarios anidados"
    ],
    "tags": [
      "pcep-3.3",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "db = {'usuario': {'nombre': 'Ana', 'edad': 25}}\nprint(db['usuario']['edad'])",
    "expectedOutput": "25"
  },
  {
    "id": "pcep-s3-076",
    "title": "Indexación en Cadenas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Indexación",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'Python'[0]`?",
    "explanation": "El índice 0 accede al primer carácter de la cadena: 'P'.",
    "concepts": [
      "cadenas",
      "indexación",
      "índice 0"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "s = 'Python'\nprint(s[0])",
    "expectedOutput": "P"
  },
  {
    "id": "pcep-s3-077",
    "title": "Índice Negativo en Cadenas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Índice Negativo",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'Python'[-1]`?",
    "explanation": "El índice -1 accede al último carácter: 'n'.",
    "concepts": [
      "cadenas",
      "índice -1"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "s = 'Python'\nprint(s[-1])",
    "expectedOutput": "n"
  },
  {
    "id": "pcep-s3-078",
    "title": "Inmutabilidad de Cadenas (TypeError al Asignar)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Inmutabilidad",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "code_analysis",
    "statement": "¿Qué ocurre si ejecutamos `s = 'Python'; s[0] = 'J'`?",
    "explanation": "Las cadenas en Python son inmutables. Intentar reasignar un carácter lanza `TypeError: 'str' object does not support item assignment`.",
    "concepts": [
      "TypeError",
      "inmutabilidad de strings"
    ],
    "tags": [
      "análisis",
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "s = 'Python'\ns[0] = 'J'",
    "options": [
      {
        "id": "opt-1",
        "text": "Cambia la cadena a 'Jython'.",
        "isCorrect": false
      },
      {
        "id": "opt-2",
        "text": "Lanza TypeError: 'str' object does not support item assignment.",
        "isCorrect": true
      },
      {
        "id": "opt-3",
        "text": "Lanza ValueError.",
        "isCorrect": false
      },
      {
        "id": "opt-4",
        "text": "Crea una nueva variable llamada J.",
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
    "id": "pcep-s3-079",
    "title": "Método upper()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método upper",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'hola'.upper()`?",
    "explanation": "`upper()` devuelve una nueva cadena con todas las letras en mayúsculas: 'HOLA'.",
    "concepts": [
      "upper()",
      "mayúsculas"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('hola'.upper())",
    "expectedOutput": "HOLA"
  },
  {
    "id": "pcep-s3-080",
    "title": "Método lower()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método lower",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'PCEP'.lower()`?",
    "explanation": "`lower()` convierte todos los caracteres a minúsculas: 'pcep'.",
    "concepts": [
      "lower()",
      "minúsculas"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('PCEP'.lower())",
    "expectedOutput": "pcep"
  },
  {
    "id": "pcep-s3-081",
    "title": "Función len() en Cadenas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Longitud de Cadenas",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `len('Hola Mundo')`?",
    "explanation": "Cuenta cada carácter, incluyendo el espacio en blanco: 10 caracteres.",
    "concepts": [
      "len",
      "espacio en blanco"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print(len('Hola Mundo'))",
    "expectedOutput": "10"
  },
  {
    "id": "pcep-s3-082",
    "title": "Slicing en Cadenas: [start:stop]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Slicing de Strings",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'Python'[0:2]`?",
    "explanation": "Extrae los caracteres en los índices 0 y 1: 'Py'.",
    "concepts": [
      "slicing en strings"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('Python'[0:2])",
    "expectedOutput": "Py"
  },
  {
    "id": "pcep-s3-083",
    "title": "Operador in con Subcadenas",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Subcadenas con in",
    "pcepObjective": "3.4",
    "difficulty": "basic",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'on' in 'Python'`?",
    "explanation": "El operador `in` comprueba si la subcadena existe dentro de la cadena: 'on' está al final -> True.",
    "concepts": [
      "in",
      "subcadena"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-1"
    ],
    "isActive": true,
    "codeSnippet": "print('on' in 'Python')",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s3-084",
    "title": "Método capitalize() vs title()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método capitalize",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'hola mundo'.capitalize()`?",
    "explanation": "`capitalize()` convierte ÚNICAMENTE la primera letra de toda la cadena a mayúscula y el resto a minúsculas: 'Hola mundo'.",
    "concepts": [
      "capitalize()"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('hola mundo'.capitalize())",
    "expectedOutput": "Hola mundo"
  },
  {
    "id": "pcep-s3-085",
    "title": "Método title()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método title",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'hola mundo'.title()`?",
    "explanation": "`title()` convierte a mayúscula la primera letra de CADA palabra: 'Hola Mundo'.",
    "concepts": [
      "title()"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('hola mundo'.title())",
    "expectedOutput": "Hola Mundo"
  },
  {
    "id": "pcep-s3-086",
    "title": "Método split() sin Argumentos",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método split",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'uno dos tres'.split()`?",
    "explanation": "`split()` sin argumentos divide la cadena por cualquier secuencia de espacios en blanco: ['uno', 'dos', 'tres'].",
    "concepts": [
      "split()",
      "división por espacios"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('uno dos tres'.split())",
    "expectedOutput": "['uno', 'dos', 'tres']"
  },
  {
    "id": "pcep-s3-087",
    "title": "Método split() con Delimitador Específico",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "split con Delimitador",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'a,b,c'.split(',')`?",
    "explanation": "Divide por la coma: ['a', 'b', 'c'].",
    "concepts": [
      "split(',')"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('a,b,c'.split(','))",
    "expectedOutput": "['a', 'b', 'c']"
  },
  {
    "id": "pcep-s3-088",
    "title": "Método join()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método join",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'-'.join(['A', 'B', 'C'])`?",
    "explanation": "`join()` une los elementos del iterable intercalando el separador: 'A-B-C'.",
    "concepts": [
      "join()",
      "unión de cadenas"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('-'.join(['A', 'B', 'C']))",
    "expectedOutput": "A-B-C"
  },
  {
    "id": "pcep-s3-089",
    "title": "Método strip() para Eliminar Espacios",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método strip",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'  Python  '.strip()`?",
    "explanation": "`strip()` elimina los espacios en blanco sobrantes al inicio y al final de la cadena: 'Python'.",
    "concepts": [
      "strip()",
      "espacios"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('  Python  '.strip())",
    "expectedOutput": "Python"
  },
  {
    "id": "pcep-s3-090",
    "title": "Método replace()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método replace",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'banana'.replace('a', 'o')`?",
    "explanation": "`replace('a', 'o')` sustituye todas las ocurrencias de 'a' por 'o': 'bonono'.",
    "concepts": [
      "replace()"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('banana'.replace('a', 'o'))",
    "expectedOutput": "bonono"
  },
  {
    "id": "pcep-s3-091",
    "title": "Método find() con Subcadena Encontrada",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método find",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'Python'.find('th')`?",
    "explanation": "`find()` devuelve el índice donde inicia la subcadena ('P'=0, 'y'=1, 't'=2): 2.",
    "concepts": [
      "find()",
      "índice de subcadena"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('Python'.find('th'))",
    "expectedOutput": "2"
  },
  {
    "id": "pcep-s3-092",
    "title": "Método find() con Subcadena Inexistente (-1)",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "find devuelve -1",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Qué devuelve `find()` si la subcadena no existe?",
    "explanation": "A diferencia de `index()`, si la subcadena no se encuentra, `find()` devuelve `-1` de manera segura sin lanzar excepción.",
    "concepts": [
      "find()",
      "-1"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print('Python'.find('java'))",
    "expectedOutput": "-1"
  },
  {
    "id": "pcep-s3-093",
    "title": "Función ord() para Código ASCII",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Función ord()",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es el valor devuelto por `ord('A')`?",
    "explanation": "`ord()` devuelve el valor numérico del punto de código Unicode/ASCII del carácter: para 'A' es 65.",
    "concepts": [
      "ord()",
      "código ASCII"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(ord('A'))",
    "expectedOutput": "65"
  },
  {
    "id": "pcep-s3-094",
    "title": "Función chr() para Carácter a partir de Entero",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Función chr()",
    "pcepObjective": "3.4",
    "difficulty": "basic_plus",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `chr(66)`?",
    "explanation": "`chr()` convierte el código numérico a su carácter correspondiente: 66 es 'B'.",
    "concepts": [
      "chr()",
      "carácter"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-2"
    ],
    "isActive": true,
    "codeSnippet": "print(chr(66))",
    "expectedOutput": "B"
  },
  {
    "id": "pcep-s3-095",
    "title": "Inversión de Cadena con Slicing: [::-1]",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Inversión de Strings",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'amor'[::-1]`?",
    "explanation": "El slice `[::-1]` recorre la cadena en sentido inverso: 'roma'.",
    "concepts": [
      "[::-1]",
      "inversión de cadena"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('amor'[::-1])",
    "expectedOutput": "roma"
  },
  {
    "id": "pcep-s3-096",
    "title": "Método isdigit()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método isdigit",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'123'.isdigit()` y `'12.3'.isdigit()`?",
    "explanation": "'123' contiene solo dígitos (True). '12.3' contiene un punto que no es dígito (False). Imprime: True False.",
    "concepts": [
      "isdigit()",
      "validación numérica"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('123'.isdigit(), '12.3'.isdigit())",
    "expectedOutput": "True False"
  },
  {
    "id": "pcep-s3-097",
    "title": "Método isalpha() con Espacios",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Método isalpha",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'Hola Mundo'.isalpha()`?",
    "explanation": "`isalpha()` solo devuelve True si TODOS los caracteres son letras alfabéticas. El espacio en blanco no es letra, por lo que devuelve False.",
    "concepts": [
      "isalpha()",
      "espacio"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('Hola Mundo'.isalpha())",
    "expectedOutput": "False"
  },
  {
    "id": "pcep-s3-098",
    "title": "replace() con Parámetro count",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "replace con count",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'aaaa'.replace('a', 'b', 2)`?",
    "explanation": "El tercer argumento `count=2` limita los reemplazos a las primeras 2 apariciones: 'bbaa'.",
    "concepts": [
      "replace() con count"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('aaaa'.replace('a', 'b', 2))",
    "expectedOutput": "bbaa"
  },
  {
    "id": "pcep-s3-099",
    "title": "startwith() y endswith() con Tupla de Prefijos",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "startswith con tupla",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida de `'reporte.pdf'.endswith(('.jpg', '.png', '.pdf'))`?",
    "explanation": "`endswith()` admite una tupla de extensiones alternativas: termina en '.pdf' -> True.",
    "concepts": [
      "endswith()",
      "tupla de sufijos"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print('reporte.pdf'.endswith(('.jpg', '.png', '.pdf')))",
    "expectedOutput": "True"
  },
  {
    "id": "pcep-s3-100",
    "title": "Cadena con Códigos de Escape en len()",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos y Cadenas",
    "topic": "Cadenas",
    "subtopic": "Longitud con Escapes Complejos",
    "pcepObjective": "3.4",
    "difficulty": "intermediate",
    "type": "output_prediction",
    "statement": "¿Cuál es la salida exacta de `len('A\\tB\\nC')`?",
    "explanation": "'A' (1) + '\\t' (1) + 'B' (1) + '\\n' (1) + 'C' (1) = 5 caracteres en total.",
    "concepts": [
      "len",
      "escapes en cadena"
    ],
    "tags": [
      "pcep-3.4",
      "nivel-3"
    ],
    "isActive": true,
    "codeSnippet": "print(len('A\\tB\\nC'))",
    "expectedOutput": "5"
  }
];

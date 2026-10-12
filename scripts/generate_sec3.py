#!/usr/bin/env python3
import json

SEC3_TITLE = "Sección 3 — Colecciones de Datos y Cadenas"

def make_ex(eid, title, topic, subtopic, obj, diff, etype, stmt, explanation, concepts, tags,
            code_snippet=None, starter_code=None, options=None, expected_output=None, acceptable=None):
    ex = {
        "id": eid,
        "title": title,
        "section": 3,
        "sectionTitle": SEC3_TITLE,
        "topic": topic,
        "subtopic": subtopic,
        "pcepObjective": obj,
        "difficulty": diff,
        "type": etype,
        "statement": stmt,
        "explanation": explanation,
        "concepts": concepts,
        "tags": tags,
        "isActive": True
    }
    if code_snippet is not None:
        ex["codeSnippet"] = code_snippet
    if starter_code is not None:
        ex["starterCode"] = starter_code
    if options is not None:
        ex["options"] = [{"id": f"opt-{i+1}", "text": o[0], "isCorrect": o[1]} for i, o in enumerate(options)]
    if expected_output is not None:
        ex["expectedOutput"] = expected_output
    if acceptable is not None:
        ex["acceptableSolutions"] = acceptable
    return ex

def build_all_section3():
    exercises = []

    # =========================================================================
    # OBJETIVO 3.1: Listas (001 - 030)
    # =========================================================================

    # 1 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-001", "Indexación Básica de Listas", "Listas", "Indexación", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida de `lst[1]` para `lst = [10, 20, 30]`?",
        "Las listas en Python tienen índice base cero (0-indexed). El índice 1 corresponde al segundo elemento: 20.",
        ["listas", "indexación", "índice 0"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = [10, 20, 30]\nprint(lst[1])",
        expected_output="20"
    ))

    # 2 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-002", "Índice Negativo en Lista", "Listas", "Índices Negativos", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El índice -1 accede al último elemento de la secuencia: 30.",
        ["listas", "índice -1", "último elemento"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = [10, 20, 30]\nprint(lst[-1])",
        expected_output="30"
    ))

    # 3 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-003", "Método append()", "Listas", "Método append", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "El método `append()` agrega un único elemento al final de la lista.",
        ["append", "listas"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = [1, 2]\nlst.append(3)\nprint(lst)",
        expected_output="[1, 2, 3]"
    ))

    # 4 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-004", "Método insert()", "Listas", "Método insert", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`lst.insert(1, 99)` inserta 99 en el índice 1, desplazando los elementos siguientes a la derecha: [10, 99, 20].",
        ["insert", "listas", "desplazamiento"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = [10, 20]\nlst.insert(1, 99)\nprint(lst)",
        expected_output="[10, 99, 20]"
    ))

    # 5 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-005", "Método pop() sin Argumento", "Listas", "Método pop", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida de `lst.pop()` para `lst = ['a', 'b', 'c']`?",
        "`pop()` sin argumentos elimina y devuelve el último elemento de la lista ('c').",
        ["pop", "eliminar elemento"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = ['a', 'b', 'c']\neliminado = lst.pop()\nprint(eliminado)",
        expected_output="c"
    ))

    # 6 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-006", "Función len() con Listas", "Listas", "Función len", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "len() devuelve el número de elementos contenidos en la lista: 4.",
        ["len", "longitud de lista"], ["pcep-3.1", "nivel-1"],
        code_snippet="nums = [5, 10, 15, 20]\nprint(len(nums))",
        expected_output="4"
    ))

    # 7 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-007", "Operador in con Listas", "Listas", "Pertenencia in", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida de `3 in [1, 2, 3, 4]`?",
        "El operador `in` verifica si un valor existe dentro de la colección: 3 sí está presente -> True.",
        ["in", "pertenencia"], ["pcep-3.1", "nivel-1"],
        code_snippet="print(3 in [1, 2, 3, 4])",
        expected_output="True"
    ))

    # 8 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-008", "Concatenación de Listas con +", "Listas", "Operador +", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El operador `+` concatena dos listas en una nueva: [1, 2] + [3, 4] = [1, 2, 3, 4].",
        ["+", "concatenación de listas"], ["pcep-3.1", "nivel-1"],
        code_snippet="a = [1, 2]\nb = [3, 4]\nprint(a + b)",
        expected_output="[1, 2, 3, 4]"
    ))

    # 9 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-009", "Replicación de Listas con *", "Listas", "Operador *", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida producida por `[0] * 3`?",
        "El operador `*` replica los elementos de la lista: [0, 0, 0].",
        ["*", "replicación"], ["pcep-3.1", "nivel-1"],
        code_snippet="print([0] * 3)",
        expected_output="[0, 0, 0]"
    ))

    # 10 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-010", "Slicing Básico de Listas [start:stop]", "Listas", "Slicing", "3.1", "basic", "output_prediction",
        "¿Cuál es la salida de `lst[1:3]` para `lst = [10, 20, 30, 40]`?",
        "El slice [1:3] extrae desde el índice 1 hasta el 3 exclusivo: elementos en posiciones 1 y 2 -> [20, 30].",
        ["slicing", "sublista"], ["pcep-3.1", "nivel-1"],
        code_snippet="lst = [10, 20, 30, 40]\nprint(lst[1:3])",
        expected_output="[20, 30]"
    ))

    # 11 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-011", "Asignación por Referencia vs Copia", "Listas", "Referencia de Listas", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`b = a` asigna la MISMA referencia en memoria. Modificar `b.append(4)` modifica la lista original compartida por `a`. `a` ahora es [1, 2, 3, 4].",
        ["referencia mutable", "efecto colateral"], ["pcep-3.1", "nivel-2"],
        code_snippet="a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
        expected_output="[1, 2, 3, 4]"
    ))

    # 12 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-012", "Copia Superficial con Slicing Completo [:]", "Listas", "Copia con [:]", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`b = a[:]` crea una copia independiente. Agregar 4 a `b` no altera a `a`: `a` sigue siendo [1, 2, 3].",
        ["copia superficial", "slicing [:]"], ["pcep-3.1", "nivel-2"],
        code_snippet="a = [1, 2, 3]\nb = a[:]\nb.append(4)\nprint(a)",
        expected_output="[1, 2, 3]"
    ))

    # 13 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-013", "Método sort() in-place y Retorno None", "Listas", "Método sort", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es el valor de retorno de `lst.sort()`?",
        "El método `sort()` ordena la lista in-place (in situ) y retorna `None`.",
        ["sort()", "retorno None", "in-place"], ["pcep-3.1", "nivel-2"],
        code_snippet="lst = [3, 1, 2]\nretorno = lst.sort()\nprint(retorno)",
        expected_output="None"
    ))

    # 14 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-014", "Método reverse() in-place", "Listas", "Método reverse", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida tras ejecutar `lst.reverse()`?",
        "`reverse()` invierte el orden de los elementos in-place en la lista: [30, 20, 10].",
        ["reverse()", "in-place"], ["pcep-3.1", "nivel-2"],
        code_snippet="lst = [10, 20, 30]\nlst.reverse()\nprint(lst)",
        expected_output="[30, 20, 10]"
    ))

    # 15 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-015", "Método extend() vs append()", "Listas", "extend vs append", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `a.extend([3, 4])`?",
        "`extend()` desempaqueta los elementos del iterable y los añade individualmente al final: [1, 2, 3, 4].",
        ["extend()", "listas"], ["pcep-3.1", "nivel-2"],
        code_snippet="a = [1, 2]\na.extend([3, 4])\nprint(a)",
        expected_output="[1, 2, 3, 4]"
    ))

    # 16 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-016", "append() Añadiendo una Lista Completa como Sublista", "Listas", "append de lista", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la longitud de `a` tras ejecutar `a.append([3, 4])` si `a = [1, 2]`?",
        "`append()` añade la lista entera como un único elemento: `[1, 2, [3, 4]]`. La longitud es 3.",
        ["append()", "lista anidada", "len"], ["pcep-3.1", "nivel-2"],
        code_snippet="a = [1, 2]\na.append([3, 4])\nprint(len(a))",
        expected_output="3"
    ))

    # 17 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-017", "Instrucción del para Eliminar por Índice", "Listas", "Instrucción del", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`del lst[1]` elimina el elemento en el índice 1 (20). La lista queda: [10, 30].",
        ["del", "eliminación por índice"], ["pcep-3.1", "nivel-2"],
        code_snippet="lst = [10, 20, 30]\ndel lst[1]\nprint(lst)",
        expected_output="[10, 30]"
    ))

    # 18 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-018", "Método remove() por Valor", "Listas", "Método remove", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida tras ejecutar `lst.remove(2)` en `lst = [1, 2, 3, 2]`?",
        "`remove(x)` elimina únicamente la PRIMERA ocurrencia de x en la lista. Queda: [1, 3, 2].",
        ["remove()", "primera ocurrencia"], ["pcep-3.1", "nivel-2"],
        code_snippet="lst = [1, 2, 3, 2]\nlst.remove(2)\nprint(lst)",
        expected_output="[1, 3, 2]"
    ))

    # 19 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-019", "remove() con Valor Inexistente", "Listas", "ValueError en remove", "3.1", "basic_plus", "code_analysis",
        "¿Qué ocurre si intentamos hacer `lst.remove(99)` en `lst = [1, 2, 3]`?",
        "Si el elemento no está en la lista, `remove()` lanza inmediatamente `ValueError: list.remove(x): x not in list`.",
        ["ValueError", "remove()"], ["análisis", "pcep-3.1", "nivel-2"],
        code_snippet="lst = [1, 2, 3]\nlst.remove(99)",
        options=[
            ("No hace nada y la lista queda intacta.", False),
            ("Lanza ValueError: list.remove(x): x not in list.", True),
            ("Lanza IndexError.", False),
            ("Retorna False.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 20 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-020", "Slicing con Paso: [::2]", "Listas", "Slicing con Step", "3.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `lst[::2]` para `lst = [1, 2, 3, 4, 5]`?",
        "El slice `[::2]` toma elementos cada 2 posiciones empezando en 0: índices 0, 2, 4 -> [1, 3, 5].",
        ["slicing", "step=2"], ["pcep-3.1", "nivel-2"],
        code_snippet="lst = [1, 2, 3, 4, 5]\nprint(lst[::2])",
        expected_output="[1, 3, 5]"
    ))

    # 21 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-021", "Inversión de Lista con Slicing Negativo: [::-1]", "Listas", "Slicing inverso", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "`[::-1]` crea una nueva lista invertida con paso -1 sin mutar la lista original: [3, 2, 1].",
        ["[::-1]", "inversión de lista"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = [1, 2, 3]\nprint(lst[::-1])",
        expected_output="[3, 2, 1]"
    ))

    # 22 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-022", "Asignación a un Slice de Lista", "Listas", "Slice Assignment", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida por este código?",
        "Asignar a un slice reemplaza el rango seleccionado. `lst[1:3]` (que eran [2, 3]) se sustituye por `[8, 9]`: [1, 8, 9, 4].",
        ["slice assignment", "mutabilidad"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = [1, 2, 3, 4]\nlst[1:3] = [8, 9]\nprint(lst)",
        expected_output="[1, 8, 9, 4]"
    ))

    # 23 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-023", "Asignación a Slice que Altera el Tamaño", "Listas", "Slice Replacement Dinámico", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`lst[1:2]` (el elemento 2) es reemplazado por tres elementos `[10, 20, 30]`: [1, 10, 20, 30, 3].",
        ["slice assignment", "expansión de lista"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = [1, 2, 3]\nlst[1:2] = [10, 20, 30]\nprint(lst)",
        expected_output="[1, 10, 20, 30, 3]"
    ))

    # 24 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-024", "Eliminación de Rango con del sobre Slice", "Listas", "del en Slicing", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`del lst[1:3]` borra los elementos en los índices 1 y 2 (20 y 30). Queda: [10, 40].",
        ["del", "borrado de rango"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = [10, 20, 30, 40]\ndel lst[1:3]\nprint(lst)",
        expected_output="[10, 40]"
    ))

    # 25 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-025", "Índice Fuera de Rango en Indexación Directa vs Slicing", "Listas", "IndexError vs Slicing", "3.1", "intermediate", "code_analysis",
        "¿Qué diferencia existe entre `lst[100]` y `lst[100:200]` si `lst = [1, 2, 3]`?",
        "La indexación directa fuera de rango (`lst[100]`) lanza `IndexError: list index out of range`. En cambio, el slicing fuera de límites (`lst[100:200]`) es tolerante y devuelve una lista vacía `[]` sin error.",
        ["IndexError", "tolerancia de slicing"], ["análisis", "pcep-3.1", "nivel-3"],
        code_snippet="lst = [1, 2, 3]\n# Comparar lst[100] frente a lst[100:200]",
        options=[
            ("Ambas expresiones lanzan IndexError.", False),
            ("lst[100] lanza IndexError, mientras que lst[100:200] devuelve [] sin error.", True),
            ("Ambas devuelven None.", False),
            ("lst[100:200] lanza IndexError y lst[100] devuelve None.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 26 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-026", "Comprensión de Listas Básica (List Comprehension)", "Listas", "List Comprehension", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "Evalúa x ** 2 para cada x en range(4) (0, 1, 2, 3): [0, 1, 4, 9].",
        ["list comprehension", "cuadrados"], ["pcep-3.1", "nivel-3"],
        code_snippet="cuadrados = [x ** 2 for x in range(4)]\nprint(cuadrados)",
        expected_output="[0, 1, 4, 9]"
    ))

    # 27 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-027", "Comprensión de Listas con Filtro if", "Listas", "List Comprehension con if", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Filtra los números pares de range(6): 0, 2, 4. Multiplica cada uno por 10: [0, 20, 40].",
        ["list comprehension con if"], ["pcep-3.1", "nivel-3"],
        code_snippet="pares = [x * 10 for x in range(6) if x % 2 == 0]\nprint(pares)",
        expected_output="[0, 20, 40]"
    ))

    # 28 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-028", "Trampa de Replicación de Lista Anidada: [[0]] * 3", "Listas", "Referencias Compartidas en Multiplicación", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "La multiplicación `[[0]] * 3` replica la MISMA referencia a la sublista interna 3 veces. Modificar `matriz[0][0] = 5` altera las 3 posiciones: [[5], [5], [5]].",
        ["referencias compartidas", "replicación de sublistas"], ["pcep-3.1", "nivel-3"],
        code_snippet="matriz = [[0]] * 3\nmatriz[0][0] = 5\nprint(matriz)",
        expected_output="[[5], [5], [5]]"
    ))

    # 29 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-029", "Método index() con Múltiples Ocurrencias", "Listas", "Método index", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `lst.index(2)` en `lst = [1, 2, 3, 2]`?",
        "`index(x)` devuelve el índice de la PRIMERA aparición del elemento (índice 1).",
        ["index()", "primera aparición"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = [1, 2, 3, 2]\nprint(lst.index(2))",
        expected_output="1"
    ))

    # 30 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-030", "Método count() en Listas", "Listas", "Método count", "3.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `lst.count('a')` para `lst = ['a', 'b', 'a', 'c', 'a']`?",
        "`count(x)` devuelve la cantidad de veces que x aparece en la lista: 3.",
        ["count()", "frecuencia"], ["pcep-3.1", "nivel-3"],
        code_snippet="lst = ['a', 'b', 'a', 'c', 'a']\nprint(lst.count('a'))",
        expected_output="3"
    ))

    # =========================================================================
    # OBJETIVO 3.2: Tuplas (031 - 050)
    # =========================================================================

    # 31 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-031", "Tupla de un Solo Elemento con Coma", "Tuplas", "Tupla Unitaria", "3.2", "basic", "output_prediction",
        "¿Cuál es el tipo de dato de `x = (42,)`?",
        "La coma `,` es lo que define a una tupla en Python. `(42,)` es una tupla.",
        ["tupla unitaria", "coma final", "type"], ["pcep-3.2", "nivel-1"],
        code_snippet="x = (42,)\nprint(type(x).__name__)",
        expected_output="tuple"
    ))

    # 32 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-032", "Paréntesis sin Coma: No es Tupla", "Tuplas", "Paréntesis Aritmético", "3.2", "basic", "output_prediction",
        "¿Cuál es el tipo de dato de `x = (42)`?",
        "Sin coma, los paréntesis simplemente agrupan la expresión aritmética; el valor resultante es un entero (`int`).",
        ["paréntesis aritmético", "int vs tuple"], ["pcep-3.2", "nivel-1"],
        code_snippet="x = (42)\nprint(type(x).__name__)",
        expected_output="int"
    ))

    # 33 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-033", "Inmutabilidad de Tuplas (TypeError al Asignar)", "Tuplas", "Inmutabilidad", "3.2", "basic", "code_analysis",
        "¿Qué ocurre si ejecutamos `t = (1, 2, 3); t[0] = 99`?",
        "Las tuplas son inmutables: no permiten modificar sus elementos. Lanza `TypeError: 'tuple' object does not support item assignment`.",
        ["TypeError", "inmutabilidad de tuplas"], ["análisis", "pcep-3.2", "nivel-1"],
        code_snippet="t = (1, 2, 3)\nt[0] = 99",
        options=[
            ("Modifica el primer elemento a 99.", False),
            ("Lanza TypeError: 'tuple' object does not support item assignment.", True),
            ("Lanza AttributeError.", False),
            ("Convierte la tupla a lista automáticamente.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 34 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-034", "Indexación en Tuplas", "Tuplas", "Indexación", "3.2", "basic", "output_prediction",
        "¿Cuál es la salida de `t[-1]` para `t = (10, 20, 30)`?",
        "Las tuplas se indexan igual que las listas: t[-1] es el último elemento (30).",
        ["tuplas", "índice -1"], ["pcep-3.2", "nivel-1"],
        code_snippet="t = (10, 20, 30)\nprint(t[-1])",
        expected_output="30"
    ))

    # 35 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-035", "Concatenación de Tuplas con +", "Tuplas", "Concatenación", "3.2", "basic", "output_prediction",
        "¿Cuál es la salida de `(1, 2) + (3, 4)`?",
        "El operador `+` crea una nueva tupla combinando ambas: (1, 2, 3, 4).",
        ["+", "concatenación de tuplas"], ["pcep-3.2", "nivel-1"],
        code_snippet="print((1, 2) + (3, 4))",
        expected_output="(1, 2, 3, 4)"
    ))

    # 36 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-036", "Desempaquetado de Tupla Básico", "Tuplas", "Tuple Unpacking", "3.2", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La tupla `(5, 10)` se desempaqueta en `x = 5` e `y = 10`. 5 * 10 = 50.",
        ["tuple unpacking", "desempaquetado"], ["pcep-3.2", "nivel-1"],
        code_snippet="x, y = (5, 10)\nprint(x * y)",
        expected_output="50"
    ))

    # 37 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-037", "Función tuple() a partir de una Lista", "Tuplas", "Conversión a Tupla", "3.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`tuple([1, 2, 3])` convierte la lista en la tupla `(1, 2, 3)`.",
        ["tuple()", "conversión"], ["pcep-3.2", "nivel-1"],
        code_snippet="print(tuple([1, 2, 3]))",
        expected_output="(1, 2, 3)"
    ))

    # 38 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-038", "Desempaquetado con Cantidad Desigual de Variables", "Tuplas", "ValueError en Unpacking", "3.2", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `a, b = (1, 2, 3)`?",
        "El número de variables a la izquierda debe coincidir exactamente con el número de elementos a la derecha; si no, lanza `ValueError: too many values to unpack (expected 2)`.",
        ["ValueError", "desempaquetado desigual"], ["análisis", "pcep-3.2", "nivel-2"],
        code_snippet="a, b = (1, 2, 3)",
        options=[
            ("a toma 1 y b toma 2 (el 3 se descarta).", False),
            ("Lanza ValueError: too many values to unpack.", True),
            ("b toma la tupla (2, 3).", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 39 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-039", "Replicación de Tuplas con *", "Tuplas", "Replicación *", "3.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `('x',) * 3`?",
        "La tupla unitaria replicada 3 veces da `('x', 'x', 'x')`.",
        ["*", "replicación de tupla"], ["pcep-3.2", "nivel-2"],
        code_snippet="print(('x',) * 3)",
        expected_output="('x', 'x', 'x')"
    ))

    # 40 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-040", "Slicing en Tuplas", "Tuplas", "Slicing de Tuplas", "3.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `t[1:3]` para `t = (10, 20, 30, 40)`?",
        "El slicing en tuplas devuelve una nueva tupla con los elementos extraídos: (20, 30).",
        ["slicing en tuplas"], ["pcep-3.2", "nivel-2"],
        code_snippet="t = (10, 20, 30, 40)\nprint(t[1:3])",
        expected_output="(20, 30)"
    ))

    # 41 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-041", "Tupla como Clave de Diccionario", "Tuplas", "Hashabilidad de Tuplas", "3.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Las tuplas con elementos inmutables son hashables e inmutables, por lo que son totalmente válidas como claves de diccionarios. Acceder a `d[(1, 2)]` devuelve 'Origen'.",
        ["tuplas como claves", "inmutabilidad", "hashable"], ["pcep-3.2", "nivel-2"],
        code_snippet="d = {(1, 2): 'Origen'}\nprint(d[(1, 2)])",
        expected_output="Origen"
    ))

    # 42 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-042", "Intento de Usar del sobre un Elemento de Tupla", "Tuplas", "del en Elemento de Tupla", "3.2", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `t = (1, 2, 3); del t[0]`?",
        "Dado que las tuplas son inmutables, eliminar elementos individuales está prohibido y lanza `TypeError: 'tuple' object doesn't support item deletion`.",
        ["TypeError", "del en tupla"], ["análisis", "pcep-3.2", "nivel-2"],
        code_snippet="t = (1, 2, 3)\ndel t[0]",
        options=[
            ("Elimina el 1 y t queda como (2, 3).", False),
            ("Lanza TypeError: 'tuple' object doesn't support item deletion.", True),
            ("Lanza AttributeError.", False),
            ("Lanza IndexError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 43 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-043", "Eliminar la Tupla Completa con del", "Tuplas", "del en Identificador de Tupla", "3.2", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `t = (1, 2); del t; print(t)`?",
        "`del t` destruye la referencia a la variable. Intentar acceder a `t` posteriormente produce `NameError: name 't' is not defined`.",
        ["del", "NameError"], ["análisis", "pcep-3.2", "nivel-2"],
        code_snippet="t = (1, 2)\ndel t\nprint(t)",
        options=[
            ("Imprime () (tupla vacía).", False),
            ("Lanza NameError: name 't' is not defined.", True),
            ("Imprime None.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 44 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-044", "Tupla Anidada (Matriz de Tuplas)", "Tuplas", "Tuplas Anidadas", "3.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `t[1][0]`?",
        "`t[1]` es la tupla `(3, 4)`. Su primer elemento con índice 0 es 3.",
        ["tuplas anidadas", "doble índice"], ["pcep-3.2", "nivel-2"],
        code_snippet="t = ((1, 2), (3, 4))\nprint(t[1][0])",
        expected_output="3"
    ))

    # 45 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-045", "Tupla que Contiene una Lista Mutable", "Tuplas", "Mutabilidad Interna en Tuplas", "3.2", "intermediate", "output_prediction",
        "¿Qué ocurre al modificar una lista contenida dentro de una tupla?",
        "Aunque la tupla es inmutable (sus referencias no cambian), los objetos mutables contenidos en ella (como una lista) sí pueden modificarse in-place. La lista pasa a ser `[1, 2, 99]`.",
        ["tupla con lista", "mutabilidad interna"], ["pcep-3.2", "nivel-3"],
        code_snippet="t = (10, [1, 2])\nt[1].append(99)\nprint(t)",
        expected_output="(10, [1, 2, 99])"
    ))

    # 46 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-046", "Operador += en Lista dentro de Tupla", "Tuplas", "Trampa Clásica de += en Tupla", "3.2", "intermediate", "code_analysis",
        "¿Qué ocurre con `t = (1, [2]); t[1] += [3]`?",
        "¡Una de las preguntas trampa más famosas de Python! `t[1].extend([3])` modifica la lista con éxito, pero la reasignación interna `t[1] = ...` falla con `TypeError`. Al final, la lista SE MODIFICA y luego SE LANZA TypeError.",
        ["trampa +=", "TypeError", "mutación antes de error"], ["análisis", "pcep-3.2", "nivel-3"],
        code_snippet="t = (1, [2])\nt[1] += [3]",
        options=[
            ("Se ejecuta sin errores y t queda (1, [2, 3]).", False),
            ("Lanza TypeError, pero la lista interna se modifica a [2, 3].", True),
            ("Lanza TypeError y la lista no cambia.", False),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 47 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-047", "Desempaquetado Extendido con Asterisco (*rest)", "Tuplas", "Extended Unpacking", "3.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`*resto` captura los elementos sobrantes como una lista: `resto = [2, 3, 4]`. `a = 1`, `b = 5`. Suma de resto: 2 + 3 + 4 = 9.",
        ["*rest", "extended unpacking"], ["pcep-3.2", "nivel-3"],
        code_snippet="a, *resto, b = (1, 2, 3, 4, 5)\nprint(sum(resto))",
        expected_output="9"
    ))

    # 48 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-048", "Tupla sin Paréntesis (Packing Implícito)", "Tuplas", "Tuple Packing", "3.2", "intermediate", "output_prediction",
        "¿Cuál es el tipo de dato de `x = 1, 2, 3`?",
        "En Python, los valores separados por comas sin delimitadores se empaquetan automáticamente como una tupla (tuple packing).",
        ["tuple packing", "type"], ["pcep-3.2", "nivel-3"],
        code_snippet="x = 1, 2, 3\nprint(type(x).__name__)",
        expected_output="tuple"
    ))

    # 49 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-049", "Comparación Lexicográfica entre Tuplas", "Tuplas", "Comparación de Tuplas", "3.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de `(1, 2, 3) < (1, 2, 4)`?",
        "Las tuplas se comparan elemento por elemento. Los primeros dos elementos coinciden; en el tercero, 3 < 4 es True.",
        ["comparación de tuplas", "orden lexicográfico"], ["pcep-3.2", "nivel-3"],
        code_snippet="print((1, 2, 3) < (1, 2, 4))",
        expected_output="True"
    ))

    # 50 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-050", "Tupla con Lista como Clave de Diccionario", "Tuplas", "Unhashable Type in Tuple Key", "3.2", "intermediate", "code_analysis",
        "¿Qué ocurre al intentar usar una tupla que contiene una lista como clave de un diccionario?\n\n```python\nd = {(1, [2]): 'Valor'}\n```",
        "Para que una tupla sea hashable, TODOS sus elementos deben ser hashables. Al contener una lista (tipo mutable no hashable), se lanza `TypeError: unhashable type: 'list'`.",
        ["TypeError", "unhashable", "claves de diccionario"], ["análisis", "pcep-3.2", "nivel-3"],
        code_snippet="d = {(1, [2]): 'Valor'}",
        options=[
            ("Se crea el diccionario normalmente.", False),
            ("Lanza TypeError: unhashable type: 'list'.", True),
            ("Lanza KeyError.", False),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # =========================================================================
    # OBJETIVO 3.3: Diccionarios (051 - 075)
    # =========================================================================

    # 51 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-051", "Acceso a Valor por Clave en Diccionario", "Diccionarios", "Acceso por Clave", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "Acceder mediante corchetes `capitales['Francia']` devuelve el valor asociado: 'París'.",
        ["diccionarios", "clave-valor"], ["pcep-3.3", "nivel-1"],
        code_snippet="capitales = {'España': 'Madrid', 'Francia': 'París'}\nprint(capitales['Francia'])",
        expected_output="París"
    ))

    # 52 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-052", "Modificación de Valor Existente en Diccionario", "Diccionarios", "Mutabilidad de Diccionario", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Los diccionarios son mutables. Asignar `precios['pan'] = 1.5` sobrescribe el valor previo (1.0).",
        ["diccionarios", "mutabilidad"], ["pcep-3.3", "nivel-1"],
        code_snippet="precios = {'pan': 1.0, 'leche': 0.8}\nprecios['pan'] = 1.5\nprint(precios['pan'])",
        expected_output="1.5"
    ))

    # 53 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-053", "Adición de Nueva Clave a Diccionario", "Diccionarios", "Agregar Clave", "3.3", "basic", "output_prediction",
        "¿Cuál es la longitud del diccionario tras ejecutar este código?",
        "Asignar a una clave inexistente (`d['c'] = 3`) añade un nuevo par clave-valor. La longitud pasa a ser 3.",
        ["diccionarios", "len", "nueva clave"], ["pcep-3.3", "nivel-1"],
        code_snippet="d = {'a': 1, 'b': 2}\nd['c'] = 3\nprint(len(d))",
        expected_output="3"
    ))

    # 54 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-054", "Operador in en Diccionarios (Busca en Claves)", "Diccionarios", "Operador in en Claves", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida de `'a' in {'a': 1, 'b': 2}`?",
        "Por defecto, el operador `in` busca exclusivamente en las CLAVES del diccionario: 'a' está en las claves -> True.",
        ["in en diccionarios", "claves"], ["pcep-3.3", "nivel-1"],
        code_snippet="print('a' in {'a': 1, 'b': 2})",
        expected_output="True"
    ))

    # 55 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-055", "Operador in Buscando Valor (Devuelve False)", "Diccionarios", "in no busca en valores", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida de `1 in {'a': 1, 'b': 2}`?",
        "`in` busca en las claves, no en los valores. Como 1 no es una clave del diccionario, devuelve False.",
        ["in en valores", "False"], ["pcep-3.3", "nivel-1"],
        code_snippet="print(1 in {'a': 1, 'b': 2})",
        expected_output="False"
    ))

    # 56 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-056", "Acceso a Clave Inexistente con Corchetes (KeyError)", "Diccionarios", "KeyError", "3.3", "basic", "code_analysis",
        "¿Qué ocurre si ejecutamos `d = {'x': 10}; print(d['y'])`?",
        "Intentar acceder mediante corchetes a una clave que no existe en el diccionario lanza `KeyError: 'y'`.",
        ["KeyError", "clave inexistente"], ["análisis", "pcep-3.3", "nivel-1"],
        code_snippet="d = {'x': 10}\nprint(d['y'])",
        options=[
            ("Imprime None.", False),
            ("Lanza KeyError: 'y'.", True),
            ("Lanza IndexError.", False),
            ("Imprime 0.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 57 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-057", "Método get() con Clave Inexistente (Devuelve None)", "Diccionarios", "Método get()", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida de `d.get('y')` si `d = {'x': 10}`?",
        "A diferencia de los corchetes, el método `.get()` no lanza error si la clave no existe; devuelve `None` de forma segura.",
        ["get()", "None seguro"], ["pcep-3.3", "nivel-1"],
        code_snippet="d = {'x': 10}\nprint(d.get('y'))",
        expected_output="None"
    ))

    # 58 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-058", "Método get() con Valor por Defecto", "Diccionarios", "get() con default", "3.3", "basic", "output_prediction",
        "¿Cuál es la salida de `d.get('y', 0)` para `d = {'x': 10}`?",
        "El segundo argumento de `.get(clave, default)` es el valor a retornar si la clave no existe (0).",
        ["get() con default"], ["pcep-3.3", "nivel-1"],
        code_snippet="d = {'x': 10}\nprint(d.get('y', 0))",
        expected_output="0"
    ))

    # 59 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-059", "Iterar sobre un Diccionario con for (Itera Claves)", "Diccionarios", "for sobre diccionario", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Iterar directamente con `for k in d:` itera sobre las CLAVES del diccionario en orden de inserción: a b.",
        ["for en diccionario", "claves"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'a': 1, 'b': 2}\nfor k in d:\n    print(k, end=' ')",
        expected_output="a b "
    ))

    # 60 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-060", "Método values() en Diccionarios", "Diccionarios", "Método values()", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la suma de los valores devueltos por `d.values()`?",
        "d.values() produce [10, 20]. La suma es 10 + 20 = 30.",
        ["values()", "sum"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'x': 10, 'y': 20}\nprint(sum(d.values()))",
        expected_output="30"
    ))

    # 61 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-061", "Método items() en Bucle for", "Diccionarios", "Método items()", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`d.items()` devuelve pares (clave, valor) como tuplas. Imprime: x=1 y=2.",
        ["items()", "desempaquetado de tuplas"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'x': 1, 'y': 2}\nfor k, v in d.items():\n    print(f'{k}={v}', end=' ')",
        expected_output="x=1 y=2 "
    ))

    # 62 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-062", "Método update() para Fusionar Diccionarios", "Diccionarios", "Método update()", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es el valor final de `d['b']` tras ejecutar `d.update({'b': 99, 'c': 3})`?",
        "`update()` sobrescribe las claves existentes y añade las nuevas. `d['b']` pasa a ser 99.",
        ["update()", "sobrescritura"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'a': 1, 'b': 2}\nd.update({'b': 99, 'c': 3})\nprint(d['b'])",
        expected_output="99"
    ))

    # 63 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-063", "Método pop() en Diccionarios", "Diccionarios", "Método pop()", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`pop('x')` elimina la clave 'x' y devuelve su valor asociado (10).",
        ["pop()", "eliminación con retorno"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'x': 10, 'y': 20}\nval = d.pop('x')\nprint(val)",
        expected_output="10"
    ))

    # 64 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-064", "Lista como Clave de Diccionario (TypeError)", "Diccionarios", "Unhashable List Key", "3.3", "basic_plus", "code_analysis",
        "¿Qué ocurre si intentamos usar una lista como clave de diccionario: `d = {[1, 2]: 'Datos'}`?",
        "Las listas son objetos mutables y no tienen hash. Las claves de diccionarios deben ser inmutables. Lanza `TypeError: unhashable type: 'list'`.",
        ["TypeError", "unhashable", "listas como claves"], ["análisis", "pcep-3.3", "nivel-2"],
        code_snippet="d = {[1, 2]: 'Datos'}",
        options=[
            ("Crea el diccionario con éxito.", False),
            ("Lanza TypeError: unhashable type: 'list'.", True),
            ("Lanza KeyError.", False),
            ("Convierte la lista a tupla silenciosamente.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 65 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-065", "Método clear() en Diccionario", "Diccionarios", "Método clear()", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida tras ejecutar `d.clear()`?",
        "`clear()` vacía todos los pares clave-valor dejando el diccionario vacío `{}`.",
        ["clear()", "diccionario vacío"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'a': 1, 'b': 2}\nd.clear()\nprint(d)",
        expected_output="{}"
    ))

    # 66 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-066", "Preservación del Orden de Inserción en Python 3.7+", "Diccionarios", "Orden de Inserción", "3.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `list(d.keys())` para este código?",
        "Desde Python 3.7, los diccionarios garantizan formalmente el orden de inserción de las claves: ['z', 'a', 'm'].",
        ["keys()", "orden de inserción"], ["pcep-3.3", "nivel-2"],
        code_snippet="d = {'z': 1, 'a': 2, 'm': 3}\nprint(list(d.keys()))",
        expected_output="['z', 'a', 'm']"
    ))

    # 67 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-067", "Diccionario con Claves Numéricas: Entero vs Float", "Diccionarios", "Colisión 1 y 1.0 como Claves", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la longitud del diccionario `d = {1: 'int', 1.0: 'float'}`?",
        "En Python, `1 == 1.0` y `hash(1) == hash(1.0)`. Por tanto, `1.0` se considera la MISMA clave que `1` y sobrescribe su valor. La longitud final es 1.",
        ["hash colisión", "1 vs 1.0", "len"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {1: 'int', 1.0: 'float'}\nprint(len(d))",
        expected_output="1"
    ))

    # 68 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-068", "Colisión de Booleano y Entero en Diccionario (True y 1)", "Diccionarios", "True y 1 como Misma Clave", "3.3", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `d[1]` tras ejecutar este código?",
        "Como `True == 1` y tienen el mismo hash, asignar `d[1] = 'uno'` sobrescribe el valor previo de `True`. `d[1]` es 'uno'.",
        ["True == 1", "claves de diccionario"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {True: 'cierto'}\nd[1] = 'uno'\nprint(d[True])",
        expected_output="uno"
    ))

    # 69 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-069", "Comprensión de Diccionarios (Dict Comprehension)", "Diccionarios", "Dict Comprehension", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Crea un diccionario elevando al cuadrado cada clave: {0: 0, 1: 1, 2: 4}.",
        ["dict comprehension"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {x: x**2 for x in range(3)}\nprint(d)",
        expected_output="{0: 0, 1: 1, 2: 4}"
    ))

    # 70 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-070", "Copia Superficial de Diccionario con copy()", "Diccionarios", "Método copy()", "3.3", "intermediate", "output_prediction",
        "¿Cuál es el valor de `a['x']` tras modificar `b['x'] = 99` con `b = a.copy()`?",
        "`.copy()` crea una copia superficial del diccionario. Modificar claves de nivel superior en `b` no afecta a `a`: `a['x']` sigue siendo 1.",
        ["copy()", "copia superficial"], ["pcep-3.3", "nivel-3"],
        code_snippet="a = {'x': 1}\nb = a.copy()\nb['x'] = 99\nprint(a['x'])",
        expected_output="1"
    ))

    # 71 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-071", "setdefault() con Clave Existente", "Diccionarios", "Método setdefault()", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `d.setdefault('a', 99)` si `d = {'a': 1}`?",
        "Si la clave ya existe, `setdefault()` devuelve su valor actual (1) y NO modifica el diccionario.",
        ["setdefault()", "clave existente"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {'a': 1}\nval = d.setdefault('a', 99)\nprint(val)",
        expected_output="1"
    ))

    # 72 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-072", "setdefault() con Clave Nueva", "Diccionarios", "setdefault() clave nueva", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `d.setdefault('b', 99)` si `d = {'a': 1}`?",
        "Si la clave no existe, `setdefault()` la inserta con el valor especificado (99) y devuelve dicho valor.",
        ["setdefault()", "inserción"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {'a': 1}\nval = d.setdefault('b', 99)\nprint(val)",
        expected_output="99"
    ))

    # 73 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-073", "Modificar Tamaño de Diccionario Durante Iteración", "Diccionarios", "RuntimeError en Iteración", "3.3", "intermediate", "code_analysis",
        "¿Qué ocurre si agregamos o eliminamos claves de un diccionario mientras se itera directamente sobre él?",
        "Alterar la longitud de un diccionario durante la iteración directa lanza `RuntimeError: dictionary changed size during iteration`.",
        ["RuntimeError", "mutación durante for"], ["análisis", "pcep-3.3", "nivel-3"],
        code_snippet="d = {'a': 1, 'b': 2}\nfor k in d:\n    del d[k]",
        options=[
            ("Borra todas las claves sin errores.", False),
            ("Lanza RuntimeError: dictionary changed size during iteration.", True),
            ("Lanza KeyError.", False),
            ("Se produce un bucle infinito.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 74 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-074", "Iteración Segura con list(d.keys()) para Borrar", "Diccionarios", "Iteración Segura", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la longitud del diccionario al finalizar este código?",
        "Al iterar sobre una lista estática de claves creada previamente con `list(d.keys())`, se pueden borrar elementos de forma segura. Todas las claves se eliminan y len(d) = 0.",
        ["list(d.keys())", "borrado seguro"], ["pcep-3.3", "nivel-3"],
        code_snippet="d = {'a': 1, 'b': 2}\nfor k in list(d.keys()):\n    del d[k]\nprint(len(d))",
        expected_output="0"
    ))

    # 75 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-075", "Diccionario Anidado", "Diccionarios", "Diccionarios Anidados", "3.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Accede al valor de la clave 'edad' dentro del subdiccionario 'usuario': 25.",
        ["diccionarios anidados"], ["pcep-3.3", "nivel-3"],
        code_snippet="db = {'usuario': {'nombre': 'Ana', 'edad': 25}}\nprint(db['usuario']['edad'])",
        expected_output="25"
    ))

    # =========================================================================
    # OBJETIVO 3.4: Cadenas (Strings) (076 - 100)
    # =========================================================================

    # 76 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-076", "Indexación en Cadenas", "Cadenas", "Indexación", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'Python'[0]`?",
        "El índice 0 accede al primer carácter de la cadena: 'P'.",
        ["cadenas", "indexación", "índice 0"], ["pcep-3.4", "nivel-1"],
        code_snippet="s = 'Python'\nprint(s[0])",
        expected_output="P"
    ))

    # 77 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-077", "Índice Negativo en Cadenas", "Cadenas", "Índice Negativo", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'Python'[-1]`?",
        "El índice -1 accede al último carácter: 'n'.",
        ["cadenas", "índice -1"], ["pcep-3.4", "nivel-1"],
        code_snippet="s = 'Python'\nprint(s[-1])",
        expected_output="n"
    ))

    # 78 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s3-078", "Inmutabilidad de Cadenas (TypeError al Asignar)", "Cadenas", "Inmutabilidad", "3.4", "basic", "code_analysis",
        "¿Qué ocurre si ejecutamos `s = 'Python'; s[0] = 'J'`?",
        "Las cadenas en Python son inmutables. Intentar reasignar un carácter lanza `TypeError: 'str' object does not support item assignment`.",
        ["TypeError", "inmutabilidad de strings"], ["análisis", "pcep-3.4", "nivel-1"],
        code_snippet="s = 'Python'\ns[0] = 'J'",
        options=[
            ("Cambia la cadena a 'Jython'.", False),
            ("Lanza TypeError: 'str' object does not support item assignment.", True),
            ("Lanza ValueError.", False),
            ("Crea una nueva variable llamada J.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 79 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-079", "Método upper()", "Cadenas", "Método upper", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'hola'.upper()`?",
        "`upper()` devuelve una nueva cadena con todas las letras en mayúsculas: 'HOLA'.",
        ["upper()", "mayúsculas"], ["pcep-3.4", "nivel-1"],
        code_snippet="print('hola'.upper())",
        expected_output="HOLA"
    ))

    # 80 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-080", "Método lower()", "Cadenas", "Método lower", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'PCEP'.lower()`?",
        "`lower()` convierte todos los caracteres a minúsculas: 'pcep'.",
        ["lower()", "minúsculas"], ["pcep-3.4", "nivel-1"],
        code_snippet="print('PCEP'.lower())",
        expected_output="pcep"
    ))

    # 81 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-081", "Función len() en Cadenas", "Cadenas", "Longitud de Cadenas", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `len('Hola Mundo')`?",
        "Cuenta cada carácter, incluyendo el espacio en blanco: 10 caracteres.",
        ["len", "espacio en blanco"], ["pcep-3.4", "nivel-1"],
        code_snippet="print(len('Hola Mundo'))",
        expected_output="10"
    ))

    # 82 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-082", "Slicing en Cadenas: [start:stop]", "Cadenas", "Slicing de Strings", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'Python'[0:2]`?",
        "Extrae los caracteres en los índices 0 y 1: 'Py'.",
        ["slicing en strings"], ["pcep-3.4", "nivel-1"],
        code_snippet="print('Python'[0:2])",
        expected_output="Py"
    ))

    # 83 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-083", "Operador in con Subcadenas", "Cadenas", "Subcadenas con in", "3.4", "basic", "output_prediction",
        "¿Cuál es la salida de `'on' in 'Python'`?",
        "El operador `in` comprueba si la subcadena existe dentro de la cadena: 'on' está al final -> True.",
        ["in", "subcadena"], ["pcep-3.4", "nivel-1"],
        code_snippet="print('on' in 'Python')",
        expected_output="True"
    ))

    # 84 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-084", "Método capitalize() vs title()", "Cadenas", "Método capitalize", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'hola mundo'.capitalize()`?",
        "`capitalize()` convierte ÚNICAMENTE la primera letra de toda la cadena a mayúscula y el resto a minúsculas: 'Hola mundo'.",
        ["capitalize()"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('hola mundo'.capitalize())",
        expected_output="Hola mundo"
    ))

    # 85 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-085", "Método title()", "Cadenas", "Método title", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'hola mundo'.title()`?",
        "`title()` convierte a mayúscula la primera letra de CADA palabra: 'Hola Mundo'.",
        ["title()"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('hola mundo'.title())",
        expected_output="Hola Mundo"
    ))

    # 86 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-086", "Método split() sin Argumentos", "Cadenas", "Método split", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'uno dos tres'.split()`?",
        "`split()` sin argumentos divide la cadena por cualquier secuencia de espacios en blanco: ['uno', 'dos', 'tres'].",
        ["split()", "división por espacios"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('uno dos tres'.split())",
        expected_output="['uno', 'dos', 'tres']"
    ))

    # 87 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-087", "Método split() con Delimitador Específico", "Cadenas", "split con Delimitador", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'a,b,c'.split(',')`?",
        "Divide por la coma: ['a', 'b', 'c'].",
        ["split(',')"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('a,b,c'.split(','))",
        expected_output="['a', 'b', 'c']"
    ))

    # 88 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-088", "Método join()", "Cadenas", "Método join", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'-'.join(['A', 'B', 'C'])`?",
        "`join()` une los elementos del iterable intercalando el separador: 'A-B-C'.",
        ["join()", "unión de cadenas"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('-'.join(['A', 'B', 'C']))",
        expected_output="A-B-C"
    ))

    # 89 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-089", "Método strip() para Eliminar Espacios", "Cadenas", "Método strip", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'  Python  '.strip()`?",
        "`strip()` elimina los espacios en blanco sobrantes al inicio y al final de la cadena: 'Python'.",
        ["strip()", "espacios"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('  Python  '.strip())",
        expected_output="Python"
    ))

    # 90 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-090", "Método replace()", "Cadenas", "Método replace", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'banana'.replace('a', 'o')`?",
        "`replace('a', 'o')` sustituye todas las ocurrencias de 'a' por 'o': 'bonono'.",
        ["replace()"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('banana'.replace('a', 'o'))",
        expected_output="bonono"
    ))

    # 91 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-091", "Método find() con Subcadena Encontrada", "Cadenas", "Método find", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `'Python'.find('th')`?",
        "`find()` devuelve el índice donde inicia la subcadena ('P'=0, 'y'=1, 't'=2): 2.",
        ["find()", "índice de subcadena"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('Python'.find('th'))",
        expected_output="2"
    ))

    # 92 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-092", "Método find() con Subcadena Inexistente (-1)", "Cadenas", "find devuelve -1", "3.4", "basic_plus", "output_prediction",
        "¿Qué devuelve `find()` si la subcadena no existe?",
        "A diferencia de `index()`, si la subcadena no se encuentra, `find()` devuelve `-1` de manera segura sin lanzar excepción.",
        ["find()", "-1"], ["pcep-3.4", "nivel-2"],
        code_snippet="print('Python'.find('java'))",
        expected_output="-1"
    ))

    # 93 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-093", "Función ord() para Código ASCII", "Cadenas", "Función ord()", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es el valor devuelto por `ord('A')`?",
        "`ord()` devuelve el valor numérico del punto de código Unicode/ASCII del carácter: para 'A' es 65.",
        ["ord()", "código ASCII"], ["pcep-3.4", "nivel-2"],
        code_snippet="print(ord('A'))",
        expected_output="65"
    ))

    # 94 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-094", "Función chr() para Carácter a partir de Entero", "Cadenas", "Función chr()", "3.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `chr(66)`?",
        "`chr()` convierte el código numérico a su carácter correspondiente: 66 es 'B'.",
        ["chr()", "carácter"], ["pcep-3.4", "nivel-2"],
        code_snippet="print(chr(66))",
        expected_output="B"
    ))

    # 95 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-095", "Inversión de Cadena con Slicing: [::-1]", "Cadenas", "Inversión de Strings", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `'amor'[::-1]`?",
        "El slice `[::-1]` recorre la cadena en sentido inverso: 'roma'.",
        ["[::-1]", "inversión de cadena"], ["pcep-3.4", "nivel-3"],
        code_snippet="print('amor'[::-1])",
        expected_output="roma"
    ))

    # 96 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-096", "Método isdigit()", "Cadenas", "Método isdigit", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `'123'.isdigit()` y `'12.3'.isdigit()`?",
        "'123' contiene solo dígitos (True). '12.3' contiene un punto que no es dígito (False). Imprime: True False.",
        ["isdigit()", "validación numérica"], ["pcep-3.4", "nivel-3"],
        code_snippet="print('123'.isdigit(), '12.3'.isdigit())",
        expected_output="True False"
    ))

    # 97 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-097", "Método isalpha() con Espacios", "Cadenas", "Método isalpha", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `'Hola Mundo'.isalpha()`?",
        "`isalpha()` solo devuelve True si TODOS los caracteres son letras alfabéticas. El espacio en blanco no es letra, por lo que devuelve False.",
        ["isalpha()", "espacio"], ["pcep-3.4", "nivel-3"],
        code_snippet="print('Hola Mundo'.isalpha())",
        expected_output="False"
    ))

    # 98 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-098", "replace() con Parámetro count", "Cadenas", "replace con count", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `'aaaa'.replace('a', 'b', 2)`?",
        "El tercer argumento `count=2` limita los reemplazos a las primeras 2 apariciones: 'bbaa'.",
        ["replace() con count"], ["pcep-3.4", "nivel-3"],
        code_snippet="print('aaaa'.replace('a', 'b', 2))",
        expected_output="bbaa"
    ))

    # 99 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-099", "startwith() y endswith() con Tupla de Prefijos", "Cadenas", "startswith con tupla", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `'reporte.pdf'.endswith(('.jpg', '.png', '.pdf'))`?",
        "`endswith()` admite una tupla de extensiones alternativas: termina en '.pdf' -> True.",
        ["endswith()", "tupla de sufijos"], ["pcep-3.4", "nivel-3"],
        code_snippet="print('reporte.pdf'.endswith(('.jpg', '.png', '.pdf')))",
        expected_output="True"
    ))

    # 100 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s3-100", "Cadena con Códigos de Escape en len()", "Cadenas", "Longitud con Escapes Complejos", "3.4", "intermediate", "output_prediction",
        "¿Cuál es la salida exacta de `len('A\\tB\\nC')`?",
        "'A' (1) + '\\t' (1) + 'B' (1) + '\\n' (1) + 'C' (1) = 5 caracteres en total.",
        ["len", "escapes en cadena"], ["pcep-3.4", "nivel-3"],
        code_snippet="print(len('A\\tB\\nC'))",
        expected_output="5"
    ))

    return exercises

if __name__ == "__main__":
    exs = build_all_section3()
    print(f"Total exercises generated for Section 3: {len(exs)}")
    
    ts_code = "import { Exercise } from '../../types';\n\n"
    ts_code += "export const SECTION_3_EXERCISES: Exercise[] = "
    ts_code += json.dumps(exs, ensure_ascii=False, indent=2)
    ts_code += ";\n"
    
    with open("src/data/exercises/section3.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)
    print("Successfully wrote src/data/exercises/section3.ts!")

#!/usr/bin/env python3
import json

SEC2_TITLE = "Sección 2 — Flujo de Control: Decisiones y Bucles"

def make_ex(eid, title, topic, subtopic, obj, diff, etype, stmt, explanation, concepts, tags,
            code_snippet=None, starter_code=None, options=None, expected_output=None, acceptable=None):
    ex = {
        "id": eid,
        "title": title,
        "section": 2,
        "sectionTitle": SEC2_TITLE,
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

def build_all_section2():
    exercises = []

    # =========================================================================
    # OBJETIVO 2.1: Operadores Relacionales, Lógicos, Bit a Bit y Condicionales (001 - 050)
    # =========================================================================

    # 1 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-001", "Comparación de Igualdad Numérica (==)", "Condiciones y Operadores", "Operador ==", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de evaluar `5 == 5.0` en Python?",
        "En Python, `==` compara valor numérico: el entero 5 y el flotante 5.0 tienen el mismo valor numérico, por lo que evalúa a True.",
        ["==", "igualdad de valor", "float vs int"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(5 == 5.0)",
        expected_output="True"
    ))

    # 2 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-002", "Operador de Desigualdad (!=)", "Condiciones y Operadores", "Operador !=", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`!=` verifica si los operandos son distintos. 10 es diferente de 20, por lo que devuelve True.",
        ["!=", "desigualdad"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(10 != 20)",
        expected_output="True"
    ))

    # 3 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-003", "Estructura if Simple", "Condiciones y Operadores", "Bloque if", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Como x > 5 es True (10 > 5), el bloque if se ejecuta imprimiendo 'Mayor'. Luego el print exterior se ejecuta siempre.",
        ["if", "flujo de ejecución"], ["pcep-2.1", "nivel-1"],
        code_snippet="x = 10\nif x > 5:\n    print('Mayor')\nprint('Fin')",
        expected_output="Mayor\nFin"
    ))

    # 4 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-004", "Estructura if-else", "Condiciones y Operadores", "if-else", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "x > 10 (8 > 10) es False, por lo que el flujo toma la rama else imprimiendo 'Menor o igual'.",
        ["if-else", "rama else"], ["pcep-2.1", "nivel-1"],
        code_snippet="x = 8\nif x > 10:\n    print('Mayor')\nelse:\n    print('Menor o igual')",
        expected_output="Menor o igual"
    ))

    # 5 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-005", "Operador Lógico and", "Condiciones y Operadores", "Operador and", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `True and False`?",
        "El operador `and` solo devuelve True si AMBOS operandos son verdaderos. Como uno es False, resulta False.",
        ["and", "lógica booleana"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(True and False)",
        expected_output="False"
    ))

    # 6 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-006", "Operador Lógico or", "Condiciones y Operadores", "Operador or", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `True or False`?",
        "El operador `or` devuelve True si al menos uno de los operandos es verdadero.",
        ["or", "lógica booleana"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(True or False)",
        expected_output="True"
    ))

    # 7 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-007", "Operador Lógico not", "Condiciones y Operadores", "Operador not", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`not` invierte el valor de verdad. not False es True.",
        ["not", "negación"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(not False)",
        expected_output="True"
    ))

    # 8 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-008", "Estructura if-elif-else", "Condiciones y Operadores", "if-elif-else", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "x > 100 es False; x > 50 (75 > 50) es True, por lo que entra al bloque elif e imprime 'B'. Una vez que una rama se cumple, se sale del if.",
        ["if-elif-else", "mutuamente excluyente"], ["pcep-2.1", "nivel-1"],
        code_snippet="x = 75\nif x > 100:\n    print('A')\nelif x > 50:\n    print('B')\nelse:\n    print('C')",
        expected_output="B"
    ))

    # 9 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-009", "Confusión entre Asignación (=) y Comparación (==)", "Condiciones y Operadores", "Asignación en if", "2.1", "basic", "code_analysis",
        "¿Qué ocurre si escribimos `if x = 5:` en Python 3?",
        "El operador de asignación simple `=` no está permitido dentro de la condición de una sentencia if estándar, provocando SyntaxError.",
        ["SyntaxError", "asignación vs comparación", "="], ["análisis", "pcep-2.1", "nivel-1"],
        code_snippet="x = 5\nif x = 5:\n    print('Igual')",
        options=[
            ("Imprime 'Igual'.", False),
            ("Lanza SyntaxError: invalid syntax.", True),
            ("Lanza TypeError.", False),
            ("x pasa a valer True.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 10 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-010", "Operador Bit a Bit AND (&)", "Condiciones y Operadores", "Operador bitwise &", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de evaluar `6 & 3`?",
        "6 en binario es 110, 3 es 011. Operación AND bit a bit: 110 & 011 = 010 (que es 2 en decimal).",
        ["&", "bitwise AND", "binario"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(6 & 3)",
        expected_output="2"
    ))

    # 11 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-011", "Operador Bit a Bit OR (|)", "Condiciones y Operadores", "Operador bitwise |", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `6 | 3`?",
        "6 es 110, 3 es 011. Operación OR bit a bit: 110 | 011 = 111 (que es 7 en decimal).",
        ["|", "bitwise OR"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(6 | 3)",
        expected_output="7"
    ))

    # 12 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-012", "Operador Bit a Bit XOR (^)", "Condiciones y Operadores", "Operador bitwise ^", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `6 ^ 3`?",
        "6 es 110, 3 es 011. XOR produce 1 cuando los bits son diferentes: 110 ^ 011 = 101 (5 en decimal).",
        ["^", "bitwise XOR"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(6 ^ 3)",
        expected_output="5"
    ))

    # 13 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-013", "Desplazamiento a la Izquierda (<<)", "Condiciones y Operadores", "Shift Left <<", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `3 << 2`?",
        "Desplazar 2 bits a la izquierda equivale a multiplicar por 2^2 = 4: 3 * 4 = 12.",
        ["<<", "shift left", "multiplicación binaria"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(3 << 2)",
        expected_output="12"
    ))

    # 14 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-014", "Desplazamiento a la Derecha (>>)", "Condiciones y Operadores", "Shift Right >>", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `16 >> 2`?",
        "Desplazar 2 bits a la derecha equivale a dividir de forma entera por 2^2 = 4: 16 // 4 = 4.",
        [">>", "shift right", "división binaria"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(16 >> 2)",
        expected_output="4"
    ))

    # 15 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-015", "Condicional con Números como Booleanos", "Condiciones y Operadores", "Truthy Numérico", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "Cualquier número distinto de cero es considerado verdadero (truthy). Como -5 != 0, evalúa a True e imprime 'Sí'.",
        ["truthy", "números en if"], ["pcep-2.1", "nivel-1"],
        code_snippet="if -5:\n    print('Sí')\nelse:\n    print('No')",
        expected_output="Sí"
    ))

    # 16 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-016", "Condicional con Cero (0)", "Condiciones y Operadores", "Falsy Numérico", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "El número entero 0 es considerado falso (falsy). Por ello entra a la rama else imprimiendo 'Falso'.",
        ["falsy", "cero en condicional"], ["pcep-2.1", "nivel-1"],
        code_snippet="if 0:\n    print('Verdadero')\nelse:\n    print('Falso')",
        expected_output="Falso"
    ))

    # 17 (L1, code_completion)
    exercises.append(make_ex(
        "pcep-s2-017", "Completar Rama Elif", "Condiciones y Operadores", "Sintaxis elif", "2.1", "basic", "code_completion",
        "Completa con la palabra clave necesaria para añadir una condición alternativa intermedia:",
        "La palabra clave en Python es 'elif' (abreviatura de else if).",
        ["elif", "sintaxis"], ["completar", "pcep-2.1", "nivel-1"],
        starter_code="nota = 85\nif nota >= 90:\n    print('A')\n____ nota >= 80:\n    print('B')",
        acceptable=["elif"],
        expected_output="B"
    ))

    # 18 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-018", "Precedencia de not sobre and", "Condiciones y Operadores", "Precedencia Lógica", "2.1", "basic", "output_prediction",
        "¿Cuál es la salida de `not False and False`?",
        "`not` tiene mayor precedencia que `and`. Se evalúa como: (not False) and False -> True and False -> False.",
        ["not", "and", "precedencia lógica"], ["pcep-2.1", "nivel-1"],
        code_snippet="print(not False and False)",
        expected_output="False"
    ))

    # 19 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-019", "Cortocircuito en and (Short-Circuit)", "Condiciones y Operadores", "Cortocircuito and", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El operador `and` evalúa de izquierda a derecha. Como el primer término es False, se produce cortocircuito y NO se evalúa `10 / 0`, evitando el ZeroDivisionError.",
        ["cortocircuito", "and", "ZeroDivisionError evitado"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(False and (10 / 0 == 0))",
        expected_output="False"
    ))

    # 20 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-020", "Cortocircuito en or (Short-Circuit)", "Condiciones y Operadores", "Cortocircuito or", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El operador `or` evalúa de izquierda a derecha. Como el primer término es True, se produce cortocircuito y el segundo término (`10 / 0`) nunca se evalúa.",
        ["cortocircuito", "or"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(True or (10 / 0 == 0))",
        expected_output="True"
    ))

    # 21 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-021", "Valor Retornado por or con Operandos No Booleanos", "Condiciones y Operadores", "Valores en or", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida por `print(0 or 'Python')`?",
        "En Python, `or` no devuelve obligatoriamente un booleano; devuelve el primer operando verdadero (truthy), o el último si todos son falsos. Como 0 es falso, devuelve 'Python'.",
        ["or", "truthy", "valor de retorno"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(0 or 'Python')",
        expected_output="Python"
    ))

    # 22 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-022", "Valor Retornado por and con Operandos No Booleanos", "Condiciones y Operadores", "Valores en and", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida por `print('Hola' and 42)`?",
        "`and` devuelve el primer operando falso (si existe), o el último operando evaluado si todos son verdaderos. Ambos son truthy, por lo que devuelve 42.",
        ["and", "truthy", "valor de retorno"], ["pcep-2.1", "nivel-2"],
        code_snippet="print('Hola' and 42)",
        expected_output="42"
    ))

    # 23 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-023", "Operador Bit a Bit de Complemento (~)", "Condiciones y Operadores", "Bitwise NOT ~", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida por `print(~5)` en Python?",
        "El operador de negación bit a bit `~` en complemento a dos sigue la regla exacta: `~x = -(x + 1)`. Para x = 5: -(5 + 1) = -6.",
        ["~", "complemento a 2", "bitwise NOT"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(~5)",
        expected_output="-6"
    ))

    # 24 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-024", "Complemento Bit a Bit de Cero (~0)", "Condiciones y Operadores", "Bitwise NOT de 0", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `print(~0)`?",
        "Siguiendo `~x = -(x + 1)`: -(0 + 1) = -1.",
        ["~", "~0", "bitwise"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(~0)",
        expected_output="-1"
    ))

    # 25 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-025", "if Anidado Básico", "Condiciones y Operadores", "if anidados", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "x > 0 (10 > 0) es True. Entra al if exterior. En el if interior, y > 5 (3 > 5) es False, por lo que entra a su rama else imprimiendo 'Y pequeño'.",
        ["if anidado", "flujo"], ["pcep-2.1", "nivel-2"],
        code_snippet="x = 10\ny = 3\nif x > 0:\n    if y > 5:\n        print('Ambos altos')\n    else:\n        print('Y pequeño')\nelse:\n    print('X no positivo')",
        expected_output="Y pequeño"
    ))

    # 26 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-026", "Precedencia: and tiene mayor precedencia que or", "Condiciones y Operadores", "Precedencia and sobre or", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `print(True or False and False)`?",
        "`and` tiene mayor precedencia que `or`. Se evalúa como: True or (False and False) -> True or False -> True.",
        ["precedencia", "and vs or"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(True or False and False)",
        expected_output="True"
    ))

    # 27 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-027", "Paréntesis Invirtiendo Precedencia de or", "Condiciones y Operadores", "Paréntesis en Lógica", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `print((True or False) and False)`?",
        "Los paréntesis fuerzan a evaluar primero (True or False) = True. Luego True and False = False.",
        ["paréntesis", "lógica"], ["pcep-2.1", "nivel-2"],
        code_snippet="print((True or False) and False)",
        expected_output="False"
    ))

    # 28 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-028", "Condicional con Operador Ternario (Expresión Condicional)", "Condiciones y Operadores", "Operador Ternario", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "La expresión condicional `A if COND else B` evalúa la condición: como x % 2 == 0 (4 % 2 == 0) es True, devuelve 'Par'.",
        ["expresión condicional", "ternario"], ["pcep-2.1", "nivel-2"],
        code_snippet="x = 4\nresultado = 'Par' if x % 2 == 0 else 'Impar'\nprint(resultado)",
        expected_output="Par"
    ))

    # 29 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-029", "Olvido de Dos Puntos (:) en if", "Condiciones y Operadores", "SyntaxError en if", "2.1", "basic_plus", "code_analysis",
        "¿Qué error produce el siguiente código?",
        "Olvidar los dos puntos `:` al final del encabezado de una sentencia if es un error sintáctico: `SyntaxError: expected ':'`.",
        ["SyntaxError", "dos puntos :", "if"], ["análisis", "pcep-2.1", "nivel-2"],
        code_snippet="x = 10\nif x > 5\n    print('Mayor')",
        options=[
            ("Imprime 'Mayor'.", False),
            ("Lanza SyntaxError: expected ':'.", True),
            ("Lanza IndentationError.", False),
            ("Lanza NameError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 30 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-030", "Operadores Relacionales con Cadenas de Texto", "Condiciones y Operadores", "Comparación de Cadenas", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de evaluar `'10' < '2'` en Python?",
        "Las cadenas se comparan carácter por carácter según su código ASCII/Unicode. El carácter '1' (código 49) es menor que el carácter '2' (código 50), por lo que `'10' < '2'` es True.",
        ["comparación lexicográfica", "ASCII", "cadenas"], ["pcep-2.1", "nivel-2"],
        code_snippet="print('10' < '2')",
        expected_output="True"
    ))

    # 31 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-031", "Mayúsculas vs Minúsculas en Comparación", "Condiciones y Operadores", "Orden ASCII", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de evaluar `'a' > 'A'`?",
        "En la tabla ASCII, las letras mayúsculas vienen antes que las minúsculas ('A' = 65, 'a' = 97). Por tanto, 97 > 65 es True.",
        ["ASCII", "mayúsculas vs minúsculas"], ["pcep-2.1", "nivel-2"],
        code_snippet="print('a' > 'A')",
        expected_output="True"
    ))

    # 32 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-032", "Operadores Bit a Bit vs Lógicos", "Condiciones y Operadores", "& vs and", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "`1 & 2`: 1 es 01, 2 es 10. 01 & 10 = 00 (0). `1 and 2`: ambos son truthy, devuelve el último operando evaluado (2). Imprime: 0 2.",
        ["& vs and", "bitwise vs lógico"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(1 & 2, 1 and 2)",
        expected_output="0 2"
    ))

    # 33 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-033", "Condicionales en Cascada con Múltiples elif", "Condiciones y Operadores", "Múltiples elif", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida?",
        "x = 15. x > 20 es False; x > 10 (15 > 10) es True, por lo que imprime 'Mayor a 10' y termina el bloque condicional sin evaluar los siguientes elif.",
        ["elif en cascada", "salida anticipada"], ["pcep-2.1", "nivel-2"],
        code_snippet="x = 15\nif x > 20:\n    print('Mayor a 20')\nelif x > 10:\n    print('Mayor a 10')\nelif x > 5:\n    print('Mayor a 5')\nelse:\n    print('Otro')",
        expected_output="Mayor a 10"
    ))

    # 34 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-034", "Precedencia de Operadores Relacionales sobre Lógicos", "Condiciones y Operadores", "Precedencia Relacional vs Lógica", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Los operadores de comparación (`<`, `>`) tienen mayor precedencia que los lógicos (`and`). Se evalúa: (5 > 2) and (3 < 10) -> True and True -> True.",
        ["precedencia relacional", "and"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(5 > 2 and 3 < 10)",
        expected_output="True"
    ))

    # 35 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-035", "Doble Negación con not not", "Condiciones y Operadores", "Doble not", "2.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `not not 'Python'`?",
        "'Python' es truthy. not 'Python' es False. not False es True. `not not x` equivale a bool(x).",
        ["not not", "coerción booleana"], ["pcep-2.1", "nivel-2"],
        code_snippet="print(not not 'Python')",
        expected_output="True"
    ))

    # 36 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-036", "Tres if Anidados Profundos", "Condiciones y Operadores", "if Anidados Profundos", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "a > 0 (5 > 0) -> entra. b > 0 (10 > 0) -> entra. c > 0 (-2 > 0) -> False -> rama else del tercer if -> imprime 'C negativo'.",
        ["if anidados profundos", "trazado"], ["pcep-2.1", "nivel-3"],
        code_snippet="a, b, c = 5, 10, -2\nif a > 0:\n    if b > 0:\n        if c > 0:\n            print('Todos positivos')\n        else:\n            print('C negativo')\n    else:\n        print('B negativo')\nelse:\n    print('A negativo')",
        expected_output="C negativo"
    ))

    # 37 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-037", "Trampa de Cortocircuito con Modificación de Variables", "Condiciones y Operadores", "Cortocircuito con Efecto Secundario", "2.1", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `contador` al finalizar este código?",
        "En `True or (contador := contador + 1)` o en `if True or func():`: al ser True el primer operando, el segundo nunca se evalúa debido al cortocircuito. contador se queda en 0.",
        ["cortocircuito", "efectos secundarios"], ["pcep-2.1", "nivel-3"],
        code_snippet="contador = 0\ndef sumar():\n    global contador\n    contador += 1\n    return True\n\nif True or sumar():\n    pass\nprint(contador)",
        expected_output="0"
    ))

    # 38 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-038", "Cortocircuito forzando ejecución del segundo término", "Condiciones y Operadores", "Cortocircuito en and con False", "2.1", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `contador` en este código?",
        "En `False and sumar()`: al ser False el primer término, el `and` cortocircuita y `sumar()` NUNCA se invoca. contador sigue valiendo 0.",
        ["cortocircuito", "and", "funciones no ejecutadas"], ["pcep-2.1", "nivel-3"],
        code_snippet="contador = 0\ndef sumar():\n    global contador\n    contador += 1\n    return True\n\nif False and sumar():\n    pass\nprint(contador)",
        expected_output="0"
    ))

    # 39 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-039", "Precedencia de Operadores Bit a Bit sobre Relacionales", "Condiciones y Operadores", "Precedencia Bitwise vs Comparación", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "¡Cuidado con la precedencia! Los operadores de comparación (`==`) tienen MENOR precedencia que los operadores de bits de shift (`<<`, `>>`), pero MAYOR precedencia que los de bits booleanos (`&`, `|`, `^`). En `1 & 2 == 0`, se evalúa primero `2 == 0` (False/0), y luego `1 & 0 = 0`.",
        ["precedencia", "bitwise vs relacional", "& vs =="], ["pcep-2.1", "nivel-3"],
        code_snippet="print(1 & 2 == 0)",
        expected_output="0"
    ))

    # 40 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-040", "Paréntesis Resolviendo Confusión Bitwise", "Condiciones y Operadores", "Paréntesis en Bitwise", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `print((1 & 2) == 0)`?",
        "Con paréntesis forzados: (1 & 2) es 0. Luego 0 == 0 es True.",
        ["paréntesis", "bitwise", "True"], ["pcep-2.1", "nivel-3"],
        code_snippet="print((1 & 2) == 0)",
        expected_output="True"
    ))

    # 41 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-041", "Comparación de Cadenas y Enteros con ==", "Condiciones y Operadores", "== entre str e int", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por `print('5' == 5)`?",
        "En Python, una cadena nunca es igual a un entero mediante `==`, pero NO produce error: simplemente evalúa a False.",
        ["==", "str vs int", "False"], ["pcep-2.1", "nivel-3"],
        code_snippet="print('5' == 5)",
        expected_output="False"
    ))

    # 42 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-042", "Comparación de Cadenas y Enteros con <", "Condiciones y Operadores", "TypeError en Comparación", "2.1", "intermediate", "code_analysis",
        "¿Qué ocurre si ejecutamos `'5' < 5` en Python 3?",
        "A diferencia de `==` (que retorna False), los operadores de orden (`<`, `>`, `<=`, `>=`) entre tipos incompatibles no soportados lanzan `TypeError: '<' not supported between instances of 'str' and 'int'`.",
        ["TypeError", "comparación de orden", "str vs int"], ["análisis", "pcep-2.1", "nivel-3"],
        code_snippet="print('5' < 5)",
        options=[
            ("Imprime False.", False),
            ("Imprime True.", False),
            ("Lanza TypeError: '<' not supported between instances of 'str' and 'int'.", True),
            ("Convierte el 5 a '5' e imprime False.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 43 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-043", "Operador is vs Operador ==", "Condiciones y Operadores", "Identidad vs Igualdad", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`==` compara contenido o valor (ambas listas contienen [1, 2, 3] -> True). `is` compara identidad en memoria (`id(a) == id(b)`): son dos listas creadas independientemente en posiciones distintas de memoria -> False.",
        ["is", "==", "identidad de objetos"], ["pcep-2.1", "nivel-3"],
        code_snippet="a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b, a is b)",
        expected_output="True False"
    ))

    # 44 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-044", "Asignación de Referencia con is", "Condiciones y Operadores", "Misma Referencia con is", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`b = a` asigna la misma referencia de memoria. Por tanto, `a is b` evalúa a True.",
        ["is", "referencias de memoria"], ["pcep-2.1", "nivel-3"],
        code_snippet="a = [10, 20]\nb = a\nprint(a is b)",
        expected_output="True"
    ))

    # 45 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-045", "Comparación de Booleano con None", "Condiciones y Operadores", "Comparación con None", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida por `print(False == None)`?",
        "None es el objeto nulo único de tipo NoneType y no es numéricamente igual a False. La comparación retorna False.",
        ["None", "False", "=="], ["pcep-2.1", "nivel-3"],
        code_snippet="print(False == None)",
        expected_output="False"
    ))

    # 46 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-046", "Condición con Lista Vacía", "Condiciones y Operadores", "Falsy de Contenedores", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Cualquier colección vacía (como una lista vacía `[]`) es falsy en Python. El if salta a la rama else.",
        ["falsy", "lista vacía"], ["pcep-2.1", "nivel-3"],
        code_snippet="items = []\nif items:\n    print('Hay elementos')\nelse:\n    print('Vacío')",
        expected_output="Vacío"
    ))

    # 47 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-047", "Negación de Expresión Relacional", "Condiciones y Operadores", "not con Comparaciones", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "5 > 10 es False. not (5 > 10) es True. Imprime 'Cierto'.",
        ["not", "paréntesis"], ["pcep-2.1", "nivel-3"],
        code_snippet="if not (5 > 10):\n    print('Cierto')\nelse:\n    print('Falso')",
        expected_output="Cierto"
    ))

    # 48 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-048", "XOR de Números Negativos", "Condiciones y Operadores", "Bitwise XOR con Negativo", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `print(-1 ^ 0)`?",
        "-1 en complemento a dos tiene todos sus bits en 1. -1 ^ 0 = -1.",
        ["^", "-1", "bitwise"], ["pcep-2.1", "nivel-3"],
        code_snippet="print(-1 ^ 0)",
        expected_output="-1"
    ))

    # 49 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-049", "Desplazamiento a la Derecha de Número Negativo", "Condiciones y Operadores", "Shift Right Aritmético", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `print(-4 >> 1)`?",
        "El desplazamiento a la derecha en Python preserva el signo (shift aritmético) y redondea hacia abajo ($-\\infty$): -4 // 2 = -2.",
        [">>", "shift negativo"], ["pcep-2.1", "nivel-3"],
        code_snippet="print(-4 >> 1)",
        expected_output="-2"
    ))

    # 50 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-050", "Evaluación de Expresión Lógica Compleja", "Condiciones y Operadores", "Lógica Combinada PCEP", "2.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "1. not (5 == 5) -> not True -> False.\n2. False and (10 > 2) -> cortocircuito -> False.\n3. False or True -> True.\nImprime: True.",
        ["lógica combinada", "precedencia"], ["pcep-2.1", "nivel-3"],
        code_snippet="print(not (5 == 5) and (10 > 2) or True)",
        expected_output="True"
    ))

    # =========================================================================
    # OBJETIVO 2.2: Bucles (while y for), range(), break, continue y else (051 - 100)
    # =========================================================================

    # 51 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-051", "Bucle while Básico", "Bucles y range", "Bucle while", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El bucle se ejecuta para i = 0, 1, 2. Cuando i llega a 3, la condición i < 3 es False y el bucle termina.",
        ["while", "contador"], ["pcep-2.2", "nivel-1"],
        code_snippet="i = 0\nwhile i < 3:\n    print(i)\n    i += 1",
        expected_output="0\n1\n2"
    ))

    # 52 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-052", "Bucle for con range(stop)", "Bucles y range", "range con 1 argumento", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`range(3)` genera los números enteros comenzando en 0 hasta 3 exclusivo: 0, 1, 2.",
        ["for", "range()", "límite superior exclusivo"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(3):\n    print(x)",
        expected_output="0\n1\n2"
    ))

    # 53 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-053", "range con Inicio y Fin: range(start, stop)", "Bucles y range", "range con 2 argumentos", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`range(2, 5)` inicia en 2 y termina en 4 (5 es exclusivo): imprime 2, luego 3, luego 4.",
        ["range(start, stop)"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(2, 5):\n    print(x)",
        expected_output="2\n3\n4"
    ))

    # 54 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-054", "range con Paso Positivo: range(start, stop, step)", "Bucles y range", "range con 3 argumentos", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`range(1, 8, 2)` genera números comenzando en 1 con paso de 2 en 2: 1, 3, 5, 7.",
        ["range(start, stop, step)", "paso positivo"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(1, 8, 2):\n    print(x)",
        expected_output="1\n3\n5\n7"
    ))

    # 55 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-055", "Instrucción break en while", "Bucles y range", "Instrucción break", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Cuando i == 2 se ejecuta `break`, que interrumpe inmediatamente el bucle. Solo se imprimen 0 y 1.",
        ["break", "interrupción de bucle"], ["pcep-2.2", "nivel-1"],
        code_snippet="i = 0\nwhile i < 5:\n    if i == 2:\n        break\n    print(i)\n    i += 1",
        expected_output="0\n1"
    ))

    # 56 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-056", "Instrucción continue en for", "Bucles y range", "Instrucción continue", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Cuando x == 2 se ejecuta `continue`, saltando el resto del cuerpo y pasando a la siguiente iteración. Se imprimen 0, 1, 3.",
        ["continue", "salto de iteración"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(4):\n    if x == 2:\n        continue\n    print(x)",
        expected_output="0\n1\n3"
    ))

    # 57 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-057", "Acumulador en Bucle for", "Bucles y range", "Suma acumulada", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida final al ejecutar este código?",
        "range(1, 5) genera 1, 2, 3, 4. Suma: 0 + 1 + 2 + 3 + 4 = 10.",
        ["acumulador", "suma"], ["pcep-2.2", "nivel-1"],
        code_snippet="total = 0\nfor n in range(1, 5):\n    total += n\nprint(total)",
        expected_output="10"
    ))

    # 58 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-058", "Iteración sobre una Cadena de Texto", "Bucles y range", "for en cadenas", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El bucle `for` itera carácter por carácter la cadena 'Py'. Con `end='-'` imprime: P-y-.",
        ["for", "iteración de cadenas", "end="], ["pcep-2.2", "nivel-1"],
        code_snippet="for ch in 'Py':\n    print(ch, end='-')",
        expected_output="P-y-"
    ))

    # 59 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-059", "Bucle while con Condición Inicial Falsa", "Bucles y range", "while sin iteraciones", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida por el siguiente código?",
        "Como x > 10 (5 > 10) es False desde el inicio, el cuerpo del bucle while no se ejecuta ninguna vez. Solo imprime 'Fin'.",
        ["while", "condición falsa"], ["pcep-2.2", "nivel-1"],
        code_snippet="x = 5\nwhile x > 10:\n    print(x)\n    x += 1\nprint('Fin')",
        expected_output="Fin"
    ))

    # 60 (L1, code_completion)
    exercises.append(make_ex(
        "pcep-s2-060", "Completar range para Números del 0 al 4", "Bucles y range", "range argument", "2.2", "basic", "code_completion",
        "Completa el argumento de `range(____)` para que el bucle itere exactamente 5 veces (del 0 al 4):",
        "Para iterar del 0 al 4 se usa `range(5)`.",
        ["range()", "límite"], ["completar", "pcep-2.2", "nivel-1"],
        starter_code="for i in range(____):\n    pass",
        acceptable=["5"],
        expected_output=""
    ))

    # 61 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-061", "range con Start Igual a Stop", "Bucles y range", "range vacío", "2.2", "basic", "output_prediction",
        "¿Cuántas veces se ejecuta el cuerpo de `for x in range(3, 3):`?",
        "Cuando el valor inicial es igual al valor final con paso positivo, el rango está vacío y no se ejecuta ninguna iteración.",
        ["range vacío", "iteraciones"], ["pcep-2.2", "nivel-1"],
        code_snippet="conteo = 0\nfor x in range(3, 3):\n    conteo += 1\nprint(conteo)",
        expected_output="0"
    ))

    # 62 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-062", "range con Start Mayor a Stop sin Paso Negativo", "Bucles y range", "range vacío descendente", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "Con paso positivo por defecto (+1), si start (5) > stop (2), el rango está vacío. No itera e imprime 0.",
        ["range vacío", "step por defecto"], ["pcep-2.2", "nivel-1"],
        code_snippet="c = 0\nfor x in range(5, 2):\n    c += 1\nprint(c)",
        expected_output="0"
    ))

    # 63 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-063", "Bucle for con Lista Numérica", "Bucles y range", "Iteración de lista", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El bucle itera sobre cada elemento multiplicándolo por 2: 2, 4, 6.",
        ["for en lista"], ["pcep-2.2", "nivel-1"],
        code_snippet="for num in [1, 2, 3]:\n    print(num * 2)",
        expected_output="2\n4\n6"
    ))

    # 64 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-064", "Multiplicador en while", "Bucles y range", "while con multiplicación", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Iteración 1: x = 1, imprime 1, x pasa a 2.\nIteración 2: x = 2, imprime 2, x pasa a 4.\nIteración 3: x = 4, imprime 4, x pasa a 8.\nTermina porque 8 no es < 8.",
        ["while", "duplicación"], ["pcep-2.2", "nivel-1"],
        code_snippet="x = 1\nwhile x < 8:\n    print(x)\n    x *= 2",
        expected_output="1\n2\n4"
    ))

    # 65 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-065", "continue en la Primera Instrucción del Bucle", "Bucles y range", "continue directo", "2.2", "basic", "output_prediction",
        "¿Cuántas líneas se imprimen en consola con este código?",
        "Como `continue` se ejecuta incondicionalmente al entrar a cada iteración, `print(x)` nunca llega a ejecutarse.",
        ["continue incondicional"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(5):\n    continue\n    print(x)\nprint('Listo')",
        expected_output="Listo"
    ))

    # 66 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-066", "break en la Primera Iteración", "Bucles y range", "break inmediato", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "En la primera iteración (x = 0), se ejecuta `break`, saliendo del bucle de inmediato sin imprimir x.",
        ["break inmediato"], ["pcep-2.2", "nivel-1"],
        code_snippet="for x in range(10):\n    break\n    print(x)\nprint('Fuera')",
        expected_output="Fuera"
    ))

    # 67 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-067", "Contador Decreciente con while", "Bucles y range", "while decreciente", "2.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "i = 3: imprime 3, i pasa a 2.\ni = 2: imprime 2, i pasa a 1.\ni = 1: imprime 1, i pasa a 0.\ni = 0: termina.",
        ["while decreciente"], ["pcep-2.2", "nivel-1"],
        code_snippet="i = 3\nwhile i > 0:\n    print(i)\n    i -= 1",
        expected_output="3\n2\n1"
    ))

    # 68 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-068", "range con Paso Negativo: range(start, stop, step)", "Bucles y range", "range con paso negativo", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "`range(5, 1, -1)` empieza en 5 y decrementa de 1 en 1 hasta antes de 1: 5, 4, 3, 2.",
        ["range()", "paso negativo"], ["pcep-2.2", "nivel-2"],
        code_snippet="for x in range(5, 1, -1):\n    print(x)",
        expected_output="5\n4\n3\n2"
    ))

    # 69 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-069", "range Descendente con Paso de -2", "Bucles y range", "range con paso -2", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`range(10, 3, -2)` genera números pares descendentes: 10, 8, 6, 4.",
        ["range()", "paso -2"], ["pcep-2.2", "nivel-2"],
        code_snippet="for x in range(10, 3, -2):\n    print(x)",
        expected_output="10\n8\n6\n4"
    ))

    # 70 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-070", "Cláusula else en Bucle for que Termina Normal", "Bucles y range", "else en for", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "La cláusula `else` de un bucle for se ejecuta cuando el bucle completa todas sus iteraciones de manera natural (sin ser interrumpido por break). Imprime 0, 1, luego 'Terminado'.",
        ["for-else", "terminación normal"], ["pcep-2.2", "nivel-2"],
        code_snippet="for x in range(2):\n    print(x)\nelse:\n    print('Terminado')",
        expected_output="0\n1\nTerminado"
    ))

    # 71 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-071", "Cláusula else en for Interrumpido por break", "Bucles y range", "else en for con break", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Cuando un bucle es interrumpido por una instrucción `break`, la cláusula `else` NO se ejecuta. Solo imprime 0 y 'Fin'.",
        ["for-else", "break evita else"], ["pcep-2.2", "nivel-2"],
        code_snippet="for x in range(3):\n    if x == 1:\n        break\n    print(x)\nelse:\n    print('Completado')\nprint('Fin')",
        expected_output="0\nFin"
    ))

    # 72 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-072", "Cláusula else en Bucle while", "Bucles y range", "else en while", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Cuando la condición de while se vuelve False de manera natural, se ejecuta su bloque `else`. Imprime 1, 2, y luego 'Fin normal'.",
        ["while-else", "terminación natural"], ["pcep-2.2", "nivel-2"],
        code_snippet="i = 1\nwhile i <= 2:\n    print(i)\n    i += 1\nelse:\n    print('Fin normal')",
        expected_output="1\n2\nFin normal"
    ))

    # 73 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-073", "Bucles Anidados for dentro de for", "Bucles y range", "Bucles anidados", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Por cada i (0, 1), j toma los valores (0, 1). Se imprimen los pares (0,0), (0,1), (1,0), (1,1).",
        ["bucles anidados", "for anidado"], ["pcep-2.2", "nivel-2"],
        code_snippet="for i in range(2):\n    for j in range(2):\n        print(f'{i},{j}')",
        expected_output="0,0\n0,1\n1,0\n1,1"
    ))

    # 74 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-074", "break en Bucle Anidado", "Bucles y range", "break anidado", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "La instrucción `break` solo interrumpe el bucle MÁS INTERNO en el que se encuentra. El bucle exterior continúa con su siguiente iteración.",
        ["break en anidado", "alcance de break"], ["pcep-2.2", "nivel-2"],
        code_snippet="for i in range(2):\n    for j in range(3):\n        if j == 1:\n            break\n        print(f'{i}:{j}')",
        expected_output="0:0\n1:0"
    ))

    # 75 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s2-075", "Paso de Cero en range(1, 10, 0)", "Bucles y range", "ValueError en range con step 0", "2.2", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `range(1, 10, 0)` en Python?",
        "`range()` no admite un paso (step) igual a cero. Lanza inmediatamente `ValueError: range() arg 3 must not be zero`.",
        ["ValueError", "range(step=0)"], ["análisis", "pcep-2.2", "nivel-2"],
        code_snippet="for x in range(1, 10, 0):\n    print(x)",
        options=[
            ("Produce un bucle infinito imprimiendo 1 repetidamente.", False),
            ("Lanza ValueError: range() arg 3 must not be zero.", True),
            ("No itera ninguna vez (rango vacío).", False),
            ("Lanza ZeroDivisionError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 76 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-076", "Valor de la Variable de Control tras el for", "Bucles y range", "Variable de control post-bucle", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es el valor final de la variable `x` tras terminar el bucle?",
        "En Python, la variable del bucle for NO tiene ámbito local al bucle; permanece viva en el ámbito envolvente con el ÚLTIMO valor asignado (2).",
        ["variable de control", "ámbito post-for"], ["pcep-2.2", "nivel-2"],
        code_snippet="for x in range(3):\n    pass\nprint(x)",
        expected_output="2"
    ))

    # 77 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-077", "Intento de Modificar la Variable del for dentro del Bucle", "Bucles y range", "Reasignación de variable iteradora", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "En cada iteración, la sentencia `for` sobrescribe la variable `i` con el siguiente valor que produce el iterador de `range(3)`. La asignación `i += 5` no afecta la siguiente iteración.",
        ["variable iteradora", "independencia de range"], ["pcep-2.2", "nivel-2"],
        code_snippet="for i in range(3):\n    print(i, end=' ')\n    i += 5",
        expected_output="0 1 2 "
    ))

    # 78 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-078", "while con continue y Olvido de Incremento", "Bucles y range", "Trampa de Bucle Infinito", "2.2", "basic_plus", "code_analysis",
        "¿Qué ocurre con el siguiente código?",
        "Cuando i llega a 1, entra al `if` y ejecuta `continue` antes de alcanzar `i += 1`. Como `i` nunca se incrementa, se queda en 1 para siempre, creando un bucle infinito.",
        ["bucle infinito", "continue en while", "olvido de incremento"], ["análisis", "pcep-2.2", "nivel-2"],
        code_snippet="i = 0\nwhile i < 3:\n    if i == 1:\n        continue\n    print(i)\n    i += 1",
        options=[
            ("Imprime: 0 y 2.", False),
            ("Imprime: 0 y luego entra en un bucle infinito porque i no se incrementa.", True),
            ("Termina normalmente imprimiendo 0, 1, 2.", False),
            ("Lanza RecursionError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 79 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-079", "Suma de Números Pares con range", "Bucles y range", "Filtro con range step", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`range(2, 11, 2)` produce los pares: 2, 4, 6, 8, 10. Suma: 2 + 4 + 6 + 8 + 10 = 30.",
        ["range()", "suma de pares"], ["pcep-2.2", "nivel-2"],
        code_snippet="suma = 0\nfor n in range(2, 11, 2):\n    suma += n\nprint(suma)",
        expected_output="30"
    ))

    # 80 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-080", "Conversión de range a Lista con list()", "Bucles y range", "list(range())", "2.2", "basic_plus", "output_prediction",
        "¿Cuál es la longitud de la lista creada por `list(range(5, 15, 3))`?",
        "Valores generados: 5, 8, 11, 14. Son exactamente 4 elementos.",
        ["len", "list(range())"], ["pcep-2.2", "nivel-2"],
        code_snippet="lst = list(range(5, 15, 3))\nprint(len(lst))",
        expected_output="4"
    ))

    # 81 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-081", "Bucle while con Múltiples Banderas Lógicas", "Bucles y range", "while con Banderas", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "Iteración 1: a=1, b=5. a+=1 (2), b-=1 (4). Imprime 2:4.\nIteración 2: a=2, b=4. a+=1 (3), b-=1 (3). Imprime 3:3.\nCondición `a < b` (3 < 3) se vuelve False -> termina.",
        ["while", "múltiples variables"], ["pcep-2.2", "nivel-3"],
        code_snippet="a, b = 1, 5\nwhile a < b and b > 0:\n    a += 1\n    b -= 1\n    print(f'{a}:{b}')",
        expected_output="2:4\n3:3"
    ))

    # 82 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-082", "else en while que Nunca Itera", "Bucles y range", "else en while Falso Inicial", "2.2", "intermediate", "output_prediction",
        "¿Qué salida produce un while cuya condición es False desde el inicio con cláusula else?",
        "Si la condición es False desde el inicio, el cuerpo no itera pero la cláusula `else` SÍ SE EJECUTA, porque el bucle no fue interrumpido por break.",
        ["while-else", "ejecución de else"], ["pcep-2.2", "nivel-3"],
        code_snippet="x = 10\nwhile x < 5:\n    print('Dentro')\nelse:\n    print('Rama else')",
        expected_output="Rama else"
    ))

    # 83 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-083", "else en for con range Vacío", "Bucles y range", "else con range vacío", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Un for con rango vacío termina normalmente (sin break), por lo que ejecuta inmediatamente su bloque `else`.",
        ["for-else", "range vacío"], ["pcep-2.2", "nivel-3"],
        code_snippet="for x in range(0):\n    print('Elemento')\nelse:\n    print('Fin de rango')",
        expected_output="Fin de rango"
    ))

    # 84 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-084", "Bucles Anidados con continue en el Bucle Exterior", "Bucles y range", "continue en exterior", "2.2", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `contador`?",
        "Para i = 0: entra al bucle interior, suma 1 (j=0), suma 1 (j=1) -> total 2.\nPara i = 1: se ejecuta `continue` en el bucle exterior, saltando completamente el bucle interior.\nTotal final = 2.",
        ["bucles anidados", "continue exterior"], ["pcep-2.2", "nivel-3"],
        code_snippet="contador = 0\nfor i in range(2):\n    if i == 1:\n        continue\n    for j in range(2):\n        contador += 1\nprint(contador)",
        expected_output="2"
    ))

    # 85 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-085", "Matriz de Asteriscos con Bucles Anidados", "Bucles y range", "Patrón con bucles anidados", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Bucle exterior corre 2 veces (fila 0 y 1). En cada fila imprime 3 asteriscos continuos y luego un salto de línea: ***\\n***.",
        ["bucles anidados", "patrón visual", "end="], ["pcep-2.2", "nivel-3"],
        code_snippet="for fila in range(2):\n    for col in range(3):\n        print('*', end='')\n    print()",
        expected_output="***\n***"
    ))

    # 86 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-086", "Bucle while True con break Condicional", "Bucles y range", "while True idiomático", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "n = 1: imprime 1, n = 2.\nn = 2: imprime 2, n = 3.\nn = 3: imprime 3, n = 4.\nn = 4: cumple n > 3 y ejecuta `break`.",
        ["while True", "break"], ["pcep-2.2", "nivel-3"],
        code_snippet="n = 1\nwhile True:\n    print(n)\n    n += 1\n    if n > 3:\n        break",
        expected_output="1\n2\n3"
    ))

    # 87 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-087", "Operador in con range", "Bucles y range", "in con range()", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida por `print(4 in range(0, 10, 2))`?",
        "range(0, 10, 2) genera 0, 2, 4, 6, 8. Como 4 es uno de los múltiplos generados, retorna True.",
        ["in", "range()", "comprobación de pertenencia"], ["pcep-2.2", "nivel-3"],
        code_snippet="print(4 in range(0, 10, 2))",
        expected_output="True"
    ))

    # 88 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-088", "Operador in con Elemento Omitido por el Step", "Bucles y range", "in con range y step", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida por `print(5 in range(0, 10, 2))`?",
        "range(0, 10, 2) solo contiene números pares (0, 2, 4, 6, 8). 5 está en el intervalo numérico pero no coincide con la progresión del step; retorna False.",
        ["in", "range()", "False"], ["pcep-2.2", "nivel-3"],
        code_snippet="print(5 in range(0, 10, 2))",
        expected_output="False"
    ))

    # 89 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-089", "Comprobación de Igualdad entre Dos Objetos range", "Bucles y range", "Igualdad de range", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de evaluar `range(0) == range(2, 2)` en Python?",
        "Ambos objetos range producen exactamente la misma secuencia de números (ninguno, están vacíos). En Python 3, dos rangos que representan la misma secuencia son iguales: True.",
        ["range()", "igualdad de rangos", "=="], ["pcep-2.2", "nivel-3"],
        code_snippet="print(range(0) == range(2, 2))",
        expected_output="True"
    ))

    # 90 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-090", "Simulación de Enumerate Manual", "Bucles y range", "Indexación en bucle", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "len(frutas) es 2. Para i = 0 imprime '0:manzana', para i = 1 imprime '1:pera'.",
        ["range(len())", "indexación"], ["pcep-2.2", "nivel-3"],
        code_snippet="frutas = ['manzana', 'pera']\nfor i in range(len(frutas)):\n    print(f'{i}:{frutas[i]}')",
        expected_output="0:manzana\n1:pera"
    ))

    # 91 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-091", "Bucles Anidados con Multiplicación de Coordenadas", "Bucles y range", "Suma de Coordenadas", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida?",
        "i=1: j=1 (1*1=1), j=2 (1*2=2). Suma parcial = 3.\ni=2: j=1 (2*1=2), j=2 (2*2=4). Suma parcial = 6.\nTotal acumulado = 3 + 6 = 9.",
        ["bucles anidados", "acumulación"], ["pcep-2.2", "nivel-3"],
        code_snippet="total = 0\nfor i in range(1, 3):\n    for j in range(1, 3):\n        total += i * j\nprint(total)",
        expected_output="9"
    ))

    # 92 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-092", "Bucle for Modificando Lista que Itera", "Bucles y range", "Mutación durante iteración", "2.2", "intermediate", "code_analysis",
        "¿Qué ocurre si se eliminan elementos de una lista mientras se itera con `for x in lista:`?",
        "Modificar el tamaño de una lista mientras se itera sobre ella altera los índices internos del iterador, provocando que se salten elementos. Es una clásica mala práctica.",
        ["mutación de lista", "mala práctica", "iterador"], ["análisis", "pcep-2.2", "nivel-3"],
        code_snippet="nums = [1, 2, 3, 4]\nfor n in nums:\n    if n == 2:\n        nums.remove(n)\nprint(nums)",
        options=[
            ("Elimina el 2 e imprime [1, 3, 4].", True),
            ("Lanza RuntimeError: list changed size during iteration.", False),
            ("Elimina todos los elementos.", False),
            ("Lanza IndexError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 93 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-093", "Iteración Segura sobre Copia de Lista", "Bucles y range", "Iteración con slice [:]", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código que itera sobre `nums[:]`?",
        "Iterar sobre una copia superficial `nums[:]` evita saltos: se evalúa cada número original y se remueven los pares. Salida final: [1, 3].",
        ["nums[:]", "copia segura"], ["pcep-2.2", "nivel-3"],
        code_snippet="nums = [1, 2, 3, 4]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)",
        expected_output="[1, 3]"
    ))

    # 94 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-094", "while con Bucle y else que tiene break adentro", "Bucles y range", "break dentro de if en while", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "i = 0: no cumple i == 1, imprime 0, i pasa a 1.\ni = 1: cumple i == 1, ejecuta break. Al haber break, el else NO se ejecuta. Solo imprime 0.",
        ["while-else", "break"], ["pcep-2.2", "nivel-3"],
        code_snippet="i = 0\nwhile i < 3:\n    if i == 1:\n        break\n    print(i)\n    i += 1\nelse:\n    print('Fin')",
        expected_output="0"
    ))

    # 95 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-095", "range Indexable con Índice Negativo", "Bucles y range", "Indexación en range", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de `range(10, 20)[-1]`?",
        "Los objetos range son secuencias indexables. `range(10, 20)` termina en 19, por lo que el índice -1 devuelve 19.",
        ["range()", "índice negativo", "secuencia"], ["pcep-2.2", "nivel-3"],
        code_snippet="r = range(10, 20)\nprint(r[-1])",
        expected_output="19"
    ))

    # 96 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-096", "Slicing en Objeto range", "Bucles y range", "Slicing en range", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de evaluar `list(range(10)[2:6])`?",
        "El slice [2:6] sobre range(10) produce una nueva secuencia range con valores de 2 a 5: [2, 3, 4, 5].",
        ["range()", "slice"], ["pcep-2.2", "nivel-3"],
        code_snippet="print(list(range(10)[2:6]))",
        expected_output="[2, 3, 4, 5]"
    ))

    # 97 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-097", "Inversión de range con reversed()", "Bucles y range", "reversed()", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`reversed(range(3))` invierte la secuencia [0, 1, 2] generando: 2, 1, 0.",
        ["reversed()", "range"], ["pcep-2.2", "nivel-3"],
        code_snippet="for x in reversed(range(3)):\n    print(x)",
        expected_output="2\n1\n0"
    ))

    # 98 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-098", "Bucle con continue Saltando Imprimir y Acumular", "Bucles y range", "continue con acumulador", "2.2", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `s` al terminar este código?",
        "Para n = 1: s += 1 (s=1).\nPara n = 2: continue -> se salta.\nPara n = 3: s += 3 (s=4).\nPara n = 4: continue -> se salta.\nTotal final = 4.",
        ["continue", "acumulador condicional"], ["pcep-2.2", "nivel-3"],
        code_snippet="s = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        continue\n    s += n\nprint(s)",
        expected_output="4"
    ))

    # 99 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-099", "Triple Bucle Anidado", "Bucles y range", "Triple anidado", "2.2", "intermediate", "output_prediction",
        "¿Cuántas veces se ejecuta la instrucción `conteo += 1`?",
        "El bucle más externo se ejecuta 2 veces (range(2)). El intermedio se ejecuta 2 veces. El más interno se ejecuta 2 veces. Total de iteraciones: 2 * 2 * 2 = 8.",
        ["bucles anidados", "conteo de iteraciones"], ["pcep-2.2", "nivel-3"],
        code_snippet="conteo = 0\nfor i in range(2):\n    for j in range(2):\n        for k in range(2):\n            conteo += 1\nprint(conteo)",
        expected_output="8"
    ))

    # 100 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s2-100", "Bucle while con Decremento y Multiplicación Cruzada", "Bucles y range", "while complejo PCEP", "2.2", "intermediate", "output_prediction",
        "¿Cuál es la salida final tras ejecutar este código?",
        "Iteración 1: x=3, y=1. y = 1 * 3 = 3. x = 2.\nIteración 2: x=2, y=3. y = 3 * 2 = 6. x = 1.\nIteración 3: x=1, y=6. y = 6 * 1 = 6. x = 0.\nTermina (0 > 0 es False). Imprime: 6.",
        ["factorial manual", "while"], ["pcep-2.2", "nivel-3"],
        code_snippet="x = 3\ny = 1\nwhile x > 0:\n    y *= x\n    x -= 1\nprint(y)",
        expected_output="6"
    ))

    return exercises

if __name__ == "__main__":
    exs = build_all_section2()
    print(f"Total exercises generated for Section 2: {len(exs)}")
    
    ts_code = "import { Exercise } from '../../types';\n\n"
    ts_code += "export const SECTION_2_EXERCISES: Exercise[] = "
    ts_code += json.dumps(exs, ensure_ascii=False, indent=2)
    ts_code += ";\n"
    
    with open("src/data/exercises/section2.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)
    print("Successfully wrote src/data/exercises/section2.ts!")

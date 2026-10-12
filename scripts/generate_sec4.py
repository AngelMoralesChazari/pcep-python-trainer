#!/usr/bin/env python3
import json

SEC4_TITLE = "Sección 4 — Funciones y Manejo de Excepciones"

def make_ex(eid, title, topic, subtopic, obj, diff, etype, stmt, explanation, concepts, tags,
            code_snippet=None, starter_code=None, options=None, expected_output=None, acceptable=None):
    ex = {
        "id": eid,
        "title": title,
        "section": 4,
        "sectionTitle": SEC4_TITLE,
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

def build_all_section4():
    exercises = []

    # =========================================================================
    # OBJETIVO 4.1: Definición y Llamada de Funciones, return (001 - 025)
    # =========================================================================

    # 1 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-001", "Definición y Llamada Simple de Función", "Funciones", "Definición y Llamada", "4.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "La función `saludar()` se invoca e imprime '¡Hola, Mundo!'.",
        ["def", "invocación"], ["pcep-4.1", "nivel-1"],
        code_snippet="def saludar():\n    print('¡Hola, Mundo!')\n\nsaludar()",
        expected_output="¡Hola, Mundo!"
    ))

    # 2 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-002", "Instrucción return con Valor", "Funciones", "Instrucción return", "4.1", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La función retorna `3 + 5 = 8`, que luego se imprime con `print()`.",
        ["return", "valor de retorno"], ["pcep-4.1", "nivel-1"],
        code_snippet="def sumar(a, b):\n    return a + b\n\nprint(sumar(3, 5))",
        expected_output="8"
    ))

    # 3 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-003", "Retorno Implícito de None", "Funciones", "Retorno Implícito None", "4.1", "basic", "output_prediction",
        "¿Cuál es el valor retornado por una función en Python que no incluye una instrucción `return`?",
        "Si una función termina sin encontrar una sentencia `return` explícita, devuelve implícitamente el valor especial `None`.",
        ["None", "retorno por defecto"], ["pcep-4.1", "nivel-1"],
        code_snippet="def accion():\n    pass\n\nresultado = accion()\nprint(resultado)",
        expected_output="None"
    ))

    # 4 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-004", "Instrucción return Vacía (return sin expresión)", "Funciones", "return vacío", "4.1", "basic", "output_prediction",
        "¿Cuál es el valor retornado por `return` sin ningún operando?",
        "Una instrucción `return` sin expresión devuelve explícitamente `None` y finaliza la ejecución de la función de inmediato.",
        ["return", "None"], ["pcep-4.1", "nivel-1"],
        code_snippet="def f():\n    return\n\nprint(f())",
        expected_output="None"
    ))

    # 5 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-005", "Código Inalcanzable tras return", "Funciones", "Código Muerto", "4.1", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La instrucción `return 10` finaliza la ejecución de la función. La línea `print('Paso 2')` nunca se ejecuta.",
        ["return", "flujo de terminación"], ["pcep-4.1", "nivel-1"],
        code_snippet="def prueba():\n    return 10\n    print('Paso 2')\n\nprint(prueba())",
        expected_output="10"
    ))

    # 6 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-006", "Paso de Argumentos Posicionales", "Funciones", "Argumentos Posicionales", "4.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Los argumentos se asignan por orden de posición: `a = 10`, `b = 2`. 10 - 2 = 8.",
        ["argumentos posicionales"], ["pcep-4.1", "nivel-1"],
        code_snippet="def restar(a, b):\n    return a - b\n\nprint(restar(10, 2))",
        expected_output="8"
    ))

    # 7 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-007", "Argumentos por Palabra Clave (Keyword Arguments)", "Funciones", "Keyword Arguments", "4.1", "basic", "output_prediction",
        "¿Cuál es la salida producida por este código?",
        "Al usar argumentos con nombre (`b=10, a=2`), el orden no importa: `a = 2` y `b = 10`. 2 - 10 = -8.",
        ["keyword arguments", "orden"], ["pcep-4.1", "nivel-1"],
        code_snippet="def restar(a, b):\n    return a - b\n\nprint(restar(b=10, a=2))",
        expected_output="-8"
    ))

    # 8 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-008", "Argumento Faltante en Llamada (TypeError)", "Funciones", "TypeError en Llamada", "4.1", "basic", "code_analysis",
        "¿Qué ocurre si invocamos `sumar(5)` en una función definida como `def sumar(a, b):`?",
        "Si faltan argumentos obligatorios requeridos sin valor por defecto, Python lanza `TypeError: sumar() missing 1 required positional argument: 'b'`.",
        ["TypeError", "argumentos faltantes"], ["análisis", "pcep-4.1", "nivel-1"],
        code_snippet="def sumar(a, b):\n    return a + b\n\nsumar(5)",
        options=[
            ("Retorna 5 asumiendo b = 0.", False),
            ("Lanza TypeError: missing 1 required positional argument.", True),
            ("Retorna None.", False),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 9 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-009", "Argumento Posicional Tras Argumento con Nombre (SyntaxError)", "Funciones", "Regla de Argumentos", "4.1", "basic_plus", "code_analysis",
        "¿Qué ocurre con la llamada `calcular(a=1, 2)`?",
        "En la sintaxis de Python, los argumentos posicionales NUNCA pueden colocarse después de un argumento con nombre. Lanza `SyntaxError: positional argument follows keyword argument`.",
        ["SyntaxError", "keyword argument antes de posicional"], ["análisis", "pcep-4.1", "nivel-2"],
        code_snippet="def calcular(a, b):\n    return a + b\n\ncalcular(a=1, 2)",
        options=[
            ("Se ejecuta retornando 3.", False),
            ("Lanza SyntaxError: positional argument follows keyword argument.", True),
            ("Lanza TypeError.", False),
            ("Retorna None.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 10 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-010", "Mezcla Válida de Argumentos Posicionales y con Nombre", "Funciones", "Posicional seguido de Keyword", "4.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `calcular(10, b=5)` si `def calcular(a, b): return a * b`?",
        "Es perfectamente válido que los argumentos posicionales vayan primero y los argumentos con nombre después: 10 * 5 = 50.",
        ["argumentos válidos", "posicional + keyword"], ["pcep-4.1", "nivel-2"],
        code_snippet="def calcular(a, b):\n    return a * b\n\nprint(calcular(10, b=5))",
        expected_output="50"
    ))

    # 11 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-011", "Asignación Duplicada de Argumento (TypeError)", "Funciones", "Argumento Duplicado", "4.1", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `calcular(5, a=10)`?",
        "El parámetro 'a' ya recibió el valor 5 por posición. Al intentar pasarle `a=10` con nombre, Python lanza `TypeError: calcular() got multiple values for argument 'a'`.",
        ["TypeError", "múltiples valores para argumento"], ["análisis", "pcep-4.1", "nivel-2"],
        code_snippet="def calcular(a, b=2):\n    return a + b\n\ncalcular(5, a=10)",
        options=[
            ("Retorna 12 sobrescribiendo a con 10.", False),
            ("Lanza TypeError: got multiple values for argument 'a'.", True),
            ("Lanza SyntaxError.", False),
            ("Retorna 7 ignorando el segundo a.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 12 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-012", "Retorno Múltiple de Valores (Empaquetado en Tupla)", "Funciones", "Retorno Múltiple", "4.1", "basic_plus", "output_prediction",
        "¿Cuál es el tipo de dato del valor retornado por `return a, b`?",
        "Cuando una función retorna múltiples expresiones separadas por comas (`return a, b`), Python las empaqueta automáticamente en una tupla.",
        ["retorno de tupla", "type"], ["pcep-4.1", "nivel-2"],
        code_snippet="def coord():\n    return 10, 20\n\nres = coord()\nprint(type(res).__name__)",
        expected_output="tuple"
    ))

    # 13 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-013", "Desempaquetado Directo del Retorno de una Función", "Funciones", "Unpacking de Retorno", "4.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Los dos valores devueltos en la tupla (10, 20) se desempaquetan directamente en x e y: 10 + 20 = 30.",
        ["desempaquetado de retorno"], ["pcep-4.1", "nivel-2"],
        code_snippet="def minimos():\n    return 10, 20\n\nx, y = minimos()\nprint(x + y)",
        expected_output="30"
    ))

    # 14 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-014", "Función como Argumento de Otra Función (Higher Order)", "Funciones", "Funciones como Objetos", "4.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Las funciones son objetos de primera clase. `aplicar(duplicar, 5)` invoca `duplicar(5)` produciendo 10.",
        ["funciones como objetos"], ["pcep-4.1", "nivel-2"],
        code_snippet="def duplicar(n):\n    return n * 2\n\ndef aplicar(f, val):\n    return f(val)\n\nprint(aplicar(duplicar, 5))",
        expected_output="10"
    ))

    # 15 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-015", "Función que Modifica una Lista Pasada como Argumento", "Funciones", "Paso por Referencia de Objetos Mutables", "4.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Los objetos mutables (como listas) se pasan por referencia del objeto. `lst.append(99)` muta la lista original fuera de la función.",
        ["paso de listas", "mutabilidad"], ["pcep-4.1", "nivel-2"],
        code_snippet="def agregar(lista):\n    lista.append(99)\n\nmi_lista = [1, 2]\nagregar(mi_lista)\nprint(mi_lista)",
        expected_output="[1, 2, 99]"
    ))

    # 16 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-016", "Reasignación de la Variable Parámetro vs Modificación in-place", "Funciones", "Reasignación de Referencia Local", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Reasignar `lista = [99]` dentro de la función solo cambia el puntero de la variable local `lista`; NO altera la lista externa original.",
        ["reasignación de parámetro", "ámbito local"], ["pcep-4.1", "nivel-3"],
        code_snippet="def reiniciar(lista):\n    lista = [99]\n\nnums = [1, 2, 3]\nreiniciar(nums)\nprint(nums)",
        expected_output="[1, 2, 3]"
    ))

    # 17 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-017", "Recursión Básica: Factorial", "Funciones", "Recursión", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `factorial(3)`?",
        "3 * factorial(2) = 3 * (2 * factorial(1)) = 3 * 2 * 1 = 6.",
        ["recursión", "caso base"], ["pcep-4.1", "nivel-3"],
        code_snippet="def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(3))",
        expected_output="6"
    ))

    # 18 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-018", "Recursión: Conteo Regresivo Acumulado", "Funciones", "Recursión Acumulativa", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de `suma_hasta(3)`?",
        "3 + suma_hasta(2) -> 3 + 2 + suma_hasta(1) -> 3 + 2 + 1 = 6.",
        ["recursión"], ["pcep-4.1", "nivel-3"],
        code_snippet="def suma_hasta(n):\n    if n == 1:\n        return 1\n    return n + suma_hasta(n - 1)\n\nprint(suma_hasta(3))",
        expected_output="6"
    ))

    # 19 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-019", "Recursión Infinita sin Caso Base (RecursionError)", "Funciones", "RecursionError", "4.1", "intermediate", "code_analysis",
        "¿Qué excepción produce una función recursiva que se llama infinitamente sin alcanzar un caso base?",
        "Superar el límite de profundidad de la pila de llamadas de Python lanza `RecursionError: maximum recursion depth exceeded`.",
        ["RecursionError", "límite de pila"], ["análisis", "pcep-4.1", "nivel-3"],
        code_snippet="def bucle():\n    return bucle()\n\nbucle()",
        options=[
            ("MemoryError.", False),
            ("RecursionError: maximum recursion depth exceeded.", True),
            ("RuntimeWarning.", False),
            ("StackOverflowError (nombre de Java).", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 20 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-020", "Función Anidada Invocada Internamente", "Funciones", "Funciones Anidadas", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`externa()` define `interna()`, la invoca con argumento 5 y le suma 2: 5 * 2 + 2 = 12.",
        ["funciones anidadas"], ["pcep-4.1", "nivel-3"],
        code_snippet="def externa(x):\n    def interna(y):\n        return y * 2\n    return interna(x) + 2\n\nprint(externa(5))",
        expected_output="12"
    ))

    # 21 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-021", "Invocación de Función Anidada Fuera de su Ámbito", "Funciones", "NameError en Función Anidada", "4.1", "intermediate", "code_analysis",
        "¿Qué ocurre si intentamos invocar `interna()` desde fuera de `externa()`?",
        "`interna` es una variable local al cuerpo de `externa`. Desde el ámbito global no existe, produciendo `NameError: name 'interna' is not defined`.",
        ["NameError", "ámbito local"], ["análisis", "pcep-4.1", "nivel-3"],
        code_snippet="def externa():\n    def interna():\n        return 1\n\ninterna()",
        options=[
            ("Retorna 1.", False),
            ("Lanza NameError: name 'interna' is not defined.", True),
            ("Lanza AttributeError.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 22 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-022", "Docstring de Función accesible vía __doc__", "Funciones", "Docstrings", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "El literal de cadena inicial en el cuerpo de una función se almacena en el atributo especial `__doc__`.",
        ["__doc__", "docstring"], ["pcep-4.1", "nivel-3"],
        code_snippet="def suma(a, b):\n    '''Suma dos numeros'''\n    return a + b\n\nprint(suma.__doc__)",
        expected_output="Suma dos numeros"
    ))

    # 23 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-023", "Asignación de Función a Variable", "Funciones", "Alias de Función", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`f = cuadrado` crea un alias a la misma función. `f(4)` ejecuta `cuadrado(4)`: 16.",
        ["alias de función", "first class citizen"], ["pcep-4.1", "nivel-3"],
        code_snippet="def cuadrado(x):\n    return x * x\n\nf = cuadrado\nprint(f(4))",
        expected_output="16"
    ))

    # 24 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-024", "Función Lambda Básica", "Funciones", "Expresiones Lambda", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La función anónima lambda recibe `x` y devuelve `x + 10`. 5 + 10 = 15.",
        ["lambda", "función anónima"], ["pcep-4.1", "nivel-3"],
        code_snippet="sumar_diez = lambda x: x + 10\nprint(sumar_diez(5))",
        expected_output="15"
    ))

    # 25 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-025", "None Evaluado en Expresión Booleana", "Funciones", "None en if", "4.1", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La función `vacia()` no retorna nada (devuelve `None`). `None` es falsy, por lo que entra a la rama else.",
        ["None falsy", "retorno en if"], ["pcep-4.1", "nivel-3"],
        code_snippet="def vacia():\n    pass\n\nif vacia():\n    print('Verdadero')\nelse:\n    print('Falso')",
        expected_output="Falso"
    ))

    # =========================================================================
    # OBJETIVO 4.2: Parámetros por Defecto y Ámbito (Scope) (026 - 050)
    # =========================================================================

    # 26 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-026", "Parámetro con Valor por Defecto", "Parámetros y Scope", "Valores por Defecto", "4.2", "basic", "output_prediction",
        "¿Cuál es la salida al invocar la función sin argumentos?",
        "Al no suministrar argumento, se utiliza el valor por defecto `'Mundo'`: 'Hola Mundo'.",
        ["parámetros por defecto"], ["pcep-4.2", "nivel-1"],
        code_snippet="def saludar(nombre='Mundo'):\n    return f'Hola {nombre}'\n\nprint(saludar())",
        expected_output="Hola Mundo"
    ))

    # 27 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-027", "Sobrescritura de Valor por Defecto", "Parámetros y Scope", "Sobrescritura de Default", "4.2", "basic", "output_prediction",
        "¿Cuál es la salida al pasar un argumento explícito?",
        "El argumento explícito `'Ana'` reemplaza el valor por defecto: 'Hola Ana'.",
        ["parámetros por defecto"], ["pcep-4.2", "nivel-1"],
        code_snippet="def saludar(nombre='Mundo'):\n    return f'Hola {nombre}'\n\nprint(saludar('Ana'))",
        expected_output="Hola Ana"
    ))

    # 28 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-028", "Lectura de Variable Global dentro de Función", "Parámetros y Scope", "Lectura de Global", "4.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Una función puede LEER variables del ámbito global directamente sin necesidad de usar `global`: 100.",
        ["ámbito global", "lectura"], ["pcep-4.2", "nivel-1"],
        code_snippet="x = 100\ndef leer():\n    return x\n\nprint(leer())",
        expected_output="100"
    ))

    # 29 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-029", "Sombreado de Variable Global (Shadowing)", "Parámetros y Scope", "Shadowing", "4.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`x = 20` dentro de la función crea una variable LOCAL que oculta la global. La global exterior `x` no cambia y sigue valiendo 10.",
        ["shadowing", "variable local"], ["pcep-4.2", "nivel-1"],
        code_snippet="x = 10\ndef alterar():\n    x = 20\n\nalterar()\nprint(x)",
        expected_output="10"
    ))

    # 30 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-030", "Parámetro sin Valor por Defecto Tras Parámetro con Defecto", "Parámetros y Scope", "SyntaxError en Definición", "4.2", "basic", "code_analysis",
        "¿Qué ocurre al intentar definir `def func(a=1, b):`?",
        "En la definición de funciones, todos los parámetros sin valor por defecto deben colocarse ANTES de cualquier parámetro con valor por defecto. Lanza `SyntaxError: non-default argument follows default argument`.",
        ["SyntaxError", "non-default argument follows default"], ["análisis", "pcep-4.2", "nivel-1"],
        code_snippet="def func(a=1, b):\n    return a + b",
        options=[
            ("Se define con éxito.", False),
            ("Lanza SyntaxError: non-default argument follows default argument.", True),
            ("Lanza TypeError.", False),
            ("Convierte b en parámetro opcional.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 31 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-031", "Palabra Clave global para Modificar Variable Externa", "Parámetros y Scope", "Palabra Clave global", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es el valor final de `contador` al finalizar este código?",
        "La instrucción `global contador` indica que las asignaciones dentro de la función deben modificar la variable del ámbito global. `contador` pasa a ser 1.",
        ["global", "modificación global"], ["pcep-4.2", "nivel-2"],
        code_snippet="contador = 0\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador)",
        expected_output="1"
    ))

    # 32 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-032", "Modificar Variable Global sin Declararla global (UnboundLocalError)", "Parámetros y Scope", "UnboundLocalError", "4.2", "basic_plus", "code_analysis",
        "¿Qué error produce el siguiente código?\n\n```python\nx = 10\ndef sumar():\n    x += 1\n\nsumar()\n```",
        "Python detecta la asignación `x = ...` y clasifica a `x` como variable local. Al intentar leerla para sumarle 1 antes de haberla asignado localmente, lanza `UnboundLocalError: cannot access local variable 'x' where it is not associated with a value`.",
        ["UnboundLocalError", "asignación local sin global"], ["análisis", "pcep-4.2", "nivel-2"],
        code_snippet="x = 10\ndef sumar():\n    x += 1\n\nsumar()",
        options=[
            ("Incrementa x a 11 con éxito.", False),
            ("Lanza UnboundLocalError: cannot access local variable 'x'.", True),
            ("Lanza NameError.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 33 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-033", "Trampa del Argumento Mutable por Defecto (lista=[])", "Parámetros y Scope", "Default Argument Mutable", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de la segunda llamada `agregar(2)` si el valor por defecto es una lista mutable?",
        "Las expresiones de argumentos por defecto se evalúan UNA SOLA VEZ cuando se define la función. La misma lista se reutiliza entre llamadas: primera llamada deja `[1]`, segunda llamada deja `[1, 2]`.",
        ["argumento mutable por defecto", "trampa clásica PCEP"], ["pcep-4.2", "nivel-2"],
        code_snippet="def agregar(item, lista=[]):\n    lista.append(item)\n    return lista\n\nagregar(1)\nprint(agregar(2))",
        expected_output="[1, 2]"
    ))

    # 34 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-034", "Patrón Seguro para Argumento Mutable (default=None)", "Parámetros y Scope", "Patrón None idiomático", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `agregar_seguro(2)` con el patrón seguro `lista=None`?",
        "Al usar `lista=None`, en cada invocación que no pase lista se crea una NUEVA lista vacía independiente `[]`. Solo contiene `[2]`.",
        ["default None", "lista independiente"], ["pcep-4.2", "nivel-2"],
        code_snippet="def agregar_seguro(item, lista=None):\n    if lista is None:\n        lista = []\n    lista.append(item)\n    return lista\n\nagregar_seguro(1)\nprint(agregar_seguro(2))",
        expected_output="[2]"
    ))

    # 35 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-035", "Múltiples Parámetros con Valores por Defecto", "Parámetros y Scope", "Múltiples Defaults", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `crear_caja(ancho=10)`?",
        "`ancho = 10`, `alto` usa su default (5), `fondo` usa su default (2). 10 * 5 * 2 = 100.",
        ["defaults combinados"], ["pcep-4.2", "nivel-2"],
        code_snippet="def crear_caja(ancho=1, alto=5, fondo=2):\n    return ancho * alto * fondo\n\nprint(crear_caja(ancho=10))",
        expected_output="100"
    ))

    # 36 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-036", "Regla LEGB: Local vs Enclosing vs Global vs Built-in", "Parámetros y Scope", "Regla LEGB", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código que evalúa resolución de nombres LEGB?",
        "Dentro de `interior()`, la variable local `x = 'local'` tiene la más alta prioridad, ocultando a la envolvente ('enclosing') y a la global.",
        ["LEGB", "prioridad local"], ["pcep-4.2", "nivel-2"],
        code_snippet="x = 'global'\ndef exterior():\n    x = 'enclosing'\n    def interior():\n        x = 'local'\n        return x\n    return interior()\n\nprint(exterior())",
        expected_output="local"
    ))

    # 37 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-037", "Ámbito Enclosing Consultado por Falta de Local", "Parámetros y Scope", "Ámbito Enclosing", "4.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida si `interior()` no define `x`?",
        "Al no encontrar `x` en su ámbito local, Python busca en el ámbito envolvente más cercano (`exterior`), donde vale 'enclosing'.",
        ["LEGB", "enclosing"], ["pcep-4.2", "nivel-2"],
        code_snippet="x = 'global'\ndef exterior():\n    x = 'enclosing'\n    def interior():\n        return x\n    return interior()\n\nprint(exterior())",
        expected_output="enclosing"
    ))

    # 38 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-038", "Palabra Clave nonlocal Modificando Ámbito Enclosing", "Parámetros y Scope", "nonlocal", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código usando `nonlocal`?",
        "`nonlocal x` enlaza la variable `x` de `exterior()`. Al hacer `x = 20`, se modifica esa variable envolvente. `exterior()` retorna 20.",
        ["nonlocal", "enclosing mutable"], ["pcep-4.2", "nivel-3"],
        code_snippet="def exterior():\n    x = 10\n    def interior():\n        nonlocal x\n        x = 20\n    interior()\n    return x\n\nprint(exterior())",
        expected_output="20"
    ))

    # 39 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-039", "nonlocal Usado a Nivel Global (SyntaxError)", "Parámetros y Scope", "SyntaxError en nonlocal", "4.2", "intermediate", "code_analysis",
        "¿Qué ocurre si usamos `nonlocal x` directamente en el nivel de módulo (global)?",
        "`nonlocal` exige que la variable exista en un ámbito de función envolvente externo. Si no hay función envolvente (por ejemplo, a nivel de módulo), lanza `SyntaxError: nonlocal binding not found`.",
        ["SyntaxError", "nonlocal a nivel global"], ["análisis", "pcep-4.2", "nivel-3"],
        code_snippet="x = 10\nnonlocal x",
        options=[
            ("Convierte x en variable de solo lectura.", False),
            ("Lanza SyntaxError: no binding for nonlocal 'x' found.", True),
            ("Lanza NameError.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 40 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-040", "Evaluación de Expresión en Default en Momento de Definición", "Parámetros y Scope", "Evaluación Temprana de Defaults", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El valor por defecto `b = valor` se evalúa y congela en 5 en el momento en que se procesa `def sumar(...)`. El cambio posterior a `valor = 100` no afecta el default ya compilado: 2 + 5 = 7.",
        ["evaluación de defaults", "congelación de parámetros"], ["pcep-4.2", "nivel-3"],
        code_snippet="valor = 5\ndef sumar(a, b=valor):\n    return a + b\n\nvalor = 100\nprint(sumar(2))",
        expected_output="7"
    ))

    # 41 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-041", "Parámetro que Recibe y Modifica Diccionario", "Parámetros y Scope", "Diccionario Mutable en Función", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "El diccionario se pasa por referencia. Asignar `config['debug'] = True` dentro de la función muta el diccionario externo original.",
        ["diccionarios mutables", "scope"], ["pcep-4.2", "nivel-3"],
        code_snippet="def activar(config):\n    config['debug'] = True\n\najustes = {'debug': False}\nactivar(ajustes)\nprint(ajustes['debug'])",
        expected_output="True"
    ))

    # 42 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-042", "Creación de Variable Global desde Función Vacía Previa", "Parámetros y Scope", "Creación con global", "4.2", "intermediate", "output_prediction",
        "¿Se puede crear una NUEVA variable global desde dentro de una función usando `global`?",
        "Sí. Si la variable no existía previamente a nivel global, declarar `global nueva` y asignarle un valor la crea en el espacio de nombres global.",
        ["global", "creación dinámica"], ["pcep-4.2", "nivel-3"],
        code_snippet="def crear():\n    global nueva_var\n    nueva_var = 42\n\ncrear()\nprint(nueva_var)",
        expected_output="42"
    ))

    # 43 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-043", "Función con Clausura (Closure)", "Parámetros y Scope", "Clausuras / Closures", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código con clausura?",
        "`crear_multiplicador(3)` retorna una función que recuerda `factor = 3`. Al invocar `triple(10)`, calcula 10 * 3 = 30.",
        ["closures", "clausuras"], ["pcep-4.2", "nivel-3"],
        code_snippet="def crear_multiplicador(factor):\n    def multiplicar(x):\n        return x * factor\n    return multiplicar\n\ntriple = crear_multiplicador(3)\nprint(triple(10))",
        expected_output="30"
    ))

    # 44 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-044", "global y nonlocal en Funciones de Tres Niveles", "Parámetros y Scope", "Scope Multinevel", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`nonlocal` salta al ámbito de `nivel1` donde `x = 100`. Al salir, `nivel1()` retorna 100. La variable global `x = 1` no se altera.",
        ["nonlocal multinivel"], ["pcep-4.2", "nivel-3"],
        code_snippet="x = 1\ndef nivel1():\n    x = 10\n    def nivel2():\n        nonlocal x\n        x = 100\n    nivel2()\n    return x\n\nprint(nivel1(), x)",
        expected_output="100 1"
    ))

    # 45 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-045", "Sombreado de Built-in con Variable Local", "Parámetros y Scope", "Shadowing de Built-in", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Dentro de `calcular()`, `max = 50` sombrea la función built-in `max`. Devuelve 50. Fuera de la función, el built-in `max` sigue intacto: `max(1, 2) = 2`.",
        ["shadowing de built-ins"], ["pcep-4.2", "nivel-3"],
        code_snippet="def calcular():\n    max = 50\n    return max\n\nprint(calcular(), max(1, 2))",
        expected_output="50 2"
    ))

    # 46 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-046", "Parámetro que Comparte Nombre con Variable Global", "Parámetros y Scope", "Parámetro vs Global", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida producida por este código?",
        "El parámetro `x` es local a la función. Modificar `x += 5` no tiene ningún impacto en la variable global `x = 10`. Al imprimirla fuera, vale 10.",
        ["parámetro local", "independencia"], ["pcep-4.2", "nivel-3"],
        code_snippet="x = 10\ndef alterar(x):\n    x += 5\n    return x\n\nalterar(x)\nprint(x)",
        expected_output="10"
    ))

    # 47 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-047", "Variable Local Declarada después de ser Leída en Función", "Parámetros y Scope", "Trampa de Local Tardía", "4.2", "intermediate", "code_analysis",
        "¿Qué ocurre si una función lee `x` en la línea 1 y luego asigna `x = 5` en la línea 2?",
        "Debido a que el analizador léxico ve una asignación a `x` en cualquier parte de la función, la etiqueta como LOCAL para toda la función. Leerla antes de la asignación lanza `UnboundLocalError`.",
        ["UnboundLocalError", "análisis estático de scope"], ["análisis", "pcep-4.2", "nivel-3"],
        code_snippet="x = 10\ndef f():\n    print(x)\n    x = 5\n\nf()",
        options=[
            ("Imprime 10 y luego asigna x = 5.", False),
            ("Lanza UnboundLocalError: cannot access local variable 'x' where it is not associated with a value.", True),
            ("Lanza NameError.", False),
            ("Imprime 5.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 48 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-048", "Tupla como Argumento por Defecto Inmutable", "Parámetros y Scope", "Tupla como Default Seguro", "4.2", "intermediate", "output_prediction",
        "¿Es seguro utilizar tuplas como valores por defecto en lugar de listas?",
        "Sí. Dado que las tuplas son inmutables, no sufren del problema de acumulación de efectos secundarios de las listas mutables.",
        ["tuplas como defaults", "inmutabilidad segura"], ["pcep-4.2", "nivel-3"],
        code_snippet="def f(datos=(1, 2)):\n    return len(datos)\n\nprint(f(), f())",
        expected_output="2 2"
    ))

    # 49 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-049", "Diccionario por Defecto Reutilizado", "Parámetros y Scope", "Dict como Default Mutable", "4.2", "intermediate", "output_prediction",
        "¿Cuál es la salida al invocar dos veces la función con diccionario mutable por defecto?",
        "Al igual que las listas, un diccionario por defecto `{}` se comparte entre invocaciones. En la primera llamada añade `a=1`, en la segunda añade `b=2`. Longitud final = 2.",
        ["dict por defecto mutable"], ["pcep-4.2", "nivel-3"],
        code_snippet="def registrar(k, v, d={}):\n    d[k] = v\n    return len(d)\n\nregistrar('a', 1)\nprint(registrar('b', 2))",
        expected_output="2"
    ))

    # 50 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-050", "Modificación de Global dentro de Bucle en Función", "Parámetros y Scope", "global con Acumulador en for", "4.2", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `total` al terminar este código?",
        "La función acumula los valores de `range(1, 4)` (1, 2, 3) sobre la variable global `total = 0`: 0 + 1 + 2 + 3 = 6.",
        ["global", "acumulador"], ["pcep-4.2", "nivel-3"],
        code_snippet="total = 0\ndef acumular():\n    global total\n    for i in range(1, 4):\n        total += i\n\nacumular()\nprint(total)",
        expected_output="6"
    ))

    # =========================================================================
    # OBJETIVO 4.3: Jerarquía de Excepciones (051 - 075)
    # =========================================================================

    # 51 (L1, theory)
    exercises.append(make_ex(
        "pcep-s4-051", "Clase Base de Excepciones No del Sistema", "Jerarquía de Excepciones", "Clase Exception", "4.3", "basic", "theory",
        "¿Cuál es la clase base recomendada de la cual deben heredar todas las excepciones estándar y de usuario (que no sean de salida del sistema)?",
        "En Python, `Exception` es la clase base para todas las excepciones no relacionadas con salidas del sistema. `BaseException` es la raíz absoluta (que incluye KeyboardInterrupt y SystemExit).",
        ["Exception", "BaseException", "jerarquía"], ["teoría", "pcep-4.3", "nivel-1"],
        options=[
            ("BaseException", False),
            ("Exception", True),
            ("StandardError (obsoleto de Python 2)", False),
            ("RuntimeError", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    # 52 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-052", "ZeroDivisionError Capturado por ArithmeticError", "Jerarquía de Excepciones", "ArithmeticError", "4.3", "basic", "output_prediction",
        "¿Cuál es la salida al capturar una división por cero con `except ArithmeticError:`?",
        "`ZeroDivisionError` es una subclase de `ArithmeticError`. Por tanto, el bloque `except ArithmeticError:` la captura con éxito.",
        ["ArithmeticError", "ZeroDivisionError", "herencia"], ["pcep-4.3", "nivel-1"],
        code_snippet="try:\n    x = 10 / 0\nexcept ArithmeticError:\n    print('Error aritmético capturado')",
        expected_output="Error aritmético capturado"
    ))

    # 53 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-053", "IndexError Capturado por LookupError", "Jerarquía de Excepciones", "LookupError", "4.3", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "`IndexError` es subclase de `LookupError`. La captura e imprime 'LookupError'.",
        ["LookupError", "IndexError", "herencia"], ["pcep-4.3", "nivel-1"],
        code_snippet="try:\n    lst = [1, 2]\n    val = lst[5]\nexcept LookupError:\n    print('LookupError')",
        expected_output="LookupError"
    ))

    # 54 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-054", "KeyError Capturado por LookupError", "Jerarquía de Excepciones", "KeyError bajo LookupError", "4.3", "basic", "output_prediction",
        "¿Qué imprime al acceder a una clave inexistente en un diccionario capturado con `LookupError`?",
        "`KeyError` también es subclase de `LookupError`. Ambos errores de búsqueda heredan de `LookupError`.",
        ["KeyError", "LookupError"], ["pcep-4.3", "nivel-1"],
        code_snippet="try:\n    d = {}\n    val = d['clave']\nexcept LookupError:\n    print('Clave no encontrada')",
        expected_output="Clave no encontrada"
    ))

    # 55 (L1, theory)
    exercises.append(make_ex(
        "pcep-s4-055", "Jerarquía de TypeError y ValueError", "Jerarquía de Excepciones", "TypeError vs ValueError", "4.3", "basic", "theory",
        "¿Cuál es la relación de herencia entre `TypeError` y `ValueError` en Python?",
        "Tanto `TypeError` como `ValueError` heredan directamente de `Exception` como clases hermanas; ninguna hereda de la otra.",
        ["TypeError", "ValueError", "clases hermanas"], ["teoría", "pcep-4.3", "nivel-1"],
        options=[
            ("ValueError es subclase de TypeError.", False),
            ("TypeError es subclase de ValueError.", False),
            ("Son clases hermanas independientes que heredan directamente de Exception.", True),
            ("Ambas heredan directamente de ArithmeticError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 56 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-056", "Comprobación de Herencia con issubclass()", "Jerarquía de Excepciones", "Función issubclass()", "4.3", "basic", "output_prediction",
        "¿Cuál es la salida de `issubclass(ZeroDivisionError, ArithmeticError)`?",
        "Como ZeroDivisionError hereda de ArithmeticError, `issubclass()` devuelve True.",
        ["issubclass", "ZeroDivisionError", "ArithmeticError"], ["pcep-4.3", "nivel-1"],
        code_snippet="print(issubclass(ZeroDivisionError, ArithmeticError))",
        expected_output="True"
    ))

    # 57 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-057", "Comprobación: IndexError es subclase de LookupError", "Jerarquía de Excepciones", "issubclass(IndexError, LookupError)", "4.3", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "IndexError hereda de LookupError: True.",
        ["issubclass", "IndexError", "LookupError"], ["pcep-4.3", "nivel-1"],
        code_snippet="print(issubclass(IndexError, LookupError))",
        expected_output="True"
    ))

    # 58 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-058", "Orden de Cláusulas except: De Específico a General", "Jerarquía de Excepciones", "Orden de except", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`ZeroDivisionError` es más específica y se colocó antes que `ArithmeticError`. Se ejecuta la rama más específica: imprime 'ZeroDivision'.",
        ["orden de except", "rama específica"], ["pcep-4.3", "nivel-2"],
        code_snippet="try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('ZeroDivision')\nexcept ArithmeticError:\n    print('Arithmetic')",
        expected_output="ZeroDivision"
    ))

    # 59 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-059", "Trampa de Orden Invertido: Clase General Antes de la Específica", "Jerarquía de Excepciones", "Bloque Inalcanzable", "4.3", "basic_plus", "code_analysis",
        "¿Qué ocurre si colocamos `except ArithmeticError:` ANTES de `except ZeroDivisionError:`?",
        "Como `ArithmeticError` es la superclase, capturará la excepción primero. El bloque `except ZeroDivisionError:` se convierte en código inalcanzable (dead code).",
        ["código inalcanzable", "trampa de herencia de excepciones"], ["análisis", "pcep-4.3", "nivel-2"],
        code_snippet="try:\n    x = 1 / 0\nexcept ArithmeticError:\n    print('Arithmetic')\nexcept ZeroDivisionError:\n    print('ZeroDivision')",
        options=[
            ("Python busca la más específica e imprime 'ZeroDivision'.", False),
            ("Se ejecuta el primer bloque que hace match ('Arithmetic'), dejando inalcanzable a 'ZeroDivision'.", True),
            ("Lanza SyntaxError por orden incorrecto.", False),
            ("Se ejecutan ambos bloques consecutivamente.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 60 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-060", "OverflowError Bajo ArithmeticError", "Jerarquía de Excepciones", "OverflowError", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de evaluar si OverflowError es subclase de ArithmeticError?",
        "OverflowError hereda de ArithmeticError: True.",
        ["OverflowError", "ArithmeticError"], ["pcep-4.3", "nivel-2"],
        code_snippet="print(issubclass(OverflowError, ArithmeticError))",
        expected_output="True"
    ))

    # 61 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-061", "KeyboardInterrupt No Hereda de Exception", "Jerarquía de Excepciones", "BaseException vs Exception", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `issubclass(KeyboardInterrupt, Exception)`?",
        "`KeyboardInterrupt` hereda directamente de `BaseException`, NO de `Exception` (para evitar que un `except Exception:` capture accidentalmente un Ctrl+C del usuario): False.",
        ["KeyboardInterrupt", "BaseException", "False"], ["pcep-4.3", "nivel-2"],
        code_snippet="print(issubclass(KeyboardInterrupt, Exception))",
        expected_output="False"
    ))

    # 62 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-062", "SystemExit No Hereda de Exception", "Jerarquía de Excepciones", "SystemExit", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `issubclass(SystemExit, Exception)`?",
        "`SystemExit` también hereda directamente de `BaseException`, no de `Exception`: False.",
        ["SystemExit", "BaseException"], ["pcep-4.3", "nivel-2"],
        code_snippet="print(issubclass(SystemExit, Exception))",
        expected_output="False"
    ))

    # 63 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-063", "NameError Capturado por Exception", "Jerarquía de Excepciones", "NameError bajo Exception", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Acceder a la variable no definida `variable_fantasma` lanza `NameError`, que es subclase de `Exception`. Imprime: 'Error capturado'.",
        ["NameError", "Exception"], ["pcep-4.3", "nivel-2"],
        code_snippet="try:\n    print(variable_fantasma)\nexcept Exception:\n    print('Error capturado')",
        expected_output="Error capturado"
    ))

    # 64 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-064", "UnboundLocalError es Subclase de NameError", "Jerarquía de Excepciones", "UnboundLocalError herencia", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `issubclass(UnboundLocalError, NameError)`?",
        "`UnboundLocalError` es formalmente una subclase especializada de `NameError`: True.",
        ["UnboundLocalError", "NameError", "issubclass"], ["pcep-4.3", "nivel-2"],
        code_snippet="print(issubclass(UnboundLocalError, NameError))",
        expected_output="True"
    ))

    # 65 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-065", "IndentationError es Subclase de SyntaxError", "Jerarquía de Excepciones", "IndentationError herencia", "4.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de `issubclass(IndentationError, SyntaxError)`?",
        "`IndentationError` hereda de `SyntaxError`: True.",
        ["IndentationError", "SyntaxError", "issubclass"], ["pcep-4.3", "nivel-2"],
        code_snippet="print(issubclass(IndentationError, SyntaxError))",
        expected_output="True"
    ))

    # 66 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-066", "TabError es Subclase de IndentationError", "Jerarquía de Excepciones", "TabError herencia", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `issubclass(TabError, IndentationError)`?",
        "TabError es subclase directa de IndentationError (y por tanto nieta de SyntaxError): True.",
        ["TabError", "IndentationError"], ["pcep-4.3", "nivel-3"],
        code_snippet="print(issubclass(TabError, IndentationError))",
        expected_output="True"
    ))

    # 67 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-067", "Creación de Excepción Personalizada Heredando de Exception", "Jerarquía de Excepciones", "Custom Exception", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por este código?",
        "`MiError` hereda de `Exception`. Al lanzarla con `raise MiError('Fallo')`, es capturada por `except MiError as e:` imprimiendo 'Fallo'.",
        ["excepción personalizada", "raise", "as e"], ["pcep-4.3", "nivel-3"],
        code_snippet="class MiError(Exception):\n    pass\n\ntry:\n    raise MiError('Fallo')\nexcept MiError as e:\n    print(e)",
        expected_output="Fallo"
    ))

    # 68 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-068", "Excepción Personalizada Capturada por su Superclase", "Jerarquía de Excepciones", "Polimorfismo en Excepciones", "4.3", "intermediate", "output_prediction",
        "¿Qué imprime al capturar `MiError` mediante `except Exception:`?",
        "Como `MiError` es subclase de `Exception`, `except Exception:` la captura con éxito.",
        ["polimorfismo", "Exception"], ["pcep-4.3", "nivel-3"],
        code_snippet="class MiError(Exception):\n    pass\n\ntry:\n    raise MiError()\nexcept Exception:\n    print('Capturado genérico')",
        expected_output="Capturado genérico"
    ))

    # 69 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-069", "Lanzar un Objeto que No Hereda de BaseException", "Jerarquía de Excepciones", "TypeError en raise", "4.3", "intermediate", "code_analysis",
        "¿Qué ocurre si ejecutamos `raise 'Un error'` en Python 3?",
        "En Python 3, solo las clases o instancias derivadas de `BaseException` pueden ser lanzadas. Lanzar un tipo no compatible (como una cadena) genera `TypeError: exceptions must derive from BaseException`.",
        ["TypeError", "BaseException", "raise"], ["análisis", "pcep-4.3", "nivel-3"],
        code_snippet="raise 'Un error'",
        options=[
            ("Imprime 'Un error' como mensaje en consola.", False),
            ("Lanza TypeError: exceptions must derive from BaseException.", True),
            ("Lanza ValueError.", False),
            ("Crea una excepción anónima de tipo Exception.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 70 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-070", "Atributo args de una Excepción", "Jerarquía de Excepciones", "Atributo args", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `e.args` al instanciar `ValueError('Mensaje', 404)`?",
        "Los argumentos pasados al constructor de la excepción se almacenan como una tupla en el atributo `args`: `('Mensaje', 404)`.",
        ["args", "tupla de argumentos"], ["pcep-4.3", "nivel-3"],
        code_snippet="try:\n    raise ValueError('Mensaje', 404)\nexcept ValueError as e:\n    print(e.args)",
        expected_output="('Mensaje', 404)"
    ))

    # 71 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-071", "Jerarquía de FileNotFoundError", "Jerarquía de Excepciones", "FileNotFoundError", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `issubclass(FileNotFoundError, OSError)`?",
        "`FileNotFoundError` es una subclase directa de `OSError` (y por tanto de `Exception`): True.",
        ["FileNotFoundError", "OSError"], ["pcep-4.3", "nivel-3"],
        code_snippet="print(issubclass(FileNotFoundError, OSError))",
        expected_output="True"
    ))

    # 72 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-072", "Jerarquía de ZeroDivisionError frente a ValueError", "Jerarquía de Excepciones", "No Relacionadas", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de `issubclass(ZeroDivisionError, ValueError)`?",
        "No existe relación de herencia entre ellas (pertenecen a ramas diferentes de Exception): False.",
        ["issubclass", "False"], ["pcep-4.3", "nivel-3"],
        code_snippet="print(issubclass(ZeroDivisionError, ValueError))",
        expected_output="False"
    ))

    # 73 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-073", "Excepción que no hace match y se propaga", "Jerarquía de Excepciones", "Propagación por Desajuste", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida si ocurre un ZeroDivisionError en un try protegido solo por except LookupError, dentro de otro try externo?",
        "El try interno no captura `ZeroDivisionError` (porque no es LookupError). La excepción se propaga al try externo, que la captura con `except ArithmeticError:` imprimiendo 'Externo'.",
        ["propagación", "desajuste de excepción"], ["pcep-4.3", "nivel-3"],
        code_snippet="try:\n    try:\n        x = 1 / 0\n    except LookupError:\n        print('Interno')\nexcept ArithmeticError:\n    print('Externo')",
        expected_output="Externo"
    ))

    # 74 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-074", "Nombre de la Clase de Excepción con type(e).__name__", "Jerarquía de Excepciones", "__name__ de Excepción", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "`type(e).__name__` obtiene el nombre exacto de la clase de excepción concreta instanciada ('ZeroDivisionError').",
        ["__name__", "identificación de clase"], ["pcep-4.3", "nivel-3"],
        code_snippet="try:\n    x = 10 / 0\nexcept Exception as e:\n    print(type(e).__name__)",
        expected_output="ZeroDivisionError"
    ))

    # 75 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-075", "Subclase Personalizada de ArithmeticError", "Jerarquía de Excepciones", "Subclase Propia de Rama Estándar", "4.3", "intermediate", "output_prediction",
        "¿Cuál es la salida si una excepción personalizada hereda de `ArithmeticError`?",
        "Al heredar de `ArithmeticError`, es capturada por `except ArithmeticError:` imprimiendo 'Capturado'.",
        ["ArithmeticError", "herencia propia"], ["pcep-4.3", "nivel-3"],
        code_snippet="class MiCalcError(ArithmeticError):\n    pass\n\ntry:\n    raise MiCalcError()\nexcept ArithmeticError:\n    print('Capturado')",
        expected_output="Capturado"
    ))

    # =========================================================================
    # OBJETIVO 4.4: Bloques try, except, else y finally (076 - 100)
    # =========================================================================

    # 76 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-076", "Estructura try-except Básica", "try-except-else-finally", "try-except", "4.4", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "Al producirse `10 / 0`, el flujo salta de inmediato al bloque `except ZeroDivisionError:` imprimiendo 'Error' y luego continúa fuera imprimiendo 'Fin'.",
        ["try-except", "flujo"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Error')\nprint('Fin')",
        expected_output="Error\nFin"
    ))

    # 77 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-077", "Cláusula else en Bloque try sin Excepciones", "try-except-else-finally", "Cláusula else", "4.4", "basic", "output_prediction",
        "¿Cuándo se ejecuta el bloque `else:` en una estructura `try-except-else`?",
        "La cláusula `else:` se ejecuta ÚNICAMENTE si el bloque `try:` finaliza con éxito sin producir ninguna excepción. Imprime 'Éxito' y 'Fin'.",
        ["try-else", "sin excepción"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print('Error')\nelse:\n    print('Éxito')\nprint('Fin')",
        expected_output="Éxito\nFin"
    ))

    # 78 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-078", "Cláusula else Omitida cuando Hay Excepción", "try-except-else-finally", "else ignorado tras excepción", "4.4", "basic", "output_prediction",
        "¿Cuál es la salida de este código donde sí ocurre una excepción?",
        "Como ocurrió un ZeroDivisionError, se ejecuta el `except` y la cláusula `else` NO se ejecuta. Imprime: 'Capturado'.",
        ["else ignorado", "except"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Capturado')\nelse:\n    print('No hubo error')",
        expected_output="Capturado"
    ))

    # 79 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-079", "Cláusula finally Básica", "try-except-else-finally", "Cláusula finally", "4.4", "basic", "output_prediction",
        "¿Cuál es la regla fundamental de ejecución de la cláusula `finally:`?",
        "El bloque `finally:` se ejecuta SIEMPRE, ocurra o no una excepción en el bloque try. Imprime '10.0' y luego 'Limpieza'.",
        ["finally", "ejecución garantizada"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    print(20 / 2)\nfinally:\n    print('Limpieza')",
        expected_output="10.0\nLimpieza"
    ))

    # 80 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-080", "finally Tras Excepción Capturada", "try-except-else-finally", "finally con excepción", "4.4", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "1. Salta al `except` e imprime 'Error'.\n2. Ejecuta el `finally` e imprime 'Siempre'.\n3. Imprime 'Fin'.",
        ["except", "finally"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')\nfinally:\n    print('Siempre')\nprint('Fin')",
        expected_output="Error\nSiempre\nFin"
    ))

    # 81 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-081", "Captura de Múltiples Excepciones en una Tupla", "try-except-else-finally", "Tupla de Excepciones", "4.4", "basic", "output_prediction",
        "¿Cuál es la sintaxis correcta para que un único bloque `except` capture tanto `TypeError` como `ZeroDivisionError`?",
        "Se deben encerrar los tipos de excepciones entre paréntesis como una tupla: `except (TypeError, ZeroDivisionError):`.",
        ["tupla de excepciones", "múltiples errores"], ["pcep-4.4", "nivel-1"],
        code_snippet="try:\n    x = '2' + 2\nexcept (TypeError, ZeroDivisionError):\n    print('Capturado con éxito')",
        expected_output="Capturado con éxito"
    ))

    # 82 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-082", "Estructura Completa: try - except - else - finally", "try-except-else-finally", "try completo", "4.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código donde todo ejecuta con éxito?",
        "1. try exitoso: imprime 5.0.\n2. else se ejecuta: imprime 'Else'.\n3. finally se ejecuta: imprime 'Finally'.",
        ["try-except-else-finally", "orden de ejecución"], ["pcep-4.4", "nivel-2"],
        code_snippet="try:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print('Except')\nelse:\n    print('Else')\nfinally:\n    print('Finally')",
        expected_output="5.0\nElse\nFinally"
    ))

    # 83 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-083", "Estructura Completa con Excepción Disparada", "try-except-else-finally", "try completo con error", "4.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida si ocurre una excepción en la estructura completa?",
        "1. try falla.\n2. except captura e imprime 'Except'.\n3. else se omite.\n4. finally se ejecuta e imprime 'Finally'.",
        ["except", "finally"], ["pcep-4.4", "nivel-2"],
        code_snippet="try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('Except')\nelse:\n    print('Else')\nfinally:\n    print('Finally')",
        expected_output="Except\nFinally"
    ))

    # 84 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-084", "finally Ejecutándose Antes de un return", "try-except-else-finally", "finally con return", "4.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por este código?",
        "Aunque el bloque try ejecuta `return 'Retorno'`, el bloque `finally` tiene prioridad de ejecución inmediata antes de salir de la función. Imprime 'Finally' y luego la llamada recibe 'Retorno'.",
        ["finally antes de return"], ["pcep-4.4", "nivel-2"],
        code_snippet="def prueba():\n    try:\n        return 'Retorno'\n    finally:\n        print('Finally')\n\nprint(prueba())",
        expected_output="Finally\nRetorno"
    ))

    # 85 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-085", "Sobrescritura del Retorno en Bloque finally", "try-except-else-finally", "return en finally", "4.4", "basic_plus", "output_prediction",
        "¿Qué ocurre si el bloque `finally` incluye su propia instrucción `return`?",
        "Si el bloque `finally` ejecuta un `return`, descarta y sobrescribe cualquier valor de retorno previo del bloque `try`. La función devuelve 'B'.",
        ["return en finally", "sobrescritura"], ["pcep-4.4", "nivel-2"],
        code_snippet="def f():\n    try:\n        return 'A'\n    finally:\n        return 'B'\n\nprint(f())",
        expected_output="B"
    ))

    # 86 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-086", "finally Silenciando una Excepción con return", "try-except-else-finally", "finally silenciando excepciones", "4.4", "basic_plus", "output_prediction",
        "¿Qué ocurre si ocurre un error en `try` pero `finally` tiene un `return`?",
        "¡Comportamiento crítico en Python! Si el bloque `finally` ejecuta un `return`, la excepción en vuelo es descartada/silenciada y la función retorna normalmente con 'Salvado'.",
        ["silenciar excepción", "return en finally"], ["pcep-4.4", "nivel-2"],
        code_snippet="def f():\n    try:\n        1 / 0\n    finally:\n        return 'Salvado'\n\nprint(f())",
        expected_output="Salvado"
    ))

    # 87 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-087", "Instrucción raise sin Argumentos (Re-raise)", "try-except-else-finally", "Relanzar con raise", "4.4", "basic_plus", "output_prediction",
        "¿Qué hace una instrucción `raise` solitaria dentro de un bloque `except`?",
        "`raise` sin argumentos vuelve a lanzar la excepción activa actual que se está procesando en el bloque except para que sea manejada más arriba.",
        ["raise", "re-raise"], ["pcep-4.4", "nivel-2"],
        code_snippet="try:\n    try:\n        1 / 0\n    except ZeroDivisionError:\n        print('Log interno')\n        raise\nexcept ZeroDivisionError:\n    print('Manejador externo')",
        expected_output="Log interno\nManejador externo"
    ))

    # 88 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-088", "raise Solitario Fuera de un Bloque except", "try-except-else-finally", "RuntimeError en raise huérfano", "4.4", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos una instrucción `raise` sin argumentos fuera de cualquier bloque except?",
        "Al no existir ninguna excepción activa en el contexto, Python lanza `RuntimeError: No active exception to reraise`.",
        ["RuntimeError", "raise sin excepción activa"], ["análisis", "pcep-4.4", "nivel-2"],
        code_snippet="raise",
        options=[
            ("No hace nada.", False),
            ("Lanza RuntimeError: No active exception to reraise.", True),
            ("Lanza TypeError.", False),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 89 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-089", "Bloque except Vacío (Bare Except)", "try-except-else-finally", "except desnudo", "4.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de un bloque `except:` sin especificar clase de excepción?",
        "Un `except:` sin clase captura CUALQUIER excepción (equivalente a capturar BaseException). Imprime 'Captura todo'.",
        ["bare except", "captura todo"], ["pcep-4.4", "nivel-2"],
        code_snippet="try:\n    x = int('no_es_numero')\nexcept:\n    print('Captura todo')",
        expected_output="Captura todo"
    ))

    # 90 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s4-090", "Ubicación Obligatoria del Bare except", "try-except-else-finally", "SyntaxError en bare except", "4.4", "basic_plus", "code_analysis",
        "¿Dónde debe ubicarse un bloque `except:` sin clase dentro de una cadena de excepts?",
        "Un `except:` sin clase debe ser obligatoriamente el ÚLTIMO bloque except. Colocarlo antes de otro except produce `SyntaxError: default 'except:' must be last`.",
        ["SyntaxError", "bare except al final"], ["análisis", "pcep-4.4", "nivel-2"],
        code_snippet="try:\n    x = 1 / 0\nexcept:\n    print('A')\nexcept ZeroDivisionError:\n    print('B')",
        options=[
            ("Ejecuta 'A'.", False),
            ("Lanza SyntaxError: default 'except:' must be last.", True),
            ("Ejecuta 'B'.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 91 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-091", "Excepción Producida dentro del Bloque except", "try-except-else-finally", "Excepción en except", "4.4", "intermediate", "output_prediction",
        "¿Qué ocurre si ocurre un nuevo error dentro de un bloque except, existiendo una cláusula finally?",
        "El bloque `finally` se ejecuta A PESAR de que haya ocurrido una nueva excepción no manejada dentro del except. Imprime 'Finally' antes de propagar el nuevo error.",
        ["finally garantizado", "error en except"], ["pcep-4.4", "nivel-3"],
        code_snippet="try:\n    try:\n        1 / 0\n    except ZeroDivisionError:\n        'a' + 1\n    finally:\n        print('Finally')",
        expected_output="Finally"
    ))

    # 92 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-092", "Cláusula else que Lanza una Excepción", "try-except-else-finally", "Error en else", "4.4", "intermediate", "output_prediction",
        "¿Es capturada por los bloques `except` asociados una excepción que ocurre dentro de la cláusula `else` del mismo try?",
        "NO. Los bloques `except` solo protegen el código dentro de `try:`. Las excepciones dentro de `else:` se propagan al exterior.",
        ["else no protegido por sus excepts"], ["pcep-4.4", "nivel-3"],
        code_snippet="try:\n    try:\n        x = 10\n    except Exception:\n        print('Except')\n    else:\n        raise ValueError('Error en else')\nexcept ValueError:\n    print('Capturado en try externo')",
        expected_output="Capturado en try externo"
    ))

    # 93 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-093", "Excepción en Función Anidada en Bucle try", "try-except-else-finally", "try en Bucle", "4.4", "intermediate", "output_prediction",
        "¿Cuál es el valor final de `exitosos` al iterar la lista `[2, 0, 4]`?",
        "Para n = 2: 10 / 2 = 5, exitosos = 1.\nPara n = 0: ZeroDivisionError -> entra al except, no suma.\nPara n = 4: 10 / 4 = 2.5, exitosos = 2.\nTotal: 2.",
        ["try dentro de for", "resiliencia"], ["pcep-4.4", "nivel-3"],
        code_snippet="exitosos = 0\nfor n in [2, 0, 4]:\n    try:\n        res = 10 / n\n        exitosos += 1\n    except ZeroDivisionError:\n        pass\nprint(exitosos)",
        expected_output="2"
    ))

    # 94 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-094", "finally con break Interrumpiendo un Bucle", "try-except-else-finally", "finally con break", "4.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de este bucle con try-finally y break?",
        "El `break` intenta salir del bucle, pero antes de salir se ejecuta ineludiblemente el bloque `finally`. Imprime 'Finally' y luego 'Fuera'.",
        ["finally con break"], ["pcep-4.4", "nivel-3"],
        code_snippet="for i in range(5):\n    try:\n        break\n    finally:\n        print('Finally')\nprint('Fuera')",
        expected_output="Finally\nFuera"
    ))

    # 95 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-095", "finally con continue en un Bucle for", "try-except-else-finally", "finally con continue", "4.4", "intermediate", "output_prediction",
        "¿Cuántas veces se imprime 'Limpieza' en un for de 3 iteraciones con `continue` dentro de try?",
        "En cada iteración se ejecuta `continue`, pero antes de saltar a la siguiente iteración se ejecuta el bloque `finally`. Se imprime exactamente 3 veces.",
        ["finally con continue"], ["pcep-4.4", "nivel-3"],
        code_snippet="for x in range(3):\n    try:\n        continue\n    finally:\n        print('Limpieza')",
        expected_output="Limpieza\nLimpieza\nLimpieza"
    ))

    # 96 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-096", "Llamada a sys.exit() y Bloque finally", "try-except-else-finally", "finally y SystemExit", "4.4", "intermediate", "output_prediction",
        "Si se invoca `sys.exit()` dentro del bloque try, ¿se ejecuta el bloque `finally`?",
        "`sys.exit()` lanza una excepción `SystemExit` (que hereda de BaseException). Por tanto, la pila de llamadas se desenrolla y el bloque `finally` SÍ se ejecuta.",
        ["SystemExit", "finally garantizado"], ["pcep-4.4", "nivel-3"],
        code_snippet="try:\n    raise SystemExit()\nfinally:\n    print('Finally ejecutado')",
        expected_output="Finally ejecutado"
    ))

    # 97 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-097", "Variable Definida en try Accesible en finally", "try-except-else-finally", "Ámbito de variables en try", "4.4", "intermediate", "output_prediction",
        "¿Tienen los bloques `try` un ámbito de variables propio o comparten el ámbito de la función?",
        "Los bloques `try/except/finally` NO crean un nuevo ámbito local en Python. Las variables definidas dentro del try son accesibles en finally y fuera del bloque: 99.",
        ["ámbito de bloque", "variables en try"], ["pcep-4.4", "nivel-3"],
        code_snippet="try:\n    x = 99\nfinally:\n    print(x)",
        expected_output="99"
    ))

    # 98 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-098", "Error en Línea Previa de try Impide Asignación", "try-except-else-finally", "Variable No Definida tras Error", "4.4", "intermediate", "code_analysis",
        "¿Qué ocurre si una variable se asigna después de la línea que produce la excepción en try, y se intenta leer en finally?\n\n```python\ntry:\n    1 / 0\n    x = 10\nfinally:\n    print(x)\n```",
        "Como la excepción ocurre en `1 / 0`, la línea `x = 10` nunca llega a ejecutarse. Al intentar imprimir `x` en finally, se lanza `NameError: name 'x' is not defined`.",
        ["NameError en finally", "flujo interrumpido"], ["análisis", "pcep-4.4", "nivel-3"],
        code_snippet="try:\n    1 / 0\n    x = 10\nfinally:\n    print(x)",
        options=[
            ("Imprime None.", False),
            ("Lanza NameError: name 'x' is not defined al ejecutar finally.", True),
            ("Imprime 0.", False),
            ("Lanza ZeroDivisionError únicamente.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 99 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-099", "Encadenamiento Explícito de Excepciones (raise from)", "try-except-else-finally", "raise from", "4.4", "intermediate", "output_prediction",
        "¿Cuál es el valor del atributo `__cause__` en `raise RuntimeError('Error') from err`?",
        "La sintaxis `raise E from causa` asocia explícitamente la excepción previa al atributo `__cause__` de la nueva excepción.",
        ["raise from", "__cause__"], ["pcep-4.4", "nivel-3"],
        code_snippet="try:\n    try:\n        1 / 0\n    except ZeroDivisionError as err:\n        raise RuntimeError('Fallo') from err\nexcept RuntimeError as e:\n    print(type(e.__cause__).__name__)",
        expected_output="ZeroDivisionError"
    ))

    # 100 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s4-100", "Flujo de Ejecución Extremo PCEP: try - except - else - finally con Retornos", "try-except-else-finally", "Reto Maestro PCEP", "4.4", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por este código maestro de examen?",
        "1. try intenta evaluar `10 / 2` -> éxito (5.0).\n2. else se ejecuta -> acumula 'E'.\n3. finally se ejecuta incondicionalmente -> acumula 'F'.\n4. Resultado devuelto: 'EF'.",
        ["reto maestro", "flujo completo"], ["pcep-4.4", "nivel-3"],
        code_snippet="def prueba():\n    registro = ''\n    try:\n        x = 10 / 2\n    except ZeroDivisionError:\n        registro += 'X'\n    else:\n        registro += 'E'\n    finally:\n        registro += 'F'\n    return registro\n\nprint(prueba())",
        expected_output="EF"
    ))

    return exercises

if __name__ == "__main__":
    exs = build_all_section4()
    print(f"Total exercises generated for Section 4: {len(exs)}")
    
    ts_code = "import { Exercise } from '../../types';\n\n"
    ts_code += "export const SECTION_4_EXERCISES: Exercise[] = "
    ts_code += json.dumps(exs, ensure_ascii=False, indent=2)
    ts_code += ";\n"
    
    with open("src/data/exercises/section4.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)
    print("Successfully wrote src/data/exercises/section4.ts!")

#!/usr/bin/env python3
import json

SEC1_TITLE = "Sección 1 — Fundamentos de Programación y Python"

def make_ex(eid, title, topic, subtopic, obj, diff, etype, stmt, explanation, concepts, tags,
            code_snippet=None, starter_code=None, options=None, expected_output=None, acceptable=None):
    ex = {
        "id": eid,
        "title": title,
        "section": 1,
        "sectionTitle": SEC1_TITLE,
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

def build_all_section1():
    exercises = []

    # =========================================================================
    # OBJETIVO 1.1: Conceptos Fundamentales (001 - 020)
    # =========================================================================
    exercises.append(make_ex(
        "pcep-s1-001", "Rol del Intérprete en Python", "Conceptos Fundamentales", "Compilación vs Interpretación", "1.1", "basic", "theory",
        "¿Cómo ejecuta Python el código fuente de un programa?",
        "Python es un lenguaje interpretado: analiza y ejecuta las instrucciones línea por línea en tiempo de ejecución tras compilar a bytecode intermedio.",
        ["intérprete", "tiempo de ejecución", "bytecode"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Traduce todo el código a código máquina ejecutable antes de iniciar la primera línea.", False),
            ("Lee, analiza y ejecuta el código instrucción por instrucción en tiempo de ejecución.", True),
            ("Requiere un compilador externo de C++ para generar archivos .exe independientes.", False),
            ("Solo verifica los tipos de datos pero no ejecuta el programa.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-002", "Archivos de Bytecode (.pyc)", "Conceptos Fundamentales", "Bytecode y CPython", "1.1", "basic", "theory",
        "¿Qué contiene un archivo con extensión `.pyc` dentro de `__pycache__`?",
        "Los archivos .pyc contienen bytecode compilado intermedio que la máquina virtual de Python (PVM) interpreta directamente.",
        ["bytecode", ".pyc", "PVM"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("El código fuente en texto plano con comentarios eliminados.", False),
            ("Código ensamblador dependiente de la arquitectura del CPU.", False),
            ("Bytecode compilado intermedio que la máquina virtual de Python interpreta.", True),
            ("Las credenciales de acceso del usuario al entorno virtual.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-003", "¿Qué es CPython?", "Conceptos Fundamentales", "Implementaciones de Python", "1.1", "basic", "theory",
        "¿Qué es exactamente **CPython**?",
        "CPython es la implementación canónica y de referencia oficial del lenguaje Python, desarrollada en lenguaje C.",
        ["CPython", "implementación oficial", "lenguaje C"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Un compilador comercial que convierte Python a código C nativo.", False),
            ("La implementación estándar y de referencia oficial de Python, programada en C.", True),
            ("Una biblioteca gráfica para desarrollo de interfaces de usuario.", False),
            ("Un dialecto obsoleto de Python que ya no recibe soporte oficial.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-004", "Propósito de PEP 8", "Conceptos Fundamentales", "Estándares y PEP", "1.1", "basic", "theory",
        "¿Cuál es el propósito principal del documento conocido como **PEP 8**?",
        "PEP 8 es la guía de estilo oficial para escribir código Python legible y consistente.",
        ["PEP 8", "guía de estilo", "legibilidad"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Definir la arquitectura de la memoria RAM para Python 3.", False),
            ("Proporcionar la guía de estilo oficial para escribir código Python legible y consistente.", True),
            ("Establecer el temario obligatorio del examen PCEP.", False),
            ("Especificar el algoritmo de compresión de archivos zip.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-005", "Identificación de Palabras Reservadas", "Conceptos Fundamentales", "Keywords", "1.1", "basic", "theory",
        "¿Cuál de las siguientes listas contiene ÚNICAMENTE palabras reservadas (keywords) en Python 3?",
        "def, return, if, while son palabras reservadas oficiales del lenguaje Python.",
        ["keywords", "palabras reservadas"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("import, function, if, while", False),
            ("def, return, if, while", True),
            ("class, loop, for, in", False),
            ("var, def, else, elif", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-006", "Comprobación con módulo keyword", "Conceptos Fundamentales", "Módulo keyword", "1.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "keyword.iskeyword('pass') retorna True porque 'pass' es una palabra reservada.",
        ["keyword", "iskeyword", "pass"], ["pcep-1.1", "nivel-1"],
        code_snippet="import keyword\nprint(keyword.iskeyword('pass'))",
        expected_output="True"
    ))

    exercises.append(make_ex(
        "pcep-s1-007", "Diferencia entre Compilación e Interpretación", "Conceptos Fundamentales", "Compilación vs Interpretación", "1.1", "basic", "theory",
        "¿Cuál de las siguientes afirmaciones respecto a los lenguajes compilados frente a los interpretados es FALSA?",
        "Un intérprete no genera un ejecutable nativo (.exe), sino que ejecuta las instrucciones en su propia máquina virtual.",
        ["compilación", "interpretación"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Los programas compilados generalmente se ejecutan más rápido que los interpretados.", False),
            ("Un intérprete puede comenzar a ejecutar código de inmediato sin esperar a compilar todo el proyecto.", False),
            ("Un intérprete genera siempre un archivo binario nativo (.exe) que corre sin necesidad de instalar Python.", True),
            ("Los errores de sintaxis en líneas tardías de código interpretado no detienen la ejecución de las líneas previas.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-008", "Palabra reservada 'for' como variable", "Conceptos Fundamentales", "Keywords como Identificadores", "1.1", "basic_plus", "code_analysis",
        "¿Qué ocurre al intentar ejecutar este código?\n\n```python\nfor = 10\nprint(for)\n```",
        "Intentar asignar valor a una palabra reservada provoca SyntaxError inmediato antes de ejecutar el programa.",
        ["SyntaxError", "keywords", "for"], ["análisis", "pcep-1.1", "nivel-2"],
        code_snippet="for = 10\nprint(for)",
        options=[
            ("Imprime 10 en la consola.", False),
            ("Genera un NameError porque for no está definido.", False),
            ("Genera un SyntaxError porque for es una palabra clave reservada del lenguaje.", True),
            ("Genera un TypeError por incompatibilidad de tipos.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-009", "Keywords con Mayúscula Inicial", "Conceptos Fundamentales", "Keywords con mayúscula", "1.1", "basic_plus", "theory",
        "¿Cuáles son las ÚNICAS tres palabras reservadas en Python 3 que inician con letra mayúscula?",
        "En Python 3, True, False y None son las únicas 3 palabras reservadas que comienzan con mayúscula.",
        ["True", "False", "None", "keywords"], ["teoría", "pcep-1.1", "nivel-2"],
        options=[
            ("True, False, Null", False),
            ("True, False, None", True),
            ("Yes, No, None", False),
            ("Boolean, True, False", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-010", "Diferenciación de Mayúsculas en Keywords", "Conceptos Fundamentales", "Case Sensitivity", "1.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "'true' con minúscula es tratado como un identificador válido por el programador, no como la palabra reservada 'True'.",
        ["case-sensitivity", "true", "True"], ["pcep-1.1", "nivel-2"],
        code_snippet="true = 42\nTrue_val = true\nprint(True_val)",
        expected_output="42"
    ))

    exercises.append(make_ex(
        "pcep-s1-011", "Completar con Bloque Vacío", "Conceptos Fundamentales", "Sentencia pass", "1.1", "basic_plus", "code_completion",
        "¿Qué palabra reservada se debe colocar en '____' para indicar un bloque sintáctico vacío válido?",
        "La palabra 'pass' es una operación nula (no-op) requerida cuando la sintaxis exige una instrucción pero no hay acción que realizar.",
        ["pass", "no-op", "bloque vacío"], ["completar", "pcep-1.1", "nivel-2"],
        starter_code="if True:\n    ____\nprint('Continuar')",
        acceptable=["pass"],
        expected_output="Continuar"
    ))

    exercises.append(make_ex(
        "pcep-s1-012", "Características de PyPy", "Conceptos Fundamentales", "Implementaciones alternativas", "1.1", "basic_plus", "theory",
        "¿Qué característica técnica distingue principalmente a **PyPy** de la implementación estándar CPython?",
        "PyPy incorpora un compilador JIT (Just-In-Time) que traduce código a instrucciones nativas dinámicamente aumentando la velocidad.",
        ["PyPy", "JIT", "rendimiento"], ["teoría", "pcep-1.1", "nivel-2"],
        options=[
            ("PyPy está escrito en Java para integrarse con la JVM.", False),
            ("PyPy cuenta con un compilador JIT (Just-In-Time) que incrementa significativamente la velocidad de ejecución.", True),
            ("PyPy solo funciona en microcontroladores embebidos sin sistema operativo.", False),
            ("PyPy no admite diccionarios ni manejo de excepciones.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-013", "Palabra Clave reservada: as", "Conceptos Fundamentales", "Keywords: as", "1.1", "basic_plus", "code_analysis",
        "¿Qué sucede al ejecutar `as = 'alias'`?",
        "'as' es una palabra reservada utilizada para alias en importaciones y cláusulas except/with, por lo que no puede usarse como nombre de variable.",
        ["as", "SyntaxError", "keywords"], ["análisis", "pcep-1.1", "nivel-2"],
        code_snippet="as = 'alias'\nprint(as)",
        options=[
            ("Imprime 'alias'.", False),
            ("Lanza SyntaxError.", True),
            ("Lanza TypeError.", False),
            ("Lanza NameError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-014", "Creador del Lenguaje Python", "Conceptos Fundamentales", "Historia de Python", "1.1", "basic_plus", "theory",
        "¿Quién diseñó originalmente el lenguaje de programación Python?",
        "Python fue creado por Guido van Rossum a finales de los años 80 y publicado en febrero de 1991.",
        ["Guido van Rossum", "historia"], ["teoría", "pcep-1.1", "nivel-2"],
        options=[
            ("Dennis Ritchie", False),
            ("Bjarne Stroustrup", False),
            ("Guido van Rossum", True),
            ("James Gosling", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-015", "Error Sintáctico vs Error Semántico en Ejecución", "Conceptos Fundamentales", "Tipos de Errores", "1.1", "intermediate", "code_analysis",
        "Observa el siguiente código:\n\n```python\nprint('Inicio')\n10 / 0\nprint('Fin')\n```\n¿Qué tipo de error ocurre y en qué momento?",
        "El código es sintácticamente válido (compila a bytecode con éxito). El error ZeroDivisionError ocurre en tiempo de ejecución tras imprimir 'Inicio'.",
        ["ZeroDivisionError", "tiempo de ejecución", "error semántico"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print('Inicio')\n10 / 0\nprint('Fin')",
        options=[
            ("SyntaxError antes de que se imprima 'Inicio'.", False),
            ("ZeroDivisionError en tiempo de ejecución después de imprimir 'Inicio'.", True),
            ("NameError durante la carga del intérprete.", False),
            ("El código imprime 'Inicio' y luego 'Fin' ignorando la división.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-016", "Error Sintáctico Antes de la Ejecución", "Conceptos Fundamentales", "Fase de Parsing", "1.1", "intermediate", "code_analysis",
        "Analiza el siguiente código:\n\n```python\nprint('Paso 1')\nprint('Paso 2'\nprint('Paso 3')\n```\n¿Qué salida se muestra en la consola?",
        "El error de sintaxis (paréntesis sin cerrar en línea 2) detiene el programa en la fase de análisis léxico, por lo que NO se ejecuta ninguna línea.",
        ["SyntaxError", "parsing", "fase de compilación"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print('Paso 1')\nprint('Paso 2'\nprint('Paso 3')",
        options=[
            ("Paso 1 seguido de un SyntaxError.", False),
            ("Paso 1, Paso 2 y Paso 3 normalmente.", False),
            ("Ninguna salida; se genera un SyntaxError inmediato antes de ejecutar cualquier instrucción.", True),
            ("RuntimeError en la línea 3.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-017", "Asignación a Built-in print", "Conceptos Fundamentales", "Built-ins vs Keywords", "1.1", "intermediate", "code_analysis",
        "Analiza el siguiente fragmento:\n\n```python\nprint = 100\nprint(100)\n```\n¿Qué ocurre al ejecutarlo?",
        "'print' no es una keyword reservada, sino un built-in. Asignarle 100 sobrescribe el identificador con un entero. Luego al llamarlo `print(100)`, se lanza `TypeError: 'int' object is not callable`.",
        ["built-in", "TypeError", "shadowing", "print"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print = 100\nprint(100)",
        options=[
            ("Imprime 100 en la consola.", False),
            ("Genera SyntaxError al intentar asignar valor a print.", False),
            ("Genera TypeError: 'int' object is not callable al intentar llamar al entero 100 como función.", True),
            ("Genera NameError porque print dejó de existir.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-018", "Identificador 'None' Reasignado", "Conceptos Fundamentales", "Inmutabilidad de None", "1.1", "intermediate", "code_analysis",
        "¿Qué ocurre si ejecutamos la siguiente instrucción?\n\n```python\nNone = 0\n```",
        "En Python 3, 'None' es una palabra reservada estricta (keyword), por lo que intentar asignarle valor provoca un SyntaxError inmediato.",
        ["None", "SyntaxError", "keyword"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="None = 0",
        options=[
            ("None ahora vale 0.", False),
            ("Lanza SyntaxError: cannot assign to None.", True),
            ("Lanza TypeError.", False),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-019", "Filosofía Zen de Python", "Conceptos Fundamentales", "El Zen de Python", "1.1", "intermediate", "theory",
        "¿Cuál de los siguientes enunciados contradice un principio del 'Zen de Python' (PEP 20)?",
        "El Zen de Python dice 'Simple is better than complex' y 'Explicit is better than implicit'. Afirmar que 'Complex is better than simple' es falso.",
        ["Zen de Python", "PEP 20"], ["teoría", "pcep-1.1", "nivel-3"],
        options=[
            ("Beautiful is better than ugly.", False),
            ("Explicit is better than implicit.", False),
            ("Complex is better than simple.", True),
            ("Readability counts.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    exercises.append(make_ex(
        "pcep-s1-020", "Palabras Reservadas: nonlocal", "Conceptos Fundamentales", "Scope Keywords", "1.1", "intermediate", "code_completion",
        "¿Qué palabra reservada permite declarar que una variable dentro de una función anidada pertenece al ámbito envolvente inmediato y no al global?",
        "La palabra reservada 'nonlocal' enlaza un identificador del ámbito exterior inmediato que no sea el global.",
        ["nonlocal", "scope", "keywords"], ["completar", "pcep-1.1", "nivel-3"],
        starter_code="def exterior():\n    x = 1\n    def interior():\n        ____ x\n        x = 2\n    interior()\n    return x",
        acceptable=["nonlocal"],
        expected_output="2"
    ))

    # =========================================================================
    # OBJETIVO 1.2: Sintaxis, Indentación, Comentarios y Variables (021 - 040)
    # Incluye el caso exacto pedido por el usuario (1numero = 2, numero 2 = 3)
    # =========================================================================

    # 21 (L1, debugging) -> CASO EXACTO DEL USUARIO
    exercises.append(make_ex(
        "pcep-s1-021", "Nombres de variables inválidos con dígitos y espacios", "Sintaxis e Identificadores", "Reglas de Nomenclatura", "1.2", "basic", "debugging",
        "Analiza el siguiente fragmento de código:\n\n```python\n1numero = 2\nnumero 2 = 3\n\nprint(1numero + numero 2)\n```\n¿Cuál es el resultado al intentar ejecutar este código en Python?",
        "En Python, los nombres de variables NO pueden comenzar con un dígito numérico (1numero es inválido) ni pueden contener espacios (numero 2 es inválido). Ambos provocan un SyntaxError inmediato antes de cualquier ejecución.",
        ["SyntaxError", "identificadores inválidos", "dígito inicial", "espacios en variables"], ["depuración", "pcep-1.2", "nivel-1"],
        code_snippet="1numero = 2\nnumero 2 = 3\n\nprint(1numero + numero 2)",
        options=[
            ("Imprime 5 en la consola.", False),
            ("Genera TypeError por intentar sumar variables no tipadas.", False),
            ("Genera SyntaxError (salida inválida) debido a nombres de variables que inician con número y contienen espacios.", True),
            ("Genera NameError en la línea 3 al llamar a print.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 22 (L1, theory)
    exercises.append(make_ex(
        "pcep-s1-022", "Reglas de Nombres de Variables Válidos", "Sintaxis e Identificadores", "Identificadores Válidos", "1.2", "basic", "theory",
        "¿Cuál de los siguientes nombres de variable es VÁLIDO en Python?",
        "Un identificador válido puede contener letras, números y guiones bajos (_), pero debe comenzar con una letra o un guión bajo. `_contador_1` es válido.",
        ["identificadores", "reglas de nombres"], ["teoría", "pcep-1.2", "nivel-1"],
        options=[
            ("2do_puesto", False),
            ("mi-variable", False),
            ("_contador_1", True),
            ("precio total", False),
            ("class", False)
        ]
    ))

    # 23 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-023", "Sensibilidad a Mayúsculas (Case Sensitivity)", "Sintaxis e Identificadores", "Case Sensitivity", "1.2", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "Python distingue entre mayúsculas y minúsculas: 'valor', 'Valor' y 'VALOR' son tres variables totalmente distintas e independientes. valor (10) + Valor (20) = 30.",
        ["case-sensitivity", "variables"], ["pcep-1.2", "nivel-1"],
        code_snippet="valor = 10\nValor = 20\nVALOR = 30\nprint(valor + Valor)",
        expected_output="30"
    ))

    # 24 (L1, theory)
    exercises.append(make_ex(
        "pcep-s1-024", "Sintaxis de Comentarios en Python", "Sintaxis e Identificadores", "Comentarios", "1.2", "basic", "theory",
        "¿Qué carácter se utiliza en Python para iniciar un comentario de una sola línea?",
        "El carácter almohadilla (#) inicia un comentario que se extiende hasta el final de la línea física.",
        ["comentarios", "#"], ["teoría", "pcep-1.2", "nivel-1"],
        options=[
            ("// como en C/Java", False),
            ("/* como en CSS */", False),
            ("# (almohadilla / numeral)", True),
            ("-- como en SQL", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    # 25 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-025", "Comentarios en la Misma Línea", "Sintaxis e Identificadores", "Comentarios inline", "1.2", "basic", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "Todo lo que sigue al carácter '#' en una línea es ignorado completamente por el intérprete de Python.",
        ["comentarios", "inline"], ["pcep-1.2", "nivel-1"],
        code_snippet="x = 5 # x = 10\ny = 2\n# print(x * y)\nprint(x + y)",
        expected_output="7"
    ))

    # 26 (L1, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-026", "Error de Indentación Inesperada", "Sintaxis e Identificadores", "Indentación", "1.2", "basic", "code_analysis",
        "¿Qué error produce el siguiente código al ejecutarse?\n\n```python\na = 1\n  b = 2\nprint(a + b)\n```",
        "Una indentación en el nivel superior (módulo) que no pertenece a ningún bloque de control produce `IndentationError: unexpected indent`.",
        ["IndentationError", "indentación"], ["análisis", "pcep-1.2", "nivel-1"],
        code_snippet="a = 1\n  b = 2\nprint(a + b)",
        options=[
            ("Imprime 3 normalmente.", False),
            ("Lanza IndentationError: unexpected indent.", True),
            ("Lanza TypeError.", False),
            ("Lanza SyntaxError: invalid character.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 27 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-027", "Tipado Dinámico y Reasignación", "Sintaxis e Identificadores", "Tipado Dinámico", "1.2", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "Python tiene tipado dinámico: la variable 'dato' puede contener un entero y posteriormente ser reasignada a una cadena sin errores.",
        ["tipado dinámico", "reasignación"], ["pcep-1.2", "nivel-1"],
        code_snippet="dato = 100\ndato = 'Python'\nprint(dato)",
        expected_output="Python"
    ))

    # 28 (L2, debugging)
    exercises.append(make_ex(
        "pcep-s1-028", "Uso de Guión Medio en Nombre de Variable", "Sintaxis e Identificadores", "Caracteres Inválidos", "1.2", "basic_plus", "debugging",
        "¿Qué ocurre al ejecutar la instrucción `total-cuenta = 150`?",
        "El guión medio (-) es interpretado por Python como el operador aritmético de resta. Python intenta evaluar la resta de 'total' menos 'cuenta', produciendo un SyntaxError de asignación.",
        ["SyntaxError", "operador resta", "identificadores"], ["depuración", "pcep-1.2", "nivel-2"],
        code_snippet="total-cuenta = 150\nprint(total-cuenta)",
        options=[
            ("Asigna 150 a la variable total-cuenta con éxito.", False),
            ("Lanza SyntaxError: cannot assign to expression here (o can't assign to operator).", True),
            ("Lanza NameError: name 'total' is not defined.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 29 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-029", "Asignación Múltiple Encadenada", "Sintaxis e Identificadores", "Asignación Encadenada", "1.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "La asignación encadenada asigna la misma referencia de valor (7) a las variables x, y, z simultáneamente. 7 + 7 + 7 = 21.",
        ["asignación múltiple", "encadenamiento"], ["pcep-1.2", "nivel-2"],
        code_snippet="x = y = z = 7\nprint(x + y + z)",
        expected_output="21"
    ))

    # 30 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-030", "Intercambio Simultáneo de Variables", "Sintaxis e Identificadores", "Desempaquetado de Tuplas", "1.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Python evalúa primero toda la parte derecha (a, b -> 5, 10) y luego asigna a la izquierda (b, a = 5, 10). Así b toma 5 y a toma 10. a - b = 10 - 5 = 5.",
        ["intercambio de variables", "tupla"], ["pcep-1.2", "nivel-2"],
        code_snippet="a = 5\nb = 10\na, b = b, a\nprint(a - b)",
        expected_output="5"
    ))

    # 31 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-031", "Identificadores con Símbolo de Dólar ($)", "Sintaxis e Identificadores", "Caracteres Inválidos: $", "1.2", "basic_plus", "code_analysis",
        "¿Qué ocurre con el siguiente código?\n\n```python\nprecio$ = 25.50\nprint(precio$)\n```",
        "A diferencia de lenguajes como JavaScript o PHP, el carácter '$' no es un carácter permitido en identificadores de Python, produciendo SyntaxError.",
        ["SyntaxError", "símbolo dólar", "caracteres especiales"], ["análisis", "pcep-1.2", "nivel-2"],
        code_snippet="precio$ = 25.50\nprint(precio$)",
        options=[
            ("Imprime 25.50 normalmente.", False),
            ("Lanza SyntaxError: invalid character '$\'.", True),
            ("Lanza ValueError.", False),
            ("Lanza NameError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 32 (L2, theory)
    exercises.append(make_ex(
        "pcep-s1-032", "Guiones Bajos Iniciales y Finales", "Sintaxis e Identificadores", "Convenciones PEP 8", "1.2", "basic_plus", "theory",
        "¿Cuál es el significado convencional de una variable nombrada con un solo guión bajo inicial como `_variable`?",
        "En la convención PEP 8, un guión bajo inicial sugiere que el atributo o variable es para uso interno/privado del módulo o clase.",
        ["convenciones", "PEP 8", "guión bajo"], ["teoría", "pcep-1.2", "nivel-2"],
        options=[
            ("Indica que la variable es una constante inmutable protegida por el sistema.", False),
            ("Es una convención que sugiere que la variable es para uso interno / privado.", True),
            ("Hace que Python borre la variable inmediatamente al salir de la función.", False),
            ("Es un error sintáctico; no se permite iniciar con guión bajo.", False)
        ]
    ))

    # 33 (L2, code_completion)
    exercises.append(make_ex(
        "pcep-s1-033", "Corrección de Bloque Indentado", "Sintaxis e Identificadores", "Indentación Requerida", "1.2", "basic_plus", "code_completion",
        "Completa con la indentación estándar de 4 espacios y la palabra clave necesaria para que el bloque `if` sea válido:",
        "Cuando un bloque condicional no tiene instrucciones, se debe indentar (típicamente 4 espacios) y colocar 'pass'.",
        ["indentación", "pass"], ["completar", "pcep-1.2", "nivel-2"],
        starter_code="condicion = True\nif condicion:\n____",
        acceptable=["    pass", "pass"],
        expected_output=""
    ))

    # 34 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-034", "Variable de Nombre con Solo Guión Bajo (_)", "Sintaxis e Identificadores", "Identificador _", "1.2", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "Un solo guión bajo (_) es un identificador completamente válido en Python, utilizado comúnmente como variable temporal o de descarte.",
        ["identificador _", "variables válidas"], ["pcep-1.2", "nivel-2"],
        code_snippet="_ = 100\n_ = _ + 50\nprint(_)",
        expected_output="150"
    ))

    # 35 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-035", "Mezcla de Espacios y Tabulaciones", "Sintaxis e Identificadores", "TabError", "1.2", "intermediate", "code_analysis",
        "¿Qué error específico lanza Python 3 si se mezclan tabulaciones y espacios para indentar en el mismo bloque de código?",
        "Python 3 prohíbe mezclar tabulaciones y espacios en un mismo nivel de indentación, produciendo `TabError: inconsistent use of tabs and spaces in indentation`.",
        ["TabError", "indentación", "espacios y tabs"], ["análisis", "pcep-1.2", "nivel-3"],
        options=[
            ("IndentationError general sin más detalles.", False),
            ("TabError: inconsistent use of tabs and spaces in indentation.", True),
            ("SyntaxError: invalid token.", False),
            ("Warning únicamente; el código corre convirtiendo tabs a 8 espacios.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 36 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-036", "Identificadores Unicode en Python 3", "Sintaxis e Identificadores", "Unicode Identifiers", "1.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código en Python 3?",
        "Python 3 soporta identificadores con caracteres Unicode (como letras con acentos o la letra eñe 'año'). año = 2026, año + 1 = 2027.",
        ["unicode", "identificadores"], ["pcep-1.2", "nivel-3"],
        code_snippet="año = 2026\nprint(año + 1)",
        expected_output="2027"
    ))

    # 37 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-037", "Continuación de Línea Explícita con Barra Invertida", "Sintaxis e Identificadores", "Line Continuation", "1.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "La barra invertida (\\) al final de una línea física indica continuación de línea explícita. 1 + 2 + 3 = 6.",
        ["continuación de línea", "\\"], ["pcep-1.2", "nivel-3"],
        code_snippet="total = 1 + \\\n        2 + \\\n        3\nprint(total)",
        expected_output="6"
    ))

    # 38 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-038", "Espacio tras Barra Invertida de Continuación", "Sintaxis e Identificadores", "SyntaxError en \\", "1.2", "intermediate", "code_analysis",
        "Si hay un espacio en blanco después de la barra invertida `\\ ` al final de la línea antes del salto de línea, ¿qué ocurre?",
        "Si existe algún carácter (incluyendo espacios en blanco) después de la barra invertida antes del salto de línea, Python lanza `SyntaxError: unexpected character after line continuation character`.",
        ["SyntaxError", "line continuation", "\\"], ["análisis", "pcep-1.2", "nivel-3"],
        options=[
            ("Python ignora el espacio y continúa la línea normalmente.", False),
            ("Genera SyntaxError: unexpected character after line continuation character.", True),
            ("Genera IndentationError.", False),
            ("Genera RuntimeWarning.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 39 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-039", "Separadores Numéricos con Guión Bajo", "Sintaxis e Identificadores", "Literales Numéricos", "1.2", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código en Python 3?",
        "Desde Python 3.6 se permite usar guiones bajos (_) como separadores visuales en literales numéricos. Son ignorados por el intérprete: 1_000_000 + 500 = 1000500.",
        ["literales", "guión bajo", "separador numérico"], ["pcep-1.2", "nivel-3"],
        code_snippet="monto = 1_000_000\nprint(monto + 500)",
        expected_output="1000500"
    ))

    # 40 (L3, debugging)
    exercises.append(make_ex(
        "pcep-s1-040", "Separador numérico mal posicionado", "Sintaxis e Identificadores", "Errores en Literales", "1.2", "intermediate", "code_analysis",
        "¿Qué ocurre con el siguiente código?\n\n```python\nx = _100\nprint(x)\n```",
        "_100 no es un literal numérico con guión bajo; es interpretado como el nombre de una variable. Al no estar definida previamente, se lanza `NameError: name '_100' is not defined`.",
        ["NameError", "identificador vs literal"], ["análisis", "pcep-1.2", "nivel-3"],
        code_snippet="x = _100\nprint(x)",
        options=[
            ("Imprime 100.", False),
            ("Lanza NameError: name '_100' is not defined.", True),
            ("Lanza SyntaxError: invalid decimal literal.", False),
            ("Lanza TypeError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # =========================================================================
    # OBJETIVO 1.3: Literales y Tipos de Datos (041 - 060)
    # =========================================================================

    # 41 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-041", "Literal Binario", "Literales y Tipos", "Bases Numéricas", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El prefijo `0b` indica un número en base binaria: 1*(2^3) + 0*(2^2) + 1*(2^1) + 1*(2^0) = 8 + 0 + 2 + 1 = 11.",
        ["binario", "0b", "literales enteros"], ["pcep-1.3", "nivel-1"],
        code_snippet="print(0b1011)",
        expected_output="11"
    ))

    # 42 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-042", "Literal Octal", "Literales y Tipos", "Bases Numéricas", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El prefijo `0o` indica un número octal (base 8): 1*8 + 7 = 15.",
        ["octal", "0o", "literales enteros"], ["pcep-1.3", "nivel-1"],
        code_snippet="print(0o17)",
        expected_output="15"
    ))

    # 43 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-043", "Literal Hexadecimal", "Literales y Tipos", "Bases Numéricas", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El prefijo `0x` indica un número hexadecimal (base 16): 1*16 + 15 (F) = 31.",
        ["hexadecimal", "0x", "literales enteros"], ["pcep-1.3", "nivel-1"],
        code_snippet="print(0x1F)",
        expected_output="31"
    ))

    # 44 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-044", "Notación Científica (Exponente)", "Literales y Tipos", "Punto Flotante", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "La notación científica con 'e' siempre produce un número de tipo float: 3 * 10^2 = 300.0.",
        ["float", "notación científica", "exponente"], ["pcep-1.3", "nivel-1"],
        code_snippet="print(3e2)",
        expected_output="300.0"
    ))

    # 45 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-045", "Notación Científica Negativa", "Literales y Tipos", "Punto Flotante", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "1e-3 equivale a 1 * 10^(-3) = 0.001 en formato float.",
        ["float", "notación científica"], ["pcep-1.3", "nivel-1"],
        code_snippet="print(1e-3)",
        expected_output="0.001"
    ))

    # 46 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-046", "Secuencia de Escape: Salto de Línea", "Literales y Tipos", "Cadenas y Escapes", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "La secuencia `\\n` representa un salto de línea (line feed) dentro de la cadena.",
        ["escape", "\\n", "cadenas"], ["pcep-1.3", "nivel-1"],
        code_snippet="print('Hola\\nMundo')",
        expected_output="Hola\nMundo"
    ))

    # 47 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-047", "Secuencia de Escape: Barra Invertida", "Literales y Tipos", "Cadenas y Escapes", "1.3", "basic", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "`\\\\` escapa la barra invertida para que se imprima un único carácter `\\`.",
        ["escape", "\\\\", "cadenas"], ["pcep-1.3", "nivel-1"],
        code_snippet="print('C:\\\\Python')",
        expected_output="C:\\Python"
    ))

    # 48 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-048", "Equivalencia Aritmética de Booleans", "Literales y Tipos", "Booleans como Enteros", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "En Python, bool es subclase de int: True equivale a 1 y False a 0. True + True + False = 1 + 1 + 0 = 2.",
        ["bool", "True", "False", "int"], ["pcep-1.3", "nivel-2"],
        code_snippet="print(True + True + False)",
        expected_output="2"
    ))

    # 49 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-049", "Multiplicación de Booleano por Entero", "Literales y Tipos", "Booleans en Operaciones", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida?",
        "True equivale a 1. 1 * 50 = 50.",
        ["bool", "aritmética"], ["pcep-1.3", "nivel-2"],
        code_snippet="x = True * 50\nprint(x)",
        expected_output="50"
    ))

    # 50 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-050", "Conversión bool de Cadenas", "Literales y Tipos", "Truthy y Falsy", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "Cualquier cadena no vacía evalúa a True en bool(), incluso la cadena 'False'. Solo la cadena vacía '' evalúa a False.",
        ["bool", "truthy", "falsy", "cadenas"], ["pcep-1.3", "nivel-2"],
        code_snippet="print(bool('False'))",
        expected_output="True"
    ))

    # 51 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-051", "Conversión bool de Cadena Vacía", "Literales y Tipos", "Truthy y Falsy", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "La cadena vacía '' tiene longitud 0 y evalúa a False.",
        ["bool", "cadena vacía"], ["pcep-1.3", "nivel-2"],
        code_snippet="print(bool(''))",
        expected_output="False"
    ))

    # 52 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-052", "Comillas dentro de Comillas sin Escapar", "Literales y Tipos", "Sintaxis de Strings", "1.3", "basic_plus", "code_analysis",
        "¿Qué ocurre con el siguiente código?\n\n```python\ns = 'It's Python'\nprint(s)\n```",
        "La comilla simple en 'It's cierra la cadena prematuramente, dejando la 's' suelta y provocando SyntaxError.",
        ["SyntaxError", "comillas", "escapado"], ["análisis", "pcep-1.3", "nivel-2"],
        code_snippet="s = 'It's Python'\nprint(s)",
        options=[
            ("Imprime: It's Python", False),
            ("Lanza SyntaxError por comilla no escapada.", True),
            ("Lanza ValueError.", False),
            ("Imprime: It", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 53 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-053", "Comillas Dobles que Contienen Simples", "Literales y Tipos", "Comillas en Strings", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Una cadena delimitada por comillas dobles puede contener comillas simples directamente sin necesidad de escaparlas con barra invertida.",
        ["strings", "comillas simples", "comillas dobles"], ["pcep-1.3", "nivel-2"],
        code_snippet="s = \"It's easy\"\nprint(s)",
        expected_output="It's easy"
    ))

    # 54 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-054", "Comillas Triples Multilínea", "Literales y Tipos", "Strings Triples", "1.3", "basic_plus", "output_prediction",
        "¿Cuál es la longitud exacta de la cadena `'''A\\nB'''`?",
        "'A' (1) + '\\n' (1) + 'B' (1) = 3 caracteres.",
        ["len", "cadenas triples", "\\n"], ["pcep-1.3", "nivel-2"],
        code_snippet="s = '''A\nB'''\nprint(len(s))",
        expected_output="3"
    ))

    # 55 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-055", "Tipo del Resultado de División /", "Literales y Tipos", "Tipo Float en División", "1.3", "intermediate", "output_prediction",
        "¿Cuál es el tipo de dato devuelto por la expresión `type(10 / 2)`?",
        "En Python 3, el operador de división verdadera '/' SIEMPRE devuelve un valor de tipo float, incluso si los operandos son enteros y el resultado es exacto.",
        ["float", "type", "división"], ["pcep-1.3", "nivel-3"],
        code_snippet="print(type(10 / 2) is float)",
        expected_output="True"
    ))

    # 56 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-056", "Cero Inicial en Enteros en Python 3", "Literales y Tipos", "Prefijo de Base Obsoleto", "1.3", "intermediate", "code_analysis",
        "¿Qué ocurre si ejecutamos `x = 017` en Python 3?",
        "En Python 3 los ceros iniciales en enteros decimales están prohibidos para evitar confusión con el antiguo formato octal de Python 2. Se debe usar `0o17`.",
        ["SyntaxError", "ceros iniciales", "octal"], ["análisis", "pcep-1.3", "nivel-3"],
        code_snippet="x = 017\nprint(x)",
        options=[
            ("Imprime 17 como decimal.", False),
            ("Imprime 15 como octal.", False),
            ("Lanza SyntaxError: leading zeros in decimal integer literals are not permitted.", True),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 57 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-057", "Secuencia de Escape: Retorno de Carro (\\r)", "Literales y Tipos", "Escapes Avanzados: \\r", "1.3", "intermediate", "output_prediction",
        "¿Cuál es la longitud de la cadena `'\\r\\t\\n'`?",
        "Cada secuencia de escape de dos caracteres (`\\r`, `\\t`, `\\n`) representa un único byte/carácter especial en memoria. 1 + 1 + 1 = 3.",
        ["len", "escapes", "\\r", "\\t", "\\n"], ["pcep-1.3", "nivel-3"],
        code_snippet="s = '\\r\\t\\n'\nprint(len(s))",
        expected_output="3"
    ))

    # 58 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-058", "Concatenación Implícita de Literales de Cadena", "Literales y Tipos", "String Literal Concatenation", "1.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Dos literales de cadena contiguos separados únicamente por espacios en blanco son concatenados automáticamente por el analizador sintáctico en una sola cadena.",
        ["concatenación implícita", "literales"], ["pcep-1.3", "nivel-3"],
        code_snippet="s = 'Py' 'thon'\nprint(s)",
        expected_output="Python"
    ))

    # 59 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-059", "Cero Flotante Negativo y Positivo", "Literales y Tipos", "IEEE 754 Floats", "1.3", "intermediate", "output_prediction",
        "¿Cuál es la salida de evaluar `-0.0 == 0.0` en Python?",
        "Bajo el estándar IEEE 754 de punto flotante que usa Python, el cero negativo y el cero positivo son numéricamente iguales.",
        ["float", "IEEE 754", "0.0"], ["pcep-1.3", "nivel-3"],
        code_snippet="print(-0.0 == 0.0)",
        expected_output="True"
    ))

    # 60 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-060", "Tipo de dato de None", "Literales y Tipos", "NoneType", "1.3", "intermediate", "output_prediction",
        "¿Cuál es el nombre del tipo de dato del valor `None`?",
        "type(None) es `<class 'NoneType'>`.",
        ["NoneType", "None", "type"], ["pcep-1.3", "nivel-3"],
        code_snippet="print(type(None).__name__)",
        expected_output="NoneType"
    ))

    # =========================================================================
    # OBJETIVO 1.4: Operadores Numéricos y Precedencia (061 - 080)
    # =========================================================================

    # 61 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-061", "División Entera Positiva", "Operadores Numéricos", "Floor Division", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El operador `//` efectúa una división entera truncando hacia abajo: 7 // 2 = 3.",
        ["//", "floor division"], ["pcep-1.4", "nivel-1"],
        code_snippet="print(7 // 2)",
        expected_output="3"
    ))

    # 62 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-062", "Operador Módulo Positivo", "Operadores Numéricos", "Modulo %", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "El operador `%` calcula el residuo de la división entera: 7 % 2 = 1.",
        ["%", "modulo"], ["pcep-1.4", "nivel-1"],
        code_snippet="print(7 % 2)",
        expected_output="1"
    ))

    # 63 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-063", "División Verdadera con Enteros", "Operadores Numéricos", "División /", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "El operador `/` siempre produce un número float: 6 / 2 = 3.0 (no 3).",
        ["/", "float"], ["pcep-1.4", "nivel-1"],
        code_snippet="print(6 / 2)",
        expected_output="3.0"
    ))

    # 64 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-064", "Operador de Potencia (**)", "Operadores Numéricos", "Potencia **", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "El operador `**` calcula la potencia: 2 ** 4 = 16.",
        ["**", "potencia"], ["pcep-1.4", "nivel-1"],
        code_snippet="print(2 ** 4)",
        expected_output="16"
    ))

    # 65 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-065", "Precedencia de Multiplicación sobre Suma", "Operadores Numéricos", "Precedencia Básica", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "La multiplicación tiene mayor precedencia que la suma: 2 * 3 = 6, y luego 5 + 6 = 11.",
        ["precedencia", "*", "+"], ["pcep-1.4", "nivel-1"],
        code_snippet="print(5 + 2 * 3)",
        expected_output="11"
    ))

    # 66 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-066", "Uso de Paréntesis para Alterar Precedencia", "Operadores Numéricos", "Paréntesis", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Los paréntesis tienen la más alta prioridad: (5 + 2) = 7, luego 7 * 3 = 21.",
        ["paréntesis", "precedencia"], ["pcep-1.4", "nivel-1"],
        code_snippet="print((5 + 2) * 3)",
        expected_output="21"
    ))

    # 67 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-067", "Operador de Asignación Compuesta +=", "Operadores Numéricos", "Asignación Compuesta", "1.4", "basic", "output_prediction",
        "¿Cuál es la salida producida?",
        "x += 3 equivale a x = x + 3. 10 + 3 = 13.",
        ["+=", "asignación compuesta"], ["pcep-1.4", "nivel-1"],
        code_snippet="x = 10\nx += 3\nprint(x)",
        expected_output="13"
    ))

    # 68 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-068", "División Entera con Números Negativos", "Operadores Numéricos", "Floor Division Negativa", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "En Python, `//` siempre redondea hacia el entero inferior más cercano ($-\\infty$). -7 / 2 = -3.5, redondeado hacia abajo da -4.",
        ["//", "floor division negativa", "redondeo a -infinito"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(-7 // 2)",
        expected_output="-4"
    ))

    # 69 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-069", "Módulo con Dividendo Negativo", "Operadores Numéricos", "Módulo con Negativos", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "Por la fórmula canónica de Python `r = a - (a // b) * b`: -7 - (-7 // 2)*2 = -7 - (-4)*2 = -7 + 8 = 1.",
        ["%", "módulo con negativos"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(-7 % 2)",
        expected_output="1"
    ))

    # 70 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-070", "Módulo con Divisor Negativo", "Operadores Numéricos", "Módulo con Divisor Negativo", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "7 // -2 = -4. Luego 7 - (-4 * -2) = 7 - 8 = -1. El signo del resultado en módulo en Python coincide siempre con el divisor (-2).",
        ["%", "divisor negativo"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(7 % -2)",
        expected_output="-1"
    ))

    # 71 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-071", "Asociatividad de Derecha a Izquierda de la Potencia", "Operadores Numéricos", "Asociatividad de **", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "A diferencia de los demás operadores aritméticos, el operador de potencia `**` es asociativo de derecha a izquierda: 2 ** (3 ** 2) = 2 ** 9 = 512 (¡no 64!).",
        ["**", "asociatividad derecha", "potencia"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(2 ** 3 ** 2)",
        expected_output="512"
    ))

    # 72 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-072", "Operador Unario Negativo y Potencia", "Operadores Numéricos", "Precedencia Unario vs **", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "La potencia `**` tiene mayor precedencia que el operador unario negativo `-`. Por tanto, se evalúa como -(2 ** 2) = -4.",
        ["unario", "precedencia", "**"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(-2 ** 2)",
        expected_output="-4"
    ))

    # 73 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-073", "Potencia de Base Negativa con Paréntesis", "Operadores Numéricos", "Paréntesis con Unario", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida?",
        "Los paréntesis fuerzan a que la base sea el número negativo -2: (-2) ** 2 = 4.",
        ["paréntesis", "potencia base negativa"], ["pcep-1.4", "nivel-2"],
        code_snippet="print((-2) ** 2)",
        expected_output="4"
    ))

    # 74 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-074", "Precedencia entre // y *", "Operadores Numéricos", "Misma Precedencia de Izquierda a Derecha", "1.4", "basic_plus", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`//` y `*` tienen la misma precedencia y se evalúan de izquierda a derecha: 10 // 3 = 3, luego 3 * 2 = 6.",
        ["//", "*", "asociatividad izquierda"], ["pcep-1.4", "nivel-2"],
        code_snippet="print(10 // 3 * 2)",
        expected_output="6"
    ))

    # 75 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-075", "División Entera con Operando Flotante", "Operadores Numéricos", "Tipo en Floor Division", "1.4", "intermediate", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "Si al menos un operando en `//` es de tipo float, el resultado es numéricamente entero pero de tipo float: 7.0 // 2 = 3.0.",
        ["//", "float", "coerción"], ["pcep-1.4", "nivel-3"],
        code_snippet="print(7.0 // 2)",
        expected_output="3.0"
    ))

    # 76 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-076", "Módulo con Flotantes", "Operadores Numéricos", "Módulo con Float", "1.4", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "7.5 % 2.5 = 0.0 (tipo float).",
        ["%", "float"], ["pcep-1.4", "nivel-3"],
        code_snippet="print(7.5 % 2.5)",
        expected_output="0.0"
    ))

    # 77 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-077", "División por Cero en Floor Division", "Operadores Numéricos", "ZeroDivisionError", "1.4", "intermediate", "code_analysis",
        "¿Qué excepción produce la expresión `10 // 0`?",
        "Tanto la división `/`, la división entera `//` como el módulo `%` lanzan `ZeroDivisionError: integer division or modulo by zero`.",
        ["ZeroDivisionError", "//", "excepciones"], ["análisis", "pcep-1.4", "nivel-3"],
        code_snippet="print(10 // 0)",
        options=[
            ("Imprime 0.", False),
            ("Imprime Infinity.", False),
            ("Lanza ZeroDivisionError.", True),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 78 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-078", "Asignación Compuesta Multi-Operador", "Operadores Numéricos", "Asignación Compuesta Evaluada", "1.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de este código?",
        "En `x *= 2 + 3`, la parte derecha `2 + 3` se evalúa COMPLETAMENTE antes de aplicar la multiplicación: x *= 5 -> x = 4 * 5 = 20 (no 4*2 + 3 = 11).",
        ["*=", "precedencia en asignación"], ["pcep-1.4", "nivel-3"],
        code_snippet="x = 4\nx *= 2 + 3\nprint(x)",
        expected_output="20"
    ))

    # 79 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-079", "Encadenamiento de Operadores de Comparación", "Operadores Numéricos", "Chained Comparisons", "1.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `1 < 2 < 3 == 3` en Python?",
        "Python encadena comparaciones: se evalúa como `(1 < 2) and (2 < 3) and (3 == 3)`. Las tres condiciones son True, por lo que el resultado es True.",
        ["comparaciones encadenadas", "and"], ["pcep-1.4", "nivel-3"],
        code_snippet="print(1 < 2 < 3 == 3)",
        expected_output="True"
    ))

    # 80 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-080", "Comparación Encadenada con Falsedad Temprana", "Operadores Numéricos", "Chained Comparisons Short-Circuit", "1.4", "intermediate", "output_prediction",
        "¿Cuál es la salida de `3 > 2 > 4 == 4`?",
        "Se evalúa como `(3 > 2) and (2 > 4) and (4 == 4)`. Como `2 > 4` es False, toda la expresión encadenada evalúa a False.",
        ["comparaciones encadenadas", "cortocircuito"], ["pcep-1.4", "nivel-3"],
        code_snippet="print(3 > 2 > 4 == 4)",
        expected_output="False"
    ))

    # =========================================================================
    # OBJETIVO 1.5: Entrada y Salida (print e input) (081 - 100)
    # =========================================================================

    # 81 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-081", "Separador Personalizado con sep=", "Entrada y Salida", "print: sep=", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El argumento con nombre `sep` reemplaza el espacio por defecto con el valor indicado ('-'): 2026-10-12.",
        ["print", "sep="], ["pcep-1.5", "nivel-1"],
        code_snippet="print(2026, 10, 12, sep='-')",
        expected_output="2026-10-12"
    ))

    # 82 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-082", "Fin de Línea Personalizado con end=", "Entrada y Salida", "print: end=", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "`end=' '` sustituye el salto de línea por un espacio, uniendo la salida del segundo print en la misma línea: Hola Mundo.",
        ["print", "end="], ["pcep-1.5", "nivel-1"],
        code_snippet="print('Hola', end=' ')\nprint('Mundo')",
        expected_output="Hola Mundo"
    ))

    # 83 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-083", "sep Vacío (sep='')", "Entrada y Salida", "print: sep=''", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "Con `sep=''`, los argumentos se unen directamente sin ningún espacio separador: Python3.",
        ["print", "sep=''"], ["pcep-1.5", "nivel-1"],
        code_snippet="print('Python', '3', sep='')",
        expected_output="Python3"
    ))

    # 84 (L1, theory)
    exercises.append(make_ex(
        "pcep-s1-084", "Tipo de Dato Devuelto por input()", "Entrada y Salida", "Función input()", "1.5", "basic", "theory",
        "¿Qué tipo de dato retorna SIEMPRE la función estándar incorporada `input()` en Python 3?",
        "En Python 3, la función input() siempre devuelve una cadena de texto (str), sin importar lo que el usuario haya escrito.",
        ["input()", "str", "tipo devuelto"], ["teoría", "pcep-1.5", "nivel-1"],
        options=[
            ("int si el usuario ingresó solo dígitos numéricos.", False),
            ("str en todos los casos sin excepción.", True),
            ("float si contiene un punto decimal.", False),
            ("bool si el usuario escribió 'True' o 'False'.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 85 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-085", "Conversión Explícita con int()", "Entrada y Salida", "Conversión int()", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "int('25') convierte la cadena '25' al número entero 25. 25 + 5 = 30.",
        ["int()", "conversión de tipos"], ["pcep-1.5", "nivel-1"],
        code_snippet="entrada = '25'\nnumero = int(entrada)\nprint(numero + 5)",
        expected_output="30"
    ))

    # 86 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-086", "Conversión Explícita con float()", "Entrada y Salida", "Conversión float()", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "float('10') convierte la cadena al número flotante 10.0.",
        ["float()", "conversión"], ["pcep-1.5", "nivel-1"],
        code_snippet="print(float('10'))",
        expected_output="10.0"
    ))

    # 87 (L1, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-087", "Múltiples Argumentos en print() por Defecto", "Entrada y Salida", "print por defecto", "1.5", "basic", "output_prediction",
        "¿Cuál es la salida de este código?",
        "El separador por defecto de print() entre argumentos es un solo espacio en blanco: 1 2 3.",
        ["print", "espacio por defecto"], ["pcep-1.5", "nivel-1"],
        code_snippet="print(1, 2, 3)",
        expected_output="1 2 3"
    ))

    # 88 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-088", "Combinación de sep y end", "Entrada y Salida", "print: sep y end combinados", "1.5", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "Línea 1 imprime: A*B*C#. Línea 2 imprime: D. Salida concatenada: A*B*C#D.",
        ["sep=", "end=", "combinación"], ["pcep-1.5", "nivel-2"],
        code_snippet="print('A', 'B', 'C', sep='*', end='#')\nprint('D')",
        expected_output="A*B*C#D"
    ))

    # 89 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-089", "Concatenación de input sin Convertir", "Entrada y Salida", "input() sin conversión", "1.5", "basic_plus", "code_analysis",
        "Supón que el usuario ingresa '10' en el primer input y '20' en el segundo:\n\n```python\na = input()\nb = input()\nprint(a + b)\n```\n¿Qué se imprimirá?",
        "Como input() devuelve cadenas, el operador `+` realiza concatenación de texto, no suma aritmética: '10' + '20' = '1020'.",
        ["input()", "concatenación", "str"], ["análisis", "pcep-1.5", "nivel-2"],
        options=[
            ("30", False),
            ("1020", True),
            ("TypeError", False),
            ("10 20", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    # 90 (L2, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-090", "Conversión de Float en String a int() Directo", "Entrada y Salida", "ValueError en int()", "1.5", "basic_plus", "code_analysis",
        "¿Qué ocurre si ejecutamos `x = int('3.14')`?",
        "int() no puede convertir directamente una cadena con punto decimal. Lanza `ValueError: invalid literal for int() with base 10: '3.14'`. Para lograrlo se debe hacer `int(float('3.14'))`.",
        ["ValueError", "int()", "conversión"], ["análisis", "pcep-1.5", "nivel-2"],
        code_snippet="x = int('3.14')\nprint(x)",
        options=[
            ("x toma el valor 3 (truncando los decimales).", False),
            ("Lanza ValueError: invalid literal for int().", True),
            ("Lanza TypeError.", False),
            ("x toma el valor 3.14.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 91 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-091", "Conversión de Float en Cadena vía float() a int()", "Entrada y Salida", "Conversión en Dos Pasos", "1.5", "basic_plus", "output_prediction",
        "¿Cuál es la salida de este código?",
        "float('3.99') produce 3.99, y luego int(3.99) trunca la parte decimal produciendo el entero 3.",
        ["int()", "float()", "truncamiento"], ["pcep-1.5", "nivel-2"],
        code_snippet="x = int(float('3.99'))\nprint(x)",
        expected_output="3"
    ))

    # 92 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-092", "print() sin Argumentos", "Entrada y Salida", "print() vacío", "1.5", "basic_plus", "output_prediction",
        "¿Qué imprime exactamente una llamada a `print()` sin argumentos?",
        "print() sin argumentos imprime únicamente el carácter de fin de línea por defecto (`\\n`), es decir, una línea en blanco.",
        ["print()", "salto de línea"], ["pcep-1.5", "nivel-2"],
        code_snippet="print('A')\nprint()\nprint('B')",
        expected_output="A\n\nB"
    ))

    # 93 (L2, code_completion)
    exercises.append(make_ex(
        "pcep-s1-093", "Parámetro sep para Formato de Fecha", "Entrada y Salida", "sep= en print", "1.5", "basic_plus", "code_completion",
        "Completa con el argumento con nombre necesario para que la fecha se imprima separada por barras '12/10/2026':",
        "El argumento con nombre es `sep='/'`.",
        ["sep=", "argumento con nombre"], ["completar", "pcep-1.5", "nivel-2"],
        starter_code="print('12', '10', '2026', ____)",
        acceptable=["sep='/'", "sep=\"/\""],
        expected_output="12/10/2026"
    ))

    # 94 (L2, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-094", "Conversión de Entero a Cadena con str()", "Entrada y Salida", "Función str()", "1.5", "basic_plus", "output_prediction",
        "¿Cuál es la salida del siguiente código?",
        "str(5) convierte el número al texto '5'. Al sumar '5' + '5' se concatenan dando '55'.",
        ["str()", "concatenación"], ["pcep-1.5", "nivel-2"],
        code_snippet="a = 5\nb = str(a) + str(a)\nprint(b)",
        expected_output="55"
    ))

    # 95 (L3, code_analysis)
    exercises.append(make_ex(
        "pcep-s1-095", "Argumento Posicional Después de sep con Nombre", "Entrada y Salida", "Sintaxis de Argumentos en print", "1.5", "intermediate", "code_analysis",
        "¿Qué ocurre con el siguiente código?\n\n```python\nprint('A', sep='-', 'B')\n```",
        "En la sintaxis de llamadas de funciones en Python, los argumentos posicionales NO pueden ir después de argumentos con nombre (keyword arguments). Lanza `SyntaxError: positional argument follows keyword argument`.",
        ["SyntaxError", "keyword argument", "posicional"], ["análisis", "pcep-1.5", "nivel-3"],
        code_snippet="print('A', sep='-', 'B')",
        options=[
            ("Imprime: A-B", False),
            ("Lanza SyntaxError: positional argument follows keyword argument.", True),
            ("Lanza TypeError.", False),
            ("Imprime: A B", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 96 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-096", "sep aplicado con un solo argumento", "Entrada y Salida", "sep con único argumento", "1.5", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "El argumento `sep` solo se inserta ENTRE múltiples argumentos. Si se le pasa un solo argumento a print(), `sep` no tiene ningún efecto: se imprime simplemente 'Hola'.",
        ["print", "sep=", "un solo argumento"], ["pcep-1.5", "nivel-3"],
        code_snippet="print('Hola', sep='---')",
        expected_output="Hola"
    ))

    # 97 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-097", "Argumento end= None", "Entrada y Salida", "end=None", "1.5", "intermediate", "output_prediction",
        "¿Qué ocurre si se pasa explícitamente `end=None` a print()?",
        "En la especificación de `print(*objects, sep=' ', end='\\n')`, pasar `None` restaura el comportamiento por defecto (`\\n`).",
        ["print", "end=None"], ["pcep-1.5", "nivel-3"],
        code_snippet="print('Línea 1', end=None)\nprint('Línea 2')",
        expected_output="Línea 1\nLínea 2"
    ))

    # 98 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-098", "Replicación de Cadena en print", "Entrada y Salida", "Operador * con Cadenas", "1.5", "intermediate", "output_prediction",
        "¿Cuál es la salida producida en la consola?",
        "El operador `*` entre una cadena y un entero replica la cadena: 'Ha' * 3 = 'HaHaHa'.",
        ["*", "replicación de cadenas"], ["pcep-1.5", "nivel-3"],
        code_snippet="print('Ha' * 3)",
        expected_output="HaHaHa"
    ))

    # 99 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-099", "Replicación con Entero Cero o Negativo", "Entrada y Salida", "Replicación Nula", "1.5", "intermediate", "output_prediction",
        "¿Cuál es la longitud de la cadena producida por `'Python' * -2`?",
        "Replicar una cadena por un entero menor o igual a 0 produce siempre una cadena vacía `''`, cuya longitud es 0.",
        ["*", "cadena vacía", "len"], ["pcep-1.5", "nivel-3"],
        code_snippet="s = 'Python' * -2\nprint(len(s))",
        expected_output="0"
    ))

    # 100 (L3, output_prediction)
    exercises.append(make_ex(
        "pcep-s1-100", "Conversión de Booleanos a Cadena en Concatenación", "Entrada y Salida", "TypeError en Concatenación", "1.5", "intermediate", "code_analysis",
        "¿Qué ocurre al ejecutar `print('Resultado: ' + True)`?",
        "Python no convierte automáticamente booleanos a cadenas al usar `+`. Intentar concatenar str con bool lanza `TypeError: can only concatenate str (not 'bool') to str`.",
        ["TypeError", "concatenación", "tipado fuerte"], ["análisis", "pcep-1.5", "nivel-3"],
        code_snippet="print('Resultado: ' + True)",
        options=[
            ("Imprime: Resultado: True", False),
            ("Imprime: Resultado: 1", False),
            ("Lanza TypeError: can only concatenate str (not 'bool') to str.", True),
            ("Lanza ValueError.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    return exercises

if __name__ == "__main__":
    exs = build_all_section1()
    print(f"Total exercises generated for Section 1: {len(exs)}")
    
    # Escribir el archivo TypeScript
    ts_code = "import { Exercise } from '../../types';\n\n"
    ts_code += "export const SECTION_1_EXERCISES: Exercise[] = "
    ts_code += json.dumps(exs, ensure_ascii=False, indent=2)
    ts_code += ";\n"
    
    with open("src/data/exercises/section1.ts", "w", encoding="utf-8") as f:
        f.write(ts_code)
    print("Successfully wrote src/data/exercises/section1.ts!")

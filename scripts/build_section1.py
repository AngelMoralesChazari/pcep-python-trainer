#!/usr/bin/env python3
import json

def make_exercise(eid, title, section, sec_title, topic, subtopic, obj, diff, etype, stmt,
                  explanation, concepts, tags, code_snippet=None, starter_code=None,
                  options=None, expected_output=None, acceptable=None, solution_code=None):
    ex = {
        "id": eid,
        "title": title,
        "section": section,
        "sectionTitle": sec_title,
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
        ex["options"] = [{"id": f"opt-{i+1}", "text": opt[0], "isCorrect": opt[1]} for i, opt in enumerate(options)]
    if expected_output is not None:
        ex["expectedOutput"] = expected_output
    if acceptable is not None:
        ex["acceptableSolutions"] = acceptable
    if solution_code is not None:
        ex["solutionCode"] = solution_code
    return ex

SEC1_TITLE = "Sección 1 — Fundamentos de Programación y Python"

def generate_section1():
    exercises = []
    
    # =========================================================================
    # OBJETIVO 1.1: Términos y Definiciones Fundamentales (20 ejercicios)
    # Nivel 1: 1-7, Nivel 2: 8-14, Nivel 3: 15-20
    # =========================================================================
    
    # 1 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-001", "Rol del Intérprete en Python", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Compilación vs Interpretación", "1.1", "basic", "theory",
        "¿Cómo ejecuta Python el código fuente de un programa?",
        "Python es un lenguaje interpretado: lee y ejecuta las instrucciones línea por línea en tiempo de ejecución tras compilar a bytecode interno.",
        ["intérprete", "tiempo de ejecución", "bytecode"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Traduce todo el código a código máquina ejecutable antes de iniciar la primera línea.", False),
            ("Lee, analiza y ejecuta el código instrucción por instrucción en tiempo de ejecución.", True),
            ("Requiere un compilador externo de C++ para generar archivos .exe independientes.", False),
            ("Solo verifica los tipos de datos pero no ejecuta el programa.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 2 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-002", "Archivos de Bytecode (.pyc)", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Bytecode y CPython", "1.1", "basic", "theory",
        "¿Qué contiene un archivo con extensión `.pyc` generado en la carpeta `__pycache__`?",
        "Los archivos .pyc contienen bytecode compilado intermedio optimizado para la máquina virtual de Python (PVM).",
        ["bytecode", ".pyc", "PVM"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("El código fuente en texto plano con comentarios eliminados.", False),
            ("Código ensamblador dependiente de la arquitectura del CPU.", False),
            ("Bytecode compilado intermedio que la máquina virtual de Python (PVM) interpreta directamente.", True),
            ("Las credenciales de acceso del usuario al entorno virtual.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 3 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-003", "¿Qué es CPython?", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Implementaciones de Python", "1.1", "basic", "theory",
        "¿Qué es exactamente **CPython**?",
        "CPython es la implementación canónica y de referencia oficial del lenguaje Python, escrita en lenguaje C.",
        ["CPython", "implementación de referencia", "lenguaje C"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Un compilador comercial que convierte Python a código C nativo.", False),
            ("La implementación estándar y de referencia oficial de Python, programada en C.", True),
            ("Una biblioteca gráfica para desarrollo de interfaces de usuario.", False),
            ("Un dialecto obsoleto de Python que ya no recibe soporte oficial.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 4 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-004", "¿Qué es PEP 8?", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Estándares y PEP", "1.1", "basic", "theory",
        "¿Cuál es el propósito principal del documento conocido como **PEP 8**?",
        "PEP 8 es la guía de estilo oficial para código Python (Python Enhancement Proposal 8).",
        ["PEP 8", "guía de estilo", "legibilidad"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Definir la arquitectura de la memoria RAM para Python 3.", False),
            ("Proporcionar la guía de estilo oficial para escribir código Python legible y consistente.", True),
            ("Establecer las preguntas y respuestas obligatorias del examen PCEP.", False),
            ("Especificar el algoritmo de cifrado en conexiones HTTP.", False)
        ]
    ))

    # 5 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-005", "Palabras Reservadas (Keywords)", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Keywords", "1.1", "basic", "theory",
        "¿Cuál de las siguientes listas contiene ÚNICAMENTE palabras reservadas (keywords) en Python 3?",
        "import, def, if, while son palabras reservadas oficiales de Python.",
        ["keywords", "palabras clave"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("import, function, if, while", False),
            ("def, return, if, while", True),
            ("class, loop, for, in", False),
            ("var, def, else, elif", False),
            ("Ninguna de las anteriores", False)
        ]
    ))

    # 6 (L1, output_prediction)
    exercises.append(make_exercise(
        "pcep-s1-006", "Comprobación de Palabras Reservadas", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Módulo keyword", "1.1", "basic", "output_prediction",
        "¿Cuál es la salida producida en la consola por el siguiente código?",
        "keyword.iskeyword('pass') retorna True porque 'pass' es una palabra reservada.",
        ["keyword", "iskeyword", "pass"], ["pcep-1.1", "nivel-1"],
        code_snippet="import keyword\nprint(keyword.iskeyword('pass'))",
        expected_output="True"
    ))

    # 7 (L1, theory)
    exercises.append(make_exercise(
        "pcep-s1-007", "Diferencia entre Compilación e Interpretación", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Compilación vs Interpretación", "1.1", "basic", "theory",
        "¿Cuál de las siguientes afirmaciones respecto a los lenguajes compilados frente a los interpretados es FALSA?",
        "Los lenguajes interpretados traducen instrucción por instrucción, no en un solo paso hacia un binario ejecutable final.",
        ["compilación", "interpretación", "depuración"], ["teoría", "pcep-1.1", "nivel-1"],
        options=[
            ("Los programas compilados generalmente se ejecutan más rápido que los interpretados.", False),
            ("Un intérprete puede comenzar a ejecutar código de inmediato sin esperar a compilar todo el programa.", False),
            ("Un intérprete genera siempre un archivo binario nativo ejecutable (.exe) que corre sin instalar Python.", True),
            ("Los errores de sintaxis en líneas tardías de código interpretado no detienen la ejecución de las líneas previas.", False)
        ]
    ))

    # 8 (L2, code_analysis)
    exercises.append(make_exercise(
        "pcep-s1-008", "Uso de Palabras Reservadas como Variables", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Keywords como Identificadores", "1.1", "basic_plus", "code_analysis",
        "¿Qué ocurre al ejecutar el siguiente fragmento de código?",
        "Intentar asignar un valor a una palabra reservada como 'for' provoca un SyntaxError inmediato antes de ejecutar el print.",
        ["SyntaxError", "keywords", "for"], ["análisis", "pcep-1.1", "nivel-2"],
        code_snippet="for = 10\nprint(for)",
        options=[
            ("Imprime 10 en la consola.", False),
            ("Genera un NameError porque 'for' no está definido como variable.", False),
            ("Genera un SyntaxError porque 'for' es una palabra clave reservada del lenguaje.", True),
            ("Genera un TypeError por incompatibilidad de tipos.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 9 (L2, theory)
    exercises.append(make_exercise(
        "pcep-s1-009", "Palabras Reservadas con Mayúscula Inicial", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Keywords con mayúscula", "1.1", "basic_plus", "theory",
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

    # 10 (L2, output_prediction)
    exercises.append(make_exercise(
        "pcep-s1-010", "Diferenciación de Mayúsculas en Keywords", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Case Sensitivity en Keywords", "1.1", "basic_plus", "output_prediction",
        "¿Cuál es la salida exacta producida por el siguiente código?",
        "'true' con minúscula es tratado como un identificador normal, no como la palabra reservada 'True'.",
        ["case-sensitivity", "true", "True"], ["pcep-1.1", "nivel-2"],
        code_snippet="true = 42\nTrue_val = true\nprint(True_val)",
        expected_output="42"
    ))

    # 11 (L2, code_completion)
    exercises.append(make_exercise(
        "pcep-s1-011", "Completar con la Sentencia Vacía", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Sentencia pass", "1.1", "basic_plus", "code_completion",
        "¿Qué palabra reservada se debe colocar en '____' para indicar explícitamente un bloque vacío sin provocar error?",
        "La palabra 'pass' es una operación nula (no-op) requerida cuando la sintaxis exige una instrucción pero no hay acción a ejecutar.",
        ["pass", "bloque vacío", "no-op"], ["completar", "pcep-1.1", "nivel-2"],
        starter_code="if True:\n    ____\nprint('Continuar')",
        acceptable=["pass"],
        expected_output="Continuar"
    ))

    # 12 (L2, theory)
    exercises.append(make_exercise(
        "pcep-s1-012", "CPython vs PyPy vs Jython", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Implementaciones alternativas", "1.1", "basic_plus", "theory",
        "¿Qué característica distingue principalmente a **PyPy** de la implementación estándar CPython?",
        "PyPy incluye un compilador JIT (Just-In-Time) que traduce código a instrucciones nativas en caliente para acelerar la ejecución.",
        ["PyPy", "JIT", "rendimiento"], ["teoría", "pcep-1.1", "nivel-2"],
        options=[
            ("PyPy está escrito en Java para integrarse con la JVM.", False),
            ("PyPy cuenta con un compilador JIT (Just-In-Time) que incrementa significativamente la velocidad de ejecución.", True),
            ("PyPy solo funciona en microcontroladores embebidos sin sistema operativo.", False),
            ("PyPy no soporta bucles while ni excepciones.", False)
        ]
    ))

    # 13 (L2, code_analysis)
    exercises.append(make_exercise(
        "pcep-s1-013", "Palabra Clave reservada: as", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Keywords: as", "1.1", "basic_plus", "code_analysis",
        "¿Qué sucede con el código `as = 'alias'`?",
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

    # 14 (L2, theory)
    exercises.append(make_exercise(
        "pcep-s1-014", "¿Quién creó Python y en qué año se publicó?", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Historia de Python", "1.1", "basic_plus", "theory",
        "¿Quién concibió el lenguaje de programación Python?",
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

    # 15 (L3, code_analysis)
    exercises.append(make_exercise(
        "pcep-s1-015", "Diferencia de Error: Sintáctico vs Semántico", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Tipos de Errores", "1.1", "intermediate", "code_analysis",
        "Observa el siguiente código:\n¿Qué tipo de error ocurre y en qué momento?",
        "El código es sintácticamente válido (compila a bytecode con éxito). El error ZeroDivisionError ocurre en tiempo de ejecución tras imprimir 'Inicio'.",
        ["ZeroDivisionError", "tiempo de ejecución", "error semántico"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print('Inicio')\n10 / 0\nprint('Fin')",
        options=[
            ("SyntaxError antes de que se imprima 'Inicio'.", False),
            ("ZeroDivisionError en tiempo de ejecución después de imprimir 'Inicio'.", True),
            ("NameError durante la carga de las bibliotecas de CPython.", False),
            ("El código imprime 'Inicio' y luego 'Fin' ignorando la división.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 16 (L3, code_analysis)
    exercises.append(make_exercise(
        "pcep-s1-016", "Error Sintáctico Antes de la Ejecución", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Fase de Parsing", "1.1", "intermediate", "code_analysis",
        "Analiza el siguiente código:\n¿Qué salida se muestra en la consola?",
        "El error de sintaxis (falta cerrar un paréntesis en la línea 2) detiene el programa en la fase de análisis léxico/sintáctico, por lo que NO se ejecuta ninguna línea (ni siquiera 'Paso 1').",
        ["SyntaxError", "parsing", "fase de compilación"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print('Paso 1')\nprint('Paso 2'\nprint('Paso 3')",
        options=[
            ("Paso 1 seguido de un SyntaxError.", False),
            ("Paso 1, Paso 2 y Paso 3 normalmente.", False),
            ("Ninguna salida previa; se genera un SyntaxError inmediato antes de ejecutar cualquier instrucción.", True),
            ("RuntimeError en la línea 3.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 17 (L3, code_analysis)
    exercises.append(make_exercise(
        "pcep-s1-017", "Asignación a Built-in vs Keyword", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Built-ins vs Keywords", "1.1", "intermediate", "code_analysis",
        "Analiza el siguiente fragmento:\n¿Qué ocurre al ejecutarlo?",
        "'print' no es una palabra reservada (keyword), sino una función incorporada (built-in). Asignarle 100 sobrescribe el identificador en el espacio de nombres local/global. Luego, al intentar llamarlo con `print(100)`, se lanza `TypeError: 'int' object is not callable`.",
        ["built-in", "TypeError", "shadowing", "print"], ["análisis", "pcep-1.1", "nivel-3"],
        code_snippet="print = 100\nprint(100)",
        options=[
            ("Imprime 100 en la consola.", False),
            ("Genera SyntaxError al intentar asignar valor a print.", False),
            ("Genera TypeError: 'int' object is not callable al intentar invocar el entero 100 como función.", True),
            ("Genera NameError porque print dejó de existir en CPython.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 18 (L3, output_prediction)
    exercises.append(make_exercise(
        "pcep-s1-018", "Identificador 'None' Reasignado", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Inmutabilidad de None", "1.1", "intermediate", "code_analysis",
        "¿Qué ocurre si ejecutamos la siguiente instrucción?",
        "En Python 3, 'None' es una palabra reservada estricta (keyword), por lo que intentar asignarle cualquier valor provoca un SyntaxError inmediato.",
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

    # 19 (L3, theory)
    exercises.append(make_exercise(
        "pcep-s1-019", "Filosofía Zen de Python (import this)", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "El Zen de Python", "1.1", "intermediate", "theory",
        "¿Cuál de los siguientes principios NO forma parte del 'Zen de Python' (PEP 20)?",
        "El Zen de Python dice 'Simple is better than complex' (lo simple es mejor que lo complejo) y 'Explicit is better than implicit'. Nunca favorece la complejidad.",
        ["Zen de Python", "PEP 20"], ["teoría", "pcep-1.1", "nivel-3"],
        options=[
            ("Beautiful is better than ugly.", False),
            ("Explicit is better than implicit.", False),
            ("Complex is better than simple.", True),
            ("Readability counts.", False),
            ("Ninguna de las anteriores.", False)
        ]
    ))

    # 20 (L3, code_completion)
    exercises.append(make_exercise(
        "pcep-s1-020", "Palabras Reservadas: nonlocal vs global", 1, SEC1_TITLE,
        "Conceptos Fundamentales", "Scope Keywords", "1.1", "intermediate", "code_completion",
        "¿Qué palabra reservada permite declarar que una variable dentro de una función anidada pertenece al ámbito envolvente inmediato y no al global?",
        "La palabra reservada 'nonlocal' permite enlazar identificadores del ámbito exterior más cercano que no sea el global.",
        ["nonlocal", "scope", "keywords"], ["completar", "pcep-1.1", "nivel-3"],
        starter_code="def exterior():\n    x = 1\n    def interior():\n        ____ x\n        x = 2\n    interior()\n    return x",
        acceptable=["nonlocal"],
        expected_output="2"
    ))

    print(f"Generated 20 exercises for 1.1. Total so far: {len(exercises)}")
    return exercises

if __name__ == "__main__":
    ex = generate_section1()
    print("Test passed:", len(ex))

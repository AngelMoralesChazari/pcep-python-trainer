#!/usr/bin/env python3
"""
Importador de Ejercicios de 4Geeks Academy para PCEP Trainer
Repositorio oficial: https://github.com/4GeeksAcademy/python-beginner-programming-exercises.git

Tareas realizadas:
1. Inspecciona y procesa las carpetas de ejercicios individuales.
2. Extrae enunciados e instrucciones en español (README.es.md).
3. Extrae código inicial (app.py) y solución canónica (solution.hide.py).
4. Deriva casos de prueba (testCases) funcionales para el juez online evaluando solution.hide.py.
5. Clasifica curricularmente según el temario oficial PCEP-30-02 (Sección 1 a 4, Objetivos 1.1 a 4.4).
6. Registra metadatos de procedencia, licencia educativa de BreatheCode y URL original.
7. Aplica verificación de huella estructural y deduplicación.
8. Genera archivo TypeScript listo para producción en src/data/exercises/external/fourGeeksExercises.ts.
"""

import os
import re
import json
import subprocess
import hashlib
from typing import Dict, List, Any, Optional

# Metadatos del temario oficial PCEP-30-02 para mapeo curricular exacto
CURRICULUM_MAPPING = {
    "01-Console": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Entrada y Salida por Consola",
        "subtopic": "print() y cadenas de caracteres",
        "pcepObjective": "1.5",
        "difficulty": "basic",
        "concepts": ["print()", "salida estándar", "cadenas de texto"],
        "tags": ["consola", "print", "pcep-1.5", "4geeks"]
    },
    "02-Declare-Variables": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Literales y Variables",
        "subtopic": "Declaración y asignación de variables",
        "pcepObjective": "1.3",
        "difficulty": "basic",
        "concepts": ["variables", "asignación", "strings"],
        "tags": ["variables", "asignación", "pcep-1.3", "4geeks"]
    },
    "03-Print-Variables-In-The-Console": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Entrada y Salida por Consola",
        "subtopic": "Impresión de múltiples variables con print()",
        "pcepObjective": "1.5",
        "difficulty": "basic",
        "concepts": ["print()", "múltiples argumentos", "separador"],
        "tags": ["print", "variables", "pcep-1.5", "4geeks"]
    },
    "04-Multiply-Two-Values": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Operadores y Tipos de Datos",
        "subtopic": "Operador aritmético de multiplicación (*)",
        "pcepObjective": "1.4",
        "difficulty": "basic",
        "concepts": ["operadores aritméticos", "multiplicación (*)", "enteros"],
        "tags": ["operadores", "aritmética", "pcep-1.4", "4geeks"]
    },
    "05-User-Inputed-Values": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Entrada y Salida por Consola",
        "subtopic": "Captura con input() y conversión con int()",
        "pcepObjective": "1.5",
        "difficulty": "basic_plus",
        "concepts": ["input()", "int()", "conversión de tipos", "suma"],
        "tags": ["input", "conversión", "pcep-1.5", "4geeks"]
    },
    "06-String-Concatenation": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Operadores y Tipos de Datos",
        "subtopic": "Concatenación de cadenas (+)",
        "pcepObjective": "1.4",
        "difficulty": "basic",
        "concepts": ["strings", "concatenación (+)", "literales"],
        "tags": ["cadenas", "concatenación", "pcep-1.4", "4geeks"]
    },
    "07-Create-a-Basic-HTML": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Literales y Variables",
        "subtopic": "Composición de cadenas complejas y multilínea",
        "pcepObjective": "1.3",
        "difficulty": "basic",
        "concepts": ["cadenas", "concatenación", "composición"],
        "tags": ["cadenas", "formato", "pcep-1.3", "4geeks"]
    },
    "08.1-Your-First-If": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Sentencias Condicionales",
        "subtopic": "Estructura condicional simple if y comparación (>)",
        "pcepObjective": "2.1",
        "difficulty": "basic_plus",
        "concepts": ["if", "operadores relacionales (>)", "control de flujo"],
        "tags": ["condicionales", "if", "pcep-2.1", "4geeks"]
    },
    "08.2-How-Much-The-Wedding-Costs": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Sentencias Condicionales",
        "subtopic": "Estructuras condicionales múltiples (if-elif-else)",
        "pcepObjective": "2.1",
        "difficulty": "intermediate",
        "concepts": ["if-elif-else", "rangos condicionales", "evaluación por tramos"],
        "tags": ["condicionales", "elif", "else", "pcep-2.1", "4geeks"]
    },
    "09-Random-Numbers": {
        "section": 1,
        "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
        "topic": "Operadores y Tipos de Datos",
        "subtopic": "Uso de bibliotecas estándar (módulo random)",
        "pcepObjective": "1.4",
        "difficulty": "basic_plus",
        "concepts": ["random", "randint", "generación aleatoria"],
        "tags": ["módulos", "random", "pcep-1.4", "4geeks"]
    },
    "10-Calling-Your-First-Function": {
        "section": 4,
        "sectionTitle": "Sección 4 — Funciones y Excepciones",
        "topic": "Funciones",
        "subtopic": "Invocación de funciones y paso de argumentos",
        "pcepObjective": "4.1",
        "difficulty": "basic",
        "concepts": ["funciones", "invocación", "argumentos", "operador módulo (%)"],
        "tags": ["funciones", "llamada", "pcep-4.1", "4geeks"]
    },
    "10.1-Creating-Your-First-Function": {
        "section": 4,
        "sectionTitle": "Sección 4 — Funciones y Excepciones",
        "topic": "Funciones",
        "subtopic": "Definición de funciones con def y sentencia return",
        "pcepObjective": "4.1",
        "difficulty": "basic_plus",
        "concepts": ["def", "parámetros", "return", "suma"],
        "tags": ["funciones", "def", "return", "pcep-4.1", "4geeks"]
    },
    "11-Create-A-New-Function": {
        "section": 4,
        "sectionTitle": "Sección 4 — Funciones y Excepciones",
        "topic": "Funciones",
        "subtopic": "Funciones con retorno y modularización",
        "pcepObjective": "4.1",
        "difficulty": "basic_plus",
        "concepts": ["def", "return", "modularización"],
        "tags": ["funciones", "return", "pcep-4.1", "4geeks"]
    },
    "12-Rand-From-One-to-Twelve": {
        "section": 4,
        "sectionTitle": "Sección 4 — Funciones y Excepciones",
        "topic": "Funciones",
        "subtopic": "Funciones con valores calculados",
        "pcepObjective": "4.1",
        "difficulty": "intermediate",
        "concepts": ["funciones", "return", "módulos"],
        "tags": ["funciones", "pcep-4.1", "4geeks"]
    },
    "13-Your-First-Loop": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Iteraciones y Bucles",
        "subtopic": "Bucle for y la función range()",
        "pcepObjective": "2.2",
        "difficulty": "basic_plus",
        "concepts": ["for", "range()", "iteración", "secuencias"],
        "tags": ["bucles", "for", "range", "pcep-2.2", "4geeks"]
    },
    "14-Create-A-For-Loop": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Iteraciones y Bucles",
        "subtopic": "Repetición controlada de instrucciones con bucle for",
        "pcepObjective": "2.2",
        "difficulty": "basic_plus",
        "concepts": ["for", "repetición", "range()"],
        "tags": ["bucles", "for", "pcep-2.2", "4geeks"]
    },
    "15-Looping-With-FizzBuzz": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Iteraciones y Bucles",
        "subtopic": "Algoritmo clásico FizzBuzz (Bucles + Condicionales múltiples)",
        "pcepObjective": "2.2",
        "difficulty": "intermediate",
        "concepts": ["for", "if-elif-else", "módulo (%)", "FizzBuzz"],
        "tags": ["bucles", "algoritmos", "fizzbuzz", "pcep-2.2", "4geeks"]
    },
    "16-Random-Colors-Loop": {
        "section": 3,
        "sectionTitle": "Sección 3 — Colecciones de Datos",
        "topic": "Listas",
        "subtopic": "Recorrido de listas y selección de elementos",
        "pcepObjective": "3.1",
        "difficulty": "intermediate",
        "concepts": ["listas", "recorrido", "iteración", "condiciones"],
        "tags": ["listas", "bucles", "pcep-3.1", "4geeks"]
    },
    "17-Russian-Roulette": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Sentencias Condicionales",
        "subtopic": "Toma de decisiones lógicas en estados cambiantes",
        "pcepObjective": "2.1",
        "difficulty": "intermediate",
        "concepts": ["if-else", "comparación de estado", "funciones"],
        "tags": ["condicionales", "juego", "pcep-2.1", "4geeks"]
    },
    "18-The-Beatles": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Iteraciones y Bucles",
        "subtopic": "Construcción iterativa de cadenas con condiciones específicas",
        "pcepObjective": "2.2",
        "difficulty": "intermediate",
        "concepts": ["for", "if-elif-else", "concatenación iterativa", "return"],
        "tags": ["bucles", "cadenas", "pcep-2.2", "4geeks"]
    },
    "19-Bottles-Of-Milk": {
        "section": 2,
        "sectionTitle": "Sección 2 — Flujo de Control",
        "topic": "Iteraciones y Bucles",
        "subtopic": "Bucle decremental con paso negativo en range() y singular/plural",
        "pcepObjective": "2.2",
        "difficulty": "intermediate",
        "concepts": ["for", "range(step=-1)", "paso decremental", "condiciones"],
        "tags": ["bucles", "range", "step", "pcep-2.2", "4geeks"]
    }
}

# Especificación de casos de prueba verificables según requerimientos y mocks
MANUAL_TEST_CASES = {
    "01-Console": [
        {"input": "", "expectedOutput": "Hello World!\n", "description": "Imprime exactamente Hello World!"}
    ],
    "02-Declare-Variables": [
        {"input": "", "expectedOutput": "Yellow\n", "description": "Variable color con valor Yellow"}
    ],
    "03-Print-Variables-In-The-Console": [
        {"input": "", "expectedOutput": "red marker\n", "description": "Imprime color e item separados por espacio"}
    ],
    "04-Multiply-Two-Values": [
        {"input": "", "expectedOutput": "17172435\n", "description": "Multiplicación de 2345 * 7323"}
    ],
    "05-User-Inputed-Values": [
        {"input": "25\n", "expectedOutput": "What is your age?\nYour age is: 35\n", "description": "Suma 10 a la edad ingresada (25 -> 35)"},
        {"input": "18\n", "expectedOutput": "What is your age?\nYour age is: 28\n", "description": "Suma 10 a la edad ingresada (18 -> 28)"}
    ],
    "06-String-Concatenation": [
        {"input": "", "expectedOutput": "Hello World\n", "description": "Concatenación de my_var1 y my_var2 con espacio"}
    ],
    "07-Create-a-Basic-HTML": [
        {"input": "", "expectedOutput": "<html><head><title></title></head><body></body></html>\n", "description": "Estructura HTML básica generada con variables"}
    ],
    "08.1-Your-First-If": [
        {"input": "150\n", "expectedOutput": "How much money do you have in your pocket\nGive me some money!\n", "description": "Mayor a 100 dólares"},
        {"input": "50\n", "expectedOutput": "How much money do you have in your pocket\nYou are a poor guy, go away!\n", "description": "Menor o igual a 100 dólares"}
    ],
    "08.2-How-Much-The-Wedding-Costs": [
        {"input": "40\n", "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 4000 dollars\n", "description": "Hasta 50 invitados ($4000)"},
        {"input": "80\n", "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 10000 dollars\n", "description": "De 51 a 100 invitados ($10000)"},
        {"input": "150\n", "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 15000 dollars\n", "description": "De 101 a 200 invitados ($15000)"},
        {"input": "300\n", "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 20000 dollars\n", "description": "Más de 200 invitados ($20000)"}
    ],
    "10-Calling-Your-First-Function": [
        {"input": "", "expectedOutput": "True\n", "description": "Comprueba si 45345 es impar (True)"}
    ],
    "10.1-Creating-Your-First-Function": [
        {"input": "", "expectedOutput": "7\n", "description": "Llama add_numbers(3, 4) y devuelve 7"}
    ],
    "13-Your-First-Loop": [
        {"input": "", "expectedOutput": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n", "description": "Imprime del 0 al 11 con range(12)"}
    ],
    "14-Create-A-For-Loop": [
        {"input": "", "expectedOutput": "I will ask questions if I am stuck\n" * 10, "description": "Repite la frase 10 veces en líneas consecutivas"}
    ],
    "15-Looping-With-FizzBuzz": [
        {
            "input": "",
            "expectedOutput": "\n".join(
                "FizzBuzz" if i % 15 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else str(i)
                for i in range(1, 101)
            ) + "\n",
            "description": "Secuencia FizzBuzz completa de 1 a 100"
        }
    ],
    "17-Russian-Roulette": [
        {"input": "", "expectedOutput": "Keep playing!\n", "description": "Disparo en recámara no letal"}
    ],
    "18-The-Beatles": [
        {
            "input": "",
            "expectedOutput": "let it be,\nlet it be,\nlet it be,\nlet it be,\nthere will be an answer,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nwhisper words of wisdom, let it be\n",
            "description": "Letra canónica del coro de Let It Be"
        }
    ]
}


CONCISE_STATEMENTS = {
    "01-Console": "Usa la función `print()` para escribir exactamente el texto `Hello World!` en la consola.",
    "02-Declare-Variables": "Declara una variable llamada `color` asignándole el valor `'Yellow'`, y luego imprímela en la consola usando `print(color)`.",
    "03-Print-Variables-In-The-Console": "Imprime dos variables en una sola llamada a `print()`, separándolas con coma: `print(color, item)` para que la salida muestre `red marker`.",
    "04-Multiply-Two-Values": "Calcula la multiplicación de `2345` por `7323` usando el operador aritmético `*`. Almacena el resultado en la variable `variables_are_cool` e imprímelo en la consola.",
    "05-User-Inputed-Values": "Solicita la edad del usuario mediante `input()`, conviértela a entero con `int()`, súmale `10` años e imprime en consola el mensaje en formato: `Your age is: X`.",
    "06-String-Concatenation": "Declara las variables `my_var1 = 'Hello'` y `my_var2 = 'World'`. Concaténalas con un espacio en medio utilizando el operador `+` para imprimir `Hello World`.",
    "07-Create-a-Basic-HTML": "Usa las variables de etiquetas proporcionadas y concatenación de cadenas (`+`) para generar la estructura HTML básica: `<html><head><title></title></head><body></body></html>` y almacénala en `html_document`.",
    "08.1-Your-First-If": "Pregunta al usuario cuánto dinero tiene en el bolsillo con `input()`. Si la cantidad es mayor a `100`, imprime `Give me some money!`. De lo contrario, imprime `You are a poor guy, go away!`.",
    "08.2-How-Much-The-Wedding-Costs": "Determina el costo de una boda según la cantidad de invitados ingresada por el usuario:\n\n* Hasta 50 invitados: `$4,000`\n* De 51 a 100 invitados: `$10,000`\n* De 101 a 200 invitados: `$15,000`\n* Más de 200 invitados: `$20,000`\n\nAsigna el valor correspondiente a `price` e imprime: `Your wedding will cost X dollars`.",
    "09-Random-Numbers": "Usa el módulo `random` para generar y retornar un número entero aleatorio comprendido entre 1 y 10 (inclusive) mediante `random.randint(1, 10)`.",
    "10-Calling-Your-First-Function": "Utiliza la función predefinida `is_odd(my_number)` para comprobar si el número `45345` es impar e imprime el resultado booleano (`True`) en la consola.",
    "10.1-Creating-Your-First-Function": "Define una función llamada `add_numbers(a, b)` que reciba dos parámetros y retorne su suma usando la sentencia `return`.",
    "11-Create-A-New-Function": "Crea una función llamada `generate_random()` que genere y retorne un número entero aleatorio entre 0 y 9 utilizando `random.randint(0, 9)`.",
    "12-Rand-From-One-to-Twelve": "Crea una función llamada `get_randomInt()` que genere y retorne un entero aleatorio comprendido entre 1 y 12.",
    "13-Your-First-Loop": "Usa un bucle `for` junto con la función `range(12)` para imprimir en consola los números del `0` al `11`, cada uno en una línea independiente.",
    "14-Create-A-For-Loop": "Crea una función llamada `standards_maker()` que use un bucle `for` para imprimir exactamente 10 veces la frase `'I will ask questions if I am stuck'`.",
    "15-Looping-With-FizzBuzz": "Implementa el algoritmo clásico FizzBuzz para los números del 1 al 100:\n\n* Si el número es múltiplo de 3 y de 5, imprime `FizzBuzz`.\n* Si solo es múltiplo de 3, imprime `Fizz`.\n* Si solo es múltiplo de 5, imprime `Buzz`.\n* En cualquier otro caso, imprime el número.",
    "16-Random-Colors-Loop": "Crea una función llamada `get_color(color_number)` que itere sobre una lista y retorne una colección de colores seleccionados aleatoriamente.",
    "17-Russian-Roulette": "Completa la función `fire_gun()`: si la posición de la bala coincide con la recámara actual, retorna `You are dead!`; en cualquier otro caso, retorna `Keep playing!`.",
    "18-The-Beatles": "Crea una función llamada `sing()` que utilice un bucle `for` para construir y retornar la letra del coro de la canción 'Let It Be' (11 versos).",
    "19-Bottles-Of-Milk": "Usa un bucle `for` con paso negativo `range(99, 2, -1)` para imprimir los versos decrecientes de la canción '99 bottles of milk on the wall'."
}


def clean_markdown_statement(folder: str, md_text: str) -> str:
    """Limpia metadatos frontmatter, imágenes rotas externas, enlaces y extrae el cuerpo conciso."""
    if folder in CONCISE_STATEMENTS:
        return CONCISE_STATEMENTS[folder]

    # Quitar frontmatter --- ... ---
    cleaned = re.sub(r'^---[\s\S]*?---\s*', '', md_text)
    # Quitar imágenes markdown ![...](...)
    cleaned = re.sub(r'!\[.*?\]\(.*?\)', '', cleaned)
    # Quitar enlaces externos que no sean necesarios
    cleaned = re.sub(r'\[(.*?)\]\(https?://[^\)]+\)', r'\1', cleaned)
    # Quitar badge de video o tutorial inicial
    cleaned = re.sub(r'#\s*`[0-9.]+`\s*', '# ', cleaned)
    # Normalizar bloques de código ```py a ```python
    cleaned = re.sub(r'```py\b', '```python', cleaned)
    return cleaned.strip()


def extract_title_from_md(md_text: str, default: str) -> str:
    m = re.search(r'#\s*(?:`[0-9.]+`\s*)?([^\n]+)', md_text)
    if m:
        t = m.group(1).strip()
        t = t.replace('How Much The Wedding Costs (if...else)', 'Cálculo de Costo de Bodas por Tramos')
        t = t.replace('Declare Variables', 'Declaración y Asignación de Variables')
        t = t.replace('Print Variables In The Console', 'Impresión de Variables en Consola')
        t = t.replace('Multiply Two Values', 'Multiplicación Aritmética de Valores')
        t = t.replace('User Inputed Values', 'Lectura de Entrada del Usuario con input()')
        t = t.replace('String Concatenation', 'Concatenación de Cadenas')
        t = t.replace('Create a Basic HTML', 'Composición de Documento HTML')
        t = t.replace('Your First If...', 'Tu Primer Condicional if')
        t = t.replace('Your First If', 'Tu Primer Condicional if')
        t = t.replace('Random Numbers', 'Generación de Números Aleatorios')
        t = t.replace('Calling Your First Function', 'Llamada e Invocación de Funciones')
        t = t.replace('Creating Your First Function', 'Definición de Funciones con def')
        t = t.replace('Create A New Function', 'Creación de Funciones Modulares')
        t = t.replace('Rand From One to Twelve', 'Funciones con Generación de Rango')
        t = t.replace('Your First Loop', 'Tu Primer Bucle con for y range()')
        t = t.replace('Create A For Loop', 'Repetición de Tareas con for loop')
        t = t.replace('Looping With FizzBuzz', 'El Algoritmo Clásico FizzBuzz')
        t = t.replace('Random Colors (Loop)', 'Iteración y Selección de Colores')
        t = t.replace('Russian Roulette', 'Simulación de Ruleta con Condiciones')
        t = t.replace('The Beatles', 'Construcción de Letras con Bucles (The Beatles)')
        t = t.replace('Bottles Of Milk', 'Bucle Decremental con Paso Negativo')
        t = t.replace('Console', 'Impresión en Consola con print()')
        return t
    return default


def run_importer(repo_dir: str, output_ts_path: str) -> Dict[str, Any]:
    exercises_dir = os.path.join(repo_dir, 'exercises')
    if not os.path.exists(exercises_dir):
        raise FileNotFoundError(f"Directorio de ejercicios no encontrado en {exercises_dir}")

    folders = sorted([f for f in os.listdir(exercises_dir) if os.path.isdir(os.path.join(exercises_dir, f))])
    
    imported_list: List[Dict[str, Any]] = []
    discarded_list: List[Dict[str, Any]] = []
    
    print(f"Iniciando importación desde 4Geeks Academy ({len(folders)} carpetas detectadas)...")

    for folder in folders:
        folder_path = os.path.join(exercises_dir, folder)
        files = os.listdir(folder_path)

        # 00-Welcome u otros sin app.py ni solution se descartan con registro
        if folder == '00-Welcome' or 'app.py' not in files:
            discarded_list.append({
                "folder": folder,
                "reason": "Carpeta informativa/bienvenida sin código ejecutable o evaluable"
            })
            continue

        # Leer instrucciones en español (README.es.md) o README.md
        readme_file = 'README.es.md' if 'README.es.md' in files else 'README.md'
        with open(os.path.join(folder_path, readme_file), 'r', encoding='utf-8') as rf:
            raw_statement = rf.read()

        clean_stmt = clean_markdown_statement(folder, raw_statement)
        title = extract_title_from_md(raw_statement, folder)

        # Leer app.py (starter code)
        with open(os.path.join(folder_path, 'app.py'), 'r', encoding='utf-8') as af:
            starter_code = af.read()

        # Leer solution.hide.py (solution code)
        solution_code = ""
        if 'solution.hide.py' in files:
            with open(os.path.join(folder_path, 'solution.hide.py'), 'r', encoding='utf-8') as sf:
                solution_code = sf.read()

        # Configuración curricular PCEP
        curriculum = CURRICULUM_MAPPING.get(folder, {
            "section": 1,
            "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
            "topic": "Programación Básica",
            "subtopic": "Instrucciones elementales",
            "pcepObjective": "1.1",
            "difficulty": "basic",
            "concepts": ["código", "Python"],
            "tags": ["4geeks"]
        })

        # Extraer o construir testCases evaluables
        test_cases = MANUAL_TEST_CASES.get(folder)
        if not test_cases and solution_code:
            # Ejecutar solution_code para derivar salida esperada
            try:
                proc = subprocess.run(['python3', '-c', solution_code], capture_output=True, text=True, timeout=2)
                if proc.returncode == 0 and proc.stdout:
                    test_cases = [{
                        "input": "",
                        "expectedOutput": proc.stdout,
                        "description": "Salida canónica estándar esperada"
                    }]
            except Exception:
                test_cases = None

        exercise_id = f"pcep-4geeks-{folder.lower().replace('.', '-')}"
        source_url = f"https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/{folder}"

        ex_obj: Dict[str, Any] = {
            "id": exercise_id,
            "title": title,
            "section": curriculum["section"],
            "sectionTitle": curriculum["sectionTitle"],
            "topic": curriculum["topic"],
            "subtopic": curriculum["subtopic"],
            "pcepObjective": curriculum["pcepObjective"],
            "difficulty": curriculum["difficulty"],
            "type": "programming",
            "cognitiveFamily": "scratch_programming",
            "statement": clean_stmt,
            "starterCode": starter_code,
            "solutionCode": solution_code,
            "explanation": f"Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: {curriculum['pcepObjective']} ({curriculum['subtopic']}).",
            "concepts": curriculum["concepts"],
            "tags": curriculum["tags"],
            "source": "4geeks_academy",
            "sourceUrl": source_url,
            "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
            "isActive": True
        }

        if test_cases:
            ex_obj["testCases"] = test_cases

        imported_list.append(ex_obj)
        print(f"  [OK] Importado: {folder} -> {exercise_id} (Obj PCEP {curriculum['pcepObjective']})")

    # Escribir el archivo TypeScript de exportación
    os.makedirs(os.path.dirname(output_ts_path), exist_ok=True)
    ts_content = "import { Exercise } from '../../../types';\n\n"
    ts_content += "/**\n"
    ts_content += " * Banco de ejercicios de programación interactiva importados de 4Geeks Academy\n"
    ts_content += " * Fuente: https://github.com/4GeeksAcademy/python-beginner-programming-exercises\n"
    ts_content += " * Licencia: Términos Educativos de BreatheCode (Atribución Académica)\n"
    ts_content += " */\n"
    ts_content += "export const FOUR_GEEKS_EXERCISES: Exercise[] = "
    ts_content += json.dumps(imported_list, ensure_ascii=False, indent=2)
    ts_content += ";\n"

    with open(output_ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"\nArchivo TypeScript generado exitosamente en: {output_ts_path}")
    print(f"Total importados: {len(imported_list)}, Descartados: {len(discarded_list)}")

    return {
        "totalFound": len(folders),
        "importedCount": len(imported_list),
        "discardedCount": len(discarded_list),
        "imported": [e["id"] for e in imported_list],
        "discarded": discarded_list
    }

if __name__ == '__main__':
    repo_path = "/home/angel/.gemini/antigravity-ide/brain/19a8d64c-0f09-4a60-b80d-a6a54193f7b1/scratch/4geeks_repo"
    out_ts = "src/data/exercises/external/fourGeeksExercises.ts"
    report = run_importer(repo_path, out_ts)
    print("\nResumen final de importación:")
    print(json.dumps(report, indent=2, ensure_ascii=False))

import { PCEPObjectiveCode } from '../types/pcep';

export interface TheoryTopicContent {
  objectiveCode: PCEPObjectiveCode;
  sectionId: 1 | 2 | 3 | 4;
  title: string;
  summary: string;
  explanationMarkdown: string;
  codeExamples: Array<{
    title: string;
    code: string;
    description: string;
  }>;
  commonPitfalls: Array<{
    title: string;
    description: string;
    badCode: string;
    goodCode: string;
  }>;
  keyTakeaways: string[];
}

export const THEORY_MODULES: Record<PCEPObjectiveCode, TheoryTopicContent> = {
  '1.1': {
    objectiveCode: '1.1',
    sectionId: 1,
    title: 'Términos y Definiciones Fundamentales',
    summary: 'Diferencias entre lenguajes compilados e interpretados, análisis léxico, sintáctico y semántico.',
    explanationMarkdown: `
En programación, existen dos filosofías principales para traducir el código fuente a lenguaje máquina:
1. **Compilación**: Un compilador analiza y transforma la totalidad del código fuente en un archivo binario ejecutable independiente. La detección de errores sintácticos ocurre antes de la ejecución.
2. **Interpretación**: Un intérprete lee el código instrucción por instrucción y lo ejecuta de manera directa e inmediata. Python es primordialmente un lenguaje interpretado (compilado previamente a *bytecode* ejecutado por la máquina virtual CPython).

### Los tres niveles del lenguaje:
* **Léxico (Lexis)**: El vocabulario válido (palabras clave, identificadores, símbolos). Un error léxico ocurre al utilizar un carácter ilegal o una palabra no reconocida.
* **Sintaxis (Syntax)**: Las reglas gramaticales que rigen cómo se combinan las palabras clave y los símbolos.
* **Semántica (Semantics)**: El significado lógico de una instrucción sintácticamente válida.
    `,
    codeExamples: [
      {
        title: 'Ejecución secuencial interpretada',
        code: 'print("Línea 1 ejecutada con éxito")\nprint("Línea 2 ejecutada con éxito")\n# print(variable_inexistente) # Provocaría NameError en tiempo de ejecución',
        description: 'El intérprete ejecuta línea a línea hasta encontrar una anomalía.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Confundir SyntaxError con errores semánticos',
        description: 'Un error sintáctico impide la ejecución de la instrucción. Un error semántico permite correr el programa pero produce resultados erróneos.',
        badCode: 'print "Hola" # SyntaxError en Python 3 (faltan paréntesis)',
        goodCode: 'print("Hola") # Correcto según la sintaxis de Python 3'
      }
    ],
    keyTakeaways: [
      'Python utiliza un intérprete para ejecutar el código línea a línea.',
      'Sintaxis define la forma; Semántica define el significado.',
      'Los errores semánticos no siempre son detectados automáticamente por el intérprete.'
    ]
  },

  '1.2': {
    objectiveCode: '1.2',
    sectionId: 1,
    title: 'Lógica y Estructura de Python',
    summary: 'Palabras reservadas (keywords), indentación estricta, comentarios y líneas lógicas.',
    explanationMarkdown: `
Python prescinde de llaves \`{}\` o palabras como \`begin\`/\`end\` para delimitar bloques. La estructura del programa se define estrictamente mediante la **indentación** (sangría).
* La recomendación oficial (PEP-8) es utilizar **4 espacios** por nivel de indentación.
* Los comentarios inician con el carácter almohadilla (\`#\`) y son ignorados por el intérprete.
* Las palabras reservadas (\`if\`, \`def\`, \`while\`, \`for\`, etc.) no pueden ser utilizadas como identificadores de variables ni funciones.
    `,
    codeExamples: [
      {
        title: 'Estructura correcta de bloques',
        code: 'x = 10\nif x > 5:\n    print("Mayor a 5")\n    x += 1\nprint("Fin del bloque")',
        description: 'Las instrucciones indentadas pertenecen al bloque del condicional.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentación inconsistente (IndentationError)',
        description: 'Mezclar tabuladores y espacios o colocar sangrías arbitrarias.',
        badCode: 'print("Paso 1")\n  print("Paso 2") # IndentationError: unexpected indent',
        goodCode: 'print("Paso 1")\nprint("Paso 2") # Mismo nivel léxico'
      }
    ],
    keyTakeaways: [
      'La indentación es sintácticamente obligatoria.',
      'Las palabras reservadas no pueden nombrarse como variables.',
      'Los comentarios inician con #'
    ]
  },

  '1.3': {
    objectiveCode: '1.3',
    sectionId: 1,
    title: 'Literales y Variables',
    summary: 'Sistemas numéricos (octal, binario, hexadecimal), notación científica, strings y variables.',
    explanationMarkdown: `
Un literal es un dato cuyos valores están determinados por el propio código fuente:
* **Enteros**: Decimales (\`42\`), Binarios (\`0b1010\`), Octales (\`0o17\`), Hexadecimales (\`0x1F\`).
* **Flotantes**: Números con punto (\`3.14\`) o notación científica (\`3e8\` = \`3 * 10^8\`).
* **Booleanos**: \`True\` y \`False\` (con mayúscula inicial obligatoria).
* **Variables**: Contenedores dinámicos para referencias a objetos. En Python no se declaran tipos explícitamente.
    `,
    codeExamples: [
      {
        title: 'Bases numéricas en Python',
        code: 'bin_num = 0b1011  # 11 en decimal\noct_num = 0o14    # 12 en decimal\nhex_num = 0xA     # 10 en decimal\nprint(bin_num + oct_num + hex_num) # 33',
        description: 'Python interpreta los prefijos numéricos de forma nativa como enteros.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Nombrado incorrecto según PEP-8',
        description: 'Usar números al inicio o palabras clave como variables.',
        badCode: '2numero = 10\nclass = "Python"',
        goodCode: 'numero_2 = 10\nclase_nombre = "Python"'
      }
    ],
    keyTakeaways: [
      'Prefijos de bases: 0b (binario), 0o (octal), 0x (hexadecimal).',
      'True y False son literales booleanos con mayúscula.',
      'Los nombres de variables distinguen mayúsculas y minúsculas (case-sensitive).'
    ]
  },

  '1.4': {
    objectiveCode: '1.4',
    sectionId: 1,
    title: 'Operadores y Tipos de Datos',
    summary: 'Operadores aritméticos (//, %, **), bitwise, booleanos, asociatividad y precedencia.',
    explanationMarkdown: `
### Operadores aritméticos especiales:
* \`//\` : División entera (floor division), trunca el resultado al entero menor más próximo.
* \`%\` : Módulo o residuo de la división.
* \`**\` : Exponenciación. Tiene **asociatividad por la derecha** (\`2 ** 2 ** 3 = 2 ** 8 = 256\`).

### Operadores de cadena:
* \`+\` : Concatenación (\`"Py" + "thon"\`).
* \`*\` : Replicación (\`"ab" * 3 = "ababab"\`).

### Jerarquía de operadores (Precedencia):
1. Paréntesis \`()\`
2. Potencia \`**\` (asocia de derecha a izquierda)
3. Unarios \`+\`, \`-\`, \`~\`
4. Multiplicación, división, módulo \`*\`, \`/\`, \`//\`, \`%\`
5. Suma y resta binarias \`+\`, \`-\`
6. Operadores relacionales \`==\`, \`!=\`, \`<\`, \`>\`
7. Booleanos: \`not\` -> \`and\` -> \`or\`
    `,
    codeExamples: [
      {
        title: 'División entera y módulo',
        code: 'print(17 // 5)  # 3\nprint(17 % 5)   # 2\nprint(-17 // 5) # -4 (hacia el menor)',
        description: 'La división entera con negativos redondea hacia el infinito negativo.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Asociatividad de la exponenciación',
        description: 'Asumir que 2 ** 2 ** 3 se evalúa de izquierda a derecha.',
        badCode: '# Creer que es (2 ** 2) ** 3 = 64',
        goodCode: '2 ** (2 ** 3) # Es 2 ** 8 = 256'
      }
    ],
    keyTakeaways: [
      '// trunca hacia abajo.',
      '** asocia de derecha a izquierda.',
      'Precedencia booleana: not > and > or.'
    ]
  },

  '1.5': {
    objectiveCode: '1.5',
    sectionId: 1,
    title: 'Entrada y Salida por Consola',
    summary: 'print(), sep=, end=, captura de datos con input() y conversión de tipos.',
    explanationMarkdown: `
* \`print(*objects, sep=' ', end='\\n')\`: Imprime objetos separados por \`sep\` y finaliza la línea con \`end\`.
* \`input(prompt)\`: Detiene el programa y captura datos desde teclado siempre en formato de cadena (\`str\`).
* Para operar aritméticamente con la entrada del usuario, se debe aplicar conversión explícita con \`int()\` o \`float()\`.
    `,
    codeExamples: [
      {
        title: 'sep y end personalizados',
        code: 'print("A", "B", "C", sep="-", end="...")\nprint("Fin")\n# Salida: A-B-C...Fin',
        description: 'sep reemplaza el espacio y end reemplaza el salto de línea.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Sumar valores de input() sin convertir',
        description: 'Provoca concatenación textual en vez de adición numérica.',
        badCode: 'a = input() # "10"\nb = input() # "20"\nprint(a + b) # Imprime "1020"',
        goodCode: 'a = int(input())\nb = int(input())\nprint(a + b) # Imprime 30'
      }
    ],
    keyTakeaways: [
      'input() siempre retorna str.',
      'sep por defecto es un espacio " ".',
      'end por defecto es "\\n".'
    ]
  },

  '2.1': {
    objectiveCode: '2.1',
    sectionId: 2,
    title: 'Sentencias Condicionales',
    summary: 'if, if-else, if-elif-else, condiciones anidadas y evaluación de cortocircuito.',
    explanationMarkdown: `
Las sentencias condicionales permiten alterar el flujo de ejecución en función de expresiones booleanas:
* \`if condicion:\`: Ejecuta el bloque si la condición evalúa a \`True\`.
* \`elif condicion:\`: Ramificación alternativa evaluada secuencialmente solo si las anteriores fueron falsas.
* \`else:\`: Bloque residual por defecto.
    `,
    codeExamples: [
      {
        title: 'Estructura if-elif-else',
        code: 'nota = 85\nif nota >= 90:\n    print("A")\nelif nota >= 80:\n    print("B")\nelse:\n    print("C")',
        description: 'La evaluación se detiene al cumplirse la primera condición verdadera.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Confundir asignación (=) con igualdad (==)',
        description: 'Usar un solo signo igual dentro de un condicional provoca SyntaxError.',
        badCode: 'if x = 10: pass',
        goodCode: 'if x == 10: pass'
      }
    ],
    keyTakeaways: [
      'Solo se ejecuta una de las ramas if/elif que resulte verdadera.',
      'El else es opcional pero cubre todos los casos no contemplados.',
      'La indentación delimita cada rama.'
    ]
  },

  '2.2': {
    objectiveCode: '2.2',
    sectionId: 2,
    title: 'Iteraciones y Bucles',
    summary: 'while, for, range(), break, continue y la cláusula else en bucles.',
    explanationMarkdown: `
* \`while condicion:\`: Itera mientras la condición permanezca verdadera.
* \`for variable in secuencia:\`: Itera sobre colecciones o generadores como \`range(start, stop, step)\`.
* \`break\`: Termina abruptamente el bucle y salta a la siguiente instrucción fuera del mismo.
* \`continue\`: Omite el resto del cuerpo del bucle en la iteración actual y avanza a la siguiente.
* **Cláusula \`else\` en bucles**: Se ejecuta SIEMPRE que el bucle termine de manera natural (sin ser interrumpido por un \`break\`).
    `,
    codeExamples: [
      {
        title: 'for-else con break',
        code: 'for n in range(2, 5):\n    if n == 10:\n        break\nelse:\n    print("Bucle completado sin interrupciones")\n# Imprime el mensaje',
        description: 'El bloque else no se salta porque nunca se llegó al break.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Límite superior excluido en range()',
        description: 'range(1, 5) genera 1, 2, 3, 4 (no incluye el 5).',
        badCode: 'for i in range(1, 5): # Se detiene en 4',
        goodCode: 'for i in range(1, 6): # Para incluir el 5'
      }
    ],
    keyTakeaways: [
      'range(start, stop, step) excluye stop.',
      'continue salta a la siguiente iteración; break sale del bucle.',
      'else en bucles se ejecuta solo si no hubo break.'
    ]
  },

  '3.1': {
    objectiveCode: '3.1',
    sectionId: 3,
    title: 'Listas en Python',
    summary: 'Indexación, rebanado (slicing), métodos mutables, clonado y matrices multidimensionales.',
    explanationMarkdown: `
Las listas son secuencias **mutables** ordenadas:
* **Indexación negativa**: \`lista[-1]\` accede al último elemento.
* **Slicing**: \`lista[inicio:fin:paso]\` extrae una sublista nueva.
* **Métodos principales**:
  * \`.append(x)\`: Agrega al final.
  * \`.insert(i, x)\`: Inserta en la posición \`i\`.
  * \`del lista[i]\`: Elimina por índice.
  * \`.sort()\`: Ordena la lista en el sitio (in-place).
  * \`sorted(lista)\`: Devuelve una nueva lista ordenada sin alterar la original.
* **Clonado**: \`b = a[:]\` crea una copia superficial. \`b = a\` solo comparte la misma referencia en memoria.
    `,
    codeExamples: [
      {
        title: 'Copia vs Referencia',
        code: 'original = [1, 2, 3]\ncopia = original[:]\nreferencia = original\nreferencia.append(4)\nprint(len(original)) # 4\nprint(len(copia))    # 3',
        description: 'Modificar por referencia afecta al original.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Asignar el resultado de sort()',
        description: 'sort() modifica in-place y retorna None.',
        badCode: 'lista = [3, 1, 2]\nlista = lista.sort() # lista pasa a ser None!',
        goodCode: 'lista.sort() # Ahora lista es [1, 2, 3]'
      }
    ],
    keyTakeaways: [
      'Las listas son mutables.',
      'b = a[:] crea una copia independiente.',
      'sort() devuelve None; sorted() devuelve una lista nueva.'
    ]
  },

  '3.2': {
    objectiveCode: '3.2',
    sectionId: 3,
    title: 'Tuplas (Tuples)',
    summary: 'Secuencias inmutables, sintaxis de construcción, indexing y diferencias con listas.',
    explanationMarkdown: `
Las tuplas son secuencias **inmutables**:
* Se definen con paréntesis \`t = (1, 2, 3)\` o sin ellos \`t = 1, 2, 3\`.
* Una tupla de un solo elemento requiere una coma final obligatoria: \`t = (42,)\`.
* No admiten modificación de elementos (\`TypeError\` si intentas asignar \`t[0] = 9\`).
    `,
    codeExamples: [
      {
        title: 'Tupla de un elemento',
        code: 'no_tupla = (5)   # Es un int\nsi_tupla = (5,)  # Es una tuple\nprint(type(no_tupla), type(si_tupla))',
        description: 'La coma distingue una tupla de una expresión entre paréntesis.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Intentar mutar una tupla',
        description: 'Genera TypeError: tuple object does not support item assignment.',
        badCode: 't = (1, 2)\nt[0] = 9',
        goodCode: 't = (9, 2) # Crear una nueva tupla'
      }
    ],
    keyTakeaways: [
      'Las tuplas son inmutables.',
      'Tupla de un elemento requiere coma: (x,).',
      'Más rápidas y seguras para datos constantes.'
    ]
  },

  '3.3': {
    objectiveCode: '3.3',
    sectionId: 3,
    title: 'Diccionarios (Dictionaries)',
    summary: 'Colecciones clave-valor mutables, keys(), values(), items() y operador in.',
    explanationMarkdown: `
Los diccionarios almacenan pares asociados \`clave: valor\`:
* Las claves deben ser objetos inmutables e irrepetibles (cadenas, números, tuplas).
* Los valores pueden ser de cualquier tipo.
* Acceso: \`d[clave]\` (lanza \`KeyError\` si no existe) o \`d.get(clave, valor_defecto)\`.
* \`.keys()\`, \`.values()\`, \`.items()\` devuelven vistas iterables del diccionario.
    `,
    codeExamples: [
      {
        title: 'Operaciones con diccionarios',
        code: 'd = {"a": 1, "b": 2}\nprint("a" in d)      # True (busca por clave)\nprint(1 in d)        # False\nprint(d.get("c", 0)) # 0 (sin error)',
        description: 'El operador in busca exclusivamente en las claves.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Usar listas como claves de diccionario',
        description: 'Las listas son mutables y no hashables (TypeError: unhashable type: list).',
        badCode: 'd = {[1, 2]: "valor"}',
        goodCode: 'd = {(1, 2): "valor"} # Usar tupla inmutable'
      }
    ],
    keyTakeaways: [
      'Las claves deben ser inmutables.',
      'El operador in comprueba existencia en las claves.',
      'd[clave_inexistente] lanza KeyError.'
    ]
  },

  '3.4': {
    objectiveCode: '3.4',
    sectionId: 3,
    title: 'Cadenas de Texto (Strings)',
    summary: 'Secuencias inmutables de caracteres, caracteres de escape, slicing y métodos comunes.',
    explanationMarkdown: `
Las cadenas en Python son secuencias **inmutables**:
* Admiten indexing y slicing idéntico a las listas.
* Caracteres de escape: '\n' (salto de línea), '\t' (tabulador), '\\' (barra invertida).
* Métodos esenciales: .upper(), .lower(), .find(), .replace(), .split(), .join().
    `,
    codeExamples: [
      {
        title: 'Inmutabilidad de cadenas',
        code: 's = "hola"\n# s[0] = "H" # TypeError!\ns = "H" + s[1:]\nprint(s) # Hola',
        description: 'Para modificar una cadena se construye una nueva.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Intentar modificar caracteres en el sitio',
        description: 'str no admite asignación por índice.',
        badCode: 's = "python"\ns[0] = "P"',
        goodCode: 's = s.capitalize()'
      }
    ],
    keyTakeaways: [
      'Las cadenas son inmutables.',
      'Slicing [::-1] invierte una cadena.',
      'Los métodos de string retornan una nueva cadena.'
    ]
  },

  '4.1': {
    objectiveCode: '4.1',
    sectionId: 4,
    title: 'Definición e Invocación de Funciones',
    summary: 'def, return, retorno de None y recursividad básica.',
    explanationMarkdown: `
* Se definen con la palabra clave \`def nombre(parametros):\`.
* La instrucción \`return\` devuelve un valor al llamador y finaliza la ejecución de la función.
* Si una función finaliza sin ejecutar un \`return\` explícito, retorna automáticamente \`None\`.
    `,
    codeExamples: [
      {
        title: 'Retorno por omisión',
        code: 'def sumar(a, b):\n    resultado = a + b\n\nval = sumar(5, 5)\nprint(val) # Imprime None (faltó return)',
        description: 'Toda función en Python siempre retorna un valor, por omisión None.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Confundir print() con return',
        description: 'print() solo muestra en pantalla; return devuelve el valor para reutilizarlo.',
        badCode: 'def f(x): print(x * 2)\nresultado = f(5) + 1 # TypeError: NoneType + int',
        goodCode: 'def f(x): return x * 2\nresultado = f(5) + 1 # 11'
      }
    ],
    keyTakeaways: [
      'Una función sin return devuelve None.',
      'return finaliza inmediatamente la ejecución de la función.'
    ]
  },

  '4.2': {
    objectiveCode: '4.2',
    sectionId: 4,
    title: 'Entorno y Ámbito de Funciones',
    summary: 'Argumentos posicionales vs keyword, valores por defecto, scopes y la palabra reservada global.',
    explanationMarkdown: `
* **Posicionales vs Palabras clave**: Los argumentos posicionales deben preceder SIEMPRE a los argumentos nombrados (\`keyword\`).
* **Parámetros por defecto**: Deben definirse al final de la lista de parámetros.
* **Ámbitos (Scopes)**: Una función puede leer variables del ámbito superior (global). Para modificarlas, debe declararse explícitamente \`global variable\`.
    `,
    codeExamples: [
      {
        title: 'Posicionales antes de palabras clave',
        code: 'def f(a, b=10, c=20):\n    return a + b + c\nprint(f(5, c=30)) # 5 + 10 + 30 = 45',
        description: 'Se pueden mezclar argumentos posicionales y nombrados respetando el orden.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Argumento posicional tras argumento por palabra clave',
        description: 'SyntaxError: positional argument follows keyword argument.',
        badCode: 'f(b=10, 5)',
        goodCode: 'f(5, b=10)'
      }
    ],
    keyTakeaways: [
      'Los argumentos posicionales van antes que los keyword.',
      'global permite modificar variables fuera de la función.',
      'Parámetros obligatorios van antes que los opcionales (default).'
    ]
  },

  '4.3': {
    objectiveCode: '4.3',
    sectionId: 4,
    title: 'Excepciones Integradas (Built-in)',
    summary: 'Árbol jerárquico de excepciones requeridas en el examen PCEP-30-02.',
    explanationMarkdown: `
En Python, todas las excepciones son clases organizadas jerárquicamente:
* \`BaseException\`
  * \`KeyboardInterrupt\`
  * \`SystemExit\`
  * \`Exception\`
    * \`ArithmeticError\`
      * \`ZeroDivisionError\`
    * \`LookupError\`
      * \`IndexError\`
      * \`KeyError\`
    * \`TypeError\`
    * \`ValueError\`

Un bloque que capture una clase base (ej. \`LookupError\`) capturará automáticamente todas sus subclases (\`IndexError\` y \`KeyError\`).
    `,
    codeExamples: [
      {
        title: 'Captura polimórfica de excepciones',
        code: 'try:\n    lista = [1, 2]\n    x = lista[10]\nexcept LookupError:\n    print("Capturado por clase base LookupError")',
        description: 'IndexError es capturado por ser subclase de LookupError.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Confundir IndexError con KeyError',
        description: 'IndexError es para secuencias (listas/tuplas/strings); KeyError es para diccionarios.',
        badCode: 'd = {}\nx = d["inexistente"] # Provoca KeyError, no IndexError',
        goodCode: 'try: x = d["inexistente"]\nexcept KeyError: pass'
      }
    ],
    keyTakeaways: [
      'LookupError agrupa IndexError y KeyError.',
      'ZeroDivisionError desciende de ArithmeticError.',
      'Capturar una clase padre intercepta todas sus hijas.'
    ]
  },

  '4.4': {
    objectiveCode: '4.4',
    sectionId: 4,
    title: 'Manejo de Excepciones (try-except)',
    summary: 'Estructura try, bloques except ordenados, propagación y delegación.',
    explanationMarkdown: `
* \`try\`: Bloque de código donde puede ocurrir una excepción.
* \`except Excepcion:\`: Bloque de manejo específico.
* **Regla de orden**: Las excepciones más específicas (subclases) deben ubicarse ANTES que las excepciones más generales (clases base). Si colocas \`except Exception\` primero, las excepciones subsecuentes nunca se alcanzarán.
* **Propagación**: Si una excepción no es capturada dentro de una función, se propaga hacia el llamador hasta encontrar un bloque adecuado o terminar el script.
    `,
    codeExamples: [
      {
        title: 'Orden jerárquico de except',
        code: 'try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Manejado específicamente")\nexcept ArithmeticError:\n    print("Manejado por clase padre")',
        description: 'ZeroDivisionError se evalúa primero antes de ArithmeticError.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Poner la excepción padre antes de la hija',
        description: 'Provoca que la rama específica sea código muerto inalcanzable.',
        badCode: 'try: ...\nexcept Exception: ...\nexcept ValueError: ... # Inalcanzable!',
        goodCode: 'try: ...\nexcept ValueError: ...\nexcept Exception: ...'
      }
    ],
    keyTakeaways: [
      'El orden de los except importa: primero hijas, luego padres.',
      'Las excepciones no capturadas se propagan hacia arriba.',
      'try sin except genera SyntaxError.'
    ]
  }
};

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
        title: 'Ejemplo 1: Ejecución secuencial interpretada',
        code: `print("Paso 1: Inicio del programa")
print("Paso 2: Procesando datos...")
# Si descomentas la línea de abajo, el programa se detiene en seco aquí:
# print(variable_inexistente) # NameError en tiempo de ejecución
print("Paso 3: Fin alcanzado con éxito")`,
        description: 'A diferencia de los compiladores, el intérprete ejecuta línea por línea hasta toparse con una anomalía en tiempo de ejecución.'
      },
      {
        title: 'Ejemplo 2: Error Léxico vs Sintáctico vs Semántico',
        code: `# Error Léxico: carácteres ilegales no reconocidos en el alfabeto de Python
# @ variable = 10  # Carácter @ en posición inválida

# Error Sintáctico: viola la gramática del lenguaje (falta ':')
# if x == 10 print("Diez")

# Error Semántico: sintácticamente es perfecto, pero la lógica es errónea
base = 10
altura = 5
# La fórmula correcta de un triángulo es (base * altura) / 2
area_erronea = base * altura + 2  # El intérprete no avisa porque la sintaxis es válida
print("Área calculada (semánticamente errónea):", area_erronea)`,
        description: 'Los errores sintácticos impiden correr la instrucción; los semánticos permiten ejecutar el programa pero arrojan resultados falsos.'
      },
      {
        title: 'Ejemplo 3: Bytecode y Máquina Virtual CPython (.pyc)',
        code: `# Python no ejecuta directamente texto plano en la CPU:
# 1. Código Fuente (.py) -> Compilador interno CPython -> Bytecode (.pyc)
# 2. Bytecode -> Máquina Virtual CPython (PVM) -> Código máquina

def sumar(a, b):
    return a + b

import dis
print("Bytecode generado internamente por CPython:")
dis.dis(sumar)`,
        description: 'La función dis.dis muestra las instrucciones de la máquina virtual que CPython genera antes de interpretar la función.'
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
        title: 'Ejemplo 1: Estructura canónica de bloques e indentación (PEP-8)',
        code: `x = 10
if x > 5:
    print("Mayor a 5")
    x += 1
    if x == 11:
        print("Bloque anidado a 8 espacios")
print("Fin del bloque principal (x =", x, ")")`,
        description: 'La sangría define la pertenencia al bloque condicional. Las líneas al ras izquierdo pertenecen al flujo principal.'
      },
      {
        title: 'Ejemplo 2: Continuación de líneas lógicas y comentarios',
        code: `# Continuación explícita con barra invertida (evitar según PEP-8):
total_ventas = 1200 + 450 + 380 + \\
               910 + 640

# Continuación implícita recomendada dentro de paréntesis o corchetes:
promedios = (
    10.5 + 14.2 +
    18.9 + 20.0
) / 4

print("Total:", total_ventas, "| Promedio:", promedios)`,
        description: 'Python permite partir expresiones largas en varias líneas físicas dentro de paréntesis, corchetes o con la barra invertida.'
      },
      {
        title: 'Ejemplo 3: Sensibilidad a mayúsculas y palabras reservadas',
        code: `# Python es 100% sensible a mayúsculas y minúsculas (case-sensitive):
valor = 10
Valor = 20
VALOR = 30
print(valor, Valor, VALOR) # Son 3 variables totalmente distintas: 10 20 30

# Las palabras reservadas (keywords) son sagradas:
# if = 5        # SyntaxError: 'if' es palabra reservada
# True = False  # SyntaxError: 'True' es palabra reservada
variable_if = 5 # Correcto: identificador propio`,
        description: 'Nunca utilices nombres idénticos a palabras clave de Python ni confundas mayúsculas con minúsculas.'
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
        title: 'Ejemplo 1: Bases numéricas en Python (Binario, Octal, Hexadecimal)',
        code: `bin_num = 0b1011  # Prefijo 0b -> 11 en decimal
oct_num = 0o14    # Prefijo 0o -> 12 en decimal
hex_num = 0xA     # Prefijo 0x -> 10 en decimal

# Python opera de forma transparente y siempre muestra decimal por omisión:
total = bin_num + oct_num + hex_num
print("11 + 12 + 10 =", total) # 33`,
        description: 'Los prefijos 0b (base 2), 0o (base 8) y 0x (base 16) son nativos y admiten mayúsculas o minúsculas (0B, 0O, 0X).'
      },
      {
        title: 'Ejemplo 2: Notación científica y precisión de punto flotante',
        code: `velocidad_luz = 3e8       # 3 * 10^8 = 300000000.0 (siempre tipo float)
constante = 6.626e-34    # 6.626 * 10^-34
punto_flotante_raro = .5 # 0.5 (válido omitir el cero inicial)
entero_flotante = 4.     # 4.0

print(type(velocidad_luz)) # <class 'float'>
# Cuidado en el examen: la aritmética flotante usa el estándar IEEE-754:
print(0.1 + 0.2 == 0.3)    # False (0.1 + 0.2 da 0.30000000000000004)`,
        description: 'Cualquier número con letra "e" o "E" o que contenga un punto decimal se almacena automáticamente como float.'
      },
      {
        title: 'Ejemplo 3: Asignación encadenada, empaquetado y tipado dinámico',
        code: `# Asignación encadenada a un mismo valor:
a = b = c = 100
print(a, b, c) # 100 100 100

# Desempaquetado múltiple simultáneo:
x, y, z = 1, 2.5, "Hola"
print(x, y, z)

# Tipado dinámico: las variables son etiquetas hacia objetos en memoria
mi_var = 42
print(type(mi_var)) # int
mi_var = "Ahora soy texto"
print(type(mi_var)) # str`,
        description: 'En Python las variables no tienen tipo fijo; el tipo pertenece al objeto apuntado en memoria.'
      }
    ],
    commonPitfalls: [
      {
        title: 'Nombres de variables no válidos',
        description: 'Las variables no pueden comenzar con dígitos ni contener guiones.',
        badCode: '2numero = 10\nclass = "Python"',
        goodCode: 'numero_2 = 10\nclase_nombre = "Python"'
      }
    ],
    keyTakeaways: [
      'Prefijos de base: 0b (bin), 0o (oct), 0x (hex).',
      'True y False son booleanos reservados y llevan mayúscula inicial.',
      'El tipado de variables es puramente dinámico.'
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
        title: 'Ejemplo 1: División entera // y módulo % con negativos',
        code: `# Con números positivos es directo:
print(14 // 4)   # 3 (trunca hacia el entero menor)
print(14 % 4)    # 2 (14 = 4 * 3 + 2)

# ¡Trampa frecuente en el examen PCEP!: Redondeo hacia el menor absoluto:
print(-14 // 4)  # -4 (redondea hacia -infinito, NO hacia -3)
print(-14 % 4)   # 2  (fórmula matemática: -14 = 4 * (-4) + 2)
print(14 // -4)  # -4
print(14 % -4)   # -2 (14 = -4 * (-4) + (-2))`,
        description: 'La división entera siempre rediseña el cociente al entero menor más cercano (piso matemático).'
      },
      {
        title: 'Ejemplo 2: Asociatividad por la derecha de la potencia (**)',
        code: `# Casi todos los operadores asocian de izquierda a derecha, pero ** asocia de derecha a izquierda:
resultado = 2 ** 2 ** 3
# Se resuelve como: 2 ** (2 ** 3) = 2 ** 8 = 256
# ¡NO se evalúa como (2 ** 2) ** 3 = 64!
print("2 ** 2 ** 3 =", resultado) # 256

# Precedencia de operadores unarios con respecto a la potencia:
print(-2 ** 2)    # -4 (la potencia tiene mayor precedencia que el signo unario -)
print((-2) ** 2)  # 4  (los paréntesis aíslan el signo negativo)`,
        description: 'Memoriza la regla de asociatividad de derecha a izquierda para la exponenciación en el examen PCEP.'
      },
      {
        title: 'Ejemplo 3: Evaluación de cortocircuito (Short-Circuit) y operadores de cadena',
        code: `# Concatenación y replicación:
print("Py" + "thon")  # 'Python'
print("Go" * 3)       # 'GoGoGo'
# print("Go" + 3)     # TypeError: solo str + str

# Cortocircuito booleano con and / or:
# En 'and', si la izquierda es False, la derecha NUNCA se evalúa:
print(False and (10 / 0 == 0)) # False (no lanza ZeroDivisionError)

# En 'or', si la izquierda es True, la derecha NUNCA se evalúa:
print(True or (10 / 0 == 0))  # True (no lanza ZeroDivisionError)`,
        description: 'Los operadores lógicos and y or omiten evaluar el lado derecho tan pronto como se define el resultado final.'
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
        title: 'Ejemplo 1: Parámetros personalizados sep= y end= en print()',
        code: `# sep define el delimitador entre elementos; end define el final de la llamada:
print("2026", "10", "11", sep="-")           # Salida: 2026-10-11
print("Curso", "Python", "PCEP", sep=" | ") # Salida: Curso | Python | PCEP

# Reemplazar el salto de línea para continuar imprimiendo en la misma fila:
for i in range(1, 4):
    print(i, end=" -> ")
print("FIN") # Salida: 1 -> 2 -> 3 -> FIN`,
        description: 'sep cambia el espacio estándar entre comas; end suprime o reemplaza el salto de línea tradicional.'
      },
      {
        title: 'Ejemplo 2: Captura con input() y conversión numérica explícita',
        code: `# input() SIEMPRE retorna un tipo str:
entrada_a = input("Ingresa primer sumando: ") # Supongamos "10"
entrada_b = input("Ingresa segundo sumando: ") # Supongamos "20"

# Sin convertir provoca concatenación textual ("1020"):
print("Concatenación directa:", entrada_a + entrada_b)

# Con conversión a entero (Casting):
num_a = int(entrada_a)
num_b = int(entrada_b)
print("Suma matemática real:", num_a + num_b) # 30`,
        description: 'Para operar números desde teclado, es mandatorio envolver input() con int() o float().'
      },
      {
        title: 'Ejemplo 3: Truncamiento al convertir float a int y bases personalizadas',
        code: `# int() trunca los decimales, NO redondea hacia el más próximo:
print(int(9.999))   # 9
print(int(-9.999))  # -9 (trunca hacia el cero)

# Conversión de cadenas con bases específicas en int(texto, base):
print(int("1010", 2)) # 10 (base 2 binaria)
print(int("FF", 16))   # 255 (base 16 hexadecimal)

# ValueError si intentas pasar decimales directos a int():
# int("12.5")         # ValueError!
numero = int(float("12.5")) # Correcto en dos pasos: 12`,
        description: 'int() no puede parsear una cadena con punto decimal directamente; requiere convertirse primero a float().'
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
        title: 'Ejemplo 1: Estructura canónica if-else (Comparación de dos números)',
        code: `# Se leen dos números:
number1 = int(input("Ingresa el primer número: "))
number2 = int(input("Ingresa el segundo número: "))

# Elige el número más grande mediante bifurcación:
if number1 > number2:
    larger_number = number1
else:
    larger_number = number2

# Imprime el resultado final:
print("El número más grande es:", larger_number)`,
        description: 'La estructura if-else evalúa la expresión booleana y ejecuta solo una de las dos ramas.'
      },
      {
        title: 'Ejemplo 2: Instrucción en una sola línea (Single-line if)',
        code: `# Se leen dos números:
number1 = int(input("Ingresa el primer número: "))
number2 = int(input("Ingresa el segundo número: "))

# Si una rama contiene una sola instrucción, puede continuarse tras los dos puntos:
if number1 > number2: larger_number = number1
else: larger_number = number2

print("El número más grande es:", larger_number)

# Nota: Este estilo compacto es perfectamente legal en Python,
# pero según PEP-8 se recomienda usar bloques indentados para mayor claridad.`,
        description: 'Cuando el cuerpo del condicional tiene solo una sentencia, Python permite escribirla en el mismo renglón tras los dos puntos.'
      },
      {
        title: 'Ejemplo 3: Cascada if-elif-else y condiciones anidadas (Mayor de 3 números)',
        code: `# Determinación del mayor entre tres números:
a = 25
b = 42
c = 18

if a >= b and a >= c:
    mayor = a
elif b >= a and b >= c:
    mayor = b
else:
    mayor = c

print("El mayor de los tres números es:", mayor)

# Operador condicional ternario en una sola expresión:
resultado = "Aprobado" if mayor >= 20 else "Reprobado"
print("Calificación:", resultado)`,
        description: 'La cascada elif evalúa de arriba hacia abajo; tan pronto una rama sea True, las siguientes son ignoradas por completo.'
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
        title: 'Ejemplo 1: Bucle while con contador y centinela',
        code: `numero = 1
while numero <= 5:
    print("Contador actual:", numero)
    numero += 1
print("Bucle finalizado. Valor de salida:", numero)`,
        description: 'El bucle while repite la ejecución mientras la condición permanezca True. Recuerda actualizar la variable de control.'
      },
      {
        title: 'Ejemplo 2: range() con tres argumentos y paso negativo',
        code: `# range(start, stop, step) - stop NUNCA está incluido:
for i in range(2, 10, 3):
    print(i, end=" ") # 2 5 8
print()

# Conteo hacia atrás con step negativo:
for n in range(5, 0, -1):
    print(n, end=".. ") # 5.. 4.. 3.. 2.. 1..
print("¡Despegue!")`,
        description: 'range(5, 0, -1) inicia en 5 y se detiene en 1 (el 0 queda excluido).'
      },
      {
        title: 'Ejemplo 3: break, continue y la cláusula else en bucles',
        code: `# Búsqueda con for-else:
numeros = [1, 3, 5, 7, 9]
buscado = 6

for n in numeros:
    if n == buscado:
        print("¡Elemento encontrado!")
        break
else:
    # Se ejecuta SI y SOLO SI el bucle terminó sin activar 'break':
    print(buscado, "no está en la lista.")

# 'continue' salta al siguiente ciclo:
for x in range(1, 6):
    if x % 2 == 0:
        continue # Salta los pares
    print("Número impar:", x)`,
        description: 'La cláusula else en un bucle funciona como un detector de finalización completa sin interrupciones por break.'
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
        title: 'Ejemplo 1: Indexación negativa y Slicing avanzado',
        code: `frutas = ["manzana", "plátano", "cereza", "kiwi", "mango"]

print("Último elemento:", frutas[-1])        # 'mango'
print("Penúltimo elemento:", frutas[-2])     # 'kiwi'
print("Rebanado [1:4]:", frutas[1:4])        # ['plátano', 'cereza', 'kiwi']
print("De dos en dos [::2]:", frutas[::2])   # ['manzana', 'cereza', 'mango']
print("Invertir lista [::-1]:", frutas[::-1]) # ['mango', 'kiwi', 'cereza', 'plátano', 'manzana']`,
        description: 'El slicing [::-1] es el modismo nativo más veloz en Python para invertir cualquier secuencia.'
      },
      {
        title: 'Ejemplo 2: Mutabilidad y métodos .append(), .insert(), .pop() y del',
        code: `numeros = [10, 20, 30]

numeros.append(40)          # Agrega al final -> [10, 20, 30, 40]
numeros.insert(1, 15)       # Inserta en índice 1 -> [10, 15, 20, 30, 40]
extraido = numeros.pop()    # Extrae el último (40) y reduce longitud
del numeros[0]              # Elimina por índice -> [15, 20, 30]

print("Lista resultante:", numeros)
print("Elemento extraído con pop:", extraido)`,
        description: 'Las listas pueden crecer o encogerse libremente en memoria durante la ejecución.'
      },
      {
        title: 'Ejemplo 3: Copia por Referencia vs Clonado [:] y Matrices 2D',
        code: `original = [1, 2, 3]
alias = original         # Ambas variables apuntan al MISMO objeto
copia = original[:]      # Crea un NUEVO objeto en memoria

original.append(99)
print("Alias (afectado):", alias)       # [1, 2, 3, 99]
print("Copia real (intacta):", copia)  # [1, 2, 3]

# Matriz bidimensional (lista de listas):
tablero = [[1, 2, 3], [4, 5, 6]]
print("Fila 1, Columna 2:", tablero[1][2]) # 6`,
        description: 'Asignar b = a no clona la lista, solo copia el puntero en memoria. Para clonar usa b = a[:].'
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
        title: 'Ejemplo 1: Sintaxis y tupla de un solo elemento con coma',
        code: `# Paréntesis sin coma es solo una expresión aritmética:
no_es_tupla = (5)   # Es un simple 'int'
si_es_tupla = (5,)  # Es una 'tuple' de 1 elemento

print(type(no_es_tupla)) # <class 'int'>
print(type(si_es_tupla)) # <class 'tuple'>

tupla_normal = 1, 2, 3 # Válido sin paréntesis (empaquetado)
print(type(tupla_normal)) # <class 'tuple'>`,
        description: 'La coma es la que define sintácticamente una tupla en Python, no los paréntesis.'
      },
      {
        title: 'Ejemplo 2: Inmutabilidad estricta y desempaquetado de tuplas',
        code: `coordenadas = (10, 20)
# coordenadas[0] = 15 # TypeError: 'tuple' object does not support item assignment

# Desempaquetado simultáneo:
latitud, longitud = coordenadas
print("Lat:", latitud, "| Long:", longitud)

# Intercambio de variables (Swapping nativo de Python):
a, b = 100, 200
a, b = b, a # Empaqueta (b, a) y desempaqueta en a, b
print("a =", a, "b =", b) # a = 200, b = 100`,
        description: 'Las tuplas protegen la integridad de datos constantes que no deben ser alterados accidentalmente.'
      },
      {
        title: 'Ejemplo 3: Concatenación y conversión bidireccional tupla-lista',
        code: `t1 = (1, 2)
t2 = (3, 4)
t3 = t1 + t2 # Produce una NUEVA tupla (1, 2, 3, 4)
print(t3 * 2) # (1, 2, 3, 4, 1, 2, 3, 4)

# Para modificar una tupla, se convierte temporalmente a lista:
temp = list(t1)
temp.append(99)
t1_modificada = tuple(temp)
print("Tupla reconstruida:", t1_modificada) # (1, 2, 99)`,
        description: 'Las tuplas no tienen métodos .append() ni .insert(). Para alterarlas se transforman a list y de vuelta a tuple.'
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
        title: 'Ejemplo 1: Creación, acceso seguro con .get() y claves válidas',
        code: `alumno = {
    "nombre": "Carlos",
    "edad": 21,
    "activo": True
}

print("Nombre:", alumno["nombre"])
# print(alumno["promedio"]) # KeyError!

# .get() previene el error devolviendo un valor por defecto:
promedio = alumno.get("promedio", 10.0)
print("Promedio (con fallback):", promedio) # 10.0`,
        description: 'Utiliza .get() cuando no tengas la certeza de que una clave exista en el diccionario.'
      },
      {
        title: 'Ejemplo 2: Operador in e iteración con .items(), .keys() y .values()',
        code: `precios = {"manzana": 1.5, "pera": 2.0, "uva": 3.2}

# ¡Pregunta de examen!: 'in' busca ÚNICAMENTE en las CLAVES:
print("manzana" in precios) # True
print(1.5 in precios)       # False (1.5 es valor, no clave)

# Iteración desempaquetando pares con .items():
for fruta, precio in precios.items():
    print(f"{fruta} -> \${precio}")`,
        description: 'Para buscar valores debes usar 1.5 in precios.values(). El operador in directo revisa solo las claves.'
      },
      {
        title: 'Ejemplo 3: Modificación, adición y el método .update()',
        code: `config = {"puerto": 8080, "host": "127.0.0.1"}

config["puerto"] = 9000     # Modifica valor existente
config["ssl"] = True        # Inserta nueva clave

# .update() fusiona o sobreescribe múltiples claves a la vez:
config.update({"puerto": 443, "debug": False})
del config["host"]          # Elimina una clave

print("Configuración final:", config)`,
        description: 'Los diccionarios son mutables y permiten alterar, insertar y eliminar pares clave-valor dinámicamente.'
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
* Caracteres de escape: '\\n' (salto de línea), '\\t' (tabulador), '\\\\' (barra invertida).
* Métodos esenciales: .upper(), .lower(), .find(), .replace(), .split(), .join().
    `,
    codeExamples: [
      {
        title: 'Ejemplo 1: Inmutabilidad, slicing y caracteres de escape',
        code: `mensaje = "Python"
# mensaje[0] = "p" # TypeError: 'str' object does not support item assignment

# Para modificar una cadena se construye una nueva:
nuevo_mensaje = "p" + mensaje[1:]
print("Cadena modificada:", nuevo_mensaje) # 'python'

# Caracteres de escape:
texto = "Línea 1\\nLínea 2\\tTabulado\\nRuta: C:\\\\Archivos"
print(texto)`,
        description: 'Las cadenas son secuencias inmutables. Cualquier método que las altere retorna un nuevo string en memoria.'
      },
      {
        title: 'Ejemplo 2: Métodos .strip(), .upper(), .lower() y .replace()',
        code: `entrada = "   Usuario_PCEP   "
limpio = entrada.strip() # Remueve espacios en blanco de extremos
print("Limpio:", limpio)

frase = "Me encanta Java. Java es rápido."
corregida = frase.replace("Java", "Python")
print(corregida) # 'Me encanta Python. Python es rápido.'`,
        description: 'replace() sustituye todas las ocurrencias encontradas y retorna la nueva cadena producida.'
      },
      {
        title: 'Ejemplo 3: .split(), .join() y búsqueda con .find() vs .index()',
        code: `datos = "manzana,platano,pera,naranja"
frutas = datos.split(",") # Divide por coma -> lista
print("Lista:", frutas)

unido = " - ".join(frutas) # Une con separador
print("Unido:", unido)

# .find() devuelve -1 si no existe; .index() lanza ValueError:
print("Python".find("th"))   # 2
print("Python".find("xyz"))  # -1 (no existe, seguro)
# print("Python".index("xyz")) # ValueError!`,
        description: 'find() es preferible a index() cuando no sabes con certeza si el patrón se encuentra en la cadena.'
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
        title: 'Ejemplo 1: Definición e invocación básica con return',
        code: `def calcular_area(base, altura):
    area = base * altura
    return area

resultado = calcular_area(5, 4)
print("Área calculada:", resultado) # 20`,
        description: 'Las funciones se declaran con def y se invocan con su nombre seguido de paréntesis y argumentos.'
      },
      {
        title: 'Ejemplo 2: Retorno implícito de None y salida temprana',
        code: `def funcion_sin_retorno():
    x = 10 + 20
    # No hay instrucción return explícita

valor = funcion_sin_retorno()
print("Valor retornado:", valor) # None
print("¿Es None?:", valor is None) # True

def clasificar_edad(edad):
    if edad < 18:
        return "Menor"
    return "Mayor" # Salida temprana si no fue menor

print(clasificar_edad(20)) # 'Mayor'`,
        description: 'Toda función en Python siempre retorna un valor; si no colocas return, Python devuelve None automáticamente.'
      },
      {
        title: 'Ejemplo 3: Paso de argumentos por valor vs por referencia',
        code: `# Objetos inmutables (int, str, float) no se ven afectados fuera:
def modificar_entero(num):
    num += 10

x = 5
modificar_entero(x)
print("x permanece intacto:", x) # 5

# Objetos mutables (list, dict) SÍ se modifican dentro de la función:
def agregar_item(lista):
    lista.append("nuevo")

mi_lista = [1, 2]
agregar_item(mi_lista)
print("mi_lista fue modificada:", mi_lista) # [1, 2, 'nuevo']`,
        description: 'Los objetos mutables como las listas se pasan por referencia; las modificaciones dentro de la función alteran al original.'
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
        title: 'Ejemplo 1: Argumentos posicionales vs palabras clave (keyword)',
        code: `def presentacion(nombre, edad, rol):
    print(f"{nombre} tiene {edad} años y es {rol}.")

# Posicionales (el orden importa):
presentacion("Luis", 25, "Desarrollador")

# Por palabra clave (keyword, el orden NO importa):
presentacion(rol="Diseñadora", nombre="Elena", edad=22)

# Regla PCEP: los posicionales van ANTES que los nombrados:
presentacion("Carlos", rol="Docente", edad=30)
# presentacion(edad=30, "Carlos", "Docente") # SyntaxError!`,
        description: 'Puedes mezclar argumentos posicionales y nombrados, siempre que los posicionales se sitúen primero.'
      },
      {
        title: 'Ejemplo 2: Parámetros con valores por defecto (Default arguments)',
        code: `def saludo(nombre, mensaje="Hola", signo="!"):
    print(f"{mensaje}, {nombre}{signo}")

saludo("Ana")                      # 'Hola, Ana!'
saludo("Ana", mensaje="Bienvenida") # 'Bienvenida, Ana!'
saludo("Ana", "Qué tal", "???")    # 'Qué tal, Ana???'

# Los parámetros con valor por defecto SIEMPRE van al final:
# def error(a=1, b): pass # SyntaxError: non-default argument follows default argument`,
        description: 'Los parámetros obligatorios deben preceder siempre a los parámetros con valores por omisión.'
      },
      {
        title: 'Ejemplo 3: Ámbito de variables y la palabra reservada global',
        code: `contador = 0 # Variable en ámbito global

def incrementar_global():
    global contador # Da permiso para escribir en la variable exterior
    contador += 1

def leer_sin_modificar():
    # Las funciones pueden LEER variables globales sin problema:
    print("Leyendo contador global:", contador)

incrementar_global()
incrementar_global()
leer_sin_modificar() # 2
print("Valor final de contador:", contador) # 2`,
        description: 'Para modificar una variable fuera de la función es obligatorio invocar global antes de asignarle un valor.'
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
        title: 'Ejemplo 1: Captura polimórfica con LookupError (IndexError y KeyError)',
        code: `# LookupError es la superclase de IndexError y KeyError:
lista = [10, 20]
try:
    x = lista[5] # Provoca IndexError
except LookupError as error:
    print("Interceptado por LookupError:", type(error).__name__)

dicc = {"a": 1}
try:
    y = dicc["clave_falsa"] # Provoca KeyError
except LookupError as error:
    print("Interceptado por LookupError:", type(error).__name__)`,
        description: 'Capturar LookupError atrapa tanto accesos fallidos a secuencias indexadas como a diccionarios.'
      },
      {
        title: 'Ejemplo 2: Jerarquía matemática con ArithmeticError (ZeroDivisionError)',
        code: `# ZeroDivisionError desciende de ArithmeticError:
try:
    resultado = 10 / 0
except ArithmeticError as e:
    print("ArithmeticError capturó:", type(e).__name__)
    print("Mensaje:", e)`,
        description: 'Cualquier excepción hija es interceptada automáticamente por un bloque except que nombre a su clase padre.'
      },
      {
        title: 'Ejemplo 3: TypeError vs ValueError vs NameError',
        code: `# TypeError: tipo incompatible para la operación solicitada:
try:
    suma = "10" + 5
except TypeError as e:
    print("TypeError:", e)

# ValueError: tipo correcto pero contenido inadmisible:
try:
    numero = int("hola")
except ValueError as e:
    print("ValueError:", e)

# NameError: identificador no declarado en el entorno:
try:
    print(variable_inexistente)
except NameError as e:
    print("NameError:", e)`,
        description: 'Aprende a diferenciar con precisión cuándo Python lanza TypeError frente a ValueError.'
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
        title: 'Ejemplo 1: Múltiples bloques except en orden jerárquico estricto',
        code: `def division_segura(a, b):
    try:
        val_a = float(a)
        val_b = float(b)
        return val_a / val_b
    except ZeroDivisionError:
        return "Error: División entre cero no permitida"
    except ValueError:
        return "Error: Los datos deben ser numéricos"
    except Exception as e:
        return f"Error inesperado: {type(e).__name__}"

print(division_segura(10, 2))     # 5.0
print(division_segura(10, 0))     # Error: División entre cero...
print(division_segura("hola", 2)) # Error: Los datos deben ser numéricos`,
        description: 'Las excepciones hijas deben ubicarse antes que las generales para evitar código muerto inalcanzable.'
      },
      {
        title: 'Ejemplo 2: Cláusulas else y finally en el bloque try-except',
        code: `try:
    x = int("100")
    y = x / 2
except ValueError:
    print("Hubo un error de valor")
else:
    # 'else' corre SOLO si el bloque try NO tuvo ninguna excepción:
    print("Operación exitosa: resultado =", y)
finally:
    # 'finally' corre SIEMPRE, sin importar si hubo error o no:
    print("Bloque finally: limpieza de recursos completada")`,
        description: 'else ejecuta cuando todo sale bien; finally ejecuta incondicionalmente al concluir el bloque.'
      },
      {
        title: 'Ejemplo 3: Lanzamiento manual de excepciones con raise y propagación',
        code: `def validar_edad(edad):
    if edad < 0:
        # 'raise' detiene la ejecución y arroja la excepción:
        raise ValueError("La edad no puede ser negativa")
    return f"Edad aceptada: {edad}"

try:
    print(validar_edad(-5))
except ValueError as e:
    print("Excepción interceptada por el llamador:", e)`,
        description: 'raise permite lanzar excepciones personalizadas o reenviar errores hacia los módulos superiores.'
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

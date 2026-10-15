import { Exercise } from '../../../types';

/**
 * Banco de ejercicios de programación interactiva importados de 4Geeks Academy
 * Fuente: https://github.com/4GeeksAcademy/python-beginner-programming-exercises
 * Licencia: Términos Educativos de BreatheCode (Atribución Académica)
 */
export const FOUR_GEEKS_EXERCISES: Exercise[] = [
  {
    "id": "pcep-4geeks-01-console",
    "title": "Impresión en Consola con print()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida por Consola",
    "subtopic": "print() y cadenas de caracteres",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Usa la función `print()` para escribir exactamente el texto `Hello World!` en la consola.",
    "starterCode": "# print \"Hello World!\" on the console",
    "solutionCode": "# print \"Hello World!\" on the console\n\nprint(\"Hello World!\")",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.5 (print() y cadenas de caracteres).",
    "concepts": [
      "print()",
      "salida estándar",
      "cadenas de texto"
    ],
    "tags": [
      "consola",
      "print",
      "pcep-1.5",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/01-Console",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Hello World!\n",
        "description": "Imprime exactamente Hello World!"
      }
    ]
  },
  {
    "id": "pcep-4geeks-02-declare-variables",
    "title": "Declaración y Asignación de Variables",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Variables",
    "subtopic": "Declaración y asignación de variables",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Declara una variable llamada `color` asignándole el valor `'Yellow'`, y luego imprímela en la consola usando `print(color)`.",
    "starterCode": "# ✅ ↓ your code here ↓ ✅\n",
    "solutionCode": "# ✅ ↓ your code here ↓ ✅\n\ncolor = \"Yellow\"\nprint(color)",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.3 (Declaración y asignación de variables).",
    "concepts": [
      "variables",
      "asignación",
      "strings"
    ],
    "tags": [
      "variables",
      "asignación",
      "pcep-1.3",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/02-Declare-Variables",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Yellow\n",
        "description": "Variable color con valor Yellow"
      }
    ]
  },
  {
    "id": "pcep-4geeks-03-print-variables-in-the-console",
    "title": "Print more Variables in The Impresión en Consola con print()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida por Consola",
    "subtopic": "Impresión de múltiples variables con print()",
    "pcepObjective": "1.5",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Imprime dos variables en una sola llamada a `print()`, separándolas con coma: `print(color, item)` para que la salida muestre `red marker`.",
    "starterCode": "# ✅ ↓ your code here ↓ ✅",
    "solutionCode": "# ✅ ↓ your code here ↓ ✅\n\ncolor = \"red\"\nitem = \"marker\"\nprint(color, item)\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.5 (Impresión de múltiples variables con print()).",
    "concepts": [
      "print()",
      "múltiples argumentos",
      "separador"
    ],
    "tags": [
      "print",
      "variables",
      "pcep-1.5",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/03-Print-Variables-In-The-Console",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "red marker\n",
        "description": "Imprime color e item separados por espacio"
      }
    ]
  },
  {
    "id": "pcep-4geeks-04-multiply-two-values",
    "title": "Multiplicación Aritmética de Valores",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores y Tipos de Datos",
    "subtopic": "Operador aritmético de multiplicación (*)",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Calcula la multiplicación de `2345` por `7323` usando el operador aritmético `*`. Almacena el resultado en la variable `variables_are_cool` e imprímelo en la consola.",
    "starterCode": "# ✅ ↓ your code here ↓ ✅\n",
    "solutionCode": "# ✅ ↓ your code here ↓ ✅\n\nvariables_are_cool = 2345 * 7323\nprint(variables_are_cool)",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.4 (Operador aritmético de multiplicación (*)).",
    "concepts": [
      "operadores aritméticos",
      "multiplicación (*)",
      "enteros"
    ],
    "tags": [
      "operadores",
      "aritmética",
      "pcep-1.4",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/04-Multiply-Two-Values",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "17172435\n",
        "description": "Multiplicación de 2345 * 7323"
      }
    ]
  },
  {
    "id": "pcep-4geeks-05-user-inputed-values",
    "title": "Lectura de Entrada del Usuario con input()",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Entrada y Salida por Consola",
    "subtopic": "Captura con input() y conversión con int()",
    "pcepObjective": "1.5",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Solicita la edad del usuario mediante `input()`, conviértela a entero con `int()`, súmale `10` años e imprime en consola el mensaje en formato: `Your age is: X`.",
    "starterCode": "age = int(input('What is your age?\\n'))\n# ✅ ↓ CHANGE THE CODE BELOW TO ADD 10 TO AGE ↓ ✅\n\nprint(\"Your age is: \"+str(age))",
    "solutionCode": "age = int(input('What is your age?\\n'))\n# ✅ ↓ CHANGE THE CODE BELOW TO ADD 10 TO AGE ↓ ✅\nage = age + 10\nprint(\"Your age is: \"+str(age))\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.5 (Captura con input() y conversión con int()).",
    "concepts": [
      "input()",
      "int()",
      "conversión de tipos",
      "suma"
    ],
    "tags": [
      "input",
      "conversión",
      "pcep-1.5",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/05-User-Inputed-Values",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "25\n",
        "expectedOutput": "What is your age?\nYour age is: 35\n",
        "description": "Suma 10 a la edad ingresada (25 -> 35)"
      },
      {
        "input": "18\n",
        "expectedOutput": "What is your age?\nYour age is: 28\n",
        "description": "Suma 10 a la edad ingresada (18 -> 28)"
      }
    ]
  },
  {
    "id": "pcep-4geeks-06-string-concatenation",
    "title": "Concatenación de Cadenas",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores y Tipos de Datos",
    "subtopic": "Concatenación de cadenas (+)",
    "pcepObjective": "1.4",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Declara las variables `my_var1 = 'Hello'` y `my_var2 = 'World'`. Concaténalas con un espacio en medio utilizando el operador `+` para imprimir `Hello World`.",
    "starterCode": "# ✅ ↓ Set the values for my_var1 and my_var2 here ↓ ✅\n\n\n## Don't change anything below this line\nthe_new_string = my_var1 + ' ' + my_var2\nprint(the_new_string)\n",
    "solutionCode": "# ✅ ↓ Set the values for my_var1 and my_var2 here ↓ ✅\n\nmy_var1 = \"Hello\"\nmy_var2 = \"World\"\n\n## Don't change anything below this line\nthe_new_string = my_var1 + ' ' + my_var2\nprint(the_new_string)\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.4 (Concatenación de cadenas (+)).",
    "concepts": [
      "strings",
      "concatenación (+)",
      "literales"
    ],
    "tags": [
      "cadenas",
      "concatenación",
      "pcep-1.4",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/06-String-Concatenation",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Hello World\n",
        "description": "Concatenación de my_var1 y my_var2 con espacio"
      }
    ]
  },
  {
    "id": "pcep-4geeks-07-create-a-basic-html",
    "title": "Composición de Documento HTML",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Literales y Variables",
    "subtopic": "Composición de cadenas complejas y multilínea",
    "pcepObjective": "1.3",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Usa las variables de etiquetas proporcionadas y concatenación de cadenas (`+`) para generar la estructura HTML básica: `<html><head><title></title></head><body></body></html>` y almacénala en `html_document`.",
    "starterCode": "a = '</title>'\nb = '</html>'\nc = '<head>'\nd = '</body>'\ne = '<html>'\nf = '</head>'\ng = '<title>'\nh = '<body>'\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\n\n# ✅ ↓ start coding below here ↓ ✅\n\n",
    "solutionCode": "a = '</title>'\nb = '</html>'\nc = '<head>'\nd = '</body>'\ne = '<html>'\nf = '</head>'\ng = '<title>'\nh = '<body>'\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\n\n# ✅ ↓ start coding below here ↓ ✅\n\nhtml_document = e + c + g + a + f + h + d + b\nprint(html_document)\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.3 (Composición de cadenas complejas y multilínea).",
    "concepts": [
      "cadenas",
      "concatenación",
      "composición"
    ],
    "tags": [
      "cadenas",
      "formato",
      "pcep-1.3",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/07-Create-a-Basic-HTML",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "<html><head><title></title></head><body></body></html>\n",
        "description": "Estructura HTML básica generada con variables"
      }
    ]
  },
  {
    "id": "pcep-4geeks-08-1-your-first-if",
    "title": "Tu Primer Condicional if",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Sentencias Condicionales",
    "subtopic": "Estructura condicional simple if y comparación (>)",
    "pcepObjective": "2.1",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Pregunta al usuario cuánto dinero tiene en el bolsillo con `input()`. Si la cantidad es mayor a `100`, imprime `Give me some money!`. De lo contrario, imprime `You are a poor guy, go away!`.",
    "starterCode": "total = int(input('How much money do you have in your pocket\\n'))\n\n# ✅ ↓ YOUR CODE HERE ↓ ✅\n",
    "solutionCode": "total = int(input('How much money do you have in your pocket\\n'))\n\n# ✅ ↓ YOUR CODE HERE ↓ ✅\nif total > 100:\n    print(\"Give me your money!\")\nelif total > 50:\n    print(\"Buy me some coffee, you cheap!\")\nelse:\n    print(\"You are a poor guy, go away!\")\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.1 (Estructura condicional simple if y comparación (>)).",
    "concepts": [
      "if",
      "operadores relacionales (>)",
      "control de flujo"
    ],
    "tags": [
      "condicionales",
      "if",
      "pcep-2.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/08.1-Your-First-If",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "150\n",
        "expectedOutput": "How much money do you have in your pocket\nGive me some money!\n",
        "description": "Mayor a 100 dólares"
      },
      {
        "input": "50\n",
        "expectedOutput": "How much money do you have in your pocket\nYou are a poor guy, go away!\n",
        "description": "Menor o igual a 100 dólares"
      }
    ]
  },
  {
    "id": "pcep-4geeks-08-2-how-much-the-wedding-costs",
    "title": "Cálculo de Costo de Bodas por Tramos",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Sentencias Condicionales",
    "subtopic": "Estructuras condicionales múltiples (if-elif-else)",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Determina el costo de una boda según la cantidad de invitados ingresada por el usuario:\n\n* Hasta 50 invitados: `$4,000`\n* De 51 a 100 invitados: `$10,000`\n* De 101 a 200 invitados: `$15,000`\n* Más de 200 invitados: `$20,000`\n\nAsigna el valor correspondiente a `price` e imprime: `Your wedding will cost X dollars`.",
    "starterCode": "user_input = int(input('How many people are coming to your wedding?\\n'))\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE  ⬆ ❌\n\n\nif user_input <= 50:\n    price = 4000\n# ✅ ↓ Your code here ↓ ✅\n\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint('Your wedding will cost '+str(price)+' dollars')",
    "solutionCode": "user_input = int(input('How many people are coming to your wedding?\\n'))\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE  ⬆ ❌\n\nif user_input <= 50:\n    price = 4000\n# ✅ ↓ Your code here ↓ ✅\nelif user_input <= 100:\n    price = 10000\nelif user_input <= 200:\n    price = 15000\nelse:\n    price = 20000\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint('Your wedding will cost '+str(price)+' dollars')",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.1 (Estructuras condicionales múltiples (if-elif-else)).",
    "concepts": [
      "if-elif-else",
      "rangos condicionales",
      "evaluación por tramos"
    ],
    "tags": [
      "condicionales",
      "elif",
      "else",
      "pcep-2.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/08.2-How-Much-The-Wedding-Costs",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "40\n",
        "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 4000 dollars\n",
        "description": "Hasta 50 invitados ($4000)"
      },
      {
        "input": "80\n",
        "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 10000 dollars\n",
        "description": "De 51 a 100 invitados ($10000)"
      },
      {
        "input": "150\n",
        "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 15000 dollars\n",
        "description": "De 101 a 200 invitados ($15000)"
      },
      {
        "input": "300\n",
        "expectedOutput": "How many people are coming to your wedding?\nYour wedding will cost 20000 dollars\n",
        "description": "Más de 200 invitados ($20000)"
      }
    ]
  },
  {
    "id": "pcep-4geeks-09-random-numbers",
    "title": "Generación de Números Aleatorios",
    "section": 1,
    "sectionTitle": "Sección 1 — Fundamentos de Programación y Python",
    "topic": "Operadores y Tipos de Datos",
    "subtopic": "Uso de bibliotecas estándar (módulo random)",
    "pcepObjective": "1.4",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Usa el módulo `random` para generar y retornar un número entero aleatorio comprendido entre 1 y 10 (inclusive) mediante `random.randint(1, 10)`.",
    "starterCode": "import random\n\ndef get_randomInt():\n  \t# ✅ ↓ CHANGE ONLY THIS ONE LINE BELOW ↓ ✅\n\trandom_number = random.random()\n\treturn random_number\n\nprint(get_randomInt())",
    "solutionCode": "import random\n\ndef get_randomInt():\n\t# ✅ ↓ CHANGE ONLY THIS ONE LINE BELOW ↓ ✅\n\trandom_number = random.randint(1,10)\n\treturn random_number\n\nprint(get_randomInt())",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 1.4 (Uso de bibliotecas estándar (módulo random)).",
    "concepts": [
      "random",
      "randint",
      "generación aleatoria"
    ],
    "tags": [
      "módulos",
      "random",
      "pcep-1.4",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/09-Random-Numbers",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "8\n",
        "description": "Salida canónica estándar esperada"
      }
    ]
  },
  {
    "id": "pcep-4geeks-10-calling-your-first-function",
    "title": "Llamada e Invocación de Funciones",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Excepciones",
    "topic": "Funciones",
    "subtopic": "Invocación de funciones y paso de argumentos",
    "pcepObjective": "4.1",
    "difficulty": "basic",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Utiliza la función predefinida `is_odd(my_number)` para comprobar si el número `45345` es impar e imprime el resultado booleano (`True`) en la consola.",
    "starterCode": "def is_odd(my_number):\n  \treturn (my_number % 2 != 0)\n\n\ndef my_main_code():\n    # ✅ ↓ Your code here ↓ ✅",
    "solutionCode": "def is_odd(my_number):\n  \treturn (my_number % 2 != 0)\n\n\ndef my_main_code():\n    # ✅ ↓ Your code here ↓ ✅\n    print(is_odd(45345))",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 4.1 (Invocación de funciones y paso de argumentos).",
    "concepts": [
      "funciones",
      "invocación",
      "argumentos",
      "operador módulo (%)"
    ],
    "tags": [
      "funciones",
      "llamada",
      "pcep-4.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/10-Calling-Your-First-Function",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "True\n",
        "description": "Comprueba si 45345 es impar (True)"
      }
    ]
  },
  {
    "id": "pcep-4geeks-10-1-creating-your-first-function",
    "title": "Definición de Funciones con def",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Excepciones",
    "topic": "Funciones",
    "subtopic": "Definición de funciones con def y sentencia return",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Define una función llamada `add_numbers(a, b)` que reciba dos parámetros y retorne su suma usando la sentencia `return`.",
    "starterCode": "def add_numbers(a,b):\n\t# This is the function's body ✅↓ Write your code here ↓✅\n\t\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint(add_numbers(3,4))\n",
    "solutionCode": "def add_numbers(a,b):\n\t# This is the function's body ✅↓ Write your code here ↓✅\n\treturn a + b\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint(add_numbers(3,4))\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 4.1 (Definición de funciones con def y sentencia return).",
    "concepts": [
      "def",
      "parámetros",
      "return",
      "suma"
    ],
    "tags": [
      "funciones",
      "def",
      "return",
      "pcep-4.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/10.1-Creating-Your-First-Function",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "7\n",
        "description": "Llama add_numbers(3, 4) y devuelve 7"
      }
    ]
  },
  {
    "id": "pcep-4geeks-11-create-a-new-function",
    "title": "Create a New Function",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Excepciones",
    "topic": "Funciones",
    "subtopic": "Funciones con retorno y modularización",
    "pcepObjective": "4.1",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Crea una función llamada `generate_random()` que genere y retorne un número entero aleatorio entre 0 y 9 utilizando `random.randint(0, 9)`.",
    "starterCode": "import random\n\n# ✅↓ Write your code here ↓✅\n",
    "solutionCode": "import random\n\n# ✅↓ Write your code here ↓✅\ndef generate_random():\n    result = random.randint(0,9)\n    return result\n\nprint(generate_random())\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 4.1 (Funciones con retorno y modularización).",
    "concepts": [
      "def",
      "return",
      "modularización"
    ],
    "tags": [
      "funciones",
      "return",
      "pcep-4.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/11-Create-A-New-Function",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "9\n",
        "description": "Salida canónica estándar esperada"
      }
    ]
  },
  {
    "id": "pcep-4geeks-12-rand-from-one-to-twelve",
    "title": "Funciones con Generación de Rango",
    "section": 4,
    "sectionTitle": "Sección 4 — Funciones y Excepciones",
    "topic": "Funciones",
    "subtopic": "Funciones con valores calculados",
    "pcepObjective": "4.1",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Crea una función llamada `get_randomInt()` que genere y retorne un entero aleatorio comprendido entre 1 y 12.",
    "starterCode": "import random\n\ndef get_randomInt():\n\t# ✅↓ Write your code here ↓✅\n\treturn None\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint(get_randomInt())\n",
    "solutionCode": "import random\n\ndef get_randomInt():\n\t# ✅↓ Write your code here ↓✅\n\trandom_number = random.randrange(1,13)\n\treturn random_number\n\n# ❌ ↓ DON'T CHANGE THE CODE BELOW ↓ ❌\nprint(get_randomInt())\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 4.1 (Funciones con valores calculados).",
    "concepts": [
      "funciones",
      "return",
      "módulos"
    ],
    "tags": [
      "funciones",
      "pcep-4.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/12-Rand-From-One-to-Twelve",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "10\n",
        "description": "Salida canónica estándar esperada"
      }
    ]
  },
  {
    "id": "pcep-4geeks-13-your-first-loop",
    "title": "Tu Primer Bucle con for y range()",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Iteraciones y Bucles",
    "subtopic": "Bucle for y la función range()",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Usa un bucle `for` junto con la función `range(12)` para imprimir en consola los números del `0` al `11`, cada uno en una línea independiente.",
    "starterCode": "def start_counting():\n\tfor i in range(10):\n\t\tprint(i)\n\treturn i\n\nstart_counting()",
    "solutionCode": "def start_counting():\n\tfor i in range(12):\n\t\tprint(i)\n\treturn i\n\nstart_counting()",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.2 (Bucle for y la función range()).",
    "concepts": [
      "for",
      "range()",
      "iteración",
      "secuencias"
    ],
    "tags": [
      "bucles",
      "for",
      "range",
      "pcep-2.2",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/13-Your-First-Loop",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n",
        "description": "Imprime del 0 al 11 con range(12)"
      }
    ]
  },
  {
    "id": "pcep-4geeks-14-create-a-for-loop",
    "title": "Repetición de Tareas con for loop",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Iteraciones y Bucles",
    "subtopic": "Repetición controlada de instrucciones con bucle for",
    "pcepObjective": "2.2",
    "difficulty": "basic_plus",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Crea una función llamada `standards_maker()` que use un bucle `for` para imprimir exactamente 10 veces la frase `'I will ask questions if I am stuck'`.",
    "starterCode": "def standards_maker():\n    # ✅↓ Write your code here ↓✅\n\n\n# ✅↓ remember to call the function outside (here) ↓✅\n",
    "solutionCode": "def standards_maker():\n    # ✅↓ Write your code here ↓✅\n    for i in range(0, 300):\n        print(\"I will ask questions if I am stuck\")\n\n# ✅↓ remember to call the function outside (here) ↓✅\nstandards_maker()\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.2 (Repetición controlada de instrucciones con bucle for).",
    "concepts": [
      "for",
      "repetición",
      "range()"
    ],
    "tags": [
      "bucles",
      "for",
      "pcep-2.2",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/14-Create-A-For-Loop",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "I will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\nI will ask questions if I am stuck\n",
        "description": "Repite la frase 10 veces en líneas consecutivas"
      }
    ]
  },
  {
    "id": "pcep-4geeks-15-looping-with-fizzbuzz",
    "title": "El Algoritmo Clásico FizzBuzz",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Iteraciones y Bucles",
    "subtopic": "Algoritmo clásico FizzBuzz (Bucles + Condicionales múltiples)",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Implementa el algoritmo clásico FizzBuzz para los números del 1 al 100:\n\n* Si el número es múltiplo de 3 y de 5, imprime `FizzBuzz`.\n* Si solo es múltiplo de 3, imprime `Fizz`.\n* Si solo es múltiplo de 5, imprime `Buzz`.\n* En cualquier otro caso, imprime el número.",
    "starterCode": "def fizz_buzz():\n    # ✅↓ Write your code here ↓✅\n\n# ❌↓ DON'T CHANGE THE CODE BELOW ↓❌\nfizz_buzz()\n",
    "solutionCode": "def fizz_buzz():\n    # ✅↓ Write your code here ↓✅\n    for i in range(1, 101):\n        if i % 3 == 0 and i % 5 == 0:\n            print(\"FizzBuzz\")\n        elif i % 3 == 0:\n            print(\"Fizz\")\n        elif i % 5 == 0:\n            print(\"Buzz\")\n        else:\n            print(i)\n\n# ❌↓ DON'T CHANGE THE CODE BELOW ↓❌\nfizz_buzz()\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.2 (Algoritmo clásico FizzBuzz (Bucles + Condicionales múltiples)).",
    "concepts": [
      "for",
      "if-elif-else",
      "módulo (%)",
      "FizzBuzz"
    ],
    "tags": [
      "bucles",
      "algoritmos",
      "fizzbuzz",
      "pcep-2.2",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/15-Looping-With-FizzBuzz",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz\n",
        "description": "Secuencia FizzBuzz completa de 1 a 100"
      }
    ]
  },
  {
    "id": "pcep-4geeks-16-random-colors-loop",
    "title": "Iteración y Selección de Colores",
    "section": 3,
    "sectionTitle": "Sección 3 — Colecciones de Datos",
    "topic": "Listas",
    "subtopic": "Recorrido de listas y selección de elementos",
    "pcepObjective": "3.1",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Crea una función llamada `get_color(color_number)` que itere sobre una lista y retorne una colección de colores seleccionados aleatoriamente.",
    "starterCode": "import random\n\ndef get_color(color_number=4):\n    # Making sure is a number and not a string\n    color_number = int(color_number)\n\n    switcher = {\n                  0:'red',\n                  1:'yellow',\n                  2:'blue',\n                  3:'green',\n                  4:'black'\n              }\n    \n    return switcher.get(color_number,\"Invalid Color Number\")\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\n\ndef get_allStudentColors():\n    example_color = get_color(1)\n    students_array = []\n    # ✅ ↓ your loop here ↓ ✅\n    \n\nprint(get_allStudentColors())\n",
    "solutionCode": "import random\n\ndef get_color(color_number=4):\n    # Making sure is a number and not a string\n    color_number = int(color_number)\n\n    switcher = {\n                  0:'red',\n                  1:'yellow',\n                  2:'blue',\n                  3:'green',\n                  4:'black'\n              }\n    \n    return switcher.get(color_number,\"Invalid Color Number\")\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\n\ndef get_allStudentColors():\n    example_color = get_color(1)\n    students_array = []\n    # ✅ ↓ your loop here ↓ ✅\n    for i in range(10):\n        students_array.append(get_color(random.randint(0,3)))\n\n    return students_array\n\n\nprint(get_allStudentColors())\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 3.1 (Recorrido de listas y selección de elementos).",
    "concepts": [
      "listas",
      "recorrido",
      "iteración",
      "condiciones"
    ],
    "tags": [
      "listas",
      "bucles",
      "pcep-3.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/16-Random-Colors-Loop",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "['green', 'green', 'yellow', 'yellow', 'blue', 'blue', 'green', 'blue', 'red', 'red']\n",
        "description": "Salida canónica estándar esperada"
      }
    ]
  },
  {
    "id": "pcep-4geeks-17-russian-roulette",
    "title": "Simulación de Ruleta con Condiciones",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Sentencias Condicionales",
    "subtopic": "Toma de decisiones lógicas en estados cambiantes",
    "pcepObjective": "2.1",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Completa la función `fire_gun()`: si la posición de la bala coincide con la recámara actual, retorna `You are dead!`; en cualquier otro caso, retorna `Keep playing!`.",
    "starterCode": "import random\n\nbullet_position = 3\n\ndef spin_chamber():\n\tchamber_position = random.randint(1,6)\n\treturn chamber_position\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\ndef fire_gun():\n\t# ✅ ↓ your code here ↓ ✅\n\treturn None\n\n\nprint(fire_gun())\n",
    "solutionCode": "import random\n\nbullet_position = 3\n\ndef spin_chamber():\n\tchamber_position = random.randint(1,6)\n\treturn chamber_position\n\n# ❌ ⬆ DON'T CHANGE THE CODE ABOVE ⬆ ❌\ndef fire_gun():\n\t# ✅ ↓ your loop here ↓ ✅\n\tif spin_chamber() == bullet_position:\n\t\treturn \"You are dead!\"\n\telse:\n\t\treturn \"Keep playing!\"\n\nprint(fire_gun())\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.1 (Toma de decisiones lógicas en estados cambiantes).",
    "concepts": [
      "if-else",
      "comparación de estado",
      "funciones"
    ],
    "tags": [
      "condicionales",
      "juego",
      "pcep-2.1",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/17-Russian-Roulette",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "Keep playing!\n",
        "description": "Disparo en recámara no letal"
      }
    ]
  },
  {
    "id": "pcep-4geeks-18-the-beatles",
    "title": "Construcción de Letras con Bucles (The Beatles)",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Iteraciones y Bucles",
    "subtopic": "Construcción iterativa de cadenas con condiciones específicas",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Crea una función llamada `sing()` que utilice un bucle `for` para construir y retornar la letra del coro de la canción 'Let It Be' (11 versos).",
    "starterCode": "# ✅↓ Write your code here ↓✅\n\n",
    "solutionCode": "# ✅↓ Write your code here ↓✅\ndef sing():\n    song = \"\"\n    for i in range(11):\n        if i == 4:\n            song += \"there will be an answer,\\n\"\n        elif i == 10:\n            song += \"whisper words of wisdom, let it be\"\n        else:\n            song += \"let it be,\\n\"\n    return song\n\nsing()\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.2 (Construcción iterativa de cadenas con condiciones específicas).",
    "concepts": [
      "for",
      "if-elif-else",
      "concatenación iterativa",
      "return"
    ],
    "tags": [
      "bucles",
      "cadenas",
      "pcep-2.2",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/18-The-Beatles",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "let it be,\nlet it be,\nlet it be,\nlet it be,\nthere will be an answer,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nwhisper words of wisdom, let it be\n",
        "description": "Letra canónica del coro de Let It Be"
      }
    ]
  },
  {
    "id": "pcep-4geeks-19-bottles-of-milk",
    "title": "Bucle Decremental con Paso Negativo",
    "section": 2,
    "sectionTitle": "Sección 2 — Flujo de Control",
    "topic": "Iteraciones y Bucles",
    "subtopic": "Bucle decremental con paso negativo en range() y singular/plural",
    "pcepObjective": "2.2",
    "difficulty": "intermediate",
    "type": "programming",
    "cognitiveFamily": "scratch_programming",
    "statement": "Usa un bucle `for` con paso negativo `range(99, 2, -1)` para imprimir los versos decrecientes de la canción '99 bottles of milk on the wall'.",
    "starterCode": "# ✅↓ Write your code here ↓✅\n",
    "solutionCode": "# ✅↓ Write your code here ↓✅\ndef number_of_bottles():\n    for x in range(99,2,-1):\n        print(str(x) + \" bottles of milk on the wall, \" + str(x) + \" bottles of milk. Take one down and pass it around, \" + str(x-1)+ \" bottles of milk on the wall.\")\n    print(\"2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.\")\n    print(\"1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\")\n    print(\"No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.\")\n    return None\n\nnumber_of_bottles()\n",
    "explanation": "Ejercicio práctico evaluado en juez online. Adaptado con fines pedagógicos para la certificación PCEP a partir del repositorio educativo oficial de 4Geeks Academy (BreatheCode).\n\nObjetivo evaluado: 2.2 (Bucle decremental con paso negativo en range() y singular/plural).",
    "concepts": [
      "for",
      "range(step=-1)",
      "paso decremental",
      "condiciones"
    ],
    "tags": [
      "bucles",
      "range",
      "step",
      "pcep-2.2",
      "4geeks"
    ],
    "source": "4geeks_academy",
    "sourceUrl": "https://github.com/4GeeksAcademy/python-beginner-programming-exercises/tree/master/exercises/19-Bottles-Of-Milk",
    "license": "BreatheCode Educational Terms (Academic & Personal Use Attribution)",
    "isActive": true,
    "testCases": [
      {
        "input": "",
        "expectedOutput": "99 bottles of milk on the wall, 99 bottles of milk. Take one down and pass it around, 98 bottles of milk on the wall.\n98 bottles of milk on the wall, 98 bottles of milk. Take one down and pass it around, 97 bottles of milk on the wall.\n97 bottles of milk on the wall, 97 bottles of milk. Take one down and pass it around, 96 bottles of milk on the wall.\n96 bottles of milk on the wall, 96 bottles of milk. Take one down and pass it around, 95 bottles of milk on the wall.\n95 bottles of milk on the wall, 95 bottles of milk. Take one down and pass it around, 94 bottles of milk on the wall.\n94 bottles of milk on the wall, 94 bottles of milk. Take one down and pass it around, 93 bottles of milk on the wall.\n93 bottles of milk on the wall, 93 bottles of milk. Take one down and pass it around, 92 bottles of milk on the wall.\n92 bottles of milk on the wall, 92 bottles of milk. Take one down and pass it around, 91 bottles of milk on the wall.\n91 bottles of milk on the wall, 91 bottles of milk. Take one down and pass it around, 90 bottles of milk on the wall.\n90 bottles of milk on the wall, 90 bottles of milk. Take one down and pass it around, 89 bottles of milk on the wall.\n89 bottles of milk on the wall, 89 bottles of milk. Take one down and pass it around, 88 bottles of milk on the wall.\n88 bottles of milk on the wall, 88 bottles of milk. Take one down and pass it around, 87 bottles of milk on the wall.\n87 bottles of milk on the wall, 87 bottles of milk. Take one down and pass it around, 86 bottles of milk on the wall.\n86 bottles of milk on the wall, 86 bottles of milk. Take one down and pass it around, 85 bottles of milk on the wall.\n85 bottles of milk on the wall, 85 bottles of milk. Take one down and pass it around, 84 bottles of milk on the wall.\n84 bottles of milk on the wall, 84 bottles of milk. Take one down and pass it around, 83 bottles of milk on the wall.\n83 bottles of milk on the wall, 83 bottles of milk. Take one down and pass it around, 82 bottles of milk on the wall.\n82 bottles of milk on the wall, 82 bottles of milk. Take one down and pass it around, 81 bottles of milk on the wall.\n81 bottles of milk on the wall, 81 bottles of milk. Take one down and pass it around, 80 bottles of milk on the wall.\n80 bottles of milk on the wall, 80 bottles of milk. Take one down and pass it around, 79 bottles of milk on the wall.\n79 bottles of milk on the wall, 79 bottles of milk. Take one down and pass it around, 78 bottles of milk on the wall.\n78 bottles of milk on the wall, 78 bottles of milk. Take one down and pass it around, 77 bottles of milk on the wall.\n77 bottles of milk on the wall, 77 bottles of milk. Take one down and pass it around, 76 bottles of milk on the wall.\n76 bottles of milk on the wall, 76 bottles of milk. Take one down and pass it around, 75 bottles of milk on the wall.\n75 bottles of milk on the wall, 75 bottles of milk. Take one down and pass it around, 74 bottles of milk on the wall.\n74 bottles of milk on the wall, 74 bottles of milk. Take one down and pass it around, 73 bottles of milk on the wall.\n73 bottles of milk on the wall, 73 bottles of milk. Take one down and pass it around, 72 bottles of milk on the wall.\n72 bottles of milk on the wall, 72 bottles of milk. Take one down and pass it around, 71 bottles of milk on the wall.\n71 bottles of milk on the wall, 71 bottles of milk. Take one down and pass it around, 70 bottles of milk on the wall.\n70 bottles of milk on the wall, 70 bottles of milk. Take one down and pass it around, 69 bottles of milk on the wall.\n69 bottles of milk on the wall, 69 bottles of milk. Take one down and pass it around, 68 bottles of milk on the wall.\n68 bottles of milk on the wall, 68 bottles of milk. Take one down and pass it around, 67 bottles of milk on the wall.\n67 bottles of milk on the wall, 67 bottles of milk. Take one down and pass it around, 66 bottles of milk on the wall.\n66 bottles of milk on the wall, 66 bottles of milk. Take one down and pass it around, 65 bottles of milk on the wall.\n65 bottles of milk on the wall, 65 bottles of milk. Take one down and pass it around, 64 bottles of milk on the wall.\n64 bottles of milk on the wall, 64 bottles of milk. Take one down and pass it around, 63 bottles of milk on the wall.\n63 bottles of milk on the wall, 63 bottles of milk. Take one down and pass it around, 62 bottles of milk on the wall.\n62 bottles of milk on the wall, 62 bottles of milk. Take one down and pass it around, 61 bottles of milk on the wall.\n61 bottles of milk on the wall, 61 bottles of milk. Take one down and pass it around, 60 bottles of milk on the wall.\n60 bottles of milk on the wall, 60 bottles of milk. Take one down and pass it around, 59 bottles of milk on the wall.\n59 bottles of milk on the wall, 59 bottles of milk. Take one down and pass it around, 58 bottles of milk on the wall.\n58 bottles of milk on the wall, 58 bottles of milk. Take one down and pass it around, 57 bottles of milk on the wall.\n57 bottles of milk on the wall, 57 bottles of milk. Take one down and pass it around, 56 bottles of milk on the wall.\n56 bottles of milk on the wall, 56 bottles of milk. Take one down and pass it around, 55 bottles of milk on the wall.\n55 bottles of milk on the wall, 55 bottles of milk. Take one down and pass it around, 54 bottles of milk on the wall.\n54 bottles of milk on the wall, 54 bottles of milk. Take one down and pass it around, 53 bottles of milk on the wall.\n53 bottles of milk on the wall, 53 bottles of milk. Take one down and pass it around, 52 bottles of milk on the wall.\n52 bottles of milk on the wall, 52 bottles of milk. Take one down and pass it around, 51 bottles of milk on the wall.\n51 bottles of milk on the wall, 51 bottles of milk. Take one down and pass it around, 50 bottles of milk on the wall.\n50 bottles of milk on the wall, 50 bottles of milk. Take one down and pass it around, 49 bottles of milk on the wall.\n49 bottles of milk on the wall, 49 bottles of milk. Take one down and pass it around, 48 bottles of milk on the wall.\n48 bottles of milk on the wall, 48 bottles of milk. Take one down and pass it around, 47 bottles of milk on the wall.\n47 bottles of milk on the wall, 47 bottles of milk. Take one down and pass it around, 46 bottles of milk on the wall.\n46 bottles of milk on the wall, 46 bottles of milk. Take one down and pass it around, 45 bottles of milk on the wall.\n45 bottles of milk on the wall, 45 bottles of milk. Take one down and pass it around, 44 bottles of milk on the wall.\n44 bottles of milk on the wall, 44 bottles of milk. Take one down and pass it around, 43 bottles of milk on the wall.\n43 bottles of milk on the wall, 43 bottles of milk. Take one down and pass it around, 42 bottles of milk on the wall.\n42 bottles of milk on the wall, 42 bottles of milk. Take one down and pass it around, 41 bottles of milk on the wall.\n41 bottles of milk on the wall, 41 bottles of milk. Take one down and pass it around, 40 bottles of milk on the wall.\n40 bottles of milk on the wall, 40 bottles of milk. Take one down and pass it around, 39 bottles of milk on the wall.\n39 bottles of milk on the wall, 39 bottles of milk. Take one down and pass it around, 38 bottles of milk on the wall.\n38 bottles of milk on the wall, 38 bottles of milk. Take one down and pass it around, 37 bottles of milk on the wall.\n37 bottles of milk on the wall, 37 bottles of milk. Take one down and pass it around, 36 bottles of milk on the wall.\n36 bottles of milk on the wall, 36 bottles of milk. Take one down and pass it around, 35 bottles of milk on the wall.\n35 bottles of milk on the wall, 35 bottles of milk. Take one down and pass it around, 34 bottles of milk on the wall.\n34 bottles of milk on the wall, 34 bottles of milk. Take one down and pass it around, 33 bottles of milk on the wall.\n33 bottles of milk on the wall, 33 bottles of milk. Take one down and pass it around, 32 bottles of milk on the wall.\n32 bottles of milk on the wall, 32 bottles of milk. Take one down and pass it around, 31 bottles of milk on the wall.\n31 bottles of milk on the wall, 31 bottles of milk. Take one down and pass it around, 30 bottles of milk on the wall.\n30 bottles of milk on the wall, 30 bottles of milk. Take one down and pass it around, 29 bottles of milk on the wall.\n29 bottles of milk on the wall, 29 bottles of milk. Take one down and pass it around, 28 bottles of milk on the wall.\n28 bottles of milk on the wall, 28 bottles of milk. Take one down and pass it around, 27 bottles of milk on the wall.\n27 bottles of milk on the wall, 27 bottles of milk. Take one down and pass it around, 26 bottles of milk on the wall.\n26 bottles of milk on the wall, 26 bottles of milk. Take one down and pass it around, 25 bottles of milk on the wall.\n25 bottles of milk on the wall, 25 bottles of milk. Take one down and pass it around, 24 bottles of milk on the wall.\n24 bottles of milk on the wall, 24 bottles of milk. Take one down and pass it around, 23 bottles of milk on the wall.\n23 bottles of milk on the wall, 23 bottles of milk. Take one down and pass it around, 22 bottles of milk on the wall.\n22 bottles of milk on the wall, 22 bottles of milk. Take one down and pass it around, 21 bottles of milk on the wall.\n21 bottles of milk on the wall, 21 bottles of milk. Take one down and pass it around, 20 bottles of milk on the wall.\n20 bottles of milk on the wall, 20 bottles of milk. Take one down and pass it around, 19 bottles of milk on the wall.\n19 bottles of milk on the wall, 19 bottles of milk. Take one down and pass it around, 18 bottles of milk on the wall.\n18 bottles of milk on the wall, 18 bottles of milk. Take one down and pass it around, 17 bottles of milk on the wall.\n17 bottles of milk on the wall, 17 bottles of milk. Take one down and pass it around, 16 bottles of milk on the wall.\n16 bottles of milk on the wall, 16 bottles of milk. Take one down and pass it around, 15 bottles of milk on the wall.\n15 bottles of milk on the wall, 15 bottles of milk. Take one down and pass it around, 14 bottles of milk on the wall.\n14 bottles of milk on the wall, 14 bottles of milk. Take one down and pass it around, 13 bottles of milk on the wall.\n13 bottles of milk on the wall, 13 bottles of milk. Take one down and pass it around, 12 bottles of milk on the wall.\n12 bottles of milk on the wall, 12 bottles of milk. Take one down and pass it around, 11 bottles of milk on the wall.\n11 bottles of milk on the wall, 11 bottles of milk. Take one down and pass it around, 10 bottles of milk on the wall.\n10 bottles of milk on the wall, 10 bottles of milk. Take one down and pass it around, 9 bottles of milk on the wall.\n9 bottles of milk on the wall, 9 bottles of milk. Take one down and pass it around, 8 bottles of milk on the wall.\n8 bottles of milk on the wall, 8 bottles of milk. Take one down and pass it around, 7 bottles of milk on the wall.\n7 bottles of milk on the wall, 7 bottles of milk. Take one down and pass it around, 6 bottles of milk on the wall.\n6 bottles of milk on the wall, 6 bottles of milk. Take one down and pass it around, 5 bottles of milk on the wall.\n5 bottles of milk on the wall, 5 bottles of milk. Take one down and pass it around, 4 bottles of milk on the wall.\n4 bottles of milk on the wall, 4 bottles of milk. Take one down and pass it around, 3 bottles of milk on the wall.\n3 bottles of milk on the wall, 3 bottles of milk. Take one down and pass it around, 2 bottles of milk on the wall.\n2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.\n1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\nNo more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.\n",
        "description": "Salida canónica estándar esperada"
      }
    ]
  }
];

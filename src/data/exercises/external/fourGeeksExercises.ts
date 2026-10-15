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
    "statement": "# Console\n\nEn Python, usamos **print** para que el computador escriba cualquier cosa que queramos (el contenido de una variable, una string dado, etc.) en algo llamado \"la consola\".\n\nCada lenguaje de programación tiene una consola, ya que al principio era la única forma de interactuar con los usuarios (antes de que llegaran Windows, Linux o macOS).\n\nHoy en día, la impresión en la consola se utiliza, sobre todo, como herramienta de monitoreo y depuración, ideal para dejar un rastro del contenido de las variables durante la ejecución del programa.\n\nEste es un ejemplo de cómo usarla:\n\n```py\nprint(\"Un texto en la consola\")\n```\n\n## 📝 Instrucciones:\n\n1. Usa **print** para escribir `Hello World!` en la consola. \n\n## 💡 Pistas:\n\n+ Recuerda, para ejecutar el código y ver el resultado en la consola, haz clic en el ícono de caja en la esquina superior izquierda de la pantalla:\n\n![Botón de compilar](https://github.com/4GeeksAcademy/python-beginner-programming-exercises/blob/1d9d7f83b678411be8ff9efc3bad9dab4265d057/.learn/assets/run-exercise.png?raw=true)\n\n+ Siéntete libre de intentar otras cosas también.",
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
    "statement": "# Declare Variables\n\nEn la programación, usamos variables como si fueran cajas (o contenedores) para guardar diferentes tipos de información. Así es cómo creamos una variable:\n\n```py\nname = \"Daniel\"\n```\n\nEn este ejemplo, `name` es la variable, actuando como una caja para almacenar el valor `\"Daniel\"`. Dentro de esta 'caja', estamos almacenando el valor `\"Daniel\"`, y podemos usar `name` para referirnos a este valor más tarde. Al nombrar tus variables, puedes elegir casi cualquier nombre, pero debe comenzar con una letra o un guion bajo (`_`). Es útil elegir un nombre que describa lo que hay dentro de la 'caja' para que puedas entender fácilmente lo que representa más adelante.\n\n## 📝 Instrucciones:\n\n1. Declara una variable llamada `name` con el valor `\"Yellow\"` y luego imprímelo en la consola.\n\n2. Luego, imprime su valor en la consola usando `print(name)`.\n\n## 💡 Pistas:\n\n+ El nombre de la variable debe ser `name` para pasar los tests y su valor tiene que ser el texto \"Yellow\".\n\n+ Si necesitas más explicación sobre qué son los **strings** y cómo funcionan en Python, puedes ver este clip: https://www.youtube.com/watch?v=yT0jixU3M2c&ab_channel=ProgramaResuelto (`ctrl + click` en el enlace para abrir el video)",
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
    "statement": "# Print more Variables in The Console\n\nTambién puedes imprimir más de una variable en la misma función `print()` separando con una coma `,` las variables a imprimir. De esta manera:\n\n```py\nmy_variable = 'hello'\nmy_second_variable = \"world\"\nprint(my_variable, my_second_variable)  # --> hello world\n```\n\n## 📝 Instrucciones:\n\n1. Declara dos nuevas variables llamadas `color` y `item` y asígnales el valor `\"red\"` y `marker` respectivamente.\n\n2. Luego, imprime sus valores en la consola (puede que tengas que desplazarte en la consola para poder verlo).",
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
    "statement": "# Multiply Two Values\n\nCualquier lenguaje de programación te permite realizar operaciones matemáticas básicas como multiplicación, división, etc.\n\nPara multiplicar dos valores en Python, tienes que usar el operador estrella o asterisco de esta forma:\n\n```py\nresulting_value = 2 * 3\n```\n\nEn este caso, hemos almacenado el resultado de la multiplicación en una variable llamada `resulting_value`.\n\n## 📝 Instrucciones:\n\n1. Por favor, almacena el resultado de multiplicar 2345 por 7323 en una variable llamada `variables_are_cool`.\n\n2. Ahora imprime el resultado en la consola.",
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
    "statement": "# User Inputed Values\n\nOtra cosa genial de las variables es que no necesitas saber su valor para poder trabajar con ellas.\n\nPor ejemplo, justo ahora la aplicación está preguntando la edad del usuario, y luego la imprime en la consola.\n\n## 📝 Instrucciones:\n\n1. Por favor, añade 10 años al valor de la variable `age`.\n\n## 💡 Pistas:\n\n+ Puedes buscar en Google \"Como sumarle una cantidad a una variable de Python\".\n\n+ Recuerda que el contenido de la variable está siendo definido con lo que sea que el usuario coloque.",
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
    "statement": "# String Concatenation\n\nLa concatenación de strings es una tarea común en la programación que implica combinar o unir dos o más strings.\n\nPuedes pensar en este proceso como conectar dos o más vagones de tren. Si cada string es un vagón, la concatenación es el acoplamiento que los une para formar un tren único.\n\nEn Python, puedes concatenar o unir dos o más strings usando el operador `+`. Así es como funciona:\n\n```py\none = 'a'\ntwo = 'b'\nprint(one + two)  # Esto imprimirá 'ab' en la consola.\n```\n\nAquí, las variables `one` y `two` contienen los strings individuales `'a'` y `'b'`, respectivamente. Cuando usas el operador `+` entre ellos, actúa como un pegamento, uniendo los strings de extremo a extremo. En este caso, une `'a'` y `'b'`, dando como resultado el string concatenado `'ab'`, que se imprime en la consola.\n\n## 📝 Instrucciones: \n1. Establece los valores para `my_var1` y `my_var2` de manera que, al concatenarlos, el código imprima `Hello World` en la consola.\n\n\n## 💡 Pista:\n+ Si necesitas más explicación sobre como funciona la **concatenación** en Python, puedes ver este clip: https://www.youtube.com/watch?v=T1nyPuAhd1U&ab_channel=ProgramaResuelto (`ctrl + click` en el enlace para abrir el video)",
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
    "statement": "# Create a Basic HTML\n\nContinuemos concatenando strings para generar un documento HTML básico...\n\n## 📝 Instrucciones:\n\n1. Crea la variable `html_document`.\n\n2. El código a la izquierda contiene 8 variables con diferentes valores de tipo *string*. Por favor, usa las variables concatenándolas entre ellas para establecer el valor de la variable `html_document` a la estructura típica de un documento HTML (con las etiquetas HTML en el orden correcto).\n\n3. Luego, imprime el valor de `html_document` en la consola.\n\n## 💡 Pista:\n\n+ Resultado esperado: \n\n```html\n<html><head><title></title></head><body></body></html>\n```",
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
    "statement": "# Your First If...\n\nLa aplicación actual está preguntando cuánto dinero tiene el usuario. Una vez el usuario ingresa la cantidad, debemos 'imprimir' usando **print** una de las siguientes respuestas:\n\n## 📝 Instrucciones:\n\n1. Si el usuario tiene más de $100, respondemos: \"Give me your money!\" (¡Dame tu dinero!).\n\n2. Si el usuario tiene más de $50, respondemos: \"Buy me some coffee, you cheap!\" (¡Cómprame un café!).\n\n3. Si el usuario tiene igual o menos de $50, respondemos: \"You are a poor guy, go away!\" (¡Eres pobre!).\n\n## 💡 Pistas:\n\n+  Usa un condicional `if...else` para verificar el valor de la variable `total`.\n\n+  Puedes leer más al respecto [aquí](https://docs.python.org/3/tutorial/controlflow.html#if-statements).\n\n+ Aquí tienes un recordatorio sobre los operadores relacionales:\n\n  | Operador | Descripción                                                                  | Sintaxis |\n  |----------|------------------------------------------------------------------------------|----------|\n  | >        | Mayor que: True si el operando izquierdo es mayor que el derecho        | x > y    |\n  | <        | Menor que: True si el operando izquierdo es menor que el derecho        | x < y    |\n  | ==       | Igual a: True si ambos operandos son iguales                            | x == y   |\n  | !=       | No igual a: True si los operandos no son iguales                        | x != y   |\n  | >=       | Mayor o igual que: True si el operando izquierdo es mayor o igual       | x >= y   |\n  | <=       | Menor o igual que: True si el operando izquierdo es menor o igual       | x <= y   |",
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
    "statement": "# How Much The Wedding Costs (if...else)\n\nAquí tenemos una tabla de precios de una compañía de catering de bodas:\n\n| # de invitados        | Precio    |\n| --------------------- | --------- |\n| Hasta 50 personas     | $4,000    |\n| Hasta 100 personas    | $10,000   |\n| Hasta 200 personas    | $15,000   |\n| Más de 200 personas   | $20,000   |\n\n> Nota: Las cantidades en la tabla incluyen el número especificado. Por ejemplo, \"Hasta 50 personas\" incluye exactamente 50 personas. \n\n## 📝 Instrucciones:\n\n1. Completa el algoritmo que solicita al usuario el número de personas que asistirán a su boda e imprime el precio correspondiente en la consola.\n2. Amplía el código proporcionado a la izquierda para cubrir todos los rangos posibles de invitados.\n3. Asegúrate de que tu código calcule e imprima correctamente el precio en la consola según el input del usuario.\n\nPor ejemplo, si la persona dice que `20` personas van a la boda, debería costar `$4,000` dólares.\n\n## 💡 Pista:\n\n+ Usa `if...else` para dividir el código y definir el valor de la variable `price` de forma correcta.",
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
    "statement": "# Random Numbers\n\nPuedes usar la función `randint()` para obtener un número entero aleatorio. `randint()` es una función interna del módulo `random` en Python3.\n\nEl módulo random da acceso a varias funciones útiles y una de ellas, la función `randint()`, genera números **enteros** aleatorios entre un rango que le pasemos por parámetro, por ejemplo: `randint(num_minimo, num_maximo)`. El número mínimo y el número máximo en dicho rango son inclusivos.\n\n## 📝 Instrucciones:\n\n1. Actualmente, el código está devolviendo números decimales aleatorios, por favor actualiza la función en el código para hacer que devuelva un número entero (no decimal) entre 1 y 10.\n\n## 💡 Pista:\n\n+ Puedes encontrar información adicional sobre el módulo `random` aquí: https://ellibrodepython.com/numeros-aleatorios-python",
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
        "expectedOutput": "7\n",
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
    "statement": "# Calling Your First Function\n\nLas funciones son increíbles por muchas cosas, pero principalmente porque puedes encapsular tu código en piezas y reusar esas piezas muchas veces sin tener que escribir todo el código cada vez.\n\n## 📝 Instrucciones:\n\n1. Por favor, escribe todo tu código dentro de la función `my_main_code`.\n\n2. La función `is_odd` está definida al inicio del código, por favor llama a esa función dentro de `my_main_code` pasándole el número `45345` e imprime el resultado en la consola.\n\n## 🔎 Importante:\n\n+ Hay una serie de ejercicios dedicados a las funciones [aquí](https://github.com/4GeeksAcademy/python-functions-programming-exercises), te recomendamos realizarlos después de hacer **tu primera función** en este ejercicio. (luego... ¡Regresa! 😃).\n \n\n## 💡 Pista:\n\n+ Puedes consultar esta página para obtener información adicional sobre funciones y llamadas a funciones: https://www.freecodecamp.org/espanol/news/guia-de-funciones-de-python-con-ejemplos/",
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
    "statement": "# Creating Your First Function\n\n## 📝 Instrucciones:\n \n1. La función `add_numbers` debería devolver la suma de 2 números dados. Por favor, completa el código necesario dentro de la función para hacer que se comporte como se espera.\n\n2. Resultado esperado: el ejercicio debería escribir el número 7 en la consola.\n\n## 💡 Pista:\n\n+ Hay una función `add_numbers` ya declarada, que está recibiendo dos parámetros (las variables `a` y `b`). Tú debes completar el contenido de la función con el código requerido para sumar la variable `a` con la variable `b` y devolver el resultado de la operación.\n\n## 🔎 Importante:\n\n+ Para practicar con más funciones, 4Geeks Academy tiene más de 20 ejercicios que se incrementan en dificultad: [https://github.com/4GeeksAcademy/python-functions-programming-exercises](https://github.com/4GeeksAcademy/python-functions-programming-exercises).\n\n¡Inténtalos, y luego regresa! 😃",
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
    "statement": "# Create a New Function\n\nComo sabes, las funciones son un bloque de código útil que puedes reusar tantas veces como necesites.\n\nEn el último ejercicio, tenías una función que recibía dos parámetros (dos entradas) y devolvía la suma de ellos. Así:\n\n```py\ndef add_numbers(a, b):\n    print(a + b)\n```\n\nPero Python viene con un conjunto de funciones \"pre-definidas\" que puedes usar, por ejemplo:\n\n```py\nimport random\n# Genera un número aleatorio dentro de un rango positivo dado\n\nr1 = random.randint(0, 10)\nprint(\"Random number between 0 and 10 is % s\" % (r1))\n```\n\nPuedes usar la función `randint()` para obtener un número entero aleatorio. Esta es una función incorporada del **módulo random** en Python3.\n\nEl **módulo random** te da acceso a varias funciones útiles y una de ellas es, `randint()`, capaz de generar números aleatorios. \n\n## 📝 Instrucciones:\n\n1. Por favor, crea una función llamada `generate_random` que devuelva un número aleatorio entre 0 y 9 cada vez que se llame.\n\n2. Imprime el resultado que la función retorna al ser llamada.\n\n## 💡 Pistas:\n\n+ Una posible solución involucra el uso de una de dos funciones predefinidas: la función `randint` o `randrange`.\n\n+ No olvides importar el módulo `random`.\n\n+ Puedes consultar la documentación en: https://docs.python.org/3/library/random.html#functions-for-integers",
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
        "expectedOutput": "3\n",
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
    "statement": "# Rand From One to Twelve\n\n## 📝 Instrucciones:\n\n1. Cambia lo que necesites cambiar para hacer que el algoritmo imprima números enteros aleatorios entre 1 y 12.\n\n2. Esta vez, utiliza la función `randrange()`.\n\n## 💡 Pistas:\n\n+ Debería imprimir números entre 1 y 12, no entre 0 y 12.\n\n+ Este ejercicio es super simple, ¡no te compliques! 😃",
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
        "expectedOutput": "2\n",
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
    "statement": "# Your First Loop\n\n## 📝 Instrucciones:\n\n1. Ejecuta este código, verás una cuenta de 0 a 9. \n\n2. Corrígelo para que cuente hasta 11.\n\n## 🔎 Importante: \n\n+ Hay una serie de ejercicios dedicados a listas y bucles, te invitamos a realizarlos antes de continuar: [https://github.com/4GeeksAcademy/python-lists-loops-programming-exercises](https://github.com/4GeeksAcademy/python-lists-loops-programming-exercises). \n\n¡Luego, regresa! 😊\n\n## 💡 Pista:\n+ Puedes encontrar información adicional aquí: https://tutorial.recursospython.com/bucles/",
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
    "statement": "# Create A For Loop\n\nLos bucles o loops son muy útiles. No tienes que reescribir las mismas líneas muchas veces.\n\nEl bucle o loop `for` te permite ejecutar el mismo código varias veces para diferentes valores.\n\n## 📝 Instrucciones:\n\n1. Completa la función llamada `standards_maker()`.\n\n2. La función tiene que imprimir 300 veces la frase \"Haré preguntas si estoy atascado\".\n\n3. Llama a la función `standards_maker()`.\n\n## 💡 Pista:\n\n+ Puedes usar la función `range()` para el ciclo `for`.\n\n## 🔎 Importante:\n\n+ Puedes leer más al respecto aquí: https://ellibrodepython.com/for-python",
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
    "statement": "# Looping With FizzBuzz\n\nEsta es una típica prueba de principiante que es exigida para las entrevistas en Google, Facebook y las demás grandes compañías de tecnología.\n\n## 📝 Instrucciones:\n\n1. Escribe el código necesario para imprimir en la consola todos los números del 1 al 100.\n\n2. Para múltiplos de 3, en lugar de imprimir el número, imprime \"Fizz\".\n\n3. Para múltiplos de 5, imprime \"Buzz\".\n\n4. Para números que son múltiplos de 3 y de 5, imprime \"FizzBuzz\".\n\n## 💻 Resultado esperado:\n\n```py\n1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n....\n....\n98\nFizz\nBuzz\n```\n\n## 🔎 Importante: \n\nHay una serie de ejercicios dedicados a listas y bucles, te invitamos a realizarlos antes de continuar: [https://github.com/4GeeksAcademy/python-lists-loops-programming-exercises](https://github.com/4GeeksAcademy/python-lists-loops-programming-exercises).\n    \n¡Luego, regresa! 😊\n\n\n## 💡 Pistas:\n\n+ Debes usar instrucciones `if`.\n\n+ Piensa en el orden correcto de esos `if` para hacer que tu código haga lo que quieres.",
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
    "statement": "# Random Colors (Loop)\n\nHemos creado una función que devuelve un color basado en un número entre 0 y 3 (cualquier otro número retornará el color `black`).\n\nSupongamos que somos profesores en un aula con 10 estudiantes y queremos asignar a **cada estudiante** un color aleatorio entre `red`, `yellow`, `blue` y `green`.\n\n(solo 1 color por estudiante)\n\n## 📝 Instrucciones:\n\n1. Cambia la función `get_allStudentColors` para que devuelva una lista con 10 colores, en donde cada elemento de la lista representa el color asignado a cada estudiante.\n\n## 💡 Pistas:\n\n+ Tienes 10 estudiantes, necesitas que el ciclo itere 10 veces y añadir estos valores a una lista.\n\n+ En cada iteración, genera un número aleatorio entre 0 y 3 usando la función `randint()` que hemos visto en ejercicios anteriores.\n\n+ Usa la función `get_color` en este ejercicio, para saber qué color le corresponde al número obtenido.\n\n+ Llama (ejecuta) la función `get_allStudentColors` e imprime su resultado en la consola.",
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
        "expectedOutput": "['green', 'red', 'red', 'red', 'green', 'green', 'blue', 'blue', 'green', 'blue']\n",
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
    "statement": "# Russian Roulette\n\n¿Has jugado a la ruleta rusa? ¡Es muy divertido! Si no pierdes... (¡¡¡muuuajajajaja!!!).\n\nUn revolver tiene seis recámaras para balas... inserta una bala en una de las recámaras, gira el tambor del revolver para hacer aleatorio el juego. Nadie sabrá dónde está la bala.\n\n¡¡¡FUEGO!!!...... ¿Has muerto?\n\n## 📝 Instrucciones: \n\n1. El juego casi funciona, por favor completa la función `fire_gun` para que el juego funcione. \n\n2. Compara la posición de la bala con la posición de la recámara. \n\n3. Si la posición de la bala es igual a la posición de la recámara, entonces la función debe retornar `You are dead!`, de lo contrario, debe retornar `Keep playing!`\n\n## 💡 Pistas: \n\n- Puedes obtener la posición de la recámara llamando a la función `spin_chamber`.\n  \n- Si la bala está en el mismo compartimento que la recámara del revólver, entonces será disparada (`You are dead!`).",
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
    "statement": "# The Beatles\n\n¿A quién no le gusta The Beatles?\n\nUn estudio de la BBC ha probado que el 90% de los niños y niñas no conocen la banda... muy triste. :(\n\nEste es el coro de una de las canciones más famosas de la banda:\n\n> Let it be, let it be, let it be, let it be,\n> \n> Whisper words of wisdom,\n> \n> Let it be\n\n## 📝 Instrucciones:\n\n1. Crea una función llamada `sing()` que imprima en consola la misma letra que puedes escuchar desde el segundo 3:21 hasta el final de la canción en el segundo 3:50 https://www.youtube.com/watch?v=QDYfEBY9NM4\n\n2. Llama tu función al final del código.\n\n## 💻 Resultado esperado:\n\n```text\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nthere will be an answer,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nlet it be,\nwhisper words of wisdom, let it be\n```\n\n## 💡 Pistas:\n\n+ La frase \"let it be\" se repite todo el tiempo. Probablemente, deberías usar un bucle o loop para eso. 😊\n\n+ Si necesitas un repaso sobre los loops y/o condicionales, échale un vistazo a esto: https://docs.python.org/es/3/tutorial/controlflow.html",
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
    "statement": "# Bottles Of Milk\n\n¿Has escuchado la canción sobre las 99 botellas de leche? Es una gran canción, para nada aburrida...\n\nAquí puedes escucharla: https://www.youtube.com/watch?v=Xy-da43E6Lo\n\n## 📝 Instrucciones:\n\n1. Por favor, declara una función llamada `number_of_bottles()`.\n\n2. La función necesita imprimir la letra exacta de la canción (usa el método `print()` y no `return`).\n\n## 💻 Resultado esperado:\n\nEl resultado debería ser algo como esto:\n\n```text\n99 bottles of milk on the wall, 99 bottles of milk.\nTake one down and pass it around, 98 bottles of milk on the wall.\n\n98 bottles of milk on the wall, 98 bottles of milk.\nTake one down and pass it around, 97 bottles of milk on the wall.\n...\n...\n2 bottles of milk on the wall, 2 bottles of milk. \nTake one down and pass it around, 1 bottle of milk on the wall.\n\n1 bottle of milk on the wall, 1 bottle of milk.\nTake one down and pass it around, no more bottles of milk on the wall.\n\nNo more bottles of milk on the wall, no more bottles of milk.\nGo to the store and buy some more, 99 bottles of milk on the wall.\n```\n\n## 💡 Pistas:\n\n+ Al final de la canción, la letra cambia porque es solo una botella (singular en lugar del plural).\n\n+ Lee la última parte de la letra y verás como cambia la última línea a `\"Go to the store and buy some more, 99 bottles of milk on the wall.\"`.",
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

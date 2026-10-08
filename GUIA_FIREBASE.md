# Guía Paso a Paso: Inicio de Sesión en la Nube con Firebase

Esta guía te explica detalladamente cómo conectar la plataforma **PCEP Trainer** con **Firebase Authentication** y **Cloud Firestore** para que los registros, inicios de sesión, recuperación de contraseñas y el progreso de los alumnos se guarden en la nube en tiempo real.

---

## Índice de Pasos

1. [Crear el Proyecto en Firebase Console](#paso-1-crear-el-proyecto-en-firebase-console)
2. [Habilitar Firebase Authentication](#paso-2-habilitar-firebase-authentication)
3. [Crear la Base de Datos Cloud Firestore](#paso-3-crear-la-base-de-datos-cloud-firestore)
4. [Registrar la Aplicación Web y Obtener las Credenciales](#paso-4-registrar-la-aplicación-web-y-obtener-las-credenciales)
5. [Configurar las Variables de Entorno (`.env.local`)](#paso-5-configurar-las-variables-de-entorno-envlocal)
6. [Reiniciar el Servidor y Probar el Inicio de Sesión](#paso-6-reiniciar-el-servidor-y-probar-el-inicio-de-sesión)
7. [Reglas de Seguridad Recomendadas para Firestore](#paso-7-reglas-de-seguridad-para-firestore)

---

## Paso 1: Crear el Proyecto en Firebase Console

1. Abre tu navegador e ingresa a: **[https://console.firebase.google.com/](https://console.firebase.google.com/)**.
2. Inicia sesión con tu cuenta de Google.
3. Haz clic en el botón **"Agregar proyecto"** (o *"Crear un proyecto"*).
4. Asigna un nombre al proyecto, por ejemplo: `pcep-python-trainer`.
5. Haz clic en **Continuar**.
6. En la opción de *Google Analytics*, puedes desactivarlo para simplificar o dejarlo habilitado según tu preferencia, y haz clic en **"Crear proyecto"**.
7. Espera unos segundos a que se aprovisione y presiona **Continuar**.

---

## Paso 2: Habilitar Firebase Authentication

1. En el menú lateral izquierdo de la consola de Firebase, despliega la sección **Compilación (Build)** y selecciona **Authentication**.
2. Haz clic en el botón **"Comenzar" (Get Started)**.
3. Ve a la pestaña **Sign-in method** (Método de acceso).
4. En la lista de proveedores, selecciona **Correo electrónico/Contraseña (Email/Password)**.
5. Activa el primer interruptor:
   * **Habilitar** (Permite que los usuarios se registren con su correo electrónico y contraseña).
   * *(Deja desactivado el de "Vínculo del correo electrónico sin contraseña")*.
6. Haz clic en **Guardar**.

---

## Paso 3: Crear la Base de Datos Cloud Firestore

1. En el menú lateral izquierdo, dentro de **Compilación**, selecciona **Firestore Database**.
2. Haz clic en **"Crear base de datos"**.
3. Selecciona la ubicación del servidor más cercana (por ejemplo, `nam5 (us-central)` o `southamerica-east1`).
4. En el paso de **Reglas de seguridad**, selecciona:
   * **Iniciar en modo de prueba** (permite lectura y escritura inmediata mientras configuras la aplicación).
5. Haz clic en **Habilitar**.

---

## Paso 4: Registrar la Aplicación Web y Obtener las Credenciales

1. En la parte superior del menú lateral izquierdo, haz clic en el icono de engranaje ⚙️ junto a *Descripción general del proyecto* y selecciona **Configuración del proyecto** (Project settings).
2. Desplázate hacia abajo hasta la sección **Tus apps**.
3. Haz clic en el icono web **`</>`** (Agregar app web).
4. En **Sobrenombre de la app**, escribe: `pcep-web`.
5. *(Opcional: no es necesario marcar Firebase Hosting por ahora)*.
6. Haz clic en **Registrar app**.
7. Verás un bloque de código similar a este:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "pcep-python-trainer.firebaseapp.com",
  projectId: "pcep-python-trainer",
  storageBucket: "pcep-python-trainer.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

Copia esos valores. Los necesitaremos en el siguiente paso.

---

## Paso 5: Configurar las Variables de Entorno (`.env.local`)

En la raíz del proyecto (`/home/angel/Documentos/PCEP/`), crea un archivo llamado `.env.local` basado en la plantilla `.env.example`:

```bash
cd /home/angel/Documentos/PCEP
cp .env.example .env.local
```

Abre o edita el archivo `.env.local` y pega tus valores reales obtenidos en el Paso 4:

```properties
VITE_FIREBASE_API_KEY=AIzaSyD-tu_apiKey_real_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto-pcep.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-pcep
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto-pcep.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

> [!IMPORTANT]
> El archivo `.env.local` contiene credenciales locales y está ignorado en Git para mantener tu configuración segura y privada.

---

## Paso 6: Reiniciar el Servidor y Probar el Inicio de Sesión

1. Si el servidor de desarrollo Vite estaba en ejecución, reinícialo para que cargue el nuevo archivo de variables:
   ```bash
   npm run dev
   ```
2. Abre en tu navegador la plataforma: **`http://127.0.0.1:5173/`**.
3. Haz clic en **"Iniciar Sesión en la Nube"** (en la portada o mediante el botón **Cuenta** en la barra superior).
4. Notarás que en la esquina superior derecha del formulario de login aparecerá la insignia:
   **`🟢 Nube Firebase Conectada`**.
5. Ahora puedes probar los 3 flujos:
   * **Registro**: Haz clic en la pestaña **Registro**, ingresa tu nombre (ej. Ángel), correo y contraseña (mínimo 6 caracteres), y selecciona tu rol (*Alumno* o *Profesor*).
   * **Login**: Cierra sesión o vuelve a entrar con tus credenciales.
   * **Recuperación**: Pestaña **Ayuda** para enviar correo de restablecimiento de contraseña mediante los servidores de Google.
6. Comprueba en la consola de Firebase:
   * En **Authentication > Users**: Verás aparecer tu usuario registrado con su UID único.
   * En **Firestore Database > users**: Verás el documento del usuario con su perfil, rol y métricas sincronizadas.

---

## Paso 7: Reglas de Seguridad para Firestore

Una vez que quieras pasar a producción, ve a **Firestore Database > Reglas** en la consola de Firebase y pega estas reglas para proteger los datos de tus estudiantes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Perfiles de usuario: cada usuario solo edita su propio perfil
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Intentos de examen y sumisiones
    match /submissions/{subId} {
      allow read, write: if request.auth != null;
    }
    
    // Ejercicios del banco: todos leen, solo profesores editan
    match /exercises/{exerciseId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Haz clic en **Publicar** para aplicar las reglas.

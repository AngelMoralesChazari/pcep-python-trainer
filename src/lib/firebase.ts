import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

export const isFirebaseConfigured = Boolean(
  apiKey && apiKey !== "AIzaSyMockKeyForLocalOfflineTesting000" && !apiKey.includes("TuClaveApiKey")
);

const firebaseConfig = {
  apiKey: apiKey || "AIzaSyMockKeyForLocalOfflineTesting000",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pcep-trainer.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pcep-trainer",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pcep-trainer.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.warn("Inicialización de Firebase en modo de respaldo local:", error);
}

export { app, auth, db };

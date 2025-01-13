// Importa el SDK de Firebase
import { initializeApp } from "firebase/app";

// Configuración de Firebase (obtén estos datos desde tu consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyA5simDCZpYyJwvRdvbl5qrfIZTeWuL0io",
  authDomain: "afor-digital.firebaseapp.com",
  projectId: "afor-digital",
  storageBucket: "afor-digital.firebasestorage.app",
  messagingSenderId: "322307998715",
  appId: "1:322307998715:web:9d233b613eb7fabb23c15e",
  measurementId: "G-K8052WYFB0",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;

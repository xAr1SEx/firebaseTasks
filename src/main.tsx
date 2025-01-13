import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Importa la configuración de Firebase
import "./firebaseConfig";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

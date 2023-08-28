import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextAuthProvider } from "./context/AuthContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextAuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextAuthProvider>
);

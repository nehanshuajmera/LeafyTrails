import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProviders } from "./contexts/context.providers.jsx";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextProviders>
        <App />
      </ContextProviders>
    </Router>
  </React.StrictMode>
);

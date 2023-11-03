import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FF } from "./data/featureFlags.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App featureFlags={FF} />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import React from "react";

createRoot(document.getElementById("container")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

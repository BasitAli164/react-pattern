import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./patterns/ContextProviderPattern/provider/ThemeProvider.jsx";
import BrnadProvider from "./patterns/ContextProviderPattern/provider/BrnadProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrnadProvider>
        <App />
      </BrnadProvider>
    </ThemeProvider>
  </StrictMode>,
);

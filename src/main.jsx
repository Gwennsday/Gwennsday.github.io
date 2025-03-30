import App from "@app/App.jsx";
import "@app/index.css";
import { StyledEngineProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>,
);

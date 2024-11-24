import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { NewQueryScheduled } from "./pages/NewQueryScheduled";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <NewQueryScheduled />
    </ThemeProvider>
  </StrictMode>
);

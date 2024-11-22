import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { ViewQueryResult } from "./pages/ViewQueryResult";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ViewQueryResult />
    </ThemeProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { SectionNavProvider } from "./context/sectionNav.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SectionNavProvider>
        <App />
      </SectionNavProvider>
    </BrowserRouter>
  </StrictMode>
);

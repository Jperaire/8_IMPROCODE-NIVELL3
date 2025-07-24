import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UbicacionsProvider } from "./context/UbicacionsProvider.tsx";

import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <UbicacionsProvider>
                <App />
            </UbicacionsProvider>
        </BrowserRouter>
    </StrictMode>
);

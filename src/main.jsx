import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppKitProvider } from "./Wallet.jsx";

 

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <AppKitProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppKitProvider>
  </StrictMode>
);

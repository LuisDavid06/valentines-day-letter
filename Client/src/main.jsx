import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";
import App from "./App.jsx";
import { Label } from "./components/UI";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <img src="./Loading.svg" alt="Loading" className="w-1/12" />
          <Label className="font-bold">Cargando</Label>
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { LangProvider } from "./context/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LangProvider>
    <App />
  </LangProvider>
);

import React, { useContext } from "react";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Tecnologias from "./components/Tecnologias";
import { langContext } from "./context/langContext";
import { IntlProvider } from "react-intl";

function App() {
  const ctx = useContext(langContext);
  return (
    <div>
      <NavBar />
      <Home />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;

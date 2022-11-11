import React, { useState } from "react";
import mensajeIngles from "../components/Traducciones/en-US.json";
import mensajeEspañol from "../components/Traducciones/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

function LangProvider({ children }) {
  const [mensajes, setMensajes] = useState(mensajeIngles);
  const [locale, setLocale] = useState("en-US");

  const setLanguage = (lang) => {
    switch (lang) {
      case "es-ES":
        setMensajes(mensajeEspañol);
        setLocale("es-ES");
        break;
      case "en-US":
        setMensajes(mensajeIngles);
        setLocale("en-US");
        break;
      default:
        setMensajes(mensajeIngles);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{setLanguage}}>
      <IntlProvider locale={locale} messages={mensajes}>{children}</IntlProvider>
    </langContext.Provider>
  );
}

export { LangProvider, langContext };

import React, { useState } from "react";
import { AppContext } from "../contexts";
// import { useStorage } from "../hooks";

const AppProvider = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState("responsive");
  const [minimize, setMinimize] = useState(false);

  return (
    <AppContext.Provider
      value={{ sidebarShow, setSidebarShow, minimize, setMinimize }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

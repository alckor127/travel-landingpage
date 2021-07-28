import React from "react";
import { AppContext } from "../contexts";
import { useStorage } from "../hooks";

const AppProvider = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useStorage("sidebarShow");
  const [unfoldable, setUnfoldable] = useStorage("unfoldable");

  return (
    <AppContext.Provider
      value={{ sidebarShow, setSidebarShow, unfoldable, setUnfoldable }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

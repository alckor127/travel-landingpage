import { createContext } from "react";

const AppContext = createContext({
  sidebarShow: "responsive",
  setSidebarShow: () => {},
  minimize: false,
  setMinimize: () => {},
});

export { AppContext };

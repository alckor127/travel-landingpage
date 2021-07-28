import { createContext } from "react";

const AppContext = createContext({
  sidebarShow: true,
  setSidebarShow: () => {},
  unfoldable: true,
  setUnfoldable: () => {},
});

export { AppContext };

import { createContext } from "react";

const AppContext = createContext({
  sidebarShow: false,
  setSidebarShow: () => {},
  unfoldable: true,
  setUnfoldable: () => {},
});

export { AppContext };

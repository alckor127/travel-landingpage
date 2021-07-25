import { createContext } from "react";

const AuthContext = createContext({
  session: undefined,
  setSession: () => {},
});

export { AuthContext };

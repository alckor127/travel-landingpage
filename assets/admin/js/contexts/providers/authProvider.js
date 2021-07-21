import React from "react";
import { AuthContext } from "../authContext";
import { useStorage } from "../../hooks";

const AuthProvider = ({ children }) => {
  const [session, setSession] = useStorage("session");

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

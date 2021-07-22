import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { session } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        session ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export { PrivateRoute };

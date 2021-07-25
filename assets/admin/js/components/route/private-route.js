import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
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

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
};

export { PrivateRoute };

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloading from "./components/loading/preloading";
import { PrivateRoute } from "./components/route";
// layouts
const DefaultLayout = React.lazy(() => import("./layouts/default/layout"));
// pages
const Login = React.lazy(() => import("./pages/login"));
const ForgotPassword = React.lazy(() => import("./pages/forgot-password"));
const Error404 = React.lazy(() => import("./pages/errors/404"));
const Error500 = React.lazy(() => import("./pages/errors/500"));

const App = () => (
  <Router basename="admin">
    <React.Suspense fallback={Preloading()}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/500" component={Error500} />
        <PrivateRoute path="/" component={DefaultLayout} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;

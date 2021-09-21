import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Preloading } from "./components/loading";
import { PrivateRoute } from "./components/route";
import { AppProvider } from "./providers";
// layouts
const DefaultLayout = React.lazy(() => import("./layouts/default/layout"));
// pages
const Login = React.lazy(() => import("./pages/login"));
const PasswordReset = React.lazy(() => import("./pages/password-reset"));
const Error404 = React.lazy(() => import("./pages/errors/404"));
const Error500 = React.lazy(() => import("./pages/errors/500"));

const App = () => (
  <Router basename={process.env.BASE_NAME}>
    <React.Suspense fallback={Preloading()}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/password-reset" component={PasswordReset} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/500" component={Error500} />
        <AppProvider>
          <PrivateRoute path="/" component={DefaultLayout} />
        </AppProvider>
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;

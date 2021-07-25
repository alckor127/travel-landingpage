import "core-js";
// core
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import store from "./redux/store";
import { AuthProvider } from "./providers";
import { icons } from "../icons";
// styles
import "../scss/bundle.scss";

React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

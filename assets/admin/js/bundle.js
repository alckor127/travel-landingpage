import "core-js";
// core
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { icons } from "../icons";
// styles
import "../scss/bundle.scss";

React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import { SpinPulse } from "../spinner";

const Preloading = () => (
  <div className="preloading loading__container">
    <SpinPulse size="large" /> Loading... wait please.
  </div>
);

export default Preloading;

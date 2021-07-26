import React from "react";
import { SpinnerPulse } from "../spinner";

const Preloading = () => (
  <div className="preloading loading__container">
    <SpinnerPulse size="lg" /> Loading... wait please.
  </div>
);

export default Preloading;

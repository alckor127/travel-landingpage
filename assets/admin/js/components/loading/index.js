import React from "react";
import { SpinFadeCircle } from "../spinners";

const Loading = () => (
  <div className="loading__container">
    <SpinFadeCircle size="large" /> Loading... wait please.
  </div>
);

export default Loading;

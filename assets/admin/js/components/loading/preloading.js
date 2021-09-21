import React from "react";
import { CSpinner } from "@coreui/react";

const Preloading = () => (
  <div className="c-preloading">
    <CSpinner grow /> Loading... wait please!
  </div>
);

export { Preloading };

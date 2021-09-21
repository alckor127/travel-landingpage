import React from "react";
import { CSpinner } from "@coreui/react";

const Loading = ({ size = "sm", text = "Loading..." }) => (
  <div className="c-loading">
    <CSpinner size={size} /> {text}
  </div>
);

export { Loading };

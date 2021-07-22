import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Pulse = ({ size, className, ...rest }) => {
  const classNames = cx({
    ["spin__pulse"]: true,
    [`spin__pulse-${size}`]: size,
    [className]: className,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="spin__pulse-dot" />
      <div className="spin__pulse-dot" />
      <div className="spin__pulse-dot" />
      <div className="spin__pulse-dot" />
      <div className="spin__pulse-dot" />
      <div className="spin__pulse-dot" />
    </div>
  );
};

// Pulse.defaultProps = {
//   size: "",
// };

Pulse.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
};

export { Pulse };

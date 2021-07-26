import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const SpinnerPulse = ({ size, className, ...rest }) => {
  const classNames = cx({
    ["spinner-pulse"]: true,
    [`spinner-pulse-${size}`]: size,
    [className]: className,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="spinner-pulse-dot" />
      <div className="spinner-pulse-dot" />
      <div className="spinner-pulse-dot" />
      <div className="spinner-pulse-dot" />
      <div className="spinner-pulse-dot" />
      <div className="spinner-pulse-dot" />
    </div>
  );
};

// SpinnerPulse.defaultProps = {
//   size: "",
// };

SpinnerPulse.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
};

export { SpinnerPulse };

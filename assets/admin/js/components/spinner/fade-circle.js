import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const FadeCircle = ({ size, className, ...rest }) => {
  const classNames = cx({
    ["spin__fade-circle"]: true,
    [`spin__fade-circle-${size}`]: size,
    [className]: className,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
      <div className="spin__fade-circle-dot" />
    </div>
  );
};

// FadeCircle.defaultProps = {
//   size: "",
// };

FadeCircle.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
};

export { FadeCircle };
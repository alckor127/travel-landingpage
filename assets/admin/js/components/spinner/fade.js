import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const SpinnerFade = ({ size, className, ...rest }) => {
  const classNames = cx({
    ["spinner-fade"]: true,
    [`spinner-fade-${size}`]: size,
    [className]: className,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
      <div className="spinner-fade-dot" />
    </div>
  );
};

// SpinnerFade.defaultProps = {
//   size: "",
// };

SpinnerFade.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
};

export { SpinnerFade };

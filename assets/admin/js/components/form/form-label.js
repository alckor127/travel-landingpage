import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const FormLabel = forwardRef(
  ({ children, className, classNameParent, ...rest }, ref) => {
    const _className = classNameParent
      ? classNameParent
      : cx("form-label", className);

    return (
      <label className={_className} {...rest} ref={ref}>
        {children}
      </label>
    );
  }
);

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNameParent: PropTypes.string,
};

export { FormLabel };

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Form = forwardRef(({ children, className, validated, ...rest }, ref) => {
  const _className = cx({ "was-validated": validated }, className);

  return (
    <form className={_className} {...rest} ref={ref} role="form">
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  validated: PropTypes.bool,
};

export { Form };

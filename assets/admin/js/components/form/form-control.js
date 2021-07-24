import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const FormControl = forwardRef(
  (
    {
      children,
      className,
      classNameParent,
      component: Component = "input",
      invalid,
      plaintext,
      type = "text",
      valid,
      ...rest
    },
    ref
  ) => {
    const _className = classNameParent
      ? classNameParent
      : cx(
          plaintext ? "form-control-plaintext" : "form-control",
          {
            "form-control-color": type === "color",
            "from-control-range": type === "range",
            "is-invalid": invalid,
            "is-valid": valid,
          },
          className
        );

    return (
      <Component
        {...(Component === "input" && { type: type })}
        className={_className}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

FormControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNameParent: PropTypes.string,
  component: PropTypes.elementType,
  invalid: PropTypes.bool,
  plainText: PropTypes.bool,
  type: PropTypes.oneOfType([
    PropTypes.oneOf(["color", "file", "text"]),
    PropTypes.string,
  ]),
  valid: PropTypes.bool,
};

export { FormControl };

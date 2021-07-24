import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { colorPropType } from "../../utils/types";
import { Link } from "../link";

const Button = forwardRef(
  (
    {
      children,
      className,
      color = "primary",
      component = "button",
      display,
      type = "button",
      round,
      ...rest
    },
    ref
  ) => {
    const _className = cx(
      "button",
      color && `button-${color}`,
      display && `button-${display}`,
      round && `button-round`,
      className
    );

    return (
      <Link
        component={rest.href ? "a" : component}
        type={type}
        className={_className}
        {...rest}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.elementType,
  display: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  round: PropTypes.bool,
};

export { Button };

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Link = forwardRef(
  (
    {
      children,
      active,
      className,
      component: Component = "a",
      disabled,
      ...rest
    },
    ref
  ) => {
    const _className = cx(className, { active, disabled });

    return (
      <Component
        className={_className}
        {...(active && { "aria-current": "page" })}
        {...(Component === "a" &&
          disabled && { "aria-disabled": true, tabIndex: -1 })}
        {...(Component === "a" ||
          (Component === "button" && {
            onClick: (event) => {
              event.preventDefault;
              !disabled && rest.onClick && rest.onClick(event);
            },
          }))}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

export { Link };

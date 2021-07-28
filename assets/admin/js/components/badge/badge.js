import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { colorPropType } from "../../utils/types";

const Badge = forwardRef(
  (
    {
      children,
      className,
      color,
      component: Component = "span",
      round,
      ...rest
    },
    ref
  ) => {
    const _className = cx(
      "badge",
      color && `badge-${color}`,
      round && `badge-round`,
      className
    );

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  round: PropTypes.bool,
};

export { Badge };

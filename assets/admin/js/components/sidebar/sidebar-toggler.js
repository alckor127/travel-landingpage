import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const SidebarToggler = forwardRef(({ children, className, ...rest }, ref) => {
  const _className = cx("sidebar-toggler", className);

  return (
    <button className={_className} ref={ref} {...rest}>
      {children}
    </button>
  );
});

SidebarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { SidebarToggler };

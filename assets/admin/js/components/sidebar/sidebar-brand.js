import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";

const SidebarBrand = forwardRef(({ children, className, ...rest }, ref) => {
  const _className = cx("sidebar-brand", className);

  return (
    <Link className={_className} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

SidebarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { SidebarBrand };

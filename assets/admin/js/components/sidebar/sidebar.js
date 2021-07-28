import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
// import { useForkedRef } from "../../hooks";
import { Backdrop } from "../backdrop";

const Sidebar = forwardRef(
  (
    {
      children,
      className,
      narrow,
      onHide,
      onShow,
      overlaid,
      position,
      selfHiding,
      unfoldable,
      visible,
      ...rest
    },
    ref
  ) => {
    const sidebarRef = useRef(ref);
    // const sidebarForkedRef = useForkedRef(ref, sidebarRef);
    const [mobile, setMobile] = useState(false);
    const [visibility, setVisibility] = useState(visible);

    const isOnMobile = (element) => {
      Boolean(
        element.current &&
          getComputedStyle(element.current).getPropertyValue("--is-mobile")
      );
    };

    useLayoutEffect(() => {
      setMobile(isOnMobile(sidebarRef));
    });

    useEffect(() => {
      setVisibility(visible);
      setMobile(isOnMobile(sidebarRef));
    }, [visible]);

    useEffect(() => {
      setMobile(isOnMobile(sidebarRef));
      visibility && onShow && onShow();
    }, [visibility]);

    useEffect(() => {
      window.addEventListener("mouseup", handleClickOutside);
      sidebarRef.current &&
        sidebarRef.current.addEventListener("mouseup", handleOnClick);
      window.addEventListener("keyup", handleKeyup);

      return () => {
        window.removeEventListener("mouseup", handleClickOutside);
        sidebarRef.current &&
          sidebarRef.current.removeEventListener("mouseup", handleOnClick);
        window.removeEventListener("keyup", handleKeyup);
      };
    });

    const handleHide = () => {
      if (visibility) {
        setVisibility(false);
        onHide && onHide();
      }
    };

    const handleKeyup = (event) => {
      if (
        mobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        handleHide();
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        handleHide();
      }
    };

    const handleOnClick = (event) => {
      const target = event.target;
      target &&
        target.classList.contains("nav-link") &&
        !target.classList.contains("nav-group-toggle") &&
        mobile &&
        handleHide();
    };

    const _className = cx(
      "sidebar",
      {
        "sidebar-narrow": narrow,
        "sidebar-overlaid": overlaid,
        [`sidebar-${position}`]: position,
        [`sidebar-self-hiding${
          typeof selfHiding !== "boolean" && "-" + selfHiding
        }`]: selfHiding,
        "sidebar-narrow-unfoldable": unfoldable,
        show: visibility,
        hide: !visibility,
      },
      className
    );

    return (
      <React.Fragment>
        <div
          // className="sidebar sidebar-lg-show sidebar-fixed"
          className={_className}
          {...rest}
          ref={sidebarRef}
        >
          {children}
        </div>
        {typeof window !== "undefined" &&
          mobile &&
          createPortal(
            <CBackdrop className="sidebar-backdrop" visible={visibility} />,
            document.body
          )}
      </React.Fragment>
    );
  }
);

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  overlaid: PropTypes.bool,
  position: PropTypes.oneOf(["fixed", "sticky"]),
  selfHiding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  ]),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool,
};

export { Sidebar };

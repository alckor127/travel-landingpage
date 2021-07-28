import { forwardRef } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import cx from "classnames";

const Backdrop = forwardRef(
  ({ className = "modal-backdrop", visible, ...rest }, ref) => {
    const _className = cx(className, "fade");

    const getTransitionClass = (state) => {
      return state === "entered" && "show";
    };

    return (
      <CSSTransition in={visible} timeout={150} mountOnEnter unmountOnExit>
        {(state) => {
          const transitionClass = getTransitionClass(state);
          return (
            <div
              className={cx(_className, transitionClass)}
              {...rest}
              ref={ref}
            />
          );
        }}
      </CSSTransition>
    );
  }
);

Backdrop.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
};

export { Backdrop };

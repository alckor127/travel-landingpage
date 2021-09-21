import React from "react";
import PropTypes from "prop-types";
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { confirmable, createConfirmation } from "react-confirm";

const Confirmation = ({
  title,
  message,
  show,
  dismiss,
  proceed,
  cancel,
  enableEscape = false,
  enableCancel = true,
}) => {
  return (
    <CModal
      size="sm"
      show={show}
      onClose={dismiss}
      closeOnBackdrop={enableEscape}
      centered
    >
      <CModalHeader>
        <strong>{title}</strong>
      </CModalHeader>
      <CModalBody>{message}</CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={proceed}>
          OK
        </CButton>
        {enableCancel && (
          <CButton color="dark" variant="ghost" onClick={cancel}>
            Cancel
          </CButton>
        )}
      </CModalFooter>
    </CModal>
  );
};

Confirmation.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  dismiss: PropTypes.func,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  enableEscape: PropTypes.bool,
  enableCancel: PropTypes.bool,
};

const confirm = (title, message, options = {}) => {
  return createConfirmation(confirmable(Confirmation))({
    title,
    message,
    ...options,
  });
};

export { confirm };

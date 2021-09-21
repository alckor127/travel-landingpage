import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const PasswordReset = () => {
  const history = useHistory();

  const {
    formState: { isSubmitted },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = useCallback(
    (data) => {
      console.log(data);

      setTimeout(() => {
        reset();
      }, 10000);
    },
    [reset]
  );

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Reset your password</h1>
                  <p className="text-muted">
                    Enter your user account's verified email address and we will
                    send you a password reset link.
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="email"
                      name="username"
                      placeholder="Enter your email address"
                      autoComplete="email"
                      innerRef={register()}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="12" md="8">
                      <CButton
                        type="submit"
                        block
                        color="primary"
                        className="mx-auto px-4"
                        disabled={isSubmitted}
                      >
                        {isSubmitted
                          ? "Sending..."
                          : "Send password reset email"}
                      </CButton>
                    </CCol>
                    <CCol xs="12" md="4" className="text-right">
                      <CButton
                        color="link"
                        className="px-0"
                        onClick={() => history.push("/login")}
                      >
                        Sign in
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default PasswordReset;

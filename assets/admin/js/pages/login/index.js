import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  CAlert,
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
import { AuthContext } from "../../contexts";
import { AuthAction } from "../../redux/actions";

const Login = () => {
  const [error, setError] = useState({
    show: false,
    code: undefined,
    message: undefined,
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const { setSession } = useContext(AuthContext);

  const {
    formState: { isSubmitted },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = useCallback(
    (data) => {
      dispatch(AuthAction.login(data.username, data.password))
        .then((res) => {
          console.log("res: ", res);
          setError({ ...error, show: false });

          if (res.content && res.content.token) {
            setSession(res.content);
            history.push("/");
          }
          reset();
        })
        .catch((err) => {
          setError({
            show: true,
            code: err.response.data.code || err.response.status,
            message: err.response.data.message || err.response.statusText,
          });
          reset();
        });
    },
    [dispatch]
  );

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CAlert
              color="danger"
              closeButton
              show={error.show}
              onShowChange={(value) => setError({ ...error, show: value })}
            >
              <strong>{error.code}:</strong> {error.message}
            </CAlert>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="username"
                      placeholder="Email address"
                      autoComplete="off"
                      innerRef={register()}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      innerRef={register()}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol sm="6">
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? "Signing in..." : "Sign in"}
                      </CButton>
                    </CCol>
                    <CCol sm="6" className="text-right">
                      <CButton
                        color="link"
                        className="px-0"
                        onClick={() => history.push("/password-reset")}
                      >
                        Forgot password?
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

export default Login;

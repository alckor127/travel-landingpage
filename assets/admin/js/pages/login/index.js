import React, { useCallback, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CIcon from "@coreui/icons-react";
import { Form, FormLabel, FormControl } from "../../components/form";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts";
import { AuthAction } from "../../redux/actions";

const Login = () => {
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
      dispatch(AuthAction.login(data.username, data.password)).then(
        (res) => {
          console.log("res", res);

          if (res && res.content && res.content.token) {
            setSession(res.content);

            history.push("/");
          }

          reset();
        },
        (err) => {
          console.log("err", err);
        }
      );
    },
    [dispatch]
  );

  return (
    <div
      className="login__wrapper"
      style={{
        backgroundImage: `url(${require("../../../images/login-background.jpg")})`,
      }}
    >
      <div className="login__container container">
        <Form className="login__form card" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="login__form-title card-title">Sign in</h3>
          <FormLabel htmlFor="username">E-mail address</FormLabel>
          <div className="login__form-group">
            <CIcon name="cil-user" />
            <FormControl
              placeholder="E-mail address"
              className="login__form-control"
              autoComplete="off"
              {...register("username")}
            />
          </div>
          <FormLabel htmlFor="password">Password</FormLabel>
          <div className="login__form-group">
            <CIcon name="cil-lock-locked" />
            <FormControl
              type="password"
              placeholder="Password"
              className="login__form-control"
              autoComplete="off"
              {...register("password")}
            />
          </div>
          <Button
            type="submit"
            className="login__button"
            display="flex"
            disabled={isSubmitted}
            round
          >
            {isSubmitted ? "Signing in..." : "Sign in"}
          </Button>
          <Link to="/password-reset" className="button button-link login__link">
            Forgot password?
          </Link>
        </Form>
        <div className="login__footer">
          <h6>
            © 2021, MADE WITH{" "}
            <CIcon name="bi-heart" className="login__footer-icon" /> BY ZIMA
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;

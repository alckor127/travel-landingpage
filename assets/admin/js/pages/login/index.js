import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CIcon from "@coreui/icons-react";
import { Form, FormLabel, FormControl } from "../../components/form";
import { Button } from "../../components/button";
import { SpinFadeCircle as Spinner } from "../../components/spinner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = useCallback((data) => {
    console.log(data, isSubmitting);
    console.log(process.env.API_URL);
  }, []);

  return (
    <div
      className="login__wrapper"
      style={{
        backgroundImage: `url(${require("../../../images/login-background.jpg")})`,
      }}
    >
      <div className="login__container container">
        <Form className="login__form card" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="login__form-title card-title">Login</h3>
          <FormLabel htmlFor="username">E-mail</FormLabel>
          <div className="login__form-group">
            <CIcon name="cil-user" />
            <FormControl
              placeholder="Username"
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
            disabled={isSubmitting}
            round
          >
            {/* <Spinner /> Logging... */}
            Login
          </Button>
          <Link
            to="/forgot-password"
            className="button button-link login__link"
          >
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

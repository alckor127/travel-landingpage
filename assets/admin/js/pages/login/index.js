import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CIcon from "@coreui/icons-react";
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
        <form
          className="login__form card"
          onSubmit={handleSubmit(onSubmit)}
          role="form"
        >
          <h3 className="login__form-title card-title">Login</h3>
          <label htmlFor="username">E-mail</label>
          <div className="login__form-group">
            <CIcon name="cil-user" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="login__form-control form-control"
              autoComplete="off"
              {...register("username")}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="login__form-group">
            <CIcon name="cil-lock-locked" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login__form-control form-control"
              autoComplete="off"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="button button-round button-flex login__button"
            disabled={isSubmitting}
          >
            {/* <Spinner /> Logging... */}
            Login
          </button>
          <Link
            to="/forgot-password"
            className="button button-link login__link"
          >
            Forgot password?
          </Link>
        </form>
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

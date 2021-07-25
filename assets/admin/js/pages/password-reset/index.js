import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CIcon from "@coreui/icons-react";
import { Form, FormLabel, FormControl } from "../../components/form";
import { Button } from "../../components/button";

const PasswordReset = () => {
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
    <div
      className="login__wrapper"
      style={{
        backgroundImage: `url(${require("../../../images/login-background.jpg")})`,
      }}
    >
      <div className="login__container container">
        <Form className="login__form card" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="login__form-title card-title">Reset your password</h3>
          <FormLabel htmlFor="username">
            Enter your user account's verified email address and we will send
            you a password reset link.
          </FormLabel>
          <div className="login__form-group">
            <CIcon name="cil-envelope-closed" />
            <FormControl
              placeholder="Enter your e-mail address"
              className="login__form-control"
              autoComplete="off"
              {...register("username")}
            />
          </div>
          <Button
            type="submit"
            className="login__button"
            display="flex"
            disabled={isSubmitted}
            round
          >
            {isSubmitted ? "Sending..." : "Send password reset email"}
          </Button>
          <Link to="/login" className="button button-link login__link">
            Sign in
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

export default PasswordReset;

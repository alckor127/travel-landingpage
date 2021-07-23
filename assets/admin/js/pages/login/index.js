import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import CIcon from "@coreui/icons-react";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        <Link to="/forgot-password">Forgot password</Link>
      </div>
    </form>
  );
};

export default Login;

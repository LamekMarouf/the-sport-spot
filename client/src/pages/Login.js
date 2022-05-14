import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="login-page">
      <div className="main-title">SPORT SPOT</div>
      <div className="login-box">
        <div className="title">Login</div>
        <div>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className="login-form">
              <input
                className="email-text"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="password-text"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="login-button" type="submit">
                Log In
              </button>
            </form>
          )}

          <div className="no-account">
            Don't have an account?
            <Link to="/signup">
              <div className="signup-link">Sign up here.</div>
            </Link>
          </div>

          {error && <div className="">{error.message}</div>}
        </div>
      </div>
    </main>
  );
};

export default Login;
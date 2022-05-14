import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="signup-page">
      <div className="main-title">SPORT SPOT</div>
      <div className="signup-box">
        <div className="title">Sign Up</div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <div className="signup-information">
            <form className="signup-form" onSubmit={handleFormSubmit}>
              <div className="username-box">
                <input
                  className="username-text"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="email-box">
                <input
                  className="email-text"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password-box">
                <input
                  className="password-text"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <button className="signup-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
        <section className="have-account">
          Already have an account?
          <Link to="/login">
            <div className="login-link">Log In here.</div>
          </Link>
        </section>

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </main>
  );
};

export default Signup;
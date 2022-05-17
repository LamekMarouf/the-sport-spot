import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader
            size={10}
            color={"#8c799e"}
            loading={loading}
            speedMultiplier={0.6}
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="signup-page">
            <div className="main-title">SPORT SPOT</div>
            <div className="signup-box">
              <div className="title">Sign Up</div>
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
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
                      Sign Up
                    </button>
                  </form>
                </div>
              )}

              {error && (
                <div className="error-message">
                  Make sure all information entered is correct, and that
                  password entered is longer than 4 characters.
                </div>
              )}

              <section className="have-account">
                Already have an account?
                <Link to="/login">
                  <div className="login-link">Log In here.</div>
                </Link>
              </section>
            </div>
          </main>
          <Footer />
        </>
      )}
      ;
    </>
  );
};

export default Signup;

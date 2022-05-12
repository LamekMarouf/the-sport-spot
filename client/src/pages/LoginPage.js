import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Add gradient background

function LoginPage() {
  return (
    <>
    <Navbar />
      <section className="login-page">
        <div className="main-title">SPORT SPOT</div>
        <div className="signup-box">
          <div className="signup-option">
            <p id="toggle-login">Login</p>
            <p id="toggle-signup">Signup</p>
          </div>
          <div className="signup-information">
            <form className="signup-form">
              <div className="first-and-last-name">
                <div className="firstname-box">
                  <input
                    className="firstname-text"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </div>
                <div className="lastname-box">
                  <input
                    className="lastname-text"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="email">
                <input
                  className="email-text"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="password">
                <input
                  className="password-text"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="phone-and-postcode">
                <div className="phone-box">
                  <input
                    className="phone-text"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="postcode-box">
                  <input
                    className="postcode-text"
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                  />
                </div>
              </div>
              <div className="street-address">
                <input
                  className="street-address-text"
                  type="text"
                  name="street-address"
                  placeholder="Street Address"
                />
              </div>
            </form>
          </div>
          <button className="signup-button">Signup</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LoginPage;

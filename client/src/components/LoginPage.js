import React from "react";

// Add gradient background

function LoginPage() {
  return (
    <>
      <section className="login-page">
        <div className="main-title">Sport Spot</div>
        <div className="signup-box">
          <div className="signup-option">
            <p>Login</p>
            <p>Signup</p>
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
              <div className="email"></div>
              <div className="password"></div>
              <div className="phone-and-postcode"></div>
              <div className="street-address"></div>
            </form>
          </div>
          <button className="signup-button">Signup</button>
        </div>
      </section>
    </>
  );
}

export default LoginPage;

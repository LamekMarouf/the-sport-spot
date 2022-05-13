import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiMenuAltLeft, BiCategoryAlt } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const displayMenu = () => {
    const navbarSide = document.getElementById("navbar-side");
    navbarSide.classList.toggle("hidden");
  };

  return (
    <>
      <header className="navbar">
        <button id="hamburger" onClick={displayMenu}>
          <BiMenuAltLeft />
        </button>

        <div>
          <Link className="title-link" to="/">
            <div className="title">Sports Spot</div>
          </Link>
        </div>
      </header>

      <section id="navbar-side" className="hidden">
        <ul>
          <Link to="/" onClick={displayMenu}>
            <li>
              <div className="navbar-icons">
                <RiHome4Line />
              </div>
              <div className="navbar-text">Home</div>
            </li>
          </Link>

          <Link to="/" onClick={displayMenu} >
            <li>
              <div className="navbar-icons">
                <BsCreditCard2Front />
              </div>
              Subscription
            </li>
          </Link>

          {Auth.loggedIn() ? (
            <>
              <li>
                <div className="navbar-logout" onClick={logout}>
                  <div className="navbar-icons">
                    <CgProfile />
                  </div>
                  Logout
                </div>
              </li>
            </>
          ) : (
            <>
              <Link className="navbar-login" to="/login" onClick={displayMenu}>
                <li>
                  <div className="navbar-icons">
                    <CgProfile />
                  </div>
                  Login
                </li>
              </Link>
            </>
          )}
        </ul>
        <Outlet />
      </section>
    </>
  );
};

export default Header;

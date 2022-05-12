import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiMenuAltLeft, BiCategoryAlt } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const displayMenu = () => {
    const navbarSide = document.getElementById("navbar-side");
    navbarSide.classList.toggle("hidden");
  };

  return (
    <>
      <section className="navbar-top">
        <button id="hamburger" onClick={displayMenu}>
          <BiMenuAltLeft />
        </button>
        <div className="logo">
          <Link to="/">The Sport Spot</Link>
        </div>
      </section>

      <section id="navbar-side" className="hidden">
        <ul>
          <Link to="/">
            <li>
              <div className="navbar-icons">
                <RiHome4Line />
              </div>
              <div className="navbar-text">Home</div>
            </li>
          </Link>

          <li>
            <div className="navbar-icons">
              <BsCreditCard2Front />
            </div>
            Subscription
          </li>

          <Link to="/loginpage">
            <li>
              <div className="navbar-icons">
                <CgProfile />
              </div>
              Log In
            </li>
          </Link>
        </ul>
        <Outlet />
      </section>
    </>
  );
}

export default Navbar;

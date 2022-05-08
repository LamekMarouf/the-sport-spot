import React from "react";
import { BiMenuAltLeft, BiCategoryAlt } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Navbar() {

  const displayMenu = () => {
    const navbarSide = document.getElementById('navbar-side');
    navbarSide.classList.toggle('hidden')
  }

  return (
    <>
      <section className="navbar-top">
        <button id="hamburger" onClick={displayMenu}>
          <BiMenuAltLeft />
        </button>
        <div className="logo">The Sport Spot</div>
      </section>

      <section id="navbar-side">
        <ul>
          <li>
            <div className="navbar-icons">
              <RiHome4Line />
            </div>
            <div className="navbar-text">Home</div>
          </li>
          <li>
            <div className="navbar-icons">
              <BiCategoryAlt />
            </div>
            Categories
          </li>
          <li>
            <div className="navbar-icons">
              <BsCreditCard2Front />
            </div>
            Subscription
          </li>
          <li>
            <div className="navbar-icons">
              <CgProfile />
            </div>
            Log In
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;

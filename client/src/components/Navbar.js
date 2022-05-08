import React from "react";
import { BiMenuAltLeft, BiCategoryAlt } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <section className="navbar-top">
        <div className="logo">The Sport Spot</div>
        <div className="hamburger">
          <BiMenuAltLeft />
        </div>
      </section>

      <section className="navbar-side">
        <ul>
          <li>
            <RiHome4Line />
            Home
          </li>
          <li>
            <BiCategoryAlt />
            Categories
          </li>
          <li>
            <BsCreditCard2Front />
            Subscription
          </li>
          <li>
            <CgProfile />
            Log In
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;

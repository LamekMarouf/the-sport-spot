import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiMenuAltLeft, BiCategoryAlt } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import sportSpotLogo from "../../assets/images/sport-spot-logo.png";

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

  const displayCategories = () => {
    const navbarSide = document.getElementById("navbar-categories");
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
            <img
              src={sportSpotLogo}
              alt="Sport Spot Logo"
              className="sport-spot-logo"
            ></img>
            <div className="title">Sport Spot</div>
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

            <li onClick={displayCategories}>
              <div className="navbar-icons">
                <BiCategoryAlt />
              </div>
              Categories
              <div className="category-button"><AiOutlineDown /></div>
            </li>

          <section id="navbar-categories" className="hidden">
            <Link to="/footballpage" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">Football</div>
              </li>
            </Link>
            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">MLB</div>
              </li>
            </Link>
            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">NBA</div>
              </li>
            </Link>

            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">Esports</div>
              </li>
            </Link>
            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">Mind Sports</div>
              </li>
            </Link>
            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">Olympics</div>
              </li>
            </Link>
            <Link to="/notfound" onClick={displayMenu}>
              <li>
                <div className="navbar-icons">
                </div>
                <div className="categories-text">NHL</div>
              </li>
            </Link>


          </section>


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

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";
import mlbLogo from "../assets/images/mlb-logo.png";
import nbaLogo from "../assets/images/nba-logo.png";
import nflLogo from "../assets/images/nfl-logo.png";
import esportsLogo from "../assets/images/esports-logo.jpg";
import soccerLogo from "../assets/images/soccer-logo.png";

function Homepage() {
  return (
    <>
      <Navbar />

      <section className="homepage">
        <Link to="/footballpage">
          <div className="pictures">
            <img src={soccerLogo} alt="Soccer Logo" className="logo"></img>
            <div className="text">Football</div>
          </div>
        </Link>
        <Link to="/notfound">
          <div className="pictures">
            <img src={mlbLogo} alt="MLB Logo" className="logo"></img>
            <div className="text">MLB</div>
          </div>
        </Link>
        <Link to="/notfound">
          <div className="pictures">
            <img src={nbaLogo} alt="NBA Logo" className="logo"></img>
            <div className="text">NBA</div>
          </div>
        </Link>

        <Link to="/notfound">
          <div className="pictures">
            <img
              src={esportsLogo}
              alt="Esports Logo"
              className="logo"
              id="esports-logo"
            ></img>
            <div className="text">Esports</div>
          </div>
        </Link>

        <Link to="/notfound">
          <div className="pictures">
            <img src={nflLogo} alt="NFL Logo" className="logo"></img>
            <div className="text">NFL</div>
          </div>
        </Link>

        <Link to="/notfound">
          <div className="pictures"></div>
        </Link>

        <Link to="/notfound">
          <div className="pictures"></div>
        </Link>
        <Link to="/notfound">
          <div className="pictures"></div>
        </Link>
        <Link to="/notfound">
          <div className="pictures"></div>
        </Link>
      </section>

      <Footer />
      <Outlet />
    </>
  );
}

export default Homepage;

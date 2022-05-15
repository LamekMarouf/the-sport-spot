import React from "react";
import { Outlet, Link } from "react-router-dom";
import mlbLogo from "../assets/images/mlb-logo.png";
import nbaLogo from "../assets/images/nba-logo.png";
import nflLogo from "../assets/images/nfl-logo.png";
import esportsLogo from "../assets/images/esports-logo.jpg";
import soccerLogo from "../assets/images/soccer-logo.png";

function Homepage() {
  return (
    <>
      <section className="homepage">
        <Link to="/footballpage">
          <div className="pictures">
            <img src={soccerLogo} alt="Soccer Logo" className="logo"></img>
            <div className="picture-text">
              <div className="text">Football</div>
              <div className="caption">
                Life is like a game of soccer. You need goals. If there are no
                goals in your life then you can't win.
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notfound">
          <div className="pictures">
            <div className="text">MLB</div>
            <img src={mlbLogo} alt="MLB Logo" className="logo"></img>
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
            <div className="text">Esports</div>
            <img
              src={esportsLogo}
              alt="Esports Logo"
              className="logo"
              id="esports-logo"
            ></img>
          </div>
        </Link>
      </section>
      <Outlet />
    </>
  );
}

export default Homepage;

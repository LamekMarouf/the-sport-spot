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
        <div className="picture-one">
          <Link to="/footballpage">
            <img src={soccerLogo} alt="Football Logo" className="logo"></img>
            <div className="picture-text">
              <div className="text">Football</div>
              <div id="caption">
                Get the latest up-to-date news for the worlds's most popular
                sport. From the premiere league to La Liga to the A-League.
              </div>
            </div>
          </Link>
        </div>
        <div className="picture-two">
          <Link to="/notfound">
            <div className="text">MLB</div>
            <img src={mlbLogo} alt="MLB Logo" className="logo"></img>
          </Link>
        </div>
        <Link to="/notfound">
          <div className="picture-one">
            <img src={nbaLogo} alt="NBA Logo" className="logo"></img>
            <div className="text">NBA</div>
          </div>
        </Link>

        <Link to="/notfound">
          <div className="picture-two">
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

import React from "react";
import { Outlet, Link } from "react-router-dom";
import bundesligaLogo from "../assets/images/bundesliga-logo.jpg";
import laligaLogo from "../assets/images/laliga-logo.png";
import ligueOneLogo from "../assets/images/ligue1-logo.png";
import mlsLogo from "../assets/images/mls-logo.png";
import premiereLeagueLogo from "../assets/images/premier-league-logo.png";
import serieALogo from "../assets/images/seriea-logo.png";

// Add a nice animation for hovering over logos
// Fix links (link sizes are too small)

function FootballPage() {
  return (
    <>
      <section className="football-page">
        <div className="left-column">
          <div className="title">Football</div>
          <div className="pictures">
            <Link to="/home ">
              <img
                src={premiereLeagueLogo}
                alt="Premiere League Logo"
                className="logo"
                id="premiereleague-logo"
              ></img>
            </Link>
          </div>

          <div className="pictures">
            <Link to="/notfound">
              <img
                src={laligaLogo}
                alt="Laliga Logo League Logo"
                className="logo"
                id="laliga-logo"
              ></img>
            </Link>
          </div>
          <div className="pictures">
            <Link to="/notfound">
              <img
                src={bundesligaLogo}
                alt="Bundesliga Logo"
                className="logo"
                id="bundesliga-logo"
              ></img>
            </Link>
          </div>
        </div>
        <div className="right-column">
          <div className="pictures">
            <Link to="/notfound">
              <img
                src={ligueOneLogo}
                alt="Ligue One Logo"
                className="logo"
                id="ligueone-logo"
              ></img>
            </Link>
          </div>
          <div className="pictures">
            <Link to="/notfound">
              <img
                src={serieALogo}
                alt="Serie A Logo"
                className="logo"
                id="seriea-logo"
              ></img>
            </Link>
          </div>
          <div className="pictures">
            <Link to="/notfound">
              <img
                src={mlsLogo}
                alt="MLS Logo"
                className="logo"
                id="mls-logo"
              ></img>
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default FootballPage;

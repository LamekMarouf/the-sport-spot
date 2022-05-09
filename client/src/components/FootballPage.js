import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bundesligaLogo from "../assets/images/bundesliga-logo.jpg";
import laligaLogo from "../assets/images/laliga-logo.png";
import ligueOneLogo from "../assets/images/ligue1-logo.png";
import mlsLogo from "../assets/images/mls-logo.png";
import premiereLeagueLogo from "../assets/images/premier-league-logo.png";
import serieALogo from "../assets/images/seriea-logo.png";

// Add a nice animation for hovering over logos

function FootballPage() {
  return (
    <>
      <Navbar />
      <section className="football-page">
        <div className="left-column">
          <div className="title">Football</div>
          <div className="pictures">
            <img
              src={premiereLeagueLogo}
              alt="Premiere League Logo"
              className="logo"
              id="premiereleague-logo"
            ></img>
          </div>
          <div className="pictures">
            <img
              src={laligaLogo}
              alt="Laliga Logo League Logo"
              className="logo"
              id="laliga-logo"
            ></img>
          </div>
          <div className="pictures">
            <img
              src={bundesligaLogo}
              alt="Bundesliga Logo"
              className="logo"
              id="bundesliga-logo"
            ></img>
          </div>
        </div>
        <div className="right-column">
          <div className="pictures">
            <img
              src={ligueOneLogo}
              alt="Ligue One Logo"
              className="logo"
              id="ligueone-logo"
            >
            </img>
          </div>
          <div className="pictures">
            <img
              src={serieALogo}
              alt="Serie A Logo"
              className="logo"
              id="seriea-logo"
            ></img>
          </div>
          <div className="pictures">
            <img
              src={mlsLogo}
              alt="MLS Logo"
              className="logo"
              id="mls-logo"
            ></img>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FootballPage;

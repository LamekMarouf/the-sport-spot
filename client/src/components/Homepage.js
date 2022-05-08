import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mlbLogo from "../assets/images/mlb-logo.png";
import nbaLogo from "../assets/images/nba-logo.png";
import nflLogo from "../assets/images/nfl-logo.png";
import esportsLogo from "../assets/images/esports-logo.jpg";

function Homepage() {
  return (
    <>
      <Navbar />

      <section className="homepage">
        <div className="pictures">
          <img src={mlbLogo} alt="MLB Logo" className="logo"></img>
          <div className="text">MLB</div>
        </div>
        <div className="pictures">
          <img src={nbaLogo} alt="NBA Logo" className="logo"></img>
          <div className="text">NBA</div>
        </div>
        <div className="pictures">
          <img src={nflLogo} alt="NFL Logo" className="logo"></img>
          <div className="text">NFL</div>
        </div>
        <div className="pictures">
          <img
            src={esportsLogo}
            alt="Esports Logo"
            className="logo"
            id="esports-logo"
          ></img>
          <div className="text">Esports</div>
        </div>
        <div className="pictures">Hello</div>
        <div className="pictures">Hello</div>
        <div className="pictures">Hello</div>
        <div className="pictures">Hello</div>
        <div className="pictures">Hello</div>
      </section>

      <Footer />
    </>
  );
}

export default Homepage;

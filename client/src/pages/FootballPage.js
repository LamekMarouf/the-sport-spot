import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bundesligaLogo from "../assets/images/bundesliga-logo.jpg";
import laligaLogo from "../assets/images/laliga-logo.png";
import ligueOneLogo from "../assets/images/ligue1-logo.png";
import mlsLogo from "../assets/images/mls-logo.png";
import premiereLeagueLogo from "../assets/images/premier-league-logo.png";
import serieALogo from "../assets/images/seriea-logo.png";

function FootballPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const showHoverText = () => {
    const hoverText = document.getElementById("hover-text");
    hoverText.classList.toggle("hidden");
  };

  const showHoverTextTwo = () => {
    const hoverText = document.getElementById("hover-text-two");
    hoverText.classList.toggle("hidden");
  };

  const showHoverTextThree = () => {
    const hoverText = document.getElementById("hover-text-three");
    hoverText.classList.toggle("hidden");
  };

  const showHoverTextFour = () => {
    const hoverText = document.getElementById("hover-text-four");
    hoverText.classList.toggle("hidden");
  };

  const showHoverTextFive = () => {
    const hoverText = document.getElementById("hover-text-five");
    hoverText.classList.toggle("hidden");
  };

  const showHoverTextSix = () => {
    const hoverText = document.getElementById("hover-text-six");
    hoverText.classList.toggle("hidden");
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <SyncLoader
            size={10}
            color={"#d0d0d0"}
            loading={loading}
            speedMultiplier={0.6}
          />
        </div>
      ) : (
        <>
          <Header />

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
                  <div
                    id="hover-text"
                    className="hidden"
                    onMouseOver={showHoverText}
                    onMouseLeave={showHoverText}
                  >
                    Premiere League
                  </div>
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
                  <div
                    id="hover-text-two"
                    className="hidden"
                    onMouseOver={showHoverTextTwo}
                    onMouseLeave={showHoverTextTwo}
                  >
                    La Liga
                  </div>
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
                  <div
                    id="hover-text-three"
                    className="hidden"
                    onMouseOver={showHoverTextThree}
                    onMouseLeave={showHoverTextThree}
                  >
                    Bundesliga
                  </div>
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
                  <div
                    id="hover-text-four"
                    className="hidden"
                    onMouseOver={showHoverTextFour}
                    onMouseLeave={showHoverTextFour}
                  >
                    Ligue One
                  </div>
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
                  <div
                    id="hover-text-five"
                    className="hidden"
                    onMouseOver={showHoverTextFive}
                    onMouseLeave={showHoverTextFive}
                  >
                    Serie A
                  </div>
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
                  <div
                    id="hover-text-six"
                    className="hidden"
                    onMouseOver={showHoverTextSix}
                    onMouseLeave={showHoverTextSix}
                  >
                    MLS
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <Outlet />
          <Footer />
        </>
      )}
      ;
    </>
  );
}

export default FootballPage;

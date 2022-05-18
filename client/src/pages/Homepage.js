import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SyncLoader from "react-spinners/SyncLoader";
import mlbLogo from "../assets/images/mlb-logo.png";
import nbaLogo from "../assets/images/nba-logo.png";
import nflLogo from "../assets/images/nfl-logo.png";
import esportsLogo from "../assets/images/esports-logo.jpg";
import soccerLogo from "../assets/images/soccer-logo.png";
import chessLogo from "../assets/images/chess-logo.jpg";
import olympicsLogo from "../assets/images/olympics-logo.png";
import iceHockeyLogo from "../assets/images/nhl-logo.png";

function Homepage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
          <section className="homepage">
            <div className="picture-one" id="football-card">
              <Link to="/footballpage">
                <img
                  src={soccerLogo}
                  alt="Football Logo"
                  className="logo"
                ></img>
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
                <div className="picture-text">
                  <div className="text">MLB</div>
                  <div id="caption">
                    Major League Baseball is a professional baseball
                    organization and the oldest major professional sports league
                    in the world.{" "}
                  </div>
                </div>
                <img
                  src={mlbLogo}
                  alt="MLB Logo"
                  className="logo"
                  id="mlb-logo"
                ></img>
              </Link>
            </div>
            <div className="picture-one">
              <Link to="/notfound">
                <img src={nbaLogo} alt="NBA Logo" className="logo"></img>
                <div className="picture-text">
                  <div className="text">NBA</div>
                  <div id="caption">
                    The National Basketball Association is a professional
                    basketball league in North America. The league is composed
                    of 30 teams and is one of the major professional sports
                    leagues in the United States and Canada. It is the premier
                    men's professional basketball league in the world.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div className="picture-two">
              <Link to="/notfound">
                <div className="picture-text">
                  <div className="text">NFL</div>
                  <div id="caption">
                    The National Football League is a professional American
                    football league that consists of 32 teams. The NFL is one of
                    the major North American professional sports leagues and the
                    highest professional level of American football in the
                    world.{" "}
                  </div>
                </div>
                <img src={nflLogo} alt="NFL Logo" className="logo"></img>
              </Link>
            </div>
            <div className="picture-one">
              <Link to="/notfound">
                <img
                  src={esportsLogo}
                  alt="Esports Logo"
                  className="logo"
                ></img>
                <div className="picture-text">
                  <div className="text">Esports</div>
                  <div id="caption">
                    Esports, short for electronic sports, is a form of
                    competition using video games. Esports often takes the form
                    of organized, multiplayer video game competitions,
                    particularly between professional players, individually or
                    as teams.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div className="picture-two">
              <Link to="/notfound">
                <div className="picture-text">
                  <div className="text">Mind Sports</div>
                  <div id="caption">
                    A mind sport, more correctly mind competition, is a game of
                    skill where the competition is based on a particular type of
                    intellectual ability as opposed to physical exercise.{" "}
                  </div>
                </div>
                <img src={chessLogo} alt="Chess Logo" className="logo"></img>
              </Link>
            </div>{" "}
            <div className="picture-one">
              <Link to="/notfound">
                <img
                  src={olympicsLogo}
                  alt="Olympics Logo"
                  className="logo"
                  id="olympics-logo"
                ></img>
                <div className="picture-text">
                  <div className="text">Olympics</div>
                  <div id="caption">
                    The modern Olympic Games or Olympics are the leading
                    international sporting events featuring summer and winter
                    sports competitions in which thousands of athletes from
                    around the world participate in a variety of competitions.
                    The Olympic Games are considered the world's foremost sports
                    competition with more than 200 nations participating.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div className="picture-two">
              <div></div>
              <Link to="/notfound">
                <div className="picture-text">
                  <div className="text">NHL</div>
                  <div id="caption">
                    NHL is a contact winter team sport played on ice skates,
                    usually on an ice skating rink with lines and markings
                    specific to the sport.{" "}
                  </div>
                </div>
                <img
                  src={iceHockeyLogo}
                  alt="Ice Hockey Logo"
                  className="logo"
                ></img>
              </Link>
            </div>
          </section>
          <Footer />
        </>
      )}
      <Outlet />
    </>
  );
}

export default Homepage;

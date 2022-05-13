import React from "react";
import { Outlet, Link } from "react-router-dom";

function PremiereLeaguePage() {
  return (
    <>
      <section className="premiereleague-page">
        <div className="title">PREMIERE LEAGUE</div>
        <div className="trending">
          <div className="trending-and-add">
            <div className="trending-title">Trending</div>
            <button id="trending-add-card-button">+</button>
          </div>
          <div className="trending-cards">
            <div className="card">
              <Link to="/home">
                <div className="card-picture"></div>
                <div className="card-title">Manchester City vs Liverpool</div>
                <div className="card-time">2 hours ago</div>
                <div className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque non metus vel risus tempus commodo. Ut felis orci,
                  aliquam at diam sed, scelerisque dapibus ipsum. Sed varius in
                  libero eu blandit. Duis placerat porta massa sit amet
                  pulvinar. Donec blandit tellus ac tincidunt convallis. Proin
                  imperdiet tortor nulla, vel euismod neque ornare at. Cras nisi
                  est, interdum vitae blandit nec, pharetra vel est. Non
                  aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Quisque non metus vel risus tempus commodo. Ut felis
                  orci, aliquam at diam sed, scelerisque dapibus ipsum. Sed
                  varius in libero eu blandit. Duis placerat porta massa sit
                  amet pulvinar. Donec blandit tellus ac tincidunt convallis.
                </div>
              </Link>
            </div>
            <div className="card">
              <div className="card-picture"></div>
              <div className="card-title">Title</div>
              <div className="card-time">2 hours ago</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non metus vel risus tempus commodo. Ut felis orci, aliquam at
                diam sed, scelerisque dapibus ipsum. Sed varius in libero eu
                blandit. Duis placerat porta massa sit amet pulvinar. Donec
                blandit tellus ac tincidunt convallis. Proin imperdiet tortor
                nulla, vel euismod neque ornare at. Cras nisi est, interdum
                vitae blandit nec, pharetra vel est. Non aliquam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque non metus
                vel risus tempus commodo. Ut felis orci, aliquam at diam sed,
                scelerisque dapibus ipsum. Sed varius in libero eu blandit. Duis
                placerat porta massa sit amet pulvinar. Donec blandit tellus ac
                tincidunt convallis.
              </div>
            </div>
            <div className="card">
              <div className="card-picture"></div>
              <div className="card-title">Title</div>
              <div className="card-time">2 hours ago</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non metus vel risus tempus commodo. Ut felis orci, aliquam at
                diam sed, scelerisque dapibus ipsum. Sed varius in libero eu
                blandit. Duis placerat porta massa sit amet pulvinar. Donec
                blandit tellus ac tincidunt convallis. Proin imperdiet tortor
                nulla, vel euismod neque ornare at. Cras nisi est, interdum
                vitae blandit nec, pharetra vel est. Non aliquam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque non metus
                vel risus tempus commodo. Ut felis orci, aliquam at diam sed,
                scelerisque dapibus ipsum. Sed varius in libero eu blandit. Duis
                placerat porta massa sit amet pulvinar. Donec blandit tellus ac
                tincidunt convallis.
              </div>
            </div>
          </div>
        </div>
        <div className="all">
          <div className="all-and-add">
          <div className="all-title">All</div>
          <div id="all-add-card-button">+</div>
          </div>
          <div className="all-cards">
            <div className="card">
              <div className="card-picture"></div>
              <div className="card-title">Title</div>
              <div className="card-time">2 hours ago</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non metus vel risus tempus commodo. Ut felis orci, aliquam at
                diam sed, scelerisque dapibus ipsum. Sed varius in libero eu
                blandit. Duis placerat porta massa sit amet pulvinar. Donec
                blandit tellus ac tincidunt convallis. Proin imperdiet tortor
                nulla, vel euismod neque ornare at. Cras nisi est, interdum
                vitae blandit nec, pharetra vel est. Non aliquam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque non metus
                vel risus tempus commodo. Ut felis orci, aliquam at diam sed,
                scelerisque dapibus ipsum. Sed varius in libero eu blandit. Duis
                placerat porta massa sit amet pulvinar. Donec blandit tellus ac
                tincidunt convallis.
              </div>
            </div>
            <div className="card">
              <div className="card-picture"></div>
              <div className="card-title">Title</div>
              <div className="card-time">2 hours ago</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non metus vel risus tempus commodo. Ut felis orci, aliquam at
                diam sed, scelerisque dapibus ipsum. Sed varius in libero eu
                blandit. Duis placerat porta massa sit amet pulvinar. Donec
                blandit tellus ac tincidunt convallis. Proin imperdiet tortor
                nulla, vel euismod neque ornare at. Cras nisi est, interdum
                vitae blandit nec, pharetra vel est. Non aliquam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque non metus
                vel risus tempus commodo. Ut felis orci, aliquam at diam sed,
                scelerisque dapibus ipsum. Sed varius in libero eu blandit. Duis
                placerat porta massa sit amet pulvinar. Donec blandit tellus ac
                tincidunt convallis.
              </div>
            </div>
            <div className="card">
              <div className="card-picture"></div>
              <div className="card-title">Title</div>
              <div className="card-time">2 hours ago</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non metus vel risus tempus commodo. Ut felis orci, aliquam at
                diam sed, scelerisque dapibus ipsum. Sed varius in libero eu
                blandit. Duis placerat porta massa sit amet pulvinar. Donec
                blandit tellus ac tincidunt convallis. Proin imperdiet tortor
                nulla, vel euismod neque ornare at. Cras nisi est, interdum
                vitae blandit nec, pharetra vel est. Non aliquam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque non metus
                vel risus tempus commodo. Ut felis orci, aliquam at diam sed,
                scelerisque dapibus ipsum. Sed varius in libero eu blandit. Duis
                placerat porta massa sit amet pulvinar. Donec blandit tellus ac
                tincidunt convallis.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default PremiereLeaguePage;

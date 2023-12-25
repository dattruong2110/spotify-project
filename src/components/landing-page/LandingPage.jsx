/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../landing-page/LandingPage.scss";
import { NavLink, useNavigate } from "react-router-dom";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <body>
        <header>
          <div class="container-header-defauft">
            <div class="logo-spotify">
              <NavLink to="/home-page">
                <img
                  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div class="header-menu">
              <div class="header-menu-left-bar">
                <NavLink to="/premium-page">Premium</NavLink>
                <NavLink to="/support-page">Support</NavLink>
                <NavLink to="/download-page">Download</NavLink>
              </div>
              <div class="header-menu-separator"></div>
              <div class="header-menu-right-bar">
                <NavLink to="/signup">Sign up</NavLink>
                <button onClick={() => navigate("/login")}>Log in</button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div class="container">
            <div>
              <h1 className="h1-landingpage">Listening is everything</h1>
            </div>

            <p className="p-landingpage">
              Millions of songs and podcasts. No credit card needed.
            </p>

            <NavLink to="/homepage" className="a-landingpage">
              Get Spotify Free
            </NavLink>
          </div>
        </main>

        <FooterDefauft />
      </body>
    </>
  );
};

export default LandingPage;

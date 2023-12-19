import React from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = ({ isPlaylistPage, showPlayButton }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div class={`topbar ${isPlaylistPage ? "header-bar-playlist" : ""}`}>
          <div class="prev-next-buttons d-flex">
            <div className="d-flex">
              <button type="button" class="fa fas fa-chevron-left"></button>
              <button type="button" class="fa fas fa-chevron-right"></button>
            </div>
            {showPlayButton && (
              <div className="d-flex">
                <Button className="play-btn">
                  <i className="fa fa-play"></i>
                </Button>
                <span className="header-playlist-title">lofi beats</span>
              </div>
            )}
          </div>
          <div class="navbar">
            <ul>
              <li>
                <NavLink to="/premium-page">Premium</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
              <li>
                <NavLink to="/download-page">Download</NavLink>
              </li>
              <li class="divider">|</li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </ul>
            <button
              className="header-login-btn"
              type="button"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

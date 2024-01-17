import React from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = ({ isPlaylistPage, showPlayButton, name }) => {
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
              <div className="header-play-button d-flex">
                <Button className="play-btn">
                  <i className="fa fa-play"></i>
                </Button>
                <span className="header-playlist-title">{name}</span>
              </div>
            )}
          </div>

          <div class="navbar">
            <ul>
              <li className="header-menu-item">
                <NavLink to="/premium-page">Premium</NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink to="/support-page">Support</NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink to="/download-page">Download</NavLink>
              </li>
              <li class="divider header-menu-item">|</li>
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

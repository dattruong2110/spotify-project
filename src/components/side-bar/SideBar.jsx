/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="logo-spotify">
          <NavLink to="/home-page">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div class="navigation">
          <ul>
            <li>
              <NavLink to="/home-page" className="d-flex align-items-center">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="d-flex align-items-center">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="d-flex align-items-center">
                <span class="fa fas fa-book"></span>
                <span>Your Library</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navigation">
          <ul>
            <li className="test">
              <NavLink
                to="/create-playlist-page"
                className="d-flex align-items-center"
              >
                <span class="fa fas fa-plus-square"></span>
                <span>Create Playlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="d-flex align-items-center">
                <span class="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navigation">
          <ul>
            <li>
              <NavLink to="" className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-music-note-list"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                  <path fill-rule="evenodd" d="M12 3v10h-1V3z" />
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                <span>Suggested Playlist</span>
              </NavLink>
            </li>
            <li className="list-playlist-suggestion">
              <NavLink
                to="/playlist/37i9dQZF1DXcBWIGoYBM5M"
                className="d-flex align-items-center"
              >
                <span>
                  <img
                    src="https://i.scdn.co/image/ab67706f00000003b81fa84dfd95340eeeaacd04"
                    alt="playlist-suggestion"
                    width={15}
                    height={15}
                  />
                </span>
                <span>Today’s Top Hits</span>
              </NavLink>
            </li>
            <li className="list-playlist-suggestion">
              <NavLink
                to="/playlist/37i9dQZEVXbLdGSmz6xilI"
                className="d-flex align-items-center"
              >
                <span>
                  <img
                    src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_vn_large.jpg"
                    alt="playlist-suggestion"
                    width={15}
                    height={15}
                  />
                </span>
                <span>Top 50 - Vietnam</span>
              </NavLink>
            </li>
            <li className="list-playlist-suggestion">
              <NavLink
                to="/playlist/37i9dQZEVXbL1G1MbPav3j"
                className="d-flex align-items-center"
              >
                <span>
                  <img
                    src="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_vn_large.jpg"
                    alt="playlist-suggestion"
                    width={15}
                    height={15}
                  />
                </span>
                <span>Viral 50 - Vietnam</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="policies">
          <ul>
            <li>
              <NavLink href="#">Cookies</NavLink>
            </li>
            <li>
              <NavLink href="#">Privacy</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

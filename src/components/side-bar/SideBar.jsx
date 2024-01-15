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
              <NavLink to="/home-page">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span class="fa fas fa-book"></span>
                <span>Your Library</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navigation">
          <ul>
            <li>
              <NavLink to="/create-playlist-page">
                <span class="fa fas fa-plus-square"></span>
                <span>Create Playlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span class="fa fas fa-heart"></span>
                <span>Liked Songs</span>
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

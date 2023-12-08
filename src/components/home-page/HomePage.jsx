import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";
import SideBar from "../side-bar/SideBar";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <body>
      <body>
        <div class="sidebar">
          <div class="logo">
            <a href="#">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                alt="Logo"
              />
            </a>
          </div>

          <div class="navigation">
            <ul>
              <li>
                <a href="#">
                  <span class="fa fa-home"></span>
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fa-search"></span>
                  <span>Search</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fas fa-book"></span>
                  <span>Your Library</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="navigation">
            <ul>
              <li>
                <a href="#">
                  <span class="fa fas fa-plus-square"></span>
                  <span>Create Playlist</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fas fa-heart"></span>
                  <span>Liked Songs</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="policies">
            <ul>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="main-container">
          <div class="topbar">
            <div class="prev-next-buttons">
              <button type="button" class="fa fas fa-chevron-left"></button>
              <button type="button" class="fa fas fa-chevron-right"></button>
            </div>

            <div class="navbar">
              <ul>
                <li>
                  <a href="#">Premium</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
                <li class="divider">|</li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
              <button type="button">Log In</button>
            </div>
          </div>

          <div class="spotify-playlists">
            <h2>Playlist For You</h2>
            <div class="list">
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
            </div>
            <hr />
          </div>

          <div class="spotify-playlists">
            <h2>Collection For You</h2>
            <div class="list">
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
            </div>
            <hr />
          </div>

          <div class="spotify-playlists">
            <h2>Spotify's Choice</h2>
            <div class="list">
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
              </div>
            </div>

            <hr />
          </div>

          <div class="preview">
            <div class="text">
              <h6>Preview of Spotify</h6>
              <p>
                Sign up to get unlimited songs and podcasts with occasional ads.
                No credit card needed.
              </p>
            </div>
            <div class="button">
              <button type="button">Sign up free</button>
            </div>
          </div>
        </div>

        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </body>
  );
};

export default HomePage;

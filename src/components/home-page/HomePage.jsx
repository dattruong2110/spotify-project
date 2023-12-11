import React from "react";
import "./HomePage.scss";
import SideBar from "../side-bar/SideBar";
import FooterPreview from "../footer/FooterPreview";

const HomePage = () => {
  return (
    <>
      <body>
        <SideBar />
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
            <h2>Playlist Hit</h2>
            <div class="list">
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
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
            <h2>Collection The Best</h2>
            <div class="list">
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Peaceful Piano</h4>
                <p>Relax and indulge with beautiful piano pieces</p>
              </div>
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
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
              </div>
              <div class="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJyIheL7ILSEMaoGP0XjzwXODWg0SJSVP_D6YBDc2UGziOkxR6cG8yXc5s4StNd4Tus&usqp=CAU" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
              </div>
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

          <FooterPreview />
        </div>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default HomePage;

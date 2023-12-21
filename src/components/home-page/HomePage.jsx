/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./HomePage.scss";
import SideBar from "../side-bar/SideBar";
import FooterPreview from "../footer/FooterPreview";
import Header from "../header/Header";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";

const HomePage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return (
    <>
      <body>
        <SideBar />
        <div class="main-container-homepage">
          {isAuthenticated ? <HeaderAccount /> : <Header />}
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

          {isAuthenticated ? <FooterPlayMusic /> : <FooterPreview />}
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

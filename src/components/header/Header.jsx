import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header>
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
      </header>
    </>
  );
};

export default Header;

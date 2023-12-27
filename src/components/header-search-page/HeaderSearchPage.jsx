import React from "react";
import "./HeaderSearchPage.scss";

const HeaderSearchPage = () => {
  return (
    <>
      <header>
        <div className="topbar-search d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="prev-next-buttons-search">
              <button
                type="button"
                className="fa fas fa-chevron-left header-search-left-right-btn"
              ></button>
              <button
                type="button"
                className="fa fas fa-chevron-right header-search-left-right-btn"
              ></button>
            </div>
            <div class="search-input">
              <form role="search">
                <input
                  type="text"
                  placeholder="What do you want to listen to?"
                  className="search-box"
                ></input>
              </form>
              <i
                class="fas fa-search search-icon"
                id="icon"
                onclick="toggleShow()"
              ></i>
            </div>
          </div>
          <div className="navbar-search">
            <ul>
              <li>
                <a href="/premium-page">Premium</a>
              </li>
              <li>
                <a href="/support-page">Support</a>
              </li>
              <li>
                <a href="/downloan-page">Download</a>
              </li>
              <li className="divider-search">|</li>
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

export default HeaderSearchPage;

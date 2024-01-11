import React from "react";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";
import "../app-help/AppHelp.scss";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";

const AppHelp = () => {
  return (
    <>
      <div className="main-app-help">
        <div aria-hidden="true" className="highlight-app-help"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-app-help">
              <ul className="distance-home-app-help">
                <li className="home-path-app-help">
                  <a href="support-page">
                    <span className="home-btn-app-help">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn-app-help"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-app-help">App Help</h1>
              <div className="app-help-buttons">
                <ul className="item-app-help">
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Getting started
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      App Settings
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Troubleshooting
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Playlists
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Features
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Social features
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Podcasts
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Live events
                    </a>
                  </li>
                  <li className="menu-app-help">
                    <a href="" className="button-spacing-app-help">
                      Listening privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="suggested-topic-section-of-app-help">
              <ul className="folders-of-recommended-topics-of-app-help">
                <li className="menu-in-app-help">
                  <a href="" className="item-of-app-help">
                    <span className="each-sub-item-in-app-help">
                      Getting started
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-app-help">
                    <span className="each-sub-item-in-app-help">
                      What is Spotify?
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-app-help">
                    <span className="each-sub-item-in-app-help">
                      Your Library
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-app-help">
                    <span className="each-sub-item-in-app-help">
                      Now Playing
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Where is Spotify available?
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Supported devices for Spotify
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Spotify for public or commercial use
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Keybroard shortcuts
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Spotify for Artists
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
                <li className="menu-in-app-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-app-help">
                      Spotify for Podcasters
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-app"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <FooterDefauft />
      </div>
    </>
  );
};

export default AppHelp;

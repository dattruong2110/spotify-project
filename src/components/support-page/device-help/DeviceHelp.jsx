import React from "react";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";
import "../device-help/DeviceHelp.scss";

const DeviceHelp = () => {
  return (
    <>
      <div className="main-device-help">
        <div aria-hidden="true" className="highlight-device-help"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-device-help">
              <ul className="distance-home-device-help">
                <li className="home-path-device-help">
                  <a href="support-page">
                    <span className="home-btn-device-help">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn-device-help"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-device-help">Device Help</h1>
              <div className="device-help-buttons">
                <ul className="item-device-help">
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      Speakers
                    </a>
                  </li>
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      Smart watches
                    </a>
                  </li>
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      TVs
                    </a>
                  </li>
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      Gaming
                    </a>
                  </li>
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      Cars
                    </a>
                  </li>
                  <li className="menu-device-help">
                    <a href="" className="button-spacing-device-help">
                      Voice assistants
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="suggested-topic-section-of-device-help">
              <ul className="folders-of-recommended-topics-of-device-help">
                <li className="menu-in-device-help">
                  <a href="" className="item-of-device-help">
                    <span className="each-sub-item-in-device-help">
                      Spotify on speakers
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
                  </a>
                </li>
                <li className="menu-in-device-help">
                  <a href="" className="item-of-device-help">
                    <span className="each-sub-item-in-device-help">
                      Spotify on Alexa devices
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
                  </a>
                </li>
                <li className="menu-in-device-help">
                  <a href="" className="item-of-device-help">
                    <span className="each-sub-item-in-device-help">
                      Spotify on Google devices
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
                  </a>
                </li>
                <li className="menu-in-device-help">
                  <a href="" className="item-of-device-help">
                    <span className="each-sub-item-in-device-help">
                      Spotify on Sonos
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
                  </a>
                </li>
                <li className="menu-in-device-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-device-help">
                      Spotify Connect
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
                  </a>
                </li>
                <li className="menu-in-device-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-device-help">
                      Bluetooth help for Spotify
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-device"></i>
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

export default DeviceHelp;

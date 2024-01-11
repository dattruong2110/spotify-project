import React from "react";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";
import "../safety-privacy/SafetyPrivacy.scss";

const SafetyPrivacy = () => {
  return (
    <>
      <div className="main-safety-privacy">
        <div aria-hidden="true" className="highlight-safety-privacy"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-safety-privacy">
              <ul className="distance-home-safety-privacy">
                <li className="home-path-safety-privacy">
                  <a href="support-page">
                    <span className="home-btn-safety-privacy">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn-safety-privacy"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-safety-privacy">Safety & Privacy</h1>
              <div className="safety-privacy-buttons">
                <ul className="item-safety-privacy">
                  <li className="menu-safety-privacy">
                    <a href="" className="button-spacing-safety-privacy">
                      Data and privacy info
                    </a>
                  </li>
                  <li className="menu-safety-privacy">
                    <a href="" className="button-spacing-safety-privacy">
                      Platform Rules
                    </a>
                  </li>
                  <li className="menu-safety-privacy">
                    <a href="" className="button-spacing-safety-privacy">
                      Content actions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="suggested-topic-section-of-safety-privacy">
              <ul className="folders-of-recommended-topics-of-safety-privacy">
                <li className="menu-in-safety-privacy">
                  <a href="" className="item-of-safety-privacy">
                    <span className="each-sub-item-in-safety-privacy">
                      Data rights and privacy settings
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-safety-privacy"></i>
                  </a>
                </li>
                <li className="menu-in-safety-privacy">
                  <a href="" className="item-of-safety-privacy">
                    <span className="each-sub-item-in-safety-privacy">
                      Understanding my data
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-safety-privacy"></i>
                  </a>
                </li>
                <li className="menu-in-safety-privacy">
                  <a href="" className="item-of-safety-privacy">
                    <span className="each-sub-item-in-safety-privacy">
                      GDPR Article 15 Information
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-safety-privacy"></i>
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

export default SafetyPrivacy;

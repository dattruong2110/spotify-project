import React from "react";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";
import "../account-help/AccountHelp.scss";

const AccountHelp = () => {
  return (
    <>
      <div className="main-account-help">
        <div aria-hidden="true" className="highlight-account-help"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-account-help">
              <ul className="distance-home-account-help">
                <li className="home-path-account-help">
                  <a href="support-page">
                    <span className="home-btn-account-help">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn-account-help"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-account-help">Account Help</h1>
              <div className="account-help-buttons">
                <ul className="item-account-help">
                  <li className="menu-account-help">
                    <a href="" className="button-spacing-account-help">
                      Logging In
                    </a>
                  </li>
                  <li className="menu-account-help">
                    <a href="" className="button-spacing-account-help">
                      Profile Help
                    </a>
                  </li>
                  <li className="menu-account-help">
                    <a href="" className="button-spacing-account-help">
                      Account Setting
                    </a>
                  </li>
                  <li className="menu-account-help">
                    <a href="" className="button-spacing-account-help">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="suggested-topic-section-of-account-help">
              <ul className="folders-of-recommended-topics-of-account-help">
                <li className="menu-in-account-help">
                  <a href="" className="item-of-account-help">
                    <span className="each-sub-item-in-account-help">
                      Can't remember login details
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-account-help">
                    <span className="each-sub-item-in-account-help">
                      Can't reset password
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-account-help">
                    <span className="each-sub-item-in-account-help">
                      Facebook login help
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-account-help">
                    <span className="each-sub-item-in-account-help">
                      Apple login help
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-account-help">
                      Google login help
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-account-help">
                      Phone number login help
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-account-help">
                      Disabled accounts
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
                  </a>
                </li>
                <li className="menu-in-account-help">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-account-help">
                      How to log out
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-account"></i>
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

export default AccountHelp;

import React from "react";
import { Container } from "react-bootstrap";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import "./SupportPage.scss";

const SupportPage = () => {
  return (
    <>
      <div className="main-support">
        <div aria-hidden="true" className="main-highlight"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-main-spotify-support">
              <h1 className="content-support-spotify ">Spotify Support</h1>
              <h2 className="content-support-hcwhy">How can we help you ?</h2>
              <div className="log-in-support">
                <span className="support-when-logging-in">
                  <span>
                    <a href="/login" className="logging-in-support">
                      Log in
                    </a>
                    for faster help
                  </span>
                </span>
              </div>
              <div className="distance-support-page">
                <i
                  class="fas fa-search search-icon-support"
                  id="icon"
                  onclick="toggleShow()"
                ></i>
                <form role="searh">
                  <input
                    type="text"
                    className="search-input-support"
                    placeholder="Search"
                  />
                </form>
              </div>
              <div className="list-item-support">
                <a href="payment-help" className="item-support-payment-help">
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">Payment help</span>
                  </div>
                </a>
                <a href="account-help" className="item-support-account-help">
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">Account help</span>
                  </div>
                </a>
                <a href="plan-help" className="item-support-plan-help">
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">Plan help</span>
                  </div>
                </a>
                <a href="app-help" className="item-support-app-help">
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">App help</span>
                  </div>
                </a>
                <a href="device-help" className="item-support-device-help">
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">Device help</span>
                  </div>
                </a>
                <a
                  href="safety-privacy"
                  className="item-support-safety-and-privacy"
                >
                  <div>
                    <img
                      src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
                      alt=""
                      className="img-support"
                    />
                    <span className="span-support">Safety & Privacy</span>
                  </div>
                </a>
              </div>
            </div>
          </Container>
          <div className="the-middle-support">
            <Container>
              <div className="quick-help-support">
                <h2 className="content-quick-help-support">Quick help</h2>
                <ul className="all-customer-support">
                  <li className="menu-customer-support">
                    <a href="" className="click-customer-support">
                      <span className="span-menu-customer-support">
                        Can't remember login details
                      </span>
                      <i className="fa-solid fa-caret-right icon-arrow-support"></i>
                    </a>
                  </li>
                  <li className="menu-customer-support">
                    <a href="" className="click-customer-support">
                      <span className="span-menu-customer-support">
                        Payment methods
                      </span>
                      <i className="fa-solid fa-caret-right icon-arrow-support"></i>
                    </a>
                  </li>
                  <li className="menu-customer-support">
                    <a href="" className="click-customer-support">
                      <span className="span-menu-customer-support">
                        Spotify's 2023 Wrapped FAQ
                      </span>
                      <i className="fa-solid fa-caret-right icon-arrow-support"></i>
                    </a>
                  </li>
                  <li className="menu-customer-support">
                    <a href="" className="click-customer-support">
                      <span className="span-menu-customer-support">
                        Can't reset password
                      </span>
                      <i className="fa-solid fa-caret-right icon-arrow-support"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
          <div className="go-to-communtity">
            <Container>
              <div className="visit-our-community">
                <h2 className="content-visit-our-community">
                  Visit our Communtity
                </h2>
                <p className="document-support">
                  Have questions? Find answers from our worldwide Community of
                  expert fans!
                </p>
                <button className="go-to-community-btn">Go to community</button>
              </div>
            </Container>
          </div>
        </div>
        <FooterDefauft isSupportPage={true} />
      </div>
    </>
  );
};

export default SupportPage;

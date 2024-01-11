import React from "react";
import "./PaymentHelp.scss";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";

const PaymentHelp = () => {
  return (
    <>
      <div className="main-payment-help">
        <div aria-hidden="true" className="highlight-payment-help"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-payment-help">
              <ul className="distance-home-payment-help">
                <li className="home-path-payment-help">
                  <a href="support-page">
                    <span className="home-btn">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-payment-help">Payment Help</h1>
              <div className="payment-help-buttons">
                <ul className="item-payment-help">
                  <li className="menu-payment-help">
                    <a href="" className="button-spacing">
                      Recommended topics
                    </a>
                  </li>
                  <li className="menu-payment-help">
                    <a href="" className="button-spacing">
                      Manage payments
                    </a>
                  </li>
                  <li className="menu-payment-help">
                    <a href="" className="button-spacing">
                      Payment methods
                    </a>
                  </li>
                  <li className="menu-payment-help">
                    <a href="" className="button-spacing">
                      Charge help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="sections-recommended-topics">
              <ul className="folders-of-recommended-topics">
                <li className="menu-in-payment">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-payment">
                      Price update
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-payment"></i>
                  </a>
                </li>
                <li className="menu-in-payment">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-payment">
                      Failed payment help
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-payment"></i>
                  </a>
                </li>
                <li className="menu-in-payment">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-payment">
                      Payment methods
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-payment"></i>
                  </a>
                </li>
                <li className="menu-in-payment">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-payment">
                      Update payment details
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-payment"></i>
                  </a>
                </li>
                <li className="menu-in-payment">
                  <a href="" className="item-of-payment">
                    <span className="each-sub-item-in-payment">
                      Cancel premium plans
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-payment"></i>
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

export default PaymentHelp;

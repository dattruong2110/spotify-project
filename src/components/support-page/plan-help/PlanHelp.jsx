import React from "react";
import HeaderAccount from "../../header/hearder-account/HeaderAccount";
import { Container } from "react-bootstrap";
import FooterDefauft from "../../footer/footer-defauft/FooterDefauft";
import "../plan-help/PlanHelp.scss";

const PlanHelp = () => {
  return (
    <>
      <div className="main-plan-help">
        <div aria-hidden="true" className="highlight-plan-help"></div>
        <div>
          <HeaderAccount />
        </div>
        <div>
          <Container>
            <div className="body-plan-help">
              <ul className="distance-home-plan-help">
                <li className="home-path-plan-help">
                  <a href="support-page">
                    <span className="home-btn-plan-help">Home</span>
                    <i className="fa-solid fa-caret-right icon-home-btn-plan-help"></i>
                  </a>
                </li>
              </ul>
              <h1 className="page-title-plan-help">Plan Help</h1>
              <div className="plan-help-buttons">
                <ul className="item-plan-help">
                  <li className="menu-plan-help">
                    <a href="" className="button-spacing-plan-help">
                      Avaible plans
                    </a>
                  </li>
                  <li className="menu-plan-help">
                    <a href="" className="button-spacing-plan-help">
                      Plan settings
                    </a>
                  </li>
                  <li className="menu-plan-help">
                    <a href="" className="button-spacing-plan-help">
                      Premium Student
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="suggested-topic-section-of-plan-help">
              <ul className="folders-of-recommended-topics-of-plan-help">
                <li className="menu-in-plan-help">
                  <a href="" className="item-of-plan-help">
                    <span className="each-sub-item-in-plan-help">
                      Premium plans
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-plan"></i>
                  </a>
                </li>
                <li className="menu-in-plan-help">
                  <a href="" className="item-of-plan-help">
                    <span className="each-sub-item-in-plan-help">
                      Premium Student
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-plan"></i>
                  </a>
                </li>
                <li className="menu-in-plan-help">
                  <a href="" className="item-of-plan-help">
                    <span className="each-sub-item-in-plan-help">
                      Premium Mini
                    </span>
                    <i className="fa-solid fa-caret-right icon-item-plan"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <FooterDefauft isSupportPage={true} />
      </div>
    </>
  );
};

export default PlanHelp;

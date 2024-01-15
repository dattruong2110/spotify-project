import React from "react";
import "./AccountManagePlan.scss";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const AccountManagePlan = () => {
  const handleGoBackPage = () => {
    window.history.back();
  };

  return (
    <>
      <HeaderAccount />
      <div className="container-account-manage-plan">
        <Button className="btn-back-page" onClick={handleGoBackPage}>
          <i class="fa-solid fa-chevron-left"></i>
        </Button>
        <h1 className="title-account-manage-plan">Manage your plans</h1>
        <nav className="navbar-container">
          <div className="title-spotify-account-manage-plan">
            <h2 className="title-navbar">Spotify Free</h2>
          </div>
          <div class="tab">
            <i
              id="library-icon"
              class="fa-solid fa-check icon-check-manage-plan"
            ></i>
            <p class="tab-title">1 account Free</p>
          </div>
          <div class="tab">
            <i
              id="library-icon"
              class="fa-solid fa-check icon-check-manage-plan"
            ></i>
            <p class="tab-title">Listen to music with ads</p>
          </div>
          <div class="tab">
            <i
              id="library-icon"
              class="fa-solid fa-check icon-check-manage-plan"
            ></i>
            <p class="tab-title">Listen online only</p>
          </div>
          <div class="tab">
            <i
              id="library-icon"
              class="fa-solid fa-check icon-check-manage-plan"
            ></i>
            <p class="tab-title">Play music randomly</p>
          </div>
          <div class="tab">
            <i
              id="library-icon"
              class="fa-solid fa-check icon-check-manage-plan"
            ></i>
            <p class="tab-title">Basic sound quality</p>
          </div>
          <NavLink to="#" className="btn-learn-more-plan">
            Learn more about your plan
          </NavLink>
          <hr />
          <h2 className="free">Free</h2>
        </nav>
        <Button className="btn-premium-account-manage-plan">
          <NavLink to="/premium-page">Use Premium</NavLink>
        </Button>
      </div>

      <FooterDefauft />
    </>
  );
};

export default AccountManagePlan;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../header-after-login/HeaderAfterLogin.scss";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderAfterLogin = () => {
  return (
    <>
      <header className="homepage-afterlogin">
        <div className="container-header-after-login">
          <div className="header-menu">
            <div class="prev-next-buttons d-flex">
              <div className="d-flex">
                <button type="button" class="fa fas fa-chevron-left"></button>
                <button type="button" class="fa fas fa-chevron-right"></button>
              </div>
            </div>

            <div className="header-menu-left-bar">
              <NavLink
                className="update-premium"
                title="Update to Premium"
                to="/premium-page"
              >
                Discover Premium
              </NavLink>
              <NavLink to="/download-page">Download App</NavLink>
              <NavLink to="">
                <i title="new information" class="fa-regular fa-bell"></i>
              </NavLink>
            </div>
            <div className="header-menu-separator"></div>
            <div className="header-menu-right-bar">
              <div className="container-account">
                <Dropdown>
                  <Dropdown.Toggle className="account" variant="success">
                    <span className="account__img">
                      <img
                        src="https://i.scdn.co/image/ab67757000003b828cc8b4e3dfdcc631e85a642f"
                        alt="image-account"
                      />
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                      className="dropdown-item"
                      href="/account-manage"
                    >
                      Account
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="/">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href="/premium-page"
                    >
                      Upgrade to premium
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="/">
                      Support
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item"
                      href="/download-page"
                    >
                      Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="/">
                      Setting
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="/login">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderAfterLogin;

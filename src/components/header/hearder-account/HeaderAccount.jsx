/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUser } from "../../../features/authSlice";
import "../hearder-account/HeaderAccount.scss";

const HeaderAccount = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setUser(null));

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      <header>
        <div className="container-header-account">
          <div className="logo-spotify">
            <NavLink to="/home-page">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                alt="Logo"
              />
            </NavLink>
          </div>
          <div className="header-menu">
            <div className="header-menu-left-bar">
              <NavLink to="/premium-page">Premium</NavLink>
              <NavLink to="#">Support</NavLink>
              <NavLink to="/download-page">Download</NavLink>
            </div>
            <div className="header-menu-separator"></div>
            <div className="header-menu-right-bar">
              <div className="container-account">
                <Dropdown>
                  <Dropdown.Toggle
                    className="account"
                    variant="success"
                    id="dropdown-basic"
                  >
                    <span className="account__img">
                      <img
                        src="https://i.scdn.co/image/ab67757000003b828cc8b4e3dfdcc631e85a642f"
                        alt="image-account"
                      />
                    </span>
                    Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/account-manage">
                      Account
                    </Dropdown.Item>
                    <Dropdown.Item href="/home-page" onClick={handleLogout}>
                      Log Out
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

export default HeaderAccount;

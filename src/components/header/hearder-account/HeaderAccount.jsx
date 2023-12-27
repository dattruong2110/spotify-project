/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsAuthenticated, setUser } from "../../../features/authSlice";
import "../hearder-account/HeaderAccount.scss";

const HeaderAccount = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const HeaderAccount = ({ isPlaylistPage, showPlayButton }) => {
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
          <div
            className={`container-header-account ${
              isPlaylistPage ? "header-bar-account-playlist" : ""
            }`}
          >
            <div className="logo-spotify d-flex">
              <div className="d-flex">
                <NavLink to="/home-page">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                    alt="Logo"
                  />
                </NavLink>
              </div>
              {showPlayButton && (
                <div className="d-flex">
                  <Button className="play-btn">
                    <i className="fa fa-play"></i>
                  </Button>
                  <span className="header-playlist-title">lofi beats</span>
                </div>
              )}
            </div>
            {isAuthenticated ? (
              <div className="header-menu">
                <div className="header-menu-left-bar">
                  <NavLink to="/premium-page">Premium</NavLink>
                  <NavLink to="/support-page">Support</NavLink>
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
            ) : (
              <div className="header-menu">
                <div className="header-menu-left-bar">
                  <NavLink to="/premium-page">Premium</NavLink>
                  <NavLink to="/support-page">Support</NavLink>
                  <NavLink to="/download-page">Download</NavLink>
                </div>
                <div className="header-menu-separator"></div>
                <div className="header-menu-right-bar">
                  <NavLink to="/sigup" className="transparent-button">
                    Sign up
                  </NavLink>
                  <NavLink to="/login" className="transparent-button">
                    Log in
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </header>
      </>
    );
  };
};
export default HeaderAccount;

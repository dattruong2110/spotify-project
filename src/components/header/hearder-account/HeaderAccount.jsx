/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../../../configs/firebaseConfig";
import {
  clearUser,
  selectIsAuthenticated,
  selectUser,
  setUser,
} from "../../../features/authSlice";
import "../hearder-account/HeaderAccount.scss";

const HeaderAccount = ({ isPlaylistPage, showPlayButton }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(clearUser());
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <header>
        <div
          className={`container-header-account`}
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
                        {user && user.photoURL && (
                          <img src={user.photoURL} alt="image-account" />
                        )}
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

export default HeaderAccount;

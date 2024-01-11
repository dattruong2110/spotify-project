/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import "../header-after-login/HeaderAfterLogin.scss";
import { Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectUser, setUser } from "../../../features/authSlice";
import { auth } from "../../../configs/firebaseConfig";

const HeaderAfterLogin = ({ isPlaylistPage, showPlayButton, name }) => {
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
      <header className="homepage-afterlogin">
        <div
          className={`container-header-after-login ${
            isPlaylistPage ? "header-bar-after-login-playlist" : ""
          }`}
        >
          <div className="header-menu d-flex justify-content-between align-items-center">
            <div class="prev-next-buttons d-flex align-items-center">
              <div className="d-flex">
                <button type="button" class="fa fas fa-chevron-left"></button>
                <button type="button" class="fa fas fa-chevron-right"></button>
              </div>
              {showPlayButton && (
                <div className="d-flex">
                  <Button className="play-btn">
                    <i className="fa fa-play"></i>
                  </Button>
                  <span className="header-playlist-title">{name}</span>
                </div>
              )}
            </div>

            <div className="d-flex align-items-center">
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
                        {user && user.photoURL && (
                          <img src={user.photoURL} alt="image-account" />
                        )}
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
                      <Dropdown.Item
                        className="dropdown-item"
                        href="/support-page"
                      >
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
                      <Dropdown.Item
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderAfterLogin;

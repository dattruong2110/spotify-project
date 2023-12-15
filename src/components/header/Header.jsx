import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div class="topbar">
          <div class="prev-next-buttons">
            <button type="button" class="fa fas fa-chevron-left"></button>
            <button type="button" class="fa fas fa-chevron-right"></button>
          </div>
          <div class="navbar">
            <ul>
              <li>
              <a href="/premium" onClick={() => navigate("/premium")}>Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li class="divider">|</li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
            <button type="button" onClick={() => navigate("/login")}>
              Log In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

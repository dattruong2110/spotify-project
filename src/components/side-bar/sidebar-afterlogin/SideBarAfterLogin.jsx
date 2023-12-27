/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SideBarAfterLogin.scss";
import { NavLink } from "react-router-dom";

const SideBarAfterLogin = () => {
  return (
    <>
      <div className="sidebar-after-login">
        <div class="navigation-1">
          <ul>
            <li>
              <NavLink to="/home-page-after-login">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="navigation-2">
          <ul>
            <li>
              <NavLink to="#">
                <span class="fa fas fa-book"></span>
                <span>Your Library</span>
              </NavLink>
              <a>
                <i class="fa-solid fa-plus plus-your-library"></i>
              </a>
              <a>
                <i class="fa-solid fa-arrow-right arrow-your-library"></i>
              </a>
            </li>

            <li>
              <NavLink to="#">
                <span class="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </NavLink>
            </li>
          </ul>

          <div class="like-artists">
            <a to="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://yt3.googleusercontent.com/BFZVpnsYdUinXATWqFv_TehfKUw_uVila1n_bLh02PJnmvf0lNiCAldtoeqvD2uiFx6hUWof=s900-c-k-c0x00ffffff-no-rj"
                  alt="image-artist"
                />
              </span>
              <span class="like-artist__name">RPT MCK</span>
            </a>

            <a to="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/08/01/b/e/a/1/1659321743301_600.jpg"
                  alt="image-artist"
                />
              </span>
              <span class="like-artist__name">GREY D</span>
            </a>

            <a to="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://thanhnien.mediacdn.vn/Uploaded/hienth/2022_07_27/plt52-6046.jpg"
                  alt="image-artist"
                />
              </span>
              <span class="like-artist__name">Hoàng Dũng</span>
            </a>

            <a to="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/73/fa/67/73fa6781-9cff-8b68-015e-4b380a17f1c2/mzl.pthgqmln.jpg/375x375bb.jpg"
                  alt="image-artist"
                />
              </span>
              <span class="like-artist__name">JustaTee</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarAfterLogin;

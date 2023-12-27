/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import "../account-manage/AccountManage.scss";
import { NavLink } from "react-router-dom";

const AccountManage = () => {
  return (
    <>
      <HeaderAccount />
      <div className="container-account-content">
        <div className="premium-in-page-account">
          <img
            src="https://wap.spotifycdn.com/fa/_next/static/media/spotify-promo-campaign-logo.619b92d5.jpg"
            alt="image-premium"
          />
          <div className="premium-page-account-content">
            <span>59,000₫ cho 3 tháng dùng gói Premium</span>
            <h2>
              Tận hưởng trải nghiệm nghe nhạc không quảng cáo, không cần kết nối
              mạng và nhiều lợi ích khác. Hủy bất cứ lúc nào.
            </h2>
            <p>
              Chỉ áp dụng cho gói Individual. Sau đó là 59,000₫/tháng. Có áp
              dụng các điều khoản và điều kiện. Ưu đãi không dành cho người đã
              dùng thử gói Premium. Ưu đãi kết thúc vào ngày 2023-12-31.
            </p>
            <NavLink to="/premium-page">Dùng 3 Tháng Với Giá 59,000đ</NavLink>
          </div>
        </div>

        <nav className="navbar-container">
          <h2 className="title-navbar">Account</h2>
          <div class="tab">
            <i id="library-icon" class="fa-brands fa-spotify"></i>
            <p class="tab-title">
              <NavLink to="/account-manage-plan">Manage your packages</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-pen"></i>
            <p class="tab-title">
              <NavLink to="/account-manage-edit">Edit profile</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-arrow-rotate-left"></i>
            <p class="tab-title">
              <NavLink to="/">Restore playlist</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
        </nav>
        <nav className="navbar-container">
          <h2 className="title-navbar">Pay</h2>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-book"></i>
            <p class="tab-title">
              <NavLink to="/">Order history</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-regular fa-credit-card"></i>
            <p class="tab-title">
              <NavLink to="/">Saved payment card</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-tag"></i>
            <p class="tab-title">
              <NavLink to="/">Change</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
        </nav>
        <nav className="navbar-container">
          <h2 className="title-navbar">Security and privacy</h2>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-unlock-keyhole"></i>
            <p class="tab-title">
              <NavLink to="/">Change password</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-tablet-button"></i>
            <p class="tab-title">
              <NavLink to="/">Manage app</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-bell"></i>
            <p class="tab-title">
              <NavLink to="/">Setting notification</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-eye"></i>
            <p class="tab-title">
              <NavLink to="/">Setting privacy</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-list-ul"></i>
            <p class="tab-title">
              <NavLink to="/">Setting method login</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
          <div class="tab">
            <i id="library-icon" class="fa-solid fa-arrow-right"></i>
            <p class="tab-title">
              <NavLink to="/">Logout everywhere</NavLink>
            </p>
            <i id="arrow-icon" class="fas fa-chevron-right"></i>
          </div>
        </nav>
      </div>
      <FooterDefauft />
    </>
  );
};

export default AccountManage;

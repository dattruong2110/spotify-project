import React from "react";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import { Button } from "react-bootstrap";
import "../account-manage-privacy-page/AccountPrivacy.scss";

const AccountPrivacy = () => {
  const handleGoBackPage = () => {
    window.history.back();
  };

  return (
    <>
      <HeaderAccount />
      <div className="container-account-manage-privacy">
        <Button className="btn-back-page" onClick={handleGoBackPage}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <h1 className="title-account-privacy">Security settings</h1>
        <div className="account-manage-privacy-content">
          <p className="document-privacy">
            Chúng tôi muốn giúp bạn dễ dàng quản lý và hiểu rõ Cài đặt bảo mật
            để có thể sử dụng dịch vụ Spotify theo cách bạn muốn.
          </p>
          <p className="document-privacy">
            Các biện pháp quản lý trên trang này cho phép bạn:{" "}
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle"></i>Quản lý các quảng cáo dành
              riêng mà bạn xem và nghe trên Spotify.
            </li>
            <li>
              <i class="fa-regular fa-circle"></i>Quản lý các dữ liệu Facebook
              mà Spotify xử lý về bạn.
            </li>
            <li>
              <i class="fa-regular fa-circle"></i> xuống sao dữ liệu cá nhân
              trên Spotify của bạn.
            </li>
          </ul>
        </div>
      </div>
      <FooterDefauft />
    </>
  );
};

export default AccountPrivacy;

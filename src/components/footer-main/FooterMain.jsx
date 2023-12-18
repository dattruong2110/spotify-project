import React from "react";
import "./FooterMain.scss";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <>
      <div className="footer-top-section d-flex justify-content-between">
        <div className="footer-info-about-us d-flex">
          <div className="footer-link-group">
            <ul className="footer-link-group-list">
              <p className="footer-link-title">Company</p>
              <Link className="footer-info-link">
                <span>About</span>
              </Link>
              <Link className="footer-info-link">
                <span>Jobs</span>
              </Link>
              <Link className="footer-info-link">
                <span>For the Record</span>
              </Link>
            </ul>
          </div>
          <div className="footer-link-group">
            <ul className="footer-link-group-list">
              <p className="footer-link-title">Communities</p>
              <Link className="footer-info-link">
                <span>For Artists</span>
              </Link>
              <Link className="footer-info-link">
                <span>Developers</span>
              </Link>
              <Link className="footer-info-link">
                <span>Advertising</span>
              </Link>
              <Link className="footer-info-link">
                <span>Investors</span>
              </Link>
              <Link className="footer-info-link">
                <span>Vendors</span>
              </Link>
            </ul>
          </div>
          <div className="footer-link-group">
            <ul className="footer-link-group-list">
              <p className="footer-link-title">Useful links</p>
              <Link className="footer-info-link">
                <span>Support</span>
              </Link>
              <Link className="footer-info-link">
                <span>Free Mobile App</span>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-info-social">
          <Link className="social-link">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link className="social-link">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link className="social-link">
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-section">
        <p className="copyright">&copy; 2023 Spotify Project</p>
      </div>
    </>
  );
};

export default FooterMain;

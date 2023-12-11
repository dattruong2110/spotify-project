import React from "react";
import "./FooterPreview.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="preview">
        <div class="text">
          <h6>Preview of Spotify</h6>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <div class="button">
          <button type="button">Sign up free</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

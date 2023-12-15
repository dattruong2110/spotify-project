import React from "react";
import "./FooterPreview.scss";
import { useNavigate } from "react-router-dom";

const FooterPreview = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="footer">
        <div class="preview">
          <div class="text">
            <h6>Preview of Spotify</h6>
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </p>
          </div>
          <div class="button">
            <button type="button" onClick={() => navigate("/signup")}>
              Sign up free
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPreview;

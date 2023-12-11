import React from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <body>
        <header>
          <div class="container">
            <a class="header-logo" href="/">
              <svg
                viewBox="0 0 63 20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMin meet"
              >
                <g fill-rule="evenodd" class="svelte-1gcdbl9">
                  <path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"></path>
                </g>
              </svg>
            </a>
            <div class="header-menu">
              <div class="header-menu-left-bar">
                <a href="#">Premium</a>
                <a href="#">Support</a>
                <a href="#">Download</a>
              </div>
              <div class="header-menu-separator"></div>
              <div class="header-menu-right-bar">
                <a href="#">Sign up</a>
                <button href="#">Log in</button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div class="container">
            <div>
              <h1>Listening is everything</h1>
            </div>

            <p>Millions of songs and podcasts. No credit card needed.</p>

            <a href="homepage">Get Spotify Free</a>
          </div>
        </main>

        <footer>
          <div class="container">
            <div class="footer-menu-top-bar">
              <a class="footer-menu-top-bar-logo" href="">
                <svg
                  viewBox="0 0 63 20"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMin meet"
                >
                  <g fill-rule="evenodd" class="svelte-1gcdbl9">
                    <path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"></path>
                  </g>
                </svg>
              </a>

              <div class="footer-menu-top-bar-links">
                <div class="footer-menu-top-bar-links-company">
                  <div>Company</div>

                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Jobs</a>
                    </li>
                    <li>
                      <a href="">For the Record</a>
                    </li>
                  </ul>
                </div>

                <div class="footer-menu-top-bar-links-communities">
                  <div>Communities</div>

                  <ul>
                    <li>
                      <a href="">For Artists</a>
                    </li>
                    <li>
                      <a href="">Developers</a>
                    </li>
                    <li>
                      <a href="">Advertising</a>
                    </li>
                    <li>
                      <a href="">Investors</a>
                    </li>
                    <li>
                      <a href="">Vendors</a>
                    </li>
                  </ul>
                </div>

                <div class="footer-menu-top-bar-links-useful-links">
                  <div>Useful Links</div>

                  <ul>
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Web Player</a>
                    </li>
                    <li>
                      <a href="">Free Mobile App</a>
                    </li>
                    <li>
                      <a href="">Car Thing</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="footer-menu-top-bar-socials">
                <div class="footer-menu-top-bar-socials-instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>

                <div class="footer-menu-top-bar-socials-twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>

                <div class="footer-menu-top-bar-socials-facebook">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="footer-menu-bottom-bar">
              <div class="footer-menu-bottom-bar-links">
                <ul>
                  <li>
                    <a href="">Legal</a>
                  </li>
                  <li>
                    <a href="">Privacy Center</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Cookies</a>
                  </li>
                  <li>
                    <a href="">About Ads</a>
                  </li>
                  <li>
                    <a href="">Additional CA Privacy Disclosures</a>
                  </li>
                </ul>
              </div>

              <div class="footer-menu-bottom-bar-informations">
                <div class="footer-menu-bottom-bar-informations-top">
                  <a href="">
                    <svg
                      viewBox="0 0 12 13"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      class="svelte-184rsfv"
                    >
                      <path
                        d="M6 0.624023C8.07255 0.624023 9.90309 1.68041 10.9815 3.28299C10.9819 3.28367 10.9822 3.28403 10.9825 3.28438C11.0029 3.30998 11.0209 3.33677 11.0363 3.36446C11.6453 4.30352 12 5.42315 12 6.62402C12 9.92265 9.32436 12.6079 6.02962 12.624C6.02732 12.6241 6.02495 12.6241 6.02258 12.6241L6 12.624C2.69149 12.624 0 9.93253 0 6.62402C0 3.31571 2.69149 0.624023 6 0.624023ZM6 1.78528C5.80411 1.78528 5.61089 1.79698 5.42102 1.81972C5.39755 1.91375 5.34896 2.0023 5.2765 2.07641L3.75157 3.63714C3.64024 3.75103 3.48978 3.812 3.33616 3.812C3.26752 3.812 3.19848 3.7998 3.1318 3.77483C2.91623 3.69359 2.76891 3.49277 2.75652 3.26265L2.74444 3.04725C1.77228 3.93289 1.16125 5.20844 1.16125 6.62402C1.16125 6.90513 1.18535 7.1807 1.23158 7.44881L2.11909 8.18538C2.12814 8.19266 2.13699 8.20053 2.14564 8.20859L2.91981 8.93437C2.99003 9.00007 3.04274 9.08228 3.07323 9.17374L3.37633 10.0793L3.83343 10.3016H4.86133C5.01514 10.3016 5.16285 10.3625 5.27182 10.4715L6.25621 11.4561C8.80567 11.3224 10.8387 9.20617 10.8387 6.62402C10.8387 5.8726 10.6666 5.16063 10.3596 4.52549L9.45716 5.24616L9.62455 5.6122C9.65956 5.68812 9.67726 5.77053 9.67726 5.85393V6.60784C9.67726 6.78014 9.60075 6.94358 9.46857 7.05393C9.3362 7.16407 9.16154 7.2103 8.99219 7.17902L8.05556 7.00751L8.52643 8.28855C8.58347 8.44354 8.57167 8.61544 8.49417 8.76139L7.67162 10.3097C7.58211 10.4783 7.41628 10.5907 7.22969 10.6136L7.15866 10.6179C6.94387 10.6179 6.74659 10.4991 6.64589 10.3093L6.25231 9.56742C6.24563 9.55444 6.23913 9.54126 6.23323 9.52788L5.91027 8.78833L5.5222 8.25412L4.15443 8.44118C4.0551 8.45475 3.9538 8.44255 3.86057 8.40518L2.68811 7.93765C2.46526 7.84855 2.3201 7.632 2.32244 7.39204L2.33879 5.84783C2.34095 5.65035 2.44304 5.46763 2.61022 5.3624L4.57554 4.12641C4.81058 3.97869 5.11781 4.01783 5.30801 4.22062L5.95905 4.91395L6.7818 5.23062L7.05303 5.13365L5.90181 3.48933C5.77849 3.3131 5.76256 3.08317 5.86051 2.89179L6.41732 1.80311C6.27976 1.7913 6.14057 1.78528 6 1.78528Z"
                        fill="#8F8F8F"
                      ></path>
                    </svg>
                    VIETNAM
                  </a>
                </div>

                <div class="footer-menu-bottom-bar-informations-bottom">
                  © 2023 Spotify Project
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default LandingPage;

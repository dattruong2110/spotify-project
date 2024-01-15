import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navigationBarPremium.scss"
import { Dropdown } from 'react-bootstrap';
function navigationBarPremium() {
  return (
    <>
    <div className="banner">
        <nav class="navbar navbar-expand-lg navbar-dark 250px bg-dark container-fluid">
          <div class="logo">
            <a href="/#">
              <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
              alt="Logo" width={130}/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse container" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/premium-page">Premium</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Support</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Download</a>
              </li>
              <li class="nav-item">
                <p className="vertical-bar">|</p>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                <img src="https://scontent.ftrz1-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=810bd0&_nc_ohc=CBL2599yVccAX-DrBTl&_nc_ht=scontent.ftrz1-1.fna&edm=AP4hL3IEAAAA&oh=00_AfBmbP_9XRY7Ph8geF5bZwDj_PViw0ltFgdDQKdodYheCQ&oe=65A1E499" alt="" />
                </a>
              </li>
              <li class="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="dropDownList">
                      <Dropdown.Item id="1" href="#">Account</Dropdown.Item>
                      <Dropdown.Item id="2" href="#">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    
    
    </>
  )
}

export default navigationBarPremium;
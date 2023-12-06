import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";
import SideBar from "../side-bar/SideBar";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container fluid className="spotifyWebApp d-grid">
      <Row className="topRow">
        <Col md={2} lg={2} className="sideBarCol">
          <SideBar />
        </Col>
        <Col md={10} lg={10}>
          <div className="mainSection">
            <header className="mainSectionHeader d-flex justify-content-between">
              <div className="mainHeaderLeft">
                <Button className="mainHeaderBtn">
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
                <Button className="mainHeaderBtn">
                  <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
              <div className="mainHeaderRight d-flex align-items-center">
                <Button variant="btn outline-light btnHeaderDark">
                  Premium
                </Button>
                <Button variant="btn outline-light btnHeaderDark">
                  Support
                </Button>
                <Button variant="btn outline-light btnHeaderDark">
                  Download
                </Button>
                <div className="verticalLine"></div>
                <div>
                  <Button variant="btn outline-light btnHeaderDark">
                    Sign up
                  </Button>
                  <Button variant="btn btn-light btnLogin">Log in</Button>
                </div>
              </div>
            </header>
            <main className="mainContent">
              <header className="mainContentHeader d-flex justify-content-between align-items-center">
                <h4>
                  <Link className="mainContentHeaderLink mainContentHeaderLeftLink">
                    Spotify Playlists
                  </Link>
                </h4>
                <Link className="mainContentHeaderLink mainContentHeaderRightLink">
                  Show all
                </Link>
              </header>
              <main className="homePage">
                <Row>
                  <Col md={2} lg={2}>
                    <Card className="homePageCard">
                      <Card.Img
                        variant="top"
                        src="https://i.scdn.co/image/ab67706f0000000274fff2139c75c7083370e10c"
                        className="homePageCardImg"
                      />
                      <Card.Body className="homePageCardBody">
                        <Card.Title className="homePageCardTitle">
                          chill lofi study beats
                        </Card.Title>
                        <Card.Text className="homePageCardDescription">
                          The perfect study beats. Find your focus, crush your
                          productivity.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </main>
              <footer className="homePageFooter">
                <div className="footerTopSection d-flex justify-content-between">
                  <div className="footerInforAboutUs d-flex">
                    <div className="footerLinkGroup">
                      <ul className="footerLinkGroupList">
                        <p className="footerLinkTitle">Company</p>
                        <Link className="footerInforLink">
                          <span>About</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Jobs</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>For the Record</span>
                        </Link>
                      </ul>
                    </div>
                    <div className="footerLinkGroup">
                      <ul className="footerLinkGroupList">
                        <p className="footerLinkTitle">Communities</p>
                        <Link className="footerInforLink">
                          <span>For Artists</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Developers</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Advertising</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Investors</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Vendors</span>
                        </Link>
                      </ul>
                    </div>
                    <div className="footerLinkGroup">
                      <ul className="footerLinkGroupList">
                        <p className="footerLinkTitle">Useful links</p>
                        <Link className="footerInforLink">
                          <span>Support</span>
                        </Link>
                        <Link className="footerInforLink">
                          <span>Free Mobile App</span>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="footerInforSocial">
                    <Link className="socialLink">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link className="socialLink">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link className="socialLink">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="footerBottomSection">
                  <p className="copyRight">&copy; 2023 Spotify AB</p>
                </div>
              </footer>
            </main>
          </div>
        </Col>
      </Row>
      <Row className="botRow">
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

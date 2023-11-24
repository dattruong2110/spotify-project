import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="spotifyWebApp">
      <Fragment>
        <Row className="topRow">
          <Col md={2} className="sideBarCol">
            <nav className="sideBar">sideBar</nav>
          </Col>
          <Col md={10}>
            <div className="main">main</div>
          </Col>
        </Row>
        <Row className="botRow">
          <Col md={12}>
            <footer className="footer">footer</footer>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Link className="footerLink">
          <Container
            fluid
            className="d-flex justify-content-between align-items-center"
          >
            <Col md={11} className="footerLeft">
              <span className="footerLeftHeader">Preview of Spotify</span>
              <br />
              <span className="footerLeftContent">
                Sign up to get unlimited songs and podcasts with occasional ads.
                No credit card needed.
              </span>
            </Col>
            <Col md={1}>
              <Button variant="light" className="footerSignUpBtn">Sign up free</Button>
            </Col>
          </Container>
        </Link>
      </Row>
    </footer>
  );
};

export default Footer;

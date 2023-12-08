import React from "react";
import "./SearchPage.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import SideBar from "../side-bar/SideBar";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const SearchPage = () => {
  return (
    <Container fluid className="spotifyWepapp d-grid">
      <Row className="topRow">
        <Col md={2} lg={2} className="sideBarCol">
          <SideBar />
        </Col>
        <Col md={10} lg={10}>
          <div className="search">
            <header className="searchHeader d-flex justify-content-between">
              <div className="mainHeaderLeft">
                <Button className="searchHeaderBtn">
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
                <Button className="searchHeaderBtn">
                  <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
              <div className="searchBtn d-flex justifify-content-between">
                <form >
                
                </form>
              </div>
            </header>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

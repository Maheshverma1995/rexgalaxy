import React from "react";
import "../../App.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from "react-bootstrap";

const HeaderNavBar = () => {
  return (
    <div>
      <Container fluid>
        <Navbar className="bg-success text-color-white header-navbar" >
          <Row className="hed-nav-bar" >

            <Col lg={2} md={6} sm={3} ><Navbar.Brand href="#home" className="me-4">
              +91-7411211148
            </Navbar.Brand></Col>
            <Col lg={2} md={6} sm={3} >
              <label >contact@rexgalaxy.com</label>
            </Col>
            <Col lg={2} md={6} sm={3} ><label >A 40, Ithum Noida 62</label></Col>
            <Col md="auto" >
              <FaFacebook className="m-3" />
              <FaTwitter className="m-3" />
              <FaLinkedinIn className="m-3" />
              <FaInstagram className="m-3" />

            </Col>
          </Row>

        </Navbar>

      </Container>
    </div>
  );
};

export default HeaderNavBar;

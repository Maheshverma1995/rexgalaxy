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
        <Row>
          
            
              <Col xs md="auto" >
                <Navbar.Brand href="#home" className="me-4">
                  +91-7411211148
                </Navbar.Brand>
              </Col>
              <Col xs md="auto"> <label className="me-2">contact@rexgalaxy.com</label></Col>
              <Col xs md="auto">A 40, Ithum Noida 62</Col>
              <Col md="auto" className="me-0">
               
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

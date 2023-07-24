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
const HeaderNavBar = () => {
  return (
    <div>
      <Navbar className="bg-success text-color-white header-navbar">
        <Container>
          <Navbar.Brand href="#home">+91-7411211148</Navbar.Brand>
          <label className="me-5 " htmlFor="">
            contact@rexgalaxy.com
          </label>
          <label htmlFor="">A 40, Ithum Noida 62</label>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="m-1">
              <FaFacebook className="m-3"/>
              <FaTwitter className="m-3"/>
              <FaLinkedinIn className="m-3"/>
              <FaInstagram className="m-3"/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavBar;

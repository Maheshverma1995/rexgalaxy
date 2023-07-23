import React from 'react'
import '../../App.css'
import { FaFacebook ,FaTwitter ,FaLinkedinIn,FaDribbble,FaInstagram } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const HeaderNavBar = () => {
  return (
    <div>
      <Navbar className="bg-body-dark header-navbar">
      <Container>
        <Navbar.Brand href="#home">+91-7411211148 
        </Navbar.Brand>
        <label htmlFor="">contact@rexgalaxy.com</label>
        <label htmlFor="">A 40, Ithum Noida 62</label>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FaFacebook/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaDribbble/>
            <FaInstagram/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderNavBar

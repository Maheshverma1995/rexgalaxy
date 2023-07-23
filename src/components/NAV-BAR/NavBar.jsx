import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  const expand = 'lg'; // You can change the value as needed

  return (
    <div>
      <Navbar expand={expand} className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#"><img src="./Image/logo.png" alt="no_img"  style={{width:'200px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="about">ABOUT</Nav.Link>
                <Nav.Link href="contact">CONTACT</Nav.Link>
                <Nav.Link href="it-trainning">IT TRAINING</Nav.Link>
                <Nav.Link href="service">SERVICES</Nav.Link>
                <Nav.Link href="python">PYTHON</Nav.Link>
                <Nav.Link href="softwere-testing">SOFTWARE TESTING</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
           {/* Button placed outside the Offcanvas */}
      <Button className="ms-0" variant="outline-success">
        Search
      </Button>
        </Container>
      </Navbar>
     
    </div>
  );
}

export default NavBar;

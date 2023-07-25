import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  const expand = 'lg'; // You can change the value as needed

  // State variables to track the hover state of IT TRAINING Dropdown and its submenus
  const [showITTraining, setShowITTraining] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showInstructors, setShowInstructors] = useState(false);

  return (
    <div>
      <Navbar expand={expand} className="bg-body-tertiary mb-3">
        <Container>
          {/* Rest of the code */}

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
                <Dropdown 
                  as={Nav.Item}
                  onMouseEnter={() => setShowITTraining(true)}
                  onMouseLeave={() => {
                    setShowITTraining(false);
                    setShowCourses(false);
                    setShowSchedule(false);
                    setShowInstructors(false);
                  }}
                >
                  <Dropdown.Toggle as={Nav.Link} id="it-training-dropdown">
                    IT TRAINING
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className={`mega-menu ${showITTraining ? 'show' : ''}`}
                    onMouseEnter={() => setShowITTraining(true)}
                    onMouseLeave={() => setShowITTraining(false)}
                  >
                    <Container>
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Courses</h5>
                          <ul
                            className={`mega-submenu ${showCourses ? 'show' : ''}`}
                            onMouseEnter={() => setShowCourses(true)}
                            onMouseLeave={() => setShowCourses(false)}
                          >
                            <li>
                              <Nav.Link href="/it-training/courses">Course 1</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/courses">Course 2</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/courses">Course 3</Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5>Schedule</h5>
                          <ul
                            className={`mega-submenu ${showSchedule ? 'show' : ''}`}
                            onMouseEnter={() => setShowSchedule(true)}
                            onMouseLeave={() => setShowSchedule(false)}
                          >
                            <li>
                              <Nav.Link href="/it-training/schedule">Schedule 1</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/schedule">Schedule 2</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/schedule">Schedule 3</Nav.Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5>Instructors</h5>
                          <ul
                            className={`mega-submenu ${showInstructors ? 'show' : ''}`}
                            onMouseEnter={() => setShowInstructors(true)}
                            onMouseLeave={() => setShowInstructors(false)}
                          >
                            <li>
                              <Nav.Link href="/it-training/instructors">Instructor 1</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/instructors">Instructor 2</Nav.Link>
                            </li>
                            <li>
                              <Nav.Link href="/it-training/instructors">Instructor 3</Nav.Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Container>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="service">SERVICES</Nav.Link>
                <Nav.Link href="python">PYTHON</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* Rest of the code */}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

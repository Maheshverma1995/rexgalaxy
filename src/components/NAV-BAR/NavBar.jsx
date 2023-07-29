import React, { useState } from 'react';
import './Nav_Bar.css'
import { FaSearch } from "react-icons/fa";
import { Container, Nav, Navbar, Offcanvas, Dropdown, Row } from 'react-bootstrap';

function NavBar() {
  const expand = 'lg'; // You can change the value as needed

  // State variables to track the hover state of IT TRAINING Dropdown and its submenus
  const [showITTraining, setShowITTraining] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showInstructors, setShowInstructors] = useState(false);

  // Function to handle the toggle menu bar for smaller screens
  const handleToggleMenu = () => {
    setShowITTraining(false);
    setShowCourses(false);
    setShowSchedule(false);
    setShowInstructors(false);
  };

  return (
    <div>
      <Navbar expand={expand} className="bg-body-tertiary mb-3">
        <Container className='Toggle'>
          {<Row><img className='logoimage' src="../../Image/logo.png" style={{width:'180px'}} alt="" /></Row>}
          <Navbar.Toggle aria-controls={`navbarNav-${expand}`} />
          <Navbar.Offcanvas 
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src="../../Image/logo.png" style={{width:'200px'}}  alt="" Col={6}/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" onClick={handleToggleMenu}>
                  HOME
                </Nav.Link>
                <Nav.Link href="/about" onClick={handleToggleMenu}>
                  ABOUT
                </Nav.Link>
                <Nav.Link href="/contact" onClick={handleToggleMenu}>
                  CONTACT
                </Nav.Link>
                <Nav.Link href="/softwereTesting" onClick={handleToggleMenu}>
                SOFTWERE-TESTING
                       </Nav.Link>
                
                <Dropdown
                  as={Nav.Item}
                  onMouseOver={() => setShowITTraining(true)}
                  onMouseOut={() => {
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
                    onMouseOver={() => setShowITTraining(true)}
                    onMouseOut={() => setShowITTraining(false)}
                  >
                    <Container>
                      <Navbar expand={expand} className="bg-body-tertiary mb-3">
                        <div className="row"id='row'>
                          <div className=" col-12 col-lg-6">
                            <h5>Courses</h5>
                            <ul
                              className={`mega-submenu ${showCourses ? 'show' : ''}`}
                              onMouseOver={() => setShowCourses(true)}
                              onMouseOut={() => setShowCourses(false)}
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
                          <div className=" col-12 col-lg-6">
                            <h5>Schedule</h5>
                            <ul
                              className={`mega-submenu ${showSchedule ? 'show' : ''}`}
                              onMouseOver={() => setShowSchedule(true)}
                              onMouseOut={() => setShowSchedule(false)}
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
                          <div className=" col-12 col-lg-6">
                            <h5>Instructors</h5>
                            <ul
                              className={`mega-submenu ${showInstructors ? 'show' : ''}`}
                              onMouseOver={() => setShowInstructors(true)}
                              onMouseOut={() => setShowInstructors(false)}
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
                      </Navbar>
                    </Container>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="/service" onClick={handleToggleMenu}>
                  SERVICES
                </Nav.Link>
                <Nav.Link href="/python" onClick={handleToggleMenu}>
                  PYTHON
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <button  className='serach-button'><FaSearch/></button>
        </Container>
        
      </Navbar>

    </div>
  );
}

export default NavBar;

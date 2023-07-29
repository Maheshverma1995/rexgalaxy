import React from 'react'
import { FaRecycle,FaClock,FaDesktop,FaPencilRuler } from "react-icons/fa";
import { Container, Row,Col } from 'react-bootstrap'

const BestPractices = () => {
  return (
    <Container className='BestPractices'>
    <Row>
        <Col >
            <div><h1>We Follow Best Practices</h1></div>
        </Col>
    </Row>
    <Row>
        <Col >
            <div>
                <p>Partner with us for all your software testing needs and let us be your trusted quality assurance partner. We are committed to delivering reliable, high-quality results that exceed your expectations.</p>
            </div>
        </Col>
    </Row>
    <Row>
        <Col className='BestPractices-icon' >
            <div><span><FaRecycle/></span><p>Sustainablility</p></div>
            <div><span><FaClock/></span><p>Project On Time</p></div>
            <div><span><FaDesktop/></span><p>Modern Technology</p></div>
            <div><span><FaPencilRuler/></span><p>Latest Solutions</p></div>
        </Col>
    </Row>
   
</Container>
  )
}

export default BestPractices

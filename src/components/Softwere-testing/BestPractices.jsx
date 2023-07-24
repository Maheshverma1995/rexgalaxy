import React from 'react'
import { FaRecycle,FaClock,FaDesktop,FaPencilRuler } from "react-icons/fa";
import { Container, Row,Col } from 'react-bootstrap'

const BestPractices = () => {
  return (
    <Container>
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
        <Col >
            <div><span><FaRecycle/></span><span>Sustainablility</span></div>
            <div><span><FaClock/></span><span>Project On Time</span></div>
            <div><span><FaDesktop/></span><span>Modern Technology</span></div>
            <div><span><FaPencilRuler/></span><span>Latest Solutions</span></div>
        </Col>
    </Row>
   
</Container>
  )
}

export default BestPractices

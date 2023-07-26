import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const RequestCallBack = () => {
  return (
    <div>
      <Container>
        <Row >

          <Col md={6} >
            <Image fluid src="./Image/call-back_img.jpeg" rounded />
          </Col>
          <Col md={6} className="Appointment">
            <h1>MAKE AN APPOINTMENT</h1>
            <h6>CALL US AT +91-7411211148</h6>


          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default RequestCallBack

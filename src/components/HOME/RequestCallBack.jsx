import React from 'react'
import { Container, Row,Col ,Image } from 'react-bootstrap'

const RequestCallBack = () => {
  return (
    <div>
       <Container>
        <Row >
          
          <Col xs={6} md={6} >
          <Image style={{width:'100%'}} src="./Image/st_about_accordian.jpg.webp" rounded />
        </Col>
        <Col xs={1} md={6}>
         <h1>MAKE AN APPOINTMENT</h1>
            <h6>CALL US AT +91-7411211148</h6>
            
           
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default RequestCallBack

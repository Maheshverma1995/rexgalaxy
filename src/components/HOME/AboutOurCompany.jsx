import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const AboutOurCompany = () => {
  return (
    <div>
      <Container>
        <Row >
          <Col  md={6}>
            <h6>Know Who We Are </h6>
            <h1>ABOUT OUR COMPANY</h1>
            <p>At our software company, our mission is to revolutionize the way people interact with technology by developing innovative and user-centric software solutions. </p>
            <p>Unlocking career prospects, we facilitate IT industry’s embrace, Empowering individuals to master cutting-edge tech, paving their way.</p>
            <p>Empowering businesses, we offer cost-saving solutions, Harnessing technology’s prowess, optimizing software’s evolution.</p>
          </Col>
          <Col  md={6} >
          <Image fluid src="./Image/st_about_accordian.jpg.webp" rounded />
        </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AboutOurCompany

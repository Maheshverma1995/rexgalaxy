import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SoftwareTestingServices from './SoftwareTestingServices'
import WhychooseUs from './WhychooseUs'
import CompanyDatail from './CompanyDatail'
import QualityServices from './QualityServices'
import Sustainability from './Sustainability'
import BestPractices from './BestPractices'

const SoftwereTesting = () => {
  return (
    <Container fluid>
        <Row>
       <SoftwareTestingServices/>
        </Row>
        <Row>
        <Col xs={6} md={6} >
            <WhychooseUs/>
            </Col>
            <Col xs={6} md={6} >
                <CompanyDatail/>
            </Col>
        </Row>
        <Row>
          <div><h1>BUILD YOUR DREAM</h1></div>
          <div><p>Quality Services</p></div>
          <div><QualityServices/></div>
        </Row>
        <Row>
        <Col xs={6} md={6} >
            <Sustainability></Sustainability>
            </Col>
            <Col xs={6} md={6} >
                <BestPractices/>
            </Col>
        </Row>
        </Container>

  )
}

export default SoftwereTesting

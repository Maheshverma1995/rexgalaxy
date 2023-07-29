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
        <Row >
       <SoftwareTestingServices/>
        </Row>
      
        <Row className='mt-2 mb-2'>
        <Col  md={6} >
            <WhychooseUs/>
            </Col>
            <Col  md={6} >
                <CompanyDatail/>
            </Col>
        </Row>
        
        <Row className='mt-2 mb-2'>
          <div><h1>BUILD YOUR DREAM</h1></div>
          <div><p>Quality Services</p></div>
          <div><QualityServices/></div>
        </Row>
        <Row className='mt-2 mb-2'>
        <Col  md={6} >
            <Sustainability></Sustainability>
            </Col>
            <Col  md={6} >
                <BestPractices/>
            </Col>
        </Row>
        </Container>

  )
}

export default SoftwereTesting

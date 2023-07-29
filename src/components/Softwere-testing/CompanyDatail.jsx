import React from 'react'
import './Softwer-testing.css'
import { Container, Row,Col } from 'react-bootstrap'
const CompanyDatail = () => {
    return (
        <Container>
            <Row id='company-row'>
                <Col  md={6} className='company-col'>
                    <div><h1>512+</h1></div>
                    <div><p>Successfully Project Finished.</p></div>
                </Col>
                <Col  md={6} className='company-col'>
                    <div><h1>12+</h1></div>
                    <div><p>Years of experience with proud</p></div>
                </Col>
                <Col  md={6} className='company-col'>
                    <div><h1>1120+</h1></div>
                    <div><p>Revenue in 2017 investment</p></div>
                </Col>
                <Col  md={6} className='company-col'>
                    <div><h1>1520+</h1></div>
                    <div><p>Colleagues & counting more daily</p></div>
                </Col>
            </Row>
        </Container>

    )
}

export default CompanyDatail

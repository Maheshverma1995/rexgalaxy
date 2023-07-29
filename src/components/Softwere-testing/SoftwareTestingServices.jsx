import React from 'react'
import './Softwer-testing.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

const SoftwareTestingServices = () => {
    return (
        <Container>
            <Row className='p-2'>
                <Col id='S-t-col1'>
                    <h1>Welcome to our Software Testing Services!</h1>
                    <h4>"TESTING TODAY, CONFIDENCE TOMORROW."</h4>
                    <p>At RexGalaxy Technology, we understand the critical role software testing plays in ensuring the quality and reliability of your applications. Our dedicated team of skilled professionals is here to provide you with comprehensive software testing solutions that empower your business to deliver flawless software products to your customers. </p>
                    <Button variant="outline-primary">Primary</Button>{' '}
                </Col>
            </Row>
        </Container>

    )
}

export default SoftwareTestingServices

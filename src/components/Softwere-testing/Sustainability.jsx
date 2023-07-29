import React from 'react'
import './Softwer-testing.css'
import { Container, Row,Col,Button } from 'react-bootstrap'

const Sustainability = () => {
    return (
        <Container className='Sustainability'>
            <Row>
                <Col >
                <h4>Sustainability</h4>
                </Col>

            </Row>
            <Row>
                <Col >
                    <h1>COMMITTED TO PROVIDE EXCEPTIONAL SOFTWARE TESTING SOLUTIONS</h1>
                </Col>

            </Row>
            <Row>
                <Col >
                    <p>Our experienced testing professionals are available to provide expert consultation and guidance throughout your software testing journey. We help you define effective testing strategies, establish test processes, and identify the optimal mix of testing techniques for your unique requirements.</p>
                </Col>

            </Row>
            <Row>
                <Col >
                <Button variant="outline-primary">LEARN MORE</Button>{' '}
                </Col>

            </Row>
        </Container>

    )
}

export default Sustainability

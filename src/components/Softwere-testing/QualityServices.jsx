import React from 'react'
import './Softwer-testing.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

const QualityServices = () => {
    return (
        <Container>
            <Row id='Quality-row'>
            <div><h1>BUILD YOUR DREAM</h1></div>
          <div><p>Quality Services</p></div>
                <Col className='mt-2 mb-2'  md={4} >
                    <Card className='cardimg' >
                        <Card.Img id='Card-img' variant="top" src="./image/software-testing-service-762486-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title><h4>Test Planning and Design</h4></Card.Title>
                            <Card.Text>
                               <h6> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-2 mb-2'  md={4} >
                    <Card  className='cardimg'  >
                        <Card.Img id='Card-img' variant="top" src="./image/speed-internet-high-4028234-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title><h4>
                            Test Execution and Defect Tracking</h4></Card.Title>
                            <Card.Text>
                               <h6> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-2 mb-2'  md={4} >
                    <Card  className='cardimg'  >
                        <Card.Img id='Card-img' variant="top" src="./image/hook-check-mark-yes-881444-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title><h4>Test Reporting and Closure</h4></Card.Title>
                            <Card.Text>
                               <h6> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default QualityServices

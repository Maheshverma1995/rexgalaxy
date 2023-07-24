import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const QualityServices = () => {
    return (
        <Container>
            <Row>
                <Col xs={1} md={4} >
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="./image/software-testing-service-762486-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title>Test Planning and Design</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} md={4} >
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="./image/speed-internet-high-4028234-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title>Test Execution and Defect Tracking</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1} md={4} >
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="./image/hook-check-mark-yes-881444-150x150.jpg.webp" />
                        <Card.Body>
                            <Card.Title>Test Reporting and Closure</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in ipsum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default QualityServices

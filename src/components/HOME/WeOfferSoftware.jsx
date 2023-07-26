import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const WeOfferSoftware = () => {
    return (
        <div>
            <Container fluid>
                <Row className='Offer-row  '>
                    <Col  md={6}  >
                        <h2>WE OFFER SOFTWARE & SUPERIOR SERVICES</h2>
                    </Col>
                    <Col  md={6}  >

                        <Button  variant="outline-primary">LEARN MORE</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WeOfferSoftware

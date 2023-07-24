import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';




const CardDatail = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                  </Col>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default CardDatail
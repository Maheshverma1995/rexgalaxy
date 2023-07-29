import React from 'react'
import './Softwer-testing.css'
import { Container, Row, Button, Col } from 'react-bootstrap'
const WhychooseUs = () => {
  return (
    <Container>
      <Row>
        <Col  >
          <div className='p-2' id='Softwere-row1-col1'> <div><h1>WHY CHOOSE US?</h1></div>
            <div ><h3>10 Years Of Undefeated Success</h3></div>
            <div>
              <p>With years of experience in the software testing industry, we have honed our skills and gained deep expertise in various testing methodologies, tools, and frameworks. Our team is equipped to handle a wide range of testing needs, from functional testing to performance testing, security testing, and more.

              </p>
            </div>
            <Button variant="outline-primary">Primary</Button>
          </div>

        </Col>
      </Row>
    </Container>

  )
}

export default WhychooseUs

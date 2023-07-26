import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAdn } from "react-icons/fa";





const CardDatail = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>Custom Software</h4>
              <p>
                RexGalaxy specializes in custom software development, tailoring solutions to meet your unique business needs.</p>
            </div>

          </Col>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>Web Portals</h4>
              <p>
                RexGalaxy offers top-notch web portal development services, creating intuitive and user-friendly portals that enhance online experiences.</p>
            </div>

          </Col>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>Data Analytics</h4>
              <p>

                RexGalaxy empowers businesses with advanced data analytics solutions, unlocking valuable insights from complex datasets.</p>
            </div>

          </Col>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>Website Development</h4>
              <p>
                RexGalaxy offers comprehensive website development services, crafting visually stunning and highly functional websites tailored to meet your specific needs.

              </p>
            </div>

          </Col>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>CRM Consulting</h4>
              <p>

                RexGalaxy provides expert CRM consulting services, optimizing customer relationship management strategies for enhanced business performance.</p>
            </div>

          </Col>
          <Col md={4} className='home_card' >
            <span><FaAdn /></span>
            <div>
              <h4>Machine Learning</h4>
              <p>
                RexGalaxy undertakes cutting-edge machine learning projects, leveraging advanced algorithms and data analysis techniques to deliver innovative and intelligent solutions.</p>
            </div>

          </Col>

        </Row>
      </Container>
    </div >
  )
}

export default CardDatail

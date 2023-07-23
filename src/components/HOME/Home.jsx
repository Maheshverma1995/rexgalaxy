import React from 'react'
import Slider from '../../Orther/Slider'
import Industries from './Industries'
import { Container, Row } from 'react-bootstrap'
import CardDatail from './CardDatail'
import AboutOurCompany from './AboutOurCompany'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Slider />
        </Row>
        <Row>
          <Industries />
        </Row>
        <Row>
          <CardDatail></CardDatail>
        </Row>
        <Row>
          <AboutOurCompany></AboutOurCompany>
        </Row>
      </Container>


    </div>
  )
}

export default Home


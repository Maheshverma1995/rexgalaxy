import React from 'react'
import Slider from '../../Orther/Slider'
import Industries from './Industries'
import { Container, Row } from 'react-bootstrap'
import CardDatail from './CardDatail'
import AboutOurCompany from './AboutOurCompany'
import WeOfferSoftware from './WeOfferSoftware'
import RequestCallBack from './RequestCallBack'

const Home = () => {
  return (
    <div>
     <Container fluid>
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
        <Row>
          <WeOfferSoftware></WeOfferSoftware>
        </Row>
        <Row>
        <h1 className='Home-frist-h1'>REQUEST A CALL BACK?</h1>
        </Row>
        <Row><RequestCallBack/></Row>
      </Container>


    </div>
  )
}

export default Home


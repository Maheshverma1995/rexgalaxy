import React from 'react'
// import Slider from '../../Orther/Slider'
// import Industries from './Industries'
import { Container, Row ,Col, Image} from 'react-bootstrap'
import CardDatail from './CardDatail'
import AboutOurCompany from './AboutOurCompany'
import WeOfferSoftware from './WeOfferSoftware'
import RequestCallBack from './RequestCallBack'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row className=' mb-5'>
          {/* <Slider /> */}
          <Image fluid src="./Image/Slider_img-1-1.jpeg"  />
        </Row>
        <Row className='mt-5 mb-5'>
          {/* <Industries /> */}
          <Row className='mt-5 mb-5'>
            <Col><h1 class="text-center">INDUSTRIES</h1></Col>
          </Row>
        </Row>
        <Row className='mt-5 mb-5'>
          <CardDatail></CardDatail>
        </Row>
        <Row className='mt-5 mb-5'>
          <AboutOurCompany></AboutOurCompany>
        </Row>
        <Row className='mt-5 mb-5'>
          <WeOfferSoftware></WeOfferSoftware>
        </Row>
        <Row className='mt-5 mb-5'>
          <h1 className='Home-frist-h1'>REQUEST A CALL BACK?</h1>
        </Row>
        <Row className='mt-5 mb-5'><RequestCallBack /></Row>
      </Container>


    </div>
  )
}

export default Home


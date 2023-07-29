import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { FaRegStar } from "react-icons/fa";
import './Service.css'
const Service = () => {
  return (
    <Container fluid>
      <Row>
        <Image src="./Image/laptop-notebook-man-1071781.jpg.webp" />

      </Row>

      <Container>
        <div><h5 className='h5'>SERVICES WE CAN WORK UPON WITH YOU</h5></div>
        <Row>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/office-flowers-apple-605503-768x510.jpg.webp" />
              <Card.Body>
                <Card.Title><p>"Get your website on your favourite platform."</p></Card.Title>
                <Card.Text><h3>
                Website Development
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/miniature-skateboarding-skateboarder-3365503-768x512.jpg.webp" />
              <Card.Body>
                <Card.Title><p>“Transform your app idea into a reality with our mobile app development services.”</p></Card.Title>
                <Card.Text><h3>
                Mobile Application Development
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/browsers-internet-web-design-1265309-768x432.png" />
              <Card.Body>
                <Card.Title><p>At RexGalaxy Technology, we offer comprehensive digital marketing services designed to skyrocket your brand awareness, increase website traffic, and generate qualified leads, ultimately driving your business growth.</p></Card.Title>
                <Card.Text><h3>
                SEO Services
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/internet-marketing-digital-marketing-marketing-1802618-300x181.png" />
              <Card.Body>
                <Card.Title><p>At RexGalaxy Technology, we pride ourselves on delivering exceptional digital marketing solutions that propel businesses to new heights. With our expertise, innovative strategies, and customer-centric approach.</p></Card.Title>
                <Card.Text><h3>
                Digital Marketingcontent.
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/laptop-notebook-man-1071781.jpg.webp" />
              <Card.Body>
                <Card.Title><p>Whether you are a beginner or an experienced professional, our training module cater to all skill levels and cover a wide range of technologies, programming languages, frameworks, and IT concepts.</p></Card.Title>
                <Card.Text><h3>
                IT Training
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} >
            <Card className='card'>
              <Card.Img className='Card-Img' variant="top" src="../../Image/iphone-7-isolated-touch-3171205-768x512.jpg.webp" />
              <Card.Body>
                <Card.Title><p>At RexGalaxy Technolgy, we specialize in iOS development, creating exceptional mobile applications that captivate users and drive your business forward faster.</p></Card.Title>
                <Card.Text><h3>
                IOS Development
                </h3></Card.Text>
               <div className='Star'>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>
                <i><FaRegStar/></i>

              </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </Container>

  )
}

export default Service

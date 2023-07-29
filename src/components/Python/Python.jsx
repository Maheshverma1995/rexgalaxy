import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pythontraining from './Pythontraining'
import WhychooseUs from '../Softwere-testing/WhychooseUs'
import CompanyDatail from '../Softwere-testing/CompanyDatail'
import Sustainability from '../Softwere-testing/Sustainability'
import BestPractices from '../Softwere-testing/BestPractices'
const Python = () => {
  return (
    <Container fluid>
      <Row  >
        <Col >
          <Pythontraining />
        </Col>
      </Row>
      <Row>
        <Col md={6} >
<WhychooseUs/>
        </Col>
        <Col md={6} >
          <CompanyDatail />
        </Col>
      </Row>
      <Row>
        <Col md={6} >
          <Sustainability></Sustainability>
        </Col>
        <Col md={6} >
          <BestPractices />
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6} sm={12} >
          <div>
            <span><h1>Expert Instructors</h1></span>
            <p>RexGalaxy Technology employs experienced and knowledgeable instructors who are well-versed in Python and its applications. Our instructors have a deep understanding of the language and its various frameworks and libraries, enabling them to provide practical insights and real-world examples during the training sessions.</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} >
          <div>
            <span><h1>Comprehensive Curriculum</h1></span>
            <p>Our Python training program is designed to provide a comprehensive understanding of the language from the fundamentals to advanced concepts. The curriculum covers topics such as data types, control flow, functions, object-oriented programming, web development, data analysis, and more. This ensures that you receive a well-rounded education and gain the skills needed to tackle real-world Python projects.</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} >
          <div>
            <span><h1>Hands-on Approach</h1></span>
            <p>We believe in a practical approach to learning Python. Our training programs include numerous hands-on exercises, coding assignments, and projects that allow you to apply the concepts learned in a practical setting. By working on real-world scenarios, you will develop a strong foundation and gain confidence in your Python programming abilities.</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} >
          <div>
            <span> <h1>Industry-Relevant Projects</h1></span>
            <p>At RexGalaxy Technology, we understand the importance of applying Python skills to real-world projects. We provide industry-relevant projects that simulate actual scenarios encountered by Python developers. By working on these projects, you will gain valuable experience and be better prepared to tackle similar challenges in your professional career.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6} sm={12} >
          <div>
            <span><h1>Flexible Learning Options</h1></span>
            <p>We offer flexible learning options to cater to different needs and preferences. Whether you prefer in-person classroom training, online instructor-led sessions, or self-paced learning, we have options available to accommodate your schedule and learning style. This flexibility ensures that you can pursue Python training without disrupting your other commitments.</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} >
          <div><span><h1>Post-Training Support</h1></span>
            <p>Our commitment to your success extends beyond the training program. We offer post-training support through discussion forums, dedicated mentors, and access to additional learning resources. This support system enables you to seek clarification on concepts, collaborate with fellow learners, and continue your Python learning journey even after completing the training.</p>
          </div>

        </Col>
        <Col lg={3} md={6} sm={12} >
          <div><span><h1>Industry Recognition</h1></span>
            <p> RexGalaxy Technology has gained a reputation for providing high-quality training programs in various technical domains.
              <p>Our Python training is recognized by industry professionals and employers, giving you an added advantage when seeking employment or career advancement opportunities.</p>
              Our Python training is recognized by industry professionals and employers, giving you an added advantage when seeking employment or career advancement opportunities.</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} >
          <div><span><h1>Industry-Relevant Projects</h1></span>
            <p>Choosing RexGalaxy Technology for Python training ensures that you receive a comprehensive and practical education in the language, equipping you with the skills needed to succeed as a Python developer. Our expert instructors, comprehensive curriculum, hands-on approach, industry-relevant projects, flexible learning options, and post-training support make us the ideal choice for anyone looking to master Python programming.</p>

          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Python

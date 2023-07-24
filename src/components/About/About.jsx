import React from 'react'

const About = () => {
  return (
    <div>
      <img
        className="d-block w-100 h-50%"
        src="./Image/funfact_img-2.jpeg"
        alt="img"
      />
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6">
            <h1>OUR MISSION</h1>
            <p>At our software company, our mission is to revolutionize the way people interact with technology by developing innovative and user-centric software solutions. We are committed to pushing the boundaries of what is possible and delivering cutting-edge products that meet the evolving needs of our clients and users.</p>
            <p>Our mission begins with a deep understanding of our clients' challenges and goals. We believe that successful software is built on a foundation of collaboration, empathy, and a thorough comprehension of the problem at hand. By actively engaging with our clients, we strive to grasp their unique requirements, pain points, and aspirations, enabling us to craft tailored solutions that truly make a difference.</p>
            <p>We offer a wide range of IT training courses that cover various technologies, frameworks, and industry-standard certifications. Our course catalog is regularly updated to reflect the latest trends and advancements in the IT field. From programming languages and software development methodologies to cybersecurity and cloud computing, our courses cater to diverse learning needs and skill levels</p>
          </div>
          <div className="col-md-6">
            <img src="./Image/st_about_accordian.jpg.webp" alt="img" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Extraordinary Experiences</h3>
            <p>Our training module goes beyond the traditional approach of online or classroom training. We have designed it to simulate a real IT industry experience, providing participants with a comprehensive and immersive learning environment. This unique training model aims to bridge the gap between theoretical knowledge and practical application, ensuring that participants are well-prepared to excel in real-world IT scenarios.</p>
            <p>Overall, our training module is designed to provide participants with a holistic IT industry experience. By combining project-based learning, exposure to industry-standard tools, collaboration, and professional development opportunities, we ensure that participants are well-prepared to excel in their careers. Our goal is to equip them with the practical skills, knowledge, and mindset required to thrive in the ever-evolving IT industry.</p>
          </div>
          <div className="col-md-6">
            <h3>Our Core Values</h3>
            <p>We constantly seek technological advancements, strive for high-quality outcomes, and promote teamwork to meet the evolving needs of our clients and provide exceptional solutions and services.</p>
            <p>We embrace innovation to drive technological advancement and deliver cutting-edge solutions to our clients.</p>
            <p>We foster a collaborative environment, promoting teamwork and knowledge sharing to achieve collective success</p>
            <p>We strive for excellence in all aspects of our operations, ensuring high-quality outcomes and exceptional customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

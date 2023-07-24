import React from "react";
import "../../App.css";
import { BsFacebook, BsGoogle, BsYoutube } from "react-icons/bs";
const Contact = () => {
  return (
    <div>
      <img
        className="d-block w-100 h-50%"
        src="./Image/Slider_img-1-1.jpeg"
        alt="img"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>WE'RE READY, LET'S TALK.</h3>
            <div className="mb-3">
              <input
                type="name"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your E-mail"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <div className="w-50 mb-3 ms-0">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>CONTACT INFO</h3>
            <h5>Address</h5>
            <p>
              A 40, Ithum Tower A, 6th Floor, 606 ,Noida Sector 62 Uttar
              Pradesh, 201301
            </p>
            <h5>Email Us</h5>
            <p>contact@rexgalaxy.com</p>
            <h5>Call us</h5>
            <p>+917411211148</p>
            <h5>Follow Us</h5>
            <div className="icons">
              <div className="row">
                <article>
                  <div>
                    <BsGoogle className="icon-contact" />
                  </div>
                  <div>
                    <BsYoutube className="icon-contact" />
                  </div>
                  <div>
                    <BsFacebook className="icon-contact" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

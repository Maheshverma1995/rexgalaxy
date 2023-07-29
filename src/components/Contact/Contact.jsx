import React, { useState } from "react";
import "../../App.css";
import "./Contact.css";
import { BsFacebook, BsGoogle, BsYoutube } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Please enter your message.";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      validationErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If form is valid, you can handle form submission here (e.g., send data to server)
      console.log("Form submitted:", formData);
      // Reset the form data and errors after submission
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container-fluid ">
      
        <div className="row row1">
          <h1>CONTACT US</h1>
        </div>
      
      <div className="container ">
      <div className="row container1 mt-5">
        <div className="col-lg-6">
          <h3>WE'RE READY, LET'S TALK.</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                placeholder="Enter Your E-mail"
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="w-50 mb-3 ms-0">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                placeholder="Enter Your Phone Number (10 digits)"
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                placeholder="Message"
                rows="3"
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h3>CONTACT INFO</h3>
          <h5>Address</h5>
          <p>
            A 40, Ithum Tower A, 6th Floor, 606, Noida Sector 62 Uttar Pradesh,
            201301
          </p>
          <h5>Email Us</h5>
          <p>contact@rexgalaxy.com</p>
          <h5>Call us</h5>
          <p>+917411211148</p>
          <h5>Follow Us</h5>
          <div className="icons d-flex">
            <div>
              <BsGoogle className="icon-contact" />
            </div>
            <div>
              <BsYoutube className="icon-contact" />
            </div>
            <div>
              <BsFacebook className="icon-contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

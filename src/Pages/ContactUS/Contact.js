import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  once: true,
  duration: 800,
});

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  document.body.style.overflow = showModal === true ? "hidden" : "auto";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name || formData.name.length < 2) {
      errors.name = "Name should have at least 2 letters";
      formIsValid = false;
    } else {
      errors.name = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email address is invalid";
      formIsValid = false;
    } else {
      errors.email = "";
    }

    if (!formData.subject || formData.subject.length < 10) {
      errors.subject = "Subject should have at least 10 letters";
      formIsValid = false;
    } else {
      errors.subject = "";
    }

    if (!formData.message || formData.message.length < 10) {
      errors.message = "Message should have at least 10 letters";
      formIsValid = false;
    } else {
      errors.message = "";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          {
            service_id: "service_z9gxn1k",
            template_id: "template_2ekoav6",
            user_id: "tux0jR-t4f8Jhgtd5",
            template_params: formData,
          }
        );

        if (response.status === 200) {
          console.log("Email sent successfully");

          setTimeout(() => {
            setLoading(false); // Stop loading
            toggleModal(); // Open modal after 5 seconds
          }, 2000);

          // Clear the contact form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          // You can also add code here to show a success message to the user
        } else {
          console.error("Failed to send email:", response.statusText);
          // You can also add code here to show an error message to the user
        }
      } catch (error) {
        console.error("Error sending email:", error);
        // You can also add code here to show an error message to the user
      }
    } else {
      console.log("Form is invalid. Please check the fields.");
    }
  };

  return (
    <div>
      <section className="section gray-bg" id="contactus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-md-7 col-lg-8 m-15px-tb">
              <div className="contact-form">
                <form
                  onSubmit={handleSubmit}
                  className="contactform contact_form"
                  id="contact_form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="name"
                          type="text"
                          placeholder="Full Name"
                          className={`form-control ${
                            formErrors.name && "is-invalid"
                          }`}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {formErrors.name && (
                          <div className="invalid-feedback">
                            {formErrors.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="email"
                          type="text"
                          placeholder="Email Address"
                          className={`form-control ${
                            formErrors.email && "is-invalid"
                          }`}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {formErrors.email && (
                          <div className="invalid-feedback">
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          className={`form-control ${
                            formErrors.subject && "is-invalid"
                          }`}
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {formErrors.subject && (
                          <div className="invalid-feedback">
                            {formErrors.subject}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="message"
                          placeholder="Message"
                          className={`form-control ${
                            formErrors.message && "is-invalid"
                          }`}
                          rows="3"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {formErrors.message && (
                          <div className="invalid-feedback">
                            {formErrors.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button id="send_message" className="px-btn theme">
                          <span>Contact Us</span> <i className="arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 m-15px-tb" data-aos="fade-down">
              <div className="contact-name">
                <h5>Mail</h5>
                <p>gauravmehra2470@gmail.com</p>
              </div>
              <div className="contact-name">
                <h5>Visit Our Store</h5>
                <p>
                  Rajpur Road, <br />
                  Dehradun - 248001
                </p>
              </div>
              <div className="contact-name">
                <h5>Phone</h5>
                <p>+91 9557915695</p>
              </div>
              <div className="social-share nav">
                <a className="dribbble" href="#">
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
                <a className="behance" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                </a>
                <a className="linkedin" href="#">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading && ( // Display loading spinner if loading is true
        <div className="overlay">
          <div className="loading"></div>
        </div>
      )}

      {showModal && ( // Display modal if showModal is true
        <div className="overlay" data-aos="fade-up">
          <div className="modal-confirm">
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <div className="icon-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                </div>
              </div>
              <div className="modal-body text-center">
                <h4>Great!</h4>
                <p>Your mail has been sent successfully.</p>
                <button className="btn btn-success" onClick={closeModal}>
                  <span>OK</span>
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Contact;

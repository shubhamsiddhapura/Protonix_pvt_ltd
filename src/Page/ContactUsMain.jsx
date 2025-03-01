import { useState } from "react";
import emailjs from "emailjs-com";
import Spline from "@splinetool/react-spline";
import "../Css/ContactUsMain.css";
import Footer from "../Page/Footer";
import Navbar from "../Page/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_0fi47on", // Replace with your EmailJS service ID
        "template_ohw87lf", // Replace with your EmailJS template ID
        {
          from_email: formData.email,
          contact_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "AjMXIHVZljfocWLdg" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-us-wrapper">
      <Navbar />
      <Spline scene="https://prod.spline.design/cTnnQlDRVlLyApGx/scene.splinecode" className="spline-bg" />

      <div className="contact-us-pg-container">
        <div className="contact-container">
          {/* Left Section */}
          <div className="left-section">
            <h1>Contact Us</h1>
            <p> We are dedicated to empowering businesses through innovative technology solutions.
                Our team is committed to delivering exceptional support and expertise to meet your unique needs.
                Connect with us to explore how our tailored IT and AI services can help you achieve your goals.
                We look forward to building a successful partnership with you!</p>
            <div className="contact-detail">
              <i className="fas fa-phone-alt"></i>
              <span>+91 89800 05254</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@protonix.tech">info@protonix.tech</a>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="right-section">
            <div className="form-box">
              <h2>Get in Touch</h2>
              <form className="contact-us-pg-form" onSubmit={handleSubmit}>
                <label>Email ID</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

                <label>Contact No.</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />

                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" required />

                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Enter your message" required></textarea>

                <button type="submit">Submit</button>
              </form>
              {status && <p className="status-message">{status}</p>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

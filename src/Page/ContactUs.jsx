import { useState } from "react";
import emailjs from "emailjs-com";
import Spline from "@splinetool/react-spline";
import "../Css/ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_az6n23c", // Replace with your EmailJS service ID
        "template_x2l8k9r", // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "AjMXIHVZljfocWLdg" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!Thank you so much!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page1">
      <Spline className="spline-bg2" scene="https://prod.spline.design/DY4hmceISsqjUsCp/scene.splinecode" />
      <div className="contact-container1 right-position1">
        <h2 className="contact-title1">Contact Us</h2>
        <p className="contact-description1">Any projects in mind? We'd love to hear from you!</p>
        <form onSubmit={handleSubmit} className="contact-form1">
          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              required
              className="contact-input1"
            />
          ))}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea1"
          />
          <button type="submit" className="contact-button1">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}

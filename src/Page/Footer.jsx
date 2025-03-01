import "../Css/Footer.css";
import logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        {/* First Column: Logo, Vision, and Social Icons */}
        <div className="footer-left-section">
          <div className="footer-column footer-logo">
            <img src={logo} alt="Company Logo" className="footer-logo-img" />
            <p>
              We envision a future where technology enhances human potential. Our
              mission is to leverage AI for innovative solutions that empower a
              smarter, safer, and more sustainable world.
            </p>
            <ul className="social-icons-horizontal">
              <li>
                <a href="https://www.linkedin.com/company/perceptron-tech/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/protonix_ai" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/ProtonixAI" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Column: Explore */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/technology">TECHNOLOGY</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </div>

        {/* Third Column: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Fourth Column: Get in Touch */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <ul className="contact-info1">
            <li>
              <a href="mailto:info@protonix.tech">
                <i className="fas fa-envelope contact-icon"></i> info@protonix.tech
              </a>
            </li>
            <li>
              <i className="fas fa-phone contact-icon"></i> +91 89800 05254
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2025 Protonix Ai Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

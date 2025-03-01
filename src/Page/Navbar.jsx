import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Css/Navbar.css"; // Ensure you have the CSS file for styling
import logoFile from "../assets/LOGO.svg"; // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoFile} alt="Brand Logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/technology">TECHNOLOGY</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

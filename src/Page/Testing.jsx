import "../Css/Testing.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import manualTesting from "../assets/tech/manual.png";
import automationTesting from "../assets/tech/automated.png";
import softwareTesting from "../assets/tech/software.png";
import vaptTesting from "../assets/tech/vapt.png";

const Testing = () => {
  return (
    <div className="testing-page">
      <Navbar />
      <div className="testing-container">

        {/* Manual Testing Section */}
        <section className="testing-section">
          <h2>Manual Testing</h2>
          <div className="testing-content">
            <img src={manualTesting} alt="Manual Testing" className="testing-image" />
            <div className="testing-text">
              <p>
                We offer comprehensive manual testing services to ensure the highest quality and reliability of your software applications.
                Our experienced testing team conducts thorough assessments across various platforms and environments, focusing on functionality, usability, and performance.
              </p>
              <ul>
                <li>Exploratory Testing</li>
                <li>Usability Feedback</li>
                <li>Immediate Results</li>
                <li>Flexibility</li>
                <li>Low Initial Cost</li>
                <li>Human Intuition</li>
                <li>Best for Small Projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Automation Testing Section */}
        <section className="testing-section">
          <h2>Automation Testing</h2>
          <div className="testing-content">
            <img src={automationTesting} alt="Automation Testing" className="testing-image" />
            <div className="testing-text">
              <p>
                We provide expert automation testing services designed to enhance the efficiency and effectiveness of your software quality assurance processes.
                Our team leverages advanced automation tools and frameworks to create robust test scripts that streamline repetitive testing tasks.
              </p>
              <ul>
                <li>Faster Test Execution</li>
                <li>Reusable Test Scripts</li>
                <li>Higher Accuracy</li>
                <li>Supports Continuous Integration</li>
                <li>Better Coverage</li>
                <li>Cost-Effective for Large Projects</li>
                <li>Reduces Manual Effort</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Software Testing Section */}
        <section className="testing-section">
          <h2>Software Testing</h2>
          <div className="testing-content">
            <img src={softwareTesting} alt="Software Testing" className="testing-image" />
            <div className="testing-text">
              <p>
                We offer comprehensive software testing services to ensure the quality, reliability, and performance of your applications.
                Our testing solutions encompass a wide range of methodologies, including manual testing, automation testing, functional testing, performance testing, security testing, and user acceptance testing (UAT).
              </p>
              <ul>
                <li>Ensures Quality</li>
                <li>Reduces Maintenance Cost</li>
                <li>Prevents Bugs</li>
                <li>Increases Security</li>
                <li>Enhances User Satisfaction</li>
                <li>Compliance with Standards</li>
                <li>Supports Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VAPT Testing Section */}
        <section className="testing-section">
          <h2>VAPT Testing (Vulnerability Assessment and Penetration Testing)</h2>
          <div className="testing-content">
            <img src={vaptTesting} alt="VAPT Testing" className="testing-image" />
            <div className="testing-text">
              <p>
                We offer Vulnerability Assessment and Penetration Testing (VAPT) services to help organizations identify and mitigate security risks in their systems and applications.
                Our comprehensive VAPT process includes thorough vulnerability assessments and penetration testing.
              </p>
              <ul>
                <li>Improves Security Posture</li>
                <li>Identifies Vulnerabilities</li>
                <li>Compliance with Regulations</li>
                <li>Real-World Attack Simulation</li>
                <li>Protects Sensitive Data</li>
                <li>Reduces Risk of Breaches</li>
                <li>Comprehensive Reporting</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Testing;

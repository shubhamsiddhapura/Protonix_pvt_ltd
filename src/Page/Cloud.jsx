import "../Css/Cloud.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import devops from "../assets/tech/devops.png";
import cloud from "../assets/tech/aws.svg";
import cicd from "../assets/tech/cicid.png";

const Cloud = () => {
  return (
    <div>
      <Navbar />
      <div className="cloud-container">
        
        {/* DevOps Section */}
        <section className="section-cloud">
          <h2>DevOps</h2>
          <div className="content-cloud">
            <img src={devops} alt="DevOps" className="cloud-image" />
            <div className="text-content-cloud">
              <p>
                We offer expert DevOps services designed to enhance collaboration between development and operations teams, 
                streamlining the software development lifecycle. Our approach integrates continuous integration, 
                continuous deployment (CI/CD), and automation to improve efficiency, reduce deployment times, and ensure 
                consistent software quality.
              </p>
              <ul>
                <li>Faster Time to Market</li>
                <li>Increased Efficiency</li>
                <li>Improved Collaboration</li>
                <li>Continuous Monitoring</li>
                <li>Scalability</li>
                <li>Enhanced Security</li>
                <li>Automated Workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AWS and Azure Section */}
        <section className="section-cloud">
          <h2>AWS and Azure</h2>
          <div className="content-cloud">
            <img src={cloud} alt="AWS and Azure" className="cloud-image" />
            <div className="text-content-cloud">
              <p>
                We provide comprehensive cloud services to help businesses leverage the full potential of cloud computing. 
                Our expertise includes cloud migration, architecture design, and management across major platforms such as AWS, 
                Azure, and Google Cloud.
              </p>
              <ul>
                <li>Global Availability</li>
                <li>High Scalability</li>
                <li>Comprehensive Service Portfolio</li>
                <li>Hybrid Cloud Capabilities</li>
                <li>Strong Security Measures</li>
                <li>Enterprise-Grade Solutions</li>
                <li>Continuous Innovation</li>
                <li>Reliable Support and Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CI/CD Section */}
        <section className="section-cloud">
          <h2>CI/CD</h2>
          <div className="content-cloud">
            <img src={cicd} alt="CI/CD" className="cloud-image" />
            <div className="text-content-cloud">
              <p>
                We provide comprehensive CI/CD (Continuous Integration/Continuous Deployment) services to streamline and 
                automate your software development processes. Our expertise includes setting up robust CI/CD pipelines 
                that enable frequent code integrations, automated testing, and seamless deployments across various 
                environments.
              </p>
              <ul>
                <li>Automated Testing</li>
                <li>Faster Delivery</li>
                <li>Reduced Errors</li>
                <li>Scalability</li>
                <li>Version Control Integration</li>
                <li>Feedback Loops</li>
                <li>Enhanced Collaboration</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Cloud;

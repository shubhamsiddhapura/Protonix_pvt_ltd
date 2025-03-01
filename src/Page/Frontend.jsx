import "../Css/Frontend.css"; // Ensure correct case in the folder name
import Footer from "./Footer";
import Navbar from "./Navbar";
import html from "../assets/tech/html.png";
import react from "../assets/tech/react.png";
import angular from "../assets/tech/angularjs.png";

const Frontend = () => {
  return (
    <div>
      <Navbar />
      <div className="frontend-section"> {/* Added missing wrapper class */}
        <div className="frontend-container1">
          
          {/* HTML, CSS, and JavaScript Section */}
          <section className="section11">
            <h2>HTML, CSS, and JavaScript</h2>
            <div className="content11">
              <img src={html} alt="HTML" className="framework-image" />
              <div className="text-content11">
                <p>
                  We offer top-notch front-end development services using HTML, CSS, and
                  JavaScript to create engaging and responsive user interfaces. Our expertise lies in building 
                  well-structured HTML, maintainable CSS, and dynamic JavaScript experiences.
                </p>
                <ul>
                  <li>Semantic Elements</li>
                  <li>Multimedia Support</li>
                  <li>Form Enhancements</li>
                  <li>Local Storage</li>
                  <li>Geolocation API</li>
                  <li>Responsive Design</li>
                  <li>Improved Accessibility</li>
                </ul>
              </div>
            </div>
          </section>

          {/* React Section */}
          <section className="section11">
            <h2>React</h2>
            <div className="content11">
              <img src={react} alt="React" className="framework-image" />
              <div className="text-content11">
                <p>
                  We provide high-quality React development services, leveraging its
                  component-based architecture to build fast, responsive, and scalable
                  user interfaces.
                </p>
                <ul>
                  <li>Component-Based Architecture</li>
                  <li>Virtual DOM</li>
                  <li>JSX (JavaScript XML)</li>
                  <li>Unidirectional Data Flow</li>
                  <li>State Management</li>
                  <li>Lifecycle Methods</li>
                  <li>Hooks</li>
                  <li>Context API</li>
                  <li>React Router</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Angular Section */}
          <section className="section11">
            <h2>Angular</h2>
            <div className="content11">
              <img src={angular} alt="Angular" className="framework-image" />
              <div className="text-content11">
                <p>
                  We offer comprehensive Angular development services, utilizing its
                  robust framework to build scalable and feature-rich web applications.
                </p>
                <ul>
                  <li>Component-Based Architecture</li>
                  <li>TypeScript Support</li>
                  <li>Two-Way Data Binding</li>
                  <li>Dependency Injection</li>
                  <li>Directives</li>
                  <li>Reactive Programming with RxJS</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frontend;

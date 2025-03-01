import "../Css/Backend.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import nodejs from "../assets/tech/nodejs.png";
import python from "../assets/tech/python.png";
import java from "../assets/tech/java.png";
import csharp from "../assets/tech/c-sharp.png";

const Backend = () => {
  return (
    <div>
      <Navbar />
      <div className="backend-container">
        
        {/* Node.js Section */}
        <section className="section-backend">
          <h2>Node.js</h2>
          <div className="content-backend">
            <img src={nodejs} alt="Node.js" className="backend-image" />
            <div className="text-content-backend">
              <p>
                We provide expert Node.js development services, harnessing the power of its event-driven, 
                non-blocking architecture to build high-performance, scalable applications.
              </p>
              <ul>
                <li>Event-Driven Architecture</li>
                <li>Non-Blocking I/O</li>
                <li>Single Programming Language</li>
                <li>Vast Package Ecosystem (npm)</li>
                <li>Asynchronous Programming</li>
                <li>Server-Side Rendering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Python Section */}
        <section className="section-backend">
          <h2>Python</h2>
          <div className="content-backend">
            <img src={python} alt="Python" className="backend-image" />
            <div className="text-content-backend">
              <p>
                We specialize in Python development services, leveraging its readability, simplicity, 
                and versatility to deliver efficient solutions across various domains.
              </p>
              <ul>
                <li>Easy-to-Read Syntax</li>
                <li>Interpreted Language</li>
                <li>Extensive Standard Library</li>
                <li>Cross-Platform Compatibility</li>
                <li>Object-Oriented and Functional Programming</li>
                <li>Support for Modules and Packages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Java Section */}
        <section className="section-backend">
          <h2>Java</h2>
          <div className="content-backend">
            <img src={java} alt="Java" className="backend-image" />
            <div className="text-content-backend">
              <p>
                We offer robust Java development services, utilizing the language's versatility and platform 
                independence to build secure and scalable applications.
              </p>
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Platform Independence</li>
                <li>Robust and Secure</li>
                <li>Automatic Memory Management (Garbage Collection)</li>
                <li>Multi-threading Support</li>
                <li>Strong Exception Handling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* C# Section */}
        <section className="section-backend">
          <h2>C#</h2>
          <div className="content-backend">
            <img src={csharp} alt="C#" className="backend-image" />
            <div className="text-content-backend">
              <p>
                We deliver professional C# development services, utilizing its modern, object-oriented features 
                to create robust and maintainable software solutions.
              </p>
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Asynchronous Programming</li>
                <li>IDE (Visual Studio)</li>
                <li>Cross-Platform with .NET Core</li>
                <li>LINQ (Language Integrated Query)</li>
                <li>Support for Web APIs</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Backend;

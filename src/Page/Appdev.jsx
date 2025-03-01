import "../Css/Appdev.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import flutter from "../assets/tech/flutter.png";
import reactNative from "../assets/tech/react.png";
import ios from "../assets/tech/swift.png";
import android from "../assets/tech/kotlin.png";

const AppDev = () => {
  return (
    <div>
      <Navbar />
      <div className="appdev-container">

        {/* Flutter Section */}
        <section className="section-appdev">
          <h2>Flutter</h2>
          <div className="content-appdev">
            <img src={flutter} alt="Flutter" className="appdev-image" />
            <div className="text-content-appdev">
              <p>
                We provide expert Flutter development services, creating high-performance and visually appealing 
                cross-platform mobile applications. Using Flutter’s single codebase approach, we develop apps 
                that run seamlessly on both iOS and Android, significantly reducing development time and cost.
              </p>
              <ul>
                <li>Hot Reload</li>
                <li>Cross-Platform Development</li>
                <li>Rich Widget Library</li>
                <li>Single Codebase</li>
                <li>Fast Performance</li>
                <li>Strong Community Support</li>
                <li>Customizable UI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* React Native Section */}
        <section className="section-appdev">
          <h2>React Native</h2>
          <div className="content-appdev">
            <img src={reactNative} alt="React Native" className="appdev-image" />
            <div className="text-content-appdev">
              <p>
                We offer specialized React Native development services, enabling the creation of high-quality, 
                cross-platform mobile applications that provide a native-like experience on both iOS and Android devices.
              </p>
              <ul>
                <li>Reusable Code</li>
                <li>Cross-Platform Compatibility</li>
                <li>Fast Refresh</li>
                <li>Rich Ecosystem</li>
                <li>Easy Integration with Native Code</li>
                <li>Strong Community and Libraries</li>
                <li>Backed by Facebook</li>
              </ul>
            </div>
          </div>
        </section>

        {/* iOS Development Section */}
        <section className="section-appdev">
          <h2>iOS Development</h2>
          <div className="content-appdev">
            <img src={ios} alt="iOS Development" className="appdev-image" />
            <div className="text-content-appdev">
              <p>
                We provide comprehensive iOS development services, specializing in creating high-quality, 
                native applications for iPhone and iPad. Our experienced team utilizes Swift and Objective-C 
                to build robust and user-friendly apps that deliver exceptional performance.
              </p>
              <ul>
                <li>Swift Programming Language</li>
                <li>High Performance</li>
                <li>Strong Security Features</li>
                <li>Rich API Integration</li>
                <li>Intuitive User Interface</li>
                <li>Dedicated Developer Tools (Xcode)</li>
                <li>Consistent Updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Android Development Section */}
        <section className="section-appdev">
          <h2>Android Development</h2>
          <div className="content-appdev">
            <img src={android} alt="Android Development" className="appdev-image" />
            <div className="text-content-appdev">
              <p>
                We offer expert Android development services, specializing in creating high-performance, 
                native applications for a wide range of Android devices. Our skilled team utilizes Java and 
                Kotlin to build robust, user-friendly apps.
              </p>
              <ul>
                <li>Wide Device Compatibility</li>
                <li>Open-Source Platform</li>
                <li>Kotlin and Java Support</li>
                <li>Extensive Market Reach</li>
                <li>Strong Community Support</li>
                <li>Customizable UI Design</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default AppDev;

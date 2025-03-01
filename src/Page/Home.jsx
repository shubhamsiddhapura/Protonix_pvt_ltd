import Spline from "@splinetool/react-spline";
import videoFile from "../assets/v4.mp4"; 
import imageFile from "../assets/H1.svg"; 
import "../Css/Home.css"; 
import Services from "./Service";
import Testimonial from "./Testimonial";
import Chooseus from "./Chooseus";
import Procces from "./procces";
import Contact from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Navbar />

        {/* Background Video */}
        <video autoPlay loop muted className="background-video">
          <source src={videoFile} type="video/mp4" />
        </video>

        {/* Overlay Image */}
        <img src={imageFile} alt="Overlay" className="overlay-image" />

        {/* Spline 3D Scene */}
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/pc0PO8LflaKdTAR7/scene.splinecode" />
        </div>

        {/* Robot Viewer */}
        <spline-viewer url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"></spline-viewer>
      </div>

      {/* Other Sections */}
      <Services />
      <Chooseus />
      <Testimonial />
      <Procces />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

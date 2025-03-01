import Spline from "@splinetool/react-spline";
import "../Css/ServicesMain.css";
import Footer from "../Page/Footer";
import Navbar from "../Page/Navbar";
import img1 from "../assets/web.png";
import img2 from "../assets/app.svg";
import img3 from "../assets/uiux.png";
import img4 from "../assets/seo.png";
import img5 from "../assets/market.png";
import img6 from "../assets/cloud.png";
import img7 from "../assets/aiml.png";
import img8 from "../assets/cyber.png";
import img9 from "../assets/block.png";

const servicesList = [
  { name: "Web Development", icon: img1, description: "We craft websites that deliver seamless user experiences and drive growth." },
  { name: "App Development", icon: img2, description: "Develop intuitive mobile apps for iOS and Android that meet business objectives." },
  { name: "UI/UX Design", icon: img3, description: "Create engaging and user-friendly designs that enhance customer satisfaction." },
  { name: "SEO Optimization", icon: img4, description: "Optimize websites for better search engine visibility and organic traffic." },
  { name: "Digital Marketing", icon: img5, description: "Boost online presence with SEO, social media, content marketing, and paid ads." },
  { name: "Cloud Computing", icon: img6, description: "Deploy scalable and secure cloud solutions tailored to business needs." },
  { name: "AI & ML Solutions", icon: img7, description: "Leverage AI and ML for automation, insights, and smarter decision-making." },
  { name: "Cybersecurity", icon: img8, description: "Protect digital assets with advanced security solutions and risk assessments." },
  { name: "Blockchain Development", icon: img9, description: "Build secure and transparent blockchain applications for various industries." }
];

const ServiceMain = () => {
  return (
    <section className="servicesMain-section">
      <Navbar />
      <div className="servicesMain-container">
        <Spline className="servicesMain-spline-background" scene="https://prod.spline.design/FPipHnLbwfjpgfzE/scene.splinecode" />
        <div className="servicesMain-content-wrapper">
          <h2 className="servicesMain-title">Our Services.</h2>
          <div className="servicesMain-content">
            <p>We offer a comprehensive range of technology solutions designed to transform and elevate your business.</p>
            <p>Our expertise spans AI and machine learning solutions, custom web development, mobile app development, and specialized IT services.</p>
            <p>We work closely with you to create tailored solutions that drive growth, enhance efficiency, and meet your strategic objectives.</p>
            <p>Discover how our innovative approach and dedicated team can bring your vision to life.</p>
          </div>
        </div>
      </div>
      <div className="servicesMain-wrapper">
        {servicesList.map((service, index) => (
          <div key={index} className="servicesMain-box">
            <div className="servicesMain-box-inner">
              <div className="servicesMain-box-front">
                <img src={service.icon} alt={service.name} className="servicesMain-icon-img" />
                <p className="servicesMain-name">{service.name}</p>
              </div>
              <div className="servicesMain-box-back">
                <p className="servicesMain-pg-card-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default ServiceMain;

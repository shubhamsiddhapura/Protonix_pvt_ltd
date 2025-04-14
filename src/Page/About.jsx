import Spline from '@splinetool/react-spline';
import "../Css/Aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import vision from "../assets/vision.png";
import mission from "../assets/missiom.png";
import gm3 from "../assets/gm3.gif";
import innovation from "../assets/inovation.gif";
import collaboration from "../assets/colab.gif";
import excellence from "../assets/excel2.png";
import adaptability from "../assets/adapt.gif";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="about-us-container3">
                <div className="spline-container3">
                    <Spline scene="https://prod.spline.design/tOGcnKiH5DIbLFdB/scene.splinecode" />
                    <h1 className="about-us-heading3">About Us</h1>
                </div>

                <section className="about-section3">
                    <h2 className="section-heading3">Our Vision</h2>
                    <div className="about-content3">
                        <p className="section-text3">
                            We envision a future where technology unites with human potential to address complex challenges.
                            Our vision is to harness advanced technology for intelligent, scalable solutions that drive meaningful
                            change across industries.
                        </p>
                        <img src={vision} alt="Vision" className="about-image3" />
                    </div>
                </section>

                <section className="about-section3">
                    <h2 className="section-heading3">Our Mission</h2>
                    <div className="about-content3">
                        <p className="section-text3">
                            At Protonix AI, we turn complex challenges into efficient digital solutions, empowering businesses
                            to excel in a fast-paced world. With innovation and agility, we bring your vision to life—whether
                            through advanced web platforms, mobile apps, or intelligent technology-driven systems.
                        </p>
                        <img src={mission} alt="Mission" className="about-image3" />
                    </div>
                </section>

                <section className="about-section3">
                    <h2 className="section-heading3">Our Values</h2>
                    <p className="text-area3" style={{ textAlign: "center" }}>
                        At Protonix AI, we are driven by our core values: integrity, innovation, collaboration, excellence,
                        and sustainability.
                    </p>
                </section>

                <section className="values-container">
                    <div className="item">
                        <div className="circle"><img src={gm3} alt="Growth Mindset" /></div>
                        <div className="title">Growth Mindset</div>
                        <div className="description">We embrace challenges and learn continuously to unlock our full potential.</div>
                    </div>
                    <div className="item">
                        <div className="circle"><img src={innovation} alt="Innovation" /></div>
                        <div className="title">Innovation</div>
                        <div className="description">We foster creativity to build solutions that shape the future.</div>
                    </div>
                    <div className="item">
                        <div className="circle"><img src={collaboration} alt="Collaboration" /></div>
                        <div className="title">Collaboration</div>
                        <div className="description">We believe teamwork and diversity drive excellence.</div>
                    </div>
                    <div className="item">
                        <div className="circle"><img src={excellence} alt="Excellence" /></div>
                        <div className="title">Excellence</div>
                        <div className="description">We are committed to setting high standards and exceeding expectations.</div>
                    </div>
                    <div className="item">
                        <div className="circle"><img src={adaptability} alt="Adaptability" /></div>
                        <div className="title">Adaptability</div>
                        <div className="description">We thrive in change, evolving with new technologies and trends.</div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;


import "../Css/Testimonial.css";
import img1 from "../assets/ceo3.png";
import img2 from "../assets/TECHADV.png";

const testimonials = [
    {
        name: "JASHANK DESAI",
        title: "CEO & Founder",
        image: img1,
        quote: "In leadership, I believe that success comes not just from navigating the present, but from envisioning a future where every challenge is an opportunity and innovation knows no boundaries.",
        linkedin: "https://www.linkedin.com/in/jashank-desai-72b9a311b"
    },
    {
        name: "SUNIL KUMAR",
        title: "TECHNICAL ADVISOR",
        image: img2,
        quote: "With extensive industrial experience in AI, Sunil Kumar drives innovation and excellence in our solutions. Guided by their expertise, we stay ahead in delivering transformative technology.",
        linkedin: "https://www.linkedin.com/in/prof-sunil-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
];

const Testimonial = () => {
    return (
        <section className="testimonial-one1">
            

            <div className="auto-container1">
                <div className="sec-title1">
                    <h2 className="sec-title_heading1">Founders & Leaders</h2>
                </div>
                <div className="testimonial-container1">
                    {testimonials.map((testimonial, index) => (
                        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="testimonial-card1" key={index}>
                            <div className="testimonial-block_one-inner1">
                                <div className="testimonial-block_one-content1">
                                    <div className="testimonial-block_one-author1">
                                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image1" />
                                    </div>
                                    <h5 className="testimonial-block_one-name1">{testimonial.name}</h5>
                                    <div className="testimonial-block_one-designation1">{testimonial.title}</div>
                                </div>
                                <div className="testimonial-block_one-lower1">
                                    {testimonial.quote}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;

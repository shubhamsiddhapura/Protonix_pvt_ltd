
import '../Css/Services.css';
import i1 from "../assets/I1.png"
import i2 from "../assets/I2.png"
import i3 from "../assets/I3.png"
import i4 from "../assets/I4.png"
import i5 from "../assets/I5.png"
import i6 from "../assets/I6.png"
import i7 from "../assets/I7.png"
import i8 from "../assets/I8.png"
import i9 from "../assets/I9.png"


const servicesList = [
    { name: "Web Development", icon: i1 },
    { name: "App Development", icon: i2 },
    { name: "UI/UX Design", icon: i3 },
    { name: "SEO Optimization", icon: i4 },
    { name: "Digital Marketing", icon: i5 },
    { name: "Cloud Computing", icon: i6 },
    { name: "AI & ML Solutions", icon: i7 },
    { name: "Cybersecurity", icon: i8 },
    { name: "Blockchain Development", icon: i9 }
];

const Services = () => {
    return (
        <div className="services-container1">
            <div className="services-header1">
                <h1>SERVICES</h1>
            </div>
            
            <div className="services-grid1">
                {servicesList.map((service, index) => (
                    <div className="service-box1" key={index}>
                        <img src={service.icon} alt={service.name} className="service-icon1" />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;

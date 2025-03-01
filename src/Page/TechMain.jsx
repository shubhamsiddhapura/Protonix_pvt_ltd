import Spline from '@splinetool/react-spline';
import { 
    Code, Database, Cloud, TestTube, 
    Atom, Layers, Hexagon, Boxes,
    Server, FileCode, PanelLeft, Workflow,
    CloudCog, CloudLightning, CloudRain,
    Smartphone, Tablet, Beaker, Bug
} from 'lucide-react';
import '../Css/Tech.css';
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import { useNavigate } from 'react-router-dom';

// Importing Local Images
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import JavaScript from "../assets/tech/javascript.png";
import Java from "../assets/tech/java.png";
import kotlin from "../assets/tech/kotlin.png";
import react from "../assets/tech/react.png";
import reactnative from "../assets/tech/react.png";
import python from "../assets/tech/python.png";
import swift from "../assets/tech/swift.png";
import angular from "../assets/tech/angularjs.png";
import nodejs from "../assets/tech/nodejs.png";
import csharp from "../assets/tech/c-sharp.png";
import Flutter from "../assets/tech/flutter.png";
import cicd from "../assets/tech/cicid.png";
import devops from "../assets/tech/devops.png";
import aws from "../assets/tech/aws.svg";
import manual from "../assets/tech/manual.png";
import automated from "../assets/tech/automated.png";
import vapt from "../assets/tech/vapt.png";
import software from "../assets/tech/software.png";

const Technology = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Frontend",
            icon: <Code className="icon-lg icon-blue" />,
            cssClass: "frontend-header",
            route: "/frontend",
            items: [
                { name: "HTML", description: "Markup language for the web", icon: <Atom className="icon-sm icon-blue" />, image: html },
                { name: "CSS", description: "Style sheet language", icon: <Layers className="icon-sm icon-green" />, image: css },
                { name: "JavaScript", description: "Programming language of the web", icon: <Hexagon className="icon-sm icon-yellow" />, image: JavaScript },
                { name: "React", description: "UI library for building user interfaces", icon: <Boxes className="icon-sm icon-gray" />, image: react },
                { name: "Angular", description: "Web framework by Google", icon: <Hexagon className="icon-sm icon-red" />, image: angular }
            ]
        },
        {
            title: "Backend",
            icon: <Database className="icon-lg icon-green" />,
            cssClass: "backend-header",
            route: "/backend",
            items: [
                { name: "Node.js", description: "JavaScript runtime", icon: <Server className="icon-sm icon-green" />, image: nodejs },
                { name: "Java", description: "Object-oriented programming language", icon: <FileCode className="icon-sm icon-blue" />, image: Java },
                { name: "Python", description: "High-level programming language", icon: <PanelLeft className="icon-sm icon-green" />, image: python },
                { name: "C#", description: "Microsoft's modern language", icon: <Workflow className="icon-sm icon-purple" />, image: csharp }
            ]
        },
        {
            title: "Cloud",
            icon: <Cloud className="icon-lg icon-purple" />,
            cssClass: "cloud-header",
            route: "/cloud",
            items: [
                { name: "AWS", description: "Amazon Web Services", icon: <CloudCog className="icon-sm icon-orange" />, image: aws },
                { name: "CI/CD", description: "Continuous Integration & Deployment", icon: <CloudLightning className="icon-sm icon-blue" />, image: cicd },
                { name: "DevOps", description: "Software development & IT operations", icon: <CloudRain className="icon-sm icon-blue" />, image: devops }
            ]
        },
        {
            title: "App Development",
            icon: <Smartphone className="icon-lg icon-blue" />,
            cssClass: "appdev-header",
            route: "/app-development",
            items: [
                { name: "React Native", description: "Mobile framework by Meta", icon: <Smartphone className="icon-sm icon-blue" />, image: reactnative },
                { name: "Flutter", description: "Google's UI toolkit", icon: <Tablet className="icon-sm icon-blue" />, image: Flutter },
                { name: "Kotlin", description: "Modern Android development language", icon: <Tablet className="icon-sm icon-blue" />, image: kotlin },
                { name: "Swift", description: "Apple's iOS development language", icon: <Tablet className="icon-sm icon-blue" />, image: swift }
            ]
        },
        {
            title: "Testing",
            icon: <TestTube className="icon-lg icon-red" />,
            cssClass: "testing-header",
            route: "/testing",
            items: [
                { name: "Manual Testing", description: "Human-driven testing process", icon: <Beaker className="icon-sm icon-red" />, image: manual },
                { name: "Automated Testing", description: "Scripted testing procedures", icon: <Bug className="icon-sm icon-green" />, image: automated },
                { name: "VAPT", description: "Security testing methodology", icon: <Bug className="icon-sm icon-green" />, image: vapt },
                { name: "Software Testing", description: "Ensuring software quality", icon: <Bug className="icon-sm icon-green" />, image: software }
            ]
        }
    ];

    return (
        <div className="tech-container">
            <Navbar />
            
            {/* Spline Background */}
            <div className="spline-bg23">
                <Spline scene="https://prod.spline.design/xtr2ICeok5ASwezW/scene.splinecode" />
            </div>

            <div className="tech-content">
                {/* Header Section */}
                <div className="tech-header">
                    <h2 className="tech-title">Technology Stack</h2>
                    <p className="tech-subtitle">Explore our comprehensive technology offerings</p>
                </div>

                {/* Technology Grid */}
                <div className="tech-grid">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className="tech-category" 
                            onClick={() => navigate(category.route)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className={`category-header ${category.cssClass}`}>
                                {category.icon}
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="items-grid">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="tech-item">
                                        <div className="item-header">
                                            {item.icon}
                                            <h4 className="item-title">{item.name}</h4>
                                        </div>
                                        <p className="item-description">{item.description}</p>
                                        <img src={item.image} alt={`${item.name} illustration`} className="item-image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Technology;

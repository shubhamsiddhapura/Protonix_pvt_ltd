
import "../Css/Proccess.css";
import i1 from "../assets/project.gif";
import i2 from "../assets/analysis.gif";
import i3 from "../assets/strategic-planning.gif";
import i4 from "../assets/implementation.gif"
import i5 from "../assets/test.gif";

const steps = [
  {
    step: "1",
    title: "Planning",
    description:"Strategic planning to align solutions with your unique business goals and needs.",
    image: i1,
  },
  {
    step: "2",
    title: "Maintenance",
    description:"Ongoing maintenance to ensure reliability, security, and peak performance.",
    image:i5,
  },
  {
    step: "3",
    title: "Testing & Integration",
    description: "Rigorous testing and integration to ensure flawless performance and cohesion.",
    image: i5,
    
  },
  {
    step: "4",
    
    title: "Analysis",
    description:"In-depth analysis to uncover insights and guide informed decision-making.",
    image: i2,
  },
  {
    step: "5",
    title: "Designing",
    description:"Creative design focused on functionality, user experience, and innovation.",
    image: i3,
  },
  {
    step: "6",
    title: "Implementation",
    description: "Seamless implementation to bring solutions from concept to reality.",
    image: i4,
  },
];

const Process = () => {
  return (
    <div className="process-wrapper" id="process-section">
      <div className="orbit">
        <div className="orbit-circle outer"></div>
        <div className="orbit-circle middle"></div>
        <div className="orbit-circle inner"></div>
      </div>
      <div className="steps-container">
        <div className="steps-column left">
          {steps.slice(0, 3).map((step) => (
            <div className="step-box" key={step.step}>
              <div className="icon">
                <img src={step.image} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="center-circle">
          <h2 className="h111">Process We Follow</h2>
        </div>
        <div className="steps-column right">
          {steps.slice(3).map((step) => (
            <div className="step-box" key={step.step}>
              <div className="icon">
                <img src={step.image} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

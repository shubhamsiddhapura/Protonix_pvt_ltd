import "../Css/Chooseus.css";
import Spline from "@splinetool/react-spline";

// Features Data
const featuresData = [
  { title: 'Innovative Strategies', description: 'Developing cutting-edge solutions to keep you ahead of trends.', icon: '💡' },
  { title: 'Quality Service', description: 'We ensure the highest quality in all our services.', icon: '🏆' },
  { title: 'Expert Team', description: 'Our team is composed of industry experts.', icon: '👥' },
  { title: 'Custom Solutions', description: 'We tailor solutions to meet your unique needs.', icon: '🎯' }
];

const Chooseus = () => {
  return (
    <div className="chooseus-container1">
      {/* Spline Scene as background */}
      <div className="spline-background1">
        <Spline scene="https://prod.spline.design/3n3JoNX0L3HHgful/scene.splinecode" />
      </div>

      {/* Features Section */}
      <div className="features-section1">
        <h2>Why Choose Us?</h2>
        <div className="features-container1">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card1">
              <div className="feature-icon1">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chooseus;

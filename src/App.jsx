import { Routes, Route } from "react-router-dom"; // Import Navbar
import Home from "./Page/Homepage";
import Services from "./Page/ServicesMainpage";  // Ensure correct capitalization
import Technology from "./page/TechMainpage";
import About from "./page/AboutUs";
import Contact from "./page/ContactUsMain";
import PrivacyPolicy from "./Page/PricyPolicy";
import Term from "./Page/Term&Condi"
import FrontendPage from "./Page/Frontend"
import BackendPage from "./Page/Backend"
import CloudPage from "./Page/Cloud"
import AppDevelopmentPage from "./Page/Appdev"
import TestingPage from "./Page/Testing"
import ServiceMain from "./Page/ServicesMainpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<Term/>}/>
        <Route path="/" element={<Technology />} />
                <Route path="/frontend" element={<FrontendPage />} />
                <Route path="/backend" element={<BackendPage />} />
                <Route path="/cloud" element={<CloudPage />} />
                <Route path="/app-development" element={<AppDevelopmentPage />} />
                 <Route path="/testing" element={<TestingPage />} /> 
                 <Route path="/" element={<Services />} />
                <Route path="/servicemain" element={<ServiceMain />} />

      </Routes>
    </>
  );
}

export default App;

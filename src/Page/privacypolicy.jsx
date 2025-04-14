import "../Css/PrivcayPolicy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p>
          Thank you for choosing to be part of our community at Protonix Ai Pvt. Ltd. 
          (“Company”, “we”, “us”, “our”). We are committed to protecting your 
          personal information and your right to privacy. If you have any questions 
          or concerns about this privacy notice, please contact us at 
          <a href="mailto:info@protonix.tech"> info@protonix.tech</a>.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, phone number, and email address.</li>
          <li><strong>Non-Personal Information:</strong> IP address, browser type, and operating system.</li>
        </ul>

        <h2>2. How We Collect Information</h2>
        <ul>
          <li><strong>Directly from You:</strong> When you sign up, contact us, or subscribe to updates.</li>
          <li><strong>Automatically:</strong> Using cookies, log files, and tracking technologies.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To communicate with you regarding inquiries, updates, and promotions.</li>
          <li>To analyze and improve our website and services.</li>
          <li>To comply with legal requirements.</li>
        </ul>

        <h2>4. Sharing and Disclosure of Information</h2>
        <ul>
          <li><strong>With Service Providers:</strong> Third-party hosting, analytics, or payment providers.</li>
          <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and users.</li>
        </ul>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. You can set your 
          browser to refuse cookies, but some website features may not work properly.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement security measures to protect your data, but no internet transmission 
          is 100% secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your data as long as necessary for the purposes outlined. You may 
          request deletion at any time.
        </p>

        <h2>8. Your Rights</h2>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data.</li>
          <li><strong>Correction:</strong> Correct inaccuracies in your personal data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications.</li>
        </ul>

        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for their 
          privacy practices.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Any changes will be posted with an updated 
          Effective Date.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

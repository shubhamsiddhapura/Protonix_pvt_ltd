import '../Css/Term&condi.css';
import Footer from './Footer';
import Navbar from './Navbar';

const TermAndCondi = () => {
  return (
    <div>
      <Navbar />
      <div className="terms-page-container">
        <h1 className="terms-page-title">Terms and Conditions</h1>
        <p className="terms-page-text">
          Protonix Ai Pvt. Ltd. (hereinafter referred to as "Protonix Ai") maintains this website ("Site") for
          information regarding our products and services. Please feel free to browse the Site.
        </p>
        <p className="terms-page-text">
          Your access to and use of the Site is subject to the following terms and conditions, including any future
          revisions ("Terms and Conditions"), and all applicable laws. By accessing and browsing the Site, you accept
          these Terms and Conditions.
        </p>
        <h2 className="terms-page-section-title">1. Use of the Site</h2>
        <p className="terms-page-text">
          The Site, and all the content, materials, information, software, products, and services provided on the Site,
          are provided on an "as is" and "as available" basis. Protonix Ai expressly disclaims all warranties of any
          kind, whether express or implied.
        </p>
        <h2 className="terms-page-section-title">2. Changes to Content</h2>
        <p className="terms-page-text">
          The content and the projects described or depicted on the Site are subject to change without notice.
          Unauthorized reproduction or use of the materials may be a violation of applicable copyright laws.
        </p>
        <h2 className="terms-page-section-title">3. Limitation of Liability</h2>
        <p className="terms-page-text">
          Protonix Ai assumes no responsibility and shall not be liable for any damages to, or viruses that may infect,
          your computer, equipment, or other property on account of your access to, use of, or browsing the Site.
        </p>
        <h2 className="terms-page-section-title">4. Intellectual Property</h2>
        <p className="terms-page-text">
          Materials displayed on the Site are either the property of Protonix Ai or are used with permission. The use of
          these materials by you or anyone else authorized by you is prohibited unless expressly permitted.
        </p>
        <h2 className="terms-page-section-title">5. Third-Party Links</h2>
        <p className="terms-page-text">
          Protonix Ai is not responsible for the content of any other site linked to or from the Site. Your linking to
          any other site is entirely at your own risk.
        </p>
        <h2 className="terms-page-section-title">6. User Conduct</h2>
        <p className="terms-page-text">
          You are prohibited from posting or transmitting any unlawful, threatening, harassing, defamatory, libelous,
          obscene, or profane material.
        </p>
        <h2 className="terms-page-section-title">7. Changes to Terms and Conditions</h2>
        <p className="terms-page-text">
          Protonix Ai may revise these Terms and Conditions at any time by updating this post. Please visit this page
          regularly to stay informed about any changes.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermAndCondi;

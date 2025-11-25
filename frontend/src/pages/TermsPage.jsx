import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body:
      'By accessing or using mujtabaalmas.me ("the Site"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of this website immediately.'
  },
  {
    title: '2. Intellectual Property Rights',
    body:
      'All content on this Site, including but not limited to text, graphics, logos, code snippets, blog articles, project descriptions, and design elements, are the intellectual property of Mujtaba Almas unless otherwise stated. You may reference or share content for educational purposes with proper attribution, but commercial redistribution without prior written consent is strictly prohibited.'
  },
  {
    title: '3. Use of Content & Code',
    body:
      'Code snippets and tutorials published on this Site are provided for educational purposes. You are free to use them in your personal and commercial projects. However, you may not republish entire articles or tutorials as your own work. Attribution is appreciated but not required for code snippets used in your projects.'
  },
  {
    title: '4. User Conduct',
    body:
      'When using the contact form or any interactive features, you agree not to submit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable. You also agree not to attempt to gain unauthorized access to any portion of the Site or any systems connected to it.'
  },
  {
    title: '5. Contact Form & Communications',
    body:
      'When you submit a message through the contact form, you grant permission for me to respond via the email address provided. All correspondence may be retained for record-keeping purposes. Your contact information will never be sold or shared with third parties for marketing purposes.'
  },
  {
    title: '6. External Links',
    body:
      'This Site may contain links to external websites, including GitHub repositories, LinkedIn profiles, and other third-party resources. These links are provided for convenience and do not signify endorsement. I am not responsible for the content, privacy practices, or terms of any external sites.'
  },
  {
    title: '7. Disclaimer of Warranties',
    body:
      'This Site and its content are provided "as is" without warranties of any kind, either express or implied. While I strive to keep information accurate and up-to-date, I make no representations about the completeness, accuracy, reliability, or suitability of the content for any particular purpose.'
  },
  {
    title: '8. Limitation of Liability',
    body:
      'In no event shall Mujtaba Almas be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this Site or any content provided herein.'
  },
  {
    title: '9. Modifications to Terms',
    body:
      'These Terms of Service may be updated from time to time to reflect changes in practices or legal requirements. The "Last updated" date at the top of this page will indicate when the most recent changes were made. Continued use of the Site after any modifications constitutes acceptance of the updated terms.'
  },
  {
    title: '10. Governing Law',
    body:
      'These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.'
  },
  {
    title: '11. Contact Information',
    body:
      'If you have any questions about these Terms of Service, please contact me at insights.mujtaba@gmail.com.'
  }
]

const TermsPage = () => (
  <div className="container page-container">
    <section className="legal-hero">
        <div className="legal-main-headings">
          <h1>Terms &amp; Conditions for Using This Site</h1>
          <h1 className="legal-privacy-heading">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          </h1>
        </div>
        <p className="legal-intro">
          Please read these terms carefully before using mujtabaalmas.me. By accessing this website, you agree to be bound by these terms.
        </p>
        <p className="legal-date">Last updated: November 25, 2025</p>
    </section>

    <section className="legal-content">
      {sections.map((item) => (
        <article key={item.title} className="legal-section">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
      ))}

      <div className="legal-links">
        <p>Related policies:</p>
        <div className="legal-links-row">
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          <Link to="/cookies" className="legal-link">Cookie Policy</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)

export default TermsPage

import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Information We Collect',
    subsections: [
      {
        subtitle: 'Information You Provide',
        content:
          'When you use the contact form, we collect your name, email address, company name (optional), and the message you submit. This information is collected solely to respond to your inquiries and is never sold or shared with third parties for marketing purposes.'
      },
      {
        subtitle: 'Automatically Collected Information',
        content:
          'When you visit the Site, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected through cookies and similar technologies to improve site performance and user experience.'
      }
    ]
  },
  {
    title: '2. How We Use Your Information',
    content:
      'We use the information collected for the following purposes:',
    list: [
      'To respond to your inquiries and contact requests',
      'To improve and optimize the website experience',
      'To analyze site traffic and usage patterns',
      'To maintain the security and integrity of the Site',
      'To comply with legal obligations'
    ]
  },
  {
    title: '3. Data Storage & Security',
    content:
      'Your personal information is stored securely using industry-standard practices. Contact form submissions are processed through secure channels. While we implement appropriate security measures, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
  },
  {
    title: '4. Data Retention',
    content:
      'Messages submitted through the contact form are retained only as long as necessary to continue the conversation or document prior communications. Analytics data is retained in aggregated, anonymized form. You can request deletion of your personal data at any time by emailing insights.mujtaba@gmail.com.'
  },
  {
    title: '5. Third-Party Services',
    content:
      'This Site may use third-party services for analytics, hosting, and functionality. These services may collect information as described in their respective privacy policies:',
    list: [
      'GitHub - for repository hosting and project links',
      'Netlify/Vercel - for website hosting',
      'Google Analytics - for website analytics (if enabled)'
    ]
  },
  {
    title: '6. Cookies',
    content:
      'We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about the cookies we use and your choices, please see our Cookie Policy.',
    hasLink: true,
    linkTo: '/cookies',
    linkText: 'Cookie Policy'
  },
  {
    title: '7. Your Rights',
    content:
      'Depending on your location, you may have certain rights regarding your personal data, including:',
    list: [
      'The right to access your personal data',
      'The right to correct inaccurate data',
      'The right to request deletion of your data',
      'The right to restrict processing of your data',
      'The right to data portability',
      'The right to withdraw consent'
    ],
    additionalContent:
      'To exercise any of these rights, please contact me at insights.mujtaba@gmail.com.'
  },
  {
    title: '8. Children\'s Privacy',
    content:
      'This Site is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
  },
  {
    title: '9. International Data Transfers',
    content:
      'If you are accessing this Site from outside Pakistan, please be aware that your information may be transferred to, stored, and processed in Pakistan or other countries where our service providers operate.'
  },
  {
    title: '10. Updates to This Policy',
    content:
      'This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.'
  },
  {
    title: '11. Contact Us',
    content:
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:',
    contactInfo: {
      name: 'Mujtaba Almas',
      email: 'insights.mujtaba@gmail.com',
      location: 'Lahore, Pakistan'
    }
  }
]

const PrivacyPage = () => (
  <div className="container page-container">
    <section className="legal-hero">
      <h1>How Your Data is Collected & Protected</h1>
      <p className="legal-intro">
        Your privacy matters. This policy explains what information we collect, how we use it, and your rights regarding your personal data.
      </p>
      <p className="legal-date">Last updated: November 25, 2025</p>
    </section>

    <section className="legal-content">
      {sections.map((item) => (
        <article key={item.title} className="legal-section">
          <h2>{item.title}</h2>
          
          {item.subsections ? (
            item.subsections.map((sub) => (
              <div key={sub.subtitle} className="legal-subsection">
                <h3>{sub.subtitle}</h3>
                <p>{sub.content}</p>
              </div>
            ))
          ) : (
            <>
              <p>{item.content}</p>
              
              {item.list && (
                <ul className="legal-list">
                  {item.list.map((listItem, idx) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              )}
              
              {item.additionalContent && <p>{item.additionalContent}</p>}
              
              {item.hasLink && (
                <p>
                  <Link to={item.linkTo} className="legal-inline-link">
                    {item.linkText} →
                  </Link>
                </p>
              )}
              
              {item.contactInfo && (
                <div className="legal-contact-info">
                  <p><strong>{item.contactInfo.name}</strong></p>
                  <p>
                    Email:{' '}
                    <a href={`mailto:${item.contactInfo.email}`} className="legal-inline-link">
                      {item.contactInfo.email}
                    </a>
                  </p>
                  <p>Location: {item.contactInfo.location}</p>
                </div>
              )}
            </>
          )}
        </article>
      ))}

      <div className="legal-links">
        <p>Related policies:</p>
        <div className="legal-links-row">
          <Link to="/terms" className="legal-link">Terms of Service</Link>
          <Link to="/cookies" className="legal-link">Cookie Policy</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)

export default PrivacyPage

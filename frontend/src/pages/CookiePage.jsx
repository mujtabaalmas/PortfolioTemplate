import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const cookieTypes = [
  {
    title: 'Essential Cookies',
    badge: 'Required',
    badgeType: 'required',
    description:
      'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function properly without them.',
    examples: [
      { name: 'Session ID', purpose: 'Maintains your session while browsing', duration: 'Session' },
      { name: 'Security Token', purpose: 'Prevents cross-site request forgery', duration: 'Session' },
      { name: 'Theme Preference', purpose: 'Remembers your dark/light mode choice', duration: '1 year' }
    ]
  },
  {
    title: 'Analytics Cookies',
    badge: 'Optional',
    badgeType: 'optional',
    description:
      'These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. This data helps improve site performance and user experience.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics - Distinguishes users', duration: '2 years' },
      { name: '_gid', purpose: 'Google Analytics - Distinguishes users', duration: '24 hours' },
      { name: '_gat', purpose: 'Google Analytics - Throttles request rate', duration: '1 minute' }
    ]
  },
  {
    title: 'Functional Cookies',
    badge: 'Optional',
    badgeType: 'optional',
    description:
      'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we use.',
    examples: [
      { name: 'Language', purpose: 'Remembers your language preference', duration: '1 year' },
      { name: 'Font Size', purpose: 'Stores accessibility preferences', duration: '1 year' }
    ]
  }
]

const browserGuides = [
  { browser: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  { browser: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
  { browser: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  { browser: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
]

const CookiePage = () => (
  <div className="container page-container">
    <section className="legal-hero">
      <h1>How We Use Cookies on This Site</h1>
      <p className="legal-intro">
        This policy explains what cookies are, how we use them, and how you can control your cookie preferences.
      </p>
      <p className="legal-date">Last updated: November 25, 2025</p>
    </section>

    <section className="legal-content">
      <article className="legal-section">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
          They are widely used to make websites work more efficiently, provide a better user experience, and give website 
          owners useful information about how their site is being used.
        </p>
        <p>
          Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" cookies 
          (deleted when you close your browser).
        </p>
      </article>

      <article className="legal-section">
        <h2>Types of Cookies We Use</h2>
        <p>
          Below is a breakdown of the different types of cookies used on mujtabaalmas.me:
        </p>
      </article>

      {cookieTypes.map((type) => (
        <article key={type.title} className="legal-section cookie-type-section">
          <div className="cookie-header">
            <h2>{type.title}</h2>
            <span className={`cookie-badge cookie-badge-${type.badgeType}`}>{type.badge}</span>
          </div>
          <p>{type.description}</p>
          
          <div className="cookie-table-wrapper">
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {type.examples.map((cookie) => (
                  <tr key={cookie.name}>
                    <td><code>{cookie.name}</code></td>
                    <td>{cookie.purpose}</td>
                    <td>{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      ))}

      <article className="legal-section">
        <h2>Third-Party Cookies</h2>
        <p>
          Some cookies may be placed by third-party services that appear on our pages. We do not control the use of these 
          cookies and cannot access them. These third parties have their own privacy and cookie policies, which we 
          encourage you to review.
        </p>
        <p>Third-party services that may set cookies include:</p>
        <ul className="legal-list">
          <li>Google Analytics (for website analytics)</li>
          <li>GitHub (for embedded repository widgets)</li>
          <li>LinkedIn (for embedded profile badges)</li>
        </ul>
      </article>

      <article className="legal-section">
        <h2>Managing Your Cookie Preferences</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in 
          several ways:
        </p>
        
        <div className="legal-subsection">
          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can set your browser to block 
            cookies, delete existing cookies, or notify you when a cookie is set. Here are links to cookie settings 
            for popular browsers:
          </p>
          <ul className="legal-list browser-list">
            {browserGuides.map((guide) => (
              <li key={guide.browser}>
                <a href={guide.url} target="_blank" rel="noopener noreferrer" className="legal-inline-link">
                  {guide.browser} Cookie Settings →
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="legal-subsection">
          <h3>Opt-Out Tools</h3>
          <p>
            For analytics cookies, you can use the following opt-out tools:
          </p>
          <ul className="legal-list">
            <li>
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="legal-inline-link"
              >
                Google Analytics Opt-out Browser Add-on →
              </a>
            </li>
          </ul>
        </div>
      </article>

      <article className="legal-section">
        <h2>Impact of Disabling Cookies</h2>
        <p>
          Please note that if you choose to block or delete cookies, some features of the website may not work as 
          intended. For example:
        </p>
        <ul className="legal-list">
          <li>Your theme preference (dark/light mode) may not be saved</li>
          <li>Some interactive features may not function properly</li>
          <li>You may need to re-enter information more frequently</li>
        </ul>
        <p>
          Essential cookies cannot be disabled as they are required for the basic operation of the website.
        </p>
      </article>

      <article className="legal-section">
        <h2>Updates to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our 
          data practices. When we make changes, we will update the "Last updated" date at the top of this page. 
          We encourage you to periodically review this policy for the latest information.
        </p>
      </article>

      <article className="legal-section">
        <h2>Questions?</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact me at{' '}
          <a href="mailto:insights.mujtaba@gmail.com" className="legal-inline-link">
            insights.mujtaba@gmail.com
          </a>
        </p>
      </article>

      <div className="legal-links">
        <p>Related policies:</p>
        <div className="legal-links-row">
          <Link to="/terms" className="legal-link">Terms of Service</Link>
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
)

export default CookiePage

import { CONTACT_LINKS, FOOTER_NAV } from '../constants/content'

const formatLabel = (href) => href.replace('#', '').replace(/^[a-z]/, (match) => match.toUpperCase())

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-brand-identity">
          <img src="/assets/logo.svg" alt="Mujtaba logo" className="footer-brand-logo" />
          <h3 className="footer-brand-title text-gradient">Mujtaba Almas</h3>
        </div>
        <p className="footer-brand-tagline">Backend Engineer crafting scalable APIs & systems</p>
      </div>
      <div className="footer-section">
        <h4 className="footer-section-title">Navigation</h4>
        <ul className="footer-section-links">
          {FOOTER_NAV.primary.map((href) => (
            <li key={href}>
              <a href={href} className="footer-link">
                {formatLabel(href)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section-title">More</h4>
        <ul className="footer-section-links">
          {FOOTER_NAV.secondary.map((href) => (
            <li key={href}>
              <a href={href} className="footer-link">
                {formatLabel(href)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section-title">Connect</h4>
        <ul className="footer-section-links">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="footer-copyright">© {new Date().getFullYear()} Mujtaba Almas. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer

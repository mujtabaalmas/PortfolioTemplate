import { memo } from 'react'
import { CONTACT_LINKS } from '../constants/content'

const SOCIAL_ICONS = {
  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.217l8 5.066 8-5.066V7H4zm16 10V9.383l-7.385 4.674a1.5 1.5 0 01-1.23.14 1.5 1.5 0 01-.385-.14L4 9.383V17h16z"
      />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.371 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.262.793-.579v-2.234c-3.338.727-4.033-1.415-4.033-1.415-.546-1.388-1.333-1.757-1.333-1.757-1.089-.744.083-.728.083-.728 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.306.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.312.469-2.382 1.236-3.222-.124-.302-.535-1.522.117-3.175 0 0 1.008-.323 3.301 1.23a11.63 11.63 0 016.009 0c2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.175.77.84 1.235 1.91 1.235 3.222 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.103.823 2.223v3.293c0 .318.192.694.801.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.983 3.5a2.319 2.319 0 11-.002 4.638 2.319 2.319 0 01.002-4.638zM2.4 21h5.168V8.977H2.4V21zM9.73 8.977V21h5.033v-6.465c0-3.447 4.46-3.731 4.46 0V21H24V13.62c0-6.155-6.677-5.922-8.205-2.894V8.977H9.73z"
      />
    </svg>
  )
}

const Footer = () => (
  <footer className="footer">
    <div className="footer-connect-row">
      <h4 className="footer-section-title">Connect</h4>
      <div className="footer-socials">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            aria-label={`Go to ${link.label}`}
            className={`footer-social-button footer-social-${link.label.toLowerCase()}`}
          >
            {SOCIAL_ICONS[link.label]}
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default memo(Footer)

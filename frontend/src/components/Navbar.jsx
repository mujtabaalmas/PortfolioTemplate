import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../constants/content'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen || typeof document === 'undefined') return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : originalOverflow
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-brand">
          <img src="/assets/logo.svg" alt="Mujtaba logo" className="brand-logo" />
          <span className="brand-name">Mujtaba</span>
        </a>

        <button
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu-content" onClick={(event) => event.stopPropagation()}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="mobile-menu-link" onClick={closeMobileMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

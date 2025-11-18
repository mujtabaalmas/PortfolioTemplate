import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../constants/content'
import useSectionNavigation from '../hooks/useSectionNavigation'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const goToSection = useSectionNavigation()

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

  const handleBrandClick = (event) => {
    event.preventDefault()
    closeMobileMenu()
    goToSection('#hero')
  }

  const handleNavigation = (href) => {
    if (!href) return
    if (href.startsWith('#')) {
      goToSection(href)
      return
    }
    navigate(href)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" aria-label="Go to home" onClick={handleBrandClick}>
          <img src="/assets/logo.svg" alt="Mujtaba logo" className="brand-logo" />
        </Link>

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
            <button
              key={link.href}
              type="button"
              className="navbar-link navbar-link-button"
              onClick={() => handleNavigation(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu-content" onClick={(event) => event.stopPropagation()}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              className="mobile-menu-link"
              onClick={() => {
                handleNavigation(link.href)
                closeMobileMenu()
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

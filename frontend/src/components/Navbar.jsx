import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../constants/content'
import useSectionNavigation from '../hooks/useSectionNavigation'

const ICON_MAP = {
  home: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 11.5 12 4l9 7.5V20a1 1 0 01-1 1h-4.5a1 1 0 01-1-1v-4.5h-5V20a1 1 0 01-1 1H4a1 1 0 01-1-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  skills: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 5v14M18 5v14M6 9h6M18 13h-6M6 17h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  projects: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  ),
  experience: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 9h16v10H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V7a2 2 0 012-2h2a2 2 0 012 2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  posts: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 4h9l3 3v13H6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12h6M9 16h6M9 8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  contact: (
    <svg className="navbar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 8l8 5 8-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
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

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    if (href === '/blog') {
      return location.pathname.startsWith('/blog')
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="navbar">
      <div className="navbar-floating">
        <Link to="/" className="navbar-brand" aria-label="Go to home" onClick={handleBrandClick}>
          <img src="/assets/logo.svg" alt="Mujtaba logo" className="brand-logo" />
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => {
            const Icon = ICON_MAP[link.icon]
            const isActive = isActiveLink(link.href)
            return (
              <button
                key={link.href}
                type="button"
                className={`navbar-icon-button ${isActive ? 'active' : ''}`}
                aria-label={link.label}
                title={link.label}
                data-label={link.label}
                onClick={() => handleNavigation(link.href)}
              >
                {Icon}
              </button>
            )
          })}
        </div>

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

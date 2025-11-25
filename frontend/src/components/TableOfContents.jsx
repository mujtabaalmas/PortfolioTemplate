import { memo, useEffect, useState } from 'react'

const TableOfContents = ({ htmlContent, isHtmlArticle = true }) => {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isHtmlArticle || !htmlContent) {
      setHeadings([])
      return
    }

    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(htmlContent, 'text/html')
      const headingElements = Array.from(doc.querySelectorAll('h1, h2'))
      
      const extractedHeadings = headingElements
        .map((heading) => {
          const text = heading.textContent?.trim() || ''
          const id = heading.id || text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')
          const level = parseInt(heading.tagName.substring(1))
          
          return text ? { id, text, level } : null
        })
        .filter(Boolean)
      
      setHeadings(extractedHeadings)
    } catch (error) {
      console.error('Error parsing headings:', error)
      setHeadings([])
    }
  }, [htmlContent, isHtmlArticle])

  useEffect(() => {
    if (headings.length === 0) return

    let activeHeadingId = ''

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all currently intersecting headings
        const intersectingEntries = entries.filter(entry => entry.isIntersecting)
        
        if (intersectingEntries.length > 0) {
          // Sort by position on screen (top to bottom)
          intersectingEntries.sort((a, b) => 
            a.boundingClientRect.top - b.boundingClientRect.top
          )
          
          // Use the topmost visible heading
          const topHeading = intersectingEntries[0]
          if (topHeading.target.id !== activeHeadingId) {
            activeHeadingId = topHeading.target.id
            setActiveId(topHeading.target.id)
          }
        } else {
          // If no headings are intersecting, find the one just above viewport
          const allHeadings = headings
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean)
          
          for (let i = allHeadings.length - 1; i >= 0; i--) {
            const rect = allHeadings[i].getBoundingClientRect()
            if (rect.top < window.innerHeight / 2) {
              if (allHeadings[i].id !== activeHeadingId) {
                activeHeadingId = allHeadings[i].id
                setActiveId(allHeadings[i].id)
              }
              break
            }
          }
        }
      },
      { 
        rootMargin: '-100px 0px -66% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    
    headingElements.forEach((element) => observer.observe(element))

    // Set initial active heading on mount
    if (headingElements.length > 0) {
      const firstVisible = headingElements.find(el => {
        const rect = el.getBoundingClientRect()
        return rect.top >= 0 && rect.top < window.innerHeight
      })
      if (firstVisible) {
        setActiveId(firstVisible.id)
      } else {
        setActiveId(headingElements[0].id)
      }
    }

    return () => {
      headingElements.forEach((element) => observer.unobserve(element))
    }
  }, [headings])

  const handleClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setActiveId(id)
      setIsOpen(false)
    }
  }

  if (headings.length === 0) return null

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="toc-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span>Contents</span>
      </button>

      {/* Table of Contents */}
      <nav className={`table-of-contents ${isOpen ? 'toc-open' : ''}`} aria-label="Table of contents">
        <div className="toc-header">
          <h4 className="toc-title">Table of Contents</h4>
          <button 
            className="toc-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close table of contents"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="toc-list">
          {headings.map(({ id, text, level }) => (
            <li key={id} className={`toc-item toc-level-${level}`}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`toc-link ${activeId === id ? 'toc-active' : ''}`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default memo(TableOfContents)

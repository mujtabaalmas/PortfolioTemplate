import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const BlogArticleLayout = ({ post }) => {
  const articleRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isHtmlArticle = Boolean(post.html)
  const structuredBlocks = useMemo(() => {
    if (isHtmlArticle) return []
    const sections = post.content ?? []
    return sections.map((section, index) => ({
      headingText: section.heading || `Section ${index + 1}`,
      displayIndex: String(index + 1).padStart(2, '0'),
      body: section.body || []
    }))
  }, [isHtmlArticle, post.content])

  useEffect(() => {
    if (!isHtmlArticle || !articleRef.current) return undefined
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAllUnder(articleRef.current)
    }
    return undefined
  }, [isHtmlArticle, post.html])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <article className="glass-panel blog-article">
      <div className={`blog-article-body ${isHtmlArticle ? 'blog-article-body--html' : ''}`}>
        {isHtmlArticle ? (
          <div ref={articleRef} className="blog-article-html" dangerouslySetInnerHTML={{ __html: post.html }} />
        ) : (
          structuredBlocks.map((section) => (
            <section key={section.displayIndex} className="blog-article-section">
              <h2>
                <span className="heading-index">{section.displayIndex}</span>
                {section.headingText}
              </h2>
              {section.body.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} style={{ whiteSpace: 'pre-line' }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))
        )}
      </div>

      {isMounted && showScrollTop && (
        createPortal(
          <button
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>,
          document.body
        )
      )}
    </article>
  )
}

export default BlogArticleLayout

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useThrottledScroll } from '../hooks/useThrottledScroll'

const BlogArticleLayout = memo(({ post }) => {
  const articleRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [processedHtml, setProcessedHtml] = useState(post.html || '')
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

  // Highlight after HTML is rendered/processed - optimized with max retry limit
  useEffect(() => {
    if (!isHtmlArticle || !articleRef.current) return undefined

    let cancelled = false
    let retries = 0
    const MAX_RETRIES = 20 // Max 2 seconds

    const tryHighlight = () => {
      if (cancelled || retries >= MAX_RETRIES) return
      if (typeof window !== 'undefined' && window.Prism) {
        try {
          window.Prism.highlightAllUnder(articleRef.current)
        } catch (e) {
          // ignore
        }
        return
      }
      retries++
      setTimeout(tryHighlight, 100)
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(tryHighlight, 50)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [isHtmlArticle, processedHtml])

  // Process raw HTML article on the client to add slugified ids and link wrappers for headings
  useEffect(() => {
    if (!isHtmlArticle || !post.html) {
      setProcessedHtml(post.html || '')
      return undefined
    }

    if (typeof window === 'undefined') {
      setProcessedHtml(post.html)
      return undefined
    }

    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(post.html, 'text/html')

      const used = new Set()
      const slugify = (text) => {
        const base = (text || '')
          .toString()
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/(^-|-$)/g, '')
        let slug = base || 'heading'
        let i = 1
        while (used.has(slug)) {
          slug = `${base}-${i}`
          i += 1
        }
        used.add(slug)
        return slug
      }

      const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      headings.forEach((h) => {
        const text = (h.textContent || '').trim()
        if (!text) return
        // If heading already contains a heading-link anchor, skip processing to avoid double-wrap
        const innerHtml = h.innerHTML || ''
        if (/class=["']?heading-link["']?/i.test(innerHtml) || /<a[^>]+href=["']?#/i.test(innerHtml)) return
        const id = h.id && h.id.trim() ? h.id.trim() : slugify(text)
        h.id = id
        const inner = h.innerHTML
        
        // Only make h1 and h2 clickable, leave h3-h6 as plain headings with ids
        const tagName = h.tagName.toLowerCase()
        if (tagName === 'h1' || tagName === 'h2') {
          h.innerHTML = `<a href="#${id}" class="heading-link">${inner}</a>`
        }
      })

      setProcessedHtml(doc.body.innerHTML)
    } catch (err) {
      setProcessedHtml(post.html)
    }

    return undefined
  }, [isHtmlArticle, post.html])

  // Delegated click handler for copy buttons inside rendered HTML articles
  useEffect(() => {
    if (!isHtmlArticle || !articleRef.current) return undefined

    const container = articleRef.current

    const delegatedHandler = async (event) => {
      const btn = event.target.closest && event.target.closest('.copy-code-button')
      if (!btn) return
      const pre = btn.closest && btn.closest('pre')
      if (!pre) return
      const code = pre.querySelector('code') || pre
      if (!code) return

      // visual feedback helper
      const markCopied = () => {
        btn.textContent = 'Copied'
        btn.classList.add('copied')
        setTimeout(() => {
          btn.textContent = 'Copy'
          btn.classList.remove('copied')
        }, 1800)
      }

      try {
        await navigator.clipboard.writeText(code.innerText)
        markCopied()
      } catch (err) {
        // fallback to selection-based copy
        try {
          const range = document.createRange()
          range.selectNodeContents(code)
          const sel = window.getSelection()
          sel.removeAllRanges()
          sel.addRange(range)
          document.execCommand('copy')
          sel.removeAllRanges()
          markCopied()
        } catch (e) {
          // if even fallback fails, do nothing
        }
      }
    }

    container.addEventListener('click', delegatedHandler)

    return () => container.removeEventListener('click', delegatedHandler)
  }, [isHtmlArticle, processedHtml])

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 300)
  }, [])

  useThrottledScroll(handleScroll, 200)

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
          <div ref={articleRef} className="blog-article-html" dangerouslySetInnerHTML={{ __html: processedHtml }} />
        ) : (
          structuredBlocks.map((section) => (
            <section key={section.displayIndex} className="blog-article-section">
              {
                // make structured headings linkable too
              }
              <h2 id={String(section.headingText || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}>
                <span className="heading-index">{section.displayIndex}</span>
                <a className="heading-link" href={`#${String(section.headingText || '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`}>
                  {section.headingText}
                </a>
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
})

export default BlogArticleLayout

const aboutCopy = [
  'Backend Developer Who Builds Real Solutions',
  'I focus on building solid backend systems using Python, Django, and FastAPI.',
  'I care about clean architecture, efficient APIs, and reliable database design.',
  'Most of my work revolves around solving real problems with practical and scalable code.',
  'I’m constantly improving my craft and exploring better ways to build backend services.',
  'If you’re looking for someone who delivers results without the fluff, that’s what I do.'
]

const AboutMeSection = () => (
  <section id="about" className="about-me-section">
    <div className="about-me-header">
      <h2 className="about-me-title">ABOUT ME</h2>
      <p className="about-me-summary">
        I help teams ship dependable Python platforms without trading creativity for stability.
      </p>
    </div>
    <div className="about-me-content">
      <div className="about-me-paragraph">
        {aboutCopy.map((line) => (
          <p key={line} className="about-me-line">
            {line}
          </p>
        ))}
      </div>
      <div className="about-me-cta">
        <span className="about-me-callout">
          Want to see my projects?{' '}
          <a className="about-me-project-link" href="/v2/projects">
            Projects
          </a>
        </span>
        <span className="about-me-curiosity">
          <span className="about-me-curiosity-text">Curious about what I write?</span>{' '}
          <a className="about-me-blog-link" href="/v2/blog">
            Posts
          </a>
        </span>
        <span className="about-me-email">
          <span className="about-me-email-text">Feel free to reach out via</span>{' '}
          <a className="email-highlight" href="mailto:contact@mujtabaalmas.me">
            Email
          </a>
        </span>
      </div>
    </div>
  </section>
)

export default AboutMeSection

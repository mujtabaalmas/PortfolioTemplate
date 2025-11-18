const HeroSection = () => (
  <section id="hero" className="hero-section relative overflow-hidden rounded-3xl noise-overlay">
    <div className="hero-gradient" />
    <div className="hero-content">
      <div className="hero-left">
        <span className="badge hero-badge">Backend craftsmanship</span>
        <p className="hero-name text-gradient">MUJTABA ALMAS</p>
        <h1 className="hero-title">Backend Engineer crafting scalable APIs & systems.</h1>
        <p className="hero-description">Python Backend Developer · Django &amp; FastAPI · Backend Enthusiast</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Explore work</span>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7m0 0H7m10 0v10" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Say Hi</span>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a href="https://github.com/mujtabaalmas" className="btn btn-tertiary" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image-container glass-panel gradient-border">
          <div className="blur-spot blur-spot-1" />
          <div className="blur-spot blur-spot-2" />
          <img src="/assets/mujtaba.jpg" alt="Portrait of Mujtaba Almas" className="hero-image" />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection

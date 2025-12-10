import { memo } from 'react'

const ContactSection = memo(({ formStatus, isSubmitting, onSubmit }) => (
  <section id="contact" className="section-padding contact-section">
    <div className="contact-header">
      <h2>Contact Me</h2>
    </div>
    <div className="contact-grid">
      <div className="glass-panel p-8 contact-form-card">
        <div className="contact-form-header">
          <p className="contact-form-label">Project brief</p>
          <h3>Tell me about the challenge</h3>
          <p>Share the problem space, timelines, and any must-have integrations.</p>
        </div>
        <form id="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Project notes</label>
            <textarea id="message" name="message" autoComplete="off" required />
          </div>
          <button type="submit" className="btn btn-primary btn-large btn-submit" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending…' : 'Send message'}</span>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
          {formStatus.message && <div className={`form-message ${formStatus.type}`}>{formStatus.message}</div>}
        </form>
      </div>
      <div className="contact-sidebar">
        <div className="glass-panel p-6 contact-profile-card">
          <div className="contact-profile">
            <div className="contact-profile-avatar">
              <img src="/v2/assets/logo.png" alt="Mujtaba Almas avatar" loading="lazy" />
            </div>
            <div>
              <p className="contact-profile-eyebrow">Available for hire</p>
              <h3>Mujtaba Almas</h3>
              <p className="contact-profile-role">Python Backend Developer</p>
            </div>
          </div>
          <div className="contact-profile-meta">
            <span>SSA Soft</span>
            <span>Responds in &lt; 24h</span>
          </div>
          <div className="contact-profile-tags">
            <span>Python Programming</span>
            <span>REST API</span>
            <span>API Design</span>
          </div>
        </div>
        <div className="glass-panel p-6 contact-links-card">
          <p className="contact-links-label">Ways to reach me</p>
          <ul className="contact-links">
            <li>
              <a className="contact-link" href="mailto:contact@mujtabaalmas.me">
                <span>Email</span>
                <span className="contact-link-value">contact@mujtabaalmas.me</span>
              </a>
            </li>
            <li>
              <a className="contact-link" href="https://linkedin.com/in/mujtabaalmas" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <span className="contact-link-value">/in/mujtabaalmas</span>
              </a>
            </li>
            <li>
              <a className="contact-link" href="https://github.com/mujtabaalmas" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
                <span className="contact-link-value">@mujtabaalmas</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
))

export default ContactSection

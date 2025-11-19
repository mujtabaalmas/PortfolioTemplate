const ContactSection = ({ formStatus, isSubmitting, onSubmit, contactLinks, contactDetails }) => (
  <section id="contact" className="section-padding">
    <div className="section-header">
      <span className="section-eyebrow">Connect</span>
      <h2 className="section-title">Ship the next platform together</h2>
      <p className="section-description">Open for backend leadership, consulting, or fractional platform work.</p>
    </div>
    <div className="contact-grid mt-12">
      <div className="glass-panel p-8 contact-form-card">
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
        <div className="glass-panel p-8 contact-details-card">
          <p className="contact-details-label">DETAILS</p>
          <div className="contact-details">
            {contactDetails.map((detail) => (
              <p key={detail.label} className="contact-detail-item">
                <svg className="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={detail.iconPath} />
                </svg>
                {detail.label}
              </p>
            ))}
          </div>
        </div>
        <div className="glass-panel p-8 contact-links-card mt-6">
          <p className="contact-links-label">LINKS</p>
          <ul className="contact-links">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span>{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection

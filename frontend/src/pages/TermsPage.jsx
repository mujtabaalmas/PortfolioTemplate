import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body:
      'By accessing or using this site, you agree to these Terms of Service. If you do not agree, please discontinue use immediately.'
  },
  {
    title: '2. Use of Content',
    body:
      'You may reference the projects, articles, or code snippets showcased here for inspiration, but attribution is required for any public reuse. Commercial redistribution without written consent is prohibited.'
  },
  {
    title: '3. Feedback & Contact',
    body:
      'When you send a message through the contact form, you grant permission to respond via the supplied email and retain that correspondence for record keeping.'
  },
  {
    title: '4. Updates',
    body:
      'These terms may change over time to reflect new work or policies. The “Last updated” date below will reflect the latest revision.'
  }
]

const TermsPage = () => (
  <div className="container page-container legal-page">
    <section className="legal-hero">
      <p className="legal-eyebrow">Terms of Service</p>
      <h1>How to use this site respectfully</h1>
      <p className="legal-date">Last updated: November 18, 2025</p>
    </section>

    <section className="legal-content">
      {sections.map((item) => (
        <article key={item.title} className="legal-section">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
      ))}
    </section>

    <Footer />
  </div>
)

export default TermsPage

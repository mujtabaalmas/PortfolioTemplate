import Footer from '../components/Footer'

const PrivacyPage = () => (
  <div className="container legal-page">
    <section className="legal-hero">
      <p className="legal-eyebrow">Privacy Policy</p>
      <h1>How your data is handled</h1>
      <p className="legal-date">Last updated: November 18, 2025</p>
    </section>

    <section className="legal-content">
      <article className="legal-section">
        <h2>Information You Provide</h2>
        <p>
          The contact form collects your name, email, company, and message so I can respond to inquiries. This information is never sold or
          shared with third parties.
        </p>
      </article>
      <article className="legal-section">
        <h2>Analytics & Logs</h2>
        <p>
          Basic analytics may record page views and device details to understand how the site is performing. These insights stay aggregated and
          cannot identify you personally.
        </p>
      </article>
      <article className="legal-section">
        <h2>Data Retention</h2>
        <p>
          Messages sent through the site are retained only as long as necessary to continue the conversation or document prior work. You can
          request deletion at any time by emailing insights.mujtaba@gmail.com.
        </p>
      </article>
      <article className="legal-section">
        <h2>Updates</h2>
        <p>
          This policy may evolve as new features launch. Significant revisions will be noted with an updated date stamp and announced via the blog
          or change log.
        </p>
      </article>
    </section>

    <Footer />
  </div>
)

export default PrivacyPage

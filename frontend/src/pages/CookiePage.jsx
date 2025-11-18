import Footer from '../components/Footer'

const CookiePage = () => (
  <div className="container legal-page">
    <section className="legal-hero">
      <p className="legal-eyebrow">Cookie Policy</p>
      <h1>Understanding cookies on this site</h1>
      <p className="legal-date">Last updated: November 18, 2025</p>
    </section>

    <section className="legal-content">
      <article className="legal-section">
        <h2>Essential Cookies</h2>
        <p>
          Core cookies keep the site secure and remember simple preferences such as dark/light mode choices. They do not track you across other
          websites.
        </p>
      </article>
      <article className="legal-section">
        <h2>Analytics Cookies</h2>
        <p>
          Anonymous analytics may set cookies so I can see which sections get the most interest. These metrics stay aggregated and are only used
          to plan future improvements.
        </p>
      </article>
      <article className="legal-section">
        <h2>Control & Opt-Out</h2>
        <p>
          You can clear or block cookies within your browser settings at any time. Doing so will not block access to the content, though certain
          preferences may reset.
        </p>
      </article>
      <article className="legal-section">
        <h2>Questions</h2>
        <p>
          For any cookie or privacy questions, reach out directly at insights.mujtaba@gmail.com so I can clarify how data is being handled.
        </p>
      </article>
    </section>

    <Footer />
  </div>
)

export default CookiePage

import { EXPERIENCE_ITEMS } from '../constants/content'

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="section-header">
      <span className="section-eyebrow">Experience</span>
      <h2 className="section-title">Journey so far</h2>
      <p className="section-description">A timeline of product teams, outcomes, and impact areas.</p>
    </div>
    <div className="experience-timeline mt-12">
      {EXPERIENCE_ITEMS.map((item) => (
        <article key={item.period} className="experience-item">
          <div className="timeline-dot" />
          <p className="experience-period">{item.period}</p>
          <h3 className="experience-title">{item.role}</h3>
          <p className="experience-summary">{item.summary}</p>
          <ul className="experience-highlights">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

export default ExperienceSection

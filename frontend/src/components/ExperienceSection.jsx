import { EXPERIENCE_ITEMS } from '../constants/content'

const ExperienceSection = () => {
  const timelineEntries = [...EXPERIENCE_ITEMS]

  return (
    <section id="experience" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Journey so far</h2>
      </div>
      <div className="experience-layout mt-12">
        <div className="experience-timeline">
          {timelineEntries.map((item, index) => {
            const sequence = String(timelineEntries.length - index).padStart(2, '0')

            return (
              <div key={item.period} className="experience-item">
                <div className="experience-marker" aria-hidden="true">
                  <span className="experience-dot" />
                  {index !== timelineEntries.length - 1 && <span className="experience-connector" />}
                </div>
                <article className="experience-card glass-panel gradient-border">
                  <div className="experience-card-header">
                    <span className="experience-period-pill">{item.period}</span>
                    <span className="experience-step">#{sequence}</span>
                  </div>
                  <h3 className="experience-title">{item.role}</h3>
                  <p className="experience-summary">{item.summary}</p>
                  <div className="experience-divider" aria-hidden="true" />
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

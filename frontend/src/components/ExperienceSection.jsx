import { memo } from 'react'
import { EXPERIENCE_ITEMS } from '../constants/content'

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding experience-modern">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">A timeline of my professional journey</p>
      </div>
      
      <div className="experience-container">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <article 
            key={item.period} 
            className="experience-entry"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="experience-header">
              <div className="experience-meta">
                <time className="experience-date">{item.period}</time>
                <div className="experience-connector-dot" />
              </div>
              <div className="experience-content">
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-description">{item.summary}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="experience-achievements">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <svg className="achievement-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default memo(ExperienceSection)

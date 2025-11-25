import { memo, useMemo } from 'react'
import { gradientClasses, SLIDER_ITEMS } from '../constants/content'

const skillLogoMap = SLIDER_ITEMS.reduce((acc, item) => {
  acc[item.label.toLowerCase()] = item.logoSrc
  return acc
}, {})

const getSkillLogo = (name) => skillLogoMap[name.toLowerCase()] || null

const getSkillLevelLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Beginner'
}

const SkillsSection = ({ skills, skillBarsActive }) => {
  const skillCards = useMemo(
    () =>
      skills.map((skill, index) => {
        const logoSrc = getSkillLogo(skill.name)
        return (
          <div
            key={skill.name}
            className="skill-card glass-panel fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <div className="skill-identity">
                <div className="skill-card-logo">
                  {logoSrc ? (
                    <img src={logoSrc} alt={`${skill.name} logo`} loading="lazy" />
                  ) : (
                    <span>{skill.name.charAt(0)}</span>
                  )}
                </div>
                <div className="skill-info">
                  <span className="skill-label">{getSkillLevelLabel(skill.level)}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          <div className="skill-bar-container">
            <div
              className={`skill-bar ${gradientClasses[index % gradientClasses.length]}`}
              style={{ width: skillBarsActive ? `${skill.level}%` : '0%' }}
            />
          </div>
          </div>
        )
      }),
    [skillBarsActive, skills]
  )

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">API fluency backed by production mileage</h2>
      </div>
      <div id="skills-grid" className="grid grid-2 mt-12">
        {skillCards}
      </div>
    </section>
  )
}

export default memo(SkillsSection)

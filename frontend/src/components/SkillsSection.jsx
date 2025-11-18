import { useMemo } from 'react'
import { gradientClasses } from '../constants/content'

const getSkillLevelLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Beginner'
}

const SkillsSection = ({ skills, skillBarsActive }) => {
  const skillCards = useMemo(
    () =>
      skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-card glass-panel fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="skill-header">
            <div className="skill-info">
              <span className="skill-label">{getSkillLevelLabel(skill.level)}</span>
              <h3 className="skill-name">{skill.name}</h3>
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
      )),
    [skillBarsActive, skills]
  )

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">API fluency backed by production mileage</h2>
        <p className="section-description">Data-driven look at the backend toolkit currently in rotation.</p>
      </div>
      <div id="skills-grid" className="grid grid-2 mt-12">
        {skillCards}
      </div>
    </section>
  )
}

export default SkillsSection

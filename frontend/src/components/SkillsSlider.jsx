import { useMemo, useState } from 'react'

const duplicateItems = (items, repeat = 2) => Array.from({ length: repeat }, () => items).flat()

const SkillsSlider = ({ items }) => {
  const [isPaused, setPaused] = useState(false)
  const sliderItems = useMemo(() => duplicateItems(items, 3), [items])

  const togglePause = (state) => () => setPaused(state)

  return (
    <section className="skill-slider-section">
      <div
        className={`skill-slider ${isPaused ? 'paused' : ''}`}
        onMouseEnter={togglePause(true)}
        onMouseLeave={togglePause(false)}
        onTouchStart={togglePause(true)}
        onTouchEnd={togglePause(false)}
      >
        <div className={`skill-slider-track ${isPaused ? 'paused' : ''}`}>
          {sliderItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="skill-slider-item">
              <div className="skill-logo" aria-hidden="true">
                <img src={item.logoSrc} alt={`${item.label} logo`} loading="lazy" />
              </div>
              <div className="skill-slider-text">
                <span className="skill-slider-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSlider

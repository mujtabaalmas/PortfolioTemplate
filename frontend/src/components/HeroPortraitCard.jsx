const HeroPortraitCard = ({ className = '' }) => {
  const classes = ['hero-portrait']
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')}>
      <div className="hero-image-container gradient-border glass-panel">
        <div className="blur-spot blur-spot-1" aria-hidden="true" />
        <div className="blur-spot blur-spot-2" aria-hidden="true" />
        <img className="hero-image" src="/assets/mujtaba.jpg" alt="Portrait of Mujtaba Almas" />
      </div>
    </div>
  )
}

export default HeroPortraitCard

import HeroCard from './HeroCard'

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section relative overflow-hidden rounded-3xl noise-overlay">
      <div className="hero-gradient" />
      <HeroCard />
    </section>
  )
}

export default HeroSection

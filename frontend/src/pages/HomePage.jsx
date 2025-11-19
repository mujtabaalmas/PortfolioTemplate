import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SkillsSlider from '../components/SkillsSlider'
import AboutMeSection from '../components/AboutMeSection'
import Footer from '../components/Footer'

const HomePage = ({ sliderItems }) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const target = location.state?.scrollTarget
    if (!target || typeof document === 'undefined') return undefined

    requestAnimationFrame(() => {
      const element = document.getElementById(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    navigate(location.pathname, { replace: true, state: null })
    return undefined
  }, [location, navigate])

  return (
    <div className="container">
      <main className="space-y-12">
        <HeroSection />
        <SkillsSlider items={sliderItems} />
        <AboutMeSection />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage

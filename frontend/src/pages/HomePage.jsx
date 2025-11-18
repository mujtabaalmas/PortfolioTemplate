import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SkillsSlider from '../components/SkillsSlider'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const HomePage = ({
  skills,
  projects,
  skillBarsActive,
  sliderItems,
  formStatus,
  isSubmitting,
  onSubmit,
  contactLinks,
  contactDetails
}) => {
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
        <SkillsSection skills={skills} skillBarsActive={skillBarsActive} />
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <BlogSection />
        <ContactSection
          formStatus={formStatus}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          contactLinks={contactLinks}
          contactDetails={contactDetails}
        />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage

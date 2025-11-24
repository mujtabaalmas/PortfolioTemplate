import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollRestoration from './components/ScrollRestoration'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import CookiePage from './pages/CookiePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import { FALLBACK_PROJECTS, FALLBACK_SKILLS, SLIDER_ITEMS } from './constants/content'
import './App.css'

const FETCH_TIMEOUT = 5000

const fetchWithTimeout = async (url, options = {}, timeout = FETCH_TIMEOUT) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, { ...options, signal: controller.signal })
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    return await response.json()
  } finally {
    clearTimeout(timeoutId)
  }
}

function App() {
  const [skills, setSkills] = useState(FALLBACK_SKILLS)
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [skillBarsActive, setSkillBarsActive] = useState(false)

  const backendUrl = typeof window !== 'undefined' ? (window.__APP_CONFIG__?.backendUrl ?? '').trim() : ''
  const backendAvailable = backendUrl.length > 0

  useEffect(() => {
    setSkillBarsActive(false)
    const timer = setTimeout(() => setSkillBarsActive(true), 150)
    return () => clearTimeout(timer)
  }, [skills])

  useEffect(() => {
    if (!backendAvailable) return
    let ignore = false

    ;(async () => {
      try {
        const [skillsPayload, projectsPayload] = await Promise.all([
          fetchWithTimeout(`${backendUrl}/skills`),
          fetchWithTimeout(`${backendUrl}/projects`)
        ])

        if (!ignore) {
          setSkills(skillsPayload?.skills?.length ? skillsPayload.skills : FALLBACK_SKILLS)
          setProjects(projectsPayload?.projects?.length ? projectsPayload.projects : FALLBACK_PROJECTS)
        }
      } catch (error) {
        console.warn('Falling back to static data:', error.message)
        if (!ignore) {
          setSkills(FALLBACK_SKILLS)
          setProjects(FALLBACK_PROJECTS)
        }
      }
    })()

    return () => {
      ignore = true
    }
  }, [backendAvailable, backendUrl])

  useEffect(() => {
    if (!formStatus.message) return undefined
    const timeoutId = setTimeout(() => setFormStatus({ type: '', message: '' }), 5000)
    return () => clearTimeout(timeoutId)
  }, [formStatus])

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name')?.toString().trim() ?? '',
      email: data.get('email')?.toString().trim() ?? '',
      company: data.get('company')?.toString().trim() ?? '',
      message: data.get('message')?.toString().trim() ?? ''
    }

    if (!payload.name || !payload.email || !payload.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    if (!backendAvailable) {
      setFormStatus({
        type: 'error',
        message: 'The backend is not available yet. Please reach out via insights.mujtaba@gmail.com'
      })
      return
    }

    try {
      setIsSubmitting(true)
      setFormStatus({ type: 'info', message: 'Sending message...' })
      await fetchWithTimeout(`${backendUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      setFormStatus({ type: 'success', message: "Thanks for reaching out! I'll reply soon." })
      form.reset()
    } catch (error) {
      console.error('Contact form submission failed', error)
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or email me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <BrowserRouter>
        <ScrollRestoration />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                skills={skills}
                projects={projects}
                skillBarsActive={skillBarsActive}
                sliderItems={SLIDER_ITEMS}
                formStatus={formStatus}
                isSubmitting={isSubmitting}
                onSubmit={handleContactSubmit}
              />
            }
          />
          <Route path="/skills" element={<SkillsPage skills={skills} skillBarsActive={skillBarsActive} />} />
          <Route path="/projects" element={<ProjectsPage projects={projects} />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                formStatus={formStatus}
                isSubmitting={isSubmitting}
                onSubmit={handleContactSubmit}
              />
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
           <Route path="/terms" element={<TermsPage />} />
           <Route path="/privacy" element={<PrivacyPage />} />
           <Route path="/cookies" element={<CookiePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const scrollIntoView = (targetId) => {
  if (typeof document === 'undefined') return
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const useSectionNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = useCallback(
    (rawTarget) => {
      if (!rawTarget) return
      const targetId = rawTarget.replace('#', '')
      if (!targetId) return

      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTarget: targetId } })
        return
      }

      scrollIntoView(targetId)
    },
    [location.pathname, navigate]
  )

  return goToSection
}

export default useSectionNavigation

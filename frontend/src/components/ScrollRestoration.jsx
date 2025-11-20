import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const ScrollRestoration = () => {
  const location = useLocation()
  const navigationType = useNavigationType()
  const scrollPositions = useRef(new Map())

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.history === 'undefined') {
      return undefined
    }

    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previous || 'auto'
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const positionsMap = scrollPositions.current

    return () => {
      const key = location.key || location.pathname
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
      positionsMap.set(key, scrollTop)
    }
  }, [location])

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined
    const key = location.key || location.pathname
    const positionsMap = scrollPositions.current

    if (navigationType === 'POP') {
      const stored = positionsMap.get(key)
      if (typeof stored === 'number') {
        window.scrollTo({ top: stored, left: 0 })
        return undefined
      }
    }

    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'auto' })
        return undefined
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location, navigationType])

  return null
}

export default ScrollRestoration

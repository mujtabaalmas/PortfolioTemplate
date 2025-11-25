import { useEffect, useRef } from 'react'

/**
 * Throttle utility for limiting function calls
 */
const throttle = (func, delay) => {
  let timeoutId = null
  let lastExecTime = 0

  return (...args) => {
    const currentTime = Date.now()
    const timeSinceLastExec = currentTime - lastExecTime

    if (timeSinceLastExec >= delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - timeSinceLastExec)
    }
  }
}

/**
 * Custom hook for throttled scroll events
 * @param {Function} callback - Function to call on scroll
 * @param {number} delay - Throttle delay in milliseconds (default: 200)
 */
export const useThrottledScroll = (callback, delay = 200) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const throttledScroll = throttle(() => {
      callbackRef.current()
    }, delay)

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [delay])
}

export default useThrottledScroll

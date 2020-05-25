import { useState, useCallback, useRef } from 'react'
import useEventListener from './useEventListener'

/**
 * Handle dropdown for element
 *
 * ! Let user decide when to set the state
 * @param {*} initialState
 * @param {string} eventType
 */
const useDropdown = (initialState = false, eventType) => {
  const [isDropdownOpen, setDropdownOpen] = useState(initialState)
  const elementRef = useRef(null)

  if (typeof eventType !== 'string') {
    throw new Error('Event should be a valid string')
  }

  const dropdownListener = useCallback(({ target }) => {
    if (!elementRef.current.contains(target)) {
      setDropdownOpen(false)
    }
  }, [])

  useEventListener(document, eventType, dropdownListener)

  return { elementRef, isDropdownOpen, setDropdownOpen }
}

export default useDropdown

import { useEffect, useState, useCallback, useRef } from 'react'

const useDropdown = (initialState = false, eventType) => {
  const [isDropdownOpen, setDropdownOpen] = useState(initialState)
  const elementRef = useRef(null)

  console.log(elementRef)

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

const useEventListener = (target, eventType, listener, ...rest) => {
  if (!(target instanceof EventTarget)) {
    throw new Error('Target element should be type of EventTarget Object')
  }

  useEffect(() => {
    target.addEventListener(eventType, listener, rest)

    return target.removeEventListener(eventType, listener)
  }, [target, eventType, listener, rest])
}

export default useDropdown

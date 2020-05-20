import { useEffect } from 'react'

export const useEventListener = (target, eventType, listener, ...rest) => {
  if (!(target instanceof EventTarget)) {
    throw new Error('Target element should be type of EventTarget Object')
  }

  useEffect(() => {
    target.addEventListener(eventType, listener, rest)

    return target.removeEventListener(eventType, listener)
  }, [target, eventType, listener, rest])
}

import { useEffect } from 'react'

const useEventListener = (target, ...args) => {
  useEffect(() => {
    if (!(target instanceof EventTarget)) {
      return
    }

    target.addEventListener(...args)

    return () => target.removeEventListener(...args)
  }, [target, args])
}

export default useEventListener

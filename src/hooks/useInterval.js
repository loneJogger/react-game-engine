import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {

  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const iterate = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(iterate, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval

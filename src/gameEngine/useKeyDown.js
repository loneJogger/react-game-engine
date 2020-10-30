import { useState, useEffect } from 'react'

const useKeyDown = (targetKey) => {

  const [ keyDown, setKeyDown ] = useState(false)

  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyDown(true)
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyDown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return keyDown

}

export default useKeyDown

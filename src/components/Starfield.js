import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useInterval from '../gameEngine/useInterval'

const Starfield = () => {

  const WIDTH =  window.innerWidth
  const HEIGHT =  window.innerHeight
  const SPEED = 3

  const [ stars, setStars ] = useState([])

  const canvasRef = useRef(null)

  useEffect(() => {
    setStars(createStars(1000))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context, canvas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stars])

  useInterval(() => {
    updateStars(SPEED)
  }, 33)

  const createStars = (amount) => {
    const arr = []
    for (let i = 0; i < amount; i++) {
      const star = {
        x: Math.random()*1600-800,
        y: Math.random()*900-450,
        z: Math.random()*1000
      }
      arr.push(star)
    }
    return arr
  }

  const updateStars = (dist) => {
    const newStars = []
    stars.forEach(star => {
      const newStar = {
        x: star.x, y: star.y, z: star.z - dist
      }
      if (newStar.z <= 1) {
        newStar.z += 1000
      }
      newStars.push(newStar)
    })
    setStars(newStars)
  }

  const draw = (ctx, canvas) => {
    //clear for redraw
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //draw background
    ctx.fillStyle = 'rgb(17, 3, 7)'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //draw stars
    ctx.fillStyle = 'rgb(234,180,213)'
    const cx = WIDTH/2
    const cy = WIDTH/2
    stars.forEach(star => {
      const x = cx + star.x/(star.z*0.001)
      const y = cy + star.y/(star.z*0.001)
      ctx.fillRect(x, y, 1, 1)
    })
  }

  return (
    <Wrapper>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
`

export default Starfield

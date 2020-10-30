import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Canvas = props => {

  const WIDTH = '768'
  const HEIGHT = '512'
  const CARX = 336
  const CARY = 416

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (props.sprites.length > 0) {
      draw(context, canvas)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  const draw = (ctx, canvas) => {
    //clear for redraw
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //draw background
    ctx.fillStyle = 'rgb(0,0,200,0.5)'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //draw car
    if (props.isLeft) {
      ctx.drawImage(props.sprites[4], CARX, CARY)
    } else if (props.isRight) {
      ctx.drawImage(props.sprites[8], CARX - 22, CARY)
    } else {
      ctx.drawImage(props.sprites[0], CARX, CARY)
    }
  }

  return (
    <Wrapper>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        {...props}
      />
    </Wrapper>
  )
}

export default Canvas

const Wrapper = styled.div`
  justify-content: center;
`

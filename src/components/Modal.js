import { useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'
import useWindowResize from '../hooks/useWindowResize'

const Modal = props => {

  const size = useWindowResize()
  const canvasRef = useRef(null)

  const WIDTH =  size.width
  const HEIGHT =  size.height
  const MODAL_WIDTH = (size.width - 128) * .66
  const LINE_SPACE = 3
  const LINE_HEIGHT = 1
  const LINE_COLOR_HIGH = 'rgba(234,180,213,0.4)'
  const LINE_COLOR_LOW = 'rgba(234,180,213,0.2)'

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (props.isModal) {
      drawScan(context, canvas)
    } else {
      drawClear(context, canvas)
    }
  }, [props.isModal])

  const drawClear = (ctx, canvas) => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
  }

  const drawScan = (ctx, canvas) => {
    const lines = canvas.height / LINE_HEIGHT
    let top = 0
    for (let i = 0; i < lines; i++) {
      if (i%2) {
        ctx.fillStyle = LINE_COLOR_LOW
        ctx.fillRect(0, top, WIDTH, LINE_SPACE)
        top += LINE_SPACE
      } else {
        ctx.fillStyle = LINE_COLOR_HIGH
        ctx.fillRect(0, top, WIDTH, LINE_HEIGHT)
        top += LINE_HEIGHT
      }


    }
  }

  const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  `

  const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 32px;
    width: ${ MODAL_WIDTH }px;
    left: ${ (WIDTH - 128)/ 2 - MODAL_WIDTH / 2 }px;
    z-index: 3;
    background-color: #eab4d5;
    color: #110307;
    padding: 16px;
  `

  return (
    <Transition in={props.isModal} timeout={0}>
      {state => (
        <Wrapper visible={props.isModal} className={`modalAppear-${state}`}>
          <canvas
            ref={canvasRef}
            width={WIDTH - 128}
            height={HEIGHT - 128}
          />
          <ModalBox className={`modalBoxAppear-${state}`}>
            {props.children}
          </ModalBox>
        </Wrapper>
      )}
    </Transition>

  )

}

export default Modal

import React, { useState } from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'

const Game = props => {

  const [ paused, setPaused ] = useState(false)

  const cameraZoom = 64

  return (
    <GameBox>
      <Canvas
        camera={{
          position: [0, 0, 32],
          zoom: cameraZoom,
          near: 0.1,
          far: 64,
        }}
        orthographic
        noEvents
        gl2
        gl={{ antialias: false }}
        onContextMenu={e => e.preventDefault()}
      >
      </Canvas>
    </GameBox>
  )

}

const GameBox = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  height: 100%;
`

export default Game

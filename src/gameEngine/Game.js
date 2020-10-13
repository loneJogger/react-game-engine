import React from 'react'
import styled from 'styled-components'

import Canvas from './Canvas'

import useInterval from './useInterval'
import useKeyDown from './useKeyDown'

const Game = props => {

  //game loop
  useInterval(() => {
    //update gameState
    //render canvas
  }, 17)

  //setup keyboard
  const leftPress = useKeyDown('a')
  const rightPress = useKeyDown('d')
  const gasPress = useKeyDown('l')
  const breakPress = useKeyDown('k')

  return (
    <GameBox>
      <Canvas />
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

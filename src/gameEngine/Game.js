import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Canvas from './Canvas'

import useInterval from './useInterval'
import useKeyDown from './useKeyDown'
import useSpriteLoader from './useSpriteLoader'

const Game = props => {

  //load sprites
  const [ sprites, setSprites ] = useState([])
  const images = useSpriteLoader([
    '/images/car1.png',
    '/images/car2.png',
    '/images/car3.png',
    '/images/car4.png'
  ])
  useEffect(() => {
    setSprites(images)
  }, [])

  //setup keyboard
  const leftPress = useKeyDown('a')
  const rightPress = useKeyDown('d')
  const gasPress = useKeyDown('l')
  const breakPress = useKeyDown('k')

  //game loop
  useInterval(() => {
    //update gameState
    //render canvas
  }, 17)

  return (
    <GameBox>
      <Canvas
        sprites={sprites}
        isLeft={leftPress}
        isRight={rightPress}
      />
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

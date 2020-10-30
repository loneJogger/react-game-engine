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
    '/images/neutralCar1.png',
    '/images/neutralCar2.png',
    '/images/slightLeftCar1.png',
    '/images/slightLeftCar2.png',
    '/images/fullLeftCar1.png',
    '/images/fullLeftCar2.png',
    '/images/slightRightCar1.png',
    '/images/slightRightCar2.png',
    '/images/fullRightCar1.png',
    '/images/fullRightCar2.png'
  ])
  useEffect(() => {
    setSprites(images)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

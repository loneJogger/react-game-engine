import { useRef, useEffect, useState } from 'react'
import useWindowResize from '../gameEngine/useWindowResize'
import useInterval from '../gameEngine/useInterval'
import useKeyDown from '../gameEngine/useKeyDown'
import useSpriteLoader from '../gameEngine/useSpriteLoader'

const data = require('../gameEngine/data')

const Action = () => {

  const MOVEMENT_SPEED = 5
  const ANIMATION_SPEED = 6

  const size = useWindowResize()
  const canvasRef = useRef(null)

  //keyboard
  const leftPress = useKeyDown('a')
  const rightPress = useKeyDown('d')
  const upPress = useKeyDown('w')
  const downPress = useKeyDown('s')
  const interactPress = useKeyDown('q')

  //load sprites
  const images = useSpriteLoader([
    '/images/playerLeft1.png',
    '/images/playerLeft2.png',
    '/images/playerBack1.png',
    '/images/playerBack2.png',
    '/images/playerRight1.png',
    '/images/playerRight2.png',
    '/images/playerForward1.png',
    '/images/playerForward2.png',
    '/images/signPost.png'
  ])

  const [ currentRoom, setCurrentRoom ] = useState({})
  const [ roomIndex, setRoomIndex ] = useState(4)
  const [ player, setPlayer ] = useState({})
  const [ objects, setObjects ] = useState([])
  const [ sprites, setSprites ] = useState([])

  useEffect(() => {
    setPlayer({
      x: 400,
      y: 300,
      frame: 4,
      distance: 0,
      direction: 'left'
    })
    setSprites(images)
  }, [])

  useEffect(() => {
    setCurrentRoom(data.rooms[roomIndex])
    const roomObjs = []
    data.objects.forEach(object => {
      if (data.rooms[roomIndex].objects.includes(object.id)) {
        roomObjs.push(object)
      }
    })
    setObjects(roomObjs)
  }, [roomIndex])

  useEffect(() => {

  }, [player])

  useInterval(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(canvas, context)
    updatePlayer()
    checkForRoomChange(canvas)
  }, 33)

  const updatePlayer = () => {

    const isTurned = player.direction

    //handle movement
    if (leftPress) {
      setPlayer({
        x: player.x - MOVEMENT_SPEED,
        y: player.y,
        frame: player.frame,
        distance: player.distance + 1,
        direction: 'left'
      })
    }
    if (rightPress) {
      setPlayer({
        x: player.x + MOVEMENT_SPEED,
        y: player.y,
        frame: player.frame,
        distance: player.distance + 1,
        direction: 'right'
      })
    }
    if (upPress) {
      setPlayer({
        x: player.x,
        y: player.y - MOVEMENT_SPEED,
        frame: player.frame,
        distance: player.distance + 1,
        direction: 'up'
      })
    }
    if (downPress) {
      setPlayer({
        x: player.x,
        y: player.y + MOVEMENT_SPEED,
        frame: player.frame,
        distance: player.distance + 1,
        direction: 'down'
      })
    }

    //handle animation
    if (player.direction !== isTurned) {
      setPlayer({
        x: player.x,
        y: player.y,
        frame: player.frame,
        distance: ANIMATION_SPEED + 1,
        direction: player.direction
      })
    }
    if (player.distance >= ANIMATION_SPEED) {
      if (player.direction === 'left' && player.frame%2 === 0) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 1,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'left' && player.frame%2 === 1) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 0,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'up' && player.frame%2 === 0) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 3,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'up' && player.frame%2 === 1) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 2,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'right' && player.frame%2 === 0) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 5,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'right' && player.frame%2 === 1) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 4,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'down' && player.frame%2 === 0) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 7,
          distance: 0,
          direction: player.direction
        })
      } else if (player.direction === 'down' && player.frame%2 === 1) {
        setPlayer({
          x: player.x,
          y: player.y,
          frame: 6,
          distance: 0,
          direction: player.direction
        })
      }
    }
  }

  const checkForRoomChange = (canvas) => {

    //player is at the west of the screen
    if (player.x < 16 && currentRoom.westWall === false) {
      setRoomIndex(roomIndex - 1)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: canvas.width - 48,
        y: player.y,
        frame: player.frame,
        distance: player.distance,
        direction: player.direction
      })
    }
    //player is at the north of the screen
    if (player.y < 16 && currentRoom.northWall === false) {
      setRoomIndex(roomIndex + 4)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: player.x,
        y: canvas.height - 48,
        frame: player.frame,
        distance: player.distance,
        direction: player.direction
      })
    }
    //player is at the east of the screen
    if (player.x > canvas.width - 16 && currentRoom.eastWall === false) {
      setRoomIndex(roomIndex + 1)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: 48,
        y: player.y,
        frame: player.frame,
        distance: player.distance,
        direction: player.direction
      })
    }
    //player is at the south of the screen
    if (player.y > canvas.height - 16 && currentRoom.southWall === false) {
      setRoomIndex(roomIndex - 4)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: player.x,
        y: 48,
        frame: player.frame,
        distance: player.distance,
        direction: player.direction
      })
    }
  }

  const draw = (canvas, ctx) => {

    //clear for redraw
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //draw background
    ctx.fillStyle = 'rgb(185,152,67)'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //draw walls
    ctx.fillStyle = 'rgb(127,68,6)'
    if (currentRoom.westWall) {
      ctx.fillRect(0,0, 32, canvas.height)
    }
    if (currentRoom.northWall) {
      ctx.fillRect(0,0, canvas.width, 32)
    }
    if (currentRoom.eastWall) {
      ctx.fillRect(canvas.width, canvas.height, -32, -canvas.height)
    }
    if (currentRoom.southWall) {
      ctx.fillRect(0, canvas.height, canvas.width, -32)
    }

    //draw objects
    if (objects.length > 0) {
      objects.forEach(object => {
        ctx.drawImage(sprites[object.sprite], object.x - 32, object.y - 32)
      })

    }

    //draw player
    ctx.drawImage(sprites[player.frame], player.x - 32, player.y -32)

  }

  const homeBox = {
    padding: '64px',
    margin: '64px',
    zIndex: '2',
    position: 'absolute',
    top: '0',
    border: '1px solid #eab4d5',
    width: `${size.width - 256}px`,
    height: `${size.height - 256}px`
  }

  return (
    <div style={homeBox}>
      <canvas
        width={size.width - 256}
        height={size.height - 256}
        ref={canvasRef}
      />
    </div>
  )

}

export default Action

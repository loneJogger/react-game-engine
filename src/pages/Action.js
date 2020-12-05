import { useRef, useEffect, useState } from 'react'
import useWindowResize from '../gameEngine/useWindowResize'
import useInterval from '../gameEngine/useInterval'
import useKeyDown from '../gameEngine/useKeyDown'

const data = require('../gameEngine/data')

const Action = () => {

  const size = useWindowResize()
  const canvasRef = useRef(null)

  //keyboard
  const leftPress = useKeyDown('a')
  const rightPress = useKeyDown('d')
  const upPress = useKeyDown('w')
  const downPress = useKeyDown('s')

  const [ currentRoom, setCurrentRoom ] = useState({})
  const [ roomIndex, setRoomIndex ] = useState(1)
  const [ player, setPlayer ] = useState({})

  useEffect(() => {
    setPlayer({
      x: 400,
      y: 300
    })
  }, [])

  useEffect(() => {
    setCurrentRoom(data.rooms[roomIndex])
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
    if (leftPress) {
      setPlayer({
        x: player.x - 4,
        y: player.y
      })
    }
    if (rightPress) {
      setPlayer({
        x: player.x + 4,
        y: player.y
      })
    }
    if (upPress) {
      setPlayer({
        x: player.x,
        y: player.y - 4
      })
    }
    if (downPress) {
      setPlayer({
        x: player.x,
        y: player.y + 4
      })
    }
  }

  const checkForRoomChange = (canvas) => {

    //player is at the west of the screen
    if (player.x < 16 && currentRoom.westWall === false) {
      setRoomIndex(roomIndex - 1)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: canvas.width - 48,
        y: player.y
      })
    }
    //player is at the north of the screen
    if (player.y < 16 && currentRoom.northWall === false) {
      setRoomIndex(roomIndex + 4)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: player.x,
        y: canvas.height - 48
      })
    }
    //player is at the east of the screen
    if (player.x > canvas.width - 16 && currentRoom.eastWall === false) {
      setRoomIndex(roomIndex + 1)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: 48,
        y: player.y
      })
    }
    //player is at the south of the screen
    if (player.y > canvas.height - 16 && currentRoom.southWall === false) {
      setRoomIndex(roomIndex - 4)
      setCurrentRoom(data.rooms[roomIndex])
      setPlayer({
        x: player.x,
        y: 48
      })
    }
  }

  const draw = (canvas, ctx) => {

    //clear for redraw
    ctx.clearRect(0,0, canvas.width, canvas.height)

    //draw background
    ctx.fillStyle = 'rgb(17, 3, 7)'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    //draw walls
    ctx.fillStyle = 'rgb(234,180,213)'
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

    //draw player
    ctx.fillStyle = 'rgb(234,180,213)'
    ctx.fillRect(player.x - 16, player.y - 16, 32, 32)

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
        height={size.width * (3/4) - 256}
        ref={canvasRef}
      />
    </div>
  )

}

export default Action

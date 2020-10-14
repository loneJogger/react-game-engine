import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import * as THREE from 'three'
import { Canvas, useFrame } from 'react-three-fiber'

const Box = props => {
  const mesh = useRef(null)

  const [ hovered, setHover ] = useState(false)
  const [ active, setActive ] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Test = () => {

  const mount = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      (window.innerWidth / window.innerHeight),
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 )
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial( { color: '#86284f' } )
    const cube = new THREE.Mesh(geometry, material)
    scene.add( cube )
    scene.background = new THREE.Color( 0x110307 )
    camera.position.z = 5
    const animate = () => {
      requestAnimationFrame( animate )
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render( scene, camera )
    }
    animate()
    mount.current.appendChild(renderer.domElement)
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <p>Three.js render:</p>
          <div ref={mount} />
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <p>3-Fiber render:</p>
          <Canvas
            style={{ height: window.innerHeight/2, width: window.innerWidth/2 }}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </Canvas>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

export default Test

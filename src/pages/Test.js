import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

const Test = () => {

  const mount = useRef(null)

  useEffect(() => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(
      60,
      (window.innerWidth / window.innerHeight),
      0.1,
      1000
    )
    const renderer = new WebGLRenderer()
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 )
    const geometry = new BoxGeometry(1,1,1)
    const material = new MeshBasicMaterial( { color: '#00ff00' } )
    const cube = new Mesh(geometry, material)
    scene.add( cube )
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
          <p>Test...</p>
          <div ref={mount} />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

export default Test

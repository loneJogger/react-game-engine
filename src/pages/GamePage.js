import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Game from '../gameEngine/Game'

const GamePage = () => {

  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <p>Game...</p>
          <Game/>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  )
}

export default GamePage

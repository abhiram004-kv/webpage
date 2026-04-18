import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './GameDetail.css'

function GameDetail({ game, onBack }) {
  return (
    <div className="game-detail">
      <Container py-5>
        <Button variant="dark" onClick={onBack} className="mb-3">Back to Games</Button>
        <Row>
          <Col md={6}>
            <img src={game.image} alt={game.title} className="game-detail-image" />
          </Col>
          <Col md={6}>
            <h1>{game.title}</h1>
            <p className="game-category">{game.category}</p>
            <p className="game-description">{game.description || 'No description available.'}</p>
            <p className="game-price">{game.price || 'Price not available'}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GameDetail
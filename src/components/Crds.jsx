import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Crds.css'
import eldenring from "../assets/games/eldenring.jpg"
import cyberpunk from "../assets/games/cyberpunk.jpg"
import thelegendofzelda from "../assets/games/thelegendofzelda.jpg"
import fortnite from "../assets/games/fortnite.jpg"
import godofwar from "../assets/games/godofwar.jpg"
import minecraft from "../assets/games/minecraft.jpg"
import cod from "../assets/games/cod.jpg"
import ffvii from "../assets/games/ffvii.jpg"
import hogwartslegacy from "../assets/games/hogwartslegacy.jpg"

function Crds({ onViewDetails }) {
  const games = [
    {
      id: 1,
      title: 'Elden Ring',
      image: eldenring,
      category: 'Action RPG',
      description: 'An epic fantasy world created by Hidetaka Miyazaki and George R. R. Martin.',
      price: '₹4,999'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077',
      image: cyberpunk,
      category: 'RPG',
      description: 'An open-world action-adventure story set in the megalopolis of Night City.',
      price: '₹3,499'
    },
    {
      id: 3,
      title: 'The Legend of Zelda',
      image: thelegendofzelda,
      category: 'Adventure',
      description: 'Explore the vast kingdom of Hyrule and discover ancient secrets.',
      price: '₹4,999'
    },
    {
      id: 4,
      title: 'Fortnite',
      image: fortnite,
      category: 'Battle Royale',
      description: 'A free-to-play Battle Royale game with multiple game modes.',
      price: 'Free'
    },
    {
      id: 5,
      title: 'God of War',
      image: godofwar,
      category: 'Action',
      description: 'Embark on an emotional journey with Kratos and Atreus in Norse mythology.',
      price: '₹3,999'
    },
    {
      id: 6,
      title: 'Minecraft',
      image: minecraft,
      category: 'Sandbox',
      description: 'Build, explore, and survive in a blocky world of endless possibilities.',
      price: '₹1,299'
    },
    {
      id: 7,
      title: 'Call of Duty',
      image: cod,
      category: 'FPS',
      description: 'Experience intense multiplayer action and thrilling campaigns.',
      price: '₹4,499'
    },
    {
      id: 8,
      title: 'Final Fantasy VII',
      image: ffvii,
      category: 'JRPG',
      description: 'A classic RPG with unforgettable characters and a compelling story.',
      price: '₹2,999'
    },
    {
      id: 9,
      title: 'Hogwarts Legacy',
      image: hogwartslegacy,
      category: 'Fantasy RPG',
      description: 'Live the wizarding world as you create your own story at Hogwarts.',
      price: '₹3,999'
    }
  ]

  return (
    <Container id="games" fluid className="games-container py-5">
      <h2 className="games-title text-center mb-5">🎮 Featured Games</h2>
      <Row className="g-4">
        {games.map((game) => (
          <Col key={game.id} lg={4} md={6} sm={12} className="d-flex">
            <Card className="game-card w-100">
              <div className="game-image-container">
                {typeof game.image === 'string' && game.image.includes('.') ? (
                  <img src={game.image} alt={game.title} className="game-image" />
                ) : (
                  <div className="game-image">{game.image}</div>
                )}
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="game-title">{game.title}</Card.Title>
                <p className="game-category mb-2">{game.category}</p>
                <div className="button-group mt-auto">
                  <Button className="btn-view me-2" onClick={() => onViewDetails(game)}>
                    View Details
                  </Button>       
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Crds
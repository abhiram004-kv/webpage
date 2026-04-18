import React from 'react'
import { Container, Row, Col, Card, Button  , Collapse} from 'react-bootstrap'
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

function Crds() {
  const games = [
    {
      id: 1,
      title: 'Elden Ring',
      image: eldenring,
      category: 'Action RPG',
      description: 'An epic fantasy world created by Hidetaka Miyazaki and George R. R. Martin.'
    },
    {
      id: 2,
      title: 'Cyberpunk 2077',
      image: cyberpunk,
      category: 'RPG',
      description: 'An open-world action-adventure story set in the megalopolis of Night City.'
    },
    {
      id: 3,
      title: 'The Legend of Zelda',
      image: thelegendofzelda,
      category: 'Adventure',
      description: 'Explore the vast kingdom of Hyrule and discover ancient secrets.'
    },
    {
      id: 4,
      title: 'Fortnite',
      image: fortnite,
      category: 'Battle Royale',
      description: 'A free-to-play Battle Royale game with multiple game modes.'
    },
    {
      id: 5,
      title: 'God of War',
      image: godofwar,
      category: 'Action'
    },
    {
      id: 6,
      title: 'Minecraft',
      image: minecraft,
      category: 'Sandbox'
    },
    {
      id: 7,
      title: 'Call of Duty',
      image: cod,
      category: 'FPS'
    },
    {
      id: 8,
      title: 'Final Fantasy VII',
      image: ffvii,
      category: 'JRPG'
    },
    {
      id: 9,
      title: 'Hogwarts Legacy',
      image: hogwartslegacy,
      category: 'Fantasy RPG'
    }
  ]

  return (
    <Container fluid className="games-container py-5">
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
                <p className="game-price mb-3">{game.price}</p>
                <div className="button-group mt-auto">
                  <Button className="btn-view me-2"
                  data-bs-toggle="collapse"
                  data-bs-target={`#game-details-${game.id}`}
                  aria-expanded="false"
                  >
                    View Details
                  </Button>       
                </div>
                <div className='collapse mt-2' id={`game-details-${game.id}`}>
                  {/* <p className="game-description">{game.description}</p> */}
                  <div className='card card-body bg-dark text-white border-warning'>

                  </div>
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
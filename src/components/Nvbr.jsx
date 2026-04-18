import React, { useState } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nvbr.css'

function Nvbr() {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search:', searchInput)
  }

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container fluid className="px-4">
        {/* Brand */}
        <Navbar.Brand href="/" className="brand-text fw-bold">
          🎮 GAME CENTER
        </Navbar.Brand>
        <p className="brand-caption" style={{color:"whitesmoke"}}>A book about games</p>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar - Center */}
          <Form className="mx-auto search-form" onSubmit={handleSearch}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search games..."
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                variant="outline-light"
                className="search-btn"
                type="submit"
              >
                🔍
              </Button>
            </Form.Group>
          </Form>

          <Nav className="ms-auto nav-links">
            <Nav.Link href="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/browse" className="nav-link-custom">
              Browse
            </Nav.Link>
            <Nav.Link href="/details" className="nav-link-custom">
              Details
            </Nav.Link>
            <Button variant="outline-light" className="profile-btn ms-2">
              👤 Profile
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nvbr
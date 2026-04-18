import { useState } from 'react'
import Nvbr from './components/Nvbr'
import './App.css'
import Crds from './components/Crds'
import Hdr from './components/Hdr'
import GameDetail from './components/GameDetail'
import PgDetails from './components/pgdetails'

function App() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [page, setPage] = useState('home')

  const scrollToGames = () => {
    const target = document.getElementById('games')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleHomeClick = () => {
    setSelectedGame(null)
    setPage('home')
    setTimeout(scrollToGames, 50)
  }

  return (
    <>
      <Nvbr onDetailsClick={() => { setPage('details'); setSelectedGame(null) }} onHomeClick={handleHomeClick} />
      <div style={{ padding: '0rem' }} />
      <Hdr />
      {page === 'details' ? (
        <PgDetails />
      ) : selectedGame ? (
        <GameDetail game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <Crds onViewDetails={(game) => { setSelectedGame(game); setPage('home') }} />
      )}
    </>
  )
}

export default App

import { useState } from 'react'
import Nvbr from './components/Nvbr'
import './App.css'
import Crds from './components/Crds'
import Hdr from './components/Hdr'
import GameDetail from './components/GameDetail'

function App() {
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <>
      <Nvbr />
      <div style={{ padding: '0rem' }}>
      
      </div>
      <Hdr/>
      {selectedGame ? (
        <GameDetail game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <Crds onViewDetails={setSelectedGame} />
      )}
    </>
  )
}

export default App

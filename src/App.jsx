import { useState } from 'react'
import Nvbr from './components/Nvbr'
import './App.css'
import Crds from './components/Crds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nvbr />
      <div style={{ padding: '2rem' }}>
        <h1 align="center"  >Welcome to Game Master</h1>
      </div>
      <Crds></Crds>
    </>
  )
}

export default App

import { useState } from 'react'
import Nvbr from './components/Nvbr'
import './App.css'
import Crds from './components/Crds'
import Hdr from './components/Hdr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nvbr />
      <div style={{ padding: '0rem' }}>
        {/* <h1 align="center"  >Welcome to Game Master</h1> */}
      </div>
      <Hdr/>
    
      <Crds></Crds>
    </>
  )
}

export default App

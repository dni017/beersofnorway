import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hjem from './pages/Hjem'
import Byer from './pages/Byer'
import Pubcrawl from './pages/Pubcrawl'
import Omoss from './pages/Omoss'
import './App.css'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/byer" element={<Byer />} />
        <Route path="/pubcrawl" element={<Pubcrawl />} />
        <Route path="/omoss" element={<Omoss />} />
      </Routes>
    </>
  )
}

export default App
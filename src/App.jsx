// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hjem from './pages/Hjem'
import Byer from './pages/Byer'
import Pubcrawl from './pages/Pubcrawl'
import Omoss from './pages/Omoss'
import Login from './pages/Login'
import Signup from './pages/Signup'
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

        {/* Auth-sider */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App